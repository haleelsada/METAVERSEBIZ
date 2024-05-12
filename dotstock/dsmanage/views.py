from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import serializers, status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import User, Transaction, Chatbot, Portfolio
from .serializers import UserSerializer
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate, login
from rest_framework.decorators import api_view, renderer_classes
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated
import google.generativeai as genai
import os
import requests
from bs4 import BeautifulSoup


class Index(APIView):
    #permission_classes = [IsAuthenticated]

    def get(self, request):
        return Response({"message": "Hello, world!"})

class SignupView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response({"message": "User created successfully"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class LoginView(APIView):
    def post(self, request):
        usermail = request.data.get('email')
        password = request.data.get('password')
        #user = authenticate(username=username, password=password)
        print(usermail,password)
        try:
            user = User.objects.get(email=usermail)
            user = authenticate(username=user.username, password=password)
            if user:
                token, _ = Token.objects.get_or_create(user=user)
                return Response({'token': token.key})
            else:
                return Response({"error": "Wrong Credentials, please try again"}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e: return Response({"error":str(e)},status=status.HTTP_400_BAD_REQUEST)



class UserView(APIView):
    """
    Retrieve user details.
    """
    def get(self, request, user_id, format=None):
        try:
            user = User.objects.get(pk=user_id)
            all_transaction = Transaction.objects.filter(user=user)
            all_portfolio = Portfolio.objects.filter(user = user)
            transactions = []
            portfolio = []
            for i in all_transaction:
                transactions.append([i.transaction_name, i.transaction_time, i.price, i.no_of_stocks, i.details])
            
            for i in all_portfolio:
                portfolio.append([i.transaction_name, i.no_of_stocks])
            user_data = {
                'username': user.username,
                'balance': user.profile.balance,
                'transactions': transactions,
                'portfolio': portfolio,
            }
            return Response(user_data)
        except Exception as e:
            return Response({'Error':str(e)})
    

    
class TransactionView(APIView):
    """
    Add a new transaction.
    """
    def post(self, request, format=None):
        try:
            transaction_name_=request.data.get('transaction_name')
            price_=int(request.data.get('price'))
            no_of_stocks_=int(request.data.get('no_of_stocks'))
            details_=request.data.get('details', '')
            user = User.objects.get(pk=request.data['user_id'])
            transaction = Transaction(
                user=user,
                transaction_name=transaction_name_,
                price=price_,
                no_of_stocks=no_of_stocks_,
                details=details_.lower()
            )
            if (details_=='buy') or (details_=='Buy'):
                if user.profile.balance<(float(price_) * int(no_of_stocks_)):
                    return Response({'response':'Transaction failed, don\'t have enough balance'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
                if not Portfolio.objects.filter(user=user, stock=transaction_name_).exists():
                    portfolio = Portfolio(user=user, stock=transaction_name_, no_of_stocks=no_of_stocks_)
                    portfolio.save()
                else:
                    portfolio = Portfolio.objects.get(user=user, stock=transaction_name_)
                    portfolio.no_of_stocks+=no_of_stocks_
                    portfolio.save()

                user.profile.balance = float(user.profile.balance) - (float(price_) * int(no_of_stocks_))
                user.profile.save()

            elif (details_=='sell') or (details_=='Sell'):
                if not Portfolio.objects.filter(user=user, stock=transaction_name_).exists():
                    return Response({'response':'Transaction failed, Stock doesn\'t exist in portfolio'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
                total_stocks = Portfolio.objects.get(user = user, stock = transaction_name_).no_of_stocks

                if total_stocks<no_of_stocks_:
                    return Response({'response':'Transaction failed, Not enough stock to sell'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
                elif total_stocks==no_of_stocks_:
                    portfolio = Portfolio.objects.get(user=user, stock=transaction_name_)
                    portfolio.delete()
                    
                elif total_stocks>no_of_stocks_:
                    portfolio = Portfolio.objects.get(user=user, stock=transaction_name_)
                    portfolio.no_of_stocks-=no_of_stocks_
                    portfolio.save()

                user.profile.balance = float(user.profile.balance) + (float(price_) * int(no_of_stocks_))
                user.profile.save()
            user.save()
            transaction.save()
            print('new transaction finished')
            return Response({'response':'New transaction added succesfully'},status=status.HTTP_200_OK)
        except Exception as e:
            raise e
            return Response({'response':'transaction failed with error :'+str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
class Chat(APIView):
    """
    Manage chatbot
    """
    def __init__(self):
        genai.configure(api_key= os.getenv('API'))
        self.model = genai.GenerativeModel('gemini-pro')
        self.prompt="you are a intelligent AI Bot, talk with Human and answer his queries briefly"

    def post(self, request, userid, format=None):
        try:
            if Chatbot.objects.filter(user__id=userid).exists():
                user = Chatbot.objects.get(user__id=userid)
                chat = user.chat
                question = request.data.get('question')
                chat = chat+"\nHuman:"+question+ "\nAI:"
                response = self.model.generate_content(self.prompt+chat)
                chat = chat+response.text
                user.chat = chat
                user.save()
                return Response({'Response':response.text}, status=status.HTTP_200_OK)
            else:
                user=User.objects.get(pk=userid)
                question = request.data.get('question')
                chat = "\nHuman:"+question+ "\nAI:"
                response = self.model.generate_content(self.prompt+chat)
                chat = chat+response.text
                user = Chatbot(user=user,chat=chat)
                user.save()
                return Response({'Response':response.text,"chatid":user.id}, status=status.HTTP_201_CREATED)

        except Exception as e:
            return Response({'Error':str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)    

    def get(self, request, userid, format=None):
        try:
            if Chatbot.objects.filter(user__id=userid).exists():
                user = Chatbot.objects.get(user__id=userid)
                chat = user.chat
                return Response({'chat':chat}, status=status.HTTP_200_OK)
            else:
                return Response({'chat':'',}, status=status.HTTP_404_NOT_FOUND)

        except Exception as e:
            return Response({'Error':str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)       

class Search(APIView):
    """
    Retrieve user details.
    """
    def get(self, request, query, format=None):
        try:
            query=query.strip()
            query=query.replace(' ','+')
            print(query)
            url = f'https://www.screener.in/api/company/search/?q={query}&v=3&fts=1'
            #print(url)
            
            response = requests.get(url)
            
            datas = response.json()[:-1]
            result=[]
            if len(datas)==0:
                return Response({'Response':[{'name':"no stock found", 'id':'', 'price':'', 'movement':''}]}, status=status.HTTP_404_NOT_FOUND)
            #print(len(datas))
            for data in datas:
                id = data['url'].split('/')[2]
                url = f'https://www.screener.in/company/{id}/consolidated/'
                response = requests.get(url)
                soup = BeautifulSoup(response.text, 'html.parser')
                top_div = soup.find('div', id="top").find('div',class_='font-size-18 strong line-height-14')

                texts = []
                for child in top_div.descendants:
                    if (child.name == None) and (child.strip()!=''): 
                        texts.append(child.strip().replace(' ',''))
                texts=texts[:2]

                result.append({'name':data['name'], 'id':id, 'price':texts[0], 'movement':texts[1]})
            return Response({'Response':result}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'Error':str(e)})
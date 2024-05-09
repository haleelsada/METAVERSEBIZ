from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import serializers, status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import User, Transaction, Chatbot
from .serializers import UserSerializer
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate, login
from rest_framework.decorators import api_view, renderer_classes
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated
import google.generativeai as genai



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
            transactions = []
            for i in all_transaction:
                transactions.append([i.transaction_name, i.transaction_time, i.price, i.no_of_stocks, i.details])
            user_data = {
                'username': user.username,
                'balance': user.profile.balance,
                'transactions': transactions
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
            price=request.data.get('price')
            no_of_stocks_=request.data.get('no_of_stocks')
            details=request.data.get('details', '')
            user = User.objects.get(pk=request.data['user_id'])
            transaction = Transaction(
                user=user,
                transaction_name=transaction_name_,
                price=price,
                no_of_stocks=no_of_stocks_,
                details=details
            )
            if (details=='buy') or (details=='Buy'):
                if user.profile.balance<(float(price) * int(no_of_stocks_)):
                    return Response('Transaction failed, don\'t have enough balance')
                user.profile.balance = float(user.profile.balance) - (float(price) * int(no_of_stocks_))
            elif (details=='sell') or (details=='Sell'):
                stock_exists = Transaction.objects.filter(transaction_name=transaction_name_,status='open')
                if not stock_exists:
                    return Response('Transaction failed, Stock not in portfolio to sell')
                if stock_exists.no_of_stocks>no_of_stocks_:
                    return Response('Transaction failed, Not enough stock to sell')
                elif stock_exists.no_of_stocks==no_of_stocks_:
                    stock_exists.status = 'close'
                    stock_exists.save()
                elif stock_exists.no_of_stocks<no_of_stocks_:
                    stock_exists.no_of_stocks = stock_exists.no_of_stocks - no_of_stocks_
                    stock_exists.save()

                user.profile.balance = float(user.profile.balance) + (float(price) * int(no_of_stocks_))
            user.save()
            transaction.save()
            print('new transaction finished')
            return Response('new transaction added succesfully, id :'+str(transaction.id))
        except Exception as e:
            raise e
            return Response('transaction failed with error :'+str(e))
    
class Chat(APIView):
    """
    Manage chatbot
    """
    def __init__(self):
        genai.configure(api_key='API_KEY')
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


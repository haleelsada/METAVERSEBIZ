from django.urls import path
from . import views

urlpatterns = [
    path("", views.Index.as_view(), name="index"),
    path("login", views.LoginView.as_view(), name='login'),
    path('signup', views.SignupView.as_view(), name='signup'),
    path('user/<int:user_id>', views.UserView.as_view(), name='user_details'),
    path('transaction/<int:user_id>', views.TransactionView.as_view(), name='transaction_details'),
    path('transaction', views.TransactionView.as_view(), name='transaction_details'),
    path('chat/<int:userid>', views.Chat.as_view(), name='chats'),
]
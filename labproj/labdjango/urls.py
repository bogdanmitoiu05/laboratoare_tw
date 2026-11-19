from django.urls import path
from . import views


urlpatterns = [
    path('', views.loadingscreen, name='loadingscreen'),
    path('login/', views.login, name='login'),
    path('home/', views.home, name='home'),
    path('chatbot-login/', views.chatbotLogin, name='chatbotLogin'),
    path('chatbot/', views.chatbot, name='chatbot'),
    path('galerie/', views.galerie, name='galerie'),
    path('register/', views.register, name='register'),
    path('universities/', views.universities, name='universities'),
]
from django.urls import path
from . import views


urlpatterns = [
    path('', views.home, name='home'),
    path('login/', views.login, name='login'),
    path('loading/', views.loadingscreen, name='loadingscreen'),
    path('chatbot-login/', views.chatbotLogin, name='chatbotLogin'),
    path('chatbot/', views.chatbot, name='chatbot'),
    path('galerie/', views.galerie, name='galerie'),
    path('register/', views.register, name='register'),
    path('universities/', views.universities, name='universities'),
    path('api/', views.api_page, name='api_page'),
]
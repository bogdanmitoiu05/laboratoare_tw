from django.shortcuts import render

# Create your views here.

from django.shortcuts import render, HttpResponse
def home(request):
    return render(request, "./html/home.html")

def loadingscreen(request):
    return render(request, "./html/loading.html")

def login(request):
    return render(request, "./html/login.html")

def chatbotLogin(request):
    return render(request, "./html/chatbot-login.html")

def chatbot(request):
    return render(request, "./html/chatbot.html")

def galerie(request):
    return render(request, "./html/galerie.html")

def register(request):
    return render(request, "./html/register.html")

def universities(request):
    return render(request, "./html/universities.html")

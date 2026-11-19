from django.shortcuts import render

# Create your views here.

from django.shortcuts import render, HttpResponse
def home(request):
    return HttpResponse("hello world");

def loadingscreen(request):
    return render(request, "./html/loading.html")

def login(request):
    return render(request, "./html/login.html")
from django.shortcuts import render

def index_dark_page (request):
    return render (request , 'index_dark.html')
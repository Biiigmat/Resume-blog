from django.shortcuts import render

def index_dark_page (request):
    return render (request , 'blog/index_dark.html')

def project_single_page (request):
    return render (request , 'blog/project-single_dark.html')

def article_details_page (request):
    return render (request , 'blog/article-details_dark.html')

def index_page (request):
    return render (request , 'blog/index.html')

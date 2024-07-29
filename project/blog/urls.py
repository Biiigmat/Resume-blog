from django.urls import path
from .views import index_dark_page , project_single_page , article_details_page ,index_page

app_name='blog'

urlpatterns = [
    path('' , index_dark_page , name='index-dark'),
    path('project-single/' , project_single_page , name='project-single' ),
    path('article-details/', article_details_page , name='article-details-dark'),
    path('index/' , index_page , name='index')
]

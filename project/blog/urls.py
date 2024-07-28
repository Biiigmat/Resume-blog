from django.urls import path
from .views import index_dark_page

urlpatterns = [
    path('' , index_dark_page),
]

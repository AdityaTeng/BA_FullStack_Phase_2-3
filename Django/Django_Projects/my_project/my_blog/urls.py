from django.urls import path
from . import views

urlpatterns = [
    path("", views.index),
    path("blog_content/", views.view_post)
]
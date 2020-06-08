from django.urls import path
from . import views

urlpatterns = [
    path("home/", views.index),
    path("send_email/", views.send_email)
]
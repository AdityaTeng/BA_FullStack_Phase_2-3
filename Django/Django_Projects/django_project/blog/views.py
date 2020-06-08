from django.shortcuts import render
from django.http import HttpResponse
import requests
import json
from .models import Post
from django.contrib.auth.models import User

posts = json.loads(requests.get('https://jsonplaceholder.typicode.com/posts').text)
# posts = Post.objects.all()


# Create your views here.
def home(request):
    context = {
        'posts' : posts
    }
    return render(request, 'blog/home.html', context)

def about(request):
    return render(request, 'blog/about.html', {'title' : 'About'})
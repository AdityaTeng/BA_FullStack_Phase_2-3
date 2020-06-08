from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.response import Response
from .models import Songs
from .serializers import SongsSerializer
from rest_framework import viewsets
from rest_framework.decorators import api_view

# Create your views here.
class ListSongsView(generics.ListAPIView):
    """Provides a get method handler."""
    queryset = Songs.objects.all()
    serializer_class = SongsSerializer


# class SongsViewSet(viewsets.ModelViewSet):
#     queryset = Songs.objects.all().order_by('title')
#     serializer_class = SongsSerializer

@api_view(['GET', 'POST'])
def get_song(request):
    """GET and POST Song"""
    if request.method == 'GET':
        songs = Songs.objects.all()
        serializer = SongsSerializer(songs, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = SongsSerializer(data=request.data)
        if serializer.is_valid():
            print('True')
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
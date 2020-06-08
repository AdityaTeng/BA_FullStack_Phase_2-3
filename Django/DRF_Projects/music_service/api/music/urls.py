from django.urls import path, include
from .views import ListSongsView, get_song
# from . import views


urlpatterns = [
    path('', ListSongsView.as_view(), name="songs-all"),
    path('song/', get_song, name="get_song"),
]
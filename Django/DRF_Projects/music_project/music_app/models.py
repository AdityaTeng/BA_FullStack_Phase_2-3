from django.db import models

# Create your models here.
class Song(models.Model):
    title = models.CharField(max_length=50)
    artist = models.CharField(max_length=75)

    def __str__(self):
        return f"{self.artist} - {self.title}" 

from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    date_posted = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, default=1, on_delete=models.CASCADE)

    def __str__(self):
        return self.title

# For checking SQL code 
# python manage.py sqlmigrate <app_name> <migrateion_code>

# running the shell >> python manage.py shell
# from blog.models import Post
# from django.contrib.auth.models import User

# Get all objects from the table
    # User.objects.all()
    # User.objects.first()
    # user = User.objects.filter(username='Aditya')
    

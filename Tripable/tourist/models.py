from django.db import models
from django.contrib.auth.models import User
# # Create your models here.

# class login(models.Model):
#     userId = models.AutoField(primary_key=True)
#     username = models.CharField(max_length=100)
#     password = models.CharField(max_length=50)
#     # dob = models.DateField()
#     # age = models.IntegerField()
#     # gender = models.TextField()


class Customer(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)

from django.db import models
from django.core.exceptions import FieldDoesNotExist
# Create your models here.

class Hotels(models.Model):
    name = models.CharField(max_length=300)
    email = models.EmailField()

    #address
    landmark = models.CharField(max_length=50)
    city = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    country = models.CharField(max_length=50)
    pincode = models.IntegerField()

    #contacts
    prefix = models.CharField(max_length=4)
    phone = models.CharField(max_length=10)
    # phone=models.BigIntegerField(max_length=10)

    #accessiblity
    visual_impaired=models.BooleanField()
    wheelchair_user=models.BooleanField()
    hearing_impaired=models.BooleanField()
    speech_impaired=models.BooleanField()
    
    #extra
    facility = models.TextField()
    # rooms = models.IntegerField()
    # price = models.IntegerField()
    # ac_rooms = models.BooleanField()
    roomtype1=models.CharField(max_length=100,default="Regular")
    roomtype2=models.CharField(max_length=100,default="Regular")
    roomtype3=models.CharField(max_length=100,default="Regular")
    pricetype1=models.IntegerField(default=1000)
    pricetype2=models.IntegerField(default=1000)
    pricetype3=models.IntegerField(default=1000)
    facilityoftype1=models.TextField(default=" ")
    facilityoftype2=models.TextField(default=" ")
    facilityoftype3=models.TextField(default=" ")


    image=models.CharField(max_length=500,default=" ")

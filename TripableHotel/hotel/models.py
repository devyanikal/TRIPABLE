from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.contrib.auth import get_user_model
# Create your models here.

User = get_user_model

class UserManager(BaseUserManager):
    use_in_migrations = True
    def create_user(self, hotel_name ,username, email, password, **extra_fields):
        if not hotel_name:
            raise ValueError("Hotel name must be provided")
        if not username:
            raise ValueError("Username must be provided")
        if not email:
            raise ValueError("Email must be provided")
        if not password:
            raise ValueError('Password is not provided')

        extra_fields['email']=self.normalize_email(extra_fields['email'])
        hotel_user = self.model(hotel_name=hotel_name, **extra_fields)
        hotel_user.set_password(password)
        hotel_user.save(using = self.db)
        
        return hotel_user
    
    def create_superuser(self, hotel_name ,username, email, password, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_active', True)
        extra_fields.setdefault('is_superuser', True)

        return self.create_user(hotel_name,username, email, password, **extra_fields)



class HotelUser(AbstractUser):
    # Abstractbaseuser has password, last_login, is_active by default
    id=models.AutoField(primary_key=True)
    hotel_name = models.CharField(max_length=240, null=True)
    email = models.EmailField(max_length=254, null= True)
    username = models.CharField(unique=True, max_length=20, null = True)
    prefix = models.CharField(max_length = 4)
    mobile = models.CharField(max_length=10)
    # hotel_profile_image = models.ImageField(upload_to="profile")
    
    #address
    landmark = models.CharField(max_length=50)
    city = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    country = models.CharField(max_length=50)
    pincode = models.IntegerField(default=0)

    facility = models.TextField(default=" ")
    image=models.CharField(max_length=500,default=" ")

    #accessiblity
    visual_impaired=models.BooleanField(default=False)
    wheelchair_user=models.BooleanField(default=False)
    hearing_impaired=models.BooleanField(default=False)
    speech_impaired=models.BooleanField(default=False)

    #extra

    #name of type of room
    roomtype1=models.CharField(max_length=100, default= '')
    roomtype2=models.CharField(max_length=100, default= '')
    roomtype3=models.CharField(max_length=100, default= '')

    pricetype1=models.IntegerField(default=0)
    pricetype2=models.IntegerField(default=0)
    pricetype3=models.IntegerField(default=0)

    numOftype1 = models.IntegerField(default=0)
    numOftype2 = models.IntegerField(default=0)
    numOftype3 = models.IntegerField(default=0)

    facilityoftype1=models.CharField(max_length=500, default= '')
    facilityoftype2=models.CharField(max_length=500, default= '')
    facilityoftype3=models.CharField(max_length=500, default= '')

    

    objects = UserManager()

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['hotel_name', 'email']

    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'Users'
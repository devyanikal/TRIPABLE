from rest_framework import serializers
from .models import HotelUser as user

class user_serializer(serializers.ModelSerializer):
    class Meta:
        model = user
        fields = '__all__'

#for sign up
class add_hotel_serializer(serializers.Serializer):
    hotel_name = serializers.CharField(min_length = 2)
    username = serializers.CharField()
    email = serializers.EmailField()
    password = serializers.CharField(style={'input_type': 'password', 'placeholder': 'Password'})
    cpassword = serializers.CharField(style={'input_type': 'password', 'placeholder': 'Password'})


#extra
class  getData_serializer(serializers.ModelSerializer):
    class Meta:
        model = user
        fields = [
            'id','username', 'landmark', 'city', 'state', 'country','pincode','hotel_name','image','facility',
            'prefix', 'mobile', 'visual_impaired', 'wheelchair_user','hearing_impaired','speech_impaired',
            'roomtype1','pricetype1','numOftype1','facilityoftype1',
            'roomtype2','pricetype2','numOftype2','facilityoftype2',
            'roomtype3','pricetype3','numOftype3','facilityoftype3'
        ]

    # id = serializers.IntegerField()
    # # username = serializers.CharField(min_length = 2)
    # landmark = serializers.CharField(max_length=50)
    # city = serializers.CharField(max_length=50)
    # state = serializers.CharField(max_length=50)
    # country =serializers.CharField(max_length=50)
    # pincode =serializers.IntegerField(default=0)

    # prefix = serializers.CharField()
    # mobile = serializers.CharField()

    # visual_impaired= serializers.BooleanField(default=False)
    # wheelchair_user= serializers.BooleanField(default=False)
    # hearing_impaired= serializers.BooleanField(default=False)
    # speech_impaired= serializers.BooleanField(default=False)

    # roomtype1= serializers.CharField(max_length=100, default= '')
    # roomtype2= serializers.CharField(max_length=100, default= '')
    # roomtype3= serializers.CharField(max_length=100, default= '')

    # pricetype1= serializers.IntegerField(default=0)
    # pricetype2= serializers.IntegerField(default=0)
    # pricetype3= serializers.IntegerField(default=0)

    # numOftype1 = serializers.IntegerField(default=0)
    # numOftype2 = serializers.IntegerField(default=0)
    # numOftype3 = serializers.IntegerField(default=0)

    # facilityoftype1= serializers.CharField(max_length=500, default= '')
    # facilityoftype2= serializers.CharField(max_length=500, default= '')
    # facilityoftype3= serializers.CharField(max_length=500, default= '')


#for login
class hotel_login_serializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(style={'input_type': 'password', 'placeholder': 'Password'})
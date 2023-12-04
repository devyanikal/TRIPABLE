from rest_framework import serializers
from django.contrib.auth.models import User as customer

class user_serializer(serializers.ModelSerializer):
    class Meta:
        model = customer
        fields = [
            'first_name', 'last_name', 'username', 'email'
            # , 'password','cpassword'
        ]

class add_user_serializer(serializers.Serializer):
    first_name = serializers.CharField(min_length = 2)
    last_name = serializers.CharField(min_length = 2)
    username = serializers.CharField()
    email = serializers.EmailField()
    password = serializers.CharField(style={'input_type': 'password', 'placeholder': 'Password'})
    cpassword = serializers.CharField(style={'input_type': 'password', 'placeholder': 'Password'})

class login_serializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(style={'input_type': 'password', 'placeholder': 'Password'})
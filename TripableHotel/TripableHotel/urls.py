"""TripableHotel URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from hotel.views import *

# urlpatterns = [
#     path('admin/', admin.site.urls),
# ]

urlpatterns = [
    # path('admin/', admin.site.urls),
    #API urls
    path('hotel_api', hotel_view.as_view(), name ='hotel view'),

    #signup
    path('add_hotel_api', add_hotel_view.as_view(), name ='Add hotel view'),

    #login
    path('login_hotel_api', hotel_login_view.as_view(), name ='Login hotel view'),

    #Register data 
    # path('hoteldata_api', getData_api.as_view(), name ='getData hotel view'),
    path('hoteldata_api/<str:pk>/', getData_api.as_view(), name ='getData hotel view'),

    path('hotel_data', HotelUserList.as_view(), name ='hotel data view'),


    #template urls
    path('hotel_signup', hotel_register_page),
    path('hotel_registration/<int:user_id>/', hotel_getData_page, name = 'register_hotel'),
    path('hotel_getdata', hotel_getData_page, name ='hotel_getdata'),
    path('hotel_login', hotel_login),
    path('logout', logoutUser, name = 'logout')

    # path('hotel_login', hotel_get_page),
]
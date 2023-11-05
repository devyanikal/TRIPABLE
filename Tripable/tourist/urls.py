from django.urls import  include, re_path
# from api import views

# urlpattern = [
#     url(r'^login$', views.loginApi),
#     url(r'^login/([0-9]+)$')
# ]

# from django.urls import path,include
from rest_framework import routers

from .views import customer_view, customer_login_view

# router=routers.DefaultRouter()
# router.register(r'customer_api',customer_view, basename='customer_view')
urlpatterns=[
    re_path(r'customer_api',customer_view.as_view(), name = 'Customer View'),
    re_path(r'customer_login_api',customer_login_view.as_view(), name = 'Customer login View')
]
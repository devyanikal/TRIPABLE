from django.urls import  include, path
# from api import views

# urlpattern = [
#     url(r'^login$', views.loginApi),
#     url(r'^login/([0-9]+)$')
# ]

# from django.urls import path,include
from rest_framework import routers

from .views import customer_view, customer_login_view, LogoutView, GetCSRFToken, CheckAuthenticatedView

# router=routers.DefaultRouter()
# router.register(r'customer_api',customer_view, basename='customer_view')
urlpatterns=[
    path('customer_api',customer_view.as_view(), name = 'Customer View'),
    path('customer_login_api',customer_login_view.as_view(), name = 'Customer login View'),
    path('customer_logout', LogoutView.as_view() , name= 'logout view'),
    path('csrf_cookie', GetCSRFToken.as_view()),
    path('authenticated', CheckAuthenticatedView.as_view())
]
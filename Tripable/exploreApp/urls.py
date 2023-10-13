#from django.conf.urls import url
from django.conf.urls import url
from exploreApp import views;


urlpatterns = [
    url('explore/',views.PlaceList.as_view(),name="genericview")
]

#from django.conf.urls import url
from exploreApp import views
from django.conf.urls import url

urlpatterns = [
    #url(r'^explore$',views.explorePlaceApi),
    #url(r'^explore/([0-9]+)$',views.explorePlaceApi)
    url('explore/',views.explorePlaceApi)
]

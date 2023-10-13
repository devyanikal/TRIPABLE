from django.conf.urls import url
from exploreHotels import views;


urlpatterns = [
    url('hotels/',views.HotelList.as_view(),name="genericview")
]

from django.conf.urls import url
from django.urls import path
from exploreHotels import views;


urlpatterns = [
    path('hotels/',views.HotelList.as_view(),name="genericview"),
    path('hotel/<int:pk>',views.SingleHotel.as_view(),name="hotel"),
    path('create-checkout-session/<pk>/<num1>/<num2>/<num3>',views.CreateCheckoutSessionView.as_view(), name='checkout_session')
]

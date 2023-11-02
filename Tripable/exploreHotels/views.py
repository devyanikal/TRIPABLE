from django.shortcuts import render
from django.views.generic import TemplateView

# Create your views here.

from django.http import JsonResponse
from django.views.generic.detail import DetailView
from django.shortcuts import redirect
from rest_framework.response import Response
from rest_framework import status
from django_filters.rest_framework import DjangoFilterBackend
from exploreHotels.models import Hotels
from exploreHotels.serializer import ExploreHotelSerializer
from rest_framework.generics import ListCreateAPIView, RetrieveAPIView
from rest_framework.filters import SearchFilter
from django_filters.rest_framework import DjangoFilterBackend
from django.views import View
import stripe
from rest_framework.views import APIView
from django.conf import settings
from rest_framework import permissions
# Create your views here.

stripe.api_key=settings.STRIPE_SECRET_KEY

class HotelList(ListCreateAPIView):
    queryset=Hotels.objects.all()
    serializer_class=ExploreHotelSerializer
    filter_backends=[DjangoFilterBackend,SearchFilter]
    search_fields=['name','landmark','city','state','country','pincode']
    filterset_fields=['city','wheelchair_user','hearing_impaired','visual_impaired','speech_impaired']

class SingleHotel(RetrieveAPIView):
    queryset=Hotels.objects.all()
    serializer_class=ExploreHotelSerializer
    permission_classes=[permissions.AllowAny]


class CreateCheckoutSessionView(APIView):
    def post(self, request, *args, **kwargs):
        hotel_id=self.kwargs["pk"]
        #hotel_id = self.kwargs.get('pk')
        try:
            hotel=Hotels.objects.get(id=hotel_id)
            checkout_session = stripe.checkout.Session.create(
            line_items=[
                {
                    'price_data':{
                            'currency':'Inr',
                            'unit_amount':int(hotel.pricetype1)*100,
                            'product_data':{
                                'name':hotel.name,
                                'images':[hotel.image],
                            },
                        },
                    'quantity': 1,
                },
            ],
            metadata={
                    "product_id":hotel.id
                },
            payment_method_types=['card'],
            mode='payment',
            # success_url=settings.SITE_URL + '/?success=true&session_id={CHECKOUT_SESSION_ID}',
            success_url=settings.SITE_URL + '/?success=true&session_id={CHECKOUT_SESSION_ID}',
            cancel_url=settings.SITE_URL + '/?canceled=true',
        )
            return redirect(checkout_session.url)
        except:
            return Response(
                {'error':'Something went wrong when creating strip checkout session'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )


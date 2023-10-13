from django.shortcuts import render

# Create your views here.

from django.http.response import JsonResponse
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from exploreHotels.models import Hotels
from exploreHotels.serializer import ExploreHotelSerializer
from rest_framework.generics import ListCreateAPIView
from rest_framework.filters import SearchFilter
from django_filters.rest_framework import DjangoFilterBackend
# Create your views here.

class HotelList(ListCreateAPIView):
    queryset=exploreplace=Hotels.objects.all()
    serializer_class=ExploreHotelSerializer
    filter_backends=[DjangoFilterBackend,SearchFilter]
    search_fields=['name','landmark','city','state','country','pincode']
    filterset_fields=['city','wheelchair_user','hearing_impaired','visual_impaired','speech_impaired']
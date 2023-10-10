from django.http.response import JsonResponse
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from exploreApp.models import Explore_place
from exploreApp.serializer import ExploreSerializer
from rest_framework.filters import SearchFilter
from rest_framework.generics import ListCreateAPIView

# Create your views here.

class PlaceList(ListCreateAPIView):
    queryset=exploreplace=Explore_place.objects.all()
    serializer_class=ExploreSerializer
    filter_backends=[DjangoFilterBackend,SearchFilter]
    search_fields=['place_name','city','facility','About','location']

    filterset_fields=['city','wheelchair_user','hearing_impaired','visual_impaired','speech_impaired']
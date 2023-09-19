from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from exploreApp.models import Explore_place
from exploreApp.serializer import ExploreSerializer

# Create your views here.

@csrf_exempt
def explorePlaceApi(request,id=0):
    if request.method=='GET':
        exploreplace=Explore_place.objects.all()
        exploreplace_serializer=ExploreSerializer(exploreplace,many=True)
        return JsonResponse(exploreplace_serializer.data,safe=False)
    

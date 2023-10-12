from rest_framework import serializers
from exploreApp.models import Explore_place

class ExploreSerializer(serializers.ModelSerializer):
    class Meta:
        model=Explore_place
        fields=('place_id','place_name','visual_impaired','wheelchair_user','hearing_impaired','speech_impaired','city','facility','About','location','image')
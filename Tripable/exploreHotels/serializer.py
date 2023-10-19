from rest_framework import serializers
from exploreHotels.models import Hotels

class ExploreHotelSerializer(serializers.ModelSerializer):
    class Meta:
        model=Hotels
        fields=('id','name','email','landmark','city','state','country','pincode','prefix','phone','visual_impaired','wheelchair_user','hearing_impaired','speech_impaired','facility','roomtype1','roomtype2','roomtype3','pricetype1','pricetype2','pricetype3','facilityoftype1','facilityoftype2','facilityoftype3','image')
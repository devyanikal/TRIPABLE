from django.db import models
from django.core.exceptions import FieldDoesNotExist
import datetime
# Create your models here.

class Explore_place(models.Model):
    place_id=models.AutoField(primary_key=True)
    place_name=models.CharField(max_length=100)
    visual_impaired=models.BooleanField()
    wheelchair_user=models.BooleanField()
    hearing_impaired=models.BooleanField()
    speech_impaired=models.BooleanField()
    city=models.CharField(max_length=100)
    facility=models.TextField()
    About=models.TextField()
    location=models.CharField(max_length=500)
    image=models.CharField(max_length=500, default=" ")

    # def __str__(self):
    #     return self.place_name

# class Comment(models.Model):
#     # place = models.ForeignKey(Explore_place, related_name="comments", on_delete=models.CASCADE)
#     cid = models.AutoField(primary_key=True , default=0)
#     place_cid = models.IntegerField(default=0)
#     commenter_name = models.CharField(max_length=200, default='Default Name')
#     comment_body = models.TextField(default='comment body')
#     date_added = models.DateTimeField(auto_now_add=True)

    # def __str__(self):
    #     return '%s - %s' % (self.place.place_name, self.commenter_name)
from django.db import models

class Comment(models.Model):

    cid = models.AutoField(primary_key=True)
    place_cid = models.IntegerField(default=0)
    commenter_name = models.CharField(max_length=200, default='Default Name')
    comment_body = models.TextField(default='comment body')
    date_added = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.commenter_name


from django.contrib import admin
from django.urls import path
from django.conf.urls import url
from comment import views

urlpatterns = [
    url('comment/',views.CommentList.as_view(),name="genericview"),
    path('admin/', admin.site.urls),
]

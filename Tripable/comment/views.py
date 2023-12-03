from django.shortcuts import render

from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from comment.serializer import CommentSerializer
from comment.models import Comment
from rest_framework.generics import ListCreateAPIView

class CommentList(ListCreateAPIView):
    queryset=Comment.objects.all()
    serializer_class=CommentSerializer

# @csrf_exempt
# def commentApi(request,id=0):
#     if request.method=='GET':
#         comment = Comment.objects.all()
#         comment_serializer=CommentSerializer(comment,many=True)
#         return JsonResponse(comment_serializer.data,safe=False)
#     elif request.method=='POST':
#         comment_data=JSONParser().parse(request)
#         comment_serializer=CommentSerializer(data=comment_data)
#         if comment_serializer.is_valid():
#             comment_serializer.save()
#             return JsonResponse("Added Successfully",safe=False)
#         return JsonResponse("Failed to Add",safe=False)
#     elif request.method=='PUT':
#         comment_data=JSONParser().parse(request)
#         comment=Comment.objects.get(id=id)
#         comment_serializer=CommentSerializer(comment,data=comment_data)
#         if comment_serializer.is_valid():
#             comment_serializer.save()
#             return JsonResponse("Updated Successfully",safe=False)
#         return JsonResponse("Failed to Update")
#     elif request.method=='DELETE':
#         comment=Comment.objects.get(id=id)
#         comment.delete()
#         return JsonResponse("Deleted Successfully",safe=False)



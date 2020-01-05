from django.shortcuts import render
from django.http import HttpResponse
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from rest_framework import status
from assignproject.models import EmployeeDetails
from assignproject.serializers import AssignProjectDetailsSerializer
from assignproject.models import AssignProjectDetails
from django.core import serializers
import json

# Create your views here.
@csrf_exempt
# This function is responsible to fetch all assign project details, add assign project details and delete all assign project details to and from the database.
def assignproject_list(request):
    if request.method == 'GET':
        assignproject = AssignProjectDetails.objects.all()
        assignproject_serializer = AssignProjectDetailsSerializer(assignproject, many=True)
        return JsonResponse(assignproject_serializer.data, safe=False)

    elif request.method == 'POST':
        assignproject_data = JSONParser().parse(request)
        assignproject_serializer = AssignProjectDetailsSerializer(data=assignproject_data)
        if assignproject_serializer.is_valid():
            assignproject_serializer.save()
            return JsonResponse(assignproject_serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(assignproject_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        AssignProjectDetails.objects.all().delete()
        return HttpResponse(status=status.HTTP_204_NO_CONTENT)


@csrf_exempt
# This function is responsible to fetch assign project details, update assign project details and delete assign project details to and from the database based upon the id parameter.
def assignproject_detail(request, pk):
    try:
        assignproject = AssignProjectDetails.objects.get(pk=pk)
    except AssignProjectDetails.DoesNotExist:
        return HttpResponse(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        assignproject_serializer = AssignProjectDetailsSerializer(assignproject)
        return JsonResponse(assignproject_serializer.data)

    elif request.method == 'PUT':
        assignproject_data = JSONParser().parse(request)
        assignproject_serializer = AssignProjectDetailsSerializer(assignproject, data=assignproject_data)
        if assignproject_serializer.is_valid():
            assignproject_serializer.save()
            return JsonResponse(assignproject_serializer.data)
        return JsonResponse(assignproject_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        assignproject.delete()
        return HttpResponse(status=status.HTTP_204_NO_CONTENT)

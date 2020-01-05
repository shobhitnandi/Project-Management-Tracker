from django.shortcuts import render
from django.http import HttpResponse
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from rest_framework import status
from manager.models import ManagerDetails
from manager.serializers import ManagerDetailsSerializer


# Create your views here.
@csrf_exempt
# This function is responsible to fetch all manager details, add manager details and delete all manager details to and from the database.
def manager_list(request):
    if request.method == 'GET':
        managers = ManagerDetails.objects.all()
        managers_serializer = ManagerDetailsSerializer(managers, many=True)
        return JsonResponse(managers_serializer.data, safe=False)

    elif request.method == 'POST':
        managers_data = JSONParser().parse(request)
        managers_serializer = ManagerDetailsSerializer(data=managers_data)
        if managers_serializer.is_valid():
            managers_serializer.save()
            return JsonResponse(managers_serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(managers_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        ManagerDetails.objects.all().delete()
        return HttpResponse(status=status.HTTP_204_NO_CONTENT)


@csrf_exempt
# This function is responsible to fetch manager details, update manager details and delete manager details to and from the database based upon the id parameter.
def manager_detail(request, pk):
    try:
        manager = ManagerDetails.objects.get(pk=pk)
    except ManagerDetails.DoesNotExist:
        return HttpResponse(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        manager_serializer = ManagerDetailsSerializer(manager)
        return JsonResponse(manager_serializer.data)

    elif request.method == 'PUT':
        manager_data = JSONParser().parse(request)
        manager_serializer = ManagerDetailsSerializer(manager, data=manager_data)
        if manager_serializer.is_valid():
            manager_serializer.save()
            return JsonResponse(manager_serializer.data)
        return JsonResponse(manager_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        manager.delete()
        return HttpResponse(status=status.HTTP_204_NO_CONTENT)

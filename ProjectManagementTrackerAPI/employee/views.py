from django.shortcuts import render
from django.http import HttpResponse
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from rest_framework import status
from employee.models import EmployeeDetails
from employee.serializers import EmployeeDetailsSerializer, EmployeeDetailsWithJoinSerializer
from manager.models import ManagerDetails
from django.core import serializers
import json
from django.db import connection
# Create your views here.
@csrf_exempt
# This function is responsible to fetch all employee details, add employee details and delete all employee details to and from the database.
def employee_list(request):
    if request.method == 'GET':
        employees = EmployeeDetails.objects.all()
        employees_serializer = EmployeeDetailsSerializer(employees, many=True)
        return JsonResponse(employees_serializer.data, safe=False)

    elif request.method == 'POST':
        employees_data = JSONParser().parse(request)
        employees_serializer = EmployeeDetailsSerializer(data=employees_data)
        if employees_serializer.is_valid():
            employees_serializer.save()
            return JsonResponse(employees_serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(employees_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        EmployeeDetails.objects.all().delete()
        return HttpResponse(status=status.HTTP_204_NO_CONTENT)


@csrf_exempt
# This function is responsible to fetch employee details, update employee details  and delete employee details to and from the database based upon the id parameter.
def employee_detail(request, pk):
    try:
        employees = EmployeeDetails.objects.get(pk=pk)
    except EmployeeDetails.DoesNotExist:
        return HttpResponse(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        employees_serializer = EmployeeDetailsSerializer(employees)
        return JsonResponse(employees_serializer.data)

    elif request.method == 'PUT':
        employee_data = JSONParser().parse(request)
        employees_serializer = EmployeeDetailsSerializer(employees, data=employee_data)
        if employees_serializer.is_valid():
            employees_serializer.save()
            return JsonResponse(employees_serializer.data)
        return JsonResponse(employees_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        employees.delete()
        return HttpResponse(status=status.HTTP_204_NO_CONTENT)


from django.shortcuts import render
from django.http import HttpResponse
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from rest_framework import status
from projects.models import ProjectDetails
from projects.serializers import ProjectDetailsSerializer
from django.contrib.auth import authenticate

@csrf_exempt
# This function is responsible to fetch all projects details, add project details and delete all projects details to and from the database.
def project_list(request):
    if request.method == 'GET':
        projects = ProjectDetails.objects.all()
        projects_serializer = ProjectDetailsSerializer(projects, many=True)
        return JsonResponse(projects_serializer.data, safe=False)

    elif request.method == 'POST':
        projects_data = JSONParser().parse(request)
        projects_serializer = ProjectDetailsSerializer(data=projects_data)
        if projects_serializer.is_valid():
            projects_serializer.save()
            return JsonResponse(projects_serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(projects_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        ProjectDetails.objects.all().delete()
        return HttpResponse(status=status.HTTP_204_NO_CONTENT)


@csrf_exempt
# This function is responsible to fetch project details, update project details  and delete project details to and from the database based upon id parameter.
def project_detail(request, pk):
    try:
        project = ProjectDetails.objects.get(pk=pk)
    except ProjectDetails.DoesNotExist:
        return HttpResponse(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        project_serializer = ProjectDetailsSerializer(project)
        return JsonResponse(project_serializer.data)

    elif request.method == 'PUT':
        project_data = JSONParser().parse(request)
        project_serializer = ProjectDetailsSerializer(project, data=project_data)
        if project_serializer.is_valid():
            project_serializer.save()
            return JsonResponse(project_serializer.data)
        return JsonResponse(project_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        project.delete()
        return HttpResponse(status=status.HTTP_204_NO_CONTENT)


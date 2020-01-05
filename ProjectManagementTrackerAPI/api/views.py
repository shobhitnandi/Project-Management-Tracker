import json
from django.contrib.auth.models import User, Group
from django.http import QueryDict
from django.views.decorators.csrf import csrf_exempt
from rest_framework import viewsets
from rest_framework.decorators import api_view, permission_classes
from rest_framework.parsers import JSONParser
from rest_framework.permissions import AllowAny
from api.serializers import UserSerializer
from django.contrib.auth import authenticate
from django.http.response import JsonResponse
from rest_framework import status


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


@api_view(['POST'])
@permission_classes((AllowAny,))
@csrf_exempt
def user_login(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        q_data = QueryDict('', mutable=True)
        for key, value in data.items():
            if isinstance(value, list):
                for x in value:
                    q_data.update({key: x})
            else:
                q_data.update({key: value})

        response_data = {}
        user_name = q_data.get('username')
        pass_word = q_data.get('password')
        user = authenticate(username=user_name, password=pass_word)
        if user is not None:
            response_data['result'] = 'Success'
            response_data['username'] = user.username
            response_data['password'] = user.password
            response_data['email'] = user.email
            response_data['superuser'] = user.is_superuser
            return JsonResponse(response_data)
        else:
            response_data['result'] = 'Fail'
            return JsonResponse(response_data)

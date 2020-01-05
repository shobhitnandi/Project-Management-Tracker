from rest_framework import serializers
from manager.models import ManagerDetails


# This serializers class is responsible to convert complex data types to json so that it can be easily rendered.
class ManagerDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ManagerDetails
        fields = ('id',
                  'managername',
                  'designation',
                  'contactno',
                  'emailid'
                  )

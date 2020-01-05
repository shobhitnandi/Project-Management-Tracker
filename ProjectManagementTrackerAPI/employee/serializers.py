from rest_framework import serializers
from employee.models import EmployeeDetails
from manager.models import ManagerDetails
from manager.serializers import ManagerDetailsSerializer


# This serializers class is responsible to convert complex data types to json so that it can be easily rendered.


class EmployeeDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmployeeDetails
        fields = ('id',
                  'employeename',
                  'designation',
                  'managerid',
                  'contactno',
                  'emailid',
                  'skillsets'
                  )


class EmployeeDetailsWithJoinSerializer(serializers.ModelSerializer):
    managername = ManagerDetailsSerializer()
    class Meta:
        model = EmployeeDetails
        fields = (
            'employeename',
            'managername'
        )

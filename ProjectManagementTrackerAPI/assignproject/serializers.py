from rest_framework import serializers
from assignproject.models import AssignProjectDetails


# This serializers class is responsible to convert complex data types to json so that it can be easily rendered.
class AssignProjectDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = AssignProjectDetails
        fields = ('id',
                  'employeeid',
                  'projectid',
                  'startdate',
                  'enddate',
                  'completiontime',
                  'taskstatus',
                  'comment'
                  )

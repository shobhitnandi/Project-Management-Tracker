from rest_framework import serializers
from projects.models import ProjectDetails


# This serializers class is responsible to convert complex data types to json so that it can be easily rendered.
class ProjectDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectDetails
        fields = ('id',
                  'projectname',
                  'startdate',
                  'enddate',
                  'clientname'
                  )

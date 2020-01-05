from django.db import models
from datetime import datetime
from employee.models import EmployeeDetails
from projects.models import ProjectDetails

# Create your models here.
class AssignProjectDetails(models.Model):
    employeeid = models.ForeignKey(EmployeeDetails, on_delete=models.CASCADE)
    projectid = models.ForeignKey(ProjectDetails, on_delete=models.CASCADE)
    startdate = models.DateTimeField(default=datetime.now, blank=True)
    enddate = models.DateTimeField(default=datetime.now, blank=True)
    completiontime = models.IntegerField()
    taskstatus = models.CharField(max_length=200)
    comment = models.CharField(max_length=1024)
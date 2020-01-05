from django.db import models
from datetime import datetime


# Create your models here.
class ProjectDetails(models.Model):
    projectname = models.CharField(max_length=200)
    startdate = models.DateTimeField(default=datetime.now, blank=True)
    enddate = models.DateTimeField(default=datetime.now, blank=True)
    clientname = models.CharField(max_length=200)

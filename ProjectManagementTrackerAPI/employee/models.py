from django.db import models
from manager.models import ManagerDetails


# Create your models here.
class EmployeeDetails(models.Model):
    employeename = models.CharField(max_length=200)
    designation = models.CharField(max_length=200)
    managerid = models.ForeignKey(ManagerDetails, on_delete=models.CASCADE, related_name='managerid')
    contactno = models.BigIntegerField()
    emailid = models.EmailField(max_length=254)
    skillsets = models.CharField(max_length=200)

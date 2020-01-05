from django.db import models


# Create your models here.
class ManagerDetails(models.Model):
    managername = models.CharField(max_length=200)
    designation = models.CharField(max_length=200)
    contactno = models.BigIntegerField()
    emailid = models.EmailField(max_length=254)

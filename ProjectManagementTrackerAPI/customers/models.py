from django.db import models


# Create your models here.
class Customer(models.Model):
    customerid = models.IntegerField(blank=False, default=1)
    name = models.CharField(max_length=70, blank=False, default='')
    age = models.IntegerField(blank=False, default=1)
    active = models.BooleanField(default=False)

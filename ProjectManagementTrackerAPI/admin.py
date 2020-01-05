from django.contrib import admin
from assignproject.models import AssignProjectDetails
from customers.models import Customer
from employee.models import EmployeeDetails
from manager.models import ManagerDetails
from projects.models import ProjectDetails

admin.site.register(AssignProjectDetails)
admin.site.register(Customer)
admin.site.register(EmployeeDetails)
admin.site.register(ManagerDetails)
admin.site.register(ProjectDetails)

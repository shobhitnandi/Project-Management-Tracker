from django.test import TestCase, Client
from django.urls import reverse, resolve
from employee.models import EmployeeDetails
from manager.models import ManagerDetails
import json


class TestViews(TestCase):

    # This method will run prior to each test case for setting the default vales.
    def setUp(self):
        self.client = Client()
        self.list_employee = reverse('employee_list')
        self.list_employee_id = reverse('employee_details', kwargs={'pk': 4})

    # This method will test all the GET request to fetch the employee details.
    def test_employee_GET(self):
        response = self.client.get(self.list_employee)
        self.assertEquals(response.status_code, 200)

    # This method will test all the POST request to add the employee details.
    def test_employee_POST(self):
        ManagerDetails.objects.create(managername="Shobhit",
                                      designation="PM",
                                      contactno='92233720',
                                      emailid="s@gmail.com")

        manager = ManagerDetails.objects.get(managername="Shobhit")
        employee_data = {'employeename': "Shobhit",
                         'designation': "PM",
                         'managerid': manager.id,
                         'contactno': "92233720",
                         'emailid': "s@gmail.com",
                         'skillsets': "java"
                         }
        response = self.client.post(self.list_employee, employee_data, content_type='application/json')
        self.assertEquals(response.status_code, 201)

    # This method will test all the DELETE request to delete the employee details.
    def test_employee_DELETE(self):
        response = self.client.delete(self.list_employee)
        self.assertEquals(response.status_code, 204)

    # This method will test all the GET request to get the employee details if the id does not exists.
    def test_employee_GET_ID_Not_Exist(self):
        response = self.client.get('employee/' + str(4))
        self.assertEquals(response.status_code, 404)

    # This method will test all the GET request to get the employee details if the id exists.
    def test_employee_GET_ID_Exist(self):
        ManagerDetails.objects.create(managername="Shobhit",
                                      designation="PM",
                                      contactno='92233720',
                                      emailid="s@gmail.com")

        manager = ManagerDetails.objects.get(managername="Shobhit")
        EmployeeDetails.objects.create(employeename="Shobhit",
                                       designation="PM",
                                       managerid=manager,
                                       contactno="92233720",
                                       emailid="s@gmail.com",
                                       skillsets="java")
        employee = EmployeeDetails.objects.get(employeename="Shobhit")
        response = self.client.get('employee/' + str(employee.id))
        self.assertEquals(response.status_code, 404)

    # This method will test all the DELETE request to delete the employee details if the id does not exists.
    def test_employee_DELETE_ID_Not_Exist(self):
        response = self.client.delete(self.list_employee_id)
        self.assertEquals(response.status_code, 404)

    # This method will test all the DELETE request to delete the employee details if the id exists.
    def test_employee_DELETE_ID_Exist(self):
        ManagerDetails.objects.create(managername="Shobhit",
                                      designation="PM",
                                      contactno='92233720',
                                      emailid="s@gmail.com")

        manager = ManagerDetails.objects.get(managername="Shobhit")
        EmployeeDetails.objects.create(employeename="Shobhit",
                                       designation="PM",
                                       managerid=manager,
                                       contactno="92233720",
                                       emailid="s@gmail.com",
                                       skillsets="java")
        employee = EmployeeDetails.objects.get(employeename="Shobhit")
        response = self.client.delete(reverse('employee_details', kwargs={'pk': employee.id}))
        self.assertEquals(response.status_code, 204)

    # This method will test all the PUT request to update the employee details if the id does not exists.
    def test_employee_PUT_ID_Not_Exist(self):
        response = self.client.put(reverse('employee_details', kwargs={'pk': 4}))
        self.assertEquals(response.status_code, 404)

    # This method will test all the PUT request to update the employee details if the id exists.
    def test_employee_PUT_ID_Exist(self):
        ManagerDetails.objects.create(managername="Shobhit",
                                      designation="PM",
                                      contactno='92233720',
                                      emailid="s@gmail.com")

        manager = ManagerDetails.objects.get(managername="Shobhit")
        EmployeeDetails.objects.create(employeename="Shobhit",
                                       designation="PM",
                                       managerid=manager,
                                       contactno="92233720",
                                       emailid="s@gmail.com",
                                       skillsets="java")
        employee = EmployeeDetails.objects.get(employeename="Shobhit")
        employee_data = {'employeename': "Shobhit",
                         'designation': "PM",
                         'managerid': manager.id,
                         'contactno': "92233720",
                         'emailid': "s@gmail.com",
                         'skillsets': "java"
                         }
        response = self.client.put(reverse('employee_details', kwargs={'pk': employee.id}), employee_data,
                                   content_type='application/json')
        self.assertEquals(response.status_code, 200)

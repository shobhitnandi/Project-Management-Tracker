from django.test import TestCase, Client
from django.urls import reverse, resolve
from assignproject.models import AssignProjectDetails
from datetime import datetime
import json
from employee.models import EmployeeDetails
from manager.models import ManagerDetails
from projects.models import ProjectDetails


class TestViews(TestCase):

    # This method will run prior to each test case for setting the default vales.
    def setUp(self):
        self.client = Client()
        self.assign_project_list = reverse('assignproject_list')
        self.assign_project_details = reverse('assignproject_details', kwargs={'pk': 4})

    # This method will test all the GET request to fetch the assign project details.
    def test_assign_project_GET(self):
        response = self.client.get(self.assign_project_list)
        self.assertEquals(response.status_code, 200)

    # This method will test all the POST request to add the assign project details.
    def test_assign_project_POST(self):
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
        ProjectDetails.objects.create(projectname="Outsourcing",
                                      startdate=datetime.now(),
                                      enddate=datetime.now(),
                                      clientname="Cerner")

        project = ProjectDetails.objects.get(projectname="Outsourcing")
        assign_project_data = {'employeeid': employee.id,
                               'projectid': project.id,
                               'startdate': datetime.now(),
                               'enddate': datetime.now(),
                               'completiontime': 1,
                               'taskstatus': 'Open',
                               'comment': 'Test'
                               }
        response = self.client.post(self.assign_project_list, assign_project_data, content_type='application/json')
        self.assertEquals(response.status_code, 201)

    # This method will test all the DELETE request to delete the assign project details.
    def test_assign_project_DELETE(self):
        response = self.client.delete(self.assign_project_list)
        self.assertEquals(response.status_code, 204)

    # This method will test all the GET request to get the assign project details if the id does not exists.
    def test_assign_project_GET_ID_Not_Exist(self):
        response = self.client.get('assignproject/' + str(4))
        self.assertEquals(response.status_code, 404)

    # This method will test the DELETE request to delete the assign project details if the id does not exists.
    def test_assign_project_DELETE_ID_Not_Exist(self):
        response = self.client.delete(self.assign_project_details)
        self.assertEquals(response.status_code, 404)

    # This method will test the DELETE request to delete the assign project details if the id exists.
    def test_assign_project_DELETE_ID_Exist(self):
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

        ProjectDetails.objects.create(projectname="Outsourcing",
                                      startdate=datetime.now(),
                                      enddate=datetime.now(),
                                      clientname="Cerner")
        project = ProjectDetails.objects.get(projectname="Outsourcing")

        AssignProjectDetails.objects.create(employeeid=employee,
                                            projectid=project,
                                            startdate=datetime.now(),
                                            enddate=datetime.now(),
                                            completiontime=1,
                                            taskstatus="Open",
                                            comment="Test"
                                            )
        assign_project = AssignProjectDetails.objects.all()[0]
        response = self.client.delete(reverse('assignproject_details', kwargs={'pk': assign_project.id}))
        self.assertEquals(response.status_code, 204)

    # This method will test all the PUT request to update the assign project details if the id does not exists.
    def test_assign_project_PUT_ID_Not_Exist(self):
        response = self.client.put(reverse('assignproject_details', kwargs={'pk': 4}))
        self.assertEquals(response.status_code, 404)

    # This method will test all the PUT request to update the assign project details if the id exists.
    def test_assign_project_PUT_ID_Exist(self):
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

        ProjectDetails.objects.create(projectname="Outsourcing",
                                      startdate=datetime.now(),
                                      enddate=datetime.now(),
                                      clientname="Cerner")
        project = ProjectDetails.objects.get(projectname="Outsourcing")

        AssignProjectDetails.objects.create(employeeid=employee,
                                            projectid=project,
                                            startdate=datetime.now(),
                                            enddate=datetime.now(),
                                            completiontime=1,
                                            taskstatus="Open",
                                            comment="Test"
                                            )
        assign_project = AssignProjectDetails.objects.first()
        assign_project_data = {'employeeid': employee.id,
                               'projectid': project.id,
                               'startdate': datetime.now(),
                               'enddate': datetime.now(),
                               'completiontime': "2",
                               'taskstatus': "Open",
                               'comment': "Test"
                               }
        response = self.client.put(reverse('assignproject_details', kwargs={'pk': assign_project.id}),
                                   assign_project_data,
                                   content_type='application/json')
        self.assertEquals(response.status_code, 200)
from django.test import TestCase, Client
from django.urls import reverse, resolve
from projects.models import ProjectDetails
from datetime import datetime
import json


class TestViews(TestCase):

    # This method will run prior to each test case for setting the default vales.
    def setUp(self):
        self.client = Client()
        self.list_project = reverse('project_list')
        self.list_project_id = reverse('project_details', kwargs={'pk': 4})

    # This method will test all the GET request to fetch the project details.
    def test_project_GET(self):
        response = self.client.get(self.list_project)
        self.assertEquals(response.status_code, 200)

    # This method will test all the POST request to add the project details.
    def test_project_POST(self):
        project_data = {'projectname': "Outsourcing",
                        'startdate': datetime.now(),
                        'enddate': datetime.now(),
                        'clientname': "Cerner"
                        }
        response = self.client.post(self.list_project, project_data, content_type='application/json')
        self.assertEquals(response.status_code, 201)

    # This method will test all the DELETE request to delete the project details.
    def test_project_DELETE(self):
        response = self.client.delete(self.list_project)
        self.assertEquals(response.status_code, 204)

    # This method will test all the GET request to get the project details if the id does not exists.
    def test_project_GET_ID_Not_Exist(self):
        response = self.client.get('projects/' + str(4))
        self.assertEquals(response.status_code, 404)

    # This method will test all the GET request to get the project details if the id exists.
    def test_project_GET_ID_Exist(self):
        ProjectDetails.objects.create(projectname="Outsourcing",
                                      startdate=datetime.now(),
                                      enddate=datetime.now(),
                                      clientname="Cerner")

        project = ProjectDetails.objects.get(projectname="Outsourcing")
        response = self.client.get('projects/' + str(project.id))
        self.assertEquals(response.status_code, 404)

    # This method will test all the DELETE request to delete the project details if the id does not exists.
    def test_project_DELETE_ID_Not_Exist(self):
        response = self.client.delete(self.list_project_id)
        self.assertEquals(response.status_code, 404)

    # This method will test all the DELETE request to delete the project details if the id exists.
    def test_project_DELETE_ID_Exist(self):
        ProjectDetails.objects.create(projectname="Outsourcing",
                                      startdate=datetime.now(),
                                      enddate=datetime.now(),
                                      clientname="Cerner")

        project = ProjectDetails.objects.get(projectname="Outsourcing")
        response = self.client.delete(reverse('project_details', kwargs={'pk': project.id}))
        self.assertEquals(response.status_code, 204)

    # This method will test all the PUT request to update the project details if the id does not exists.
    def test_manager_PUT_ID_Not_Exist(self):
        response = self.client.put(reverse('project_details', kwargs={'pk': 4}))
        self.assertEquals(response.status_code, 404)

    # This method will test all the PUT request to update the project details if the id exists.
    def test_manager_PUT_ID_Exist(self):
        ProjectDetails.objects.create(projectname="Outsourcing",
                                      startdate=datetime.now(),
                                      enddate=datetime.now(),
                                      clientname="Cerner")

        project = ProjectDetails.objects.get(projectname="Outsourcing")
        data = {'projectname': "Outsourcing",
                'startdate': datetime.now(),
                'enddate': datetime.now(),
                'clientname': "Cerner"
                }
        response = self.client.put(reverse('project_details', kwargs={'pk': project.id}), data,
                                   content_type='application/json')
        self.assertEquals(response.status_code, 200)

from django.test import TestCase, Client
from django.urls import reverse, resolve
from manager.models import ManagerDetails
import json


class TestViews(TestCase):

    # This method will run prior to each test case for setting the default vales.
    def setUp(self):
        self.client = Client()
        self.list_managers = reverse('list')
        self.list_managers_id = reverse('details', kwargs={'pk': 4})

    # This method will test all the GET request to fetch the manager details.
    def test_manager_GET(self):
        response = self.client.get(self.list_managers)
        self.assertEquals(response.status_code, 200)

    # This method will test all the POST request to add the manager details.
    def test_manager_POST(self):
        manager_data = {'managername': "Shobhit",
                        'designation': "PM",
                        'contactno': '92233720',
                        'emailid': "s@gmail.com"
                        }
        response = self.client.post(self.list_managers, manager_data, content_type='application/json')
        self.assertEquals(response.status_code, 201)

    # This method will test all the DELETE request to delete the manager details.
    def test_manager_DELETE(self):
        response = self.client.delete(self.list_managers)
        self.assertEquals(response.status_code, 204)

    # This method will test all the GET request to get the manager details if the id does not exists.
    def test_manager_GET_ID_Not_Exist(self):
        response = self.client.get('manager/' + str(4))
        self.assertEquals(response.status_code, 404)

    # This method will test all the GET request to get the manager details if the id exists.
    def test_manager_GET_ID_Exist(self):
        ManagerDetails.objects.create(managername="Shobhit",
                                      designation="PM",
                                      contactno='92233720',
                                      emailid="s@gmail.com")

        manager = ManagerDetails.objects.get(managername="Shobhit")
        response = self.client.get('manager/' + str(manager.id))
        self.assertEquals(response.status_code, 404)

    # This method will test the DELETE request to delete the manager details if the id does not exists.
    def test_manager_DELETE_ID_Not_Exist(self):
        response = self.client.delete(self.list_managers_id)
        self.assertEquals(response.status_code, 404)

    # This method will test all the DELETE request to delete the manager details if the id exists.
    def test_manager_DELETE_ID_Exist(self):
        ManagerDetails.objects.create(managername="Shobhit",
                                      designation="PM",
                                      contactno='92233720',
                                      emailid="s@gmail.com")

        manager = ManagerDetails.objects.get(managername="Shobhit")
        response = self.client.delete(reverse('details', kwargs={'pk': manager.id}))
        self.assertEquals(response.status_code, 204)

    # This method will test all the PUT request to update the manager details if the id does not exists.
    def test_manager_PUT_ID_Not_Exist(self):
        response = self.client.put(reverse('details', kwargs={'pk': 4}))
        self.assertEquals(response.status_code, 404)

    # This method will test all the PUT request to update the manager details if the id exists.
    def test_manager_PUT_ID_Exist(self):
        ManagerDetails.objects.create(managername="Shobhit",
                                      designation="PM",
                                      contactno='92233720',
                                      emailid="s@gmail.com")

        manager = ManagerDetails.objects.get(managername="Shobhit")
        data = {'managername': "Nitin",
                'designation': "PM",
                'contactno': '92233720',
                'emailid': "s@gmail.com"
                }
        response = self.client.put(reverse('details', kwargs={'pk': manager.id}), data, content_type='application/json')
        self.assertEquals(response.status_code, 200)

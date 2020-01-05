from django.test import SimpleTestCase
from django.urls import reverse, resolve
from projects.views import project_list, project_detail


class TestUrls(SimpleTestCase):

    # This function is responsible to test the url for fetching the data without parameter.
    def test_project_list_url(self):
        url = reverse('project_list')
        self.assertEqual(resolve(url).func, project_list)

    # This function is responsible to test the url for fetching the data with parameter.
    def test_project_detail_url(self):
        url = reverse('project_details', args=[1])
        self.assertEquals(resolve(url).func, project_detail)

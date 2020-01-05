from django.test import SimpleTestCase
from django.urls import reverse, resolve
from assignproject.views import assignproject_list, assignproject_detail


class TestUrls(SimpleTestCase):

    # This function is responsible to test the url for fetching the data without parameter.
    def test_assignproject_list_url(self):
        url = reverse('assignproject_list')
        self.assertEqual(resolve(url).func, assignproject_list)

    # This function is responsible to test the url for fetching the data with parameter.
    def test_assignproject_detail_url(self):
        url = reverse('assignproject_details', args=[2])
        self.assertEquals(resolve(url).func, assignproject_detail)

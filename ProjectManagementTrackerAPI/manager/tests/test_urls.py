from django.test import SimpleTestCase
from django.urls import reverse, resolve
from manager.views import manager_list, manager_detail


class TestUrls(SimpleTestCase):

    # This function is responsible to test the url for fetching the data without parameter.
    def test_manager_list_url(self):
        url = reverse('list')
        self.assertEqual(resolve(url).func, manager_list)

    # This function is responsible to test the url for fetching the data with parameter.
    def test_manager_detail_url(self):
        url = reverse('details', args=[1])
        self.assertEquals(resolve(url).func, manager_detail)

from django.test import SimpleTestCase
from django.urls import reverse, resolve
from employee.views import employee_list, employee_detail


class TestUrls(SimpleTestCase):

    # This function is responsible to test the url for fetching the data without parameter.
    def test_employee_list_url(self):
        url = reverse('employee_list')
        self.assertEqual(resolve(url).func, employee_list)

    # This function is responsible to test the url for fetching the data with parameter.
    def test_employee_detail_url(self):
        url = reverse('employee_details', args=[1])
        self.assertEquals(resolve(url).func, employee_detail)

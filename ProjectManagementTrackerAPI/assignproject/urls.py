from django.conf.urls import url
from assignproject import views

urlpatterns = [
    url(r'^assignproject/$', views.assignproject_list, name="assignproject_list"),
    url(r'^assignproject/(?P<pk>[0-9]+)$', views.assignproject_detail, name="assignproject_details"),
]

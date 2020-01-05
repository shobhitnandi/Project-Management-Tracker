from django.conf.urls import url
from projects import views

urlpatterns = [
    url(r'^projects/$', views.project_list, name="project_list"),
    url(r'^projects/(?P<pk>[0-9]+)$', views.project_detail, name="project_details")
]

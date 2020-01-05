from django.conf.urls import url 
from manager import views

urlpatterns = [ 
    url(r'^manager/$', views.manager_list,name="list"),
    url(r'^manager/(?P<pk>[0-9]+)$', views.manager_detail,name="details"),
]

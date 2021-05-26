from django.contrib import admin
from django.urls import path
from employees import views
from django.conf.urls import url

urlpatterns = [
    path('admin/', admin.site.urls),
    url(r'^api/employees/$', views.employees_list),
    url(r'^api/employees/(?P<pk>[0-9]+)$', views.employees_detail),
]

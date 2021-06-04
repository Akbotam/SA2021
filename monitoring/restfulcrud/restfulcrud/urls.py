from django.contrib import admin
from django.urls import path, include
from .router import router
from django.conf.urls import url

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('prometheus/', include('django_prometheus.urls')),
]

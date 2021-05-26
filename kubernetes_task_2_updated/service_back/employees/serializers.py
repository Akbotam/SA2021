from rest_framework import serializers
from .models import Employee

class EmployeeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Employee
        fields = ('pk','name', 'surname', 'email_address', 'mobile','address','empl_description')
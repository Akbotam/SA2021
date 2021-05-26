from django.db import models

class Employee(models.Model):
    name = models.CharField("Name", max_length=255)
    surname = models.CharField("Surname", max_length=255)
    email_address = models.EmailField()
    mobile = models.CharField(max_length=15)
    address =  models.TextField(blank=True, null=True)
    empl_description = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name

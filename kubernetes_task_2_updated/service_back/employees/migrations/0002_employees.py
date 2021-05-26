# Generated by Django 3.2.3 on 2021-05-26 11:13

from django.db import migrations

def create_data(apps, schema_editor):
    Employee = apps.get_model('employees', 'Employee')
    Employee(name="Employee 001", surname="Employee 001", email_address="employee001@email.com", mobile="00000000", address="Employee 000 Address", empl_description= "Employee 001 description").save()


class Migration(migrations.Migration):

    dependencies = [
        ('employees', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_data),
    ]

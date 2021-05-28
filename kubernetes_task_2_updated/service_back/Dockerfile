FROM python:3.6

WORKDIR /app/service_back/

RUN pip install django djangorestframework django-cors-headers

COPY . /app/service_back/

EXPOSE 8000

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
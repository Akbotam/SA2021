FROM python:3.7-slim

ENV PYTHONUNBUFFERED=1
WORKDIR /code/

COPY requirements.txt requirements.txt

RUN apt-get update && \
    apt-get install -y \
    bash \
    build-essential \
    gcc \
    libffi-dev \
    musl-dev \
    openssl \
    postgresql \
    libpq-dev && \
    python3 -m pip install -r requirements.txt --no-cache-dir
RUN pip3 install django djangorestframework

COPY . .

EXPOSE 8000

CMD ["python3", "manage.py", "runserver", "0.0.0.0:8000"]




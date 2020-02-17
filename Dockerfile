FROM python:3.8

ENV PYTHONUNBUFFERED 1
ENV PYTHONDONTWRITEBYTECODE 1

WORKDIR /kids_python

COPY Pipfile Pipfile.lock /kids_python/
RUN pip install pipenv && pipenv install --system

COPY . /kids_python/


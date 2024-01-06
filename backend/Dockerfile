FROM python:3.12

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONNUNBUFFERED 1 

WORKDIR /usr/src/app

COPY ./requirements.txt /usr/src/requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

COPY . /usr/src/app

EXPOSE 8000
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]

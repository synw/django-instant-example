# Django Instant example

Example with backend and frontend for [django-instant](https://github.com/synw/django-instant)

## Install and run

```
git clone https://github.com/synw/django-instant-example
```

### Backend

```
cd backend
virtualenv . && source bin/activate
pip install -r requirements.txt
```

Run

```
cd instant_backend
python3 manage.py runserver
```

The backend is available at `localhost:8000`. It provides an sqlite database
with a user `adminuser` with the password `adminpwd`. Some channels are created
in the backend: a public channel, a user channel and a group channel. Check the
admin

### Websockets server

Install a Centrifugo server locally:

```
cd backend/instant_backend
python manage.py installws
```

[More info](https://github.com/synw/django-instant#install-the-websockets-server).

Run the websockets server:

```
cd backend/instant_backend
python manage.py runws
```

### Frontend

```
cd frontend
npm install
# or yarn install
npm run dev
# or yarn dev
```

The frontend is available at `localhost:3000`

## Publish messages

Open the frontend, login and connect. Then open a backend shell to send a message:

```
cd instant_backend
python3 manage.py shell
```

Then send a message:

```python
In [1]: from instant.producers import publish

In [2]: publish("public", "message content")
```

The message will appear on the frontend

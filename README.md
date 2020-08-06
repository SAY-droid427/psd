# PSD Portal

This is the official repository for PSD portal.
The client side code is in the frontend folder while the server side code is in the backend folder.

The directory structure of backend is as follows:

```bash
backend/
├── README.md
├── requirements.txt
└── server
    ├── apps
    │   ├── app1
    │   │   ├── admin.py
    │   │   ├── api
    │   │   │   ├── routing.py
    │   │   │   ├── serializers.py
    │   │   │   ├── urls.py
    │   │   │   └── views.py
    │   │   ├── apps.py
    │   │   ├── __init__.py
    │   │   ├── migrations
    │   │   │   └── __init__.py
    │   │   ├── models.py
    │   │   └── tests.py
    │   └── app2
    │       ├── admin.py
    │       ├── api
    │       │   ├── routing.py
    │       │   ├── serializers.py
    │       │   ├── urls.py
    │       │   └── views.py
    │       ├── apps.py
    │       ├── __init__.py
    │       ├── migrations
    │       │   └── __init__.py
    │       ├── models.py
    │       └── tests.py
    ├── manage.py
    └── server
        ├── asgi.py
        ├── __init__.py
        ├── settings.py
        ├── urls.py
        └── wsgi.py
```

The directory structure of frontend is as follows:

```bash
frontend/
├── babel.config.js
├── package.json
├── package-lock.json
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── App.vue
│   ├── assets
│   │   ├── logo.png
│   │   └── logo.svg
│   ├── components
│   │   └── HelloWorld.vue
│   ├── main.js
│   ├── plugins
│   │   └── vuetify.js
│   ├── router
│   │   └── index.js
│   ├── store
│   │   └── index.js
│   └── views
│       ├── About.vue
│       └── Home.vue
└── vue.config.js
```
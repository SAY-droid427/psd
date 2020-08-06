# PSD Portal

This is the official repository for PSD portal.
The client side code is in the frontend folder while the server side code is in the backend folder.

The directory structure of backend is as follows:

```bash
./
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


# frontend

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


from django.urls import include, path
from django.conf import  settings

from .views import GoogleLogin, VerifyToken


urlpatterns = [
    path('auth/google', GoogleLogin.as_view(), name='google_login'),
    path('auth/verify-token', VerifyToken.as_view(), name='verify_token'),
]
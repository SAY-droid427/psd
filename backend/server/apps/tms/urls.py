from django.urls import path

from apps.tms.views import (student_views)

urlpatterns = [
    path('student/PS2TS',student_views.PS2TS.as_view()),
]
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("dsmanage/", include("dsmanage.urls")),
    path("", include("dsmanage.urls")),
    path('admin/', admin.site.urls),
]

# admin details : system, system@gmail.com, system@1
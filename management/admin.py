from django.contrib import admin

from .models import Managment, Sections, RegionalCenters, Post

# Register your models here.

admin.site.register(Managment)
admin.site.register(Sections)
admin.site.register(RegionalCenters)
admin.site.register(Post)


from django.contrib import admin

from .models import Managment, Sections, RegionalCenters, Post,LiveMessage

# Register your models here.

admin.site.register(Managment)
admin.site.register(Sections)
admin.site.register(RegionalCenters)
admin.site.register(Post)
admin.site.register(LiveMessage)



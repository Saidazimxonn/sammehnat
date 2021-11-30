from django.contrib import admin
from django.contrib.admin.decorators import register
from modeltranslation.admin import TranslationAdmin
from .models import Managment, Sections, RegionalCenters, Post,LiveMessage, Poster

# Register your models here.

@admin.register(Managment)
class ManagmentAdmin(TranslationAdmin):
    list_display = ('name', 'title', 'biography', 'functions_tasks')


@admin.register(Sections)
class SectionsAdmin(TranslationAdmin):
    list_display = ('name', 'title', 'biography', 'functions_tasks')


@admin.register(RegionalCenters)
class RegionalCentersAdmin(TranslationAdmin):
    list_display = ('name', 'leader', 'title')


@admin.register(Post)
class PostAdmin(TranslationAdmin):
    list_display = ('title', 'Text')


@admin.register(LiveMessage)
class LiveMessageAdmin(TranslationAdmin):
    list_display = ('name', 'message', 'message_long')

@admin.register(Poster)
class PosterMessageAdmin(TranslationAdmin):
    list_display = ('title', 'Text')

# admin.site.register(Managment, ManagmentAdmin)
# admin.site.register(Sections, SectionsAdmin)
# admin.site.register(RegionalCenters, register)
# admin.site.register(Post, PostAdmin)
# admin.site.register(LiveMessage, LiveMessageAdmin)



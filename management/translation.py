from modeltranslation.translator import register, TranslationOptions
from .models import Managment, Sections, RegionalCenters, Post, LiveMessage


@register(Managment)
class ManagmentTranslationOptions(TranslationOptions):
    fields = ('name', 'title', 'biography', 'functions_tasks')


@register(Sections)
class SectionsTranslationOptions(TranslationOptions):
    fields = ('name', 'title', 'biography', 'functions_tasks')


@register(RegionalCenters)
class RegionalCentersTranslationOptions(TranslationOptions):
    fields = ('name', 'leader', 'title')


@register(Post)
class PostTranslationOptions(TranslationOptions):
    fields = ('title', 'Text')


@register(LiveMessage)
class LiveMessageTranslationOptions(TranslationOptions):
    fields = ('name', 'message', 'message_long')
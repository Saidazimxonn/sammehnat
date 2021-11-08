from django.db import models
from django.shortcuts import render
from django.views.generic import TemplateView, ListView
from .models import Managment, Sections, RegionalCenters, Post
# Create your views here.
class GlobaslView(TemplateView):
    template_name = 'index.html'

# class Category(ListView):
class ManagmentView(TemplateView):
    template_name = 'managment.html'
    model = Managment
    def get_context_data(self, **kwargs):
        context = super(ManagmentView, self).get_context_data(**kwargs)
        context['managers_list'] = Managment.objects.all()
        return context
class SectionsView(TemplateView):
    template_name = 'sections.html'
    model = Sections
    def get_context_data(self, **kwargs):
        context = super(SectionsView, self).get_context_data(**kwargs)
        context['sections_list'] = Sections.objects.all()
        return context

class RegionalView(TemplateView):
    template_name = 'regional.html'
    model = RegionalCenters
    def get_context_data(self, **kwargs):
        context = super(RegionalView, self).get_context_data(**kwargs)
        context['regions_list'] = RegionalCenters.objects.all()
        return context


class NewsView(TemplateView):
    template_name = 'news.html'
    model = Post
    def get_context_data(self, **kwargs):
        context = super(NewsView, self).get_context_data(**kwargs)
        context['news_list'] = Post.objects.all()
        return context

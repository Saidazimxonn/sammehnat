from django.db import models
from django.shortcuts import render
from django.views.generic import TemplateView, ListView, DetailView,View
from .models import Managment, Sections, RegionalCenters, Post
from django.core.paginator import Paginator, PageNotAnInteger, EmptyPage
from django.shortcuts import redirect, render
from django.urls import reverse
from .helpers import create_ad
from django.contrib import messages
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


class NewsView(ListView):
    model = Post
    template_name = 'news.html'
    context_object_name = 'news_list'
    paginate_by = 3
    
    # def get_context_data(self, **kwargs):
    #     context = super(NewsView, self).get_context_data(**kwargs)
    #     try:
    #          users = paginator.page(page)
    #     except PageNotAnInteger:
    #         users = paginator.page(1)
    #     except EmptyPage:
    #         users = paginator.page(paginator.num_pages)
    #     context['news_list'] = Post.objects.all()

    #     return context

class NewsDetailView(DetailView):
    model = Post
    template_name = 'detail_news.html'
    context_object_name = 'news_detail'
    # def get_context_data(self, **kwargs):
    #     context = super(NewsDetailView,self).get_context_data(**kwargs)
    #     detail_post = Post.objects.all()
        
    #     context['news_detail'] = detail_post
        # return context

class ActinView(View):
    
    def post(self, request):
        post_request=request.POST
        actions = {
            'create_ad':create_ad,
        }
        messages.success(request, 'Xabaringiz yuborildi')
        actions[self.request.POST.get('action', None)](post_request)
        return redirect('/')
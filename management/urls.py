from django.urls import path
from .views import GlobaslView, ManagmentView, SectionsView, RegionalView, NewsView, NewsDetailView
from .views import ActinView
urlpatterns = [
    path('', GlobaslView.as_view(), name='gmenyu'),
    path('management/', ManagmentView.as_view(), name='management'),
    path('section/', SectionsView.as_view(), name='section'),
    path('regional/', RegionalView.as_view(), name='regional'),
    path('news/', NewsView.as_view(), name='news'),
    path('news_d/<int:pk>/', NewsDetailView.as_view(), name='news_d'),
     path('actions/', ActinView.as_view(), name="action_view"),
]
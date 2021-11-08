from django.urls import path

from .views import GlobaslView, ManagmentView, Sections, SectionsView, RegionalView, NewsView

urlpatterns = [
    path('', GlobaslView.as_view(), name='gmenyu'),
    path('management/', ManagmentView.as_view(), name='management'),
    path('section/', SectionsView.as_view(), name='section'),
    path('regional/', RegionalView.as_view(), name='regional'),
    path('news/', NewsView.as_view(), name='news'),
]
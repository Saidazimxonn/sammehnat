from django.urls import path
from .views import GlobaslView, ManagmentView, SectionsView, RegionalView, NewsView, NewsDetailView, GerbView, BayroqView,MadhiyaView,ActinView,SearchResulView
urlpatterns = [
    path('', GlobaslView.as_view(), name='gmenyu'),
    path('management/', ManagmentView.as_view(), name='management'),
    path('section/', SectionsView.as_view(), name='section'),
    path('regional/', RegionalView.as_view(), name='regional'),
    path('news/', NewsView.as_view(), name='news'),
    path('news_d/<int:pk>/', NewsDetailView.as_view(), name='news_d'),
    path('actions/', ActinView.as_view(), name="action_view"),
    path('gerb/', GerbView.as_view(), name='gerb'),
    path('bayroq/', BayroqView.as_view(), name='bayroq'),
    path('madhiya/', MadhiyaView.as_view(), name='madhiya'),
    path('search/', SearchResulView.as_view(), name="search"),

]
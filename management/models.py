from django.db import models
from django.contrib.auth.models import User
from django.db.models.query import InstanceCheckMeta

class Managment(models.Model):
    name = models.CharField(verbose_name="F.I.SH", max_length=250)
    title = models.CharField(verbose_name="Lavozimi", max_length=250)
    phone = models.CharField(verbose_name="Phone", max_length=15)
    acceptance_dates = models.CharField(verbose_name="Qabul kunlari", max_length=250)
    biography = models.TextField(verbose_name="Tarjimai hol", null=True, blank=True)
    functions_tasks = models.TextField(verbose_name="Funksiya va vazifalar", null=True, blank=True)
    date_time = models.DateTimeField(auto_now_add=True)
    image = models.ImageField()


    def __str__(self):
        return self.name
    class Meta:
        verbose_name="Rahbaryat"
        verbose_name_plural="Rahbaryat azolari"
    
class Sections(models.Model):
    name = models.CharField(verbose_name="F.I.SH", max_length=250)
    title = models.CharField(verbose_name="Lavozimi", max_length=250)
    phone = models.CharField(verbose_name="Phone", max_length=15)
    acceptance_dates = models.CharField(verbose_name="Qabul kunlari", max_length=250)
    biography = models.TextField(verbose_name="Tarjimai hol", null=True, blank=True)
    functions_tasks = models.TextField(verbose_name="Funksiya va vazifalar", null=True, blank=True)
    date_time = models.DateTimeField(auto_now_add=True)
    image = models.ImageField()


    def __str__(self):
        return self.name
    class Meta:
        verbose_name="Bo'lim"
        verbose_name_plural="Bo'limlar"

class RegionalCenters(models.Model):
    name = models.CharField(verbose_name="Hududiy boshqarma nomi", max_length=250)
    leader = models.CharField(verbose_name="F.I.SH BOshqarma boshlig'i", max_length=250)
    title = models.CharField(verbose_name="Manzili", max_length=250)
    phone = models.CharField(verbose_name="Phone", max_length=15)
    date_time = models.DateTimeField(auto_now_add=True)
    def __str__(self):
            return self.name
    class Meta:
        verbose_name="Hududiy bo'lim"
        verbose_name_plural="Hududiy bo'limlar"
        
class Post(models.Model):
    user = models.ForeignKey(User,verbose_name='Muallif', on_delete=models.CASCADE)
    title = models.CharField(verbose_name="Qisqa matn", max_length=300)
    Text = models.TextField(verbose_name="Matin", null=True, blank=True)
    image = models.ImageField()
    date  = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name="Yangilik"
        verbose_name_plural="Yangiliklar"


# Create your models here.
class LiveMessage(models.Model):
    name = models.CharField(verbose_name="Name", max_length=100)
    phone = models.CharField(verbose_name="Phone", max_length=100)
    message = models.CharField(verbose_name="Message", max_length=100)
    message_long = models.TextField(verbose_name="Message long")

    def __str__(self):
        return self.name
    class Meta:
        verbose_name = 'Xabar'
        verbose_name_plural = 'Xabarlar'
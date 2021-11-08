# Generated by Django 3.2.9 on 2021-11-08 06:26

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('management', '0004_regionalcenters'),
    ]

    operations = [
        migrations.AlterField(
            model_name='regionalcenters',
            name='leader',
            field=models.CharField(max_length=250, verbose_name="F.I.SH BOshqarma boshlig'i"),
        ),
        migrations.AlterField(
            model_name='regionalcenters',
            name='title',
            field=models.CharField(max_length=250, verbose_name='Manzili'),
        ),
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=250, verbose_name='Lavozimi')),
                ('Text', models.TextField(blank=True, null=True, verbose_name='Matin')),
                ('image', models.ImageField(upload_to='')),
                ('date', models.DateTimeField(auto_now_add=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='Muallif')),
            ],
            options={
                'verbose_name': 'Yangilik',
                'verbose_name_plural': 'Yangiliklar',
            },
        ),
    ]
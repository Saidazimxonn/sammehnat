# Generated by Django 3.2.9 on 2021-11-08 05:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('management', '0003_auto_20211108_1034'),
    ]

    operations = [
        migrations.CreateModel(
            name='RegionalCenters',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('leader', models.CharField(max_length=250, verbose_name='F.I.SH')),
                ('name', models.CharField(max_length=250, verbose_name='Hududiy boshqarma nomi')),
                ('title', models.CharField(max_length=250, verbose_name='Lavozimi')),
                ('phone', models.CharField(max_length=15, verbose_name='Phone')),
                ('date_time', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'verbose_name': "Hududiy bo'lim",
                'verbose_name_plural': "Hududiy bo'limlar",
            },
        ),
    ]

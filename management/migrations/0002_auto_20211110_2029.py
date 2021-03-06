# Generated by Django 3.2.9 on 2021-11-10 15:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('management', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='livemessage',
            name='message_en',
            field=models.CharField(max_length=100, null=True, verbose_name='Message'),
        ),
        migrations.AddField(
            model_name='livemessage',
            name='message_long_en',
            field=models.TextField(null=True, verbose_name='Message long'),
        ),
        migrations.AddField(
            model_name='livemessage',
            name='message_long_oz',
            field=models.TextField(null=True, verbose_name='Message long'),
        ),
        migrations.AddField(
            model_name='livemessage',
            name='message_long_ru',
            field=models.TextField(null=True, verbose_name='Message long'),
        ),
        migrations.AddField(
            model_name='livemessage',
            name='message_long_uz',
            field=models.TextField(null=True, verbose_name='Message long'),
        ),
        migrations.AddField(
            model_name='livemessage',
            name='message_oz',
            field=models.CharField(max_length=100, null=True, verbose_name='Message'),
        ),
        migrations.AddField(
            model_name='livemessage',
            name='message_ru',
            field=models.CharField(max_length=100, null=True, verbose_name='Message'),
        ),
        migrations.AddField(
            model_name='livemessage',
            name='message_uz',
            field=models.CharField(max_length=100, null=True, verbose_name='Message'),
        ),
        migrations.AddField(
            model_name='livemessage',
            name='name_en',
            field=models.CharField(max_length=100, null=True, verbose_name='Name'),
        ),
        migrations.AddField(
            model_name='livemessage',
            name='name_oz',
            field=models.CharField(max_length=100, null=True, verbose_name='Name'),
        ),
        migrations.AddField(
            model_name='livemessage',
            name='name_ru',
            field=models.CharField(max_length=100, null=True, verbose_name='Name'),
        ),
        migrations.AddField(
            model_name='livemessage',
            name='name_uz',
            field=models.CharField(max_length=100, null=True, verbose_name='Name'),
        ),
        migrations.AddField(
            model_name='managment',
            name='biography_en',
            field=models.TextField(blank=True, null=True, verbose_name='Tarjimai hol'),
        ),
        migrations.AddField(
            model_name='managment',
            name='biography_oz',
            field=models.TextField(blank=True, null=True, verbose_name='Tarjimai hol'),
        ),
        migrations.AddField(
            model_name='managment',
            name='biography_ru',
            field=models.TextField(blank=True, null=True, verbose_name='Tarjimai hol'),
        ),
        migrations.AddField(
            model_name='managment',
            name='biography_uz',
            field=models.TextField(blank=True, null=True, verbose_name='Tarjimai hol'),
        ),
        migrations.AddField(
            model_name='managment',
            name='functions_tasks_en',
            field=models.TextField(blank=True, null=True, verbose_name='Funksiya va vazifalar'),
        ),
        migrations.AddField(
            model_name='managment',
            name='functions_tasks_oz',
            field=models.TextField(blank=True, null=True, verbose_name='Funksiya va vazifalar'),
        ),
        migrations.AddField(
            model_name='managment',
            name='functions_tasks_ru',
            field=models.TextField(blank=True, null=True, verbose_name='Funksiya va vazifalar'),
        ),
        migrations.AddField(
            model_name='managment',
            name='functions_tasks_uz',
            field=models.TextField(blank=True, null=True, verbose_name='Funksiya va vazifalar'),
        ),
        migrations.AddField(
            model_name='managment',
            name='name_en',
            field=models.CharField(max_length=250, null=True, verbose_name='F.I.SH'),
        ),
        migrations.AddField(
            model_name='managment',
            name='name_oz',
            field=models.CharField(max_length=250, null=True, verbose_name='F.I.SH'),
        ),
        migrations.AddField(
            model_name='managment',
            name='name_ru',
            field=models.CharField(max_length=250, null=True, verbose_name='F.I.SH'),
        ),
        migrations.AddField(
            model_name='managment',
            name='name_uz',
            field=models.CharField(max_length=250, null=True, verbose_name='F.I.SH'),
        ),
        migrations.AddField(
            model_name='managment',
            name='title_en',
            field=models.CharField(max_length=250, null=True, verbose_name='Lavozimi'),
        ),
        migrations.AddField(
            model_name='managment',
            name='title_oz',
            field=models.CharField(max_length=250, null=True, verbose_name='Lavozimi'),
        ),
        migrations.AddField(
            model_name='managment',
            name='title_ru',
            field=models.CharField(max_length=250, null=True, verbose_name='Lavozimi'),
        ),
        migrations.AddField(
            model_name='managment',
            name='title_uz',
            field=models.CharField(max_length=250, null=True, verbose_name='Lavozimi'),
        ),
        migrations.AddField(
            model_name='post',
            name='Text_en',
            field=models.TextField(blank=True, null=True, verbose_name='Matin'),
        ),
        migrations.AddField(
            model_name='post',
            name='Text_oz',
            field=models.TextField(blank=True, null=True, verbose_name='Matin'),
        ),
        migrations.AddField(
            model_name='post',
            name='Text_ru',
            field=models.TextField(blank=True, null=True, verbose_name='Matin'),
        ),
        migrations.AddField(
            model_name='post',
            name='Text_uz',
            field=models.TextField(blank=True, null=True, verbose_name='Matin'),
        ),
        migrations.AddField(
            model_name='post',
            name='title_en',
            field=models.CharField(max_length=300, null=True, verbose_name='Qisqa matn'),
        ),
        migrations.AddField(
            model_name='post',
            name='title_oz',
            field=models.CharField(max_length=300, null=True, verbose_name='Qisqa matn'),
        ),
        migrations.AddField(
            model_name='post',
            name='title_ru',
            field=models.CharField(max_length=300, null=True, verbose_name='Qisqa matn'),
        ),
        migrations.AddField(
            model_name='post',
            name='title_uz',
            field=models.CharField(max_length=300, null=True, verbose_name='Qisqa matn'),
        ),
        migrations.AddField(
            model_name='regionalcenters',
            name='leader_en',
            field=models.CharField(max_length=250, null=True, verbose_name="F.I.SH BOshqarma boshlig'i"),
        ),
        migrations.AddField(
            model_name='regionalcenters',
            name='leader_oz',
            field=models.CharField(max_length=250, null=True, verbose_name="F.I.SH BOshqarma boshlig'i"),
        ),
        migrations.AddField(
            model_name='regionalcenters',
            name='leader_ru',
            field=models.CharField(max_length=250, null=True, verbose_name="F.I.SH BOshqarma boshlig'i"),
        ),
        migrations.AddField(
            model_name='regionalcenters',
            name='leader_uz',
            field=models.CharField(max_length=250, null=True, verbose_name="F.I.SH BOshqarma boshlig'i"),
        ),
        migrations.AddField(
            model_name='regionalcenters',
            name='name_en',
            field=models.CharField(max_length=250, null=True, verbose_name='Hududiy boshqarma nomi'),
        ),
        migrations.AddField(
            model_name='regionalcenters',
            name='name_oz',
            field=models.CharField(max_length=250, null=True, verbose_name='Hududiy boshqarma nomi'),
        ),
        migrations.AddField(
            model_name='regionalcenters',
            name='name_ru',
            field=models.CharField(max_length=250, null=True, verbose_name='Hududiy boshqarma nomi'),
        ),
        migrations.AddField(
            model_name='regionalcenters',
            name='name_uz',
            field=models.CharField(max_length=250, null=True, verbose_name='Hududiy boshqarma nomi'),
        ),
        migrations.AddField(
            model_name='regionalcenters',
            name='title_en',
            field=models.CharField(max_length=250, null=True, verbose_name='Manzili'),
        ),
        migrations.AddField(
            model_name='regionalcenters',
            name='title_oz',
            field=models.CharField(max_length=250, null=True, verbose_name='Manzili'),
        ),
        migrations.AddField(
            model_name='regionalcenters',
            name='title_ru',
            field=models.CharField(max_length=250, null=True, verbose_name='Manzili'),
        ),
        migrations.AddField(
            model_name='regionalcenters',
            name='title_uz',
            field=models.CharField(max_length=250, null=True, verbose_name='Manzili'),
        ),
        migrations.AddField(
            model_name='sections',
            name='biography_en',
            field=models.TextField(blank=True, null=True, verbose_name='Tarjimai hol'),
        ),
        migrations.AddField(
            model_name='sections',
            name='biography_oz',
            field=models.TextField(blank=True, null=True, verbose_name='Tarjimai hol'),
        ),
        migrations.AddField(
            model_name='sections',
            name='biography_ru',
            field=models.TextField(blank=True, null=True, verbose_name='Tarjimai hol'),
        ),
        migrations.AddField(
            model_name='sections',
            name='biography_uz',
            field=models.TextField(blank=True, null=True, verbose_name='Tarjimai hol'),
        ),
        migrations.AddField(
            model_name='sections',
            name='functions_tasks_en',
            field=models.TextField(blank=True, null=True, verbose_name='Funksiya va vazifalar'),
        ),
        migrations.AddField(
            model_name='sections',
            name='functions_tasks_oz',
            field=models.TextField(blank=True, null=True, verbose_name='Funksiya va vazifalar'),
        ),
        migrations.AddField(
            model_name='sections',
            name='functions_tasks_ru',
            field=models.TextField(blank=True, null=True, verbose_name='Funksiya va vazifalar'),
        ),
        migrations.AddField(
            model_name='sections',
            name='functions_tasks_uz',
            field=models.TextField(blank=True, null=True, verbose_name='Funksiya va vazifalar'),
        ),
        migrations.AddField(
            model_name='sections',
            name='name_en',
            field=models.CharField(max_length=250, null=True, verbose_name='F.I.SH'),
        ),
        migrations.AddField(
            model_name='sections',
            name='name_oz',
            field=models.CharField(max_length=250, null=True, verbose_name='F.I.SH'),
        ),
        migrations.AddField(
            model_name='sections',
            name='name_ru',
            field=models.CharField(max_length=250, null=True, verbose_name='F.I.SH'),
        ),
        migrations.AddField(
            model_name='sections',
            name='name_uz',
            field=models.CharField(max_length=250, null=True, verbose_name='F.I.SH'),
        ),
        migrations.AddField(
            model_name='sections',
            name='title_en',
            field=models.CharField(max_length=250, null=True, verbose_name='Lavozimi'),
        ),
        migrations.AddField(
            model_name='sections',
            name='title_oz',
            field=models.CharField(max_length=250, null=True, verbose_name='Lavozimi'),
        ),
        migrations.AddField(
            model_name='sections',
            name='title_ru',
            field=models.CharField(max_length=250, null=True, verbose_name='Lavozimi'),
        ),
        migrations.AddField(
            model_name='sections',
            name='title_uz',
            field=models.CharField(max_length=250, null=True, verbose_name='Lavozimi'),
        ),
    ]

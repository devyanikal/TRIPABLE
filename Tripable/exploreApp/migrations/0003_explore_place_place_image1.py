# Generated by Django 3.2.19 on 2023-10-02 13:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('exploreApp', '0002_explore_place_place_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='explore_place',
            name='place_image1',
            field=models.ImageField(default='C:\\Users\\HP\\Desktop\\project\\Semester7\\tripable\\Tripable\\last.jpg', upload_to='exploreApp/file/covers'),
        ),
    ]

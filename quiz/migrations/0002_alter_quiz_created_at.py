# Generated by Django 4.2.7 on 2023-11-12 23:57

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ("quiz", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="quiz",
            name="created_at",
            field=models.DateField(default=django.utils.timezone.now),
        ),
    ]

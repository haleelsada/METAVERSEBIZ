# Generated by Django 4.2.11 on 2024-05-08 14:45

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('dsmanage', '0005_rename_answer_chatbot_chat_and_more'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Topic',
        ),
    ]

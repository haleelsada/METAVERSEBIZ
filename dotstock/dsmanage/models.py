from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver

# Extending User model
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    # Add additional fields here
    balance = models.DecimalField(max_digits=10, decimal_places=2, default=1000)

    def __str__(self):
        return self.user.username
    
# User Portfolio
class Portfolio(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    stock = models.CharField(max_length=100)
    no_of_stocks = models.IntegerField()
    def __str__(self):
        return f"{self.no_of_stocks} {self.stock} by {self.user.username}"

# Model for Transactions
class Transaction(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    transaction_name = models.CharField(max_length=200)
    transaction_time = models.DateTimeField(default=timezone.now)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    no_of_stocks = models.IntegerField()
    details = models.CharField(max_length=4, choices=[('sell', 'Sell'),('buy', 'Buy')], default='buy')
    status = models.CharField(max_length=5, choices=[('open', 'Open'),('Close', 'Close')], default='Open')

    def __str__(self):
        return f"{self.transaction_name} by {self.user.username} at {self.transaction_time}"


# Model for Chatbot Conversations
class Chatbot(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    chat = models.TextField()
    

    def __str__(self):
        return f"{self.user.username}"


@receiver(post_save, sender=User)
def create_or_update_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)
    instance.profile.save()
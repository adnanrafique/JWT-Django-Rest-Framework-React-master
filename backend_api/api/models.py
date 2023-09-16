from django.db import models
from django.db.models.signals import post_save
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    username = models.CharField(max_length=100)
    email = models.EmailField(unique=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']


    def profile(self):
        profile = Profile.objects.get(user=self)

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    full_name = models.CharField(max_length=1000)
    bio = models.CharField(max_length=100)
    image = models.ImageField(upload_to="user_images", default="default.jpg")
    verified = models.BooleanField(default=False)


def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)

def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()

post_save.connect(create_user_profile, sender=User)
post_save.connect(save_user_profile, sender=User)


# backend_api/api/models.py


class ImpromptuTopic(models.Model):
    topic = models.CharField(max_length=255)

class ExtempTopic(models.Model):
    topic = models.CharField(max_length=255)
    is_current_event = models.BooleanField(default=True)

class CXSim(models.Model):
    case = models.TextField()
    response = models.TextField()
    critique = models.TextField()

class ArgumentAnalysis(models.Model):
    case = models.TextField()
    feedback = models.TextField()
    counterarguments = models.TextField()
    improvements = models.TextField()
    weaknesses = models.TextField()

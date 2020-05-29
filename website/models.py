from django.db import models
from django.core.validators import RegexValidator

# Create your models here.


class Building(models.Model):
    name = models.CharField(max_length=32)
    address = models.TextField()

class Floor(models.Model):
    building = models.ForeignKey( 'Building', on_delete=models.CASCADE)
    name = models.CharField(max_length=32)

class Computer(models.Model):

    class Os(models.IntegerChoices):
        WINDOWS = 0, 'windows'
        UBUNTU = 1, 'ubuntu'
        MACOS = 2, 'mac os'

    class Status(models.IntegerChoices):
        DOWN = 0, 'down'
        UP = 1, 'up'
        MAINTAIN = 2, 'maintain'

    name = models.CharField(max_length=32)
    enabled = models.BooleanField()
    os = models.IntegerField(choices=Os.choices, default=Os.WINDOWS)
    status = models.IntegerField(choices=Status.choices, default=Status.UP)
    mac_address = models.CharField(max_length=20, validators=[RegexValidator(
        regex=r'^([0-9a-fA-F]{2}[:-]){5}([0-9a-fA-F]{2})$',
        message="Mac address should be like '00:11:22:33:44:55' or '00-11-22-33-44-55'")])
    ip_address= models.GenericIPAddressField(protocol='IPv4')
    floor = models.ForeignKey('Floor', on_delete=models.CASCADE)




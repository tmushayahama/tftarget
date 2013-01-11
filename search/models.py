from django.db import models

class Association(models.Model):
    gene = models.CharField(max_length=8)
    pmid = models.IntegerField()
    family = models.CharField(max_length=8)
    member = models.CharField(max_length=8)
    species = models.CharField(max_length=32)
    exp_tissues = models.CharField(max_length=256)
    experiment = models.CharField(max_length=64)
    num_replicates = models.IntegerField()
    control = models.CharField(max_length=256)
    quality = models.CharField(max_length=256)

    def __str__(self):
        return str(self.__dict__)

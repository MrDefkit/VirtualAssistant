from django.db import models

# Create your models here.
class Ingredient(models.Model):
    Image = models.CharField(max_length=30)
    Name = models.CharField(max_length=30)
    
    Category = models.CharField(max_length=30)
    SubCategory = models.CharField(max_length=30)
    
    Quantity = models.CharField(max_length=30)
    Frequency = models.CharField(max_length=30)
    Tags = models.CharField(max_length=30)
        
    PurchaseDate = models.DateField()
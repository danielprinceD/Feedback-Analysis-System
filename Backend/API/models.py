from django.db import models

    

class Product(models.Model):
    name = models.CharField(max_length = 20, blank = False)
    category = models.CharField(max_length = 20)
    description = models.CharField(max_length = 50)
class Form(models.Model ) :
    feedback = models.ForeignKey( Product , max_length = 50 , on_delete = models.CASCADE)
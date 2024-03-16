from django.contrib import admin
from .models import Product , Form
# Register your models here.
 
class Product(admin.ModelAdmin) :
    class Meta : 
        name = Product
        fields = [
            'name','description','category','feedback'
        ]
admin.register(Form )
admin.register(Product )
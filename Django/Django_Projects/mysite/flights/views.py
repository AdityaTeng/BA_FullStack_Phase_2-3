from django.shortcuts import render
from django.http import HttpResponse
import json

from .models import Flight

# Create your views here.
def index(request):
    context = {
        "flights" : Flight.objects.all()
    }
    # return HttpResponse("<h1>Flights</h1>")
    return render(request, "flights/index.html", context)


# def send_email(request):
#     return HttpResponse("<h1>Flights</h1>")


from django.core.mail import send_mail
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def send_email(request):
    json_obj = request.body
    obj = json.loads(json_obj)
    print(f"Flight Booked for {obj['f_name']} {obj['l_name']}.")
    send_mail('Event Triggered', 'Mail From Django','tempbytedeveloper@gmail.com',
                 ['adityateng@gmail.com'], fail_silently=False)
    return HttpResponse("<h1></h1>")

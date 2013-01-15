from django.http import HttpResponse


def home(request):
    return HttpResponse("It works!<br><br><a href='/search'>Search</a>")

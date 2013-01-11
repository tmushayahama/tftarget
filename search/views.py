from django.http import HttpResponse
from search.models import Association


def search(request, search_term):
    results = Association.objects.filter(family=search_term)
    if results:
        return HttpResponse("Searched!<br><br>Found:<br><br>%s" % results)
    return HttpResponse("Searched!<br><br>No results found.")

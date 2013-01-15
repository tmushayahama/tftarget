from django.http import HttpResponse
from django.template import RequestContext
from django.shortcuts import render_to_response

from search.models import Experiment, Transcription, Tissue
from search.forms import SearchForm


def search(request):
    """Search through the experiments for a search term."""
    form = SearchForm(request.POST or None)
    if not form.is_valid():
        return render_to_response("search.html", {"form" : form},
                                  context_instance=RequestContext(request))
    print form.cleaned_data
    results = set()
    if form.cleaned_data['tissue_name']:
        tissue_name = form.cleaned_data.pop('tissue_name')
        tissues = Tissue.objects.filter(tissue_name=tissue_name)
        results = set(t.expt_id for t in tissues)

    if form.cleaned_data['transcription_factor']:
        factor = form.cleaned_data.pop('transcription_factor')
        factors = Transcription.objects.filter(transcription_factor=factor)
        if results:
            results = results.intersection(set(t.expt_id for t in factors))
        else:
            results = results.union(set(t.expt_id for t in factors))

    def get_experiments(key, value):
        s = "Experiment.objects.filter(%s='%s')" % (key, value)
        return eval(s)

    for key, value in form.cleaned_data.iteritems():
        if value:
            these_results = get_experiments(key, value)
            if results:
                results = results.intersection(set(these_results))
            else:
                results = results.union(set(these_results))
    return HttpResponse("It searched!<br><br>Found:<br><br>%s" % list(results))


def search_all(request):
    """Return all experiments."""
    results = Experiment.objects.all()
    if results:
        return HttpResponse("Searched!<br><br>Found:<br><br>%s" % results)
    return HttpResponse("Searched!<br><br>No results found.")

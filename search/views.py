import json

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
    results = set()
    if form.cleaned_data['tissue_name']:
        tissue_name = form.cleaned_data.pop('tissue_name')
        tissues = Tissue.objects.filter(tissue_name=tissue_name)
        results = results.union(t.expt_id for t in tissues)

    if form.cleaned_data['transcription_factor']:
        factor = form.cleaned_data.pop('transcription_factor')
        factors = Transcription.objects.filter(transcription_factor=factor)
        if results:
            results = results.intersection(set(t.expt_id for t in factors))
        else:
            results = results.union(set(t.expt_id for t in factors))

    def get_experiments(key, value):
        """Since the form returns key:value pairs that we can filter on
        directly, do that.  But since keyword argument names can't be passed
        as strings, eval them.
        """
        # This feels hacky and is probably a SQL injection vulnerability, but
        # it is elegant.
        return eval("Experiment.objects.filter(%s='%s')" % (key, value))

    for key, value in form.cleaned_data.iteritems():
        if value:
            these_results = get_experiments(key, value)
            if results:
                results = results.intersection(set(these_results))
            else:
                results = results.union(set(these_results))
    return HttpResponse("%s" % list(results))


def search_all(request):
    """Return all experiments."""
    results = Experiment.objects.all()
    if results:
        return HttpResponse("Searched!<br><br>Found:<br><br>%s" % results)
    return HttpResponse("Searched!<br><br>No results found.")

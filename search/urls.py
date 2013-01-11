from django.conf.urls import patterns, include, url

urlpatterns = patterns('',
    url(r'^(?P<search_term>.*)$', 'search.views.search', name='search'),
)

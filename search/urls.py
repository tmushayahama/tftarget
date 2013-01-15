from django.conf.urls import patterns, include, url

urlpatterns = patterns('',
    url(r'^all/?$', 'search.views.search_all', name='search_all'),
    url(r'^$', 'search.views.search', name='search'),
)

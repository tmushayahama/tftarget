from django.contrib import admin
from search.models import Experiment, Transcription, Tissue

admin.site.register(Experiment)
admin.site.register(Transcription)
admin.site.register(Tissue)

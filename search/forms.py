from django import forms


class SearchForm(forms.Form):
    """Search form to be submitted by a user."""
    transcription_factor = forms.CharField(label="Transcription Factor", required=False)
    transcription_family = forms.CharField(label="Transcription Family", required=False)
    gene = forms.CharField(label="Gene", required=False)
    species = forms.CharField(label="Species", required=False)
    expt_name = forms.CharField(label="Experiment Name", required=False)
    tissue_name = forms.CharField(label="Tissue Name", required=False)

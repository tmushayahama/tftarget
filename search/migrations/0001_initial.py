# -*- coding: utf-8 -*-
import datetime
from south.db import db
from south.v2 import SchemaMigration
from django.db import models


class Migration(SchemaMigration):

    def forwards(self, orm):
        # Adding model 'Experiment'
        db.create_table('search_experiment', (
            ('id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('gene', self.gf('django.db.models.fields.CharField')(max_length=255)),
            ('pmid', self.gf('django.db.models.fields.IntegerField')()),
            ('transcription_family', self.gf('django.db.models.fields.CharField')(max_length=50)),
            ('species', self.gf('django.db.models.fields.CharField')(max_length=255)),
            ('expt_name', self.gf('django.db.models.fields.CharField')(max_length=255)),
            ('replicates', self.gf('django.db.models.fields.CharField')(max_length=50)),
            ('control', self.gf('django.db.models.fields.CharField')(max_length=255)),
            ('quality', self.gf('django.db.models.fields.CharField')(max_length=50)),
        ))
        db.send_create_signal('search', ['Experiment'])

        # Adding model 'Transcription'
        db.create_table('search_transcription', (
            ('id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('expt_id', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['search.Experiment'])),
            ('transcription_factor', self.gf('django.db.models.fields.CharField')(max_length=255)),
        ))
        db.send_create_signal('search', ['Transcription'])

        # Adding model 'Tissue'
        db.create_table('search_tissue', (
            ('id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('expt_id', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['search.Experiment'])),
            ('tissue_name', self.gf('django.db.models.fields.CharField')(max_length=255)),
        ))
        db.send_create_signal('search', ['Tissue'])


    def backwards(self, orm):
        # Deleting model 'Experiment'
        db.delete_table('search_experiment')

        # Deleting model 'Transcription'
        db.delete_table('search_transcription')

        # Deleting model 'Tissue'
        db.delete_table('search_tissue')


    models = {
        'search.experiment': {
            'Meta': {'object_name': 'Experiment'},
            'control': ('django.db.models.fields.CharField', [], {'max_length': '255'}),
            'expt_name': ('django.db.models.fields.CharField', [], {'max_length': '255'}),
            'gene': ('django.db.models.fields.CharField', [], {'max_length': '255'}),
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'pmid': ('django.db.models.fields.IntegerField', [], {}),
            'quality': ('django.db.models.fields.CharField', [], {'max_length': '50'}),
            'replicates': ('django.db.models.fields.CharField', [], {'max_length': '50'}),
            'species': ('django.db.models.fields.CharField', [], {'max_length': '255'}),
            'transcription_family': ('django.db.models.fields.CharField', [], {'max_length': '50'})
        },
        'search.tissue': {
            'Meta': {'object_name': 'Tissue'},
            'expt_id': ('django.db.models.fields.related.ForeignKey', [], {'to': "orm['search.Experiment']"}),
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'tissue_name': ('django.db.models.fields.CharField', [], {'max_length': '255'})
        },
        'search.transcription': {
            'Meta': {'object_name': 'Transcription'},
            'expt_id': ('django.db.models.fields.related.ForeignKey', [], {'to': "orm['search.Experiment']"}),
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'transcription_factor': ('django.db.models.fields.CharField', [], {'max_length': '255'})
        }
    }

    complete_apps = ['search']
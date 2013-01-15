# -*- coding: utf-8 -*-
import datetime
from south.db import db
from south.v2 import SchemaMigration
from django.db import models


class Migration(SchemaMigration):

    def forwards(self, orm):

        # Changing field 'Transcription.transcription_factor'
        db.alter_column('search_transcription', 'transcription_factor', self.gf('django.db.models.fields.CharField')(max_length=255, null=True))

        # Changing field 'Experiment.control'
        db.alter_column('search_experiment', 'control', self.gf('django.db.models.fields.CharField')(max_length=255, null=True))

        # Changing field 'Experiment.replicates'
        db.alter_column('search_experiment', 'replicates', self.gf('django.db.models.fields.CharField')(max_length=50, null=True))

        # Changing field 'Experiment.gene'
        db.alter_column('search_experiment', 'gene', self.gf('django.db.models.fields.CharField')(max_length=255, null=True))

        # Changing field 'Experiment.quality'
        db.alter_column('search_experiment', 'quality', self.gf('django.db.models.fields.CharField')(max_length=50, null=True))

    def backwards(self, orm):

        # Changing field 'Transcription.transcription_factor'
        db.alter_column('search_transcription', 'transcription_factor', self.gf('django.db.models.fields.CharField')(default='', max_length=255))

        # Changing field 'Experiment.control'
        db.alter_column('search_experiment', 'control', self.gf('django.db.models.fields.CharField')(default='', max_length=255))

        # Changing field 'Experiment.replicates'
        db.alter_column('search_experiment', 'replicates', self.gf('django.db.models.fields.CharField')(default='', max_length=50))

        # Changing field 'Experiment.gene'
        db.alter_column('search_experiment', 'gene', self.gf('django.db.models.fields.CharField')(default='', max_length=255))

        # Changing field 'Experiment.quality'
        db.alter_column('search_experiment', 'quality', self.gf('django.db.models.fields.CharField')(default='', max_length=50))

    models = {
        'search.experiment': {
            'Meta': {'object_name': 'Experiment'},
            'control': ('django.db.models.fields.CharField', [], {'default': "''", 'max_length': '255', 'null': 'True'}),
            'expt_name': ('django.db.models.fields.CharField', [], {'max_length': '255'}),
            'gene': ('django.db.models.fields.CharField', [], {'default': "''", 'max_length': '255', 'null': 'True'}),
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'pmid': ('django.db.models.fields.IntegerField', [], {}),
            'quality': ('django.db.models.fields.CharField', [], {'default': "''", 'max_length': '50', 'null': 'True'}),
            'replicates': ('django.db.models.fields.CharField', [], {'default': "''", 'max_length': '50', 'null': 'True'}),
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
            'transcription_factor': ('django.db.models.fields.CharField', [], {'default': "''", 'max_length': '255', 'null': 'True'})
        }
    }

    complete_apps = ['search']
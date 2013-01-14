# -*- coding: utf-8 -*-
import datetime
from south.db import db
from south.v2 import SchemaMigration
from django.db import models


class Migration(SchemaMigration):

    def forwards(self, orm):
        # Adding model 'Association'
        db.create_table('search_association', (
            ('id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('gene', self.gf('django.db.models.fields.CharField')(max_length=8)),
            ('pmid', self.gf('django.db.models.fields.IntegerField')()),
            ('family', self.gf('django.db.models.fields.CharField')(max_length=8)),
            ('member', self.gf('django.db.models.fields.CharField')(max_length=8)),
            ('species', self.gf('django.db.models.fields.CharField')(max_length=32)),
            ('exp_tissues', self.gf('django.db.models.fields.CharField')(max_length=256)),
            ('experiment', self.gf('django.db.models.fields.CharField')(max_length=64)),
            ('num_replicates', self.gf('django.db.models.fields.IntegerField')()),
            ('control', self.gf('django.db.models.fields.CharField')(max_length=256)),
            ('quality', self.gf('django.db.models.fields.CharField')(max_length=256)),
        ))
        db.send_create_signal('search', ['Association'])


    def backwards(self, orm):
        # Deleting model 'Association'
        db.delete_table('search_association')


    models = {
        'search.association': {
            'Meta': {'object_name': 'Association'},
            'control': ('django.db.models.fields.CharField', [], {'max_length': '256'}),
            'exp_tissues': ('django.db.models.fields.CharField', [], {'max_length': '256'}),
            'experiment': ('django.db.models.fields.CharField', [], {'max_length': '64'}),
            'family': ('django.db.models.fields.CharField', [], {'max_length': '8'}),
            'gene': ('django.db.models.fields.CharField', [], {'max_length': '8'}),
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'member': ('django.db.models.fields.CharField', [], {'max_length': '8'}),
            'num_replicates': ('django.db.models.fields.IntegerField', [], {}),
            'pmid': ('django.db.models.fields.IntegerField', [], {}),
            'quality': ('django.db.models.fields.CharField', [], {'max_length': '256'}),
            'species': ('django.db.models.fields.CharField', [], {'max_length': '32'})
        }
    }

    complete_apps = ['search']
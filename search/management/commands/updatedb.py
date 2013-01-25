from django.core.management.base import BaseCommand, CommandError
import csv

from search.models import Experiment, Transcription, Tissue

class Command(BaseCommand):
    args = 'filename'
    help = ("Updates the database with new rows from a CSV file.\n\n"
            "The CSV file should use tab characters to separate values.\n"
            "You can create a CSV in Excel by using 'Save as...' and\n"
            "selecting .csv or by using 'Export'.\n")

    def handle(self, *args, **options):
        if len(args) != 1:
            raise CommandError("Please give one and only one filename.")
        #(jfriedly) I considered putting this in a try: except IOError, but I
        # think it's better to just let that bubble up.
        with open(args[0], 'r') as csvfile:
            reader = csv.reader(csvfile, delimiter='\t')
            for row in reader:
                # If a row contains column headers, just skip over it. This
                # check is a bit naive, since it only checks the first column.
                if row[0].lower().strip() == 'gene':
                    continue
                
                e = Experiment(gene=row[0], pmid=row[2],
                    transcription_family=row[1], species=row[3],
                    expt_name=row[4], replicates=row[5], control=row[6],
                    quality=row[7])
                e.save()

In general, there are two kinds of experiments that associate a transcription factor with a gene target.
These are listed below.
In order to return results for a transcription factor search, we need to meet a few minimum qualifications:

* At least one experiment from each category

* A minimum total score from the experiments matching the factor OR at least two experiments from each category


Binding Experiments
-------------------

* ChIP

* ChIP-qPCR (or possibly ChIP-q-PCR)

* ChIP-PCR

* ChIP-chip

* ChIP-seq

* EMSA


Gene Expression Experiments
---------------------------

* Reporter gene assay

* Western blot

* Northern blot

* PCR

* q-PCR

* RT-PCR

* Microarray

* RNA-seq

* Nuclear run-on

* Nuclear run-off


Transcription Family/Factor
---------------------------

Thierry would like to have a smart user interface for selecting transcription factors.
His ideal interface would have one dropdown that has major and minor headings as values, and will automatically select all of the minor headings when a user clicks on a major heading.
We can implement this by sending a multiselect dropdown with values: ['E2F', '&nbsp;&nbsp;E2F1', '&nbsp;&nbsp;E2F2', ... 'FOX', '&nbsp;&nbsp;FOXA', ... ].
The with JavaScript, automatically select/unselect all the ones starting with spaces whenever a heading is clicked.
Send all the values to the server, and ignore the headings::

    E2F
        E2F1
        E2F2
        .
        .
        .
    Myc
        c-Myc
        n-Myc
    .
    .
    .


Search Results
--------------

We need to display these fields in this order:

* Transcription Factor

* Human Gene

* Mouse Gene

* PubMed ID

* Species

* Tissue

* Cell Line

* Experiment Type

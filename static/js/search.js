/**
   This is a collection of JavaScript functions. 
   @authors - Djenome Team - Tremayne Mushayahama, Joel Friedly, Grant Michalski, Edward Powell
   @primary author - Tremayne Mushayahama
   @date 2/7/2013
*/

/**
   This table orders the column of the table. The purpose of the multidimensional array is to 
   map from DB name to Human readable format
   eg. expt_type - Experimental Type
*/
var TABLE_HEADING = [["transcription_factor", "Transcription Factor"],
                     ["gene", "Gene"],
                     ["pmid", "PMID"],
                     ["species", "Species"],
                     ["experimental_tissues", "Organ"],
                     ["cell_line", "Tissues/Cell Line"],
                     ["expt_type", "Experiment"]];

var INPUT_NAME = [["id_transcription_family", "Transcription Family"],
                  ["id_transcription_factor", "Transcription Factor"],
                  ["id_gene", "Gene"],
                  ["id_species", "Experimental Species"],
                  ["id_tissue_name", "Experimental Tissues"],
                  ["id_expt_type", "Experiment Type"]];
/**
   Prints the headings of the table from a json object. The result is appended to the table
   @param thead - the thead element of the table
   @param object - the json object
*/
function printTHead (thead) {
    var row = '<tr>';
    for(var i=0; i < TABLE_HEADING.length; i++) {
       row += '<th>' + TABLE_HEADING[i][1] + '</th>';
    }
    row += '</tr>'
    thead.append(row);
}
/**
   Prints the rest of the table from a json object. The result is appended to the table
   @param tbody - the tbody element of the table
   @param object - the json object
*/
function printTBody (tbody, object) {
    var row = '<tr>';
    for (var i=0; i < TABLE_HEADING.length; i++) {
        property = TABLE_HEADING[i][0];
        if (property == 'pmid') {
            row += '<td><a href="http://www.ncbi.nlm.nih.gov/pubmed/' + object[property] + '">' + object[property] + '</a></td>';
        } else {
            row += '<td>' + object[property] + '</td>';
        }
    }
    row += '</tr>'; //end the row, ready to append
    tbody.append(row);
}
function addToggleEvents() {
    $(".tft-family-toggle").each(function () {
        $(this).click (function() {
            $($(this).attr('data-target')).collapse("toggle");
        });
    });
}
function fillFamily(trans) {
    var $familyAccordion = $('#family-accordion');
    for (var i =0; i<trans.length; i++) {
        var $familyGroup = $('<div></div>').addClass('accordion-group');
        var $familyHeading = $('<div></div>').addClass('accordion-heading tft-family-heading');
        var $familyToggle = $('<a></a>').addClass ('btn accordion-toggle tft-family-toggle ');
       // var $familyName = $('<label></label>');//.addClass('checkbox');
        var $familyNameCheckBox = $('<input id="'+trans[i][0]+'"type="checkbox" />').addClass('tft-family-select');
        var $collapse = $('<div></div>').addClass('accordion-body collapse');
        var $inner = $('<div></div>').addClass('accordion-inner');
        $familyToggle.attr('data-toggle', 'collapse');
        $familyToggle.attr('data-parent', '#family-accordion');
        $familyToggle.attr('data-target', '#collapse'+trans[i][0]);
        $familyToggle.text(trans[i][0]);

        $collapse.attr('id', 'collapse'+trans[i][0]);
        $familyNameCheckBox.attr('tft-parent-id', '#collapse'+trans[i][0]);

        //appending
        $familyToggle.prepend("&nbsp;&nbsp;&nbsp;");
        $familyToggle.prepend($familyNameCheckBox);
        $familyHeading.append($familyToggle);
        
        $collapse.append($inner);
        $familyGroup.append($familyHeading);
        $familyGroup.append($collapse);
        for (var j= 1; j< trans[i].length; j++) {
            $familyMember = $('<li><label class="checkbox"><input type="checkbox" my-parent="'+trans[i][0]+'" class="family-member '+trans[i][0]+'" value="'+trans[i][j]+'">'
                              +trans[i][j]
                              +'</label></li>');
            $inner.append($familyMember);
        }
        $familyAccordion.append($familyGroup);
    }
    $('.tft-family-dropdown-menu').click(function (e) {
        e.stopPropagation();
    }); 
    addToggleEvents(trans);
}

//initSearchForm require that values are in pairs label and a bunch of ctrols.
function initSearchForm () {
    var $searchForm = $('#tft-search-form').children(':not(:hidden)');
    /*add the class control-label to all labels in the 
      input form
    */
    
    $('#tft-search-form > label').addClass('control-label ');
    for(var i=0, j=$searchForm.length; i<j; i+=2) {
        //alert($searchForm[i]);
        $searchForm.slice(i, i+2).wrapAll('<div class="control-group span5"/>')
    }
    $(':input:not(:hidden)').wrap('<div class="controls " />');//wraps every input which is not hidden
    console.log('Beuatifying your search Form!');
}
function searchPreview() {
    //refresh the description
    var $preview = $('#tft-search-preview');
    $preview.children().remove();
    var $dl = $('<dl></dl>');
    $dl.append('<h4>Preview</h4>');
    $dl.addClass('dl-horizontal');
    for (var i=0; i < INPUT_NAME.length; i++) {
        var inputVal = $('#'+INPUT_NAME[i][0]).val();
        // console.log(inputVal);
        if($.trim(inputVal)!='') {
            $dl.append('<dt>'+INPUT_NAME[i][1]+': </dt>');
            $dl.append('<dd>'+inputVal+'</dd>');
        }
    }
    $preview.append($dl);
}
function ajaxSearch () {
    $.post('/', $('#tft-search-form').serialize(), function (data) {
        
        //clear the search result for ready for next search result
        $('#search-results').children().remove()
        //create a table here
        var table = $('<table></table>').addClass('table table-condensed table-striped table-hover');
        var thead = $('<thead></thead>');
        var tbody = $('<tbody></tbody>');
        //Make sure we print the heading when the results returns values
        if (data.length > 0){
            printTHead(thead);
            for (var i = 0; i < data.length; i++) {
                printTBody(tbody, data[i]);
            }
            table.append(thead);
            table.append(tbody);
            $('#search-results').append(table);
        }
    }, 'json');
}
$(document).ready(function () {
    console.log("Loading jQuery, jQuery UI, and our own custom js!!!");
    $.ajaxSetup({traditional: true});
    $('#tft-search-btn-1').click(ajaxSearch);
    //an ecample of the transcription family
    var trans = [['E2F', 'E2F1', 'E2F2', 'E2F3', 'E2F3A', 'E2F4', 'E2F5', 'E2F6', 'E2F7'], 
                 ['MYC','c-Myc','n-Myc']];
    
    
    fillFamily(trans);
    $('.input-text').keypress(function (e) {
        if (e.which == 13) {
            console.log('enter pressed');
            ajaxSearch();
        }
    });
    $('.input-select').change(ajaxSearch);
    initSearchForm ();
    addEventHandlers();
});
function populateTranscriptionInput() {
    var factors = '[';
    $('.family-member:checked').each(function() {
        factors += '"'+$(this).attr('value') + '",'
    });
    if (factors.length>1) {
        return factors.slice(0, -1)+']';
    } else {
        return ''; // so that it does not return [
    }
}
//I will comment later
function addEventHandlers() {
    $('#tft-search-btn-2').click(function (){
        $('#tft-dialog-form').modal('hide');
        searchPreview();
    });
    $('#tft-search-btn-1').click(function() {
        $('#id_transcription_factor').val(populateTranscriptionInput());
        alert($('#id_transcription_factor').val());
        ajaxSearch();
    });
   
    $('.tft-family-select').click(function() {
        $($(this).attr('tft-parent-id')).collapse('show');
        if($(this).is(':checked')==true){
            $('.'+$(this).attr('id')).each(function(){ 
                this.checked = true;
            });
        } else {
            $('.'+$(this).attr('id')).each(function(){ 
                this.checked = false;
            });
        }
    });
    $('#tft-home-tabs a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    })
        /* $('.family-member').click(function() {
       // console.log('im a clicked member');
       // console.log( $('.'+$(this).attr('my-parent')).length);
         $('.'+$(this).attr('my-parent')).each(function(){ 
             if($(this).is(':checked')==false) {
                 $('#'+$(this).attr('my-parent')).attr("checked", "false");
             }
         });
    });*/
    $('.dropdown-toggle').dropdown();
  //  $(".collapse").collapse("toggle");
}
$(function() {
    
    var tf = [
        "E2F",
        "MYC",
        "STAT",
        'Human',
        'Mouse',
        'Chip'
    ];
    function split( val ) {
        return val.split( /,\s*/ );
    }
    function extractLast( term ) {
        return split( term ).pop();
    }
    $( "#tft-search-query" )
    // don't navigate away from the field on tab when selecting an item
        .bind( "keydown", function( event ) {
            if ( event.keyCode === $.ui.keyCode.TAB &&
                 $( this ).data( "autocomplete" ).menu.active ) {
                event.preventDefault();
            }
        })
        .autocomplete({
            minLength: 0,
            source: function( request, response ) {
                // delegate back to autocomplete, but extract the last term
                response( $.ui.autocomplete.filter(
                    tf, extractLast( request.term ) ) );
            },
            focus: function() {
                // prevent value inserted on focus
                return false;
            },
            select: function( event, ui ) {
                var terms = split( this.value );
                // remove the current input
                terms.pop();
                // add the selected item
                terms.push( ui.item.value );
                // add placeholder to get the comma-and-space at the end
                terms.push( "" );
                 this.value = terms.join( ", " );
                return false;
            }
        });
});
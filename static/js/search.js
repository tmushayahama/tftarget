/**
   This is a collection of JavaScript functions. 
   @author - Djenome Team - Tremayne Mushayahama, Joel Friedly, Grant Michalski, Edward Powell
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
                     ["species", "Experimental Species"],
                     ["experimental_tissues", "Experimental Tissues"],
                     ["cell_line", "Cell Line"],
                     ["expt_type", "Experimental Type"]];
/**
   Prints the headings of the table from a json object. The result is appended to the table
   @param thead - the thead element of the table
   @param object - the json object
*/
function printTHead (thead) {
    var row = '<tr>';
    //for (property in object) {
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

/*initSearchForm require that values are in pairs label and a bunch of ctrols.
*/
function initSearchForm () {
    var $searchForm = $('#tft-search-form').children();
    /*add the class control-label to all labels in the 
      input form
    */
    $('label').addClass('control-label');
    $('.input').wrap('<div class="controls"/>');//every input has a paret of div controls
    for(var i=1, j=$searchForm.length; i<j; i+=2) {
       $searchForm.slice(i, i+2).wrapAll('<div class="control-group"/div>')
    }
    //$searchForm.children(0).remove();
    //
    console.log('Beuatifying your search Form');
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
    $('#tft-search-btn-2').click(ajaxSearch);
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
function addEventHandlers() {
    $('#tft-search-btn-2').click(function (){
        $('#tft-dialog-form').modal('hide');
    });
   // $('#tft-dialog-form').modal();
    /*$('#tft-dialog-form').dialog({
        autoOpen: false,
        height: 600,
        width: 600,
        resizable:false,
        draggable:false,
        position: "center",
        modal:true,
        zIndex:10
    });
    $('#tft-advanced-search')
        .click(function() {
            $('#tft-dialog-form').dialog('open');
        });*/
}
 $(function() {

     var tf = [
         "E2F",
         "MYC",
         "STAT"
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
function printTHead (thead, object) {
    var row = '<tr>';
    for (property in object) {
        row += '<th>' + property + '</th>';
    }
    row += '</tr>'
    thead.append(row);
}
/*Prints a table of tftarget values. It is independentto the number of 
columns and rows returned
@params 
table - the table you want to append a row to.
object - the json object
row_num - to distinguish between a heading and data ....will think of a better way. If row_num == 0, it meas it is a heading otherwise data.
*/

function printTBody (tbody, object, row_num) {
    //initialize the row
    var row = '<tr>';
    for (property in object) {
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
    var $searchForm = $('#search_form').children();
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
    $.post('/', $('#search_form').serialize(), function (data) {
        //clear the search result for ready for next search result
        $('#search_results').children().remove()
        //create a table here
        var table = $('<table></table>').addClass('table table-condensed table-striped table-hover');
        var thead = $('<thead></thead>');
        var tbody = $('<tbody></tbody>');
        if (data.length > 0){
             printTHead(thead, data[0]);
        }
        for (var i = 0; i < data.length; i++) {
            printTBody(tbody, data[i]);
        }
        table.append(thead);
        table.append(tbody);
       $('#search_results').append(table);
    }, 'json');
}


$(document).ready(function () {
    console.log("Loading jQuery, jQuery UI, and our own custom js!!!");
    $.ajaxSetup({traditional: true});

    $('#search_button').click(ajaxSearch);
    $('.input-text').keypress(function (e) {
        if (e.which == 13) {
            console.log('enter pressed');
            ajaxSearch();
        }
    });
    $('.input-select').change(ajaxSearch);
    initSearchForm ();
    initDialog();
});

function initDialog() {
$('#search_form').dialog({
    autoOpen: false,
    height: 300,
    width: 300,
    modal:true
});
}
function printObject (object) {
    output = '{'
    for (property in object) {
        output += '"' + property + '": "' + object[property] + '", ';
    }
    return output + '}'
}


function ajaxSearch () {
    $.post('/', $('#search_form').serialize(), function (data) {
        $('#search_results').children().remove()
        var i;
        for (i = 0; i < data.length; i++) {
            $('#search_results').append("<p>" + printObject(data[i]));
        }
    }, 'json');
}


$(document).ready(function () {
    console.log("We're loading jQuery, jQuery UI, and our own custom js!")

    $.ajaxSetup({traditional: true});

    $('#search_button').click(ajaxSearch);
    $('.ctrlHolder').keypress(function (e) {
        if (e.which == 13) {
            ajaxSearch();
        }
    });
});

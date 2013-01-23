function printObject (object) {
    output = '{'
    for (property in object) {
        output += '"' + property + '": "' + object[property] + '", ';
    }
    return output + '}'
}


$(document).ready(function () {
    console.log("We're loading jQuery, jQuery UI, and our own custom js!")

    $.ajaxSetup({traditional: true});

    $('#search_button').click(function () {
        $.post('/search/', $('#search_form').serialize(), function (data) {
            var i;
            for (i=0; i < data.length; i++) {
                $('#search_results').append("<p>" + printObject(data[i]));
            }
        }, 'json');
    });
});

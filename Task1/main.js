"use strict";

var tableHeaderWords = ["Тип рейса", "Номер рейса", "Авиакомпания", "Тип самолета", "Аэропорт назначения", "Время вылета", "Время прилета", "Статус рейса", "Примечание"];

var tHeat = tableHeaderWords.reduce(function(a, b) {
    return a + "<th>" + b + "</th>";
}, '');

$('table#example thead').append("<tr>" + tHeat + "</tr>");


var table = $('#example').DataTable({
    "order": [
        [6, 'asc']
    ],
    "ajax": 'JsonData.json',

    "initComplete": function(settings, json) {

        new $.fn.dataTable.FixedHeader(table, {
            alwaysCloneTop: true
        });

        $("table#example tbody tr").click(function() {
            popupShower(this);
        });
    }
});
//fix Header
new $.fn.dataTable.FixedHeader(table, {
    alwaysCloneTop: true
});


function popupShower(obj) {
    var targetArray = [];

    $(obj).each(function(index, tr) {
        $("td", tr).map(function(index, td) {
            targetArray.push("<tr><th>" + tableHeaderWords[index] + "</th><th>" + $(td).text() + "</th></tr>");
        });
    });

    var dataPopup = "<table>" + targetArray.join('') + "</table>"
    console.log(dataPopup)
    $('#popup').empty();
    $('#popup').append(dataPopup);
    $('#popup').fadeIn();
};

$("#popup").click(function() {
    $('#popup').fadeOut();
})

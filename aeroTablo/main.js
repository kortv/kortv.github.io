"use strict";

var dataStr = [];
var tableHeader = ["Тип рейса", "Номер рейса", "Авиакомпания", "Лого", "Тип самолета", "Аэропорт назначения", "Время вылета", "Время прилета", "Статус рейса", "Примечание"];


$.getJSON('JsonData.json', function(data) {
    $.each(data, function(index, elem) {
        dataStr.push('<tr><td>' + elem.Type + '</td><td>' + elem.Number + '</td><td>' + elem.Name + '</td><td>' + elem.Logo + '</td><td>' + elem.Airplane + '</td><td>' + elem.DepartDestine + '</td><td>' + elem.DepartTime + '</td><td>' + elem.ArrivalTime + '</td><td>' + elem.Status + '</td><td>' + elem.Note + '</td></tr>');
    });

    var tHeat = tableHeader.reduce(function(a, b) {
        return a + "<td>" + b + "</td>";
    }, '');
    $('table#example thead').append("<tr>" + tHeat + "</tr>");
    console.log(tHeat)


    $('table#example tbody').append(dataStr.join(''));

}).done(function() {
    var table = $('#example').DataTable();
    new $.fn.dataTable.FixedHeader(table, {
        alwaysCloneTop: true
    });


        function cons(obj) {
            var targetArray = []
            $(obj).each(function(index, tr) {
                $("td", tr).map(function(index, td) {
                    console.log(index, td)
                    targetArray.push("<tr><td>" + tableHeader[index] + "</td><td>" + $(td).text() + "</td></tr>");
                });
            });

            var ans = "<table>" + targetArray.join('') + "<table>"

            $('#popup').empty();
            $('#popup').append(ans);
            $('#popup').fadeIn();
        };

    $("table#example tbody tr").click(function() {
        cons(this);
        console.log(this)
    });

    $("#popup").click(function() {
        $('#popup').fadeOut();
    })

});
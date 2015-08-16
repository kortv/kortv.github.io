/**
 * Реализация API, не изменяйте ее
 * @param {string} url
 * @param {function} callback
 */
function getData(url, callback) {
    var RESPONSES = {
        '/countries': [
            {name: 'Cameroon', continent: 'Africa'},
            {name :'Fiji Islands', continent: 'Oceania'},
            {name: 'Guatemala', continent: 'North America'},
            {name: 'Japan', continent: 'Asia'},
            {name: 'Yugoslavia', continent: 'Europe'},
            {name: 'Tanzania', continent: 'Africa'}
        ],
        '/cities': [
            {name: 'Bamenda', country: 'Cameroon'},
            {name: 'Suva', country: 'Fiji Islands'},
            {name: 'Quetzaltenango', country: 'Guatemala'},
            {name: 'Osaka', country: 'Japan'},
            {name: 'Subotica', country: 'Yugoslavia'},
            {name: 'Zanzibar', country: 'Tanzania'},
        ],
        '/populations': [
            {count: 138000, name: 'Bamenda'},
            {count: 77366, name: 'Suva'},
            {count: 90801, name: 'Quetzaltenango'},
            {count: 2595674, name: 'Osaka'},
            {count: 100386, name: 'Subotica'},
            {count: 157634, name: 'Zanzibar'}
        ]
    };

    setTimeout(function () {
        var result = RESPONSES[url];
        if (!result) {
            return callback('Unknown url');
        }

        callback(null, result);
    }, Math.round(Math.random * 1000));
}

/**
 * Ваши изменения ниже
 */

var requests = ['/countries', '/cities', '/populations'];
var responses = {};


requests.forEach(function(request) {

    var callback = function(error, result) {
        responses[request] = result;
        var l = [];
        for (K in responses)
            l.push(K);

        if (l.length == 3) {
            var c = [],
                cc = [],
                p = 0;
            for (i = 0; i < responses['/countries'].length; i++) {
                if (responses['/countries'][i].continent === 'Africa') {
                    c.push(responses['/countries'][i].name);
                }
            }

            for (i = 0; i < responses['/cities'].length; i++) {
                for (j = 0; j < c.length; j++) {
                    if (responses['/cities'][i].country === c[j]) {
                        cc.push(responses['/cities'][i].name);
                    }
                }
            }

            for (i = 0; i < responses['/populations'].length; i++) {
                for (j = 0; j < cc.length; j++) {
                    if (responses['/populations'][i].name === cc[j]) {
                        p += responses['/populations'][i].count;
                    }
                }
            }

            console.log('Total population in African cities: ' + p);

        }
    };

    getData(request, callback);
})

function cleaner (val) {
    return val!=undefined
}

setTimeout(function() { // for async prompt
    
    var collectedCount = 0;
    var question = prompt("Please enter country name");

    var citiesInCountry = responses['/cities'].map(function(arg) {
        if (arg.country === question) return arg.name
    }).filter(cleaner);
    if (citiesInCountry.length) {
        citiesInCountry.forEach(function(city) {
            responses['/populations'].forEach(function(obj) {
                if (obj.name === city) collectedCount += obj.count
            })
        })
        console.log('Total population in ' + question + ' : ' + collectedCount)
    } else console.log('Sorry, we do not have information about ' + question)
}, 1)




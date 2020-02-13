function date()
{
    return new Date().getFullYear();
}

function total(data)
{
    // init total
    var toto = 0;

    for (var i = 0; i < data.length;i++)
    {
        toto += data[i].price;
        // console.log(toto);
    }

    return toto;
}

function ordersTemplate(e)
{
    // console.log(e.items);
    return '<h1>Table N° ' + e.table + '</h1> ' +
        '<section>' +
            '<ul>' +
                '<li>'+ e.id + '</li>' +
                '<li class="table">' + e.table + '</li>' +
                '<li>Invités N° ' + e.guests + '</li>' +
                '<li>' + date() + '</li>' +
                '<p>' + total(e.items) + '</p>' +
                '<a href="#">Détail de la commande</a>' +
            '</ul>' +
        '</section>';
}

fetch('https://raw.githubusercontent.com/popina/test-javascript/master/data.json')
    .then(res => {
        return res.json();
    })
    .then((data) => {
        document.getElementById('total').innerHTML = data.orders.map(ordersTemplate).join('');
    })
    .catch(error => console.log('ERROR : ' + error));

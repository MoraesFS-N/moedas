var campos = [    //Pegando valores de um form
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
];

var tbody = document.querySelector('table tbody');
// Adicionando ouvidor de eventos
document.querySelector('.form').addEventListener('submit', (event) => {
    event.preventDefault();

    // criando linha na tabela
    var tr = document.createElement('tr');

    campos.forEach(function(campo){
        var td = document.createElement('td');
        td.textContent = campo.value;           //
        tr.appendChild(td);                     //
    });

    var tdVolume = document.createElement('td');
    // com a multiplicação dos campos correspondentes na posição 1 = quantidade e posição 2 = quantidade
    tdVolume.textContent = campos[1].value = campos[2].value;
    tr.appendChild(tdVolume);

    tbody.appendChild(tr);

    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 0;

    campos[1].focus();
 
});


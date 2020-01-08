var ctx = document.getElementById('graphic');

var legendasExemplo = ['Legenda Exemplo 1', 'Legenda Exemplo 2', 'Legenda Exemplo 3','Legenda Exemplo 4'];
var valoresExemplos = [];
var bgcolor = [];

for (var rdm = 0; rdm < 4; rdm ++){
    valoresExemplos.push(getRandomValue());
    bgcolor[rdm] = getRandomColor();
}


var chartGraph = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: legendasExemplo,
        datasets: [{
            label: 'Exemplos de valor',
            data: valoresExemplos,
            backgroundColor: bgcolor
        }]
    },
    options: {
        rotation: 1 * Math.PI,
        circumference: 1 * Math.PI,
        title: {
            display: true,
            fontSize: 20,
            text: 'Exemplo de grafico em JS :D'
        }
        
    }

});

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getRandomValue(){
    var aux = Math.random()*1000;
    aux = Math.floor(aux);
    return aux;
}
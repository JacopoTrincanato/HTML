// Cambia il colore di sfondo della sezione "Profilo Personale" al passaggio del mouse
const profiloSezione = document.getElementById('profilo');

profiloSezione.addEventListener('mouseover', function() {
    profiloSezione.style.backgroundColor = 'blue'; // Cambia il colore di sfondo
});

profiloSezione.addEventListener('mouseout', function() {
    profiloSezione.style.backgroundColor = 'white'; // Ripristina il colore di sfondo originale
});

// Mostra un alert quando un progetto viene cliccato
const progetti = document.querySelectorAll('.progetto');

progetti.forEach(function(progetto) {
    progetto.addEventListener('click', function() {
        alert('Hai cliccato su ' + progetto.textContent);
    });
});

/*var interoNegativo = -10;
var zero = 0;
var interoPositivo = 123;
var numeroDecimale = 0.52;
var altroNumeroDecimale = 12.34;
var decimaleNegativo = -1.2;
var decimaleZero = 1.0;*/
var primoNumero = 12e3; // equivalente a 12 x 103 cioè 12.000
var secondoNumero = 3.5e-4; // equivalente a 3.5 x 10-4 cioè 0,00035


let testo = '56' + '56';
console.log(testo);


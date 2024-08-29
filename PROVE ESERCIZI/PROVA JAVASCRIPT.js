//let collezione = [1, 2, 3, 4, 5];
//console.log(collezione[0]);

/*let persona = {
    nome: "Jacopo",
    cognome: "Trincanato",
    codiceFiscale: "bwubiubiewbiebi8707",
    cittaNascita: "Padova",
    eta: "22",
    coloriPreferiti:["blu", "bianco", "nero"]
};

console.log(persona.nome);
console.log(persona.coloriPreferiti[0]);*/

let persona = 500;
persona = "Jacopo";
console.log(typeof persona);

const numero = 3456 % 789;
console.log(numero);

let numeroDue = 10;
numeroDue++
console.log(numeroDue);

let numeroTre = 43 + 5;
numeroTre -= 5;
console.log(numeroTre);

let numeroQuattro = 87;
console.log(numeroQuattro >= 11);

let numeroCinque = "92";
console.log(numeroCinque != 92);

let numeroSei = 537 / 86;
console.log(numeroSei);

let numeroSette = 10 + 8;
numeroSette*=4;
console.log(numeroSette);

let nomeUno = "Jacopo";
let testo = nomeUno + "oggi va dal macellaio";
console.log(testo);

let testoUno = "ciao sono una variabile";
let elemento = `${testoUno} bellissima`;
console.log(elemento.length);

let stringa = "questo è un corso di javascript completo e aggiornato";
let indexCorso= stringa.indexOf("corso");
console.log(stringa.toUpperCase()); 
console.log(stringa.slice(indexCorso)); 

let stringaUno = "questo è un corso di javascript completo e aggiornato";
let indexCorsoUno= stringaUno.indexOf("corso");
console.log(stringa.replace("corso", "PUEL"));

let citta = "Milano, Venezia, Palermo, Torino, Napoli";
let data = ["Milano","Venezia","Palermo","Torino","Napoli"];
for(i=3; i<data.length; i++){
    console.log(data[i]);
}

let cittaUno = "Milano, Torino, Roma, Venezia, Napoli";
let dataUno= citta.split(",");
console.log(dataUno);
console.log(typeof cittaUno);

let dataDue= ["Milano", "Torino", "Roma", "Venezia", "Napoli"];
let cittaDue = data.join(",");
console.log(cittaDue);
console.log(typeof dataDue); 

let dataTre= ["Milano", "Torino", "Roma", "Venezia", "Napoli"];
dataTre.push("Firenze");
dataTre.shift();
console.log(dataTre); 

let numeroOtto = "97";
console.log(Number(numeroOtto)+3);

let superStringa = "Mamma mia i fagioli";
console.log(superStringa[superStringa.length-1]);
console.log(superStringa[0]);

let valore = 56;
let risultato = "56" + valore.toString();
console.log(risultato);

let identita = "Mario";
if(identita == "Gianfrancioschio"){
    console.log("Ciao Gianfrancioschio");
}else{
    console.log("Sono una ballerina");
};

let testoDue = "ciao sono una variabile";
let elementoDue = `${2 + 6} bellissima`;
console.log(testoDue);






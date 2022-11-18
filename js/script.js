let nome = prompt("Inserisci il tuo NOME");
let cognome = prompt("Inserisci il tuo COGNOME");
let colore = prompt("Inserisci il tuo COLORE PREFERITO");

let userData = nome + cognome + colore + "22";

document.getElementById('userData').innerHTML = userData;
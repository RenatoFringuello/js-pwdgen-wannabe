let name = prompt("Inserisci il tuo NOME");
let surname = prompt("Inserisci il tuo COGNOME");
let color = prompt("Inserisci il tuo COLORE PREFERITO");
let ageTenYearLater = parseInt(prompt("Quanti anni hai?")) + 10;

let userData = name + surname + color + "22";
let userDataTenYearLater = name + surname + color + ageTenYearLater;

document.getElementById('result').innerHTML = userData + "<br>" + userDataTenYearLater;
document.getElementById('name').innerHTML = name;
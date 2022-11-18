let firstComponent = prompt("Inserisci il primo componente della famiglia");
let secondComponent = prompt("Inserisci il secondo componente della famiglia");
let thirdComponent = prompt("Inserisci il terzo componente della famiglia");
let fourthComponent = prompt("Inserisci il quarto componente della famiglia");

let components = "La famiglia è composta da " + `${firstComponent} ${secondComponent} ${thirdComponent} ${fourthComponent}`;

document.getElementById('componentsList').innerHTML = components;
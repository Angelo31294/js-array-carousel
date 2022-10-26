"use strict"
// MILESTONE 2
// Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
// Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
// Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.

const images = ["/img/01.jpg", "/img/02.jpg", "/img/03.jpg", "/img/04.jpg", "/img/05.jpg"];

const itemImg = document.querySelector(".items");

for (let i = 0; i < images.length; i++) {
    const item = document.createElement("div");  // Creo un elemento "div"
    item.classList.add("item");                  // Aggiungo la classe "item" al mio elemento "div"
    if( i === 0 ) {                              // SE il mio elemento ha valore = 0 ALLORA gli aggiungo la classe ("active")
        item.classList.add("active");
    }
    const img = document.createElement("img");   // Creo un elemento "img"
    img.setAttribute("src", images[i]);          // Aggiungo all' "src" il link dell'immagine
    item.append(img);                            // Inserisco la mia immagine
    itemImg.append(item);                        // Inserisco il mio elemento item
}
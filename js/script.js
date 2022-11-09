 "use strict"
// MILESTONE 2
// Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
// Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
// Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.

const images = ["/img/01.jpg", "/img/02.jpg", "/img/03.jpg", "/img/04.jpg", "/img/05.jpg"];

// Seleziono l'elemento in cui fare il ciclo "for"
const itemImg = document.querySelector(".items");

//Ciclo sull'array delle immagini
for (let i = 0; i < images.length; i++) {
    const srcImg = images[i];

    // Creo l'item che dovrò inserire nella pagina
    const item =
    `
     <div class="item active">
                <img src="${srcImg}" alt="">
            </div>
    `;

    // Vado ad inserire l'item nel HTML
    itemImg.innerHTML = itemImg.innerHTML + itemImg;
}

// Seleziono il primo elemento "item" e gli aggiungo la classe "active"
document.querySelector("item").classList.add("active");

// MILESTONE 3
// Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.

//stato dello slider
let currentImageIndex = 0;
// Seleziono il bottone ".down" per far scorrere le immagini
const nextBtn = document.querySelector(".down"); 
const items = document.querySelector(".item");

// Aggiungo l'evento click al pulsante
nextBtn.addEventListener(`click`, function (){ 
    items[currentImageIndex].classList.remove("active");
    if ( currentImageIndex === images.length -1 ){
        currentImageIndex = 0;
    } else {
        currentImageIndex++;
    }
    items[currentImageIndex].classList.add("active");

});

// Seleziono il bottone ".up" per far scorrere le immagini
const prevBtn = document.querySelector(".up");

// Aggiungo l'evento click al pulsante
prevBtn.addEventListener(`click`, function (){
    items[currentImageIndex].classList.remove("active");
    if ( currentImageIndex === images.length -1 ){
        currentImageIndex = 0;
    } else {
        currentImageIndex--;
    }
    items[currentImageIndex].classList.add("active");
});
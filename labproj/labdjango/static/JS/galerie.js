"use strict";
// Array cu imaginile din folderul static/media
const images = [
    `${window.STATIC_URL}media/cute.jpeg`,
    `${window.STATIC_URL}media/cute-2.jpeg`,
    `${window.STATIC_URL}media/cute-3.jpeg`,
];
// Obtinem elementul principal din DOM
const mainImage = document.getElementById("carousel-image");
// Verificam daca elementul exista
if (!mainImage)
    throw new Error("Nu exista imagini");
let currentIndex = -1;
showNextImage();
// Functie care schimba imaginea mare
function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    mainImage.src = images[currentIndex];
}
// Slider automat la 3 secunde
setInterval(showNextImage, 3 * 1000);

"use strict";
// Creeaza un element div care va fi cursorul personalizat
const cursor = document.createElement("div");
// Seteaza un ID pentru acest element ca sa putem aplica stiluri CSS usor
cursor.id = "cursor";
// Adauga elementul creat in corpul documentului, astfel incat sa fie vizibil pe pagina
document.body.appendChild(cursor);
// Este nevoie sa initializezi variabila pentru nuanta culorii la 0
cursor.style.backgroundColor = "black";
cursor.style.color = "black";
// Asculta evenimentul de miscare a mouse-ului pe intreaga pagina
document.addEventListener("mousemove", (e) => {
    // Actualizeaza pozitia elementului cursor in functie de coordonatele mouse-ului
    cursor.style.left = `${e.clientX + 3}px`; // coordonata X
    cursor.style.top = `${e.clientY + 3}px`; // coordonata Y
});
// Functie care schimba culoarea cursorului ciclic pentru efect curcubeu
function animateColor(timestamp) {
    // Este nevoie sa cresti nuanta cu 1 si sa nu uiti sa o mentinem intre 0 si 359
    // Seteaza culoarea de fundal a cursorului folosind HSL (Hue, Saturation, Lightness)
    cursor.style.backgroundColor = `hsl(${Math.floor(timestamp / 15) % 360}, 69%, 33%)`;
    // Adauga un efect de glow (umbra) la cursor cu aceeasi culoare
    cursor.style.boxShadow = `0 0 15px hsl(${Math.floor(timestamp / 15) % 300 + 60}, 69%, 33%)`;
    requestAnimationFrame(animateColor);
}
// Este nevoie sa pornesti animatia de schimbare a culorii
animateColor(0);

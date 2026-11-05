// Array cu imaginile din folderul ../MEDIA
const images: string[] = [
"../MEDIA/cute.jpeg", // Exemplu de imagine
"../MEDIA/cute-2.jpeg", // Exemplu de imagine
"../MEDIA/cute-3.jpeg", // Exemplu de imagine
];
// Obtinem elementul principal din DOM
const mainImage = document.getElementById("carousel-image") as HTMLImageElement;

// Verificam daca elementul exista
if (!mainImage) throw new Error("Nu exista imagini");
let currentIndex = -1;
showNextImage();
// Functie care schimba imaginea mare
function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    mainImage.src = images[currentIndex];
}
// Slider automat la 3 secunde
setInterval(showNextImage, 3*1000);
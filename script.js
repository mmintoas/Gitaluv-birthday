const images = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg', 'images/5.jpg'];
let currentIndex = 0;
let isPlaying = false;
let interval;

const slideshow = document.getElementById('slideshow');
const playPauseBtn = document.getElementById('playPauseBtn');
const confettiBtn = document.getElementById('confettiBtn');
const loveBtn = document.getElementById('loveBtn');
const thumbs = document.querySelectorAll('.thumb');

function showImage(index) {
    currentIndex = index;
    slideshow.src = images[currentIndex];
    slideshow.style.transform = 'scale(1.1)';
    setTimeout(() => slideshow.style.transform = 'scale(1)', 500);
}

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function startSlideshow() {
    if (!isPlaying) {
        interval = setInterval(showNextImage, 3000);
        isPlaying = true;
        playPauseBtn.textContent = '⏸️ Berhenti Slideshow';
    }
}

function stopSlideshow() {
    clearInterval(interval);
    isPlaying = false;

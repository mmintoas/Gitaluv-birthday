const images = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg', 'images/5.jpg'];
let currentIndex = 0;
let isPlaying = false;
let interval;

const slideshow = document.getElementById('slideshow');
const playPauseBtn = document.getElementById('playPauseBtn');

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    slideshow.src = images[currentIndex];
}

function startSlideshow() {
    if (!isPlaying) {
        interval = setInterval(showNextImage, 3000); // Ganti gambar setiap 3 detik
        isPlaying = true;
        playPauseBtn.textContent = '⏸️ Berhenti Slideshow';
    }
}

function stopSlideshow() {
    clearInterval(interval);
    isPlaying = false;
    playPauseBtn.textContent = '▶️ Mainkan Slideshow (Klik untuk Berhenti!)';
}

playPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        stopSlideshow();
    } else {
        startSlideshow();
    }
});

// Mulai slideshow otomatis saat halaman load
startSlideshow();

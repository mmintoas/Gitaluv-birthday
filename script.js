const images = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg', 'images/5.jpg'];
let currentIndex = 0;
const galleryImg = document.getElementById('galleryImg');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Fungsi untuk ganti foto galeri
function showImage(index) {
    galleryImg.style.opacity = 0;
    setTimeout(() => {
        galleryImg.src = images[index];
        galleryImg.style.opacity = 1;
    }, 250);
}

// Navigasi galeri
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
});

// Animasi scroll-triggered
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-on-scroll');
        }
    });
});
document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

// Tombol hadiah
document.getElementById('giftBtn').addEventListener('click', () => {
    const message = document.getElementById('giftMessage');
    message.classList.remove('hidden');
    confetti({ particleCount: 200, spread: 70 });
});

// Tombol confetti
document.getElementById('confettiBtn').addEventListener('click', () => {
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
});

// Tombol surprise
document.getElementById('surpriseBtn').addEventListener('click', () => {
    document.body.classList.add('shake');
    setTimeout(() => document.body.classList.remove('shake'), 1000);
    confetti({ particleCount: 300, spread: 100 });
    alert('Surprise! Kamu adalah yang terbaik, Anggita! 🎉😍');
});

// Tombol play lagu tambahan
const lagu1 = document.getElementById('lagu1');
document.getElementById('playLaguBtn').addEventListener('click', () => {
    if (lagu1.paused) {
        lagu1.play();
        document.getElementById('playLaguBtn').textContent = 'Pause Lagu 🎵';
    } else {
        lagu1.pause();
        document.getElementById('playLaguBtn').textContent = 'Play Lagu Tambahan 🎵';
    }
});

// Confetti otomatis saat load
window.addEventListener('load', () => {
    confetti({ particleCount: 50, spread: 60, origin: { y: 0.8 } });
});

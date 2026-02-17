const images = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg', 'images/5.jpg'];
const mainImage = document.getElementById('mainImage');
const thumbs = document.querySelectorAll('.thumb');
const confettiBtn = document.getElementById('confettiBtn');

// Fungsi untuk ganti gambar utama
function changeImage(index) {
    mainImage.style.opacity = 0; // Fade out
    setTimeout(() => {
        mainImage.src = images[index];
        mainImage.style.opacity = 1; // Fade in
    }, 250);
}

// Event listener untuk thumbnail
thumbs.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
        changeImage(index);
    });
});

// Event listener untuk tombol confetti
confettiBtn.addEventListener('click', () => {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
});

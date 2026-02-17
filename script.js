// Animasi scroll-triggered
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-on-scroll');
        }
    });
});
document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

// Modal untuk foto
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const closeBtn = document.querySelector('.close');
document.querySelectorAll('.photo').forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalImg.src = img.dataset.src;
    });
});
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

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

// Confetti otomatis saat load
window.addEventListener('load', () => {
    confetti({ particleCount: 50, spread: 60, origin: { y: 0.8 } });
});

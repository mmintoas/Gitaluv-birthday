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

// Tombol surprise (berfungsi dengan animasi shake)
document.getElementById('surpriseBtn').addEventListener('click', () => {
    document.body.classList.add('shake');
    setTimeout(() => document.body.classList.remove('shake'), 1000);
    confetti({ particleCount: 300, spread: 100 });
    alert('Surprise! Kamu adalah yang terbaik, Anggita! 🎉😍');
});

// Lagu1 otomatis diputar saat load, dengan fallback jika autoplay diblokir
const lagu1 = document.getElementById('lagu1');
window.addEventListener('load', () => {
    lagu1.play().catch(() => {
        alert('Browser memblokir autoplay lagu. Refresh halaman atau izinkan autoplay untuk mendengarkan lagu!');
    });
});

// Confetti otomatis saat load
window.addEventListener('load', () => {
    confetti({ particleCount: 50, spread: 60, origin: { y: 0.8 } });
});

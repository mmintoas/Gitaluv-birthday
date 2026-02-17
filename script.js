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

// Tombol surprise
document.getElementById('surpriseBtn').addEventListener('click', () => {
    document.body.classList.add('shake');
    setTimeout(() => document.body.classList.remove('shake'), 1000);
    confetti({ particleCount: 300, spread: 100 });
    alert('Surprise! Kamu adalah yang terbaik, Anggita! 🎉😍');
});

// Lagu1 otomatis diputar saat load
const lagu1 = document.getElementById('lagu1');
window.addEventListener('load', () => {
    lagu1.play().catch(() => {
        // Fallback jika autoplay diblokir browser
        console.log('Autoplay diblokir, klik tombol manual.');
    });
});

// Tombol play/pause lagu tambahan
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

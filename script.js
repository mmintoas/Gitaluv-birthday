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

// Tombol Mulai Pesta (memulai audio dan menampilkan tombol lain)
const startPartyBtn = document.getElementById('startPartyBtn');
const confettiBtn = document.getElementById('confettiBtn');
const surpriseBtn = document.getElementById('surpriseBtn');
const lagu1 = document.getElementById('lagu1');
const bgMusic = document.getElementById('bgMusic');

startPartyBtn.addEventListener('click', () => {
    // Mulai lagu setelah klik (tidak diblokir)
    lagu1.play();
    bgMusic.play();
    // Sembunyikan tombol mulai, tampilkan tombol lain
    startPartyBtn.classList.add('hidden');
    confettiBtn.classList.remove('hidden');
    surpriseBtn.classList.remove('hidden');
    // Confetti awal
    confetti({ particleCount: 100, spread: 70 });
});

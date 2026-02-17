// Countdown ke ulang tahun berikutnya (17 Februari 2025)
function updateCountdown() {
    const now = new Date();
    const nextBirthday = new Date(now.getFullYear() + 1, 1, 17); // Februari adalah bulan 1 (0-indexed)
    const diff = nextBirthday - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById('countdown').textContent = `${days} hari ${hours} jam lagi!`;
}
updateCountdown();
setInterval(updateCountdown, 60000); // Update setiap menit

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

// Tombol RSVP
document.getElementById('rsvpBtn').addEventListener('click', () => {
    alert('Terima kasih sudah "hadir"! Semoga Anggita bahagia selalu! 🎉');
    confetti({ particleCount: 100, spread: 50 });
});

// Confetti otomatis saat load
window.addEventListener('load', () => {
    confetti({ particleCount: 50, spread: 60, origin: { y: 0.8 } });
});

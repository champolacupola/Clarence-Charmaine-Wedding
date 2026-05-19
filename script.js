// Countdown to wedding date
const WEDDING_DATE = new Date('2026-01-24T16:00:00');

function updateCountdown() {
  const now = new Date();
  const diff = WEDDING_DATE - now;

  if (diff <= 0) {
    document.getElementById('countdown').innerHTML = '<p style="font-family:\'Cormorant Garamond\',serif;font-size:2rem;color:var(--blush)">Today is the day! ♡</p>';
    return;
  }

  const days    = Math.floor(diff / 86400000);
  const hours   = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);

  document.getElementById('days').textContent    = String(days).padStart(2, '0');
  document.getElementById('hours').textContent   = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);

// RSVP form
function handleRsvp(e) {
  e.preventDefault();
  e.target.style.display = 'none';
  document.getElementById('rsvp-confirm').style.display = 'block';
}

// Subtle scroll-in animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.card, .timeline-item, .story-text, .story-image').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

document.addEventListener('animationend', () => {});

// IntersectionObserver visible class
const styleTag = document.createElement('style');
styleTag.textContent = '.visible { opacity: 1 !important; transform: none !important; }';
document.head.appendChild(styleTag);

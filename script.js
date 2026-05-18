 // ===== TOGGLE MENU MOBILE =====
function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  const hamburger = document.getElementById('hamburger');
  const overlay = document.getElementById('navOverlay');

  navLinks.classList.toggle('open');
  hamburger.classList.toggle('active');
  overlay.classList.toggle('show');

  // Cegah scroll body saat menu terbuka
  document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
}

// Tutup menu
function closeMenu() {
  const navLinks = document.getElementById('navLinks');
  const hamburger = document.getElementById('hamburger');
  const overlay = document.getElementById('navOverlay');

  navLinks.classList.remove('open');
  hamburger.classList.remove('active');
  overlay.classList.remove('show');
  document.body.style.overflow = '';
}

// ===== SCROLL TO SECTION =====
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// ===== PREVIEW IMAGE UPLOAD =====
function previewImage(input, imgId, placeholderId) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function (e) {
    const img = document.getElementById(imgId);
    const placeholder = document.getElementById(placeholderId);
    img.src = e.target.result;
    img.style.display = 'block';
    if (placeholder) placeholder.style.display = 'none';
  };
  reader.readAsDataURL(file);
}

// ===== SKILL BAR ANIMATION =====
function animateSkillBars() {
  document.querySelectorAll('.skill-bar-fill').forEach(bar => {
    const targetWidth = bar.getAttribute('data-width');
    bar.style.width = targetWidth;
  });
}

// ===== SCROLL-TO-TOP =====
window.addEventListener('scroll', () => {
  const btn = document.getElementById('scrollTop');
  if (window.scrollY > 300) {
    btn.classList.add('visible');
  } else {
    btn.classList.remove('visible');
  }
});

// ===== FADE IN UP ANIMATION =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');

      // Trigger skill bars saat about section muncul
      if (entry.target.closest('#about')) {
        animateSkillBars();
      }
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));

// ===== ACTIVE NAV LINK ON SCROLL =====
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    const id = section.getAttribute('id');
    const link = document.querySelector(`.nav-link[href="#${id}"]`);
    if (link) {
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    }
  });
});

// ===== CONTACT FORM =====
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.btn-send');
  btn.textContent = 'Terkirim! ✓';
  btn.style.background = 'linear-gradient(90deg, #4ade80, #22c55e)';
  setTimeout(() => {
    btn.textContent = 'Send Message →';
    btn.style.background = '';
    e.target.reset();
  }, 3000);
}

// ===== NAVBAR SCROLL EFFECT =====
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 50) {
    nav.style.background = 'rgba(0,0,0,0.25)';
  } else {
    nav.style.background = 'rgba(0,0,0,0.1)';
  }
});
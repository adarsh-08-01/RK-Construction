// ===== Hamburger Menu Toggle =====
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
  hamburger.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log('Hamburger clicked');
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    console.log('Hamburger active:', hamburger.classList.contains('active'));
    console.log('NavLinks active:', navLinks.classList.contains('active'));
  });
}

// Close menu when a link is clicked
if (navLinks) {
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });
}

// Close menu when clicking outside
document.addEventListener('click', function(e) {
  if (hamburger && navLinks) {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      if (navLinks.classList.contains('active')) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
      }
    }
  }
});

// ===== Smooth scroll for anchor links =====
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ===== Active nav link highlight =====
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navItems.forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href').includes(current)) {
      a.classList.add('active');
    }
  });
});

// ===== Reveal animation on scroll =====
const revealElements = document.querySelectorAll('.stat-card, .service-card, .benefit-card, .section-title');

const revealOnScroll = () => {
  revealElements.forEach((el, index) => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = el.classList.contains('benefit-card') ? 'translateX(0)' : 'translateY(0)';
      }, index * 100); // Stagger animation
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// ===== Add active navbar link styling =====
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navLinks.forEach(a => a.classList.remove('active'));
      this.classList.add('active');
    });
  });
});

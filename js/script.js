// Desplazamiento suave para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Efecto de fade-in para secciones
const faders = document.querySelectorAll(".fade-in-section");
const appearOptions = { threshold: 0.1 };

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Navbar cambio de color al hacer scroll
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// Lightbox para imágenes de la galería
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

// Para galería de frases
document.querySelectorAll('.galeria-imagenes img').forEach(img => {
  img.addEventListener('click', e => {
    lightboxImg.src = e.target.src;
    lightbox.classList.add('active');
  });
});

// Para galería carrusel
document.querySelectorAll('.galeria-carrusel img').forEach(img => {
  img.addEventListener('click', e => {
    lightboxImg.src = e.target.src;
    lightbox.classList.add('active');
  });
});

// Cerrar lightbox haciendo clic en el fondo (no en la imagen)
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove('active');
  }
});

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


// Acordeón para la sección "Aprende más"
const acordeonBtns = document.querySelectorAll('.acordeon-btn');

acordeonBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    // Cierra todos los acordeones menos el actual
    acordeonBtns.forEach(b => {
      if (b !== btn) {
        b.classList.remove('active');
        b.nextElementSibling.style.maxHeight = null;
      }
    });

    // Activa/desactiva el acordeón actual
    btn.classList.toggle('active');
    const content = btn.nextElementSibling;
    if (btn.classList.contains('active')) {
      content.style.maxHeight = content.scrollHeight + 'px';
    } else {
      content.style.maxHeight = null;
    }
  });
});


//
// ACTIVIDAD: Completa la palabra
document.getElementById('completar-btn').addEventListener('click', () => {
  const res1 = document.getElementById('word1').value.trim().toLowerCase();
  const res2 = document.getElementById('word2').value.trim().toLowerCase();
  const res3 = document.getElementById('word3').value.trim().toLowerCase();
  let correcto = 0;

  if (res1 === "asertividad") correcto++;
  if (res2 === "empatía" || res2 === "empatia") correcto++;
  if (res3 === "fraternidad") correcto++;

  const resultado = document.getElementById('resultado-completar');
  if (correcto === 3) {
    resultado.textContent = "¡Correcto! Has completado todas las palabras.";
    resultado.className = "resultado correcto";
  } else {
    resultado.textContent = "Algunas palabras no son correctas, revisa nuevamente.";
    resultado.className = "resultado incorrecto";
  }
});

// ACTIVIDAD: Une la frase con su valor
document.getElementById('valores-btn').addEventListener('click', () => {
  const resp1 = document.getElementById('valor1').value.trim().toLowerCase();
  const resp2 = document.getElementById('valor2').value.trim().toLowerCase();
  const resp3 = document.getElementById('valor3').value.trim().toLowerCase();
  let correcto = 0;

  if (resp1 === "honestidad") correcto++;
  if (resp2 === "respeto") correcto++;
  if (resp3 === "solidaridad") correcto++;

  const resultado = document.getElementById('resultado-valores');
  if (correcto === 3) {
    resultado.textContent = "¡Perfecto! Todas las relaciones son correctas.";
    resultado.className = "resultado correcto";
  } else {
    resultado.textContent = "Revisa tus respuestas, alguna no coincide con el valor correcto.";
    resultado.className = "resultado incorrecto";
  }
});

// ACTIVIDAD: ¿Quién también es tu prójimo?
document.getElementById('proximo-btn').addEventListener('click', () => {
  const opciones = document.querySelectorAll('input[name="proximo"]:checked');
  let correcto = true;

  opciones.forEach(opcion => {
    const valor = opcion.value;
    if (valor === "false") correcto = false;
  });

  if (opciones.length !== 2) correcto = false;

  const resultado = document.getElementById('resultado-proximo');
  if (correcto) {
    resultado.textContent = "¡Exacto! El prójimo no es solo quien te cae bien.";
    resultado.className = "resultado correcto";
  } else {
    resultado.textContent = "Revisa tu selección, hay opciones incorrectas.";
    resultado.className = "resultado incorrecto";
  }
});

// ACTIVIDAD: ¿Dónde es común la comunicación indirecta?
document.getElementById('cultura-btn').addEventListener('click', () => {
  const respuesta = document.getElementById('respuesta-cultura').value.trim().toLowerCase();

  const resultado = document.getElementById('resultado-cultura');
  if (respuesta === "armenia") {
    resultado.textContent = "¡Correcto! En Armenia la comunicación indirecta es común.";
    resultado.className = "resultado correcto";
  } else {
    resultado.textContent = "Esa no es la respuesta correcta. Intenta nuevamente.";
    resultado.className = "resultado incorrecto";
  }
});

// ACTIVIDAD: Verdadero o falso
document.getElementById('verdadero-falso-btn').addEventListener('click', () => {
  const v1 = document.getElementById('vf1').value.trim().toLowerCase();
  const v2 = document.getElementById('vf2').value.trim().toLowerCase();
  const v3 = document.getElementById('vf3').value.trim().toLowerCase();
  let correcto = 0;

  if (v1 === "falso") correcto++;
  if (v2 === "verdadero") correcto++;
  if (v3 === "verdadero") correcto++;

  const resultado = document.getElementById('resultado-vf');
  if (correcto === 3) {
    resultado.textContent = "¡Correcto! Conoces bien la diferencia entre verdadero y falso.";
    resultado.className = "resultado correcto";
  } else {
    resultado.textContent = "Algunas respuestas no son correctas, revisa nuevamente.";
    resultado.className = "resultado incorrecto";
  }
});

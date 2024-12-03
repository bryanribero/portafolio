// Selecciona todos los elementos que necesitan observación
const hiddenElements = document.querySelectorAll('.hidden, .hiddenLogo');

// Crea un único IntersectionObserver
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Aplica la clase visible según el tipo de elemento
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, {
  threshold: 0.4, // Cambia este valor según lo que necesites
});

// Observa cada elemento seleccionado
hiddenElements.forEach((el) => observer.observe(el));

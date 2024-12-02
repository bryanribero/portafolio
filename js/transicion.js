const hiddenElements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible'); // Aparece
    } else {
      entry.target.classList.remove('visible'); // Desaparece
    }
  });
}, {
  threshold: 0.4, 
});

hiddenElements.forEach((el) => observer.observe(el));
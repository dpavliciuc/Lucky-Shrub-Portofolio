// script.js
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Optional: stop observing once visible
      observer.unobserve(entry.target);
    }
  });
});

document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));

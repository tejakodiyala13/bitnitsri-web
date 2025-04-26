// Toggle hamburger menu
function toggleMenu() {
  const nav = document.getElementById("navLinks");
  const hamburger = document.querySelector(".hamburger");
  nav.classList.toggle("show");
  hamburger.classList.toggle("open");
}

// Scroll-based fade-in animations
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => {
  observer.observe(section);
});

console.log("Website loaded and animations applied.");

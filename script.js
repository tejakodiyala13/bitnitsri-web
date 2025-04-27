// your code goes here
// Hamburger Toggle
function toggleMenu() {
  const nav = document.getElementById("navLinks");
  const hamburger = document.querySelector(".hamburger");
  nav.classList.toggle("show");
  hamburger.classList.toggle("open");
}

// Section Fade-in on Scroll
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
sections.forEach(section => observer.observe(section));

// Lightbox for Gallery
const galleryImages = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});
function closeLightbox() {
  lightbox.style.display = "none";
}

// Scroll to Top Button
const scrollTopBtn = document.getElementById("scrollTopBtn");
window.onscroll = function() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Preloader
window.addEventListener("load", function(){
  const preloader = document.getElementById("preloader");
  preloader.style.display = "none";
});

// Navbar Active Link
const navLinks = document.querySelectorAll(".nav-links a");
window.addEventListener('scroll', () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

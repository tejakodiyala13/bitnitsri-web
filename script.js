// Toggle hamburger menu
function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("show");
}

// Smooth fade-in animation on scroll
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

// Scroll gallery on arrow click + hide arrows at edges
function scrollGallery(direction) {
  const gallery = document.getElementById('gallery');
  const scrollAmount = 320; // Adjust scroll size

  if (direction === 'left') {
    gallery.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  } else {
    gallery.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }

  setTimeout(updateScrollButtons, 500); // slight delay to check position after scroll
}

function updateScrollButtons() {
  const gallery = document.getElementById('gallery');
  const leftBtn = document.querySelector('.scroll-btn.left');
  const rightBtn = document.querySelector('.scroll-btn.right');

  // Hide left button if at start
  if (gallery.scrollLeft <= 10) {
    leftBtn.style.display = 'none';
  } else {
    leftBtn.style.display = 'block';
  }

  // Hide right button if at end
  if (gallery.scrollWidth - gallery.clientWidth - gallery.scrollLeft <= 10) {
    rightBtn.style.display = 'none';
  } else {
    rightBtn.style.display = 'block';
  }
}

// Update button visibility when user scrolls manually too
const galleryElement = document.getElementById('gallery');
galleryElement.addEventListener('scroll', updateScrollButtons);

// Initialize on page load
window.addEventListener('load', updateScrollButtons);

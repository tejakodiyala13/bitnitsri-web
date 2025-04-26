// Reveal animations on scroll
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

sections.forEach(section => {
  observer.observe(section);
});

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');

hamburger.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

// Scroll event gallery (advanced left scroll)
const galleryContainer = document.querySelector('.scroll-container');

let scrollValue = 0;
galleryContainer.addEventListener('wheel', (e) => {
  if (e.deltaY > 0) {
    scrollValue += 300;
  } else {
    scrollValue -= 300;
  }

  galleryContainer.style.transform = `translateX(-${scrollValue}px)`;
});

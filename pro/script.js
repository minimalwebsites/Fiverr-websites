const links = document.querySelectorAll('nav a');

links.forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');

    if (href.startsWith("#")) {
      e.preventDefault();
      document.querySelector(href)
        .scrollIntoView({ behavior: 'smooth' });
    }
  });
});

const toggle = document.getElementById('darkToggle');

toggle.textContent = '🌙';

toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  if(document.body.classList.contains('dark-mode')){
    toggle.textContent = '☀️'; 
  } else {
    toggle.textContent = '🌙';
  }
});

const images = document.querySelectorAll(".gallery-grid img");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = lightbox.querySelector("img");

images.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.classList.add("show");
    lightboxImg.src = img.src;
  });
});

lightbox.addEventListener("click", () => {
  lightbox.classList.remove("show");
});
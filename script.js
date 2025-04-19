// Brand tile assets and alt tags
const brandTiles = [
  { img: 'https://ext.same-assets.com/2650834761/1318597604.png', alt: 'Client Work 1' },
  { img: 'https://ext.same-assets.com/2650834761/3708638618.jpeg', alt: 'Client Work 2' },
  { img: 'https://ext.same-assets.com/2650834761/1923352733.jpeg', alt: 'Client Work 3' },
  { img: 'https://ext.same-assets.com/2650834761/2237310374.png', alt: 'Client Work 4' },
  { img: 'https://ext.same-assets.com/2650834761/535995122.jpeg', alt: 'Client Work 5' },
  { img: 'https://ext.same-assets.com/2650834761/1793305743.jpeg', alt: 'Client Work 6' },
  { img: 'https://ext.same-assets.com/2650834761/2596423779.png', alt: 'Client Work 7' },
  { img: 'https://ext.same-assets.com/2650834761/3164984350.png', alt: 'Client Work 8' }
];

// Dynamically inject brand tiles
const gallery = document.getElementById('brand-gallery');
if (gallery) {
  brandTiles.forEach(tile => {
    const col = document.createElement('div');
    col.className = 'col-6 col-md-4 col-lg-3';
    col.innerHTML = `
      <div class="brand-tile p-3">
        <img src="${tile.img}" alt="${tile.alt}" class="img-fluid mx-auto d-block" />
      </div>
    `;
    gallery.appendChild(col);
  });
}

// Animation: Fade in hero and tiles on scroll
function revealOnScroll() {
  const revealElems = document.querySelectorAll('.hero-title, .hero-subtitle, .brand-tile');
  const windowHeight = window.innerHeight;
  revealElems.forEach(elem => {
    const elemTop = elem.getBoundingClientRect().top;
    if (elemTop < windowHeight - 60) {
      elem.style.opacity = 1;
      elem.style.transform = 'translateY(0)';
      elem.style.transition = 'opacity 0.7s cubic-bezier(.2,.6,.36,1), transform 0.7s cubic-bezier(.2,.6,.36,1)';
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);

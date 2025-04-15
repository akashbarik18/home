

  // sider

  document.addEventListener("DOMContentLoaded", () => {
    const sliders = document.querySelectorAll(".slider");
  
    sliders.forEach((slider) => {
      let index = 0;
      const images = slider.querySelectorAll("img");
  
      function showSlide(i) {
        images.forEach((img, idx) => {
          img.style.display = idx === i ? "block" : "none";
        });
      }
  
      function nextSlide() {
        index = (index + 1) % images.length;
        showSlide(index);
      }
  
      function prevSlide() {
        index = (index - 1 + images.length) % images.length;
        showSlide(index);
      }
  
      // Initial setup
      showSlide(index);
  
      // Auto slide every 3 seconds
      const autoSlide = setInterval(nextSlide, 3000);
  
    
    });
  });
  

  // Auto Slide
  setInterval(() => {
    moveSlide(1);
  }, 4000);

  document.getElementById('feedback-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && message) {
      const testimonialCard = document.createElement('div');
      testimonialCard.classList.add('testimonial');

      testimonialCard.innerHTML = `
        <p>"${message}"</p>
        <strong>- ${name}</strong>
      `;

      document.getElementById('testimonial-cards').appendChild(testimonialCard);

      // Optional: Clear form after submission
      document.getElementById('feedback-form').reset();
      alert("Thank you for your feedback!");
    }
  });

  // animation of service section
  const serviceItems = document.querySelectorAll('.services-list li');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('slide-in');
        observer.unobserve(entry.target); // Remove observer after animation
      }
    });
  }, {
    threshold: 0.2
  });

  serviceItems.forEach(item => {
    observer.observe(item);
  });

  //portpholio slider

  document.querySelectorAll('.image-slider').forEach(slider => {
    const images = slider.querySelectorAll('img');
    let current = 0;

    function showNextImage() {
      images[current].style.opacity = 0;
      current = (current + 1) % images.length;
      images[current].style.opacity = 1;
    }

    images[0].style.opacity = 1; // Show the first image initially
    setInterval(showNextImage, 3000); // Change image every 3 seconds
  });

  // home slider
  const slideContainer = document.querySelector('.slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

// Store items in array
let items = Array.from(slideContainer.children);

function updateSlides() {
  items.forEach((item, index) => {
    item.style.transition = '0.5s ease';

    // Reset styles
    item.style.position = 'absolute';
    item.style.top = '50%';
    item.style.transform = 'translate(0, -50%)';
    item.style.width = '200px';
    item.style.height = '300px';
    item.style.borderRadius = '20px';
    item.style.boxShadow = '0 30px 50px #505050';
    item.style.opacity = '1';
    item.style.display = 'inline-block';

    // Hide all contents
    const content = item.querySelector('.content');
    if (content) content.style.display = 'none';

    // Re-position based on index
    if (index === 0 || index === 1) {
      item.style.top = '0';
      item.style.left = '0';
      item.style.width = '100%';
      item.style.height = '100%';
      item.style.borderRadius = '0';
      item.style.transform = 'translate(0, 0)';
      if (index === 1 && content) content.style.display = 'block';
    } else if (index === 2) {
      item.style.left = '50%';
    } else if (index === 3) {
      item.style.left = 'calc(50% + 220px)';
    } else if (index === 4) {
      item.style.left = 'calc(50% + 440px)';
    } else {
      item.style.left = 'calc(50% + 660px)';
      item.style.opacity = '0';
    }
  });
}

// Slide functions
function slideNext() {
  const first = items.shift();
  items.push(first);
  items.forEach(item => slideContainer.appendChild(item));
  updateSlides();
}

function slidePrev() {
  const last = items.pop();
  items.unshift(last);
  items.forEach(item => slideContainer.appendChild(item));
  updateSlides();
}

// Touch support
let startX = 0;
items.forEach(item => {
  item.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  });

  item.addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].clientX;
    if (endX < startX - 50) slideNext();
    else if (endX > startX + 50) slidePrev();
  });
});


// Button events
nextBtn.addEventListener('click', slideNext);
prevBtn.addEventListener('click', slidePrev);

// Initialize
updateSlides();

// nav bar hover....................................
document.querySelectorAll('.nav-item').forEach(item => {
  // No need for mouseenter/mouseleave anymore as CSS handles it
});

//tougle menu

// Toggle menu open/close
function toggleMenu() {
  const menu = document.getElementById('navMenu');
  menu.classList.toggle('active');
}









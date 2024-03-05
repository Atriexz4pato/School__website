const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentSlide = 0;

let currentIndex = 0;
const slideWidth = slides[0].offsetWidth;

function goToSlide(index) {
    carousel.style.transform = `translateX(-${index * slideWidth}px)`;
    currentIndex = index;
       
}

function goToNextSlide() {
    if (currentIndex < slides.length - 1) {
        goToSlide(currentIndex + 1);
    } else {
        goToSlide(0);
    }
}

function goToPrevSlide() {
    if (currentIndex > 0) {
        goToSlide(currentIndex - 1);
    } else {
        goToSlide(slides.length - 1);
    }
}
function expandDiv() {
  var largeDiv = document.getElementById("largeDiv");

    largeDiv.style.display = "block";
  
}
function closeDiv() {
    var largeDiv = document.getElementById("largeDiv");
    largeDiv.style.display = "none";
  }

nextBtn.addEventListener('click', goToNextSlide);
prevBtn.addEventListener('click', goToPrevSlide);


function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  updateCarousel();
}

function updateCarousel() {
  const offset = -currentSlide * slides[0].offsetWidth;
  carousel.style.transform = `translateX(${offset}px)`;
}

setInterval(nextSlide, 5000);
// Smooth scrolling effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Smooth scrolling for scroll wheel
document.addEventListener('DOMContentLoaded', function() {
  var currentSection = 0;
  var sections = document.querySelectorAll('section');
  var totalSections = sections.length;

  var isScrolling = false;

  window.addEventListener('wheel', function(e) {
    e.preventDefault(); // Prevent default scroll behavior

    if (isScrolling) return;
    isScrolling = true;

    setTimeout(function() {
      isScrolling = false;
    }, 800); // Adjust the delay as needed for smooth scrolling

    var delta = e.deltaY || e.detail || e.wheelDelta;

    if (delta < 0 && currentSection > 0) {
      currentSection--;
    } else if (delta > 0 && currentSection < totalSections - 1) {
      currentSection++;
    }

    sections[currentSection].scrollIntoView({ behavior: 'smooth' });
  });
});

//send message to whatsapp
function sendMessage() {
  var message = "Hello, welcome to Schooltry!"; // Your predefined message
  var phoneNumber = "+254729064995"; // The phone number to send the message to

  var url = "whatsapp://send?phone=" + phoneNumber + "&text=" + encodeURIComponent(message);
  window.location.href = url;
}
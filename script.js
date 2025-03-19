//NAVBAR 
function toggleMenu() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    menuToggle.classList.toggle("active");
    navLinks.classList.toggle("active");
}
//   carousel 1
document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const items = document.querySelectorAll(".carousel-item");
    const totalItems = items.length;
    let index = 0;
    let interval;

    function updateCarousel() {
        carousel.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextSlide() {
        index = (index + 1) % totalItems;
        updateCarousel();
    }

    function prevSlide() {
        index = (index - 1 + totalItems) % totalItems;
        updateCarousel();
    }

    function startAutoSlide() {
        interval = setInterval(nextSlide, 3000);
    }

    function stopAutoSlide() {
        clearInterval(interval);
    }

    document.querySelector(".scroll-right-btn").addEventListener("click", function () {
        stopAutoSlide();
        nextSlide();
        startAutoSlide();
    });

    document.querySelector(".scroll-left-btn").addEventListener("click", function () {
        stopAutoSlide();
        prevSlide();
        startAutoSlide();
    });

    startAutoSlide();
});

  
// corosel 2 

let index = 0;

function updateTestimonial() {
    const slider = document.getElementById("testimonialSlider");
    slider.style.transform = `translateX(-${index * 100}%)`;
}

function prevTestimonial() {
    if (index > 0) {
        index--;
    } else {
        index = 2;
    }
    updateTestimonial();
}

function nextTestimonial() {
    if (index < 2) {
        index++;
    } else {
        index = 0;
    }
    updateTestimonial();
}
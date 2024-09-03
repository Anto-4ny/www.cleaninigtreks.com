// JavaScript for Navigation
document.getElementById('home-link').addEventListener('click', () => {
    window.location.href = 'index.html';
});

document.getElementById('services-link').addEventListener('click', () => {
    window.location.href = 'services.html';
});

document.getElementById('about-link').addEventListener('click', () => {
    window.location.href = 'about.html';
});

document.getElementById('contact-link').addEventListener('click', () => {
    window.location.href = 'contact.html';
});

// Banner Slider
let slides = document.querySelectorAll('.slide');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 4000);

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].className = 'slide active';
}

// Search Functionality
document.getElementById('search-icon').addEventListener('click', function() {
    let searchInput = document.getElementById('search-input').value.toLowerCase();
    let services = document.querySelectorAll('.service');
    let found = false;

    services.forEach(service => {
        let serviceName = service.querySelector('h3').textContent.toLowerCase();
        if (serviceName.includes(searchInput)) {
            service.scrollIntoView({ behavior: 'smooth' });
            found = true;
        }
    });

    if (!found) {
        alert('Service not found. Please try again.');
    }
});

// Banner Text Typing Effect
let typingText = document.getElementById('typing-text');
let bannerTexts = ["Welcome to Cleaning Treks", "Professional Cleaning Services", "Your Clean Space, Our Priority"];
let currentIndex = 0;
let charIndex = 0;

function typeBannerText() {
    if (charIndex < bannerTexts[currentIndex].length) {
        typingText.textContent += bannerTexts[currentIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeBannerText, 100);
    } else {
        setTimeout(deleteBannerText, 2000);
    }
}

function deleteBannerText() {
    if (charIndex > 0) {
        typingText.textContent = typingText.textContent.slice(0, -1);
        charIndex--;
        setTimeout(deleteBannerText, 50);
    } else {
        currentIndex = (currentIndex + 1) % bannerTexts.length;
        setTimeout(typeBannerText, 500);
    }
}

typeBannerText();

// Cart Functionality
let cartCount = 0;
let cartIcon = document.getElementById('cart-icon');
let cartCountElement = document.getElementById('cart-count');
let serviceSelections = document.querySelectorAll('.service-selection');


serviceSelections.forEach(selection => {
    selection.addEventListener('change', () => {
        if (selection.value) {
            cartCount++;
            cartCountElement.textContent = cartCount;
            addServiceToCart(selection.dataset.category, selection.value);
        }
    });
});

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add the 'show' class to elements in the viewport
function showPopInElements() {
    const elements = document.querySelectorAll('.pop-in');
    elements.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add('show');
        }
    });
}

// Event listener for scrolling to trigger the pop-in effect
window.addEventListener('scroll', showPopInElements);

// Trigger the effect on page load
window.addEventListener('load', showPopInElements);

function addServiceToCart(category, service) {
    // Add logic to store the selected service to the cart.
    // This could be done using a simple array or session storage.
    alert(`Added ${service} from ${category} to the cart.`);
}

// Hamburger Menu Toggle
document.querySelector('.hamburger-icon').addEventListener('click', () => {
    document.querySelector('.hamburger-menu').classList.toggle('show');
});

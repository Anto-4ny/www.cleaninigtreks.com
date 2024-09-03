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

// Typing Effect
let text = "Welcome to Cleaning Treks - Professional Cleaning Services";
let index = 0;
let typingElement = document.getElementById('typing-text');

function typeText() {
    if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 100);
    } else {
        setTimeout(() => {
            typingElement.textContent = "";
            index = 0;
            typeText();
        }, 5000);
    }
}

typeText();

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

function addServiceToCart(category, service) {
    // Add logic to store the selected service to the cart.
    // This could be done using a simple array or session storage.
    alert(`Added ${service} from ${category} to the cart.`);
}

// Hamburger Menu Toggle
document.querySelector('.hamburger-icon').addEventListener('click', () => {
    document.querySelector('.hamburger-menu').classList.toggle('show');
});
  

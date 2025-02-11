// Get DOM elements
const images = document.querySelectorAll('.container img'); // Changed selector to match your HTML
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const closeButton = document.querySelector('.close');

let currentIndex = 0;

// Initialize lightbox functionality
function initLightbox() {
    // Add click listeners to all gallery images
    images.forEach((image, index) => {
        image.addEventListener('click', () => {
            currentIndex = index;
            showLightbox(image.src);
        });
    });

    // Close button listener
    closeButton.addEventListener('click', hideLightbox);

    // Click outside image to close
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            hideLightbox();
        }
    });

    // Previous button listener
    prevButton.addEventListener('click', showPrevImage);

    // Next button listener
    nextButton.addEventListener('click', showNextImage);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.style.display === 'block') return;
        
        if (e.key === 'ArrowLeft') showPrevImage();
        if (e.key === 'ArrowRight') showNextImage();
        if (e.key === 'Escape') hideLightbox();
    });
}

function showLightbox(src) {
    lightboxImg.src = src;
    lightbox.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
}

function hideLightbox() {
    lightbox.style.display = 'none';
    document.body.style.overflow = ''; // Restore scrolling
}

function showPrevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    lightboxImg.src = images[currentIndex].src;
}

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    lightboxImg.src = images[currentIndex].src;
}

// Initialize lightbox when DOM is loaded
document.addEventListener('DOMContentLoaded', initLightbox);
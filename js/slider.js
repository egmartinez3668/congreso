/**
 * Testimonials Slider Module
 */
document.addEventListener('DOMContentLoaded', () => {
    const sliderContainer = document.getElementById('testimonialsSlider');
    const items = sliderContainer.querySelectorAll('.testimonial-item');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    
    let currentIndex = 0;

    function showSlide(index) {
        // Hide all items
        items.forEach(item => {
            item.style.display = 'none';
            item.style.opacity = '0';
        });

        // Handle bounds
        if (index >= items.length) currentIndex = 0;
        else if (index < 0) currentIndex = items.length - 1;
        else currentIndex = index;

        // Show current item with fade effect
        const currentItem = items[currentIndex];
        currentItem.style.display = 'block';
        
        // Small timeout to allow display:block to apply before opacity transition
        setTimeout(() => {
            currentItem.style.opacity = '1';
            currentItem.style.transition = 'opacity 0.5s ease';
        }, 10);
    }

    // Initialize
    showSlide(currentIndex);

    // Event Listeners
    nextBtn.addEventListener('click', () => {
        showSlide(currentIndex + 1);
    });

    prevBtn.addEventListener('click', () => {
        showSlide(currentIndex - 1);
    });

    // Auto slide every 5 seconds
    setInterval(() => {
        showSlide(currentIndex + 1);
    }, 5000);
});
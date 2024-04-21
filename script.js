// When the user scrolls down, update the opacity of the header based on the scroll position
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const scrollPosition = window.scrollY;

    // You can adjust these values to control when the header starts to fade and at what speed
    const fadeStart = 30; // Start fading when the user has scrolled 100 pixels
    const fadeEnd = 90;   // Fully faded out when the user has scrolled 300 pixels
    const maxOpacity = 1;  // Maximum opacity of the header (1 means fully opaque)

    if (scrollPosition <= fadeStart) {
        header.style.opacity = maxOpacity; // Header fully visible
    } else if (scrollPosition <= fadeEnd) {
        // Opacity decreases linearly as the user scrolls between fadeStart and fadeEnd
        const opacity = maxOpacity - (scrollPosition - fadeStart) / (fadeEnd - fadeStart);
        header.style.opacity = opacity;
    } else {
        header.style.opacity = 0; // Header fully faded out
    }
});

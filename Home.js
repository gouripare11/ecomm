const slider = document.querySelector('.slider');
    let index = 0;

    function moveSlider() {
        index = (index + 1) % 4; // Cycle through 5 images
        slider.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(moveSlider, 3000); // Change every 3 seconds

    function redirectToLogin() {
        window.location.href = 'eLogin.html'; // Redirects to the login page
    }
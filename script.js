document.addEventListener("DOMContentLoaded", function () {
    const heroText = document.querySelector(".hero h2");
    heroText.style.opacity = 0;
    heroText.style.transform = "translateY(20px)";

    setTimeout(() => {
        heroText.style.transition = "opacity 1s ease-out, transform 1s ease-out";
        heroText.style.opacity = 1;
        heroText.style.transform = "translateY(0)";
    }, 500);
});

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.fade-in');
    
    const checkVisibility = () => {
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                element.classList.add('fade-in-active');
            }
        });
    };

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Run on page load to check if any elements are already in view
});

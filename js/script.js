// Reveal .fade-in elements as they scroll into view
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
    checkVisibility();
});

// Contact form: open the visitor's mail app with the message filled in
function sendEmail(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const body = `Email: ${email}\r\n\r\nMessage:\r\n${message}`;

    window.location.href = `mailto:LMHC.SIMONE.GOLDBERG@gmail.com?subject=${encodeURIComponent("Contact from " + name)}&body=${encodeURIComponent(body)}`;
}

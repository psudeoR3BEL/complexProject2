document.addEventListener('DOMContentLoaded', () => {

    // Smooth Scrolling
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });


    // Dark/Light Mode Toggle
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    // Check for saved preference
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true') {
        darkModeToggle.checked = true;
        body.classList.add('light-mode');
    } else {
         body.classList.remove('light-mode');
    }


    darkModeToggle.addEventListener('change', () => {
        if (darkModeToggle.checked) {
            body.classList.add('light-mode');
            localStorage.setItem('darkMode', 'true');
        } else {
            body.classList.remove('light-mode');
            localStorage.setItem('darkMode', 'false');
        }    
    });


    // Form Submission (Basic - for demonstration)
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Basic form validation (you'd typically use a server-side script)
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
            alert('Please fill in all fields.');
            return;
        }

        // Simulate sending the data (replace with actual sending logic)
        alert(`Form submitted!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
        contactForm.reset(); // Clear the form
    });
});
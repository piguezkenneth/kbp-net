document.addEventListener('DOMContentLoaded', function() {
    // Function to show a welcome alert
    function showAlert() {
        alert("Welcome to the future!");
    }

    // Function to show read more alert
    function readMore() {
        alert("More details coming soon!");
    }

    // Function to handle form submission
    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            if (validateForm()) {
                submitForm();
            }
        });
    }

    // Function to validate form inputs (example validation)
    function validateForm() {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || subject === '' || message === '') {
            alert("Please fill in all fields.");
            return false;
        }

        return true;
    }

    // Function to submit form data (placeholder)
    function submitForm() {
        // Here you can perform AJAX submission or any other form handling logic
        alert("Form submitted successfully!");
        form.reset(); // Reset form after successful submission
    }

    // Function to toggle visibility of sub-block content
    const subBlocks = document.querySelectorAll('.sub-block');

    subBlocks.forEach(subBlock => {
        const header = subBlock.querySelector('h4');
        const content = subBlock.querySelector('p');

        header.addEventListener('click', function() {
            content.classList.toggle('show');
        });
    });

    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });


const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('change', function() {
    body.classList.toggle('dark-mode');
});

    // Optional: Add more functionality as needed

    
});


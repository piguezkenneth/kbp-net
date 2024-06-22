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


// Select elements
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const searchInput = document.getElementById('search-input');
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

// Toggle navigation menu
burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
    
    // Toggle aria-expanded attribute for accessibility
    const expanded = burger.getAttribute('aria-expanded') === 'true' || false;
    burger.setAttribute('aria-expanded', !expanded);
});

// Toggle dropdown menus on hover
dropdownToggles.forEach(toggle => {
    toggle.addEventListener('mouseenter', () => {
        toggle.nextElementSibling.classList.add('show');
    });
    
    toggle.addEventListener('mouseleave', () => {
        toggle.nextElementSibling.classList.remove('show');
    });
});

// Show/hide clear button based on search input value
searchInput.addEventListener('input', () => {
    const clearBtn = document.querySelector('.clear-btn');
    clearBtn.style.display = searchInput.value.length > 0 ? 'block' : 'none';
});

// Clear search input and hide clear button
searchInput.addEventListener('focus', () => {
    const clearBtn = document.querySelector('.clear-btn');
    clearBtn.style.display = searchInput.value.length > 0 ? 'block' : 'none';
});

searchInput.addEventListener('blur', () => {
    const clearBtn = document.querySelector('.clear-btn');
    clearBtn.style.display = 'none';
});

document.querySelector('.clear-btn').addEventListener('click', () => {
    searchInput.value = '';
    const clearBtn = document.querySelector('.clear-btn');
    clearBtn.style.display = 'none';
});
    
});

    



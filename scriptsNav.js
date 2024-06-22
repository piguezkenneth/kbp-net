// Select elements
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const searchInput = document.getElementById('search-input');
const clearBtn = document.getElementById('clear-btn');

// Toggle navigation menu
burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    
    // Toggle burger animation
    burger.classList.toggle('toggle');
    
    // Toggle aria-expanded attribute for accessibility
    const expanded = burger.getAttribute('aria-expanded') === 'true' || false;
    burger.setAttribute('aria-expanded', !expanded);
});

// Show/hide clear button based on search input value
searchInput.addEventListener('input', () => {
    clearBtn.style.display = searchInput.value.length > 0 ? 'block' : 'none';
});

// Clear search input and hide clear button
clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    clearBtn.style.display = 'none';
    searchInput.focus();
});



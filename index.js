// script.js

// Placeholder functionality for filters
document.addEventListener('DOMContentLoaded', () => {
    const filters = document.querySelectorAll('.sidebar ul li');
    filters.forEach(filter => {
        filter.addEventListener('click', () => {
            alert(`Filter applied: ${filter.textContent}`);
        });
    });
});

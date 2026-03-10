const generateBtn = document.getElementById('generate');
const numbersContainer = document.getElementById('numbers');
const themeToggle = document.getElementById('theme-toggle');

// Theme Logic
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '☀️ Light Mode';
}

themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (isDark) {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        themeToggle.textContent = '🌙 Dark Mode';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeToggle.textContent = '☀️ Light Mode';
    }
});

// Lotto Generation Logic
generateBtn.addEventListener('click', () => {
    numbersContainer.innerHTML = '';
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }

    // Sort numbers for better presentation
    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    sortedNumbers.forEach((num, index) => {
        setTimeout(() => {
            const numberEl = document.createElement('div');
            numberEl.classList.add('number');
            
            // Apply color class based on number range
            if (num <= 10) numberEl.classList.add('num-1-10');
            else if (num <= 20) numberEl.classList.add('num-11-20');
            else if (num <= 30) numberEl.classList.add('num-21-30');
            else if (num <= 40) numberEl.classList.add('num-31-40');
            else numberEl.classList.add('num-41-45');

            numberEl.textContent = num;
            numbersContainer.appendChild(numberEl);
        }, index * 100); // Staggered animation
    });
});
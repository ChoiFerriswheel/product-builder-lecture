const generateBtn = document.getElementById('generate');
const numbersContainer = document.getElementById('numbers');
const themeToggle = document.getElementById('theme-toggle');

// Theme Logic
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (isDark) {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        themeToggle.textContent = '🌙';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeToggle.textContent = '☀️';
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

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    sortedNumbers.forEach((num, index) => {
        setTimeout(() => {
            const numberEl = document.createElement('div');
            numberEl.classList.add('number');
            
            if (num <= 10) numberEl.classList.add('num-1-10');
            else if (num <= 20) numberEl.classList.add('num-11-20');
            else if (num <= 30) numberEl.classList.add('num-21-30');
            else if (num <= 40) numberEl.classList.add('num-31-40');
            else numberEl.classList.add('num-41-45');

            numberEl.textContent = num;
            numbersContainer.appendChild(numberEl);
        }, index * 100);
    });
});

// Modal Logic
const modal = document.getElementById('legal-modal');
const modalBody = document.getElementById('modal-body');
const span = document.getElementsByClassName('close')[0];

const legalContent = {
    privacy: `
        <h2>개인정보처리방침</h2>
        <p>본 사이트는 사용자의 개인정보를 수집하거나 저장하지 않습니다. 모든 번호 생성은 사용자의 브라우저 내에서 로컬로 처리됩니다.</p>
        <p>제휴 문의 폼을 통해 제공된 정보는 문의 응대 목적으로만 사용되며, 제3자에게 제공되지 않습니다.</p>
    `,
    terms: `
        <h2>이용약관</h2>
        <p>본 서비스는 재미와 참고 목적으로 제공되는 무료 도구입니다.</p>
        <p>사용자는 본 사이트에서 생성된 번호를 사용하여 발생하는 어떠한 결과에 대해서도 제작자에게 책임을 물을 수 없습니다.</p>
    `,
    disclaimer: `
        <h2>면책조항</h2>
        <p>본 사이트는 공식 로또 판매처가 아니며, 당첨을 보장하지 않습니다.</p>
        <p>로또 구매는 본인의 판단하에 소액으로 건전하게 즐기시길 권장합니다.</p>
    `
};

window.showModal = function(type) {
    modalBody.innerHTML = legalContent[type];
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

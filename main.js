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
const closeBtn = document.querySelector('.close');

const legalContent = {
    privacy: `
        <h2 class="section-title">개인정보처리방침</h2>
        <p>LottoGen은 사용자의 개인정보를 소중히 다룹니다. 본 사이트는 방문자의 어떠한 개인 데이터도 수집, 저장 또는 공유하지 않습니다.</p>
        <p><strong>1. 데이터 수집:</strong> 번호 생성 기능은 전적으로 사용자의 브라우저(Client-side)에서 실행되며, 서버로 데이터가 전송되지 않습니다.</p>
        <p><strong>2. 쿠키 사용:</strong> 테마 설정(다크 모드) 저장을 위해 브라우저의 localStorage를 사용하며, 이는 마케팅 목적으로 활용되지 않습니다.</p>
        <p><strong>3. 외부 서비스:</strong> 제휴 문의 시 Formspree를 통해 이메일 주소를 수집할 수 있으나, 이는 문의 응대 후 즉시 폐기됩니다.</p>
    `,
    terms: `
        <h2 class="section-title">이용약관</h2>
        <p>본 약관은 LottoGen 서비스 이용과 관련하여 필요한 사항을 규정합니다.</p>
        <p><strong>1. 서비스 목적:</strong> 본 서비스는 사용자에게 무작위 번호 조합을 제공하여 재미와 편의를 제공하는 것을 목적으로 합니다.</p>
        <p><strong>2. 책임의 한계:</strong> 제공되는 번호는 통계적 추측일 뿐 당첨을 보장하지 않습니다. 로또 구매 결정은 본인의 책임하에 이루어져야 합니다.</p>
        <p><strong>3. 저작권:</strong> 본 사이트의 디자인과 콘텐츠는 LottoGen에 귀속되며, 무단 복제 및 상업적 이용을 금합니다.</p>
    `,
    disclaimer: `
        <h2 class="section-title">면책조항</h2>
        <p>LottoGen은 공식 로또 사업자(동행복권 등)와 무관한 독립적인 웹 서비스입니다.</p>
        <p><strong>1. 결과 미보장:</strong> 본 사이트에서 생성된 번호로 인한 결과(낙첨 등)에 대해 제작자는 법적 책임을 지지 않습니다.</p>
        <p><strong>2. 데이터 정확성:</strong> 분석 정보는 공개된 과거 데이터를 바탕으로 작성되었으나, 실제 추첨의 무작위성을 이길 수는 없습니다.</p>
        <p><strong>3. 권고:</strong> 지나친 사행성 게임 몰입은 가계 경제에 해로울 수 있으니 소액으로 건전하게 이용하시길 바랍니다.</p>
    `
};

window.showModal = function(type) {
    modalBody.innerHTML = legalContent[type];
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Prevent scrolling
}

closeBtn.onclick = function() {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
}

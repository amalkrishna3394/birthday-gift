// --- QUIZ & NAVIGATION ---
function askQuestion(questionId) {
    const currentCard = document.querySelector('.card.active');
    currentCard.querySelector('.content').classList.add('hidden');
    document.getElementById(questionId).classList.remove('hidden');
}

function wrongAnswer(btn) {
    btn.style.background = "#ffcdd2";
    btn.innerText = "Try again 😜";
}

function correctAnswer(nextCardId) {
    setTimeout(() => { showCard(nextCardId); }, 300);
}

function showCard(cardId) {
    document.querySelector('.card.active').classList.remove('active');
    document.getElementById(cardId).classList.add('active');
}

// --- NEW: PLEADING LOGIC (The Sad Part) ---
let begCount = 0;
function begMore() {
    begCount++;
    const img = document.getElementById('beg-img');
    const title = document.getElementById('beg-title');
    const text = document.getElementById('beg-text');

    if (begCount === 1) {
        img.src = "images/sad1.gif"; // Change to sad image
        title.innerText = "Please think again! 🥺";
        text.innerText = "Don't break my heart so fast...";
    } else if (begCount === 2) {
        img.src = "images/sad2.gif"; // Change to crying image
        title.innerText = "Ek aur baar Soch lo! 😣"; // From your image
        text.innerText = "Look how sad I am!";
    } else if (begCount === 3) {
        img.src = "images/sad3.gif"; // Change to sobbing image
        title.innerText = "Man jao na! 😭"; // From your image
        text.innerText = "I'm gonna cry forever...";
    } else {
        // After 3 tries, just force her to say yes or loop
        img.src = "images/happy.gif";
        title.innerText = "Okay fine...";
        text.innerText = "Just click YES already! ❤️";
        begCount = 0; // Reset loop
    }
}

// --- RUNAWAY BUTTON GAME ---
function moveButton() {
    const btn = document.getElementById('noBtn');
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);
    btn.style.position = 'fixed';
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
}

// --- FINAL CELEBRATION ---
function celebrate() {
    const btn = document.querySelector('.yellow-btn');
    btn.innerText = "❤️ I LOVE YOU ❤️";
    btn.style.transform = "scale(1.1)";

    const container = document.getElementById('confetti-container');
    const colors = ['#e62429', '#2196f3', '#ffeb3b', '#ffffff'];

    for (let i = 0; i < 150; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti-piece');
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.width = Math.random() * 10 + 5 + 'px';
        confetti.style.height = Math.random() * 10 + 5 + 'px';
        confetti.style.animation = `fall-spin ${Math.random() * 3 + 2}s linear forwards`;
        container.appendChild(confetti);
    }
}
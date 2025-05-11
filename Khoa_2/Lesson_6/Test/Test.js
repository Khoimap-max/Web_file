const gameBoard = document.getElementById('game-board');
const resultDisplay = document.getElementById('result');
let cards = [
  { name: 'card1', image: 'image1.jpg' },
  { name: 'card2', image: 'image2.jpg' },
  // ... thêm các card khác
];

let shuffledCards = shuffleArray(cards.concat(cards)); // Nhân đôi và xáo trộn

let score = 0;
let flippedCards = [];

function createBoard() {
  shuffledCards.forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.innerHTML = `
      <div class="card-inner">
        <div class="card-front"></div>
        <div class="card-back">
          <img src="${card.image}" alt="${card.name}">
        </div>
      </div>
    `;
    cardElement.addEventListener('click', flipCard);
    gameBoard.appendChild(cardElement);
  });
}

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function flipCard() {
  const card = this;
  if (flippedCards.length < 2 && !card.classList.contains('flipped')) {
    card.classList.add('flipped');
    flippedCards.push(card);

    if (flippedCards.length === 2) {
      setTimeout(checkMatch, 500); // Delay 0.5s
    }
  }
}

function checkMatch() {
  const [card1, card2] = flippedCards;
  const name1 = card1.querySelector('.card-back img').alt;
  const name2 = card2.querySelector('.card-back img').alt;

  if (name1 === name2) {
    score++;
    resultDisplay.textContent = `Score: ${score}`;
    card1.removeEventListener('click', flipCard);
    card2.removeEventListener('click', flipCard);
  } else {
    card1.classList.remove('flipped');
    card2.classList.remove('flipped');
  }

  flippedCards = [];
}

createBoard();
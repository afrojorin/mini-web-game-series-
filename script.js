const boxes = document.querySelectorAll('.game-box');
const popup = document.getElementById('popup');
const popupText = document.getElementById('popup-text');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');

let chosenGame = '';

boxes.forEach(box => {
  box.addEventListener('click', () => {
    chosenGame = box.parentElement.dataset.game;
    popupText.textContent = `Start ${chosenGame}?`;
    popup.style.display = 'flex';
  });
});

noBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

yesBtn.addEventListener('click', () => {
  popup.style.display = 'none';
  // TODO: Load the game here
  const gameLinks = {
    'Emoji Guessing': 'emoji.html',
    'Memory Card': 'memory.html',
    'Tic Tac Toe': 'tic.html',
    'Flappy Bird': 'flappy.html'
  };
  if (gameLinks[chosenGame]) {
    window.location.href = gameLinks[chosenGame];
  } else {
    alert(`Let's launch ${chosenGame}!`);
  }
});

let fCard;
let lCard;
let nCard;
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let msg = "";
let cards = [];
let player = {
  name: "Deepak",
  chips: 15,
};
let msgEl = document.getElementById("msg-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.querySelector(".card-el");
let playerEl = document.querySelector("#player-el");

function startGame() {
  fCard = getRandomCard();
  lCard = getRandomCard();
  sum = fCard + lCard;
  cards = [fCard, lCard];
  isAlive = true;
  hasBlackJack = false;

  playerEl.textContent = player.name + ": $" + player.chips;
  renderGame();
}

function renderGame() {
  if (sum <= 20) {
    msg = "You are still in the game, You may draw another card \u{1F60A}";
  } else if (sum === 21) {
    msg = "You won!\u{1F389}";
    hasBlackJack = true;
  } else {
    msg = "You lost!\u{1F622}";
    isAlive = false;
  }
  msgEl.textContent = msg;
  sumEl.textContent = "Sum: " + sum;
  cardEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " ";
  }
}

function newCard() {
  if (!(!isAlive || hasBlackJack)) {
    nCard = getRandomCard();
    sum += nCard;
    cards.push(nCard);
    renderGame();
  }
}

function getRandomCard() {
  let x = Math.floor(Math.random() * 13) + 1;
  if (x > 10) {
    return 10;
  } else if (x == 1) {
    return 11;
  }
  return x;
}

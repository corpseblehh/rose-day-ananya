let score = 0;
let gameInterval;

function startGame() {
   const music = document.getElementById("bg-music");
  music.volume = 0.5;
  music.play();
 score = 0;
  document.getElementById("score").innerText = "Roses Collected: 0";

  gameInterval = setInterval(createRose, 800);
}

function createRose() {
  const rose = document.createElement("div");
  rose.classList.add("rose");
  rose.innerText = "🌹";

  rose.style.left = Math.random() * 90 + "vw";
  rose.style.top = "0px";

  document.getElementById("game-area").appendChild(rose);

  let fall = setInterval(() => {
    rose.style.top = rose.offsetTop + 5 + "px";

    if (rose.offsetTop > window.innerHeight) {
      rose.remove();
      clearInterval(fall);
    }
  }, 30);

  rose.onclick = () => {
    score++;
    document.getElementById("score").innerText =
      "Roses Collected: " + score;
    rose.remove();
    clearInterval(fall);

    if (score === 10) {
      clearInterval(gameInterval);
      setTimeout(() => {
        alert("You collected my heart too 💘\nHappy Rose Day, Ananya 🌹");
      }, 200);
    }
  };
}

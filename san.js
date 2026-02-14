const heart = document.getElementById("heart");
const nameTag = document.getElementById("name");
const signature = document.getElementById("signature");


function showName() {
  nameTag.style.opacity = 1;
  signature.style.opacity = 1;
}

heart.addEventListener("click", () => {
  showName();
});


const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confettiPieces = [];

for (let i = 0; i < 200; i++) {
  confettiPieces.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height - canvas.height,
    size: Math.random() * 8 + 4,
    color: `hsl(${Math.random() * 360}, 100%, 50%)`,
    speed: Math.random() * 3 + 2
  });
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  confettiPieces.forEach(p => {
    ctx.fillStyle = p.color;
    ctx.fillRect(p.x, p.y, p.size, p.size);

    p.y += p.speed;

    if (p.y > canvas.height) {
      p.y = -10;
      p.x = Math.random() * canvas.width;
    }
  });

  requestAnimationFrame(drawConfetti);
}

drawConfetti();

const playBtn = document.getElementById('playBtn');
const music = document.getElementById('bgmusic');

playBtn.addEventListener('click', () => {
    music.play();
});


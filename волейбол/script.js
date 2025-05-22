const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

const court = {
    width: canvas.width,
    height: canvas.height,
    netHeight: 100
};

const playerWidth = 30, playerHeight = 60;
const gravity = 0.15, jumpPower = -6, moveSpeed = 4;

const player1 = {
    x: 100, y: court.height - playerHeight,
    vy: 0, grounded: true, score: 0,
    left: false, right: false, up: false, serve: false
};

const player2 = {
    x: court.width - 130, y: court.height - playerHeight,
    vy: 0, grounded: true, score: 0,
    left: false, right: false, up: false, serve: false
};

const ball = {
    x: 0, y: 0,
    vx: 0, vy: 0,
    radius: 20,
    serving: true,
    server: 1
};

let gameStarted = false;

function serveBall() {
    ball.serving = false;
    ball.vy = -10;
    ball.vx = ball.server === 1 ? 2 : -2;
    gameStarted = true;
}

function resetBall(scoringPlayer) {
    ball.serving = true;
    ball.server = scoringPlayer === player1 ? 1 : 2;

    if (ball.server === 1) {
    ball.x = player1.x + playerWidth + ball.radius;
    ball.y = player1.y - ball.radius;
    } else {
    ball.x = player2.x - ball.radius;
    ball.y = player2.y - ball.radius;
    }

    ball.vx = 0;
    ball.vy = 0;
    
    if (gameStarted) {
    if (scoringPlayer === player1) {
        player1.score++;
    } else {
        player2.score++;
    }
    }
}

function drawCourt() {
    ctx.fillStyle = '#3CB371';
    ctx.fillRect(0, 0, court.width, court.height);

    ctx.fillStyle = '#fff';
    ctx.fillRect(court.width / 2 - 2, court.height - court.netHeight, 4, court.netHeight);
}

function drawPlayer(p, color) {
    ctx.fillStyle = color;
    ctx.fillRect(p.x, p.y, playerWidth, playerHeight);
}

function drawBall() {
    ctx.fillStyle = '#ececec';
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fill();
}

function drawScore() {
    ctx.fillStyle = '#fff';
    ctx.font = '30px Arial';
    const scoreText = `${player1.score}:${player2.score}`;
    const textWidth = ctx.measureText(scoreText).width;
    ctx.fillText(scoreText, court.width / 2 - textWidth / 2, 40);
}

function updatePlayer(p) {
    if (p.left) p.x -= moveSpeed;
    if (p.right) p.x += moveSpeed;

    if (p === player1) {
    if (p.x < 0) p.x = 0;
    if (p.x + playerWidth > court.width / 2 - 2) {
        p.x = court.width / 2 - playerWidth - 2;
    }
    }

    if (p === player2) {
    if (p.x < court.width / 2 + 2) {
        p.x = court.width / 2 + 2;
    }
    if (p.x + playerWidth > court.width) {
        p.x = court.width - playerWidth;
    }
    }

    if (p.up && p.grounded) {
    p.vy = jumpPower;
    p.grounded = false;
    }

    p.y += p.vy;
    p.vy += gravity;

    if (p.y + playerHeight > court.height) {
    p.y = court.height - playerHeight;
    p.vy = 0;
    p.grounded = true;
    }
}

function checkCollision(p) {
    if (
    ball.x + ball.radius > p.x &&
    ball.x - ball.radius < p.x + playerWidth &&
    ball.y + ball.radius > p.y &&
    ball.y - ball.radius < p.y + playerHeight
    ) {
    ball.vy = -9;
    ball.vx = (ball.x < p.x + playerWidth / 2 ? -2 : 2);
    }
}

function updateBall() {
    if (ball.serving) {
    if (ball.server === 1) {
        ball.x = player1.x + playerWidth + ball.radius;
        ball.y = player1.y - ball.radius;
    } else {
        ball.x = player2.x - ball.radius;
        ball.y = player2.y - ball.radius;
    }
    return;
    }

    ball.x += ball.vx;
    ball.y += ball.vy;
    ball.vy += gravity;

    if (ball.x - ball.radius < 0 || ball.x + ball.radius > court.width) {
    ball.vx *= -1;
    }

    const netX = court.width / 2;
    const netTop = court.height - court.netHeight;
    const netWidth = 4;

    if (
    ball.y + ball.radius > netTop &&
    ball.y - ball.radius < court.height &&
    ball.x + ball.radius > netX - netWidth / 2 &&
    ball.x - ball.radius < netX + netWidth / 2
    ) {
    if (ball.x < netX) {
        ball.x = netX - netWidth / 2 - ball.radius;
        ball.vx = -Math.abs(ball.vx);
    } else {
        ball.x = netX + netWidth / 2 + ball.radius;
        ball.vx = Math.abs(ball.vx);
    }
    }

    if (ball.y + ball.radius >= netTop &&
        ball.y - ball.radius < netTop &&
        ball.x > netX - netWidth / 2 &&
        ball.x < netX + netWidth / 2
    ) {
    ball.y = netTop - ball.radius;
    ball.vy = -Math.abs(ball.vy);
    }

    if (ball.y + ball.radius >= court.height) {
    if (ball.x < court.width / 2) {
        resetBall(player2);
    } else {
        resetBall(player1);
    }
    }
}

function gameLoop() {
    ctx.clearRect(0, 0, court.width, court.height);

    drawCourt();
    updatePlayer(player1);
    updatePlayer(player2);
    updateBall();
    checkCollision(player1);
    checkCollision(player2);

    drawPlayer(player1, '#0000FF');
    drawPlayer(player2, '#FF0000');
    drawBall();
    drawScore();

    if (player1.score >= 10 || player2.score >= 10) {
    ctx.fillStyle = '#fff';
    ctx.font = '40px Arial';
    ctx.fillText(`Победил игрок ${player1.score >= 10 ? '1' : '2'}!`, 250, 200);
    return;
    }

    requestAnimationFrame(gameLoop);
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'a' || e.key === 'A') player1.left = true;
    if (e.key === 'd' || e.key === 'D') player1.right = true;
    if (e.key === 'w' || e.key === 'W') player1.up = true;
    if ((e.key === 's' || e.key === 'S') && ball.serving && ball.server === 1) serveBall();
    
    if (e.key === 'ArrowLeft') player2.left = true;
    if (e.key === 'ArrowRight') player2.right = true;
    if (e.key === 'ArrowUp') player2.up = true;
    if (e.key === 'ArrowDown' && ball.serving && ball.server === 2) serveBall();
    
    if (['a','d','w','s','ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.key)) {
        e.preventDefault();
    }
});

document.addEventListener('keyup', (e) => {
    if (e.key === 'a' || e.key === 'A') player1.left = false;
    if (e.key === 'd' || e.key === 'D') player1.right = false;
    if (e.key === 'w' || e.key === 'W') player1.up = false;
    
    if (e.key === 'ArrowLeft') player2.left = false;
    if (e.key === 'ArrowRight') player2.right = false;
    if (e.key === 'ArrowUp') player2.up = false;
});

ball.serving = true;
ball.server = Math.random() > 0.5 ? 1 : 2;
if (ball.server === 1) {
    ball.x = player1.x + playerWidth + ball.radius;
    ball.y = player1.y - ball.radius;
} else {
    ball.x = player2.x - ball.radius;
    ball.y = player2.y - ball.radius;
}
gameLoop();
let bg1 = document.querySelector(".bg1");
let bg2 = document.querySelector(".bg2");
let x1 = 0;
let x2 = window.innerWidth; // Second background starts just off-screen
const speed = 0.3; // Adjust for speed

function animate() {
    x1 -= speed;
    x2 -= speed;

    // When the first background moves off-screen, reset it to the right
    if (x1 <= -window.innerWidth) {
        x1 = x2 + window.innerWidth;
    }

    // When the second background moves off-screen, reset it to the right
    if (x2 <= -window.innerWidth) {
        x2 = x1 + window.innerWidth;
    }

    bg1.style.left = `${x1}px`;
    bg2.style.left = `${x2}px`;

    requestAnimationFrame(animate);
}

animate();

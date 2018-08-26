// This is where it all goes :)


let frameCount = 0;
let animationId = null;

function animate() {
    frameCount++;

    dragIndicatorAnimation(frameCount);

    nextAnimation();
}

function nextAnimation() {
    animationId = requestAnimationFrame(animate);
}

nextAnimation();
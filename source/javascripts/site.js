
let frameCount = 0;
let animationId = null;

function animate() {
    frameCount++;

    if (typeof dragIndicatorAnimation === "function") {
        dragIndicatorAnimation(frameCount);
    }

    if (typeof animateSundials === "function") {
        animateSundials(frameCount);
    }

    nextAnimation();
}

function nextAnimation() {
    animationId = requestAnimationFrame(animate);
}


window.onload = function () {
    nextAnimation();
    if (typeof sundialInit() === "function") {
        sundialInit();
    }
}
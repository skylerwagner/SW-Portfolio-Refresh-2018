

let dragAnimationFrameCount = 0;

function dragIndicatorAnimation(t) {

    const speed = 8;
    const range = 20;

    if (t % speed == 0) {
        dragAnimationFrameCount++;
        let element = document.getElementById(`drag-indicator`);
        element.style.position = 'relative';

        let p = dragAnimationFrameCount % range;
        element.style.top = -1.0 * p;
        let k = p / range;
        element.style.opacity = k < 0.5 ? k * 2.0 : (1-k) * 2.0;
    }

}


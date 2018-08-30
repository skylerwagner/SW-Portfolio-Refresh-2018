
class DragIndicatorAnimation {

    constructor() {
        this.dragAnimationFrameCount = 0;
    }

    animate(t) {
        const speed = 8;
        const range = 20;

        if (t % speed == 0) {
            this.dragAnimationFrameCount++;
            let element = document.getElementById(`drag-indicator`);

            if (element) {
                element.style.position = 'relative';

                let p = this.dragAnimationFrameCount % range;
                element.style.top = -1.0 * p;
                let k = p / range;
                element.style.opacity = k < 0.5 ? k * 2.0 : (1 - k) * 2.0;
            }
        }
    }
}

module.exports = DragIndicatorAnimation;

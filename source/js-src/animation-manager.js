const SundialAnimation = require("./sundial-animation");
const ColorThemeManager = require("./color-theme-manager");
const DragIndicatorAnimation = require("./drag-animation-indicator");

class AnimationManager {

    constructor() {
        this.frameCount = 0;
        this.animationId = null;

        this.sundials = new SundialAnimation();
        this.colorTheme = new ColorThemeManager();
        this.dragIndicator = new DragIndicatorAnimation();
    }

    animate() {
        this.frameCount++;

        this.sundials.animate(this.frameCount);
        this.colorTheme.animate(this.frameCount);
        this.dragIndicator.animate(this.frameCount);

        this.nextAnimation();
    }

    nextAnimation() {
        this.animationId = requestAnimationFrame(this.animate.bind(this));
    }

}

module.exports = AnimationManager;
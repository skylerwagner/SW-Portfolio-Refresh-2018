
const $ = require("jquery");

const FPS = 60;
const TRANSFORM_DURATION = 20;
const SUNDIAL_WIDTH = 650;

class SundialAnimation {

    /***
     *
     */
    constructor() {
        this.init();
        this.activateSundial(0);
    }

    /***
     *
     */
    init() {
        let sundials = []
        this.container =  document.getElementById("sundial-wrapper");
        if (this.container) {
            for (let i = 0; i < this.container.childElementCount; i++) {
                let sundial = this.container.children.item(i);
                sundials.push(sundial);
                sundial.style.display = "none";
            }
        }
        this.sundials = sundials.map((v, i) => {
            return {
                element: v,
                active: false,
                transforming: false,
                left: 0
            };
        });
    }

    /***
     *
     * @param t time as global frame count
     */
    animate(t) {
        for (let i = 0; i < this.sundials.length; i++) {
            this.animateSundial(i);
        }

    }

    /***
     *
     * @param index
     */
    animateSundial(index) {
        let sundial = this.sundials[index];
        if (sundial.active) {

            let rect = this.container.getBoundingClientRect();
            let windowWidth = $(window).width();

            let framesPerTransform = FPS * TRANSFORM_DURATION;
            let d = windowWidth / framesPerTransform;

            sundial.left = sundial.left- d;

            sundial.element.style.display = "flex";
            sundial.element.style.opacity = 1.0;
            sundial.element.style.left = `${sundial.left}px`;

            if (sundial.left < this.container.clientWidth) {
                // We reached the right edge of the conten area
                this.beginTransform(index);
            }

            if (sundial.left < 0) {
                // We reached the left edge of the conten area
                // Activate the next sundial
                let nextIndex =  (index+1) % this.sundials.length;
                this.activateSundial(nextIndex);
            }

            if (sundial.left < ( -1 * rect.left ) - SUNDIAL_WIDTH) {
                // We have traveled off screen
                this.deactiveSundial(index);
            }

        }
    }

    /***
     *
     * @param index
     */
    beginTransform(index) {
        let sundial = this.sundials[index];
        if (sundial.active && !sundial.transforming) {
            sundial.transforming = true;
            $(sundial.element).find('animateTransform').each(function (i) {
                let tx = $(this).get(0);
                if (typeof tx.beginElement === "function") {
                    tx.beginElement();
                }
            });
        }
    }

    /***
     *
     * @param index
     */
    activateSundial(index) {
        let sundial = this.sundials[index];
        if (!sundial.active) {
            sundial.active = true;

            let windowWidth = $(window).width();
            sundial.left = (windowWidth - this.container.clientWidth) / 2 + this.container.clientWidth;
            sundial.element.style.display = "flex";
            sundial.element.style.opacity = 1.0;
            sundial.element.style.left = `${sundial.left}px`;
        }
    }

    /***
     *
     * @param index
     */
    deactiveSundial(index) {
        let sundial = this.sundials[index];
        sundial.active = false;
        sundial.transforming = false;
        sundial.element.style.display = "flex";
        sundial.element.style.opacity = 0.0;
    }

}

module.exports = SundialAnimation;
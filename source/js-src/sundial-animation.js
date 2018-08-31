
const $ = require("jquery");

class SundialAnimation {

    constructor() {
        this.sundials = [];
        this.sundialIndex = 0;
        this.frameCount = 0;

        this.init();
    }

    init() {
        let element = document.getElementById("sundial-wrapper");
        if (element) {
            for (let i = 0; i < element.childElementCount; i++) {
                let sundial = element.children.item(i);
                this.sundials.push(sundial);
                sundial.style.display = "none";
            }
        }
    }

    animate(t) {
        let speed = 1;
        if (window.innerWidth < 768) {
            speed = 2;
        }

        if (t % speed == 0 && this.sundials.length > 0) {
            this.frameCount++;

            let container = document.getElementById("sundial-wrapper");
            let sundial = this.sundials[this.sundialIndex];

            // console.log(window.innerWidth);
            let x = container.clientWidth - (this.frameCount % (container.clientWidth));
            // let x = container.clientWidth - (this.frameCount % (window.innerWidth));
            // let diff = window.innerWidth - container.clientWidth;

            let xratio = x / container.clientWidth;
            const opacityThreshold = 0.15;
            /*if (xratio < opacityThreshold) {
                sundial.style.opacity = (xratio / opacityThreshold);
            } else {
                sundial.style.opacity = 1.0;
            }*/

            if (xratio < opacityThreshold) {
                sundial.style.opacity = 0.0;
            }

            const transformThreshold = 0.85;
            if (xratio > transformThreshold) {
                $(sundial).find('animateTransform').each(function(i) {
                    let tx = $(this).get(0);
                    if (typeof tx.beginElement === "function") {
                        tx.beginElement();
                    }
                });

            }

            if (x > 1) {
                 sundial.style.display = "flex";
                sundial.style.opacity = 1.0;
                sundial.style.left = `${x}px`;
            } else {
                 // sundial.style.display = "none";
                // sundial.style.opacity = 0.0;
                this.sundialIndex = (this.sundialIndex + 1) % this.sundials.length;
            }

        }

    }

}

module.exports = SundialAnimation;
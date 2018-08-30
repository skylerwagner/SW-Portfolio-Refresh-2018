
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
        const speed = 1;

        if (t % speed == 0 && this.sundials.length > 0) {
            this.frameCount++;

            let container = document.getElementById("sundial-wrapper");
            let sundial = this.sundials[this.sundialIndex];

            let x = container.clientWidth - (this.frameCount % container.clientWidth);

            if (x > 1) {
                sundial.style.display = "block";
                sundial.style.left = `${x}px`;
            } else {
                sundial.style.display = "none";
                this.sundialIndex = (this.sundialIndex + 1) % this.sundials.length;
            }

        }

    }

}

module.exports = SundialAnimation;
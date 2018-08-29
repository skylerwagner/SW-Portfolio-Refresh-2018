
let sundials = [];
let sundialIndex = 0;

function sundialInit() {
    let element = document.getElementById("sundial-wrapper");
    console.log(`there are ${element.childElementCount} sundials`);
    for (let i = 0; i < element.childElementCount; i++) {
        let sundial = element.children.item(i);
        sundials.push(sundial);
        //sundial.style.left = '-675px';
        sundial.style.display = "none";
    }
}

let sundialFrameCount = 0;

function animateSundials(t) {
    const speed = 1;

    if (t % speed == 0) {
        sundialFrameCount++;

        let container = document.getElementById("sundial-wrapper");
        let sundial = sundials[sundialIndex];

        let x = container.clientWidth - (sundialFrameCount % container.clientWidth);

        if (x > 1) {
            sundial.style.display = "block";
            sundial.style.left = `${x}px`;
        } else {
            sundial.style.display = "none";
            sundialIndex = (sundialIndex+1) % sundials.length;
        }


    }

}
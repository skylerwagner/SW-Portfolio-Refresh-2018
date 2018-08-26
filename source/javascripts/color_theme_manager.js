

const themes = [
    { // Default
        tone1: '#9b9b9b',
        tone2: '#f1f1f1',
        highlight: '#ffcb23',
        black: '#242424',
        white: '#ffffff'
    },
    { // Example 2
        tone1: '#7a7d74',
        tone2: '#ecf0e3',
        highlight: '#ff7e78',
        black: '#042735',
        white: '#f6faed'
    }

];


function setColorTheme(index) {
    let theme = themes[index];

    setColorProperty("palette-tone1-bg", "backgroundColor", theme.tone1);
    setColorProperty("palette-tone1-fg", "color", theme.tone1);
    setColorProperty("palette-tone1-border", "borderColor", theme.tone1);

    setColorProperty("palette-tone2-bg", "backgroundColor", theme.tone2);
    setColorProperty("palette-tone2-fg", "color", theme.tone2);
    setColorProperty("palette-tone2-border", "borderColor", theme.tone2);

    setColorProperty("palette-highlight-bg", "backgroundColor", theme.highlight);
    setColorProperty("palette-highlight-fg", "color", theme.highlight);
    setColorProperty("palette-highlight-border", "borderColor", theme.highlight);

    setColorProperty("palette-black-bg", "backgroundColor", theme.black);
    setColorProperty("palette-black-fg", "color", theme.black);
    setColorProperty("palette-black-border", "borderColor", theme.black);

    setColorProperty("palette-white-bg", "backgroundColor", theme.white);
    setColorProperty("palette-white-fg", "color", theme.white);
    setColorProperty("palette-white-border", "borderColor", theme.white);
    
}

function setColorProperty(className, property, color) {
    let elements = document.getElementsByClassName(className);
    for (let i = 0; i < elements.length; i++) {
        let element = elements[i];
        if (property === "color") {
            element.style.color = color;
        } else if (property === "backgroundColor") {
            element.style.backgroundColor = color;
        } else if (property === "borderColor") {
            element.style.borderColor = color;
        }
    }
}

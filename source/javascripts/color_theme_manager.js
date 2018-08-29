
const themes = [
    { // Default
        tone1: '#9b9b9b',
        tone2: '#f1f1f1',
        highlight: '#ffcb23',
        black: '#242424',
        white: '#ffffff'
    },
    { // Example 1
        tone1: '#054863',
        tone2: '#faeee4',
        highlight: '#00acf0',
        black: '#042735',
        white: '#f6f3f0'
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
    setAllColorProperties(theme, "tone1");
    setAllColorProperties(theme, "tone2");
    setAllColorProperties(theme, "highlight");
    setAllColorProperties(theme, "black");
    setAllColorProperties(theme, "white");

}

function setAllColorProperties(theme, name) {
    let color = theme[name];
    setColorProperty("palette-"+name+"-bg", "backgroundColor", color);
    setColorProperty("palette-"+name+"-fg", "color", color);
    setColorProperty("palette-"+name+"-border", "borderColor", color);
    setColorProperty("palette-"+name+"-fill", "fill", color);
    setColorProperty("palette-"+name+"-stroke", "stroke", color);
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
        } else if (property === "fill") {
            element.style.fill = color;
        } else if (property === "stroke") {
            element.style.stroke = color;
        }
    }
}

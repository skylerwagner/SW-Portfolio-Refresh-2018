
const ColorThemes = [
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
    },
    { // Example 3
        tone1: '#f56f66',
        tone2: '#f3c471',
        highlight: '#2580c9',
        black: '#4e6272',
        white: '#f2f2f2'
    },
    { // Example 4
        tone1: '#6c156a',
        tone2: '#9e5a9b',
        highlight: '#4be5cb',
        black: '#683366',
        white: '#ffffff'
    },
    { // Example 5
        tone1: '#a93ea5',
        tone2: '#ffcf31',
        highlight: '#4be5cb',
        black: '#683366',
        white: '#ffffff'
    }

];

const TRANSITION_DURATION = 2; // seconds

class ColorThemeManager {

    /***
     *
     */
    constructor() {
        this.colorThemeIndex = 0;

        if (window.localStorage) {
            let index = window.localStorage.getItem("colorThemeIndex");
            if (index > 0) {
                this.colorThemeIndex = index;
                ColorThemeManager.setColorTheme(index, 0);
            }
        }
    }

    /***
     *
     * @param t
     */
    animate(t) {
        const fps = 60;
        const interval = 15; //seconds

        if (t % (fps * interval) == 0) {
            this.colorThemeIndex = (this.colorThemeIndex + 1) % ColorThemes.length;
            ColorThemeManager.setColorTheme(this.colorThemeIndex, TRANSITION_DURATION);
            if (window.localStorage) {
                window.localStorage.setItem("colorThemeIndex", this.colorThemeIndex);
            }
        }
    }

    /***
     *
     * @param index
     * @param transitionDuration
     */
    static setColorTheme(index, transitionDuration) {
        let theme = ColorThemes[index];
        ColorThemeManager.setAllColorProperties(theme, "tone1", transitionDuration);
        ColorThemeManager.setAllColorProperties(theme, "tone2", transitionDuration);
        ColorThemeManager.setAllColorProperties(theme, "highlight", transitionDuration);
        ColorThemeManager.setAllColorProperties(theme, "black", transitionDuration);
        ColorThemeManager.setAllColorProperties(theme, "white", transitionDuration);

    }

    /***
     *
     * @param theme
     * @param name
     * @param transitionDuration
     */
    static setAllColorProperties(theme, name, transitionDuration) {
        let color = theme[name];
        ColorThemeManager.setColorProperty("palette-" + name + "-bg", "backgroundColor", color, transitionDuration);
        ColorThemeManager.setColorProperty("palette-" + name + "-fg", "color", color, transitionDuration);
        ColorThemeManager.setColorProperty("palette-" + name + "-border", "borderColor", color, transitionDuration);
        ColorThemeManager.setColorProperty("palette-" + name + "-fill", "fill", color, transitionDuration);
        ColorThemeManager.setColorProperty("palette-" + name + "-stroke", "stroke", color, transitionDuration);
    }

    /***
     *
     * @param className
     * @param property
     * @param color
     * @param transitionDuration
     */
    static setColorProperty(className, property, color, transitionDuration) {
        let elements = document.getElementsByClassName(className);
        if (!transitionDuration) {
            transitionDuration = 0;
        }

        for (let i = 0; i < elements.length; i++) {
            let element = elements[i];

            element.style.transitionDuration = `${transitionDuration}s`;

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

}

module.exports = ColorThemeManager;
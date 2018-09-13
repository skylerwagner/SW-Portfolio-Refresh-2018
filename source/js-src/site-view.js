
const $ = require("jquery");

class SiteView {

    /***
     *
     */
    constructor() {
        $(window).on('resize', () => {
            this.resizeTitle();
        });
    }

    /***
     *
     */
    render() {
        this.resizeTitle();
    }

    /***
     * Resize the title width to always be read-able without scrolling, but also
     * stay centered on the page with the other content.
     * This requires the pattern:
     * <div>  // hard width which is positioned (centered) on page
     *   <div> // resize this one
     *     <span class='intro-text'>
     *         styled text
     *     </span></div></div>
     */
    resizeTitle() {
        let w = $(window).width();

        let $titleText = $("span.intro-text");
        let element = $titleText.parent().get(0);
        let parent = $titleText.parent().parent().get(0);

        let rect = parent.getBoundingClientRect();
        const pad = 20;

        if (rect.left + rect.width > w) {
            element.style.width = `${w - rect.left - pad}px`;
        } else {
            element.style.width = `initial`;
        }


    }

}
module.exports = SiteView;
const $ = require("jquery");

class PortfolioView {

    render() {
        // Link is built by a middleman helper function, so we must style it here instead of in the HTML
        $(".project-title-wrapper a").addClass("palette-black-fg");
    }

}
module.exports = PortfolioView;
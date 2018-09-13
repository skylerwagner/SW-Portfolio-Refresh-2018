const AnimationManager = require("./animation-manager");
const ProjectDetailRenderer = require("./project-detail-view");
const PortfolioView = require("./portfolio-view");
const SiteView = require("./site-view");

window.onload = () => {
    const site = new SiteView();
    site.render();

    const portfolio = new PortfolioView();
    portfolio.render();

    const projectDetail = new ProjectDetailRenderer();
    projectDetail.render();

    const animationManager = new AnimationManager();
    animationManager.animate();
};

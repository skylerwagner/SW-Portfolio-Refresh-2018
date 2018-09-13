const AnimationManager = require("./animation-manager");
const ProjectDetailRenderer = require("./project-detail-view");
const PortfolioView = require("./portfolio-view");
const SiteView = require("./site-view");

window.onload = () => {
    let site = new SiteView();
    site.render();

    let portfolio = new PortfolioView();
    portfolio.render();

    let projectDetail = new ProjectDetailRenderer();
    projectDetail.render();

    let animationManager = new AnimationManager();
    animationManager.animate();
};

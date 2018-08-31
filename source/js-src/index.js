const AnimationManager = require("./animation-manager");
const ProjectDetailRenderer = require("./project-detail-view");
const PortfolioView = require("./portfolio-view");

window.onload = () => {
    let portfolio = new PortfolioView();
    portfolio.render();

    let projectDetail = new ProjectDetailRenderer();
    projectDetail.render();

    let animationManager = new AnimationManager();
    animationManager.animate();
};

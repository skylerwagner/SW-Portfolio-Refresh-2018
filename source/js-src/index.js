const AnimationManager = require("./animation-manager");
const ProjectDetailRenderer = require("./project-detail-renderer");


window.onload = () => {
    let projectDetail = new ProjectDetailRenderer();
    projectDetail.render();

    let animationManager = new AnimationManager();
    animationManager.animate();
};

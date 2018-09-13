const $ = require("jquery");
const slick = require("slick-carousel");
jQuery = $;
const simpleLightbox = require("simplelightbox");

const app = require("./app");

class ProjectDetailView {

    /***
     *
     */
    constructor() {
        $(window).on('resize', () => {
            this.setupSlickCarousel();
        });
    }

    /***
     *
     */
    render() {

        // Replace <a> links within the article with styling to match the end-of-page buttons
        let $links = $(".project-detail-content p a");
        $links.each(function (i) {
            let $a = $(this);
            let $link = $(`<ul class="button-list content-half-width"><li class="palette-tone1-border"><a class="palette-tone1-fg" href="${$a.attr('href')}">${$a.html()}</a></li></ul>`);
            $a.replaceWith($link);
        });

        // Constrain image size and maintain ratio.
        // Wrap each image with <a> for compatibility with SimpleLightbox
        const imgWidth = 200;
        let $images = $(".project-detail-content blockquote p img");
        $images.each(function(i) {
            let $img = $(this);
            let $parent = $img.parent();
            let w = $img.width();
            let h = $img.height();
            let r = h / w;
            $img.detach();

            let imgStyle = ``;
            imgStyle += `width: ${imgWidth}px; `;
            imgStyle += `max-width: ${imgWidth}px; `;
            imgStyle += `height: ${imgWidth * r}px; `;
            imgStyle += `max-height: ${imgWidth * r}px; `;
            imgStyle += `border: 1px solid #9b9b9b`;

            // Replace image with a chunk of HTML which will become the Slick Carousel item,
            // and is also compatible as a SimpleLightbox link
            let html = "";
            html += `<div>`;
            html += `  <div class="project-detail-image-wrapper">`;
            html += `    <a class="lightbox-element" href="${$img.attr('src')}">`;
            html += `      <img src="${$img.attr('src')}" class="palette-tone1-border" style="${imgStyle}"/>`;
            html += `    </a>`;
            html += `  </div>`;
            html += `</div>`;
            $parent.append(html);

        });

        // Setup the background color for each image gallery block
        let $imageBlock = $(".project-detail-content blockquote");
        $imageBlock.addClass("palette-tone2-bg");

        // Setup lightbox behavior on each image
        $("a.lightbox-element").simpleLightbox();

        this.setupSlickCarousel();


        $(".project-detail-content h2").addClass("fonts-body-text-intro");
        $(".project-detail-content p").addClass("fonts-body-text-article");

    }

    setupSlickCarousel() {
        let slideCount = 4;
        if (app.isMobile()) {
            slideCount = 1;
        } else if (app.isTablet()) {
            slideCount = 2;
        }

        // Setup slick carousel on each image block
        let $imageList = $(".project-detail-content blockquote p");
        $imageList.slick({
            slidesToShow: slideCount,
            slidesToScroll: slideCount,
            dots: true,
        });
    }

}

module.exports = ProjectDetailView;
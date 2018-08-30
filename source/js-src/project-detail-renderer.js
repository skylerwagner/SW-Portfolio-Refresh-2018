const $ = require("jquery");
const slick = require("slick-carousel");
jQuery = $;
const simpleLightbox = require("simplelightbox");

class ProjectDetailRenderer {

    render() {

        // Constrain image size and maintain ratio.
        // Wrap each image with <a> for compatibility with SimpleLightbox
        const imgHeight = $(window).width() <= 600 ? 250 : 475;
        let $images = $(".project-detail-content blockquote p img");
        $images.each(function(i) {
            let $img = $(this);
            let $parent = $img.parent();
            let w = $img.width();
            let h = $img.height();
            let r = w / h;
            $img.width(`${imgHeight * r}px`);
            $img.css('max-width',`${imgHeight * r}px`);
            $img.height(`${imgHeight}px`);
            $img.css('max-height',`${imgHeight}px`);

            $img.detach();

            let $link = $(`<a href="${$img.attr('src')}" class="project-detail-image-wrapper"/>`);
            $link.append($img);
            $parent.append($link);

        });

        // Setup the background color for each image gallery block
        let $imageBlock = $(".project-detail-content blockquote");
        $imageBlock.addClass("palette-tone2-bg");

        // Setup lightbox behavior on each image
        $("a.project-detail-image-wrapper").simpleLightbox();

        // Setup slick carousel on each image block
        let $imageList = $(".project-detail-content blockquote p");
        $imageList.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
        });


        $(".project-detail-content h2").addClass("fonts-body-text-intro");
        $(".project-detail-content p").addClass("fonts-body-text-article");

    }

}

module.exports = ProjectDetailRenderer;
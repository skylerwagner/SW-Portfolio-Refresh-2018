const $ = require("jquery");
const slick = require("slick-carousel");
jQuery = $;
const simpleLightbox = require("simplelightbox");

class ProjectDetailView {

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
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: true,
        });


        $(".project-detail-content h2").addClass("fonts-body-text-intro");
        $(".project-detail-content p").addClass("fonts-body-text-article");

    }

}

module.exports = ProjectDetailView;
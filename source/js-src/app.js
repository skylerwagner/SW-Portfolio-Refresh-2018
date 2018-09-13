const $ = require("jquery");

const MOBILE_BREAKPOINT = 600;
const TABLE_BREAKPOINT = 1024;

module.exports.isMobile = function () {
    return $(window).width() <= MOBILE_BREAKPOINT;
};

module.exports.isTablet = function () {
    return $(window).width() <= TABLE_BREAKPOINT;
};
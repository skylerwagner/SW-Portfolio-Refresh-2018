module.exports = {
    context: __dirname + "/source",
    entry: "./js-src/index.js",
    output: {
        path: __dirname + "/source/javascripts",
        filename: "bundle.js"
    }
}
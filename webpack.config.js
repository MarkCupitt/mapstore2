const path = require("path");

const themeEntries = require('./MapStore2/build/themes.js').themeEntries;
const extractThemesPlugin = require('./MapStore2/build/themes.js').extractThemesPlugin;

module.exports = require('./MapStore2/build/buildConfig')(
    {
        'MarktestProject': path.join(__dirname, "js", "app"),
        'MarktestProject-embedded': path.join(__dirname, "MapStore2", "web", "client", "product", "embedded"),
        'MarktestProject-api': path.join(__dirname, "MapStore2", "web", "client", "product", "api")
    },
    themeEntries,
    {
        base: __dirname,
        dist: path.join(__dirname, "dist"),
        framework: path.join(__dirname, "MapStore2", "web", "client"),
        code: [path.join(__dirname, "js"), path.join(__dirname, "MapStore2", "web", "client")]
    },
    extractThemesPlugin,
    false,
    "dist/",
    '.MarktestProject',
    [],
    {
        "@mapstore": path.resolve(__dirname, "MapStore2", "web", "client"),
        "@js": path.resolve(__dirname, "js")
    }
);

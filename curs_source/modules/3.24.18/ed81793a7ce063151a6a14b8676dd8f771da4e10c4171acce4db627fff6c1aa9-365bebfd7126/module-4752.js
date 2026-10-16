var n = require("./module-831.js"), o = Math.floor;
module.exports = Number.isInteger || function(t) {
    return !n(t) && isFinite(t) && o(t) === t;
};

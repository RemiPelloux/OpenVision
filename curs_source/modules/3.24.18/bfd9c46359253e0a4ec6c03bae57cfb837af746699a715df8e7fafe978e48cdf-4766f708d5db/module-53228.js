var n = require("./module-15791.js"), s = require("./module-66722.js").setLogger;
function o(e, t) {
    var r = new n(t);
    return r.reset(), "function" == typeof Buffer && e instanceof Buffer ? r.feed(e.toString("binary")) : r.feed(e), r.close(), r;
}
exports.detect = function(e, t) {
    return o(e, t).result;
}, exports.detectAll = function(e, t) {
    return o(e, t).results;
}, exports.UniversalDetector = n, exports.enableDebug = function() {
    s(console.log.bind(console));
};

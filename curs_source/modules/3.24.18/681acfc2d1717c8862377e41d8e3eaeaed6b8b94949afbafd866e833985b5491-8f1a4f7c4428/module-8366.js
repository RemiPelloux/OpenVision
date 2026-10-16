"use strict";
function t(e) {
    return (e / 8 | 0) + (e % 8 == 0 ? 0 : 1);
}
var A = {
    ES256: t(256),
    ES384: t(384),
    ES512: t(521)
};
module.exports = function(e) {
    var t = A[e];
    if (t) return t;
    throw new Error('Unknown algorithm "' + e + '"');
};

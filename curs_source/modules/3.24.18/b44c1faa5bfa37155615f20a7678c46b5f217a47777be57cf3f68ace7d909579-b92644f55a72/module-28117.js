"use strict";
require.d(exports, {
    an: ()=>c,
    qU: ()=>a,
    uw: ()=>l
});
var n = require("./module-33002.js");
const s = new (require("./module-68505.js")).q({
    max: 1e5
}), o = "abcdefghijklmnopqrstuvwxyz0123456789";
function i(e) {
    const t = s.get(e) ?? 0;
    return s.set(e, t + 1), t;
}
function a(e) {
    return `${e}-${i(e)}-${function() {
        const e = new Uint8Array(4);
        return crypto.getRandomValues(e), Array.from(e, (e)=>o.charAt(e % o.length)).join("");
    }()}`;
}
const c = (0, n.cF)(Symbol("invocationIdGenerator"), ()=>crypto.randomUUID());
function l(e) {
    return e.get(c)();
}

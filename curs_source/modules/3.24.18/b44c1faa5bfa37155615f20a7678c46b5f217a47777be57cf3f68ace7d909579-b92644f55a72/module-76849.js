"use strict";
require.d(exports, {
    WI: ()=>i,
    Xq: ()=>l,
    m4: ()=>c
});
require("./module-77598.js");
var n = require("./module-48161.js"), s = require("./module-76760.js"), o = require("./module-68503.js");
function i() {
    const e = process.env.CURSOR_CONFIG_DIR;
    if (e?.trim()) return e;
    const t = process.env.XDG_CONFIG_HOME;
    return t?.trim() ? (0, s.join)(t, "cursor") : (0, s.join)((0, n.homedir)(), ".cursor");
}
function a() {
    const e = process.env.CURSOR_DATA_DIR;
    return e?.trim() ? e : (0, s.join)((0, n.homedir)(), ".cursor");
}
function c() {
    return (0, s.join)(a(), "projects");
}
function l(e) {
    return (0, s.join)(c(), (0, o.r_)(e));
}

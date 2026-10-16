"use strict";
require.d(exports, {
    Q$: ()=>o,
    pg: ()=>d,
    d3: ()=>l,
    _r: ()=>i,
    Mt: ()=>p,
    kx: ()=>u
});
var n = require("./module-73024.js"), s = require("./module-98995.js");
const o = JSON.parse('{"xh":["@anysphere/tree-chunk-napi","@napi-rs/canvas","tree-sitter","tree-sitter-bash"]}').xh;
function i(e) {
    return Object.assign(new Error(e), {
        code: "MODULE_NOT_FOUND"
    });
}
function a(e) {
    const t = e.split("/");
    return e.startsWith("@") ? t.slice(0, 2).join("/") : t[0];
}
function c(e) {
    return "" !== e && "." !== e && ".." !== e && !/[\\\u0000-\u001f\u007f]/.test(e);
}
function l(e, t = o) {
    const r = a(e);
    if (!t.includes(r)) return !1;
    const n = e.slice(r.length);
    return "" === n || n.startsWith("/") && n.slice(1).split("/").every(c);
}
function u(e) {
    return `agent-harness:host-natives:${n.realpathSync(e)}`;
}
function d(e, t) {
    const r = a(t), n = Object.hasOwn(e, r) ? e[r] : void 0;
    if (void 0 === n) throw i(`agent harness: this host does not serve native "${r}"`);
    return t === r ? n : (0, s.createRequire)(n).resolve(t);
}
function p(e, { provided: t = o } = {}) {
    return e.filter((e)=>!l(e, t));
}

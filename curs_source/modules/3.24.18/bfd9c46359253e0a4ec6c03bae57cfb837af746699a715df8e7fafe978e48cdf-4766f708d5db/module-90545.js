"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
});
const n = require("./module-63401.js"), s = require("./module-79130.js"), o = require("./module-95183.js"), i = new o.Name("fullFormats"), a = new o.Name("fastFormats"), c = (e, t = {
    keywords: !0
})=>{
    if (Array.isArray(t)) return l(e, t, n.fullFormats, i), e;
    const [r, o] = "fast" === t.mode ? [
        n.fastFormats,
        a
    ] : [
        n.fullFormats,
        i
    ];
    return l(e, t.formats || n.formatNames, r, o), t.keywords && (0, s.default)(e), e;
};
function l(e, t, r, n) {
    var s, i;
    null !== (s = (i = e.opts.code).formats) && void 0 !== s || (i.formats = o._`require("ajv-formats/dist/formats").${n}`);
    for (const n of t)e.addFormat(n, r[n]);
}
c.get = (e, t = "full")=>{
    const r = ("fast" === t ? n.fastFormats : n.fullFormats)[e];
    if (!r) throw new Error(`Unknown format "${e}"`);
    return r;
};
var _t;
module.exports = _t = c;
Object.defineProperty(_t, "__esModule", {
    value: !0
}), _t.default = c;

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
});
const n = require("./module-63401.js"), o = require("./module-79130.js"), s = require("./module-95183.js"), i = new s.Name("fullFormats"), a = new s.Name("fastFormats"), l = (e, t = {
    keywords: !0
})=>{
    if (Array.isArray(t)) return c(e, t, n.fullFormats, i), e;
    const [r, s] = "fast" === t.mode ? [
        n.fastFormats,
        a
    ] : [
        n.fullFormats,
        i
    ];
    return c(e, t.formats || n.formatNames, r, s), t.keywords && (0, o.default)(e), e;
};
function c(e, t, r, n) {
    var o, i;
    null !== (o = (i = e.opts.code).formats) && void 0 !== o || (i.formats = s._`require("ajv-formats/dist/formats").${n}`);
    for (const n of t)e.addFormat(n, r[n]);
}
l.get = (e, t = "full")=>{
    const r = ("fast" === t ? n.fastFormats : n.fullFormats)[e];
    if (!r) throw new Error(`Unknown format "${e}"`);
    return r;
};
var _t;
module.exports = _t = l;
Object.defineProperty(_t, "__esModule", {
    value: !0
}), _t.default = l;

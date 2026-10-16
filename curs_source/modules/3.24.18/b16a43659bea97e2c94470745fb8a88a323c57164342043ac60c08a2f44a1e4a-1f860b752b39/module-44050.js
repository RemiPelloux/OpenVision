let r = !0, n = require(43106);
n.deflateSync || (r = !1);
let s = require("./module-94393.js"), h = require("./module-77976.js");
module.exports = function(t, e) {
    if (!r) throw new Error("To use the sync capability of this library in old node versions, please pin pngjs to v2.3.0");
    let i = new h(e || {}), o = [];
    o.push(Buffer.from(s.PNG_SIGNATURE)), o.push(i.packIHDR(t.width, t.height)), t.gamma && o.push(i.packGAMA(t.gamma));
    let a = i.filterData(t.data, t.width, t.height), l = n.deflateSync(a, i.getDeflateOptions());
    if (a = null, !l || !l.length) throw new Error("bad png - invalid compressed data response");
    return o.push(i.packIDAT(l)), o.push(i.packIEND()), Buffer.concat(o);
};

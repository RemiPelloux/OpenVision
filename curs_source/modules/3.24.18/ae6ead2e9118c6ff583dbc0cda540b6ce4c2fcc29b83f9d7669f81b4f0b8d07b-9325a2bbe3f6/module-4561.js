let r = !0, n = require(3106), s = require("./module-7263.js");
n.deflateSync || (r = !1);
let h = require("./module-7749.js"), o = require("./module-7736.js"), a = require("./module-1041.js"), l = require("./module-9626.js"), f = require("./module-9734.js");
module.exports = function(t, e) {
    if (!r) throw new Error("To use the sync capability of this library in old node versions, please pin pngjs to v2.3.0");
    let i, p, d;
    let u = [];
    let c = new h(t), _ = new a(e, {
        read: c.read.bind(c),
        error: function(t) {
            i = t;
        },
        metadata: function(t) {
            p = t;
        },
        gamma: function(t) {
            d = t;
        },
        palette: function(t) {
            p.palette = t;
        },
        transColor: function(t) {
            p.transColor = t;
        },
        inflateData: function(t) {
            u.push(t);
        },
        simpleTransparency: function() {
            p.alpha = !0;
        }
    });
    if (_.start(), c.process(), i) throw i;
    let g, b = Buffer.concat(u);
    if (u.length = 0, p.interlace) g = n.inflateSync(b);
    else {
        let t = (1 + (p.width * p.bpp * p.depth + 7 >> 3)) * p.height;
        g = s(b, {
            chunkSize: t,
            maxLength: t
        });
    }
    if (b = null, !g || !g.length) throw new Error("bad png - invalid inflate data response");
    let y = o.process(g, p);
    b = null;
    let w = l.dataToBitMap(y, p);
    y = null;
    let E = f(w, p, e.skipRescale);
    return p.data = E, p.gamma = d || 0, p;
};

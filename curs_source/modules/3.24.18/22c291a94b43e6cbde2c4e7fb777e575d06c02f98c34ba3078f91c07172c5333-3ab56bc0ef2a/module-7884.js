const r = require(9896), s = require("./module-6267.js"), n = require("./module-6950.js"), { GifFrame: a } = require("./module-727.js"), { GifError: o } = require("./module-2104.js"), { GifCodec: h } = require("./module-3424.js"), l = [
    ".jpg",
    ".jpeg",
    ".png",
    ".bmp"
], u = new h;
function m(t, e, i, r, n) {
    const a = Array.isArray(t) ? t : [
        t
    ];
    if (n) {
        if ([
            "FloydSteinberg",
            "FalseFloydSteinberg",
            "Stucki",
            "Atkinson",
            "Jarvis",
            "Burkes",
            "Sierra",
            "TwoSierra",
            "SierraLite"
        ].indexOf(n.ditherAlgorithm) < 0) throw new Error(`Invalid ditherAlgorithm '${n.ditherAlgorithm}'`);
        void 0 === n.serpentine && (n.serpentine = !0), void 0 === n.minimumColorDistanceToDither && (n.minimumColorDistanceToDither = 0), void 0 === n.calculateErrorLikeGIMP && (n.calculateErrorLikeGIMP = !1);
    }
    const o = new s.distance.Euclidean, h = new s.palette[e](o, i, r);
    let l;
    l = n ? new s.image.ErrorDiffusionArray(o, s.image.ErrorDiffusionArrayKernel[n.ditherAlgorithm], n.serpentine, n.minimumColorDistanceToDither, n.calculateErrorLikeGIMP) : new s.image.NearestColor(o);
    const u = [];
    a.forEach((t)=>{
        const e = t.bitmap.data, i = new ArrayBuffer(e.length), r = new Uint32Array(i);
        for(let t = 0, i = 0; t < e.length; t += 4, ++i)r[i] = e.readUInt32LE(t, !0);
        const n = s.utils.PointContainer.fromUint32Array(r, t.bitmap.width, t.bitmap.height);
        h.sample(n), u.push(n);
    });
    const m = h.quantizeSync();
    for(let t = 0; t < a.length; ++t){
        const e = a[t].bitmap.data, i = l.quantizeSync(u[t], m).toUint32Array();
        for(let t = 0, r = 0; t < e.length; t += 4, ++r)e.writeUInt32LE(i[r], t);
    }
}
exports.cloneFrames = function(t) {
    let e = [];
    return t.forEach((t)=>{
        e.push(new a(t));
    }), e;
}, exports.getColorInfo = function(t, e) {
    let i = !1;
    const r = [];
    for(let e = 0; e < t.length; ++e){
        let s = t[e].getPalette();
        if (s.usesTransparency && (i = !0), s.indexCount > 256) throw new o(`Frame ${e} uses more than 256 color indexes`);
        r.push(s);
    }
    if (0 === e) return {
        usesTransparency: i,
        palettes: r
    };
    const s = new Set;
    r.forEach((t)=>{
        t.colors.forEach((t)=>{
            s.add(t);
        });
    });
    let n = s.size;
    if (i && ++n, e && n > e) return {
        usesTransparency: i,
        palettes: r
    };
    const a = new Array(s.size), h = s.values();
    for(let t = 0; t < a.length; ++t)a[t] = h.next().value;
    return a.sort((t, e)=>t - e), {
        colors: a,
        indexCount: n,
        usesTransparency: i,
        palettes: r
    };
}, exports.copyAsJimp = function(t, i) {
    return exports.shareAsJimp(t, new n(i));
}, exports.getMaxDimensions = function(t) {
    let e = 0, i = 0;
    return t.forEach((t)=>{
        const r = t.xOffset + t.bitmap.width;
        r > e && (e = r);
        const s = t.yOffset + t.bitmap.height;
        s > i && (i = s);
    }), {
        maxWidth: e,
        maxHeight: i
    };
}, exports.quantizeDekker = function(t, e, i) {
    m(t, "NeuQuantFloat", e = e || 256, 0, i);
}, exports.quantizeSorokin = function(t, e, i, r) {
    let s;
    switch(e = e || 256, i = i || "min-pop"){
        case "min-pop":
            s = 2;
            break;
        case "top-pop":
            s = 1;
            break;
        default:
            throw new Error(`Invalid quantizeSorokin histogram '${i}'`);
    }
    m(t, "RGBQuant", e, s, r);
}, exports.quantizeWu = function(t, e, i, r) {
    if (e = e || 256, (i = i || 5) < 1 || i > 8) throw new Error("Invalid quantization quality");
    m(t, "WuQuant", e, i, r);
}, exports.read = function(t, e) {
    return e = e || u, Buffer.isBuffer(t) ? e.decodeGif(t) : (i = t, new Promise((t, e)=>{
        r.readFile(i, (i, r)=>i ? e(i) : t(r));
    })).then((t)=>e.decodeGif(t));
    var i;
}, exports.shareAsJimp = function(t, e) {
    const i = new t(e.bitmap.width, e.bitmap.height, 0);
    return i.bitmap.data = e.bitmap.data, i;
}, exports.write = function(t, e, i, s) {
    s = s || u;
    const n = t.match(/\.[a-zA-Z]+$/);
    if (null !== n && l.includes(n[0].toLowerCase())) throw new Error(`GIF '${t}' has an unexpected suffix`);
    return s.encodeGif(e, i).then((e)=>(function(t, e) {
            return new Promise((i, s)=>{
                r.writeFile(t, e, (t)=>t ? s(t) : i());
            });
        })(t, e.buffer).then(()=>e));
};

let r = require("./module-4393.js");
module.exports = function(t, e, i, n) {
    let s = -1 !== [
        r.COLORTYPE_COLOR_ALPHA,
        r.COLORTYPE_ALPHA
    ].indexOf(n.colorType);
    if (n.colorType === n.inputColorType) {
        let e = function() {
            let t = new ArrayBuffer(2);
            return new DataView(t).setInt16(0, 256, !0), 256 !== new Int16Array(t)[0];
        }();
        if (8 === n.bitDepth || 16 === n.bitDepth && e) return t;
    }
    let h = 16 !== n.bitDepth ? t : new Uint16Array(t.buffer), o = 255, a = r.COLORTYPE_TO_BPP_MAP[n.inputColorType];
    4 !== a || n.inputHasAlpha || (a = 3);
    let l = r.COLORTYPE_TO_BPP_MAP[n.colorType];
    16 === n.bitDepth && (o = 65535, l *= 2);
    let f = Buffer.alloc(e * i * l), p = 0, d = 0, u = n.bgColor || {};
    function c() {
        let t, e, i, a = o;
        switch(n.inputColorType){
            case r.COLORTYPE_COLOR_ALPHA:
                a = h[p + 3], t = h[p], e = h[p + 1], i = h[p + 2];
                break;
            case r.COLORTYPE_COLOR:
                t = h[p], e = h[p + 1], i = h[p + 2];
                break;
            case r.COLORTYPE_ALPHA:
                a = h[p + 1], t = h[p], e = t, i = t;
                break;
            case r.COLORTYPE_GRAYSCALE:
                t = h[p], e = t, i = t;
                break;
            default:
                throw new Error("input color type:" + n.inputColorType + " is not supported at present");
        }
        return n.inputHasAlpha && (s || (a /= o, t = Math.min(Math.max(Math.round((1 - a) * u.red + a * t), 0), o), e = Math.min(Math.max(Math.round((1 - a) * u.green + a * e), 0), o), i = Math.min(Math.max(Math.round((1 - a) * u.blue + a * i), 0), o))), {
            red: t,
            green: e,
            blue: i,
            alpha: a
        };
    }
    void 0 === u.red && (u.red = o), void 0 === u.green && (u.green = o), void 0 === u.blue && (u.blue = o);
    for(let t = 0; t < i; t++)for(let t = 0; t < e; t++){
        let t = c();
        switch(n.colorType){
            case r.COLORTYPE_COLOR_ALPHA:
            case r.COLORTYPE_COLOR:
                8 === n.bitDepth ? (f[d] = t.red, f[d + 1] = t.green, f[d + 2] = t.blue, s && (f[d + 3] = t.alpha)) : (f.writeUInt16BE(t.red, d), f.writeUInt16BE(t.green, d + 2), f.writeUInt16BE(t.blue, d + 4), s && f.writeUInt16BE(t.alpha, d + 6));
                break;
            case r.COLORTYPE_ALPHA:
            case r.COLORTYPE_GRAYSCALE:
                {
                    let e = (t.red + t.green + t.blue) / 3;
                    8 === n.bitDepth ? (f[d] = e, s && (f[d + 1] = t.alpha)) : (f.writeUInt16BE(e, d), s && f.writeUInt16BE(t.alpha, d + 2));
                    break;
                }
            default:
                throw new Error("unrecognised color Type " + n.colorType);
        }
        p += a, d += l;
    }
    return f;
};

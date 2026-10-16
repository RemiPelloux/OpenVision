"use strict";
require.r(exports), require.d(exports, {
    BlendMode: ()=>d,
    HorizontalAlign: ()=>c,
    VerticalAlign: ()=>u,
    composite: ()=>P,
    createJimp: ()=>M,
    getExifOrientation: ()=>F
});
var a = {};
require.r(a), require.d(a, {
    add: ()=>w,
    darken: ()=>y,
    difference: ()=>T,
    dstOver: ()=>x,
    exclusion: ()=>k,
    hardLight: ()=>E,
    lighten: ()=>I,
    multiply: ()=>b,
    names: ()=>B,
    overlay: ()=>S,
    screen: ()=>v,
    srcOver: ()=>g
});
var n, r = require(9746);
!function(e) {
    e[e.EXTEND = 1] = "EXTEND", e[e.WRAP = 2] = "WRAP", e[e.CROP = 3] = "CROP";
}(n || (n = {}));
r.Ik({
    bitmap: r.Ik({
        data: r.KC([
            r.Nl(Buffer),
            r.Nl(Uint8Array)
        ]),
        width: r.ai(),
        height: r.ai()
    })
});
var o = require(2716), s = require("./module-7626.js");
function f(e, t) {
    return e.then(function(e) {
        return [
            null,
            e
        ];
    }).catch(function(e) {
        return t && Object.assign(e, t), [
            e,
            void 0
        ];
    });
}
var p = require(9896);
const m = p.promises.readFile, l = p.promises.writeFile;
var c, u, d, h = require("./module-1060.js");
function g(e, t, i = 1) {
    e.a *= i;
    const a = t.a + e.a - t.a * e.a;
    return {
        r: (e.r * e.a + t.r * t.a * (1 - e.a)) / a,
        g: (e.g * e.a + t.g * t.a * (1 - e.a)) / a,
        b: (e.b * e.a + t.b * t.a * (1 - e.a)) / a,
        a
    };
}
function x(e, t, i = 1) {
    e.a *= i;
    const a = t.a + e.a - t.a * e.a;
    return {
        r: (t.r * t.a + e.r * e.a * (1 - t.a)) / a,
        g: (t.g * t.a + e.g * e.a * (1 - t.a)) / a,
        b: (t.b * t.a + e.b * e.a * (1 - t.a)) / a,
        a
    };
}
function b(e, t, i = 1) {
    e.a *= i;
    const a = t.a + e.a - t.a * e.a, n = e.r * e.a, r = e.g * e.a, o = e.b * e.a, s = t.r * t.a, f = t.g * t.a, p = t.b * t.a;
    return {
        r: (n * s + n * (1 - t.a) + s * (1 - e.a)) / a,
        g: (r * f + r * (1 - t.a) + f * (1 - e.a)) / a,
        b: (o * p + o * (1 - t.a) + p * (1 - e.a)) / a,
        a
    };
}
function w(e, t, i = 1) {
    e.a *= i;
    const a = t.a + e.a - t.a * e.a, n = e.r * e.a, r = e.g * e.a, o = e.b * e.a;
    return {
        r: (n + t.r * t.a) / a,
        g: (r + t.g * t.a) / a,
        b: (o + t.b * t.a) / a,
        a
    };
}
function v(e, t, i = 1) {
    e.a *= i;
    const a = t.a + e.a - t.a * e.a, n = e.r * e.a, r = e.g * e.a, o = e.b * e.a, s = t.r * t.a, f = t.g * t.a, p = t.b * t.a;
    return {
        r: (n * t.a + s * e.a - n * s + n * (1 - t.a) + s * (1 - e.a)) / a,
        g: (r * t.a + f * e.a - r * f + r * (1 - t.a) + f * (1 - e.a)) / a,
        b: (o * t.a + p * e.a - o * p + o * (1 - t.a) + p * (1 - e.a)) / a,
        a
    };
}
function S(e, t, i = 1) {
    e.a *= i;
    const a = t.a + e.a - t.a * e.a, n = e.r * e.a, r = e.g * e.a, o = e.b * e.a, s = t.r * t.a, f = t.g * t.a, p = t.b * t.a;
    return {
        r: (2 * s <= t.a ? 2 * n * s + n * (1 - t.a) + s * (1 - e.a) : n * (1 + t.a) + s * (1 + e.a) - 2 * s * n - t.a * e.a) / a,
        g: (2 * f <= t.a ? 2 * r * f + r * (1 - t.a) + f * (1 - e.a) : r * (1 + t.a) + f * (1 + e.a) - 2 * f * r - t.a * e.a) / a,
        b: (2 * p <= t.a ? 2 * o * p + o * (1 - t.a) + p * (1 - e.a) : o * (1 + t.a) + p * (1 + e.a) - 2 * p * o - t.a * e.a) / a,
        a
    };
}
function y(e, t, i = 1) {
    e.a *= i;
    const a = t.a + e.a - t.a * e.a, n = e.r * e.a, r = e.g * e.a, o = e.b * e.a, s = t.r * t.a, f = t.g * t.a, p = t.b * t.a;
    return {
        r: (Math.min(n * t.a, s * e.a) + n * (1 - t.a) + s * (1 - e.a)) / a,
        g: (Math.min(r * t.a, f * e.a) + r * (1 - t.a) + f * (1 - e.a)) / a,
        b: (Math.min(o * t.a, p * e.a) + o * (1 - t.a) + p * (1 - e.a)) / a,
        a
    };
}
function I(e, t, i = 1) {
    e.a *= i;
    const a = t.a + e.a - t.a * e.a, n = e.r * e.a, r = e.g * e.a, o = e.b * e.a, s = t.r * t.a, f = t.g * t.a, p = t.b * t.a;
    return {
        r: (Math.max(n * t.a, s * e.a) + n * (1 - t.a) + s * (1 - e.a)) / a,
        g: (Math.max(r * t.a, f * e.a) + r * (1 - t.a) + f * (1 - e.a)) / a,
        b: (Math.max(o * t.a, p * e.a) + o * (1 - t.a) + p * (1 - e.a)) / a,
        a
    };
}
function E(e, t, i = 1) {
    e.a *= i;
    const a = t.a + e.a - t.a * e.a, n = e.r * e.a, r = e.g * e.a, o = e.b * e.a, s = t.r * t.a, f = t.g * t.a, p = t.b * t.a;
    return {
        r: (2 * n <= e.a ? 2 * n * s + n * (1 - t.a) + s * (1 - e.a) : n * (1 + t.a) + s * (1 + e.a) - 2 * s * n - t.a * e.a) / a,
        g: (2 * r <= e.a ? 2 * r * f + r * (1 - t.a) + f * (1 - e.a) : r * (1 + t.a) + f * (1 + e.a) - 2 * f * r - t.a * e.a) / a,
        b: (2 * o <= e.a ? 2 * o * p + o * (1 - t.a) + p * (1 - e.a) : o * (1 + t.a) + p * (1 + e.a) - 2 * p * o - t.a * e.a) / a,
        a
    };
}
function T(e, t, i = 1) {
    e.a *= i;
    const a = t.a + e.a - t.a * e.a, n = e.r * e.a, r = e.g * e.a, o = e.b * e.a, s = t.r * t.a, f = t.g * t.a, p = t.b * t.a;
    return {
        r: (n + s - 2 * Math.min(n * t.a, s * e.a)) / a,
        g: (r + f - 2 * Math.min(r * t.a, f * e.a)) / a,
        b: (o + p - 2 * Math.min(o * t.a, p * e.a)) / a,
        a
    };
}
function k(e, t, i = 1) {
    e.a *= i;
    const a = t.a + e.a - t.a * e.a, n = e.r * e.a, r = e.g * e.a, o = e.b * e.a, s = t.r * t.a, f = t.g * t.a, p = t.b * t.a;
    return {
        r: (n * t.a + s * e.a - 2 * n * s + n * (1 - t.a) + s * (1 - e.a)) / a,
        g: (r * t.a + f * e.a - 2 * r * f + r * (1 - t.a) + f * (1 - e.a)) / a,
        b: (o * t.a + p * e.a - 2 * o * p + o * (1 - t.a) + p * (1 - e.a)) / a,
        a
    };
}
!function(e) {
    e[e.LEFT = 1] = "LEFT", e[e.CENTER = 2] = "CENTER", e[e.RIGHT = 4] = "RIGHT";
}(c || (c = {})), function(e) {
    e[e.TOP = 8] = "TOP", e[e.MIDDLE = 16] = "MIDDLE", e[e.BOTTOM = 32] = "BOTTOM";
}(u || (u = {})), function(e) {
    e.SRC_OVER = "srcOver", e.DST_OVER = "dstOver", e.MULTIPLY = "multiply", e.ADD = "add", e.SCREEN = "screen", e.OVERLAY = "overlay", e.DARKEN = "darken", e.LIGHTEN = "lighten", e.HARD_LIGHT = "hardLight", e.DIFFERENCE = "difference", e.EXCLUSION = "exclusion";
}(d || (d = {}));
const B = [
    g,
    x,
    b,
    w,
    v,
    S,
    y,
    I,
    E,
    T,
    k
];
function P(e, t, i = 0, r = 0, s = {}) {
    if (!(t instanceof e.constructor)) throw new Error("The source must be a Jimp image");
    if ("number" != typeof i || "number" != typeof r) throw new Error("x and y must be numbers");
    const { mode: f = d.SRC_OVER } = s;
    let { opacitySource: p = 1, opacityDest: m = 1 } = s;
    ("number" != typeof p || p < 0 || p > 1) && (p = 1), ("number" != typeof m || m < 0 || m > 1) && (m = 1);
    const l = a[f];
    return i = Math.round(i), r = Math.round(r), 1 !== m && e.scan((t, i, a)=>{
        const n = e.bitmap.data[a + 3] * m;
        e.bitmap.data[a + 3] = n;
    }), t.scan((a, s, f)=>{
        const m = e.getPixelIndex(i + a, r + s, n.CROP);
        if (-1 === m) return;
        const c = l({
            r: t.bitmap.data[f + 0] / 255,
            g: t.bitmap.data[f + 1] / 255,
            b: t.bitmap.data[f + 2] / 255,
            a: t.bitmap.data[f + 3] / 255
        }, {
            r: e.bitmap.data[m + 0] / 255,
            g: e.bitmap.data[m + 1] / 255,
            b: e.bitmap.data[m + 2] / 255,
            a: e.bitmap.data[m + 3] / 255
        }, p);
        e.bitmap.data[m + 0] = (0, o.QH)(255 * c.r), e.bitmap.data[m + 1] = (0, o.QH)(255 * c.g), e.bitmap.data[m + 2] = (0, o.QH)(255 * c.b), e.bitmap.data[m + 3] = (0, o.QH)(255 * c.a);
    }), e;
}
var D = require("./module-5983.js");
function F(e) {
    const t = e._exif;
    return t && t.tags && t.tags.Orientation || 1;
}
function O(e) {
    if (F(e) < 2) return;
    const t = function(e) {
        const t = e.bitmap.width, i = e.bitmap.height;
        switch(F(e)){
            case 1:
            default:
                return null;
            case 2:
                return function(e, i) {
                    return [
                        t - e - 1,
                        i
                    ];
                };
            case 3:
                return function(e, a) {
                    return [
                        t - e - 1,
                        i - a - 1
                    ];
                };
            case 4:
                return function(e, t) {
                    return [
                        e,
                        i - t - 1
                    ];
                };
            case 5:
                return function(e, t) {
                    return [
                        t,
                        e
                    ];
                };
            case 6:
                return function(e, t) {
                    return [
                        t,
                        i - e - 1
                    ];
                };
            case 7:
                return function(e, a) {
                    return [
                        t - a - 1,
                        i - e - 1
                    ];
                };
            case 8:
                return function(e, i) {
                    return [
                        t - i - 1,
                        e
                    ];
                };
        }
    }(e), i = F(e) > 4, a = i ? e.bitmap.height : e.bitmap.width, n = i ? e.bitmap.width : e.bitmap.height;
    t && function(e, t, i, a) {
        const n = e.bitmap.data, r = e.bitmap.width, o = Buffer.alloc(n.length);
        for(let e = 0; e < t; e++)for(let s = 0; s < i; s++){
            const [i, f] = a(e, s), p = t * s + e << 2, m = r * f + i << 2, l = n.readUInt32BE(m);
            o.writeUInt32BE(l, p);
        }
        e.bitmap.data = o, e.bitmap.width = t, e.bitmap.height = i, e._exif.tags.Orientation = 1;
    }(e, a, n, t);
}
const L = {
    data: Buffer.alloc(0),
    width: 0,
    height: 0
};
function C(e) {
    const t = Buffer.alloc(e.byteLength), i = new Uint8Array(e);
    for(let e = 0; e < t.length; ++e)t[e] = i[e];
    return t;
}
function M({ plugins: e, formats: t } = {}) {
    const i = e || [], a = (t || []).map((e)=>e()), r = class {
        bitmap = L;
        background = 0;
        formats = [];
        mime;
        constructor(e = L){
            if (this.formats = a, "data" in e) this.bitmap = e;
            else if (this.bitmap = {
                data: Buffer.alloc(e.width * e.height * 4),
                width: e.width,
                height: e.height
            }, e.color) {
                this.background = "string" == typeof e.color ? (0, o.by)(e.color) : e.color;
                for(let e = 0; e < this.bitmap.data.length; e += 4)this.bitmap.data.writeUInt32BE(this.background, e);
            }
            for (const e of i)for(const t in e)this[t] = (...i)=>{
                const a = e[t]?.(this, ...i);
                return "object" == typeof a && "bitmap" in a ? (this.bitmap = a.bitmap, this) : a;
            };
        }
        static async read(e, t) {
            if (Buffer.isBuffer(e) || e instanceof ArrayBuffer) return this.fromBuffer(e);
            if ((0, p.existsSync)(e)) return this.fromBuffer(await m(e));
            const [i, a] = await f(fetch(e));
            if (i) throw new Error(`Could not load Buffer from URL: ${e}`);
            if (!a.ok) throw new Error(`HTTP Status ${a.status} for url ${e}`);
            const [n, r] = await f(a.arrayBuffer());
            if (n) throw new Error(`Could not load Buffer from ${e}`);
            const o = C(r);
            return this.fromBuffer(o, t);
        }
        static fromBitmap(e) {
            let t;
            if (e.data instanceof Buffer && (t = Buffer.from(e.data)), (e.data instanceof Uint8Array || e.data instanceof Uint8ClampedArray) && (t = Buffer.from(e.data.buffer)), Array.isArray(e.data) && (t = Buffer.concat(e.data.map((e)=>Buffer.from(e.toString(16).padStart(8, "0"), "hex")))), !t) throw new Error("data must be a Buffer");
            if ("number" != typeof e.height || "number" != typeof e.width) throw new Error("bitmap must have width and height");
            return new r({
                height: e.height,
                width: e.width,
                data: t
            });
        }
        static async fromBuffer(e, t) {
            const i = e instanceof ArrayBuffer ? C(e) : e, n = await s.fromBuffer(i);
            if (!n || !n.mime) throw new Error("Could not find MIME for Buffer");
            const o = a.find((e)=>e.mime === n.mime);
            if (!o || !o.decode) throw new Error(`Mime type ${n.mime} does not support decoding`);
            const f = new r(await o.decode(i, t?.[o.mime]));
            return f.mime = n.mime, async function(e, t) {
                try {
                    e._exif = D.create(t).parse(), O(e);
                } catch  {}
            }(f, i), f;
        }
        inspect() {
            return "<Jimp " + (this.bitmap === L ? "pending..." : this.bitmap.width + "x" + this.bitmap.height) + ">";
        }
        toString() {
            return "[object Jimp]";
        }
        get width() {
            return this.bitmap.width;
        }
        get height() {
            return this.bitmap.height;
        }
        async getBuffer(e, t) {
            const i = this.formats.find((t)=>t.mime === e);
            if (!i || !i.encode) throw new Error(`Unsupported MIME type: ${e}`);
            let a;
            return i.hasAlpha ? a = this : (a = new r({
                width: this.bitmap.width,
                height: this.bitmap.height,
                color: this.background
            }), P(a, this)), i.encode(a.bitmap, t);
        }
        async getBase64(e, t) {
            return "data:" + e + ";base64," + (await this.getBuffer(e, t)).toString("base64");
        }
        async write(e, t) {
            const i = h.getType(e);
            await l(e, await this.getBuffer(i, t));
        }
        clone() {
            return new r({
                ...this.bitmap,
                data: Buffer.from(this.bitmap.data)
            });
        }
        getPixelIndex(e, t, i) {
            let a, r;
            if (i || (i = n.EXTEND), "number" != typeof e || "number" != typeof t) throw new Error("x and y must be numbers");
            a = e = Math.round(e), r = t = Math.round(t), i === n.EXTEND && (e < 0 && (a = 0), e >= this.bitmap.width && (a = this.bitmap.width - 1), t < 0 && (r = 0), t >= this.bitmap.height && (r = this.bitmap.height - 1)), i === n.WRAP && (e < 0 && (a = this.bitmap.width + e), e >= this.bitmap.width && (a = e % this.bitmap.width), t < 0 && (r = this.bitmap.height + t), t >= this.bitmap.height && (r = t % this.bitmap.height));
            let o = this.bitmap.width * r + a << 2;
            return (a < 0 || a >= this.bitmap.width) && (o = -1), (r < 0 || r >= this.bitmap.height) && (o = -1), o;
        }
        getPixelColor(e, t) {
            if ("number" != typeof e || "number" != typeof t) throw new Error("x and y must be numbers");
            const i = this.getPixelIndex(e, t);
            return this.bitmap.data.readUInt32BE(i);
        }
        setPixelColor(e, t, i) {
            if ("number" != typeof e || "number" != typeof t || "number" != typeof i) throw new Error("hex, x and y must be numbers");
            const a = this.getPixelIndex(t, i);
            return this.bitmap.data.writeUInt32BE(e, a), this;
        }
        hasAlpha() {
            const { width: e, height: t, data: i } = this.bitmap, a = e * t << 2;
            for(let e = 3; e < a; e += 4)if (255 !== i[e]) return !0;
            return !1;
        }
        composite(e, t = 0, i = 0, a = {}) {
            return P(this, e, t, i, a);
        }
        scan(e, t, i, a, n) {
            return (0, o.SQ)(this, e, t, i, a, n);
        }
        scanIterator(e = 0, t = 0, i = this.bitmap.width, a = this.bitmap.height) {
            if ("number" != typeof e || "number" != typeof t) throw new Error("x and y must be numbers");
            if ("number" != typeof i || "number" != typeof a) throw new Error("w and h must be numbers");
            return (0, o.QQ)(this, e, t, i, a);
        }
    };
    return r;
}

require.r(exports), require.d(exports, {
    applyPalette: ()=>$t,
    applyPaletteSync: ()=>Kt,
    buildPalette: ()=>jt,
    buildPaletteSync: ()=>Qt,
    constants: ()=>a,
    conversion: ()=>m,
    distance: ()=>F,
    image: ()=>Et,
    palette: ()=>tt,
    quality: ()=>Tt,
    utils: ()=>at
});
var r = Object.defineProperty, s = (t, e)=>{
    for(var i in e)r(t, i, {
        get: e[i],
        enumerable: !0
    });
}, n = (t, e, i)=>(((t, e, i)=>{
        e in t ? r(t, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: i
        }) : t[e] = i;
    })(t, "symbol" != typeof e ? e + "" : e, i), i), a = {};
s(a, {
    bt709: ()=>o
});
var o = {};
s(o, {
    Y: ()=>h,
    x: ()=>l,
    y: ()=>u
});
var h = ((t)=>(t[t.RED = .2126] = "RED", t[t.GREEN = .7152] = "GREEN", t[t.BLUE = .0722] = "BLUE", t[t.WHITE = 1] = "WHITE", t))(h || {}), l = ((t)=>(t[t.RED = .64] = "RED", t[t.GREEN = .3] = "GREEN", t[t.BLUE = .15] = "BLUE", t[t.WHITE = .3127] = "WHITE", t))(l || {}), u = ((t)=>(t[t.RED = .33] = "RED", t[t.GREEN = .6] = "GREEN", t[t.BLUE = .06] = "BLUE", t[t.WHITE = .329] = "WHITE", t))(u || {}), m = {};
function c(t) {
    return t > .04045 ? ((t + .055) / 1.055) ** 2.4 : t / 12.92;
}
function _(t, e, i) {
    return {
        x: .4124 * (t = c(t / 255)) + .3576 * (e = c(e / 255)) + .1805 * (i = c(i / 255)),
        y: .2126 * t + .7152 * e + .0722 * i,
        z: .0193 * t + .1192 * e + .9505 * i
    };
}
s(m, {
    lab2rgb: ()=>q,
    lab2xyz: ()=>R,
    rgb2hsl: ()=>y,
    rgb2lab: ()=>v,
    rgb2xyz: ()=>_,
    xyz2lab: ()=>A,
    xyz2rgb: ()=>D
});
var d = {};
function f(t) {
    return t * (Math.PI / 180);
}
function p(t, e, i) {
    let r = t;
    return r < e && (r = e), r < i && (r = i), r;
}
function g(t, e, i) {
    let r = t;
    return r > e && (r = e), r > i && (r = i), r;
}
function b(t, e, i) {
    return t > i && (t = i), t < e && (t = e), 0 | t;
}
function M(t) {
    return (t = Math.round(t)) > 255 ? t = 255 : t < 0 && (t = 0), t;
}
function w(t) {
    return t > 255 ? t = 255 : t < 0 && (t = 0), t;
}
function x(t, e) {
    const i = typeof t[0];
    let r;
    if ("number" === i || "string" === i) {
        const i = Object.create(null);
        for(let e = 0, r = t.length; e < r; e++){
            const r = t[e];
            i[r] || 0 === i[r] || (i[r] = e);
        }
        r = t.sort((t, r)=>e(t, r) || i[t] - i[r]);
    } else {
        const i = t.slice(0);
        r = t.sort((t, r)=>e(t, r) || i.indexOf(t) - i.indexOf(r));
    }
    return r;
}
function y(t, e, i) {
    const r = g(t, e, i), s = p(t, e, i), n = s - r, a = (r + s) / 510;
    let o = 0;
    a > 0 && a < 1 && (o = n / (a < .5 ? s + r : 510 - s - r));
    let h = 0;
    return n > 0 && (h = s === t ? (e - i) / n : s === e ? 2 + (i - t) / n : 4 + (t - e) / n, h *= 60, h < 0 && (h += 360)), {
        h,
        s: o,
        l: a
    };
}
s(d, {
    degrees2radians: ()=>f,
    inRange0to255: ()=>w,
    inRange0to255Rounded: ()=>M,
    intInRange: ()=>b,
    max3: ()=>p,
    min3: ()=>g,
    stableSort: ()=>x
});
var S = .95047, k = 1, B = 1.08883;
function z(t) {
    return t > .008856 ? t ** (1 / 3) : 7.787 * t + 16 / 116;
}
function A(t, e, i) {
    if (t = z(t / S), e = z(e / k), i = z(i / B), 116 * e - 16 < 0) throw new Error("xxx");
    return {
        L: Math.max(0, 116 * e - 16),
        a: 500 * (t - e),
        b: 200 * (e - i)
    };
}
function v(t, e, i) {
    const r = _(t, e, i);
    return A(r.x, r.y, r.z);
}
var E = .95047, I = 1, G = 1.08883;
function P(t) {
    return t > .206893034 ? t ** 3 : (t - 16 / 116) / 7.787;
}
function R(t, e, i) {
    const r = (t + 16) / 116, s = r - i / 200;
    return {
        x: E * P(e / 500 + r),
        y: I * P(r),
        z: G * P(s)
    };
}
function C(t) {
    return t > .0031308 ? 1.055 * t ** (1 / 2.4) - .055 : 12.92 * t;
}
function D(t, e, i) {
    const r = C(3.2406 * t + -1.5372 * e + -.4986 * i), s = C(-.9689 * t + 1.8758 * e + .0415 * i), n = C(.0557 * t + -.204 * e + 1.057 * i);
    return {
        r: M(255 * r),
        g: M(255 * s),
        b: M(255 * n)
    };
}
function q(t, e, i) {
    const r = R(t, e, i);
    return D(r.x, r.y, r.z);
}
var F = {};
s(F, {
    AbstractDistanceCalculator: ()=>T,
    AbstractEuclidean: ()=>Q,
    AbstractManhattan: ()=>J,
    CIE94GraphicArts: ()=>L,
    CIE94Textiles: ()=>N,
    CIEDE2000: ()=>W,
    CMetric: ()=>H,
    Euclidean: ()=>j,
    EuclideanBT709: ()=>K,
    EuclideanBT709NoAlpha: ()=>$,
    Manhattan: ()=>V,
    ManhattanBT709: ()=>Y,
    ManhattanNommyde: ()=>X,
    PNGQuant: ()=>Z
});
var T = class {
    constructor(){
        n(this, "_maxDistance"), n(this, "_whitePoint"), this._setDefaults(), this.setWhitePoint(255, 255, 255, 255);
    }
    setWhitePoint(t, e, i, r) {
        this._whitePoint = {
            r: t > 0 ? 255 / t : 0,
            g: e > 0 ? 255 / e : 0,
            b: i > 0 ? 255 / i : 0,
            a: r > 0 ? 255 / r : 0
        }, this._maxDistance = this.calculateRaw(t, e, i, r, 0, 0, 0, 0);
    }
    calculateNormalized(t, e) {
        return this.calculateRaw(t.r, t.g, t.b, t.a, e.r, e.g, e.b, e.a) / this._maxDistance;
    }
}, U = class extends T {
    calculateRaw(t, e, i, r, s, n, a, o) {
        const h = v(w(t * this._whitePoint.r), w(e * this._whitePoint.g), w(i * this._whitePoint.b)), l = v(w(s * this._whitePoint.r), w(n * this._whitePoint.g), w(a * this._whitePoint.b)), u = h.L - l.L, m = h.a - l.a, c = h.b - l.b, _ = Math.sqrt(h.a * h.a + h.b * h.b), d = _ - Math.sqrt(l.a * l.a + l.b * l.b);
        let f = m * m + c * c - d * d;
        f = f < 0 ? 0 : Math.sqrt(f);
        const p = (o - r) * this._whitePoint.a * this._kA;
        return Math.sqrt((u / this._Kl) ** 2 + (d / (1 + this._K1 * _)) ** 2 + (f / (1 + this._K2 * _)) ** 2 + p ** 2);
    }
}, N = class extends U {
    _setDefaults() {
        this._Kl = 2, this._K1 = .048, this._K2 = .014, this._kA = 12.5 / 255;
    }
}, L = class extends U {
    _setDefaults() {
        this._Kl = 1, this._K1 = .045, this._K2 = .015, this._kA = 25 / 255;
    }
}, O = class extends T {
    _setDefaults() {}
    static _calculatehp(t, e) {
        const i = Math.atan2(t, e);
        return i >= 0 ? i : i + O._deg360InRad;
    }
    static _calculateRT(t, e) {
        const i = e ** 7, r = 2 * Math.sqrt(i / (i + O._pow25to7)), s = O._deg30InRad * Math.exp(-(((t - O._deg275InRad) / O._deg25InRad) ** 2));
        return -Math.sin(2 * s) * r;
    }
    static _calculateT(t) {
        return 1 - .17 * Math.cos(t - O._deg30InRad) + .24 * Math.cos(2 * t) + .32 * Math.cos(3 * t + O._deg6InRad) - .2 * Math.cos(4 * t - O._deg63InRad);
    }
    static _calculate_ahp(t, e, i, r) {
        const s = i + r;
        return 0 === t ? s : e <= O._deg180InRad ? s / 2 : s < O._deg360InRad ? (s + O._deg360InRad) / 2 : (s - O._deg360InRad) / 2;
    }
    static _calculate_dHp(t, e, i, r) {
        let s;
        return s = 0 === t ? 0 : e <= O._deg180InRad ? i - r : i <= r ? i - r + O._deg360InRad : i - r - O._deg360InRad, 2 * Math.sqrt(t) * Math.sin(s / 2);
    }
    calculateRaw(t, e, i, r, s, n, a, o) {
        const h = v(w(t * this._whitePoint.r), w(e * this._whitePoint.g), w(i * this._whitePoint.b)), l = v(w(s * this._whitePoint.r), w(n * this._whitePoint.g), w(a * this._whitePoint.b)), u = (o - r) * this._whitePoint.a * O._kA, m = this.calculateRawInLab(h, l);
        return Math.sqrt(m + u * u);
    }
    calculateRawInLab(t, e) {
        const i = t.L, r = t.a, s = t.b, n = e.L, a = e.a, o = e.b, h = ((Math.sqrt(r * r + s * s) + Math.sqrt(a * a + o * o)) / 2) ** 7, l = .5 * (1 - Math.sqrt(h / (h + O._pow25to7))), u = (1 + l) * r, m = (1 + l) * a, c = Math.sqrt(u * u + s * s), _ = Math.sqrt(m * m + o * o), d = c * _, f = O._calculatehp(s, u), p = O._calculatehp(o, m), g = Math.abs(f - p), b = n - i, M = _ - c, w = O._calculate_dHp(d, g, p, f), x = O._calculate_ahp(d, g, f, p), y = (c + _) / 2, S = ((i + n) / 2 - 50) ** 2, k = M / (1 + .045 * y), B = w / (1 + .015 * O._calculateT(x) * y);
        return (b / (1 + .015 * S / Math.sqrt(20 + S))) ** 2 + k ** 2 + B ** 2 + O._calculateRT(x, y) * k * B;
    }
}, W = O;
n(W, "_kA", 25 / 255), n(W, "_pow25to7", 25 ** 7), n(W, "_deg360InRad", f(360)), n(W, "_deg180InRad", f(180)), n(W, "_deg30InRad", f(30)), n(W, "_deg6InRad", f(6)), n(W, "_deg63InRad", f(63)), n(W, "_deg275InRad", f(275)), n(W, "_deg25InRad", f(25));
var H = class extends T {
    calculateRaw(t, e, i, r, s, n, a, o) {
        const h = (t + s) / 2 * this._whitePoint.r, l = (t - s) * this._whitePoint.r, u = (e - n) * this._whitePoint.g, m = (i - a) * this._whitePoint.b, c = ((512 + h) * l * l >> 8) + 4 * u * u + ((767 - h) * m * m >> 8), _ = (o - r) * this._whitePoint.a;
        return Math.sqrt(c + _ * _);
    }
    _setDefaults() {}
}, Q = class extends T {
    calculateRaw(t, e, i, r, s, n, a, o) {
        const h = s - t, l = n - e, u = a - i, m = o - r;
        return Math.sqrt(this._kR * h * h + this._kG * l * l + this._kB * u * u + this._kA * m * m);
    }
}, j = class extends Q {
    _setDefaults() {
        this._kR = 1, this._kG = 1, this._kB = 1, this._kA = 1;
    }
}, K = class extends Q {
    _setDefaults() {
        this._kR = .2126, this._kG = .7152, this._kB = .0722, this._kA = 1;
    }
}, $ = class extends Q {
    _setDefaults() {
        this._kR = .2126, this._kG = .7152, this._kB = .0722, this._kA = 0;
    }
}, J = class extends T {
    calculateRaw(t, e, i, r, s, n, a, o) {
        let h = s - t, l = n - e, u = a - i, m = o - r;
        return h < 0 && (h = 0 - h), l < 0 && (l = 0 - l), u < 0 && (u = 0 - u), m < 0 && (m = 0 - m), this._kR * h + this._kG * l + this._kB * u + this._kA * m;
    }
}, V = class extends J {
    _setDefaults() {
        this._kR = 1, this._kG = 1, this._kB = 1, this._kA = 1;
    }
}, X = class extends J {
    _setDefaults() {
        this._kR = .4984, this._kG = .8625, this._kB = .2979, this._kA = 1;
    }
}, Y = class extends J {
    _setDefaults() {
        this._kR = .2126, this._kG = .7152, this._kB = .0722, this._kA = 1;
    }
}, Z = class extends T {
    calculateRaw(t, e, i, r, s, n, a, o) {
        const h = (o - r) * this._whitePoint.a;
        return this._colordifferenceCh(t * this._whitePoint.r, s * this._whitePoint.r, h) + this._colordifferenceCh(e * this._whitePoint.g, n * this._whitePoint.g, h) + this._colordifferenceCh(i * this._whitePoint.b, a * this._whitePoint.b, h);
    }
    _colordifferenceCh(t, e, i) {
        const r = t - e, s = r + i;
        return r * r + s * s;
    }
    _setDefaults() {}
}, tt = {};
s(tt, {
    AbstractPaletteQuantizer: ()=>et,
    ColorHistogram: ()=>bt,
    NeuQuant: ()=>_t,
    NeuQuantFloat: ()=>pt,
    RGBQuant: ()=>wt,
    WuColorCube: ()=>zt,
    WuQuant: ()=>vt
});
var et = class {
    quantizeSync() {
        for (const t of this.quantize())if (t.palette) return t.palette;
        throw new Error("unreachable");
    }
}, it = class {
    constructor(){
        n(this, "r"), n(this, "g"), n(this, "b"), n(this, "a"), n(this, "uint32"), n(this, "rgba"), this.uint32 = -1 >>> 0, this.r = this.g = this.b = this.a = 0, this.rgba = new Array(4), this.rgba[0] = 0, this.rgba[1] = 0, this.rgba[2] = 0, this.rgba[3] = 0;
    }
    static createByQuadruplet(t) {
        const e = new it;
        return e.r = 0 | t[0], e.g = 0 | t[1], e.b = 0 | t[2], e.a = 0 | t[3], e._loadUINT32(), e._loadQuadruplet(), e;
    }
    static createByRGBA(t, e, i, r) {
        const s = new it;
        return s.r = 0 | t, s.g = 0 | e, s.b = 0 | i, s.a = 0 | r, s._loadUINT32(), s._loadQuadruplet(), s;
    }
    static createByUint32(t) {
        const e = new it;
        return e.uint32 = t >>> 0, e._loadRGBA(), e._loadQuadruplet(), e;
    }
    from(t) {
        this.r = t.r, this.g = t.g, this.b = t.b, this.a = t.a, this.uint32 = t.uint32, this.rgba[0] = t.r, this.rgba[1] = t.g, this.rgba[2] = t.b, this.rgba[3] = t.a;
    }
    getLuminosity(t) {
        let e = this.r, i = this.g, r = this.b;
        return t && (e = Math.min(255, 255 - this.a + this.a * e / 255), i = Math.min(255, 255 - this.a + this.a * i / 255), r = Math.min(255, 255 - this.a + this.a * r / 255)), .2126 * e + .7152 * i + .0722 * r;
    }
    _loadUINT32() {
        this.uint32 = (this.a << 24 | this.b << 16 | this.g << 8 | this.r) >>> 0;
    }
    _loadRGBA() {
        this.r = 255 & this.uint32, this.g = this.uint32 >>> 8 & 255, this.b = this.uint32 >>> 16 & 255, this.a = this.uint32 >>> 24 & 255;
    }
    _loadQuadruplet() {
        this.rgba[0] = this.r, this.rgba[1] = this.g, this.rgba[2] = this.b, this.rgba[3] = this.a;
    }
}, rt = class {
    constructor(){
        n(this, "_pointArray"), n(this, "_width"), n(this, "_height"), this._width = 0, this._height = 0, this._pointArray = [];
    }
    getWidth() {
        return this._width;
    }
    getHeight() {
        return this._height;
    }
    setWidth(t) {
        this._width = t;
    }
    setHeight(t) {
        this._height = t;
    }
    getPointArray() {
        return this._pointArray;
    }
    clone() {
        const t = new rt;
        t._width = this._width, t._height = this._height;
        for(let e = 0, i = this._pointArray.length; e < i; e++)t._pointArray[e] = it.createByUint32(0 | this._pointArray[e].uint32);
        return t;
    }
    toUint32Array() {
        const t = this._pointArray.length, e = new Uint32Array(t);
        for(let i = 0; i < t; i++)e[i] = this._pointArray[i].uint32;
        return e;
    }
    toUint8Array() {
        return new Uint8Array(this.toUint32Array().buffer);
    }
    static fromHTMLImageElement(t) {
        const e = t.naturalWidth, i = t.naturalHeight, r = document.createElement("canvas");
        r.width = e, r.height = i;
        return r.getContext("2d").drawImage(t, 0, 0, e, i, 0, 0, e, i), rt.fromHTMLCanvasElement(r);
    }
    static fromHTMLCanvasElement(t) {
        const e = t.width, i = t.height, r = t.getContext("2d").getImageData(0, 0, e, i);
        return rt.fromImageData(r);
    }
    static fromImageData(t) {
        const e = t.width, i = t.height;
        return rt.fromUint8Array(t.data, e, i);
    }
    static fromUint8Array(t, e, i) {
        switch(Object.prototype.toString.call(t)){
            case "[object Uint8ClampedArray]":
            case "[object Uint8Array]":
                break;
            default:
                t = new Uint8Array(t);
        }
        const r = new Uint32Array(t.buffer);
        return rt.fromUint32Array(r, e, i);
    }
    static fromUint32Array(t, e, i) {
        const r = new rt;
        r._width = e, r._height = i;
        for(let e = 0, i = t.length; e < i; e++)r._pointArray[e] = it.createByUint32(0 | t[e]);
        return r;
    }
    static fromBuffer(t, e, i) {
        const r = new Uint32Array(t.buffer, t.byteOffset, t.byteLength / Uint32Array.BYTES_PER_ELEMENT);
        return rt.fromUint32Array(r, e, i);
    }
};
function st(t, e) {
    const i = 360 / e;
    for(let r = 1, s = i - i / 2; r < e; r++, s += i)if (t >= s && t < s + i) return r;
    return 0;
}
var nt = class {
    constructor(){
        n(this, "_pointContainer"), n(this, "_pointArray", []), n(this, "_i32idx", {}), this._pointContainer = new rt, this._pointContainer.setHeight(1), this._pointArray = this._pointContainer.getPointArray();
    }
    add(t) {
        this._pointArray.push(t), this._pointContainer.setWidth(this._pointArray.length);
    }
    has(t) {
        for(let e = this._pointArray.length - 1; e >= 0; e--)if (t.uint32 === this._pointArray[e].uint32) return !0;
        return !1;
    }
    getNearestColor(t, e) {
        return this._pointArray[0 | this._getNearestIndex(t, e)];
    }
    getPointContainer() {
        return this._pointContainer;
    }
    _nearestPointFromCache(t) {
        return "number" == typeof this._i32idx[t] ? this._i32idx[t] : -1;
    }
    _getNearestIndex(t, e) {
        let i = this._nearestPointFromCache("" + e.uint32);
        if (i >= 0) return i;
        let r = Number.MAX_VALUE;
        i = 0;
        for(let s = 0, n = this._pointArray.length; s < n; s++){
            const n = this._pointArray[s], a = t.calculateRaw(e.r, e.g, e.b, e.a, n.r, n.g, n.b, n.a);
            a < r && (r = a, i = s);
        }
        return this._i32idx[e.uint32] = i, i;
    }
    sort() {
        this._i32idx = {}, this._pointArray.sort((t, e)=>{
            const i = y(t.r, t.g, t.b), r = y(e.r, e.g, e.b), s = t.r === t.g && t.g === t.b ? 0 : 1 + st(i.h, 10), n = (e.r === e.g && e.g === e.b ? 0 : 1 + st(r.h, 10)) - s;
            if (n) return -n;
            const a = t.getLuminosity(!0), o = e.getLuminosity(!0);
            if (o - a !== 0) return o - a;
            const h = (100 * r.s | 0) - (100 * i.s | 0);
            return h ? -h : 0;
        });
    }
}, at = {};
s(at, {
    HueStatistics: ()=>ht,
    Palette: ()=>nt,
    Point: ()=>it,
    PointContainer: ()=>rt,
    ProgressTracker: ()=>ut,
    arithmetic: ()=>d
});
var ot = class {
    constructor(){
        n(this, "num", 0), n(this, "cols", []);
    }
}, ht = class {
    constructor(t, e){
        n(this, "_numGroups"), n(this, "_minCols"), n(this, "_stats"), n(this, "_groupsFull"), this._numGroups = t, this._minCols = e, this._stats = [];
        for(let e = 0; e <= t; e++)this._stats[e] = new ot;
        this._groupsFull = 0;
    }
    check(t) {
        this._groupsFull === this._numGroups + 1 && (this.check = ()=>{});
        const e = 255 & t, i = t >>> 8 & 255, r = t >>> 16 & 255, s = e === i && i === r ? 0 : 1 + st(y(e, i, r).h, this._numGroups), n = this._stats[s], a = this._minCols;
        n.num++, n.num > a || (n.num === a && this._groupsFull++, n.num <= a && this._stats[s].cols.push(t));
    }
    injectIntoDictionary(t) {
        for(let e = 0; e <= this._numGroups; e++)this._stats[e].num <= this._minCols && this._stats[e].cols.forEach((e)=>{
            t[e] ? t[e]++ : t[e] = 1;
        });
    }
    injectIntoArray(t) {
        for(let e = 0; e <= this._numGroups; e++)this._stats[e].num <= this._minCols && this._stats[e].cols.forEach((e)=>{
            -1 === t.indexOf(e) && t.push(e);
        });
    }
}, lt = class {
    constructor(t, e){
        n(this, "progress"), n(this, "_step"), n(this, "_range"), n(this, "_last"), n(this, "_progressRange"), this._range = t, this._progressRange = e, this._step = Math.max(1, this._range / (lt.steps + 1) | 0), this._last = -this._step, this.progress = 0;
    }
    shouldNotify(t) {
        return t - this._last >= this._step && (this._last = t, this.progress = Math.min(this._progressRange * this._last / this._range, this._progressRange), !0);
    }
}, ut = lt;
n(ut, "steps", 100);
var mt = class {
    constructor(t){
        n(this, "r"), n(this, "g"), n(this, "b"), n(this, "a"), this.r = this.g = this.b = this.a = t;
    }
    toPoint() {
        return it.createByRGBA(this.r >> 3, this.g >> 3, this.b >> 3, this.a >> 3);
    }
    subtract(t, e, i, r) {
        this.r -= 0 | t, this.g -= 0 | e, this.b -= 0 | i, this.a -= 0 | r;
    }
}, ct = class extends et {
    constructor(t, e = 256){
        super(), n(this, "_pointArray"), n(this, "_networkSize"), n(this, "_network"), n(this, "_sampleFactor"), n(this, "_radPower"), n(this, "_freq"), n(this, "_bias"), n(this, "_distance"), this._distance = t, this._pointArray = [], this._sampleFactor = 1, this._networkSize = e, this._distance.setWhitePoint(2040, 2040, 2040, 2040);
    }
    sample(t) {
        this._pointArray = this._pointArray.concat(t.getPointArray());
    }
    *quantize() {
        this._init(), yield* this._learn(), yield {
            palette: this._buildPalette(),
            progress: 100
        };
    }
    _init() {
        this._freq = [], this._bias = [], this._radPower = [], this._network = [];
        for(let t = 0; t < this._networkSize; t++)this._network[t] = new mt((t << 11) / this._networkSize | 0), this._freq[t] = ct._initialBias / this._networkSize | 0, this._bias[t] = 0;
    }
    *_learn() {
        let t = this._sampleFactor;
        const e = this._pointArray.length;
        e < ct._minpicturebytes && (t = 1);
        const i = 30 + (t - 1) / 3 | 0, r = e / t | 0;
        let s, n = r / ct._nCycles | 0, a = ct._initAlpha, o = (this._networkSize >> 3) * ct._radiusBias, h = o >> ct._radiusBiasShift;
        h <= 1 && (h = 0);
        for(let t = 0; t < h; t++)this._radPower[t] = a * ((h * h - t * t) * ct._radBias / (h * h)) >>> 0;
        s = e < ct._minpicturebytes ? 1 : e % ct._prime1 !== 0 ? ct._prime1 : e % ct._prime2 !== 0 ? ct._prime2 : e % ct._prime3 !== 0 ? ct._prime3 : ct._prime4;
        const l = new ut(r, 99);
        for(let t = 0, u = 0; t < r;){
            l.shouldNotify(t) && (yield {
                progress: l.progress
            });
            const r = this._pointArray[u], m = r.b << 3, c = r.g << 3, _ = r.r << 3, d = r.a << 3, f = this._contest(m, c, _, d);
            if (this._alterSingle(a, f, m, c, _, d), 0 !== h && this._alterNeighbour(h, f, m, c, _, d), u += s, u >= e && (u -= e), t++, 0 === n && (n = 1), t % n === 0) {
                a -= a / i | 0, o -= o / ct._radiusDecrease | 0, h = o >> ct._radiusBiasShift, h <= 1 && (h = 0);
                for(let t = 0; t < h; t++)this._radPower[t] = a * ((h * h - t * t) * ct._radBias / (h * h)) >>> 0;
            }
        }
    }
    _buildPalette() {
        const t = new nt;
        return this._network.forEach((e)=>{
            t.add(e.toPoint());
        }), t.sort(), t;
    }
    _alterNeighbour(t, e, i, r, s, n) {
        let a = e - t;
        a < -1 && (a = -1);
        let o = e + t;
        o > this._networkSize && (o = this._networkSize);
        let h = e + 1, l = e - 1, u = 1;
        for(; h < o || l > a;){
            const t = this._radPower[u++] / ct._alphaRadBias;
            if (h < o) {
                const e = this._network[h++];
                e.subtract(t * (e.r - s), t * (e.g - r), t * (e.b - i), t * (e.a - n));
            }
            if (l > a) {
                const e = this._network[l--];
                e.subtract(t * (e.r - s), t * (e.g - r), t * (e.b - i), t * (e.a - n));
            }
        }
    }
    _alterSingle(t, e, i, r, s, n) {
        t /= ct._initAlpha;
        const a = this._network[e];
        a.subtract(t * (a.r - s), t * (a.g - r), t * (a.b - i), t * (a.a - n));
    }
    _contest(t, e, i, r) {
        let s = ~(1 << 31), n = s, a = -1, o = a;
        for(let h = 0; h < this._networkSize; h++){
            const l = this._network[h], u = 8160 * this._distance.calculateNormalized(l, {
                r: i,
                g: e,
                b: t,
                a: r
            }) | 0;
            u < s && (s = u, a = h);
            const m = u - (this._bias[h] >> ct._initialBiasShift - 3);
            m < n && (n = m, o = h);
            const c = this._freq[h] >> ct._betaShift;
            this._freq[h] -= c, this._bias[h] += c << ct._gammaShift;
        }
        return this._freq[a] += ct._beta, this._bias[a] -= ct._betaGamma, o;
    }
}, _t = ct;
n(_t, "_prime1", 499), n(_t, "_prime2", 491), n(_t, "_prime3", 487), n(_t, "_prime4", 503), n(_t, "_minpicturebytes", ct._prime4), n(_t, "_nCycles", 100), n(_t, "_initialBiasShift", 16), n(_t, "_initialBias", 1 << ct._initialBiasShift), n(_t, "_gammaShift", 10), n(_t, "_betaShift", 10), n(_t, "_beta", ct._initialBias >> ct._betaShift), n(_t, "_betaGamma", ct._initialBias << ct._gammaShift - ct._betaShift), n(_t, "_radiusBiasShift", 6), n(_t, "_radiusBias", 1 << ct._radiusBiasShift), n(_t, "_radiusDecrease", 30), n(_t, "_alphaBiasShift", 10), n(_t, "_initAlpha", 1 << ct._alphaBiasShift), n(_t, "_radBiasShift", 8), n(_t, "_radBias", 1 << ct._radBiasShift), n(_t, "_alphaRadBiasShift", ct._alphaBiasShift + ct._radBiasShift), n(_t, "_alphaRadBias", 1 << ct._alphaRadBiasShift);
var dt = class {
    constructor(t){
        n(this, "r"), n(this, "g"), n(this, "b"), n(this, "a"), this.r = this.g = this.b = this.a = t;
    }
    toPoint() {
        return it.createByRGBA(this.r >> 3, this.g >> 3, this.b >> 3, this.a >> 3);
    }
    subtract(t, e, i, r) {
        this.r -= t, this.g -= e, this.b -= i, this.a -= r;
    }
}, ft = class extends et {
    constructor(t, e = 256){
        super(), n(this, "_pointArray"), n(this, "_networkSize"), n(this, "_network"), n(this, "_sampleFactor"), n(this, "_radPower"), n(this, "_freq"), n(this, "_bias"), n(this, "_distance"), this._distance = t, this._pointArray = [], this._sampleFactor = 1, this._networkSize = e, this._distance.setWhitePoint(2040, 2040, 2040, 2040);
    }
    sample(t) {
        this._pointArray = this._pointArray.concat(t.getPointArray());
    }
    *quantize() {
        this._init(), yield* this._learn(), yield {
            palette: this._buildPalette(),
            progress: 100
        };
    }
    _init() {
        this._freq = [], this._bias = [], this._radPower = [], this._network = [];
        for(let t = 0; t < this._networkSize; t++)this._network[t] = new dt((t << 11) / this._networkSize), this._freq[t] = ft._initialBias / this._networkSize, this._bias[t] = 0;
    }
    *_learn() {
        let t = this._sampleFactor;
        const e = this._pointArray.length;
        e < ft._minpicturebytes && (t = 1);
        const i = 30 + (t - 1) / 3, r = e / t;
        let s, n = r / ft._nCycles | 0, a = ft._initAlpha, o = (this._networkSize >> 3) * ft._radiusBias, h = o >> ft._radiusBiasShift;
        h <= 1 && (h = 0);
        for(let t = 0; t < h; t++)this._radPower[t] = a * ((h * h - t * t) * ft._radBias / (h * h));
        s = e < ft._minpicturebytes ? 1 : e % ft._prime1 !== 0 ? ft._prime1 : e % ft._prime2 !== 0 ? ft._prime2 : e % ft._prime3 !== 0 ? ft._prime3 : ft._prime4;
        const l = new ut(r, 99);
        for(let t = 0, u = 0; t < r;){
            l.shouldNotify(t) && (yield {
                progress: l.progress
            });
            const r = this._pointArray[u], m = r.b << 3, c = r.g << 3, _ = r.r << 3, d = r.a << 3, f = this._contest(m, c, _, d);
            if (this._alterSingle(a, f, m, c, _, d), 0 !== h && this._alterNeighbour(h, f, m, c, _, d), u += s, u >= e && (u -= e), t++, 0 === n && (n = 1), t % n === 0) {
                a -= a / i, o -= o / ft._radiusDecrease, h = o >> ft._radiusBiasShift, h <= 1 && (h = 0);
                for(let t = 0; t < h; t++)this._radPower[t] = a * ((h * h - t * t) * ft._radBias / (h * h));
            }
        }
    }
    _buildPalette() {
        const t = new nt;
        return this._network.forEach((e)=>{
            t.add(e.toPoint());
        }), t.sort(), t;
    }
    _alterNeighbour(t, e, i, r, s, n) {
        let a = e - t;
        a < -1 && (a = -1);
        let o = e + t;
        o > this._networkSize && (o = this._networkSize);
        let h = e + 1, l = e - 1, u = 1;
        for(; h < o || l > a;){
            const t = this._radPower[u++] / ft._alphaRadBias;
            if (h < o) {
                const e = this._network[h++];
                e.subtract(t * (e.r - s), t * (e.g - r), t * (e.b - i), t * (e.a - n));
            }
            if (l > a) {
                const e = this._network[l--];
                e.subtract(t * (e.r - s), t * (e.g - r), t * (e.b - i), t * (e.a - n));
            }
        }
    }
    _alterSingle(t, e, i, r, s, n) {
        t /= ft._initAlpha;
        const a = this._network[e];
        a.subtract(t * (a.r - s), t * (a.g - r), t * (a.b - i), t * (a.a - n));
    }
    _contest(t, e, i, r) {
        let s = ~(1 << 31), n = s, a = -1, o = a;
        for(let h = 0; h < this._networkSize; h++){
            const l = this._network[h], u = 8160 * this._distance.calculateNormalized(l, {
                r: i,
                g: e,
                b: t,
                a: r
            });
            u < s && (s = u, a = h);
            const m = u - (this._bias[h] >> ft._initialBiasShift - 3);
            m < n && (n = m, o = h);
            const c = this._freq[h] >> ft._betaShift;
            this._freq[h] -= c, this._bias[h] += c << ft._gammaShift;
        }
        return this._freq[a] += ft._beta, this._bias[a] -= ft._betaGamma, o;
    }
}, pt = ft;
n(pt, "_prime1", 499), n(pt, "_prime2", 491), n(pt, "_prime3", 487), n(pt, "_prime4", 503), n(pt, "_minpicturebytes", ft._prime4), n(pt, "_nCycles", 100), n(pt, "_initialBiasShift", 16), n(pt, "_initialBias", 1 << ft._initialBiasShift), n(pt, "_gammaShift", 10), n(pt, "_betaShift", 10), n(pt, "_beta", ft._initialBias >> ft._betaShift), n(pt, "_betaGamma", ft._initialBias << ft._gammaShift - ft._betaShift), n(pt, "_radiusBiasShift", 6), n(pt, "_radiusBias", 1 << ft._radiusBiasShift), n(pt, "_radiusDecrease", 30), n(pt, "_alphaBiasShift", 10), n(pt, "_initAlpha", 1 << ft._alphaBiasShift), n(pt, "_radBiasShift", 8), n(pt, "_radBias", 1 << ft._radBiasShift), n(pt, "_alphaRadBiasShift", ft._alphaBiasShift + ft._radBiasShift), n(pt, "_alphaRadBias", 1 << ft._alphaRadBiasShift);
var gt = class {
    constructor(t, e){
        n(this, "_method"), n(this, "_hueStats"), n(this, "_histogram"), n(this, "_initColors"), n(this, "_minHueCols"), this._method = t, this._minHueCols = e << 2, this._initColors = e << 2, this._hueStats = new ht(gt._hueGroups, this._minHueCols), this._histogram = Object.create(null);
    }
    sample(t) {
        switch(this._method){
            case 1:
                this._colorStats1D(t);
                break;
            case 2:
                this._colorStats2D(t);
        }
    }
    getImportanceSortedColorsIDXI32() {
        const t = x(Object.keys(this._histogram), (t, e)=>this._histogram[e] - this._histogram[t]);
        if (0 === t.length) return [];
        let e;
        switch(this._method){
            case 1:
                const i = Math.min(t.length, this._initColors), r = t[i - 1], s = this._histogram[r];
                e = t.slice(0, i);
                let n = i;
                const a = t.length;
                for(; n < a && this._histogram[t[n]] === s;)e.push(t[n++]);
                this._hueStats.injectIntoArray(e);
                break;
            case 2:
                e = t;
                break;
            default:
                throw new Error("Incorrect method");
        }
        return e.map((t)=>+t);
    }
    _colorStats1D(t) {
        const e = this._histogram, i = t.getPointArray(), r = i.length;
        for(let t = 0; t < r; t++){
            const r = i[t].uint32;
            this._hueStats.check(r), r in e ? e[r]++ : e[r] = 1;
        }
    }
    _colorStats2D(t) {
        const e = t.getWidth(), i = t.getHeight(), r = t.getPointArray(), s = gt._boxSize[0], n = gt._boxSize[1], a = s * n, o = this._makeBoxes(e, i, s, n), h = this._histogram;
        o.forEach((t)=>{
            let i = Math.round(t.w * t.h / a) * gt._boxPixels;
            i < 2 && (i = 2);
            const s = {};
            this._iterateBox(t, e, (t)=>{
                const e = r[t].uint32;
                this._hueStats.check(e), e in h ? h[e]++ : e in s ? ++s[e] >= i && (h[e] = s[e]) : s[e] = 1;
            });
        }), this._hueStats.injectIntoDictionary(h);
    }
    _iterateBox(t, e, i) {
        const r = t, s = r.y * e + r.x, n = (r.y + r.h - 1) * e + (r.x + r.w - 1), a = e - r.w + 1;
        let o = 0, h = s;
        do {
            i.call(this, h), h += ++o % r.w === 0 ? a : 1;
        }while (h <= n)
    }
    _makeBoxes(t, e, i, r) {
        const s = t % i, n = e % r, a = t - s, o = e - n, h = [];
        for(let l = 0; l < e; l += r)for(let e = 0; e < t; e += i)h.push({
            x: e,
            y: l,
            w: e === a ? s : i,
            h: l === o ? n : r
        });
        return h;
    }
}, bt = gt;
n(bt, "_boxSize", [
    64,
    64
]), n(bt, "_boxPixels", 2), n(bt, "_hueGroups", 10);
var Mt = class {
    constructor(t, e, i){
        n(this, "index"), n(this, "color"), n(this, "distance"), this.index = t, this.color = e, this.distance = i;
    }
}, wt = class extends et {
    constructor(t, e = 256, i = 2){
        super(), n(this, "_colors"), n(this, "_initialDistance"), n(this, "_distanceIncrement"), n(this, "_histogram"), n(this, "_distance"), this._distance = t, this._colors = e, this._histogram = new bt(i, e), this._initialDistance = .01, this._distanceIncrement = .005;
    }
    sample(t) {
        this._histogram.sample(t);
    }
    *quantize() {
        const t = this._histogram.getImportanceSortedColorsIDXI32();
        if (0 === t.length) throw new Error("No colors in image");
        yield* this._buildPalette(t);
    }
    *_buildPalette(t) {
        const e = new nt, i = e.getPointContainer().getPointArray(), r = new Array(t.length);
        for(let e = 0; e < t.length; e++)i.push(it.createByUint32(t[e])), r[e] = 1;
        const s = i.length, n = [];
        let a = s, o = this._initialDistance;
        const h = new ut(a - this._colors, 99);
        for(; a > this._colors;){
            n.length = 0;
            for(let t = 0; t < s; t++){
                if (h.shouldNotify(s - a) && (yield {
                    progress: h.progress
                }), 0 === r[t]) continue;
                const e = i[t];
                for(let h = t + 1; h < s; h++){
                    if (0 === r[h]) continue;
                    const t = i[h], s = this._distance.calculateNormalized(e, t);
                    s < o && (n.push(new Mt(h, t, s)), r[h] = 0, a--);
                }
            }
            o += a > 3 * this._colors ? this._initialDistance : this._distanceIncrement;
        }
        if (a < this._colors) {
            x(n, (t, e)=>e.distance - t.distance);
            let t = 0;
            for(; a < this._colors && t < n.length;){
                r[n[t].index] = 1, a++, t++;
            }
        }
        let l = i.length;
        for(let t = l - 1; t >= 0; t--)0 === r[t] && (t !== l - 1 && (i[t] = i[l - 1]), --l);
        i.length = l, e.sort(), yield {
            palette: e,
            progress: 100
        };
    }
};
function xt(t) {
    const e = [];
    for(let i = 0; i < t; i++)e[i] = 0;
    return e;
}
function yt(t, e, i, r) {
    const s = new Array(t);
    for(let n = 0; n < t; n++){
        s[n] = new Array(e);
        for(let t = 0; t < e; t++){
            s[n][t] = new Array(i);
            for(let e = 0; e < i; e++){
                s[n][t][e] = new Array(r);
                for(let i = 0; i < r; i++)s[n][t][e][i] = 0;
            }
        }
    }
    return s;
}
function St(t, e, i) {
    const r = new Array(t);
    for(let s = 0; s < t; s++){
        r[s] = new Array(e);
        for(let t = 0; t < e; t++){
            r[s][t] = new Array(i);
            for(let e = 0; e < i; e++)r[s][t][e] = 0;
        }
    }
    return r;
}
function kt(t, e, i, r, s) {
    for(let n = 0; n < e; n++){
        t[n] = [];
        for(let e = 0; e < i; e++){
            t[n][e] = [];
            for(let i = 0; i < r; i++)t[n][e][i] = s;
        }
    }
}
function Bt(t, e, i) {
    for(let r = 0; r < e; r++)t[r] = i;
}
var zt = class {
    constructor(){
        n(this, "redMinimum"), n(this, "redMaximum"), n(this, "greenMinimum"), n(this, "greenMaximum"), n(this, "blueMinimum"), n(this, "blueMaximum"), n(this, "volume"), n(this, "alphaMinimum"), n(this, "alphaMaximum");
    }
}, At = class extends et {
    constructor(t, e = 256, i = 5){
        super(), n(this, "_reds"), n(this, "_greens"), n(this, "_blues"), n(this, "_alphas"), n(this, "_sums"), n(this, "_weights"), n(this, "_momentsRed"), n(this, "_momentsGreen"), n(this, "_momentsBlue"), n(this, "_momentsAlpha"), n(this, "_moments"), n(this, "_table"), n(this, "_pixels"), n(this, "_cubes"), n(this, "_colors"), n(this, "_significantBitsPerChannel"), n(this, "_maxSideIndex"), n(this, "_alphaMaxSideIndex"), n(this, "_sideSize"), n(this, "_alphaSideSize"), n(this, "_distance"), this._distance = t, this._setQuality(i), this._initialize(e);
    }
    sample(t) {
        const e = t.getPointArray();
        for(let t = 0, i = e.length; t < i; t++)this._addColor(e[t]);
        this._pixels = this._pixels.concat(e);
    }
    *quantize() {
        yield* this._preparePalette();
        const t = new nt;
        for(let e = 0; e < this._colors; e++)if (this._sums[e] > 0) {
            const i = this._sums[e], r = this._reds[e] / i, s = this._greens[e] / i, n = this._blues[e] / i, a = this._alphas[e] / i, o = it.createByRGBA(0 | r, 0 | s, 0 | n, 0 | a);
            t.add(o);
        }
        t.sort(), yield {
            palette: t,
            progress: 100
        };
    }
    *_preparePalette() {
        yield* this._calculateMoments();
        let t = 0;
        const e = xt(this._colors);
        for(let i = 1; i < this._colors; ++i){
            this._cut(this._cubes[t], this._cubes[i]) ? (e[t] = this._cubes[t].volume > 1 ? this._calculateVariance(this._cubes[t]) : 0, e[i] = this._cubes[i].volume > 1 ? this._calculateVariance(this._cubes[i]) : 0) : (e[t] = 0, i--), t = 0;
            let r = e[0];
            for(let s = 1; s <= i; ++s)e[s] > r && (r = e[s], t = s);
            if (r <= 0) {
                this._colors = i + 1;
                break;
            }
        }
        const i = [], r = [], s = [], n = [];
        for(let t = 0; t < this._colors; ++t){
            const e = At._volume(this._cubes[t], this._weights);
            e > 0 ? (i[t] = At._volume(this._cubes[t], this._momentsRed) / e | 0, r[t] = At._volume(this._cubes[t], this._momentsGreen) / e | 0, s[t] = At._volume(this._cubes[t], this._momentsBlue) / e | 0, n[t] = At._volume(this._cubes[t], this._momentsAlpha) / e | 0) : (i[t] = 0, r[t] = 0, s[t] = 0, n[t] = 0);
        }
        this._reds = xt(this._colors + 1), this._greens = xt(this._colors + 1), this._blues = xt(this._colors + 1), this._alphas = xt(this._colors + 1), this._sums = xt(this._colors + 1);
        for(let t = 0, e = this._pixels.length; t < e; t++){
            const e = this._pixels[t];
            let a = -1, o = Number.MAX_VALUE;
            for(let t = 0; t < this._colors; t++){
                const h = i[t], l = r[t], u = s[t], m = n[t], c = this._distance.calculateRaw(h, l, u, m, e.r, e.g, e.b, e.a);
                c < o && (o = c, a = t);
            }
            this._reds[a] += e.r, this._greens[a] += e.g, this._blues[a] += e.b, this._alphas[a] += e.a, this._sums[a]++;
        }
    }
    _addColor(t) {
        const e = 8 - this._significantBitsPerChannel, i = 1 + (t.r >> e), r = 1 + (t.g >> e), s = 1 + (t.b >> e), n = 1 + (t.a >> e);
        this._weights[n][i][r][s]++, this._momentsRed[n][i][r][s] += t.r, this._momentsGreen[n][i][r][s] += t.g, this._momentsBlue[n][i][r][s] += t.b, this._momentsAlpha[n][i][r][s] += t.a, this._moments[n][i][r][s] += this._table[t.r] + this._table[t.g] + this._table[t.b] + this._table[t.a];
    }
    *_calculateMoments() {
        const t = [], e = [], i = [], r = [], s = [], n = [], a = St(this._sideSize, this._sideSize, this._sideSize), o = St(this._sideSize, this._sideSize, this._sideSize), h = St(this._sideSize, this._sideSize, this._sideSize), l = St(this._sideSize, this._sideSize, this._sideSize), u = St(this._sideSize, this._sideSize, this._sideSize), m = St(this._sideSize, this._sideSize, this._sideSize);
        let c = 0;
        const _ = new ut(this._alphaMaxSideIndex * this._maxSideIndex, 99);
        for(let d = 1; d <= this._alphaMaxSideIndex; ++d){
            kt(a, this._sideSize, this._sideSize, this._sideSize, 0), kt(o, this._sideSize, this._sideSize, this._sideSize, 0), kt(h, this._sideSize, this._sideSize, this._sideSize, 0), kt(l, this._sideSize, this._sideSize, this._sideSize, 0), kt(u, this._sideSize, this._sideSize, this._sideSize, 0), kt(m, this._sideSize, this._sideSize, this._sideSize, 0);
            for(let f = 1; f <= this._maxSideIndex; ++f, ++c){
                _.shouldNotify(c) && (yield {
                    progress: _.progress
                }), Bt(t, this._sideSize, 0), Bt(e, this._sideSize, 0), Bt(i, this._sideSize, 0), Bt(r, this._sideSize, 0), Bt(s, this._sideSize, 0), Bt(n, this._sideSize, 0);
                for(let c = 1; c <= this._maxSideIndex; ++c){
                    let _ = 0, p = 0, g = 0, b = 0, M = 0, w = 0;
                    for(let x = 1; x <= this._maxSideIndex; ++x)_ += this._weights[d][f][c][x], p += this._momentsRed[d][f][c][x], g += this._momentsGreen[d][f][c][x], b += this._momentsBlue[d][f][c][x], M += this._momentsAlpha[d][f][c][x], w += this._moments[d][f][c][x], t[x] += _, e[x] += p, i[x] += g, r[x] += b, s[x] += M, n[x] += w, a[f][c][x] = a[f - 1][c][x] + t[x], o[f][c][x] = o[f - 1][c][x] + e[x], h[f][c][x] = h[f - 1][c][x] + i[x], l[f][c][x] = l[f - 1][c][x] + r[x], u[f][c][x] = u[f - 1][c][x] + s[x], m[f][c][x] = m[f - 1][c][x] + n[x], this._weights[d][f][c][x] = this._weights[d - 1][f][c][x] + a[f][c][x], this._momentsRed[d][f][c][x] = this._momentsRed[d - 1][f][c][x] + o[f][c][x], this._momentsGreen[d][f][c][x] = this._momentsGreen[d - 1][f][c][x] + h[f][c][x], this._momentsBlue[d][f][c][x] = this._momentsBlue[d - 1][f][c][x] + l[f][c][x], this._momentsAlpha[d][f][c][x] = this._momentsAlpha[d - 1][f][c][x] + u[f][c][x], this._moments[d][f][c][x] = this._moments[d - 1][f][c][x] + m[f][c][x];
                }
            }
        }
    }
    static _volumeFloat(t, e) {
        return e[t.alphaMaximum][t.redMaximum][t.greenMaximum][t.blueMaximum] - e[t.alphaMaximum][t.redMaximum][t.greenMinimum][t.blueMaximum] - e[t.alphaMaximum][t.redMinimum][t.greenMaximum][t.blueMaximum] + e[t.alphaMaximum][t.redMinimum][t.greenMinimum][t.blueMaximum] - e[t.alphaMinimum][t.redMaximum][t.greenMaximum][t.blueMaximum] + e[t.alphaMinimum][t.redMaximum][t.greenMinimum][t.blueMaximum] + e[t.alphaMinimum][t.redMinimum][t.greenMaximum][t.blueMaximum] - e[t.alphaMinimum][t.redMinimum][t.greenMinimum][t.blueMaximum] - (e[t.alphaMaximum][t.redMaximum][t.greenMaximum][t.blueMinimum] - e[t.alphaMinimum][t.redMaximum][t.greenMaximum][t.blueMinimum] - e[t.alphaMaximum][t.redMaximum][t.greenMinimum][t.blueMinimum] + e[t.alphaMinimum][t.redMaximum][t.greenMinimum][t.blueMinimum] - e[t.alphaMaximum][t.redMinimum][t.greenMaximum][t.blueMinimum] + e[t.alphaMinimum][t.redMinimum][t.greenMaximum][t.blueMinimum] + e[t.alphaMaximum][t.redMinimum][t.greenMinimum][t.blueMinimum] - e[t.alphaMinimum][t.redMinimum][t.greenMinimum][t.blueMinimum]);
    }
    static _volume(t, e) {
        return 0 | At._volumeFloat(t, e);
    }
    static _top(t, e, i, r) {
        let s;
        switch(e){
            case At._alpha:
                s = r[i][t.redMaximum][t.greenMaximum][t.blueMaximum] - r[i][t.redMaximum][t.greenMinimum][t.blueMaximum] - r[i][t.redMinimum][t.greenMaximum][t.blueMaximum] + r[i][t.redMinimum][t.greenMinimum][t.blueMaximum] - (r[i][t.redMaximum][t.greenMaximum][t.blueMinimum] - r[i][t.redMaximum][t.greenMinimum][t.blueMinimum] - r[i][t.redMinimum][t.greenMaximum][t.blueMinimum] + r[i][t.redMinimum][t.greenMinimum][t.blueMinimum]);
                break;
            case At._red:
                s = r[t.alphaMaximum][i][t.greenMaximum][t.blueMaximum] - r[t.alphaMaximum][i][t.greenMinimum][t.blueMaximum] - r[t.alphaMinimum][i][t.greenMaximum][t.blueMaximum] + r[t.alphaMinimum][i][t.greenMinimum][t.blueMaximum] - (r[t.alphaMaximum][i][t.greenMaximum][t.blueMinimum] - r[t.alphaMaximum][i][t.greenMinimum][t.blueMinimum] - r[t.alphaMinimum][i][t.greenMaximum][t.blueMinimum] + r[t.alphaMinimum][i][t.greenMinimum][t.blueMinimum]);
                break;
            case At._green:
                s = r[t.alphaMaximum][t.redMaximum][i][t.blueMaximum] - r[t.alphaMaximum][t.redMinimum][i][t.blueMaximum] - r[t.alphaMinimum][t.redMaximum][i][t.blueMaximum] + r[t.alphaMinimum][t.redMinimum][i][t.blueMaximum] - (r[t.alphaMaximum][t.redMaximum][i][t.blueMinimum] - r[t.alphaMaximum][t.redMinimum][i][t.blueMinimum] - r[t.alphaMinimum][t.redMaximum][i][t.blueMinimum] + r[t.alphaMinimum][t.redMinimum][i][t.blueMinimum]);
                break;
            case At._blue:
                s = r[t.alphaMaximum][t.redMaximum][t.greenMaximum][i] - r[t.alphaMaximum][t.redMaximum][t.greenMinimum][i] - r[t.alphaMaximum][t.redMinimum][t.greenMaximum][i] + r[t.alphaMaximum][t.redMinimum][t.greenMinimum][i] - (r[t.alphaMinimum][t.redMaximum][t.greenMaximum][i] - r[t.alphaMinimum][t.redMaximum][t.greenMinimum][i] - r[t.alphaMinimum][t.redMinimum][t.greenMaximum][i] + r[t.alphaMinimum][t.redMinimum][t.greenMinimum][i]);
                break;
            default:
                throw new Error("impossible");
        }
        return 0 | s;
    }
    static _bottom(t, e, i) {
        switch(e){
            case At._alpha:
                return -i[t.alphaMinimum][t.redMaximum][t.greenMaximum][t.blueMaximum] + i[t.alphaMinimum][t.redMaximum][t.greenMinimum][t.blueMaximum] + i[t.alphaMinimum][t.redMinimum][t.greenMaximum][t.blueMaximum] - i[t.alphaMinimum][t.redMinimum][t.greenMinimum][t.blueMaximum] - (-i[t.alphaMinimum][t.redMaximum][t.greenMaximum][t.blueMinimum] + i[t.alphaMinimum][t.redMaximum][t.greenMinimum][t.blueMinimum] + i[t.alphaMinimum][t.redMinimum][t.greenMaximum][t.blueMinimum] - i[t.alphaMinimum][t.redMinimum][t.greenMinimum][t.blueMinimum]);
            case At._red:
                return -i[t.alphaMaximum][t.redMinimum][t.greenMaximum][t.blueMaximum] + i[t.alphaMaximum][t.redMinimum][t.greenMinimum][t.blueMaximum] + i[t.alphaMinimum][t.redMinimum][t.greenMaximum][t.blueMaximum] - i[t.alphaMinimum][t.redMinimum][t.greenMinimum][t.blueMaximum] - (-i[t.alphaMaximum][t.redMinimum][t.greenMaximum][t.blueMinimum] + i[t.alphaMaximum][t.redMinimum][t.greenMinimum][t.blueMinimum] + i[t.alphaMinimum][t.redMinimum][t.greenMaximum][t.blueMinimum] - i[t.alphaMinimum][t.redMinimum][t.greenMinimum][t.blueMinimum]);
            case At._green:
                return -i[t.alphaMaximum][t.redMaximum][t.greenMinimum][t.blueMaximum] + i[t.alphaMaximum][t.redMinimum][t.greenMinimum][t.blueMaximum] + i[t.alphaMinimum][t.redMaximum][t.greenMinimum][t.blueMaximum] - i[t.alphaMinimum][t.redMinimum][t.greenMinimum][t.blueMaximum] - (-i[t.alphaMaximum][t.redMaximum][t.greenMinimum][t.blueMinimum] + i[t.alphaMaximum][t.redMinimum][t.greenMinimum][t.blueMinimum] + i[t.alphaMinimum][t.redMaximum][t.greenMinimum][t.blueMinimum] - i[t.alphaMinimum][t.redMinimum][t.greenMinimum][t.blueMinimum]);
            case At._blue:
                return -i[t.alphaMaximum][t.redMaximum][t.greenMaximum][t.blueMinimum] + i[t.alphaMaximum][t.redMaximum][t.greenMinimum][t.blueMinimum] + i[t.alphaMaximum][t.redMinimum][t.greenMaximum][t.blueMinimum] - i[t.alphaMaximum][t.redMinimum][t.greenMinimum][t.blueMinimum] - (-i[t.alphaMinimum][t.redMaximum][t.greenMaximum][t.blueMinimum] + i[t.alphaMinimum][t.redMaximum][t.greenMinimum][t.blueMinimum] + i[t.alphaMinimum][t.redMinimum][t.greenMaximum][t.blueMinimum] - i[t.alphaMinimum][t.redMinimum][t.greenMinimum][t.blueMinimum]);
            default:
                return 0;
        }
    }
    _calculateVariance(t) {
        const e = At._volume(t, this._momentsRed), i = At._volume(t, this._momentsGreen), r = At._volume(t, this._momentsBlue), s = At._volume(t, this._momentsAlpha);
        return At._volumeFloat(t, this._moments) - (e * e + i * i + r * r + s * s) / At._volume(t, this._weights);
    }
    _maximize(t, e, i, r, s, n, a, o, h) {
        const l = 0 | At._bottom(t, e, this._momentsRed), u = 0 | At._bottom(t, e, this._momentsGreen), m = 0 | At._bottom(t, e, this._momentsBlue), c = 0 | At._bottom(t, e, this._momentsAlpha), _ = 0 | At._bottom(t, e, this._weights);
        let d = 0, f = -1;
        for(let p = i; p < r; ++p){
            let i = l + At._top(t, e, p, this._momentsRed), r = u + At._top(t, e, p, this._momentsGreen), g = m + At._top(t, e, p, this._momentsBlue), b = c + At._top(t, e, p, this._momentsAlpha), M = _ + At._top(t, e, p, this._weights);
            if (0 !== M) {
                let t = i * i + r * r + g * g + b * b, e = t / M;
                i = s - i, r = n - r, g = a - g, b = o - b, M = h - M, 0 !== M && (t = i * i + r * r + g * g + b * b, e += t / M, e > d && (d = e, f = p));
            }
        }
        return {
            max: d,
            position: f
        };
    }
    _cut(t, e) {
        let i;
        const r = At._volume(t, this._momentsRed), s = At._volume(t, this._momentsGreen), n = At._volume(t, this._momentsBlue), a = At._volume(t, this._momentsAlpha), o = At._volume(t, this._weights), h = this._maximize(t, At._red, t.redMinimum + 1, t.redMaximum, r, s, n, a, o), l = this._maximize(t, At._green, t.greenMinimum + 1, t.greenMaximum, r, s, n, a, o), u = this._maximize(t, At._blue, t.blueMinimum + 1, t.blueMaximum, r, s, n, a, o), m = this._maximize(t, At._alpha, t.alphaMinimum + 1, t.alphaMaximum, r, s, n, a, o);
        if (m.max >= h.max && m.max >= l.max && m.max >= u.max) {
            if (i = At._alpha, m.position < 0) return !1;
        } else i = h.max >= m.max && h.max >= l.max && h.max >= u.max ? At._red : l.max >= m.max && l.max >= h.max && l.max >= u.max ? At._green : At._blue;
        switch(e.redMaximum = t.redMaximum, e.greenMaximum = t.greenMaximum, e.blueMaximum = t.blueMaximum, e.alphaMaximum = t.alphaMaximum, i){
            case At._red:
                e.redMinimum = t.redMaximum = h.position, e.greenMinimum = t.greenMinimum, e.blueMinimum = t.blueMinimum, e.alphaMinimum = t.alphaMinimum;
                break;
            case At._green:
                e.greenMinimum = t.greenMaximum = l.position, e.redMinimum = t.redMinimum, e.blueMinimum = t.blueMinimum, e.alphaMinimum = t.alphaMinimum;
                break;
            case At._blue:
                e.blueMinimum = t.blueMaximum = u.position, e.redMinimum = t.redMinimum, e.greenMinimum = t.greenMinimum, e.alphaMinimum = t.alphaMinimum;
                break;
            case At._alpha:
                e.alphaMinimum = t.alphaMaximum = m.position, e.blueMinimum = t.blueMinimum, e.redMinimum = t.redMinimum, e.greenMinimum = t.greenMinimum;
        }
        return t.volume = (t.redMaximum - t.redMinimum) * (t.greenMaximum - t.greenMinimum) * (t.blueMaximum - t.blueMinimum) * (t.alphaMaximum - t.alphaMinimum), e.volume = (e.redMaximum - e.redMinimum) * (e.greenMaximum - e.greenMinimum) * (e.blueMaximum - e.blueMinimum) * (e.alphaMaximum - e.alphaMinimum), !0;
    }
    _initialize(t) {
        this._colors = t, this._cubes = [];
        for(let e = 0; e < t; e++)this._cubes[e] = new zt;
        this._cubes[0].redMinimum = 0, this._cubes[0].greenMinimum = 0, this._cubes[0].blueMinimum = 0, this._cubes[0].alphaMinimum = 0, this._cubes[0].redMaximum = this._maxSideIndex, this._cubes[0].greenMaximum = this._maxSideIndex, this._cubes[0].blueMaximum = this._maxSideIndex, this._cubes[0].alphaMaximum = this._alphaMaxSideIndex, this._weights = yt(this._alphaSideSize, this._sideSize, this._sideSize, this._sideSize), this._momentsRed = yt(this._alphaSideSize, this._sideSize, this._sideSize, this._sideSize), this._momentsGreen = yt(this._alphaSideSize, this._sideSize, this._sideSize, this._sideSize), this._momentsBlue = yt(this._alphaSideSize, this._sideSize, this._sideSize, this._sideSize), this._momentsAlpha = yt(this._alphaSideSize, this._sideSize, this._sideSize, this._sideSize), this._moments = yt(this._alphaSideSize, this._sideSize, this._sideSize, this._sideSize), this._table = [];
        for(let t = 0; t < 256; ++t)this._table[t] = t * t;
        this._pixels = [];
    }
    _setQuality(t = 5) {
        this._significantBitsPerChannel = t, this._maxSideIndex = 1 << this._significantBitsPerChannel, this._alphaMaxSideIndex = this._maxSideIndex, this._sideSize = this._maxSideIndex + 1, this._alphaSideSize = this._alphaMaxSideIndex + 1;
    }
}, vt = At;
n(vt, "_alpha", 3), n(vt, "_red", 2), n(vt, "_green", 1), n(vt, "_blue", 0);
var Et = {};
s(Et, {
    AbstractImageQuantizer: ()=>It,
    ErrorDiffusionArray: ()=>Rt,
    ErrorDiffusionArrayKernel: ()=>Pt,
    ErrorDiffusionRiemersma: ()=>Ft,
    NearestColor: ()=>Gt
});
var It = class {
    quantizeSync(t, e) {
        for (const i of this.quantize(t, e))if (i.pointContainer) return i.pointContainer;
        throw new Error("unreachable");
    }
}, Gt = class extends It {
    constructor(t){
        super(), n(this, "_distance"), this._distance = t;
    }
    *quantize(t, e) {
        const i = t.getPointArray(), r = t.getWidth(), s = t.getHeight(), n = new ut(s, 99);
        for(let t = 0; t < s; t++){
            n.shouldNotify(t) && (yield {
                progress: n.progress
            });
            for(let s = 0, n = t * r; s < r; s++, n++){
                const t = i[n];
                t.from(e.getNearestColor(this._distance, t));
            }
        }
        yield {
            pointContainer: t,
            progress: 100
        };
    }
}, Pt = ((t)=>(t[t.FloydSteinberg = 0] = "FloydSteinberg", t[t.FalseFloydSteinberg = 1] = "FalseFloydSteinberg", t[t.Stucki = 2] = "Stucki", t[t.Atkinson = 3] = "Atkinson", t[t.Jarvis = 4] = "Jarvis", t[t.Burkes = 5] = "Burkes", t[t.Sierra = 6] = "Sierra", t[t.TwoSierra = 7] = "TwoSierra", t[t.SierraLite = 8] = "SierraLite", t))(Pt || {}), Rt = class extends It {
    constructor(t, e, i = !0, r = 0, s = !1){
        super(), n(this, "_minColorDistance"), n(this, "_serpentine"), n(this, "_kernel"), n(this, "_calculateErrorLikeGIMP"), n(this, "_distance"), this._setKernel(e), this._distance = t, this._minColorDistance = r, this._serpentine = i, this._calculateErrorLikeGIMP = s;
    }
    *quantize(t, e) {
        const i = t.getPointArray(), r = new it, s = t.getWidth(), n = t.getHeight(), a = [];
        let o = 1, h = 1;
        for (const t of this._kernel){
            const e = t[2] + 1;
            h < e && (h = e);
        }
        for(let t = 0; t < h; t++)this._fillErrorLine(a[t] = [], s);
        const l = new ut(n, 99);
        for(let t = 0; t < n; t++){
            l.shouldNotify(t) && (yield {
                progress: l.progress
            }), this._serpentine && (o *= -1);
            const h = t * s, u = 1 === o ? 0 : s - 1, m = 1 === o ? s : -1;
            this._fillErrorLine(a[0], s), a.push(a.shift());
            const c = a[0];
            for(let l = u, _ = h + u; l !== m; l += o, _ += o){
                const h = i[_], u = c[l];
                r.from(h);
                const m = it.createByRGBA(M(h.r + u[0]), M(h.g + u[1]), M(h.b + u[2]), M(h.a + u[3])), d = e.getNearestColor(this._distance, m);
                if (h.from(d), this._minColorDistance) {
                    if (this._distance.calculateNormalized(r, d) < this._minColorDistance) continue;
                }
                let f, p, g, b;
                this._calculateErrorLikeGIMP ? (f = m.r - d.r, p = m.g - d.g, g = m.b - d.b, b = m.a - d.a) : (f = r.r - d.r, p = r.g - d.g, g = r.b - d.b, b = r.a - d.a);
                const w = 1 === o ? 0 : this._kernel.length - 1, x = 1 === o ? this._kernel.length : -1;
                for(let e = w; e !== x; e += o){
                    const i = this._kernel[e][1] * o, r = this._kernel[e][2];
                    if (i + l >= 0 && i + l < s && r + t >= 0 && r + t < n) {
                        const t = this._kernel[e][0], s = a[r][i + l];
                        s[0] += f * t, s[1] += p * t, s[2] += g * t, s[3] += b * t;
                    }
                }
            }
        }
        yield {
            pointContainer: t,
            progress: 100
        };
    }
    _fillErrorLine(t, e) {
        t.length > e && (t.length = e);
        const i = t.length;
        for(let e = 0; e < i; e++){
            const i = t[e];
            i[0] = i[1] = i[2] = i[3] = 0;
        }
        for(let r = i; r < e; r++)t[r] = [
            0,
            0,
            0,
            0
        ];
    }
    _setKernel(t) {
        switch(t){
            case 0:
                this._kernel = [
                    [
                        7 / 16,
                        1,
                        0
                    ],
                    [
                        3 / 16,
                        -1,
                        1
                    ],
                    [
                        5 / 16,
                        0,
                        1
                    ],
                    [
                        1 / 16,
                        1,
                        1
                    ]
                ];
                break;
            case 1:
                this._kernel = [
                    [
                        3 / 8,
                        1,
                        0
                    ],
                    [
                        3 / 8,
                        0,
                        1
                    ],
                    [
                        2 / 8,
                        1,
                        1
                    ]
                ];
                break;
            case 2:
                this._kernel = [
                    [
                        8 / 42,
                        1,
                        0
                    ],
                    [
                        4 / 42,
                        2,
                        0
                    ],
                    [
                        2 / 42,
                        -2,
                        1
                    ],
                    [
                        4 / 42,
                        -1,
                        1
                    ],
                    [
                        8 / 42,
                        0,
                        1
                    ],
                    [
                        4 / 42,
                        1,
                        1
                    ],
                    [
                        2 / 42,
                        2,
                        1
                    ],
                    [
                        1 / 42,
                        -2,
                        2
                    ],
                    [
                        2 / 42,
                        -1,
                        2
                    ],
                    [
                        4 / 42,
                        0,
                        2
                    ],
                    [
                        2 / 42,
                        1,
                        2
                    ],
                    [
                        1 / 42,
                        2,
                        2
                    ]
                ];
                break;
            case 3:
                this._kernel = [
                    [
                        1 / 8,
                        1,
                        0
                    ],
                    [
                        1 / 8,
                        2,
                        0
                    ],
                    [
                        1 / 8,
                        -1,
                        1
                    ],
                    [
                        1 / 8,
                        0,
                        1
                    ],
                    [
                        1 / 8,
                        1,
                        1
                    ],
                    [
                        1 / 8,
                        0,
                        2
                    ]
                ];
                break;
            case 4:
                this._kernel = [
                    [
                        7 / 48,
                        1,
                        0
                    ],
                    [
                        5 / 48,
                        2,
                        0
                    ],
                    [
                        3 / 48,
                        -2,
                        1
                    ],
                    [
                        5 / 48,
                        -1,
                        1
                    ],
                    [
                        7 / 48,
                        0,
                        1
                    ],
                    [
                        5 / 48,
                        1,
                        1
                    ],
                    [
                        3 / 48,
                        2,
                        1
                    ],
                    [
                        1 / 48,
                        -2,
                        2
                    ],
                    [
                        3 / 48,
                        -1,
                        2
                    ],
                    [
                        5 / 48,
                        0,
                        2
                    ],
                    [
                        3 / 48,
                        1,
                        2
                    ],
                    [
                        1 / 48,
                        2,
                        2
                    ]
                ];
                break;
            case 5:
                this._kernel = [
                    [
                        .25,
                        1,
                        0
                    ],
                    [
                        4 / 32,
                        2,
                        0
                    ],
                    [
                        2 / 32,
                        -2,
                        1
                    ],
                    [
                        4 / 32,
                        -1,
                        1
                    ],
                    [
                        .25,
                        0,
                        1
                    ],
                    [
                        4 / 32,
                        1,
                        1
                    ],
                    [
                        2 / 32,
                        2,
                        1
                    ]
                ];
                break;
            case 6:
                this._kernel = [
                    [
                        5 / 32,
                        1,
                        0
                    ],
                    [
                        3 / 32,
                        2,
                        0
                    ],
                    [
                        2 / 32,
                        -2,
                        1
                    ],
                    [
                        4 / 32,
                        -1,
                        1
                    ],
                    [
                        5 / 32,
                        0,
                        1
                    ],
                    [
                        4 / 32,
                        1,
                        1
                    ],
                    [
                        2 / 32,
                        2,
                        1
                    ],
                    [
                        2 / 32,
                        -1,
                        2
                    ],
                    [
                        3 / 32,
                        0,
                        2
                    ],
                    [
                        2 / 32,
                        1,
                        2
                    ]
                ];
                break;
            case 7:
                this._kernel = [
                    [
                        .25,
                        1,
                        0
                    ],
                    [
                        3 / 16,
                        2,
                        0
                    ],
                    [
                        1 / 16,
                        -2,
                        1
                    ],
                    [
                        2 / 16,
                        -1,
                        1
                    ],
                    [
                        3 / 16,
                        0,
                        1
                    ],
                    [
                        2 / 16,
                        1,
                        1
                    ],
                    [
                        1 / 16,
                        2,
                        1
                    ]
                ];
                break;
            case 8:
                this._kernel = [
                    [
                        .5,
                        1,
                        0
                    ],
                    [
                        1 / 4,
                        -1,
                        1
                    ],
                    [
                        1 / 4,
                        0,
                        1
                    ]
                ];
                break;
            default:
                throw new Error(`ErrorDiffusionArray: unknown kernel = ${t}`);
        }
    }
};
function* Ct(t, e, i) {
    const r = Math.max(t, e), s = {
        width: t,
        height: e,
        level: Math.floor(Math.log(r) / Math.log(2) + 1),
        callback: i,
        tracker: new ut(t * e, 99),
        index: 0,
        x: 0,
        y: 0
    };
    yield* Dt(s, 1), qt(s, 0);
}
function* Dt(t, e) {
    if (!(t.level < 1)) {
        switch(t.tracker.shouldNotify(t.index) && (yield {
            progress: t.tracker.progress
        }), t.level--, e){
            case 2:
                yield* Dt(t, 1), qt(t, 3), yield* Dt(t, 2), qt(t, 4), yield* Dt(t, 2), qt(t, 2), yield* Dt(t, 4);
                break;
            case 3:
                yield* Dt(t, 4), qt(t, 2), yield* Dt(t, 3), qt(t, 1), yield* Dt(t, 3), qt(t, 3), yield* Dt(t, 1);
                break;
            case 1:
                yield* Dt(t, 2), qt(t, 4), yield* Dt(t, 1), qt(t, 3), yield* Dt(t, 1), qt(t, 1), yield* Dt(t, 3);
                break;
            case 4:
                yield* Dt(t, 3), qt(t, 1), yield* Dt(t, 4), qt(t, 2), yield* Dt(t, 4), qt(t, 4), yield* Dt(t, 2);
        }
        t.level++;
    }
}
function qt(t, e) {
    switch(t.x >= 0 && t.x < t.width && t.y >= 0 && t.y < t.height && (t.callback(t.x, t.y), t.index++), e){
        case 2:
            t.x--;
            break;
        case 3:
            t.x++;
            break;
        case 1:
            t.y--;
            break;
        case 4:
            t.y++;
    }
}
var Ft = class extends It {
    constructor(t, e = 16, i = 1){
        super(), n(this, "_distance"), n(this, "_weights"), n(this, "_errorQueueSize"), this._distance = t, this._errorQueueSize = e, this._weights = Ft._createWeights(i, e);
    }
    *quantize(t, e) {
        const i = t.getPointArray(), r = t.getWidth(), s = t.getHeight(), n = [];
        let a = 0;
        for(let t = 0; t < this._errorQueueSize; t++)n[t] = {
            r: 0,
            g: 0,
            b: 0,
            a: 0
        };
        yield* Ct(r, s, (t, s)=>{
            const o = i[t + s * r];
            let { r: h, g: l, b: u, a: m } = o;
            for(let t = 0; t < this._errorQueueSize; t++){
                const e = this._weights[t], i = n[(t + a) % this._errorQueueSize];
                h += i.r * e, l += i.g * e, u += i.b * e, m += i.a * e;
            }
            const c = it.createByRGBA(M(h), M(l), M(u), M(m)), _ = e.getNearestColor(this._distance, c);
            a = (a + 1) % this._errorQueueSize;
            const d = (a + this._errorQueueSize - 1) % this._errorQueueSize;
            n[d].r = o.r - _.r, n[d].g = o.g - _.g, n[d].b = o.b - _.b, n[d].a = o.a - _.a, o.from(_);
        }), yield {
            pointContainer: t,
            progress: 100
        };
    }
    static _createWeights(t, e) {
        const i = [], r = Math.exp(Math.log(e) / (e - 1));
        for(let s = 0, n = 1; s < e; s++)i[s] = (n + .5 | 0) / e * t, n *= r;
        return i;
    }
}, Tt = {};
s(Tt, {
    ssim: ()=>Lt
});
var Ut = .01, Nt = .03;
function Lt(t, e) {
    if (t.getHeight() !== e.getHeight() || t.getWidth() !== e.getWidth()) throw new Error("Images have different sizes!");
    const i = (255 * Ut) ** 2, r = (255 * Nt) ** 2;
    let s = 0, n = 0;
    return function(t, e, i) {
        const r = 8, s = t.getWidth(), n = t.getHeight();
        for(let a = 0; a < n; a += r)for(let o = 0; o < s; o += r){
            const h = Math.min(r, s - o), l = Math.min(r, n - a), u = Ot(t, o, a, h, l), m = Ot(e, o, a, h, l);
            i(u, m, Wt(u), Wt(m));
        }
    }(t, e, (t, e, a, o)=>{
        let h = 0, l = 0, u = 0;
        for(let i = 0; i < t.length; i++)l += (t[i] - a) ** 2, u += (e[i] - o) ** 2, h += (t[i] - a) * (e[i] - o);
        const m = t.length - 1;
        l /= m, u /= m, h /= m;
        n += (2 * a * o + i) * (2 * h + r) / ((a ** 2 + o ** 2 + i) * (l + u + r)), s++;
    }), n / s;
}
function Ot(t, e, i, r, s) {
    const n = t.getPointArray(), a = [];
    let o = 0;
    for(let h = i; h < i + s; h++){
        const i = h * t.getWidth();
        for(let t = e; t < e + r; t++){
            const e = n[i + t];
            a[o] = .2126 * e.r + .7152 * e.g + .0722 * e.b, o++;
        }
    }
    return a;
}
function Wt(t) {
    let e = 0;
    for (const i of t)e += i;
    return e / t.length;
}
var Ht = "function" == typeof setImmediate ? setImmediate : "undefined" != typeof process && "function" == typeof (null == process ? void 0 : process.nextTick) ? (t)=>process.nextTick(t) : (t)=>setTimeout(t, 0);
function Qt(t, { colorDistanceFormula: e, paletteQuantization: i, colors: r } = {}) {
    const s = Xt(Jt(e), i, r);
    return t.forEach((t)=>s.sample(t)), s.quantizeSync();
}
async function jt(t, { colorDistanceFormula: e, paletteQuantization: i, colors: r, onProgress: s } = {}) {
    return new Promise((n, a)=>{
        const o = Xt(Jt(e), i, r);
        let h;
        t.forEach((t)=>o.sample(t));
        const l = o.quantize(), u = ()=>{
            try {
                const t = l.next();
                t.done ? n(h) : (t.value.palette && (h = t.value.palette), s && s(t.value.progress), Ht(u));
            } catch (t) {
                a(t);
            }
        };
        Ht(u);
    });
}
function Kt(t, e, { colorDistanceFormula: i, imageQuantization: r } = {}) {
    return Vt(Jt(i), r).quantizeSync(t, e);
}
async function $t(t, e, { colorDistanceFormula: i, imageQuantization: r, onProgress: s } = {}) {
    return new Promise((n, a)=>{
        let o;
        const h = Vt(Jt(i), r).quantize(t, e), l = ()=>{
            try {
                const t = h.next();
                t.done ? n(o) : (t.value.pointContainer && (o = t.value.pointContainer), s && s(t.value.progress), Ht(l));
            } catch (t) {
                a(t);
            }
        };
        Ht(l);
    });
}
function Jt(t = "euclidean-bt709") {
    switch(t){
        case "cie94-graphic-arts":
            return new L;
        case "cie94-textiles":
            return new N;
        case "ciede2000":
            return new W;
        case "color-metric":
            return new H;
        case "euclidean":
            return new j;
        case "euclidean-bt709":
            return new K;
        case "euclidean-bt709-noalpha":
            return new $;
        case "manhattan":
            return new V;
        case "manhattan-bt709":
            return new Y;
        case "manhattan-nommyde":
            return new X;
        case "pngquant":
            return new Z;
        default:
            throw new Error(`Unknown colorDistanceFormula ${t}`);
    }
}
function Vt(t, e = "floyd-steinberg") {
    switch(e){
        case "nearest":
            return new Gt(t);
        case "riemersma":
            return new Ft(t);
        case "floyd-steinberg":
            return new Rt(t, 0);
        case "false-floyd-steinberg":
            return new Rt(t, 1);
        case "stucki":
            return new Rt(t, 2);
        case "atkinson":
            return new Rt(t, 3);
        case "jarvis":
            return new Rt(t, 4);
        case "burkes":
            return new Rt(t, 5);
        case "sierra":
            return new Rt(t, 6);
        case "two-sierra":
            return new Rt(t, 7);
        case "sierra-lite":
            return new Rt(t, 8);
        default:
            throw new Error(`Unknown imageQuantization ${e}`);
    }
}
function Xt(t, e = "wuquant", i = 256) {
    switch(e){
        case "neuquant":
            return new _t(t, i);
        case "rgbquant":
            return new wt(t, i);
        case "wuquant":
            return new vt(t, i);
        case "neuquant-float":
            return new pt(t, i);
        default:
            throw new Error(`Unknown paletteQuantization ${e}`);
    }
}

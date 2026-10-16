import { h } from "./tslib.es6.js";
function to(e, t) {
    const n = Math.pow(10, t);
    return Math.round(e * n) / n;
}
var D, pc, lp, nr, dp;
export { D, dp, lp, nr, pc, to };
var __wakaru_p6_initialized = false;
export function p6() {
if (__wakaru_p6_initialized) return;
__wakaru_p6_initialized = true;
"use strict";
h(), D = class {
    constructor(e, t, n, r = 1){
        this._rgbaBrand = void 0, this.r = Math.min(255, Math.max(0, e)) | 0, this.g = Math.min(255, Math.max(0, t)) | 0, this.b = Math.min(255, Math.max(0, n)) | 0, this.a = to(Math.max(Math.min(1, r), 0), 3);
    }
    static equals(e, t) {
        return e.r === t.r && e.g === t.g && e.b === t.b && e.a === t.a;
    }
}, pc = class c_ {
    constructor(t, n, r, s){
        this._hslaBrand = void 0, this.h = Math.max(Math.min(360, t), 0) | 0, this.s = to(Math.max(Math.min(1, n), 0), 3), this.l = to(Math.max(Math.min(1, r), 0), 3), this.a = to(Math.max(Math.min(1, s), 0), 3);
    }
    static equals(t, n) {
        return t.h === n.h && t.s === n.s && t.l === n.l && t.a === n.a;
    }
    static fromRGBA(t) {
        const n = t.r / 255, r = t.g / 255, s = t.b / 255, i = t.a, a = Math.max(n, r, s), o = Math.min(n, r, s);
        let l = 0, d = 0;
        const u = (o + a) / 2, m = a - o;
        if (m > 0) {
            switch(d = Math.min(u <= .5 ? m / (2 * u) : m / (2 - 2 * u), 1), a){
                case n:
                    l = (r - s) / m + (r < s ? 6 : 0);
                    break;
                case r:
                    l = (s - n) / m + 2;
                    break;
                case s:
                    l = (n - r) / m + 4;
                    break;
            }
            l *= 60, l = Math.round(l);
        }
        return new c_(l, d, u, i);
    }
    static _hue2rgb(t, n, r) {
        return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? t + (n - t) * 6 * r : r < 1 / 2 ? n : r < 2 / 3 ? t + (n - t) * (2 / 3 - r) * 6 : t;
    }
    static toRGBA(t) {
        const n = t.h / 360, { s: r, l: s, a: i } = t;
        let a, o, l;
        if (r === 0) a = o = l = s;
        else {
            const d = s < .5 ? s * (1 + r) : s + r - s * r, u = 2 * s - d;
            a = c_._hue2rgb(u, d, n + 1 / 3), o = c_._hue2rgb(u, d, n), l = c_._hue2rgb(u, d, n - 1 / 3);
        }
        return new D(Math.round(a * 255), Math.round(o * 255), Math.round(l * 255), i);
    }
}, lp = class lLe {
    constructor(t, n, r, s){
        this._hsvaBrand = void 0, this.h = Math.max(Math.min(360, t), 0) | 0, this.s = to(Math.max(Math.min(1, n), 0), 3), this.v = to(Math.max(Math.min(1, r), 0), 3), this.a = to(Math.max(Math.min(1, s), 0), 3);
    }
    static equals(t, n) {
        return t.h === n.h && t.s === n.s && t.v === n.v && t.a === n.a;
    }
    static fromRGBA(t) {
        const n = t.r / 255, r = t.g / 255, s = t.b / 255, i = Math.max(n, r, s), a = Math.min(n, r, s), o = i - a, l = i === 0 ? 0 : o / i;
        let d;
        return o === 0 ? d = 0 : i === n ? d = ((r - s) / o % 6 + 6) % 6 : i === r ? d = (s - n) / o + 2 : d = (n - r) / o + 4, new lLe(Math.round(d * 60), l, i, t.a);
    }
    static toRGBA(t) {
        const { h: n, s: r, v: s, a: i } = t, a = s * r, o = a * (1 - Math.abs(n / 60 % 2 - 1)), l = s - a;
        let [d, u, m] = [
            0,
            0,
            0
        ];
        return n < 60 ? (d = a, u = o) : n < 120 ? (d = o, u = a) : n < 180 ? (u = a, m = o) : n < 240 ? (u = o, m = a) : n < 300 ? (d = o, m = a) : n <= 360 && (d = a, m = o), d = Math.round((d + l) * 255), u = Math.round((u + l) * 255), m = Math.round((m + l) * 255), new D(d, u, m, i);
    }
}, nr = class Mn {
    static fromHex(t) {
        return Mn.Format.CSS.parseHex(t) || Mn.red;
    }
    static equals(t, n) {
        return !t && !n ? !0 : !t || !n ? !1 : t.equals(n);
    }
    get hsla() {
        return this._hsla ? this._hsla : pc.fromRGBA(this.rgba);
    }
    get hsva() {
        return this._hsva ? this._hsva : lp.fromRGBA(this.rgba);
    }
    constructor(t){
        if (t) if (t instanceof D) this.rgba = t;
        else if (t instanceof pc) this._hsla = t, this.rgba = pc.toRGBA(t);
        else if (t instanceof lp) this._hsva = t, this.rgba = lp.toRGBA(t);
        else throw new Error("Invalid color ctor argument");
        else throw new Error("Color needs a value");
    }
    equals(t) {
        return !!t && D.equals(this.rgba, t.rgba) && pc.equals(this.hsla, t.hsla) && lp.equals(this.hsva, t.hsva);
    }
    getRelativeLuminance() {
        const t = Mn._relativeLuminanceForComponent(this.rgba.r), n = Mn._relativeLuminanceForComponent(this.rgba.g), r = Mn._relativeLuminanceForComponent(this.rgba.b), s = .2126 * t + .7152 * n + .0722 * r;
        return to(s, 4);
    }
    reduceRelativeLuminace(t, n) {
        let { r, g: s, b: i } = t.rgba, a = this.getContrastRatio(t);
        for(; a < n && (r > 0 || s > 0 || i > 0);)r -= Math.max(0, Math.ceil(r * .1)), s -= Math.max(0, Math.ceil(s * .1)), i -= Math.max(0, Math.ceil(i * .1)), a = this.getContrastRatio(new Mn(new D(r, s, i)));
        return new Mn(new D(r, s, i));
    }
    increaseRelativeLuminace(t, n) {
        let { r, g: s, b: i } = t.rgba, a = this.getContrastRatio(t);
        for(; a < n && (r < 255 || s < 255 || i < 255);)r = Math.min(255, r + Math.ceil((255 - r) * .1)), s = Math.min(255, s + Math.ceil((255 - s) * .1)), i = Math.min(255, i + Math.ceil((255 - i) * .1)), a = this.getContrastRatio(new Mn(new D(r, s, i)));
        return new Mn(new D(r, s, i));
    }
    static _relativeLuminanceForComponent(t) {
        const n = t / 255;
        return n <= .03928 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4);
    }
    getContrastRatio(t) {
        const n = this.getRelativeLuminance(), r = t.getRelativeLuminance();
        return n > r ? (n + .05) / (r + .05) : (r + .05) / (n + .05);
    }
    isDarker() {
        return (this.rgba.r * 299 + this.rgba.g * 587 + this.rgba.b * 114) / 1e3 < 128;
    }
    isLighter() {
        return (this.rgba.r * 299 + this.rgba.g * 587 + this.rgba.b * 114) / 1e3 >= 128;
    }
    isLighterThan(t) {
        const n = this.getRelativeLuminance(), r = t.getRelativeLuminance();
        return n > r;
    }
    isDarkerThan(t) {
        const n = this.getRelativeLuminance(), r = t.getRelativeLuminance();
        return n < r;
    }
    ensureConstrast(t, n) {
        const r = this.getRelativeLuminance(), s = t.getRelativeLuminance();
        if (this.getContrastRatio(t) < n) {
            if (s < r) {
                const l = this.reduceRelativeLuminace(t, n), d = this.getContrastRatio(l);
                if (d < n) {
                    const u = this.increaseRelativeLuminace(t, n), m = this.getContrastRatio(u);
                    return d > m ? l : u;
                }
                return l;
            }
            const a = this.increaseRelativeLuminace(t, n), o = this.getContrastRatio(a);
            if (o < n) {
                const l = this.reduceRelativeLuminace(t, n), d = this.getContrastRatio(l);
                return o > d ? a : l;
            }
            return a;
        }
        return t;
    }
    lighten(t) {
        return new Mn(new pc(this.hsla.h, this.hsla.s, this.hsla.l + this.hsla.l * t, this.hsla.a));
    }
    darken(t) {
        return new Mn(new pc(this.hsla.h, this.hsla.s, this.hsla.l - this.hsla.l * t, this.hsla.a));
    }
    transparent(t) {
        const { r: n, g: r, b: s, a: i } = this.rgba;
        return new Mn(new D(n, r, s, i * t));
    }
    isTransparent() {
        return this.rgba.a === 0;
    }
    isOpaque() {
        return this.rgba.a === 1;
    }
    opposite() {
        return new Mn(new D(255 - this.rgba.r, 255 - this.rgba.g, 255 - this.rgba.b, this.rgba.a));
    }
    blend(t) {
        const n = t.rgba, r = this.rgba.a, s = n.a, i = r + s * (1 - r);
        if (i < 1e-6) return Mn.transparent;
        const a = this.rgba.r * r / i + n.r * s * (1 - r) / i, o = this.rgba.g * r / i + n.g * s * (1 - r) / i, l = this.rgba.b * r / i + n.b * s * (1 - r) / i;
        return new Mn(new D(a, o, l, i));
    }
    makeOpaque(t) {
        if (this.isOpaque() || t.rgba.a !== 1) return this;
        const { r: n, g: r, b: s, a: i } = this.rgba;
        return new Mn(new D(t.rgba.r - i * (t.rgba.r - n), t.rgba.g - i * (t.rgba.g - r), t.rgba.b - i * (t.rgba.b - s), 1));
    }
    flatten(...t) {
        const n = t.reduceRight((r, s)=>Mn._flatten(s, r));
        return Mn._flatten(this, n);
    }
    static _flatten(t, n) {
        const r = 1 - t.rgba.a;
        return new Mn(new D(r * n.rgba.r + t.rgba.a * t.rgba.r, r * n.rgba.g + t.rgba.a * t.rgba.g, r * n.rgba.b + t.rgba.a * t.rgba.b));
    }
    toString() {
        return this._toString || (this._toString = Mn.Format.CSS.format(this)), this._toString;
    }
    toNumber32Bit() {
        return this._toNumber32Bit || (this._toNumber32Bit = (this.rgba.r << 24 | this.rgba.g << 16 | this.rgba.b << 8 | this.rgba.a * 255 << 0) >>> 0), this._toNumber32Bit;
    }
    static getLighterColor(t, n, r) {
        if (t.isLighterThan(n)) return t;
        r = r || .5;
        const s = t.getRelativeLuminance(), i = n.getRelativeLuminance();
        return r = r * (i - s) / i, t.lighten(r);
    }
    static getDarkerColor(t, n, r) {
        if (t.isDarkerThan(n)) return t;
        r = r || .5;
        const s = t.getRelativeLuminance(), i = n.getRelativeLuminance();
        return r = r * (s - i) / s, t.darken(r);
    }
}, nr.white = new nr(new D(255, 255, 255, 1)), nr.black = new nr(new D(0, 0, 0, 1)), nr.red = new nr(new D(255, 0, 0, 1)), nr.blue = new nr(new D(0, 0, 255, 1)), nr.green = new nr(new D(0, 255, 0, 1)), nr.cyan = new nr(new D(0, 255, 255, 1)), nr.lightgrey = new nr(new D(211, 211, 211, 1)), nr.transparent = new nr(new D(0, 0, 0, 0)), dp = nr, ((e)=>{
    let t;
    ((n)=>{
        let r;
        ((s)=>{
            function i(y) {
                return y.rgba.a === 1 ? `rgb(${y.rgba.r}, ${y.rgba.g}, ${y.rgba.b})` : e.Format.CSS.formatRGBA(y);
            }
            s.formatRGB = i;
            function a(y) {
                return `rgba(${y.rgba.r}, ${y.rgba.g}, ${y.rgba.b}, ${+y.rgba.a.toFixed(2)})`;
            }
            s.formatRGBA = a;
            function o(y) {
                return y.hsla.a === 1 ? `hsl(${y.hsla.h}, ${(y.hsla.s * 100).toFixed(2)}%, ${(y.hsla.l * 100).toFixed(2)}%)` : e.Format.CSS.formatHSLA(y);
            }
            s.formatHSL = o;
            function l(y) {
                return `hsla(${y.hsla.h}, ${(y.hsla.s * 100).toFixed(2)}%, ${(y.hsla.l * 100).toFixed(2)}%, ${y.hsla.a.toFixed(2)})`;
            }
            s.formatHSLA = l;
            function d(y) {
                const b = y.toString(16);
                return b.length !== 2 ? "0" + b : b;
            }
            function u(y) {
                return `#${d(y.rgba.r)}${d(y.rgba.g)}${d(y.rgba.b)}`;
            }
            s.formatHex = u;
            function m(y, b = !1) {
                return b && y.rgba.a === 1 ? e.Format.CSS.formatHex(y) : `#${d(y.rgba.r)}${d(y.rgba.g)}${d(y.rgba.b)}${d(Math.round(y.rgba.a * 255))}`;
            }
            s.formatHexA = m;
            function f(y) {
                return y.isOpaque() ? e.Format.CSS.formatHex(y) : e.Format.CSS.formatRGBA(y);
            }
            s.format = f;
            function v(y) {
                if (y === "transparent") return e.transparent;
                if (y.startsWith("#")) return S(y);
                if (y.startsWith("rgba(")) {
                    const b = y.match(/rgba\((?<r>(?:\+|-)?\d+), *(?<g>(?:\+|-)?\d+), *(?<b>(?:\+|-)?\d+), *(?<a>(?:\+|-)?\d+(\.\d+)?)\)/);
                    if (!b) throw new Error("Invalid color format " + y);
                    const I = parseInt(b.groups?.r ?? "0"), G = parseInt(b.groups?.g ?? "0"), U = parseInt(b.groups?.b ?? "0"), X = parseFloat(b.groups?.a ?? "0");
                    return new e(new D(I, G, U, X));
                }
                if (y.startsWith("rgb(")) {
                    const b = y.match(/rgb\((?<r>(?:\+|-)?\d+), *(?<g>(?:\+|-)?\d+), *(?<b>(?:\+|-)?\d+)\)/);
                    if (!b) throw new Error("Invalid color format " + y);
                    const I = parseInt(b.groups?.r ?? "0"), G = parseInt(b.groups?.g ?? "0"), U = parseInt(b.groups?.b ?? "0");
                    return new e(new D(I, G, U));
                }
                return T(y);
            }
            s.parse = v;
            function T(y) {
                switch(y){
                    case "aliceblue":
                        return new e(new D(240, 248, 255, 1));
                    case "antiquewhite":
                        return new e(new D(250, 235, 215, 1));
                    case "aqua":
                        return new e(new D(0, 255, 255, 1));
                    case "aquamarine":
                        return new e(new D(127, 255, 212, 1));
                    case "azure":
                        return new e(new D(240, 255, 255, 1));
                    case "beige":
                        return new e(new D(245, 245, 220, 1));
                    case "bisque":
                        return new e(new D(255, 228, 196, 1));
                    case "black":
                        return new e(new D(0, 0, 0, 1));
                    case "blanchedalmond":
                        return new e(new D(255, 235, 205, 1));
                    case "blue":
                        return new e(new D(0, 0, 255, 1));
                    case "blueviolet":
                        return new e(new D(138, 43, 226, 1));
                    case "brown":
                        return new e(new D(165, 42, 42, 1));
                    case "burlywood":
                        return new e(new D(222, 184, 135, 1));
                    case "cadetblue":
                        return new e(new D(95, 158, 160, 1));
                    case "chartreuse":
                        return new e(new D(127, 255, 0, 1));
                    case "chocolate":
                        return new e(new D(210, 105, 30, 1));
                    case "coral":
                        return new e(new D(255, 127, 80, 1));
                    case "cornflowerblue":
                        return new e(new D(100, 149, 237, 1));
                    case "cornsilk":
                        return new e(new D(255, 248, 220, 1));
                    case "crimson":
                        return new e(new D(220, 20, 60, 1));
                    case "cyan":
                        return new e(new D(0, 255, 255, 1));
                    case "darkblue":
                        return new e(new D(0, 0, 139, 1));
                    case "darkcyan":
                        return new e(new D(0, 139, 139, 1));
                    case "darkgoldenrod":
                        return new e(new D(184, 134, 11, 1));
                    case "darkgray":
                        return new e(new D(169, 169, 169, 1));
                    case "darkgreen":
                        return new e(new D(0, 100, 0, 1));
                    case "darkgrey":
                        return new e(new D(169, 169, 169, 1));
                    case "darkkhaki":
                        return new e(new D(189, 183, 107, 1));
                    case "darkmagenta":
                        return new e(new D(139, 0, 139, 1));
                    case "darkolivegreen":
                        return new e(new D(85, 107, 47, 1));
                    case "darkorange":
                        return new e(new D(255, 140, 0, 1));
                    case "darkorchid":
                        return new e(new D(153, 50, 204, 1));
                    case "darkred":
                        return new e(new D(139, 0, 0, 1));
                    case "darksalmon":
                        return new e(new D(233, 150, 122, 1));
                    case "darkseagreen":
                        return new e(new D(143, 188, 143, 1));
                    case "darkslateblue":
                        return new e(new D(72, 61, 139, 1));
                    case "darkslategray":
                        return new e(new D(47, 79, 79, 1));
                    case "darkslategrey":
                        return new e(new D(47, 79, 79, 1));
                    case "darkturquoise":
                        return new e(new D(0, 206, 209, 1));
                    case "darkviolet":
                        return new e(new D(148, 0, 211, 1));
                    case "deeppink":
                        return new e(new D(255, 20, 147, 1));
                    case "deepskyblue":
                        return new e(new D(0, 191, 255, 1));
                    case "dimgray":
                        return new e(new D(105, 105, 105, 1));
                    case "dimgrey":
                        return new e(new D(105, 105, 105, 1));
                    case "dodgerblue":
                        return new e(new D(30, 144, 255, 1));
                    case "firebrick":
                        return new e(new D(178, 34, 34, 1));
                    case "floralwhite":
                        return new e(new D(255, 250, 240, 1));
                    case "forestgreen":
                        return new e(new D(34, 139, 34, 1));
                    case "fuchsia":
                        return new e(new D(255, 0, 255, 1));
                    case "gainsboro":
                        return new e(new D(220, 220, 220, 1));
                    case "ghostwhite":
                        return new e(new D(248, 248, 255, 1));
                    case "gold":
                        return new e(new D(255, 215, 0, 1));
                    case "goldenrod":
                        return new e(new D(218, 165, 32, 1));
                    case "gray":
                        return new e(new D(128, 128, 128, 1));
                    case "green":
                        return new e(new D(0, 128, 0, 1));
                    case "greenyellow":
                        return new e(new D(173, 255, 47, 1));
                    case "grey":
                        return new e(new D(128, 128, 128, 1));
                    case "honeydew":
                        return new e(new D(240, 255, 240, 1));
                    case "hotpink":
                        return new e(new D(255, 105, 180, 1));
                    case "indianred":
                        return new e(new D(205, 92, 92, 1));
                    case "indigo":
                        return new e(new D(75, 0, 130, 1));
                    case "ivory":
                        return new e(new D(255, 255, 240, 1));
                    case "khaki":
                        return new e(new D(240, 230, 140, 1));
                    case "lavender":
                        return new e(new D(230, 230, 250, 1));
                    case "lavenderblush":
                        return new e(new D(255, 240, 245, 1));
                    case "lawngreen":
                        return new e(new D(124, 252, 0, 1));
                    case "lemonchiffon":
                        return new e(new D(255, 250, 205, 1));
                    case "lightblue":
                        return new e(new D(173, 216, 230, 1));
                    case "lightcoral":
                        return new e(new D(240, 128, 128, 1));
                    case "lightcyan":
                        return new e(new D(224, 255, 255, 1));
                    case "lightgoldenrodyellow":
                        return new e(new D(250, 250, 210, 1));
                    case "lightgray":
                        return new e(new D(211, 211, 211, 1));
                    case "lightgreen":
                        return new e(new D(144, 238, 144, 1));
                    case "lightgrey":
                        return new e(new D(211, 211, 211, 1));
                    case "lightpink":
                        return new e(new D(255, 182, 193, 1));
                    case "lightsalmon":
                        return new e(new D(255, 160, 122, 1));
                    case "lightseagreen":
                        return new e(new D(32, 178, 170, 1));
                    case "lightskyblue":
                        return new e(new D(135, 206, 250, 1));
                    case "lightslategray":
                        return new e(new D(119, 136, 153, 1));
                    case "lightslategrey":
                        return new e(new D(119, 136, 153, 1));
                    case "lightsteelblue":
                        return new e(new D(176, 196, 222, 1));
                    case "lightyellow":
                        return new e(new D(255, 255, 224, 1));
                    case "lime":
                        return new e(new D(0, 255, 0, 1));
                    case "limegreen":
                        return new e(new D(50, 205, 50, 1));
                    case "linen":
                        return new e(new D(250, 240, 230, 1));
                    case "magenta":
                        return new e(new D(255, 0, 255, 1));
                    case "maroon":
                        return new e(new D(128, 0, 0, 1));
                    case "mediumaquamarine":
                        return new e(new D(102, 205, 170, 1));
                    case "mediumblue":
                        return new e(new D(0, 0, 205, 1));
                    case "mediumorchid":
                        return new e(new D(186, 85, 211, 1));
                    case "mediumpurple":
                        return new e(new D(147, 112, 219, 1));
                    case "mediumseagreen":
                        return new e(new D(60, 179, 113, 1));
                    case "mediumslateblue":
                        return new e(new D(123, 104, 238, 1));
                    case "mediumspringgreen":
                        return new e(new D(0, 250, 154, 1));
                    case "mediumturquoise":
                        return new e(new D(72, 209, 204, 1));
                    case "mediumvioletred":
                        return new e(new D(199, 21, 133, 1));
                    case "midnightblue":
                        return new e(new D(25, 25, 112, 1));
                    case "mintcream":
                        return new e(new D(245, 255, 250, 1));
                    case "mistyrose":
                        return new e(new D(255, 228, 225, 1));
                    case "moccasin":
                        return new e(new D(255, 228, 181, 1));
                    case "navajowhite":
                        return new e(new D(255, 222, 173, 1));
                    case "navy":
                        return new e(new D(0, 0, 128, 1));
                    case "oldlace":
                        return new e(new D(253, 245, 230, 1));
                    case "olive":
                        return new e(new D(128, 128, 0, 1));
                    case "olivedrab":
                        return new e(new D(107, 142, 35, 1));
                    case "orange":
                        return new e(new D(255, 165, 0, 1));
                    case "orangered":
                        return new e(new D(255, 69, 0, 1));
                    case "orchid":
                        return new e(new D(218, 112, 214, 1));
                    case "palegoldenrod":
                        return new e(new D(238, 232, 170, 1));
                    case "palegreen":
                        return new e(new D(152, 251, 152, 1));
                    case "paleturquoise":
                        return new e(new D(175, 238, 238, 1));
                    case "palevioletred":
                        return new e(new D(219, 112, 147, 1));
                    case "papayawhip":
                        return new e(new D(255, 239, 213, 1));
                    case "peachpuff":
                        return new e(new D(255, 218, 185, 1));
                    case "peru":
                        return new e(new D(205, 133, 63, 1));
                    case "pink":
                        return new e(new D(255, 192, 203, 1));
                    case "plum":
                        return new e(new D(221, 160, 221, 1));
                    case "powderblue":
                        return new e(new D(176, 224, 230, 1));
                    case "purple":
                        return new e(new D(128, 0, 128, 1));
                    case "rebeccapurple":
                        return new e(new D(102, 51, 153, 1));
                    case "red":
                        return new e(new D(255, 0, 0, 1));
                    case "rosybrown":
                        return new e(new D(188, 143, 143, 1));
                    case "royalblue":
                        return new e(new D(65, 105, 225, 1));
                    case "saddlebrown":
                        return new e(new D(139, 69, 19, 1));
                    case "salmon":
                        return new e(new D(250, 128, 114, 1));
                    case "sandybrown":
                        return new e(new D(244, 164, 96, 1));
                    case "seagreen":
                        return new e(new D(46, 139, 87, 1));
                    case "seashell":
                        return new e(new D(255, 245, 238, 1));
                    case "sienna":
                        return new e(new D(160, 82, 45, 1));
                    case "silver":
                        return new e(new D(192, 192, 192, 1));
                    case "skyblue":
                        return new e(new D(135, 206, 235, 1));
                    case "slateblue":
                        return new e(new D(106, 90, 205, 1));
                    case "slategray":
                        return new e(new D(112, 128, 144, 1));
                    case "slategrey":
                        return new e(new D(112, 128, 144, 1));
                    case "snow":
                        return new e(new D(255, 250, 250, 1));
                    case "springgreen":
                        return new e(new D(0, 255, 127, 1));
                    case "steelblue":
                        return new e(new D(70, 130, 180, 1));
                    case "tan":
                        return new e(new D(210, 180, 140, 1));
                    case "teal":
                        return new e(new D(0, 128, 128, 1));
                    case "thistle":
                        return new e(new D(216, 191, 216, 1));
                    case "tomato":
                        return new e(new D(255, 99, 71, 1));
                    case "turquoise":
                        return new e(new D(64, 224, 208, 1));
                    case "violet":
                        return new e(new D(238, 130, 238, 1));
                    case "wheat":
                        return new e(new D(245, 222, 179, 1));
                    case "white":
                        return new e(new D(255, 255, 255, 1));
                    case "whitesmoke":
                        return new e(new D(245, 245, 245, 1));
                    case "yellow":
                        return new e(new D(255, 255, 0, 1));
                    case "yellowgreen":
                        return new e(new D(154, 205, 50, 1));
                    default:
                        return null;
                }
            }
            function S(y) {
                const b = y.length;
                if (b === 0 || y.charCodeAt(0) !== 35) return null;
                if (b === 7) {
                    const I = 16 * k(y.charCodeAt(1)) + k(y.charCodeAt(2)), G = 16 * k(y.charCodeAt(3)) + k(y.charCodeAt(4)), U = 16 * k(y.charCodeAt(5)) + k(y.charCodeAt(6));
                    return new e(new D(I, G, U, 1));
                }
                if (b === 9) {
                    const I = 16 * k(y.charCodeAt(1)) + k(y.charCodeAt(2)), G = 16 * k(y.charCodeAt(3)) + k(y.charCodeAt(4)), U = 16 * k(y.charCodeAt(5)) + k(y.charCodeAt(6)), X = 16 * k(y.charCodeAt(7)) + k(y.charCodeAt(8));
                    return new e(new D(I, G, U, X / 255));
                }
                if (b === 4) {
                    const I = k(y.charCodeAt(1)), G = k(y.charCodeAt(2)), U = k(y.charCodeAt(3));
                    return new e(new D(16 * I + I, 16 * G + G, 16 * U + U));
                }
                if (b === 5) {
                    const I = k(y.charCodeAt(1)), G = k(y.charCodeAt(2)), U = k(y.charCodeAt(3)), X = k(y.charCodeAt(4));
                    return new e(new D(16 * I + I, 16 * G + G, 16 * U + U, (16 * X + X) / 255));
                }
                return null;
            }
            s.parseHex = S;
            function k(y) {
                switch(y){
                    case 48:
                        return 0;
                    case 49:
                        return 1;
                    case 50:
                        return 2;
                    case 51:
                        return 3;
                    case 52:
                        return 4;
                    case 53:
                        return 5;
                    case 54:
                        return 6;
                    case 55:
                        return 7;
                    case 56:
                        return 8;
                    case 57:
                        return 9;
                    case 97:
                        return 10;
                    case 65:
                        return 10;
                    case 98:
                        return 11;
                    case 66:
                        return 11;
                    case 99:
                        return 12;
                    case 67:
                        return 12;
                    case 100:
                        return 13;
                    case 68:
                        return 13;
                    case 101:
                        return 14;
                    case 69:
                        return 14;
                    case 102:
                        return 15;
                    case 70:
                        return 15;
                }
                return 0;
            }
        })(r = n.CSS || (n.CSS = {}));
    })(t = e.Format || (e.Format = {}));
})(dp || (dp = {}));

}

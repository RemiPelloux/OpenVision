import { E } from "./tslib.es6.js";
import { Bbt } from "./ze.js";
var la, Ubt, Itt, TQ, ls;
export { Itt, TQ, Ubt, la, ls };
var __wakaru__b_initialized = false;
export function _b() {
if (__wakaru__b_initialized) return;
__wakaru__b_initialized = true;
"use strict";
E(), la = class {
    constructor(t, e, n, i = 1){
        this._rgbaBrand = void 0, this.r = Math.min(255, Math.max(0, t)) | 0, this.g = Math.min(255, Math.max(0, e)) | 0, this.b = Math.min(255, Math.max(0, n)) | 0, this.a = Bbt(Math.max(Math.min(1, i), 0), 3);
    }
    static equals(t, e) {
        return t.r === e.r && t.g === e.g && t.b === e.b && t.a === e.a;
    }
}, Ubt = class SZi {
    constructor(e, n, i, r){
        this._hslaBrand = void 0, this.h = Math.max(Math.min(360, e), 0) | 0, this.s = Bbt(Math.max(Math.min(1, n), 0), 3), this.l = Bbt(Math.max(Math.min(1, i), 0), 3), this.a = Bbt(Math.max(Math.min(1, r), 0), 3);
    }
    static equals(e, n) {
        return e.h === n.h && e.s === n.s && e.l === n.l && e.a === n.a;
    }
    static fromRGBA(e) {
        const n = e.r / 255, i = e.g / 255, r = e.b / 255, s = e.a, o = Math.max(n, i, r), a = Math.min(n, i, r);
        let l = 0, c = 0;
        const u = (a + o) / 2, d = o - a;
        if (d > 0) {
            switch(c = Math.min(u <= .5 ? d / (2 * u) : d / (2 - 2 * u), 1), o){
                case n:
                    l = (i - r) / d + (i < r ? 6 : 0);
                    break;
                case i:
                    l = (r - n) / d + 2;
                    break;
                case r:
                    l = (n - i) / d + 4;
                    break;
            }
            l *= 60, l = Math.round(l);
        }
        return new SZi(l, c, u, s);
    }
    static _hue2rgb(e, n, i) {
        return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? e + (n - e) * 6 * i : i < 1 / 2 ? n : i < 2 / 3 ? e + (n - e) * (2 / 3 - i) * 6 : e;
    }
    static toRGBA(e) {
        const n = e.h / 360, { s: i, l: r, a: s } = e;
        let o, a, l;
        if (i === 0) o = a = l = r;
        else {
            const c = r < .5 ? r * (1 + i) : r + i - r * i, u = 2 * r - c;
            o = SZi._hue2rgb(u, c, n + 1 / 3), a = SZi._hue2rgb(u, c, n), l = SZi._hue2rgb(u, c, n - 1 / 3);
        }
        return new la(Math.round(o * 255), Math.round(a * 255), Math.round(l * 255), s);
    }
}, Itt = class SAb {
    constructor(e, n, i, r){
        this._hsvaBrand = void 0, this.h = Math.max(Math.min(360, e), 0) | 0, this.s = Bbt(Math.max(Math.min(1, n), 0), 3), this.v = Bbt(Math.max(Math.min(1, i), 0), 3), this.a = Bbt(Math.max(Math.min(1, r), 0), 3);
    }
    static equals(e, n) {
        return e.h === n.h && e.s === n.s && e.v === n.v && e.a === n.a;
    }
    static fromRGBA(e) {
        const n = e.r / 255, i = e.g / 255, r = e.b / 255, s = Math.max(n, i, r), o = Math.min(n, i, r), a = s - o, l = s === 0 ? 0 : a / s;
        let c;
        return a === 0 ? c = 0 : s === n ? c = ((i - r) / a % 6 + 6) % 6 : s === i ? c = (r - n) / a + 2 : c = (n - i) / a + 4, new SAb(Math.round(c * 60), l, s, e.a);
    }
    static toRGBA(e) {
        const { h: n, s: i, v: r, a: s } = e, o = r * i, a = o * (1 - Math.abs(n / 60 % 2 - 1)), l = r - o;
        let [c, u, d] = [
            0,
            0,
            0
        ];
        return n < 60 ? (c = o, u = a) : n < 120 ? (c = a, u = o) : n < 180 ? (u = o, d = a) : n < 240 ? (u = a, d = o) : n < 300 ? (c = a, d = o) : n <= 360 && (c = o, d = a), c = Math.round((c + l) * 255), u = Math.round((u + l) * 255), d = Math.round((d + l) * 255), new la(c, u, d, s);
    }
}, TQ = class fq {
    static fromHex(e) {
        return fq.Format.CSS.parseHex(e) || fq.red;
    }
    static equals(e, n) {
        return !e && !n ? !0 : !e || !n ? !1 : e.equals(n);
    }
    get hsla() {
        return this._hsla ? this._hsla : Ubt.fromRGBA(this.rgba);
    }
    get hsva() {
        return this._hsva ? this._hsva : Itt.fromRGBA(this.rgba);
    }
    constructor(e){
        if (e) if (e instanceof la) this.rgba = e;
        else if (e instanceof Ubt) this._hsla = e, this.rgba = Ubt.toRGBA(e);
        else if (e instanceof Itt) this._hsva = e, this.rgba = Itt.toRGBA(e);
        else throw new Error("Invalid color ctor argument");
        else throw new Error("Color needs a value");
    }
    equals(e) {
        return !!e && la.equals(this.rgba, e.rgba) && Ubt.equals(this.hsla, e.hsla) && Itt.equals(this.hsva, e.hsva);
    }
    getRelativeLuminance() {
        const e = fq._relativeLuminanceForComponent(this.rgba.r), n = fq._relativeLuminanceForComponent(this.rgba.g), i = fq._relativeLuminanceForComponent(this.rgba.b), r = .2126 * e + .7152 * n + .0722 * i;
        return Bbt(r, 4);
    }
    reduceRelativeLuminace(e, n) {
        let { r: i, g: r, b: s } = e.rgba, o = this.getContrastRatio(e);
        for(; o < n && (i > 0 || r > 0 || s > 0);)i -= Math.max(0, Math.ceil(i * .1)), r -= Math.max(0, Math.ceil(r * .1)), s -= Math.max(0, Math.ceil(s * .1)), o = this.getContrastRatio(new fq(new la(i, r, s)));
        return new fq(new la(i, r, s));
    }
    increaseRelativeLuminace(e, n) {
        let { r: i, g: r, b: s } = e.rgba, o = this.getContrastRatio(e);
        for(; o < n && (i < 255 || r < 255 || s < 255);)i = Math.min(255, i + Math.ceil((255 - i) * .1)), r = Math.min(255, r + Math.ceil((255 - r) * .1)), s = Math.min(255, s + Math.ceil((255 - s) * .1)), o = this.getContrastRatio(new fq(new la(i, r, s)));
        return new fq(new la(i, r, s));
    }
    static _relativeLuminanceForComponent(e) {
        const n = e / 255;
        return n <= .03928 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4);
    }
    getContrastRatio(e) {
        const n = this.getRelativeLuminance(), i = e.getRelativeLuminance();
        return n > i ? (n + .05) / (i + .05) : (i + .05) / (n + .05);
    }
    isDarker() {
        return (this.rgba.r * 299 + this.rgba.g * 587 + this.rgba.b * 114) / 1e3 < 128;
    }
    isLighter() {
        return (this.rgba.r * 299 + this.rgba.g * 587 + this.rgba.b * 114) / 1e3 >= 128;
    }
    isLighterThan(e) {
        const n = this.getRelativeLuminance(), i = e.getRelativeLuminance();
        return n > i;
    }
    isDarkerThan(e) {
        const n = this.getRelativeLuminance(), i = e.getRelativeLuminance();
        return n < i;
    }
    ensureConstrast(e, n) {
        const i = this.getRelativeLuminance(), r = e.getRelativeLuminance();
        if (this.getContrastRatio(e) < n) {
            if (r < i) {
                const l = this.reduceRelativeLuminace(e, n), c = this.getContrastRatio(l);
                if (c < n) {
                    const u = this.increaseRelativeLuminace(e, n), d = this.getContrastRatio(u);
                    return c > d ? l : u;
                }
                return l;
            }
            const o = this.increaseRelativeLuminace(e, n), a = this.getContrastRatio(o);
            if (a < n) {
                const l = this.reduceRelativeLuminace(e, n), c = this.getContrastRatio(l);
                return a > c ? o : l;
            }
            return o;
        }
        return e;
    }
    lighten(e) {
        return new fq(new Ubt(this.hsla.h, this.hsla.s, this.hsla.l + this.hsla.l * e, this.hsla.a));
    }
    darken(e) {
        return new fq(new Ubt(this.hsla.h, this.hsla.s, this.hsla.l - this.hsla.l * e, this.hsla.a));
    }
    transparent(e) {
        const { r: n, g: i, b: r, a: s } = this.rgba;
        return new fq(new la(n, i, r, s * e));
    }
    isTransparent() {
        return this.rgba.a === 0;
    }
    isOpaque() {
        return this.rgba.a === 1;
    }
    opposite() {
        return new fq(new la(255 - this.rgba.r, 255 - this.rgba.g, 255 - this.rgba.b, this.rgba.a));
    }
    blend(e) {
        const n = e.rgba, i = this.rgba.a, r = n.a, s = i + r * (1 - i);
        if (s < 1e-6) return fq.transparent;
        const o = this.rgba.r * i / s + n.r * r * (1 - i) / s, a = this.rgba.g * i / s + n.g * r * (1 - i) / s, l = this.rgba.b * i / s + n.b * r * (1 - i) / s;
        return new fq(new la(o, a, l, s));
    }
    makeOpaque(e) {
        if (this.isOpaque() || e.rgba.a !== 1) return this;
        const { r: n, g: i, b: r, a: s } = this.rgba;
        return new fq(new la(e.rgba.r - s * (e.rgba.r - n), e.rgba.g - s * (e.rgba.g - i), e.rgba.b - s * (e.rgba.b - r), 1));
    }
    flatten(...e) {
        const n = e.reduceRight((i, r)=>fq._flatten(r, i));
        return fq._flatten(this, n);
    }
    static _flatten(e, n) {
        const i = 1 - e.rgba.a;
        return new fq(new la(i * n.rgba.r + e.rgba.a * e.rgba.r, i * n.rgba.g + e.rgba.a * e.rgba.g, i * n.rgba.b + e.rgba.a * e.rgba.b));
    }
    toString() {
        return this._toString || (this._toString = fq.Format.CSS.format(this)), this._toString;
    }
    toNumber32Bit() {
        return this._toNumber32Bit || (this._toNumber32Bit = (this.rgba.r << 24 | this.rgba.g << 16 | this.rgba.b << 8 | this.rgba.a * 255 << 0) >>> 0), this._toNumber32Bit;
    }
    static getLighterColor(e, n, i) {
        if (e.isLighterThan(n)) return e;
        i = i || .5;
        const r = e.getRelativeLuminance(), s = n.getRelativeLuminance();
        return i = i * (s - r) / s, e.lighten(i);
    }
    static getDarkerColor(e, n, i) {
        if (e.isDarkerThan(n)) return e;
        i = i || .5;
        const r = e.getRelativeLuminance(), s = n.getRelativeLuminance();
        return i = i * (r - s) / r, e.darken(i);
    }
}, TQ.white = new TQ(new la(255, 255, 255, 1)), TQ.black = new TQ(new la(0, 0, 0, 1)), TQ.red = new TQ(new la(255, 0, 0, 1)), TQ.blue = new TQ(new la(0, 0, 255, 1)), TQ.green = new TQ(new la(0, 255, 0, 1)), TQ.cyan = new TQ(new la(0, 255, 255, 1)), TQ.lightgrey = new TQ(new la(211, 211, 211, 1)), TQ.transparent = new TQ(new la(0, 0, 0, 0)), ls = TQ, ((t)=>{
    let e;
    ((n)=>{
        let i;
        ((r)=>{
            function s(b) {
                return b.rgba.a === 1 ? `rgb(${b.rgba.r}, ${b.rgba.g}, ${b.rgba.b})` : t.Format.CSS.formatRGBA(b);
            }
            r.formatRGB = s;
            function o(b) {
                return `rgba(${b.rgba.r}, ${b.rgba.g}, ${b.rgba.b}, ${+b.rgba.a.toFixed(2)})`;
            }
            r.formatRGBA = o;
            function a(b) {
                return b.hsla.a === 1 ? `hsl(${b.hsla.h}, ${(b.hsla.s * 100).toFixed(2)}%, ${(b.hsla.l * 100).toFixed(2)}%)` : t.Format.CSS.formatHSLA(b);
            }
            r.formatHSL = a;
            function l(b) {
                return `hsla(${b.hsla.h}, ${(b.hsla.s * 100).toFixed(2)}%, ${(b.hsla.l * 100).toFixed(2)}%, ${b.hsla.a.toFixed(2)})`;
            }
            r.formatHSLA = l;
            function c(b) {
                const y = b.toString(16);
                return y.length !== 2 ? "0" + y : y;
            }
            function u(b) {
                return `#${c(b.rgba.r)}${c(b.rgba.g)}${c(b.rgba.b)}`;
            }
            r.formatHex = u;
            function d(b, y = !1) {
                return y && b.rgba.a === 1 ? t.Format.CSS.formatHex(b) : `#${c(b.rgba.r)}${c(b.rgba.g)}${c(b.rgba.b)}${c(Math.round(b.rgba.a * 255))}`;
            }
            r.formatHexA = d;
            function h(b) {
                return b.isOpaque() ? t.Format.CSS.formatHex(b) : t.Format.CSS.formatRGBA(b);
            }
            r.format = h;
            function p(b) {
                if (b === "transparent") return t.transparent;
                if (b.startsWith("#")) return f(b);
                if (b.startsWith("rgba(")) {
                    const y = b.match(/rgba\((?<r>(?:\+|-)?\d+), *(?<g>(?:\+|-)?\d+), *(?<b>(?:\+|-)?\d+), *(?<a>(?:\+|-)?\d+(\.\d+)?)\)/);
                    if (!y) throw new Error("Invalid color format " + b);
                    const S = parseInt(y.groups?.r ?? "0"), k = parseInt(y.groups?.g ?? "0"), C = parseInt(y.groups?.b ?? "0"), T = parseFloat(y.groups?.a ?? "0");
                    return new t(new la(S, k, C, T));
                }
                if (b.startsWith("rgb(")) {
                    const y = b.match(/rgb\((?<r>(?:\+|-)?\d+), *(?<g>(?:\+|-)?\d+), *(?<b>(?:\+|-)?\d+)\)/);
                    if (!y) throw new Error("Invalid color format " + b);
                    const S = parseInt(y.groups?.r ?? "0"), k = parseInt(y.groups?.g ?? "0"), C = parseInt(y.groups?.b ?? "0");
                    return new t(new la(S, k, C));
                }
                return g(b);
            }
            r.parse = p;
            function g(b) {
                switch(b){
                    case "aliceblue":
                        return new t(new la(240, 248, 255, 1));
                    case "antiquewhite":
                        return new t(new la(250, 235, 215, 1));
                    case "aqua":
                        return new t(new la(0, 255, 255, 1));
                    case "aquamarine":
                        return new t(new la(127, 255, 212, 1));
                    case "azure":
                        return new t(new la(240, 255, 255, 1));
                    case "beige":
                        return new t(new la(245, 245, 220, 1));
                    case "bisque":
                        return new t(new la(255, 228, 196, 1));
                    case "black":
                        return new t(new la(0, 0, 0, 1));
                    case "blanchedalmond":
                        return new t(new la(255, 235, 205, 1));
                    case "blue":
                        return new t(new la(0, 0, 255, 1));
                    case "blueviolet":
                        return new t(new la(138, 43, 226, 1));
                    case "brown":
                        return new t(new la(165, 42, 42, 1));
                    case "burlywood":
                        return new t(new la(222, 184, 135, 1));
                    case "cadetblue":
                        return new t(new la(95, 158, 160, 1));
                    case "chartreuse":
                        return new t(new la(127, 255, 0, 1));
                    case "chocolate":
                        return new t(new la(210, 105, 30, 1));
                    case "coral":
                        return new t(new la(255, 127, 80, 1));
                    case "cornflowerblue":
                        return new t(new la(100, 149, 237, 1));
                    case "cornsilk":
                        return new t(new la(255, 248, 220, 1));
                    case "crimson":
                        return new t(new la(220, 20, 60, 1));
                    case "cyan":
                        return new t(new la(0, 255, 255, 1));
                    case "darkblue":
                        return new t(new la(0, 0, 139, 1));
                    case "darkcyan":
                        return new t(new la(0, 139, 139, 1));
                    case "darkgoldenrod":
                        return new t(new la(184, 134, 11, 1));
                    case "darkgray":
                        return new t(new la(169, 169, 169, 1));
                    case "darkgreen":
                        return new t(new la(0, 100, 0, 1));
                    case "darkgrey":
                        return new t(new la(169, 169, 169, 1));
                    case "darkkhaki":
                        return new t(new la(189, 183, 107, 1));
                    case "darkmagenta":
                        return new t(new la(139, 0, 139, 1));
                    case "darkolivegreen":
                        return new t(new la(85, 107, 47, 1));
                    case "darkorange":
                        return new t(new la(255, 140, 0, 1));
                    case "darkorchid":
                        return new t(new la(153, 50, 204, 1));
                    case "darkred":
                        return new t(new la(139, 0, 0, 1));
                    case "darksalmon":
                        return new t(new la(233, 150, 122, 1));
                    case "darkseagreen":
                        return new t(new la(143, 188, 143, 1));
                    case "darkslateblue":
                        return new t(new la(72, 61, 139, 1));
                    case "darkslategray":
                        return new t(new la(47, 79, 79, 1));
                    case "darkslategrey":
                        return new t(new la(47, 79, 79, 1));
                    case "darkturquoise":
                        return new t(new la(0, 206, 209, 1));
                    case "darkviolet":
                        return new t(new la(148, 0, 211, 1));
                    case "deeppink":
                        return new t(new la(255, 20, 147, 1));
                    case "deepskyblue":
                        return new t(new la(0, 191, 255, 1));
                    case "dimgray":
                        return new t(new la(105, 105, 105, 1));
                    case "dimgrey":
                        return new t(new la(105, 105, 105, 1));
                    case "dodgerblue":
                        return new t(new la(30, 144, 255, 1));
                    case "firebrick":
                        return new t(new la(178, 34, 34, 1));
                    case "floralwhite":
                        return new t(new la(255, 250, 240, 1));
                    case "forestgreen":
                        return new t(new la(34, 139, 34, 1));
                    case "fuchsia":
                        return new t(new la(255, 0, 255, 1));
                    case "gainsboro":
                        return new t(new la(220, 220, 220, 1));
                    case "ghostwhite":
                        return new t(new la(248, 248, 255, 1));
                    case "gold":
                        return new t(new la(255, 215, 0, 1));
                    case "goldenrod":
                        return new t(new la(218, 165, 32, 1));
                    case "gray":
                        return new t(new la(128, 128, 128, 1));
                    case "green":
                        return new t(new la(0, 128, 0, 1));
                    case "greenyellow":
                        return new t(new la(173, 255, 47, 1));
                    case "grey":
                        return new t(new la(128, 128, 128, 1));
                    case "honeydew":
                        return new t(new la(240, 255, 240, 1));
                    case "hotpink":
                        return new t(new la(255, 105, 180, 1));
                    case "indianred":
                        return new t(new la(205, 92, 92, 1));
                    case "indigo":
                        return new t(new la(75, 0, 130, 1));
                    case "ivory":
                        return new t(new la(255, 255, 240, 1));
                    case "khaki":
                        return new t(new la(240, 230, 140, 1));
                    case "lavender":
                        return new t(new la(230, 230, 250, 1));
                    case "lavenderblush":
                        return new t(new la(255, 240, 245, 1));
                    case "lawngreen":
                        return new t(new la(124, 252, 0, 1));
                    case "lemonchiffon":
                        return new t(new la(255, 250, 205, 1));
                    case "lightblue":
                        return new t(new la(173, 216, 230, 1));
                    case "lightcoral":
                        return new t(new la(240, 128, 128, 1));
                    case "lightcyan":
                        return new t(new la(224, 255, 255, 1));
                    case "lightgoldenrodyellow":
                        return new t(new la(250, 250, 210, 1));
                    case "lightgray":
                        return new t(new la(211, 211, 211, 1));
                    case "lightgreen":
                        return new t(new la(144, 238, 144, 1));
                    case "lightgrey":
                        return new t(new la(211, 211, 211, 1));
                    case "lightpink":
                        return new t(new la(255, 182, 193, 1));
                    case "lightsalmon":
                        return new t(new la(255, 160, 122, 1));
                    case "lightseagreen":
                        return new t(new la(32, 178, 170, 1));
                    case "lightskyblue":
                        return new t(new la(135, 206, 250, 1));
                    case "lightslategray":
                        return new t(new la(119, 136, 153, 1));
                    case "lightslategrey":
                        return new t(new la(119, 136, 153, 1));
                    case "lightsteelblue":
                        return new t(new la(176, 196, 222, 1));
                    case "lightyellow":
                        return new t(new la(255, 255, 224, 1));
                    case "lime":
                        return new t(new la(0, 255, 0, 1));
                    case "limegreen":
                        return new t(new la(50, 205, 50, 1));
                    case "linen":
                        return new t(new la(250, 240, 230, 1));
                    case "magenta":
                        return new t(new la(255, 0, 255, 1));
                    case "maroon":
                        return new t(new la(128, 0, 0, 1));
                    case "mediumaquamarine":
                        return new t(new la(102, 205, 170, 1));
                    case "mediumblue":
                        return new t(new la(0, 0, 205, 1));
                    case "mediumorchid":
                        return new t(new la(186, 85, 211, 1));
                    case "mediumpurple":
                        return new t(new la(147, 112, 219, 1));
                    case "mediumseagreen":
                        return new t(new la(60, 179, 113, 1));
                    case "mediumslateblue":
                        return new t(new la(123, 104, 238, 1));
                    case "mediumspringgreen":
                        return new t(new la(0, 250, 154, 1));
                    case "mediumturquoise":
                        return new t(new la(72, 209, 204, 1));
                    case "mediumvioletred":
                        return new t(new la(199, 21, 133, 1));
                    case "midnightblue":
                        return new t(new la(25, 25, 112, 1));
                    case "mintcream":
                        return new t(new la(245, 255, 250, 1));
                    case "mistyrose":
                        return new t(new la(255, 228, 225, 1));
                    case "moccasin":
                        return new t(new la(255, 228, 181, 1));
                    case "navajowhite":
                        return new t(new la(255, 222, 173, 1));
                    case "navy":
                        return new t(new la(0, 0, 128, 1));
                    case "oldlace":
                        return new t(new la(253, 245, 230, 1));
                    case "olive":
                        return new t(new la(128, 128, 0, 1));
                    case "olivedrab":
                        return new t(new la(107, 142, 35, 1));
                    case "orange":
                        return new t(new la(255, 165, 0, 1));
                    case "orangered":
                        return new t(new la(255, 69, 0, 1));
                    case "orchid":
                        return new t(new la(218, 112, 214, 1));
                    case "palegoldenrod":
                        return new t(new la(238, 232, 170, 1));
                    case "palegreen":
                        return new t(new la(152, 251, 152, 1));
                    case "paleturquoise":
                        return new t(new la(175, 238, 238, 1));
                    case "palevioletred":
                        return new t(new la(219, 112, 147, 1));
                    case "papayawhip":
                        return new t(new la(255, 239, 213, 1));
                    case "peachpuff":
                        return new t(new la(255, 218, 185, 1));
                    case "peru":
                        return new t(new la(205, 133, 63, 1));
                    case "pink":
                        return new t(new la(255, 192, 203, 1));
                    case "plum":
                        return new t(new la(221, 160, 221, 1));
                    case "powderblue":
                        return new t(new la(176, 224, 230, 1));
                    case "purple":
                        return new t(new la(128, 0, 128, 1));
                    case "rebeccapurple":
                        return new t(new la(102, 51, 153, 1));
                    case "red":
                        return new t(new la(255, 0, 0, 1));
                    case "rosybrown":
                        return new t(new la(188, 143, 143, 1));
                    case "royalblue":
                        return new t(new la(65, 105, 225, 1));
                    case "saddlebrown":
                        return new t(new la(139, 69, 19, 1));
                    case "salmon":
                        return new t(new la(250, 128, 114, 1));
                    case "sandybrown":
                        return new t(new la(244, 164, 96, 1));
                    case "seagreen":
                        return new t(new la(46, 139, 87, 1));
                    case "seashell":
                        return new t(new la(255, 245, 238, 1));
                    case "sienna":
                        return new t(new la(160, 82, 45, 1));
                    case "silver":
                        return new t(new la(192, 192, 192, 1));
                    case "skyblue":
                        return new t(new la(135, 206, 235, 1));
                    case "slateblue":
                        return new t(new la(106, 90, 205, 1));
                    case "slategray":
                        return new t(new la(112, 128, 144, 1));
                    case "slategrey":
                        return new t(new la(112, 128, 144, 1));
                    case "snow":
                        return new t(new la(255, 250, 250, 1));
                    case "springgreen":
                        return new t(new la(0, 255, 127, 1));
                    case "steelblue":
                        return new t(new la(70, 130, 180, 1));
                    case "tan":
                        return new t(new la(210, 180, 140, 1));
                    case "teal":
                        return new t(new la(0, 128, 128, 1));
                    case "thistle":
                        return new t(new la(216, 191, 216, 1));
                    case "tomato":
                        return new t(new la(255, 99, 71, 1));
                    case "turquoise":
                        return new t(new la(64, 224, 208, 1));
                    case "violet":
                        return new t(new la(238, 130, 238, 1));
                    case "wheat":
                        return new t(new la(245, 222, 179, 1));
                    case "white":
                        return new t(new la(255, 255, 255, 1));
                    case "whitesmoke":
                        return new t(new la(245, 245, 245, 1));
                    case "yellow":
                        return new t(new la(255, 255, 0, 1));
                    case "yellowgreen":
                        return new t(new la(154, 205, 50, 1));
                    default:
                        return null;
                }
            }
            function f(b) {
                const y = b.length;
                if (y === 0 || b.charCodeAt(0) !== 35) return null;
                if (y === 7) {
                    const S = 16 * _(b.charCodeAt(1)) + _(b.charCodeAt(2)), k = 16 * _(b.charCodeAt(3)) + _(b.charCodeAt(4)), C = 16 * _(b.charCodeAt(5)) + _(b.charCodeAt(6));
                    return new t(new la(S, k, C, 1));
                }
                if (y === 9) {
                    const S = 16 * _(b.charCodeAt(1)) + _(b.charCodeAt(2)), k = 16 * _(b.charCodeAt(3)) + _(b.charCodeAt(4)), C = 16 * _(b.charCodeAt(5)) + _(b.charCodeAt(6)), T = 16 * _(b.charCodeAt(7)) + _(b.charCodeAt(8));
                    return new t(new la(S, k, C, T / 255));
                }
                if (y === 4) {
                    const S = _(b.charCodeAt(1)), k = _(b.charCodeAt(2)), C = _(b.charCodeAt(3));
                    return new t(new la(16 * S + S, 16 * k + k, 16 * C + C));
                }
                if (y === 5) {
                    const S = _(b.charCodeAt(1)), k = _(b.charCodeAt(2)), C = _(b.charCodeAt(3)), T = _(b.charCodeAt(4));
                    return new t(new la(16 * S + S, 16 * k + k, 16 * C + C, (16 * T + T) / 255));
                }
                return null;
            }
            r.parseHex = f;
            function _(b) {
                switch(b){
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
        })(i = n.CSS || (n.CSS = {}));
    })(e = t.Format || (t.Format = {}));
})(ls || (ls = {}));

}

import { oze } from "./qIc.js";
import { x } from "./tslib.es6.js";
var $s, aze, xBe, sW, Ci;
export { $s, Ci, aze, sW, xBe };
var __wakaru_Sm_initialized = false;
export function Sm() {
if (__wakaru_Sm_initialized) return;
__wakaru_Sm_initialized = true;
"use strict";
x(), $s = class {
    constructor(e, t, n, i = 1){
        this._rgbaBrand = void 0, this.r = Math.min(255, Math.max(0, e)) | 0, this.g = Math.min(255, Math.max(0, t)) | 0, this.b = Math.min(255, Math.max(0, n)) | 0, this.a = oze(Math.max(Math.min(1, i), 0), 3);
    }
    static equals(e, t) {
        return e.r === t.r && e.g === t.g && e.b === t.b && e.a === t.a;
    }
}, aze = class FXn {
    constructor(t, n, i, r){
        this._hslaBrand = void 0, this.h = Math.max(Math.min(360, t), 0) | 0, this.s = oze(Math.max(Math.min(1, n), 0), 3), this.l = oze(Math.max(Math.min(1, i), 0), 3), this.a = oze(Math.max(Math.min(1, r), 0), 3);
    }
    static equals(t, n) {
        return t.h === n.h && t.s === n.s && t.l === n.l && t.a === n.a;
    }
    static fromRGBA(t) {
        const n = t.r / 255, i = t.g / 255, r = t.b / 255, s = t.a, o = Math.max(n, i, r), a = Math.min(n, i, r);
        let c = 0, l = 0;
        const u = (a + o) / 2, h = o - a;
        if (h > 0) {
            switch(l = Math.min(u <= .5 ? h / (2 * u) : h / (2 - 2 * u), 1), o){
                case n:
                    c = (i - r) / h + (i < r ? 6 : 0);
                    break;
                case i:
                    c = (r - n) / h + 2;
                    break;
                case r:
                    c = (n - i) / h + 4;
                    break;
            }
            c *= 60, c = Math.round(c);
        }
        return new FXn(c, l, u, s);
    }
    static _hue2rgb(t, n, i) {
        return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? t + (n - t) * 6 * i : i < 1 / 2 ? n : i < 2 / 3 ? t + (n - t) * (2 / 3 - i) * 6 : t;
    }
    static toRGBA(t) {
        const n = t.h / 360, { s: i, l: r, a: s } = t;
        let o, a, c;
        if (i === 0) o = a = c = r;
        else {
            const l = r < .5 ? r * (1 + i) : r + i - r * i, u = 2 * r - l;
            o = FXn._hue2rgb(u, l, n + 1 / 3), a = FXn._hue2rgb(u, l, n), c = FXn._hue2rgb(u, l, n - 1 / 3);
        }
        return new $s(Math.round(o * 255), Math.round(a * 255), Math.round(c * 255), s);
    }
}, xBe = class zSm {
    constructor(t, n, i, r){
        this._hsvaBrand = void 0, this.h = Math.max(Math.min(360, t), 0) | 0, this.s = oze(Math.max(Math.min(1, n), 0), 3), this.v = oze(Math.max(Math.min(1, i), 0), 3), this.a = oze(Math.max(Math.min(1, r), 0), 3);
    }
    static equals(t, n) {
        return t.h === n.h && t.s === n.s && t.v === n.v && t.a === n.a;
    }
    static fromRGBA(t) {
        const n = t.r / 255, i = t.g / 255, r = t.b / 255, s = Math.max(n, i, r), o = Math.min(n, i, r), a = s - o, c = s === 0 ? 0 : a / s;
        let l;
        return a === 0 ? l = 0 : s === n ? l = ((i - r) / a % 6 + 6) % 6 : s === i ? l = (r - n) / a + 2 : l = (n - i) / a + 4, new zSm(Math.round(l * 60), c, s, t.a);
    }
    static toRGBA(t) {
        const { h: n, s: i, v: r, a: s } = t, o = r * i, a = o * (1 - Math.abs(n / 60 % 2 - 1)), c = r - o;
        let [l, u, h] = [
            0,
            0,
            0
        ];
        return n < 60 ? (l = o, u = a) : n < 120 ? (l = a, u = o) : n < 180 ? (u = o, h = a) : n < 240 ? (u = a, h = o) : n < 300 ? (l = a, h = o) : n <= 360 && (l = o, h = a), l = Math.round((l + c) * 255), u = Math.round((u + c) * 255), h = Math.round((h + c) * 255), new $s(l, u, h, s);
    }
}, sW = class C4 {
    static fromHex(t) {
        return C4.Format.CSS.parseHex(t) || C4.red;
    }
    static equals(t, n) {
        return !t && !n ? !0 : !t || !n ? !1 : t.equals(n);
    }
    get hsla() {
        return this._hsla ? this._hsla : aze.fromRGBA(this.rgba);
    }
    get hsva() {
        return this._hsva ? this._hsva : xBe.fromRGBA(this.rgba);
    }
    constructor(t){
        if (t) if (t instanceof $s) this.rgba = t;
        else if (t instanceof aze) this._hsla = t, this.rgba = aze.toRGBA(t);
        else if (t instanceof xBe) this._hsva = t, this.rgba = xBe.toRGBA(t);
        else throw new Error("Invalid color ctor argument");
        else throw new Error("Color needs a value");
    }
    equals(t) {
        return !!t && $s.equals(this.rgba, t.rgba) && aze.equals(this.hsla, t.hsla) && xBe.equals(this.hsva, t.hsva);
    }
    getRelativeLuminance() {
        const t = C4._relativeLuminanceForComponent(this.rgba.r), n = C4._relativeLuminanceForComponent(this.rgba.g), i = C4._relativeLuminanceForComponent(this.rgba.b), r = .2126 * t + .7152 * n + .0722 * i;
        return oze(r, 4);
    }
    reduceRelativeLuminace(t, n) {
        let { r: i, g: r, b: s } = t.rgba, o = this.getContrastRatio(t);
        for(; o < n && (i > 0 || r > 0 || s > 0);)i -= Math.max(0, Math.ceil(i * .1)), r -= Math.max(0, Math.ceil(r * .1)), s -= Math.max(0, Math.ceil(s * .1)), o = this.getContrastRatio(new C4(new $s(i, r, s)));
        return new C4(new $s(i, r, s));
    }
    increaseRelativeLuminace(t, n) {
        let { r: i, g: r, b: s } = t.rgba, o = this.getContrastRatio(t);
        for(; o < n && (i < 255 || r < 255 || s < 255);)i = Math.min(255, i + Math.ceil((255 - i) * .1)), r = Math.min(255, r + Math.ceil((255 - r) * .1)), s = Math.min(255, s + Math.ceil((255 - s) * .1)), o = this.getContrastRatio(new C4(new $s(i, r, s)));
        return new C4(new $s(i, r, s));
    }
    static _relativeLuminanceForComponent(t) {
        const n = t / 255;
        return n <= .03928 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4);
    }
    getContrastRatio(t) {
        const n = this.getRelativeLuminance(), i = t.getRelativeLuminance();
        return n > i ? (n + .05) / (i + .05) : (i + .05) / (n + .05);
    }
    isDarker() {
        return (this.rgba.r * 299 + this.rgba.g * 587 + this.rgba.b * 114) / 1e3 < 128;
    }
    isLighter() {
        return (this.rgba.r * 299 + this.rgba.g * 587 + this.rgba.b * 114) / 1e3 >= 128;
    }
    isLighterThan(t) {
        const n = this.getRelativeLuminance(), i = t.getRelativeLuminance();
        return n > i;
    }
    isDarkerThan(t) {
        const n = this.getRelativeLuminance(), i = t.getRelativeLuminance();
        return n < i;
    }
    ensureConstrast(t, n) {
        const i = this.getRelativeLuminance(), r = t.getRelativeLuminance();
        if (this.getContrastRatio(t) < n) {
            if (r < i) {
                const c = this.reduceRelativeLuminace(t, n), l = this.getContrastRatio(c);
                if (l < n) {
                    const u = this.increaseRelativeLuminace(t, n), h = this.getContrastRatio(u);
                    return l > h ? c : u;
                }
                return c;
            }
            const o = this.increaseRelativeLuminace(t, n), a = this.getContrastRatio(o);
            if (a < n) {
                const c = this.reduceRelativeLuminace(t, n), l = this.getContrastRatio(c);
                return a > l ? o : c;
            }
            return o;
        }
        return t;
    }
    lighten(t) {
        return new C4(new aze(this.hsla.h, this.hsla.s, this.hsla.l + this.hsla.l * t, this.hsla.a));
    }
    darken(t) {
        return new C4(new aze(this.hsla.h, this.hsla.s, this.hsla.l - this.hsla.l * t, this.hsla.a));
    }
    transparent(t) {
        const { r: n, g: i, b: r, a: s } = this.rgba;
        return new C4(new $s(n, i, r, s * t));
    }
    isTransparent() {
        return this.rgba.a === 0;
    }
    isOpaque() {
        return this.rgba.a === 1;
    }
    opposite() {
        return new C4(new $s(255 - this.rgba.r, 255 - this.rgba.g, 255 - this.rgba.b, this.rgba.a));
    }
    blend(t) {
        const n = t.rgba, i = this.rgba.a, r = n.a, s = i + r * (1 - i);
        if (s < 1e-6) return C4.transparent;
        const o = this.rgba.r * i / s + n.r * r * (1 - i) / s, a = this.rgba.g * i / s + n.g * r * (1 - i) / s, c = this.rgba.b * i / s + n.b * r * (1 - i) / s;
        return new C4(new $s(o, a, c, s));
    }
    makeOpaque(t) {
        if (this.isOpaque() || t.rgba.a !== 1) return this;
        const { r: n, g: i, b: r, a: s } = this.rgba;
        return new C4(new $s(t.rgba.r - s * (t.rgba.r - n), t.rgba.g - s * (t.rgba.g - i), t.rgba.b - s * (t.rgba.b - r), 1));
    }
    flatten(...t) {
        const n = t.reduceRight((i, r)=>C4._flatten(r, i));
        return C4._flatten(this, n);
    }
    static _flatten(t, n) {
        const i = 1 - t.rgba.a;
        return new C4(new $s(i * n.rgba.r + t.rgba.a * t.rgba.r, i * n.rgba.g + t.rgba.a * t.rgba.g, i * n.rgba.b + t.rgba.a * t.rgba.b));
    }
    toString() {
        return this._toString || (this._toString = C4.Format.CSS.format(this)), this._toString;
    }
    toNumber32Bit() {
        return this._toNumber32Bit || (this._toNumber32Bit = (this.rgba.r << 24 | this.rgba.g << 16 | this.rgba.b << 8 | this.rgba.a * 255 << 0) >>> 0), this._toNumber32Bit;
    }
    static getLighterColor(t, n, i) {
        if (t.isLighterThan(n)) return t;
        i = i || .5;
        const r = t.getRelativeLuminance(), s = n.getRelativeLuminance();
        return i = i * (s - r) / s, t.lighten(i);
    }
    static getDarkerColor(t, n, i) {
        if (t.isDarkerThan(n)) return t;
        i = i || .5;
        const r = t.getRelativeLuminance(), s = n.getRelativeLuminance();
        return i = i * (r - s) / r, t.darken(i);
    }
}, sW.white = new sW(new $s(255, 255, 255, 1)), sW.black = new sW(new $s(0, 0, 0, 1)), sW.red = new sW(new $s(255, 0, 0, 1)), sW.blue = new sW(new $s(0, 0, 255, 1)), sW.green = new sW(new $s(0, 255, 0, 1)), sW.cyan = new sW(new $s(0, 255, 255, 1)), sW.lightgrey = new sW(new $s(211, 211, 211, 1)), sW.transparent = new sW(new $s(0, 0, 0, 0)), Ci = sW, ((e)=>{
    let t;
    ((n)=>{
        let i;
        ((r)=>{
            function s(y) {
                return y.rgba.a === 1 ? `rgb(${y.rgba.r}, ${y.rgba.g}, ${y.rgba.b})` : e.Format.CSS.formatRGBA(y);
            }
            r.formatRGB = s;
            function o(y) {
                return `rgba(${y.rgba.r}, ${y.rgba.g}, ${y.rgba.b}, ${+y.rgba.a.toFixed(2)})`;
            }
            r.formatRGBA = o;
            function a(y) {
                return y.hsla.a === 1 ? `hsl(${y.hsla.h}, ${(y.hsla.s * 100).toFixed(2)}%, ${(y.hsla.l * 100).toFixed(2)}%)` : e.Format.CSS.formatHSLA(y);
            }
            r.formatHSL = a;
            function c(y) {
                return `hsla(${y.hsla.h}, ${(y.hsla.s * 100).toFixed(2)}%, ${(y.hsla.l * 100).toFixed(2)}%, ${y.hsla.a.toFixed(2)})`;
            }
            r.formatHSLA = c;
            function l(y) {
                const T = y.toString(16);
                return T.length !== 2 ? "0" + T : T;
            }
            function u(y) {
                return `#${l(y.rgba.r)}${l(y.rgba.g)}${l(y.rgba.b)}`;
            }
            r.formatHex = u;
            function h(y, T = !1) {
                return T && y.rgba.a === 1 ? e.Format.CSS.formatHex(y) : `#${l(y.rgba.r)}${l(y.rgba.g)}${l(y.rgba.b)}${l(Math.round(y.rgba.a * 255))}`;
            }
            r.formatHexA = h;
            function p(y) {
                return y.isOpaque() ? e.Format.CSS.formatHex(y) : e.Format.CSS.formatRGBA(y);
            }
            r.format = p;
            function g(y) {
                if (y === "transparent") return e.transparent;
                if (y.startsWith("#")) return v(y);
                if (y.startsWith("rgba(")) {
                    const T = y.match(/rgba\((?<r>(?:\+|-)?\d+), *(?<g>(?:\+|-)?\d+), *(?<b>(?:\+|-)?\d+), *(?<a>(?:\+|-)?\d+(\.\d+)?)\)/);
                    if (!T) throw new Error("Invalid color format " + y);
                    const E = parseInt(T.groups?.r ?? "0"), A = parseInt(T.groups?.g ?? "0"), R = parseInt(T.groups?.b ?? "0"), D = parseFloat(T.groups?.a ?? "0");
                    return new e(new $s(E, A, R, D));
                }
                if (y.startsWith("rgb(")) {
                    const T = y.match(/rgb\((?<r>(?:\+|-)?\d+), *(?<g>(?:\+|-)?\d+), *(?<b>(?:\+|-)?\d+)\)/);
                    if (!T) throw new Error("Invalid color format " + y);
                    const E = parseInt(T.groups?.r ?? "0"), A = parseInt(T.groups?.g ?? "0"), R = parseInt(T.groups?.b ?? "0");
                    return new e(new $s(E, A, R));
                }
                return f(y);
            }
            r.parse = g;
            function f(y) {
                switch(y){
                    case "aliceblue":
                        return new e(new $s(240, 248, 255, 1));
                    case "antiquewhite":
                        return new e(new $s(250, 235, 215, 1));
                    case "aqua":
                        return new e(new $s(0, 255, 255, 1));
                    case "aquamarine":
                        return new e(new $s(127, 255, 212, 1));
                    case "azure":
                        return new e(new $s(240, 255, 255, 1));
                    case "beige":
                        return new e(new $s(245, 245, 220, 1));
                    case "bisque":
                        return new e(new $s(255, 228, 196, 1));
                    case "black":
                        return new e(new $s(0, 0, 0, 1));
                    case "blanchedalmond":
                        return new e(new $s(255, 235, 205, 1));
                    case "blue":
                        return new e(new $s(0, 0, 255, 1));
                    case "blueviolet":
                        return new e(new $s(138, 43, 226, 1));
                    case "brown":
                        return new e(new $s(165, 42, 42, 1));
                    case "burlywood":
                        return new e(new $s(222, 184, 135, 1));
                    case "cadetblue":
                        return new e(new $s(95, 158, 160, 1));
                    case "chartreuse":
                        return new e(new $s(127, 255, 0, 1));
                    case "chocolate":
                        return new e(new $s(210, 105, 30, 1));
                    case "coral":
                        return new e(new $s(255, 127, 80, 1));
                    case "cornflowerblue":
                        return new e(new $s(100, 149, 237, 1));
                    case "cornsilk":
                        return new e(new $s(255, 248, 220, 1));
                    case "crimson":
                        return new e(new $s(220, 20, 60, 1));
                    case "cyan":
                        return new e(new $s(0, 255, 255, 1));
                    case "darkblue":
                        return new e(new $s(0, 0, 139, 1));
                    case "darkcyan":
                        return new e(new $s(0, 139, 139, 1));
                    case "darkgoldenrod":
                        return new e(new $s(184, 134, 11, 1));
                    case "darkgray":
                        return new e(new $s(169, 169, 169, 1));
                    case "darkgreen":
                        return new e(new $s(0, 100, 0, 1));
                    case "darkgrey":
                        return new e(new $s(169, 169, 169, 1));
                    case "darkkhaki":
                        return new e(new $s(189, 183, 107, 1));
                    case "darkmagenta":
                        return new e(new $s(139, 0, 139, 1));
                    case "darkolivegreen":
                        return new e(new $s(85, 107, 47, 1));
                    case "darkorange":
                        return new e(new $s(255, 140, 0, 1));
                    case "darkorchid":
                        return new e(new $s(153, 50, 204, 1));
                    case "darkred":
                        return new e(new $s(139, 0, 0, 1));
                    case "darksalmon":
                        return new e(new $s(233, 150, 122, 1));
                    case "darkseagreen":
                        return new e(new $s(143, 188, 143, 1));
                    case "darkslateblue":
                        return new e(new $s(72, 61, 139, 1));
                    case "darkslategray":
                        return new e(new $s(47, 79, 79, 1));
                    case "darkslategrey":
                        return new e(new $s(47, 79, 79, 1));
                    case "darkturquoise":
                        return new e(new $s(0, 206, 209, 1));
                    case "darkviolet":
                        return new e(new $s(148, 0, 211, 1));
                    case "deeppink":
                        return new e(new $s(255, 20, 147, 1));
                    case "deepskyblue":
                        return new e(new $s(0, 191, 255, 1));
                    case "dimgray":
                        return new e(new $s(105, 105, 105, 1));
                    case "dimgrey":
                        return new e(new $s(105, 105, 105, 1));
                    case "dodgerblue":
                        return new e(new $s(30, 144, 255, 1));
                    case "firebrick":
                        return new e(new $s(178, 34, 34, 1));
                    case "floralwhite":
                        return new e(new $s(255, 250, 240, 1));
                    case "forestgreen":
                        return new e(new $s(34, 139, 34, 1));
                    case "fuchsia":
                        return new e(new $s(255, 0, 255, 1));
                    case "gainsboro":
                        return new e(new $s(220, 220, 220, 1));
                    case "ghostwhite":
                        return new e(new $s(248, 248, 255, 1));
                    case "gold":
                        return new e(new $s(255, 215, 0, 1));
                    case "goldenrod":
                        return new e(new $s(218, 165, 32, 1));
                    case "gray":
                        return new e(new $s(128, 128, 128, 1));
                    case "green":
                        return new e(new $s(0, 128, 0, 1));
                    case "greenyellow":
                        return new e(new $s(173, 255, 47, 1));
                    case "grey":
                        return new e(new $s(128, 128, 128, 1));
                    case "honeydew":
                        return new e(new $s(240, 255, 240, 1));
                    case "hotpink":
                        return new e(new $s(255, 105, 180, 1));
                    case "indianred":
                        return new e(new $s(205, 92, 92, 1));
                    case "indigo":
                        return new e(new $s(75, 0, 130, 1));
                    case "ivory":
                        return new e(new $s(255, 255, 240, 1));
                    case "khaki":
                        return new e(new $s(240, 230, 140, 1));
                    case "lavender":
                        return new e(new $s(230, 230, 250, 1));
                    case "lavenderblush":
                        return new e(new $s(255, 240, 245, 1));
                    case "lawngreen":
                        return new e(new $s(124, 252, 0, 1));
                    case "lemonchiffon":
                        return new e(new $s(255, 250, 205, 1));
                    case "lightblue":
                        return new e(new $s(173, 216, 230, 1));
                    case "lightcoral":
                        return new e(new $s(240, 128, 128, 1));
                    case "lightcyan":
                        return new e(new $s(224, 255, 255, 1));
                    case "lightgoldenrodyellow":
                        return new e(new $s(250, 250, 210, 1));
                    case "lightgray":
                        return new e(new $s(211, 211, 211, 1));
                    case "lightgreen":
                        return new e(new $s(144, 238, 144, 1));
                    case "lightgrey":
                        return new e(new $s(211, 211, 211, 1));
                    case "lightpink":
                        return new e(new $s(255, 182, 193, 1));
                    case "lightsalmon":
                        return new e(new $s(255, 160, 122, 1));
                    case "lightseagreen":
                        return new e(new $s(32, 178, 170, 1));
                    case "lightskyblue":
                        return new e(new $s(135, 206, 250, 1));
                    case "lightslategray":
                        return new e(new $s(119, 136, 153, 1));
                    case "lightslategrey":
                        return new e(new $s(119, 136, 153, 1));
                    case "lightsteelblue":
                        return new e(new $s(176, 196, 222, 1));
                    case "lightyellow":
                        return new e(new $s(255, 255, 224, 1));
                    case "lime":
                        return new e(new $s(0, 255, 0, 1));
                    case "limegreen":
                        return new e(new $s(50, 205, 50, 1));
                    case "linen":
                        return new e(new $s(250, 240, 230, 1));
                    case "magenta":
                        return new e(new $s(255, 0, 255, 1));
                    case "maroon":
                        return new e(new $s(128, 0, 0, 1));
                    case "mediumaquamarine":
                        return new e(new $s(102, 205, 170, 1));
                    case "mediumblue":
                        return new e(new $s(0, 0, 205, 1));
                    case "mediumorchid":
                        return new e(new $s(186, 85, 211, 1));
                    case "mediumpurple":
                        return new e(new $s(147, 112, 219, 1));
                    case "mediumseagreen":
                        return new e(new $s(60, 179, 113, 1));
                    case "mediumslateblue":
                        return new e(new $s(123, 104, 238, 1));
                    case "mediumspringgreen":
                        return new e(new $s(0, 250, 154, 1));
                    case "mediumturquoise":
                        return new e(new $s(72, 209, 204, 1));
                    case "mediumvioletred":
                        return new e(new $s(199, 21, 133, 1));
                    case "midnightblue":
                        return new e(new $s(25, 25, 112, 1));
                    case "mintcream":
                        return new e(new $s(245, 255, 250, 1));
                    case "mistyrose":
                        return new e(new $s(255, 228, 225, 1));
                    case "moccasin":
                        return new e(new $s(255, 228, 181, 1));
                    case "navajowhite":
                        return new e(new $s(255, 222, 173, 1));
                    case "navy":
                        return new e(new $s(0, 0, 128, 1));
                    case "oldlace":
                        return new e(new $s(253, 245, 230, 1));
                    case "olive":
                        return new e(new $s(128, 128, 0, 1));
                    case "olivedrab":
                        return new e(new $s(107, 142, 35, 1));
                    case "orange":
                        return new e(new $s(255, 165, 0, 1));
                    case "orangered":
                        return new e(new $s(255, 69, 0, 1));
                    case "orchid":
                        return new e(new $s(218, 112, 214, 1));
                    case "palegoldenrod":
                        return new e(new $s(238, 232, 170, 1));
                    case "palegreen":
                        return new e(new $s(152, 251, 152, 1));
                    case "paleturquoise":
                        return new e(new $s(175, 238, 238, 1));
                    case "palevioletred":
                        return new e(new $s(219, 112, 147, 1));
                    case "papayawhip":
                        return new e(new $s(255, 239, 213, 1));
                    case "peachpuff":
                        return new e(new $s(255, 218, 185, 1));
                    case "peru":
                        return new e(new $s(205, 133, 63, 1));
                    case "pink":
                        return new e(new $s(255, 192, 203, 1));
                    case "plum":
                        return new e(new $s(221, 160, 221, 1));
                    case "powderblue":
                        return new e(new $s(176, 224, 230, 1));
                    case "purple":
                        return new e(new $s(128, 0, 128, 1));
                    case "rebeccapurple":
                        return new e(new $s(102, 51, 153, 1));
                    case "red":
                        return new e(new $s(255, 0, 0, 1));
                    case "rosybrown":
                        return new e(new $s(188, 143, 143, 1));
                    case "royalblue":
                        return new e(new $s(65, 105, 225, 1));
                    case "saddlebrown":
                        return new e(new $s(139, 69, 19, 1));
                    case "salmon":
                        return new e(new $s(250, 128, 114, 1));
                    case "sandybrown":
                        return new e(new $s(244, 164, 96, 1));
                    case "seagreen":
                        return new e(new $s(46, 139, 87, 1));
                    case "seashell":
                        return new e(new $s(255, 245, 238, 1));
                    case "sienna":
                        return new e(new $s(160, 82, 45, 1));
                    case "silver":
                        return new e(new $s(192, 192, 192, 1));
                    case "skyblue":
                        return new e(new $s(135, 206, 235, 1));
                    case "slateblue":
                        return new e(new $s(106, 90, 205, 1));
                    case "slategray":
                        return new e(new $s(112, 128, 144, 1));
                    case "slategrey":
                        return new e(new $s(112, 128, 144, 1));
                    case "snow":
                        return new e(new $s(255, 250, 250, 1));
                    case "springgreen":
                        return new e(new $s(0, 255, 127, 1));
                    case "steelblue":
                        return new e(new $s(70, 130, 180, 1));
                    case "tan":
                        return new e(new $s(210, 180, 140, 1));
                    case "teal":
                        return new e(new $s(0, 128, 128, 1));
                    case "thistle":
                        return new e(new $s(216, 191, 216, 1));
                    case "tomato":
                        return new e(new $s(255, 99, 71, 1));
                    case "turquoise":
                        return new e(new $s(64, 224, 208, 1));
                    case "violet":
                        return new e(new $s(238, 130, 238, 1));
                    case "wheat":
                        return new e(new $s(245, 222, 179, 1));
                    case "white":
                        return new e(new $s(255, 255, 255, 1));
                    case "whitesmoke":
                        return new e(new $s(245, 245, 245, 1));
                    case "yellow":
                        return new e(new $s(255, 255, 0, 1));
                    case "yellowgreen":
                        return new e(new $s(154, 205, 50, 1));
                    default:
                        return null;
                }
            }
            function v(y) {
                const T = y.length;
                if (T === 0 || y.charCodeAt(0) !== 35) return null;
                if (T === 7) {
                    const E = 16 * b(y.charCodeAt(1)) + b(y.charCodeAt(2)), A = 16 * b(y.charCodeAt(3)) + b(y.charCodeAt(4)), R = 16 * b(y.charCodeAt(5)) + b(y.charCodeAt(6));
                    return new e(new $s(E, A, R, 1));
                }
                if (T === 9) {
                    const E = 16 * b(y.charCodeAt(1)) + b(y.charCodeAt(2)), A = 16 * b(y.charCodeAt(3)) + b(y.charCodeAt(4)), R = 16 * b(y.charCodeAt(5)) + b(y.charCodeAt(6)), D = 16 * b(y.charCodeAt(7)) + b(y.charCodeAt(8));
                    return new e(new $s(E, A, R, D / 255));
                }
                if (T === 4) {
                    const E = b(y.charCodeAt(1)), A = b(y.charCodeAt(2)), R = b(y.charCodeAt(3));
                    return new e(new $s(16 * E + E, 16 * A + A, 16 * R + R));
                }
                if (T === 5) {
                    const E = b(y.charCodeAt(1)), A = b(y.charCodeAt(2)), R = b(y.charCodeAt(3)), D = b(y.charCodeAt(4));
                    return new e(new $s(16 * E + E, 16 * A + A, 16 * R + R, (16 * D + D) / 255));
                }
                return null;
            }
            r.parseHex = v;
            function b(y) {
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
        })(i = n.CSS || (n.CSS = {}));
    })(t = e.Format || (e.Format = {}));
})(Ci || (Ci = {}));

}

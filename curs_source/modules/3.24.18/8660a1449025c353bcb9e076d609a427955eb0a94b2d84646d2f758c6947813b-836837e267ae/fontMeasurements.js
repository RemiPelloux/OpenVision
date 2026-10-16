import { Gt, Qe, st, tt } from "./Iwo.js";
import { LUd, eMy } from "./charWidthReader.js";
import { Hn, pO } from "./dom_2.js";
import { Ltt, s2 } from "./editorOptions.js";
import { X0r, Y0r, aHo } from "./fontInfo.js";
import { Vtt, gsi } from "./pixelRatio.js";
import { E } from "./tslib.es6.js";
import { JPy } from "./ze.js";
var FUd, BUd, vyt;
export { BUd, FUd, vyt };
var __wakaru_lHo_initialized = false;
export function lHo() {
if (__wakaru_lHo_initialized) return;
__wakaru_lHo_initialized = true;
"use strict";
E(), Hn(), gsi(), Gt(), Qe(), eMy(), s2(), X0r(), FUd = class extends st {
    constructor(){
        super(...arguments), this._cache = new Map, this._evictUntrustedReadingsTimeout = -1, this._onDidChange = this._register(new tt), this.onDidChange = this._onDidChange.event;
    }
    dispose() {
        this._evictUntrustedReadingsTimeout !== -1 && (clearTimeout(this._evictUntrustedReadingsTimeout), this._evictUntrustedReadingsTimeout = -1), super.dispose();
    }
    clearAllFontInfos() {
        this._cache.clear(), this._onDidChange.fire();
    }
    _ensureCache(t) {
        const e = pO(t);
        let n = this._cache.get(e);
        return n || (n = new BUd, this._cache.set(e, n)), n;
    }
    _writeToCache(t, e, n) {
        this._ensureCache(t).put(e, n), !n.isTrusted && this._evictUntrustedReadingsTimeout === -1 && (this._evictUntrustedReadingsTimeout = t.setTimeout(()=>{
            this._evictUntrustedReadingsTimeout = -1, this._evictUntrustedReadings(t);
        }, 5e3));
    }
    _evictUntrustedReadings(t) {
        const e = this._ensureCache(t), n = e.getValues();
        let i = !1;
        for (const r of n)r.isTrusted || (i = !0, e.remove(r));
        i && this._onDidChange.fire();
    }
    serializeFontInfo(t) {
        return this._ensureCache(t).getValues().filter((n)=>n.isTrusted);
    }
    restoreFontInfo(t, e) {
        for (const n of e){
            if (n.version !== aHo) continue;
            const i = new Y0r(n, !1);
            this._writeToCache(t, i, i);
        }
    }
    readFontInfo(t, e) {
        const n = this._ensureCache(t);
        if (!n.has(e)) {
            let i = this._actualReadFontInfo(t, e);
            (i.typicalHalfwidthCharacterWidth <= 2 || i.typicalFullwidthCharacterWidth <= 2 || i.spaceWidth <= 2 || i.maxDigitWidth <= 2) && (i = new Y0r({
                pixelRatio: Vtt.getInstance(t).value,
                fontFamily: i.fontFamily,
                fontWeight: i.fontWeight,
                fontSize: i.fontSize,
                fontFeatureSettings: i.fontFeatureSettings,
                fontVariationSettings: i.fontVariationSettings,
                lineHeight: i.lineHeight,
                letterSpacing: i.letterSpacing,
                isMonospace: i.isMonospace,
                typicalHalfwidthCharacterWidth: Math.max(i.typicalHalfwidthCharacterWidth, 5),
                typicalFullwidthCharacterWidth: Math.max(i.typicalFullwidthCharacterWidth, 5),
                canUseHalfwidthRightwardsArrow: i.canUseHalfwidthRightwardsArrow,
                spaceWidth: Math.max(i.spaceWidth, 5),
                middotWidth: Math.max(i.middotWidth, 5),
                wsmiddotWidth: Math.max(i.wsmiddotWidth, 5),
                maxDigitWidth: Math.max(i.maxDigitWidth, 5)
            }, !1)), this._writeToCache(t, e, i);
        }
        return n.get(e);
    }
    _createRequest(t, e, n, i) {
        const r = new LUd(t, e);
        return n.push(r), i?.push(r), r;
    }
    _actualReadFontInfo(t, e) {
        const n = [], i = [], r = this._createRequest("n", 0, n, i), s = this._createRequest("\uFF4D", 0, n, null), o = this._createRequest(" ", 0, n, i), a = this._createRequest("0", 0, n, i), l = this._createRequest("1", 0, n, i), c = this._createRequest("2", 0, n, i), u = this._createRequest("3", 0, n, i), d = this._createRequest("4", 0, n, i), h = this._createRequest("5", 0, n, i), p = this._createRequest("6", 0, n, i), g = this._createRequest("7", 0, n, i), f = this._createRequest("8", 0, n, i), _ = this._createRequest("9", 0, n, i), b = this._createRequest("\u2192", 0, n, i), y = this._createRequest("\uFFEB", 0, n, null), S = this._createRequest("\xB7", 0, n, i), k = this._createRequest("\u2E31", 0, n, null), C = "|/-_ilm%";
        for(let M = 0, O = C.length; M < O; M++)this._createRequest(C.charAt(M), 0, n, i), this._createRequest(C.charAt(M), 1, n, i), this._createRequest(C.charAt(M), 2, n, i);
        JPy(t, e, n);
        const T = Math.max(a.width, l.width, c.width, u.width, d.width, h.width, p.width, g.width, f.width, _.width);
        let I = e.fontFeatureSettings === Ltt.OFF;
        const A = i[0].width;
        for(let M = 1, O = i.length; I && M < O; M++){
            const N = A - i[M].width;
            if (N < -.001 || N > .001) {
                I = !1;
                break;
            }
        }
        let P = !0;
        return I && y.width !== A && (P = !1), y.width > b.width && (P = !1), new Y0r({
            pixelRatio: Vtt.getInstance(t).value,
            fontFamily: e.fontFamily,
            fontWeight: e.fontWeight,
            fontSize: e.fontSize,
            fontFeatureSettings: e.fontFeatureSettings,
            fontVariationSettings: e.fontVariationSettings,
            lineHeight: e.lineHeight,
            letterSpacing: e.letterSpacing,
            isMonospace: I,
            typicalHalfwidthCharacterWidth: r.width,
            typicalFullwidthCharacterWidth: s.width,
            canUseHalfwidthRightwardsArrow: P,
            spaceWidth: o.width,
            middotWidth: S.width,
            wsmiddotWidth: k.width,
            maxDigitWidth: T
        }, !0);
    }
}, BUd = class {
    constructor(){
        this._keys = Object.create(null), this._values = Object.create(null);
    }
    has(t) {
        const e = t.getId();
        return !!this._values[e];
    }
    get(t) {
        const e = t.getId();
        return this._values[e];
    }
    put(t, e) {
        const n = t.getId();
        this._keys[n] = t, this._values[n] = e;
    }
    remove(t) {
        const e = t.getId();
        delete this._keys[e], delete this._values[e];
    }
    getValues() {
        return Object.keys(this._keys).map((t)=>this._values[t]);
    }
}, vyt = new FUd;

}

import { Se, bt, ve, we } from "./HVr.js";
import { cvg, y5c } from "./charWidthReader.js";
import { OV, en } from "./dom_2.js";
import { UBe, m1 } from "./editorOptions.js";
import { C_i, Twe, ses } from "./fontInfo.js";
import { SJ, d5 } from "./pixelRatio.js";
import { avg } from "./qIc.js";
import { x } from "./tslib.es6.js";
var k5c, w5c, Gge;
export { Gge, k5c, w5c };
var __wakaru_Bpt_initialized = false;
export function Bpt() {
if (__wakaru_Bpt_initialized) return;
__wakaru_Bpt_initialized = true;
"use strict";
x(), en(), SJ(), bt(), Se(), cvg(), m1(), Twe(), k5c = class extends we {
    constructor(){
        super(...arguments), this._cache = new Map, this._evictUntrustedReadingsTimeout = -1, this._onDidChange = this._register(new ve), this.onDidChange = this._onDidChange.event;
    }
    dispose() {
        this._evictUntrustedReadingsTimeout !== -1 && (clearTimeout(this._evictUntrustedReadingsTimeout), this._evictUntrustedReadingsTimeout = -1), super.dispose();
    }
    clearAllFontInfos() {
        this._cache.clear(), this._onDidChange.fire();
    }
    _ensureCache(e) {
        const t = OV(e);
        let n = this._cache.get(t);
        return n || (n = new w5c, this._cache.set(t, n)), n;
    }
    _writeToCache(e, t, n) {
        this._ensureCache(e).put(t, n), !n.isTrusted && this._evictUntrustedReadingsTimeout === -1 && (this._evictUntrustedReadingsTimeout = e.setTimeout(()=>{
            this._evictUntrustedReadingsTimeout = -1, this._evictUntrustedReadings(e);
        }, 5e3));
    }
    _evictUntrustedReadings(e) {
        const t = this._ensureCache(e), n = t.getValues();
        let i = !1;
        for (const r of n)r.isTrusted || (i = !0, t.remove(r));
        i && this._onDidChange.fire();
    }
    serializeFontInfo(e) {
        return this._ensureCache(e).getValues().filter((n)=>n.isTrusted);
    }
    restoreFontInfo(e, t) {
        for (const n of t){
            if (n.version !== ses) continue;
            const i = new C_i(n, !1);
            this._writeToCache(e, i, i);
        }
    }
    readFontInfo(e, t) {
        const n = this._ensureCache(e);
        if (!n.has(t)) {
            let i = this._actualReadFontInfo(e, t);
            (i.typicalHalfwidthCharacterWidth <= 2 || i.typicalFullwidthCharacterWidth <= 2 || i.spaceWidth <= 2 || i.maxDigitWidth <= 2) && (i = new C_i({
                pixelRatio: d5.getInstance(e).value,
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
            }, !1)), this._writeToCache(e, t, i);
        }
        return n.get(t);
    }
    _createRequest(e, t, n, i) {
        const r = new y5c(e, t);
        return n.push(r), i?.push(r), r;
    }
    _actualReadFontInfo(e, t) {
        const n = [], i = [], r = this._createRequest("n", 0, n, i), s = this._createRequest("\uFF4D", 0, n, null), o = this._createRequest(" ", 0, n, i), a = this._createRequest("0", 0, n, i), c = this._createRequest("1", 0, n, i), l = this._createRequest("2", 0, n, i), u = this._createRequest("3", 0, n, i), h = this._createRequest("4", 0, n, i), p = this._createRequest("5", 0, n, i), g = this._createRequest("6", 0, n, i), f = this._createRequest("7", 0, n, i), v = this._createRequest("8", 0, n, i), b = this._createRequest("9", 0, n, i), y = this._createRequest("\u2192", 0, n, i), T = this._createRequest("\uFFEB", 0, n, null), E = this._createRequest("\xB7", 0, n, i), A = this._createRequest("\u2E31", 0, n, null), R = "|/-_ilm%";
        for(let F = 0, H = R.length; F < H; F++)this._createRequest(R.charAt(F), 0, n, i), this._createRequest(R.charAt(F), 1, n, i), this._createRequest(R.charAt(F), 2, n, i);
        avg(e, t, n);
        const D = Math.max(a.width, c.width, l.width, u.width, h.width, p.width, g.width, f.width, v.width, b.width);
        let P = t.fontFeatureSettings === UBe.OFF;
        const N = i[0].width;
        for(let F = 1, H = i.length; P && F < H; F++){
            const $ = N - i[F].width;
            if ($ < -.001 || $ > .001) {
                P = !1;
                break;
            }
        }
        let O = !0;
        return P && T.width !== N && (O = !1), T.width > y.width && (O = !1), new C_i({
            pixelRatio: d5.getInstance(e).value,
            fontFamily: t.fontFamily,
            fontWeight: t.fontWeight,
            fontSize: t.fontSize,
            fontFeatureSettings: t.fontFeatureSettings,
            fontVariationSettings: t.fontVariationSettings,
            lineHeight: t.lineHeight,
            letterSpacing: t.letterSpacing,
            isMonospace: P,
            typicalHalfwidthCharacterWidth: r.width,
            typicalFullwidthCharacterWidth: s.width,
            canUseHalfwidthRightwardsArrow: O,
            spaceWidth: o.width,
            middotWidth: E.width,
            wsmiddotWidth: A.width,
            maxDigitWidth: D
        }, !0);
    }
}, w5c = class {
    constructor(){
        this._keys = Object.create(null), this._values = Object.create(null);
    }
    has(e) {
        const t = e.getId();
        return !!this._values[t];
    }
    get(e) {
        const t = e.getId();
        return this._values[t];
    }
    put(e, t) {
        const n = e.getId();
        this._keys[n] = e, this._values[n] = t;
    }
    remove(e) {
        const t = e.getId();
        delete this._keys[t], delete this._values[t];
    }
    getValues() {
        return Object.keys(this._keys).map((e)=>this._values[e]);
    }
}, Gge = new k5c;

}

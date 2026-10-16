import { Di, _r } from "./Iwo.js";
import { Kve, e0r, q3, s2 } from "./editorOptions.js";
import { fyt, sHo } from "./editorZoom.js";
import { E } from "./tslib.es6.js";
var oHo, oBt, fsi, aHo, Y0r;
export { Y0r, aHo, fsi, oBt, oHo };
var __wakaru_X0r_initialized = false;
export function X0r() {
if (__wakaru_X0r_initialized) return;
__wakaru_X0r_initialized = true;
"use strict";
E(), Di(), s2(), sHo(), oHo = _r ? 1.5 : 1.35, oBt = 8, fsi = class EZi {
    constructor(e){
        this._bareFontInfoBrand = void 0, this.pixelRatio = e.pixelRatio, this.fontFamily = String(e.fontFamily), this.fontWeight = String(e.fontWeight), this.fontSize = e.fontSize, this.fontFeatureSettings = e.fontFeatureSettings, this.fontVariationSettings = e.fontVariationSettings, this.lineHeight = e.lineHeight | 0, this.letterSpacing = e.letterSpacing;
    }
    static createFromValidatedSettings(e, n, i) {
        const r = e.get(51), s = e.get(55), o = e.get(54), a = e.get(53), l = e.get(56), c = e.get(68), u = e.get(65);
        return EZi._create(r, s, o, a, l, c, u, n, i);
    }
    static createFromRawSettings(e, n, i = !1) {
        const r = Kve.fontFamily.validate(e.fontFamily), s = Kve.fontWeight.validate(e.fontWeight), o = Kve.fontSize.validate(e.fontSize), a = Kve.fontLigatures2.validate(e.fontLigatures), l = Kve.fontVariations.validate(e.fontVariations), c = Kve.lineHeight.validate(e.lineHeight), u = Kve.letterSpacing.validate(e.letterSpacing);
        return EZi._create(r, s, o, a, l, c, u, n, i);
    }
    static _create(e, n, i, r, s, o, a, l, c) {
        o === 0 ? o = oHo * i : o < oBt && (o = o * i), o = Math.round(o), o < oBt && (o = oBt);
        const u = 1 + (c ? 0 : fyt.getZoomLevel() * .1);
        return i *= u, o *= u, s === e0r.TRANSLATE && (n === "normal" || n === "bold" ? s = e0r.OFF : (s = `'wght' ${parseInt(n, 10)}`, n = "normal")), new EZi({
            pixelRatio: l,
            fontFamily: e,
            fontWeight: n,
            fontSize: i,
            fontFeatureSettings: r,
            fontVariationSettings: s,
            lineHeight: o,
            letterSpacing: a
        });
    }
    getId() {
        return `${this.pixelRatio}-${this.fontFamily}-${this.fontWeight}-${this.fontSize}-${this.fontFeatureSettings}-${this.fontVariationSettings}-${this.lineHeight}-${this.letterSpacing}`;
    }
    getMassagedFontFamily() {
        const e = q3.fontFamily, n = EZi._wrapInQuotes(this.fontFamily);
        return e && this.fontFamily !== e ? `${n}, ${e}` : n;
    }
    static _wrapInQuotes(e) {
        return /[,"']/.test(e) ? e : /[+ ]/.test(e) ? `"${e}"` : e;
    }
}, aHo = 2, Y0r = class extends fsi {
    constructor(t, e){
        super(t), this._editorStylingBrand = void 0, this.version = aHo, this.isTrusted = e, this.isMonospace = t.isMonospace, this.typicalHalfwidthCharacterWidth = t.typicalHalfwidthCharacterWidth, this.typicalFullwidthCharacterWidth = t.typicalFullwidthCharacterWidth, this.canUseHalfwidthRightwardsArrow = t.canUseHalfwidthRightwardsArrow, this.spaceWidth = t.spaceWidth, this.middotWidth = t.middotWidth, this.wsmiddotWidth = t.wsmiddotWidth, this.maxDigitWidth = t.maxDigitWidth;
    }
    equals(t) {
        return this.fontFamily === t.fontFamily && this.fontWeight === t.fontWeight && this.fontSize === t.fontSize && this.fontFeatureSettings === t.fontFeatureSettings && this.fontVariationSettings === t.fontVariationSettings && this.lineHeight === t.lineHeight && this.letterSpacing === t.letterSpacing && this.typicalHalfwidthCharacterWidth === t.typicalHalfwidthCharacterWidth && this.typicalFullwidthCharacterWidth === t.typicalFullwidthCharacterWidth && this.canUseHalfwidthRightwardsArrow === t.canUseHalfwidthRightwardsArrow && this.spaceWidth === t.spaceWidth && this.middotWidth === t.middotWidth && this.wsmiddotWidth === t.wsmiddotWidth && this.maxDigitWidth === t.maxDigitWidth;
    }
};

}

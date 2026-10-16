import { Ai, jn } from "./HVr.js";
import { NK, dA, gvi, m1 } from "./editorOptions.js";
import { Tle, w_i } from "./editorZoom.js";
import { x } from "./tslib.es6.js";
var res, Fpt, Ele, ses, C_i;
export { C_i, Ele, Fpt, res, ses };
var __wakaru_Twe_initialized = false;
export function Twe() {
if (__wakaru_Twe_initialized) return;
__wakaru_Twe_initialized = true;
"use strict";
x(), jn(), m1(), w_i(), res = Ai ? 1.5 : 1.35, Fpt = 8, Ele = class GXn {
    constructor(t){
        this._bareFontInfoBrand = void 0, this.pixelRatio = t.pixelRatio, this.fontFamily = String(t.fontFamily), this.fontWeight = String(t.fontWeight), this.fontSize = t.fontSize, this.fontFeatureSettings = t.fontFeatureSettings, this.fontVariationSettings = t.fontVariationSettings, this.lineHeight = t.lineHeight | 0, this.letterSpacing = t.letterSpacing;
    }
    static createFromValidatedSettings(t, n, i) {
        const r = t.get(51), s = t.get(55), o = t.get(54), a = t.get(53), c = t.get(56), l = t.get(68), u = t.get(65);
        return GXn._create(r, s, o, a, c, l, u, n, i);
    }
    static createFromRawSettings(t, n, i = !1) {
        const r = NK.fontFamily.validate(t.fontFamily), s = NK.fontWeight.validate(t.fontWeight), o = NK.fontSize.validate(t.fontSize), a = NK.fontLigatures2.validate(t.fontLigatures), c = NK.fontVariations.validate(t.fontVariations), l = NK.lineHeight.validate(t.lineHeight), u = NK.letterSpacing.validate(t.letterSpacing);
        return GXn._create(r, s, o, a, c, l, u, n, i);
    }
    static _create(t, n, i, r, s, o, a, c, l) {
        o === 0 ? o = res * i : o < Fpt && (o = o * i), o = Math.round(o), o < Fpt && (o = Fpt);
        const u = 1 + (l ? 0 : Tle.getZoomLevel() * .1);
        return i *= u, o *= u, s === gvi.TRANSLATE && (n === "normal" || n === "bold" ? s = gvi.OFF : (s = `'wght' ${parseInt(n, 10)}`, n = "normal")), new GXn({
            pixelRatio: c,
            fontFamily: t,
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
        const t = dA.fontFamily, n = GXn._wrapInQuotes(this.fontFamily);
        return t && this.fontFamily !== t ? `${n}, ${t}` : n;
    }
    static _wrapInQuotes(t) {
        return /[,"']/.test(t) ? t : /[+ ]/.test(t) ? `"${t}"` : t;
    }
}, ses = 2, C_i = class extends Ele {
    constructor(e, t){
        super(e), this._editorStylingBrand = void 0, this.version = ses, this.isTrusted = t, this.isMonospace = e.isMonospace, this.typicalHalfwidthCharacterWidth = e.typicalHalfwidthCharacterWidth, this.typicalFullwidthCharacterWidth = e.typicalFullwidthCharacterWidth, this.canUseHalfwidthRightwardsArrow = e.canUseHalfwidthRightwardsArrow, this.spaceWidth = e.spaceWidth, this.middotWidth = e.middotWidth, this.wsmiddotWidth = e.wsmiddotWidth, this.maxDigitWidth = e.maxDigitWidth;
    }
    equals(e) {
        return this.fontFamily === e.fontFamily && this.fontWeight === e.fontWeight && this.fontSize === e.fontSize && this.fontFeatureSettings === e.fontFeatureSettings && this.fontVariationSettings === e.fontVariationSettings && this.lineHeight === e.lineHeight && this.letterSpacing === e.letterSpacing && this.typicalHalfwidthCharacterWidth === e.typicalHalfwidthCharacterWidth && this.typicalFullwidthCharacterWidth === e.typicalFullwidthCharacterWidth && this.canUseHalfwidthRightwardsArrow === e.canUseHalfwidthRightwardsArrow && this.spaceWidth === e.spaceWidth && this.middotWidth === e.middotWidth && this.wsmiddotWidth === e.wsmiddotWidth && this.maxDigitWidth === e.maxDigitWidth;
    }
};

}

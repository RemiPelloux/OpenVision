import { E } from "./tslib.es6.js";
var lWo, cWo, S$d;
export { S$d, cWo, lWo };
var __wakaru_k$d_initialized = false;
export function k$d() {
if (__wakaru_k$d_initialized) return;
__wakaru_k$d_initialized = true;
"use strict";
E(), lWo = class {
    constructor(t, e, n){
        this._colorZoneBrand = void 0, this.from = t | 0, this.to = e | 0, this.colorId = n | 0;
    }
    static compare(t, e) {
        return t.colorId === e.colorId ? t.from === e.from ? t.to - e.to : t.from - e.from : t.colorId - e.colorId;
    }
}, cWo = class {
    constructor(t, e, n, i){
        this._overviewRulerZoneBrand = void 0, this.startLineNumber = t, this.endLineNumber = e, this.heightInLines = n, this.color = i, this._colorZone = null;
    }
    static compare(t, e) {
        return t.color === e.color ? t.startLineNumber === e.startLineNumber ? t.heightInLines === e.heightInLines ? t.endLineNumber - e.endLineNumber : t.heightInLines - e.heightInLines : t.startLineNumber - e.startLineNumber : t.color < e.color ? -1 : 1;
    }
    setColorZone(t) {
        this._colorZone = t;
    }
    getColorZones() {
        return this._colorZone;
    }
}, S$d = class {
    constructor(t){
        this._getVerticalOffsetForLine = t, this._zones = [], this._colorZonesInvalid = !1, this._lineHeight = 0, this._domWidth = 0, this._domHeight = 0, this._outerHeight = 0, this._pixelRatio = 1, this._lastAssignedId = 0, this._color2Id = Object.create(null), this._id2Color = [];
    }
    getId2Color() {
        return this._id2Color;
    }
    setZones(t) {
        this._zones = t, this._zones.sort(cWo.compare);
    }
    setLineHeight(t) {
        return this._lineHeight === t ? !1 : (this._lineHeight = t, this._colorZonesInvalid = !0, !0);
    }
    setPixelRatio(t) {
        this._pixelRatio = t, this._colorZonesInvalid = !0;
    }
    getDOMWidth() {
        return this._domWidth;
    }
    getCanvasWidth() {
        return this._domWidth * this._pixelRatio;
    }
    setDOMWidth(t) {
        return this._domWidth === t ? !1 : (this._domWidth = t, this._colorZonesInvalid = !0, !0);
    }
    getDOMHeight() {
        return this._domHeight;
    }
    getCanvasHeight() {
        return this._domHeight * this._pixelRatio;
    }
    setDOMHeight(t) {
        return this._domHeight === t ? !1 : (this._domHeight = t, this._colorZonesInvalid = !0, !0);
    }
    getOuterHeight() {
        return this._outerHeight;
    }
    setOuterHeight(t) {
        return this._outerHeight === t ? !1 : (this._outerHeight = t, this._colorZonesInvalid = !0, !0);
    }
    resolveColorZones() {
        const t = this._colorZonesInvalid, e = Math.floor(this._lineHeight), n = Math.floor(this.getCanvasHeight()), i = Math.floor(this._outerHeight), r = n / i, s = Math.floor(4 * this._pixelRatio / 2), o = [];
        for(let a = 0, l = this._zones.length; a < l; a++){
            const c = this._zones[a];
            if (!t) {
                const S = c.getColorZones();
                if (S) {
                    o.push(S);
                    continue;
                }
            }
            const u = this._getVerticalOffsetForLine(c.startLineNumber), d = c.heightInLines === 0 ? this._getVerticalOffsetForLine(c.endLineNumber) + e : u + c.heightInLines * e, h = Math.floor(r * u), p = Math.floor(r * d);
            let g = Math.floor((h + p) / 2), f = p - g;
            f < s && (f = s), g - f < 0 && (g = f), g + f > n && (g = n - f);
            const _ = c.color;
            let b = this._color2Id[_];
            b || (b = ++this._lastAssignedId, this._color2Id[_] = b, this._id2Color[b] = _);
            const y = new lWo(g - f, g + f, b);
            c.setColorZone(y), o.push(y);
        }
        return this._colorZonesInvalid = !1, o.sort(lWo.compare), o;
    }
};

}

import { x } from "./tslib.es6.js";
var its, rts, c6c;
export { c6c, its, rts };
var __wakaru_l6c_initialized = false;
export function l6c() {
if (__wakaru_l6c_initialized) return;
__wakaru_l6c_initialized = true;
"use strict";
x(), its = class {
    constructor(e, t, n){
        this._colorZoneBrand = void 0, this.from = e | 0, this.to = t | 0, this.colorId = n | 0;
    }
    static compare(e, t) {
        return e.colorId === t.colorId ? e.from === t.from ? e.to - t.to : e.from - t.from : e.colorId - t.colorId;
    }
}, rts = class {
    constructor(e, t, n, i){
        this._overviewRulerZoneBrand = void 0, this.startLineNumber = e, this.endLineNumber = t, this.heightInLines = n, this.color = i, this._colorZone = null;
    }
    static compare(e, t) {
        return e.color === t.color ? e.startLineNumber === t.startLineNumber ? e.heightInLines === t.heightInLines ? e.endLineNumber - t.endLineNumber : e.heightInLines - t.heightInLines : e.startLineNumber - t.startLineNumber : e.color < t.color ? -1 : 1;
    }
    setColorZone(e) {
        this._colorZone = e;
    }
    getColorZones() {
        return this._colorZone;
    }
}, c6c = class {
    constructor(e){
        this._getVerticalOffsetForLine = e, this._zones = [], this._colorZonesInvalid = !1, this._lineHeight = 0, this._domWidth = 0, this._domHeight = 0, this._outerHeight = 0, this._pixelRatio = 1, this._lastAssignedId = 0, this._color2Id = Object.create(null), this._id2Color = [];
    }
    getId2Color() {
        return this._id2Color;
    }
    setZones(e) {
        this._zones = e, this._zones.sort(rts.compare);
    }
    setLineHeight(e) {
        return this._lineHeight === e ? !1 : (this._lineHeight = e, this._colorZonesInvalid = !0, !0);
    }
    setPixelRatio(e) {
        this._pixelRatio = e, this._colorZonesInvalid = !0;
    }
    getDOMWidth() {
        return this._domWidth;
    }
    getCanvasWidth() {
        return this._domWidth * this._pixelRatio;
    }
    setDOMWidth(e) {
        return this._domWidth === e ? !1 : (this._domWidth = e, this._colorZonesInvalid = !0, !0);
    }
    getDOMHeight() {
        return this._domHeight;
    }
    getCanvasHeight() {
        return this._domHeight * this._pixelRatio;
    }
    setDOMHeight(e) {
        return this._domHeight === e ? !1 : (this._domHeight = e, this._colorZonesInvalid = !0, !0);
    }
    getOuterHeight() {
        return this._outerHeight;
    }
    setOuterHeight(e) {
        return this._outerHeight === e ? !1 : (this._outerHeight = e, this._colorZonesInvalid = !0, !0);
    }
    resolveColorZones() {
        const e = this._colorZonesInvalid, t = Math.floor(this._lineHeight), n = Math.floor(this.getCanvasHeight()), i = Math.floor(this._outerHeight), r = n / i, s = Math.floor(4 * this._pixelRatio / 2), o = [];
        for(let a = 0, c = this._zones.length; a < c; a++){
            const l = this._zones[a];
            if (!e) {
                const E = l.getColorZones();
                if (E) {
                    o.push(E);
                    continue;
                }
            }
            const u = this._getVerticalOffsetForLine(l.startLineNumber), h = l.heightInLines === 0 ? this._getVerticalOffsetForLine(l.endLineNumber) + t : u + l.heightInLines * t, p = Math.floor(r * u), g = Math.floor(r * h);
            let f = Math.floor((p + g) / 2), v = g - f;
            v < s && (v = s), f - v < 0 && (f = v), f + v > n && (f = n - v);
            const b = l.color;
            let y = this._color2Id[b];
            y || (y = ++this._lastAssignedId, this._color2Id[b] = y, this._id2Color[y] = b);
            const T = new its(f - v, f + v, y);
            l.setColorZone(T), o.push(T);
        }
        return this._colorZonesInvalid = !1, o.sort(its.compare), o;
    }
};

}

import { Se, bt, u3, ve, we } from "./HVr.js";
import { Ky, Wp } from "./languages.js";
import { QBc, Uze } from "./rgba.js";
import { x } from "./tslib.es6.js";
var VJr, jJr;
export { VJr, jJr };
var __wakaru_JBc_initialized = false;
export function JBc() {
if (__wakaru_JBc_initialized) return;
__wakaru_JBc_initialized = true;
"use strict";
x(), bt(), Se(), QBc(), Wp(), VJr = class kkm extends we {
    constructor(){
        super(), this._onDidChange = this._register(new ve), this.onDidChange = this._onDidChange.event, this._updateColorMap(), this._register(Ky.onDidChange((t)=>{
            t.changedColorMap && this._updateColorMap();
        }));
    }
    static getInstance() {
        return this._INSTANCE || (this._INSTANCE = u3(new kkm)), this._INSTANCE;
    }
    _updateColorMap() {
        const t = Ky.getColorMap();
        if (!t) {
            this._colors = [
                Uze.Empty
            ], this._backgroundIsLight = !0;
            return;
        }
        this._colors = [
            Uze.Empty
        ];
        for(let i = 1; i < t.length; i++){
            const r = t[i].rgba;
            this._colors[i] = new Uze(r.r, r.g, r.b, Math.round(r.a * 255));
        }
        const n = t[2].getRelativeLuminance();
        this._backgroundIsLight = n >= .5, this._onDidChange.fire(void 0);
    }
    getColor(t) {
        return (t < 1 || t >= this._colors.length) && (t = 2), this._colors[t];
    }
    backgroundIsLight() {
        return this._backgroundIsLight;
    }
}, VJr._INSTANCE = null, jJr = VJr;

}

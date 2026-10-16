import { Gt, Qe, m4, st, tt } from "./Iwo.js";
import { BI, Iy } from "./languages.js";
import { myt, pUd } from "./rgba.js";
import { E } from "./tslib.es6.js";
var q$o, z$o;
export { q$o, z$o };
var __wakaru_mUd_initialized = false;
export function mUd() {
if (__wakaru_mUd_initialized) return;
__wakaru_mUd_initialized = true;
"use strict";
E(), Gt(), Qe(), pUd(), Iy(), q$o = class VAb extends st {
    constructor(){
        super(), this._onDidChange = this._register(new tt), this.onDidChange = this._onDidChange.event, this._updateColorMap(), this._register(BI.onDidChange((e)=>{
            e.changedColorMap && this._updateColorMap();
        }));
    }
    static getInstance() {
        return this._INSTANCE || (this._INSTANCE = m4(new VAb)), this._INSTANCE;
    }
    _updateColorMap() {
        const e = BI.getColorMap();
        if (!e) {
            this._colors = [
                myt.Empty
            ], this._backgroundIsLight = !0;
            return;
        }
        this._colors = [
            myt.Empty
        ];
        for(let i = 1; i < e.length; i++){
            const r = e[i].rgba;
            this._colors[i] = new myt(r.r, r.g, r.b, Math.round(r.a * 255));
        }
        const n = e[2].getRelativeLuminance();
        this._backgroundIsLight = n >= .5, this._onDidChange.fire(void 0);
    }
    getColor(e) {
        return (e < 1 || e >= this._colors.length) && (e = 2), this._colors[e];
    }
    backgroundIsLight() {
        return this._backgroundIsLight;
    }
}, q$o._INSTANCE = null, z$o = q$o;

}

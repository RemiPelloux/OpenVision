import { E } from "./tslib.es6.js";
var Mvn, u_e, vnt, Vzo, bz, UEr;
export { Mvn, UEr, Vzo, bz, u_e, vnt };
var __wakaru_AHe_initialized = false;
export function AHe() {
if (__wakaru_AHe_initialized) return;
__wakaru_AHe_initialized = true;
"use strict";
E(), Mvn = ((t)=>(t[t.Hidden = 0] = "Hidden", t[t.Visible = 1] = "Visible", t[t.Recurse = 2] = "Recurse", t))(Mvn || {}), u_e = ((t)=>(t[t.Expanded = 0] = "Expanded", t[t.Collapsed = 1] = "Collapsed", t[t.PreserveOrExpanded = 2] = "PreserveOrExpanded", t[t.PreserveOrCollapsed = 3] = "PreserveOrCollapsed", t))(u_e || {}), vnt = ((t)=>(t[t.Unknown = 0] = "Unknown", t[t.Twistie = 1] = "Twistie", t[t.Element = 2] = "Element", t[t.Filter = 3] = "Filter", t))(vnt || {}), Vzo = ((t)=>(t[t.Down = 0] = "Down", t[t.Up = 1] = "Up", t))(Vzo || {}), bz = class extends Error {
    constructor(t, e){
        super(`TreeError [${t}] ${e}`);
    }
}, UEr = class {
    constructor(t){
        this.fn = t, this._map = new WeakMap;
    }
    map(t) {
        let e = this._map.get(t);
        return e || (e = this.fn(t), this._map.set(t, e)), e;
    }
};

}

import { x } from "./tslib.es6.js";
var vR, dU, y5e, vmt, hU, Wyi;
export { Wyi, dU, hU, vR, vmt, y5e };
var __wakaru_pU_initialized = false;
export function pU() {
if (__wakaru_pU_initialized) return;
__wakaru_pU_initialized = true;
"use strict";
x(), vR = ((e)=>(e[e.Hidden = 0] = "Hidden", e[e.Visible = 1] = "Visible", e[e.Recurse = 2] = "Recurse", e))(vR || {}), dU = ((e)=>(e[e.Expanded = 0] = "Expanded", e[e.Collapsed = 1] = "Collapsed", e[e.PreserveOrExpanded = 2] = "PreserveOrExpanded", e[e.PreserveOrCollapsed = 3] = "PreserveOrCollapsed", e))(dU || {}), y5e = ((e)=>(e[e.Unknown = 0] = "Unknown", e[e.Twistie = 1] = "Twistie", e[e.Element = 2] = "Element", e[e.Filter = 3] = "Filter", e))(y5e || {}), vmt = ((e)=>(e[e.Down = 0] = "Down", e[e.Up = 1] = "Up", e))(vmt || {}), hU = class extends Error {
    constructor(e, t){
        super(`TreeError [${e}] ${t}`);
    }
}, Wyi = class {
    constructor(e){
        this.fn = e, this._map = new WeakMap;
    }
    map(e) {
        let t = this._map.get(e);
        return t || (t = this.fn(e), this._map.set(e, t)), t;
    }
};

}

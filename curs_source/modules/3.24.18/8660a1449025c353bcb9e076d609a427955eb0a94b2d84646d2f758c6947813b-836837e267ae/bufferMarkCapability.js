import { Gt, Qe, st, tt } from "./Iwo.js";
import { E } from "./tslib.es6.js";
var oPg;
export { oPg };
var __wakaru_bDk_initialized = false;
export function bDk() {
if (__wakaru_bDk_initialized) return;
__wakaru_bDk_initialized = true;
"use strict";
E(), Gt(), Qe(), oPg = class extends st {
    constructor(t){
        super(), this._terminal = t, this.type = 4, this._idToMarkerMap = new Map, this._anonymousMarkers = new Map, this._onMarkAdded = this._register(new tt), this.onMarkAdded = this._onMarkAdded.event;
    }
    *markers() {
        for (const t of this._idToMarkerMap.values())yield t;
        for (const t of this._anonymousMarkers.values())yield t;
    }
    addMark(t) {
        const e = t?.marker || this._terminal.registerMarker(), n = t?.id;
        e && (n ? (this._idToMarkerMap.set(n, e), e.onDispose(()=>this._idToMarkerMap.delete(n))) : (this._anonymousMarkers.set(e.id, e), e.onDispose(()=>this._anonymousMarkers.delete(e.id))), this._onMarkAdded.fire({
            marker: e,
            id: n,
            hidden: t?.hidden,
            hoverMessage: t?.hoverMessage
        }));
    }
    getMark(t) {
        return this._idToMarkerMap.get(t);
    }
};

}

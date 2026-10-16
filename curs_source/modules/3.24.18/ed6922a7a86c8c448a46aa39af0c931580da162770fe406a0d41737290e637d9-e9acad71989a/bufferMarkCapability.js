import { Se, bt, ve, we } from "./HVr.js";
import { x } from "./tslib.es6.js";
var A9h;
export { A9h };
var __wakaru_dh__initialized = false;
export function dh_() {
if (__wakaru_dh__initialized) return;
__wakaru_dh__initialized = true;
"use strict";
x(), bt(), Se(), A9h = class extends we {
    constructor(e){
        super(), this._terminal = e, this.type = 4, this._idToMarkerMap = new Map, this._anonymousMarkers = new Map, this._onMarkAdded = this._register(new ve), this.onMarkAdded = this._onMarkAdded.event;
    }
    *markers() {
        for (const e of this._idToMarkerMap.values())yield e;
        for (const e of this._anonymousMarkers.values())yield e;
    }
    addMark(e) {
        const t = e?.marker || this._terminal.registerMarker(), n = e?.id;
        t && (n ? (this._idToMarkerMap.set(n, t), t.onDispose(()=>this._idToMarkerMap.delete(n))) : (this._anonymousMarkers.set(t.id, t), t.onDispose(()=>this._anonymousMarkers.delete(t.id))), this._onMarkAdded.fire({
            marker: t,
            id: n,
            hidden: e?.hidden,
            hoverMessage: e?.hoverMessage
        }));
    }
    getMark(e) {
        return this._idToMarkerMap.get(e);
    }
};

}

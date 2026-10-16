import { Yn, ya } from "./position.js";
import { x } from "./tslib.es6.js";
var Oes;
export { Oes };
var __wakaru_T9c_initialized = false;
export function T9c() {
if (__wakaru_T9c_initialized) return;
__wakaru_T9c_initialized = true;
"use strict";
x(), ya(), Oes = class Akm {
    constructor(t){
        this.onKeyDown = null, this.onKeyUp = null, this.onContextMenu = null, this.onMouseMove = null, this.onMouseLeave = null, this.onMouseDown = null, this.onMouseUp = null, this.onMouseDrag = null, this.onMouseDrop = null, this.onMouseDropCanceled = null, this.onMouseWheel = null, this._coordinatesConverter = t;
    }
    emitKeyDown(t) {
        this.onKeyDown?.(t);
    }
    emitKeyUp(t) {
        this.onKeyUp?.(t);
    }
    emitContextMenu(t) {
        this.onContextMenu?.(this._convertViewToModelMouseEvent(t));
    }
    emitMouseMove(t) {
        this.onMouseMove?.(this._convertViewToModelMouseEvent(t));
    }
    emitMouseLeave(t) {
        this.onMouseLeave?.(this._convertViewToModelMouseEvent(t));
    }
    emitMouseDown(t) {
        this.onMouseDown?.(this._convertViewToModelMouseEvent(t));
    }
    emitMouseUp(t) {
        this.onMouseUp?.(this._convertViewToModelMouseEvent(t));
    }
    emitMouseDrag(t) {
        this.onMouseDrag?.(this._convertViewToModelMouseEvent(t));
    }
    emitMouseDrop(t) {
        this.onMouseDrop?.(this._convertViewToModelMouseEvent(t));
    }
    emitMouseDropCanceled() {
        this.onMouseDropCanceled?.();
    }
    emitMouseWheel(t) {
        this.onMouseWheel?.(t);
    }
    _convertViewToModelMouseEvent(t) {
        return t.target ? {
            event: t.event,
            target: this._convertViewToModelMouseTarget(t.target)
        } : t;
    }
    _convertViewToModelMouseTarget(t) {
        return Akm.convertViewToModelMouseTarget(t, this._coordinatesConverter);
    }
    static convertViewToModelMouseTarget(t, n) {
        const i = {
            ...t
        };
        return i.position && (i.position = n.convertViewPositionToModelPosition(i.position)), i.range && (i.range = n.convertViewRangeToModelRange(i.range)), (i.type === 5 || i.type === 8) && (i.detail = this.convertViewToModelViewZoneData(i.detail, n)), i;
    }
    static convertViewToModelViewZoneData(t, n) {
        return {
            viewZoneId: t.viewZoneId,
            positionBefore: t.positionBefore ? n.convertViewPositionToModelPosition(t.positionBefore) : t.positionBefore,
            positionAfter: t.positionAfter ? n.convertViewPositionToModelPosition(t.positionAfter) : t.positionAfter,
            position: n.convertViewPositionToModelPosition(t.position),
            afterLineNumber: n.convertViewPositionToModelPosition(new Yn(t.afterLineNumber, 1)).lineNumber
        };
    }
};

}

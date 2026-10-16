import { er, jc } from "./position.js";
import { E } from "./tslib.es6.js";
var UHo;
export { UHo };
var __wakaru_Ujd_initialized = false;
export function Ujd() {
if (__wakaru_Ujd_initialized) return;
__wakaru_Ujd_initialized = true;
"use strict";
E(), jc(), UHo = class eRb {
    constructor(e){
        this.onKeyDown = null, this.onKeyUp = null, this.onContextMenu = null, this.onMouseMove = null, this.onMouseLeave = null, this.onMouseDown = null, this.onMouseUp = null, this.onMouseDrag = null, this.onMouseDrop = null, this.onMouseDropCanceled = null, this.onMouseWheel = null, this._coordinatesConverter = e;
    }
    emitKeyDown(e) {
        this.onKeyDown?.(e);
    }
    emitKeyUp(e) {
        this.onKeyUp?.(e);
    }
    emitContextMenu(e) {
        this.onContextMenu?.(this._convertViewToModelMouseEvent(e));
    }
    emitMouseMove(e) {
        this.onMouseMove?.(this._convertViewToModelMouseEvent(e));
    }
    emitMouseLeave(e) {
        this.onMouseLeave?.(this._convertViewToModelMouseEvent(e));
    }
    emitMouseDown(e) {
        this.onMouseDown?.(this._convertViewToModelMouseEvent(e));
    }
    emitMouseUp(e) {
        this.onMouseUp?.(this._convertViewToModelMouseEvent(e));
    }
    emitMouseDrag(e) {
        this.onMouseDrag?.(this._convertViewToModelMouseEvent(e));
    }
    emitMouseDrop(e) {
        this.onMouseDrop?.(this._convertViewToModelMouseEvent(e));
    }
    emitMouseDropCanceled() {
        this.onMouseDropCanceled?.();
    }
    emitMouseWheel(e) {
        this.onMouseWheel?.(e);
    }
    _convertViewToModelMouseEvent(e) {
        return e.target ? {
            event: e.event,
            target: this._convertViewToModelMouseTarget(e.target)
        } : e;
    }
    _convertViewToModelMouseTarget(e) {
        return eRb.convertViewToModelMouseTarget(e, this._coordinatesConverter);
    }
    static convertViewToModelMouseTarget(e, n) {
        const i = {
            ...e
        };
        return i.position && (i.position = n.convertViewPositionToModelPosition(i.position)), i.range && (i.range = n.convertViewRangeToModelRange(i.range)), (i.type === 5 || i.type === 8) && (i.detail = this.convertViewToModelViewZoneData(i.detail, n)), i;
    }
    static convertViewToModelViewZoneData(e, n) {
        return {
            viewZoneId: e.viewZoneId,
            positionBefore: e.positionBefore ? n.convertViewPositionToModelPosition(e.positionBefore) : e.positionBefore,
            positionAfter: e.positionAfter ? n.convertViewPositionToModelPosition(e.positionAfter) : e.positionAfter,
            position: n.convertViewPositionToModelPosition(e.position),
            afterLineNumber: n.convertViewPositionToModelPosition(new er(e.afterLineNumber, 1)).lineNumber
        };
    }
};

}

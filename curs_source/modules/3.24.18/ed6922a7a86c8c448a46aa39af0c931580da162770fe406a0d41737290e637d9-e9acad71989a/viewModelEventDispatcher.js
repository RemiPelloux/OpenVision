import { Se, bt, ve, we } from "./HVr.js";
import { x } from "./tslib.es6.js";
var EBc, wwe, xBc, OJr, IBc, ABc, RBc, DBc, MBc, PBc, LBc, NBc, OBc, FBc, BBc, UBc;
export { ABc, BBc, DBc, EBc, FBc, IBc, LBc, MBc, NBc, OBc, OJr, PBc, RBc, UBc, wwe, xBc };
var __wakaru_p_i_initialized = false;
export function p_i() {
if (__wakaru_p_i_initialized) return;
__wakaru_p_i_initialized = true;
"use strict";
x(), bt(), Se(), EBc = class extends we {
    constructor(){
        super(), this._onEvent = this._register(new ve), this.onEvent = this._onEvent.event, this._eventHandlers = [], this._viewEventQueue = null, this._isConsumingViewEventQueue = !1, this._collector = null, this._collectorCnt = 0, this._outgoingEvents = [];
    }
    emitOutgoingEvent(e) {
        this._addOutgoingEvent(e), this._emitOutgoingEvents();
    }
    _addOutgoingEvent(e) {
        for(let t = 0, n = this._outgoingEvents.length; t < n; t++){
            const i = this._outgoingEvents[t].kind === e.kind ? this._outgoingEvents[t].attemptToMerge(e) : null;
            if (i) {
                this._outgoingEvents[t] = i;
                return;
            }
        }
        this._outgoingEvents.push(e);
    }
    _emitOutgoingEvents() {
        for(; this._outgoingEvents.length > 0;){
            if (this._collector || this._isConsumingViewEventQueue) return;
            const e = this._outgoingEvents.shift();
            e.isNoOp() || this._onEvent.fire(e);
        }
    }
    addViewEventHandler(e) {
        for(let t = 0, n = this._eventHandlers.length; t < n; t++)this._eventHandlers[t] === e && console.warn("Detected duplicate listener in ViewEventDispatcher", e);
        this._eventHandlers.push(e);
    }
    removeViewEventHandler(e) {
        for(let t = 0; t < this._eventHandlers.length; t++)if (this._eventHandlers[t] === e) {
            this._eventHandlers.splice(t, 1);
            break;
        }
    }
    beginEmitViewEvents() {
        return this._collectorCnt++, this._collectorCnt === 1 && (this._collector = new wwe), this._collector;
    }
    endEmitViewEvents() {
        if (this._collectorCnt--, this._collectorCnt === 0) {
            const e = this._collector.outgoingEvents, t = this._collector.viewEvents;
            this._collector = null;
            for (const n of e)this._addOutgoingEvent(n);
            t.length > 0 && this._emitMany(t);
        }
        this._emitOutgoingEvents();
    }
    emitSingleViewEvent(e) {
        try {
            this.beginEmitViewEvents().emitViewEvent(e);
        } finally{
            this.endEmitViewEvents();
        }
    }
    _emitMany(e) {
        this._viewEventQueue ? this._viewEventQueue = this._viewEventQueue.concat(e) : this._viewEventQueue = e, this._isConsumingViewEventQueue || this._consumeViewEventQueue();
    }
    _consumeViewEventQueue() {
        try {
            this._isConsumingViewEventQueue = !0, this._doConsumeQueue();
        } finally{
            this._isConsumingViewEventQueue = !1;
        }
    }
    _doConsumeQueue() {
        for(; this._viewEventQueue;){
            const e = this._viewEventQueue;
            this._viewEventQueue = null;
            const t = this._eventHandlers.slice(0);
            for (const n of t)n.handleEvents(e);
        }
    }
}, wwe = class {
    constructor(){
        this.viewEvents = [], this.outgoingEvents = [];
    }
    emitViewEvent(e) {
        this.viewEvents.push(e);
    }
    emitOutgoingEvent(e) {
        this.outgoingEvents.push(e);
    }
}, xBc = class vkm {
    constructor(t, n, i, r){
        this.kind = 0, this._oldContentWidth = t, this._oldContentHeight = n, this.contentWidth = i, this.contentHeight = r, this.contentWidthChanged = this._oldContentWidth !== this.contentWidth, this.contentHeightChanged = this._oldContentHeight !== this.contentHeight;
    }
    isNoOp() {
        return !this.contentWidthChanged && !this.contentHeightChanged;
    }
    attemptToMerge(t) {
        return t.kind !== this.kind ? null : new vkm(this._oldContentWidth, this._oldContentHeight, t.contentWidth, t.contentHeight);
    }
}, OJr = class _km {
    constructor(t, n){
        this.kind = 1, this.oldHasFocus = t, this.hasFocus = n;
    }
    isNoOp() {
        return this.oldHasFocus === this.hasFocus;
    }
    attemptToMerge(t) {
        return t.kind !== this.kind ? null : new _km(this.oldHasFocus, t.hasFocus);
    }
}, IBc = class {
    constructor(e, t){
        this.kind = 2, this.oldHasFocus = e, this.hasFocus = t;
    }
    isNoOp() {
        return this.oldHasFocus === this.hasFocus;
    }
    attemptToMerge(e) {
        return e.kind !== this.kind ? null : new OJr(this.oldHasFocus, e.hasFocus);
    }
}, ABc = class bkm {
    constructor(t, n, i, r, s, o, a, c){
        this.kind = 3, this._oldScrollWidth = t, this._oldScrollLeft = n, this._oldScrollHeight = i, this._oldScrollTop = r, this.scrollWidth = s, this.scrollLeft = o, this.scrollHeight = a, this.scrollTop = c, this.scrollWidthChanged = this._oldScrollWidth !== this.scrollWidth, this.scrollLeftChanged = this._oldScrollLeft !== this.scrollLeft, this.scrollHeightChanged = this._oldScrollHeight !== this.scrollHeight, this.scrollTopChanged = this._oldScrollTop !== this.scrollTop;
    }
    isNoOp() {
        return !this.scrollWidthChanged && !this.scrollLeftChanged && !this.scrollHeightChanged && !this.scrollTopChanged;
    }
    attemptToMerge(t) {
        return t.kind !== this.kind ? null : new bkm(this._oldScrollWidth, this._oldScrollLeft, this._oldScrollHeight, this._oldScrollTop, t.scrollWidth, t.scrollLeft, t.scrollHeight, t.scrollTop);
    }
}, RBc = class {
    constructor(){
        this.kind = 4;
    }
    isNoOp() {
        return !1;
    }
    attemptToMerge(e) {
        return e.kind !== this.kind ? null : this;
    }
}, DBc = class {
    constructor(){
        this.kind = 5;
    }
    isNoOp() {
        return !1;
    }
    attemptToMerge(e) {
        return e.kind !== this.kind ? null : this;
    }
}, MBc = class xIa {
    constructor(t, n, i, r, s, o, a){
        this.kind = 7, this.oldSelections = t, this.selections = n, this.oldModelVersionId = i, this.modelVersionId = r, this.source = s, this.reason = o, this.reachedMaxCursorCount = a;
    }
    static _selectionsAreEqual(t, n) {
        if (!t && !n) return !0;
        if (!t || !n) return !1;
        const i = t.length, r = n.length;
        if (i !== r) return !1;
        for(let s = 0; s < i; s++)if (!t[s].equalsSelection(n[s])) return !1;
        return !0;
    }
    isNoOp() {
        return xIa._selectionsAreEqual(this.oldSelections, this.selections) && this.oldModelVersionId === this.modelVersionId;
    }
    attemptToMerge(t) {
        return t.kind !== this.kind ? null : new xIa(this.oldSelections, t.selections, this.oldModelVersionId, t.modelVersionId, t.source, t.reason, this.reachedMaxCursorCount || t.reachedMaxCursorCount);
    }
}, PBc = class {
    constructor(){
        this.kind = 6;
    }
    isNoOp() {
        return !1;
    }
    attemptToMerge(e) {
        return e.kind !== this.kind ? null : this;
    }
}, LBc = class {
    constructor(e){
        this.event = e, this.kind = 8;
    }
    isNoOp() {
        return !1;
    }
    attemptToMerge(e) {
        return null;
    }
}, NBc = class {
    constructor(e){
        this.event = e, this.kind = 9;
    }
    isNoOp() {
        return !1;
    }
    attemptToMerge(e) {
        return null;
    }
}, OBc = class {
    constructor(e){
        this.event = e, this.kind = 10;
    }
    isNoOp() {
        return !1;
    }
    attemptToMerge(e) {
        return null;
    }
}, FBc = class {
    constructor(e){
        this.event = e, this.kind = 11;
    }
    isNoOp() {
        return !1;
    }
    attemptToMerge(e) {
        return null;
    }
}, BBc = class {
    constructor(e){
        this.event = e, this.kind = 12;
    }
    isNoOp() {
        return !1;
    }
    attemptToMerge(e) {
        return null;
    }
}, UBc = class {
    constructor(e){
        this.event = e, this.kind = 13;
    }
    isNoOp() {
        return !1;
    }
    attemptToMerge(e) {
        return null;
    }
};

}

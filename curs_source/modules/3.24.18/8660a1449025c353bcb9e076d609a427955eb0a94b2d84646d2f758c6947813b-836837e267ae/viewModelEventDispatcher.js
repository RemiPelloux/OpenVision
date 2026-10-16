import { Gt, Qe, st, tt } from "./Iwo.js";
import { E } from "./tslib.es6.js";
var B7d, U7d, j7d, B$o, $7d, H7d, W7d, G7d, q7d, z7d, V7d, K7d, Y7d, X7d, Z7d, Q7d;
export { $7d, B$o, B7d, G7d, H7d, K7d, Q7d, U7d, V7d, W7d, X7d, Y7d, Z7d, j7d, q7d, z7d };
var __wakaru_U$o_initialized = false;
export function U$o() {
if (__wakaru_U$o_initialized) return;
__wakaru_U$o_initialized = true;
"use strict";
E(), Gt(), Qe(), B7d = class extends st {
    constructor(){
        super(), this._onEvent = this._register(new tt), this.onEvent = this._onEvent.event, this._eventHandlers = [], this._viewEventQueue = null, this._isConsumingViewEventQueue = !1, this._collector = null, this._collectorCnt = 0, this._outgoingEvents = [];
    }
    emitOutgoingEvent(t) {
        this._addOutgoingEvent(t), this._emitOutgoingEvents();
    }
    _addOutgoingEvent(t) {
        for(let e = 0, n = this._outgoingEvents.length; e < n; e++){
            const i = this._outgoingEvents[e].kind === t.kind ? this._outgoingEvents[e].attemptToMerge(t) : null;
            if (i) {
                this._outgoingEvents[e] = i;
                return;
            }
        }
        this._outgoingEvents.push(t);
    }
    _emitOutgoingEvents() {
        for(; this._outgoingEvents.length > 0;){
            if (this._collector || this._isConsumingViewEventQueue) return;
            const t = this._outgoingEvents.shift();
            t.isNoOp() || this._onEvent.fire(t);
        }
    }
    addViewEventHandler(t) {
        for(let e = 0, n = this._eventHandlers.length; e < n; e++)this._eventHandlers[e] === t && console.warn("Detected duplicate listener in ViewEventDispatcher", t);
        this._eventHandlers.push(t);
    }
    removeViewEventHandler(t) {
        for(let e = 0; e < this._eventHandlers.length; e++)if (this._eventHandlers[e] === t) {
            this._eventHandlers.splice(e, 1);
            break;
        }
    }
    beginEmitViewEvents() {
        return this._collectorCnt++, this._collectorCnt === 1 && (this._collector = new U7d), this._collector;
    }
    endEmitViewEvents() {
        if (this._collectorCnt--, this._collectorCnt === 0) {
            const t = this._collector.outgoingEvents, e = this._collector.viewEvents;
            this._collector = null;
            for (const n of t)this._addOutgoingEvent(n);
            e.length > 0 && this._emitMany(e);
        }
        this._emitOutgoingEvents();
    }
    emitSingleViewEvent(t) {
        try {
            this.beginEmitViewEvents().emitViewEvent(t);
        } finally{
            this.endEmitViewEvents();
        }
    }
    _emitMany(t) {
        this._viewEventQueue ? this._viewEventQueue = this._viewEventQueue.concat(t) : this._viewEventQueue = t, this._isConsumingViewEventQueue || this._consumeViewEventQueue();
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
            const t = this._viewEventQueue;
            this._viewEventQueue = null;
            const e = this._eventHandlers.slice(0);
            for (const n of e)n.handleEvents(t);
        }
    }
}, U7d = class {
    constructor(){
        this.viewEvents = [], this.outgoingEvents = [];
    }
    emitViewEvent(t) {
        this.viewEvents.push(t);
    }
    emitOutgoingEvent(t) {
        this.outgoingEvents.push(t);
    }
}, j7d = class HAb {
    constructor(e, n, i, r){
        this.kind = 0, this._oldContentWidth = e, this._oldContentHeight = n, this.contentWidth = i, this.contentHeight = r, this.contentWidthChanged = this._oldContentWidth !== this.contentWidth, this.contentHeightChanged = this._oldContentHeight !== this.contentHeight;
    }
    isNoOp() {
        return !this.contentWidthChanged && !this.contentHeightChanged;
    }
    attemptToMerge(e) {
        return e.kind !== this.kind ? null : new HAb(this._oldContentWidth, this._oldContentHeight, e.contentWidth, e.contentHeight);
    }
}, B$o = class WAb {
    constructor(e, n){
        this.kind = 1, this.oldHasFocus = e, this.hasFocus = n;
    }
    isNoOp() {
        return this.oldHasFocus === this.hasFocus;
    }
    attemptToMerge(e) {
        return e.kind !== this.kind ? null : new WAb(this.oldHasFocus, e.hasFocus);
    }
}, $7d = class {
    constructor(t, e){
        this.kind = 2, this.oldHasFocus = t, this.hasFocus = e;
    }
    isNoOp() {
        return this.oldHasFocus === this.hasFocus;
    }
    attemptToMerge(t) {
        return t.kind !== this.kind ? null : new B$o(this.oldHasFocus, t.hasFocus);
    }
}, H7d = class GAb {
    constructor(e, n, i, r, s, o, a, l){
        this.kind = 3, this._oldScrollWidth = e, this._oldScrollLeft = n, this._oldScrollHeight = i, this._oldScrollTop = r, this.scrollWidth = s, this.scrollLeft = o, this.scrollHeight = a, this.scrollTop = l, this.scrollWidthChanged = this._oldScrollWidth !== this.scrollWidth, this.scrollLeftChanged = this._oldScrollLeft !== this.scrollLeft, this.scrollHeightChanged = this._oldScrollHeight !== this.scrollHeight, this.scrollTopChanged = this._oldScrollTop !== this.scrollTop;
    }
    isNoOp() {
        return !this.scrollWidthChanged && !this.scrollLeftChanged && !this.scrollHeightChanged && !this.scrollTopChanged;
    }
    attemptToMerge(e) {
        return e.kind !== this.kind ? null : new GAb(this._oldScrollWidth, this._oldScrollLeft, this._oldScrollHeight, this._oldScrollTop, e.scrollWidth, e.scrollLeft, e.scrollHeight, e.scrollTop);
    }
}, W7d = class {
    constructor(){
        this.kind = 4;
    }
    isNoOp() {
        return !1;
    }
    attemptToMerge(t) {
        return t.kind !== this.kind ? null : this;
    }
}, G7d = class {
    constructor(){
        this.kind = 5;
    }
    isNoOp() {
        return !1;
    }
    attemptToMerge(t) {
        return t.kind !== this.kind ? null : this;
    }
}, q7d = class uJc {
    constructor(e, n, i, r, s, o, a){
        this.kind = 7, this.oldSelections = e, this.selections = n, this.oldModelVersionId = i, this.modelVersionId = r, this.source = s, this.reason = o, this.reachedMaxCursorCount = a;
    }
    static _selectionsAreEqual(e, n) {
        if (!e && !n) return !0;
        if (!e || !n) return !1;
        const i = e.length, r = n.length;
        if (i !== r) return !1;
        for(let s = 0; s < i; s++)if (!e[s].equalsSelection(n[s])) return !1;
        return !0;
    }
    isNoOp() {
        return uJc._selectionsAreEqual(this.oldSelections, this.selections) && this.oldModelVersionId === this.modelVersionId;
    }
    attemptToMerge(e) {
        return e.kind !== this.kind ? null : new uJc(this.oldSelections, e.selections, this.oldModelVersionId, e.modelVersionId, e.source, e.reason, this.reachedMaxCursorCount || e.reachedMaxCursorCount);
    }
}, z7d = class {
    constructor(){
        this.kind = 6;
    }
    isNoOp() {
        return !1;
    }
    attemptToMerge(t) {
        return t.kind !== this.kind ? null : this;
    }
}, V7d = class {
    constructor(t){
        this.event = t, this.kind = 8;
    }
    isNoOp() {
        return !1;
    }
    attemptToMerge(t) {
        return null;
    }
}, K7d = class {
    constructor(t){
        this.event = t, this.kind = 9;
    }
    isNoOp() {
        return !1;
    }
    attemptToMerge(t) {
        return null;
    }
}, Y7d = class {
    constructor(t){
        this.event = t, this.kind = 10;
    }
    isNoOp() {
        return !1;
    }
    attemptToMerge(t) {
        return null;
    }
}, X7d = class {
    constructor(t){
        this.event = t, this.kind = 11;
    }
    isNoOp() {
        return !1;
    }
    attemptToMerge(t) {
        return null;
    }
}, Z7d = class {
    constructor(t){
        this.event = t, this.kind = 12;
    }
    isNoOp() {
        return !1;
    }
    attemptToMerge(t) {
        return null;
    }
}, Q7d = class {
    constructor(t){
        this.event = t, this.kind = 13;
    }
    isNoOp() {
        return !1;
    }
    attemptToMerge(t) {
        return null;
    }
};

}

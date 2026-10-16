import { E } from "./tslib.es6.js";
var qtt, n7d, ztt, y$o, i7d, r7d, s7d, Jri, S$o, esi;
export { Jri, S$o, esi, i7d, n7d, qtt, r7d, s7d, y$o, ztt };
var __wakaru_iBt_initialized = false;
export function iBt() {
if (__wakaru_iBt_initialized) return;
__wakaru_iBt_initialized = true;
"use strict";
E(), qtt = ((t)=>(t[t.Flush = 1] = "Flush", t[t.LineChanged = 2] = "LineChanged", t[t.LinesDeleted = 3] = "LinesDeleted", t[t.LinesInserted = 4] = "LinesInserted", t[t.EOLChanged = 5] = "EOLChanged", t))(qtt || {}), n7d = class {
    constructor(){
        this.changeType = 1;
    }
}, ztt = class YYs {
    constructor(e, n, i, r, s){
        this.ownerId = e, this.lineNumber = n, this.column = i, this.options = r, this.order = s;
    }
    static applyInjectedText(e, n) {
        if (!n || n.length === 0) return e;
        let i = "", r = 0;
        for (const s of n)i += e.substring(r, s.column - 1), r = s.column - 1, i += s.options.content;
        return i += e.substring(r), i;
    }
    static fromDecorations(e) {
        const n = [];
        for (const i of e)i.options.before && i.options.before.content.length > 0 && n.push(new YYs(i.ownerId, i.range.startLineNumber, i.range.startColumn, i.options.before, i.options.before.order ?? 0)), i.options.after && i.options.after.content.length > 0 && n.push(new YYs(i.ownerId, i.range.endLineNumber, i.range.endColumn, i.options.after, i.options.after.order ?? 1));
        return n.sort((i, r)=>i.lineNumber === r.lineNumber ? i.column === r.column ? i.order - r.order : i.column - r.column : i.lineNumber - r.lineNumber), n;
    }
    withText(e) {
        return new YYs(this.ownerId, this.lineNumber, this.column, {
            ...this.options,
            content: e
        }, this.order);
    }
}, y$o = class {
    constructor(t, e, n){
        this.changeType = 2, this.lineNumber = t, this.detail = e, this.injectedText = n;
    }
}, i7d = class {
    constructor(t, e){
        this.changeType = 3, this.fromLineNumber = t, this.toLineNumber = e;
    }
}, r7d = class {
    constructor(t, e, n, i){
        this.changeType = 4, this.injectedTexts = i, this.fromLineNumber = t, this.toLineNumber = e, this.detail = n;
    }
}, s7d = class {
    constructor(){
        this.changeType = 5;
    }
}, Jri = class FAb {
    constructor(e, n, i, r){
        this.changes = e, this.versionId = n, this.isUndoing = i, this.isRedoing = r, this.resultingSelection = null;
    }
    containsEvent(e) {
        for(let n = 0, i = this.changes.length; n < i; n++)if (this.changes[n].changeType === e) return !0;
        return !1;
    }
    static merge(e, n) {
        const i = [].concat(e.changes).concat(n.changes), r = n.versionId, s = e.isUndoing || n.isUndoing, o = e.isRedoing || n.isRedoing;
        return new FAb(i, r, s, o);
    }
}, S$o = class {
    constructor(t){
        this.changes = t;
    }
}, esi = class aJc {
    constructor(e, n){
        this.rawContentChangedEvent = e, this.contentChangedEvent = n;
    }
    merge(e) {
        const n = Jri.merge(this.rawContentChangedEvent, e.rawContentChangedEvent), i = aJc._mergeChangeEvents(this.contentChangedEvent, e.contentChangedEvent);
        return new aJc(n, i);
    }
    static _mergeChangeEvents(e, n) {
        const i = [].concat(e.changes).concat(n.changes), r = n.eol, s = n.versionId, o = e.isUndoing || n.isUndoing, a = e.isRedoing || n.isRedoing, l = e.isFlush || n.isFlush, c = e.isEolChange && n.isEolChange;
        return {
            changes: i,
            eol: r,
            isEolChange: c,
            versionId: s,
            isUndoing: o,
            isRedoing: a,
            isFlush: l
        };
    }
};

}

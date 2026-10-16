import { x } from "./tslib.es6.js";
var ZBe, I3c, QBe, cJr, A3c, R3c, D3c, _fn, lJr, bfn;
export { A3c, D3c, I3c, QBe, R3c, ZBe, _fn, bfn, cJr, lJr };
var __wakaru_xpt_initialized = false;
export function xpt() {
if (__wakaru_xpt_initialized) return;
__wakaru_xpt_initialized = true;
"use strict";
x(), ZBe = ((e)=>(e[e.Flush = 1] = "Flush", e[e.LineChanged = 2] = "LineChanged", e[e.LinesDeleted = 3] = "LinesDeleted", e[e.LinesInserted = 4] = "LinesInserted", e[e.EOLChanged = 5] = "EOLChanged", e))(ZBe || {}), I3c = class {
    constructor(){
        this.changeType = 1;
    }
}, QBe = class c1r {
    constructor(t, n, i, r, s){
        this.ownerId = t, this.lineNumber = n, this.column = i, this.options = r, this.order = s;
    }
    static applyInjectedText(t, n) {
        if (!n || n.length === 0) return t;
        let i = "", r = 0;
        for (const s of n)i += t.substring(r, s.column - 1), r = s.column - 1, i += s.options.content;
        return i += t.substring(r), i;
    }
    static fromDecorations(t) {
        const n = [];
        for (const i of t)i.options.before && i.options.before.content.length > 0 && n.push(new c1r(i.ownerId, i.range.startLineNumber, i.range.startColumn, i.options.before, i.options.before.order ?? 0)), i.options.after && i.options.after.content.length > 0 && n.push(new c1r(i.ownerId, i.range.endLineNumber, i.range.endColumn, i.options.after, i.options.after.order ?? 1));
        return n.sort((i, r)=>i.lineNumber === r.lineNumber ? i.column === r.column ? i.order - r.order : i.column - r.column : i.lineNumber - r.lineNumber), n;
    }
    withText(t) {
        return new c1r(this.ownerId, this.lineNumber, this.column, {
            ...this.options,
            content: t
        }, this.order);
    }
}, cJr = class {
    constructor(e, t, n){
        this.changeType = 2, this.lineNumber = e, this.detail = t, this.injectedText = n;
    }
}, A3c = class {
    constructor(e, t){
        this.changeType = 3, this.fromLineNumber = e, this.toLineNumber = t;
    }
}, R3c = class {
    constructor(e, t, n, i){
        this.changeType = 4, this.injectedTexts = i, this.fromLineNumber = e, this.toLineNumber = t, this.detail = n;
    }
}, D3c = class {
    constructor(){
        this.changeType = 5;
    }
}, _fn = class hkm {
    constructor(t, n, i, r){
        this.changes = t, this.versionId = n, this.isUndoing = i, this.isRedoing = r, this.resultingSelection = null;
    }
    containsEvent(t) {
        for(let n = 0, i = this.changes.length; n < i; n++)if (this.changes[n].changeType === t) return !0;
        return !1;
    }
    static merge(t, n) {
        const i = [].concat(t.changes).concat(n.changes), r = n.versionId, s = t.isUndoing || n.isUndoing, o = t.isRedoing || n.isRedoing;
        return new hkm(i, r, s, o);
    }
}, lJr = class {
    constructor(e){
        this.changes = e;
    }
}, bfn = class CIa {
    constructor(t, n){
        this.rawContentChangedEvent = t, this.contentChangedEvent = n;
    }
    merge(t) {
        const n = _fn.merge(this.rawContentChangedEvent, t.rawContentChangedEvent), i = CIa._mergeChangeEvents(this.contentChangedEvent, t.contentChangedEvent);
        return new CIa(n, i);
    }
    static _mergeChangeEvents(t, n) {
        const i = [].concat(t.changes).concat(n.changes), r = n.eol, s = n.versionId, o = t.isUndoing || n.isUndoing, a = t.isRedoing || n.isRedoing, c = t.isFlush || n.isFlush, l = t.isEolChange && n.isEolChange;
        return {
            changes: i,
            eol: r,
            isEolChange: l,
            versionId: s,
            isUndoing: o,
            isRedoing: a,
            isFlush: c
        };
    }
};

}

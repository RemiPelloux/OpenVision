import { BCo, D, Ei, Ga, Lse, Nse, UCo, xr } from "./Iwo.js";
import { Bt } from "./nls.js";
import { er, jc } from "./position.js";
import { Aa, Lr } from "./resources.js";
import { Cy, bu } from "./selection.js";
import { k5e, l8d } from "./textChange.js";
import { E } from "./tslib.es6.js";
import { fn, rt } from "./uri.js";
import { J2y, Utt, Wjo, ifn } from "./ze.js";
var Zve, Bri, Uri, c8d;
export { Bri, Uri, Zve, c8d };
var __wakaru__0r_initialized = false;
export function _0r() {
if (__wakaru__0r_initialized) return;
__wakaru__0r_initialized = true;
"use strict";
E(), Bt(), Ei(), Cy(), fn(), l8d(), Ga(), Lr(), jc(), Zve = class cmt {
    constructor(e, n, i, r, s, o, a){
        this.beforeVersionId = e, this.afterVersionId = n, this.beforeEOL = i, this.afterEOL = r, this.beforeCursorState = s, this.afterCursorState = o, this.changes = a;
    }
    static create(e, n) {
        const i = e.getAlternativeVersionId(), r = Wjo(e);
        return new cmt(i, i, r, r, n, n, []);
    }
    append(e, n, i, r, s) {
        n.length > 0 && (this.changes = J2y(this.changes, n)), this.afterEOL = i, this.afterVersionId = r, this.afterCursorState = s;
    }
    static _writeSelectionsSize(e) {
        return 4 + 16 * (e ? e.length : 0);
    }
    static _writeSelections(e, n, i) {
        if (Lse(e, n ? n.length : 0, i), i += 4, n) for (const r of n)Lse(e, r.selectionStartLineNumber, i), i += 4, Lse(e, r.selectionStartColumn, i), i += 4, Lse(e, r.positionLineNumber, i), i += 4, Lse(e, r.positionColumn, i), i += 4;
        return i;
    }
    static _readSelections(e, n, i) {
        const r = Nse(e, n);
        n += 4;
        for(let s = 0; s < r; s++){
            const o = Nse(e, n);
            n += 4;
            const a = Nse(e, n);
            n += 4;
            const l = Nse(e, n);
            n += 4;
            const c = Nse(e, n);
            n += 4, i.push(new bu(o, a, l, c));
        }
        return n;
    }
    serialize() {
        let e = 10 + cmt._writeSelectionsSize(this.beforeCursorState) + cmt._writeSelectionsSize(this.afterCursorState) + 4;
        for (const r of this.changes)e += r.writeSize();
        const n = new Uint8Array(e);
        let i = 0;
        Lse(n, this.beforeVersionId, i), i += 4, Lse(n, this.afterVersionId, i), i += 4, UCo(n, this.beforeEOL, i), i += 1, UCo(n, this.afterEOL, i), i += 1, i = cmt._writeSelections(n, this.beforeCursorState, i), i = cmt._writeSelections(n, this.afterCursorState, i), Lse(n, this.changes.length, i), i += 4;
        for (const r of this.changes)i = r.write(n, i);
        return n.buffer;
    }
    static deserialize(e) {
        const n = new Uint8Array(e);
        let i = 0;
        const r = Nse(n, i);
        i += 4;
        const s = Nse(n, i);
        i += 4;
        const o = BCo(n, i);
        i += 1;
        const a = BCo(n, i);
        i += 1;
        const l = [];
        i = cmt._readSelections(n, i, l);
        const c = [];
        i = cmt._readSelections(n, i, c);
        const u = Nse(n, i);
        i += 4;
        const d = [];
        for(let h = 0; h < u; h++)i = k5e.read(n, i, d);
        return new cmt(r, s, o, a, l, c, d);
    }
}, Bri = class {
    constructor(t, e, n, i){
        this.label = t, this.code = e, this.model = n, this._data = Zve.create(n, i);
    }
    get type() {
        return 0;
    }
    get resource() {
        return rt.isUri(this.model) ? this.model : this.model.uri;
    }
    toString() {
        return (this._data instanceof Zve ? this._data : Zve.deserialize(this._data)).changes.map((e)=>e.toString()).join(", ");
    }
    matchesResource(t) {
        return (rt.isUri(this.model) ? this.model : this.model.uri).toString() === t.toString();
    }
    setModel(t) {
        this.model = t;
    }
    canAppend(t) {
        return this.model === t && this._data instanceof Zve;
    }
    append(t, e, n, i, r) {
        this._data instanceof Zve && this._data.append(t, e, n, i, r);
    }
    close() {
        this._data instanceof Zve && (this._data = this._data.serialize());
    }
    open() {
        this._data instanceof Zve || (this._data = Zve.deserialize(this._data));
    }
    undo() {
        if (rt.isUri(this.model)) throw new Error("Invalid SingleModelEditStackElement");
        this._data instanceof Zve && (this._data = this._data.serialize());
        const t = Zve.deserialize(this._data);
        this.model._applyUndo(t.changes, t.beforeEOL, t.beforeVersionId, t.beforeCursorState);
    }
    redo() {
        if (rt.isUri(this.model)) throw new Error("Invalid SingleModelEditStackElement");
        this._data instanceof Zve && (this._data = this._data.serialize());
        const t = Zve.deserialize(this._data);
        this.model._applyRedo(t.changes, t.afterEOL, t.afterVersionId, t.afterCursorState);
    }
    rebase(t, e, n, i, r, s, o, a) {
        this.open();
        const l = n - (e - t), c = this._data, u = c.changes.map((p)=>(i ? p.newPosition : p.oldPosition) >= e ? p.shift(l) : p);
        c.changes = u;
        const d = (p)=>p.lineNumber > r ? new er(p.lineNumber + o, p.column) : p.lineNumber === r && p.column >= s ? new er(p.lineNumber + o, p.column + a) : p, h = (p)=>bu.fromPositions(d(p.getStartPosition()), d(p.getEndPosition()));
        c.afterCursorState = c.afterCursorState?.map(h) ?? null, c.beforeCursorState = c.beforeCursorState?.map(h) ?? null, this.close();
    }
    heapSize() {
        return this._data instanceof Zve && (this._data = this._data.serialize()), this._data.byteLength + 168;
    }
}, Uri = class {
    constructor(t, e, n){
        this.label = t, this.code = e, this.type = 1, this._isOpen = !0, this._editStackElementsArr = n.slice(0), this._editStackElementsMap = new Map;
        for (const i of this._editStackElementsArr){
            const r = ifn(i.resource);
            this._editStackElementsMap.set(r, i);
        }
        this._delegate = null;
    }
    get resources() {
        return this._editStackElementsArr.map((t)=>t.resource);
    }
    setDelegate(t) {
        this._delegate = t;
    }
    prepareUndoRedo() {
        if (this._delegate) return this._delegate.prepareUndoRedo(this);
    }
    getMissingModels() {
        const t = [];
        for (const e of this._editStackElementsArr)rt.isUri(e.model) && t.push(e.model);
        return t;
    }
    matchesResource(t) {
        const e = ifn(t);
        return this._editStackElementsMap.has(e);
    }
    setModel(t) {
        const e = ifn(rt.isUri(t) ? t : t.uri);
        this._editStackElementsMap.has(e) && this._editStackElementsMap.get(e).setModel(t);
    }
    canAppend(t) {
        if (!this._isOpen) return !1;
        const e = ifn(t.uri);
        return this._editStackElementsMap.has(e) ? this._editStackElementsMap.get(e).canAppend(t) : !1;
    }
    append(t, e, n, i, r) {
        const s = ifn(t.uri);
        this._editStackElementsMap.get(s).append(t, e, n, i, r);
    }
    close() {
        this._isOpen = !1;
    }
    open() {}
    undo() {
        this._isOpen = !1;
        for (const t of this._editStackElementsArr)t.undo();
    }
    redo() {
        for (const t of this._editStackElementsArr)t.redo();
    }
    heapSize(t) {
        const e = ifn(t);
        return this._editStackElementsMap.has(e) ? this._editStackElementsMap.get(e).heapSize() : 0;
    }
    split() {
        return this._editStackElementsArr;
    }
    toString() {
        const t = [];
        for (const e of this._editStackElementsArr)t.push(`${Aa(e.resource)}: ${e}`);
        return `{${t.join(", ")}}`;
    }
}, c8d = class MAb {
    constructor(e, n){
        this._model = e, this._undoRedoService = n;
    }
    pushStackElement() {
        const e = this._undoRedoService.getLastElement(this._model.uri);
        Utt(e) && e.close();
    }
    popStackElement() {
        const e = this._undoRedoService.getLastElement(this._model.uri);
        Utt(e) && e.open();
    }
    clear() {
        this._undoRedoService.removeElements(this._model.uri);
    }
    _getOrCreateEditStackElement(e, n, i) {
        const r = this._undoRedoService.getLastElement(this._model.uri);
        if (Utt(r) && r.canAppend(this._model) && i !== !0) return r;
        const s = new Bri(D(884, null), "undoredo.textBufferEdit", this._model, e);
        return this._undoRedoService.pushElement(s, n), s;
    }
    pushEOL(e) {
        const n = this._getOrCreateEditStackElement(null, void 0);
        this._model.setEOL(e), n.append(this._model, [], Wjo(this._model), this._model.getAlternativeVersionId(), null);
    }
    pushEditOperation(e, n, i, r, s) {
        const o = this._getOrCreateEditStackElement(e, r, s), a = this._model.applyEdits(n, !0), l = MAb._computeCursorState(i, a), c = a.map((u, d)=>({
                index: d,
                textChange: u.textChange
            }));
        return c.sort((u, d)=>u.textChange.oldPosition === d.textChange.oldPosition ? u.index - d.index : u.textChange.oldPosition - d.textChange.oldPosition), o.append(this._model, c.map((u)=>u.textChange), Wjo(this._model), this._model.getAlternativeVersionId(), l), l;
    }
    static _computeCursorState(e, n) {
        try {
            return e ? e(n) : null;
        } catch (i) {
            return xr(i), null;
        }
    }
};

}

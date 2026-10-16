import { Fo, S, _K, bK, ezr, ns, si, tzr } from "./HVr.js";
import { rt } from "./nls.js";
import { Yn, ya } from "./position.js";
import { MQr, VBe, Xgg, gOt } from "./qIc.js";
import { Li, fo } from "./resources.js";
import { _f, za } from "./selection.js";
import { PFc, _we } from "./textChange.js";
import { x } from "./tslib.es6.js";
import { Ee, Qt } from "./uri.js";
var hre, jBe, Spt, LFc;
export { LFc, Spt, hre, jBe };
var __wakaru_ifn_initialized = false;
export function ifn() {
if (__wakaru_ifn_initialized) return;
__wakaru_ifn_initialized = true;
"use strict";
x(), rt(), si(), _f(), Qt(), PFc(), Fo(), Li(), ya(), hre = class VWe {
    constructor(t, n, i, r, s, o, a){
        this.beforeVersionId = t, this.afterVersionId = n, this.beforeEOL = i, this.afterEOL = r, this.beforeCursorState = s, this.afterCursorState = o, this.changes = a;
    }
    static create(t, n) {
        const i = t.getAlternativeVersionId(), r = MQr(t);
        return new VWe(i, i, r, r, n, n, []);
    }
    append(t, n, i, r, s) {
        n.length > 0 && (this.changes = Xgg(this.changes, n)), this.afterEOL = i, this.afterVersionId = r, this.afterCursorState = s;
    }
    static _writeSelectionsSize(t) {
        return 4 + 16 * (t ? t.length : 0);
    }
    static _writeSelections(t, n, i) {
        if (bK(t, n ? n.length : 0, i), i += 4, n) for (const r of n)bK(t, r.selectionStartLineNumber, i), i += 4, bK(t, r.selectionStartColumn, i), i += 4, bK(t, r.positionLineNumber, i), i += 4, bK(t, r.positionColumn, i), i += 4;
        return i;
    }
    static _readSelections(t, n, i) {
        const r = _K(t, n);
        n += 4;
        for(let s = 0; s < r; s++){
            const o = _K(t, n);
            n += 4;
            const a = _K(t, n);
            n += 4;
            const c = _K(t, n);
            n += 4;
            const l = _K(t, n);
            n += 4, i.push(new za(o, a, c, l));
        }
        return n;
    }
    serialize() {
        let t = 10 + VWe._writeSelectionsSize(this.beforeCursorState) + VWe._writeSelectionsSize(this.afterCursorState) + 4;
        for (const r of this.changes)t += r.writeSize();
        const n = new Uint8Array(t);
        let i = 0;
        bK(n, this.beforeVersionId, i), i += 4, bK(n, this.afterVersionId, i), i += 4, tzr(n, this.beforeEOL, i), i += 1, tzr(n, this.afterEOL, i), i += 1, i = VWe._writeSelections(n, this.beforeCursorState, i), i = VWe._writeSelections(n, this.afterCursorState, i), bK(n, this.changes.length, i), i += 4;
        for (const r of this.changes)i = r.write(n, i);
        return n.buffer;
    }
    static deserialize(t) {
        const n = new Uint8Array(t);
        let i = 0;
        const r = _K(n, i);
        i += 4;
        const s = _K(n, i);
        i += 4;
        const o = ezr(n, i);
        i += 1;
        const a = ezr(n, i);
        i += 1;
        const c = [];
        i = VWe._readSelections(n, i, c);
        const l = [];
        i = VWe._readSelections(n, i, l);
        const u = _K(n, i);
        i += 4;
        const h = [];
        for(let p = 0; p < u; p++)i = _we.read(n, i, h);
        return new VWe(r, s, o, a, c, l, h);
    }
}, jBe = class {
    constructor(e, t, n, i){
        this.label = e, this.code = t, this.model = n, this._data = hre.create(n, i);
    }
    get type() {
        return 0;
    }
    get resource() {
        return Ee.isUri(this.model) ? this.model : this.model.uri;
    }
    toString() {
        return (this._data instanceof hre ? this._data : hre.deserialize(this._data)).changes.map((t)=>t.toString()).join(", ");
    }
    matchesResource(e) {
        return (Ee.isUri(this.model) ? this.model : this.model.uri).toString() === e.toString();
    }
    setModel(e) {
        this.model = e;
    }
    canAppend(e) {
        return this.model === e && this._data instanceof hre;
    }
    append(e, t, n, i, r) {
        this._data instanceof hre && this._data.append(e, t, n, i, r);
    }
    close() {
        this._data instanceof hre && (this._data = this._data.serialize());
    }
    open() {
        this._data instanceof hre || (this._data = hre.deserialize(this._data));
    }
    undo() {
        if (Ee.isUri(this.model)) throw new Error("Invalid SingleModelEditStackElement");
        this._data instanceof hre && (this._data = this._data.serialize());
        const e = hre.deserialize(this._data);
        this.model._applyUndo(e.changes, e.beforeEOL, e.beforeVersionId, e.beforeCursorState);
    }
    redo() {
        if (Ee.isUri(this.model)) throw new Error("Invalid SingleModelEditStackElement");
        this._data instanceof hre && (this._data = this._data.serialize());
        const e = hre.deserialize(this._data);
        this.model._applyRedo(e.changes, e.afterEOL, e.afterVersionId, e.afterCursorState);
    }
    rebase(e, t, n, i, r, s, o, a) {
        this.open();
        const c = n - (t - e), l = this._data, u = l.changes.map((g)=>(i ? g.newPosition : g.oldPosition) >= t ? g.shift(c) : g);
        l.changes = u;
        const h = (g)=>g.lineNumber > r ? new Yn(g.lineNumber + o, g.column) : g.lineNumber === r && g.column >= s ? new Yn(g.lineNumber + o, g.column + a) : g, p = (g)=>za.fromPositions(h(g.getStartPosition()), h(g.getEndPosition()));
        l.afterCursorState = l.afterCursorState?.map(p) ?? null, l.beforeCursorState = l.beforeCursorState?.map(p) ?? null, this.close();
    }
    heapSize() {
        return this._data instanceof hre && (this._data = this._data.serialize()), this._data.byteLength + 168;
    }
}, Spt = class {
    constructor(e, t, n){
        this.label = e, this.code = t, this.type = 1, this._isOpen = !0, this._editStackElementsArr = n.slice(0), this._editStackElementsMap = new Map;
        for (const i of this._editStackElementsArr){
            const r = gOt(i.resource);
            this._editStackElementsMap.set(r, i);
        }
        this._delegate = null;
    }
    get resources() {
        return this._editStackElementsArr.map((e)=>e.resource);
    }
    setDelegate(e) {
        this._delegate = e;
    }
    prepareUndoRedo() {
        if (this._delegate) return this._delegate.prepareUndoRedo(this);
    }
    getMissingModels() {
        const e = [];
        for (const t of this._editStackElementsArr)Ee.isUri(t.model) && e.push(t.model);
        return e;
    }
    matchesResource(e) {
        const t = gOt(e);
        return this._editStackElementsMap.has(t);
    }
    setModel(e) {
        const t = gOt(Ee.isUri(e) ? e : e.uri);
        this._editStackElementsMap.has(t) && this._editStackElementsMap.get(t).setModel(e);
    }
    canAppend(e) {
        if (!this._isOpen) return !1;
        const t = gOt(e.uri);
        return this._editStackElementsMap.has(t) ? this._editStackElementsMap.get(t).canAppend(e) : !1;
    }
    append(e, t, n, i, r) {
        const s = gOt(e.uri);
        this._editStackElementsMap.get(s).append(e, t, n, i, r);
    }
    close() {
        this._isOpen = !1;
    }
    open() {}
    undo() {
        this._isOpen = !1;
        for (const e of this._editStackElementsArr)e.undo();
    }
    redo() {
        for (const e of this._editStackElementsArr)e.redo();
    }
    heapSize(e) {
        const t = gOt(e);
        return this._editStackElementsMap.has(t) ? this._editStackElementsMap.get(t).heapSize() : 0;
    }
    split() {
        return this._editStackElementsArr;
    }
    toString() {
        const e = [];
        for (const t of this._editStackElementsArr)e.push(`${fo(t.resource)}: ${t}`);
        return `{${e.join(", ")}}`;
    }
}, LFc = class akm {
    constructor(t, n){
        this._model = t, this._undoRedoService = n;
    }
    pushStackElement() {
        const t = this._undoRedoService.getLastElement(this._model.uri);
        VBe(t) && t.close();
    }
    popStackElement() {
        const t = this._undoRedoService.getLastElement(this._model.uri);
        VBe(t) && t.open();
    }
    clear() {
        this._undoRedoService.removeElements(this._model.uri);
    }
    _getOrCreateEditStackElement(t, n, i) {
        const r = this._undoRedoService.getLastElement(this._model.uri);
        if (VBe(r) && r.canAppend(this._model) && i !== !0) return r;
        const s = new jBe(S(884, null), "undoredo.textBufferEdit", this._model, t);
        return this._undoRedoService.pushElement(s, n), s;
    }
    pushEOL(t) {
        const n = this._getOrCreateEditStackElement(null, void 0);
        this._model.setEOL(t), n.append(this._model, [], MQr(this._model), this._model.getAlternativeVersionId(), null);
    }
    pushEditOperation(t, n, i, r, s) {
        const o = this._getOrCreateEditStackElement(t, r, s), a = this._model.applyEdits(n, !0), c = akm._computeCursorState(i, a), l = a.map((u, h)=>({
                index: h,
                textChange: u.textChange
            }));
        return l.sort((u, h)=>u.textChange.oldPosition === h.textChange.oldPosition ? u.index - h.index : u.textChange.oldPosition - h.textChange.oldPosition), o.append(this._model, l.map((u)=>u.textChange), MQr(this._model), this._model.getAlternativeVersionId(), c), c;
    }
    static _computeCursorState(t, n) {
        try {
            return t ? t(n) : null;
        } catch (i) {
            return ns(i), null;
        }
    }
};

}

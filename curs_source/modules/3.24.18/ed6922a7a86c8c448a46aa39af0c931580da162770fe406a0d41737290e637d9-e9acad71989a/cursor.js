import { Aqe, Lo, Ps, Se, Uqr, jie, ns, si, we } from "./HVr.js";
import { PJr, Xfg } from "./cursorCollection.js";
import { ire, rW, wb } from "./cursorCommon.js";
import { LJr, Zfg } from "./cursorContext.js";
import { pfi, qht } from "./cursorDeleteOperations.js";
import { Nfi, Ofi } from "./cursorTypeEditOperations.js";
import { $Ae, Ffi, tLc } from "./cursorTypeOperations.js";
import { VT, fwe } from "./editorCommon.js";
import { dt, qi } from "./range.js";
import { _f, za } from "./selection.js";
import { lJr, xpt } from "./textModelEvents.js";
import { x } from "./tslib.es6.js";
import { FOt, Npt, _Bc } from "./viewEvents.js";
import { MBc, p_i } from "./viewModelEventDispatcher.js";
var FJr, m_i, BJr, $fn, $Bc, HBc;
export { $Bc, $fn, BJr, FJr, HBc, m_i };
var __wakaru_UJr_initialized = false;
export function UJr() {
if (__wakaru_UJr_initialized) return;
__wakaru_UJr_initialized = true;
"use strict";
x(), si(), Ps(), Xfg(), ire(), Zfg(), pfi(), Ffi(), Ofi(), qi(), _f(), fwe(), xpt(), Npt(), Se(), p_i(), FJr = class extends we {
    constructor(e, t, n, i){
        super(), this._model = e, this._knownModelVersionId = this._model.getVersionId(), this._viewModel = t, this._coordinatesConverter = n, this.context = new LJr(this._model, this._viewModel, this._coordinatesConverter, i), this._cursors = new PJr(this.context), this._hasFocus = !1, this._isHandling = !1, this._compositionState = null, this._columnSelectData = null, this._autoClosedActions = [], this._prevEditOperationType = 0;
    }
    dispose() {
        this._cursors.dispose(), this._autoClosedActions = Lo(this._autoClosedActions), super.dispose();
    }
    updateConfiguration(e) {
        this.context = new LJr(this._model, this._viewModel, this._coordinatesConverter, e), this._cursors.updateContext(this.context);
    }
    onLineMappingChanged(e) {
        this._knownModelVersionId === this._model.getVersionId() && this.setStates(e, "viewModel", 0, this.getCursorStates());
    }
    setHasFocus(e) {
        this._hasFocus = e;
    }
    _validateAutoClosedActions() {
        if (this._autoClosedActions.length > 0) {
            const e = this._cursors.getSelections();
            for(let t = 0; t < this._autoClosedActions.length; t++){
                const n = this._autoClosedActions[t];
                n.isValid(e) || (n.dispose(), this._autoClosedActions.splice(t, 1), t--);
            }
        }
    }
    getPrimaryCursorState() {
        return this._cursors.getPrimaryCursor();
    }
    getLastAddedCursorIndex() {
        return this._cursors.getLastAddedCursorIndex();
    }
    getCursorStates() {
        return this._cursors.getAll();
    }
    setStates(e, t, n, i) {
        let r = !1;
        const s = this.context.cursorConfig.multiCursorLimit;
        i !== null && i.length > s && (i = i.slice(0, s), r = !0);
        const o = m_i.from(this._model, this);
        return this._cursors.setStates(i), this._cursors.normalize(), this._columnSelectData = null, this._validateAutoClosedActions(), this._emitStateChangedIfNecessary(e, t, n, o, r);
    }
    setCursorColumnSelectData(e) {
        this._columnSelectData = e;
    }
    revealAll(e, t, n, i, r, s) {
        const o = this._cursors.getViewPositions();
        let a = null, c = null;
        o.length > 1 ? c = this._cursors.getViewSelections() : a = dt.fromPositions(o[0], o[0]), e.emitViewEvent(new FOt(t, n, a, c, i, r, s));
    }
    revealPrimary(e, t, n, i, r, s) {
        const a = [
            this._cursors.getPrimaryCursor().viewState.selection
        ];
        e.emitViewEvent(new FOt(t, n, null, a, i, r, s));
    }
    saveState() {
        const e = [], t = this._cursors.getSelections();
        for(let n = 0, i = t.length; n < i; n++){
            const r = t[n];
            e.push({
                inSelectionMode: !r.isEmpty(),
                selectionStart: {
                    lineNumber: r.selectionStartLineNumber,
                    column: r.selectionStartColumn
                },
                position: {
                    lineNumber: r.positionLineNumber,
                    column: r.positionColumn
                }
            });
        }
        return e;
    }
    restoreState(e, t) {
        const n = [];
        for(let i = 0, r = t.length; i < r; i++){
            const s = t[i];
            let o = 1, a = 1;
            s.position && s.position.lineNumber && (o = s.position.lineNumber), s.position && s.position.column && (a = s.position.column);
            let c = o, l = a;
            s.selectionStart && s.selectionStart.lineNumber && (c = s.selectionStart.lineNumber), s.selectionStart && s.selectionStart.column && (l = s.selectionStart.column), n.push({
                selectionStartLineNumber: c,
                selectionStartColumn: l,
                positionLineNumber: o,
                positionColumn: a
            });
        }
        this.setStates(e, "restoreState", 0, wb.fromModelSelections(n)), this.revealAll(e, "restoreState", !1, 0, !0, VT.Immediate);
    }
    onModelContentChanged(e, t) {
        if (t instanceof lJr) {
            if (this._isHandling) return;
            this._isHandling = !0;
            try {
                this.setStates(e, "modelChange", 0, this.getCursorStates());
            } finally{
                this._isHandling = !1;
            }
        } else {
            const n = t.rawContentChangedEvent;
            if (this._knownModelVersionId = n.versionId, this._isHandling) return;
            const i = n.containsEvent(1);
            if (this._prevEditOperationType = 0, i) this._cursors.dispose(), this._cursors = new PJr(this.context), this._validateAutoClosedActions(), this._emitStateChangedIfNecessary(e, "model", 1, null, !1);
            else if (this._hasFocus && n.resultingSelection && n.resultingSelection.length > 0) {
                const r = wb.fromModelSelections(n.resultingSelection);
                this.setStates(e, "modelChange", n.isUndoing ? 5 : n.isRedoing ? 6 : 2, r) && this.revealAll(e, "modelChange", !1, 0, !0, VT.Smooth);
            } else {
                const r = this._cursors.readSelectionFromMarkers();
                this.setStates(e, "modelChange", 2, wb.fromModelSelections(r));
            }
        }
    }
    getSelection() {
        return this._cursors.getPrimaryCursor().modelState.selection;
    }
    getTopMostViewPosition() {
        return this._cursors.getTopMostViewPosition();
    }
    getBottomMostViewPosition() {
        return this._cursors.getBottomMostViewPosition();
    }
    getCursorColumnSelectData() {
        if (this._columnSelectData) return this._columnSelectData;
        const e = this._cursors.getPrimaryCursor(), t = e.viewState.selectionStart.getStartPosition(), n = e.viewState.position;
        return {
            isReal: !1,
            fromViewLineNumber: t.lineNumber,
            fromViewVisualColumn: this.context.cursorConfig.visibleColumnFromColumn(this._viewModel, t),
            toViewLineNumber: n.lineNumber,
            toViewVisualColumn: this.context.cursorConfig.visibleColumnFromColumn(this._viewModel, n)
        };
    }
    getSelections() {
        return this._cursors.getSelections();
    }
    getPosition() {
        return this._cursors.getPrimaryCursor().modelState.position;
    }
    setSelections(e, t, n, i) {
        this.setStates(e, t, i, wb.fromModelSelections(n));
    }
    getPrevEditOperationType() {
        return this._prevEditOperationType;
    }
    setPrevEditOperationType(e) {
        this._prevEditOperationType = e;
    }
    _pushAutoClosedAction(e, t) {
        const n = [], i = [];
        for(let o = 0, a = e.length; o < a; o++)n.push({
            range: e[o],
            options: {
                description: "auto-closed-character",
                inlineClassName: "auto-closed-character",
                stickiness: 1
            }
        }), i.push({
            range: t[o],
            options: {
                description: "auto-closed-enclosing",
                stickiness: 1
            }
        });
        const r = this._model.deltaDecorations([], n), s = this._model.deltaDecorations([], i);
        this._autoClosedActions.push(new BJr(this._model, r, s));
    }
    _executeEditOperation(e) {
        if (!e) return;
        e.shouldPushStackElementBefore && this._model.pushStackElement();
        const t = $fn.executeCommands(this._model, this._cursors.getSelections(), e.commands);
        if (t) {
            this._interpretCommandResult(t);
            const n = [], i = [];
            for(let r = 0; r < e.commands.length; r++){
                const s = e.commands[r];
                s instanceof Nfi && s.enclosingRange && s.closeCharacterRange && (n.push(s.closeCharacterRange), i.push(s.enclosingRange));
            }
            n.length > 0 && this._pushAutoClosedAction(n, i), this._prevEditOperationType = e.type;
        }
        e.shouldPushStackElementAfter && this._model.pushStackElement();
    }
    _interpretCommandResult(e) {
        (!e || e.length === 0) && (e = this._cursors.readSelectionFromMarkers()), this._columnSelectData = null, this._cursors.setSelections(e), this._cursors.normalize();
    }
    _emitStateChangedIfNecessary(e, t, n, i, r) {
        const s = m_i.from(this._model, this);
        if (s.equals(i)) return !1;
        const o = this._cursors.getSelections(), a = this._cursors.getViewSelections();
        if (e.emitViewEvent(new _Bc(a, o, n)), !i || i.cursorState.length !== s.cursorState.length || s.cursorState.some((c, l)=>!c.modelState.equals(i.cursorState[l].modelState))) {
            const c = i ? i.cursorState.map((u)=>u.modelState.selection) : null, l = i ? i.modelVersionId : 0;
            e.emitOutgoingEvent(new MBc(c, o, l, s.modelVersionId, t || "keyboard", n, r));
        }
        return !0;
    }
    _findAutoClosingPairs(e) {
        if (!e.length) return null;
        const t = [];
        for(let n = 0, i = e.length; n < i; n++){
            const r = e[n];
            if (!r.text || r.text.indexOf(`
`) >= 0) return null;
            const s = r.text.match(/([)\]}>'"`])([^)\]}>'"`]*)$/);
            if (!s) return null;
            const o = s[1], a = this.context.cursorConfig.autoClosingPairs.autoClosingPairsCloseSingleChar.get(o);
            if (!a || a.length !== 1) return null;
            const c = a[0].open, l = r.text.length - s[2].length - 1, u = r.text.lastIndexOf(c, l - 1);
            if (u === -1) return null;
            t.push([
                u,
                l
            ]);
        }
        return t;
    }
    executeEdits(e, t, n, i) {
        let r = null;
        t === "snippet" && (r = this._findAutoClosingPairs(n)), r && (n[0]._isTracked = !0);
        const s = [], o = [], a = this._model.pushEditOperations(this.getSelections(), n, (c)=>{
            if (r) for(let u = 0, h = r.length; u < h; u++){
                const [p, g] = r[u], f = c[u], v = f.range.startLineNumber, b = f.range.startColumn - 1 + p, y = f.range.startColumn - 1 + g;
                s.push(new dt(v, y + 1, v, y + 2)), o.push(new dt(v, b + 1, v, y + 2));
            }
            const l = i(c);
            return l && (this._isHandling = !0), l;
        });
        a && (this._isHandling = !1, this.setSelections(e, t, a, 0)), s.length > 0 && this._pushAutoClosedAction(s, o);
    }
    _executeEdit(e, t, n, i = 0) {
        if (this.context.cursorConfig.readOnly) return;
        const r = m_i.from(this._model, this);
        this._cursors.stopTrackingSelections(), this._isHandling = !0;
        try {
            this._cursors.ensureValidState(), e();
        } catch (s) {
            ns(s);
        }
        this._isHandling = !1, this._cursors.startTrackingSelections(), this._validateAutoClosedActions(), this._emitStateChangedIfNecessary(t, n, i, r, !1) && this.revealAll(t, n, !1, 0, !0, VT.Smooth);
    }
    getAutoClosedCharacters() {
        return BJr.getAllAutoClosedCharacters(this._autoClosedActions);
    }
    startComposition(e) {
        this._compositionState = new HBc(this._model, this.getSelections());
    }
    endComposition(e, t) {
        const n = this._compositionState ? this._compositionState.deduceOutcome(this._model, this.getSelections()) : null;
        this._compositionState = null, this._executeEdit(()=>{
            t === "keyboard" && this._executeEditOperation($Ae.compositionEndWithInterceptors(this._prevEditOperationType, this.context.cursorConfig, this._model, n, this.getSelections(), this.getAutoClosedCharacters()));
        }, e, t);
    }
    type(e, t, n) {
        this._executeEdit(()=>{
            if (n === "keyboard") {
                const i = t.length;
                let r = 0;
                for(; r < i;){
                    const s = Uqr(t, r), o = t.substr(r, s);
                    this._executeEditOperation($Ae.typeWithInterceptors(!!this._compositionState, this._prevEditOperationType, this.context.cursorConfig, this._model, this.getSelections(), this.getAutoClosedCharacters(), o)), r += s;
                }
            } else this._executeEditOperation($Ae.typeWithoutInterceptors(this._prevEditOperationType, this.context.cursorConfig, this._model, this.getSelections(), t));
        }, e, n);
    }
    compositionType(e, t, n, i, r, s) {
        if (t.length === 0 && n === 0 && i === 0) {
            if (r !== 0) {
                const o = this.getSelections().map((a)=>{
                    const c = a.getPosition();
                    return new za(c.lineNumber, c.column + r, c.lineNumber, c.column + r);
                });
                this.setSelections(e, s, o, 0);
            }
            return;
        }
        this._executeEdit(()=>{
            this._executeEditOperation($Ae.compositionType(this._prevEditOperationType, this.context.cursorConfig, this._model, this.getSelections(), t, n, i, r));
        }, e, s);
    }
    paste(e, t, n, i, r) {
        this._executeEdit(()=>{
            this._executeEditOperation($Ae.paste(this.context.cursorConfig, this._model, this.getSelections(), t, n, i || []));
        }, e, r, 4);
    }
    cut(e, t) {
        this._executeEdit(()=>{
            this._executeEditOperation(qht.cut(this.context.cursorConfig, this._model, this.getSelections()));
        }, e, t);
    }
    executeCommand(e, t, n) {
        this._executeEdit(()=>{
            this._cursors.killSecondaryCursors(), this._executeEditOperation(new rW(0, [
                t
            ], {
                shouldPushStackElementBefore: !1,
                shouldPushStackElementAfter: !1
            }));
        }, e, n);
    }
    executeCommands(e, t, n) {
        this._executeEdit(()=>{
            this._executeEditOperation(new rW(0, t, {
                shouldPushStackElementBefore: !1,
                shouldPushStackElementAfter: !1
            }));
        }, e, n);
    }
}, m_i = class ykm {
    constructor(t, n){
        this.modelVersionId = t, this.cursorState = n;
    }
    static from(t, n) {
        return new ykm(t.getVersionId(), n.getCursorStates());
    }
    equals(t) {
        if (!t || this.modelVersionId !== t.modelVersionId || this.cursorState.length !== t.cursorState.length) return !1;
        for(let n = 0, i = this.cursorState.length; n < i; n++)if (!this.cursorState[n].equals(t.cursorState[n])) return !1;
        return !0;
    }
}, BJr = class {
    static getAllAutoClosedCharacters(e) {
        let t = [];
        for (const n of e)t = t.concat(n.getAutoClosedCharactersRanges());
        return t;
    }
    constructor(e, t, n){
        this._model = e, this._autoClosedCharactersDecorations = t, this._autoClosedEnclosingDecorations = n;
    }
    dispose() {
        this._autoClosedCharactersDecorations = this._model.deltaDecorations(this._autoClosedCharactersDecorations, []), this._autoClosedEnclosingDecorations = this._model.deltaDecorations(this._autoClosedEnclosingDecorations, []);
    }
    getAutoClosedCharactersRanges() {
        const e = [];
        for(let t = 0; t < this._autoClosedCharactersDecorations.length; t++){
            const n = this._model.getDecorationRange(this._autoClosedCharactersDecorations[t]);
            n && e.push(n);
        }
        return e;
    }
    isValid(e) {
        const t = [];
        for(let n = 0; n < this._autoClosedEnclosingDecorations.length; n++){
            const i = this._model.getDecorationRange(this._autoClosedEnclosingDecorations[n]);
            if (i && (t.push(i), i.startLineNumber !== i.endLineNumber)) return !1;
        }
        t.sort(dt.compareRangesUsingStarts), e.sort(dt.compareRangesUsingStarts);
        for(let n = 0; n < e.length; n++)if (n >= t.length || !t[n].strictContainsRange(e[n])) return !1;
        return !0;
    }
}, $fn = class {
    static executeCommands(e, t, n) {
        const i = {
            model: e,
            selectionsBefore: t,
            trackedRanges: [],
            trackedRangesDirection: []
        }, r = this._innerExecuteCommands(i, n);
        for(let s = 0, o = i.trackedRanges.length; s < o; s++)i.model._setTrackedRange(i.trackedRanges[s], null, 0);
        return r;
    }
    static _innerExecuteCommands(e, t) {
        if (this._arrayIsEmpty(t)) return null;
        const n = this._getEditOperations(e, t);
        if (n.operations.length === 0) return null;
        const i = n.operations, r = this._getLoserCursorMap(i);
        if (r.hasOwnProperty("0")) return console.warn("Ignoring commands"), null;
        const s = [];
        for(let c = 0, l = i.length; c < l; c++)r.hasOwnProperty(i[c].identifier.major.toString()) || s.push(i[c]);
        n.hadTrackedEditOperation && s.length > 0 && (s[0]._isTracked = !0);
        let o = e.model.pushEditOperations(e.selectionsBefore, s, (c)=>{
            const l = [];
            for(let p = 0; p < e.selectionsBefore.length; p++)l[p] = [];
            for (const p of c)p.identifier && l[p.identifier.major].push(p);
            const u = (p, g)=>p.identifier.minor - g.identifier.minor, h = [];
            for(let p = 0; p < e.selectionsBefore.length; p++)l[p].length > 0 ? (l[p].sort(u), h[p] = t[p].computeCursorState(e.model, {
                getInverseEditOperations: ()=>l[p],
                getTrackedSelection: (g)=>{
                    const f = parseInt(g, 10), v = e.model._getTrackedRange(e.trackedRanges[f]);
                    return e.trackedRangesDirection[f] === 0 ? new za(v.startLineNumber, v.startColumn, v.endLineNumber, v.endColumn) : new za(v.endLineNumber, v.endColumn, v.startLineNumber, v.startColumn);
                }
            })) : h[p] = e.selectionsBefore[p];
            return h;
        });
        o || (o = e.selectionsBefore);
        const a = [];
        for(const c in r)r.hasOwnProperty(c) && a.push(parseInt(c, 10));
        a.sort((c, l)=>l - c);
        for (const c of a)o.splice(c, 1);
        return o;
    }
    static _arrayIsEmpty(e) {
        for(let t = 0, n = e.length; t < n; t++)if (e[t]) return !1;
        return !0;
    }
    static _getEditOperations(e, t) {
        let n = [], i = !1;
        for(let r = 0, s = t.length; r < s; r++){
            const o = t[r];
            if (o) {
                const a = this._getEditOperationsFromCommand(e, r, o);
                n = n.concat(a.operations), i = i || a.hadTrackedEditOperation;
            }
        }
        return {
            operations: n,
            hadTrackedEditOperation: i
        };
    }
    static _getEditOperationsFromCommand(e, t, n) {
        const i = [];
        let r = 0;
        const s = (u, h, p = !1)=>{
            dt.isEmpty(u) && h === "" || i.push({
                identifier: {
                    major: t,
                    minor: r++
                },
                range: u,
                text: h,
                forceMoveMarkers: p,
                isAutoWhitespaceEdit: n.insertsAutoWhitespace
            });
        };
        let o = !1;
        const l = {
            addEditOperation: s,
            addTrackedEditOperation: (u, h, p)=>{
                o = !0, s(u, h, p);
            },
            trackSelection: (u, h)=>{
                const p = za.liftSelection(u);
                let g;
                if (p.isEmpty()) if (typeof h == "boolean") h ? g = 2 : g = 3;
                else {
                    const b = e.model.getLineMaxColumn(p.startLineNumber);
                    p.startColumn === b ? g = 2 : g = 3;
                }
                else g = 1;
                const f = e.trackedRanges.length, v = e.model._setTrackedRange(null, p, g);
                return e.trackedRanges[f] = v, e.trackedRangesDirection[f] = p.getDirection(), f.toString();
            }
        };
        try {
            n.getEditOperations(e.model, l);
        } catch (u) {
            return ns(u), {
                operations: [],
                hadTrackedEditOperation: !1
            };
        }
        return {
            operations: i,
            hadTrackedEditOperation: o
        };
    }
    static _getLoserCursorMap(e) {
        e = e.slice(0), e.sort((n, i)=>-dt.compareRangesUsingEnds(n.range, i.range));
        const t = {};
        for(let n = 1; n < e.length; n++){
            const i = e[n - 1], r = e[n];
            if (dt.getStartPosition(i.range).isBefore(dt.getEndPosition(r.range))) {
                let s;
                i.identifier.major > r.identifier.major ? s = i.identifier.major : s = r.identifier.major, t[s.toString()] = !0;
                for(let o = 0; o < e.length; o++)e[o].identifier.major === s && (e.splice(o, 1), o < n && n--, o--);
                n > 0 && n--;
            }
        }
        return t;
    }
}, $Bc = class {
    constructor(e, t, n, i){
        this.text = e, this.lineNumber = t, this.startSelectionOffset = n, this.endSelectionOffset = i;
    }
}, HBc = class l1r {
    static _capture(t, n) {
        const i = [];
        for (const r of n){
            if (r.startLineNumber !== r.endLineNumber) return null;
            const s = r.startLineNumber;
            i.push(new $Bc(t.getLineContent(s), s, r.startColumn - 1, r.endColumn - 1));
        }
        return i;
    }
    constructor(t, n){
        this._original = l1r._capture(t, n);
    }
    deduceOutcome(t, n) {
        if (!this._original) return null;
        const i = l1r._capture(t, n);
        if (!i || this._original.length !== i.length) return null;
        const r = [];
        for(let s = 0, o = this._original.length; s < o; s++)r.push(l1r._deduceOutcome(this._original[s], i[s]));
        return r;
    }
    static _deduceOutcome(t, n) {
        const i = Math.min(t.startSelectionOffset, n.startSelectionOffset, jie(t.text, n.text)), r = Math.min(t.text.length - t.endSelectionOffset, n.text.length - n.endSelectionOffset, Aqe(t.text, n.text)), s = t.text.substring(i, t.text.length - r), o = i, a = n.text.length - r, c = n.text.substring(o, a), l = new dt(n.lineNumber, o + 1, n.lineNumber, a + 1);
        return new tLc(s, t.startSelectionOffset - i, t.endSelectionOffset - i, c, n.startSelectionOffset - i, n.endSelectionOffset - i, l);
    }
};

}

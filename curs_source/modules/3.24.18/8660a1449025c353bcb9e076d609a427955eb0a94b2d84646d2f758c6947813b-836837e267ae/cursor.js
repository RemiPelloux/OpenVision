import { Ei, Fa, Ike, Nc, Qe, TCo, bdn, st, xr } from "./Iwo.js";
import { L$o, UPy } from "./cursorCollection.js";
import { CQ, O1, swe } from "./cursorCommon.js";
import { O$o, jPy } from "./cursorContext.js";
import { Bii, Q7o } from "./cursorDeleteOperations.js";
import { Cwr, wwr } from "./cursorTypeEditOperations.js";
import { Twr, c6d, eHe } from "./cursorTypeOperations.js";
import { Ybt, o2 } from "./editorCommon.js";
import { Qs, qt } from "./range.js";
import { Cy, bu } from "./selection.js";
import { S$o, iBt } from "./textModelEvents.js";
import { E } from "./tslib.es6.js";
import { R7d, sBt, vfn } from "./viewEvents.js";
import { U$o, q7d } from "./viewModelEventDispatcher.js";
var J7d, j0r, j$o, eUd, tUd, nUd;
export { J7d, eUd, j$o, j0r, nUd, tUd };
var __wakaru_$Py_initialized = false;
export function $Py() {
if (__wakaru_$Py_initialized) return;
__wakaru_$Py_initialized = true;
"use strict";
E(), Ei(), Fa(), UPy(), swe(), jPy(), Q7o(), Twr(), Cwr(), Qs(), Cy(), Ybt(), iBt(), sBt(), Qe(), U$o(), J7d = class extends st {
    constructor(t, e, n, i){
        super(), this._model = t, this._knownModelVersionId = this._model.getVersionId(), this._viewModel = e, this._coordinatesConverter = n, this.context = new O$o(this._model, this._viewModel, this._coordinatesConverter, i), this._cursors = new L$o(this.context), this._hasFocus = !1, this._isHandling = !1, this._compositionState = null, this._columnSelectData = null, this._autoClosedActions = [], this._prevEditOperationType = 0;
    }
    dispose() {
        this._cursors.dispose(), this._autoClosedActions = Nc(this._autoClosedActions), super.dispose();
    }
    updateConfiguration(t) {
        this.context = new O$o(this._model, this._viewModel, this._coordinatesConverter, t), this._cursors.updateContext(this.context);
    }
    onLineMappingChanged(t) {
        this._knownModelVersionId === this._model.getVersionId() && this.setStates(t, "viewModel", 0, this.getCursorStates());
    }
    setHasFocus(t) {
        this._hasFocus = t;
    }
    _validateAutoClosedActions() {
        if (this._autoClosedActions.length > 0) {
            const t = this._cursors.getSelections();
            for(let e = 0; e < this._autoClosedActions.length; e++){
                const n = this._autoClosedActions[e];
                n.isValid(t) || (n.dispose(), this._autoClosedActions.splice(e, 1), e--);
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
    setStates(t, e, n, i) {
        let r = !1;
        const s = this.context.cursorConfig.multiCursorLimit;
        i !== null && i.length > s && (i = i.slice(0, s), r = !0);
        const o = j0r.from(this._model, this);
        return this._cursors.setStates(i), this._cursors.normalize(), this._columnSelectData = null, this._validateAutoClosedActions(), this._emitStateChangedIfNecessary(t, e, n, o, r);
    }
    setCursorColumnSelectData(t) {
        this._columnSelectData = t;
    }
    revealAll(t, e, n, i, r, s) {
        const o = this._cursors.getViewPositions();
        let a = null, l = null;
        o.length > 1 ? l = this._cursors.getViewSelections() : a = qt.fromPositions(o[0], o[0]), t.emitViewEvent(new vfn(e, n, a, l, i, r, s));
    }
    revealPrimary(t, e, n, i, r, s) {
        const a = [
            this._cursors.getPrimaryCursor().viewState.selection
        ];
        t.emitViewEvent(new vfn(e, n, null, a, i, r, s));
    }
    saveState() {
        const t = [], e = this._cursors.getSelections();
        for(let n = 0, i = e.length; n < i; n++){
            const r = e[n];
            t.push({
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
        return t;
    }
    restoreState(t, e) {
        const n = [];
        for(let i = 0, r = e.length; i < r; i++){
            const s = e[i];
            let o = 1, a = 1;
            s.position && s.position.lineNumber && (o = s.position.lineNumber), s.position && s.position.column && (a = s.position.column);
            let l = o, c = a;
            s.selectionStart && s.selectionStart.lineNumber && (l = s.selectionStart.lineNumber), s.selectionStart && s.selectionStart.column && (c = s.selectionStart.column), n.push({
                selectionStartLineNumber: l,
                selectionStartColumn: c,
                positionLineNumber: o,
                positionColumn: a
            });
        }
        this.setStates(t, "restoreState", 0, O1.fromModelSelections(n)), this.revealAll(t, "restoreState", !1, 0, !0, o2.Immediate);
    }
    onModelContentChanged(t, e) {
        if (e instanceof S$o) {
            if (this._isHandling) return;
            this._isHandling = !0;
            try {
                this.setStates(t, "modelChange", 0, this.getCursorStates());
            } finally{
                this._isHandling = !1;
            }
        } else {
            const n = e.rawContentChangedEvent;
            if (this._knownModelVersionId = n.versionId, this._isHandling) return;
            const i = n.containsEvent(1);
            if (this._prevEditOperationType = 0, i) this._cursors.dispose(), this._cursors = new L$o(this.context), this._validateAutoClosedActions(), this._emitStateChangedIfNecessary(t, "model", 1, null, !1);
            else if (this._hasFocus && n.resultingSelection && n.resultingSelection.length > 0) {
                const r = O1.fromModelSelections(n.resultingSelection);
                this.setStates(t, "modelChange", n.isUndoing ? 5 : n.isRedoing ? 6 : 2, r) && this.revealAll(t, "modelChange", !1, 0, !0, o2.Smooth);
            } else {
                const r = this._cursors.readSelectionFromMarkers();
                this.setStates(t, "modelChange", 2, O1.fromModelSelections(r));
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
        const t = this._cursors.getPrimaryCursor(), e = t.viewState.selectionStart.getStartPosition(), n = t.viewState.position;
        return {
            isReal: !1,
            fromViewLineNumber: e.lineNumber,
            fromViewVisualColumn: this.context.cursorConfig.visibleColumnFromColumn(this._viewModel, e),
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
    setSelections(t, e, n, i) {
        this.setStates(t, e, i, O1.fromModelSelections(n));
    }
    getPrevEditOperationType() {
        return this._prevEditOperationType;
    }
    setPrevEditOperationType(t) {
        this._prevEditOperationType = t;
    }
    _pushAutoClosedAction(t, e) {
        const n = [], i = [];
        for(let o = 0, a = t.length; o < a; o++)n.push({
            range: t[o],
            options: {
                description: "auto-closed-character",
                inlineClassName: "auto-closed-character",
                stickiness: 1
            }
        }), i.push({
            range: e[o],
            options: {
                description: "auto-closed-enclosing",
                stickiness: 1
            }
        });
        const r = this._model.deltaDecorations([], n), s = this._model.deltaDecorations([], i);
        this._autoClosedActions.push(new j$o(this._model, r, s));
    }
    _executeEditOperation(t) {
        if (!t) return;
        t.shouldPushStackElementBefore && this._model.pushStackElement();
        const e = eUd.executeCommands(this._model, this._cursors.getSelections(), t.commands);
        if (e) {
            this._interpretCommandResult(e);
            const n = [], i = [];
            for(let r = 0; r < t.commands.length; r++){
                const s = t.commands[r];
                s instanceof wwr && s.enclosingRange && s.closeCharacterRange && (n.push(s.closeCharacterRange), i.push(s.enclosingRange));
            }
            n.length > 0 && this._pushAutoClosedAction(n, i), this._prevEditOperationType = t.type;
        }
        t.shouldPushStackElementAfter && this._model.pushStackElement();
    }
    _interpretCommandResult(t) {
        (!t || t.length === 0) && (t = this._cursors.readSelectionFromMarkers()), this._columnSelectData = null, this._cursors.setSelections(t), this._cursors.normalize();
    }
    _emitStateChangedIfNecessary(t, e, n, i, r) {
        const s = j0r.from(this._model, this);
        if (s.equals(i)) return !1;
        const o = this._cursors.getSelections(), a = this._cursors.getViewSelections();
        if (t.emitViewEvent(new R7d(a, o, n)), !i || i.cursorState.length !== s.cursorState.length || s.cursorState.some((l, c)=>!l.modelState.equals(i.cursorState[c].modelState))) {
            const l = i ? i.cursorState.map((u)=>u.modelState.selection) : null, c = i ? i.modelVersionId : 0;
            t.emitOutgoingEvent(new q7d(l, o, c, s.modelVersionId, e || "keyboard", n, r));
        }
        return !0;
    }
    _findAutoClosingPairs(t) {
        if (!t.length) return null;
        const e = [];
        for(let n = 0, i = t.length; n < i; n++){
            const r = t[n];
            if (!r.text || r.text.indexOf(`
`) >= 0) return null;
            const s = r.text.match(/([)\]}>'"`])([^)\]}>'"`]*)$/);
            if (!s) return null;
            const o = s[1], a = this.context.cursorConfig.autoClosingPairs.autoClosingPairsCloseSingleChar.get(o);
            if (!a || a.length !== 1) return null;
            const l = a[0].open, c = r.text.length - s[2].length - 1, u = r.text.lastIndexOf(l, c - 1);
            if (u === -1) return null;
            e.push([
                u,
                c
            ]);
        }
        return e;
    }
    executeEdits(t, e, n, i) {
        let r = null;
        e === "snippet" && (r = this._findAutoClosingPairs(n)), r && (n[0]._isTracked = !0);
        const s = [], o = [], a = this._model.pushEditOperations(this.getSelections(), n, (l)=>{
            if (r) for(let u = 0, d = r.length; u < d; u++){
                const [h, p] = r[u], g = l[u], f = g.range.startLineNumber, _ = g.range.startColumn - 1 + h, b = g.range.startColumn - 1 + p;
                s.push(new qt(f, b + 1, f, b + 2)), o.push(new qt(f, _ + 1, f, b + 2));
            }
            const c = i(l);
            return c && (this._isHandling = !0), c;
        });
        a && (this._isHandling = !1, this.setSelections(t, e, a, 0)), s.length > 0 && this._pushAutoClosedAction(s, o);
    }
    _executeEdit(t, e, n, i = 0) {
        if (this.context.cursorConfig.readOnly) return;
        const r = j0r.from(this._model, this);
        this._cursors.stopTrackingSelections(), this._isHandling = !0;
        try {
            this._cursors.ensureValidState(), t();
        } catch (s) {
            xr(s);
        }
        this._isHandling = !1, this._cursors.startTrackingSelections(), this._validateAutoClosedActions(), this._emitStateChangedIfNecessary(e, n, i, r, !1) && this.revealAll(e, n, !1, 0, !0, o2.Smooth);
    }
    getAutoClosedCharacters() {
        return j$o.getAllAutoClosedCharacters(this._autoClosedActions);
    }
    startComposition(t) {
        this._compositionState = new nUd(this._model, this.getSelections());
    }
    endComposition(t, e) {
        const n = this._compositionState ? this._compositionState.deduceOutcome(this._model, this.getSelections()) : null;
        this._compositionState = null, this._executeEdit(()=>{
            e === "keyboard" && this._executeEditOperation(eHe.compositionEndWithInterceptors(this._prevEditOperationType, this.context.cursorConfig, this._model, n, this.getSelections(), this.getAutoClosedCharacters()));
        }, t, e);
    }
    type(t, e, n) {
        this._executeEdit(()=>{
            if (n === "keyboard") {
                const i = e.length;
                let r = 0;
                for(; r < i;){
                    const s = TCo(e, r), o = e.substr(r, s);
                    this._executeEditOperation(eHe.typeWithInterceptors(!!this._compositionState, this._prevEditOperationType, this.context.cursorConfig, this._model, this.getSelections(), this.getAutoClosedCharacters(), o)), r += s;
                }
            } else this._executeEditOperation(eHe.typeWithoutInterceptors(this._prevEditOperationType, this.context.cursorConfig, this._model, this.getSelections(), e));
        }, t, n);
    }
    compositionType(t, e, n, i, r, s) {
        if (e.length === 0 && n === 0 && i === 0) {
            if (r !== 0) {
                const o = this.getSelections().map((a)=>{
                    const l = a.getPosition();
                    return new bu(l.lineNumber, l.column + r, l.lineNumber, l.column + r);
                });
                this.setSelections(t, s, o, 0);
            }
            return;
        }
        this._executeEdit(()=>{
            this._executeEditOperation(eHe.compositionType(this._prevEditOperationType, this.context.cursorConfig, this._model, this.getSelections(), e, n, i, r));
        }, t, s);
    }
    paste(t, e, n, i, r) {
        this._executeEdit(()=>{
            this._executeEditOperation(eHe.paste(this.context.cursorConfig, this._model, this.getSelections(), e, n, i || []));
        }, t, r, 4);
    }
    cut(t, e) {
        this._executeEdit(()=>{
            this._executeEditOperation(Bii.cut(this.context.cursorConfig, this._model, this.getSelections()));
        }, t, e);
    }
    executeCommand(t, e, n) {
        this._executeEdit(()=>{
            this._cursors.killSecondaryCursors(), this._executeEditOperation(new CQ(0, [
                e
            ], {
                shouldPushStackElementBefore: !1,
                shouldPushStackElementAfter: !1
            }));
        }, t, n);
    }
    executeCommands(t, e, n) {
        this._executeEdit(()=>{
            this._executeEditOperation(new CQ(0, e, {
                shouldPushStackElementBefore: !1,
                shouldPushStackElementAfter: !1
            }));
        }, t, n);
    }
}, j0r = class qAb {
    constructor(e, n){
        this.modelVersionId = e, this.cursorState = n;
    }
    static from(e, n) {
        return new qAb(e.getVersionId(), n.getCursorStates());
    }
    equals(e) {
        if (!e || this.modelVersionId !== e.modelVersionId || this.cursorState.length !== e.cursorState.length) return !1;
        for(let n = 0, i = this.cursorState.length; n < i; n++)if (!this.cursorState[n].equals(e.cursorState[n])) return !1;
        return !0;
    }
}, j$o = class {
    static getAllAutoClosedCharacters(t) {
        let e = [];
        for (const n of t)e = e.concat(n.getAutoClosedCharactersRanges());
        return e;
    }
    constructor(t, e, n){
        this._model = t, this._autoClosedCharactersDecorations = e, this._autoClosedEnclosingDecorations = n;
    }
    dispose() {
        this._autoClosedCharactersDecorations = this._model.deltaDecorations(this._autoClosedCharactersDecorations, []), this._autoClosedEnclosingDecorations = this._model.deltaDecorations(this._autoClosedEnclosingDecorations, []);
    }
    getAutoClosedCharactersRanges() {
        const t = [];
        for(let e = 0; e < this._autoClosedCharactersDecorations.length; e++){
            const n = this._model.getDecorationRange(this._autoClosedCharactersDecorations[e]);
            n && t.push(n);
        }
        return t;
    }
    isValid(t) {
        const e = [];
        for(let n = 0; n < this._autoClosedEnclosingDecorations.length; n++){
            const i = this._model.getDecorationRange(this._autoClosedEnclosingDecorations[n]);
            if (i && (e.push(i), i.startLineNumber !== i.endLineNumber)) return !1;
        }
        e.sort(qt.compareRangesUsingStarts), t.sort(qt.compareRangesUsingStarts);
        for(let n = 0; n < t.length; n++)if (n >= e.length || !e[n].strictContainsRange(t[n])) return !1;
        return !0;
    }
}, eUd = class {
    static executeCommands(t, e, n) {
        const i = {
            model: t,
            selectionsBefore: e,
            trackedRanges: [],
            trackedRangesDirection: []
        }, r = this._innerExecuteCommands(i, n);
        for(let s = 0, o = i.trackedRanges.length; s < o; s++)i.model._setTrackedRange(i.trackedRanges[s], null, 0);
        return r;
    }
    static _innerExecuteCommands(t, e) {
        if (this._arrayIsEmpty(e)) return null;
        const n = this._getEditOperations(t, e);
        if (n.operations.length === 0) return null;
        const i = n.operations, r = this._getLoserCursorMap(i);
        if (r.hasOwnProperty("0")) return console.warn("Ignoring commands"), null;
        const s = [];
        for(let l = 0, c = i.length; l < c; l++)r.hasOwnProperty(i[l].identifier.major.toString()) || s.push(i[l]);
        n.hadTrackedEditOperation && s.length > 0 && (s[0]._isTracked = !0);
        let o = t.model.pushEditOperations(t.selectionsBefore, s, (l)=>{
            const c = [];
            for(let h = 0; h < t.selectionsBefore.length; h++)c[h] = [];
            for (const h of l)h.identifier && c[h.identifier.major].push(h);
            const u = (h, p)=>h.identifier.minor - p.identifier.minor, d = [];
            for(let h = 0; h < t.selectionsBefore.length; h++)c[h].length > 0 ? (c[h].sort(u), d[h] = e[h].computeCursorState(t.model, {
                getInverseEditOperations: ()=>c[h],
                getTrackedSelection: (p)=>{
                    const g = parseInt(p, 10), f = t.model._getTrackedRange(t.trackedRanges[g]);
                    return t.trackedRangesDirection[g] === 0 ? new bu(f.startLineNumber, f.startColumn, f.endLineNumber, f.endColumn) : new bu(f.endLineNumber, f.endColumn, f.startLineNumber, f.startColumn);
                }
            })) : d[h] = t.selectionsBefore[h];
            return d;
        });
        o || (o = t.selectionsBefore);
        const a = [];
        for(const l in r)r.hasOwnProperty(l) && a.push(parseInt(l, 10));
        a.sort((l, c)=>c - l);
        for (const l of a)o.splice(l, 1);
        return o;
    }
    static _arrayIsEmpty(t) {
        for(let e = 0, n = t.length; e < n; e++)if (t[e]) return !1;
        return !0;
    }
    static _getEditOperations(t, e) {
        let n = [], i = !1;
        for(let r = 0, s = e.length; r < s; r++){
            const o = e[r];
            if (o) {
                const a = this._getEditOperationsFromCommand(t, r, o);
                n = n.concat(a.operations), i = i || a.hadTrackedEditOperation;
            }
        }
        return {
            operations: n,
            hadTrackedEditOperation: i
        };
    }
    static _getEditOperationsFromCommand(t, e, n) {
        const i = [];
        let r = 0;
        const s = (u, d, h = !1)=>{
            qt.isEmpty(u) && d === "" || i.push({
                identifier: {
                    major: e,
                    minor: r++
                },
                range: u,
                text: d,
                forceMoveMarkers: h,
                isAutoWhitespaceEdit: n.insertsAutoWhitespace
            });
        };
        let o = !1;
        const c = {
            addEditOperation: s,
            addTrackedEditOperation: (u, d, h)=>{
                o = !0, s(u, d, h);
            },
            trackSelection: (u, d)=>{
                const h = bu.liftSelection(u);
                let p;
                if (h.isEmpty()) if (typeof d == "boolean") d ? p = 2 : p = 3;
                else {
                    const _ = t.model.getLineMaxColumn(h.startLineNumber);
                    h.startColumn === _ ? p = 2 : p = 3;
                }
                else p = 1;
                const g = t.trackedRanges.length, f = t.model._setTrackedRange(null, h, p);
                return t.trackedRanges[g] = f, t.trackedRangesDirection[g] = h.getDirection(), g.toString();
            }
        };
        try {
            n.getEditOperations(t.model, c);
        } catch (u) {
            return xr(u), {
                operations: [],
                hadTrackedEditOperation: !1
            };
        }
        return {
            operations: i,
            hadTrackedEditOperation: o
        };
    }
    static _getLoserCursorMap(t) {
        t = t.slice(0), t.sort((n, i)=>-qt.compareRangesUsingEnds(n.range, i.range));
        const e = {};
        for(let n = 1; n < t.length; n++){
            const i = t[n - 1], r = t[n];
            if (qt.getStartPosition(i.range).isBefore(qt.getEndPosition(r.range))) {
                let s;
                i.identifier.major > r.identifier.major ? s = i.identifier.major : s = r.identifier.major, e[s.toString()] = !0;
                for(let o = 0; o < t.length; o++)t[o].identifier.major === s && (t.splice(o, 1), o < n && n--, o--);
                n > 0 && n--;
            }
        }
        return e;
    }
}, tUd = class {
    constructor(t, e, n, i){
        this.text = t, this.lineNumber = e, this.startSelectionOffset = n, this.endSelectionOffset = i;
    }
}, nUd = class XYs {
    static _capture(e, n) {
        const i = [];
        for (const r of n){
            if (r.startLineNumber !== r.endLineNumber) return null;
            const s = r.startLineNumber;
            i.push(new tUd(e.getLineContent(s), s, r.startColumn - 1, r.endColumn - 1));
        }
        return i;
    }
    constructor(e, n){
        this._original = XYs._capture(e, n);
    }
    deduceOutcome(e, n) {
        if (!this._original) return null;
        const i = XYs._capture(e, n);
        if (!i || this._original.length !== i.length) return null;
        const r = [];
        for(let s = 0, o = this._original.length; s < o; s++)r.push(XYs._deduceOutcome(this._original[s], i[s]));
        return r;
    }
    static _deduceOutcome(e, n) {
        const i = Math.min(e.startSelectionOffset, n.startSelectionOffset, Ike(e.text, n.text)), r = Math.min(e.text.length - e.endSelectionOffset, n.text.length - n.endSelectionOffset, bdn(e.text, n.text)), s = e.text.substring(i, e.text.length - r), o = i, a = n.text.length - r, l = n.text.substring(o, a), c = new qt(n.lineNumber, o + 1, n.lineNumber, a + 1);
        return new c6d(s, e.startSelectionOffset - i, e.endSelectionOffset - i, l, n.startSelectionOffset - i, n.endSelectionOffset - i, c);
    }
};

}

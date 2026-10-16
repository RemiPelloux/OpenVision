import { Gt, Qe, st, tt } from "./Iwo.js";
import { A6n } from "./diff-row-height-predict.js";
import { LfC, NfC, l3e } from "./gpc.js";
import { E } from "./tslib.es6.js";
var jt_, $t_;
export { $t_, jt_ };
var __wakaru_OfC_initialized = false;
export function OfC() {
if (__wakaru_OfC_initialized) return;
__wakaru_OfC_initialized = true;
"use strict";
E(), Gt(), Qe(), A6n(), jt_ = 1, $t_ = class extends st {
    constructor(){
        super(...arguments), this._onDidChangeRowHeightEmitter = this._register(new tt), this.onDidChangeRowHeight = this._onDidChangeRowHeightEmitter.event, this._factsByFilePath = new Map, this._phaseByFilePath = new Map, this._hunkShapeByFilePath = new Map, this._measuredByKey = new Map, this._recordByFilePath = new Map;
    }
    getRowHeight(t) {
        return this.getRowHeightRecord(t).valuePx;
    }
    getRowHeightRecord(t) {
        const e = this._recordByFilePath.get(t);
        if (e) return e;
        const n = this._resolveRecord(t);
        return this._recordByFilePath.set(t, n), n;
    }
    registerFacts(t) {
        const e = this._factsByFilePath.get(t.filePath);
        this._factsByFilePath.set(t.filePath, t), e && (e.contentVersion !== t.contentVersion || e.viewMode !== t.viewMode) && this._hunkShapeByFilePath.delete(t.filePath);
        const n = this._phaseByFilePath.get(t.filePath);
        t.isOpen ? (!n || n.kind === "collapsed") && this._phaseByFilePath.set(t.filePath, {
            kind: "opening",
            floorPx: this.getRowHeight(t.filePath)
        }) : this._phaseByFilePath.set(t.filePath, {
            kind: "collapsed"
        }), this._updateRecord(t.filePath, "factsChanged", {
            deferNotify: !0
        });
    }
    reportPhase(t, e) {
        this._phaseByFilePath.set(t, e), this._setFactOpenState(t, e.kind !== "collapsed"), this._updateRecord(t, "phaseChanged");
    }
    reportHunkShape(t, e, n) {
        this._hunkShapeByFilePath.set(t, {
            renderedLines: Math.max(0, e),
            separators: Math.max(0, n)
        }), this._updateRecord(t, "contentShapeChanged");
    }
    recordMeasurement(t, e, n) {
        this._setFactWidthBand(t, n);
        const i = this.getRowHeightRecord(t), r = LfC({
            rawPx: e,
            phase: i.phase,
            currentFloorPx: i.valuePx
        });
        if (r.kind === "ignore") return r;
        const s = this._keyForFilePath(t);
        return s ? (this._measuredByKey.set(s, {
            heightPx: r.heightPx,
            phase: i.phase
        }), {
            kind: "record",
            heightPx: this._updateRecord(t, "measurementRecorded").valuePx
        }) : {
            kind: "ignore",
            heightPx: i.valuePx
        };
    }
    pruneFilePaths(t) {
        for (const e of [
            ...this._factsByFilePath.keys()
        ])t.has(e) || this._factsByFilePath.delete(e);
        for (const e of [
            ...this._phaseByFilePath.keys()
        ])t.has(e) || this._phaseByFilePath.delete(e);
        for (const e of [
            ...this._hunkShapeByFilePath.keys()
        ])t.has(e) || this._hunkShapeByFilePath.delete(e);
        for (const e of [
            ...this._recordByFilePath.keys()
        ])t.has(e) || this._recordByFilePath.delete(e);
        for (const e of [
            ...this._measuredByKey.keys()
        ]){
            const n = this._filePathFromKey(e);
            (!n || !t.has(n)) && this._measuredByKey.delete(e);
        }
    }
    dispose() {
        this._factsByFilePath.clear(), this._phaseByFilePath.clear(), this._hunkShapeByFilePath.clear(), this._measuredByKey.clear(), this._recordByFilePath.clear(), super.dispose();
    }
    _updateRecord(t, e, n) {
        const i = this._recordByFilePath.get(t), r = this._resolveRecord(t);
        return this._recordByFilePath.set(t, r), i && Math.abs(i.valuePx - r.valuePx) < jt_ || (n?.deferNotify ? queueMicrotask(()=>{
            const s = this._recordByFilePath.get(t);
            s && this._onDidChangeRowHeightEmitter.fire({
                filePath: t,
                heightPx: s.valuePx,
                reason: e
            });
        }) : this._onDidChangeRowHeightEmitter.fire({
            filePath: t,
            heightPx: r.valuePx,
            reason: e
        })), r;
    }
    _resolveRecord(t) {
        const e = this._factsByFilePath.get(t), n = this._phaseByFilePath.get(t) ?? (e?.isOpen ? {
            kind: "opening",
            floorPx: l3e(0)
        } : {
            kind: "collapsed"
        }), i = this._compatibleMeasuredHeight(t, n), r = this._hunkShapeByFilePath.get(t), s = NfC({
            filePath: t,
            facts: e,
            phase: n,
            measuredPx: i,
            hunkShape: r
        });
        return {
            filePath: t,
            valuePx: s.valuePx,
            source: s.source,
            phase: n
        };
    }
    _compatibleMeasuredHeight(t, e) {
        const n = this._keyForFilePath(t);
        if (!n) return;
        const i = this._measuredByKey.get(n);
        if (i) {
            if (e.kind === "opening" || e.kind === "loadingText") return i.phase.kind === "terminalText" ? i.heightPx : void 0;
            if (e.kind === "terminalText" && i.phase.kind === "terminalText" || e.kind === "terminalPlaceholder" && i.phase.kind === "terminalPlaceholder" && e.reason === i.phase.reason || e.kind === "terminalMedia" && i.phase.kind === "terminalMedia" && e.mediaKind === i.phase.mediaKind) return i.heightPx;
        }
    }
    _setFactOpenState(t, e) {
        const n = this._factsByFilePath.get(t);
        !n || n.isOpen === e || this._factsByFilePath.set(t, {
            ...n,
            isOpen: e
        });
    }
    _setFactWidthBand(t, e) {
        const n = this._factsByFilePath.get(t);
        !n || n.widthBand === e || this._factsByFilePath.set(t, {
            ...n,
            widthBand: e
        });
    }
    _keyForFilePath(t) {
        const e = this._factsByFilePath.get(t);
        if (e) return [
            e.comparisonMode,
            e.viewMode,
            e.wordWrap ? "wrap" : "nowrap",
            e.widthBand,
            t
        ].join("\0");
    }
    _filePathFromKey(t) {
        return t.split("\0").at(-1);
    }
};

}

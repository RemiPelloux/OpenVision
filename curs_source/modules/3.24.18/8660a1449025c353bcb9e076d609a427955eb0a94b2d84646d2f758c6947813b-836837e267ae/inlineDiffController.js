import { D, Di, Qe, st, xa } from "./Iwo.js";
import { Aie, YIk, Zcs, _9e, q0g, z0g } from "./Ycg.js";
import { Dc, jl } from "./aiService.js";
import { Yu, qn } from "./async.js";
import { X7, dPe } from "./cmdKStateService.js";
import { Ju, og } from "./codeEditorService.js";
import { nr, rs } from "./commands.js";
import { Pl, no } from "./composerDataServiceTypes.js";
import { or, yi } from "./configuration.js";
import { b$e, dJn, ipn, pJn, pa } from "./constants_8.js";
import { Hi, Rr, cn, mt } from "./contextkey.js";
import { lPe, mX } from "./diffChangeSource.js";
import { BIk } from "./diffChangeSourceRegistry.js";
import { fCe, hPe } from "./diffDecorationVisibilityService.js";
import { xw } from "./editorBrowser.js";
import { cg, si } from "./editorContextKeys.js";
import { Ud, xu } from "./editorExtensions.js";
import { Wo, gr } from "./editorService.js";
import { Cr, _s } from "./experimentService.js";
import { fXr } from "./inlineDiffDecorationUtils.js";
import { Dle, zIk } from "./inlineDiffPartialWidget.js";
import { G4, Rbe, UO } from "./inlineDiffService.js";
import { F0g, FRn, Fxi, Gcs, Hcs, LRn, O0g, ORn, Oxi, Wcs, kEt, qcs } from "./inlineDiffTypes.js";
import { It, dn } from "./instantiation.js";
import { Ma, Ze, ut } from "./keyCodes.js";
import { Kp, Ph } from "./language.js";
import { Bt } from "./nls.js";
import { MB } from "./pathUtils.js";
import { $j, c_e } from "./peekView.js";
import { er, jc } from "./position.js";
import { el, sa } from "./reactiveStorageServiceTypes.js";
import { KIk, Xcs } from "./removedLinesZoneWidget.js";
import { Iu, Lr } from "./resources.js";
import { Zi, ki } from "./storage_2.js";
import { Uv, Xv } from "./telemetry.js";
import { Dl, Ml } from "./themeService.js";
import { E } from "./tslib.es6.js";
import { Vp, nh } from "./uriIdentity.js";
import { F, Re } from "./userDataProfile.js";
import { wu } from "./utilities_3.js";
import { NRn, Qat } from "./utility.js";
import { Ai, Xo } from "./uuid_2.js";
import { YTn, aPe, gXr, hCt } from "./yBp.js";
import { _l, qS, sv } from "./ze.js";
var CEt, Qcs, V0g, K0g, Y0g, t9;
export { CEt, K0g, Qcs, V0g, Y0g, t9 };
var __wakaru_Bxi_initialized = false;
export function Bxi() {
if (__wakaru_Bxi_initialized) return;
__wakaru_Bxi_initialized = true;
"use strict";
E(), qn(), pa(), Ma(), Qe(), Di(), Lr(), Xo(), Bt(), rs(), or(), Hi(), It(), el(), wu(), Zi(), Xv(), Dl(), Vp(), Pl(), Dc(), NRn(), dPe(), Wo(), _s(), MB(), xw(), Ud(), og(), hPe(), lPe(), BIk(), G4(), fXr(), jc(), cg(), Kp(), c_e(), kEt(), zIk(), KIk(), CEt = new cn("inlineDiffs.activeEditorWithDiffs", !1, {
    type: "boolean",
    description: D(1381, null)
}), Qcs = new cn("inlineDiffs.hasInlineDiffsInAnyEditor", !1, {
    type: "boolean",
    description: D(1382, null)
}), V0g = class extends xu {
    constructor(){
        super({
            id: F0g,
            label: "View All Changes",
            alias: "View All Changes",
            precondition: mt.or(si.editorHasPromptBar.isEqualTo(!0), si.hasDisplayedDiff)
        });
    }
    async run(t, e, n) {
        if (_9e(t, e)) return;
        const i = t.get(mX), r = t.get(gr), s = i.getDescriptors().filter((a)=>a.metadata?.source === Rbe);
        if (s.length === 0) return;
        const o = {
            resources: s.map((a)=>a.uri)
        };
        await r.openEditor(o);
    }
}, _l(V0g), _l(class extends xu {
    constructor(){
        super({
            id: Oxi,
            label: "Accept Edits",
            alias: "Accept Edits",
            precondition: CEt,
            kbOpts: {
                kbExpr: si.editorTextFocus,
                primary: ut.CtrlCmd | Ze.Enter,
                weight: 500
            }
        });
    }
    run(e, n, i) {
        if (_9e(e, n)) return;
        const r = e.get(sa), s = e.get(Uv);
        s.publicLogCapture("Accepted Diff"), s.publicLogCapture("did.edit.accepted", {
            model: Qat
        }), t9.get(n)?.acceptSuggestion(i, "both");
    }
}), _l(class extends xu {
    constructor(){
        super({
            id: Hcs,
            label: "Accept Partial Edit",
            alias: "Accept Partial Edit",
            precondition: CEt,
            kbOpts: {
                kbExpr: si.editorTextFocus,
                primary: xa ? ut.CtrlCmd | ut.Shift | Ze.KeyY : ut.CtrlCmd | Ze.KeyY,
                weight: 500
            }
        });
    }
    run(e, n, i) {
        if (_9e(e, n)) return;
        e.get(Uv).publicLogCapture("Accepted Partial Diff");
        const r = e.get(Uv), s = e.get(sa), o = e.get(ki), a = e.get(mX), l = e.get(nr);
        r.publicLogCapture("did.edit.acceptedpartial", {
            model: Qat
        });
        const c = t9.get(n);
        c && (c.acceptPartialSuggestion(i, "both"), YIk(n, c, o, a, l));
    }
}), K0g = class extends xu {
    constructor(){
        super({
            id: O0g,
            label: "Reject All Edits",
            alias: "Reject All Edits",
            precondition: mt.or(si.editorHasPromptBar.isEqualTo(!0), si.hasDisplayedDiff),
            kbOpts: {
                kbExpr: si.editorTextFocus,
                primary: ut.CtrlCmd | Ze.Shift | Ze.Backspace,
                weight: 500
            }
        });
    }
    run(t, e, n) {
        if (_9e(t, e)) return;
        t.get(Uv).publicLogCapture("Rejected Diff");
        const i = t.get(sa), r = t.get(X7);
        t.get(Uv).publicLogCapture("did.edit.rejected", {
            model: Qat
        }), t.get(Ju).listCodeEditors().forEach((l)=>{
            t9.get(l)?.rejectSuggestion(n, "both");
            const c = r.getPromptBars();
            if (c.length === 0) return;
            const u = l.getSelection();
            let d;
            if (!u) d = c[c.length - 1].id;
            else {
                let h = 1 / 0;
                for (const p of c){
                    const g = l.getModel()?.getDecorationRange(p.currentRangeDecorationId);
                    if (!g) continue;
                    if (g.intersectRanges(u)) {
                        d = p.id;
                        break;
                    }
                    const f = Math.min(Math.abs(u.startLineNumber - g.startLineNumber), Math.abs(u.endLineNumber - g.endLineNumber));
                    f < h && (h = f, d = p.id);
                }
            }
            t.get(nr).executeCommand(dJn, d), t.get(nr).executeCommand(b$e, d);
        });
    }
}, _l(K0g), _l(class extends xu {
    constructor(){
        super({
            id: LRn,
            label: "Undo Edits",
            alias: "Undo Edits",
            precondition: CEt,
            kbOpts: {
                kbExpr: si.editorTextFocus,
                primary: ut.CtrlCmd | ut.Shift | Ze.Backspace,
                weight: 500
            }
        });
    }
    run(e, n, i) {
        if (_9e(e, n)) return;
        const r = e.get(sa), s = e.get(Uv), o = e.get(X7);
        s.publicLogCapture("Rejected Diff"), s.publicLogCapture("did.edit.rejected", {
            model: Qat
        }), t9.get(n)?.rejectSuggestion(i, "both");
        const a = o.getPromptBars();
        if (a.length === 0) return;
        const l = n.getSelection();
        let c;
        if (!l) c = a[a.length - 1].id;
        else {
            let u = 1 / 0;
            for (const d of a){
                const h = n.getModel()?.getDecorationRange(d.currentRangeDecorationId);
                if (!h) continue;
                if (h.intersectRanges(l)) {
                    c = d.id;
                    break;
                }
                const p = Math.min(Math.abs(l.startLineNumber - h.startLineNumber), Math.abs(l.endLineNumber - h.endLineNumber));
                p < u && (u = p, c = d.id);
            }
        }
        e.get(nr).executeCommand(dJn, c), e.get(nr).executeCommand(b$e, c);
    }
}), _l(class extends xu {
    constructor(){
        super({
            id: Wcs,
            label: "Reject Partial Edit",
            alias: "Reject Partial Edit",
            precondition: CEt,
            kbOpts: {
                kbExpr: si.editorTextFocus,
                primary: ut.CtrlCmd | Ze.KeyN,
                weight: 500
            }
        });
    }
    run(e, n, i) {
        if (_9e(e, n)) return;
        const r = e.get(Uv), s = e.get(sa), o = e.get(ki), a = e.get(UO), l = e.get(nr);
        r.publicLogCapture("Rejected Partial Diff"), r.publicLogCapture("did.edit.rejectedpartial", {
            model: Qat
        });
        const c = t9.get(n);
        c && c.rejectPartialSuggestion(i, "both");
    }
}), Y0g = class extends xu {
    constructor(){
        super({
            id: Fxi,
            label: "Cancel Edits",
            alias: "Cancel Edits",
            precondition: si.hasActivelyGeneratingDiff,
            kbOpts: {
                kbExpr: si.editorTextFocus,
                primary: ut.CtrlCmd | ut.Shift | Ze.Backspace,
                weight: 600
            }
        });
    }
    run(t, e, n) {
        _9e(t, e) || (t.get(Uv).publicLogCapture("Cancelled Diff"), t9.get(e)?.cancelGeneration(n, "both"));
    }
}, t9 = class extends st {
    constructor(t, e, n, i, r, s, o, a, l, c, u, d, h, p){
        super(), this._instantiationService = e, this.languageService = n, this._inlineDiffService = r, this._diffChangeSourceRegistry = s, this.commandService = a, this._themeService = l, this.configurationService = c, this.aiService = u, this.cmdKStateService = d, this.experimentService = h, this.diffDecorationVisibilityService = p, this.displayedDiffCache = new Map, this._editor = t, this.extUri = o.extUri, this._hasDisplayedDiff = si.hasDisplayedDiff.bindTo(t.contextKeyService), this._hasActivelyGeneratingDiff = si.hasActivelyGeneratingDiff.bindTo(t.contextKeyService), this._activeEditorWithDiffs = CEt.bindTo(t.contextKeyService), this._hasInlineDiffsInAnyEditor = Qcs.bindTo(t.contextKeyService), this._showPartialAcceptRejectWidgets = !0, this._showDiffsScheduler = this._register(new Yu(()=>this.showDiffs(), 100)), this._diffUpdateScheduler = this._register(new Yu(()=>{
            this.showDiffs(), this.updateContextKeys();
        }, 0));
        const g = $j.inPeekEditor.getValue(i), f = si.inDiffEditor.getValue(i), _ = si.isEmbeddedDiffEditor.getValue(i), b = f && !_, k = this._editor.getDomNode()?.getAttribute("data-uri")?.startsWith("output:");
        !g && !b && !k && (this._register(this._editor.onDidChangeModel((T)=>{
            for (const I of this.displayedDiffCache.keys())this.removeDiff(I);
            this.displayedDiffCache.clear(), this.showDiffs(), this.updateContextKeys();
        })), this._register(this._diffChangeSourceRegistry.onDidChange(()=>{
            this._diffUpdateScheduler.schedule();
        })), this._register(this.aiService.inprogressAIGenerations.event(()=>{
            this.showDiffs(), this.updateContextKeys();
        })), this._register(this.diffDecorationVisibilityService.onDidChangeGlobal(()=>{
            this._diffUpdateScheduler.schedule();
        })), this.showDiffs(), this.updateContextKeys(), this._register(this._editor.onDidChangeModelContent(()=>{
            this._showDiffsScheduler.schedule();
        })));
    }
    static get(t) {
        return t.getContribution(t9.ID);
    }
    findClosestDiffToCursorId(t, e = "notPromptBar") {
        const n = this._editor.getPosition();
        let i = null, r = 1 / 0;
        const s = this._editor.getModel()?.uri, o = this._getDiffsForEditor(s).filter((a)=>e === "both" || e === "promptBar" == (this.cmdKStateService.getPromptBarByDiffId(a.id) !== void 0));
        for (const a of o){
            const l = this.aiService.inprogressAIGenerations.value.some((h)=>h.generationUUID === a.metadata?.generationId);
            if (t === 1 && l || t === 2 && !l) continue;
            if (!n) {
                i = a.id;
                break;
            }
            const c = a.currentRange.startLineNumber, u = a.currentRange.endLineNumberExclusive, d = Math.min(Math.abs(n.lineNumber - c), Math.abs(n.lineNumber - u));
            d < r && (r = d, i = a.id);
        }
        return i || null;
    }
    rejectSuggestion(t, e) {
        if (!this._editor.hasModel()) return;
        const n = t?.id ?? this.findClosestDiffToCursorId(1, e);
        n && this._diffChangeSourceRegistry.reject(n);
    }
    acceptSuggestion(t, e) {
        if (!this._editor.hasModel()) return;
        const n = t?.id ?? this.findClosestDiffToCursorId(1, e);
        n && this._diffChangeSourceRegistry.accept(n);
    }
    acceptPartialSuggestion(t, e) {
        if (!this._editor.hasModel()) return;
        const n = t?.diffId ?? this.findClosestDiffToCursorId(1, e);
        if (!n) return;
        const i = t?.line ? new er(t.line(), 1) : this._editor.getPosition();
        if (!i) return;
        const r = this._diffChangeSourceRegistry.getDescriptorById(n);
        if (!r) return;
        const s = YTn(r.descriptor, i);
        s && this._diffChangeSourceRegistry.acceptChange(n, s);
    }
    rejectPartialSuggestion(t, e) {
        if (!this._editor.hasModel()) return;
        const n = t?.diffId ?? this.findClosestDiffToCursorId(1, e);
        if (!n) return;
        const i = t?.line ? new er(t.line(), 1) : this._editor.getPosition();
        if (!i) return;
        const r = this.cmdKStateService.getPromptBarByDiffId(n), s = this._diffChangeSourceRegistry.getDescriptorById(n);
        if (!s) return;
        const o = YTn(s.descriptor, i);
        o && this._diffChangeSourceRegistry.rejectChange(n, o) && r && (this.commandService.executeCommand(dJn, r.id), this.commandService.executeCommand(b$e, r.id));
    }
    cancelGeneration(t, e) {
        const n = t?.id ?? this.findClosestDiffToCursorId(2, e);
        n && this._diffChangeSourceRegistry.cancel(n);
    }
    shouldSuppressInlineDiffEditorActions() {
        return this.diffDecorationVisibilityService.shouldHideInlineDiffs() && !(this._editor.getIsMultiDiffEditor?.() ?? !1);
    }
    clearDisplayedDiffs() {
        for (const t of this.displayedDiffCache.keys())this.removeDiff(t);
        this.displayedDiffCache.clear();
    }
    updateContextKeys() {
        if (this.shouldSuppressInlineDiffEditorActions()) {
            this._activeEditorWithDiffs.set(!1), this._hasInlineDiffsInAnyEditor.set(!1), this._hasActivelyGeneratingDiff.set(!1), this._hasDisplayedDiff.set(!1);
            return;
        }
        if (!this._editor.hasModel()) this._activeEditorWithDiffs.set(!1);
        else {
            const e = this._editor.getModel(), n = this._getDiffsForEditor(e.uri);
            this._activeEditorWithDiffs.set(n.length > 0);
        }
        const t = this._diffChangeSourceRegistry.getDescriptors().length > 0;
        this._hasInlineDiffsInAnyEditor.set(t);
    }
    _getDiffsForEditor(t) {
        return t ? this._diffChangeSourceRegistry.getDescriptors().filter((e)=>Aie(e, t)) : [];
    }
    navigateToChange(t, e) {
        if (this.shouldSuppressInlineDiffEditorActions() || !this._editor.hasModel()) return;
        const n = this._editor.getModel(), i = n.getLineCount(), r = this._getDiffsForEditor(n.uri).flatMap((l)=>l.changes.map((c)=>{
                const u = hCt(l, c), d = gXr(l, c, i);
                return {
                    startLineNumber: u.startLineNumber,
                    endLineNumber: u.endLineNumber,
                    widgetLine: d
                };
            })).sort((l, c)=>l.startLineNumber - c.startLineNumber);
        if (r.length === 0) return;
        let s;
        if (e !== void 0) s = e - 1;
        else {
            const l = this._editor.getPosition();
            if (!l) return;
            s = r.findIndex((c)=>l.lineNumber >= c.startLineNumber && l.lineNumber <= c.endLineNumber || l.lineNumber === c.widgetLine);
        }
        if (s === -1) {
            const l = this._editor.getPosition();
            if (!l) return;
            if (t === "next") s = r.findIndex((c)=>c.startLineNumber > l.lineNumber), s === -1 && r.length > 0 && (s = 0);
            else {
                s = -1;
                for(let c = r.length - 1; c >= 0; c--)if (r[c].endLineNumber < l.lineNumber) {
                    s = c;
                    break;
                }
                s === -1 && r.length > 0 && (s = r.length - 1);
            }
        } else t === "next" ? s = (s + 1) % r.length : s = (s - 1 + r.length) % r.length;
        const a = r[s].widgetLine;
        this._editor.setPosition({
            lineNumber: a,
            column: 1
        }), this._editor.revealLineInCenter(a);
    }
    async showDiffs() {
        if (!this._editor.hasModel() || this._editor.getIsAddedMultiDiffEditor?.()) return;
        if (this.shouldSuppressInlineDiffEditorActions()) {
            this.clearDisplayedDiffs(), this._hasActivelyGeneratingDiff.set(!1), this._hasDisplayedDiff.set(!1);
            return;
        }
        const t = this._editor.getModel().uri, e = this.aiService.inprogressAIGenerations.value, n = this._getDiffsForEditor(t);
        let i = !1;
        for (const s of n){
            const a = e.some((l)=>l.generationUUID === s.metadata?.generationId) && !0;
            i = i || a, this.showDiff(s, a);
        }
        for (const s of this.displayedDiffCache.keys())n.some((o)=>o.id === s) || this.removeDiff(s);
        i ? this._hasActivelyGeneratingDiff.set(!0) : this._hasActivelyGeneratingDiff.set(!1), n.filter((s)=>this.cmdKStateService.getPromptBarByDiffId(s.id) === void 0).length > 0 ? this._hasDisplayedDiff.set(!0) : this._hasDisplayedDiff.set(!1);
    }
    getZoneWidgets(t, e) {
        if (!this._editor.hasModel()) return [];
        if (!this.shouldDisplayRemovedLineZones()) {
            for (const o of e)o.dispose();
            return [];
        }
        if (t.metadata?.hideDeletionViewZones) {
            for (const o of e)o.dispose();
            return [];
        }
        if (t.metadata?.hideDecorations) {
            for (const o of e)o.dispose();
            return [];
        }
        if (this._editor.getIsMultiDiffEditor?.()) return [];
        const n = this.configurationService.getValue(ipn) ?? pJn, i = this.experimentService.getDynamicConfig("inline_diff_performance_config", {
            disableExposureLog: !1
        })?.maxDecorations ?? 100;
        if (n && t.changes.length > i) {
            for (const o of e)o.dispose();
            return [];
        }
        const r = [], s = [];
        try {
            for (const o of t.changes){
                if (o.removedTextLines.length === 0 || o.indentation) continue;
                let a = t.currentRange.startLineNumber + o.addedRange.startLineNumber - 1 - 1, l;
                a === 0 ? l = 1 : l = this._editor.getModel().getLineMaxColumn(a);
                const c = `${o.removedLinesOriginalRange.startLineNumber}-${o.removedLinesOriginalRange.endLineNumberExclusive}`, u = {
                    lineNumber: a,
                    column: l
                };
                let d = !1;
                for (const p of e)p.id === c && (d = !0, p.updatePosition(u), r.push(p), s.push(c));
                const h = [];
                if (t.originalLineTokens) for (const p of o.removedTextLines){
                    const g = t.originalLineTokens.find((f)=>f.text === p);
                    h.push(g);
                }
                if (!d) {
                    const p = new Xcs(c, this._editor, o.removedTextLines, h, o.relativeInnerChanges, u, this.languageService, this._themeService, this.configurationService);
                    p.showWidget(), r.push(p);
                }
            }
        } catch (o) {
            console.error("Error creating removed lines widgets!", o);
        }
        for (const o of e)s.includes(o.id) || o.dispose();
        return r;
    }
    setShowPartialAcceptRejectWidgets(t) {
        this._showPartialAcceptRejectWidgets = t, this._diffUpdateScheduler.schedule();
    }
    shouldDisplayRemovedLineZones() {
        return !0;
    }
    shouldRenderPartialWidgets() {
        return this._showPartialAcceptRejectWidgets;
    }
    getRemovedNumLinesInRange(t, e) {
        let n = 0;
        for (const i of this.displayedDiffCache.get(t)?.zoneWidgets ?? []){
            const r = i.position?.lineNumber;
            r !== void 0 && r >= e.startLineNumber && r <= e.endLineNumber && (n += i.getHeightInLines());
        }
        return n;
    }
    showDiff(t, e) {
        try {
            const n = this.displayedDiffCache.get(t.id);
            let i = [];
            n && (i = n.zoneWidgets);
            let r = n?.partialWidgets ?? [];
            const s = this.getZoneWidgets(t, i), o = e ? [] : t.changes, a = this.configurationService.getValue(ipn) ?? pJn, l = this.experimentService.getDynamicConfig("inline_diff_performance_config", {
                disableExposureLog: !1
            })?.maxDecorations ?? 100, c = a && t.changes.length > l;
            c && this._inlineDiffService.notifySuppressedDiffVisible(t.id);
            const d = this._editor.getIsMultiDiffEditor?.() ?? !1 ? !1 : t.metadata?.hideDecorations ?? !1, h = this.shouldRenderPartialWidgets() && !e && !c && !d;
            if (!h && r.length > 0) {
                for (const p of r)p.dispose();
                r = [];
            }
            if (h) {
                const p = this._editor.getModel();
                if (!p) return;
                const g = p.getLineCount(), f = new Set(o.map((b)=>gXr(t, b, g))), _ = [];
                for (const b of r)f.has(b.line()) || _.push(b);
                for (const b of _)b.dispose();
                r = r.filter((b)=>f.has(b.line()));
                for (const b of f)r.find((S)=>S.line() === b) || r.push(this._instantiationService.createInstance(Dle, t.id + "-partial" + Ai(), t.id, t.metadata?.composerId, b, this._editor));
            }
            this.displayedDiffCache.set(t.id, {
                zoneWidgets: s,
                partialWidgets: r
            });
        } catch (n) {
            console.error(n);
            const i = this.displayedDiffCache.get(t.id);
            if (i) {
                for (const r of i.partialWidgets)r.dispose();
                for (const r of i.zoneWidgets)r.dispose();
            }
            this.displayedDiffCache.delete(t.id);
        }
    }
    removeDiff(t) {
        const e = this.displayedDiffCache.get(t);
        if (e) {
            for (const n of e.partialWidgets)n.dispose();
            for (const n of e.zoneWidgets)n.dispose();
            this.displayedDiffCache.delete(t);
        }
    }
    focusOnCurrentChange(t) {
        if (!this._editor.hasModel()) return;
        const e = this._editor.getModel(), n = e.getLineCount(), i = this._getDiffsForEditor(e.uri).flatMap((s)=>s.changes.map((o)=>{
                const a = hCt(s, o);
                return {
                    startLineNumber: a.startLineNumber,
                    endLineNumber: a.endLineNumber,
                    widgetLine: gXr(s, o, n)
                };
            })).sort((s, o)=>s.startLineNumber - o.startLineNumber);
        if (i.length === 0) return;
        const r = i[t - 1];
        if (r) {
            const s = r.widgetLine;
            this._editor.setPosition({
                lineNumber: s,
                column: 1
            }), this._editor.revealLineInCenter(s);
        }
    }
    dispose() {
        for (const [t, e] of this.displayedDiffCache.entries()){
            for (const n of e.partialWidgets)n.dispose();
            for (const n of e.zoneWidgets)n.dispose();
        }
        this.displayedDiffCache.clear(), super.dispose();
    }
}, t9.ID = "editor.contrib.inlineDiffController", t9 = Re([
    F(1, dn),
    F(2, Ph),
    F(3, Rr),
    F(4, UO),
    F(5, mX),
    F(6, nh),
    F(7, nr),
    F(8, Ml),
    F(9, yi),
    F(10, jl),
    F(11, X7),
    F(12, Cr),
    F(13, fCe)
], t9), sv(t9.ID, t9, 3), _l(Y0g), _l(class extends xu {
    constructor(){
        super({
            id: Gcs,
            label: "Go to Next Change",
            alias: "Go to Next Change",
            precondition: CEt,
            kbOpts: {
                kbExpr: si.editorTextFocus,
                primary: ut.Alt | Ze.KeyJ,
                weight: 100
            }
        });
    }
    run(e, n) {
        _9e(e, n) || t9.get(n)?.navigateToChange("next");
    }
}), _l(class extends xu {
    constructor(){
        super({
            id: qcs,
            label: "Go to Previous Change",
            alias: "Go to Previous Change",
            precondition: CEt,
            kbOpts: {
                kbExpr: si.editorTextFocus,
                primary: ut.Alt | Ze.KeyK,
                weight: 100
            }
        });
    }
    run(e, n) {
        _9e(e, n) || t9.get(n)?.navigateToChange("previous");
    }
}), _l(class extends xu {
    constructor(){
        super({
            id: ORn,
            label: "Go to Previous Diff File",
            alias: "Go to Previous Diff File",
            precondition: Qcs,
            kbOpts: {
                kbExpr: si.editorTextFocus,
                primary: ut.Alt | Ze.KeyH,
                weight: 1100
            }
        });
    }
    async run(e, n) {
        if (_9e(e, n)) return;
        const i = e.get(gr), r = e.get(mX), s = e.get(no), o = z0g(i, n), l = r.getDescriptors().filter((b)=>b.metadata?.source === Rbe).filter((b)=>!s.isWorktreeComposer(b.metadata?.composerId)).filter((b)=>!aPe(b.uri)).map((b)=>({
                uri: b.uri,
                currentRange: b.currentRange,
                composerMetadata: b.metadata?.composerId ? {
                    composerId: b.metadata.composerId
                } : void 0,
                createdAt: b.metadata?.createdAt,
                hideDecorations: b.metadata?.hideDecorations
            })).filter((b)=>!b.hideDecorations), c = n.getModel()?.uri, u = q0g(c, l), d = u ? l.filter((b)=>b.composerMetadata?.composerId === u) : l, h = Zcs(d.slice());
        if (!c || h.length === 0) return;
        let p;
        const g = h.findIndex((b)=>Iu.isEqual(b, c));
        g === -1 ? p = h.length - 1 : (p = g - 1, p < 0 && (p = h.length - 1));
        const f = h[p];
        o !== void 0 ? await i.openEditor({
            resource: f
        }, o) : await i.openEditor({
            resource: f
        });
        const _ = i.activeTextEditorControl;
        qS(_) && (_.focus(), t9.get(_)?.focusOnCurrentChange(1));
    }
}), _l(class extends xu {
    constructor(){
        super({
            id: FRn,
            label: "Go to Next Diff File",
            alias: "Go to Next Diff File",
            precondition: Qcs,
            kbOpts: {
                kbExpr: si.editorTextFocus,
                primary: ut.Alt | Ze.KeyL,
                weight: 1100
            }
        });
    }
    async run(e, n) {
        if (_9e(e, n)) return;
        const i = e.get(gr), r = e.get(mX), s = e.get(no), o = z0g(i, n), l = r.getDescriptors().filter((b)=>b.metadata?.source === Rbe).filter((b)=>!s.isWorktreeComposer(b.metadata?.composerId)).filter((b)=>!aPe(b.uri)).map((b)=>({
                uri: b.uri,
                currentRange: b.currentRange,
                composerMetadata: b.metadata?.composerId ? {
                    composerId: b.metadata.composerId
                } : void 0,
                createdAt: b.metadata?.createdAt,
                hideDecorations: b.metadata?.hideDecorations
            })).filter((b)=>!b.hideDecorations), c = n.getModel()?.uri, u = q0g(c, l), d = u ? l.filter((b)=>b.composerMetadata?.composerId === u) : l, h = Zcs(d.slice());
        if (!c || h.length === 0) return;
        let p;
        const g = h.findIndex((b)=>Iu.isEqual(b, c));
        g === -1 ? p = 0 : (p = g + 1, p >= h.length && (p = 0));
        const f = h[p];
        o !== void 0 ? await i.openEditor({
            resource: f
        }, o) : await i.openEditor({
            resource: f
        });
        const _ = i.activeTextEditorControl;
        qS(_) && (_.focus(), t9.get(_)?.focusOnCurrentChange(1));
    }
});

}

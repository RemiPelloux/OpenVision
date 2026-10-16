import { OGi, ZJe, aWt, sPe } from "./A3u.js";
import { rh } from "./De_3.js";
import { Oo, S, Se, jn, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { Sg, jp } from "./aiService.js";
import { ac, bn } from "./async.js";
import { Y3, f_e } from "./cmdKStateService.js";
import { Ja, md } from "./codeEditorService.js";
import { $n, vi } from "./commands.js";
import { Zs, nl } from "./composerDataServiceTypes.js";
import { Cn, qt } from "./configuration.js";
import { AAe, KNt, So, gmn, pmn } from "./constants_8.js";
import { At, dn, he, xn } from "./contextkey.js";
import { D$, p_e } from "./diffChangeSource.js";
import { tl_ } from "./diffChangeSourceRegistry.js";
import { Ade, o1e } from "./diffDecorationVisibilityService.js";
import { Nv } from "./editorBrowser.js";
import { gd, gn } from "./editorContextKeys.js";
import { Ua, yc } from "./editorExtensions.js";
import { Ni, hn } from "./editorService.js";
import { Kr, qs } from "./experimentService.js";
import { FGi } from "./inlineDiffDecorationUtils.js";
import { lZ, ll_ } from "./inlineDiffPartialWidget.js";
import { CN, Fee, zM } from "./inlineDiffService.js";
import { Fqt, G8e, JOh, Lqt, Nqt, Oqt, QOh, inr, n5n, onr, rnr, snr } from "./inlineDiffTypes.js";
import { Ze, _t } from "./instantiation.js";
import { Ie, Pr, fe } from "./keyCodes.js";
import { kl, pc } from "./language.js";
import { rt } from "./nls.js";
import { K3 } from "./pathUtils.js";
import { NO, lU } from "./peekView.js";
import { Yn, ya } from "./position.js";
import { Fp, LO, co, pp } from "./qIc.js";
import { Do, Ha } from "./reactiveStorageServiceTypes.js";
import { dl_, dnr } from "./removedLinesZoneWidget.js";
import { Li, pl } from "./resources.js";
import { Vn, yn } from "./storage_2.js";
import { $h, np } from "./telemetry.js";
import { $r, as } from "./themeService.js";
import { x } from "./tslib.es6.js";
import { Ea, rl } from "./uriIdentity.js";
import { Ku } from "./utilities_3.js";
import { Pqt, W8e } from "./utility.js";
import { Js, zn } from "./uuid.js";
function Rq(e, t) {
    return pl.isEqual(e.uri, t);
}
function aFh(e, t) {
    return e ? t.find((i)=>Rq(i, e) && i.composerMetadata?.composerId)?.composerMetadata?.composerId : void 0;
}
function cFh(e, t) {
    return e.visibleEditorPanes.find((n)=>LO(n.getControl()) === t)?.group.id;
}
function hnr(e) {
    const t = e.filter((r)=>!sPe(r.uri)).slice().sort((r, s)=>r.createdAt !== void 0 && s.createdAt !== void 0 && r.createdAt !== s.createdAt ? r.createdAt - s.createdAt : pl.isEqual(r.uri, s.uri) ? r.currentRange.startLineNumber - s.currentRange.startLineNumber : r.uri.toString() < s.uri.toString() ? -1 : 1), n = [], i = new Set;
    for (const r of t){
        const s = r.uri.toString();
        i.has(s) || (i.add(s), n.push(r.uri));
    }
    return n;
}
function hl_(e, t, n, i, r) {
    (rh(n, "jumpOnDiffAccept") ?? !0) && setTimeout(()=>{
        const o = e.getModel();
        let a = -1;
        if (o) try {
            a = i.getDescriptors().filter((c)=>Rq(c, o.uri)).reduce((c, l)=>c + l.changes.length, 0);
        } catch  {}
        a > 0 ? t.navigateToChange("next") : e.focus();
    }, 50);
}
function gTe(e, t) {
    return e.get(Ade).shouldHideInlineDiffs() && !(t.getIsMultiDiffEditor?.() ?? !1);
}
var hnt, pnr, lFh, uFh, dFh, F2;
export { F2, Rq, aFh, cFh, dFh, gTe, hl_, hnr, hnt, lFh, pnr, uFh };
var __wakaru_i5n_initialized = false;
export function i5n() {
if (__wakaru_i5n_initialized) return;
__wakaru_i5n_initialized = true;
"use strict";
x(), bn(), So(), Pr(), Se(), jn(), Li(), Js(), rt(), vi(), Cn(), dn(), Ze(), Ha(), Ku(), Vn(), np(), as(), rl(), nl(), Sg(), Pqt(), f_e(), Ni(), qs(), K3(), Nv(), yc(), md(), o1e(), p_e(), tl_(), CN(), FGi(), ya(), gd(), kl(), lU(), G8e(), ll_(), dl_(), hnt = new At("inlineDiffs.activeEditorWithDiffs", !1, {
    type: "boolean",
    description: S(1381, null)
}), pnr = new At("inlineDiffs.hasInlineDiffsInAnyEditor", !1, {
    type: "boolean",
    description: S(1382, null)
}), lFh = class extends Ua {
    constructor(){
        super({
            id: JOh,
            label: "View All Changes",
            alias: "View All Changes",
            precondition: he.or(gn.editorHasPromptBar.isEqualTo(!0), gn.hasDisplayedDiff)
        });
    }
    async run(e, t, n) {
        if (gTe(e, t)) return;
        const i = e.get(D$), r = e.get(hn), s = i.getDescriptors().filter((a)=>a.metadata?.source === Fee);
        if (s.length === 0) return;
        const o = {
            resources: s.map((a)=>a.uri)
        };
        await r.openEditor(o);
    }
}, co(lFh), co(class extends Ua {
    constructor(){
        super({
            id: Lqt,
            label: "Accept Edits",
            alias: "Accept Edits",
            precondition: hnt,
            kbOpts: {
                kbExpr: gn.editorTextFocus,
                primary: Ie.CtrlCmd | fe.Enter,
                weight: 500
            }
        });
    }
    run(t, n, i) {
        if (gTe(t, n)) return;
        const r = t.get(Do), s = t.get($h);
        s.publicLogCapture("Accepted Diff"), s.publicLogCapture("did.edit.accepted", {
            model: W8e
        }), F2.get(n)?.acceptSuggestion(i, "both");
    }
}), co(class extends Ua {
    constructor(){
        super({
            id: inr,
            label: "Accept Partial Edit",
            alias: "Accept Partial Edit",
            precondition: hnt,
            kbOpts: {
                kbExpr: gn.editorTextFocus,
                primary: Oo ? Ie.CtrlCmd | Ie.Shift | fe.KeyY : Ie.CtrlCmd | fe.KeyY,
                weight: 500
            }
        });
    }
    run(t, n, i) {
        if (gTe(t, n)) return;
        t.get($h).publicLogCapture("Accepted Partial Diff");
        const r = t.get($h), s = t.get(Do), o = t.get(yn), a = t.get(D$), c = t.get($n);
        r.publicLogCapture("did.edit.acceptedpartial", {
            model: W8e
        });
        const l = F2.get(n);
        l && (l.acceptPartialSuggestion(i, "both"), hl_(n, l, o, a, c));
    }
}), uFh = class extends Ua {
    constructor(){
        super({
            id: QOh,
            label: "Reject All Edits",
            alias: "Reject All Edits",
            precondition: he.or(gn.editorHasPromptBar.isEqualTo(!0), gn.hasDisplayedDiff),
            kbOpts: {
                kbExpr: gn.editorTextFocus,
                primary: Ie.CtrlCmd | fe.Shift | fe.Backspace,
                weight: 500
            }
        });
    }
    run(e, t, n) {
        if (gTe(e, t)) return;
        e.get($h).publicLogCapture("Rejected Diff");
        const i = e.get(Do), r = e.get(Y3);
        e.get($h).publicLogCapture("did.edit.rejected", {
            model: W8e
        }), e.get(Ja).listCodeEditors().forEach((c)=>{
            F2.get(c)?.rejectSuggestion(n, "both");
            const l = r.getPromptBars();
            if (l.length === 0) return;
            const u = c.getSelection();
            let h;
            if (!u) h = l[l.length - 1].id;
            else {
                let p = 1 / 0;
                for (const g of l){
                    const f = c.getModel()?.getDecorationRange(g.currentRangeDecorationId);
                    if (!f) continue;
                    if (f.intersectRanges(u)) {
                        h = g.id;
                        break;
                    }
                    const v = Math.min(Math.abs(u.startLineNumber - f.startLineNumber), Math.abs(u.endLineNumber - f.endLineNumber));
                    v < p && (p = v, h = g.id);
                }
            }
            e.get($n).executeCommand(pmn, h), e.get($n).executeCommand(AAe, h);
        });
    }
}, co(uFh), co(class extends Ua {
    constructor(){
        super({
            id: Nqt,
            label: "Undo Edits",
            alias: "Undo Edits",
            precondition: hnt,
            kbOpts: {
                kbExpr: gn.editorTextFocus,
                primary: Ie.CtrlCmd | Ie.Shift | fe.Backspace,
                weight: 500
            }
        });
    }
    run(t, n, i) {
        if (gTe(t, n)) return;
        const r = t.get(Do), s = t.get($h), o = t.get(Y3);
        s.publicLogCapture("Rejected Diff"), s.publicLogCapture("did.edit.rejected", {
            model: W8e
        }), F2.get(n)?.rejectSuggestion(i, "both");
        const a = o.getPromptBars();
        if (a.length === 0) return;
        const c = n.getSelection();
        let l;
        if (!c) l = a[a.length - 1].id;
        else {
            let u = 1 / 0;
            for (const h of a){
                const p = n.getModel()?.getDecorationRange(h.currentRangeDecorationId);
                if (!p) continue;
                if (p.intersectRanges(c)) {
                    l = h.id;
                    break;
                }
                const g = Math.min(Math.abs(c.startLineNumber - p.startLineNumber), Math.abs(c.endLineNumber - p.endLineNumber));
                g < u && (u = g, l = h.id);
            }
        }
        t.get($n).executeCommand(pmn, l), t.get($n).executeCommand(AAe, l);
    }
}), co(class extends Ua {
    constructor(){
        super({
            id: rnr,
            label: "Reject Partial Edit",
            alias: "Reject Partial Edit",
            precondition: hnt,
            kbOpts: {
                kbExpr: gn.editorTextFocus,
                primary: Ie.CtrlCmd | fe.KeyN,
                weight: 500
            }
        });
    }
    run(t, n, i) {
        if (gTe(t, n)) return;
        const r = t.get($h), s = t.get(Do), o = t.get(yn), a = t.get(zM), c = t.get($n);
        r.publicLogCapture("Rejected Partial Diff"), r.publicLogCapture("did.edit.rejectedpartial", {
            model: W8e
        });
        const l = F2.get(n);
        l && l.rejectPartialSuggestion(i, "both");
    }
}), dFh = class extends Ua {
    constructor(){
        super({
            id: n5n,
            label: "Cancel Edits",
            alias: "Cancel Edits",
            precondition: gn.hasActivelyGeneratingDiff,
            kbOpts: {
                kbExpr: gn.editorTextFocus,
                primary: Ie.CtrlCmd | Ie.Shift | fe.Backspace,
                weight: 600
            }
        });
    }
    run(e, t, n) {
        gTe(e, t) || (e.get($h).publicLogCapture("Cancelled Diff"), F2.get(t)?.cancelGeneration(n, "both"));
    }
}, F2 = class extends we {
    constructor(e, t, n, i, r, s, o, a, c, l, u, h, p, g){
        super(), this._instantiationService = t, this.languageService = n, this._inlineDiffService = r, this._diffChangeSourceRegistry = s, this.commandService = a, this._themeService = c, this.configurationService = l, this.aiService = u, this.cmdKStateService = h, this.experimentService = p, this.diffDecorationVisibilityService = g, this.displayedDiffCache = new Map, this._editor = e, this.extUri = o.extUri, this._hasDisplayedDiff = gn.hasDisplayedDiff.bindTo(e.contextKeyService), this._hasActivelyGeneratingDiff = gn.hasActivelyGeneratingDiff.bindTo(e.contextKeyService), this._activeEditorWithDiffs = hnt.bindTo(e.contextKeyService), this._hasInlineDiffsInAnyEditor = pnr.bindTo(e.contextKeyService), this._showPartialAcceptRejectWidgets = !0, this._showDiffsScheduler = this._register(new ac(()=>this.showDiffs(), 100)), this._diffUpdateScheduler = this._register(new ac(()=>{
            this.showDiffs(), this.updateContextKeys();
        }, 0));
        const f = NO.inPeekEditor.getValue(i), v = gn.inDiffEditor.getValue(i), b = gn.isEmbeddedDiffEditor.getValue(i), y = v && !b, A = this._editor.getDomNode()?.getAttribute("data-uri")?.startsWith("output:");
        !f && !y && !A && (this._register(this._editor.onDidChangeModel((D)=>{
            for (const P of this.displayedDiffCache.keys())this.removeDiff(P);
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
    static get(e) {
        return e.getContribution(F2.ID);
    }
    findClosestDiffToCursorId(e, t = "notPromptBar") {
        const n = this._editor.getPosition();
        let i = null, r = 1 / 0;
        const s = this._editor.getModel()?.uri, o = this._getDiffsForEditor(s).filter((a)=>t === "both" || t === "promptBar" == (this.cmdKStateService.getPromptBarByDiffId(a.id) !== void 0));
        for (const a of o){
            const c = this.aiService.inprogressAIGenerations.value.some((p)=>p.generationUUID === a.metadata?.generationId);
            if (e === 1 && c || e === 2 && !c) continue;
            if (!n) {
                i = a.id;
                break;
            }
            const l = a.currentRange.startLineNumber, u = a.currentRange.endLineNumberExclusive, h = Math.min(Math.abs(n.lineNumber - l), Math.abs(n.lineNumber - u));
            h < r && (r = h, i = a.id);
        }
        return i || null;
    }
    rejectSuggestion(e, t) {
        if (!this._editor.hasModel()) return;
        const n = e?.id ?? this.findClosestDiffToCursorId(1, t);
        n && this._diffChangeSourceRegistry.reject(n);
    }
    acceptSuggestion(e, t) {
        if (!this._editor.hasModel()) return;
        const n = e?.id ?? this.findClosestDiffToCursorId(1, t);
        n && this._diffChangeSourceRegistry.accept(n);
    }
    acceptPartialSuggestion(e, t) {
        if (!this._editor.hasModel()) return;
        const n = e?.diffId ?? this.findClosestDiffToCursorId(1, t);
        if (!n) return;
        const i = e?.line ? new Yn(e.line(), 1) : this._editor.getPosition();
        if (!i) return;
        const r = this._diffChangeSourceRegistry.getDescriptorById(n);
        if (!r) return;
        const s = aWt(r.descriptor, i);
        s && this._diffChangeSourceRegistry.acceptChange(n, s);
    }
    rejectPartialSuggestion(e, t) {
        if (!this._editor.hasModel()) return;
        const n = e?.diffId ?? this.findClosestDiffToCursorId(1, t);
        if (!n) return;
        const i = e?.line ? new Yn(e.line(), 1) : this._editor.getPosition();
        if (!i) return;
        const r = this.cmdKStateService.getPromptBarByDiffId(n), s = this._diffChangeSourceRegistry.getDescriptorById(n);
        if (!s) return;
        const o = aWt(s.descriptor, i);
        o && this._diffChangeSourceRegistry.rejectChange(n, o) && r && (this.commandService.executeCommand(pmn, r.id), this.commandService.executeCommand(AAe, r.id));
    }
    cancelGeneration(e, t) {
        const n = e?.id ?? this.findClosestDiffToCursorId(2, t);
        n && this._diffChangeSourceRegistry.cancel(n);
    }
    shouldSuppressInlineDiffEditorActions() {
        return this.diffDecorationVisibilityService.shouldHideInlineDiffs() && !(this._editor.getIsMultiDiffEditor?.() ?? !1);
    }
    clearDisplayedDiffs() {
        for (const e of this.displayedDiffCache.keys())this.removeDiff(e);
        this.displayedDiffCache.clear();
    }
    updateContextKeys() {
        if (this.shouldSuppressInlineDiffEditorActions()) {
            this._activeEditorWithDiffs.set(!1), this._hasInlineDiffsInAnyEditor.set(!1), this._hasActivelyGeneratingDiff.set(!1), this._hasDisplayedDiff.set(!1);
            return;
        }
        if (!this._editor.hasModel()) this._activeEditorWithDiffs.set(!1);
        else {
            const t = this._editor.getModel(), n = this._getDiffsForEditor(t.uri);
            this._activeEditorWithDiffs.set(n.length > 0);
        }
        const e = this._diffChangeSourceRegistry.getDescriptors().length > 0;
        this._hasInlineDiffsInAnyEditor.set(e);
    }
    _getDiffsForEditor(e) {
        return e ? this._diffChangeSourceRegistry.getDescriptors().filter((t)=>Rq(t, e)) : [];
    }
    navigateToChange(e, t) {
        if (this.shouldSuppressInlineDiffEditorActions() || !this._editor.hasModel()) return;
        const n = this._editor.getModel(), i = n.getLineCount(), r = this._getDiffsForEditor(n.uri).flatMap((c)=>c.changes.map((l)=>{
                const u = ZJe(c, l), h = OGi(c, l, i);
                return {
                    startLineNumber: u.startLineNumber,
                    endLineNumber: u.endLineNumber,
                    widgetLine: h
                };
            })).sort((c, l)=>c.startLineNumber - l.startLineNumber);
        if (r.length === 0) return;
        let s;
        if (t !== void 0) s = t - 1;
        else {
            const c = this._editor.getPosition();
            if (!c) return;
            s = r.findIndex((l)=>c.lineNumber >= l.startLineNumber && c.lineNumber <= l.endLineNumber || c.lineNumber === l.widgetLine);
        }
        if (s === -1) {
            const c = this._editor.getPosition();
            if (!c) return;
            if (e === "next") s = r.findIndex((l)=>l.startLineNumber > c.lineNumber), s === -1 && r.length > 0 && (s = 0);
            else {
                s = -1;
                for(let l = r.length - 1; l >= 0; l--)if (r[l].endLineNumber < c.lineNumber) {
                    s = l;
                    break;
                }
                s === -1 && r.length > 0 && (s = r.length - 1);
            }
        } else e === "next" ? s = (s + 1) % r.length : s = (s - 1 + r.length) % r.length;
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
        const e = this._editor.getModel().uri, t = this.aiService.inprogressAIGenerations.value, n = this._getDiffsForEditor(e);
        let i = !1;
        for (const s of n){
            const a = t.some((c)=>c.generationUUID === s.metadata?.generationId) && !0;
            i = i || a, this.showDiff(s, a);
        }
        for (const s of this.displayedDiffCache.keys())n.some((o)=>o.id === s) || this.removeDiff(s);
        i ? this._hasActivelyGeneratingDiff.set(!0) : this._hasActivelyGeneratingDiff.set(!1), n.filter((s)=>this.cmdKStateService.getPromptBarByDiffId(s.id) === void 0).length > 0 ? this._hasDisplayedDiff.set(!0) : this._hasDisplayedDiff.set(!1);
    }
    getZoneWidgets(e, t) {
        if (!this._editor.hasModel()) return [];
        if (!this.shouldDisplayRemovedLineZones()) {
            for (const o of t)o.dispose();
            return [];
        }
        if (e.metadata?.hideDeletionViewZones) {
            for (const o of t)o.dispose();
            return [];
        }
        if (e.metadata?.hideDecorations) {
            for (const o of t)o.dispose();
            return [];
        }
        if (this._editor.getIsMultiDiffEditor?.()) return [];
        const n = this.configurationService.getValue(KNt) ?? gmn, i = this.experimentService.getDynamicConfig("inline_diff_performance_config", {
            disableExposureLog: !1
        })?.maxDecorations ?? 100;
        if (n && e.changes.length > i) {
            for (const o of t)o.dispose();
            return [];
        }
        const r = [], s = [];
        try {
            for (const o of e.changes){
                if (o.removedTextLines.length === 0 || o.indentation) continue;
                let a = e.currentRange.startLineNumber + o.addedRange.startLineNumber - 1 - 1, c;
                a === 0 ? c = 1 : c = this._editor.getModel().getLineMaxColumn(a);
                const l = `${o.removedLinesOriginalRange.startLineNumber}-${o.removedLinesOriginalRange.endLineNumberExclusive}`, u = {
                    lineNumber: a,
                    column: c
                };
                let h = !1;
                for (const g of t)g.id === l && (h = !0, g.updatePosition(u), r.push(g), s.push(l));
                const p = [];
                if (e.originalLineTokens) for (const g of o.removedTextLines){
                    const f = e.originalLineTokens.find((v)=>v.text === g);
                    p.push(f);
                }
                if (!h) {
                    const g = new dnr(l, this._editor, o.removedTextLines, p, o.relativeInnerChanges, u, this.languageService, this._themeService, this.configurationService);
                    g.showWidget(), r.push(g);
                }
            }
        } catch (o) {
            console.error("Error creating removed lines widgets!", o);
        }
        for (const o of t)s.includes(o.id) || o.dispose();
        return r;
    }
    setShowPartialAcceptRejectWidgets(e) {
        this._showPartialAcceptRejectWidgets = e, this._diffUpdateScheduler.schedule();
    }
    shouldDisplayRemovedLineZones() {
        return !0;
    }
    shouldRenderPartialWidgets() {
        return this._showPartialAcceptRejectWidgets;
    }
    getRemovedNumLinesInRange(e, t) {
        let n = 0;
        for (const i of this.displayedDiffCache.get(e)?.zoneWidgets ?? []){
            const r = i.position?.lineNumber;
            r !== void 0 && r >= t.startLineNumber && r <= t.endLineNumber && (n += i.getHeightInLines());
        }
        return n;
    }
    showDiff(e, t) {
        try {
            const n = this.displayedDiffCache.get(e.id);
            let i = [];
            n && (i = n.zoneWidgets);
            let r = n?.partialWidgets ?? [];
            const s = this.getZoneWidgets(e, i), o = t ? [] : e.changes, a = this.configurationService.getValue(KNt) ?? gmn, c = this.experimentService.getDynamicConfig("inline_diff_performance_config", {
                disableExposureLog: !1
            })?.maxDecorations ?? 100, l = a && e.changes.length > c;
            l && this._inlineDiffService.notifySuppressedDiffVisible(e.id);
            const h = this._editor.getIsMultiDiffEditor?.() ?? !1 ? !1 : e.metadata?.hideDecorations ?? !1, p = this.shouldRenderPartialWidgets() && !t && !l && !h;
            if (!p && r.length > 0) {
                for (const g of r)g.dispose();
                r = [];
            }
            if (p) {
                const g = this._editor.getModel();
                if (!g) return;
                const f = g.getLineCount(), v = new Set(o.map((y)=>OGi(e, y, f))), b = [];
                for (const y of r)v.has(y.line()) || b.push(y);
                for (const y of b)y.dispose();
                r = r.filter((y)=>v.has(y.line()));
                for (const y of v)r.find((E)=>E.line() === y) || r.push(this._instantiationService.createInstance(lZ, e.id + "-partial" + zn(), e.id, e.metadata?.composerId, y, this._editor));
            }
            this.displayedDiffCache.set(e.id, {
                zoneWidgets: s,
                partialWidgets: r
            });
        } catch (n) {
            console.error(n);
            const i = this.displayedDiffCache.get(e.id);
            if (i) {
                for (const r of i.partialWidgets)r.dispose();
                for (const r of i.zoneWidgets)r.dispose();
            }
            this.displayedDiffCache.delete(e.id);
        }
    }
    removeDiff(e) {
        const t = this.displayedDiffCache.get(e);
        if (t) {
            for (const n of t.partialWidgets)n.dispose();
            for (const n of t.zoneWidgets)n.dispose();
            this.displayedDiffCache.delete(e);
        }
    }
    focusOnCurrentChange(e) {
        if (!this._editor.hasModel()) return;
        const t = this._editor.getModel(), n = t.getLineCount(), i = this._getDiffsForEditor(t.uri).flatMap((s)=>s.changes.map((o)=>{
                const a = ZJe(s, o);
                return {
                    startLineNumber: a.startLineNumber,
                    endLineNumber: a.endLineNumber,
                    widgetLine: OGi(s, o, n)
                };
            })).sort((s, o)=>s.startLineNumber - o.startLineNumber);
        if (i.length === 0) return;
        const r = i[e - 1];
        if (r) {
            const s = r.widgetLine;
            this._editor.setPosition({
                lineNumber: s,
                column: 1
            }), this._editor.revealLineInCenter(s);
        }
    }
    dispose() {
        for (const [e, t] of this.displayedDiffCache.entries()){
            for (const n of t.partialWidgets)n.dispose();
            for (const n of t.zoneWidgets)n.dispose();
        }
        this.displayedDiffCache.clear(), super.dispose();
    }
}, F2.ID = "editor.contrib.inlineDiffController", F2 = ie([
    C(1, _t),
    C(2, pc),
    C(3, xn),
    C(4, zM),
    C(5, D$),
    C(6, Ea),
    C(7, $n),
    C(8, $r),
    C(9, qt),
    C(10, jp),
    C(11, Y3),
    C(12, Kr),
    C(13, Ade)
], F2), pp(F2.ID, F2, 3), co(dFh), co(class extends Ua {
    constructor(){
        super({
            id: snr,
            label: "Go to Next Change",
            alias: "Go to Next Change",
            precondition: hnt,
            kbOpts: {
                kbExpr: gn.editorTextFocus,
                primary: Ie.Alt | fe.KeyJ,
                weight: 100
            }
        });
    }
    run(t, n) {
        gTe(t, n) || F2.get(n)?.navigateToChange("next");
    }
}), co(class extends Ua {
    constructor(){
        super({
            id: onr,
            label: "Go to Previous Change",
            alias: "Go to Previous Change",
            precondition: hnt,
            kbOpts: {
                kbExpr: gn.editorTextFocus,
                primary: Ie.Alt | fe.KeyK,
                weight: 100
            }
        });
    }
    run(t, n) {
        gTe(t, n) || F2.get(n)?.navigateToChange("previous");
    }
}), co(class extends Ua {
    constructor(){
        super({
            id: Oqt,
            label: "Go to Previous Diff File",
            alias: "Go to Previous Diff File",
            precondition: pnr,
            kbOpts: {
                kbExpr: gn.editorTextFocus,
                primary: Ie.Alt | fe.KeyH,
                weight: 1100
            }
        });
    }
    async run(t, n) {
        if (gTe(t, n)) return;
        const i = t.get(hn), r = t.get(D$), s = t.get(Zs), o = cFh(i, n), c = r.getDescriptors().filter((y)=>y.metadata?.source === Fee).filter((y)=>!s.isWorktreeComposer(y.metadata?.composerId)).filter((y)=>!sPe(y.uri)).map((y)=>({
                uri: y.uri,
                currentRange: y.currentRange,
                composerMetadata: y.metadata?.composerId ? {
                    composerId: y.metadata.composerId
                } : void 0,
                createdAt: y.metadata?.createdAt,
                hideDecorations: y.metadata?.hideDecorations
            })).filter((y)=>!y.hideDecorations), l = n.getModel()?.uri, u = aFh(l, c), h = u ? c.filter((y)=>y.composerMetadata?.composerId === u) : c, p = hnr(h.slice());
        if (!l || p.length === 0) return;
        let g;
        const f = p.findIndex((y)=>pl.isEqual(y, l));
        f === -1 ? g = p.length - 1 : (g = f - 1, g < 0 && (g = p.length - 1));
        const v = p[g];
        o !== void 0 ? await i.openEditor({
            resource: v
        }, o) : await i.openEditor({
            resource: v
        });
        const b = i.activeTextEditorControl;
        Fp(b) && (b.focus(), F2.get(b)?.focusOnCurrentChange(1));
    }
}), co(class extends Ua {
    constructor(){
        super({
            id: Fqt,
            label: "Go to Next Diff File",
            alias: "Go to Next Diff File",
            precondition: pnr,
            kbOpts: {
                kbExpr: gn.editorTextFocus,
                primary: Ie.Alt | fe.KeyL,
                weight: 1100
            }
        });
    }
    async run(t, n) {
        if (gTe(t, n)) return;
        const i = t.get(hn), r = t.get(D$), s = t.get(Zs), o = cFh(i, n), c = r.getDescriptors().filter((y)=>y.metadata?.source === Fee).filter((y)=>!s.isWorktreeComposer(y.metadata?.composerId)).filter((y)=>!sPe(y.uri)).map((y)=>({
                uri: y.uri,
                currentRange: y.currentRange,
                composerMetadata: y.metadata?.composerId ? {
                    composerId: y.metadata.composerId
                } : void 0,
                createdAt: y.metadata?.createdAt,
                hideDecorations: y.metadata?.hideDecorations
            })).filter((y)=>!y.hideDecorations), l = n.getModel()?.uri, u = aFh(l, c), h = u ? c.filter((y)=>y.composerMetadata?.composerId === u) : c, p = hnr(h.slice());
        if (!l || p.length === 0) return;
        let g;
        const f = p.findIndex((y)=>pl.isEqual(y, l));
        f === -1 ? g = 0 : (g = f + 1, g >= p.length && (g = 0));
        const v = p[g];
        o !== void 0 ? await i.openEditor({
            resource: v
        }, o) : await i.openEditor({
            resource: v
        });
        const b = i.activeTextEditorControl;
        Fp(b) && (b.focus(), F2.get(b)?.focusOnCurrentChange(1));
    }
});

}

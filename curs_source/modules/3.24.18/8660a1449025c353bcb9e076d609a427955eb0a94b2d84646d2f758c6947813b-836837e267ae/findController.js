import { At, D, Fa, Gt, Nt, Qe, dA, st, tt } from "./Iwo.js";
import { Ft, es } from "./actions_2.js";
import { II, qn } from "./async.js";
import { bb, hf } from "./clipboardService.js";
import { aL, pf } from "./contextView.js";
import { Hi, Rr, mt } from "./contextkey.js";
import { doe, vjo } from "./editorColorRegistry.js";
import { cg, si } from "./editorContextKeys.js";
import { Nj, Ud, V7o, xu } from "./editorExtensions.js";
import { $Ht, GGe, K0n, OC, V0n, Zwt, gWr, nyi, q0n, qPp, z0n } from "./findModel.js";
import { HI1, zPp } from "./findOptionsWidget.js";
import { c3a, l3a } from "./findState.js";
import { _Mp, vMp } from "./findWidget.js";
import { j2e, qI1 } from "./findWidgetSearchHistory.js";
import { av, gS } from "./hover.js";
import { cyi } from "./ipa.js";
import { Ma, Ze, ut } from "./keyCodes.js";
import { Al, ru } from "./keybinding.js";
import { J0, gO } from "./model_2.js";
import { Bt } from "./nls.js";
import { Ks, Wr, Yn } from "./notification.js";
import { Cl, Gu } from "./quickInput.js";
import { $2e, zI1 } from "./replaceWidgetHistory.js";
import { Zi, ki } from "./storage_2.js";
import { Dl, Ml } from "./themeService.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { OI, Q5d, Zc, _l, sv } from "./ze.js";
var bMp, TB, Z0n, yMp, SMp, kMp, wMp, k3a, CMp, TMp, EMp, w3a, IMp, xMp, AMp, H2e;
export { AMp, CMp, EMp, H2e, IMp, SMp, TB, TMp, Z0n, bMp, k3a, kMp, w3a, wMp, xMp, yMp };
var __wakaru_HHt_initialized = false;
export function HHt() {
if (__wakaru_HHt_initialized) return;
__wakaru_HHt_initialized = true;
"use strict";
E(), qn(), Ma(), Qe(), Fa(), Ud(), doe(), cg(), J0(), Zwt(), HI1(), c3a(), _Mp(), Bt(), es(), bb(), Hi(), pf(), ru(), Ks(), Gu(), Zi(), Dl(), gS(), Gt(), qI1(), zI1(), bMp = 524288, TB = class extends st {
    constructor(t, e, n, i, r, s){
        super(), this._onDidChangeState = this._register(new tt), this.onDidChangeState = this._onDidChangeState.event, this._editor = t, this._findWidgetVisible = GGe.bindTo(e), this._contextKeyService = e, this._storageService = n, this._clipboardService = i, this._notificationService = r, this._hoverService = s, this._updateHistoryDelayer = new II(500), this._state = this._register(new l3a), this.loadQueryState(), this._register(this._state.onFindReplaceStateChange((o)=>this._onStateChanged(o))), this._model = null, this._register(this._editor.onDidChangeModel(()=>{
            const o = this._editor.getModel() && this._state.isRevealed;
            this.disposeModel(), this._state.change({
                searchScope: null,
                matchCase: this._storageService.getBoolean("editor.matchCase", 1, !1),
                wholeWord: this._storageService.getBoolean("editor.wholeWord", 1, !1),
                isRegex: this._storageService.getBoolean("editor.isRegex", 1, !1),
                preserveCase: this._storageService.getBoolean("editor.preserveCase", 1, !1)
            }, !1), o && this._start({
                forceRevealReplace: !1,
                seedSearchStringFromSelection: "none",
                seedSearchStringFromNonEmptySelection: !1,
                seedSearchStringFromGlobalClipboard: !1,
                shouldFocus: 0,
                shouldAnimate: !1,
                updateSearchScope: !1,
                loop: this._editor.getOption(43).loop
            });
        })), this._register(this._state.onFindReplaceStateChange((o)=>this._onDidChangeState.fire(o)));
    }
    get editor() {
        return this._editor;
    }
    static get(t) {
        return t.getContribution(TB.ID);
    }
    dispose() {
        this.disposeModel(), super.dispose();
    }
    disposeModel() {
        this._model && (this._model.dispose(), this._model = null);
    }
    _onStateChanged(t) {
        this.saveQueryState(t), t.isRevealed && (this._state.isRevealed ? this._findWidgetVisible.set(!0) : (this._findWidgetVisible.reset(), this.disposeModel())), t.searchString && this.setGlobalBufferTerm(this._state.searchString);
    }
    saveQueryState(t) {
        t.isRegex && this._storageService.store("editor.isRegex", this._state.actualIsRegex, 1, 1), t.wholeWord && this._storageService.store("editor.wholeWord", this._state.actualWholeWord, 1, 1), t.matchCase && this._storageService.store("editor.matchCase", this._state.actualMatchCase, 1, 1), t.preserveCase && this._storageService.store("editor.preserveCase", this._state.actualPreserveCase, 1, 1);
    }
    loadQueryState() {
        this._state.change({
            matchCase: this._storageService.getBoolean("editor.matchCase", 1, this._state.matchCase),
            wholeWord: this._storageService.getBoolean("editor.wholeWord", 1, this._state.wholeWord),
            isRegex: this._storageService.getBoolean("editor.isRegex", 1, this._state.isRegex),
            preserveCase: this._storageService.getBoolean("editor.preserveCase", 1, this._state.preserveCase)
        }, !1);
    }
    isFindInputFocused() {
        return !!$Ht.getValue(this._contextKeyService);
    }
    getState() {
        return this._state;
    }
    closeFindWidget() {
        this._state.change({
            isRevealed: !1,
            searchScope: null
        }, !1), this._editor.focus();
    }
    toggleCaseSensitive() {
        this._state.change({
            matchCase: !this._state.matchCase
        }, !1), this._state.isRevealed || this.highlightFindOptions();
    }
    toggleWholeWords() {
        this._state.change({
            wholeWord: !this._state.wholeWord
        }, !1), this._state.isRevealed || this.highlightFindOptions();
    }
    toggleRegex() {
        this._state.change({
            isRegex: !this._state.isRegex
        }, !1), this._state.isRevealed || this.highlightFindOptions();
    }
    togglePreserveCase() {
        this._state.change({
            preserveCase: !this._state.preserveCase
        }, !1), this._state.isRevealed || this.highlightFindOptions();
    }
    toggleSearchScope() {
        if (this._state.searchScope) this._state.change({
            searchScope: null
        }, !0);
        else if (this._editor.hasModel()) {
            let t = this._editor.getSelections();
            t = t.map((e)=>(e.endColumn === 1 && e.endLineNumber > e.startLineNumber && (e = e.setEndPosition(e.endLineNumber - 1, this._editor.getModel().getLineMaxColumn(e.endLineNumber - 1))), e.isEmpty() ? null : e)).filter((e)=>!!e), t.length && this._state.change({
                searchScope: t
            }, !0);
        }
    }
    setSearchString(t) {
        this._state.isRegex && (t = dA(t)), this._state.change({
            searchString: t
        }, !1);
    }
    highlightFindOptions(t = !1) {}
    async _start(t, e) {
        if (this.disposeModel(), !this._editor.hasModel()) return;
        const n = {
            ...e,
            isRevealed: !0
        };
        if (t.seedSearchStringFromSelection === "single") {
            const i = cyi(this._editor, t.seedSearchStringFromSelection, t.seedSearchStringFromNonEmptySelection);
            i && (this._state.isRegex ? n.searchString = dA(i) : n.searchString = i);
        } else if (t.seedSearchStringFromSelection === "multiple" && !t.updateSearchScope) {
            const i = cyi(this._editor, t.seedSearchStringFromSelection);
            i && (n.searchString = i);
        }
        if (!n.searchString && t.seedSearchStringFromGlobalClipboard) {
            const i = await this.getGlobalBufferTerm();
            if (!this._editor.hasModel()) return;
            i && (n.searchString = i);
        }
        if (t.forceRevealReplace || n.isReplaceRevealed ? n.isReplaceRevealed = !0 : this._findWidgetVisible.get() || (n.isReplaceRevealed = !1), t.updateSearchScope) {
            const i = this._editor.getSelections();
            i.some((r)=>!r.isEmpty()) && (n.searchScope = i);
        }
        n.loop = t.loop, this._state.change(n, !1), this._model || (this._model = new qPp(this._editor, this._state));
    }
    start(t, e) {
        return this._start(t, e);
    }
    moveToNextMatch() {
        return this._model ? (this._model.moveToNextMatch(), !0) : !1;
    }
    moveToPrevMatch() {
        return this._model ? (this._model.moveToPrevMatch(), !0) : !1;
    }
    goToMatch(t) {
        return this._model ? (this._model.moveToMatch(t), !0) : !1;
    }
    replace() {
        return this._model ? (this._model.replace(), !0) : !1;
    }
    replaceAll() {
        return this._model ? this._editor.getModel()?.isTooLargeForHeapOperation() ? (this._notificationService.warn(D(1076, null)), !1) : (this._model.replaceAll(), !0) : !1;
    }
    selectAllMatches() {
        return this._model ? (this._model.selectAllMatches(), this._editor.focus(), !0) : !1;
    }
    async getGlobalBufferTerm() {
        return this._editor.getOption(43).globalFindClipboard && this._editor.hasModel() && !this._editor.getModel().isTooLargeForSyncing() ? this._clipboardService.readFindText() : "";
    }
    setGlobalBufferTerm(t) {
        this._editor.getOption(43).globalFindClipboard && this._editor.hasModel() && !this._editor.getModel().isTooLargeForSyncing() && this._clipboardService.writeFindText(t);
    }
}, TB.ID = "editor.contrib.findController", TB = Re([
    F(1, Rr),
    F(2, ki),
    F(3, hf),
    F(4, Wr),
    F(5, av)
], TB), Z0n = class extends TB {
    constructor(t, e, n, i, r, s, o, a, l){
        super(t, n, o, a, s, l), this._contextViewService = e, this._keybindingService = i, this._themeService = r, this._onWidgetHeightChanged = this._register(new tt), this.onWidgetHeightChanged = this._onWidgetHeightChanged.event, this._widget = null, this._findOptionsWidget = null, this._findWidgetSearchHistory = j2e.getOrCreate(o), this._replaceWidgetHistory = $2e.getOrCreate(o);
    }
    async _start(t, e) {
        this._widget || this._createFindWidget();
        const n = this._editor.getSelection();
        let i = !1;
        switch(this._editor.getOption(43).autoFindInSelection){
            case "always":
                i = !0;
                break;
            case "never":
                i = !1;
                break;
            case "multiline":
                {
                    i = !!n && n.startLineNumber !== n.endLineNumber;
                    break;
                }
            default:
                break;
        }
        t.updateSearchScope = t.updateSearchScope || i, await super._start(t, e), this._widget && (t.shouldFocus === 2 ? this._widget.focusReplaceInput() : t.shouldFocus === 1 && this._widget.focusFindInput());
    }
    focusFindInputWithoutSelecting() {
        this._widget?.focusFindInputWithoutSelecting();
    }
    isActive() {
        return this._widget?.isActive() ?? !1;
    }
    highlightFindOptions(t = !1) {
        this._widget || this._createFindWidget(), this._state.isRevealed && !t ? this._widget.highlightFindOptions() : this._findOptionsWidget.highlightFindOptions();
    }
    _createFindWidget() {
        this._widget = this._register(new vMp(this._editor, this, this._state, this._contextViewService, this._keybindingService, this._contextKeyService, this._themeService, this._storageService, this._notificationService, this._hoverService, this._findWidgetSearchHistory, this._replaceWidgetHistory)), this._register(this._widget.onDidChangeHeight((t)=>this._onWidgetHeightChanged.fire(t))), this._findOptionsWidget = this._register(new zPp(this._editor, this._state, this._keybindingService));
    }
    saveViewState() {
        return this._widget?.getViewState();
    }
    restoreViewState(t) {
        this._widget?.setViewState(t);
    }
}, Z0n = Re([
    F(1, aL),
    F(2, Rr),
    F(3, Al),
    F(4, Ml),
    F(5, Wr),
    F(6, ki),
    F(7, hf),
    F(8, av)
], Z0n), yMp = Q5d(new V7o({
    id: OC.StartFindAction,
    label: At(1083, "Find"),
    precondition: mt.or(si.focus, mt.has("editorIsOpen"), mt.has("activeEditorIsReviewChanges")),
    kbOpts: {
        kbExpr: mt.or(si.focus, mt.has("activeEditorIsReviewChanges")),
        primary: ut.CtrlCmd | Ze.KeyF,
        weight: 100
    },
    menuOpts: {
        menuId: Ft.MenubarEditMenu,
        group: "3_find",
        title: D(1077, null),
        order: 1
    }
})), yMp.addImplementation(0, (t, e, n)=>{
    const i = TB.get(e);
    return i ? i.start({
        forceRevealReplace: !1,
        seedSearchStringFromSelection: e.getOption(43).seedSearchStringFromSelection !== "never" ? "single" : "none",
        seedSearchStringFromNonEmptySelection: e.getOption(43).seedSearchStringFromSelection === "selection",
        seedSearchStringFromGlobalClipboard: e.getOption(43).globalFindClipboard,
        shouldFocus: 1,
        shouldAnimate: !0,
        updateSearchScope: !1,
        loop: e.getOption(43).loop
    }) : !1;
}), SMp = {
    description: "Open a new In-Editor Find Widget.",
    args: [
        {
            name: "Open a new In-Editor Find Widget args",
            schema: {
                properties: {
                    searchString: {
                        type: "string"
                    },
                    replaceString: {
                        type: "string"
                    },
                    isRegex: {
                        type: "boolean"
                    },
                    matchWholeWord: {
                        type: "boolean"
                    },
                    isCaseSensitive: {
                        type: "boolean"
                    },
                    preserveCase: {
                        type: "boolean"
                    },
                    findInSelection: {
                        type: "boolean"
                    }
                }
            }
        }
    ]
}, kMp = class extends xu {
    constructor(){
        super({
            id: OC.StartFindWithArgs,
            label: At(1084, "Find with Arguments"),
            precondition: void 0,
            kbOpts: {
                kbExpr: null,
                primary: 0,
                weight: 100
            },
            metadata: SMp
        });
    }
    async run(t, e, n) {
        const i = TB.get(e);
        if (i) {
            const r = n ? {
                searchString: n.searchString,
                replaceString: n.replaceString,
                isReplaceRevealed: n.replaceString !== void 0,
                isRegex: n.isRegex,
                wholeWord: n.matchWholeWord,
                matchCase: n.isCaseSensitive,
                preserveCase: n.preserveCase
            } : {};
            await i.start({
                forceRevealReplace: !1,
                seedSearchStringFromSelection: i.getState().searchString.length === 0 && e.getOption(43).seedSearchStringFromSelection !== "never" ? "single" : "none",
                seedSearchStringFromNonEmptySelection: e.getOption(43).seedSearchStringFromSelection === "selection",
                seedSearchStringFromGlobalClipboard: !0,
                shouldFocus: 1,
                shouldAnimate: !0,
                updateSearchScope: n?.findInSelection || !1,
                loop: e.getOption(43).loop
            }, r), i.setGlobalBufferTerm(i.getState().searchString);
        }
    }
}, wMp = class extends xu {
    constructor(){
        super({
            id: OC.StartFindWithSelection,
            label: At(1085, "Find with Selection"),
            precondition: void 0,
            kbOpts: {
                kbExpr: null,
                primary: 0,
                mac: {
                    primary: ut.CtrlCmd | Ze.KeyE
                },
                weight: 100
            }
        });
    }
    async run(t, e) {
        const n = TB.get(e);
        n && (await n.start({
            forceRevealReplace: !1,
            seedSearchStringFromSelection: "multiple",
            seedSearchStringFromNonEmptySelection: !1,
            seedSearchStringFromGlobalClipboard: !1,
            shouldFocus: 0,
            shouldAnimate: !0,
            updateSearchScope: !1,
            loop: e.getOption(43).loop
        }), n.setGlobalBufferTerm(n.getState().searchString));
    }
}, k3a = class extends xu {
    async run(t, e) {
        const n = TB.get(e);
        n && !this._run(n) && (await n.start({
            forceRevealReplace: !1,
            seedSearchStringFromSelection: n.getState().searchString.length === 0 && e.getOption(43).seedSearchStringFromSelection !== "never" ? "single" : "none",
            seedSearchStringFromNonEmptySelection: e.getOption(43).seedSearchStringFromSelection === "selection",
            seedSearchStringFromGlobalClipboard: !0,
            shouldFocus: 0,
            shouldAnimate: !0,
            updateSearchScope: !1,
            loop: e.getOption(43).loop
        }), this._run(n));
    }
}, CMp = class extends k3a {
    constructor(){
        super({
            id: OC.NextMatchFindAction,
            label: At(1086, "Find Next"),
            precondition: void 0,
            kbOpts: [
                {
                    kbExpr: mt.or(si.focus, mt.has("activeEditorIsReviewChanges")),
                    primary: Ze.F3,
                    mac: {
                        primary: ut.CtrlCmd | Ze.KeyG,
                        secondary: [
                            Ze.F3
                        ]
                    },
                    weight: 100
                },
                {
                    kbExpr: mt.and(si.focus, $Ht),
                    primary: Ze.Enter,
                    weight: 100
                }
            ]
        });
    }
    _run(t) {
        return t.moveToNextMatch() ? (t.editor.pushUndoStop(), !0) : !1;
    }
}, TMp = class extends k3a {
    constructor(){
        super({
            id: OC.PreviousMatchFindAction,
            label: At(1087, "Find Previous"),
            precondition: void 0,
            kbOpts: [
                {
                    kbExpr: mt.or(si.focus, mt.has("activeEditorIsReviewChanges")),
                    primary: ut.Shift | Ze.F3,
                    mac: {
                        primary: ut.CtrlCmd | ut.Shift | Ze.KeyG,
                        secondary: [
                            ut.Shift | Ze.F3
                        ]
                    },
                    weight: 100
                },
                {
                    kbExpr: mt.and(si.focus, $Ht),
                    primary: ut.Shift | Ze.Enter,
                    weight: 100
                }
            ]
        });
    }
    _run(t) {
        return t.moveToPrevMatch();
    }
}, EMp = class extends xu {
    constructor(){
        super({
            id: OC.GoToMatchFindAction,
            label: At(1088, "Go to Match..."),
            precondition: GGe
        }), this._highlightDecorations = [];
    }
    run(t, e, n) {
        const i = TB.get(e);
        if (!i) return;
        const r = i.getState().matchesCount;
        if (r < 1) {
            t.get(Wr).notify({
                severity: Yn.Warning,
                message: D(1078, null)
            });
            return;
        }
        const s = t.get(Cl), o = new Nt, a = o.add(s.createInputBox());
        a.placeholder = D(1079, null, r);
        const l = (u)=>{
            const d = parseInt(u);
            if (isNaN(d)) return;
            const h = i.getState().matchesCount;
            if (d > 0 && d <= h) return d - 1;
            if (d < 0 && d >= -h) return h + d;
        }, c = (u)=>{
            const d = l(u);
            if (typeof d == "number") {
                a.validationMessage = void 0, i.goToMatch(d);
                const h = i.getState().currentMatch;
                h && this.addDecorations(e, h);
            } else a.validationMessage = D(1080, null, i.getState().matchesCount), this.clearDecorations(e);
        };
        o.add(a.onDidChangeValue((u)=>{
            c(u);
        })), o.add(a.onDidAccept(()=>{
            const u = l(a.value);
            typeof u == "number" ? (i.goToMatch(u), a.hide()) : a.validationMessage = D(1081, null, i.getState().matchesCount);
        })), o.add(a.onDidHide(()=>{
            this.clearDecorations(e), o.dispose();
        })), a.show();
    }
    clearDecorations(t) {
        t.changeDecorations((e)=>{
            this._highlightDecorations = e.deltaDecorations(this._highlightDecorations, []);
        });
    }
    addDecorations(t, e) {
        t.changeDecorations((n)=>{
            this._highlightDecorations = n.deltaDecorations(this._highlightDecorations, [
                {
                    range: e,
                    options: {
                        description: "find-match-quick-access-range-highlight",
                        className: "rangeHighlight",
                        isWholeLine: !0
                    }
                },
                {
                    range: e,
                    options: {
                        description: "find-match-quick-access-range-highlight-overview",
                        overviewRuler: {
                            color: OI(vjo),
                            position: gO.Full
                        }
                    }
                }
            ]);
        });
    }
}, w3a = class extends xu {
    async run(t, e) {
        const n = TB.get(e);
        if (!n) return;
        const i = cyi(e, "single", !1);
        i && n.setSearchString(i), this._run(n) || (await n.start({
            forceRevealReplace: !1,
            seedSearchStringFromSelection: "none",
            seedSearchStringFromNonEmptySelection: !1,
            seedSearchStringFromGlobalClipboard: !1,
            shouldFocus: 0,
            shouldAnimate: !0,
            updateSearchScope: !1,
            loop: e.getOption(43).loop
        }), this._run(n));
    }
}, IMp = class extends w3a {
    constructor(){
        super({
            id: OC.NextSelectionMatchFindAction,
            label: At(1089, "Find Next Selection"),
            precondition: void 0,
            kbOpts: {
                kbExpr: si.focus,
                primary: ut.CtrlCmd | Ze.F3,
                weight: 100
            }
        });
    }
    _run(t) {
        return t.moveToNextMatch();
    }
}, xMp = class extends w3a {
    constructor(){
        super({
            id: OC.PreviousSelectionMatchFindAction,
            label: At(1090, "Find Previous Selection"),
            precondition: void 0,
            kbOpts: {
                kbExpr: si.focus,
                primary: ut.CtrlCmd | ut.Shift | Ze.F3,
                weight: 100
            }
        });
    }
    _run(t) {
        return t.moveToPrevMatch();
    }
}, AMp = Q5d(new V7o({
    id: OC.StartFindReplaceAction,
    label: At(1091, "Replace"),
    precondition: mt.or(si.focus, mt.has("editorIsOpen")),
    kbOpts: {
        kbExpr: null,
        primary: ut.CtrlCmd | Ze.KeyH,
        mac: {
            primary: ut.CtrlCmd | ut.Alt | Ze.KeyF
        },
        weight: 100
    },
    menuOpts: {
        menuId: Ft.MenubarEditMenu,
        group: "3_find",
        title: D(1082, null),
        order: 2
    }
})), AMp.addImplementation(0, (t, e, n)=>{
    if (!e.hasModel() || e.getOption(96)) return !1;
    const i = TB.get(e);
    if (!i) return !1;
    const r = e.getSelection(), s = i.isFindInputFocused(), o = !r.isEmpty() && r.startLineNumber === r.endLineNumber && e.getOption(43).seedSearchStringFromSelection !== "never" && !s, a = s || o ? 2 : 1;
    return i.start({
        forceRevealReplace: !0,
        seedSearchStringFromSelection: o ? "single" : "none",
        seedSearchStringFromNonEmptySelection: e.getOption(43).seedSearchStringFromSelection === "selection",
        seedSearchStringFromGlobalClipboard: e.getOption(43).seedSearchStringFromSelection !== "never",
        shouldFocus: a,
        shouldAnimate: !0,
        updateSearchScope: !1,
        loop: e.getOption(43).loop
    });
}), sv(TB.ID, Z0n, 0), _l(kMp), _l(wMp), _l(CMp), _l(TMp), _l(EMp), _l(IMp), _l(xMp), H2e = Nj.bindToContribution(TB.get), Zc(new H2e({
    id: OC.CloseFindWidgetCommand,
    precondition: GGe,
    handler: (t)=>t.closeFindWidget(),
    kbOpts: {
        weight: 105,
        kbExpr: mt.and(si.focus, mt.not("isComposing")),
        primary: Ze.Escape,
        secondary: [
            ut.Shift | Ze.Escape
        ]
    }
})), Zc(new H2e({
    id: OC.ToggleCaseSensitiveCommand,
    precondition: void 0,
    handler: (t)=>t.toggleCaseSensitive(),
    kbOpts: {
        weight: 105,
        kbExpr: si.focus,
        primary: q0n.primary,
        mac: q0n.mac,
        win: q0n.win,
        linux: q0n.linux
    }
})), Zc(new H2e({
    id: OC.ToggleWholeWordCommand,
    precondition: void 0,
    handler: (t)=>t.toggleWholeWords(),
    kbOpts: {
        weight: 105,
        kbExpr: si.focus,
        primary: z0n.primary,
        mac: z0n.mac,
        win: z0n.win,
        linux: z0n.linux
    }
})), Zc(new H2e({
    id: OC.ToggleRegexCommand,
    precondition: void 0,
    handler: (t)=>t.toggleRegex(),
    kbOpts: {
        weight: 105,
        kbExpr: si.focus,
        primary: V0n.primary,
        mac: V0n.mac,
        win: V0n.win,
        linux: V0n.linux
    }
})), Zc(new H2e({
    id: OC.ToggleSearchScopeCommand,
    precondition: void 0,
    handler: (t)=>t.toggleSearchScope(),
    kbOpts: {
        weight: 105,
        kbExpr: si.focus,
        primary: nyi.primary,
        mac: nyi.mac,
        win: nyi.win,
        linux: nyi.linux
    }
})), Zc(new H2e({
    id: OC.TogglePreserveCaseCommand,
    precondition: void 0,
    handler: (t)=>t.togglePreserveCase(),
    kbOpts: {
        weight: 105,
        kbExpr: si.focus,
        primary: K0n.primary,
        mac: K0n.mac,
        win: K0n.win,
        linux: K0n.linux
    }
})), Zc(new H2e({
    id: OC.ReplaceOneAction,
    precondition: GGe,
    handler: (t)=>t.replace(),
    kbOpts: {
        weight: 105,
        kbExpr: si.focus,
        primary: ut.CtrlCmd | ut.Shift | Ze.Digit1
    }
})), Zc(new H2e({
    id: OC.ReplaceOneAction,
    precondition: GGe,
    handler: (t)=>t.replace(),
    kbOpts: {
        weight: 105,
        kbExpr: mt.and(si.focus, gWr),
        primary: Ze.Enter
    }
})), Zc(new H2e({
    id: OC.ReplaceAllAction,
    precondition: GGe,
    handler: (t)=>t.replaceAll(),
    kbOpts: {
        weight: 105,
        kbExpr: si.focus,
        primary: ut.CtrlCmd | ut.Alt | Ze.Enter
    }
})), Zc(new H2e({
    id: OC.ReplaceAllAction,
    precondition: GGe,
    handler: (t)=>t.replaceAll(),
    kbOpts: {
        weight: 105,
        kbExpr: mt.and(si.focus, gWr),
        primary: void 0,
        mac: {
            primary: ut.CtrlCmd | Ze.Enter
        }
    }
})), Zc(new H2e({
    id: OC.SelectAllMatchesAction,
    precondition: GGe,
    handler: (t)=>t.selectAllMatches(),
    kbOpts: {
        weight: 105,
        kbExpr: si.focus,
        primary: ut.Alt | Ze.Enter
    }
}));

}

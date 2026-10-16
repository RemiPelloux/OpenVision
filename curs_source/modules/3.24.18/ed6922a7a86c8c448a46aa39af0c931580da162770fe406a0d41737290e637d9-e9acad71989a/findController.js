import { d7t } from "./De_3.js";
import { Ae, He, Ps, S, Se, bt, l1, ve, we } from "./HVr.js";
import { C, Re, ei, ie } from "./actions_2.js";
import { bn, xg } from "./async.js";
import { Yp, zu } from "./clipboardService.js";
import { Lv, ka } from "./contextView.js";
import { dn, he, xn } from "./contextkey.js";
import { HV, aQr } from "./editorColorRegistry.js";
import { gd, gn } from "./editorContextKeys.js";
import { Ua, i2, tXr, yc } from "./editorExtensions.js";
import { ewu, i7t, lRn, n4e, oyt, pMe, ryt, syt, uRn, uw, z9i } from "./findModel.js";
import { _cv, twu } from "./findOptionsWidget.js";
import { Y9i, dRn } from "./findState.js";
import { n6i, wwu } from "./findWidget.js";
import { Fve, Scv } from "./findWidgetSearchHistory.js";
import { du, va } from "./hover.js";
import { Ie, Pr, fe } from "./keyCodes.js";
import { no, qr } from "./keybinding.js";
import { Cb, xE } from "./model_2.js";
import { rt } from "./nls.js";
import { di, ji, pi } from "./notification.js";
import { DMc, Pc, VS, co, pp } from "./qIc.js";
import { Gs, Ya } from "./quickInput.js";
import { Bve, kcv } from "./replaceWidgetHistory.js";
import { Vn, yn } from "./storage_2.js";
import { $r, as } from "./themeService.js";
import { x } from "./tslib.es6.js";
var Cwu, H3, h7t, cHs, Twu, Ewu, xwu, lHs, Iwu, Awu, Rwu, uHs, Dwu, Mwu, dHs, Uve;
export { Awu, Cwu, Dwu, Ewu, H3, Iwu, Mwu, Rwu, Twu, Uve, cHs, dHs, h7t, lHs, uHs, xwu };
var __wakaru_p7t_initialized = false;
export function p7t() {
if (__wakaru_p7t_initialized) return;
__wakaru_p7t_initialized = true;
"use strict";
x(), bn(), Pr(), Se(), Ps(), yc(), HV(), gd(), Cb(), n4e(), _cv(), Y9i(), n6i(), rt(), ei(), Yp(), dn(), ka(), no(), ji(), Ya(), Vn(), as(), du(), bt(), Scv(), kcv(), Cwu = 524288, H3 = class extends we {
    constructor(e, t, n, i, r, s){
        super(), this._onDidChangeState = this._register(new ve), this.onDidChangeState = this._onDidChangeState.event, this._editor = e, this._findWidgetVisible = pMe.bindTo(t), this._contextKeyService = t, this._storageService = n, this._clipboardService = i, this._notificationService = r, this._hoverService = s, this._updateHistoryDelayer = new xg(500), this._state = this._register(new dRn), this.loadQueryState(), this._register(this._state.onFindReplaceStateChange((o)=>this._onStateChanged(o))), this._model = null, this._register(this._editor.onDidChangeModel(()=>{
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
    static get(e) {
        return e.getContribution(H3.ID);
    }
    dispose() {
        this.disposeModel(), super.dispose();
    }
    disposeModel() {
        this._model && (this._model.dispose(), this._model = null);
    }
    _onStateChanged(e) {
        this.saveQueryState(e), e.isRevealed && (this._state.isRevealed ? this._findWidgetVisible.set(!0) : (this._findWidgetVisible.reset(), this.disposeModel())), e.searchString && this.setGlobalBufferTerm(this._state.searchString);
    }
    saveQueryState(e) {
        e.isRegex && this._storageService.store("editor.isRegex", this._state.actualIsRegex, 1, 1), e.wholeWord && this._storageService.store("editor.wholeWord", this._state.actualWholeWord, 1, 1), e.matchCase && this._storageService.store("editor.matchCase", this._state.actualMatchCase, 1, 1), e.preserveCase && this._storageService.store("editor.preserveCase", this._state.actualPreserveCase, 1, 1);
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
        return !!lRn.getValue(this._contextKeyService);
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
            let e = this._editor.getSelections();
            e = e.map((t)=>(t.endColumn === 1 && t.endLineNumber > t.startLineNumber && (t = t.setEndPosition(t.endLineNumber - 1, this._editor.getModel().getLineMaxColumn(t.endLineNumber - 1))), t.isEmpty() ? null : t)).filter((t)=>!!t), e.length && this._state.change({
                searchScope: e
            }, !0);
        }
    }
    setSearchString(e) {
        this._state.isRegex && (e = l1(e)), this._state.change({
            searchString: e
        }, !1);
    }
    highlightFindOptions(e = !1) {}
    async _start(e, t) {
        if (this.disposeModel(), !this._editor.hasModel()) return;
        const n = {
            ...t,
            isRevealed: !0
        };
        if (e.seedSearchStringFromSelection === "single") {
            const i = d7t(this._editor, e.seedSearchStringFromSelection, e.seedSearchStringFromNonEmptySelection);
            i && (this._state.isRegex ? n.searchString = l1(i) : n.searchString = i);
        } else if (e.seedSearchStringFromSelection === "multiple" && !e.updateSearchScope) {
            const i = d7t(this._editor, e.seedSearchStringFromSelection);
            i && (n.searchString = i);
        }
        if (!n.searchString && e.seedSearchStringFromGlobalClipboard) {
            const i = await this.getGlobalBufferTerm();
            if (!this._editor.hasModel()) return;
            i && (n.searchString = i);
        }
        if (e.forceRevealReplace || n.isReplaceRevealed ? n.isReplaceRevealed = !0 : this._findWidgetVisible.get() || (n.isReplaceRevealed = !1), e.updateSearchScope) {
            const i = this._editor.getSelections();
            i.some((r)=>!r.isEmpty()) && (n.searchScope = i);
        }
        n.loop = e.loop, this._state.change(n, !1), this._model || (this._model = new ewu(this._editor, this._state));
    }
    start(e, t) {
        return this._start(e, t);
    }
    moveToNextMatch() {
        return this._model ? (this._model.moveToNextMatch(), !0) : !1;
    }
    moveToPrevMatch() {
        return this._model ? (this._model.moveToPrevMatch(), !0) : !1;
    }
    goToMatch(e) {
        return this._model ? (this._model.moveToMatch(e), !0) : !1;
    }
    replace() {
        return this._model ? (this._model.replace(), !0) : !1;
    }
    replaceAll() {
        return this._model ? this._editor.getModel()?.isTooLargeForHeapOperation() ? (this._notificationService.warn(S(1076, null)), !1) : (this._model.replaceAll(), !0) : !1;
    }
    selectAllMatches() {
        return this._model ? (this._model.selectAllMatches(), this._editor.focus(), !0) : !1;
    }
    async getGlobalBufferTerm() {
        return this._editor.getOption(43).globalFindClipboard && this._editor.hasModel() && !this._editor.getModel().isTooLargeForSyncing() ? this._clipboardService.readFindText() : "";
    }
    setGlobalBufferTerm(e) {
        this._editor.getOption(43).globalFindClipboard && this._editor.hasModel() && !this._editor.getModel().isTooLargeForSyncing() && this._clipboardService.writeFindText(e);
    }
}, H3.ID = "editor.contrib.findController", H3 = ie([
    C(1, xn),
    C(2, yn),
    C(3, zu),
    C(4, di),
    C(5, va)
], H3), h7t = class extends H3 {
    constructor(e, t, n, i, r, s, o, a, c){
        super(e, n, o, a, s, c), this._contextViewService = t, this._keybindingService = i, this._themeService = r, this._onWidgetHeightChanged = this._register(new ve), this.onWidgetHeightChanged = this._onWidgetHeightChanged.event, this._widget = null, this._findOptionsWidget = null, this._findWidgetSearchHistory = Fve.getOrCreate(o), this._replaceWidgetHistory = Bve.getOrCreate(o);
    }
    async _start(e, t) {
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
        e.updateSearchScope = e.updateSearchScope || i, await super._start(e, t), this._widget && (e.shouldFocus === 2 ? this._widget.focusReplaceInput() : e.shouldFocus === 1 && this._widget.focusFindInput());
    }
    focusFindInputWithoutSelecting() {
        this._widget?.focusFindInputWithoutSelecting();
    }
    isActive() {
        return this._widget?.isActive() ?? !1;
    }
    highlightFindOptions(e = !1) {
        this._widget || this._createFindWidget(), this._state.isRevealed && !e ? this._widget.highlightFindOptions() : this._findOptionsWidget.highlightFindOptions();
    }
    _createFindWidget() {
        this._widget = this._register(new wwu(this._editor, this, this._state, this._contextViewService, this._keybindingService, this._contextKeyService, this._themeService, this._storageService, this._notificationService, this._hoverService, this._findWidgetSearchHistory, this._replaceWidgetHistory)), this._register(this._widget.onDidChangeHeight((e)=>this._onWidgetHeightChanged.fire(e))), this._findOptionsWidget = this._register(new twu(this._editor, this._state, this._keybindingService));
    }
    saveViewState() {
        return this._widget?.getViewState();
    }
    restoreViewState(e) {
        this._widget?.setViewState(e);
    }
}, h7t = ie([
    C(1, Lv),
    C(2, xn),
    C(3, qr),
    C(4, $r),
    C(5, di),
    C(6, yn),
    C(7, zu),
    C(8, va)
], h7t), cHs = DMc(new tXr({
    id: uw.StartFindAction,
    label: Ae(1083, "Find"),
    precondition: he.or(gn.focus, he.has("editorIsOpen"), he.has("activeEditorIsReviewChanges")),
    kbOpts: {
        kbExpr: he.or(gn.focus, he.has("activeEditorIsReviewChanges")),
        primary: Ie.CtrlCmd | fe.KeyF,
        weight: 100
    },
    menuOpts: {
        menuId: Re.MenubarEditMenu,
        group: "3_find",
        title: S(1077, null),
        order: 1
    }
})), cHs.addImplementation(0, (e, t, n)=>{
    const i = H3.get(t);
    return i ? i.start({
        forceRevealReplace: !1,
        seedSearchStringFromSelection: t.getOption(43).seedSearchStringFromSelection !== "never" ? "single" : "none",
        seedSearchStringFromNonEmptySelection: t.getOption(43).seedSearchStringFromSelection === "selection",
        seedSearchStringFromGlobalClipboard: t.getOption(43).globalFindClipboard,
        shouldFocus: 1,
        shouldAnimate: !0,
        updateSearchScope: !1,
        loop: t.getOption(43).loop
    }) : !1;
}), Twu = {
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
}, Ewu = class extends Ua {
    constructor(){
        super({
            id: uw.StartFindWithArgs,
            label: Ae(1084, "Find with Arguments"),
            precondition: void 0,
            kbOpts: {
                kbExpr: null,
                primary: 0,
                weight: 100
            },
            metadata: Twu
        });
    }
    async run(e, t, n) {
        const i = H3.get(t);
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
                seedSearchStringFromSelection: i.getState().searchString.length === 0 && t.getOption(43).seedSearchStringFromSelection !== "never" ? "single" : "none",
                seedSearchStringFromNonEmptySelection: t.getOption(43).seedSearchStringFromSelection === "selection",
                seedSearchStringFromGlobalClipboard: !0,
                shouldFocus: 1,
                shouldAnimate: !0,
                updateSearchScope: n?.findInSelection || !1,
                loop: t.getOption(43).loop
            }, r), i.setGlobalBufferTerm(i.getState().searchString);
        }
    }
}, xwu = class extends Ua {
    constructor(){
        super({
            id: uw.StartFindWithSelection,
            label: Ae(1085, "Find with Selection"),
            precondition: void 0,
            kbOpts: {
                kbExpr: null,
                primary: 0,
                mac: {
                    primary: Ie.CtrlCmd | fe.KeyE
                },
                weight: 100
            }
        });
    }
    async run(e, t) {
        const n = H3.get(t);
        n && (await n.start({
            forceRevealReplace: !1,
            seedSearchStringFromSelection: "multiple",
            seedSearchStringFromNonEmptySelection: !1,
            seedSearchStringFromGlobalClipboard: !1,
            shouldFocus: 0,
            shouldAnimate: !0,
            updateSearchScope: !1,
            loop: t.getOption(43).loop
        }), n.setGlobalBufferTerm(n.getState().searchString));
    }
}, lHs = class extends Ua {
    async run(e, t) {
        const n = H3.get(t);
        n && !this._run(n) && (await n.start({
            forceRevealReplace: !1,
            seedSearchStringFromSelection: n.getState().searchString.length === 0 && t.getOption(43).seedSearchStringFromSelection !== "never" ? "single" : "none",
            seedSearchStringFromNonEmptySelection: t.getOption(43).seedSearchStringFromSelection === "selection",
            seedSearchStringFromGlobalClipboard: !0,
            shouldFocus: 0,
            shouldAnimate: !0,
            updateSearchScope: !1,
            loop: t.getOption(43).loop
        }), this._run(n));
    }
}, Iwu = class extends lHs {
    constructor(){
        super({
            id: uw.NextMatchFindAction,
            label: Ae(1086, "Find Next"),
            precondition: void 0,
            kbOpts: [
                {
                    kbExpr: he.or(gn.focus, he.has("activeEditorIsReviewChanges")),
                    primary: fe.F3,
                    mac: {
                        primary: Ie.CtrlCmd | fe.KeyG,
                        secondary: [
                            fe.F3
                        ]
                    },
                    weight: 100
                },
                {
                    kbExpr: he.and(gn.focus, lRn),
                    primary: fe.Enter,
                    weight: 100
                }
            ]
        });
    }
    _run(e) {
        return e.moveToNextMatch() ? (e.editor.pushUndoStop(), !0) : !1;
    }
}, Awu = class extends lHs {
    constructor(){
        super({
            id: uw.PreviousMatchFindAction,
            label: Ae(1087, "Find Previous"),
            precondition: void 0,
            kbOpts: [
                {
                    kbExpr: he.or(gn.focus, he.has("activeEditorIsReviewChanges")),
                    primary: Ie.Shift | fe.F3,
                    mac: {
                        primary: Ie.CtrlCmd | Ie.Shift | fe.KeyG,
                        secondary: [
                            Ie.Shift | fe.F3
                        ]
                    },
                    weight: 100
                },
                {
                    kbExpr: he.and(gn.focus, lRn),
                    primary: Ie.Shift | fe.Enter,
                    weight: 100
                }
            ]
        });
    }
    _run(e) {
        return e.moveToPrevMatch();
    }
}, Rwu = class extends Ua {
    constructor(){
        super({
            id: uw.GoToMatchFindAction,
            label: Ae(1088, "Go to Match..."),
            precondition: pMe
        }), this._highlightDecorations = [];
    }
    run(e, t, n) {
        const i = H3.get(t);
        if (!i) return;
        const r = i.getState().matchesCount;
        if (r < 1) {
            e.get(di).notify({
                severity: pi.Warning,
                message: S(1078, null)
            });
            return;
        }
        const s = e.get(Gs), o = new He, a = o.add(s.createInputBox());
        a.placeholder = S(1079, null, r);
        const c = (u)=>{
            const h = parseInt(u);
            if (isNaN(h)) return;
            const p = i.getState().matchesCount;
            if (h > 0 && h <= p) return h - 1;
            if (h < 0 && h >= -p) return p + h;
        }, l = (u)=>{
            const h = c(u);
            if (typeof h == "number") {
                a.validationMessage = void 0, i.goToMatch(h);
                const p = i.getState().currentMatch;
                p && this.addDecorations(t, p);
            } else a.validationMessage = S(1080, null, i.getState().matchesCount), this.clearDecorations(t);
        };
        o.add(a.onDidChangeValue((u)=>{
            l(u);
        })), o.add(a.onDidAccept(()=>{
            const u = c(a.value);
            typeof u == "number" ? (i.goToMatch(u), a.hide()) : a.validationMessage = S(1081, null, i.getState().matchesCount);
        })), o.add(a.onDidHide(()=>{
            this.clearDecorations(t), o.dispose();
        })), a.show();
    }
    clearDecorations(e) {
        e.changeDecorations((t)=>{
            this._highlightDecorations = t.deltaDecorations(this._highlightDecorations, []);
        });
    }
    addDecorations(e, t) {
        e.changeDecorations((n)=>{
            this._highlightDecorations = n.deltaDecorations(this._highlightDecorations, [
                {
                    range: t,
                    options: {
                        description: "find-match-quick-access-range-highlight",
                        className: "rangeHighlight",
                        isWholeLine: !0
                    }
                },
                {
                    range: t,
                    options: {
                        description: "find-match-quick-access-range-highlight-overview",
                        overviewRuler: {
                            color: VS(aQr),
                            position: xE.Full
                        }
                    }
                }
            ]);
        });
    }
}, uHs = class extends Ua {
    async run(e, t) {
        const n = H3.get(t);
        if (!n) return;
        const i = d7t(t, "single", !1);
        i && n.setSearchString(i), this._run(n) || (await n.start({
            forceRevealReplace: !1,
            seedSearchStringFromSelection: "none",
            seedSearchStringFromNonEmptySelection: !1,
            seedSearchStringFromGlobalClipboard: !1,
            shouldFocus: 0,
            shouldAnimate: !0,
            updateSearchScope: !1,
            loop: t.getOption(43).loop
        }), this._run(n));
    }
}, Dwu = class extends uHs {
    constructor(){
        super({
            id: uw.NextSelectionMatchFindAction,
            label: Ae(1089, "Find Next Selection"),
            precondition: void 0,
            kbOpts: {
                kbExpr: gn.focus,
                primary: Ie.CtrlCmd | fe.F3,
                weight: 100
            }
        });
    }
    _run(e) {
        return e.moveToNextMatch();
    }
}, Mwu = class extends uHs {
    constructor(){
        super({
            id: uw.PreviousSelectionMatchFindAction,
            label: Ae(1090, "Find Previous Selection"),
            precondition: void 0,
            kbOpts: {
                kbExpr: gn.focus,
                primary: Ie.CtrlCmd | Ie.Shift | fe.F3,
                weight: 100
            }
        });
    }
    _run(e) {
        return e.moveToPrevMatch();
    }
}, dHs = DMc(new tXr({
    id: uw.StartFindReplaceAction,
    label: Ae(1091, "Replace"),
    precondition: he.or(gn.focus, he.has("editorIsOpen")),
    kbOpts: {
        kbExpr: null,
        primary: Ie.CtrlCmd | fe.KeyH,
        mac: {
            primary: Ie.CtrlCmd | Ie.Alt | fe.KeyF
        },
        weight: 100
    },
    menuOpts: {
        menuId: Re.MenubarEditMenu,
        group: "3_find",
        title: S(1082, null),
        order: 2
    }
})), dHs.addImplementation(0, (e, t, n)=>{
    if (!t.hasModel() || t.getOption(96)) return !1;
    const i = H3.get(t);
    if (!i) return !1;
    const r = t.getSelection(), s = i.isFindInputFocused(), o = !r.isEmpty() && r.startLineNumber === r.endLineNumber && t.getOption(43).seedSearchStringFromSelection !== "never" && !s, a = s || o ? 2 : 1;
    return i.start({
        forceRevealReplace: !0,
        seedSearchStringFromSelection: o ? "single" : "none",
        seedSearchStringFromNonEmptySelection: t.getOption(43).seedSearchStringFromSelection === "selection",
        seedSearchStringFromGlobalClipboard: t.getOption(43).seedSearchStringFromSelection !== "never",
        shouldFocus: a,
        shouldAnimate: !0,
        updateSearchScope: !1,
        loop: t.getOption(43).loop
    });
}), pp(H3.ID, h7t, 0), co(Ewu), co(xwu), co(Iwu), co(Awu), co(Rwu), co(Dwu), co(Mwu), Uve = i2.bindToContribution(H3.get), Pc(new Uve({
    id: uw.CloseFindWidgetCommand,
    precondition: pMe,
    handler: (e)=>e.closeFindWidget(),
    kbOpts: {
        weight: 105,
        kbExpr: he.and(gn.focus, he.not("isComposing")),
        primary: fe.Escape,
        secondary: [
            Ie.Shift | fe.Escape
        ]
    }
})), Pc(new Uve({
    id: uw.ToggleCaseSensitiveCommand,
    precondition: void 0,
    handler: (e)=>e.toggleCaseSensitive(),
    kbOpts: {
        weight: 105,
        kbExpr: gn.focus,
        primary: ryt.primary,
        mac: ryt.mac,
        win: ryt.win,
        linux: ryt.linux
    }
})), Pc(new Uve({
    id: uw.ToggleWholeWordCommand,
    precondition: void 0,
    handler: (e)=>e.toggleWholeWords(),
    kbOpts: {
        weight: 105,
        kbExpr: gn.focus,
        primary: syt.primary,
        mac: syt.mac,
        win: syt.win,
        linux: syt.linux
    }
})), Pc(new Uve({
    id: uw.ToggleRegexCommand,
    precondition: void 0,
    handler: (e)=>e.toggleRegex(),
    kbOpts: {
        weight: 105,
        kbExpr: gn.focus,
        primary: oyt.primary,
        mac: oyt.mac,
        win: oyt.win,
        linux: oyt.linux
    }
})), Pc(new Uve({
    id: uw.ToggleSearchScopeCommand,
    precondition: void 0,
    handler: (e)=>e.toggleSearchScope(),
    kbOpts: {
        weight: 105,
        kbExpr: gn.focus,
        primary: uRn.primary,
        mac: uRn.mac,
        win: uRn.win,
        linux: uRn.linux
    }
})), Pc(new Uve({
    id: uw.TogglePreserveCaseCommand,
    precondition: void 0,
    handler: (e)=>e.togglePreserveCase(),
    kbOpts: {
        weight: 105,
        kbExpr: gn.focus,
        primary: i7t.primary,
        mac: i7t.mac,
        win: i7t.win,
        linux: i7t.linux
    }
})), Pc(new Uve({
    id: uw.ReplaceOneAction,
    precondition: pMe,
    handler: (e)=>e.replace(),
    kbOpts: {
        weight: 105,
        kbExpr: gn.focus,
        primary: Ie.CtrlCmd | Ie.Shift | fe.Digit1
    }
})), Pc(new Uve({
    id: uw.ReplaceOneAction,
    precondition: pMe,
    handler: (e)=>e.replace(),
    kbOpts: {
        weight: 105,
        kbExpr: he.and(gn.focus, z9i),
        primary: fe.Enter
    }
})), Pc(new Uve({
    id: uw.ReplaceAllAction,
    precondition: pMe,
    handler: (e)=>e.replaceAll(),
    kbOpts: {
        weight: 105,
        kbExpr: gn.focus,
        primary: Ie.CtrlCmd | Ie.Alt | fe.Enter
    }
})), Pc(new Uve({
    id: uw.ReplaceAllAction,
    precondition: pMe,
    handler: (e)=>e.replaceAll(),
    kbOpts: {
        weight: 105,
        kbExpr: he.and(gn.focus, z9i),
        primary: void 0,
        mac: {
            primary: Ie.CtrlCmd | fe.Enter
        }
    }
})), Pc(new Uve({
    id: uw.SelectAllMatchesAction,
    precondition: pMe,
    handler: (e)=>e.selectAllMatches(),
    kbOpts: {
        weight: 105,
        kbExpr: gn.focus,
        primary: Ie.Alt | fe.Enter
    }
}));

}

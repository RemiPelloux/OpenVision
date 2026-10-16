import { At, CC, D, Di, Ei, Gt, Kv, Nc, Nt, Pn, Qe, Vn, _r, en, tt, uP, wf, xr } from "./Iwo.js";
import { $3 } from "./aria.js";
import { bo } from "./arrays.js";
import { El, yo } from "./cancellation.js";
import { hs, nr, rs } from "./commands.js";
import { Hi, Rr, mt } from "./contextkey.js";
import { Hn, Rbt, ws } from "./dom_2.js";
import { Oj, Tk } from "./editOperation.js";
import { cg, si } from "./editorContextKeys.js";
import { Nj, Ud, xu } from "./editorExtensions.js";
import { It, dn } from "./instantiation.js";
import { Ma, Ze, ut } from "./keyCodes.js";
import { Jse, Qke } from "./keybindings.js";
import { Ji, Li } from "./log.js";
import { Bt } from "./nls.js";
import { er, jc } from "./position.js";
import { Qs, qt } from "./range.js";
import { el, sa } from "./reactiveStorageServiceTypes.js";
import { Lx, q0e } from "./snippetController2.js";
import { A5e, Cwe } from "./snippetParser.js";
import { Ufn, tnt } from "./stableEditorScroll.js";
import { D3, Xw } from "./stopwatch.js";
import { Cst, Qv, Tst } from "./suggest.js";
import { P6e, bx1 } from "./suggestAlternatives.js";
import { uDp, yx1 } from "./suggestCommitCharacters.js";
import { cDp, kyi } from "./suggestMemory.js";
import { mDp, rCn } from "./suggestModel.js";
import { gDp, wx1 } from "./suggestOvertypingCapturer.js";
import { TDp, zGe } from "./suggestWidget.js";
import { Uv, Xv } from "./telemetry.js";
import { Kg, PC } from "./textModel.js";
import { E } from "./tslib.es6.js";
import { To } from "./types_2.js";
import { F, Re } from "./userDataProfile.js";
import { VHt, _x1 } from "./wordContextKey.js";
import { Dj, Zc, _l, sv } from "./ze.js";
var EDp, FWr, IDp, oX, xDp, lNa, BWr, npe, pJ;
export { BWr, EDp, FWr, IDp, lNa, npe, oX, pJ, xDp };
var __wakaru_KHt_initialized = false;
export function KHt() {
if (__wakaru_KHt_initialized) return;
__wakaru_KHt_initialized = true;
"use strict";
E(), $3(), bo(), yo(), Ei(), Gt(), Ma(), Qke(), Qe(), Di(), D3(), To(), Ufn(), Ud(), Oj(), jc(), Qs(), cg(), q0e(), A5e(), cDp(), _x1(), Bt(), rs(), Hi(), It(), Ji(), Tst(), bx1(), yx1(), mDp(), wx1(), TDp(), Xv(), Hn(), PC(), el(), EDp = !1, FWr = si.textInputFocus, IDp = class {
    constructor(t, e){
        if (this._model = t, this._position = e, this._decorationOptions = Kg.register({
            description: "suggest-line-suffix",
            stickiness: 1
        }), t.getLineMaxColumn(e.lineNumber) !== e.column) {
            const i = t.getOffsetAt(e), r = t.getPositionAt(i + 1);
            t.changeDecorations((s)=>{
                this._marker && s.removeDecoration(this._marker), this._marker = s.addDecoration(qt.fromPositions(e, r), this._decorationOptions);
            });
        }
    }
    dispose() {
        this._marker && !this._model.isDisposed() && this._model.changeDecorations((t)=>{
            t.removeDecoration(this._marker), this._marker = void 0;
        });
    }
    delta(t) {
        if (this._model.isDisposed() || this._position.lineNumber !== t.lineNumber) return 0;
        if (this._marker) {
            const e = this._model.getDecorationRange(this._marker);
            return this._model.getOffsetAt(e.getStartPosition()) - this._model.getOffsetAt(t);
        } else return this._model.getLineMaxColumn(t.lineNumber) - t.column;
    }
}, oX = class {
    constructor(t, e, n, i, r, s, o, a){
        this._memoryService = e, this._commandService = n, this._contextKeyService = i, this._instantiationService = r, this._logService = s, this._reactiveStorageService = o, this._telemetryService = a, this._lineSuffix = new Vn, this._toDispose = new Nt, this._selectors = new xDp((d)=>d.priority), this._onWillInsertSuggestItem = new tt, this.onWillInsertSuggestItem = this._onWillInsertSuggestItem.event, this._onFireCommand = new tt, this.onFireCommand = this._onFireCommand.event, this.editor = t, this.model = r.createInstance(rCn, this.editor), this._selectors.register({
            priority: 0,
            select: (d, h, p)=>this._memoryService.select(d, h, p)
        });
        const l = Qv.InsertMode.bindTo(i);
        l.set(t.getOption(123).insertMode), this._toDispose.add(this.model.onDidTrigger(()=>l.set(t.getOption(123).insertMode))), this.widget = this._toDispose.add(new Rbt(ws(t.getDomNode()), ()=>{
            const d = this._instantiationService.createInstance(zGe, this.editor);
            this._toDispose.add(d), this._toDispose.add(d.onDidSelect((_)=>this._insertSuggestion(_, 0), this));
            const h = new uDp(this.editor, this._reactiveStorageService, d, this.model, (_)=>this._insertSuggestion(_, 2));
            this._toDispose.add(h);
            const p = Qv.MakesTextEdit.bindTo(this._contextKeyService), g = Qv.HasInsertAndReplaceRange.bindTo(this._contextKeyService), f = Qv.CanResolve.bindTo(this._contextKeyService);
            return this._toDispose.add(Pn(()=>{
                p.reset(), g.reset(), f.reset();
            })), this._toDispose.add(d.onDidFocus(({ item: _ })=>{
                const b = this.editor.getPosition(), y = _.editStart.column, S = b.column;
                let k = !0;
                this.editor.getOption(1) === "smart" && this.model.state === 2 && !_.completion.additionalTextEdits && !(_.completion.insertTextRules & 4) && S - y === _.completion.insertText.length && (k = this.editor.getModel().getValueInRange({
                    startLineNumber: b.lineNumber,
                    startColumn: y,
                    endLineNumber: b.lineNumber,
                    endColumn: S
                }) !== _.completion.insertText), p.set(k), g.set(!er.equals(_.editInsertEnd, _.editReplaceEnd)), f.set(!!_.provider.resolveCompletionItem || !!_.completion.documentation || _.completion.detail !== _.completion.label);
            })), this._toDispose.add(d.onDetailsKeyDown((_)=>{
                if (_.toKeyCodeChord().equals(new Jse(!0, !1, !1, !1, Ze.KeyC)) || _r && _.toKeyCodeChord().equals(new Jse(!1, !1, !1, !0, Ze.KeyC))) {
                    _.stopPropagation();
                    return;
                }
                _.toKeyCodeChord().isModifierKey() || this.editor.focus();
            })), d;
        })), this._overtypingCapturer = this._toDispose.add(new Rbt(ws(t.getDomNode()), ()=>this._toDispose.add(new gDp(this.editor, this.model)))), this._alternatives = this._toDispose.add(new Rbt(ws(t.getDomNode()), ()=>this._toDispose.add(new P6e(this.editor, this._contextKeyService)))), this._toDispose.add(r.createInstance(VHt, t)), this._toDispose.add(this.model.onDidTrigger((d)=>{
            this.widget.value.showTriggered(d.auto, d.shy ? 250 : 50), this._lineSuffix.value = new IDp(this.editor.getModel(), d.position);
        })), this._toDispose.add(this.model.onDidSuggest((d)=>{
            if (d.triggerOptions.shy) return;
            let h = -1;
            for (const g of this._selectors.itemsOrderedByPriorityDesc)if (h = g.select(this.editor.getModel(), this.editor.getPosition(), d.completionModel.items), h !== -1) break;
            if (h === -1 && (h = 0), this.model.state === 0) return;
            let p = !1;
            if (d.triggerOptions.auto) {
                const g = this.editor.getOption(123);
                g.selectionMode === "never" || g.selectionMode === "always" ? p = g.selectionMode === "never" : g.selectionMode === "whenTriggerCharacter" ? p = d.triggerOptions.triggerKind !== 1 : g.selectionMode === "whenQuickSuggestion" && (p = d.triggerOptions.triggerKind === 1 && !d.triggerOptions.refilter);
            }
            this.widget.value.showSuggestions(d.completionModel, h, d.isFrozen, d.triggerOptions.auto, p);
        })), this._toDispose.add(this.model.onDidCancel((d)=>{
            this._lineSuffix.clear(), d.retrigger || this.widget.value.hideWidget();
        })), this._toDispose.add(this.editor.onDidBlurEditorWidget(()=>{
            EDp || (this.model.cancel(), this.model.clear());
        }));
        const c = Qv.AcceptSuggestionsOnEnter.bindTo(i), u = ()=>{
            const d = this.editor.getOption(1);
            c.set(d === "on" || d === "smart");
        };
        this._toDispose.add(this.editor.onDidChangeConfiguration(()=>u())), u();
    }
    static get(t) {
        return t.getContribution(oX.ID);
    }
    dispose() {
        this._alternatives.dispose(), this._toDispose.dispose(), this.widget.dispose(), this.model.dispose(), this._lineSuffix.dispose(), this._onWillInsertSuggestItem.dispose();
    }
    _insertSuggestion(t, e) {
        if (!t || !t.item) {
            this._alternatives.value.reset(), this.model.cancel(), this.model.clear();
            return;
        }
        if (!this.editor.hasModel()) return;
        const n = Lx.get(this.editor);
        if (!n) return;
        this._onWillInsertSuggestItem.fire({
            item: t.item
        });
        const i = this.editor.getModel(), r = i.getAlternativeVersionId(), { item: s } = t, o = [], a = new El;
        e & 1 || this.editor.pushUndoStop();
        const l = this.getOverwriteInfo(s, !!(e & 8));
        this._memoryService.memorize(i, this.editor.getPosition(), s);
        const c = s.isResolved;
        let u = -1, d = -1;
        if (Array.isArray(s.completion.additionalTextEdits)) {
            this.model.cancel();
            const p = tnt.capture(this.editor);
            this.editor.executeEdits("suggestController.additionalTextEdits.sync", s.completion.additionalTextEdits.map((g)=>{
                let f = qt.lift(g.range);
                if (f.startLineNumber === s.position.lineNumber && f.startColumn > s.position.column) {
                    const _ = this.editor.getPosition().column - s.position.column, b = _, y = qt.spansMultipleLines(f) ? 0 : _;
                    f = new qt(f.startLineNumber, f.startColumn + b, f.endLineNumber, f.endColumn + y);
                }
                return Tk.replaceMove(f, g.text);
            })), p.restoreRelativeVerticalPositionOfCursor(this.editor);
        } else if (!c) {
            const p = new Xw;
            let g;
            const f = i.onDidChangeContent((S)=>{
                if (S.isFlush) {
                    a.cancel(), f.dispose();
                    return;
                }
                for (const k of S.changes){
                    const C = qt.getEndPosition(k.range);
                    (!g || er.isBefore(C, g)) && (g = C);
                }
            }), _ = e;
            e |= 2;
            let b = !1;
            const y = this.editor.onWillType(()=>{
                y.dispose(), b = !0, _ & 2 || this.editor.pushUndoStop();
            });
            o.push(s.resolve(a.token).then(()=>{
                if (!s.completion.additionalTextEdits || a.token.isCancellationRequested) return;
                if (g && s.completion.additionalTextEdits.some((k)=>er.isBefore(g, qt.getStartPosition(k.range)))) return !1;
                b && this.editor.pushUndoStop();
                const S = tnt.capture(this.editor);
                return this.editor.executeEdits("suggestController.additionalTextEdits.async", s.completion.additionalTextEdits.map((k)=>Tk.replaceMove(qt.lift(k.range), k.text))), S.restoreRelativeVerticalPositionOfCursor(this.editor), (b || !(_ & 2)) && this.editor.pushUndoStop(), !0;
            }).then((S)=>{
                this._logService.trace("[suggest] async resolving of edits DONE (ms, applied?)", p.elapsed(), S), d = S === !0 ? 1 : S === !1 ? 0 : -2;
            }).finally(()=>{
                f.dispose(), y.dispose();
            }));
        }
        let { insertText: h } = s.completion;
        if (s.completion.insertTextRules & 4 || (h = Cwe.escape(h)), this.model.cancel(), n.insert(h, {
            overwriteBefore: l.overwriteBefore,
            overwriteAfter: l.overwriteAfter,
            undoStopBefore: !1,
            undoStopAfter: !1,
            adjustWhitespace: !(s.completion.insertTextRules & 1),
            clipboardText: t.model.clipboardText,
            overtypingCapturer: this._overtypingCapturer.value
        }), e & 2 || this.editor.pushUndoStop(), s.completion.command) if (s.completion.command.id === BWr.id) this.model.trigger({
            auto: !0,
            retrigger: !0
        });
        else {
            this._onFireCommand.fire(s.completion.command);
            const p = new Xw;
            o.push(this._commandService.executeCommand(s.completion.command.id, ...s.completion.command.arguments ? [
                ...s.completion.command.arguments
            ] : []).catch((g)=>{
                s.completion.extensionId ? uP(g) : xr(g);
            }).finally(()=>{
                u = p.elapsed();
            }));
        }
        e & 4 && this._alternatives.value.set(t, (p)=>{
            for(a.cancel(); i.canUndo();){
                r !== i.getAlternativeVersionId() && i.undo(), this._insertSuggestion(p, 3 | (e & 8 ? 8 : 0));
                break;
            }
        }), this._alertCompletionItem(s), Promise.all(o).finally(()=>{
            this.model.clear(), a.dispose();
        });
    }
    getOverwriteInfo(t, e) {
        Kv(this.editor.hasModel());
        let n = this.editor.getOption(123).insertMode === "replace";
        e && (n = !n);
        const i = t.position.column - t.editStart.column, r = (n ? t.editReplaceEnd.column : t.editInsertEnd.column) - t.position.column, s = this.editor.getPosition().column - t.position.column, o = this._lineSuffix.value ? this._lineSuffix.value.delta(this.editor.getPosition()) : 0;
        return {
            overwriteBefore: i + s,
            overwriteAfter: r + o
        };
    }
    _alertCompletionItem(t) {
        if (CC(t.completion.additionalTextEdits)) {
            const e = D(1597, null, t.textLabel, t.completion.additionalTextEdits.length);
            Dj(e);
        }
    }
    triggerSuggest(t, e, n) {
        this.editor.hasModel() && (this.model.trigger({
            auto: e ?? !1,
            completionOptions: {
                providerFilter: t,
                kindFilter: n ? new Set : void 0
            }
        }), this.editor.revealPosition(this.editor.getPosition(), 0), this.editor.focus());
    }
    triggerSuggestAndAcceptBest(t) {
        if (!this.editor.hasModel()) return;
        const e = this.editor.getPosition(), n = ()=>{
            e.equals(this.editor.getPosition()) && this._commandService.executeCommand(t.fallback);
        }, i = (r)=>{
            if (r.completion.insertTextRules & 4 || r.completion.additionalTextEdits) return !0;
            const s = this.editor.getPosition(), o = r.editStart.column, a = s.column;
            return a - o !== r.completion.insertText.length ? !0 : this.editor.getModel().getValueInRange({
                startLineNumber: s.lineNumber,
                startColumn: o,
                endLineNumber: s.lineNumber,
                endColumn: a
            }) !== r.completion.insertText;
        };
        en.once(this.model.onDidTrigger)((r)=>{
            const s = [];
            en.any(this.model.onDidTrigger, this.model.onDidCancel)(()=>{
                Nc(s), n();
            }, void 0, s), this.model.onDidSuggest(({ completionModel: o })=>{
                if (Nc(s), o.items.length === 0) {
                    n();
                    return;
                }
                const a = this._memoryService.select(this.editor.getModel(), this.editor.getPosition(), o.items), l = o.items[a];
                if (!i(l)) {
                    n();
                    return;
                }
                this.editor.pushUndoStop(), this._insertSuggestion({
                    index: a,
                    item: l,
                    model: o
                }, 7);
            }, void 0, s);
        }), this.model.trigger({
            auto: !1,
            shy: !0
        }), this.editor.revealPosition(e, 0), this.editor.focus();
    }
    acceptSelectedSuggestion(t, e) {
        const n = this.widget.value.getFocusedItem();
        let i = 0;
        t && (i |= 4), e && (i |= 8), this._insertSuggestion(n, i);
    }
    acceptNextSuggestion() {
        this._alternatives.value.next();
    }
    acceptPrevSuggestion() {
        this._alternatives.value.prev();
    }
    cancelSuggestWidget() {
        this.model.cancel(), this.model.clear(), this.widget.value.hideWidget();
    }
    focusSuggestion() {
        this.widget.value.focusSelected();
    }
    selectNextSuggestion() {
        this.widget.value.selectNext();
    }
    selectNextPageSuggestion() {
        this.widget.value.selectNextPage();
    }
    selectLastSuggestion() {
        this.widget.value.selectLast();
    }
    selectPrevSuggestion() {
        this.widget.value.selectPrevious();
    }
    selectPrevPageSuggestion() {
        this.widget.value.selectPreviousPage();
    }
    selectFirstSuggestion() {
        this.widget.value.selectFirst();
    }
    toggleSuggestionDetails() {
        this.widget.value.toggleDetails();
    }
    toggleExplainMode() {
        this.widget.value.toggleExplainMode();
    }
    toggleSuggestionFocus() {
        this.widget.value.toggleDetailsFocus();
    }
    resetWidgetSize() {
        this.widget.value.resetPersistedSize();
    }
    forceRenderingAbove() {
        this.widget.value.forceRenderingAbove();
    }
    stopForceRenderingAbove() {
        this.widget.isInitialized && this.widget.value.stopForceRenderingAbove();
    }
    registerSelector(t) {
        return this._selectors.register(t);
    }
}, oX.ID = "editor.contrib.suggestController", oX = Re([
    F(1, kyi),
    F(2, nr),
    F(3, Rr),
    F(4, dn),
    F(5, Li),
    F(6, sa),
    F(7, Uv)
], oX), xDp = class {
    constructor(t){
        this.prioritySelector = t, this._items = new Array;
    }
    register(t) {
        if (this._items.indexOf(t) !== -1) throw new Error("Value is already registered");
        return this._items.push(t), this._items.sort((e, n)=>this.prioritySelector(n) - this.prioritySelector(e)), {
            dispose: ()=>{
                const e = this._items.indexOf(t);
                e >= 0 && this._items.splice(e, 1);
            }
        };
    }
    get itemsOrderedByPriorityDesc() {
        return this._items;
    }
}, lNa = class F2b extends xu {
    constructor(){
        super({
            id: F2b.id,
            label: At(1605, "Trigger Suggest"),
            precondition: mt.and(si.writable, si.hasCompletionItemProvider, Qv.Visible.toNegated()),
            kbOpts: {
                kbExpr: FWr,
                primary: ut.CtrlCmd | Ze.Space,
                secondary: [
                    ut.CtrlCmd | Ze.KeyI
                ],
                mac: {
                    primary: ut.WinCtrl | Ze.Space,
                    secondary: [
                        ut.Alt | Ze.Escape,
                        ut.CtrlCmd | Ze.KeyI
                    ]
                },
                weight: 100
            }
        });
    }
    run(e, n, i) {
        const r = oX.get(n);
        if (!r) return;
        let s;
        i && typeof i == "object" && i.auto === !0 && (s = !0), r.triggerSuggest(void 0, s, void 0);
    }
}, lNa.id = "editor.action.triggerSuggest", BWr = lNa, sv(oX.ID, oX, 2), _l(BWr), npe = 190, pJ = Nj.bindToContribution(oX.get), Zc(new pJ({
    id: "acceptSelectedSuggestion",
    precondition: mt.and(Qv.Visible, Qv.HasFocusedSuggestion),
    handler (t) {
        t.acceptSelectedSuggestion(!0, !1);
    },
    kbOpts: [
        {
            primary: Ze.Tab,
            kbExpr: mt.and(Qv.Visible, si.textInputFocus),
            weight: npe
        },
        {
            primary: Ze.Enter,
            kbExpr: mt.and(Qv.Visible, si.textInputFocus, Qv.AcceptSuggestionsOnEnter, Qv.MakesTextEdit),
            weight: npe
        }
    ],
    menuOpts: [
        {
            menuId: Cst,
            title: D(1598, null),
            group: "left",
            order: 1,
            when: Qv.HasInsertAndReplaceRange.toNegated()
        },
        {
            menuId: Cst,
            title: D(1599, null),
            group: "left",
            order: 1,
            when: mt.and(Qv.HasInsertAndReplaceRange, Qv.InsertMode.isEqualTo("insert"))
        },
        {
            menuId: Cst,
            title: D(1600, null),
            group: "left",
            order: 1,
            when: mt.and(Qv.HasInsertAndReplaceRange, Qv.InsertMode.isEqualTo("replace"))
        }
    ]
})), Zc(new pJ({
    id: "acceptAlternativeSelectedSuggestion",
    precondition: mt.and(Qv.Visible, si.textInputFocus, Qv.HasFocusedSuggestion),
    kbOpts: {
        weight: npe,
        kbExpr: si.textInputFocus,
        primary: ut.Shift | Ze.Enter,
        secondary: [
            ut.Shift | Ze.Tab
        ]
    },
    handler (t) {
        t.acceptSelectedSuggestion(!1, !0);
    },
    menuOpts: [
        {
            menuId: Cst,
            group: "left",
            order: 2,
            when: mt.and(Qv.HasInsertAndReplaceRange, Qv.InsertMode.isEqualTo("insert")),
            title: D(1601, null)
        },
        {
            menuId: Cst,
            group: "left",
            order: 2,
            when: mt.and(Qv.HasInsertAndReplaceRange, Qv.InsertMode.isEqualTo("replace")),
            title: D(1602, null)
        }
    ]
})), hs.registerCommandAlias("acceptSelectedSuggestionOnEnter", "acceptSelectedSuggestion"), Zc(new pJ({
    id: "hideSuggestWidget",
    precondition: Qv.Visible,
    handler: (t)=>t.cancelSuggestWidget(),
    kbOpts: {
        weight: npe,
        kbExpr: si.textInputFocus,
        primary: Ze.Escape,
        secondary: [
            ut.Shift | Ze.Escape
        ]
    }
})), Zc(new pJ({
    id: "selectNextSuggestion",
    precondition: mt.and(Qv.Visible, mt.or(Qv.MultipleSuggestions, Qv.HasFocusedSuggestion.negate())),
    handler: (t)=>t.selectNextSuggestion(),
    kbOpts: {
        weight: npe,
        kbExpr: si.textInputFocus,
        primary: Ze.DownArrow,
        secondary: [
            ut.CtrlCmd | Ze.DownArrow
        ],
        mac: {
            primary: Ze.DownArrow,
            secondary: [
                ut.CtrlCmd | Ze.DownArrow,
                ut.WinCtrl | Ze.KeyN
            ]
        }
    }
})), Zc(new pJ({
    id: "selectNextPageSuggestion",
    precondition: mt.and(Qv.Visible, mt.or(Qv.MultipleSuggestions, Qv.HasFocusedSuggestion.negate())),
    handler: (t)=>t.selectNextPageSuggestion(),
    kbOpts: {
        weight: npe,
        kbExpr: si.textInputFocus,
        primary: Ze.PageDown,
        secondary: [
            ut.CtrlCmd | Ze.PageDown
        ]
    }
})), Zc(new pJ({
    id: "selectLastSuggestion",
    precondition: mt.and(Qv.Visible, mt.or(Qv.MultipleSuggestions, Qv.HasFocusedSuggestion.negate())),
    handler: (t)=>t.selectLastSuggestion()
})), Zc(new pJ({
    id: "selectPrevSuggestion",
    precondition: mt.and(Qv.Visible, mt.or(Qv.MultipleSuggestions, Qv.HasFocusedSuggestion.negate())),
    handler: (t)=>t.selectPrevSuggestion(),
    kbOpts: {
        weight: npe,
        kbExpr: si.textInputFocus,
        primary: Ze.UpArrow,
        secondary: [
            ut.CtrlCmd | Ze.UpArrow
        ],
        mac: {
            primary: Ze.UpArrow,
            secondary: [
                ut.CtrlCmd | Ze.UpArrow,
                ut.WinCtrl | Ze.KeyP
            ]
        }
    }
})), Zc(new pJ({
    id: "selectPrevPageSuggestion",
    precondition: mt.and(Qv.Visible, mt.or(Qv.MultipleSuggestions, Qv.HasFocusedSuggestion.negate())),
    handler: (t)=>t.selectPrevPageSuggestion(),
    kbOpts: {
        weight: npe,
        kbExpr: si.textInputFocus,
        primary: Ze.PageUp,
        secondary: [
            ut.CtrlCmd | Ze.PageUp
        ]
    }
})), Zc(new pJ({
    id: "selectFirstSuggestion",
    precondition: mt.and(Qv.Visible, mt.or(Qv.MultipleSuggestions, Qv.HasFocusedSuggestion.negate())),
    handler: (t)=>t.selectFirstSuggestion()
})), Zc(new pJ({
    id: "focusSuggestion",
    precondition: mt.and(Qv.Visible, Qv.HasFocusedSuggestion.negate()),
    handler: (t)=>t.focusSuggestion(),
    kbOpts: {
        weight: npe,
        kbExpr: FWr,
        primary: ut.CtrlCmd | Ze.Space,
        secondary: [
            ut.CtrlCmd | Ze.KeyI
        ],
        mac: {
            primary: ut.WinCtrl | Ze.Space,
            secondary: [
                ut.CtrlCmd | Ze.KeyI
            ]
        }
    }
})), Zc(new pJ({
    id: "focusAndAcceptSuggestion",
    precondition: mt.and(Qv.Visible, Qv.HasFocusedSuggestion.negate()),
    handler: (t)=>{
        t.focusSuggestion(), t.acceptSelectedSuggestion(!0, !1);
    }
})), Zc(new pJ({
    id: "toggleSuggestionDetails",
    precondition: mt.and(Qv.Visible, Qv.HasFocusedSuggestion),
    handler: (t)=>t.toggleSuggestionDetails(),
    kbOpts: {
        weight: npe,
        kbExpr: FWr,
        primary: ut.CtrlCmd | Ze.Space,
        secondary: [
            ut.CtrlCmd | Ze.KeyI
        ],
        mac: {
            primary: ut.WinCtrl | Ze.Space,
            secondary: [
                ut.CtrlCmd | Ze.KeyI
            ]
        }
    },
    menuOpts: [
        {
            menuId: Cst,
            group: "right",
            order: 1,
            when: mt.and(Qv.DetailsVisible, Qv.CanResolve),
            title: D(1603, null)
        },
        {
            menuId: Cst,
            group: "right",
            order: 1,
            when: mt.and(Qv.DetailsVisible.toNegated(), Qv.CanResolve),
            title: D(1604, null)
        }
    ]
})), Zc(new pJ({
    id: "toggleExplainMode",
    precondition: Qv.Visible,
    handler: (t)=>t.toggleExplainMode(),
    kbOpts: {
        weight: 100,
        primary: ut.CtrlCmd | Ze.Slash
    }
})), Zc(new pJ({
    id: "toggleSuggestionFocus",
    precondition: Qv.Visible,
    handler: (t)=>t.toggleSuggestionFocus(),
    kbOpts: {
        weight: npe,
        kbExpr: si.textInputFocus,
        primary: ut.CtrlCmd | ut.Alt | Ze.Space,
        mac: {
            primary: ut.WinCtrl | ut.Alt | Ze.Space
        }
    }
})), Zc(new pJ({
    id: "insertBestCompletion",
    precondition: mt.and(si.textInputFocus, mt.equals("config.editor.tabCompletion", "on"), VHt.AtEnd, Qv.Visible.toNegated(), P6e.OtherSuggestions.toNegated(), Lx.InSnippetMode.toNegated()),
    handler: (t, e)=>{
        t.triggerSuggestAndAcceptBest(wf(e) ? {
            fallback: "tab",
            ...e
        } : {
            fallback: "tab"
        });
    },
    kbOpts: {
        weight: npe,
        primary: Ze.Tab
    }
})), Zc(new pJ({
    id: "insertNextSuggestion",
    precondition: mt.and(si.textInputFocus, mt.equals("config.editor.tabCompletion", "on"), P6e.OtherSuggestions, Qv.Visible.toNegated(), Lx.InSnippetMode.toNegated()),
    handler: (t)=>t.acceptNextSuggestion(),
    kbOpts: {
        weight: npe,
        kbExpr: si.textInputFocus,
        primary: Ze.Tab
    }
})), Zc(new pJ({
    id: "insertPrevSuggestion",
    precondition: mt.and(si.textInputFocus, mt.equals("config.editor.tabCompletion", "on"), P6e.OtherSuggestions, Qv.Visible.toNegated(), Lx.InSnippetMode.toNegated()),
    handler: (t)=>t.acceptPrevSuggestion(),
    kbOpts: {
        weight: npe,
        kbExpr: si.textInputFocus,
        primary: ut.Shift | Ze.Tab
    }
})), _l(class extends xu {
    constructor(){
        super({
            id: "editor.action.resetSuggestSize",
            label: At(1606, "Reset Suggest Widget Size"),
            precondition: void 0
        });
    }
    run(t, e) {
        oX.get(e)?.resetWidgetSize();
    }
});

}

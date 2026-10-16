import { EI, Ei, Fa, Gt, K9, Kv, Nc, Nt, Qe, o6t, tt, xr } from "./Iwo.js";
import { hA, iAe } from "./SZu.js";
import { ZE, qn } from "./async.js";
import { El, yo } from "./cancellation.js";
import { bb, hf } from "./clipboardService.js";
import { nNa, pDp } from "./completionModel.js";
import { or, yi } from "./configuration.js";
import { Hi, Rr } from "./contextkey.js";
import { FD, yW } from "./editorWorker.js";
import { cy, fb } from "./environment.js";
import { Hfn, s6 } from "./filters.js";
import { myi } from "./inlineCompletionContextKeys.js";
import { BMp, R3a, Sx1, kx1 } from "./ipa.js";
import { Dg, Nd } from "./languageFeatures.js";
import { Ji, Li } from "./log.js";
import { Cy, bu } from "./selection.js";
import { Lx, q0e } from "./snippetController2.js";
import { p6t } from "./spanLifecycle.js";
import { GHt, TWr, Tst } from "./suggest.js";
import { Uv, Xv } from "./telemetry.js";
import { __ } from "./tracing_2.js";
import { E } from "./tslib.es6.js";
import { To } from "./types_2.js";
import { F, Re } from "./userDataProfile.js";
import { eNa, hDp } from "./wordDistance.js";
var Qwt, rCn;
export { Qwt, rCn };
var __wakaru_mDp_initialized = false;
export function mDp() {
if (__wakaru_mDp_initialized) return;
__wakaru_mDp_initialized = true;
"use strict";
E(), qn(), yo(), Ei(), Gt(), Qe(), Fa(), Cy(), yW(), hDp(), bb(), or(), Hi(), Ji(), Xv(), pDp(), Tst(), Dg(), s6(), To(), myi(), q0e(), fb(), __(), p6t(), Qwt = class {
    static shouldAutoTrigger(t) {
        if (!t.hasModel()) return !1;
        const e = t.getModel(), n = t.getPosition();
        e.tokenization.tokenizeIfCheap(n.lineNumber);
        const i = e.getWordAtPosition(n);
        return !(!i || i.endColumn !== n.column && i.startColumn + 1 !== n.column || !isNaN(Number(i.word)));
    }
    constructor(t, e, n){
        this.leadingLineContent = t.getLineContent(e.lineNumber).substr(0, e.column - 1), this.leadingWord = t.getWordUntilPosition(e), this.lineNumber = e.lineNumber, this.column = e.column, this.triggerOptions = n;
    }
}, rCn = class {
    constructor(t, e, n, i, r, s, o, a, l){
        this._editor = t, this._editorWorkerService = e, this._clipboardService = n, this._telemetryService = i, this._logService = r, this._contextKeyService = s, this._configurationService = o, this._languageFeaturesService = a, this._envService = l, this._toDispose = new Nt, this._triggerCharacterListener = new Nt, this._triggerQuickSuggest = new ZE, this._triggerState = void 0, this._completionDisposables = new Nt, this._onDidCancel = new tt, this._onDidTrigger = new tt, this._onDidSuggest = new tt, this.onDidCancel = this._onDidCancel.event, this.onDidTrigger = this._onDidTrigger.event, this.onDidSuggest = this._onDidSuggest.event, this._currentSelection = this._editor.getSelection() || new bu(1, 1, 1, 1), this._toDispose.add(this._editor.onDidChangeModel(()=>{
            this._updateTriggerCharacters(), this.cancel();
        })), this._toDispose.add(this._editor.onDidChangeModelLanguage(()=>{
            this._updateTriggerCharacters(), this.cancel();
        })), this._toDispose.add(this._editor.onDidChangeConfiguration(()=>{
            this._updateTriggerCharacters();
        })), this._toDispose.add(this._languageFeaturesService.completionProvider.onDidChange(()=>{
            this._updateTriggerCharacters(), this._updateActiveSuggestSession();
        }));
        let c = !1;
        this._toDispose.add(this._editor.onDidCompositionStart(()=>{
            c = !0;
        })), this._toDispose.add(this._editor.onDidCompositionEnd(()=>{
            c = !1, this._onCompositionEnd();
        })), this._toDispose.add(this._editor.onDidChangeCursorSelection((u)=>{
            c || this._onCursorChange(u);
        })), this._toDispose.add(this._editor.onDidChangeModelContent(()=>{
            !c && this._triggerState !== void 0 && this._refilterCompletionItems();
        })), this._updateTriggerCharacters();
    }
    dispose() {
        Nc(this._triggerCharacterListener), Nc([
            this._onDidCancel,
            this._onDidSuggest,
            this._onDidTrigger,
            this._triggerQuickSuggest
        ]), this._toDispose.dispose(), this._completionDisposables.dispose(), this.cancel();
    }
    _updateTriggerCharacters() {
        if (this._triggerCharacterListener.clear(), this._editor.getOption(96) || !this._editor.hasModel() || !this._editor.getOption(126)) return;
        const t = new Map;
        for (const n of this._languageFeaturesService.completionProvider.all(this._editor.getModel()))for (const i of n.triggerCharacters || []){
            let r = t.get(i);
            if (!r) {
                r = new Set;
                const s = BMp();
                s && r.add(s), t.set(i, r);
            }
            r.add(n);
        }
        const e = (n)=>{
            if (!kx1(this._editor, this._contextKeyService, this._configurationService) || Qwt.shouldAutoTrigger(this._editor)) return;
            if (!n) {
                const s = this._editor.getPosition();
                n = this._editor.getModel().getLineContent(s.lineNumber).substr(0, s.column - 1);
            }
            let i = "";
            o6t(n.charCodeAt(n.length - 1)) ? K9(n.charCodeAt(n.length - 2)) && (i = n.substr(n.length - 2)) : i = n.charAt(n.length - 1);
            const r = t.get(i);
            if (r) {
                const s = new Map;
                if (this._completionModel) for (const [o, a] of this._completionModel.getItemsByProvider())r.has(o) || s.set(o, a);
                this.trigger({
                    auto: !0,
                    triggerKind: 1,
                    triggerCharacter: i,
                    retrigger: !!this._completionModel,
                    clipboardText: this._completionModel?.clipboardText,
                    completionOptions: {
                        providerFilter: r,
                        providerItemsToReuse: s
                    }
                });
            }
        };
        this._triggerCharacterListener.add(this._editor.onDidType(e)), this._triggerCharacterListener.add(this._editor.onDidCompositionEnd(()=>e()));
    }
    get state() {
        return this._triggerState ? this._triggerState.auto ? 2 : 1 : 0;
    }
    cancel(t = !1) {
        this._triggerState !== void 0 && (this._triggerQuickSuggest.cancel(), this._requestToken?.cancel(), this._requestToken = void 0, this._triggerState = void 0, this._completionModel = void 0, this._context = void 0, this._onDidCancel.fire({
            retrigger: t
        }));
    }
    clear() {
        this._completionDisposables.clear();
    }
    _updateActiveSuggestSession() {
        this._triggerState !== void 0 && (!this._editor.hasModel() || !this._languageFeaturesService.completionProvider.has(this._editor.getModel()) ? this.cancel() : this.trigger({
            auto: this._triggerState.auto,
            retrigger: !0
        }));
    }
    _onCursorChange(t) {
        if (!this._editor.hasModel()) return;
        const e = this._currentSelection;
        if (this._currentSelection = this._editor.getSelection(), !t.selection.isEmpty() || t.reason !== 0 && t.reason !== 3 || t.source !== "keyboard" && t.source !== "deleteLeft") {
            this.cancel();
            return;
        }
        this._triggerState === void 0 && t.reason === 0 ? (e.containsRange(this._currentSelection) || e.getEndPosition().isBeforeOrEqual(this._currentSelection.getPosition())) && this._doTriggerQuickSuggest() : this._triggerState !== void 0 && t.reason === 3 && this._refilterCompletionItems();
    }
    _onCompositionEnd() {
        this._triggerState === void 0 ? this._doTriggerQuickSuggest() : this._refilterCompletionItems();
    }
    _doTriggerQuickSuggest() {
        GHt.isAllOff(this._editor.getOption(94)) || this._editor.getOption(123).snippetsPreventQuickSuggestions && Lx.get(this._editor)?.isInSnippet() || (this.cancel(), this._triggerQuickSuggest.cancelAndSet(()=>{
            if (this._triggerState !== void 0 || !Qwt.shouldAutoTrigger(this._editor) || !this._editor.hasModel() || !this._editor.hasWidgetFocus()) return;
            const t = this._editor.getModel(), e = this._editor.getPosition(), n = this._editor.getOption(94);
            if (!GHt.isAllOff(n)) {
                if (!GHt.isAllOn(n)) {
                    t.tokenization.tokenizeIfCheap(e.lineNumber);
                    const i = t.tokenization.getLineTokens(e.lineNumber), r = i.getStandardTokenType(i.findTokenIndexAtOffset(Math.max(e.column - 1 - 1, 0)));
                    if (GHt.valueFor(n, r) !== "on") return;
                }
                Sx1(this._editor, this._contextKeyService, this._configurationService) && this._languageFeaturesService.completionProvider.has(t) && this.trigger({
                    auto: !0
                });
            }
        }, this._editor.getOption(95)));
    }
    _refilterCompletionItems() {
        Kv(this._editor.hasModel()), Kv(this._triggerState !== void 0);
        const t = this._editor.getModel(), e = this._editor.getPosition(), n = new Qwt(t, e, {
            ...this._triggerState,
            refilter: !0
        });
        this._onNewContext(n);
    }
    trigger(t) {
        if (!this._editor.hasModel()) return;
        const e = this._editor.getModel(), n = new Qwt(e, this._editor.getPosition(), t);
        this.cancel(t.retrigger), this._triggerState = t, this._onDidTrigger.fire({
            auto: t.auto,
            shy: t.shy ?? !1,
            position: this._editor.getPosition()
        }), this._context = n;
        let i = {
            triggerKind: t.triggerKind ?? 0
        };
        t.triggerCharacter && (i = {
            triggerKind: 1,
            triggerCharacter: t.triggerCharacter
        }), this._requestToken = new El;
        const r = this._editor.getOption(117);
        let s = 1;
        switch(r){
            case "top":
                s = 0;
                break;
            case "bottom":
                s = 2;
                break;
        }
        const { itemKind: o, showDeprecated: a } = rCn.createSuggestFilter(this._editor), l = new TWr(s, t.completionOptions?.kindFilter ?? o, t.completionOptions?.providerFilter, t.completionOptions?.providerItemsToReuse, a), c = eNa.create(this._editorWorkerService, this._editor), u = this._editor.getPosition(), d = this._requestToken.token, h = iAe(hA("suggest.provideSuggestionItems"), async ()=>R3a(this._languageFeaturesService.completionProvider, e, u, l, i, d));
        Promise.all([
            h,
            c
        ]).then(async ([p, g])=>{
            if (this._requestToken?.dispose(), !this._editor.hasModel()) {
                p.disposable.dispose();
                return;
            }
            let f = t?.clipboardText;
            if (!f && p.needsClipboard && (f = await this._clipboardService.readText()), this._triggerState === void 0) {
                p.disposable.dispose();
                return;
            }
            const _ = this._editor.getModel(), b = new Qwt(_, this._editor.getPosition(), t), y = {
                ...Hfn.default,
                firstMatchCanBeWeak: !this._editor.getOption(123).matchOnWordStartOnly
            };
            if (this._completionModel = new nNa(p.items, this._context.column, {
                leadingLineContent: b.leadingLineContent,
                characterCountDelta: b.column - this._context.column
            }, g, this._editor.getOption(123), this._editor.getOption(117), y, f), this._completionDisposables.add(p.disposable), this._onNewContext(b), this._reportDurationsTelemetry(p.durations), !this._envService.isBuilt || this._envService.isExtensionDevelopment) for (const S of p.items)S.isInvalid && this._logService.warn(`[suggest] did IGNORE invalid completion item from ${S.provider._debugDisplayName}`, S.completion);
        }).catch(xr);
    }
    _reportDurationsTelemetry(t) {
        Math.random() > 1e-4 || setTimeout(()=>{
            this._logService.debug("suggest.durations.json", t);
        });
    }
    static createSuggestFilter(t) {
        const e = new Set;
        t.getOption(117) === "none" && e.add(27);
        const i = t.getOption(123);
        return i.showMethods || e.add(0), i.showFunctions || e.add(1), i.showConstructors || e.add(2), i.showFields || e.add(3), i.showVariables || e.add(4), i.showClasses || e.add(5), i.showStructs || e.add(6), i.showInterfaces || e.add(7), i.showModules || e.add(8), i.showProperties || e.add(9), i.showEvents || e.add(10), i.showOperators || e.add(11), i.showUnits || e.add(12), i.showValues || e.add(13), i.showConstants || e.add(14), i.showEnums || e.add(15), i.showEnumMembers || e.add(16), i.showKeywords || e.add(17), i.showWords || e.add(18), i.showColors || e.add(19), i.showFiles || e.add(20), i.showReferences || e.add(21), i.showColors || e.add(22), i.showFolders || e.add(23), i.showTypeParameters || e.add(24), i.showSnippets || e.add(27), i.showUsers || e.add(25), i.showIssues || e.add(26), {
            itemKind: e,
            showDeprecated: i.showDeprecated
        };
    }
    _onNewContext(t) {
        if (this._context) {
            if (t.lineNumber !== this._context.lineNumber) {
                this.cancel();
                return;
            }
            if (EI(t.leadingLineContent) !== EI(this._context.leadingLineContent)) {
                this.cancel();
                return;
            }
            if (t.column < this._context.column) {
                t.leadingWord.word ? this.trigger({
                    auto: this._context.triggerOptions.auto,
                    retrigger: !0
                }) : this.cancel();
                return;
            }
            if (this._completionModel) {
                if (t.leadingWord.word.length !== 0 && t.leadingWord.startColumn > this._context.leadingWord.startColumn) {
                    if (Qwt.shouldAutoTrigger(this._editor) && this._context) {
                        const n = this._completionModel.getItemsByProvider();
                        this.trigger({
                            auto: this._context.triggerOptions.auto,
                            retrigger: !0,
                            clipboardText: this._completionModel.clipboardText,
                            completionOptions: {
                                providerItemsToReuse: n
                            }
                        });
                    }
                    return;
                }
                if (t.column > this._context.column && this._completionModel.getIncompleteProvider().size > 0 && t.leadingWord.word.length !== 0) {
                    const e = new Map, n = new Set;
                    for (const [i, r] of this._completionModel.getItemsByProvider())r.length > 0 && r[0].container.incomplete ? n.add(i) : e.set(i, r);
                    this.trigger({
                        auto: this._context.triggerOptions.auto,
                        triggerKind: 2,
                        retrigger: !0,
                        clipboardText: this._completionModel.clipboardText,
                        completionOptions: {
                            providerFilter: n,
                            providerItemsToReuse: e
                        }
                    });
                } else {
                    const e = this._completionModel.lineContext;
                    let n = !1;
                    if (this._completionModel.lineContext = {
                        leadingLineContent: t.leadingLineContent,
                        characterCountDelta: t.column - this._context.column
                    }, this._completionModel.items.length === 0) {
                        const i = Qwt.shouldAutoTrigger(this._editor);
                        if (!this._context) {
                            this.cancel();
                            return;
                        }
                        if (i && this._context.leadingWord.endColumn < t.leadingWord.startColumn) {
                            this.trigger({
                                auto: this._context.triggerOptions.auto,
                                retrigger: !0
                            });
                            return;
                        }
                        if (this._context.triggerOptions.auto) {
                            this.cancel();
                            return;
                        } else if (this._completionModel.lineContext = e, n = this._completionModel.items.length > 0, n && t.leadingWord.word.length === 0) {
                            this.cancel();
                            return;
                        }
                    }
                    this._onDidSuggest.fire({
                        completionModel: this._completionModel,
                        triggerOptions: t.triggerOptions,
                        isFrozen: n
                    });
                }
            }
        }
    }
}, rCn = Re([
    F(1, FD),
    F(2, hf),
    F(3, Uv),
    F(4, Li),
    F(5, Rr),
    F(6, yi),
    F(7, Nd),
    F(8, cy)
], rCn);

}

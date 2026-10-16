import { D, Kv, Nt, Qe } from "./Iwo.js";
import { Hi, Rr, cn, mt } from "./contextkey.js";
import { cg, si } from "./editorContextKeys.js";
import { Nj, Ud } from "./editorExtensions.js";
import { UMp } from "./ipa.js";
import { Ma, Ze, ut } from "./keyCodes.js";
import { RD, fA } from "./languageConfigurationRegistry.js";
import { Dg, Nd } from "./languageFeatures.js";
import { Ji, Li } from "./log.js";
import { Bt } from "./nls.js";
import { er, jc } from "./position.js";
import { VMp, gbe } from "./snippetSession.js";
import { Tst } from "./suggest.js";
import { E } from "./tslib.es6.js";
import { To } from "./types_2.js";
import { F, Re } from "./userDataProfile.js";
import { Zc, sv } from "./ze.js";
var vyi, Lx, _yi;
export { Lx, _yi, vyi };
var __wakaru_q0e_initialized = false;
export function q0e() {
if (__wakaru_q0e_initialized) return;
__wakaru_q0e_initialized = true;
"use strict";
E(), Ma(), Qe(), To(), Ud(), jc(), cg(), RD(), Dg(), Tst(), Bt(), Hi(), Ji(), VMp(), vyi = {
    overwriteBefore: 0,
    overwriteAfter: 0,
    undoStopBefore: !0,
    undoStopAfter: !0,
    adjustWhitespace: !0,
    clipboardText: void 0,
    overtypingCapturer: void 0
}, Lx = class {
    constructor(t, e, n, i, r){
        this._editor = t, this._logService = e, this._languageFeaturesService = n, this._languageConfigurationService = r, this._snippetListener = new Nt, this._modelVersionId = -1, this._inSnippet = Lx.InSnippetMode.bindTo(i), this._hasNextTabstop = Lx.HasNextTabstop.bindTo(i), this._hasPrevTabstop = Lx.HasPrevTabstop.bindTo(i);
    }
    static get(t) {
        return t.getContribution(Lx.ID);
    }
    dispose() {
        this._inSnippet.reset(), this._hasPrevTabstop.reset(), this._hasNextTabstop.reset(), this._session?.dispose(), this._snippetListener.dispose();
    }
    apply(t, e) {
        try {
            this._doInsert(t, typeof e > "u" ? vyi : {
                ...vyi,
                ...e
            });
        } catch (n) {
            this.cancel(), this._logService.error(n), this._logService.error("snippet_error"), this._logService.error("insert_edits=", t), this._logService.error("existing_template=", this._session ? this._session._logInfo() : "<no_session>");
        }
    }
    insert(t, e) {
        try {
            this._doInsert(t, typeof e > "u" ? vyi : {
                ...vyi,
                ...e
            });
        } catch (n) {
            this.cancel(), this._logService.error(n), this._logService.error("snippet_error"), this._logService.error("insert_template=", t), this._logService.error("existing_template=", this._session ? this._session._logInfo() : "<no_session>");
        }
    }
    _doInsert(t, e) {
        if (this._editor.hasModel()) {
            if (this._snippetListener.clear(), e.undoStopBefore && this._editor.getModel().pushStackElement(), this._session && typeof t != "string" && this.cancel(), this._session ? (Kv(typeof t == "string"), this._session.merge(t, e)) : (this._modelVersionId = this._editor.getModel().getAlternativeVersionId(), this._session = new gbe(this._editor, t, e, this._languageConfigurationService), this._session.insert()), e.undoStopAfter && this._editor.getModel().pushStackElement(), this._session?.hasChoice) {
                const n = {
                    _debugDisplayName: "snippetChoiceCompletions",
                    provideCompletionItems: (l, c)=>{
                        if (!this._session || l !== this._editor.getModel() || !er.equals(this._editor.getPosition(), c)) return;
                        const { activeChoice: u } = this._session;
                        if (!u || u.choice.options.length === 0) return;
                        const d = l.getValueInRange(u.range), h = !!u.choice.options.find((g)=>g.value === d), p = [];
                        for(let g = 0; g < u.choice.options.length; g++){
                            const f = u.choice.options[g];
                            p.push({
                                kind: 13,
                                label: f.value,
                                insertText: f.value,
                                sortText: "a".repeat(g + 1),
                                range: u.range,
                                filterText: h ? `${d}_${f.value}` : void 0,
                                command: {
                                    id: "jumpToNextSnippetPlaceholder",
                                    title: D(1539, null)
                                }
                            });
                        }
                        return {
                            suggestions: p
                        };
                    }
                }, i = this._editor.getModel();
                let r, s = !1;
                const o = ()=>{
                    r?.dispose(), s = !1;
                }, a = ()=>{
                    s || (r = this._languageFeaturesService.completionProvider.register({
                        language: i.getLanguageId(),
                        pattern: i.uri.fsPath,
                        scheme: i.uri.scheme,
                        exclusive: !0
                    }, n), this._snippetListener.add(r), s = !0);
                };
                this._choiceCompletions = {
                    provider: n,
                    enable: a,
                    disable: o
                };
            }
            this._updateState(), this._snippetListener.add(this._editor.onDidChangeModelContent((n)=>n.isFlush && this.cancel())), this._snippetListener.add(this._editor.onDidChangeModel(()=>this.cancel())), this._snippetListener.add(this._editor.onDidChangeCursorSelection(()=>this._updateState()));
        }
    }
    _updateState() {
        if (!(!this._session || !this._editor.hasModel())) {
            if (this._modelVersionId === this._editor.getModel().getAlternativeVersionId()) return this.cancel();
            if (!this._session.hasPlaceholder) return this.cancel();
            if (this._session.isAtLastPlaceholder || !this._session.isSelectionWithinPlaceholders()) return this._editor.getModel().pushStackElement(), this.cancel();
            this._inSnippet.set(!0), this._hasPrevTabstop.set(!this._session.isAtFirstPlaceholder), this._hasNextTabstop.set(!this._session.isAtLastPlaceholder), this._handleChoice();
        }
    }
    _handleChoice() {
        if (!this._session || !this._editor.hasModel()) {
            this._currentChoice = void 0;
            return;
        }
        const { activeChoice: t } = this._session;
        if (!t || !this._choiceCompletions) {
            this._choiceCompletions?.disable(), this._currentChoice = void 0;
            return;
        }
        this._currentChoice !== t.choice && (this._currentChoice = t.choice, this._choiceCompletions.enable(), queueMicrotask(()=>{
            UMp(this._editor, this._choiceCompletions.provider);
        }));
    }
    finish() {
        for(; this._inSnippet.get();)this.next();
    }
    cancel(t = !1) {
        this._inSnippet.reset(), this._hasPrevTabstop.reset(), this._hasNextTabstop.reset(), this._snippetListener.clear(), this._currentChoice = void 0, this._session?.dispose(), this._session = void 0, this._modelVersionId = -1, t && this._editor.setSelections([
            this._editor.getSelection()
        ]);
    }
    prev() {
        this._session?.prev(), this._updateState();
    }
    next() {
        this._session?.next(), this._updateState();
    }
    isInSnippet() {
        return !!this._inSnippet.get();
    }
    getSessionEnclosingRange() {
        if (this._session) return this._session.getEnclosingRange();
    }
}, Lx.ID = "snippetController2", Lx.InSnippetMode = new cn("inSnippetMode", !1, D(1536, null)), Lx.HasNextTabstop = new cn("hasNextTabstop", !1, D(1537, null)), Lx.HasPrevTabstop = new cn("hasPrevTabstop", !1, D(1538, null)), Lx = Re([
    F(1, Li),
    F(2, Nd),
    F(3, Rr),
    F(4, fA)
], Lx), sv(Lx.ID, Lx, 4), _yi = Nj.bindToContribution(Lx.get), Zc(new _yi({
    id: "jumpToNextSnippetPlaceholder",
    precondition: mt.and(Lx.InSnippetMode, Lx.HasNextTabstop),
    handler: (t)=>t.next(),
    kbOpts: {
        weight: 130,
        kbExpr: si.textInputFocus,
        primary: Ze.Tab
    }
})), Zc(new _yi({
    id: "jumpToPrevSnippetPlaceholder",
    precondition: mt.and(Lx.InSnippetMode, Lx.HasPrevTabstop),
    handler: (t)=>t.prev(),
    kbOpts: {
        weight: 130,
        kbExpr: si.textInputFocus,
        primary: ut.Shift | Ze.Tab
    }
})), Zc(new _yi({
    id: "leaveSnippet",
    precondition: Lx.InSnippetMode,
    handler: (t)=>t.cancel(!0),
    kbOpts: {
        weight: 130,
        kbExpr: si.textInputFocus,
        primary: Ze.Escape,
        secondary: [
            ut.Shift | Ze.Escape
        ]
    }
})), Zc(new _yi({
    id: "acceptSnippet",
    precondition: Lx.InSnippetMode,
    handler: (t)=>t.finish()
}));

}

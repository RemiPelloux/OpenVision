import { nyt } from "./De_3.js";
import { He, S, Se, Wb, ns, si } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { bn } from "./async.js";
import { Ja, md } from "./codeEditorService.js";
import { ki, vi } from "./commands.js";
import { Cn, qt } from "./configuration.js";
import { At, dn, he, xn } from "./contextkey.js";
import { gU, of } from "./contextkeys.js";
import { gd, gn } from "./editorContextKeys.js";
import { Y7 } from "./embeddedCodeEditorWidget.js";
import { Ze, _t } from "./instantiation.js";
import { Dd, Ie, Pr, bh, fe } from "./keyCodes.js";
import { Qr, eb } from "./keybindingsRegistry.js";
import { XC, km, m_n, p_n, ru } from "./listService.js";
import { rt } from "./nls.js";
import { di, ji } from "./notification.js";
import { NO, lU } from "./peekView.js";
import { Yn, ya } from "./position.js";
import { Ys } from "./qIc.js";
import { dt, qi } from "./range.js";
import { gRe, xKe } from "./referencesModel.js";
import { R9i, Rku, ucv } from "./referencesWidget.js";
import { Vn, yn } from "./storage_2.js";
import { x } from "./tslib.es6.js";
var aQe, Jue;
export { Jue, aQe };
var __wakaru_D9i_initialized = false;
export function D9i() {
if (__wakaru_D9i_initialized) return;
__wakaru_D9i_initialized = true;
"use strict";
x(), bn(), si(), Pr(), Se(), md(), ya(), qi(), lU(), Y7(), rt(), vi(), Cn(), dn(), Ze(), eb(), km(), ji(), Vn(), xKe(), ucv(), gd(), of(), aQe = new At("referenceSearchVisible", !1, S(1216, null)), Jue = class {
    constructor(e, t, n, i, r, s, o, a){
        this._defaultTreeKeyboardSupport = e, this._editor = t, this._editorService = i, this._notificationService = r, this._instantiationService = s, this._storageService = o, this._configurationService = a, this._disposables = new He, this._requestIdPool = 0, this._ignoreModelChangeEvent = !1, this._referenceSearchVisible = aQe.bindTo(n);
    }
    static get(e) {
        return e.getContribution(Jue.ID);
    }
    dispose() {
        this._referenceSearchVisible.reset(), this._disposables.dispose(), this._widget?.dispose(), this._model?.dispose(), this._widget = void 0, this._model = void 0;
    }
    getWidget() {
        return this._widget;
    }
    toggleWidget(e, t, n) {
        let i;
        if (this._widget && (i = this._widget.position), this.closeWidget(), i && e.containsPosition(i)) return;
        this._peekMode = n, this._referenceSearchVisible.set(!0), this._disposables.add(this._editor.onDidChangeModelLanguage(()=>{
            this.closeWidget();
        })), this._disposables.add(this._editor.onDidChangeModel(()=>{
            this._ignoreModelChangeEvent || this.closeWidget();
        }));
        const r = "peekViewLayout", s = Rku.fromJSON(this._storageService.get(r, 0, "{}"));
        this._widget = this._instantiationService.createInstance(R9i, this._editor, this._defaultTreeKeyboardSupport, s), this._widget.setTitle(S(1217, null)), this._widget.show(e), this._disposables.add(this._widget.onDidClose(()=>{
            t.cancel(), this._widget ? (this._storageService.store(r, JSON.stringify(this._widget.layoutData), 0, 1), this._widget.isClosing || this.closeWidget(), this._widget = void 0) : this.closeWidget();
        })), this._disposables.add(this._widget.onDidSelectReference((a)=>{
            const { element: c, kind: l } = a;
            if (c) switch(l){
                case "open":
                    (a.source !== "editor" || !this._configurationService.getValue("editor.stablePeek")) && this.openReference(c, !1, !1);
                    break;
                case "side":
                    this.openReference(c, !0, !1);
                    break;
                case "goto":
                    n ? this._gotoReference(c, !0) : this.openReference(c, !1, !0);
                    break;
            }
        }));
        const o = ++this._requestIdPool;
        t.then((a)=>{
            if (o !== this._requestIdPool || !this._widget) {
                a.dispose();
                return;
            }
            return this._model?.dispose(), this._model = a, this._widget.setModel(this._model).then(()=>{
                if (this._widget && this._model && this._editor.hasModel()) {
                    this._model.isEmpty ? this._widget.setMetaTitle("") : this._widget.setMetaTitle(S(1218, null, this._model.title, this._model.references.length));
                    const c = this._editor.getModel().uri, l = new Yn(e.startLineNumber, e.startColumn), u = this._model.nearestReference(c, l);
                    if (u) return this._widget.setSelection(u).then(()=>{
                        this._widget && this._editor.getOption(91) === "editor" && this._widget.focusOnPreviewEditor();
                    });
                }
            });
        }, (a)=>{
            this._notificationService.error(a);
        });
    }
    changeFocusBetweenPreviewAndReferences() {
        this._widget && (this._widget.isPreviewEditorFocused() ? this._widget.focusOnReferenceTree() : this._widget.focusOnPreviewEditor());
    }
    async goToNextOrPreviousReference(e) {
        if (!this._editor.hasModel() || !this._model || !this._widget) return;
        const t = this._widget.position;
        if (!t) return;
        const n = this._model.nearestReference(this._editor.getModel().uri, t);
        if (!n) return;
        const i = this._model.nextOrPreviousReference(n, e), r = this._editor.hasTextFocus(), s = this._widget.isPreviewEditorFocused();
        await this._widget.setSelection(i), await this._gotoReference(i, !1), r ? this._editor.focus() : this._widget && s && this._widget.focusOnPreviewEditor();
    }
    async revealReference(e) {
        !this._editor.hasModel() || !this._model || !this._widget || await this._widget.revealReference(e);
    }
    closeWidget(e = !0) {
        this._widget?.dispose(), this._model?.dispose(), this._referenceSearchVisible.reset(), this._disposables.clear(), this._widget = void 0, this._model = void 0, e && this._editor.focus(), this._requestIdPool += 1;
    }
    _gotoReference(e, t) {
        this._widget?.hide(), this._ignoreModelChangeEvent = !0;
        const n = dt.lift(e.range).collapseToStart();
        return this._editorService.openCodeEditor({
            resource: e.uri,
            options: {
                selection: n,
                selectionSource: "code.jump",
                pinned: t
            }
        }, this._editor).then((i)=>{
            if (this._ignoreModelChangeEvent = !1, !i || !this._widget) {
                this.closeWidget();
                return;
            }
            if (this._editor === i) this._widget.show(n), this._widget.focusOnReferenceTree();
            else {
                const r = Jue.get(i), s = this._model.clone();
                this.closeWidget(), i.focus(), r?.toggleWidget(n, Wb((o)=>Promise.resolve(s)), this._peekMode ?? !1);
            }
        }, (i)=>{
            this._ignoreModelChangeEvent = !1, ns(i);
        });
    }
    openReference(e, t, n) {
        t || this.closeWidget();
        const { uri: i, range: r } = e;
        this._editorService.openCodeEditor({
            resource: i,
            options: {
                selection: r,
                selectionSource: "code.jump",
                pinned: n
            }
        }, this._editor, t);
    }
}, Jue.ID = "editor.contrib.referencesController", Jue = ie([
    C(2, xn),
    C(3, Ja),
    C(4, di),
    C(5, _t),
    C(6, yn),
    C(7, qt)
], Jue), Qr.registerCommandAndKeybindingRule({
    id: "togglePeekWidgetFocus",
    weight: 100,
    primary: Ys(Dd, fe.F2),
    mac: {
        primary: Ys(bh, fe.F2)
    },
    when: he.or(aQe, NO.inPeekEditor),
    handler (e) {
        nyt(e, (t)=>{
            t.changeFocusBetweenPreviewAndReferences();
        });
    }
}), Qr.registerCommandAndKeybindingRule({
    id: "goToNextReference",
    weight: 90,
    primary: fe.F4,
    secondary: [
        fe.F12
    ],
    when: he.or(aQe, NO.inPeekEditor),
    handler (e) {
        nyt(e, (t)=>{
            t.goToNextOrPreviousReference(!0);
        });
    }
}), Qr.registerCommandAndKeybindingRule({
    id: "goToPreviousReference",
    weight: 90,
    primary: Ie.Shift | fe.F4,
    secondary: [
        Ie.Shift | fe.F12
    ],
    when: he.or(aQe, NO.inPeekEditor),
    handler (e) {
        nyt(e, (t)=>{
            t.goToNextOrPreviousReference(!1);
        });
    }
}), ki.registerCommandAlias("goToNextReferenceFromEmbeddedEditor", "goToNextReference"), ki.registerCommandAlias("goToPreviousReferenceFromEmbeddedEditor", "goToPreviousReference"), ki.registerCommandAlias("closeReferenceSearchEditor", "closeReferenceSearch"), ki.registerCommand("closeReferenceSearch", (e)=>nyt(e, (t)=>t.closeWidget())), Qr.registerKeybindingRule({
    id: "closeReferenceSearch",
    weight: -1,
    primary: fe.Escape,
    secondary: [
        Ie.Shift | fe.Escape
    ],
    when: he.and(NO.inPeekEditor, he.not("config.editor.stablePeek"))
}), Qr.registerKeybindingRule({
    id: "closeReferenceSearch",
    weight: 250,
    primary: fe.Escape,
    secondary: [
        Ie.Shift | fe.Escape
    ],
    when: he.and(aQe, he.not("config.editor.stablePeek"), he.or(gn.editorTextFocus, gU.negate()))
}), Qr.registerCommandAndKeybindingRule({
    id: "revealReference",
    weight: 200,
    primary: fe.Enter,
    mac: {
        primary: fe.Enter,
        secondary: [
            Ie.CtrlCmd | fe.DownArrow
        ]
    },
    when: he.and(aQe, XC, p_n.negate(), m_n.negate()),
    handler (e) {
        const n = e.get(ru).lastFocusedList?.getFocus();
        Array.isArray(n) && n[0] instanceof gRe && nyt(e, (i)=>i.revealReference(n[0]));
    }
}), Qr.registerCommandAndKeybindingRule({
    id: "openReferenceToSide",
    weight: 100,
    primary: Ie.CtrlCmd | fe.Enter,
    mac: {
        primary: Ie.WinCtrl | fe.Enter
    },
    when: he.and(aQe, XC, p_n.negate(), m_n.negate()),
    handler (e) {
        const n = e.get(ru).lastFocusedList?.getFocus();
        Array.isArray(n) && n[0] instanceof gRe && nyt(e, (i)=>i.openReference(n[0], !0, !0));
    }
}), ki.registerCommand("openReference", (e)=>{
    const n = e.get(ru).lastFocusedList?.getFocus();
    Array.isArray(n) && n[0] instanceof gRe && nyt(e, (i)=>i.openReference(n[0], !1, !0));
});

}

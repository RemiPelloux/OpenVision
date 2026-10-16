import { D, Ei, Nt, Qe, XE, xr } from "./Iwo.js";
import { qn } from "./async.js";
import { Ju, og } from "./codeEditorService.js";
import { hs, rs } from "./commands.js";
import { or, yi } from "./configuration.js";
import { Hi, Rr, cn, mt } from "./contextkey.js";
import { rW, x_ } from "./contextkeys.js";
import { cg, si } from "./editorContextKeys.js";
import { xwe } from "./embeddedCodeEditorWidget.js";
import { It, dn } from "./instantiation.js";
import { jHt } from "./ipa.js";
import { Ma, Ze, bg, rf, ut } from "./keyCodes.js";
import { ja, xT } from "./keybindingsRegistry.js";
import { Qoi, Zoi, d2, jI, up } from "./listService.js";
import { Bt } from "./nls.js";
import { Ks, Wr } from "./notification.js";
import { $j, c_e } from "./peekView.js";
import { er, jc } from "./position.js";
import { Qs, qt } from "./range.js";
import { MHe, iSt } from "./referencesModel.js";
import { PI1, ZHr, kPp } from "./referencesWidget.js";
import { Zi, ki } from "./storage_2.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { Wl } from "./ze.js";
var Vwt, U2e;
export { U2e, Vwt };
var __wakaru_zDa_initialized = false;
export function zDa() {
if (__wakaru_zDa_initialized) return;
__wakaru_zDa_initialized = true;
"use strict";
E(), qn(), Ei(), Ma(), Qe(), og(), jc(), Qs(), c_e(), xwe(), Bt(), rs(), or(), Hi(), It(), xT(), d2(), Ks(), Zi(), iSt(), PI1(), cg(), x_(), Vwt = new cn("referenceSearchVisible", !1, D(1216, null)), U2e = class {
    constructor(t, e, n, i, r, s, o, a){
        this._defaultTreeKeyboardSupport = t, this._editor = e, this._editorService = i, this._notificationService = r, this._instantiationService = s, this._storageService = o, this._configurationService = a, this._disposables = new Nt, this._requestIdPool = 0, this._ignoreModelChangeEvent = !1, this._referenceSearchVisible = Vwt.bindTo(n);
    }
    static get(t) {
        return t.getContribution(U2e.ID);
    }
    dispose() {
        this._referenceSearchVisible.reset(), this._disposables.dispose(), this._widget?.dispose(), this._model?.dispose(), this._widget = void 0, this._model = void 0;
    }
    getWidget() {
        return this._widget;
    }
    toggleWidget(t, e, n) {
        let i;
        if (this._widget && (i = this._widget.position), this.closeWidget(), i && t.containsPosition(i)) return;
        this._peekMode = n, this._referenceSearchVisible.set(!0), this._disposables.add(this._editor.onDidChangeModelLanguage(()=>{
            this.closeWidget();
        })), this._disposables.add(this._editor.onDidChangeModel(()=>{
            this._ignoreModelChangeEvent || this.closeWidget();
        }));
        const r = "peekViewLayout", s = kPp.fromJSON(this._storageService.get(r, 0, "{}"));
        this._widget = this._instantiationService.createInstance(ZHr, this._editor, this._defaultTreeKeyboardSupport, s), this._widget.setTitle(D(1217, null)), this._widget.show(t), this._disposables.add(this._widget.onDidClose(()=>{
            e.cancel(), this._widget ? (this._storageService.store(r, JSON.stringify(this._widget.layoutData), 0, 1), this._widget.isClosing || this.closeWidget(), this._widget = void 0) : this.closeWidget();
        })), this._disposables.add(this._widget.onDidSelectReference((a)=>{
            const { element: l, kind: c } = a;
            if (l) switch(c){
                case "open":
                    (a.source !== "editor" || !this._configurationService.getValue("editor.stablePeek")) && this.openReference(l, !1, !1);
                    break;
                case "side":
                    this.openReference(l, !0, !1);
                    break;
                case "goto":
                    n ? this._gotoReference(l, !0) : this.openReference(l, !1, !0);
                    break;
            }
        }));
        const o = ++this._requestIdPool;
        e.then((a)=>{
            if (o !== this._requestIdPool || !this._widget) {
                a.dispose();
                return;
            }
            return this._model?.dispose(), this._model = a, this._widget.setModel(this._model).then(()=>{
                if (this._widget && this._model && this._editor.hasModel()) {
                    this._model.isEmpty ? this._widget.setMetaTitle("") : this._widget.setMetaTitle(D(1218, null, this._model.title, this._model.references.length));
                    const l = this._editor.getModel().uri, c = new er(t.startLineNumber, t.startColumn), u = this._model.nearestReference(l, c);
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
    async goToNextOrPreviousReference(t) {
        if (!this._editor.hasModel() || !this._model || !this._widget) return;
        const e = this._widget.position;
        if (!e) return;
        const n = this._model.nearestReference(this._editor.getModel().uri, e);
        if (!n) return;
        const i = this._model.nextOrPreviousReference(n, t), r = this._editor.hasTextFocus(), s = this._widget.isPreviewEditorFocused();
        await this._widget.setSelection(i), await this._gotoReference(i, !1), r ? this._editor.focus() : this._widget && s && this._widget.focusOnPreviewEditor();
    }
    async revealReference(t) {
        !this._editor.hasModel() || !this._model || !this._widget || await this._widget.revealReference(t);
    }
    closeWidget(t = !0) {
        this._widget?.dispose(), this._model?.dispose(), this._referenceSearchVisible.reset(), this._disposables.clear(), this._widget = void 0, this._model = void 0, t && this._editor.focus(), this._requestIdPool += 1;
    }
    _gotoReference(t, e) {
        this._widget?.hide(), this._ignoreModelChangeEvent = !0;
        const n = qt.lift(t.range).collapseToStart();
        return this._editorService.openCodeEditor({
            resource: t.uri,
            options: {
                selection: n,
                selectionSource: "code.jump",
                pinned: e
            }
        }, this._editor).then((i)=>{
            if (this._ignoreModelChangeEvent = !1, !i || !this._widget) {
                this.closeWidget();
                return;
            }
            if (this._editor === i) this._widget.show(n), this._widget.focusOnReferenceTree();
            else {
                const r = U2e.get(i), s = this._model.clone();
                this.closeWidget(), i.focus(), r?.toggleWidget(n, XE((o)=>Promise.resolve(s)), this._peekMode ?? !1);
            }
        }, (i)=>{
            this._ignoreModelChangeEvent = !1, xr(i);
        });
    }
    openReference(t, e, n) {
        e || this.closeWidget();
        const { uri: i, range: r } = t;
        this._editorService.openCodeEditor({
            resource: i,
            options: {
                selection: r,
                selectionSource: "code.jump",
                pinned: n
            }
        }, this._editor, e);
    }
}, U2e.ID = "editor.contrib.referencesController", U2e = Re([
    F(2, Rr),
    F(3, Ju),
    F(4, Wr),
    F(5, dn),
    F(6, ki),
    F(7, yi)
], U2e), ja.registerCommandAndKeybindingRule({
    id: "togglePeekWidgetFocus",
    weight: 100,
    primary: Wl(bg, Ze.F2),
    mac: {
        primary: Wl(rf, Ze.F2)
    },
    when: mt.or(Vwt, $j.inPeekEditor),
    handler (t) {
        jHt(t, (e)=>{
            e.changeFocusBetweenPreviewAndReferences();
        });
    }
}), ja.registerCommandAndKeybindingRule({
    id: "goToNextReference",
    weight: 90,
    primary: Ze.F4,
    secondary: [
        Ze.F12
    ],
    when: mt.or(Vwt, $j.inPeekEditor),
    handler (t) {
        jHt(t, (e)=>{
            e.goToNextOrPreviousReference(!0);
        });
    }
}), ja.registerCommandAndKeybindingRule({
    id: "goToPreviousReference",
    weight: 90,
    primary: ut.Shift | Ze.F4,
    secondary: [
        ut.Shift | Ze.F12
    ],
    when: mt.or(Vwt, $j.inPeekEditor),
    handler (t) {
        jHt(t, (e)=>{
            e.goToNextOrPreviousReference(!1);
        });
    }
}), hs.registerCommandAlias("goToNextReferenceFromEmbeddedEditor", "goToNextReference"), hs.registerCommandAlias("goToPreviousReferenceFromEmbeddedEditor", "goToPreviousReference"), hs.registerCommandAlias("closeReferenceSearchEditor", "closeReferenceSearch"), hs.registerCommand("closeReferenceSearch", (t)=>jHt(t, (e)=>e.closeWidget())), ja.registerKeybindingRule({
    id: "closeReferenceSearch",
    weight: -1,
    primary: Ze.Escape,
    secondary: [
        ut.Shift | Ze.Escape
    ],
    when: mt.and($j.inPeekEditor, mt.not("config.editor.stablePeek"))
}), ja.registerKeybindingRule({
    id: "closeReferenceSearch",
    weight: 250,
    primary: Ze.Escape,
    secondary: [
        ut.Shift | Ze.Escape
    ],
    when: mt.and(Vwt, mt.not("config.editor.stablePeek"), mt.or(si.editorTextFocus, rW.negate()))
}), ja.registerCommandAndKeybindingRule({
    id: "revealReference",
    weight: 200,
    primary: Ze.Enter,
    mac: {
        primary: Ze.Enter,
        secondary: [
            ut.CtrlCmd | Ze.DownArrow
        ]
    },
    when: mt.and(Vwt, jI, Zoi.negate(), Qoi.negate()),
    handler (t) {
        const n = t.get(up).lastFocusedList?.getFocus();
        Array.isArray(n) && n[0] instanceof MHe && jHt(t, (i)=>i.revealReference(n[0]));
    }
}), ja.registerCommandAndKeybindingRule({
    id: "openReferenceToSide",
    weight: 100,
    primary: ut.CtrlCmd | Ze.Enter,
    mac: {
        primary: ut.WinCtrl | Ze.Enter
    },
    when: mt.and(Vwt, jI, Zoi.negate(), Qoi.negate()),
    handler (t) {
        const n = t.get(up).lastFocusedList?.getFocus();
        Array.isArray(n) && n[0] instanceof MHe && jHt(t, (i)=>i.openReference(n[0], !0, !0));
    }
}), hs.registerCommand("openReference", (t)=>{
    const n = t.get(up).lastFocusedList?.getFocus();
    Array.isArray(n) && n[0] instanceof MHe && jHt(t, (i)=>i.openReference(n[0], !1, !0));
});

}

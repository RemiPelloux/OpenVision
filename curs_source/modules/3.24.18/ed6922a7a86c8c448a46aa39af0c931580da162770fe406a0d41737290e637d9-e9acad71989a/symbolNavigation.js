import { He, Lo, S, Se, U_, bt, cn, ve, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { Ja, md } from "./codeEditorService.js";
import { At, dn, xn } from "./contextkey.js";
import { i2, yc } from "./editorExtensions.js";
import { Pn } from "./extensions.js";
import { Ze } from "./instantiation.js";
import { Pr, fe } from "./keyCodes.js";
import { no, qr } from "./keybinding.js";
import { Qr, eb } from "./keybindingsRegistry.js";
import { rt } from "./nls.js";
import { di, ji } from "./notification.js";
import { Pc, mn, vn } from "./qIc.js";
import { dt, qi } from "./range.js";
import { Ac, Li } from "./resources.js";
import { x } from "./tslib.es6.js";
var M9i, QAn, P9i, L9i;
export { L9i, M9i, P9i, QAn };
var __wakaru_dcv_initialized = false;
export function dcv() {
if (__wakaru_dcv_initialized) return;
__wakaru_dcv_initialized = true;
"use strict";
x(), bt(), Pr(), Se(), Li(), yc(), md(), qi(), rt(), dn(), Pn(), Ze(), no(), eb(), ji(), M9i = new At("hasSymbols", !1, S(1234, null)), QAn = vn("ISymbolNavigationService"), P9i = class extends we {
    constructor(e, t, n, i){
        super(), this._editorService = t, this._notificationService = n, this._keybindingService = i, this._currentModel = void 0, this._currentIdx = -1, this._currentState = this._register(new cn), this._ignoreEditorChange = !1, this._ctxHasSymbols = M9i.bindTo(e);
    }
    reset() {
        this._ctxHasSymbols.reset(), this._currentState.clear(), this._currentMessage?.close(), this._currentModel = void 0, this._currentIdx = -1;
    }
    put(e) {
        const t = e.parent.parent;
        if (t.references.length <= 1) {
            this.reset();
            return;
        }
        this._currentModel = t, this._currentIdx = t.references.indexOf(e), this._ctxHasSymbols.set(!0), this._showMessage();
        const n = new L9i(this._editorService), i = n.onDidChange((r)=>{
            if (this._ignoreEditorChange) return;
            const s = this._editorService.getActiveCodeEditor();
            if (!s) return;
            const o = s.getModel(), a = s.getPosition();
            if (!o || !a) return;
            let c = !1, l = !1;
            for (const u of t.references)if (Ac(u.uri, o.uri)) c = !0, l = l || dt.containsPosition(u.range, a);
            else if (c) break;
            (!c || !l) && this.reset();
        });
        this._currentState.value = U_(n, i);
    }
    revealNext(e) {
        if (!this._currentModel) return Promise.resolve();
        this._currentIdx += 1, this._currentIdx %= this._currentModel.references.length;
        const t = this._currentModel.references[this._currentIdx];
        return this._showMessage(), this._ignoreEditorChange = !0, this._editorService.openCodeEditor({
            resource: t.uri,
            options: {
                selection: dt.collapseToStart(t.range),
                selectionRevealType: 3
            }
        }, e).finally(()=>{
            this._ignoreEditorChange = !1;
        });
    }
    _showMessage() {
        this._currentMessage?.close();
        const e = this._keybindingService.lookupKeybinding("editor.gotoNextSymbolFromResult"), t = e ? S(1235, null, this._currentIdx + 1, this._currentModel.references.length, e.getLabel()) : S(1236, null, this._currentIdx + 1, this._currentModel.references.length);
        this._currentMessage = this._notificationService.status(t);
    }
}, P9i = ie([
    C(0, xn),
    C(1, Ja),
    C(2, di),
    C(3, qr)
], P9i), mn(QAn, P9i, 1), Pc(new class extends i2 {
    constructor(){
        super({
            id: "editor.gotoNextSymbolFromResult",
            precondition: M9i,
            kbOpts: {
                weight: 100,
                primary: fe.F12
            }
        });
    }
    runEditorCommand(e, t) {
        return e.get(QAn).revealNext(t);
    }
}), Qr.registerCommandAndKeybindingRule({
    id: "editor.gotoNextSymbolFromResult.cancel",
    weight: 100,
    when: M9i,
    primary: fe.Escape,
    handler (e) {
        e.get(QAn).reset();
    }
}), L9i = class {
    constructor(e){
        this._listener = new Map, this._disposables = new He, this._onDidChange = new ve, this.onDidChange = this._onDidChange.event, this._disposables.add(e.onCodeEditorRemove(this._onDidRemoveEditor, this)), this._disposables.add(e.onCodeEditorAdd(this._onDidAddEditor, this)), e.listCodeEditors().forEach(this._onDidAddEditor, this);
    }
    dispose() {
        this._disposables.dispose(), this._onDidChange.dispose(), Lo(this._listener.values());
    }
    _onDidAddEditor(e) {
        this._listener.set(e, U_(e.onDidChangeCursorPosition((t)=>this._onDidChange.fire({
                editor: e
            })), e.onDidChangeModelContent((t)=>this._onDidChange.fire({
                editor: e
            }))));
    }
    _onDidRemoveEditor(e) {
        this._listener.get(e)?.dispose(), this._listener.delete(e);
    }
}, L9i = ie([
    C(0, Ja)
], L9i);

}

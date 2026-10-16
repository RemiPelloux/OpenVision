import { D, Gt, N1, Nc, Nt, Qe, Vn, st, tt } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { Ju, og } from "./codeEditorService.js";
import { Hi, Rr, cn } from "./contextkey.js";
import { Nj, Ud } from "./editorExtensions.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { Ma, Ze } from "./keyCodes.js";
import { Al, ru } from "./keybinding.js";
import { ja, xT } from "./keybindingsRegistry.js";
import { Bt } from "./nls.js";
import { Ks, Wr } from "./notification.js";
import { Qs, qt } from "./range.js";
import { Lr, gu } from "./resources.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { Zc } from "./ze.js";
var QHr, zbi, JHr, eWr;
export { JHr, QHr, eWr, zbi };
var __wakaru_MI1_initialized = false;
export function MI1() {
if (__wakaru_MI1_initialized) return;
__wakaru_MI1_initialized = true;
"use strict";
E(), Gt(), Ma(), Qe(), Lr(), Ud(), og(), Qs(), Bt(), Hi(), Rn(), It(), ru(), xT(), Ks(), QHr = new cn("hasSymbols", !1, D(1234, null)), zbi = jn("ISymbolNavigationService"), JHr = class extends st {
    constructor(t, e, n, i){
        super(), this._editorService = e, this._notificationService = n, this._keybindingService = i, this._currentModel = void 0, this._currentIdx = -1, this._currentState = this._register(new Vn), this._ignoreEditorChange = !1, this._ctxHasSymbols = QHr.bindTo(t);
    }
    reset() {
        this._ctxHasSymbols.reset(), this._currentState.clear(), this._currentMessage?.close(), this._currentModel = void 0, this._currentIdx = -1;
    }
    put(t) {
        const e = t.parent.parent;
        if (e.references.length <= 1) {
            this.reset();
            return;
        }
        this._currentModel = e, this._currentIdx = e.references.indexOf(t), this._ctxHasSymbols.set(!0), this._showMessage();
        const n = new eWr(this._editorService), i = n.onDidChange((r)=>{
            if (this._ignoreEditorChange) return;
            const s = this._editorService.getActiveCodeEditor();
            if (!s) return;
            const o = s.getModel(), a = s.getPosition();
            if (!o || !a) return;
            let l = !1, c = !1;
            for (const u of e.references)if (gu(u.uri, o.uri)) l = !0, c = c || qt.containsPosition(u.range, a);
            else if (l) break;
            (!l || !c) && this.reset();
        });
        this._currentState.value = N1(n, i);
    }
    revealNext(t) {
        if (!this._currentModel) return Promise.resolve();
        this._currentIdx += 1, this._currentIdx %= this._currentModel.references.length;
        const e = this._currentModel.references[this._currentIdx];
        return this._showMessage(), this._ignoreEditorChange = !0, this._editorService.openCodeEditor({
            resource: e.uri,
            options: {
                selection: qt.collapseToStart(e.range),
                selectionRevealType: 3
            }
        }, t).finally(()=>{
            this._ignoreEditorChange = !1;
        });
    }
    _showMessage() {
        this._currentMessage?.close();
        const t = this._keybindingService.lookupKeybinding("editor.gotoNextSymbolFromResult"), e = t ? D(1235, null, this._currentIdx + 1, this._currentModel.references.length, t.getLabel()) : D(1236, null, this._currentIdx + 1, this._currentModel.references.length);
        this._currentMessage = this._notificationService.status(e);
    }
}, JHr = Re([
    F(0, Rr),
    F(1, Ju),
    F(2, Wr),
    F(3, Al)
], JHr), bn(zbi, JHr, 1), Zc(new class extends Nj {
    constructor(){
        super({
            id: "editor.gotoNextSymbolFromResult",
            precondition: QHr,
            kbOpts: {
                weight: 100,
                primary: Ze.F12
            }
        });
    }
    runEditorCommand(t, e) {
        return t.get(zbi).revealNext(e);
    }
}), ja.registerCommandAndKeybindingRule({
    id: "editor.gotoNextSymbolFromResult.cancel",
    weight: 100,
    when: QHr,
    primary: Ze.Escape,
    handler (t) {
        t.get(zbi).reset();
    }
}), eWr = class {
    constructor(t){
        this._listener = new Map, this._disposables = new Nt, this._onDidChange = new tt, this.onDidChange = this._onDidChange.event, this._disposables.add(t.onCodeEditorRemove(this._onDidRemoveEditor, this)), this._disposables.add(t.onCodeEditorAdd(this._onDidAddEditor, this)), t.listCodeEditors().forEach(this._onDidAddEditor, this);
    }
    dispose() {
        this._disposables.dispose(), this._onDidChange.dispose(), Nc(this._listener.values());
    }
    _onDidAddEditor(t) {
        this._listener.set(t, N1(t.onDidChangeCursorPosition((e)=>this._onDidChange.fire({
                editor: t
            })), t.onDidChangeModelContent((e)=>this._onDidChange.fire({
                editor: t
            }))));
    }
    _onDidRemoveEditor(t) {
        this._listener.get(t)?.dispose(), this._listener.delete(t);
    }
}, eWr = Re([
    F(0, Ju)
], eWr);

}

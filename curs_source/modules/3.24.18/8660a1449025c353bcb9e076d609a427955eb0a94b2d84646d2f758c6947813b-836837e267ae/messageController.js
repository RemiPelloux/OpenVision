import { D, Gt, Nt, Pn, Qe, Vn, en } from "./Iwo.js";
import { $3 } from "./aria.js";
import { Hi, Rr, cn } from "./contextkey.js";
import { Hn, Pr } from "./dom_2.js";
import { Nj, Ud } from "./editorExtensions.js";
import { Ek } from "./htmlContent.js";
import { Ma, Ze } from "./keyCodes.js";
import { kBt } from "./markdownRenderer.js";
import { Coe } from "./markdownRenderer_2.js";
import { FLy } from "./messageController.css";
import { Bt } from "./nls.js";
import { kc, qc } from "./opener.js";
import { Qs, qt } from "./range.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { Dj, JE, RC, Zc, li, qsi, sv, uEr, vO } from "./ze.js";
var _z, Wzd, Vqo;
export { Vqo, Wzd, _z };
var __wakaru_Moi_initialized = false;
export function Moi() {
if (__wakaru_Moi_initialized) return;
__wakaru_Moi_initialized = true;
"use strict";
E(), kBt(), $3(), Gt(), Ek(), Ma(), Qe(), FLy(), Ud(), Qs(), Coe(), Bt(), Hi(), qc(), Hn(), _z = class {
    constructor(t, e, n){
        this._openerService = n, this._messageWidget = new Vn, this._messageListeners = new Nt, this._mouseOverMessage = !1, this._editor = t, this._visible = _z.MESSAGE_VISIBLE.bindTo(e);
    }
    static get(t) {
        return t.getContribution(_z.ID);
    }
    dispose() {
        this._message?.dispose(), this._messageListeners.dispose(), this._messageWidget.dispose(), this._visible.reset();
    }
    isVisible() {
        return this._visible.get();
    }
    showMessage(t, e) {
        Dj(vO(t) ? t.value : t), this._visible.set(!0), this._messageWidget.clear(), this._messageListeners.clear(), this._message = vO(t) ? qsi(t, {
            actionHandler: {
                callback: (i)=>{
                    this.closeMessage(), uEr(this._openerService, i, vO(t) ? t.isTrusted : void 0);
                },
                disposables: this._messageListeners
            }
        }) : void 0, this._messageWidget.value = new Vqo(this._editor, e, typeof t == "string" ? t : this._message.element), this._messageListeners.add(en.debounce(this._editor.onDidBlurEditorText, (i, r)=>r, 0)(()=>{
            this._mouseOverMessage || this._messageWidget.value && JE(RC(), this._messageWidget.value.getDomNode()) || this.closeMessage();
        })), this._messageListeners.add(this._editor.onDidChangeCursorPosition(()=>this.closeMessage())), this._messageListeners.add(this._editor.onDidDispose(()=>this.closeMessage())), this._messageListeners.add(this._editor.onDidChangeModel(()=>this.closeMessage())), this._messageListeners.add(li(this._messageWidget.value.getDomNode(), Pr.MOUSE_ENTER, ()=>this._mouseOverMessage = !0, !0)), this._messageListeners.add(li(this._messageWidget.value.getDomNode(), Pr.MOUSE_LEAVE, ()=>this._mouseOverMessage = !1, !0));
        let n;
        this._messageListeners.add(this._editor.onMouseMove((i)=>{
            i.target.position && (n ? n.containsPosition(i.target.position) || this.closeMessage() : n = new qt(e.lineNumber - 3, 1, i.target.position.lineNumber + 3, 1));
        }));
    }
    closeMessage() {
        this._visible.reset(), this._messageListeners.clear();
        const t = this._messageWidget.clearAndLeak();
        t && this._messageListeners.add(Vqo.fadeOut(t));
    }
}, _z.ID = "editor.contrib.messageController", _z.MESSAGE_VISIBLE = new cn("messageVisible", !1, D(1429, null)), _z = Re([
    F(1, Rr),
    F(2, kc)
], _z), Wzd = Nj.bindToContribution(_z.get), Zc(new Wzd({
    id: "leaveEditorMessage",
    precondition: _z.MESSAGE_VISIBLE,
    handler: (t)=>t.closeMessage(),
    kbOpts: {
        weight: 130,
        primary: Ze.Escape
    }
})), Vqo = class {
    constructor(t, { lineNumber: e, column: n }, i){
        this.allowEditorOverflow = !0, this.suppressMouseDown = !1, this._editor = t, this._editor.revealLinesInCenterIfOutsideViewport(e, e, 0), this._position = {
            lineNumber: e,
            column: n
        }, this._domNode = document.createElement("div"), this._domNode.classList.add("monaco-editor-overlaymessage"), this._domNode.style.marginLeft = "-6px";
        const r = document.createElement("div");
        r.classList.add("anchor", "top"), this._domNode.appendChild(r);
        const s = document.createElement("div");
        typeof i == "string" ? (s.classList.add("message"), s.textContent = i) : (i.classList.add("message"), s.appendChild(i)), this._domNode.appendChild(s);
        const o = document.createElement("div");
        o.classList.add("anchor", "below"), this._domNode.appendChild(o), this._editor.addContentWidget(this), this._domNode.classList.add("fadeIn");
    }
    static fadeOut(t) {
        const e = new Nt;
        e.add(Pn(()=>t.dispose())), e.add(li(t.getDomNode(), "animationend", ()=>e.dispose()));
        const n = setTimeout(()=>e.dispose(), 110);
        return e.add(Pn(()=>clearTimeout(n))), t.getDomNode().classList.add("fadeOut"), e;
    }
    dispose() {
        this._editor.removeContentWidget(this);
    }
    getId() {
        return "messageoverlay";
    }
    getDomNode() {
        return this._domNode;
    }
    getPosition() {
        return {
            position: this._position,
            preference: [
                1,
                2
            ],
            positionAffinity: 1
        };
    }
    afterRender(t) {
        this._domNode.classList.toggle("below", t === 2);
    }
}, sv(_z.ID, _z, 4);

}

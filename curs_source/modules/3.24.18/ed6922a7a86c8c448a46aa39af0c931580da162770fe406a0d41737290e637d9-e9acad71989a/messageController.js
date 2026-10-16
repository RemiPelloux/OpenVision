import { Ct, He, S, Se, bt, cn, rn } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { hS } from "./aria.js";
import { At, dn, xn } from "./contextkey.js";
import { Fn, en } from "./dom_2.js";
import { i2, yc } from "./editorExtensions.js";
import { _g } from "./htmlContent.js";
import { Pr, fe } from "./keyCodes.js";
import { G7 } from "./markdownRenderer.js";
import { g5 } from "./markdownRenderer_2.js";
import { FSg } from "./messageController.css";
import { rt } from "./nls.js";
import { eo, ko } from "./opener.js";
import { $Ft, Mwe, Pc, WS, Xt, YT, iw, jy, pp } from "./qIc.js";
import { dt, qi } from "./range.js";
import { x } from "./tslib.es6.js";
var d2, o$c, Ris;
export { Ris, d2, o$c };
var __wakaru_mKe_initialized = false;
export function mKe() {
if (__wakaru_mKe_initialized) return;
__wakaru_mKe_initialized = true;
"use strict";
x(), G7(), hS(), bt(), _g(), Pr(), Se(), FSg(), yc(), qi(), g5(), rt(), dn(), ko(), en(), d2 = class {
    constructor(e, t, n){
        this._openerService = n, this._messageWidget = new cn, this._messageListeners = new He, this._mouseOverMessage = !1, this._editor = e, this._visible = d2.MESSAGE_VISIBLE.bindTo(t);
    }
    static get(e) {
        return e.getContribution(d2.ID);
    }
    dispose() {
        this._message?.dispose(), this._messageListeners.dispose(), this._messageWidget.dispose(), this._visible.reset();
    }
    isVisible() {
        return this._visible.get();
    }
    showMessage(e, t) {
        jy(YT(e) ? e.value : e), this._visible.set(!0), this._messageWidget.clear(), this._messageListeners.clear(), this._message = YT(e) ? Mwe(e, {
            actionHandler: {
                callback: (i)=>{
                    this.closeMessage(), $Ft(this._openerService, i, YT(e) ? e.isTrusted : void 0);
                },
                disposables: this._messageListeners
            }
        }) : void 0, this._messageWidget.value = new Ris(this._editor, t, typeof e == "string" ? e : this._message.element), this._messageListeners.add(Ct.debounce(this._editor.onDidBlurEditorText, (i, r)=>r, 0)(()=>{
            this._mouseOverMessage || this._messageWidget.value && iw(WS(), this._messageWidget.value.getDomNode()) || this.closeMessage();
        })), this._messageListeners.add(this._editor.onDidChangeCursorPosition(()=>this.closeMessage())), this._messageListeners.add(this._editor.onDidDispose(()=>this.closeMessage())), this._messageListeners.add(this._editor.onDidChangeModel(()=>this.closeMessage())), this._messageListeners.add(Xt(this._messageWidget.value.getDomNode(), Fn.MOUSE_ENTER, ()=>this._mouseOverMessage = !0, !0)), this._messageListeners.add(Xt(this._messageWidget.value.getDomNode(), Fn.MOUSE_LEAVE, ()=>this._mouseOverMessage = !1, !0));
        let n;
        this._messageListeners.add(this._editor.onMouseMove((i)=>{
            i.target.position && (n ? n.containsPosition(i.target.position) || this.closeMessage() : n = new dt(t.lineNumber - 3, 1, i.target.position.lineNumber + 3, 1));
        }));
    }
    closeMessage() {
        this._visible.reset(), this._messageListeners.clear();
        const e = this._messageWidget.clearAndLeak();
        e && this._messageListeners.add(Ris.fadeOut(e));
    }
}, d2.ID = "editor.contrib.messageController", d2.MESSAGE_VISIBLE = new At("messageVisible", !1, S(1429, null)), d2 = ie([
    C(1, xn),
    C(2, eo)
], d2), o$c = i2.bindToContribution(d2.get), Pc(new o$c({
    id: "leaveEditorMessage",
    precondition: d2.MESSAGE_VISIBLE,
    handler: (e)=>e.closeMessage(),
    kbOpts: {
        weight: 130,
        primary: fe.Escape
    }
})), Ris = class {
    constructor(e, { lineNumber: t, column: n }, i){
        this.allowEditorOverflow = !0, this.suppressMouseDown = !1, this._editor = e, this._editor.revealLinesInCenterIfOutsideViewport(t, t, 0), this._position = {
            lineNumber: t,
            column: n
        }, this._domNode = document.createElement("div"), this._domNode.classList.add("monaco-editor-overlaymessage"), this._domNode.style.marginLeft = "-6px";
        const r = document.createElement("div");
        r.classList.add("anchor", "top"), this._domNode.appendChild(r);
        const s = document.createElement("div");
        typeof i == "string" ? (s.classList.add("message"), s.textContent = i) : (i.classList.add("message"), s.appendChild(i)), this._domNode.appendChild(s);
        const o = document.createElement("div");
        o.classList.add("anchor", "below"), this._domNode.appendChild(o), this._editor.addContentWidget(this), this._domNode.classList.add("fadeIn");
    }
    static fadeOut(e) {
        const t = new He;
        t.add(rn(()=>e.dispose())), t.add(Xt(e.getDomNode(), "animationend", ()=>t.dispose()));
        const n = setTimeout(()=>t.dispose(), 110);
        return t.add(rn(()=>clearTimeout(n))), e.getDomNode().classList.add("fadeOut"), t;
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
    afterRender(e) {
        this._domNode.classList.toggle("below", e === 2);
    }
}, pp(d2.ID, d2, 4);

}

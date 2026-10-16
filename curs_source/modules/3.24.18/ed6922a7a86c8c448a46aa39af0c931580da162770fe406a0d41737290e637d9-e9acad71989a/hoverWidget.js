import { Se, we } from "./HVr.js";
import { Fn, en } from "./dom_2.js";
import { SSg } from "./hoverWidget.css";
import { gu, jg } from "./keyboardEvent.js";
import { rt } from "./nls.js";
import { Ve, Xt, Ye } from "./qIc.js";
import { DO, mA } from "./scrollableElement.js";
import { x } from "./tslib.es6.js";
var Uvn, wl, lyi, tis, nis, iis;
export { Uvn, iis, lyi, nis, tis, wl };
var __wakaru_Tb_initialized = false;
export function Tb() {
if (__wakaru_Tb_initialized) return;
__wakaru_Tb_initialized = true;
"use strict";
x(), en(), jg(), mA(), Se(), SSg(), rt(), Uvn = Ve, wl = ((e)=>(e[e.LEFT = 0] = "LEFT", e[e.RIGHT = 1] = "RIGHT", e[e.BELOW = 2] = "BELOW", e[e.ABOVE = 3] = "ABOVE", e))(wl || {}), lyi = class extends we {
    constructor(e){
        super(), this.containerDomNode = document.createElement("div"), this.containerDomNode.className = "monaco-hover", this.containerDomNode.classList.toggle("fade-in", !!e), this.containerDomNode.tabIndex = 0, this.containerDomNode.setAttribute("role", "tooltip"), this.contentsDomNode = document.createElement("div"), this.contentsDomNode.className = "monaco-hover-content", this.scrollbar = this._register(new DO(this.contentsDomNode, {
            consumeMouseWheelIfScrollbarIsNeeded: !0
        })), this.containerDomNode.appendChild(this.scrollbar.getDomNode());
    }
    onContentsChanged() {
        this.scrollbar.scanDomNode();
    }
}, tis = class Gkm extends we {
    static render(t, n, i) {
        return new Gkm(t, n, i);
    }
    constructor(t, n, i){
        super(), this.actionLabel = n.label, this.actionKeybindingLabel = i, this.actionContainer = Ye(t, Uvn("div.action-container")), this.actionContainer.setAttribute("tabindex", "0"), this.action = Ye(this.actionContainer, Uvn("a.action")), this.action.setAttribute("role", "button"), n.iconClass && Ye(this.action, Uvn(`span.icon.${n.iconClass}`)), this.actionRenderedLabel = i ? `${n.label} (${i})` : n.label;
        const r = Ye(this.action, Uvn("span"));
        r.textContent = this.actionRenderedLabel, this._store.add(new nis(this.actionContainer, n.run)), this._store.add(new iis(this.actionContainer, n.run, [
            3,
            10
        ])), this.setEnabled(!0);
    }
    setEnabled(t) {
        t ? (this.actionContainer.classList.remove("disabled"), this.actionContainer.removeAttribute("aria-disabled")) : (this.actionContainer.classList.add("disabled"), this.actionContainer.setAttribute("aria-disabled", "true"));
    }
}, nis = class extends we {
    constructor(e, t){
        super(), this._register(Xt(e, Fn.CLICK, (n)=>{
            n.stopPropagation(), n.preventDefault(), t(e);
        }));
    }
}, iis = class extends we {
    constructor(e, t, n){
        super(), this._register(Xt(e, Fn.KEY_DOWN, (i)=>{
            const r = new gu(i);
            n.some((s)=>r.equals(s)) && (i.stopPropagation(), i.preventDefault(), t(e));
        }));
    }
};

}

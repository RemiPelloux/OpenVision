import { Qe, st } from "./Iwo.js";
import { Hn, Pr } from "./dom_2.js";
import { gLy } from "./hoverWidget.css";
import { nT, rv } from "./keyboardEvent.js";
import { Bt } from "./nls.js";
import { E7, mwe } from "./scrollableElement.js";
import { E } from "./tslib.es6.js";
import { Ii, fr, li } from "./ze.js";
var moi, Bu, jTr, oqo, aqo, lqo;
export { Bu, aqo, jTr, lqo, moi, oqo };
var __wakaru_Iw_initialized = false;
export function Iw() {
if (__wakaru_Iw_initialized) return;
__wakaru_Iw_initialized = true;
"use strict";
E(), Hn(), nT(), E7(), Qe(), gLy(), Bt(), moi = Ii, Bu = ((t)=>(t[t.LEFT = 0] = "LEFT", t[t.RIGHT = 1] = "RIGHT", t[t.BELOW = 2] = "BELOW", t[t.ABOVE = 3] = "ABOVE", t))(Bu || {}), jTr = class extends st {
    constructor(t){
        super(), this.containerDomNode = document.createElement("div"), this.containerDomNode.className = "monaco-hover", this.containerDomNode.classList.toggle("fade-in", !!t), this.containerDomNode.tabIndex = 0, this.containerDomNode.setAttribute("role", "tooltip"), this.contentsDomNode = document.createElement("div"), this.contentsDomNode.className = "monaco-hover-content", this.scrollbar = this._register(new mwe(this.contentsDomNode, {
            consumeMouseWheelIfScrollbarIsNeeded: !0
        })), this.containerDomNode.appendChild(this.scrollbar.getDomNode());
    }
    onContentsChanged() {
        this.scrollbar.scanDomNode();
    }
}, oqo = class mRb extends st {
    static render(e, n, i) {
        return new mRb(e, n, i);
    }
    constructor(e, n, i){
        super(), this.actionLabel = n.label, this.actionKeybindingLabel = i, this.actionContainer = fr(e, moi("div.action-container")), this.actionContainer.setAttribute("tabindex", "0"), this.action = fr(this.actionContainer, moi("a.action")), this.action.setAttribute("role", "button"), n.iconClass && fr(this.action, moi(`span.icon.${n.iconClass}`)), this.actionRenderedLabel = i ? `${n.label} (${i})` : n.label;
        const r = fr(this.action, moi("span"));
        r.textContent = this.actionRenderedLabel, this._store.add(new aqo(this.actionContainer, n.run)), this._store.add(new lqo(this.actionContainer, n.run, [
            3,
            10
        ])), this.setEnabled(!0);
    }
    setEnabled(e) {
        e ? (this.actionContainer.classList.remove("disabled"), this.actionContainer.removeAttribute("aria-disabled")) : (this.actionContainer.classList.add("disabled"), this.actionContainer.setAttribute("aria-disabled", "true"));
    }
}, aqo = class extends st {
    constructor(t, e){
        super(), this._register(li(t, Pr.CLICK, (n)=>{
            n.stopPropagation(), n.preventDefault(), e(t);
        }));
    }
}, lqo = class extends st {
    constructor(t, e, n){
        super(), this._register(li(t, Pr.KEY_DOWN, (i)=>{
            const r = new rv(i);
            n.some((s)=>r.equals(s)) && (i.stopPropagation(), i.preventDefault(), e(t));
        }));
    }
};

}

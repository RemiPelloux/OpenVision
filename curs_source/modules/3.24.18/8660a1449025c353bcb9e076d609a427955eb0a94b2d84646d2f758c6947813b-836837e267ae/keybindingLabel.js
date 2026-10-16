import { D, Qe, st } from "./Iwo.js";
import { Hn } from "./dom_2.js";
import { HLy } from "./keybindingLabel.css";
import { ABt, xBt } from "./keybindingLabels.js";
import { Bt } from "./nls.js";
import { cp } from "./objects.js";
import { E } from "./tslib.es6.js";
import { Fj, Ii, Rp, c2, fr, gz, sR, uy } from "./ze.js";
var Doi, Xqo, Vyt;
export { Doi, Vyt, Xqo };
var __wakaru_OBt_initialized = false;
export function OBt() {
if (__wakaru_OBt_initialized) return;
__wakaru_OBt_initialized = true;
"use strict";
E(), Hn(), gz(), sR(), ABt(), Qe(), cp(), HLy(), Bt(), Doi = Ii, Xqo = {
    keybindingLabelBackground: void 0,
    keybindingLabelForeground: void 0,
    keybindingLabelBorder: void 0,
    keybindingLabelBottomBorder: void 0,
    keybindingLabelShadow: void 0
}, Vyt = class ARb extends st {
    constructor(e, n, i){
        super(), this.os = n, this.keyElements = new Set, this.options = i || Object.create(null);
        const r = this.options.keybindingLabelForeground;
        this.domNode = fr(e, Doi(".monaco-keybinding")), r && (this.domNode.style.color = r), this.hover = this._register(Fj().setupManagedHover(c2("mouse"), this.domNode, "")), this.didEverRender = !1, e.appendChild(this.domNode);
    }
    get element() {
        return this.domNode;
    }
    set(e, n) {
        this.didEverRender && this.keybinding === e && ARb.areSame(this.matches, n) || (this.keybinding = e, this.matches = n, this.render());
    }
    render() {
        if (this.clear(), this.keybinding) {
            const e = this.keybinding.getChords();
            e[0] && this.renderChord(this.domNode, e[0], this.matches ? this.matches.firstPart : null);
            for(let i = 1; i < e.length; i++)fr(this.domNode, Doi("span.monaco-keybinding-key-chord-separator", void 0, " ")), this.renderChord(this.domNode, e[i], this.matches ? this.matches.chordPart : null);
            const n = this.options.disableTitle ?? !1 ? void 0 : this.keybinding.getAriaLabel() || void 0;
            this.hover.update(n), this.domNode.setAttribute("aria-label", n || "");
        } else this.options && this.options.renderUnboundKeybindings && this.renderUnbound(this.domNode);
        this.didEverRender = !0;
    }
    clear() {
        uy(this.domNode), this.keyElements.clear();
    }
    renderChord(e, n, i) {
        const r = xBt.modifierLabels[this.os];
        n.ctrlKey && this.renderKey(e, r.ctrlKey, !!i?.ctrlKey, r.separator), n.shiftKey && this.renderKey(e, r.shiftKey, !!i?.shiftKey, r.separator), n.altKey && this.renderKey(e, r.altKey, !!i?.altKey, r.separator), n.metaKey && this.renderKey(e, r.metaKey, !!i?.metaKey, r.separator);
        const s = n.keyLabel;
        s && this.renderKey(e, s, !!i?.keyCode, "");
    }
    renderKey(e, n, i, r) {
        fr(e, this.createKeyElement(n, i ? ".highlight" : "")), r && fr(e, Doi("span.monaco-keybinding-key-separator", void 0, r));
    }
    renderUnbound(e) {
        fr(e, this.createKeyElement(D(25, null)));
    }
    createKeyElement(e, n = "") {
        const i = Doi("span.monaco-keybinding-key" + n, void 0, e);
        return this.keyElements.add(i), this.options.keybindingLabelBackground && (i.style.backgroundColor = this.options.keybindingLabelBackground), this.options.keybindingLabelBorder && (i.style.borderColor = this.options.keybindingLabelBorder), this.options.keybindingLabelBottomBorder && (i.style.borderBottomColor = this.options.keybindingLabelBottomBorder), this.options.keybindingLabelShadow && (i.style.boxShadow = `inset 0 -1px 0 ${this.options.keybindingLabelShadow}`), i;
    }
    static areSame(e, n) {
        return e === n || !e && !n ? !0 : !!e && !!n && Rp(e.firstPart, n.firstPart) && Rp(e.chordPart, n.chordPart);
    }
};

}

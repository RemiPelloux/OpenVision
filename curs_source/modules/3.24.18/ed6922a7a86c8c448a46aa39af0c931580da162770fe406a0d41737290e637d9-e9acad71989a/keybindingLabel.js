import { S, Se, we } from "./HVr.js";
import { en } from "./dom_2.js";
import { $Sg } from "./keybindingLabel.css";
import { amt, cmt } from "./keybindingLabels.js";
import { rt } from "./nls.js";
import { bu } from "./objects.js";
import { $f, Fd, V7, Ve, Ye, ih, p5, yh } from "./qIc.js";
import { x } from "./tslib.es6.js";
var Yvn, Dis, tfe;
export { Dis, Yvn, tfe };
var __wakaru_$we_initialized = false;
export function $we() {
if (__wakaru_$we_initialized) return;
__wakaru_$we_initialized = true;
"use strict";
x(), en(), V7(), $f(), cmt(), Se(), bu(), $Sg(), rt(), Yvn = Ve, Dis = {
    keybindingLabelBackground: void 0,
    keybindingLabelForeground: void 0,
    keybindingLabelBorder: void 0,
    keybindingLabelBottomBorder: void 0,
    keybindingLabelShadow: void 0
}, tfe = class Kkm extends we {
    constructor(t, n, i){
        super(), this.os = n, this.keyElements = new Set, this.options = i || Object.create(null);
        const r = this.options.keybindingLabelForeground;
        this.domNode = Ye(t, Yvn(".monaco-keybinding")), r && (this.domNode.style.color = r), this.hover = this._register(p5().setupManagedHover(ih("mouse"), this.domNode, "")), this.didEverRender = !1, t.appendChild(this.domNode);
    }
    get element() {
        return this.domNode;
    }
    set(t, n) {
        this.didEverRender && this.keybinding === t && Kkm.areSame(this.matches, n) || (this.keybinding = t, this.matches = n, this.render());
    }
    render() {
        if (this.clear(), this.keybinding) {
            const t = this.keybinding.getChords();
            t[0] && this.renderChord(this.domNode, t[0], this.matches ? this.matches.firstPart : null);
            for(let i = 1; i < t.length; i++)Ye(this.domNode, Yvn("span.monaco-keybinding-key-chord-separator", void 0, " ")), this.renderChord(this.domNode, t[i], this.matches ? this.matches.chordPart : null);
            const n = this.options.disableTitle ?? !1 ? void 0 : this.keybinding.getAriaLabel() || void 0;
            this.hover.update(n), this.domNode.setAttribute("aria-label", n || "");
        } else this.options && this.options.renderUnboundKeybindings && this.renderUnbound(this.domNode);
        this.didEverRender = !0;
    }
    clear() {
        Fd(this.domNode), this.keyElements.clear();
    }
    renderChord(t, n, i) {
        const r = amt.modifierLabels[this.os];
        n.ctrlKey && this.renderKey(t, r.ctrlKey, !!i?.ctrlKey, r.separator), n.shiftKey && this.renderKey(t, r.shiftKey, !!i?.shiftKey, r.separator), n.altKey && this.renderKey(t, r.altKey, !!i?.altKey, r.separator), n.metaKey && this.renderKey(t, r.metaKey, !!i?.metaKey, r.separator);
        const s = n.keyLabel;
        s && this.renderKey(t, s, !!i?.keyCode, "");
    }
    renderKey(t, n, i, r) {
        Ye(t, this.createKeyElement(n, i ? ".highlight" : "")), r && Ye(t, Yvn("span.monaco-keybinding-key-separator", void 0, r));
    }
    renderUnbound(t) {
        Ye(t, this.createKeyElement(S(25, null)));
    }
    createKeyElement(t, n = "") {
        const i = Yvn("span.monaco-keybinding-key" + n, void 0, t);
        return this.keyElements.add(i), this.options.keybindingLabelBackground && (i.style.backgroundColor = this.options.keybindingLabelBackground), this.options.keybindingLabelBorder && (i.style.borderColor = this.options.keybindingLabelBorder), this.options.keybindingLabelBottomBorder && (i.style.borderBottomColor = this.options.keybindingLabelBottomBorder), this.options.keybindingLabelShadow && (i.style.boxShadow = `inset 0 -1px 0 ${this.options.keybindingLabelShadow}`), i;
    }
    static areSame(t, n) {
        return t === n || !t && !n ? !0 : !!t && !!n && yh(t.firstPart, n.firstPart) && yh(t.chordPart, n.chordPart);
    }
};

}

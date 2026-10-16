import { D, Di, Gt, Hg, Nt, Pn, Qe, Wd, st, tt } from "./Iwo.js";
import { $3 } from "./aria.js";
import { I_, qn } from "./async.js";
import { Ap } from "./colorRegistry.js";
import { aL, pf } from "./contextView.js";
import { Hi, Rr } from "./contextkey.js";
import { CM, rRe, yoi } from "./defaultStyles.js";
import { Hn, Pr, nd } from "./dom_2.js";
import { EQ, jAe, jbt } from "./editorColors.js";
import { i6 } from "./fastDomNode.js";
import { It, dn } from "./instantiation.js";
import { Ma, Ze } from "./keyCodes.js";
import { Al, ru } from "./keybinding.js";
import { OBt, Vyt } from "./keybindingLabel.js";
import { u6k } from "./keybindings.css";
import { nT, rv } from "./keyboardEvent.js";
import { Bt } from "./nls.js";
import { _Jg, dgs } from "./preferencesWidgets.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { CY, k4 } from "./widget.js";
import { Dj, Ew, Ii, Xa, fr, li, uy } from "./ze.js";
var hgs, sBe, BPn;
export { BPn, hgs, sBe };
var __wakaru_bJg_initialized = false;
export function bJg() {
if (__wakaru_bJg_initialized) return;
__wakaru_bJg_initialized = true;
"use strict";
E(), u6k(), Bt(), Di(), Qe(), Gt(), OBt(), CY(), Ma(), Hn(), $3(), nT(), i6(), ru(), pf(), It(), Ap(), _Jg(), qn(), Hi(), CM(), hgs = class extends dgs {
    constructor(t, e, n, i, r, s){
        super(t, e, n, i, r, s), this.recordDisposables = this._register(new Nt), this._onKeybinding = this._register(new tt), this.onKeybinding = this._onKeybinding.event, this._onEnter = this._register(new tt), this.onEnter = this._onEnter.event, this._onEscape = this._register(new tt), this.onEscape = this._onEscape.event, this._onBlur = this._register(new tt), this.onBlur = this._onBlur.event, this._register(Pn(()=>this.stopRecordingKeys())), this._chords = null, this._inputValue = "";
    }
    clear() {
        this._chords = null, super.clear();
    }
    startRecordingKeys() {
        this.recordDisposables.add(li(this.inputBox.inputElement, Pr.KEY_DOWN, (t)=>this._onKeyDown(new rv(t)))), this.recordDisposables.add(li(this.inputBox.inputElement, Pr.BLUR, ()=>this._onBlur.fire())), this.recordDisposables.add(li(this.inputBox.inputElement, Pr.INPUT, ()=>{
            this.setInputValue(this._inputValue);
        }));
    }
    stopRecordingKeys() {
        this._chords = null, this.recordDisposables.clear();
    }
    setInputValue(t) {
        this._inputValue = t, this.inputBox.value = this._inputValue;
    }
    _onKeyDown(t) {
        if (t.preventDefault(), t.stopPropagation(), !this.options.recordEnter && t.equals(Ze.Enter)) {
            this._onEnter.fire();
            return;
        }
        if (t.equals(Ze.Escape)) {
            this._onEscape.fire();
            return;
        }
        this.printKeybinding(t);
    }
    printKeybinding(t) {
        const e = this.keybindingService.resolveKeyboardEvent(t), n = `code: ${t.browserEvent.code}, keyCode: ${t.browserEvent.keyCode}, key: ${t.browserEvent.key} => UI: ${e.getAriaLabel()}, user settings: ${e.getUserSettingsLabel()}, dispatch: ${e.getDispatchChords()[0]}`, i = this.options;
        this._chords || (this._chords = []), this._chords.length > 0 && this._chords[this._chords.length - 1].getDispatchChords()[0] === null ? this._chords[this._chords.length - 1] = e : (this._chords.length === 2 && (this._chords = []), this._chords.push(e));
        const s = this._chords.map((o)=>o.getUserSettingsLabel() || "").join(" ");
        this.setInputValue(i.quoteRecordedKeys ? `"${s}"` : s), this.inputBox.inputElement.title = n, this._onKeybinding.fire(this._chords);
    }
}, hgs = Re([
    F(2, aL),
    F(3, dn),
    F(4, Rr),
    F(5, Al)
], hgs), sBe = class extends k4 {
    constructor(t, e, n){
        super(), this._keybindingDisposables = this._register(new Nt), this._chords = null, this._isVisible = !1, this._confirmOnBlur = !1, this._onHide = this._register(new tt), this._onDidChange = this._register(new tt), this.onDidChange = this._onDidChange.event, this._onShowExistingKeybindings = this._register(new tt), this.onShowExistingKeybidings = this._onShowExistingKeybindings.event, e && typeof e == "object" && "confirmOnBlur" in e && (this._confirmOnBlur = !!e.confirmOnBlur);
        const i = typeof e == "function" ? e : n;
        this._domNode = Ew(document.createElement("div")), this._domNode.setDisplay("none"), this._domNode.setClassName("defineKeybindingWidget"), this._domNode.setWidth(sBe.WIDTH), this._domNode.setHeight(sBe.HEIGHT);
        const r = D(8527, null);
        fr(this._domNode.domNode, Ii(".message", void 0, r)), this._domNode.domNode.style.backgroundColor = Xa(EQ), this._domNode.domNode.style.color = Xa(jbt), this._domNode.domNode.style.boxShadow = `0 2px 8px ${Xa(jAe)}`, this._keybindingInputWidget = this._register(i.createInstance(hgs, this._domNode.domNode, {
            ariaLabel: r,
            history: new Set([]),
            inputBoxStyles: rRe
        })), this._keybindingInputWidget.startRecordingKeys(), this._register(this._keybindingInputWidget.onKeybinding((s)=>this.onKeybinding(s))), this._register(this._keybindingInputWidget.onEnter(()=>this.hide())), this._register(this._keybindingInputWidget.onEscape(()=>this.clearOrHide())), this._register(this._keybindingInputWidget.onBlur(()=>this.onCancel())), this._outputNode = fr(this._domNode.domNode, Ii(".output")), this._showExistingKeybindingsNode = fr(this._domNode.domNode, Ii(".existing")), t && fr(t, this._domNode.domNode);
    }
    get domNode() {
        return this._domNode.domNode;
    }
    define() {
        return this._keybindingInputWidget.clear(), I_.withAsyncBody(async (t)=>{
            this._isVisible || (this._isVisible = !0, this._domNode.setDisplay("block"), this._chords = null, this._keybindingInputWidget.setInputValue(""), uy(this._outputNode), uy(this._showExistingKeybindingsNode), await Wd(0), this._keybindingInputWidget.focus());
            const e = this._onHide.event(()=>{
                t(this.getUserSettingsLabel()), e.dispose();
            });
        });
    }
    layout(t) {
        const e = Math.round((t.height - sBe.HEIGHT) / 2);
        this._domNode.setTop(e);
        const n = Math.round((t.width - sBe.WIDTH) / 2);
        this._domNode.setLeft(n);
    }
    printExisting(t) {
        if (t > 0) {
            const e = Ii("span.existingText"), n = D(t === 1 ? 8528 : 8529, null, t);
            fr(e, document.createTextNode(n)), Dj(n), this._showExistingKeybindingsNode.appendChild(e), e.onmousedown = (i)=>{
                i.preventDefault();
            }, e.onmouseup = (i)=>{
                i.preventDefault();
            }, e.onclick = ()=>{
                this._onShowExistingKeybindings.fire(this.getUserSettingsLabel());
            };
        }
    }
    onKeybinding(t) {
        if (this._keybindingDisposables.clear(), this._chords = t, uy(this._outputNode), uy(this._showExistingKeybindingsNode), this._keybindingDisposables.add(new Vyt(this._outputNode, Hg, yoi)).set(this._chords?.[0] ?? void 0), this._chords) for(let i = 1; i < this._chords.length; i++)this._outputNode.appendChild(document.createTextNode(D(8530, null))), this._keybindingDisposables.add(new Vyt(this._outputNode, Hg, yoi)).set(this._chords[i]);
        const n = this.getUserSettingsLabel();
        n && this._onDidChange.fire(n);
    }
    getUserSettingsLabel() {
        let t = null;
        return this._chords && (t = this._chords.map((e)=>e.getUserSettingsLabel()).join(" ")), t;
    }
    onCancel() {
        this._confirmOnBlur && this._chords !== null ? this.hide() : (this._chords = null, this.hide());
    }
    clearOrHide() {
        this._chords === null ? this.hide() : (this._chords = null, this._keybindingInputWidget.clear(), uy(this._outputNode), uy(this._showExistingKeybindingsNode));
    }
    hide() {
        this._domNode.setDisplay("none"), this._isVisible = !1, this._onHide.fire();
    }
}, sBe.WIDTH = 400, sBe.HEIGHT = 110, sBe = Re([
    F(2, dn)
], sBe), BPn = class extends st {
    constructor(t, e){
        super(), this._editor = t, this._widget = this._register(e.createInstance(sBe, null, {
            confirmOnBlur: !1
        })), this._editor.addOverlayWidget(this);
    }
    getId() {
        return BPn.ID;
    }
    getDomNode() {
        return this._widget.domNode;
    }
    getPosition() {
        return {
            preference: null
        };
    }
    dispose() {
        this._editor.removeOverlayWidget(this), super.dispose();
    }
    start() {
        this._editor.hasModel() && this._editor.revealPositionInCenterIfOutsideViewport(this._editor.getPosition(), 0);
        const t = this._editor.getLayoutInfo();
        return this._widget.layout(new nd(t.width, t.height)), this._widget.define();
    }
}, BPn.ID = "editor.contrib.defineKeybindingWidget", BPn = Re([
    F(1, dn)
], BPn);

}

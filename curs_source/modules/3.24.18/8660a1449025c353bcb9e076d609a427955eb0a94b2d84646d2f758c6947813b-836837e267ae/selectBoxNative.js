import { Di, Gt, Qe, Zm, _r, st, tt } from "./Iwo.js";
import { bo } from "./arrays.js";
import { Dd, Hn, n0 } from "./dom_2.js";
import { CGo } from "./selectBox.js";
import { fO, kM, mS } from "./touch.js";
import { E } from "./tslib.es6.js";
import { WGd, li } from "./ze.js";
var HGd;
export { HGd };
var __wakaru_TNy_initialized = false;
export function TNy() {
if (__wakaru_TNy_initialized) return;
__wakaru_TNy_initialized = true;
"use strict";
E(), Hn(), fO(), CGo(), bo(), Gt(), Qe(), Di(), HGd = class extends st {
    constructor(t, e, n, i){
        super(), this.selected = 0, this.selectBoxOptions = i || Object.create(null), this.options = [], this.selectElement = document.createElement("select"), this.selectElement.className = "monaco-select-box", typeof this.selectBoxOptions.ariaLabel == "string" && this.selectElement.setAttribute("aria-label", this.selectBoxOptions.ariaLabel), typeof this.selectBoxOptions.ariaDescription == "string" && this.selectElement.setAttribute("aria-description", this.selectBoxOptions.ariaDescription), this._onDidSelect = this._register(new tt), this.styles = n, this.registerListeners(), this.setOptions(t, e);
    }
    registerListeners() {
        this._register(kM.addTarget(this.selectElement)), [
            mS.Tap
        ].forEach((t)=>{
            this._register(li(this.selectElement, t, (e)=>{
                this.selectElement.focus();
            }));
        }), this._register(n0(this.selectElement, "click", (t)=>{
            Dd.stop(t, !0);
        })), this._register(n0(this.selectElement, "change", (t)=>{
            this.selectElement.title = t.target.value, this._onDidSelect.fire({
                index: t.target.selectedIndex,
                selected: t.target.value
            });
        })), this._register(n0(this.selectElement, "keydown", (t)=>{
            let e = !1;
            _r ? (t.keyCode === 18 || t.keyCode === 16 || t.keyCode === 10) && (e = !0) : (t.keyCode === 18 && t.altKey || t.keyCode === 10 || t.keyCode === 3) && (e = !0), e && t.stopPropagation();
        }));
    }
    get onDidSelect() {
        return this._onDidSelect.event;
    }
    setOptions(t, e) {
        (!this.options || !Zm(this.options, t, WGd)) && (this.options = t, this.selectElement.options.length = 0, this.options.forEach((n, i)=>{
            this.selectElement.add(this.createOption(n.text, i, n.isDisabled));
        })), e !== void 0 && this.select(e);
    }
    select(t) {
        this.options.length === 0 ? this.selected = 0 : t >= 0 && t < this.options.length ? this.selected = t : t > this.options.length - 1 ? this.select(this.options.length - 1) : this.selected < 0 && (this.selected = 0), this.selectElement.selectedIndex = this.selected, this.selected < this.options.length && typeof this.options[this.selected].text == "string" ? this.selectElement.title = this.options[this.selected].text : this.selectElement.title = "";
    }
    setAriaLabel(t) {
        this.selectBoxOptions.ariaLabel = t, this.selectElement.setAttribute("aria-label", t);
    }
    focus() {
        this.selectElement && (this.selectElement.tabIndex = 0, this.selectElement.focus());
    }
    blur() {
        this.selectElement && (this.selectElement.tabIndex = -1, this.selectElement.blur());
    }
    setEnabled(t) {
        this.selectElement.disabled = !t;
    }
    setFocusable(t) {
        this.selectElement.tabIndex = t ? 0 : -1;
    }
    render(t) {
        t.classList.add("select-container"), t.appendChild(this.selectElement), this.setOptions(this.options, this.selected), this.applyStyles();
    }
    style(t) {
        this.styles = t, this.applyStyles();
    }
    applyStyles() {
        this.selectElement && (this.selectElement.style.backgroundColor = this.styles.selectBackground ?? "", this.selectElement.style.color = this.styles.selectForeground ?? "", this.selectElement.style.borderColor = this.styles.selectBorder ?? "");
    }
    createOption(t, e, n) {
        const i = document.createElement("option");
        return i.value = t, i.text = t, i.disabled = !!n, i;
    }
};

}

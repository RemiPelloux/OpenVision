import { Ai, Se, bt, jn, nh, ve, we } from "./HVr.js";
import { dr } from "./arrays.js";
import { Gc, en, zp } from "./dom_2.js";
import { Xt, f8c } from "./qIc.js";
import { rKe } from "./selectBox.js";
import { Ex, ov, zT } from "./touch.js";
import { x } from "./tslib.es6.js";
var g8c;
export { g8c };
var __wakaru_Myg_initialized = false;
export function Myg() {
if (__wakaru_Myg_initialized) return;
__wakaru_Myg_initialized = true;
"use strict";
x(), en(), Ex(), rKe(), dr(), bt(), Se(), jn(), g8c = class extends we {
    constructor(e, t, n, i){
        super(), this.selected = 0, this.selectBoxOptions = i || Object.create(null), this.options = [], this.selectElement = document.createElement("select"), this.selectElement.className = "monaco-select-box", typeof this.selectBoxOptions.ariaLabel == "string" && this.selectElement.setAttribute("aria-label", this.selectBoxOptions.ariaLabel), typeof this.selectBoxOptions.ariaDescription == "string" && this.selectElement.setAttribute("aria-description", this.selectBoxOptions.ariaDescription), this._onDidSelect = this._register(new ve), this.styles = n, this.registerListeners(), this.setOptions(e, t);
    }
    registerListeners() {
        this._register(zT.addTarget(this.selectElement)), [
            ov.Tap
        ].forEach((e)=>{
            this._register(Xt(this.selectElement, e, (t)=>{
                this.selectElement.focus();
            }));
        }), this._register(zp(this.selectElement, "click", (e)=>{
            Gc.stop(e, !0);
        })), this._register(zp(this.selectElement, "change", (e)=>{
            this.selectElement.title = e.target.value, this._onDidSelect.fire({
                index: e.target.selectedIndex,
                selected: e.target.value
            });
        })), this._register(zp(this.selectElement, "keydown", (e)=>{
            let t = !1;
            Ai ? (e.keyCode === 18 || e.keyCode === 16 || e.keyCode === 10) && (t = !0) : (e.keyCode === 18 && e.altKey || e.keyCode === 10 || e.keyCode === 3) && (t = !0), t && e.stopPropagation();
        }));
    }
    get onDidSelect() {
        return this._onDidSelect.event;
    }
    setOptions(e, t) {
        (!this.options || !nh(this.options, e, f8c)) && (this.options = e, this.selectElement.options.length = 0, this.options.forEach((n, i)=>{
            this.selectElement.add(this.createOption(n.text, i, n.isDisabled));
        })), t !== void 0 && this.select(t);
    }
    select(e) {
        this.options.length === 0 ? this.selected = 0 : e >= 0 && e < this.options.length ? this.selected = e : e > this.options.length - 1 ? this.select(this.options.length - 1) : this.selected < 0 && (this.selected = 0), this.selectElement.selectedIndex = this.selected, this.selected < this.options.length && typeof this.options[this.selected].text == "string" ? this.selectElement.title = this.options[this.selected].text : this.selectElement.title = "";
    }
    setAriaLabel(e) {
        this.selectBoxOptions.ariaLabel = e, this.selectElement.setAttribute("aria-label", e);
    }
    focus() {
        this.selectElement && (this.selectElement.tabIndex = 0, this.selectElement.focus());
    }
    blur() {
        this.selectElement && (this.selectElement.tabIndex = -1, this.selectElement.blur());
    }
    setEnabled(e) {
        this.selectElement.disabled = !e;
    }
    setFocusable(e) {
        this.selectElement.tabIndex = e ? 0 : -1;
    }
    render(e) {
        e.classList.add("select-container"), e.appendChild(this.selectElement), this.setOptions(this.options, this.selected), this.applyStyles();
    }
    style(e) {
        this.styles = e, this.applyStyles();
    }
    applyStyles() {
        this.selectElement && (this.selectElement.style.backgroundColor = this.styles.selectBackground ?? "", this.selectElement.style.color = this.styles.selectForeground ?? "", this.selectElement.style.borderColor = this.styles.selectBorder ?? "");
    }
    createOption(e, t, n) {
        const i = document.createElement("option");
        return i.value = e, i.text = e, i.disabled = !!n, i;
    }
};

}

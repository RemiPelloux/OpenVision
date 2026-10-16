import { Fa, Pn, Qe, Vn, rY, st } from "./Iwo.js";
import { b5y } from "./countBadge.css";
import { Hn } from "./dom_2.js";
import { E } from "./tslib.es6.js";
import { Fj, Ii, fr, gz } from "./ze.js";
var rIr;
export { rIr };
var __wakaru_IYd_initialized = false;
export function IYd() {
if (__wakaru_IYd_initialized) return;
__wakaru_IYd_initialized = true;
"use strict";
E(), Hn(), Fa(), b5y(), Qe(), gz(), rIr = class extends st {
    constructor(t, e, n){
        super(), this.options = e, this.styles = n, this.count = 0, this.hover = this._register(new Vn), this.element = fr(t, Ii(".monaco-count-badge")), this._register(Pn(()=>t.removeChild(this.element))), this.countFormat = this.options.countFormat || "{0}", this.titleFormat = this.options.titleFormat || "", this.setCount(this.options.count || 0), this.updateHover();
    }
    setCount(t) {
        this.count = t, this.render();
    }
    setCountFormat(t) {
        this.countFormat = t, this.render();
    }
    setTitleFormat(t) {
        this.titleFormat = t, this.updateHover(), this.render();
    }
    updateHover() {
        this.titleFormat !== "" && !this.hover.value ? this.hover.value = Fj().setupDelayedHoverAtMouse(this.element, ()=>({
                content: rY(this.titleFormat, this.count),
                appearance: {
                    compact: !0
                }
            })) : this.titleFormat === "" && this.hover.value && (this.hover.value = void 0);
    }
    render() {
        this.element.textContent = rY(this.countFormat, this.count), this.element.style.backgroundColor = this.styles.badgeBackground ?? "", this.element.style.color = this.styles.badgeForeground ?? "", this.styles.badgeBorder && (this.element.style.border = `1px solid ${this.styles.badgeBorder}`);
    }
};

}

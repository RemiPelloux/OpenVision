import { Ps, Se, cn, rn, wO, we } from "./HVr.js";
import { Bkg } from "./countBadge.css";
import { en } from "./dom_2.js";
import { V7, Ve, Ye, p5 } from "./qIc.js";
import { x } from "./tslib.es6.js";
var Hle;
export { Hle };
var __wakaru_fRe_initialized = false;
export function fRe() {
if (__wakaru_fRe_initialized) return;
__wakaru_fRe_initialized = true;
"use strict";
x(), en(), Ps(), Bkg(), Se(), V7(), Hle = class extends we {
    constructor(e, t, n){
        super(), this.options = t, this.styles = n, this.count = 0, this.hover = this._register(new cn), this.element = Ye(e, Ve(".monaco-count-badge")), this._register(rn(()=>e.removeChild(this.element))), this.countFormat = this.options.countFormat || "{0}", this.titleFormat = this.options.titleFormat || "", this.setCount(this.options.count || 0), this.updateHover();
    }
    setCount(e) {
        this.count = e, this.render();
    }
    setCountFormat(e) {
        this.countFormat = e, this.render();
    }
    setTitleFormat(e) {
        this.titleFormat = e, this.updateHover(), this.render();
    }
    updateHover() {
        this.titleFormat !== "" && !this.hover.value ? this.hover.value = p5().setupDelayedHoverAtMouse(this.element, ()=>({
                content: wO(this.titleFormat, this.count),
                appearance: {
                    compact: !0
                }
            })) : this.titleFormat === "" && this.hover.value && (this.hover.value = void 0);
    }
    render() {
        this.element.textContent = wO(this.countFormat, this.count), this.element.style.backgroundColor = this.styles.badgeBackground ?? "", this.element.style.color = this.styles.badgeForeground ?? "", this.styles.badgeBorder && (this.element.style.border = `1px solid ${this.styles.badgeBorder}`);
    }
};

}

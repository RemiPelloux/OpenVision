import { Tx } from "./fastDomNode.js";
import { x_ } from "./qIc.js";
import { g_g } from "./rulers.css";
import { x } from "./tslib.es6.js";
import { aU, mW } from "./viewPart.js";
var d6c;
export { d6c };
var __wakaru_f_g_initialized = false;
export function f_g() {
if (__wakaru_f_g_initialized) return;
__wakaru_f_g_initialized = true;
"use strict";
x(), g_g(), Tx(), aU(), d6c = class extends mW {
    constructor(e){
        super(e), this.domNode = x_(document.createElement("div")), this.domNode.setAttribute("role", "presentation"), this.domNode.setAttribute("aria-hidden", "true"), this.domNode.setClassName("view-rulers"), this._renderedRulers = [];
        const t = this._context.configuration.options;
        this._rulers = t.get(107), this._typicalHalfwidthCharacterWidth = t.get(52).typicalHalfwidthCharacterWidth;
    }
    dispose() {
        super.dispose();
    }
    onConfigurationChanged(e) {
        const t = this._context.configuration.options;
        return this._rulers = t.get(107), this._typicalHalfwidthCharacterWidth = t.get(52).typicalHalfwidthCharacterWidth, !0;
    }
    onScrollChanged(e) {
        return e.scrollHeightChanged;
    }
    prepareRender(e) {}
    _ensureRulersCount() {
        const e = this._renderedRulers.length, t = this._rulers.length;
        if (e === t) return;
        if (e < t) {
            const { tabSize: i } = this._context.viewModel.model.getOptions(), r = i;
            let s = t - e;
            for(; s > 0;){
                const o = x_(document.createElement("div"));
                o.setClassName("view-ruler"), o.setWidth(r), this.domNode.appendChild(o), this._renderedRulers.push(o), s--;
            }
            return;
        }
        let n = e - t;
        for(; n > 0;){
            const i = this._renderedRulers.pop();
            this.domNode.removeChild(i), n--;
        }
    }
    render(e) {
        this._ensureRulersCount();
        for(let t = 0, n = this._rulers.length; t < n; t++){
            const i = this._renderedRulers[t], r = this._rulers[t];
            i.setBoxShadow(r.color ? `1px 0 0 0 ${r.color} inset` : ""), i.setHeight(Math.min(e.scrollHeight, 1e6)), i.setLeft(r.column * this._typicalHalfwidthCharacterWidth);
        }
    }
};

}

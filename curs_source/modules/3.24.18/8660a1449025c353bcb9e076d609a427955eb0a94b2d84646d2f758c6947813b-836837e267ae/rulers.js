import { i6 } from "./fastDomNode.js";
import { lDy } from "./rulers.css";
import { E } from "./tslib.es6.js";
import { AQ, pz } from "./viewPart.js";
import { Ew } from "./ze.js";
var C$d;
export { C$d };
var __wakaru_cDy_initialized = false;
export function cDy() {
if (__wakaru_cDy_initialized) return;
__wakaru_cDy_initialized = true;
"use strict";
E(), lDy(), i6(), pz(), C$d = class extends AQ {
    constructor(t){
        super(t), this.domNode = Ew(document.createElement("div")), this.domNode.setAttribute("role", "presentation"), this.domNode.setAttribute("aria-hidden", "true"), this.domNode.setClassName("view-rulers"), this._renderedRulers = [];
        const e = this._context.configuration.options;
        this._rulers = e.get(107), this._typicalHalfwidthCharacterWidth = e.get(52).typicalHalfwidthCharacterWidth;
    }
    dispose() {
        super.dispose();
    }
    onConfigurationChanged(t) {
        const e = this._context.configuration.options;
        return this._rulers = e.get(107), this._typicalHalfwidthCharacterWidth = e.get(52).typicalHalfwidthCharacterWidth, !0;
    }
    onScrollChanged(t) {
        return t.scrollHeightChanged;
    }
    prepareRender(t) {}
    _ensureRulersCount() {
        const t = this._renderedRulers.length, e = this._rulers.length;
        if (t === e) return;
        if (t < e) {
            const { tabSize: i } = this._context.viewModel.model.getOptions(), r = i;
            let s = e - t;
            for(; s > 0;){
                const o = Ew(document.createElement("div"));
                o.setClassName("view-ruler"), o.setWidth(r), this.domNode.appendChild(o), this._renderedRulers.push(o), s--;
            }
            return;
        }
        let n = t - e;
        for(; n > 0;){
            const i = this._renderedRulers.pop();
            this.domNode.removeChild(i), n--;
        }
    }
    render(t) {
        this._ensureRulersCount();
        for(let e = 0, n = this._rulers.length; e < n; e++){
            const i = this._renderedRulers[e], r = this._rulers[e];
            i.setBoxShadow(r.color ? `1px 0 0 0 ${r.color} inset` : ""), i.setHeight(Math.min(t.scrollHeight, 1e6)), i.setLeft(r.column * this._typicalHalfwidthCharacterWidth);
        }
    }
};

}

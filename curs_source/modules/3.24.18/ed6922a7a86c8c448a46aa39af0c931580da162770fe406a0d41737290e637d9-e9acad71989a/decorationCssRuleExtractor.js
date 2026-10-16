import { Se, rn, we } from "./HVr.js";
import { H_g } from "./decorationCssRuleExtractor.css";
import { en } from "./dom_2.js";
import { Ve, lC } from "./qIc.js";
import { x } from "./tslib.es6.js";
var N6c;
export { N6c };
var __wakaru_W_g_initialized = false;
export function W_g() {
if (__wakaru_W_g_initialized) return;
__wakaru_W_g_initialized = true;
"use strict";
x(), en(), Se(), H_g(), N6c = class extends we {
    constructor(){
        super(), this._ruleCache = new Map, this._container = Ve("div.monaco-decoration-css-rule-extractor"), this._dummyElement = Ve("span"), this._container.appendChild(this._dummyElement), this._register(rn(()=>this._container.remove()));
    }
    getStyleRules(e, t) {
        const n = this._ruleCache.get(t);
        if (n) return n;
        this._dummyElement.className = t, e.appendChild(this._container);
        const i = this._getStyleRules(t);
        return this._ruleCache.set(t, i), e.removeChild(this._container), i;
    }
    _getStyleRules(e) {
        const t = [], i = [
            ...lC().styleSheets
        ];
        for(let r = 0; r < i.length; r++){
            const s = i[r];
            for (const o of s.cssRules)if (o instanceof CSSImportRule) o.styleSheet && i.push(o.styleSheet);
            else if (o instanceof CSSStyleRule) {
                const a = `.${e}`, c = o.selectorText.indexOf(a);
                if (c !== -1) {
                    const l = c + a.length;
                    (o.selectorText.length === l || o.selectorText.substring(l, l + 1).match(/[ :]/)) && t.push(o);
                }
            }
        }
        return t;
    }
};

}

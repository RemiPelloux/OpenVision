import { Pn, Qe, st } from "./Iwo.js";
import { NDy } from "./decorationCssRuleExtractor.css";
import { Hn } from "./dom_2.js";
import { E } from "./tslib.es6.js";
import { Ii, dE } from "./ze.js";
var Y$d;
export { Y$d };
var __wakaru_LDy_initialized = false;
export function LDy() {
if (__wakaru_LDy_initialized) return;
__wakaru_LDy_initialized = true;
"use strict";
E(), Hn(), Qe(), NDy(), Y$d = class extends st {
    constructor(){
        super(), this._ruleCache = new Map, this._container = Ii("div.monaco-decoration-css-rule-extractor"), this._dummyElement = Ii("span"), this._container.appendChild(this._dummyElement), this._register(Pn(()=>this._container.remove()));
    }
    getStyleRules(t, e) {
        const n = this._ruleCache.get(e);
        if (n) return n;
        this._dummyElement.className = e, t.appendChild(this._container);
        const i = this._getStyleRules(e);
        return this._ruleCache.set(e, i), t.removeChild(this._container), i;
    }
    _getStyleRules(t) {
        const e = [], i = [
            ...dE().styleSheets
        ];
        for(let r = 0; r < i.length; r++){
            const s = i[r];
            for (const o of s.cssRules)if (o instanceof CSSImportRule) o.styleSheet && i.push(o.styleSheet);
            else if (o instanceof CSSStyleRule) {
                const a = `.${t}`, l = o.selectorText.indexOf(a);
                if (l !== -1) {
                    const c = l + a.length;
                    (o.selectorText.length === c || o.selectorText.substring(c, c + 1).match(/[ :]/)) && e.push(o);
                }
            }
        }
        return e;
    }
};

}

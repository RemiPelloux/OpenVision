import { Ps } from "./HVr.js";
import { Ivi, SQr } from "./ast.js";
import { WBe } from "./length.js";
import { $gg, BP } from "./qIc.js";
import { dre, mOt, vQr } from "./smallImmutableSet.js";
import { GBe, wQr } from "./tokenizer.js";
import { x } from "./tslib.es6.js";
var vFc, CQr;
export { CQr, vFc };
var __wakaru__Fc_initialized = false;
export function _Fc() {
if (__wakaru__Fc_initialized) return;
__wakaru__Fc_initialized = true;
"use strict";
x(), Ps(), Ivi(), WBe(), mOt(), wQr(), vFc = class okm {
    constructor(t){
        this.map = t, this.hasRegExp = !1, this._regExpGlobal = null;
    }
    static createFromLanguage(t, n) {
        function i(s) {
            return n.getKey(`${s.languageId}:::${s.bracketText}`);
        }
        const r = new Map;
        for (const s of t.bracketsNew.openingBrackets){
            const o = BP(0, s.bracketText.length), a = i(s), c = dre.getEmpty().add(a, vQr);
            r.set(s.bracketText, new GBe(o, 1, a, c, SQr.create(o, s, c)));
        }
        for (const s of t.bracketsNew.closingBrackets){
            const o = BP(0, s.bracketText.length);
            let a = dre.getEmpty();
            const c = s.getOpeningBrackets();
            for (const l of c)a = a.add(i(l), vQr);
            r.set(s.bracketText, new GBe(o, 2, i(c[0]), a, SQr.create(o, s, a)));
        }
        return new okm(r);
    }
    getRegExpStr() {
        if (this.isEmpty) return null;
        {
            const t = [
                ...this.map.keys()
            ];
            return t.sort(), t.reverse(), t.map((n)=>$gg(n)).join("|");
        }
    }
    get regExpGlobal() {
        if (!this.hasRegExp) {
            const t = this.getRegExpStr();
            this._regExpGlobal = t ? new RegExp(t, "gi") : null, this.hasRegExp = !0;
        }
        return this._regExpGlobal;
    }
    getToken(t) {
        return this.map.get(t.toLowerCase());
    }
    findClosingTokenText(t) {
        for (const [n, i] of this.map)if (i.kind === 2 && i.bracketIds.intersects(t)) return n;
    }
    get isEmpty() {
        return this.map.size === 0;
    }
}, CQr = class {
    constructor(e, t){
        this.denseKeyProvider = e, this.getLanguageConfiguration = t, this.languageIdToBracketTokens = new Map;
    }
    didLanguageChange(e) {
        return this.languageIdToBracketTokens.has(e);
    }
    getSingleLanguageBracketTokens(e) {
        let t = this.languageIdToBracketTokens.get(e);
        return t || (t = vFc.createFromLanguage(this.getLanguageConfiguration(e), this.denseKeyProvider), this.languageIdToBracketTokens.set(e, t)), t;
    }
    getToken(e, t) {
        return this.getSingleLanguageBracketTokens(t).getToken(e);
    }
};

}

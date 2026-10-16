import { Fa } from "./Iwo.js";
import { Mjo, h0r } from "./ast.js";
import { Ftt } from "./length.js";
import { Xve, nfn, xjo } from "./smallImmutableSet.js";
import { Btt, Njo } from "./tokenizer.js";
import { E } from "./tslib.es6.js";
import { L5, W2y } from "./ze.js";
var zBd, Ljo;
export { Ljo, zBd };
var __wakaru_VBd_initialized = false;
export function VBd() {
if (__wakaru_VBd_initialized) return;
__wakaru_VBd_initialized = true;
"use strict";
E(), Fa(), h0r(), Ftt(), nfn(), Njo(), zBd = class PAb {
    constructor(e){
        this.map = e, this.hasRegExp = !1, this._regExpGlobal = null;
    }
    static createFromLanguage(e, n) {
        function i(s) {
            return n.getKey(`${s.languageId}:::${s.bracketText}`);
        }
        const r = new Map;
        for (const s of e.bracketsNew.openingBrackets){
            const o = L5(0, s.bracketText.length), a = i(s), l = Xve.getEmpty().add(a, xjo);
            r.set(s.bracketText, new Btt(o, 1, a, l, Mjo.create(o, s, l)));
        }
        for (const s of e.bracketsNew.closingBrackets){
            const o = L5(0, s.bracketText.length);
            let a = Xve.getEmpty();
            const l = s.getOpeningBrackets();
            for (const c of l)a = a.add(i(c), xjo);
            r.set(s.bracketText, new Btt(o, 2, i(l[0]), a, Mjo.create(o, s, a)));
        }
        return new PAb(r);
    }
    getRegExpStr() {
        if (this.isEmpty) return null;
        {
            const e = [
                ...this.map.keys()
            ];
            return e.sort(), e.reverse(), e.map((n)=>W2y(n)).join("|");
        }
    }
    get regExpGlobal() {
        if (!this.hasRegExp) {
            const e = this.getRegExpStr();
            this._regExpGlobal = e ? new RegExp(e, "gi") : null, this.hasRegExp = !0;
        }
        return this._regExpGlobal;
    }
    getToken(e) {
        return this.map.get(e.toLowerCase());
    }
    findClosingTokenText(e) {
        for (const [n, i] of this.map)if (i.kind === 2 && i.bracketIds.intersects(e)) return n;
    }
    get isEmpty() {
        return this.map.size === 0;
    }
}, Ljo = class {
    constructor(t, e){
        this.denseKeyProvider = t, this.getLanguageConfiguration = e, this.languageIdToBracketTokens = new Map;
    }
    didLanguageChange(t) {
        return this.languageIdToBracketTokens.has(t);
    }
    getSingleLanguageBracketTokens(t) {
        let e = this.languageIdToBracketTokens.get(t);
        return e || (e = zBd.createFromLanguage(this.getLanguageConfiguration(t), this.denseKeyProvider), this.languageIdToBracketTokens.set(t, e)), e;
    }
    getToken(t, e) {
        return this.getSingleLanguageBracketTokens(e).getToken(t);
    }
};

}

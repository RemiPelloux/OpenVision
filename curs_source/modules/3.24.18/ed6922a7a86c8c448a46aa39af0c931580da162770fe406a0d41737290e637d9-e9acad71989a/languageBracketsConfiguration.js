import { Upn, vNt } from "./cache.js";
import { ngn, wPc } from "./qIc.js";
import { bfi } from "./richEditBrackets.js";
import { x } from "./tslib.es6.js";
var CPc, TXr, TPc, EPc;
export { CPc, EPc, TPc, TXr };
var __wakaru_Lpg_initialized = false;
export function Lpg() {
if (__wakaru_Lpg_initialized) return;
__wakaru_Lpg_initialized = true;
"use strict";
x(), Upn(), bfi(), CPc = class {
    constructor(e, t){
        this.languageId = e;
        const n = t.brackets ? wPc(t.brackets) : [], i = new vNt((o)=>{
            const a = new Set;
            return {
                info: new TPc(this, o, a),
                closing: a
            };
        }), r = new vNt((o)=>{
            const a = new Set, c = new Set;
            return {
                info: new EPc(this, o, a, c),
                opening: a,
                openingColorized: c
            };
        });
        for (const [o, a] of n){
            const c = i.get(o), l = r.get(a);
            c.closing.add(l.info), l.opening.add(c.info);
        }
        const s = t.colorizedBracketPairs ? wPc(t.colorizedBracketPairs) : n.filter((o)=>!(o[0] === "<" && o[1] === ">"));
        for (const [o, a] of s){
            const c = i.get(o), l = r.get(a);
            c.closing.add(l.info), l.openingColorized.add(c.info), l.opening.add(c.info);
        }
        this._openingBrackets = new Map([
            ...i.cachedValues
        ].map(([o, a])=>[
                o,
                a.info
            ])), this._closingBrackets = new Map([
            ...r.cachedValues
        ].map(([o, a])=>[
                o,
                a.info
            ]));
    }
    get openingBrackets() {
        return [
            ...this._openingBrackets.values()
        ];
    }
    get closingBrackets() {
        return [
            ...this._closingBrackets.values()
        ];
    }
    getOpeningBracketInfo(e) {
        return this._openingBrackets.get(e);
    }
    getClosingBracketInfo(e) {
        return this._closingBrackets.get(e);
    }
    getBracketInfo(e) {
        return this.getOpeningBracketInfo(e) || this.getClosingBracketInfo(e);
    }
    getBracketRegExp(e) {
        const t = Array.from([
            ...this._openingBrackets.keys(),
            ...this._closingBrackets.keys()
        ]);
        return ngn(t, e);
    }
}, TXr = class {
    constructor(e, t){
        this.config = e, this.bracketText = t;
    }
    get languageId() {
        return this.config.languageId;
    }
}, TPc = class extends TXr {
    constructor(e, t, n){
        super(e, t), this.openedBrackets = n, this.isOpeningBracket = !0;
    }
}, EPc = class extends TXr {
    constructor(e, t, n, i){
        super(e, t), this.openingBrackets = n, this.openingColorizedBrackets = i, this.isOpeningBracket = !1;
    }
    closes(e) {
        return e.config !== this.config ? !1 : this.openingBrackets.has(e);
    }
    closesColorized(e) {
        return e.config !== this.config ? !1 : this.openingColorizedBrackets.has(e);
    }
    getOpeningBrackets() {
        return [
            ...this.openingBrackets
        ];
    }
};

}

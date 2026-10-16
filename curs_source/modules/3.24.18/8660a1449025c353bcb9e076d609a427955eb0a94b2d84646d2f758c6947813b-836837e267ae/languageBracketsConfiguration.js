import { tZn, wCo } from "./cache.js";
import { lwr } from "./richEditBrackets.js";
import { E } from "./tslib.es6.js";
import { PFd, Vii } from "./ze.js";
var MFd, lUo, DFd, NFd;
export { DFd, MFd, NFd, lUo };
var __wakaru_NAy_initialized = false;
export function NAy() {
if (__wakaru_NAy_initialized) return;
__wakaru_NAy_initialized = true;
"use strict";
E(), wCo(), lwr(), MFd = class {
    constructor(t, e){
        this.languageId = t;
        const n = e.brackets ? PFd(e.brackets) : [], i = new tZn((o)=>{
            const a = new Set;
            return {
                info: new DFd(this, o, a),
                closing: a
            };
        }), r = new tZn((o)=>{
            const a = new Set, l = new Set;
            return {
                info: new NFd(this, o, a, l),
                opening: a,
                openingColorized: l
            };
        });
        for (const [o, a] of n){
            const l = i.get(o), c = r.get(a);
            l.closing.add(c.info), c.opening.add(l.info);
        }
        const s = e.colorizedBracketPairs ? PFd(e.colorizedBracketPairs) : n.filter((o)=>!(o[0] === "<" && o[1] === ">"));
        for (const [o, a] of s){
            const l = i.get(o), c = r.get(a);
            l.closing.add(c.info), c.openingColorized.add(l.info), c.opening.add(l.info);
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
    getOpeningBracketInfo(t) {
        return this._openingBrackets.get(t);
    }
    getClosingBracketInfo(t) {
        return this._closingBrackets.get(t);
    }
    getBracketInfo(t) {
        return this.getOpeningBracketInfo(t) || this.getClosingBracketInfo(t);
    }
    getBracketRegExp(t) {
        const e = Array.from([
            ...this._openingBrackets.keys(),
            ...this._closingBrackets.keys()
        ]);
        return Vii(e, t);
    }
}, lUo = class {
    constructor(t, e){
        this.config = t, this.bracketText = e;
    }
    get languageId() {
        return this.config.languageId;
    }
}, DFd = class extends lUo {
    constructor(t, e, n){
        super(t, e), this.openedBrackets = n, this.isOpeningBracket = !0;
    }
}, NFd = class extends lUo {
    constructor(t, e, n, i){
        super(t, e), this.openingBrackets = n, this.openingColorizedBrackets = i, this.isOpeningBracket = !1;
    }
    closes(t) {
        return t.config !== this.config ? !1 : this.openingBrackets.has(t);
    }
    closesColorized(t) {
        return t.config !== this.config ? !1 : this.openingColorizedBrackets.has(t);
    }
    getOpeningBrackets() {
        return [
            ...this.openingBrackets
        ];
    }
};

}

import { Ei, Hc, Nt, Qe, uP } from "./Iwo.js";
import { Ki } from "./network.js";
import { er, jc } from "./position.js";
import { Qs, qt } from "./range.js";
import { E } from "./tslib.es6.js";
import { fn } from "./uri.js";
var Ezo, aKd, Izo, xzo;
export { Ezo, Izo, aKd, xzo };
var __wakaru_Azo_initialized = false;
export function Azo() {
if (__wakaru_Azo_initialized) return;
__wakaru_Azo_initialized = true;
"use strict";
E(), Ei(), Qe(), jc(), Qs(), Ki(), fn(), Ezo = class {
    constructor(t, e){
        this.range = t, this.direction = e;
    }
}, aKd = class MRb {
    constructor(e, n, i){
        this.hint = e, this.anchor = n, this.provider = i, this._isResolved = !1;
    }
    with(e) {
        const n = new MRb(this.hint, e.anchor, this.provider);
        return n._isResolved = this._isResolved, n._currentResolve = this._currentResolve, n;
    }
    async resolve(e) {
        if (typeof this.provider.resolveInlayHint == "function") {
            if (this._currentResolve) return await this._currentResolve, e.isCancellationRequested ? void 0 : this.resolve(e);
            this._isResolved || (this._currentResolve = this._doResolve(e).finally(()=>this._currentResolve = void 0)), await this._currentResolve;
        }
    }
    async _doResolve(e) {
        try {
            const n = await Promise.resolve(this.provider.resolveInlayHint(this.hint, e));
            this.hint.tooltip = n?.tooltip ?? this.hint.tooltip, this.hint.label = n?.label ?? this.hint.label, this.hint.textEdits = n?.textEdits ?? this.hint.textEdits, this._isResolved = !0;
        } catch (n) {
            uP(n), this._isResolved = !1;
        }
    }
}, Izo = class dXs {
    constructor(e, n, i){
        this._disposables = new Nt, this.ranges = e, this.provider = new Set;
        const r = [];
        for (const [s, o] of n){
            this._disposables.add(s), this.provider.add(o);
            for (const a of s.hints){
                const l = i.validatePosition(a.position);
                let c = "before";
                const u = dXs._getRangeAtPosition(i, l);
                let d;
                u.getStartPosition().isBefore(l) ? (d = qt.fromPositions(u.getStartPosition(), l), c = "after") : (d = qt.fromPositions(l, u.getEndPosition()), c = "before"), r.push(new aKd(a, new Ezo(d, c), o));
            }
        }
        this.items = r.sort((s, o)=>er.compare(s.hint.position, o.hint.position));
    }
    static async create(e, n, i, r) {
        const s = [], o = e.ordered(n).reverse().map((a)=>i.map(async (l)=>{
                try {
                    const c = await a.provideInlayHints(n, l, r);
                    (c?.hints.length || a.onDidChangeInlayHints) && s.push([
                        c ?? dXs._emptyInlayHintList,
                        a
                    ]);
                } catch (c) {
                    uP(c);
                }
            }));
        if (await Promise.all(o.flat()), r.isCancellationRequested || n.isDisposed()) throw new Hc;
        return new dXs(i, s, n);
    }
    dispose() {
        this._disposables.dispose();
    }
    static _getRangeAtPosition(e, n) {
        const i = n.lineNumber, r = e.getWordAtPosition(n);
        if (r) return new qt(i, r.startColumn, i, r.endColumn);
        e.tokenization.tokenizeIfCheap(i);
        const s = e.tokenization.getLineTokens(i), o = n.column - 1, a = s.findTokenIndexAtOffset(o);
        let l = s.getStartOffset(a), c = s.getEndOffset(a);
        return c - l === 1 && (l === o && a > 1 ? (l = s.getStartOffset(a - 1), c = s.getEndOffset(a - 1)) : c === o && a < s.getCount() - 1 && (l = s.getStartOffset(a + 1), c = s.getEndOffset(a + 1))), new qt(i, l + 1, i, c + 1);
    }
}, Izo._emptyInlayHintList = Object.freeze({
    dispose () {},
    hints: []
}), xzo = Izo;

}

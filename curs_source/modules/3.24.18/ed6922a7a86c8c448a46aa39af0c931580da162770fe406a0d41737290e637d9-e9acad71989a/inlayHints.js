import { He, Rl, Se, c1, si } from "./HVr.js";
import { li } from "./network.js";
import { Yn, ya } from "./position.js";
import { dt, qi } from "./range.js";
import { x } from "./tslib.es6.js";
import { Qt } from "./uri.js";
var Jis, gHc, ers, trs;
export { Jis, ers, gHc, trs };
var __wakaru_nrs_initialized = false;
export function nrs() {
if (__wakaru_nrs_initialized) return;
__wakaru_nrs_initialized = true;
"use strict";
x(), si(), Se(), ya(), qi(), li(), Qt(), Jis = class {
    constructor(e, t){
        this.range = e, this.direction = t;
    }
}, gHc = class Zkm {
    constructor(t, n, i){
        this.hint = t, this.anchor = n, this.provider = i, this._isResolved = !1;
    }
    with(t) {
        const n = new Zkm(this.hint, t.anchor, this.provider);
        return n._isResolved = this._isResolved, n._currentResolve = this._currentResolve, n;
    }
    async resolve(t) {
        if (typeof this.provider.resolveInlayHint == "function") {
            if (this._currentResolve) return await this._currentResolve, t.isCancellationRequested ? void 0 : this.resolve(t);
            this._isResolved || (this._currentResolve = this._doResolve(t).finally(()=>this._currentResolve = void 0)), await this._currentResolve;
        }
    }
    async _doResolve(t) {
        try {
            const n = await Promise.resolve(this.provider.resolveInlayHint(this.hint, t));
            this.hint.tooltip = n?.tooltip ?? this.hint.tooltip, this.hint.label = n?.label ?? this.hint.label, this.hint.textEdits = n?.textEdits ?? this.hint.textEdits, this._isResolved = !0;
        } catch (n) {
            c1(n), this._isResolved = !1;
        }
    }
}, ers = class S1r {
    constructor(t, n, i){
        this._disposables = new He, this.ranges = t, this.provider = new Set;
        const r = [];
        for (const [s, o] of n){
            this._disposables.add(s), this.provider.add(o);
            for (const a of s.hints){
                const c = i.validatePosition(a.position);
                let l = "before";
                const u = S1r._getRangeAtPosition(i, c);
                let h;
                u.getStartPosition().isBefore(c) ? (h = dt.fromPositions(u.getStartPosition(), c), l = "after") : (h = dt.fromPositions(c, u.getEndPosition()), l = "before"), r.push(new gHc(a, new Jis(h, l), o));
            }
        }
        this.items = r.sort((s, o)=>Yn.compare(s.hint.position, o.hint.position));
    }
    static async create(t, n, i, r) {
        const s = [], o = t.ordered(n).reverse().map((a)=>i.map(async (c)=>{
                try {
                    const l = await a.provideInlayHints(n, c, r);
                    (l?.hints.length || a.onDidChangeInlayHints) && s.push([
                        l ?? S1r._emptyInlayHintList,
                        a
                    ]);
                } catch (l) {
                    c1(l);
                }
            }));
        if (await Promise.all(o.flat()), r.isCancellationRequested || n.isDisposed()) throw new Rl;
        return new S1r(i, s, n);
    }
    dispose() {
        this._disposables.dispose();
    }
    static _getRangeAtPosition(t, n) {
        const i = n.lineNumber, r = t.getWordAtPosition(n);
        if (r) return new dt(i, r.startColumn, i, r.endColumn);
        t.tokenization.tokenizeIfCheap(i);
        const s = t.tokenization.getLineTokens(i), o = n.column - 1, a = s.findTokenIndexAtOffset(o);
        let c = s.getStartOffset(a), l = s.getEndOffset(a);
        return l - c === 1 && (c === o && a > 1 ? (c = s.getStartOffset(a - 1), l = s.getEndOffset(a - 1)) : l === o && a < s.getCount() - 1 && (c = s.getStartOffset(a + 1), l = s.getEndOffset(a + 1))), new dt(i, c + 1, i, l + 1);
    }
}, ers._emptyInlayHintList = Object.freeze({
    dispose () {},
    hints: []
}), trs = ers;

}

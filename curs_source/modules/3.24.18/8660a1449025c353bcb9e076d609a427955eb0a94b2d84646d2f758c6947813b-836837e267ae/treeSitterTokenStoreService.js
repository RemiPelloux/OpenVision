import { Nt, Qe } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { Qs, qt } from "./range.js";
import { Gtt, X8d, Z8d } from "./tokenStore.js";
import { E } from "./tslib.es6.js";
var A0r, Q8d;
export { A0r, Q8d };
var __wakaru_J8d_initialized = false;
export function J8d() {
if (__wakaru_J8d_initialized) return;
__wakaru_J8d_initialized = true;
"use strict";
E(), Qs(), Z8d(), Rn(), It(), Qe(), A0r = jn("treeSitterTokenizationStoreService"), Q8d = class {
    constructor(){
        this.tokens = new Map;
    }
    setTokens(t, e, n) {
        const i = new Nt, r = i.add(new X8d(t));
        this.tokens.set(t, {
            store: r,
            accurateVersion: t.getVersionId(),
            disposables: i,
            guessVersion: t.getVersionId()
        }), r.buildStore(e, n), i.add(t.onWillDispose(()=>{
            const s = this.tokens.get(t);
            s && (s.disposables.dispose(), this.tokens.delete(t));
        }));
    }
    handleContentChanged(t, e) {
        const n = this.tokens.get(t);
        if (n) {
            n.guessVersion = e.versionId;
            for (const i of e.changes)if (i.text.length > i.rangeLength) {
                const r = i.rangeOffset > 0 ? i.rangeOffset - 1 : i.rangeOffset, s = n.store.getTokenAt(r);
                let o;
                s ? (o = {
                    startOffsetInclusive: s.startOffsetInclusive,
                    length: s.length + i.text.length - i.rangeLength,
                    token: s.token
                }, n.store.markForRefresh(r, i.rangeOffset + (i.text.length > i.rangeLength ? i.text.length : i.rangeLength))) : o = {
                    startOffsetInclusive: r,
                    length: i.text.length,
                    token: 0
                }, n.store.update(s?.length ?? 0, [
                    o
                ], Gtt.EditGuess);
            } else if (i.text.length < i.rangeLength) {
                const r = i.rangeLength - i.text.length;
                n.store.delete(r, i.rangeOffset);
            }
        }
    }
    rangeHasTokens(t, e, n) {
        const i = this.tokens.get(t);
        return i ? i.store.rangeHasTokens(t.getOffsetAt(e.getStartPosition()), t.getOffsetAt(e.getEndPosition()), n) : !1;
    }
    hasTokens(t, e) {
        const n = this.tokens.get(t);
        return n ? !e || n.guessVersion === n.accurateVersion ? !0 : !n.store.rangeNeedsRefresh(t.getOffsetAt(e.getStartPosition()), t.getOffsetAt(e.getEndPosition())) : !1;
    }
    getTokens(t, e) {
        const n = this.tokens.get(t)?.store;
        if (!n) return;
        const i = t.getOffsetAt({
            lineNumber: e,
            column: 1
        }), r = n.getTokensInRange(i, t.getOffsetAt({
            lineNumber: e,
            column: t.getLineLength(e)
        }) + 1), s = new Uint32Array(r.length * 2);
        for(let o = 0; o < r.length; o++)s[o * 2] = r[o].startOffsetInclusive - i + r[o].length, s[o * 2 + 1] = r[o].token;
        return s;
    }
    updateTokens(t, e, n, i) {
        const r = this.tokens.get(t);
        if (r) {
            r.accurateVersion = e;
            for (const s of n){
                const o = s.newTokens.length > 0 ? s.newTokens[s.newTokens.length - 1] : void 0;
                let a;
                o && r.guessVersion >= e ? a = o.startOffsetInclusive + o.length - s.newTokens[0].startOffsetInclusive : s.oldRangeLength ? a = s.oldRangeLength : a = 0, r.store.update(a, s.newTokens, i);
            }
        }
    }
    markForRefresh(t, e) {
        const n = this.tokens.get(t)?.store;
        n && n.markForRefresh(t.getOffsetAt(e.getStartPosition()), t.getOffsetAt(e.getEndPosition()));
    }
    getNeedsRefresh(t) {
        const e = this.tokens.get(t)?.store.getNeedsRefresh();
        return e ? e.map((n)=>({
                range: qt.fromPositions(t.getPositionAt(n.startOffset), t.getPositionAt(n.endOffset)),
                startOffset: n.startOffset,
                endOffset: n.endOffset
            })) : [];
    }
    delete(t) {
        const e = this.tokens.get(t);
        e && (e.disposables.dispose(), this.tokens.delete(t));
    }
    dispose() {
        for (const [, t] of this.tokens)t.disposables.dispose();
    }
}, bn(A0r, Q8d, 1);

}

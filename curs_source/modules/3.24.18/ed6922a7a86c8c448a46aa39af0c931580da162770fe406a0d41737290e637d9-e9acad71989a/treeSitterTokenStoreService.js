import { He, Se } from "./HVr.js";
import { Pn } from "./extensions.js";
import { Ze } from "./instantiation.js";
import { mn, vn } from "./qIc.js";
import { dt, qi } from "./range.js";
import { XBe, k3c, w3c } from "./tokenStore.js";
import { x } from "./tslib.es6.js";
var jvi, C3c;
export { C3c, jvi };
var __wakaru_T3c_initialized = false;
export function T3c() {
if (__wakaru_T3c_initialized) return;
__wakaru_T3c_initialized = true;
"use strict";
x(), qi(), w3c(), Pn(), Ze(), Se(), jvi = vn("treeSitterTokenizationStoreService"), C3c = class {
    constructor(){
        this.tokens = new Map;
    }
    setTokens(e, t, n) {
        const i = new He, r = i.add(new k3c(e));
        this.tokens.set(e, {
            store: r,
            accurateVersion: e.getVersionId(),
            disposables: i,
            guessVersion: e.getVersionId()
        }), r.buildStore(t, n), i.add(e.onWillDispose(()=>{
            const s = this.tokens.get(e);
            s && (s.disposables.dispose(), this.tokens.delete(e));
        }));
    }
    handleContentChanged(e, t) {
        const n = this.tokens.get(e);
        if (n) {
            n.guessVersion = t.versionId;
            for (const i of t.changes)if (i.text.length > i.rangeLength) {
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
                ], XBe.EditGuess);
            } else if (i.text.length < i.rangeLength) {
                const r = i.rangeLength - i.text.length;
                n.store.delete(r, i.rangeOffset);
            }
        }
    }
    rangeHasTokens(e, t, n) {
        const i = this.tokens.get(e);
        return i ? i.store.rangeHasTokens(e.getOffsetAt(t.getStartPosition()), e.getOffsetAt(t.getEndPosition()), n) : !1;
    }
    hasTokens(e, t) {
        const n = this.tokens.get(e);
        return n ? !t || n.guessVersion === n.accurateVersion ? !0 : !n.store.rangeNeedsRefresh(e.getOffsetAt(t.getStartPosition()), e.getOffsetAt(t.getEndPosition())) : !1;
    }
    getTokens(e, t) {
        const n = this.tokens.get(e)?.store;
        if (!n) return;
        const i = e.getOffsetAt({
            lineNumber: t,
            column: 1
        }), r = n.getTokensInRange(i, e.getOffsetAt({
            lineNumber: t,
            column: e.getLineLength(t)
        }) + 1), s = new Uint32Array(r.length * 2);
        for(let o = 0; o < r.length; o++)s[o * 2] = r[o].startOffsetInclusive - i + r[o].length, s[o * 2 + 1] = r[o].token;
        return s;
    }
    updateTokens(e, t, n, i) {
        const r = this.tokens.get(e);
        if (r) {
            r.accurateVersion = t;
            for (const s of n){
                const o = s.newTokens.length > 0 ? s.newTokens[s.newTokens.length - 1] : void 0;
                let a;
                o && r.guessVersion >= t ? a = o.startOffsetInclusive + o.length - s.newTokens[0].startOffsetInclusive : s.oldRangeLength ? a = s.oldRangeLength : a = 0, r.store.update(a, s.newTokens, i);
            }
        }
    }
    markForRefresh(e, t) {
        const n = this.tokens.get(e)?.store;
        n && n.markForRefresh(e.getOffsetAt(t.getStartPosition()), e.getOffsetAt(t.getEndPosition()));
    }
    getNeedsRefresh(e) {
        const t = this.tokens.get(e)?.store.getNeedsRefresh();
        return t ? t.map((n)=>({
                range: dt.fromPositions(e.getPositionAt(n.startOffset), e.getPositionAt(n.endOffset)),
                startOffset: n.startOffset,
                endOffset: n.endOffset
            })) : [];
    }
    delete(e) {
        const t = this.tokens.get(e);
        t && (t.disposables.dispose(), this.tokens.delete(e));
    }
    dispose() {
        for (const [, e] of this.tokens)e.disposables.dispose();
    }
}, mn(jvi, C3c, 1);

}

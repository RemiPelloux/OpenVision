import { a7, tL } from "./linkedList.js";
import { er, jc } from "./position.js";
import { Qs, qt } from "./range.js";
import { E } from "./tslib.es6.js";
var DWr, J3a;
export { DWr, J3a };
var __wakaru_dDp_initialized = false;
export function dDp() {
if (__wakaru_dDp_initialized) return;
__wakaru_dDp_initialized = true;
"use strict";
E(), a7(), jc(), Qs(), DWr = class XZe {
    async provideSelectionRanges(e, n) {
        const i = [];
        for (const r of n){
            const s = [];
            i.push(s);
            const o = new Map;
            await new Promise((a)=>XZe._bracketsRightYield(a, 0, e, r, o)), await new Promise((a)=>XZe._bracketsLeftYield(a, 0, e, r, o, s));
        }
        return i;
    }
    static _bracketsRightYield(e, n, i, r, s) {
        const o = new Map, a = Date.now();
        for(;;){
            if (n >= XZe._maxRounds) {
                e();
                break;
            }
            if (!r) {
                e();
                break;
            }
            const l = i.bracketPairs.findNextBracket(r);
            if (!l) {
                e();
                break;
            }
            if (Date.now() - a > XZe._maxDuration) {
                setTimeout(()=>XZe._bracketsRightYield(e, n + 1, i, r, s));
                break;
            }
            if (l.bracketInfo.isOpeningBracket) {
                const u = l.bracketInfo.bracketText, d = o.has(u) ? o.get(u) : 0;
                o.set(u, d + 1);
            } else {
                const u = l.bracketInfo.getOpeningBrackets()[0].bracketText;
                let d = o.has(u) ? o.get(u) : 0;
                if (d -= 1, o.set(u, Math.max(0, d)), d < 0) {
                    let h = s.get(u);
                    h || (h = new tL, s.set(u, h)), h.push(l.range);
                }
            }
            r = l.range.getEndPosition();
        }
    }
    static _bracketsLeftYield(e, n, i, r, s, o) {
        const a = new Map, l = Date.now();
        for(;;){
            if (n >= XZe._maxRounds && s.size === 0) {
                e();
                break;
            }
            if (!r) {
                e();
                break;
            }
            const c = i.bracketPairs.findPrevBracket(r);
            if (!c) {
                e();
                break;
            }
            if (Date.now() - l > XZe._maxDuration) {
                setTimeout(()=>XZe._bracketsLeftYield(e, n + 1, i, r, s, o));
                break;
            }
            if (c.bracketInfo.isOpeningBracket) {
                const d = c.bracketInfo.bracketText;
                let h = a.has(d) ? a.get(d) : 0;
                if (h -= 1, a.set(d, Math.max(0, h)), h < 0) {
                    const p = s.get(d);
                    if (p) {
                        const g = p.shift();
                        p.size === 0 && s.delete(d);
                        const f = qt.fromPositions(c.range.getEndPosition(), g.getStartPosition()), _ = qt.fromPositions(c.range.getStartPosition(), g.getEndPosition());
                        o.push({
                            range: f
                        }), o.push({
                            range: _
                        }), XZe._addBracketLeading(i, _, o);
                    }
                }
            } else {
                const d = c.bracketInfo.getOpeningBrackets()[0].bracketText, h = a.has(d) ? a.get(d) : 0;
                a.set(d, h + 1);
            }
            r = c.range.getStartPosition();
        }
    }
    static _addBracketLeading(e, n, i) {
        if (n.startLineNumber === n.endLineNumber) return;
        const r = n.startLineNumber, s = e.getLineFirstNonWhitespaceColumn(r);
        s !== 0 && s !== n.startColumn && (i.push({
            range: qt.fromPositions(new er(r, s), n.getEndPosition())
        }), i.push({
            range: qt.fromPositions(new er(r, 1), n.getEndPosition())
        }));
        const o = r - 1;
        if (o > 0) {
            const a = e.getLineFirstNonWhitespaceColumn(o);
            a === n.startColumn && a !== e.getLineLastNonWhitespaceColumn(o) && (i.push({
                range: qt.fromPositions(new er(o, a), n.getEndPosition())
            }), i.push({
                range: qt.fromPositions(new er(o, 1), n.getEndPosition())
            }));
        }
    }
}, DWr._maxDuration = 30, DWr._maxRounds = 2, J3a = DWr;

}

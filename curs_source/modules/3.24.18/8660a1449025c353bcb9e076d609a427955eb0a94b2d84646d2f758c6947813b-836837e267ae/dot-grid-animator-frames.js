import { y9h } from "./hash-string.js";
import { a0S, b9h } from "./ipa.js";
import { l0S } from "./shared-animation-keyframes.js";
import { E } from "./tslib.es6.js";
var cBh, uBh, R5r, Ipi, P5r;
export { Ipi, P5r, R5r, cBh, uBh };
var __wakaru_c0S_initialized = false;
export function c0S() {
if (__wakaru_c0S_initialized) return;
__wakaru_c0S_initialized = true;
"use strict";
E(), y9h(), l0S(), cBh = Object.defineProperty, uBh = (t, e, n)=>e in t ? cBh(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : t[e] = n, R5r = (t, e, n)=>uBh(t, typeof e != "symbol" ? e + "" : e, n), Ipi = class QP {
    static getCellCount(e) {
        return QP.assertDimension(e), e * e;
    }
    static getMaxMask(e) {
        return 2 ** QP.getCellCount(e) - 1;
    }
    static normalizeMask(e, n) {
        QP.assertDimension(e), QP.assertNonNegativeInteger(n, "DotGridAnimator mask");
        const i = QP.getMaxMask(e);
        if (n > i) throw new Error(`Mask ${n} exceeds the ${e}x${e} grid range (max ${i}).`);
        return n;
    }
    static getMaskBits(e, n) {
        return QP.getMaskBitsFromNormalizedMask(e, QP.normalizeMask(e, n));
    }
    static getMaskActiveDots(e, n) {
        return QP.getMaskBits(e, n).map((i, r)=>i ? r + 1 : null).filter((i)=>i !== null);
    }
    static indicesToMask(e, n) {
        QP.assertDimension(e);
        let i = 0;
        for (const r of n)QP.assertDotIndexInRange(e, r), i |= 1 << QP.dotIndexToBitPosition(e, r);
        return i;
    }
    static rowToMask(e, n) {
        if (QP.assertDimension(e), !Number.isInteger(n) || n < 1 || n > e) throw new Error(`Row ${n} is out of range for a ${e}x${e} grid.`);
        const i = (n - 1) * e + 1;
        return QP.indicesToMask(e, Array.from({
            length: e
        }, (r, s)=>i + s));
    }
    static columnToMask(e, n) {
        if (QP.assertDimension(e), !Number.isInteger(n) || n < 1 || n > e) throw new Error(`Column ${n} is out of range for a ${e}x${e} grid.`);
        return QP.indicesToMask(e, Array.from({
            length: e
        }, (i, r)=>r * e + n));
    }
    static createAnimationDefinition(e, n) {
        const i = QP.getCellCount(e), r = QP.normalizeFrames(e, n), s = r.map((l)=>QP.getMaskBitsFromNormalizedMask(e, l)), o = QP.getAnimationId(e, r), a = [];
        for(let l = 1; l <= i; l++){
            const c = `${o}-dot-${l}`, u = s.map((h)=>h[l - 1]), d = `.ui-dot-grid-animator[data-animation-id="${o}"] [data-dot-index="${l}"]${QP.SPECIFICITY_GUARD}`;
            a.push(`${d} {`), a.push(`  animation-name: ${c};`), a.push("}"), a.push(""), a.push("@media (prefers-reduced-motion: reduce) {"), a.push(`  ${d} {`), a.push("    animation: none !important;"), a.push("  }"), a.push("}"), a.push(""), a.push(QP.keyframesRuleForDot(c, u)), a.push("");
        }
        return {
            animationId: o,
            cssText: a.join(`
`),
            initialMask: r[0],
            normalizedFrames: r
        };
    }
    static ensureKeyframesInjected(e) {
        if (typeof document > "u" || QP.injectedAnimationIds.has(e.animationId)) return;
        const n = QP.getStyleElement();
        if (n.textContent?.includes(e.animationId) === !0) {
            QP.injectedAnimationIds.add(e.animationId);
            return;
        }
        n.append(document.createTextNode(`
${e.cssText}
`)), QP.injectedAnimationIds.add(e.animationId);
    }
    static assertDimension(e) {
        if (e !== 3 && e !== 4) throw new Error(`Unsupported DotGridAnimator dimension: ${e}`);
    }
    static assertNonNegativeInteger(e, n) {
        if (!Number.isInteger(e) || e < 0) throw new Error(`${n} must be a non-negative integer.`);
    }
    static assertDotIndexInRange(e, n) {
        const i = QP.getCellCount(e);
        if (!Number.isInteger(n) || n < 1 || n > i) throw new Error(`Dot index ${n} is out of range for a ${e}x${e} grid.`);
    }
    static normalizeFrames(e, n) {
        return n.length === 0 ? [
            0
        ] : n.map((i)=>QP.normalizeMask(e, i));
    }
    static getMaskBitsFromNormalizedMask(e, n) {
        return Array.from({
            length: QP.getCellCount(e)
        }, (i, r)=>{
            const s = r + 1, o = QP.dotIndexToBitPosition(e, s);
            return (n & 1 << o) !== 0;
        });
    }
    static dotIndexToBitPosition(e, n) {
        return QP.getCellCount(e) - n;
    }
    static getAnimationId(e, n) {
        return `ui-dot-grid-${e}-${b9h(`${e}:${n.join(",")}`)}`;
    }
    static getStyleElement() {
        let e = document.getElementById(QP.STYLE_ELEMENT_ID);
        return e === null && (e = document.createElement("style"), e.id = QP.STYLE_ELEMENT_ID, document.head.appendChild(e)), e;
    }
    static keyframesRuleForDot(e, n) {
        return a0S(e, n, (i)=>[
                `opacity: ${i ? "1" : "var(--dot-grid-off-opacity)"};`
            ]);
    }
}, R5r(Ipi, "STYLE_ELEMENT_ID", "ui-dot-grid-animator-keyframes"), R5r(Ipi, "injectedAnimationIds", new Set), R5r(Ipi, "SPECIFICITY_GUARD", ":not(#\\#)".repeat(4)), P5r = Ipi;

}

import { Edf, FBl } from "./f0s.js";
import { BBl } from "./hash-string.js";
import { xdf } from "./shared-animation-keyframes.js";
import { x } from "./tslib.es6.js";
var M5l, P5l, YDi, o1n, XDi;
export { M5l, P5l, XDi, YDi, o1n };
var __wakaru_Idf_initialized = false;
export function Idf() {
if (__wakaru_Idf_initialized) return;
__wakaru_Idf_initialized = true;
"use strict";
x(), BBl(), xdf(), M5l = Object.defineProperty, P5l = (e, t, n)=>t in e ? M5l(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n, YDi = (e, t, n)=>P5l(e, typeof t != "symbol" ? t + "" : t, n), o1n = class Qx {
    static getCellCount(t) {
        return Qx.assertDimension(t), t * t;
    }
    static getMaxMask(t) {
        return 2 ** Qx.getCellCount(t) - 1;
    }
    static normalizeMask(t, n) {
        Qx.assertDimension(t), Qx.assertNonNegativeInteger(n, "DotGridAnimator mask");
        const i = Qx.getMaxMask(t);
        if (n > i) throw new Error(`Mask ${n} exceeds the ${t}x${t} grid range (max ${i}).`);
        return n;
    }
    static getMaskBits(t, n) {
        return Qx.getMaskBitsFromNormalizedMask(t, Qx.normalizeMask(t, n));
    }
    static getMaskActiveDots(t, n) {
        return Qx.getMaskBits(t, n).map((i, r)=>i ? r + 1 : null).filter((i)=>i !== null);
    }
    static indicesToMask(t, n) {
        Qx.assertDimension(t);
        let i = 0;
        for (const r of n)Qx.assertDotIndexInRange(t, r), i |= 1 << Qx.dotIndexToBitPosition(t, r);
        return i;
    }
    static rowToMask(t, n) {
        if (Qx.assertDimension(t), !Number.isInteger(n) || n < 1 || n > t) throw new Error(`Row ${n} is out of range for a ${t}x${t} grid.`);
        const i = (n - 1) * t + 1;
        return Qx.indicesToMask(t, Array.from({
            length: t
        }, (r, s)=>i + s));
    }
    static columnToMask(t, n) {
        if (Qx.assertDimension(t), !Number.isInteger(n) || n < 1 || n > t) throw new Error(`Column ${n} is out of range for a ${t}x${t} grid.`);
        return Qx.indicesToMask(t, Array.from({
            length: t
        }, (i, r)=>r * t + n));
    }
    static createAnimationDefinition(t, n) {
        const i = Qx.getCellCount(t), r = Qx.normalizeFrames(t, n), s = r.map((c)=>Qx.getMaskBitsFromNormalizedMask(t, c)), o = Qx.getAnimationId(t, r), a = [];
        for(let c = 1; c <= i; c++){
            const l = `${o}-dot-${c}`, u = s.map((p)=>p[c - 1]), h = `.ui-dot-grid-animator[data-animation-id="${o}"] [data-dot-index="${c}"]${Qx.SPECIFICITY_GUARD}`;
            a.push(`${h} {`), a.push(`  animation-name: ${l};`), a.push("}"), a.push(""), a.push("@media (prefers-reduced-motion: reduce) {"), a.push(`  ${h} {`), a.push("    animation: none !important;"), a.push("  }"), a.push("}"), a.push(""), a.push(Qx.keyframesRuleForDot(l, u)), a.push("");
        }
        return {
            animationId: o,
            cssText: a.join(`
`),
            initialMask: r[0],
            normalizedFrames: r
        };
    }
    static ensureKeyframesInjected(t) {
        if (typeof document > "u" || Qx.injectedAnimationIds.has(t.animationId)) return;
        const n = Qx.getStyleElement();
        if (n.textContent?.includes(t.animationId) === !0) {
            Qx.injectedAnimationIds.add(t.animationId);
            return;
        }
        n.append(document.createTextNode(`
${t.cssText}
`)), Qx.injectedAnimationIds.add(t.animationId);
    }
    static assertDimension(t) {
        if (t !== 3 && t !== 4) throw new Error(`Unsupported DotGridAnimator dimension: ${t}`);
    }
    static assertNonNegativeInteger(t, n) {
        if (!Number.isInteger(t) || t < 0) throw new Error(`${n} must be a non-negative integer.`);
    }
    static assertDotIndexInRange(t, n) {
        const i = Qx.getCellCount(t);
        if (!Number.isInteger(n) || n < 1 || n > i) throw new Error(`Dot index ${n} is out of range for a ${t}x${t} grid.`);
    }
    static normalizeFrames(t, n) {
        return n.length === 0 ? [
            0
        ] : n.map((i)=>Qx.normalizeMask(t, i));
    }
    static getMaskBitsFromNormalizedMask(t, n) {
        return Array.from({
            length: Qx.getCellCount(t)
        }, (i, r)=>{
            const s = r + 1, o = Qx.dotIndexToBitPosition(t, s);
            return (n & 1 << o) !== 0;
        });
    }
    static dotIndexToBitPosition(t, n) {
        return Qx.getCellCount(t) - n;
    }
    static getAnimationId(t, n) {
        return `ui-dot-grid-${t}-${FBl(`${t}:${n.join(",")}`)}`;
    }
    static getStyleElement() {
        let t = document.getElementById(Qx.STYLE_ELEMENT_ID);
        return t === null && (t = document.createElement("style"), t.id = Qx.STYLE_ELEMENT_ID, document.head.appendChild(t)), t;
    }
    static keyframesRuleForDot(t, n) {
        return Edf(t, n, (i)=>[
                `opacity: ${i ? "1" : "var(--dot-grid-off-opacity)"};`
            ]);
    }
}, YDi(o1n, "STYLE_ELEMENT_ID", "ui-dot-grid-animator-keyframes"), YDi(o1n, "injectedAnimationIds", new Set), YDi(o1n, "SPECIFICITY_GUARD", ":not(#\\#)".repeat(4)), XDi = o1n;

}

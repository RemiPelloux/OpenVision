import { i } from "./plugin-brand-icon.js";
function str(r) {
    const { scrollTop: e, scrollHeight: a, clientHeight: s, threshold: l } = r;
    return {
        isAtTop: e <= l,
        isAtBottom: e + s >= a - l
    };
}
function ctr(r) {
    const { scrollLeft: e, scrollWidth: a, clientWidth: s, threshold: l } = r, u = Math.abs(e);
    return {
        isAtStart: u <= l,
        isAtEnd: u + s >= a - l
    };
}
function ltr({ topFadePx: r, bottomFadePx: e, topFadeStartOpacity: a = 0, bottomFadeStartOpacity: s = 0, startFadePx: l = 0, endFadePx: u = 0 }) {
    const p = [];
    return (r > 0 || e > 0) && p.push(`linear-gradient(to bottom, rgba(0, 0, 0, ${a}) 0px, black ${r}px, black calc(100% - ${e}px), rgba(0, 0, 0, ${s}) 100%)`), (l > 0 || u > 0) && p.push(`linear-gradient(to right, transparent 0px, black ${l}px, black calc(100% - ${u}px), transparent 100%)`), p.length === 0 ? null : [
        w$t.maskGeometry(p.length),
        w$t.mask(p.join(", "))
    ];
}
var utr, w$t;
export { ctr, ltr, str, utr, w$t };
var __wakaru_xki_initialized = false;
export function xki() {
if (__wakaru_xki_initialized) return;
__wakaru_xki_initialized = true;
"use strict";
utr = {
    kn1fP1: "ui-xqa2ke",
    kJcbqH: "ui-16fucec",
    $$css: !0
}, i(str, "computeScrollFadeState"), i(ctr, "computeInlineScrollFadeState"), w$t = {
    maskGeometry: i((r)=>[
            utr,
            {
                kQB4zb: (r > 1 ? "intersect" : null) != null ? "ui-1xrn8sl" : r > 1 ? "intersect" : null,
                kRVSR3: (r > 1 ? "source-in" : null) != null ? "ui-60m5pi" : r > 1 ? "source-in" : null,
                $$css: !0
            },
            {
                "--x-maskSize": (r > 1 ? "100% 100%, 100% 100%" : "100% 100%") != null ? r > 1 ? "100% 100%, 100% 100%" : "100% 100%" : void 0,
                "--x-maskComposite": (r > 1 ? "intersect" : null) != null ? r > 1 ? "intersect" : null : void 0,
                "--x-WebkitMaskComposite": (r > 1 ? "source-in" : null) != null ? r > 1 ? "source-in" : null : void 0
            }
        ], "maskGeometry"),
    mask: i((r)=>[
            {
                kX1K2I: r != null ? "ui-wjwp01" : r,
                kAExgp: r != null ? "ui-11jd449" : r,
                $$css: !0
            },
            {
                "--x-maskImage": r ?? void 0,
                "--x-WebkitMaskImage": r ?? void 0
            }
        ], "mask")
}, i(ltr, "scrollFadeMaskStyle");

}

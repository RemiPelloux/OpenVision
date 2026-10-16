import { a } from "./business-error.js";
import { CV, hS } from "./phone-viewport.js";
import { IV, xS } from "./use-media-query.js";
import { useState as BD } from "./react-runtime/react/esm-index-production.js";
import { useEffect as FD } from "./react-runtime/react/esm-index-production.js";
import { useRef as VD } from "./react-runtime/react/esm-index-production.js";
function yp({ dark: e, read: t, cardOnly: r = !1, largeInputText: n = !1, inputSize: o = "md" }) {
    function i(p) {
        const h = t(p).trim();
        return h === "" ? void 0 : h;
    }
    a(i, "token");
    const s = Number.parseFloat(t("--x-radius-m")) || 1;
    function c(p) {
        return `${Math.round(p * s)}px`;
    }
    a(c, "radius");
    const l = {
        fontSizeBase: n ? "16px" : "15px",
        fontSizeSm: "13px",
        fontFamily: "ui-sans-serif, system-ui, sans-serif",
        borderRadius: c(8),
        gridColumnSpacing: "8px"
    };
    r && (l.labelSpacing = "0px");
    for (const [p, h] of Object.entries({
        colorPrimary: "--x-ring",
        colorText: "--x-fg-primary",
        accordionItemLabelColorText: "--x-fg-primary",
        accordionItemLabelSelectedColorText: "--x-fg-primary",
        iconColor: "--x-fg-primary",
        colorTextSecondary: "--x-fg-secondary",
        colorTextPlaceholder: "--x-fg-tertiary",
        colorDanger: "--x-fg-destructive",
        colorBackground: "--x-bg-modal"
    })){
        const f = i(h);
        f !== void 0 && (l[p] = f);
    }
    const m = i("--x-border-normal"), u = i("--x-fg-destructive"), d = {
        ".PickerItem": {
            fontSize: "13px",
            padding: "8px 10px"
        },
        ".AccordionItem": {
            padding: "16px"
        }
    };
    return m !== void 0 && r && (d[".Label"] = {
        fontSize: "1px",
        lineHeight: "0px",
        margin: "0px",
        opacity: "0",
        padding: "0px"
    }), m !== void 0 && (d[".Input"] = {
        backgroundColor: i("--x-bg-primary") ?? "transparent",
        border: `1px solid ${m}`,
        borderRadius: c(8),
        boxShadow: "none",
        ...bS[o]
    }, d[".Input:focus"] = {
        borderColor: i("--x-fg-alpha-20") ?? m,
        boxShadow: "none",
        outline: "none"
    }, d[".AccordionItem"] = {
        ...d[".AccordionItem"],
        backgroundColor: "transparent",
        border: `1px solid ${m}`,
        borderRadius: c(12),
        boxShadow: "none",
        fontSize: "15px",
        fontWeight: "500"
    }, l.accordionItemSpacing = "8px", d[".AccordionItem--selected"] = {
        color: i("--x-fg-primary") ?? "inherit"
    }, d[".Block"] = {
        backgroundColor: "transparent",
        border: `1px solid ${m}`,
        borderRadius: c(12),
        boxShadow: "none"
    }), u !== void 0 && (d[".Input--invalid"] = {
        borderColor: u,
        boxShadow: "none"
    }), {
        theme: e ? "night" : "stripe",
        labels: "above",
        variables: l,
        rules: d
    };
}
function wp(e, t) {
    const r = getComputedStyle(e);
    return yp({
        ...t,
        dark: e.closest("[data-theme]")?.getAttribute("data-theme") === "dark",
        read: a((n)=>r.getPropertyValue(n), "read")
    });
}
function Sp(e, t) {
    return JSON.stringify(e) === JSON.stringify(t) ? e : t;
}
function gS({ cardOnly: e = !1, inputSize: t = "md" } = {}) {
    const r = VD(null), n = xS(vS), [o, i] = BD(()=>yp({
            cardOnly: e,
            dark: !1,
            inputSize: t,
            largeInputText: n,
            read: a(()=>"", "read")
        }));
    function s(c) {
        r.current = c, c !== null && i((l)=>Sp(l, wp(c, {
                cardOnly: e,
                inputSize: t,
                largeInputText: n
            })));
    }
    return a(s, "attachContainer"), FD(()=>{
        const c = new MutationObserver(()=>{
            const l = r.current;
            l !== null && i((m)=>Sp(m, wp(l, {
                    cardOnly: e,
                    inputSize: t,
                    largeInputText: n
                })));
        });
        return c.observe(document.documentElement, {
            attributes: !0,
            attributeFilter: [
                "data-theme"
            ],
            subtree: !0
        }), ()=>c.disconnect();
    }, [
        e,
        t,
        n
    ]), {
        appearance: o,
        attachContainer: s
    };
}
var vS, bS;
export { Sp, bS, gS, vS, wp, yp };
var __wakaru_AV_initialized = false;
export function AV() {
if (__wakaru_AV_initialized) return;
__wakaru_AV_initialized = true;
"use client";
CV(), IV(), vS = `${hS}, (pointer: coarse)`, bS = {
    md: {
        lineHeight: "20px",
        padding: "9px 16px"
    },
    "md-lg": {
        lineHeight: "21px",
        padding: "10px 16px"
    }
}, a(yp, "buildStripeAppearance"), a(wp, "resolveScopeAppearance"), a(Sp, "unchangedAppearance"), a(gS, "useStripeScopeAppearance");

}

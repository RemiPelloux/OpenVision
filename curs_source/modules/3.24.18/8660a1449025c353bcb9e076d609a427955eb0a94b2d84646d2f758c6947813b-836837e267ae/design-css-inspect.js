import { Fa, dA } from "./Iwo.js";
import { YE } from "./assert.js";
import { FOe, qn } from "./async.js";
import { vut } from "./design-mode-picker-ipc.js";
import { iv } from "./index_16.js";
import { E } from "./tslib.es6.js";
import { Xo } from "./uuid_2.js";
import { Bs } from "./window.js";
import { ze } from "./ze.js";
var Y5i, vRt, $Kl, Fvv, yAs, HKl, WKl, Bvv, X5i, Uvv, jvv, $vv, SAs, Hvv;
export { $Kl, $vv, Bvv, Fvv, HKl, Hvv, SAs, Uvv, WKl, X5i, Y5i, jvv, vRt, yAs };
var __wakaru_Mut_initialized = false;
export function Mut() {
if (__wakaru_Mut_initialized) return;
__wakaru_Mut_initialized = true;
"use strict";
E(), iv(), Bs(), YE(), qn(), Fa(), Xo(), vut(), Y5i = {
    min: -1 / 0,
    max: 1 / 0
}, vRt = {
    min: 0,
    max: 1 / 0
}, $Kl = [
    {
        name: "font-size",
        scrub: {
            min: 1,
            max: 1 / 0
        },
        group: "type",
        shownFor: "text",
        presets: [
            "10px",
            "12px",
            "14px",
            "16px",
            "18px",
            "20px",
            "24px",
            "32px",
            "48px",
            "64px"
        ]
    },
    {
        name: "font-weight",
        group: "type",
        shownFor: "text",
        presets: [
            "100",
            "200",
            "300",
            "400",
            "500",
            "600",
            "700",
            "800",
            "900"
        ]
    },
    {
        name: "line-height",
        scrub: vRt,
        dashWhenUnauthored: !0,
        group: "type",
        shownFor: "text",
        presets: [
            "1",
            "1.15",
            "1.25",
            "1.333",
            "1.5",
            "1.6",
            "2"
        ]
    },
    {
        name: "letter-spacing",
        dashWhenUnauthored: !0,
        scrub: Y5i,
        group: "type",
        shownFor: "text",
        presets: [
            "-1px",
            "-0.5px",
            "0px",
            "0.25px",
            "0.5px",
            "1px"
        ]
    },
    {
        name: "text-align",
        group: "type",
        shownFor: "text",
        presets: [
            "left",
            "center",
            "right",
            "justify"
        ]
    },
    {
        name: "color",
        group: "fill",
        shownFor: "text"
    },
    {
        name: "background-color",
        dashWhenUnauthored: !0,
        group: "fill"
    },
    {
        name: "border-color",
        dashWhenUnauthored: !0,
        group: "fill"
    },
    {
        name: "border-width",
        scrub: vRt,
        dashWhenUnauthored: !0,
        group: "fill",
        presets: [
            "0",
            "1px",
            "2px",
            "3px",
            "4px"
        ]
    },
    {
        name: "border-style",
        dashWhenUnauthored: !0,
        group: "fill",
        presets: [
            "solid",
            "dashed",
            "dotted",
            "double",
            "none"
        ]
    },
    {
        name: "border-radius",
        scrub: vRt,
        dashWhenUnauthored: !0,
        group: "fill",
        presets: [
            "0",
            "2px",
            "4px",
            "6px",
            "8px",
            "12px",
            "16px",
            "9999px"
        ]
    },
    {
        name: "opacity",
        scrub: {
            min: 0,
            max: 1,
            fraction: !0
        },
        group: "fill",
        presets: [
            "0",
            "0.1",
            "0.25",
            "0.5",
            "0.75",
            "0.9",
            "1"
        ]
    },
    {
        name: "margin",
        scrub: Y5i,
        group: "spacing",
        box: !0,
        presets: [
            "0",
            "2px",
            "4px",
            "8px",
            "12px",
            "16px",
            "24px",
            "32px",
            "auto"
        ]
    },
    {
        name: "padding",
        scrub: vRt,
        group: "spacing",
        box: !0,
        presets: [
            "0",
            "2px",
            "4px",
            "6px",
            "8px",
            "12px",
            "16px",
            "20px",
            "24px",
            "32px"
        ]
    },
    {
        name: "gap",
        scrub: vRt,
        dashWhenUnauthored: !0,
        group: "spacing",
        shownFor: "flex-or-grid",
        presets: [
            "0",
            "2px",
            "4px",
            "6px",
            "8px",
            "12px",
            "16px",
            "24px"
        ]
    },
    {
        name: "display",
        group: "layout",
        presets: [
            "block",
            "inline-block",
            "inline",
            "flex",
            "grid",
            "none"
        ]
    },
    {
        name: "flex-direction",
        group: "layout",
        shownFor: "flex",
        presets: [
            "row",
            "row-reverse",
            "column",
            "column-reverse"
        ]
    },
    {
        name: "flex-wrap",
        group: "layout",
        shownFor: "flex",
        presets: [
            "nowrap",
            "wrap",
            "wrap-reverse"
        ]
    },
    {
        name: "justify-content",
        group: "layout",
        shownFor: "flex-or-grid",
        presets: [
            "flex-start",
            "center",
            "flex-end",
            "space-between",
            "space-around",
            "space-evenly"
        ]
    },
    {
        name: "align-items",
        group: "layout",
        shownFor: "flex-or-grid",
        presets: [
            "stretch",
            "flex-start",
            "center",
            "flex-end",
            "baseline"
        ]
    },
    {
        name: "grid-template-columns",
        group: "layout",
        shownFor: "grid",
        presets: [
            "1fr",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
            "repeat(4, 1fr)",
            "auto 1fr",
            "1fr auto"
        ]
    },
    {
        name: "grid-template-rows",
        group: "layout",
        shownFor: "grid",
        presets: [
            "auto",
            "repeat(2, auto)",
            "1fr",
            "repeat(2, 1fr)"
        ]
    },
    {
        name: "width",
        scrub: vRt,
        dashWhenUnauthored: !0,
        group: "size",
        presets: [
            "auto",
            "100%",
            "50%",
            "fit-content",
            "min-content",
            "max-content"
        ]
    },
    {
        name: "height",
        scrub: vRt,
        dashWhenUnauthored: !0,
        group: "size",
        presets: [
            "auto",
            "100%",
            "50%",
            "fit-content",
            "min-content",
            "max-content"
        ]
    },
    {
        name: "position",
        group: "position",
        presets: [
            "static",
            "relative",
            "absolute",
            "fixed",
            "sticky"
        ]
    },
    {
        name: "inset",
        scrub: Y5i,
        group: "position",
        shownFor: "positioned",
        box: !0,
        presets: [
            "0",
            "4px",
            "8px",
            "16px",
            "auto"
        ]
    },
    {
        name: "z-index",
        scrub: {
            ...Y5i,
            step: 1
        },
        group: "position",
        shownFor: "positioned",
        presets: [
            "0",
            "1",
            "2",
            "5",
            "10",
            "100"
        ]
    }
], Fvv = new Set([
    "",
    "auto",
    "normal",
    "none",
    "transparent",
    "rgba(0,0,0,0)"
]), yAs = "data-cursor-css-target", HKl = ze.object({
    name: ze.string(),
    value: ze.string()
}), WKl = ze.object({
    rendersText: ze.boolean(),
    values: ze.record(ze.string(), ze.string()),
    authored: ze.array(ze.string()),
    variables: ze.object({
        colors: ze.array(HKl),
        lengths: ze.array(HKl)
    }),
    rect: ze.object({
        top: ze.number(),
        left: ze.number(),
        width: ze.number(),
        height: ze.number()
    })
}), Bvv = new FOe, X5i = "CSS edits \u2014 ", Uvv = new RegExp(`^${dA(X5i)}.*$`, "m"), jvv = new RegExp(`^${dA(X5i)}`, "gm"), $vv = {
    rem: .0625,
    em: .0625
}, SAs = /^-?(?:\d+\.?\d*|\.\d+)[a-z%]*$/, Hvv = /^[+-]?(?:\d+(?:\.\d+)?|\.\d+)$/;

}

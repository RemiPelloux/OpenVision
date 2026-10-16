import { $e } from "./attach.ts";
import { ji } from "./index_2.ts";
import { i } from "./plugin-brand-icon.js";
import { c as $ui } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { jsx as Iui } from "./react-runtime/react/esm-jsx-runtime-production.js";
function Her(r) {
    return [
        xIe.base,
        r === "green" ? xIe.colorGreen : xIe.colorBlue
    ];
}
function Zer(r) {
    const e = $ui(7), { color: a, className: s } = r, l = a === void 0 ? "blue" : a;
    let u;
    e[0] !== s || e[1] !== l ? (u = $e({
        rootClass: "ui-indicator-dot",
        stylexStyles: Her(l),
        className: s
    }), e[0] = s, e[1] = l, e[2] = u) : u = e[2];
    const p = u;
    let m;
    return e[3] !== p.className || e[4] !== p.style || e[5] !== l ? (m = Iui("span", {
        "aria-hidden": !0,
        className: p.className,
        "data-color": l,
        style: p.style
    }), e[3] = p.className, e[4] = p.style, e[5] = l, e[6] = m) : m = e[6], m;
}
var xIe;
export { Her, Zer, xIe };
var __wakaru_yki_initialized = false;
export function yki() {
if (__wakaru_yki_initialized) return;
__wakaru_yki_initialized = true;
"use strict";
ji(), xIe = {
    base: {
        kVAEAm: "ui-10l6tqk",
        krVfgx: "ui-r0fw0u",
        kCIrl2: "ui-7zl9wm",
        kzqmXN: "ui-jwey39",
        kZKoxP: "ui-wbbb81",
        kaIpWk: "ui-16rqkct",
        kfzvcC: "ui-47corl",
        $$css: !0
    },
    colorBlue: {
        kWkggS: "ui-1b558e3",
        $$css: !0
    },
    colorGreen: {
        kWkggS: "ui-15xcjd2",
        $$css: !0
    }
}, i(Her, "indicatorDotStyleForProps"), i(Zer, "IndicatorDot");

}

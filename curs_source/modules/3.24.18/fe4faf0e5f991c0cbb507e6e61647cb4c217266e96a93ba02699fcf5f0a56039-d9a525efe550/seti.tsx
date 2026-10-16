import { $e } from "./attach.ts";
import { Zr, rd } from "./cn.ts";
import { ji } from "./index_2.ts";
import { i } from "./plugin-brand-icon.js";
import { MLt, NLt, x0r } from "./seti-icons.ts";
import { ILt, h0r } from "./seti.types.ts";
import { c as Adi } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { jsx as Tdi } from "./react-runtime/react/esm-jsx-runtime-production.js";
function C0r(r, e) {
    return [
        $P.base,
        S0r(r),
        e ? $P.cursorIcon : null
    ];
}
function S0r(r) {
    if (typeof r == "number") return null;
    switch(r){
        case "xs":
            return $P.sizeXs;
        case "sm":
            return $P.sizeSm;
        case "base":
            return $P.sizeBase;
        case "lg":
            return $P.sizeLg;
        case "xl":
            return $P.sizeXl;
    }
}
function E0r({ name: r, size: e, extraClassName: a, rootStyle: s, style: l }) {
    const u = typeof e == "number", p = MLt(r), m = p.fontFamily === "cursor", b = {
        "--seti-content": `"${p.char}"`,
        "--seti-glyph-scale": String(p.glyphScale ?? 1),
        color: NLt(p.semanticColor),
        ...u ? {
            "--icon-size": `${e}px`
        } : {},
        ...l ?? {}
    }, g = $e({
        rootClass: "ui-seti",
        stylexStyles: [
            C0r(e, m),
            s
        ],
        className: Zr(m ? "ui-seti--cursor-icon" : void 0, a),
        style: b
    });
    return {
        cssClass: g.className,
        style: g.style,
        dataSize: u ? void 0 : e
    };
}
function A0r(r) {
    const e = Adi(14), { name: a, size: s, className: l, rootStyle: u, title: p, "aria-label": m, "aria-hidden": b, style: g, ref: _ } = r, v = s ?? ILt;
    let x;
    e[0] !== l || e[1] !== a || e[2] !== u || e[3] !== g || e[4] !== v ? (x = E0r({
        name: a,
        size: v,
        extraClassName: l,
        rootStyle: u,
        style: g
    }), e[0] = l, e[1] = a, e[2] = u, e[3] = g, e[4] = v, e[5] = x) : x = e[5];
    const C = x, E = b ?? (m ? void 0 : !0), A = p ?? m;
    let $;
    return e[6] !== m || e[7] !== C.cssClass || e[8] !== C.dataSize || e[9] !== C.style || e[10] !== _ || e[11] !== E || e[12] !== A ? ($ = Tdi("span", {
        "aria-label": m,
        "aria-hidden": E,
        role: "img",
        ref: _,
        className: C.cssClass,
        "data-size": C.dataSize,
        style: C.style,
        title: A
    }), e[6] = m, e[7] = C.cssClass, e[8] = C.dataSize, e[9] = C.style, e[10] = _, e[11] = E, e[12] = A, e[13] = $) : $ = e[13], $;
}
var $P;
export { $P, A0r, C0r, E0r, S0r };
var __wakaru_G4i_initialized = false;
export function G4i() {
if (__wakaru_G4i_initialized) return;
__wakaru_G4i_initialized = true;
"use strict";
ji(), rd(), h0r(), x0r(), $P = {
    base: {
        k1xSpc: "ui-3nfvp2",
        kGNEyG: "ui-6s0dn4",
        kjj79g: "ui-l56j7k",
        khiITx: "ui-j26tf6",
        kTUp5R: "ui-bleps",
        kMv6JI: "ui-1qtuznc",
        kKX8nH: "ui-1j61x8r",
        k63SB2: "ui-1fcty0u",
        kLWn49: "ui-o5v014",
        kXLuUW: "ui-xymvpz",
        kzqmXN: "ui-1oai4fc",
        kZKoxP: "ui-higkf7",
        kGuDYH: "ui-1tachi3",
        "--icon-size": "ui-pyhgd6",
        "--seti-glyph-scale": "ui-1cpzp08",
        kgeoSG: "ui-fzk3lv",
        kHh9I5: "ui-xn505q",
        $$css: !0
    },
    cursorIcon: {
        kMv6JI: "ui-1dgk36h",
        $$css: !0
    },
    sizeXs: {
        kzqmXN: "ui-6jxa94",
        kZKoxP: "ui-1v9usgg",
        kGuDYH: "ui-if65rj",
        kHh9I5: "ui-hm1o90",
        $$css: !0
    },
    sizeSm: {
        kzqmXN: "ui-1kky2od",
        kZKoxP: "ui-lup9mm",
        kGuDYH: "ui-1j61zf2",
        kHh9I5: "ui-4pprgf",
        $$css: !0
    },
    sizeBase: {
        kzqmXN: "ui-w4jnvo",
        kZKoxP: "ui-1qx5ct2",
        kGuDYH: "ui-wsyq91",
        kHh9I5: "ui-b7h94w",
        $$css: !0
    },
    sizeLg: {
        kzqmXN: "ui-17z2i9w",
        kZKoxP: "ui-17rw0jw",
        kGuDYH: "ui-1i1m3gp",
        kHh9I5: "ui-ssash8",
        $$css: !0
    },
    sizeXl: {
        kzqmXN: "ui-gd8bvy",
        kZKoxP: "ui-1fgtraw",
        kGuDYH: "ui-neq65o",
        kHh9I5: "ui-xf2evh",
        $$css: !0
    }
}, i(C0r, "setiStyleForProps"), i(S0r, "sizeStyleForProps"), i(E0r, "setiAttrs"), i(A0r, "Seti");

}

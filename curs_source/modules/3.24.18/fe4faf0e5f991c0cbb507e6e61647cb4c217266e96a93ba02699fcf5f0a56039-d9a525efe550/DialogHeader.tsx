import { MIt, PIt, RIt, bC, drr, lrr, urr } from "./Dialog.stylex.ts";
import { YY, oNe } from "./DialogContext.tsx";
import { LY, go } from "./Text.tsx";
import { $e } from "./attach.ts";
import { ji } from "./index_2.ts";
import { i } from "./plugin-brand-icon.js";
import { c as Jui } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useContext as Qui } from "./react-runtime/react/esm-index-production.js";
import { jsx as YAe } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useId as edi } from "./react-runtime/react/esm-index-production.js";
import { jsxs as s8t } from "./react-runtime/react/esm-jsx-runtime-production.js";
function s3(r) {
    const e = Jui(36), { children: a, title: s, stepLabel: l, description: u, alignment: p, titleSize: m, titleWeight: b, descriptionColor: g, descriptionFontSize: _, rootStyle: v } = r, x = p === void 0 ? "start" : p, C = m === void 0 ? "lg" : m, E = b === void 0 ? "regular" : b, A = g === void 0 ? "tertiary" : g, $ = _ === void 0 ? "lg" : _, I = Qui(oNe), N = edi(), R = I?.titleId ?? `${N}-title`, P = I?.descriptionId ?? `${N}-description`, L = !!s, j = !!l, z = !!u, q = L || j || z;
    let O;
    e[0] !== x || e[1] !== I?.headerBeforeContent || e[2] !== v ? (O = $e({
        rootClass: "ui-dialog-header",
        stylexStyles: [
            lrr({
                alignment: x,
                beforeContent: I?.headerBeforeContent ?? !1
            }),
            v
        ]
    }), e[0] = x, e[1] = I?.headerBeforeContent, e[2] = v, e[3] = O) : O = e[3];
    const B = O;
    let V;
    e[4] !== x ? (V = $e({
        rootClass: "ui-dialog-header-lead",
        stylexStyles: MIt({
            alignment: x
        })
    }), e[4] = x, e[5] = V) : V = e[5];
    const H = V;
    let Z;
    e[6] !== x ? (Z = $e({
        rootClass: "ui-dialog-header-stepper-head",
        stylexStyles: urr({
            alignment: x
        })
    }), e[6] = x, e[7] = Z) : Z = e[7];
    const K = Z;
    let Y;
    e[8] !== x ? (Y = $e({
        rootClass: "ui-dialog-header-stepper",
        stylexStyles: drr({
            alignment: x
        })
    }), e[8] = x, e[9] = Y) : Y = e[9];
    const J = Y;
    let re;
    e[10] === Symbol.for("react.memo_cache_sentinel") ? (re = $e({
        rootClass: "ui-dialog-title",
        stylexStyles: RIt()
    }), e[10] = re) : re = e[10];
    const ne = re;
    let ae;
    e[11] !== A || e[12] !== $ ? (ae = $e({
        rootClass: "ui-dialog-description",
        stylexStyles: PIt({
            stepper: !0,
            color: A,
            fontSize: $
        }),
        className: "ui-dialog-header-stepper-description"
    }), e[11] = A, e[12] = $, e[13] = ae) : ae = e[13];
    const W = ae;
    let oe;
    e[14] !== u || e[15] !== W || e[16] !== P || e[17] !== z || e[18] !== j || e[19] !== q || e[20] !== L || e[21] !== H || e[22] !== l || e[23] !== J || e[24] !== K || e[25] !== s || e[26] !== R || e[27] !== C || e[28] !== E ? (oe = q ? YAe("div", {
        className: H.className,
        style: H.style,
        children: s8t("div", {
            className: K.className,
            style: K.style,
            children: [
                L || j ? s8t("div", {
                    className: J.className,
                    style: J.style,
                    role: j ? "status" : void 0,
                    children: [
                        L ? YAe(go, {
                            as: "h2",
                            className: ne.className,
                            color: "primary",
                            id: R,
                            size: C,
                            style: ne.style,
                            weight: E,
                            children: s
                        }) : null,
                        j ? YAe(go, {
                            as: "span",
                            color: "quaternary",
                            size: "lg",
                            weight: "regular",
                            children: l
                        }) : null
                    ]
                }) : null,
                z ? YAe("p", {
                    className: W.className,
                    id: P,
                    style: W.style,
                    children: u
                }) : null
            ]
        })
    }) : null, e[14] = u, e[15] = W, e[16] = P, e[17] = z, e[18] = j, e[19] = q, e[20] = L, e[21] = H, e[22] = l, e[23] = J, e[24] = K, e[25] = s, e[26] = R, e[27] = C, e[28] = E, e[29] = oe) : oe = e[29];
    let ce;
    return e[30] !== x || e[31] !== a || e[32] !== B.className || e[33] !== B.style || e[34] !== oe ? (ce = s8t("div", {
        className: B.className,
        "data-alignment": x,
        style: B.style,
        children: [
            oe,
            a
        ]
    }), e[30] = x, e[31] = a, e[32] = B.className, e[33] = B.style, e[34] = oe, e[35] = ce) : ce = e[35], ce;
}
export { s3 };
var __wakaru_Lrr_initialized = false;
export function Lrr() {
if (__wakaru_Lrr_initialized) return;
__wakaru_Lrr_initialized = true;
"use strict";
ji(), LY(), bC(), YY(), i(s3, "DialogHeader");

}

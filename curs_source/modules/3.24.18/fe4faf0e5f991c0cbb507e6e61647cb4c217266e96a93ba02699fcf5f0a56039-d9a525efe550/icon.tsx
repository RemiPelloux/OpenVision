import { ap } from "./DirectionContext.mjs";
import { $e } from "./attach.ts";
import { Zr, rd } from "./cn.ts";
import { D$e, F$e } from "./cursor-icons.ts";
import { YYn, eki } from "./icon.types.ts";
import { Jv } from "./index.mjs";
import { HYn } from "./index.ts";
import { ji } from "./index_2.ts";
import { kw } from "./index_3.ts";
import { X_i, ZYn } from "./inline-mirror.stylex.ts";
import { eJn, tki } from "./mirrored-icons.ts";
import { i } from "./plugin-brand-icon.js";
import { J_i, KYn } from "./spinnerSync.ts";
import { oP } from "./variant-enforcer.tsx";
import { jsx as iui } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as rui } from "./react-runtime/react/esm-compiler-runtime-production.js";
function tJn(r, e, a) {
    return [
        Hl.base,
        lTt(r),
        nJn(e),
        rJn(a)
    ];
}
function H$e(r) {
    return typeof r == "string" && !r.startsWith("var(");
}
function lTt(r) {
    if (!H$e(r)) return Hl.noPresetSize;
    switch(r){
        case "xs":
            return Hl.sizeXs;
        case "sm":
            return Hl.sizeSm;
        case "base":
            return Hl.sizeBase;
        case "lg":
            return Hl.sizeLg;
        case "xl":
            return Hl.sizeXl;
        case "2xl":
            return Hl.size2xl;
    }
}
function nJn(r) {
    switch(r){
        case "primary":
            return Hl.colorPrimary;
        case "secondary":
            return Hl.colorSecondary;
        case "tertiary":
            return Hl.colorTertiary;
        case "quaternary":
            return Hl.colorQuaternary;
        case "git-added":
            return Hl.colorGitAdded;
        case "git-modified":
            return Hl.colorGitModified;
        case "git-removed":
            return Hl.colorGitRemoved;
        case "git-untracked":
            return Hl.colorGitUntracked;
        case "cyan":
            return Hl.colorCyan;
        case "blue":
            return Hl.colorBlue;
        case "red":
            return Hl.colorRed;
        case "green":
            return Hl.colorGreen;
        case "success":
            return Hl.colorSuccess;
        case "danger":
            return Hl.colorDanger;
        case "yellow":
            return Hl.colorYellow;
        case "magenta":
            return Hl.colorMagenta;
        case "orange":
            return Hl.colorOrange;
        case "purple":
            return Hl.colorPurple;
        case "accent":
            return Hl.colorAccent;
        case "brand":
            return Hl.colorBrand;
        case void 0:
            return Hl.noColor;
    }
}
function rJn(r) {
    switch(r){
        case "spin":
            return Hl.modifierSpin;
        case "disabled":
            return Hl.modifierDisabled;
        case "hidden":
            return Hl.modifierHidden;
        case void 0:
            return Hl.noModifier;
    }
}
function iJn(r) {
    if (!(typeof r != "string" || r.length === 0)) return `"${r}"`;
}
function Mn(r) {
    const e = rui(13), { name: a, modifier: s, syncSpin: l, variant: u, size: p, color: m, capTrim: b, className: g, rootStyle: _, style: v, title: x, "aria-label": C, "aria-hidden": E, ref: A } = r, $ = l === void 0 ? !0 : l, I = u === void 0 ? "outline" : u, N = b === void 0 ? !1 : b, R = oP();
    let P;
    e[0] !== A || e[1] !== s || e[2] !== $ ? (P = i((J)=>{
        typeof A == "function" ? A(J) : A && (A.current = J), J && s === "spin" && $ && KYn(J);
    }, "t4"), e[0] = A, e[1] = s, e[2] = $, e[3] = P) : P = e[3];
    const L = P, j = p ?? R?.iconSize ?? YYn, z = H$e(j), q = ap() === "rtl" && eJn.has(a);
    D$e(a) || console.warn(`[Icon] "${a}" is not a valid CursorIconName. For VSCode legacy icons, use the Codicon component instead.`);
    const O = iJn(F$e(a, I)), B = {
        ...O ? {
            "--cursor-icon-content": O
        } : {},
        ...z ? {} : {
            "--icon-size": typeof j == "number" ? `${j}px` : j
        },
        ...v
    }, V = $e({
        rootClass: "ui-icon",
        stylexStyles: [
            tJn(j, m, s),
            q && ZYn.root,
            N && Hl.capTrim,
            _
        ],
        className: Zr("cursor-icon", g),
        style: B
    }), H = z ? j : void 0, Z = x ?? C, K = E ?? (C ? void 0 : !0);
    let Y;
    return e[4] !== V.className || e[5] !== V.style || e[6] !== m || e[7] !== a || e[8] !== L || e[9] !== H || e[10] !== Z || e[11] !== K ? (Y = iui("i", {
        ref: L,
        className: V.className,
        "data-icon-name": a,
        "data-size": H,
        "data-color": m,
        style: V.style,
        title: Z,
        "aria-hidden": K
    }), e[4] = V.className, e[5] = V.style, e[6] = m, e[7] = a, e[8] = L, e[9] = H, e[10] = Z, e[11] = K, e[12] = Y) : Y = e[12], Y;
}
var Hl;
export { H$e, Hl, Mn, iJn, lTt, nJn, rJn, tJn };
var __wakaru_aJn_initialized = false;
export function aJn() {
if (__wakaru_aJn_initialized) return;
__wakaru_aJn_initialized = true;
"use strict";
Jv(), HYn(), X_i(), ji(), rd(), J_i(), kw(), eki(), tki(), Hl = {
    base: {
        kKX8nH: "ui-1j61x8r",
        k63SB2: "ui-etm3q0",
        kGuDYH: "ui-1tachi3",
        kMv6JI: "ui-1qt6sjn",
        kLWn49: "ui-o5v014",
        k1xSpc: "ui-3nfvp2",
        kGNEyG: "ui-6s0dn4",
        kjj79g: "ui-l56j7k",
        kMwMTN: "ui-1heor9g",
        kzqmXN: "ui-1oai4fc",
        kZKoxP: "ui-higkf7",
        kXLuUW: "ui-xymvpz",
        kMnn75: "ui-krqix3",
        kJwUce: "ui-1403hyl",
        k9WMMc: "ui-2b8uid",
        kP9fke: "ui-6mezaz",
        khiITx: "ui-vmahel",
        kTUp5R: "ui-lh3980",
        kfSwDN: "ui-87ps6o",
        kO7zv1: "ui-1winvzj",
        "--icon-size": "ui-1u4itkb",
        "--icon-weight": "ui-1q5xvfy",
        keTefX: "ui-jb5y04",
        k71WvV: "ui-1bxnb1t",
        kQmYQc: "ui-1ehclkv",
        kgeoSG: "ui-1yj7g93",
        $$css: !0
    },
    noPresetSize: {
        $$css: !0
    },
    sizeXs: {
        "--icon-size": "ui-aiyo0p",
        $$css: !0
    },
    sizeSm: {
        "--icon-size": "ui-1u4itkb",
        $$css: !0
    },
    sizeBase: {
        "--icon-size": "ui-xfpx3u",
        $$css: !0
    },
    sizeLg: {
        "--icon-size": "ui-1qxde8p",
        $$css: !0
    },
    sizeXl: {
        "--icon-size": "ui-dyy2ci",
        $$css: !0
    },
    size2xl: {
        "--icon-size": "ui-7lg4th",
        $$css: !0
    },
    noColor: {
        $$css: !0
    },
    colorPrimary: {
        kMwMTN: "ui-1nqczng",
        $$css: !0
    },
    colorSecondary: {
        kMwMTN: "ui-1mh7f6w",
        $$css: !0
    },
    colorTertiary: {
        kMwMTN: "ui-1lbmi28",
        $$css: !0
    },
    colorQuaternary: {
        kMwMTN: "ui-1qh17o",
        $$css: !0
    },
    colorGitAdded: {
        kMwMTN: "ui-15wwr8d",
        $$css: !0
    },
    colorGitModified: {
        kMwMTN: "ui-eedwss",
        $$css: !0
    },
    colorGitRemoved: {
        kMwMTN: "ui-fowoju",
        $$css: !0
    },
    colorGitUntracked: {
        kMwMTN: "ui-1p7vtww",
        $$css: !0
    },
    colorCyan: {
        kMwMTN: "ui-1rbygr4",
        $$css: !0
    },
    colorBlue: {
        kMwMTN: "ui-101qeuz",
        $$css: !0
    },
    colorRed: {
        kMwMTN: "ui-ku4wcm",
        $$css: !0
    },
    colorGreen: {
        kMwMTN: "ui-p6nzhx",
        $$css: !0
    },
    colorSuccess: {
        kMwMTN: "ui-i75md2",
        $$css: !0
    },
    colorDanger: {
        kMwMTN: "ui-3pdtkl",
        $$css: !0
    },
    colorYellow: {
        kMwMTN: "ui-1hn9r2r",
        $$css: !0
    },
    colorMagenta: {
        kMwMTN: "ui-pwp9en",
        $$css: !0
    },
    colorOrange: {
        kMwMTN: "ui-4qtrdv",
        $$css: !0
    },
    colorPurple: {
        kMwMTN: "ui-1b0hn6l",
        $$css: !0
    },
    colorAccent: {
        kMwMTN: "ui-scuw3h",
        $$css: !0
    },
    colorBrand: {
        kMwMTN: "ui-v3vxec",
        $$css: !0
    },
    noModifier: {
        $$css: !0
    },
    modifierSpin: {
        kKVMdj: "ui-138fvbv",
        k44tkh: "ui-lmf4m6",
        kyAemX: "ui-1esw782",
        ko0y90: "ui-a4qsjk",
        $$css: !0
    },
    modifierDisabled: {
        kSiTet: "ui-ti2d7y",
        $$css: !0
    },
    modifierHidden: {
        k33iCy: "ui-lshs6z",
        $$css: !0
    },
    capTrim: {
        kQypYc: "ui-13zi6q3",
        $$css: !0
    }
}, i(tJn, "iconStyleForProps"), i(H$e, "isPresetIconSize"), i(lTt, "sizeStyleForProps"), i(nJn, "colorStyleForProps"), i(rJn, "modifierStyleForProps"), i(iJn, "cursorIconCssContent"), i(Mn, "Icon");

}

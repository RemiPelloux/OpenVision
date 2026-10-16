import { An, ao, ri, zt } from "./LYd.js";
import { K2i } from "./LockedModelPicker.css";
import { A4k, x4k } from "./Ycg.js";
import { Mt } from "./index_197.js";
import { Fjt, GTa, N4, WTa } from "./ipa.js";
import { xs } from "./tooltip.js";
import { E } from "./tslib.es6.js";
import { useState as E4k } from "./react-runtime/react/esm-index-production.js";
import { jsxs as I4k } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useRef as Qef } from "./react-runtime/react/esm-index-production.js";
import { useEffect as T4k } from "./react-runtime/react/esm-index-production.js";
import { memo as Xef } from "./react-runtime/react/esm-index-production.js";
import { useCallback as Zef } from "./react-runtime/react/esm-index-production.js";
import { jsx as ree } from "./react-runtime/react/esm-jsx-runtime-production.js";
var SCl, WPn;
export { SCl, WPn };
var __wakaru_nPi_initialized = false;
export function nPi() {
if (__wakaru_nPi_initialized) return;
__wakaru_nPi_initialized = true;
"use strict";
E(), Mt(), K2i(), SCl = Xef(function({ displayName: e, inheritColor: n = !1, stylexStyles: i }) {
    return ree(N4, {
        className: n ? "vscode-model-picker__trigger-markdown vscode-model-picker__trigger-markdown--inherit" : "vscode-model-picker__trigger-markdown",
        singleLine: !0,
        stylexStyles: [
            GTa(),
            i
        ],
        children: e
    });
}), WPn = Xef(function({ appearance: e = "default", buttonVariant: n = "ghost", chevronSize: i = 9, displayNameOverride: r, freeUserPolicy: s, isMaxMode: o, loading: a = !1, modelPickerNudge: l, models: c, onMarkNudgeAsSeen: u, open: d = !1, ref: h, selections: p, rounded: g, showChevron: f = !0, showMaxBadge: _ = !1, showNewModelsDot: b = !1, showTriggerAlertIcon: y = !1, size: S = "sm", splitVariantDetail: k = !1, tooltipPlacement: C = "bottom", tooltipShortcut: T, tooltipShortcutRows: I, tooltipTitle: A, triggerAlertLabel: P, triggerProps: M, triggerStyle: O, triggerTextStyle: N, useBaseModelDisplayName: U = !1 }) {
    const j = s?.kind === "models-disabled", $ = P?.trim(), H = y || $ !== void 0 && $.length > 0, G = a ? "Loading models" : r ?? A4k(p, c, U, o), q = $ !== void 0 && $.length > 0 ? $ : j ? "Auto" : G, K = _ && o && !j && !H, V = b && !j && !H, Y = p[0], J = k && q === G && l === void 0 && Y !== void 0 ? x4k(G, Fjt(Y, c)) : void 0, Q = J ? `${G}${K ? " MAX" : ""}` : void 0, te = Qef(d), ee = Qef(!1);
    T4k(()=>{
        const ge = te.current;
        te.current = d, !ge && d && (ee.current = l !== void 0 && l.length > 0), ge && !d && ee.current && u && (u(), ee.current = !1);
    }, [
        l,
        u,
        d
    ]);
    const re = e === "prompt" ? "vscode-model-picker__trigger--prompt" : e === "input-shell" ? "vscode-model-picker__trigger--input-shell" : void 0, [ie, oe] = E4k(!1), se = M?.onPointerMove, le = M?.onPointerLeave, ce = Zef((ge)=>{
        se?.(ge), oe(!0);
    }, [
        se
    ]), ae = Zef((ge)=>{
        le?.(ge), oe(!1);
    }, [
        le
    ]), de = I4k(An, {
        "aria-busy": a || void 0,
        "aria-label": Q,
        className: ri("vscode-model-picker__trigger", re),
        ref: h,
        ...M,
        "data-pointer-hover-intent": ie ? !0 : void 0,
        onPointerLeave: ae,
        onPointerMove: ce,
        rootStyle: [
            WTa(e),
            O
        ],
        rounded: g,
        size: S,
        variant: n,
        children: [
            H ? ree(zt, {
                "aria-hidden": !0,
                className: "vscode-model-picker__trigger-alert",
                color: "red",
                name: "exclamation-triangle",
                size: 12
            }) : null,
            V ? ree("span", {
                "aria-hidden": !0,
                className: "vscode-model-picker__trigger-new-models-dot",
                "data-testid": "model-picker-new-models-dot"
            }) : null,
            a ? ree(zt, {
                "aria-hidden": !0,
                className: "vscode-model-picker__trigger-loading",
                modifier: "spin",
                name: "loading",
                size: 12
            }) : null,
            ree("span", {
                className: ri("vscode-model-picker__trigger-text", e === "input-shell" && "vscode-model-picker__trigger-text--input-shell"),
                children: ree(SCl, {
                    displayName: J?.name ?? q,
                    inheritColor: !0,
                    stylexStyles: N
                }, J?.name ?? q)
            }),
            J ? ree("span", {
                className: "vscode-model-picker__trigger-variant-suffix",
                children: ree(SCl, {
                    displayName: J.detail
                }, J.detail)
            }) : null,
            K ? ree("span", {
                className: "vscode-model-picker__trigger-max-badge",
                children: ree("span", {
                    className: "vscode-model-picker__trigger-max-badge-text",
                    children: "MAX"
                })
            }) : null,
            l && !j && !H ? ree("span", {
                children: ree(N4, {
                    className: "vscode-model-picker__trigger-markdown",
                    stylexStyles: GTa(),
                    children: l
                })
            }) : null,
            j && !H ? ree(zt, {
                className: "vscode-model-picker__trigger-lock",
                name: "lock",
                size: i
            }) : null,
            f ? ree(zt, {
                className: ri("vscode-model-picker__trigger-chevron", e === "input-shell" && "vscode-model-picker__trigger-chevron--input-shell"),
                name: "chevron-down",
                size: i
            }) : null
        ]
    });
    if (!A && !T && !I?.length) return de;
    const he = I?.length ? ree(ao, {
        shortcutRows: I,
        title: A
    }) : T ? ree(ao, {
        shortcut: T,
        title: A
    }) : ree(ao, {
        title: A
    });
    return ree(xs, {
        content: he,
        offset: 6,
        placement: C,
        sameAxisOnly: !0,
        children: de
    });
});

}

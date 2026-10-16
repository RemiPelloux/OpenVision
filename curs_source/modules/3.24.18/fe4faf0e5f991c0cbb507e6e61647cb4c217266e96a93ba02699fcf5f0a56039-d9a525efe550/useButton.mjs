import { bIe, wIe } from "./CompositeRootContext.mjs";
import { Pme, zT } from "./error.mjs";
import { Ou, Vc } from "./floating-ui.utils.dom.mjs";
import { xw } from "./index_2.mjs";
import { Ame, If } from "./mergeProps.mjs";
import { i } from "./plugin-brand-icon.js";
import { CS, FY } from "./safeReact.mjs";
import { gki, zer } from "./useFocusableWhenDisabled.mjs";
import { Ir, bo } from "./useIsoLayoutEffect.mjs";
import { oc, oi } from "./useStableCallback.mjs";
import * as VAe from "./react-runtime/react/esm-index-production.js";
function S0(r = {}) {
    const { disabled: e = !1, focusableWhenDisabled: a, tabIndex: s = 0, native: l = !0, composite: u } = r, p = VAe.useRef(null), m = bIe(!0), b = u ?? m !== void 0, { props: g } = zer({
        focusableWhenDisabled: a,
        disabled: e,
        composite: b,
        tabIndex: s,
        isNativeButton: l
    });
    VAe.useEffect(()=>{
        if (!p.current) return;
        const C = jme(p.current);
        if (l) {
            if (!C) {
                const E = CS.captureOwnerStack?.() || "";
                zT(`A component that acts as a button expected a native <button> because the \`nativeButton\` prop is true. Rendering a non-<button> removes native button semantics, which can impact forms and accessibility. Use a real <button> in the \`render\` prop, or set \`nativeButton\` to \`false\`.${E}`);
            }
        } else if (C) {
            const E = CS.captureOwnerStack?.() || "";
            zT(`A component that acts as a button expected a non-<button> because the \`nativeButton\` prop is false. Rendering a <button> keeps native behavior while Base UI applies non-native attributes and handlers, which can add unintended extra attributes (such as \`role\` or \`aria-disabled\`). Use a non-<button> in the \`render\` prop, or set \`nativeButton\` to \`true\`.${E}`);
        }
    }, [
        l
    ]);
    const _ = VAe.useCallback(()=>{
        const C = p.current;
        jme(C) && b && e && g.disabled === void 0 && C.disabled && (C.disabled = !1);
    }, [
        e,
        g.disabled,
        b
    ]);
    Ir(_, [
        _
    ]);
    const v = VAe.useCallback((C = {})=>{
        const { onClick: E, onMouseDown: A, onKeyUp: $, onKeyDown: I, onPointerDown: N, ...R } = C;
        return If({
            onClick (P) {
                if (e) {
                    P.preventDefault();
                    return;
                }
                E?.(P);
            },
            onMouseDown (P) {
                e || A?.(P);
            },
            onKeyDown (P) {
                if (e || (Ame(P), I?.(P), P.baseUIHandlerPrevented)) return;
                const L = P.target === P.currentTarget, j = P.currentTarget, z = jme(j), q = !l && Ber(j), O = L && (l ? z : !q), B = P.key === "Enter", V = P.key === " ", H = j.getAttribute("role"), Z = H?.startsWith("menuitem") || H === "option" || H === "gridcell";
                if (L && b && V) {
                    if (P.defaultPrevented && Z) return;
                    P.preventDefault(), q || l && z ? (j.click(), P.preventBaseUIHandler()) : O && (E?.(P), P.preventBaseUIHandler());
                    return;
                }
                O && (!l && (V || B) && P.preventDefault(), !l && B && E?.(P));
            },
            onKeyUp (P) {
                if (!e) {
                    if (Ame(P), $?.(P), P.target === P.currentTarget && l && b && jme(P.currentTarget) && P.key === " ") {
                        P.preventDefault();
                        return;
                    }
                    P.baseUIHandlerPrevented || P.target === P.currentTarget && !l && !b && P.key === " " && E?.(P);
                }
            },
            onPointerDown (P) {
                if (e) {
                    P.preventDefault();
                    return;
                }
                N?.(P);
            }
        }, l ? {
            type: "button"
        } : {
            role: "button"
        }, g, R);
    }, [
        e,
        g,
        b,
        l
    ]), x = oi((C)=>{
        p.current = C, _();
    });
    return {
        getButtonProps: v,
        buttonRef: x
    };
}
function jme(r) {
    return Vc(r) && r.tagName === "BUTTON";
}
function Ber(r) {
    return !!(r?.tagName === "A" && r?.href);
}
export { Ber, S0, jme };
var __wakaru_Lme_initialized = false;
export function Lme() {
if (__wakaru_Lme_initialized) return;
__wakaru_Lme_initialized = true;
"use client";
Ou(), oc(), Pme(), FY(), bo(), xw(), wIe(), gki(), i(S0, "useButton"), i(jme, "isButtonElement"), i(Ber, "isValidLinkElement");

}

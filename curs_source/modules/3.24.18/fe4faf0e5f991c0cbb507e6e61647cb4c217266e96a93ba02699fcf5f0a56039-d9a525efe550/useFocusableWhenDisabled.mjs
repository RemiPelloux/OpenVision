import { i } from "./plugin-brand-icon.js";
import * as Eui from "./react-runtime/react/esm-index-production.js";
function zer(r) {
    const { focusableWhenDisabled: e, disabled: a, composite: s = !1, tabIndex: l = 0, isNativeButton: u } = r, p = s && e !== !1, m = s && e === !1;
    return {
        props: Eui.useMemo(()=>{
            const g = {
                onKeyDown (_) {
                    a && e && _.key !== "Tab" && _.preventDefault();
                }
            };
            return s || (g.tabIndex = l, !u && a && (g.tabIndex = e ? l : -1)), (u && (e || p) || !u && a) && (g["aria-disabled"] = a), u && (!e || m) && (g.disabled = a), g;
        }, [
            s,
            a,
            e,
            p,
            m,
            u,
            l
        ])
    };
}
export { zer };
var __wakaru_gki_initialized = false;
export function gki() {
if (__wakaru_gki_initialized) return;
__wakaru_gki_initialized = true;
"use client";
i(zer, "useFocusableWhenDisabled");

}

import { i } from "./plugin-brand-icon.js";
import { useRef as Bli } from "./react-runtime/react/esm-index-production.js";
import { useCallback as UWn } from "./react-runtime/react/esm-index-production.js";
import { useSyncExternalStore as qli } from "./react-runtime/react/esm-index-production.js";
import { useMemo as zli } from "./react-runtime/react/esm-index-production.js";
function OYn(r, e) {
    if (e.light.includes(r)) return "light";
    if (e.dark.includes(r)) return "dark";
}
function zYn(r, e) {
    if (typeof document > "u" || !r) return e.fallback;
    let a = r;
    for(; a;){
        const s = a.getAttribute("data-theme");
        if (s) return OYn(s, e.dataThemes) ?? e.fallback;
        const l = a.classList;
        if (e.classNames.light.some((u)=>l.contains(u))) return "light";
        if (e.classNames.dark.some((u)=>l.contains(u))) return "dark";
        a = a.parentElement;
    }
    return e.fallback;
}
function BYn() {
    return i(function(e) {
        if (typeof document > "u") return ()=>{};
        const a = new MutationObserver(e), s = new MutationObserver(e);
        return a.observe(document.body, {
            attributes: !0,
            attributeFilter: [
                "data-theme",
                "class"
            ],
            subtree: !0
        }), s.observe(document.documentElement, {
            attributes: !0,
            attributeFilter: [
                "data-theme",
                "class"
            ]
        }), ()=>{
            a.disconnect(), s.disconnect();
        };
    }, "subscribe");
}
function qYn({ elementRef: r, mapping: e }) {
    const a = Bli(null), s = r ?? a, l = zli(()=>BYn(), []), u = UWn(()=>zYn(s.current, e), [
        s,
        e
    ]), p = UWn(()=>e.fallback, [
        e.fallback
    ]);
    return qli(l, u, p);
}
export { BYn, OYn, qYn, zYn };
var __wakaru_V_i_initialized = false;
export function V_i() {
if (__wakaru_V_i_initialized) return;
__wakaru_V_i_initialized = true;
"use strict";
i(OYn, "getMarkerThemeType"), i(zYn, "getThemeTypeFromElement"), i(BYn, "createSubscribe"), i(qYn, "useThemeType");

}

import { a } from "./business-error.js";
import { useCallback as DD } from "./react-runtime/react/esm-index-production.js";
import { useSyncExternalStore as LD } from "./react-runtime/react/esm-index-production.js";
var xS;
export { xS };
var __wakaru_IV_initialized = false;
export function IV() {
if (__wakaru_IV_initialized) return;
__wakaru_IV_initialized = true;
"use client";
xS = a((e, t = !1)=>{
    const r = DD((i)=>{
        if (globalThis.window?.matchMedia == null) return ()=>{};
        const s = globalThis.window.matchMedia(e);
        return s.addEventListener("change", i), ()=>{
            s.removeEventListener("change", i);
        };
    }, [
        e
    ]);
    return LD(r, a(()=>globalThis.window?.matchMedia == null ? t : globalThis.window.matchMedia(e).matches, "getSnapshot"), a(()=>t, "getServerSnapshot"));
}, "useMediaQuery");

}

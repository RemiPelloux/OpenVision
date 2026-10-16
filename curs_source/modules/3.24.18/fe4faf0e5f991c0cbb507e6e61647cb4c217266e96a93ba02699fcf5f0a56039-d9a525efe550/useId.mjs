import { i } from "./plugin-brand-icon.js";
import { CS, FY } from "./safeReact.mjs";
import * as KWn from "./react-runtime/react/esm-index-production.js";
function TQn(r, e = "mui") {
    const [a, s] = KWn.useState(r), l = r || a;
    return KWn.useEffect(()=>{
        a == null && (ITt += 1, s(`${e}-${ITt}`));
    }, [
        a,
        e
    ]), l;
}
function uP(r, e) {
    if (NTt !== void 0) {
        const a = NTt();
        return r ?? (e ? `${e}-${a}` : a);
    }
    return TQn(r, e);
}
var ITt, NTt;
export { ITt, NTt, TQn, uP };
var __wakaru_zY_initialized = false;
export function zY() {
if (__wakaru_zY_initialized) return;
__wakaru_zY_initialized = true;
"use client";
FY(), ITt = 0, i(TQn, "useGlobalId"), NTt = CS.useId, i(uP, "useId");

}

import { Tl, vd } from "./empty.mjs";
import { i } from "./plugin-brand-icon.js";
function Li(r, e, a, s) {
    let l = !1, u = !1;
    const p = s ?? Tl;
    return {
        reason: r,
        event: e ?? new Event("base-ui"),
        cancel () {
            l = !0;
        },
        allowPropagation () {
            u = !0;
        },
        get isCanceled () {
            return l;
        },
        get isPropagationAllowed () {
            return u;
        },
        trigger: a,
        ...p
    };
}
function DY(r, e, a) {
    const s = a ?? Tl;
    return {
        reason: r,
        event: e ?? new Event("base-ui"),
        ...s
    };
}
export { DY, Li };
var __wakaru_yc_initialized = false;
export function yc() {
if (__wakaru_yc_initialized) return;
__wakaru_yc_initialized = true;
vd(), i(Li, "createChangeEventDetails"), i(DY, "createGenericEventDetails");

}

import { Pme, zT } from "./error.mjs";
import { i } from "./plugin-brand-icon.js";
import * as AX from "./react-runtime/react/esm-index-production.js";
function a3({ controlled: r, default: e, name: a, state: s = "value" }) {
    const { current: l } = AX.useRef(r !== void 0), [u, p] = AX.useState(e), m = l ? r : u;
    {
        AX.useEffect(()=>{
            l !== (r !== void 0) && zT([
                `A component is changing the ${l ? "" : "un"}controlled ${s} state of ${a} to be ${l ? "un" : ""}controlled.`,
                "Elements should not switch from uncontrolled to controlled (or vice versa).",
                `Decide between using a controlled or uncontrolled ${a} element for the lifetime of the component.`,
                "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.",
                "More info: https://fb.me/react-controlled-components"
            ].join(`
`));
        }, [
            s,
            a,
            r
        ]);
        const { current: g } = AX.useRef(e);
        AX.useEffect(()=>{
            !l && i$t(g) !== i$t(e) && zT([
                `A component is changing the default ${s} state of an uncontrolled ${a} after being initialized. To suppress this warning opt to use a controlled ${a}.`
            ].join(`
`));
        }, [
            e
        ]);
    }
    const b = AX.useCallback((g)=>{
        l || p(g);
    }, []);
    return [
        m,
        b
    ];
}
function i$t(r) {
    let e = 0;
    const a = new WeakMap;
    try {
        return JSON.stringify(r, i(function(u, p) {
            if (!(u === "_owner" && this != null && typeof this == "object" && "$$typeof" in this)) {
                if (typeof p == "bigint") return `__bigint__:${p}`;
                if (p !== null && typeof p == "object") {
                    const m = a.get(p);
                    if (m !== void 0) return `__object__:${m}`;
                    a.set(p, e), e += 1;
                }
                return p;
            }
        }, "replacer")) ?? `__top__:${typeof r}`;
    } catch  {
        return "__unserializable__";
    }
}
export { a3, i$t };
var __wakaru_BT_initialized = false;
export function BT() {
if (__wakaru_BT_initialized) return;
__wakaru_BT_initialized = true;
"use client";
Pme(), i(a3, "useControlled"), i(i$t, "serializeToDevModeString");

}

import { dDe } from "./Ycg.js";
import { OXt } from "./index.mjs";
import { E } from "./tslib.es6.js";
import { DG, pC } from "./useIsoLayoutEffect.mjs";
import { Qdw, RAf } from "./visuallyHidden.mjs";
import { jsx as Jdw } from "./react-runtime/react/esm-jsx-runtime-production.js";
import * as PAf from "./react-runtime/react/esm-index-production.js";
var qxt;
export { qxt };
var __wakaru_CLl_initialized = false;
export function CLl() {
if (__wakaru_CLl_initialized) return;
__wakaru_CLl_initialized = true;
"use client";
E(), DG(), OXt(), Qdw(), qxt = PAf.forwardRef(function(e, n) {
    const [i, r] = PAf.useState();
    return pC(()=>{
        dDe.screenReader.voiceOver && dDe.engine.webkit && r("button");
    }, []), Jdw("span", {
        ...e,
        ref: n,
        style: RAf,
        "aria-hidden": i ? void 0 : !0,
        ...{
            tabIndex: 0,
            role: i
        },
        "data-base-ui-focus-guard": ""
    });
}), process.env.NODE_ENV !== "production" && (qxt.displayName = "FocusGuard");

}

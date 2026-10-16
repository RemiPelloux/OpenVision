import { Gnt, H8t } from "./engine.js";
import { j7y, qsh } from "./screen-reader.js";
import { E } from "./tslib.es6.js";
import { jv, su } from "./useIsoLayoutEffect.js";
import { WHe, Z5e } from "./visuallyHidden.js";
import { jsx as X7y } from "./react-runtime/react/esm-jsx-runtime-production.js";
import * as ioh from "./react-runtime/react/esm-index-production.js";
var YHe;
export { YHe };
var __wakaru_vRr_initialized = false;
export function vRr() {
if (__wakaru_vRr_initialized) return;
__wakaru_vRr_initialized = true;
E(), jv(), WHe(), j7y(), H8t(), YHe = ioh.forwardRef(function(e, n) {
    const [i, r] = ioh.useState();
    return su(()=>{
        qsh && Gnt && r("button");
    }, []), X7y("span", {
        ...e,
        ref: n,
        style: Z5e,
        "aria-hidden": i ? void 0 : !0,
        ...{
            tabIndex: 0,
            role: i
        },
        "data-base-ui-focus-guard": ""
    });
}), process.env.NODE_ENV !== "production" && (YHe.displayName = "FocusGuard");

}

import { LE } from "./empty.js";
import { Mx } from "./qIc.js";
import { x } from "./tslib.es6.js";
import * as _sl from "./react-runtime/react/esm-index-production.js";
var xhs;
export { xhs };
var __wakaru_mCe_initialized = false;
export function mCe() {
if (__wakaru_mCe_initialized) return;
__wakaru_mCe_initialized = true;
x(), LE(), xhs = _sl.createContext({
    formRef: {
        current: {
            fields: new Map
        }
    },
    errors: {},
    clearErrors: Mx,
    validationMode: "onSubmit",
    submitAttemptedRef: {
        current: !1
    }
}), process.env.NODE_ENV !== "production" && (xhs.displayName = "FormContext");

}

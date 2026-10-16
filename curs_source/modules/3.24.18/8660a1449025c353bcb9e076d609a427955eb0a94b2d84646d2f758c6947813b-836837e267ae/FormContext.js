import { Ax } from "./LYd.js";
import { vA } from "./empty.js";
import { E } from "./tslib.es6.js";
import * as rlh from "./react-runtime/react/esm-index-production.js";
var EJo;
export { EJo };
var __wakaru_C_e_initialized = false;
export function C_e() {
if (__wakaru_C_e_initialized) return;
__wakaru_C_e_initialized = true;
E(), vA(), EJo = rlh.createContext({
    formRef: {
        current: {
            fields: new Map
        }
    },
    errors: {},
    clearErrors: Ax,
    validationMode: "onSubmit",
    submitAttemptedRef: {
        current: !1
    }
}), process.env.NODE_ENV !== "production" && (EJo.displayName = "FormContext");

}

import { NSn, dsl, qgt, sY } from "./constants_11.js";
import { LE, R0 } from "./empty.js";
import { Eb } from "./formatErrorMessage.js";
import { Mx } from "./qIc.js";
import { x } from "./tslib.es6.js";
import * as hsl from "./react-runtime/react/esm-index-production.js";
var khs, OSn;
export { OSn, khs };
var __wakaru_mj_initialized = false;
export function mj() {
if (__wakaru_mj_initialized) return;
__wakaru_mj_initialized = true;
x(), Eb(), LE(), sY(), khs = {
    invalid: void 0,
    name: void 0,
    validityData: {
        state: NSn,
        errors: [],
        error: "",
        value: "",
        initialValue: null
    },
    setValidityData: Mx,
    disabled: void 0,
    touched: qgt.touched,
    setTouched: Mx,
    dirty: qgt.dirty,
    setDirty: Mx,
    filled: qgt.filled,
    setFilled: Mx,
    focused: qgt.focused,
    setFocused: Mx,
    validate: ()=>null,
    validationMode: "onSubmit",
    validationDebounceTime: 0,
    shouldValidateOnChange: ()=>!1,
    state: dsl,
    markedDirtyRef: {
        current: !1
    },
    registerFieldControl: Mx,
    validation: {
        getValidationProps: (e, t = R0)=>t,
        inputRef: {
            current: null
        },
        registerInput: Mx,
        commit: async ()=>{},
        change: Mx
    }
}, OSn = hsl.createContext(khs), process.env.NODE_ENV !== "production" && (OSn.displayName = "FieldRootContext");

}

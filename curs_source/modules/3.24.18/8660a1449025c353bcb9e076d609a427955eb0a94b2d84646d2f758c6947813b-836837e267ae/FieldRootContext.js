import { Ax } from "./LYd.js";
import { BY, Jli, Xah, r7t } from "./constants_11.js";
import { pE, vA } from "./empty.js";
import { zS } from "./formatErrorMessage.js";
import { E } from "./tslib.es6.js";
import * as Zah from "./react-runtime/react/esm-index-production.js";
var kJo, eci;
export { eci, kJo };
var __wakaru_N7_initialized = false;
export function N7() {
if (__wakaru_N7_initialized) return;
__wakaru_N7_initialized = true;
E(), zS(), vA(), BY(), kJo = {
    invalid: void 0,
    name: void 0,
    validityData: {
        state: Jli,
        errors: [],
        error: "",
        value: "",
        initialValue: null
    },
    setValidityData: Ax,
    disabled: void 0,
    touched: r7t.touched,
    setTouched: Ax,
    dirty: r7t.dirty,
    setDirty: Ax,
    filled: r7t.filled,
    setFilled: Ax,
    focused: r7t.focused,
    setFocused: Ax,
    validate: ()=>null,
    validationMode: "onSubmit",
    validationDebounceTime: 0,
    shouldValidateOnChange: ()=>!1,
    state: Xah,
    markedDirtyRef: {
        current: !1
    },
    registerFieldControl: Ax,
    validation: {
        getValidationProps: (t, e = pE)=>e,
        inputRef: {
            current: null
        },
        registerInput: Ax,
        commit: async ()=>{},
        change: Ax
    }
}, eci = Zah.createContext(kJo), process.env.NODE_ENV !== "production" && (eci.displayName = "FieldRootContext");

}

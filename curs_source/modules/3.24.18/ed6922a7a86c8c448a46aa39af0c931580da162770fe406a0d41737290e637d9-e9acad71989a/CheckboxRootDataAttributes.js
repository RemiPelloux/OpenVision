import { x } from "./tslib.es6.js";
var sTs;
export { sTs };
var __wakaru_wlf_initialized = false;
export function wlf() {
if (__wakaru_wlf_initialized) return;
__wakaru_wlf_initialized = true;
x(), sTs = (function(e) {
    return e.checked = "data-checked", e.unchecked = "data-unchecked", e.indeterminate = "data-indeterminate", e.disabled = "data-disabled", e.readonly = "data-readonly", e.required = "data-required", e.valid = "data-valid", e.invalid = "data-invalid", e.touched = "data-touched", e.dirty = "data-dirty", e.filled = "data-filled", e.focused = "data-focused", e;
})({});

}

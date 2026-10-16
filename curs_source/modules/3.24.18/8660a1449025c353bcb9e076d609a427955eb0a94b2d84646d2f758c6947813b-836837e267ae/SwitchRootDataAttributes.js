import { E } from "./tslib.es6.js";
var pma;
export { pma };
var __wakaru_USS_initialized = false;
export function USS() {
if (__wakaru_USS_initialized) return;
__wakaru_USS_initialized = true;
E(), pma = (function(t) {
    return t.checked = "data-checked", t.unchecked = "data-unchecked", t.disabled = "data-disabled", t.readonly = "data-readonly", t.required = "data-required", t.valid = "data-valid", t.invalid = "data-invalid", t.touched = "data-touched", t.dirty = "data-dirty", t.filled = "data-filled", t.focused = "data-focused", t;
})({});

}

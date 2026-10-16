import { Qof, Y0s } from "./MenuCheckboxItemDataAttributes.js";
import { $O, T5 } from "./stateAttributesMapping.js";
import { x } from "./tslib.es6.js";
var X0s;
export { X0s };
var __wakaru__Fl_initialized = false;
export function _Fl() {
if (__wakaru__Fl_initialized) return;
__wakaru__Fl_initialized = true;
x(), $O(), Qof(), X0s = {
    checked (e) {
        return e ? {
            [Y0s.checked]: ""
        } : {
            [Y0s.unchecked]: ""
        };
    },
    ...T5
};

}

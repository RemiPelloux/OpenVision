import { I4, jRe } from "./popupStateMapping.js";
import { E } from "./tslib.es6.js";
var Mwp;
export { Mwp };
var __wakaru_S_1_initialized = false;
export function S_1() {
if (__wakaru_S_1_initialized) return;
__wakaru_S_1_initialized = true;
E(), I4(), Mwp = (function(t) {
    return t[t.open = jRe.open] = "open", t[t.closed = jRe.closed] = "closed", t[t.startingStyle = jRe.startingStyle] = "startingStyle", t[t.endingStyle = jRe.endingStyle] = "endingStyle", t.nested = "data-nested", t.nestedDialogOpen = "data-nested-dialog-open", t;
})({});

}

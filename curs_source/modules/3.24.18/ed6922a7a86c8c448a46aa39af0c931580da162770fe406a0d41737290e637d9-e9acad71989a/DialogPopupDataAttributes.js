import { Ffe, g2 } from "./popupStateMapping.js";
import { x } from "./tslib.es6.js";
var Bcu;
export { Bcu };
var __wakaru_bJf_initialized = false;
export function bJf() {
if (__wakaru_bJf_initialized) return;
__wakaru_bJf_initialized = true;
x(), g2(), Bcu = (function(e) {
    return e[e.open = Ffe.open] = "open", e[e.closed = Ffe.closed] = "closed", e[e.startingStyle = Ffe.startingStyle] = "startingStyle", e[e.endingStyle = Ffe.endingStyle] = "endingStyle", e.nested = "data-nested", e.nestedDialogOpen = "data-nested-dialog-open", e;
})({});

}

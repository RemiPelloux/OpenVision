import { Ffe, g2 } from "./popupStateMapping.js";
import { x } from "./tslib.es6.js";
var GOs;
export { GOs };
var __wakaru_FJf_initialized = false;
export function FJf() {
if (__wakaru_FJf_initialized) return;
__wakaru_FJf_initialized = true;
x(), g2(), GOs = (function(e) {
    return e[e.open = Ffe.open] = "open", e[e.closed = Ffe.closed] = "closed", e[e.startingStyle = Ffe.startingStyle] = "startingStyle", e[e.endingStyle = Ffe.endingStyle] = "endingStyle", e.nested = "data-nested", e.nestedDialogOpen = "data-nested-dialog-open", e;
})({});

}

import { eWe, l6 } from "./stateAttributesMapping.js";
import { E } from "./tslib.es6.js";
var Msp;
export { Msp };
var __wakaru_RqS_initialized = false;
export function RqS() {
if (__wakaru_RqS_initialized) return;
__wakaru_RqS_initialized = true;
E(), l6(), Msp = (function(t) {
    return t.index = "data-index", t.activationDirection = "data-activation-direction", t.orientation = "data-orientation", t.hidden = "data-hidden", t[t.startingStyle = eWe.startingStyle] = "startingStyle", t[t.endingStyle = eWe.endingStyle] = "endingStyle", t;
})({});

}

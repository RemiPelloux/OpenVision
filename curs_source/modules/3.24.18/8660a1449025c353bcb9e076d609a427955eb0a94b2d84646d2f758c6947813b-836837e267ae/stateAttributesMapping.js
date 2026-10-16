import { E } from "./tslib.es6.js";
var eWe, Nah, Lah, D7;
export { D7, Lah, Nah, eWe };
var __wakaru_l6_initialized = false;
export function l6() {
if (__wakaru_l6_initialized) return;
__wakaru_l6_initialized = true;
E(), eWe = (function(t) {
    return t.startingStyle = "data-starting-style", t.endingStyle = "data-ending-style", t;
})({}), Nah = {
    [eWe.startingStyle]: ""
}, Lah = {
    [eWe.endingStyle]: ""
}, D7 = {
    transitionStatus (t) {
        return t === "starting" ? Nah : t === "ending" ? Lah : null;
    }
};

}

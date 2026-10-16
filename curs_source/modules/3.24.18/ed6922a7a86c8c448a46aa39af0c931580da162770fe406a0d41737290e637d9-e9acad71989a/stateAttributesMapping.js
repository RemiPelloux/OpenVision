import { x } from "./tslib.es6.js";
var mYe, Yrl, Xrl, T5;
export { T5, Xrl, Yrl, mYe };
var __wakaru_$O_initialized = false;
export function $O() {
if (__wakaru_$O_initialized) return;
__wakaru_$O_initialized = true;
x(), mYe = (function(e) {
    return e.startingStyle = "data-starting-style", e.endingStyle = "data-ending-style", e;
})({}), Yrl = {
    [mYe.startingStyle]: ""
}, Xrl = {
    [mYe.endingStyle]: ""
}, T5 = {
    transitionStatus (e) {
        return e === "starting" ? Yrl : e === "ending" ? Xrl : null;
    }
};

}

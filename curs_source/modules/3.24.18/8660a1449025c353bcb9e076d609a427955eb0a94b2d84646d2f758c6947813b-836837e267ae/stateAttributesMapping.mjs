import { E } from "./tslib.es6.js";
var v3n, G2f, q2f, vOl;
export { G2f, q2f, v3n, vOl };
var __wakaru_GSs_initialized = false;
export function GSs() {
if (__wakaru_GSs_initialized) return;
__wakaru_GSs_initialized = true;
E(), v3n = (function(t) {
    return t.startingStyle = "data-starting-style", t.endingStyle = "data-ending-style", t;
})({}), G2f = {
    [v3n.startingStyle]: ""
}, q2f = {
    [v3n.endingStyle]: ""
}, vOl = {
    transitionStatus (t) {
        return t === "starting" ? G2f : t === "ending" ? q2f : null;
    }
};

}

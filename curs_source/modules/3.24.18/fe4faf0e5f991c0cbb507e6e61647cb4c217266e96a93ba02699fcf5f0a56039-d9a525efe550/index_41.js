import { i } from "./plugin-brand-icon.js";
function Rfe(r) {
    return r !== null && (r < 32 || r === 127);
}
function Ka(r) {
    return r !== null && r < -2;
}
function op(r) {
    return r !== null && (r < 0 || r === 32);
}
function gl(r) {
    return r === -2 || r === -1 || r === 32;
}
function e$(r) {
    return e;
    function e(a) {
        return a !== null && a > -1 && r.test(String.fromCharCode(a));
    }
}
var Wy, I0, scr, qNe, ccr, lcr, Pfe, kP;
export { I0, Ka, Pfe, Rfe, Wy, ccr, e$, gl, kP, lcr, op, qNe, scr };
var __wakaru_Zl_initialized = false;
export function Zl() {
if (__wakaru_Zl_initialized) return;
__wakaru_Zl_initialized = true;
Wy = e$(/[A-Za-z]/), I0 = e$(/[\dA-Za-z]/), scr = e$(/[#-'*+\--9=?A-Z^-~]/), i(Rfe, "asciiControl"), qNe = e$(/\d/), ccr = e$(/[\dA-Fa-f]/), lcr = e$(/[!-/:-@[-`{-~]/), i(Ka, "markdownLineEnding"), i(op, "markdownLineEndingOrSpace"), i(gl, "markdownSpace"), Pfe = e$(/\p{P}|\p{S}/u), kP = e$(/\s/), i(e$, "regexCheck");

}

import { i } from "./plugin-brand-icon.js";
function fNt(r) {
    const e = String(r || "").trim();
    return e ? e.split(/[ \t\n\r\f]+/g) : [];
}
function xNe(r) {
    return r.join(" ").trim();
}
export { fNt, xNe };
var __wakaru_CNe_initialized = false;
export function CNe() {
if (__wakaru_CNe_initialized) return;
__wakaru_CNe_initialized = true;
i(fNt, "parse"), i(xNe, "stringify");

}

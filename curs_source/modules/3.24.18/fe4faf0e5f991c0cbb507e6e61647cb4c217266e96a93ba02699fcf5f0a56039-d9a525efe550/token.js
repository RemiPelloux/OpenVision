import { i } from "./plugin-brand-icon.js";
function NNe(r, e) {
    for(let a = r.attrs.length - 1; a >= 0; a--)if (r.attrs[a].name === e) return r.attrs[a].value;
    return null;
}
var ru;
export { NNe, ru };
var __wakaru_MNt_initialized = false;
export function MNt() {
if (__wakaru_MNt_initialized) return;
__wakaru_MNt_initialized = true;
(function(r) {
    r[r.CHARACTER = 0] = "CHARACTER", r[r.NULL_CHARACTER = 1] = "NULL_CHARACTER", r[r.WHITESPACE_CHARACTER = 2] = "WHITESPACE_CHARACTER", r[r.START_TAG = 3] = "START_TAG", r[r.END_TAG = 4] = "END_TAG", r[r.COMMENT = 5] = "COMMENT", r[r.DOCTYPE = 6] = "DOCTYPE", r[r.EOF = 7] = "EOF", r[r.HIBERNATION = 8] = "HIBERNATION";
})(ru || (ru = {})), i(NNe, "getTokenAttr");

}

import { V7r } from "./decode_2.js";
import { K7r } from "./encode.js";
import { Eqt } from "./escape_2.js";
var X7r, Y7r;
export { X7r, Y7r };
var __wakaru_gCi_initialized = false;
export function gCi() {
if (__wakaru_gCi_initialized) return;
__wakaru_gCi_initialized = true;
V7r(), K7r(), Eqt(), V7r(), K7r(), Eqt(), (function(r) {
    r[r.XML = 0] = "XML", r[r.HTML = 1] = "HTML";
})(X7r || (X7r = {})), (function(r) {
    r[r.UTF8 = 0] = "UTF8", r[r.ASCII = 1] = "ASCII", r[r.Extensive = 2] = "Extensive", r[r.Attribute = 3] = "Attribute", r[r.Text = 4] = "Text";
})(Y7r || (Y7r = {}));

}

import { fCs } from "./decode_2.js";
import { hef } from "./encode.js";
import { vCs } from "./escape_2.js";
import { x } from "./tslib.es6.js";
var $Pl, HPl;
export { $Pl, HPl };
var __wakaru_pef_initialized = false;
export function pef() {
if (__wakaru_pef_initialized) return;
__wakaru_pef_initialized = true;
x(), fCs(), fCs(), hef(), vCs(), vCs(), (function(e) {
    e[e.XML = 0] = "XML", e[e.HTML = 1] = "HTML";
})($Pl || ($Pl = {})), (function(e) {
    e[e.UTF8 = 0] = "UTF8", e[e.ASCII = 1] = "ASCII", e[e.Extensive = 2] = "Extensive", e[e.Attribute = 3] = "Attribute", e[e.Text = 4] = "Text";
})(HPl || (HPl = {}));

}

import { efs, i3g } from "./aria_2.js";
import { Gdl, r3g } from "./html.js";
import { n3g } from "./merge_3.js";
import { Ldl } from "./qIc.js";
import { Vdl, s3g } from "./svg.js";
import { x } from "./tslib.es6.js";
import { o3g, tfs } from "./xlink.js";
import { c3g, ifs } from "./xml.js";
import { a3g, nfs } from "./xmlns.js";
var wft, SCe;
export { SCe, wft };
var __wakaru_D5t_initialized = false;
export function D5t() {
if (__wakaru_D5t_initialized) return;
__wakaru_D5t_initialized = true;
x(), n3g(), i3g(), r3g(), s3g(), o3g(), a3g(), c3g(), wft = Ldl([
    efs,
    Gdl,
    tfs,
    nfs,
    ifs
], "html"), SCe = Ldl([
    efs,
    Vdl,
    tfs,
    nfs,
    ifs
], "svg");

}

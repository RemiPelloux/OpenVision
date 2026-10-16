import { Gjg, Hjg, Njg, Ujg, Vjg, gjg, pjg, vEl } from "./I0l.js";
import { mjg } from "./comment.js";
import { fjg } from "./doctype_2.js";
import { Bjg } from "./element_2.js";
import { gfs } from "./index_50.js";
import { pfs } from "./qIc.js";
import { $jg } from "./raw.js";
import { Wjg } from "./root_3.js";
import { bEl } from "./text_5.js";
import { x } from "./tslib.es6.js";
var yEl;
export { yEl };
var __wakaru_jjg_initialized = false;
export function jjg() {
if (__wakaru_jjg_initialized) return;
__wakaru_jjg_initialized = true;
x(), gfs(), mjg(), fjg(), Bjg(), $jg(), Wjg(), bEl(), yEl = pfs("type", {
    invalid: Gjg,
    unknown: Vjg,
    handlers: {
        comment: pjg,
        doctype: gjg,
        element: Njg,
        raw: Ujg,
        root: Hjg,
        text: vEl
    }
});

}

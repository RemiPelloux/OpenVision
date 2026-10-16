import { Xlr, pRt } from "./index_70.js";
import { R3i } from "./index_72.js";
import { txi } from "./index_82.js";
import { rxi } from "./index_83.js";
import { sxi } from "./index_84.js";
import { lxi } from "./index_85.js";
import { i } from "./plugin-brand-icon.js";
import { Ylr } from "./syntax.js";
import { $dr } from "./syntax_2.js";
import { Fdr } from "./syntax_3.js";
import { qdr } from "./syntax_4.js";
import { Wdr } from "./syntax_5.js";
function Kdr(r) {
    return pRt([
        Ylr(),
        $dr(),
        Fdr(r),
        qdr(),
        Wdr()
    ]);
}
export { Kdr };
var __wakaru_uxi_initialized = false;
export function uxi() {
if (__wakaru_uxi_initialized) return;
__wakaru_uxi_initialized = true;
Xlr(), R3i(), txi(), rxi(), sxi(), lxi(), i(Kdr, "gfm");

}

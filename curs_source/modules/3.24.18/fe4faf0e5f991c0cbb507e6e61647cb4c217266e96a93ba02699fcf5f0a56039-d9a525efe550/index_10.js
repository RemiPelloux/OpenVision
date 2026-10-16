import { Jki, aNt } from "./aria.js";
import { avi } from "./find.js";
import { ivi } from "./hast-to-react.js";
import { Qki, vir } from "./html.js";
import { Yki, eNt } from "./merge.js";
import { tNt } from "./normalize.js";
import { evi, xir } from "./svg.js";
import { cNt, tvi } from "./xlink.js";
import { rvi, uNt } from "./xml.js";
import { lNt, nvi } from "./xmlns.js";
var SB, yC;
export { SB, yC };
var __wakaru_EB_initialized = false;
export function EB() {
if (__wakaru_EB_initialized) return;
__wakaru_EB_initialized = true;
Yki(), Jki(), Qki(), evi(), tvi(), nvi(), rvi(), ivi(), avi(), tNt(), SB = eNt([
    aNt,
    vir,
    cNt,
    lNt,
    uNt
], "html"), yC = eNt([
    aNt,
    xir,
    cNt,
    lNt,
    uNt
], "svg");

}

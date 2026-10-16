import { cRs, cSv } from "./filter.mjs";
import { jG, qAs } from "./index_12.mjs";
import { uRs, uSv } from "./mask.mjs";
import { IXl, dRs } from "./number_2.mjs";
import { E } from "./tslib.es6.js";
var hSv, xXl;
export { hSv, xXl };
var __wakaru_pSv_initialized = false;
export function pSv() {
if (__wakaru_pSv_initialized) return;
__wakaru_pSv_initialized = true;
E(), qAs(), cSv(), uSv(), IXl(), hSv = {
    ...dRs,
    color: jG,
    backgroundColor: jG,
    outlineColor: jG,
    fill: jG,
    stroke: jG,
    borderColor: jG,
    borderTopColor: jG,
    borderRightColor: jG,
    borderBottomColor: jG,
    borderLeftColor: jG,
    filter: cRs,
    WebkitFilter: cRs,
    mask: uRs,
    WebkitMask: uRs
}, xXl = (t)=>hSv[t];

}

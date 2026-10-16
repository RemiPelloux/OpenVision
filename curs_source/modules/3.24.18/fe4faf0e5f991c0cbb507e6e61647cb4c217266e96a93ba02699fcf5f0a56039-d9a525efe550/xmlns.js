import { kir, sNt } from "./case-insensitive-transform.js";
import { CB, aJ } from "./create.js";
var lNt;
export { lNt };
var __wakaru_nvi_initialized = false;
export function nvi() {
if (__wakaru_nvi_initialized) return;
__wakaru_nvi_initialized = true;
aJ(), kir(), lNt = CB({
    attributes: {
        xmlnsxlink: "xmlns:xlink"
    },
    properties: {
        xmlnsXLink: null,
        xmlns: null
    },
    space: "xmlns",
    transform: sNt
});

}

import { CB, aJ } from "./create.js";
var cNt;
export { cNt };
var __wakaru_tvi_initialized = false;
export function tvi() {
if (__wakaru_tvi_initialized) return;
__wakaru_tvi_initialized = true;
aJ(), cNt = CB({
    properties: {
        xLinkActuate: null,
        xLinkArcRole: null,
        xLinkHref: null,
        xLinkRole: null,
        xLinkShow: null,
        xLinkTitle: null,
        xLinkType: null
    },
    space: "xlink",
    transform (r, e) {
        return "xlink:" + e.slice(5).toLowerCase();
    }
});

}

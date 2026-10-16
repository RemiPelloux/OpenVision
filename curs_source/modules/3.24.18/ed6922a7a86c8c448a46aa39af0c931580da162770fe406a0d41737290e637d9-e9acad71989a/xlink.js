import { R5t } from "./create.js";
import { A5t } from "./qIc.js";
import { x } from "./tslib.es6.js";
var tfs;
export { tfs };
var __wakaru_o3g_initialized = false;
export function o3g() {
if (__wakaru_o3g_initialized) return;
__wakaru_o3g_initialized = true;
x(), R5t(), tfs = A5t({
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
    transform (e, t) {
        return "xlink:" + t.slice(5).toLowerCase();
    }
});

}

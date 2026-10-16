import { Wbn } from "./LYd.js";
import { Gbn } from "./create.js";
import { E } from "./tslib.es6.js";
var gia;
export { gia };
var __wakaru_$qy_initialized = false;
export function $qy() {
if (__wakaru_$qy_initialized) return;
__wakaru_$qy_initialized = true;
E(), Gbn(), gia = Wbn({
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
    transform (t, e) {
        return "xlink:" + e.slice(5).toLowerCase();
    }
});

}

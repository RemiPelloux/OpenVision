import { b2f, lOl } from "./floating-ui.react-dom.mjs";
import { E } from "./tslib.es6.js";
var PPf, MPf;
export { MPf, PPf };
var __wakaru_hgw_initialized = false;
export function hgw() {
if (__wakaru_hgw_initialized) return;
__wakaru_hgw_initialized = true;
E(), lOl(), PPf = b2f().fn, MPf = {
    name: "hide",
    async fn (t) {
        const { width: e, height: n, x: i, y: r } = t.rects.reference, s = e === 0 && n === 0 && i === 0 && r === 0;
        return {
            data: {
                referenceHidden: (await PPf(t)).data?.referenceHidden || s
            }
        };
    }
};

}

import { t7t, wah } from "./floating-ui.react-dom.js";
import { E } from "./tslib.es6.js";
var Slh, klh;
export { Slh, klh };
var __wakaru_$jy_initialized = false;
export function $jy() {
if (__wakaru_$jy_initialized) return;
__wakaru_$jy_initialized = true;
E(), t7t(), Slh = wah().fn, klh = {
    name: "hide",
    async fn (t) {
        const { width: e, height: n, x: i, y: r } = t.rects.reference, s = e === 0 && n === 0 && i === 0 && r === 0;
        return {
            data: {
                referenceHidden: (await Slh(t)).data?.referenceHidden || s
            }
        };
    }
};

}

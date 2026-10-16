import { Brl, jBt } from "./floating-ui.react-dom.js";
import { x } from "./tslib.es6.js";
var Fsl, Bsl;
export { Bsl, Fsl };
var __wakaru_FPg_initialized = false;
export function FPg() {
if (__wakaru_FPg_initialized) return;
__wakaru_FPg_initialized = true;
x(), jBt(), Fsl = Brl().fn, Bsl = {
    name: "hide",
    async fn (e) {
        const { width: t, height: n, x: i, y: r } = e.rects.reference, s = t === 0 && n === 0 && i === 0 && r === 0;
        return {
            data: {
                referenceHidden: (await Fsl(e)).data?.referenceHidden || s
            }
        };
    }
};

}

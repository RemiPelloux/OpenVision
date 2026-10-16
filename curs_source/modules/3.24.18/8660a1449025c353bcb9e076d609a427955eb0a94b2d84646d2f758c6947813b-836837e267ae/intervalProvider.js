import { E } from "./tslib.es6.js";
var pSi;
export { pSi };
var __wakaru_PM1_initialized = false;
export function PM1() {
if (__wakaru_PM1_initialized) return;
__wakaru_PM1_initialized = true;
E(), pSi = {
    setInterval (t, e, ...n) {
        const { delegate: i } = pSi;
        return i?.setInterval ? i.setInterval(t, e, ...n) : setInterval(t, e, ...n);
    },
    clearInterval (t) {
        const { delegate: e } = pSi;
        return (e?.clearInterval || clearInterval)(t);
    },
    delegate: void 0
};

}

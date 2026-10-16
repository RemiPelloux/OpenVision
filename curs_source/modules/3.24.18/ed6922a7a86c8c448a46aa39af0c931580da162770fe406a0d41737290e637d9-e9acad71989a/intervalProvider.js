import { x } from "./tslib.es6.js";
var uMn;
export { uMn };
var __wakaru_lpv_initialized = false;
export function lpv() {
if (__wakaru_lpv_initialized) return;
__wakaru_lpv_initialized = true;
x(), uMn = {
    setInterval (e, t, ...n) {
        const { delegate: i } = uMn;
        return i?.setInterval ? i.setInterval(e, t, ...n) : setInterval(e, t, ...n);
    },
    clearInterval (e) {
        const { delegate: t } = uMn;
        return (t?.clearInterval || clearInterval)(e);
    },
    delegate: void 0
};

}

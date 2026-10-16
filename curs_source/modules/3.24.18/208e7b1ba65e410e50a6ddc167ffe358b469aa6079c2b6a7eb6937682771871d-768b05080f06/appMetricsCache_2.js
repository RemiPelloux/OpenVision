import { JLe } from "./appMetricsCache.js";
import { h } from "./tslib.es6.js";
import { app as Fb } from "electron";
function YLe(e, t = Date.now) {
    let n;
    return {
        get (r) {
            const s = t();
            if (n && s - n.at < r) return n.value;
            const i = e();
            return n = {
                at: s,
                value: i
            }, i;
        }
    };
}
var Yx, Jx, Xx;
export { Jx, Xx, YLe, Yx };
var __wakaru_Wb_initialized = false;
export function Wb() {
if (__wakaru_Wb_initialized) return;
__wakaru_Wb_initialized = true;
"use strict";
h(), JLe(), Yx = Fb.getAppMetrics.bind(Fb), Jx = YLe(Yx), Xx = 1e3;

}

import { N5 } from "./Observable_3.js";
import { Jzs } from "./async_2.js";
import { KUi } from "./executeSchedule.js";
import { NPu } from "./isDate.js";
import { x } from "./tslib.es6.js";
var OPu;
export { OPu };
var __wakaru_ypv_initialized = false;
export function ypv() {
if (__wakaru_ypv_initialized) return;
__wakaru_ypv_initialized = true;
x(), Jzs(), NPu(), N5(), KUi(), OPu = class extends Error {
    info;
    constructor(e = null){
        super("Timeout has occurred"), this.info = e, this.name = "TimeoutError";
    }
};

}

import { Mxl } from "./focusManager.js";
import { Jhf } from "./onlineManager.js";
import { epf } from "./thenable.js";
import { E } from "./tslib.es6.js";
import { ZMe } from "./utils_33.js";
var Lxl;
export { Lxl };
var __wakaru_ipf_initialized = false;
export function ipf() {
if (__wakaru_ipf_initialized) return;
__wakaru_ipf_initialized = true;
E(), Mxl(), Jhf(), epf(), ZMe(), Lxl = class extends Error {
    constructor(t){
        super("CancelledError"), this.revert = t?.revert, this.silent = t?.silent;
    }
};

}

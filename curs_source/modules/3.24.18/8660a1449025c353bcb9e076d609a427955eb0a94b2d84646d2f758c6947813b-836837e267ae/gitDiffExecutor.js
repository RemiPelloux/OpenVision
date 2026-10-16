import { E } from "./tslib.es6.js";
import { Hu, jke } from "./utils_pb.js";
var ldg;
export { ldg };
var __wakaru_Z_k_initialized = false;
export function Z_k() {
if (__wakaru_Z_k_initialized) return;
__wakaru_Z_k_initialized = true;
"use strict";
E(), Hu(), ldg = class {
    constructor(t){
        this.gitContextService = t;
    }
    async execute(t, e, n) {
        const i = await this.gitContextService.getDiff(e);
        if (i === void 0) throw new Error("Git diff provider returned no response");
        return new jke(i);
    }
};

}

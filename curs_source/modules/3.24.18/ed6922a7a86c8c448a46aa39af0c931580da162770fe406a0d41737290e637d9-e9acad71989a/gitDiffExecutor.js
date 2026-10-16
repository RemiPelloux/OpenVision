import { x } from "./tslib.es6.js";
import { Wle, hu } from "./utils_pb.js";
var G0h;
export { G0h };
var __wakaru_XXv_initialized = false;
export function XXv() {
if (__wakaru_XXv_initialized) return;
__wakaru_XXv_initialized = true;
"use strict";
x(), hu(), G0h = class {
    constructor(e){
        this.gitContextService = e;
    }
    async execute(e, t, n) {
        const i = await this.gitContextService.getDiff(t);
        if (i === void 0) throw new Error("Git diff provider returned no response");
        return new Wle(i);
    }
};

}

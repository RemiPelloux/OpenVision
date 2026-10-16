import { _r, fr, hr } from "./bash.ts";
import { Tt } from "./index_3.ts";
import { h } from "./tslib.es6.js";
var as;
export { as };
var __wakaru_G9_initialized = false;
export function G9() {
if (__wakaru_G9_initialized) return;
__wakaru_G9_initialized = true;
"use strict";
h(), Tt(), as = class c2 {
    constructor(t){
        this.initializer = t;
    }
    promise;
    getExecutor() {
        return this.promise === void 0 && (this.promise = this.initializer()), this.promise;
    }
    async getCwd() {
        return (await this.getExecutor()).getCwd();
    }
    clone(t) {
        return new c2(async ()=>(await this.getExecutor()).clone(t));
    }
    async *execute(t, r, n) {
        var s = [];
        try {
            const a = hr(s, _r(t.withName("LazyTerminalExecutor.execute"))), c = await this.getExecutor();
            for await (const l of c.execute(t, r, n))yield l;
        } catch (a) {
            var i = a, o = !0;
        } finally{
            fr(s, i, o);
        }
    }
};

}

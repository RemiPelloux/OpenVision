var __wakaru_require_Deferred_cache;
export function require_Deferred() {
if (__wakaru_require_Deferred_cache) return __wakaru_require_Deferred_cache;
var exports2 = {};
__wakaru_require_Deferred_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.Deferred = void 0;
var Deferred = class {
    constructor(){
        this.resolve = ()=>null;
        this.reject = ()=>null;
        this.promise = new Promise((resolve36, reject2)=>{
            this.reject = reject2;
            this.resolve = resolve36;
        });
    }
};
exports2.Deferred = Deferred;

return exports2;
}

var __wakaru_require_pipe_cache;
export function require_pipe() {
if (__wakaru_require_pipe_cache) return __wakaru_require_pipe_cache;
var exports2 = {};
__wakaru_require_pipe_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.pipe = void 0;
function pipe3(...fns) {
    return fns.length === 1 ? fns[0] : (input)=>fns.reduce(pipeReducer, input);
}
exports2.pipe = pipe3;
function pipeReducer(prev, fn) {
    return fn(prev);
}

return exports2;
}

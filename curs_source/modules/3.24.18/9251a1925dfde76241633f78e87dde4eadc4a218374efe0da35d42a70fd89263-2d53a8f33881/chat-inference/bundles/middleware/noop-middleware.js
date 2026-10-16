import { BaseMiddleware, init_base3 } from "../base.js";
var NoopMiddleware, createNoopMiddleware, noopMiddleware;
export { NoopMiddleware, createNoopMiddleware, noopMiddleware };
var __wakaru_init_noop_middleware_initialized = false;
export function init_noop_middleware() {
if (__wakaru_init_noop_middleware_initialized) return;
__wakaru_init_noop_middleware_initialized = true;
"use strict";
init_base3();
NoopMiddleware = class extends BaseMiddleware {
};
createNoopMiddleware = ()=>{
    return (executor)=>new NoopMiddleware(executor);
};
noopMiddleware = createNoopMiddleware();

}

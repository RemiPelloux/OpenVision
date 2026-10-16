import { init_dist8 } from "../../agent-exec/dist/index.js";
var isEqual;
export { isEqual };
var __wakaru_init_common10_initialized = false;
export function init_common10() {
if (__wakaru_init_common10_initialized) return;
__wakaru_init_common10_initialized = true;
"use strict";
init_dist8();
isEqual = (a, b2)=>{
    if (a.length !== b2.length) return false;
    for(let i = 0; i < a.length; i++){
        if (a[i] !== b2[i]) return false;
    }
    return true;
};

}

import { Ag } from "./connectErrors.js";
import { eh } from "./index_221.js";
import { Fie } from "./queryClient.js";
import { E } from "./tslib.es6.js";
import { OS } from "./yBp.js";
var T4v;
export { T4v };
var __wakaru_iG0_initialized = false;
export function iG0() {
if (__wakaru_iG0_initialized) return;
__wakaru_iG0_initialized = true;
"use strict";
E(), eh(), Ag(), T4v = new Fie({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: !1,
            retry: OS(2),
            staleTime: 3e4
        }
    }
});

}

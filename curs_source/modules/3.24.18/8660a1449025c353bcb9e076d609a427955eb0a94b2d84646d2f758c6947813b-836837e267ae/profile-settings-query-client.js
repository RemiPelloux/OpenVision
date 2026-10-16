import { Ag } from "./connectErrors.js";
import { eh } from "./index_221.js";
import { Fie } from "./queryClient.js";
import { E } from "./tslib.es6.js";
import { OS } from "./yBp.js";
var PFv;
export { PFv };
var __wakaru_bU0_initialized = false;
export function bU0() {
if (__wakaru_bU0_initialized) return;
__wakaru_bU0_initialized = true;
"use strict";
E(), eh(), Ag(), PFv = new Fie({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: !1,
            retry: OS(2),
            staleTime: 3e4
        }
    }
});

}

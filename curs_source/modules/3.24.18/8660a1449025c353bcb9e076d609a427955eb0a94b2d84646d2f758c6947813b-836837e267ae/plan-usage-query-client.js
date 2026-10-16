import { eh } from "./index_221.js";
import { Fie } from "./queryClient.js";
import { E } from "./tslib.es6.js";
var Tiv;
export { Tiv };
var __wakaru_XKw_initialized = false;
export function XKw() {
if (__wakaru_XKw_initialized) return;
__wakaru_XKw_initialized = true;
"use strict";
E(), eh(), Tiv = new Fie({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: !1,
            retry: !1,
            staleTime: 3e4
        }
    }
});

}

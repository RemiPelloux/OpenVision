import { eh } from "./index_221.js";
import { Fie } from "./queryClient.js";
import { E } from "./tslib.es6.js";
var Epf, X1;
export { Epf, X1 };
var __wakaru_Ipf_initialized = false;
export function Ipf() {
if (__wakaru_Ipf_initialized) return;
__wakaru_Ipf_initialized = true;
"use strict";
E(), eh(), Epf = 3e4, X1 = new Fie({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: !1,
            retry: !1,
            staleTime: 0
        }
    }
});

}

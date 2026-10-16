import { Ag } from "./connectErrors.js";
import { eh } from "./index_221.js";
import { Fie } from "./queryClient.js";
import { E } from "./tslib.es6.js";
import { ECt, OS } from "./yBp.js";
var kov, ere;
export { ere, kov };
var __wakaru_zOi_initialized = false;
export function zOi() {
if (__wakaru_zOi_initialized) return;
__wakaru_zOi_initialized = true;
"use strict";
E(), eh(), Ag(), kov = OS(2, ECt), ere = new Fie({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: !1,
            retry: kov,
            staleTime: 3e4
        }
    }
});

}

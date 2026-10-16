import { B8l, eZ, i1 } from "./BA.js";
import { fh } from "./index_10.js";
import { E } from "./tslib.es6.js";
var i7l;
export { i7l };
var __wakaru_wHf_initialized = false;
export function wHf() {
if (__wakaru_wHf_initialized) return;
__wakaru_wHf_initialized = true;
E(), fh(), eZ(), i7l = ()=>({
        name: "HttpContext",
        preprocessEvent (t) {
            if (!i1.navigator && !i1.location && !i1.document) return;
            const e = B8l(), n = {
                ...e.headers,
                ...t.request?.headers
            };
            t.request = {
                ...e,
                ...t.request,
                headers: n
            };
        }
    });

}

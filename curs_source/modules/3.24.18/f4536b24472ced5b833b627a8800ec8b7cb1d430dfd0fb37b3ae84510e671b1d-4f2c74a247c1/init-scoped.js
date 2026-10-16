import { a } from "./business-error.js";
import { D1, b6 } from "./i18n.js";
import { fd, pd } from "./i18next.js";
import { np } from "./index_7.js";
function S2(e, t, r) {
    const n = pd();
    return D1(e, t, n, {
        bindGlobalReactInstance: !1
    }).catch((o)=>{
        r ? r(o) : console.error("[i18n] scoped instance init failed", o);
    }), n;
}
export { S2 };
var __wakaru_E2_initialized = false;
export function E2() {
if (__wakaru_E2_initialized) return;
__wakaru_E2_initialized = true;
b6(), np(), fd(), a(S2, "initScopedI18n");

}

import { i } from "./plugin-brand-icon.js";
function wMe(r) {
    return !!(r !== null && typeof r == "object" && "href" in r && r.href && "protocol" in r && r.protocol && r.auth === void 0);
}
export { wMe };
var __wakaru_Hhr_initialized = false;
export function Hhr() {
if (__wakaru_Hhr_initialized) return;
__wakaru_Hhr_initialized = true;
i(wMe, "isUrl");

}

import { i } from "./plugin-brand-icon.js";
import { MTt, aIe } from "./reactVersion.mjs";
import * as mui from "./react-runtime/react/esm-index-production.js";
function RTt(r) {
    if (!mui.isValidElement(r)) return null;
    const e = r, a = e.props;
    return (aIe(19) ? a?.ref : e.ref) ?? null;
}
export { RTt };
var __wakaru_cki_initialized = false;
export function cki() {
if (__wakaru_cki_initialized) return;
__wakaru_cki_initialized = true;
MTt(), i(RTt, "getReactElementRef");

}

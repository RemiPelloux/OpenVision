import { a } from "./business-error.js";
import { io, vi } from "./context.js";
import { useMemo as gD } from "./react-runtime/react/esm-index-production.js";
import { createElement as xD } from "./react-runtime/react/esm-index-production.js";
function y2({ i18n: e, defaultNS: t, children: r }) {
    const n = gD(()=>({
            i18n: e,
            defaultNS: t
        }), [
        e,
        t
    ]);
    return xD(vi.Provider, {
        value: n
    }, r);
}
export { y2 };
var __wakaru_C6_initialized = false;
export function C6() {
if (__wakaru_C6_initialized) return;
__wakaru_C6_initialized = true;
io(), a(y2, "I18nextProvider");

}

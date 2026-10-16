import { R5t } from "./create.js";
import { A5t } from "./qIc.js";
import { x } from "./tslib.es6.js";
var ifs;
export { ifs };
var __wakaru_c3g_initialized = false;
export function c3g() {
if (__wakaru_c3g_initialized) return;
__wakaru_c3g_initialized = true;
x(), R5t(), ifs = A5t({
    properties: {
        xmlBase: null,
        xmlLang: null,
        xmlSpace: null
    },
    space: "xml",
    transform (e, t) {
        return "xml:" + t.slice(3).toLowerCase();
    }
});

}

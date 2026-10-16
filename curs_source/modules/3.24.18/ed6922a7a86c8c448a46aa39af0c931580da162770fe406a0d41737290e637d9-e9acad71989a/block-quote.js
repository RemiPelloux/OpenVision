import { QT } from "./index_63.js";
import { m6 } from "./index_85.js";
import { K4g, q4g, z4g } from "./qIc.js";
import { x } from "./tslib.es6.js";
var gvs;
export { gvs };
var __wakaru_Y4g_initialized = false;
export function Y4g() {
if (__wakaru_Y4g_initialized) return;
__wakaru_Y4g_initialized = true;
x(), m6(), QT(), gvs = {
    continuation: {
        tokenize: z4g
    },
    exit: K4g,
    name: "blockQuote",
    tokenize: q4g
};

}

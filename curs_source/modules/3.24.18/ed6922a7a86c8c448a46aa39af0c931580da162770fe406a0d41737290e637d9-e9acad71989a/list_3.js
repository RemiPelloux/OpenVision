import { LEi } from "./blank-line.js";
import { QT } from "./index_63.js";
import { m6 } from "./index_85.js";
import { KUg, VUg, jUg, qUg, zUg } from "./qIc.js";
import { Yml } from "./thematic-break_2.js";
import { x } from "./tslib.es6.js";
var KJ, Xml, Zml;
export { KJ, Xml, Zml };
var __wakaru_YUg_initialized = false;
export function YUg() {
if (__wakaru_YUg_initialized) return;
__wakaru_YUg_initialized = true;
x(), m6(), QT(), LEi(), Yml(), KJ = {
    continuation: {
        tokenize: jUg
    },
    exit: zUg,
    name: "list",
    tokenize: VUg
}, Xml = {
    partial: !0,
    tokenize: KUg
}, Zml = {
    partial: !0,
    tokenize: qUg
};

}

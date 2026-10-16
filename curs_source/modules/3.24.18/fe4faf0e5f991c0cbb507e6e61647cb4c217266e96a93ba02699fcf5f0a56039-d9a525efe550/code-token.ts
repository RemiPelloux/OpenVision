import { i } from "./plugin-brand-icon.js";
function eRe(r) {
    if (!r) return {};
    const e = {};
    r & 1 && (e.fontStyle = "italic"), r & 2 && (e.fontWeight = "bold");
    const a = [];
    return r & 4 && a.push("underline"), r & 8 && a.push("line-through"), a.length > 0 && (e.textDecoration = a.join(" ")), e;
}
function AP(r) {
    return r.split(/\r\n|\r|\n/).map((e)=>[
            {
                content: e,
                col: 0
            }
        ]);
}
export { AP, eRe };
var __wakaru_DB_initialized = false;
export function DB() {
if (__wakaru_DB_initialized) return;
__wakaru_DB_initialized = true;
"use strict";
i(eRe, "getFontStyle"), i(AP, "makeFallbackTokens");

}

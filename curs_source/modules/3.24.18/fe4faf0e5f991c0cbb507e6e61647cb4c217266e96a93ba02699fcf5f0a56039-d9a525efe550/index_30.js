import { i } from "./plugin-brand-icon.js";
function xMt(r) {
    return e;
    function e(a) {
        const s = a && a.position && a.position[r] || {};
        if (typeof s.line == "number" && s.line > 0 && typeof s.column == "number" && s.column > 0) return {
            line: s.line,
            column: s.column,
            offset: typeof s.offset == "number" && s.offset > -1 ? s.offset : void 0
        };
    }
}
function CMt(r) {
    const e = _C(r), a = $fe(r);
    if (e && a) return {
        start: e,
        end: a
    };
}
var $fe, _C;
export { $fe, CMt, _C, xMt };
var __wakaru_Tvi_initialized = false;
export function Tvi() {
if (__wakaru_Tvi_initialized) return;
__wakaru_Tvi_initialized = true;
$fe = xMt("end"), _C = xMt("start"), i(xMt, "point"), i(CMt, "position");

}

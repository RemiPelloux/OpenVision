import { Avr, TFt, Yvr, a3r, i3r, n3r, r3r, xvr } from "./Iwr.js";
import { w5i } from "./comment.js";
import { _5i } from "./doctype_2.js";
import { v5i } from "./element.js";
import { CNt, TNe } from "./index_22.js";
import { i } from "./plugin-brand-icon.js";
import { x5i } from "./raw.js";
import { C5i } from "./root_3.js";
import { t3r } from "./text_4.js";
var o3r;
export { o3r };
var __wakaru_S5i_initialized = false;
export function S5i() {
if (__wakaru_S5i_initialized) return;
__wakaru_S5i_initialized = true;
CNt(), w5i(), _5i(), v5i(), x5i(), C5i(), t3r(), o3r = TNe("type", {
    invalid: i3r,
    unknown: a3r,
    handlers: {
        comment: xvr,
        doctype: Avr,
        element: Yvr,
        raw: n3r,
        root: r3r,
        text: TFt
    }
}), i(i3r, "invalid"), i(a3r, "unknown");

}

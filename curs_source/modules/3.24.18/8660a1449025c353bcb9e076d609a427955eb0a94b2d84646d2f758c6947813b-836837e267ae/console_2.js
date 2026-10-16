import { bj, jun, vvt } from "./SZu.js";
import { ewo } from "./breadcrumbs.js";
import { $hr, Uun } from "./console.js";
import { JA } from "./currentScopes.js";
import { JC, vun } from "./debug-logger.js";
import { hQ } from "./integration.js";
import { owo } from "./severity.js";
import { ah } from "./spanUtils.js";
import { Wje } from "./string.js";
import { E } from "./tslib.es6.js";
import { o_, r7 } from "./worldwide.js";
function Gpy(t, e) {
    const n = {
        category: "console",
        data: {
            arguments: e,
            logger: "console"
        },
        level: jun(t),
        message: Nqu(e)
    };
    if (t === "assert") if (e[0] === !1) {
        const i = e.slice(1);
        n.message = i.length > 0 ? `Assertion failed: ${Nqu(i)}` : "Assertion failed", n.data.arguments = i;
    } else return;
    bj(n, {
        input: e,
        level: t
    });
}
function Nqu(t) {
    return "util" in o_ && typeof o_.util.format == "function" ? o_.util.format(...t) : vvt(t, " ");
}
var Lqu, Oqu;
export { Gpy, Lqu, Nqu, Oqu };
var __wakaru_qpy_initialized = false;
export function qpy() {
if (__wakaru_qpy_initialized) return;
__wakaru_qpy_initialized = true;
"use strict";
E(), ewo(), JA(), $hr(), hQ(), JC(), owo(), Wje(), r7(), Lqu = "Console", Oqu = (t = {})=>{
    const e = new Set(t.levels || vun);
    return {
        name: Lqu,
        setup (n) {
            Uun(({ args: i, level: r })=>{
                ah() !== n || !e.has(r) || Gpy(r, i);
            });
        }
    };
};

}

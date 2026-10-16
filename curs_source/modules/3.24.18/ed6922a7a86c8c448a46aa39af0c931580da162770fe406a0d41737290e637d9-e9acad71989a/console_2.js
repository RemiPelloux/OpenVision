import { mVr } from "./breadcrumbs.js";
import { LLt, jhi } from "./console.js";
import { NT } from "./currentScopes.js";
import { Xk, hLt } from "./debug-logger.js";
import { YH } from "./integration.js";
import { NLt, ZB, tqe } from "./qIc.js";
import { yVr } from "./severity.js";
import { Pu } from "./spanUtils.js";
import { oAe } from "./string.js";
import { x } from "./tslib.es6.js";
import { Og, c3 } from "./worldwide.js";
function rsg(e, t) {
    const n = {
        category: "console",
        data: {
            arguments: t,
            logger: "console"
        },
        level: NLt(e),
        message: p0c(t)
    };
    if (e === "assert") if (t[0] === !1) {
        const i = t.slice(1);
        n.message = i.length > 0 ? `Assertion failed: ${p0c(i)}` : "Assertion failed", n.data.arguments = i;
    } else return;
    ZB(n, {
        input: t,
        level: e
    });
}
function p0c(e) {
    return "util" in Og && typeof Og.util.format == "function" ? Og.util.format(...e) : tqe(e, " ");
}
var m0c, g0c;
export { g0c, m0c, p0c, rsg };
var __wakaru_ssg_initialized = false;
export function ssg() {
if (__wakaru_ssg_initialized) return;
__wakaru_ssg_initialized = true;
"use strict";
x(), mVr(), NT(), jhi(), YH(), Xk(), yVr(), oAe(), c3(), m0c = "Console", g0c = (e = {})=>{
    const t = new Set(e.levels || hLt);
    return {
        name: m0c,
        setup (n) {
            LLt(({ args: i, level: r })=>{
                Pu() !== n || !t.has(r) || rsg(r, i);
            });
        }
    };
};

}

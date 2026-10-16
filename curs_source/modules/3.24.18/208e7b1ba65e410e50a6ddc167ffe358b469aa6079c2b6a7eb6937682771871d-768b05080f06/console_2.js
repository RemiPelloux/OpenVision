import { RW, uI } from "./breadcrumbs.js";
import { sk } from "./console-integration.js";
import { Dk, MC, _I, zW } from "./console.js";
import { dt } from "./currentScopes.js";
import { Ke, wp } from "./debug-logger.js";
import { ar } from "./integration.js";
import { NC } from "./scope.js";
import { ms } from "./sessionReplay.js";
import { vI } from "./severity.js";
import { Kn } from "./spanUtils.js";
import { Ui } from "./string.js";
import { h } from "./tslib.es6.js";
import { Ot, dn } from "./worldwide.js";
function bW(e, t) {
    const n = Kn(), r = ms();
    if (!n) return;
    const { beforeBreadcrumb: s = null, maxBreadcrumbs: i = RW } = n.getOptions();
    if (i <= 0) return;
    const o = {
        timestamp: NC(),
        ...e
    }, l = s ? sk(()=>s(o, t)) : o;
    l !== null && (n.emit && n.emit("beforeAddBreadcrumb", l, t), r.addBreadcrumb(l, i));
}
function d8e(e, t) {
    const n = {
        category: "console",
        data: {
            arguments: t,
            logger: "console"
        },
        level: zW(e),
        message: kB(t)
    };
    if (e === "assert") if (t[0] === !1) {
        const r = t.slice(1);
        n.message = r.length > 0 ? `Assertion failed: ${kB(r)}` : "Assertion failed", n.data.arguments = r;
    } else return;
    bW(n, {
        input: t,
        level: e
    });
}
function kB(e) {
    return "util" in Ot && typeof Ot.util.format == "function" ? Ot.util.format(...e) : MC(e, " ");
}
var SB, u8e;
export { SB, bW, d8e, kB, u8e };
var __wakaru_m8e_initialized = false;
export function m8e() {
if (__wakaru_m8e_initialized) return;
__wakaru_m8e_initialized = true;
"use strict";
h(), uI(), dt(), Dk(), ar(), Ke(), vI(), Ui(), dn(), SB = "Console", u8e = (e = {})=>{
    const t = new Set(e.levels || wp);
    return {
        name: SB,
        setup (n) {
            _I(({ args: r, level: s })=>{
                Kn() !== n || !t.has(s) || d8e(s, r);
            });
        }
    };
};

}

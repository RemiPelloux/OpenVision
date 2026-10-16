import { blr, d3i } from "./check-bullet-ordered.js";
import { glr, u3i } from "./check-bullet-other.js";
import { VNe, rRt } from "./check-bullet.js";
import { iRt, ylr } from "./check-rule.js";
import { i } from "./plugin-brand-icon.js";
function wlr(r, e, a, s) {
    const l = a.enter("list"), u = a.bulletCurrent;
    let p = r.ordered ? blr(a) : VNe(a);
    const m = r.ordered ? p === "." ? ")" : "." : glr(a);
    let b = e && a.bulletLastUsed ? p === a.bulletLastUsed : !1;
    if (!r.ordered) {
        const _ = r.children ? r.children[0] : void 0;
        if ((p === "*" || p === "-") && _ && (!_.children || !_.children[0]) && a.stack[a.stack.length - 1] === "list" && a.stack[a.stack.length - 2] === "listItem" && a.stack[a.stack.length - 3] === "list" && a.stack[a.stack.length - 4] === "listItem" && a.indexStack[a.indexStack.length - 1] === 0 && a.indexStack[a.indexStack.length - 2] === 0 && a.indexStack[a.indexStack.length - 3] === 0 && (b = !0), iRt(a) === p && _) {
            let v = -1;
            for(; ++v < r.children.length;){
                const x = r.children[v];
                if (x && x.type === "listItem" && x.children && x.children[0] && x.children[0].type === "thematicBreak") {
                    b = !0;
                    break;
                }
            }
        }
    }
    b && (p = m), a.bulletCurrent = p;
    const g = a.containerFlow(r, s);
    return a.bulletLastUsed = p, a.bulletCurrent = u, l(), g;
}
export { wlr };
var __wakaru_p3i_initialized = false;
export function p3i() {
if (__wakaru_p3i_initialized) return;
__wakaru_p3i_initialized = true;
rRt(), u3i(), d3i(), ylr(), i(wlr, "list");

}

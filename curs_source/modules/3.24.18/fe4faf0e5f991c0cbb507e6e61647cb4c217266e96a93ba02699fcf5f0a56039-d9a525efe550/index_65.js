import { MS } from "./default.js";
import { oRt } from "./index_59.js";
import { Plr } from "./index_62.js";
import { i } from "./plugin-brand-icon.js";
function qlr() {
    return {
        exit: {
            taskListCheckValueChecked: dRt,
            taskListCheckValueUnchecked: dRt,
            paragraph: Glr
        }
    };
}
function Ulr() {
    return {
        unsafe: [
            {
                atBreak: !0,
                character: "-",
                after: "[:|-]"
            }
        ],
        handlers: {
            listItem: Wlr
        }
    };
}
function dRt(r) {
    const e = this.stack[this.stack.length - 2];
    e.type, e.checked = r.type === "taskListCheckValueChecked";
}
function Glr(r) {
    const e = this.stack[this.stack.length - 2];
    if (e && e.type === "listItem" && typeof e.checked == "boolean") {
        const a = this.stack[this.stack.length - 1];
        a.type;
        const s = a.children[0];
        if (s && s.type === "text") {
            const l = e.children;
            let u = -1, p;
            for(; ++u < l.length;){
                const m = l[u];
                if (m.type === "paragraph") {
                    p = m;
                    break;
                }
            }
            p === a && (s.value = s.value.slice(1), s.value.length === 0 ? a.children.shift() : a.position && s.position && typeof s.position.start.offset == "number" && (s.position.start.column++, s.position.start.offset++, a.position.start = Object.assign({}, s.position.start)));
        }
    }
    this.exit(r);
}
function Wlr(r, e, a, s) {
    const l = r.children[0], u = typeof r.checked == "boolean" && l && l.type === "paragraph", p = "[" + (r.checked ? "x" : " ") + "] ", m = a.createTracker(s);
    u && m.move(p);
    let b = oRt.listItem(r, e, a, {
        ...s,
        ...m.current()
    });
    return u && (b = b.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, g)), b;
    function g(_) {
        return _ + p;
    }
    i(g, "check");
}
export { Glr, Ulr, Wlr, dRt, qlr };
var __wakaru_T3i_initialized = false;
export function T3i() {
if (__wakaru_T3i_initialized) return;
__wakaru_T3i_initialized = true;
MS(), Plr(), i(qlr, "gfmTaskListItemFromMarkdown"), i(Ulr, "gfmTaskListItemToMarkdown"), i(dRt, "exitCheck"), i(Glr, "exitParagraphWithTaskListItem"), i(Wlr, "listItemWithTaskListItem");

}

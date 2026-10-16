import { i } from "./plugin-brand-icon.js";
function hhr(r, e) {
    const a = {}, s = r.all(e);
    let l = -1;
    for(typeof e.start == "number" && e.start !== 1 && (a.start = e.start); ++l < s.length;){
        const p = s[l];
        if (p.type === "element" && p.tagName === "li" && p.properties && Array.isArray(p.properties.className) && p.properties.className.includes("task-list-item")) {
            a.className = [
                "contains-task-list"
            ];
            break;
        }
    }
    const u = {
        type: "element",
        tagName: e.ordered ? "ol" : "ul",
        properties: a,
        children: r.wrap(s, !0)
    };
    return r.patch(e, u), r.applyData(e, u);
}
export { hhr };
var __wakaru_e4i_initialized = false;
export function e4i() {
if (__wakaru_e4i_initialized) return;
__wakaru_e4i_initialized = true;
"";
i(hhr, "list");

}

import { i } from "./plugin-brand-icon.js";
function thr(r, e) {
    const a = e.value ? e.value + `
` : "", s = {};
    e.lang && (s.className = [
        "language-" + e.lang
    ]);
    let l = {
        type: "element",
        tagName: "code",
        properties: s,
        children: [
            {
                type: "text",
                value: a
            }
        ]
    };
    return e.meta && (l.data = {
        meta: e.meta
    }), r.patch(e, l), l = r.applyData(e, l), l = {
        type: "element",
        tagName: "pre",
        properties: {},
        children: [
            l
        ]
    }, r.patch(e, l), l;
}
export { thr };
var __wakaru_qxi_initialized = false;
export function qxi() {
if (__wakaru_qxi_initialized) return;
__wakaru_qxi_initialized = true;
"";
i(thr, "code");

}

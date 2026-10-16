import { i } from "./plugin-brand-icon.js";
function uhr(r, e) {
    const a = {
        type: "text",
        value: e.value.replace(/\r?\n|\r/g, " ")
    };
    r.patch(e, a);
    const s = {
        type: "element",
        tagName: "code",
        properties: {},
        children: [
            a
        ]
    };
    return r.patch(e, s), r.applyData(e, s);
}
export { uhr };
var __wakaru_Xxi_initialized = false;
export function Xxi() {
if (__wakaru_Xxi_initialized) return;
__wakaru_Xxi_initialized = true;
"";
i(uhr, "inlineCode");

}

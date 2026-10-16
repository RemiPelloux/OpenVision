import { i } from "./plugin-brand-icon.js";
function ehr(r, e) {
    const a = {
        type: "element",
        tagName: "br",
        properties: {},
        children: []
    };
    return r.patch(e, a), [
        r.applyData(e, a),
        {
            type: "text",
            value: `
`
        }
    ];
}
export { ehr };
var __wakaru_Bxi_initialized = false;
export function Bxi() {
if (__wakaru_Bxi_initialized) return;
__wakaru_Bxi_initialized = true;
"";
i(ehr, "hardBreak");

}

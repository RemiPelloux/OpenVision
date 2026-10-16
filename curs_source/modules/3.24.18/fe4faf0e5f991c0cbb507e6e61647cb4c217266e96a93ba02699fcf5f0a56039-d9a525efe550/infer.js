import { i } from "./plugin-brand-icon.js";
function Bdr(r, e) {
    let a = !1;
    const s = [];
    for(; e < r.length;){
        const l = r[e];
        if (a) {
            if (l[0] === "enter") l[1].type === "tableContent" && s.push(r[e + 1][1].type === "tableDelimiterMarker" ? "left" : "none");
            else if (l[1].type === "tableContent") {
                if (r[e - 1][1].type === "tableDelimiterMarker") {
                    const u = s.length - 1;
                    s[u] = s[u] === "left" ? "center" : "right";
                }
            } else if (l[1].type === "tableDelimiterRow") break;
        } else l[0] === "enter" && l[1].type === "tableDelimiterRow" && (a = !0);
        e += 1;
    }
    return s;
}
export { Bdr };
var __wakaru_axi_initialized = false;
export function axi() {
if (__wakaru_axi_initialized) return;
__wakaru_axi_initialized = true;
i(Bdr, "gfmTableAlign");

}

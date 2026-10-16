import { CB, aJ } from "./create.js";
var uNt;
export { uNt };
var __wakaru_rvi_initialized = false;
export function rvi() {
if (__wakaru_rvi_initialized) return;
__wakaru_rvi_initialized = true;
aJ(), uNt = CB({
    properties: {
        xmlBase: null,
        xmlLang: null,
        xmlSpace: null
    },
    space: "xml",
    transform (r, e) {
        return "xml:" + e.slice(3).toLowerCase();
    }
});

}

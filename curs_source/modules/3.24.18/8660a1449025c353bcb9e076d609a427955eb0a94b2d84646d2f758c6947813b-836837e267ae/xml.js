import { Wbn } from "./LYd.js";
import { Gbn } from "./create.js";
import { E } from "./tslib.es6.js";
var via;
export { via };
var __wakaru_Wqy_initialized = false;
export function Wqy() {
if (__wakaru_Wqy_initialized) return;
__wakaru_Wqy_initialized = true;
E(), Gbn(), via = Wbn({
    properties: {
        xmlBase: null,
        xmlLang: null,
        xmlSpace: null
    },
    space: "xml",
    transform (t, e) {
        return "xml:" + e.slice(3).toLowerCase();
    }
});

}

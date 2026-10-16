import { vcs } from "./qIc.js";
import { Uwi } from "./stringifyString.js";
import { x } from "./tslib.es6.js";
var Syn;
export { Syn };
var __wakaru_Gwi_initialized = false;
export function Gwi() {
if (__wakaru_Gwi_initialized) return;
__wakaru_Gwi_initialized = true;
x(), Uwi(), Syn = {
    identify: (e)=>typeof e == "string",
    default: !0,
    tag: "tag:yaml.org,2002:str",
    resolve: (e)=>e,
    stringify (e, t, n, i) {
        return t = Object.assign({
            actualString: !0
        }, t), vcs(e, t, n, i);
    }
};

}

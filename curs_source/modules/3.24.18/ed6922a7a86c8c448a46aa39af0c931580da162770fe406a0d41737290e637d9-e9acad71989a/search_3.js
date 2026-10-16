import { Ps, si } from "./HVr.js";
import { dr } from "./arrays.js";
import { Ar } from "./cancellation.js";
import { At, dn } from "./contextkey.js";
import { Ni } from "./editorService.js";
import { xc } from "./editor_2.js";
import { Fi } from "./files.js";
import { qi } from "./range.js";
import { x } from "./tslib.es6.js";
import { gr } from "./types_2.js";
import { ci } from "./workspace.js";
var FKi, tlh, j_o, P_e, OOn;
export { FKi, OOn, P_e, j_o, tlh };
var __wakaru_Zet_initialized = false;
export function Zet() {
if (__wakaru_Zet_initialized) return;
__wakaru_Zet_initialized = true;
"use strict";
x(), si(), ci(), xc(), Ni(), Ar(), Fi(), qi(), gr(), dn(), Ps(), dr(), ((e)=>{
    const t = [];
    function n(r) {
        let s = r;
        return s && t.push(s), {
            dispose () {
                if (s) {
                    const o = t.indexOf(s);
                    o >= 0 && (t.splice(o, 1), s = void 0);
                }
            }
        };
    }
    e.register = n;
    function i() {
        return t.slice(0);
    }
    e.all = i;
})(FKi || (FKi = {})), tlh = class {
    constructor(e, t){
        this.symbol = e, this.provider = t;
    }
}, j_o = /\s?[#:\(](?:line )?(\d*)(?:[#:,](\d*))?\)?:?\s*$/, P_e = ((e)=>(e[e.Idle = 0] = "Idle", e[e.Searching = 1] = "Searching", e[e.SlowSearch = 2] = "SlowSearch", e))(P_e || {}), OOn = new At("searchState", 0);

}

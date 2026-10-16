import { Ei, Fa } from "./Iwo.js";
import { bo } from "./arrays.js";
import { yo } from "./cancellation.js";
import { Hi, cn } from "./contextkey.js";
import { Wo } from "./editorService.js";
import { od } from "./editor_2.js";
import { ms } from "./files.js";
import { Qs } from "./range.js";
import { E } from "./tslib.es6.js";
import { To } from "./types_2.js";
import { Sr } from "./workspace.js";
var Jts, AKm, cel, xCi, ens;
export { AKm, Jts, cel, ens, xCi };
var __wakaru_ACi_initialized = false;
export function ACi() {
if (__wakaru_ACi_initialized) return;
__wakaru_ACi_initialized = true;
"use strict";
E(), Ei(), Sr(), od(), Wo(), yo(), ms(), Qs(), To(), Hi(), Fa(), bo(), ((t)=>{
    const e = [];
    function n(r) {
        let s = r;
        return s && e.push(s), {
            dispose () {
                if (s) {
                    const o = e.indexOf(s);
                    o >= 0 && (e.splice(o, 1), s = void 0);
                }
            }
        };
    }
    t.register = n;
    function i() {
        return e.slice(0);
    }
    t.all = i;
})(Jts || (Jts = {})), AKm = class {
    constructor(t, e){
        this.symbol = t, this.provider = e;
    }
}, cel = /\s?[#:\(](?:line )?(\d*)(?:[#:,](\d*))?\)?:?\s*$/, xCi = ((t)=>(t[t.Idle = 0] = "Idle", t[t.Searching = 1] = "Searching", t[t.SlowSearch = 2] = "SlowSearch", t))(xCi || {}), ens = new cn("searchState", 0);

}

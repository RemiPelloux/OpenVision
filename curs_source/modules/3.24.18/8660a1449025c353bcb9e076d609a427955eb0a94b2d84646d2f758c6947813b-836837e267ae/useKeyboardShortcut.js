import { Gr } from "./Ycg.js";
import { vo } from "./solidContext.js";
import { E } from "./tslib.es6.js";
import { Cn, On, Wt, pi } from "./ze.js";
var N6;
export { N6 };
var __wakaru_sye_initialized = false;
export function sye() {
if (__wakaru_sye_initialized) return;
__wakaru_sye_initialized = true;
"use strict";
E(), pi(), vo(), N6 = (t, e)=>{
    const n = Gr(), [i, r] = Wt(void 0), s = ()=>e?.useDefaultKeybindingEvenIfNotActive ? n.keybindingService.lookupDefaultKeybindings(t) : n.keybindingService.lookupKeybindings(t);
    return Cn(()=>{
        const o = s().at(0)?.getLabel() ?? void 0;
        r(o);
        const a = n.keybindingService.onDidUpdateKeybindings(()=>{
            const l = s().at(0)?.getLabel() ?? void 0;
            r(l);
        });
        On(()=>{
            a.dispose();
        });
    }), i;
};

}

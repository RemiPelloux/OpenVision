import { An, Jt, Ut, mS, qn } from "./qIc.js";
import { KBn, KIo, Vs, dTe, qIo, zIo } from "./solidContext.js";
import { x } from "./tslib.es6.js";
function ir() {
    const e = mS(dTe), t = KIo.get(e);
    if (t) return t;
    const n = new Proxy(e, {
        get (i, r, s) {
            if (typeof r == "symbol" || r in i) return Reflect.get(i, r, s);
            const o = r, a = i;
            if (!a[qIo]?.has(o)) return;
            if (a[KBn]?.has(o)) return a[KBn].get(o);
            const l = a[zIo]?.(o);
            return a[KBn]?.set(o, l), l;
        }
    });
    return KIo.set(e, n), n;
}
var mL;
export { ir, mL };
var __wakaru_hte_initialized = false;
export function hte() {
if (__wakaru_hte_initialized) return;
__wakaru_hte_initialized = true;
"use strict";
x(), qn(), Vs(), mL = (e, t)=>{
    const n = ir(), [i, r] = Ut(void 0), s = ()=>t?.useDefaultKeybindingEvenIfNotActive ? n.keybindingService.lookupDefaultKeybindings(e) : n.keybindingService.lookupKeybindings(e);
    return Jt(()=>{
        const o = s().at(0)?.getLabel() ?? void 0;
        r(o);
        const a = n.keybindingService.onDidUpdateKeybindings(()=>{
            const c = s().at(0)?.getLabel() ?? void 0;
            r(c);
        });
        An(()=>{
            a.dispose();
        });
    }), i;
};

}

import { cI, t1 } from "./LexicalComposerContext.js";
import { DJg, Gr, OJg } from "./Ycg.js";
import { Ak, mR, oLa, sLa } from "./ipa.js";
import { Pms, kIt } from "./promptBarService.js";
import { LJg } from "./promptHistory.js";
import { vo } from "./solidContext.js";
import { E } from "./tslib.es6.js";
import { Cn, On, Wt, ks, pi } from "./ze.js";
var FJg;
export { FJg };
var __wakaru_E6k_initialized = false;
export function E6k() {
if (__wakaru_E6k_initialized) return;
__wakaru_E6k_initialized = true;
"use strict";
E(), pi(), cI(), Ak(), vo(), Pms(), LJg(), FJg = (t)=>{
    const [e] = t1(), n = Gr(), [i, r] = Wt(-1), [s, o] = Wt([]), [a, l] = Wt("");
    let c = 0;
    const u = ()=>{
        c += 1, r(-1), o([]);
    };
    return Cn(()=>{
        const d = e.registerCommand(sLa, (p)=>ks(()=>{
                if (!p.altKey) return !1;
                const g = e.getRootElement();
                if (g !== null && !(i() !== -1 && i() === s().length - 1)) if (i() === -1) {
                    l(g.innerText);
                    const f = c + 1;
                    c = f;
                    const _ = t.composerDataHandle;
                    (async ()=>{
                        const b = await DJg({
                            composerDataHandle: _,
                            composerDataService: n.composerDataService
                        }), y = b.length > 0 ? b : n.aiService.getPreviousPrompts(kIt.COMPOSER);
                        c !== f || y.length === 0 || (o(y), r(0), n.analyticsService.trackEvent("composer.load_previous_prompt"));
                    })();
                } else r((f)=>f + 1), n.analyticsService.trackEvent("composer.load_previous_prompt");
                return !1;
            }), mR), h = e.registerCommand(oLa, (p)=>ks(()=>{
                if (!p.altKey) return !1;
                if (e.getRootElement() !== null) {
                    if (i() > 0) r(i() - 1);
                    else if (i() === 0) {
                        const g = a();
                        u(), OJg(e, g), t.setText && t.setText(g);
                    }
                }
                return !1;
            }), mR);
        On(()=>{
            d(), h();
        });
    }), Cn(()=>{
        const d = s().length - 1 - i();
        if (s().length > 0 && d >= 0 && d < s().length) {
            const h = s()[d];
            OJg(e, h), t.setText && t.setText(h);
        } else i();
    }), null;
};

}

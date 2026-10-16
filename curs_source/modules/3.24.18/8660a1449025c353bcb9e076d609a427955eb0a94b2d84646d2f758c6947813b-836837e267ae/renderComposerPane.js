import { cMw, hMw } from "./BA.js";
import { Qkl, vms } from "./ComposerLoading.js";
import { dMw } from "./ComposerPane.js";
import { hA } from "./SZu.js";
import { Gr, u0 } from "./Ycg.js";
import { $T } from "./solid_2.js";
import { __ } from "./tracing_2.js";
import { E } from "./tslib.es6.js";
import { at } from "./web.js";
import { Ee, Ut, Wt, Xc, ks, pi } from "./ze.js";
var kBl;
export { kBl };
var __wakaru_tUf_initialized = false;
export function tUf() {
if (__wakaru_tUf_initialized) return;
__wakaru_tUf_initialized = true;
"use strict";
E(), at(), pi(), __(), $T(), Qkl(), dMw(), kBl = (t, e, n, i)=>u0(()=>{
        try {
            var r = hMw();
            const s = r.u(hA("renderComposerPane")), o = Gr(), [a, l] = Wt(!1);
            Xc(()=>{
                if (o.composerEventService.isComposerServiceInitialized()) l(!0);
                else {
                    const d = o.composerEventService.onDidComposerServiceFinishInitializing(()=>{
                        l(!0), d.dispose();
                    });
                }
            });
            const c = ks(()=>o.composerDataService.allComposersData.allComposers.find((u)=>u.composerId === i));
            return Ee(Ut, {
                get when () {
                    return a();
                },
                get fallback () {
                    return Ee(vms, {});
                },
                children: (u)=>Ee(cMw, {
                        location: n,
                        composerId: i,
                        composerHeader: c
                    })
            });
        } catch (s) {
            r.e = s;
        } finally{
            r.d();
        }
    }, t, e);

}

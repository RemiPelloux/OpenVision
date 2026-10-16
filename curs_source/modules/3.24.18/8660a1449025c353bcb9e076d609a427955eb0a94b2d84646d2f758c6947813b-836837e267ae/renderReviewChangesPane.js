import { rkw } from "./BA.js";
import { Qkl, vms } from "./ComposerLoading.js";
import { skw } from "./ReviewChangesPane.js";
import { Gr, u0 } from "./Ycg.js";
import { l_, pa } from "./constants_8.js";
import { $T } from "./solid_2.js";
import { E } from "./tslib.es6.js";
import { at, zr } from "./web.js";
import { Ee, Ut, Wt, Xc, pi } from "./ze.js";
var VFl;
export { VFl };
var __wakaru_okw_initialized = false;
export function okw() {
if (__wakaru_okw_initialized) return;
__wakaru_okw_initialized = true;
"use strict";
E(), at(), at(), pi(), pa(), Qkl(), $T(), skw(), VFl = (t, e, n, i, r)=>u0(()=>{
        const s = Gr(), [o, a] = Wt(void 0);
        Xc(async ()=>{
            if (r?.gitMode) {
                a(r.gitMode === "diffWithMain" ? l_.DiffWithMain : l_.All);
                return;
            }
            if (r?.fromBugbot) {
                a(l_.DiffWithMain);
                return;
            }
            if (r?.fromBackgroundAgent) {
                a(l_.All);
                return;
            }
            if (n) {
                const u = await s.reviewChangesService.getInitialMode(n);
                a(u);
            } else a(l_.All);
        });
        const [l, c] = Wt(!1);
        return Xc(()=>{
            if (s.composerEventService.isComposerServiceInitialized()) c(!0);
            else {
                const d = s.composerEventService.onDidComposerServiceFinishInitializing(()=>{
                    c(!0), d.dispose();
                });
            }
        }), Ee(Ut, {
            get when () {
                return zr(()=>!!l())() && o() !== void 0;
            },
            get fallback () {
                return Ee(vms, {
                    textOverride: "Loading changes..."
                });
            },
            get children () {
                return Ee(rkw, {
                    composerId: n,
                    parentComposerId: i,
                    get initialMode () {
                        return o();
                    },
                    get fromBugbot () {
                        return r?.fromBugbot;
                    },
                    get scrollToFile () {
                        return r?.scrollToFile;
                    },
                    get scrollToLine () {
                        return r?.scrollToLine;
                    },
                    get scrollToReviewFile () {
                        return r?.scrollToReviewFile;
                    },
                    get fromBackgroundAgent () {
                        return r?.fromBackgroundAgent;
                    },
                    get gitMode () {
                        return r?.gitMode;
                    },
                    get gitModeLabel () {
                        return r?.gitModeLabel;
                    }
                });
            }
        });
    }, t, e);

}

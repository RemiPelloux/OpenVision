import { D, Ei, Hc, Pn, Qe, Ya, st, yx } from "./Iwo.js";
import { qn } from "./async.js";
import { El, yo } from "./cancellation.js";
import { a7, tL } from "./linkedList.js";
import { Ji, Li } from "./log.js";
import { Bt } from "./nls.js";
import { F1, Ks } from "./notification.js";
import { B1, ab } from "./progress.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var Vhs;
export { Vhs };
var __wakaru_pNk_initialized = false;
export function pNk() {
if (__wakaru_pNk_initialized) return;
__wakaru_pNk_initialized = true;
"use strict";
E(), qn(), yo(), Ji(), ab(), Qe(), a7(), Ei(), Ks(), Bt(), Vhs = class extends st {
    constructor(t, e){
        super(), this.logService = t, this.progressService = e, this.saveParticipants = new tL;
    }
    get length() {
        return this.saveParticipants.size;
    }
    addSaveParticipant(t) {
        const e = this.saveParticipants.push(t);
        return Pn(()=>e());
    }
    async participate(t, e, n, i) {
        const r = new El(i);
        t.model?.pushStackElement(), n.report({
            message: D(13488, null)
        });
        let s = !1;
        if (await this.progressService.withProgress({
            priority: F1.URGENT,
            location: 15,
            cancellable: D(13489, null),
            delay: t.isDirty() ? 5e3 : 3e3
        }, async (o)=>{
            const a = Array.from(this.saveParticipants).sort((l, c)=>{
                const u = l.ordinal ?? 0, d = c.ordinal ?? 0;
                return u - d;
            });
            for (const l of a){
                if (r.token.isCancellationRequested || t.isDisposed()) break;
                try {
                    const c = l.participate(t, e, o, r.token);
                    await yx(c, r.token);
                } catch (c) {
                    Ya(c) ? r.token.isCancellationRequested || (r.cancel(), s = !0) : this.logService.error(c);
                }
            }
        }, ()=>{
            r.cancel();
        }), t.model?.pushStackElement(), r.dispose(), s) throw new Hc;
    }
    dispose() {
        this.saveParticipants.clear(), super.dispose();
    }
}, Vhs = Re([
    F(0, Li),
    F(1, B1)
], Vhs);

}

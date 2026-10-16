import { D, Qe, st } from "./Iwo.js";
import { Il, bn } from "./SZu.js";
import { vu } from "./actions.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { Xh } from "./ipa.js";
import { Bt } from "./nls.js";
import { Ks, Wr, Yn, ene } from "./notification.js";
import { Zi, ki } from "./storage_2.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { wu } from "./utilities_3.js";
import { Ig } from "./ze.js";
var mRn, DVt;
export { DVt, mRn };
var __wakaru_kxi_initialized = false;
export function kxi() {
if (__wakaru_kxi_initialized) return;
__wakaru_kxi_initialized = true;
"use strict";
E(), vu(), Qe(), It(), Rn(), Ks(), wu(), Zi(), Bt(), mRn = Il("urlOpenToastService"), DVt = class extends st {
    constructor(t, e){
        super(), this._notificationService = t, this._storageService = e, this._shownOrigins = new Set;
    }
    showUrlOpenToast(t) {
        if (!this._storageService.getBoolean(DVt.NEVER_SHOW_AGAIN_ID, -1, !1)) {
            let e;
            try {
                e = new URL(t).origin;
            } catch  {
                e = void 0;
            }
            if (e !== void 0 && e !== "null") {
                if (this._shownOrigins.has(e)) return;
                this._shownOrigins.add(e);
            }
        }
        this._notificationService.notify({
            severity: Yn.Info,
            message: D(12221, null, t),
            actions: {
                primary: [
                    Ig({
                        id: "urlOpenToast.dontOpen",
                        label: D(12222, null),
                        run: ()=>{
                            const e = Xh(this._storageService, "autoOpenLocalhostUrls");
                            e.set(!1, void 0), e.dispose();
                        }
                    })
                ]
            },
            neverShowAgain: {
                id: DVt.NEVER_SHOW_AGAIN_ID,
                scope: ene.APPLICATION,
                isSecondary: !1
            }
        });
    }
}, DVt.NEVER_SHOW_AGAIN_ID = "urlOpenToast.neverShowAgainv1", DVt = Re([
    F(0, Wr),
    F(1, ki)
], DVt), bn(mRn, DVt, 1, 1);

}

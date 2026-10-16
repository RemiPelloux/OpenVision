import { Th } from "./De_3.js";
import { S, Se, we } from "./HVr.js";
import { Vo } from "./actions.js";
import { C, ie } from "./actions_2.js";
import { Pn } from "./extensions.js";
import { Ze } from "./instantiation.js";
import { rt } from "./nls.js";
import { di, gle, ji, pi } from "./notification.js";
import { lh, mn, pd } from "./qIc.js";
import { Vn, yn } from "./storage_2.js";
import { x } from "./tslib.es6.js";
import { Ku } from "./utilities_3.js";
var pqt, i0t;
export { i0t, pqt };
var __wakaru_$Bn_initialized = false;
export function $Bn() {
if (__wakaru_$Bn_initialized) return;
__wakaru_$Bn_initialized = true;
"use strict";
x(), Vo(), Se(), Ze(), Pn(), ji(), Ku(), Vn(), rt(), pqt = pd("urlOpenToastService"), i0t = class extends we {
    constructor(e, t){
        super(), this._notificationService = e, this._storageService = t, this._shownOrigins = new Set;
    }
    showUrlOpenToast(e) {
        if (!this._storageService.getBoolean(i0t.NEVER_SHOW_AGAIN_ID, -1, !1)) {
            let t;
            try {
                t = new URL(e).origin;
            } catch  {
                t = void 0;
            }
            if (t !== void 0 && t !== "null") {
                if (this._shownOrigins.has(t)) return;
                this._shownOrigins.add(t);
            }
        }
        this._notificationService.notify({
            severity: pi.Info,
            message: S(12221, null, e),
            actions: {
                primary: [
                    lh({
                        id: "urlOpenToast.dontOpen",
                        label: S(12222, null),
                        run: ()=>{
                            const t = Th(this._storageService, "autoOpenLocalhostUrls");
                            t.set(!1, void 0), t.dispose();
                        }
                    })
                ]
            },
            neverShowAgain: {
                id: i0t.NEVER_SHOW_AGAIN_ID,
                scope: gle.APPLICATION,
                isSecondary: !1
            }
        });
    }
}, i0t.NEVER_SHOW_AGAIN_ID = "urlOpenToast.neverShowAgainv1", i0t = ie([
    C(0, di),
    C(1, yn)
], i0t), mn(pqt, i0t, 1, 1);

}

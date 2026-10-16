import { es, sn } from "./actions_2.js";
import { GB, VO } from "./panecomposite.js";
import { E } from "./tslib.es6.js";
var OKt;
export { OKt };
var __wakaru_tms_initialized = false;
export function tms() {
if (__wakaru_tms_initialized) return;
__wakaru_tms_initialized = true;
"use strict";
E(), es(), GB(), OKt = class extends sn {
    constructor(t, e, n){
        super(t), this.location = e, this.offset = n;
    }
    async run(t) {
        const e = t.get(VO), n = e.getActivePaneComposite(this.location);
        if (!n) return;
        let i;
        const r = e.getVisiblePaneCompositeIds(this.location);
        for(let s = 0; s < r.length; s++)if (r[s] === n.getId()) {
            i = r[(s + r.length + this.offset) % r.length];
            break;
        }
        typeof i < "u" && await e.openPaneComposite(i, this.location, !0);
    }
};

}

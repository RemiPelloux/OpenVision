import { Il } from "./SZu.js";
import { es, sn } from "./actions_2.js";
import { bd, hd } from "./dialogs.js";
import { It } from "./instantiation.js";
import { Um, kFa } from "./reactiveStorageTypes_2.js";
import { E } from "./tslib.es6.js";
import { Ai, Xo } from "./uuid_2.js";
import { Ht } from "./ze.js";
var Qb;
export { Qb };
var __wakaru_C1_initialized = false;
export function C1() {
if (__wakaru_C1_initialized) return;
__wakaru_C1_initialized = true;
"use strict";
E(), es(), It(), Um(), Xo(), bd(), Qb = Il("aiServerConfigService"), Ht(class extends sn {
    constructor(){
        super({
            id: kFa.GetCachedServerConfig,
            title: {
                original: "Get Cached Server Config",
                value: "Get Cached Server Config"
            },
            f1: !1
        });
    }
    run(t) {
        return t.get(Qb).cachedServerConfig;
    }
}), Ht(class extends sn {
    constructor(){
        super({
            id: "aiServerConfigService.forceRefresh",
            title: {
                original: "Force Refresh Server Config",
                value: "Force Refresh Server Config"
            },
            f1: !0,
            category: "Developer"
        });
    }
    run(t) {
        const e = t.get(hd), n = Ai();
        t.get(Qb).forceRefreshServerConfig({
            requestId: n,
            rethrow: !0
        }).then(()=>{
            e.info("Server config refreshed", `Request ID: ${n}`);
        }).catch((i)=>{
            e.error("Failed to refresh server config", `Request ID: ${n}
Error: ${i.message}`);
        });
    }
});

}

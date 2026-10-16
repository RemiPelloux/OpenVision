import { ei, pt } from "./actions_2.js";
import { Fc, wc } from "./dialogs.js";
import { Ze } from "./instantiation.js";
import { pd, qe } from "./qIc.js";
import { Vp, bXs } from "./reactiveStorageTypes_2.js";
import { x } from "./tslib.es6.js";
import { Js, zn } from "./uuid.js";
var dw;
export { dw };
var __wakaru_tE_initialized = false;
export function tE() {
if (__wakaru_tE_initialized) return;
__wakaru_tE_initialized = true;
"use strict";
x(), ei(), Ze(), Vp(), Js(), Fc(), dw = pd("aiServerConfigService"), qe(class extends pt {
    constructor(){
        super({
            id: bXs.GetCachedServerConfig,
            title: {
                original: "Get Cached Server Config",
                value: "Get Cached Server Config"
            },
            f1: !1
        });
    }
    run(e) {
        return e.get(dw).cachedServerConfig;
    }
}), qe(class extends pt {
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
    run(e) {
        const t = e.get(wc), n = zn();
        e.get(dw).forceRefreshServerConfig({
            requestId: n,
            rethrow: !0
        }).then(()=>{
            t.info("Server config refreshed", `Request ID: ${n}`);
        }).catch((i)=>{
            t.error("Failed to refresh server config", `Request ID: ${n}
Error: ${i.message}`);
        });
    }
});

}

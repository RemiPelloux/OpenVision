import { P5, ju } from "./agent_pb.js";
import { jxe, kde } from "./controlled.ts";
import { FO } from "./index_10.ts";
import { Ng } from "./index_3.ts";
import { SS, iie } from "./ipa.js";
import { E } from "./tslib.es6.js";
import { KSm } from "./yBp.js";
var hYr, rkm, skm, pUa;
export { hYr, pUa, rkm, skm };
var __wakaru_okm_initialized = false;
export function okm() {
if (__wakaru_okm_initialized) return;
__wakaru_okm_initialized = true;
"use strict";
E(), FO(), Ng(), ju(), hYr = iie("ClientInteractionController"), rkm = new Set([
    "askQuestionInteractionQuery",
    "switchModeRequestQuery",
    "mcpAuthRequestQuery",
    "connectScmRequestQuery"
]), skm = "The client could not show this request to the user", pUa = class {
    constructor(t, e, n, i){
        this.interactionStream = t, this.interactionListener = e, this.queryResponseStream = n, this.stallSuspender = i, this.pendingHumanQueries = 0;
    }
    async run(t) {
        var e = [];
        try {
            t = kde(e, SS(t.withName("ClientInteractionController.run"))).ctx;
            let s = Promise.resolve(), o;
            for await (const a of this.interactionStream){
                const l = ()=>a.case === "interactionQuery" ? this.handleInteractionQuery(t, a.value) : this.handleInteractionUpdate(t, a.value);
                s = s.then(l).catch((c)=>{
                    hYr.error(t, "Error handling interaction message", c, {
                        messageCase: a.case
                    }), o ??= c;
                });
            }
            if (await s, o !== void 0) throw o;
        } catch (r) {
            var n = r, i = !0;
        } finally{
            jxe(e, n, i);
        }
    }
    async handleInteractionUpdate(t, e) {
        await this.interactionListener.sendUpdate(t, e);
    }
    handleInteractionQuery(t, e) {
        const n = e.query.case !== void 0 && rkm.has(e.query.case);
        let i = !1;
        const r = ()=>{
            !n || i || (i = !0, this.pendingHumanQueries--, this.pendingHumanQueries === 0 && this.stallSuspender?.setPaused(!1));
        };
        n && (this.pendingHumanQueries++, this.pendingHumanQueries === 1 && this.stallSuspender?.setPaused(!0)), (async ()=>this.interactionListener.query(t, e))().catch((s)=>{
            const o = KSm(e, skm);
            if (!(o instanceof P5)) throw s;
            return hYr.error(t, "Error handling interaction query; answering with a fail-closed response", {
                queryCase: e.query.case,
                error: s
            }), o;
        }).then((s)=>(r(), this.queryResponseStream.write(s))).catch((s)=>{
            hYr.error(t, "Error handling interaction query", s);
        }).finally(r);
    }
};

}

import { bPd } from "./A3u.js";
import { S_, Wj } from "./De_3.js";
import { tL, zd } from "./agent_pb.js";
import { QQ, ege } from "./controlled.ts";
import { z3 } from "./index_10.ts";
import { Gp } from "./index_3.ts";
import { x } from "./tslib.es6.js";
var BWi, NLd, OLd, Qso;
export { BWi, NLd, OLd, Qso };
var __wakaru_FLd_initialized = false;
export function FLd() {
if (__wakaru_FLd_initialized) return;
__wakaru_FLd_initialized = true;
"use strict";
x(), z3(), Gp(), zd(), BWi = Wj("ClientInteractionController"), NLd = new Set([
    "askQuestionInteractionQuery",
    "switchModeRequestQuery",
    "mcpAuthRequestQuery",
    "connectScmRequestQuery"
]), OLd = "The client could not show this request to the user", Qso = class {
    constructor(e, t, n, i){
        this.interactionStream = e, this.interactionListener = t, this.queryResponseStream = n, this.stallSuspender = i, this.pendingHumanQueries = 0;
    }
    async run(e) {
        var t = [];
        try {
            e = QQ(t, S_(e.withName("ClientInteractionController.run"))).ctx;
            let s = Promise.resolve(), o;
            for await (const a of this.interactionStream){
                const c = ()=>a.case === "interactionQuery" ? this.handleInteractionQuery(e, a.value) : this.handleInteractionUpdate(e, a.value);
                s = s.then(c).catch((l)=>{
                    BWi.error(e, "Error handling interaction message", l, {
                        messageCase: a.case
                    }), o ??= l;
                });
            }
            if (await s, o !== void 0) throw o;
        } catch (r) {
            var n = r, i = !0;
        } finally{
            ege(t, n, i);
        }
    }
    async handleInteractionUpdate(e, t) {
        await this.interactionListener.sendUpdate(e, t);
    }
    handleInteractionQuery(e, t) {
        const n = t.query.case !== void 0 && NLd.has(t.query.case);
        let i = !1;
        const r = ()=>{
            !n || i || (i = !0, this.pendingHumanQueries--, this.pendingHumanQueries === 0 && this.stallSuspender?.setPaused(!1));
        };
        n && (this.pendingHumanQueries++, this.pendingHumanQueries === 1 && this.stallSuspender?.setPaused(!0)), (async ()=>this.interactionListener.query(e, t))().catch((s)=>{
            const o = bPd(t, OLd);
            if (!(o instanceof tL)) throw s;
            return BWi.error(e, "Error handling interaction query; answering with a fail-closed response", {
                queryCase: t.query.case,
                error: s
            }), o;
        }).then((s)=>(r(), this.queryResponseStream.write(s))).catch((s)=>{
            BWi.error(e, "Error handling interaction query", s);
        }).finally(r);
    }
};

}

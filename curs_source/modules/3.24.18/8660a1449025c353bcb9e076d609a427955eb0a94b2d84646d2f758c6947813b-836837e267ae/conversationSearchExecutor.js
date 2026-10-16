import { Nt, Pn, Qe } from "./Iwo.js";
import { Y_k, wat } from "./Ycg.js";
import { Emn, H5o, bni, wSr } from "./conversation_search_exec_pb.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var rdg, sdg, odg;
export { odg, rdg, sdg };
var __wakaru_X_k_initialized = false;
export function X_k() {
if (__wakaru_X_k_initialized) return;
__wakaru_X_k_initialized = true;
"use strict";
E(), bni(), hr(), Qe(), rdg = 1500, sdg = {
    local: wSr.LOCAL,
    "cloud-cache": wSr.CLOUD_CACHE
}, odg = class {
    constructor(t, e){
        this.conversationSearchService = t, this.logService = e;
    }
    async execute(t, e) {
        const n = Date.now(), i = e.query.trim();
        if (i.length === 0) return wat("Query must not be empty");
        const r = this.conversationSearchService.getAvailability();
        if (!r.available) return this.logService.info("[ConversationSearchExecutor] unavailable", {
            reason: r.reason,
            durationMs: Date.now() - n
        }), wat(r.reason === "no-providers" ? "Conversation search is not available" : "Conversation search is disabled");
        if (t.signal.aborted) return wat("Search cancelled");
        const s = new Nt;
        let o = [], a = !1, l = !1;
        const c = ()=>s.dispose();
        t.signal.addEventListener("abort", c, {
            once: !0
        }), s.add(Pn(()=>t.signal.removeEventListener("abort", c)));
        try {
            const u = Math.min(Math.max(1, e.limit ?? 20), 100), d = this.conversationSearchService.search({
                text: i,
                limit: u + 1,
                includeArchived: !0,
                deadlineAt: Date.now() + rdg
            });
            s.add(d), s.add(d.onDidProgress((_)=>{
                _.kind === "results" ? o = _.results : _.status === "rebuilding" ? a = !0 : _.status === "unavailable" && (l = !0);
            }));
            const h = await d.completion;
            if (t.signal.aborted) return wat("Search cancelled");
            switch(h.status){
                case "complete":
                case "deadline":
                    break;
                case "cancelled":
                    return wat("Search cancelled");
                case "failed":
                    return wat("Conversation search failed");
                default:
                    return h.status;
            }
            if (l) return wat("Conversation search index is unavailable");
            const p = h.status === "deadline", g = o.length > u, f = o.slice(0, u);
            return this.logService.info("[ConversationSearchExecutor] complete", {
                durationMs: Date.now() - n,
                completionStatus: h.status,
                resultCount: f.length,
                truncated: g,
                partial: p,
                rebuilding: a
            }), new Emn({
                result: {
                    case: "success",
                    value: new H5o({
                        hits: f.map(Y_k),
                        truncated: g,
                        partial: p,
                        rebuilding: a
                    })
                }
            });
        } catch (u) {
            return t.signal.aborted ? wat("Search cancelled") : (this.logService.warn("[ConversationSearchExecutor] failed", {
                durationMs: Date.now() - n,
                errorType: u instanceof Error ? u.name : "unknown"
            }), wat("Conversation search failed"));
        } finally{
            s.dispose();
        }
    }
};

}

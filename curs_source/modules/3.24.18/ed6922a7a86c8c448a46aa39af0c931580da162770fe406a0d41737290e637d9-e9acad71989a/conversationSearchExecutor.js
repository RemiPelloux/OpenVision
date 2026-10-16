import { He, Se, rn } from "./HVr.js";
import { EDn, H4i, Q7t, oVs, rVs, sVs } from "./conversation_search_exec_pb.js";
import { _5 } from "./proto-int64.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
function m8e(e) {
    return new Q7t({
        result: {
            case: "error",
            value: new oVs({
                error: e
            })
        }
    });
}
function KXv(e) {
    const t = e.matchKind !== "title" && e.snippet.length > 0 ? e.snippet : void 0;
    return new sVs({
        conversationId: e.conversationId,
        title: e.title.slice(0, 512),
        source: $0h[e.source],
        updatedAtMs: _5.parse(Math.trunc(e.recency)),
        snippet: t
    });
}
var U0h, $0h, H0h;
export { $0h, H0h, KXv, U0h, m8e };
var __wakaru_YXv_initialized = false;
export function YXv() {
if (__wakaru_YXv_initialized) return;
__wakaru_YXv_initialized = true;
"use strict";
x(), EDn(), bi(), Se(), U0h = 1500, $0h = {
    local: H4i.LOCAL,
    "cloud-cache": H4i.CLOUD_CACHE
}, H0h = class {
    constructor(e, t){
        this.conversationSearchService = e, this.logService = t;
    }
    async execute(e, t) {
        const n = Date.now(), i = t.query.trim();
        if (i.length === 0) return m8e("Query must not be empty");
        const r = this.conversationSearchService.getAvailability();
        if (!r.available) return this.logService.info("[ConversationSearchExecutor] unavailable", {
            reason: r.reason,
            durationMs: Date.now() - n
        }), m8e(r.reason === "no-providers" ? "Conversation search is not available" : "Conversation search is disabled");
        if (e.signal.aborted) return m8e("Search cancelled");
        const s = new He;
        let o = [], a = !1, c = !1;
        const l = ()=>s.dispose();
        e.signal.addEventListener("abort", l, {
            once: !0
        }), s.add(rn(()=>e.signal.removeEventListener("abort", l)));
        try {
            const u = Math.min(Math.max(1, t.limit ?? 20), 100), h = this.conversationSearchService.search({
                text: i,
                limit: u + 1,
                includeArchived: !0,
                deadlineAt: Date.now() + U0h
            });
            s.add(h), s.add(h.onDidProgress((b)=>{
                b.kind === "results" ? o = b.results : b.status === "rebuilding" ? a = !0 : b.status === "unavailable" && (c = !0);
            }));
            const p = await h.completion;
            if (e.signal.aborted) return m8e("Search cancelled");
            switch(p.status){
                case "complete":
                case "deadline":
                    break;
                case "cancelled":
                    return m8e("Search cancelled");
                case "failed":
                    return m8e("Conversation search failed");
                default:
                    return p.status;
            }
            if (c) return m8e("Conversation search index is unavailable");
            const g = p.status === "deadline", f = o.length > u, v = o.slice(0, u);
            return this.logService.info("[ConversationSearchExecutor] complete", {
                durationMs: Date.now() - n,
                completionStatus: p.status,
                resultCount: v.length,
                truncated: f,
                partial: g,
                rebuilding: a
            }), new Q7t({
                result: {
                    case: "success",
                    value: new rVs({
                        hits: v.map(KXv),
                        truncated: f,
                        partial: g,
                        rebuilding: a
                    })
                }
            });
        } catch (u) {
            return e.signal.aborted ? m8e("Search cancelled") : (this.logService.warn("[ConversationSearchExecutor] failed", {
                durationMs: Date.now() - n,
                errorType: u instanceof Error ? u.name : "unknown"
            }), m8e("Conversation search failed"));
        } finally{
            s.dispose();
        }
    }
};

}

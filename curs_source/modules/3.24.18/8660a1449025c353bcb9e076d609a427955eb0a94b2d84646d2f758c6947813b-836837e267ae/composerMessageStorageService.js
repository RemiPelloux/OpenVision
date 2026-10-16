import { Ga, Qe, st } from "./Iwo.js";
import { aa, bn, g6t, jn, rAe } from "./SZu.js";
import { ju, nf } from "./agent_pb.js";
import { C1, Qb } from "./aiServerConfigService.js";
import { bs, sd } from "./chat_pb.js";
import { zW } from "./composerBlobStore.js";
import { uv } from "./composerData.js";
import { Dzr, O0t } from "./composerDataCreation.js";
import { Fb, LS } from "./composerEventService.js";
import { iI, w1 } from "./composerLogService.js";
import { dp } from "./connect.js";
import { Ef, UDa, gPp } from "./constants_18.js";
import { a4t, lpn, pa } from "./constants_8.js";
import { Rn } from "./extensions.js";
import { Ng } from "./index_3.ts";
import { OT } from "./index_5.ts";
import { It } from "./instantiation.js";
import { bWt } from "./ipa.js";
import { Uh, ip } from "./metricsService.js";
import { Bt } from "./nls.js";
import { WWu } from "./prepareEvent.js";
import { SOe } from "./scope.js";
import { Q0 } from "./sentry.js";
import { Kb } from "./spanUtils.js";
import { Zi, ki } from "./storage_2.js";
import { Cm, wh } from "./structuredLog.js";
import { __ } from "./tracing_2.js";
import { E } from "./tslib.es6.js";
import { Re } from "./userDataProfile.js";
import { Hu } from "./utils_pb.js";
import { $8p, Azr, OWt, _Fa, j8p } from "./yBp.js";
function Hdy(t) {
    if (t) return Wdy(t) ? {
        captureContext: t
    } : Gdy(t) ? {
        captureContext: t
    } : t;
}
function Wdy(t) {
    return t instanceof SOe || typeof t == "function";
}
function Gdy(t) {
    return Object.keys(t).some((e)=>WWu.includes(e));
}
function Sv(t, e) {
    return Kb().captureException(t, Hdy(e));
}
var HFa, WFa, FWt, H8p, W8p, G8p, GFa, q8p, qFa, eot, gpe, hqe;
export { FWt, G8p, GFa, Gdy, H8p, HFa, Hdy, Sv, W8p, WFa, Wdy, eot, gpe, hqe, q8p, qFa };
var __wakaru_U0t_initialized = false;
export function U0t() {
if (__wakaru_U0t_initialized) return;
__wakaru_U0t_initialized = true;
"use strict";
E(), OT(), Ng(), It(), Qe(), Ga(), pa(), Rn(), uv(), Zi(), __(), Q0(), O0t(), ip(), C1(), ju(), sd(), LS(), zW(), Cm(), dp(), Hu(), Bt(), Ef(), iI(), HFa = (t, e)=>(e = Symbol[t]) ? e : Symbol.for("Symbol." + t), WFa = (t)=>{
    throw TypeError(t);
}, FWt = (t, e)=>(n, i)=>e(n, i, t), H8p = (t, e, n)=>{
    if (e != null) {
        typeof e != "object" && typeof e != "function" && WFa("Object expected");
        var i, r;
        n && (i = e[HFa("asyncDispose")]), i === void 0 && (i = e[HFa("dispose")], n && (r = i)), typeof i != "function" && WFa("Object not disposable"), r && (i = function() {
            try {
                r.call(this);
            } catch (s) {
                return Promise.reject(s);
            }
        }), t.push([
            n,
            i,
            e
        ]);
    } else n && t.push([
        n
    ]);
    return e;
}, W8p = (t, e, n)=>{
    var i = typeof SuppressedError == "function" ? SuppressedError : function(o, a, l, c) {
        return c = Error(l), c.name = "SuppressedError", c.error = o, c.suppressed = a, c;
    }, r = (o)=>e = n ? new i(o, e, "An error was suppressed during disposal") : (n = !0, o), s = (o)=>{
        for(; o = t.pop();)try {
            var a = o[1] && o[1].call(o[2]);
            if (o[0]) return Promise.resolve(a).then(s, (l)=>(r(l), s()));
        } catch (l) {
            r(l);
        }
        if (n) throw e;
    };
    return s();
}, G8p = 1, GFa = 500, q8p = !1, qFa = new Set, eot = jn("composerMessageStorageService"), gpe = "bubbleId", hqe = class extends st {
    constructor(t, e, n, i, r, s){
        super(), this._storageService = t, this._structuredLogService = e, this._metricsService = n, this._aiServerConfigService = i, this._composerEventService = r, this._composerLogService = s;
    }
    async storeMessage(t, e, n, i) {
        if (!t) throw new Error("[composer] composerId is undefined");
        const r = performance.now(), s = Date.now();
        let o = !1;
        try {
            if (bWt(e)) return e.bubbleId;
            const a = e.bubbleId, l = _Fa(e, this._composerLogService), c = performance.now(), u = Dzr(l), d = performance.now() - c, h = performance.now();
            await this._storageService.cursorDiskKVSet(`${gpe}:${t}:${a}`, u), o = !0, i?.suppressPersistEvent !== !0 && this._composerEventService.fireDidPersistComposer({
                composerId: t
            });
            const p = performance.now() - h, g = performance.now() - r, f = {
                "metrics.version": G8p.toString()
            };
            return this._metricsService.distribution({
                stat: "renderer.composer.message_storage.store_message.total_ms",
                value: g,
                tags: f
            }), this._metricsService.distribution({
                stat: "renderer.composer.message_storage.store_message.stringify_ms",
                value: d,
                tags: f
            }), this._metricsService.distribution({
                stat: "renderer.composer.message_storage.store_message.kv_set_ms",
                value: p,
                tags: f
            }), a;
        } catch (a) {
            throw o || j8p("storeMessage", t, e.bubbleId, a), a;
        } finally{
            const a = performance.now() - r;
            a > GFa && rAe({
                parentSpanContext: n,
                name: "ComposerMessageStorageService.storeMessage.slow",
                startTimeMs: s,
                endTimeMs: s + a,
                attributes: {
                    durationMs: a,
                    slowThresholdMs: GFa
                }
            });
        }
    }
    async updateMessage(t, e, n) {
        if (!e || !t) throw new Error("[composer] messageId or composerId is undefined" + JSON.stringify({
            messageId: e,
            composerId: t
        }));
        OWt(this._composerLogService, "[composer] updating message", `${gpe}:${t.slice(0, 4)}:${e.slice(0, 4)}`);
        const i = await this.retrieveMessage(t, e);
        if (i) {
            n(i);
            try {
                const r = _Fa(i, this._composerLogService);
                await this._storageService.cursorDiskKVSet(`${gpe}:${t}:${e}`, Dzr(r));
            } catch (r) {
                throw j8p("updateMessage", t, e, r), r;
            }
            this._composerEventService.fireDidPersistComposer({
                composerId: t
            });
        } else this._composerLogService.error("[composer] No message found for id", e);
    }
    async retrieveMessage(t, e) {
        if (!e || !t) throw new Error("[composer] messageId or composerId is undefined" + JSON.stringify({
            messageId: e,
            composerId: t
        }));
        OWt(this._composerLogService, "[composer] retrieving message", `${gpe}:${t.slice(0, 4)}:${e.slice(0, 4)}`);
        const n = await this._storageService.cursorDiskKVGet(`${gpe}:${t}:${e}`);
        if (!n) return;
        const i = JSON.parse(n), r = Azr(i, this._composerLogService);
        return r.conversationState = await $8p(this._storageService, this._structuredLogService, t, e, i.conversationState), OWt(this._composerLogService, "[composer] retrieved message", {
            message: r
        }), r;
    }
    async retrieveMessagesBatch(t, e, n) {
        var i = [];
        try {
            const o = H8p(i, g6t({
                parentSpanContext: n,
                name: "ComposerMessageStorageService.retrieveMessagesBatch"
            }));
            return (await this.retrieveMessagesBatchInternal(t, e)).messages;
        } catch (o) {
            var r = o, s = !0;
        } finally{
            W8p(i, r, s);
        }
    }
    async retrieveMessagesBatchInternal(t, e) {
        const n = new Map;
        let i = !1, r = 0, s = 0;
        for(; r < e.length;){
            r > 0 && await new Promise((u)=>setTimeout(u, 0));
            const o = s > 0 ? Math.floor(a4t / s) : r > 0 ? lpn : 1, a = e.slice(r, r + Math.min(lpn, Math.max(1, o)));
            r += a.length;
            const l = a.map((u)=>`${gpe}:${t}:${u}`), c = await this._storageService.cursorDiskKVGetBatch(l);
            for (const [u, d] of c){
                s = Math.max(s, u.length + d.length);
                const h = u.slice(`${gpe}:${t}:`.length), p = JSON.parse(d), g = Azr(p, this._composerLogService), f = p.conversationState;
                try {
                    g.conversationState = await $8p(this._storageService, this._structuredLogService, t, h, f);
                } catch (_) {
                    i = !0, g.conversationState = new nf, Sv(_, {
                        tags: {
                            client_error_type: "composer_corruption",
                            force_upload: "forced"
                        },
                        extra: {
                            composerId: t,
                            messageId: h
                        }
                    });
                }
                n.set(h, g);
            }
        }
        return {
            messages: n,
            hasCorruptedCheckpoints: i
        };
    }
    async copyMessages(t, e, n, i = {}) {
        if (!t || !e) throw new Error("[composer] srcComposerId or dstComposerId is undefined" + JSON.stringify({
            srcComposerId: t,
            dstComposerId: e
        }));
        const r = i.chunkSize ?? lpn, s = [], o = [];
        for(let a = 0; a < n.length; a += r){
            const l = n.slice(a, a + r), c = i.transform;
            if (c) {
                const g = await this.retrieveMessagesBatch(t, l);
                for (const f of l){
                    const _ = g.get(f);
                    if (!_) {
                        o.push(f);
                        continue;
                    }
                    const b = await c(_);
                    await this._storageService.cursorDiskKVSet(`${gpe}:${e}:${b.bubbleId}`, Dzr(_Fa(b, this._composerLogService))), s.push(b.bubbleId);
                }
                continue;
            }
            const u = l.map((g)=>`${gpe}:${t}:${g}`), d = await this._storageService.cursorDiskKVGetBatch(u), h = new Map;
            for (const [g, f] of d){
                const _ = g.slice(`${gpe}:${t}:`.length);
                h.set(_, f);
            }
            const p = [];
            for (const g of l){
                const f = h.get(g);
                if (f === void 0) {
                    o.push(g);
                    continue;
                }
                p.push(this._storageService.cursorDiskKVSet(`${gpe}:${e}:${g}`, f)), s.push(g);
            }
            await Promise.all(p);
        }
        return s.length > 0 && this._composerEventService.fireDidPersistComposer({
            composerId: e
        }), {
            copied: s,
            missing: o
        };
    }
    async deleteMessage(t, e, n) {
        if (!e || !t) throw new Error("[composer] messageId or composerId is undefined" + JSON.stringify({
            messageId: e,
            composerId: t
        }));
        OWt(this._composerLogService, "[composer] deleting message", `${gpe}:${t.slice(0, 4)}:${e.slice(0, 4)}`), await this._storageService.cursorDiskKVSet(`${gpe}:${t}:${e}`, void 0), n?.suppressPersistEvent !== !0 && this._composerEventService.fireDidPersistComposer({
            composerId: t
        });
    }
    async clearComposerMessages(t) {
        if (!t) throw new Error("[composer] composerId is undefined");
        OWt(this._composerLogService, "[composer] clearing all messages for composer", t), await this._storageService.cursorDiskKVClearPrefix(`${gpe}:${t}:`).catch((e)=>{
            this._composerLogService.error(`[composer] Error clearing messages for composer ${t}:`, e);
        });
    }
    async getInitialMessages(t, e) {
        OWt(this._composerLogService, "[composer] calculating initial messages to load for composer", t);
        const n = [];
        let i = 1, r = 0, s = !1;
        for(let c = e.length - 1; c >= 0 && i <= UDa; c--){
            const u = e[c], d = u.type === bs.HUMAN;
            if (!(!d && u.type !== bs.AI)) {
                if (!d && s && (i++, i > UDa)) break;
                s = d, (r < gPp || d) && n.push(u.bubbleId), r++;
            }
        }
        n.reverse(), OWt(this._composerLogService, "[composer] loading exactly", n.length, "messages");
        const o = await this.retrieveMessagesBatchInternal(t, n), a = o.hasCorruptedCheckpoints, l = [];
        for (const c of n){
            const u = o.messages.get(c);
            u === void 0 || u.errorDetails?.error?.details?.buttons?.some((d)=>d.action?.case === "reloadWindow") || l.push(u);
        }
        return {
            messages: l,
            hasCorruptedCheckpoints: a
        };
    }
}, Re([
    aa("ComposerMessageStorageService.updateMessage")
], hqe.prototype, "updateMessage", null), Re([
    aa("ComposerMessageStorageService.retrieveMessage")
], hqe.prototype, "retrieveMessage", null), Re([
    aa("ComposerMessageStorageService.copyMessages")
], hqe.prototype, "copyMessages", null), Re([
    aa("ComposerMessageStorageService.deleteMessage")
], hqe.prototype, "deleteMessage", null), Re([
    aa("ComposerMessageStorageService.clearComposerMessages")
], hqe.prototype, "clearComposerMessages", null), Re([
    aa("ComposerMessageStorageService.getInitialMessages")
], hqe.prototype, "getInitialMessages", null), hqe = Re([
    FWt(0, ki),
    FWt(1, wh),
    FWt(2, Uh),
    FWt(3, Qb),
    FWt(4, Fb),
    FWt(5, w1)
], hqe), bn(eot, hqe, 1);

}

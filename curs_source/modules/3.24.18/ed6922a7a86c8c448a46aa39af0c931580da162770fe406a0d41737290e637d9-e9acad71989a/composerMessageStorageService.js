import { KBu, _St, l7i, pXs, zBu } from "./A3u.js";
import { nSt } from "./De_3.js";
import { Fo, Se, we } from "./HVr.js";
import { ie } from "./actions_2.js";
import { Hm, zd } from "./agent_pb.js";
import { dw, tE } from "./aiServerConfigService.js";
import { Hu, Tr } from "./chat_pb.js";
import { BU } from "./composerBlobStore.js";
import { Wf } from "./composerData.js";
import { dJe, p7i } from "./composerDataCreation.js";
import { Zy, yC } from "./composerEventService.js";
import { lb, n0 } from "./composerLogService.js";
import { hg } from "./connect.js";
import { I$s, eg, kku } from "./constants_18.js";
import { Dht, So, XNt } from "./constants_8.js";
import { Pn } from "./extensions.js";
import { Gp } from "./index_3.ts";
import { A1 } from "./index_5.ts";
import { Ze } from "./instantiation.js";
import { Cp, vp } from "./metricsService.js";
import { rt } from "./nls.js";
import { kwc } from "./prepareEvent.js";
import { Hqe, NNt, mn, vn, zs } from "./qIc.js";
import { zke } from "./scope.js";
import { Lk } from "./sentry.js";
import { nv } from "./spanUtils.js";
import { Vn, yn } from "./storage_2.js";
import { Xh, im } from "./structuredLog.js";
import { yv } from "./tracing_2.js";
import { x } from "./tslib.es6.js";
import { hu } from "./utils_pb.js";
function nig(e) {
    if (e) return iig(e) ? {
        captureContext: e
    } : rig(e) ? {
        captureContext: e
    } : e;
}
function iig(e) {
    return e instanceof zke || typeof e == "function";
}
function rig(e) {
    return Object.keys(e).some((t)=>kwc.includes(t));
}
function Km(e, t) {
    return nv().captureException(e, nig(t));
}
var $Xs, HXs, bSt, YBu, XBu, ZBu, WXs, QBu, GXs, W4e, Ree, zMe;
export { $Xs, GXs, HXs, Km, QBu, Ree, W4e, WXs, XBu, YBu, ZBu, bSt, iig, nig, rig, zMe };
var __wakaru_gJe_initialized = false;
export function gJe() {
if (__wakaru_gJe_initialized) return;
__wakaru_gJe_initialized = true;
"use strict";
x(), A1(), Gp(), Ze(), Se(), Fo(), So(), Pn(), Wf(), Vn(), yv(), Lk(), dJe(), Cp(), tE(), zd(), Hu(), yC(), BU(), im(), hg(), hu(), rt(), eg(), n0(), $Xs = (e, t)=>(t = Symbol[e]) ? t : Symbol.for("Symbol." + e), HXs = (e)=>{
    throw TypeError(e);
}, bSt = (e, t)=>(n, i)=>t(n, i, e), YBu = (e, t, n)=>{
    if (t != null) {
        typeof t != "object" && typeof t != "function" && HXs("Object expected");
        var i, r;
        n && (i = t[$Xs("asyncDispose")]), i === void 0 && (i = t[$Xs("dispose")], n && (r = i)), typeof i != "function" && HXs("Object not disposable"), r && (i = function() {
            try {
                r.call(this);
            } catch (s) {
                return Promise.reject(s);
            }
        }), e.push([
            n,
            i,
            t
        ]);
    } else n && e.push([
        n
    ]);
    return t;
}, XBu = (e, t, n)=>{
    var i = typeof SuppressedError == "function" ? SuppressedError : function(o, a, c, l) {
        return l = Error(c), l.name = "SuppressedError", l.error = o, l.suppressed = a, l;
    }, r = (o)=>t = n ? new i(o, t, "An error was suppressed during disposal") : (n = !0, o), s = (o)=>{
        for(; o = e.pop();)try {
            var a = o[1] && o[1].call(o[2]);
            if (o[0]) return Promise.resolve(a).then(s, (c)=>(r(c), s()));
        } catch (c) {
            r(c);
        }
        if (n) throw t;
    };
    return s();
}, ZBu = 1, WXs = 500, QBu = !1, GXs = new Set, W4e = vn("composerMessageStorageService"), Ree = "bubbleId", zMe = class extends we {
    constructor(e, t, n, i, r, s){
        super(), this._storageService = e, this._structuredLogService = t, this._metricsService = n, this._aiServerConfigService = i, this._composerEventService = r, this._composerLogService = s;
    }
    async storeMessage(e, t, n, i) {
        if (!e) throw new Error("[composer] composerId is undefined");
        const r = performance.now(), s = Date.now();
        let o = !1;
        try {
            if (nSt(t)) return t.bubbleId;
            const a = t.bubbleId, c = pXs(t, this._composerLogService), l = performance.now(), u = p7i(c), h = performance.now() - l, p = performance.now();
            await this._storageService.cursorDiskKVSet(`${Ree}:${e}:${a}`, u), o = !0, i?.suppressPersistEvent !== !0 && this._composerEventService.fireDidPersistComposer({
                composerId: e
            });
            const g = performance.now() - p, f = performance.now() - r, v = {
                "metrics.version": ZBu.toString()
            };
            return this._metricsService.distribution({
                stat: "renderer.composer.message_storage.store_message.total_ms",
                value: f,
                tags: v
            }), this._metricsService.distribution({
                stat: "renderer.composer.message_storage.store_message.stringify_ms",
                value: h,
                tags: v
            }), this._metricsService.distribution({
                stat: "renderer.composer.message_storage.store_message.kv_set_ms",
                value: g,
                tags: v
            }), a;
        } catch (a) {
            throw o || zBu("storeMessage", e, t.bubbleId, a), a;
        } finally{
            const a = performance.now() - r;
            a > WXs && Hqe({
                parentSpanContext: n,
                name: "ComposerMessageStorageService.storeMessage.slow",
                startTimeMs: s,
                endTimeMs: s + a,
                attributes: {
                    durationMs: a,
                    slowThresholdMs: WXs
                }
            });
        }
    }
    async updateMessage(e, t, n) {
        if (!t || !e) throw new Error("[composer] messageId or composerId is undefined" + JSON.stringify({
            messageId: t,
            composerId: e
        }));
        _St(this._composerLogService, "[composer] updating message", `${Ree}:${e.slice(0, 4)}:${t.slice(0, 4)}`);
        const i = await this.retrieveMessage(e, t);
        if (i) {
            n(i);
            try {
                const r = pXs(i, this._composerLogService);
                await this._storageService.cursorDiskKVSet(`${Ree}:${e}:${t}`, p7i(r));
            } catch (r) {
                throw zBu("updateMessage", e, t, r), r;
            }
            this._composerEventService.fireDidPersistComposer({
                composerId: e
            });
        } else this._composerLogService.error("[composer] No message found for id", t);
    }
    async retrieveMessage(e, t) {
        if (!t || !e) throw new Error("[composer] messageId or composerId is undefined" + JSON.stringify({
            messageId: t,
            composerId: e
        }));
        _St(this._composerLogService, "[composer] retrieving message", `${Ree}:${e.slice(0, 4)}:${t.slice(0, 4)}`);
        const n = await this._storageService.cursorDiskKVGet(`${Ree}:${e}:${t}`);
        if (!n) return;
        const i = JSON.parse(n), r = l7i(i, this._composerLogService);
        return r.conversationState = await KBu(this._storageService, this._structuredLogService, e, t, i.conversationState), _St(this._composerLogService, "[composer] retrieved message", {
            message: r
        }), r;
    }
    async retrieveMessagesBatch(e, t, n) {
        var i = [];
        try {
            const o = YBu(i, NNt({
                parentSpanContext: n,
                name: "ComposerMessageStorageService.retrieveMessagesBatch"
            }));
            return (await this.retrieveMessagesBatchInternal(e, t)).messages;
        } catch (o) {
            var r = o, s = !0;
        } finally{
            XBu(i, r, s);
        }
    }
    async retrieveMessagesBatchInternal(e, t) {
        const n = new Map;
        let i = !1, r = 0, s = 0;
        for(; r < t.length;){
            r > 0 && await new Promise((u)=>setTimeout(u, 0));
            const o = s > 0 ? Math.floor(Dht / s) : r > 0 ? XNt : 1, a = t.slice(r, r + Math.min(XNt, Math.max(1, o)));
            r += a.length;
            const c = a.map((u)=>`${Ree}:${e}:${u}`), l = await this._storageService.cursorDiskKVGetBatch(c);
            for (const [u, h] of l){
                s = Math.max(s, u.length + h.length);
                const p = u.slice(`${Ree}:${e}:`.length), g = JSON.parse(h), f = l7i(g, this._composerLogService), v = g.conversationState;
                try {
                    f.conversationState = await KBu(this._storageService, this._structuredLogService, e, p, v);
                } catch (b) {
                    i = !0, f.conversationState = new Hm, Km(b, {
                        tags: {
                            client_error_type: "composer_corruption",
                            force_upload: "forced"
                        },
                        extra: {
                            composerId: e,
                            messageId: p
                        }
                    });
                }
                n.set(p, f);
            }
        }
        return {
            messages: n,
            hasCorruptedCheckpoints: i
        };
    }
    async copyMessages(e, t, n, i = {}) {
        if (!e || !t) throw new Error("[composer] srcComposerId or dstComposerId is undefined" + JSON.stringify({
            srcComposerId: e,
            dstComposerId: t
        }));
        const r = i.chunkSize ?? XNt, s = [], o = [];
        for(let a = 0; a < n.length; a += r){
            const c = n.slice(a, a + r), l = i.transform;
            if (l) {
                const f = await this.retrieveMessagesBatch(e, c);
                for (const v of c){
                    const b = f.get(v);
                    if (!b) {
                        o.push(v);
                        continue;
                    }
                    const y = await l(b);
                    await this._storageService.cursorDiskKVSet(`${Ree}:${t}:${y.bubbleId}`, p7i(pXs(y, this._composerLogService))), s.push(y.bubbleId);
                }
                continue;
            }
            const u = c.map((f)=>`${Ree}:${e}:${f}`), h = await this._storageService.cursorDiskKVGetBatch(u), p = new Map;
            for (const [f, v] of h){
                const b = f.slice(`${Ree}:${e}:`.length);
                p.set(b, v);
            }
            const g = [];
            for (const f of c){
                const v = p.get(f);
                if (v === void 0) {
                    o.push(f);
                    continue;
                }
                g.push(this._storageService.cursorDiskKVSet(`${Ree}:${t}:${f}`, v)), s.push(f);
            }
            await Promise.all(g);
        }
        return s.length > 0 && this._composerEventService.fireDidPersistComposer({
            composerId: t
        }), {
            copied: s,
            missing: o
        };
    }
    async deleteMessage(e, t, n) {
        if (!t || !e) throw new Error("[composer] messageId or composerId is undefined" + JSON.stringify({
            messageId: t,
            composerId: e
        }));
        _St(this._composerLogService, "[composer] deleting message", `${Ree}:${e.slice(0, 4)}:${t.slice(0, 4)}`), await this._storageService.cursorDiskKVSet(`${Ree}:${e}:${t}`, void 0), n?.suppressPersistEvent !== !0 && this._composerEventService.fireDidPersistComposer({
            composerId: e
        });
    }
    async clearComposerMessages(e) {
        if (!e) throw new Error("[composer] composerId is undefined");
        _St(this._composerLogService, "[composer] clearing all messages for composer", e), await this._storageService.cursorDiskKVClearPrefix(`${Ree}:${e}:`).catch((t)=>{
            this._composerLogService.error(`[composer] Error clearing messages for composer ${e}:`, t);
        });
    }
    async getInitialMessages(e, t) {
        _St(this._composerLogService, "[composer] calculating initial messages to load for composer", e);
        const n = [];
        let i = 1, r = 0, s = !1;
        for(let l = t.length - 1; l >= 0 && i <= I$s; l--){
            const u = t[l], h = u.type === Tr.HUMAN;
            if (!(!h && u.type !== Tr.AI)) {
                if (!h && s && (i++, i > I$s)) break;
                s = h, (r < kku || h) && n.push(u.bubbleId), r++;
            }
        }
        n.reverse(), _St(this._composerLogService, "[composer] loading exactly", n.length, "messages");
        const o = await this.retrieveMessagesBatchInternal(e, n), a = o.hasCorruptedCheckpoints, c = [];
        for (const l of n){
            const u = o.messages.get(l);
            u === void 0 || u.errorDetails?.error?.details?.buttons?.some((h)=>h.action?.case === "reloadWindow") || c.push(u);
        }
        return {
            messages: c,
            hasCorruptedCheckpoints: a
        };
    }
}, ie([
    zs("ComposerMessageStorageService.updateMessage")
], zMe.prototype, "updateMessage", null), ie([
    zs("ComposerMessageStorageService.retrieveMessage")
], zMe.prototype, "retrieveMessage", null), ie([
    zs("ComposerMessageStorageService.copyMessages")
], zMe.prototype, "copyMessages", null), ie([
    zs("ComposerMessageStorageService.deleteMessage")
], zMe.prototype, "deleteMessage", null), ie([
    zs("ComposerMessageStorageService.clearComposerMessages")
], zMe.prototype, "clearComposerMessages", null), ie([
    zs("ComposerMessageStorageService.getInitialMessages")
], zMe.prototype, "getInitialMessages", null), zMe = ie([
    bSt(0, yn),
    bSt(1, Xh),
    bSt(2, vp),
    bSt(3, dw),
    bSt(4, Zy),
    bSt(5, lb)
], zMe), mn(W4e, zMe, 1);

}

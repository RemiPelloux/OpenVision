import { le, sT } from "./async.js";
import { N, se } from "./event.js";
import { B } from "./ipc.js";
import { J, j } from "./lifecycle.js";
import { S2e, Yf, w2e, y2e } from "./localSubscriptionMailbox.js";
import { Z, te } from "./log.js";
import { Cn, or } from "./storageMainService.js";
import { E2e, kct } from "./streamOffset.js";
import { w } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
import { Wn, vt } from "./uuid.js";
function T2e(e) {
    return `localAgentMailboxCursor:${e}`;
}
function k2e(e, t) {
    return e.expiresAtUnixMs + S2e > t;
}
function WU(e) {
    return E2e.test(e);
}
function sb(e) {
    const [t, n] = e.offset.split("-").map(BigInt), [r, s] = e.than.split("-").map(BigInt);
    return t !== r ? t > r : n > s;
}
function Tct(e, t) {
    return e === void 0 || t === void 0 ? e ?? t : sb({
        offset: t,
        than: e
    }) ? t : e;
}
function b2e(e, t) {
    const n = new Map;
    if (e === void 0) return n;
    let r;
    try {
        r = JSON.parse(e);
    } catch  {
        return n;
    }
    if (typeof r != "object" || r === null || Array.isArray(r)) return n;
    for (const [s, i] of Object.entries(r))s.length > 0 && typeof i == "number" && Number.isFinite(i) && k2e({
        expiresAtUnixMs: i
    }, t) && n.set(s, i);
    return n;
}
function ib(e) {
    return JSON.stringify(Object.fromEntries(e));
}
var xo, ab;
export { T2e, Tct, WU, ab, b2e, ib, k2e, sb, xo };
var __wakaru_Sct_initialized = false;
export function Sct() {
if (__wakaru_Sct_initialized) return;
__wakaru_Sct_initialized = true;
"use strict";
h(), le(), se(), j(), Wn(), w2e(), kct(), te(), or(), xo = "state", ab = class extends J {
    constructor(e, t){
        super(), this.applicationStorageService = e, this.logService = t, this.sequencer = new sT, this.claimsByConversation = new Map, this.claimsByToken = new Map, this._onDidReleaseClaim = this._register(new N), this.onDidReleaseClaim = this._onDidReleaseClaim.event, this._onDidChangeCandidates = this._register(new N), this.onDidChangeCandidates = this._onDidChangeCandidates.event, this._onDidAnnounceSubscriptionsChanged = this._register(new N), this.onDidAnnounceSubscriptionsChanged = this._onDidAnnounceSubscriptionsChanged.event;
    }
    async announceSubscriptionsChanged(e) {
        e.length !== 0 && this._onDidAnnounceSubscriptionsChanged.fire(e);
    }
    async claim({ claimOwner: e, conversationId: t }) {
        if (!(e.length === 0 || t.length === 0)) return this.sequencer.queue(xo, async ()=>{
            const n = this.claimsByConversation.get(t);
            if (n !== void 0 && n.owner !== e) return;
            const r = await this.readCursor(t), s = n ?? {
                conversationId: t,
                owner: e,
                token: vt()
            };
            return n === void 0 && (this.claimsByConversation.set(t, s), this.claimsByToken.set(s.token, s)), {
                conversationId: t,
                token: s.token,
                afterOffset: r ?? ""
            };
        });
    }
    async commitOffset(e) {
        const { claimToken: t, offset: n } = e;
        return WU(n) ? this.sequencer.queue(xo, async ()=>{
            const r = this.claimsByToken.get(t);
            if (r === void 0 || this.claimsByConversation.get(r.conversationId)?.token !== t) return "claim-lost";
            if (e.purpose === "gap") {
                r.settleFloor = Tct(r.settleFloor, WU(e.gapAfterOffset) ? e.gapAfterOffset : void 0);
                const s = await this.readCursor(r.conversationId);
                if (s !== void 0 && r.settleFloor !== void 0 && sb({
                    offset: s,
                    than: r.settleFloor
                }) && !sb({
                    offset: n,
                    than: s
                })) return "committed";
            } else {
                const s = (i)=>i !== void 0 && !sb({
                        offset: n,
                        than: i
                    });
                if (s(r.settleFloor) || s(await this.readCursor(r.conversationId))) return "committed";
            }
            return this.persistCursor(r.conversationId, n);
        }) : "not-persisted";
    }
    async release(e) {
        await this.sequencer.queue(xo, async ()=>{
            const t = this.claimsByToken.get(e);
            t !== void 0 && this.releaseClaim(t);
        });
    }
    async releaseClaimsForOwner(e) {
        await this.sequencer.queue(xo, async ()=>{
            for (const t of [
                ...this.claimsByToken.values()
            ])t.owner === e && this.releaseClaim(t);
        });
    }
    releaseClaim(e) {
        this.claimsByToken.get(e.token) === e && (this.claimsByToken.delete(e.token), this.claimsByConversation.get(e.conversationId) === e && (this.claimsByConversation.delete(e.conversationId), this._onDidReleaseClaim.fire(e.conversationId)));
    }
    async rememberCandidate({ conversationId: e, expiresAtUnixMs: t }) {
        e.length === 0 || !Number.isFinite(t) || await this.sequencer.queue(xo, async ()=>{
            const n = Date.now(), r = await this.readCandidates(n), s = new Map(r);
            for(k2e({
                expiresAtUnixMs: t
            }, n) ? s.set(e, t) : s.delete(e); s.size > y2e;){
                let a;
                for (const o of s)(a === void 0 || o[1] < a[1]) && (a = o);
                if (a === void 0) break;
                s.delete(a[0]);
            }
            await this.persistCandidatesIfChanged(r, s);
            const i = s.get(e);
            i !== r.get(e) && this._onDidChangeCandidates.fire(i === void 0 ? {
                _tag: "forgotten",
                conversationId: e
            } : {
                _tag: "remembered",
                conversationId: e,
                expiresAtUnixMs: i
            });
        });
    }
    async forgetCandidate(e) {
        await this.sequencer.queue(xo, async ()=>{
            const t = await this.readCandidates(Date.now());
            if (!t.has(e)) return;
            const n = new Map(t);
            n.delete(e), await this.persistCandidatesIfChanged(t, n), this._onDidChangeCandidates.fire({
                _tag: "forgotten",
                conversationId: e
            });
        });
    }
    async listCandidates() {
        return this.sequencer.queue(xo, async ()=>{
            await this.applicationStorageService.whenReady;
            const e = await this.applicationStorageService.cursorDiskKVGet(Yf), t = b2e(e, Date.now());
            return e !== void 0 && ib(t) !== e && await this.persistCandidates(t), Array.from(t, ([n, r])=>({
                    conversationId: n,
                    expiresAtUnixMs: r
                }));
        });
    }
    async readCandidates(e) {
        await this.applicationStorageService.whenReady;
        const t = await this.applicationStorageService.cursorDiskKVGet(Yf);
        return b2e(t, e);
    }
    async persistCandidatesIfChanged(e, t) {
        ib(e) !== ib(t) && await this.persistCandidates(t);
    }
    async persistCandidates(e) {
        try {
            if (e.size === 0) {
                await this.applicationStorageService.cursorDiskKVDelete(Yf);
                return;
            }
            await this.applicationStorageService.cursorDiskKVSet(Yf, ib(e));
        } catch (t) {
            this.logService.warn("[LocalSubscriptionMailboxMainService] Failed to persist the Local Agent Mailbox candidates", t);
        }
    }
    async readCursor(e) {
        await this.applicationStorageService.whenReady;
        const t = await this.applicationStorageService.cursorDiskKVGet(T2e(e));
        return t !== void 0 && WU(t) ? t : void 0;
    }
    async persistCursor(e, t) {
        try {
            return await this.applicationStorageService.cursorDiskKVSet(T2e(e), t), "committed";
        } catch (n) {
            return this.logService.warn("[LocalSubscriptionMailboxMainService] Failed to persist the mailbox cursor", e, n), "not-persisted";
        }
    }
}, ab = B([
    w(0, Cn),
    w(1, Z)
], ab);

}

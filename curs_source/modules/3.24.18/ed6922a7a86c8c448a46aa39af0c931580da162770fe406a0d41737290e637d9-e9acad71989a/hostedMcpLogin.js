import { Cl, He, Se } from "./HVr.js";
import { bI, bn } from "./async.js";
import { Yuh } from "./cloudMcpAuthUrl.js";
import { Pwt, WPe } from "./cloudMcpOAuthFlowState.js";
import { Jh } from "./dashboard_pb.js";
import { Ml } from "./index.ts";
import { x } from "./tslib.es6.js";
import { l8v } from "./xmo.js";
var Juh, oVt, edh, VPe, Mbo, tdh, ndh, idh, rdh, sdh, odh, adh, Pbo;
export { Juh, Mbo, Pbo, VPe, adh, edh, idh, ndh, oVt, odh, rdh, sdh, tdh };
var __wakaru_tFn_initialized = false;
export function tFn() {
if (__wakaru_tFn_initialized) return;
__wakaru_tFn_initialized = true;
"use strict";
x(), Ml(), Jh(), bn(), Se(), Yuh(), WPe(), Juh = "default", oVt = "Reconnect in grok.com", edh = "Authentication URL unavailable for this MCP server.", VPe = {
    teamAdminRequired: "Cursor's servers can already reach this server. A team MCP admin decides where this team's servers run.",
    awaitingConfirmation: "Cursor's servers reached this server once and will check again before running it there. Nothing to sign in to yet.",
    grantNotRefreshable: "Cursor's servers can reach this server, but the sign-in stored there can't be renewed without you, so it keeps running from this machine.",
    refreshUnavailable: "Cursor's servers can reach this server, but can't renew its sign-in, so it keeps running from this machine.",
    registrationUnavailable: "Cursor's servers can reach this server, but can't sign in to it yet, so it keeps running from this machine.",
    alreadySignedIn: "Cursor's servers already hold a sign-in for this server; nothing to sign in to.",
    noSignInNeeded: "This server needs no sign-in on Cursor's servers.",
    unreachable: "Cursor's servers could not reach this server, so there is nothing to sign in to there.",
    noUrlMinted: "Cursor's servers asked for a sign-in but did not provide a sign-in link. Try again in a moment."
}, Mbo = class extends Error {
    constructor(e, t){
        super(l8v({
            status: e,
            probeReason: t
        })), this.status = e, this.probeReason = t, this.name = "HostedMcpNoAuthUrlError";
    }
}, tdh = "Now runs on Cursor's servers.", ndh = `This server needs no sign-in, but Cursor's servers did not take it over. Try "Run on Cursor's servers" again; until then it runs from this machine.`, idh = "Cursor could not find the account this connector signs in as. Refresh and try again.", rdh = 15 * 6e4, sdh = 500, odh = class {
    constructor(e = Pwt){
        this.store = new He, this.events = [], this.listeners = new Set, this.store.add(e((t)=>{
            this.events.push(t);
            for (const n of this.listeners)n(t);
        }));
    }
    waitFor(e) {
        const t = (r)=>(e.stateId === void 0 || r.stateId === e.stateId) && r.stage !== "started", n = (r)=>r.stage === "completed" ? {
                kind: "completed"
            } : {
                kind: "failed",
                error: r.error ?? "Failed to complete the MCP authentication flow."
            }, i = this.events.find(t);
        return i !== void 0 ? Promise.resolve(n(i)) : e.abortSignal?.aborted ? Promise.resolve({
            kind: "aborted"
        }) : e.isRejected?.() === !0 ? Promise.resolve({
            kind: "rejected"
        }) : new Promise((r)=>{
            const s = this.store.add(new He), o = (u)=>{
                this.store.delete(s), r(u);
            }, a = (u)=>{
                t(u) && o(n(u));
            };
            this.listeners.add(a), s.add({
                dispose: ()=>this.listeners.delete(a)
            });
            const c = e.abortSignal;
            if (c !== void 0) {
                const u = ()=>o({
                        kind: "aborted"
                    });
                c.addEventListener("abort", u, {
                    once: !0
                }), s.add({
                    dispose: ()=>c.removeEventListener("abort", u)
                });
            }
            const l = e.isRejected;
            l !== void 0 && s.add(new bI).cancelAndSet(()=>{
                l() && o({
                    kind: "rejected"
                });
            }, e.rejectionPollMs ?? sdh), Cl(()=>o({
                    kind: "timeout"
                }), e.timeoutMs ?? rdh, s);
        });
    }
    dispose() {
        this.listeners.clear(), this.store.dispose();
    }
}, adh = 5e3, Pbo = {
    force: !0,
    fresh: !0
};

}

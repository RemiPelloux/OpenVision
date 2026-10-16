import { Ec, Nt, Qe } from "./Iwo.js";
import { AI, qn } from "./async.js";
import { wXm } from "./cloudMcpAuthUrl.js";
import { BPe, tat } from "./cloudMcpOAuthFlowState.js";
import { Du } from "./dashboard_pb.js";
import { Tok } from "./gYa.js";
import { nl } from "./index.ts";
import { E } from "./tslib.es6.js";
var IXm, txn, xXm, fze, Zel, AXm, RXm, PXm, MXm, DXm, NXm, LXm, Qel;
export { AXm, DXm, IXm, LXm, MXm, NXm, PXm, Qel, RXm, Zel, fze, txn, xXm };
var __wakaru_ZCi_initialized = false;
export function ZCi() {
if (__wakaru_ZCi_initialized) return;
__wakaru_ZCi_initialized = true;
"use strict";
E(), nl(), Du(), qn(), Qe(), wXm(), BPe(), IXm = "default", txn = "Reconnect in grok.com", xXm = "Authentication URL unavailable for this MCP server.", fze = {
    teamAdminRequired: "Cursor's servers can already reach this server. A team MCP admin decides where this team's servers run.",
    awaitingConfirmation: "Cursor's servers reached this server once and will check again before running it there. Nothing to sign in to yet.",
    grantNotRefreshable: "Cursor's servers can reach this server, but the sign-in stored there can't be renewed without you, so it keeps running from this machine.",
    refreshUnavailable: "Cursor's servers can reach this server, but can't renew its sign-in, so it keeps running from this machine.",
    registrationUnavailable: "Cursor's servers can reach this server, but can't sign in to it yet, so it keeps running from this machine.",
    alreadySignedIn: "Cursor's servers already hold a sign-in for this server; nothing to sign in to.",
    noSignInNeeded: "This server needs no sign-in on Cursor's servers.",
    unreachable: "Cursor's servers could not reach this server, so there is nothing to sign in to there.",
    noUrlMinted: "Cursor's servers asked for a sign-in but did not provide a sign-in link. Try again in a moment."
}, Zel = class extends Error {
    constructor(t, e){
        super(Tok({
            status: t,
            probeReason: e
        })), this.status = t, this.probeReason = e, this.name = "HostedMcpNoAuthUrlError";
    }
}, AXm = "Now runs on Cursor's servers.", RXm = `This server needs no sign-in, but Cursor's servers did not take it over. Try "Run on Cursor's servers" again; until then it runs from this machine.`, PXm = "Cursor could not find the account this connector signs in as. Refresh and try again.", MXm = 15 * 6e4, DXm = 500, NXm = class {
    constructor(t = tat){
        this.store = new Nt, this.events = [], this.listeners = new Set, this.store.add(t((e)=>{
            this.events.push(e);
            for (const n of this.listeners)n(e);
        }));
    }
    waitFor(t) {
        const e = (r)=>(t.stateId === void 0 || r.stateId === t.stateId) && r.stage !== "started", n = (r)=>r.stage === "completed" ? {
                kind: "completed"
            } : {
                kind: "failed",
                error: r.error ?? "Failed to complete the MCP authentication flow."
            }, i = this.events.find(e);
        return i !== void 0 ? Promise.resolve(n(i)) : t.abortSignal?.aborted ? Promise.resolve({
            kind: "aborted"
        }) : t.isRejected?.() === !0 ? Promise.resolve({
            kind: "rejected"
        }) : new Promise((r)=>{
            const s = this.store.add(new Nt), o = (u)=>{
                this.store.delete(s), r(u);
            }, a = (u)=>{
                e(u) && o(n(u));
            };
            this.listeners.add(a), s.add({
                dispose: ()=>this.listeners.delete(a)
            });
            const l = t.abortSignal;
            if (l !== void 0) {
                const u = ()=>o({
                        kind: "aborted"
                    });
                l.addEventListener("abort", u, {
                    once: !0
                }), s.add({
                    dispose: ()=>l.removeEventListener("abort", u)
                });
            }
            const c = t.isRejected;
            c !== void 0 && s.add(new AI).cancelAndSet(()=>{
                c() && o({
                    kind: "rejected"
                });
            }, t.rejectionPollMs ?? DXm), Ec(()=>o({
                    kind: "timeout"
                }), t.timeoutMs ?? MXm, s);
        });
    }
    dispose() {
        this.listeners.clear(), this.store.dispose();
    }
}, LXm = 5e3, Qel = {
    force: !0,
    fresh: !0
};

}

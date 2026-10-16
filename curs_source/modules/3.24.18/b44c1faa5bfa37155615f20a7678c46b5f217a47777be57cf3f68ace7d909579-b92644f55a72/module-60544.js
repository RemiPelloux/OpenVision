"use strict";
require.d(exports, {
    Z9: ()=>b,
    QF: ()=>E
});
var n = require("./module-9639.js"), s = require("./module-37949.js"), o = require("./module-33002.js"), i = require("./module-60525.js"), a = require("./module-89396.js");
const c = 10485760;
function l(...e) {
    const t = new Set, r = [];
    for (const n of e)for (const e of n ?? [])0 === e.length || t.has(e) || (t.add(e), r.push(e));
    return r;
}
const u = (e)=>({
        fileContents: {},
        fileCount: 0,
        prefetchedCount: 0,
        skippedLargeCount: 0,
        failedCount: 0,
        totalBytes: 0,
        prefetchMs: e
    });
async function d(e, t, r = ()=>performance.now()) {
    const n = r(), s = l(e);
    if (0 === s.length) return u(r() - n);
    let o = 0, i = 0, a = 0, d = 0;
    const p = {}, m = await Promise.all(s.map(async (e)=>{
        try {
            if ((await t.stat(e)).size > c) return void i++;
            const r = await t.read(e);
            return o++, d += r.byteLength, [
                e,
                r.contents
            ];
        } catch  {
            return void a++;
        }
    }));
    for (const e of m)void 0 !== e && (p[e[0]] = e[1]);
    return {
        fileContents: p,
        fileCount: s.length,
        prefetchedCount: o,
        skippedLargeCount: i,
        failedCount: a,
        totalBytes: d,
        prefetchMs: r() - n
    };
}
var p = require("./module-18130.js"), m = require("./module-66608.js");
const h = 25, f = 250, g = "Request context overlay missing on the first turn: refusing to start without renderer policy fields.", y = (0, s.h)("agent-host:own-request-context");
function w(e) {
    return {
        fileContents: {},
        fileCount: 0,
        prefetchedCount: 0,
        skippedLargeCount: 0,
        failedCount: 0,
        totalBytes: 0,
        prefetchMs: e
    };
}
async function v(e, t) {
    const [r, n] = (0, o.q6)().withTimeoutAndCancel(t);
    try {
        return await Promise.race([
            e,
            new Promise((e)=>{
                r.signal.aborted ? e(void 0) : r.signal.addEventListener("abort", ()=>e(void 0), {
                    once: !0
                });
            })
        ]);
    } finally{
        n();
    }
}
async function _(e) {
    const t = e.graceAfterBaseMs ?? h, r = e.firstTurnWaitMs ?? f, n = e.now ?? (()=>performance.now()), s = n(), o = e.baseExecutor.execute(e.ctx, e.args, e.execOptions);
    let i, c = "none";
    const u = function(e, t) {
        return e.mailbox.isExpected(e.requestId) ? e.mailbox.awaitOverlay(e.requestId) : void 0 === e.pullOverlay ? Promise.resolve(e.mailbox.peek(e.requestId)) : e.pullOverlay().then((r)=>void 0 !== r ? (t("pull", r.sourceToolIds), r.overlay) : e.mailbox.peek(e.requestId));
    }(e, (e, t)=>{
        c = e, i = t;
    });
    u.then((t)=>{
        void 0 !== t && e.mailbox.recordLast(e.composerId, t);
    });
    const _ = l(e.mailbox.peek(e.requestId)?.prefetchFileUris, e.mailbox.last(e.composerId)?.prefetchFileUris), A = void 0 === e.prefetchFileAccess ? Promise.resolve(w(0)) : d(_, e.prefetchFileAccess, n), S = await o, b = n();
    let E = await v(u, t), I = !1, C = !1;
    if (void 0 === E) {
        const t = e.mailbox.last(e.composerId);
        void 0 !== t ? (E = t, c = "last", I = !0, y.warn(e.ctx, "overlay timed out; reusing last overlay for this composer", {
            requestId: e.requestId,
            composerId: e.composerId
        })) : (C = !0, y.warn(e.ctx, "overlay missing after grace; waiting on first turn", {
            requestId: e.requestId,
            composerId: e.composerId,
            waitMs: r
        }), E = await v(u, r));
    }
    void 0 !== E && "none" === c && (c = "mailbox"), void 0 === E || I || e.mailbox.recordLast(e.composerId, E);
    const k = n() - s, x = n() - b, T = (t, r)=>{
        e.onTiming?.({
            baseMs: k,
            overlayWaitMs: x,
            prefetchMs: t.prefetchMs,
            prefetchFileCount: t.fileCount,
            prefetchTotalBytes: t.totalBytes,
            usedOverlay: r.usedOverlay,
            overlaySource: c,
            timedOut: r.timedOut,
            usedLastOverlay: I,
            firstTurnWaited: C
        });
    };
    if (void 0 === E) return y.error(e.ctx, "overlay missing on first turn; failing closed", {
        requestId: e.requestId,
        composerId: e.composerId
    }), T(await A, {
        usedOverlay: !1,
        timedOut: !0
    }), e.mailbox.forget(e.requestId), new a._G({
        result: {
            case: "error",
            value: new a.nf({
                error: g
            })
        }
    });
    if ("success" !== S.result.case || void 0 === S.result.value.requestContext) return T(await A, {
        usedOverlay: !0,
        timedOut: !1
    }), e.mailbox.forget(e.requestId), S;
    const R = l(E.prefetchFileUris).filter((e)=>!_.includes(e)), B = void 0 === e.prefetchFileAccess || 0 === R.length ? Promise.resolve(w(0)) : d(R, e.prefetchFileAccess, n), [P, J] = await Promise.all([
        A,
        B
    ]), M = {
        ...P.fileContents,
        ...J.fileContents
    }, q = {
        fileContents: M,
        fileCount: P.fileCount + J.fileCount,
        prefetchedCount: P.prefetchedCount + J.prefetchedCount,
        skippedLargeCount: P.skippedLargeCount + J.skippedLargeCount,
        failedCount: P.failedCount + J.failedCount,
        totalBytes: P.totalBytes + J.totalBytes,
        prefetchMs: P.prefetchMs + J.prefetchMs
    }, D = S.result.value.requestContext;
    return function(e, t, r) {
        if (e.filteredBrowserMcpProviderIds.length > 0) return e;
        const n = (0, p.$l)(t.tools.map((e)=>e.providerIdentifier), r);
        0 === n.length || (e.filteredBrowserMcpProviderIds = n);
    }(E, D, i), (0, m.P7)(D, E), D.fileContents = M, T(q, {
        usedOverlay: !0,
        timedOut: I
    }), e.mailbox.forget(e.requestId), function(e) {
        return new a._G({
            result: {
                case: "success",
                value: new a.yW({
                    requestContext: e
                })
            }
        });
    }(D);
}
function A(e) {
    try {
        return e();
    } catch (e) {
        if (!(e instanceof Error)) throw e;
        return;
    }
}
function S(e) {
    return {
        overlay: (0, p.He)(e),
        sourceToolIds: e.tools.map((e)=>e.providerIdentifier)
    };
}
function b(e) {
    const t = A(()=>a.bb.fromBinary(e));
    if (void 0 !== t && function(e) {
        const t = e.env;
        return e.rules.some((e)=>e.fullPath.length > 0) || e.tools.some((e)=>e.name.length > 0 || e.providerIdentifier.length > 0) || e.gitRepos.some((e)=>e.path.length > 0) || e.agentSkills.some((e)=>e.fullPath.length > 0) || void 0 !== t && (t.projectFolder.length > 0 || t.osVersion.length > 0 || !0 === t.sandboxEnabled || void 0 !== t.smartModeClassifierAutoModeEnabled);
    }(t)) return S(t);
    const r = A(()=>i.hV.fromBinary(e));
    return void 0 !== r && (0, m.PJ)(r) ? {
        overlay: r
    } : void 0 !== t ? S(t) : void 0;
}
function E(e, t) {
    if (void 0 === t) return e;
    const r = function(e) {
        for (const [t] of e.entries())if (t.symbol === n.MZM.symbol) {
            const t = e.get(n.MZM);
            return "function" == typeof t?.execute ? t : void 0;
        }
    }(e);
    return void 0 === r ? e : new n.dwX(e, [
        (0, n.VNS)(n.MZM, {
            execute: (e, n, s)=>_({
                    ctx: e,
                    args: n,
                    execOptions: s,
                    baseExecutor: r,
                    mailbox: t.mailbox,
                    requestId: t.requestId,
                    composerId: t.composerId,
                    pullOverlay: t.pullOverlay,
                    prefetchFileAccess: t.prefetchFileAccess,
                    onTiming: t.onTiming
                })
        })
    ]);
}

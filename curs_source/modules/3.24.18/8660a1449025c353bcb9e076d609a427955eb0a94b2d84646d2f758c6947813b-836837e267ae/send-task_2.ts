import { aPi, eMn, grf } from "./Ycg.js";
import { lPi } from "./connect-report.ts";
import { $Cl, DIt } from "./nudge-reply.ts";
import { KPn, cPi } from "./seeded-nudge.ts";
import { efs, tfs } from "./send-task.ts";
import { MIt, VPn } from "./tool-replies.ts";
import { UTl } from "./tool-results.ts";
import { E } from "./tslib.es6.js";
var yrf;
export { yrf };
var __wakaru_$Bk_initialized = false;
export function $Bk() {
if (__wakaru_$Bk_initialized) return;
__wakaru_$Bk_initialized = true;
"use strict";
E(), tfs(), lPi(), DIt(), VPn(), cPi(), UTl(), yrf = class {
    constructor(t, e){
        this.call = t, this.ports = e;
    }
    handOver(t, e) {
        const n = this.call, i = $Cl.fromToolArguments(e.arguments);
        if (i.kind === "rejected") {
            eMn(t, e, i.error);
            return;
        }
        const r = n.held;
        if (r === void 0 || r.isGone()) {
            eMn(t, e, this.ports.lines.agentNotLoaded);
            return;
        }
        const s = n.errands.openErrand(i.request);
        if (s?.stands === "about to be said") {
            this.answerOpenErrand(t, e, s);
            return;
        }
        if (r.sendWouldAbortAPark()) {
            s !== void 0 && n.errands.parkRefusedARepeat(i.request), this.answerParked(t, e);
            return;
        }
        if (s !== void 0) {
            this.answerOpenErrand(t, e, s);
            return;
        }
        const o = r.whenSubmittable();
        if (o !== void 0) {
            this.submitOnceLoaded(r, o, t, e, i.request);
            return;
        }
        this.submit(r, t, e, i.request);
    }
    async submitOnceLoaded(t, e, n, i, r) {
        const s = this.call, o = this.record(r);
        try {
            await e;
        } catch (a) {
            this.ports.log.error("agent did not load before its submit", a), s.errands.neverSent(o), s.ended || eMn(n, i, this.ports.lines.agentDidNotLoad);
            return;
        }
        if (s.ended) {
            s.errands.neverSent(o);
            return;
        }
        if (t.isGone()) {
            s.errands.neverSent(o), eMn(n, i, this.ports.lines.agentNotLoaded);
            return;
        }
        if (t.sendWouldAbortAPark()) {
            s.errands.neverSent(o), this.answerParked(n, i, !o.parkRefusalSaid);
            return;
        }
        this.submit(t, n, i, r, o);
    }
    record(t) {
        const e = this.call.feed, n = this.call.errands.record(t, e !== void 0);
        return e?.errandRecorded(n), n;
    }
    submit(t, e, n, i, r) {
        const s = this.call;
        s.work.expectReceipt(e, n);
        const o = r ?? this.record(i), a = s.errands.earlierOpen(o), l = a === void 0 ? s.feed?.busyWith() : {
            kind: "earlier-request",
            request: a.request
        }, c = o.watched && t.submitTakesTheQueueSetting(), u = t.relay(o, c).catch((d)=>(this.ports.log.error("send_task submit failed", d), {
                kind: "unreachable",
                errorClass: aPi(d)
            }));
        c || this.answerUnderWay(e, n, l), u.then((d)=>{
            if (!s.ended) {
                if (d.kind === "parked") {
                    this.relayFoundAPark(e, n, o, c);
                    return;
                }
                if (d.kind !== "accepted") {
                    d.kind === "unreachable" && s.relayUnreachable(d);
                    const { spoken: h } = efs.outputOf(d);
                    if (c) {
                        s.errands.neverSent(o), s.work.refuseTheReceipt(e, n, h);
                        return;
                    }
                    s.work.relayFailed(o, h) && s.feed?.errandResolvedByTheController();
                    return;
                }
                if (!c) {
                    s.feed?.errandAccepted(o, d.handover);
                    return;
                }
                if (d.handover === void 0) {
                    this.answerUnderWay(e, n, void 0);
                    return;
                }
                s.work.sendReceipt(e, n, {
                    output: {
                        receipt: this.ports.lines.runningJobHandover[d.handover]
                    }
                }), s.feed?.errandAccepted(o, d.handover);
            }
        });
    }
    relayFoundAPark(t, e, n, i) {
        const r = this.call, s = n.resolved, o = !s && !n.parkRefusalSaid;
        if (!s && (i || !o) && r.errands.neverSent(n), i) {
            this.answerParked(t, e, o), r.work.receiptNotComing();
            return;
        }
        if (r.feed?.askRefused(), !o) {
            r.work.receiptNotComing();
            return;
        }
        r.work.dropHeldPause(), r.work.relayFailed(n, this.ports.lines.parkedRefusal), r.feed?.errandResolvedByTheController();
    }
    answerParked(t, e, n = !0) {
        this.call.feed?.askRefused();
        const { parkedRefusal: i } = this.ports.lines;
        t.sendToolResult({
            callId: e.callId,
            output: JSON.stringify({
                relay: "refused",
                spoken: i
            }),
            speak: !1
        }), n && (this.call.work.dropHeldPause(), this.call.work.publish(i));
    }
    answerOpenErrand(t, e, n) {
        const i = n.stands === "about to be said", r = n.stands === "about to be said" ? n.landed : [];
        if (r.length > 0) {
            t.sendToolResult({
                callId: e.callId,
                output: JSON.stringify(KPn.progressNote({
                    kind: "outcome",
                    texts: r,
                    atMs: this.ports.clock.now()
                })),
                ...e.alreadySpoke === !0 ? {
                    speak: !1
                } : {
                    landed: r
                }
            }), e.alreadySpoke !== !0 && this.call.work.toldByTheReplay(t, r);
            return;
        }
        const { receipts: s, newsOwed: o } = this.ports.lines;
        grf(t, e, i ? {
            output: MIt.aboutToBeSaid(),
            instructions: o
        } : s.underWay);
    }
    answerUnderWay(t, e, n) {
        const { receipts: i, queuedBehind: r } = this.ports.lines;
        this.call.work.sendReceipt(t, e, n === void 0 ? i.underWay : {
            ...i.queued,
            output: MIt.queuedBehindCurrentWork(r(n))
        });
    }
};

}

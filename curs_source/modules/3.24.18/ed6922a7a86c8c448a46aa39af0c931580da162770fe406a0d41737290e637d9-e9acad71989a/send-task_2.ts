import { J5n } from "./connect-report.ts";
import { Q5n } from "./connect-telemetry.ts";
import { JUh, Mzt } from "./landed-work.ts";
import { EMo, Lnt } from "./nudge-reply.ts";
import { Tzt, e9n } from "./seeded-nudge.ts";
import { _rr, brr } from "./send-task.ts";
import { Czt, Pnt } from "./tool-replies.ts";
import { TPo } from "./tool-results.ts";
import { x } from "./tslib.es6.js";
var r8h;
export { r8h };
var __wakaru_Em__initialized = false;
export function Em_() {
if (__wakaru_Em__initialized) return;
__wakaru_Em__initialized = true;
"use strict";
x(), brr(), J5n(), Lnt(), Czt(), e9n(), TPo(), r8h = class {
    constructor(e, t){
        this.call = e, this.ports = t;
    }
    handOver(e, t) {
        const n = this.call, i = EMo.fromToolArguments(t.arguments);
        if (i.kind === "rejected") {
            Mzt(e, t, i.error);
            return;
        }
        const r = n.held;
        if (r === void 0 || r.isGone()) {
            Mzt(e, t, this.ports.lines.agentNotLoaded);
            return;
        }
        const s = n.errands.openErrand(i.request);
        if (s?.stands === "about to be said") {
            this.answerOpenErrand(e, t, s);
            return;
        }
        if (r.sendWouldAbortAPark()) {
            s !== void 0 && n.errands.parkRefusedARepeat(i.request), this.answerParked(e, t);
            return;
        }
        if (s !== void 0) {
            this.answerOpenErrand(e, t, s);
            return;
        }
        const o = r.whenSubmittable();
        if (o !== void 0) {
            this.submitOnceLoaded(r, o, e, t, i.request);
            return;
        }
        this.submit(r, e, t, i.request);
    }
    async submitOnceLoaded(e, t, n, i, r) {
        const s = this.call, o = this.record(r);
        try {
            await t;
        } catch (a) {
            this.ports.log.error("agent did not load before its submit", a), s.errands.neverSent(o), s.ended || Mzt(n, i, this.ports.lines.agentDidNotLoad);
            return;
        }
        if (s.ended) {
            s.errands.neverSent(o);
            return;
        }
        if (e.isGone()) {
            s.errands.neverSent(o), Mzt(n, i, this.ports.lines.agentNotLoaded);
            return;
        }
        if (e.sendWouldAbortAPark()) {
            s.errands.neverSent(o), this.answerParked(n, i, !o.parkRefusalSaid);
            return;
        }
        this.submit(e, n, i, r, o);
    }
    record(e) {
        const t = this.call.feed, n = this.call.errands.record(e, t !== void 0);
        return t?.errandRecorded(n), n;
    }
    submit(e, t, n, i, r) {
        const s = this.call;
        s.work.expectReceipt(t, n);
        const o = r ?? this.record(i), a = s.errands.earlierOpen(o), c = a === void 0 ? s.feed?.busyWith() : {
            kind: "earlier-request",
            request: a.request
        }, l = o.watched && e.submitTakesTheQueueSetting(), u = e.relay(o, l).catch((h)=>(this.ports.log.error("send_task submit failed", h), {
                kind: "unreachable",
                errorClass: Q5n(h)
            }));
        l || this.answerUnderWay(t, n, c), u.then((h)=>{
            if (!s.ended) {
                if (h.kind === "parked") {
                    this.relayFoundAPark(t, n, o, l);
                    return;
                }
                if (h.kind !== "accepted") {
                    h.kind === "unreachable" && s.relayUnreachable(h);
                    const { spoken: p } = _rr.outputOf(h);
                    if (l) {
                        s.errands.neverSent(o), s.work.refuseTheReceipt(t, n, p);
                        return;
                    }
                    s.work.relayFailed(o, p) && s.feed?.errandResolvedByTheController();
                    return;
                }
                if (!l) {
                    s.feed?.errandAccepted(o, h.handover);
                    return;
                }
                if (h.handover === void 0) {
                    this.answerUnderWay(t, n, void 0);
                    return;
                }
                s.work.sendReceipt(t, n, {
                    output: {
                        receipt: this.ports.lines.runningJobHandover[h.handover]
                    }
                }), s.feed?.errandAccepted(o, h.handover);
            }
        });
    }
    relayFoundAPark(e, t, n, i) {
        const r = this.call, s = n.resolved, o = !s && !n.parkRefusalSaid;
        if (!s && (i || !o) && r.errands.neverSent(n), i) {
            this.answerParked(e, t, o), r.work.receiptNotComing();
            return;
        }
        if (r.feed?.askRefused(), !o) {
            r.work.receiptNotComing();
            return;
        }
        r.work.dropHeldPause(), r.work.relayFailed(n, this.ports.lines.parkedRefusal), r.feed?.errandResolvedByTheController();
    }
    answerParked(e, t, n = !0) {
        this.call.feed?.askRefused();
        const { parkedRefusal: i } = this.ports.lines;
        e.sendToolResult({
            callId: t.callId,
            output: JSON.stringify({
                relay: "refused",
                spoken: i
            }),
            speak: !1
        }), n && (this.call.work.dropHeldPause(), this.call.work.publish(i));
    }
    answerOpenErrand(e, t, n) {
        const i = n.stands === "about to be said", r = n.stands === "about to be said" ? n.landed : [];
        if (r.length > 0) {
            e.sendToolResult({
                callId: t.callId,
                output: JSON.stringify(Tzt.progressNote({
                    kind: "outcome",
                    texts: r,
                    atMs: this.ports.clock.now()
                })),
                ...t.alreadySpoke === !0 ? {
                    speak: !1
                } : {
                    landed: r
                }
            }), t.alreadySpoke !== !0 && this.call.work.toldByTheReplay(e, r);
            return;
        }
        const { receipts: s, newsOwed: o } = this.ports.lines;
        JUh(e, t, i ? {
            output: Pnt.aboutToBeSaid(),
            instructions: o
        } : s.underWay);
    }
    answerUnderWay(e, t, n) {
        const { receipts: i, queuedBehind: r } = this.ports.lines;
        this.call.work.sendReceipt(e, t, n === void 0 ? i.underWay : {
            ...i.queued,
            output: Pnt.queuedBehindCurrentWork(r(n))
        });
    }
};

}

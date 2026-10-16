import { KMo, L6h, YUh, bm_ } from "./call-report.ts";
import { Yp_ } from "./call-search-record.ts";
import { J5n, OMo, f6h, g6h, v6h } from "./connect-report.ts";
import { K6h, Q5n, Y6h } from "./connect-telemetry.ts";
import { AUh, DUh, IUh, LUh, MUh, NUh, PUh, RUh, _Po, bPo, vPo, yPo } from "./conversation-search_2.ts";
import { kPo, wPo } from "./end-the-call.ts";
import { XUh, ym_ } from "./errands.ts";
import { ZUh, km_ } from "./idle-hang-up.ts";
import { Cm_, Mzt, e8h } from "./landed-work.ts";
import { e4h } from "./line-plan.ts";
import { t9n } from "./protocol-fault.ts";
import { Ezt } from "./realtime-wire.ts";
import { _Uh, fUh, gUh, mPo, mUh, pUh, vUh } from "./recent-conversation.ts";
import { Tm_, i8h } from "./record-writer.ts";
import { XMo, i9n } from "./redial.ts";
import { GUh, WUh } from "./search-conversations.ts";
import { _rr, brr } from "./send-task.ts";
import { Em_, r8h } from "./send-task_2.ts";
import { CPo, yrr } from "./stay-silent.ts";
import { HMo, j6h, orr } from "./telemetry.ts";
import { AMo, ES, Fq, IMo, Oq, X5n, ghe, nrr, trr } from "./tool-names.ts";
import { TPo } from "./tool-results.ts";
import { OUh, SPo } from "./tool-runner.ts";
import { x } from "./tslib.es6.js";
import { qMo } from "./voice-loop-instructions.ts";
import { K5n, Y5n } from "./voice-settings.ts";
function Vh_(e) {
    return Y5n[e];
}
function jh_(e) {
    return e.language === K5n ? void 0 : Vh_(e.language);
}
function Kh_(e) {
    return v6h.get(e) ?? "unknown";
}
function ip_(e, t, n, i) {
    const r = jh_({
        language: n
    }), s = qMo.sessionPlan({
        agentName: e.agentName,
        userName: i,
        description: e.description,
        tools: t,
        context: null,
        hasWrittenTurns: !1,
        spokenLanguage: r,
        words: e.loop
    });
    return {
        instructions: s.instructions,
        tools: s.tools,
        greeting: qMo.greetingIn({
            direction: s.greeting.direction,
            spokenLanguage: r
        })
    };
}
function fp_(e) {
    if (e === 0) return 0;
    const { initialDelayMs: t, maxDelayMs: n, backoffFactor: i } = i9n;
    return Math.min(n, t * i ** (e - 1));
}
function qp_(e, t) {
    const n = Array.from({
        length: e.length + 1
    }, ()=>[]);
    for (const i of t){
        const r = [
            i.anchor?.lineId,
            i.anchor?.serverLineId
        ], s = e.findIndex((c)=>r.some((l)=>l !== void 0 && (l === c.id || l === c.serverId))), o = (s === -1 ? e.findLastIndex((c)=>c.atMs !== void 0 && c.atMs <= i.startedAtMs) : s) + 1, a = e.findIndex((c, l)=>l >= o && (c.atMs === void 0 ? c.writer === "them" : i.startedAtMs < c.atMs));
        n[a === -1 ? e.length : a]?.push(i);
    }
    return n.flatMap((i, r)=>{
        const s = e[r];
        return [
            ...i.sort((o, a)=>o.startedAtMs - a.startedAtMs).map(Kp_),
            ...s === void 0 ? [] : [
                zp_(s)
            ]
        ];
    });
}
function zp_(e) {
    const t = e.atMs === void 0 ? {} : {
        timestampMs: e.atMs
    };
    return e.writer === "them" ? {
        id: e.id,
        kind: "message",
        role: "user",
        content: e.text,
        ...t
    } : {
        id: e.id,
        kind: "send-message",
        message: {
            type: "text",
            content: e.text
        },
        ...t
    };
}
function Kp_(e) {
    const t = e.endedAtMs ?? e.lastHeardAtMs;
    return {
        id: e.callId,
        kind: "voice-call",
        timestampMs: t,
        call: {
            endedAtMs: t,
            durationMs: t - (e.connectedAtMs ?? e.startedAtMs)
        },
        conversation: {
            turns: e.turns.map((n)=>({
                    id: `${e.callId}/${n.itemId}`,
                    speaker: n.speaker,
                    text: n.text,
                    atMs: 0
                }))
        }
    };
}
function Xp_({ instructions: e, messages: t, agentName: n }) {
    const i = Zp_(t, n);
    return i.length === 0 ? e : `${e}

${fUh}
${i.join(`
`)}`;
}
function Zp_(e, t) {
    const n = e.slice(-pUh).map((r)=>`${r.writer === "them" ? "User" : t}: ${Qp_(r.text, mUh)}`);
    let i = n.reduce((r, s)=>r + s.length, 0);
    for(; n.length > 1 && i > gUh;)i -= n.shift()?.length ?? 0;
    return n;
}
function Qp_(e, t) {
    const n = e.replace(/\s*\n+\s*/g, " ").trim();
    return n.length <= t ? n : `${n.slice(0, t - 1)}\u2026`;
}
function Jp_(e, t) {
    const n = new Intl.DateTimeFormat("en-US", {
        timeZone: t,
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: !0,
        timeZoneName: "short"
    }).formatToParts(e), i = (s)=>n.find((o)=>o.type === s)?.value ?? "";
    return `# Current time
The call started at ${`${i("weekday")}, ${i("month")} ${i("day")}, ${i("year")} at ${i("hour")}:${i("minute")} ${i("dayPeriod")} ${i("timeZoneName")}`} (timezone ${t});
some time may have passed since then. Do not infer anyone's location from it.
This is silent background context. Do not respond to this.
If they ask what day it is, or what today is, answer from this. Do not announce it otherwise.
For search_conversations from and to, today is ${em_(e, t)}.`;
}
function em_(e, t) {
    const n = new Intl.DateTimeFormat("en-CA", {
        timeZone: t,
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
    }).formatToParts(e), i = (r)=>n.find((s)=>s.type === r)?.value ?? "";
    return `${i("year")}-${i("month")}-${i("day")}`;
}
function dUh(e) {
    const t = e?.trim() ?? "";
    if (hUh(t)) return t;
    const n = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return hUh(n) ? n : "UTC";
}
function hUh(e) {
    if (e.length === 0) return !1;
    try {
        return new Intl.DateTimeFormat("en-US", {
            timeZone: e
        }), !0;
    } catch  {
        return !1;
    }
}
function tm_({ instructions: e, messages: t, agentName: n, notInRecord: i = [], clock: r = {} }) {
    const s = Xp_({
        instructions: e,
        messages: t,
        agentName: n
    }), o = Jp_(r.now ?? new Date, dUh(r.timeZone)), a = [
        vUh,
        ...i
    ].join(`
`);
    return `${s}

${a}

${_Uh}

${o}`;
}
function nm_(e, t, n) {
    const i = gm_(n), r = i(t), s = (a)=>{
        const c = i(a);
        return {
            when: pm_(c, r, a, t),
            day: c
        };
    }, o = [];
    for (const a of e){
        if (a.kind === "voice-call") {
            for (const h of a.conversation?.turns ?? []){
                const p = h.text.trim();
                if (p.length === 0 || h.id.length === 0) continue;
                const { when: g, day: f } = s(cm_(h.atMs, a));
                o.push({
                    id: h.id,
                    where: "an earlier call",
                    when: g,
                    writer: h.speaker === "assistant" ? "you" : "them",
                    text: p,
                    place: "earlier",
                    callKey: a.id,
                    day: f
                });
            }
            continue;
        }
        const c = om_(a);
        if (c === null) continue;
        const { when: l, day: u } = s(a.timestampMs);
        o.push({
            ...c,
            where: "this chat",
            when: l,
            place: "this-chat",
            callKey: IUh,
            day: u
        });
    }
    return o;
}
function im_(e, t, n, i = {}) {
    const r = e.map((h, p)=>({
            line: h,
            index: p
        })).filter((h)=>n === "everything" ? !0 : n === "this-chat" ? h.line.place === "this-chat" : h.line.place === "earlier"), s = am_(i), o = RUh.test(t), a = bUh(t).filter((h)=>!((o || s !== null) && DUh.has(h)) && !(s !== null && (lm_(h) || bPo.has(h))));
    if (s !== null) {
        const h = r.filter((f)=>f.line.day !== null && f.line.day.date >= s.from && f.line.day.date <= s.to), p = gPo(a), g = h.map((f)=>({
                ...f,
                matched: p.filter((v)=>yUh(f.line.text, v)).length
            })).filter((f)=>f.matched > 0).sort((f, v)=>v.matched !== f.matched ? v.matched - f.matched : v.index - f.index);
        return fPo(e, g.length > 0 ? g : kUh(h), p);
    }
    if (o && a.length === 0) {
        if (r.length === 0) return {
            hits: [],
            more: !1
        };
        const h = r.filter((b)=>b.line.place === "earlier"), p = h.length > 0 ? h : r, g = p.filter((b)=>!MUh.test(b.line.text)), f = g.length > 0 ? g : p, v = f.reduce((b, y)=>y.index > b.index ? y : b);
        return fPo(e, kUh(f.filter((b)=>b.line.callKey === v.line.callKey)), []);
    }
    if (a.length === 0) return {
        hits: [],
        more: !1
    };
    const c = gPo(a), l = o, u = r.map((h)=>({
            ...h,
            matched: c.filter((p)=>yUh(h.line.text, p)).length,
            callBias: l && h.line.place === "earlier" ? 1 : 0
        })).filter((h)=>h.matched > 0).sort((h, p)=>p.matched !== h.matched ? p.matched - h.matched : p.callBias !== h.callBias ? p.callBias - h.callBias : p.index - h.index);
    return fPo(e, u, c);
}
function rm_(e, { id: t, query: n }) {
    const i = e.findIndex((c)=>c.id === t);
    if (i < 0) return {
        hits: [],
        more: !1
    };
    const r = e[i];
    if (r === void 0) return {
        hits: [],
        more: !1
    };
    const s = gPo(bUh(n)), o = vrr(e, i, -1), a = vrr(e, i, 1);
    return {
        hits: [
            {
                id: r.id,
                where: r.where,
                when: r.when,
                writer: r.writer,
                quote: wUh(r.text, s),
                text: um_(r.text, s),
                ...o === void 0 ? {} : {
                    before: o
                },
                ...a === void 0 ? {} : {
                    after: a
                }
            }
        ],
        more: !1
    };
}
function sm_(e, t, n) {
    const i = nm_(e, n.nowMs, dUh(n.timeZone));
    return t.id !== void 0 && t.id.length > 0 ? rm_(i, {
        id: t.id,
        query: t.query
    }) : im_(i, t.query, t.scope, {
        ...t.from === void 0 ? {} : {
            from: t.from
        },
        ...t.to === void 0 ? {} : {
            to: t.to
        }
    });
}
function om_(e) {
    if (e.id.length === 0) return null;
    if (e.kind === "message") {
        if (e.role !== "user" || e.channel !== void 0 || e.fromAgent !== void 0) return null;
        const i = e.content?.trim() ?? "";
        return i.length === 0 ? null : {
            id: e.id,
            writer: "them",
            text: i
        };
    }
    if (e.kind !== "send-message" || e.message?.type !== "text") return null;
    const t = e.message.content;
    if (typeof t != "string") return null;
    const n = t.trim();
    return n.length === 0 ? null : {
        id: e.id,
        writer: "you",
        text: n
    };
}
function bUh(e) {
    const t = new Set, n = [];
    for (const i of e.toLowerCase().split(/[^a-z0-9]+/))i.length < 2 || AUh.has(i) || t.has(i) || (t.add(i), n.push(i));
    return n;
}
function gPo(e) {
    const t = e.filter((n)=>/\d/.test(n) || n.length > 4 && !bPo.has(n));
    return t.length > 0 ? t : e;
}
function yUh(e, t) {
    const n = e.toLowerCase();
    if (n.includes(t)) return !0;
    const i = SUh(t);
    return i !== t && n.includes(i);
}
function SUh(e) {
    return e.length > 4 && e.endsWith("s") && !e.endsWith("ss") ? e.slice(0, -1) : e;
}
function am_(e) {
    const t = e.from?.trim(), n = e.to?.trim(), i = t !== void 0 && yPo.test(t), r = n !== void 0 && yPo.test(n);
    if (!i && !r) return null;
    const s = i ? t : n, o = r ? n : t;
    return s <= o ? {
        from: s,
        to: o
    } : {
        from: o,
        to: s
    };
}
function cm_(e, t) {
    if (Number.isFinite(e) && e >= LUh) return e;
    const n = t.call?.endedAtMs, i = t.call?.durationMs;
    return n !== void 0 && i !== void 0 && Number.isFinite(n) && Number.isFinite(i) && Number.isFinite(e) ? n - Math.max(0, i) + Math.max(0, e) : t.timestampMs;
}
function lm_(e) {
    return PUh.has(e) || vPo.includes(e) || /^(\d{1,2})(?:st|nd|rd|th)?$/.test(e) || /^\d{4}-\d{2}-\d{2}$/.test(e) || e === "yesterday" || e === "today";
}
function kUh(e) {
    return [
        ...e
    ].sort((t, n)=>n.index - t.index);
}
function fPo(e, t, n) {
    return {
        hits: t.slice(0, X5n).map((i)=>{
            const r = vrr(e, i.index, -1), s = vrr(e, i.index, 1);
            return {
                id: i.line.id,
                where: i.line.where,
                when: i.line.when,
                writer: i.line.writer,
                quote: wUh(i.line.text, n),
                ...r === void 0 ? {} : {
                    before: r
                },
                ...s === void 0 ? {} : {
                    after: s
                }
            };
        }),
        more: t.length > X5n
    };
}
function um_(e, t) {
    return CUh(e, t, AMo || 2e3, 400);
}
function wUh(e, t) {
    const n = IMo;
    if (e.length <= n) return e;
    const i = TUh(e, t);
    return i + dm_(e, t, i) <= n ? e.slice(0, n) : CUh(e, t, n, 60);
}
function CUh(e, t, n, i) {
    if (e.length <= n) return e;
    const r = TUh(e, t);
    let s = Math.max(0, r - i);
    if (s > 0) {
        const o = e.lastIndexOf(" ", s);
        o >= s - 30 && (s = o + 1);
    }
    return s + n > e.length && (s = Math.max(0, e.length - n)), e.slice(s, s + n);
}
function TUh(e, t) {
    const n = e.toLowerCase(), i = [
        ...t
    ].sort((r, s)=>{
        const o = Number(/\d/.test(s)) - Number(/\d/.test(r));
        return o !== 0 ? o : s.length - r.length;
    });
    for (const r of i){
        const s = EUh(n, r);
        if (s >= 0) return s;
    }
    return 0;
}
function dm_(e, t, n) {
    const i = e.toLowerCase();
    for (const r of t)if (EUh(i, r) === n) return r.length;
    return 0;
}
function EUh(e, t) {
    const n = e.indexOf(t);
    if (n >= 0) return n;
    const i = SUh(t);
    return i === t ? -1 : e.indexOf(i);
}
function vrr(e, t, n) {
    const i = e[t + n];
    if (i === void 0 || i.callKey !== e[t]?.callKey) return;
    const r = hm_(i.text, nrr);
    return r.length === 0 ? void 0 : r;
}
function hm_(e, t) {
    return e.length <= t ? e : e.slice(0, t);
}
function pm_(e, t, n, i) {
    if (e === null || t === null) return fm_(n, i);
    const r = xUh(mm_(e.date, t.date)), s = e.weekday.charAt(0).toUpperCase() + e.weekday.slice(1), o = e.month.charAt(0).toUpperCase() + e.month.slice(1);
    return `${r}, ${s}, ${o} ${e.day}`;
}
function mm_(e, t) {
    const n = (i)=>{
        const [r, s, o] = i.split("-").map(Number);
        return Date.UTC(r ?? 0, (s ?? 1) - 1, o ?? 1);
    };
    return Math.round((n(t) - n(e)) / _Po);
}
function xUh(e) {
    return e <= 0 ? "earlier today" : e === 1 ? "yesterday" : e < 7 ? `${e} days ago` : e < 14 ? "last week" : "earlier";
}
function gm_(e) {
    const t = new Intl.DateTimeFormat("en-US", {
        timeZone: e,
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });
    return (n)=>{
        if (n === void 0 || !Number.isFinite(n)) return null;
        try {
            const i = t.formatToParts(new Date(n)), r = (l)=>i.find((u)=>u.type === l)?.value ?? "", s = Number(r("day")), o = r("year");
            if (!Number.isFinite(s) || r("weekday").length === 0) return null;
            const a = r("month").toLowerCase(), c = vPo.indexOf(a) + 1;
            return c <= 0 || o.length !== 4 ? null : {
                date: `${o}-${String(c).padStart(2, "0")}-${String(s).padStart(2, "0")}`,
                weekday: r("weekday").toLowerCase(),
                month: a,
                day: s
            };
        } catch  {
            return null;
        }
    };
}
function fm_(e, t) {
    return e === void 0 || !Number.isFinite(e) ? "earlier" : xUh(Math.floor((t - e) / _Po));
}
function vm_(e) {
    switch(e.outcome){
        case "failed":
            return "failed";
        case "dropped":
            return "disconnected";
        case "ended":
            return e.reason === "far_end" ? "disconnected" : e.reason === "window_closed" ? "reset" : "hung_up";
    }
}
function _m_(e, t) {
    e.finish(vm_(t), t.fault, {
        reason: t.reason,
        ...t.mintedMs === void 0 ? {} : {
            minted_ms: t.mintedMs
        },
        caller_turns: t.callerTurns,
        tool_calls: t.toolCalls,
        send_tasks: t.sendTasks,
        wire_errors: t.wireErrors,
        interruptions: t.interruptions,
        reconnects: t.reconnects
    });
}
function Sm_(e) {
    return (e ?? 0) * 1e3;
}
function xm_(e) {
    try {
        return JSON.parse(e);
    } catch  {
        return {};
    }
}
function Im_(e) {
    return e.map(({ id: t, writer: n, text: i })=>({
            id: t,
            writer: n,
            text: i
        }));
}
var s8h, o8h, a8h, c8h, l8h;
export { CUh, EUh, Im_, Jp_, Kh_, Kp_, Qp_, SUh, Sm_, TUh, Vh_, Xp_, Zp_, _m_, a8h, am_, bUh, c8h, cm_, dUh, dm_, em_, fPo, fm_, fp_, gPo, gm_, hUh, hm_, im_, ip_, jh_, kUh, l8h, lm_, mm_, nm_, o8h, om_, pm_, qp_, rm_, s8h, sm_, tm_, um_, vm_, vrr, wUh, xUh, xm_, yUh, zp_ };
var __wakaru_Am__initialized = false;
export function Am_() {
if (__wakaru_Am__initialized) return;
__wakaru_Am__initialized = true;
"use strict";
x(), Yp_(), NUh(), mPo(), SPo(), wPo(), GUh(), brr(), CPo(), e4h(), t9n(), Fq(), XMo(), Ezt(), Y6h(), HMo(), J5n(), bm_(), ym_(), km_(), Cm_(), Tm_(), Em_(), TPo(), s8h = 1500, o8h = 3e3, a8h = 400, c8h = 3e4, l8h = class {
    constructor(e, t, n, i, r){
        this.host = n, this.ports = i, this.owner = r, this.agentValue = e, this.tally = new YUh(i.clock), this.telemetry = new j6h({
            callId: t.callId,
            clock: i.clock,
            emit: (o)=>i.telemetry(o)
        }), this.connectTelemetry = new K6h((o)=>i.telemetry(o), {
            now: ()=>i.clock.now(),
            schedule: (o, a)=>({
                    dispose: i.clock.setTimer(a, o)
                })
        }), this.connectTelemetry.beginConnecting(t.callId);
        const s = [
            new WUh(async (o)=>sm_(await this.searchRecord(), o, {
                    nowMs: this.ports.clock.now()
                })),
            this.staySilent,
            new kPo
        ];
        this.tools = new OUh(s), this.descriptors = [
            _rr.definition,
            ...s.map((o)=>o.definition)
        ].map((o)=>o.descriptor), this.errands = new XUh, this.work = new e8h(this, i.lines, i.log), this.writer = new i8h(t, {
            clock: i.clock,
            records: i.records,
            anchor: (o)=>this.held?.anchor(o) ?? o
        }), this.sendTask = new r8h(this, i), this.writer.stamp();
    }
    ended = !1;
    signedByTheNextAccount = !1;
    held;
    errands;
    feed;
    work;
    writer;
    lineValue;
    agentValue;
    callerSpeaking = !1;
    tools;
    staySilent = new yrr;
    sendTask;
    descriptors;
    tally;
    telemetry;
    connectTelemetry;
    cancelUsageTick;
    idleHangUp;
    idleHangUpMs = 0;
    lineGeneration = 0;
    planOf;
    conversationId;
    lineConversationId;
    conversationNamed = new Map;
    redialAttempt = 0;
    cancelRedialWait;
    cancelDialTimeout;
    dropped;
    sayingGoodbye = !1;
    lineCanChime = !1;
    toolAnswersAwaitingALine = [];
    get record() {
        return this.writer.record;
    }
    get agent() {
        return this.agentValue;
    }
    get line() {
        return this.lineValue;
    }
    moveTo(e) {
        this.agentValue.agentId === e.fromAgentId && (this.agentValue = {
            ...this.agentValue,
            agentId: e.toAgentId
        }, this.writer.update({
            agentId: e.toAgentId
        }));
    }
    async connect() {
        let e;
        this.tally.mintStarted();
        try {
            let i;
            ({ credential: e, idleSeconds: i } = await this.host.mint(this.agent)), this.idleHangUpMs = Sm_(i), this.connectTelemetry.noteMintOk();
        } catch (i) {
            throw this.connectTelemetry.noteMintFailed(i), i;
        } finally{
            this.tally.minted();
        }
        if (this.ended) return;
        this.tally.stage = "holding";
        const t = await this.host.holdAgent(this.agent);
        if (this.tally.stage = "opening", this.ended) return;
        this.held = t;
        const n = await this.readRecent();
        this.ended || (this.planOf = (i)=>{
            const r = ip_(this.ports.words, this.descriptors, i.language, this.host.userName);
            return {
                ...r,
                instructions: tm_({
                    ...this.ports.words,
                    instructions: r.instructions,
                    messages: n,
                    clock: {
                        now: new Date(this.record.startedAtMs)
                    }
                })
            };
        }, this.openLine(e, void 0));
    }
    openLine(e, t) {
        const n = this.planOf;
        if (n === void 0) return;
        const i = this.lineGeneration, r = ()=>this.isCurrent(i), s = (c)=>(...l)=>{
                r() && c(...l);
            }, { settings: o, muted: a } = this.owner.lineOpensWith();
        this.lineValue = this.host.open({
            credential: e,
            plan: n,
            settings: o,
            ...t === void 0 ? {} : {
                redial: t
            },
            handlers: {
                onConnectEdge: s((c)=>this.connectTelemetry.noteTransportEdge(this.record.callId, c)),
                onConversationCreated: s((c)=>{
                    this.conversationId = c, this.lineConversationId = c, this.conversationNamed.set(i, c), this.connectTelemetry.noteConversationCreated(this.record.callId, c);
                }),
                onCallAudible: s(()=>{
                    if (this.lineCanChime = !0, this.countTheDrop(!0), this.connectTelemetry.noteAudible(), this.cancelDialTimeout?.(), this.redialAttempt = 0, this.record.connectedAtMs !== void 0) {
                        this.idleHangUp?.resume();
                        const l = this.lineValue;
                        l !== void 0 && this.answerToolsAwaitingALine(l), this.owner.redialed();
                        return;
                    }
                    this.armFeed(), this.armIdleHangUp();
                    const c = this.ports.clock.now();
                    this.writer.update({
                        connectedAtMs: c
                    }), this.writer.writeSoon(), this.telemetry.connected(e.model), this.armUsageTick(), this.owner.audible(c);
                }),
                onClosed: s((c)=>{
                    if (c.recoverable !== !0) {
                        this.closeWith(c);
                        return;
                    }
                    if (this.lineCanChime = !1, this.sayingGoodbye) {
                        this.owner.hangUp();
                        return;
                    }
                    this.ports.log.warn(`realtime line dropped, redialing: code=${c.code} reason=${c.reason || "none"} live=${this.record.connectedAtMs !== void 0}`), this.holdTheLine(c);
                }),
                onCallerSpeechStarted: s(({ bargedIn: c })=>{
                    this.telemetry.speechStarted(), c && this.tally.interrupted(), this.idleHangUp?.restart(), this.callerSpeaking = !0, this.work.callerSpoke();
                }),
                onCallerSpeechStopped: s(()=>this.telemetry.speechStopped()),
                onAudioPlayed: s(()=>this.telemetry.audioReceived()),
                onTranscriptTurn: s((c)=>this.recordTranscript(c)),
                onToolCall: s((c)=>this.dispatchTool(c)),
                onAsyncUpdateRejected: (c)=>{
                    this.ports.log.warn(`async_update.add work_landed rejected by server: ${c}`);
                },
                onWorkLandedOnWire: s(()=>this.work.landedOnTheWire()),
                onAskSettled: ({ settlement: c, carries: l })=>{
                    this.ports.log.info(`response ask ${c} (${l})`), (this.ended ? c === "dropped_call_closed" && !this.signedByTheNextAccount : r() || this.dropped !== void 0) && this.ports.telemetry({
                        kind: "voice_call_delivery",
                        settlement: c,
                        carries: l,
                        callId: this.record.callId
                    });
                },
                onLostSpeechStopped: ()=>{
                    this.ports.log.info("lost speech_stopped stopgap");
                },
                onEmptyAskedReply: s(({ text: c, askWasResult: l })=>this.work.retryEmptyResultAsk(c, l)),
                onProtocolFault: s((c)=>this.telemetry.fault({
                        kind: "protocol",
                        ...c
                    })),
                onWireError: s((c)=>{
                    this.tally.wireError(), this.ports.log.warn(`realtime wire error: ${c}`);
                })
            }
        }), a && this.lineValue.setMuted(!0), this.work.lineOpened();
    }
    isCurrent(e) {
        return !this.ended && e === this.lineGeneration;
    }
    closeWith(e) {
        this.countTheDrop(!1), this.endWith(e, this.faultDetail(e));
    }
    endWithTheDrop(e) {
        this.dropped = void 0, this.endWith(e, {
            ...e.detail,
            fault_recovered: !1
        });
    }
    endWith(e, t) {
        KMo(e) === "ended" && this.ports.log.warn(`realtime line closed cleanly: code=${e.code} reason=${e.reason || "none"} ${JSON.stringify(t)}`), this.owner.closed({
            ...e,
            detail: t
        });
    }
    faultDetail(e) {
        return {
            ...e.detail,
            fault_send_task_owed: this.errands.owed() !== void 0,
            fault_agent_running: this.held?.submitTakesTheQueueSetting() === !0,
            fault_news_owed: this.work.newsOwed
        };
    }
    countTheDrop(e) {
        const t = this.dropped;
        t !== void 0 && (this.dropped = void 0, this.telemetry.fault({
            ...L6h(t.code, t.closeClean),
            detail: {
                ...t.detail,
                fault_recovered: e
            }
        }));
    }
    recordTheDrop(e) {
        this.dropped = {
            ...e,
            detail: this.faultDetail(e)
        };
    }
    holdTheLine(e) {
        this.letGoOfTheLine(), this.dropped === void 0 && e !== void 0 && this.recordTheDrop(e);
        const t = this.dropped;
        if (t === void 0) return;
        const n = this.record.connectedAtMs !== void 0;
        if (this.redialAttempt >= (n ? i9n.maxAttempts : 1)) {
            e === void 0 ? this.endWithTheDrop(t) : this.closeWith(e);
            return;
        }
        const i = this.lineGeneration, r = fp_(this.redialAttempt);
        if (this.redialAttempt += 1, r === 0) {
            this.redial(i);
            return;
        }
        this.cancelRedialWait = this.ports.clock.setTimer(()=>void this.redial(i), r);
    }
    async redial(e) {
        if (!this.isCurrent(e)) return;
        this.tally.reconnected(), this.connectTelemetry.noteAbandoned(), this.connectTelemetry.beginConnecting(this.record.callId), this.cancelDialTimeout = this.ports.clock.setTimer(()=>{
            if (this.isCurrent(e)) {
                this.ports.log.warn(`realtime redial timed out: attempt=${this.redialAttempt} after=${i9n.dialTimeoutMs}ms`), this.connectTelemetry.noteAbandoned("DialTimeout");
                const n = this.lineValue;
                this.holdTheLine(), n?.close("superseded");
            }
        }, i9n.dialTimeoutMs);
        const t = await this.mintAgain(e);
        if (t !== "stale") {
            if (typeof t == "object" && "refused" in t) {
                this.countTheDrop(!1), this.owner.mintRefused(t.refused);
                return;
            }
            if (t === void 0) {
                this.holdTheLine();
                return;
            }
            this.openLine(t, this.record.connectedAtMs === void 0 ? void 0 : {
                conversationId: this.conversationId
            });
        }
    }
    async mintAgain(e) {
        try {
            const { credential: t } = await this.host.mint(this.agent);
            return this.connectTelemetry.noteMintOk(), this.isCurrent(e) ? t : "stale";
        } catch (t) {
            return this.connectTelemetry.noteMintFailed(t), this.isCurrent(e) ? (this.ports.log.warn("realtime line mint failed dialing again", t), this.ports.mintIsFinal(t) ? {
                refused: t
            } : void 0) : "stale";
        }
    }
    letGoOfTheLine() {
        const e = this.lineValue;
        return this.lineCanChime = !1, this.idleHangUp?.pause(), this.work.holdForTheNextLine(e?.takeHeldWork() ?? []), this.lineValue = void 0, this.lineConversationId = void 0, this.lineGeneration += 1, this.cancelRedialWait?.(), this.cancelDialTimeout?.(), e;
    }
    end(e) {
        this.ended = !0, this.signedByTheNextAccount = e.kind === "hung_up" && e.by === "account_changed", this.toolAnswersAwaitingALine.length = 0, this.record.connectedAtMs !== void 0 && !this.lineCanChime && this.host.chimeDisconnect?.(), this.cancelRedialWait?.(), this.cancelDialTimeout?.(), this.cancelUsageTick?.(), this.idleHangUp?.dispose(), this.feed?.dispose(), this.feed = void 0, this.writer.fillAnchor(), this.held = void 0, this.host.end(), this.writer.finish();
    }
    report(e) {
        if (this.signedByTheNextAccount) {
            this.connectTelemetry.dispose();
            return;
        }
        e.kind === "hung_up" && this.countTheDrop(!1), this.connectTelemetry.noteAbandoned(), _m_(this.telemetry, this.tally.report(this.record, e));
    }
    uiOpened(e) {
        this.telemetry.uiOpened(e);
    }
    relayUnreachable(e) {
        this.reportExchangeFault(g6h, ES, e);
    }
    reportExchangeFault(e, t, { errorClass: n, failureCode: i }) {
        this.telemetry.fault({
            kind: f6h[e]
        });
        const r = orr(this.conversationId);
        this.ports.telemetry({
            kind: "voice_call_fault",
            fault: e,
            tool: Kh_(t),
            callId: this.record.callId,
            ...r === void 0 ? {} : {
                realtimeConversationId: r
            },
            errorClass: n,
            ...i === void 0 ? {} : {
                failureCode: i
            }
        });
    }
    dispatchTool(e) {
        const t = this.lineValue;
        if (t === void 0 || this.ended) return;
        this.tally.toolCall(e.name), this.idleHangUp?.restart();
        const n = {
            agentId: this.agentValue.agentId,
            callId: e.callId,
            name: e.name,
            input: xm_(e.arguments),
            line: this.lineOf(e.alreadySpoke === !0)
        };
        if (e.name === ES) {
            this.sendTask.handOver(t, e);
            return;
        }
        if (e.name === ghe) {
            this.sayingGoodbye = !0, t.sendToolResult({
                callId: e.callId,
                output: "{}",
                speak: !1
            }), this.tools.callTool(n).catch((o)=>{
                this.ports.log.error("hang-up failed", o), this.ended || this.reportExchangeFault(OMo, e.name, {
                    errorClass: Q5n(o)
                });
            }), t.whenSpokenAudioEnds().then(()=>{
                this.ended || this.owner.hangUp();
            });
            return;
        }
        const i = e.name === Oq && yrr.definition.input.safeParse(n.input).success, r = this.lineGeneration;
        (i ? this.staySilent.execute({}, n).then((o)=>(a)=>this.answerStaySilent(a, e.callId, o)) : this.tools.callTool(n).then((o)=>(a)=>a.sendToolResult({
                    callId: e.callId,
                    output: JSON.stringify(o.output)
                }))).then((o)=>this.answerTool(t, r, o), (o)=>{
            this.ports.log.error(`${e.name} failed`, o), this.ended || (this.reportExchangeFault(OMo, e.name, {
                errorClass: Q5n(o)
            }), this.answerTool(t, r, (a)=>Mzt(a, e, this.ports.lines.toolFailedError)));
        });
    }
    answerTool(e, t, n) {
        if (this.ended) return;
        const i = this.lineValue;
        if (i === e) {
            n(i);
            return;
        }
        const r = this.conversationNamed.get(t);
        if (r !== void 0) {
            if (i !== void 0 && this.lineCanChime) {
                this.lineConversationId === r && n(i);
                return;
            }
            this.toolAnswersAwaitingALine.push({
                conversationId: r,
                send: n
            });
        }
    }
    answerToolsAwaitingALine(e) {
        for (const { conversationId: t, send: n } of this.toolAnswersAwaitingALine.splice(0))t === this.lineConversationId && n(e);
    }
    readWrittenLines(e) {
        const t = this.held;
        return t === void 0 || t.isGone() ? Promise.reject(new Error("agent not held")) : t.readWrittenLines(e);
    }
    async readRecent() {
        try {
            const e = this.readWrittenLines(trr).then(Im_);
            return await this.within(e, s8h, ()=>{
                this.ended || this.ports.log.warn("recent conversation read timed out");
            }) ?? [];
        } catch (e) {
            return this.ended || this.ports.log.warn("recent conversation unread", e), [];
        }
    }
    async searchRecord() {
        const e = await this.within(this.readWrittenLines(a8h), o8h);
        if (e === void 0) throw new Error("search chat read timed out");
        return qp_(e, this.ports.records.read(this.agentValue.agentId, this.record.callId));
    }
    within(e, t, n) {
        let i;
        return Promise.race([
            e.finally(()=>i?.()),
            new Promise((r)=>{
                i = this.ports.clock.setTimer(()=>{
                    r(void 0), n?.();
                }, t);
            })
        ]);
    }
    answerStaySilent(e, t, n) {
        if (n.plan === "silent" && this.telemetry.speechUnanswered(), n.plan === "spoken") {
            e.sendToolResult({
                callId: t,
                output: JSON.stringify({
                    error: n.error
                }),
                instructions: n.error
            });
            return;
        }
        e.sendToolResult({
            callId: t,
            output: "{}",
            speak: !1
        });
    }
    lineOf(e) {
        const t = this.record.turns.at(-1);
        return {
            theyJustTalked: this.callerSpeaking || t?.speaker === "user",
            newsOwed: this.work.newsOwed,
            receiptOwed: this.work.receiptOwed,
            alreadySpokeThisTurn: e
        };
    }
    armFeed() {
        const e = this.held;
        this.feed !== void 0 || e === void 0 || e.isGone() || (this.feed = e.listen({
            parked: ()=>{
                this.idleHangUp?.restart(), this.errands.parkedAgain(), this.work.publishPause();
            },
            settled: (t)=>{
                this.idleHangUp?.restart(), this.work.settled(t);
            },
            owed: ()=>this.errands.owed()
        }));
    }
    armUsageTick() {
        this.cancelUsageTick = this.ports.clock.setTimer(()=>{
            this.telemetry.tick(), this.armUsageTick();
        }, c8h);
    }
    armIdleHangUp() {
        this.idleHangUp = new ZUh(this.ports.clock, this.idleHangUpMs, ()=>this.idleHangUpWaitsOnWork(), ()=>this.owner.idleTimedOut()), this.idleHangUp.restart();
    }
    idleHangUpWaitsOnWork() {
        return this.held?.isParked() === !0 ? !1 : this.errands.owed() !== void 0 || this.work.newsOwed || this.work.waitsForTheLine || this.held?.submitTakesTheQueueSetting() === !0;
    }
    recordTranscript(e) {
        if (this.ended || this.record.connectedAtMs === void 0) return;
        if (e.speaker === "user" && this.idleHangUp?.restart(), e.speaker === "assistant" && e.talkedOver !== !0 && (this.callerSpeaking = !1), e.speaker === "assistant" && e.final === !0 && e.text.trim() !== "") {
            this.idleHangUp?.restart();
            const s = this.lineGeneration;
            this.lineValue?.whenSpokenAudioEnds().then(()=>{
                this.isCurrent(s) && this.idleHangUp?.restart();
            }), this.work.assistantFinal(e);
        }
        const t = {
            speaker: e.speaker,
            text: e.text,
            itemId: e.itemId
        }, n = this.record.turns, i = n.findLastIndex((s)=>s.itemId === e.itemId && s.speaker === e.speaker);
        if (i >= 0 && n[i]?.text === e.text) return;
        const r = i >= 0 ? n.with(i, t) : [
            ...n,
            t
        ];
        this.writer.setTurns(r, i >= 0 ? i : r.length - 1), this.owner.turnsChanged(r);
    }
};

}

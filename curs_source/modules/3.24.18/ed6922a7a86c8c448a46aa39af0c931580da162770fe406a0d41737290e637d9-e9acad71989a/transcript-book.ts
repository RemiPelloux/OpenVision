import { xTe } from "./index_20.ts";
import { x } from "./tslib.es6.js";
import { hrr } from "./words.ts";
function prr(e, t) {
    for(let n = e.length - 1; n >= 0; n--){
        const i = e[n];
        if (i !== void 0 && t(i)) return n;
    }
    return -1;
}
function sPo(e, t) {
    const n = prr(t, (o)=>e.isHuman(o)), i = (o)=>t.slice(o).filter((a)=>e.mayBeSaid(a)).length, r = t.at(-1), s = t[n];
    return {
        anchorId: r === void 0 ? void 0 : e.lineId(r),
        lastHumanId: s === void 0 ? void 0 : e.lineId(s),
        heardAfterLastHuman: i(n + 1),
        heardInAll: i(0)
    };
}
function oPo(e, t, n) {
    if (n.anchorId === void 0) return {
        span: t,
        startsAt: 0,
        anchorMissed: !1
    };
    const i = (p)=>p === void 0 ? -1 : prr(t, (g)=>e.lineId(g) === p), r = i(n.anchorId);
    if (r >= 0) return {
        span: t.slice(r + 1),
        startsAt: r + 1,
        anchorMissed: !1
    };
    const s = i(n.lastHumanId), o = t.slice(s + 1), a = s < 0 ? -1 : o.findIndex((p)=>e.isHuman(p)), c = a < 0 ? o.length : a;
    let l = s < 0 ? n.heardInAll : n.heardAfterLastHuman, u = 0;
    for(; l > 0 && u < c;){
        const p = o[u];
        p !== void 0 && e.mayBeSaid(p) && (l -= 1), u += 1;
    }
    const h = s + 1 + (l > 0 ? c : u);
    return {
        span: t.slice(h),
        startsAt: h,
        anchorMissed: !0
    };
}
function E4h(e, t) {
    return prr(t, (n)=>e.startsATurn(n));
}
function x4h(e, t, n) {
    return e.isHuman(t) && (n.lineId !== void 0 && e.lineId(t) === n.lineId || e.words(t)?.trim() === n.errand.request);
}
function aPo(e, t, { within: n, transcript: i }) {
    const r = t.lineId === void 0 ? -1 : n.findIndex((a)=>e.isHuman(a) && e.lineId(a) === t.lineId);
    if (r >= 0) return r;
    const { startsAt: s } = oPo(e, i, t.heardWhenRecorded), o = new Set(i.slice(s).map((a)=>e.lineId(a)));
    return prr(n, (a)=>o.has(e.lineId(a)) && x4h(e, a, t));
}
function Ap_(e, t) {
    const n = [];
    let i, r;
    return t.forEach((s, o)=>{
        e.startsATurn(s) ? (i = e.isTypedByThem(s) ? s : void 0, r = void 0) : e.mayBeSaid(s) && ((e.eachMessageStandsAlone || r === void 0) && (r = {
            typedRequest: i,
            candidates: []
        }, n.push(r)), r.candidates.push(o));
    }), n;
}
function Rp_(e, t, n) {
    const i = n.within;
    let r;
    return Ap_(e, i).flatMap((s)=>{
        let o;
        for(let p = s.candidates.length - 1; p >= 0 && o === void 0; p--){
            const g = i[s.candidates[p] ?? -1];
            o = g === void 0 ? void 0 : e.said(g);
        }
        if (o === void 0) return [];
        const a = s.typedRequest === r ? void 0 : s.typedRequest;
        r = s.typedRequest;
        const c = a === void 0 ? void 0 : t.find((p)=>x4h(e, a, p)), l = a === void 0 || c !== void 0 ? void 0 : e.words(a)?.trim(), u = c?.queuedBehindAnEarlierJob === !0 ? i[aPo(e, c, n)] : void 0, h = a !== void 0 && u !== void 0 && e.lineId(u) === e.lineId(a);
        return [
            {
                text: o,
                ...l === void 0 ? {} : {
                    typedRequest: l
                },
                ...c === void 0 ? {} : {
                    sentRequest: c.errand.request
                },
                ...h ? {
                    ranAfterAnEarlierJob: !0
                } : {}
            }
        ];
    });
}
var I4h;
export { Ap_, E4h, I4h, Rp_, aPo, oPo, prr, sPo, x4h };
var __wakaru_A4h_initialized = false;
export function A4h() {
if (__wakaru_A4h_initialized) return;
__wakaru_A4h_initialized = true;
"use strict";
x(), xTe(), hrr(), I4h = class {
    constructor(e, t){
        this.reader = e, this.heardCursor = sPo(e, t);
    }
    heardCursor;
    sent = [];
    get heard() {
        return this.heardCursor;
    }
    hearTheHistory(e) {
        this.heardCursor = sPo(this.reader, e);
    }
    record(e) {
        this.sent.push(e);
    }
    get requests() {
        return this.sent;
    }
    requestOf(e) {
        return this.sent.find((t)=>t.errand === e);
    }
    accepted(e, t) {
        const n = this.requestOf(e);
        n !== void 0 && t !== void 0 && (n.queuedBehindAnEarlierJob = t === "queued");
    }
    unheard(e, t) {
        const n = this.reader, i = oPo(n, e, this.heardCursor);
        return {
            ...i,
            rows: e,
            requestAt: t === void 0 ? -1 : aPo(n, t, {
                within: i.span,
                transcript: e
            })
        };
    }
    followARenamedAnchor(e) {
        const t = this.reader, n = oPo(t, e, this.heardCursor);
        return n.anchorMissed ? (this.heardCursor = sPo(t, e.slice(0, n.startsAt)), !0) : !1;
    }
    indexOfRequest(e, t) {
        return aPo(this.reader, e, t);
    }
    indexOfTheLastTurn(e) {
        return E4h(this.reader, e);
    }
    typedOpenerOfTheNewestTurn(e) {
        const t = this.reader, n = e[E4h(t, e)];
        return n !== void 0 && t.isTypedByThem(n) ? t.words(n) : void 0;
    }
    answeredBy(e) {
        return this.sent.filter((t)=>!t.errand.resolved && e.some((n)=>n.sentRequest === t.errand.request));
    }
    landedIn(e) {
        return Rp_(this.reader, this.sent.filter((t)=>!t.errand.dropped), e);
    }
};

}

import { STl, W9k, jnf, kTl, yTl } from "./Ycg.js";
import { aBe } from "./index_20.ts";
import { E } from "./tslib.es6.js";
import { zgs } from "./words.ts";
var Hnf;
export { Hnf };
var __wakaru_Wnf_initialized = false;
export function Wnf() {
if (__wakaru_Wnf_initialized) return;
__wakaru_Wnf_initialized = true;
"use strict";
E(), aBe(), zgs(), Hnf = class {
    constructor(t, e){
        this.reader = t, this.heardCursor = yTl(t, e);
    }
    heardCursor;
    sent = [];
    get heard() {
        return this.heardCursor;
    }
    hearTheHistory(t) {
        this.heardCursor = yTl(this.reader, t);
    }
    record(t) {
        this.sent.push(t);
    }
    get requests() {
        return this.sent;
    }
    requestOf(t) {
        return this.sent.find((e)=>e.errand === t);
    }
    accepted(t, e) {
        const n = this.requestOf(t);
        n !== void 0 && e !== void 0 && (n.queuedBehindAnEarlierJob = e === "queued");
    }
    unheard(t, e) {
        const n = this.reader, i = STl(n, t, this.heardCursor);
        return {
            ...i,
            rows: t,
            requestAt: e === void 0 ? -1 : kTl(n, e, {
                within: i.span,
                transcript: t
            })
        };
    }
    followARenamedAnchor(t) {
        const e = this.reader, n = STl(e, t, this.heardCursor);
        return n.anchorMissed ? (this.heardCursor = yTl(e, t.slice(0, n.startsAt)), !0) : !1;
    }
    indexOfRequest(t, e) {
        return kTl(this.reader, t, e);
    }
    indexOfTheLastTurn(t) {
        return jnf(this.reader, t);
    }
    typedOpenerOfTheNewestTurn(t) {
        const e = this.reader, n = t[jnf(e, t)];
        return n !== void 0 && e.isTypedByThem(n) ? e.words(n) : void 0;
    }
    answeredBy(t) {
        return this.sent.filter((e)=>!e.errand.resolved && t.some((n)=>n.sentRequest === e.errand.request));
    }
    landedIn(t) {
        return W9k(this.reader, this.sent.filter((e)=>!e.errand.dropped), t);
    }
};

}

import { IS, hV, uh, vs } from "./agentHarnessLayout.js";
import { Ve } from "./errors.js";
import { oe } from "./platform.js";
import { We } from "./request_2.js";
import { jn } from "./strings.js";
import { h } from "./tslib.es6.js";
import * as Gu from "fs";
import * as est from "path";
function dh(e) {
    return IS.find((t)=>t === e) ?? "other";
}
function tst({ generation: e, previous: t }) {
    return t === void 0 ? "first_install" : t === vs ? "from_floor" : t === e ? "repair" : "update";
}
var iE, bf, dTe, uTe, aE, c9, l9, d9, u9, mTe, m9, pTe;
export { aE, bf, c9, d9, dTe, dh, iE, l9, m9, mTe, pTe, tst, u9, uTe };
var __wakaru_hTe_initialized = false;
export function hTe() {
if (__wakaru_hTe_initialized) return;
__wakaru_hTe_initialized = true;
"use strict";
h(), Ve(), oe(), jn(), uh(), iE = new Set([
    "client",
    "floor",
    "before_cut",
    "older",
    "behind"
]), bf = 3600 * 1e3, dTe = [
    [
        bf,
        "lt_1h"
    ],
    [
        6 * bf,
        "lt_6h"
    ],
    [
        24 * bf,
        "lt_1d"
    ],
    [
        168 * bf,
        "lt_7d"
    ]
], uTe = class {
    constructor(e, t, n){
        this.channel = e, this.layout = t, this._following = !1, this.transientPolls = 0, this.tell = n.onOutcome, this.measure = n.onApplyDelay, this.tellRetry = n.onRetry, this.now = n.now ?? Date.now;
    }
    get following() {
        return this._following;
    }
    retried(e) {
        this.tellRetry?.({
            kind: "attempt",
            ...e,
            channel: this.channel
        });
    }
    polling() {
        this._following || (this._following = !0, this.report("following", {
            generation: this.layout.current()
        }));
    }
    report(e, { generation: t, reason: n = "none", ...r }, s = !1) {
        const i = {
            kind: e,
            channel: this.channel,
            ...this.layout.moduleOf(t),
            reason: n,
            ...r
        }, a = `${i.kind} ${i.moduleVersion} ${i.moduleSequence ?? ""} ${i.reason}`;
        (this.reported !== a || s) && (this.reported = a, this.tell?.(i));
    }
    async observe(e) {
        let t;
        try {
            t = await e;
        } catch (r) {
            throw this.transientPolls = 0, this.report("unavailable", {
                generation: void 0,
                reason: "poll"
            }), r;
        }
        if (t.kind === "offline") return this.tellRetry?.({
            kind: "offline",
            class: "network",
            phase: "channel",
            channel: this.channel
        }), t;
        const n = t.kind === "unavailable" ? t.transient : void 0;
        if (this.transientPolls = n === void 0 ? 0 : this.transientPolls + 1, n !== void 0 && this.transientPolls === 1) return this.tellRetry?.({
            kind: "poll",
            ...n,
            channel: this.channel
        }), t;
        switch(t.kind){
            case "idle":
                this._following && this.report("idle", {
                    generation: this.layout.current(),
                    reason: t.code
                }), this._following = !1, this.reported = void 0;
                break;
            case "unchanged":
                t.generation === vs ? this.report("kill_switch", {
                    generation: t.generation
                }) : t.incompatible !== void 0 ? this.refusal(t.generation, t.incompatible) : this.report("verified", {
                    generation: t.generation
                });
                break;
            case "staged":
                this.report("staged", {
                    generation: t.generation,
                    reason: tst(t)
                });
                break;
            case "floor":
                this.report("kill_switch", {
                    generation: vs,
                    previousModuleVersion: t.previous?.slice(0, 12) ?? "none"
                });
                break;
            case "refused":
                this.refusal(t.generation, t);
                break;
            case "unavailable":
                this.report("unavailable", {
                    generation: t.generation,
                    reason: t.code,
                    logLine: t.reason
                });
                break;
        }
        return t;
    }
    refusal(e, { check: t, reason: n }) {
        this.report(iE.has(t) ? "not_applicable" : "refused", {
            generation: e,
            reason: t,
            logLine: n
        }, t === "behind");
    }
    applied(e, { generation: t, publishedAt: n }, r) {
        const s = n === void 0 ? Number.NaN : Date.parse(n);
        this.measure === void 0 || r === void 0 || r === t || Number.isNaN(s) || this.measure({
            kind: e,
            channel: this.channel,
            ...this.layout.moduleOf(t),
            delayMs: Math.max(0, this.now() - s)
        });
    }
}, aE = /\b[a-z][a-z0-9+.-]*:\/\/\S*/gi, c9 = /\bHTTP (\d{3})\b/, l9 = String.raw`(?:[A-Za-z]:[\\/]|[\\/]|~[\\/])`, d9 = new RegExp(String.raw`(['"])${l9}[^'"]*\1`, "g"), u9 = new RegExp(String.raw`(?<=^|[\s(=,])${l9}[^\s'"]*`, "g"), mTe = 500, m9 = new Set([
    "network",
    "timeout",
    "suspended"
]), pTe = class {
    constructor(e, t, n){
        this.rootDir = e, this.warn = n, this.text = `${dh(t)}
`;
    }
    record() {
        const e = est.join(this.rootDir, hV), t = `${e}.${process.pid}.${Date.now().toString(36)}`;
        try {
            if (Gu.existsSync(e) && Gu.readFileSync(e, "utf8") === this.text) return;
            Gu.mkdirSync(this.rootDir, {
                recursive: !0
            }), Gu.writeFileSync(t, this.text), Gu.renameSync(t, e), this.problem = void 0;
        } catch (n) {
            try {
                Gu.rmSync(t, {
                    force: !0
                });
            } catch  {}
            const r = We(n);
            this.problem !== r && (this.problem = r, this.warn(`channel not recorded in ${e}: ${r}; extension hosts tag their metrics with an unknown channel`));
        }
    }
};

}

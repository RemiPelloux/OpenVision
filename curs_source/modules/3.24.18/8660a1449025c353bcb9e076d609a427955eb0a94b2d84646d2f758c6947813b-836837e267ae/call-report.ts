import { Ktf, cTl } from "./Ycg.js";
import { uPi } from "./protocol-fault.ts";
import { YPn } from "./realtime-wire.ts";
import { Nie, h0 } from "./tool-names.ts";
import { E } from "./tslib.es6.js";
var urf, drf;
export { drf, urf };
var __wakaru_NBk_initialized = false;
export function NBk() {
if (__wakaru_NBk_initialized) return;
__wakaru_NBk_initialized = true;
"use strict";
E(), uPi(), YPn(), Nie(), urf = {
    minting: "mint",
    holding: "agent",
    opening: "line_error"
}, drf = class {
    constructor(t){
        this.clock = t;
    }
    stage = "minting";
    mintStartedAtMs;
    mintedAtMs;
    sendTasks = 0;
    toolCalls = 0;
    wireErrors = 0;
    reconnects = 0;
    interruptions = 0;
    mintStarted() {
        this.mintStartedAtMs = this.clock.now();
    }
    minted() {
        this.mintedAtMs = this.clock.now();
    }
    interrupted() {
        this.interruptions += 1;
    }
    toolCall(t) {
        this.toolCalls += 1, t === h0 && (this.sendTasks += 1);
    }
    wireError() {
        this.wireErrors += 1;
    }
    reconnected() {
        this.reconnects += 1;
    }
    report(t, e) {
        const n = this.mintedAtMs === void 0 || this.mintStartedAtMs === void 0 ? void 0 : this.mintedAtMs - this.mintStartedAtMs, i = {
            ...n === void 0 ? {} : {
                mintedMs: n
            },
            callerTurns: t.turns.filter((s)=>s.speaker === "user").length,
            sendTasks: this.sendTasks,
            toolCalls: this.toolCalls,
            wireErrors: this.wireErrors,
            interruptions: this.interruptions,
            reconnects: this.reconnects
        }, r = t.connectedAtMs === void 0 ? "failed" : "dropped";
        switch(e.kind){
            case "hung_up":
                return {
                    ...i,
                    outcome: "ended",
                    reason: e.by
                };
            case "thrown":
                return {
                    ...i,
                    ...e.fault !== null && {
                        fault: e.fault
                    },
                    outcome: r,
                    reason: urf[this.stage]
                };
            case "closed":
                {
                    const { close: s } = e, o = cTl(s);
                    if (o === "microphone") return {
                        ...i,
                        outcome: r,
                        reason: "microphone"
                    };
                    if (o === "ended" && t.connectedAtMs !== void 0) return {
                        ...i,
                        outcome: "ended",
                        reason: "far_end"
                    };
                    const a = {
                        ...Ktf(s.code, s.closeClean),
                        ...s.detail && {
                            detail: s.detail
                        }
                    }, l = a.close === "1006" ? "line_error" : r === "failed" ? "line_refused" : "far_end";
                    return {
                        ...i,
                        fault: s.protocolFault === void 0 ? a : {
                            kind: "protocol",
                            ...s.protocolFault
                        },
                        outcome: r,
                        reason: l
                    };
                }
        }
    }
};

}

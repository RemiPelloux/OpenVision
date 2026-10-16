import { F6h, t9n } from "./protocol-fault.ts";
import { Ezt, u4h } from "./realtime-wire.ts";
import { b6h } from "./telemetry.ts";
import { ES, Fq } from "./tool-names.ts";
import { x } from "./tslib.es6.js";
function L6h(e, t) {
    return {
        kind: "socket",
        close: typeof e == "number" && Number.isInteger(e) ? b6h(F6h, String(e)) : "absent",
        clean: typeof t == "boolean" ? t : "absent"
    };
}
function KMo(e) {
    return e.reason === "microphone" ? "microphone" : e.closeClean && e.code === u4h ? "ended" : "dropped";
}
var KUh, YUh;
export { KMo, KUh, L6h, YUh };
var __wakaru_bm__initialized = false;
export function bm_() {
if (__wakaru_bm__initialized) return;
__wakaru_bm__initialized = true;
"use strict";
x(), t9n(), Ezt(), Fq(), KUh = {
    minting: "mint",
    holding: "agent",
    opening: "line_error"
}, YUh = class {
    constructor(e){
        this.clock = e;
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
    toolCall(e) {
        this.toolCalls += 1, e === ES && (this.sendTasks += 1);
    }
    wireError() {
        this.wireErrors += 1;
    }
    reconnected() {
        this.reconnects += 1;
    }
    report(e, t) {
        const n = this.mintedAtMs === void 0 || this.mintStartedAtMs === void 0 ? void 0 : this.mintedAtMs - this.mintStartedAtMs, i = {
            ...n === void 0 ? {} : {
                mintedMs: n
            },
            callerTurns: e.turns.filter((s)=>s.speaker === "user").length,
            sendTasks: this.sendTasks,
            toolCalls: this.toolCalls,
            wireErrors: this.wireErrors,
            interruptions: this.interruptions,
            reconnects: this.reconnects
        }, r = e.connectedAtMs === void 0 ? "failed" : "dropped";
        switch(t.kind){
            case "hung_up":
                return {
                    ...i,
                    outcome: "ended",
                    reason: t.by
                };
            case "thrown":
                return {
                    ...i,
                    ...t.fault !== null && {
                        fault: t.fault
                    },
                    outcome: r,
                    reason: KUh[this.stage]
                };
            case "closed":
                {
                    const { close: s } = t, o = KMo(s);
                    if (o === "microphone") return {
                        ...i,
                        outcome: r,
                        reason: "microphone"
                    };
                    if (o === "ended" && e.connectedAtMs !== void 0) return {
                        ...i,
                        outcome: "ended",
                        reason: "far_end"
                    };
                    const a = {
                        ...L6h(s.code, s.closeClean),
                        ...s.detail && {
                            detail: s.detail
                        }
                    }, c = a.close === "1006" ? "line_error" : r === "failed" ? "line_refused" : "far_end";
                    return {
                        ...i,
                        fault: s.protocolFault === void 0 ? a : {
                            kind: "protocol",
                            ...s.protocolFault
                        },
                        outcome: r,
                        reason: c
                    };
                }
        }
    }
};

}

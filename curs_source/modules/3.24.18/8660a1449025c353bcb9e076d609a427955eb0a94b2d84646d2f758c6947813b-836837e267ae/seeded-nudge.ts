import { JCl, QCl } from "./async-update.ts";
import { DIt, UVe } from "./nudge-reply.ts";
import { N$, NIt, Nie } from "./tool-names.ts";
import { E } from "./tslib.es6.js";
var Gtf, qtf, KPn;
export { Gtf, KPn, qtf };
var __wakaru_cPi_initialized = false;
export function cPi() {
if (__wakaru_cPi_initialized) return;
__wakaru_cPi_initialized = true;
"use strict";
E(), DIt(), Nie(), JCl(), Gtf = {
    ack: N$,
    progress: N$,
    outcome: N$,
    overheard: NIt
}, qtf = "{}", KPn = class X3t {
    static SEEDED_TOOL = N$;
    static OVERHEARD_TOOL = NIt;
    static CALL_ID_PREFIX = "seeded-nudge";
    static callId(e) {
        return `${X3t.CALL_ID_PREFIX}-${e}`;
    }
    static seededTool(e) {
        return Gtf[e];
    }
    static progressNote({ kind: e, texts: n, atMs: i }) {
        const r = new Date(i).toISOString().replace(/\.\d{3}Z$/, "Z");
        return e === "overheard" ? {
            status: "in progress",
            steps: n,
            at: r
        } : {
            status: "landed",
            updates: n,
            at: r
        };
    }
    static isNudgeKind(e) {
        return e === "ack" || e === "progress" || e === "outcome" || e === "overheard";
    }
    static SPOKEN_KINDS = [
        "progress",
        "outcome"
    ];
    static OVERHEARD_CHAR_LIMIT = UVe;
    static earnsASpokenTurn({ kind: e }) {
        return X3t.SPOKEN_KINDS.includes(e);
    }
    static delivery(e, n) {
        return X3t.earnsASpokenTurn(e) ? n === "async-update" ? "orchestrated" : "asked" : "filed";
    }
    static frames(e, n) {
        return X3t.delivery(e, n) === "orchestrated" ? [
            QCl.frame({
                topic: N$,
                eventId: e.callId,
                texts: e.texts,
                atMs: e.atMs
            })
        ] : X3t.pair(e);
    }
    static pair({ callId: e, kind: n, texts: i, atMs: r }) {
        return [
            {
                type: "conversation.item.create",
                item: {
                    type: "function_call",
                    name: X3t.seededTool(n),
                    call_id: e,
                    arguments: qtf
                }
            },
            {
                type: "conversation.item.create",
                item: {
                    type: "function_call_output",
                    call_id: e,
                    output: JSON.stringify(X3t.progressNote({
                        kind: n,
                        texts: i,
                        atMs: r
                    }))
                }
            }
        ];
    }
};

}

import { BMo, FMo } from "./async-update.ts";
import { Lnt, WLe } from "./nudge-reply.ts";
import { Fq, Nnt, t9 } from "./tool-names.ts";
import { x } from "./tslib.es6.js";
var R6h, D6h, Tzt;
export { D6h, R6h, Tzt };
var __wakaru_e9n_initialized = false;
export function e9n() {
if (__wakaru_e9n_initialized) return;
__wakaru_e9n_initialized = true;
"use strict";
x(), Lnt(), Fq(), BMo(), R6h = {
    ack: t9,
    progress: t9,
    outcome: t9,
    overheard: Nnt
}, D6h = "{}", Tzt = class Jot {
    static SEEDED_TOOL = t9;
    static OVERHEARD_TOOL = Nnt;
    static CALL_ID_PREFIX = "seeded-nudge";
    static callId(t) {
        return `${Jot.CALL_ID_PREFIX}-${t}`;
    }
    static seededTool(t) {
        return R6h[t];
    }
    static progressNote({ kind: t, texts: n, atMs: i }) {
        const r = new Date(i).toISOString().replace(/\.\d{3}Z$/, "Z");
        return t === "overheard" ? {
            status: "in progress",
            steps: n,
            at: r
        } : {
            status: "landed",
            updates: n,
            at: r
        };
    }
    static isNudgeKind(t) {
        return t === "ack" || t === "progress" || t === "outcome" || t === "overheard";
    }
    static SPOKEN_KINDS = [
        "progress",
        "outcome"
    ];
    static OVERHEARD_CHAR_LIMIT = WLe;
    static earnsASpokenTurn({ kind: t }) {
        return Jot.SPOKEN_KINDS.includes(t);
    }
    static delivery(t, n) {
        return Jot.earnsASpokenTurn(t) ? n === "async-update" ? "orchestrated" : "asked" : "filed";
    }
    static frames(t, n) {
        return Jot.delivery(t, n) === "orchestrated" ? [
            FMo.frame({
                topic: t9,
                eventId: t.callId,
                texts: t.texts,
                atMs: t.atMs
            })
        ] : Jot.pair(t);
    }
    static pair({ callId: t, kind: n, texts: i, atMs: r }) {
        return [
            {
                type: "conversation.item.create",
                item: {
                    type: "function_call",
                    name: Jot.seededTool(n),
                    call_id: t,
                    arguments: D6h
                }
            },
            {
                type: "conversation.item.create",
                item: {
                    type: "function_call_output",
                    call_id: t,
                    output: JSON.stringify(Jot.progressNote({
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

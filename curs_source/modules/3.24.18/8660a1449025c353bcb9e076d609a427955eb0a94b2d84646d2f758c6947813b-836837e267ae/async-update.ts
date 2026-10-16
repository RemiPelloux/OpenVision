import { DIt, UVe } from "./nudge-reply.ts";
import { HCl, Nie } from "./tool-names.ts";
import { E } from "./tslib.es6.js";
var QCl, $tf;
export { $tf, QCl };
var __wakaru_JCl_initialized = false;
export function JCl() {
if (__wakaru_JCl_initialized) return;
__wakaru_JCl_initialized = true;
"use strict";
E(), DIt(), Nie(), QCl = class {
    static frame({ topic: t, eventId: e, texts: n, atMs: i }) {
        return {
            type: "async_update.add",
            event_id: e,
            async_update: {
                topic: t,
                payload: n.map((r)=>({
                        message: {
                            type: "text",
                            content: r
                        },
                        timestampMs: i
                    }))
            }
        };
    }
}, $tf = class KZi {
    static TOPIC = HCl;
    static CHAR_LIMIT = UVe;
    static EVENT_ID_PREFIX = "written-turn";
    static eventId(e) {
        return `${KZi.EVENT_ID_PREFIX}-${e}`;
    }
    static rides(e) {
        return e === "async-update";
    }
    static frame({ entryId: e, text: n, atMs: i }) {
        return QCl.frame({
            topic: KZi.TOPIC,
            eventId: KZi.eventId(e),
            texts: [
                n.slice(0, KZi.CHAR_LIMIT)
            ],
            atMs: i
        });
    }
};

}

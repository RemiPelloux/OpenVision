import { Lnt, WLe } from "./nudge-reply.ts";
import { Fq, xMo } from "./tool-names.ts";
import { x } from "./tslib.es6.js";
var FMo, x6h;
export { FMo, x6h };
var __wakaru_BMo_initialized = false;
export function BMo() {
if (__wakaru_BMo_initialized) return;
__wakaru_BMo_initialized = true;
"use strict";
x(), Lnt(), Fq(), FMo = class {
    static frame({ topic: e, eventId: t, texts: n, atMs: i }) {
        return {
            type: "async_update.add",
            event_id: t,
            async_update: {
                topic: e,
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
}, x6h = class vQn {
    static TOPIC = xMo;
    static CHAR_LIMIT = WLe;
    static EVENT_ID_PREFIX = "written-turn";
    static eventId(t) {
        return `${vQn.EVENT_ID_PREFIX}-${t}`;
    }
    static rides(t) {
        return t === "async-update";
    }
    static frame({ entryId: t, text: n, atMs: i }) {
        return FMo.frame({
            topic: vQn.TOPIC,
            eventId: vQn.eventId(t),
            texts: [
                n.slice(0, vQn.CHAR_LIMIT)
            ],
            atMs: i
        });
    }
};

}

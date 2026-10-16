import { Czt, err } from "./tool-replies.ts";
import { x } from "./tslib.es6.js";
var WLe, TMo, EMo, d6h;
export { EMo, TMo, WLe, d6h };
var __wakaru_Lnt_initialized = false;
export function Lnt() {
if (__wakaru_Lnt_initialized) return;
__wakaru_Lnt_initialized = true;
"use strict";
x(), Czt(), WLe = 2e3, TMo = `The task was not sent: request exceeds ${WLe} characters. Reformulate it within the limit while preserving every constraint, especially prohibitions and approval requirements. Do not drop constraints or split the task into executable pieces. Ask the caller to clarify if it cannot fit safely.`, EMo = class yAa {
    static parse(t) {
        if (typeof t != "string" || t.trim().length === 0) return {
            kind: "rejected",
            error: err
        };
        const n = t.trim();
        return n.length > WLe ? {
            kind: "rejected",
            error: TMo
        } : {
            kind: "accepted",
            request: n
        };
    }
    static fromToolArguments(t) {
        let n;
        try {
            n = JSON.parse(t);
        } catch  {
            return yAa.parse(void 0);
        }
        return yAa.parse(typeof n == "object" && n !== null && "request" in n ? n.request : void 0);
    }
}, d6h = class {
    static reply(e) {
        switch(e){
            case "no-caller-speech":
                return "Nothing they have said on this call backs that. Ask what they actually want before you act on it.";
            case "empty-request":
                return "Refused: the request was empty.";
            case "agent-unavailable":
                return "You cannot get to your own work right now.";
        }
    }
};

}

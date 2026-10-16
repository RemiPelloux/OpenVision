import { Ngs, VPn } from "./tool-replies.ts";
import { E } from "./tslib.es6.js";
var UVe, jCl, $Cl, Ttf;
export { $Cl, Ttf, UVe, jCl };
var __wakaru_DIt_initialized = false;
export function DIt() {
if (__wakaru_DIt_initialized) return;
__wakaru_DIt_initialized = true;
"use strict";
E(), VPn(), UVe = 2e3, jCl = `The task was not sent: request exceeds ${UVe} characters. Reformulate it within the limit while preserving every constraint, especially prohibitions and approval requirements. Do not drop constraints or split the task into executable pieces. Ask the caller to clarify if it cannot fit safely.`, $Cl = class ueu {
    static parse(e) {
        if (typeof e != "string" || e.trim().length === 0) return {
            kind: "rejected",
            error: Ngs
        };
        const n = e.trim();
        return n.length > UVe ? {
            kind: "rejected",
            error: jCl
        } : {
            kind: "accepted",
            request: n
        };
    }
    static fromToolArguments(e) {
        let n;
        try {
            n = JSON.parse(e);
        } catch  {
            return ueu.parse(void 0);
        }
        return ueu.parse(typeof n == "object" && n !== null && "request" in n ? n.request : void 0);
    }
}, Ttf = class {
    static reply(t) {
        switch(t){
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

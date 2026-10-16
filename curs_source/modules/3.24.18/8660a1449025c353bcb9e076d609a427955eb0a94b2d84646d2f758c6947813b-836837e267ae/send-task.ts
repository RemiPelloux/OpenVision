import { BMe, CTl, Kgs, Z9k, eBk, j6, lS, x2 } from "./Ycg.js";
import { ufr } from "./core.js";
import { OIt } from "./index_218.js";
import { $Cl, DIt, Ttf } from "./nudge-reply.ts";
import { LIt, Vlt } from "./session-tools.ts";
import { Nie, h0 } from "./tool-names.ts";
import { BCl, Ngs, VPn } from "./tool-replies.ts";
import { JPn, QPn } from "./tool.ts";
import { E } from "./tslib.es6.js";
var orf, arf, efs;
export { arf, efs, orf };
var __wakaru_tfs_initialized = false;
export function tfs() {
if (__wakaru_tfs_initialized) return;
__wakaru_tfs_initialized = true;
"use strict";
E(), OIt(), DIt(), LIt(), Nie(), VPn(), JPn(), orf = x2({
    request: eBk(Kgs(), Z9k((t, e)=>{
        const n = $Cl.parse(t);
        return n.kind === "rejected" ? (e.issues.push({
            code: "custom",
            message: n.error,
            input: t
        }), ufr) : n.request;
    }))
}), arf = CTl("relay", [
    x2({
        relay: BMe("accepted")
    }),
    x2({
        relay: BMe("refused"),
        spoken: lS()
    }),
    x2({
        relay: BMe("unreachable"),
        spoken: lS(),
        errorClass: lS(),
        failureCode: j6(lS())
    })
]), efs = class heu extends QPn {
    static definition = {
        name: h0,
        descriptor: Vlt.descriptor(h0),
        input: orf,
        output: arf,
        invalidInputError: Ngs
    };
    relay;
    constructor(e){
        super(heu.definition), this.relay = e;
    }
    async execute({ request: e }, { agentId: n, callId: i }) {
        return heu.outputOf(await this.relay({
            agentId: n,
            callId: i,
            request: e
        }));
    }
    static outputOf(e) {
        switch(e.kind){
            case "accepted":
                return {
                    relay: "accepted"
                };
            case "refused":
                return {
                    relay: "refused",
                    spoken: Ttf.reply(e.refusal)
                };
            case "unreachable":
                return {
                    relay: "unreachable",
                    spoken: BCl,
                    errorClass: e.errorClass,
                    ...e.failureCode === void 0 ? {} : {
                        failureCode: e.failureCode
                    }
                };
        }
    }
};

}

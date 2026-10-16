import { $R, LC } from "./call-records.ts";
import { fBi } from "./core_4.js";
import { ITe } from "./end-the-call.ts";
import { T8s, Zd } from "./f0s.js";
import { V0t } from "./index_214.js";
import { EMo, Lnt, d6h } from "./nudge-reply.ts";
import { K4h, Q4h, V4h, W4h } from "./schemas_9.js";
import { mbe } from "./search-conversations.ts";
import { Ont, h7e } from "./session-tools.ts";
import { ES, Fq } from "./tool-names.ts";
import { Czt, err, wMo } from "./tool-replies.ts";
import { Dzt, Rzt } from "./tool.ts";
import { x } from "./tslib.es6.js";
function mrr() {
    return T8s(W4h);
}
function lPo(e, t, n) {
    return new V4h({
        type: "union",
        options: t,
        discriminator: e,
        ...Zd(n)
    });
}
function Op_(e) {
    return new K4h({
        type: "transform",
        transform: e
    });
}
function Up_(e, t) {
    return new Q4h({
        type: "pipe",
        in: e,
        out: t
    });
}
var VUh, jUh, _rr;
export { Op_, Up_, VUh, _rr, jUh, lPo, mrr };
var __wakaru_brr_initialized = false;
export function brr() {
if (__wakaru_brr_initialized) return;
__wakaru_brr_initialized = true;
"use strict";
x(), V0t(), Lnt(), Ont(), Fq(), Czt(), Dzt(), VUh = $R({
    request: Up_(mrr(), Op_((e, t)=>{
        const n = EMo.parse(e);
        return n.kind === "rejected" ? (t.issues.push({
            code: "custom",
            message: n.error,
            input: e
        }), fBi) : n.request;
    }))
}), jUh = lPo("relay", [
    $R({
        relay: ITe("accepted")
    }),
    $R({
        relay: ITe("refused"),
        spoken: LC()
    }),
    $R({
        relay: ITe("unreachable"),
        spoken: LC(),
        errorClass: LC(),
        failureCode: mbe(LC())
    })
]), _rr = class kAa extends Rzt {
    static definition = {
        name: ES,
        descriptor: h7e.descriptor(ES),
        input: VUh,
        output: jUh,
        invalidInputError: err
    };
    relay;
    constructor(t){
        super(kAa.definition), this.relay = t;
    }
    async execute({ request: t }, { agentId: n, callId: i }) {
        return kAa.outputOf(await this.relay({
            agentId: n,
            callId: i,
            request: t
        }));
    }
    static outputOf(t) {
        switch(t.kind){
            case "accepted":
                return {
                    relay: "accepted"
                };
            case "refused":
                return {
                    relay: "refused",
                    spoken: d6h.reply(t.refusal)
                };
            case "unreachable":
                return {
                    relay: "unreachable",
                    spoken: wMo,
                    errorClass: t.errorClass,
                    ...t.failureCode === void 0 ? {} : {
                        failureCode: t.failureCode
                    }
                };
        }
    }
};

}

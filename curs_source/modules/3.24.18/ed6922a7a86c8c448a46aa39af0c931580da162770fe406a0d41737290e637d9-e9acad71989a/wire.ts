import { $R, Azt, LC } from "./call-records.ts";
import { ITe } from "./end-the-call.ts";
import { X6e, Zd, Zue, gee } from "./f0s.js";
import { V0t } from "./index_214.js";
import { Z4h, dPo, j4h } from "./schemas_9.js";
import { Izt, mbe } from "./search-conversations.ts";
import { lPo, mrr } from "./send-task.ts";
import { x } from "./tslib.es6.js";
function F4h(e, t) {
    return new dPo({
        type: "object",
        shape: e,
        catchall: mrr(),
        ...Zd(t)
    });
}
function Np_(e, t, n) {
    return new j4h({
        type: "record",
        keyType: e,
        valueType: t,
        ...Zd(n)
    });
}
function Fp_(e) {
    return new Z4h({
        type: "nullable",
        innerType: e
    });
}
function Bp_(e) {
    return mbe(Fp_(e));
}
var Srr, l9n, v8h, Pzt, Lm_, _8h, Nm_, b8h, Om_, EPo, Fm_;
export { Bp_, EPo, F4h, Fm_, Fp_, Lm_, Nm_, Np_, Om_, Pzt, Srr, _8h, b8h, l9n, v8h };
var __wakaru_y8h_initialized = false;
export function y8h() {
if (__wakaru_y8h_initialized) return;
__wakaru_y8h_initialized = true;
"use strict";
x(), V0t(), Srr = 128, l9n = 200, v8h = 2e4, Pzt = (e)=>LC().check(X6e(), Zue(1), gee(e)), Lm_ = $R({
    agentId: Pzt(Srr),
    agentName: Pzt(l9n),
    userName: Bp_(LC().check(gee(l9n))),
    description: mbe(LC().check(gee(v8h))),
    spokenLanguage: mbe(LC().check(gee(l9n)))
}), _8h = $R({
    theyJustTalked: Izt(),
    newsOwed: Izt(),
    receiptOwed: Izt(),
    alreadySpokeThisTurn: Izt()
}), Nm_ = $R({
    agentId: Pzt(Srr),
    callId: Pzt(Srr),
    name: Pzt(l9n),
    input: mrr(),
    line: _8h
}), b8h = $R({
    type: ITe("function"),
    name: LC(),
    description: LC(),
    parameters: F4h({
        type: ITe("object"),
        properties: Np_(LC(), F4h({
            type: LC(),
            description: LC()
        })),
        required: mbe(Azt(LC()))
    })
}), Om_ = $R({
    instructions: LC(),
    tools: Azt(b8h),
    hasOverheard: Izt(),
    greeting: $R({
        direction: LC(),
        withLandedWork: LC()
    }),
    receipt: $R({
        output: $R({
            receipt: LC()
        }),
        instructions: LC()
    })
}), EPo = $R({
    error: LC()
}), Fm_ = lPo("kind", [
    $R({
        kind: ITe("served"),
        output: mrr()
    }),
    $R({
        kind: ITe("unknown_tool"),
        output: EPo
    }),
    $R({
        kind: ITe("invalid_input"),
        output: EPo
    })
]);

}

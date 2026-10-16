"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.AUTH_INIT_POLL_MS = exports.AUTH_INIT_TIMEOUT_MS = void 0, exports.pollForAuthValues = async function(t, r, n) {
    const s = Date.now();
    let i, o, a, u, c = 0;
    for(; void 0 === a || void 0 === u;){
        try {
            a = t.getCreds(), u = t.getToken();
        } catch (t) {
            n?.error("Failed to get auth values", t);
        }
        c++, void 0 === i && void 0 !== a && (i = c), void 0 === o && void 0 !== u && (o = c);
        const l = Date.now() - s;
        if (l > exports.AUTH_INIT_TIMEOUT_MS) {
            r.onTimeout({
                hasCreds: void 0 !== a,
                hasToken: void 0 !== u,
                pollCount: c,
                elapsedMs: l
            });
            break;
        }
        void 0 !== a && void 0 !== u || await new Promise((t)=>setTimeout(t, exports.AUTH_INIT_POLL_MS));
    }
    const l = Date.now() - s;
    void 0 !== i && void 0 !== o && i < o && r.onRaceConditionPrevented({
        credsReadyAtPoll: i,
        tokenReadyAtPoll: o,
        pollCount: c,
        elapsedMs: l
    });
    return {
        creds: a,
        token: u
    };
}, exports.AUTH_INIT_TIMEOUT_MS = 2e3, exports.AUTH_INIT_POLL_MS = 200;

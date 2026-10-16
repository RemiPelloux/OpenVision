"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.AUTH_INIT_POLL_MS = exports.AUTH_INIT_TIMEOUT_MS = void 0, exports.pollForAuthValues = async function(e, r, n) {
    const s = Date.now();
    let o, i, a, c, l = 0;
    for(; void 0 === a || void 0 === c;){
        try {
            a = e.getCreds(), c = e.getToken();
        } catch (e) {
            n?.error("Failed to get auth values", e);
        }
        l++, void 0 === o && void 0 !== a && (o = l), void 0 === i && void 0 !== c && (i = l);
        const u = Date.now() - s;
        if (u > exports.AUTH_INIT_TIMEOUT_MS) {
            r.onTimeout({
                hasCreds: void 0 !== a,
                hasToken: void 0 !== c,
                pollCount: l,
                elapsedMs: u
            });
            break;
        }
        void 0 !== a && void 0 !== c || await new Promise((e)=>setTimeout(e, exports.AUTH_INIT_POLL_MS));
    }
    const u = Date.now() - s;
    void 0 !== o && void 0 !== i && o < i && r.onRaceConditionPrevented({
        credsReadyAtPoll: o,
        tokenReadyAtPoll: i,
        pollCount: l,
        elapsedMs: u
    });
    return {
        creds: a,
        token: c
    };
}, exports.AUTH_INIT_TIMEOUT_MS = 2e3, exports.AUTH_INIT_POLL_MS = 200;

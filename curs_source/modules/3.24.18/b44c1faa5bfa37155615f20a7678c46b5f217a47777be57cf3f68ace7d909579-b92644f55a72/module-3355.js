"use strict";
require.d(exports, {
    F: ()=>o,
    u: ()=>i
});
var n = require("./module-90991.js"), s = require("./module-15718.js");
function o(e, t) {
    return {
        async sendUpdate (r, s) {
            await e.sendUpdate(r, (0, n.btc)(s, t));
        },
        async query (r, o) {
            const i = await e.query(r, (0, n.uS3)(o, t));
            return (0, n.ig9)(i, s.P$.UNSAFE_ALWAYS_ALLOWED);
        },
        enqueuePostTurnEndedWork: e.enqueuePostTurnEndedWork ? (t)=>e.enqueuePostTurnEndedWork(t) : void 0,
        flushPostTurnEndedWork: e.flushPostTurnEndedWork ? (t)=>e.flushPostTurnEndedWork(t) : void 0
    };
}
function i(e, t) {
    return {
        async sendUpdate (t, r) {
            await e.sendUpdate(t, (0, n.Au)(r, s.P$.UNSAFE_ALWAYS_ALLOWED));
        },
        async query (r, o) {
            const i = await e.query(r, (0, n.RA0)(o, s.P$.UNSAFE_ALWAYS_ALLOWED));
            return (0, n.jE$)(i, t);
        },
        enqueuePostTurnEndedWork: e.enqueuePostTurnEndedWork ? (t)=>e.enqueuePostTurnEndedWork(t) : void 0,
        flushPostTurnEndedWork: e.flushPostTurnEndedWork ? (t)=>e.flushPostTurnEndedWork(t) : void 0
    };
}

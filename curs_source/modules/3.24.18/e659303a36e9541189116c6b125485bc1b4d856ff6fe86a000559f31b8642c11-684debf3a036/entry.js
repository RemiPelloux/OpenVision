var i = {};
(()=>{
    var e = i;
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    const t = require("./module-919.js"), r = require("./module-8.js");
    if (!t.parentPort) throw new Error("Parent port is not defined. This worker must be run in a worker thread context.");
    t.parentPort.on("message", async (e)=>{
        try {
            const n = await (async ()=>{
                const t = e.request;
                if ("computeLinesDiff" === t.kind) {
                    const n = await (0, r.computeLinesDiff)(t.request);
                    return {
                        id: e.id,
                        response: {
                            kind: "computeLinesDiff",
                            response: n
                        }
                    };
                }
                {
                    const e = t.kind;
                    throw new Error(`Unknown request kind: ${e}`);
                }
            })();
            t.parentPort?.postMessage(n);
        } catch (n) {
            const i = {
                id: e.id,
                error: {
                    message: n?.message ?? String(n),
                    code: n?.code,
                    stack: n?.stack
                }
            };
            try {
                t.parentPort?.postMessage(i);
            } catch  {}
        }
    });
})();
var r = exports;
for(var s in i)r[s] = i[s];
i.__esModule && Object.defineProperty(r, "__esModule", {
    value: !0
});

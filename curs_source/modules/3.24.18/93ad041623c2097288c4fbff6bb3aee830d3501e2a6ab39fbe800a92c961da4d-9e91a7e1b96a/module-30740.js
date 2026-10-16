"use strict";
require.r(exports), require.d(exports, {
    getLoggerPlugin: ()=>i,
    loggerMiddleware: ()=>n,
    loggerMiddlewareOptions: ()=>s
});
const n = ()=>(e, t)=>async (r)=>{
            try {
                const n = await e(r), { clientName: s, commandName: i, logger: o, dynamoDbDocumentClientOptions: a = {} } = t, { overrideInputFilterSensitiveLog: c, overrideOutputFilterSensitiveLog: l } = a, u = c ?? t.inputFilterSensitiveLog, d = l ?? t.outputFilterSensitiveLog, { $metadata: h, ...f } = n.output;
                return o?.info?.({
                    clientName: s,
                    commandName: i,
                    input: u(r.input),
                    output: d(f),
                    metadata: h
                }), n;
            } catch (e) {
                const { clientName: n, commandName: s, logger: i, dynamoDbDocumentClientOptions: o = {} } = t, { overrideInputFilterSensitiveLog: a } = o, c = a ?? t.inputFilterSensitiveLog;
                throw i?.error?.({
                    clientName: n,
                    commandName: s,
                    input: c(r.input),
                    error: e,
                    metadata: e.$metadata
                }), e;
            }
        }, s = {
    name: "loggerMiddleware",
    tags: [
        "LOGGER"
    ],
    step: "initialize",
    override: !0
}, i = (e)=>({
        applyToStack: (e)=>{
            e.add(n(), s);
        }
    });

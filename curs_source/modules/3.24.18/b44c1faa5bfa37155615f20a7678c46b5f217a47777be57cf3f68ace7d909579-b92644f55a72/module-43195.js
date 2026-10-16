"use strict";
require.d(exports, {
    k: ()=>c
});
var n = require("./module-37949.js"), s = require("./module-56215.js"), o = require("./module-36781.js"), i = require("./module-3702.js");
const a = new Set(s.g3);
function c(e, t) {
    const r = (0, i.y)(e.info, e.channel, e.sequence), { metrics: s, loopLogContext: o } = t, c = (e)=>(n)=>{
            try {
                e({
                    ...n,
                    tags: {
                        ...r,
                        ...n.tags
                    }
                });
            } catch (e) {
                t.log(`${n.stat} not emitted: ${e instanceof Error ? e.message : String(e)}`);
            }
        };
    return {
        backendTransport: t.backendTransport,
        getPrivacyModeEnum: t.getPrivacyModeEnum,
        spanAttributes: r,
        log: (e)=>{
            const { logger: s } = e;
            if (void 0 === s || !a.has(e.level)) return void t.log(function(e) {
                const t = "info" === e.level ? "" : `${e.level} `, r = void 0 === e.logger ? "" : `${e.logger}: `, n = void 0 === e.metadata ? "" : ` ${e.metadata}`, s = void 0 === e.error ? "" : ` error=${e.error}`;
                return `${t}${r}${e.message}${n}${s}`;
            }(e));
            const i = o();
            i.get(n._O).log(i, {
                level: e.level,
                message: e.message,
                timestamp: new Date,
                context: i,
                logger: s,
                metadata: {
                    ...r,
                    ...l(e.metadata)
                },
                ...void 0 === e.error ? {} : {
                    error: u(e.error, e)
                }
            });
        },
        metrics: {
            increment: c((e)=>s?.increment?.(e)),
            distribution: c((e)=>s?.distribution(e)),
            gauge: c((e)=>s?.gauge?.(e))
        }
    };
}
function l(e) {
    return void 0 === e ? {} : (0, o.d)(e) ?? {
        metadata: e
    };
}
function u(e, t) {
    const r = e.indexOf("\n"), n = new Error(t.errorMessage ?? e.slice(0, -1 === r ? void 0 : r));
    return void 0 !== t.errorName && (n.name = t.errorName), n.stack = e, n;
}

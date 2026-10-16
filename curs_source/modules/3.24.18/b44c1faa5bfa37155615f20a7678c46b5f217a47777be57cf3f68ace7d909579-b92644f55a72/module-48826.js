"use strict";
require.d(exports, {
    ZQ: ()=>u,
    zy: ()=>l
});
var n = require("./module-17392.js"), s = require("./module-89396.js");
const o = "x-local-loop-lent-context", i = "x-local-loop-stall-advisory-ms", a = "x-local-loop-stall-fail-ms", c = new Set([
    o,
    i,
    a
]);
function l(e, t) {
    const { action: r } = e, l = (0, n.Wt)(t.stallDetectorConfig?.advisoryTimeoutMs), u = (0, n.Wt)(t.stallDetectorConfig?.failTimeoutMs), d = {
        ...Object.fromEntries(Object.entries(e.headers).filter(([e])=>!c.has(e.toLowerCase()))),
        ...void 0 === l ? {} : {
            [i]: String(l)
        },
        ...void 0 === u ? {} : {
            [a]: String(u)
        }
    };
    if (!(0, n.Xs)(t)) return {
        action: r,
        headers: d
    };
    const p = r.clone(), m = (0, n.tK)(p);
    return void 0 === m ? {
        action: r,
        headers: d
    } : (p.requestContextParts = void 0, m.requestContext = new s.bb({
        customSubagents: t.customSubagents ?? [],
        customSubagentsInfoComplete: !0,
        ...void 0 === t.projectFolder ? {} : {
            env: new s.GE({
                projectFolder: t.projectFolder
            })
        }
    }), {
        action: p,
        headers: {
            ...d,
            [o]: "1"
        }
    });
}
function u(e, t) {
    const r = t.has(o) && void 0 !== e.action ? (0, n.tK)(e.action) : void 0, s = r?.requestContext;
    void 0 !== r && (r.requestContext = void 0);
    const c = void 0 === s || !1 === s.customSubagentsInfoComplete || 0 === s.customSubagents.length ? void 0 : s.customSubagents, l = s?.env?.projectFolder || void 0, u = d(t, i), p = d(t, a), m = {
        ...void 0 === u ? {} : {
            advisoryTimeoutMs: u
        },
        ...void 0 === p ? {} : {
            failTimeoutMs: p
        }
    };
    return {
        ...void 0 === c ? {} : {
            customSubagents: c
        },
        ...void 0 === l ? {} : {
            projectFolder: l
        },
        ...0 === Object.keys(m).length ? {} : {
            stallDetectorConfig: m
        }
    };
}
function d(e, t) {
    const r = e.get(t);
    return null !== r && /^\d{1,10}$/.test(r) ? Number(r) : void 0;
}

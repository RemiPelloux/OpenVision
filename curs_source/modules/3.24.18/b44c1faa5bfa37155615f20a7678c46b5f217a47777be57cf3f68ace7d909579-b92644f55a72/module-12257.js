"use strict";
require.d(exports, {
    Nz: ()=>x,
    Kt: ()=>C,
    nh: ()=>T,
    g3: ()=>k
});
var n = require("./module-65716.js"), s = require("./module-70569.js"), o = require("./module-22189.js"), i = require("./module-81958.js");
function a(e) {
    if (!f(e) || "string" != typeof e.id) return;
    const t = p(e.api_types), r = function(e, t) {
        if (void 0 !== e?.context_length || void 0 === t) return e;
        return {
            ...e,
            context_length: t
        };
    }(function(e) {
        if (!f(e)) return;
        const t = p(e.reasoning_effort);
        return {
            ...h(e.context_length) ? {
                context_length: e.context_length
            } : {},
            ...h(e.max_output_tokens) ? {
                max_output_tokens: e.max_output_tokens
            } : {},
            ..."boolean" == typeof e.supports_vision ? {
                supports_vision: e.supports_vision
            } : {},
            ...void 0 !== t ? {
                reasoning_effort: t
            } : {}
        };
    }(e.capabilities), h(e.context_length) ? e.context_length : void 0), n = m(e.cost) ?? m(f(e.capabilities) ? e.capabilities.cost : void 0);
    return {
        id: e.id,
        ...void 0 !== t ? {
            api_types: t
        } : {},
        ...void 0 !== r ? {
            capabilities: r
        } : {},
        ...void 0 !== n ? {
            long_context_threshold_tokens: n
        } : {}
    };
}
function c(e) {
    return f(e) && Array.isArray(e.data) ? e.data : Array.isArray(e) ? e : [];
}
const l = new Set([
    "chat_completions",
    "responses",
    "openai_chat",
    "openai_responses"
]), u = i.KC([
    i.g1(i.L5()),
    i.YO(i.g1(i.L5()))
]), d = i.Ik({
    api_types: i.YO(i.Yj().min(1)).min(1).refine((e)=>e.some((e)=>l.has(e))),
    capabilities: i.Ik({
        context_length: i.ai().finite().positive().optional(),
        max_output_tokens: i.ai().finite().positive().optional(),
        output_modalities: i.YO(i.Yj()).optional(),
        input_modalities: i.YO(i.Yj()).optional(),
        supports_tool_use: i.zM().optional(),
        supports_streaming: i.zM().optional(),
        supports_reasoning: i.zM().optional(),
        supports_vision: i.zM().optional(),
        reasoning_effort: i.YO(i.Yj()).optional(),
        cost: u.optional()
    }).optional(),
    cost: u.optional()
});
function p(e) {
    if (Array.isArray(e)) return e.filter((e)=>"string" == typeof e);
}
function m(e) {
    const t = Array.isArray(e) ? e : [
        e
    ];
    for (const e of t){
        if (!f(e) || !f(e.long_context)) continue;
        const t = e.long_context.threshold_tokens;
        if (h(t) && t > 0) return Math.floor(t);
    }
}
function h(e) {
    return "number" == typeof e && Number.isFinite(e);
}
function f(e) {
    return null !== e && "object" == typeof e && !Array.isArray(e);
}
const g = new Set([
    "preview"
]);
function y(e, t) {
    const r = e.trim();
    if (!r || 0 === t.length) return;
    if (void 0 !== w(t, r)) return r;
    for (const e of function(e) {
        switch(e){
            case "composer-2":
                return [
                    "grok-composer-2"
                ];
            case "composer-2.5":
                return [
                    "grok-composer-2.5"
                ];
            default:
                return [];
        }
    }(r))if (void 0 !== w(t, e)) return e;
    return function(e, t) {
        const r = v(e, t, A);
        if (r.length > 0) return _(r);
        return _(v(e, t, S));
    }(t, r);
}
function w(e, t) {
    for (const r of e)if (r.id === t) return r;
}
function v(e, t, r) {
    const n = [];
    for (const s of e)r(t, s.id) && n.push(s.id);
    return n;
}
function _(e) {
    if (1 === e.length) return e[0];
}
function A(e, t) {
    if (t === e) return !1;
    const r = b(e);
    return b(t) === r;
}
function S(e, t) {
    const r = b(e), n = b(t), s = n.slice(r.length + 1);
    return n.startsWith(`${r}-`) && function(e) {
        const t = e.split("-")[0];
        return g.has(t);
    }(s);
}
function b(e) {
    const t = e.lastIndexOf("/");
    return -1 === t ? e : e.slice(t + 1);
}
var E = require("./module-9771.js");
const I = 2e3;
async function C(e) {
    const t = await k(e);
    return "string" == typeof t ? void 0 : t;
}
async function k(e) {
    const t = await async function(e) {
        const t = function(e) {
            const t = Object.entries(e.customHeaders ?? {}).map(([e, t])=>`${e.toLowerCase()}:${t}`).sort(P).join("\n");
            return [
                e.baseUrl,
                e.apiKey ?? "",
                void 0 === e.apiKeyHelper ? "" : (0, s.il)(e.apiKeyHelper),
                t
            ].join("\0");
        }(e), r = R.get(t);
        if (void 0 !== r) return r;
        const i = B.get(t);
        if (void 0 !== i) return i;
        const a = (async function(e) {
            const t = new AbortController;
            try {
                const r = {
                    method: "GET",
                    headers: {
                        ...(0, E.AJ)(e),
                        ...void 0 !== e.apiKey ? {
                            authorization: `Bearer ${e.apiKey}`
                        } : {}
                    },
                    signal: t.signal
                }, i = await async function(e) {
                    const t = e.fetchImpl ?? fetch;
                    if (void 0 !== e.apiKey || void 0 === e.apiKeyHelper) return t;
                    const r = (0, s.xU)(e.apiKeyHelper);
                    return await r.getApiKey(), (0, o.G)(t, r);
                }(e), a = async ()=>{
                    const t = await i(T(e.baseUrl, "/models"), r);
                    if (!t.ok) return t.status >= 500 ? "no-answer" : "unusable-answer";
                    return function(e) {
                        return f(e) && Array.isArray(e.data) ? e.data : void 0;
                    }(await t.json()) ?? "unusable-answer";
                };
                return await (0, n.wj)(a(), e.timeoutMs ?? I, "gateway /models probe timed out");
            } catch  {
                return t.abort(), "no-answer";
            }
        })(e).then((e)=>("string" != typeof e && R.set(t, e), e)).finally(()=>{
            B.delete(t);
        });
        return B.set(t, a), a;
    }(e);
    return "string" == typeof t ? t : {
        entry: J(t, e.modelId),
        extendedCapabilitiesDetected: (r = t, c(r).some((e)=>d.safeParse(e).success))
    };
    var r;
}
function x(e) {
    return e.includes("responses") || e.includes("openai_responses") ? "responses" : e.includes("chat_completions") || e.includes("openai_chat") ? "chat_completions" : void 0;
}
function T(e, t) {
    return `${e.replace(/\/+$/u, "").replace(/\/chat\/completions$/u, "").replace(/\/responses$/u, "").replace(/\/messages$/u, "")}${t}`;
}
const R = new Map, B = new Map;
function P(e, t) {
    return e < t ? -1 : e > t ? 1 : 0;
}
function J(e, t) {
    const r = function(e) {
        return c(e).flatMap((e)=>{
            const t = a(e);
            return void 0 !== t ? [
                t
            ] : [];
        });
    }(e), n = y(t, r.map((e)=>({
            id: e.id.trim()
        })));
    if (void 0 === n) return;
    const s = r.find((e)=>e.id.trim() === n);
    return void 0 !== s ? function(e, t) {
        return {
            modelId: t,
            apiTypes: e.api_types ?? [],
            contextLength: M(e.capabilities?.context_length),
            longContextThresholdTokens: M(e.long_context_threshold_tokens),
            maxOutputTokens: M(e.capabilities?.max_output_tokens),
            ...void 0 !== e.capabilities?.supports_vision ? {
                supportsVision: e.capabilities.supports_vision
            } : {},
            ...void 0 !== e.capabilities?.reasoning_effort ? {
                reasoningEffortValues: [
                    ...e.capabilities.reasoning_effort
                ]
            } : {}
        };
    }(s, n) : void 0;
}
function M(e) {
    return "number" == typeof e && Number.isFinite(e) && e > 0 ? Math.floor(e) : void 0;
}

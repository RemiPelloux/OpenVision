"use strict";
require.d(exports, {
    x: ()=>b
});
var n = require("./module-17392.js"), s = require("./module-92801.js"), o = require("./module-84959.js"), i = require("./module-95212.js"), a = require("./module-80732.js"), c = require("./module-31774.js"), l = require("./module-80901.js"), u = require("./module-36672.js"), d = require("./module-77095.js"), p = require("./module-89117.js"), m = require("./module-81958.js"), h = require("./module-70569.js"), f = require("./module-22189.js"), g = require("./module-12257.js"), y = require("./module-9771.js");
const w = m.Ik({
    text: m.Yj().optional(),
    annotations: m.Ik({
        title: m.Yj().optional(),
        url: m.Yj().optional()
    }).array().optional()
}), v = m.Ik({
    output_text: m.Yj().optional(),
    output: m.Ik({
        content: w.array().optional()
    }).array().optional()
});
function _(e) {
    return async (t, r)=>{
        const n = {
            method: "POST",
            headers: {
                "content-type": "application/json",
                ...(0, y.AJ)(e),
                ...void 0 !== e.apiKey ? {
                    authorization: `Bearer ${e.apiKey}`
                } : {}
            },
            body: JSON.stringify({
                model: e.modelId,
                input: `Search the web for the following query and return a concise answer with sources:\n${r.searchTerm}`,
                tools: [
                    {
                        type: e.toolType
                    }
                ]
            }),
            signal: t.signal
        }, s = void 0 === e.apiKey && void 0 !== e.apiKeyHelper ? (0, f.G)(fetch, (0, h.xU)(e.apiKeyHelper)) : fetch, o = await s((0, g.nh)(e.baseUrl, "/responses"), n), i = await o.text();
        if (!o.ok) throw new Error(`Provider request failed: ${o.status} ${o.statusText}\n${i}`);
        const a = v.parse(JSON.parse(i)), c = (a.output ?? []).flatMap((e)=>e.content ?? []), l = a.output_text ?? c.map((e)=>e.text ?? "").filter(Boolean).join("\n"), u = new Map;
        for (const e of c)for (const { url: t, title: r } of e.annotations ?? [])t && u.set(t, {
            url: t,
            title: r ?? t,
            text: e.text ?? ""
        });
        return {
            answer: l || void 0,
            documents: [
                ...u.values()
            ]
        };
    };
}
const A = 'Private inference is enabled but has no endpoint configuration. Put private-inference.toml in the enterprise Cursor directory (a Grok Build config.toml: [model_providers.<name>] with base_url, api_backend = "responses" and env_key or [auth] auth_provider_command — an executable path that prints the bare token — one [model.<key>] per model, [models] default), or for development set CURSOR_PRIVATE_INFERENCE_CONFIG=<config.toml> or the CURSOR_PRIVATE_INFERENCE_BASE_URL / _MODEL shorthand, then restart, or ask your admin to disable private inference for your team.', S = "Private inference requires durable usage storage and an authenticated usage-reporting transport.";
function b(e) {
    const { sessionProvider: t, catalog: r, gatewayRetry: n, usageAdmission: s, promptQualityCaptures: o } = e, i = (t)=>E((0, d.q1)(t), ()=>{}, e.getPrivacyModeEnum, e.attachAttemptContext);
    return void 0 !== n ? void 0 === s ? i(S) : E((0, u.rv)(n, s, o), ()=>{
        const e = n.state();
        return "active" === e.kind ? e.catalog : void 0;
    }, e.getPrivacyModeEnum, e.attachAttemptContext, o) : void 0 === t || void 0 === r ? i(e.configErrorDetail ?? A) : void 0 === s ? i(S) : E((0, d.Ti)(t, r, s, o), ()=>r, e.getPrivacyModeEnum, e.attachAttemptContext, o);
}
function E(e, t, r, u, m) {
    const h = function() {
        const e = (e)=>new s.T(`${e} is disabled in private inference: it would send content to Cursor's backend.`, o.C.Unimplemented);
        return {
            runWebSearch: async ()=>{
                throw e("Web search");
            },
            runWebFetch: async ()=>{
                throw e("Web fetch");
            },
            runGenerateImage: async ()=>{
                throw e("Image generation");
            },
            runGenerateVideo: async ()=>{
                throw e("Video generation");
            },
            runXSearch: async ()=>{
                throw e("X search");
            }
        };
    }();
    return new i.o({
        createAgentConfig: (e)=>{
            const r = t(), s = void 0 === r ? void 0 : (0, d.gV)(r, e.resolvedModel ?? e.requestedModel);
            return (0, a.A)(e, h, void 0 === s ? {} : function(e, t) {
                if (void 0 === e.webSearchTool) return {};
                const r = (0, p.$B)(e.endpoint);
                return {
                    webSearch: _({
                        baseUrl: e.endpoint.baseUrl,
                        modelId: e.providerModelId,
                        toolType: e.webSearchTool,
                        ...r,
                        customHeaders: (0, n.oo)(r.customHeaders, t)
                    })
                };
            }(s, e.originalRequestId), {
                webSearch: void 0 !== s?.webSearchTool,
                webFetch: !1,
                generateImage: !1,
                connectScm: !1,
                xSearch: !1
            });
        },
        createPromptSession: e,
        getPrivacyMode: ()=>(0, l.a)(r()),
        agentEvents: {
            unbound: {
                reason: "private inference: AdmitRun has no server stream for agent events; only usage is reported"
            }
        },
        retryLogging: {
            tag: "private_inference_agent_retries"
        },
        reconnectEndpoint: "private-inference-provider",
        prepareAttemptContext: (0, c.g)(u),
        ...void 0 === m ? {} : {
            onRunFinished: (e, t)=>m.finishRun(e, t.requestId, t.status)
        }
    });
}

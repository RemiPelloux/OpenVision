"use strict";
require.d(exports, {
    A6: ()=>c,
    Ac: ()=>B,
    Mm: ()=>ee,
    ku: ()=>a,
    Fn: ()=>g
});
var n = require("./module-63307.js"), s = require("./module-98875.js"), o = require("./module-8844.js"), i = require("./module-33002.js");
const a = (0, i.cF)(Symbol("requestId"), void 0), c = (0, i.cF)(Symbol("conversationId"), void 0), l = (0, i.cF)(Symbol("conversationGroupId"), void 0), u = (0, i.cF)(Symbol("automationId"), void 0), d = (0, i.cF)(Symbol("originatingFlow"), void 0), p = ((0, i.cF)(Symbol("requestModelName"), void 0), (0, i.cF)(Symbol("parentRequestId"), void 0)), m = (0, i.cF)(Symbol("rootParentRequestId"), void 0), h = (0, i.cF)(Symbol("parentAgentToolCallId"), void 0), f = (0, i.cF)(Symbol("subagentType"), void 0), g = (0, i.cF)(Symbol("requestedModel"), void 0);
const y = (0, i.cF)(Symbol("callerRoutingReason"), void 0), w = (0, i.cF)(Symbol("turnUnitId"), void 0), v = (0, i.cF)(Symbol("turnUnitType"), void 0);
var _ = require("./module-36038.js");
function A(e) {
    const t = e.providerOptions?.cursor?.modelName;
    return "string" == typeof t ? t : void 0;
}
function S(e) {
    const t = e.providerOptions?.cursor?.lineageTag;
    return "string" == typeof t && t.length > 0 ? t : void 0;
}
function b(e) {
    const t = void 0 !== e.lineageTag && e.lineageTag.length > 0 ? e.lineageTag : void 0;
    return void 0 === e.modelName && void 0 === t ? {} : {
        providerOptions: {
            cursor: {
                ...void 0 !== e.modelName ? {
                    modelName: e.modelName
                } : {},
                ...void 0 !== t ? {
                    lineageTag: t
                } : {}
            }
        }
    };
}
function E(e, t, r) {
    if ("object" == typeof t && null !== t && !Array.isArray(t)) return e.args = T(_.Struct.fromJson(t)), void (void 0 !== r && (e.rawToolCallArgs = k(r)));
    const n = "string" == typeof t ? t : function(e) {
        const t = JSON.stringify(e);
        return C.test(t) ? JSON.stringify(JSON.parse(t, x)) : t;
    }(t);
    if (void 0 === n) throw new Error(`cannot represent tool call arguments of type ${typeof t} as a JSON object or raw text`);
    e.rawToolCallArgs = k(r ?? n);
}
function I(e) {
    return e.args?.toJson() ?? e.rawToolCallArgs ?? {};
}
const C = /\\ud[89a-f]/;
function k(e) {
    return "string" == typeof e ? e.toWellFormed() : e;
}
function x(e, t) {
    return "string" == typeof t ? k(t) : null === t || "object" != typeof t || Array.isArray(t) ? t : Object.fromEntries(Object.entries(t).map(([e, t])=>[
            k(e),
            t
        ]));
}
function T(e) {
    const { fields: t } = e;
    let r = !0;
    for (const e of Object.keys(t))R(t[e]), r &&= k(e) === e;
    return r || (e.fields = Object.fromEntries(Object.entries(t).map(([e, t])=>[
            k(e),
            t
        ]))), e;
}
function R(e) {
    const { kind: t } = e;
    if ("stringValue" === t.case) t.value = k(t.value);
    else if ("structValue" === t.case) T(t.value);
    else if ("listValue" === t.case) for (const e of t.value.values)R(e);
}
function B(e) {
    const t = new o.C7;
    t.role = N(e.role), function(e, t) {
        const { inferenceReason: r, featureType: n, isSummary: s } = function(e) {
            const t = e?.cursor;
            return {
                inferenceReason: "string" == typeof t?.inferenceReason && t.inferenceReason.length > 0 ? t.inferenceReason : void 0,
                featureType: "string" == typeof t?.featureType && t.featureType.length > 0 ? t.featureType : void 0,
                isSummary: !0 === t?.isSummary || void 0
            };
        }(t);
        void 0 !== r && (e.cursorInferenceReason = k(r)), void 0 !== n && (e.cursorFeatureType = k(n)), s && (e.cursorIsSummary = !0);
    }(t, e.providerOptions);
    const r = e.providerOptions?.cursor?.lineageTag;
    "system" !== e.role && "string" == typeof r && r.length > 0 && (t.lineageTag = r);
    const n = e.providerOptions?.cursor?.requestId;
    if ("user" === e.role && "string" == typeof n && n.length > 0 && (t.cursorRequestId = k(n)), "user" === e.role) {
        if ("string" == typeof e.content) t.content = {
            case: "text",
            value: k(e.content)
        };
        else if (Array.isArray(e.content)) {
            const r = new o.b7;
            r.parts = e.content.map((e)=>(function(e) {
                    const t = new o.WC;
                    if ("text" === e.type) {
                        const r = new o.Mg;
                        r.text = k(e.text), r.providerOptions = F(e.providerOptions), t.part = {
                            case: "text",
                            value: r
                        };
                    } else if ("image" === e.type) {
                        const r = new o.KU, n = e.image;
                        "string" == typeof n ? r.data = k(n) : n instanceof URL ? r.data = n.toString() : n instanceof Uint8Array ? r.data = L(n, e.mimeType) : n instanceof ArrayBuffer && (r.data = L(new Uint8Array(n), e.mimeType)), r.mimeType = k(e.mimeType), r.providerOptions = F(e.providerOptions), t.part = {
                            case: "image",
                            value: r
                        };
                    } else if ("file" === e.type) {
                        const r = new o.Mg;
                        r.text = k(`[File: ${e.name ?? "unnamed"}]`), t.part = {
                            case: "text",
                            value: r
                        };
                    } else {
                        const e = new o.Mg;
                        e.text = "", t.part = {
                            case: "text",
                            value: e
                        };
                    }
                    return t;
                })(e)), t.content = {
                case: "parts",
                value: r
            };
        }
    } else if ("assistant" === e.role) {
        if (P(t, e), "string" == typeof e.content) t.content = {
            case: "text",
            value: k(e.content)
        };
        else if (Array.isArray(e.content)) {
            const r = M(e.content, t, {
                keepRawToolCallArgs: !0
            });
            void 0 !== r && (t.content = {
                case: "text",
                value: r
            });
        }
    } else if ("tool" === e.role) {
        if (Array.isArray(e.content)) {
            const r = function(e) {
                const t = e.providerOptions?.cursor?.highLevelToolCallResult?.isError;
                return "boolean" == typeof t ? t : void 0;
            }(e), n = new o.eQ;
            n.parts = e.content.filter((e)=>"tool-result" === e.type).map((e)=>{
                const t = new o.up;
                return t.toolCallId = k(e.toolCallId), t.toolName = k(e.toolName), void 0 !== e.result && (t.result = function(e) {
                    if ("string" == typeof e) return _.Value.fromJson(k(e));
                    const t = JSON.stringify(e);
                    return _.Value.fromJson(JSON.parse(t, C.test(t) ? x : void 0));
                }(e.result)), e.isError && (t.isError = !0), void 0 !== r && (t.cursorToolCallIsError = r), void 0 !== e.experimental_content && e.experimental_content.length > 0 && (t.experimentalContent = e.experimental_content.map((e)=>{
                    const t = new o.WC;
                    return "image" === e.type ? t.part = {
                        case: "image",
                        value: new o.KU({
                            data: k(e.data),
                            mimeType: k(e.mimeType)
                        })
                    } : t.part = {
                        case: "text",
                        value: new o.Mg({
                            text: k(e.text)
                        })
                    }, t;
                })), t.providerOptions = F(e.providerOptions), t;
            }), t.content = {
                case: "toolContent",
                value: n
            };
        }
    } else if ("system" === e.role) {
        t.content = {
            case: "text",
            value: k(e.content)
        };
        const r = e.providerOptions?.cursor?.clearAt;
        if ("string" == typeof r && r.length > 0) {
            t.cursorClearAt = k(r);
            const n = e.providerOptions?.cursor?.fallbackInsertBefore;
            "string" == typeof n && n.length > 0 && (t.cursorFallbackInsertBefore = k(n));
        }
    }
    return t;
}
function P(e, t) {
    const r = function(e) {
        const t = e.providerOptions?.cursor, r = t?.modelProviderMessageId, n = t?.openaiPhase;
        return {
            modelProviderMessageId: "string" == typeof r ? r : void 0,
            openaiPhase: "string" == typeof n || null === n ? n : void 0
        };
    }(t);
    void 0 !== r.modelProviderMessageId && (e.modelProviderMessageId = k(r.modelProviderMessageId)), "string" == typeof r.openaiPhase ? e.openaiPhase = k(r.openaiPhase) : null === r.openaiPhase && (e.openaiPhaseNull = !0);
    const n = t.providerOptions?.cursor?.anthropicNativeContent;
    "string" == typeof n && n.length > 0 && (e.anthropicNativeContent = k(n));
}
function J(e) {
    const t = function(e, t, r) {
        if (void 0 !== e || void 0 !== t || r) return {
            cursor: {
                ...void 0 !== e ? {
                    modelProviderMessageId: e
                } : {},
                ...void 0 !== t ? {
                    openaiPhase: t
                } : r ? {
                    openaiPhase: null
                } : {}
            }
        };
    }(e.modelProviderMessageId, e.openaiPhase, !0 === e.openaiPhaseNull), r = e.anthropicNativeContent;
    return void 0 === r || 0 === r.length ? t : {
        cursor: {
            ...t?.cursor,
            anthropicNativeContent: r
        }
    };
}
function M(e, t, { keepRawToolCallArgs: r }) {
    const n = [], s = [], i = [];
    for (const a of e)if ("text" === a.type) {
        const e = k(a.text);
        n.push(e), e.length > 0 && (s.push(e), i.push(o.Hc.TEXT));
    } else if ("tool-call" === a.type) {
        const e = new o.m3;
        e.toolCallId = k(a.toolCallId), e.toolName = k(a.toolName);
        const n = r ? a.providerOptions?.cursor?.rawToolCallArgs : void 0;
        E(e, a.args, "string" == typeof n ? n : void 0), t.toolCalls.push(e), i.push(o.Hc.TOOL_CALL);
    } else if ("reasoning" === a.type) {
        const e = a;
        t.reasoningParts.push(new o.bn({
            isRedacted: !1,
            text: k(e.text),
            signature: k(e.signature),
            modelName: k(A(e)),
            lineageTag: S(e)
        })), i.push(o.Hc.REASONING);
    } else if ("redacted-reasoning" === a.type) {
        const e = a;
        t.reasoningParts.push(new o.bn({
            isRedacted: !0,
            redactedData: k(e.data),
            modelName: k(A(e)),
            lineageTag: S(e)
        })), i.push(o.Hc.REASONING);
    }
    return function(e) {
        let t = 0, r = 0;
        for (const n of e){
            const e = q.get(n) ?? 0;
            if (e < t) return !1;
            if (n === o.Hc.TEXT && ++r > 1) return !1;
            t = e;
        }
        return !0;
    }(i) || (t.assistantPartOrder = i, s.length > 1 && (t.assistantTextParts = s)), n.length > 0 ? n.join("") : void 0;
}
const q = new Map([
    [
        o.Hc.REASONING,
        0
    ],
    [
        o.Hc.TEXT,
        1
    ],
    [
        o.Hc.TOOL_CALL,
        2
    ]
]);
function D(e) {
    return e.isRedacted ? {
        type: "redacted-reasoning",
        data: e.redactedData ?? "",
        ...b(e)
    } : {
        type: "reasoning",
        text: e.text,
        ...void 0 !== e.signature ? {
            signature: e.signature
        } : {},
        ...b(e)
    };
}
function O(e, t, { keepRawToolCallArgs: r }) {
    const n = e.reasoningParts.map(D), s = e.toolCalls.map((e)=>(function(e, t) {
            return {
                type: "tool-call",
                toolCallId: e.toolCallId,
                toolName: e.toolName,
                args: I(e),
                ...t && void 0 !== e.rawToolCallArgs ? {
                    providerOptions: {
                        cursor: {
                            rawToolCallArgs: e.rawToolCallArgs
                        }
                    }
                } : {}
            };
        })(e, r)), i = function(e, t) {
        if (0 === e.assistantPartOrder.length) return;
        let r = 0, n = 0, s = 0;
        for (const t of e.assistantPartOrder)switch(t){
            case o.Hc.REASONING:
                r++;
                break;
            case o.Hc.TEXT:
                n++;
                break;
            case o.Hc.TOOL_CALL:
                s++;
                break;
            default:
                return;
        }
        if (r !== e.reasoningParts.length || s !== e.toolCalls.length) return;
        const i = t ?? "", a = e.assistantTextParts.length > 0 ? e.assistantTextParts : i.length > 0 ? [
            i
        ] : [];
        return a.length === n && a.join("") === i ? a : void 0;
    }(e, t);
    if (void 0 === i) return [
        ...n,
        ...void 0 !== t && t.length > 0 ? [
            {
                type: "text",
                text: t
            }
        ] : [],
        ...s
    ];
    let a = 0, c = 0, l = 0;
    return e.assistantPartOrder.map((e)=>{
        switch(e){
            case o.Hc.REASONING:
                return n[a++];
            case o.Hc.TEXT:
                return {
                    type: "text",
                    text: i[c++]
                };
            default:
                return s[l++];
        }
    });
}
function N(e) {
    switch(e){
        case "user":
            return o.tB.USER;
        case "assistant":
            return o.tB.ASSISTANT;
        case "tool":
            return o.tB.TOOL;
        case "system":
            return o.tB.SYSTEM;
        default:
            return o.tB.UNSPECIFIED;
    }
}
function F(e) {
    if (!e || "object" != typeof e) return;
    const t = e, r = new o.pQ;
    let n = !1;
    if (t.anthropic?.cacheControl) {
        const e = new o.AC, s = new o.X0;
        s.type = k(t.anthropic.cacheControl.type), e.cacheControl = s, r.anthropic = e, n = !0;
    }
    const s = function(e) {
        if (!e || "object" != typeof e) return;
        const t = new o.iG;
        let r = !1;
        if ("string" == typeof e.imageDescription && e.imageDescription.length > 0 && (t.imageDescription = k(e.imageDescription), r = !0), null !== e.imageDescriptions && "object" == typeof e.imageDescriptions) for (const [n, s] of Object.entries(e.imageDescriptions)){
            const e = Number(n);
            Number.isInteger(e) && e >= 0 && "string" == typeof s && s.length > 0 && (t.imageDescriptions[e] = k(s), r = !0);
        }
        return "string" == typeof e.imageContentSha256 && e.imageContentSha256.length > 0 && (t.imageContentSha256 = k(e.imageContentSha256), r = !0), r ? t : void 0;
    }(t.cursor);
    return void 0 !== s && (r.cursor = s, n = !0), n ? r : void 0;
}
const U = "image/png";
function L(e, t) {
    return `data:${"string" == typeof t && "" !== t.trim() ? k(t) : U};base64,${Buffer.from(e).toString("base64")}`;
}
function $(e) {
    const t = new o.nO;
    if (t.name = e.name, t.description = e.description, t.parameters = _.Struct.fromJsonString(JSON.stringify(e.parameters)), e.customToolFormat) {
        const r = new o.Am;
        r.type = e.customToolFormat.type, r.definition = e.customToolFormat.definition, r.syntax = e.customToolFormat.syntax, t.customToolFormat = r;
    }
    return t;
}
function Q(e) {
    const t = new o.Vr;
    return t.name = e.name, t.id = e.id, t.type = e.type, e.options && (t.options = _.Struct.fromJson(e.options)), t;
}
function j(e) {
    return e.errorType === o.qL.INPUT_TOKEN_LIMIT || e.isInputTokenLimitError ? new n.R1(e.message) : e.errorType === o.qL.OUTPUT_TOKEN_LIMIT || e.isOutputTokenLimitError ? new n.YE(e.message) : (0, n.ud)(e.message) ?? new Error(e.message);
}
function G(e) {
    e.catch(()=>{});
}
class H extends n.D5 {
    replaceMessage(e, t) {
        const r = this.messages.indexOf(e);
        return -1 !== r && (this.messages[r] = t, !0);
    }
}
function z(e, t) {
    if (Array.isArray(e.content)) {
        if ("user" === e.role) {
            const r = [
                ...e.content
            ];
            let n = !1;
            for (const e of t){
                if (void 0 !== e.expContentIndex) continue;
                const t = r[e.partIndex];
                void 0 !== t && "image" === t.type && (r[e.partIndex] = {
                    ...t,
                    providerOptions: {
                        ...t.providerOptions,
                        cursor: {
                            ...t.providerOptions?.cursor,
                            imageDescription: e.description
                        }
                    }
                }, n = !0);
            }
            return n ? {
                ...e,
                content: r
            } : void 0;
        }
        if ("tool" === e.role) {
            const r = [
                ...e.content
            ];
            let n = !1;
            for (const e of t){
                if (void 0 === e.expContentIndex) continue;
                const t = r[e.partIndex];
                if (void 0 === t || "tool-result" !== t.type || !Array.isArray(t.experimental_content) || "image" !== t.experimental_content[e.expContentIndex]?.type) continue;
                const s = t.providerOptions?.cursor?.imageDescriptions ?? {};
                r[e.partIndex] = {
                    ...t,
                    providerOptions: {
                        ...t.providerOptions,
                        cursor: {
                            ...t.providerOptions?.cursor,
                            imageDescriptions: {
                                ...s,
                                [e.expContentIndex]: e.description
                            }
                        }
                    }
                }, n = !0;
            }
            return n ? {
                ...e,
                content: r
            } : void 0;
        }
    }
}
function W(e, t) {
    return void 0 === t || 0 === t.length ? e : {
        ...e,
        cursor: {
            ...e?.cursor,
            lineageTag: t
        }
    };
}
function V(e, t) {
    if ("string" == typeof e) return e;
    let r = 0;
    return e.map((e)=>{
        if ("reasoning" !== e.type && "redacted-reasoning" !== e.type) return e;
        const n = t[r];
        return r += 1, void 0 === n || 0 === n.length ? e : {
            ...e,
            providerOptions: {
                ...e.providerOptions,
                cursor: {
                    ...e.providerOptions?.cursor,
                    lineageTag: n
                }
            }
        };
    });
}
class K extends n.NT {
    constructor(e, t, r, n, s){
        super(e), this.client = t, this.requestedModel = r, this.modelConfig = n, this.inferenceReason = s, this.protoBuilder = e;
    }
    applyImageDescriptions(e, t) {
        const r = new Map;
        for (const e of t.descriptions){
            if (0 === e.description.length) continue;
            const t = r.get(e.messageIndex) ?? [];
            t.push(e), r.set(e.messageIndex, t);
        }
        for (const [t, n] of r){
            const r = e[t];
            if (void 0 === r) continue;
            const s = z(r, n);
            void 0 !== s && this.replaceRequestMessage(e, t, s);
        }
    }
    applyLineageTags(e, t) {
        for (const { messageIndex: r, tag: n, reasoningTags: s } of t.tags){
            const t = e[r];
            if (void 0 === t || "system" === t.role || 0 === n.length) continue;
            const o = W(t.providerOptions, n);
            this.replaceRequestMessage(e, r, {
                ...t,
                ..."assistant" === t.role && s.length > 0 ? {
                    content: V(t.content, s)
                } : {},
                providerOptions: o
            });
        }
    }
    replaceRequestMessage(e, t, r) {
        const n = e[t];
        void 0 !== n && this.protoBuilder.replaceMessage(n, r) && (e[t] = r);
    }
    stream(e, t, r, i) {
        const _ = [], A = [];
        for (const e of r ?? [])"type" in e && "provider-defined" === e.type ? A.push(e) : _.push(e);
        const S = void 0 !== i?.maxTokens ? {
            ...this.modelConfig,
            maxTokens: i.maxTokens
        } : this.modelConfig, b = e.get(g) ?? this.requestedModel, E = this.builder.getMessages(), I = e.get(n.Gb)?.(), C = function(e) {
            const { messages: t, requestedModel: r, tools: n, providerDefinedTools: s, modelConfig: i, invocationId: a, conversationId: c, conversationGroupId: l, automationId: u, originatingFlow: d, routingReason: p, parentRequestId: m, rootParentRequestId: h, parentAgentToolCallId: f, subagentType: g, turnUnitId: y, turnUnitType: w, compactionEpoch: v, summarizedMessageCount: _, isSimulatedMsg: A, simulatedMsgReason: S, inferenceReason: b, acceptedUnadvertisedToolNames: E } = e, I = new o.Zc;
            if (I.messages = t.map(B), I.tools = (n ?? []).map($), I.providerDefinedTools = (s ?? []).map(Q), I.acceptedUnadvertisedToolNames = [
                ...E ?? []
            ], I.requestedModel = new o.RK({
                modelId: r.modelId,
                maxMode: r.maxMode,
                parameters: r.parameters.map((e)=>new o.nF({
                        id: e.id,
                        value: e.value
                    })),
                builtInModel: r.builtInModel
            }), a && (I.invocationId = a), c && (I.conversationId = c), l && (I.conversationGroupId = l), u && (I.automationId = u), d && (I.originatingFlow = d), p && (I.routingReason = p), m && (I.parentRequestId = m), h && (I.rootParentRequestId = h), f && (I.parentAgentToolCallId = f), g && (I.subagentType = g), y && (I.turnUnitId = y), w && (I.turnUnitType = w), void 0 !== v && (I.compactionEpoch = v), void 0 !== _ && (I.summarizedMessageCount = _), void 0 !== A && (I.isSimulatedMsg = A), void 0 !== S && (I.simulatedMsgReason = S), b && (I.inferenceReason = b), i) {
                const e = new o.DI;
                e.maxTokens = i.maxTokens, e.temperature = i.temperature, e.topP = i.topP, e.stopSequences = i.stopSequences ?? [], I.modelConfig = e;
            }
            return I;
        }({
            messages: E,
            requestedModel: b,
            tools: _,
            providerDefinedTools: A,
            modelConfig: S,
            invocationId: t,
            conversationId: e.get(c),
            conversationGroupId: e.get(l),
            automationId: e.get(u),
            originatingFlow: e.get(d),
            routingReason: e.get(y),
            parentRequestId: e.get(p),
            rootParentRequestId: e.get(m),
            parentAgentToolCallId: e.get(h),
            subagentType: e.get(f),
            turnUnitId: e.get(w),
            turnUnitType: e.get(v),
            compactionEpoch: e.get(n.Qt)?.(),
            summarizedMessageCount: e.get(n.Nf)?.(),
            isSimulatedMsg: I?.isSimulatedMsg,
            simulatedMsgReason: I?.simulatedMsgReason,
            inferenceReason: this.inferenceReason,
            acceptedUnadvertisedToolNames: i.acceptedUnadvertisedToolNames
        }), k = e.get(a), x = {};
        k && (x["x-request-id"] = k);
        try {
            const t = (0, s.mJ)(e);
            if (void 0 !== t) {
                const e = `00-${t.traceId}-${t.spanId}-${t.traceFlags.toString(16).padStart(2, "0")}`;
                x.traceparent = e, x["backend-traceparent"] = e;
            }
        } catch  {}
        const T = this.client.stream(C, {
            signal: e.signal,
            headers: x
        });
        let R, P;
        const J = new Promise((e, t)=>{
            R = e, P = t;
        });
        let M, q;
        G(J);
        const D = new Promise((e, t)=>{
            M = e, q = t;
        });
        let O, N;
        G(D);
        const F = new Promise((e, t)=>{
            O = e, N = t;
        });
        let U, L;
        G(F);
        const j = new Promise((e, t)=>{
            U = e, L = t;
        });
        let H, z;
        G(j);
        const W = new Promise((e, t)=>{
            H = e, z = t;
        });
        G(W);
        return {
            fullStream: this.createFullStream(T, {
                resolveUsage: R,
                rejectUsage: P,
                resolveExtendedUsage: M,
                rejectExtendedUsage: q,
                resolveProviderMetadata: O,
                rejectProviderMetadata: N,
                resolveInvocationId: U,
                rejectInvocationId: L,
                resolveResponse: H,
                rejectResponse: z
            }, e, E),
            usage: J,
            extendedUsage: D,
            providerMetadata: F,
            invocationId: j,
            response: W
        };
    }
    async *createFullStream(e, t, r, s) {
        let o, i = !1, a = !1, c = !1, l = !1, u = !1, d = !1;
        try {
            try {
                for await (const r of e){
                    const e = this.protoResponseToStreamParts(r);
                    if ("usage" === r.response.case) {
                        const e = r.response.value;
                        t.resolveUsage({
                            promptTokens: e.promptTokens,
                            completionTokens: e.completionTokens,
                            totalTokens: e.totalTokens ?? 0
                        }), i = !0;
                    } else if ("extendedUsage" === r.response.case) {
                        const e = r.response.value;
                        t.resolveExtendedUsage({
                            inputTokens: e.inputTokens,
                            outputTokens: e.outputTokens,
                            cacheReadTokens: e.cacheReadTokens,
                            cacheWriteTokens: e.cacheWriteTokens,
                            reasoningTokens: e.reasoningTokens,
                            maxTokens: e.maxTokens
                        }), a = !0;
                    } else if ("providerMetadata" === r.response.case) {
                        const e = r.response.value.metadata?.toJson();
                        t.resolveProviderMetadata(e), c = !0;
                    } else if ("invocationId" === r.response.case) t.resolveInvocationId(r.response.value.invocationId), l = !0;
                    else if ("responseInfo" === r.response.case) {
                        const e = r.response.value;
                        t.resolveResponse({
                            id: e.id,
                            modelId: e.model,
                            timestamp: new Date(Number(e.createdAt)),
                            messages: this.protoMessagesToResponseMessages(e),
                            error: e.errorMessage ? (0, n.ud)(e.errorMessage) ?? new Error(e.errorMessage) : void 0,
                            inferenceExtraData: e.inferenceExtraData ? this.protoExtraDataToInferenceExtraData(e.inferenceExtraData) : void 0,
                            supportsSelfSummary: e.supportsSelfSummary,
                            earlyCompactionContextTokenThreshold: e.earlyCompactionContextTokenThreshold
                        }), u = !0;
                    } else "error" === r.response.case ? o = j(r.response.value) : "imageDescriptions" === r.response.case ? this.applyImageDescriptions(s, r.response.value) : "lineageTags" === r.response.case && this.applyLineageTags(s, r.response.value);
                    for (const t of e)yield t;
                }
            } catch (e) {
                o = e instanceof Error ? e : new Error(String(e));
            }
            d = !0;
        } finally{
            (d || void 0 !== o) && (i || (o ? t.rejectUsage(o) : t.resolveUsage({
                promptTokens: 0,
                completionTokens: 0,
                totalTokens: 0
            })), a || (o ? t.rejectExtendedUsage(o) : t.resolveExtendedUsage({
                inputTokens: 0,
                outputTokens: 0,
                cacheReadTokens: 0,
                cacheWriteTokens: 0,
                maxTokens: 0
            })), c || (o ? t.rejectProviderMetadata(o) : t.resolveProviderMetadata(void 0)), l || (o ? t.rejectInvocationId(o) : t.resolveInvocationId(crypto.randomUUID())), u || (o ? t.rejectResponse(o) : t.resolveResponse({
                id: "",
                modelId: "",
                timestamp: new Date,
                messages: []
            })));
        }
        if (o) throw o;
    }
    protoResponseToStreamParts(e) {
        const t = [];
        switch(e.response.case){
            case "textPart":
                {
                    const r = e.response.value;
                    r.isFinal ? t.push({
                        type: "finish",
                        finishReason: "stop",
                        usage: {
                            promptTokens: 0,
                            completionTokens: 0,
                            totalTokens: 0
                        }
                    }) : t.push({
                        type: "text-delta",
                        textDelta: r.text
                    });
                    break;
                }
            case "thinkingPart":
                {
                    const r = e.response.value, n = {
                        ...!0 === r.isAlreadySummarized ? {
                            isAlreadySummarizedThinking: !0
                        } : {},
                        ...void 0 !== r.modelName && r.modelName.length > 0 ? {
                            modelName: r.modelName
                        } : {}
                    }, s = Object.keys(n).length > 0 ? {
                        providerOptions: {
                            cursor: n
                        }
                    } : {};
                    void 0 !== r.redactedData ? t.push({
                        type: "redacted-reasoning",
                        data: r.redactedData,
                        ...s
                    }) : (r.text.length > 0 || void 0 === r.signature) && t.push({
                        type: "reasoning",
                        textDelta: r.text,
                        ...s
                    }), void 0 !== r.signature && t.push({
                        type: "reasoning-signature",
                        signature: r.signature
                    });
                    break;
                }
            case "toolCallPart":
                {
                    const r = e.response.value;
                    if (r.isComplete) {
                        let e;
                        try {
                            e = JSON.parse(r.args);
                        } catch  {
                            e = {};
                        }
                        t.push({
                            type: "tool-call",
                            toolCallId: r.toolCallId,
                            toolName: r.toolName,
                            args: e
                        });
                    } else r.toolName ? t.push({
                        type: "tool-call-streaming-start",
                        toolCallId: r.toolCallId,
                        toolName: r.toolName
                    }) : t.push({
                        type: "tool-call-delta",
                        toolCallId: r.toolCallId,
                        toolName: "",
                        argsTextDelta: r.args
                    });
                    break;
                }
            case "error":
                t.push({
                    type: "error",
                    error: j(e.response.value)
                });
        }
        return t;
    }
    protoMessagesToResponseMessages(e) {
        return e.messages.map((e)=>{
            if ("assistant" === (e.role === o.tB.ASSISTANT ? "assistant" : e.role === o.tB.TOOL ? "tool" : "assistant")) {
                const t = O(e, e.content, {
                    keepRawToolCallArgs: !1
                }), r = W(J(e), e.lineageTag);
                return {
                    id: e.id,
                    role: "assistant",
                    content: t,
                    ...void 0 !== r ? {
                        providerOptions: r
                    } : {}
                };
            }
            {
                const t = W(void 0, e.lineageTag);
                return {
                    id: e.id,
                    role: "tool",
                    ...void 0 !== t ? {
                        providerOptions: t
                    } : {},
                    content: e.toolResult ? e.toolResult.parts.map((e)=>({
                            type: "tool-result",
                            toolCallId: e.toolCallId,
                            toolName: e.toolName,
                            result: e.result?.toJson(),
                            isError: e.isError || void 0
                        })) : []
                };
            }
        });
    }
    protoExtraDataToInferenceExtraData(e) {
        return {
            tokenLogprobs: e.tokenLogprobs.length ? e.tokenLogprobs.map((e)=>e.values) : void 0,
            tokenIds: e.tokenIds.length ? e.tokenIds.map((e)=>e.values.map(Number)) : void 0,
            promptTokenIds: e.promptTokenIds.length ? e.promptTokenIds.map((e)=>e.values.map(Number)) : void 0,
            extraTokens: e.extraTokens.length ? e.extraTokens.map((e)=>e.values.map(Number)) : void 0,
            extraLogprobs: e.extraLogprobs.length ? e.extraLogprobs.map((e)=>e.values) : void 0,
            routingMatrix: e.routingMatrix.length ? e.routingMatrix.map((e)=>e.values.map((e)=>"" === e ? null : e)) : void 0
        };
    }
}
class Y extends n.uo {
    stream(...e) {
        const t = super.stream(...e);
        for (const e of [
            t.response,
            t.usage,
            t.extendedUsage,
            t.providerMetadata,
            t.invocationId
        ])G(e);
        return t;
    }
}
class Z {
    constructor(e, t, r, n, s){
        this.client = e, this.requestedModel = t, this.middleware = r, this.modelConfig = n, this.inferenceReason = s;
    }
    getExecutor(e) {
        const t = new H(e), r = new K(t, this.client, this.requestedModel, this.modelConfig, this.inferenceReason);
        return new Y(this.middleware ? this.middleware(r) : r);
    }
    getModelId() {
        return this.requestedModel.modelId;
    }
}
class X {
    constructor(e, t, r, n){
        this.client = e, this.requestedModel = t, this.modelConfig = r, this.inferenceReason = n;
    }
    getSession(e) {
        return new Z(this.client, this.requestedModel, e, this.modelConfig, this.inferenceReason);
    }
    getProviderName() {
        return "proto";
    }
    getModelId() {
        return this.requestedModel.modelId;
    }
    getThinkingDetails() {}
}
function ee(e, t, r, n) {
    return new X(e, t, r, n);
}

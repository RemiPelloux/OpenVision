"use strict";
require.d(exports, {
    ng: ()=>Ke,
    uK: ()=>tt,
    Je: ()=>rt,
    $B: ()=>Xe,
    _x: ()=>Ye
});
var n = require("./module-73024.js"), s = require("./module-65716.js"), o = require("./module-13874.js"), i = require("./module-95831.js"), a = require("./module-12257.js"), c = require("./module-40095.js"), l = require("./module-29017.js"), u = require("./module-81958.js");
function d(e) {
    var t, r;
    return null != (r = null == (t = null == e ? void 0 : e.content) ? void 0 : t.map(({ token: e, logprob: t, top_logprobs: r })=>({
            token: e,
            logprob: t,
            topLogprobs: r ? r.map(({ token: e, logprob: t })=>({
                    token: e,
                    logprob: t
                })) : []
        }))) ? r : void 0;
}
function p(e) {
    switch(e){
        case "stop":
            return "stop";
        case "length":
            return "length";
        case "content_filter":
            return "content-filter";
        case "function_call":
        case "tool_calls":
            return "tool-calls";
        default:
            return "unknown";
    }
}
var m = u.Ik({
    error: u.Ik({
        message: u.Yj(),
        type: u.Yj().nullish(),
        param: u.bz().nullish(),
        code: u.KC([
            u.Yj(),
            u.ai()
        ]).nullish()
    })
}), h = (0, c.sl)({
    errorSchema: m,
    errorToMessage: (e)=>e.error.message
});
function f({ id: e, model: t, created: r }) {
    return {
        id: null != e ? e : void 0,
        modelId: null != t ? t : void 0,
        timestamp: null != r ? new Date(1e3 * r) : void 0
    };
}
var g = class {
    constructor(e, t, r){
        this.specificationVersion = "v1", this.modelId = e, this.settings = t, this.config = r;
    }
    get supportsStructuredOutputs() {
        var e;
        return null != (e = this.settings.structuredOutputs) ? e : _(this.modelId);
    }
    get defaultObjectGenerationMode() {
        return this.modelId.startsWith("gpt-4o-audio-preview") ? "tool" : this.supportsStructuredOutputs ? "json" : "tool";
    }
    get provider() {
        return this.config.provider;
    }
    get supportsImageUrls() {
        return !this.settings.downloadImages;
    }
    getArgs({ mode: e, prompt: t, maxTokens: r, temperature: n, topP: s, topK: o, frequencyPenalty: i, presencePenalty: a, stopSequences: u, responseFormat: d, seed: p, providerMetadata: m }) {
        var h, f, g, y, w, v, S, b;
        const E = e.type, I = [];
        null != o && I.push({
            type: "unsupported-setting",
            setting: "topK"
        }), "json" !== (null == d ? void 0 : d.type) || null == d.schema || this.supportsStructuredOutputs || I.push({
            type: "unsupported-setting",
            setting: "responseFormat",
            details: "JSON response format schema is only supported with structuredOutputs"
        });
        const C = this.settings.useLegacyFunctionCalling;
        if (C && !0 === this.settings.parallelToolCalls) throw new l.b8({
            functionality: "useLegacyFunctionCalling with parallelToolCalls"
        });
        if (C && this.supportsStructuredOutputs) throw new l.b8({
            functionality: "structuredOutputs with useLegacyFunctionCalling"
        });
        const { messages: k, warnings: x } = function({ prompt: e, useLegacyFunctionCalling: t = !1, systemMessageMode: r = "system" }) {
            const n = [], s = [];
            for (const { role: o, content: i } of e)switch(o){
                case "system":
                    switch(r){
                        case "system":
                            n.push({
                                role: "system",
                                content: i
                            });
                            break;
                        case "developer":
                            n.push({
                                role: "developer",
                                content: i
                            });
                            break;
                        case "remove":
                            s.push({
                                type: "other",
                                message: "system messages are removed for this model"
                            });
                            break;
                        default:
                            throw new Error(`Unsupported system message mode: ${r}`);
                    }
                    break;
                case "user":
                    if (1 === i.length && "text" === i[0].type) {
                        n.push({
                            role: "user",
                            content: i[0].text
                        });
                        break;
                    }
                    n.push({
                        role: "user",
                        content: i.map((e, t)=>{
                            var r, n, s, o;
                            switch(e.type){
                                case "text":
                                    return {
                                        type: "text",
                                        text: e.text
                                    };
                                case "image":
                                    return {
                                        type: "image_url",
                                        image_url: {
                                            url: e.image instanceof URL ? e.image.toString() : `data:${null != (r = e.mimeType) ? r : "image/jpeg"};base64,${(0, c.n_)(e.image)}`,
                                            detail: null == (s = null == (n = e.providerMetadata) ? void 0 : n.openai) ? void 0 : s.imageDetail
                                        }
                                    };
                                case "file":
                                    if (e.data instanceof URL) throw new l.b8({
                                        functionality: "'File content parts with URL data' functionality not supported."
                                    });
                                    switch(e.mimeType){
                                        case "audio/wav":
                                            return {
                                                type: "input_audio",
                                                input_audio: {
                                                    data: e.data,
                                                    format: "wav"
                                                }
                                            };
                                        case "audio/mp3":
                                        case "audio/mpeg":
                                            return {
                                                type: "input_audio",
                                                input_audio: {
                                                    data: e.data,
                                                    format: "mp3"
                                                }
                                            };
                                        case "application/pdf":
                                            return {
                                                type: "file",
                                                file: {
                                                    filename: null != (o = e.filename) ? o : `part-${t}.pdf`,
                                                    file_data: `data:application/pdf;base64,${e.data}`
                                                }
                                            };
                                        default:
                                            throw new l.b8({
                                                functionality: `File content part type ${e.mimeType} in user messages`
                                            });
                                    }
                            }
                        })
                    });
                    break;
                case "assistant":
                    {
                        let e = "";
                        const r = [];
                        for (const t of i)switch(t.type){
                            case "text":
                                e += t.text;
                                break;
                            case "tool-call":
                                r.push({
                                    id: t.toolCallId,
                                    type: "function",
                                    function: {
                                        name: t.toolName,
                                        arguments: JSON.stringify(t.args)
                                    }
                                });
                        }
                        if (t) {
                            if (r.length > 1) throw new l.b8({
                                functionality: "useLegacyFunctionCalling with multiple tool calls in one message"
                            });
                            n.push({
                                role: "assistant",
                                content: e,
                                function_call: r.length > 0 ? r[0].function : void 0
                            });
                        } else n.push({
                            role: "assistant",
                            content: e,
                            tool_calls: r.length > 0 ? r : void 0
                        });
                        break;
                    }
                case "tool":
                    for (const e of i)t ? n.push({
                        role: "function",
                        name: e.toolName,
                        content: "string" == typeof e.result ? e.result : JSON.stringify(e.result)
                    }) : n.push({
                        role: "tool",
                        tool_call_id: e.toolCallId,
                        content: "string" == typeof e.result ? e.result : JSON.stringify(e.result)
                    });
                    break;
                default:
                    throw new Error(`Unsupported role: ${o}`);
            }
            return {
                messages: n,
                warnings: s
            };
        }({
            prompt: t,
            useLegacyFunctionCalling: C,
            systemMessageMode: A(this.modelId)
        });
        I.push(...x);
        const T = {
            model: this.modelId,
            logit_bias: this.settings.logitBias,
            logprobs: !0 === this.settings.logprobs || "number" == typeof this.settings.logprobs || void 0,
            top_logprobs: "number" == typeof this.settings.logprobs ? this.settings.logprobs : "boolean" == typeof this.settings.logprobs && this.settings.logprobs ? 0 : void 0,
            user: this.settings.user,
            parallel_tool_calls: this.settings.parallelToolCalls,
            max_tokens: r,
            temperature: n,
            top_p: s,
            frequency_penalty: i,
            presence_penalty: a,
            response_format: "json" === (null == d ? void 0 : d.type) ? this.supportsStructuredOutputs && null != d.schema ? {
                type: "json_schema",
                json_schema: {
                    schema: d.schema,
                    strict: !0,
                    name: null != (h = d.name) ? h : "response",
                    description: d.description
                }
            } : {
                type: "json_object"
            } : void 0,
            stop: u,
            seed: p,
            max_completion_tokens: null == (f = null == m ? void 0 : m.openai) ? void 0 : f.maxCompletionTokens,
            store: null == (g = null == m ? void 0 : m.openai) ? void 0 : g.store,
            metadata: null == (y = null == m ? void 0 : m.openai) ? void 0 : y.metadata,
            prediction: null == (w = null == m ? void 0 : m.openai) ? void 0 : w.prediction,
            reasoning_effort: null != (S = null == (v = null == m ? void 0 : m.openai) ? void 0 : v.reasoningEffort) ? S : this.settings.reasoningEffort,
            messages: k
        };
        switch(_(this.modelId) ? (null != T.temperature && (T.temperature = void 0, I.push({
            type: "unsupported-setting",
            setting: "temperature",
            details: "temperature is not supported for reasoning models"
        })), null != T.top_p && (T.top_p = void 0, I.push({
            type: "unsupported-setting",
            setting: "topP",
            details: "topP is not supported for reasoning models"
        })), null != T.frequency_penalty && (T.frequency_penalty = void 0, I.push({
            type: "unsupported-setting",
            setting: "frequencyPenalty",
            details: "frequencyPenalty is not supported for reasoning models"
        })), null != T.presence_penalty && (T.presence_penalty = void 0, I.push({
            type: "unsupported-setting",
            setting: "presencePenalty",
            details: "presencePenalty is not supported for reasoning models"
        })), null != T.logit_bias && (T.logit_bias = void 0, I.push({
            type: "other",
            message: "logitBias is not supported for reasoning models"
        })), null != T.logprobs && (T.logprobs = void 0, I.push({
            type: "other",
            message: "logprobs is not supported for reasoning models"
        })), null != T.top_logprobs && (T.top_logprobs = void 0, I.push({
            type: "other",
            message: "topLogprobs is not supported for reasoning models"
        })), null != T.max_tokens && (null == T.max_completion_tokens && (T.max_completion_tokens = T.max_tokens), T.max_tokens = void 0)) : (this.modelId.startsWith("gpt-4o-search-preview") || this.modelId.startsWith("gpt-4o-mini-search-preview")) && null != T.temperature && (T.temperature = void 0, I.push({
            type: "unsupported-setting",
            setting: "temperature",
            details: "temperature is not supported for the search preview models and has been removed."
        })), E){
            case "regular":
                {
                    const { tools: t, tool_choice: r, functions: n, function_call: s, toolWarnings: o } = function({ mode: e, useLegacyFunctionCalling: t = !1, structuredOutputs: r }) {
                        var n;
                        const s = (null == (n = e.tools) ? void 0 : n.length) ? e.tools : void 0, o = [];
                        if (null == s) return {
                            tools: void 0,
                            tool_choice: void 0,
                            toolWarnings: o
                        };
                        const i = e.toolChoice;
                        if (t) {
                            const e = [];
                            for (const t of s)"provider-defined" === t.type ? o.push({
                                type: "unsupported-tool",
                                tool: t
                            }) : e.push({
                                name: t.name,
                                description: t.description,
                                parameters: t.parameters
                            });
                            if (null == i) return {
                                functions: e,
                                function_call: void 0,
                                toolWarnings: o
                            };
                            switch(i.type){
                                case "auto":
                                case "none":
                                case void 0:
                                    return {
                                        functions: e,
                                        function_call: void 0,
                                        toolWarnings: o
                                    };
                                case "required":
                                    throw new l.b8({
                                        functionality: "useLegacyFunctionCalling and toolChoice: required"
                                    });
                                default:
                                    return {
                                        functions: e,
                                        function_call: {
                                            name: i.toolName
                                        },
                                        toolWarnings: o
                                    };
                            }
                        }
                        const a = [];
                        for (const e of s)"provider-defined" === e.type ? o.push({
                            type: "unsupported-tool",
                            tool: e
                        }) : a.push({
                            type: "function",
                            function: {
                                name: e.name,
                                description: e.description,
                                parameters: e.parameters,
                                strict: !!r || void 0
                            }
                        });
                        if (null == i) return {
                            tools: a,
                            tool_choice: void 0,
                            toolWarnings: o
                        };
                        const c = i.type;
                        switch(c){
                            case "auto":
                            case "none":
                            case "required":
                                return {
                                    tools: a,
                                    tool_choice: c,
                                    toolWarnings: o
                                };
                            case "tool":
                                return {
                                    tools: a,
                                    tool_choice: {
                                        type: "function",
                                        function: {
                                            name: i.toolName
                                        }
                                    },
                                    toolWarnings: o
                                };
                            default:
                                {
                                    const e = c;
                                    throw new l.b8({
                                        functionality: `Unsupported tool choice type: ${e}`
                                    });
                                }
                        }
                    }({
                        mode: e,
                        useLegacyFunctionCalling: C,
                        structuredOutputs: this.supportsStructuredOutputs
                    });
                    return {
                        args: {
                            ...T,
                            tools: t,
                            tool_choice: r,
                            functions: n,
                            function_call: s
                        },
                        warnings: [
                            ...I,
                            ...o
                        ]
                    };
                }
            case "object-json":
                return {
                    args: {
                        ...T,
                        response_format: this.supportsStructuredOutputs && null != e.schema ? {
                            type: "json_schema",
                            json_schema: {
                                schema: e.schema,
                                strict: !0,
                                name: null != (b = e.name) ? b : "response",
                                description: e.description
                            }
                        } : {
                            type: "json_object"
                        }
                    },
                    warnings: I
                };
            case "object-tool":
                return {
                    args: C ? {
                        ...T,
                        function_call: {
                            name: e.tool.name
                        },
                        functions: [
                            {
                                name: e.tool.name,
                                description: e.tool.description,
                                parameters: e.tool.parameters
                            }
                        ]
                    } : {
                        ...T,
                        tool_choice: {
                            type: "function",
                            function: {
                                name: e.tool.name
                            }
                        },
                        tools: [
                            {
                                type: "function",
                                function: {
                                    name: e.tool.name,
                                    description: e.tool.description,
                                    parameters: e.tool.parameters,
                                    strict: !!this.supportsStructuredOutputs || void 0
                                }
                            }
                        ]
                    },
                    warnings: I
                };
            default:
                throw new Error(`Unsupported type: ${E}`);
        }
    }
    async doGenerate(e) {
        var t, r, n, s, o, i, a, l;
        const { args: u, warnings: m } = this.getArgs(e), { responseHeaders: g, value: y, rawValue: v } = await (0, c.GU)({
            url: this.config.url({
                path: "/chat/completions",
                modelId: this.modelId
            }),
            headers: (0, c.m2)(this.config.headers(), e.headers),
            body: u,
            failedResponseHandler: h,
            successfulResponseHandler: (0, c.cV)(w),
            abortSignal: e.abortSignal,
            fetch: this.config.fetch
        }), { messages: _, ...A } = u, S = y.choices[0], b = null == (t = y.usage) ? void 0 : t.completion_tokens_details, E = null == (r = y.usage) ? void 0 : r.prompt_tokens_details, I = {
            openai: {}
        };
        return null != (null == b ? void 0 : b.reasoning_tokens) && (I.openai.reasoningTokens = null == b ? void 0 : b.reasoning_tokens), null != (null == b ? void 0 : b.accepted_prediction_tokens) && (I.openai.acceptedPredictionTokens = null == b ? void 0 : b.accepted_prediction_tokens), null != (null == b ? void 0 : b.rejected_prediction_tokens) && (I.openai.rejectedPredictionTokens = null == b ? void 0 : b.rejected_prediction_tokens), null != (null == E ? void 0 : E.cached_tokens) && (I.openai.cachedPromptTokens = null == E ? void 0 : E.cached_tokens), {
            text: null != (n = S.message.content) ? n : void 0,
            toolCalls: this.settings.useLegacyFunctionCalling && S.message.function_call ? [
                {
                    toolCallType: "function",
                    toolCallId: (0, c.$C)(),
                    toolName: S.message.function_call.name,
                    args: S.message.function_call.arguments
                }
            ] : null == (s = S.message.tool_calls) ? void 0 : s.map((e)=>{
                var t;
                return {
                    toolCallType: "function",
                    toolCallId: null != (t = e.id) ? t : (0, c.$C)(),
                    toolName: e.function.name,
                    args: e.function.arguments
                };
            }),
            finishReason: p(S.finish_reason),
            usage: {
                promptTokens: null != (i = null == (o = y.usage) ? void 0 : o.prompt_tokens) ? i : NaN,
                completionTokens: null != (l = null == (a = y.usage) ? void 0 : a.completion_tokens) ? l : NaN
            },
            rawCall: {
                rawPrompt: _,
                rawSettings: A
            },
            rawResponse: {
                headers: g,
                body: v
            },
            request: {
                body: JSON.stringify(u)
            },
            response: f(y),
            warnings: m,
            logprobs: d(S.logprobs),
            providerMetadata: I
        };
    }
    async doStream(e) {
        if (this.settings.simulateStreaming) {
            const t = await this.doGenerate(e);
            return {
                stream: new ReadableStream({
                    start (e) {
                        if (e.enqueue({
                            type: "response-metadata",
                            ...t.response
                        }), t.text && e.enqueue({
                            type: "text-delta",
                            textDelta: t.text
                        }), t.toolCalls) for (const r of t.toolCalls)e.enqueue({
                            type: "tool-call-delta",
                            toolCallType: "function",
                            toolCallId: r.toolCallId,
                            toolName: r.toolName,
                            argsTextDelta: r.args
                        }), e.enqueue({
                            type: "tool-call",
                            ...r
                        });
                        e.enqueue({
                            type: "finish",
                            finishReason: t.finishReason,
                            usage: t.usage,
                            logprobs: t.logprobs,
                            providerMetadata: t.providerMetadata
                        }), e.close();
                    }
                }),
                rawCall: t.rawCall,
                rawResponse: t.rawResponse,
                warnings: t.warnings
            };
        }
        const { args: t, warnings: r } = this.getArgs(e), n = {
            ...t,
            stream: !0,
            stream_options: "strict" === this.config.compatibility ? {
                include_usage: !0
            } : void 0
        }, { responseHeaders: s, value: o } = await (0, c.GU)({
            url: this.config.url({
                path: "/chat/completions",
                modelId: this.modelId
            }),
            headers: (0, c.m2)(this.config.headers(), e.headers),
            body: n,
            failedResponseHandler: h,
            successfulResponseHandler: (0, c.Ds)(v),
            abortSignal: e.abortSignal,
            fetch: this.config.fetch
        }), { messages: i, ...a } = t, u = [];
        let m, g = "unknown", y = {
            promptTokens: void 0,
            completionTokens: void 0
        }, w = !0;
        const { useLegacyFunctionCalling: _ } = this.settings, A = {
            openai: {}
        };
        return {
            stream: o.pipeThrough(new TransformStream({
                transform (e, t) {
                    var r, n, s, o, i, a, h, v, S, b, E, I;
                    if (!e.success) return g = "error", void t.enqueue({
                        type: "error",
                        error: e.error
                    });
                    const C = e.value;
                    if ("error" in C) return g = "error", void t.enqueue({
                        type: "error",
                        error: C.error
                    });
                    if (w && (w = !1, t.enqueue({
                        type: "response-metadata",
                        ...f(C)
                    })), null != C.usage) {
                        const { prompt_tokens: e, completion_tokens: t, prompt_tokens_details: r, completion_tokens_details: n } = C.usage;
                        y = {
                            promptTokens: null != e ? e : void 0,
                            completionTokens: null != t ? t : void 0
                        }, null != (null == n ? void 0 : n.reasoning_tokens) && (A.openai.reasoningTokens = null == n ? void 0 : n.reasoning_tokens), null != (null == n ? void 0 : n.accepted_prediction_tokens) && (A.openai.acceptedPredictionTokens = null == n ? void 0 : n.accepted_prediction_tokens), null != (null == n ? void 0 : n.rejected_prediction_tokens) && (A.openai.rejectedPredictionTokens = null == n ? void 0 : n.rejected_prediction_tokens), null != (null == r ? void 0 : r.cached_tokens) && (A.openai.cachedPromptTokens = null == r ? void 0 : r.cached_tokens);
                    }
                    const k = C.choices[0];
                    if (null != (null == k ? void 0 : k.finish_reason) && (g = p(k.finish_reason)), null == (null == k ? void 0 : k.delta)) return;
                    const x = k.delta;
                    null != x.content && t.enqueue({
                        type: "text-delta",
                        textDelta: x.content
                    });
                    const T = d(null == k ? void 0 : k.logprobs);
                    (null == T ? void 0 : T.length) && (void 0 === m && (m = []), m.push(...T));
                    const R = _ && null != x.function_call ? [
                        {
                            type: "function",
                            id: (0, c.$C)(),
                            function: x.function_call,
                            index: 0
                        }
                    ] : x.tool_calls;
                    if (null != R) for (const e of R){
                        const d = e.index;
                        if (null == u[d]) {
                            if ("function" !== e.type) throw new l.xn({
                                data: e,
                                message: "Expected 'function' type."
                            });
                            if (null == e.id) throw new l.xn({
                                data: e,
                                message: "Expected 'id' to be a string."
                            });
                            if (null == (null == (r = e.function) ? void 0 : r.name)) throw new l.xn({
                                data: e,
                                message: "Expected 'function.name' to be a string."
                            });
                            u[d] = {
                                id: e.id,
                                type: "function",
                                function: {
                                    name: e.function.name,
                                    arguments: null != (n = e.function.arguments) ? n : ""
                                },
                                hasFinished: !1
                            };
                            const a = u[d];
                            null != (null == (s = a.function) ? void 0 : s.name) && null != (null == (o = a.function) ? void 0 : o.arguments) && (a.function.arguments.length > 0 && t.enqueue({
                                type: "tool-call-delta",
                                toolCallType: "function",
                                toolCallId: a.id,
                                toolName: a.function.name,
                                argsTextDelta: a.function.arguments
                            }), (0, c.v0)(a.function.arguments) && (t.enqueue({
                                type: "tool-call",
                                toolCallType: "function",
                                toolCallId: null != (i = a.id) ? i : (0, c.$C)(),
                                toolName: a.function.name,
                                args: a.function.arguments
                            }), a.hasFinished = !0));
                            continue;
                        }
                        const p = u[d];
                        p.hasFinished || (null != (null == (a = e.function) ? void 0 : a.arguments) && (p.function.arguments += null != (v = null == (h = e.function) ? void 0 : h.arguments) ? v : ""), t.enqueue({
                            type: "tool-call-delta",
                            toolCallType: "function",
                            toolCallId: p.id,
                            toolName: p.function.name,
                            argsTextDelta: null != (S = e.function.arguments) ? S : ""
                        }), null != (null == (b = p.function) ? void 0 : b.name) && null != (null == (E = p.function) ? void 0 : E.arguments) && (0, c.v0)(p.function.arguments) && (t.enqueue({
                            type: "tool-call",
                            toolCallType: "function",
                            toolCallId: null != (I = p.id) ? I : (0, c.$C)(),
                            toolName: p.function.name,
                            args: p.function.arguments
                        }), p.hasFinished = !0));
                    }
                },
                flush (e) {
                    var t, r;
                    e.enqueue({
                        type: "finish",
                        finishReason: g,
                        logprobs: m,
                        usage: {
                            promptTokens: null != (t = y.promptTokens) ? t : NaN,
                            completionTokens: null != (r = y.completionTokens) ? r : NaN
                        },
                        ...null != A ? {
                            providerMetadata: A
                        } : {}
                    });
                }
            })),
            rawCall: {
                rawPrompt: i,
                rawSettings: a
            },
            rawResponse: {
                headers: s
            },
            request: {
                body: JSON.stringify(n)
            },
            warnings: r
        };
    }
}, y = u.Ik({
    prompt_tokens: u.ai().nullish(),
    completion_tokens: u.ai().nullish(),
    prompt_tokens_details: u.Ik({
        cached_tokens: u.ai().nullish()
    }).nullish(),
    completion_tokens_details: u.Ik({
        reasoning_tokens: u.ai().nullish(),
        accepted_prediction_tokens: u.ai().nullish(),
        rejected_prediction_tokens: u.ai().nullish()
    }).nullish()
}).nullish(), w = u.Ik({
    id: u.Yj().nullish(),
    created: u.ai().nullish(),
    model: u.Yj().nullish(),
    choices: u.YO(u.Ik({
        message: u.Ik({
            role: u.eu("assistant").nullish(),
            content: u.Yj().nullish(),
            function_call: u.Ik({
                arguments: u.Yj(),
                name: u.Yj()
            }).nullish(),
            tool_calls: u.YO(u.Ik({
                id: u.Yj().nullish(),
                type: u.eu("function"),
                function: u.Ik({
                    name: u.Yj(),
                    arguments: u.Yj()
                })
            })).nullish()
        }),
        index: u.ai(),
        logprobs: u.Ik({
            content: u.YO(u.Ik({
                token: u.Yj(),
                logprob: u.ai(),
                top_logprobs: u.YO(u.Ik({
                    token: u.Yj(),
                    logprob: u.ai()
                }))
            })).nullable()
        }).nullish(),
        finish_reason: u.Yj().nullish()
    })),
    usage: y
}), v = u.KC([
    u.Ik({
        id: u.Yj().nullish(),
        created: u.ai().nullish(),
        model: u.Yj().nullish(),
        choices: u.YO(u.Ik({
            delta: u.Ik({
                role: u.k5([
                    "assistant"
                ]).nullish(),
                content: u.Yj().nullish(),
                function_call: u.Ik({
                    name: u.Yj().optional(),
                    arguments: u.Yj().optional()
                }).nullish(),
                tool_calls: u.YO(u.Ik({
                    index: u.ai(),
                    id: u.Yj().nullish(),
                    type: u.eu("function").nullish(),
                    function: u.Ik({
                        name: u.Yj().nullish(),
                        arguments: u.Yj().nullish()
                    })
                })).nullish()
            }).nullish(),
            logprobs: u.Ik({
                content: u.YO(u.Ik({
                    token: u.Yj(),
                    logprob: u.ai(),
                    top_logprobs: u.YO(u.Ik({
                        token: u.Yj(),
                        logprob: u.ai()
                    }))
                })).nullable()
            }).nullish(),
            finish_reason: u.Yj().nullish(),
            index: u.ai()
        })),
        usage: y
    }),
    m
]);
function _(e) {
    return e.startsWith("o");
}
function A(e) {
    var t, r;
    return _(e) ? null != (r = null == (t = S[e]) ? void 0 : t.systemMessageMode) ? r : "developer" : "system";
}
var S = {
    "o1-mini": {
        systemMessageMode: "remove"
    },
    "o1-mini-2024-09-12": {
        systemMessageMode: "remove"
    },
    "o1-preview": {
        systemMessageMode: "remove"
    },
    "o1-preview-2024-09-12": {
        systemMessageMode: "remove"
    },
    o3: {
        systemMessageMode: "developer"
    },
    "o3-2025-04-16": {
        systemMessageMode: "developer"
    },
    "o3-mini": {
        systemMessageMode: "developer"
    },
    "o3-mini-2025-01-31": {
        systemMessageMode: "developer"
    },
    "o4-mini": {
        systemMessageMode: "developer"
    },
    "o4-mini-2025-04-16": {
        systemMessageMode: "developer"
    }
};
function b(e) {
    return null == e ? void 0 : e.tokens.map((t, r)=>({
            token: t,
            logprob: e.token_logprobs[r],
            topLogprobs: e.top_logprobs ? Object.entries(e.top_logprobs[r]).map(([e, t])=>({
                    token: e,
                    logprob: t
                })) : []
        }));
}
var E = class {
    constructor(e, t, r){
        this.specificationVersion = "v1", this.defaultObjectGenerationMode = void 0, this.modelId = e, this.settings = t, this.config = r;
    }
    get provider() {
        return this.config.provider;
    }
    getArgs({ mode: e, inputFormat: t, prompt: r, maxTokens: n, temperature: s, topP: o, topK: i, frequencyPenalty: a, presencePenalty: c, stopSequences: u, responseFormat: d, seed: p }) {
        var m;
        const h = e.type, f = [];
        null != i && f.push({
            type: "unsupported-setting",
            setting: "topK"
        }), null != d && "text" !== d.type && f.push({
            type: "unsupported-setting",
            setting: "responseFormat",
            details: "JSON response format is not supported."
        });
        const { prompt: g, stopSequences: y } = function({ prompt: e, inputFormat: t, user: r = "user", assistant: n = "assistant" }) {
            if ("prompt" === t && 1 === e.length && "user" === e[0].role && 1 === e[0].content.length && "text" === e[0].content[0].type) return {
                prompt: e[0].content[0].text
            };
            let s = "";
            "system" === e[0].role && (s += `${e[0].content}\n\n`, e = e.slice(1));
            for (const { role: t, content: o } of e)switch(t){
                case "system":
                    throw new l.M3({
                        message: "Unexpected system message in prompt: ${content}",
                        prompt: e
                    });
                case "user":
                    s += `${r}:\n${o.map((e)=>{
                        switch(e.type){
                            case "text":
                                return e.text;
                            case "image":
                                throw new l.b8({
                                    functionality: "images"
                                });
                        }
                    }).join("")}\n\n`;
                    break;
                case "assistant":
                    s += `${n}:\n${o.map((e)=>{
                        switch(e.type){
                            case "text":
                                return e.text;
                            case "tool-call":
                                throw new l.b8({
                                    functionality: "tool-call messages"
                                });
                        }
                    }).join("")}\n\n`;
                    break;
                case "tool":
                    throw new l.b8({
                        functionality: "tool messages"
                    });
                default:
                    throw new Error(`Unsupported role: ${t}`);
            }
            return s += `${n}:\n`, {
                prompt: s,
                stopSequences: [
                    `\n${r}:`
                ]
            };
        }({
            prompt: r,
            inputFormat: t
        }), w = [
            ...null != y ? y : [],
            ...null != u ? u : []
        ], v = {
            model: this.modelId,
            echo: this.settings.echo,
            logit_bias: this.settings.logitBias,
            logprobs: "number" == typeof this.settings.logprobs ? this.settings.logprobs : "boolean" == typeof this.settings.logprobs && this.settings.logprobs ? 0 : void 0,
            suffix: this.settings.suffix,
            user: this.settings.user,
            max_tokens: n,
            temperature: s,
            top_p: o,
            frequency_penalty: a,
            presence_penalty: c,
            seed: p,
            prompt: g,
            stop: w.length > 0 ? w : void 0
        };
        switch(h){
            case "regular":
                if (null == (m = e.tools) ? void 0 : m.length) throw new l.b8({
                    functionality: "tools"
                });
                if (e.toolChoice) throw new l.b8({
                    functionality: "toolChoice"
                });
                return {
                    args: v,
                    warnings: f
                };
            case "object-json":
                throw new l.b8({
                    functionality: "object-json mode"
                });
            case "object-tool":
                throw new l.b8({
                    functionality: "object-tool mode"
                });
            default:
                throw new Error(`Unsupported type: ${h}`);
        }
    }
    async doGenerate(e) {
        const { args: t, warnings: r } = this.getArgs(e), { responseHeaders: n, value: s, rawValue: o } = await (0, c.GU)({
            url: this.config.url({
                path: "/completions",
                modelId: this.modelId
            }),
            headers: (0, c.m2)(this.config.headers(), e.headers),
            body: t,
            failedResponseHandler: h,
            successfulResponseHandler: (0, c.cV)(I),
            abortSignal: e.abortSignal,
            fetch: this.config.fetch
        }), { prompt: i, ...a } = t, l = s.choices[0];
        return {
            text: l.text,
            usage: {
                promptTokens: s.usage.prompt_tokens,
                completionTokens: s.usage.completion_tokens
            },
            finishReason: p(l.finish_reason),
            logprobs: b(l.logprobs),
            rawCall: {
                rawPrompt: i,
                rawSettings: a
            },
            rawResponse: {
                headers: n,
                body: o
            },
            response: f(s),
            warnings: r,
            request: {
                body: JSON.stringify(t)
            }
        };
    }
    async doStream(e) {
        const { args: t, warnings: r } = this.getArgs(e), n = {
            ...t,
            stream: !0,
            stream_options: "strict" === this.config.compatibility ? {
                include_usage: !0
            } : void 0
        }, { responseHeaders: s, value: o } = await (0, c.GU)({
            url: this.config.url({
                path: "/completions",
                modelId: this.modelId
            }),
            headers: (0, c.m2)(this.config.headers(), e.headers),
            body: n,
            failedResponseHandler: h,
            successfulResponseHandler: (0, c.Ds)(C),
            abortSignal: e.abortSignal,
            fetch: this.config.fetch
        }), { prompt: i, ...a } = t;
        let l, u = "unknown", d = {
            promptTokens: Number.NaN,
            completionTokens: Number.NaN
        }, m = !0;
        return {
            stream: o.pipeThrough(new TransformStream({
                transform (e, t) {
                    if (!e.success) return u = "error", void t.enqueue({
                        type: "error",
                        error: e.error
                    });
                    const r = e.value;
                    if ("error" in r) return u = "error", void t.enqueue({
                        type: "error",
                        error: r.error
                    });
                    m && (m = !1, t.enqueue({
                        type: "response-metadata",
                        ...f(r)
                    })), null != r.usage && (d = {
                        promptTokens: r.usage.prompt_tokens,
                        completionTokens: r.usage.completion_tokens
                    });
                    const n = r.choices[0];
                    null != (null == n ? void 0 : n.finish_reason) && (u = p(n.finish_reason)), null != (null == n ? void 0 : n.text) && t.enqueue({
                        type: "text-delta",
                        textDelta: n.text
                    });
                    const s = b(null == n ? void 0 : n.logprobs);
                    (null == s ? void 0 : s.length) && (void 0 === l && (l = []), l.push(...s));
                },
                flush (e) {
                    e.enqueue({
                        type: "finish",
                        finishReason: u,
                        logprobs: l,
                        usage: d
                    });
                }
            })),
            rawCall: {
                rawPrompt: i,
                rawSettings: a
            },
            rawResponse: {
                headers: s
            },
            warnings: r,
            request: {
                body: JSON.stringify(n)
            }
        };
    }
}, I = u.Ik({
    id: u.Yj().nullish(),
    created: u.ai().nullish(),
    model: u.Yj().nullish(),
    choices: u.YO(u.Ik({
        text: u.Yj(),
        finish_reason: u.Yj(),
        logprobs: u.Ik({
            tokens: u.YO(u.Yj()),
            token_logprobs: u.YO(u.ai()),
            top_logprobs: u.YO(u.g1(u.Yj(), u.ai())).nullable()
        }).nullish()
    })),
    usage: u.Ik({
        prompt_tokens: u.ai(),
        completion_tokens: u.ai()
    })
}), C = u.KC([
    u.Ik({
        id: u.Yj().nullish(),
        created: u.ai().nullish(),
        model: u.Yj().nullish(),
        choices: u.YO(u.Ik({
            text: u.Yj(),
            finish_reason: u.Yj().nullish(),
            index: u.ai(),
            logprobs: u.Ik({
                tokens: u.YO(u.Yj()),
                token_logprobs: u.YO(u.ai()),
                top_logprobs: u.YO(u.g1(u.Yj(), u.ai())).nullable()
            }).nullish()
        })),
        usage: u.Ik({
            prompt_tokens: u.ai(),
            completion_tokens: u.ai()
        }).nullish()
    }),
    m
]), k = class {
    constructor(e, t, r){
        this.specificationVersion = "v1", this.modelId = e, this.settings = t, this.config = r;
    }
    get provider() {
        return this.config.provider;
    }
    get maxEmbeddingsPerCall() {
        var e;
        return null != (e = this.settings.maxEmbeddingsPerCall) ? e : 2048;
    }
    get supportsParallelCalls() {
        var e;
        return null == (e = this.settings.supportsParallelCalls) || e;
    }
    async doEmbed({ values: e, headers: t, abortSignal: r }) {
        if (e.length > this.maxEmbeddingsPerCall) throw new l.Ch({
            provider: this.provider,
            modelId: this.modelId,
            maxEmbeddingsPerCall: this.maxEmbeddingsPerCall,
            values: e
        });
        const { responseHeaders: n, value: s } = await (0, c.GU)({
            url: this.config.url({
                path: "/embeddings",
                modelId: this.modelId
            }),
            headers: (0, c.m2)(this.config.headers(), t),
            body: {
                model: this.modelId,
                input: e,
                encoding_format: "float",
                dimensions: this.settings.dimensions,
                user: this.settings.user
            },
            failedResponseHandler: h,
            successfulResponseHandler: (0, c.cV)(x),
            abortSignal: r,
            fetch: this.config.fetch
        });
        return {
            embeddings: s.data.map((e)=>e.embedding),
            usage: s.usage ? {
                tokens: s.usage.prompt_tokens
            } : void 0,
            rawResponse: {
                headers: n
            }
        };
    }
}, x = u.Ik({
    data: u.YO(u.Ik({
        embedding: u.YO(u.ai())
    })),
    usage: u.Ik({
        prompt_tokens: u.ai()
    }).nullish()
}), T = {
    "dall-e-3": 1,
    "dall-e-2": 10,
    "gpt-image-1": 10
}, R = new Set([
    "gpt-image-1"
]), B = class {
    constructor(e, t, r){
        this.modelId = e, this.settings = t, this.config = r, this.specificationVersion = "v1";
    }
    get maxImagesPerCall() {
        var e, t;
        return null != (t = null != (e = this.settings.maxImagesPerCall) ? e : T[this.modelId]) ? t : 1;
    }
    get provider() {
        return this.config.provider;
    }
    async doGenerate({ prompt: e, n: t, size: r, aspectRatio: n, seed: s, providerOptions: o, headers: i, abortSignal: a }) {
        var l, u, d, p;
        const m = [];
        null != n && m.push({
            type: "unsupported-setting",
            setting: "aspectRatio",
            details: "This model does not support aspect ratio. Use `size` instead."
        }), null != s && m.push({
            type: "unsupported-setting",
            setting: "seed"
        });
        const f = null != (d = null == (u = null == (l = this.config._internal) ? void 0 : l.currentDate) ? void 0 : u.call(l)) ? d : new Date, { value: g, responseHeaders: y } = await (0, c.GU)({
            url: this.config.url({
                path: "/images/generations",
                modelId: this.modelId
            }),
            headers: (0, c.m2)(this.config.headers(), i),
            body: {
                model: this.modelId,
                prompt: e,
                n: t,
                size: r,
                ...null != (p = o.openai) ? p : {},
                ...R.has(this.modelId) ? {} : {
                    response_format: "b64_json"
                }
            },
            failedResponseHandler: h,
            successfulResponseHandler: (0, c.cV)(P),
            abortSignal: a,
            fetch: this.config.fetch
        });
        return {
            images: g.data.map((e)=>e.b64_json),
            warnings: m,
            response: {
                timestamp: f,
                modelId: this.modelId,
                headers: y
            }
        };
    }
}, P = u.Ik({
    data: u.YO(u.Ik({
        b64_json: u.Yj()
    }))
}), J = u.Ik({
    include: u.YO(u.Yj()).nullish(),
    language: u.Yj().nullish(),
    prompt: u.Yj().nullish(),
    temperature: u.ai().min(0).max(1).nullish().default(0),
    timestampGranularities: u.YO(u.k5([
        "word",
        "segment"
    ])).nullish().default([
        "segment"
    ])
}), M = {
    afrikaans: "af",
    arabic: "ar",
    armenian: "hy",
    azerbaijani: "az",
    belarusian: "be",
    bosnian: "bs",
    bulgarian: "bg",
    catalan: "ca",
    chinese: "zh",
    croatian: "hr",
    czech: "cs",
    danish: "da",
    dutch: "nl",
    english: "en",
    estonian: "et",
    finnish: "fi",
    french: "fr",
    galician: "gl",
    german: "de",
    greek: "el",
    hebrew: "he",
    hindi: "hi",
    hungarian: "hu",
    icelandic: "is",
    indonesian: "id",
    italian: "it",
    japanese: "ja",
    kannada: "kn",
    kazakh: "kk",
    korean: "ko",
    latvian: "lv",
    lithuanian: "lt",
    macedonian: "mk",
    malay: "ms",
    marathi: "mr",
    maori: "mi",
    nepali: "ne",
    norwegian: "no",
    persian: "fa",
    polish: "pl",
    portuguese: "pt",
    romanian: "ro",
    russian: "ru",
    serbian: "sr",
    slovak: "sk",
    slovenian: "sl",
    spanish: "es",
    swahili: "sw",
    swedish: "sv",
    tagalog: "tl",
    tamil: "ta",
    thai: "th",
    turkish: "tr",
    ukrainian: "uk",
    urdu: "ur",
    vietnamese: "vi",
    welsh: "cy"
}, q = class {
    constructor(e, t){
        this.modelId = e, this.config = t, this.specificationVersion = "v1";
    }
    get provider() {
        return this.config.provider;
    }
    getArgs({ audio: e, mediaType: t, providerOptions: r }) {
        var n, s, o, i, a;
        const l = (0, c.xI)({
            provider: "openai",
            providerOptions: r,
            schema: J
        }), u = new FormData, d = e instanceof Uint8Array ? new Blob([
            e
        ]) : new Blob([
            (0, c.Z9)(e)
        ]);
        if (u.append("model", this.modelId), u.append("file", new File([
            d
        ], "audio", {
            type: t
        })), l) {
            const e = {
                include: null != (n = l.include) ? n : void 0,
                language: null != (s = l.language) ? s : void 0,
                prompt: null != (o = l.prompt) ? o : void 0,
                temperature: null != (i = l.temperature) ? i : void 0,
                timestamp_granularities: null != (a = l.timestampGranularities) ? a : void 0
            };
            for(const t in e){
                const r = e[t];
                void 0 !== r && u.append(t, String(r));
            }
        }
        return {
            formData: u,
            warnings: []
        };
    }
    async doGenerate(e) {
        var t, r, n, s, o, i;
        const a = null != (n = null == (r = null == (t = this.config._internal) ? void 0 : t.currentDate) ? void 0 : r.call(t)) ? n : new Date, { formData: l, warnings: u } = this.getArgs(e), { value: d, responseHeaders: p, rawValue: m } = await (0, c.S)({
            url: this.config.url({
                path: "/audio/transcriptions",
                modelId: this.modelId
            }),
            headers: (0, c.m2)(this.config.headers(), e.headers),
            formData: l,
            failedResponseHandler: h,
            successfulResponseHandler: (0, c.cV)(D),
            abortSignal: e.abortSignal,
            fetch: this.config.fetch
        }), f = null != d.language && d.language in M ? M[d.language] : void 0;
        return {
            text: d.text,
            segments: null != (o = null == (s = d.words) ? void 0 : s.map((e)=>({
                    text: e.word,
                    startSecond: e.start,
                    endSecond: e.end
                }))) ? o : [],
            language: f,
            durationInSeconds: null != (i = d.duration) ? i : void 0,
            warnings: u,
            response: {
                timestamp: a,
                modelId: this.modelId,
                headers: p,
                body: m
            }
        };
    }
}, D = u.Ik({
    text: u.Yj(),
    language: u.Yj().nullish(),
    duration: u.ai().nullish(),
    words: u.YO(u.Ik({
        word: u.Yj(),
        start: u.ai(),
        end: u.ai()
    })).nullish()
});
function O(e) {
    const t = Array.isArray(e.content) ? e.content : [];
    return t.some((e)=>"image" === e.type) ? t.map((e)=>"image" === e.type ? {
            type: "input_image",
            image_url: /^(data:|https?:\/\/)/.test(e.data) ? e.data : `data:${"string" == typeof e.mimeType && "" !== e.mimeType.trim() ? e.mimeType : "image/png"};base64,${e.data}`,
            detail: "auto"
        } : {
            type: "input_text",
            text: e.text
        }) : void 0 === e.result ? t.filter((e)=>"text" === e.type).map((e)=>e.text).join("\n") : "string" == typeof e.result ? e.result : JSON.stringify(e.result);
}
function N({ finishReason: e, hasToolCalls: t }) {
    switch(e){
        case void 0:
        case null:
            return t ? "tool-calls" : "stop";
        case "max_output_tokens":
            return "length";
        case "content_filter":
            return "content-filter";
        default:
            return t ? "tool-calls" : "unknown";
    }
}
var F = class {
    constructor(e, t){
        this.specificationVersion = "v1", this.defaultObjectGenerationMode = "json", this.supportsStructuredOutputs = !0, this.modelId = e, this.config = t;
    }
    get provider() {
        return this.config.provider;
    }
    getArgs({ mode: e, maxTokens: t, temperature: r, stopSequences: n, topP: s, topK: o, presencePenalty: i, frequencyPenalty: a, seed: u, prompt: d, providerMetadata: p, responseFormat: m }) {
        var h, f, g;
        const y = [], w = function(e) {
            if (e.startsWith("o")) return e.startsWith("o1-mini") || e.startsWith("o1-preview") ? {
                isReasoningModel: !0,
                systemMessageMode: "remove",
                requiredAutoTruncation: !1
            } : {
                isReasoningModel: !0,
                systemMessageMode: "developer",
                requiredAutoTruncation: !1
            };
            return {
                isReasoningModel: !1,
                systemMessageMode: "system",
                requiredAutoTruncation: !1
            };
        }(this.modelId), v = e.type;
        null != o && y.push({
            type: "unsupported-setting",
            setting: "topK"
        }), null != u && y.push({
            type: "unsupported-setting",
            setting: "seed"
        }), null != i && y.push({
            type: "unsupported-setting",
            setting: "presencePenalty"
        }), null != a && y.push({
            type: "unsupported-setting",
            setting: "frequencyPenalty"
        }), null != n && y.push({
            type: "unsupported-setting",
            setting: "stopSequences"
        });
        const { messages: _, warnings: A } = function({ prompt: e, systemMessageMode: t }) {
            const r = [], n = [];
            for (const { role: s, content: o } of e)switch(s){
                case "system":
                    switch(t){
                        case "system":
                            r.push({
                                role: "system",
                                content: o
                            });
                            break;
                        case "developer":
                            r.push({
                                role: "developer",
                                content: o
                            });
                            break;
                        case "remove":
                            n.push({
                                type: "other",
                                message: "system messages are removed for this model"
                            });
                            break;
                        default:
                            throw new Error(`Unsupported system message mode: ${t}`);
                    }
                    break;
                case "user":
                    r.push({
                        role: "user",
                        content: o.map((e, t)=>{
                            var r, n, s, o;
                            switch(e.type){
                                case "text":
                                    return {
                                        type: "input_text",
                                        text: e.text
                                    };
                                case "image":
                                    return {
                                        type: "input_image",
                                        image_url: e.image instanceof URL ? e.image.toString() : `data:${null != (r = e.mimeType) ? r : "image/jpeg"};base64,${(0, c.n_)(e.image)}`,
                                        detail: null == (s = null == (n = e.providerMetadata) ? void 0 : n.openai) ? void 0 : s.imageDetail
                                    };
                                case "file":
                                    if (e.data instanceof URL) throw new l.b8({
                                        functionality: "File URLs in user messages"
                                    });
                                    if ("application/pdf" === e.mimeType) return {
                                        type: "input_file",
                                        filename: null != (o = e.filename) ? o : `part-${t}.pdf`,
                                        file_data: `data:application/pdf;base64,${e.data}`
                                    };
                                    throw new l.b8({
                                        functionality: "Only PDF files are supported in user messages"
                                    });
                            }
                        })
                    });
                    break;
                case "assistant":
                    for (const e of o)switch(e.type){
                        case "text":
                            r.push({
                                role: "assistant",
                                content: [
                                    {
                                        type: "output_text",
                                        text: e.text
                                    }
                                ]
                            });
                            break;
                        case "tool-call":
                            r.push({
                                type: "function_call",
                                call_id: e.toolCallId,
                                name: e.toolName,
                                arguments: JSON.stringify(e.args)
                            });
                    }
                    break;
                case "tool":
                    for (const e of o)r.push({
                        type: "function_call_output",
                        call_id: e.toolCallId,
                        output: O(e)
                    });
                    break;
                default:
                    throw new Error(`Unsupported role: ${s}`);
            }
            return {
                messages: r,
                warnings: n
            };
        }({
            prompt: d,
            systemMessageMode: w.systemMessageMode
        });
        y.push(...A);
        const S = (0, c.xI)({
            provider: "openai",
            providerOptions: p,
            schema: Y
        }), b = null == (h = null == S ? void 0 : S.strictSchemas) || h, E = {
            model: this.modelId,
            input: _,
            temperature: r,
            top_p: s,
            max_output_tokens: t,
            ..."json" === (null == m ? void 0 : m.type) && {
                text: {
                    format: null != m.schema ? {
                        type: "json_schema",
                        strict: b,
                        name: null != (f = m.name) ? f : "response",
                        description: m.description,
                        schema: m.schema
                    } : {
                        type: "json_object"
                    }
                }
            },
            metadata: null == S ? void 0 : S.metadata,
            parallel_tool_calls: null == S ? void 0 : S.parallelToolCalls,
            previous_response_id: null == S ? void 0 : S.previousResponseId,
            store: null == S ? void 0 : S.store,
            user: null == S ? void 0 : S.user,
            instructions: null == S ? void 0 : S.instructions,
            ...w.isReasoningModel && (null != (null == S ? void 0 : S.reasoningEffort) || null != (null == S ? void 0 : S.reasoningSummary)) && {
                reasoning: {
                    ...null != (null == S ? void 0 : S.reasoningEffort) && {
                        effort: S.reasoningEffort
                    },
                    ...null != (null == S ? void 0 : S.reasoningSummary) && {
                        summary: S.reasoningSummary
                    }
                }
            },
            ...w.requiredAutoTruncation && {
                truncation: "auto"
            }
        };
        switch(w.isReasoningModel && (null != E.temperature && (E.temperature = void 0, y.push({
            type: "unsupported-setting",
            setting: "temperature",
            details: "temperature is not supported for reasoning models"
        })), null != E.top_p && (E.top_p = void 0, y.push({
            type: "unsupported-setting",
            setting: "topP",
            details: "topP is not supported for reasoning models"
        }))), v){
            case "regular":
                {
                    const { tools: t, tool_choice: r, toolWarnings: n } = function({ mode: e, strict: t }) {
                        var r;
                        const n = (null == (r = e.tools) ? void 0 : r.length) ? e.tools : void 0, s = [];
                        if (null == n) return {
                            tools: void 0,
                            tool_choice: void 0,
                            toolWarnings: s
                        };
                        const o = e.toolChoice, i = [];
                        for (const e of n)switch(e.type){
                            case "function":
                                i.push({
                                    type: "function",
                                    name: e.name,
                                    description: e.description,
                                    parameters: e.parameters,
                                    strict: !!t || void 0
                                });
                                break;
                            case "provider-defined":
                                "openai.web_search_preview" === e.id ? i.push({
                                    type: "web_search_preview",
                                    search_context_size: e.args.searchContextSize,
                                    user_location: e.args.userLocation
                                }) : s.push({
                                    type: "unsupported-tool",
                                    tool: e
                                });
                                break;
                            default:
                                s.push({
                                    type: "unsupported-tool",
                                    tool: e
                                });
                        }
                        if (null == o) return {
                            tools: i,
                            tool_choice: void 0,
                            toolWarnings: s
                        };
                        const a = o.type;
                        switch(a){
                            case "auto":
                            case "none":
                            case "required":
                                return {
                                    tools: i,
                                    tool_choice: a,
                                    toolWarnings: s
                                };
                            case "tool":
                                return "web_search_preview" === o.toolName ? {
                                    tools: i,
                                    tool_choice: {
                                        type: "web_search_preview"
                                    },
                                    toolWarnings: s
                                } : {
                                    tools: i,
                                    tool_choice: {
                                        type: "function",
                                        name: o.toolName
                                    },
                                    toolWarnings: s
                                };
                            default:
                                {
                                    const e = a;
                                    throw new l.b8({
                                        functionality: `Unsupported tool choice type: ${e}`
                                    });
                                }
                        }
                    }({
                        mode: e,
                        strict: b
                    });
                    return {
                        args: {
                            ...E,
                            tools: t,
                            tool_choice: r
                        },
                        warnings: [
                            ...y,
                            ...n
                        ]
                    };
                }
            case "object-json":
                return {
                    args: {
                        ...E,
                        text: {
                            format: null != e.schema ? {
                                type: "json_schema",
                                strict: b,
                                name: null != (g = e.name) ? g : "response",
                                description: e.description,
                                schema: e.schema
                            } : {
                                type: "json_object"
                            }
                        }
                    },
                    warnings: y
                };
            case "object-tool":
                return {
                    args: {
                        ...E,
                        tool_choice: {
                            type: "function",
                            name: e.tool.name
                        },
                        tools: [
                            {
                                type: "function",
                                name: e.tool.name,
                                description: e.tool.description,
                                parameters: e.tool.parameters,
                                strict: b
                            }
                        ]
                    },
                    warnings: y
                };
            default:
                throw new Error(`Unsupported type: ${v}`);
        }
    }
    async doGenerate(e) {
        var t, r, n, s, o, i, a;
        const { args: d, warnings: p } = this.getArgs(e), m = this.config.url({
            path: "/responses",
            modelId: this.modelId
        }), { responseHeaders: f, value: g, rawValue: y } = await (0, c.GU)({
            url: m,
            headers: (0, c.m2)(this.config.headers(), e.headers),
            body: d,
            failedResponseHandler: h,
            successfulResponseHandler: (0, c.cV)(u.Ik({
                id: u.Yj(),
                created_at: u.ai(),
                error: u.Ik({
                    message: u.Yj(),
                    code: u.Yj()
                }).nullish(),
                model: u.Yj(),
                output: u.YO(u.gM("type", [
                    u.Ik({
                        type: u.eu("message"),
                        role: u.eu("assistant"),
                        content: u.YO(u.Ik({
                            type: u.eu("output_text"),
                            text: u.Yj(),
                            annotations: u.YO(u.Ik({
                                type: u.eu("url_citation"),
                                start_index: u.ai(),
                                end_index: u.ai(),
                                url: u.Yj(),
                                title: u.Yj()
                            }))
                        }))
                    }),
                    u.Ik({
                        type: u.eu("function_call"),
                        call_id: u.Yj(),
                        name: u.Yj(),
                        arguments: u.Yj()
                    }),
                    u.Ik({
                        type: u.eu("web_search_call")
                    }),
                    u.Ik({
                        type: u.eu("computer_call")
                    }),
                    u.Ik({
                        type: u.eu("reasoning"),
                        summary: u.YO(u.Ik({
                            type: u.eu("summary_text"),
                            text: u.Yj()
                        }))
                    })
                ])),
                incomplete_details: u.Ik({
                    reason: u.Yj()
                }).nullable(),
                usage: U
            })),
            abortSignal: e.abortSignal,
            fetch: this.config.fetch
        });
        if (g.error) throw new l.hL({
            message: g.error.message,
            url: m,
            requestBodyValues: d,
            statusCode: 400,
            responseHeaders: f,
            responseBody: y,
            isRetryable: !1
        });
        const w = g.output.filter((e)=>"message" === e.type).flatMap((e)=>e.content).filter((e)=>"output_text" === e.type), v = g.output.filter((e)=>"function_call" === e.type).map((e)=>({
                toolCallType: "function",
                toolCallId: e.call_id,
                toolName: e.name,
                args: e.arguments
            })), _ = null != (r = null == (t = g.output.find((e)=>"reasoning" === e.type)) ? void 0 : t.summary) ? r : null;
        return {
            text: w.map((e)=>e.text).join("\n"),
            sources: w.flatMap((e)=>e.annotations.map((e)=>{
                    var t, r, n;
                    return {
                        sourceType: "url",
                        id: null != (n = null == (r = (t = this.config).generateId) ? void 0 : r.call(t)) ? n : (0, c.$C)(),
                        url: e.url,
                        title: e.title
                    };
                })),
            finishReason: N({
                finishReason: null == (n = g.incomplete_details) ? void 0 : n.reason,
                hasToolCalls: v.length > 0
            }),
            toolCalls: v.length > 0 ? v : void 0,
            reasoning: _ ? _.map((e)=>({
                    type: "text",
                    text: e.text
                })) : void 0,
            usage: {
                promptTokens: g.usage.input_tokens,
                completionTokens: g.usage.output_tokens
            },
            rawCall: {
                rawPrompt: void 0,
                rawSettings: {}
            },
            rawResponse: {
                headers: f,
                body: y
            },
            request: {
                body: JSON.stringify(d)
            },
            response: {
                id: g.id,
                timestamp: new Date(1e3 * g.created_at),
                modelId: g.model
            },
            providerMetadata: {
                openai: {
                    responseId: g.id,
                    cachedPromptTokens: null != (o = null == (s = g.usage.input_tokens_details) ? void 0 : s.cached_tokens) ? o : null,
                    reasoningTokens: null != (a = null == (i = g.usage.output_tokens_details) ? void 0 : i.reasoning_tokens) ? a : null
                }
            },
            warnings: p
        };
    }
    async doStream(e) {
        const { args: t, warnings: r } = this.getArgs(e), { responseHeaders: n, value: s } = await (0, c.GU)({
            url: this.config.url({
                path: "/responses",
                modelId: this.modelId
            }),
            headers: (0, c.m2)(this.config.headers(), e.headers),
            body: {
                ...t,
                stream: !0
            },
            failedResponseHandler: h,
            successfulResponseHandler: (0, c.Ds)(K),
            abortSignal: e.abortSignal,
            fetch: this.config.fetch
        }), o = this;
        let i = "unknown", a = NaN, l = NaN, u = null, d = null, p = null;
        const m = {};
        let f = !1;
        const g = (e, t)=>{
            if (0 === e.argsText.length || t === e.argsText) return t;
            if (t.startsWith(e.argsText)) {
                const r = t.slice(e.argsText.length);
                if (0 === r.length || e.argsText.endsWith(r)) return e.argsText;
            }
            return t;
        };
        return {
            stream: s.pipeThrough(new TransformStream({
                transform (e, t) {
                    var r, n, s, h, y, w, v, _;
                    if (!e.success) return i = "error", void t.enqueue({
                        type: "error",
                        error: e.error
                    });
                    null != o.config.onResponseEvent && o.config.onResponseEvent(e.rawValue);
                    const A = e.value;
                    if (function(e) {
                        return "response.output_item.added" === e.type;
                    }(A)) "function_call" === A.item.type && (m[A.output_index] = {
                        toolName: A.item.name,
                        toolCallId: A.item.call_id,
                        argsText: A.item.arguments
                    }, A.item.arguments.length > 0 && t.enqueue({
                        type: "tool-call-delta",
                        toolCallType: "function",
                        toolCallId: A.item.call_id,
                        toolName: A.item.name,
                        argsTextDelta: A.item.arguments
                    }));
                    else if (function(e) {
                        return "response.function_call_arguments.delta" === e.type;
                    }(A)) {
                        const e = m[A.output_index];
                        if (null != e) {
                            const r = ((e, t)=>0 === t.length ? "" : 0 === e.argsText.length ? t : t.startsWith(e.argsText) ? t.slice(e.argsText.length) : t)(e, A.delta);
                            e.argsText += r, r.length > 0 && t.enqueue({
                                type: "tool-call-delta",
                                toolCallType: "function",
                                toolCallId: e.toolCallId,
                                toolName: e.toolName,
                                argsTextDelta: r
                            });
                        }
                    } else if (function(e) {
                        return "response.created" === e.type;
                    }(A)) p = A.response.id, t.enqueue({
                        type: "response-metadata",
                        id: A.response.id,
                        timestamp: new Date(1e3 * A.response.created_at),
                        modelId: A.response.model
                    });
                    else if (function(e) {
                        return "response.output_text.delta" === e.type;
                    }(A)) t.enqueue({
                        type: "text-delta",
                        textDelta: A.delta
                    });
                    else if (function(e) {
                        return "response.reasoning_summary_text.delta" === e.type;
                    }(A)) t.enqueue({
                        type: "reasoning",
                        textDelta: A.delta
                    });
                    else if (function(e) {
                        return "response.output_item.done" === e.type;
                    }(A) && "function_call" === A.item.type) {
                        const e = m[A.output_index];
                        m[A.output_index] = void 0, f = !0, t.enqueue({
                            type: "tool-call",
                            toolCallType: "function",
                            toolCallId: A.item.call_id,
                            toolName: A.item.name,
                            args: null != e ? g(e, A.item.arguments) : A.item.arguments
                        });
                    } else !function(e) {
                        return "response.completed" === e.type || "response.incomplete" === e.type;
                    }(A) ? !function(e) {
                        return "response.output_text.annotation.added" === e.type;
                    }(A) ? function(e) {
                        return "error" === e.type;
                    }(A) && t.enqueue({
                        type: "error",
                        error: A
                    }) : t.enqueue({
                        type: "source",
                        source: {
                            sourceType: "url",
                            id: null != (_ = null == (v = (w = o.config).generateId) ? void 0 : v.call(w)) ? _ : (0, c.$C)(),
                            url: A.annotation.url,
                            title: A.annotation.title
                        }
                    }) : (i = N({
                        finishReason: null == (r = A.response.incomplete_details) ? void 0 : r.reason,
                        hasToolCalls: f
                    }), a = A.response.usage.input_tokens, l = A.response.usage.output_tokens, u = null != (s = null == (n = A.response.usage.input_tokens_details) ? void 0 : n.cached_tokens) ? s : u, d = null != (y = null == (h = A.response.usage.output_tokens_details) ? void 0 : h.reasoning_tokens) ? y : d);
                },
                flush (e) {
                    e.enqueue({
                        type: "finish",
                        finishReason: i,
                        usage: {
                            promptTokens: a,
                            completionTokens: l
                        },
                        ...(null != u || null != d) && {
                            providerMetadata: {
                                openai: {
                                    responseId: p,
                                    cachedPromptTokens: u,
                                    reasoningTokens: d
                                }
                            }
                        }
                    });
                }
            })),
            rawCall: {
                rawPrompt: void 0,
                rawSettings: {}
            },
            rawResponse: {
                headers: n
            },
            request: {
                body: JSON.stringify(t)
            },
            warnings: r
        };
    }
}, U = u.Ik({
    input_tokens: u.ai(),
    input_tokens_details: u.Ik({
        cached_tokens: u.ai().nullish()
    }).nullish(),
    output_tokens: u.ai(),
    output_tokens_details: u.Ik({
        reasoning_tokens: u.ai().nullish()
    }).nullish()
}), L = u.Ik({
    type: u.eu("response.output_text.delta"),
    delta: u.Yj()
}), $ = u.Ik({
    type: u.k5([
        "response.completed",
        "response.incomplete"
    ]),
    response: u.Ik({
        incomplete_details: u.Ik({
            reason: u.Yj()
        }).nullish(),
        usage: U
    })
}), Q = u.Ik({
    type: u.eu("response.created"),
    response: u.Ik({
        id: u.Yj(),
        created_at: u.ai(),
        model: u.Yj()
    })
}), j = u.Ik({
    type: u.eu("response.output_item.done"),
    output_index: u.ai(),
    item: u.gM("type", [
        u.Ik({
            type: u.eu("message")
        }),
        u.Ik({
            type: u.eu("function_call"),
            id: u.Yj(),
            call_id: u.Yj(),
            name: u.Yj(),
            arguments: u.Yj(),
            status: u.eu("completed")
        })
    ])
}), G = u.Ik({
    type: u.eu("response.function_call_arguments.delta"),
    item_id: u.Yj(),
    output_index: u.ai(),
    delta: u.Yj()
}), H = u.Ik({
    type: u.eu("response.output_item.added"),
    output_index: u.ai(),
    item: u.gM("type", [
        u.Ik({
            type: u.eu("message")
        }),
        u.Ik({
            type: u.eu("function_call"),
            id: u.Yj(),
            call_id: u.Yj(),
            name: u.Yj(),
            arguments: u.Yj()
        })
    ])
}), z = u.Ik({
    type: u.eu("response.output_text.annotation.added"),
    annotation: u.Ik({
        type: u.eu("url_citation"),
        url: u.Yj(),
        title: u.Yj()
    })
}), W = u.Ik({
    type: u.eu("response.reasoning_summary_text.delta"),
    item_id: u.Yj(),
    output_index: u.ai(),
    summary_index: u.ai(),
    delta: u.Yj()
}), V = u.Ik({
    type: u.eu("error"),
    code: u.Yj(),
    message: u.Yj(),
    param: u.Yj().nullish(),
    sequence_number: u.ai()
}), K = u.KC([
    L,
    $,
    Q,
    j,
    G,
    H,
    z,
    W,
    V,
    u.Ik({
        type: u.Yj()
    }).passthrough()
]);
var Y = u.Ik({
    metadata: u.bz().nullish(),
    parallelToolCalls: u.zM().nullish(),
    previousResponseId: u.Yj().nullish(),
    store: u.zM().nullish(),
    user: u.Yj().nullish(),
    reasoningEffort: u.Yj().nullish(),
    strictSchemas: u.zM().nullish(),
    instructions: u.Yj().nullish(),
    reasoningSummary: u.Yj().nullish()
}), Z = u.Ik({});
var X = {
    webSearchPreview: function({ searchContextSize: e, userLocation: t } = {}) {
        return {
            type: "provider-defined",
            id: "openai.web_search_preview",
            args: {
                searchContextSize: e,
                userLocation: t
            },
            parameters: Z
        };
    }
}, ee = u.Ik({
    instructions: u.Yj().nullish(),
    speed: u.ai().min(.25).max(4).default(1).nullish()
}), te = class {
    constructor(e, t){
        this.modelId = e, this.config = t, this.specificationVersion = "v1";
    }
    get provider() {
        return this.config.provider;
    }
    getArgs({ text: e, voice: t = "alloy", outputFormat: r = "mp3", speed: n, instructions: s, providerOptions: o }) {
        const i = [], a = (0, c.xI)({
            provider: "openai",
            providerOptions: o,
            schema: ee
        }), l = {
            model: this.modelId,
            input: e,
            voice: t,
            response_format: "mp3",
            speed: n,
            instructions: s
        };
        if (r && ([
            "mp3",
            "opus",
            "aac",
            "flac",
            "wav",
            "pcm"
        ].includes(r) ? l.response_format = r : i.push({
            type: "unsupported-setting",
            setting: "outputFormat",
            details: `Unsupported output format: ${r}. Using mp3 instead.`
        })), a) {
            const e = {};
            for(const t in e){
                const r = e[t];
                void 0 !== r && (l[t] = r);
            }
        }
        return {
            requestBody: l,
            warnings: i
        };
    }
    async doGenerate(e) {
        var t, r, n;
        const s = null != (n = null == (r = null == (t = this.config._internal) ? void 0 : t.currentDate) ? void 0 : r.call(t)) ? n : new Date, { requestBody: o, warnings: i } = this.getArgs(e), { value: a, responseHeaders: l, rawValue: u } = await (0, c.GU)({
            url: this.config.url({
                path: "/audio/speech",
                modelId: this.modelId
            }),
            headers: (0, c.m2)(this.config.headers(), e.headers),
            body: o,
            failedResponseHandler: h,
            successfulResponseHandler: (0, c.HD)(),
            abortSignal: e.abortSignal,
            fetch: this.config.fetch
        });
        return {
            audio: a,
            warnings: i,
            request: {
                body: JSON.stringify(o)
            },
            response: {
                timestamp: s,
                modelId: this.modelId,
                headers: l,
                body: u
            }
        };
    }
};
function re(e = {}) {
    var t, r, n;
    const s = null != (t = (0, c.ae)(e.baseURL)) ? t : "https://api.openai.com/v1", o = null != (r = e.compatibility) ? r : "compatible", i = null != (n = e.name) ? n : "openai", a = ()=>({
            Authorization: `Bearer ${(0, c.WL)({
                apiKey: e.apiKey,
                environmentVariableName: "OPENAI_API_KEY",
                description: "OpenAI"
            })}`,
            "OpenAI-Organization": e.organization,
            "OpenAI-Project": e.project,
            ...e.headers
        }), l = (t, r = {})=>new g(t, r, {
            provider: `${i}.chat`,
            url: ({ path: e })=>`${s}${e}`,
            headers: a,
            compatibility: o,
            fetch: e.fetch
        }), u = (t, r = {})=>new E(t, r, {
            provider: `${i}.completion`,
            url: ({ path: e })=>`${s}${e}`,
            headers: a,
            compatibility: o,
            fetch: e.fetch
        }), d = (t, r = {})=>new k(t, r, {
            provider: `${i}.embedding`,
            url: ({ path: e })=>`${s}${e}`,
            headers: a,
            fetch: e.fetch
        }), p = (t, r = {})=>new B(t, r, {
            provider: `${i}.image`,
            url: ({ path: e })=>`${s}${e}`,
            headers: a,
            fetch: e.fetch
        }), m = (t)=>new q(t, {
            provider: `${i}.transcription`,
            url: ({ path: e })=>`${s}${e}`,
            headers: a,
            fetch: e.fetch
        }), h = (t)=>new te(t, {
            provider: `${i}.speech`,
            url: ({ path: e })=>`${s}${e}`,
            headers: a,
            fetch: e.fetch
        }), f = (e, t)=>{
        if (new.target) throw new Error("The OpenAI model function cannot be called with the new keyword.");
        return "gpt-3.5-turbo-instruct" === e ? u(e, t) : l(e, t);
    }, y = function(e, t) {
        return f(e, t);
    };
    return y.languageModel = f, y.chat = l, y.completion = u, y.responses = (t)=>new F(t, {
            provider: `${i}.responses`,
            url: ({ path: e })=>`${s}${e}`,
            headers: a,
            fetch: e.fetch,
            onResponseEvent: e.onResponseEvent
        }), y.embedding = d, y.textEmbedding = d, y.textEmbeddingModel = d, y.image = p, y.imageModel = p, y.transcription = m, y.transcriptionModel = m, y.speech = h, y.speechModel = h, y.tools = X, y;
}
re({
    compatibility: "strict"
});
var ne = require("./module-6688.js"), se = require("./module-17392.js"), oe = require("./module-63307.js"), ie = require("./module-70569.js");
function ae(e, t) {
    if ("object" == typeof e && null !== e) {
        for (const [r, n] of Object.entries(e))if (r === t) return n;
    }
}
function ce(e) {
    if ("reasoning" !== ae(e, "type")) return;
    const t = ae(e, "id"), r = ae(e, "encrypted_content");
    return "string" == typeof t && "string" == typeof r ? {
        type: "reasoning",
        id: (0, oe.Be)(t) ?? t,
        encrypted_content: r,
        summary: []
    } : void 0;
}
function le(e) {
    try {
        return JSON.parse(e);
    } catch  {
        return;
    }
}
function ue() {
    const e = new Map;
    function t(t) {
        if ("response.output_item.done" !== ae(t, "type")) return;
        const n = ae(t, "item"), s = ce(n);
        if (void 0 === s) {
            if ("function_call" === ae(n, "type")) {
                const t = ae(n, "call_id");
                "string" == typeof t && void 0 !== r && (e.set((0, oe.vc)(t), r), r = void 0);
            }
        } else r = s;
    }
    let r;
    return {
        rewriteRequestBody (t) {
            if (0 === e.size) return t;
            let r;
            try {
                r = JSON.parse(t);
            } catch  {
                return t;
            }
            const n = ae(r, "input");
            if (!Array.isArray(n)) return t;
            const s = new Set;
            for (const e of n){
                const t = ce(e);
                void 0 !== t && s.add(t.id);
            }
            const o = [];
            let i = !1;
            for (const t of n){
                if ("function_call" === ae(t, "type")) {
                    const r = ae(t, "call_id"), n = "string" == typeof r ? e.get((0, oe.vc)(r)) : void 0;
                    void 0 === n || s.has(n.id) || (o.push(n), s.add(n.id), i = !0);
                }
                o.push(t);
            }
            return i ? JSON.stringify({
                ..."object" == typeof r && null !== r ? r : {},
                input: o
            }) : t;
        },
        observeResponse (n) {
            const s = n.headers.get("content-type") ?? "";
            if (null === n.body || !s.includes("text/event-stream")) return n;
            const o = n.clone();
            return null !== o.body && (async function(e) {
                const r = e.getReader(), n = new TextDecoder;
                let s = "";
                for(;;){
                    const { done: e, value: o } = await r.read();
                    if (e) break;
                    for(s += n.decode(o, {
                        stream: !0
                    });;){
                        const e = s.indexOf("\n");
                        if (-1 === e) break;
                        const r = s.slice(0, e).trim();
                        if (s = s.slice(e + 1), !r.startsWith("data: ")) continue;
                        const n = le(r.slice(6));
                        void 0 !== n && t(n);
                    }
                }
            })(o.body).catch(()=>{
                e.clear(), r = void 0;
            }), n;
        }
    };
}
var de = require("./module-22189.js");
class pe extends Error {
    constructor(e){
        super(`Provider stream ended without a terminal finish reason (finishReason=${e ?? "none"}) — connection likely dropped mid-stream`), this.name = "LocalIncompleteStreamError", this.finishReason = e;
    }
}
const me = new Set([
    "unknown"
]);
function he(e, t) {
    let r = 0;
    return {
        specificationVersion: e.specificationVersion,
        provider: e.provider,
        modelId: e.modelId,
        defaultObjectGenerationMode: e.defaultObjectGenerationMode,
        ...void 0 === e.supportsImageUrls ? {} : {
            supportsImageUrls: e.supportsImageUrls
        },
        ...void 0 === e.supportsStructuredOutputs ? {} : {
            supportsStructuredOutputs: e.supportsStructuredOutputs
        },
        ...void 0 === e.supportsUrl ? {} : {
            supportsUrl: e.supportsUrl.bind(e)
        },
        doGenerate: (t)=>e.doGenerate(t),
        doStream: async (n)=>{
            const s = await e.doStream(n);
            let o, i, a = !1, c = !1;
            const l = s.stream.pipeThrough(new TransformStream({
                transform (e, t) {
                    switch(e.type){
                        case "text-delta":
                            e.textDelta.trim().length > 0 && (a = !0);
                            break;
                        case "tool-call":
                            a = !0;
                            break;
                        case "finish":
                            o = e.finishReason, i = Number.isFinite(e.usage.completionTokens) ? e.usage.completionTokens : void 0;
                            break;
                        case "error":
                            c = !0;
                    }
                    t.enqueue(e);
                },
                flush () {
                    if (!c) {
                        if ("length" === o && !a) {
                            if (r += 1, 1 === r) throw new oe.YE(`Provider exceeded max output tokens: the gateway stopped the response at ${i ?? "its"} output tokens before any text or tool call`);
                            throw r = 0, function(e) {
                                const { model: t, maxOutputTokens: r, cutOffAt: n } = e, s = `[model."${t.id}"]`, o = void 0 === n ? "at its output limit" : `at ${fe(n)} output tokens`;
                                let i;
                                i = void 0 === r ? `Your gateway stopped ${t.displayName} ${o}, before it wrote a reply or a tool call, and stopped the retry that asked for smaller steps too. No output limit is set for this model, so the gateway's default applied. Set max_completion_tokens for ${s} in your private inference config, or raise the gateway's default, then try again.` : void 0 !== n && n < r ? `Your gateway stopped ${t.displayName} ${o}, before it wrote a reply or a tool call, although Cursor asked for up to ${fe(r)}. It stopped the retry that asked for smaller steps too. Raise this model's output token limit on the gateway, then try again.` : `${t.displayName} used all ${fe(r)} output tokens set for it before it wrote a reply or a tool call, and the retry that asked for smaller steps ran out too. Raise max_completion_tokens for ${s} in your private inference config, and the gateway's limit if it is lower, then try again.`;
                                return new se.SK(`Private inference response cut off at the output limit twice (model ${t.id}, cut off at ${n ?? "unknown"} output tokens, requested ${r ?? "none"})`, {
                                    ...void 0 === e.requestId ? {} : {
                                        requestId: e.requestId
                                    },
                                    displayInfo: {
                                        title: "Response cut off at the output limit",
                                        detail: i,
                                        isRetryable: !0
                                    }
                                });
                            }({
                                model: t.model,
                                maxOutputTokens: t.maxOutputTokens,
                                cutOffAt: i,
                                requestId: t.requestId
                            });
                        }
                        r = 0;
                    }
                }
            }));
            return {
                ...s,
                stream: l
            };
        }
    };
}
function fe(e) {
    return e.toLocaleString("en-US");
}
function ge(e, t, r, n = !1, s) {
    if ("string" != typeof e?.body) return e;
    try {
        const o = JSON.parse(e.body);
        if (!Ae(o)) return e;
        const i = {
            ...o
        };
        return delete i.temperature, delete i.reasoningEffort, function(e, t, r) {
            const n = function(e) {
                const t = e?.find((e)=>[
                        "reasoning",
                        "effort",
                        "thought_level"
                    ].includes(e.id))?.value;
                return void 0 === t || "" === t || "none" === t ? void 0 : t;
            }(t);
            if (void 0 === n) return;
            if (void 0 === r || !r.includes(n)) return delete e.reasoning, void delete e.reasoning_effort;
            e.reasoning = {
                ...Ae(e.reasoning) ? e.reasoning : {},
                effort: n
            }, delete e.reasoning_effort;
        }(i, t, r), void 0 !== s && void 0 === i.max_output_tokens && (i.max_output_tokens = s), n && function(e) {
            const t = Array.isArray(e.include) ? e.include : [];
            e.include = t.includes("reasoning.encrypted_content") ? t : [
                ...t,
                "reasoning.encrypted_content"
            ];
        }(i), function(e) {
            const t = e.input;
            if (!Array.isArray(t)) return;
            for (const e of t)Ae(e) && "string" == typeof e.call_id && (e.call_id = (0, oe.vc)(e.call_id));
        }(i), {
            ...e,
            body: JSON.stringify(i)
        };
    } catch  {
        return e;
    }
}
function ye(e, { imageNote: t }) {
    const r = _e(e);
    if (void 0 === r) return e;
    let n = !1;
    for (const e of r.input){
        if (!Ae(e) || "function_call_output" !== e.type) continue;
        const r = e.output;
        Array.isArray(r) && (e.output = r.map((e)=>ve(e, t)).join("\n"), n = !0);
    }
    return n ? JSON.stringify(r.body) : e;
}
function we(e) {
    return Ae(e) && "function_call_output" === e.type && Array.isArray(e.output);
}
function ve(e, t) {
    return !Ae(e) || "input_text" !== e.type && "output_text" !== e.type || "string" != typeof e.text ? t : e.text;
}
function _e(e) {
    try {
        const t = JSON.parse(e);
        if (!Ae(t)) return;
        const r = t.input;
        return Array.isArray(r) ? {
            body: t,
            input: r
        } : void 0;
    } catch  {
        return;
    }
}
function Ae(e) {
    return null !== e && "object" == typeof e && !Array.isArray(e);
}
var Se = require("./module-45904.js");
class be extends se.SK {
    constructor(e, t){
        super("Failed to record private inference usage", {
            ...t instanceof Error ? {
                cause: t
            } : {}
        }), this.usage = e;
    }
}
function Ee(e, t) {
    if ("object" == typeof e && null !== e) return Object.entries(e).find(([e])=>e === t)?.[1];
}
function Ie(e) {
    return "number" == typeof e && Number.isInteger(e) && e >= 0 && e <= 2147483647 ? e : void 0;
}
function Ce(e) {
    return null !== e && /^\d{1,10}$/.test(e) ? Ie(Number(e)) : void 0;
}
var ke = require("./module-37949.js"), xe = require("./module-33002.js");
const Te = 300, Re = "Re-run your credential helper's sign-in step (for example your SSO login), then send the message again.";
function Be(e) {
    if (!(e instanceof se.SK)) for (const t of function*(e) {
        const t = new Set, r = [
            e
        ];
        for(; r.length > 0;){
            const e = r.shift();
            e instanceof Error && !t.has(e) && (t.add(e), yield e, r.push(e.cause), "lastError" in e && r.push(e.lastError), "errors" in e && Array.isArray(e.errors) && r.push(...e.errors));
        }
    }(e)){
        if (t instanceof ie.xF) return new se.SK(t.message, {
            cause: e,
            displayInfo: {
                title: "Private inference credential helper failed",
                detail: Pe(t.message, Re),
                isRetryable: !1
            }
        });
        if (l.hL.isInstance(t) && void 0 !== t.statusCode && (0, de.V)(t.statusCode)) {
            const r = Je(t.url), n = Me(t.responseBody);
            return new se.SK(`Private inference gateway rejected the credential (HTTP ${t.statusCode})`, {
                cause: e,
                displayInfo: {
                    title: "Inference gateway rejected the credential",
                    detail: Pe(`The private inference gateway${void 0 === r ? "" : ` at ${r}`} returned HTTP ${t.statusCode}${void 0 === n ? "" : `: ${n}`}`, Re),
                    isRetryable: !1
                }
            });
        }
    }
}
function Pe(...e) {
    return e.map((e)=>e.trim()).filter((e)=>e.length > 0).map((e)=>/[.!?]$/u.test(e) ? e : `${e}.`).join(" ");
}
function Je(e) {
    if (void 0 !== e) try {
        return new URL(e).host;
    } catch  {
        return;
    }
}
function Me(e) {
    const t = e?.trim();
    if (t) return (0, ie.rg)(t).replace(/\s+/gu, " ").slice(0, Te);
}
const qe = (0, ke.h)("@anysphere/agent-host:provider-runtime");
function De(e) {
    return "number" == typeof e && Number.isFinite(e) ? e : 0;
}
function Oe(e, t) {
    return {
        getExecutor: (r)=>(function(e, t) {
                return new class extends oe.uo {
                    stream(...e) {
                        const [r, n, s, o] = e, i = super.stream(r, n, s, o), a = function() {
                            let e = ()=>{};
                            return {
                                promise: new Promise((t)=>{
                                    e = t;
                                }),
                                report: e
                            };
                        }(), c = Promise.race([
                            i.response.catch((e)=>{
                                throw $e(Le(e));
                            }),
                            a.promise.then((e)=>{
                                throw e;
                            })
                        ]), l = Promise.race([
                            i.invocationId,
                            a.promise.then(()=>n ?? crypto.randomUUID())
                        ]);
                        return Ne(r ?? (0, xe.q6)(), c, "response"), Ne(r ?? (0, xe.q6)(), l, "invocationId"), {
                            ...i,
                            fullStream: Fe(i.fullStream, a.report),
                            response: c,
                            usage: Promise.race([
                                i.usage,
                                a.promise.then(()=>({
                                        promptTokens: 0,
                                        completionTokens: 0,
                                        totalTokens: 0
                                    }))
                            ]).then((e)=>{
                                const t = De(e.promptTokens), r = De(e.completionTokens);
                                return {
                                    ...e,
                                    promptTokens: t,
                                    completionTokens: r,
                                    totalTokens: De(e.totalTokens) || t + r
                                };
                            }).catch(()=>({
                                    promptTokens: 0,
                                    completionTokens: 0,
                                    totalTokens: 0
                                })),
                            extendedUsage: Promise.all([
                                Promise.race([
                                    i.extendedUsage,
                                    a.promise.then(()=>({
                                            inputTokens: 0,
                                            outputTokens: 0,
                                            cacheReadTokens: 0,
                                            cacheWriteTokens: 0,
                                            maxTokens: 0
                                        }))
                                ]),
                                Promise.race([
                                    i.providerMetadata.catch((e)=>{
                                        qe.debug(r ?? (0, xe.q6)(), "Provider metadata unavailable", {
                                            error: String(e)
                                        });
                                    }),
                                    a.promise.then(()=>{})
                                ])
                            ]).then(([e, r])=>{
                                const n = r?.openai?.cachedPromptTokens;
                                return {
                                    inputTokens: De(e.inputTokens),
                                    outputTokens: De(e.outputTokens),
                                    cacheReadTokens: "number" == typeof n && Number.isFinite(n) ? n : De(e.cacheReadTokens),
                                    cacheWriteTokens: De(e.cacheWriteTokens),
                                    maxTokens: t ?? De(e.maxTokens)
                                };
                            }).catch(()=>({
                                    inputTokens: 0,
                                    outputTokens: 0,
                                    cacheReadTokens: 0,
                                    cacheWriteTokens: 0,
                                    maxTokens: t ?? 0
                                })),
                            invocationId: l
                        };
                    }
                }(e);
            })(e.getExecutor(r), t),
        getModelId: ()=>e.getModelId()
    };
}
function Ne(e, t, r) {
    t.catch((t)=>{
        qe.debug(e, "Model call result rejected", {
            result: r,
            error: String(t)
        });
    });
}
async function* Fe(e, t) {
    try {
        for await (const t of e){
            if (null !== t && "object" == typeof t && "type" in t && "error" === t.type) throw Ue(t);
            yield t;
        }
    } catch (e) {
        const r = $e(Le(e));
        throw t(r), r;
    }
}
function Ue(e) {
    if (!("error" in e)) return new Error("Local agent stream error");
    const t = e.error;
    return t instanceof Error ? t : null !== t && "object" == typeof t && "message" in t && "string" == typeof t.message ? new Error(t.message) : new Error("string" == typeof t ? t : "Local agent stream error");
}
function Le(e) {
    return e instanceof Error ? e : new Error(String(e));
}
function $e(e) {
    if (e instanceof oe.R1) return e;
    const t = Be(e);
    if (void 0 !== t) return t;
    if (!function(e) {
        let t = e;
        for(; t instanceof Error;){
            if ((0, oe.cc)(t.message)) return !0;
            if (l.hL.isInstance(t)) {
                if (413 === t.statusCode) return !0;
                if ("string" == typeof t.responseBody && (0, oe.cc)(t.responseBody)) return !0;
            }
            t = t.cause;
        }
        return !1;
    }(e)) return e;
    const r = new oe.R1(e.message);
    return r.cause = e, r;
}
const Qe = "[image omitted: this gateway accepts text tool results only]", je = "[image omitted: this model is not configured for image input; set vision = true on its private-inference.toml entry if it accepts images]";
function Ge() {
    const e = new Set, t = ({ baseUrl: e, modelId: t })=>`${e} ${t}`;
    return {
        isStrict: (r)=>e.has(t(r)),
        markStrict: (r)=>{
            e.add(t(r));
        }
    };
}
function He(e, t, r) {
    return async (n, s)=>{
        const o = s?.body;
        if ("string" != typeof o || !function(e) {
            return _e(e)?.input.some(we) ?? !1;
        }(o)) return e(n, s);
        if (!t.vision) return e(n, {
            ...s,
            body: ye(o, {
                imageNote: je
            })
        });
        if (r.isStrict(t)) return e(n, {
            ...s,
            body: ye(o, {
                imageNote: Qe
            })
        });
        const i = await e(n, s);
        if (!await async function(e) {
            if (!ze.has(e.status)) return !1;
            const t = await e.clone().text().catch(()=>"");
            return /function_call_output|\boutput\b/.test(t);
        }(i)) return i;
        i.body?.cancel().catch((e)=>{});
        const a = await e(n, {
            ...s,
            body: ye(o, {
                imageNote: Qe
            })
        });
        return a.ok && r.markStrict(t), a;
    };
}
const ze = new Set([
    400,
    422
]);
var We = require("./module-9771.js");
async function Ve(e) {
    const t = (await (0, a.Kt)({
        modelId: e.modelId,
        baseUrl: e.baseUrl,
        ...void 0 !== e.apiKey ? {
            apiKey: e.apiKey
        } : {},
        ...void 0 !== e.apiKeyHelper ? {
            apiKeyHelper: e.apiKeyHelper
        } : {},
        ...void 0 !== e.userAgent ? {
            userAgent: e.userAgent
        } : {},
        ...void 0 !== e.customHeaders ? {
            customHeaders: e.customHeaders
        } : {}
    }))?.entry, r = t?.modelId ?? e.modelId, n = t?.contextLength, s = he(function(e) {
        return {
            specificationVersion: e.specificationVersion,
            provider: e.provider,
            modelId: e.modelId,
            defaultObjectGenerationMode: e.defaultObjectGenerationMode,
            ...void 0 === e.supportsImageUrls ? {} : {
                supportsImageUrls: e.supportsImageUrls
            },
            ...void 0 === e.supportsStructuredOutputs ? {} : {
                supportsStructuredOutputs: e.supportsStructuredOutputs
            },
            ...void 0 === e.supportsUrl ? {} : {
                supportsUrl: e.supportsUrl.bind(e)
            },
            doGenerate: (t)=>e.doGenerate(t),
            doStream: async (t)=>{
                const r = await e.doStream(t);
                let n, s = !1, o = !1;
                const i = r.stream.pipeThrough(new TransformStream({
                    transform (e, t) {
                        "finish" === e.type ? n = e.finishReason : "error" === e.type ? s = !0 : "reasoning" === e.type ? o = !0 : "reasoning-signature" === e.type ? (o || t.enqueue({
                            type: "reasoning",
                            textDelta: ""
                        }), o = !1) : "redacted-reasoning" === e.type && (o = !1), t.enqueue(e);
                    },
                    flush () {
                        if (!s && (void 0 === n || me.has(n))) throw new pe(n);
                    }
                }));
                return {
                    ...r,
                    stream: i
                };
            }
        };
    }(function(e, t) {
        const r = function(e, t) {
            const r = void 0 === t.gatewayTiming ? fetch : (0, se.wq)(fetch, {
                ...t.gatewayTiming,
                modelId: t.modelId
            }), n = (0, We.l2)(t.userAgent, r, void 0 === t.gatewayRequestId ? t.customHeaders : (0, se.oo)(t.customHeaders, t.gatewayRequestId)), s = void 0 !== t.apiKeyHelper ? (0, de.G)(n, (0, ie.xU)(t.apiKeyHelper)) : n, o = He(s, {
                baseUrl: t.baseUrl,
                modelId: e,
                vision: t.vision ?? !0
            }, t.toolOutputLatch ?? Ge()), i = !0 === t.includeEncryptedReasoningContent ? ue() : void 0;
            return async (e, r)=>{
                const n = ge(r, t.modelParameters, t.configuredEffortValues, t.includeEncryptedReasoningContent, t.maxOutputTokens), s = void 0 !== i && "string" == typeof n?.body ? {
                    ...n,
                    body: i.rewriteRequestBody(n.body)
                } : n, a = await o(e, s);
                return void 0 !== i ? i.observeResponse(a) : a;
            };
        }(e, t), n = {
            baseURL: t.baseUrl,
            apiKey: t.apiKey ?? "local-agent",
            fetch: r
        }, s = re(n).responses(e), o = t.onUsage;
        if (void 0 === o) return s;
        return {
            specificationVersion: s.specificationVersion,
            provider: s.provider,
            modelId: s.modelId,
            defaultObjectGenerationMode: s.defaultObjectGenerationMode,
            ...void 0 === s.supportsImageUrls ? {} : {
                supportsImageUrls: s.supportsImageUrls
            },
            ...void 0 === s.supportsStructuredOutputs ? {} : {
                supportsStructuredOutputs: s.supportsStructuredOutputs
            },
            ...void 0 === s.supportsUrl ? {} : {
                supportsUrl: s.supportsUrl.bind(s)
            },
            doGenerate: (e)=>s.doGenerate(e),
            async doStream (t) {
                const s = function(e, t, r) {
                    const n = crypto.randomUUID(), s = new Se.kF;
                    let o, i, a, c, l = e, u = !1, d = !1, p = !1;
                    function m(e) {
                        if (void 0 !== c) return c;
                        if (p = !0, !u && void 0 === o) return c = Promise.resolve(), c;
                        const r = Date.now();
                        Object.freeze(s.inputTokensDetails), Object.freeze(s.outputTokensDetails), Object.freeze(s), Object.freeze(o);
                        const a = Object.freeze({
                            invocationId: n,
                            modelId: l,
                            get observedAt () {
                                return new Date(r);
                            },
                            status: i ?? (d ? Se.Ts.ERRORED : e),
                            usage: s,
                            ...void 0 === o ? {} : {
                                headerUsage: o
                            }
                        });
                        return c = Promise.resolve().then(()=>t(a)).catch((e)=>{
                            throw new be(a, e);
                        }), c;
                    }
                    function h(e) {
                        return m(!0 === r?.aborted || e instanceof Error && "AbortError" === e.name ? Se.Ts.ABORTED : Se.Ts.ERRORED);
                    }
                    return {
                        onResponseEvent: function(e) {
                            if (p) return;
                            const t = Ee(e, "response"), r = Ee(t, "model");
                            "string" == typeof r && r.length > 0 && r.length <= 512 && !/[\s\p{Cc}]/u.test(r) && (l = r);
                            const n = Ee(t, "usage"), o = Ie(Ee(n, "input_tokens")), a = Ie(Ee(n, "output_tokens")), c = Ee(n, "input_tokens_details"), d = Ie(Ee(c, "cached_tokens")), m = Ie(Ee(c, "cache_write_tokens")), h = Ie(Ee(Ee(n, "output_tokens_details"), "reasoning_tokens"));
                            if (void 0 !== o && (s.inputTokens = o, u = !0), void 0 !== a && (s.outputTokens = a, u = !0), void 0 === d && void 0 === m || (s.inputTokensDetails ??= new Se.pH, void 0 !== d && (s.inputTokensDetails.cachedTokens = d), void 0 !== m && (s.inputTokensDetails.cacheWriteTokens = m), u = !0), void 0 !== h && (s.outputTokensDetails = new Se.ah({
                                reasoningTokens: h
                            }), u = !0), void 0 === i) {
                                const r = Ee(e, "type");
                                if ("response.completed" === r) i = Se.Ts.SUCCESS;
                                else if ("response.failed" === r || "error" === r) i = Se.Ts.ERRORED;
                                else if ("response.cancelled" === r) i = Se.Ts.ABORTED;
                                else if ("response.incomplete" === r) {
                                    const e = Ee(Ee(t, "incomplete_details"), "reason");
                                    null != e && "max_output_tokens" !== e && "content_filter" !== e || (i = Se.Ts.SUCCESS);
                                }
                            }
                        },
                        observeHeaders: function(e) {
                            if (p) return;
                            const t = Ce(e.get("fireworks-prompt-tokens")), r = Ce(e.get("fireworks-cached-prompt-tokens"));
                            void 0 === t && void 0 === r || (o = new Se.f$({
                                ...void 0 === t ? {} : {
                                    promptTokens: t
                                },
                                ...void 0 === r ? {} : {
                                    cachedPromptTokens: r
                                }
                            }));
                        },
                        observeStream: function(e) {
                            const t = e.getReader();
                            let r = !1;
                            return new ReadableStream({
                                async pull (e) {
                                    try {
                                        const n = await t.read();
                                        if (r) return;
                                        if (n.done) return await m(void 0 !== a && "unknown" !== a && "error" !== a ? Se.Ts.SUCCESS : Se.Ts.ERRORED), t.releaseLock(), void e.close();
                                        if ("error" === n.value.type) return d = !0, await t.cancel(n.value.error), await h(n.value.error), t.releaseLock(), e.enqueue(n.value), void e.close();
                                        "finish" === n.value.type && (a = n.value.finishReason), e.enqueue(n.value);
                                    } catch (n) {
                                        if (r) return;
                                        let s = n;
                                        try {
                                            await h(n);
                                        } catch (e) {
                                            s = e;
                                        }
                                        t.releaseLock(), e.error(s);
                                    }
                                },
                                async cancel (e) {
                                    r = !0;
                                    try {
                                        await t.cancel(e);
                                    } finally{
                                        try {
                                            await m(Se.Ts.ABORTED);
                                        } finally{
                                            t.releaseLock();
                                        }
                                    }
                                }
                            }, {
                                highWaterMark: 0
                            });
                        },
                        finishOnError: h
                    };
                }(e, o, t.abortSignal);
                try {
                    const o = re({
                        ...n,
                        onResponseEvent: s.onResponseEvent,
                        fetch: async (e, t)=>{
                            const n = await r(e, t);
                            return s.observeHeaders(n.headers), n;
                        }
                    }).responses(e), i = await o.doStream(t);
                    return {
                        ...i,
                        stream: s.observeStream(i.stream)
                    };
                } catch (e) {
                    try {
                        await s.finishOnError(e);
                    } catch (e) {
                        return {
                            stream: new ReadableStream({
                                start (t) {
                                    t.error(e);
                                }
                            }),
                            rawCall: {
                                rawPrompt: void 0,
                                rawSettings: {}
                            }
                        };
                    }
                    throw e;
                }
            }
        };
    }(r, e)), {
        model: e.outputLimitModel ?? {
            id: e.modelId,
            displayName: e.modelId
        },
        maxOutputTokens: e.maxOutputTokens,
        requestId: e.gatewayRequestId
    }), o = new oe.Uv(s, void 0, {
        openai: {
            strictSchemas: !1,
            store: !1
        }
    }).getSession(e.promptMiddleware), i = Oe(void 0 === e.promptMiddleware ? function(e, t) {
        return function(e) {
            const t = e.toLowerCase(), r = t.includes("opus") && [
                "4.6",
                "4-6",
                "4.7",
                "4-7",
                "4.8",
                "4-8"
            ].some((e)=>t.includes(e)), n = t.includes("sonnet") && (t.includes("4.6") || t.includes("4-6")), s = t.includes("sonnet-5") || t.includes("sonnet 5"), o = t.includes("opus-5") || t.includes("opus 5"), i = t.includes("fable-5");
            return !(r || o || n || s || i);
        }(t) ? e : {
            getExecutor: (t)=>(0, oe.sk)()((0, oe.mf)()(e.getExecutor(t))),
            getModelId: ()=>e.getModelId()
        };
    }(o, r) : o, e.contextWindow ?? n);
    return {
        promptSession: i,
        promptToolSession: {
            getExecutor: ()=>new ne.Ycw(i.getExecutor())
        },
        ...void 0 === n ? {} : {
            contextLength: n
        }
    };
}
class Ke extends Error {
    constructor(e){
        super(`Could not reach your private inference gateway at ${e}.`), this.baseUrl = e, this.name = "PrivateInferenceGatewayUnreachableError";
    }
}
async function Ye(e) {
    const t = e.configFile?.path;
    let r;
    if (void 0 !== t) try {
        r = (0, n.readFileSync)(t, "utf8");
    } catch  {
        r = void 0;
    }
    const a = (0, i.rX)({
        configFileContent: r,
        configFilePath: t,
        env: e.env
    });
    if (void 0 === a) throw new i.dM("Private inference config: no configuration present");
    e.onCatalogParsed?.(a);
    const c = new Map, l = new Set, u = await (0, s.PH)([
        ...a.models
    ], async (t)=>({
            id: t.id,
            probe: await Ze(t.endpoint, t.providerModelId, e.probeTimeoutMs)
        }), {
        max: 8
    });
    for (const { id: e, probe: t } of u)"no-answer" === t ? l.add(e) : "unusable-answer" !== t && c.set(e, t);
    try {
        return (0, o._)(a, c);
    } catch (e) {
        const t = a.models.find((e)=>l.has(e.id) && !function(e) {
                try {
                    return (0, i.yz)(e, void 0), !0;
                } catch  {
                    return !1;
                }
            }(e));
        if (void 0 !== t) throw new Ke(t.endpoint.baseUrl);
        throw e;
    }
}
async function Ze(e, t, r) {
    const n = await (0, a.g3)({
        modelId: t,
        baseUrl: e.baseUrl,
        ...Xe(e),
        ...void 0 === r ? {} : {
            timeoutMs: r
        }
    });
    if ("string" == typeof n) return n;
    const s = n.entry;
    return {
        extendedCapabilities: n.extendedCapabilitiesDetected,
        ...void 0 === s ? {} : {
            contextLength: s.contextLength,
            longContextThresholdTokens: s.longContextThresholdTokens,
            maxOutputTokens: s.maxOutputTokens,
            supportsVision: s.supportsVision,
            reasoningEffortValues: s.reasoningEffortValues,
            advertisedDialect: (0, a.Nz)(s.apiTypes)
        }
    };
}
function Xe(e) {
    return {
        ...void 0 === e.apiKey ? {} : {
            apiKey: e.apiKey
        },
        ...et(e.apiKeyHelper),
        ...void 0 === e.headers ? {} : {
            customHeaders: {
                ...e.headers
            }
        }
    };
}
function et(e) {
    return void 0 === e ? {} : {
        apiKeyHelper: {
            command: e.command,
            ...void 0 === e.args ? {} : {
                args: e.args
            },
            ...void 0 === e.tokenTtlSecs ? {} : {
                tokenTtlMs: 1e3 * e.tokenTtlSecs
            },
            ...void 0 === e.timeoutSecs ? {} : {
                timeoutMs: 1e3 * e.timeoutSecs
            }
        }
    };
}
function tt(e, t = {}) {
    const r = Ge();
    return async (e)=>{
        const n = await Ve({
            modelId: e.model.providerModelId,
            baseUrl: e.model.endpoint.baseUrl,
            ...Xe(e.model.endpoint),
            toolOutputLatch: r,
            vision: e.model.vision,
            gatewayRequestId: e.originalRequestId,
            modelParameters: [
                ...e.modelParameters
            ],
            contextWindow: e.model.contextWindowTokens,
            ...void 0 === e.model.maxOutputTokens ? {} : {
                maxOutputTokens: e.model.maxOutputTokens
            },
            outputLimitModel: {
                id: e.model.id,
                displayName: e.model.displayName
            },
            ...void 0 === e.onUsage ? {} : {
                onUsage: e.onUsage
            },
            ...void 0 === e.promptMiddleware ? {} : {
                promptMiddleware: e.promptMiddleware
            },
            ...void 0 === e.model.effort ? {} : {
                configuredEffortValues: e.model.effort.tiers.map((e)=>e.value)
            },
            includeEncryptedReasoningContent: e.model.supportsPersistedReasoning,
            ...void 0 === t.onGatewayRequest ? {} : {
                gatewayTiming: {
                    requestId: e.originalRequestId,
                    attempt: e.attempt ?? 0,
                    onTiming: t.onGatewayRequest
                }
            }
        });
        return {
            promptSession: n.promptSession,
            promptToolSession: n.promptToolSession,
            ...void 0 === n.contextLength ? {} : {
                contextLength: n.contextLength
            }
        };
    };
}
function rt(e) {
    const t = (0, i.$B)(e), r = t.length > 1, n = e.models.map((t)=>{
        const n = t.id === e.defaultModelId ? " (default)" : "", s = t.providerModelId === t.id ? "" : ` -> ${t.providerModelId}`, o = r ? ` on ${t.endpoint.baseUrl}` : "", i = void 0 === t.effort ? "off" : `${t.effort.default} of [${t.effort.tiers.map((e)=>e.id).join(", ")}]`, a = void 0 === t.maxOutputTokens ? "gateway default" : `${t.maxOutputTokens} tokens`;
        return `"${t.id}"${s}${n}${o}: context ${t.contextWindowTokens} tokens, max output ${a}, vision ${t.vision}, web search ${t.webSearchTool ?? "off"}, reasoning ${i}`;
    }), s = e.models.length;
    return `${s} model${1 === s ? "" : "s"} on ${t.join(", ")} — ${n.join("; ")}`;
}

"use strict";
require.d(exports, {
    H4: ()=>h,
    Og: ()=>g,
    d1: ()=>p,
    mD: ()=>y
});
var n = require("./module-40095.js"), s = require("./module-69361.js"), o = {
    code: "0",
    name: "text",
    parse: (e)=>{
        if ("string" != typeof e) throw new Error('"text" parts expect a string value.');
        return {
            type: "text",
            value: e
        };
    }
}, i = {
    code: "3",
    name: "error",
    parse: (e)=>{
        if ("string" != typeof e) throw new Error('"error" parts expect a string value.');
        return {
            type: "error",
            value: e
        };
    }
}, a = {
    code: "4",
    name: "assistant_message",
    parse: (e)=>{
        if (!(null != e && "object" == typeof e && "id" in e && "role" in e && "content" in e && "string" == typeof e.id && "string" == typeof e.role && "assistant" === e.role && Array.isArray(e.content) && e.content.every((e)=>null != e && "object" == typeof e && "type" in e && "text" === e.type && "text" in e && null != e.text && "object" == typeof e.text && "value" in e.text && "string" == typeof e.text.value))) throw new Error('"assistant_message" parts expect an object with an "id", "role", and "content" property.');
        return {
            type: "assistant_message",
            value: e
        };
    }
}, c = {
    code: "5",
    name: "assistant_control_data",
    parse: (e)=>{
        if (null == e || "object" != typeof e || !("threadId" in e) || !("messageId" in e) || "string" != typeof e.threadId || "string" != typeof e.messageId) throw new Error('"assistant_control_data" parts expect an object with a "threadId" and "messageId" property.');
        return {
            type: "assistant_control_data",
            value: {
                threadId: e.threadId,
                messageId: e.messageId
            }
        };
    }
}, l = {
    code: "6",
    name: "data_message",
    parse: (e)=>{
        if (null == e || "object" != typeof e || !("role" in e) || !("data" in e) || "string" != typeof e.role || "data" !== e.role) throw new Error('"data_message" parts expect an object with a "role" and "data" property.');
        return {
            type: "data_message",
            value: e
        };
    }
}, u = [
    o,
    i,
    a,
    c,
    l
];
u.map((e)=>e.code);
function d(e) {
    const t = [
        "ROOT"
    ];
    let r = -1, n = null;
    function s(e, s, o) {
        switch(e){
            case '"':
                r = s, t.pop(), t.push(o), t.push("INSIDE_STRING");
                break;
            case "f":
            case "t":
            case "n":
                r = s, n = s, t.pop(), t.push(o), t.push("INSIDE_LITERAL");
                break;
            case "-":
                t.pop(), t.push(o), t.push("INSIDE_NUMBER");
                break;
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                r = s, t.pop(), t.push(o), t.push("INSIDE_NUMBER");
                break;
            case "{":
                r = s, t.pop(), t.push(o), t.push("INSIDE_OBJECT_START");
                break;
            case "[":
                r = s, t.pop(), t.push(o), t.push("INSIDE_ARRAY_START");
        }
    }
    function o(e, n) {
        switch(e){
            case ",":
                t.pop(), t.push("INSIDE_OBJECT_AFTER_COMMA");
                break;
            case "}":
                r = n, t.pop();
        }
    }
    function i(e, n) {
        switch(e){
            case ",":
                t.pop(), t.push("INSIDE_ARRAY_AFTER_COMMA");
                break;
            case "]":
                r = n, t.pop();
        }
    }
    for(let a = 0; a < e.length; a++){
        const c = e[a];
        switch(t[t.length - 1]){
            case "ROOT":
                s(c, a, "FINISH");
                break;
            case "INSIDE_OBJECT_START":
                switch(c){
                    case '"':
                        t.pop(), t.push("INSIDE_OBJECT_KEY");
                        break;
                    case "}":
                        r = a, t.pop();
                }
                break;
            case "INSIDE_OBJECT_AFTER_COMMA":
                if ('"' === c) t.pop(), t.push("INSIDE_OBJECT_KEY");
                break;
            case "INSIDE_OBJECT_KEY":
                if ('"' === c) t.pop(), t.push("INSIDE_OBJECT_AFTER_KEY");
                break;
            case "INSIDE_OBJECT_AFTER_KEY":
                if (":" === c) t.pop(), t.push("INSIDE_OBJECT_BEFORE_VALUE");
                break;
            case "INSIDE_OBJECT_BEFORE_VALUE":
                s(c, a, "INSIDE_OBJECT_AFTER_VALUE");
                break;
            case "INSIDE_OBJECT_AFTER_VALUE":
                o(c, a);
                break;
            case "INSIDE_STRING":
                switch(c){
                    case '"':
                        t.pop(), r = a;
                        break;
                    case "\\":
                        t.push("INSIDE_STRING_ESCAPE");
                        break;
                    default:
                        r = a;
                }
                break;
            case "INSIDE_ARRAY_START":
                if ("]" === c) r = a, t.pop();
                else r = a, s(c, a, "INSIDE_ARRAY_AFTER_VALUE");
                break;
            case "INSIDE_ARRAY_AFTER_VALUE":
                switch(c){
                    case ",":
                        t.pop(), t.push("INSIDE_ARRAY_AFTER_COMMA");
                        break;
                    case "]":
                        r = a, t.pop();
                        break;
                    default:
                        r = a;
                }
                break;
            case "INSIDE_ARRAY_AFTER_COMMA":
                s(c, a, "INSIDE_ARRAY_AFTER_VALUE");
                break;
            case "INSIDE_STRING_ESCAPE":
                t.pop(), r = a;
                break;
            case "INSIDE_NUMBER":
                switch(c){
                    case "0":
                    case "1":
                    case "2":
                    case "3":
                    case "4":
                    case "5":
                    case "6":
                    case "7":
                    case "8":
                    case "9":
                        r = a;
                        break;
                    case "e":
                    case "E":
                    case "-":
                    case ".":
                        break;
                    case ",":
                        t.pop(), "INSIDE_ARRAY_AFTER_VALUE" === t[t.length - 1] && i(c, a), "INSIDE_OBJECT_AFTER_VALUE" === t[t.length - 1] && o(c, a);
                        break;
                    case "}":
                        t.pop(), "INSIDE_OBJECT_AFTER_VALUE" === t[t.length - 1] && o(c, a);
                        break;
                    case "]":
                        t.pop(), "INSIDE_ARRAY_AFTER_VALUE" === t[t.length - 1] && i(c, a);
                        break;
                    default:
                        t.pop();
                }
                break;
            case "INSIDE_LITERAL":
                {
                    const s = e.substring(n, a + 1);
                    "false".startsWith(s) || "true".startsWith(s) || "null".startsWith(s) ? r = a : (t.pop(), "INSIDE_OBJECT_AFTER_VALUE" === t[t.length - 1] ? o(c, a) : "INSIDE_ARRAY_AFTER_VALUE" === t[t.length - 1] && i(c, a));
                    break;
                }
        }
    }
    let a = e.slice(0, r + 1);
    for(let r = t.length - 1; r >= 0; r--){
        switch(t[r]){
            case "INSIDE_STRING":
                a += '"';
                break;
            case "INSIDE_OBJECT_KEY":
            case "INSIDE_OBJECT_AFTER_KEY":
            case "INSIDE_OBJECT_AFTER_COMMA":
            case "INSIDE_OBJECT_START":
            case "INSIDE_OBJECT_BEFORE_VALUE":
            case "INSIDE_OBJECT_AFTER_VALUE":
                a += "}";
                break;
            case "INSIDE_ARRAY_START":
            case "INSIDE_ARRAY_AFTER_COMMA":
            case "INSIDE_ARRAY_AFTER_VALUE":
                a += "]";
                break;
            case "INSIDE_LITERAL":
                {
                    const t = e.substring(n, e.length);
                    "true".startsWith(t) ? a += "true".slice(t.length) : "false".startsWith(t) ? a += "false".slice(t.length) : "null".startsWith(t) && (a += "null".slice(t.length));
                }
        }
    }
    return a;
}
function p(e) {
    if (void 0 === e) return {
        value: void 0,
        state: "undefined-input"
    };
    let t = (0, n.N8)({
        text: e
    });
    return t.success ? {
        value: t.value,
        state: "successful-parse"
    } : (t = (0, n.N8)({
        text: d(e)
    }), t.success ? {
        value: t.value,
        state: "repaired-parse"
    } : {
        value: void 0,
        state: "failed-parse"
    });
}
var m = [
    {
        code: "0",
        name: "text",
        parse: (e)=>{
            if ("string" != typeof e) throw new Error('"text" parts expect a string value.');
            return {
                type: "text",
                value: e
            };
        }
    },
    {
        code: "2",
        name: "data",
        parse: (e)=>{
            if (!Array.isArray(e)) throw new Error('"data" parts expect an array value.');
            return {
                type: "data",
                value: e
            };
        }
    },
    {
        code: "3",
        name: "error",
        parse: (e)=>{
            if ("string" != typeof e) throw new Error('"error" parts expect a string value.');
            return {
                type: "error",
                value: e
            };
        }
    },
    {
        code: "8",
        name: "message_annotations",
        parse: (e)=>{
            if (!Array.isArray(e)) throw new Error('"message_annotations" parts expect an array value.');
            return {
                type: "message_annotations",
                value: e
            };
        }
    },
    {
        code: "9",
        name: "tool_call",
        parse: (e)=>{
            if (null == e || "object" != typeof e || !("toolCallId" in e) || "string" != typeof e.toolCallId || !("toolName" in e) || "string" != typeof e.toolName || !("args" in e) || "object" != typeof e.args) throw new Error('"tool_call" parts expect an object with a "toolCallId", "toolName", and "args" property.');
            return {
                type: "tool_call",
                value: e
            };
        }
    },
    {
        code: "a",
        name: "tool_result",
        parse: (e)=>{
            if (null == e || "object" != typeof e || !("toolCallId" in e) || "string" != typeof e.toolCallId || !("result" in e)) throw new Error('"tool_result" parts expect an object with a "toolCallId" and a "result" property.');
            return {
                type: "tool_result",
                value: e
            };
        }
    },
    {
        code: "b",
        name: "tool_call_streaming_start",
        parse: (e)=>{
            if (null == e || "object" != typeof e || !("toolCallId" in e) || "string" != typeof e.toolCallId || !("toolName" in e) || "string" != typeof e.toolName) throw new Error('"tool_call_streaming_start" parts expect an object with a "toolCallId" and "toolName" property.');
            return {
                type: "tool_call_streaming_start",
                value: e
            };
        }
    },
    {
        code: "c",
        name: "tool_call_delta",
        parse: (e)=>{
            if (null == e || "object" != typeof e || !("toolCallId" in e) || "string" != typeof e.toolCallId || !("argsTextDelta" in e) || "string" != typeof e.argsTextDelta) throw new Error('"tool_call_delta" parts expect an object with a "toolCallId" and "argsTextDelta" property.');
            return {
                type: "tool_call_delta",
                value: e
            };
        }
    },
    {
        code: "d",
        name: "finish_message",
        parse: (e)=>{
            if (null == e || "object" != typeof e || !("finishReason" in e) || "string" != typeof e.finishReason) throw new Error('"finish_message" parts expect an object with a "finishReason" property.');
            const t = {
                finishReason: e.finishReason
            };
            return "usage" in e && null != e.usage && "object" == typeof e.usage && "promptTokens" in e.usage && "completionTokens" in e.usage && (t.usage = {
                promptTokens: "number" == typeof e.usage.promptTokens ? e.usage.promptTokens : Number.NaN,
                completionTokens: "number" == typeof e.usage.completionTokens ? e.usage.completionTokens : Number.NaN
            }), {
                type: "finish_message",
                value: t
            };
        }
    },
    {
        code: "e",
        name: "finish_step",
        parse: (e)=>{
            if (null == e || "object" != typeof e || !("finishReason" in e) || "string" != typeof e.finishReason) throw new Error('"finish_step" parts expect an object with a "finishReason" property.');
            const t = {
                finishReason: e.finishReason,
                isContinued: !1
            };
            return "usage" in e && null != e.usage && "object" == typeof e.usage && "promptTokens" in e.usage && "completionTokens" in e.usage && (t.usage = {
                promptTokens: "number" == typeof e.usage.promptTokens ? e.usage.promptTokens : Number.NaN,
                completionTokens: "number" == typeof e.usage.completionTokens ? e.usage.completionTokens : Number.NaN
            }), "isContinued" in e && "boolean" == typeof e.isContinued && (t.isContinued = e.isContinued), {
                type: "finish_step",
                value: t
            };
        }
    },
    {
        code: "f",
        name: "start_step",
        parse: (e)=>{
            if (null == e || "object" != typeof e || !("messageId" in e) || "string" != typeof e.messageId) throw new Error('"start_step" parts expect an object with an "id" property.');
            return {
                type: "start_step",
                value: {
                    messageId: e.messageId
                }
            };
        }
    },
    {
        code: "g",
        name: "reasoning",
        parse: (e)=>{
            if ("string" != typeof e) throw new Error('"reasoning" parts expect a string value.');
            return {
                type: "reasoning",
                value: e
            };
        }
    },
    {
        code: "h",
        name: "source",
        parse: (e)=>{
            if (null == e || "object" != typeof e) throw new Error('"source" parts expect a Source object.');
            return {
                type: "source",
                value: e
            };
        }
    },
    {
        code: "i",
        name: "redacted_reasoning",
        parse: (e)=>{
            if (null == e || "object" != typeof e || !("data" in e) || "string" != typeof e.data) throw new Error('"redacted_reasoning" parts expect an object with a "data" property.');
            return {
                type: "redacted_reasoning",
                value: {
                    data: e.data
                }
            };
        }
    },
    {
        code: "j",
        name: "reasoning_signature",
        parse: (e)=>{
            if (null == e || "object" != typeof e || !("signature" in e) || "string" != typeof e.signature) throw new Error('"reasoning_signature" parts expect an object with a "signature" property.');
            return {
                type: "reasoning_signature",
                value: {
                    signature: e.signature
                }
            };
        }
    },
    {
        code: "k",
        name: "file",
        parse: (e)=>{
            if (null == e || "object" != typeof e || !("data" in e) || "string" != typeof e.data || !("mimeType" in e) || "string" != typeof e.mimeType) throw new Error('"file" parts expect an object with a "data" and "mimeType" property.');
            return {
                type: "file",
                value: e
            };
        }
    }
];
Object.fromEntries(m.map((e)=>[
        e.code,
        e
    ])), Object.fromEntries(m.map((e)=>[
        e.name,
        e.code
    ])), m.map((e)=>e.code);
function h(e, t) {
    const r = m.find((t)=>t.name === e);
    if (!r) throw new Error(`Invalid stream part type: ${e}`);
    return `${r.code}:${JSON.stringify(t)}\n`;
}
"\n".charCodeAt(0);
"\n".charCodeAt(0);
var f = Symbol.for("vercel.ai.schema");
function g(e, { validate: t } = {}) {
    return {
        [f]: !0,
        _type: void 0,
        [n.eu]: !0,
        jsonSchema: e,
        validate: t
    };
}
function y(e) {
    return "object" == typeof (t = e) && null !== t && f in t && !0 === t[f] && "jsonSchema" in t && "validate" in t ? e : function(e, t) {
        var r;
        const n = null != (r = null == t ? void 0 : t.useReferences) && r;
        return g((0, s.Ay)(e, {
            $refStrategy: n ? "root" : "none",
            target: "jsonSchema7"
        }), {
            validate: (t)=>{
                const r = e.safeParse(t);
                return r.success ? {
                    success: !0,
                    value: r.data
                } : {
                    success: !1,
                    error: r.error
                };
            }
        });
    }(e);
    var t;
}

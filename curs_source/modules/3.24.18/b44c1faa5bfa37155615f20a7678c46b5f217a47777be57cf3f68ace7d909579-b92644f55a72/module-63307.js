"use strict";
require.d(exports, {
    uo: ()=>qr,
    D5: ()=>Pr,
    NT: ()=>Jr,
    R1: ()=>Lr,
    Uv: ()=>Dn,
    YE: ()=>Ur,
    wm: ()=>$r,
    QS: ()=>Nr,
    ud: ()=>Wn,
    Qt: ()=>Qr,
    fk: ()=>Hr,
    HL: ()=>on,
    mf: ()=>Yr,
    xE: ()=>yn,
    Np: ()=>Fr,
    hU: ()=>Or,
    sk: ()=>Pn,
    Gb: ()=>Gr,
    cc: ()=>Gn,
    sf: ()=>$n,
    Af: ()=>xr,
    Be: ()=>Nn,
    vc: ()=>Fn,
    Nf: ()=>jr,
    tq: ()=>xn
});
var n = require("./module-29017.js"), s = require("./module-40095.js"), o = require("./module-30753.js"), i = require("./module-81958.js"), a = require("./module-20132.js"), c = Object.defineProperty, l = (e, t)=>{
    for(var r in t)c(e, r, {
        get: t[r],
        enumerable: !0
    });
};
function u(e, { contentType: t, dataStreamVersion: r }) {
    const n = new Headers(null != e ? e : {});
    return n.has("Content-Type") || n.set("Content-Type", t), void 0 !== r && n.set("X-Vercel-AI-Data-Stream", r), n;
}
function d(e, { contentType: t, dataStreamVersion: r }) {
    const n = {};
    if (null != e) for (const [t, r] of Object.entries(e))n[t] = r;
    return null == n["Content-Type"] && (n["Content-Type"] = t), void 0 !== r && (n["X-Vercel-AI-Data-Stream"] = r), n;
}
function p({ response: e, status: t, statusText: r, headers: n, stream: s }) {
    e.writeHead(null != t ? t : 200, r, n);
    const o = s.getReader();
    (async ()=>{
        try {
            for(;;){
                const { done: t, value: r } = await o.read();
                if (t) break;
                e.write(r);
            }
        } catch (e) {
            throw e;
        } finally{
            e.end();
        }
    })();
}
var m, h = "AI_InvalidArgumentError", f = `vercel.ai.error.${h}`, g = Symbol.for(f), y = class extends n.bD {
    constructor({ parameter: e, value: t, message: r }){
        super({
            name: h,
            message: `Invalid argument for parameter ${e}: ${r}`
        }), this[m] = !0, this.parameter = e, this.value = t;
    }
    static isInstance(e) {
        return n.bD.hasMarker(e, f);
    }
};
m = g;
var w, v = "AI_RetryError", _ = `vercel.ai.error.${v}`, A = Symbol.for(_), S = class extends n.bD {
    constructor({ message: e, reason: t, errors: r }){
        super({
            name: v,
            message: e
        }), this[w] = !0, this.reason = t, this.errors = r, this.lastError = r[r.length - 1];
    }
    static isInstance(e) {
        return n.bD.hasMarker(e, _);
    }
};
w = A;
var b = ({ maxRetries: e = 2, initialDelayInMs: t = 2e3, backoffFactor: r = 2 } = {})=>async (n)=>E(n, {
            maxRetries: e,
            delayInMs: t,
            backoffFactor: r
        });
async function E(e, { maxRetries: t, delayInMs: r, backoffFactor: o }, i = []) {
    try {
        return await e();
    } catch (a) {
        if ((0, s.zf)(a)) throw a;
        if (0 === t) throw a;
        const c = (0, s.u1)(a), l = [
            ...i,
            a
        ], u = l.length;
        if (u > t) throw new S({
            message: `Failed after ${u} attempts. Last error: ${c}`,
            reason: "maxRetriesExceeded",
            errors: l
        });
        if (a instanceof Error && n.hL.isInstance(a) && !0 === a.isRetryable && u <= t) return await (0, s.cb)(r), E(e, {
            maxRetries: t,
            delayInMs: o * r,
            backoffFactor: o
        }, l);
        if (1 === u) throw a;
        throw new S({
            message: `Failed after ${u} attempts with non-retryable error: '${c}'`,
            reason: "errorNotRetryable",
            errors: l
        });
    }
}
function I({ maxRetries: e }) {
    if (null != e) {
        if (!Number.isInteger(e)) throw new y({
            parameter: "maxRetries",
            value: e,
            message: "maxRetries must be an integer"
        });
        if (e < 0) throw new y({
            parameter: "maxRetries",
            value: e,
            message: "maxRetries must be >= 0"
        });
    }
    const t = null != e ? e : 2;
    return {
        maxRetries: t,
        retry: b({
            maxRetries: t
        })
    };
}
function C({ operationId: e, telemetry: t }) {
    return {
        "operation.name": `${e}${null != (null == t ? void 0 : t.functionId) ? ` ${t.functionId}` : ""}`,
        "resource.name": null == t ? void 0 : t.functionId,
        "ai.operationId": e,
        "ai.telemetry.functionId": null == t ? void 0 : t.functionId
    };
}
function k({ model: e, settings: t, telemetry: r, headers: n }) {
    var s;
    return {
        "ai.model.provider": e.provider,
        "ai.model.id": e.modelId,
        ...Object.entries(t).reduce((e, [t, r])=>(e[`ai.settings.${t}`] = r, e), {}),
        ...Object.entries(null != (s = null == r ? void 0 : r.metadata) ? s : {}).reduce((e, [t, r])=>(e[`ai.telemetry.metadata.${t}`] = r, e), {}),
        ...Object.entries(null != n ? n : {}).reduce((e, [t, r])=>(void 0 !== r && (e[`ai.request.headers.${t}`] = r), e), {})
    };
}
var x = {
    startSpan: ()=>T,
    startActiveSpan: (e, t, r, n)=>"function" == typeof t ? t(T) : "function" == typeof r ? r(T) : "function" == typeof n ? n(T) : void 0
}, T = {
    spanContext: ()=>R,
    setAttribute () {
        return this;
    },
    setAttributes () {
        return this;
    },
    addEvent () {
        return this;
    },
    addLink () {
        return this;
    },
    addLinks () {
        return this;
    },
    setStatus () {
        return this;
    },
    updateName () {
        return this;
    },
    end () {
        return this;
    },
    isRecording: ()=>!1,
    recordException () {
        return this;
    }
}, R = {
    traceId: "",
    spanId: "",
    traceFlags: 0
};
function B({ isEnabled: e = !1, tracer: t } = {}) {
    return e ? t || o.uP.getTracer("ai") : x;
}
function P({ name: e, tracer: t, attributes: r, fn: n, endWhenDone: s = !0 }) {
    return t.startActiveSpan(e, {
        attributes: r
    }, async (e)=>{
        try {
            const t = await n(e);
            return s && e.end(), t;
        } catch (t) {
            try {
                t instanceof Error ? (e.recordException({
                    name: t.name,
                    message: t.message,
                    stack: t.stack
                }), e.setStatus({
                    code: o.sY.ERROR,
                    message: t.message
                })) : e.setStatus({
                    code: o.sY.ERROR
                });
            } finally{
                e.end();
            }
            throw t;
        }
    });
}
function J({ telemetry: e, attributes: t }) {
    return !0 !== (null == e ? void 0 : e.isEnabled) ? {} : Object.entries(t).reduce((t, [r, n])=>{
        if (void 0 === n) return t;
        if ("object" == typeof n && "input" in n && "function" == typeof n.input) {
            if (!1 === (null == e ? void 0 : e.recordInputs)) return t;
            const s = n.input();
            return void 0 === s ? t : {
                ...t,
                [r]: s
            };
        }
        if ("object" == typeof n && "output" in n && "function" == typeof n.output) {
            if (!1 === (null == e ? void 0 : e.recordOutputs)) return t;
            const s = n.output();
            return void 0 === s ? t : {
                ...t,
                [r]: s
            };
        }
        return {
            ...t,
            [r]: n
        };
    }, {});
}
var M, q = "AI_NoImageGeneratedError", D = `vercel.ai.error.${q}`, O = Symbol.for(D);
n.bD;
M = O;
var N = class {
    constructor({ data: e, mimeType: t }){
        const r = e instanceof Uint8Array;
        this.base64Data = r ? void 0 : e, this.uint8ArrayData = r ? e : void 0, this.mimeType = t;
    }
    get base64() {
        return null == this.base64Data && (this.base64Data = (0, s.n_)(this.uint8ArrayData)), this.base64Data;
    }
    get uint8Array() {
        return null == this.uint8ArrayData && (this.uint8ArrayData = (0, s.Z9)(this.base64Data)), this.uint8ArrayData;
    }
}, F = class extends N {
    constructor(e){
        super(e), this.type = "file";
    }
}, U = [
    {
        mimeType: "image/gif",
        bytesPrefix: [
            71,
            73,
            70
        ],
        base64Prefix: "R0lG"
    },
    {
        mimeType: "image/png",
        bytesPrefix: [
            137,
            80,
            78,
            71
        ],
        base64Prefix: "iVBORw"
    },
    {
        mimeType: "image/jpeg",
        bytesPrefix: [
            255,
            216
        ],
        base64Prefix: "/9j/"
    },
    {
        mimeType: "image/webp",
        bytesPrefix: [
            82,
            73,
            70,
            70
        ],
        base64Prefix: "UklGRg"
    },
    {
        mimeType: "image/bmp",
        bytesPrefix: [
            66,
            77
        ],
        base64Prefix: "Qk"
    },
    {
        mimeType: "image/tiff",
        bytesPrefix: [
            73,
            73,
            42,
            0
        ],
        base64Prefix: "SUkqAA"
    },
    {
        mimeType: "image/tiff",
        bytesPrefix: [
            77,
            77,
            0,
            42
        ],
        base64Prefix: "TU0AKg"
    },
    {
        mimeType: "image/avif",
        bytesPrefix: [
            0,
            0,
            0,
            32,
            102,
            116,
            121,
            112,
            97,
            118,
            105,
            102
        ],
        base64Prefix: "AAAAIGZ0eXBhdmlm"
    },
    {
        mimeType: "image/heic",
        bytesPrefix: [
            0,
            0,
            0,
            32,
            102,
            116,
            121,
            112,
            104,
            101,
            105,
            99
        ],
        base64Prefix: "AAAAIGZ0eXBoZWlj"
    }
];
function L(e) {
    return "string" == typeof e && e.startsWith("SUQz") || "string" != typeof e && e.length > 10 && 73 === e[0] && 68 === e[1] && 51 === e[2] ? ((e)=>{
        const t = "string" == typeof e ? (0, s.Z9)(e) : e, r = (127 & t[6]) << 21 | (127 & t[7]) << 14 | (127 & t[8]) << 7 | 127 & t[9];
        return t.slice(r + 10);
    })(e) : e;
}
function $({ data: e, signatures: t }) {
    const r = L(e);
    for (const e of t)if ("string" == typeof r ? r.startsWith(e.base64Prefix) : r.length >= e.bytesPrefix.length && e.bytesPrefix.every((e, t)=>r[t] === e)) return e.mimeType;
}
var Q, j = "AI_NoObjectGeneratedError", G = `vercel.ai.error.${j}`, H = Symbol.for(G), z = class extends n.bD {
    constructor({ message: e = "No object generated.", cause: t, text: r, response: n, usage: s, finishReason: o }){
        super({
            name: j,
            message: e,
            cause: t
        }), this[Q] = !0, this.text = r, this.response = n, this.usage = s, this.finishReason = o;
    }
    static isInstance(e) {
        return n.bD.hasMarker(e, G);
    }
};
Q = H;
var W, V = "AI_DownloadError", K = `vercel.ai.error.${V}`, Y = Symbol.for(K), Z = class extends n.bD {
    constructor({ url: e, statusCode: t, statusText: r, cause: n, message: s = null == n ? `Failed to download ${e}: ${t} ${r}` : `Failed to download ${e}: ${n}` }){
        super({
            name: V,
            message: s,
            cause: n
        }), this[W] = !0, this.url = e, this.statusCode = t, this.statusText = r;
    }
    static isInstance(e) {
        return n.bD.hasMarker(e, K);
    }
};
async function X({ url: e }) {
    var t;
    const r = e.toString();
    try {
        const e = await fetch(r);
        if (!e.ok) throw new Z({
            url: r,
            statusCode: e.status,
            statusText: e.statusText
        });
        return {
            data: new Uint8Array(await e.arrayBuffer()),
            mimeType: null != (t = e.headers.get("content-type")) ? t : void 0
        };
    } catch (e) {
        if (Z.isInstance(e)) throw e;
        throw new Z({
            url: r,
            cause: e
        });
    }
}
W = Y;
var ee, te = "AI_InvalidDataContentError", re = `vercel.ai.error.${te}`, ne = Symbol.for(re), se = class extends n.bD {
    constructor({ content: e, cause: t, message: r = `Invalid data content. Expected a base64 string, Uint8Array, ArrayBuffer, or Buffer, but got ${typeof e}.` }){
        super({
            name: te,
            message: r,
            cause: t
        }), this[ee] = !0, this.content = e;
    }
    static isInstance(e) {
        return n.bD.hasMarker(e, re);
    }
};
ee = ne;
var oe = i.KC([
    i.Yj(),
    i.Nl(Uint8Array),
    i.Nl(ArrayBuffer),
    i.Ie((e)=>{
        var t, r;
        return null != (r = null == (t = globalThis.Buffer) ? void 0 : t.isBuffer(e)) && r;
    }, {
        message: "Must be a Buffer"
    })
]);
function ie(e) {
    return "string" == typeof e ? e : e instanceof ArrayBuffer ? (0, s.n_)(new Uint8Array(e)) : (0, s.n_)(e);
}
function ae(e) {
    if (e instanceof Uint8Array) return e;
    if ("string" == typeof e) try {
        return (0, s.Z9)(e);
    } catch (t) {
        throw new se({
            message: "Invalid data content. Content string is not a base64-encoded media.",
            content: e,
            cause: t
        });
    }
    if (e instanceof ArrayBuffer) return new Uint8Array(e);
    throw new se({
        content: e
    });
}
function ce(e) {
    try {
        return (new TextDecoder).decode(e);
    } catch (e) {
        throw new Error("Error decoding Uint8Array to text");
    }
}
var le, ue = "AI_InvalidMessageRoleError", de = `vercel.ai.error.${ue}`, pe = Symbol.for(de), me = class extends n.bD {
    constructor({ role: e, message: t = `Invalid message role: '${e}'. Must be one of: "system", "user", "assistant", "tool".` }){
        super({
            name: ue,
            message: t
        }), this[le] = !0, this.role = e;
    }
    static isInstance(e) {
        return n.bD.hasMarker(e, de);
    }
};
async function he({ prompt: e, modelSupportsImageUrls: t = !0, modelSupportsUrl: r = ()=>!1, downloadImplementation: n = X }) {
    const s = await async function(e, t, r, n) {
        const s = e.filter((e)=>"user" === e.role).map((e)=>e.content).filter((e)=>Array.isArray(e)).flat().filter((e)=>"image" === e.type || "file" === e.type).filter((e)=>!("image" === e.type && !0 === r)).map((e)=>"image" === e.type ? e.image : e.data).map((e)=>"string" == typeof e && (e.startsWith("http:") || e.startsWith("https:")) ? new URL(e) : e).filter((e)=>e instanceof URL).filter((e)=>!n(e)), o = await Promise.all(s.map(async (e)=>({
                url: e,
                data: await t({
                    url: e
                })
            })));
        return Object.fromEntries(o.map(({ url: e, data: t })=>[
                e.toString(),
                t
            ]));
    }(e.messages, n, t, r);
    return [
        ...null != e.system ? [
            {
                role: "system",
                content: e.system
            }
        ] : [],
        ...e.messages.map((e)=>(function(e, t) {
                var r, n, s, o, i, a;
                const c = e.role;
                switch(c){
                    case "system":
                        return {
                            role: "system",
                            content: e.content,
                            providerMetadata: null != (r = e.providerOptions) ? r : e.experimental_providerMetadata
                        };
                    case "user":
                        return "string" == typeof e.content ? {
                            role: "user",
                            content: [
                                {
                                    type: "text",
                                    text: e.content
                                }
                            ],
                            providerMetadata: null != (n = e.providerOptions) ? n : e.experimental_providerMetadata
                        } : {
                            role: "user",
                            content: e.content.map((e)=>(function(e, t) {
                                    var r, n, s, o;
                                    if ("text" === e.type) return {
                                        type: "text",
                                        text: e.text,
                                        providerMetadata: null != (r = e.providerOptions) ? r : e.experimental_providerMetadata
                                    };
                                    let i, a, c, l = e.mimeType;
                                    const u = e.type;
                                    switch(u){
                                        case "image":
                                            i = e.image;
                                            break;
                                        case "file":
                                            i = e.data;
                                            break;
                                        default:
                                            throw new Error(`Unsupported part type: ${u}`);
                                    }
                                    try {
                                        a = "string" == typeof i ? new URL(i) : i;
                                    } catch (e) {
                                        a = i;
                                    }
                                    if (a instanceof URL) if ("data:" === a.protocol) {
                                        const { mimeType: e, base64Content: t } = function(e) {
                                            try {
                                                const [t, r] = e.split(",");
                                                return {
                                                    mimeType: t.split(";")[0].split(":")[1],
                                                    base64Content: r
                                                };
                                            } catch (e) {
                                                return {
                                                    mimeType: void 0,
                                                    base64Content: void 0
                                                };
                                            }
                                        }(a.toString());
                                        if (null == e || null == t) throw new Error(`Invalid data URL format in part ${u}`);
                                        l = e, c = ae(t);
                                    } else {
                                        const e = t[a.toString()];
                                        e ? (c = e.data, null != l || (l = e.mimeType)) : c = a;
                                    }
                                    else c = ae(a);
                                    switch(u){
                                        case "image":
                                            return c instanceof Uint8Array && (l = null != (n = $({
                                                data: c,
                                                signatures: U
                                            })) ? n : l), {
                                                type: "image",
                                                image: c,
                                                mimeType: l,
                                                providerMetadata: null != (s = e.providerOptions) ? s : e.experimental_providerMetadata
                                            };
                                        case "file":
                                            if (null == l) throw new Error("Mime type is missing for file part");
                                            return {
                                                type: "file",
                                                data: c instanceof Uint8Array ? ie(c) : c,
                                                filename: e.filename,
                                                mimeType: l,
                                                providerMetadata: null != (o = e.providerOptions) ? o : e.experimental_providerMetadata
                                            };
                                    }
                                })(e, t)).filter((e)=>"text" !== e.type || "" !== e.text),
                            providerMetadata: null != (s = e.providerOptions) ? s : e.experimental_providerMetadata
                        };
                    case "assistant":
                        return "string" == typeof e.content ? {
                            role: "assistant",
                            content: [
                                {
                                    type: "text",
                                    text: e.content
                                }
                            ],
                            providerMetadata: null != (o = e.providerOptions) ? o : e.experimental_providerMetadata
                        } : {
                            role: "assistant",
                            content: e.content.filter((e)=>"text" !== e.type || "" !== e.text).map((e)=>{
                                var t;
                                const r = null != (t = e.providerOptions) ? t : e.experimental_providerMetadata;
                                switch(e.type){
                                    case "file":
                                        return {
                                            type: "file",
                                            data: e.data instanceof URL ? e.data : ie(e.data),
                                            filename: e.filename,
                                            mimeType: e.mimeType,
                                            providerMetadata: r
                                        };
                                    case "reasoning":
                                        return {
                                            type: "reasoning",
                                            text: e.text,
                                            signature: e.signature,
                                            providerMetadata: r
                                        };
                                    case "redacted-reasoning":
                                        return {
                                            type: "redacted-reasoning",
                                            data: e.data,
                                            providerMetadata: r
                                        };
                                    case "text":
                                        return {
                                            type: "text",
                                            text: e.text,
                                            providerMetadata: r
                                        };
                                    case "tool-call":
                                        return {
                                            type: "tool-call",
                                            toolCallId: e.toolCallId,
                                            toolName: e.toolName,
                                            args: e.args,
                                            providerMetadata: r
                                        };
                                }
                            }),
                            providerMetadata: null != (i = e.providerOptions) ? i : e.experimental_providerMetadata
                        };
                    case "tool":
                        return {
                            role: "tool",
                            content: e.content.map((e)=>{
                                var t;
                                return {
                                    type: "tool-result",
                                    toolCallId: e.toolCallId,
                                    toolName: e.toolName,
                                    result: e.result,
                                    content: e.experimental_content,
                                    isError: e.isError,
                                    providerMetadata: null != (t = e.providerOptions) ? t : e.experimental_providerMetadata
                                };
                            }),
                            providerMetadata: null != (a = e.providerOptions) ? a : e.experimental_providerMetadata
                        };
                    default:
                        throw new me({
                            role: c
                        });
                }
            })(e, s))
    ];
}
function fe({ maxTokens: e, temperature: t, topP: r, topK: n, presencePenalty: s, frequencyPenalty: o, stopSequences: i, seed: a }) {
    if (null != e) {
        if (!Number.isInteger(e)) throw new y({
            parameter: "maxTokens",
            value: e,
            message: "maxTokens must be an integer"
        });
        if (e < 1) throw new y({
            parameter: "maxTokens",
            value: e,
            message: "maxTokens must be >= 1"
        });
    }
    if (null != t && "number" != typeof t) throw new y({
        parameter: "temperature",
        value: t,
        message: "temperature must be a number"
    });
    if (null != r && "number" != typeof r) throw new y({
        parameter: "topP",
        value: r,
        message: "topP must be a number"
    });
    if (null != n && "number" != typeof n) throw new y({
        parameter: "topK",
        value: n,
        message: "topK must be a number"
    });
    if (null != s && "number" != typeof s) throw new y({
        parameter: "presencePenalty",
        value: s,
        message: "presencePenalty must be a number"
    });
    if (null != o && "number" != typeof o) throw new y({
        parameter: "frequencyPenalty",
        value: o,
        message: "frequencyPenalty must be a number"
    });
    if (null != a && !Number.isInteger(a)) throw new y({
        parameter: "seed",
        value: a,
        message: "seed must be an integer"
    });
    return {
        maxTokens: e,
        temperature: null != t ? t : 0,
        topP: r,
        topK: n,
        presencePenalty: s,
        frequencyPenalty: o,
        stopSequences: null != i && i.length > 0 ? i : void 0,
        seed: a
    };
}
function ge(e) {
    var t, r, n;
    const s = [];
    for (const o of e){
        let e;
        try {
            e = new URL(o.url);
        } catch (e) {
            throw new Error(`Invalid URL: ${o.url}`);
        }
        switch(e.protocol){
            case "http:":
            case "https:":
                if (null == (t = o.contentType) ? void 0 : t.startsWith("image/")) s.push({
                    type: "image",
                    image: e
                });
                else {
                    if (!o.contentType) throw new Error("If the attachment is not an image, it must specify a content type");
                    s.push({
                        type: "file",
                        data: e,
                        mimeType: o.contentType
                    });
                }
                break;
            case "data:":
                {
                    let e, t, i;
                    try {
                        [e, t] = o.url.split(","), i = e.split(";")[0].split(":")[1];
                    } catch (e) {
                        throw new Error(`Error processing data URL: ${o.url}`);
                    }
                    if (null == i || null == t) throw new Error(`Invalid data URL format: ${o.url}`);
                    if (null == (r = o.contentType) ? void 0 : r.startsWith("image/")) s.push({
                        type: "image",
                        image: ae(t)
                    });
                    else if (null == (n = o.contentType) ? void 0 : n.startsWith("text/")) s.push({
                        type: "text",
                        text: ce(ae(t))
                    });
                    else {
                        if (!o.contentType) throw new Error("If the attachment is not an image or text, it must specify a content type");
                        s.push({
                            type: "file",
                            data: t,
                            mimeType: o.contentType
                        });
                    }
                    break;
                }
            default:
                throw new Error(`Unsupported URL protocol: ${e.protocol}`);
        }
    }
    return s;
}
le = pe;
var ye, we = "AI_MessageConversionError", ve = `vercel.ai.error.${we}`, _e = Symbol.for(ve), Ae = class extends n.bD {
    constructor({ originalMessage: e, message: t }){
        super({
            name: we,
            message: t
        }), this[ye] = !0, this.originalMessage = e;
    }
    static isInstance(e) {
        return n.bD.hasMarker(e, ve);
    }
};
ye = _e;
var Se = i.RZ(()=>i.KC([
        i.ch(),
        i.Yj(),
        i.ai(),
        i.zM(),
        i.g1(i.Yj(), Se),
        i.YO(Se)
    ])), be = i.g1(i.Yj(), i.g1(i.Yj(), Se)), Ee = i.YO(i.KC([
    i.Ik({
        type: i.eu("text"),
        text: i.Yj()
    }),
    i.Ik({
        type: i.eu("image"),
        data: i.Yj(),
        mimeType: i.Yj().optional()
    })
])), Ie = i.Ik({
    type: i.eu("text"),
    text: i.Yj(),
    providerOptions: be.optional(),
    experimental_providerMetadata: be.optional()
}), Ce = i.Ik({
    type: i.eu("image"),
    image: i.KC([
        oe,
        i.Nl(URL)
    ]),
    mimeType: i.Yj().optional(),
    providerOptions: be.optional(),
    experimental_providerMetadata: be.optional()
}), ke = i.Ik({
    type: i.eu("file"),
    data: i.KC([
        oe,
        i.Nl(URL)
    ]),
    filename: i.Yj().optional(),
    mimeType: i.Yj(),
    providerOptions: be.optional(),
    experimental_providerMetadata: be.optional()
}), xe = i.Ik({
    type: i.eu("reasoning"),
    text: i.Yj(),
    providerOptions: be.optional(),
    experimental_providerMetadata: be.optional()
}), Te = i.Ik({
    type: i.eu("redacted-reasoning"),
    data: i.Yj(),
    providerOptions: be.optional(),
    experimental_providerMetadata: be.optional()
}), Re = i.Ik({
    type: i.eu("tool-call"),
    toolCallId: i.Yj(),
    toolName: i.Yj(),
    args: i.L5(),
    providerOptions: be.optional(),
    experimental_providerMetadata: be.optional()
}), Be = i.Ik({
    type: i.eu("tool-result"),
    toolCallId: i.Yj(),
    toolName: i.Yj(),
    result: i.L5(),
    content: Ee.optional(),
    isError: i.zM().optional(),
    providerOptions: be.optional(),
    experimental_providerMetadata: be.optional()
}), Pe = i.Ik({
    role: i.eu("system"),
    content: i.Yj(),
    providerOptions: be.optional(),
    experimental_providerMetadata: be.optional()
}), Je = i.Ik({
    role: i.eu("user"),
    content: i.KC([
        i.Yj(),
        i.YO(i.KC([
            Ie,
            Ce,
            ke
        ]))
    ]),
    providerOptions: be.optional(),
    experimental_providerMetadata: be.optional()
}), Me = i.Ik({
    role: i.eu("assistant"),
    content: i.KC([
        i.Yj(),
        i.YO(i.KC([
            Ie,
            ke,
            xe,
            Te,
            Re
        ]))
    ]),
    providerOptions: be.optional(),
    experimental_providerMetadata: be.optional()
}), qe = i.Ik({
    role: i.eu("tool"),
    content: i.YO(Be),
    providerOptions: be.optional(),
    experimental_providerMetadata: be.optional()
}), De = i.KC([
    Pe,
    Je,
    Me,
    qe
]);
function Oe({ prompt: e, tools: t }) {
    if (null == e.prompt && null == e.messages) throw new n.M3({
        prompt: e,
        message: "prompt or messages must be defined"
    });
    if (null != e.prompt && null != e.messages) throw new n.M3({
        prompt: e,
        message: "prompt and messages cannot be defined at the same time"
    });
    if (null != e.system && "string" != typeof e.system) throw new n.M3({
        prompt: e,
        message: "system must be a string"
    });
    if (null != e.prompt) {
        if ("string" != typeof e.prompt) throw new n.M3({
            prompt: e,
            message: "prompt must be a string"
        });
        return {
            type: "prompt",
            system: e.system,
            messages: [
                {
                    role: "user",
                    content: e.prompt
                }
            ]
        };
    }
    if (null != e.messages) {
        const r = function(e) {
            if (!Array.isArray(e)) throw new n.M3({
                prompt: e,
                message: [
                    "messages must be an array of CoreMessage or UIMessage",
                    `Received non-array value: ${JSON.stringify(e)}`
                ].join("\n"),
                cause: e
            });
            if (0 === e.length) return "messages";
            const t = e.map(Ne);
            if (t.some((e)=>"has-ui-specific-parts" === e)) return "ui-messages";
            const r = t.findIndex((e)=>"has-core-specific-parts" !== e && "message" !== e);
            if (-1 === r) return "messages";
            throw new n.M3({
                prompt: e,
                message: [
                    "messages must be an array of CoreMessage or UIMessage",
                    `Received message of type: "${t[r]}" at index ${r}`,
                    `messages[${r}]: ${JSON.stringify(e[r])}`
                ].join("\n"),
                cause: e
            });
        }(e.messages), o = "ui-messages" === r ? function(e, t) {
            var r, n;
            const s = null != (r = null == t ? void 0 : t.tools) ? r : {}, o = [];
            for(let t = 0; t < e.length; t++){
                const r = e[t], i = t === e.length - 1, { role: a, content: c, experimental_attachments: l } = r;
                switch(a){
                    case "system":
                        o.push({
                            role: "system",
                            content: c
                        });
                        break;
                    case "user":
                        if (null == r.parts) o.push({
                            role: "user",
                            content: l ? [
                                {
                                    type: "text",
                                    text: c
                                },
                                ...ge(l)
                            ] : c
                        });
                        else {
                            const e = r.parts.filter((e)=>"text" === e.type).map((e)=>({
                                    type: "text",
                                    text: e.text
                                }));
                            o.push({
                                role: "user",
                                content: l ? [
                                    ...e,
                                    ...ge(l)
                                ] : e
                            });
                        }
                        break;
                    case "assistant":
                        {
                            if (null != r.parts) {
                                let e = function() {
                                    const e = [];
                                    for (const t of a)switch(t.type){
                                        case "file":
                                        case "text":
                                            e.push(t);
                                            break;
                                        case "reasoning":
                                            for (const r of t.details)switch(r.type){
                                                case "text":
                                                    e.push({
                                                        type: "reasoning",
                                                        text: r.text,
                                                        signature: r.signature
                                                    });
                                                    break;
                                                case "redacted":
                                                    e.push({
                                                        type: "redacted-reasoning",
                                                        data: r.data
                                                    });
                                            }
                                            break;
                                        case "tool-invocation":
                                            e.push({
                                                type: "tool-call",
                                                toolCallId: t.toolInvocation.toolCallId,
                                                toolName: t.toolInvocation.toolName,
                                                args: t.toolInvocation.args
                                            });
                                            break;
                                        default:
                                            throw new Error(`Unsupported part: ${t}`);
                                    }
                                    o.push({
                                        role: "assistant",
                                        content: e
                                    });
                                    const n = a.filter((e)=>"tool-invocation" === e.type).map((e)=>e.toolInvocation);
                                    n.length > 0 && o.push({
                                        role: "tool",
                                        content: n.map((e)=>{
                                            if (!("result" in e)) throw new Ae({
                                                originalMessage: r,
                                                message: "ToolInvocation must have a result: " + JSON.stringify(e)
                                            });
                                            const { toolCallId: t, toolName: n, result: o } = e, i = s[n];
                                            return null != (null == i ? void 0 : i.experimental_toToolResultContent) ? {
                                                type: "tool-result",
                                                toolCallId: t,
                                                toolName: n,
                                                result: i.experimental_toToolResultContent(o),
                                                experimental_content: i.experimental_toToolResultContent(o)
                                            } : {
                                                type: "tool-result",
                                                toolCallId: t,
                                                toolName: n,
                                                result: o
                                            };
                                        })
                                    }), a = [], i = !1, t++;
                                }, t = 0, i = !1, a = [];
                                for (const s of r.parts)switch(s.type){
                                    case "text":
                                        i && e(), a.push(s);
                                        break;
                                    case "file":
                                    case "reasoning":
                                        a.push(s);
                                        break;
                                    case "tool-invocation":
                                        (null != (n = s.toolInvocation.step) ? n : 0) !== t && e(), a.push(s), i = !0;
                                }
                                e();
                                break;
                            }
                            const e = r.toolInvocations;
                            if (null == e || 0 === e.length) {
                                o.push({
                                    role: "assistant",
                                    content: c
                                });
                                break;
                            }
                            const t = e.reduce((e, t)=>{
                                var r;
                                return Math.max(e, null != (r = t.step) ? r : 0);
                            }, 0);
                            for(let n = 0; n <= t; n++){
                                const t = e.filter((e)=>{
                                    var t;
                                    return (null != (t = e.step) ? t : 0) === n;
                                });
                                0 !== t.length && (o.push({
                                    role: "assistant",
                                    content: [
                                        ...i && c && 0 === n ? [
                                            {
                                                type: "text",
                                                text: c
                                            }
                                        ] : [],
                                        ...t.map(({ toolCallId: e, toolName: t, args: r })=>({
                                                type: "tool-call",
                                                toolCallId: e,
                                                toolName: t,
                                                args: r
                                            }))
                                    ]
                                }), o.push({
                                    role: "tool",
                                    content: t.map((e)=>{
                                        if (!("result" in e)) throw new Ae({
                                            originalMessage: r,
                                            message: "ToolInvocation must have a result: " + JSON.stringify(e)
                                        });
                                        const { toolCallId: t, toolName: n, result: o } = e, i = s[n];
                                        return null != (null == i ? void 0 : i.experimental_toToolResultContent) ? {
                                            type: "tool-result",
                                            toolCallId: t,
                                            toolName: n,
                                            result: i.experimental_toToolResultContent(o),
                                            experimental_content: i.experimental_toToolResultContent(o)
                                        } : {
                                            type: "tool-result",
                                            toolCallId: t,
                                            toolName: n,
                                            result: o
                                        };
                                    })
                                }));
                            }
                            c && !i && o.push({
                                role: "assistant",
                                content: c
                            });
                            break;
                        }
                    case "data":
                        break;
                    default:
                        throw new Ae({
                            originalMessage: r,
                            message: `Unsupported role: ${a}`
                        });
                }
            }
            return o;
        }(e.messages, {
            tools: t
        }) : e.messages;
        if (0 === o.length) throw new n.M3({
            prompt: e,
            message: "messages must not be empty"
        });
        const a = (0, s.ZZ)({
            value: o,
            schema: i.YO(De)
        });
        if (!a.success) throw new n.M3({
            prompt: e,
            message: [
                "message must be a CoreMessage or a UI message",
                `Validation error: ${a.error.message}`
            ].join("\n"),
            cause: a.error
        });
        return {
            type: "messages",
            messages: o,
            system: e.system
        };
    }
    throw new Error("unreachable");
}
function Ne(e) {
    return "object" == typeof e && null !== e && ("function" === e.role || "data" === e.role || "toolInvocations" in e || "parts" in e || "experimental_attachments" in e) ? "has-ui-specific-parts" : "object" == typeof e && null !== e && "content" in e && (Array.isArray(e.content) || "experimental_providerMetadata" in e || "providerOptions" in e) ? "has-core-specific-parts" : "object" == typeof e && null !== e && "role" in e && "content" in e && "string" == typeof e.content && [
        "system",
        "user",
        "assistant",
        "tool"
    ].includes(e.role) ? "message" : "other";
}
function Fe({ promptTokens: e, completionTokens: t }) {
    return {
        promptTokens: e,
        completionTokens: t,
        totalTokens: e + t
    };
}
function Ue(e, t) {
    return {
        promptTokens: e.promptTokens + t.promptTokens,
        completionTokens: e.completionTokens + t.completionTokens,
        totalTokens: e.totalTokens + t.totalTokens
    };
}
function Le({ prompt: e, schema: t, schemaPrefix: r = null != t ? "JSON schema:" : void 0, schemaSuffix: n = null != t ? "You MUST answer with a JSON object that matches the JSON schema above." : "You MUST answer with JSON." }) {
    return [
        null != e && e.length > 0 ? e : void 0,
        null != e && e.length > 0 ? "" : void 0,
        r,
        null != t ? JSON.stringify(t) : void 0,
        n
    ].filter((e)=>null != e).join("\n");
}
function $e(e) {
    const t = e.pipeThrough(new TransformStream);
    return t[Symbol.asyncIterator] = ()=>{
        const e = t.getReader();
        return {
            async next () {
                const { done: t, value: r } = await e.read();
                return t ? {
                    done: !0,
                    value: void 0
                } : {
                    done: !1,
                    value: r
                };
            }
        };
    }, t;
}
function Qe(e) {
    const t = e.map((e)=>({
            ...e,
            content: "string" == typeof e.content ? e.content : e.content.map(je)
        }));
    return JSON.stringify(t);
}
function je(e) {
    return "image" === e.type ? {
        ...e,
        image: e.image instanceof Uint8Array ? ie(e.image) : e.image
    } : e;
}
(0, s.hK)({
    prefix: "aiobj",
    size: 24
});
var Ge = class {
    constructor(){
        this.status = {
            type: "pending"
        }, this._resolve = void 0, this._reject = void 0;
    }
    get value() {
        return this.promise || (this.promise = new Promise((e, t)=>{
            "resolved" === this.status.type ? e(this.status.value) : "rejected" === this.status.type && t(this.status.error), this._resolve = e, this._reject = t;
        })), this.promise;
    }
    resolve(e) {
        var t;
        this.status = {
            type: "resolved",
            value: e
        }, this.promise && (null == (t = this._resolve) || t.call(this, e));
    }
    reject(e) {
        var t;
        this.status = {
            type: "rejected",
            error: e
        }, this.promise && (null == (t = this._reject) || t.call(this, e));
    }
};
function He() {
    let e, t;
    return {
        promise: new Promise((r, n)=>{
            e = r, t = n;
        }),
        resolve: e,
        reject: t
    };
}
function ze() {
    let e = [], t = null, r = !1, n = He();
    const s = async ()=>{
        if (r && 0 === e.length) null == t || t.close();
        else {
            if (0 === e.length) return n = He(), await n.promise, s();
            try {
                const { value: n, done: o } = await e[0].read();
                o ? (e.shift(), e.length > 0 ? await s() : r && (null == t || t.close())) : null == t || t.enqueue(n);
            } catch (n) {
                null == t || t.error(n), e.shift(), r && 0 === e.length && (null == t || t.close());
            }
        }
    };
    return {
        stream: new ReadableStream({
            start (e) {
                t = e;
            },
            pull: s,
            async cancel () {
                for (const t of e)await t.cancel();
                e = [], r = !0;
            }
        }),
        addStream: (t)=>{
            if (r) throw new Error("Cannot add inner stream: outer stream is closed");
            e.push(t.getReader()), n.resolve();
        },
        close: ()=>{
            r = !0, n.resolve(), 0 === e.length && (null == t || t.close());
        },
        terminate: ()=>{
            r = !0, n.resolve(), e.forEach((e)=>e.cancel()), e = [], null == t || t.close();
        }
    };
}
function We() {
    var e, t;
    return null != (t = null == (e = null == globalThis ? void 0 : globalThis.performance) ? void 0 : e.now()) ? t : Date.now();
}
(0, s.hK)({
    prefix: "aiobj",
    size: 24
});
var Ve, Ke = "AI_NoOutputSpecifiedError", Ye = `vercel.ai.error.${Ke}`, Ze = Symbol.for(Ye), Xe = class extends n.bD {
    constructor({ message: e = "No output specified." } = {}){
        super({
            name: Ke,
            message: e
        }), this[Ve] = !0;
    }
    static isInstance(e) {
        return n.bD.hasMarker(e, Ye);
    }
};
Ve = Ze;
var et, tt = "AI_ToolExecutionError", rt = `vercel.ai.error.${tt}`, nt = Symbol.for(rt), st = class extends n.bD {
    constructor({ toolArgs: e, toolName: t, toolCallId: r, cause: s, message: o = `Error executing tool ${t}: ${(0, n.u1)(s)}` }){
        super({
            name: tt,
            message: o,
            cause: s
        }), this[et] = !0, this.toolArgs = e, this.toolName = t, this.toolCallId = r;
    }
    static isInstance(e) {
        return n.bD.hasMarker(e, rt);
    }
};
function ot({ tools: e, toolChoice: t, activeTools: r }) {
    if (!(null != (n = e) && Object.keys(n).length > 0)) return {
        tools: void 0,
        toolChoice: void 0
    };
    var n;
    return {
        tools: (null != r ? Object.entries(e).filter(([e])=>r.includes(e)) : Object.entries(e)).map(([e, t])=>{
            const r = t.type;
            switch(r){
                case void 0:
                case "function":
                    return {
                        type: "function",
                        name: e,
                        description: t.description,
                        parameters: (0, a.mD)(t.parameters).jsonSchema
                    };
                case "provider-defined":
                    return {
                        type: "provider-defined",
                        name: e,
                        id: t.id,
                        args: t.args
                    };
                default:
                    throw new Error(`Unsupported tool type: ${r}`);
            }
        }),
        toolChoice: null == t ? {
            type: "auto"
        } : "string" == typeof t ? {
            type: t
        } : {
            type: "tool",
            toolName: t.toolName
        }
    };
}
et = nt;
var it = /^([\s\S]*?)(\s+)(\S*)$/;
function at(e) {
    const t = e.match(it);
    return t ? {
        prefix: t[1],
        whitespace: t[2],
        suffix: t[3]
    } : void 0;
}
var ct, lt = "AI_InvalidToolArgumentsError", ut = `vercel.ai.error.${lt}`, dt = Symbol.for(ut), pt = class extends n.bD {
    constructor({ toolArgs: e, toolName: t, cause: r, message: s = `Invalid arguments for tool ${t}: ${(0, n.u1)(r)}` }){
        super({
            name: lt,
            message: s,
            cause: r
        }), this[ct] = !0, this.toolArgs = e, this.toolName = t;
    }
    static isInstance(e) {
        return n.bD.hasMarker(e, ut);
    }
};
ct = dt;
var mt, ht = "AI_NoSuchToolError", ft = `vercel.ai.error.${ht}`, gt = Symbol.for(ft), yt = class extends n.bD {
    constructor({ toolName: e, availableTools: t, message: r = `Model tried to call unavailable tool '${e}'. ${void 0 === t ? "No tools are available." : `Available tools: ${t.join(", ")}.`}` }){
        super({
            name: ht,
            message: r
        }), this[mt] = !0, this.toolName = e, this.availableTools = t;
    }
    static isInstance(e) {
        return n.bD.hasMarker(e, ft);
    }
};
mt = gt;
var wt, vt = "AI_ToolCallRepairError", _t = `vercel.ai.error.${vt}`, At = Symbol.for(_t), St = class extends n.bD {
    constructor({ cause: e, originalError: t, message: r = `Error repairing tool call: ${(0, n.u1)(e)}` }){
        super({
            name: vt,
            message: r,
            cause: e
        }), this[wt] = !0, this.originalError = t;
    }
    static isInstance(e) {
        return n.bD.hasMarker(e, _t);
    }
};
async function bt({ toolCall: e, tools: t, repairToolCall: r, system: n, messages: s }) {
    if (null == t) throw new yt({
        toolName: e.toolName
    });
    try {
        return await Et({
            toolCall: e,
            tools: t
        });
    } catch (o) {
        if (null == r || !yt.isInstance(o) && !pt.isInstance(o)) throw o;
        let i = null;
        try {
            i = await r({
                toolCall: e,
                tools: t,
                parameterSchema: ({ toolName: e })=>(0, a.mD)(t[e].parameters).jsonSchema,
                system: n,
                messages: s,
                error: o
            });
        } catch (e) {
            throw new St({
                cause: e,
                originalError: o
            });
        }
        if (null == i) throw o;
        return await Et({
            toolCall: i,
            tools: t
        });
    }
}
async function Et({ toolCall: e, tools: t }) {
    const r = e.toolName, n = t[r];
    if (null == n) throw new yt({
        toolName: e.toolName,
        availableTools: Object.keys(t)
    });
    const o = (0, a.mD)(n.parameters), i = "" === e.args.trim() ? (0, s.ZZ)({
        value: {},
        schema: o
    }) : (0, s.N8)({
        text: e.args,
        schema: o
    });
    if (!1 === i.success) throw new pt({
        toolName: r,
        toolArgs: e.args,
        cause: i.error
    });
    return {
        type: "tool-call",
        toolCallId: e.toolCallId,
        toolName: r,
        args: i.value
    };
}
function It(e) {
    const t = e.filter((e)=>"text" === e.type).map((e)=>e.text).join("");
    return t.length > 0 ? t : void 0;
}
function Ct({ text: e = "", files: t, reasoning: r, tools: n, toolCalls: s, toolResults: o, messageId: i, generateMessageId: a }) {
    const c = [], l = [];
    return r.length > 0 && l.push(...r.map((e)=>"text" === e.type ? {
            ...e,
            type: "reasoning"
        } : {
            ...e,
            type: "redacted-reasoning"
        })), t.length > 0 && l.push(...t.map((e)=>({
            type: "file",
            data: e.base64,
            mimeType: e.mimeType
        }))), e.length > 0 && l.push({
        type: "text",
        text: e
    }), s.length > 0 && l.push(...s), l.length > 0 && c.push({
        role: "assistant",
        content: l,
        id: i
    }), o.length > 0 && c.push({
        role: "tool",
        id: a(),
        content: o.map((e)=>{
            const t = n[e.toolName];
            return null != (null == t ? void 0 : t.experimental_toToolResultContent) ? {
                type: "tool-result",
                toolCallId: e.toolCallId,
                toolName: e.toolName,
                result: t.experimental_toToolResultContent(e.result),
                experimental_content: t.experimental_toToolResultContent(e.result)
            } : {
                type: "tool-result",
                toolCallId: e.toolCallId,
                toolName: e.toolName,
                result: e.result
            };
        })
    }), c;
}
wt = At;
(0, s.hK)({
    prefix: "aitxt",
    size: 24
}), (0, s.hK)({
    prefix: "msg",
    size: 24
});
l({}, {
    object: ()=>Dt,
    text: ()=>qt
});
var kt, xt = "AI_InvalidStreamPartError", Tt = `vercel.ai.error.${xt}`, Rt = Symbol.for(Tt), Bt = class extends n.bD {
    constructor({ chunk: e, message: t }){
        super({
            name: xt,
            message: t
        }), this[kt] = !0, this.chunk = e;
    }
    static isInstance(e) {
        return n.bD.hasMarker(e, Tt);
    }
};
kt = Rt;
var Pt, Jt = "vercel.ai.error.AI_MCPClientError", Mt = Symbol.for(Jt);
n.bD;
Pt = Mt;
var qt = ()=>({
        type: "text",
        responseFormat: ()=>({
                type: "text"
            }),
        injectIntoSystemPrompt: ({ system: e })=>e,
        parsePartial: ({ text: e })=>({
                partial: e
            }),
        parseOutput: ({ text: e })=>e
    }), Dt = ({ schema: e })=>{
    const t = (0, a.mD)(e);
    return {
        type: "object",
        responseFormat: ({ model: e })=>({
                type: "json",
                schema: e.supportsStructuredOutputs ? t.jsonSchema : void 0
            }),
        injectIntoSystemPrompt: ({ system: e, model: r })=>r.supportsStructuredOutputs ? e : Le({
                prompt: e,
                schema: t.jsonSchema
            }),
        parsePartial ({ text: e }) {
            const t = (0, a.d1)(e);
            switch(t.state){
                case "failed-parse":
                case "undefined-input":
                    return;
                case "repaired-parse":
                case "successful-parse":
                    return {
                        partial: t.value
                    };
                default:
                    {
                        const e = t.state;
                        throw new Error(`Unsupported parse state: ${e}`);
                    }
            }
        },
        parseOutput ({ text: e }, r) {
            const n = (0, s.N8)({
                text: e
            });
            if (!n.success) throw new z({
                message: "No object generated: could not parse the response.",
                cause: n.error,
                text: e,
                response: r.response,
                usage: r.usage,
                finishReason: r.finishReason
            });
            const o = (0, s.ZZ)({
                value: n.value,
                schema: t
            });
            if (!o.success) throw new z({
                message: "No object generated: response did not match schema.",
                cause: o.error,
                text: e,
                response: r.response,
                usage: r.usage,
                finishReason: r.finishReason
            });
            return o.value;
        }
    };
};
function Ot(e) {
    return void 0 === e ? [] : Array.isArray(e) ? e : [
        e
    ];
}
function Nt(e, t) {
    const r = e.getReader(), n = t.getReader();
    let s, o, i = !1, a = !1;
    async function c(e) {
        try {
            null == s && (s = r.read());
            const t = await s;
            s = void 0, t.done ? e.close() : e.enqueue(t.value);
        } catch (t) {
            e.error(t);
        }
    }
    async function l(e) {
        try {
            null == o && (o = n.read());
            const t = await o;
            o = void 0, t.done ? e.close() : e.enqueue(t.value);
        } catch (t) {
            e.error(t);
        }
    }
    return new ReadableStream({
        async pull (e) {
            try {
                if (i) return void await l(e);
                if (a) return void await c(e);
                null == s && (s = r.read()), null == o && (o = n.read());
                const { result: t, reader: u } = await Promise.race([
                    s.then((e)=>({
                            result: e,
                            reader: r
                        })),
                    o.then((e)=>({
                            result: e,
                            reader: n
                        }))
                ]);
                t.done || e.enqueue(t.value), u === r ? (s = void 0, t.done && (await l(e), i = !0)) : (o = void 0, t.done && (a = !0, await c(e)));
            } catch (t) {
                e.error(t);
            }
        },
        cancel () {
            r.cancel(), n.cancel();
        }
    });
}
var Ft = (0, s.hK)({
    prefix: "aitxt",
    size: 24
}), Ut = (0, s.hK)({
    prefix: "msg",
    size: 24
});
function Lt({ model: e, tools: t, toolChoice: r, system: n, prompt: s, messages: o, maxRetries: i, abortSignal: a, headers: c, maxSteps: l = 1, experimental_generateMessageId: u = Ut, experimental_output: d, experimental_continueSteps: p = !1, experimental_telemetry: m, experimental_providerMetadata: h, providerOptions: f = h, experimental_toolCallStreaming: g = !1, toolCallStreaming: y = g, experimental_activeTools: w, experimental_repairToolCall: v, experimental_transform: _, onChunk: A, onError: S, onFinish: b, onStepFinish: E, _internal: { now: I = We, generateId: C = Ft, currentDate: k = ()=>new Date } = {}, ...x }) {
    return new $t({
        model: e,
        telemetry: m,
        headers: c,
        settings: x,
        maxRetries: i,
        abortSignal: a,
        system: n,
        prompt: s,
        messages: o,
        tools: t,
        toolChoice: r,
        toolCallStreaming: y,
        transforms: Ot(_),
        activeTools: w,
        repairToolCall: v,
        maxSteps: l,
        output: d,
        continueSteps: p,
        providerOptions: f,
        onChunk: A,
        onError: S,
        onFinish: b,
        onStepFinish: E,
        now: I,
        currentDate: k,
        generateId: C,
        generateMessageId: u
    });
}
var $t = class {
    constructor({ model: e, telemetry: t, headers: r, settings: o, maxRetries: i, abortSignal: a, system: c, prompt: l, messages: u, tools: d, toolChoice: p, toolCallStreaming: m, transforms: h, activeTools: f, repairToolCall: g, maxSteps: w, output: v, continueSteps: _, providerOptions: A, now: S, currentDate: b, generateId: E, generateMessageId: x, onChunk: T, onError: R, onFinish: M, onStepFinish: q }){
        var D;
        if (this.warningsPromise = new Ge, this.usagePromise = new Ge, this.finishReasonPromise = new Ge, this.providerMetadataPromise = new Ge, this.textPromise = new Ge, this.reasoningPromise = new Ge, this.reasoningDetailsPromise = new Ge, this.sourcesPromise = new Ge, this.filesPromise = new Ge, this.toolCallsPromise = new Ge, this.toolResultsPromise = new Ge, this.requestPromise = new Ge, this.responsePromise = new Ge, this.stepsPromise = new Ge, w < 1) throw new y({
            parameter: "maxSteps",
            value: w,
            message: "maxSteps must be at least 1"
        });
        this.output = v;
        let O, N = "", U = "", L = "", $ = [], Q = [], j = [];
        const G = [], H = {
            id: E(),
            timestamp: b(),
            modelId: e.modelId,
            messages: []
        };
        let z, W, V = [], K = [], Y = "initial";
        const Z = [];
        let X;
        const ee = new TransformStream({
            async transform (e, t) {
                t.enqueue(e);
                const { part: r } = e;
                if ("text-delta" !== r.type && "reasoning" !== r.type && "source" !== r.type && "tool-call" !== r.type && "tool-result" !== r.type && "tool-call-streaming-start" !== r.type && "tool-call-delta" !== r.type || await (null == T ? void 0 : T({
                    chunk: r
                })), "error" === r.type && await (null == R ? void 0 : R({
                    error: r.error
                })), "text-delta" === r.type && (N += r.textDelta, U += r.textDelta, L += r.textDelta), "reasoning" === r.type && (null == O ? (O = {
                    type: "text",
                    text: r.textDelta
                }, $.push(O)) : O.text += r.textDelta), "reasoning-signature" === r.type) {
                    if (null == O) throw new n.bD({
                        name: "InvalidStreamPart",
                        message: "reasoning-signature without reasoning"
                    });
                    O.signature = r.signature, O = void 0;
                }
                if ("redacted-reasoning" === r.type && $.push({
                    type: "redacted",
                    data: r.data
                }), "file" === r.type && Q.push(r), "source" === r.type && (G.push(r.source), j.push(r.source)), "tool-call" === r.type && V.push(r), "tool-result" === r.type && K.push(r), "step-finish" === r.type) {
                    const e = Ct({
                        text: U,
                        files: Q,
                        reasoning: $,
                        tools: null != d ? d : {},
                        toolCalls: V,
                        toolResults: K,
                        messageId: r.messageId,
                        generateMessageId: x
                    });
                    let t = "done";
                    Z.length + 1 < w && (_ && "length" === r.finishReason && 0 === V.length ? t = "continue" : V.length > 0 && K.length === V.length && (t = "tool-result"));
                    const n = {
                        stepType: Y,
                        text: N,
                        reasoning: It($),
                        reasoningDetails: $,
                        files: Q,
                        sources: j,
                        toolCalls: V,
                        toolResults: K,
                        finishReason: r.finishReason,
                        usage: r.usage,
                        warnings: r.warnings,
                        logprobs: r.logprobs,
                        request: r.request,
                        response: {
                            ...r.response,
                            messages: [
                                ...H.messages,
                                ...e
                            ]
                        },
                        providerMetadata: r.experimental_providerMetadata,
                        experimental_providerMetadata: r.experimental_providerMetadata,
                        isContinued: r.isContinued
                    };
                    await (null == q ? void 0 : q(n)), Z.push(n), V = [], K = [], N = "", j = [], $ = [], Q = [], O = void 0, "done" !== t && (Y = t), "continue" !== t && (H.messages.push(...e), U = "");
                }
                "finish" === r.type && (H.id = r.response.id, H.timestamp = r.response.timestamp, H.modelId = r.response.modelId, H.headers = r.response.headers, W = r.usage, z = r.finishReason);
            },
            async flush (e) {
                var r;
                try {
                    if (0 === Z.length) return;
                    const e = Z[Z.length - 1];
                    ce.warningsPromise.resolve(e.warnings), ce.requestPromise.resolve(e.request), ce.responsePromise.resolve(e.response), ce.toolCallsPromise.resolve(e.toolCalls), ce.toolResultsPromise.resolve(e.toolResults), ce.providerMetadataPromise.resolve(e.experimental_providerMetadata), ce.reasoningPromise.resolve(e.reasoning), ce.reasoningDetailsPromise.resolve(e.reasoningDetails);
                    const n = null != z ? z : "unknown", s = null != W ? W : {
                        completionTokens: NaN,
                        promptTokens: NaN,
                        totalTokens: NaN
                    };
                    ce.finishReasonPromise.resolve(n), ce.usagePromise.resolve(s), ce.textPromise.resolve(L), ce.sourcesPromise.resolve(G), ce.filesPromise.resolve(e.files), ce.stepsPromise.resolve(Z), await (null == M ? void 0 : M({
                        finishReason: n,
                        logprobs: void 0,
                        usage: s,
                        text: L,
                        reasoning: e.reasoning,
                        reasoningDetails: e.reasoningDetails,
                        files: e.files,
                        sources: e.sources,
                        toolCalls: e.toolCalls,
                        toolResults: e.toolResults,
                        request: null != (r = e.request) ? r : {},
                        response: e.response,
                        warnings: e.warnings,
                        providerMetadata: e.providerMetadata,
                        experimental_providerMetadata: e.experimental_providerMetadata,
                        steps: Z
                    })), X.setAttributes(J({
                        telemetry: t,
                        attributes: {
                            "ai.response.finishReason": n,
                            "ai.response.text": {
                                output: ()=>L
                            },
                            "ai.response.toolCalls": {
                                output: ()=>{
                                    var t;
                                    return (null == (t = e.toolCalls) ? void 0 : t.length) ? JSON.stringify(e.toolCalls) : void 0;
                                }
                            },
                            "ai.usage.promptTokens": s.promptTokens,
                            "ai.usage.completionTokens": s.completionTokens,
                            "ai.response.providerMetadata": JSON.stringify(e.providerMetadata)
                        }
                    }));
                } catch (t) {
                    e.error(t);
                } finally{
                    X.end();
                }
            }
        }), te = ze();
        this.addStream = te.addStream, this.closeStream = te.close;
        let re = te.stream;
        for (const e of h)re = re.pipeThrough(e({
            tools: d,
            stopStream () {
                te.terminate();
            }
        }));
        this.baseStream = re.pipeThrough(function(e) {
            if (!e) return new TransformStream({
                transform (e, t) {
                    t.enqueue({
                        part: e,
                        partialOutput: void 0
                    });
                }
            });
            let t = "", r = "", n = "";
            function s({ controller: e, partialOutput: t }) {
                e.enqueue({
                    part: {
                        type: "text-delta",
                        textDelta: r
                    },
                    partialOutput: t
                }), r = "";
            }
            return new TransformStream({
                transform (o, i) {
                    if ("step-finish" === o.type && s({
                        controller: i
                    }), "text-delta" !== o.type) return void i.enqueue({
                        part: o,
                        partialOutput: void 0
                    });
                    t += o.textDelta, r += o.textDelta;
                    const a = e.parsePartial({
                        text: t
                    });
                    if (null != a) {
                        const e = JSON.stringify(a.partial);
                        e !== n && (s({
                            controller: i,
                            partialOutput: a.partial
                        }), n = e);
                    }
                },
                flush (e) {
                    r.length > 0 && s({
                        controller: e
                    });
                }
            });
        }(v)).pipeThrough(ee);
        const { maxRetries: ne, retry: se } = I({
            maxRetries: i
        }), oe = B(t), ie = k({
            model: e,
            telemetry: t,
            headers: r,
            settings: {
                ...o,
                maxRetries: ne
            }
        }), ae = Oe({
            prompt: {
                system: null != (D = null == v ? void 0 : v.injectIntoSystemPrompt({
                    system: c,
                    model: e
                })) ? D : c,
                prompt: l,
                messages: u
            },
            tools: d
        }), ce = this;
        P({
            name: "ai.streamText",
            attributes: J({
                telemetry: t,
                attributes: {
                    ...C({
                        operationId: "ai.streamText",
                        telemetry: t
                    }),
                    ...ie,
                    "ai.prompt": {
                        input: ()=>JSON.stringify({
                                system: c,
                                prompt: l,
                                messages: u
                            })
                    },
                    "ai.settings.maxSteps": w
                }
            }),
            tracer: oe,
            endWhenDone: !1,
            fn: async (n)=>{
                X = n, await async function n({ currentStep: i, responseMessages: l, usage: u, stepType: h, previousStepText: y, hasLeadingWhitespace: I, messageId: k }) {
                    var T;
                    const R = 0 === l.length ? ae.type : "messages", B = [
                        ...ae.messages,
                        ...l
                    ], M = await he({
                        prompt: {
                            type: R,
                            system: ae.system,
                            messages: B
                        },
                        modelSupportsImageUrls: e.supportsImageUrls,
                        modelSupportsUrl: null == (T = e.supportsUrl) ? void 0 : T.bind(e)
                    }), q = {
                        type: "regular",
                        ...ot({
                            tools: d,
                            toolChoice: p,
                            activeTools: f
                        })
                    }, { result: { stream: D, warnings: O, rawResponse: N, request: U }, doStreamSpan: L, startTimestampMs: $ } = await se(()=>P({
                            name: "ai.streamText.doStream",
                            attributes: J({
                                telemetry: t,
                                attributes: {
                                    ...C({
                                        operationId: "ai.streamText.doStream",
                                        telemetry: t
                                    }),
                                    ...ie,
                                    "ai.prompt.format": {
                                        input: ()=>R
                                    },
                                    "ai.prompt.messages": {
                                        input: ()=>Qe(M)
                                    },
                                    "ai.prompt.tools": {
                                        input: ()=>{
                                            var e;
                                            return null == (e = q.tools) ? void 0 : e.map((e)=>JSON.stringify(e));
                                        }
                                    },
                                    "ai.prompt.toolChoice": {
                                        input: ()=>null != q.toolChoice ? JSON.stringify(q.toolChoice) : void 0
                                    },
                                    "gen_ai.system": e.provider,
                                    "gen_ai.request.model": e.modelId,
                                    "gen_ai.request.frequency_penalty": o.frequencyPenalty,
                                    "gen_ai.request.max_tokens": o.maxTokens,
                                    "gen_ai.request.presence_penalty": o.presencePenalty,
                                    "gen_ai.request.stop_sequences": o.stopSequences,
                                    "gen_ai.request.temperature": o.temperature,
                                    "gen_ai.request.top_k": o.topK,
                                    "gen_ai.request.top_p": o.topP
                                }
                            }),
                            tracer: oe,
                            endWhenDone: !1,
                            fn: async (t)=>({
                                    startTimestampMs: S(),
                                    doStreamSpan: t,
                                    result: await e.doStream({
                                        mode: q,
                                        ...fe(o),
                                        inputFormat: R,
                                        responseFormat: null == v ? void 0 : v.responseFormat({
                                            model: e
                                        }),
                                        prompt: M,
                                        providerMetadata: A,
                                        abortSignal: a,
                                        headers: r
                                    })
                                })
                        })), Q = function({ tools: e, generatorStream: t, toolCallStreaming: r, tracer: n, telemetry: o, system: i, messages: a, abortSignal: c, repairToolCall: l }) {
                        let u = null;
                        const d = new ReadableStream({
                            start (e) {
                                u = e;
                            }
                        }), p = {}, m = new Set;
                        let h, f = !1;
                        function g() {
                            f && 0 === m.size && (null != h && u.enqueue(h), u.close());
                        }
                        const y = new TransformStream({
                            async transform (t, d) {
                                const f = t.type;
                                switch(f){
                                    case "text-delta":
                                    case "reasoning":
                                    case "reasoning-signature":
                                    case "redacted-reasoning":
                                    case "source":
                                    case "response-metadata":
                                    case "error":
                                        d.enqueue(t);
                                        break;
                                    case "file":
                                        d.enqueue(new F({
                                            data: t.data,
                                            mimeType: t.mimeType
                                        }));
                                        break;
                                    case "tool-call-delta":
                                        r && (p[t.toolCallId] || (d.enqueue({
                                            type: "tool-call-streaming-start",
                                            toolCallId: t.toolCallId,
                                            toolName: t.toolName
                                        }), p[t.toolCallId] = !0), d.enqueue({
                                            type: "tool-call-delta",
                                            toolCallId: t.toolCallId,
                                            toolName: t.toolName,
                                            argsTextDelta: t.argsTextDelta
                                        }));
                                        break;
                                    case "tool-call":
                                        try {
                                            const r = await bt({
                                                toolCall: t,
                                                tools: e,
                                                repairToolCall: l,
                                                system: i,
                                                messages: a
                                            });
                                            d.enqueue(r);
                                            const p = e[r.toolName];
                                            if (null != p.execute) {
                                                const e = (0, s.$C)();
                                                m.add(e), P({
                                                    name: "ai.toolCall",
                                                    attributes: J({
                                                        telemetry: o,
                                                        attributes: {
                                                            ...C({
                                                                operationId: "ai.toolCall",
                                                                telemetry: o
                                                            }),
                                                            "ai.toolCall.name": r.toolName,
                                                            "ai.toolCall.id": r.toolCallId,
                                                            "ai.toolCall.args": {
                                                                output: ()=>JSON.stringify(r.args)
                                                            }
                                                        }
                                                    }),
                                                    tracer: n,
                                                    fn: async (t)=>p.execute(r.args, {
                                                            toolCallId: r.toolCallId,
                                                            messages: a,
                                                            abortSignal: c
                                                        }).then((n)=>{
                                                            u.enqueue({
                                                                ...r,
                                                                type: "tool-result",
                                                                result: n
                                                            }), m.delete(e), g();
                                                            try {
                                                                t.setAttributes(J({
                                                                    telemetry: o,
                                                                    attributes: {
                                                                        "ai.toolCall.result": {
                                                                            output: ()=>JSON.stringify(n)
                                                                        }
                                                                    }
                                                                }));
                                                            } catch (e) {}
                                                        }, (t)=>{
                                                            u.enqueue({
                                                                type: "error",
                                                                error: new st({
                                                                    toolCallId: r.toolCallId,
                                                                    toolName: r.toolName,
                                                                    toolArgs: r.args,
                                                                    cause: t
                                                                })
                                                            }), m.delete(e), g();
                                                        })
                                                });
                                            }
                                        } catch (e) {
                                            u.enqueue({
                                                type: "error",
                                                error: e
                                            });
                                        }
                                        break;
                                    case "finish":
                                        h = {
                                            type: "finish",
                                            finishReason: t.finishReason,
                                            logprobs: t.logprobs,
                                            usage: Fe(t.usage),
                                            experimental_providerMetadata: t.providerMetadata
                                        };
                                        break;
                                    default:
                                        throw new Error(`Unhandled chunk type: ${f}`);
                                }
                            },
                            flush () {
                                f = !0, g();
                            }
                        });
                        return new ReadableStream({
                            start: async (e)=>Promise.all([
                                    t.pipeThrough(y).pipeTo(new WritableStream({
                                        write (t) {
                                            e.enqueue(t);
                                        },
                                        close () {}
                                    })),
                                    d.pipeTo(new WritableStream({
                                        write (t) {
                                            e.enqueue(t);
                                        },
                                        close () {
                                            e.close();
                                        }
                                    }))
                                ])
                        });
                    }({
                        tools: d,
                        generatorStream: D,
                        toolCallStreaming: m,
                        tracer: oe,
                        telemetry: t,
                        system: c,
                        messages: B,
                        repairToolCall: g,
                        abortSignal: a
                    }), j = null != U ? U : {}, G = [], H = [], z = [], W = [];
                    let V, K, Y, Z = "unknown", X = {
                        promptTokens: 0,
                        completionTokens: 0,
                        totalTokens: 0
                    }, ee = !0, te = "", re = "continue" === h ? y : "", ne = {
                        id: E(),
                        timestamp: b(),
                        modelId: e.modelId
                    }, le = "", ue = !1, de = !0, pe = !1;
                    async function me({ controller: e, chunk: t }) {
                        e.enqueue(t), te += t.textDelta, re += t.textDelta, ue = !0, pe = t.textDelta.trimEnd() !== t.textDelta;
                    }
                    ce.addStream(Q.pipeThrough(new TransformStream({
                        async transform (e, t) {
                            var r, n, s;
                            if (ee) {
                                const e = S() - $;
                                ee = !1, L.addEvent("ai.stream.firstChunk", {
                                    "ai.response.msToFirstChunk": e
                                }), L.setAttributes({
                                    "ai.response.msToFirstChunk": e
                                }), t.enqueue({
                                    type: "step-start",
                                    messageId: k,
                                    request: j,
                                    warnings: null != O ? O : []
                                });
                            }
                            if ("text-delta" === e.type && 0 === e.textDelta.length) return;
                            const o = e.type;
                            switch(o){
                                case "text-delta":
                                    if (_) {
                                        const r = de && I ? e.textDelta.trimStart() : e.textDelta;
                                        if (0 === r.length) break;
                                        de = !1, le += r;
                                        const n = at(le);
                                        null != n && (le = n.suffix, await me({
                                            controller: t,
                                            chunk: {
                                                type: "text-delta",
                                                textDelta: n.prefix + n.whitespace
                                            }
                                        }));
                                    } else await me({
                                        controller: t,
                                        chunk: e
                                    });
                                    break;
                                case "reasoning":
                                    t.enqueue(e), null == V ? (V = {
                                        type: "text",
                                        text: e.textDelta
                                    }, z.push(V)) : V.text += e.textDelta;
                                    break;
                                case "reasoning-signature":
                                    if (t.enqueue(e), null == V) throw new Bt({
                                        chunk: e,
                                        message: "reasoning-signature without reasoning"
                                    });
                                    V.signature = e.signature, V = void 0;
                                    break;
                                case "redacted-reasoning":
                                    t.enqueue(e), z.push({
                                        type: "redacted",
                                        data: e.data
                                    });
                                    break;
                                case "tool-call":
                                    t.enqueue(e), G.push(e);
                                    break;
                                case "tool-result":
                                    t.enqueue(e), H.push(e);
                                    break;
                                case "response-metadata":
                                    ne = {
                                        id: null != (r = e.id) ? r : ne.id,
                                        timestamp: null != (n = e.timestamp) ? n : ne.timestamp,
                                        modelId: null != (s = e.modelId) ? s : ne.modelId
                                    };
                                    break;
                                case "finish":
                                    {
                                        X = e.usage, Z = e.finishReason, K = e.experimental_providerMetadata, Y = e.logprobs;
                                        const t = S() - $;
                                        L.addEvent("ai.stream.finish"), L.setAttributes({
                                            "ai.response.msToFinish": t,
                                            "ai.response.avgCompletionTokensPerSecond": 1e3 * X.completionTokens / t
                                        });
                                        break;
                                    }
                                case "file":
                                    W.push(e), t.enqueue(e);
                                    break;
                                case "source":
                                case "tool-call-streaming-start":
                                case "tool-call-delta":
                                    t.enqueue(e);
                                    break;
                                case "error":
                                    t.enqueue(e), Z = "error";
                                    break;
                                default:
                                    throw new Error(`Unknown chunk type: ${o}`);
                            }
                        },
                        async flush (e) {
                            const r = G.length > 0 ? JSON.stringify(G) : void 0;
                            let s = "done";
                            i + 1 < w && (_ && "length" === Z && 0 === G.length ? s = "continue" : G.length > 0 && H.length === G.length && (s = "tool-result")), _ && le.length > 0 && ("continue" !== s || "continue" === h && !ue) && (await me({
                                controller: e,
                                chunk: {
                                    type: "text-delta",
                                    textDelta: le
                                }
                            }), le = "");
                            try {
                                L.setAttributes(J({
                                    telemetry: t,
                                    attributes: {
                                        "ai.response.finishReason": Z,
                                        "ai.response.text": {
                                            output: ()=>te
                                        },
                                        "ai.response.toolCalls": {
                                            output: ()=>r
                                        },
                                        "ai.response.id": ne.id,
                                        "ai.response.model": ne.modelId,
                                        "ai.response.timestamp": ne.timestamp.toISOString(),
                                        "ai.response.providerMetadata": JSON.stringify(K),
                                        "ai.usage.promptTokens": X.promptTokens,
                                        "ai.usage.completionTokens": X.completionTokens,
                                        "gen_ai.response.finish_reasons": [
                                            Z
                                        ],
                                        "gen_ai.response.id": ne.id,
                                        "gen_ai.response.model": ne.modelId,
                                        "gen_ai.usage.input_tokens": X.promptTokens,
                                        "gen_ai.usage.output_tokens": X.completionTokens
                                    }
                                }));
                            } catch (e) {} finally{
                                L.end();
                            }
                            e.enqueue({
                                type: "step-finish",
                                finishReason: Z,
                                usage: X,
                                providerMetadata: K,
                                experimental_providerMetadata: K,
                                logprobs: Y,
                                request: j,
                                response: {
                                    ...ne,
                                    headers: null == N ? void 0 : N.headers
                                },
                                warnings: O,
                                isContinued: "continue" === s,
                                messageId: k
                            });
                            const o = Ue(u, X);
                            if ("done" === s) e.enqueue({
                                type: "finish",
                                finishReason: Z,
                                usage: o,
                                providerMetadata: K,
                                experimental_providerMetadata: K,
                                logprobs: Y,
                                response: {
                                    ...ne,
                                    headers: null == N ? void 0 : N.headers
                                }
                            }), ce.closeStream();
                            else {
                                if ("continue" === h) {
                                    const e = l[l.length - 1];
                                    "string" == typeof e.content ? e.content += te : e.content.push({
                                        text: te,
                                        type: "text"
                                    });
                                } else l.push(...Ct({
                                    text: te,
                                    files: W,
                                    reasoning: z,
                                    tools: null != d ? d : {},
                                    toolCalls: G,
                                    toolResults: H,
                                    messageId: k,
                                    generateMessageId: x
                                }));
                                await n({
                                    currentStep: i + 1,
                                    responseMessages: l,
                                    usage: o,
                                    stepType: s,
                                    previousStepText: re,
                                    hasLeadingWhitespace: pe,
                                    messageId: "continue" === s ? k : x()
                                });
                            }
                        }
                    })));
                }({
                    currentStep: 0,
                    responseMessages: [],
                    usage: {
                        promptTokens: 0,
                        completionTokens: 0,
                        totalTokens: 0
                    },
                    previousStepText: "",
                    stepType: "initial",
                    hasLeadingWhitespace: !1,
                    messageId: x()
                });
            }
        }).catch((e)=>{
            ce.addStream(new ReadableStream({
                start (t) {
                    t.enqueue({
                        type: "error",
                        error: e
                    }), t.close();
                }
            })), ce.closeStream();
        });
    }
    get warnings() {
        return this.warningsPromise.value;
    }
    get usage() {
        return this.usagePromise.value;
    }
    get finishReason() {
        return this.finishReasonPromise.value;
    }
    get experimental_providerMetadata() {
        return this.providerMetadataPromise.value;
    }
    get providerMetadata() {
        return this.providerMetadataPromise.value;
    }
    get text() {
        return this.textPromise.value;
    }
    get reasoning() {
        return this.reasoningPromise.value;
    }
    get reasoningDetails() {
        return this.reasoningDetailsPromise.value;
    }
    get sources() {
        return this.sourcesPromise.value;
    }
    get files() {
        return this.filesPromise.value;
    }
    get toolCalls() {
        return this.toolCallsPromise.value;
    }
    get toolResults() {
        return this.toolResultsPromise.value;
    }
    get request() {
        return this.requestPromise.value;
    }
    get response() {
        return this.responsePromise.value;
    }
    get steps() {
        return this.stepsPromise.value;
    }
    teeStream() {
        const [e, t] = this.baseStream.tee();
        return this.baseStream = t, e;
    }
    get textStream() {
        return $e(this.teeStream().pipeThrough(new TransformStream({
            transform ({ part: e }, t) {
                "text-delta" === e.type && t.enqueue(e.textDelta);
            }
        })));
    }
    get fullStream() {
        return $e(this.teeStream().pipeThrough(new TransformStream({
            transform ({ part: e }, t) {
                t.enqueue(e);
            }
        })));
    }
    async consumeStream(e) {
        var t;
        try {
            await async function({ stream: e, onError: t }) {
                const r = e.getReader();
                try {
                    for(;;){
                        const { done: e } = await r.read();
                        if (e) break;
                    }
                } catch (e) {
                    null == t || t(e);
                } finally{
                    r.releaseLock();
                }
            }({
                stream: this.fullStream,
                onError: null == e ? void 0 : e.onError
            });
        } catch (r) {
            null == (t = null == e ? void 0 : e.onError) || t.call(e, r);
        }
    }
    get experimental_partialOutputStream() {
        if (null == this.output) throw new Xe;
        return $e(this.teeStream().pipeThrough(new TransformStream({
            transform ({ partialOutput: e }, t) {
                null != e && t.enqueue(e);
            }
        })));
    }
    toDataStreamInternal({ getErrorMessage: e = ()=>"An error occurred.", sendUsage: t = !0, sendReasoning: r = !1, sendSources: n = !1, experimental_sendFinish: s = !0 }) {
        return this.fullStream.pipeThrough(new TransformStream({
            transform: async (o, i)=>{
                const c = o.type;
                switch(c){
                    case "text-delta":
                        i.enqueue((0, a.H4)("text", o.textDelta));
                        break;
                    case "reasoning":
                        r && i.enqueue((0, a.H4)("reasoning", o.textDelta));
                        break;
                    case "redacted-reasoning":
                        r && i.enqueue((0, a.H4)("redacted_reasoning", {
                            data: o.data
                        }));
                        break;
                    case "reasoning-signature":
                        r && i.enqueue((0, a.H4)("reasoning_signature", {
                            signature: o.signature
                        }));
                        break;
                    case "file":
                        i.enqueue((0, a.H4)("file", {
                            mimeType: o.mimeType,
                            data: o.base64
                        }));
                        break;
                    case "source":
                        n && i.enqueue((0, a.H4)("source", o.source));
                        break;
                    case "tool-call-streaming-start":
                        i.enqueue((0, a.H4)("tool_call_streaming_start", {
                            toolCallId: o.toolCallId,
                            toolName: o.toolName
                        }));
                        break;
                    case "tool-call-delta":
                        i.enqueue((0, a.H4)("tool_call_delta", {
                            toolCallId: o.toolCallId,
                            argsTextDelta: o.argsTextDelta
                        }));
                        break;
                    case "tool-call":
                        i.enqueue((0, a.H4)("tool_call", {
                            toolCallId: o.toolCallId,
                            toolName: o.toolName,
                            args: o.args
                        }));
                        break;
                    case "tool-result":
                        i.enqueue((0, a.H4)("tool_result", {
                            toolCallId: o.toolCallId,
                            result: o.result
                        }));
                        break;
                    case "error":
                        i.enqueue((0, a.H4)("error", e(o.error)));
                        break;
                    case "step-start":
                        i.enqueue((0, a.H4)("start_step", {
                            messageId: o.messageId
                        }));
                        break;
                    case "step-finish":
                        i.enqueue((0, a.H4)("finish_step", {
                            finishReason: o.finishReason,
                            usage: t ? {
                                promptTokens: o.usage.promptTokens,
                                completionTokens: o.usage.completionTokens
                            } : void 0,
                            isContinued: o.isContinued
                        }));
                        break;
                    case "finish":
                        s && i.enqueue((0, a.H4)("finish_message", {
                            finishReason: o.finishReason,
                            usage: t ? {
                                promptTokens: o.usage.promptTokens,
                                completionTokens: o.usage.completionTokens
                            } : void 0
                        }));
                        break;
                    default:
                        throw new Error(`Unknown chunk type: ${c}`);
                }
            }
        }));
    }
    pipeDataStreamToResponse(e, { status: t, statusText: r, headers: n, data: s, getErrorMessage: o, sendUsage: i, sendReasoning: a, sendSources: c, experimental_sendFinish: l } = {}) {
        p({
            response: e,
            status: t,
            statusText: r,
            headers: d(n, {
                contentType: "text/plain; charset=utf-8",
                dataStreamVersion: "v1"
            }),
            stream: this.toDataStream({
                data: s,
                getErrorMessage: o,
                sendUsage: i,
                sendReasoning: a,
                sendSources: c,
                experimental_sendFinish: l
            })
        });
    }
    pipeTextStreamToResponse(e, t) {
        p({
            response: e,
            status: null == t ? void 0 : t.status,
            statusText: null == t ? void 0 : t.statusText,
            headers: d(null == t ? void 0 : t.headers, {
                contentType: "text/plain; charset=utf-8"
            }),
            stream: this.textStream.pipeThrough(new TextEncoderStream)
        });
    }
    toDataStream(e) {
        const t = this.toDataStreamInternal({
            getErrorMessage: null == e ? void 0 : e.getErrorMessage,
            sendUsage: null == e ? void 0 : e.sendUsage,
            sendReasoning: null == e ? void 0 : e.sendReasoning,
            sendSources: null == e ? void 0 : e.sendSources,
            experimental_sendFinish: null == e ? void 0 : e.experimental_sendFinish
        }).pipeThrough(new TextEncoderStream);
        return (null == e ? void 0 : e.data) ? Nt(null == e ? void 0 : e.data.stream, t) : t;
    }
    mergeIntoDataStream(e, t) {
        e.merge(this.toDataStreamInternal({
            getErrorMessage: e.onError,
            sendUsage: null == t ? void 0 : t.sendUsage,
            sendReasoning: null == t ? void 0 : t.sendReasoning,
            sendSources: null == t ? void 0 : t.sendSources,
            experimental_sendFinish: null == t ? void 0 : t.experimental_sendFinish
        }));
    }
    toDataStreamResponse({ headers: e, status: t, statusText: r, data: n, getErrorMessage: s, sendUsage: o, sendReasoning: i, sendSources: a, experimental_sendFinish: c } = {}) {
        return new Response(this.toDataStream({
            data: n,
            getErrorMessage: s,
            sendUsage: o,
            sendReasoning: i,
            sendSources: a,
            experimental_sendFinish: c
        }), {
            status: t,
            statusText: r,
            headers: u(e, {
                contentType: "text/plain; charset=utf-8",
                dataStreamVersion: "v1"
            })
        });
    }
    toTextStreamResponse(e) {
        var t;
        return new Response(this.textStream.pipeThrough(new TextEncoderStream), {
            status: null != (t = null == e ? void 0 : e.status) ? t : 200,
            headers: u(null == e ? void 0 : e.headers, {
                contentType: "text/plain; charset=utf-8"
            })
        });
    }
};
n.bD;
n.bD;
var Qt, jt = "AI_NoSuchProviderError", Gt = `vercel.ai.error.${jt}`, Ht = Symbol.for(Gt);
n.eM;
Qt = Ht;
var zt = i.Ik({
    name: i.Yj(),
    version: i.Yj()
}).passthrough(), Wt = i.Ik({
    _meta: i.lq(i.Ik({}).passthrough())
}).passthrough(), Vt = Wt, Kt = i.Ik({
    method: i.Yj(),
    params: i.lq(Wt)
}), Yt = i.Ik({
    experimental: i.lq(i.Ik({}).passthrough()),
    logging: i.lq(i.Ik({}).passthrough()),
    prompts: i.lq(i.Ik({
        listChanged: i.lq(i.zM())
    }).passthrough()),
    resources: i.lq(i.Ik({
        subscribe: i.lq(i.zM()),
        listChanged: i.lq(i.zM())
    }).passthrough()),
    tools: i.lq(i.Ik({
        listChanged: i.lq(i.zM())
    }).passthrough())
}).passthrough(), Zt = (Vt.extend({
    protocolVersion: i.Yj(),
    capabilities: Yt,
    serverInfo: zt,
    instructions: i.lq(i.Yj())
}), Vt.extend({
    nextCursor: i.lq(i.Yj())
})), Xt = i.Ik({
    name: i.Yj(),
    description: i.lq(i.Yj()),
    inputSchema: i.Ik({
        type: i.eu("object"),
        properties: i.lq(i.Ik({}).passthrough())
    }).passthrough()
}).passthrough(), er = (Zt.extend({
    tools: i.YO(Xt)
}), i.Ik({
    type: i.eu("text"),
    text: i.Yj()
}).passthrough()), tr = i.Ik({
    type: i.eu("image"),
    data: i.Yj().base64(),
    mimeType: i.Yj()
}).passthrough(), rr = i.Ik({
    uri: i.Yj(),
    mimeType: i.lq(i.Yj())
}).passthrough(), nr = rr.extend({
    text: i.Yj()
}), sr = rr.extend({
    blob: i.Yj().base64()
}), or = i.Ik({
    type: i.eu("resource"),
    resource: i.KC([
        nr,
        sr
    ])
}).passthrough(), ir = (Vt.extend({
    content: i.YO(i.KC([
        er,
        tr,
        or
    ])),
    isError: i.zM().default(!1).optional()
}).or(Vt.extend({
    toolResult: i.L5()
})), "2.0"), ar = i.Ik({
    jsonrpc: i.eu(ir),
    id: i.KC([
        i.Yj(),
        i.ai().int()
    ])
}).merge(Kt).strict(), cr = i.Ik({
    jsonrpc: i.eu(ir),
    id: i.KC([
        i.Yj(),
        i.ai().int()
    ]),
    result: Vt
}).strict(), lr = i.Ik({
    jsonrpc: i.eu(ir),
    id: i.KC([
        i.Yj(),
        i.ai().int()
    ]),
    error: i.Ik({
        code: i.ai().int(),
        message: i.Yj(),
        data: i.lq(i.L5())
    })
}).strict(), ur = i.Ik({
    jsonrpc: i.eu(ir)
}).merge(i.Ik({
    method: i.Yj(),
    params: i.lq(Wt)
})).strict();
i.KC([
    ar,
    ur,
    cr,
    lr
]);
function dr(e = {}) {
    const t = new TextEncoder;
    let r = "";
    return new TransformStream({
        async start () {
            e.onStart && await e.onStart();
        },
        async transform (n, s) {
            s.enqueue(t.encode(n)), r += n, e.onToken && await e.onToken(n), e.onText && "string" == typeof n && await e.onText(n);
        },
        async flush () {
            e.onCompletion && await e.onCompletion(r), e.onFinal && await e.onFinal(r);
        }
    });
}
function pr(e, t) {
    return e.pipeThrough(new TransformStream({
        transform: async (e, t)=>{
            var r;
            "string" != typeof e ? "event" in e ? "on_chat_model_stream" === e.event && gr(null == (r = e.data) ? void 0 : r.chunk, t) : gr(e, t) : t.enqueue(e);
        }
    })).pipeThrough(dr(t)).pipeThrough(new TextDecoderStream).pipeThrough(new TransformStream({
        transform: async (e, t)=>{
            t.enqueue((0, a.H4)("text", e));
        }
    }));
}
function mr(e, t) {
    return pr(e, t).pipeThrough(new TextEncoderStream);
}
function hr(e, t) {
    var r;
    const n = pr(e, null == t ? void 0 : t.callbacks).pipeThrough(new TextEncoderStream), s = null == t ? void 0 : t.data, o = null == t ? void 0 : t.init, i = s ? Nt(s.stream, n) : n;
    return new Response(i, {
        status: null != (r = null == o ? void 0 : o.status) ? r : 200,
        statusText: null == o ? void 0 : o.statusText,
        headers: u(null == o ? void 0 : o.headers, {
            contentType: "text/plain; charset=utf-8",
            dataStreamVersion: "v1"
        })
    });
}
function fr(e, t) {
    t.dataStream.merge(pr(e, t.callbacks));
}
function gr(e, t) {
    if ("string" == typeof e.content) t.enqueue(e.content);
    else {
        const r = e.content;
        for (const e of r)"text" === e.type && t.enqueue(e.text);
    }
}
l({}, {
    mergeIntoDataStream: ()=>fr,
    toDataStream: ()=>mr,
    toDataStreamResponse: ()=>hr
});
function yr(e, t) {
    const r = function() {
        let e = !0;
        return (t)=>(e && (t = t.trimStart()) && (e = !1), t);
    }();
    return (0, s.NR)(e[Symbol.asyncIterator]()).pipeThrough(new TransformStream({
        async transform (e, t) {
            t.enqueue(r(e.delta));
        }
    })).pipeThrough(dr(t)).pipeThrough(new TextDecoderStream).pipeThrough(new TransformStream({
        transform: async (e, t)=>{
            t.enqueue((0, a.H4)("text", e));
        }
    }));
}
function wr(e, t) {
    return yr(e, t).pipeThrough(new TextEncoderStream);
}
function vr(e, t = {}) {
    var r;
    const { init: n, data: s, callbacks: o } = t, i = yr(e, o).pipeThrough(new TextEncoderStream), a = s ? Nt(s.stream, i) : i;
    return new Response(a, {
        status: null != (r = null == n ? void 0 : n.status) ? r : 200,
        statusText: null == n ? void 0 : n.statusText,
        headers: u(null == n ? void 0 : n.headers, {
            contentType: "text/plain; charset=utf-8",
            dataStreamVersion: "v1"
        })
    });
}
function _r(e, t) {
    t.dataStream.merge(yr(e, t.callbacks));
}
l({}, {
    mergeIntoDataStream: ()=>_r,
    toDataStream: ()=>wr,
    toDataStreamResponse: ()=>vr
});
function Ar(e) {
    return !0 === e.providerOptions?.cursor?.isSummary;
}
function Sr(e, t, r) {
    return e.map((e, n)=>n === t ? r : e);
}
function br(e, t, r) {
    const n = e.lastIndexOf(t);
    return -1 === n ? void 0 : `${e.slice(0, n)}${r}\n${e.slice(n)}`;
}
function Er(e, t, r) {
    if (void 0 !== r) for(let n = e.length - 1; n >= 0; n--){
        const s = e[n];
        if ("user" !== s.role || Ar(s)) return;
        const o = Ir(s.content, r, t);
        if (void 0 !== o) return Sr(e, n, {
            ...s,
            content: o
        });
    }
}
function Ir(e, t, r) {
    if ("string" == typeof e) return br(e, t, r);
    for(let n = e.length - 1; n >= 0; n--){
        const s = e[n];
        if ("text" !== s.type) continue;
        const o = br(s.text, t, r);
        if (void 0 !== o) return Sr(e, n, {
            ...s,
            text: o
        });
    }
}
function Cr(e, t) {
    const r = {
        type: "text",
        text: t
    }, n = e.at(-1);
    if ("user" !== n?.role || Ar(n)) return [
        ...e,
        {
            role: "user",
            content: [
                r
            ]
        }
    ];
    const s = "string" == typeof n.content ? [
        {
            type: "text",
            text: n.content
        },
        r
    ] : [
        ...n.content,
        r
    ];
    return Sr(e, e.length - 1, {
        ...n,
        content: s
    });
}
const kr = "next_user_message";
function xr(e) {
    return "system" === e.role && e.providerOptions?.cursor?.clearAt === kr;
}
function Tr(e) {
    const t = e.providerOptions?.cursor?.fallbackInsertBefore;
    return "string" == typeof t && t.length > 0 ? t : void 0;
}
function Rr(e) {
    return "user" === e.role || "tool" === e.role;
}
function Br(e) {
    if (!e.some(xr)) return e;
    const t = e.findLastIndex(Rr), r = [], n = [];
    return e.forEach((e, s)=>{
        "system" === e.role && xr(e) ? s > t && e.content.length > 0 && n.push({
            text: e.content,
            insertBefore: Tr(e)
        }) : r.push(e);
    }), function(e, t) {
        if (0 === t.length) return e;
        let r = e;
        for (const { text: e, insertBefore: n } of t)r = Er(r, e, n) ?? Cr(r, e);
        return r;
    }(r, n);
}
class Pr {
    constructor(e){
        this.messages = [], e && (Array.isArray(e) ? this.messages = [
            ...e
        ] : this.messages = [
            e
        ]);
    }
    appendMessages(e) {
        const t = Array.isArray(e) ? e : [
            e
        ];
        return this.messages.push(...t), this;
    }
    getState() {
        return [
            ...this.messages
        ];
    }
    getMessages() {
        return [
            ...this.messages
        ];
    }
    clearMessages() {
        this.messages = [];
    }
}
class Jr {
    constructor(e){
        this.builder = e;
    }
    appendMessages(e) {
        return this.builder.appendMessages(e), this;
    }
    getState() {
        return this.builder.getState();
    }
    getMessages() {
        return this.builder.getMessages();
    }
    clearMessages() {
        this.builder.clearMessages();
    }
    requestMessages({ nativeStepScopedSystemMessages: e = !1 } = {}) {
        return (function(e, { native: t }) {
            return t ? e : Br(e);
        })(this.builder.getMessages(), {
            native: e
        }).map(Mr);
    }
}
function Mr(e) {
    const t = "tool" === e.role ? e.providerOptions?.cursor : void 0;
    if (void 0 === t || !("highLevelToolCallResult" in t)) return e;
    const { highLevelToolCallResult: r, ...n } = t;
    return {
        ...e,
        providerOptions: {
            ...e.providerOptions,
            cursor: n
        }
    };
}
class qr {
    constructor(e){
        this.innerExecutor = e;
    }
    appendMessages(e) {
        return this.innerExecutor.appendMessages(e), this;
    }
    getState() {
        return this.innerExecutor.getState();
    }
    getMessages() {
        return this.innerExecutor.getMessages();
    }
    clearMessages() {
        this.innerExecutor.clearMessages();
    }
    stream(e, t, r, n) {
        return this.innerExecutor.stream(e, t, r, n);
    }
}
var Dr = require("./module-33002.js");
function Or(e, t = !1) {
    return {
        content: [
            {
                type: "text",
                text: e
            }
        ],
        isError: t
    };
}
function Nr(e, t) {
    return {
        ...e,
        systemReminders: [
            ...e.systemReminders ?? [],
            t
        ]
    };
}
function Fr(e, t, r, n = !1) {
    const s = [];
    return r && s.push({
        type: "text",
        text: r
    }), s.push({
        type: "image",
        data: e,
        mimeType: t
    }), {
        content: s,
        isError: n
    };
}
class Ur extends Error {
    constructor(e = "Provider exceeded max output tokens"){
        super(e), this.name = "OutputTokensLimitExceededError";
    }
}
class Lr extends Error {
    constructor(e = "Input token limit exceeded"){
        super(e), this.name = "InputTokenLimitError";
    }
}
class $r extends Error {
    constructor(e = "Configured summarization threshold reached"){
        super(e), this.name = "ProactiveSummarizationThresholdError";
    }
}
const Qr = (0, Dr.cF)(Symbol("compactionEpoch"), void 0), jr = (0, Dr.cF)(Symbol("summarizedMessageCount"), void 0), Gr = (0, Dr.cF)(Symbol("currentUserMessageSimulatedFields"), void 0), Hr = (0, Dr.cF)(Symbol("constrainedDecodingRetry"), !1);
function zr(e) {
    const t = {};
    for (const r of e ?? [])t[r.name] = r;
    return t;
}
var Wr = require("./module-37949.js");
const Vr = (0, Wr.h)("@anysphere/chat-inference/continuation-injector-middleware");
class Kr extends qr {
    stream(e, t, r, n) {
        const s = this.innerExecutor.getMessages();
        return function(e) {
            if (0 === e.length) return !1;
            const t = e[e.length - 1];
            return "assistant" === t.role && !("assistant" === (r = t).role && (r.content, 0 === r.content.length));
            var r;
        }(s) && (Vr.info(e, "[continuation-injector] last message is assistant; injecting continuation prompt", {
            messageCount: s.length
        }), this.innerExecutor.appendMessages({
            role: "user",
            content: "Your previous response was interrupted. Continue from where you left off."
        })), this.innerExecutor.stream(e, t, r, n);
    }
}
const Yr = ()=>(e)=>new Kr(e), Zr = (Yr(), (0, Wr.h)("@anysphere/chat-inference/effort-level-middleware")), Xr = {
    low: 11,
    medium: 13,
    high: 15,
    xhigh: 17
};
function en(e) {
    return `<system_reminder>Apply effort level ${function(e) {
        return e in Xr ? Xr[e] : /^\d+$/.test(e) ? Number(e) : void 0;
    }(e) ?? e} when carrying out the user's request.</system_reminder>`;
}
const tn = /\n(?:<system_reminder>)?Apply effort level \S+ when carrying out the user's request\.(?:<\/system_reminder>)?$/;
function rn(e) {
    return e.replace(tn, "");
}
function nn(e, t) {
    const r = `\n${en(t)}`;
    return tn.test(e) ? e.replace(tn, r) : e + r;
}
class sn extends qr {
    constructor(e, t){
        super(e), this.options = t;
    }
    stream(e, t, r, n) {
        const s = this.innerExecutor.getMessages();
        const o = function(e, t) {
            let r = -1;
            for(let t = e.length - 1; t >= 0; t--)if ("user" === e[t].role) {
                r = t;
                break;
            }
            if (-1 === r) return e;
            const n = [
                ...e
            ], s = n[r];
            if (Ar(s)) return e;
            if ("string" == typeof s.content) n[r] = {
                ...s,
                content: nn(s.content, t)
            };
            else if (Array.isArray(s.content)) {
                const e = [
                    ...s.content
                ];
                let o = -1;
                for(let t = e.length - 1; t >= 0; t--)if ("text" === e[t].type) {
                    o = t;
                    break;
                }
                if (-1 !== o) {
                    const i = e[o];
                    e[o] = {
                        ...i,
                        text: nn(i.text, t)
                    }, n[r] = {
                        ...s,
                        content: e
                    };
                }
            }
            return n;
        }(this.options.persistEffortInstruction ? s : s.map((e)=>{
            if ("user" !== e.role) return e;
            const t = e;
            if ("string" == typeof t.content) {
                const r = rn(t.content);
                return r === t.content ? e : {
                    ...t,
                    content: r
                };
            }
            if (Array.isArray(t.content)) {
                let r = !1;
                const n = t.content.map((e)=>{
                    if ("text" !== e.type) return e;
                    const t = rn(e.text);
                    return t !== e.text ? (r = !0, {
                        ...e,
                        text: t
                    }) : e;
                });
                return r ? {
                    ...t,
                    content: n
                } : e;
            }
            return e;
        }), this.options.effortLevel);
        Zr.info(e, "[effort-level-middleware] applying effort level to stream", {
            effortLevel: this.options.effortLevel,
            messageCount: s.length,
            persistInstruction: this.options.persistEffortInstruction
        }), this.innerExecutor.clearMessages(), this.innerExecutor.appendMessages(o);
        return this.innerExecutor.stream(e, t, r, n);
    }
}
const on = (e)=>(t)=>new sn(t, e);
var an = require("./module-65716.js"), cn = require("./module-78780.js");
const ln = (0, Wr.h)("@anysphere/chat-inference/image-resizing-middleware");
function un(e) {
    const t = new URL(e);
    if ("data:" !== t.protocol) throw new Error("Expected an image data URL");
    const r = t.pathname.indexOf(",");
    if (-1 === r) throw new Error("Image data URL is missing its data separator");
    const n = t.pathname.slice(0, r), [s, ...o] = n.split(";"), i = s.toLowerCase();
    if (!i.startsWith("image/") || !o.some((e)=>"base64" === e.toLowerCase())) throw new Error("Image data URL must contain base64-encoded image data");
    const a = t.pathname.slice(r + 1), c = Buffer.from(a, "base64");
    if (0 === c.length) throw new Error("Image data URL contains no image data");
    return {
        data: c,
        mimeType: i
    };
}
const dn = (e)=>({
        ...e,
        convertUnsupportedModelFormatsToPng: !0
    });
async function pn(e) {
    const t = await crypto.subtle.digest("SHA-256", new Uint8Array(e));
    return Buffer.from(t).toString("hex");
}
async function mn(e, t) {
    const r = e.providerOptions?.cursor;
    return "string" == typeof r?.imageContentSha256 || "string" == typeof r?.imageDescription && r.imageDescription.length > 0 ? e : {
        ...e,
        providerOptions: {
            ...e.providerOptions,
            cursor: {
                ...r,
                imageContentSha256: await pn(t)
            }
        }
    };
}
const hn = ({ checkedImageParts: e, part: t, payload: r })=>e.has(t) && e.get(t) === r;
async function fn({ ctx: e, messages: t, resizeOptions: r, checkedImageParts: n }) {
    return (0, an.PH)(t, (t)=>(async function({ ctx: e, message: t, resizeOptions: r, checkedImageParts: n }) {
            if ("user" === t.role) {
                if ("string" == typeof t.content || !Array.isArray(t.content)) return t;
                let s = !1;
                const o = [];
                for (const i of t.content)if ("image" === i.type) {
                    if (hn({
                        checkedImageParts: n,
                        part: i,
                        payload: i.image
                    })) {
                        o.push(i);
                        continue;
                    }
                    let t, a, c = i.mimeType, l = "string" == typeof i.image ? Buffer.byteLength(i.image) : i.image instanceof Uint8Array ? i.image.length : 0;
                    try {
                        if (i.image instanceof Uint8Array) t = Buffer.from(i.image), l = i.image.length, a = "bytes";
                        else {
                            if ("string" != typeof i.image || "data:image/" !== i.image.slice(0, 11).toLowerCase()) {
                                o.push(i);
                                continue;
                            }
                            {
                                const e = un(i.image);
                                t = e.data, c = e.mimeType, l = e.data.length, a = "data-url";
                            }
                        }
                        const u = !0 === r?.stampUserImageContentSha256 ? await mn(i, t) : i, d = await (0, cn.O5)(t, dn(r));
                        if (d.data.length !== t.length || d.mimeType !== c) {
                            s = !0, ln.info(e, "Resized image in user message", {
                                originalSize: l,
                                newSize: d.data.length,
                                newMimeType: d.mimeType
                            });
                            const t = {
                                ...u,
                                image: "data-url" === a ? `data:${d.mimeType};base64,${Buffer.from(d.data).toString("base64")}` : d.data,
                                mimeType: d.mimeType
                            };
                            n.set(t, t.image), o.push(t);
                        } else u !== i && (s = !0), n.set(u, u.image), o.push(u);
                    } catch (t) {
                        s = !0, ln.error(e, "Failed to resize image, dropping it", t, {
                            originalSize: l
                        }), o.push({
                            type: "text",
                            text: `[image omitted: failed to process ${l} bytes (${i.mimeType ?? "unknown"})]`
                        });
                    }
                } else o.push(i);
                return s ? {
                    ...t,
                    content: o
                } : t;
            }
            if ("tool" === t.role) {
                if (!Array.isArray(t.content)) return t;
                let s = !1;
                const o = [
                    ...t.content
                ];
                for(let i = 0; i < t.content.length; i++){
                    const a = t.content[i];
                    if ("tool-result" === a.type) {
                        const t = a.experimental_content;
                        if (!Array.isArray(t)) continue;
                        let c = !1;
                        const l = [
                            ...t
                        ];
                        for(let o = 0; o < t.length; o++){
                            const u = t[o];
                            if ("image" === u.type) {
                                if (hn({
                                    checkedImageParts: n,
                                    part: u,
                                    payload: u.data
                                })) continue;
                                let t;
                                if ("string" != typeof u.data) continue;
                                try {
                                    t = Buffer.from(u.data, "base64");
                                } catch (t) {
                                    ln.error(e, "Failed to decode base64 image in tool result", t, {
                                        partIndex: i,
                                        expContentIndex: o
                                    });
                                    continue;
                                }
                                try {
                                    const d = r?.toolResultWebpOverrides?.[a.toolName], p = await (0, cn.O5)(t, dn(void 0 === d ? r : {
                                        ...r,
                                        ...d
                                    }));
                                    if (p.data.length !== t.length || p.mimeType !== u.mimeType) {
                                        c = !0, s = !0, ln.info(e, "Resized image in tool result", {
                                            partIndex: i,
                                            expContentIndex: o,
                                            originalSize: t.length,
                                            newSize: p.data.length,
                                            newMimeType: p.mimeType
                                        });
                                        const r = Buffer.from(p.data).toString("base64"), a = {
                                            ...u,
                                            data: r,
                                            mimeType: p.mimeType
                                        };
                                        n.set(a, a.data), l[o] = a;
                                    } else n.set(u, u.data);
                                } catch (r) {
                                    c = !0, s = !0, ln.error(e, "Failed to resize image in tool result, dropping it", r, {
                                        partIndex: i,
                                        expContentIndex: o,
                                        originalSize: t.length
                                    }), l[o] = {
                                        type: "text",
                                        text: `[image omitted: failed to process ${t.length} bytes (${u.mimeType ?? "unknown"})]`
                                    };
                                }
                            }
                        }
                        c && (o[i] = {
                            ...a,
                            experimental_content: l
                        });
                    }
                }
                if (s) return {
                    ...t,
                    content: o
                };
            }
            return t;
        })({
            ctx: e,
            message: t,
            resizeOptions: r,
            checkedImageParts: n
        }), {
        max: 4
    });
}
class gn extends qr {
    constructor({ innerExecutor: e, resizeOptions: t, checkedImageParts: r }){
        super(e), this.resizeOptions = t, this.checkedImageParts = r;
    }
    stream(e, t, r, n) {
        const s = this.innerExecutor.getMessages(), o = (async ()=>{
            const o = await fn({
                ctx: e,
                messages: s,
                resizeOptions: this.resizeOptions,
                checkedImageParts: this.checkedImageParts
            });
            return this.innerExecutor.clearMessages(), this.innerExecutor.appendMessages(o), this.innerExecutor.stream(e, t, r, n);
        })(), i = (e)=>{
            const t = o.then(e);
            return t.catch(()=>{}), t;
        };
        return {
            fullStream: async function*() {
                const e = await o;
                yield* e.fullStream;
            }(),
            response: i((e)=>e.response),
            usage: i((e)=>e.usage),
            providerMetadata: i((e)=>e.providerMetadata),
            extendedUsage: i((e)=>e.extendedUsage),
            invocationId: i((e)=>e.invocationId)
        };
    }
}
function yn(e) {
    const t = new WeakMap;
    return (r)=>new gn({
            innerExecutor: r,
            resizeOptions: e,
            checkedImageParts: t
        });
}
yn(), yn({
    stampUserImageContentSha256: !0
});
var wn = require("./module-46144.js");
const vn = (0, wn.v5)("agent.ttft.middlewareChainMs", {
    description: "Total synchronous time inside the middleware chain from tracing middleware entry to inner stream() returning (may exclude async preprocessing done by middleware wrappers)"
}), _n = (0, wn.v5)("chat_inference.ttft_ms", {
    description: "Time to first token in milliseconds",
    labelNames: [
        "outcome"
    ]
}), An = (0, wn.v5)("chat_inference.ttf_toolcall_ms", {
    description: "Time to first tool call in milliseconds",
    labelNames: [
        "outcome"
    ]
}), Sn = (0, wn.v5)("chat_inference.e2e_latency_ms", {
    description: "End-to-end latency in milliseconds",
    labelNames: [
        "outcome"
    ]
}), bn = (0, wn.v5)("chat_inference.input_messages", {
    description: "Distribution of input message counts per request",
    labelNames: [
        "message_type"
    ]
}), En = (0, wn.v5)("chat_inference.input_characters", {
    description: "Distribution of input character counts per request",
    labelNames: [
        "message_type"
    ]
}), In = (0, wn.Pu)("chat_inference.request_outcome", {
    description: "Count of request outcomes",
    labelNames: [
        "outcome"
    ]
});
function Cn(e) {
    if ("user" === e.role || "assistant" === e.role) {
        if ("string" == typeof e.content) return e.content;
        if (Array.isArray(e.content)) return e.content.map((e)=>"text" === e.type && "text" in e ? e.text : "").join("");
    }
    if ("tool" === e.role) {
        if ("string" == typeof e.content) return e.content;
        if (Array.isArray(e.content)) return e.content.map((e)=>"tool-result" === e.type && "result" in e ? "string" == typeof e.result ? e.result : JSON.stringify(e.result) : "").join("");
    }
    return "";
}
class kn extends qr {
    stream(e, t, r, n) {
        const s = performance.now();
        let o = null, i = !1, a = null, c = !1;
        const l = function(e) {
            const t = {
                userCount: 0,
                assistantCount: 0,
                toolCount: 0,
                userChars: 0,
                assistantChars: 0,
                toolChars: 0
            };
            for (const r of e){
                const e = Cn(r).length;
                switch(r.role){
                    case "user":
                        t.userCount++, t.userChars += e;
                        break;
                    case "assistant":
                        t.assistantCount++, t.assistantChars += e;
                        break;
                    case "tool":
                        t.toolCount++, t.toolChars += e;
                }
            }
            return t;
        }(this.innerExecutor.getMessages());
        bn.histogram(e, l.userCount, {
            message_type: "user"
        }), bn.histogram(e, l.assistantCount, {
            message_type: "assistant"
        }), bn.histogram(e, l.toolCount, {
            message_type: "tool"
        }), En.histogram(e, l.userChars, {
            message_type: "user"
        }), En.histogram(e, l.assistantChars, {
            message_type: "assistant"
        }), En.histogram(e, l.toolChars, {
            message_type: "tool"
        });
        const u = this.innerExecutor.stream(e, t, r, n);
        vn.histogram(e, performance.now() - s);
        const d = u.response.then((t)=>{
            const r = performance.now() - s;
            return Sn.histogram(e, r, {
                outcome: "success"
            }), t.error ? In.increment(e, 1, {
                outcome: "failure"
            }) : In.increment(e, 1, {
                outcome: "success"
            }), t;
        }).catch((t)=>{
            const r = performance.now() - s;
            throw Sn.histogram(e, r, {
                outcome: "failure"
            }), In.increment(e, 1, {
                outcome: "failure"
            }), t;
        });
        return d.catch(()=>{}), {
            fullStream: async function*() {
                try {
                    for await (const t of u.fullStream){
                        if (!i) {
                            o = performance.now(), i = !0;
                            const t = o - s;
                            _n.histogram(e, t, {
                                outcome: "success"
                            });
                        }
                        if (!c && ("tool-call" === t.type || "tool-call-delta" === t.type)) {
                            a = performance.now(), c = !0;
                            const t = a - s;
                            An.histogram(e, t, {
                                outcome: "success"
                            });
                        }
                        yield t;
                    }
                } catch (t) {
                    throw i || _n.histogram(e, performance.now() - s, {
                        outcome: "failure"
                    }), t;
                }
            }(),
            response: d,
            usage: u.usage,
            providerMetadata: u.providerMetadata,
            extendedUsage: u.extendedUsage,
            invocationId: u.invocationId
        };
    }
}
const xn = (e)=>new kn(e), Tn = (0, Wr.h)("@anysphere/chat-inference/trailing-empty-assistant-removal-middleware");
function Rn(e) {
    return "assistant" === e.role && (e.content, 0 === e.content.length);
}
class Bn extends qr {
    stream(e, t, r, n) {
        const s = this.innerExecutor.getMessages(), { cleanedMessages: o, removedMessageCount: i } = function(e) {
            const t = [
                ...e
            ];
            let r = 0;
            for(; t.length > 0 && Rn(t[t.length - 1]);)t.pop(), r++;
            return {
                cleanedMessages: t,
                removedMessageCount: r
            };
        }(s);
        return i > 0 && (Tn.info(e, "[trailing-empty-assistant-removal] removing empty assistant message(s) before stream", {
            messageCount: s.length,
            removedMessageCount: i
        }), this.innerExecutor.clearMessages(), o.length > 0 && this.innerExecutor.appendMessages(o)), this.innerExecutor.stream(e, t, r, n);
    }
}
const Pn = ()=>(e)=>new Bn(e);
Pn();
class Jn extends Pr {
}
class Mn extends Jr {
    constructor(e, t, r, n){
        super(e), this.model = t, this.thinkingDetails = r, this.providerOptions = n;
    }
    stream(e, t, r, n) {
        const s = Lt({
            model: this.model,
            messages: this.requestMessages(),
            tools: zr(r),
            toolChoice: n.toolChoice,
            temperature: 1,
            providerOptions: this.providerOptions,
            abortSignal: e.signal
        });
        return {
            fullStream: s.fullStream,
            response: s.response,
            providerMetadata: s.providerMetadata,
            usage: s.usage,
            extendedUsage: (async ()=>{
                const e = await s.usage;
                return {
                    inputTokens: e.promptTokens,
                    outputTokens: e.completionTokens,
                    cacheReadTokens: 0,
                    cacheWriteTokens: 0,
                    maxTokens: 0
                };
            })(),
            invocationId: Promise.resolve(t ?? crypto.randomUUID())
        };
    }
}
class qn {
    constructor(e, t, r, n){
        this.model = e, this.middleware = t, this.thinkingDetails = r, this.providerOptions = n;
    }
    getExecutor(e) {
        const t = new Jn(e), r = new Mn(t, this.model, this.thinkingDetails, this.providerOptions);
        return this.middleware ? this.middleware(r) : r;
    }
    getModelId() {
        return this.model.modelId;
    }
}
class Dn {
    constructor(e, t, r){
        this.model = e, this.thinkingDetails = t, this.providerOptions = r;
    }
    getSession(e) {
        return new qn(this.model, e, this.thinkingDetails, this.providerOptions);
    }
    getProviderName() {
        return "openai";
    }
    getModelId() {
        return this.model.modelId;
    }
    getThinkingDetails() {
        return this.thinkingDetails;
    }
}
const On = 64;
function Nn(e) {
    if (void 0 !== e) return e.length <= On ? e : e.slice(0, On);
}
function Fn(e) {
    return Nn(e) ?? "";
}
const Un = "x-cursor-inference-request-error-type", Ln = "PROVIDER_DECODE_ERROR";
function $n(e) {
    const t = new Set;
    let r = e;
    for(; "object" == typeof r && null !== r && !t.has(r);){
        t.add(r);
        const e = r;
        if ("function" == typeof e.metadata?.get && e.metadata.get(Un) === Ln) return !0;
        r = e.cause;
    }
    return !1;
}
function Qn(e, t) {
    return t.every((t)=>e.includes(t));
}
function jn(e) {
    return function(e) {
        return Qn(e, [
            "input tokens exceed the configured limit",
            "your messages resulted in",
            "tokens"
        ]);
    }(e) || function(e) {
        return e.includes("input token count") && e.includes("exceeds the maximum number of tokens allowed");
    }(e) || function(e) {
        return Qn(e, [
            "input token count",
            "exceeds",
            "maximum context length"
        ]);
    }(e) || function(e) {
        return Qn(e, [
            "maximum prompt length",
            "request contains",
            "tokens"
        ]);
    }(e) || function(e) {
        return e.includes("prompt is too long");
    }(e) || function(e) {
        return Qn(e, [
            "input",
            "token",
            "longer than",
            "context length"
        ]);
    }(e) || function(e) {
        return Qn(e, [
            "input token count",
            "plus",
            "requested output count",
            "exceeds",
            "maximum context length"
        ]);
    }(e) || function(e) {
        return Qn(e, [
            "input exceeds",
            "context window"
        ]);
    }(e) || function(e) {
        return e.includes("input is too long for requested model");
    }(e) || function(e) {
        return Qn(e, [
            "input length",
            "exceeds the maximum allowed input length"
        ]);
    }(e) || function(e) {
        return Qn(e, [
            "request size cannot exceed",
            "bytes",
            "please shorten the request"
        ]);
    }(e) || function(e) {
        return Qn(e, [
            "input length",
            "max_tokens",
            "exceed context limit"
        ]);
    }(e) || function(e) {
        return e.includes("input is too long");
    }(e) || function(e) {
        return e.includes("request size exceeds model context window");
    }(e) || function(e) {
        return Qn(e, [
            "message size",
            "bytes",
            "exceeds",
            "mb limit"
        ]);
    }(e) || function(e) {
        return e.includes("context_length_exceeded");
    }(e) || function(e) {
        return e.includes("payload too large");
    }(e) || function(e) {
        return /max tokens of \d+ exceeded/.test(e);
    }(e);
}
function Gn(e) {
    return jn(e.toLowerCase());
}
const Hn = "exceeded max output tokens";
const zn = "input token limit exceeded";
function Wn(e) {
    return function(e) {
        return e.toLowerCase().includes(Hn);
    }(e) ? new Ur(e) : Gn(e) || e.toLowerCase().includes(zn) ? new Lr(e) : void 0;
}

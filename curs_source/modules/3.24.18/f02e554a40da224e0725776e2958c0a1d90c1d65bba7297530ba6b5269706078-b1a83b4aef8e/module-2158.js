"use strict";
require.r(exports), require.d(exports, {
    assertByteStreamRequest: ()=>J.s4,
    compressedFlag: ()=>A.y,
    compressionNegotiate: ()=>A.B,
    contentTypeMatcher: ()=>y.Y,
    createAsyncIterable: ()=>_.T$,
    createClientMethodSerializers: ()=>p.Ef,
    createDeadlineSignal: ()=>S.p2,
    createEnvelopeReadableStream: ()=>g.V0,
    createFetchClient: ()=>i,
    createFetchHandler: ()=>o,
    createLinkedAbortController: ()=>S.Ch,
    createMethodSerializationLookup: ()=>p.Qg,
    createMethodUrl: ()=>n.j,
    createUniversalHandlerClient: ()=>s.N,
    createUniversalMethodHandler: ()=>B.JC,
    createUniversalServiceHandlers: ()=>B.SW,
    createWritableIterable: ()=>_.Jt,
    encodeEnvelope: ()=>g.zK,
    encodeEnvelopes: ()=>g.OO,
    envelopeCompress: ()=>g.$t,
    envelopeDecompress: ()=>g.qb,
    getAbortSignalReason: ()=>S.xz,
    getJsonOptions: ()=>p.B_,
    invokeUnaryImplementation: ()=>w.s,
    limitSerialization: ()=>p._I,
    makeIterableAbortable: ()=>_.lG,
    pipe: ()=>_.Fs,
    pipeTo: ()=>_.WK,
    readAllBytes: ()=>_.Xw,
    runStreamingCall: ()=>f.u,
    runUnaryCall: ()=>f.L,
    sinkAll: ()=>_.LX,
    sinkAllBytes: ()=>_.SM,
    transformAppend: ()=>_.PS,
    transformCatch: ()=>_.Qe,
    transformCatchFinally: ()=>_.du,
    transformCompressEnvelope: ()=>_.fM,
    transformDecompressEnvelope: ()=>_.ew,
    transformInvokeImplementation: ()=>w.H,
    transformJoinEnvelopes: ()=>_.yQ,
    transformParseEnvelope: ()=>_.uv,
    transformPrepend: ()=>_.p_,
    transformReadAllBytes: ()=>_.bp,
    transformSerializeEnvelope: ()=>_.XO,
    transformSplitEnvelope: ()=>_.pY,
    uResponseMethodNotAllowed: ()=>J.nZ,
    uResponseNotFound: ()=>J.of,
    uResponseOk: ()=>J.rJ,
    uResponseUnsupportedMediaType: ()=>J._L,
    uResponseVersionNotSupported: ()=>J.kF,
    universalClientRequestToFetch: ()=>a,
    universalClientResponseFromFetch: ()=>u,
    universalServerRequestFromFetch: ()=>c,
    universalServerResponseToFetch: ()=>l,
    untilFirst: ()=>_.zm,
    validateReadWriteMaxBytes: ()=>h.NL,
    validateUniversalHandlerOptions: ()=>B.sO
});
var n = require("./module-7572.js"), s = require("./module-2172.js");
function i(t) {
    return async function(e) {
        return u(await t(a(e)));
    };
}
function o(t, e) {
    return Object.assign(async function(r) {
        const n = c(r, null != e ? e : {});
        return l(await t(n));
    }, t);
}
function a(t) {
    const e = void 0 === t.body ? null : m(t.body);
    return new Request(t.url, {
        method: t.method,
        headers: t.header,
        signal: t.signal,
        body: e
    });
}
function u(t) {
    return {
        status: t.status,
        header: t.headers,
        body: d(t.body),
        trailer: new Headers
    };
}
function c(t, e) {
    var r;
    return {
        httpVersion: null !== (r = e.httpVersion) && void 0 !== r ? r : "",
        method: t.method,
        url: t.url,
        header: t.headers,
        body: d(t.body),
        signal: t.signal
    };
}
function l(t) {
    let e = null;
    return void 0 !== t.body && (e = m(t.body)), new Response(e, {
        status: t.status,
        headers: t.header
    });
}
function m(t) {
    const e = t[Symbol.asyncIterator]();
    return new ReadableStream({
        async pull (t) {
            const r = await e.next();
            !0 !== r.done ? t.enqueue(r.value) : t.close();
        },
        async cancel (t) {
            if (e.throw) try {
                await e.throw(t);
            } catch (t) {}
        }
    });
}
function d(t) {
    const e = null == t ? void 0 : t.getReader();
    return {
        [Symbol.asyncIterator]: ()=>({
                async next () {
                    if (void 0 !== e) {
                        const t = await e.read();
                        return t.done ? {
                            done: !0,
                            value: void 0
                        } : t;
                    }
                    return {
                        done: !0,
                        value: void 0
                    };
                },
                throw: async (t)=>(void 0 !== e && await e.cancel(t), {
                        done: !0,
                        value: void 0
                    })
            })
    };
}
var f = require("./module-1304.js"), p = require("./module-878.js"), h = require("./module-278.js"), g = require("./module-7684.js"), A = require("./module-3352.js"), _ = require("./module-8205.js"), y = require("./module-6367.js"), w = require("./module-719.js"), S = require("./module-9983.js"), J = require("./module-2083.js"), B = require("./module-8926.js");

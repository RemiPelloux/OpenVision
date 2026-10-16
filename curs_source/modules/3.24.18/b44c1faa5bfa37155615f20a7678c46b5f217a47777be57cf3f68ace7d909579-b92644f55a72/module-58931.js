"use strict";
require.r(exports), require.d(exports, {
    assertByteStreamRequest: ()=>S.s4,
    compressedFlag: ()=>y.y,
    compressionNegotiate: ()=>y.B,
    contentTypeMatcher: ()=>v.Y,
    createAsyncIterable: ()=>w.T$,
    createClientMethodSerializers: ()=>h.Ef,
    createDeadlineSignal: ()=>A.p2,
    createEnvelopeReadableStream: ()=>g.V0,
    createFetchClient: ()=>o,
    createFetchHandler: ()=>i,
    createLinkedAbortController: ()=>A.Ch,
    createMethodSerializationLookup: ()=>h.Qg,
    createMethodUrl: ()=>n.j,
    createUniversalHandlerClient: ()=>s.N,
    createUniversalMethodHandler: ()=>b.JC,
    createUniversalServiceHandlers: ()=>b.SW,
    createWritableIterable: ()=>w.Jt,
    encodeEnvelope: ()=>g.zK,
    encodeEnvelopes: ()=>g.OO,
    envelopeCompress: ()=>g.$t,
    envelopeDecompress: ()=>g.qb,
    getAbortSignalReason: ()=>A.xz,
    getJsonOptions: ()=>h.B_,
    invokeUnaryImplementation: ()=>_.s,
    limitSerialization: ()=>h._I,
    makeIterableAbortable: ()=>w.lG,
    pipe: ()=>w.Fs,
    pipeTo: ()=>w.WK,
    readAllBytes: ()=>w.Xw,
    runStreamingCall: ()=>m.u,
    runUnaryCall: ()=>m.L,
    sinkAll: ()=>w.LX,
    sinkAllBytes: ()=>w.SM,
    transformAppend: ()=>w.PS,
    transformCatch: ()=>w.Qe,
    transformCatchFinally: ()=>w.du,
    transformCompressEnvelope: ()=>w.fM,
    transformDecompressEnvelope: ()=>w.ew,
    transformInvokeImplementation: ()=>_.H,
    transformJoinEnvelopes: ()=>w.yQ,
    transformParseEnvelope: ()=>w.uv,
    transformPrepend: ()=>w.p_,
    transformReadAllBytes: ()=>w.bp,
    transformSerializeEnvelope: ()=>w.XO,
    transformSplitEnvelope: ()=>w.pY,
    uResponseMethodNotAllowed: ()=>S.nZ,
    uResponseNotFound: ()=>S.of,
    uResponseOk: ()=>S.rJ,
    uResponseUnsupportedMediaType: ()=>S._L,
    uResponseVersionNotSupported: ()=>S.kF,
    universalClientRequestToFetch: ()=>a,
    universalClientResponseFromFetch: ()=>c,
    universalServerRequestFromFetch: ()=>l,
    universalServerResponseToFetch: ()=>u,
    untilFirst: ()=>w.zm,
    validateReadWriteMaxBytes: ()=>f.NL,
    validateUniversalHandlerOptions: ()=>b.sO
});
var n = require("./module-12563.js"), s = require("./module-12869.js");
function o(e) {
    return async function(t) {
        return c(await e(a(t)));
    };
}
function i(e, t) {
    return Object.assign(async function(r) {
        const n = l(r, null != t ? t : {});
        return u(await e(n));
    }, e);
}
function a(e) {
    const t = void 0 === e.body ? null : d(e.body);
    return new Request(e.url, {
        method: e.method,
        headers: e.header,
        signal: e.signal,
        body: t
    });
}
function c(e) {
    return {
        status: e.status,
        header: e.headers,
        body: p(e.body),
        trailer: new Headers
    };
}
function l(e, t) {
    var r;
    return {
        httpVersion: null !== (r = t.httpVersion) && void 0 !== r ? r : "",
        method: e.method,
        url: e.url,
        header: e.headers,
        body: p(e.body),
        signal: e.signal
    };
}
function u(e) {
    let t = null;
    return void 0 !== e.body && (t = d(e.body)), new Response(t, {
        status: e.status,
        headers: e.header
    });
}
function d(e) {
    const t = e[Symbol.asyncIterator]();
    return new ReadableStream({
        async pull (e) {
            const r = await t.next();
            !0 !== r.done ? e.enqueue(r.value) : e.close();
        },
        async cancel (e) {
            if (t.throw) try {
                await t.throw(e);
            } catch (e) {}
        }
    });
}
function p(e) {
    const t = null == e ? void 0 : e.getReader();
    return {
        [Symbol.asyncIterator]: ()=>({
                async next () {
                    if (void 0 !== t) {
                        const e = await t.read();
                        return e.done ? {
                            done: !0,
                            value: void 0
                        } : e;
                    }
                    return {
                        done: !0,
                        value: void 0
                    };
                },
                throw: async (e)=>(void 0 !== t && await t.cancel(e), {
                        done: !0,
                        value: void 0
                    })
            })
    };
}
var m = require("./module-98681.js"), h = require("./module-98433.js"), f = require("./module-78503.js"), g = require("./module-91653.js"), y = require("./module-59675.js"), w = require("./module-2788.js"), v = require("./module-26306.js"), _ = require("./module-90932.js"), A = require("./module-84672.js"), S = require("./module-26380.js"), b = require("./module-36553.js");

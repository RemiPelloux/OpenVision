"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createLargeProtoLoggingInterceptor = function(e) {
    return (t)=>async (r)=>{
            let s = !1;
            try {
                s = await e.checkFeatureGate("large_proto_logging_enabled");
            } catch (e) {
                return t(r);
            }
            if (!s) return t(r);
            const o = r.method.name;
            if (r.method.kind === n.MethodKind.Unary || r.method.kind === n.MethodKind.ServerStreaming) return u(r.message, o), t(r);
            if (r.method.kind === n.MethodKind.BiDiStreaming || r.method.kind === n.MethodKind.ClientStreaming) {
                const e = function(e, t) {
                    return {
                        [Symbol.asyncIterator] () {
                            const r = e[Symbol.asyncIterator]();
                            return {
                                async next () {
                                    const e = await r.next();
                                    return !e.done && e.value && u(e.value, t), e;
                                },
                                return: r.return?.bind(r),
                                throw: r.throw?.bind(r)
                            };
                        }
                    };
                }(r.message, o), n = {
                    ...r,
                    message: e
                };
                return t(n);
            }
            return t(r);
        };
};
const n = require("./module-36038.js"), s = require("./module-7126.js"), o = 20971520, i = 3;
function a(e) {
    return null != e && "function" == typeof e.getType;
}
function c(e, t, r = "", n = 0) {
    const o = [];
    try {
        const s = e.getType();
        for (const l of s.fields.list()){
            let u;
            if (l.oneof) {
                const t = e[l.oneof.localName];
                if (!t || t.case !== l.localName) continue;
                u = t.value;
            } else u = e[l.localName];
            if (null == u) continue;
            if (Array.isArray(u) && 0 === u.length) continue;
            const d = r ? `${r}.${l.localName}` : l.localName, p = (l.oneof ? new s({
                [l.oneof.localName]: {
                    case: l.localName,
                    value: u
                }
            }) : new s({
                [l.localName]: u
            })).toBinary().byteLength;
            if (n < i && a(u)) {
                const e = c(u, t, d, n + 1);
                if (e.length > 0) {
                    o.push(...e);
                    continue;
                }
            }
            o.push({
                fieldName: d,
                sizeBytes: p,
                percentage: p / t * 100
            });
        }
    } catch (e) {
        const t = {
            subkey: "field_breakdown_failed",
            error: e instanceof Error ? e.message : String(e)
        };
        console.warn("[LargeProtoLoggingInterceptor] Failed to compute field breakdown", t), s.StructuredLogProviderImpl.warn("transport", "[LargeProtoLoggingInterceptor] Failed to compute field breakdown", t);
    }
    return o.sort((e, t)=>t.sizeBytes - e.sizeBytes);
}
function l(e, t, r, n) {
    const o = performance.now(), i = c(e, t), a = performance.now() - o, l = i.slice(0, 5), u = (t / 1048576).toFixed(2), d = n + a, p = {
        service: "large_proto_interceptor",
        subkey: "large_proto_detected",
        method: r,
        typeName: e.getType?.()?.typeName ?? "unknown",
        totalSizeMB: parseFloat(u),
        topFields: l.map((e)=>({
                field: e.fieldName,
                sizeBytes: e.sizeBytes,
                percentage: e.percentage
            })),
        timingMs: {
            toBinaryTimeMs: n,
            fieldBreakdownMs: a,
            totalMs: d
        }
    };
    console.warn("[LargeProtoLoggingInterceptor] Large proto message detected", p), s.StructuredLogProviderImpl.warn("transport", "[LargeProtoLoggingInterceptor] Large proto message detected", p);
}
function u(e, t) {
    try {
        if ("function" != typeof e.toBinary) return;
        const r = performance.now(), n = e.toBinary().byteLength, s = performance.now() - r;
        n > o && l(e, n, t, s);
    } catch (e) {
        const r = {
            subkey: "check_message_size_failed",
            method: t,
            error: e instanceof Error ? e.message : String(e)
        };
        console.warn("[LargeProtoLoggingInterceptor] Failed to check proto message size", r), s.StructuredLogProviderImpl.warn("transport", "[LargeProtoLoggingInterceptor] Failed to check proto message size", r);
    }
}

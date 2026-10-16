var __webpack_exports__ = {};
(()=>{
    "use strict";
    require.r(__webpack_exports__), require.d(__webpack_exports__, {
        activate: ()=>sw,
        deactivate: ()=>ow
    });
    var e = {};
    require.r(e), require.d(e, {
        CAPABILITIES: ()=>We,
        HARNESS_INTERFACE_REVISION: ()=>N.nl,
        activate: ()=>tt,
        createManagedToolClient: ()=>et,
        deactivate: ()=>oe.qTE,
        generationContext: ()=>Ye,
        hostLoggerBackend: ()=>Ve,
        hostMetricsBackend: ()=>Ke
    });
    var t = {};
    require.r(t), require.d(t, {
        base64: ()=>Yi,
        base64url: ()=>Zi,
        bigint: ()=>ca,
        boolean: ()=>da,
        browserEmail: ()=>Qi,
        cidrv4: ()=>Vi,
        cidrv6: ()=>Ki,
        cuid: ()=>Ii,
        cuid2: ()=>Ci,
        date: ()=>na,
        datetime: ()=>ia,
        domain: ()=>ea,
        duration: ()=>Bi,
        e164: ()=>ta,
        email: ()=>Ni,
        emoji: ()=>Gi,
        extendedDuration: ()=>Pi,
        guid: ()=>Ji,
        hex: ()=>ga,
        hostname: ()=>Xi,
        html5Email: ()=>Fi,
        idnEmail: ()=>$i,
        integer: ()=>la,
        ipv4: ()=>Hi,
        ipv6: ()=>zi,
        ksuid: ()=>Ti,
        lowercase: ()=>ha,
        mac: ()=>Wi,
        md5_base64: ()=>_a,
        md5_base64url: ()=>Aa,
        md5_hex: ()=>va,
        nanoid: ()=>Ri,
        null: ()=>pa,
        number: ()=>ua,
        rfc5322Email: ()=>Ui,
        sha1_base64: ()=>ba,
        sha1_base64url: ()=>Ea,
        sha1_hex: ()=>Sa,
        sha256_base64: ()=>Ca,
        sha256_base64url: ()=>ka,
        sha256_hex: ()=>Ia,
        sha384_base64: ()=>Ta,
        sha384_base64url: ()=>Ra,
        sha384_hex: ()=>xa,
        sha512_base64: ()=>Pa,
        sha512_base64url: ()=>Ja,
        sha512_hex: ()=>Ba,
        string: ()=>aa,
        time: ()=>oa,
        ulid: ()=>ki,
        undefined: ()=>ma,
        unicodeEmail: ()=>Li,
        uppercase: ()=>fa,
        uuid: ()=>Mi,
        uuid4: ()=>qi,
        uuid6: ()=>Di,
        uuid7: ()=>Oi,
        xid: ()=>xi
    });
    var r = {};
    require.r(r), require.d(r, {
        endsWith: ()=>Ou,
        gt: ()=>vu,
        gte: ()=>_u,
        includes: ()=>qu,
        length: ()=>Bu,
        lowercase: ()=>Ju,
        lt: ()=>yu,
        lte: ()=>wu,
        maxLength: ()=>Tu,
        maxSize: ()=>Cu,
        mime: ()=>Fu,
        minLength: ()=>Ru,
        minSize: ()=>ku,
        multipleOf: ()=>Iu,
        negative: ()=>Su,
        nonnegative: ()=>Eu,
        nonpositive: ()=>bu,
        normalize: ()=>Lu,
        overwrite: ()=>Uu,
        positive: ()=>Au,
        property: ()=>Nu,
        regex: ()=>Pu,
        size: ()=>xu,
        slugify: ()=>Gu,
        startsWith: ()=>Du,
        toLowerCase: ()=>Qu,
        toUpperCase: ()=>ju,
        trim: ()=>$u,
        uppercase: ()=>Mu
    });
    var n = {};
    require.r(n), require.d(n, {
        ZodISODate: ()=>Ud,
        ZodISODateTime: ()=>Nd,
        ZodISODuration: ()=>jd,
        ZodISOTime: ()=>$d,
        date: ()=>Ld,
        datetime: ()=>Fd,
        duration: ()=>Gd,
        time: ()=>Qd
    });
    var s = {};
    require.r(s), require.d(s, {
        ZodAny: ()=>km,
        ZodArray: ()=>Om,
        ZodBase64: ()=>zp,
        ZodBase64URL: ()=>Vp,
        ZodBigInt: ()=>gm,
        ZodBigIntFormat: ()=>wm,
        ZodBoolean: ()=>hm,
        ZodCIDRv4: ()=>Qp,
        ZodCIDRv6: ()=>Gp,
        ZodCUID: ()=>kp,
        ZodCUID2: ()=>Tp,
        ZodCatch: ()=>Ph,
        ZodCodec: ()=>Nh,
        ZodCustom: ()=>Kh,
        ZodCustomStringFormat: ()=>tm,
        ZodDate: ()=>qm,
        ZodDefault: ()=>Eh,
        ZodDiscriminatedUnion: ()=>Wm,
        ZodE164: ()=>Yp,
        ZodEmail: ()=>dp,
        ZodEmoji: ()=>bp,
        ZodEnum: ()=>ch,
        ZodExactOptional: ()=>vh,
        ZodFile: ()=>mh,
        ZodFunction: ()=>Wh,
        ZodGUID: ()=>mp,
        ZodIPv4: ()=>Op,
        ZodIPv6: ()=>Lp,
        ZodIntersection: ()=>Km,
        ZodJWT: ()=>Xp,
        ZodKSUID: ()=>qp,
        ZodLazy: ()=>jh,
        ZodLiteral: ()=>dh,
        ZodMAC: ()=>Fp,
        ZodMap: ()=>sh,
        ZodNaN: ()=>Mh,
        ZodNanoID: ()=>Ip,
        ZodNever: ()=>Bm,
        ZodNonOptional: ()=>xh,
        ZodNull: ()=>Im,
        ZodNullable: ()=>Ah,
        ZodNumber: ()=>im,
        ZodNumberFormat: ()=>cm,
        ZodObject: ()=>Um,
        ZodOptional: ()=>yh,
        ZodPipe: ()=>Dh,
        ZodPrefault: ()=>Ch,
        ZodPromise: ()=>Hh,
        ZodReadonly: ()=>Uh,
        ZodRecord: ()=>eh,
        ZodSet: ()=>ih,
        ZodString: ()=>cp,
        ZodStringFormat: ()=>up,
        ZodSuccess: ()=>Rh,
        ZodSymbol: ()=>Am,
        ZodTemplateLiteral: ()=>$h,
        ZodTransform: ()=>fh,
        ZodTuple: ()=>Zm,
        ZodType: ()=>ip,
        ZodULID: ()=>Bp,
        ZodURL: ()=>_p,
        ZodUUID: ()=>fp,
        ZodUndefined: ()=>bm,
        ZodUnion: ()=>jm,
        ZodUnknown: ()=>Tm,
        ZodVoid: ()=>Jm,
        ZodXID: ()=>Jp,
        ZodXor: ()=>Hm,
        _ZodString: ()=>ap,
        _default: ()=>Ih,
        _function: ()=>Vh,
        any: ()=>xm,
        array: ()=>Nm,
        base64: ()=>Wp,
        base64url: ()=>Kp,
        bigint: ()=>ym,
        boolean: ()=>fm,
        catch: ()=>Jh,
        check: ()=>Yh,
        cidrv4: ()=>jp,
        cidrv6: ()=>Hp,
        codec: ()=>Fh,
        cuid: ()=>xp,
        cuid2: ()=>Rp,
        custom: ()=>Zh,
        date: ()=>Dm,
        describe: ()=>tf,
        discriminatedUnion: ()=>Vm,
        e164: ()=>Zp,
        email: ()=>pp,
        emoji: ()=>Ep,
        enum: ()=>lh,
        exactOptional: ()=>_h,
        file: ()=>hh,
        float32: ()=>um,
        float64: ()=>dm,
        function: ()=>Vh,
        guid: ()=>hp,
        hash: ()=>om,
        hex: ()=>sm,
        hostname: ()=>nm,
        httpUrl: ()=>Sp,
        instanceof: ()=>nf,
        int: ()=>lm,
        int32: ()=>pm,
        int64: ()=>vm,
        intersection: ()=>Ym,
        ipv4: ()=>Np,
        ipv6: ()=>$p,
        json: ()=>of,
        jwt: ()=>em,
        keyof: ()=>Fm,
        ksuid: ()=>Dp,
        lazy: ()=>Gh,
        literal: ()=>ph,
        looseObject: ()=>Qm,
        looseRecord: ()=>nh,
        mac: ()=>Up,
        map: ()=>oh,
        meta: ()=>rf,
        nan: ()=>qh,
        nanoid: ()=>Cp,
        nativeEnum: ()=>uh,
        never: ()=>Pm,
        nonoptional: ()=>Th,
        null: ()=>Cm,
        nullable: ()=>Sh,
        nullish: ()=>bh,
        number: ()=>am,
        object: ()=>Lm,
        optional: ()=>wh,
        partialRecord: ()=>rh,
        pipe: ()=>Oh,
        prefault: ()=>kh,
        preprocess: ()=>af,
        promise: ()=>zh,
        readonly: ()=>Lh,
        record: ()=>th,
        refine: ()=>Xh,
        set: ()=>ah,
        strictObject: ()=>$m,
        string: ()=>lp,
        stringFormat: ()=>rm,
        stringbool: ()=>sf,
        success: ()=>Bh,
        superRefine: ()=>ef,
        symbol: ()=>Sm,
        templateLiteral: ()=>Qh,
        transform: ()=>gh,
        tuple: ()=>Xm,
        uint32: ()=>mm,
        uint64: ()=>_m,
        ulid: ()=>Pp,
        undefined: ()=>Em,
        union: ()=>Gm,
        unknown: ()=>Rm,
        url: ()=>Ap,
        uuid: ()=>gp,
        uuidv4: ()=>yp,
        uuidv6: ()=>wp,
        uuidv7: ()=>vp,
        void: ()=>Mm,
        xid: ()=>Mp,
        xor: ()=>zm
    });
    var o = require("./module-76982.js"), i = require("./module-70857.js"), a = require("./module-16928.js"), c = require("./module-91398.js"), l = require("./module-9639.js"), u = require("./module-61771.js"), d = require("./module-33002.js"), p = require("./module-37949.js"), m = require("./module-98875.js"), h = require("./module-76849.js"), f = require("./module-60525.js"), g = require("./module-43081.js"), y = require("./module-36038.js"), w = require("./module-72187.js"), v = require("./module-95212.js"), _ = require("./module-55625.js"), A = require("./module-80732.js"), S = require("./module-24804.js"), b = require("./module-83360.js"), E = require("./module-8844.js"), I = require("./module-28963.js");
    const C = "managed-local-agent", k = (0, p.h)("@anysphere/agent-host:managed-local-labeling");
    function x(e) {
        const t = e.providerOptions?.cursor?.requestId;
        return "user" === e.role && "string" == typeof t ? t : "";
    }
    function T(e) {
        return (t)=>{
            const { ctx: r, requestId: n, conversationId: s } = t;
            let o, i, a = !1;
            const c = (o)=>{
                a || (a = !0, (async (o, i)=>{
                    if ("" === s) return;
                    const a = o.getMessages();
                    if (0 === a.length) return;
                    const c = await (0, S.nb)(r, t.blobStore, t.conversationState.turns);
                    await e.recordAgentFollowupClassification(new E.yJ({
                        requestId: n,
                        replyingToRequestId: c ?? "",
                        messages: a.map((e)=>(0, b.Ac)(e)),
                        messageRequestIds: a.map(x),
                        conversationId: s,
                        agentMode: C,
                        turnAgentMode: (0, I.p)(t.conversationState),
                        modelName: i
                    }));
                })(o, i).catch((e)=>{
                    k.warn(r, "Managed local follow-up classification failed", {
                        requestId: n,
                        error: e
                    });
                }));
            }, l = (e)=>{
                o = e;
                const t = e.runWithToolCallEventRecorder;
                return {
                    appendMessages (t) {
                        return e.appendMessages(t), this;
                    },
                    getState: ()=>e.getState(),
                    getMessages: ()=>e.getMessages(),
                    clearMessages: ()=>e.clearMessages(),
                    executeToolStream: (...t)=>(c(e), e.executeToolStream(...t)),
                    executeModelStreamOnly: (...t)=>(c(e), e.executeModelStreamOnly(...t)),
                    stream: (...t)=>(c(e), e.stream(...t)),
                    ...void 0 === t ? {} : {
                        runWithToolCallEventRecorder: t.bind(e)
                    }
                };
            };
            return {
                wrapPromptToolSession: (e, t)=>(i = t.resolvedModelId, {
                        getExecutor: (t)=>l(e.getExecutor(t))
                    }),
                onRunFinished: (a, c)=>{
                    "success" === a && void 0 !== o && "" !== s && (async (t, r)=>{
                        const o = t.getMessages();
                        0 !== o.length && await e.recordAgentPostTurnLabeling(new E.kG({
                            requestId: n,
                            messages: o.map((e)=>(0, b.Ac)(e)),
                            conversationId: s,
                            agentMode: C,
                            turnAgentMode: (0, I.p)(r),
                            modelName: i
                        }));
                    })(o, c ?? t.conversationState).catch((e)=>{
                        k.warn(r, "Managed local post-turn labeling failed", {
                            requestId: n,
                            error: e
                        });
                    });
                }
            };
        };
    }
    var R = require("./module-27322.js"), B = require("./module-68100.js");
    var P = require("./module-31774.js"), J = require("./module-33624.js"), M = require("./module-80901.js");
    function q(e) {
        return new v.o({
            createAgentConfig: (t)=>{
                const r = (0, A.A)(t, e.agentToolsClient);
                return {
                    ...r,
                    config: {
                        ...r.config,
                        bindConversationMessageInputs: !0
                    }
                };
            },
            createPromptSession: (0, _.bJ)(e.inferenceClient, e.agentModule),
            getPrivacyMode: ()=>(0, M.a)(e.getPrivacyModeEnum()),
            agentEvents: {
                source: "attempt"
            },
            retryLogging: e.retryLogging ?? {
                tag: J.q.logTag
            },
            reconnectEndpoint: J.q.reconnectEndpoint,
            prepareAttemptContext: (0, P.g)(e.attachAttemptContext, e.metricTags),
            createTurnLabeling: T(e.inferenceClient),
            ...void 0 === e.conversationBlobClient ? {} : {
                conversationBlobUploader: (t = e.conversationBlobClient, {
                    upload: async (e, r)=>{
                        await t.uploadConversationBlobs(new B.yD({
                            conversationId: r.conversationId,
                            blobs: r.blobs.map((e)=>new B.QI({
                                    id: (0, R.Fo)(e.id),
                                    value: (0, R.Fo)(e.value)
                                })),
                            chunkIndex: r.sequenceNumber
                        }), {
                            headers: {
                                "x-request-id": r.attemptRequestId
                            }
                        });
                    }
                })
            }
        });
        var t;
    }
    var D = require("./module-98691.js"), O = require("./module-94698.js"), N = require("./module-56215.js"), F = require("./module-26814.js");
    const U = {
        installed: E.FN.INSTALLED,
        floor: E.FN.FLOOR,
        static: E.FN.STATIC
    }, L = [
        "dogfood",
        "candidate",
        "stable",
        "local",
        "unknown"
    ];
    function $(e) {
        return void 0 === e ? "unknown" : L.includes(e) ? e : "other";
    }
    function Q(e, t) {
        return new E.ST({
            generation: e.generation,
            source: U[e.source],
            channel: $(t),
            ...void 0 !== e.commit && /^[0-9a-f]{40}$/.test(e.commit) ? {
                commit: e.commit
            } : {},
            interfaceRevision: N.nl,
            promptVersions: [
                ...F.FG
            ]
        });
    }
    const j = {
        generation: "static",
        commit: void 0,
        source: "static"
    };
    var G = require("./module-4113.js"), H = require("./module-46144.js"), z = require("./module-17714.js"), W = require("./module-77213.js"), V = require("./module-4410.js"), K = require("./module-5289.js"), Y = require("./module-76263.js"), Z = require("./module-46421.js"), X = require("./module-92801.js"), ee = require("./module-46705.js"), te = require("./module-12869.js");
    const re = {
        service: "aiserver.v1.InferenceService",
        method: "RunInference"
    };
    function ne(e, t, r) {
        const n = (e)=>{
            const t = function(e, t) {
                if (e instanceof t || !(e instanceof Error) || "ConnectError" !== e.name) return;
                const r = "code" in e ? e.code : void 0;
                if ("number" != typeof r) return;
                const n = "rawMessage" in e ? e.rawMessage : void 0, s = "metadata" in e ? e.metadata : void 0, o = "details" in e ? e.details : void 0;
                return {
                    message: e.message,
                    rawMessage: "string" == typeof n ? n : void 0,
                    code: r,
                    metadata: s instanceof Headers ? s : void 0,
                    details: Array.isArray(o) ? o.filter(se) : [],
                    cause: e.cause
                };
            }(e, r);
            if (void 0 === t) return e;
            const n = new r(t.rawMessage ?? t.message, t.code, t.metadata, void 0, t.cause ?? e);
            return n.details = t.details, n;
        }, s = {
            async unary (...t) {
                try {
                    return await e.unary(...t);
                } catch (e) {
                    throw n(e);
                }
            },
            async stream (...r) {
                const [s, o] = r;
                s.typeName === re.service && o.name === re.method && (r[5] = function(e, t) {
                    return {
                        async *[Symbol.asyncIterator] () {
                            for await (const r of e)r instanceof E.jR && "invokeModel" === r.message.case && t(`RunInference invocation=${r.message.value.invocationId}`), yield r;
                        }
                    };
                }(r[5], t));
                try {
                    const t = await e.stream(...r);
                    return {
                        ...t,
                        message: (i = t.message, {
                            async *[Symbol.asyncIterator] () {
                                try {
                                    yield* i;
                                } catch (e) {
                                    throw n(e);
                                }
                            }
                        })
                    };
                } catch (e) {
                    throw n(e);
                }
                var i;
            }
        };
        return s;
    }
    function se(e) {
        return "object" == typeof e && null !== e && "type" in e && "string" == typeof e.type && "value" in e && e.value instanceof Uint8Array;
    }
    var oe = require("./module-6688.js"), ie = require("./module-17392.js"), ae = require("./module-3411.js"), ce = require("./module-90991.js"), le = require("./module-15718.js"), ue = require("./module-55094.js"), de = require("./module-91434.js");
    const pe = (0, p.h)("SimpleExecManager");
    Error;
    class me {
        constructor(e, t, r, n = 0, s = new Map){
            this.ctx = e, this.client = t, this.server = r, this.nextId = n, this.streamMap = s, this.heartbeatTimers = new Map, this.run(), this.ctx.signal.addEventListener("abort", ()=>{
                const e = Array.from(this.streamMap.keys());
                for (const t of e)this.clearHeartbeatTimer(t), this.writeAbort(t);
            }, {
                once: !0
            });
        }
        async writeAbort(e) {
            try {
                await this.client.write((0, ce.eJ8)(new ue.Nv({
                    message: {
                        case: "abort",
                        value: new ue.dX({
                            id: e
                        })
                    }
                }), K.PrivacyMode.UNSPECIFIED));
            } catch (t) {
                pe.debug(this.ctx, "exec abort not delivered; client stream closed", {
                    id: e,
                    error: t
                });
            }
        }
        startHeartbeatTimer(e) {
            this.clearHeartbeatTimer(e), this.heartbeatTimers.set(e, setTimeout(()=>{
                this.heartbeatTimers.delete(e);
                this.streamMap.get(e);
            }, 1e4));
        }
        clearHeartbeatTimer(e) {
            const t = this.heartbeatTimers.get(e);
            t && (clearTimeout(t), this.heartbeatTimers.delete(e));
        }
        async run() {
            for await (const e of this.server)if ((0, ce.EYX)(e)) {
                this.startHeartbeatTimer(e.id);
                const t = this.streamMap.get(e.id);
                if (t) try {
                    await t.write(e);
                } catch (e) {
                    if (!(e instanceof de.W2)) throw e;
                }
                else pe.error(this.ctx, "no resolver found for message", {
                    message: (0, ce.qhh)(e, le.P$.STORAGE_FOR_LOGGING, {
                        enforcing: !0,
                        redactUnallowedFieldsInsteadOfThrowing: !0
                    })
                });
            } else if ("heartbeat" === e.message.case) this.startHeartbeatTimer(e.message.value.id);
            else if ("streamClose" === e.message.case) {
                this.clearHeartbeatTimer(e.message.value.id);
                const t = e.message.value.id, r = this.streamMap.get(t);
                r && (r.close(), this.streamMap.delete(t));
            } else if ("throw" === e.message.case) {
                this.clearHeartbeatTimer(e.message.value.id);
                const t = e.message.value.id, r = this.streamMap.get(t);
                if (r) {
                    const n = new Error(e.message.value.error.unwrap(le.P$.UNSAFE_ALWAYS_ALLOWED));
                    e.message.value.stackTrace && (n.stack = e.message.value.stackTrace.unwrap(le.P$.UNSAFE_ALWAYS_ALLOWED)), "EXEC_BACKEND_UNAVAILABLE" === e.message.value.errorCode ? n.name = "ExecBackendUnavailableError" : "AGENT_EXEC_STREAM_START_TIMEOUT" === e.message.value.errorCode && (n.name = "AgentExecStreamStartTimeoutError"), r.throw(n), this.streamMap.delete(t);
                }
            }
        }
        async *createExecInstance(e, t) {
            const r = this.nextId++, n = t(r), s = (0, de.Jt)();
            this.streamMap.set(r, s), e.signal && (e.signal.aborted ? (s.close(), this.streamMap.delete(r)) : e.signal.addEventListener("abort", ()=>{
                this.clearHeartbeatTimer(r), this.writeAbort(r);
            }, {
                once: !0
            })), await this.client.write(n), this.startHeartbeatTimer(r);
            try {
                for await (const e of s)yield e;
            } finally{
                this.clearHeartbeatTimer(r), this.streamMap.delete(r);
            }
        }
    }
    class he {
        constructor(e, t = K.PrivacyMode.UNSPECIFIED){
            this.redacted = e, this.privacyMode = t;
        }
        async *createExecInstance(e, t) {
            const r = (e)=>(0, ce.nJ0)(t(e), this.privacyMode);
            for await (const t of this.redacted.createExecInstance(e, r))yield (0, ce.qhh)(t, le.P$.UNSAFE_ALWAYS_ALLOWED);
        }
    }
    var fe = require("./module-54386.js"), ge = require("./module-47030.js");
    class ye {
        constructor(){
            this.sealedEligibleRemoteGetCount = 0, this.sealedBatchWidthMax = 0, this.sealedProjectedPostCount = 0, this.openBatchWidth = 0, this.sealScheduled = !1;
        }
        observe() {
            this.openBatchWidth++, this.sealScheduled || (this.sealScheduled = !0, queueMicrotask(()=>{
                this.sealOpenBatch();
            }));
        }
        getSnapshot() {
            const e = this.sealedEligibleRemoteGetCount + this.openBatchWidth, t = this.sealedProjectedPostCount + (this.openBatchWidth > 0 ? Math.ceil(this.openBatchWidth / 32) : 0);
            return {
                eligibleRemoteGetCount: e,
                batchWidthMax: Math.max(this.sealedBatchWidthMax, this.openBatchWidth),
                projectedPostCount: t
            };
        }
        sealOpenBatch() {
            const e = this.openBatchWidth;
            this.openBatchWidth = 0, this.sealScheduled = !1, 0 !== e && (this.sealedEligibleRemoteGetCount += e, this.sealedBatchWidthMax = Math.max(this.sealedBatchWidthMax, e), this.sealedProjectedPostCount += Math.ceil(e / 32));
        }
    }
    var we = function(e, t, r) {
        if (null != t) {
            if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
            var n, s;
            if (r) {
                if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
                n = t[Symbol.asyncDispose];
            }
            if (void 0 === n) {
                if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
                n = t[Symbol.dispose], r && (s = n);
            }
            if ("function" != typeof n) throw new TypeError("Object not disposable.");
            s && (n = function() {
                try {
                    s.call(this);
                } catch (e) {
                    return Promise.reject(e);
                }
            }), e.stack.push({
                value: t,
                dispose: n,
                async: r
            });
        } else r && e.stack.push({
            async: !0
        });
        return t;
    }, ve = function(e) {
        return function(t) {
            function r(r) {
                t.error = t.hasError ? new e(r, t.error, "An error was suppressed during disposal.") : r, t.hasError = !0;
            }
            var n, s = 0;
            return function e() {
                for(; n = t.stack.pop();)try {
                    if (!n.async && 1 === s) return s = 0, t.stack.push(n), Promise.resolve().then(e);
                    if (n.dispose) {
                        var o = n.dispose.call(n.value);
                        if (n.async) return s |= 2, Promise.resolve(o).then(e, function(t) {
                            return r(t), e();
                        });
                    } else s |= 1;
                } catch (e) {
                    r(e);
                }
                if (1 === s) return t.hasError ? Promise.reject(t.error) : Promise.resolve();
                if (t.hasError) throw t.error;
            }();
        };
    }("function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
        var n = new Error(r);
        return n.name = "SuppressedError", n.error = e, n.suppressed = t, n;
    });
    const _e = (0, p.h)("RemoteKvManager"), Ae = (0, H.v5)("agent_kv.remote.get_blob.duration_ms", {
        description: "Duration of getBlob operations in milliseconds"
    }), Se = (0, H.v5)("agent_kv.remote.set_blob.duration_ms", {
        description: "Duration of setBlob operations in milliseconds"
    });
    class be {
        constructor(e, t, r, n = {}){
            this.serverStream = t, this.clientStream = r, this.pendingRequests = new Map, this.nextId = 0, this.getBlobShadowCoalescer = !0 === n.observeGetBlobShadowBatches ? new ye : void 0, this.startListening(e);
        }
        getBlobShadowSnapshot() {
            return this.getBlobShadowCoalescer?.getSnapshot();
        }
        rejectPendingRequests(e) {
            for (const [t, { reject: r }] of this.pendingRequests)r(e);
            this.pendingRequests.clear();
        }
        async startListening(e) {
            try {
                for await (const t of this.clientStream)this.handleClientMessage(e, t);
                this.rejectPendingRequests(new Error("KV stream closed"));
            } catch (t) {
                _e.error(e, "Error in KV manager listener:", t), this.rejectPendingRequests(new Error("KV stream closed"));
            }
        }
        handleClientMessage(e, t) {
            const r = t.id, n = this.pendingRequests.get(r);
            n ? (this.pendingRequests.delete(r), n.resolve(t)) : _e.warn(e, "Received KV response for unknown request ID", {
                id: r
            });
        }
        async getBlob(e, t) {
            const r = {
                stack: [],
                error: void 0,
                hasError: !1
            };
            try {
                const n = we(r, (0, m.VI)(e.withName("RemoteKvManager.getBlob")), !1), s = performance.now();
                try {
                    const e = this.nextId++;
                    let r, s;
                    const o = new Promise((e, t)=>{
                        r = e, s = t;
                    });
                    this.pendingRequests.set(e, {
                        resolve: r,
                        reject: s
                    }), this.getBlobShadowCoalescer?.observe();
                    const i = (0, m.mJ)(n.ctx);
                    await this.serverStream.write((0, ce.xch)(new fe.km({
                        id: e,
                        message: {
                            case: "getBlobArgs",
                            value: {
                                blobId: (0, ge.Fo)(t)
                            }
                        },
                        spanContext: i ? new ue.Kg(i) : void 0
                    }), K.PrivacyMode.UNSPECIFIED));
                    const a = await o;
                    if ("getBlobResult" !== a.message.case) throw new Error(`Unexpected response type: ${a.message.case}`);
                    if (a.message.value.error) throw new Error(a.message.value.error.message.unwrap(le.P$.UNSAFE_ALWAYS_ALLOWED));
                    return n.span.setAttribute("blobLength", a.message.value.blobData?.length ?? 0), a.message.value.blobData?.unwrap(le.P$.UNSAFE_ALWAYS_ALLOWED);
                } finally{
                    const t = performance.now() - s;
                    Ae.histogram(e, t);
                }
            } catch (e) {
                r.error = e, r.hasError = !0;
            } finally{
                ve(r);
            }
        }
        async setBlob(e, t, r) {
            const n = {
                stack: [],
                error: void 0,
                hasError: !1
            };
            try {
                const s = we(n, (0, m.VI)(e.withName("RemoteKvManager.setBlob")), !1);
                s.span.setAttribute("blobLength", r.length);
                const o = performance.now();
                try {
                    const e = this.nextId++;
                    let n, o;
                    const i = new Promise((e, t)=>{
                        n = e, o = t;
                    });
                    this.pendingRequests.set(e, {
                        resolve: n,
                        reject: o
                    });
                    const a = (0, m.mJ)(s.ctx);
                    await this.serverStream.write((0, ce.xch)(new fe.km({
                        id: e,
                        message: {
                            case: "setBlobArgs",
                            value: {
                                blobId: (0, ge.Fo)(t),
                                blobData: (0, ge.Fo)(r)
                            }
                        },
                        spanContext: a ? new ue.Kg(a) : void 0
                    }), K.PrivacyMode.UNSPECIFIED));
                    const c = await i;
                    if ("setBlobResult" !== c.message.case) throw new Error(`Unexpected response type: ${c.message.case}`);
                    if (c.message.value.error) throw new Error(c.message.value.error.message.unwrap(le.P$.UNSAFE_ALWAYS_ALLOWED));
                } finally{
                    const t = performance.now() - o;
                    Se.histogram(e, t);
                }
            } catch (e) {
                n.error = e, n.hasError = !0;
            } finally{
                ve(n);
            }
        }
        async setBlobLocallyOnly(e, t, r) {
            return Promise.resolve();
        }
        flush(e) {
            return Promise.resolve();
        }
    }
    var Ee = require("./module-60431.js"), Ie = require("./module-69584.js"), Ce = require("./module-67918.js"), ke = require("./module-69745.js"), xe = require("./module-84959.js"), Te = require("./module-49273.js"), Re = require("./module-70656.js"), Be = require("./module-36781.js"), Pe = require("./module-48826.js");
    var Je = require("./module-38812.js");
    class Me {
        constructor(e, t){
            this.out = e, this.log = t, this.pending = new Map, this.postTurnEndedWork = [], this.closed = !1;
        }
        handleResponse(e) {
            const t = this.pending.get(e.id);
            void 0 !== t ? (this.pending.delete(e.id), t.resolve(e)) : this.log(`interaction response for unknown query id ${e.id} dropped`);
        }
        close() {
            if (!this.closed) {
                this.closed = !0;
                for (const [e, t] of this.pending)t.held && (this.pending.delete(e), t.reject(qe()));
            }
        }
        async sendUpdate(e, t) {
            try {
                await this.out.write(t);
            } catch (e) {
                throw new Je.Lm(e instanceof Error ? e.message : "response stream write failed", {
                    cause: e
                });
            }
        }
        async query(e, t) {
            if (this.closed) throw new Je.Lm("agent harness: client stream already closed");
            const { promise: r, resolve: n, reject: s } = Promise.withResolvers(), o = {
                resolve: n,
                reject: s,
                held: !1
            };
            this.pending.set(t.id, o);
            try {
                await this.out.write(t);
            } catch (e) {
                throw this.pending.delete(t.id), new Je.Lm(e instanceof Error ? e.message : "response stream write failed", {
                    cause: e
                });
            }
            if (this.closed && this.pending.delete(t.id)) throw qe();
            return o.held = !0, r;
        }
        enqueuePostTurnEndedWork(e) {
            this.postTurnEndedWork.push(e);
        }
        async flushPostTurnEndedWork(e) {
            const t = this.postTurnEndedWork;
            this.postTurnEndedWork = [], await Promise.all(t.map(async (e)=>{
                try {
                    await e();
                } catch (e) {
                    this.log(`post-turn-ended work failed: ${e instanceof Error ? e.message : String(e)}`);
                }
            }));
        }
    }
    function qe() {
        return new Je.Lm("agent harness: client stream closed before the query was answered");
    }
    const De = 5e3, Oe = 5e3, Ne = 50;
    function Fe() {
        return new B.Oy({
            message: {
                case: "interactionUpdate",
                value: {
                    message: {
                        case: "heartbeat",
                        value: new Ie.ih1
                    }
                }
            }
        });
    }
    function Ue(e, t) {
        const r = e.get(t);
        return null === r || "" === r ? void 0 : r;
    }
    function Le(e) {
        return (e.mcpTools?.mcpTools ?? []).map((e)=>{
            const t = (0, l.mku)(e.outputSchemaJson), r = function(e) {
                return void 0 === e || "" === e ? void 0 : (0, Be.d)(e);
            }(e.annotationsJson);
            return {
                clientKey: e.providerIdentifier,
                name: e.name,
                providerIdentifier: e.providerIdentifier,
                toolName: e.toolName,
                description: e.description,
                inputSchema: (0, l.Hvh)(e) ?? {},
                ...void 0 === t ? {} : {
                    outputSchema: t
                },
                ...void 0 === r ? {} : {
                    annotations: r
                }
            };
        });
    }
    function $e(e) {
        if (e instanceof X.T) return e;
        const t = e instanceof Error ? e.message : String(e);
        if (e instanceof ie.cc) {
            const r = e.displayInfo?.errorDetails, n = e.displayInfo?.connectCode ?? xe.C.Canceled;
            return new X.T((0, Re._)(t, n), n, void 0, void 0 === r ? void 0 : [
                (0, ie.yp)(r, (0, v.C)(e))
            ]);
        }
        if (e instanceof ie.Yv) {
            const r = e, n = r.displayInfo, s = Qe(r), o = n?.connectCode ?? (s ? xe.C.Unavailable : xe.C.FailedPrecondition), i = Boolean(n?.title) || Boolean(n?.detail), a = n?.errorDetails ?? (i ? new Ce.ErrorDetails({
                error: n?.errorCode ?? Ce.ErrorDetails_Error.CUSTOM_MESSAGE,
                details: new Ce.CustomErrorDetails({
                    title: n?.title,
                    detail: n?.detail,
                    isRetryable: s
                })
            }) : new Ce.ErrorDetails({
                error: s ? Ce.ErrorDetails_Error.UNSPECIFIED : Ce.ErrorDetails_Error.CUSTOM_MESSAGE
            }));
            return new X.T((0, Re._)(t, o), o, void 0, [
                (0, ie.yp)(a, (0, v.C)(r))
            ], r);
        }
        return e instanceof Error && "AbortError" === e.name ? new X.T(t, xe.C.Canceled, void 0, void 0, e) : new X.T(t, xe.C.Internal, void 0, void 0, e);
    }
    function Qe(e) {
        return e.displayInfo?.isRetryable ?? "RetriableError" === e.kind;
    }
    function je(e) {
        const t = $e(e);
        return e instanceof X.T || !function(e) {
            const t = [];
            for(let r = e; r instanceof Error && !t.includes(r); r = r.cause)t.push(r);
            const r = t.some((e)=>e instanceof ie.cc || e instanceof X.T || "AbortError" === e.name || e instanceof ie.Yv && ("RetriableError" !== e.kind || void 0 !== e.displayInfo || (0, ie.yM)(e))), n = t.find((e)=>!(e instanceof ie.Yv));
            return !r && void 0 !== n && "loop" === (0, oe.sYl)(n);
        }(e) || t.metadata.set(N.mj, N.xP), t;
    }
    async function* Ge(e, t, r) {
        const n = t[Symbol.asyncIterator](), s = await n.next();
        if (s.done || "runRequest" !== s.value.message.case) throw new X.T("agent harness: the first message must be a runRequest", xe.C.InvalidArgument);
        const o = s.value.message.value;
        if (void 0 === o.conversationState) throw new X.T("agent harness: runRequest carries no conversation state", xe.C.InvalidArgument);
        if (void 0 === o.action) throw new X.T("agent harness: runRequest carries no action", xe.C.InvalidArgument);
        const i = o.conversationState, a = (0, Pe.ZQ)(o, r.requestHeader), c = o.action, u = e.getPrivacyMode(), d = e.log, p = function(e, t, r) {
            return {
                conversationId: e.conversationId ?? Ue(t, "x-conversation-id") ?? "",
                ...void 0 === e.conversationGroupId ? {} : {
                    conversationGroupId: e.conversationGroupId
                },
                ...void 0 === e.agentSessionId ? {} : {
                    agentSessionId: e.agentSessionId
                },
                ...void 0 === e.nextInteractionQueryId ? {} : {
                    nextInteractionQueryId: e.nextInteractionQueryId
                },
                generationUUID: e.runId ?? Ue(t, "x-original-request-id") ?? Ue(t, "x-request-id"),
                ...void 0 === Ue(t, "x-request-id") ? {} : {
                    firstAttemptRequestId: Ue(t, "x-request-id")
                },
                ...void 0 === Ue(t, "x-parent-request-id") ? {} : {
                    parentRequestId: Ue(t, "x-parent-request-id")
                },
                ...void 0 === Ue(t, "x-root-parent-request-id") ? {} : {
                    rootParentRequestId: Ue(t, "x-root-parent-request-id")
                },
                ...void 0 === Ue(t, "x-parent-agent-tool-call-id") ? {} : {
                    parentAgentToolCallId: Ue(t, "x-parent-agent-tool-call-id")
                },
                ..."true" === Ue(t, "x-direct-meta-parent-child-subagent") ? {
                    directMetaParentChildSubagent: !0
                } : {},
                ...void 0 === e.suppressSubagentProgressUpdateTool ? {} : {
                    suppressSubagentProgressUpdateTool: e.suppressSubagentProgressUpdateTool
                },
                ...void 0 === e.mcpFileSystemOptions ? {} : {
                    mcpFileSystemOptions: e.mcpFileSystemOptions
                },
                ...void 0 === e.customSystemPrompt ? {} : {
                    customSystemPrompt: e.customSystemPrompt
                },
                ...void 0 === e.harness ? {} : {
                    harness: e.harness
                },
                ..."pixels" === e.computerUseCoordinateMode || "percent" === e.computerUseCoordinateMode ? {
                    computerUseCoordinateMode: e.computerUseCoordinateMode
                } : {},
                ...void 0 === e.excludeWorkspaceContext ? {} : {
                    excludeWorkspaceContext: e.excludeWorkspaceContext
                },
                ...void 0 === e.requestedModel ? {} : {
                    requestedModel: e.requestedModel
                },
                ...void 0 === e.devRawModelSlug ? {} : {
                    devRawModelSlug: e.devRawModelSlug
                },
                ...0 === e.selectedSubagentModels.length ? {} : {
                    selectedSubagentModels: e.selectedSubagentModels
                },
                ...0 === e.subagentModelOverrides.length ? {} : {
                    subagentModelOverrides: e.subagentModelOverrides
                },
                ...0 === e.selectedSubagentModelDetails.length ? {} : {
                    selectedSubagentModelsLegacy: e.selectedSubagentModelDetails
                },
                ...void 0 === e.suggestNextPrompt ? {} : {
                    suggestNextPrompt: e.suggestNextPrompt
                },
                ...void 0 === e.subagentTypeName ? {} : {
                    subagentTypeName: e.subagentTypeName
                },
                ...void 0 === e.clientSupportsInlineImages ? {} : {
                    clientSupportsInlineImages: e.clientSupportsInlineImages
                },
                ...void 0 === e.clientSupportsPreviewCard ? {} : {
                    clientSupportsPreviewCard: e.clientSupportsPreviewCard
                },
                ...void 0 === e.startedAsNewProject ? {} : {
                    startedAsNewProject: e.startedAsNewProject
                },
                ...void 0 === e.firstProjectOnboarding ? {} : {
                    firstProjectOnboarding: e.firstProjectOnboarding
                },
                ...void 0 === e.clientSupportsSendToUser ? {} : {
                    clientSupportsSendToUser: e.clientSupportsSendToUser
                },
                ...void 0 === e.clientSupportsRoutedModelUpdate ? {} : {
                    clientSupportsRoutedModelUpdate: e.clientSupportsRoutedModelUpdate
                },
                ...void 0 === e.canCreateCloudSubagents ? {} : {
                    canCreateCloudSubagents: e.canCreateCloudSubagents
                },
                ...r,
                enableAgentRetries: !1
            };
        }(o, r.requestHeader, a);
        let m;
        const h = {
            ...p,
            onTtftBreakdown: (e, t)=>{
                m ??= e, p.onTtftBreakdown?.(e, t);
            }
        }, f = h.generationUUID ?? "?", g = function() {
            const e = (0, de.Jt)(), t = new Set;
            let r = !1;
            return {
                write: (n)=>{
                    if (r) return Promise.resolve();
                    const s = e.write(n).catch((e)=>{
                        if (!r) throw e;
                    });
                    t.add(s);
                    const o = ()=>{
                        t.delete(s);
                    };
                    return s.then(o, o), s;
                },
                closeWhenRead: ()=>{
                    r = !0, Promise.allSettled(t).then(()=>e.close());
                },
                close: ()=>{
                    r = !0, e.close();
                },
                [Symbol.asyncIterator]: ()=>e[Symbol.asyncIterator]()
            };
        }(), y = (0, de.Jt)(), w = (0, de.Jt)(), [v, _] = (0, Ee.iU)(e.context, r.requestHeader).withCancel(), A = new Me(new de.F8(g, (e)=>{
            const t = e instanceof Ie.Pd7 || void 0 === m ? void 0 : (r = m, new B.gq({
                serverFirstTokenMs: r.serverFirstTokenMs,
                preStreamSetupMs: r.preStreamSetupMs,
                waitForFirstEventMs: r.waitForFirstEventMs,
                ...void 0 === r.providerTtftMs ? {} : {
                    providerTtftMs: r.providerTtftMs
                },
                slowPoolWaitMs: r.slowPoolWaitMs,
                ...void 0 === r.clientPrepMs ? {} : {
                    clientPrepMs: r.clientPrepMs
                },
                clientClock: "client" === r.clock
            }));
            var r;
            return void 0 !== t && (m = void 0), new B.Oy({
                message: e instanceof Ie.Pd7 ? {
                    case: "interactionQuery",
                    value: e
                } : {
                    case: "interactionUpdate",
                    value: e
                },
                ...void 0 === t ? {} : {
                    ttftBreakdown: t
                }
            });
        }), d), S = new me(v, new de.F8(g, (e)=>new B.Oy({
                message: (0, ke.C3)(e) ? {
                    case: "execServerMessage",
                    value: (0, ce.AA_)(e, le.P$.UNSAFE_ALWAYS_ALLOWED)
                } : {
                    case: "execServerControlMessage",
                    value: (0, ce.DwO)(e, le.P$.UNSAFE_ALWAYS_ALLOWED)
                }
            })), y), b = (E = new l.orm(new he(S, u)), {
            get: (e)=>E.get(e),
            entries: ()=>[]
        });
        var E;
        const I = new be(v, new de.F8(g, (e)=>new B.Oy({
                message: {
                    case: "kvServerMessage",
                    value: (0, ce.Wbm)(e, le.P$.UNSAFE_ALWAYS_ALLOWED)
                }
            })), w), C = new ae.h;
        let k, x;
        const T = {
            handleCheckpoint: async (e, t)=>{
                void 0 === x && (k = t, await g.write(new B.Oy({
                    message: {
                        case: "conversationCheckpointUpdate",
                        value: t
                    }
                })));
            },
            getLatestCheckpoint: ()=>k
        }, R = Promise.withResolvers();
        let P = !1;
        const J = e.cancelDrainMs ?? Oe, M = e.clock ?? Te.l;
        let q;
        const D = ()=>{
            x?.resolve(), C.abort("agent harness: host aborted the call"), _(), g.close(), P || (q = M.schedule(J, ()=>{
                P || (d(`run ${f}: host cancelled the call and the loop is still running after ${J}ms; dropping the invocation (the loop's own state stays resident until it settles)`), A.close(), R.resolve({
                    ok: !1,
                    error: new X.T(`agent harness: host cancelled the call; the loop did not stop within ${J}ms and the invocation was dropped`, xe.C.Canceled)
                }));
            }));
        };
        r.signal.aborted ? D() : r.signal.addEventListener("abort", D, {
            once: !0
        });
        (async ()=>{
            try {
                for(;;){
                    const e = await n.next();
                    if (e.done) break;
                    const t = e.value.message;
                    switch(t.case){
                        case "execClientMessage":
                            await y.write((0, ce.f1_)(t.value, u));
                            break;
                        case "execClientControlMessage":
                            await y.write((0, ce.KHu)(t.value, u));
                            break;
                        case "kvClientMessage":
                            await w.write((0, ce.NuS)(t.value, u));
                            break;
                        case "interactionResponse":
                            A.handleResponse(t.value);
                            break;
                        case "conversationAction":
                            await C.submitConversationAction(t.value);
                            break;
                        case "runRequest":
                            d("second runRequest on one stream ignored");
                    }
                }
            } catch (e) {
                e instanceof de.W2 || d(`request stream failed: ${He(e)}`);
            } finally{
                y.close(), w.close(), A.close();
            }
        })();
        const O = (0, Te.H)(M, De, ()=>g.write(Fe())), N = e.agentClient.run(v, i, c, o.modelDetails, A, b, I, C, T, Le(o), h).then(async ()=>{
            await A.flushPostTurnEndedWork(v);
        }).then(()=>({
                ok: !0
            }), async (e)=>{
            if (e instanceof ie.Yv && Qe(e) && !r.signal.aborted) {
                const e = Promise.withResolvers();
                x = e;
                const t = M.schedule(Ne, e.resolve);
                await e.promise, t.dispose();
            }
            return {
                ok: !1,
                error: e
            };
        }).finally(()=>{
            P = !0, q?.dispose(), O.dispose(), g.closeWhenRead();
        });
        try {
            yield Fe();
            for await (const e of g)yield e;
            const e = await Promise.race([
                R.promise,
                N
            ]);
            if (!e.ok) throw e.error;
        } catch (e) {
            throw r.signal.aborted ? $e(e) : je(e);
        } finally{
            g.close(), O.dispose(), q?.dispose(), r.signal.removeEventListener("abort", D), _(), C.dispose(), n.return?.().catch((e)=>{
                d(`request stream release failed: ${He(e)}`);
            }), y.close(), w.close();
        }
    }
    function He(e) {
        return e instanceof Error ? e.message : String(e);
    }
    const ze = 4294967295, We = [
        N.eN.managedLocalRun,
        N.eN.seamRunOptions
    ];
    function Ve(e) {
        return {
            log: (t, r)=>{
                const n = function(e) {
                    if (void 0 === e || 0 === Object.keys(e).length) return;
                    try {
                        return JSON.stringify(e, (e, t)=>"bigint" == typeof t ? t.toString() : t);
                    } catch (e) {
                        return `<unrenderable metadata: ${Xe(e)}>`;
                    }
                }(r.metadata);
                e({
                    level: r.level,
                    message: r.message,
                    ...void 0 === r.logger ? {} : {
                        logger: r.logger
                    },
                    ...void 0 === n ? {} : {
                        metadata: n
                    },
                    ...Ze(r.error)
                });
            }
        };
    }
    function Ke(e) {
        const t = (e, t, r)=>({
                stat: e.name,
                value: t,
                ...void 0 === r ? {} : {
                    tags: r
                }
            });
        return {
            increment: (r, n, s, o)=>e.increment(t(n, s ?? 1, o)),
            histogram: (r, n, s, o)=>e.distribution(t(n, s, o)),
            gauge: (r, n, s, o)=>e.gauge(t(n, s, o)),
            record: (r, n, s, o)=>e.gauge(t(n, s, o))
        };
    }
    function Ye(e, t) {
        const { metrics: r, spanAttributes: n } = t;
        let s = (0, d.q6)().with(p._O, e);
        return void 0 !== r && (s = s.with(H.Fm, Ke(r))), void 0 !== n && (s = s.with(m.b6, {
            ...n
        })), s;
    }
    function Ze(e) {
        return void 0 === e ? {} : e instanceof Error ? {
            error: Xe(e),
            errorName: e.name,
            errorMessage: e.message
        } : {
            error: Xe(e)
        };
    }
    function Xe(e) {
        return e instanceof Error ? e.stack ?? e.message : String(e);
    }
    function et(e) {
        const t = (0, Z.UU)(W.AiService, e);
        return {
            runWebSearch: t.runWebSearch,
            runWebFetch: t.runWebFetch,
            runGenerateImage: t.runGenerateImage,
            runGenerateVideo: t.runGenerateVideo,
            runXSearch: t.runXSearch,
            codebaseSearch: (0, Z.UU)(Y.RepositoryService, e),
            smartModeClassifier: t
        };
    }
    function tt(e) {
        const { module: t, telemetry: r } = e, n = (e)=>r.log({
                level: "info",
                message: `gen ${t.generation.slice(0, 12)} (${t.label}): ${e}`
            }), s = Ve(r.log);
        "static" !== t.source && (0, p.i4)(s);
        const o = ne(e.backendTransport, n, X.T);
        var i;
        const a = {
            agentClient: q({
                inferenceClient: (0, Z.UU)(V.InferenceService, o),
                agentToolsClient: et(o),
                conversationBlobClient: (0, Z.UU)(z.AgentService, o),
                getPrivacyModeEnum: ()=>e.privacyMode,
                retryLogging: "delegated",
                metricTags: {},
                agentModule: Q(t, (i = {
                    spanAttributes: r.tags
                }, i.spanAttributes?.module_channel))
            }),
            getPrivacyMode: ()=>(0, M.a)(e.privacyMode) ?? K.PrivacyMode.NO_STORAGE,
            log: n,
            context: Ye(s, {
                metrics: r,
                spanAttributes: r.tags
            })
        }, c = (0, ee.k)({
            connect: !0,
            grpc: !1,
            grpcWeb: !1,
            readMaxBytes: ze,
            writeMaxBytes: ze
        });
        c.service(z.AgentService, {
            run: (e, t)=>Ge(a, e, t)
        });
        const l = (0, te.N)(c.handlers);
        let u = !1;
        return n(`transport created (${We.join(", ")})`), {
            transport: {
                call: (e)=>u ? Promise.reject(new Error("agent harness: transport is disposed")) : l(e),
                dispose () {
                    u = !0;
                }
            }
        };
    }
    var rt = require("./module-1368.js"), nt = require("./module-78877.js"), st = require("./module-43195.js"), ot = require("./module-3702.js");
    const it = 3e5, at = {
        min: 6e4,
        max: 864e5
    }, ct = 3e4;
    const lt = {
        unary: ()=>Promise.reject(new Error("validate-only agent harness: no turn runs here")),
        stream: ()=>Promise.reject(new Error("validate-only agent harness: no turn runs here"))
    };
    function ut(e) {
        const { loader: t, log: r } = e, n = e.clock ?? Te.l, s = ()=>performance.now(), o = function(e) {
            if ("number" != typeof e || !Number.isFinite(e) || e <= 0) return it;
            const { min: t, max: r } = at;
            return Math.min(r, Math.max(t, Math.floor(e)));
        }(e.pollIntervalMs), i = (t, n)=>{
            try {
                e.metrics?.increment?.({
                    stat: t,
                    value: 1,
                    tags: n
                });
            } catch (e) {
                r(`${t} counter not emitted: ${e instanceof Error ? e.message : String(e)}`);
            }
        }, a = (t, n, s)=>{
            try {
                e.metrics?.distribution({
                    stat: t,
                    value: n,
                    tags: s
                });
            } catch (e) {
                r(`${t} distribution not emitted: ${e instanceof Error ? e.message : String(e)}`);
            }
        }, c = (e)=>"turn" === e ? "poll" : e, l = [
            t.onDidLoad(({ module: e, channel: t, sequence: r, verdict: n, reason: s, when: o })=>i(ot.zk, {
                    verdict: n,
                    reason: s,
                    when: c(o),
                    ...(0, ot.y)(e, t, r, "validate_only")
                })),
            t.onDidServe(({ module: e, channel: t, sequence: r, cause: n, when: s, refused: o })=>i(ot.ad, {
                    cause: n,
                    when: c(s),
                    ...void 0 === o ? {} : {
                        verdict: o.verdict,
                        reason: o.reason
                    },
                    ...(0, ot.y)(e, t, r, "validate_only")
                })),
            t.onDidLoseHost(({ generation: e, phase: t, channel: r, sequence: n })=>i(ot.k5, {
                    phase: t,
                    ...(0, ot.y)({
                        generation: e,
                        source: "installed"
                    }, r, n)
                })),
            t.onDidRevert(({ module: e, channel: t, sequence: n, trigger: s, fallback: o })=>{
                r(`${e.label} (${e.generation.slice(0, 12)}) ${"crash_loop" === s ? "kept killing extension hosts" : "was reverted by another window"}; the loader holds ${(0, rt.KC)(o)}`), i(ot.rd, {
                    error_class: "crash_loop" === s ? "host_lost" : "none",
                    trigger: s,
                    late_faults: "0",
                    ...(0, ot.y)(e, t, n)
                });
            }),
            t.onDidFailToWrite(({ file: e, code: t, channel: r })=>i(ot.eE, {
                    file: e,
                    code: t,
                    module_channel: r ?? "unknown",
                    module_mode: "validate_only"
                }))
        ];
        let u, d, p = !1;
        const m = (e)=>{
            try {
                e.transport?.dispose();
            } catch (e) {
                r(`transport dispose failed: ${e instanceof Error ? e.message : String(e)}`);
            }
            t.current().harness !== e.active.harness && t.release(e.active);
        }, h = ()=>{
            d = void 0;
            try {
                (()=>{
                    const n = s(), o = t.poll(), { active: c } = o;
                    if (void 0 !== o.rejected && r(`pinned generation ${o.rejected.generation.slice(0, 12)} rejected (${o.rejected.reason}); the loader holds ${(0, rt.KC)(c.info)}`), u?.active.harness === c.harness) return;
                    const l = u;
                    void 0 !== l && m(l);
                    const d = (0, ot.y)(c.info, c.channel, c.sequence, "validate_only");
                    let p, h = "ok";
                    if ("installed" === c.info.source) {
                        t.turnStarted(c.info);
                        try {
                            p = c.harness.createTransport((0, st.k)(c, {
                                backendTransport: lt,
                                getPrivacyModeEnum: ()=>{},
                                log: r,
                                metrics: e.metrics,
                                loopLogContext: e.loopLogContext
                            })), r(`validated ${(0, rt.KC)(c.info)}: loaded and activated, no turn runs here`);
                        } catch (e) {
                            h = "compose_failed";
                            const t = e instanceof Error ? e.message : String(e);
                            r(`activate failed on ${(0, rt.KC)(c.info)}: ${t}`), i(ot.Rf, {
                                timing: "early",
                                error_class: "compose",
                                ...d
                            });
                        } finally{
                            t.turnSettled(c.info);
                        }
                    } else r(`the loader holds ${(0, rt.KC)(c.info)}; nothing installed to validate`);
                    u = {
                        active: c,
                        transport: p
                    };
                    const f = void 0 === l ? "start" : "poll";
                    let g = "none";
                    void 0 !== l && (g = "installed" === l.active.info.source ? "module" : "static"), a(ot.kW, Math.round(s() - n), {
                        when: f,
                        result: h,
                        from: g,
                        ...d
                    });
                    const y = t.serving().length;
                    a(ot.hi, Math.round((0, nt.getHeapStatistics)().used_heap_size / 1024 / 1024), {
                        live: y >= 3 ? "3+" : String(y),
                        when: f,
                        module_channel: d.module_channel ?? "unknown",
                        serving: d.serving ?? "static",
                        module_mode: "validate_only"
                    });
                })();
            } catch (e) {
                r(`poll failed: ${e instanceof Error ? e.message : String(e)}`);
            }
            p || (d = n.schedule(o, h));
        };
        return t.announce(), d = n.schedule(ct, h), {
            poll: ()=>{
                p || (d?.dispose(), h());
            },
            dispose: ()=>{
                if (p) return;
                p = !0, d?.dispose(), d = void 0;
                for (const e of l)e();
                const e = u;
                u = void 0, void 0 !== e && m(e), t.retire("this host is going away");
            }
        };
    }
    require("./module-13874.js");
    var dt = require("./module-95831.js");
    const pt = (t)=>{
        const r = function(t) {
            if (void 0 === t) return;
            const r = (e)=>t.log(`[agent-harness] ${e}`);
            return {
                log: r,
                loopLogContext: t.loopLogContext,
                ...void 0 === t.onModuleReverted ? {} : {
                    onModuleReverted: t.onModuleReverted
                },
                loader: ()=>rt.uU.shared({
                        ...t,
                        staticFloor: e,
                        log: r
                    })
            };
        }(t.agentHarness);
        return (0, G.mJ)(t, (n = t.attachLocalLoopAttemptContext, (e, t, r)=>{
            const s = e.managedInferenceClient, o = e.managedAgentToolsClient;
            if (void 0 !== s && void 0 !== o) return q({
                inferenceClient: s,
                getPrivacyModeEnum: ()=>e.runtimeCapabilities?.getPrivacyModeEnum?.(),
                agentToolsClient: o,
                ...void 0 === e.managedAgentServiceClient ? {} : {
                    conversationBlobClient: e.managedAgentServiceClient
                },
                attachAttemptContext: n,
                metricTags: r,
                agentModule: Q(j, r.module_channel)
            });
        }), void 0, {
            kind: "local-loop",
            ...void 0 === r ? {} : {
                agentHarness: r
            }
        });
        var n;
    };
    function mt(e) {
        return (t)=>(0, G.mJ)(t, (r, n)=>(0, D.x)({
                    sessionProvider: e.sessionProvider,
                    catalog: e.catalog,
                    ...void 0 === e.configErrorDetail ? {} : {
                        configErrorDetail: e.configErrorDetail
                    },
                    ...void 0 === e.gatewayRetry ? {} : {
                        gatewayRetry: e.gatewayRetry
                    },
                    ...void 0 === e.promptQualityCaptures ? {} : {
                        promptQualityCaptures: e.promptQualityCaptures
                    },
                    getPrivacyModeEnum: ()=>r.runtimeCapabilities?.getPrivacyModeEnum?.(),
                    attachAttemptContext: t.attachLocalLoopAttemptContext,
                    ...void 0 === r.privateInferenceBackend || void 0 === n.privateInferenceUsage ? {} : {
                        usageAdmission: (0, O.$)(r.privateInferenceBackend, n.privateInferenceUsage)
                    }
                }), void 0, {
                kind: "private-inference",
                privateInference: e.routing
            });
    }
    function ht() {
        return {
            async stat (e) {
                const t = c.workspace.textDocuments.find((t)=>t.uri.fsPath === e);
                if (void 0 !== t) return {
                    size: Buffer.byteLength(t.getText())
                };
                return {
                    size: (await c.workspace.fs.stat(c.Uri.file(e))).size
                };
            },
            async read (e) {
                const t = c.workspace.textDocuments.find((t)=>t.uri.fsPath === e);
                if (void 0 !== t) {
                    const e = t.getText();
                    return {
                        contents: e,
                        byteLength: Buffer.byteLength(e)
                    };
                }
                const r = await c.workspace.fs.readFile(c.Uri.file(e));
                return {
                    contents: Buffer.from(r).toString(),
                    byteLength: r.byteLength
                };
            }
        };
    }
    var ft = require("./module-8898.js"), gt = require("./module-42956.js"), yt = require("./module-47825.js"), wt = require("./module-77598.js"), vt = require("./module-73024.js"), _t = ()=>vt && vt.__esModule ? vt.default : vt, At = require("./module-76760.js"), St = ()=>At && At.__esModule ? At.default : At, bt = require("./module-81958.js");
    const Et = "agentKv:blob:";
    function It(e) {
        return `${Et}${e}`;
    }
    class Ct {
        constructor(e){
            this.db = e, (0, gt.V)(this, "host_sqlite");
        }
        async getBlob(e, t) {
            try {
                const r = this.db.blobs.get(It((0, R.nj)(t)));
                return (0, yt.g)(e, "host_sqlite", void 0 === r ? "miss" : "hit"), r;
            } catch (t) {
                throw (0, yt.g)(e, "host_sqlite", "error"), t;
            }
        }
        async setBlob(e, t, r) {
            this.db.blobs.set(It((0, R.nj)(t)), r);
        }
        async setBlobLocallyOnly(e, t, r) {
            await this.setBlob(e, t, r);
        }
        async flush(e) {}
    }
    class kt {
        constructor(e, t, r = ()=>{}){
            this.mirror = t, this.reportMirrorWriteFailure = r, this.pendingMirrorWrites = new Set, this.local = new Ct(e), (0, gt.V)(this, "host_sqlite");
        }
        async getBlob(e, t) {
            return this.local.getBlob(e, t);
        }
        async setBlob(e, t, r) {
            await this.writeLocallyThenMirror(e, t, r, !1);
        }
        async setBlobLocallyOnly(e, t, r) {
            await this.writeLocallyThenMirror(e, t, r, !0);
        }
        async flush(e) {
            for(await this.local.flush(e); this.pendingMirrorWrites.size > 0;)await Promise.all([
                ...this.pendingMirrorWrites
            ]);
            this.throwIfMirrorFailed();
        }
        async writeLocallyThenMirror(e, t, r, n) {
            this.throwIfMirrorFailed(), n ? await this.local.setBlobLocallyOnly(e, t, r) : await this.local.setBlob(e, t, r), await this.trackMirrorWrite({
                blobId: t,
                blobData: r,
                locallyOnly: n
            }), this.throwIfMirrorFailed();
        }
        trackMirrorWrite(e) {
            const t = (async ()=>this.mirror(e))().then(()=>{}, (e)=>{
                void 0 === this.latchedMirrorFailure && (this.latchedMirrorFailure = new Error(`Mirror write failed; the host-owned session store is now failed: ${e instanceof Error ? e.message : String(e)}`, {
                    cause: e
                }), this.reportMirrorWriteFailure());
            });
            return this.pendingMirrorWrites.add(t), t.then(()=>this.pendingMirrorWrites.delete(t)), t;
        }
        throwIfMirrorFailed() {
            if (void 0 !== this.latchedMirrorFailure) throw this.latchedMirrorFailure;
        }
    }
    const xt = "agentHost:listingProjection", Tt = bt.ai().finite().positive().optional().catch(void 0), Rt = bt.Yj().min(1).optional().catch(void 0), Bt = bt.zM().optional().catch(void 0), Pt = bt.Ik({
        title: Rt,
        isArchived: Bt,
        updatedAtMs: Tt
    }).transform((e)=>({
            ...void 0 === e.title ? {} : {
                title: e.title
            },
            ...void 0 === e.isArchived ? {} : {
                isArchived: e.isArchived
            },
            ...void 0 === e.updatedAtMs ? {} : {
                updatedAtMs: e.updatedAtMs
            }
        }));
    function Jt(e) {
        const t = e.items.get(xt);
        if (void 0 !== t) return function(e) {
            const t = Pt.safeParse(e);
            return t.success ? t.data : void 0;
        }(t);
    }
    function Mt(e, t) {
        const r = Jt(e), n = Object.hasOwn(t, "title") ? t.title : r?.title, s = void 0 === t.isArchived ? r?.isArchived : t.isArchived, o = Math.max(r?.updatedAtMs ?? 0, t.updatedAtMs ?? 0), i = {
            ...void 0 === n ? {} : {
                title: n
            },
            ...void 0 === s ? {} : {
                isArchived: s
            },
            ...0 === o ? {} : {
                updatedAtMs: o
            }
        };
        return function(e, t) {
            e.items.set(xt, function(e) {
                return {
                    ...void 0 === e.title ? {} : {
                        title: e.title
                    },
                    ...void 0 === e.isArchived ? {} : {
                        isArchived: e.isArchived
                    },
                    ...void 0 === e.updatedAtMs ? {} : {
                        updatedAtMs: e.updatedAtMs
                    }
                };
            }(t));
        }(e, i), i;
    }
    const qt = "agentHost:sessionManifest", Dt = [
        "migrated-from-renderer-cas",
        "host-native"
    ], Ot = /^[0-9a-f]{64}$/, Nt = bt.Ik({
        manifestVersion: bt.eu(1),
        sessionId: bt.Yj().min(1),
        latestRootBlobIdHex: bt.Yj().regex(Ot),
        origin: bt.k5(Dt),
        createdAtMs: bt.ai().int().nonnegative(),
        migratedBlobCount: bt.ai().int().nonnegative()
    }).strict();
    function Ft(e) {
        const t = Nt.safeParse(e);
        if (!t.success) throw new Error(`Host session manifest is invalid: ${t.error.issues.map((e)=>`${e.path.join(".") || "<root>"}: ${e.message}`).join("; ")}`);
        return t.data;
    }
    function Ut(e) {
        const t = e.items.get(qt);
        if (void 0 !== t) return Ft(t);
    }
    function Lt(e, t) {
        return e.transaction(()=>{
            const r = Ut(e);
            if (r?.latestRootBlobIdHex !== t.expectRoot) return {
                committed: !1,
                onDisk: r
            };
            for (const [r, n] of t.pieces)e.blobs.set(It(r), n);
            return function(e, t) {
                e.items.set(qt, t);
            }(e, t.manifest), void 0 !== t.listingUpdatedAtMs && Mt(e, {
                updatedAtMs: t.listingUpdatedAtMs
            }), {
                committed: !0
            };
        });
    }
    var $t = require("./module-22544.js");
    const Qt = "meta.json", jt = 262144;
    function Gt(e, t) {
        return "host-native" === e ? t : void 0;
    }
    function Ht(e, t, r) {
        return {
            schemaVersion: 1,
            sessionId: e.sessionId,
            origin: e.origin,
            createdAtMs: e.createdAtMs,
            ...void 0 === t?.updatedAtMs ? {} : {
                updatedAtMs: t.updatedAtMs
            },
            ...void 0 === t?.title ? {} : {
                title: t.title
            },
            isArchived: t?.isArchived ?? !1,
            ...void 0 === r || 0 === r.length ? {} : {
                workspacePaths: r
            },
            latestRootBlobIdHex: e.latestRootBlobIdHex
        };
    }
    function zt(e) {
        return At.join(e, Qt);
    }
    const Wt = bt.ai().finite().positive().optional().catch(void 0), Vt = bt.Yj().min(1).optional().catch(void 0), Kt = bt.YO(bt.L5()).transform((e)=>{
        const t = e.flatMap((e)=>"string" == typeof e ? [
                e
            ] : []);
        return 0 === t.length ? void 0 : t;
    }).optional().catch(void 0), Yt = bt.Ik({
        schemaVersion: bt.eu(1),
        sessionId: bt.Yj().min(1),
        origin: bt.k5(Dt),
        createdAtMs: bt.ai().finite(),
        updatedAtMs: Wt,
        title: Vt,
        isArchived: bt.zM(),
        workspacePaths: Kt,
        latestRootBlobIdHex: bt.Yj().regex(Ot)
    }).transform((e)=>({
            schemaVersion: e.schemaVersion,
            sessionId: e.sessionId,
            origin: e.origin,
            createdAtMs: e.createdAtMs,
            ...void 0 === e.updatedAtMs ? {} : {
                updatedAtMs: e.updatedAtMs
            },
            ...void 0 === e.title ? {} : {
                title: e.title
            },
            isArchived: e.isArchived,
            ...void 0 === e.workspacePaths ? {} : {
                workspacePaths: e.workspacePaths
            },
            latestRootBlobIdHex: e.latestRootBlobIdHex
        }));
    function Zt(e) {
        const t = {
            schemaVersion: 1,
            sessionId: e.sessionId,
            origin: e.origin,
            createdAtMs: e.createdAtMs,
            ...void 0 === e.updatedAtMs ? {} : {
                updatedAtMs: e.updatedAtMs
            },
            ...void 0 === e.title ? {} : {
                title: e.title
            },
            isArchived: e.isArchived,
            ...void 0 === e.workspacePaths || 0 === e.workspacePaths.length ? {} : {
                workspacePaths: [
                    ...e.workspacePaths
                ]
            },
            latestRootBlobIdHex: e.latestRootBlobIdHex
        };
        return JSON.stringify(t);
    }
    function Xt(e) {
        let t;
        try {
            t = JSON.parse(e);
        } catch (e) {
            return {
                kind: "invalid",
                reason: `not valid JSON: ${String(e)}`
            };
        }
        const r = Yt.safeParse(t);
        return r.success ? {
            kind: "ok",
            meta: r.data
        } : {
            kind: "invalid",
            reason: r.error.issues.map((e)=>`${e.path.join(".") || "<root>"}: ${e.message}`).join("; ")
        };
    }
    function er(e) {
        return {
            ino: e.ino,
            mtimeMs: e.mtimeMs,
            size: e.size
        };
    }
    function tr(e, t) {
        return e.ino === t.ino && e.mtimeMs === t.mtimeMs && e.size === t.size;
    }
    function rr(e) {
        let t, r, n;
        try {
            t = vt.openSync(zt(e), "r");
        } catch (e) {
            const { code: t } = (0, $t.CA)(e);
            return "ENOENT" === t ? {
                kind: "absent"
            } : {
                kind: "unusable",
                reason: t ?? String(e),
                fingerprint: void 0
            };
        }
        try {
            const e = vt.fstatSync(t);
            if (n = er(e), e.size > jt) return {
                kind: "unusable",
                reason: `too-large (${e.size} bytes)`,
                fingerprint: n
            };
            r = vt.readFileSync(t, "utf8");
        } catch (e) {
            return {
                kind: "unusable",
                reason: (0, $t.CA)(e).code ?? String(e),
                fingerprint: void 0
            };
        } finally{
            vt.closeSync(t);
        }
        const s = Xt(r);
        return "ok" === s.kind ? {
            kind: "ok",
            meta: s.meta,
            fingerprint: n
        } : {
            kind: "unusable",
            reason: s.reason,
            fingerprint: n
        };
    }
    const nr = ".retire", sr = ".retired";
    function or(e) {
        const t = function({ source: e, target: t }) {
            try {
                return vt.linkSync(e, t), !0;
            } catch (e) {
                if ("EEXIST" === (0, $t.CA)(e).code) return !1;
            }
            try {
                return vt.copyFileSync(e, t, vt.constants.COPYFILE_EXCL), !0;
            } catch (e) {
                if ("EEXIST" === (0, $t.CA)(e).code) return !1;
                throw e;
            }
        }({
            source: e.heldPath,
            target: zt(e.sessionDir)
        });
        return t ? (vt.rmSync(e.heldPath, {
            force: !0
        }), "restored") : (ir(e), "superseded");
    }
    function ir(e) {
        const t = `${e.heldPath.slice(0, -7)}${sr}`;
        try {
            vt.renameSync(e.heldPath, t);
        } catch (e) {
            const { code: t } = (0, $t.CA)(e);
            if ("ENOENT" !== t && "ENOTDIR" !== t) throw e;
        }
    }
    function ar(e) {
        return e.startsWith(`${Qt}.`) && e.endsWith(sr);
    }
    function cr(e) {
        return {
            sessionId: e.sessionId,
            createdAt: e.createdAtMs,
            origin: e.origin,
            hostOwnedStorage: !0,
            ...void 0 === e.title ? {} : {
                title: e.title
            },
            ...void 0 === e.updatedAtMs ? {} : {
                updatedAt: e.updatedAtMs
            },
            ...void 0 === e.workspacePaths ? {} : {
                workspace: {
                    workspacePaths: e.workspacePaths
                }
            }
        };
    }
    function lr(e, t) {
        const r = e.updatedAt ?? t?.updatedAt ?? Gt(e.origin, e.createdAt);
        return {
            ...t,
            ...ur(e),
            ...void 0 === r ? {} : {
                updatedAt: r
            },
            ...void 0 === t ? {} : dr(e, t)
        };
    }
    function ur(e) {
        const { createdAt: t, origin: r, ...n } = e;
        return n;
    }
    function dr(e, t) {
        const r = e.title ?? t.title, n = e.modelId ?? t.modelId, s = function(e, t) {
            if (void 0 === e) return t;
            if (void 0 !== e.displayPath || void 0 === t?.displayPath || (r = e.workspacePaths, n = t.workspacePaths, r.length !== n.length || !r.every((e, t)=>e === n[t]))) return e;
            var r, n;
            return {
                ...e,
                displayPath: t.displayPath
            };
        }(e.workspace, t.workspace);
        return {
            ...void 0 === r ? {} : {
                title: r
            },
            ...void 0 === n ? {} : {
                modelId: n
            },
            ...void 0 === s ? {} : {
                workspace: s
            }
        };
    }
    function pr(e) {
        if (_r(e.host, e.renderer)) return "equal";
        const t = hr(e.host), r = hr(e.renderer);
        return void 0 === t || void 0 === r ? "diverged" : function(e, t) {
            if (r = e, n = t, gr(r.turns, n.turns) && wr(r.summary, n.summary) && wr(r.summaryArchive, n.summaryArchive) && gr(r.summaryArchives, n.summaryArchives)) return "equal";
            var r, n;
            if (fr(e, t)) return "renderer-ahead";
            if (fr(t, e)) return "host-ahead";
            return "diverged";
        }(t, r);
    }
    function mr(e) {
        const t = hr(e.host), r = hr(e.renderer);
        return {
            hostTurns: t?.turns.length,
            rendererTurns: r?.turns.length,
            commonPrefixTurns: void 0 === t || void 0 === r ? void 0 : yr(t.turns, r.turns)
        };
    }
    function hr(e) {
        try {
            return Ie.Y9z.fromBinary(e);
        } catch  {
            return;
        }
    }
    function fr(e, t) {
        return r = e.turns, n = t.turns, r.length < n.length && yr(r, n) === r.length && vr(e.summary, t.summary) && vr(e.summaryArchive, t.summaryArchive) && (0 === e.summaryArchives.length || gr(e.summaryArchives, t.summaryArchives));
        var r, n;
    }
    function gr(e, t) {
        return e.length === t.length && yr(e, t) === e.length;
    }
    function yr(e, t) {
        const r = Math.min(e.length, t.length);
        let n = 0;
        for(; n < r && _r(e[n], t[n]);)n++;
        return n;
    }
    function wr(e, t) {
        return void 0 === e || void 0 === t ? e === t : _r(e, t);
    }
    function vr(e, t) {
        return void 0 === e || void 0 !== t && _r(e, t);
    }
    function _r(e, t) {
        return 0 === Buffer.compare(e, t);
    }
    var Ar = require("./module-67640.js");
    const Sr = new R.cm(Ie.Y9z), br = (0, p.h)("agent-host:storage");
    class Er extends Error {
        constructor(e){
            super(`Session ${e.sessionId} advanced under this host: root ${e.expectedRootBlobIdHex.slice(0, 12)}… is now ${e.actualRootBlobIdHex?.slice(0, 12) ?? "gone"}…; reopen the session to continue`), this.name = "HostSessionAdvancedError", this.expectedRootBlobIdHex = e.expectedRootBlobIdHex, this.actualRootBlobIdHex = e.actualRootBlobIdHex;
        }
    }
    class Ir {
        constructor(e, t, r, n, s, o, i, a){
            this.db = e, this.blobStore = t, this.forkStore = r, this.onRootAdvanced = o, this.instruments = i, this.now = a, this.persisting = Promise.resolve(), this.manifest = n, this.latestState = s, this.committedState = s;
        }
        static hydrate(e) {
            const { manifest: t } = e;
            if (t.sessionId !== e.expectedSessionId) throw new Error(`Host session DB for session ${e.expectedSessionId} belongs to session ${t.sessionId}`);
            const r = e.db.blobs.get(It(t.latestRootBlobIdHex));
            if (void 0 === r) throw new Error(`Host session root blob ${t.latestRootBlobIdHex} is missing from the local DB for session ${t.sessionId}`);
            return new Ir(e.db, e.blobStore, e.forkStore, t, Sr.deserialize(r), e.onRootAdvanced, e.instruments ?? Ar.Pz.none, e.now ?? Date.now);
        }
        readListingProjection() {
            return Jt(this.db);
        }
        writeListingProjection(e) {
            this.db.transaction(()=>{
                Mt(this.db, e);
            });
        }
        getConversationState() {
            return this.latestState;
        }
        getBlobStore() {
            return this.blobStore;
        }
        getManifest() {
            return this.manifest;
        }
        readCommittedRoot() {
            return Ut(this.db)?.latestRootBlobIdHex;
        }
        async handleCheckpoint(e, t) {
            this.latestState = t;
            const r = this.persisting.then(()=>this.persistCheckpoint(e, t), ()=>this.persistCheckpoint(e, t));
            this.persisting = r;
            try {
                await r;
            } catch (e) {
                throw this.latestState === t && (this.latestState = this.committedState), e;
            }
        }
        async persistCheckpoint(e, t) {
            const r = this.manifest.latestRootBlobIdHex, { manifest: n } = await this.instruments.timeAsync("checkpoint", e, (e)=>this.writeCheckpoint(e, t, r), ({ bytes: e })=>({
                    bytes: e
                }));
            this.manifest = n, this.committedState = t;
            try {
                this.onRootAdvanced?.(n.latestRootBlobIdHex);
            } catch (t) {
                br.error(e, "Agent host session root-advanced listener failed", void 0, {
                    component: "storage",
                    errorName: t instanceof Error ? t.name : typeof t
                });
            }
        }
        async writeCheckpoint(e, t, r) {
            const n = Sr.serialize(t), s = await (0, R.Bk)(n);
            await this.blobStore.setBlob(e, s, n), await this.blobStore.flush(e);
            const o = {
                ...this.manifest,
                latestRootBlobIdHex: (0, R.nj)(s)
            }, i = Lt(this.db, {
                expectRoot: r,
                pieces: new Map,
                manifest: o,
                listingUpdatedAtMs: this.now()
            });
            if (!i.committed) throw this.instruments.runtimeFault("root_commit_conflict"), new Er({
                sessionId: this.manifest.sessionId,
                expectedRootBlobIdHex: r,
                actualRootBlobIdHex: i.onDisk?.latestRootBlobIdHex
            });
            return {
                manifest: o,
                bytes: n.byteLength
            };
        }
        async createFork(e, t) {
            return this.forkStore({
                sessionId: t.sessionId,
                history: Sr.serialize(t.initialHistory ?? this.latestState),
                readParentBlob: (t)=>this.blobStore.getBlob(e, t)
            });
        }
        dispose() {
            this.db.close();
        }
    }
    class Cr {
        constructor(e, t, r){
            this.database = e, this.wal = t, this.metadata = r;
        }
        static capture(e, t) {
            const r = e.sessionDbPath(t);
            return new Cr(Rr(r), Rr(`${r}-wal`), Rr(zt(e.sessionDir(t))));
        }
        matches(e, t) {
            const r = Cr.capture(e, t);
            return Tr(this.database, r.database) && Tr(this.wal, r.wal) && Tr(this.metadata, r.metadata);
        }
        sameStoreEnvelope(e) {
            return Tr(this.database, e.database) && Tr(this.metadata, e.metadata);
        }
        equals(e) {
            return Tr(this.database, e.database) && Tr(this.wal, e.wal) && Tr(this.metadata, e.metadata);
        }
    }
    function kr(e, t) {
        const r = e.sessionDbPath(t), n = xr(r), s = e.readSessionStore(t), o = Cr.capture(e, t);
        try {
            return function(e, t, r, n, s, o, i) {
                const a = rr(e.sessionDir(t)), c = "ok" === a.kind ? a.meta : void 0;
                let l, u;
                try {
                    l = Ut(r);
                } catch (e) {
                    u = e instanceof Error ? e.message : String(e);
                }
                const d = Jt(r), p = [];
                let m;
                if (void 0 === l) p.push(void 0 === u ? "host DB has no manifest (never committed)" : `host manifest unreadable: ${u}`);
                else if (l.sessionId !== t) p.push(`host manifest sessionId ${l.sessionId} != directory ${t}`);
                else {
                    const e = r.blobs.get(It(l.latestRootBlobIdHex));
                    if (void 0 === e) p.push(`host root ${l.latestRootBlobIdHex.slice(0, 12)}… is missing from the host DB`);
                    else try {
                        m = Ie.Y9z.fromBinary(e);
                    } catch (e) {
                        p.push(`host root is not a decodable ConversationStateStructure: ${e instanceof Error ? e.message : String(e)}`);
                    }
                }
                return {
                    manifest: l,
                    manifestError: u,
                    listingProjection: d,
                    meta: c,
                    metaState: a.kind,
                    rootState: m,
                    rootReasons: p,
                    currentnessToken: i,
                    getBlob: (e)=>r.blobs.get(It(e)),
                    listBlobIds: ()=>r.blobs.keys(Et).map((e)=>e.slice(Et.length)),
                    isCurrent: ()=>{
                        return a = s, c = xr(n), void 0 !== a && void 0 !== c && a.dev === c.dev && a.ino === c.ino && r.dataVersion() === o && i.matches(e, t);
                        var a, c;
                    },
                    close: ()=>r.close()
                };
            }(e, t, s, r, n, s.dataVersion(), o);
        } catch (e) {
            throw s.close(), e;
        }
    }
    function xr(e) {
        try {
            const t = vt.statSync(e, {
                throwIfNoEntry: !1
            });
            return void 0 === t ? void 0 : {
                dev: t.dev,
                ino: t.ino
            };
        } catch (e) {
            return void (e instanceof Error && e.name);
        }
    }
    function Tr(e, t) {
        return e === t || void 0 !== e && void 0 !== t && e.dev === t.dev && e.ino === t.ino && e.size === t.size && e.mtimeNs === t.mtimeNs && e.ctimeNs === t.ctimeNs;
    }
    function Rr(e) {
        try {
            const t = vt.statSync(e, {
                bigint: !0,
                throwIfNoEntry: !1
            });
            return void 0 === t ? void 0 : {
                dev: t.dev,
                ino: t.ino,
                size: t.size,
                mtimeNs: t.mtimeNs,
                ctimeNs: t.ctimeNs
            };
        } catch (e) {
            return void (e instanceof Error && e.name);
        }
    }
    var Br = require("./module-89396.js"), Pr = require("./module-89582.js"), Jr = require("./module-76222.js");
    const Mr = {
        "agent.v1.AgentConversationTurnStructure": {
            messageType: "agent.v1.AgentConversationTurnStructure",
            fields: [
                {
                    protoFieldName: "user_message",
                    localFieldName: "userMessage",
                    fieldNumber: 1,
                    blobReferenceType: "agent.v1.UserMessage"
                },
                {
                    protoFieldName: "steps",
                    localFieldName: "steps",
                    fieldNumber: 2,
                    blobReferenceType: "agent.v1.ConversationStep"
                }
            ]
        },
        "agent.v1.ConversationStateStructure": {
            messageType: "agent.v1.ConversationStateStructure",
            fields: [
                {
                    protoFieldName: "root_prompt_messages_json",
                    localFieldName: "rootPromptMessagesJson",
                    fieldNumber: 1,
                    blobReferenceType: "json"
                },
                {
                    protoFieldName: "todos",
                    localFieldName: "todos",
                    fieldNumber: 3,
                    blobReferenceType: "agent.v1.TodoItem"
                },
                {
                    protoFieldName: "summary",
                    localFieldName: "summary",
                    fieldNumber: 6,
                    blobReferenceType: "agent.v1.ConversationSummary"
                },
                {
                    protoFieldName: "plan",
                    localFieldName: "plan",
                    fieldNumber: 7,
                    blobReferenceType: "agent.v1.ConversationPlan"
                },
                {
                    protoFieldName: "turns",
                    localFieldName: "turns",
                    fieldNumber: 8,
                    blobReferenceType: "agent.v1.ConversationTurnStructure"
                },
                {
                    protoFieldName: "summary_archive",
                    localFieldName: "summaryArchive",
                    fieldNumber: 11,
                    blobReferenceType: "agent.v1.ConversationSummaryArchive"
                },
                {
                    protoFieldName: "file_states",
                    localFieldName: "fileStates",
                    fieldNumber: 12,
                    blobReferenceType: "agent.v1.FileState"
                },
                {
                    protoFieldName: "summary_archives",
                    localFieldName: "summaryArchives",
                    fieldNumber: 13,
                    blobReferenceType: "agent.v1.ConversationSummaryArchive"
                },
                {
                    protoFieldName: "subagent_state_refs",
                    localFieldName: "subagentStateRefs",
                    fieldNumber: 31,
                    blobReferenceType: "agent.v1.SubagentPersistedState"
                }
            ]
        },
        "agent.v1.ConversationSummaryArchive": {
            messageType: "agent.v1.ConversationSummaryArchive",
            fields: [
                {
                    protoFieldName: "summarized_messages",
                    localFieldName: "summarizedMessages",
                    fieldNumber: 1,
                    blobReferenceType: "json"
                },
                {
                    protoFieldName: "summary_message",
                    localFieldName: "summaryMessage",
                    fieldNumber: 4,
                    blobReferenceType: "json"
                }
            ]
        },
        "agent.v1.ExtraContextEntry": {
            messageType: "agent.v1.ExtraContextEntry",
            fields: [
                {
                    protoFieldName: "blob_id",
                    localFieldName: "blobId",
                    fieldNumber: 2,
                    blobReferenceType: "string"
                }
            ]
        },
        "agent.v1.FileStateStructure": {
            messageType: "agent.v1.FileStateStructure",
            fields: [
                {
                    protoFieldName: "content",
                    localFieldName: "content",
                    fieldNumber: 1,
                    blobReferenceType: "string"
                },
                {
                    protoFieldName: "initial_content",
                    localFieldName: "initialContent",
                    fieldNumber: 2,
                    blobReferenceType: "string"
                }
            ]
        },
        "agent.v1.GetBlobArgs": {
            messageType: "agent.v1.GetBlobArgs",
            fields: [
                {
                    protoFieldName: "blob_id",
                    localFieldName: "blobId",
                    fieldNumber: 1,
                    blobReferenceType: "bytes"
                }
            ]
        },
        "agent.v1.InvocationContext": {
            messageType: "agent.v1.InvocationContext",
            fields: [
                {
                    protoFieldName: "blob_id",
                    localFieldName: "blobId",
                    fieldNumber: 10,
                    blobReferenceType: "agent.v1.InvocationContext"
                }
            ]
        },
        "agent.v1.PreFetchedBlob": {
            messageType: "agent.v1.PreFetchedBlob",
            fields: [
                {
                    protoFieldName: "id",
                    localFieldName: "id",
                    fieldNumber: 1,
                    blobReferenceType: "bytes"
                }
            ]
        },
        "agent.v1.ReadSuccess": {
            messageType: "agent.v1.ReadSuccess",
            fields: [
                {
                    protoFieldName: "output_blob_id",
                    localFieldName: "outputBlobId",
                    fieldNumber: 7,
                    blobReferenceType: "bytes"
                }
            ]
        },
        "agent.v1.ReadToolSuccess": {
            messageType: "agent.v1.ReadToolSuccess",
            fields: [
                {
                    protoFieldName: "data_blob_id",
                    localFieldName: "dataBlobId",
                    fieldNumber: 9,
                    blobReferenceType: "bytes"
                },
                {
                    protoFieldName: "content_blob_id",
                    localFieldName: "contentBlobId",
                    fieldNumber: 10,
                    blobReferenceType: "string"
                }
            ]
        },
        "agent.v1.RequestContextPartReferences": {
            messageType: "agent.v1.RequestContextPartReferences",
            fields: [
                {
                    protoFieldName: "rules_blob_id",
                    localFieldName: "rulesBlobId",
                    fieldNumber: 1,
                    blobReferenceType: "agent.v1.RequestContextRulesPart"
                },
                {
                    protoFieldName: "skills_blob_id",
                    localFieldName: "skillsBlobId",
                    fieldNumber: 3,
                    blobReferenceType: "agent.v1.RequestContextSkillsPart"
                },
                {
                    protoFieldName: "subagents_blob_id",
                    localFieldName: "subagentsBlobId",
                    fieldNumber: 5,
                    blobReferenceType: "agent.v1.RequestContextSubagentsPart"
                },
                {
                    protoFieldName: "mcps_blob_id",
                    localFieldName: "mcpsBlobId",
                    fieldNumber: 7,
                    blobReferenceType: "agent.v1.RequestContextMcpsPart"
                }
            ]
        },
        "agent.v1.SelectedDocument": {
            messageType: "agent.v1.SelectedDocument",
            fields: [
                {
                    protoFieldName: "blob_id",
                    localFieldName: "blobId",
                    fieldNumber: 1,
                    blobReferenceType: "bytes"
                }
            ]
        },
        "agent.v1.SelectedDocument.BlobIdWithData": {
            messageType: "agent.v1.SelectedDocument.BlobIdWithData",
            fields: [
                {
                    protoFieldName: "blob_id",
                    localFieldName: "blobId",
                    fieldNumber: 1,
                    blobReferenceType: "bytes"
                }
            ]
        },
        "agent.v1.SelectedExternalLink": {
            messageType: "agent.v1.SelectedExternalLink",
            fields: [
                {
                    protoFieldName: "blob_id",
                    localFieldName: "blobId",
                    fieldNumber: 6,
                    blobReferenceType: "string"
                }
            ]
        },
        "agent.v1.SelectedGitPRDiffSelection": {
            messageType: "agent.v1.SelectedGitPRDiffSelection",
            fields: [
                {
                    protoFieldName: "blob_id",
                    localFieldName: "blobId",
                    fieldNumber: 6,
                    blobReferenceType: "agent.v1.SelectedGitPRDiffSelection"
                }
            ]
        },
        "agent.v1.SelectedImage": {
            messageType: "agent.v1.SelectedImage",
            fields: [
                {
                    protoFieldName: "blob_id",
                    localFieldName: "blobId",
                    fieldNumber: 1,
                    blobReferenceType: "bytes"
                }
            ]
        },
        "agent.v1.SelectedImage.BlobIdWithData": {
            messageType: "agent.v1.SelectedImage.BlobIdWithData",
            fields: [
                {
                    protoFieldName: "blob_id",
                    localFieldName: "blobId",
                    fieldNumber: 1,
                    blobReferenceType: "bytes"
                }
            ]
        },
        "agent.v1.SelectedPullRequest": {
            messageType: "agent.v1.SelectedPullRequest",
            fields: [
                {
                    protoFieldName: "blob_id",
                    localFieldName: "blobId",
                    fieldNumber: 7,
                    blobReferenceType: "agent.v1.SelectedPullRequest"
                }
            ]
        },
        "agent.v1.SelectedVideo": {
            messageType: "agent.v1.SelectedVideo",
            fields: [
                {
                    protoFieldName: "blob_id",
                    localFieldName: "blobId",
                    fieldNumber: 1,
                    blobReferenceType: "bytes"
                }
            ]
        },
        "agent.v1.SelectedVideo.BlobIdWithData": {
            messageType: "agent.v1.SelectedVideo.BlobIdWithData",
            fields: [
                {
                    protoFieldName: "blob_id",
                    localFieldName: "blobId",
                    fieldNumber: 1,
                    blobReferenceType: "bytes"
                }
            ]
        },
        "agent.v1.SetBlobArgs": {
            messageType: "agent.v1.SetBlobArgs",
            fields: [
                {
                    protoFieldName: "blob_id",
                    localFieldName: "blobId",
                    fieldNumber: 1,
                    blobReferenceType: "bytes"
                }
            ]
        },
        "agent.v1.ShellConversationTurnStructure": {
            messageType: "agent.v1.ShellConversationTurnStructure",
            fields: [
                {
                    protoFieldName: "shell_command",
                    localFieldName: "shellCommand",
                    fieldNumber: 1,
                    blobReferenceType: "agent.v1.ShellCommand"
                },
                {
                    protoFieldName: "shell_output",
                    localFieldName: "shellOutput",
                    fieldNumber: 2,
                    blobReferenceType: "agent.v1.ShellOutput"
                }
            ]
        },
        "agent.v1.TruncatedToolCall": {
            messageType: "agent.v1.TruncatedToolCall",
            fields: [
                {
                    protoFieldName: "original_step_blob_id",
                    localFieldName: "originalStepBlobId",
                    fieldNumber: 1,
                    blobReferenceType: "agent.v1.ConversationStep"
                }
            ]
        },
        "agent.v1.UserMessage": {
            messageType: "agent.v1.UserMessage",
            fields: [
                {
                    protoFieldName: "conversation_state_blob_id",
                    localFieldName: "conversationStateBlobId",
                    fieldNumber: 10,
                    blobReferenceType: "agent.v1.ConversationStateStructure"
                },
                {
                    protoFieldName: "text_blob_id",
                    localFieldName: "textBlobId",
                    fieldNumber: 18,
                    blobReferenceType: "string"
                },
                {
                    protoFieldName: "rich_text_blob_id",
                    localFieldName: "richTextBlobId",
                    fieldNumber: 19,
                    blobReferenceType: "string"
                }
            ]
        }
    };
    function qr(e) {
        if (Object.prototype.hasOwnProperty.call(Mr, e)) return Mr[e];
    }
    const Dr = {
        "agent.v1.ConversationPlan": Ie.ThX,
        "agent.v1.ConversationStateStructure": Ie.Y9z,
        "agent.v1.ConversationStep": Ie.kJk,
        "agent.v1.ConversationSummary": Ie.KRq,
        "agent.v1.ConversationSummaryArchive": Ie.Anz,
        "agent.v1.ConversationTurnStructure": Ie.cmU,
        "agent.v1.FileState": Ie.Mzv,
        "agent.v1.InvocationContext": Pr.yz,
        "agent.v1.RequestContextMcpsPart": Br.vB,
        "agent.v1.RequestContextRulesPart": Br.T3,
        "agent.v1.RequestContextSkillsPart": Br.CB,
        "agent.v1.RequestContextSubagentsPart": Br.yb,
        "agent.v1.SelectedGitPRDiffSelection": Pr.vf,
        "agent.v1.SelectedPullRequest": Pr.UL,
        "agent.v1.ShellCommand": Ie.oIR,
        "agent.v1.ShellOutput": Ie.qKL,
        "agent.v1.SubagentPersistedState": Ie.aK_,
        "agent.v1.TodoItem": Jr.kW,
        "agent.v1.UserMessage": Ie.RGk
    };
    async function Or(e, t, r = {}) {
        const n = new Map, s = [], o = new Set, i = new Set;
        function a(e, t, r) {
            o.has(e) || (o.add(e), s.push({
                blobIdHex: e,
                kind: t,
                ...void 0 === r ? {} : {
                    detail: r
                }
            }));
        }
        async function c(e, s) {
            if (0 === e.length) return;
            const c = await async function(e) {
                const s = (0, R.nj)(e), i = n.get(s);
                if (void 0 !== i) return i;
                if (o.has(s)) return;
                let c;
                try {
                    c = await t(e);
                } catch (e) {
                    return void a(s, "read-error", e instanceof Error ? e.message : String(e));
                }
                if (void 0 === c) return void a(s, "missing");
                const l = r.yieldIfNeeded?.();
                void 0 !== l && await l;
                const u = (0, R.nj)(await (0, R.Bk)(c));
                if (u === s) return n.set(s, c), c;
                a(s, "hash-mismatch", `bytes hash to ${u}`);
            }(e);
            if (void 0 === c || (u = s, !Object.prototype.hasOwnProperty.call(Dr, u))) return;
            var u;
            const d = Dr[s];
            if (!jr(d)) return;
            const p = (0, R.nj)(e);
            if (i.has(p)) return;
            i.add(p);
            const m = r.yieldIfNeeded?.();
            let h;
            void 0 !== m && await m;
            try {
                h = d.fromBinary(c);
            } catch (e) {
                return void a(p, "undecodable", `${s}: ${e instanceof Error ? e.message : String(e)}`);
            }
            await l(h);
        }
        async function l(e) {
            const t = e.getType(), r = new Map(qr(t.typeName)?.fields.map((e)=>[
                    e.localFieldName,
                    e.blobReferenceType
                ])), n = new Map(Object.entries(e));
            for (const e of t.fields.list()){
                const t = Nr(n, e);
                if (void 0 === t) continue;
                const s = r.get(e.localName);
                if (void 0 !== s) for (const e of Fr(t, Lr))await c(e, s);
                else if (void 0 !== Ur(e)) for (const e of Fr(t, $r))await l(e);
            }
        }
        return await l(e), {
            blobs: n,
            failures: s
        };
    }
    function Nr(e, t) {
        if (void 0 === t.oneof) return e.get(t.localName);
        const r = e.get(t.oneof.localName);
        return "object" == typeof (n = r) && null !== n && "case" in n && r.case === t.localName ? r.value : void 0;
        var n;
    }
    function Fr(e, t) {
        return t(e) ? [
            e
        ] : Array.isArray(e) ? e.filter(t) : "object" == typeof e && null !== e ? Object.values(e).filter(t) : [];
    }
    function Ur(e) {
        return "message" === e.kind ? e.T : "map" === e.kind && "message" === e.V.kind ? e.V.T : void 0;
    }
    function Lr(e) {
        return e instanceof Uint8Array;
    }
    function $r(e) {
        return e instanceof y.Message;
    }
    const Qr = new Map;
    function jr(e, t = new Set) {
        const r = Qr.get(e.typeName);
        if (void 0 !== r) return r;
        if (t.has(e.typeName)) return !1;
        t.add(e.typeName);
        const n = void 0 !== qr(e.typeName) || e.fields.list().some((e)=>{
            const r = Ur(e);
            return void 0 !== r && jr(r, t);
        });
        return t.delete(e.typeName), (n || 0 === t.size) && Qr.set(e.typeName, n), n;
    }
    var Gr = require("./module-77314.js");
    async function Hr(e) {
        const t = performance.now();
        if (!(0, Gr._)(e.sessionId)) return {
            kind: "unavailable",
            cause: "unsafe-session-id"
        };
        if (e.storage.hasSessionStore(e.sessionId)) {
            const r = await async function(e, t) {
                let r, n;
                try {
                    r = e.storage.openSessionStore(e.sessionId);
                } catch (e) {
                    if (e instanceof $t.df) return {
                        kind: "failed",
                        cause: "not-a-file",
                        error: e
                    };
                    throw e;
                }
                try {
                    n = Ut(r);
                } catch (n) {
                    throw r.close(), nn(e, n, t), n;
                }
                if (void 0 === n) return void r.close();
                return en(r, n, e, t);
            }(e, t);
            if (void 0 !== r) return r;
        }
        let r = e.initialHistory ?? (!0 === e.allowCreate ? (new Ie.Y9z).toBinary() : void 0);
        if (void 0 === r) return {
            kind: "unavailable",
            cause: "no-history"
        };
        for(let n = 1;; n++){
            const s = await Wr(r, e);
            if ("walked" !== s.kind) return s;
            if (void 0 !== e.readCurrentHistory) {
                const t = await Vr(r, e.readCurrentHistory);
                if ("failed" === t.kind) return t;
                if ("moved" === t.kind) {
                    if (void 0 === t.fresh || n >= zr || !1 === e.admitSeedHistory?.(t.fresh)) return {
                        kind: "unavailable",
                        cause: "history-moved"
                    };
                    r = t.fresh;
                    continue;
                }
            }
            return Kr(r, s.closure, e, t);
        }
    }
    const zr = 2;
    async function Wr(e, t) {
        let r;
        try {
            r = Ie.Y9z.fromBinary(e);
        } catch (e) {
            return {
                kind: "failed",
                cause: "undecodable-history",
                error: e
            };
        }
        const n = await Or(r, t.legacyGetBlob ?? Yr);
        return n.failures.length > 0 ? void 0 === t.legacyGetBlob ? {
            kind: "unavailable",
            cause: "no-legacy-reader"
        } : {
            kind: "failed",
            cause: "closure",
            failures: n.failures
        } : {
            kind: "walked",
            closure: n
        };
    }
    async function Vr(e, t) {
        let r;
        try {
            r = await t();
        } catch (e) {
            return {
                kind: "failed",
                cause: "history-read",
                error: e
            };
        }
        return void 0 !== r && _r(r, e) ? {
            kind: "current"
        } : {
            kind: "moved",
            fresh: r
        };
    }
    async function Kr(e, t, r, n) {
        const s = {
            manifestVersion: 1,
            sessionId: r.sessionId,
            latestRootBlobIdHex: (0, R.nj)(await (0, R.Bk)(e)),
            origin: 0 === t.blobs.size ? "host-native" : "migrated-from-renderer-cas",
            createdAtMs: Date.now(),
            migratedBlobCount: t.blobs.size
        }, o = function(e, t, r, n) {
            let s;
            try {
                const n = e.openSessionStore(t.sessionId);
                s = n;
                const o = Lt(n, {
                    expectRoot: void 0,
                    pieces: r,
                    manifest: t
                });
                if (o.committed) return {
                    kind: "seeded",
                    store: n
                };
                if (void 0 === o.onDisk) throw new Error(`Session ${t.sessionId} has no manifest yet its seed was refused`);
                return {
                    kind: "peer-committed",
                    store: n,
                    manifest: o.onDisk
                };
            } catch (r) {
                if (void 0 === s || "keep" === n) return s?.close(), {
                    kind: "failed",
                    cause: "seed",
                    error: r
                };
                try {
                    !function(e, t, r) {
                        let n;
                        try {
                            n = r.created && r.transaction(()=>void 0 === Ut(r));
                        } catch  {
                            n = !1;
                        }
                        r.close(), n && e.deleteSessionDir(t);
                    }(e, t.sessionId, s);
                } catch (e) {
                    return {
                        kind: "failed",
                        cause: "seed",
                        error: new AggregateError([
                            r,
                            e
                        ], `Seeding host session ${t.sessionId} failed and the directory the seed created could not be removed`)
                    };
                }
                return {
                    kind: "failed",
                    cause: "seed",
                    error: r
                };
            }
        }(r.storage, s, Zr(t.blobs, s, e), r.onSeedFailure ?? "keep");
        switch(o.kind){
            case "failed":
                return o;
            case "peer-committed":
                return en(o.store, o.manifest, void 0 === r.initialHistory || e === r.initialHistory ? r : {
                    ...r,
                    initialHistory: e
                }, n);
            case "seeded":
                return {
                    kind: "seeded",
                    store: rn(o.store, s, r, n),
                    migratedBlobCount: t.blobs.size
                };
        }
    }
    const Yr = async (e)=>{
        throw new Error(`no legacy blob reader to read ${(0, R.nj)(e).slice(0, 12)}… from`);
    };
    function Zr(e, t, r) {
        return new Map([
            ...e,
            [
                t.latestRootBlobIdHex,
                r
            ]
        ]);
    }
    const Xr = 2;
    async function en(e, t, r, n) {
        let s;
        try {
            s = await async function(e, t, r) {
                const n = r.initialHistory ?? r.surfaceHistory, s = (e, t)=>({
                        kind: "hydrate",
                        manifest: e,
                        reconciliation: t
                    });
                if (void 0 === n) return s(t, "not-compared");
                let o = t;
                for(let t = 1; t <= Xr + 1; t++){
                    const i = e.blobs.get(It(o.latestRootBlobIdHex));
                    if (void 0 === i) return s(o, "not-compared");
                    const a = {
                        host: i,
                        renderer: n
                    }, c = pr(a);
                    if ("diverged" === c) return {
                        kind: "diverged",
                        cause: "roots",
                        divergence: {
                            hostRootBlobIdHex: o.latestRootBlobIdHex,
                            rendererRootBlobIdHex: (0, R.nj)(await (0, R.Bk)(n)),
                            ...mr(a)
                        }
                    };
                    if ("equal" !== c && "require-equal" === r.onCommittedStore) return {
                        kind: "diverged",
                        cause: "not-equal"
                    };
                    if ("renderer-ahead" !== c) return s(o, c);
                    if (t > Xr) break;
                    const l = await tn(e, o, n, r);
                    if ("root-moved" !== l.kind) return "caught-up" === l.kind ? s(l.manifest, {
                        kind: "caught-up",
                        copiedBlobCount: l.copiedBlobCount
                    }) : l;
                    o = l.manifest;
                }
                return {
                    kind: "diverged",
                    cause: "catch-up",
                    error: new Error(`Session ${r.sessionId}: the committed root moved under each of ${Xr} catch-up passes and is still behind the handed history`)
                };
            }(e, t, r);
        } catch (t) {
            throw e.close(), nn(r, t, n), t;
        }
        return "diverged" === s.kind ? (e.close(), s) : {
            kind: "opened",
            store: rn(e, s.manifest, r, n),
            reconciliation: s.reconciliation
        };
    }
    async function tn(e, t, r, n) {
        let s;
        try {
            s = await async function(e, t, r, n) {
                const s = new Set, o = await Or(Ie.Y9z.fromBinary(r), async (t)=>{
                    const r = (0, R.nj)(t), o = e.blobs.get(It(r));
                    return void 0 !== o ? o : (s.add(r), (n.legacyGetBlob ?? Yr)(t));
                });
                if (o.failures.length > 0) return {
                    kind: "diverged",
                    cause: "closure",
                    failures: o.failures
                };
                const i = {
                    ...t,
                    latestRootBlobIdHex: (0, R.nj)(await (0, R.Bk)(r))
                }, a = new Map([
                    ...o.blobs
                ].filter(([e])=>s.has(e))), c = Lt(e, {
                    expectRoot: t.latestRootBlobIdHex,
                    pieces: Zr(a, i, r),
                    manifest: i
                });
                if (!c.committed) return {
                    kind: "refused",
                    onDisk: c.onDisk
                };
                return {
                    kind: "caught-up",
                    manifest: i,
                    copiedBlobCount: a.size
                };
            }(e, t, r, n);
        } catch (e) {
            return {
                kind: "diverged",
                cause: "catch-up",
                error: e
            };
        }
        if ("refused" !== s.kind) return s;
        if (void 0 === s.onDisk) throw new Error(`Session ${t.sessionId} lost its manifest while catching up`);
        return {
            kind: "root-moved",
            manifest: s.onDisk
        };
    }
    function rn(e, t, r, n) {
        try {
            return Ir.hydrate({
                db: e,
                blobStore: void 0 === r.mirror ? new Ct(e) : new kt(e, r.mirror, ()=>r.instruments?.runtimeFault("mirror_write_failed")),
                forkStore: (e)=>sn(r, e),
                manifest: t,
                expectedSessionId: r.sessionId,
                ...void 0 === r.onRootAdvanced ? {} : {
                    onRootAdvanced: r.onRootAdvanced
                },
                ...void 0 === r.instruments ? {} : {
                    instruments: r.instruments
                },
                ...void 0 === r.now ? {} : {
                    now: r.now
                }
            });
        } catch (t) {
            throw e.close(), nn(r, t, n), t;
        }
    }
    function nn(e, t, r) {
        const { code: n, sqliteErrcode: s } = (0, $t.CA)(t);
        e.instruments?.fault({
            kind: "hydrate_failed",
            store: "session",
            sessionId: e.sessionId,
            relPath: e.storage.sessionDbRelPath(e.sessionId),
            durationMs: Math.max(0, performance.now() - r),
            ...void 0 === n ? {} : {
                code: n
            },
            ...void 0 === s ? {} : {
                sqliteErrcode: s
            },
            error: (0, Ar.zj)(t, e.storage.storageDir) ?? new Error("Host session hydrate failed")
        });
    }
    async function sn(e, t) {
        const r = await Hr({
            storage: e.storage,
            sessionId: t.sessionId,
            initialHistory: t.history,
            onCommittedStore: "require-equal",
            onSeedFailure: "reclaim-created",
            legacyGetBlob: t.readParentBlob,
            ...void 0 === e.mirror ? {} : {
                mirror: e.mirror
            },
            ...void 0 === e.instruments ? {} : {
                instruments: e.instruments
            }
        });
        if ("seeded" === r.kind) return r.store;
        if ("opened" === r.kind) {
            if ("equal" === r.reconciliation) return r.store;
            throw r.store.dispose(), new Error(`Host session fork ${t.sessionId} names a committed store that does not hold its history`);
        }
        throw new Error(`Host session fork ${t.sessionId} could not be seeded from its parent: ${r.kind} (${r.cause})`);
    }
    const on = (e, t)=>vt.watch(e, {
            recursive: !0
        }, t);
    function an(e) {
        try {
            return vt.statSync(e), !1;
        } catch (e) {
            return "ENOENT" === (0, $t.CA)(e).code;
        }
    }
    const cn = {
        ino: 0,
        mtimeMs: 0,
        size: 0
    }, ln = {
        ino: -1,
        mtimeMs: -1,
        size: -1
    };
    class un {
        constructor(e){
            this.bySessionId = new Map, this.sessionIdByDirName = new Map, this.fingerprintByDirName = new Map, this.pendingDirs = new Map, this.scanned = !1, this.disposed = !1, this.storage = e.storage, this.log = e.log, this.clock = e.clock, this.watch = e.watch ?? on, this.onSessionChanged = e.onSessionChanged, this.revalidateIntervalMs = e.revalidateIntervalMs ?? 2e3;
        }
        list(e, t) {
            this.ensureFresh();
            const r = [], n = (e)=>e.updatedAtMs ?? Gt(e.origin, e.createdAtMs);
            for (const e of this.bySessionId.values()){
                if (e.isArchived) continue;
                const s = void 0 === t ? {
                    recency: n(e)
                } : t(e);
                void 0 !== s && r.push({
                    meta: e,
                    recency: s.recency
                });
            }
            return r.sort((e, t)=>{
                const r = (t.recency ?? 0) - (e.recency ?? 0);
                return 0 !== r ? r : e.meta.sessionId.localeCompare(t.meta.sessionId);
            }), r.slice(0, Math.max(0, e)).map((e)=>e.meta);
        }
        hasCatalogEntries(e) {
            if (!vt.existsSync(this.storage.sessionsDir)) return this.scanned && (this.scanAll(!1), this.scanned = !1), !1;
            e.refresh && this.ensureFresh();
            for (const e of this.bySessionId.values())if (!e.isArchived) return !0;
            return !1;
        }
        get(e) {
            return this.ensureFresh(), this.bySessionId.get(e);
        }
        upsert(e, t, r) {
            this.startWatching(), this.sessionIdByDirName.set(e, t.sessionId), this.bySessionId.set(t.sessionId, t), this.fingerprintByDirName.set(e, r ?? cn);
        }
        remove(e) {
            const t = this.bySessionId.delete(e);
            for (const [t, r] of this.sessionIdByDirName)r === e && (this.sessionIdByDirName.delete(t), this.fingerprintByDirName.delete(t));
            return t;
        }
        dispose() {
            this.disposed = !0, this.stopWatching(), this.rearmTimer?.dispose(), this.rearmTimer = void 0;
            for (const e of this.pendingDirs.values())e.dispose();
            this.pendingDirs.clear();
        }
        ensureFresh() {
            if (!this.disposed) {
                if (!this.scanned) return this.startWatching(), this.scanAll(!1), void (this.scanned = !0);
                void 0 === this.watcher && this.startWatching(), (void 0 === this.lastDiskCheckAtMs || this.clock.now() - this.lastDiskCheckAtMs >= this.revalidateIntervalMs) && this.scanAll(!1);
            }
        }
        scanAll(e) {
            let t;
            this.lastDiskCheckAtMs = this.clock.now();
            try {
                t = vt.readdirSync(this.storage.sessionsDir, {
                    withFileTypes: !0
                });
            } catch (e) {
                const { code: t } = (0, $t.CA)(e);
                if ("ENOENT" !== t) return void this.log.warn(`[hostStorage] could not read the session directory (${t ?? String(e)})`);
                this.stopWatching();
                for (const e of [
                    ...this.sessionIdByDirName.keys()
                ])this.forgetDir(e);
                return;
            }
            const r = new Set;
            for (const n of t)n.isDirectory() && (r.add(n.name), this.refreshDir(n.name, e));
            for (const e of [
                ...this.sessionIdByDirName.keys()
            ])r.has(e) || this.forgetDir(e);
        }
        statFingerprint(e) {
            const t = zt(At.join(this.storage.sessionsDir, e));
            try {
                const e = vt.statSync(t, {
                    throwIfNoEntry: !1
                });
                return void 0 === e ? "absent" : er(e);
            } catch (t) {
                return void this.log.warn(`[hostStorage] could not stat the listing sidecar in ${e} (${(0, $t.CA)(t).code ?? String(t)}); re-reading it`);
            }
        }
        refreshDir(e, t) {
            if (!(0, Gr._)(e) || an(this.storage.sessionDbPath(e))) return void this.forgetDir(e);
            const r = this.statFingerprint(e), n = this.fingerprintByDirName.get(e);
            if ("absent" === r) {
                if (n === ln) return;
            } else if (void 0 !== r && void 0 !== n && tr(r, n)) return;
            this.applyDiskState(e, this.readDiskState(e), t);
        }
        readDiskState(e) {
            const t = rr(this.storage.sessionDir(e));
            return "ok" === t.kind && t.meta.sessionId !== e ? {
                kind: "unusable",
                reason: `it claims session ${t.meta.sessionId}`,
                fingerprint: t.fingerprint
            } : "ok" === t.kind ? {
                kind: "present",
                meta: t.meta,
                fingerprint: t.fingerprint
            } : an(this.storage.sessionDbPath(e)) ? {
                kind: "gone"
            } : t;
        }
        applyDiskState(e, t, r) {
            switch(t.kind){
                case "gone":
                    return void this.forgetDir(e);
                case "present":
                    return void this.applyRow(e, t.meta, t.fingerprint, r);
                case "absent":
                    {
                        const t = this.rebuildFromStore(e);
                        return "rebuilt" !== t.kind ? void this.dropRow(e, t.kind) : void this.applyRow(e, t.meta, ln, r);
                    }
                case "unusable":
                    {
                        this.log.warn(`[hostStorage] the listing sidecar in ${e} is unusable (${t.reason}); leaving it untouched and listing from the store`);
                        const n = this.rebuildFromStore(e);
                        return "rebuilt" !== n.kind ? void this.dropRow(e, n.kind) : void this.applyRow(e, n.meta, t.fingerprint, r);
                    }
            }
        }
        dropRow(e, t) {
            "gone" === t ? this.forgetDir(e) : this.unlist(e);
        }
        applyRow(e, t, r, n) {
            const s = !this.bySessionId.has(t.sessionId);
            this.upsert(e, t, r), s && n && this.onSessionChanged?.(t.sessionId, !0);
        }
        unlist(e) {
            const t = this.sessionIdByDirName.get(e);
            this.sessionIdByDirName.delete(e), this.fingerprintByDirName.delete(e), void 0 !== t && this.bySessionId.delete(t);
        }
        rebuildFromStore(e) {
            try {
                const t = function(e, t) {
                    const r = e.readSessionStore(t);
                    try {
                        const e = Ut(r);
                        if (void 0 === e) return;
                        return Ht(e, Jt(r));
                    } finally{
                        r.close();
                    }
                }(this.storage, e);
                return void 0 === t ? {
                    kind: "manifest-less"
                } : (this.log.info(`[hostStorage] rebuilt the listing row for session ${e} from its store; it has no usable sidecar`), {
                    kind: "rebuilt",
                    meta: t
                });
            } catch (t) {
                return an(this.storage.sessionDbPath(e)) ? {
                    kind: "gone"
                } : (t instanceof $t.C8 || this.log.warn(`[hostStorage] could not rebuild the listing row for ${e} from its store: ${t instanceof Error ? t.message : String(t)}`), {
                    kind: "manifest-less"
                });
            }
        }
        forgetDir(e) {
            const t = this.sessionIdByDirName.get(e);
            this.sessionIdByDirName.delete(e), this.fingerprintByDirName.delete(e), void 0 !== t && (this.bySessionId.delete(t), this.onSessionChanged?.(t, !1));
        }
        startWatching() {
            this.armWatcher(5e3);
        }
        armWatcher(e) {
            if (void 0 === this.watcher && void 0 === this.rearmTimer && !this.disposed) try {
                vt.mkdirSync(this.storage.sessionsDir, {
                    recursive: !0,
                    mode: 448
                });
                const t = this.watch(this.storage.sessionsDir, (e, t)=>this.onWatchEvent(t));
                this.watcher = t, t.on("error", (r)=>{
                    if (this.watcher === t) {
                        if (this.stopWatching(), "ENOENT" === (0, $t.CA)(r).code) return this.log.info("[hostStorage] the session directory watcher died on a vanished directory; re-armed"), this.startWatching(), void this.scheduleRefresh("");
                        this.rearmAfter(e, r);
                    }
                });
            } catch (t) {
                this.rearmAfter(e, t);
            }
        }
        rearmAfter(e, t) {
            this.log.warn(`[hostStorage] the session directory watcher failed (${(0, $t.CA)(t).code ?? String(t)}); re-arming in ${e / 1e3}s, listing relies on revalidation meanwhile`), this.rearmTimer = this.clock.schedule(e, ()=>{
                this.rearmTimer = void 0, this.armWatcher(Math.min(2 * e, 6e4)), void 0 !== this.watcher && this.scheduleRefresh("");
            });
        }
        onWatchEvent(e) {
            const t = null === e ? "" : e.toString();
            if (0 === t.length) return void this.scheduleRefresh("");
            const [r, ...n] = t.split(At.sep);
            if (void 0 === r || 0 === r.length) return void this.scheduleRefresh("");
            const s = n[n.length - 1];
            (void 0 === s || s === Qt || s.startsWith(`${Qt}.`)) && this.scheduleRefresh(r);
        }
        stopWatching() {
            this.watcher?.close(), this.watcher = void 0;
        }
        scheduleRefresh(e) {
            this.pendingDirs.get(e)?.dispose(), this.pendingDirs.set(e, this.clock.schedule(50, ()=>{
                this.pendingDirs.delete(e), this.disposed || (0 !== e.length ? this.refreshDir(e, !0) : this.scanAll(!0));
            }));
        }
    }
    class dn {
        constructor(e){
            this.preparedSessions = new Map, this.inFlightPrepares = new Map, this.latestTitles = new Map, this.latestArchived = new Map, this.disposed = !1, this.hostOwnedStorageListeners = new Set, this.rootAdvancedListeners = new Set, this.storage = e.storage, this.log = e.log, this.clock = e.clock, this.instruments = e.instruments ?? Ar.Pz.none, this.hasLiveSession = e.hasLiveSession ?? (()=>!1), this.catalog = new un({
                storage: e.storage,
                log: e.log,
                clock: e.clock,
                ...void 0 === e.watch ? {} : {
                    watch: e.watch
                },
                onSessionChanged: (e, t)=>{
                    t ? this.notifyHostOwnedStorageChanged(e, !0) : this.forgetDeletedSession(e);
                },
                ...void 0 === e.revalidateIntervalMs ? {} : {
                    revalidateIntervalMs: e.revalidateIntervalMs
                }
            });
        }
        onHostOwnedStorageChanged(e) {
            return this.hostOwnedStorageListeners.add(e), ()=>{
                this.hostOwnedStorageListeners.delete(e);
            };
        }
        onRootAdvanced(e) {
            return this.rootAdvancedListeners.add(e), ()=>{
                this.rootAdvancedListeners.delete(e);
            };
        }
        ownedSessionIds() {
            return [
                ...this.preparedSessions.keys()
            ].sort();
        }
        notifyHostOwnedStorageChanged(e, t) {
            for (const r of this.hostOwnedStorageListeners)try {
                r(e, t);
            } catch (t) {
                this.log.error(`[hostStorage] a host-owned storage listener failed for session ${e}`, t);
            }
        }
        async prepareSession(e) {
            return this.instruments.timeAsync("hydrate", e.ctx ?? (0, d.q6)(), ()=>this.prepareSessionJoined(e), (e)=>({
                    hostOwned: void 0 !== e,
                    ...void 0 === e ? {} : {
                        kind: e.kind
                    }
                }));
        }
        async prepareSessionJoined(e) {
            for(;;){
                const t = this.preparedSessions.get(e.sessionId);
                if (void 0 !== t) return t;
                const r = this.inFlightPrepares.get(e.sessionId);
                if (void 0 === r) break;
                if (await Promise.allSettled([
                    r.settled
                ]), r.deleted) return void this.log.info(`[hostStorage] session ${e.sessionId} was deleted while an earlier open or seed of it was in flight; nothing opened, it stays where it was`);
            }
            const t = this.prepareSessionUncontended(e).finally(()=>{
                this.inFlightPrepares.delete(e.sessionId);
            });
            return this.inFlightPrepares.set(e.sessionId, {
                settled: t,
                deleted: !1
            }), t;
        }
        async prepareSessionUncontended(e) {
            const t = (0, Gr._)(e.sessionId) ? rr(this.storage.sessionDir(e.sessionId)) : {
                kind: "absent"
            };
            let r;
            try {
                r = await Hr({
                    storage: this.storage,
                    sessionId: e.sessionId,
                    ...void 0 === e.initialHistory ? {} : {
                        initialHistory: e.initialHistory
                    },
                    ...void 0 === e.surfaceHistory ? {} : {
                        surfaceHistory: e.surfaceHistory
                    },
                    ...void 0 === e.allowCreate ? {} : {
                        allowCreate: e.allowCreate
                    },
                    ...void 0 === e.legacyGetBlob ? {} : {
                        legacyGetBlob: e.legacyGetBlob
                    },
                    ...void 0 === e.readCurrentHistory ? {} : {
                        readCurrentHistory: e.readCurrentHistory
                    },
                    ...void 0 === e.admitSeedHistory ? {} : {
                        admitSeedHistory: e.admitSeedHistory
                    },
                    ...void 0 === e.mirror ? {} : {
                        mirror: e.mirror
                    },
                    onRootAdvanced: ()=>{
                        this.noteRootAdvanced(e.sessionId);
                    },
                    now: ()=>this.clock.now(),
                    instruments: this.instruments
                });
            } catch (t) {
                throw this.log.error(`[hostStorage] session ${e.sessionId} has a committed host store that cannot be opened or hydrated; the session cannot start from it`, t), t;
            }
            switch(r.kind){
                case "unavailable":
                    return "unsafe-session-id" !== r.cause && this.retireStaleSidecar(e.sessionId, {
                        sidecar: t,
                        store: "manifest-less"
                    }), void ("no-history" === r.cause ? this.log.info(`[hostStorage] session ${e.sessionId} has no host store and nothing to seed one from; it stays where it was`) : "history-moved" === r.cause ? this.log.info(`[hostStorage] session ${e.sessionId} advanced on the surface while its history was being copied; nothing committed, it stays where it was`) : this.log.warn(`[hostStorage] session ${e.sessionId} stays on the surface's path (pre-commit): ${r.cause}`));
                case "failed":
                    return this.retireStaleSidecar(e.sessionId, {
                        sidecar: t,
                        store: "not-a-file" === r.cause ? "refused" : "manifest-less"
                    }), "not-a-file" === r.cause ? void this.log.error(`[hostStorage] session ${e.sessionId} has something other than a regular file at its store path; refused unopened, it stays where it was`, r.error) : void this.log.error(`[hostStorage] seeding session ${e.sessionId} failed before anything committed (${r.cause}); it stays where it was${function(e) {
                        if ("closure" !== e.cause) return "";
                        return pn(e.failures);
                    }(r)}`, "closure" === r.cause ? void 0 : r.error);
                case "diverged":
                    switch(r.cause){
                        case "roots":
                            this.instruments.fault({
                                kind: "roots_diverged",
                                store: "session",
                                sessionId: e.sessionId,
                                relPath: this.storage.sessionDbRelPath(e.sessionId),
                                ...r.divergence
                            }), this.instruments.distribution("roots_diverged", 1, {
                                store: "session"
                            }), this.log.error(`[hostStorage] session ${e.sessionId} diverged from its committed host store (neither root continues the other); neither side adopted, the session stays where it was`, void 0, r.divergence);
                            break;
                        case "not-equal":
                            this.log.warn(`[hostStorage] session ${e.sessionId} has a committed host store this open may only use as it is, and its transcript is not the handed history's; the session stays where it was`);
                            break;
                        case "closure":
                            this.log.error(`[hostStorage] session ${e.sessionId} has a newer history than its committed host store, but it reaches pieces that failed validation; neither side adopted, the session stays where it was${pn(r.failures)}`);
                            break;
                        case "catch-up":
                            this.log.warn(`[hostStorage] session ${e.sessionId} has a newer history than its committed host store, but the catch-up onto the committed root did not commit${mn(r.error)}; the session stays where it was until the next open`);
                    }
                    return;
                case "opened":
                case "seeded":
                    {
                        const t = {
                            sessionId: e.sessionId,
                            kind: r.kind,
                            store: r.store,
                            consumed: !1
                        };
                        if (this.disposed) return void r.store.dispose();
                        if (this.preparedSessions.set(e.sessionId, t), !this.writeSessionSidecar(t, e.workspacePaths)) return;
                        this.notifyHostOwnedStorageChanged(e.sessionId, !0);
                        const n = r.store.getManifest();
                        return this.log.info("seeded" === r.kind ? `[hostStorage] seeded ${n.origin} storage for session ${e.sessionId} (${r.migratedBlobCount} piece(s) copied)` : `[hostStorage] opened committed host-owned storage for session ${e.sessionId} (root ${n.latestRootBlobIdHex.slice(0, 12)}…${function(e) {
                            switch(e){
                                case "not-compared":
                                    return "";
                                case "equal":
                                    return ", same as the surface's history";
                                case "host-ahead":
                                    return ", ahead of the surface's history";
                                default:
                                    return `, caught up to the surface's newer history, ${e.copiedBlobCount} piece(s) copied`;
                            }
                        }(r.reconciliation)})`), t;
                    }
            }
        }
        async forkSession(e) {
            const t = this.preparedSessions.get(e.parentSessionId);
            if (void 0 === t) return this.log.info(`[hostStorage] fork ${e.sessionId} of session ${e.parentSessionId}: the parent has no host store held here; the fork stays where it was`), !1;
            if (this.preparedSessions.has(e.sessionId)) return this.log.warn(`[hostStorage] fork ${e.sessionId} of session ${e.parentSessionId} already names a held store; nothing seeded`), !1;
            if (this.inFlightPrepares.has(e.sessionId)) return this.log.warn(`[hostStorage] fork ${e.sessionId} of session ${e.parentSessionId}: the surface is already opening the fork id, and that open decides where the fork lives; nothing seeded`), !1;
            if (this.hasLiveSession(e.sessionId)) return this.log.warn(`[hostStorage] fork ${e.sessionId} of session ${e.parentSessionId}: the fork already has a live session here, so it stays where it was; nothing seeded under it`), !1;
            const r = this.seedForkUncontended(e, t).finally(()=>{
                this.inFlightPrepares.delete(e.sessionId);
            });
            return this.inFlightPrepares.set(e.sessionId, {
                settled: r,
                deleted: !1
            }), r;
        }
        async seedForkUncontended(e, t) {
            const r = e.ctx ?? (0, d.q6)(), n = t.store.getBlobStore();
            let s;
            try {
                s = await sn({
                    storage: this.storage,
                    instruments: this.instruments
                }, {
                    sessionId: e.sessionId,
                    history: e.history,
                    readParentBlob: (e)=>n.getBlob(r, e)
                });
            } catch (t) {
                return this.log.error(`[hostStorage] fork ${e.sessionId} of session ${e.parentSessionId} could not be seeded; the fork stays where it was`, t), !1;
            }
            if (!0 === this.inFlightPrepares.get(e.sessionId)?.deleted) {
                s.dispose();
                try {
                    this.storage.deleteSessionDir(e.sessionId);
                } catch (t) {
                    return this.log.error(`[hostStorage] failed to remove the seed of fork ${e.sessionId}, deleted while it was being seeded`, t), !1;
                }
                return this.log.info(`[hostStorage] fork ${e.sessionId} of session ${e.parentSessionId} was deleted while its store was being seeded; the seed is removed and nothing announced`), !1;
            }
            if (this.disposed) return s.dispose(), !1;
            const o = s.getManifest();
            let i;
            try {
                i = this.writeSessionSidecar({
                    sessionId: e.sessionId,
                    kind: "seeded",
                    store: s
                }, e.workspacePaths ?? this.catalog.get(e.parentSessionId)?.workspacePaths);
            } finally{
                s.dispose();
            }
            if (!i) {
                const t = this.inFlightPrepares.get(e.sessionId);
                return void 0 !== t && (t.deleted = !0), this.log.warn(`[hostStorage] fork ${e.sessionId} of session ${e.parentSessionId}: its store is gone (deleted by another host while it was being seeded); nothing announced`), !1;
            }
            return this.notifyHostOwnedStorageChanged(e.sessionId, !0), this.log.info(`[hostStorage] seeded fork ${e.sessionId} of session ${e.parentSessionId} (root ${o.latestRootBlobIdHex.slice(0, 12)}…, ${o.migratedBlobCount} piece(s) copied from the parent)`), !0;
        }
        writeSessionSidecar(e, t) {
            return this.reconcileListingProjection(e), this.updateSidecar(e.sessionId, (r)=>this.sidecarFromManifest(e, r, t));
        }
        reconcileListingProjection(e) {
            const t = e.sessionId, r = this.latestTitles.has(t) ? this.resolveTitle(t, void 0) : void 0, n = this.latestArchived.get(t);
            (this.latestTitles.has(t) || void 0 !== n) && this.writeHeldListingProjection(e, {
                ...this.latestTitles.has(t) ? {
                    title: r
                } : {},
                ...void 0 === n ? {} : {
                    isArchived: n
                }
            });
        }
        writeHeldListingProjection(e, t) {
            try {
                e.store.writeListingProjection(t);
            } catch (t) {
                this.log.error(`[hostStorage] failed to write the listing projection for session ${e.sessionId}`, t);
            }
        }
        retireStaleSidecar(e, t) {
            let r;
            const n = ()=>{
                void 0 !== r && (or(r), r = void 0);
            }, s = ()=>void 0 !== r && (ir(r), r = void 0, !0);
            try {
                let o = this.lookAtStoreAgain(e, t.store);
                if (("holds" === o.kind || "gone" === o.kind) && "ok" === t.sidecar.kind) {
                    const n = function(e, t) {
                        const r = zt(e), n = `${r}.${process.pid}.${(0, wt.randomUUID)()}${nr}`;
                        try {
                            vt.renameSync(r, n);
                        } catch (e) {
                            const { code: t } = (0, $t.CA)(e);
                            if ("ENOENT" === t || "ENOTDIR" === t) return {
                                kind: "absent"
                            };
                            if ("EPERM" === t || "EBUSY" === t) return {
                                kind: "changed"
                            };
                            throw e;
                        }
                        const s = {
                            sessionDir: e,
                            heldPath: n
                        };
                        let o;
                        try {
                            o = vt.statSync(n);
                        } catch (e) {
                            throw or(s), e;
                        }
                        return tr(er(o), t) ? {
                            kind: "held",
                            held: s
                        } : (or(s), {
                            kind: "changed"
                        });
                    }(this.storage.sessionDir(e), t.sidecar.fingerprint);
                    if ("changed" === n.kind) return void this.log.info(`[hostStorage] session ${e} had its listing sidecar rewritten while this open was judging the store; the newer listing stands`);
                    "held" === n.kind && (r = n.held), o = this.lookAtStoreAgain(e, t.store);
                }
                switch(o.kind){
                    case "committed":
                        return n(), void this.log.info(`[hostStorage] session ${e} was committed by a peer while this open was judging it; its listing stands`);
                    case "unknown":
                        return n(), void this.log.warn(`[hostStorage] could not look at the store of session ${e} again before retiring its listing${mn(o.error)}; it stays listed until the next open`);
                    case "gone":
                        return s(), void (this.catalog.remove(e) && (this.log.info(`[hostStorage] unlisted session ${e}: its store is gone`), this.notifyHostOwnedStorageChanged(e, !1)));
                    case "holds":
                        return this.log.info(s() ? `[hostStorage] unlisted session ${e}: its listing sidecar had no committed store behind it` : `[hostStorage] unlisted session ${e}: there is a store at its path with no committed manifest to list it from`), this.catalog.remove(e), void this.notifyHostOwnedStorageChanged(e, !1);
                }
            } catch (t) {
                try {
                    n();
                } catch (t) {
                    this.log.error(`[hostStorage] the listing sidecar of session ${e} is held under a private name in its directory and could not be put back`, t);
                }
                this.log.error(`[hostStorage] failed to retire the stale listing of session ${e}; it may stay listed until its store is committed or removed`, t);
            }
        }
        lookAtStoreAgain(e, t) {
            if (!this.storage.hasSessionStore(e)) return {
                kind: "gone"
            };
            if ("refused" === t) return {
                kind: "holds"
            };
            let r;
            try {
                r = this.storage.readSessionStore(e);
            } catch (t) {
                return this.storage.hasSessionStore(e) ? t instanceof $t.C8 || t instanceof $t.df ? {
                    kind: "holds"
                } : {
                    kind: "unknown",
                    error: t
                } : {
                    kind: "gone"
                };
            }
            try {
                return void 0 === Ut(r) ? {
                    kind: "holds"
                } : {
                    kind: "committed"
                };
            } catch (e) {
                return {
                    kind: "unknown",
                    error: e
                };
            } finally{
                r.close();
            }
        }
        sidecarFromManifest(e, t, r) {
            const n = e.store.getManifest(), s = e.store.readListingProjection(), o = this.latestTitles.has(e.sessionId) ? this.resolveTitle(e.sessionId, t) : t?.title ?? s?.title, i = void 0 !== r && r.length > 0 ? r : t?.workspacePaths;
            return Ht(n, {
                ...void 0 === o ? {} : {
                    title: o
                },
                isArchived: this.latestArchived.get(e.sessionId) ?? t?.isArchived ?? s?.isArchived ?? !1,
                ...void 0 === s?.updatedAtMs ? {} : {
                    updatedAtMs: s.updatedAtMs
                }
            }, i);
        }
        resolveTitle(e, t) {
            if (this.latestTitles.has(e)) {
                const t = this.latestTitles.get(e)?.trim();
                return void 0 === t || 0 === t.length ? void 0 : t;
            }
            return t?.title;
        }
        updateSidecar(e, t, r) {
            try {
                const n = this.storage.sessionDir(e), s = rr(n);
                if ("unusable" === s.kind) return this.log.warn(`[hostStorage] not writing the listing sidecar for session ${e}: the existing sidecar is unusable (${s.reason})`), !0;
                const o = "ok" === s.kind ? s.meta : void 0, i = this.preparedSessions.get(e);
                if (void 0 === o && an(this.storage.sessionDbPath(e))) return void 0 !== i && this.forgetDeletedSession(e), !1;
                const a = void 0 === i ? void 0 : function(e) {
                    let t;
                    try {
                        t = vt.readdirSync(e);
                    } catch (e) {
                        const { code: t } = (0, $t.CA)(e);
                        if ("ENOENT" === t || "ENOTDIR" === t) return {
                            meta: void 0,
                            usablePaths: [],
                            unusableReasons: []
                        };
                        throw e;
                    }
                    const r = [];
                    for (const n of t){
                        if (!ar(n)) continue;
                        const t = At.join(e, n), s = vt.statSync(t, {
                            throwIfNoEntry: !1
                        });
                        s?.isFile() && r.push({
                            path: t,
                            stat: s
                        });
                    }
                    let n;
                    r.sort((e, t)=>t.stat.mtimeMs - e.stat.mtimeMs || (e.path < t.path ? 1 : -1));
                    const s = [], o = [];
                    for (const e of r){
                        if (e.stat.size > jt) {
                            o.push(`too-large (${e.stat.size} bytes)`);
                            continue;
                        }
                        let t;
                        try {
                            t = vt.readFileSync(e.path, "utf8");
                        } catch (e) {
                            const { code: t } = (0, $t.CA)(e);
                            "ENOENT" !== t && o.push(t ?? String(e));
                            continue;
                        }
                        const r = Xt(t);
                        "ok" === r.kind ? (n ??= r.meta, s.push(e.path)) : o.push(r.reason);
                    }
                    return {
                        meta: n,
                        usablePaths: s,
                        unusableReasons: o
                    };
                }(n), c = function(e) {
                    const { onDisk: t, retired: r } = e;
                    if (void 0 === t || void 0 === r) return t ?? r;
                    const n = t.title ?? r.title, s = t.workspacePaths ?? r.workspacePaths, o = Math.max(t.updatedAtMs ?? 0, r.updatedAtMs ?? 0), { title: i, workspacePaths: a, updatedAtMs: c, ...l } = t;
                    return {
                        ...l,
                        ...0 === o ? {} : {
                            updatedAtMs: o
                        },
                        ...void 0 === n ? {} : {
                            title: n
                        },
                        ...void 0 === s ? {} : {
                            workspacePaths: s
                        }
                    };
                }({
                    onDisk: o,
                    retired: a?.meta
                }), l = t(c) ?? c;
                if (void 0 === l) return !0;
                const u = function(e, t) {
                    const r = Math.max(t.existingUpdatedAtMs ?? e.updatedAtMs ?? 0, t.proposedUpdatedAtMs ?? 0), { updatedAtMs: n, ...s } = e;
                    return {
                        ...s,
                        ...0 === r ? {} : {
                            updatedAtMs: r
                        },
                        latestRootBlobIdHex: t.committedRoot ?? e.latestRootBlobIdHex
                    };
                }(l, {
                    committedRoot: i?.store.readCommittedRoot(),
                    existingUpdatedAtMs: c?.updatedAtMs,
                    proposedUpdatedAtMs: r
                }), d = "ok" === s.kind && Zt(u) === Zt(s.meta) ? s.fingerprint : function(e, t) {
                    const r = zt(e), n = `${r}.${process.pid}.${(0, wt.randomUUID)()}.tmp`;
                    try {
                        vt.writeFileSync(n, Zt(t), {
                            encoding: "utf8",
                            mode: 384
                        });
                        const e = er(vt.statSync(n));
                        return vt.renameSync(n, r), e;
                    } catch (e) {
                        throw vt.rmSync(n, {
                            force: !0
                        }), e;
                    }
                }(n, u);
                void 0 !== a && (!function(e) {
                    for (const t of e.usablePaths)vt.rmSync(t, {
                        force: !0
                    });
                }(a), a.unusableReasons.length > 0 && this.log.warn(`[hostStorage] leaving ${a.unusableReasons.length} retired listing sidecar(s) of session ${e} in place: not readable by this build (${a.unusableReasons.join("; ")})`)), this.catalog.upsert(e, u, d);
            } catch (t) {
                this.log.error(`[hostStorage] failed to write the listing sidecar for session ${e}`, t);
            }
            return !0;
        }
        noteRootAdvanced(e) {
            const t = this.preparedSessions.get(e);
            this.updateSidecar(e, (e)=>e ?? (void 0 === t ? void 0 : this.sidecarFromManifest(t, void 0, void 0)), this.clock.now());
            for (const t of this.rootAdvancedListeners)try {
                t(e);
            } catch (t) {
                this.log.error(`[hostStorage] a root-advanced listener failed for session ${e}`, t);
            }
        }
        noteTitleChanged(e, t) {
            this.latestTitles.set(e, t);
            const r = this.preparedSessions.get(e);
            void 0 !== r && this.writeHeldListingProjection(r, {
                title: this.resolveTitle(e, void 0)
            }), this.updateSidecar(e, (t)=>{
                if (void 0 === t) return;
                const r = this.resolveTitle(e, t), { title: n, ...s } = t;
                return void 0 === r ? s : {
                    ...s,
                    title: r
                };
            });
        }
        noteArchivedChanged(e, t) {
            this.latestArchived.set(e, t);
            const r = this.preparedSessions.get(e);
            void 0 !== r && this.writeHeldListingProjection(r, {
                isArchived: t
            }), this.updateSidecar(e, (e)=>void 0 === e ? void 0 : {
                    ...e,
                    isArchived: t
                });
        }
        listNativeCatalogEntries(e, t, r) {
            try {
                const n = this.instruments.time("list", t ?? (0, d.q6)(), ()=>this.catalog.list(e, void 0 === r ? void 0 : (e)=>{
                        const t = r(cr(e));
                        return void 0 === t ? void 0 : {
                            recency: t.updatedAt ?? e.updatedAtMs ?? Gt(e.origin, e.createdAtMs)
                        };
                    }).map(cr), (e)=>({
                        resultCount: e.length
                    }));
                return this.instruments.distribution("list_result_count", n.length), n;
            } catch (e) {
                return this.log.error("[hostStorage] failed to list host-owned sessions", e), [];
            }
        }
        hasNativeCatalogEntries(e) {
            try {
                return this.catalog.hasCatalogEntries(e);
            } catch (e) {
                return this.log.error("[hostStorage] failed to inspect host-owned session coverage", e), !1;
            }
        }
        getPreparedSessionStore(e) {
            return this.preparedSessions.get(e)?.store;
        }
        consumePreparedSessionStore(e) {
            const t = this.preparedSessions.get(e);
            if (void 0 !== t) return t.consumed = !0, t.store;
        }
        rollbackDanglingPreparedSession(e) {
            const t = this.preparedSessions.get(e);
            if (void 0 === t || t.consumed) return !1;
            const r = "seeded" === t.kind && this.isStillOwnSeed(t);
            return this.log.warn(`[hostStorage] rolling back the unconsumed ${t.kind} store for session ${e} (${r ? "removing it" : "closing it, the store is not this prepare's to remove"}); the session stays where it was`), r ? this.deleteSessionStorage(e) : this.releaseSession(e), !0;
        }
        cleanupFailedSessionCreate(e) {
            const t = this.preparedSessions.get(e);
            if (void 0 === t) return !0;
            if (!t.consumed) return this.rollbackDanglingPreparedSession(e), !0;
            const r = "seeded" === t.kind && this.isStillOwnSeed(t);
            return this.log.warn(`[hostStorage] cleaning up the consumed ${t.kind} store after session create failed (${r ? "removing its unchanged seed" : "closing it, the store is not this create's to remove"})`), r ? this.deleteSessionStorage(e) : (this.releaseSession(e), !0);
        }
        isStillOwnSeed(e) {
            try {
                return e.store.readCommittedRoot() === e.store.getManifest().latestRootBlobIdHex;
            } catch  {
                return !1;
            }
        }
        getPreparedBlobStore(e) {
            const t = this.preparedSessions.get(e.sessionId) ?? this.preparedSessions.get(e.rootSessionId) ?? (void 0 === e.parentSessionId ? void 0 : this.preparedSessions.get(e.parentSessionId));
            return t?.store.getBlobStore();
        }
        hasPreparedSession(e) {
            return this.preparedSessions.has(e);
        }
        hasNativeSession(e) {
            return this.preparedSessions.has(e) || void 0 !== this.catalog.get(e);
        }
        getNativeCatalogEntry(e) {
            const t = this.catalog.get(e);
            return void 0 === t ? void 0 : cr(t);
        }
        releaseSession(e) {
            const t = this.preparedSessions.get(e);
            if (void 0 !== t) {
                this.preparedSessions.delete(e);
                try {
                    t.store.dispose();
                } catch (t) {
                    this.log.error(`[hostStorage] failed to dispose the store for session ${e}`, t);
                }
            }
        }
        deleteSessionStorage(e) {
            const t = this.inFlightPrepares.get(e);
            void 0 !== t && (t.deleted = !0), this.releaseSession(e);
            try {
                this.storage.deleteSessionDir(e);
            } catch (t) {
                return this.log.error(`[hostStorage] failed to delete the storage for session ${e}; it stays listed`, t), !1;
            }
            return this.log.info(`[hostStorage] deleted the host-owned storage for session ${e}`), this.forgetSession(e), !0;
        }
        forgetDeletedSession(e) {
            this.preparedSessions.has(e) && this.log.warn(`[hostStorage] the host-owned storage for session ${e} was deleted by another host; closing the store, no further host writes`), this.forgetSession(e);
        }
        forgetSession(e) {
            this.catalog.remove(e), this.releaseSession(e), this.latestTitles.delete(e), this.latestArchived.delete(e), this.notifyHostOwnedStorageChanged(e, !1);
        }
        dispose() {
            this.disposed = !0;
            for (const e of [
                ...this.preparedSessions.keys()
            ])this.releaseSession(e);
            this.hostOwnedStorageListeners.clear(), this.rootAdvancedListeners.clear(), this.catalog.dispose();
        }
    }
    function pn(e) {
        const t = e.slice(0, 5).map((e)=>`${e.blobIdHex.slice(0, 12)}…:${e.kind}`).join(", ");
        return 0 === t.length ? "" : `; first failures: ${t}`;
    }
    function mn(e) {
        const { code: t, sqliteErrcode: r } = (0, $t.CA)(e), n = [
            t,
            r
        ].filter((e)=>void 0 !== e);
        return 0 === n.length ? "" : ` (${n.join("/")})`;
    }
    function hn(e) {
        if (void 0 === e) return !0;
        try {
            return 0 === Ie.Y9z.fromBinary(e).turns.length;
        } catch  {
            return !1;
        }
    }
    function fn(e) {
        return hn(e.initialHistory) ? !e.catalogHydrate || void 0 !== e.initialHistory : !0 === e.migrateSettledHistory && e.catalogHydrate && function(e) {
            if (void 0 === e) return !1;
            try {
                return 0 === Ie.Y9z.fromBinary(e).pendingToolCalls.length;
            } catch  {
                return !1;
            }
        }(e.initialHistory);
    }
    var gn = require("./module-65588.js"), yn = require("./module-11574.js"), wn = require("./module-86209.js"), vn = require("./module-77095.js");
    function _n(e) {
        return async (t, r)=>{
            const n = t.message.trim();
            if (0 === n.length) return;
            const s = await e.routing.readTeamEnablement();
            if ("enabled" !== s) throw new Error(`Private inference is ${s} for this team`);
            const { catalog: o, sessionProvider: i } = await e.hydration(), a = new wn.G4({
                modelId: t.modelId,
                parameters: t.modelParameters.map((e)=>new wn.SR({
                        id: e.id,
                        value: e.value
                    }))
            }), c = (0, vn.gV)(o, a), l = crypto.randomUUID(), u = (await i({
                model: c,
                modelParameters: (0, vn.ir)(c, a),
                attemptRequestId: l,
                originalRequestId: l,
                signal: r
            })).promptSession.getExecutor();
            u.appendMessages((0, yn.Y$)({
                userRequest: n,
                isSideChat: t.isSideChat,
                maxChars: yn.oB
            }));
            const [p, m] = (0, d.q6)().withName("private_inference.chat_title").withCancel(), h = ()=>m(r.reason);
            r.aborted ? h() : r.addEventListener("abort", h, {
                once: !0
            });
            try {
                const e = u.stream(p, void 0, void 0, {}), t = e.response.then(()=>{}, (e)=>e ?? new Error("Chat title request failed"));
                let r = "";
                for await (const t of e.fullStream)"text-delta" === t.type && (r += t.textDelta);
                const n = await t;
                if (void 0 !== n) throw n;
                const s = (0, yn.We)(r);
                return s.length > 0 ? s : void 0;
            } finally{
                r.removeEventListener("abort", h);
            }
        };
    }
    function An(e) {
        return async ()=>{
            const t = await e.retryNow();
            switch(t.kind){
                case "active":
                    return t;
                case "waiting":
                    throw new Error(`Could not reach your private inference gateway at ${t.baseUrl}.`);
                case "gave-up":
                case "failed":
                    throw new Error(t.detail);
            }
        };
    }
    var Sn = require("./module-36672.js"), bn = require("./module-82714.js"), En = require("./module-89117.js");
    const In = "private-inference.toml";
    function Cn(e) {
        return At.join(function(e) {
            switch(e){
                case "darwin":
                    return At.join("/Library", "Application Support", "Cursor");
                case "win32":
                    return At.join("C:\\", "ProgramData", "Cursor");
                default:
                    return At.join("/etc", "cursor");
            }
        }(e), In);
    }
    function kn(e) {
        try {
            return (0, vt.lstatSync)(e), !0;
        } catch (e) {
            return !(e instanceof Error && "code" in e && "ENOENT" === e.code);
        }
    }
    function xn(e) {
        const t = (0, dt.hq)(e.policyPath);
        if (void 0 !== t) return function(e, t) {
            return "win32" === t ? /^(?:[a-zA-Z]:[\\/]|\\\\)/.test(e) : At.posix.isAbsolute(e);
        }(t, e.platform) || (0, dt.zF)(`the managed policy path must be absolute (got ${JSON.stringify(t)})`), {
            path: t,
            source: "policy"
        };
        const r = Cn(e.platform);
        if ((e.fileExists ?? kn)(r)) return {
            path: r,
            source: "well-known"
        };
        const n = (0, dt.hq)(e.env.CURSOR_PRIVATE_INFERENCE_CONFIG);
        return void 0 !== n ? {
            path: At.resolve(n),
            source: "env"
        } : void 0;
    }
    var Tn = require("./module-58072.js"), Rn = require("./module-63070.js");
    const Bn = "Private inference model", Pn = "Served by your private inference gateway.", Jn = "reasoning";
    function Mn(e) {
        return void 0 === e ? {
            pickerModels: [],
            defaultModelId: ""
        } : {
            pickerModels: e.models.map((e)=>(function(e) {
                    const t = function(e) {
                        return void 0 !== e && e.tiers.length > 0 ? e : void 0;
                    }(e.effort), r = (0, Rn.Rz)(e), n = [
                        ...void 0 !== t ? [
                            qn(t)
                        ] : [],
                        Dn(r)
                    ];
                    return new Tn.MSu({
                        name: e.id,
                        serverModelName: e.providerModelId,
                        defaultOn: !0,
                        clientDisplayName: e.displayName,
                        inputboxShortModelName: e.displayName,
                        supportsAgent: !0,
                        supportsPlanMode: !0,
                        supportsSandboxing: !0,
                        supportsMaxMode: !1,
                        supportsNonMaxMode: !0,
                        supportsCmdK: !1,
                        supportsSmartModeClassifier: !0,
                        supportsThinking: void 0 !== t,
                        supportsImages: e.vision,
                        tagline: Bn,
                        namedModelSectionIndex: 0,
                        legacySlugs: [],
                        idAliases: [],
                        cloudAgentEffortModes: [],
                        parameterDefinitions: n,
                        variants: On(t, r, e.displayName),
                        tooltipData: {
                            markdownContent: Un(e, t)
                        }
                    });
                })(e).toJson()),
            defaultModelId: e.defaultModelId
        };
    }
    function qn(e) {
        return new Tn.UNk({
            id: Jn,
            name: "Reasoning",
            markdownTooltip: "Controls how much reasoning effort the model uses.",
            parameterType: {
                enumParameter: {
                    values: e.tiers.map((e)=>({
                            value: e.id,
                            displayName: Fn(e)
                        }))
                }
            },
            isCycleableByHotkey: !0
        });
    }
    function Dn(e) {
        return new Tn.UNk({
            id: Rn.Qt,
            name: "Context",
            markdownTooltip: void 0 === e.longTokens ? "Context size the model has available." : "Context size the model has available. The larger window is billed at the provider's long-context rate.",
            parameterType: {
                enumParameter: {
                    values: [
                        {
                            value: String(e.defaultTokens),
                            displayName: (0, Rn.xF)(e.defaultTokens)
                        },
                        ...void 0 === e.longTokens ? [] : [
                            {
                                value: String(e.longTokens),
                                displayName: (0, Rn.xF)(e.longTokens),
                                increasesModelCost: !0
                            }
                        ]
                    ]
                }
            }
        });
    }
    function On(e, t, r) {
        const n = e?.tiers ?? [
            void 0
        ], s = void 0 === t.longTokens ? [
            t.defaultTokens
        ] : [
            t.defaultTokens,
            t.longTokens
        ];
        return n.flatMap((n)=>s.map((s)=>{
                const o = [
                    r,
                    ...void 0 !== n ? [
                        Fn(n)
                    ] : [],
                    ...void 0 !== t.longTokens && s === t.longTokens ? [
                        (0, Rn.xF)(s)
                    ] : []
                ].join(" "), i = (void 0 === n || n.id === e?.default) && s === t.defaultTokens;
                return {
                    parameterValues: [
                        ...void 0 !== n ? [
                            {
                                id: Jn,
                                value: n.id
                            }
                        ] : [],
                        {
                            id: Rn.Qt,
                            value: String(s)
                        }
                    ],
                    displayName: o,
                    displayNameOutsidePicker: o,
                    isMaxMode: !1,
                    isDefaultNonMaxConfig: i,
                    isDefaultMaxConfig: i
                };
            }));
    }
    const Nn = {
        none: "None",
        minimal: "Minimal",
        low: "Low",
        medium: "Medium",
        high: "High",
        xhigh: "Extra High",
        max: "Max"
    };
    function Fn(e) {
        return e.label ?? Nn[e.id] ?? e.id.charAt(0).toUpperCase() + e.id.slice(1);
    }
    function Un(e, t) {
        return [
            Pn,
            `Context: ${e.contextWindowTokens.toLocaleString()} tokens.`,
            void 0 !== e.maxOutputTokens ? `Max output: ${e.maxOutputTokens.toLocaleString()} tokens.` : void 0,
            void 0 !== t ? "Reasoning: supported." : void 0,
            e.vision ? "Vision: supported." : void 0
        ].filter((e)=>void 0 !== e).join("\n\n");
    }
    function Ln(e, t) {
        return {
            ok: !1,
            configErrorDetail: e,
            createAgentHost: mt({
                sessionProvider: void 0,
                catalog: void 0,
                configErrorDetail: e,
                routing: t
            })
        };
    }
    function $n(e) {
        return (t)=>e.attachToTurnContext(t);
    }
    var Qn = require("./module-91943.js");
    const jn = "agent_host_updater", Gn = "agent_host_updater_timing", Hn = "cursor.agentHost.updateMode", zn = "update.mode", Wn = "CURSOR_AGENT_HARNESS", Vn = "CURSOR_AGENT_HARNESS_ROOT", Kn = "agent-harness", Yn = "dogfood";
    async function Zn(e) {
        if ("background-composer" === e.remoteName) return {
            off: "background-composer remote",
            level: "trace"
        };
        const t = function({ updateMode: e, clientUpdateMode: t }) {
            if ("none" === e) return `${Hn}=none`;
            if ("on" !== e && "none" === t) return `${Hn}=default follows ${zn}=none`;
            return;
        }(e);
        if (void 0 !== t) return {
            off: t,
            level: "info"
        };
        const r = e.env[Wn];
        if ("0" === r) return {
            off: `${Wn}=0`,
            level: "info"
        };
        if ("1" === r) return {
            on: "env"
        };
        try {
            return await e.isGateOn() ? {
                on: "gate"
            } : {
                off: `${jn} gate off`,
                level: "trace"
            };
        } catch (e) {
            return {
                unknown: `failed to evaluate ${jn}: ${e instanceof Error ? e.message : String(e)}`
            };
        }
    }
    async function Xn(e) {
        const { log: t, env: r } = e, n = await Zn(e);
        if ("unknown" in n) return void t.error(`[agent-harness] off (${n.unknown})`);
        if ("off" in n) return void t[n.level](`[agent-harness] off (${n.off})`);
        const { on: s } = n, o = r[Vn], i = void 0 !== o && "" !== o.trim(), c = (0, w.XJ)({
            developmentBuild: e.isDevelopment,
            devKeySwitch: e.devKeySwitch,
            clientVersion: e.clientVersion
        });
        let l;
        t.info(`[agent-harness] on (${"env" === s ? `${Wn}=1` : `${jn} gate`}); module signatures ${c.enforce ? "enforced" : "reported, not enforced"}${function({ isDevelopment: e, devKeySwitch: t, clientVersion: r }) {
            return e ? " (release and dev keys)" : t ? (0, w.JM)(r) ? ` (release and dev keys, ${w.zC})` : ` (release keys only; ${w.zC} ignored: version ${r} is not a pre-release)` : "";
        }(e)}; root ${i ? `from ${Vn}` : `<userData>/${Kn}`}`);
        try {
            l = await e.readTiming();
        } catch (e) {
            t.error(`[agent-harness] ${Gn} not read; the agent host updater keeps its default timings`, e);
        }
        const u = await async function(e) {
            try {
                const t = JSON.parse(await (0, Qn.readFile)((0, a.join)(e, "product.json"), "utf8"));
                return "object" == typeof t && null !== t && "date" in t && "string" == typeof t.date ? t.date : void 0;
            } catch  {
                return;
            }
        }(e.appRoot);
        return {
            rootDir: i ? (0, a.resolve)(o) : (0, a.resolve)(e.globalStoragePath, "..", "..", "..", Kn),
            enabledBy: s,
            clientVersion: e.clientVersion,
            ...void 0 === l ? {} : {
                timing: l
            },
            signatures: c,
            ...void 0 === u ? {} : {
                staticFloorBuiltAt: u
            },
            log: (e)=>t.info(e),
            loopLogContext: e.loopLogContext,
            ...void 0 === e.onModuleReverted ? {} : {
                onModuleReverted: e.onModuleReverted
            },
            ...void 0 === e.enabled ? {} : {
                enabled: e.enabled
            }
        };
    }
    function es(e, t, r) {
        const n = t();
        try {
            n?.dispose();
        } catch (t) {
            r?.(e, t);
        }
    }
    const ts = (0, p.h)("renderer-request-context");
    function rs(e, t, r) {
        if (void 0 === t) return;
        if (!0 === r?.ownRequestContext) return function(e) {
            return async ({ ctx: t, args: r })=>{
                const n = new c.CancellationTokenSource, s = ()=>n.cancel();
                t.signal.aborted ? s() : t.signal.addEventListener("abort", s, {
                    once: !0
                });
                try {
                    const s = await e(r.toBinary(), n.token);
                    if (void 0 === s) return;
                    return ts.debug(t, "Request context overlay pulled from the renderer"), (0, w.Z9)(s);
                } catch (e) {
                    return void ts.warn(t, "Renderer request context overlay unavailable; using the host base", {
                        error: e instanceof Error ? e.message : String(e)
                    });
                } finally{
                    t.signal.removeEventListener("abort", s), n.dispose();
                }
            };
        }(t);
        const n = e.get(l.MZM);
        e.register(l.MZM, {
            execute: async (e, r, s)=>{
                const o = new c.CancellationTokenSource, i = ()=>o.cancel();
                e.signal.aborted ? i() : e.signal.addEventListener("abort", i, {
                    once: !0
                });
                try {
                    const n = await t(r.toBinary(), o.token);
                    if (void 0 !== n) return ts.debug(e, "Request context served by the renderer"), new Br._G({
                        result: {
                            case: "success",
                            value: new Br.yW({
                                requestContext: Br.bb.fromBinary(n)
                            })
                        }
                    });
                } catch (t) {
                    ts.warn(e, "Renderer request context unavailable; using the host executor", {
                        error: t instanceof Error ? t.message : String(t)
                    });
                } finally{
                    e.signal.removeEventListener("abort", i), o.dispose();
                }
                return n.execute(e, r, s);
            }
        });
    }
    var ns = require("./module-42358.js"), ss = require("./module-46862.js"), os = require("./module-31421.js"), is = require("./module-10493.js"), as = require("./module-95339.js");
    const cs = {
        BadConfigFile: "BadConfigFile",
        AuthenticationFailed: "AuthenticationFailed",
        NoUserNameConfigured: "NoUserNameConfigured",
        NoUserEmailConfigured: "NoUserEmailConfigured",
        NoRemoteRepositorySpecified: "NoRemoteRepositorySpecified",
        NotAGitRepository: "NotAGitRepository",
        NotAtRepositoryRoot: "NotAtRepositoryRoot",
        Conflict: "Conflict",
        StashConflict: "StashConflict",
        UnmergedChanges: "UnmergedChanges",
        PushRejected: "PushRejected",
        ForcePushWithLeaseRejected: "ForcePushWithLeaseRejected",
        ForcePushWithLeaseIfIncludesRejected: "ForcePushWithLeaseIfIncludesRejected",
        RemoteConnectionError: "RemoteConnectionError",
        DirtyWorkTree: "DirtyWorkTree",
        CantOpenResource: "CantOpenResource",
        GitNotFound: "GitNotFound",
        CantCreatePipe: "CantCreatePipe",
        PermissionDenied: "PermissionDenied",
        CantAccessRemote: "CantAccessRemote",
        RepositoryNotFound: "RepositoryNotFound",
        RepositoryIsLocked: "RepositoryIsLocked",
        BranchNotFullyMerged: "BranchNotFullyMerged",
        NoRemoteReference: "NoRemoteReference",
        InvalidBranchName: "InvalidBranchName",
        BranchAlreadyExists: "BranchAlreadyExists",
        NoLocalChanges: "NoLocalChanges",
        NoStashFound: "NoStashFound",
        LocalChangesOverwritten: "LocalChangesOverwritten",
        NoUpstreamBranch: "NoUpstreamBranch",
        IsInSubmodule: "IsInSubmodule",
        WrongCase: "WrongCase",
        CantLockRef: "CantLockRef",
        CantRebaseMultipleBranches: "CantRebaseMultipleBranches",
        PatchDoesNotApply: "PatchDoesNotApply",
        NoPathFound: "NoPathFound",
        UnknownPath: "UnknownPath",
        EmptyCommitMessage: "EmptyCommitMessage",
        BranchFastForwardRejected: "BranchFastForwardRejected",
        BranchNotYetBorn: "BranchNotYetBorn",
        TagConflict: "TagConflict",
        CherryPickEmpty: "CherryPickEmpty",
        CherryPickConflict: "CherryPickConflict",
        WorktreeContainsChanges: "WorktreeContainsChanges",
        WorktreeAlreadyExists: "WorktreeAlreadyExists",
        WorktreeBranchAlreadyUsed: "WorktreeBranchAlreadyUsed"
    };
    class ls extends Error {
        constructor(e){
            super(e.error?.message || e.message || "Git error"), this.error = e.error, this.stdout = e.stdout, this.stderr = e.stderr, this.exitCode = e.exitCode, this.gitErrorCode = e.gitErrorCode, this.gitCommand = e.gitCommand, this.gitArgs = e.gitArgs;
        }
        toString() {
            let e = this.message + " " + JSON.stringify({
                exitCode: this.exitCode,
                gitErrorCode: this.gitErrorCode,
                gitCommand: this.gitCommand,
                stdout: this.stdout,
                stderr: this.stderr
            }, null, 2);
            return this.error && (e += this.error.stack), (0, as.ix)(e);
        }
    }
    function us(e) {
        return (t)=>{
            /ENOENT/.test(t.message) && (t = new ls({
                error: t,
                message: "Failed to execute git (ENOENT)",
                gitErrorCode: cs.NotAGitRepository
            })), e(t);
        };
    }
    var ds = require("./module-44016.js");
    const ps = -86, ms = [
        "/usr/bin/git",
        "/opt/homebrew/bin/git"
    ];
    function hs(e) {
        return new Promise((t, r)=>{
            let n;
            try {
                n = os.spawn(e, [
                    "--version"
                ]);
            } catch (t) {
                return void r(new Error(function(e, t) {
                    const r = t?.errno;
                    return "darwin" === process.platform && r === ps ? `"${e}" cannot run on this CPU architecture (EBADARCH). It is likely an Intel-only binary and Rosetta is not installed.` : `Executing "${e} --version" failed: ${t instanceof Error ? t.message : String(t)}`;
                }(e, t)));
            }
            const s = [];
            n.stdout.on("data", (e)=>s.push(e)), n.on("error", us(r)), n.on("close", (n, o)=>0 !== n ? r(new Error(`Executing "${e} --version" failed with code ${n}, signal ${o}`)) : t({
                    path: e,
                    version: (0, ds.ot)(Buffer.concat(s).toString("utf8").trim())
                }));
        });
    }
    function fs(e, t) {
        return t(e) ? hs(e) : Promise.reject(new Error(`Path "${e}" is invalid.`));
    }
    async function gs(e, t) {
        if ("/usr/bin/git" === e) {
            const { error: e } = await new Promise((e)=>{
                os.exec("xcode-select -p", (t, r)=>e({
                        error: t,
                        stdout: r.toString()
                    }));
            });
            if (e && 2 === e.code) throw new Error('Executing "xcode-select -p" failed with error code 2.');
        }
        return fs(e, t);
    }
    async function ys(e, t) {
        const { error: r, stdout: n } = await new Promise((e)=>{
            os.exec("which git", (t, r)=>e({
                    error: t,
                    stdout: r.toString()
                }));
        });
        if (r) throw new Error(`Executing "which git" failed: ${r.message}`);
        const s = n.trim();
        try {
            return await gs(s, e);
        } catch (r) {
            t?.warn(`Unable to use git from the PATH: "${s}". Error: ${r.message}. Trying well-known native git installs.`);
            for (const r of ms)if (r !== s) try {
                const n = await gs(r, e);
                return t?.info(`Using git from "${n.path}" instead of "${s}".`), n;
            } catch (e) {
                t?.info(`Unable to use git from "${r}". Error: ${e.message}`);
            }
            throw r;
        }
    }
    function ws(e, t) {
        return e ? fs(At.join(e, "Git", "cmd", "git.exe"), t) : Promise.reject("Not found");
    }
    async function vs(e) {
        return ws(process.env.ProgramW6432, e).then(void 0, ()=>ws(process.env["ProgramFiles(x86)"], e)).then(void 0, ()=>ws(process.env.ProgramFiles, e)).then(void 0, ()=>ws(At.join(process.env.LocalAppData, "Programs"), e)).then(void 0, ()=>(async function(e) {
                return fs(await is("git.exe"), e);
            })(e));
    }
    async function _s(e) {
        return async function(e, t, r) {
            for (const n of e)try {
                return await fs(n, t);
            } catch (e) {
                r?.info(`Unable to find git on the PATH: "${n}". Error: ${e.message}`);
            }
            let n;
            try {
                switch(process.platform){
                    case "darwin":
                        return await ys(t, r);
                    case "win32":
                        return await vs(t);
                    default:
                        return await fs(await is("git"), t);
                }
            } catch (e) {
                n = e?.message ?? String(e), r?.warn(`Unable to find git. Error: ${n}`);
            }
            throw new Error(n ? `Git installation not found. ${n}` : "Git installation not found.");
        }([], ()=>!0, e);
    }
    var As = require("./module-78474.js"), Ss = require("./module-73136.js"), bs = require("./module-66058.js"), Es = require("./module-30913.js");
    class Is extends Error {
        constructor(){
            super("Operation cancelled"), this.name = "CancelledError";
        }
    }
    class Cs {
        get onOutput() {
            return this._onOutput;
        }
        constructor(e){
            this._onOutput = new As.EventEmitter, this.path = e.gitPath, this.env = e.env || {}, this.repoConfigExecution = e.repoConfigExecution ?? "block", e.onLog && this._onOutput.on("log", e.onLog);
        }
        async exec(e, t, r = {}) {
            const n = {
                cwd: e,
                ...r
            };
            return await this._exec(t, n);
        }
        async exec2(e, t = {}) {
            return await this._exec(e, t);
        }
        stream(e, t, r = {}) {
            const n = {
                cwd: e,
                ...r
            }, s = this.spawn(t, n);
            if (!1 !== r.log) {
                const e = Date.now();
                s.on("exit", ()=>{
                    this.log(`> ${(0, as.Fh)(t)} [${Date.now() - e}ms]${s.killed ? " (cancelled)" : ""}${this.policyLogSuffix()}\n`);
                });
            }
            return s;
        }
        policyLogSuffix() {
            return "allow-hooks" === this.repoConfigExecution ? " (hooks)" : "";
        }
        async _exec(e, t = {}) {
            const r = this.spawn(e, t);
            t.onSpawn?.(r), t.input && r.stdin.end(t.input, "utf8");
            const n = Date.now();
            let s;
            try {
                s = await async function(e, t) {
                    if (!e.stdout || !e.stderr) throw new ls({
                        message: "Failed to get stdout or stderr from git process."
                    });
                    if (t?.aborted) throw new Is;
                    const r = [], n = (e, t, n)=>{
                        e.once(t, n), r.push((0, ds.s)(()=>e.removeListener(t, n)));
                    }, s = (e, t, n)=>{
                        e.on(t, n), r.push((0, ds.s)(()=>e.removeListener(t, n)));
                    };
                    let o = Promise.all([
                        new Promise((t, r)=>{
                            n(e, "error", us(r)), n(e, "exit", t);
                        }),
                        new Promise((t)=>{
                            const r = [];
                            s(e.stdout, "data", (e)=>r.push(e)), n(e.stdout, "close", ()=>t(Buffer.concat(r)));
                        }),
                        new Promise((t)=>{
                            const r = [];
                            s(e.stderr, "data", (e)=>r.push(e)), n(e.stderr, "close", ()=>t(Buffer.concat(r).toString("utf8")));
                        })
                    ]);
                    if (t) {
                        const n = new Promise((n, s)=>{
                            const o = ()=>{
                                try {
                                    e.kill();
                                } catch  {}
                                s(new Is);
                            };
                            t.aborted ? o() : (t.addEventListener("abort", o, {
                                once: !0
                            }), r.push((0, ds.s)(()=>t.removeEventListener("abort", o))));
                        });
                        o = Promise.race([
                            o,
                            n
                        ]);
                    }
                    try {
                        const [e, t, r] = await o;
                        return {
                            exitCode: e,
                            stdout: t,
                            stderr: r
                        };
                    } finally{
                        (0, ds.AS)(r);
                    }
                }(r, t.signal);
            } catch (t) {
                throw t instanceof Is && this.log(`> ${(0, as.Fh)(e)} [${Date.now() - n}ms] (cancelled)\n`), t;
            }
            !1 !== t.log && (this.log(`> ${(0, as.Fh)(e)} [${Date.now() - n}ms] ${t.caller ? `(${t.caller})` : ""}${this.policyLogSuffix()}\n`), s.stderr.length > 0 && this.log(`${(0, as.ix)(s.stderr)}\n`));
            const o = {
                exitCode: s.exitCode,
                stdout: s.stdout.toString("utf8"),
                stderr: s.stderr
            };
            return s.exitCode ? Promise.reject(new ls({
                message: "Failed to execute git",
                stdout: o.stdout,
                stderr: o.stderr,
                exitCode: o.exitCode,
                gitErrorCode: (i = o.stderr, /Another git process seems to be running in this repository|If no other git process is currently running/.test(i) ? cs.RepositoryIsLocked : /Authentication failed/i.test(i) ? cs.AuthenticationFailed : /Not a git repository/i.test(i) ? cs.NotAGitRepository : /bad config file/.test(i) ? cs.BadConfigFile : /cannot make pipe for command substitution|cannot create standard input pipe/.test(i) ? cs.CantCreatePipe : /Repository not found/.test(i) ? cs.RepositoryNotFound : /unable to access/.test(i) ? cs.CantAccessRemote : /branch '.+' is not fully merged/.test(i) ? cs.BranchNotFullyMerged : /Couldn't find remote ref/.test(i) ? cs.NoRemoteReference : /A branch named '.+' already exists/.test(i) ? cs.BranchAlreadyExists : /'.+' is not a valid branch name/.test(i) ? cs.InvalidBranchName : /Please,? commit your changes or stash them/.test(i) ? cs.DirtyWorkTree : /contains modified or untracked files|use --force to delete it/.test(i) ? cs.WorktreeContainsChanges : /fatal: '[^']+' already exists/.test(i) ? cs.WorktreeAlreadyExists : /is already used by worktree at/.test(i) ? cs.WorktreeBranchAlreadyUsed : void 0),
                gitCommand: (0, bs.s7)(e) ?? e[0],
                gitArgs: e
            })) : o;
            var i;
        }
        spawn(e, t = {}) {
            if (!this.path) throw new Error("git could not be found in the system.");
            const r = {
                ...t
            };
            r.stdio || t.input || (r.stdio = [
                "ignore",
                null,
                null
            ]), r.env = (0, Es.J)({
                command: (0, bs.s7)(e),
                spawnerEnv: this.env,
                optionsEnv: t.env,
                repoConfigExecution: this.repoConfigExecution
            });
            const n = this.getCwd(t);
            return n && (r.cwd = (0, ds.vn)(n)), os.spawn(this.path, e, r);
        }
        getCwd(e) {
            const t = e.cwd;
            return void 0 === t || "string" == typeof t ? t : t instanceof URL && "file:" === t.protocol ? (0, Ss.fileURLToPath)(t) : void 0;
        }
        log(e) {
            this._onOutput.emit("log", e);
        }
    }
    var ks = require("./module-30306.js"), xs = (e, t)=>(t = Symbol[e]) ? t : Symbol.for("Symbol." + e), Ts = (e)=>{
        throw TypeError(e);
    }, Rs = (e, t, r)=>{
        var n, s;
        null != t ? ("object" != typeof t && "function" != typeof t && Ts("Object expected"), r && (n = t[xs("asyncDispose")]), void 0 === n && (n = t[xs("dispose")], r && (s = n)), "function" != typeof n && Ts("Object not disposable"), s && (n = function() {
            try {
                s.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        }), e.push([
            r,
            n,
            t
        ])) : r && e.push([
            r
        ]);
        return t;
    }, Bs = (e, t, r)=>{
        var n = "function" == typeof SuppressedError ? SuppressedError : function(e, t, r, n) {
            return (n = Error(r)).name = "SuppressedError", n.error = e, n.suppressed = t, n;
        }, s = (e)=>t = r ? new n(e, t, "An error was suppressed during disposal") : (r = !0, e), o = (n)=>{
            for(; n = e.pop();)try {
                var i = n[1] && n[1].call(n[2]);
                if (n[0]) return Promise.resolve(i).then(o, (e)=>(s(e), o()));
            } catch (e) {
                s(e);
            }
            if (r) throw t;
        };
        return o();
    };
    async function Ps() {
        const e = c.extensions.getExtension("vscode.git");
        if (!e) return;
        const t = e.isActive ? e.exports : await e.activate();
        return t && t.enabled ? t.getAPI(1) : void 0;
    }
    class Js {
        constructor(e){
            this.vscodeGitExtension = e;
        }
        async exec(e, t, r, n) {
            var s = [];
            try {
                if (!this.vscodeGitExtension) throw new l.YH2("Failed to execute git command because there is no available Git API. Ensure there is a reachable git installation on the workspace system.");
                Rs(s, (0, m.VI)(e.withName("VscodeGitExecutor.exec"), {
                    attributes: {
                        "git.cwd": t,
                        "git.args": r,
                        "git.caller": n?.caller
                    }
                }));
                return await this.vscodeGitExtension.rawGit.exec(t, r, n);
            } catch (e) {
                var o = e, i = !0;
            } finally{
                Bs(s, o, i);
            }
        }
    }
    class Ms {
        constructor(e){
            this.spawnerPromise = e;
        }
        async exec(e, t, r, n) {
            var s = [];
            try {
                let c;
                var o = [];
                try {
                    Rs(o, (0, m.VI)(e.withName("GitCoreVscodeGitExecutor await git spawner")));
                    c = await this.spawnerPromise;
                } catch (e) {
                    var i = e, a = !0;
                } finally{
                    Bs(o, i, a);
                }
                if (void 0 === c) throw new l.YH2("Failed to execute git command because there is no available GitSpawner. Ensure there is a reachable git installation on the workspace system.");
                Rs(s, (0, m.VI)(e.withName("VscodeGitExecutor.exec"), {
                    attributes: {
                        "git.cwd": t,
                        "git.args": r,
                        "git.caller": n?.caller
                    }
                }));
                return await c.exec(t, r, n);
            } catch (e) {
                var c = e, u = !0;
            } finally{
                Bs(s, c, u);
            }
        }
    }
    var qs = require("./module-38669.js");
    var Ds = require("./module-64472.js");
    const Os = c.env.remoteName ? `lease_connection:${c.env.remoteName}` : "lease_connection:local";
    let Ns = "unknown";
    function Fs(e) {
        Ns = e;
    }
    function Us(e, t, r = "distribution", n) {
        try {
            const s = n?.some((e)=>e.startsWith("mcp_version:")), o = [
                Os,
                ...s ? [] : [
                    "mcp_version:snapshots"
                ],
                ...n ?? []
            ];
            "distribution" === r ? c.cursor.metricsDistribution({
                stat: e,
                value: t,
                tags: o
            }) : c.cursor.metricsIncrement({
                stat: e,
                value: t,
                tags: o
            });
        } catch  {}
    }
    function Ls(e, t, r, n) {
        return (0, m.uj)((r ?? (0, d.q6)()).withName(e), async (r, s)=>{
            const o = Date.now();
            s.setAttribute("mcp.op.name", e), s.setAttribute("mcp.lease.type", Ns), s.setAttribute("mcp.lease.connection", Os);
            try {
                const r = await Promise.resolve(t()), i = Date.now() - o;
                return s.setAttribute("mcp.op.duration_ms", String(i)), s.setAttribute("mcp.op.outcome", "success"), ks.gW.trace(`[mcp] ${e} completed outcome=success duration_ms=${i} lease_type=${Ns} ${Os}`), Us("mcp.ipc.duration_ms", i, "distribution", [
                    `name:${e}`,
                    "outcome:success",
                    ...n ?? []
                ]), Us("mcp.ipc.count", 1, "increment", [
                    `name:${e}`,
                    "outcome:success",
                    ...n ?? []
                ]), r;
            } catch (t) {
                const r = Date.now() - o;
                throw s.setAttribute("mcp.op.duration_ms", String(r)), s.setAttribute("mcp.op.outcome", "error"), ks.gW.error(`[mcp] ${e} completed outcome=error duration_ms=${r} lease_type=${Ns} ${Os}`, t), Us("mcp.ipc.duration_ms", r, "distribution", [
                    `name:${e}`,
                    "outcome:error",
                    ...n ?? []
                ]), Us("mcp.ipc.count", 1, "increment", [
                    `name:${e}`,
                    "outcome:error",
                    ...n ?? []
                ]), t;
            }
        });
    }
    function $s(e, t, r) {
        ks.gW.info(`[mcp] lease selected lease_type=${e} reason=${t} ${Os}`), (0, Ds.b)({
            subkey: "agent_exec",
            message: "MCP agent-exec lease selected",
            metadata: {
                event: "mcp_agent_exec_lease_selected",
                lease_type: e,
                lease_reason: t,
                lease_connection: Os,
                ...r
            }
        });
    }
    var Qs = require("./module-34175.js");
    function js(e, t) {
        const r = [], n = new Set;
        for (const s of t){
            n.add(s.serverIdentifier);
            const t = e.get(s.serverIdentifier);
            void 0 !== t && t === s.snapshotGeneration || r.push(s), e.set(s.serverIdentifier, s.snapshotGeneration);
        }
        for (const t of Array.from(e.keys()))n.has(t) || e.delete(t);
        return r;
    }
    var Gs = require("./module-15599.js");
    var Hs = require("./module-55677.js");
    class zs {
        constructor(e, t, r = []){
            this.tools = e, this.ctx = t, this.extraMetricTags = r;
        }
        async execute(e, t, r, n) {
            const s = this.tools.find((t)=>t.name === e);
            if (!s) throw new Hs.U$(e, this.tools.map((e)=>e.name));
            return Ls("workbench_toolset.execute", async ()=>{
                const e = n?.createProvider(s.providerIdentifier, s.toolName, r), o = e ? async (t)=>e.elicit({
                        message: t.message,
                        requestedSchema: t.requestedSchema
                    }) : void 0, { serializableContext: i, cancellationTokenSource: a, dispose: l } = (0, Gs.A)(this.ctx);
                try {
                    const e = await c.cursor.callMcpLeaseTool(s.clientKey, s.toolName, t, r, i, a.token, o, i.composerId);
                    return {
                        content: e.content,
                        isError: e.isError,
                        structuredContent: e.structuredContent
                    };
                } finally{
                    l();
                }
            }, this.ctx, this.extraMetricTags);
        }
        getTools() {
            return this.tools;
        }
    }
    const Ws = [
        "mcp_version:snapshots"
    ];
    class Vs {
        constructor(e, t){
            this.snapshot = e, this.serverIdentifier = e.serverIdentifier, this.serverName = e.serverName, this.config = function(e) {
                if (e) return e.command ? {
                    command: e.command,
                    args: e.args
                } : e.url ? {
                    url: e.url
                } : void 0;
            }(t);
        }
        async getTools(e) {
            return this.snapshot.tools.map((e)=>({
                    name: e.name,
                    description: e.description,
                    inputSchema: e.inputSchema,
                    outputSchema: e.outputSchema,
                    annotations: e.annotations
                }));
        }
        async callTool(e, t, r, n, s) {
            return Ls("snapshot_client.call_tool", async ()=>{
                const { serializableContext: o, cancellationTokenSource: i, dispose: a } = (0, Gs.A)(e);
                try {
                    const e = s ? async (e)=>s.elicit({
                            message: e.message,
                            requestedSchema: e.requestedSchema
                        }) : void 0, a = await c.cursor.callMcpLeaseTool(this.serverIdentifier, t, r, n, o, i.token, e, o.composerId);
                    return {
                        content: a.content,
                        isError: a.isError,
                        structuredContent: a.structuredContent
                    };
                } finally{
                    a();
                }
            }, e, Ws);
        }
        async getInstructions(e) {
            return this.snapshot.instructions ?? void 0;
        }
        async getState(e) {
            switch(this.snapshot.status){
                case "connected":
                case "degraded":
                    return {
                        kind: "ready"
                    };
                case "needsAuth":
                    return {
                        kind: "requires_authentication",
                        url: this.snapshot.statusDetail ?? "",
                        callback: async ()=>{}
                    };
                case "error":
                    return {
                        kind: "error",
                        message: this.snapshot.statusDetail
                    };
                default:
                    return {
                        kind: "loading"
                    };
            }
        }
        async listResources(e) {
            return {
                resources: this.snapshot.resources
            };
        }
        async readResource(e, t) {
            return Ls("snapshot_client.read_resource", async ()=>{
                const { serializableContext: r, cancellationTokenSource: n, dispose: s } = (0, Gs.A)(e);
                try {
                    return c.cursor.readMcpLeaseResource(this.serverIdentifier, t.uri, r, n.token);
                } finally{
                    s();
                }
            }, e, Ws);
        }
        async listPrompts(e) {
            return this.snapshot.prompts;
        }
        async getPrompt(e, t, r) {
            return Ls("snapshot_client.get_prompt", async ()=>{
                const { serializableContext: n, cancellationTokenSource: s, dispose: o } = (0, Gs.A)(e);
                try {
                    return c.cursor.getMcpLeasePrompt(this.serverIdentifier, t, r, n, s.token);
                } finally{
                    o();
                }
            }, e, Ws);
        }
    }
    class Ks {
        constructor(){
            this.changeListeners = new Set, this.snapshotLeaseProvider = new Ys, this.mergedNotifyFlush = !1, this.disposed = !1, this.leaseChangeDisposable = c.cursor.registerMcpLeaseChangeListener();
            const e = c.cursor.onDidChangeMcpLease((e)=>{
                this.serverConfigsPromise = void 0, this.scheduleMergedNotify(function(e) {
                    return void 0 === e ? {
                        serverIdentifiers: void 0,
                        reason: c.cursor.McpLeaseChangeReason.Unknown
                    } : {
                        serverIdentifiers: e.serverIdentifiers ? [
                            ...e.serverIdentifiers
                        ] : void 0,
                        reason: e.reason
                    };
                }(e));
            }), t = c.cursor.onDidChangeMcpSnapshots((e)=>{
                this.serverConfigsPromise = void 0, this.scheduleMergedNotify({
                    serverIdentifiers: e ? [
                        ...e
                    ] : void 0,
                    reason: c.cursor.McpLeaseChangeReason.Snapshots
                });
            }), r = this.leaseChangeDisposable.dispose.bind(this.leaseChangeDisposable);
            this.leaseChangeDisposable = {
                dispose: ()=>{
                    r(), e.dispose(), t.dispose();
                }
            };
        }
        get snapshotProvider() {
            return this.snapshotLeaseProvider;
        }
        scheduleMergedNotify(e) {
            this.disposed || (this.mergedNotifyPending = (0, l.sfj)(this.mergedNotifyPending, e), this.mergedNotifyFlush || (this.mergedNotifyFlush = !0, queueMicrotask(()=>{
                if (this.mergedNotifyFlush = !1, this.disposed) return;
                const e = this.mergedNotifyPending;
                this.mergedNotifyPending = void 0, void 0 !== e && this.fireDidChange(e);
            })));
        }
        onDidChange(e) {
            return this.changeListeners.add(e), {
                dispose: ()=>{
                    this.changeListeners.delete(e);
                }
            };
        }
        fireDidChange(e) {
            for (const t of this.changeListeners)try {
                t(e);
            } catch (e) {
                ks.gW.error("Error in MCP snapshot change listener", e);
            }
        }
        getServerConfigs(e) {
            if (!this.serverConfigsPromise) {
                let t;
                t = (async ()=>{
                    const r = new Map;
                    try {
                        const t = await c.cursor.getMcpLeaseServers(e);
                        for (const e of t)e.config && r.set(e.identifier, e.config);
                    } catch (e) {
                        Us("mcp.snapshot.server_config_resolve_error", 1, "increment"), ks.gW.error("Failed to resolve MCP server configs for hook payloads", e), this.serverConfigsPromise === t && (this.serverConfigsPromise = void 0);
                    }
                    return r;
                })(), this.serverConfigsPromise = t;
            }
            return this.serverConfigsPromise;
        }
        async getClients(e) {
            return Ls("snapshot_lease.get_clients", async ()=>{
                const t = (0, Gs.A)(e);
                try {
                    const [e, r] = await Promise.all([
                        c.cursor.getMcpSnapshots(t.serializableContext),
                        this.getServerConfigs(t.serializableContext)
                    ]), n = {};
                    for (const t of e)n[t.serverIdentifier] = new Vs(t, r.get(t.serverIdentifier));
                    return n;
                } finally{
                    t.dispose();
                }
            }, e, Ws);
        }
        async getClient(e, t) {
            return Ls("snapshot_lease.get_client", async ()=>{
                const r = (0, Gs.A)(e);
                try {
                    const [e, n] = await Promise.all([
                        c.cursor.getMcpSnapshot(t, r.serializableContext),
                        this.getServerConfigs(r.serializableContext)
                    ]);
                    let s = e;
                    if (!s) {
                        s = (await c.cursor.getMcpSnapshots(r.serializableContext)).find((e)=>e.serverName === t);
                    }
                    return s ? new Vs(s, n.get(s.serverIdentifier)) : void 0;
                } finally{
                    r.dispose();
                }
            }, e, Ws);
        }
        async getInstructions(e) {
            return Ls("snapshot_lease.get_instructions", async ()=>{
                const { serializableContext: t, dispose: r } = (0, Gs.A)(e);
                try {
                    return (await c.cursor.getMcpSnapshots(t)).filter((e)=>void 0 !== e.instructions && e.instructions.trim().length > 0).map((e)=>new Qs.I0({
                            serverName: e.serverName,
                            instructions: e.instructions.trim(),
                            serverIdentifier: e.serverIdentifier
                        }));
                } finally{
                    r();
                }
            }, e, Ws);
        }
        async getTools(e) {
            return Ls("snapshot_lease.get_tools", async ()=>{
                const { serializableContext: t, dispose: r } = (0, Gs.A)(e);
                try {
                    const e = await c.cursor.getMcpSnapshotTools(t), r = [];
                    for (const t of e)for (const e of t.tools)r.push({
                        name: `${t.serverIdentifier}-${e.name}`,
                        description: e.description,
                        inputSchema: e.inputSchema,
                        outputSchema: e.outputSchema,
                        clientKey: t.serverIdentifier,
                        providerIdentifier: t.serverName,
                        plugin: t.plugin,
                        marketplace: t.marketplace,
                        pluginId: t.pluginId,
                        marketplaceId: t.marketplaceId,
                        toolName: e.name,
                        ..."internal" === t.source ? {
                            source: "internal"
                        } : {}
                    });
                    return r;
                } finally{
                    r();
                }
            }, e, Ws);
        }
        async getToolsForServers(e, t) {
            const r = new Set(t);
            return (await this.getTools(e)).filter((e)=>r.has(e.clientKey));
        }
        async getToolSet(e) {
            const t = await this.getTools(e);
            return new zs(t, e, Ws);
        }
        dispose() {
            this.disposed || (this.disposed = !0, this.serverConfigsPromise = void 0, this.leaseChangeDisposable && (this.leaseChangeDisposable.dispose(), this.leaseChangeDisposable = void 0), this.changeListeners.clear());
        }
    }
    class Ys {
        constructor(){
            this.knownGenerations = new Map;
        }
        async getSnapshot(e, t) {
            return Ls("snapshot_provider.get_snapshot", async ()=>{
                const r = (0, Gs.A)(e);
                try {
                    const e = await c.cursor.getMcpSnapshot(t, r.serializableContext);
                    return e ? this.knownGenerations.set(e.serverIdentifier, e.snapshotGeneration) : this.knownGenerations.delete(t), e ? Zs(e) : void 0;
                } finally{
                    r.dispose();
                }
            }, e, Ws);
        }
        async getAllSnapshots(e) {
            return Ls("snapshot_provider.get_all_snapshots", async ()=>{
                const t = (0, Gs.A)(e);
                try {
                    const e = await c.cursor.getMcpSnapshots(t.serializableContext);
                    return js(this.knownGenerations, e), e.map(Zs);
                } finally{
                    t.dispose();
                }
            }, e, Ws);
        }
        onDidChange(e) {
            return c.cursor.onDidChangeMcpSnapshots(async ()=>{
                const t = Date.now(), r = await c.cursor.getMcpSnapshots(), n = Date.now() - t, s = js(this.knownGenerations, r);
                Us("mcp.ipc.duration_ms", n, "distribution", [
                    "name:snapshot_provider.notify_pull",
                    "outcome:success",
                    "mcp_version:snapshots"
                ]), Us("mcp.ipc.count", 1, "increment", [
                    "name:snapshot_provider.notify_pull",
                    "outcome:success",
                    "mcp_version:snapshots"
                ]), Us("mcp.snapshot.notify_pull_changed_count", s.length, "distribution", Ws);
                for (const t of s)e(Zs(t));
            });
        }
    }
    function Zs(e) {
        return {
            serverIdentifier: e.serverIdentifier,
            serverName: e.serverName,
            plugin: e.plugin,
            marketplace: e.marketplace,
            pluginId: e.pluginId,
            marketplaceId: e.marketplaceId,
            status: e.status,
            statusDetail: e.statusDetail,
            tools: e.tools.map((e)=>({
                    name: e.name,
                    description: e.description,
                    inputSchema: e.inputSchema,
                    outputSchema: e.outputSchema,
                    annotations: e.annotations
                })),
            resources: e.resources,
            prompts: e.prompts,
            instructions: e.instructions,
            snapshotGeneration: e.snapshotGeneration
        };
    }
    const Xs = [
        "mcp_version:vscode_lease"
    ];
    class eo {
        constructor(){
            this.changeListeners = new Set, this.mainThreadLeaseRegistration = c.cursor.registerMcpLeaseChangeListener(), this.mcpLeasePromise = (async ()=>{
                const e = c.extensions.getExtension("anysphere.cursor-mcp");
                if (!e) throw new Error("cursor-mcp extension is not installed or not available");
                e.isActive || await e.activate();
                const t = e.exports;
                if (!t) throw new Error("cursor-mcp extension API is not available");
                const r = t.getMcpLease();
                return this.leaseChangeDisposable = r.onDidChange((e)=>{
                    this.fireDidChange(e);
                }), r;
            })();
        }
        onDidChange(e) {
            return this.changeListeners.add(e), {
                dispose: ()=>{
                    this.changeListeners.delete(e);
                }
            };
        }
        fireDidChange(e) {
            for (const t of this.changeListeners)try {
                t(e);
            } catch (e) {
                ks.gW.error("Error in MCP change listener", e);
            }
        }
        async getMcpLease() {
            return this.mcpLeasePromise;
        }
        async getClients(e) {
            return Ls("vscode_lease.get_clients", async ()=>(await this.getMcpLease()).getClients(e), e, Xs);
        }
        async getClient(e, t) {
            return Ls("vscode_lease.get_client", async ()=>(await this.getMcpLease()).getClient(e, t), e, Xs);
        }
        async getInstructions(e) {
            return Ls("vscode_lease.get_instructions", async ()=>(await this.getMcpLease()).getInstructions(e), e, Xs);
        }
        async getTools(e) {
            return Ls("vscode_lease.get_tools", async ()=>(await this.getMcpLease()).getTools(e), e, Xs);
        }
        async getToolsForServers(e, t) {
            return Ls("vscode_lease.get_tools_for_servers", async ()=>{
                const r = await this.getMcpLease();
                if ("getToolsForServers" in r && "function" == typeof r.getToolsForServers) return r.getToolsForServers(e, t);
                const n = new Set(t);
                return (await r.getTools(e)).filter((e)=>n.has(e.clientKey));
            }, e, Xs);
        }
        async getToolSet(e) {
            return Ls("vscode_lease.get_tool_set", async ()=>(await this.getMcpLease()).getToolSet(e), e, Xs);
        }
        dispose() {
            this.leaseChangeDisposable && (this.leaseChangeDisposable.dispose(), this.leaseChangeDisposable = void 0), this.mainThreadLeaseRegistration.dispose(), this.changeListeners.clear();
        }
    }
    function to(e) {
        if (!(0, l.anv)(e)) return !1;
        const t = e;
        return "function" == typeof t.dispose && (void 0 === t.snapshotProvider || (0, l.Yg2)(t.snapshotProvider));
    }
    var ro = (e, t)=>(t = Symbol[e]) ? t : Symbol.for("Symbol." + e), no = (e)=>{
        throw TypeError(e);
    }, so = (e, t, r)=>{
        var n, s;
        null != t ? ("object" != typeof t && "function" != typeof t && no("Object expected"), r && (n = t[ro("asyncDispose")]), void 0 === n && (n = t[ro("dispose")], r && (s = n)), "function" != typeof n && no("Object not disposable"), s && (n = function() {
            try {
                s.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        }), e.push([
            r,
            n,
            t
        ])) : r && e.push([
            r
        ]);
        return t;
    }, oo = (e, t, r)=>{
        var n = "function" == typeof SuppressedError ? SuppressedError : function(e, t, r, n) {
            return (n = Error(r)).name = "SuppressedError", n.error = e, n.suppressed = t, n;
        }, s = (e)=>t = r ? new n(e, t, "An error was suppressed during disposal") : (r = !0, e), o = (n)=>{
            for(; n = e.pop();)try {
                var i = n[1] && n[1].call(n[2]);
                if (n[0]) return Promise.resolve(i).then(o, (e)=>(s(e), o()));
            } catch (e) {
                s(e);
            }
            if (r) throw t;
        };
        return o();
    };
    function io(e) {
        return Fs("snapshot"), Us("mcp.agent_exec.lease_selected", 1, "increment", [
            "lease_type:snapshot",
            `reason:${e}`
        ]), $s("snapshot", e), new Ks;
    }
    async function ao(e) {
        var t = [];
        try {
            const r = so(t, (0, m.VI)(e.withName("getVscodeMcpLease"))).span;
            if (void 0 === c.env.remoteName) return r.setAttribute("mcp.lease.type", "snapshot"), r.setAttribute("mcp.lease.reason", "local"), io("local");
            try {
                const e = await async function() {
                    const e = c.extensions.getExtension("anysphere.cursor-mcp");
                    if (e && (e.isActive || await e.activate(), e.exports)) return new eo;
                }();
                if (e) return Fs("vscode"), r.setAttribute("mcp.lease.type", "vscode"), Us("mcp.agent_exec.lease_selected", 1, "increment", [
                    "lease_type:vscode"
                ]), $s("vscode", "vscode_lease_available", {
                    shared_process_gate_enabled: !1
                }), e;
            } catch  {}
            return r.setAttribute("mcp.lease.type", "snapshot"), r.setAttribute("mcp.lease.reason", "vscode_lease_unavailable"), io("vscode_lease_unavailable");
        } catch (e) {
            var r = e, n = !0;
        } finally{
            oo(t, r, n);
        }
    }
    var co = require("./module-71385.js");
    const lo = "cursorAgentHost.durableTaskInvocation.v1.";
    function uo(e, t) {
        const r = new Map, n = async (e, t)=>{
            const n = r.get(e) ?? Promise.resolve();
            let s;
            const o = new Promise((e)=>{
                s = e;
            });
            r.set(e, o), await n;
            try {
                return await t();
            } finally{
                s(), r.get(e) === o && r.delete(e);
            }
        }, s = (t)=>(function(e) {
                if ("object" != typeof e || null === e || !("kind" in e) || !("childSessionId" in e) || "string" != typeof e.childSessionId) return;
                if ("started" === e.kind || "checkpointed" === e.kind) return {
                    kind: e.kind,
                    childSessionId: e.childSessionId
                };
                if ("completed" === e.kind && "outcome" in e && "object" == typeof e.outcome && null !== e.outcome && "status" in e.outcome && ("completed" === e.outcome.status || "background" === e.outcome.status)) return {
                    kind: "completed",
                    childSessionId: e.childSessionId,
                    outcome: e.outcome
                };
                return;
            })(e.get(t));
        return {
            async claim (r) {
                const o = po(r);
                return n(o, async ()=>{
                    const n = s(o);
                    if (void 0 !== n) {
                        if (!1 !== ("started" === n.kind || void 0 === t || await t({
                            parentSessionId: r.parentSessionId,
                            rootSessionId: r.rootSessionId,
                            parentToolCallId: r.parentToolCallId,
                            childSessionId: n.childSessionId
                        }))) return {
                            kind: "existing",
                            invocation: n
                        };
                    }
                    const i = {
                        kind: "started",
                        childSessionId: r.proposedChildSessionId
                    };
                    return await e.update(o, i), {
                        kind: "claimed",
                        invocation: i
                    };
                });
            },
            async markCheckpointed (t) {
                const r = po(t);
                await n(r, async ()=>{
                    const n = s(r);
                    "started" === n?.kind && n.childSessionId === t.childSessionId && await e.update(r, {
                        kind: "checkpointed",
                        childSessionId: n.childSessionId
                    });
                });
            },
            async markCompleted (t) {
                const r = po(t);
                await n(r, async ()=>{
                    const n = s(r);
                    void 0 !== n && "completed" !== n.kind && n.childSessionId === t.childSessionId && await e.update(r, {
                        kind: "completed",
                        childSessionId: n.childSessionId,
                        outcome: t.outcome
                    });
                });
            }
        };
    }
    function po(e) {
        const t = (0, o.createHash)("sha256").update(e.parentSessionId).update("\0").update(e.parentToolCallId).digest("hex");
        return `${lo}${t}`;
    }
    function mo(e) {
        return {
            remoteName: e.remoteName
        };
    }
    function ho(e) {
        return "string" == typeof e && e.length > 0;
    }
    function fo(e) {
        return {
            kind: "external",
            agentTransport: e.createExternal(e.connectTransport),
            ...void 0 === e.agentBackendUrl ? {} : {
                agentBackendUrl: e.agentBackendUrl
            }
        };
    }
    const go = "remoteInferenceRoute", yo = "cursorAgentHost.remoteInferenceRoute", wo = "auto";
    var vo = require("./module-1444.js");
    var _o = require("./module-28634.js"), Ao = require("./module-61933.js"), So = require("./module-90212.js"), bo = require("./module-95595.js");
    Object.freeze({
        status: "aborted"
    });
    function Eo(e, t, r) {
        function n(r, n) {
            if (r._zod || Object.defineProperty(r, "_zod", {
                value: {
                    def: n,
                    constr: i,
                    traits: new Set
                },
                enumerable: !1
            }), r._zod.traits.has(e)) return;
            r._zod.traits.add(e), t(r, n);
            const s = i.prototype, o = Object.keys(s);
            for(let e = 0; e < o.length; e++){
                const t = o[e];
                t in r || (r[t] = s[t].bind(r));
            }
        }
        const s = r?.Parent ?? Object;
        class o extends s {
        }
        function i(e) {
            var t;
            const s = r?.Parent ? new o : this;
            n(s, e), (t = s._zod).deferred ?? (t.deferred = []);
            for (const e of s._zod.deferred)e();
            return s;
        }
        return Object.defineProperty(o, "name", {
            value: e
        }), Object.defineProperty(i, "init", {
            value: n
        }), Object.defineProperty(i, Symbol.hasInstance, {
            value: (t)=>!!(r?.Parent && t instanceof r.Parent) || t?._zod?.traits?.has(e)
        }), Object.defineProperty(i, "name", {
            value: e
        }), i;
    }
    Symbol("zod_brand");
    class Io extends Error {
        constructor(){
            super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
        }
    }
    class Co extends Error {
        constructor(e){
            super(`Encountered unidirectional transform during encode: ${e}`), this.name = "ZodEncodeError";
        }
    }
    const ko = {};
    function xo(e) {
        return e && Object.assign(ko, e), ko;
    }
    function To(e) {
        const t = Object.values(e).filter((e)=>"number" == typeof e);
        return Object.entries(e).filter(([e, r])=>-1 === t.indexOf(+e)).map(([e, t])=>t);
    }
    function Ro(e, t = "|") {
        return e.map((e)=>Ko(e)).join(t);
    }
    function Bo(e, t) {
        return "bigint" == typeof t ? t.toString() : t;
    }
    function Po(e) {
        return {
            get value () {
                {
                    const t = e();
                    return Object.defineProperty(this, "value", {
                        value: t
                    }), t;
                }
            }
        };
    }
    function Jo(e) {
        return null == e;
    }
    function Mo(e) {
        const t = e.startsWith("^") ? 1 : 0, r = e.endsWith("$") ? e.length - 1 : e.length;
        return e.slice(t, r);
    }
    const qo = Symbol("evaluating");
    function Do(e, t, r) {
        let n;
        Object.defineProperty(e, t, {
            get () {
                if (n !== qo) return void 0 === n && (n = qo, n = r()), n;
            },
            set (r) {
                Object.defineProperty(e, t, {
                    value: r
                });
            },
            configurable: !0
        });
    }
    function Oo(e, t, r) {
        Object.defineProperty(e, t, {
            value: r,
            writable: !0,
            enumerable: !0,
            configurable: !0
        });
    }
    function No(...e) {
        const t = {};
        for (const r of e){
            const e = Object.getOwnPropertyDescriptors(r);
            Object.assign(t, e);
        }
        return Object.defineProperties({}, t);
    }
    function Fo(e) {
        return JSON.stringify(e);
    }
    const Uo = "captureStackTrace" in Error ? Error.captureStackTrace : (...e)=>{};
    function Lo(e) {
        return "object" == typeof e && null !== e && !Array.isArray(e);
    }
    const $o = Po(()=>{
        if ("undefined" != typeof navigator && navigator?.userAgent?.includes("Cloudflare")) return !1;
        try {
            return new Function(""), !0;
        } catch (e) {
            return !1;
        }
    });
    function Qo(e) {
        if (!1 === Lo(e)) return !1;
        const t = e.constructor;
        if (void 0 === t) return !0;
        if ("function" != typeof t) return !0;
        const r = t.prototype;
        return !1 !== Lo(r) && !1 !== Object.prototype.hasOwnProperty.call(r, "isPrototypeOf");
    }
    function jo(e) {
        return Qo(e) ? {
            ...e
        } : Array.isArray(e) ? [
            ...e
        ] : e;
    }
    const Go = new Set([
        "string",
        "number",
        "symbol"
    ]), Ho = new Set([
        "string",
        "number",
        "bigint",
        "boolean",
        "symbol",
        "undefined"
    ]);
    function zo(e) {
        return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    function Wo(e, t, r) {
        const n = new e._zod.constr(t ?? e._zod.def);
        return t && !r?.parent || (n._zod.parent = e), n;
    }
    function Vo(e) {
        const t = e;
        if (!t) return {};
        if ("string" == typeof t) return {
            error: ()=>t
        };
        if (void 0 !== t?.message) {
            if (void 0 !== t?.error) throw new Error("Cannot specify both `message` and `error` params");
            t.error = t.message;
        }
        return delete t.message, "string" == typeof t.error ? {
            ...t,
            error: ()=>t.error
        } : t;
    }
    function Ko(e) {
        return "bigint" == typeof e ? e.toString() + "n" : "string" == typeof e ? `"${e}"` : `${e}`;
    }
    const Yo = {
        safeint: [
            Number.MIN_SAFE_INTEGER,
            Number.MAX_SAFE_INTEGER
        ],
        int32: [
            -2147483648,
            2147483647
        ],
        uint32: [
            0,
            4294967295
        ],
        float32: [
            -34028234663852886e22,
            34028234663852886e22
        ],
        float64: [
            -Number.MAX_VALUE,
            Number.MAX_VALUE
        ]
    }, Zo = {
        int64: [
            BigInt("-9223372036854775808"),
            BigInt("9223372036854775807")
        ],
        uint64: [
            BigInt(0),
            BigInt("18446744073709551615")
        ]
    };
    function Xo(e, t = 0) {
        if (!0 === e.aborted) return !0;
        for(let r = t; r < e.issues.length; r++)if (!0 !== e.issues[r]?.continue) return !0;
        return !1;
    }
    function ei(e, t) {
        return t.map((t)=>{
            var r;
            return (r = t).path ?? (r.path = []), t.path.unshift(e), t;
        });
    }
    function ti(e) {
        return "string" == typeof e ? e : e?.message;
    }
    function ri(e, t, r) {
        const n = {
            ...e,
            path: e.path ?? []
        };
        if (!e.message) {
            const s = ti(e.inst?._zod.def?.error?.(e)) ?? ti(t?.error?.(e)) ?? ti(r.customError?.(e)) ?? ti(r.localeError?.(e)) ?? "Invalid input";
            n.message = s;
        }
        return delete n.inst, delete n.continue, t?.reportInput || delete n.input, n;
    }
    function ni(e) {
        return e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof File ? "file" : "unknown";
    }
    function si(e) {
        return Array.isArray(e) ? "array" : "string" == typeof e ? "string" : "unknown";
    }
    function oi(...e) {
        const [t, r, n] = e;
        return "string" == typeof t ? {
            message: t,
            code: "custom",
            input: r,
            inst: n
        } : {
            ...t
        };
    }
    const ii = (e, t)=>{
        e.name = "$ZodError", Object.defineProperty(e, "_zod", {
            value: e._zod,
            enumerable: !1
        }), Object.defineProperty(e, "issues", {
            value: t,
            enumerable: !1
        }), e.message = JSON.stringify(t, Bo, 2), Object.defineProperty(e, "toString", {
            value: ()=>e.message,
            enumerable: !1
        });
    }, ai = Eo("$ZodError", ii), ci = Eo("$ZodError", ii, {
        Parent: Error
    });
    const li = (e)=>(t, r, n, s)=>{
            const o = n ? Object.assign(n, {
                async: !1
            }) : {
                async: !1
            }, i = t._zod.run({
                value: r,
                issues: []
            }, o);
            if (i instanceof Promise) throw new Io;
            if (i.issues.length) {
                const t = new (s?.Err ?? e)(i.issues.map((e)=>ri(e, o, xo())));
                throw Uo(t, s?.callee), t;
            }
            return i.value;
        }, ui = li(ci), di = (e)=>async (t, r, n, s)=>{
            const o = n ? Object.assign(n, {
                async: !0
            }) : {
                async: !0
            };
            let i = t._zod.run({
                value: r,
                issues: []
            }, o);
            if (i instanceof Promise && (i = await i), i.issues.length) {
                const t = new (s?.Err ?? e)(i.issues.map((e)=>ri(e, o, xo())));
                throw Uo(t, s?.callee), t;
            }
            return i.value;
        }, pi = di(ci), mi = (e)=>(t, r, n)=>{
            const s = n ? {
                ...n,
                async: !1
            } : {
                async: !1
            }, o = t._zod.run({
                value: r,
                issues: []
            }, s);
            if (o instanceof Promise) throw new Io;
            return o.issues.length ? {
                success: !1,
                error: new (e ?? ai)(o.issues.map((e)=>ri(e, s, xo())))
            } : {
                success: !0,
                data: o.value
            };
        }, hi = mi(ci), fi = (e)=>async (t, r, n)=>{
            const s = n ? Object.assign(n, {
                async: !0
            }) : {
                async: !0
            };
            let o = t._zod.run({
                value: r,
                issues: []
            }, s);
            return o instanceof Promise && (o = await o), o.issues.length ? {
                success: !1,
                error: new e(o.issues.map((e)=>ri(e, s, xo())))
            } : {
                success: !0,
                data: o.value
            };
        }, gi = fi(ci), yi = (e)=>(t, r, n)=>{
            const s = n ? Object.assign(n, {
                direction: "backward"
            }) : {
                direction: "backward"
            };
            return li(e)(t, r, s);
        }, wi = (e)=>(t, r, n)=>li(e)(t, r, n), vi = (e)=>async (t, r, n)=>{
            const s = n ? Object.assign(n, {
                direction: "backward"
            }) : {
                direction: "backward"
            };
            return di(e)(t, r, s);
        }, _i = (e)=>async (t, r, n)=>di(e)(t, r, n), Ai = (e)=>(t, r, n)=>{
            const s = n ? Object.assign(n, {
                direction: "backward"
            }) : {
                direction: "backward"
            };
            return mi(e)(t, r, s);
        }, Si = (e)=>(t, r, n)=>mi(e)(t, r, n), bi = (e)=>async (t, r, n)=>{
            const s = n ? Object.assign(n, {
                direction: "backward"
            }) : {
                direction: "backward"
            };
            return fi(e)(t, r, s);
        }, Ei = (e)=>async (t, r, n)=>fi(e)(t, r, n), Ii = /^[cC][^\s-]{8,}$/, Ci = /^[0-9a-z]+$/, ki = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, xi = /^[0-9a-vA-V]{20}$/, Ti = /^[A-Za-z0-9]{27}$/, Ri = /^[a-zA-Z0-9_-]{21}$/, Bi = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, Pi = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, Ji = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, Mi = (e)=>e ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, qi = Mi(4), Di = Mi(6), Oi = Mi(7), Ni = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, Fi = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, Ui = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, Li = /^[^\s@"]{1,64}@[^\s@]{1,255}$/u, $i = Li, Qi = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, ji = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
    function Gi() {
        return new RegExp(ji, "u");
    }
    const Hi = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, zi = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, Wi = (e)=>{
        const t = zo(e ?? ":");
        return new RegExp(`^(?:[0-9A-F]{2}${t}){5}[0-9A-F]{2}$|^(?:[0-9a-f]{2}${t}){5}[0-9a-f]{2}$`);
    }, Vi = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, Ki = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Yi = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, Zi = /^[A-Za-z0-9_-]*$/, Xi = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/, ea = /^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/, ta = /^\+[1-9]\d{6,14}$/, ra = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", na = new RegExp(`^${ra}$`);
    function sa(e) {
        const t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
        return "number" == typeof e.precision ? -1 === e.precision ? `${t}` : 0 === e.precision ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
    }
    function oa(e) {
        return new RegExp(`^${sa(e)}$`);
    }
    function ia(e) {
        const t = sa({
            precision: e.precision
        }), r = [
            "Z"
        ];
        e.local && r.push(""), e.offset && r.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
        const n = `${t}(?:${r.join("|")})`;
        return new RegExp(`^${ra}T(?:${n})$`);
    }
    const aa = (e)=>new RegExp(`^${e ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}` : "[\\s\\S]*"}$`), ca = /^-?\d+n?$/, la = /^-?\d+$/, ua = /^-?\d+(?:\.\d+)?$/, da = /^(?:true|false)$/i, pa = /^null$/i, ma = /^undefined$/i, ha = /^[^A-Z]*$/, fa = /^[^a-z]*$/, ga = /^[0-9a-fA-F]*$/;
    function ya(e, t) {
        return new RegExp(`^[A-Za-z0-9+/]{${e}}${t}$`);
    }
    function wa(e) {
        return new RegExp(`^[A-Za-z0-9_-]{${e}}$`);
    }
    const va = /^[0-9a-fA-F]{32}$/, _a = ya(22, "=="), Aa = wa(22), Sa = /^[0-9a-fA-F]{40}$/, ba = ya(27, "="), Ea = wa(27), Ia = /^[0-9a-fA-F]{64}$/, Ca = ya(43, "="), ka = wa(43), xa = /^[0-9a-fA-F]{96}$/, Ta = ya(64, ""), Ra = wa(64), Ba = /^[0-9a-fA-F]{128}$/, Pa = ya(86, "=="), Ja = wa(86), Ma = Eo("$ZodCheck", (e, t)=>{
        var r;
        e._zod ?? (e._zod = {}), e._zod.def = t, (r = e._zod).onattach ?? (r.onattach = []);
    }), qa = {
        number: "number",
        bigint: "bigint",
        object: "date"
    }, Da = Eo("$ZodCheckLessThan", (e, t)=>{
        Ma.init(e, t);
        const r = qa[typeof t.value];
        e._zod.onattach.push((e)=>{
            const r = e._zod.bag, n = (t.inclusive ? r.maximum : r.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
            t.value < n && (t.inclusive ? r.maximum = t.value : r.exclusiveMaximum = t.value);
        }), e._zod.check = (n)=>{
            (t.inclusive ? n.value <= t.value : n.value < t.value) || n.issues.push({
                origin: r,
                code: "too_big",
                maximum: "object" == typeof t.value ? t.value.getTime() : t.value,
                input: n.value,
                inclusive: t.inclusive,
                inst: e,
                continue: !t.abort
            });
        };
    }), Oa = Eo("$ZodCheckGreaterThan", (e, t)=>{
        Ma.init(e, t);
        const r = qa[typeof t.value];
        e._zod.onattach.push((e)=>{
            const r = e._zod.bag, n = (t.inclusive ? r.minimum : r.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
            t.value > n && (t.inclusive ? r.minimum = t.value : r.exclusiveMinimum = t.value);
        }), e._zod.check = (n)=>{
            (t.inclusive ? n.value >= t.value : n.value > t.value) || n.issues.push({
                origin: r,
                code: "too_small",
                minimum: "object" == typeof t.value ? t.value.getTime() : t.value,
                input: n.value,
                inclusive: t.inclusive,
                inst: e,
                continue: !t.abort
            });
        };
    }), Na = Eo("$ZodCheckMultipleOf", (e, t)=>{
        Ma.init(e, t), e._zod.onattach.push((e)=>{
            var r;
            (r = e._zod.bag).multipleOf ?? (r.multipleOf = t.value);
        }), e._zod.check = (r)=>{
            if (typeof r.value != typeof t.value) throw new Error("Cannot mix number and bigint in multiple_of check.");
            ("bigint" == typeof r.value ? r.value % t.value === BigInt(0) : 0 === function(e, t) {
                const r = (e.toString().split(".")[1] || "").length, n = t.toString();
                let s = (n.split(".")[1] || "").length;
                if (0 === s && /\d?e-\d?/.test(n)) {
                    const e = n.match(/\d?e-(\d?)/);
                    e?.[1] && (s = Number.parseInt(e[1]));
                }
                const o = r > s ? r : s;
                return Number.parseInt(e.toFixed(o).replace(".", "")) % Number.parseInt(t.toFixed(o).replace(".", "")) / 10 ** o;
            }(r.value, t.value)) || r.issues.push({
                origin: typeof r.value,
                code: "not_multiple_of",
                divisor: t.value,
                input: r.value,
                inst: e,
                continue: !t.abort
            });
        };
    }), Fa = Eo("$ZodCheckNumberFormat", (e, t)=>{
        Ma.init(e, t), t.format = t.format || "float64";
        const r = t.format?.includes("int"), n = r ? "int" : "number", [s, o] = Yo[t.format];
        e._zod.onattach.push((e)=>{
            const n = e._zod.bag;
            n.format = t.format, n.minimum = s, n.maximum = o, r && (n.pattern = la);
        }), e._zod.check = (i)=>{
            const a = i.value;
            if (r) {
                if (!Number.isInteger(a)) return void i.issues.push({
                    expected: n,
                    format: t.format,
                    code: "invalid_type",
                    continue: !1,
                    input: a,
                    inst: e
                });
                if (!Number.isSafeInteger(a)) return void (a > 0 ? i.issues.push({
                    input: a,
                    code: "too_big",
                    maximum: Number.MAX_SAFE_INTEGER,
                    note: "Integers must be within the safe integer range.",
                    inst: e,
                    origin: n,
                    inclusive: !0,
                    continue: !t.abort
                }) : i.issues.push({
                    input: a,
                    code: "too_small",
                    minimum: Number.MIN_SAFE_INTEGER,
                    note: "Integers must be within the safe integer range.",
                    inst: e,
                    origin: n,
                    inclusive: !0,
                    continue: !t.abort
                }));
            }
            a < s && i.issues.push({
                origin: "number",
                input: a,
                code: "too_small",
                minimum: s,
                inclusive: !0,
                inst: e,
                continue: !t.abort
            }), a > o && i.issues.push({
                origin: "number",
                input: a,
                code: "too_big",
                maximum: o,
                inclusive: !0,
                inst: e,
                continue: !t.abort
            });
        };
    }), Ua = Eo("$ZodCheckBigIntFormat", (e, t)=>{
        Ma.init(e, t);
        const [r, n] = Zo[t.format];
        e._zod.onattach.push((e)=>{
            const s = e._zod.bag;
            s.format = t.format, s.minimum = r, s.maximum = n;
        }), e._zod.check = (s)=>{
            const o = s.value;
            o < r && s.issues.push({
                origin: "bigint",
                input: o,
                code: "too_small",
                minimum: r,
                inclusive: !0,
                inst: e,
                continue: !t.abort
            }), o > n && s.issues.push({
                origin: "bigint",
                input: o,
                code: "too_big",
                maximum: n,
                inclusive: !0,
                inst: e,
                continue: !t.abort
            });
        };
    }), La = Eo("$ZodCheckMaxSize", (e, t)=>{
        var r;
        Ma.init(e, t), (r = e._zod.def).when ?? (r.when = (e)=>{
            const t = e.value;
            return !Jo(t) && void 0 !== t.size;
        }), e._zod.onattach.push((e)=>{
            const r = e._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
            t.maximum < r && (e._zod.bag.maximum = t.maximum);
        }), e._zod.check = (r)=>{
            const n = r.value;
            n.size <= t.maximum || r.issues.push({
                origin: ni(n),
                code: "too_big",
                maximum: t.maximum,
                inclusive: !0,
                input: n,
                inst: e,
                continue: !t.abort
            });
        };
    }), $a = Eo("$ZodCheckMinSize", (e, t)=>{
        var r;
        Ma.init(e, t), (r = e._zod.def).when ?? (r.when = (e)=>{
            const t = e.value;
            return !Jo(t) && void 0 !== t.size;
        }), e._zod.onattach.push((e)=>{
            const r = e._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
            t.minimum > r && (e._zod.bag.minimum = t.minimum);
        }), e._zod.check = (r)=>{
            const n = r.value;
            n.size >= t.minimum || r.issues.push({
                origin: ni(n),
                code: "too_small",
                minimum: t.minimum,
                inclusive: !0,
                input: n,
                inst: e,
                continue: !t.abort
            });
        };
    }), Qa = Eo("$ZodCheckSizeEquals", (e, t)=>{
        var r;
        Ma.init(e, t), (r = e._zod.def).when ?? (r.when = (e)=>{
            const t = e.value;
            return !Jo(t) && void 0 !== t.size;
        }), e._zod.onattach.push((e)=>{
            const r = e._zod.bag;
            r.minimum = t.size, r.maximum = t.size, r.size = t.size;
        }), e._zod.check = (r)=>{
            const n = r.value, s = n.size;
            if (s === t.size) return;
            const o = s > t.size;
            r.issues.push({
                origin: ni(n),
                ...o ? {
                    code: "too_big",
                    maximum: t.size
                } : {
                    code: "too_small",
                    minimum: t.size
                },
                inclusive: !0,
                exact: !0,
                input: r.value,
                inst: e,
                continue: !t.abort
            });
        };
    }), ja = Eo("$ZodCheckMaxLength", (e, t)=>{
        var r;
        Ma.init(e, t), (r = e._zod.def).when ?? (r.when = (e)=>{
            const t = e.value;
            return !Jo(t) && void 0 !== t.length;
        }), e._zod.onattach.push((e)=>{
            const r = e._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
            t.maximum < r && (e._zod.bag.maximum = t.maximum);
        }), e._zod.check = (r)=>{
            const n = r.value;
            if (n.length <= t.maximum) return;
            const s = si(n);
            r.issues.push({
                origin: s,
                code: "too_big",
                maximum: t.maximum,
                inclusive: !0,
                input: n,
                inst: e,
                continue: !t.abort
            });
        };
    }), Ga = Eo("$ZodCheckMinLength", (e, t)=>{
        var r;
        Ma.init(e, t), (r = e._zod.def).when ?? (r.when = (e)=>{
            const t = e.value;
            return !Jo(t) && void 0 !== t.length;
        }), e._zod.onattach.push((e)=>{
            const r = e._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
            t.minimum > r && (e._zod.bag.minimum = t.minimum);
        }), e._zod.check = (r)=>{
            const n = r.value;
            if (n.length >= t.minimum) return;
            const s = si(n);
            r.issues.push({
                origin: s,
                code: "too_small",
                minimum: t.minimum,
                inclusive: !0,
                input: n,
                inst: e,
                continue: !t.abort
            });
        };
    }), Ha = Eo("$ZodCheckLengthEquals", (e, t)=>{
        var r;
        Ma.init(e, t), (r = e._zod.def).when ?? (r.when = (e)=>{
            const t = e.value;
            return !Jo(t) && void 0 !== t.length;
        }), e._zod.onattach.push((e)=>{
            const r = e._zod.bag;
            r.minimum = t.length, r.maximum = t.length, r.length = t.length;
        }), e._zod.check = (r)=>{
            const n = r.value, s = n.length;
            if (s === t.length) return;
            const o = si(n), i = s > t.length;
            r.issues.push({
                origin: o,
                ...i ? {
                    code: "too_big",
                    maximum: t.length
                } : {
                    code: "too_small",
                    minimum: t.length
                },
                inclusive: !0,
                exact: !0,
                input: r.value,
                inst: e,
                continue: !t.abort
            });
        };
    }), za = Eo("$ZodCheckStringFormat", (e, t)=>{
        var r, n;
        Ma.init(e, t), e._zod.onattach.push((e)=>{
            const r = e._zod.bag;
            r.format = t.format, t.pattern && (r.patterns ?? (r.patterns = new Set), r.patterns.add(t.pattern));
        }), t.pattern ? (r = e._zod).check ?? (r.check = (r)=>{
            t.pattern.lastIndex = 0, t.pattern.test(r.value) || r.issues.push({
                origin: "string",
                code: "invalid_format",
                format: t.format,
                input: r.value,
                ...t.pattern ? {
                    pattern: t.pattern.toString()
                } : {},
                inst: e,
                continue: !t.abort
            });
        }) : (n = e._zod).check ?? (n.check = ()=>{});
    }), Wa = Eo("$ZodCheckRegex", (e, t)=>{
        za.init(e, t), e._zod.check = (r)=>{
            t.pattern.lastIndex = 0, t.pattern.test(r.value) || r.issues.push({
                origin: "string",
                code: "invalid_format",
                format: "regex",
                input: r.value,
                pattern: t.pattern.toString(),
                inst: e,
                continue: !t.abort
            });
        };
    }), Va = Eo("$ZodCheckLowerCase", (e, t)=>{
        t.pattern ?? (t.pattern = ha), za.init(e, t);
    }), Ka = Eo("$ZodCheckUpperCase", (e, t)=>{
        t.pattern ?? (t.pattern = fa), za.init(e, t);
    }), Ya = Eo("$ZodCheckIncludes", (e, t)=>{
        Ma.init(e, t);
        const r = zo(t.includes), n = new RegExp("number" == typeof t.position ? `^.{${t.position}}${r}` : r);
        t.pattern = n, e._zod.onattach.push((e)=>{
            const t = e._zod.bag;
            t.patterns ?? (t.patterns = new Set), t.patterns.add(n);
        }), e._zod.check = (r)=>{
            r.value.includes(t.includes, t.position) || r.issues.push({
                origin: "string",
                code: "invalid_format",
                format: "includes",
                includes: t.includes,
                input: r.value,
                inst: e,
                continue: !t.abort
            });
        };
    }), Za = Eo("$ZodCheckStartsWith", (e, t)=>{
        Ma.init(e, t);
        const r = new RegExp(`^${zo(t.prefix)}.*`);
        t.pattern ?? (t.pattern = r), e._zod.onattach.push((e)=>{
            const t = e._zod.bag;
            t.patterns ?? (t.patterns = new Set), t.patterns.add(r);
        }), e._zod.check = (r)=>{
            r.value.startsWith(t.prefix) || r.issues.push({
                origin: "string",
                code: "invalid_format",
                format: "starts_with",
                prefix: t.prefix,
                input: r.value,
                inst: e,
                continue: !t.abort
            });
        };
    }), Xa = Eo("$ZodCheckEndsWith", (e, t)=>{
        Ma.init(e, t);
        const r = new RegExp(`.*${zo(t.suffix)}$`);
        t.pattern ?? (t.pattern = r), e._zod.onattach.push((e)=>{
            const t = e._zod.bag;
            t.patterns ?? (t.patterns = new Set), t.patterns.add(r);
        }), e._zod.check = (r)=>{
            r.value.endsWith(t.suffix) || r.issues.push({
                origin: "string",
                code: "invalid_format",
                format: "ends_with",
                suffix: t.suffix,
                input: r.value,
                inst: e,
                continue: !t.abort
            });
        };
    });
    function ec(e, t, r) {
        e.issues.length && t.issues.push(...ei(r, e.issues));
    }
    const tc = Eo("$ZodCheckProperty", (e, t)=>{
        Ma.init(e, t), e._zod.check = (e)=>{
            const r = t.schema._zod.run({
                value: e.value[t.property],
                issues: []
            }, {});
            if (r instanceof Promise) return r.then((r)=>ec(r, e, t.property));
            ec(r, e, t.property);
        };
    }), rc = Eo("$ZodCheckMimeType", (e, t)=>{
        Ma.init(e, t);
        const r = new Set(t.mime);
        e._zod.onattach.push((e)=>{
            e._zod.bag.mime = t.mime;
        }), e._zod.check = (n)=>{
            r.has(n.value.type) || n.issues.push({
                code: "invalid_value",
                values: t.mime,
                input: n.value.type,
                inst: e,
                continue: !t.abort
            });
        };
    }), nc = Eo("$ZodCheckOverwrite", (e, t)=>{
        Ma.init(e, t), e._zod.check = (e)=>{
            e.value = t.tx(e.value);
        };
    });
    class sc {
        constructor(e = []){
            this.content = [], this.indent = 0, this && (this.args = e);
        }
        indented(e) {
            this.indent += 1, e(this), this.indent -= 1;
        }
        write(e) {
            if ("function" == typeof e) return e(this, {
                execution: "sync"
            }), void e(this, {
                execution: "async"
            });
            const t = e.split("\n").filter((e)=>e), r = Math.min(...t.map((e)=>e.length - e.trimStart().length)), n = t.map((e)=>e.slice(r)).map((e)=>" ".repeat(2 * this.indent) + e);
            for (const e of n)this.content.push(e);
        }
        compile() {
            const e = Function, t = this?.args;
            return new e(...t, [
                ...(this?.content ?? [
                    ""
                ]).map((e)=>`  ${e}`)
            ].join("\n"));
        }
    }
    const oc = {
        major: 4,
        minor: 3,
        patch: 6
    }, ic = Eo("$ZodType", (e, t)=>{
        var r;
        e ?? (e = {}), e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = oc;
        const n = [
            ...e._zod.def.checks ?? []
        ];
        e._zod.traits.has("$ZodCheck") && n.unshift(e);
        for (const t of n)for (const r of t._zod.onattach)r(e);
        if (0 === n.length) (r = e._zod).deferred ?? (r.deferred = []), e._zod.deferred?.push(()=>{
            e._zod.run = e._zod.parse;
        });
        else {
            const t = (e, t, r)=>{
                let n, s = Xo(e);
                for (const o of t){
                    if (o._zod.def.when) {
                        if (!o._zod.def.when(e)) continue;
                    } else if (s) continue;
                    const t = e.issues.length, i = o._zod.check(e);
                    if (i instanceof Promise && !1 === r?.async) throw new Io;
                    if (n || i instanceof Promise) n = (n ?? Promise.resolve()).then(async ()=>{
                        await i;
                        e.issues.length !== t && (s || (s = Xo(e, t)));
                    });
                    else {
                        if (e.issues.length === t) continue;
                        s || (s = Xo(e, t));
                    }
                }
                return n ? n.then(()=>e) : e;
            }, r = (r, s, o)=>{
                if (Xo(r)) return r.aborted = !0, r;
                const i = t(s, n, o);
                if (i instanceof Promise) {
                    if (!1 === o.async) throw new Io;
                    return i.then((t)=>e._zod.parse(t, o));
                }
                return e._zod.parse(i, o);
            };
            e._zod.run = (s, o)=>{
                if (o.skipChecks) return e._zod.parse(s, o);
                if ("backward" === o.direction) {
                    const t = e._zod.parse({
                        value: s.value,
                        issues: []
                    }, {
                        ...o,
                        skipChecks: !0
                    });
                    return t instanceof Promise ? t.then((e)=>r(e, s, o)) : r(t, s, o);
                }
                const i = e._zod.parse(s, o);
                if (i instanceof Promise) {
                    if (!1 === o.async) throw new Io;
                    return i.then((e)=>t(e, n, o));
                }
                return t(i, n, o);
            };
        }
        Do(e, "~standard", ()=>({
                validate: (t)=>{
                    try {
                        const r = hi(e, t);
                        return r.success ? {
                            value: r.data
                        } : {
                            issues: r.error?.issues
                        };
                    } catch (r) {
                        return gi(e, t).then((e)=>e.success ? {
                                value: e.data
                            } : {
                                issues: e.error?.issues
                            });
                    }
                },
                vendor: "zod",
                version: 1
            }));
    }), ac = Eo("$ZodString", (e, t)=>{
        ic.init(e, t), e._zod.pattern = [
            ...e?._zod.bag?.patterns ?? []
        ].pop() ?? aa(e._zod.bag), e._zod.parse = (r, n)=>{
            if (t.coerce) try {
                r.value = String(r.value);
            } catch (n) {}
            return "string" == typeof r.value || r.issues.push({
                expected: "string",
                code: "invalid_type",
                input: r.value,
                inst: e
            }), r;
        };
    }), cc = Eo("$ZodStringFormat", (e, t)=>{
        za.init(e, t), ac.init(e, t);
    }), lc = Eo("$ZodGUID", (e, t)=>{
        t.pattern ?? (t.pattern = Ji), cc.init(e, t);
    }), uc = Eo("$ZodUUID", (e, t)=>{
        if (t.version) {
            const e = {
                v1: 1,
                v2: 2,
                v3: 3,
                v4: 4,
                v5: 5,
                v6: 6,
                v7: 7,
                v8: 8
            }[t.version];
            if (void 0 === e) throw new Error(`Invalid UUID version: "${t.version}"`);
            t.pattern ?? (t.pattern = Mi(e));
        } else t.pattern ?? (t.pattern = Mi());
        cc.init(e, t);
    }), dc = Eo("$ZodEmail", (e, t)=>{
        t.pattern ?? (t.pattern = Ni), cc.init(e, t);
    }), pc = Eo("$ZodURL", (e, t)=>{
        cc.init(e, t), e._zod.check = (r)=>{
            try {
                const n = r.value.trim(), s = new URL(n);
                return t.hostname && (t.hostname.lastIndex = 0, t.hostname.test(s.hostname) || r.issues.push({
                    code: "invalid_format",
                    format: "url",
                    note: "Invalid hostname",
                    pattern: t.hostname.source,
                    input: r.value,
                    inst: e,
                    continue: !t.abort
                })), t.protocol && (t.protocol.lastIndex = 0, t.protocol.test(s.protocol.endsWith(":") ? s.protocol.slice(0, -1) : s.protocol) || r.issues.push({
                    code: "invalid_format",
                    format: "url",
                    note: "Invalid protocol",
                    pattern: t.protocol.source,
                    input: r.value,
                    inst: e,
                    continue: !t.abort
                })), void (t.normalize ? r.value = s.href : r.value = n);
            } catch (n) {
                r.issues.push({
                    code: "invalid_format",
                    format: "url",
                    input: r.value,
                    inst: e,
                    continue: !t.abort
                });
            }
        };
    }), mc = Eo("$ZodEmoji", (e, t)=>{
        t.pattern ?? (t.pattern = Gi()), cc.init(e, t);
    }), hc = Eo("$ZodNanoID", (e, t)=>{
        t.pattern ?? (t.pattern = Ri), cc.init(e, t);
    }), fc = Eo("$ZodCUID", (e, t)=>{
        t.pattern ?? (t.pattern = Ii), cc.init(e, t);
    }), gc = Eo("$ZodCUID2", (e, t)=>{
        t.pattern ?? (t.pattern = Ci), cc.init(e, t);
    }), yc = Eo("$ZodULID", (e, t)=>{
        t.pattern ?? (t.pattern = ki), cc.init(e, t);
    }), wc = Eo("$ZodXID", (e, t)=>{
        t.pattern ?? (t.pattern = xi), cc.init(e, t);
    }), vc = Eo("$ZodKSUID", (e, t)=>{
        t.pattern ?? (t.pattern = Ti), cc.init(e, t);
    }), _c = Eo("$ZodISODateTime", (e, t)=>{
        t.pattern ?? (t.pattern = ia(t)), cc.init(e, t);
    }), Ac = Eo("$ZodISODate", (e, t)=>{
        t.pattern ?? (t.pattern = na), cc.init(e, t);
    }), Sc = Eo("$ZodISOTime", (e, t)=>{
        t.pattern ?? (t.pattern = oa(t)), cc.init(e, t);
    }), bc = Eo("$ZodISODuration", (e, t)=>{
        t.pattern ?? (t.pattern = Bi), cc.init(e, t);
    }), Ec = Eo("$ZodIPv4", (e, t)=>{
        t.pattern ?? (t.pattern = Hi), cc.init(e, t), e._zod.bag.format = "ipv4";
    }), Ic = Eo("$ZodIPv6", (e, t)=>{
        t.pattern ?? (t.pattern = zi), cc.init(e, t), e._zod.bag.format = "ipv6", e._zod.check = (r)=>{
            try {
                new URL(`http://[${r.value}]`);
            } catch  {
                r.issues.push({
                    code: "invalid_format",
                    format: "ipv6",
                    input: r.value,
                    inst: e,
                    continue: !t.abort
                });
            }
        };
    }), Cc = Eo("$ZodMAC", (e, t)=>{
        t.pattern ?? (t.pattern = Wi(t.delimiter)), cc.init(e, t), e._zod.bag.format = "mac";
    }), kc = Eo("$ZodCIDRv4", (e, t)=>{
        t.pattern ?? (t.pattern = Vi), cc.init(e, t);
    }), xc = Eo("$ZodCIDRv6", (e, t)=>{
        t.pattern ?? (t.pattern = Ki), cc.init(e, t), e._zod.check = (r)=>{
            const n = r.value.split("/");
            try {
                if (2 !== n.length) throw new Error;
                const [e, t] = n;
                if (!t) throw new Error;
                const r = Number(t);
                if (`${r}` !== t) throw new Error;
                if (r < 0 || r > 128) throw new Error;
                new URL(`http://[${e}]`);
            } catch  {
                r.issues.push({
                    code: "invalid_format",
                    format: "cidrv6",
                    input: r.value,
                    inst: e,
                    continue: !t.abort
                });
            }
        };
    });
    function Tc(e) {
        if ("" === e) return !0;
        if (e.length % 4 != 0) return !1;
        try {
            return atob(e), !0;
        } catch  {
            return !1;
        }
    }
    const Rc = Eo("$ZodBase64", (e, t)=>{
        t.pattern ?? (t.pattern = Yi), cc.init(e, t), e._zod.bag.contentEncoding = "base64", e._zod.check = (r)=>{
            Tc(r.value) || r.issues.push({
                code: "invalid_format",
                format: "base64",
                input: r.value,
                inst: e,
                continue: !t.abort
            });
        };
    });
    const Bc = Eo("$ZodBase64URL", (e, t)=>{
        t.pattern ?? (t.pattern = Zi), cc.init(e, t), e._zod.bag.contentEncoding = "base64url", e._zod.check = (r)=>{
            (function(e) {
                if (!Zi.test(e)) return !1;
                const t = e.replace(/[-_]/g, (e)=>"-" === e ? "+" : "/");
                return Tc(t.padEnd(4 * Math.ceil(t.length / 4), "="));
            })(r.value) || r.issues.push({
                code: "invalid_format",
                format: "base64url",
                input: r.value,
                inst: e,
                continue: !t.abort
            });
        };
    }), Pc = Eo("$ZodE164", (e, t)=>{
        t.pattern ?? (t.pattern = ta), cc.init(e, t);
    });
    const Jc = Eo("$ZodJWT", (e, t)=>{
        cc.init(e, t), e._zod.check = (r)=>{
            (function(e, t = null) {
                try {
                    const r = e.split(".");
                    if (3 !== r.length) return !1;
                    const [n] = r;
                    if (!n) return !1;
                    const s = JSON.parse(atob(n));
                    return !("typ" in s && "JWT" !== s?.typ || !s.alg || t && (!("alg" in s) || s.alg !== t));
                } catch  {
                    return !1;
                }
            })(r.value, t.alg) || r.issues.push({
                code: "invalid_format",
                format: "jwt",
                input: r.value,
                inst: e,
                continue: !t.abort
            });
        };
    }), Mc = Eo("$ZodCustomStringFormat", (e, t)=>{
        cc.init(e, t), e._zod.check = (r)=>{
            t.fn(r.value) || r.issues.push({
                code: "invalid_format",
                format: t.format,
                input: r.value,
                inst: e,
                continue: !t.abort
            });
        };
    }), qc = Eo("$ZodNumber", (e, t)=>{
        ic.init(e, t), e._zod.pattern = e._zod.bag.pattern ?? ua, e._zod.parse = (r, n)=>{
            if (t.coerce) try {
                r.value = Number(r.value);
            } catch (e) {}
            const s = r.value;
            if ("number" == typeof s && !Number.isNaN(s) && Number.isFinite(s)) return r;
            const o = "number" == typeof s ? Number.isNaN(s) ? "NaN" : Number.isFinite(s) ? void 0 : "Infinity" : void 0;
            return r.issues.push({
                expected: "number",
                code: "invalid_type",
                input: s,
                inst: e,
                ...o ? {
                    received: o
                } : {}
            }), r;
        };
    }), Dc = Eo("$ZodNumberFormat", (e, t)=>{
        Fa.init(e, t), qc.init(e, t);
    }), Oc = Eo("$ZodBoolean", (e, t)=>{
        ic.init(e, t), e._zod.pattern = da, e._zod.parse = (r, n)=>{
            if (t.coerce) try {
                r.value = Boolean(r.value);
            } catch (e) {}
            const s = r.value;
            return "boolean" == typeof s || r.issues.push({
                expected: "boolean",
                code: "invalid_type",
                input: s,
                inst: e
            }), r;
        };
    }), Nc = Eo("$ZodBigInt", (e, t)=>{
        ic.init(e, t), e._zod.pattern = ca, e._zod.parse = (r, n)=>{
            if (t.coerce) try {
                r.value = BigInt(r.value);
            } catch (e) {}
            return "bigint" == typeof r.value || r.issues.push({
                expected: "bigint",
                code: "invalid_type",
                input: r.value,
                inst: e
            }), r;
        };
    }), Fc = Eo("$ZodBigIntFormat", (e, t)=>{
        Ua.init(e, t), Nc.init(e, t);
    }), Uc = Eo("$ZodSymbol", (e, t)=>{
        ic.init(e, t), e._zod.parse = (t, r)=>{
            const n = t.value;
            return "symbol" == typeof n || t.issues.push({
                expected: "symbol",
                code: "invalid_type",
                input: n,
                inst: e
            }), t;
        };
    }), Lc = Eo("$ZodUndefined", (e, t)=>{
        ic.init(e, t), e._zod.pattern = ma, e._zod.values = new Set([
            void 0
        ]), e._zod.optin = "optional", e._zod.optout = "optional", e._zod.parse = (t, r)=>{
            const n = t.value;
            return void 0 === n || t.issues.push({
                expected: "undefined",
                code: "invalid_type",
                input: n,
                inst: e
            }), t;
        };
    }), $c = Eo("$ZodNull", (e, t)=>{
        ic.init(e, t), e._zod.pattern = pa, e._zod.values = new Set([
            null
        ]), e._zod.parse = (t, r)=>{
            const n = t.value;
            return null === n || t.issues.push({
                expected: "null",
                code: "invalid_type",
                input: n,
                inst: e
            }), t;
        };
    }), Qc = Eo("$ZodAny", (e, t)=>{
        ic.init(e, t), e._zod.parse = (e)=>e;
    }), jc = Eo("$ZodUnknown", (e, t)=>{
        ic.init(e, t), e._zod.parse = (e)=>e;
    }), Gc = Eo("$ZodNever", (e, t)=>{
        ic.init(e, t), e._zod.parse = (t, r)=>(t.issues.push({
                expected: "never",
                code: "invalid_type",
                input: t.value,
                inst: e
            }), t);
    }), Hc = Eo("$ZodVoid", (e, t)=>{
        ic.init(e, t), e._zod.parse = (t, r)=>{
            const n = t.value;
            return void 0 === n || t.issues.push({
                expected: "void",
                code: "invalid_type",
                input: n,
                inst: e
            }), t;
        };
    }), zc = Eo("$ZodDate", (e, t)=>{
        ic.init(e, t), e._zod.parse = (r, n)=>{
            if (t.coerce) try {
                r.value = new Date(r.value);
            } catch (e) {}
            const s = r.value, o = s instanceof Date;
            return o && !Number.isNaN(s.getTime()) || r.issues.push({
                expected: "date",
                code: "invalid_type",
                input: s,
                ...o ? {
                    received: "Invalid Date"
                } : {},
                inst: e
            }), r;
        };
    });
    function Wc(e, t, r) {
        e.issues.length && t.issues.push(...ei(r, e.issues)), t.value[r] = e.value;
    }
    const Vc = Eo("$ZodArray", (e, t)=>{
        ic.init(e, t), e._zod.parse = (r, n)=>{
            const s = r.value;
            if (!Array.isArray(s)) return r.issues.push({
                expected: "array",
                code: "invalid_type",
                input: s,
                inst: e
            }), r;
            r.value = Array(s.length);
            const o = [];
            for(let e = 0; e < s.length; e++){
                const i = s[e], a = t.element._zod.run({
                    value: i,
                    issues: []
                }, n);
                a instanceof Promise ? o.push(a.then((t)=>Wc(t, r, e))) : Wc(a, r, e);
            }
            return o.length ? Promise.all(o).then(()=>r) : r;
        };
    });
    function Kc(e, t, r, n, s) {
        if (e.issues.length) {
            if (s && !(r in n)) return;
            t.issues.push(...ei(r, e.issues));
        }
        void 0 === e.value ? r in n && (t.value[r] = void 0) : t.value[r] = e.value;
    }
    function Yc(e) {
        const t = Object.keys(e.shape);
        for (const r of t)if (!e.shape?.[r]?._zod?.traits?.has("$ZodType")) throw new Error(`Invalid element at key "${r}": expected a Zod schema`);
        const r = (n = e.shape, Object.keys(n).filter((e)=>"optional" === n[e]._zod.optin && "optional" === n[e]._zod.optout));
        var n;
        return {
            ...e,
            keys: t,
            keySet: new Set(t),
            numKeys: t.length,
            optionalKeys: new Set(r)
        };
    }
    function Zc(e, t, r, n, s, o) {
        const i = [], a = s.keySet, c = s.catchall._zod, l = c.def.type, u = "optional" === c.optout;
        for(const s in t){
            if (a.has(s)) continue;
            if ("never" === l) {
                i.push(s);
                continue;
            }
            const o = c.run({
                value: t[s],
                issues: []
            }, n);
            o instanceof Promise ? e.push(o.then((e)=>Kc(e, r, s, t, u))) : Kc(o, r, s, t, u);
        }
        return i.length && r.issues.push({
            code: "unrecognized_keys",
            keys: i,
            input: t,
            inst: o
        }), e.length ? Promise.all(e).then(()=>r) : r;
    }
    const Xc = Eo("$ZodObject", (e, t)=>{
        ic.init(e, t);
        const r = Object.getOwnPropertyDescriptor(t, "shape");
        if (!r?.get) {
            const e = t.shape;
            Object.defineProperty(t, "shape", {
                get: ()=>{
                    const r = {
                        ...e
                    };
                    return Object.defineProperty(t, "shape", {
                        value: r
                    }), r;
                }
            });
        }
        const n = Po(()=>Yc(t));
        Do(e._zod, "propValues", ()=>{
            const e = t.shape, r = {};
            for(const t in e){
                const n = e[t]._zod;
                if (n.values) {
                    r[t] ?? (r[t] = new Set);
                    for (const e of n.values)r[t].add(e);
                }
            }
            return r;
        });
        const s = Lo, o = t.catchall;
        let i;
        e._zod.parse = (t, r)=>{
            i ?? (i = n.value);
            const a = t.value;
            if (!s(a)) return t.issues.push({
                expected: "object",
                code: "invalid_type",
                input: a,
                inst: e
            }), t;
            t.value = {};
            const c = [], l = i.shape;
            for (const e of i.keys){
                const n = l[e], s = "optional" === n._zod.optout, o = n._zod.run({
                    value: a[e],
                    issues: []
                }, r);
                o instanceof Promise ? c.push(o.then((r)=>Kc(r, t, e, a, s))) : Kc(o, t, e, a, s);
            }
            return o ? Zc(c, a, t, r, n.value, e) : c.length ? Promise.all(c).then(()=>t) : t;
        };
    }), el = Eo("$ZodObjectJIT", (e, t)=>{
        Xc.init(e, t);
        const r = e._zod.parse, n = Po(()=>Yc(t));
        let s;
        const o = Lo, i = !ko.jitless, a = i && $o.value, c = t.catchall;
        let l;
        e._zod.parse = (u, d)=>{
            l ?? (l = n.value);
            const p = u.value;
            return o(p) ? i && a && !1 === d?.async && !0 !== d.jitless ? (s || (s = ((e)=>{
                const t = new sc([
                    "shape",
                    "payload",
                    "ctx"
                ]), r = n.value, s = (e)=>{
                    const t = Fo(e);
                    return `shape[${t}]._zod.run({ value: input[${t}], issues: [] }, ctx)`;
                };
                t.write("const input = payload.value;");
                const o = Object.create(null);
                let i = 0;
                for (const e of r.keys)o[e] = "key_" + i++;
                t.write("const newResult = {};");
                for (const n of r.keys){
                    const r = o[n], i = Fo(n), a = e[n], c = "optional" === a?._zod?.optout;
                    t.write(`const ${r} = ${s(n)};`), c ? t.write(`\n        if (${r}.issues.length) {\n          if (${i} in input) {\n            payload.issues = payload.issues.concat(${r}.issues.map(iss => ({\n              ...iss,\n              path: iss.path ? [${i}, ...iss.path] : [${i}]\n            })));\n          }\n        }\n        \n        if (${r}.value === undefined) {\n          if (${i} in input) {\n            newResult[${i}] = undefined;\n          }\n        } else {\n          newResult[${i}] = ${r}.value;\n        }\n        \n      `) : t.write(`\n        if (${r}.issues.length) {\n          payload.issues = payload.issues.concat(${r}.issues.map(iss => ({\n            ...iss,\n            path: iss.path ? [${i}, ...iss.path] : [${i}]\n          })));\n        }\n        \n        if (${r}.value === undefined) {\n          if (${i} in input) {\n            newResult[${i}] = undefined;\n          }\n        } else {\n          newResult[${i}] = ${r}.value;\n        }\n        \n      `);
                }
                t.write("payload.value = newResult;"), t.write("return payload;");
                const a = t.compile();
                return (t, r)=>a(e, t, r);
            })(t.shape)), u = s(u, d), c ? Zc([], p, u, d, l, e) : u) : r(u, d) : (u.issues.push({
                expected: "object",
                code: "invalid_type",
                input: p,
                inst: e
            }), u);
        };
    });
    function tl(e, t, r, n) {
        for (const r of e)if (0 === r.issues.length) return t.value = r.value, t;
        const s = e.filter((e)=>!Xo(e));
        return 1 === s.length ? (t.value = s[0].value, s[0]) : (t.issues.push({
            code: "invalid_union",
            input: t.value,
            inst: r,
            errors: e.map((e)=>e.issues.map((e)=>ri(e, n, xo())))
        }), t);
    }
    const rl = Eo("$ZodUnion", (e, t)=>{
        ic.init(e, t), Do(e._zod, "optin", ()=>t.options.some((e)=>"optional" === e._zod.optin) ? "optional" : void 0), Do(e._zod, "optout", ()=>t.options.some((e)=>"optional" === e._zod.optout) ? "optional" : void 0), Do(e._zod, "values", ()=>{
            if (t.options.every((e)=>e._zod.values)) return new Set(t.options.flatMap((e)=>Array.from(e._zod.values)));
        }), Do(e._zod, "pattern", ()=>{
            if (t.options.every((e)=>e._zod.pattern)) {
                const e = t.options.map((e)=>e._zod.pattern);
                return new RegExp(`^(${e.map((e)=>Mo(e.source)).join("|")})$`);
            }
        });
        const r = 1 === t.options.length, n = t.options[0]._zod.run;
        e._zod.parse = (s, o)=>{
            if (r) return n(s, o);
            let i = !1;
            const a = [];
            for (const e of t.options){
                const t = e._zod.run({
                    value: s.value,
                    issues: []
                }, o);
                if (t instanceof Promise) a.push(t), i = !0;
                else {
                    if (0 === t.issues.length) return t;
                    a.push(t);
                }
            }
            return i ? Promise.all(a).then((t)=>tl(t, s, e, o)) : tl(a, s, e, o);
        };
    });
    function nl(e, t, r, n) {
        const s = e.filter((e)=>0 === e.issues.length);
        return 1 === s.length ? (t.value = s[0].value, t) : (0 === s.length ? t.issues.push({
            code: "invalid_union",
            input: t.value,
            inst: r,
            errors: e.map((e)=>e.issues.map((e)=>ri(e, n, xo())))
        }) : t.issues.push({
            code: "invalid_union",
            input: t.value,
            inst: r,
            errors: [],
            inclusive: !1
        }), t);
    }
    const sl = Eo("$ZodXor", (e, t)=>{
        rl.init(e, t), t.inclusive = !1;
        const r = 1 === t.options.length, n = t.options[0]._zod.run;
        e._zod.parse = (s, o)=>{
            if (r) return n(s, o);
            let i = !1;
            const a = [];
            for (const e of t.options){
                const t = e._zod.run({
                    value: s.value,
                    issues: []
                }, o);
                t instanceof Promise ? (a.push(t), i = !0) : a.push(t);
            }
            return i ? Promise.all(a).then((t)=>nl(t, s, e, o)) : nl(a, s, e, o);
        };
    }), ol = Eo("$ZodDiscriminatedUnion", (e, t)=>{
        t.inclusive = !1, rl.init(e, t);
        const r = e._zod.parse;
        Do(e._zod, "propValues", ()=>{
            const e = {};
            for (const r of t.options){
                const n = r._zod.propValues;
                if (!n || 0 === Object.keys(n).length) throw new Error(`Invalid discriminated union option at index "${t.options.indexOf(r)}"`);
                for (const [t, r] of Object.entries(n)){
                    e[t] || (e[t] = new Set);
                    for (const n of r)e[t].add(n);
                }
            }
            return e;
        });
        const n = Po(()=>{
            const e = t.options, r = new Map;
            for (const n of e){
                const e = n._zod.propValues?.[t.discriminator];
                if (!e || 0 === e.size) throw new Error(`Invalid discriminated union option at index "${t.options.indexOf(n)}"`);
                for (const t of e){
                    if (r.has(t)) throw new Error(`Duplicate discriminator value "${String(t)}"`);
                    r.set(t, n);
                }
            }
            return r;
        });
        e._zod.parse = (s, o)=>{
            const i = s.value;
            if (!Lo(i)) return s.issues.push({
                code: "invalid_type",
                expected: "object",
                input: i,
                inst: e
            }), s;
            const a = n.value.get(i?.[t.discriminator]);
            return a ? a._zod.run(s, o) : t.unionFallback ? r(s, o) : (s.issues.push({
                code: "invalid_union",
                errors: [],
                note: "No matching discriminator",
                discriminator: t.discriminator,
                input: i,
                path: [
                    t.discriminator
                ],
                inst: e
            }), s);
        };
    }), il = Eo("$ZodIntersection", (e, t)=>{
        ic.init(e, t), e._zod.parse = (e, r)=>{
            const n = e.value, s = t.left._zod.run({
                value: n,
                issues: []
            }, r), o = t.right._zod.run({
                value: n,
                issues: []
            }, r);
            return s instanceof Promise || o instanceof Promise ? Promise.all([
                s,
                o
            ]).then(([t, r])=>cl(e, t, r)) : cl(e, s, o);
        };
    });
    function al(e, t) {
        if (e === t) return {
            valid: !0,
            data: e
        };
        if (e instanceof Date && t instanceof Date && +e === +t) return {
            valid: !0,
            data: e
        };
        if (Qo(e) && Qo(t)) {
            const r = Object.keys(t), n = Object.keys(e).filter((e)=>-1 !== r.indexOf(e)), s = {
                ...e,
                ...t
            };
            for (const r of n){
                const n = al(e[r], t[r]);
                if (!n.valid) return {
                    valid: !1,
                    mergeErrorPath: [
                        r,
                        ...n.mergeErrorPath
                    ]
                };
                s[r] = n.data;
            }
            return {
                valid: !0,
                data: s
            };
        }
        if (Array.isArray(e) && Array.isArray(t)) {
            if (e.length !== t.length) return {
                valid: !1,
                mergeErrorPath: []
            };
            const r = [];
            for(let n = 0; n < e.length; n++){
                const s = al(e[n], t[n]);
                if (!s.valid) return {
                    valid: !1,
                    mergeErrorPath: [
                        n,
                        ...s.mergeErrorPath
                    ]
                };
                r.push(s.data);
            }
            return {
                valid: !0,
                data: r
            };
        }
        return {
            valid: !1,
            mergeErrorPath: []
        };
    }
    function cl(e, t, r) {
        const n = new Map;
        let s;
        for (const r of t.issues)if ("unrecognized_keys" === r.code) {
            s ?? (s = r);
            for (const e of r.keys)n.has(e) || n.set(e, {}), n.get(e).l = !0;
        } else e.issues.push(r);
        for (const t of r.issues)if ("unrecognized_keys" === t.code) for (const e of t.keys)n.has(e) || n.set(e, {}), n.get(e).r = !0;
        else e.issues.push(t);
        const o = [
            ...n
        ].filter(([, e])=>e.l && e.r).map(([e])=>e);
        if (o.length && s && e.issues.push({
            ...s,
            keys: o
        }), Xo(e)) return e;
        const i = al(t.value, r.value);
        if (!i.valid) throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(i.mergeErrorPath)}`);
        return e.value = i.data, e;
    }
    const ll = Eo("$ZodTuple", (e, t)=>{
        ic.init(e, t);
        const r = t.items;
        e._zod.parse = (n, s)=>{
            const o = n.value;
            if (!Array.isArray(o)) return n.issues.push({
                input: o,
                inst: e,
                expected: "tuple",
                code: "invalid_type"
            }), n;
            n.value = [];
            const i = [], a = [
                ...r
            ].reverse().findIndex((e)=>"optional" !== e._zod.optin), c = -1 === a ? 0 : r.length - a;
            if (!t.rest) {
                const t = o.length > r.length, s = o.length < c - 1;
                if (t || s) return n.issues.push({
                    ...t ? {
                        code: "too_big",
                        maximum: r.length,
                        inclusive: !0
                    } : {
                        code: "too_small",
                        minimum: r.length
                    },
                    input: o,
                    inst: e,
                    origin: "array"
                }), n;
            }
            let l = -1;
            for (const e of r){
                if (l++, l >= o.length && l >= c) continue;
                const t = e._zod.run({
                    value: o[l],
                    issues: []
                }, s);
                t instanceof Promise ? i.push(t.then((e)=>ul(e, n, l))) : ul(t, n, l);
            }
            if (t.rest) {
                const e = o.slice(r.length);
                for (const r of e){
                    l++;
                    const e = t.rest._zod.run({
                        value: r,
                        issues: []
                    }, s);
                    e instanceof Promise ? i.push(e.then((e)=>ul(e, n, l))) : ul(e, n, l);
                }
            }
            return i.length ? Promise.all(i).then(()=>n) : n;
        };
    });
    function ul(e, t, r) {
        e.issues.length && t.issues.push(...ei(r, e.issues)), t.value[r] = e.value;
    }
    const dl = Eo("$ZodRecord", (e, t)=>{
        ic.init(e, t), e._zod.parse = (r, n)=>{
            const s = r.value;
            if (!Qo(s)) return r.issues.push({
                expected: "record",
                code: "invalid_type",
                input: s,
                inst: e
            }), r;
            const o = [], i = t.keyType._zod.values;
            if (i) {
                r.value = {};
                const a = new Set;
                for (const e of i)if ("string" == typeof e || "number" == typeof e || "symbol" == typeof e) {
                    a.add("number" == typeof e ? e.toString() : e);
                    const i = t.valueType._zod.run({
                        value: s[e],
                        issues: []
                    }, n);
                    i instanceof Promise ? o.push(i.then((t)=>{
                        t.issues.length && r.issues.push(...ei(e, t.issues)), r.value[e] = t.value;
                    })) : (i.issues.length && r.issues.push(...ei(e, i.issues)), r.value[e] = i.value);
                }
                let c;
                for(const e in s)a.has(e) || (c = c ?? [], c.push(e));
                c && c.length > 0 && r.issues.push({
                    code: "unrecognized_keys",
                    input: s,
                    inst: e,
                    keys: c
                });
            } else {
                r.value = {};
                for (const i of Reflect.ownKeys(s)){
                    if ("__proto__" === i) continue;
                    let a = t.keyType._zod.run({
                        value: i,
                        issues: []
                    }, n);
                    if (a instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
                    if ("string" == typeof i && ua.test(i) && a.issues.length) {
                        const e = t.keyType._zod.run({
                            value: Number(i),
                            issues: []
                        }, n);
                        if (e instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
                        0 === e.issues.length && (a = e);
                    }
                    if (a.issues.length) {
                        "loose" === t.mode ? r.value[i] = s[i] : r.issues.push({
                            code: "invalid_key",
                            origin: "record",
                            issues: a.issues.map((e)=>ri(e, n, xo())),
                            input: i,
                            path: [
                                i
                            ],
                            inst: e
                        });
                        continue;
                    }
                    const c = t.valueType._zod.run({
                        value: s[i],
                        issues: []
                    }, n);
                    c instanceof Promise ? o.push(c.then((e)=>{
                        e.issues.length && r.issues.push(...ei(i, e.issues)), r.value[a.value] = e.value;
                    })) : (c.issues.length && r.issues.push(...ei(i, c.issues)), r.value[a.value] = c.value);
                }
            }
            return o.length ? Promise.all(o).then(()=>r) : r;
        };
    }), pl = Eo("$ZodMap", (e, t)=>{
        ic.init(e, t), e._zod.parse = (r, n)=>{
            const s = r.value;
            if (!(s instanceof Map)) return r.issues.push({
                expected: "map",
                code: "invalid_type",
                input: s,
                inst: e
            }), r;
            const o = [];
            r.value = new Map;
            for (const [i, a] of s){
                const c = t.keyType._zod.run({
                    value: i,
                    issues: []
                }, n), l = t.valueType._zod.run({
                    value: a,
                    issues: []
                }, n);
                c instanceof Promise || l instanceof Promise ? o.push(Promise.all([
                    c,
                    l
                ]).then(([t, o])=>{
                    ml(t, o, r, i, s, e, n);
                })) : ml(c, l, r, i, s, e, n);
            }
            return o.length ? Promise.all(o).then(()=>r) : r;
        };
    });
    function ml(e, t, r, n, s, o, i) {
        e.issues.length && (Go.has(typeof n) ? r.issues.push(...ei(n, e.issues)) : r.issues.push({
            code: "invalid_key",
            origin: "map",
            input: s,
            inst: o,
            issues: e.issues.map((e)=>ri(e, i, xo()))
        })), t.issues.length && (Go.has(typeof n) ? r.issues.push(...ei(n, t.issues)) : r.issues.push({
            origin: "map",
            code: "invalid_element",
            input: s,
            inst: o,
            key: n,
            issues: t.issues.map((e)=>ri(e, i, xo()))
        })), r.value.set(e.value, t.value);
    }
    const hl = Eo("$ZodSet", (e, t)=>{
        ic.init(e, t), e._zod.parse = (r, n)=>{
            const s = r.value;
            if (!(s instanceof Set)) return r.issues.push({
                input: s,
                inst: e,
                expected: "set",
                code: "invalid_type"
            }), r;
            const o = [];
            r.value = new Set;
            for (const e of s){
                const s = t.valueType._zod.run({
                    value: e,
                    issues: []
                }, n);
                s instanceof Promise ? o.push(s.then((e)=>fl(e, r))) : fl(s, r);
            }
            return o.length ? Promise.all(o).then(()=>r) : r;
        };
    });
    function fl(e, t) {
        e.issues.length && t.issues.push(...e.issues), t.value.add(e.value);
    }
    const gl = Eo("$ZodEnum", (e, t)=>{
        ic.init(e, t);
        const r = To(t.entries), n = new Set(r);
        e._zod.values = n, e._zod.pattern = new RegExp(`^(${r.filter((e)=>Go.has(typeof e)).map((e)=>"string" == typeof e ? zo(e) : e.toString()).join("|")})$`), e._zod.parse = (t, s)=>{
            const o = t.value;
            return n.has(o) || t.issues.push({
                code: "invalid_value",
                values: r,
                input: o,
                inst: e
            }), t;
        };
    }), yl = Eo("$ZodLiteral", (e, t)=>{
        if (ic.init(e, t), 0 === t.values.length) throw new Error("Cannot create literal schema with no valid values");
        const r = new Set(t.values);
        e._zod.values = r, e._zod.pattern = new RegExp(`^(${t.values.map((e)=>"string" == typeof e ? zo(e) : e ? zo(e.toString()) : String(e)).join("|")})$`), e._zod.parse = (n, s)=>{
            const o = n.value;
            return r.has(o) || n.issues.push({
                code: "invalid_value",
                values: t.values,
                input: o,
                inst: e
            }), n;
        };
    }), wl = Eo("$ZodFile", (e, t)=>{
        ic.init(e, t), e._zod.parse = (t, r)=>{
            const n = t.value;
            return n instanceof File || t.issues.push({
                expected: "file",
                code: "invalid_type",
                input: n,
                inst: e
            }), t;
        };
    }), vl = Eo("$ZodTransform", (e, t)=>{
        ic.init(e, t), e._zod.parse = (r, n)=>{
            if ("backward" === n.direction) throw new Co(e.constructor.name);
            const s = t.transform(r.value, r);
            if (n.async) {
                return (s instanceof Promise ? s : Promise.resolve(s)).then((e)=>(r.value = e, r));
            }
            if (s instanceof Promise) throw new Io;
            return r.value = s, r;
        };
    });
    function _l(e, t) {
        return e.issues.length && void 0 === t ? {
            issues: [],
            value: void 0
        } : e;
    }
    const Al = Eo("$ZodOptional", (e, t)=>{
        ic.init(e, t), e._zod.optin = "optional", e._zod.optout = "optional", Do(e._zod, "values", ()=>t.innerType._zod.values ? new Set([
                ...t.innerType._zod.values,
                void 0
            ]) : void 0), Do(e._zod, "pattern", ()=>{
            const e = t.innerType._zod.pattern;
            return e ? new RegExp(`^(${Mo(e.source)})?$`) : void 0;
        }), e._zod.parse = (e, r)=>{
            if ("optional" === t.innerType._zod.optin) {
                const n = t.innerType._zod.run(e, r);
                return n instanceof Promise ? n.then((t)=>_l(t, e.value)) : _l(n, e.value);
            }
            return void 0 === e.value ? e : t.innerType._zod.run(e, r);
        };
    }), Sl = Eo("$ZodExactOptional", (e, t)=>{
        Al.init(e, t), Do(e._zod, "values", ()=>t.innerType._zod.values), Do(e._zod, "pattern", ()=>t.innerType._zod.pattern), e._zod.parse = (e, r)=>t.innerType._zod.run(e, r);
    }), bl = Eo("$ZodNullable", (e, t)=>{
        ic.init(e, t), Do(e._zod, "optin", ()=>t.innerType._zod.optin), Do(e._zod, "optout", ()=>t.innerType._zod.optout), Do(e._zod, "pattern", ()=>{
            const e = t.innerType._zod.pattern;
            return e ? new RegExp(`^(${Mo(e.source)}|null)$`) : void 0;
        }), Do(e._zod, "values", ()=>t.innerType._zod.values ? new Set([
                ...t.innerType._zod.values,
                null
            ]) : void 0), e._zod.parse = (e, r)=>null === e.value ? e : t.innerType._zod.run(e, r);
    }), El = Eo("$ZodDefault", (e, t)=>{
        ic.init(e, t), e._zod.optin = "optional", Do(e._zod, "values", ()=>t.innerType._zod.values), e._zod.parse = (e, r)=>{
            if ("backward" === r.direction) return t.innerType._zod.run(e, r);
            if (void 0 === e.value) return e.value = t.defaultValue, e;
            const n = t.innerType._zod.run(e, r);
            return n instanceof Promise ? n.then((e)=>Il(e, t)) : Il(n, t);
        };
    });
    function Il(e, t) {
        return void 0 === e.value && (e.value = t.defaultValue), e;
    }
    const Cl = Eo("$ZodPrefault", (e, t)=>{
        ic.init(e, t), e._zod.optin = "optional", Do(e._zod, "values", ()=>t.innerType._zod.values), e._zod.parse = (e, r)=>("backward" === r.direction || void 0 === e.value && (e.value = t.defaultValue), t.innerType._zod.run(e, r));
    }), kl = Eo("$ZodNonOptional", (e, t)=>{
        ic.init(e, t), Do(e._zod, "values", ()=>{
            const e = t.innerType._zod.values;
            return e ? new Set([
                ...e
            ].filter((e)=>void 0 !== e)) : void 0;
        }), e._zod.parse = (r, n)=>{
            const s = t.innerType._zod.run(r, n);
            return s instanceof Promise ? s.then((t)=>xl(t, e)) : xl(s, e);
        };
    });
    function xl(e, t) {
        return e.issues.length || void 0 !== e.value || e.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: e.value,
            inst: t
        }), e;
    }
    const Tl = Eo("$ZodSuccess", (e, t)=>{
        ic.init(e, t), e._zod.parse = (e, r)=>{
            if ("backward" === r.direction) throw new Co("ZodSuccess");
            const n = t.innerType._zod.run(e, r);
            return n instanceof Promise ? n.then((t)=>(e.value = 0 === t.issues.length, e)) : (e.value = 0 === n.issues.length, e);
        };
    }), Rl = Eo("$ZodCatch", (e, t)=>{
        ic.init(e, t), Do(e._zod, "optin", ()=>t.innerType._zod.optin), Do(e._zod, "optout", ()=>t.innerType._zod.optout), Do(e._zod, "values", ()=>t.innerType._zod.values), e._zod.parse = (e, r)=>{
            if ("backward" === r.direction) return t.innerType._zod.run(e, r);
            const n = t.innerType._zod.run(e, r);
            return n instanceof Promise ? n.then((n)=>(e.value = n.value, n.issues.length && (e.value = t.catchValue({
                    ...e,
                    error: {
                        issues: n.issues.map((e)=>ri(e, r, xo()))
                    },
                    input: e.value
                }), e.issues = []), e)) : (e.value = n.value, n.issues.length && (e.value = t.catchValue({
                ...e,
                error: {
                    issues: n.issues.map((e)=>ri(e, r, xo()))
                },
                input: e.value
            }), e.issues = []), e);
        };
    }), Bl = Eo("$ZodNaN", (e, t)=>{
        ic.init(e, t), e._zod.parse = (t, r)=>("number" == typeof t.value && Number.isNaN(t.value) || t.issues.push({
                input: t.value,
                inst: e,
                expected: "nan",
                code: "invalid_type"
            }), t);
    }), Pl = Eo("$ZodPipe", (e, t)=>{
        ic.init(e, t), Do(e._zod, "values", ()=>t.in._zod.values), Do(e._zod, "optin", ()=>t.in._zod.optin), Do(e._zod, "optout", ()=>t.out._zod.optout), Do(e._zod, "propValues", ()=>t.in._zod.propValues), e._zod.parse = (e, r)=>{
            if ("backward" === r.direction) {
                const n = t.out._zod.run(e, r);
                return n instanceof Promise ? n.then((e)=>Jl(e, t.in, r)) : Jl(n, t.in, r);
            }
            const n = t.in._zod.run(e, r);
            return n instanceof Promise ? n.then((e)=>Jl(e, t.out, r)) : Jl(n, t.out, r);
        };
    });
    function Jl(e, t, r) {
        return e.issues.length ? (e.aborted = !0, e) : t._zod.run({
            value: e.value,
            issues: e.issues
        }, r);
    }
    const Ml = Eo("$ZodCodec", (e, t)=>{
        ic.init(e, t), Do(e._zod, "values", ()=>t.in._zod.values), Do(e._zod, "optin", ()=>t.in._zod.optin), Do(e._zod, "optout", ()=>t.out._zod.optout), Do(e._zod, "propValues", ()=>t.in._zod.propValues), e._zod.parse = (e, r)=>{
            if ("forward" === (r.direction || "forward")) {
                const n = t.in._zod.run(e, r);
                return n instanceof Promise ? n.then((e)=>ql(e, t, r)) : ql(n, t, r);
            }
            {
                const n = t.out._zod.run(e, r);
                return n instanceof Promise ? n.then((e)=>ql(e, t, r)) : ql(n, t, r);
            }
        };
    });
    function ql(e, t, r) {
        if (e.issues.length) return e.aborted = !0, e;
        if ("forward" === (r.direction || "forward")) {
            const n = t.transform(e.value, e);
            return n instanceof Promise ? n.then((n)=>Dl(e, n, t.out, r)) : Dl(e, n, t.out, r);
        }
        {
            const n = t.reverseTransform(e.value, e);
            return n instanceof Promise ? n.then((n)=>Dl(e, n, t.in, r)) : Dl(e, n, t.in, r);
        }
    }
    function Dl(e, t, r, n) {
        return e.issues.length ? (e.aborted = !0, e) : r._zod.run({
            value: t,
            issues: e.issues
        }, n);
    }
    const Ol = Eo("$ZodReadonly", (e, t)=>{
        ic.init(e, t), Do(e._zod, "propValues", ()=>t.innerType._zod.propValues), Do(e._zod, "values", ()=>t.innerType._zod.values), Do(e._zod, "optin", ()=>t.innerType?._zod?.optin), Do(e._zod, "optout", ()=>t.innerType?._zod?.optout), e._zod.parse = (e, r)=>{
            if ("backward" === r.direction) return t.innerType._zod.run(e, r);
            const n = t.innerType._zod.run(e, r);
            return n instanceof Promise ? n.then(Nl) : Nl(n);
        };
    });
    function Nl(e) {
        return e.value = Object.freeze(e.value), e;
    }
    const Fl = Eo("$ZodTemplateLiteral", (e, t)=>{
        ic.init(e, t);
        const r = [];
        for (const e of t.parts)if ("object" == typeof e && null !== e) {
            if (!e._zod.pattern) throw new Error(`Invalid template literal part, no pattern found: ${[
                ...e._zod.traits
            ].shift()}`);
            const t = e._zod.pattern instanceof RegExp ? e._zod.pattern.source : e._zod.pattern;
            if (!t) throw new Error(`Invalid template literal part: ${e._zod.traits}`);
            const n = t.startsWith("^") ? 1 : 0, s = t.endsWith("$") ? t.length - 1 : t.length;
            r.push(t.slice(n, s));
        } else {
            if (null !== e && !Ho.has(typeof e)) throw new Error(`Invalid template literal part: ${e}`);
            r.push(zo(`${e}`));
        }
        e._zod.pattern = new RegExp(`^${r.join("")}$`), e._zod.parse = (r, n)=>"string" != typeof r.value ? (r.issues.push({
                input: r.value,
                inst: e,
                expected: "string",
                code: "invalid_type"
            }), r) : (e._zod.pattern.lastIndex = 0, e._zod.pattern.test(r.value) || r.issues.push({
                input: r.value,
                inst: e,
                code: "invalid_format",
                format: t.format ?? "template_literal",
                pattern: e._zod.pattern.source
            }), r);
    }), Ul = Eo("$ZodFunction", (e, t)=>(ic.init(e, t), e._def = t, e._zod.def = t, e.implement = (t)=>{
            if ("function" != typeof t) throw new Error("implement() must be called with a function");
            return function(...r) {
                const n = e._def.input ? ui(e._def.input, r) : r, s = Reflect.apply(t, this, n);
                return e._def.output ? ui(e._def.output, s) : s;
            };
        }, e.implementAsync = (t)=>{
            if ("function" != typeof t) throw new Error("implementAsync() must be called with a function");
            return async function(...r) {
                const n = e._def.input ? await pi(e._def.input, r) : r, s = await Reflect.apply(t, this, n);
                return e._def.output ? await pi(e._def.output, s) : s;
            };
        }, e._zod.parse = (t, r)=>{
            if ("function" != typeof t.value) return t.issues.push({
                code: "invalid_type",
                expected: "function",
                input: t.value,
                inst: e
            }), t;
            const n = e._def.output && "promise" === e._def.output._zod.def.type;
            return t.value = n ? e.implementAsync(t.value) : e.implement(t.value), t;
        }, e.input = (...t)=>{
            const r = e.constructor;
            return Array.isArray(t[0]) ? new r({
                type: "function",
                input: new ll({
                    type: "tuple",
                    items: t[0],
                    rest: t[1]
                }),
                output: e._def.output
            }) : new r({
                type: "function",
                input: t[0],
                output: e._def.output
            });
        }, e.output = (t)=>new (0, e.constructor)({
                type: "function",
                input: e._def.input,
                output: t
            }), e)), Ll = Eo("$ZodPromise", (e, t)=>{
        ic.init(e, t), e._zod.parse = (e, r)=>Promise.resolve(e.value).then((e)=>t.innerType._zod.run({
                    value: e,
                    issues: []
                }, r));
    }), $l = Eo("$ZodLazy", (e, t)=>{
        ic.init(e, t), Do(e._zod, "innerType", ()=>t.getter()), Do(e._zod, "pattern", ()=>e._zod.innerType?._zod?.pattern), Do(e._zod, "propValues", ()=>e._zod.innerType?._zod?.propValues), Do(e._zod, "optin", ()=>e._zod.innerType?._zod?.optin ?? void 0), Do(e._zod, "optout", ()=>e._zod.innerType?._zod?.optout ?? void 0), e._zod.parse = (t, r)=>e._zod.innerType._zod.run(t, r);
    }), Ql = Eo("$ZodCustom", (e, t)=>{
        Ma.init(e, t), ic.init(e, t), e._zod.parse = (e, t)=>e, e._zod.check = (r)=>{
            const n = r.value, s = t.fn(n);
            if (s instanceof Promise) return s.then((t)=>jl(t, r, n, e));
            jl(s, r, n, e);
        };
    });
    function jl(e, t, r, n) {
        if (!e) {
            const e = {
                code: "custom",
                input: r,
                inst: n,
                path: [
                    ...n._zod.def.path ?? []
                ],
                continue: !n._zod.def.abort
            };
            n._zod.def.params && (e.params = n._zod.def.params), t.issues.push(oi(e));
        }
    }
    const Gl = ()=>{
        const e = {
            string: {
                unit: "characters",
                verb: "to have"
            },
            file: {
                unit: "bytes",
                verb: "to have"
            },
            array: {
                unit: "items",
                verb: "to have"
            },
            set: {
                unit: "items",
                verb: "to have"
            },
            map: {
                unit: "entries",
                verb: "to have"
            }
        };
        function t(t) {
            return e[t] ?? null;
        }
        const r = {
            regex: "input",
            email: "email address",
            url: "URL",
            emoji: "emoji",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "ISO datetime",
            date: "ISO date",
            time: "ISO time",
            duration: "ISO duration",
            ipv4: "IPv4 address",
            ipv6: "IPv6 address",
            mac: "MAC address",
            cidrv4: "IPv4 range",
            cidrv6: "IPv6 range",
            base64: "base64-encoded string",
            base64url: "base64url-encoded string",
            json_string: "JSON string",
            e164: "E.164 number",
            jwt: "JWT",
            template_literal: "input"
        }, n = {
            nan: "NaN"
        };
        return (e)=>{
            switch(e.code){
                case "invalid_type":
                    {
                        const t = n[e.expected] ?? e.expected, r = function(e) {
                            const t = typeof e;
                            switch(t){
                                case "number":
                                    return Number.isNaN(e) ? "nan" : "number";
                                case "object":
                                    {
                                        if (null === e) return "null";
                                        if (Array.isArray(e)) return "array";
                                        const t = e;
                                        if (t && Object.getPrototypeOf(t) !== Object.prototype && "constructor" in t && t.constructor) return t.constructor.name;
                                    }
                            }
                            return t;
                        }(e.input);
                        return `Invalid input: expected ${t}, received ${n[r] ?? r}`;
                    }
                case "invalid_value":
                    return 1 === e.values.length ? `Invalid input: expected ${Ko(e.values[0])}` : `Invalid option: expected one of ${Ro(e.values, "|")}`;
                case "too_big":
                    {
                        const r = e.inclusive ? "<=" : "<", n = t(e.origin);
                        return n ? `Too big: expected ${e.origin ?? "value"} to have ${r}${e.maximum.toString()} ${n.unit ?? "elements"}` : `Too big: expected ${e.origin ?? "value"} to be ${r}${e.maximum.toString()}`;
                    }
                case "too_small":
                    {
                        const r = e.inclusive ? ">=" : ">", n = t(e.origin);
                        return n ? `Too small: expected ${e.origin} to have ${r}${e.minimum.toString()} ${n.unit}` : `Too small: expected ${e.origin} to be ${r}${e.minimum.toString()}`;
                    }
                case "invalid_format":
                    {
                        const t = e;
                        return "starts_with" === t.format ? `Invalid string: must start with "${t.prefix}"` : "ends_with" === t.format ? `Invalid string: must end with "${t.suffix}"` : "includes" === t.format ? `Invalid string: must include "${t.includes}"` : "regex" === t.format ? `Invalid string: must match pattern ${t.pattern}` : `Invalid ${r[t.format] ?? e.format}`;
                    }
                case "not_multiple_of":
                    return `Invalid number: must be a multiple of ${e.divisor}`;
                case "unrecognized_keys":
                    return `Unrecognized key${e.keys.length > 1 ? "s" : ""}: ${Ro(e.keys, ", ")}`;
                case "invalid_key":
                    return `Invalid key in ${e.origin}`;
                case "invalid_union":
                default:
                    return "Invalid input";
                case "invalid_element":
                    return `Invalid value in ${e.origin}`;
            }
        };
    };
    var Hl;
    Symbol("ZodOutput"), Symbol("ZodInput");
    class zl {
        constructor(){
            this._map = new WeakMap, this._idmap = new Map;
        }
        add(e, ...t) {
            const r = t[0];
            return this._map.set(e, r), r && "object" == typeof r && "id" in r && this._idmap.set(r.id, e), this;
        }
        clear() {
            return this._map = new WeakMap, this._idmap = new Map, this;
        }
        remove(e) {
            const t = this._map.get(e);
            return t && "object" == typeof t && "id" in t && this._idmap.delete(t.id), this._map.delete(e), this;
        }
        get(e) {
            const t = e._zod.parent;
            if (t) {
                const r = {
                    ...this.get(t) ?? {}
                };
                delete r.id;
                const n = {
                    ...r,
                    ...this._map.get(e)
                };
                return Object.keys(n).length ? n : void 0;
            }
            return this._map.get(e);
        }
        has(e) {
            return this._map.has(e);
        }
    }
    (Hl = globalThis).__zod_globalRegistry ?? (Hl.__zod_globalRegistry = new zl);
    const Wl = globalThis.__zod_globalRegistry;
    function Vl(e, t) {
        return new e({
            type: "string",
            format: "email",
            check: "string_format",
            abort: !1,
            ...Vo(t)
        });
    }
    function Kl(e, t) {
        return new e({
            type: "string",
            format: "guid",
            check: "string_format",
            abort: !1,
            ...Vo(t)
        });
    }
    function Yl(e, t) {
        return new e({
            type: "string",
            format: "uuid",
            check: "string_format",
            abort: !1,
            ...Vo(t)
        });
    }
    function Zl(e, t) {
        return new e({
            type: "string",
            format: "uuid",
            check: "string_format",
            abort: !1,
            version: "v4",
            ...Vo(t)
        });
    }
    function Xl(e, t) {
        return new e({
            type: "string",
            format: "uuid",
            check: "string_format",
            abort: !1,
            version: "v6",
            ...Vo(t)
        });
    }
    function eu(e, t) {
        return new e({
            type: "string",
            format: "uuid",
            check: "string_format",
            abort: !1,
            version: "v7",
            ...Vo(t)
        });
    }
    function tu(e, t) {
        return new e({
            type: "string",
            format: "url",
            check: "string_format",
            abort: !1,
            ...Vo(t)
        });
    }
    function ru(e, t) {
        return new e({
            type: "string",
            format: "emoji",
            check: "string_format",
            abort: !1,
            ...Vo(t)
        });
    }
    function nu(e, t) {
        return new e({
            type: "string",
            format: "nanoid",
            check: "string_format",
            abort: !1,
            ...Vo(t)
        });
    }
    function su(e, t) {
        return new e({
            type: "string",
            format: "cuid",
            check: "string_format",
            abort: !1,
            ...Vo(t)
        });
    }
    function ou(e, t) {
        return new e({
            type: "string",
            format: "cuid2",
            check: "string_format",
            abort: !1,
            ...Vo(t)
        });
    }
    function iu(e, t) {
        return new e({
            type: "string",
            format: "ulid",
            check: "string_format",
            abort: !1,
            ...Vo(t)
        });
    }
    function au(e, t) {
        return new e({
            type: "string",
            format: "xid",
            check: "string_format",
            abort: !1,
            ...Vo(t)
        });
    }
    function cu(e, t) {
        return new e({
            type: "string",
            format: "ksuid",
            check: "string_format",
            abort: !1,
            ...Vo(t)
        });
    }
    function lu(e, t) {
        return new e({
            type: "string",
            format: "ipv4",
            check: "string_format",
            abort: !1,
            ...Vo(t)
        });
    }
    function uu(e, t) {
        return new e({
            type: "string",
            format: "ipv6",
            check: "string_format",
            abort: !1,
            ...Vo(t)
        });
    }
    function du(e, t) {
        return new e({
            type: "string",
            format: "cidrv4",
            check: "string_format",
            abort: !1,
            ...Vo(t)
        });
    }
    function pu(e, t) {
        return new e({
            type: "string",
            format: "cidrv6",
            check: "string_format",
            abort: !1,
            ...Vo(t)
        });
    }
    function mu(e, t) {
        return new e({
            type: "string",
            format: "base64",
            check: "string_format",
            abort: !1,
            ...Vo(t)
        });
    }
    function hu(e, t) {
        return new e({
            type: "string",
            format: "base64url",
            check: "string_format",
            abort: !1,
            ...Vo(t)
        });
    }
    function fu(e, t) {
        return new e({
            type: "string",
            format: "e164",
            check: "string_format",
            abort: !1,
            ...Vo(t)
        });
    }
    function gu(e, t) {
        return new e({
            type: "string",
            format: "jwt",
            check: "string_format",
            abort: !1,
            ...Vo(t)
        });
    }
    function yu(e, t) {
        return new Da({
            check: "less_than",
            ...Vo(t),
            value: e,
            inclusive: !1
        });
    }
    function wu(e, t) {
        return new Da({
            check: "less_than",
            ...Vo(t),
            value: e,
            inclusive: !0
        });
    }
    function vu(e, t) {
        return new Oa({
            check: "greater_than",
            ...Vo(t),
            value: e,
            inclusive: !1
        });
    }
    function _u(e, t) {
        return new Oa({
            check: "greater_than",
            ...Vo(t),
            value: e,
            inclusive: !0
        });
    }
    function Au(e) {
        return vu(0, e);
    }
    function Su(e) {
        return yu(0, e);
    }
    function bu(e) {
        return wu(0, e);
    }
    function Eu(e) {
        return _u(0, e);
    }
    function Iu(e, t) {
        return new Na({
            check: "multiple_of",
            ...Vo(t),
            value: e
        });
    }
    function Cu(e, t) {
        return new La({
            check: "max_size",
            ...Vo(t),
            maximum: e
        });
    }
    function ku(e, t) {
        return new $a({
            check: "min_size",
            ...Vo(t),
            minimum: e
        });
    }
    function xu(e, t) {
        return new Qa({
            check: "size_equals",
            ...Vo(t),
            size: e
        });
    }
    function Tu(e, t) {
        return new ja({
            check: "max_length",
            ...Vo(t),
            maximum: e
        });
    }
    function Ru(e, t) {
        return new Ga({
            check: "min_length",
            ...Vo(t),
            minimum: e
        });
    }
    function Bu(e, t) {
        return new Ha({
            check: "length_equals",
            ...Vo(t),
            length: e
        });
    }
    function Pu(e, t) {
        return new Wa({
            check: "string_format",
            format: "regex",
            ...Vo(t),
            pattern: e
        });
    }
    function Ju(e) {
        return new Va({
            check: "string_format",
            format: "lowercase",
            ...Vo(e)
        });
    }
    function Mu(e) {
        return new Ka({
            check: "string_format",
            format: "uppercase",
            ...Vo(e)
        });
    }
    function qu(e, t) {
        return new Ya({
            check: "string_format",
            format: "includes",
            ...Vo(t),
            includes: e
        });
    }
    function Du(e, t) {
        return new Za({
            check: "string_format",
            format: "starts_with",
            ...Vo(t),
            prefix: e
        });
    }
    function Ou(e, t) {
        return new Xa({
            check: "string_format",
            format: "ends_with",
            ...Vo(t),
            suffix: e
        });
    }
    function Nu(e, t, r) {
        return new tc({
            check: "property",
            property: e,
            schema: t,
            ...Vo(r)
        });
    }
    function Fu(e, t) {
        return new rc({
            check: "mime_type",
            mime: e,
            ...Vo(t)
        });
    }
    function Uu(e) {
        return new nc({
            check: "overwrite",
            tx: e
        });
    }
    function Lu(e) {
        return Uu((t)=>t.normalize(e));
    }
    function $u() {
        return Uu((e)=>e.trim());
    }
    function Qu() {
        return Uu((e)=>e.toLowerCase());
    }
    function ju() {
        return Uu((e)=>e.toUpperCase());
    }
    function Gu() {
        return Uu((e)=>(function(e) {
                return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
            })(e));
    }
    function Hu(e) {
        const t = function(e, t) {
            const r = new Ma({
                check: "custom",
                ...Vo(t)
            });
            return r._zod.check = e, r;
        }((r)=>(r.addIssue = (e)=>{
                if ("string" == typeof e) r.issues.push(oi(e, r.value, t._zod.def));
                else {
                    const n = e;
                    n.fatal && (n.continue = !1), n.code ?? (n.code = "custom"), n.input ?? (n.input = r.value), n.inst ?? (n.inst = t), n.continue ?? (n.continue = !t._zod.def.abort), r.issues.push(oi(n));
                }
            }, e(r.value, r)));
        return t;
    }
    function zu(e, t, r, n = {}) {
        const s = Vo(n), o = {
            ...Vo(n),
            check: "string_format",
            type: "string",
            format: t,
            fn: "function" == typeof r ? r : (e)=>r.test(e),
            ...s
        };
        r instanceof RegExp && (o.pattern = r);
        return new e(o);
    }
    function Wu(e) {
        let t = e?.target ?? "draft-2020-12";
        return "draft-4" === t && (t = "draft-04"), "draft-7" === t && (t = "draft-07"), {
            processors: e.processors ?? {},
            metadataRegistry: e?.metadata ?? Wl,
            target: t,
            unrepresentable: e?.unrepresentable ?? "throw",
            override: e?.override ?? (()=>{}),
            io: e?.io ?? "output",
            counter: 0,
            seen: new Map,
            cycles: e?.cycles ?? "ref",
            reused: e?.reused ?? "inline",
            external: e?.external ?? void 0
        };
    }
    function Vu(e, t, r = {
        path: [],
        schemaPath: []
    }) {
        var n;
        const s = e._zod.def, o = t.seen.get(e);
        if (o) {
            o.count++;
            return r.schemaPath.includes(e) && (o.cycle = r.path), o.schema;
        }
        const i = {
            schema: {},
            count: 1,
            cycle: void 0,
            path: r.path
        };
        t.seen.set(e, i);
        const a = e._zod.toJSONSchema?.();
        if (a) i.schema = a;
        else {
            const n = {
                ...r,
                schemaPath: [
                    ...r.schemaPath,
                    e
                ],
                path: r.path
            };
            if (e._zod.processJSONSchema) e._zod.processJSONSchema(t, i.schema, n);
            else {
                const r = i.schema, o = t.processors[s.type];
                if (!o) throw new Error(`[toJSONSchema]: Non-representable type encountered: ${s.type}`);
                o(e, t, r, n);
            }
            const o = e._zod.parent;
            o && (i.ref || (i.ref = o), Vu(o, t, n), t.seen.get(o).isParent = !0);
        }
        const c = t.metadataRegistry.get(e);
        c && Object.assign(i.schema, c), "input" === t.io && Zu(e) && (delete i.schema.examples, delete i.schema.default), "input" === t.io && i.schema._prefault && ((n = i.schema).default ?? (n.default = i.schema._prefault)), delete i.schema._prefault;
        return t.seen.get(e).schema;
    }
    function Ku(e, t) {
        const r = e.seen.get(t);
        if (!r) throw new Error("Unprocessed schema. This is a bug in Zod.");
        const n = new Map;
        for (const t of e.seen.entries()){
            const r = e.metadataRegistry.get(t[0])?.id;
            if (r) {
                const e = n.get(r);
                if (e && e !== t[0]) throw new Error(`Duplicate schema id "${r}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
                n.set(r, t[0]);
            }
        }
        const s = (t)=>{
            if (t[1].schema.$ref) return;
            const n = t[1], { ref: s, defId: o } = ((t)=>{
                const n = "draft-2020-12" === e.target ? "$defs" : "definitions";
                if (e.external) {
                    const r = e.external.registry.get(t[0])?.id, s = e.external.uri ?? ((e)=>e);
                    if (r) return {
                        ref: s(r)
                    };
                    const o = t[1].defId ?? t[1].schema.id ?? "schema" + e.counter++;
                    return t[1].defId = o, {
                        defId: o,
                        ref: `${s("__shared")}#/${n}/${o}`
                    };
                }
                if (t[1] === r) return {
                    ref: "#"
                };
                const s = `#/${n}/`, o = t[1].schema.id ?? "__schema" + e.counter++;
                return {
                    defId: o,
                    ref: s + o
                };
            })(t);
            n.def = {
                ...n.schema
            }, o && (n.defId = o);
            const i = n.schema;
            for(const e in i)delete i[e];
            i.$ref = s;
        };
        if ("throw" === e.cycles) for (const t of e.seen.entries()){
            const e = t[1];
            if (e.cycle) throw new Error(`Cycle detected: #/${e.cycle?.join("/")}/<root>\n\nSet the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
        }
        for (const r of e.seen.entries()){
            const n = r[1];
            if (t === r[0]) {
                s(r);
                continue;
            }
            if (e.external) {
                const n = e.external.registry.get(r[0])?.id;
                if (t !== r[0] && n) {
                    s(r);
                    continue;
                }
            }
            const o = e.metadataRegistry.get(r[0])?.id;
            o ? s(r) : (n.cycle || n.count > 1 && "ref" === e.reused) && s(r);
        }
    }
    function Yu(e, t) {
        const r = e.seen.get(t);
        if (!r) throw new Error("Unprocessed schema. This is a bug in Zod.");
        const n = (t)=>{
            const r = e.seen.get(t);
            if (null === r.ref) return;
            const s = r.def ?? r.schema, o = {
                ...s
            }, i = r.ref;
            if (r.ref = null, i) {
                n(i);
                const r = e.seen.get(i), a = r.schema;
                !a.$ref || "draft-07" !== e.target && "draft-04" !== e.target && "openapi-3.0" !== e.target ? Object.assign(s, a) : (s.allOf = s.allOf ?? [], s.allOf.push(a)), Object.assign(s, o);
                if (t._zod.parent === i) for(const e in s)"$ref" !== e && "allOf" !== e && (e in o || delete s[e]);
                if (a.$ref && r.def) for(const e in s)"$ref" !== e && "allOf" !== e && e in r.def && JSON.stringify(s[e]) === JSON.stringify(r.def[e]) && delete s[e];
            }
            const a = t._zod.parent;
            if (a && a !== i) {
                n(a);
                const t = e.seen.get(a);
                if (t?.schema.$ref && (s.$ref = t.schema.$ref, t.def)) for(const e in s)"$ref" !== e && "allOf" !== e && e in t.def && JSON.stringify(s[e]) === JSON.stringify(t.def[e]) && delete s[e];
            }
            e.override({
                zodSchema: t,
                jsonSchema: s,
                path: r.path ?? []
            });
        };
        for (const t of [
            ...e.seen.entries()
        ].reverse())n(t[0]);
        const s = {};
        if ("draft-2020-12" === e.target ? s.$schema = "https://json-schema.org/draft/2020-12/schema" : "draft-07" === e.target ? s.$schema = "http://json-schema.org/draft-07/schema#" : "draft-04" === e.target ? s.$schema = "http://json-schema.org/draft-04/schema#" : e.target, e.external?.uri) {
            const r = e.external.registry.get(t)?.id;
            if (!r) throw new Error("Schema is missing an `id` property");
            s.$id = e.external.uri(r);
        }
        Object.assign(s, r.def ?? r.schema);
        const o = e.external?.defs ?? {};
        for (const t of e.seen.entries()){
            const e = t[1];
            e.def && e.defId && (o[e.defId] = e.def);
        }
        e.external || Object.keys(o).length > 0 && ("draft-2020-12" === e.target ? s.$defs = o : s.definitions = o);
        try {
            const r = JSON.parse(JSON.stringify(s));
            return Object.defineProperty(r, "~standard", {
                value: {
                    ...t["~standard"],
                    jsonSchema: {
                        input: Xu(t, "input", e.processors),
                        output: Xu(t, "output", e.processors)
                    }
                },
                enumerable: !1,
                writable: !1
            }), r;
        } catch (e) {
            throw new Error("Error converting schema to JSON.");
        }
    }
    function Zu(e, t) {
        const r = t ?? {
            seen: new Set
        };
        if (r.seen.has(e)) return !1;
        r.seen.add(e);
        const n = e._zod.def;
        if ("transform" === n.type) return !0;
        if ("array" === n.type) return Zu(n.element, r);
        if ("set" === n.type) return Zu(n.valueType, r);
        if ("lazy" === n.type) return Zu(n.getter(), r);
        if ("promise" === n.type || "optional" === n.type || "nonoptional" === n.type || "nullable" === n.type || "readonly" === n.type || "default" === n.type || "prefault" === n.type) return Zu(n.innerType, r);
        if ("intersection" === n.type) return Zu(n.left, r) || Zu(n.right, r);
        if ("record" === n.type || "map" === n.type) return Zu(n.keyType, r) || Zu(n.valueType, r);
        if ("pipe" === n.type) return Zu(n.in, r) || Zu(n.out, r);
        if ("object" === n.type) {
            for(const e in n.shape)if (Zu(n.shape[e], r)) return !0;
            return !1;
        }
        if ("union" === n.type) {
            for (const e of n.options)if (Zu(e, r)) return !0;
            return !1;
        }
        if ("tuple" === n.type) {
            for (const e of n.items)if (Zu(e, r)) return !0;
            return !(!n.rest || !Zu(n.rest, r));
        }
        return !1;
    }
    const Xu = (e, t, r = {})=>(n)=>{
            const { libraryOptions: s, target: o } = n ?? {}, i = Wu({
                ...s ?? {},
                target: o,
                io: t,
                processors: r
            });
            return Vu(e, i), Ku(i, e), Yu(i, e);
        }, ed = {
        guid: "uuid",
        url: "uri",
        datetime: "date-time",
        json_string: "json-string",
        regex: ""
    }, td = (e, t, r, n)=>{
        const s = r;
        s.type = "string";
        const { minimum: o, maximum: i, format: a, patterns: c, contentEncoding: l } = e._zod.bag;
        if ("number" == typeof o && (s.minLength = o), "number" == typeof i && (s.maxLength = i), a && (s.format = ed[a] ?? a, "" === s.format && delete s.format, "time" === a && delete s.format), l && (s.contentEncoding = l), c && c.size > 0) {
            const e = [
                ...c
            ];
            1 === e.length ? s.pattern = e[0].source : e.length > 1 && (s.allOf = [
                ...e.map((e)=>({
                        ..."draft-07" === t.target || "draft-04" === t.target || "openapi-3.0" === t.target ? {
                            type: "string"
                        } : {},
                        pattern: e.source
                    }))
            ]);
        }
    }, rd = (e, t, r, n)=>{
        const s = r, { minimum: o, maximum: i, format: a, multipleOf: c, exclusiveMaximum: l, exclusiveMinimum: u } = e._zod.bag;
        "string" == typeof a && a.includes("int") ? s.type = "integer" : s.type = "number", "number" == typeof u && ("draft-04" === t.target || "openapi-3.0" === t.target ? (s.minimum = u, s.exclusiveMinimum = !0) : s.exclusiveMinimum = u), "number" == typeof o && (s.minimum = o, "number" == typeof u && "draft-04" !== t.target && (u >= o ? delete s.minimum : delete s.exclusiveMinimum)), "number" == typeof l && ("draft-04" === t.target || "openapi-3.0" === t.target ? (s.maximum = l, s.exclusiveMaximum = !0) : s.exclusiveMaximum = l), "number" == typeof i && (s.maximum = i, "number" == typeof l && "draft-04" !== t.target && (l <= i ? delete s.maximum : delete s.exclusiveMaximum)), "number" == typeof c && (s.multipleOf = c);
    }, nd = (e, t, r, n)=>{
        r.type = "boolean";
    }, sd = (e, t, r, n)=>{
        if ("throw" === t.unrepresentable) throw new Error("BigInt cannot be represented in JSON Schema");
    }, od = (e, t, r, n)=>{
        if ("throw" === t.unrepresentable) throw new Error("Symbols cannot be represented in JSON Schema");
    }, id = (e, t, r, n)=>{
        "openapi-3.0" === t.target ? (r.type = "string", r.nullable = !0, r.enum = [
            null
        ]) : r.type = "null";
    }, ad = (e, t, r, n)=>{
        if ("throw" === t.unrepresentable) throw new Error("Undefined cannot be represented in JSON Schema");
    }, cd = (e, t, r, n)=>{
        if ("throw" === t.unrepresentable) throw new Error("Void cannot be represented in JSON Schema");
    }, ld = (e, t, r, n)=>{
        r.not = {};
    }, ud = (e, t, r, n)=>{
        if ("throw" === t.unrepresentable) throw new Error("Date cannot be represented in JSON Schema");
    }, dd = (e, t, r, n)=>{
        const s = To(e._zod.def.entries);
        s.every((e)=>"number" == typeof e) && (r.type = "number"), s.every((e)=>"string" == typeof e) && (r.type = "string"), r.enum = s;
    }, pd = (e, t, r, n)=>{
        const s = e._zod.def, o = [];
        for (const e of s.values)if (void 0 === e) {
            if ("throw" === t.unrepresentable) throw new Error("Literal `undefined` cannot be represented in JSON Schema");
        } else if ("bigint" == typeof e) {
            if ("throw" === t.unrepresentable) throw new Error("BigInt literals cannot be represented in JSON Schema");
            o.push(Number(e));
        } else o.push(e);
        if (0 === o.length) ;
        else if (1 === o.length) {
            const e = o[0];
            r.type = null === e ? "null" : typeof e, "draft-04" === t.target || "openapi-3.0" === t.target ? r.enum = [
                e
            ] : r.const = e;
        } else o.every((e)=>"number" == typeof e) && (r.type = "number"), o.every((e)=>"string" == typeof e) && (r.type = "string"), o.every((e)=>"boolean" == typeof e) && (r.type = "boolean"), o.every((e)=>null === e) && (r.type = "null"), r.enum = o;
    }, md = (e, t, r, n)=>{
        if ("throw" === t.unrepresentable) throw new Error("NaN cannot be represented in JSON Schema");
    }, hd = (e, t, r, n)=>{
        const s = r, o = e._zod.pattern;
        if (!o) throw new Error("Pattern not found in template literal");
        s.type = "string", s.pattern = o.source;
    }, fd = (e, t, r, n)=>{
        const s = r, o = {
            type: "string",
            format: "binary",
            contentEncoding: "binary"
        }, { minimum: i, maximum: a, mime: c } = e._zod.bag;
        void 0 !== i && (o.minLength = i), void 0 !== a && (o.maxLength = a), c ? 1 === c.length ? (o.contentMediaType = c[0], Object.assign(s, o)) : (Object.assign(s, o), s.anyOf = c.map((e)=>({
                contentMediaType: e
            }))) : Object.assign(s, o);
    }, gd = (e, t, r, n)=>{
        r.type = "boolean";
    }, yd = (e, t, r, n)=>{
        if ("throw" === t.unrepresentable) throw new Error("Custom types cannot be represented in JSON Schema");
    }, wd = (e, t, r, n)=>{
        if ("throw" === t.unrepresentable) throw new Error("Function types cannot be represented in JSON Schema");
    }, vd = (e, t, r, n)=>{
        if ("throw" === t.unrepresentable) throw new Error("Transforms cannot be represented in JSON Schema");
    }, _d = (e, t, r, n)=>{
        if ("throw" === t.unrepresentable) throw new Error("Map cannot be represented in JSON Schema");
    }, Ad = (e, t, r, n)=>{
        if ("throw" === t.unrepresentable) throw new Error("Set cannot be represented in JSON Schema");
    }, Sd = (e, t, r, n)=>{
        const s = r, o = e._zod.def, { minimum: i, maximum: a } = e._zod.bag;
        "number" == typeof i && (s.minItems = i), "number" == typeof a && (s.maxItems = a), s.type = "array", s.items = Vu(o.element, t, {
            ...n,
            path: [
                ...n.path,
                "items"
            ]
        });
    }, bd = (e, t, r, n)=>{
        const s = r, o = e._zod.def;
        s.type = "object", s.properties = {};
        const i = o.shape;
        for(const e in i)s.properties[e] = Vu(i[e], t, {
            ...n,
            path: [
                ...n.path,
                "properties",
                e
            ]
        });
        const a = new Set(Object.keys(i)), c = new Set([
            ...a
        ].filter((e)=>{
            const r = o.shape[e]._zod;
            return "input" === t.io ? void 0 === r.optin : void 0 === r.optout;
        }));
        c.size > 0 && (s.required = Array.from(c)), "never" === o.catchall?._zod.def.type ? s.additionalProperties = !1 : o.catchall ? o.catchall && (s.additionalProperties = Vu(o.catchall, t, {
            ...n,
            path: [
                ...n.path,
                "additionalProperties"
            ]
        })) : "output" === t.io && (s.additionalProperties = !1);
    }, Ed = (e, t, r, n)=>{
        const s = e._zod.def, o = !1 === s.inclusive, i = s.options.map((e, r)=>Vu(e, t, {
                ...n,
                path: [
                    ...n.path,
                    o ? "oneOf" : "anyOf",
                    r
                ]
            }));
        o ? r.oneOf = i : r.anyOf = i;
    }, Id = (e, t, r, n)=>{
        const s = e._zod.def, o = Vu(s.left, t, {
            ...n,
            path: [
                ...n.path,
                "allOf",
                0
            ]
        }), i = Vu(s.right, t, {
            ...n,
            path: [
                ...n.path,
                "allOf",
                1
            ]
        }), a = (e)=>"allOf" in e && 1 === Object.keys(e).length, c = [
            ...a(o) ? o.allOf : [
                o
            ],
            ...a(i) ? i.allOf : [
                i
            ]
        ];
        r.allOf = c;
    }, Cd = (e, t, r, n)=>{
        const s = r, o = e._zod.def;
        s.type = "array";
        const i = "draft-2020-12" === t.target ? "prefixItems" : "items", a = "draft-2020-12" === t.target || "openapi-3.0" === t.target ? "items" : "additionalItems", c = o.items.map((e, r)=>Vu(e, t, {
                ...n,
                path: [
                    ...n.path,
                    i,
                    r
                ]
            })), l = o.rest ? Vu(o.rest, t, {
            ...n,
            path: [
                ...n.path,
                a,
                ..."openapi-3.0" === t.target ? [
                    o.items.length
                ] : []
            ]
        }) : null;
        "draft-2020-12" === t.target ? (s.prefixItems = c, l && (s.items = l)) : "openapi-3.0" === t.target ? (s.items = {
            anyOf: c
        }, l && s.items.anyOf.push(l), s.minItems = c.length, l || (s.maxItems = c.length)) : (s.items = c, l && (s.additionalItems = l));
        const { minimum: u, maximum: d } = e._zod.bag;
        "number" == typeof u && (s.minItems = u), "number" == typeof d && (s.maxItems = d);
    }, kd = (e, t, r, n)=>{
        const s = r, o = e._zod.def;
        s.type = "object";
        const i = o.keyType, a = i._zod.bag, c = a?.patterns;
        if ("loose" === o.mode && c && c.size > 0) {
            const e = Vu(o.valueType, t, {
                ...n,
                path: [
                    ...n.path,
                    "patternProperties",
                    "*"
                ]
            });
            s.patternProperties = {};
            for (const t of c)s.patternProperties[t.source] = e;
        } else "draft-07" !== t.target && "draft-2020-12" !== t.target || (s.propertyNames = Vu(o.keyType, t, {
            ...n,
            path: [
                ...n.path,
                "propertyNames"
            ]
        })), s.additionalProperties = Vu(o.valueType, t, {
            ...n,
            path: [
                ...n.path,
                "additionalProperties"
            ]
        });
        const l = i._zod.values;
        if (l) {
            const e = [
                ...l
            ].filter((e)=>"string" == typeof e || "number" == typeof e);
            e.length > 0 && (s.required = e);
        }
    }, xd = (e, t, r, n)=>{
        const s = e._zod.def, o = Vu(s.innerType, t, n), i = t.seen.get(e);
        "openapi-3.0" === t.target ? (i.ref = s.innerType, r.nullable = !0) : r.anyOf = [
            o,
            {
                type: "null"
            }
        ];
    }, Td = (e, t, r, n)=>{
        const s = e._zod.def;
        Vu(s.innerType, t, n);
        t.seen.get(e).ref = s.innerType;
    }, Rd = (e, t, r, n)=>{
        const s = e._zod.def;
        Vu(s.innerType, t, n);
        t.seen.get(e).ref = s.innerType, r.default = JSON.parse(JSON.stringify(s.defaultValue));
    }, Bd = (e, t, r, n)=>{
        const s = e._zod.def;
        Vu(s.innerType, t, n);
        t.seen.get(e).ref = s.innerType, "input" === t.io && (r._prefault = JSON.parse(JSON.stringify(s.defaultValue)));
    }, Pd = (e, t, r, n)=>{
        const s = e._zod.def;
        Vu(s.innerType, t, n);
        let o;
        t.seen.get(e).ref = s.innerType;
        try {
            o = s.catchValue(void 0);
        } catch  {
            throw new Error("Dynamic catch values are not supported in JSON Schema");
        }
        r.default = o;
    }, Jd = (e, t, r, n)=>{
        const s = e._zod.def, o = "input" === t.io ? "transform" === s.in._zod.def.type ? s.out : s.in : s.out;
        Vu(o, t, n);
        t.seen.get(e).ref = o;
    }, Md = (e, t, r, n)=>{
        const s = e._zod.def;
        Vu(s.innerType, t, n);
        t.seen.get(e).ref = s.innerType, r.readOnly = !0;
    }, qd = (e, t, r, n)=>{
        const s = e._zod.def;
        Vu(s.innerType, t, n);
        t.seen.get(e).ref = s.innerType;
    }, Dd = (e, t, r, n)=>{
        const s = e._zod.def;
        Vu(s.innerType, t, n);
        t.seen.get(e).ref = s.innerType;
    }, Od = (e, t, r, n)=>{
        const s = e._zod.innerType;
        Vu(s, t, n);
        t.seen.get(e).ref = s;
    };
    const Nd = Eo("ZodISODateTime", (e, t)=>{
        _c.init(e, t), up.init(e, t);
    });
    function Fd(e) {
        return function(e, t) {
            return new e({
                type: "string",
                format: "datetime",
                check: "string_format",
                offset: !1,
                local: !1,
                precision: null,
                ...Vo(t)
            });
        }(Nd, e);
    }
    const Ud = Eo("ZodISODate", (e, t)=>{
        Ac.init(e, t), up.init(e, t);
    });
    function Ld(e) {
        return function(e, t) {
            return new e({
                type: "string",
                format: "date",
                check: "string_format",
                ...Vo(t)
            });
        }(Ud, e);
    }
    const $d = Eo("ZodISOTime", (e, t)=>{
        Sc.init(e, t), up.init(e, t);
    });
    function Qd(e) {
        return function(e, t) {
            return new e({
                type: "string",
                format: "time",
                check: "string_format",
                precision: null,
                ...Vo(t)
            });
        }($d, e);
    }
    const jd = Eo("ZodISODuration", (e, t)=>{
        bc.init(e, t), up.init(e, t);
    });
    function Gd(e) {
        return function(e, t) {
            return new e({
                type: "string",
                format: "duration",
                check: "string_format",
                ...Vo(t)
            });
        }(jd, e);
    }
    const Hd = (e, t)=>{
        ai.init(e, t), e.name = "ZodError", Object.defineProperties(e, {
            format: {
                value: (t)=>(function(e, t = (e)=>e.message) {
                        const r = {
                            _errors: []
                        }, n = (e)=>{
                            for (const s of e.issues)if ("invalid_union" === s.code && s.errors.length) s.errors.map((e)=>n({
                                    issues: e
                                }));
                            else if ("invalid_key" === s.code) n({
                                issues: s.issues
                            });
                            else if ("invalid_element" === s.code) n({
                                issues: s.issues
                            });
                            else if (0 === s.path.length) r._errors.push(t(s));
                            else {
                                let e = r, n = 0;
                                for(; n < s.path.length;){
                                    const r = s.path[n];
                                    n === s.path.length - 1 ? (e[r] = e[r] || {
                                        _errors: []
                                    }, e[r]._errors.push(t(s))) : e[r] = e[r] || {
                                        _errors: []
                                    }, e = e[r], n++;
                                }
                            }
                        };
                        return n(e), r;
                    })(e, t)
            },
            flatten: {
                value: (t)=>(function(e, t = (e)=>e.message) {
                        const r = {}, n = [];
                        for (const s of e.issues)s.path.length > 0 ? (r[s.path[0]] = r[s.path[0]] || [], r[s.path[0]].push(t(s))) : n.push(t(s));
                        return {
                            formErrors: n,
                            fieldErrors: r
                        };
                    })(e, t)
            },
            addIssue: {
                value: (t)=>{
                    e.issues.push(t), e.message = JSON.stringify(e.issues, Bo, 2);
                }
            },
            addIssues: {
                value: (t)=>{
                    e.issues.push(...t), e.message = JSON.stringify(e.issues, Bo, 2);
                }
            },
            isEmpty: {
                get: ()=>0 === e.issues.length
            }
        });
    }, zd = (Eo("ZodError", Hd), Eo("ZodError", Hd, {
        Parent: Error
    })), Wd = li(zd), Vd = di(zd), Kd = mi(zd), Yd = fi(zd), Zd = yi(zd), Xd = wi(zd), ep = vi(zd), tp = _i(zd), rp = Ai(zd), np = Si(zd), sp = bi(zd), op = Ei(zd), ip = Eo("ZodType", (e, t)=>(ic.init(e, t), Object.assign(e["~standard"], {
            jsonSchema: {
                input: Xu(e, "input"),
                output: Xu(e, "output")
            }
        }), e.toJSONSchema = ((e, t = {})=>(r)=>{
                const n = Wu({
                    ...r,
                    processors: t
                });
                return Vu(e, n), Ku(n, e), Yu(n, e);
            })(e, {}), e.def = t, e.type = t.type, Object.defineProperty(e, "_def", {
            value: t
        }), e.check = (...r)=>e.clone(No(t, {
                checks: [
                    ...t.checks ?? [],
                    ...r.map((e)=>"function" == typeof e ? {
                            _zod: {
                                check: e,
                                def: {
                                    check: "custom"
                                },
                                onattach: []
                            }
                        } : e)
                ]
            }), {
                parent: !0
            }), e.with = e.check, e.clone = (t, r)=>Wo(e, t, r), e.brand = ()=>e, e.register = (t, r)=>(t.add(e, r), e), e.parse = (t, r)=>Wd(e, t, r, {
                callee: e.parse
            }), e.safeParse = (t, r)=>Kd(e, t, r), e.parseAsync = async (t, r)=>Vd(e, t, r, {
                callee: e.parseAsync
            }), e.safeParseAsync = async (t, r)=>Yd(e, t, r), e.spa = e.safeParseAsync, e.encode = (t, r)=>Zd(e, t, r), e.decode = (t, r)=>Xd(e, t, r), e.encodeAsync = async (t, r)=>ep(e, t, r), e.decodeAsync = async (t, r)=>tp(e, t, r), e.safeEncode = (t, r)=>rp(e, t, r), e.safeDecode = (t, r)=>np(e, t, r), e.safeEncodeAsync = async (t, r)=>sp(e, t, r), e.safeDecodeAsync = async (t, r)=>op(e, t, r), e.refine = (t, r)=>e.check(Xh(t, r)), e.superRefine = (t)=>e.check(ef(t)), e.overwrite = (t)=>e.check(Uu(t)), e.optional = ()=>wh(e), e.exactOptional = ()=>_h(e), e.nullable = ()=>Sh(e), e.nullish = ()=>wh(Sh(e)), e.nonoptional = (t)=>Th(e, t), e.array = ()=>Nm(e), e.or = (t)=>Gm([
                e,
                t
            ]), e.and = (t)=>Ym(e, t), e.transform = (t)=>Oh(e, gh(t)), e.default = (t)=>Ih(e, t), e.prefault = (t)=>kh(e, t), e.catch = (t)=>Jh(e, t), e.pipe = (t)=>Oh(e, t), e.readonly = ()=>Lh(e), e.describe = (t)=>{
            const r = e.clone();
            return Wl.add(r, {
                description: t
            }), r;
        }, Object.defineProperty(e, "description", {
            get: ()=>Wl.get(e)?.description,
            configurable: !0
        }), e.meta = (...t)=>{
            if (0 === t.length) return Wl.get(e);
            const r = e.clone();
            return Wl.add(r, t[0]), r;
        }, e.isOptional = ()=>e.safeParse(void 0).success, e.isNullable = ()=>e.safeParse(null).success, e.apply = (t)=>t(e), e)), ap = Eo("_ZodString", (e, t)=>{
        ac.init(e, t), ip.init(e, t), e._zod.processJSONSchema = (t, r, n)=>td(e, t, r);
        const r = e._zod.bag;
        e.format = r.format ?? null, e.minLength = r.minimum ?? null, e.maxLength = r.maximum ?? null, e.regex = (...t)=>e.check(Pu(...t)), e.includes = (...t)=>e.check(qu(...t)), e.startsWith = (...t)=>e.check(Du(...t)), e.endsWith = (...t)=>e.check(Ou(...t)), e.min = (...t)=>e.check(Ru(...t)), e.max = (...t)=>e.check(Tu(...t)), e.length = (...t)=>e.check(Bu(...t)), e.nonempty = (...t)=>e.check(Ru(1, ...t)), e.lowercase = (t)=>e.check(Ju(t)), e.uppercase = (t)=>e.check(Mu(t)), e.trim = ()=>e.check($u()), e.normalize = (...t)=>e.check(Lu(...t)), e.toLowerCase = ()=>e.check(Qu()), e.toUpperCase = ()=>e.check(ju()), e.slugify = ()=>e.check(Gu());
    }), cp = Eo("ZodString", (e, t)=>{
        ac.init(e, t), ap.init(e, t), e.email = (t)=>e.check(Vl(dp, t)), e.url = (t)=>e.check(tu(_p, t)), e.jwt = (t)=>e.check(gu(Xp, t)), e.emoji = (t)=>e.check(ru(bp, t)), e.guid = (t)=>e.check(Kl(mp, t)), e.uuid = (t)=>e.check(Yl(fp, t)), e.uuidv4 = (t)=>e.check(Zl(fp, t)), e.uuidv6 = (t)=>e.check(Xl(fp, t)), e.uuidv7 = (t)=>e.check(eu(fp, t)), e.nanoid = (t)=>e.check(nu(Ip, t)), e.guid = (t)=>e.check(Kl(mp, t)), e.cuid = (t)=>e.check(su(kp, t)), e.cuid2 = (t)=>e.check(ou(Tp, t)), e.ulid = (t)=>e.check(iu(Bp, t)), e.base64 = (t)=>e.check(mu(zp, t)), e.base64url = (t)=>e.check(hu(Vp, t)), e.xid = (t)=>e.check(au(Jp, t)), e.ksuid = (t)=>e.check(cu(qp, t)), e.ipv4 = (t)=>e.check(lu(Op, t)), e.ipv6 = (t)=>e.check(uu(Lp, t)), e.cidrv4 = (t)=>e.check(du(Qp, t)), e.cidrv6 = (t)=>e.check(pu(Gp, t)), e.e164 = (t)=>e.check(fu(Yp, t)), e.datetime = (t)=>e.check(Fd(t)), e.date = (t)=>e.check(Ld(t)), e.time = (t)=>e.check(Qd(t)), e.duration = (t)=>e.check(Gd(t));
    });
    function lp(e) {
        return function(e, t) {
            return new e({
                type: "string",
                ...Vo(t)
            });
        }(cp, e);
    }
    const up = Eo("ZodStringFormat", (e, t)=>{
        cc.init(e, t), ap.init(e, t);
    }), dp = Eo("ZodEmail", (e, t)=>{
        dc.init(e, t), up.init(e, t);
    });
    function pp(e) {
        return Vl(dp, e);
    }
    const mp = Eo("ZodGUID", (e, t)=>{
        lc.init(e, t), up.init(e, t);
    });
    function hp(e) {
        return Kl(mp, e);
    }
    const fp = Eo("ZodUUID", (e, t)=>{
        uc.init(e, t), up.init(e, t);
    });
    function gp(e) {
        return Yl(fp, e);
    }
    function yp(e) {
        return Zl(fp, e);
    }
    function wp(e) {
        return Xl(fp, e);
    }
    function vp(e) {
        return eu(fp, e);
    }
    const _p = Eo("ZodURL", (e, t)=>{
        pc.init(e, t), up.init(e, t);
    });
    function Ap(e) {
        return tu(_p, e);
    }
    function Sp(e) {
        return tu(_p, {
            protocol: /^https?$/,
            hostname: ea,
            ...Vo(e)
        });
    }
    const bp = Eo("ZodEmoji", (e, t)=>{
        mc.init(e, t), up.init(e, t);
    });
    function Ep(e) {
        return ru(bp, e);
    }
    const Ip = Eo("ZodNanoID", (e, t)=>{
        hc.init(e, t), up.init(e, t);
    });
    function Cp(e) {
        return nu(Ip, e);
    }
    const kp = Eo("ZodCUID", (e, t)=>{
        fc.init(e, t), up.init(e, t);
    });
    function xp(e) {
        return su(kp, e);
    }
    const Tp = Eo("ZodCUID2", (e, t)=>{
        gc.init(e, t), up.init(e, t);
    });
    function Rp(e) {
        return ou(Tp, e);
    }
    const Bp = Eo("ZodULID", (e, t)=>{
        yc.init(e, t), up.init(e, t);
    });
    function Pp(e) {
        return iu(Bp, e);
    }
    const Jp = Eo("ZodXID", (e, t)=>{
        wc.init(e, t), up.init(e, t);
    });
    function Mp(e) {
        return au(Jp, e);
    }
    const qp = Eo("ZodKSUID", (e, t)=>{
        vc.init(e, t), up.init(e, t);
    });
    function Dp(e) {
        return cu(qp, e);
    }
    const Op = Eo("ZodIPv4", (e, t)=>{
        Ec.init(e, t), up.init(e, t);
    });
    function Np(e) {
        return lu(Op, e);
    }
    const Fp = Eo("ZodMAC", (e, t)=>{
        Cc.init(e, t), up.init(e, t);
    });
    function Up(e) {
        return function(e, t) {
            return new e({
                type: "string",
                format: "mac",
                check: "string_format",
                abort: !1,
                ...Vo(t)
            });
        }(Fp, e);
    }
    const Lp = Eo("ZodIPv6", (e, t)=>{
        Ic.init(e, t), up.init(e, t);
    });
    function $p(e) {
        return uu(Lp, e);
    }
    const Qp = Eo("ZodCIDRv4", (e, t)=>{
        kc.init(e, t), up.init(e, t);
    });
    function jp(e) {
        return du(Qp, e);
    }
    const Gp = Eo("ZodCIDRv6", (e, t)=>{
        xc.init(e, t), up.init(e, t);
    });
    function Hp(e) {
        return pu(Gp, e);
    }
    const zp = Eo("ZodBase64", (e, t)=>{
        Rc.init(e, t), up.init(e, t);
    });
    function Wp(e) {
        return mu(zp, e);
    }
    const Vp = Eo("ZodBase64URL", (e, t)=>{
        Bc.init(e, t), up.init(e, t);
    });
    function Kp(e) {
        return hu(Vp, e);
    }
    const Yp = Eo("ZodE164", (e, t)=>{
        Pc.init(e, t), up.init(e, t);
    });
    function Zp(e) {
        return fu(Yp, e);
    }
    const Xp = Eo("ZodJWT", (e, t)=>{
        Jc.init(e, t), up.init(e, t);
    });
    function em(e) {
        return gu(Xp, e);
    }
    const tm = Eo("ZodCustomStringFormat", (e, t)=>{
        Mc.init(e, t), up.init(e, t);
    });
    function rm(e, t, r = {}) {
        return zu(tm, e, t, r);
    }
    function nm(e) {
        return zu(tm, "hostname", Xi, e);
    }
    function sm(e) {
        return zu(tm, "hex", ga, e);
    }
    function om(e, r) {
        const n = `${e}_${r?.enc ?? "hex"}`, s = t[n];
        if (!s) throw new Error(`Unrecognized hash format: ${n}`);
        return zu(tm, n, s, r);
    }
    const im = Eo("ZodNumber", (e, t)=>{
        qc.init(e, t), ip.init(e, t), e._zod.processJSONSchema = (t, r, n)=>rd(e, t, r), e.gt = (t, r)=>e.check(vu(t, r)), e.gte = (t, r)=>e.check(_u(t, r)), e.min = (t, r)=>e.check(_u(t, r)), e.lt = (t, r)=>e.check(yu(t, r)), e.lte = (t, r)=>e.check(wu(t, r)), e.max = (t, r)=>e.check(wu(t, r)), e.int = (t)=>e.check(lm(t)), e.safe = (t)=>e.check(lm(t)), e.positive = (t)=>e.check(vu(0, t)), e.nonnegative = (t)=>e.check(_u(0, t)), e.negative = (t)=>e.check(yu(0, t)), e.nonpositive = (t)=>e.check(wu(0, t)), e.multipleOf = (t, r)=>e.check(Iu(t, r)), e.step = (t, r)=>e.check(Iu(t, r)), e.finite = ()=>e;
        const r = e._zod.bag;
        e.minValue = Math.max(r.minimum ?? Number.NEGATIVE_INFINITY, r.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, e.maxValue = Math.min(r.maximum ?? Number.POSITIVE_INFINITY, r.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, e.isInt = (r.format ?? "").includes("int") || Number.isSafeInteger(r.multipleOf ?? .5), e.isFinite = !0, e.format = r.format ?? null;
    });
    function am(e) {
        return function(e, t) {
            return new e({
                type: "number",
                checks: [],
                ...Vo(t)
            });
        }(im, e);
    }
    const cm = Eo("ZodNumberFormat", (e, t)=>{
        Dc.init(e, t), im.init(e, t);
    });
    function lm(e) {
        return function(e, t) {
            return new e({
                type: "number",
                check: "number_format",
                abort: !1,
                format: "safeint",
                ...Vo(t)
            });
        }(cm, e);
    }
    function um(e) {
        return function(e, t) {
            return new e({
                type: "number",
                check: "number_format",
                abort: !1,
                format: "float32",
                ...Vo(t)
            });
        }(cm, e);
    }
    function dm(e) {
        return function(e, t) {
            return new e({
                type: "number",
                check: "number_format",
                abort: !1,
                format: "float64",
                ...Vo(t)
            });
        }(cm, e);
    }
    function pm(e) {
        return function(e, t) {
            return new e({
                type: "number",
                check: "number_format",
                abort: !1,
                format: "int32",
                ...Vo(t)
            });
        }(cm, e);
    }
    function mm(e) {
        return function(e, t) {
            return new e({
                type: "number",
                check: "number_format",
                abort: !1,
                format: "uint32",
                ...Vo(t)
            });
        }(cm, e);
    }
    const hm = Eo("ZodBoolean", (e, t)=>{
        Oc.init(e, t), ip.init(e, t), e._zod.processJSONSchema = (e, t, r)=>nd(0, 0, t);
    });
    function fm(e) {
        return function(e, t) {
            return new e({
                type: "boolean",
                ...Vo(t)
            });
        }(hm, e);
    }
    const gm = Eo("ZodBigInt", (e, t)=>{
        Nc.init(e, t), ip.init(e, t), e._zod.processJSONSchema = (e, t, r)=>sd(0, e), e.gte = (t, r)=>e.check(_u(t, r)), e.min = (t, r)=>e.check(_u(t, r)), e.gt = (t, r)=>e.check(vu(t, r)), e.gte = (t, r)=>e.check(_u(t, r)), e.min = (t, r)=>e.check(_u(t, r)), e.lt = (t, r)=>e.check(yu(t, r)), e.lte = (t, r)=>e.check(wu(t, r)), e.max = (t, r)=>e.check(wu(t, r)), e.positive = (t)=>e.check(vu(BigInt(0), t)), e.negative = (t)=>e.check(yu(BigInt(0), t)), e.nonpositive = (t)=>e.check(wu(BigInt(0), t)), e.nonnegative = (t)=>e.check(_u(BigInt(0), t)), e.multipleOf = (t, r)=>e.check(Iu(t, r));
        const r = e._zod.bag;
        e.minValue = r.minimum ?? null, e.maxValue = r.maximum ?? null, e.format = r.format ?? null;
    });
    function ym(e) {
        return function(e, t) {
            return new e({
                type: "bigint",
                ...Vo(t)
            });
        }(gm, e);
    }
    const wm = Eo("ZodBigIntFormat", (e, t)=>{
        Fc.init(e, t), gm.init(e, t);
    });
    function vm(e) {
        return function(e, t) {
            return new e({
                type: "bigint",
                check: "bigint_format",
                abort: !1,
                format: "int64",
                ...Vo(t)
            });
        }(wm, e);
    }
    function _m(e) {
        return function(e, t) {
            return new e({
                type: "bigint",
                check: "bigint_format",
                abort: !1,
                format: "uint64",
                ...Vo(t)
            });
        }(wm, e);
    }
    const Am = Eo("ZodSymbol", (e, t)=>{
        Uc.init(e, t), ip.init(e, t), e._zod.processJSONSchema = (e, t, r)=>od(0, e);
    });
    function Sm(e) {
        return function(e, t) {
            return new e({
                type: "symbol",
                ...Vo(t)
            });
        }(Am, e);
    }
    const bm = Eo("ZodUndefined", (e, t)=>{
        Lc.init(e, t), ip.init(e, t), e._zod.processJSONSchema = (e, t, r)=>ad(0, e);
    });
    function Em(e) {
        return function(e, t) {
            return new e({
                type: "undefined",
                ...Vo(t)
            });
        }(bm, e);
    }
    const Im = Eo("ZodNull", (e, t)=>{
        $c.init(e, t), ip.init(e, t), e._zod.processJSONSchema = (e, t, r)=>id(0, e, t);
    });
    function Cm(e) {
        return function(e, t) {
            return new e({
                type: "null",
                ...Vo(t)
            });
        }(Im, e);
    }
    const km = Eo("ZodAny", (e, t)=>{
        Qc.init(e, t), ip.init(e, t), e._zod.processJSONSchema = (e, t, r)=>{};
    });
    function xm() {
        return function(e) {
            return new e({
                type: "any"
            });
        }(km);
    }
    const Tm = Eo("ZodUnknown", (e, t)=>{
        jc.init(e, t), ip.init(e, t), e._zod.processJSONSchema = (e, t, r)=>{};
    });
    function Rm() {
        return function(e) {
            return new e({
                type: "unknown"
            });
        }(Tm);
    }
    const Bm = Eo("ZodNever", (e, t)=>{
        Gc.init(e, t), ip.init(e, t), e._zod.processJSONSchema = (e, t, r)=>ld(0, 0, t);
    });
    function Pm(e) {
        return function(e, t) {
            return new e({
                type: "never",
                ...Vo(t)
            });
        }(Bm, e);
    }
    const Jm = Eo("ZodVoid", (e, t)=>{
        Hc.init(e, t), ip.init(e, t), e._zod.processJSONSchema = (e, t, r)=>cd(0, e);
    });
    function Mm(e) {
        return function(e, t) {
            return new e({
                type: "void",
                ...Vo(t)
            });
        }(Jm, e);
    }
    const qm = Eo("ZodDate", (e, t)=>{
        zc.init(e, t), ip.init(e, t), e._zod.processJSONSchema = (e, t, r)=>ud(0, e), e.min = (t, r)=>e.check(_u(t, r)), e.max = (t, r)=>e.check(wu(t, r));
        const r = e._zod.bag;
        e.minDate = r.minimum ? new Date(r.minimum) : null, e.maxDate = r.maximum ? new Date(r.maximum) : null;
    });
    function Dm(e) {
        return function(e, t) {
            return new e({
                type: "date",
                ...Vo(t)
            });
        }(qm, e);
    }
    const Om = Eo("ZodArray", (e, t)=>{
        Vc.init(e, t), ip.init(e, t), e._zod.processJSONSchema = (t, r, n)=>Sd(e, t, r, n), e.element = t.element, e.min = (t, r)=>e.check(Ru(t, r)), e.nonempty = (t)=>e.check(Ru(1, t)), e.max = (t, r)=>e.check(Tu(t, r)), e.length = (t, r)=>e.check(Bu(t, r)), e.unwrap = ()=>e.element;
    });
    function Nm(e, t) {
        return function(e, t, r) {
            return new e({
                type: "array",
                element: t,
                ...Vo(r)
            });
        }(Om, e, t);
    }
    function Fm(e) {
        const t = e._zod.def.shape;
        return lh(Object.keys(t));
    }
    const Um = Eo("ZodObject", (e, t)=>{
        el.init(e, t), ip.init(e, t), e._zod.processJSONSchema = (t, r, n)=>bd(e, t, r, n), Do(e, "shape", ()=>t.shape), e.keyof = ()=>lh(Object.keys(e._zod.def.shape)), e.catchall = (t)=>e.clone({
                ...e._zod.def,
                catchall: t
            }), e.passthrough = ()=>e.clone({
                ...e._zod.def,
                catchall: Rm()
            }), e.loose = ()=>e.clone({
                ...e._zod.def,
                catchall: Rm()
            }), e.strict = ()=>e.clone({
                ...e._zod.def,
                catchall: Pm()
            }), e.strip = ()=>e.clone({
                ...e._zod.def,
                catchall: void 0
            }), e.extend = (t)=>(function(e, t) {
                if (!Qo(t)) throw new Error("Invalid input to extend: expected a plain object");
                const r = e._zod.def.checks;
                if (r && r.length > 0) {
                    const r = e._zod.def.shape;
                    for(const e in t)if (void 0 !== Object.getOwnPropertyDescriptor(r, e)) throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
                }
                const n = No(e._zod.def, {
                    get shape () {
                        const r = {
                            ...e._zod.def.shape,
                            ...t
                        };
                        return Oo(this, "shape", r), r;
                    }
                });
                return Wo(e, n);
            })(e, t), e.safeExtend = (t)=>(function(e, t) {
                if (!Qo(t)) throw new Error("Invalid input to safeExtend: expected a plain object");
                const r = No(e._zod.def, {
                    get shape () {
                        const r = {
                            ...e._zod.def.shape,
                            ...t
                        };
                        return Oo(this, "shape", r), r;
                    }
                });
                return Wo(e, r);
            })(e, t), e.merge = (t)=>(function(e, t) {
                const r = No(e._zod.def, {
                    get shape () {
                        const r = {
                            ...e._zod.def.shape,
                            ...t._zod.def.shape
                        };
                        return Oo(this, "shape", r), r;
                    },
                    get catchall () {
                        return t._zod.def.catchall;
                    },
                    checks: []
                });
                return Wo(e, r);
            })(e, t), e.pick = (t)=>(function(e, t) {
                const r = e._zod.def, n = r.checks;
                if (n && n.length > 0) throw new Error(".pick() cannot be used on object schemas containing refinements");
                return Wo(e, No(e._zod.def, {
                    get shape () {
                        const e = {};
                        for(const n in t){
                            if (!(n in r.shape)) throw new Error(`Unrecognized key: "${n}"`);
                            t[n] && (e[n] = r.shape[n]);
                        }
                        return Oo(this, "shape", e), e;
                    },
                    checks: []
                }));
            })(e, t), e.omit = (t)=>(function(e, t) {
                const r = e._zod.def, n = r.checks;
                if (n && n.length > 0) throw new Error(".omit() cannot be used on object schemas containing refinements");
                const s = No(e._zod.def, {
                    get shape () {
                        const n = {
                            ...e._zod.def.shape
                        };
                        for(const e in t){
                            if (!(e in r.shape)) throw new Error(`Unrecognized key: "${e}"`);
                            t[e] && delete n[e];
                        }
                        return Oo(this, "shape", n), n;
                    },
                    checks: []
                });
                return Wo(e, s);
            })(e, t), e.partial = (...t)=>(function(e, t, r) {
                const n = t._zod.def.checks;
                if (n && n.length > 0) throw new Error(".partial() cannot be used on object schemas containing refinements");
                const s = No(t._zod.def, {
                    get shape () {
                        const n = t._zod.def.shape, s = {
                            ...n
                        };
                        if (r) for(const t in r){
                            if (!(t in n)) throw new Error(`Unrecognized key: "${t}"`);
                            r[t] && (s[t] = e ? new e({
                                type: "optional",
                                innerType: n[t]
                            }) : n[t]);
                        }
                        else for(const t in n)s[t] = e ? new e({
                            type: "optional",
                            innerType: n[t]
                        }) : n[t];
                        return Oo(this, "shape", s), s;
                    },
                    checks: []
                });
                return Wo(t, s);
            })(yh, e, t[0]), e.required = (...t)=>(function(e, t, r) {
                const n = No(t._zod.def, {
                    get shape () {
                        const n = t._zod.def.shape, s = {
                            ...n
                        };
                        if (r) for(const t in r){
                            if (!(t in s)) throw new Error(`Unrecognized key: "${t}"`);
                            r[t] && (s[t] = new e({
                                type: "nonoptional",
                                innerType: n[t]
                            }));
                        }
                        else for(const t in n)s[t] = new e({
                            type: "nonoptional",
                            innerType: n[t]
                        });
                        return Oo(this, "shape", s), s;
                    }
                });
                return Wo(t, n);
            })(xh, e, t[0]);
    });
    function Lm(e, t) {
        const r = {
            type: "object",
            shape: e ?? {},
            ...Vo(t)
        };
        return new Um(r);
    }
    function $m(e, t) {
        return new Um({
            type: "object",
            shape: e,
            catchall: Pm(),
            ...Vo(t)
        });
    }
    function Qm(e, t) {
        return new Um({
            type: "object",
            shape: e,
            catchall: Rm(),
            ...Vo(t)
        });
    }
    const jm = Eo("ZodUnion", (e, t)=>{
        rl.init(e, t), ip.init(e, t), e._zod.processJSONSchema = (t, r, n)=>Ed(e, t, r, n), e.options = t.options;
    });
    function Gm(e, t) {
        return new jm({
            type: "union",
            options: e,
            ...Vo(t)
        });
    }
    const Hm = Eo("ZodXor", (e, t)=>{
        jm.init(e, t), sl.init(e, t), e._zod.processJSONSchema = (t, r, n)=>Ed(e, t, r, n), e.options = t.options;
    });
    function zm(e, t) {
        return new Hm({
            type: "union",
            options: e,
            inclusive: !1,
            ...Vo(t)
        });
    }
    const Wm = Eo("ZodDiscriminatedUnion", (e, t)=>{
        jm.init(e, t), ol.init(e, t);
    });
    function Vm(e, t, r) {
        return new Wm({
            type: "union",
            options: t,
            discriminator: e,
            ...Vo(r)
        });
    }
    const Km = Eo("ZodIntersection", (e, t)=>{
        il.init(e, t), ip.init(e, t), e._zod.processJSONSchema = (t, r, n)=>Id(e, t, r, n);
    });
    function Ym(e, t) {
        return new Km({
            type: "intersection",
            left: e,
            right: t
        });
    }
    const Zm = Eo("ZodTuple", (e, t)=>{
        ll.init(e, t), ip.init(e, t), e._zod.processJSONSchema = (t, r, n)=>Cd(e, t, r, n), e.rest = (t)=>e.clone({
                ...e._zod.def,
                rest: t
            });
    });
    function Xm(e, t, r) {
        const n = t instanceof ic;
        return new Zm({
            type: "tuple",
            items: e,
            rest: n ? t : null,
            ...Vo(n ? r : t)
        });
    }
    const eh = Eo("ZodRecord", (e, t)=>{
        dl.init(e, t), ip.init(e, t), e._zod.processJSONSchema = (t, r, n)=>kd(e, t, r, n), e.keyType = t.keyType, e.valueType = t.valueType;
    });
    function th(e, t, r) {
        return new eh({
            type: "record",
            keyType: e,
            valueType: t,
            ...Vo(r)
        });
    }
    function rh(e, t, r) {
        const n = Wo(e);
        return n._zod.values = void 0, new eh({
            type: "record",
            keyType: n,
            valueType: t,
            ...Vo(r)
        });
    }
    function nh(e, t, r) {
        return new eh({
            type: "record",
            keyType: e,
            valueType: t,
            mode: "loose",
            ...Vo(r)
        });
    }
    const sh = Eo("ZodMap", (e, t)=>{
        pl.init(e, t), ip.init(e, t), e._zod.processJSONSchema = (e, t, r)=>_d(0, e), e.keyType = t.keyType, e.valueType = t.valueType, e.min = (...t)=>e.check(ku(...t)), e.nonempty = (t)=>e.check(ku(1, t)), e.max = (...t)=>e.check(Cu(...t)), e.size = (...t)=>e.check(xu(...t));
    });
    function oh(e, t, r) {
        return new sh({
            type: "map",
            keyType: e,
            valueType: t,
            ...Vo(r)
        });
    }
    const ih = Eo("ZodSet", (e, t)=>{
        hl.init(e, t), ip.init(e, t), e._zod.processJSONSchema = (e, t, r)=>Ad(0, e), e.min = (...t)=>e.check(ku(...t)), e.nonempty = (t)=>e.check(ku(1, t)), e.max = (...t)=>e.check(Cu(...t)), e.size = (...t)=>e.check(xu(...t));
    });
    function ah(e, t) {
        return new ih({
            type: "set",
            valueType: e,
            ...Vo(t)
        });
    }
    const ch = Eo("ZodEnum", (e, t)=>{
        gl.init(e, t), ip.init(e, t), e._zod.processJSONSchema = (t, r, n)=>dd(e, 0, r), e.enum = t.entries, e.options = Object.values(t.entries);
        const r = new Set(Object.keys(t.entries));
        e.extract = (e, n)=>{
            const s = {};
            for (const n of e){
                if (!r.has(n)) throw new Error(`Key ${n} not found in enum`);
                s[n] = t.entries[n];
            }
            return new ch({
                ...t,
                checks: [],
                ...Vo(n),
                entries: s
            });
        }, e.exclude = (e, n)=>{
            const s = {
                ...t.entries
            };
            for (const t of e){
                if (!r.has(t)) throw new Error(`Key ${t} not found in enum`);
                delete s[t];
            }
            return new ch({
                ...t,
                checks: [],
                ...Vo(n),
                entries: s
            });
        };
    });
    function lh(e, t) {
        const r = Array.isArray(e) ? Object.fromEntries(e.map((e)=>[
                e,
                e
            ])) : e;
        return new ch({
            type: "enum",
            entries: r,
            ...Vo(t)
        });
    }
    function uh(e, t) {
        return new ch({
            type: "enum",
            entries: e,
            ...Vo(t)
        });
    }
    const dh = Eo("ZodLiteral", (e, t)=>{
        yl.init(e, t), ip.init(e, t), e._zod.processJSONSchema = (t, r, n)=>pd(e, t, r), e.values = new Set(t.values), Object.defineProperty(e, "value", {
            get () {
                if (t.values.length > 1) throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
                return t.values[0];
            }
        });
    });
    function ph(e, t) {
        return new dh({
            type: "literal",
            values: Array.isArray(e) ? e : [
                e
            ],
            ...Vo(t)
        });
    }
    const mh = Eo("ZodFile", (e, t)=>{
        wl.init(e, t), ip.init(e, t), e._zod.processJSONSchema = (t, r, n)=>fd(e, 0, r), e.min = (t, r)=>e.check(ku(t, r)), e.max = (t, r)=>e.check(Cu(t, r)), e.mime = (t, r)=>e.check(Fu(Array.isArray(t) ? t : [
                t
            ], r));
    });
    function hh(e) {
        return function(e, t) {
            return new e({
                type: "file",
                ...Vo(t)
            });
        }(mh, e);
    }
    const fh = Eo("ZodTransform", (e, t)=>{
        vl.init(e, t), ip.init(e, t), e._zod.processJSONSchema = (e, t, r)=>vd(0, e), e._zod.parse = (r, n)=>{
            if ("backward" === n.direction) throw new Co(e.constructor.name);
            r.addIssue = (n)=>{
                if ("string" == typeof n) r.issues.push(oi(n, r.value, t));
                else {
                    const t = n;
                    t.fatal && (t.continue = !1), t.code ?? (t.code = "custom"), t.input ?? (t.input = r.value), t.inst ?? (t.inst = e), r.issues.push(oi(t));
                }
            };
            const s = t.transform(r.value, r);
            return s instanceof Promise ? s.then((e)=>(r.value = e, r)) : (r.value = s, r);
        };
    });
    function gh(e) {
        return new fh({
            type: "transform",
            transform: e
        });
    }
    const yh = Eo("ZodOptional", (e, t)=>{
        Al.init(e, t), ip.init(e, t), e._zod.processJSONSchema = (t, r, n)=>Dd(e, t, 0, n), e.unwrap = ()=>e._zod.def.innerType;
    });
    function wh(e) {
        return new yh({
            type: "optional",
            innerType: e
        });
    }
    const vh = Eo("ZodExactOptional", (e, t)=>{
        Sl.init(e, t), ip.init(e, t), e._zod.processJSONSchema = (t, r, n)=>Dd(e, t, 0, n), e.unwrap = ()=>e._zod.def.innerType;
    });
    function _h(e) {
        return new vh({
            type: "optional",
            innerType: e
        });
    }
    const Ah = Eo("ZodNullable", (e, t)=>{
        bl.init(e, t), ip.init(e, t), e._zod.processJSONSchema = (t, r, n)=>xd(e, t, r, n), e.unwrap = ()=>e._zod.def.innerType;
    });
    function Sh(e) {
        return new Ah({
            type: "nullable",
            innerType: e
        });
    }
    function bh(e) {
        return wh(Sh(e));
    }
    const Eh = Eo("ZodDefault", (e, t)=>{
        El.init(e, t), ip.init(e, t), e._zod.processJSONSchema = (t, r, n)=>Rd(e, t, r, n), e.unwrap = ()=>e._zod.def.innerType, e.removeDefault = e.unwrap;
    });
    function Ih(e, t) {
        return new Eh({
            type: "default",
            innerType: e,
            get defaultValue () {
                return "function" == typeof t ? t() : jo(t);
            }
        });
    }
    const Ch = Eo("ZodPrefault", (e, t)=>{
        Cl.init(e, t), ip.init(e, t), e._zod.processJSONSchema = (t, r, n)=>Bd(e, t, r, n), e.unwrap = ()=>e._zod.def.innerType;
    });
    function kh(e, t) {
        return new Ch({
            type: "prefault",
            innerType: e,
            get defaultValue () {
                return "function" == typeof t ? t() : jo(t);
            }
        });
    }
    const xh = Eo("ZodNonOptional", (e, t)=>{
        kl.init(e, t), ip.init(e, t), e._zod.processJSONSchema = (t, r, n)=>Td(e, t, 0, n), e.unwrap = ()=>e._zod.def.innerType;
    });
    function Th(e, t) {
        return new xh({
            type: "nonoptional",
            innerType: e,
            ...Vo(t)
        });
    }
    const Rh = Eo("ZodSuccess", (e, t)=>{
        Tl.init(e, t), ip.init(e, t), e._zod.processJSONSchema = (e, t, r)=>gd(0, 0, t), e.unwrap = ()=>e._zod.def.innerType;
    });
    function Bh(e) {
        return new Rh({
            type: "success",
            innerType: e
        });
    }
    const Ph = Eo("ZodCatch", (e, t)=>{
        Rl.init(e, t), ip.init(e, t), e._zod.processJSONSchema = (t, r, n)=>Pd(e, t, r, n), e.unwrap = ()=>e._zod.def.innerType, e.removeCatch = e.unwrap;
    });
    function Jh(e, t) {
        return new Ph({
            type: "catch",
            innerType: e,
            catchValue: "function" == typeof t ? t : ()=>t
        });
    }
    const Mh = Eo("ZodNaN", (e, t)=>{
        Bl.init(e, t), ip.init(e, t), e._zod.processJSONSchema = (e, t, r)=>md(0, e);
    });
    function qh(e) {
        return function(e, t) {
            return new e({
                type: "nan",
                ...Vo(t)
            });
        }(Mh, e);
    }
    const Dh = Eo("ZodPipe", (e, t)=>{
        Pl.init(e, t), ip.init(e, t), e._zod.processJSONSchema = (t, r, n)=>Jd(e, t, 0, n), e.in = t.in, e.out = t.out;
    });
    function Oh(e, t) {
        return new Dh({
            type: "pipe",
            in: e,
            out: t
        });
    }
    const Nh = Eo("ZodCodec", (e, t)=>{
        Dh.init(e, t), Ml.init(e, t);
    });
    function Fh(e, t, r) {
        return new Nh({
            type: "pipe",
            in: e,
            out: t,
            transform: r.decode,
            reverseTransform: r.encode
        });
    }
    const Uh = Eo("ZodReadonly", (e, t)=>{
        Ol.init(e, t), ip.init(e, t), e._zod.processJSONSchema = (t, r, n)=>Md(e, t, r, n), e.unwrap = ()=>e._zod.def.innerType;
    });
    function Lh(e) {
        return new Uh({
            type: "readonly",
            innerType: e
        });
    }
    const $h = Eo("ZodTemplateLiteral", (e, t)=>{
        Fl.init(e, t), ip.init(e, t), e._zod.processJSONSchema = (t, r, n)=>hd(e, 0, r);
    });
    function Qh(e, t) {
        return new $h({
            type: "template_literal",
            parts: e,
            ...Vo(t)
        });
    }
    const jh = Eo("ZodLazy", (e, t)=>{
        $l.init(e, t), ip.init(e, t), e._zod.processJSONSchema = (t, r, n)=>Od(e, t, 0, n), e.unwrap = ()=>e._zod.def.getter();
    });
    function Gh(e) {
        return new jh({
            type: "lazy",
            getter: e
        });
    }
    const Hh = Eo("ZodPromise", (e, t)=>{
        Ll.init(e, t), ip.init(e, t), e._zod.processJSONSchema = (t, r, n)=>qd(e, t, 0, n), e.unwrap = ()=>e._zod.def.innerType;
    });
    function zh(e) {
        return new Hh({
            type: "promise",
            innerType: e
        });
    }
    const Wh = Eo("ZodFunction", (e, t)=>{
        Ul.init(e, t), ip.init(e, t), e._zod.processJSONSchema = (e, t, r)=>wd(0, e);
    });
    function Vh(e) {
        return new Wh({
            type: "function",
            input: Array.isArray(e?.input) ? Xm(e?.input) : e?.input ?? Nm(Rm()),
            output: e?.output ?? Rm()
        });
    }
    const Kh = Eo("ZodCustom", (e, t)=>{
        Ql.init(e, t), ip.init(e, t), e._zod.processJSONSchema = (e, t, r)=>yd(0, e);
    });
    function Yh(e) {
        const t = new Ma({
            check: "custom"
        });
        return t._zod.check = e, t;
    }
    function Zh(e, t) {
        return function(e, t, r) {
            const n = Vo(r);
            return n.abort ?? (n.abort = !0), new e({
                type: "custom",
                check: "custom",
                fn: t,
                ...n
            });
        }(Kh, e ?? (()=>!0), t);
    }
    function Xh(e, t = {}) {
        return function(e, t, r) {
            return new e({
                type: "custom",
                check: "custom",
                fn: t,
                ...Vo(r)
            });
        }(Kh, e, t);
    }
    function ef(e) {
        return Hu(e);
    }
    const tf = function(e) {
        const t = new Ma({
            check: "describe"
        });
        return t._zod.onattach = [
            (t)=>{
                const r = Wl.get(t) ?? {};
                Wl.add(t, {
                    ...r,
                    description: e
                });
            }
        ], t._zod.check = ()=>{}, t;
    }, rf = function(e) {
        const t = new Ma({
            check: "meta"
        });
        return t._zod.onattach = [
            (t)=>{
                const r = Wl.get(t) ?? {};
                Wl.add(t, {
                    ...r,
                    ...e
                });
            }
        ], t._zod.check = ()=>{}, t;
    };
    function nf(e, t = {}) {
        const r = new Kh({
            type: "custom",
            check: "custom",
            fn: (t)=>t instanceof e,
            abort: !0,
            ...Vo(t)
        });
        return r._zod.bag.Class = e, r._zod.check = (t)=>{
            t.value instanceof e || t.issues.push({
                code: "invalid_type",
                expected: e.name,
                input: t.value,
                inst: r,
                path: [
                    ...r._zod.def.path ?? []
                ]
            });
        }, r;
    }
    const sf = (...e)=>(function(e, t) {
            const r = Vo(t);
            let n = r.truthy ?? [
                "true",
                "1",
                "yes",
                "on",
                "y",
                "enabled"
            ], s = r.falsy ?? [
                "false",
                "0",
                "no",
                "off",
                "n",
                "disabled"
            ];
            "sensitive" !== r.case && (n = n.map((e)=>"string" == typeof e ? e.toLowerCase() : e), s = s.map((e)=>"string" == typeof e ? e.toLowerCase() : e));
            const o = new Set(n), i = new Set(s), a = e.Codec ?? Ml, c = e.Boolean ?? Oc, l = new a({
                type: "pipe",
                in: new (e.String ?? ac)({
                    type: "string",
                    error: r.error
                }),
                out: new c({
                    type: "boolean",
                    error: r.error
                }),
                transform: (e, t)=>{
                    let n = e;
                    return "sensitive" !== r.case && (n = n.toLowerCase()), !!o.has(n) || !i.has(n) && (t.issues.push({
                        code: "invalid_value",
                        expected: "stringbool",
                        values: [
                            ...o,
                            ...i
                        ],
                        input: t.value,
                        inst: l,
                        continue: !1
                    }), {});
                },
                reverseTransform: (e, t)=>!0 === e ? n[0] || "true" : s[0] || "false",
                error: r.error
            });
            return l;
        })({
            Codec: Nh,
            Boolean: hm,
            String: cp
        }, ...e);
    function of(e) {
        const t = Gh(()=>Gm([
                lp(e),
                am(),
                fm(),
                Cm(),
                Nm(t),
                th(lp(), t)
            ]));
        return t;
    }
    function af(e, t) {
        return Oh(gh(e), t);
    }
    const cf = "custom";
    var lf;
    lf || (lf = {});
    new Set([
        "$schema",
        "$ref",
        "$defs",
        "definitions",
        "$id",
        "id",
        "$comment",
        "$anchor",
        "$vocabulary",
        "$dynamicRef",
        "$dynamicAnchor",
        "type",
        "enum",
        "const",
        "anyOf",
        "oneOf",
        "allOf",
        "not",
        "properties",
        "required",
        "additionalProperties",
        "patternProperties",
        "propertyNames",
        "minProperties",
        "maxProperties",
        "items",
        "prefixItems",
        "additionalItems",
        "minItems",
        "maxItems",
        "uniqueItems",
        "contains",
        "minContains",
        "maxContains",
        "minLength",
        "maxLength",
        "pattern",
        "format",
        "minimum",
        "maximum",
        "exclusiveMinimum",
        "exclusiveMaximum",
        "multipleOf",
        "description",
        "default",
        "contentEncoding",
        "contentMediaType",
        "contentSchema",
        "unevaluatedItems",
        "unevaluatedProperties",
        "if",
        "then",
        "else",
        "dependentSchemas",
        "dependentRequired",
        "nullable",
        "readOnly"
    ]);
    xo({
        localeError: Gl()
    });
    Lm({
        lifecycle: lh([
            "off",
            "default-on",
            "default-off",
            "hidden",
            "end-of-life",
            "internal"
        ]),
        pickerDisplayName: lp().min(1).nullish(),
        upgradeModelId: lp().min(1).nullish()
    }), Object.keys({
        agent_goal_continuation: {
            client: !0,
            default: !0
        },
        nal_websocket_client: {
            client: !0,
            default: !1
        },
        agent_queued_prompt_new_request_id: {
            client: !0,
            default: !1
        },
        org_billing_admin_role: {
            client: !0,
            default: !1
        },
        team_members_show_org_admins: {
            client: !0,
            default: !0
        },
        org_team_settings_copy_on_create: {
            client: !0,
            default: !0
        },
        org_team_settings_copy_to_existing_team: {
            client: !0,
            default: !1
        },
        org_credit_request_button_hide: {
            client: !0,
            default: !1
        },
        sso_jit_auto_enrollment_settings: {
            client: !0,
            default: !1
        },
        sand_mobile_session_upgrade: {
            client: !0,
            default: !0
        },
        remote_agent_host_mobile: {
            client: !0,
            default: !1
        },
        response_comparison_comment_prompt: {
            client: !0,
            default: !1
        },
        cursor_new_colors: {
            client: !0,
            default: !1
        },
        grok_bot_setup_checklist: {
            client: !0,
            default: !0
        },
        grok_bot_hibernated_owner_vm_termination: {
            client: !0,
            default: !0
        },
        grok_bot_team_bot_group_restrictions: {
            client: !0,
            default: !1
        },
        glass_grok_bot_topbar_cta_show: {
            client: !0,
            default: !1,
            requiresAuthenticatedBootstrap: !0
        },
        grok_bot_admin_enterprise_controls_frontend_enabled: {
            client: !0,
            default: !1
        },
        grok_bot_merged_bots_view_enabled: {
            client: !0,
            default: !1
        },
        dashboard_grok_bot_onboarding_checklist: {
            client: !0,
            default: !1
        },
        dashboard_team_checklist_origin_setup: {
            client: !0,
            default: !1
        },
        dashboard_grok_bot_terms: {
            client: !0,
            default: !1
        },
        gb_block_papered_org_signups: {
            client: !0,
            default: !1
        },
        sand_mobile_notification_sounds: {
            client: !0,
            default: !1
        },
        sand_mobile_agent_computer_console: {
            client: !0,
            default: !0
        },
        sand_mobile_i18n: {
            client: !0,
            default: !0
        },
        sand_mobile_home_unread_jump_pills: {
            client: !0,
            default: !1
        },
        sand_mobile_failures_screen: {
            client: !0,
            default: !1
        },
        sand_mobile_unified_marketplace: {
            client: !0,
            default: !1
        },
        sand_mobile_feedback_kill_switch: {
            client: !0,
            default: !1
        },
        sand_mobile_app_store_update_indicator: {
            client: !0,
            default: !0
        },
        sand_mobile_profile_multimedia_tabs: {
            client: !0,
            default: !0
        },
        sand_mobile_slash_skill_trigger: {
            client: !0,
            default: !0
        },
        sand_mobile_dictation_diagnostics: {
            client: !0,
            default: !0
        },
        sand_mobile_manage_subscription_kill_switch: {
            client: !0,
            default: !1
        },
        sand_mobile_change_limit_kill_switch: {
            client: !0,
            default: !1
        },
        sand_enable_home_pull_to_refresh: {
            client: !0,
            default: !1
        },
        sand_special_settings: {
            client: !0,
            default: !1
        },
        sand_messages_tools: {
            client: !0,
            default: !1
        },
        sand_mobile_local_tools: {
            client: !0,
            default: !1
        },
        sand_connected_activity_tool: {
            client: !0,
            default: !1
        },
        grok_bot_hide_internal_details: {
            client: !0,
            default: !0
        },
        grok_bot_active_reactions: {
            client: !0,
            default: !0
        },
        grok_bot_link_items: {
            client: !0,
            default: !1
        },
        grok_bot_renamed_prompt_markers: {
            client: !0,
            default: !1
        },
        sand_automation_agent_gone_terminal: {
            client: !0,
            default: !1
        },
        grok_bot_builtin_admin_tool_policy: {
            client: !0,
            default: !1
        },
        mcp_grant_migration_enabled: {
            client: !0,
            default: !1
        },
        hosted_mcp_routing_enabled: {
            client: !0,
            default: !1
        },
        grok_bot_durable_identity: {
            client: !0,
            default: !0
        },
        grok_bot_durable_identity_writes: {
            client: !0,
            default: !0
        },
        grok_bot_identity_backfill: {
            client: !0,
            default: !0
        },
        grok_bot_temporal_harness: {
            client: !0,
            default: !1
        },
        grok_bot_stripe_link: {
            client: !0,
            default: !0
        },
        grok_bot_spend_approval_passkey: {
            client: !0,
            default: !1
        },
        sand_memory_dreaming: {
            client: !0,
            default: !1
        },
        sand_1pass_manual_service_acct: {
            client: !0,
            default: !0
        },
        sand_new_1pass: {
            client: !0,
            default: !1
        },
        sand_cloud_agent_artifacts: {
            client: !0,
            default: !0
        },
        sand_cloud_agent_status_stream: {
            client: !0,
            default: !1
        },
        grok_bot_cloud_agent_durable_watch: {
            client: !0,
            default: !1
        },
        grok_bot_cloud_agent_secret_forwarding: {
            client: !0,
            default: !1
        },
        grok_bot_mcp_catalog_status_killswitch: {
            client: !0,
            default: !1
        },
        sand_desktop_scm_connect: {
            client: !0,
            default: !1
        },
        sand_computer_use_unicode_typing: {
            client: !0,
            default: !1
        },
        sand_on_demand_settings: {
            client: !0,
            default: !1
        },
        store_billed_web_on_demand: {
            client: !0,
            default: !0
        },
        sand_notification_sounds: {
            client: !0,
            default: !1
        },
        sand_scheduled_computer_updates: {
            client: !0,
            default: !1,
            requiresAuthenticatedBootstrap: !0
        },
        grok_bot_network_debugger: {
            client: !0,
            default: !1
        },
        grok_bot_form_vault: {
            client: !0,
            default: !1
        },
        sand_agent_network: {
            client: !0,
            default: !1
        },
        sand_draft_external_message: {
            client: !0,
            default: !0
        },
        sand_draft_external_message_by_default: {
            client: !0,
            default: !1
        },
        sand_auto_review_selector: {
            client: !0,
            default: !1
        },
        sand_enable_pressure_cpu_profiler: {
            client: !0,
            default: !0
        },
        sand_enable_accent_theming: {
            client: !0,
            default: !1
        },
        grok_bot_all_bots_color_theming: {
            client: !0,
            default: !1
        },
        sand_xvf_typeface: {
            client: !0,
            default: !1
        },
        sand_anonymized_egress_telemetry: {
            client: !0,
            default: !0
        },
        service_account_spend_limit_enforcement: {
            client: !0,
            default: !1
        },
        sand_action_audit_logs: {
            client: !0,
            default: !1
        },
        grok_bot_conversation_gc: {
            client: !0,
            default: !0
        },
        sand_enable_bot2bot_cloud_agent_ui: {
            client: !0,
            default: !1,
            requiresAuthenticatedBootstrap: !0
        },
        sand_hide_at_mentions: {
            client: !0,
            default: !1
        },
        sand_agent_titles: {
            client: !0,
            default: !0
        },
        sand_stream_idle_deadline: {
            client: !0,
            default: !0
        },
        sand_enable_spoof_gpu: {
            client: !0,
            default: !1
        },
        sand_browser_hardware_profile: {
            client: !0,
            default: !1
        },
        sand_box_store_skip_inaccessible: {
            client: !0,
            default: !1
        },
        sand_working_state_warming: {
            client: !0,
            default: !0,
            requiresAuthenticatedBootstrap: !0
        },
        grok_bot_box_harness_turns_blocked: {
            client: !0,
            default: !1
        },
        sand_web_bot_auth_signing: {
            client: !0,
            default: !0
        },
        sand_web_bot_auth_sign_xhr_fetch: {
            client: !0,
            default: !0
        },
        sand_web_bot_auth_sign_iframes: {
            client: !0,
            default: !1
        },
        sand_transcript_store_read: {
            client: !0,
            default: !1
        },
        sand_transcript_store_first: {
            client: !0,
            default: !1
        },
        sand_transcript_server_tail: {
            client: !0,
            default: !1
        },
        sand_attachments_via_server: {
            client: !0,
            default: !1
        },
        sand_better_link_unfurling: {
            client: !0,
            default: !0
        },
        grok_bot_link_chip_preload: {
            client: !0,
            default: !1
        },
        sand_create_temporal_agents: {
            client: !0,
            default: !1
        },
        sand_client_pause: {
            client: !0,
            default: !1
        },
        sand_desktop_away_park: {
            client: !0,
            default: !1
        },
        sand_desktop_present_park: {
            client: !0,
            default: !1
        },
        sand_roster_waking_hold: {
            client: !0,
            default: !1
        },
        sand_sidebar_activity_recency: {
            client: !0,
            default: !1
        },
        sand_get_grok_bot_ios: {
            client: !0,
            default: !0
        },
        sand_grok_main_agent: {
            client: !0,
            default: !1
        },
        sand_widget_v0: {
            client: !0,
            default: !1
        },
        sand_tasks: {
            client: !0,
            default: !1
        },
        sand_chat_prose_15px: {
            client: !0,
            default: !1
        },
        sand_new_connect_button: {
            client: !0,
            default: !1
        },
        sand_rich_text: {
            client: !0,
            default: !1
        },
        grok_bot_draft_revision_highlight: {
            client: !0,
            default: !1
        },
        sand_profile_photo_edit: {
            client: !0,
            default: !1,
            requiresAuthenticatedBootstrap: !0
        },
        sand_hide_working_dot: {
            client: !0,
            default: !1
        },
        sand_invite_teammates: {
            client: !0,
            default: !1,
            requiresAuthenticatedBootstrap: !0
        },
        sand_grok_force_main_agent_selection: {
            client: !0,
            default: !1
        },
        sand_desktop_mount: {
            client: !0,
            default: !1
        },
        sand_marketplace_for_you_auth_aware: {
            client: !0,
            default: !1
        },
        sand_header_template_share_menu: {
            client: !0,
            default: !0
        },
        grok_bot_multiplayer: {
            client: !0,
            default: !1
        },
        grok_bot_group_chats: {
            client: !0,
            default: !1
        },
        grok_bot_team_bot_managers: {
            client: !0,
            default: !1
        },
        grok_bot_team_bot_access_list: {
            client: !0,
            default: !1
        },
        grok_bot_team_exclude_gsuite_plugins: {
            client: !0,
            default: !1
        },
        grok_bot_agent_mail: {
            client: !0,
            default: !1
        },
        grok_bot_agent_mail_multiple_inboxes: {
            client: !0,
            default: !1
        },
        grok_bot_scm_connect_card: {
            client: !0,
            default: !1
        },
        grok_bot_check_subscription_usage: {
            client: !0,
            default: !1
        },
        grok_bot_search_bot_templates: {
            client: !0,
            default: !1
        },
        grok_bot_template_onboarding: {
            client: !0,
            default: !0
        },
        grok_bot_documents: {
            client: !0,
            default: !1
        },
        grok_bot_documents_ui: {
            client: !0,
            default: !1
        },
        grok_bot_library_pages: {
            client: !0,
            default: !1
        },
        grok_bot_page_stage_chat: {
            client: !0,
            default: !1
        },
        grok_bot_files_stage: {
            client: !0,
            default: !1
        },
        grok_bot_library_v2: {
            client: !0,
            default: !1
        },
        grok_bot_documents_web: {
            client: !0,
            default: !1
        },
        grok_bot_library_external_docs: {
            client: !0,
            default: !1
        },
        grok_bot_pages_search: {
            client: !0,
            default: !1
        },
        sand_simplified_right_pane: {
            client: !0,
            default: !1
        },
        sand_cloud_agent_tasks_card: {
            client: !0,
            default: !1
        },
        sand_import_chrome_cookies: {
            client: !0,
            default: !1
        },
        agent_prompted_cookie_sync: {
            client: !0,
            default: !1
        },
        sand_voice_call: {
            client: !0,
            default: !1
        },
        sand_pitman: {
            client: !0,
            default: !1
        },
        sand_voice_outbound_call: {
            client: !0,
            default: !1
        },
        sand_voice_call_overheard: {
            client: !0,
            default: !1
        },
        sand_voice_stay_silent: {
            client: !0,
            default: !1
        },
        sand_voice_async_update: {
            client: !0,
            default: !0
        },
        sand_voice_reconnect: {
            client: !0,
            default: !0
        },
        sand_voice_resumption: {
            client: !0,
            default: !1
        },
        sand_voice_steer: {
            client: !0,
            default: !0
        },
        sand_voice_final_word: {
            client: !0,
            default: !1
        },
        sand_voice_memos: {
            client: !0,
            default: !0
        },
        sand_voice_memo_speed: {
            client: !0,
            default: !0
        },
        sand_voice_server_harness: {
            client: !0,
            default: !0
        },
        sand_mcp_apps: {
            client: !0,
            default: !1
        },
        sand_team_bot_voice_available: {
            client: !0,
            default: !1
        },
        sand_voice_call_settings_for_teammates: {
            client: !0,
            default: !1
        },
        sand_focus_staleness_catch_up: {
            client: !0,
            default: !1
        },
        disable_smart_auto_show_routed_model: {
            client: !0,
            default: !1
        },
        migrate_default_model_config_to_auto_smart_cost: {
            client: !0,
            default: !1
        },
        app_open_model_nudge_pre_render_only: {
            client: !0,
            default: !1
        },
        new_automation_templates_slack_github_triggers: {
            client: !0,
            default: !0
        },
        customer_evals_ui: {
            client: !0,
            default: !1
        },
        git_diff_collect_stderr: {
            client: !0,
            default: !1
        },
        glass_chat_switch_tracing: {
            client: !0,
            default: !1
        },
        glass_webview_guest_render_throttle_killswitch: {
            client: !0,
            default: !1
        },
        glass_chat_switch_post_paint_commit: {
            client: !0,
            default: !1
        },
        glass_dispose_workspace_on_release: {
            client: !0,
            default: !1
        },
        glass_git_diff_meter: {
            client: !0,
            default: !1
        },
        glass_agent_worktree_reroot_prompt: {
            client: !0,
            default: !0
        },
        glass_cloud_meta_agents: {
            client: !0,
            default: !1
        },
        named_agent_single_session: {
            client: !0,
            default: !1
        },
        glass_empty_state_recommended_actions: {
            client: !0,
            default: !1
        },
        glass_branch_picker_redesign: {
            client: !0,
            default: !1
        },
        glass_triggers_naming: {
            client: !0,
            default: !1
        },
        unified_composer_tray_debug: {
            client: !0,
            default: !1
        },
        glass_remember_new_agent_environment_selection: {
            client: !0,
            default: !0
        },
        glass_editor_shadow_isolation: {
            client: !0,
            default: !0
        },
        glass_defer_shadow_style_rebuild: {
            client: !0,
            default: !1
        },
        sand_audit_logs: {
            client: !0,
            default: !0
        },
        origin_commit_email_verification_enabled: {
            client: !0,
            default: !1
        },
        limit_hit_ui_kill_switch: {
            client: !0,
            default: !1
        },
        rate_limited_reconnect_message_kill_switch: {
            client: !0,
            default: !1
        },
        glass_no_x_on_chips: {
            client: !0,
            default: !1
        },
        glass_preview_linear_tickets: {
            client: !0,
            default: !1
        },
        origin_repos: {
            client: !0,
            default: !1
        },
        origin_app_user_confirmation: {
            client: !0,
            default: !1
        },
        origin_app_deletion: {
            client: !0,
            default: !1
        },
        codebase_branches_redesign_in_progress: {
            client: !0,
            default: !1
        },
        automations_origin_request_reviewers: {
            client: !0,
            default: !1
        },
        origin_raw_file_links: {
            client: !0,
            default: !0
        },
        origin_inbox_osp_watch: {
            client: !0,
            default: !1
        },
        sand_auto_review: {
            client: !0,
            default: !0
        },
        sand_auto_review_admin_enforce: {
            client: !0,
            default: !0
        },
        sand_auto_review_admin_rules: {
            client: !0,
            default: !0
        },
        sand_local_egress_admin_control: {
            client: !0,
            default: !0
        },
        allow_disable_sudo_grok_bot: {
            client: !0,
            default: !1
        },
        smart_mode_classifier_shadow_mode: {
            client: !0,
            default: !1
        },
        ext_host_document_memory_estimates: {
            client: !0,
            default: !1
        },
        agent_exec_text_document_api_access_tracking: {
            client: !0,
            default: !1
        },
        cursor_agent_host: {
            client: !0,
            default: !1
        },
        cursor_agent_host_move_exec: {
            client: !0,
            default: !1
        },
        agent_host_own_request_context: {
            client: !0,
            default: !1
        },
        cursor_agent_host_owned_session_storage: {
            client: !0,
            default: !1
        },
        cursor_agent_host_session_storage_migrate_on_open: {
            client: !0,
            default: !1
        },
        cursor_agent_host_native_cloud_subagent: {
            client: !0,
            default: !1
        },
        cursor_agent_host_subagent_interactions: {
            client: !0,
            default: !1
        },
        agent_host_local_loop: {
            client: !0,
            default: !1
        },
        composer_send_prewarm: {
            client: !0,
            default: !1
        },
        glass_local_ollama: {
            client: !0,
            default: !1
        },
        agent_host_updater: {
            client: !0,
            default: !1
        },
        agent_host_private_inference: {
            client: !0,
            default: !1
        },
        defer_cursor_agent_exec_activation: {
            client: !0,
            default: !1
        },
        shell_exec_output_backpressure: {
            client: !0,
            default: !0
        },
        shell_exec_powershell_utf8_console: {
            client: !0,
            default: !1
        },
        file_watcher_metrics: {
            client: !0,
            default: !1
        },
        glass_shared_application_storage: {
            client: !0,
            default: !0
        },
        glass_startup_connect_transport: {
            client: !0,
            default: !1
        },
        reactivestorage_single_pass_stringify: {
            client: !0,
            default: !0
        },
        reactive_storage_size_report_enabled: {
            client: !0,
            default: !1
        },
        model_catalog_own_key: {
            client: !0,
            default: !1
        },
        slow_ipc_deserialize_sentry: {
            client: !0,
            default: !1
        },
        chunked_document_open_sync: {
            client: !0,
            default: !0
        },
        ripgrep_invocation_monitor: {
            client: !0,
            default: !1
        },
        rules_discovery_respect_cursorignore: {
            client: !0,
            default: !1
        },
        subagents_discovery_allow_external_symlinks: {
            client: !0,
            default: !1
        },
        grep_fallback_monitor: {
            client: !0,
            default: !1
        },
        crepe_lazy_external_git_index: {
            client: !0,
            default: !1
        },
        exthost_rpc_channel_history: {
            client: !0,
            default: !1
        },
        exthost_rpc_metrics: {
            client: !0,
            default: !1
        },
        remote_exthost_watchdog: {
            client: !0,
            default: !1
        },
        glass_remote_connection_dormancy: {
            client: !0,
            default: !1
        },
        disable_remote_workspace_reh_healthcheck: {
            client: !0,
            default: !1
        },
        service_account_repo_scope_use_installation_fanout: {
            client: !0,
            default: !1
        },
        cloud_agent_default_environment: {
            client: !0,
            default: !1
        },
        grok_bot_gkw_connectors: {
            client: !0,
            default: !1
        },
        ide_make_github_request_enabled: {
            client: !0,
            default: !1
        },
        customize_hooks_execution_log_detail: {
            client: !0,
            default: !0
        },
        skip_hooks_ready_wait_without_hooks: {
            client: !0,
            default: !1
        },
        dashboard_agent_requests_heatmap: {
            client: !0,
            default: !1
        },
        bugbot_enable_bulk_rules_upload_in_portal: {
            client: !0,
            default: !1
        },
        team_rule_agent_type_ui: {
            client: !0,
            default: !1
        },
        advanced_setup_for_self_hosted_gitlab_available: {
            client: !0,
            default: !1
        },
        gitlab_com_service_account_token_available: {
            client: !0,
            default: !1
        },
        enable_bitbucket_data_center_onboarding: {
            client: !0,
            default: !0
        },
        enable_bitbucket: {
            client: !0,
            default: !0
        },
        internal_team_user_profiles: {
            client: !0,
            default: !0
        },
        user_profile_glass: {
            client: !0,
            default: !0
        },
        automations_chain_prompts: {
            client: !0,
            default: !1
        },
        website_use_new_model_picker_for_automations: {
            client: !0,
            default: !0
        },
        green_dot_automation_status: {
            client: !0,
            default: !0
        },
        automations_validate_on_enable: {
            client: !0,
            default: !0
        },
        automations_retry_button: {
            client: !0,
            default: !1
        },
        managed_automations_team_revamp: {
            client: !0,
            default: !0
        },
        automations_gitlab_extended_triggers: {
            client: !0,
            default: !0
        },
        automations_bitbucket_extended_triggers: {
            client: !0,
            default: !1
        },
        automations_forge_agnostic_mirrors: {
            client: !0,
            default: !1
        },
        managed_agents_enabled: {
            client: !0,
            default: !1
        },
        custom_agents_enabled: {
            client: !0,
            default: !0
        },
        debug_bot_customer_facing_ui: {
            client: !0,
            default: !1
        },
        agents_bugbot_bottom_upsell: {
            client: !0,
            default: !1
        },
        review_agents_shared_growth: {
            client: !0,
            default: !1
        },
        automations_org_scoped_triggers_ui: {
            client: !0,
            default: !1
        },
        cloud_agents_no_repo_enabled: {
            client: !0,
            default: !0
        },
        cloud_agent_resubmit_from_message: {
            client: !0,
            default: !0
        },
        glass_cloud_agent_sidebar_ci_status: {
            client: !0,
            default: !1
        },
        cloud_agent_migration_resume_kickoff: {
            client: !0,
            default: !0
        },
        glass_cloud_agent_fork_from_turn: {
            client: !0,
            default: !0
        },
        cloud_agent_stop_permanent_stream_reconnect: {
            client: !0,
            default: !0
        },
        cloud_agent_repair_stalled_pane: {
            client: !0,
            default: !0
        },
        cloud_agent_plugins: {
            client: !0,
            default: !0
        },
        cloud_agent_origin_env_migration_rpc: {
            client: !0,
            default: !1
        },
        cloud_agent_environment_duplicate: {
            client: !0,
            default: !1
        },
        local_agent_subagent_state_blob_refs: {
            client: !0,
            default: !1
        },
        cloud_agent_env_setup_with_dockerfiles: {
            client: !0,
            default: !1
        },
        generalized_env_setup: {
            client: !0,
            default: !0
        },
        cloud_agent_ask_question_auto_answer: {
            client: !0,
            default: !1
        },
        cloud_agent_ask_question_auto_answer_timeout_setting: {
            client: !0,
            default: !1
        },
        cloud_agent_publish_ui: {
            client: !0,
            default: !1
        },
        grok_bot_publish_confirm_card: {
            client: !0,
            default: !1
        },
        cloud_agent_env_builds_default_enabled: {
            client: !0,
            default: !0
        },
        cloud_agent_migrate_to_builds_setup_agent_cta: {
            client: !0,
            default: !0
        },
        cloud_agent_transcript_reliability_controls: {
            client: !0,
            default: !0
        },
        local_agent_transcript_search_in_glass: {
            client: !0,
            default: !0
        },
        agent_conversation_search_tool: {
            client: !0,
            default: !0
        },
        disable_cloud_agent_transcript_indexing_in_glass: {
            client: !0,
            default: !1
        },
        nal_agent_retries: {
            client: !0,
            default: !0
        },
        cli_harness_telemetry: {
            client: !0,
            default: !1
        },
        cli_image_arg: {
            client: !0,
            default: !1
        },
        "x-chat-context": {
            client: !0,
            default: !1
        },
        referral_codes_v2: {
            client: !0,
            default: !0
        },
        p2p_referrals_v1: {
            client: !0,
            default: !0
        },
        oom_crash_watcher: {
            client: !0,
            default: !1
        },
        local_request_tracing: {
            client: !0,
            default: !1
        },
        local_request_trace_dd_slogs: {
            client: !0,
            default: !1
        },
        memory_pressure_profiling: {
            client: !0,
            default: !0
        },
        cpu_monitor_process_snapshot: {
            client: !0,
            default: !1
        },
        issue_traces_enabled: {
            client: !0,
            default: !0
        },
        glass_automations_ui: {
            client: !0,
            default: !0
        },
        glass_stable_diff_group_keys: {
            client: !0,
            default: !1
        },
        local_automations: {
            client: !0,
            default: !1
        },
        local_automations_nav: {
            client: !0,
            default: !1
        },
        glass_agent_confetti_cannon: {
            client: !0,
            default: !0
        },
        glass_install_plugin_tool_enabled: {
            client: !0,
            default: !0
        },
        cursor_backend_control_automation_mcp: {
            client: !0,
            default: !0
        },
        glass_multi_root_workspace_editing: {
            client: !0,
            default: !1
        },
        glass_search_first_repo_picker: {
            client: !0,
            default: !1
        },
        glass_remote_ssh_workspace_repair: {
            client: !0,
            default: !0
        },
        glass_remote_ssh_management_connection_token_loss_repair: {
            client: !0,
            default: !0
        },
        glass_custom_theme_support: {
            client: !0,
            default: !1
        },
        glass_send_feedback: {
            client: !0,
            default: !1
        },
        glass_project_filled_user_bubble: {
            client: !0,
            default: !1
        },
        environment_param_for_subagent: {
            client: !0,
            default: !1
        },
        glass_assistant_message_selection_feedback: {
            client: !0,
            default: !1
        },
        glass_turn_feedback_menu: {
            client: !0,
            default: !1
        },
        glass_turn_actions_reply: {
            client: !0,
            default: !1
        },
        glass_editor_panel_tab_copy_link: {
            client: !0,
            default: !1
        },
        glass_peaky_file_trees: {
            client: !0,
            default: !1
        },
        glass_markdown_table_expand: {
            client: !0,
            default: !1
        },
        glass_status_bar_environment_picker: {
            client: !0,
            default: !1
        },
        glass_project_agent_tool_rows: {
            client: !0,
            default: !1
        },
        glass_cloud_awaiting_turn_start: {
            client: !0,
            default: !1
        },
        glass_all_changes_diff_scope: {
            client: !0,
            default: !1
        },
        glass_scm_dynamic_base_branch: {
            client: !0,
            default: !1
        },
        glass_direct_github_connect: {
            client: !0,
            default: !1
        },
        scm_connect_in_app_ad: {
            client: !0,
            default: !0
        },
        scm_connect_in_app_ad_gitlab: {
            client: !0,
            default: !0
        },
        scm_connect_ad_cheap_probe: {
            client: !0,
            default: !0
        },
        import_cc_conversation: {
            client: !0,
            default: !0
        },
        import_cc_conversation_default: {
            client: !0,
            default: !1
        },
        glass_drafts_quick_action_pill: {
            client: !0,
            default: !1
        },
        glass_sidebar_source_metadata: {
            client: !0,
            default: !1
        },
        glass_sidebar_scroll_active_row_if_needed: {
            client: !0,
            default: !0
        },
        glass_sidebar_archive_toggle: {
            client: !0,
            default: !1
        },
        glass_sidebar_unified_group_headers: {
            client: !0,
            default: !1
        },
        glass_sidebar_env_icons: {
            client: !0,
            default: !1
        },
        glass_btw_side_question: {
            client: !0,
            default: !1
        },
        glass_side_chats: {
            client: !0,
            default: !0
        },
        cloud_agent_side_chats: {
            client: !0,
            default: !0
        },
        cloud_agent_desktop_lease: {
            client: !0,
            default: !0
        },
        cloud_agent_machine_resources: {
            client: !0,
            default: !1
        },
        cloud_project_coordinator_v2: {
            client: !0,
            default: !0
        },
        glass_project_worker_membership_rpc: {
            client: !0,
            default: !0
        },
        glass_composer_markdown_support: {
            client: !0,
            default: !1
        },
        glass_cloud_child_question_answered_in_child: {
            client: !0,
            default: !1
        },
        glass_cloud_pending_interactions: {
            client: !0,
            default: !1
        },
        prompt_input_image_annotation: {
            client: !0,
            default: !0
        },
        glass_lazy_file_tabs: {
            client: !0,
            default: !0
        },
        glass_temporary_pr_tabs: {
            client: !0,
            default: !1
        },
        glass_projects_enabled: {
            client: !0,
            default: !1
        },
        glass_project_pinning: {
            client: !0,
            default: !1
        },
        glass_enable_main_bot: {
            client: !0,
            default: !1
        },
        glass_main_bot_tasks: {
            client: !0,
            default: !1
        },
        internal_cloud_project_remote_control: {
            client: !0,
            default: !1
        },
        enable_add_local_agent_to_cloud_project: {
            client: !0,
            default: !1
        },
        remote_agent_host_glass: {
            client: !0,
            default: !1
        },
        glass_first_project_onboarding: {
            client: !0,
            default: !0
        },
        dev_only_force_first_project_experience: {
            client: !0,
            default: !1
        },
        staged_project_listing: {
            client: !0,
            default: !1
        },
        staged_project_instant_create: {
            client: !0,
            default: !1
        },
        staged_project_seeding: {
            client: !0,
            default: !1
        },
        glass_project_notes_tldr_card: {
            client: !0,
            default: !0
        },
        glass_project_notes_only_title_context: {
            client: !0,
            default: !1
        },
        glass_project_notes_notion_links: {
            client: !0,
            default: !1
        },
        glass_project_notes_document: {
            client: !0,
            default: !1
        },
        glass_project_notes_manual_status: {
            client: !0,
            default: !1
        },
        glass_project_notes_brief_view: {
            client: !0,
            default: !1
        },
        glass_project_notes_pr_stack_pill: {
            client: !0,
            default: !1
        },
        glass_project_tasks_pill: {
            client: !0,
            default: !1
        },
        glass_project_pinned_tab: {
            client: !0,
            default: !1
        },
        glass_projects_empty_state: {
            client: !0,
            default: !1
        },
        glass_projects_unread_divider: {
            client: !0,
            default: !0
        },
        glass_cloud_agents_unread_divider: {
            client: !0,
            default: !0
        },
        glass_local_agents_unread_divider: {
            client: !0,
            default: !0
        },
        glass_project_style_user_messages: {
            client: !0,
            default: !1
        },
        glass_vercel_connect_pill_cloud: {
            client: !0,
            default: !1
        },
        glass_vercel_connect_pill_local: {
            client: !0,
            default: !1
        },
        web_vercel_publish_pill: {
            client: !0,
            default: !1
        },
        local_interactive_child_inbox: {
            client: !0,
            default: !1
        },
        glass_diff_ci_tab: {
            client: !0,
            default: !0
        },
        managed_review_agent_skills_enabled: {
            client: !0,
            default: !1
        },
        glass_diff_commits_tab: {
            client: !0,
            default: !0
        },
        glass_diff_reviews_tab: {
            client: !0,
            default: !0
        },
        glass_agentic_migration_reconcile: {
            client: !0,
            default: !1
        },
        glass_cloud_to_worktree: {
            client: !0,
            default: !0
        },
        glass_pr_viewed: {
            client: !0,
            default: !0
        },
        glass_pr_realtime_updates: {
            client: !0,
            default: !1
        },
        glass_avoid_secondary_scanline: {
            client: !0,
            default: !1
        },
        skills_cli_install: {
            client: !0,
            default: !1
        },
        glass_design_mode_annotations: {
            client: !0,
            default: !1
        },
        glass_agent_pr_followup_pill: {
            client: !0,
            default: !1
        },
        glass_open_resource_tool_enabled: {
            client: !0,
            default: !0
        },
        glass_pr_tray_stack_groups: {
            client: !0,
            default: !1
        },
        open_github_pr_links_in_review_cursor: {
            client: !0,
            default: !1
        },
        cursor_com_review_pages: {
            client: !0,
            default: !1
        },
        show_cursor_review_early_access_ad: {
            client: !0,
            default: !1
        },
        smart_allowlist_required: {
            client: !0,
            default: !1
        },
        bugbot_low_mode: {
            client: !0,
            default: !0
        },
        bugbot_connect_repo_implicit_enable: {
            client: !0,
            default: !0
        },
        bugbot_onboarding_high_effort_learning_defaults_team_v2: {
            client: !0,
            default: !0
        },
        bugbot_suggested_repos_banner: {
            client: !0,
            default: !0
        },
        bugbot_non_admin_enablement: {
            client: !0,
            default: !0
        },
        use_model_parameters: {
            client: !0,
            default: !0
        },
        use_react_model_picker: {
            client: !0,
            default: !0
        },
        model_picker_max_badge: {
            client: !0,
            default: !1
        },
        model_picker_hover_options: {
            client: !0,
            default: !1
        },
        glass_model_picker_new_menu: {
            client: !0,
            default: !1
        },
        bugbot_auto_spawn_cloud_agent: {
            client: !0,
            default: !0
        },
        bugbot_fail_check_on_findings: {
            client: !0,
            default: !1
        },
        composer_auto_routing_result_display: {
            client: !0,
            default: !0
        },
        seat_upgrade_economics_recommendations: {
            client: !0,
            default: !0
        },
        self_serve_team_tiered_pricing_conversion: {
            client: !0,
            default: !0
        },
        self_serve_team_tiered_pricing_manual_conversion: {
            client: !0,
            default: !0
        },
        self_serve_team_tiered_pricing_new_team_creator: {
            client: !0,
            default: !0
        },
        self_serve_team_tiered_pricing_legacy_conversion: {
            client: !0,
            default: !1
        },
        cursor_models_additional_budget: {
            client: !0,
            default: !1
        },
        composer_enable_bga_hydration_from_snapshot: {
            client: !0,
            default: !0
        },
        fix_remote_ssh_checkpoints: {
            client: !0,
            default: !1
        },
        glass_composer_header_pagination: {
            client: !0,
            default: !1
        },
        glass_realtime_voice: {
            client: !0,
            default: !1
        },
        web_realtime_voice: {
            client: !0,
            default: !1
        },
        mobile_realtime_voice: {
            client: !0,
            default: !1
        },
        glass_realtime_voice_new_agent: {
            client: !0,
            default: !1
        },
        web_realtime_voice_new_agent: {
            client: !0,
            default: !1
        },
        mobile_realtime_voice_new_agent: {
            client: !0,
            default: !1
        },
        cursor_blame: {
            client: !0,
            default: !1
        },
        cursor_skill_enabled: {
            client: !0,
            default: !1
        },
        onboard_skill_enabled: {
            client: !0,
            default: !1
        },
        ai_attribution_tool: {
            client: !0,
            default: !1
        },
        pr_metrics_admin_view_override: {
            client: !0,
            default: !1
        },
        portal_files_engine_ssr_body_prefetch: {
            client: !0,
            default: !1
        },
        portal_files_engine_ssr_tour_prefetch: {
            client: !0,
            default: !1
        },
        portal_files_engine_ssr_browser_still: {
            client: !0,
            default: !1
        },
        portal_files_engine_tour_stored_prefetch: {
            client: !0,
            default: !1
        },
        portal_files_engine_card_virtualization: {
            client: !0,
            default: !1
        },
        portal_files_engine_ssr_stored_tour: {
            client: !0,
            default: !1
        },
        enable_code_tours_custom_prompt: {
            client: !0,
            default: !1
        },
        enable_code_tour_path_scope: {
            client: !0,
            default: !1
        },
        portal_pr_code_tour_stack_generate: {
            client: !0,
            default: !1
        },
        enable_code_tour_section_reviewed: {
            client: !0,
            default: !1
        },
        portal_pr_activity: {
            client: !0,
            default: !1
        },
        agents_origin_pr_tab: {
            client: !0,
            default: !1
        },
        agents_github_pr_tab: {
            client: !0,
            default: !1
        },
        portal_glass_transcript: {
            client: !0,
            default: !1
        },
        portal_hide_projects_sidebar: {
            client: !0,
            default: !0
        },
        enable_ex_hs: {
            client: !0,
            default: !0
        },
        stars_popup_ignore_dont_ask_again: {
            client: !0,
            default: !1
        },
        terminal_execution_service_2: {
            client: !0,
            default: !0
        },
        long_running_jobs: {
            client: !0,
            default: !0
        },
        background_nudge_2: {
            client: !0,
            default: !0
        },
        auto_background_foreground_tools_on_followup: {
            client: !0,
            default: !1
        },
        user_message_timestamps: {
            client: !0,
            default: !0
        },
        cloud_agent_preview_port_forward: {
            client: !0,
            default: !1
        },
        terminal_ui_2: {
            client: !0,
            default: !0
        },
        composer_protected_tooltip: {
            client: !0,
            default: !0
        },
        auto_open_review_during_plan_build: {
            client: !0,
            default: !1
        },
        analyze_query_intent: {
            client: !0,
            default: !1
        },
        allowlist_in_ask_every_time_mode: {
            client: !0,
            default: !1
        },
        analytics_output_channel: {
            client: !0,
            default: !1
        },
        analytics_batch_coalesce_watermark: {
            client: !0,
            default: !0
        },
        browser_features_access_control: {
            client: !0,
            default: !1
        },
        cli_sandbox_default_enable: {
            client: !0,
            default: !1
        },
        cli_auto_run_hint: {
            client: !0,
            default: !0
        },
        "cli.hints": {
            client: !0,
            default: !0
        },
        "cli.rewind": {
            client: !0,
            default: !0
        },
        cli_debug_mode: {
            client: !0,
            default: !0
        },
        cli_btw_side_question: {
            client: !0,
            default: !0
        },
        cli_model_picker: {
            client: !0,
            default: !0
        },
        cli_zen_mode_available: {
            client: !0,
            default: !1
        },
        cli_show_images: {
            client: !0,
            default: !0
        },
        pr_analytics: {
            client: !0,
            default: !1
        },
        xai_team_link: {
            client: !0,
            default: !0
        },
        xai_commerce_webview: {
            client: !0,
            default: !1
        },
        xai_commerce_webview_web_billed_management: {
            client: !0,
            default: !1
        },
        sand_mobile_xai_commerce_webview: {
            client: !0,
            default: !1
        },
        unified_sku_billing_ui: {
            client: !0,
            default: !1
        },
        block_legacy_sku_changes: {
            client: !0,
            default: !1
        },
        auth_unification_ctas_930: {
            client: !0,
            default: !1
        },
        use_unified_service_tokens: {
            client: !0,
            default: !1
        },
        enable_cc_plugin_import: {
            client: !0,
            default: !0
        },
        model_picker_nudge: {
            client: !0,
            default: !1
        },
        cloud_agent_origin_repos: {
            client: !0,
            default: !1
        },
        cloud_agent_new_project_entrypoint: {
            client: !0,
            default: !1
        },
        cloud_agent_new_project_empty_root_commit: {
            client: !0,
            default: !1
        },
        cloud_agent_new_project_jit_no_namespace: {
            client: !0,
            default: !1
        },
        agent_create_repo_tray: {
            client: !0,
            default: !1
        },
        agent_create_repo_tray_cloud_publish: {
            client: !0,
            default: !1
        },
        codebase_browse_ask_cursor: {
            client: !0,
            default: !1
        },
        enable_origin_agentic_repo_board: {
            client: !0,
            default: !1
        },
        enable_origin_repo_insights: {
            client: !0,
            default: !1
        },
        codebase_browse_symbol_nav: {
            client: !0,
            default: !0
        },
        enable_automations_show_all_mirrored_repos: {
            client: !0,
            default: !1
        },
        enable_forge_source_pr_creation_setting: {
            client: !0,
            default: !1
        },
        origin_dogfooding_cursor_creation_provider_override: {
            client: !0,
            default: !1
        },
        bitbucket_protected_git_scopes: {
            client: !0,
            default: !1
        },
        cloud_agent_bitbucket_server_repos: {
            client: !0,
            default: !1
        },
        origin_request_access_disabled: {
            client: !0,
            default: !1
        },
        origin_non_admin_namespace_creation_allowed: {
            client: !0,
            default: !0
        },
        origin_enable_org_member_direct_grants: {
            client: !0,
            default: !0
        },
        enable_origin_external_collaborators: {
            client: !0,
            default: !0
        },
        origin_repo_collaborators_tab: {
            client: !0,
            default: !0
        },
        enable_origin_external_sharing: {
            client: !0,
            default: !0
        },
        enable_clonekit_in_app: {
            client: !0,
            default: !1
        },
        origin_mcp: {
            client: !0,
            default: !1,
            requiresAuthenticatedBootstrap: !0
        },
        enable_origin_research_preview_for_enterprises: {
            client: !0,
            default: !0
        },
        marketplace_origin_distribution: {
            client: !0,
            default: !0
        },
        atlas_enabled: {
            client: !0,
            default: !1
        },
        mcp_oauth_hosted_loopback_callback: {
            client: !0,
            default: !1
        },
        mcp_multi_account: {
            client: !0,
            default: !0
        },
        sharepoint_team_connector: {
            client: !0,
            default: !1
        },
        cloud_agent_interactive_mcp_auth: {
            client: !0,
            default: !0
        },
        mcp_profile_scoped_global_disabled_state: {
            client: !0,
            default: !0
        },
        team_mcps_in_cli: {
            client: !0,
            default: !1
        },
        remote_permissions_file_path_admin: {
            client: !0,
            default: !1
        },
        admin_command_denylist: {
            client: !0,
            default: !1
        },
        admin_reset_agent_run_mode_to_auto_review: {
            client: !0,
            default: !1
        },
        admin_command_denylist_enforcement_killswitch: {
            client: !0,
            default: !1
        },
        restrict_team_member_invite_button: {
            client: !0,
            default: !1
        },
        bugbot_autorun_killswitch: {
            client: !0,
            default: !1
        },
        keybinding_migration_killswitch: {
            client: !0,
            default: !1
        },
        agent_review_fake_dev: {
            client: !0,
            default: !1
        },
        enable_moved_lines_treatment: {
            client: !0,
            default: !1
        },
        ide_cmd_enter_submit: {
            client: !0,
            default: !0
        },
        ide_nal_migration: {
            client: !0,
            default: !1
        },
        ide_new_sidebar: {
            client: !0,
            default: !1
        },
        playwright_mcp_provider: {
            client: !0,
            default: !0
        },
        web_audit_events: {
            client: !0,
            default: !1
        },
        web_cloud_agent_followup_model_picker: {
            client: !0,
            default: !0
        },
        web_cloud_agent_new_model_picker: {
            client: !0,
            default: !1
        },
        web_cloud_agent_kickoff_lands_in_run_view: {
            client: !0,
            default: !0
        },
        web_cloud_agent_external_source_attachment: {
            client: !0,
            default: !0
        },
        enable_new_cloud_onboarding_ui_changes: {
            client: !0,
            default: !1
        },
        cloud_agent_portal_ask_question: {
            client: !0,
            default: !1
        },
        cloud_agent_portal_pending_interactions: {
            client: !0,
            default: !1
        },
        "web.show_local_source_filter": {
            client: !0,
            default: !1
        },
        open_agent_window_bottom_convo: {
            client: !0,
            default: !1
        },
        open_agent_window_top: {
            client: !0,
            default: !0
        },
        "glass.enable_open_agent_in_window": {
            client: !0,
            default: !1
        },
        cloud_agent_best_of_n_disabled: {
            client: !0,
            default: !1
        },
        cloud_agent_prompt_upload_presign: {
            client: !0,
            default: !0
        },
        search_telemetry: {
            client: !0,
            default: !1
        },
        scim_require_user_directory_ui: {
            client: !0,
            default: !1
        },
        allow_legacy_billing_group_creation: {
            client: !0,
            default: !1
        },
        new_file_ux: {
            client: !0,
            default: !0
        },
        internal_browser_evaluate: {
            client: !0,
            default: !1
        },
        browser_canvas: {
            client: !0,
            default: !0
        },
        cloud_canvas_skill: {
            client: !0,
            default: !1
        },
        cloud_canvas_tools: {
            client: !0,
            default: !1
        },
        composer_separate_shell_activity_groups: {
            client: !0,
            default: !1
        },
        show_grouped_edit_diff_stats: {
            client: !0,
            default: !1
        },
        composer_end_of_turn_summary: {
            client: !0,
            default: !1
        },
        allowlist_toggle_menu: {
            client: !0,
            default: !0
        },
        slim_codeblock_render: {
            client: !0,
            default: !0
        },
        compact_terminal: {
            client: !0,
            default: !0
        },
        "cursor-ios-disable-legacy-plans-iap": {
            client: !0,
            default: !1
        },
        sand_legacy_iap_sales_cutoff: {
            client: !0,
            default: !1
        },
        sand_android_iap_enabled: {
            client: !0,
            default: !0
        },
        sand_android_purchase_token_backfill: {
            client: !0,
            default: !1
        },
        composer_sandbox_settings_visible: {
            client: !0,
            default: !0
        },
        sandbox_force_disable_win32: {
            client: !0,
            default: !0
        },
        admin_network_controls: {
            client: !0,
            default: !0
        },
        mcp_access_network_allowlist: {
            client: !0,
            default: !1
        },
        mcp_admin_only_servers: {
            client: !0,
            default: !1
        },
        mcp_admin_only_tools: {
            client: !0,
            default: !1
        },
        sandbox_mcp_servers: {
            client: !0,
            default: !1
        },
        sandbox_read_control_portal: {
            client: !0,
            default: !1
        },
        sandbox_read_control_portal_ui: {
            client: !0,
            default: !1
        },
        mcp_network_allowlist: {
            client: !0,
            default: !1
        },
        mcp_settings_overhaul: {
            client: !0,
            default: !0
        },
        mcp_settings_overhaul_portal: {
            client: !0,
            default: !0
        },
        mcp_allowlist_import_export: {
            client: !0,
            default: !1
        },
        mcp_user_extension_stdio_unsandboxed_win32: {
            client: !0,
            default: !1
        },
        mcp_tool_allowlist_modes: {
            client: !0,
            default: !0
        },
        cloud_agent_environment_mcp_allowlist_ui: {
            client: !0,
            default: !1
        },
        cloud_agent_keyring_ui: {
            client: !0,
            default: !1
        },
        cursor_rules_batch_update: {
            client: !0,
            default: !0
        },
        agent_skills_batch_update: {
            client: !0,
            default: !0
        },
        mcp_structured_logging: {
            client: !0,
            default: !1
        },
        mcp_runtime_dedupe: {
            client: !0,
            default: !1
        },
        dedupe_mcp_servers: {
            client: !0,
            default: !0
        },
        mcp_oauth_unsafe_redirect_logging: {
            client: !0,
            default: !1
        },
        proper_well_known_for_mcp_scopes: {
            client: !0,
            default: !0
        },
        context_usage_canvas: {
            client: !0,
            default: !1
        },
        local_computer_use: {
            client: !0,
            default: !1
        },
        mac_computer_use: {
            client: !0,
            default: !1
        },
        windows_computer_use_batch: {
            client: !0,
            default: !1
        },
        computer_use_next_action: {
            client: !0,
            default: !1
        },
        playwright_autorun: {
            client: !0,
            default: !0
        },
        allow_download_prompts: {
            client: !0,
            default: !1
        },
        agent_context_injection: {
            client: !0,
            default: !0
        },
        project_agent_team_store: {
            client: !0,
            default: !1
        },
        project_followups_use_steering: {
            client: !0,
            default: !1
        },
        clone_blob_upload: {
            client: !0,
            default: !0
        },
        internal_session_recording_status_bar: {
            client: !0,
            default: !1
        },
        agent_video_signed_url_uploads: {
            client: !0,
            default: !1
        },
        nal_task_tool: {
            client: !0,
            default: !0
        },
        explore_subagent: {
            client: !0,
            default: !0
        },
        enable_watch_video_in_ide: {
            client: !0,
            default: !0
        },
        shell_subagent: {
            client: !0,
            default: !0
        },
        enable_build_with_swarm: {
            client: !0,
            default: !1
        },
        explicit_subagent_models: {
            client: !0,
            default: !1
        },
        nal_trace: {
            client: !0,
            default: !1
        },
        ask_question_all_modes: {
            client: !0,
            default: !0
        },
        disable_terminal_output_ui_streaming: {
            client: !0,
            default: !1
        },
        generate_user_instructions: {
            client: !0,
            default: !1
        },
        ide_nal_rdv: {
            client: !0,
            default: !1
        },
        use_nlb_for_nal: {
            client: !0,
            default: !0
        },
        "use-usw1-agent-for-nal": {
            client: !0,
            default: !1
        },
        retry_interceptor_disabled: {
            client: !0,
            default: !1
        },
        retry_interceptor_enabled_for_streaming: {
            client: !0,
            default: !0
        },
        bidi_append_fix: {
            client: !0,
            default: !0
        },
        http1_keepalive_disabled: {
            client: !0,
            default: !1
        },
        ws_reachability_probe: {
            client: !0,
            default: !0
        },
        ws_dark_durability_probe: {
            client: !0,
            default: !1
        },
        large_proto_logging_enabled: {
            client: !0,
            default: !1
        },
        submitlogs_flush_throttle: {
            client: !0,
            default: !0
        },
        background_composer_list_focus_aware_poll: {
            client: !0,
            default: !0
        },
        agent_slack_bot_member_install: {
            client: !0,
            default: !1
        },
        enterprise_early_access: {
            client: !0,
            default: !1
        },
        use_byok_allowlist: {
            client: !0,
            default: !0
        },
        show_dogfood_release_track: {
            client: !0,
            default: !1
        },
        client_numeric_metrics: {
            client: !0,
            default: !0
        },
        client_outage_banners: {
            client: !0,
            default: !1
        },
        solidjs_total_observers_metric: {
            client: !0,
            default: !1
        },
        renderer_heap_metrics: {
            client: !0,
            default: !1
        },
        glass_react_commit_churn: {
            client: !0,
            default: !1
        },
        sand_renderer_heap_metrics: {
            client: !0,
            default: !1
        },
        sand_desktop_notification_permission: {
            client: !0,
            default: !1
        },
        sand_desktop_notification_permission_persist: {
            client: !0,
            default: !1
        },
        sand_mobile_notification_permission_persist: {
            client: !0,
            default: !1
        },
        collect_sample_for_unresponsive_ext_host: {
            client: !0,
            default: !1
        },
        unresponsive_ext_host_enhanced_attachments: {
            client: !0,
            default: !1
        },
        worktree_nal_only: {
            client: !0,
            default: !0
        },
        glass_precompute_diff_tokenization: {
            client: !0,
            default: !1
        },
        review_changes_fast_multi_diff: {
            client: !0,
            default: !1
        },
        cpp_perf_instrumentation: {
            client: !0,
            default: !0
        },
        migrate_editor_mode: {
            client: !0,
            default: !0
        },
        show_dev_only_ttft_warning: {
            client: !0,
            default: !1
        },
        glass_local_review_first_bugbot_cta: {
            client: !0,
            default: !0
        },
        editor_review_cta_uses_review_bugbot: {
            client: !0,
            default: !1
        },
        local_commit_reflog_signal_killswitch: {
            client: !0,
            default: !1
        },
        gitlab_progressive_repo_load_v1: {
            client: !0,
            default: !1
        },
        repo_picker_server_side_search_v1: {
            client: !0,
            default: !1
        },
        azure_devops_progressive_repo_load_v1: {
            client: !0,
            default: !0
        },
        bugbot_azure_devops_settings: {
            client: !0,
            default: !0
        },
        meta_mcp_tool: {
            client: !0,
            default: !1
        },
        mcp_input_schema_json: {
            client: !0,
            default: !0
        },
        ai_connect_stream_encode_yield: {
            client: !0,
            default: !1
        },
        ai_connect_stream_decode_yield: {
            client: !0,
            default: !1
        },
        mcp_meta_tool_slim_descriptors: {
            client: !0,
            default: !0
        },
        local_agent_event_subscriptions: {
            client: !0,
            default: !0
        },
        web_cloud_agent_conversation_quick_access_rail: {
            client: !0,
            default: !1
        },
        mcp_always_expose_auth_tool: {
            client: !0,
            default: !1
        },
        glass_mcp_app_focus_on_type_guard: {
            client: !0,
            default: !0
        },
        shared_chats: {
            client: !0,
            default: !1
        },
        shared_canvases: {
            client: !0,
            default: !0
        },
        share_transcripts_include_plan: {
            client: !0,
            default: !1
        },
        shared_transcripts_bulk_download: {
            client: !0,
            default: !1
        },
        use_ide_browser_script: {
            client: !0,
            default: !1
        },
        expose_babysit_pr_cloud_entrypoint: {
            client: !0,
            default: !1
        },
        expose_branch_mismatch_continue_in_cloud_entrypoint: {
            client: !0,
            default: !1
        },
        expose_plan_build_in_cloud_entrypoint: {
            client: !0,
            default: !1
        },
        new_plan_editor: {
            client: !0,
            default: !0
        },
        ai_code_tracking_format_detection: {
            client: !0,
            default: !0
        },
        ai_code_tracking_assume_all_commits_ai: {
            client: !0,
            default: !1
        },
        ai_code_tracking_use_commit_timestamp_for_tracking_start: {
            client: !0,
            default: !1
        },
        ai_code_tracking_git_operations_binding_fix: {
            client: !0,
            default: !1
        },
        cloud_agent_slack_default_worker: {
            client: !0,
            default: !1
        },
        grok_bot_contextual_banner_killswitch: {
            client: !0,
            default: !1
        },
        enable_cloud_agent_timings: {
            client: !0,
            default: !1
        },
        subagent_support_interrupt: {
            client: !0,
            default: !0
        },
        web_cloud_agent_no_repo_entrypoint: {
            client: !0,
            default: !1
        },
        agent_store_dashboard: {
            client: !0,
            default: !1
        },
        agent_store_undelete: {
            client: !0,
            default: !1
        },
        cloud_agent_bc_id_attachment: {
            client: !0,
            default: !1
        },
        cloud_persistent_terminals: {
            client: !0,
            default: !0
        },
        cloud_glass_shared_sessions: {
            client: !0,
            default: !1
        },
        shared_terminal_env_setup: {
            client: !0,
            default: !1
        },
        instant_grep_indexing: {
            client: !0,
            default: !1
        },
        cli_instant_grep_indexing: {
            client: !0,
            default: !1
        },
        cli_grove_grep: {
            client: !0,
            default: !1
        },
        push_git_tracked_state_exp: {
            client: !0,
            default: !0
        },
        instant_grep_user_search: {
            client: !0,
            default: !1
        },
        parallel_agent_workflow: {
            client: !0,
            default: !1
        },
        enable_multitask_mode: {
            client: !0,
            default: !0
        },
        glass_subagent_followups: {
            client: !0,
            default: !1
        },
        glass_custom_modes: {
            client: !0,
            default: !1
        },
        cloud_custom_modes: {
            client: !0,
            default: !1
        },
        hide_async_subagent_task_notifications: {
            client: !0,
            default: !0
        },
        cloud_agent_message_sender_attribution: {
            client: !0,
            default: !0
        },
        enable_await_for_subagents: {
            client: !0,
            default: !1
        },
        fix_claude_subagent_await: {
            client: !0,
            default: !0
        },
        fix_grok_subagent_await: {
            client: !0,
            default: !0
        },
        public_leaderboard_web: {
            client: !0,
            default: !1
        },
        enable_cloud_agent_repo_selector: {
            client: !0,
            default: !1
        },
        route_ent_trial_to_model: {
            client: !0,
            default: !1
        },
        debug_mode_autorun_support_enabled: {
            client: !0,
            default: !1
        },
        analytics_conversation_classification: {
            client: !0,
            default: !1
        },
        use_cursor_github_app_id: {
            client: !0,
            default: !0
        },
        push_local_agent_to_cloud: {
            client: !0,
            default: !1
        },
        send_to_cloud_on_followup: {
            client: !0,
            default: !1
        },
        midturn_move_to_cloud_ads: {
            client: !0,
            default: !1
        },
        cloud_agent_checkout_convert_to_local: {
            client: !0,
            default: !1
        },
        show_browser_popup: {
            client: !0,
            default: !1
        },
        agent_layout_show_diffs_quick_settings: {
            client: !0,
            default: !1
        },
        skip_git_telemetry_computations: {
            client: !0,
            default: !1
        },
        composer_background_throttling_remote_only: {
            client: !0,
            default: !1
        },
        composer_gc_handles: {
            client: !0,
            default: !0
        },
        composer_header_log_storage: {
            client: !0,
            default: !1
        },
        composer_retention_structural_byte_metrics: {
            client: !0,
            default: !1
        },
        tokenize_stream_code_blocks: {
            client: !0,
            default: !0
        },
        glass_transcript_code_token_cache: {
            client: !0,
            default: !1
        },
        composer_react_transcript_working_indicator: {
            client: !0,
            default: !1
        },
        composer_transcript_steer_float_up: {
            client: !0,
            default: !1
        },
        inline_visualizations: {
            client: !0,
            default: !1
        },
        inline_visualization_png_export: {
            client: !0,
            default: !1
        },
        diff_tab_viewport_virtualization: {
            client: !0,
            default: !1
        },
        allow_shared_private_worker_assignment: {
            client: !0,
            default: !0
        },
        private_workers_label_filtering: {
            client: !0,
            default: !1
        },
        skip_github_app_for_private_worker: {
            client: !0,
            default: !1
        },
        update_use_localhost: {
            client: !0,
            default: !1
        },
        hide_inline_changed_files: {
            client: !0,
            default: !1
        },
        wysiwyg_markdown_default: {
            client: !0,
            default: !1
        },
        markdown_embedded_project_databases: {
            client: !0,
            default: !1
        },
        skill_icon_color: {
            client: !0,
            default: !1
        },
        skill_catalog_ide_cache: {
            client: !0,
            default: !1
        },
        opt_devs_into_experimental_model_toggle: {
            client: !0,
            default: !1
        },
        default_on_chat_editors: {
            client: !0,
            default: !1
        },
        default_tsgo_internal: {
            client: !0,
            default: !1
        },
        desktop_bridge: {
            client: !0,
            default: !1
        },
        disable_no_title_bar: {
            client: !0,
            default: !1
        },
        show_debug_aux_pane_border: {
            client: !0,
            default: !1
        },
        glass_typography_refresh: {
            client: !0,
            default: !0
        },
        browser_subagent: {
            client: !0,
            default: !0
        },
        browser_subagent_gating: {
            client: !0,
            default: !1
        },
        browser_cpp_telemetry: {
            client: !0,
            default: !0
        },
        network_access_control: {
            client: !0,
            default: !0
        },
        git_snapshot_indexing: {
            client: !0,
            default: !0
        },
        cpp_telem_chunking: {
            client: !0,
            default: !0
        },
        marketplaces_enabled: {
            client: !0,
            default: !0
        },
        customize_page: {
            client: !0,
            default: !1
        },
        customize_page_leaderboard_enabled: {
            client: !0,
            default: !1
        },
        customize_manage_scope_multiselect: {
            client: !0,
            default: !0
        },
        customize_global_search: {
            client: !0,
            default: !0
        },
        customize_plugin_detail_mcp_management: {
            client: !0,
            default: !1
        },
        web_agent_pilled_page: {
            client: !0,
            default: !1
        },
        team_marketplace_mcps: {
            client: !0,
            default: !0
        },
        publish_user_skills: {
            client: !0,
            default: !0
        },
        private_skills_user_store: {
            client: !0,
            default: !1
        },
        plugin_aware_mcp_edit_modal: {
            client: !0,
            default: !0
        },
        dashboard_plugin_add_modal: {
            client: !0,
            default: !1
        },
        dashboard_unified_plugin_mcp_allowlist: {
            client: !0,
            default: !1
        },
        plugin_marketplace_allowlisted_publisher: {
            client: !0,
            default: !1
        },
        prompt_suggestion: {
            client: !0,
            default: !1
        },
        extension_signature_verification: {
            client: !0,
            default: !1
        },
        extension_gallery_query_chunking: {
            client: !0,
            default: !1
        },
        subagents_client_side_vscode: {
            client: !0,
            default: !0
        },
        glass_projects_allowed_machines_footer: {
            client: !0,
            default: !1
        },
        glass_projects_restart_offline_workers: {
            client: !0,
            default: !1
        },
        mcp_coalesce_metrics_sampling: {
            client: !0,
            default: !1
        },
        mcp_shared_process_transports: {
            client: !0,
            default: !1
        },
        sand_box_egress_tunnel: {
            client: !0,
            default: !0
        },
        task_card_tips_enabled: {
            client: !0,
            default: !1
        },
        codebase_telemetry_v2: {
            client: !0,
            default: !0
        },
        codebase_telemetry_v2_git_history: {
            client: !0,
            default: !0
        },
        codebase_telemetry_v2_agent_dot_dirs: {
            client: !0,
            default: !0
        },
        codebase_protection_client_enforcement: {
            client: !0,
            default: !1
        },
        codebase_protection_reporting: {
            client: !0,
            default: !1
        },
        codebase_telemetry_v1_deprecation: {
            client: !0,
            default: !0
        },
        sand_codebase_telemetry: {
            client: !0,
            default: !0
        },
        sand_orbit: {
            client: !0,
            default: !1,
            requiresAuthenticatedBootstrap: !0
        },
        disable_codebase_indexing: {
            client: !0,
            default: !0
        },
        disable_docs_client_usage: {
            client: !0,
            default: !0
        },
        import_3p_plugins: {
            client: !0,
            default: !0
        },
        enable_local_3p_plugin_imports: {
            client: !0,
            default: !0
        },
        enable_new_team_member_usage_boost: {
            client: !0,
            default: !0
        },
        disable_push_request_context: {
            client: !0,
            default: !1
        },
        composer_parallel_stream_setup: {
            client: !0,
            default: !1
        },
        composer_defer_submit_transcript_render: {
            client: !0,
            default: !1
        },
        bugbot_merged_pr_scan: {
            client: !0,
            default: !0
        },
        windows_linux_update_auth_headers: {
            client: !0,
            default: !1
        },
        updater_recovery_windows: {
            client: !0,
            default: !0
        },
        glass_focus_outline: {
            client: !0,
            default: !1
        },
        glass_inline_assistant_turn_actions_bar: {
            client: !0,
            default: !0
        },
        inline_diff_defer_hidden_diff_state: {
            client: !0,
            default: !1
        },
        park_inline_diffs: {
            client: !0,
            default: !1
        },
        enable_marketplace_plugin_logging: {
            client: !0,
            default: !0
        },
        enable_sparse_plugin_clones: {
            client: !0,
            default: !0
        },
        glass_always_local_agent_workspace: {
            client: !0,
            default: !0
        },
        glass_disable_eager_indexing_for_local_sessions: {
            client: !0,
            default: !0
        },
        glass_rainbow_csv_extension: {
            client: !0,
            default: !1
        },
        retry_hydration_optimization: {
            client: !0,
            default: !1
        },
        full_self_driving: {
            client: !0,
            default: !1
        },
        full_self_driving_github_origin_review: {
            client: !0,
            default: !1
        },
        fsd_suggestions_platform_local_mcp: {
            client: !0,
            default: !1
        },
        full_self_driving_glass: {
            client: !0,
            default: !1
        },
        full_self_driving_glass_pr_tab: {
            client: !0,
            default: !1
        },
        shutdown_hang_watchdog_darwin_sigkill: {
            client: !0,
            default: !0
        },
        cursor_shared_session_file_watcher: {
            client: !0,
            default: !1
        },
        cursor_update_supervisor: {
            client: !0,
            default: !1
        },
        cursor_update_shipit_cache_reset_kill_switch: {
            client: !0,
            default: !1
        },
        cursor_private_inference_download_prompt: {
            client: !0,
            default: !1
        },
        cursor_cli_private_inference_download_prompt: {
            client: !0,
            default: !1
        },
        disable_sqlite_storage_backup: {
            client: !0,
            default: !0
        },
        sqlite_incremental_auto_vacuum_on_close: {
            client: !0,
            default: !1
        },
        agent_store_sync_client: {
            client: !0,
            default: !1
        },
        agent_store_use_dedicated_service: {
            client: !0,
            default: !1
        },
        agent_store_citation_index_tier: {
            client: !0,
            default: !1
        },
        agent_store_principal_local_mounts: {
            client: !0,
            default: !1
        },
        agent_store_local_user_mount: {
            client: !0,
            default: !0
        },
        proxy_agent_secure_context_cache: {
            client: !0,
            default: !1
        },
        auto_disable_unused_models: {
            client: !0,
            default: !1
        },
        drop_custom_prompt_context: {
            client: !0,
            default: !1
        },
        composer_reuse_editor_input: {
            client: !0,
            default: !0
        },
        disposable_leak_reporting: {
            client: !0,
            default: !1
        }
    });
    const uf = {
        composer_gc_safety_net_1s: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: _f
            }
        },
        tsgo_disable_auto_imports_internal: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: _f
            }
        },
        grok_bot_send_to_user_reminder_delegation: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: _f
            }
        },
        grok_bot_task_subagent_roster: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: _f
            }
        },
        grok_bot_update_state_split_v2: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: _f
            }
        },
        sand_hide_at_mentions_ab: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: _f
            }
        },
        sand_onboarding_job_role: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: _f
            }
        },
        sand_local_egress_default_on_ab: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: _f
            }
        },
        sand_mobile_onboarding_job_role_optional: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: _f
            }
        },
        sand_mobile_notifications_ask_redesign: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: _f
            }
        },
        sand_onboarding_role_use_case_bots: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: _f
            }
        },
        limit_hit_ui_2026_06: {
            client: !0,
            fallbackValues: {
                group: "control"
            },
            parseValue: {
                group: vf([
                    "control",
                    "treatment"
                ])
            }
        },
        limit_hit_ui_2027_07: {
            client: !0,
            fallbackValues: {
                group: "control"
            },
            parseValue: {
                group: vf([
                    "control",
                    "treatment"
                ])
            }
        },
        third_party_usage_nudge_2026_07: {
            client: !0,
            fallbackValues: {
                group: "control"
            },
            parseValue: {
                group: vf([
                    "control",
                    "treatment"
                ])
            }
        },
        third_party_usage_nudge_policy_2026_07: {
            client: !0,
            fallbackValues: {
                policy: "none"
            },
            parseValue: {
                policy: vf([
                    "none",
                    "90",
                    "75_90"
                ])
            }
        },
        sand_usage_warning_policy_2026_08: {
            client: !0,
            fallbackValues: {
                policy: "none",
                firstThresholdPercent: 75,
                secondThresholdPercent: 90
            },
            parseValue: {
                policy: vf([
                    "none",
                    "single",
                    "double"
                ]),
                firstThresholdPercent: Sf,
                secondThresholdPercent: Sf
            }
        },
        sand_group_chat_discouragement_2026_09: {
            client: !0,
            fallbackValues: {
                policy: "control"
            },
            parseValue: {
                policy: vf([
                    "control",
                    "notice",
                    "notice_and_hide_create"
                ])
            }
        },
        sand_invite_teammates_placement_2026_09: {
            client: !0,
            fallbackValues: {
                placement: "control"
            },
            parseValue: {
                placement: vf([
                    "control",
                    "profile_menu",
                    "settings"
                ])
            }
        },
        third_party_on_demand_nudge_2026_08: {
            client: !0,
            fallbackValues: {
                group: "control",
                copy: "cursor_models"
            },
            parseValue: {
                group: vf([
                    "control",
                    "treatment"
                ]),
                copy: vf([
                    "cursor_models",
                    "grok_45"
                ])
            }
        },
        new_chat_first_party_switch_2026_08: {
            client: !0,
            fallbackValues: {
                group: "control"
            },
            parseValue: {
                group: vf([
                    "control",
                    "treatment"
                ])
            }
        },
        grok_45_app_open_recent_composers_2026_08: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: _f
            }
        },
        automations_button_in_ide: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: _f
            }
        },
        grok_bot_contextual_banner: {
            client: !0,
            fallbackValues: {
                enabled: !1,
                cooldown_days: 1,
                max_shows: 5
            },
            parseValue: {
                enabled: _f,
                cooldown_days: Sf,
                max_shows: Sf
            }
        },
        grok_bot_contextual_banner_v2: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: _f
            }
        },
        parallel_agents_try_cloud_nudge_glass: {
            client: !0,
            fallbackValues: {
                variant: "control"
            },
            parseValue: {
                variant: vf([
                    "control",
                    "try_cloud",
                    "educational"
                ])
            }
        },
        dashboard_user_checklist_enterprise: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: _f
            }
        },
        dashboard_admin_setup_enterprise: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: _f
            }
        },
        dashboard_team_admin_onboarding_checklist: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: _f
            }
        },
        new_team_add_teammates_callout: {
            client: !0,
            fallbackValues: {
                group: "control"
            },
            parseValue: {
                group: vf([
                    "control",
                    "callout"
                ])
            }
        },
        new_team_name_prefill: {
            client: !0,
            fallbackValues: {
                group: "control"
            },
            parseValue: {
                group: vf([
                    "control",
                    "domain_brand"
                ])
            }
        },
        dashboard_member_remove_modal: {
            client: !0,
            fallbackValues: {
                group: "control"
            },
            parseValue: {
                group: vf([
                    "control",
                    "treatment_info",
                    "treatment_warning"
                ])
            }
        },
        push_mcps: {
            client: !0,
            fallbackValues: {
                group: "control"
            },
            parseValue: {
                group: vf([
                    "control",
                    "enabled"
                ])
            }
        },
        glass_setup_cloud_pill: {
            client: !0,
            fallbackValues: {
                enabled: !1,
                variant: "ghost"
            },
            parseValue: {
                enabled: _f,
                variant: vf([
                    "ghost",
                    "primary"
                ])
            }
        },
        send_to_cloud_composer_glass: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: _f
            }
        },
        connect_repo_env_setup_pill_glass: {
            client: !0,
            fallbackValues: {
                variant: "control"
            },
            parseValue: {
                variant: vf([
                    "control",
                    "primary",
                    "secondary",
                    "tertiary"
                ])
            }
        },
        ide_connect_git_repos_start: {
            client: !0,
            fallbackValues: {
                variant: "control"
            },
            parseValue: {
                variant: vf([
                    "control",
                    "primary",
                    "secondary",
                    "tertiary"
                ])
            }
        },
        ide_steer_from_cloud_start: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: _f
            }
        },
        glass_account_menu_ios_download: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: _f
            }
        },
        glass_account_menu_grok_bot: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: _f
            }
        },
        glass_account_menu_usage_remaining: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: _f
            }
        },
        glass_agent_demos_setup_pill: {
            client: !0,
            fallbackValues: {
                enabled: !1,
                variant: "ghost",
                cloud_target_only: !1
            },
            parseValue: {
                enabled: _f,
                variant: vf([
                    "ghost",
                    "primary"
                ]),
                cloud_target_only: _f
            }
        },
        cloud_setup_cta_glass_running_agent_session: {
            client: !0,
            fallbackValues: {
                variant: "control"
            },
            parseValue: {
                variant: vf([
                    "control",
                    "chat_title",
                    "composer_pill"
                ])
            }
        },
        set_up_env_pill_glass: {
            client: !0,
            fallbackValues: {
                variant: "control"
            },
            parseValue: {
                variant: vf([
                    "control",
                    "primary",
                    "secondary",
                    "tertiary"
                ])
            }
        },
        agent_desktop_glass_env_setup: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: _f
            }
        },
        glass_automations_sidebar_new_tag: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: _f
            }
        },
        glass_grok_bot_topbar_cta: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: _f
            }
        },
        glass_grok_bot_topbar_cta_new_chat_only: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: _f
            }
        },
        glass_grok_bot_topbar_cta_hide_when_installed: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: _f
            }
        },
        new_tag_cloud_runtime_glass: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: _f
            }
        },
        runtime_picker_discovery_nudge_glass: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: _f
            }
        },
        remote_control_runtime_picker_glass: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: _f
            }
        },
        default_web_users_cloud_in_glass: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: _f
            }
        },
        cloud_setup_cta_web_running_agent_session: {
            client: !0,
            fallbackValues: {
                variant: "control"
            },
            parseValue: {
                variant: vf([
                    "control",
                    "primary",
                    "secondary",
                    "tertiary"
                ])
            }
        },
        suggested_prompts: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: _f
            }
        },
        suggested_mode_switch: {
            client: !0,
            fallbackValues: {
                group: "control"
            },
            parseValue: {
                group: vf([
                    "control",
                    "nudge"
                ])
            }
        },
        marketplace_tab_customize_label: {
            client: !0,
            fallbackValues: {
                group: "control"
            },
            parseValue: {
                group: vf([
                    "control",
                    "treatment"
                ])
            }
        },
        customize_default_manage_tab: {
            client: !0,
            fallbackValues: {
                tab: "plugins"
            },
            parseValue: {
                tab: vf([
                    "plugins",
                    "mcps"
                ])
            }
        },
        customize_grok_bot_callout: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: _f
            }
        },
        marketplace_card_install_cta_ab: {
            client: !0,
            fallbackValues: {
                group: "control"
            },
            parseValue: {
                group: vf([
                    "control",
                    "card_cta"
                ])
            }
        },
        marketplace_detail_authenticate_cta_ab: {
            client: !0,
            fallbackValues: {
                group: "control"
            },
            parseValue: {
                group: vf([
                    "control",
                    "detail_auth_cta"
                ])
            }
        },
        marketplace_try_in_chat_prompt_ab: {
            client: !0,
            fallbackValues: {
                group: "control"
            },
            parseValue: {
                group: vf([
                    "control",
                    "concrete_use_case_prompt"
                ])
            }
        },
        composer_run_button_style: {
            client: !0,
            fallbackValues: {
                buttonStyle: "primary"
            },
            parseValue: {
                buttonStyle: vf([
                    "primary",
                    "secondary"
                ])
            }
        },
        new_placeholder: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: _f
            }
        },
        cursor_launch_at_login: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: _f
            }
        },
        subscription_only_degraded_extended_usage: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: _f
            }
        },
        onboarding_default_layout_agent: {
            client: !0,
            fallbackValues: {
                enabled: "false"
            },
            parseValue: {
                enabled: Af
            }
        },
        onboarding_left_right_chat: {
            client: !0,
            fallbackValues: {
                enabled: "left"
            },
            parseValue: {
                enabled: vf([
                    "left",
                    "right"
                ])
            }
        },
        separate_auto_and_api_usage_bars_for_individuals: {
            client: !0,
            fallbackValues: {
                group: "control"
            },
            parseValue: {
                group: vf([
                    "control",
                    "test"
                ])
            }
        },
        onboarding_skip_post_login: {
            client: !0,
            fallbackValues: {
                enabled: "control"
            },
            parseValue: {
                enabled: vf([
                    "control",
                    "remove_features"
                ])
            }
        },
        free_user_locked_model_2026_05: {
            client: !0,
            fallbackValues: {
                variant: "control"
            },
            parseValue: {
                variant: vf([
                    "control",
                    "composer_2_5_fast",
                    "composer_2_5",
                    "grok_4_6"
                ])
            }
        },
        free_user_composer_grok_picker_2026_07: {
            client: !0,
            fallbackValues: {
                group: "control"
            },
            parseValue: {
                group: vf([
                    "control",
                    "treatment"
                ])
            }
        },
        model_picker_promote_first_party_v3: {
            client: !0,
            fallbackValues: {
                variant: "control"
            },
            parseValue: {
                variant: vf([
                    "control",
                    "grouped_auto_expand"
                ])
            }
        },
        model_picker_usage_display_2026_08: {
            client: !0,
            fallbackValues: {
                group: "control"
            },
            parseValue: {
                group: vf([
                    "control",
                    "show_labels"
                ])
            }
        },
        free_user_usage_summary_display_mode: {
            client: !0,
            fallbackValues: {
                group: "control"
            },
            parseValue: {
                group: vf([
                    "control",
                    "always_show_percentage"
                ])
            }
        },
        pro_auto_mode_new_users: {
            client: !0,
            fallbackValues: {
                group: "control"
            },
            parseValue: {
                group: vf([
                    "control",
                    "pro_and_auto_default_auto",
                    "pro_and_auto_default_pro"
                ])
            }
        },
        pro_auto_mode_existing_users: {
            client: !0,
            fallbackValues: {
                group: "control"
            },
            parseValue: {
                group: vf([
                    "control",
                    "pro_and_auto_default_auto_with_nudge"
                ])
            }
        },
        premium_auto_mode: {
            client: !0,
            fallbackValues: {
                group: "control"
            },
            parseValue: {
                group: vf([
                    "control",
                    "premium_auto_option"
                ])
            }
        },
        terminal_tip: {
            client: !0,
            fallbackValues: {
                enabled: !1,
                message: "Install Cursor CLI?",
                action: "curl https://cursor.com/install -fsS | bash",
                show_every_hours: 0,
                show_count: 0
            },
            parseValue: {
                enabled: _f,
                message: Af,
                action: Af,
                show_every_hours: Sf,
                show_count: Sf
            }
        },
        cli_install_ad: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: _f
            }
        },
        new_chat_auto_switch: {
            client: !0,
            fallbackValues: {
                group: "control"
            },
            parseValue: {
                group: vf([
                    "control",
                    "popup",
                    "inline_banner"
                ])
            }
        },
        team_pending_cancellation_cancel_now: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: _f
            }
        },
        yearly_upgrade_inplace: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: _f
            }
        },
        portal_od_enable_limit_hit_2026_08: {
            client: !0,
            fallbackValues: {
                group: "control"
            },
            parseValue: {
                group: vf([
                    "control",
                    "treatment"
                ])
            }
        },
        dashboard_user_menu_view_plans: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: _f
            }
        },
        dashboard_create_team_sidebar_cta: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: _f
            }
        },
        sidebar_bottom_section_cta: {
            client: !0,
            fallbackValues: {
                group: "control"
            },
            parseValue: {
                group: vf([
                    "control",
                    "create_team",
                    "upgrade_to_pro"
                ])
            }
        },
        sidebar_grok_bot_cta: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: _f
            }
        },
        agents_grok_bot_cta: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: _f
            }
        },
        spending_grok_bot_cta: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: _f
            }
        },
        free_user_create_team_cta: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: _f
            }
        },
        dashboard_free_overview_cleanup: {
            client: !0,
            fallbackValues: {
                group: "control"
            },
            parseValue: {
                group: vf([
                    "control",
                    "used_percentage",
                    "remaining_percentage"
                ])
            }
        },
        download_bottom_dashboard: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: _f
            }
        },
        web_grok_bot_launch_ad: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: _f
            }
        },
        web_cloud_agents_agent_window_ad: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: _f
            }
        },
        router_settings_disabled_info: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: _f
            }
        },
        onboarding_redirect_git_to_login_deep_control: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: _f
            }
        },
        dashboard_invite_modal_version: {
            client: !0,
            fallbackValues: {
                variant: "v2"
            },
            parseValue: {
                variant: vf([
                    "v2",
                    "v3",
                    "v3-contacts"
                ])
            }
        },
        set_up_env_pill_web: {
            client: !0,
            fallbackValues: {
                variant: "control"
            },
            parseValue: {
                variant: vf([
                    "control",
                    "primary",
                    "secondary",
                    "tertiary"
                ])
            }
        },
        completely_free_env_setup_glass_and_web: {
            client: !0,
            fallbackValues: {
                variant: "control"
            },
            parseValue: {
                variant: vf([
                    "control",
                    "primary",
                    "secondary",
                    "tertiary"
                ])
            }
        },
        env_setup_free_callout_web: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: _f
            }
        },
        completely_free_env_setup_glass: {
            client: !0,
            fallbackValues: {
                variant: "control"
            },
            parseValue: {
                variant: vf([
                    "control",
                    "treatment"
                ])
            }
        },
        dynamic_automation_templates: {
            client: !0,
            fallbackValues: {
                group: "control"
            },
            parseValue: {
                group: vf([
                    "control",
                    "treatment"
                ])
            }
        },
        team_pinned_marketplace_plugins: {
            client: !0,
            fallbackValues: {
                group: "control"
            },
            parseValue: {
                group: vf([
                    "control",
                    "treatment"
                ])
            }
        },
        glass_new_chat_header: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: _f
            }
        },
        glass_ftux_wizard: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: _f
            }
        },
        glass_ftux_app_scan: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: _f
            }
        },
        terminal_agent_integration: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: _f
            }
        },
        ide_update_ux_exp: {
            client: !0,
            fallbackValues: {
                variant: "control"
            },
            parseValue: {
                variant: vf([
                    "control",
                    "sidebar",
                    "non_sidebar"
                ])
            }
        },
        effort_first_model_picker: {
            client: !0,
            fallbackValues: {
                variant: "control"
            },
            parseValue: {
                variant: vf([
                    "control",
                    "treatment"
                ])
            }
        },
        effort_first_show_grok_name: {
            client: !0,
            fallbackValues: {},
            parseValue: {}
        }
    };
    Object.keys(uf);
    const df = {
        fastRetryBaseDelayMs: am().min(1e3).max(36e5),
        fastRetryMaxDelayMs: am().min(1e3).max(36e5),
        fastRetryMaxAttempts: am().min(1).max(20).optional(),
        periodicRetryBaseDelayMs: am().min(3e4).max(36e5),
        periodicRetryMaxDelayMs: am().min(3e4).max(36e5),
        maxPeriodicCycles: am().min(0).max(1e4).nullish(),
        focusRetryCooldownMs: am().min(3e5).max(36e5),
        inlineReconnectCooldownMs: am().min(1e3).max(36e5).optional(),
        oauthBackendRefreshHydrationPollIntervalMs: am().min(200).max(5e3).optional(),
        streamableHttpSession404TombstoneThreshold: am().min(1).max(50).optional(),
        healthProbeTimeoutMs: am().min(1e3).max(12e4).optional(),
        toolCallBoundedTimeoutEnabled: fm().optional(),
        toolCallIdleTimeoutMs: am().min(5e3).max(18e5).optional(),
        toolCallMaxTotalTimeoutMs: am().min(5e3).max(36e5).optional(),
        degradedProbeDelayMs: am().min(1e3).max(36e5).optional(),
        maxDegradedProbeFailures: am().min(1).max(20).optional(),
        keepaliveProbeDelayMs: am().min(1e4).max(36e5).optional(),
        keepaliveJitterMs: am().min(0).max(36e5).optional(),
        stabilityThresholdMs: am().min(5e3).max(6e5).optional(),
        stdioConnectFailuresAreNonRetryable: fm().optional(),
        retryNonRetryableOnWake: fm().optional(),
        nonRetryableWakeRetryCooldownMs: am().min(1e3).max(36e5).optional(),
        retryNonRetryableAutomatically: fm().optional(),
        networkResumeReconnectEnabled: fm().optional(),
        networkResumeReconnectDebounceMs: am().min(0).max(18e5).optional()
    }, pf = Lm(df).partial().extend({
        identifier: lp().optional(),
        hostname: lp().optional()
    }).refine((e)=>void 0 !== e.identifier || void 0 !== e.hostname, {
        message: "Each mcp_reconnect_config override requires identifier and/or hostname."
    }), mf = (Lm({
        ...df,
        overrides: Nm(pf).nullish()
    }), [
        "figma",
        "slack",
        "linear",
        "notion-workspace"
    ]), hf = Nm(Vm("type", [
        Lm({
            type: ph("app"),
            app: lh(mf),
            title: lp().min(1),
            description: lp().min(1),
            prompt: lp().min(1)
        }).strict(),
        Lm({
            type: ph("icon"),
            icon: lp().min(1),
            title: lp().min(1),
            description: lp().min(1),
            prompt: lp().min(1)
        }).strict()
    ])).length(mf.length + 3).superRefine((e, t)=>{
        const r = e.flatMap((e)=>"app" === e.type ? [
                e.app
            ] : []), n = e.length - r.length;
        3 !== n && t.addIssue({
            code: cf,
            message: `Expected exactly 3 icon actions, got ${n}`
        });
        for (const e of mf){
            const n = r.filter((t)=>t === e).length;
            1 !== n && t.addIssue({
                code: cf,
                message: `Expected exactly one "${e}" action, got ${n}`
            });
        }
    }), ff = Lm({
        coding: hf,
        tasks: hf
    }).strict(), gf = [
        "software-engineer",
        "designer",
        "product-manager",
        "researcher",
        "data-scientist",
        "student",
        "marketer",
        "operations",
        "something-else"
    ], yf = th(lp().max(100), ff).superRefine((e, t)=>{
        const r = new Set(gf);
        for (const n of Object.keys(e))r.has(n) || t.addIssue({
            code: cf,
            message: `Unknown FTUX first-action job role key: ${n}`,
            path: [
                n
            ]
        });
    }), wf = (am().int().positive(), am().int().positive(), am().int().positive(), am().int().positive(), am().int().positive(), am().int().positive(), am().int().positive(), am().int().positive(), am().int().positive(), am().int().positive(), Lm({
        enabled: fm(),
        instructionsUrl: lp().nullish()
    }), Lm({
        products: th(lp(), lh([
            "pro",
            "pro_plus",
            "ultra"
        ]))
    }), Lm({
        report_interval_ms: am().int().positive(),
        jitter_fraction: am().min(0).max(1)
    }), Lm({
        initial_timeout_ms: am(),
        retry_timeout_ms: am(),
        max_attempts: am()
    }), Lm({
        pollIntervalMs: am().nullable(),
        requestIdleTimeoutMs: am().nullable()
    }), Lm({
        deadline_ms: am(),
        max_stale_age_ms: am()
    }), Lm({
        maxClosureBytes: am().int().positive(),
        maxClosureBlobs: am().int().positive(),
        putConcurrency: am().int().min(1).max(32),
        parallelListing: fm(),
        migrationAgentConcurrency: am().int().min(1).max(32),
        migrationReadBatchBlobs: am().int().min(1).max(64),
        migrationPutConcurrency: am().int().min(1).max(32),
        migrationCopyConcurrency: am().int().min(1).max(64),
        migrationExportCommandTimeoutMs: am().int().min(6e4).max(6e5),
        migrationHostWindowMs: am().int().min(6e4).max(27e5),
        migrationExportActivityTimeoutMs: am().int().min(6e4).max(18e5)
    }), Lm({
        control: lh([
            "legacy_gates",
            "config"
        ]),
        mode: lh([
            "off",
            "shadow",
            "live"
        ]),
        autoReviewEnforce: fm()
    }), Lm({
        mode: lh([
            "off",
            "shadow",
            "on"
        ])
    }), Lm({
        sampleRate: am().min(0).max(1),
        connectors: Nm(Lm({
            name: lp().min(1),
            hosts: Nm(lp().min(1)),
            sendTools: Nm(lp().min(1)),
            participants: Lm({
                args: Nm(lp().min(1)).min(1),
                ownerArgs: Nm(lp().min(1)).optional()
            }).optional()
        })),
        firstPartySendTools: Nm(Lm({
            name: lp().min(1),
            toolName: lp().min(1)
        })).optional()
    }), Lm({
        basePrompt: lp()
    }), Lm({
        healthcheck_timeout_ms: am().int().positive(),
        remote_extension_host_startup_grace_ms: am().int().nonnegative()
    }), Lm({
        interval_ms: am().int().positive()
    }), Lm({
        stackTraceLimitFloor: am().int().nonnegative()
    }), Lm({
        windowIdleMinutesToSuspend: am().int().nonnegative(),
        hiddenAgentMinutesToSuspend: am().int().nonnegative(),
        suspendWhileWindowFocused: fm(),
        maxDormantQueuedMessages: am().int().positive(),
        maxDormantQueuedBytes: am().int().positive(),
        hardMaxDormantQueuedMessages: am().int().positive(),
        hardMaxDormantQueuedBytes: am().int().positive()
    }), Lm({
        idleMinutesToKillExtensionHost: am().int().nonnegative(),
        freeMemoryPercentageToKillExtensionHost: am().min(0).max(100),
        killUserExtensionHost: fm()
    }), Lm({
        rpcTimeoutMs: am().int().positive()
    }), Lm({
        outputSuppressionWindowMs: am().int().positive(),
        outputSuppressionThresholdCharsPerSecond: am().int().positive(),
        outputSuppressionMinChars: am().int().positive(),
        outputLimiterFlushIntervalMs: am().int().positive(),
        outputLimiterMaxBufferedBytes: am().int().positive(),
        extHostMinBatchIntervalMs: am().int().positive(),
        extHostMaxBatchIntervalMs: am().int().positive(),
        extHostBytesPerIntervalStep: am().int().positive()
    }), Lm({
        model: lp(),
        iterations: am(),
        agentic_iterations: am(),
        agentic_model: lp(),
        deep_review_model: lp(),
        context_lines: am()
    }), Lm({
        tokenUsageThresholdPercentage: am(),
        tolerancePercentage: am(),
        inflightMaxAgeMinutes: am(),
        speculativeStreamTimeoutMinutes: am()
    }), Lm({
        message: lp()
    }), Lm({
        enable: fm(),
        enabled_models: Nm(lp()),
        force_enable_on_all_models: fm(),
        group_text: fm(),
        group_thinking: fm(),
        group_todos: fm(),
        group_edits: fm(),
        smooth_stream_enable: fm(),
        grouped_text_max_length: am(),
        grouped_text_max_length_composer_family: am(),
        tool_summary_mode: lp(),
        nest_tool_blocks: fm()
    }), Lm({
        meta_parent_model: lp(),
        allow_subagent_followups: fm(),
        enable_notes: fm()
    }), Lm({
        startup_tips: Nm(Lm({
            id: lp(),
            text: lp(),
            enabled: fm().optional()
        }))
    }), Lm({
        tips: Nm(Lm({
            id: lp(),
            text: lp(),
            targetSurfaces: Nm(lh([
                "editor",
                "glass"
            ])).min(1)
        }).strict()),
        config: Lm({
            intervalMs: am().positive(),
            devIntervalMs: am().positive().optional(),
            minClientVersion: lp()
        }).strict()
    }).strict(), Lm({
        showSettings: fm(),
        keepIsland: fm(),
        sidebarLocation: lh([
            "left",
            "right",
            "user",
            "noop"
        ])
    }), Lm({
        default_diff_mode: lh([
            "unified",
            "diffs"
        ])
    }), Lm({
        enabledForNal: fm(),
        enabledForOal: fm(),
        fromModes: Nm(lp()),
        targetModes: Nm(lp())
    }), Lm({
        authToolDescription: lp(),
        errorStatusMessage: lp(),
        needsAuthStatusMessageWithAuthTool: lp()
    }), Lm({
        oauthAttemptTtlMs: am().min(6e4).max(6048e5),
        refreshLockTtlMs: am().min(2e3).max(12e4).nullish(),
        refreshLockMaxHoldMs: am().min(3e4).max(36e5).optional(),
        registrationLockTtlMs: am().min(2e3).max(12e4).nullish()
    }), Lm({
        classifyBeforeWipe: fm()
    }), Lm({
        enabled: fm(),
        denylist: Nm(lp()),
        ipv4Hosts: Nm(lp()).optional()
    }), Lm({
        operations: Nm(lh([
            "refresh",
            "registration"
        ])),
        executorKinds: Nm(lh([
            "backendHttpMcp",
            "cloudAgent",
            "agentHost",
            "localIde",
            "remoteExtensionHost"
        ])),
        providerAllowlist: Nm(lp()),
        fallbackMode: lh([
            "fail_open",
            "fail_closed"
        ]),
        refreshLockTtlMs: am().min(2e3).max(12e4),
        registrationLockTtlMs: am().min(2e3).max(12e4),
        waitPollIntervalMs: am().min(25).max(5e3),
        waitJitterMs: am().min(0).max(5e3),
        maxWaitMs: am().min(0).max(12e4)
    }), Lm({
        sustainedPressureWindowMs: am(),
        profileDurationMs: am(),
        minIntervalMs: am(),
        maxRetainedProfiles: am()
    }), Lm({
        firstTokenDeadlineMs: am(),
        idleDeadlineMs: am()
    }), Lm({
        maxDecorations: am()
    }), Lm({
        enableMainProcessCloudRefresh: fm().default(!1),
        activeIntervalMs: am().int().min(5e3).max(36e5),
        idleIntervalMs: am().int().min(5e3).max(36e5),
        emptyIntervalMs: am().int().min(5e3).max(36e5),
        engagementThrottleMs: am().int().min(1e3).max(6e4),
        menuCap: am().int().min(1).max(100),
        enablePoll: fm(),
        enableEngagement: fm(),
        enablePower: fm()
    }), Lm({
        enabled: fm(),
        flushIntervalMs: am(),
        sampleRate: am(),
        maxScriptsPerLoaf: am(),
        maxBatchBytes: am(),
        loafThresholdMs: am(),
        maxEventsPerFlush: am()
    }), Lm({
        version: am()
    }), Lm({
        allowlist: Nm(lp())
    }), Lm({
        logSizeThreshold: am(),
        logPreviewLines: am(),
        logPreviewChars: am()
    }), Lm({
        mode: lh([
            "off",
            "on_logged_in",
            "on"
        ])
    }), Lm({
        tools: th(lp(), Lm({
            ttl: am().optional(),
            maxConcurrent: am().optional()
        })),
        defaultTtl: am(),
        defaultMaxConcurrent: am()
    }), Lm({
        num_threads: am(),
        fallback_num_threads: am(),
        use_batch_executor: fm(),
        batch_executor_wait_ms: am()
    }), Lm({
        enabled: Nm(lp()),
        pingIdleConnection: fm().nullable(),
        pingIntervalMs: am().nullable(),
        pingTimeoutMs: am().nullable(),
        idleConnectionTimeoutMs: am().nullable()
    }), Lm({
        poolSize: am()
    }), Lm({
        keepAliveInitialDelayMs: am().nullable()
    }), Lm({
        maxConnections: am()
    }), Lm({
        idleHoldMs: am(),
        echoTimeoutMs: am(),
        concurrency: am()
    }), Lm({
        sampling_rate: am()
    }), Lm({
        hooks_ready_timeout_ms: am()
    }), Lm({
        thresholds_ms: Nm(am())
    }), Lm({
        error_type_denylist: Nm(lp())
    }), Lm({
        advisoryTimeoutMs: am(),
        failTimeoutMs: am()
    }), Lm({
        mode: lh([
            "legacy",
            "dual",
            "ref_only"
        ]),
        max_blob_bytes: am().int().positive(),
        max_inline_dynamic_bytes: am().int().positive()
    }), Lm({
        timeout_ms: am()
    }), Lm({
        enabled: fm(),
        min_display_threshold_ms: am()
    }), Lm({
        ad_id_to_show: lp()
    }), Lm({
        quiet_period_ms: am(),
        first_launch_quiet_period_ms: am()
    }), Lm({
        max_resume_age_ms: am().int().min(_o.Zw).max(_o.fg)
    }), Lm({
        enabled: fm(),
        subsample_polling_rate_sec: am(),
        sample_polling_rate_min: am()
    }), Lm({
        user_routing_enabled: fm(),
        inactive_days: am(),
        ch_timeout_ms: am(),
        ch_cache_ttl_seconds: am(),
        local_routing_enabled: fm()
    }), Lm({
        retriableErrors: Nm(Lm({
            code: lp(),
            errorMessage: lp().optional(),
            method: lp().optional()
        }))
    }), Lm({
        maxRetries: am().nullish(),
        baseDelayMs: am().nullish(),
        maxDelayMs: am().nullish()
    }), Lm({
        targetCharsPerFrame: am(),
        maxLagFrames: am(),
        barrierMaxWaitMs: am()
    }), Lm({
        local_enabled: fm(),
        backend_reporting_enabled: fm(),
        network_diagnostics_reporting_enabled: fm().optional(),
        subsample_polling_rate_sec: am(),
        sample_polling_rate_min: am()
    }), Lm({
        monitor_enabled: fm(),
        low_memory_sustained_sec: am(),
        min_agent_process_age_sec: am(),
        low_memory_available_pct: am(),
        low_memory_available_abs_gb: am(),
        cpu_high_pct: am(),
        cpu_high_sustained_sec: am(),
        min_reported_cpu_pct: am()
    }), Lm({
        local_enabled: fm(),
        backend_reporting_enabled: fm(),
        subsample_polling_rate_sec: am(),
        sample_polling_rate_min: am()
    }), Lm({
        enabled: fm(),
        sample_ratio: am()
    }), Lm({
        enabled: fm(),
        drain_interval_sec: am()
    }), Lm({
        enabled: fm()
    }), Lm({
        max_bytes: am()
    }), Lm({
        maxRunning: am().int().positive()
    }), Lm({
        min_version: lp(),
        backend_min_version: lp(),
        novnc_port_token_min_version: lp(),
        hosted_mcp_oauth_callback_min_version: lp(),
        max_age_days: am().int().min(0).catch(0)
    }), Lm({
        min_recommended_build: am(),
        min_allowed_build: am(),
        update_url: lp()
    }), Lm({
        modelId: lp().min(1),
        maxMode: fm(),
        parameters: Nm(Lm({
            id: lp().min(1),
            value: lp()
        }))
    }), Lm({
        soft_limit_mb: am(),
        hard_limit_mb: am()
    }), Lm({
        modelId: lp(),
        maxMode: fm(),
        parameters: Nm(Lm({
            id: lp().min(1),
            value: lp()
        }))
    }), Lm({
        modelId: lp(),
        maxMode: fm(),
        parameters: Nm(Lm({
            id: lp().min(1),
            value: lp()
        }))
    }), Lm({
        enabled: fm(),
        sample_rate_denominator: am(),
        cooldown_seconds: am(),
        signup_grace_seconds: am()
    }), Lm({
        sync_debounce_ms: am().int().min(250).max(36e5),
        idle_backoff_factor: am().min(1).max(4).optional(),
        sync_idle_max_ms: am().int().min(250).max(36e5).optional(),
        idle_quiesce_ms: am().int().min(0).max(36e5).optional(),
        large_target_ttl_ms: am().int().min(6e4).max(864e5).optional(),
        sync_backoff_base_ms: am().int().min(100).max(36e5),
        sync_backoff_max_ms: am().int().min(100).max(36e5),
        project_sync_debounce_ms: am().int().min(250).max(36e5),
        project_sync_idle_max_ms: am().int().min(250).max(36e5).optional(),
        project_sync_backoff_base_ms: am().int().min(100).max(36e5),
        project_sync_backoff_max_ms: am().int().min(100).max(36e5),
        passive_retry_interval_ms: am().int().min(0).max(36e5),
        passive_index_poll_interval_ms: am().int().min(0).max(36e5),
        project_store_poll_interval_ms: am().int().min(250).max(36e5),
        path_refresh_min_interval_ms: am().int().min(0).max(36e5).optional(),
        project_notes_poll_interval_ms: am().int().min(1e3).max(36e5).optional(),
        max_file_size_bytes: am().int().min(1024).max(1073741824),
        token_refresh_buffer_ms: am().int().min(0).max(6e5),
        mint_terminal_denial_cache_ms: Gm([
            ph(0),
            am().int().min(6e4).max(864e5)
        ]).optional(),
        skip_denied_mount_sync: Gm([
            ph(0),
            ph(1)
        ]).optional(),
        rpc_retry_max_attempts: am().int().min(1).max(10),
        rpc_retry_base_delay_ms: am().int().min(1).max(6e4),
        rpc_retry_max_delay_ms: am().int().min(1).max(3e5),
        rpc_retry_multiplier: am().min(1).max(10),
        token_refresh_jitter_ratio: Gm([
            ph(0),
            am().min(.05).max(.9)
        ]).optional(),
        min_token_slack_ms: am().int().min(0).max(6e4).optional(),
        mint_retry_policy_version: Gm([
            ph(0),
            ph(1)
        ]).optional(),
        mint_retry_max_attempts: am().int().min(1).max(5).optional(),
        mint_retry_base_delay_ms: am().int().min(1).max(1e4).optional(),
        mint_retry_max_delay_ms: am().int().min(1).max(6e4).optional(),
        mint_retry_budget_ratio: am().min(0).max(1).optional(),
        mint_retry_budget_floor: am().int().min(0).max(100).optional(),
        mint_transient_negative_cache_base_ms: am().int().min(100).max(6e5).optional(),
        mint_transient_negative_cache_max_ms: am().int().min(100).max(36e5).optional(),
        mint_gate_open_threshold: am().int().min(1).max(1e3).optional(),
        mint_gate_window_ms: am().int().min(1e3).max(6e5).optional(),
        mint_gate_open_base_ms: am().int().min(100).max(6e5).optional(),
        mint_gate_open_max_ms: am().int().min(100).max(36e5).optional(),
        rpc_timeout_ms: am().int().min(1e3).max(6e5),
        blob_idle_timeout_ms: Gm([
            ph(0),
            am().int().min(1e3).max(6e5)
        ]),
        blob_connect_timeout_ms: Gm([
            ph(0),
            am().int().min(1e3).max(3e5)
        ]).optional(),
        sync_round_timeout_ms: Gm([
            ph(0),
            am().int().min(3e4).max(36e5)
        ]),
        sync_round_progress_timeout_ms: Gm([
            ph(0),
            am().int().min(3e4).max(36e5)
        ]).optional(),
        sync_round_hard_cap_ms: Gm([
            ph(0),
            am().int().min(6e4).max(72e5)
        ]).optional(),
        sync_round_unwind_timeout_ms: am().int().min(1e3).max(6e5),
        lock_release_failure_threshold: am().int().min(1).max(20),
        lock_release_failure_streak_threshold: am().int().min(0).max(100).optional(),
        lock_release_failure_streak_passive_ms: am().int().min(5e3).max(36e5).optional(),
        resume_gap_threshold_ms: Gm([
            ph(0),
            am().int().min(3e4).max(36e5)
        ]),
        resume_detection_mode: lh([
            "mono_gap",
            "timer_lateness"
        ]).optional(),
        dirty_passive_stalled_threshold_ms: Gm([
            ph(0),
            am().int().min(3e4).max(36e5)
        ]),
        s3_concurrency: am().int().min(1).max(64),
        list_concurrency: am().int().min(1).max(64),
        list_walk_concurrency: am().int().min(1).max(64).optional(),
        hash_concurrency: am().int().min(1).max(64),
        presign_concurrency: am().int().min(1).max(64),
        multipart_upload_threshold_bytes: am().int().min(5242880).max(1073741824),
        multipart_part_size_bytes: am().int().min(5242880).max(536870912),
        multipart_presign_window_size: am().int().min(1).max(32),
        pull_presign_window_size: am().int().min(1).max(1e3),
        multipart_complete_max_attempts: am().int().min(1).max(5),
        multipart_max_restarts: am().int().min(0).max(2),
        multipart_max_conflict_renames: am().int().min(0).max(2),
        multipart_max_expiry_refreshes: am().int().min(0).max(3),
        write_barrier_timeout_ms: am().int().min(0).max(6e4),
        scoped_reserved_slots: am().int().min(0).max(8),
        path_sync_request_poll_ms: am().int().min(0).max(6e4),
        path_sync_request_wait_poll_ms: am().int().min(1).max(6e4),
        exclusive_mutation_claim_poll_ms: am().int().min(50).max(6e4),
        shared_scheduler: fm().optional(),
        periodic_coalesce_ms: am().int().min(250).max(3e4).optional(),
        remote_version_enabled: fm().optional(),
        version_full_list_interval_ms: am().int().min(36e5).max(6048e5).optional(),
        version_audit_sample_rate: am().min(0).max(1).optional(),
        version_probe_enabled: fm().optional(),
        version_probe_max_entries: am().int().min(1).max(100).optional(),
        stale_store_root_max_idle_ms: am().int().min(0),
        store_root_id_fence: fm().optional(),
        index_closed_invalidates_session: fm().optional(),
        store_eviction_mode: lh([
            "legacy_sweep",
            "off",
            "dry_run",
            "quarantine",
            "on"
        ]).optional(),
        store_eviction_quarantine_ms: am().int().min(0).optional(),
        store_eviction_max_roots_per_run: am().int().min(1).optional(),
        store_eviction_max_hash_bytes_per_run: am().int().min(1).optional(),
        store_eviction_mark_ttl_ms: am().int().min(1e3).max(6e5).optional(),
        store_eviction_min_interval_ms: am().int().min(0).optional(),
        tombstone_full_refresh_rounds: am().int().min(1),
        tombstone_full_refresh_interval_ms: am().int().min(0),
        tombstone_prune_slack_ms: am().int().min(0),
        local_stat_fast_path: lh([
            "off",
            "posix",
            "all"
        ]).optional(),
        push_order: lh([
            "scan",
            "size_asc"
        ]).optional(),
        local_stat_fast_path_audit_rate: am().min(0).max(1).optional(),
        local_stat_racy_margin_ms: am().int().min(0).max(6e4).optional(),
        harness_recovery_policy: lh([
            "latch",
            "recover"
        ]).optional(),
        harness_recovery_start_jitter_ms: am().int().min(0).max(3e5).optional(),
        harness_recovery_probe_base_ms: am().int().min(1e3).max(36e5).optional(),
        harness_recovery_probe_max_ms: am().int().min(1e3).max(36e5).optional(),
        harness_remembered_mounts_max: am().int().min(0).max(64).optional(),
        mount_policy: lh([
            "eager",
            "lazy"
        ]).nullable().optional(),
        surfaces: th(lp(), Lm({
            sync_debounce_ms: am().int().min(250).max(36e5).optional(),
            idle_backoff_factor: am().min(1).max(4).optional(),
            sync_idle_max_ms: am().int().min(250).max(36e5).optional(),
            idle_quiesce_ms: am().int().min(0).max(36e5).optional(),
            large_target_ttl_ms: am().int().min(6e4).max(864e5).optional(),
            sync_backoff_base_ms: am().int().min(100).max(36e5).optional(),
            sync_backoff_max_ms: am().int().min(100).max(36e5).optional(),
            project_sync_debounce_ms: am().int().min(250).max(36e5).optional(),
            project_sync_idle_max_ms: am().int().min(250).max(36e5).optional(),
            project_sync_backoff_base_ms: am().int().min(100).max(36e5).optional(),
            project_sync_backoff_max_ms: am().int().min(100).max(36e5).optional(),
            passive_retry_interval_ms: am().int().min(0).max(36e5).optional(),
            passive_index_poll_interval_ms: am().int().min(0).max(36e5).optional(),
            project_store_poll_interval_ms: am().int().min(250).max(36e5).optional(),
            path_refresh_min_interval_ms: am().int().min(0).max(36e5).optional(),
            project_notes_poll_interval_ms: am().int().min(1e3).max(36e5).optional(),
            max_file_size_bytes: am().int().min(1024).max(1073741824).optional(),
            token_refresh_buffer_ms: am().int().min(0).max(6e5).optional(),
            mint_terminal_denial_cache_ms: Gm([
                ph(0),
                am().int().min(6e4).max(864e5)
            ]).optional(),
            skip_denied_mount_sync: Gm([
                ph(0),
                ph(1)
            ]).optional(),
            rpc_retry_max_attempts: am().int().min(1).max(10).optional(),
            rpc_retry_base_delay_ms: am().int().min(1).max(6e4).optional(),
            rpc_retry_max_delay_ms: am().int().min(1).max(3e5).optional(),
            rpc_retry_multiplier: am().min(1).max(10).optional(),
            token_refresh_jitter_ratio: Gm([
                ph(0),
                am().min(.05).max(.9)
            ]).optional(),
            min_token_slack_ms: am().int().min(0).max(6e4).optional(),
            mint_retry_policy_version: Gm([
                ph(0),
                ph(1)
            ]).optional(),
            mint_retry_max_attempts: am().int().min(1).max(5).optional(),
            mint_retry_base_delay_ms: am().int().min(1).max(1e4).optional(),
            mint_retry_max_delay_ms: am().int().min(1).max(6e4).optional(),
            mint_retry_budget_ratio: am().min(0).max(1).optional(),
            mint_retry_budget_floor: am().int().min(0).max(100).optional(),
            mint_transient_negative_cache_base_ms: am().int().min(100).max(6e5).optional(),
            mint_transient_negative_cache_max_ms: am().int().min(100).max(36e5).optional(),
            mint_gate_open_threshold: am().int().min(1).max(1e3).optional(),
            mint_gate_window_ms: am().int().min(1e3).max(6e5).optional(),
            mint_gate_open_base_ms: am().int().min(100).max(6e5).optional(),
            mint_gate_open_max_ms: am().int().min(100).max(36e5).optional(),
            rpc_timeout_ms: am().int().min(1e3).max(6e5).optional(),
            blob_idle_timeout_ms: Gm([
                ph(0),
                am().int().min(1e3).max(6e5)
            ]).optional(),
            blob_connect_timeout_ms: Gm([
                ph(0),
                am().int().min(1e3).max(3e5)
            ]).optional(),
            sync_round_timeout_ms: Gm([
                ph(0),
                am().int().min(3e4).max(36e5)
            ]).optional(),
            sync_round_progress_timeout_ms: Gm([
                ph(0),
                am().int().min(3e4).max(36e5)
            ]).optional(),
            sync_round_hard_cap_ms: Gm([
                ph(0),
                am().int().min(6e4).max(72e5)
            ]).optional(),
            sync_round_unwind_timeout_ms: am().int().min(1e3).max(6e5).optional(),
            lock_release_failure_threshold: am().int().min(1).max(20).optional(),
            lock_release_failure_streak_threshold: am().int().min(0).max(100).optional(),
            lock_release_failure_streak_passive_ms: am().int().min(5e3).max(36e5).optional(),
            resume_gap_threshold_ms: Gm([
                ph(0),
                am().int().min(3e4).max(36e5)
            ]).optional(),
            resume_detection_mode: lh([
                "mono_gap",
                "timer_lateness"
            ]).optional(),
            dirty_passive_stalled_threshold_ms: Gm([
                ph(0),
                am().int().min(3e4).max(36e5)
            ]).optional(),
            s3_concurrency: am().int().min(1).max(64).optional(),
            list_concurrency: am().int().min(1).max(64).optional(),
            list_walk_concurrency: am().int().min(1).max(64).optional(),
            hash_concurrency: am().int().min(1).max(64).optional(),
            presign_concurrency: am().int().min(1).max(64).optional(),
            multipart_upload_threshold_bytes: am().int().min(5242880).max(1073741824).optional(),
            multipart_part_size_bytes: am().int().min(5242880).max(536870912).optional(),
            multipart_presign_window_size: am().int().min(1).max(32).optional(),
            pull_presign_window_size: am().int().min(1).max(1e3).optional(),
            multipart_complete_max_attempts: am().int().min(1).max(5).optional(),
            multipart_max_restarts: am().int().min(0).max(2).optional(),
            multipart_max_conflict_renames: am().int().min(0).max(2).optional(),
            multipart_max_expiry_refreshes: am().int().min(0).max(3).optional(),
            write_barrier_timeout_ms: am().int().min(0).max(6e4).optional(),
            scoped_reserved_slots: am().int().min(0).max(8).optional(),
            path_sync_request_poll_ms: am().int().min(0).max(6e4).optional(),
            path_sync_request_wait_poll_ms: am().int().min(1).max(6e4).optional(),
            exclusive_mutation_claim_poll_ms: am().int().min(50).max(6e4).optional(),
            shared_scheduler: fm().optional(),
            periodic_coalesce_ms: am().int().min(250).max(3e4).optional(),
            remote_version_enabled: fm().optional(),
            version_full_list_interval_ms: am().int().min(36e5).max(6048e5).optional(),
            version_audit_sample_rate: am().min(0).max(1).optional(),
            version_probe_enabled: fm().optional(),
            version_probe_max_entries: am().int().min(1).max(100).optional(),
            stale_store_root_max_idle_ms: am().int().min(0).optional(),
            store_root_id_fence: fm().optional(),
            index_closed_invalidates_session: fm().optional(),
            store_eviction_mode: lh([
                "legacy_sweep",
                "off",
                "dry_run",
                "quarantine",
                "on"
            ]).optional(),
            store_eviction_quarantine_ms: am().int().min(0).optional(),
            store_eviction_max_roots_per_run: am().int().min(1).optional(),
            store_eviction_max_hash_bytes_per_run: am().int().min(1).optional(),
            store_eviction_mark_ttl_ms: am().int().min(1e3).max(6e5).optional(),
            store_eviction_min_interval_ms: am().int().min(0).optional(),
            tombstone_full_refresh_rounds: am().int().min(1).optional(),
            tombstone_full_refresh_interval_ms: am().int().min(0).optional(),
            tombstone_prune_slack_ms: am().int().min(0).optional(),
            local_stat_fast_path: lh([
                "off",
                "posix",
                "all"
            ]).optional(),
            push_order: lh([
                "scan",
                "size_asc"
            ]).optional(),
            local_stat_fast_path_audit_rate: am().min(0).max(1).optional(),
            local_stat_racy_margin_ms: am().int().min(0).max(6e4).optional(),
            harness_recovery_policy: lh([
                "latch",
                "recover"
            ]).optional(),
            harness_recovery_start_jitter_ms: am().int().min(0).max(3e5).optional(),
            harness_recovery_probe_base_ms: am().int().min(1e3).max(36e5).optional(),
            harness_recovery_probe_max_ms: am().int().min(1e3).max(36e5).optional(),
            harness_remembered_mounts_max: am().int().min(0).max(64).optional(),
            mount_policy: lh([
                "eager",
                "lazy"
            ]).nullable().optional()
        }).strict()).default({})
    }).strict(), Lm({
        mint_refresh_slack_ms: am().int().min(0).max(6e5),
        mint_failure_base_ms: am().int().min(100).max(6e4),
        mint_failure_max_ms: am().int().min(1e3).max(6e5),
        mint_failure_jitter: am().min(0).max(.5),
        mint_cache_max_conversations: am().int().min(16).max(4096)
    }), Lm({
        maxBytes: am().int().positive(),
        inlineMaxBytes: am().int().positive(),
        signedUrlMaxBytes: am().int().positive(),
        cloudMaxVideoAttachmentsPerRequest: am().int().nonnegative(),
        cloudMaxDocumentAttachmentsPerRequest: am().int().nonnegative(),
        localMaxVideoAttachmentsPerRequest: am().int().positive(),
        localMaxTotalInlineVideoBytesPerRequest: am().int().positive()
    }), Lm({
        limit: am()
    }), Lm({
        modelSlug: lp(),
        modelIdWithParams: Lm({
            modelId: lp(),
            params: Nm(Lm({
                id: lp(),
                value: lp()
            }))
        })
    }), Lm({
        proceed_instructions: lp(),
        mark_fixed_instructions: lp()
    }), Lm({
        maxChatsToRead: am(),
        maxProjectsToGroup: am(),
        model: lp(),
        promptTemplate: lp(),
        secondStepPromptTemplate: lp()
    }), Lm({
        defaultUrl: lp()
    }), Lm({
        agentTabSelectionTTL: am()
    }), Lm({
        showDraftsInSidebar: fm()
    }), Lm({
        pillLabel: lp().min(1).max(80),
        tooltip: lp().min(1).max(240),
        dropdownAriaLabel: lp().min(1).max(120),
        cloudOptionLabel: lp().min(1).max(80),
        localOptionLabel: lp().min(1).max(80),
        fixCiPillSingleLabel: lp().min(1).max(80),
        fixCiPillPluralLabelTemplate: lp().min(1).max(120),
        fixCiPillLoadingLabel: lp().min(1).max(80),
        fixCiPillLoadingProgressLabel: lp().min(1).max(80),
        fsdFixCiPillSingleLabel: lp().min(1).max(80),
        fsdFixCiPillPluralLabelTemplate: lp().min(1).max(120),
        fsdFixCiPillLoadingLabel: lp().min(1).max(80),
        fsdFixCiPillLoadingProgressLabel: lp().min(1).max(80)
    }), Lm({
        title: lp().min(1).max(120),
        description: lp().min(1).max(240),
        downloadCtaLabel: lp().min(1).max(40),
        downloadUrl: lp().url(),
        openCtaLabel: lp().min(1).max(40),
        openUrl: lp().min(1).max(2048)
    }), Lm({
        promptTemplate: lp()
    }), Lm({
        max_loaded_agents: am().int().min(2).max(10)
    }), Lm({
        enabled: fm(),
        keep_recent_hidden: am().int().min(0)
    }), Lm({
        code_gate_bytes: am().int().min(153600).max(52428800)
    }), Lm({
        enabled: fm(),
        sweep_interval_ms: am().int().positive(),
        retained_after_close_threshold_ms: am().int().positive()
    }), Lm({
        prChecksPollIntervalMs: am().int().positive(),
        prChecksPollMaxBackoffMs: am().int().positive(),
        prChecksErrorBackoffMultiplier: am().min(1).max(4),
        prChecksCacheTtlSeconds: am().int().positive(),
        scmPrMetadataCacheTtlSeconds: am().int().positive(),
        scmPrDetailedStatusCacheTtlSeconds: am().int().positive(),
        scmPrForBranchCacheTtlWhenPrsSeconds: am().int().positive(),
        scmPrForBranchCacheTtlWhenEmptySeconds: am().int().positive(),
        scmPrCodeownersCacheTtlSeconds: am().int().positive(),
        scmPrCommitsCacheTtlSeconds: am().int().positive(),
        scmPrTimelineEventsCacheTtlSeconds: am().int().positive(),
        scmPrDiscussionsCacheTtlSeconds: am().int().positive(),
        scmPrCheckLogExcerptOkTtlSeconds: am().int().positive(),
        scmPrCheckLogExcerptNegativeTtlSeconds: am().int().positive(),
        detailedPrStatusChecksScopedAuthBreakerTtlSeconds: am().int().positive(),
        scmGitlabEmojiReactionCacheTtlSeconds: am().int().positive(),
        localAgentPrHeaderBatchPollIntervalMs: am().int().positive(),
        localAgentPrStatePollIntervalMs: am().int().positive(),
        localAgentPrBurstBumpOffsetsMs: Nm(am().int().nonnegative()),
        cloudAgentPrStatePollIntervalMs: am().int().positive(),
        cloudAgentPrBurstBumpOffsetsMs: Nm(am().int().nonnegative()),
        cloudAgentPrStatePollMaxBackoffMs: am().int().positive(),
        cloudAgentPrErrorBackoffMultiplier: am().min(1).max(4)
    }), Lm({
        enabled: fm(),
        rehydrateAfterMs: am().int().nonnegative()
    }), Lm({
        maxTurns: am().int().positive().nullish()
    }), Lm({
        readFilesToolMaxFileSizeInBytes: am(),
        editFileToolMaxFileSizeInChars: am(),
        fileSearchToolMaxResults: am(),
        listDirV2ClientSideCharacterBudget: am(),
        readFileV2ToolMaxFileSizeInBytes: am(),
        composerDiffMaxComputationTimeMs: am()
    }), Lm({
        min_hours_between_prompts: am(),
        max_prompts_per_version: am(),
        max_prompts_per_day: am(),
        snooze_duration_hours: am()
    }), Lm({
        releaseTrack: lp(),
        statsigUrl: lp(),
        unlockInternalTracks: fm()
    }), Lm({
        releaseTrack: lp(),
        unlockInternalTracks: fm()
    }), Lm({
        policy: lh([
            "all",
            "team_only",
            "none"
        ])
    }), Lm({
        enabled: fm(),
        include_credits: fm()
    }), Lm({
        channel: lp(),
        watchIntervalMs: am().min(6e5).max(6048e5).nullable()
    }), Lm({
        sentry_threshold_bytes: am(),
        attach_content: fm()
    }), Lm({
        allocation_threshold_bytes: am(),
        blob_url_threshold_bytes: am(),
        retention_age_ms: am(),
        sweep_interval_ms: am()
    }), Lm({
        sentry_threshold_bytes: am()
    }), Lm({
        sentry_threshold_bytes: am()
    }), Lm({
        metadata_timeout_ms: am(),
        lifecycle_timeout_ms: am(),
        dashboard_timeout_ms: am(),
        recovery_per_retry_timeout_ms: am()
    }), Lm({
        replays_session_sample_rate: am().min(0).max(1)
    }), Lm({
        extensionIds: Nm(lp()),
        remoteVerificationMinVersion: lp()
    }), Lm({
        autoTitle: lp(),
        autoDescription: lp(),
        apiTitle: lp(),
        apiDescription: lp(),
        autoBeyondLimitDescription: lp(),
        autoUsageBarLabel: lp(),
        apiUsageBarLabel: lp()
    }), Lm({
        enabled: fm(),
        tagLabel: lp(),
        yellowTooltip: lp(),
        redTooltip: lp(),
        yellowTitle: lp(),
        redTitle: lp(),
        noteSubtitle: lp(),
        notePlaceholder: lp()
    }), Lm({
        enabled: fm(),
        title: lp(),
        description: lp()
    }), Lm({
        flush_delay_ms: am().int().positive()
    }), Lm({
        window_ms: am().int().positive(),
        min_events: am().int().positive(),
        report_throttle_ms: am().int().positive(),
        top_buckets: am().int().positive()
    }), Lm({
        enabled_platforms: Nm(lp()),
        safety_poll_interval_ms: am().int().positive(),
        inactivity_timeout_ms: am().int().positive(),
        max_consecutive_failures: am().int().positive(),
        reconnect_base_delay_ms: am().int().positive(),
        reconnect_max_delay_ms: am().int().positive(),
        reconcile_delay_ms: am().int().positive(),
        use_list_page_tokens: fm(),
        split_project_list: fm(),
        exclude_archived_default: fm(),
        projects_only_owner_lookup: fm(),
        projects_only_owner_lookup_max_projects: am().int().nonnegative(),
        membership_poll_interval_ms: am().int().nonnegative(),
        membership_safety_poll_interval_ms: am().int().nonnegative()
    }), Lm({
        dummy: am()
    }), Lm({
        heap_percent: am()
    }), Lm({
        total_cpu_percent: am(),
        process_cpu_percent: am(),
        sustained_seconds: am(),
        check_interval_seconds: am(),
        cooldown_seconds: am(),
        include_system_processes: fm()
    }), Lm({
        trigger_heap_percent: am(),
        duration_seconds: am(),
        sampling_interval_bytes: am(),
        cooldown_seconds: am()
    }), Lm({
        enabled: fm(),
        metrics_interval_seconds: am().positive(),
        sample_interval_minutes: am().positive()
    }), Lm({
        base_threshold_mb: am().positive(),
        critical_offset_mb: am().positive(),
        show_status_entry: fm(),
        show_internal_warning_popup: fm(),
        show_user_toast: fm(),
        user_toast_heap_percent: am().min(1).max(100),
        emit_heap_usage_metric: fm(),
        emergency_profiling_enabled: fm(),
        emergency_profiling_trigger_heap_percent: am().min(1).max(100),
        emergency_profiling_duration_seconds: am().positive(),
        emergency_profiling_sampling_interval_bytes: am().positive(),
        emergency_profiling_cooldown_seconds: am().positive()
    }), Lm({
        clientId: lp()
    }), Lm({
        clientId: lp()
    }), Lm({
        byJobRole: th(lp().max(100), Nm(Lm({
            pluginName: lp().min(1).max(100),
            title: lp().min(1),
            description: lp().min(1),
            prompt: lp().min(1).max(9979)
        }))),
        recommendedPluginNamesByJobRole: th(lp().max(100), Nm(lp().min(1).max(100)).max(4))
    }), Lm({
        enabled: fm(),
        reportIntervalMs: am()
    }), Lm({
        enabled: fm(),
        sessionSampleRate: am().min(0).max(1)
    }), Lm({
        enabled: fm(),
        sampleRate: am(),
        maxEventsPerFlush: am(),
        reportIntervalMs: am(),
        deepProbe: fm(),
        deepProbeSampleRate: am(),
        deepProbeMaxBytes: am(),
        stackAttribution: fm(),
        stackCreationSampleRate: am(),
        stackRedundantThreshold: am(),
        maxTrackedCreationStacks: am(),
        maxStackReportsPerSession: am(),
        maxStackBytes: am()
    }), Lm({
        enabled: fm(),
        sampleRate: am(),
        observerThreshold: am(),
        maxTrackedSources: am(),
        maxReportsPerSession: am(),
        maxStackBytes: am(),
        totalObserverThreshold: am(),
        totalTriggeredSourceFloor: am(),
        totalTriggeredMaxReports: am()
    }), Lm({
        skillDescription: lp(),
        errorFixPromptTemplate: lp(),
        welcomePageEnabled: fm(),
        marketplaceCategoryKey: lp(),
        marketplaceMaxCards: am().int().positive()
    }), Lm({
        byJobRole: yf
    }).strict(), Lm({
        per_joiner_warn_ms: am().int().nonnegative(),
        fire_on_will_shutdown_total_ms: am().int().nonnegative(),
        process_exit_total_ms: am().int().nonnegative()
    }), Lm({
        enabled: fm(),
        restart_time_threshold_seconds: am().nonnegative(),
        attach_ship_it_log: fm(),
        max_attachment_bytes: am().int().nonnegative()
    }), Lm({
        enabled: fm(),
        timer_name: lh([
            "ellapsedLoadMainBundle",
            "ellapsedRunMainBundle",
            "ellapsedAppReady",
            "ellapsedExtensions",
            "ellapsedExtensionsReady",
            "ellapsedWindowLoad",
            "ellapsedRequire",
            "ellapsedEditorRestore",
            "ellapsedWorkbench",
            "ellapsedPreWorkbenchServices"
        ]),
        threshold_ms: am().nonnegative()
    }), Lm({
        enabled: fm(),
        ping_interval_ms: am().int().positive(),
        block_threshold_ms: am().int().positive(),
        collect_stack_traces: fm(),
        report_rpc_drain: fm().optional()
    }), Lm({
        enabled: fm(),
        flush_threshold_ms: am().int().positive(),
        anchor_interval_ms: am().int().positive(),
        anchor_lag_ms: am().int().positive(),
        cooldown_ms: am().int().positive(),
        session_cap: am().int().positive()
    }), Lm({
        enabled: fm(),
        sample_rate: am().min(0).max(1),
        window_duration_ms: am().int().positive()
    }), Lm({
        enabled: fm(),
        sample_rate: am().min(0).max(1),
        time_limit_ms: am().int().positive().optional()
    }), Lm({
        window_ms: am().int().positive(),
        threshold: am().int().positive(),
        max_records: am().int().positive(),
        cooldown_ms: am().int().nonnegative(),
        report_to_sentry: fm(),
        report_initialize_caches: fm()
    }), Lm({
        window_ms: am().int().positive(),
        min_samples: am().int().positive(),
        fallback_ratio_threshold: am().min(0).max(1),
        cooldown_ms: am().int().nonnegative(),
        report_to_sentry: fm()
    }), Lm({
        max_in_memory_documents: am().int().positive().nullish()
    }), Lm({
        enabled: fm(),
        max_reply_bytes: am().int().positive()
    }), Lm({
        enabled: fm(),
        threshold_ms: am().int().positive(),
        commit_attribution: fm().nullish()
    }), Lm({
        enabled: fm(),
        min_fps: am().int().positive(),
        max_drops_per_interval: am().int().nonnegative(),
        interval_sec: am().int().positive(),
        baseline_interval_sec: am().int().positive().nullish(),
        baseline_sample_rate: am().min(0).max(1).nullish()
    }), Lm({
        mode: lh([
            "off",
            "signup_link",
            "create_and_link"
        ])
    }), $m({
        sidecarManifestUrl: Gm([
            ph(""),
            lp().regex(/^https:\/\/downloads\.cursor\.com\/computer-use-sidecar\/releases\/[A-Za-z0-9][A-Za-z0-9._-]*\/[A-Za-z0-9][A-Za-z0-9._-]*\/[0-9a-f]{40}\.json$/)
        ])
    }), $m({
        x64: Gm([
            ph(""),
            lp().regex(/^https:\/\/downloads\.cursor\.com\/computer-use-sidecar\/releases\/[A-Za-z0-9][A-Za-z0-9._-]*\/[A-Za-z0-9][A-Za-z0-9._-]*\/[0-9a-f]{40}-win32-x64\.json$/)
        ]),
        arm64: Gm([
            ph(""),
            lp().regex(/^https:\/\/downloads\.cursor\.com\/computer-use-sidecar\/releases\/[A-Za-z0-9][A-Za-z0-9._-]*\/[A-Za-z0-9][A-Za-z0-9._-]*\/[0-9a-f]{40}-win32-arm64\.json$/)
        ])
    }), $m({
        darwin: Gm([
            lp(),
            $m({
                companion: lp(),
                remote: lp()
            })
        ]),
        win32: lp()
    }), Lm({
        enrolled: fm(),
        enableUI: fm(),
        orgs: Nm(lp()).min(1)
    }), {
        cursor_private_inference_hard_stop: {
            client: !0,
            fallbackValues: {
                enabled: !1,
                instructionsUrl: null
            }
        },
        mobile_iap_products: {
            client: !0,
            fallbackValues: {
                products: {
                    "co.anysphere.cursor.pro.monthly": "pro",
                    "co.anysphere.cursor.proplus.monthly": "pro_plus",
                    "co.anysphere.cursor.ultra.monthly": "ultra",
                    "co.anysphere.sand.pro.monthly": "pro",
                    "co.anysphere.sand.proplus.monthly": "pro_plus",
                    "co.anysphere.sand.ultra.monthly": "ultra"
                }
            }
        },
        codebase_protection_reporting_config: {
            client: !0,
            fallbackValues: {
                report_interval_ms: 18e5,
                jitter_fraction: .2
            }
        },
        agent_host_bridge_wait: {
            client: !0,
            fallbackValues: {
                initial_timeout_ms: 3e4,
                retry_timeout_ms: 5e3,
                max_attempts: 9
            }
        },
        agent_host_updater_timing: {
            client: !0,
            fallbackValues: {
                pollIntervalMs: null,
                requestIdleTimeoutMs: null
            }
        },
        composer_request_context_deadline: {
            client: !0,
            fallbackValues: {
                deadline_ms: 1500,
                max_stale_age_ms: 6e5
            }
        },
        sand_working_state_warming_config: {
            client: !0,
            fallbackValues: {
                maxClosureBytes: 1073741824,
                maxClosureBlobs: 5e4,
                putConcurrency: 16,
                parallelListing: !1,
                migrationAgentConcurrency: 8,
                migrationReadBatchBlobs: 32,
                migrationPutConcurrency: 8,
                migrationCopyConcurrency: 8,
                migrationExportCommandTimeoutMs: 15e4,
                migrationHostWindowMs: 6e5,
                migrationExportActivityTimeoutMs: 9e5
            }
        },
        grok_bot_temporal_harness_rollout: {
            client: !0,
            fallbackValues: {
                control: "legacy_gates",
                mode: "shadow",
                autoReviewEnforce: !1
            }
        },
        grok_bot_loop_detection: {
            client: !0,
            fallbackValues: {
                mode: "off"
            }
        },
        grok_bot_external_send_labeling_config: {
            client: !0,
            fallbackValues: {
                sampleRate: 0,
                connectors: [
                    {
                        name: "slack",
                        hosts: [
                            "mcp.slack.com"
                        ],
                        sendTools: [
                            "slack_send_message",
                            "slack_schedule_message"
                        ]
                    },
                    {
                        name: "gmail",
                        hosts: [
                            "gmailmcp.googleapis.com",
                            "api.cursor.com"
                        ],
                        sendTools: [
                            "send_message",
                            "reply",
                            "forward",
                            "send_email",
                            "send_draft"
                        ]
                    },
                    {
                        name: "outlook",
                        hosts: [
                            "api.cursor.com/rest-mcp/outlook"
                        ],
                        sendTools: [
                            "send_mail",
                            "reply_to_mail_message",
                            "forward_mail_message",
                            "send_draft"
                        ]
                    },
                    {
                        name: "google_calendar",
                        hosts: [
                            "calendarmcp.googleapis.com",
                            "api.cursor.com"
                        ],
                        sendTools: [
                            "create_event",
                            "update_event"
                        ],
                        participants: {
                            args: [
                                "attendees",
                                "attendeeEmails",
                                "addedAttendees",
                                "addedAttendeeEmails",
                                "addAttendees"
                            ],
                            ownerArgs: [
                                "calendarId"
                            ]
                        }
                    },
                    {
                        name: "outlook_calendar",
                        hosts: [
                            "api.cursor.com"
                        ],
                        sendTools: [
                            "create_calendar_event",
                            "update_calendar_event"
                        ],
                        participants: {
                            args: [
                                "attendees"
                            ]
                        }
                    },
                    {
                        name: "google_drive_share",
                        hosts: [
                            "drivemcp.googleapis.com",
                            "api.cursor.com"
                        ],
                        sendTools: [
                            "share_file",
                            "google_drive_share_file"
                        ]
                    },
                    {
                        name: "teams",
                        hosts: [
                            "api.cursor.com"
                        ],
                        sendTools: [
                            "send_chat_message",
                            "send_channel_message",
                            "reply_to_channel_message"
                        ]
                    }
                ],
                firstPartySendTools: [
                    {
                        name: "phone_call",
                        toolName: "place_phone_call"
                    },
                    {
                        name: "imessage",
                        toolName: "SendIMessage"
                    }
                ]
            }
        },
        grok_bot_system_prompt_override: {
            client: !0,
            fallbackValues: {
                basePrompt: ""
            }
        },
        remote_workspace_readiness_config: {
            client: !0,
            fallbackValues: {
                healthcheck_timeout_ms: 3e3,
                remote_extension_host_startup_grace_ms: 3e3
            }
        },
        ai_code_tracking_poll: {
            client: !0,
            fallbackValues: {
                interval_ms: 6e5
            }
        },
        solidjs_stack_trace_limit: {
            client: !0,
            fallbackValues: {
                stackTraceLimitFloor: 0
            }
        },
        glass_remote_connection_dormancy_config: {
            client: !0,
            fallbackValues: {
                windowIdleMinutesToSuspend: 20,
                hiddenAgentMinutesToSuspend: 0,
                suspendWhileWindowFocused: !1,
                maxDormantQueuedMessages: 1e3,
                maxDormantQueuedBytes: 4194304,
                hardMaxDormantQueuedMessages: 2e4,
                hardMaxDormantQueuedBytes: 67108864
            }
        },
        idle_extension_host_killer_config: {
            client: !0,
            fallbackValues: {
                idleMinutesToKillExtensionHost: 0,
                freeMemoryPercentageToKillExtensionHost: 0,
                killUserExtensionHost: !1
            }
        },
        marketplace_listing_config: {
            client: !0,
            fallbackValues: {
                rpcTimeoutMs: 15e3
            }
        },
        editor_bugbot_config: {
            client: !0,
            fallbackValues: {
                model: "claude-4-5-sonnet-20250929",
                iterations: 0,
                agentic_iterations: 1,
                agentic_model: "claude-4.5-haiku",
                deep_review_model: "",
                context_lines: 10
            }
        },
        client_speculative_summarization_config: {
            client: !0,
            fallbackValues: {
                tokenUsageThresholdPercentage: 70,
                tolerancePercentage: 5,
                inflightMaxAgeMinutes: 5,
                speculativeStreamTimeoutMinutes: 5
            }
        },
        rate_limited_reconnect_message_config: {
            client: !0,
            fallbackValues: {
                message: "Rate limited by model provider, retrying…"
            }
        },
        new_conversation_ux_config: {
            client: !0,
            fallbackValues: {
                enable: !0,
                enabled_models: [],
                force_enable_on_all_models: !0,
                group_text: !0,
                group_thinking: !0,
                group_todos: !0,
                group_edits: !1,
                smooth_stream_enable: !1,
                grouped_text_max_length: 100,
                grouped_text_max_length_composer_family: 88,
                tool_summary_mode: "single_word",
                nest_tool_blocks: !1
            }
        },
        meta_agent_config: {
            client: !0,
            fallbackValues: {
                meta_parent_model: "claude-4.6-opus-high-fast",
                allow_subagent_followups: !0,
                enable_notes: !1
            }
        },
        task_card_tips: {
            client: !0,
            fallbackValues: {
                startup_tips: [
                    {
                        id: "cloud-subagents",
                        text: "Use /in-cloud for cloud subagents"
                    }
                ]
            }
        },
        product_tips_config: {
            client: !0,
            fallbackValues: {
                tips: [],
                config: {
                    intervalMs: 8e3,
                    minClientVersion: ""
                }
            }
        },
        composer_sandboxing_promo: {
            client: !0,
            fallbackValues: {
                version: 0
            }
        },
        playwright_log_configs: {
            client: !0,
            fallbackValues: {
                logSizeThreshold: 25e3,
                logPreviewLines: 25,
                logPreviewChars: 25e3
            }
        },
        privacy_mode_acknowledgement_onboarding: {
            client: !0,
            fallbackValues: {
                mode: "on"
            }
        },
        tools_concurrency_config: {
            client: !0,
            fallbackValues: {
                tools: {
                    RIPGREP_RAW_SEARCH: {
                        ttl: 1e4,
                        maxConcurrent: 5
                    },
                    RIPGREP_SEARCH: {
                        ttl: 1e4,
                        maxConcurrent: 5
                    }
                },
                defaultTtl: 1e4,
                defaultMaxConcurrent: 999999
            }
        },
        client_rg: {
            client: !0,
            fallbackValues: {
                num_threads: 4,
                fallback_num_threads: 4,
                use_batch_executor: !1,
                batch_executor_wait_ms: 50
            }
        },
        http2_ping_config: {
            client: !0,
            fallbackValues: {
                enabled: [],
                pingIdleConnection: null,
                pingIntervalMs: null,
                pingTimeoutMs: null,
                idleConnectionTimeoutMs: null
            }
        },
        http2_agent_connection_pool_config: {
            client: !0,
            fallbackValues: {
                poolSize: 4
            }
        },
        http1_keepalive_config: {
            client: !0,
            fallbackValues: {
                keepAliveInitialDelayMs: null
            }
        },
        nal_websocket_client_pool: {
            client: !0,
            fallbackValues: {
                maxConnections: 1
            }
        },
        ws_dark_durability_probe_config: {
            client: !0,
            fallbackValues: {
                idleHoldMs: 3e4,
                echoTimeoutMs: 5e3,
                concurrency: 4
            }
        },
        abort_controller_logging_config: {
            client: !0,
            fallbackValues: {
                sampling_rate: 1
            }
        },
        hooks_client_config: {
            client: !0,
            fallbackValues: {
                hooks_ready_timeout_ms: 2e3
            }
        },
        composer_hang_detection_config: {
            client: !0,
            fallbackValues: {
                thresholds_ms: [
                    2e3,
                    4e3,
                    6e3,
                    8e3,
                    1e4,
                    12e3,
                    14e3,
                    16e3,
                    32e3
                ]
            }
        },
        composer_errors_without_button_support: {
            client: !0,
            fallbackValues: {
                error_type_denylist: []
            }
        },
        nal_stall_detector_timeout_config: {
            client: !0,
            fallbackValues: {
                advisoryTimeoutMs: 2e4,
                failTimeoutMs: 3e4
            }
        },
        nal_request_context_blob_transport_config: {
            client: !0,
            fallbackValues: {
                mode: "legacy",
                max_blob_bytes: 15728640,
                max_inline_dynamic_bytes: 1048576
            }
        },
        simulated_thinking_error_timeout: {
            client: !0,
            fallbackValues: {
                timeout_ms: 15e3
            }
        },
        agent_loop_phase_display: {
            client: !0,
            fallbackValues: {
                enabled: !1,
                min_display_threshold_ms: 0
            }
        },
        in_app_ads_dev_override_config: {
            client: !0,
            fallbackValues: {
                ad_id_to_show: ""
            }
        },
        in_app_ads_quiet_period_config: {
            client: !0,
            fallbackValues: {
                quiet_period_ms: 6e5,
                first_launch_quiet_period_ms: 864e5
            }
        },
        environment_setup_resume_config: {
            client: !0,
            fallbackValues: {
                max_resume_age_ms: _o.Er
            }
        },
        perf_monitor_control: {
            client: !0,
            fallbackValues: {
                enabled: !1,
                subsample_polling_rate_sec: 0,
                sample_polling_rate_min: 0
            }
        },
        glass_reactivated_user_routing_config: {
            client: !0,
            fallbackValues: {
                user_routing_enabled: !1,
                inactive_days: 7,
                ch_timeout_ms: 500,
                ch_cache_ttl_seconds: 86400,
                local_routing_enabled: !0
            }
        },
        retry_interceptor_config: {
            client: !0,
            fallbackValues: {
                retriableErrors: [
                    {
                        code: "Unavailable"
                    },
                    {
                        code: "Internal"
                    },
                    {
                        code: "DeadlineExceeded"
                    }
                ]
            }
        },
        retry_interceptor_params_config: {
            client: !0,
            fallbackValues: {
                maxRetries: null,
                baseDelayMs: null,
                maxDelayMs: null
            }
        },
        text_delta_pacing_config: {
            client: !0,
            fallbackValues: {
                targetCharsPerFrame: 0,
                maxLagFrames: 8,
                barrierMaxWaitMs: 0
            }
        },
        extension_monitor_control: {
            client: !0,
            fallbackValues: {
                local_enabled: !1,
                backend_reporting_enabled: !1,
                network_diagnostics_reporting_enabled: !1,
                subsample_polling_rate_sec: 0,
                sample_polling_rate_min: 0
            }
        },
        agent_memory_pressure_monitor: {
            client: !0,
            fallbackValues: {
                monitor_enabled: !1,
                low_memory_sustained_sec: 30,
                min_agent_process_age_sec: 0,
                low_memory_available_pct: 10,
                low_memory_available_abs_gb: 3,
                cpu_high_pct: 90,
                cpu_high_sustained_sec: 30,
                min_reported_cpu_pct: 5
            }
        },
        sand_process_metrics: {
            client: !0,
            fallbackValues: {
                local_enabled: !1,
                backend_reporting_enabled: !1,
                subsample_polling_rate_sec: 0,
                sample_polling_rate_min: 0
            }
        },
        sand_rpc_tracing: {
            client: !0,
            fallbackValues: {
                enabled: !1,
                sample_ratio: .01
            }
        },
        gc_trace_control: {
            client: !0,
            fallbackValues: {
                enabled: !1,
                drain_interval_sec: 120
            }
        },
        disable_infinite_cloud_agent_stream_retries: {
            client: !0,
            fallbackValues: {
                enabled: !1
            }
        },
        cloud_agent_shared_blob_cache: {
            client: !0,
            fallbackValues: {
                max_bytes: 134217728
            }
        },
        local_subagent_limits: {
            client: !0,
            fallbackValues: {
                maxRunning: 32
            }
        },
        sand_min_client_version: {
            client: !0,
            fallbackValues: {
                min_version: "",
                backend_min_version: "",
                novnc_port_token_min_version: "",
                hosted_mcp_oauth_callback_min_version: "",
                max_age_days: 14
            }
        },
        sand_mobile_version_support: {
            client: !0,
            fallbackValues: {
                min_recommended_build: 0,
                min_allowed_build: 0,
                update_url: ""
            }
        },
        sand_computer_use_playwright_config: {
            client: !0,
            fallbackValues: {
                modelId: "sand-cua",
                maxMode: !1,
                parameters: []
            }
        },
        grok_bot_conversation_size_limits: {
            client: !0,
            fallbackValues: {
                soft_limit_mb: 256,
                hard_limit_mb: 1024
            }
        },
        sand_share_bot_export_policy: {
            client: !0,
            fallbackValues: {
                policy: "team_only"
            }
        },
        sand_usage_breakdown: {
            client: !0,
            fallbackValues: {
                enabled: !1,
                include_credits: !1
            }
        },
        sand_default_model: {
            client: !0,
            fallbackValues: {
                modelId: "default",
                maxMode: !1,
                parameters: []
            }
        },
        sand_automations_model: {
            client: !0,
            fallbackValues: {
                modelId: "default",
                maxMode: !1,
                parameters: []
            }
        },
        sand_feedback_prompt_config: {
            client: !0,
            fallbackValues: {
                enabled: !1,
                sample_rate_denominator: 100,
                cooldown_seconds: 172800,
                signup_grace_seconds: 7200
            }
        },
        agent_store_sync_client_config: {
            client: !0,
            fallbackValues: {
                sync_debounce_ms: 5e3,
                idle_backoff_factor: 1,
                sync_idle_max_ms: 5e3,
                idle_quiesce_ms: 0,
                large_target_ttl_ms: 18e5,
                sync_backoff_base_ms: 5e3,
                sync_backoff_max_ms: 6e4,
                project_sync_debounce_ms: 5e3,
                project_sync_idle_max_ms: 5e3,
                project_sync_backoff_base_ms: 5e3,
                project_sync_backoff_max_ms: 6e4,
                passive_retry_interval_ms: 5e3,
                passive_index_poll_interval_ms: 2e3,
                project_store_poll_interval_ms: 4e3,
                path_refresh_min_interval_ms: 1e3,
                project_notes_poll_interval_ms: 5e3,
                max_file_size_bytes: Ao.EO,
                token_refresh_buffer_ms: 6e4,
                mint_terminal_denial_cache_ms: 18e5,
                skip_denied_mount_sync: 0,
                rpc_retry_max_attempts: 3,
                rpc_retry_base_delay_ms: 250,
                rpc_retry_max_delay_ms: 5e3,
                rpc_retry_multiplier: 2,
                token_refresh_jitter_ratio: .5,
                min_token_slack_ms: 5e3,
                mint_retry_policy_version: 1,
                mint_retry_max_attempts: 2,
                mint_retry_base_delay_ms: 250,
                mint_retry_max_delay_ms: 2e3,
                mint_retry_budget_ratio: .1,
                mint_retry_budget_floor: 3,
                mint_transient_negative_cache_base_ms: 5e3,
                mint_transient_negative_cache_max_ms: 12e4,
                mint_gate_open_threshold: 5,
                mint_gate_window_ms: 3e4,
                mint_gate_open_base_ms: 5e3,
                mint_gate_open_max_ms: 12e4,
                rpc_timeout_ms: 6e4,
                blob_idle_timeout_ms: 6e4,
                blob_connect_timeout_ms: 0,
                sync_round_timeout_ms: 3e5,
                sync_round_progress_timeout_ms: 0,
                sync_round_hard_cap_ms: 0,
                sync_round_unwind_timeout_ms: 3e4,
                lock_release_failure_threshold: 3,
                lock_release_failure_streak_threshold: 0,
                lock_release_failure_streak_passive_ms: 3e5,
                resume_gap_threshold_ms: 12e4,
                resume_detection_mode: "mono_gap",
                dirty_passive_stalled_threshold_ms: 12e4,
                s3_concurrency: 8,
                list_concurrency: 4,
                list_walk_concurrency: 4,
                hash_concurrency: 4,
                presign_concurrency: 4,
                multipart_upload_threshold_bytes: 67108864,
                multipart_part_size_bytes: 16777216,
                multipart_presign_window_size: 8,
                pull_presign_window_size: 500,
                multipart_complete_max_attempts: 3,
                multipart_max_restarts: 1,
                multipart_max_conflict_renames: 1,
                multipart_max_expiry_refreshes: 1,
                write_barrier_timeout_ms: 2e3,
                scoped_reserved_slots: 1,
                path_sync_request_poll_ms: 250,
                path_sync_request_wait_poll_ms: 50,
                exclusive_mutation_claim_poll_ms: 250,
                shared_scheduler: !1,
                periodic_coalesce_ms: 2e3,
                remote_version_enabled: !1,
                version_full_list_interval_ms: 864e5,
                version_audit_sample_rate: 0,
                version_probe_enabled: !1,
                version_probe_max_entries: 50,
                stale_store_root_max_idle_ms: 6048e5,
                store_root_id_fence: !1,
                index_closed_invalidates_session: !1,
                store_eviction_mode: "legacy_sweep",
                store_eviction_quarantine_ms: 864e5,
                store_eviction_max_roots_per_run: 4,
                store_eviction_max_hash_bytes_per_run: 268435456,
                store_eviction_mark_ttl_ms: 6e5,
                store_eviction_min_interval_ms: 216e5,
                tombstone_full_refresh_rounds: 2880,
                tombstone_full_refresh_interval_ms: 864e5,
                tombstone_prune_slack_ms: 2592e5,
                local_stat_fast_path: "off",
                push_order: "scan",
                local_stat_fast_path_audit_rate: 1,
                local_stat_racy_margin_ms: 2e3,
                harness_recovery_policy: "recover",
                harness_recovery_start_jitter_ms: 3e4,
                harness_recovery_probe_base_ms: 3e5,
                harness_recovery_probe_max_ms: 36e5,
                harness_remembered_mounts_max: 16,
                mount_policy: null,
                surfaces: {}
            }
        },
        local_subscription_mint_cache_config: {
            client: !0,
            fallbackValues: {
                mint_refresh_slack_ms: 6e4,
                mint_failure_base_ms: 5e3,
                mint_failure_max_ms: 12e4,
                mint_failure_jitter: .2,
                mint_cache_max_conversations: 256
            }
        },
        gemini_video_attachment_config: {
            client: !0,
            fallbackValues: {
                maxBytes: 31457280,
                inlineMaxBytes: 15728640,
                signedUrlMaxBytes: 15728640,
                cloudMaxVideoAttachmentsPerRequest: 5,
                cloudMaxDocumentAttachmentsPerRequest: 5,
                localMaxVideoAttachmentsPerRequest: 5,
                localMaxTotalInlineVideoBytesPerRequest: 36700160
            }
        },
        agent_layout_migration: {
            client: !0,
            fallbackValues: {
                showSettings: !1,
                keepIsland: !1,
                sidebarLocation: "noop"
            }
        },
        default_diff_mode: {
            client: !0,
            fallbackValues: {
                default_diff_mode: "diffs"
            }
        },
        switch_mode_tool_config: {
            client: !0,
            fallbackValues: {
                enabledForNal: !1,
                enabledForOal: !1,
                fromModes: [],
                targetModes: []
            }
        },
        mcp_auth_status_copy_config: {
            client: !0,
            fallbackValues: {
                authToolDescription: "Authenticate this MCP server so its tools can be used. Call this tool through your MCP tool-calling interface when STATUS.md indicates this server needs authentication.",
                errorStatusMessage: "The MCP server errored. If this server is important for completing the task, concisely inform the user and ask them to check the MCP status in Cursor's Customize page > MCPs; otherwise continue with a different approach.",
                needsAuthStatusMessageWithAuthTool: 'The MCP server needs authentication. Authenticate it by calling the `{authToolName}` tool for server "{serverIdentifier}" through your MCP tool-calling interface using an empty arguments object. If this server is important for completing the task, authenticate it first; otherwise continue with a different approach.'
            }
        },
        mcp_reconnect_config: {
            client: !0,
            fallbackValues: {
                fastRetryBaseDelayMs: 5e3,
                fastRetryMaxDelayMs: 6e4,
                fastRetryMaxAttempts: 5,
                periodicRetryBaseDelayMs: 3e5,
                periodicRetryMaxDelayMs: 18e5,
                maxPeriodicCycles: null,
                focusRetryCooldownMs: 3e5,
                inlineReconnectCooldownMs: 3e5,
                oauthBackendRefreshHydrationPollIntervalMs: 500,
                streamableHttpSession404TombstoneThreshold: 5,
                healthProbeTimeoutMs: 1e4,
                toolCallBoundedTimeoutEnabled: !0,
                toolCallIdleTimeoutMs: 12e4,
                toolCallMaxTotalTimeoutMs: 36e5,
                degradedProbeDelayMs: 3e4,
                maxDegradedProbeFailures: 3,
                keepaliveProbeDelayMs: 3e5,
                keepaliveJitterMs: 3e4,
                stabilityThresholdMs: 3e4,
                stdioConnectFailuresAreNonRetryable: !0,
                retryNonRetryableOnWake: !1,
                nonRetryableWakeRetryCooldownMs: 3e5,
                retryNonRetryableAutomatically: !1,
                networkResumeReconnectEnabled: !1,
                networkResumeReconnectDebounceMs: 5e3,
                overrides: null
            }
        },
        mcp_oauth_sweep_config: {
            client: !0,
            fallbackValues: {
                oauthAttemptTtlMs: 36e5,
                refreshLockTtlMs: null,
                refreshLockMaxHoldMs: 12e4,
                registrationLockTtlMs: null
            }
        },
        mcp_oauth_refresh_policy: {
            client: !0,
            fallbackValues: {
                classifyBeforeWipe: !1
            }
        },
        mcp_oauth_loopback_redirect: {
            client: !0,
            fallbackValues: {
                enabled: !0,
                denylist: [],
                ipv4Hosts: []
            }
        },
        mcp_oauth_backend_redis_lock_config: {
            client: !0,
            fallbackValues: {
                operations: [
                    "refresh"
                ],
                executorKinds: [
                    "backendHttpMcp",
                    "cloudAgent",
                    "agentHost"
                ],
                providerAllowlist: [],
                fallbackMode: "fail_open",
                refreshLockTtlMs: 3e4,
                registrationLockTtlMs: 3e4,
                waitPollIntervalMs: 250,
                waitJitterMs: 100,
                maxWaitMs: 3e4
            }
        },
        sand_pressure_cpu_profiler_config: {
            client: !0,
            fallbackValues: {
                sustainedPressureWindowMs: 15e4,
                profileDurationMs: 15e3,
                minIntervalMs: 216e5,
                maxRetainedProfiles: 3
            }
        },
        sand_stream_deadline_config: {
            client: !0,
            fallbackValues: {
                firstTokenDeadlineMs: 15e4,
                idleDeadlineMs: 9e4
            }
        },
        inline_diff_performance_config: {
            client: !0,
            fallbackValues: {
                maxDecorations: 100
            }
        },
        tray_refresh_config: {
            client: !0,
            fallbackValues: {
                enableMainProcessCloudRefresh: !1,
                activeIntervalMs: 15e3,
                idleIntervalMs: 6e4,
                emptyIntervalMs: 3e5,
                engagementThrottleMs: 5e3,
                menuCap: 25,
                enablePoll: !0,
                enableEngagement: !0,
                enablePower: !0
            }
        },
        performance_events_config: {
            client: !0,
            fallbackValues: {
                enabled: !1,
                flushIntervalMs: 3e4,
                sampleRate: 0,
                maxScriptsPerLoaf: 10,
                maxBatchBytes: 32768,
                loafThresholdMs: 1e3,
                maxEventsPerFlush: 20
            }
        },
        background_composer_list_limit: {
            client: !0,
            fallbackValues: {
                limit: 32
            }
        },
        switch_to_model_slug_config: {
            client: !0,
            fallbackValues: {
                modelSlug: "",
                modelIdWithParams: {
                    modelId: "",
                    params: []
                }
            }
        },
        debug_mode_ui_instructions_config: {
            client: !0,
            fallbackValues: {
                proceed_instructions: "Issue reproduced, please proceed",
                mark_fixed_instructions: "The issue has been fixed. Please clean up the instrumentation."
            }
        },
        user_intent_config: {
            client: !0,
            fallbackValues: {
                maxChatsToRead: 100,
                maxProjectsToGroup: 5,
                model: "claude-4.5-opus-high-thinking",
                promptTemplate: "You are analyzing conversation transcripts to identify repeated user behaviors.\n\n## Transcript Location\nTranscripts are stored at: {{agentTranscriptsPath}}\n\n## Transcript Format\nEach '.txt' file is a human-readable conversation transcript with this structure:\n- 'user:' sections contain user messages (often wrapped in '<user_query>' tags)\n- 'assistant:' sections contain assistant responses\n- '[Tool call]' blocks show which tools were invoked\n- '[Tool result]' blocks show tool outputs\n\nFiles can be large. Focus on extracting the '<user_query>' sections which contain the actual user requests. Do NOT try to read the entire file contents because it will pollute your context.\n\n## How to Read Transcripts\n1. Use Glob to list files: \"{{agentTranscriptsPath}}/*.txt\"\n2. For each file, extract just the '<user_query>' blocks - these show what users asked for\n3. You can use Grep to search for '<user_query>' patterns across files\n\n## Task\nAnalyze the {{maxChatsToRead}} most recent conversations (by file modification time). Be thorough and do not bias towards recency when analyzing conversations. Ignore trivial conversations and conversations where nothing concrete happened.\n\nYour goal is to understand how the user interacts with the agent. Focus especially on the corrections that the user makes repeatedly. Focus on common terminal commands/workflows the user instructs the agent to do, changes, and other very stable patterns.\n\n## Evidence Standards\nWhen making claims about what the agent SHOULD or SHOULD NOT do, only cite conversations where:\n- The user explicitly corrected the agent for doing something wrong\n- The user undid or rejected an agent action\n- The user gave an explicit instruction ('don\\'t do X', 'always do Y')\n\nDo NOT infer 'don\\'t do X' from:\n- The user asking a question about X (e.g., 'should we add tests?' does not mean 'don\\'t add tests proactively')\n- The user doing X themselves (doesn't mean the agent shouldn't)\n- Absence of the agent doing X\n\nFor each claim, ask: 'Is there a conversation where the user pushed back on the agent for doing this?' If not, don't include it as a guideline. For each piece of information you discern, you must cite 4 conversations. For each citation, verify that the conversation actually backs up your claim. Never include direct quotes from user messages; summarize at a high level.\n\nThese are the sections to cover. Do not overlap these with existing user and project rules; if there is overlap or conflict always go with the existing rules.\n\n- Developer profile: How does the user interact with the agent. Focus on how much autonomy they like to give the agent vs. how much they would like to oversee the changes the agent is making. What is their workflow for getting tasks done. What kind of tasks do they often work on. Verify across many conversations, and do not extrapolate too hard.\n- Frequented areas of the codebase: Parts of the codebase the user primarily works in, and what kinds of tasks correspond to each part of the codebase.\n- Important terminal commands: Terminal commands/workflows the user runs repeatedly that are unique to the project/user workflow, and when they should be used. Focus on test, lint, and build commands. Do not include git commands.\n\nDo not write any files in this step. You will be asked in a follow-up message to write the final user profile to disk.",
                secondStepPromptTemplate: "Turn your analysis into a concise 'index.md' markdown file that will be shown to all agents in the future.\n\nWrite the file contents to: {{userIntentDirPath}}\n(This is a temporary file path and will be atomically moved to {{finalUserIntentDirPath}}.)\n\nRequirements:\n- Do not cite user messages or transcripts directly (no quotes)\n- Avoid overly specific task details; focus on stable patterns and preferences\n- Keep it reasonably short\n- For each guideline/claim, include 4 conversation citations and verify that each citation supports the claim"
            }
        },
        browser_default_url_config: {
            client: !0,
            fallbackValues: {
                defaultUrl: "https://cursor.com"
            }
        },
        glass_per_app_tabs_config: {
            client: !0,
            fallbackValues: {
                agentTabSelectionTTL: 3e4
            }
        },
        glass_tiling_config: {
            client: !0,
            fallbackValues: {
                showDraftsInSidebar: !1
            }
        },
        glass_fsd_launch_pill_config: {
            client: !0,
            fallbackValues: {
                pillLabel: "Autopilot PR",
                tooltip: "Fix CI, conflicts, and comments with full self driving",
                dropdownAriaLabel: "Autopilot PR runtime",
                cloudOptionLabel: "Run in Cloud",
                localOptionLabel: "Run locally in a Worktree",
                fixCiPillSingleLabel: "Debug CI Failure",
                fixCiPillPluralLabelTemplate: "Debug {count} CI Failures",
                fixCiPillLoadingLabel: "Debugging CI",
                fixCiPillLoadingProgressLabel: "Debugging CI",
                fsdFixCiPillSingleLabel: "Fix CI with FSD",
                fsdFixCiPillPluralLabelTemplate: "Fix {count} CI Failures with FSD",
                fsdFixCiPillLoadingLabel: "Fixing CI with FSD",
                fsdFixCiPillLoadingProgressLabel: "Fixing CI with FSD"
            }
        },
        grok_bot_contextual_banner_copy: {
            client: !0,
            fallbackValues: {
                title: "Grok Bot can do this for you",
                description: "An AI teammate that works in your tools and comes back with finished work.",
                downloadCtaLabel: "Download",
                downloadUrl: "https://cursor.com/download/bot",
                openCtaLabel: "Open Grok Bot",
                openUrl: "grokbot://"
            }
        },
        glass_btw_side_question_prompt_config: {
            client: !0,
            fallbackValues: {
                promptTemplate: [
                    "You are answering a single ephemeral question about the user's current work. Use the provided conversation as context and respond directly in one answer. Do not ask follow-up questions, do not request mode switches, and do not mention tool limitations unless absolutely necessary.",
                    "If the conversation does not contain enough to answer, say so briefly.",
                    "",
                    "{{question}}"
                ].join("\n")
            }
        },
        glass_loaded_agent_lru_cap: {
            client: !0,
            fallbackValues: {
                max_loaded_agents: 5
            }
        },
        composer_hidden_bubble_eviction: {
            client: !0,
            fallbackValues: {
                enabled: !1,
                keep_recent_hidden: 1
            }
        },
        glass_large_file_gate_config: {
            client: !0,
            fallbackValues: {
                code_gate_bytes: 10485760
            }
        },
        glass_workspace_lifecycle_metrics: {
            client: !0,
            fallbackValues: {
                enabled: !1,
                sweep_interval_ms: 6e4,
                retained_after_close_threshold_ms: 45e3
            }
        },
        glass_pr_operations_polling_config: {
            client: !0,
            fallbackValues: {
                prChecksPollIntervalMs: 3e4,
                prChecksPollMaxBackoffMs: 18e4,
                prChecksErrorBackoffMultiplier: 1.5,
                prChecksCacheTtlSeconds: 900,
                scmPrMetadataCacheTtlSeconds: 3600,
                scmPrDetailedStatusCacheTtlSeconds: 60,
                scmPrForBranchCacheTtlWhenPrsSeconds: 60,
                scmPrForBranchCacheTtlWhenEmptySeconds: 10,
                scmPrCodeownersCacheTtlSeconds: 300,
                scmPrCommitsCacheTtlSeconds: 300,
                scmPrTimelineEventsCacheTtlSeconds: 300,
                scmPrDiscussionsCacheTtlSeconds: 300,
                scmPrCheckLogExcerptOkTtlSeconds: 120,
                scmPrCheckLogExcerptNegativeTtlSeconds: 30,
                detailedPrStatusChecksScopedAuthBreakerTtlSeconds: 900,
                scmGitlabEmojiReactionCacheTtlSeconds: 1800,
                localAgentPrHeaderBatchPollIntervalMs: 3e4,
                localAgentPrStatePollIntervalMs: 6e5,
                localAgentPrBurstBumpOffsetsMs: [
                    3e3,
                    6e3,
                    9e3,
                    15e3,
                    2e4,
                    25e3,
                    3e4
                ],
                cloudAgentPrStatePollIntervalMs: 6e4,
                cloudAgentPrBurstBumpOffsetsMs: [
                    3e3,
                    6e3,
                    9e3,
                    15e3,
                    2e4,
                    25e3,
                    3e4
                ],
                cloudAgentPrStatePollMaxBackoffMs: 3e5,
                cloudAgentPrErrorBackoffMultiplier: 1.5
            }
        },
        cloud_agent_stream_reattach: {
            client: !0,
            fallbackValues: {
                enabled: !0,
                rehydrateAfterMs: 12e4
            }
        },
        cloud_agent_stream_conversation_turn_window: {
            client: !0,
            fallbackValues: {
                maxTurns: null
            }
        },
        tool_limits_config: {
            client: !0,
            fallbackValues: {
                readFilesToolMaxFileSizeInBytes: 2e6,
                editFileToolMaxFileSizeInChars: 15e4,
                fileSearchToolMaxResults: 10,
                listDirV2ClientSideCharacterBudget: 1e3,
                readFileV2ToolMaxFileSizeInBytes: 2e8,
                composerDiffMaxComputationTimeMs: 2e3
            }
        },
        update_prompt_config: {
            client: !0,
            fallbackValues: {
                min_hours_between_prompts: 48,
                max_prompts_per_version: 3,
                max_prompts_per_day: 1,
                snooze_duration_hours: 72
            }
        },
        internal_release_track_override: {
            client: !0,
            fallbackValues: {
                releaseTrack: "",
                statsigUrl: "",
                unlockInternalTracks: !1
            }
        },
        sand_internal_release_track_override: {
            client: !0,
            fallbackValues: {
                releaseTrack: "",
                unlockInternalTracks: !1
            }
        },
        sand_host_bundle_channel: {
            client: !0,
            fallbackValues: {
                channel: "",
                watchIntervalMs: null
            }
        },
        giant_json_stringify_config: {
            client: !0,
            fallbackValues: {
                sentry_threshold_bytes: 1e7,
                attach_content: !1
            }
        },
        giant_buffer_retention_config: {
            client: !0,
            fallbackValues: {
                allocation_threshold_bytes: 33554432,
                blob_url_threshold_bytes: 33554432,
                retention_age_ms: 3e5,
                sweep_interval_ms: 6e4
            }
        },
        giant_json_parse_config: {
            client: !0,
            fallbackValues: {
                sentry_threshold_bytes: 1e9
            }
        },
        giant_vsbuffer_decode_config: {
            client: !0,
            fallbackValues: {
                sentry_threshold_bytes: 2e7
            }
        },
        mcp_ipc_timeouts: {
            client: !0,
            fallbackValues: {
                metadata_timeout_ms: 1e4,
                lifecycle_timeout_ms: 1e4,
                dashboard_timeout_ms: 1e4,
                recovery_per_retry_timeout_ms: 1e4
            }
        },
        sentry_session_recording_config: {
            client: !0,
            fallbackValues: {
                replays_session_sample_rate: 0
            }
        },
        extension_signature_verification_bypass_list: {
            client: !0,
            fallbackValues: {
                extensionIds: [
                    "nromanov.dotrush",
                    "ms-python.python",
                    "typescriptteam.native-preview",
                    "typespec.typespec-vscode",
                    "ms-toolsai.jupyter",
                    "k3ndr1ckfu.tcl-language-support-for-vscode",
                    "amiq.dvt"
                ],
                remoteVerificationMinVersion: "2.25.0"
            }
        },
        sandbox_default_network_allowlist: {
            client: !0,
            fallbackValues: {
                allowlist: []
            }
        },
        auto_spillover_ui_config: {
            client: !0,
            fallbackValues: So.rO
        },
        glass_perf_vote_config: {
            client: !0,
            fallbackValues: bo.Q
        },
        portal_outage_alert: {
            client: !0,
            fallbackValues: {
                enabled: !1,
                title: "",
                description: ""
            }
        },
        slack_mcp_client_id: {
            client: !0,
            fallbackValues: {
                clientId: "3660753192626.8903469228982"
            }
        },
        shopify_mcp_client_id: {
            client: !0,
            fallbackValues: {
                clientId: "2a457b21c946d5bc8d1675d1b3b8c2d6"
            }
        },
        file_watcher_metrics_config: {
            client: !0,
            fallbackValues: {
                flush_delay_ms: 3e4
            }
        },
        file_watcher_forwarded_storm_config: {
            client: !0,
            fallbackValues: {
                window_ms: 1e4,
                min_events: 2500,
                report_throttle_ms: 3e5,
                top_buckets: 8
            }
        },
        cloud_agent_list_stream_config: {
            client: !0,
            fallbackValues: {
                enabled_platforms: [],
                safety_poll_interval_ms: 6e4,
                inactivity_timeout_ms: 45e3,
                max_consecutive_failures: 5,
                reconnect_base_delay_ms: 1e3,
                reconnect_max_delay_ms: 6e4,
                reconcile_delay_ms: 1e3,
                use_list_page_tokens: !0,
                split_project_list: !1,
                exclude_archived_default: !1,
                projects_only_owner_lookup: !1,
                projects_only_owner_lookup_max_projects: 5e3,
                membership_poll_interval_ms: 0,
                membership_safety_poll_interval_ms: 0
            }
        },
        statsig_dummy_gauge_config: {
            client: !0,
            fallbackValues: {
                dummy: 0
            }
        },
        memory_monitor_user_toast_config: {
            client: !0,
            fallbackValues: {
                heap_percent: 80
            }
        },
        cpu_monitor_config: {
            client: !0,
            fallbackValues: {
                total_cpu_percent: 250,
                process_cpu_percent: 95,
                sustained_seconds: 60,
                check_interval_seconds: 15,
                cooldown_seconds: 1800,
                include_system_processes: !0
            }
        },
        memory_pressure_profiling_config: {
            client: !0,
            fallbackValues: {
                trigger_heap_percent: 70,
                duration_seconds: 30,
                sampling_interval_bytes: 4096,
                cooldown_seconds: 300
            }
        },
        webview_inventory_config: {
            client: !0,
            fallbackValues: {
                enabled: !1,
                metrics_interval_seconds: 30,
                sample_interval_minutes: 5
            }
        },
        memory_monitor_config: {
            client: !0,
            fallbackValues: {
                base_threshold_mb: 1536,
                critical_offset_mb: 512,
                show_status_entry: !1,
                show_internal_warning_popup: !1,
                show_user_toast: !0,
                user_toast_heap_percent: 80,
                emit_heap_usage_metric: !1,
                emergency_profiling_enabled: !0,
                emergency_profiling_trigger_heap_percent: 70,
                emergency_profiling_duration_seconds: 30,
                emergency_profiling_sampling_interval_bytes: 4096,
                emergency_profiling_cooldown_seconds: 300
            }
        },
        plugin_onboarding_by_job_role: {
            client: !0,
            fallbackValues: {
                byJobRole: {},
                recommendedPluginNamesByJobRole: {}
            }
        },
        leaked_disposables_tracker: {
            client: !0,
            fallbackValues: {
                enabled: !1,
                reportIntervalMs: 6e4
            }
        },
        gc_disposable_leak_reporting: {
            client: !0,
            fallbackValues: {
                enabled: !1,
                sessionSampleRate: 0
            }
        },
        solidjs_memo_audit_config: {
            client: !0,
            fallbackValues: {
                enabled: !1,
                sampleRate: 1,
                maxEventsPerFlush: 5e4,
                reportIntervalMs: 6e4,
                deepProbe: !1,
                deepProbeSampleRate: .01,
                deepProbeMaxBytes: 16384,
                stackAttribution: !1,
                stackCreationSampleRate: .02,
                stackRedundantThreshold: 2,
                maxTrackedCreationStacks: 500,
                maxStackReportsPerSession: 10,
                maxStackBytes: 4e3
            }
        },
        solidjs_listener_stacks_config: {
            client: !0,
            fallbackValues: {
                enabled: !1,
                sampleRate: 1,
                observerThreshold: 2e3,
                maxTrackedSources: 500,
                maxReportsPerSession: 10,
                maxStackBytes: 4e3,
                totalObserverThreshold: 0,
                totalTriggeredSourceFloor: 200,
                totalTriggeredMaxReports: 20
            }
        },
        shell_exec_output_backpressure_config: {
            client: !0,
            fallbackValues: {
                outputSuppressionWindowMs: 6e4,
                outputSuppressionThresholdCharsPerSecond: 65536,
                outputSuppressionMinChars: 262144,
                outputLimiterFlushIntervalMs: 50,
                outputLimiterMaxBufferedBytes: 262144,
                extHostMinBatchIntervalMs: 50,
                extHostMaxBatchIntervalMs: 500,
                extHostBytesPerIntervalStep: 1e4
            }
        },
        canvas_prompt_text_config: {
            client: !0,
            fallbackValues: {
                skillDescription: "A Cursor Canvas is a live React app that the user can open beside the chat. You MUST use a canvas when the agent produces a standalone analytical artifact — quantitative analyses, billing investigations, security audits, architecture reviews, data-heavy content, timelines, charts, tables, interactive explorations, repeatable tools, or any response that benefits from visual layout. Especially prefer a canvas when presenting results from MCP tools (Datadog, Databricks, Linear, Sentry, Slack, etc.) where the data is the deliverable — render it in a rich canvas rather than dumping it into a markdown table or code block. If you catch yourself about to write a markdown table, stop and use a canvas instead. You MUST also read this skill whenever you create, edit, or debug any .canvas.tsx file.",
                errorFixPromptTemplate: [
                    "The canvas at `{canvasPath}` has the following error:",
                    "",
                    '"""',
                    "{errorMessage}",
                    '"""',
                    "",
                    "Check if the canvas SDK has changed since this canvas was created.",
                    "Update the canvas to use the latest SDK components according to the supplied documentation in the canvas skill."
                ].join("\n"),
                welcomePageEnabled: !0,
                marketplaceCategoryKey: "canvas-featured",
                marketplaceMaxCards: 4
            }
        },
        glass_ftux_first_action_config: {
            client: !0,
            fallbackValues: {
                byJobRole: {}
            }
        },
        shutdown_hang_watchdog_config: {
            client: !0,
            fallbackValues: {
                per_joiner_warn_ms: 2e3,
                fire_on_will_shutdown_total_ms: 3e3,
                process_exit_total_ms: 5e3
            }
        },
        update_diagnostics: {
            client: !0,
            fallbackValues: {
                enabled: !1,
                restart_time_threshold_seconds: 30,
                attach_ship_it_log: !0,
                max_attachment_bytes: 5e6
            }
        },
        startup_diagnostics: {
            client: !0,
            fallbackValues: {
                enabled: !1,
                timer_name: "ellapsedLoadMainBundle",
                threshold_ms: 3e4
            }
        },
        renderer_ping_config: {
            client: !0,
            fallbackValues: {
                enabled: !1,
                ping_interval_ms: 5e3,
                block_threshold_ms: 15e3,
                collect_stack_traces: !0,
                report_rpc_drain: !1
            }
        },
        main_watcher_stall_probe_config: {
            client: !0,
            fallbackValues: {
                enabled: !1,
                flush_threshold_ms: 250,
                anchor_interval_ms: 1e3,
                anchor_lag_ms: 500,
                cooldown_ms: 6e4,
                session_cap: 10
            }
        },
        editor_input_latency_metrics_config: {
            client: !0,
            fallbackValues: {
                enabled: !1,
                sample_rate: .01,
                window_duration_ms: 6e4
            }
        },
        editor_tokenization_metrics_config: {
            client: !0,
            fallbackValues: {
                enabled: !1,
                sample_rate: .01,
                time_limit_ms: 500
            }
        },
        ripgrep_invocation_monitor_config: {
            client: !0,
            fallbackValues: {
                window_ms: 1e4,
                threshold: 50,
                max_records: 100,
                cooldown_ms: 3e5,
                report_to_sentry: !0,
                report_initialize_caches: !1
            }
        },
        grep_fallback_monitor_config: {
            client: !0,
            fallbackValues: {
                window_ms: 6e4,
                min_samples: 20,
                fallback_ratio_threshold: .5,
                cooldown_ms: 3e5,
                report_to_sentry: !0
            }
        },
        instant_grep_indexing_config: {
            client: !0,
            fallbackValues: {
                max_in_memory_documents: null
            }
        },
        git_diff_reply_limit_config: {
            client: !0,
            fallbackValues: {
                enabled: !0,
                max_reply_bytes: 31457280
            }
        },
        renderer_slow_interaction_sentry_config: {
            client: !0,
            fallbackValues: {
                enabled: !1,
                threshold_ms: 1e3,
                commit_attribution: !1
            }
        },
        glass_fps_monitor_config: {
            client: !0,
            fallbackValues: {
                enabled: !1,
                min_fps: 30,
                max_drops_per_interval: 3,
                interval_sec: 60,
                baseline_interval_sec: null,
                baseline_sample_rate: null
            }
        },
        xai_team_link_create_mode: {
            client: !0,
            fallbackValues: {
                mode: "off"
            }
        },
        mac_computer_use_sidecar_manifest: {
            client: !0,
            fallbackValues: {
                sidecarManifestUrl: ""
            }
        },
        windows_computer_use_sidecar_manifest: {
            client: !0,
            fallbackValues: {
                x64: "",
                arm64: ""
            }
        },
        computer_use_mcp_instructions: {
            client: !0,
            fallbackValues: {
                darwin: {
                    companion: "",
                    remote: ""
                },
                win32: ""
            }
        },
        change_monitor_enrollment: {
            client: !0,
            fallbackValues: {
                enrolled: !1,
                enableUI: !1,
                orgs: [
                    "*"
                ]
            }
        }
    });
    Object.keys(wf), vf([
        "control",
        "grok_primary",
        "pinned_selection",
        "grouped_auto_expand"
    ]), vf([
        "control",
        "treatment"
    ]);
    function vf(e) {
        return Object.assign((t)=>{
            if (-1 === e.findIndex((e)=>e === t)) throw new Error(`Invalid value for enum: ${t}, expected one of: ${e.join(", ")}`);
            return t;
        }, {
            enumValues: e
        });
    }
    function _f(e) {
        if ("boolean" != typeof e) throw new Error(`Invalid value for boolean: ${e}`);
        return e;
    }
    function Af(e) {
        if ("string" != typeof e) throw new Error(`Invalid value for string: ${e}`);
        return e;
    }
    function Sf(e) {
        if ("number" != typeof e) throw new Error(`Invalid value for number: ${e}`);
        return e;
    }
    var bf = require("./module-13920.js");
    function Ef(e) {
        if (void 0 === e) return "the CURSOR_PRIVATE_INFERENCE_* shorthand";
        switch(e.source){
            case "policy":
                return `the managed policy config file ${e.path}`;
            case "well-known":
                return `the enterprise config file ${e.path}`;
            case "env":
                return `CURSOR_PRIVATE_INFERENCE_CONFIG=${e.path}`;
        }
    }
    function If(e) {
        return `Private inference config: private inference is enabled for your team but no configuration is present — put ${In} at ${Cn(e)} (or set CURSOR_PRIVATE_INFERENCE_CONFIG for development), then restart`;
    }
    async function Cf(e) {
        const t = c.cursor.getPrivateInferenceEnablement();
        if ("enabled" === t || void 0 === e || "env" === e.source) return t;
        return void 0 === await c.cursor.getActiveTeamId() ? "unavailable" : "disabled";
    }
    async function kf() {
        return c.cursor.getPrivateInferenceEnablement();
    }
    function xf() {
        return c.cursor.getPrivateInferenceEnablement();
    }
    async function Tf() {
        const e = xn({
            env: process.env,
            platform: process.platform
        }), t = function(e) {
            if (void 0 === e.configFile && !(0, dt.QO)(e.env)) switch(e.team){
                case "disabled":
                case "unavailable":
                    return {
                        kind: "not-configured"
                    };
                case "enabled":
                    return {
                        kind: "fail-closed",
                        configErrorDetail: If(e.platform)
                    };
                case "pending":
                    return {
                        kind: "enrollment-pending",
                        configErrorDetail: If(e.platform)
                    };
            }
            switch(e.team){
                case "enabled":
                case "unavailable":
                case "pending":
                    return {
                        kind: "hydrate",
                        configFile: e.configFile
                    };
                case "disabled":
                    return {
                        kind: "backend-loop",
                        warning: `Private inference is configured (${Ef(e.configFile)}) but is not enabled for your team; ignoring it and running turns on the backend loop (Cursor-managed models)`
                    };
            }
        }({
            configFile: e,
            env: process.env,
            platform: process.platform,
            team: await Cf(e)
        });
        if ("not-configured" !== t.kind) {
            if ("backend-loop" !== t.kind) return "hydrate" === t.kind && void 0 !== t.configFile && ks.gW.info(`Private inference config: ${t.configFile.path} (${t.configFile.source})`), {
                decision: t,
                routing: {
                    readTeamEnablement: kf,
                    enrollmentUndecided: "enrollment-pending" === t.kind
                }
            };
            ks.gW.warn(t.warning);
        }
    }
    let Rf;
    function Bf() {
        return void 0 === Rf && (Rf = (0, gn.createPrivateInferenceEnablementSource)({
            getEnablement: ()=>c.cursor.getPrivateInferenceEnablement()
        })), Rf;
    }
    class Pf {
        constructor(e){
            let t = e.globalState.get("unique_cpp_user_id");
            void 0 === t && (t = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), e.globalState.update("unique_cpp_user_id", t)), this._uniqueCppUserId = t;
        }
        static initialize(e) {
            void 0 === Pf._instance && (Pf._instance = new Pf(e));
        }
        static getInstance() {
            if (void 0 === Pf._instance) throw new Error("SpoofedIdProvider not initialized");
            return Pf._instance;
        }
        maybeGetSpoofedCppAccessToken(e, t) {
            const r = c.cursor.getCursorCreds()?.backendUrl, n = "redacted" + this._uniqueCppUserId;
            return (r?.includes("lclhst.build") || r?.includes("localhost")) && t?.includes("cursor.sh") ? (ks.gW.info("Using spoofed CPP token"), function(e, t) {
                const r = e.split("").map((e)=>e.charCodeAt(0));
                for(let e = 0; e < r.length; e++)r[e] = (r[e] + 128 - t % 128) % 128;
                return String.fromCharCode(...r);
            }(n, 1)) : e;
        }
    }
    const Jf = (()=>{
        try {
            const e = i.totalmem();
            return Number.isFinite(e) && e > 0 ? String(Math.round(e)) : void 0;
        } catch  {
            return;
        }
    })();
    class Mf {
        async getAccessToken() {
            return c.cursor.getCursorAuthToken();
        }
        async getApiKey() {}
        async setAuthentication(e, t, r) {
            await c.commands.executeCommand("cursorAuth.triggerTokenRefresh", !0);
        }
    }
    class qf {
        constructor(e){
            this.disposables = [], this.context = e;
            const t = function(e) {
                let t;
                const r = ()=>(void 0 === t && (t = c.window.createOutputChannel(e, {
                        log: !0
                    })), t);
                return {
                    logger: {
                        debug: (e, ...t)=>r().debug(e, ...t),
                        info: (e, ...t)=>r().info(e, ...t),
                        warn: (e, ...t)=>r().warn(e, ...t),
                        error: (e, ...t)=>r().error(e, ...t),
                        trace: (e, ...t)=>r().trace(e, ...t)
                    },
                    dispose: ()=>t?.dispose()
                };
            }("Cursor Agent Host Network (debug)");
            this.log = ks.Wo, this.logDispose = ()=>ks.Wo.dispose(), this.debugLog = t.logger, this.debugLogDispose = t.dispose, void 0 !== e && Pf.initialize(e);
        }
        track(e) {
            return this.disposables.push(e), e;
        }
        async initialize() {
            this.log.info("[agent-host] Builtin IDE network platform initialized");
        }
        dispose() {
            for (const e of this.disposables)e.dispose();
            this.disposables.length = 0, this.logDispose(), this.debugLogDispose();
        }
        getCreds() {
            return c.cursor.getCursorCreds();
        }
        onDidChangeCreds(e) {
            return this.track(c.cursor.onDidChangeCursorCreds(e));
        }
        getAuthToken() {
            return c.cursor.getCursorAuthToken();
        }
        onDidChangeAuthToken(e) {
            return this.track(c.cursor.onDidChangeCursorAuthToken(e));
        }
        triggerTokenRefresh() {
            c.commands.executeCommand("cursorAuth.triggerTokenRefresh", !0);
        }
        maybeGetSpoofedCppAccessToken(e, t) {
            return void 0 === this.context ? e : Pf.getInstance().maybeGetSpoofedCppAccessToken(e, t);
        }
        getTeamId() {
            return c.cursor.getTeamId();
        }
        getPrivacyModeEnum() {
            return c.cursor.getPrivacyModeEnum();
        }
        getPrivateInferenceEnablement() {
            return Bf();
        }
        applyRequestHeaders(e, t, r) {
            c.cursor.getAllRequestHeadersExceptAccessToken({
                req: e,
                backupRequestId: t,
                ...void 0 !== r ? {
                    clientKey: r
                } : {}
            });
            const n = e.header;
            void 0 === Jf || void 0 === n || n.has("x-cursor-client-device-memory") || n.set("x-cursor-client-device-memory", Jf);
        }
        checkFeatureGate(e) {
            return Promise.resolve(c.cursor.checkFeatureGate(e));
        }
        onDidChangeGates(e) {
            return this.track(c.cursor.onDidChangeGates(e));
        }
        getDynamicConfigValue(e) {
            return Promise.resolve(c.cursor.getDynamicConfigValue(e));
        }
        getDynamicConfigFallbackValues(e) {
            return wf[e]?.fallbackValues;
        }
        async getCachedServerConfigJson() {
            return c.commands.executeCommand(bf.X7.GetCachedServerConfig);
        }
        isHttp2Disabled() {
            try {
                return c.workspace.getConfiguration().get(bf.db, !1);
            } catch  {
                return !1;
            }
        }
        async setHttp2Disabled() {
            await c.workspace.getConfiguration().update(bf.db, !0, !0);
        }
        isHttp1SseDisabled() {
            try {
                return c.workspace.getConfiguration().get(bf.ak, !1);
            } catch  {
                return !1;
            }
        }
        async setHttp1SseDisabled() {
            await c.workspace.getConfiguration().update(bf.ak, !0, !0);
        }
        onDidChangeHttpProtocolSettings(e) {
            return this.track(c.workspace.onDidChangeConfiguration((t)=>{
                (t.affectsConfiguration(bf.db) || t.affectsConfiguration(bf.ak)) && e();
            }));
        }
        getDebugTimeoutPreventionMode() {
            try {
                return c.workspace.getConfiguration().get("cursor.debug.timeoutPrevention", "local_only");
            } catch  {
                return "local_only";
            }
        }
        async loadSystemCertificates() {
            const { loadSystemCertificates: e } = require("./module-89018.js"), t = await e({
                log: {
                    error: (e, ...t)=>this.debugLog.error(e, ...t),
                    warn: (e, ...t)=>this.debugLog.warn(e, ...t),
                    info: (e, ...t)=>this.debugLog.info(e, ...t),
                    debug: (e, ...t)=>this.debugLog.debug(e, ...t),
                    trace: (e, ...t)=>this.debugLog.trace(e, ...t)
                },
                loadSystemCertificatesFromNode: ()=>!1
            });
            return t ? [
                ...t
            ] : void 0;
        }
        isLocalMode() {
            return c.cursor.isLocalMode;
        }
        isDevelopment() {
            return this.context?.isDevelopment ?? !1;
        }
        metricsIncrement(e) {
            c.cursor.metricsIncrement(e);
        }
        logStructured(e) {
            (0, ks.M$)(e.key, e.level, e.message, e.metadata, e.error);
        }
        writePrivacyLog(e, t) {
            switch(void 0 === this.privacyLogChannel && (this.privacyLogChannel = c.window.createOutputChannel("Cursor Agent Host Structured Logs", {
                log: !0
            }), this.disposables.push(this.privacyLogChannel)), e){
                case "error":
                    this.privacyLogChannel.error(t);
                    break;
                case "warn":
                    this.privacyLogChannel.warn(t);
                    break;
                default:
                    this.privacyLogChannel.info(t);
            }
        }
    }
    var Df = require("./module-14521.js"), Of = require("./module-79896.js");
    function Nf(e, t) {
        return Ff(e) || !0 === t;
    }
    function Ff(e) {
        return "1" === e || "true" === e?.toLowerCase();
    }
    function Uf(e) {
        if (void 0 !== e.storageSource) return e.gate ? "gate" : Ff(e.envValue) ? "env" : void 0;
    }
    const Lf = 6e4;
    function $f(e) {
        const t = new Map;
        return (r)=>{
            const n = `${r.kind}:${r.store}`, s = Date.now(), o = t.get(n);
            if (void 0 !== o && s - o < Lf) return;
            t.set(n, s);
            const i = function(e) {
                switch(e.kind){
                    case "host_blob_missing":
                        return new Error("Host-owned session is missing a required local blob");
                    case "host_owned_legacy_blob_read":
                        return new Error("Host-owned session attempted a legacy blob read");
                    case "mirror_write_failed":
                        return new Error("Host-owned session mirror write failed");
                    case "root_commit_conflict":
                        return new Error("Host-owned session root commit conflicted");
                    case "roots_diverged":
                        return new Error(`Agent host storage ${e.kind}: ${e.relPath}`);
                    default:
                        return e.error instanceof Error ? e.error : new Error(`Agent host storage ${e.kind}: ${e.relPath}`);
                }
            }(r), a = function(e) {
                if ("sqliteErrcode" in e && void 0 !== e.sqliteErrcode) return e.sqliteErrcode;
                return "code" in e ? e.code : void 0;
            }(r);
            e(i, {
                client_error_type: "agent_host_storage_failure",
                cursor_storage_event: r.kind,
                storage_kind: r.store,
                force_upload: "forced"
            }, {
                level: "busy_exhausted" === r.kind || "root_commit_conflict" === r.kind ? "warning" : "error",
                fingerprint: [
                    "agent_host_storage",
                    r.kind,
                    String(a ?? "unknown")
                ],
                extra: Qf(r)
            });
        };
    }
    function Qf(e) {
        switch(e.kind){
            case "host_blob_missing":
                return {
                    operation: "get_blob",
                    authority: "host"
                };
            case "host_owned_legacy_blob_read":
                return {
                    operation: "get_blob",
                    authority: "host",
                    attempted_source: "renderer_callback"
                };
            case "mirror_write_failed":
                return {
                    operation: "set_blob",
                    authority: "host",
                    attempted_source: "renderer_callback"
                };
            case "root_commit_conflict":
                return {
                    operation: "commit_root",
                    authority: "host"
                };
            case "roots_diverged":
                return {
                    sessionId: e.sessionId,
                    relPath: e.relPath,
                    hostRootBlobIdHex: e.hostRootBlobIdHex,
                    rendererRootBlobIdHex: e.rendererRootBlobIdHex,
                    ...void 0 === e.hostTurns ? {} : {
                        hostTurns: e.hostTurns
                    },
                    ...void 0 === e.rendererTurns ? {} : {
                        rendererTurns: e.rendererTurns
                    },
                    ...void 0 === e.commonPrefixTurns ? {} : {
                        commonPrefixTurns: e.commonPrefixTurns
                    }
                };
            case "hydrate_failed":
                return {
                    sessionId: e.sessionId,
                    relPath: e.relPath,
                    durationMs: Math.round(e.durationMs)
                };
            default:
                return {
                    relPath: e.relPath,
                    durationMs: Math.round(e.durationMs)
                };
        }
    }
    const jf = 5e3;
    function Gf(e) {
        const t = process.getBuiltinModule("node:sqlite"), r = Kf(e), n = new t.DatabaseSync(e, {
            readOnly: !0
        });
        let s;
        try {
            return s = new t.DatabaseSync(e, {
                readOnly: !0
            }), s.exec(`PRAGMA busy_timeout = ${jf}`), function(e, t, r, n) {
                e.exec(`PRAGMA busy_timeout = ${jf}`), e.exec("BEGIN");
                const s = e.prepare("SELECT value FROM cursorDiskKV WHERE key = ?"), o = e.prepare(Hf), i = void 0 !== e.prepare("SELECT name FROM sqlite_master WHERE type = 'table' AND name = 'composerHeaders'").get(), a = "composerId, workspaceId, createdAt, lastUpdatedAt, isArchived, isSubagent, value", c = i ? e.prepare(`SELECT ${a} FROM composerHeaders WHERE composerId = ?`) : void 0, l = i ? e.prepare(`SELECT ${a} FROM composerHeaders`) : void 0, u = t.prepare(Hf), d = i ? t.prepare(`SELECT ${a} FROM composerHeaders WHERE composerId = ?`) : void 0, p = (e)=>{
                    let t;
                    const r = Wf(e.value);
                    if (void 0 !== r) try {
                        const e = JSON.parse(r);
                        t = "string" == typeof e.name ? e.name : void 0;
                    } catch  {}
                    return {
                        composerId: String(e.composerId),
                        workspaceId: "string" == typeof e.workspaceId ? e.workspaceId : void 0,
                        createdAt: Vf(e.createdAt),
                        lastUpdatedAt: Vf(e.lastUpdatedAt),
                        isArchived: 1 === Number(e.isArchived ?? 0),
                        isSubagent: 1 === Number(e.isSubagent ?? 0),
                        name: t
                    };
                };
                return {
                    getBlob: (e)=>{
                        const t = s.get(`${Et}${e}`);
                        if (void 0 !== t) {
                            if (t.value instanceof Uint8Array) return 1 === t.value.length && 0 === t.value[0] ? new Uint8Array(0) : t.value;
                            if ("string" == typeof t.value) try {
                                const e = (0, R.aD)(t.value);
                                return 1 === e.length && 0 === e[0] ? new Uint8Array(0) : e;
                            } catch  {
                                return;
                            }
                        }
                    },
                    getComposerData: (e)=>{
                        const t = s.get(`composerData:${e}`), r = void 0 === t ? void 0 : Wf(t.value);
                        if (void 0 !== r) try {
                            const e = JSON.parse(r);
                            return "object" == typeof e && null !== e ? e : void 0;
                        } catch  {
                            return;
                        }
                    },
                    getRootWriterDiagnostic: (e, t)=>{
                        const r = s.get((0, ie.dI)(e));
                        return (0, ie.RN)(void 0 === r ? void 0 : Wf(r.value), t);
                    },
                    getHeader: (e)=>{
                        const t = c?.get(e);
                        return void 0 === t ? void 0 : p(t);
                    },
                    listHeaders: ()=>(l?.all() ?? []).map(p),
                    getSessionVersion: (e)=>zf(o, c, e),
                    isSessionCurrent: (e, t)=>{
                        try {
                            return s = n, o = Kf(r), void 0 !== s && void 0 !== o && s.dev === o.dev && s.ino === o.ino && function(e, t) {
                                return function(e, t) {
                                    if (void 0 === e || void 0 === t) return e === t;
                                    return e.valid === t.valid && e.conversationState === t.conversationState && e.lastUpdatedAt === t.lastUpdatedAt && e.unfinishedRunAt === t.unfinishedRunAt && e.status === t.status && e.generatingBubbleIds === t.generatingBubbleIds;
                                }(e.composerData, t.composerData) && function(e, t) {
                                    if (void 0 === e || void 0 === t) return e === t;
                                    return e.workspaceId === t.workspaceId && e.createdAt === t.createdAt && e.lastUpdatedAt === t.lastUpdatedAt && e.isArchived === t.isArchived && e.isSubagent === t.isSubagent && e.value === t.value;
                                }(e.header, t.header);
                            }(t, zf(u, d, e));
                        } catch  {
                            return !1;
                        }
                        var s, o;
                    },
                    close: ()=>{
                        try {
                            e.exec("ROLLBACK");
                        } finally{
                            try {
                                e.close();
                            } finally{
                                t.close();
                            }
                        }
                    }
                };
            }(n, s, e, r);
        } catch (e) {
            try {
                n.close();
            } finally{
                s?.close();
            }
            throw e;
        }
    }
    const Hf = "\n\tSELECT\n\t\tjson_valid(CAST(value AS TEXT)) AS valid,\n\t\tCASE WHEN json_valid(CAST(value AS TEXT))\n\t\t\tTHEN json_extract(CAST(value AS TEXT), '$.conversationState') END AS conversationState,\n\t\tCASE WHEN json_valid(CAST(value AS TEXT))\n\t\t\tTHEN json_extract(CAST(value AS TEXT), '$.lastUpdatedAt') END AS lastUpdatedAt,\n\t\tCASE WHEN json_valid(CAST(value AS TEXT))\n\t\t\tTHEN json_extract(CAST(value AS TEXT), '$.unfinishedRunAt') END AS unfinishedRunAt,\n\t\tCASE WHEN json_valid(CAST(value AS TEXT))\n\t\t\tTHEN json_extract(CAST(value AS TEXT), '$.status') END AS status,\n\t\tCASE WHEN json_valid(CAST(value AS TEXT))\n\t\t\tTHEN json_extract(CAST(value AS TEXT), '$.generatingBubbleIds') END AS generatingBubbleIds\n\tFROM cursorDiskKV WHERE key = ?\n";
    function zf(e, t, r) {
        const n = e.get(`composerData:${r}`), s = t?.get(r);
        return {
            composerData: void 0 === n ? void 0 : {
                valid: 1 === Number(n.valid ?? 0),
                conversationState: "string" == typeof n.conversationState ? n.conversationState : void 0,
                lastUpdatedAt: Vf(n.lastUpdatedAt),
                unfinishedRunAt: Vf(n.unfinishedRunAt),
                status: "string" == typeof n.status ? n.status : void 0,
                generatingBubbleIds: "string" == typeof n.generatingBubbleIds ? n.generatingBubbleIds : void 0
            },
            header: void 0 === s ? void 0 : {
                workspaceId: "string" == typeof s.workspaceId ? s.workspaceId : void 0,
                createdAt: Vf(s.createdAt),
                lastUpdatedAt: Vf(s.lastUpdatedAt),
                isArchived: 1 === Number(s.isArchived ?? 0),
                isSubagent: 1 === Number(s.isSubagent ?? 0),
                value: Wf(s.value)
            }
        };
    }
    function Wf(e) {
        return "string" == typeof e ? e : e instanceof Uint8Array ? (new TextDecoder).decode(e) : void 0;
    }
    function Vf(e) {
        return "number" == typeof e ? e : "bigint" == typeof e ? Number(e) : void 0;
    }
    function Kf(e) {
        try {
            const t = _t().statSync(e, {
                throwIfNoEntry: !1
            });
            return void 0 === t ? void 0 : {
                dev: t.dev,
                ino: t.ino
            };
        } catch  {
            return;
        }
    }
    const Yf = 4;
    function Zf(e) {
        let t = e.now();
        const r = async ()=>{
            await e.yieldControl(), t = e.now();
        };
        return {
            yieldIfNeeded: ()=>e.now() - t < e.maxSliceMs ? void 0 : r(),
            yieldNow: r
        };
    }
    const Xf = 16384;
    async function eg(e, t, r) {
        if (e.byteLength !== t.byteLength) {
            const e = r?.yieldIfNeeded();
            return void 0 !== e && await e, !1;
        }
        for(let n = 0; n < e.byteLength; n += Xf){
            const s = Math.min(n + Xf, e.byteLength);
            for(let o = n; o < s; o++)if (e[o] !== t[o]) {
                const e = r?.yieldIfNeeded();
                return void 0 !== e && await e, !1;
            }
            const o = r?.yieldIfNeeded();
            void 0 !== o && await o;
        }
        return !0;
    }
    function tg(e) {
        let t = !1;
        try {
            t = e.host.isCurrent();
        } catch  {}
        if (!t) try {
            return e.storage.hasSessionStore(e.sessionId) ? {
                kind: "changed",
                store: "host"
            } : {
                kind: "deleted"
            };
        } catch  {
            return {
                kind: "changed",
                store: "host"
            };
        }
        return ng(e);
    }
    function rg(e, t) {
        try {
            return e.hasSessionStore(t);
        } catch  {
            return !0;
        }
    }
    function ng(e) {
        return e.renderer.isSessionCurrent(e.sessionId, e.snapshot.rendererVersion) ? {
            kind: "current"
        } : {
            kind: "changed",
            store: "renderer"
        };
    }
    function sg(e) {
        const t = [];
        for (const r of e.sessions){
            const e = r.host.meta?.title ?? r.renderer.name ?? "";
            t.push(`${r.verdict.toUpperCase().padEnd(4)} ${r.sessionId}  turns host=${r.host.turns ?? "-"} renderer=${r.renderer.turns ?? "-"}  pieces host=${r.hostReachable} renderer=${r.rendererReachable} mismatch=${r.byteMismatches.length} hostOnly=${r.hostReachableMissingInRenderer.length} rendererOnly=${r.rendererReachableMissingInHost.length} priorRoots=${r.hostPriorRoots} unreached=${r.hostDanglingBlobs}  origin=${r.host.manifest?.origin ?? "?"}${e ? `  "${e}"` : ""}`);
            for (const e of r.reasons)t.push(`      - ${e}`);
            for (const e of r.notes)t.push(`      · ${e}`);
        }
        const r = e.sessions.length, n = e.scoped ? `${r} host session(s) compared (scoped run)` : `${r} host session(s)`, s = e.cachedPassSessions > 0 ? `, ${e.cachedPassSessions} cached pass${1 === e.cachedPassSessions ? "" : "es"}` : "";
        return t.push(""), t.push(`${e.overall}: ${n}: ${e.counts.pass} pass, ${e.counts.lag} lag, ${e.counts.warn} warn, ${e.counts.fail} fail, ${e.counts.busy} skipped (busy); ${e.rendererOnlySessions.length} renderer-only chat(s) (legacy, expected); ${e.hostOnlySessions.length} host-only store(s)${e.hostOnlySessions.length > 0 ? ` (${e.hostOnlySessions.join(", ")})` : ""}${s}`), t.join("\n");
    }
    function og(e, t, r) {
        if (void 0 === e) return !1;
        if (0 === e.length) return t.turns.length > 0;
        let n;
        try {
            n = Ie.Y9z.fromBinary(e);
        } catch  {
            return !1;
        }
        return !(0 === n.turns.length || n.turns.length > t.turns.length) && n.turns.every((e, s)=>32 === e.length && r((0, R.nj)(e)) && (s === n.turns.length - 1 || ag(e, t.turns[s])));
    }
    function ig(e, t) {
        return e.every((e, r)=>ag(e, t[r]));
    }
    function ag(e, t) {
        if (e.byteLength !== t.byteLength) return !1;
        for(let r = 0; r < e.byteLength; r++)if (e[r] !== t[r]) return !1;
        return !0;
    }
    function cg(e) {
        const t = (0, wt.createHash)("sha256");
        return dg(t, e.owned ? "owned" : "released"), dg(t, JSON.stringify(e.entry)), t.digest("hex");
    }
    class lg {
        constructor(e){
            this.entries = new Map, this.pendingPrunes = 0, this.intervalMs = e.intervalMs, this.rotationWindowMs = e.rotationWindowMs ?? 36e5, this.rotationSlots = Math.max(1, Math.min(6, Math.floor(this.rotationWindowMs / this.intervalMs)));
        }
        lookup(e) {
            const t = this.entries.get(e.sessionId);
            if (void 0 === t) return {
                kind: "miss",
                reason: "empty"
            };
            if (t.identity.digest !== e.identity.digest || !t.identity.hostCurrentness.equals(e.identity.hostCurrentness)) return this.entries.delete(e.sessionId), this.pendingPrunes++, {
                kind: "miss",
                reason: "identity"
            };
            return e.nowMs - t.fullyWalkedAtMs >= this.rotationWindowMs || e.nowMs >= t.rotateAtMs ? {
                kind: "miss",
                reason: "rotation"
            } : {
                kind: "hit",
                comparison: t.comparison,
                fullyWalkedAtMs: t.fullyWalkedAtMs
            };
        }
        remember(e) {
            const t = this.entries.get(e.sessionId);
            var r, n;
            this.entries.set(e.sessionId, {
                identity: e.identity,
                comparison: e.comparison,
                fullyWalkedAtMs: e.nowMs,
                rotateAtMs: e.nowMs + (t?.identity.digest === e.identity.digest && t.identity.hostCurrentness.equals(e.identity.hostCurrentness) ? this.rotationWindowMs : (r = e.sessionId, n = this.rotationSlots, ((0, wt.createHash)("sha256").update(r).digest()[0] % n + 1) * this.intervalMs))
            });
        }
        forget(e) {
            const t = this.entries.delete(e);
            return t && this.pendingPrunes++, t;
        }
        retainScope(e) {
            let t = 0;
            for (const r of this.entries.keys())e.has(r) || (this.entries.delete(r), t++);
            return this.pendingPrunes += t, t;
        }
        clear() {
            const e = this.entries.size;
            return this.entries.clear(), this.pendingPrunes += e, e;
        }
        takePrunes() {
            const e = this.pendingPrunes;
            return this.pendingPrunes = 0, e;
        }
        get size() {
            return this.entries.size;
        }
    }
    function ug(e) {
        if (void 0 === e.host.manifest || void 0 !== e.host.manifestError) return;
        const t = (0, wt.createHash)("sha256");
        dg(t, JSON.stringify(e.host.manifest)), dg(t, JSON.stringify(e.host.listingProjection)), dg(t, JSON.stringify(e.host.meta)), dg(t, e.host.metaState), dg(t, function(e) {
            return (0, wt.createHash)("sha256").update(JSON.stringify(e)).digest("hex");
        }(e.rendererVersion)), dg(t, e.catalogIdentity);
        for (const r of e.host.listBlobIds().sort())dg(t, r);
        return {
            hostCurrentness: e.host.currentnessToken,
            digest: t.digest("hex")
        };
    }
    function dg(e, t) {
        const r = t ?? "<absent>";
        e.update(String(Buffer.byteLength(r))), e.update(":"), e.update(r);
    }
    const pg = 3e4, mg = 6e4, hg = 72e5;
    function fg(e) {
        const t = (0, ie.T8)({
            before: e.host,
            after: e.renderer
        });
        return 1 === t.length && "fileStatesV2" === t[0]?.field && function(e) {
            const t = Object.entries(e.host.fileStatesV2), r = Object.entries(e.renderer.fileStatesV2);
            return r.length < t.length && r.every(([t, r])=>{
                const n = e.host.fileStatesV2[t];
                return void 0 !== n && 0 === Buffer.compare(n.toBinary(), r.toBinary());
            });
        }(e) ? "warn" : "fail";
    }
    function gg(e, t, r, n) {
        const s = r.getHeader(e), o = r.getComposerData(e), i = r.getRootWriterDiagnostic(e, n), a = function(e) {
            if ("string" == typeof e && 0 !== e.length) try {
                const t = e.startsWith("~") ? new Uint8Array(Buffer.from(e.slice(1), "base64")) : (0, R.aD)(e);
                return 0 === t.length ? void 0 : Ie.Y9z.fromBinary(t);
            } catch  {
                return;
            }
        }(o?.conversationState), c = function(e) {
            const t = e?.fullConversationHeadersOnly;
            if (!Array.isArray(t)) return;
            let r = 0, n = 0;
            for (const e of t){
                const t = e.type;
                1 === t ? r++ : 2 === t && n++;
            }
            return {
                user: r,
                ai: n
            };
        }(o);
        return {
            host: {
                manifest: t.manifest,
                manifestError: t.manifestError,
                listingProjection: t.listingProjection,
                meta: t.meta,
                metaState: t.metaState,
                turns: t.rootState?.turns.length
            },
            renderer: {
                hasHeader: void 0 !== s,
                hasComposerData: void 0 !== o,
                name: s?.name ?? ("string" == typeof o?.name ? o.name : void 0),
                isArchived: s?.isArchived,
                isSubagent: s?.isSubagent,
                lastUpdatedAtMs: s?.lastUpdatedAt ?? ("number" == typeof o?.lastUpdatedAt ? o.lastUpdatedAt : void 0),
                createdAtMs: s?.createdAt ?? ("number" == typeof o?.createdAt ? o.createdAt : void 0),
                workspaceId: s?.workspaceId,
                activeGenerationAtMs: "number" == typeof o?.unfinishedRunAt ? o.unfinishedRunAt : "generating" === o?.status || Array.isArray(o?.generatingBubbleIds) && o.generatingBubbleIds.length > 0 ? s?.lastUpdatedAt ?? ("number" == typeof o?.lastUpdatedAt ? o.lastUpdatedAt : void 0) : void 0,
                turns: a?.turns.length,
                userBubbles: c?.user,
                aiBubbles: c?.ai
            },
            hostState: t.rootState,
            rendererState: a,
            header: s,
            composerData: o,
            rootWriterDiagnostic: i,
            metaState: t.metaState,
            hostRootReasons: t.rootReasons
        };
    }
    function yg(e, t, r) {
        return {
            hostReachable: 0,
            rendererReachable: 0,
            hostReachableMissingInRenderer: [],
            byteMismatches: [],
            rendererReachableMissingInHost: [],
            rendererReachableUnreachableFromHostRoot: 0,
            hostPriorRoots: 0,
            hostDanglingBlobs: 0,
            hostClosureFailures: [],
            rendererClosureFailures: [],
            hostStoreUnreadable: !1,
            hostRootBlobIdHex: void 0,
            rendererRootBlobIdHex: void 0,
            rootDifference: void 0,
            rendererRootWriterDiagnostic: {
                kind: "unavailable"
            },
            sessionId: e,
            verdict: "busy",
            reasons: [],
            notes: [
                vg(r)
            ],
            host: t.host,
            renderer: t.renderer,
            rendererRootWriterDiagnostic: t.rootWriterDiagnostic
        };
    }
    function wg(e, t) {
        return {
            ...e,
            hostReachable: 0,
            rendererReachable: 0,
            hostReachableMissingInRenderer: [],
            byteMismatches: [],
            rendererReachableMissingInHost: [],
            rendererReachableUnreachableFromHostRoot: 0,
            hostPriorRoots: 0,
            hostDanglingBlobs: 0,
            hostClosureFailures: [],
            rendererClosureFailures: [],
            hostStoreUnreadable: !1,
            hostRootBlobIdHex: void 0,
            rendererRootBlobIdHex: void 0,
            rootDifference: void 0,
            rendererRootWriterDiagnostic: {
                kind: "unavailable"
            },
            verdict: "busy",
            reasons: [],
            notes: [
                vg(`${t} store changed during compare`)
            ]
        };
    }
    function vg(e) {
        return `skipped (busy): ${e}; judged once quiet for ${mg / 1e3} s`;
    }
    async function _g(e, t, r, n, s, o, i, a) {
        const c = kr(t, e);
        let l = !1;
        try {
            const o = r.getSessionVersion(e), a = {
                hostCurrentness: c.currentnessToken,
                rendererVersion: o
            };
            let p;
            const m = i?.catalogIdentities.get(e);
            if (void 0 !== i && void 0 !== m && (p = ug({
                storage: t,
                sessionId: e,
                host: c,
                rendererVersion: o,
                catalogIdentity: m
            }), void 0 !== p)) {
                const o = i.cache.lookup({
                    sessionId: e,
                    identity: p,
                    nowMs: n
                });
                if ("hit" === o.kind) {
                    const n = s?.yieldIfNeeded();
                    void 0 !== n && await n;
                    const l = tg({
                        sessionId: e,
                        storage: t,
                        host: c,
                        renderer: r,
                        snapshot: a
                    });
                    return "deleted" === l.kind ? void i.cache.forget(e) : ("changed" === l.kind && i.cache.forget(e), {
                        comparison: "current" === l.kind ? (u = o.comparison, d = o.fullyWalkedAtMs, {
                            ...u,
                            notes: [
                                ...u.notes,
                                `cached pass: identities unchanged; last full comparison ${new Date(d).toISOString()}`
                            ]
                        }) : wg(o.comparison, l.store),
                        snapshot: a,
                        cacheIdentity: p,
                        mode: "cached",
                        rotationCheck: !1
                    });
                }
                "rotation" === o.reason && (l = !0);
            }
            const h = gg(e, c, r, n), f = s?.yieldIfNeeded();
            if (void 0 !== f && await f, void 0 === h.host.manifest && void 0 === h.host.manifestError) return void i?.cache.forget(e);
            const g = function(e) {
                const t = void 0 === e.hostUpdatedAtMs ? void 0 : e.nowMs - e.hostUpdatedAtMs;
                if (void 0 !== t && t < mg) return `host checkpoint ${Math.round(t / 1e3)} s ago`;
                const r = void 0 === e.rendererUpdatedAtMs ? void 0 : e.nowMs - e.rendererUpdatedAtMs;
                if (void 0 !== r && r < mg) return `renderer header write ${Math.round(r / 1e3)} s ago`;
                if (void 0 !== e.rendererActiveGenerationAtMs && e.nowMs - e.rendererActiveGenerationAtMs <= hg) return "renderer reports an active generation";
                return void 0 !== e.hostTurns && void 0 !== e.rendererTurns && e.hostTurns === e.rendererTurns + 1 ? "host root one turn ahead of the renderer transcript" : void 0;
            }({
                hostUpdatedAtMs: h.host.meta?.updatedAtMs,
                rendererUpdatedAtMs: h.renderer.lastUpdatedAtMs,
                rendererActiveGenerationAtMs: h.renderer.activeGenerationAtMs,
                hostTurns: h.host.turns,
                rendererTurns: h.renderer.turns,
                nowMs: n
            });
            let y;
            try {
                y = {
                    kind: "comparison",
                    comparison: void 0 === g ? await Ag(e, c, r, h, s) : yg(e, h, g)
                };
            } catch (e) {
                y = {
                    kind: "error",
                    error: e
                };
            }
            const w = tg({
                sessionId: e,
                storage: t,
                host: c,
                renderer: r,
                snapshot: a
            });
            switch(w.kind){
                case "current":
                    return {
                        comparison: "comparison" === y.kind ? y.comparison : bg(e, y.error),
                        snapshot: a,
                        cacheIdentity: p,
                        mode: "full",
                        rotationCheck: l
                    };
                case "deleted":
                    return void i?.cache.forget(e);
                case "changed":
                    return {
                        comparison: "comparison" === y.kind ? wg(y.comparison, w.store) : yg(e, h, `${w.store} store changed during compare`),
                        snapshot: a,
                        cacheIdentity: p,
                        mode: "full",
                        rotationCheck: l
                    };
            }
        } finally{
            try {
                c.close();
            } catch (t) {
                o(`host snapshot close failed for ${e}: ${t instanceof Error ? t.message : String(t)}`);
            }
        }
        var u, d;
    }
    async function Ag(e, t, r, n, s) {
        const { hostState: o, rendererState: i, header: a, composerData: c, metaState: l } = n, u = n.host.manifest, d = n.host.meta, p = [
            ...n.hostRootReasons
        ], m = (e)=>t.getBlob(e);
        let h = new Map, f = [];
        const g = void 0 === s ? void 0 : {
            yieldIfNeeded: ()=>s.yieldIfNeeded()
        };
        if (void 0 !== o) {
            const e = await Or(o, async (e)=>m((0, R.nj)(e)), g);
            h = e.blobs, f = e.failures, e.failures.length > 0 && p.push(`host DB is internally inconsistent: ${e.failures.length} reachable piece(s) missing/invalid`);
        }
        let y = new Map, w = [];
        if (void 0 !== i) {
            const e = await Or(i, async (e)=>r.getBlob((0, R.nj)(e)), g);
            y = e.blobs, w = e.failures;
        }
        const v = [], _ = [];
        for (const [e, t] of h){
            const n = r.getBlob(e);
            if (void 0 === n) {
                v.push(e);
                const t = s?.yieldIfNeeded();
                void 0 !== t && await t;
            } else await eg(t, n, s) || _.push(e);
        }
        const A = [];
        let S = 0;
        for (const [e, t] of y){
            if (h.has(e)) {
                const e = s?.yieldIfNeeded();
                void 0 !== e && await e;
                continue;
            }
            const r = m(e);
            if (void 0 === r) {
                A.push(e);
                const t = s?.yieldIfNeeded();
                void 0 !== t && await t;
            } else S++, await eg(r, t, s) || _.push(e);
        }
        const b = s?.yieldIfNeeded();
        void 0 !== b && await b;
        const E = t.listBlobIds(), I = new Set(E), C = s?.yieldIfNeeded();
        void 0 !== C && await C;
        let k = 0, x = 0;
        for (const e of E){
            if (h.has(e) || e === u?.latestRootBlobIdHex) continue;
            void 0 !== o && og(m(e), o, (e)=>I.has(e)) ? k++ : x++;
            const t = s?.yieldIfNeeded();
            void 0 !== t && await t;
        }
        const T = o?.turns.length, B = i?.turns.length, P = u?.latestRootBlobIdHex;
        let J, M;
        const q = [];
        let D = "pass";
        const O = (e)=>{
            D = "fail", p.push(e);
        }, N = (e)=>{
            "pass" === D && (D = "warn"), p.push(e);
        };
        if ((n.hostRootReasons.length > 0 || f.length > 0) && (D = "fail"), _.length > 0 && O(`${_.length} piece(s) have different bytes in the two stores`), v.length > 0 && O(`${v.length} host-reachable piece(s) missing from the renderer store (mirror drift)`), A.length > 0 && O(`${A.length} renderer-reachable piece(s) missing from the host DB (host write drift)`), w.length > 0 && N(`renderer store is missing ${w.length} of its own reachable piece(s); renderer-side comparison incomplete`), void 0 === c ? N("no composerData in the renderer store for this session") : void 0 === i && (void 0 === o || 0 === T ? q.push("no completed turn in either store") : N("renderer composerData carries no decodable conversationState")), void 0 === a && q.push("no renderer header row for this session"), void 0 !== u && void 0 !== o && void 0 !== i && T === B && (J = (0, R.nj)(await (0, R.Bk)(i.toBinary())), u.latestRootBlobIdHex !== J)) {
            const e = function(e, t, r, n) {
                if (e.turns.length !== t.turns.length) return "different";
                if (e.turns.every((e, r)=>ag(e, t.turns[r]))) return "same";
                const s = e.turns.length - 1;
                if (s < 0 || !e.turns.slice(0, s).every((e, r)=>ag(e, t.turns[r]))) return "different";
                const o = r.getBlob((0, R.nj)(e.turns[s])), i = n.getBlob((0, R.nj)(t.turns[s]));
                if (void 0 === o || void 0 === i) return "different";
                try {
                    const e = Ie.cmU.fromBinary(o), t = Ie.cmU.fromBinary(i);
                    if ("agentConversationTurn" !== e.turn.case || "agentConversationTurn" !== t.turn.case || !ag(e.turn.value.userMessage, t.turn.value.userMessage)) return "different";
                    const r = e.turn.value.steps, n = t.turn.value.steps;
                    return r.length < n.length && ig(r, n) ? "renderer-ahead" : n.length < r.length && ig(n, r) ? "host-ahead" : "different";
                } catch  {
                    return "different";
                }
            }(o, i, t, r);
            if ("renderer-ahead" === e) "fail" !== D && (D = "lag"), p.push("host bookmark lags within the renderer's current turn");
            else if ("host-ahead" === e) N("host bookmark is ahead within the renderer's current turn");
            else if ("same" === e) {
                M = (0, ie.IQ)({
                    host: o,
                    renderer: i
                });
                const e = s?.yieldIfNeeded();
                void 0 !== e && await e;
                const t = 0 === (F = M).fields.length ? "no decoded field-value changes" : F.fields.map((e)=>`${e.field}:${e.shape} host=${e.hostCount} renderer=${e.rendererCount}`).join(", ");
                switch(M.kind){
                    case "identical":
                    case "encoding-only":
                        q.push(`root encoding differs while decoded state matches (${t})`);
                        break;
                    case "compacted-token-metadata":
                        q.push(`root compacted token metadata differs while durable state matches (${t})`);
                        break;
                    case "observational":
                        N(`host and renderer observational root state differ at the same turn count (${t})`);
                        break;
                    case "durable":
                        "warn" === fg({
                            host: o,
                            renderer: i
                        }) ? N(`host and renderer known low-harm projection root state differ at the same turn count (${t})`) : O(`host and renderer durable root state differ at the same turn count (${t})`);
                        break;
                    default:
                        M.kind;
                }
            } else O("host and renderer durable root state differ at the same turn count");
        }
        var F;
        if (void 0 !== T && void 0 !== B && (T > B + 1 ? O(`host root has ${T} turn(s) but the renderer has ${B}: host is ahead of the transcript`) : T < B && ("fail" !== D && (D = "lag"), p.push(`host bookmark lags: ${T} turn(s) on the host root vs ${B} in the renderer`))), x > 0 && 0 === S) {
            const e = `${x} host piece(s) no bookmark ever reached`;
            void 0 !== T && T === B ? q.push(`${e} (aborted turn)`) : N(`${e} (aborted turn, or a turn lost before its checkpoint)`);
        }
        if (void 0 !== d && void 0 !== u && d.latestRootBlobIdHex !== u.latestRootBlobIdHex && q.push("meta.json root pointer differs from the manifest root (sidecar not caught up)"), void 0 !== d && void 0 !== n.host.listingProjection) {
            const e = n.host.listingProjection;
            d.title === e.title && d.isArchived === (e.isArchived ?? !1) && d.updatedAtMs === e.updatedAtMs || q.push("meta.json title/isArchived/updatedAtMs differs from session.sqlite projection");
        }
        return "unusable" === l && q.push("meta.json unusable"), void 0 !== d && void 0 !== a && (void 0 !== d.title && void 0 !== a.name && d.title !== a.name && q.push(`title differs: host "${d.title}" vs renderer "${a.name}"`), d.isArchived !== a.isArchived && q.push(`isArchived differs: host ${d.isArchived} vs renderer ${a.isArchived}`), void 0 !== d.updatedAtMs && void 0 !== a.lastUpdatedAt && Math.abs(d.updatedAtMs - a.lastUpdatedAt) > pg && q.push(`recency differs: host updatedAtMs ${new Date(d.updatedAtMs).toISOString()} vs renderer lastUpdatedAt ${new Date(a.lastUpdatedAt).toISOString()} (${d.updatedAtMs > a.lastUpdatedAt ? "host" : "renderer"} ahead by ${Math.round(Math.abs(d.updatedAtMs - a.lastUpdatedAt) / 1e3)} s)`)), "fail" === D && void 0 === J && void 0 !== i && (J = (0, R.nj)(await (0, R.Bk)(i.toBinary()))), {
            sessionId: e,
            verdict: D,
            reasons: p,
            notes: q,
            host: n.host,
            renderer: n.renderer,
            hostReachable: h.size,
            rendererReachable: y.size,
            hostReachableMissingInRenderer: v,
            byteMismatches: _,
            rendererReachableMissingInHost: A,
            rendererReachableUnreachableFromHostRoot: S,
            hostPriorRoots: k,
            hostDanglingBlobs: x,
            hostClosureFailures: f,
            rendererClosureFailures: w,
            hostRootBlobIdHex: P,
            rendererRootBlobIdHex: J,
            rootDifference: M,
            rendererRootWriterDiagnostic: n.rootWriterDiagnostic
        };
    }
    async function Sg(e) {
        const t = new ft.DH(e.storageRoot), r = e.log ?? (()=>{}), n = e.nowMs ?? Date.now(), s = Gf(e.stateDbPath), o = new Map, i = new Map, a = {
            cachedPasses: 0,
            cachePrunes: e.passCache?.cache.takePrunes() ?? 0
        };
        try {
            const c = t.listSessionIds(), l = void 0 === e.sessionIds ? void 0 : new Set(e.sessionIds), u = [];
            let d = !1;
            for (const a of c){
                if (void 0 !== l && !l.has(a)) continue;
                d && void 0 !== e.scheduler && await e.scheduler.yieldNow(), d = !0, r(`comparing ${a}`);
                const c = Cr.capture(t, a);
                try {
                    const o = await _g(a, t, s, n, e.scheduler, r, e.passCache);
                    void 0 !== o && (u.push(o.comparison), i.set(a, o));
                } catch (r) {
                    if (e.passCache?.cache.forget(a), !t.hasSessionStore(a) || r instanceof $t.C8) continue;
                    const n = bg(a, r), s = Cr.capture(t, a);
                    c.sameStoreEnvelope(s) ? (u.push(n), o.set(a, s)) : u.push(wg(n, "host"));
                }
            }
            const p = e.scheduler?.yieldIfNeeded();
            void 0 !== p && await p;
            const m = s.listHeaders(), h = u.flatMap((r)=>{
                const c = i.get(r.sessionId);
                if (void 0 === c) try {
                    if (!t.hasSessionStore(r.sessionId)) return [];
                    const e = o.get(r.sessionId);
                    return !1 === e?.matches(t, r.sessionId) ? [
                        wg(r, "host")
                    ] : [
                        r
                    ];
                } catch  {
                    return [
                        r
                    ];
                }
                const l = function(e) {
                    if (!rg(e.storage, e.sessionId)) return {
                        kind: "deleted"
                    };
                    try {
                        if (!e.snapshot.hostCurrentness.matches(e.storage, e.sessionId)) return {
                            kind: "changed",
                            store: "host"
                        };
                    } catch  {
                        return rg(e.storage, e.sessionId) ? {
                            kind: "changed",
                            store: "host"
                        } : {
                            kind: "deleted"
                        };
                    }
                    return ng(e);
                }({
                    sessionId: r.sessionId,
                    storage: t,
                    renderer: s,
                    snapshot: c.snapshot
                });
                switch(l.kind){
                    case "current":
                        return "cached" === c.mode && "pass" === r.verdict ? a.cachedPasses++ : "pass" === r.verdict && void 0 !== c.cacheIdentity && void 0 !== e.passCache ? e.passCache.cache.remember({
                            sessionId: r.sessionId,
                            identity: c.cacheIdentity,
                            comparison: r,
                            nowMs: n
                        }) : e.passCache?.cache.forget(r.sessionId), [
                            r
                        ];
                    case "deleted":
                        return e.passCache?.cache.forget(r.sessionId), [];
                    case "changed":
                        return e.passCache?.cache.forget(r.sessionId), [
                            wg(r, l.store)
                        ];
                }
            });
            a.cachePrunes += e.passCache?.cache.takePrunes() ?? 0;
            const f = h.map((e)=>e.sessionId), g = new Set(f), y = m.filter((e)=>!e.isSubagent && (void 0 === l || l.has(e.composerId)) && !g.has(e.composerId)).map((e)=>e.composerId).sort(), w = new Set(m.map((e)=>e.composerId)), v = f.filter((e)=>!w.has(e)), _ = {
                pass: 0,
                lag: 0,
                warn: 0,
                fail: 0,
                busy: 0
            };
            for (const e of h)_[e.verdict]++;
            const A = h.filter((e)=>"cached" !== i.get(e.sessionId)?.mode).length, S = h.filter((e)=>!0 === i.get(e.sessionId)?.rotationCheck).length;
            return {
                stateDbPath: e.stateDbPath,
                sessionsRoot: t.sessionsDir,
                generatedAtMs: n,
                sessions: h,
                scoped: void 0 !== e.sessionIds,
                hostSessionCount: f.length,
                rendererOnlySessions: y,
                hostOnlySessions: v,
                counts: _,
                overall: 0 === _.fail && 0 === _.lag ? "PASS" : "FAIL",
                fullCheckSessions: A,
                cachedPassSessions: a.cachedPasses,
                rotationCheckSessions: S,
                cacheEntries: e.passCache?.cache.size ?? 0,
                cachePrunes: a.cachePrunes
            };
        } finally{
            s.close();
        }
    }
    function bg(e, t) {
        return {
            hostReachable: 0,
            rendererReachable: 0,
            hostReachableMissingInRenderer: [],
            byteMismatches: [],
            rendererReachableMissingInHost: [],
            rendererReachableUnreachableFromHostRoot: 0,
            hostPriorRoots: 0,
            hostDanglingBlobs: 0,
            hostClosureFailures: [],
            rendererClosureFailures: [],
            hostStoreUnreadable: !1,
            hostRootBlobIdHex: void 0,
            rendererRootBlobIdHex: void 0,
            rootDifference: void 0,
            rendererRootWriterDiagnostic: {
                kind: "unavailable"
            },
            hostStoreUnreadable: !0,
            sessionId: e,
            verdict: "fail",
            reasons: [
                `host DB could not be read: ${t instanceof Error ? t.message : String(t)}`
            ],
            notes: [],
            host: {
                metaState: "unusable"
            },
            renderer: {
                hasHeader: !1,
                hasComposerData: !1
            }
        };
    }
    const Eg = new Set([
        "git_auto_accept",
        "transcript_recovery",
        "restore_or_rewind",
        "goal_mutation",
        "migration_or_import"
    ]);
    function Ig(e) {
        const t = ("durable" === e.rootDifference?.kind ? e.rootDifference.fields : []).slice(0, 6).map((e)=>{
            return {
                field: (0, ie.vX)(e.field),
                shape: e.shape,
                direction: (t = e.hostCount, r = e.rendererCount, r > t ? "added" : r < t ? "removed" : "changed"),
                hostCountBucket: Tg(e.hostCount),
                rendererCountBucket: Tg(e.rendererCount)
            };
            var t, r;
        }), r = function(e) {
            const t = [
                ...new Set(e.map((e)=>e.field))
            ];
            return 0 === t.length ? "none" : 1 === t.length ? t[0] : "mixed";
        }(t), n = function(e) {
            const t = [];
            e.byteMismatches.length > 0 && t.push("piece_bytes");
            e.hostReachableMissingInRenderer.length > 0 && t.push("renderer_missing_piece");
            e.rendererReachableMissingInHost.length > 0 && t.push("host_missing_piece");
            e.hostClosureFailures.length > 0 && t.push("host_closure");
            !0 === e.hostStoreUnreadable && t.push("host_unreadable");
            "durable" === e.rootDifference?.kind && t.push("root_durable");
            void 0 !== e.host.turns && void 0 !== e.renderer.turns && e.host.turns > e.renderer.turns + 1 && t.push("host_transcript_ahead");
            0 === t.length && t.push("unknown");
            return t.slice(0, 6);
        }(e), s = n[0] ?? "unknown", o = {
            primaryFailureKind: s,
            failureKinds: n,
            rootKind: e.rootDifference?.kind ?? "none",
            changedFields: t,
            changedField: r,
            turnDelta: Rg(e),
            pieceBucket: Tg(e.byteMismatches.length + e.hostReachableMissingInRenderer.length + e.rendererReachableMissingInHost.length),
            closureBucket: Tg(e.hostClosureFailures.length + e.rendererClosureFailures.length),
            hostOrigin: (i = e.host.manifest?.origin, "host-native" === i || "migrated-from-renderer-cas" === i ? i : "unknown")
        };
        var i;
        switch(s){
            case "piece_bytes":
                return kg(o, "piece_bytes", "both");
            case "renderer_missing_piece":
                return kg(o, "renderer_missing_piece", "renderer");
            case "host_missing_piece":
                return kg(o, "host_missing_piece", "host");
            case "host_closure":
                return kg(o, "host_closure", "host");
            case "host_unreadable":
                return kg(o, "host_unreadable", "host");
            case "host_transcript_ahead":
                return kg(o, "host_transcript_ahead", "host");
            case "root_durable":
                return function(e, t) {
                    const r = e.rendererRootWriterDiagnostic;
                    if (void 0 === r || "missing" === r.kind) return kg(t, "unknown", "unknown", "missing");
                    if ("unavailable" === r.kind) return kg(t, "unknown", "unknown", "unavailable");
                    const n = r.record;
                    if (void 0 === e.rendererRootBlobIdHex || n.rendererRootBlobIdHex !== e.rendererRootBlobIdHex) return kg(t, "unknown", "unknown", "stale_root");
                    const s = t.changedFields, o = n.writers.filter((e)=>e.fields.some((e)=>s.some((t)=>t.field === e.field && t.direction === e.direction)));
                    if (0 === o.length) {
                        const e = [
                            ...n.writers
                        ].reverse().find(Cg);
                        return void 0 !== e ? {
                            ...t,
                            primaryCause: "unknown",
                            divergentSide: "unknown",
                            writerReason: e.reason,
                            writerOwnership: e.hostOwnedAtWrite,
                            writerMatch: "candidate_exact_root",
                            writerFields: xg(e),
                            writersOmitted: n.writersOmitted
                        } : kg(t, "unknown", "unknown", "exact_root_no_field_overlap", n.writersOmitted);
                    }
                    const i = o[o.length - 1], a = (e.rootDifference?.fields.length ?? 0) === s.length && n.writers.every((e)=>0 === e.fieldsOmitted), c = n.predecessorVerified && void 0 !== n.previousRendererRootBlobIdHex && n.previousRendererRootBlobIdHex === e.hostRootBlobIdHex && 1 === o.length && 0 === n.writersOmitted && a, l = c ? "proven_transition" : "candidate_exact_root", u = c ? Eg.has(i.reason) ? "renderer_root_write" : "host_hydrate" === i.reason || "agent_checkpoint" === i.reason ? "projection_or_persist" : "unknown" : "unknown";
                    return {
                        ...t,
                        primaryCause: u,
                        divergentSide: c && Eg.has(i.reason) ? "renderer" : "unknown",
                        writerReason: i.reason,
                        writerOwnership: i.hostOwnedAtWrite,
                        writerMatch: l,
                        writerFields: xg(i),
                        writersOmitted: n.writersOmitted
                    };
                }(e, o);
            case "unknown":
                return kg(o, "unknown", "unknown");
        }
    }
    function Cg(e) {
        return "other" === e.reason && 0 === e.fieldsOmitted && 1 === e.fields.length && "other" === e.fields[0]?.field && "changed" === e.fields[0]?.direction;
    }
    function kg(e, t, r, n = "missing", s = 0) {
        return {
            ...e,
            primaryCause: t,
            divergentSide: r,
            writerReason: "none",
            writerOwnership: "none",
            writerMatch: n,
            writerFields: [],
            writersOmitted: s
        };
    }
    function xg(e) {
        return e.fields.slice(0, 4).map((e)=>`${e.field}:${e.direction}`);
    }
    function Tg(e) {
        return e <= 0 ? "0" : 1 === e ? "1" : e <= 4 ? "2_4" : e <= 16 ? "5_16" : e <= 64 ? "17_64" : "65_plus";
    }
    function Rg(e) {
        const t = e.host.turns, r = e.renderer.turns;
        return void 0 === t || void 0 === r ? "unknown" : t === r ? "same" : t === r + 1 ? "host_1" : t > r ? "host_2plus" : "renderer_ahead";
    }
    const Bg = "compare.lock", Pg = 6e5;
    class Jg {
        constructor(e, t, r, n = 18e4){
            this.filePath = e, this.pid = t, this.now = r, this.staleMs = n, this.token = `${t}:${(0, wt.randomUUID)()}`;
        }
        acquire() {
            const e = this.connection();
            e.exec("BEGIN IMMEDIATE");
            try {
                const t = e.prepare("SELECT token, pid, heartbeatMs FROM lease WHERE id = 1").get(), r = this.now(), n = void 0 !== t && t.token !== this.token && r - Number(t.heartbeatMs) <= this.staleMs;
                return n || e.prepare("\n\t\t\t\t\tINSERT INTO lease (id, token, pid, heartbeatMs) VALUES (1, ?, ?, ?)\n\t\t\t\t\tON CONFLICT(id) DO UPDATE SET token = excluded.token, pid = excluded.pid, heartbeatMs = excluded.heartbeatMs\n\t\t\t\t").run(this.token, this.pid, r), e.exec("COMMIT"), !n;
            } catch (t) {
                try {
                    e.exec("ROLLBACK");
                } catch (e) {
                    throw new AggregateError([
                        t,
                        e
                    ], "Catalog compare lease transaction and rollback failed");
                }
                throw t;
            }
        }
        holderPid() {
            const e = this.connection().prepare("SELECT pid FROM lease WHERE id = 1").get();
            return void 0 === e ? void 0 : Number(e.pid);
        }
        heartbeatIntervalMs() {
            return Math.max(1, Math.floor(this.staleMs / 3));
        }
        release() {
            const e = this.db;
            if (void 0 !== e) try {
                e.prepare("DELETE FROM lease WHERE id = 1 AND token = ?").run(this.token);
            } finally{
                e.close(), this.db = void 0;
            }
        }
        connection() {
            if (void 0 === this.db) {
                const e = new (process.getBuiltinModule("node:sqlite")).DatabaseSync(this.filePath);
                try {
                    e.exec("\n\t\t\t\t\tPRAGMA busy_timeout = 5000;\n\t\t\t\t\tCREATE TABLE IF NOT EXISTS lease (\n\t\t\t\t\t\tid INTEGER PRIMARY KEY CHECK (id = 1),\n\t\t\t\t\t\ttoken TEXT NOT NULL,\n\t\t\t\t\t\tpid INTEGER NOT NULL,\n\t\t\t\t\t\theartbeatMs INTEGER NOT NULL\n\t\t\t\t\t);\n\t\t\t\t"), this.db = e;
                } catch (t) {
                    throw e.close(), t;
                }
            }
            return this.db;
        }
    }
    const Mg = "agent_host.storage.compare", qg = [
        "pass",
        "lag",
        "warn",
        "fail",
        "busy"
    ];
    class Dg {
        constructor(e){
            this.options = e, this.leaseSkipLogged = !1, this.pendingCheckpointSessions = new Set, this.queuedResolvers = [], this.failureStateBySession = new Map, this.disposed = !1, this.now = e.now ?? Date.now, this.setTimer = e.setTimeout ?? ((e, t)=>setTimeout(e, t)), this.clearTimer = e.clearTimeout ?? ((e)=>clearTimeout(e)), this.activationDelayMs = e.activationDelayMs ?? 15e3, this.intervalMs = e.intervalMs ?? Pg, this.checkpointDebounceMs = e.checkpointDebounceMs ?? mg;
        }
        start() {
            this.disposed || void 0 !== this.periodicTimer || (this.periodicTimer = this.setTimer(()=>{
                this.runGated("activation", this.options.periodicSessionIds), this.schedulePeriodic();
            }, this.activationDelayMs));
        }
        noteCheckpoint(e) {
            this.disposed || (this.pendingCheckpointSessions.add(e), void 0 !== this.checkpointTimer && this.clearTimer(this.checkpointTimer), this.checkpointTimer = this.setTimer(()=>{
                this.checkpointTimer = void 0;
                const e = [
                    ...this.pendingCheckpointSessions
                ].sort();
                this.pendingCheckpointSessions.clear(), this.run({
                    trigger: "checkpoint",
                    sessionIds: e
                });
            }, this.checkpointDebounceMs));
        }
        run(e) {
            return this.runGated(e.trigger, ()=>e.sessionIds);
        }
        runGated(e, t) {
            return this.disposed ? Promise.resolve() : "checkpoint" === e || this.canCompare(!0) ? this.runCovered({
                trigger: e,
                sessionIds: t()
            }) : (this.dropCatalogLease(), Promise.resolve());
        }
        runCovered(e) {
            return "checkpoint" === e.trigger || this.holdsCatalogLease() ? void 0 !== this.running ? (this.queued = void 0 === this.queued ? e : function(e, t) {
                if ("checkpoint" === e.trigger && "checkpoint" !== t.trigger) return e;
                if ("checkpoint" === t.trigger && "checkpoint" !== e.trigger) return t;
                const r = void 0 === e.sessionIds || void 0 === t.sessionIds ? void 0 : [
                    ...new Set([
                        ...e.sessionIds,
                        ...t.sessionIds
                    ])
                ].sort();
                return {
                    trigger: e.trigger,
                    sessionIds: r
                };
            }(this.queued, e), new Promise((e)=>{
                this.queuedResolvers.push(e);
            })) : (this.runningTrigger = e.trigger, this.running = this.runOne(e).finally(()=>{
                this.running = void 0, this.runningTrigger = void 0;
                const e = this.queued, t = this.queuedResolvers;
                if (this.queued = void 0, this.queuedResolvers = [], void 0 !== e) this.run(e).finally(()=>{
                    for (const e of t)e();
                });
                else for (const e of t)e();
            }), this.running) : Promise.resolve();
        }
        dispose() {
            this.disposed = !0, void 0 !== this.periodicTimer && this.clearTimer(this.periodicTimer), void 0 !== this.checkpointTimer && this.clearTimer(this.checkpointTimer), this.dropCatalogLease(), this.pendingCheckpointSessions.clear(), this.failureStateBySession.clear(), this.queued = void 0;
            for (const e of this.queuedResolvers)e();
            this.queuedResolvers = [];
        }
        holdsCatalogLease() {
            const e = this.options.catalogLease;
            if (void 0 === e) return !0;
            let t;
            try {
                t = e.acquire();
            } catch (e) {
                return this.bestEffortSink(()=>this.options.sinks.log.warn(`[hostStorage] catalog compare lease unavailable; skipping this catalog run: ${e instanceof Error ? e.message : String(e)}`), "interval"), !1;
            }
            if (!t) {
                let t;
                try {
                    t = e.holderPid();
                } catch (e) {
                    this.bestEffortSink(()=>this.options.sinks.log.error("[hostStorage] catalog compare lease holder could not be read", e), "interval");
                }
                return void 0 !== this.heartbeatTimer && (this.clearTimer(this.heartbeatTimer), this.heartbeatTimer = void 0), this.releaseCatalogLease(e), this.leaseSkipLogged || (this.leaseSkipLogged = !0, this.bestEffortSink(()=>this.options.sinks.log.info(`[hostStorage] catalog compares run in another window (pid ${t ?? "?"}); this host compares only the sessions it checkpoints`), "interval")), !1;
            }
            if (this.leaseSkipLogged = !1, void 0 === this.heartbeatTimer) {
                const t = ()=>{
                    this.heartbeatTimer = this.setTimer(()=>{
                        if (this.heartbeatTimer = void 0, !this.canCompare(!1)) {
                            const e = void 0 !== this.running && "checkpoint" !== this.runningTrigger;
                            if (this.dropCatalogLease(), !e) return;
                        }
                        let r;
                        try {
                            r = e.acquire();
                        } catch (e) {
                            this.bestEffortSink(()=>this.options.sinks.log.warn(`[hostStorage] catalog compare lease heartbeat failed; retaining ownership until stale: ${e instanceof Error ? e.message : String(e)}`), "interval");
                        }
                        !1 === r && this.releaseCatalogLease(e), !1 === r || this.disposed && (void 0 === this.running || "checkpoint" === this.runningTrigger) || t();
                    }, e.heartbeatIntervalMs());
                };
                t();
            }
            return !0;
        }
        releaseCatalogLease(e) {
            this.options.onCatalogLeaseLost?.();
            try {
                e.release();
            } catch (e) {
                this.bestEffortSink(()=>this.options.sinks.log.error("[hostStorage] catalog compare lease could not be released", e), "interval");
            }
        }
        schedulePeriodic() {
            this.disposed || (this.periodicTimer = this.setTimer(()=>{
                this.runGated("interval", this.options.periodicSessionIds), this.schedulePeriodic();
            }, this.intervalMs));
        }
        canCompare(e) {
            return !this.disposed && this.options.shouldCompare(e);
        }
        dropCatalogLease() {
            if (void 0 !== this.running && "checkpoint" !== this.runningTrigger) return void this.running.finally(()=>{
                this.canCompare(!1) || this.dropCatalogLease();
            });
            void 0 !== this.heartbeatTimer && (this.clearTimer(this.heartbeatTimer), this.heartbeatTimer = void 0);
            const e = this.options.catalogLease;
            void 0 !== e && this.releaseCatalogLease(e);
        }
        async runOne(e) {
            const { sinks: t } = this.options, r = this.now();
            let n;
            try {
                n = await this.options.runCompare(e);
            } catch (r) {
                return void this.bestEffortSink(()=>t.log.error(`[hostStorage] compare (${e.trigger}) could not run`, r), e.trigger);
            }
            if (this.disposed) return;
            const s = Math.max(0, this.now() - r);
            this.bestEffortSink(()=>{
                t.log.info(`[hostStorage] compare (${e.trigger}, ${n.sessions.length} session(s), ${s} ms)\n${this.options.formatSummary(n)}`);
            }, e.trigger);
            const o = this.options.currentEnablementSource ?? "sticky", i = {
                trigger: e.trigger,
                current_enablement_source: o
            };
            for (const r of qg)this.bestEffortSink(()=>{
                t.metric(`${Mg}.${r}`, n.counts[r], i);
            }, e.trigger);
            this.bestEffortSink(()=>{
                t.metric(`${Mg}.full_checks`, n.fullCheckSessions, i);
            }, e.trigger);
            const a = "interval" === e.trigger ? [
                [
                    "unchanged_skips",
                    n.cachedPassSessions
                ],
                [
                    "rotation_checks",
                    n.rotationCheckSessions
                ],
                [
                    "cache_entries",
                    n.cacheEntries
                ],
                [
                    "cache_prunes",
                    n.cachePrunes
                ]
            ] : [];
            for (const [r, n] of a)this.bestEffortSink(()=>{
                t.metric(`${Mg}.${r}`, n, i);
            }, e.trigger);
            if (this.bestEffortSink(()=>{
                t.metric(`${Mg}.duration_ms`, s, i);
            }, e.trigger), "checkpoint" !== e.trigger) {
                const r = n.counts.pass + n.counts.lag + n.counts.warn + n.counts.fail;
                for (const [s, o] of [
                    [
                        "eligible_hosts",
                        1
                    ],
                    [
                        "eligible_stores",
                        n.hostSessionCount
                    ],
                    [
                        "terminally_compared_stores",
                        r
                    ]
                ])this.bestEffortSink(()=>t.metric(`${Mg}.coverage.${s}`, o, i), e.trigger);
            }
            const c = this.diagnosticsAllowed(), l = this.evictFailureState();
            c && l > 0 && this.emitOmitted("dedupe_evicted", l, e.trigger);
            const u = this.newOrChangedFailures(n, c, e.trigger), d = this.evictFailureState();
            c && d > 0 && this.emitOmitted("dedupe_evicted", d, e.trigger), c && this.emitFailureMetrics(n, e.trigger);
            const p = u.slice(0, 10);
            if (0 === p.length) return;
            if (!c) {
                let r = !1;
                return this.bestEffortSink(()=>{
                    t.fault({
                        trigger: e.trigger,
                        currentEnablementSource: o,
                        counts: n.counts
                    }), r = !0;
                }, e.trigger), void (r && this.markFailuresEmitted(p, !1));
            }
            const m = function(e) {
                const t = new Map;
                for (const r of e){
                    const e = Og(r.attribution), n = t.get(e);
                    void 0 === n ? t.set(e, [
                        r
                    ]) : n.push(r);
                }
                return [
                    ...t.entries()
                ].map(([e, t])=>({
                        shapeFingerprintV2: e,
                        failures: t
                    }));
            }(p), h = m.slice(0, 4), f = m.slice(4).reduce((e, t)=>e + t.failures.length, 0);
            f > 0 && this.emitOmitted("event_cap", f, e.trigger);
            for (const r of h){
                const s = r.failures.slice(0, 3).map(Ng), i = r.failures.length - s.length;
                i > 0 && this.emitOmitted("sample_cap", i, e.trigger);
                const a = r.failures[0].attribution;
                let c = !1;
                this.bestEffortSink(()=>{
                    t.fault({
                        trigger: e.trigger,
                        currentEnablementSource: o,
                        counts: n.counts,
                        diagnostic: {
                            version: "v2",
                            shapeFingerprintV2: r.shapeFingerprintV2,
                            primaryCause: a.primaryCause,
                            writerReason: a.writerReason,
                            writerOwnership: Fg(r.failures.map((e)=>e.attribution.writerOwnership)),
                            writerMatch: a.writerMatch,
                            divergentSide: a.divergentSide,
                            changedField: a.changedField,
                            hostOrigin: Fg(r.failures.map((e)=>e.attribution.hostOrigin)),
                            affectedCount: r.failures.length,
                            selectedCount: p.length,
                            pendingCount: u.length,
                            clusterCap: 4,
                            sampleCap: 3,
                            samples: s
                        }
                    }), c = !0;
                }, e.trigger), c && this.markFailuresEmitted(r.failures, !0);
            }
        }
        newOrChangedFailures(e, t, r) {
            const n = new Map;
            for (const s of e.sessions){
                if ("fail" !== s.verdict) {
                    if ("busy" !== s.verdict) {
                        const e = this.failureStateBySession.get(s.sessionId);
                        t && void 0 !== e?.emittedSignature && this.bestEffortSink(()=>this.options.sinks.metric(`${Mg}.recovered`, 1, {
                                trigger: r,
                                previous_primary_cause: e.primaryCause,
                                current_enablement_source: this.options.currentEnablementSource ?? "sticky"
                            }), r), this.failureStateBySession.delete(s.sessionId);
                    }
                    continue;
                }
                const e = Ig(s), o = $g(s, Lg(s));
                let i = this.failureStateBySession.get(s.sessionId);
                void 0 === i && (i = {
                    emittedSignature: void 0,
                    diagnosticsEmitted: !1,
                    primaryCause: e.primaryCause,
                    lastSeenAtMs: this.now()
                }, this.failureStateBySession.set(s.sessionId, i)), i.primaryCause = e.primaryCause, i.lastSeenAtMs = this.now(), (i.emittedSignature !== o || t && !i.diagnosticsEmitted) && n.set(s.sessionId, {
                    sessionId: s.sessionId,
                    signature: o,
                    attribution: e
                });
            }
            const s = [];
            for (const e of this.failureStateBySession.keys()){
                const t = n.get(e);
                void 0 !== t && s.push(t);
            }
            return s;
        }
        diagnosticsAllowed() {
            try {
                return this.options.allowDiagnosticExport?.() ?? !0;
            } catch  {
                return !1;
            }
        }
        evictFailureState() {
            const e = this.now() - 864e5;
            let t = 0;
            for (const [r, n] of this.failureStateBySession)n.lastSeenAtMs < e && (this.failureStateBySession.delete(r), t++);
            for(; this.failureStateBySession.size > 512;){
                const e = this.failureStateBySession.keys().next().value;
                if (void 0 === e) break;
                this.failureStateBySession.delete(e), t++;
            }
            return t;
        }
        markFailuresEmitted(e, t) {
            for (const r of e){
                const e = this.failureStateBySession.get(r.sessionId);
                if (void 0 === e) continue;
                const n = e.emittedSignature !== r.signature;
                e.emittedSignature = r.signature, e.diagnosticsEmitted = n ? t : e.diagnosticsEmitted || t, this.failureStateBySession.delete(r.sessionId), this.failureStateBySession.set(r.sessionId, e);
            }
        }
        emitFailureMetrics(e, t) {
            const r = new Map, n = new Map;
            let s = 0, o = 0;
            for (const i of e.sessions){
                if ("fail" !== i.verdict) continue;
                const e = Ig(i);
                Ug(r, {
                    trigger: t,
                    primary_cause: e.primaryCause,
                    writer_reason: e.writerReason,
                    writer_match: e.writerMatch,
                    writer_ownership: e.writerOwnership,
                    current_enablement_source: this.options.currentEnablementSource ?? "sticky"
                }), Ug(n, {
                    primary_failure_kind: e.primaryFailureKind,
                    changed_field: e.changedField,
                    divergent_side: e.divergentSide,
                    host_origin: e.hostOrigin
                }), "unavailable" === e.writerMatch && s++, o += e.writersOmitted;
            }
            for (const e of r.values())this.bestEffortSink(()=>this.options.sinks.metric(`${Mg}.failure_cause`, e.count, e.tags), t);
            for (const e of n.values())this.bestEffortSink(()=>this.options.sinks.metric(`${Mg}.failure_shape`, e.count, e.tags), t);
            s > 0 && this.emitOmitted("journal_unavailable", s, t), o > 0 && this.emitOmitted("writer_overflow", o, t);
        }
        emitOmitted(e, t, r) {
            this.bestEffortSink(()=>this.options.sinks.metric(`${Mg}.diagnostic_omitted`, t, {
                    stage: e,
                    current_enablement_source: this.options.currentEnablementSource ?? "sticky"
                }), r);
        }
        bestEffortSink(e, t) {
            try {
                e();
            } catch (e) {
                try {
                    this.options.sinks.log.error(`[hostStorage] compare (${t}) sink failed`, e);
                } catch (t) {
                    e instanceof Error && e.name, t instanceof Error && t.name;
                }
            }
        }
    }
    function Og(e) {
        const t = JSON.stringify({
            primaryFailureKind: e.primaryFailureKind,
            primaryCause: e.primaryCause,
            writerReason: e.writerReason,
            writerMatch: e.writerMatch,
            divergentSide: e.divergentSide,
            changedField: e.changedField
        });
        return (0, wt.createHash)("sha256").update(t).digest("hex");
    }
    function Ng(e) {
        const t = e.attribution, r = t.changedFields[0];
        return {
            primaryKind: t.primaryFailureKind,
            rootKind: t.rootKind,
            changedField: t.changedField,
            direction: r?.direction ?? "none",
            hostCountBucket: r?.hostCountBucket ?? "0",
            rendererCountBucket: r?.rendererCountBucket ?? "0",
            turnDelta: t.turnDelta,
            pieceBucket: t.pieceBucket,
            closureBucket: t.closureBucket,
            writerField: t.writerFields[0] ?? "none"
        };
    }
    function Fg(e) {
        return 1 === new Set(e).size ? e[0] : "mixed";
    }
    function Ug(e, t) {
        const r = JSON.stringify(Object.entries(t).sort(([e], [t])=>e.localeCompare(t))), n = e.get(r);
        void 0 === n ? e.set(r, {
            tags: t,
            count: 1
        }) : n.count++;
    }
    function Lg(e) {
        const t = [];
        if (e.byteMismatches.length > 0 && t.push("piece-bytes"), e.hostReachableMissingInRenderer.length > 0 && t.push("renderer-missing-piece"), e.rendererReachableMissingInHost.length > 0 && t.push("host-missing-piece"), e.hostClosureFailures.length > 0 && t.push("host-closure"), "durable" === e.rootDifference?.kind) {
            const r = e.rootDifference.fields.map((e)=>e.field).sort().join(",");
            t.push(`root-${e.rootDifference.kind}:${r}`);
        }
        return 0 === t.length && t.push("host-root-or-transcript"), t.sort().join("+");
    }
    function $g(e, t) {
        const r = JSON.stringify({
            taxonomy: t,
            hostRootBlobIdHex: e.hostRootBlobIdHex,
            rendererRootBlobIdHex: e.rendererRootBlobIdHex,
            byteMismatches: [
                ...e.byteMismatches
            ].sort(),
            hostReachableMissingInRenderer: [
                ...e.hostReachableMissingInRenderer
            ].sort(),
            rendererReachableMissingInHost: [
                ...e.rendererReachableMissingInHost
            ].sort(),
            hostClosureFailures: e.hostClosureFailures.map((e)=>`${e.kind}:${e.blobIdHex}`).sort(),
            rendererClosureFailures: e.rendererClosureFailures.map((e)=>`${e.kind}:${e.blobIdHex}`).sort(),
            reasonHash: Qg(e.reasons),
            hostClosureDetailHash: Qg(e.hostClosureFailures.map((e)=>e.detail ?? "")),
            rendererClosureDetailHash: Qg(e.rendererClosureFailures.map((e)=>e.detail ?? "")),
            hostTurns: e.host.turns,
            rendererTurns: e.renderer.turns
        });
        return (0, wt.createHash)("sha256").update(r).digest("hex");
    }
    function Qg(e) {
        const t = (0, wt.createHash)("sha256");
        for (const r of e)t.update(String(Buffer.byteLength(r))), t.update(":"), t.update(r);
        return t.digest("hex");
    }
    function jg(e, t) {
        if (void 0 === t) return {};
        const r = `sample${e}`;
        return {
            [`${r}PrimaryKind`]: t.primaryKind,
            [`${r}RootKind`]: t.rootKind,
            [`${r}ChangedField`]: t.changedField,
            [`${r}Direction`]: t.direction,
            [`${r}HostCountBucket`]: t.hostCountBucket,
            [`${r}RendererCountBucket`]: t.rendererCountBucket,
            [`${r}TurnDelta`]: t.turnDelta,
            [`${r}PieceBucket`]: t.pieceBucket,
            [`${r}ClosureBucket`]: t.closureBucket,
            [`${r}WriterField`]: t.writerField
        };
    }
    const Gg = 25;
    function Hg(e) {
        const { registry: t, storageRoot: r } = e, n = function(e) {
            return St().join(St().dirname(e), "state.vscdb");
        }(r), s = new lg({
            intervalMs: Pg
        });
        let o = new Map;
        const i = new Dg({
            shouldCompare: e.shouldCompare,
            runCompare: (e)=>{
                const t = function(e) {
                    if ("interval" === e.trigger && void 0 !== e.sessionIds) return e.cache.retainScope(new Set(e.sessionIds)), {
                        cache: e.cache,
                        catalogIdentities: e.catalogIdentities
                    };
                }({
                    trigger: e.trigger,
                    sessionIds: e.sessionIds,
                    cache: s,
                    catalogIdentities: o
                });
                return Sg({
                    stateDbPath: n,
                    storageRoot: r,
                    sessionIds: e.sessionIds,
                    scheduler: Zf({
                        maxSliceMs: Yf,
                        now: ()=>performance.now(),
                        yieldControl: ()=>new Promise((e)=>setImmediate(e))
                    }),
                    ...void 0 === t ? {} : {
                        passCache: t
                    }
                });
            },
            catalogLease: new Jg((0, At.join)(r, Bg), process.pid, Date.now),
            onCatalogLeaseLost: ()=>{
                s.clear();
            },
            formatSummary: sg,
            periodicSessionIds: ()=>{
                const e = function(e) {
                    const t = new Set(e.ownedSessionIds()), r = new Map(e.listNativeCatalogEntries(Gg).map((e)=>[
                            e.sessionId,
                            e
                        ])), n = [
                        ...new Set([
                            ...t,
                            ...r.keys()
                        ])
                    ].sort();
                    return {
                        sessionIds: n,
                        identities: new Map(n.map((e)=>{
                            const n = r.get(e);
                            return [
                                e,
                                cg({
                                    owned: t.has(e),
                                    entry: n
                                })
                            ];
                        }))
                    };
                }(t);
                return o = e.identities, e.sessionIds;
            },
            currentEnablementSource: e.currentEnablementSource,
            allowDiagnosticExport: ()=>c.cursor.getPrivacyModeEnum() === K.PrivacyMode.USAGE_CODEBASE_TRAINING_ALLOWED,
            sinks: {
                log: ks.nx,
                metric: (e, t, r)=>{
                    c.cursor.metricsDistribution({
                        stat: e,
                        value: t,
                        tags: {
                            ...r
                        }
                    });
                },
                fault: zg
            }
        });
        "agentWorkspace" !== e.glassWorkspaceRole && i.start();
        const a = t.onRootAdvanced((e)=>{
            s.forget(e), i.noteCheckpoint(e);
        }), l = t.onHostOwnedStorageChanged((e)=>{
            s.forget(e);
        });
        return {
            dispose: ()=>{
                a(), l(), i.dispose();
            }
        };
    }
    function zg(e) {
        const t = function(e, t) {
            const r = e.diagnostic, n = {
                trigger: e.trigger,
                runPass: e.counts.pass,
                runLag: e.counts.lag,
                runWarn: e.counts.warn,
                runFail: e.counts.fail,
                runBusy: e.counts.busy
            };
            return void 0 !== r && Object.assign(n, {
                shapeFingerprintV2: r.shapeFingerprintV2,
                affectedCount: r.affectedCount,
                selectedCount: r.selectedCount,
                pendingCount: r.pendingCount,
                clusterCap: r.clusterCap,
                sampleCap: r.sampleCap,
                ...jg(0, r.samples[0]),
                ...jg(1, r.samples[1]),
                ...jg(2, r.samples[2])
            }), {
                message: `Agent host storage compare failed (${t})`,
                tags: {
                    client_error_type: "agent_host_storage_failure",
                    cursor_storage_event: "compare_failed",
                    storage_kind: "session",
                    force_upload: "forced",
                    current_enablement_source: e.currentEnablementSource,
                    ...void 0 === r ? {} : {
                        compare_diag_version: r.version,
                        primary_cause: r.primaryCause,
                        writer_reason: r.writerReason,
                        writer_ownership: r.writerOwnership,
                        writer_match: r.writerMatch,
                        divergent_side: r.divergentSide,
                        changed_field: r.changedField,
                        host_origin: r.hostOrigin
                    }
                },
                context: {
                    level: "error",
                    fingerprint: void 0 === r ? [
                        "agent_host_storage",
                        "compare_failed",
                        "privacy_redacted"
                    ] : [
                        "agent_host_storage",
                        "compare_failed",
                        "v2",
                        r.shapeFingerprintV2
                    ],
                    extra: n
                }
            };
        }(e, (0, wt.randomUUID)());
        c.cursor.captureException(new Error(t.message), t.tags, t.context);
    }
    function Wg(e) {
        const t = $f((e, t, r)=>c.cursor.captureException(e, t, r)), r = {
            distribution: (e)=>{
                c.cursor.metricsDistribution({
                    stat: e.stat,
                    value: e.value,
                    ...void 0 === e.tags ? {} : {
                        tags: {
                            ...e.tags
                        }
                    }
                });
            },
            increment: (e)=>{
                c.cursor.metricsIncrement({
                    stat: e.stat,
                    value: e.value ?? 1,
                    ...void 0 === e.tags ? {} : {
                        tags: {
                            ...e.tags
                        }
                    }
                });
            },
            gauge: (e)=>{
                c.cursor.metricsGauge({
                    stat: e.stat,
                    value: e.value,
                    ...void 0 === e.tags ? {} : {
                        tags: {
                            ...e.tags
                        }
                    }
                });
            }
        }, n = new Ar.Pz({
            ctx: e.hostContext,
            metrics: r,
            onStorageFault: t
        }), s = (0, w.qU)({
            storageDir: e.storageDir,
            storageObserver: n.storageObserver
        });
        if (void 0 === s) throw new Error("Host session storage requires a storage directory");
        const o = new dn({
            storage: s,
            log: (0, Ar.Qf)({
                ctx: e.hostContext,
                storageDir: e.storageDir
            }),
            clock: e.clock,
            instruments: n,
            hasLiveSession: e.hasLiveSession
        }), i = ()=>{
            return t = e.creationSource, r = Of.existsSync(s.sessionsDir), void 0 !== t || r;
            var t, r;
        }, a = Hg({
            shouldCompare: (t)=>void 0 !== e.creationSource || o.ownedSessionIds().length > 0 || o.hasNativeCatalogEntries({
                    refresh: t
                }),
            registry: o,
            storageRoot: e.storageDir,
            currentEnablementSource: e.creationSource ?? "sticky",
            glassWorkspaceRole: e.glassWorkspaceRole
        }), l = (t)=>void 0 !== e.creationSource || i() && o.hasNativeSession(t);
        return {
            hostOptions: {
                storageDir: e.storageDir,
                hostContext: e.hostContext,
                onStorageFault: t,
                metrics: r,
                storage: s
            },
            rejectHostOwnedLegacyBlobRead: ()=>n.rejectHostOwnedLegacyBlobRead(),
            mergeSessionCatalog: (e, t, r, n)=>{
                if (!i()) return [
                    ...e
                ];
                const s = new Map(e.map((e)=>[
                        e.sessionId,
                        e
                    ])), a = new Set, c = o.listNativeCatalogEntries(t, r, (e)=>{
                    a.add(e.sessionId);
                    const t = lr(e, s.get(e.sessionId));
                    return !1 === n?.(t) ? void 0 : t;
                }), l = new Set(c.map((e)=>e.sessionId)), u = e.filter((e)=>l.has(e.sessionId) || !a.has(e.sessionId) && !1 !== n?.(e)), d = new Map;
                for (const e of u)void 0 !== e.title && d.set(e.sessionId, e.title);
                for (const e of c){
                    const t = d.get(e.sessionId);
                    void 0 === e.title && void 0 !== t && o.noteTitleChanged(e.sessionId, t);
                }
                return function(e, t, r) {
                    const n = new Map(t.map((e)=>[
                            e.sessionId,
                            e
                        ])), s = [], o = new Set;
                    for (const t of e){
                        const e = n.get(t.sessionId);
                        o.add(t.sessionId), s.push(lr(t, e));
                    }
                    for (const e of t)o.has(e.sessionId) || s.push(e);
                    return s.sort((e, t)=>(t.updatedAt ?? 0) - (e.updatedAt ?? 0)), s.slice(0, Math.max(0, r));
                }(c, u, t);
            },
            noteTitleChanged: (e, t)=>{
                l(e) && o.noteTitleChanged(e, t);
            },
            noteArchivedChanged: (e, t)=>{
                l(e) && o.noteArchivedChanged(e, t);
            },
            onHostOwnedStorageChanged: (e)=>o.onHostOwnedStorageChanged(e),
            resolveBlobStore: (e, t)=>o.getPreparedBlobStore(e) ?? t(),
            consumePreparedSessionStore: o.consumePreparedSessionStore.bind(o),
            createSession: async (t)=>{
                const r = t.options.sessionId;
                if (e.hasLiveSession(r) && !o.hasPreparedSession(r)) return t.bindOptions(void 0), {
                    prepared: void 0,
                    alreadyExisted: !0
                };
                const n = (r)=>(function(e) {
                        return void 0 !== e.source && void 0 !== e.initialHistory && fn({
                            catalogHydrate: e.catalogHydrate,
                            initialHistory: e.initialHistory,
                            migrateSettledHistory: !0 === e.migrateOnOpen
                        });
                    })({
                        source: e.creationSource,
                        catalogHydrate: t.catalogHydrate,
                        initialHistory: r,
                        migrateOnOpen: e.migrateOnOpen
                    }), s = t.options.initialHistory, i = n(s), a = t.options.readCurrentHistory, c = i && void 0 !== s && !hn(s) && void 0 !== a ? {
                    readCurrentHistory: async ()=>await a(),
                    admitSeedHistory: n
                } : {}, l = await o.prepareSession({
                    sessionId: r,
                    ...i && void 0 !== s ? {
                        initialHistory: s
                    } : {},
                    ...c,
                    ...void 0 === s ? {} : {
                        surfaceHistory: s
                    },
                    allowCreate: i,
                    workspacePaths: t.options.workspacePaths,
                    legacyGetBlob: async (e)=>await t.options.getBlob(e),
                    mirror: async (e)=>{
                        await t.options.setBlob(e);
                    },
                    ctx: t.ctx
                });
                t.bindOptions(l);
                try {
                    await t.createLiveSession(void 0 !== l || void 0 === t.options.initialHistory || 0 === t.options.initialHistory.byteLength ? void 0 : Ie.Y9z.fromBinary(t.options.initialHistory), t.catalogHydrate ? "seed" : "persist");
                } catch (e) {
                    if (e instanceof Error && /agent host session already exists/i.test(e.message)) return o.rollbackDanglingPreparedSession(r) && t.restoreRendererOptions(), {
                        prepared: l,
                        alreadyExisted: !0
                    };
                    throw t.clearOptions(), o.cleanupFailedSessionCreate(r), e;
                }
                return {
                    prepared: l,
                    alreadyExisted: !1
                };
            },
            deleteSession: async (e)=>{
                try {
                    await e.deleteLiveSession();
                } catch (e) {
                    if (!(e instanceof Error && /agent host session not found/i.test(e.message))) throw e;
                }
                if (!o.deleteSessionStorage(e.sessionId)) throw new Error(`Failed to delete host-owned storage for session ${e.sessionId}`);
            },
            forkSession: async (t)=>void 0 !== e.creationSource && o.forkSession({
                    parentSessionId: t.parentSessionId,
                    sessionId: t.sessionId,
                    history: t.history,
                    ...void 0 === t.workspacePaths ? {} : {
                        workspacePaths: t.workspacePaths
                    },
                    ctx: t.ctx
                }),
            dispose: ()=>{
                a.dispose(), o.dispose();
            }
        };
    }
    const Vg = 2048, Kg = new Set([
        "blobEncryptionKey"
    ]);
    function Yg(e) {
        return JSON.stringify(e, (e, t)=>Kg.has(e) && null != t ? "[redacted]" : "bigint" == typeof t ? t.toString() : "string" == typeof t && t.length > Vg ? `[truncated ${t.length} bytes]` : t) ?? "undefined";
    }
    function Zg(e, t) {
        let r;
        try {
            r = Yg(t());
        } catch (e) {
            r = `[unserializable payload: ${e instanceof Error ? e.message : String(e)}]`;
        }
        ks.gW.trace(`${e} ${r}`);
    }
    function Xg(e, t) {
        Zg(e, ()=>{
            return "object" == typeof (e = t) && null !== e && "function" == typeof e.toJson ? t.toJson() : t;
            var e;
        });
    }
    function ey(e, t) {
        Zg(e, ()=>(function(e) {
                const t = {
                    case: e.event.case,
                    value: e.event.value?.toJson()
                };
                return void 0 !== e.eventId && (t.eventId = e.eventId.toString()), t;
            })(t));
    }
    function ty(e) {
        Zg("createSession", ()=>({
                sessionId: e.sessionId,
                workspacePaths: e.workspacePaths,
                worktreeMainPath: e.worktreeMainPath,
                isGlassRoot: e.isGlassRoot,
                initialHistoryBytes: e.initialHistory?.byteLength
            }));
    }
    const ry = {
        get rpc () {
            return ks.gW.isTraceEnabled() ? Xg : void 0;
        },
        get streamEvent () {
            return ks.gW.isTraceEnabled() ? ey : void 0;
        },
        get createSession () {
            return ks.gW.isTraceEnabled() ? ty : void 0;
        }
    };
    var ny = require("./module-47777.js"), sy = require("./module-42761.js");
    const oy = [
        {
            name: "AgentHostFileNotFoundError",
            code: "FILE_NOT_FOUND",
            connectCode: ny.C.NotFound
        },
        {
            name: "AgentHostFileChangedError",
            code: "FILE_CHANGED",
            connectCode: ny.C.DataLoss
        },
        {
            name: "AgentHostFileOutOfRangeError",
            code: "FILE_OUT_OF_RANGE",
            connectCode: ny.C.OutOfRange
        }
    ];
    function iy(e) {
        if (null == e) return String(e);
        if ("object" == typeof e) {
            const t = function(e) {
                if (!("getType" in e)) return;
                const t = Reflect.get(e, "getType");
                if ("function" != typeof t) return;
                const r = t.call(e);
                if ("object" != typeof r || null === r) return;
                if (!("typeName" in r)) return;
                const n = Reflect.get(r, "typeName");
                return "string" == typeof n && n.length > 0 ? n : void 0;
            }(e);
            if (void 0 !== t) return t;
            const r = e.constructor.name;
            if (r.length > 0 && "Object" !== r) return r;
        }
        return typeof e;
    }
    function ay(e) {
        if ("object" != typeof e || null === e || !("toJson" in e)) return e;
        const t = Reflect.get(e, "toJson");
        if ("function" != typeof t) return e;
        try {
            return t.call(e);
        } catch  {
            return e;
        }
    }
    class cy {
        constructor(e, t){
            this.inner = e, this.log = t;
        }
        get(e) {
            const t = this.inner.get(e);
            return "object" == typeof (r = t) && null !== r && "execute" in r && "function" == typeof Reflect.get(r, "execute") ? this.wrapExecutor(t) : t;
            var r;
        }
        *entries() {
            for (const [e] of this.inner.entries())yield [
                e,
                this.get(e)
            ];
        }
        wrapExecutor(e) {
            const t = e.execute.bind(e), r = this.log, n = (e, n, s)=>{
                const o = iy(n), i = ay(n), a = performance.now();
                let c;
                r({
                    phase: "start",
                    argsType: o,
                    args: i
                });
                try {
                    c = t(e, n, s);
                } catch (e) {
                    throw r({
                        phase: "error",
                        argsType: o,
                        args: i,
                        error: e,
                        durationMs: performance.now() - a
                    }), e;
                }
                return "object" == typeof (l = c) && null !== l && Symbol.asyncIterator in l && "function" == typeof Reflect.get(l, Symbol.asyncIterator) ? function(e, t, r, n, s) {
                    return {
                        async *[Symbol.asyncIterator] () {
                            let o = 0;
                            try {
                                for await (const t of e)o += 1, yield t;
                                t({
                                    phase: "ok",
                                    argsType: r,
                                    args: n,
                                    eventCount: o,
                                    durationMs: performance.now() - s
                                });
                            } catch (e) {
                                throw t({
                                    phase: "error",
                                    argsType: r,
                                    args: n,
                                    error: e,
                                    eventCount: o,
                                    durationMs: performance.now() - s
                                }), e;
                            }
                        }
                    };
                }(c, r, o, i, a) : c.then((e)=>(r({
                        phase: "ok",
                        argsType: o,
                        args: i,
                        result: ay(e),
                        durationMs: performance.now() - a
                    }), e), (e)=>{
                    throw r({
                        phase: "error",
                        argsType: o,
                        args: i,
                        error: e,
                        durationMs: performance.now() - a
                    }), e;
                });
                var l;
            };
            return new Proxy(e, {
                get: (e, t, r)=>"execute" === t ? n : Reflect.get(e, t, r)
            });
        }
    }
    function ly(e) {
        let t = !1, r = Promise.resolve();
        const n = (n)=>{
            const s = r.then(async ()=>{
                t || await async function(e) {
                    const t = void 0 !== e.accessToken && e.accessToken.length > 0, r = await e.client.updateDaemonAuth(new f.IO({
                        accessToken: t ? e.accessToken : "",
                        issuedAtMs: e.issuedAtMs,
                        clientInstanceId: e.clientInstanceId,
                        signedOut: !t
                    }));
                    return {
                        accepted: r.accepted,
                        hasToken: t,
                        ...void 0 === r.rejectionReason || 0 === r.rejectionReason.length ? {} : {
                            rejectionReason: r.rejectionReason
                        }
                    };
                }({
                    client: e.client,
                    clientInstanceId: e.clientInstanceId,
                    accessToken: n,
                    issuedAtMs: BigInt(Date.now())
                });
            });
            return r = s.catch((t)=>{
                e.onError?.(t);
            }), s;
        }, s = n(c.cursor.getCursorAuthToken()), o = c.cursor.onDidChangeCursorAuthToken((e)=>{
            n(e);
        });
        return {
            ready: s,
            dispose () {
                t = !0, o.dispose();
            }
        };
    }
    const uy = "agent_host_local_loop", dy = "cursor_agent_host_move_exec", py = "cursor_agent_host_native_cloud_subagent", my = "cursor_agent_host_subagent_interactions", hy = "cursor_agent_host_owned_session_storage", fy = "cursor_agent_host_session_storage_migrate_on_open", gy = "agent_host_own_request_context";
    let yy, wy, vy, _y, Ay, Sy, by, Ey, Iy, Cy, ky = !1;
    const xy = new Map, Ty = new l.R10;
    let Ry, By, Py, Jy, My, qy;
    function Dy(e) {
        return xy.get(e.sessionId) ?? xy.get(e.rootSessionId) ?? (void 0 !== e.parentSessionId ? xy.get(e.parentSessionId) : void 0);
    }
    function Oy(e) {
        return async ()=>e();
    }
    const Ny = {
        now: ()=>Date.now(),
        schedule: (e, t)=>{
            const r = setTimeout(t, e);
            return {
                dispose: ()=>clearTimeout(r)
            };
        }
    };
    function Fy(e) {
        const t = e.parentConversationId?.trim(), r = e.rootParentConversationId?.trim() || t;
        if (void 0 === r || 0 === r.length) throw new Error("Cloud subagent placement requires a parent agent-host session.");
        const n = Dy({
            sessionId: t ?? r,
            rootSessionId: r,
            ...void 0 === t ? {} : {
                parentSessionId: t
            }
        });
        if (void 0 === n) throw new Error(`No agent-host session options for cloud subagent parent ${r}`);
        return n.cloudSubagentBridge;
    }
    async function Uy(e) {
        const t = Ly(e);
        if (void 0 !== t) return await t({
            toolCallId: e.parentToolCallId,
            parentSessionId: e.parentSessionId
        }) ?? void 0;
    }
    function Ly(e) {
        const t = Dy({
            sessionId: e.parentSessionId,
            rootSessionId: e.rootSessionId,
            parentSessionId: e.parentSessionId
        });
        return t?.findSubagentForToolCall;
    }
    async function $y(e) {
        const t = Ly(e);
        if (void 0 !== t) return await t({
            toolCallId: e.parentToolCallId,
            parentSessionId: e.parentSessionId
        }) === e.childSessionId;
    }
    function Qy(e, t) {
        void 0 !== wy && function(e, t) {
            e.register(l.ryB, {
                execute: async (e, r)=>g.pT.fromBinary(await t(r.toBinary()))
            });
        }(t, e.conversationSearchHandler);
        const r = rs(t, e.requestContextHandler, ky ? {
            ownRequestContext: !0
        } : void 0), n = (s = t, void 0 === (o = function() {
            if (ks.gW.isTraceEnabled()) return (e)=>{
                ks.gW.trace(`[exec] ${e.phase} ${e.argsType} ${Yg({
                    args: e.args,
                    result: e.result,
                    error: e.error instanceof Error ? e.error.message : e.error,
                    durationMs: e.durationMs,
                    eventCount: e.eventCount
                })}`);
            };
        }()) ? s : new cy(s, o));
        var s, o;
        const i = {
            register: (e, r)=>t.register(e, r),
            get: (e)=>n.get(e),
            entries: ()=>n.entries(),
            dispose: async ()=>{
                xy.delete(e.sessionId), await t.dispose?.();
            }
        };
        return void 0 !== r && (0, w.AO)(i, r), i;
    }
    function jy(e, t, r, n) {
        if (void 0 === yy) throw new Error("Cursor agent runtime is not active");
        const s = yy.createAgentHostResourceProvider({
            sessionId: e.sessionId,
            approvalHandler: async (t)=>await e.approvalHandler(t),
            elicitationHandler: async (t, r, n, s)=>await e.mcpElicitationHandler(t, r, n, s),
            notifyFileChange: async (t)=>await e.fileChangeHandler(t),
            sessionWorkspacePaths: e.workspacePaths,
            worktreeMainPath: e.worktreeMainPath,
            getPermissions: async ()=>await e.getPermissions(),
            onDidChangePermissions: e.onDidChangePermissions,
            isGlassRoot: e.isGlassRoot,
            backgroundWorkRegistry: t,
            gitExecutor: r,
            mcpLease: n,
            conversationSearchHandler: async (t)=>await e.conversationSearchHandler(t)
        });
        return Qy(e, s);
    }
    function Gy(e, t) {
        if (void 0 === wy) throw new Error("agent-host-exec factory is not active");
        const r = (n = wy, (e)=>{
            return t = n.createResources({
                sessionId: e.sessionId,
                rootSessionId: e.rootSessionId,
                parentSessionId: e.parentSessionId,
                backgroundWorkRegistry: e.backgroundWorkRegistry,
                gitExecutor: e.gitExecutor,
                mcpLease: e.mcpLease,
                askHostQuestion: e.askHostQuestion
            }), {
                register (e, r) {
                    t.register(e, r);
                },
                get: (e)=>t.get(e),
                entries: ()=>t.entries(),
                dispose: ()=>t.dispose()
            };
            var t;
        });
        var n;
        return Qy(t, r(e));
    }
    function Hy(e) {
        const t = (0, w.CG)(e);
        return {
            approvalHandler: (e)=>t({
                    toolCallId: e.toolCallId,
                    ...e.operation
                }),
            mcpElicitationHandler: (0, w.JY)(e)
        };
    }
    function zy(e) {
        return async (t, r)=>{
            if ("execApproval" === r.case) {
                const t = r.value.operation?.details, n = await e.approvalHandler({
                    toolCallId: r.value.toolCallId,
                    operation: {
                        type: t?.case,
                        details: t?.value?.toJson()
                    }
                });
                return {
                    case: "execApproval",
                    value: new f.k2(n.approved ? {
                        approved: !0
                    } : {
                        approved: !1,
                        reason: n.reason
                    })
                };
            }
            const n = r.value, s = await e.mcpElicitationHandler(n.serverName, n.toolName, n.toolCallId, {
                message: n.elicitation?.message ?? "",
                requestedSchema: JSON.parse(n.elicitation?.requestedSchemaJson || '{"type":"object"}')
            }), o = {
                accept: f.M.ACCEPT,
                decline: f.M.DECLINE,
                cancel: f.M.CANCEL
            }[s.action];
            return {
                case: "mcpElicitation",
                value: new f.vG({
                    action: o,
                    ...void 0 === s.content ? {} : {
                        content: y.Struct.fromJson(s.content)
                    }
                })
            };
        };
    }
    function Wy(e) {
        return (0, ss.BS)(e, c.workspace.workspaceFolders);
    }
    function Vy(e) {
        return e.toBinary();
    }
    const Ky = (0, Df.y2)({
        channel: ks.gW,
        storageChannel: ks.nx,
        structuredWarn: (e, t)=>c.cursor.logStructuredWarn(ks.XX, e, (0, ks.QE)(t), ks.bn),
        structuredError: (e, t, r)=>c.cursor.logStructuredError(ks.XX, e, t, (0, ks.QE)(r), ks.bn),
        structuredTransport: ks.so
    });
    let Yy;
    const Zy = (0, d.q6)().with(p._O, Ky);
    function Xy() {
        const e = Yy?.((0, d.q6)());
        return (e ?? (0, d.q6)()).with(p._O, (0, Df.yT)(e?.get(p._O), Ky));
    }
    function ew(e) {
        if (e.ok || !("gatewayRetry" in e)) {
            const t = e.ok ? Mn(e.catalog) : {
                ...Mn(void 0),
                configError: e.configErrorDetail
            };
            return {
                current: ()=>t,
                onDidChange: void 0,
                dispose: ()=>{}
            };
        }
        const { gatewayRetry: t } = e, r = new c.EventEmitter, n = t.onDidSettle(()=>{
            const e = t.state();
            "active" === e.kind ? ks.gW.info(`Private inference gateway answered; construction active (${(0, En.Je)(e.catalog)})`) : "waiting" !== e.kind && ks.gW.error(`Private inference unusable — turns will fail: ${e.detail}`), r.fire();
        });
        return {
            current: ()=>{
                const e = t.state();
                switch(e.kind){
                    case "waiting":
                        return {
                            ...Mn(void 0),
                            waitingForGateway: !0
                        };
                    case "active":
                        return Mn(e.catalog);
                    case "gave-up":
                    case "failed":
                        return {
                            ...Mn(void 0),
                            configError: e.detail
                        };
                }
            },
            onDidChange: r.event,
            dispose: ()=>{
                n.dispose(), r.dispose(), t.dispose();
            }
        };
    }
    async function tw(t, r) {
        const n = await Tf();
        if (void 0 !== n) {
            const e = await async function(e) {
                if ("fail-closed" === e.decision.kind || "enrollment-pending" === e.decision.kind) return Ln(e.decision.configErrorDetail, e.routing);
                const { configFile: t } = e.decision, r = async (r)=>{
                    const n = await (0, En._x)({
                        configFile: t,
                        env: e.env,
                        ...void 0 !== e.onCatalogParsed ? {
                            onCatalogParsed: e.onCatalogParsed
                        } : {},
                        ...void 0 !== r ? {
                            probeTimeoutMs: r
                        } : {}
                    });
                    return {
                        catalog: n,
                        sessionProvider: (0, En.uK)(n, {
                            onGatewayRequest: e.onGatewayRequest
                        })
                    };
                }, n = new bn.Zy((0, bn.Po)({
                    isDevelopmentBuild: !0 === e.isDevelopmentBuild,
                    env: e.env
                }) ? {
                    writeSnapshot: oe.ynu
                } : {}), s = (e)=>n.report(e);
                try {
                    const t = await r(), { catalog: o, sessionProvider: i } = t;
                    return {
                        ok: !0,
                        catalog: o,
                        createAgentHost: mt({
                            sessionProvider: i,
                            catalog: o,
                            routing: e.routing,
                            promptQualityCaptures: n
                        }),
                        promptQualityReport: s,
                        generateChatTitle: _n({
                            hydration: async ()=>t,
                            routing: e.routing
                        })
                    };
                } catch (t) {
                    if (t instanceof En.ng) {
                        const o = (0, Sn.x$)({
                            baseUrl: t.baseUrl,
                            hydrate: r
                        });
                        return {
                            ok: !1,
                            configErrorDetail: t.message,
                            gatewayRetry: o,
                            createAgentHost: mt({
                                sessionProvider: void 0,
                                catalog: void 0,
                                gatewayRetry: o,
                                routing: e.routing,
                                promptQualityCaptures: n
                            }),
                            promptQualityReport: s,
                            generateChatTitle: _n({
                                hydration: An(o),
                                routing: e.routing
                            })
                        };
                    }
                    return Ln(t instanceof Error ? t.message : String(t), e.routing);
                }
            }({
                decision: n.decision,
                env: process.env,
                routing: n.routing,
                onCatalogParsed: rw,
                isDevelopmentBuild: t,
                onGatewayRequest: (e)=>ks.Wo.info(function(e) {
                        const t = (e)=>void 0 === e ? "-" : `${Math.round(e)}ms`;
                        return [
                            "[private-inference] gateway request",
                            `req=${e.requestId}`,
                            `attempt=${e.attempt}#${e.requestIndex}`,
                            `gateway_req=${e.gatewayRequestId ?? "-"}`,
                            `model=${e.modelId ?? "-"}`,
                            `status=${e.httpStatus ?? "-"}`,
                            `outcome=${e.outcome}${void 0 === e.errorName ? "" : ` (${e.errorName})`}`,
                            `ttfb=${t(e.ttfbMs)}`,
                            `first_event=${t(e.firstEventMs)}`,
                            `first_content=${t(e.firstContentMs)}`,
                            `stream=${t(e.streamMs)}`,
                            `total=${t(e.totalMs)}`,
                            `output_tokens=${e.outputTokens ?? "-"}`,
                            `tokens_per_s=${void 0 === e.outputTokensPerSecond ? "-" : (Math.round(10 * e.outputTokensPerSecond) / 10).toString()}`
                        ].join(" ");
                    }(e))
            });
            if (e.ok) {
                const r = (0, bn.Po)({
                    isDevelopmentBuild: t,
                    env: process.env
                });
                ks.gW.info(`Private inference construction active (${(0, En.Je)(e.catalog)}; model requests retained in memory for Export Transcript${r ? `, and written as local snapshots (dev build, ${bn.DA}=1)` : ""})`);
            } else "gatewayRetry" in e ? ks.gW.warn(`${e.configErrorDetail} Retrying for up to ${Sn._9 / 6e4} minutes; turns fail until it answers.`) : "enrollment-pending" === n.decision.kind ? ks.gW.info("Private inference enrollment not yet known; turns route once membership lands") : ks.gW.error(`Private inference unusable — turns will fail: ${e.configErrorDetail}`);
            return {
                createAgentHost: e.createAgentHost,
                loop: "private-inference",
                privateInferenceCatalog: "enrollment-pending" === n.decision.kind ? void 0 : ew(e),
                ..."promptQualityReport" in e ? {
                    promptQualityReport: e.promptQualityReport
                } : {},
                ..."generateChatTitle" in e ? {
                    privateInferenceChatTitle: e.generateChatTitle
                } : {}
            };
        }
        let s = !1;
        try {
            s = await c.cursor.checkFeatureGate(uy);
        } catch (e) {
            ks.gW.error("Failed to evaluate agent_host_local_loop; using backend NAL", e);
        }
        const o = ()=>({
                remoteName: c.env.remoteName,
                updateMode: c.workspace.getConfiguration().get(Hn),
                clientUpdateMode: c.workspace.getConfiguration().get(zn),
                env: process.env,
                isGateOn: ()=>c.cursor.checkFeatureGate(jn)
            });
        let i = !0;
        const a = await Xn({
            ...o(),
            isDevelopment: t,
            devKeySwitch: process.argv.includes(w.zC),
            clientVersion: c.cursorVersion,
            enabled: ()=>i,
            readTiming: ()=>c.cursor.getDynamicConfigValue(Gn),
            globalStoragePath: r,
            appRoot: c.env.appRoot,
            log: ks.gW,
            loopLogContext: Xy,
            onModuleReverted: (e)=>{
                const t = function(e) {
                    if (e.channel !== Yn) return;
                    const t = e.fallback.builtIn ? "the built-in agent module" : `agent module ${e.fallback.label} (${e.fallback.version})`;
                    return `Agent module ${e.label} (${e.version}) kept failing, so this window switched to ${t}. Report it in #agent-host-releases.`;
                }(e);
                void 0 !== t && c.window.showWarningMessage(t);
            }
        }), l = void 0 === a ? void 0 : ()=>(function(e, t, r) {
                let n = !0, s = 0;
                const o = async ()=>{
                    const o = ++s, i = await Zn(e());
                    if (o !== s) return;
                    if ("unknown" in i) return void ks.gW.warn(`[agent-harness] ${i.unknown}; staying ${n ? "on" : "off"}`);
                    if ("on" in i === n) return;
                    n = !n, t(n);
                    const a = "on" in i ? `on again (${"env" === i.on ? `${Wn}=1` : `${jn} gate`})` : `off (${i.off})`, c = "turns" === r ? "on" in i ? "what current names serves from the next turn" : "the built-in module serves from the next turn" : "on" in i ? "the sidecar announces this host and loads what current names" : "the sidecar returns to the built-in module and takes the host descriptor back; no turn was ever served from it";
                    ks.gW.info(`[agent-harness] ${a}; ${c}`);
                };
                return o(), c.Disposable.from(c.workspace.onDidChangeConfiguration((e)=>{
                    (e.affectsConfiguration(Hn) || e.affectsConfiguration(zn)) && o();
                }), c.cursor.onDidChangeGates((e)=>{
                    (void 0 === e.changedGates || e.changedGates.includes(jn)) && o();
                }));
            })(o, (e)=>{
                i = e, Ey?.poll();
            }, s ? "turns" : "validate-only");
        return s ? (ks.gW.info("Using managed local-loop runtime"), void 0 === a ? {
            createAgentHost: pt,
            loop: "local-loop",
            privateInferenceCatalog: void 0
        } : {
            createAgentHost: (e)=>pt({
                    ...e,
                    agentHarness: a
                }),
            loop: "local-loop",
            privateInferenceCatalog: void 0,
            agentHarnessSwitch: l
        }) : void 0 === a ? {
            createAgentHost: w.wB,
            loop: "backend",
            privateInferenceCatalog: void 0
        } : {
            createAgentHost: w.wB,
            loop: "backend",
            privateInferenceCatalog: void 0,
            agentHarnessSwitch: l,
            validateAgentHarness: (t)=>(ks.gW.info("[agent-harness] validate-only: the backend host serves every turn; the agent harness runs beside it"), function(t) {
                    const r = (e)=>t.log(`[agent-harness] ${e}`), n = t.timing?.pollIntervalMs;
                    return ut({
                        loader: rt.uU.shared({
                            ...t,
                            staticFloor: e,
                            log: r
                        }),
                        log: r,
                        ...void 0 === t.metrics ? {} : {
                            metrics: t.metrics
                        },
                        loopLogContext: t.loopLogContext,
                        ..."number" == typeof n ? {
                            pollIntervalMs: n
                        } : {}
                    });
                }({
                    ...a,
                    ...void 0 === t ? {} : {
                        metrics: t
                    }
                }))
        };
    }
    function rw(e) {
        const t = (0, gn.getPrivateInferenceHttpGuard)();
        if (void 0 !== t) for (const r of (0, dt.$B)(e))t.allowBaseUrl(r);
    }
    async function nw(e, t) {
        const [r, n] = (function(e) {
            const t = Xy();
            return void 0 === e ? t : (0, m.F)(e, void 0, t);
        })(t).withCancel();
        try {
            return await e(r, n);
        } finally{
            n();
        }
    }
    async function sw(e) {
        if (e.subscriptions.push({
            dispose: ()=>ks.gW.dispose()
        }), e.subscriptions.push({
            dispose: ()=>ks.nx.dispose()
        }), c.cursor.cursorAgentHostEnabled) return (0, gn.installPrivateInferenceHttpGuard)({
            enablement: Bf(),
            cursorBackendUrls: ()=>[
                    c.cursor.getCursorCreds()?.backendUrl
                ],
            log: ks.gW
        }), async function(e) {
            try {
                return await e.work();
            } catch (t) {
                try {
                    await e.onRollback?.();
                } catch  {}
                throw es("overlay", e.takeOverlay, e.onDisposeError), es("lease", e.takeLease, e.onDisposeError), t;
            }
        }({
            takeOverlay: ()=>{
                const e = vy;
                return vy = void 0, e;
            },
            takeLease: ()=>{
                const e = _y;
                return _y = void 0, e;
            },
            onDisposeError: (e, t)=>{
                ks.gW.error(`Error while disposing MCP ${e} during activation rollback`, t);
            },
            onRollback: async ()=>{
                const e = yy;
                yy = void 0;
                try {
                    await e?.deactivate();
                } catch (e) {
                    ks.gW.error("Error while deactivating cursor-agent-exec runtime during activation rollback", e);
                }
                const t = Ay;
                Ay = void 0;
                try {
                    t?.dispose();
                } catch (e) {
                    ks.gW.error("Error while disposing hosted MCP routing adapter during activation rollback", e);
                }
                const r = Iy;
                Iy = void 0;
                try {
                    r?.dispose();
                } catch (e) {
                    ks.gW.error("Error while disposing host session storage during activation rollback", e);
                }
                const n = qy;
                qy = void 0, n?.();
                const s = My;
                My = void 0, s?.dispose();
                const o = Jy;
                Jy = void 0;
                try {
                    o?.close();
                } catch (e) {
                    ks.gW.error("Error while closing move_exec connect-only client during activation rollback", e);
                }
            },
            work: ()=>(async function(e) {
                    ks.gW.info("Activating agent host extension");
                    const t = Date.now();
                    let r;
                    const n = new Promise((e)=>{
                        r = e;
                    }), s = tw(e.isDevelopment, e.globalStorageUri.fsPath);
                    s.catch(()=>{});
                    const [l, p, g, y, v, _, A, S, b, E] = await Promise.all([
                        Promise.resolve(c.cursor.checkFeatureGate(dy)).catch(()=>!1),
                        Promise.resolve(c.cursor.checkFeatureGate(uy)).catch(()=>!1),
                        Promise.resolve(c.cursor.checkFeatureGate(jn)).catch(()=>!1),
                        Promise.resolve(c.cursor.checkFeatureGate(py)).catch(()=>!1),
                        Promise.resolve(c.cursor.checkFeatureGate(my)).catch(()=>!1),
                        Promise.resolve(c.cursor.checkFeatureGate(hy)).catch(()=>!1),
                        Promise.resolve(c.cursor.checkFeatureGate(fy)).catch(()=>!1),
                        (0, qs.r)(c.cursor),
                        Promise.resolve(c.cursor.checkFeatureGate(gy)).catch(()=>!1),
                        Promise.resolve(c.cursor.getDynamicConfigValue("local_subagent_limits")).catch(()=>{})
                    ]);
                    ky = !0 === b;
                    const I = l || p, C = (x = {
                        gate: _,
                        envValue: process.env.CURSOR_AGENT_HOST_OWNED_SESSION_STORAGE,
                        configValue: c.workspace.getConfiguration("cursorAgentHost").get("experimentalHostOwnedSessionStorage")
                    }, x.gate ? "gate" : Nf(x.envValue, void 0) ? "env" : Nf(void 0, x.configValue) ? "setting" : void 0), k = Uf({
                        gate: A,
                        envValue: process.env.CURSOR_AGENT_HOST_MIGRATE_ON_OPEN,
                        storageSource: C
                    });
                    var x;
                    if (l && e.extensionMode !== c.ExtensionMode.Test) try {
                        const { connectProductDaemon: t } = await Promise.all([
                            require.e(21),
                            require.e(865),
                            require.e(113),
                            require.e(607)
                        ]).then(require.bind(require, 13607)), { resolveSandboxHelperPath: r } = await require.e(746).then(require.bind(require, 12746));
                        Jy = await t({
                            extensionPath: e.extensionPath,
                            localLoopEnabled: p,
                            updaterEnabled: g,
                            nativeCloudSubagentsEnabled: y,
                            globalState: e.globalState,
                            apiEndpoint: c.cursor.getCursorCreds()?.backendUrl,
                            ripgrepPath: c.cursor.rgPath,
                            sandboxHelperPath: r(e.extensionPath)
                        }), ks.gW.info(`move_exec product handshake ok (pid ${String(Jy.info.processPid)}, local_loop ${p ? "ON" : "OFF"}, updater ${g ? "ON" : "OFF"})`);
                    } catch (e) {
                        ks.gW.error("move_exec product handshake failed; staying on in-process provider", e);
                    }
                    ks.gW.info("Native cloud subagent ownership " + (y ? "enabled" : "disabled")), ks.gW.info("Hosted MCP routing " + (S ? "ON" : "OFF")), ks.gW.info("Subagent interaction policy: " + (v ? "surface-to-user (question/plan/MCP auth/SCM connect on child; web search/fetch on parent; compatibility stubs rejected)" : "auto-reject (default)"));
                    const T = new qf(e), R = Wy(void 0), B = function(e) {
                        const t = e[0], r = "rootWorkspace" === c.cursor.glassWorkspaceRole ? c.cursor.workspaceId() : (0, a.join)(i.tmpdir(), o.randomUUID());
                        return (0, h.Xq)(t ?? r);
                    }(R);
                    let P, J, M, q;
                    const D = async (e, t = "live")=>{
                        const { createIdeHostedMcpRoutingProvider: r } = await Promise.all([
                            require.e(88),
                            require.e(947)
                        ]).then(require.bind(require, 69947));
                        return q = r({
                            lease: e,
                            gates: c.cursor,
                            initialGateValue: S,
                            flipOnPolicy: t,
                            onDidChangeRoutingActive: (e)=>{
                                const t = {
                                    live: e
                                };
                                c.commands.executeCommand(u.T8, t);
                            },
                            remoteName: mo(c.env).remoteName,
                            deviceTag: `ide:${c.env.machineId}`,
                            metrics: {
                                distribution: (e)=>c.cursor.metricsDistribution({
                                        stat: e.stat,
                                        value: e.value,
                                        ...void 0 === e.tags ? {} : {
                                            tags: {
                                                ...e.tags
                                            }
                                        }
                                    })
                            },
                            log: (e)=>ks.gW.info(e)
                        }), Ay = q, q;
                    };
                    let O, N, F, U, L, $, Q, j;
                    if (I) {
                        let t, r, s;
                        const o = Date.now(), { createIdeObservabilityActivate: a } = await Promise.all([
                            require.e(88),
                            require.e(106)
                        ]).then(require.bind(require, 9106));
                        t = a({
                            workspacePaths: R,
                            activationStartMs: o
                        }), j = t, Yy = (e)=>t.attachToTurnContext(e), Py = ()=>{
                            Yy = void 0, t.dispose();
                        };
                        try {
                            P = await (0, ks.H1)("Failed to create IDE git executor", ()=>(async function(e = {}) {
                                    if (e.extensionIsolationEnabled ?? await Promise.resolve(c.cursor.getCursorExtensionsIsolationEnabled()).catch(()=>!1)) {
                                        const s = e.createGitSpawner ?? (async ()=>{
                                            try {
                                                const e = await _s(ks.gW);
                                                return new Cs({
                                                    gitPath: e.path,
                                                    onLog: (e)=>ks.gW.trace(`[git] ${e.trimEnd()}`)
                                                });
                                            } catch (e) {
                                                return void ks.gW.error("Failed to create GitSpawner for isolated git executor", e);
                                            }
                                        }), o = e.parentCtx;
                                        if (void 0 !== o) {
                                            var t = [];
                                            try {
                                                return Rs(t, (0, m.VI)(o.withName("fetch git (isolation)"))), new Ms(s());
                                            } catch (e) {
                                                var r = e, n = !0;
                                            } finally{
                                                Bs(t, r, n);
                                            }
                                        }
                                        return new Ms(s());
                                    }
                                    const s = e.getGitAPI ?? Ps, o = e.parentCtx;
                                    let i;
                                    if (void 0 !== o) {
                                        var a = [];
                                        try {
                                            Rs(a, (0, m.VI)(o.withName("fetch git (no isolation)"))), i = await s();
                                        } catch (e) {
                                            var l = e, u = !0;
                                        } finally{
                                            Bs(a, l, u);
                                        }
                                    } else i = await s();
                                    return void 0 === i && ks.gW.error("Failed to find a Git API."), new Js(i);
                                })());
                            const o = await (0, ks.H1)("Failed to create IDE MCP provider", ()=>ao(t.activationCtx));
                            _y = o, J = await D(o);
                            const { pushExecActivationRequestContext: a } = await require.e(324).then(require.bind(require, 51324));
                            a({
                                projectDir: B,
                                workspacePath: R[0]
                            });
                            const { createIdeSessionResourceOverlay: u, createIdeTeamSettingsService: h, getOrCreateIdeIgnoreService: f } = await require.e(807).then(require.bind(require, 36807)), { registerCursorIgnoreFileWatcher: g } = await require.e(933).then(require.bind(require, 54933)), { VscodeFileChangeTracker: y } = await require.e(165).then(require.bind(require, 95165)), { createIdeDiskExtensibility: w } = await Promise.all([
                                require.e(21),
                                require.e(88),
                                require.e(334),
                                require.e(102),
                                require.e(77)
                            ]).then(require.bind(require, 60077)), { configureRipgrepWithStartupDiagnostics: v } = await require.e(349).then(require.bind(require, 9349)), { registerWebpCodecWithStartupDiagnostics: _ } = await require.e(524).then(require.bind(require, 29524)), { createIdePluginsActivate: A } = await Promise.all([
                                require.e(21),
                                require.e(334),
                                require.e(102),
                                require.e(817)
                            ]).then(require.bind(require, 52817)), { createIdeAgentStoreActivate: S } = await Promise.all([
                                require.e(21),
                                require.e(334),
                                require.e(488)
                            ]).then(require.bind(require, 98488)), { glassRootAdditionalRules: b } = await require.e(859).then(require.bind(require, 89859)), { createIdeHooksWrap: E } = await Promise.all([
                                require.e(88),
                                require.e(265)
                            ]).then(require.bind(require, 96265)), { createIdeShellActivate: I } = await require.e(821).then(require.bind(require, 92821)), { createIdeMcpActivate: C } = await require.e(721).then(require.bind(require, 65721)), { createIdeGrepSessionOverrides: k } = await require.e(620).then(require.bind(require, 80620)), x = h(), T = new Map, q = new Map;
                            e.subscriptions.push(g(()=>T.values()));
                            const L = c.cursor.rgPath;
                            L || ks.gW.warn("vscode.cursor.rgPath is unset; agent-host-exec will fall back to colocated/system/PATH ripgrep"), v((0, d.q6)(), e), _((0, d.q6)());
                            const j = f({
                                gitExecutor: P,
                                workspacePaths: R,
                                teamSettingsService: x,
                                ignoreServiceCache: T
                            }), G = await A({
                                context: e,
                                workspacePaths: R,
                                gitExecutor: P,
                                appendLine: (e)=>ks.gW.info(e)
                            });
                            e.subscriptions.push({
                                dispose: ()=>G.dispose()
                            });
                            const H = await S({
                                context: e,
                                projectDir: B,
                                appendLine: (e)=>ks.gW.info(e),
                                whenProviderRegistered: n
                            }), { setHostCanvasAgentStoreFilesDirsHook: z } = await require.e(130).then(require.bind(require, 49130)), { getPeerAgentStoreFilesDirs: W, getUserAgentStoreFilesDirsReady: V } = await Promise.all([
                                require.e(21),
                                require.e(334)
                            ]).then(require.bind(require, 7334));
                            z({
                                getPeerAgentStoreFilesDirs: W,
                                getReplicaAgentStoreFilesDirs: V
                            }), qy = ()=>{
                                z(void 0);
                            }, Ry = ()=>(qy = void 0, z(void 0), H.dispose());
                            const K = await w({
                                workspacePaths: R,
                                gitExecutor: P,
                                ignoreService: j,
                                appendLine: (e)=>ks.gW.info(e),
                                ripgrepPath: L || void 0,
                                extensionPath: e.extensionPath,
                                globalStoragePath: e.globalStorageUri.fsPath,
                                pluginsService: G.pluginsService,
                                getAgentStoreSkillsContext: ()=>H.getAgentStoreSkillsContext(),
                                whenProviderRegistered: n,
                                onDidChangeAgentStoreSkillRoots: (e)=>H.onDidChangeSkillRoots(e)
                            });
                            if (e.subscriptions.push({
                                dispose: ()=>K.dispose()
                            }), l) {
                                const { createIdeCanvasActivate: t } = await Promise.all([
                                    require.e(21),
                                    require.e(334),
                                    require.e(570),
                                    require.e(850)
                                ]).then(require.bind(require, 65850));
                                r = t({
                                    context: e,
                                    projectDir: B,
                                    logContext: Xy()
                                }), Q = r;
                            } else if (p) {
                                const { createIdeCanvasDiagnostics: t } = await Promise.all([
                                    require.e(570),
                                    require.e(921)
                                ]).then(require.bind(require, 77921)), r = c.extensions.getExtension("anysphere.cursor-agent-exec")?.extensionPath;
                                s = t({
                                    projectDir: B,
                                    execExtensionPath: r ?? e.extensionPath,
                                    logContext: Xy()
                                });
                            }
                            const { createAgentHostExec: Y } = await require.e(88).then(require.bind(require, 75088)), Z = await E({
                                parentCtx: Xy(),
                                sessionOverlayDisposables: q
                            });
                            e.subscriptions.push({
                                dispose: ()=>Z.dispose()
                            });
                            const X = await I({
                                extensionPath: e.extensionPath,
                                projectDir: B,
                                workspacePaths: R,
                                teamSettingsService: x
                            });
                            e.subscriptions.push({
                                dispose: ()=>X.dispose()
                            });
                            const ee = await C({
                                mcpLease: J,
                                projectDir: B
                            });
                            vy = ee, wy = Y({
                                workspacePaths: R,
                                projectDir: B,
                                ripgrepPath: L || void 0,
                                network: "inherit",
                                resourceDefaults: {
                                    cursorRulesService: K.cursorRulesService,
                                    subagentsService: K.subagentsService,
                                    repositoryProvider: K.codebaseReferenceProvider,
                                    getAgentSkills: (e)=>K.getAgentSkills(e),
                                    ...ee.resourceDefaults,
                                    ...r?.resourceDefaults ?? {},
                                    ...s?.resourceDefaults ?? {}
                                },
                                configureSession: (e)=>{
                                    const t = Dy(e);
                                    if (void 0 === t) throw new Error(`No exec configuration for session ${e.sessionId}`);
                                    const r = {
                                        ...t,
                                        ...Hy(e.askHostQuestion)
                                    }, n = Wy(r.workspacePaths), s = (0, ss.x3)(n, i.homedir()), o = u({
                                        session: r,
                                        gitExecutor: e.gitExecutor,
                                        workspacePaths: s,
                                        teamSettingsService: x,
                                        ignoreServiceCache: T,
                                        mcpAllowlistLog: (e)=>c.cursor.logMcpAllowlist(e)
                                    });
                                    let a;
                                    try {
                                        a = X.createSessionOverrides({
                                            sessionId: e.sessionId,
                                            rootSessionId: e.rootSessionId,
                                            workspacePaths: s,
                                            backgroundWorkRegistry: e.backgroundWorkRegistry
                                        });
                                    } catch (e) {
                                        throw o.dispose(), e;
                                    }
                                    const l = ee.createSessionOverrides({
                                        session: r
                                    }), d = k({
                                        ignoreService: o.ignoreService,
                                        workspacePaths: s,
                                        worktreeMainPath: r.worktreeMainPath
                                    }), p = H.createSessionOverrides({
                                        sessionId: e.sessionId,
                                        workspacePaths: s
                                    });
                                    (0, ns.Dp)(q, e.sessionId, ()=>{
                                        a.dispose(), o.dispose();
                                    });
                                    const m = new y(async (e)=>{
                                        e.metadata?.toolCallId && await r.fileChangeHandler({
                                            path: e.path,
                                            before: e.before,
                                            after: e.after,
                                            metadata: {
                                                toolCallId: e.metadata.toolCallId
                                            }
                                        });
                                    }), h = b(r.isGlassRoot);
                                    return {
                                        workspacePaths: o.executionWorkspacePaths,
                                        overrides: {
                                            ignoreService: o.ignoreService,
                                            pendingDecisionStore: o.pendingDecisionStore,
                                            permissionsService: o.permissionsService,
                                            getSandboxEnabled: o.getSandboxEnabled,
                                            fileChangeTracker: m,
                                            worktreeMainPath: r.worktreeMainPath,
                                            useStreamingRead: ()=>!0,
                                            additionalRules: 0 === h.length ? void 0 : h,
                                            ...a.overrides,
                                            ...l.overrides,
                                            ...d.overrides,
                                            ...p.overrides
                                        }
                                    };
                                },
                                wrapResources: (e)=>{
                                    const t = Z.wrapResources(e), r = H.wrapResources({
                                        args: e.args,
                                        accessor: t.accessor
                                    });
                                    return {
                                        accessor: r.accessor,
                                        dispose: ()=>{
                                            r.dispose?.(), t.dispose?.();
                                        }
                                    };
                                }
                            }), X.configureSandboxHelper(), O = {
                                defaultPolicyType: X.defaultPolicyType,
                                helperConfigured: X.helperConfigured,
                                networkWatcherRegistered: X.networkWatcherRegistered,
                                backgroundShellProviderRegistered: X.backgroundShellProviderRegistered,
                                shellOutputBackpressureEnabled: X.shellOutputBackpressureEnabled
                            }, N = ee.snapshot, F = {
                                ...G.snapshot,
                                skillsIpcRegistered: !0
                            }, U = H.snapshot, $ = t.snapshot, ks.gW.info(`using @anysphere/agent-host-exec for session resources (move_exec ${l ? "ON" : "OFF"}, local_loop ${p ? "ON" : "OFF"}; no cursor-agent-exec runtime)`), M = {
                                moveExecEnabled: l,
                                gitExecutorOwner: "host",
                                mcpProviderOwner: "host",
                                resourceConstruction: "agent-host-exec",
                                runtimeExtensionPath: e.extensionPath,
                                subagentTranscriptsProjectDir: B
                            };
                        } catch (e) {
                            throw Yy = void 0, Py = void 0, t.dispose(), j = void 0, r?.dispose(), Q = void 0, e;
                        }
                    } else {
                        try {
                            const { createLiveExecRuntime: e } = await Promise.resolve().then(require.bind(require, "./module-71385.js"));
                            yy = await e();
                        } catch (e) {
                            e instanceof Error && e.message === co.oD && (0, ks.EW)(co.oD), (0, ks.EW)("Failed to acquire shared agent runtime from cursor-agent-exec", e);
                        }
                        const t = yy, r = await async function(e) {
                            if (e.routingGateAtActivation) {
                                const t = await e.createIdeMcpLease();
                                e.onHostLeaseBuilt(t);
                                const r = await e.attachRouting(t, "live");
                                await e.activateExec({
                                    mcpProvider: r
                                });
                                const n = e.getExecMcpProvider();
                                return to(n) && n === r || e.fail("cursor-agent-exec activate did not adopt the host-injected MCP provider"), {
                                    wiring: "host_injected",
                                    mcpProvider: r
                                };
                            }
                            await e.activateExec({});
                            const t = e.getExecMcpProvider();
                            return to(t) || e.fail("cursor-agent-exec activate did not expose a valid MCP provider"), {
                                wiring: "exec_owned",
                                mcpProvider: await e.attachRouting(t, "next_launch")
                            };
                        }({
                            routingGateAtActivation: S,
                            createIdeMcpLease: ()=>(0, ks.H1)("Failed to create IDE MCP provider", ()=>ao(Zy)),
                            onHostLeaseBuilt: (e)=>{
                                _y = e;
                            },
                            activateExec: (r)=>t.activate(e, {
                                    registerAgentExecProvider: !1,
                                    runtimeExtensionPath: t.extensionPath,
                                    ...r
                                }),
                            getExecMcpProvider: ()=>t.getMcpProvider(),
                            attachRouting: D,
                            fail: (e)=>(0, ks.EW)(e)
                        }), n = t.getGitExecutor();
                        void 0 === n && (0, ks.EW)("cursor-agent-exec activate did not expose a git executor"), P = n, J = r.mcpProvider, ks.gW.info("host_injected" === r.wiring ? "Acquired shared agent runtime from cursor-agent-exec (move_exec OFF; reusing exec IDE git, host-built IDE MCP lease injected)" : "Acquired shared agent runtime from cursor-agent-exec (move_exec OFF; reusing exec IDE git and MCP; routing gate off at activation)"), M = {
                            moveExecEnabled: !1,
                            gitExecutorOwner: "exec",
                            mcpProviderOwner: "exec",
                            resourceConstruction: "cursor-agent-exec",
                            runtimeExtensionPath: yy.extensionPath,
                            subagentTranscriptsProjectDir: B
                        };
                    }
                    const G = {
                        createOrResumeCloudSubagent: async (e, t)=>Fy(t).createOrResumeCloudSubagent(t.toBinary(), e.signal),
                        runCloudSubagent: async (e, t, r)=>{
                            const n = await Fy(r).runCloudSubagent(t, r.toBinary(), e.signal);
                            return JSON.parse((new TextDecoder).decode(n));
                        }
                    }, { createAgentHost: H, loop: z, privateInferenceCatalog: W, promptQualityReport: V, privateInferenceChatTitle: K, agentHarnessSwitch: Y, validateAgentHarness: Z } = await s;
                    void 0 !== W && e.subscriptions.push(W);
                    void 0 !== Y && e.subscriptions.push(Y());
                    "backend" === z && e.subscriptions.push(function() {
                        let e = !1;
                        return c.cursor.onDidChangeGates((t)=>{
                            (void 0 === t.changedGates || t.changedGates.includes(uy)) && Promise.resolve(c.cursor.checkFeatureGate(uy)).then((t)=>{
                                const r = t && !e;
                                e = t, r && ks.gW.warn(`${uy} turned on after activation; this host was built without the local loop, so turns stay on the backend loop until the window reloads`);
                            }, (e)=>{
                                ks.gW.warn(`Failed to re-read ${uy} after a gate change: ${e instanceof Error ? e.message : String(e)}`);
                            });
                        });
                    }());
                    if (function(e) {
                        return !0 === e.moveExecEnabled && !e.extensionModeIsTest && !0 === e.connectSucceeded && !e.privateInference && "win32" !== (e.platform ?? process.platform);
                    }({
                        moveExecEnabled: l,
                        extensionModeIsTest: e.extensionMode === c.ExtensionMode.Test,
                        connectSucceeded: void 0 !== Jy,
                        privateInference: void 0 !== W
                    })) {
                        const e = Jy, n = ly({
                            client: e.client,
                            clientInstanceId: e.clientInstanceId,
                            onError: (e)=>{
                                ks.gW.error("Failed to push IDE auth to agent-host-daemon", e);
                            }
                        });
                        My = n, await n.ready;
                        const { createDaemonAgentHostProvider: s } = await Promise.all([
                            require.e(113),
                            require.e(914)
                        ]).then(require.bind(require, 41914)), o = s({
                            client: e.client,
                            clientInstanceId: e.clientInstanceId,
                            loop: z,
                            hostedMcpRoutingEnabled: ()=>q.sessionRoutingEnabled(),
                            workspacePaths: ()=>R
                        });
                        if (void 0 !== Q) {
                            const e = Q;
                            try {
                                e.register(), Cy = c.cursor.registerAgentHostProvider(o), By = ()=>{
                                    e.dispose();
                                }, L = e.snapshot;
                            } catch (t) {
                                throw e.dispose(), Q = void 0, By = void 0, Yy = void 0, Py = void 0, j?.dispose(), j = void 0, Cy?.dispose(), Cy = void 0, t;
                            }
                        } else try {
                            Cy = c.cursor.registerAgentHostProvider(o);
                        } catch (e) {
                            throw Yy = void 0, Py = void 0, j?.dispose(), j = void 0, e;
                        }
                        return r(), j?.markActivationComplete(), c.cursor.metricsDistribution({
                            stat: "agent_host.startup.timeToBridgeRegisterMs",
                            value: Date.now() - t
                        }), void ks.gW.info(`move_exec ON: registered DaemonAgentHostProvider (pid ${String(e.info.processPid)})`);
                    }
                    const X = Date.now(), { remoteName: ee } = mo(c.env), te = function(e, t) {
                        return t && !ho(e);
                    }(ee, y), re = (oe = c.workspace.getConfiguration("cursorAgentHost").get(go), "always" === oe || "never" === oe || "auto" === oe ? oe : wo), ne = function(e) {
                        return "string" == typeof (t = e.remoteName) && t.length > 0 ? void 0 !== e.privateInferenceCatalog ? {
                            route: e.route,
                            probe: !1,
                            initialKind: "builtin",
                            ignoreOnLocal: !1,
                            failClosedPrivateInference: "always" === e.route
                        } : "always" === e.route ? {
                            route: "always",
                            probe: !1,
                            initialKind: "external",
                            ignoreOnLocal: !1,
                            failClosedPrivateInference: !1
                        } : "never" === e.route ? {
                            route: "never",
                            probe: !1,
                            initialKind: "builtin",
                            ignoreOnLocal: !1,
                            failClosedPrivateInference: !1
                        } : {
                            route: "auto",
                            probe: !0,
                            initialKind: void 0,
                            ignoreOnLocal: !1,
                            failClosedPrivateInference: !1
                        } : {
                            route: e.route,
                            probe: !1,
                            initialKind: "builtin",
                            ignoreOnLocal: "auto" !== e.route,
                            failClosedPrivateInference: !1
                        };
                        var t;
                    }({
                        remoteName: ee,
                        route: re,
                        privateInferenceCatalog: W
                    }), se = function(e, t, r = "auto") {
                        return ho(e) && void 0 === t && "auto" === r;
                    }(ee, W, ne.route);
                    var oe;
                    ks.gW.info(`AgentService remote egress route=${ne.route} probe=${se} remoteName=${void 0 === ee ? "<unset>" : JSON.stringify(ee)}`);
                    const ie = {
                        credentialManager: new Mf,
                        clientIdentity: {
                            clientType: "ide"
                        },
                        createNetworkHost: (e)=>(0, w.Z5)(T, {
                                clientIdentity: e.clientIdentity
                            })
                    };
                    void 0 !== W && q.disableRouting("private_inference");
                    let ae = q.wrapNetwork({
                        kind: "builtin",
                        ...ie
                    });
                    ne.ignoreOnLocal && ks.gW.info(`${yo}=${ne.route} is ignored on local windows`);
                    ho(ee) && void 0 !== W && ks.gW.info("Private inference is active on this remote; AgentService stays on the remote builtin path");
                    ne.failClosedPrivateInference && ks.gW.info(`${yo}=always is ignored on this private-inference remote; AgentService stays on the remote builtin path (external skips CPI)`);
                    const ce = ho(ee) ? (0, vo.UD)({
                        metricsIncrement: (e, t)=>c.cursor.metricsIncrement({
                                stat: e,
                                value: 1,
                                tags: t
                            }),
                        info: (e)=>ks.gW.info(e),
                        structuredInfo: (e, t)=>c.cursor.logStructuredInfo(ks.XX, e, (0, ks.QE)(t), ks.bn)
                    }) : void 0;
                    if ("external" === ne.initialKind) {
                        (await require.e(173).then(require.bind(require, 93173))).createRemoteEgressFailoverReporter({
                            info: (e)=>ks.gW.info(e),
                            structuredWarn: (e, t)=>c.cursor.logStructuredWarn(ks.XX, e, (0, ks.QE)(t), ks.bn),
                            metricsIncrement: (e, t)=>c.cursor.metricsIncrement({
                                    stat: e,
                                    value: 1,
                                    tags: t
                                }),
                            captureException: (e)=>c.cursor.captureException(new Error("agent_host_remote_egress_failover"), {
                                    feature: "agent_host",
                                    reason: e
                                }, {
                                    extra: {
                                        reason: e
                                    },
                                    level: "warning",
                                    fingerprint: [
                                        "agent_host_remote_egress_failover",
                                        e
                                    ]
                                })
                        }).announce("setting_always"), ce?.emit({
                            kind: "external",
                            source: "setting",
                            reason: vo.YR
                        }), ae = fo({
                            connectTransport: c.cursor.connectTransport,
                            createExternal: w._9
                        });
                    } else if (se) {
                        const e = await require.e(173).then(require.bind(require, 93173)), t = await require.e(580).then(require.bind(require, 29580)), r = await require.e(432).then(require.bind(require, 93432)), n = e.createRemoteEgressFailoverReporter({
                            info: (e)=>ks.gW.info(e),
                            structuredWarn: (e, t)=>c.cursor.logStructuredWarn(ks.XX, e, (0, ks.QE)(t), ks.bn),
                            metricsIncrement: (e, t)=>c.cursor.metricsIncrement({
                                    stat: e,
                                    value: 1,
                                    tags: t
                                }),
                            captureException: (e)=>c.cursor.captureException(new Error("agent_host_remote_egress_failover"), {
                                    feature: "agent_host",
                                    reason: e
                                }, {
                                    extra: {
                                        reason: e
                                    },
                                    level: "warning",
                                    fingerprint: [
                                        "agent_host_remote_egress_failover",
                                        e
                                    ]
                                })
                        }), s = t.createRemoteEgressKindLatch({
                            onExternal: (e)=>n.announce(e),
                            onDecision: (e)=>ce?.emit(e)
                        });
                        (async ()=>{
                            const t = await e.loadServerAgentnUrlOverlay(()=>T.getCachedServerConfigJson());
                            try {
                                const r = await e.probeRemoteAgentBackendEgress({
                                    remoteName: ee,
                                    creds: c.cursor.getCursorCreds(),
                                    http2Disabled: T.isHttp2Disabled(),
                                    ...void 0 === t ? {} : {
                                        serverAgentnUrl: t
                                    },
                                    loadSystemCertificates: ()=>T.loadSystemCertificates()
                                });
                                s.applyProbeResult(r);
                            } catch (e) {
                                const t = e instanceof Error ? e.message : String(e);
                                ks.gW.info(`agent host: remote egress probe did not finish (${t})`);
                            }
                        })(), ae = {
                            kind: "builtin",
                            ...ie,
                            wrapAgentTransport: (e)=>t.createRemoteEgressLatchedTransport({
                                    builtin: e,
                                    latch: s,
                                    createExternal: ()=>(0, w._9)(c.cursor.connectTransport)
                                }),
                            wrapInferenceTransport: (e)=>r.createRemoteEgressLatchedInferenceTransport({
                                    builtin: e,
                                    latch: s,
                                    createExternal: ()=>c.cursor.connectTransport,
                                    onInferenceHop: (e)=>{
                                        ks.gW.info(`agent host: local-loop inference hops to the local client (${e}); AgentService stays on the remote`), n.announce(e);
                                    }
                                })
                        };
                    } else void 0 !== ce && ce.emit({
                        kind: "builtin",
                        source: "setting",
                        reason: vo.YR
                    });
                    ho(ee) && !te && y && ks.gW.info("Native cloud subagents stay on the renderer runner for this remote host (no construct throw, no window reload)");
                    const le = e.globalStorageUri.fsPath, ue = Wg({
                        storageDir: le,
                        hostContext: ()=>Zy,
                        creationSource: C,
                        migrateOnOpen: void 0 !== k,
                        clock: Ny,
                        glassWorkspaceRole: c.cursor.glassWorkspaceRole,
                        hasLiveSession: (e)=>Sy?.hasHostedSession(e) ?? !1
                    });
                    Iy = ue, void 0 !== C ? (ks.gW.info(`Host-owned session storage enabled by the ${C}: new chats get per-session stores under the extension's global storage, mirrored to the renderer`), void 0 !== k ? ks.gW.info(`Host-owned session storage migrate-on-open enabled by the ${k}: a settled renderer-owned chat gets a host-owned store when it opens`) : ks.gW.info("Host-owned session storage migrate-on-open disabled: renderer-owned chats with turns stay renderer-owned")) : ks.gW.info("Host-owned session storage creation disabled: committed host-owned chats still reopen and mirror to the renderer");
                    try {
                        Sy = await (0, ks.H1)("Failed to create agent host", ()=>H({
                                surfaceOwnsBackgroundWakeups: !0,
                                ...ky ? {
                                    ownRequestContext: !0,
                                    prefetchFileAccess: ht()
                                } : {},
                                getSendNowBehavior: ()=>"steer" === c.workspace.getConfiguration().get("cursor.composer.queueManualSendBehavior2") ? "steer" : "interrupt",
                                ...void 0 === j ? {} : {
                                    attachLocalLoopAttemptContext: $n(j)
                                },
                                ...ue.hostOptions,
                                readPrivateInferenceEnrollment: xf,
                                network: ae,
                                gitExecutor: P,
                                mcpProvider: J,
                                sessionCatalog: {
                                    listSessions: async (e, t, r)=>{
                                        const n = (0, w.Tz)(t?.limit), s = (await c.cursor.listAgentHostSessionCatalog(n)).map((e)=>({
                                                sessionId: e.sessionId,
                                                ...void 0 === e.title ? {} : {
                                                    title: e.title
                                                },
                                                ...void 0 === e.updatedAt ? {} : {
                                                    updatedAt: e.updatedAt
                                                },
                                                ...void 0 === e.modelId ? {} : {
                                                    modelId: e.modelId
                                                },
                                                ...void 0 === e.workspace ? {} : {
                                                    workspace: e.workspace
                                                }
                                            }));
                                        return ue.mergeSessionCatalog(s, n, e, r);
                                    },
                                    ensureLoaded: async (e, t)=>c.cursor.ensureAgentHostSessionLoaded(t),
                                    setTitle: async (e, t, r)=>{
                                        ue.noteTitleChanged(t, r), await c.cursor.projectAgentHostSessionTitle(t, r);
                                    },
                                    onTitleChanged: (e)=>{
                                        const t = c.cursor.onDidChangeAgentHostSessionCatalogTitle((t)=>{
                                            ue.noteTitleChanged(t.sessionId, t.title), e(t.sessionId, t.title);
                                        });
                                        return ()=>{
                                            t.dispose();
                                        };
                                    },
                                    onArchivedChanged: (e)=>{
                                        const t = c.cursor.onDidChangeAgentHostSessionCatalogArchived((t)=>{
                                            ue.noteArchivedChanged(t.sessionId, t.isArchived), e(t.sessionId, t.isArchived);
                                        });
                                        return ()=>{
                                            t.dispose();
                                        };
                                    },
                                    onHostOwnedStorageChanged: (e)=>ue.onHostOwnedStorageChanged(e),
                                    onModelChanged: (e)=>{
                                        const t = c.cursor.onDidChangeAgentHostSessionCatalogModel((t)=>{
                                            e(t.sessionId, t.modelId);
                                        });
                                        return ()=>{
                                            t.dispose();
                                        };
                                    }
                                },
                                workspaceCatalog: {
                                    listWorkspaces: async ()=>c.cursor.listAgentHostWorkspaceCatalog()
                                },
                                userHomeDirectory: i.homedir(),
                                ...te ? {
                                    nativeCloudSubagents: {
                                        logWarning: (e)=>ks.gW.warn(e),
                                        logTrace: (e)=>ks.gW.trace(e)
                                    }
                                } : {
                                    cloudSubagentRunner: G
                                },
                                cloudSubagentsUnavailableReason: ()=>"disabled" !== Bf().state ? "Cloud subagents are turned off under private inference. Contact your administrator for more." : void 0,
                                resolveSavedModelParameters: (e)=>(async function(e, t) {
                                        const r = e.parentSessionId.trim(), n = e.rootSessionId.trim() || r;
                                        if (0 === n.length) return;
                                        const s = t.resolveCreateOptions({
                                            sessionId: r || n,
                                            rootSessionId: n,
                                            ...0 === r.length ? {} : {
                                                parentSessionId: r
                                            }
                                        });
                                        return void 0 !== s?.getSavedModelParameters ? await s.getSavedModelParameters(e.modelId, e.maxMode) : void 0;
                                    })(e, {
                                        resolveCreateOptions: Dy
                                    }),
                                resolveRequiredGlobalCommands: (e)=>(async function(e, t) {
                                        const r = e.parentSessionId.trim(), n = e.rootSessionId.trim() || r;
                                        if (0 === n.length) return;
                                        const s = t.resolveCreateOptions({
                                            sessionId: r || n,
                                            rootSessionId: n,
                                            ...0 === r.length ? {} : {
                                                parentSessionId: r
                                            }
                                        });
                                        return void 0 !== s?.getRequiredGlobalCommands ? await s.getRequiredGlobalCommands(e.subagentType) : void 0;
                                    })(e, {
                                        resolveCreateOptions: Dy
                                    }),
                                findExistingSubagentSessionId: Uy,
                                durableSubagentInvocations: uo(e.workspaceState, $y),
                                ...void 0 === E ? {} : {
                                    localSubagentLimits: {
                                        maxRunning: E.maxRunning
                                    }
                                },
                                subagentsAsSessions: !0,
                                subagentTranscripts: {
                                    projectDir: B
                                },
                                ...v ? {
                                    subagentInteractionPolicy: f.w3.SURFACE_TO_USER
                                } : {},
                                createBlobStore: (e)=>ue.resolveBlobStore(e, ()=>{
                                        const t = Dy(e);
                                        if (void 0 === t) throw new Error(`No agent-host session options for ${e.sessionId}`);
                                        return (0, gt.V)({
                                            getBlob: async (e, r)=>{
                                                try {
                                                    const n = await t.getBlob(r);
                                                    return (0, yt.g)(e, "renderer_callback", void 0 === n ? "miss" : "hit"), n;
                                                } catch (t) {
                                                    throw (0, yt.g)(e, "renderer_callback", "error"), t;
                                                }
                                            },
                                            setBlob: async (e, r, n)=>{
                                                await t.setBlob({
                                                    blobId: r,
                                                    blobData: n,
                                                    locallyOnly: !1
                                                });
                                            },
                                            setBlobLocallyOnly: async (e, r, n)=>{
                                                await t.setBlob({
                                                    blobId: r,
                                                    blobData: n,
                                                    locallyOnly: !0
                                                });
                                            },
                                            flush: (e)=>Promise.resolve()
                                        }, "renderer_callback");
                                    }),
                                createSessionStore: (e)=>ue.consumePreparedSessionStore(e.sessionId),
                                createResources: (e)=>{
                                    const t = Dy(e);
                                    if (void 0 === t) throw new Error(`No agent-host session options for ${e.sessionId}`);
                                    const r = {
                                        ...t,
                                        sessionId: e.sessionId,
                                        ...e.sessionId === e.rootSessionId ? {} : {
                                            requestContextHandler: void 0
                                        }
                                    };
                                    return void 0 !== wy ? Gy(e, r) : jy({
                                        ...r,
                                        ...Hy(e.askHostQuestion)
                                    }, e.backgroundWorkRegistry, e.gitExecutor, e.mcpLease);
                                }
                            }));
                    } catch (e) {
                        throw Yy = void 0, Py = void 0, j?.dispose(), j = void 0, Q?.dispose(), e;
                    }
                    ks.gW.info(`Agent host storage ready ${e.globalStorageUri.fsPath}`);
                    const de = {
                        loop: z,
                        createSession: async (e)=>nw(async (t)=>{
                                const r = !0 === e.catalogHydrate;
                                let n;
                                r || ry.createSession?.(e);
                                try {
                                    n = await ue.createSession({
                                        ctx: t,
                                        options: e,
                                        catalogHydrate: r,
                                        bindOptions: (t)=>{
                                            xy.set(e.sessionId, void 0 === t ? e : {
                                                ...e,
                                                getBlob: Oy(ue.rejectHostOwnedLegacyBlobRead)
                                            });
                                        },
                                        restoreRendererOptions: ()=>{
                                            xy.set(e.sessionId, e);
                                        },
                                        clearOptions: ()=>{
                                            xy.delete(e.sessionId);
                                        },
                                        createLiveSession: async (r, n)=>{
                                            await Sy.createSession(t, {
                                                sessionId: e.sessionId,
                                                initialHistory: r,
                                                sessionOptions: {
                                                    workspacePaths: e.workspacePaths,
                                                    hostedMcpRoutingEnabled: q.sessionRoutingEnabled(),
                                                    ...void 0 === e.worktreeMainPath ? {} : {
                                                        worktreeMainPath: e.worktreeMainPath
                                                    },
                                                    ...void 0 === e.isGlassRoot ? {} : {
                                                        isGlassRoot: e.isGlassRoot
                                                    },
                                                    ...void 0 === e.owningProject ? {} : {
                                                        owningProject: e.owningProject
                                                    }
                                                }
                                            }, {
                                                initialHistoryMode: n
                                            });
                                        }
                                    });
                                } catch (t) {
                                    (0, ks.EW)(`Failed to create agent host session ${e.sessionId}`, t);
                                }
                                return n.alreadyExisted || r && void 0 === n.prepared || ks.gW.info(`Created agent host session ${e.sessionId}${void 0 === n.prepared ? "" : ` (host-owned storage: ${n.prepared.kind})`}${r ? " (catalog hydrate)" : ""}`), Vy(new f.R1);
                            }),
                        listSessions: async (e)=>nw(async (t)=>{
                                const r = f.cK.fromBinary(e);
                                ry.rpc?.("listSessions", r);
                                const n = await Sy.listSessions(t, r);
                                return Vy(new f.Qk({
                                    sessions: n.sessions
                                }));
                            }),
                        listWorkspaces: async (e)=>nw(async (t)=>{
                                const r = f.XO.fromBinary(e);
                                ry.rpc?.("listWorkspaces", r);
                                const n = await Sy.listWorkspaces(t, r);
                                return Vy(new f.LX({
                                    workspaces: n.workspaces
                                }));
                            }),
                        async *watchSessions (e, t) {
                            const [r, n] = Xy().withCancel(), s = f.N9.fromBinary(e);
                            ry.rpc?.("watchSessions", s), t.isCancellationRequested && n();
                            const o = t.onCancellationRequested(()=>n());
                            try {
                                for await (const e of Sy.watchSessions(r, s)){
                                    const t = new f.cy(e);
                                    ry.streamEvent?.("watchSessions.event", t), yield Vy(t);
                                }
                            } finally{
                                o.dispose(), n();
                            }
                        },
                        sendMessage: async (e, t)=>nw(async (t)=>{
                                const r = f.AY.fromBinary(e);
                                return ry.rpc?.("sendMessage", r), (0, m.uj)(t.withName("agent_host.send_message"), async (e)=>{
                                    const t = await (0, ks.H1)(`Failed to send message to agent host session ${r.sessionId}`, ()=>Sy.sendMessage(e, r));
                                    return Vy(new f.Ot({
                                        turnId: t.turnId,
                                        deliveredAs: t.deliveredAs
                                    }));
                                });
                            }, t),
                        async offerRequestContextOverlay (e, t) {
                            ky && 0 !== e.length && Sy.offerRequestContextOverlay?.(e, f.hV.fromBinary(t));
                        },
                        sendAction: async (e, t)=>nw(async (t)=>{
                                const r = f.J6.fromBinary(e);
                                ry.rpc?.("sendAction", r);
                                const n = r.turnOptions?.generationUuid;
                                return ky && void 0 !== n && n.length > 0 && "userMessageAction" === r.action?.action.case && Sy.expectRequestContextOverlay?.(n), (0, m.uj)(t.withName("agent_host.send_action"), async (e)=>{
                                    const t = await (0, ks.H1)(`Failed to send action to agent host session ${r.sessionId}`, ()=>Sy.sendAction(e, (0, w.Gh)(r)));
                                    return Vy(new f.Jn({
                                        turnId: t.turnId,
                                        deliveredAs: t.deliveredAs
                                    }));
                                });
                            }, t),
                        deleteSession: async (e)=>nw(async (t)=>{
                                const r = f.mq.fromBinary(e);
                                ry.rpc?.("deleteSession", r);
                                try {
                                    await ue.deleteSession({
                                        sessionId: r.sessionId,
                                        deleteLiveSession: async ()=>{
                                            await Sy.deleteSession(t, r);
                                        }
                                    });
                                } catch (e) {
                                    (0, ks.EW)(`Failed to delete agent host session ${r.sessionId}`, e);
                                }
                                return ks.gW.info(`Deleted agent host session ${r.sessionId}`), Vy(new f.mY);
                            }),
                        interruptTurn: async (e)=>nw(async (t)=>{
                                const r = f.ty.fromBinary(e);
                                ry.rpc?.("interruptTurn", r);
                                const n = await Sy.interruptTurn(t, r);
                                return Vy(new f.n4({
                                    interrupted: n.interrupted
                                }));
                            }),
                        cancelQueuedTurn: async (e)=>nw(async (t)=>{
                                const r = f.To.fromBinary(e);
                                ry.rpc?.("cancelQueuedTurn", r);
                                const n = await Sy.cancelQueuedTurn(t, r);
                                return Vy(new f.ZS({
                                    cancelled: n.cancelled
                                }));
                            }),
                        setSessionTitle: async (e)=>nw(async (t)=>{
                                ry.rpc?.("setSessionTitle", e), await Sy.setSessionTitle(t, e);
                            }),
                        fetchPrivateInferenceCatalog: async ()=>W?.current(),
                        onDidChangePrivateInferenceCatalog: W?.onDidChange,
                        fetchPromptQualityReport: async (e)=>V?.(e.conversationId),
                        async generatePrivateInferenceChatTitle (e, t) {
                            if (void 0 !== K) return async function(e, t, r) {
                                const n = Date.now(), s = (e)=>`[private-inference] chat title conversation=${t.conversationId} model=${t.modelId} outcome=${e} total=${Date.now() - n}ms`, o = new AbortController, i = r.onCancellationRequested(()=>o.abort());
                                r.isCancellationRequested && o.abort();
                                try {
                                    const r = await e(t, o.signal);
                                    return ks.gW.info(s(void 0 === r ? "no-name" : "named")), r;
                                } catch (e) {
                                    return void ks.gW.warn(s(o.signal.aborted ? "cancelled" : `failed (${e instanceof Error ? `${e.name}: ${e.message}` : String(e)})`));
                                } finally{
                                    i.dispose();
                                }
                            }(K, e, t);
                        },
                        forkSession: async (e)=>nw(async (t)=>{
                                const r = await ue.forkSession({
                                    ctx: t,
                                    ...e
                                });
                                return r && ks.gW.info(`Forked agent host session ${e.parentSessionId} into ${e.sessionId} (host-owned storage seeded from the cut)`), r;
                            }),
                        respondToInteraction: async (e)=>nw(async (t)=>{
                                const r = f.nK.fromBinary(e);
                                ry.rpc?.("respondToInteraction", r);
                                const { sessionId: n, interactionId: s, answer: o } = r;
                                if (void 0 === o.case) throw new Error("Agent-host interaction response request must carry an answer");
                                const i = await Sy.respondToInteraction(t, {
                                    sessionId: n,
                                    interactionId: s,
                                    answer: o
                                });
                                return Vy(new f.Th({
                                    status: i.status
                                }));
                            }),
                        async *watchSessionInteractions (e, t) {
                            const [r, n] = Xy().withCancel(), s = f.X7.fromBinary(e);
                            ry.rpc?.("watchSessionInteractions", s), t.isCancellationRequested && n();
                            const o = t.onCancellationRequested(()=>n());
                            try {
                                for await (const e of Sy.watchSessionInteractions(r, s)){
                                    const t = new f.Mt(e);
                                    ry.streamEvent?.("watchSessionInteractions.event", t), yield Vy(t);
                                }
                            } finally{
                                o.dispose(), n();
                            }
                        },
                        async *watchSessionBackgroundWork (e, t) {
                            const [r, n] = Xy().withCancel(), s = f.j$.fromBinary(e);
                            ry.rpc?.("watchSessionBackgroundWork", s), t.isCancellationRequested && n();
                            const o = t.onCancellationRequested(()=>n());
                            try {
                                for await (const e of Sy.watchSessionBackgroundWork(r, {
                                    sessionId: s.sessionId,
                                    kind: s.kind,
                                    state: s.state,
                                    ownerId: s.ownerId
                                })){
                                    const t = new f.Ml(e);
                                    ry.streamEvent?.("watchSessionBackgroundWork.event", t), yield Vy(t);
                                }
                            } finally{
                                o.dispose(), n();
                            }
                        },
                        async *watchSessionTurnLifecycle (e, t) {
                            const [r, n] = Xy().withCancel(), s = f.X.fromBinary(e);
                            ry.rpc?.("watchSessionTurnLifecycle", s), t.isCancellationRequested && n();
                            const o = t.onCancellationRequested(()=>n());
                            try {
                                for await (const e of Sy.watchSessionTurnLifecycle(r, s)){
                                    const t = new f.m$(e);
                                    ry.streamEvent?.("watchSessionTurnLifecycle.event", t), yield Vy(t);
                                }
                            } finally{
                                o.dispose(), n();
                            }
                        },
                        abortBackgroundWork: async (e)=>nw(async (t)=>{
                                const r = f.c_.fromBinary(e);
                                ry.rpc?.("abortBackgroundWork", r);
                                const n = await Sy.abortBackgroundWork(t, r);
                                return Vy(new f.k4({
                                    aborted: n.aborted
                                }));
                            }),
                        abortAllBackgroundWork: async (e)=>nw(async (t)=>{
                                const r = f.vC.fromBinary(e);
                                ry.rpc?.("abortAllBackgroundWork", r);
                                const n = await Sy.abortAllBackgroundWork(t, {
                                    sessionId: r.sessionId,
                                    kind: r.kind,
                                    state: r.state,
                                    ownerId: r.ownerId
                                });
                                return Vy(new f.fF({
                                    abortedCount: n.abortedCount
                                }));
                            }),
                        async *attachSession (e, t) {
                            const [r, n] = Xy().withCancel(), s = f.EM.fromBinary(e);
                            ry.rpc?.("attachSession", s), t.isCancellationRequested && n();
                            const o = t.onCancellationRequested(()=>n());
                            try {
                                for await (const e of Sy.attachSession(r, s)){
                                    const t = new f.cp(e);
                                    ry.streamEvent?.("attachSession.event", t), yield Vy(t);
                                }
                            } finally{
                                o.dispose(), n();
                            }
                        },
                        getSessionBlobs: async (e)=>nw(async (t)=>{
                                const r = f.z4.fromBinary(e);
                                ry.rpc?.("getSessionBlobs", {
                                    sessionId: r.sessionId,
                                    blobIdCount: r.blobIds.length,
                                    maxResponseBytes: r.maxResponseBytes?.toString()
                                });
                                const n = await Sy.getSessionBlobs(t, r);
                                return Vy(new f.NY(n));
                            }),
                        async *readFile (e, t) {
                            const [r, n] = Xy().withCancel(), s = f.Xi.fromBinary(e);
                            ry.rpc?.("readFile", {
                                readOffset: s.readOffset.toString(),
                                readLimit: s.readLimit.toString(),
                                revalidating: void 0 !== s.cachedMtimeMs
                            }), t.isCancellationRequested && n();
                            const o = t.onCancellationRequested(()=>n());
                            try {
                                for await (const e of Sy.readFile(r, s))yield Vy(new f.JK(e));
                            } catch (e) {
                                throw function(e) {
                                    if (!(e instanceof Error)) return e;
                                    const t = e.code, r = oy.find((r)=>r.name === e.name || r.code === t);
                                    return void 0 !== r ? new sy.T(e.message, r.connectCode, void 0, void 0, e) : "AbortError" === e.name ? new sy.T(e.message, ny.C.Canceled, void 0, void 0, e) : e;
                                }(e);
                            } finally{
                                o.dispose(), n();
                            }
                        }
                    };
                    if (void 0 !== Q) {
                        const e = Q;
                        try {
                            e.register(), Cy = c.cursor.registerAgentHostProvider(de), By = ()=>{
                                e.dispose();
                            }, L = e.snapshot;
                        } catch (t) {
                            throw e.dispose(), Q = void 0, By = void 0, Yy = void 0, Py = void 0, j?.dispose(), j = void 0, Cy?.dispose(), Cy = void 0, t;
                        }
                    } else try {
                        Cy = c.cursor.registerAgentHostProvider(de);
                    } catch (e) {
                        throw Yy = void 0, Py = void 0, j?.dispose(), j = void 0, e;
                    }
                    pe = Sy, c.cursor.setAgentHostServingModule(pe.servingModule?.()), by = pe.onDidChangeServingModule?.((e)=>{
                        c.cursor.setAgentHostServingModule(e);
                    }), void 0 !== Z && (Ey = Z(ue.hostOptions.metrics));
                    var pe;
                    if (r(), j?.markActivationComplete(), c.cursor.metricsDistribution({
                        stat: "agent_host.startup.timeToBridgeRegisterMs",
                        value: Date.now() - t
                    }), c.cursor.metricsDistribution({
                        stat: "agent_host.startup.createHostToRegisterMs",
                        value: Date.now() - X
                    }), ks.gW.info(`Created agent host and registered provider (network kind: ${ae.kind}, timeToBridgeRegisterMs: ${Date.now() - t})`), e.extensionMode !== c.ExtensionMode.Test) return;
                    return {
                        execWiring: M,
                        execRuntime: yy,
                        provider: de,
                        ...void 0 === O ? {} : {
                            moveExecShell: O
                        },
                        ...void 0 === N ? {} : {
                            moveExecMcp: N
                        },
                        ...void 0 === F ? {} : {
                            moveExecPlugins: F
                        },
                        ...void 0 === U ? {} : {
                            moveExecAgentStore: U
                        },
                        ...void 0 === L ? {} : {
                            moveExecCanvas: L
                        },
                        ...void 0 === $ ? {} : {
                            moveExecObservability: $
                        },
                        createSessionResources: (e)=>(xy.set(e.sessionId, e), void 0 !== wy ? Gy({
                                sessionId: e.sessionId,
                                rootSessionId: e.sessionId,
                                backgroundWorkRegistry: Ty,
                                gitExecutor: P,
                                mcpLease: J,
                                askHostQuestion: zy(e)
                            }, e) : jy(e, void 0, P, J))
                    };
                })(e)
        });
        ks.gW.info("Agent host is disabled (cursorAgentHostEnabled gate off); skipping activation");
    }
    async function ow() {
        ks.gW.info("Deactivating agent host extension");
        const e = My;
        My = void 0, e?.dispose();
        const t = Jy;
        Jy = void 0;
        try {
            t?.close();
        } catch (e) {
            ks.gW.error("Error while closing move_exec connect-only client during deactivation", e);
        }
        Cy?.dispose(), Cy = void 0;
        const r = Ey;
        Ey = void 0;
        try {
            r?.dispose();
        } catch (e) {
            ks.gW.error("Error while stopping the validate-only agent harness during deactivation", e);
        }
        const n = Sy;
        Sy = void 0;
        try {
            await n?.dispose(), xy.clear();
        } catch (e) {
            (0, ks.EW)("Error while disposing agent host during deactivation", e);
        } finally{
            by?.(), by = void 0;
            const e = Iy;
            Iy = void 0;
            try {
                e?.dispose();
            } catch (e) {
                ks.gW.error("Error while disposing host session storage during deactivation", e);
            }
            const t = vy;
            vy = void 0;
            try {
                t?.dispose();
            } catch (e) {
                ks.gW.error("Error while disposing MCP overlay during deactivation", e);
            }
            const r = Ry;
            if (Ry = void 0, void 0 !== r) try {
                await r();
            } catch (e) {
                ks.gW.error("Error while disposing move_exec agent-store harness during deactivation", e);
            }
            const n = wy;
            wy = void 0;
            try {
                await n?.dispose();
            } catch (e) {
                ks.gW.error("Error while disposing agent-host-exec during deactivation", e);
            }
            const s = By;
            By = void 0;
            try {
                s?.();
            } catch (e) {
                ks.gW.error("Error while disposing canvas overlay during deactivation", e);
            }
            const o = Py;
            Py = void 0;
            try {
                o?.();
            } catch (e) {
                ks.gW.error("Error while disposing observability overlay during deactivation", e);
            }
            const i = yy;
            yy = void 0;
            try {
                await i?.deactivate();
            } catch (e) {
                ks.gW.error("Error while deactivating cursor-agent-exec runtime during deactivation", e);
            }
            const a = Ay;
            Ay = void 0;
            try {
                a?.dispose();
            } catch (e) {
                ks.gW.error("Error while disposing hosted MCP routing adapter during deactivation", e);
            }
            const c = _y;
            _y = void 0;
            try {
                c?.dispose();
            } catch (e) {
                ks.gW.error("Error while disposing MCP lease during deactivation", e);
            }
            Rf?.dispose(), Rf = void 0;
        }
    }
})();
var __webpack_export_target__ = exports;
for(var __webpack_i__ in __webpack_exports__)__webpack_export_target__[__webpack_i__] = __webpack_exports__[__webpack_i__];
__webpack_exports__.__esModule && Object.defineProperty(__webpack_export_target__, "__esModule", {
    value: !0
});

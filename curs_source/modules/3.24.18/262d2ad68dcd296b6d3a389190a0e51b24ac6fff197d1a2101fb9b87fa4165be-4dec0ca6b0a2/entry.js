var __webpack_exports__ = {};
(()=>{
    "use strict";
    require.r(__webpack_exports__), require.d(__webpack_exports__, {
        activate: ()=>y
    });
    var e = require("./module-29966.js"), t = require("./module-37949.js"), r = require("./module-69584.js"), n = require("./module-91434.js");
    const o = (0, t.h)("ControlledConversationActionManager");
    class s {
        get signal() {
            return this.abortController.signal;
        }
        get abortRequested() {
            return this.abortCalled;
        }
        constructor(){
            this.abortCallbacks = [], this.abortController = new AbortController, this.acceptsActions = !0, this.disposed = !1, this.abortStarted = !1, this.abortCalled = !1, this.runActive = !1, this.unprocessedUserMessages = [], this.clientStream = (0, n.Jt)();
        }
        addAbortCallback(e) {
            this.abortCallbacks.push(e);
        }
        abort(e, t) {
            this.abortCalled = !0;
            if (this.abortController.signal.aborted || this.abortStarted) return;
            const n = t?.interruptedPendingToolCallResolutions;
            if (this.abortStarted = !0, !this.runActive) {
                this.abortController.abort(e);
                for (const e of this.abortCallbacks)e();
                return void (this.abortCallbacks.length = 0);
            }
            const o = this.abortController, s = [
                ...this.abortCallbacks
            ];
            this.abortCallbacks.length = 0, this.submitConversationAction(new r.QFf({
                action: {
                    case: "cancelAction",
                    value: new r.TTG({
                        reason: e,
                        interruptedPendingToolCallResolutions: n
                    })
                }
            })).catch(()=>{}).finally(()=>{
                o.abort(e);
                for (const e of s)e();
                if (this.abortController === o) {
                    const e = [
                        ...this.abortCallbacks
                    ];
                    this.abortCallbacks.length = 0;
                    for (const t of e)t();
                }
            });
        }
        async submitConversationAction(e) {
            if (!this.acceptsActions) throw new n.W2("ControlledConversationActionManager is not accepting actions");
            if ("userMessageAction" === e.action.case) {
                const t = e.action.value.userMessage;
                t && this.unprocessedUserMessages.push(t);
            }
            await this.clientStream.write(e);
        }
        queueFollowUpUserMessage(e) {
            if (this.disposed || this.abortStarted) throw new n.W2("ControlledConversationActionManager run was aborted or disposed");
            this.unprocessedUserMessages.push(e);
        }
        async enqueueReplayableConversationAction(e) {
            if ("asyncAskQuestionCompletionAction" !== e.action.case) throw new TypeError("Only asyncAskQuestionCompletionAction can use enqueue acknowledgement");
            if (!this.acceptsActions) throw new n.W2("ControlledConversationActionManager is not accepting actions");
            this.clientStream.write(e).catch(()=>{});
        }
        markMessageAsProcessed(e) {
            this.unprocessedUserMessages = this.unprocessedUserMessages.filter((t)=>t.messageId !== e.messageId);
        }
        requeueMessage(e) {
            this.unprocessedUserMessages.some((t)=>t.messageId === e.messageId) || this.unprocessedUserMessages.unshift(e);
        }
        getUnprocessedUserMessages() {
            return [
                ...this.unprocessedUserMessages
            ];
        }
        hasUnprocessedMessages() {
            return this.unprocessedUserMessages.length > 0;
        }
        close() {
            this.acceptsActions = !1, this.clientStream.close();
        }
        reopen() {
            this.disposed || this.acceptsActions || this.resetStream();
        }
        resetStream() {
            if (this.disposed) throw new n.W2("ControlledConversationActionManager disposed");
            this.acceptsActions = !1, this.clientStream.close(), this.clientStream = (0, n.Jt)(), this.acceptsActions = !0, this.abortController = new AbortController, this.abortStarted = !1;
            for (const e of this.unprocessedUserMessages)this.clientStream.write(new r.QFf({
                action: {
                    case: "userMessageAction",
                    value: new r.Vtf({
                        userMessage: e
                    })
                }
            })).catch(()=>{});
        }
        async run(e, t) {
            const r = this.clientStream;
            this.runActive = !0;
            try {
                for await (const n of r)try {
                    await t.write(n);
                } catch (t) {
                    o.error(e, "Error writing conversation action", t);
                }
            } catch (e) {
                if (!(e instanceof n.W2)) throw e;
            } finally{
                this.clientStream === r && (this.runActive = !1);
            }
        }
        dispose() {
            this.disposed || (this.disposed = !0, this.abortCallbacks.length = 0, this.acceptsActions = !1, this.clientStream.throw(new n.W2("ControlledConversationActionManager disposed")));
        }
    }
    var i = require("./module-33002.js"), a = require("./module-86209.js"), l = require("./module-55094.js"), c = require("./module-12544.js");
    const u = require("vscode"), d = (0, t.h)("local-agent-runtime-gateway-request");
    class p {
        constructor(e){
            this.callbacks = e, this.nextId = 0;
        }
        async *createExecInstance(e, t) {
            const r = this.nextId++;
            for await (const n of this.callbacks.executeExec(t(r).toBinary(), e.signal)){
                const e = String.fromCharCode(n[0]), t = n.subarray(1);
                if ("M" === e) {
                    yield l.yT.fromBinary(t);
                    continue;
                }
                if ("C" !== e) throw new Error(`Invalid renderer exec response prefix ${e}`);
                const r = l.$Y.fromBinary(t);
                if ("streamClose" === r.message.case) return;
                if ("throw" === r.message.case) {
                    const e = new Error(r.message.value.error);
                    throw r.message.value.stackTrace && (e.stack = r.message.value.stackTrace), "EXEC_BACKEND_UNAVAILABLE" === r.message.value.errorCode ? e.name = "ExecBackendUnavailableError" : "AGENT_EXEC_STREAM_START_TIMEOUT" === r.message.value.errorCode && (e.name = "AgentExecStreamStartTimeoutError"), e;
                }
            }
        }
    }
    class h {
        constructor(e){
            this.callbacks = e;
        }
        getBlob(e, t) {
            return this.callbacks.getBlob(t);
        }
        setBlob(e, t, r) {
            return this.callbacks.setBlob(t, r, !1);
        }
        setBlobLocallyOnly(e, t, r) {
            return this.callbacks.setBlob(t, r, !0);
        }
        flush() {
            return Promise.resolve();
        }
    }
    class m {
        constructor(e){
            this.callbacks = e, this.postTurnEndedWorkQueue = [];
        }
        async sendUpdate(e, t) {
            await this.callbacks.sendInteractionUpdate(t.toBinary());
        }
        async query(e, t) {
            return r.Y5.fromBinary(await this.callbacks.queryInteraction(t.toBinary()));
        }
        enqueuePostTurnEndedWork(e) {
            this.postTurnEndedWorkQueue.push(e);
        }
        async flushPostTurnEndedWork() {
            for (const e of this.postTurnEndedWorkQueue.splice(0))await e();
        }
    }
    let f;
    class g {
        constructor(e){
            this.outputChannel = e;
        }
        log(e, t) {
            const { level: r, message: n, metadata: o, error: s } = t, i = void 0 !== o && Object.keys(o).length > 0 ? `${n} ${JSON.stringify(o)}` : n, a = void 0 !== s ? `${i}\n${s instanceof Error ? s.stack ?? s.message : String(s)}` : i;
            switch(r){
                case "debug":
                    this.outputChannel.debug(a);
                    break;
                case "info":
                    this.outputChannel.info(a);
                    break;
                case "warn":
                    this.outputChannel.warn(a);
                    break;
                case "error":
                    this.outputChannel.error(a);
                    break;
                default:
                    throw new Error(`Unhandled log level: ${r}`);
            }
        }
    }
    function y(n) {
        const o = u.window.createOutputChannel("Local Agent Runtime", {
            log: !0
        });
        n.subscriptions.push(o);
        const l = new g(o), y = {
            async runLocalAgent (n, o, u) {
                if (!function(e) {
                    if ("object" != typeof e || null === e) return !1;
                    const t = e;
                    return "string" == typeof t.baseUrl && t.defaultModel instanceof Uint8Array && Array.isArray(t.availableModelIds) && t.conversationState instanceof Uint8Array && t.action instanceof Uint8Array && "object" == typeof t.runOptions && null !== t.runOptions && Array.isArray(t.mcpTools);
                }(n)) throw new Error("Invalid local agent run request");
                if (!function(e) {
                    if ("object" != typeof e || null === e) return !1;
                    const t = e;
                    return "function" == typeof t.sendInteractionUpdate && "function" == typeof t.queryInteraction && "function" == typeof t.handleCheckpoint && "function" == typeof t.getBlob && "function" == typeof t.setBlob && "function" == typeof t.uploadPromptQualitySnapshot && "function" == typeof t.executeExec;
                }(o)) throw new Error("Invalid local agent run callbacks");
                const g = n, y = o, v = await (f ??= Promise.resolve().then(require.bind(require, "./module-81719.js")), f), w = r.Gmx.fromBinary(g.defaultModel), b = g.modelDetails ? r.Gmx.fromBinary(g.modelDetails) : void 0, _ = r.QFf.fromBinary(g.action), S = r.Y9z.fromBinary(g.conversationState), x = "userMessageAction" === _.action.case ? _.action.value.userMessage?.mode : void 0, k = void 0 !== x && x !== r.xyI.UNSPECIFIED ? x : S.mode, E = new e.QHB(new p(y));
                if (E.register(e.OkD), E.register(e.sOX), E.register(e.ryB), E.register(e.RpG), E.register(e.w4j), E.register(e.PEk), E.register(e.I2x), E.register(e.jH1), E.register(e.u8v), E.register(e.bob), E.register(e.rn8), E.register(e.bL4), E.register(e.ODj), E.register(e.Yib), E.register(e.pY2), E.register(e._As), E.register(e.mlu), E.register(e.MZM), E.register(e.GuN), E.register(e.qkk), E.register(e.wve), E.register(e.rz0), E.register(e.ZnQ), E.register(e.sC3), E.register(e.TQC), E.register(e.Lnu), void 0 !== y.executeSubagent) {
                    const t = {
                        execute: async (e, t)=>c.vS.fromBinary(await y.executeSubagent(t.toBinary(), e.signal))
                    };
                    E.set(e.ZnQ, t);
                }
                if (void 0 !== y.forceBackgroundSubagent) {
                    const t = {
                        execute: async (e, t)=>c.a3.fromBinary(await y.forceBackgroundSubagent(t.toBinary()))
                    };
                    E.set(e.I2x, t);
                }
                if (void 0 !== y.awaitSubagent) {
                    const t = {
                        execute: async (e, t)=>c.zJ.fromBinary(await y.awaitSubagent(t.toBinary(), e.signal))
                    };
                    E.set(e.rz0, t);
                }
                const T = k === r.xyI.ASK ? (0, e.uaw)(E) : E, C = new v.LocalAgentClient({
                    localProvider: {
                        kind: "http",
                        endpoints: [
                            {
                                baseUrl: g.baseUrl,
                                ...void 0 !== g.apiKey ? {
                                    apiKey: g.apiKey
                                } : {}
                            }
                        ]
                    },
                    defaultModel: w,
                    availableModels: ()=>g.availableModelIds.map((e)=>new r.Gmx({
                                modelId: e
                            })),
                    privacyMode: g.privacyMode,
                    userAgent: g.userAgent,
                    customHeaders: g.customHeaders,
                    urlProtocol: g.urlProtocol,
                    maxRetries: 10,
                    enableSmartModeClassifier: !0,
                    onPromptQualitySnapshot: (e)=>{
                        y.uploadPromptQualitySnapshot(e.generationUUID, e.capabilityNonce);
                    }
                }), [I, A] = (0, i.q6)().with(t._O, l).withCancel(), P = ()=>A();
                u?.addEventListener("abort", P, {
                    once: !0
                });
                const M = (e)=>{
                    d.info(I, "Gateway request settled", {
                        ...e
                    });
                };
                try {
                    await C.run(I, S, _, b, new m(y), T, new h(y), new s, {
                        handleCheckpoint: (e, t)=>y.handleCheckpoint(t.toBinary()),
                        getLatestCheckpoint: ()=>{}
                    }, g.mcpTools, {
                        ...g.runOptions,
                        requestedModel: g.runOptions.requestedModel ? a.G4.fromBinary(g.runOptions.requestedModel) : void 0,
                        subagentModelOverrides: g.runOptions.subagentModelOverrides?.map((e)=>r.Bjv.fromBinary(e)),
                        onGatewayRequest: M
                    });
                } finally{
                    u?.removeEventListener("abort", P);
                }
            }
        };
        n.subscriptions.push(u.cursor.registerLocalAgentRuntimeProvider(y));
    }
})();
var __webpack_export_target__ = exports;
for(var __webpack_i__ in __webpack_exports__)__webpack_export_target__[__webpack_i__] = __webpack_exports__[__webpack_i__];
__webpack_exports__.__esModule && Object.defineProperty(__webpack_export_target__, "__esModule", {
    value: !0
});

import { ContextInjectionLedger, init_context_injection } from "./context-injection.js";
import { createLogger } from "../../../agent-kv/dist/subagent-states.js";
import { init_dist } from "../../../context/dist/index.js";
var logger10, QUEUE_DEPTH_WARNING_THRESHOLD, PENDING_STEER_FALLBACK_DEADLINE_MS, NoopConversationActionReceiver, ConversationActionMailboxOverflowError, BoundedConversationActionMailbox, RemoteConversationActionManager;
export { BoundedConversationActionMailbox, ConversationActionMailboxOverflowError, NoopConversationActionReceiver, PENDING_STEER_FALLBACK_DEADLINE_MS, QUEUE_DEPTH_WARNING_THRESHOLD, RemoteConversationActionManager, logger10 };
var __wakaru_init_remote2_initialized = false;
export function init_remote2() {
if (__wakaru_init_remote2_initialized) return;
__wakaru_init_remote2_initialized = true;
"use strict";
init_dist();
init_context_injection();
logger10 = createLogger("RemoteConversationActionManager");
QUEUE_DEPTH_WARNING_THRESHOLD = 3;
PENDING_STEER_FALLBACK_DEADLINE_MS = 5 * 60 * 1e3;
NoopConversationActionReceiver = class {
    async pop(_ctx) {
        return void 0;
    }
    async peek(_ctx) {
        return void 0;
    }
};
ConversationActionMailboxOverflowError = class extends Error {
    constructor(){
        super(...arguments);
        this.name = "ConversationActionMailboxOverflowError";
    }
};
BoundedConversationActionMailbox = class {
    constructor(maxActions){
        this.maxActions = maxActions;
        this.queue = [];
    }
    get length() {
        return this.queue.length;
    }
    push(message) {
        if (this.interceptor?.(message) === true) {
            return false;
        }
        if (this.queue.length >= this.maxActions) {
            throw new ConversationActionMailboxOverflowError("Conversation action mailbox limit exceeded");
        }
        this.queue.push(message);
        return true;
    }
    setInterceptor(interceptor) {
        this.interceptor = interceptor;
        const pendingMessages = [
            ...this.queue
        ];
        this.clear();
        for (const message of pendingMessages){
            if (!interceptor(message)) {
                this.queue.push(message);
            }
        }
    }
    shift() {
        return this.queue.shift();
    }
    peek() {
        return this.queue[0];
    }
    clear() {
        this.queue.length = 0;
    }
};
RemoteConversationActionManager = class {
    constructor(listenerCtx, mailbox, cancel, options2){
        this.mailbox = mailbox;
        this.cancel = cancel;
        this.transformedActions = new WeakMap();
        this.injectionDeliveryBuffer = [];
        this.injectionAdmittedListeners = new Set();
        this.listenerCtx = listenerCtx;
        this.subagentCanceler = options2?.subagentCanceler;
        this.sideChannelHandlers = options2?.sideChannelHandlers ?? {};
        this.transform = options2?.transform;
        this.contextInjectionOptions = options2?.contextInjection;
        if (this.contextInjectionOptions !== void 0) {
            this.injectionLedger = new ContextInjectionLedger(this.contextInjectionOptions.activeRunId, {
                onStateChange: this.contextInjectionOptions.onInjectionStateChange
            });
        }
        mailbox.setInterceptor((message)=>this.handleImmediateAction(message));
    }
    endRun() {
        this.injectionLedger?.endRun({
            retagClaimed: false
        });
        this.resyncOverduePendingSteerFallback();
    }
    resyncOverduePendingSteerFallback() {
        const oldestAdmittedAtMs = this.injectionLedger?.oldestPendingAdmittedAtMs("user");
        if (this.overduePendingSteerTimer !== void 0) {
            clearTimeout(this.overduePendingSteerTimer);
            this.overduePendingSteerTimer = void 0;
        }
        if (oldestAdmittedAtMs === void 0) {
            return;
        }
        const fireInMs = Math.max(0, oldestAdmittedAtMs + PENDING_STEER_FALLBACK_DEADLINE_MS - Date.now());
        const timer2 = setTimeout(()=>{
            this.overduePendingSteerTimer = void 0;
            const converted = this.injectionLedger?.retagQueuedUserInjectionsToNextTurn() ?? [];
            if (converted.length > 0) {
                logger10.info(this.listenerCtx, "Overdue pending context injections converted to queued follow-ups", {
                    convertedInjectionIds: converted
                });
            }
        }, fireInMs);
        timer2.unref?.();
        this.overduePendingSteerTimer = timer2;
    }
    handleImmediateAction(message) {
        if (message.action.case === "cancelAction") {
            const reason = message.action.value.reason || "unknown";
            logger10.info(this.listenerCtx, `Cancel action received`, {
                reason
            });
            const excludeToolCallIds = [
                ...new Set([
                    ...message.action.value.interruptedPendingToolCallResolutions?.resolutions.filter((resolution)=>resolution.resolution.case === "taskResult").map((resolution)=>resolution.toolCallId) ?? []
                ])
            ];
            this.mailbox.clear();
            this.injectionDeliveryBuffer.length = 0;
            this.injectionLedger?.endRun();
            this.resyncOverduePendingSteerFallback();
            this.subagentCanceler?.cancelAll({
                intentional: true,
                reason: "cancel action",
                excludeToolCallIds
            });
            this.cancel();
            return true;
        }
        if (message.action.case === "cancelSubagentAction") {
            const subagentId = message.action.value.subagentId;
            if (subagentId && this.subagentCanceler) {
                this.subagentCanceler.cancel(subagentId);
            }
            return true;
        }
        if (message.action.case === "injectContextAction") {
            this.handleInjectContext(message, message.action.value);
            return true;
        }
        if (message.action.case === "backgroundShellAction" || message.action.case === "backgroundSubagentAction") {
            const actionCase = message.action.case;
            const toolCallId = message.action.value.toolCallId;
            const handler = this.sideChannelHandlers[actionCase];
            if (toolCallId && handler) {
                void handler(toolCallId).catch((error3)=>{
                    logger10.error(this.listenerCtx, `Error in side-channel handler for ${actionCase}`, error3);
                });
                return true;
            }
        }
        return false;
    }
    handleInjectContext(envelope, action) {
        if (this.injectionLedger === void 0 || this.contextInjectionOptions === void 0) {
            logger10.info(this.listenerCtx, "InjectContextAction received without context-injection support; dropping", {
                injectionId: action.injectionId
            });
            return;
        }
        if (action.payload.case === "systemContext") {
            logger10.info(this.listenerCtx, "System context injection rejected", {
                injectionId: action.injectionId,
                producer: action.payload.value.producer
            });
            this.contextInjectionOptions.onInjectionStateChange?.(action.injectionId, {
                kind: "rejected",
                reason: "producer_not_allowlisted"
            });
            return;
        }
        if (action.payload.case !== "userContext" || action.payload.value.userMessage === void 0) {
            logger10.info(this.listenerCtx, "Context injection rejected: missing user payload", {
                injectionId: action.injectionId
            });
            this.contextInjectionOptions.onInjectionStateChange?.(action.injectionId, {
                kind: "rejected",
                reason: "invalid_payload"
            });
            return;
        }
        const admission = this.injectionLedger.admit({
            injectionId: action.injectionId,
            expectedRunId: action.expectedRunId,
            source: "user",
            payload: {
                envelope,
                userContext: action.payload.value
            }
        });
        logger10.info(this.listenerCtx, "Context injection admission", {
            injectionId: action.injectionId,
            expectedRunId: action.expectedRunId,
            admission: admission.kind,
            ...admission.kind === "rejected" ? {
                reason: admission.reason
            } : {}
        });
        if (admission.kind === "queued") {
            this.resyncOverduePendingSteerFallback();
            for (const listener of this.injectionAdmittedListeners){
                try {
                    listener();
                } catch (error3) {
                    logger10.error(this.listenerCtx, "Error in injection-admitted listener", error3);
                }
            }
        }
        if (admission.kind === "rejected") {
            this.contextInjectionOptions.onInjectionStateChange?.(action.injectionId, {
                kind: "rejected",
                reason: admission.reason
            });
        }
    }
    cancelInjection(injectionId) {
        const cancelled = this.injectionLedger?.cancel(injectionId) ?? false;
        if (cancelled) {
            this.resyncOverduePendingSteerFallback();
        }
        return cancelled;
    }
    getInjectionState(injectionId) {
        return this.injectionLedger?.getState(injectionId);
    }
    peekIsClaimedInjection() {
        return this.injectionDeliveryBuffer[0] !== void 0;
    }
    failConsumedInjectionDelivery() {
        const injectionId = this.lastConsumedInjectionId;
        this.lastConsumedInjectionId = void 0;
        if (injectionId === void 0) {
            return false;
        }
        const reverted = this.injectionLedger?.failDeliveredInjection(injectionId) ?? false;
        if (reverted) {
            logger10.info(this.listenerCtx, "Consumed injection reverted after turn-build failure", {
                injectionId
            });
        }
        return reverted;
    }
    getContextInjectionToolSignal() {
        const ledger = this.injectionLedger;
        if (ledger === void 0) {
            return void 0;
        }
        return {
            hasPendingUserInjections: ()=>ledger.pendingCount("user") > 0,
            onUserInjectionAdmitted: (listener)=>{
                this.injectionAdmittedListeners.add(listener);
                return ()=>{
                    this.injectionAdmittedListeners.delete(listener);
                };
            }
        };
    }
    claimPendingInjectionsIfIdle() {
        if (this.injectionLedger === void 0 || this.mailbox.length > 0 || this.injectionDeliveryBuffer.length > 0) {
            return;
        }
        const batch = this.injectionLedger.claimBatch("user");
        if (batch === void 0) {
            return;
        }
        batch.injections.forEach((injection)=>{
            const { envelope, userContext } = injection.payload;
            this.injectionDeliveryBuffer.push({
                injectionId: injection.injectionId,
                action: {
                    _privacyMode: envelope._privacyMode,
                    triggeringAuthId: envelope.triggeringAuthId,
                    triggeringUserInfo: envelope.triggeringUserInfo,
                    action: {
                        case: "userMessageAction",
                        value: {
                            _privacyMode: envelope._privacyMode,
                            userMessage: userContext.userMessage,
                            requestContext: userContext.requestContext,
                            prependUserMessages: []
                        }
                    }
                }
            });
        });
        logger10.info(this.listenerCtx, "Context injection batch claimed", {
            deliveryBatchId: batch.deliveryBatchId,
            batchSize: batch.injections.length
        });
        this.resyncOverduePendingSteerFallback();
    }
    async pop(_ctx) {
        const bufferedEntry = this.injectionDeliveryBuffer.shift();
        if (bufferedEntry !== void 0) {
            this.injectionLedger?.ackDeliveredInjection(bufferedEntry.injectionId, this.contextInjectionOptions?.currentStep?.() ?? 0);
            this.lastConsumedInjectionId = bufferedEntry.injectionId;
            return bufferedEntry.action;
        }
        this.lastConsumedInjectionId = void 0;
        const queueDepthBefore = this.mailbox.length;
        const popped = this.mailbox.shift();
        const queueDepthAfter = this.mailbox.length;
        if (popped?.action.case === "userMessageAction" && queueDepthBefore >= QUEUE_DEPTH_WARNING_THRESHOLD) {
            logger10.info(this.listenerCtx, "conversation_action_queue_dequeue", {
                queueDepthBefore,
                queueDepthAfter,
                actionCase: popped.action.case,
                userMessageId: popped.action.value.userMessage?.messageId
            });
        }
        if (popped === void 0) {
            this.claimPendingInjectionsIfIdle();
            return this.injectionDeliveryBuffer[0] !== void 0 ? this.pop(_ctx) : void 0;
        }
        return await this.transformOnce(popped);
    }
    async peek(_ctx) {
        if (this.injectionDeliveryBuffer[0] !== void 0) {
            return this.injectionDeliveryBuffer[0].action;
        }
        const peeked = this.mailbox.peek();
        if (peeked !== void 0) {
            return await this.transformOnce(peeked);
        }
        this.claimPendingInjectionsIfIdle();
        return this.injectionDeliveryBuffer.at(0)?.action;
    }
    push(message) {
        const queueDepthBefore = this.mailbox.length;
        const userMessageId = message.action.case === "userMessageAction" ? message.action.value.userMessage?.messageId : void 0;
        const prependUserMessagesCount = message.action.case === "userMessageAction" ? message.action.value.prependUserMessages?.length ?? 0 : 0;
        if (!this.mailbox.push(message)) {
            return;
        }
        const queueDepthAfter = this.mailbox.length;
        if (prependUserMessagesCount > 0 || queueDepthAfter >= QUEUE_DEPTH_WARNING_THRESHOLD) {
            logger10.info(this.listenerCtx, "conversation_action_queue_enqueue", {
                queueDepthBefore,
                queueDepthAfter,
                actionCase: message.action.case,
                userMessageId,
                prependUserMessagesCount
            });
        }
    }
    transformOnce(message) {
        if (this.transform === void 0) {
            return Promise.resolve(message);
        }
        const existing = this.transformedActions.get(message);
        if (existing !== void 0) {
            return existing;
        }
        const transformed = this.transform(message);
        this.transformedActions.set(message, transformed);
        return transformed;
    }
};

}

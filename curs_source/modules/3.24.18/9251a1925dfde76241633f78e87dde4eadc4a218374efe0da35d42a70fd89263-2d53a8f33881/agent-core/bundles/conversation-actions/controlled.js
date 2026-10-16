import { createLogger } from "../../../agent-kv/dist/subagent-states.js";
import { init_dist } from "../../../context/dist/index.js";
import { createWritableIterable } from "../../../dist_exports.js";
import { CancelAction, ConversationAction, UserMessageAction, init_agent_pb } from "../../../proto/dist/generated/agent/v1/agent_pb.js";
import { init_dist3 } from "../../../utils/dist/index.js";
import { WriteIterableClosedError } from "../../../utils/dist/writable-iterable.js";
var logger9, ControlledConversationActionManager;
export { ControlledConversationActionManager, logger9 };
var __wakaru_init_controlled3_initialized = false;
export function init_controlled3() {
if (__wakaru_init_controlled3_initialized) return;
__wakaru_init_controlled3_initialized = true;
"use strict";
init_dist();
init_agent_pb();
init_dist3();
logger9 = createLogger("ControlledConversationActionManager");
ControlledConversationActionManager = class {
    get signal() {
        return this.abortController.signal;
    }
    get abortRequested() {
        return this.abortCalled;
    }
    constructor(){
        this.abortCallbacks = [];
        this.abortController = new AbortController();
        this.acceptsActions = true;
        this.disposed = false;
        this.abortStarted = false;
        this.abortCalled = false;
        this.runActive = false;
        this.unprocessedUserMessages = [];
        this.clientStream = createWritableIterable();
    }
    addAbortCallback(callback) {
        this.abortCallbacks.push(callback);
    }
    abort(reason, options2) {
        this.abortCalled = true;
        const alreadyAborted = this.abortController.signal.aborted;
        if (alreadyAborted || this.abortStarted) {
            return;
        }
        const interruptedPendingToolCallResolutions = options2?.interruptedPendingToolCallResolutions;
        this.abortStarted = true;
        if (!this.runActive) {
            this.abortController.abort(reason);
            for (const callback of this.abortCallbacks){
                callback();
            }
            this.abortCallbacks.length = 0;
            return;
        }
        const abortController = this.abortController;
        const abortCallbacks = [
            ...this.abortCallbacks
        ];
        this.abortCallbacks.length = 0;
        void this.submitConversationAction(new ConversationAction({
            action: {
                case: "cancelAction",
                value: new CancelAction({
                    reason,
                    interruptedPendingToolCallResolutions
                })
            }
        })).catch(()=>void 0).finally(()=>{
            abortController.abort(reason);
            for (const callback of abortCallbacks){
                callback();
            }
            if (this.abortController === abortController) {
                const lateCallbacks = [
                    ...this.abortCallbacks
                ];
                this.abortCallbacks.length = 0;
                for (const callback of lateCallbacks){
                    callback();
                }
            }
        });
    }
    async submitConversationAction(conversationAction) {
        if (!this.acceptsActions) {
            throw new WriteIterableClosedError("ControlledConversationActionManager is not accepting actions");
        }
        if (conversationAction.action.case === "userMessageAction") {
            const userMessage = conversationAction.action.value.userMessage;
            if (userMessage) {
                this.unprocessedUserMessages.push(userMessage);
            }
        }
        await this.clientStream.write(conversationAction);
    }
    queueFollowUpUserMessage(userMessage) {
        if (this.disposed || this.abortStarted) {
            throw new WriteIterableClosedError("ControlledConversationActionManager run was aborted or disposed");
        }
        this.unprocessedUserMessages.push(userMessage);
    }
    async enqueueReplayableConversationAction(conversationAction) {
        if (conversationAction.action.case !== "asyncAskQuestionCompletionAction") {
            throw new TypeError("Only asyncAskQuestionCompletionAction can use enqueue acknowledgement");
        }
        if (!this.acceptsActions) {
            throw new WriteIterableClosedError("ControlledConversationActionManager is not accepting actions");
        }
        void this.clientStream.write(conversationAction).catch(()=>void 0);
    }
    markMessageAsProcessed(userMessage) {
        this.unprocessedUserMessages = this.unprocessedUserMessages.filter((msg)=>msg.messageId !== userMessage.messageId);
    }
    requeueMessage(userMessage) {
        if (!this.unprocessedUserMessages.some((msg)=>msg.messageId === userMessage.messageId)) {
            this.unprocessedUserMessages.unshift(userMessage);
        }
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
        this.acceptsActions = false;
        this.clientStream.close();
    }
    reopen() {
        if (this.disposed || this.acceptsActions) {
            return;
        }
        this.resetStream();
    }
    resetStream() {
        if (this.disposed) {
            throw new WriteIterableClosedError("ControlledConversationActionManager disposed");
        }
        this.acceptsActions = false;
        this.clientStream.close();
        this.clientStream = createWritableIterable();
        this.acceptsActions = true;
        this.abortController = new AbortController();
        this.abortStarted = false;
        for (const userMessage of this.unprocessedUserMessages){
            void this.clientStream.write(new ConversationAction({
                action: {
                    case: "userMessageAction",
                    value: new UserMessageAction({
                        userMessage
                    })
                }
            })).catch(()=>void 0);
        }
    }
    async run(ctx, outputStream) {
        const stream3 = this.clientStream;
        this.runActive = true;
        try {
            for await (const action of stream3){
                try {
                    await outputStream.write(action);
                } catch (error3) {
                    logger9.error(ctx, "Error writing conversation action", error3);
                }
            }
        } catch (error3) {
            if (!(error3 instanceof WriteIterableClosedError)) {
                throw error3;
            }
        } finally{
            if (this.clientStream === stream3) {
                this.runActive = false;
            }
        }
    }
    dispose() {
        if (this.disposed) {
            return;
        }
        this.disposed = true;
        this.abortCallbacks.length = 0;
        this.acceptsActions = false;
        this.clientStream.throw(new WriteIterableClosedError("ControlledConversationActionManager disposed"));
    }
};

}

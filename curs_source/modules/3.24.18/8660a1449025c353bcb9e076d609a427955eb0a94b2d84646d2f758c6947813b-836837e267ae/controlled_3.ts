import { IFo, MI, d5e, ju } from "./agent_pb.js";
import { kl } from "./browser.ts";
import { Ng } from "./index_3.ts";
import { iSi, iie } from "./ipa.js";
import { E } from "./tslib.es6.js";
import { Z0e } from "./writable-iterable.ts";
var FSm, cGt;
export { FSm, cGt };
var __wakaru_c91_initialized = false;
export function c91() {
if (__wakaru_c91_initialized) return;
__wakaru_c91_initialized = true;
"use strict";
E(), Ng(), ju(), kl(), FSm = iie("ControlledConversationActionManager"), cGt = class {
    constructor(){
        this.abortCallbacks = [], this.abortController = new AbortController, this.acceptsActions = !0, this.disposed = !1, this.abortStarted = !1, this.abortCalled = !1, this.runActive = !1, this.unprocessedUserMessages = [], this.clientStream = iSi();
    }
    get signal() {
        return this.abortController.signal;
    }
    get abortRequested() {
        return this.abortCalled;
    }
    addAbortCallback(t) {
        this.abortCallbacks.push(t);
    }
    abort(t, e) {
        if (this.abortCalled = !0, this.abortController.signal.aborted || this.abortStarted) return;
        const i = e?.interruptedPendingToolCallResolutions;
        if (this.abortStarted = !0, !this.runActive) {
            this.abortController.abort(t);
            for (const o of this.abortCallbacks)o();
            this.abortCallbacks.length = 0;
            return;
        }
        const r = this.abortController, s = [
            ...this.abortCallbacks
        ];
        this.abortCallbacks.length = 0, this.submitConversationAction(new MI({
            action: {
                case: "cancelAction",
                value: new IFo({
                    reason: t,
                    interruptedPendingToolCallResolutions: i
                })
            }
        })).catch(()=>{}).finally(()=>{
            r.abort(t);
            for (const o of s)o();
            if (this.abortController === r) {
                const o = [
                    ...this.abortCallbacks
                ];
                this.abortCallbacks.length = 0;
                for (const a of o)a();
            }
        });
    }
    async submitConversationAction(t) {
        if (!this.acceptsActions) throw new Z0e("ControlledConversationActionManager is not accepting actions");
        if (t.action.case === "userMessageAction") {
            const e = t.action.value.userMessage;
            e && this.unprocessedUserMessages.push(e);
        }
        await this.clientStream.write(t);
    }
    queueFollowUpUserMessage(t) {
        if (this.disposed || this.abortStarted) throw new Z0e("ControlledConversationActionManager run was aborted or disposed");
        this.unprocessedUserMessages.push(t);
    }
    async enqueueReplayableConversationAction(t) {
        if (t.action.case !== "asyncAskQuestionCompletionAction") throw new TypeError("Only asyncAskQuestionCompletionAction can use enqueue acknowledgement");
        if (!this.acceptsActions) throw new Z0e("ControlledConversationActionManager is not accepting actions");
        this.clientStream.write(t).catch(()=>{});
    }
    markMessageAsProcessed(t) {
        this.unprocessedUserMessages = this.unprocessedUserMessages.filter((e)=>e.messageId !== t.messageId);
    }
    requeueMessage(t) {
        this.unprocessedUserMessages.some((e)=>e.messageId === t.messageId) || this.unprocessedUserMessages.unshift(t);
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
        if (this.disposed) throw new Z0e("ControlledConversationActionManager disposed");
        this.acceptsActions = !1, this.clientStream.close(), this.clientStream = iSi(), this.acceptsActions = !0, this.abortController = new AbortController, this.abortStarted = !1;
        for (const t of this.unprocessedUserMessages)this.clientStream.write(new MI({
            action: {
                case: "userMessageAction",
                value: new d5e({
                    userMessage: t
                })
            }
        })).catch(()=>{});
    }
    async run(t, e) {
        const n = this.clientStream;
        this.runActive = !0;
        try {
            for await (const i of n)try {
                await e.write(i);
            } catch (r) {
                FSm.error(t, "Error writing conversation action", r);
            }
        } catch (i) {
            if (!(i instanceof Z0e)) throw i;
        } finally{
            this.clientStream === n && (this.runActive = !1);
        }
    }
    dispose() {
        this.disposed || (this.disposed = !0, this.abortCallbacks.length = 0, this.acceptsActions = !1, this.clientStream.throw(new Z0e("ControlledConversationActionManager disposed")));
    }
};

}

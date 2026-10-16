import { Wj, nMn } from "./De_3.js";
import { GVs, PMe, x1, zd } from "./agent_pb.js";
import { Yu } from "./browser.ts";
import { Gp } from "./index_3.ts";
import { x } from "./tslib.es6.js";
import { lde } from "./writable-iterable.ts";
var rPd, skt;
export { rPd, skt };
var __wakaru_uCv_initialized = false;
export function uCv() {
if (__wakaru_uCv_initialized) return;
__wakaru_uCv_initialized = true;
"use strict";
x(), Gp(), zd(), Yu(), rPd = Wj("ControlledConversationActionManager"), skt = class {
    constructor(){
        this.abortCallbacks = [], this.abortController = new AbortController, this.acceptsActions = !0, this.disposed = !1, this.abortStarted = !1, this.abortCalled = !1, this.runActive = !1, this.unprocessedUserMessages = [], this.clientStream = nMn();
    }
    get signal() {
        return this.abortController.signal;
    }
    get abortRequested() {
        return this.abortCalled;
    }
    addAbortCallback(e) {
        this.abortCallbacks.push(e);
    }
    abort(e, t) {
        if (this.abortCalled = !0, this.abortController.signal.aborted || this.abortStarted) return;
        const i = t?.interruptedPendingToolCallResolutions;
        if (this.abortStarted = !0, !this.runActive) {
            this.abortController.abort(e);
            for (const o of this.abortCallbacks)o();
            this.abortCallbacks.length = 0;
            return;
        }
        const r = this.abortController, s = [
            ...this.abortCallbacks
        ];
        this.abortCallbacks.length = 0, this.submitConversationAction(new x1({
            action: {
                case: "cancelAction",
                value: new GVs({
                    reason: e,
                    interruptedPendingToolCallResolutions: i
                })
            }
        })).catch(()=>{}).finally(()=>{
            r.abort(e);
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
    async submitConversationAction(e) {
        if (!this.acceptsActions) throw new lde("ControlledConversationActionManager is not accepting actions");
        if (e.action.case === "userMessageAction") {
            const t = e.action.value.userMessage;
            t && this.unprocessedUserMessages.push(t);
        }
        await this.clientStream.write(e);
    }
    queueFollowUpUserMessage(e) {
        if (this.disposed || this.abortStarted) throw new lde("ControlledConversationActionManager run was aborted or disposed");
        this.unprocessedUserMessages.push(e);
    }
    async enqueueReplayableConversationAction(e) {
        if (e.action.case !== "asyncAskQuestionCompletionAction") throw new TypeError("Only asyncAskQuestionCompletionAction can use enqueue acknowledgement");
        if (!this.acceptsActions) throw new lde("ControlledConversationActionManager is not accepting actions");
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
        if (this.disposed) throw new lde("ControlledConversationActionManager disposed");
        this.acceptsActions = !1, this.clientStream.close(), this.clientStream = nMn(), this.acceptsActions = !0, this.abortController = new AbortController, this.abortStarted = !1;
        for (const e of this.unprocessedUserMessages)this.clientStream.write(new x1({
            action: {
                case: "userMessageAction",
                value: new PMe({
                    userMessage: e
                })
            }
        })).catch(()=>{});
    }
    async run(e, t) {
        const n = this.clientStream;
        this.runActive = !0;
        try {
            for await (const i of n)try {
                await t.write(i);
            } catch (r) {
                rPd.error(e, "Error writing conversation action", r);
            }
        } catch (i) {
            if (!(i instanceof lde)) throw i;
        } finally{
            this.clientStream === n && (this.runActive = !1);
        }
    }
    dispose() {
        this.disposed || (this.disposed = !0, this.abortCallbacks.length = 0, this.acceptsActions = !1, this.clientStream.throw(new lde("ControlledConversationActionManager disposed")));
    }
};

}

"use strict";
require.d(exports, {
    h: ()=>a
});
var n = require("./module-37949.js"), s = require("./module-69584.js"), o = require("./module-91434.js");
const i = (0, n.h)("ControlledConversationActionManager");
class a {
    get signal() {
        return this.abortController.signal;
    }
    get abortRequested() {
        return this.abortCalled;
    }
    constructor(){
        this.abortCallbacks = [], this.abortController = new AbortController, this.acceptsActions = !0, this.disposed = !1, this.abortStarted = !1, this.abortCalled = !1, this.runActive = !1, this.unprocessedUserMessages = [], this.clientStream = (0, o.Jt)();
    }
    addAbortCallback(e) {
        this.abortCallbacks.push(e);
    }
    abort(e, t) {
        this.abortCalled = !0;
        if (this.abortController.signal.aborted || this.abortStarted) return;
        const r = t?.interruptedPendingToolCallResolutions;
        if (this.abortStarted = !0, !this.runActive) {
            this.abortController.abort(e);
            for (const e of this.abortCallbacks)e();
            return void (this.abortCallbacks.length = 0);
        }
        const n = this.abortController, o = [
            ...this.abortCallbacks
        ];
        this.abortCallbacks.length = 0, this.submitConversationAction(new s.QFf({
            action: {
                case: "cancelAction",
                value: new s.TTG({
                    reason: e,
                    interruptedPendingToolCallResolutions: r
                })
            }
        })).catch(()=>{}).finally(()=>{
            n.abort(e);
            for (const e of o)e();
            if (this.abortController === n) {
                const e = [
                    ...this.abortCallbacks
                ];
                this.abortCallbacks.length = 0;
                for (const t of e)t();
            }
        });
    }
    async submitConversationAction(e) {
        if (!this.acceptsActions) throw new o.W2("ControlledConversationActionManager is not accepting actions");
        if ("userMessageAction" === e.action.case) {
            const t = e.action.value.userMessage;
            t && this.unprocessedUserMessages.push(t);
        }
        await this.clientStream.write(e);
    }
    queueFollowUpUserMessage(e) {
        if (this.disposed || this.abortStarted) throw new o.W2("ControlledConversationActionManager run was aborted or disposed");
        this.unprocessedUserMessages.push(e);
    }
    async enqueueReplayableConversationAction(e) {
        if ("asyncAskQuestionCompletionAction" !== e.action.case) throw new TypeError("Only asyncAskQuestionCompletionAction can use enqueue acknowledgement");
        if (!this.acceptsActions) throw new o.W2("ControlledConversationActionManager is not accepting actions");
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
        if (this.disposed) throw new o.W2("ControlledConversationActionManager disposed");
        this.acceptsActions = !1, this.clientStream.close(), this.clientStream = (0, o.Jt)(), this.acceptsActions = !0, this.abortController = new AbortController, this.abortStarted = !1;
        for (const e of this.unprocessedUserMessages)this.clientStream.write(new s.QFf({
            action: {
                case: "userMessageAction",
                value: new s.Vtf({
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
                i.error(e, "Error writing conversation action", t);
            }
        } catch (e) {
            if (!(e instanceof o.W2)) throw e;
        } finally{
            this.clientStream === r && (this.runActive = !1);
        }
    }
    dispose() {
        this.disposed || (this.disposed = !0, this.abortCallbacks.length = 0, this.acceptsActions = !1, this.clientStream.throw(new o.W2("ControlledConversationActionManager disposed")));
    }
}

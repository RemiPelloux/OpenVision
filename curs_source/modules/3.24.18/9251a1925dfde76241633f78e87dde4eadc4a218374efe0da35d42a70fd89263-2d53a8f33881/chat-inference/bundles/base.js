import { init_step_scoped_system_messages } from "./step-scoped-system-messages.js";
import { renderStepScopedSystemMessages, withoutToolResultRecord } from "../../mcp_sandbox_policy_exports.js";
var BasePromptBuilder, BasePromptExecutor, BaseMiddleware;
export { BaseMiddleware, BasePromptBuilder, BasePromptExecutor };
var __wakaru_init_base3_initialized = false;
export function init_base3() {
if (__wakaru_init_base3_initialized) return;
__wakaru_init_base3_initialized = true;
"use strict";
init_step_scoped_system_messages();
BasePromptBuilder = class {
    constructor(initialMessages){
        this.messages = [];
        if (initialMessages) {
            if (Array.isArray(initialMessages)) {
                this.messages = [
                    ...initialMessages
                ];
            } else {
                this.messages = [
                    initialMessages
                ];
            }
        }
    }
    appendMessages(newMessages) {
        const messagesToAdd = Array.isArray(newMessages) ? newMessages : [
            newMessages
        ];
        this.messages.push(...messagesToAdd);
        return this;
    }
    getState() {
        return [
            ...this.messages
        ];
    }
    getMessages() {
        return [
            ...this.messages
        ];
    }
    clearMessages() {
        this.messages = [];
    }
};
BasePromptExecutor = class {
    constructor(builder){
        this.builder = builder;
    }
    appendMessages(messages) {
        this.builder.appendMessages(messages);
        return this;
    }
    getState() {
        return this.builder.getState();
    }
    getMessages() {
        return this.builder.getMessages();
    }
    clearMessages() {
        this.builder.clearMessages();
    }
    requestMessages({ nativeStepScopedSystemMessages = false } = {}) {
        return renderStepScopedSystemMessages(this.builder.getMessages(), {
            native: nativeStepScopedSystemMessages
        }).map(withoutToolResultRecord);
    }
};
BaseMiddleware = class {
    constructor(innerExecutor){
        this.innerExecutor = innerExecutor;
    }
    appendMessages(messages) {
        this.innerExecutor.appendMessages(messages);
        return this;
    }
    getState() {
        return this.innerExecutor.getState();
    }
    getMessages() {
        return this.innerExecutor.getMessages();
    }
    clearMessages() {
        this.innerExecutor.clearMessages();
    }
    stream(ctx, invocationId, tools, options2) {
        return this.innerExecutor.stream(ctx, invocationId, tools, options2);
    }
};

}

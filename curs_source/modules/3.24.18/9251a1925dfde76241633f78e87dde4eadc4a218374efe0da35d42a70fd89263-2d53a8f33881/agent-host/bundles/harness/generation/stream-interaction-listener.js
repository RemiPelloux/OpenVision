import { init_dist7 } from "../../../../agent-core/dist/index.js";
import { InteractionListenerStreamClosedError } from "../../../../agent-core/dist/interaction-listener.js";
import { closedBeforeAnswer } from "../../../../dist_exports4.js";
var StreamInteractionListener;
export { StreamInteractionListener };
var __wakaru_init_stream_interaction_listener_initialized = false;
export function init_stream_interaction_listener() {
if (__wakaru_init_stream_interaction_listener_initialized) return;
__wakaru_init_stream_interaction_listener_initialized = true;
"use strict";
init_dist7();
StreamInteractionListener = class {
    constructor(out, log5){
        this.out = out;
        this.log = log5;
        this.pending = new Map();
        this.postTurnEndedWork = [];
        this.closed = false;
    }
    handleResponse(response) {
        const waiter = this.pending.get(response.id);
        if (waiter === void 0) {
            this.log(`interaction response for unknown query id ${response.id} dropped`);
            return;
        }
        this.pending.delete(response.id);
        waiter.resolve(response);
    }
    close() {
        if (this.closed) {
            return;
        }
        this.closed = true;
        for (const [id, waiter] of this.pending){
            if (!waiter.held) {
                continue;
            }
            this.pending.delete(id);
            waiter.reject(closedBeforeAnswer());
        }
    }
    async sendUpdate(_ctx, update) {
        try {
            await this.out.write(update);
        } catch (error3) {
            throw new InteractionListenerStreamClosedError(error3 instanceof Error ? error3.message : "response stream write failed", {
                cause: error3
            });
        }
    }
    async query(_ctx, query) {
        if (this.closed) {
            throw new InteractionListenerStreamClosedError("agent harness: client stream already closed");
        }
        const { promise, resolve: resolve36, reject: reject2 } = Promise.withResolvers();
        const waiter = {
            resolve: resolve36,
            reject: reject2,
            held: false
        };
        this.pending.set(query.id, waiter);
        try {
            await this.out.write(query);
        } catch (error3) {
            this.pending.delete(query.id);
            throw new InteractionListenerStreamClosedError(error3 instanceof Error ? error3.message : "response stream write failed", {
                cause: error3
            });
        }
        if (this.closed && this.pending.delete(query.id)) {
            throw closedBeforeAnswer();
        }
        waiter.held = true;
        return promise;
    }
    enqueuePostTurnEndedWork(work) {
        this.postTurnEndedWork.push(work);
    }
    async flushPostTurnEndedWork(_ctx) {
        const work = this.postTurnEndedWork;
        this.postTurnEndedWork = [];
        await Promise.all(work.map(async (fn)=>{
            try {
                await fn();
            } catch (error3) {
                this.log(`post-turn-ended work failed: ${error3 instanceof Error ? error3.message : String(error3)}`);
            }
        }));
    }
};

}

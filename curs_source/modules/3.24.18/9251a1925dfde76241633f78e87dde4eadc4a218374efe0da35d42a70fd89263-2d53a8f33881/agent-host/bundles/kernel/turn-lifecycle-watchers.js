import { AsyncEventBuffer, AsyncEventFanout, init_async_event_fanout } from "./async-event-fanout.js";
import { AgentHostTurnLifecycleWatchReady, WatchAgentHostSessionTurnLifecycleEvent, init_agent_host_pb } from "../../../proto/dist/generated/agent/v1/agent_host_pb.js";
var MAX_UNWATCHED_EVENTS, AgentHostTurnLifecycleWatchers;
export { AgentHostTurnLifecycleWatchers, MAX_UNWATCHED_EVENTS };
var __wakaru_init_turn_lifecycle_watchers_initialized = false;
export function init_turn_lifecycle_watchers() {
if (__wakaru_init_turn_lifecycle_watchers_initialized) return;
__wakaru_init_turn_lifecycle_watchers_initialized = true;
"use strict";
init_agent_host_pb();
init_async_event_fanout();
MAX_UNWATCHED_EVENTS = 256;
AgentHostTurnLifecycleWatchers = class {
    constructor(){
        this.fanout = new AsyncEventFanout();
        this.unwatched = new AsyncEventBuffer();
    }
    async *subscribe(ctx) {
        const queue = {
            events: new AsyncEventBuffer(),
            notify: void 0
        };
        for(let event = this.unwatched.shift(); event !== void 0; event = this.unwatched.shift()){
            queue.events.push(event);
        }
        this.fanout.add(queue);
        try {
            yield new WatchAgentHostSessionTurnLifecycleEvent({
                event: {
                    case: "ready",
                    value: new AgentHostTurnLifecycleWatchReady()
                }
            });
            while(!ctx.signal.aborted && !this.fanout.isClosed){
                const event = queue.events.shift();
                if (event !== void 0) {
                    yield event;
                    continue;
                }
                await this.fanout.waitForEvent(ctx, queue);
            }
        } finally{
            this.fanout.delete(queue);
        }
    }
    emit(lifecycle2) {
        if (this.fanout.isClosed) {
            return;
        }
        if (this.fanout.size === 0) {
            if (this.unwatched.length >= MAX_UNWATCHED_EVENTS) {
                this.unwatched.shift();
            }
            this.unwatched.push(new WatchAgentHostSessionTurnLifecycleEvent({
                event: {
                    case: "lifecycle",
                    value: lifecycle2.clone()
                }
            }));
            return;
        }
        this.fanout.forEach((queue)=>{
            queue.events.push(new WatchAgentHostSessionTurnLifecycleEvent({
                event: {
                    case: "lifecycle",
                    value: lifecycle2.clone()
                }
            }));
            this.fanout.wake(queue);
        });
    }
    close() {
        this.fanout.close();
        this.unwatched = new AsyncEventBuffer();
    }
};

}

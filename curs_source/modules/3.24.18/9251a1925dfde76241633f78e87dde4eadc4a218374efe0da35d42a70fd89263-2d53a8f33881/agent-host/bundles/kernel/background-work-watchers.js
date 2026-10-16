import { AsyncEventBuffer, AsyncEventFanout, init_async_event_fanout } from "./async-event-fanout.js";
import { init_proto_clone } from "./proto-clone.js";
import { cloneAgentHostBackgroundWork } from "../../../tree_chunk_napi_exports.js";
var AgentHostBackgroundWorkWatchers;
export { AgentHostBackgroundWorkWatchers };
var __wakaru_init_background_work_watchers_initialized = false;
export function init_background_work_watchers() {
if (__wakaru_init_background_work_watchers_initialized) return;
__wakaru_init_background_work_watchers_initialized = true;
"use strict";
init_async_event_fanout();
init_proto_clone();
AgentHostBackgroundWorkWatchers = class {
    constructor(){
        this.fanout = new AsyncEventFanout();
    }
    async *subscribe(ctx, getSnapshot) {
        const queue = {
            getSnapshot,
            events: new AsyncEventBuffer(),
            notify: void 0
        };
        this.fanout.add(queue);
        try {
            if (this.fanout.isClosed) {
                return;
            }
            yield {
                event: {
                    case: "snapshot",
                    value: {
                        work: getSnapshot().map(cloneAgentHostBackgroundWork)
                    }
                }
            };
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
    emitState() {
        if (this.fanout.isClosed) {
            return;
        }
        this.fanout.forEach((queue)=>{
            queue.events.push({
                event: {
                    case: "state",
                    value: {
                        work: queue.getSnapshot().map(cloneAgentHostBackgroundWork)
                    }
                }
            });
            this.fanout.wake(queue);
        });
    }
    close() {
        this.fanout.close();
    }
};

}

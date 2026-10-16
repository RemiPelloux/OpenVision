import { AsyncEventBuffer, AsyncEventFanout, init_async_event_fanout } from "./async-event-fanout.js";
import { init_proto_clone } from "./proto-clone.js";
import { cloneAgentHostSession, cloneWatchSessionsEvent } from "../../../tree_chunk_napi_exports.js";
var AgentHostSessionWatchers;
export { AgentHostSessionWatchers };
var __wakaru_init_session_watchers_initialized = false;
export function init_session_watchers() {
if (__wakaru_init_session_watchers_initialized) return;
__wakaru_init_session_watchers_initialized = true;
"use strict";
init_async_event_fanout();
init_proto_clone();
AgentHostSessionWatchers = class {
    constructor(){
        this.fanout = new AsyncEventFanout();
    }
    async *subscribe(ctx, getSnapshot, matches) {
        const queue = {
            events: new AsyncEventBuffer(),
            notify: void 0,
            matches: matches ?? (()=>true),
            announcedIds: new Set(),
            pendingDeletes: new Set(),
            snapshotPending: true,
            filtered: matches !== void 0
        };
        this.fanout.add(queue);
        try {
            const snapshot = await getSnapshot();
            const published = snapshot.filter((session)=>!queue.pendingDeletes.has(session.sessionId));
            for (const session of published){
                queue.announcedIds.add(session.sessionId);
            }
            queue.snapshotPending = false;
            queue.pendingDeletes.clear();
            yield {
                event: {
                    case: "snapshot",
                    value: {
                        sessions: published.map(cloneAgentHostSession)
                    }
                }
            };
            while(!ctx.signal.aborted){
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
    emitAdded(session, identity) {
        this.fanout.forEach((queue)=>{
            if (queue.filtered && !queue.matches(identity)) {
                return;
            }
            if (queue.announcedIds.has(session.sessionId)) {
                this.push(queue, {
                    event: {
                        case: "updated",
                        value: {
                            session
                        }
                    }
                });
                return;
            }
            queue.announcedIds.add(session.sessionId);
            this.push(queue, {
                event: {
                    case: "added",
                    value: {
                        session
                    }
                }
            });
        });
    }
    emitUpdated(session, identity) {
        this.fanout.forEach((queue)=>{
            if (!queue.filtered) {
                this.push(queue, {
                    event: {
                        case: "updated",
                        value: {
                            session
                        }
                    }
                });
                return;
            }
            const match2 = queue.matches(identity);
            const announced = queue.announcedIds.has(session.sessionId);
            if (match2 && announced) {
                this.push(queue, {
                    event: {
                        case: "updated",
                        value: {
                            session
                        }
                    }
                });
                return;
            }
            if (match2 && !announced) {
                queue.announcedIds.add(session.sessionId);
                this.push(queue, {
                    event: {
                        case: "added",
                        value: {
                            session
                        }
                    }
                });
                return;
            }
            if (!match2 && announced) {
                queue.announcedIds.delete(session.sessionId);
                this.push(queue, {
                    event: {
                        case: "deleted",
                        value: {
                            sessionId: session.sessionId
                        }
                    }
                });
            }
        });
    }
    emitDeleted(sessionId) {
        this.fanout.forEach((queue)=>{
            if (queue.snapshotPending) {
                queue.pendingDeletes.add(sessionId);
                queue.announcedIds.delete(sessionId);
                this.push(queue, {
                    event: {
                        case: "deleted",
                        value: {
                            sessionId
                        }
                    }
                });
                return;
            }
            if (queue.filtered && !queue.announcedIds.has(sessionId)) {
                return;
            }
            queue.announcedIds.delete(sessionId);
            this.push(queue, {
                event: {
                    case: "deleted",
                    value: {
                        sessionId
                    }
                }
            });
        });
    }
    push(queue, event) {
        queue.events.push(cloneWatchSessionsEvent(event));
        this.fanout.wake(queue);
    }
};

}

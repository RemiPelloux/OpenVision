var RunningTurnReplay;
export { RunningTurnReplay };
var __wakaru_init_running_turn_replay_initialized = false;
export function init_running_turn_replay() {
if (__wakaru_init_running_turn_replay_initialized) return;
__wakaru_init_running_turn_replay_initialized = true;
"use strict";
RunningTurnReplay = class {
    constructor(){
        this.atLatestCheckpoint = [];
    }
    note(event) {
        switch(event.event.case){
            case "turnStarted":
                this.running = {
                    turnId: event.event.value.turnId,
                    started: event,
                    calls: new Map()
                };
                this.atLatestCheckpoint = [];
                return;
            case "turnSettled":
                if (this.running?.turnId === event.event.value.turnId) {
                    this.running = void 0;
                    this.atLatestCheckpoint = [];
                }
                return;
            case "turnInteractionsSuperseded":
                if (this.running?.turnId === event.event.value.turnId) {
                    this.running.calls.clear();
                    this.atLatestCheckpoint = this.atLatestCheckpoint.slice(0, 1);
                }
                return;
            case "conversationState":
                this.atLatestCheckpoint = this.snapshot(event.eventId);
                return;
            case "subagentStarted":
                {
                    const call = this.running?.calls.get(event.event.value.parentToolCallId);
                    if (call !== void 0) {
                        call.subagentStarted = event;
                    }
                    return;
                }
            case "interactionUpdate":
                this.noteInteractionUpdate(event, event.event.value.message);
                return;
        }
    }
    replay() {
        return this.atLatestCheckpoint.filter((frame)=>{
            if (frame.event.case !== "subagentStarted") {
                return true;
            }
            const call = this.running?.calls.get(frame.event.value.parentToolCallId);
            return call?.completed === void 0;
        });
    }
    snapshot(checkpointEventId) {
        const running = this.running;
        if (running === void 0) {
            return [];
        }
        const noCallOpen = [
            ...running.calls.values()
        ].every((call)=>call.completed !== void 0);
        if (noCallOpen) {
            running.calls.clear();
        }
        const frames = [
            running.started
        ];
        for (const call of running.calls.values()){
            frames.push(call.start);
            if (call.subagentStarted !== void 0) {
                frames.push(call.subagentStarted);
            }
            if (call.completed !== void 0) {
                frames.push(call.completed);
            }
        }
        return frames.map((frame)=>({
                ...frame,
                eventId: checkpointEventId
            }));
    }
    noteInteractionUpdate(event, message) {
        const calls = this.running?.calls;
        if (calls === void 0) {
            return;
        }
        switch(message.case){
            case "partialToolCall":
            case "toolCallStarted":
                {
                    const call = calls.get(message.value.callId);
                    if (call === void 0) {
                        calls.set(message.value.callId, {
                            start: event
                        });
                    } else {
                        call.start = event;
                    }
                    return;
                }
            case "toolCallCompleted":
                {
                    const call = calls.get(message.value.callId);
                    if (call !== void 0) {
                        call.completed = event;
                    }
                    return;
                }
        }
    }
};

}

import { CancelledError } from "../../../../agent-client/dist/errors.js";
import { init_dist9 } from "../../../../agent-client/dist/index.js";
import { HARNESS_CAPABILITIES, HARNESS_INTERFACE_REVISION, init_api_constants } from "../api-constants.js";
import { init_clock, realHarnessClock } from "../clock.js";
import { HarnessModuleFaultError, init_connect_transport2 } from "./connect-transport.js";
import { createContext } from "../../storage/instruments.js";
import { createLogger } from "../../../../agent-kv/dist/subagent-states.js";
import { init_dist } from "../../../../context/dist/index.js";
import { isSubagentRun } from "../../../../dist_exports.js";
import { describeHarness, init_loader4, moduleTags, quietBucket, shortGeneration, surfaced, swappedFrom, toMb, withStandIn } from "../../../../tree_chunk_napi_exports.js";
var import_node_v8, logger113, MODULE_FAULTS_BEFORE_REVERT, MODULE_FAULT_WINDOW, MODULE_FAULT_METRIC, MODULE_REVERT_METRIC, MODULE_RERUN_METRIC, MODULE_FAULT_TITLE, MODULE_FAULT_DETAIL, RETRIES_ON_FLOOR_KEPT, MODULE_RERUN_DELAY_METRIC, MODULE_QUIET_STOP_METRIC, MODULE_HOST_LOST_METRIC, MODULE_TURN_METRIC, MODULE_LOAD_METRIC, MODULE_SWAP_METRIC, MODULE_HEAP_METRIC, MODULE_PICKUP_DELAY_METRIC, MODULE_SERVE_METRIC, MODULE_WRITE_FAILED_METRIC, HARNESS_REVISION_TAG, STATICALLY_LINKED_MODULE_TAGS, HarnessRoutingAdapter;
export { HARNESS_REVISION_TAG, HarnessRoutingAdapter, MODULE_FAULTS_BEFORE_REVERT, MODULE_FAULT_DETAIL, MODULE_FAULT_METRIC, MODULE_FAULT_TITLE, MODULE_FAULT_WINDOW, MODULE_HEAP_METRIC, MODULE_HOST_LOST_METRIC, MODULE_LOAD_METRIC, MODULE_PICKUP_DELAY_METRIC, MODULE_QUIET_STOP_METRIC, MODULE_RERUN_DELAY_METRIC, MODULE_RERUN_METRIC, MODULE_REVERT_METRIC, MODULE_SERVE_METRIC, MODULE_SWAP_METRIC, MODULE_TURN_METRIC, MODULE_WRITE_FAILED_METRIC, RETRIES_ON_FLOOR_KEPT, STATICALLY_LINKED_MODULE_TAGS, import_node_v8, logger113 };
var __wakaru_init_routing_adapter_initialized = false;
export function init_routing_adapter() {
if (__wakaru_init_routing_adapter_initialized) return;
__wakaru_init_routing_adapter_initialized = true;
"use strict";
import_node_v8 = require("node:v8");
init_dist9();
init_dist();
init_api_constants();
init_clock();
init_connect_transport2();
init_loader4();
logger113 = createLogger("HarnessRoutingAdapter");
MODULE_FAULTS_BEFORE_REVERT = 3;
MODULE_FAULT_WINDOW = 5;
MODULE_FAULT_METRIC = "agent_host.module.fault";
MODULE_REVERT_METRIC = "agent_host.module.revert";
MODULE_RERUN_METRIC = "agent_host.module.rerun";
MODULE_FAULT_TITLE = "Request Failed";
MODULE_FAULT_DETAIL = "The agent stopped because of an internal error. Try again.";
RETRIES_ON_FLOOR_KEPT = 64;
MODULE_RERUN_DELAY_METRIC = "agent_host.module.rerun_delay_ms";
MODULE_QUIET_STOP_METRIC = "agent_host.module.quiet_stop";
MODULE_HOST_LOST_METRIC = "agent_host.module.host_lost";
MODULE_TURN_METRIC = "agent_host.module.turn";
MODULE_LOAD_METRIC = "agent_host.module.load";
MODULE_SWAP_METRIC = "agent_host.module.swap_ms";
MODULE_HEAP_METRIC = "agent_host.module.heap_mb";
MODULE_PICKUP_DELAY_METRIC = "agent_host.module.pickup_delay_ms";
MODULE_SERVE_METRIC = "agent_host.module.serve";
MODULE_WRITE_FAILED_METRIC = "agent_host.module.write_failed";
HARNESS_REVISION_TAG = String(HARNESS_INTERFACE_REVISION);
STATICALLY_LINKED_MODULE_TAGS = moduleTags({
    generation: "static",
    source: "static"
}, void 0, void 0);
HarnessRoutingAdapter = class {
    constructor(options2){
        this.disposed = false;
        this.recentTurns = new Map();
        this.retriesOnFloor = new Map();
        this.onRevert = options2.onRevert;
        this.loader = options2.loader;
        this.compose = options2.compose;
        this.log = options2.log;
        this.metrics = options2.metrics;
        this.logContext = options2.logContext ?? createContext;
        this.disposeShared = options2.disposeShared;
        this.clock = options2.clock ?? realHarnessClock;
        this.now = options2.now ?? (()=>performance.now());
        this.stopCounting = [
            this.loader.onDidLoad(({ module: module2, channel, sequence, verdict, reason, when })=>this.increment(MODULE_LOAD_METRIC, {
                    verdict,
                    reason,
                    when,
                    ...moduleTags(module2, channel, sequence)
                })),
            this.loader.onDidServe(({ module: module2, channel, sequence, cause, when, refused, currentChangedAt })=>{
                const tags = {
                    cause,
                    when,
                    ...refused === void 0 ? {} : {
                        verdict: refused.verdict,
                        reason: refused.reason
                    },
                    ...moduleTags(module2, channel, sequence)
                };
                this.increment(MODULE_SERVE_METRIC, tags);
                if (currentChangedAt !== void 0) {
                    this.distribution(MODULE_PICKUP_DELAY_METRIC, Math.max(0, Math.round(Date.now() - currentChangedAt)), tags);
                }
            }),
            this.loader.onDidFailToWrite(({ file, code, channel })=>this.increment(MODULE_WRITE_FAILED_METRIC, {
                    file,
                    code,
                    module_channel: channel ?? "unknown"
                })),
            this.loader.onDidRevert((revert)=>this.countLoaderRevert(revert)),
            this.loader.onDidLoseHost(({ generation, phase, channel, sequence })=>this.increment(MODULE_HOST_LOST_METRIC, {
                    phase,
                    ...moduleTags({
                        generation,
                        source: "installed"
                    }, channel, sequence)
                }))
        ];
    }
    countLoaderRevert({ module: module2, channel, sequence, trigger, fallback: fallback3 }) {
        this.log(`${module2.label} (${shortGeneration(module2.generation)}) ${trigger === "crash_loop" ? "kept killing extension hosts" : "was reverted by another window"}; serving ${describeHarness(fallback3)}`);
        const tags = {
            error_class: trigger === "crash_loop" ? "host_lost" : "none",
            trigger,
            late_faults: "0",
            ...moduleTags(module2, channel, sequence)
        };
        this.increment(MODULE_REVERT_METRIC, tags);
        this.warn(this.logContext(), "Agent host module reverted", {
            ...tags,
            fallback_version: fallback3.generation.slice(0, 12),
            fallback_serving: fallback3.source === "installed" ? "module" : "static"
        });
        this.tellOfRevert({
            label: module2.label,
            version: module2.generation.slice(0, 12),
            channel,
            fallback: {
                label: fallback3.label,
                version: fallback3.generation.slice(0, 12),
                builtIn: fallback3.source !== "installed"
            },
            trigger
        });
        const slot = this.slot;
        if (slot !== void 0 && slot.harness.info.generation === module2.generation) {
            this.slot = void 0;
            this.retire(slot);
        }
    }
    activeHarness() {
        return (this.slot?.harness ?? this.loader.current()).info;
    }
    async run(options2) {
        if (this.disposed) {
            throw new Error("HarnessRoutingAdapter is disposed");
        }
        const startedAt = this.now();
        let faulted;
        try {
            const slot = this.slotForTurn(this.pollSlot(startedAt), options2);
            const retry2 = this.takeRetryOnFloor(options2, slot);
            if (retry2 !== void 0) {
                await this.runOnFloor(options2, (floor2)=>`running the next turn of a conversation on ${floor2} after a late module fault on ${retry2.tags.module_version ?? "?"}`, {
                    after: "late_fault",
                    error_class: retry2.errorClass,
                    ...retry2.tags
                }, {
                    countsAsTurn: true
                });
                return;
            }
            faulted = slot.harness;
            this.increment(MODULE_TURN_METRIC, this.tagsOf(slot.harness));
            await this.runOn(slot, options2);
        } catch (error3) {
            if (!(error3 instanceof HarnessModuleFaultError)) {
                throw error3;
            }
            if (error3.module.source !== "installed" || faulted === void 0) {
                throw surfaced(error3);
            }
            if (!error3.early) {
                this.keepRetryOnFloor(options2, {
                    generation: error3.module.generation,
                    errorClass: error3.errorClass,
                    tags: this.tagsOf(faulted)
                });
                throw surfaced(error3);
            }
            options2.conversationActionManager.reopen();
            const module2 = describeHarness(error3.module);
            await this.runOnFloor(options2, (floor2)=>`running the turn again on ${floor2} after an early module fault on ${module2}`, {
                after: "early_fault",
                error_class: error3.errorClass,
                ...this.tagsOf(faulted)
            }, {
                countsAsTurn: false,
                waitingSince: startedAt
            });
        }
    }
    async runOnFloor(options2, logLine, { after, ...delayTags }, { countsAsTurn, waitingSince }) {
        const rerunTags = {
            ...after === void 0 ? {} : {
                after
            },
            ...delayTags
        };
        const started = this.now();
        const floor2 = this.composeSlot(this.loader.floor());
        this.measureSwap(floor2, {
            started,
            when: "rerun",
            from: "module"
        });
        floor2.retired = true;
        this.log(logLine(describeHarness(floor2.harness.info)));
        if (countsAsTurn) {
            this.increment(MODULE_TURN_METRIC, this.tagsOf(floor2.harness));
        }
        if (waitingSince !== void 0) {
            this.distribution(MODULE_RERUN_DELAY_METRIC, this.now() - waitingSince, delayTags);
        }
        try {
            await this.runOn(floor2, options2);
        } catch (rerunError) {
            const result = rerunError instanceof CancelledError ? "aborted" : "failed";
            this.increment(MODULE_RERUN_METRIC, {
                ...rerunTags,
                result
            });
            throw rerunError instanceof HarnessModuleFaultError ? surfaced(rerunError) : rerunError;
        }
        this.increment(MODULE_RERUN_METRIC, {
            ...rerunTags,
            result: "ok"
        });
    }
    keepRetryOnFloor(options2, retry2) {
        const conversationId = options2.runOptions.conversationId;
        if (conversationId === void 0 || conversationId === "") {
            return;
        }
        this.retriesOnFloor.delete(conversationId);
        this.retriesOnFloor.set(conversationId, retry2);
        for (const oldest of this.retriesOnFloor.keys()){
            if (this.retriesOnFloor.size <= RETRIES_ON_FLOOR_KEPT) {
                break;
            }
            this.retriesOnFloor.delete(oldest);
        }
    }
    takeRetryOnFloor(options2, slot) {
        const conversationId = options2.runOptions.conversationId;
        const retry2 = conversationId === void 0 ? void 0 : this.retriesOnFloor.get(conversationId);
        if (retry2 === void 0 || conversationId === void 0) {
            return void 0;
        }
        this.retriesOnFloor.delete(conversationId);
        const serving = slot.harness.info;
        return serving.source === "installed" && serving.generation === retry2.generation ? retry2 : void 0;
    }
    pollSlot(started) {
        const poll = this.loader.poll();
        if (poll.rejected !== void 0) {
            this.log(`pinned generation ${shortGeneration(poll.rejected.generation)} rejected (${poll.rejected.reason}); serving ${describeHarness(poll.active.info)}`);
        }
        return this.slotFor(poll.active, started);
    }
    slotFor(active, started) {
        const slot = this.slot;
        if (slot !== void 0 && slot.harness.harness === active.harness) {
            return slot;
        }
        const next = this.composeSlot(active);
        this.slot = next;
        const from2 = this.composedOn;
        this.composedOn = active.info;
        if (slot !== void 0) {
            this.retire(slot);
        }
        this.measureSwap(next, {
            started,
            when: from2 === void 0 ? "start" : "turn",
            from: swappedFrom(from2)
        });
        return next;
    }
    measureSwap(slot, { started, when, from: from2 }) {
        const elapsedMs2 = Math.round(this.now() - started);
        const tags = this.tagsOf(slot.harness);
        this.distribution(MODULE_SWAP_METRIC, elapsedMs2, {
            when,
            result: slot.composeFailed ? "compose_failed" : "ok",
            from: from2,
            ...tags
        });
        const live = this.loader.serving().length;
        this.distribution(MODULE_HEAP_METRIC, toMb((0, import_node_v8.getHeapStatistics)().used_heap_size), {
            live: live >= 3 ? "3+" : String(live),
            when,
            module_channel: tags.module_channel ?? "unknown",
            serving: tags.serving ?? "static"
        });
    }
    slotForTurn(slot, options2) {
        if (slot.harness.info.source !== "installed" || slot.harness.capabilities.has(HARNESS_CAPABILITIES.seamRunOptions) || !isSubagentRun(options2.runOptions)) {
            return slot;
        }
        if (slot.standIn === void 0) {
            slot.standIn = this.composeSlot(this.loader.floor());
            this.log(`serving child turns on ${describeHarness(slot.standIn.harness.info)}: ${describeHarness(slot.harness.info)} does not announce ${HARNESS_CAPABILITIES.seamRunOptions}`);
        }
        return slot.standIn;
    }
    composeSlot(active) {
        let adapter;
        let composeFailed = false;
        try {
            adapter = this.compose(active, (droppedFaults)=>{
                for (const fault of droppedFaults ?? []){
                    this.log(`module fault on ${describeHarness(fault.module)} after the turn completed: ${fault.errorClass}: ${fault.reason}`);
                    const tags = {
                        timing: "after_turn",
                        error_class: fault.errorClass,
                        ...this.tagsOf(active)
                    };
                    this.increment(MODULE_FAULT_METRIC, tags);
                    this.warn(this.logContext(), "Agent host module fault", tags);
                }
                this.countTurn(active.info.generation, {
                    fault: false,
                    late: false
                });
                this.loader.markServed(active.info);
            }, (quietMs)=>{
                this.log(`turn on ${describeHarness(active.info)} stopped after ${Math.round(quietMs / 1e3)} s with only heartbeats crossing`);
                this.increment(MODULE_QUIET_STOP_METRIC, {
                    quiet: quietBucket(quietMs),
                    ...this.tagsOf(active)
                });
            });
            this.log(`composed managed-local adapter on ${describeHarness(active.info)}`);
        } catch (error3) {
            this.log(`composition on ${describeHarness(active.info)} failed: ${error3 instanceof Error ? error3.message : String(error3)}`);
            adapter = {
                run: ()=>Promise.reject(error3),
                dispose: ()=>{}
            };
            composeFailed = true;
        }
        return {
            adapter,
            harness: active,
            composeFailed,
            inFlight: 0,
            retired: false,
            disposed: false
        };
    }
    retire(slot) {
        for (const each of withStandIn(slot)){
            this.log(`retiring ${describeHarness(each.harness.info)}`);
            each.retired = true;
            this.release(each);
        }
    }
    async runOn(slot, options2) {
        slot.inFlight += 1;
        this.log(`turn -> ${describeHarness(slot.harness.info)}, model=${options2.runOptions.requestedModel?.modelId || options2.modelDetails?.modelId || "?"}`);
        this.loader.turnStarted(slot.harness.info);
        try {
            await slot.adapter.run(options2);
        } catch (error3) {
            if (error3 instanceof HarnessModuleFaultError) {
                this.countFault(error3, slot.harness, options2.ctx);
            }
            throw error3;
        } finally{
            this.loader.turnSettled(slot.harness.info);
            slot.inFlight -= 1;
            if (slot.retired) {
                this.release(slot);
            }
        }
    }
    countTurn(generation, turn) {
        const turns = [
            ...this.recentTurns.get(generation) ?? [],
            turn
        ].slice(-MODULE_FAULT_WINDOW);
        this.recentTurns.set(generation, turns);
        return turns;
    }
    countFault(fault, active, ctx) {
        const { generation } = fault.module;
        const turns = this.countTurn(generation, {
            fault: true,
            late: !fault.early
        });
        const faults = turns.filter((turn)=>turn.fault);
        const inARow = turns.length - 1 - turns.findLastIndex((turn)=>!turn.fault);
        const timing = fault.early ? "early" : "late";
        this.log(`module fault on ${describeHarness(fault.module)}: ${fault.errorClass}, ${timing}, ${inARow} in a row, ${faults.length} of the last ${turns.length}: ${fault.reason}`);
        const faultTags = {
            timing,
            error_class: fault.errorClass,
            ...this.tagsOf(active)
        };
        this.increment(MODULE_FAULT_METRIC, faultTags);
        this.warn(ctx, "Agent host module fault", {
            ...faultTags,
            in_a_row: inARow,
            in_window: faults.length
        });
        if (faults.length < MODULE_FAULTS_BEFORE_REVERT || fault.module.source !== "installed") {
            return;
        }
        this.recentTurns.delete(generation);
        const inARowTripped = inARow >= MODULE_FAULTS_BEFORE_REVERT;
        const why = inARowTripped ? `${inARow} module faults in a row` : `${faults.length} module faults in its last ${turns.length} turns`;
        const trigger = inARowTripped ? "in_a_row" : "window";
        const fallback3 = this.loader.markIncompatible({
            generation,
            reason: `${why}, the last ${fault.errorClass}: ${fault.reason}`,
            revert: {
                label: fault.module.label,
                trigger
            }
        });
        if (fallback3 === void 0) {
            return;
        }
        this.log(`reverted ${describeHarness(fault.module)} for every window on this machine after ${why}; serving ${describeHarness(fallback3.info)}`);
        const revertTags = {
            error_class: fault.errorClass,
            trigger,
            late_faults: String(faults.filter((turn)=>turn.late).length),
            ...this.tagsOf(active)
        };
        this.increment(MODULE_REVERT_METRIC, revertTags);
        this.warn(ctx, "Agent host module reverted", {
            ...revertTags,
            fallback_version: fallback3.info.generation.slice(0, 12),
            fallback_serving: fallback3.info.source === "installed" ? "module" : "static"
        });
        this.tellOfRevert({
            label: fault.module.label,
            version: generation.slice(0, 12),
            channel: active.channel,
            fallback: {
                label: fallback3.info.label,
                version: fallback3.info.generation.slice(0, 12),
                builtIn: fallback3.info.source !== "installed"
            },
            trigger
        });
        const slot = this.slot;
        if (slot !== void 0 && slot.harness.info.generation === generation) {
            this.slot = void 0;
            this.retire(slot);
        }
    }
    tellOfRevert(revert) {
        try {
            this.onRevert?.(revert);
        } catch (error3) {
            this.log(`revert not told: ${error3 instanceof Error ? error3.message : String(error3)}`);
        }
    }
    tagsOf(active) {
        return moduleTags(active.info, active.channel, active.sequence);
    }
    increment(stat24, tags) {
        try {
            this.metrics?.increment?.({
                stat: stat24,
                value: 1,
                tags
            });
        } catch (error3) {
            this.log(`${stat24} counter not emitted: ${error3 instanceof Error ? error3.message : String(error3)}`);
        }
    }
    distribution(stat24, value, tags) {
        try {
            this.metrics?.distribution({
                stat: stat24,
                value,
                tags
            });
        } catch (error3) {
            this.log(`${stat24} distribution not emitted: ${error3 instanceof Error ? error3.message : String(error3)}`);
        }
    }
    warn(ctx, message, metadata) {
        try {
            logger113.warn(ctx, message, metadata);
        } catch (error3) {
            this.log(`"${message}" not logged: ${error3 instanceof Error ? error3.message : String(error3)}`);
        }
    }
    release(slot) {
        if (slot.disposed || slot.inFlight > 0) {
            return;
        }
        try {
            this.disposeSlot(slot);
            this.log(`released ${describeHarness(slot.harness.info)}; ${this.footprint()}`);
            this.logFootprintAfterGc(slot.harness.info);
        } catch (error3) {
            this.log(`dispose of ${describeHarness(slot.harness.info)} threw: ${error3 instanceof Error ? error3.message : String(error3)}`);
        }
    }
    footprint() {
        const { heapUsed, rss } = process.memoryUsage();
        const live = this.loader.serving().length;
        return `heapUsed ${toMb(heapUsed)} MB, rss ${toMb(rss)} MB, installed generations live: ${live}`;
    }
    logFootprintAfterGc(released) {
        const gc = globalThis.gc;
        if (typeof gc !== "function") {
            return;
        }
        this.clock.schedule(0, ()=>{
            try {
                gc();
                this.log(`after gc, ${describeHarness(released)} released: ${this.footprint()}`);
            } catch (error3) {
                this.log(`gc after release threw: ${error3 instanceof Error ? error3.message : String(error3)}`);
            }
        });
    }
    disposeSlot(slot) {
        slot.disposed = true;
        try {
            slot.adapter.dispose();
        } finally{
            if (this.loader.current().harness !== slot.harness.harness) {
                this.loader.release(slot.harness);
            }
        }
    }
    dispose() {
        if (this.disposed) {
            return;
        }
        this.disposed = true;
        for (const stop of this.stopCounting){
            stop();
        }
        const slot = this.slot;
        this.slot = void 0;
        let firstError;
        for (const each of slot === void 0 ? [] : withStandIn(slot)){
            if (!each.disposed) {
                try {
                    this.disposeSlot(each);
                } catch (error3) {
                    firstError ??= error3;
                }
            }
        }
        try {
            this.disposeShared?.();
        } catch (error3) {
            firstError ??= error3;
        }
        if (firstError !== void 0) {
            throw firstError;
        }
    }
};

}

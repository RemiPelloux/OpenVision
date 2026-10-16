import { aliasKey, copyBytes, isDroppableWatchEvent, isTerminal2, matchesAbortFilter, parseNumericShellId, pickRekeyKeeper, sessionKey, sliceWatchChunkFrom, watchEventQueuedBytes } from "../daemon_metrics_exports.js";
import { Code } from "../node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/code.js";
import { ConnectError } from "../node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/connect-error.js";
import { init_esm3 } from "../node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/index.js";
var SESSION_SHELL_OUTPUT_RING_BYTES, BACKPRESSURE_RATIO, DEFAULT_DEMO_COMMAND, OutputRing, SessionShellOutputRegistry, EventQueue;
export { BACKPRESSURE_RATIO, DEFAULT_DEMO_COMMAND, EventQueue, OutputRing, SESSION_SHELL_OUTPUT_RING_BYTES, SessionShellOutputRegistry };
var __wakaru_init_session_shell_output_initialized = false;
export function init_session_shell_output() {
if (__wakaru_init_session_shell_output_initialized) return;
__wakaru_init_session_shell_output_initialized = true;
"use strict";
init_esm3();
SESSION_SHELL_OUTPUT_RING_BYTES = 2 * 1024 * 1024;
BACKPRESSURE_RATIO = 0.9;
DEFAULT_DEMO_COMMAND = "printf 'shell-ready\\n'; sleep 120";
OutputRing = class {
    constructor(){
        this.chunks = [];
        this.startOffset = BigInt(0);
        this.nextOffset = BigInt(0);
        this.retainedBytes = 0;
        this.backpressured = false;
    }
    get nextOutputOffset() {
        return this.nextOffset;
    }
    get startOutputOffset() {
        return this.startOffset;
    }
    get size() {
        return this.retainedBytes;
    }
    get isBackpressured() {
        return this.backpressured;
    }
    contains(fromOffset) {
        return fromOffset >= this.startOffset && fromOffset <= this.nextOffset;
    }
    append(data, stream3) {
        const offset = this.nextOffset;
        if (data.byteLength > 0) {
            this.nextOffset += BigInt(data.byteLength);
            let stored = copyBytes(data);
            let storedOffset = offset;
            if (data.byteLength > SESSION_SHELL_OUTPUT_RING_BYTES) {
                const skip = data.byteLength - SESSION_SHELL_OUTPUT_RING_BYTES;
                stored = copyBytes(data.subarray(skip));
                storedOffset = offset + BigInt(skip);
            }
            this.chunks.push({
                offset: storedOffset,
                data: stored,
                stream: stream3
            });
            this.retainedBytes += stored.byteLength;
            this.dropOldestUntilBound();
            this.refreshStartOffset();
        }
        this.backpressured = this.retainedBytes >= Math.floor(SESSION_SHELL_OUTPUT_RING_BYTES * BACKPRESSURE_RATIO);
        return {
            shellId: "",
            outputOffset: offset,
            stream: stream3,
            data,
            isBackpressured: this.backpressured
        };
    }
    bufferedOutput() {
        if (this.chunks.length === 0) {
            return new Uint8Array(0);
        }
        const out = new Uint8Array(this.retainedBytes);
        let cursor = 0;
        for (const chunk of this.chunks){
            out.set(chunk.data, cursor);
            cursor += chunk.data.byteLength;
        }
        return out;
    }
    chunksFrom(fromOffset) {
        if (!this.contains(fromOffset)) {
            return [];
        }
        const replayed = [];
        for (const chunk of this.chunks){
            const end = chunk.offset + BigInt(chunk.data.byteLength);
            if (end <= fromOffset) {
                continue;
            }
            if (chunk.offset >= fromOffset) {
                replayed.push({
                    shellId: "",
                    outputOffset: chunk.offset,
                    stream: chunk.stream,
                    data: chunk.data,
                    isBackpressured: this.backpressured
                });
                continue;
            }
            const skip = Number(fromOffset - chunk.offset);
            replayed.push({
                shellId: "",
                outputOffset: fromOffset,
                stream: chunk.stream,
                data: chunk.data.subarray(skip),
                isBackpressured: this.backpressured
            });
        }
        return replayed;
    }
    absorb(other) {
        const appended = [];
        for (const chunk of other.chunks){
            const chunkEnd = chunk.offset + BigInt(chunk.data.byteLength);
            if (chunkEnd <= this.nextOffset) {
                continue;
            }
            if (chunk.offset < this.nextOffset) {
                const skip = Number(this.nextOffset - chunk.offset);
                appended.push(this.append(copyBytes(chunk.data.subarray(skip)), chunk.stream));
                continue;
            }
            appended.push(this.append(copyBytes(chunk.data), chunk.stream));
        }
        return appended;
    }
    refreshStartOffset() {
        const first = this.chunks[0];
        this.startOffset = first === void 0 ? this.nextOffset : first.offset;
    }
    dropOldestUntilBound() {
        while(this.retainedBytes > SESSION_SHELL_OUTPUT_RING_BYTES && this.chunks.length > 1){
            const dropped = this.chunks.shift();
            if (dropped === void 0) {
                break;
            }
            this.retainedBytes -= dropped.data.byteLength;
        }
        if (this.chunks.length === 1 && this.retainedBytes > SESSION_SHELL_OUTPUT_RING_BYTES) {
            const only = this.chunks[0];
            if (only === void 0) {
                return;
            }
            const overflow = this.retainedBytes - SESSION_SHELL_OUTPUT_RING_BYTES;
            const trimmed = copyBytes(only.data.subarray(overflow));
            this.chunks[0] = {
                offset: only.offset + BigInt(overflow),
                data: trimmed,
                stream: only.stream
            };
            this.retainedBytes = trimmed.byteLength;
        }
        this.refreshStartOffset();
    }
};
SessionShellOutputRegistry = class {
    constructor(){
        this.sessions = new Map();
        this.aliases = new Map();
        this.binds = new Map();
    }
    bindSession(sessionId, bind) {
        this.binds.set(sessionId, bind);
    }
    unbindSession(sessionId) {
        this.binds.delete(sessionId);
    }
    upsert(args) {
        const existing = this.resolveIds(args.sessionId, args.shellId);
        if (existing !== void 0) {
            if (args.command !== void 0 && args.command.length > 0) {
                existing.command = args.command;
            }
            if (args.cwd !== void 0 && args.cwd.length > 0) {
                existing.cwd = args.cwd;
            }
            if (args.toolCallId !== void 0) {
                existing.toolCallId = args.toolCallId;
            }
            if (args.title !== void 0) {
                existing.title = args.title;
            }
            if (args.adopted === true) {
                existing.adopted = true;
            }
            if (args.state !== void 0 && !isTerminal2(existing.state)) {
                existing.state = args.state;
            }
            if (args.abort !== void 0) {
                existing.abort = args.abort;
            }
            if (args.writeStdin !== void 0) {
                existing.writeStdin = args.writeStdin;
            }
            if (args.ownerId !== void 0) {
                existing.ownerId = args.ownerId;
            }
            if (args.background === true) {
                existing.background = true;
            }
            return;
        }
        const session = this.sessionMap(args.sessionId);
        const entry = {
            sessionId: args.sessionId,
            shellId: args.shellId,
            command: args.command ?? "",
            cwd: args.cwd ?? "",
            state: args.state ?? "starting",
            toolCallId: args.toolCallId,
            title: args.title,
            ownerId: args.ownerId,
            adopted: args.adopted === true,
            aborting: false,
            abort: args.abort,
            writeStdin: args.writeStdin,
            background: args.background === true,
            ring: new OutputRing(),
            listeners: new Set()
        };
        session.set(args.shellId, entry);
    }
    rekey(args) {
        const { sessionId, fromId, toId } = args;
        if (fromId === toId) {
            return;
        }
        this.aliases.set(aliasKey(sessionId, fromId), toId);
        const from2 = this.getExact(sessionId, fromId);
        const to3 = this.getExact(sessionId, toId);
        if (from2 === void 0) {
            return;
        }
        const session = this.sessionMap(sessionId);
        if (to3 === void 0 || to3 === from2) {
            session.delete(fromId);
            from2.shellId = toId;
            session.set(toId, from2);
            return;
        }
        const keep = pickRekeyKeeper(from2, to3);
        const drop = keep === from2 ? to3 : from2;
        this.mergeRekeyDrop(keep, drop);
        session.delete(fromId);
        session.delete(toId);
        keep.shellId = toId;
        session.set(toId, keep);
    }
    markAdopted(ref) {
        const entry = this.resolveIds(ref.sessionId, ref.shellId);
        if (entry === void 0) {
            return;
        }
        entry.adopted = true;
    }
    findFactoryShellId(args) {
        const session = this.sessions.get(sessionKey(args.sessionId));
        if (session === void 0) {
            return void 0;
        }
        for (const entry of session.values()){
            if (entry.shellId !== args.toolCallId && entry.toolCallId === args.toolCallId && !isTerminal2(entry.state)) {
                return entry.shellId;
            }
        }
        return void 0;
    }
    setState(ref) {
        const entry = this.resolveIds(ref.sessionId, ref.shellId);
        if (entry === void 0 || isTerminal2(entry.state)) {
            return;
        }
        entry.state = ref.state;
        this.emit(entry, {
            type: "lifecycle",
            lifecycle: this.lifecycleOf(entry)
        });
    }
    append(ref) {
        const entry = this.resolveIds(ref.sessionId, ref.shellId);
        if (entry === void 0) {
            return void 0;
        }
        const chunk = {
            ...entry.ring.append(ref.data, ref.stream),
            shellId: entry.shellId
        };
        this.emit(entry, {
            type: "chunk",
            chunk
        });
        return chunk;
    }
    exit(ref) {
        const entry = this.resolveIds(ref.sessionId, ref.shellId);
        if (entry === void 0 || isTerminal2(entry.state)) {
            return;
        }
        if (entry.aborting) {
            this.publishAborted(entry, "abort_background_work");
            return;
        }
        entry.state = "exited";
        if (ref.exitCode !== null) {
            entry.exitCode = ref.exitCode;
        }
        this.emit(entry, {
            type: "lifecycle",
            lifecycle: this.lifecycleOf(entry)
        });
    }
    markAborting(ref) {
        const entry = this.resolveIds(ref.sessionId, ref.shellId);
        if (entry === void 0 || isTerminal2(entry.state)) {
            return false;
        }
        entry.aborting = true;
        return true;
    }
    clearAborting(ref) {
        const entry = this.resolveIds(ref.sessionId, ref.shellId);
        if (entry === void 0 || isTerminal2(entry.state)) {
            return;
        }
        entry.aborting = false;
    }
    clearAbortingMatching(sessionId, filter3) {
        const session = this.sessions.get(sessionKey(sessionId));
        if (session === void 0) {
            return;
        }
        for (const entry of session.values()){
            if (!matchesAbortFilter(entry, filter3) || isTerminal2(entry.state)) {
                continue;
            }
            entry.aborting = false;
        }
    }
    markAbortingMatching(sessionId, filter3) {
        const session = this.sessions.get(sessionKey(sessionId));
        if (session === void 0) {
            return 0;
        }
        let count2 = 0;
        for (const entry of session.values()){
            if (!matchesAbortFilter(entry, filter3) || isTerminal2(entry.state)) {
                continue;
            }
            if (entry.state === "starting" && entry.abort === void 0) {
                continue;
            }
            entry.aborting = true;
            count2 += 1;
        }
        return count2;
    }
    abort(ref) {
        const entry = this.resolveIds(ref.sessionId, ref.shellId);
        if (entry === void 0 || isTerminal2(entry.state)) {
            return false;
        }
        try {
            entry.abort?.();
        } catch (error3) {
            if (!(error3 instanceof Error)) {
                throw error3;
            }
        }
        this.publishAborted(entry, ref.reason);
        return true;
    }
    abortMarkedMatching(args) {
        const session = this.sessions.get(sessionKey(args.sessionId));
        if (session === void 0) {
            return 0;
        }
        let count2 = 0;
        for (const entry of [
            ...session.values()
        ]){
            if (!entry.aborting || !matchesAbortFilter(entry, args.filter)) {
                continue;
            }
            if (this.abort({
                sessionId: args.sessionId,
                shellId: entry.shellId,
                reason: args.reason
            })) {
                count2 += 1;
            }
        }
        return count2;
    }
    abortMatchingToolCall(args) {
        const session = this.sessions.get(sessionKey(args.sessionId));
        if (session === void 0) {
            return 0;
        }
        let count2 = 0;
        for (const entry of [
            ...session.values()
        ]){
            if (entry.shellId !== args.toolCallId && entry.toolCallId !== args.toolCallId) {
                continue;
            }
            if (this.abort({
                sessionId: args.sessionId,
                shellId: entry.shellId,
                reason: args.reason
            })) {
                count2 += 1;
            }
        }
        return count2;
    }
    abortAll(args) {
        const session = this.sessions.get(sessionKey(args.sessionId));
        if (session === void 0) {
            return 0;
        }
        let count2 = 0;
        for (const entry of [
            ...session.values()
        ]){
            if (!matchesAbortFilter(entry, args.filter)) {
                continue;
            }
            if (this.abort({
                sessionId: args.sessionId,
                shellId: entry.shellId,
                reason: args.reason
            })) {
                count2 += 1;
            }
        }
        return count2;
    }
    clearSession(sessionId) {
        this.sessions.delete(sessionKey(sessionId));
        this.binds.delete(sessionId);
        for (const key of [
            ...this.aliases.keys()
        ]){
            if (key.startsWith(`${sessionId}\0`)) {
                this.aliases.delete(key);
            }
        }
    }
    snapshot(ref) {
        const entry = this.resolveIds(ref.sessionId, ref.shellId);
        if (entry === void 0) {
            return void 0;
        }
        return this.snapshotOf(entry);
    }
    async *watch(ctx, request3) {
        this.assertIds(request3.sessionId, request3.shellId);
        const entry = this.resolveIds(request3.sessionId, request3.shellId);
        if (entry === void 0) {
            throw new ConnectError("shell not found", Code.NotFound);
        }
        if (ctx.signal.aborted) {
            throw new ConnectError("watch canceled", Code.Canceled);
        }
        const queue = new EventQueue({
            maxQueuedBytes: SESSION_SHELL_OUTPUT_RING_BYTES,
            byteLength: watchEventQueuedBytes,
            droppable: isDroppableWatchEvent
        });
        const onEvent = (event)=>{
            queue.push(event);
        };
        entry.listeners.add(onEvent);
        const onAbort = ()=>{
            queue.close();
        };
        ctx.signal.addEventListener("abort", onAbort);
        try {
            const from2 = request3.fromOutputOffset;
            const stale = from2 !== void 0 && !entry.ring.contains(from2);
            const wantSnapshot = request3.includeSnapshot === true || from2 === void 0 || stale;
            let includedUntil = entry.ring.nextOutputOffset;
            if (wantSnapshot) {
                const snapshot = this.snapshotOf(entry);
                includedUntil = snapshot.nextOutputOffset;
                yield {
                    type: "snapshot",
                    snapshot
                };
            } else if (from2 !== void 0) {
                const replayed = entry.ring.chunksFrom(from2);
                includedUntil = entry.ring.nextOutputOffset;
                for (const chunk of replayed){
                    yield {
                        type: "chunk",
                        chunk: {
                            ...chunk,
                            shellId: entry.shellId
                        }
                    };
                }
            }
            const live = this.resolveIds(request3.sessionId, request3.shellId) ?? entry;
            if (isTerminal2(live.state)) {
                if (live.ring.nextOutputOffset > includedUntil) {
                    const snapshot = this.snapshotOf(live);
                    yield {
                        type: "snapshot",
                        snapshot
                    };
                }
                yield {
                    type: "lifecycle",
                    lifecycle: this.lifecycleOf(live)
                };
                return;
            }
            while(!ctx.signal.aborted){
                const next = await queue.next();
                if (next.kind === "closed") {
                    return;
                }
                if (next.kind === "overflow") {
                    const live2 = this.resolveIds(request3.sessionId, request3.shellId) ?? entry;
                    const snapshot = this.snapshotOf(live2);
                    includedUntil = snapshot.nextOutputOffset;
                    yield {
                        type: "snapshot",
                        snapshot
                    };
                    continue;
                }
                const event = next.value;
                if (event.type === "chunk") {
                    const sliced = sliceWatchChunkFrom(event.chunk, includedUntil);
                    if (sliced === void 0) {
                        continue;
                    }
                    includedUntil = sliced.outputOffset + BigInt(sliced.data.byteLength);
                    yield {
                        type: "chunk",
                        chunk: sliced
                    };
                    continue;
                }
                yield event;
                if (event.type === "lifecycle" && isTerminal2(event.lifecycle.state)) {
                    return;
                }
            }
        } finally{
            ctx.signal.removeEventListener("abort", onAbort);
            const surviving = this.resolveIds(request3.sessionId, request3.shellId);
            surviving?.listeners.delete(onEvent);
            if (surviving !== entry) {
                entry.listeners.delete(onEvent);
            }
            queue.close();
        }
    }
    async write(ctx, request3) {
        this.assertIds(request3.sessionId, request3.shellId);
        const entry = this.resolveIds(request3.sessionId, request3.shellId);
        if (entry === void 0) {
            throw new ConnectError("shell not found", Code.NotFound);
        }
        if (entry.writeStdin !== void 0) {
            const written = await entry.writeStdin(request3.data);
            return {
                bytesAccepted: BigInt(written)
            };
        }
        const bind = this.binds.get(request3.sessionId);
        if (bind === void 0) {
            throw new ConnectError("session exec is not bound", Code.FailedPrecondition);
        }
        const numericId = parseNumericShellId(entry.shellId);
        if (numericId === void 0) {
            throw new ConnectError("shell is not writable", Code.FailedPrecondition);
        }
        const bytesAccepted = await bind.writeStdin(ctx, numericId, request3.data);
        return {
            bytesAccepted
        };
    }
    async spawnDemo(args) {
        const sessionId = args.sessionId.trim();
        if (sessionId.length === 0) {
            return {
                accepted: false,
                shellId: "",
                error: "session_id is required"
            };
        }
        const bind = this.binds.get(sessionId);
        if (bind === void 0) {
            return {
                accepted: false,
                shellId: "",
                error: "session exec is not bound"
            };
        }
        const command = args.command !== void 0 && args.command.length > 0 ? args.command : DEFAULT_DEMO_COMMAND;
        try {
            const spawned = await bind.spawn({
                command,
                workingDirectory: bind.workspacePath
            });
            return {
                accepted: true,
                shellId: spawned.shellId
            };
        } catch (error3) {
            return {
                accepted: false,
                shellId: "",
                error: error3 instanceof Error ? error3.message : String(error3)
            };
        }
    }
    assertIds(sessionId, shellId) {
        if (sessionId.trim().length === 0) {
            throw new ConnectError("session_id is required", Code.InvalidArgument);
        }
        if (shellId.trim().length === 0) {
            throw new ConnectError("shell_id is required", Code.InvalidArgument);
        }
    }
    sessionMap(sessionId) {
        const key = sessionKey(sessionId);
        const existing = this.sessions.get(key);
        if (existing !== void 0) {
            return existing;
        }
        const created = new Map();
        this.sessions.set(key, created);
        return created;
    }
    getExact(sessionId, shellId) {
        return this.sessions.get(sessionKey(sessionId))?.get(shellId);
    }
    resolve(ref) {
        return this.resolveIds(ref.sessionId, ref.shellId);
    }
    resolveIds(sessionId, shellId) {
        const aliased = this.aliases.get(aliasKey(sessionId, shellId));
        if (aliased !== void 0) {
            return this.getExact(sessionId, aliased) ?? this.getExact(sessionId, shellId);
        }
        return this.getExact(sessionId, shellId);
    }
    publishAborted(entry, reason) {
        if (isTerminal2(entry.state)) {
            return;
        }
        entry.state = "aborted";
        entry.abortReason = reason;
        entry.aborting = false;
        this.emit(entry, {
            type: "lifecycle",
            lifecycle: this.lifecycleOf(entry)
        });
    }
    snapshotOf(entry) {
        return {
            shellId: entry.shellId,
            command: entry.command,
            cwd: entry.cwd,
            state: entry.state,
            bufferedOutput: entry.ring.bufferedOutput(),
            nextOutputOffset: entry.ring.nextOutputOffset,
            toolCallId: entry.toolCallId,
            title: entry.title,
            adopted: entry.adopted
        };
    }
    lifecycleOf(entry) {
        return {
            shellId: entry.shellId,
            state: entry.state,
            exitCode: entry.exitCode,
            abortReason: entry.abortReason
        };
    }
    emit(entry, event) {
        for (const listener of [
            ...entry.listeners
        ]){
            listener(event);
        }
    }
    emitTo(listeners, event) {
        for (const listener of listeners){
            listener(event);
        }
    }
    mergeRekeyDrop(keep, drop) {
        keep.adopted = keep.adopted || drop.adopted;
        keep.abort = keep.abort ?? drop.abort;
        keep.writeStdin = keep.writeStdin ?? drop.writeStdin;
        keep.ownerId = keep.ownerId ?? drop.ownerId;
        keep.background = keep.background || drop.background;
        if (keep.command.length === 0) {
            keep.command = drop.command;
        }
        if (keep.cwd.length === 0) {
            keep.cwd = drop.cwd;
        }
        keep.toolCallId = keep.toolCallId ?? drop.toolCallId;
        keep.title = keep.title ?? drop.title;
        keep.aborting = keep.aborting || drop.aborting;
        if (!isTerminal2(keep.state) && isTerminal2(drop.state)) {
            keep.state = drop.state;
            keep.exitCode = drop.exitCode;
            keep.abortReason = drop.abortReason;
        }
        const existingListeners = [
            ...keep.listeners
        ];
        const newListeners = [
            ...drop.listeners
        ];
        for (const listener of newListeners){
            keep.listeners.add(listener);
        }
        drop.listeners.clear();
        const absorbed = keep.ring.absorb(drop.ring);
        if (newListeners.length > 0 && keep.ring.size > 0) {
            for (const chunk of keep.ring.chunksFrom(keep.ring.startOutputOffset)){
                this.emitTo(newListeners, {
                    type: "chunk",
                    chunk: {
                        ...chunk,
                        shellId: keep.shellId
                    }
                });
            }
        }
        if (absorbed.length === 0 || existingListeners.length === 0) {
            if (isTerminal2(keep.state) && newListeners.length > 0) {
                this.emitTo(newListeners, {
                    type: "lifecycle",
                    lifecycle: this.lifecycleOf(keep)
                });
            }
            return;
        }
        for (const chunk of absorbed){
            this.emitTo(existingListeners, {
                type: "chunk",
                chunk: {
                    ...chunk,
                    shellId: keep.shellId
                }
            });
        }
        if (isTerminal2(keep.state) && newListeners.length > 0) {
            this.emitTo(newListeners, {
                type: "lifecycle",
                lifecycle: this.lifecycleOf(keep)
            });
        }
    }
};
EventQueue = class {
    constructor(options2){
        this.items = [];
        this.waiters = [];
        this.queuedBytes = 0;
        this.overflowed = false;
        this.closed = false;
        this.maxQueuedBytes = options2.maxQueuedBytes;
        this.byteLength = options2.byteLength;
        this.droppable = options2.droppable;
    }
    push(item) {
        if (this.closed) {
            return;
        }
        const waiter = this.waiters.shift();
        if (waiter !== void 0) {
            waiter({
                kind: "item",
                value: item
            });
            return;
        }
        const incoming = this.byteLength(item);
        if (this.droppable(item) && this.overflowed) {
            return;
        }
        if (this.droppable(item) && this.queuedBytes + incoming > this.maxQueuedBytes) {
            this.dropQueuedChunks();
            this.overflowed = true;
            return;
        }
        this.items.push(item);
        this.queuedBytes += incoming;
    }
    close() {
        if (this.closed) {
            return;
        }
        this.closed = true;
        for (const waiter of this.waiters.splice(0)){
            waiter({
                kind: "closed"
            });
        }
    }
    async next() {
        if (this.overflowed) {
            this.overflowed = false;
            return {
                kind: "overflow"
            };
        }
        const item = this.items.shift();
        if (item !== void 0) {
            this.queuedBytes -= this.byteLength(item);
            if (this.queuedBytes < 0) {
                this.queuedBytes = 0;
            }
            return {
                kind: "item",
                value: item
            };
        }
        if (this.closed) {
            return {
                kind: "closed"
            };
        }
        return await new Promise((resolve36)=>{
            this.waiters.push(resolve36);
        });
    }
    dropQueuedChunks() {
        const kept = [];
        let bytes = 0;
        for (const item of this.items){
            if (this.droppable(item)) {
                continue;
            }
            kept.push(item);
            bytes += this.byteLength(item);
        }
        this.items.splice(0, this.items.length, ...kept);
        this.queuedBytes = bytes;
    }
};

}

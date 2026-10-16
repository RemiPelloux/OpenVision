import { init_dist8 } from "../../agent-exec/dist/index.js";
import { McpLeaseChangeReason } from "../../agent-exec/dist/mcp.js";
import { createContext } from "../../agent-host/dist/storage/instruments.js";
import { createLogger } from "../../agent-kv/dist/subagent-states.js";
import { McpToolNotFoundError } from "../../coerce_exports.js";
import { init_dist } from "../../context/dist/index.js";
import { callServerPlacedTool, canonicalMcpServerUrl, changedServerIdentifiers, clientCallOutcomeForError, clientCallOutcomeForResult, clientCallReasonForError, coalesceLeaseEvents, conversationIdFromContext, createMcpAuthToolDefinition, isMcpAuthToolDefinition, isMcpToolServiceRefusal, isPlacementRoutingNeedsAuthError, isPlacementRoutingNotDialedError, isServerPlacedDefinition, migrateGrantsForServerPlaced, placementSnapshotFromResponse, providerHostTagForClient, providerHostTagForRow, readWrappedInputRows, recordMcpToolClientCall, recordPlacementListingWait, resolveMcpToolCaller, serverIdentifierHashForLog, serverPlacedRowInstructions, serverPlacedRowToSnapshot, serverPlacedSetKey, withRowStatus, withoutRow, wrappedInputsMoved } from "../../daemon_metrics_exports.js";
import { createClient } from "../../dist_exports.js";
import { init_dist19 } from "../../mcp-agent-exec/dist/index.js";
import { Struct } from "../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/google/protobuf/struct_pb.js";
import { init_esm2 } from "../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { init_esm3 } from "../../node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/index.js";
import { init_call_mcp_tool } from "./call-mcp-tool.js";
import { init_call_observability } from "./call-observability.js";
import { init_errors9 } from "./errors.js";
import { init_grant_migration } from "./grant-migration.js";
import { init_mcp_auth_tool } from "./mcp-auth-tool.js";
import { DEFAULT_MCP_ACCOUNT_KEY, EMPTY_PLACEMENT_SNAPSHOT, init_placement_snapshot } from "./placement-snapshot.js";
import { PlacementUnknownMcpClient, ServerPlacedMcpClient, init_server_placed_client } from "./server-placed-client.js";
import { McpInstructions, init_mcp_pb } from "../../proto/dist/generated/agent/v1/mcp_pb.js";
import { McpToolService, init_mcp_tool_connect } from "../../proto/dist/generated/aiserver/v1/mcp_tool_connect.js";
import { CallMcpToolRequest, ListMcpToolsRequest, init_mcp_tool_pb2 } from "../../proto/dist/generated/aiserver/v1/mcp_tool_pb.js";
var import_node_crypto56, logger141, DEFAULT_LISTING_TTL_MS, DEFAULT_LISTING_RETRY_MS, DEFAULT_LISTING_REFUSED_TTL_MS, DEFAULT_NEEDS_AUTH_BACKOFF_MAX_MS, PlacementRoutingMcpProvider;
export { DEFAULT_LISTING_REFUSED_TTL_MS, DEFAULT_LISTING_RETRY_MS, DEFAULT_LISTING_TTL_MS, DEFAULT_NEEDS_AUTH_BACKOFF_MAX_MS, PlacementRoutingMcpProvider, import_node_crypto56, logger141 };
var __wakaru_init_placement_routing_mcp_provider_initialized = false;
export function init_placement_routing_mcp_provider() {
if (__wakaru_init_placement_routing_mcp_provider_initialized) return;
__wakaru_init_placement_routing_mcp_provider_initialized = true;
"use strict";
import_node_crypto56 = require("node:crypto");
init_dist8();
init_dist();
init_dist19();
init_mcp_pb();
init_mcp_tool_connect();
init_mcp_tool_pb2();
init_esm2();
init_esm3();
init_call_mcp_tool();
init_call_observability();
init_errors9();
init_grant_migration();
init_mcp_auth_tool();
init_placement_snapshot();
init_server_placed_client();
logger141 = createLogger("placement-routing-mcp");
DEFAULT_LISTING_TTL_MS = 3e4;
DEFAULT_LISTING_RETRY_MS = 5e3;
DEFAULT_LISTING_REFUSED_TTL_MS = 5 * 6e4;
DEFAULT_NEEDS_AUTH_BACKOFF_MAX_MS = 5 * 6e4;
PlacementRoutingMcpProvider = class {
    constructor(options2){
        this.options = options2;
        this.listeners = new Set();
        this.waitCapLogged = false;
        this.disposeCtx = createContext();
        this.snapshot = EMPTY_PLACEMENT_SNAPSHOT;
        this.listingSeq = 0;
        this.appliedSeq = 0;
        this.pendingWaits = new Set();
        this.needsAuthMarks = new Map();
        this.needsAuthStreak = 0;
        this.needsAuthRowsKey = "";
        this.droppedRowMarks = new Map();
        this.withheldDefinitions = new Map();
        this.lastExcludedWrappedKeys = new Set();
        this.wrappedInputsSeq = 0;
        this.serializedTail = Promise.resolve();
        this.loggedCollisions = new Set();
        this.pendingEvents = [];
        this.notifyScheduled = false;
        this.disposed = false;
        this.exhaustedGrantKeys = new Set();
        this.replacedLeases = [];
        this.client = options2.client ?? (options2.transport !== void 0 ? createClient(McpToolService, options2.transport) : void 0);
        this.listingTtlMs = options2.listingTtlMs ?? DEFAULT_LISTING_TTL_MS;
        this.listingRetryMs = options2.listingRetryMs ?? DEFAULT_LISTING_RETRY_MS;
        this.listingWaitCapMs = options2.listingWaitCapMs;
        this.serveLastListingOnTtl = options2.serveLastListingOnTtl === true;
        this.serveLastListingOnChange = options2.serveLastListingOnChange === true;
        this.listingRefusedTtlMs = options2.listingRefusedTtlMs ?? DEFAULT_LISTING_REFUSED_TTL_MS;
        this.needsAuthBackoffMaxMs = options2.needsAuthBackoffMaxMs ?? DEFAULT_NEEDS_AUTH_BACKOFF_MAX_MS;
        this.now = options2.now ?? (()=>Date.now());
        this.scheduleTimeout = options2.scheduleTimeout ?? ((callback, ms2)=>{
            const timer2 = setTimeout(callback, ms2);
            return ()=>clearTimeout(timer2);
        });
    }
    getPlacementSnapshot() {
        return this.snapshot;
    }
    isPlacementKnown() {
        return this.client === void 0 || this.snapshotAt !== void 0;
    }
    getListingError() {
        return this.listingError;
    }
    isServerPlaced(serverIdentifier) {
        return this.snapshot.serverPlacedIdentifiers.has(serverIdentifier);
    }
    async refreshPlacements(ctx) {
        this.resetNeedsAuthBackoff();
        await this.ensureSnapshot(ctx, true);
        const { snapshot } = await this.ensureWrappedLease(ctx);
        return snapshot;
    }
    noteGrantChanged(ctx, serverIdentifier) {
        if (this.disposed) {
            return;
        }
        this.needsAuthMarks.delete(serverIdentifier);
        this.markListingStale();
        this.grantChangedSinceSeq = this.listingSeq;
        this.invalidateListing(ctx);
    }
    async mergeSnapshots(ctx, local) {
        const { snapshot, lease } = await this.resolve(ctx);
        const excludedKeys = this.excludedWrappedKeys(snapshot, await this.wrappedClients(ctx, lease));
        this.lastExcludedWrappedKeys = excludedKeys;
        return [
            ...local.filter((candidate)=>!excludedKeys.has(candidate.serverIdentifier)),
            ...[
                ...snapshot.rows.values()
            ].map((row)=>serverPlacedRowToSnapshot(row, this.appliedSeq))
        ];
    }
    async migrateGrantsForServerPlaced(ctx) {
        await this.resolve(ctx);
        return this.pendingGrantMigration() ?? this.runGrantMigration(ctx);
    }
    pendingGrantMigration() {
        return this.grantMigrationLatest;
    }
    async getTools(ctx) {
        const { snapshot, lease } = await this.resolve(ctx);
        const catalog = await this.buildCatalog(ctx, snapshot, lease);
        return catalog.tools;
    }
    async buildCatalog(ctx, snapshot, lease) {
        const wrappedClients = await this.wrappedClients(ctx, lease);
        const excludedKeys = this.excludedWrappedKeys(snapshot, wrappedClients);
        this.lastExcludedWrappedKeys = excludedKeys;
        const wrappedTools = (await lease.getTools(ctx)).filter((tool)=>!excludedKeys.has(tool.clientKey));
        const wrappedAuthTools = await this.wrappedNeedsAuthTools(ctx, wrappedClients, excludedKeys, wrappedTools);
        const bindings = new Map();
        const bind = (tool, binding)=>{
            const existing = bindings.get(tool.name);
            if (existing === void 0) {
                bindings.set(tool.name, binding);
                return;
            }
            const tools = existing.kind === "ambiguous" ? existing.tools : [
                existing.tool
            ];
            bindings.set(tool.name, {
                kind: "ambiguous",
                tools: [
                    ...tools,
                    tool
                ]
            });
        };
        for (const tool of [
            ...wrappedTools,
            ...wrappedAuthTools
        ]){
            bind(tool, {
                kind: "wrapped",
                tool,
                providerHost: providerHostTagForClient(wrappedClients[tool.clientKey])
            });
        }
        const serverTools = [];
        for (const row of snapshot.rows.values()){
            const rowTools = row.status === "needsAuth" ? [
                createMcpAuthToolDefinition({
                    serverIdentifier: row.serverIdentifier,
                    serverName: row.serverName,
                    ...row.plugin
                })
            ] : row.tools;
            for (const tool of rowTools){
                serverTools.push(tool);
                bind(tool, {
                    kind: "server",
                    row,
                    tool
                });
            }
        }
        const ambiguousNames = new Set();
        for (const [name17, binding] of bindings){
            if (binding.kind !== "ambiguous") {
                continue;
            }
            ambiguousNames.add(name17);
            const servers = binding.tools.map((tool)=>tool.clientKey).sort();
            const collisionKey = `${name17}\0${servers.join("\0")}`;
            if (!this.loggedCollisions.has(collisionKey)) {
                this.loggedCollisions.add(collisionKey);
                logger141.warn(ctx, "MCP tool name bound on more than one side; withholding it and failing closed on calls", {
                    name: name17,
                    servers
                });
            }
        }
        return {
            tools: [
                ...wrappedTools,
                ...wrappedAuthTools,
                ...serverTools
            ].filter((tool)=>!ambiguousNames.has(tool.name)),
            bindings
        };
    }
    async getToolsForServers(ctx, serverIdentifiers) {
        const wanted = new Set(serverIdentifiers);
        return (await this.getTools(ctx)).filter((tool)=>wanted.has(tool.clientKey));
    }
    async getToolSet(ctx) {
        const { snapshot, lease } = await this.resolve(ctx);
        const wrappedToolSet = await lease.getToolSet(ctx);
        const { bindings } = await this.buildCatalog(ctx, snapshot, lease);
        return {
            execute: async (name17, args, toolCallId, elicitationFactory)=>{
                const binding = bindings.get(name17);
                if (binding === void 0 || binding.kind === "ambiguous") {
                    this.resetNeedsAuthBackoff();
                    this.invalidateListing(ctx);
                    throw new McpToolNotFoundError(name17, [
                        ...bindings.keys()
                    ].filter((candidate)=>bindings.get(candidate)?.kind !== "ambiguous"));
                }
                if (isMcpAuthToolDefinition(binding.tool)) {
                    throw new Error(`${binding.tool.toolName} for MCP server "${binding.tool.clientKey}" is an interactive authentication step handled by the agent loop, not a callable tool`);
                }
                if (binding.kind === "wrapped") {
                    return this.callWrapped(ctx, binding, toolCallId, ()=>wrappedToolSet.execute(name17, args, toolCallId, elicitationFactory));
                }
                try {
                    return await this.callServerPlaced(ctx, binding.row, binding.tool.name, args, toolCallId, elicitationFactory?.createProvider(binding.row.serverName, binding.tool.toolName, toolCallId));
                } catch (error3) {
                    if (!isPlacementRoutingNotDialedError(error3)) {
                        throw error3;
                    }
                    return this.recoverFromNotDialed(ctx, error3, binding.row, binding.tool, args, toolCallId, elicitationFactory);
                }
            }
        };
    }
    async recoverFromNotDialed(ctx, error3, row, tool, args, toolCallId, elicitationFactory) {
        const { serverIdentifier } = row;
        logger141.info(ctx, "Routed MCP call refused as not dialed; dropping the row and re-listing placement", {
            serverIdentifierHash: serverIdentifierHashForLog(serverIdentifier),
            placement: error3.placement,
            toolCallId
        });
        this.dropRow(serverIdentifier);
        this.needsAuthMarks.delete(serverIdentifier);
        const { landed } = await this.relistNow(ctx);
        if (landed && this.snapshot.rows.has(serverIdentifier)) {
            throw error3;
        }
        const { snapshot, lease } = await this.ensureWrappedLease(ctx);
        const { bindings } = await this.buildCatalog(ctx, snapshot, lease);
        const localKeys = this.localKeysForRow(row, await this.wrappedClients(ctx, lease));
        const localTool = [
            ...bindings.values()
        ].find((candidate)=>candidate.kind === "wrapped" && !isMcpAuthToolDefinition(candidate.tool) && localKeys.has(candidate.tool.clientKey) && candidate.tool.toolName === tool.toolName);
        if (localTool !== void 0) {
            logger141.info(ctx, "Retrying refused MCP call through the wrapped lease", {
                serverIdentifierHash: serverIdentifierHashForLog(serverIdentifier),
                toolCallId
            });
            const wrappedToolSet = await lease.getToolSet(ctx);
            return this.callWrapped(ctx, localTool, toolCallId, ()=>wrappedToolSet.execute(localTool.tool.name, args, toolCallId, elicitationFactory));
        }
        const localAuthTool = [
            ...bindings.values()
        ].find((candidate)=>candidate.kind === "wrapped" && isMcpAuthToolDefinition(candidate.tool) && localKeys.has(candidate.tool.clientKey));
        if (localAuthTool !== void 0) {
            throw new Error(`MCP server "${serverIdentifier}" now runs on this machine and requires authentication here; call ${localAuthTool.tool.name} to sign in locally, then retry.`);
        }
        if (!landed) {
            throw new Error(`MCP server "${serverIdentifier}" is no longer dialed by Cursor's servers and its placement is still being re-listed; retry "${tool.name}" on the next turn.`);
        }
        throw new Error(`MCP server "${serverIdentifier}" now runs on this machine; its tools are listed from this machine on the next turn, and "${tool.name}" is not among them yet.`);
    }
    localKeysForRow(row, wrappedClients) {
        const keys = new Set([
            row.serverIdentifier,
            row.rowServerIdentifier
        ]);
        if (row.normalizedUrl === void 0) {
            return keys;
        }
        for (const [key, client] of Object.entries(wrappedClients)){
            const config2 = client.config;
            const url2 = config2 !== void 0 && "url" in config2 ? config2.url : void 0;
            if (canonicalMcpServerUrl(url2) === row.normalizedUrl) {
                keys.add(key);
            }
        }
        return keys;
    }
    async relistNow(ctx) {
        this.markListingStale();
        const { landed } = await this.awaitListingBounded(ctx, this.startOrJoinListing(ctx), "refusal");
        return {
            landed
        };
    }
    markListingStale() {
        this.staleSinceSeq = this.listingSeq;
        this.resetNeedsAuthBackoff();
    }
    resetNeedsAuthBackoff() {
        this.needsAuthStreak = 0;
        this.needsAuthRowsKey = "";
    }
    noteNeedsAuthRows(snapshot, requestSeq) {
        if (this.staleSinceSeq !== void 0 && requestSeq <= this.staleSinceSeq) {
            return;
        }
        const key = [
            ...snapshot.rows.values()
        ].filter((row)=>row.status === "needsAuth").map((row)=>row.serverIdentifier).sort().join("\0");
        if (key === "") {
            this.resetNeedsAuthBackoff();
            return;
        }
        this.needsAuthStreak = key === this.needsAuthRowsKey ? this.needsAuthStreak + 1 : 1;
        this.needsAuthRowsKey = key;
    }
    needsAuthBackoffTtlMs() {
        if (this.needsAuthStreak <= 1 || this.listingTtlMs >= this.needsAuthBackoffMaxMs) {
            return this.listingTtlMs;
        }
        return Math.min(this.listingTtlMs * 2 ** (this.needsAuthStreak - 1), this.needsAuthBackoffMaxMs);
    }
    onWrappedChange(ctx, lease, event) {
        if (this.snapshotAt === void 0) {
            return;
        }
        const named = event?.serverIdentifiers;
        if (named !== void 0 && named.some((identifier2)=>this.snapshot.serverPlacedIdentifiers.has(identifier2) || this.lastExcludedWrappedKeys.has(identifier2) || this.withheldDefinitions.has(identifier2))) {
            this.relistForWrappedChange(ctx);
            return;
        }
        if (named === void 0 && event?.reason === McpLeaseChangeReason.Status) {
            return;
        }
        this.readWrappedInputs(ctx, lease, "change");
    }
    relistForWrappedChange(ctx) {
        this.markListingStale();
        this.invalidateListing(ctx, this.listingRetryMs);
    }
    readWrappedInputs(ctx, lease, mode) {
        const seq2 = ++this.wrappedInputsSeq;
        readWrappedInputRows(ctx, lease).then((rows)=>{
            const slot = this.wrapped;
            if (this.disposed || slot?.lease !== lease) {
                return;
            }
            const previous = this.wrappedInputs;
            if (previous !== void 0 && previous.seq > seq2) {
                return;
            }
            const current = {
                rows,
                placementKnown: slot.placementKnown,
                snapshots: [
                    this.snapshot,
                    slot.snapshot
                ],
                seq: seq2
            };
            this.wrappedInputs = current;
            const moved = previous === void 0 ? mode === "change" : previous.placementKnown === current.placementKnown && wrappedInputsMoved(previous, current);
            if (moved) {
                this.relistForWrappedChange(ctx);
            }
        }, (error3)=>{
            if (this.disposed || this.wrapped?.lease !== lease || mode === "build") {
                return;
            }
            logger141.warn(ctx, "Wrapped lease clients unavailable after a change; re-listing", {
                error: error3
            });
            this.relistForWrappedChange(ctx);
        });
    }
    dropRow(serverIdentifier) {
        this.droppedRowMarks.set(serverIdentifier, this.listingSeq);
        const next = withoutRow(this.snapshot, serverIdentifier);
        if (next === this.snapshot) {
            return;
        }
        this.applySnapshot(next, false);
    }
    invalidateListing(ctx, minAgeMs = 0) {
        if (this.client === void 0 || this.disposed) {
            return;
        }
        const now2 = this.now();
        if (this.inListingBackoff(now2)) {
            return;
        }
        if (minAgeMs > 0 && this.snapshotAt !== void 0 && now2 - this.snapshotAt < minAgeMs) {
            return;
        }
        this.startOrJoinListing(ctx);
    }
    async getClients(ctx) {
        const { snapshot, lease } = await this.resolve(ctx);
        const wrappedClients = await lease.getClients(ctx);
        const excludedKeys = this.excludedWrappedKeys(snapshot, wrappedClients);
        const clients = {};
        for (const [key, client] of Object.entries(wrappedClients)){
            if (!excludedKeys.has(key)) {
                clients[key] = client;
            }
        }
        for (const row of snapshot.rows.values()){
            clients[row.serverIdentifier] = this.createServerPlacedClient(row);
        }
        for (const [identifier2, definition] of this.withheldDefinitions){
            clients[identifier2] ??= this.createWithheldClient(definition);
        }
        return clients;
    }
    async getClient(ctx, name17) {
        const { snapshot, lease } = await this.resolve(ctx);
        const row = snapshot.rows.get(name17) ?? [
            ...snapshot.rows.values()
        ].find((candidate)=>candidate.rowServerIdentifier === name17 && candidate.accountLabel === DEFAULT_MCP_ACCOUNT_KEY);
        if (row !== void 0) {
            return this.createServerPlacedClient(row);
        }
        if (snapshot.serverPlacedIdentifiers.has(name17)) {
            return void 0;
        }
        const withheld = this.withheldDefinitions.get(name17);
        if (withheld !== void 0) {
            return this.createWithheldClient(withheld);
        }
        const client = await lease.getClient(ctx, name17);
        if (client !== void 0 && this.excludedWrappedKeys(snapshot, {
            [name17]: client
        }).has(name17)) {
            return void 0;
        }
        return client;
    }
    excludedWrappedKeys(snapshot, wrappedClients) {
        const excluded = new Set();
        for (const [key, client] of Object.entries(wrappedClients)){
            const config2 = client.config;
            const url2 = config2 !== void 0 && "url" in config2 ? config2.url : void 0;
            if (isServerPlacedDefinition(snapshot, {
                identifier: key,
                url: url2
            })) {
                excluded.add(key);
            }
        }
        for (const identifier2 of snapshot.serverPlacedIdentifiers){
            excluded.add(identifier2);
        }
        return excluded;
    }
    async wrappedClients(ctx, lease) {
        try {
            return await lease.getClients(ctx);
        } catch (error3) {
            logger141.warn(ctx, "Wrapped MCP lease getClients failed", {
                error: error3
            });
            return {};
        }
    }
    createWithheldClient(definition) {
        const cause = this.listingError?.error;
        const detail = cause instanceof Error ? cause.message : cause === void 0 ? "" : String(cause);
        return new PlacementUnknownMcpClient(definition.identifier, `MCP server "${definition.identifier}" is not connected: its placement is unknown because ListMcpTools failed` + (detail ? ` (${detail})` : "") + ". It will connect once the backend answers.");
    }
    async getInstructions(ctx) {
        const { snapshot, lease } = await this.resolve(ctx);
        const excludedKeys = this.excludedWrappedKeys(snapshot, await this.wrappedClients(ctx, lease));
        const routed = [
            ...snapshot.rows.values()
        ].flatMap((row)=>{
            const instructions = serverPlacedRowInstructions(row);
            return instructions === void 0 ? [] : [
                new McpInstructions({
                    serverIdentifier: row.serverIdentifier,
                    serverName: row.serverName,
                    instructions
                })
            ];
        });
        return [
            ...(await lease.getInstructions(ctx)).filter((instruction)=>!excludedKeys.has(instruction.serverIdentifier)),
            ...routed
        ];
    }
    onDidChange(listener) {
        this.listeners.add(listener);
        return {
            dispose: ()=>{
                this.listeners.delete(listener);
            }
        };
    }
    dispose() {
        if (this.disposed) {
            return;
        }
        this.disposed = true;
        this.listeners.clear();
        for (const settle of [
            ...this.pendingWaits
        ]){
            settle("capped");
        }
        void this.serialized(async ()=>{
            const slot = this.wrapped;
            this.wrapped = void 0;
            if (slot !== void 0) {
                slot.subscription.dispose();
                await this.disposeWrappedLease(slot.lease);
            }
        });
    }
    serialized(work) {
        const run = this.serializedTail.then(work, work);
        this.serializedTail = run.then(()=>void 0, ()=>void 0);
        return run;
    }
    async resolve(ctx) {
        this.assertNotDisposed();
        await this.ensureSnapshot(ctx, false);
        const { snapshot, lease } = await this.ensureWrappedLease(ctx);
        return {
            snapshot,
            lease
        };
    }
    assertNotDisposed() {
        if (this.disposed) {
            throw new Error("PlacementRoutingMcpProvider has been disposed");
        }
    }
    listingDue(now2) {
        if (this.inListingBackoff(now2)) {
            return false;
        }
        if (this.snapshotAt === void 0 || this.staleSinceSeq !== void 0) {
            return true;
        }
        if (this.listingError !== void 0) {
            return true;
        }
        if (this.refusedAt !== void 0) {
            return now2 - this.snapshotAt >= this.listingRefusedTtlMs;
        }
        const effectiveTtlMs = this.needsAuthMarks.size > 0 ? Math.min(this.listingTtlMs, this.listingRetryMs) : this.needsAuthBackoffTtlMs();
        return now2 - this.snapshotAt >= effectiveTtlMs;
    }
    inListingBackoff(now2) {
        const failure2 = this.listingError;
        if (failure2 === void 0 || now2 - failure2.failedAt >= this.listingRetryMs) {
            return false;
        }
        return this.staleSinceSeq === void 0 || failure2.requestSeq > this.staleSinceSeq;
    }
    ensureSnapshot(ctx, force) {
        if (this.client === void 0) {
            return Promise.resolve(this.snapshot);
        }
        if (force) {
            return this.startOrJoinListing(ctx).done.then(()=>this.snapshot);
        }
        if (!this.listingDue(this.now())) {
            return Promise.resolve(this.snapshot);
        }
        const listing = this.startOrJoinListing(ctx);
        const trigger = this.snapshotAt === void 0 ? "cold" : this.staleSinceSeq !== void 0 ? "change" : void 0;
        if (trigger === void 0 && this.serveLastListingOnTtl) {
            return Promise.resolve(this.snapshot);
        }
        if (trigger === "change" && this.serveLastListingOnChange && this.grantChangedSinceSeq === void 0) {
            this.recordListingWait(ctx, this.now(), trigger, "served_last");
            return Promise.resolve(this.snapshot);
        }
        return this.awaitListingBounded(ctx, listing, trigger ?? "cold").then(({ snapshot })=>snapshot);
    }
    awaitListingBounded(ctx, listing, trigger) {
        const startedAt = this.now();
        const capMs = this.listingWaitCapMs;
        return new Promise((resolve36)=>{
            let settled = false;
            let cancelCap;
            const settle = (outcome)=>{
                if (settled) {
                    return;
                }
                settled = true;
                cancelCap?.();
                this.pendingWaits.delete(settle);
                if (!this.disposed) {
                    this.recordListingWait(ctx, startedAt, trigger, outcome);
                }
                resolve36({
                    snapshot: this.snapshot,
                    landed: outcome === "listed"
                });
            };
            this.pendingWaits.add(settle);
            if (capMs !== void 0) {
                cancelCap = this.scheduleTimeout(()=>settle("capped"), capMs);
            }
            listing.done.then(()=>settle(this.appliedSeq >= listing.seq ? "listed" : "failed"));
        });
    }
    recordListingWait(ctx, startedAt, trigger, outcome) {
        if (outcome === "capped" && !this.waitCapLogged) {
            this.waitCapLogged = true;
            logger141.warn(ctx, "ListMcpTools did not answer within the read wait cap; proceeding on the last listing", {
                waitCapMs: this.listingWaitCapMs,
                trigger,
                placementKnown: this.snapshotAt !== void 0,
                rowsRetained: this.snapshot.rows.size
            });
        }
        recordPlacementListingWait({
            ctx,
            metrics: this.options.metrics,
            waitedMs: this.now() - startedAt,
            trigger,
            outcome
        });
    }
    startOrJoinListing(ctx) {
        const inFlight = this.snapshotInFlight;
        if (inFlight !== void 0 && (this.staleSinceSeq === void 0 || inFlight.seq > this.staleSinceSeq)) {
            return inFlight;
        }
        const client = this.client;
        if (client === void 0) {
            return {
                seq: this.listingSeq,
                done: Promise.resolve()
            };
        }
        const requestSeq = ++this.listingSeq;
        const done = (async ()=>{
            try {
                const response = await client.listMcpTools(new ListMcpToolsRequest({
                    serverIdentifiers: [],
                    mcpConfigJson: this.options.mcpConfigJson
                }));
                if (this.disposed || requestSeq <= this.appliedSeq) {
                    return;
                }
                const next = this.withoutStaleDroppedRows(this.preserveNewerNeedsAuthMarks(placementSnapshotFromResponse(response), requestSeq), requestSeq);
                const firstListing = this.snapshotAt === void 0;
                this.listingError = void 0;
                this.waitCapLogged = false;
                this.refusedAt = void 0;
                this.noteNeedsAuthRows(next, requestSeq);
                this.snapshotAt = this.now();
                this.appliedSeq = requestSeq;
                this.clearMarksAnsweredBy(requestSeq);
                this.applySnapshot(next, firstListing);
            } catch (error3) {
                if (requestSeq <= this.appliedSeq) {
                    return;
                }
                if (!this.disposed && isMcpToolServiceRefusal(error3)) {
                    const next = this.withoutStaleDroppedRows(this.preserveNewerNeedsAuthMarks(EMPTY_PLACEMENT_SNAPSHOT, requestSeq), requestSeq);
                    const firstListing = this.snapshotAt === void 0;
                    this.listingError = void 0;
                    this.waitCapLogged = false;
                    this.resetNeedsAuthBackoff();
                    this.snapshotAt = this.now();
                    this.refusedAt = this.snapshotAt;
                    this.appliedSeq = requestSeq;
                    this.clearMarksAnsweredBy(requestSeq);
                    logger141.info(ctx, "ListMcpTools refused: hosted MCP is not enabled for this account", {
                        rowsReleased: this.snapshot.rows.size
                    });
                    this.applySnapshot(next, firstListing);
                    return;
                }
                this.listingError = {
                    error: error3,
                    failedAt: this.now(),
                    requestSeq
                };
                logger141.warn(ctx, "ListMcpTools failed", {
                    error: error3,
                    placementKnown: this.snapshotAt !== void 0,
                    rowsRetained: this.snapshot.rows.size
                });
            } finally{
                if (this.snapshotInFlight?.seq === requestSeq) {
                    this.snapshotInFlight = void 0;
                }
            }
        })();
        const listing = {
            seq: requestSeq,
            done
        };
        this.snapshotInFlight = listing;
        return listing;
    }
    clearMarksAnsweredBy(requestSeq) {
        if (this.staleSinceSeq !== void 0 && requestSeq > this.staleSinceSeq) {
            this.staleSinceSeq = void 0;
        }
        if (this.grantChangedSinceSeq !== void 0 && requestSeq > this.grantChangedSinceSeq) {
            this.grantChangedSinceSeq = void 0;
        }
    }
    preserveNewerNeedsAuthMarks(next, requestSeq) {
        let result = next;
        for (const [serverIdentifier, markSeq] of this.needsAuthMarks){
            if (!next.rows.has(serverIdentifier) || requestSeq > markSeq) {
                this.needsAuthMarks.delete(serverIdentifier);
                continue;
            }
            result = withRowStatus(result, serverIdentifier, "needsAuth");
        }
        return result;
    }
    withoutStaleDroppedRows(next, requestSeq) {
        let result = next;
        for (const [serverIdentifier, markSeq] of this.droppedRowMarks){
            if (requestSeq > markSeq) {
                this.droppedRowMarks.delete(serverIdentifier);
                continue;
            }
            result = withoutRow(result, serverIdentifier);
        }
        return result;
    }
    applySnapshot(next, firstListing) {
        const previous = this.snapshot;
        this.snapshot = next;
        if (firstListing) {
            this.scheduleNotify({
                reason: McpLeaseChangeReason.Snapshots
            });
            return;
        }
        const setChanged = serverPlacedSetKey(previous) !== serverPlacedSetKey(next);
        if (setChanged) {
            this.scheduleNotify({
                reason: McpLeaseChangeReason.Snapshots
            });
            return;
        }
        const changed = changedServerIdentifiers(previous, next);
        if (changed.length > 0) {
            this.scheduleNotify({
                serverIdentifiers: changed,
                reason: McpLeaseChangeReason.Snapshots
            });
        }
    }
    wrappedLeaseKey(snapshot, placementKnown) {
        return `${placementKnown ? "known" : "unknown"}|${serverPlacedSetKey(snapshot)}`;
    }
    async ensureWrappedLease(ctx) {
        while(true){
            this.assertNotDisposed();
            const snapshot = this.snapshot;
            const slot = this.wrapped;
            if (slot !== void 0 && slot.key === this.wrappedLeaseKey(snapshot, this.isPlacementKnown())) {
                return {
                    snapshot,
                    lease: slot.lease
                };
            }
            await this.serialized(()=>this.rebuildWrappedLeaseIfStale(ctx));
        }
    }
    async rebuildWrappedLeaseIfStale(ctx) {
        this.assertNotDisposed();
        const snapshot = this.snapshot;
        const placementKnown = this.isPlacementKnown();
        const key = this.wrappedLeaseKey(snapshot, placementKnown);
        if (this.wrapped !== void 0 && this.wrapped.key === key) {
            return;
        }
        await this.buildWrappedLease(ctx, snapshot, key, placementKnown);
    }
    async buildWrappedLease(ctx, snapshot, key, placementKnown) {
        const withheld = new Map();
        const lease = await this.options.createWrappedLease(ctx, {
            placementKnown,
            serverPlacedIdentifiers: snapshot.serverPlacedIdentifiers,
            serverPlacedUrls: snapshot.serverPlacedUrls,
            includeDefinition: (definition)=>{
                if (definition.kind === "http" && !placementKnown) {
                    withheld.set(definition.identifier, definition);
                    return false;
                }
                return !isServerPlacedDefinition(snapshot, definition);
            }
        });
        if (this.disposed) {
            void this.disposeWrappedLease(lease);
            throw new Error("PlacementRoutingMcpProvider has been disposed");
        }
        const subscription = lease.onDidChange((event)=>{
            this.scheduleNotify(event);
            this.onWrappedChange(ctx, lease, event);
        });
        const previous = this.wrapped;
        this.wrapped = {
            lease,
            key,
            placementKnown,
            snapshot,
            subscription
        };
        this.withheldDefinitions = withheld;
        this.readWrappedInputs(ctx, lease, "build");
        if (previous !== void 0) {
            previous.subscription.dispose();
            this.replacedLeases.push({
                lease: previous.lease,
                disposal: this.disposeWrappedLease(previous.lease)
            });
        }
        if (placementKnown && this.options.grantMigration?.migrationEnabled === true && snapshot.rows.size > 0) {
            this.runGrantMigration(ctx).catch((error3)=>{
                logger141.warn(ctx, "Automatic MCP grant migration pass failed", {
                    error: error3
                });
            });
        }
        return lease;
    }
    runGrantMigration(ctx) {
        const migration = this.options.grantMigration;
        if (migration === void 0 || !migration.migrationEnabled || this.client === void 0) {
            return Promise.resolve([]);
        }
        if (this.grantMigrationQueued !== void 0) {
            return this.grantMigrationQueued;
        }
        const client = this.client;
        const pass = this.serialized(()=>{
            if (this.grantMigrationQueued === pass) {
                this.grantMigrationQueued = void 0;
            }
            if (this.disposed) {
                return Promise.resolve([]);
            }
            return this.executeGrantMigrationPass(ctx, migration, client);
        });
        this.grantMigrationQueued = pass;
        this.grantMigrationLatest = pass;
        void pass.then(()=>this.forgetGrantMigration(pass), ()=>this.forgetGrantMigration(pass));
        return pass;
    }
    forgetGrantMigration(pass) {
        if (this.grantMigrationQueued === pass) {
            this.grantMigrationQueued = void 0;
        }
        if (this.grantMigrationLatest === pass) {
            this.grantMigrationLatest = void 0;
        }
    }
    async executeGrantMigrationPass(ctx, migration, client) {
        const snapshot = this.snapshot;
        const activeLeaseMatches = this.wrapped !== void 0 && this.wrapped.key === this.wrappedLeaseKey(snapshot, this.isPlacementKnown());
        if (!activeLeaseMatches || snapshot.rows.size === 0) {
            return [];
        }
        const grants = await migration.listLocalGrants(ctx);
        const results = await migrateGrantsForServerPlaced(ctx, {
            migrationEnabled: true,
            client,
            store: migration.store,
            grants,
            serverPlacedRows: [
                ...snapshot.rows.values()
            ],
            disconnect: async ()=>{
                if (!await this.settleReplacedLeases()) {
                    throw new Error("a replaced wrapped MCP lease did not dispose cleanly; the grant may still be in local use");
                }
            },
            stillServerPlaced: (row)=>{
                const live = this.snapshot.rows.get(row.serverIdentifier);
                return live !== void 0 && live.normalizedUrl === row.normalizedUrl;
            },
            exhausted: this.exhaustedGrantKeys
        });
        const moved = results.some((result)=>result.outcome.kind === "migrated" || result.outcome.kind === "server_copy_kept");
        if (moved && !this.disposed) {
            await this.ensureSnapshot(ctx, true);
        }
        return results;
    }
    async settleReplacedLeases() {
        for(;;){
            const entries = [
                ...this.replacedLeases
            ];
            if (entries.length === 0) {
                return true;
            }
            const clean = new Set();
            await Promise.all(entries.map(async (entry)=>{
                let ok = await entry.disposal;
                if (!ok) {
                    entry.disposal = this.disposeWrappedLease(entry.lease);
                    ok = await entry.disposal;
                }
                if (ok) {
                    clean.add(entry);
                }
            }));
            this.replacedLeases = this.replacedLeases.filter((entry)=>!clean.has(entry));
            if (!entries.every((entry)=>clean.has(entry))) {
                return false;
            }
        }
    }
    async disposeWrappedLease(lease) {
        try {
            await lease.dispose?.();
            return true;
        } catch (error3) {
            logger141.warn(this.disposeCtx, "Wrapped MCP lease dispose failed", {
                error: error3
            });
            return false;
        }
    }
    scheduleNotify(event) {
        if (this.disposed) {
            return;
        }
        this.pendingEvents.push(event);
        if (this.notifyScheduled) {
            return;
        }
        this.notifyScheduled = true;
        queueMicrotask(()=>{
            this.notifyScheduled = false;
            if (this.disposed) {
                return;
            }
            const pending = coalesceLeaseEvents(this.pendingEvents);
            this.pendingEvents = [];
            for (const listener of this.listeners){
                try {
                    listener(pending);
                } catch (error3) {
                    logger141.warn(this.disposeCtx, "MCP lease change listener threw", {
                        error: error3
                    });
                }
            }
        });
    }
    async wrappedNeedsAuthTools(ctx, clients, excludedKeys, wrappedTools) {
        const keysWithTools = new Set(wrappedTools.map((tool)=>tool.clientKey));
        const authTools = [];
        for (const [key, client] of Object.entries(clients)){
            if (keysWithTools.has(key) || excludedKeys.has(key)) {
                continue;
            }
            try {
                const state = await client.getState(ctx);
                if (state.kind === "requires_authentication") {
                    authTools.push(createMcpAuthToolDefinition({
                        serverIdentifier: key,
                        serverName: client.serverName,
                        plugin: client.plugin,
                        marketplace: client.marketplace,
                        pluginId: client.pluginId,
                        marketplaceId: client.marketplaceId
                    }));
                }
            } catch  {}
        }
        return authTools;
    }
    createServerPlacedClient(row) {
        return new ServerPlacedMcpClient(row, (ctx, targetRow, qualifiedName, args, toolCallId, elicitationProvider)=>this.callServerPlaced(ctx, targetRow, qualifiedName, args, toolCallId, elicitationProvider));
    }
    async callWrapped(ctx, binding, toolCallId, execute) {
        const startedAt = this.now();
        let outcome = "error";
        let reason = "none";
        try {
            const result = await execute();
            outcome = clientCallOutcomeForResult(result);
            return result;
        } catch (error3) {
            outcome = clientCallOutcomeForError(error3);
            reason = clientCallReasonForError(error3);
            throw error3;
        } finally{
            recordMcpToolClientCall({
                ctx,
                metrics: this.options.metrics,
                placement: "client",
                caller: resolveMcpToolCaller(this.options.caller, ctx),
                providerHost: binding.providerHost,
                serverIdentifier: binding.tool.clientKey,
                toolCallId: toolCallId ?? "",
                conversationId: conversationIdFromContext(ctx),
                outcome,
                reason,
                durationMs: this.now() - startedAt,
                elicitationCount: 0
            });
        }
    }
    async callServerPlaced(ctx, row, qualifiedName, args, toolCallId, elicitationProvider) {
        if (this.client === void 0) {
            throw new Error(`MCP server "${row.serverIdentifier}" is server-placed but this host has no McpToolService transport`);
        }
        const caller = resolveMcpToolCaller(this.options.caller, ctx);
        const conversationId = conversationIdFromContext(ctx);
        const request3 = new CallMcpToolRequest({
            serverIdentifier: row.serverIdentifier,
            toolName: qualifiedName,
            args: Struct.fromJson(args),
            accountKey: row.accountLabel,
            toolCallId: toolCallId ?? "",
            conversationId,
            caller,
            deviceTag: this.options.deviceTag ?? "",
            clientApproved: this.options.clientApproved ?? true,
            mcpConfigJson: this.options.mcpConfigJson
        });
        const requestId = (0, import_node_crypto56.randomUUID)();
        const startedAt = this.now();
        let outcome = "error";
        let reason;
        let elicitationCount = 0;
        try {
            const result = await callServerPlacedTool({
                ctx,
                client: this.client,
                request: request3,
                elicitationProvider,
                requestId,
                onFailureReason: (outcomeReason)=>{
                    reason = outcomeReason;
                },
                onProgress: (progress)=>{
                    logger141.debug(ctx, "CallMcpTool progress", {
                        serverIdentifier: row.serverIdentifier,
                        toolCallId,
                        progress: progress.progress,
                        total: progress.total,
                        messageLength: progress.message?.length ?? 0
                    });
                },
                onElicitationRequest: ()=>{
                    elicitationCount += 1;
                }
            });
            outcome = clientCallOutcomeForResult(result);
            return result;
        } catch (error3) {
            outcome = clientCallOutcomeForError(error3);
            reason ??= clientCallReasonForError(error3);
            if (isPlacementRoutingNeedsAuthError(error3)) {
                this.markNeedsAuth(row.serverIdentifier);
            }
            throw error3;
        } finally{
            recordMcpToolClientCall({
                ctx,
                metrics: this.options.metrics,
                placement: "server",
                caller,
                providerHost: providerHostTagForRow(row),
                serverIdentifier: row.serverIdentifier,
                toolCallId: toolCallId ?? "",
                conversationId,
                outcome,
                reason: reason ?? "none",
                requestId,
                durationMs: this.now() - startedAt,
                elicitationCount
            });
        }
    }
    markNeedsAuth(serverIdentifier) {
        this.resetNeedsAuthBackoff();
        this.needsAuthMarks.set(serverIdentifier, this.listingSeq);
        const next = withRowStatus(this.snapshot, serverIdentifier, "needsAuth");
        if (next === this.snapshot) {
            return;
        }
        this.snapshot = next;
        this.scheduleNotify({
            serverIdentifiers: [
                serverIdentifier
            ],
            reason: McpLeaseChangeReason.Status
        });
    }
};

}

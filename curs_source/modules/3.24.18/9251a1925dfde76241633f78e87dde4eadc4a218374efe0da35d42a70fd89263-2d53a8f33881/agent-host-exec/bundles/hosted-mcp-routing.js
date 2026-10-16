import { createContext } from "../../agent-host/dist/storage/instruments.js";
import { init_dist } from "../../context/dist/index.js";
import { uniqueNonEmpty2, wrappedLeaseView } from "../../daemon_metrics_exports.js";
import { init_dist39 } from "../../placement-routing-mcp/dist/index.js";
import { PlacementRoutingMcpProvider } from "../../placement-routing-mcp/dist/placement-routing-mcp-provider.js";
var HostedMcpRoutingState, HostedMcpLeaseFilter, GatedHostedMcpRoutingProvider;
export { GatedHostedMcpRoutingProvider, HostedMcpLeaseFilter, HostedMcpRoutingState };
var __wakaru_init_hosted_mcp_routing_initialized = false;
export function init_hosted_mcp_routing() {
if (__wakaru_init_hosted_mcp_routing_initialized) return;
__wakaru_init_hosted_mcp_routing_initialized = true;
"use strict";
init_dist();
init_dist39();
HostedMcpRoutingState = class {
    constructor(processRoutingEnabled){
        this.processRoutingEnabled = processRoutingEnabled;
        this.sessions = new Map();
        this.listeners = new Set();
    }
    isRoutingEnabled() {
        if (this.processRoutingEnabled) {
            return true;
        }
        for (const entry of this.sessions.values()){
            if (entry.enabled) {
                return true;
            }
        }
        return false;
    }
    localGrantIdentifiers() {
        const identifiers = new Set();
        for (const entry of this.sessions.values()){
            for (const identifier2 of entry.grantIdentifiers){
                identifiers.add(identifier2);
            }
        }
        return identifiers;
    }
    noteSession(sessionId, options2) {
        const next = {
            enabled: options2?.hostedMcpRoutingEnabled === true,
            grantIdentifiers: uniqueNonEmpty2((options2?.hostedMcpLocalGrantIdentifiers ?? []).map((value)=>value.trim()))
        };
        const before = this.fingerprint();
        this.sessions.set(sessionId, next);
        this.fireIfChanged(before);
    }
    forgetSession(sessionId) {
        if (!this.sessions.has(sessionId)) {
            return;
        }
        const before = this.fingerprint();
        this.sessions.delete(sessionId);
        this.fireIfChanged(before);
    }
    onDidChange(listener) {
        this.listeners.add(listener);
        return {
            dispose: ()=>{
                this.listeners.delete(listener);
            }
        };
    }
    fingerprint() {
        return JSON.stringify([
            this.isRoutingEnabled(),
            [
                ...this.localGrantIdentifiers()
            ].sort()
        ]);
    }
    fireIfChanged(before) {
        if (this.fingerprint() === before) {
            return;
        }
        for (const listener of this.listeners){
            listener();
        }
    }
};
HostedMcpLeaseFilter = class {
    constructor(routingEnabled){
        this.routingEnabled = routingEnabled;
        this.includeDefinition = (definition)=>{
            if (!this.routingEnabled()) {
                return true;
            }
            if (this.routingFilter === void 0) {
                return definition.kind === "stdio";
            }
            return this.routingFilter(definition);
        };
    }
    setRoutingFilter(filter3) {
        this.routingFilter = filter3;
    }
    clearRoutingFilter() {
        this.routingFilter = void 0;
    }
    hasRoutingFilter() {
        return this.routingFilter !== void 0;
    }
};
GatedHostedMcpRoutingProvider = class {
    constructor(options2){
        this.listeners = new Set();
        this.subscriptions = [];
        this.flips = Promise.resolve();
        this.disposed = false;
        this.lease = options2.lease;
        this.filter = options2.filter;
        this.state = options2.state;
        this.log = options2.log ?? (()=>void 0);
        const lease = options2.lease;
        const filter3 = options2.filter;
        const transport = options2.transport;
        this.canRoute = transport !== void 0;
        this.createRouting = ()=>{
            let routing;
            routing = new PlacementRoutingMcpProvider({
                transport,
                caller: options2.caller,
                deviceTag: options2.deviceTag,
                metrics: options2.metrics,
                listingTtlMs: options2.listingTtlMs,
                listingWaitCapMs: options2.listingWaitCapMs,
                serveLastListingOnTtl: options2.serveLastListingOnTtl,
                serveLastListingOnChange: options2.serveLastListingOnChange,
                createWrappedLease: async (_ctx, args)=>{
                    if (this.routingProvider !== routing || this.disposed) {
                        throw new Error("hosted-mcp-routing: provider replaced before its placement listing finished");
                    }
                    filter3.setRoutingFilter(args.includeDefinition);
                    await lease.rebuild();
                    return wrappedLeaseView(lease);
                },
                ...options2.grantMigration === void 0 ? {} : {
                    grantMigration: {
                        migrationEnabled: options2.grantMigration.migrationEnabled === true,
                        store: options2.grantMigration.store,
                        listLocalGrants: options2.grantMigration.listLocalGrants
                    }
                }
            });
            return routing;
        };
        this.active = this.canRoute && this.state.isRoutingEnabled();
        if (this.active) {
            this.startRouting();
        }
        this.subscriptions.push(this.state.onDidChange(()=>{
            this.onGateChange();
        }), this.lease.onDidChange((event)=>{
            if (!this.active) {
                this.fire(event);
            }
        }));
    }
    get routing() {
        return this.routingProvider;
    }
    isRoutingActive() {
        return this.active;
    }
    settled() {
        return this.flips;
    }
    noteGrantChanged(ctx, serverIdentifier) {
        if (this.active && !this.disposed) {
            this.routingProvider?.noteGrantChanged(ctx, serverIdentifier);
        }
    }
    target() {
        return this.active && this.routingProvider !== void 0 ? this.routingProvider : this.lease;
    }
    startRouting() {
        const routing = this.createRouting();
        this.routingProvider = routing;
        this.routingSubscription = routing.onDidChange((event)=>{
            if (this.active && this.routingProvider === routing) {
                this.fire(event);
            }
        });
    }
    stopRouting() {
        const previous = this.routingProvider;
        this.routingProvider = void 0;
        this.routingSubscription?.dispose();
        this.routingSubscription = void 0;
        this.filter.clearRoutingFilter();
        return previous;
    }
    onGateChange() {
        const next = this.canRoute && this.state.isRoutingEnabled();
        if (next === this.active || this.disposed) {
            return;
        }
        let replaced;
        if (next) {
            this.startRouting();
        } else {
            replaced = this.stopRouting();
        }
        this.active = next;
        const routing = this.routingProvider;
        const flip2 = async ()=>{
            try {
                await this.lease.rebuild();
            } catch (error3) {
                this.log(`hosted-mcp-routing: lease rebuild after gate change failed: ${error3 instanceof Error ? error3.message : String(error3)}`);
            }
            replaced?.dispose();
            if (next && routing !== void 0 && !this.disposed) {
                routing.refreshPlacements(createContext()).catch((error3)=>{
                    this.log(`hosted-mcp-routing: placement listing after gate change failed: ${error3 instanceof Error ? error3.message : String(error3)}`);
                });
            }
            this.fire(void 0);
        };
        this.flips = this.flips.then(flip2, flip2);
    }
    async getTools(ctx) {
        await this.flips;
        return this.target().getTools(ctx);
    }
    async getToolSet(ctx) {
        await this.flips;
        return this.target().getToolSet(ctx);
    }
    async getClients(ctx) {
        await this.flips;
        return this.target().getClients(ctx);
    }
    async getClient(ctx, name17) {
        await this.flips;
        return this.target().getClient(ctx, name17);
    }
    async getInstructions(ctx) {
        await this.flips;
        return this.target().getInstructions(ctx);
    }
    async getToolsForServers(ctx, serverIdentifiers) {
        await this.flips;
        return this.target().getToolsForServers(ctx, serverIdentifiers);
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
        for (const subscription of this.subscriptions.splice(0)){
            subscription.dispose();
        }
        this.listeners.clear();
        this.stopRouting()?.dispose();
    }
    fire(event) {
        for (const listener of this.listeners){
            listener(event);
        }
    }
};

}

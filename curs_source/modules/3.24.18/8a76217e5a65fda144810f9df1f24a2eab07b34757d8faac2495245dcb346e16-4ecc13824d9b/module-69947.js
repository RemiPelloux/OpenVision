require.d(exports, {
    createIdeHostedMcpRoutingProvider: ()=>l
});
var i = require(75088), o = require(42862), n = require(38669);
const r = 3e5, a = "ide-routing-gate";
function d(t) {
    return {
        getTools: (e)=>t.getTools(e),
        getToolSet: (e)=>t.getToolSet(e),
        getClients: (e)=>t.getClients(e),
        getClient: (e, s)=>t.getClient(e, s),
        getInstructions: (e)=>t.getInstructions(e),
        getToolsForServers: (e, s)=>t.getToolsForServers(e, s),
        onDidChange: (e)=>t.onDidChange(e),
        rebuild: ()=>Promise.resolve()
    };
}
class g {
    constructor(t, e){
        this.lease = t, this.routingUnavailableReason = e, this.routingAvailable = !1;
    }
    get snapshotProvider() {
        return this.lease.snapshotProvider;
    }
    isRoutingActive() {
        return !1;
    }
    sessionRoutingEnabled() {
        return !1;
    }
    settled() {
        return Promise.resolve();
    }
    disableRouting() {}
    noteGrantChanged() {}
    wrapNetwork(t) {
        return t;
    }
    getTools(t) {
        return this.lease.getTools(t);
    }
    getToolSet(t) {
        return this.lease.getToolSet(t);
    }
    getClients(t) {
        return this.lease.getClients(t);
    }
    getClient(t, e) {
        return this.lease.getClient(t, e);
    }
    getInstructions(t) {
        return this.lease.getInstructions(t);
    }
    getToolsForServers(t, e) {
        return this.lease.getToolsForServers(t, e);
    }
    onDidChange(t) {
        return this.lease.onDidChange(t);
    }
    dispose() {}
}
class h {
    constructor(t, e){
        if (this.lease = t, this.options = e, this.gateReadGeneration = 0, this.gateReads = Promise.resolve(), this.deferredNoticeLogged = !1, this.disposed = !1, "next_launch" === e.flipOnPolicy && e.initialGateValue) throw new Error("hosted-mcp-routing-adapter: next_launch is for a window whose gate read off at activation");
        this.state = new i.LD(!1), this.state.noteSession(a, {
            hostedMcpRoutingEnabled: e.initialGateValue
        }), this.transport = (0, i.l_)(), this.provider = (0, i.Tr)({
            lease: d(t),
            filter: new i.SJ(()=>this.state.isRoutingEnabled()),
            state: this.state,
            transport: this.transport.transport,
            caller: (0, i.xX)(o.G1.IDE),
            deviceTag: e.deviceTag,
            metrics: e.metrics,
            listingTtlMs: e.listingTtlMs ?? r,
            listingWaitCapMs: 1500,
            serveLastListingOnTtl: !0,
            serveLastListingOnChange: !0,
            log: e.log
        }), this.gateSubscription = e.gates.onDidChangeGates((t)=>{
            var e;
            (void 0 === (e = t.changedGates) || e.includes(n.Y)) && this.rereadGate();
        }), this.stateSubscription = this.state.onDidChange(()=>this.reportRoutingActive()), this.rereadGate(), this.reportRoutingActive();
        const s = t.snapshotProvider;
        this.snapshots = void 0 === s ? void 0 : this.routedSnapshotView(s);
    }
    reportRoutingActive() {
        this.settled().then(()=>{
            if (this.disposed) return;
            const t = this.isRoutingActive();
            t !== this.reportedRoutingActive && (this.reportedRoutingActive = t, this.options.onDidChangeRoutingActive?.(t));
        });
    }
    routedSnapshotView(t) {
        const e = async (t, e)=>{
            await this.gateReads, await this.provider.settled();
            const s = this.provider.routing;
            return void 0 !== s && this.provider.isRoutingActive() ? s.mergeSnapshots(t, e) : e;
        };
        return {
            getAllSnapshots: async (s)=>e(s, await t.getAllSnapshots(s)),
            getSnapshot: async (s, i)=>(await e(s, await t.getAllSnapshots(s))).find((t)=>t.serverIdentifier === i),
            onDidChange: (e)=>t.onDidChange(e)
        };
    }
    get snapshotProvider() {
        return this.snapshots;
    }
    get routingAvailable() {
        return void 0 === this.disabledReason;
    }
    get routingUnavailableReason() {
        return this.disabledReason;
    }
    isRoutingActive() {
        return this.provider.isRoutingActive();
    }
    sessionRoutingEnabled() {
        return this.state.isRoutingEnabled();
    }
    async settled() {
        await this.gateReads, await this.provider.settled();
    }
    noteGrantChanged(t, e) {
        this.disposed || this.provider.noteGrantChanged(t, e);
    }
    disableRouting(t) {
        if (void 0 !== this.disabledReason || this.disposed) return;
        this.disabledReason = t, this.gateSubscription.dispose(), this.gateReadGeneration += 1;
        const e = this.state.isRoutingEnabled();
        this.state.noteSession(a, {
            hostedMcpRoutingEnabled: !1
        }), this.options.log(`Hosted MCP routing disabled for this window (${t})${e ? "; server-placed rows return to the lease" : ""}`);
    }
    wrapNetwork(t) {
        return {
            ...t,
            onConnectTransportReady: (e)=>{
                t.onConnectTransportReady?.(e), this.transport.resolve(e);
            }
        };
    }
    rereadGate() {
        const t = ++this.gateReadGeneration, e = (0, n.r)(this.options.gates).then((e)=>{
            if (this.disposed || t !== this.gateReadGeneration) return;
            if (e && "next_launch" === this.options.flipOnPolicy) return void (this.deferredNoticeLogged || (this.deferredNoticeLogged = !0, this.options.log("Hosted MCP routing ON (gate changed): this window activated with the gate off, so server-placed rows keep dialing locally and routing starts at the next launch")));
            this.deferredNoticeLogged = !1;
            const s = this.state.isRoutingEnabled();
            this.state.noteSession(a, {
                hostedMcpRoutingEnabled: e
            }), s !== e && this.options.log(`Hosted MCP routing ${e ? "ON" : "OFF"} (gate changed)`);
        });
        this.gateReads = this.gateReads.then(()=>e, ()=>e);
    }
    async getTools(t) {
        return await this.gateReads, this.provider.getTools(t);
    }
    async getToolSet(t) {
        return await this.gateReads, this.provider.getToolSet(t);
    }
    async getClients(t) {
        return await this.gateReads, this.provider.getClients(t);
    }
    async getClient(t, e) {
        return await this.gateReads, this.provider.getClient(t, e);
    }
    async getInstructions(t) {
        return await this.gateReads, this.provider.getInstructions(t);
    }
    async getToolsForServers(t, e) {
        return await this.gateReads, this.provider.getToolsForServers(t, e);
    }
    onDidChange(t) {
        return this.provider.onDidChange(t);
    }
    dispose() {
        this.disposed || (this.disposed = !0, this.gateSubscription.dispose(), this.stateSubscription.dispose(), this.provider.dispose(), this.transport.dispose());
    }
}
function l(t) {
    return void 0 !== t.remoteName ? (t.log(`Hosted MCP routing unavailable on remote window (${JSON.stringify(t.remoteName)}): the remote in-process MCP lease is not placement-filtered, so every row is served locally`), t.onDidChangeRoutingActive?.(!1), new g(t.lease, "remote_window")) : (t.log(`Hosted MCP routing adapter ready (gate ${t.initialGateValue ? "ON" : "OFF"} at activation, flip-on ${t.flipOnPolicy ?? "live"}, listing TTL ${String(t.listingTtlMs ?? r)} ms)`), new h(t.lease, t));
}

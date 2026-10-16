var o, n = this && this.__createBinding || (Object.create ? function(e, t, r, o) {
    void 0 === o && (o = r);
    var n = Object.getOwnPropertyDescriptor(t, r);
    n && !("get" in n ? !t.__esModule : n.writable || n.configurable) || (n = {
        enumerable: !0,
        get: function() {
            return t[r];
        }
    }), Object.defineProperty(e, o, n);
} : function(e, t, r, o) {
    void 0 === o && (o = r), e[o] = t[r];
}), s = this && this.__setModuleDefault || (Object.create ? function(e, t) {
    Object.defineProperty(e, "default", {
        enumerable: !0,
        value: t
    });
} : function(e, t) {
    e.default = t;
}), i = this && this.__importStar || (o = function(e) {
    return o = Object.getOwnPropertyNames || function(e) {
        var t = [];
        for(var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[t.length] = r);
        return t;
    }, o(e);
}, function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for(var r = o(e), i = 0; i < r.length; i++)"default" !== r[i] && n(t, e, r[i]);
    return s(t, e), t;
});
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.activate = async function(e) {
    l.NdjsonIngestLogger.init(), e.subscriptions.push(g.workspace.onDidChangeConfiguration((t)=>{
        (t.affectsConfiguration("ndjson.port") || t.affectsConfiguration("ndjson.bindAddress")) && function(e) {
            _(), y = setTimeout(()=>{
                y = void 0, b(async ()=>{
                    if (!p || !N) return;
                    const t = g.workspace.getConfiguration("ndjson"), r = t.get("bindAddress", "127.0.0.1"), o = t.get("port", 0);
                    if (r === N.bindAddress && o === N.configuredPort) return;
                    const n = f;
                    l.NdjsonIngestLogger.info("Server settings changed, restarting ingest server"), await L();
                    const s = await E(e, {
                        surface: n
                    });
                    void 0 !== s && "string" != typeof s && l.NdjsonIngestLogger.info("NDJSON ingest server restarted after settings change");
                });
            }, 300);
        }(e);
    })), e.subscriptions.push(g.commands.registerCommand("cursor.ndjsonIngest.start", (t)=>(function(e, t = {}) {
            return b(()=>E(e, t));
        })(e, function(e) {
            if ("string" == typeof e) return {
                sessionId: e
            };
            return e ?? {};
        }(t)))), e.subscriptions.push(g.commands.registerCommand("cursor.ndjsonIngest.stop", ()=>A())), e.subscriptions.push(g.commands.registerCommand("cursor.ndjsonIngest.copyCurl", async ()=>{
        if (!h) return void g.window.showWarningMessage("Server is not running.");
        const e = `curl -sS -H "Content-Type: application/x-ndjson" --data-binary '{"hello":"world"}' "${h.toString()}"`;
        await g.env.clipboard.writeText(e), g.window.showInformationMessage("NDJSON Ingest: curl command copied to clipboard.");
    })), e.subscriptions.push(g.commands.registerCommand("cursor.ndjsonIngest.reassignPort", (t)=>(function(e, t) {
            return b(async ()=>{
                const r = m(t ?? f), o = g.workspace.getConfiguration("ndjson").get("port", 0);
                if (0 !== o) return O(`NDJSON Ingest: Cannot reassign the port while ndjson.port is pinned to ${o}. Set ndjson.port to 0 to use automatic workspace port assignment.`), `Cannot reassign pinned port ${o}`;
                const n = D(h || p?.getLoopbackUrl()) ?? j(e, r);
                0 !== n ? l.NdjsonIngestLogger.info(`Reassigning NDJSON ingest server away from sticky port ${n}`) : l.NdjsonIngestLogger.info("Reassigning NDJSON ingest server to a fresh auto-allocated port"), await I(e, r, 0), await L();
                const s = await E(e, {
                    ignoreStickyPort: !0,
                    excludedPorts: 0 !== n ? [
                        n
                    ] : [],
                    surface: r
                });
                if ("string" != typeof s && s) {
                    const e = D(s.externalUrl);
                    0 !== n && void 0 !== e && e !== n ? g.window.showInformationMessage(`NDJSON Ingest: Reassigned workspace port from ${n} to ${e} and restarted the server.`) : void 0 !== e ? g.window.showInformationMessage(`NDJSON Ingest: Restarted the server on port ${e}.`) : g.window.showInformationMessage("NDJSON Ingest: Reassigned workspace port and restarted the server.");
                }
                return s;
            });
        })(e, t))), e.subscriptions.push(g.commands.registerCommand("cursor.ndjsonIngest.showStatus", ()=>{
        h ? g.window.showInformationMessage(`URL: ${h.toString()}`) : g.window.showInformationMessage("NDJSON: server not running.");
    }));
}, exports.deactivate = async function() {
    _(), await A();
};
const a = i(require("./module-982.js")), c = require("./module-857.js"), d = require("./module-928.js"), g = i(require("./module-398.js")), u = require("./module-93.js"), l = require("./module-377.js");
let p, f, h = "";
const w = 1, v = "classic";
let N, y, S = Promise.resolve();
function b(e) {
    const t = S.then(e, e);
    return S = t.catch(()=>{}), t;
}
function m(e) {
    return "glass" === e ? "glass" : v;
}
function P(e) {
    return "classic" === e ? {
        allocatedPortKey: "ndjson.allocatedPort",
        ingestPathIdKey: "ndjson.targetId"
    } : {
        allocatedPortKey: `ndjson.allocatedPort.${e}`,
        ingestPathIdKey: `ndjson.targetId.${e}`
    };
}
function j(e, t) {
    return e.workspaceState.get(P(t).allocatedPortKey, 0);
}
async function I(e, t, r) {
    await e.workspaceState.update(P(t).allocatedPortKey, 0 === r ? void 0 : r);
}
function O(e) {
    g.window.showErrorMessage(e, "Change Port").then((e)=>{
        "Change Port" === e && g.commands.executeCommand("workbench.action.openWorkspaceSettings", "ndjson.port");
    });
}
function D(e) {
    if (e) try {
        const t = new URL(e);
        if (!t.port) return;
        const r = Number(t.port);
        return Number.isInteger(r) && r > 0 ? r : void 0;
    } catch (t) {
        return void l.NdjsonIngestLogger.warn(`Failed to parse NDJSON server URL while resolving port: ${e}`, t);
    }
}
async function $(e, t, r) {
    const o = await e.start();
    p = e, f = r;
    const n = g.Uri.parse(o.loopbackUrl);
    try {
        const e = await g.env.asExternalUri(n);
        h = e.toString();
    } catch (e) {
        l.NdjsonIngestLogger.error("asExternalUri failed; using loopback URL", e), h = n.toString();
    }
    return {
        externalUrl: h,
        logPath: t ? e.getLogPathForSession(t) : ""
    };
}
async function L() {
    l.NdjsonIngestLogger.info("Stopping NDJSON ingest server"), p && (await p.stop().catch((e)=>{
        l.NdjsonIngestLogger.error("Error stopping NDJSON ingest server:", e);
    }), p = void 0, h = "", f = void 0, N = void 0);
}
async function E(e, t = {}) {
    const r = m(t.surface ?? f);
    if (!g.workspace.isTrusted) return void g.window.showWarningMessage("debug mode disabled in untrusted workspace.");
    const o = g.workspace.workspaceFolders?.[0], n = o ? g.Uri.joinPath(o.uri, ".cursor").fsPath : (0, d.join)((0, c.homedir)(), ".cursor", "debug-logs");
    if (p) {
        const e = (0, d.resolve)(p.getLogDirectory()) === (0, d.resolve)(n), o = h || p.getLoopbackUrl();
        if (e) if (o) {
            if (void 0 === f || f === r) return {
                externalUrl: o,
                logPath: t.sessionId ? p.getLogPathForSession(t.sessionId) : ""
            };
            l.NdjsonIngestLogger.info(`Restarting NDJSON ingest server to switch from ${f} to ${r} sticky identity`), await L();
        } else l.NdjsonIngestLogger.warn("Server was set but no URL was available; stopping stale server."), await L();
        else await L();
    }
    const s = g.workspace.getConfiguration("ndjson"), i = s.get("bindAddress", "127.0.0.1"), v = s.get("port", 0), y = 0 === v, S = j(e, r), b = t.ignoreStickyPort ? 0 : S, D = await async function(e, t) {
        const { ingestPathIdKey: r } = P(t), o = e.workspaceState.get(r);
        if (o && o.length > 0) return o;
        const n = a.randomUUID();
        return await e.workspaceState.update(r, n), n;
    }(e, r);
    let A, _ = !1;
    try {
        A = await (0, u.chooseNdjsonPort)({
            bindAddress: i,
            configuredPort: v,
            previouslyAllocatedPort: b,
            excludedPorts: t.excludedPorts,
            onAutoAllocatedPort: async (e)=>{
                _ = !0;
            },
            logger: l.NdjsonIngestLogger
        });
    } catch (e) {
        const t = e instanceof Error ? e.message : String(e);
        return l.NdjsonIngestLogger.error("Failed to choose port:", e), g.window.showErrorMessage(`NDJSON Ingest: ${t}`), t;
    }
    const J = new u.NdjsonIngestServer({
        bindAddress: i,
        port: A,
        ingestPathId: D,
        logDirectory: n,
        logger: l.NdjsonIngestLogger
    }), k = y && !t.ignoreStickyPort && 0 !== S && A === S;
    try {
        const o = await $(J, t.sessionId, r);
        if (N = {
            bindAddress: i,
            configuredPort: v
        }, _) try {
            await I(e, r, A);
        } catch (e) {
            l.NdjsonIngestLogger.error("Failed to persist allocated port (server is running anyway):", e);
        }
        return o;
    } catch (o) {
        let n = o;
        if (o instanceof u.NdjsonServerStartError && "EADDRINUSE" === o.code && k) {
            l.NdjsonIngestLogger.info(`Sticky port ${A} busy, retrying after brief delay...`), await new Promise((e)=>setTimeout(e, 300));
            try {
                const o = await $(J, t.sessionId, r);
                if (N = {
                    bindAddress: i,
                    configuredPort: v
                }, _) try {
                    await I(e, r, A);
                } catch (e) {
                    l.NdjsonIngestLogger.error("Failed to persist allocated port (server is running anyway):", e);
                }
                return o;
            } catch (e) {
                n = e;
            }
        }
        const s = t.autoAllocatedPortRetryCount ?? w;
        if (n instanceof u.NdjsonServerStartError && "EADDRINUSE" === n.code && y && s > 0) return l.NdjsonIngestLogger.info(`Port ${A} was claimed by another process; retrying with a fresh auto-allocated port`), E(e, {
            ...t,
            surface: r,
            ignoreStickyPort: !0,
            excludedPorts: [
                ...t.excludedPorts ?? [],
                A
            ],
            autoAllocatedPortRetryCount: s - 1
        });
        if (n instanceof u.NdjsonServerStartError) return function(e, t) {
            switch(e.code){
                case "EADDRINUSE":
                    return l.NdjsonIngestLogger.error(`Port ${e.port} is already in use`), t ? g.window.showErrorMessage(`NDJSON Ingest: Cannot start server - port ${e.port} became unavailable. Please try again.`) : O(`NDJSON Ingest: Cannot start server - port ${e.port} is already in use. Try changing the port in settings or stopping the other service.`), "Port is already in use";
                case "EACCES":
                    return l.NdjsonIngestLogger.error(`Permission denied for port ${e.port}`), t ? g.window.showErrorMessage(`NDJSON Ingest: Permission denied for port ${e.port}. This is unexpected for auto-allocated ports.`) : O(`NDJSON Ingest: Permission denied for port ${e.port}. Try using a port number greater than 1024.`), `Permission denied for port ${e.port}`;
                default:
                    return l.NdjsonIngestLogger.error("NDJSON ingest server listen error:", e), g.window.showErrorMessage(`NDJSON Ingest: Server error - ${e.message}`), `Server error - ${e.message}`;
            }
        }(n, y);
        const a = n instanceof Error ? n.message : String(n);
        return l.NdjsonIngestLogger.error("NDJSON ingest server listen error:", n), g.window.showErrorMessage(`NDJSON Ingest: Server error - ${a}`), `Server error - ${a}`;
    }
}
function A() {
    return b(()=>L());
}
function _() {
    void 0 !== y && (clearTimeout(y), y = void 0);
}

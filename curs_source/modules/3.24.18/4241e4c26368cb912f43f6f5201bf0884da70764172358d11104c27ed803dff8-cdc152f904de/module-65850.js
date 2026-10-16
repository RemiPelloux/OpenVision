require.d(exports, {
    createIdeCanvasActivate: ()=>x
});
var a = require(87305), n = require(37949), s = require(76760), o = require(91398), i = require(7334), c = require(22438), d = require(33002), h = require(41950);
class l {
    constructor(){
        this._providers = new Map, this._providerListeners = new Map, this._changeListeners = [], this._disposed = !1;
    }
    onDidChangeState(e) {
        return this._changeListeners.push(e), {
            dispose: ()=>{
                const t = this._changeListeners.indexOf(e);
                t >= 0 && this._changeListeners.splice(t, 1);
            }
        };
    }
    registerStateProvider(e) {
        if (this._disposed) return e.dispose(), {
            dispose () {}
        };
        const t = this._providers.get(e.channel);
        t && (this._providerListeners.get(e.channel)?.dispose(), t.dispose()), this._providers.set(e.channel, e);
        const r = e.onDidChange(()=>{
            this._emitProvider(e);
        });
        return this._providerListeners.set(e.channel, r), this._emitProvider(e), {
            dispose: ()=>{
                this._providers.get(e.channel) === e && (this._providerListeners.get(e.channel)?.dispose(), this._providerListeners.delete(e.channel), this._providers.delete(e.channel), e.dispose());
            }
        };
    }
    getAllState() {
        const e = [];
        for (const t of this._providers.values()){
            const r = v(t.getState());
            void 0 !== r && e.push({
                channel: t.channel,
                payload: r
            });
        }
        return e;
    }
    dispose() {
        if (!this._disposed) {
            this._disposed = !0;
            for (const e of this._providerListeners.values())e.dispose();
            this._providerListeners.clear();
            for (const e of this._providers.values())e.dispose();
            this._providers.clear(), this._changeListeners.length = 0;
        }
    }
    _emitProvider(e) {
        const t = v(e.getState());
        if (void 0 !== t) for (const r of this._changeListeners)r(e.channel, t);
    }
}
function v(e) {
    try {
        return JSON.stringify(e);
    } catch  {
        return;
    }
}
const u = (0, n.h)("canvas-server-provider");
function p(e) {
    o.commands.executeCommand("canvas.handleCanvasError", e.canvasId, e.error, e.errorKind);
}
function g(e) {
    o.commands.executeCommand("canvas.handleCanvasErrorCleared", e);
}
const f = 1e4, m = 100;
function C(e) {
    return "function" == typeof e?.then;
}
function w(e, t) {
    let r;
    const a = new Promise((e)=>{
        r = setTimeout(()=>e(void 0), Math.max(0, t));
    });
    return Promise.race([
        Promise.resolve(e),
        a
    ]).finally(()=>{
        void 0 !== r && clearTimeout(r);
    });
}
function y(e, t) {
    const r = "string" == typeof e ? {
        runtimeDir: e,
        logContext: t
    } : e, { runtimeDir: n } = r, i = new a.CX({
        runtimeDir: n,
        logContext: r.logContext,
        nodeExecPath: r.nodeExecPath
    }), c = new l, v = c.registerStateProvider(function() {
        const e = (0, d.q6)(), t = [];
        let r = D();
        const a = ()=>{
            for (const r of t)try {
                r();
            } catch (t) {
                u.warn(e, "Canvas theme listener threw during broadcast", {
                    errorType: t instanceof Error ? t.name : typeof t
                });
            }
        };
        let n = 0;
        const s = async ()=>{
            const e = ++n;
            let t;
            try {
                const e = await o.commands.executeCommand(h.P);
                e && "string" == typeof e.kind && (t = {
                    kind: e.kind,
                    ...e.primary ? {
                        primary: e.primary
                    } : {},
                    ...e.editorBackground ? {
                        editorBackground: e.editorBackground
                    } : {},
                    ...e.editorForeground ? {
                        editorForeground: e.editorForeground
                    } : {}
                });
            } catch  {
                t = void 0;
            }
            if (e === n) {
                if (void 0 === t) {
                    const e = D().kind;
                    return void (e !== r.kind && (r = {
                        ...r,
                        kind: e
                    }, a()));
                }
                r = t, a();
            }
        }, i = o.window.onDidChangeActiveColorTheme(()=>{
            s();
        });
        return s(), {
            channel: "theme",
            getState: ()=>r,
            onDidChange: (e)=>(t.push(e), {
                    dispose () {
                        const r = t.indexOf(e);
                        r >= 0 && t.splice(r, 1);
                    }
                }),
            dispose () {
                i.dispose(), t.length = 0;
            }
        };
    }());
    i.onAction((e, t)=>(function(e, t, r, a) {
            switch(u.info(a, "Canvas action dispatched", {
                canvasId: t,
                actionType: r.type
            }), r.type){
                case "openAgent":
                    o.commands.executeCommand("canvas.openAgentByConversationId", r.agentId);
                    break;
                case "newComposerChat":
                    {
                        const n = e.getRegisteredCanvasPath(t);
                        if (!n) {
                            u.warn(a, "newComposerChat: unknown canvasId", {
                                canvasId: t
                            });
                            break;
                        }
                        o.commands.executeCommand("canvas.newComposerChat", n, r.userPrompt);
                        break;
                    }
                case "openFile":
                    {
                        const e = [
                            r.path
                        ];
                        void 0 !== r.selection && e.push(r.selection), o.commands.executeCommand("canvas.openFileInWorkbench", ...e);
                        break;
                    }
            }
        })(i, e, t, y)), i.onError(p), i.onErrorCleared(g);
    const y = r.logContext ?? (0, d.q6)(), k = new Map, x = (e)=>{
        const t = k.get(e);
        void 0 !== t && (k.delete(e), t.close());
    }, P = c.onDidChangeState((e, t)=>{
        i.pushStateAll({
            channel: e,
            payload: t
        });
    });
    return void 0 !== r.cloudCanvasCacheDir && (0, a.Fh)(r.cloudCanvasCacheDir), {
        async registerCanvas (e) {
            const t = (t)=>{
                throw u.warn(y, "Rejected canvas registration for invalid path", {
                    kind: e.kind,
                    reason: t
                }), new Error(`Invalid Canvas registration path: ${t}`);
            }, o = "bundle" === e.kind && function(e) {
                const t = s.resolve(e), r = s.dirname(s.dirname(s.dirname(t)));
                return void 0 !== (0, a.FY)({
                    path: t,
                    replicaFilesDirs: [
                        r
                    ]
                });
            }(e.path) ? await async function(e) {
                if (void 0 === e) return [];
                const t = Date.now() + f;
                for(;;){
                    const r = t - Date.now(), a = Math.min(m, r), n = e(), s = C(n) ? await w(n, a) : n;
                    if (void 0 !== s && s.length > 0) return s;
                    if (Date.now() >= t) return s ?? [];
                    void 0 !== s && await new Promise((e)=>setTimeout(e, a));
                }
            }(r.getReplicaAgentStoreFilesDirs) : [];
            let d;
            if ("bundle" === e.kind && (d = (0, a.FY)({
                path: e.path,
                replicaFilesDirs: o
            }), void 0 !== d)) {
                void 0 === await (0, a.$p)(d) && t("realpath-not-replica-canvas-store");
                await (0, a.TT)({
                    layout: d,
                    runtimeDir: n
                }) || t("replica-source-missing");
            }
            const h = "bundle" === e.kind ? await (0, a.sH)({
                path: e.path,
                peerAgentStoreFilesDirs: r.getPeerAgentStoreFilesDirs?.() ?? [],
                replicaAgentStoreFilesDirs: o,
                cloudCanvasCacheDir: r.cloudCanvasCacheDir
            }) : await (async ()=>{
                const t = await (0, a.wV)(e.path);
                return "valid" === t.status ? t : (0, a.dw)({
                    path: e.path,
                    cloudCanvasCacheDir: r.cloudCanvasCacheDir
                });
            })();
            "invalid" === h.status && t(h.reason);
            const l = {
                kind: e.kind,
                path: h.realPath
            }, v = await i.registerCanvas(l).catch((e)=>{
                throw u.error(y, "Failed to start canvas server", {
                    errorType: e instanceof Error ? e.name : typeof e
                }), e;
            });
            for (const e of c.getAllState())i.pushState({
                canvasId: v.canvasId,
                channel: e.channel,
                payload: e.payload
            });
            if (x(v.canvasId), void 0 !== d) try {
                k.set(v.canvasId, (0, a.$h)({
                    layout: d,
                    runtimeDir: n,
                    onError: (e)=>{
                        u.warn(y, "Replica canvas persist failed", {
                            errorType: e instanceof Error ? e.name : typeof e
                        });
                    }
                }));
            } catch (e) {
                u.warn(y, "Replica canvas watch unavailable", {
                    errorType: e instanceof Error ? e.name : typeof e
                });
            }
            return v;
        },
        getCanvasUrl: async (e, t)=>i.getCanvasUrl({
                canvasId: e,
                preview: t
            }),
        async destroyCanvas (e) {
            x(e), await i.destroyCanvas({
                canvasId: e
            });
        },
        async stageCloudCanvasBundle (e) {
            const t = r.cloudCanvasCacheDir;
            if (void 0 === t) throw new Error("Cloud canvas cache is not configured");
            return (0, a.Xi)({
                bundleGzip: e,
                cacheDir: t
            });
        },
        async shareCanvas (e, t, r) {
            const n = ()=>{
                if (r?.isCancellationRequested) throw new o.CancellationError;
            };
            n();
            const s = await (0, a.wV)(e);
            if ("invalid" === s.status) return u.warn(y, "Rejected canvas share for invalid source path", {
                reason: s.reason
            }), {
                status: "canvas-missing"
            };
            let c;
            try {
                c = await i.getShareArtifact({
                    path: s.realPath
                }), n();
            } catch (e) {
                if (e instanceof o.CancellationError) throw e;
                throw u.error(y, "Failed to build canvas share artifact for upload", {
                    errorType: e instanceof Error ? e.name : typeof e
                }), e;
            }
            switch(c.status.status){
                case "rendered":
                    {
                        const r = await (0, a.wV)(e);
                        if ("invalid" === r.status) return u.warn(y, "Rejected canvas share after source path changed", {
                            reason: r.reason
                        }), {
                            status: "canvas-missing"
                        };
                        if (s.realPath !== r.realPath || (0, a.e4)({
                            before: s.stats,
                            after: r.stats
                        })) return u.warn(y, "Rejected canvas share after source file changed during artifact build"), {
                            status: "canvas-missing"
                        };
                        n();
                        try {
                            return {
                                status: "shared",
                                shareUrl: (await o.cursor.shareCanvasArtifact({
                                    title: t.title,
                                    visibility: t.visibility,
                                    appJs: c.appJs,
                                    dataJson: c.dataJson,
                                    canvasPath: e
                                })).shareUrl
                            };
                        } catch (e) {
                            throw u.error(y, "Failed to upload canvas share artifact", {
                                errorType: e instanceof Error ? e.name : typeof e
                            }), e;
                        }
                    }
                case "compile-error":
                case "runtime-error":
                case "canvas-missing":
                case "content-too-large":
                    return c.status;
                default:
                    return c.status;
            }
        },
        dispose () {
            for (const e of [
                ...k.keys()
            ])x(e);
            P.dispose(), v.dispose(), c.dispose(), i.stop();
        }
    };
}
function D() {
    const { kind: e } = o.window.activeColorTheme;
    switch(e){
        case o.ColorThemeKind.Light:
            return {
                kind: "light"
            };
        case o.ColorThemeKind.Dark:
            return {
                kind: "dark"
            };
        case o.ColorThemeKind.HighContrast:
            return {
                kind: "hc-dark"
            };
        case o.ColorThemeKind.HighContrastLight:
            return {
                kind: "hc-light"
            };
        default:
            return {
                kind: "dark"
            };
    }
}
const k = (0, n.h)("cursor-agent-host-canvas");
function x(e) {
    const t = (0, s.join)(e.projectDir, "canvases"), r = (0, s.join)(e.context.extensionPath, "dist", "agent-sdk"), n = (0, a.WT)({
        canvasesDir: t,
        sdkSourceDir: r,
        tsResolveAnchor: e.context.extensionPath
    });
    n.bootstrapReady.then((t)=>{
        void 0 === t && k.error(e.logContext, "Canvas SDK source missing from extension bundle");
    }, (a)=>{
        const n = (0, c.E)(a, {
            canvasesDir: t,
            sdkSourceDir: r
        });
        k.warn(e.logContext, "Canvas dir bootstrap failed", {
            errorName: n.errorName,
            errorMessage: n.errorMessage
        });
    });
    const d = o.env.bundledNodePath?.() ?? (process.versions.electron ? void 0 : process.execPath), h = y({
        runtimeDir: (0, s.join)(e.context.extensionPath, "dist", "canvas-runtime"),
        logContext: e.logContext,
        nodeExecPath: d,
        getPeerAgentStoreFilesDirs: i.getPeerAgentStoreFilesDirs,
        getReplicaAgentStoreFilesDirs: i.getUserAgentStoreFilesDirsReady,
        cloudCanvasCacheDir: (0, s.join)(e.context.globalStorageUri.fsPath, "cloud-canvas-cache")
    });
    let l;
    return {
        snapshot: {
            serverProviderRegistered: !0,
            diagnosticsProviderCreated: !0
        },
        resourceDefaults: {
            getCanvasDiagnostics: (e)=>n.getDiagnostics(e)
        },
        register: ()=>{
            void 0 === l && (l = o.cursor.registerCanvasServerProvider(h));
        },
        dispose: ()=>{
            l?.dispose(), l = void 0, h.dispose();
        }
    };
}

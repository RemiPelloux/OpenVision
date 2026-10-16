require.d(exports, {
    WP: ()=>_e,
    Ps: ()=>l,
    FJ: ()=>M,
    Vo: ()=>Fe,
    zT: ()=>Ue,
    Pd: ()=>Dt,
    Vs: ()=>jt,
    zZ: ()=>$t,
    e6: ()=>ve,
    Dx: ()=>we,
    x7: ()=>g
});
var r = require(33002), n = require(91398);
const o = "agent_skills_batch_update", s = 4e3;
function a(e) {
    return {
        scopedTo: e.scopedTo,
        disabledEnvironments: e.disabledEnvironments,
        disableModelInvocation: e.disableModelInvocation,
        description: e.description,
        environments: e.environments,
        fullPath: e.fullPath,
        gitRemoteOrigin: e.gitRemoteOrigin,
        globs: e.globs,
        marketplace: e.marketplace,
        marketplaceId: e.marketplaceId,
        parseError: e.parseError,
        plugin: e.plugin,
        pluginId: e.pluginId,
        argumentHint: e.argumentHint,
        disableUserInvocation: e.disableUserInvocation
    };
}
function l(e) {
    const t = [], i = e.serviceCtx ?? (0, r.q6)();
    let l, c = !1, u = 0;
    const d = async (e)=>{
        if (c) return;
        const t = function(e) {
            return e.map((e)=>JSON.stringify(a(e))).sort().join("\n");
        }(e);
        if (t === l) return;
        const i = ++u, r = e.map(a), s = await Promise.resolve(n.cursor.checkFeatureGate(o)).catch(()=>!1);
        c || i !== u || t === l || (s ? await n.cursor.updateAgentSkillsInBatches(r) : await n.cursor.updateAgentSkills(r), c || i !== u || (l = t));
    };
    let p;
    e.agentSkillsService.getAllAgentSkills(i).then((e)=>{
        c || d(e);
    }).catch((t)=>{
        c || e.appendLine(`Failed to load or push initial agent skills: ${String(t)}`);
    });
    const g = e.agentSkillsService.onDidChangeSkills(()=>{
        c || (void 0 !== p && clearTimeout(p), p = setTimeout(()=>{
            p = void 0, c || (async ()=>{
                const t = await e.agentSkillsService.getAllAgentSkills(i);
                c || await d(t);
            })().catch((t)=>{
                c || e.appendLine(`agentSkillsService.onDidChangeSkills failed: ${String(t)}`);
            });
        }, s));
    });
    return t.push({
        dispose: g
    }), t.push({
        dispose: ()=>{
            c = !0, void 0 !== p && clearTimeout(p);
        }
    }), n.Disposable.from(...t);
}
var c = require(91105), u = require("./module-89350.js"), d = require("./module-11762.js");
const p = 18e5;
function g(e) {
    const t = function(e, t, i) {
        return {
            ctx: e,
            extensionPath: i,
            getAuthToken: ()=>n.cursor.getCursorAuthToken(),
            getManagedSkills: ()=>Promise.resolve(n.cursor.getManagedSkills()),
            syncBuiltinSkills: c.Rhp,
            ensureCanvasSdkMirror: d.I_,
            appendLine: t
        };
    }((0, r.q6)(), e.appendLine, e.extensionPath), i = function(e) {
        const t = e.setTimeoutFn ?? setTimeout, i = e.clearTimeoutFn ?? clearTimeout;
        let r, n = !1;
        const o = ()=>{
            void 0 !== r && (i(r), r = void 0);
        };
        return {
            schedule () {
                n || (o(), r = t(()=>{
                    r = void 0, e.run().catch(()=>{});
                }, e.intervalMs));
            },
            dispose () {
                n = !0, o();
            }
        };
    }({
        intervalMs: e.intervalMs ?? p,
        setTimeoutFn: e.setTimeoutFn,
        clearTimeoutFn: e.clearTimeoutFn,
        run: async ()=>{
            try {
                await (0, u.w)(t);
            } catch (t) {
                e.appendLine(`Failed to refresh Cursor-managed skills on schedule: ${String(t)}`);
            } finally{
                i.schedule();
            }
        }
    });
    i.schedule();
    const o = n.cursor.onDidChangeCursorAuthToken(()=>{
        (0, u.w)(t).catch((t)=>{
            e.appendLine(`Failed to refresh Cursor-managed skills after auth change: ${String(t)}`);
        }).finally(()=>{
            i.schedule();
        });
    });
    return {
        dispose: ()=>{
            o.dispose(), i.dispose();
        }
    };
}
var m = require(31421), f = require(51455), h = require(48161), y = require(76760);
const w = "cursor.installSkills.runSkillsCliAdd", v = /^[A-Za-z0-9@._~:/?=+\\][A-Za-z0-9@._~:/#?=+\\-]*$/, k = /^[A-Za-z0-9._][A-Za-z0-9._-]*$/, S = /^[A-Za-z0-9._][A-Za-z0-9._-]*$/, P = "skills@1.5.23", b = new Set([
    "PATH",
    "HOME",
    "USER",
    "LOGNAME",
    "SHELL",
    "TMPDIR",
    "LANG",
    "LC_ALL",
    "LC_CTYPE",
    "SSH_AUTH_SOCK",
    "XDG_CACHE_HOME",
    "XDG_CONFIG_HOME",
    "XDG_DATA_HOME",
    "HTTP_PROXY",
    "HTTPS_PROXY",
    "NO_PROXY",
    "http_proxy",
    "https_proxy",
    "no_proxy"
]), D = 3e5, C = 65536, I = 320, T = /(?:\x1b\[|\x9b)[=?>!]?[\d;:]*["$#'* ]?[a-zA-Z@^`{}|~]|(?:\x1b\]|\x9d).*?(?:\x1b\\|\x07|\x9c)|\x1b(?:[ #%()*+\-./]?[a-zA-Z0-9|}~@])/g, E = /[\r\n│┃└┌├─╭╮╯╰→◇◆■□●○◒◐◓◑▲▼]+/;
function x(e) {
    return /^[A-Za-z0-9-][A-Za-z0-9@.=-]*$/.test(e) ? e : `"${e.replace(/\\+$/, (e)=>e + e)}"`;
}
function R(e) {
    return [
        "npx",
        ...e.map(x)
    ].join(" ");
}
function N(e) {
    const t = {
        NO_COLOR: "1"
    };
    for (const [i, r] of Object.entries(e))void 0 !== r && (b.has(i) || i.startsWith("GIT_")) && (t[i] = r);
    return t;
}
async function j(e) {
    try {
        const t = await (0, f.readdir)(e, {
            withFileTypes: !0
        });
        return new Set(t.filter((e)=>!e.isFile()).map((e)=>e.name));
    } catch  {
        return new Set;
    }
}
function _(e) {
    return new Promise((t)=>{
        const i = (0, m.spawn)("npx", e, {
            cwd: (0, h.homedir)(),
            env: N(process.env),
            stdio: [
                "ignore",
                "pipe",
                "pipe"
            ],
            detached: !0
        });
        let r = "";
        const n = (e)=>{
            r = (r + e.toString()).slice(-C);
        };
        i.stdout.on("data", n), i.stderr.on("data", n);
        let o = !1;
        const s = (e)=>{
            o || (o = !0, clearTimeout(a), t({
                ...e,
                output: r.replace(T, "")
            }));
        }, a = setTimeout(()=>{
            !function(e) {
                if (void 0 !== e.pid) try {
                    return void process.kill(-e.pid, "SIGKILL");
                } catch  {}
                e.kill("SIGKILL");
            }(i), s({
                exitCode: void 0,
                reason: "Timed out after 5 minutes"
            });
        }, D);
        i.on("error", (t)=>{
            const i = "ENOENT" === t.code;
            s({
                exitCode: void 0,
                reason: i ? `npx was not found. Install Node.js (https://nodejs.org), then run: ${R(e)}` : `Could not run npx: ${t.message}`
            });
        }), i.on("close", (e, t)=>{
            s(null === e ? {
                exitCode: void 0,
                reason: `The skills CLI was stopped by ${t ?? "a signal"}`
            } : {
                exitCode: e
            });
        });
    });
}
function F(e) {
    const t = [];
    for (const i of e.split(E)){
        const e = i.replace(/\s+/g, " ").trim();
        e.length > 0 && e !== t[t.length - 1] && t.push(e);
    }
    const i = t.join(" ");
    return i.length <= I ? i : i.slice(-I).replace(/^\S+\s+/, "");
}
async function A(e) {
    const t = function(e) {
        return [
            "-y",
            void 0 === e.version ? P : `skills@${e.version}`,
            "add",
            e.source,
            ...e.skills.flatMap((e)=>[
                    "--skill",
                    e
                ]),
            "-g",
            "-a",
            "cursor",
            "-y"
        ];
    }(e);
    if ("win32" === process.platform) return {
        ok: !1,
        exitCode: void 0,
        output: "",
        errorMessage: `Automatic install isn't supported on Windows yet. Run this in a terminal: ${R(t)}`,
        unsupportedPlatform: !0
    };
    const i = function() {
        const e = (0, h.homedir)();
        return [
            (0, y.join)(e, ".agents", "skills"),
            (0, y.join)(e, ".cursor", "skills")
        ];
    }(), r = await Promise.all(i.map(j)), n = await _(t);
    if (0 !== n.exitCode) return {
        ok: !1,
        exitCode: n.exitCode,
        output: n.output,
        errorMessage: void 0 === n.exitCode ? n.reason : F(n.output) || `The skills CLI exited with code ${n.exitCode}`
    };
    const o = await Promise.all(i.map(j)), s = new Set;
    return o.forEach((e, t)=>{
        for (const i of e)r[t].has(i) || s.add(i);
    }), {
        ok: !0,
        installedSkills: [
            ...s
        ].sort(),
        output: n.output
    };
}
function M(e) {
    e.subscriptions.push(n.commands.registerCommand(w, async (e)=>((function(e) {
            if (void 0 === e || "string" != typeof e.source || !v.test(e.source) || !Array.isArray(e.skills) || e.skills.some((e)=>"string" != typeof e || !k.test(e)) || void 0 !== e.version && ("string" != typeof e.version || !S.test(e.version))) throw new Error("runSkillsCliAdd requires a source, skill filters, and version made of URL-safe characters");
        })(e), await A(e))));
}
var L = require(63553), U = require(47859), O = require(79896), $ = require(91943), H = require(70857), q = require(16928);
const G = (0, require(37949).h)("cursor-agent-host");
var V = require(42761), W = require(47777);
function K(e) {
    if (e instanceof V.T) return e.code === W.C.Canceled;
    if (!(e instanceof Error)) return !1;
    if ("Canceled" === e.name && "Canceled" === e.message) return !0;
    if ("ConnectError" !== e.name) return !1;
    const t = e.code;
    return t === W.C.Canceled || "Canceled" === t || "Canceled" === e.message || e.message.startsWith("Canceled:");
}
var z = require(32180), J = require(36038), B = require(87016);
const X = 1, Z = 2, Y = 3;
function Q(e) {
    switch(e.installMode){
        case X:
        case "EFFECTIVE_PLUGIN_INSTALL_MODE_USER":
            return "user";
        case Z:
        case "EFFECTIVE_PLUGIN_INSTALL_MODE_TEAM_DEFAULT":
            return "team-default";
        case Y:
        case "EFFECTIVE_PLUGIN_INSTALL_MODE_TEAM_REQUIRED":
            return "team-required";
        default:
            return !0 === e.isTeamRequired ? "team-required" : "user";
    }
}
var ee = require(77598);
const te = "plugin_mcp_census", ie = "mcp_plugin_census", re = "MCP plugin census", ne = "local";
class oe {
    constructor(e){
        this.emit = e;
    }
    report(e) {
        const t = function(e) {
            return [
                e.execHostRemoteName,
                e.pluginHomeDirHash,
                e.pluginsLoaded,
                e.retainedFromPreviousLoad,
                e.wasFirstLoad,
                e.sourceUnavailable,
                e.mcpDescriptorsProduced
            ].join("|");
        }(e);
        t !== this.lastSignature && (this.lastSignature = t, this.emit(e));
    }
}
var se = require(64472);
async function ae(e) {
    return {
        plugins: await e.getAllEnabledPlugins(),
        loadFailures: e.getLoadFailures(),
        pluginSetIncomplete: e.isPluginSetIncomplete()
    };
}
function le(e) {
    return void 0 !== e && "config" in e ? Object.keys(e.config.hooks) : [];
}
async function ce(e) {
    try {
        const t = await (0, $.readFile)(e, "utf-8");
        return JSON.parse(t);
    } catch  {
        return null;
    }
}
function ue(e) {
    const { pluginsService: t, pluginMcpService: i, pluginHooksService: o, pluginCommandsService: s, githubPluginsStore: a, refreshPlugins: l, pluginMetricsLogger: c, backendMarketplaceClient: u, workspacePaths: d, requestRefreshSchedule: p, secretStorage: g, primitiveAuthorshipResolver: m, sparsePluginClones: f } = e, h = "localPluginVariables:", y = new oe((e)=>{
        c.log("info", re, {
            ...e
        }), (0, se.b)({
            subkey: te,
            message: re,
            metadata: {
                event: ie,
                ...e
            }
        });
    }), w = async (e)=>Promise.all(e.map(async (e)=>{
            const t = e.identifier.sourceInfo.name, i = e.identifier.source, r = (0, L.xJd)(e.identifier) ?? (0, L.s4m)(e.identifier), n = "cursor-first-party" === e.identifier.source || "cursor-third-party" === e.identifier.source || "claude-plugin" === e.identifier.source ? e.identifier.sourceInfo.version : void 0, o = "extension" === e.identifier.source ? e.identifier.sourceInfo.localPath : void 0, s = "extension" === e.identifier.source ? e.identifier.sourceInfo.extensionId : void 0;
            let a;
            if ("user-local" === i) try {
                const e = await g.get(`${h}${t}`);
                e && (a = JSON.parse(e));
            } catch  {}
            const l = (0, L.R3Q)(e.identifier), c = void 0 !== e.hooks && "config" in e.hooks, u = le(e.hooks);
            return {
                id: r,
                name: t,
                source: i,
                version: n,
                manifestVersion: e.version,
                homepageUrl: e.homepage,
                repositoryUrl: e.repository,
                ...void 0 !== l && {
                    marketplace: l
                },
                installPath: e.installPath,
                localPath: o,
                extensionId: s,
                loadError: e.loadError,
                logoUrl: e.logoUrl,
                skillsCount: e.skills.length,
                agentsCount: e.agents.length,
                commandsCount: e.commands.length,
                hasHooks: c,
                hooksCount: u.length,
                mcpServersCount: e.mcpConfig?.mcpServers ? Object.keys(e.mcpConfig.mcpServers).length : 0,
                skillNames: e.skills.map((e)=>e.name ?? e.path),
                agentNames: e.agents.map((e)=>e.name),
                ruleNames: e.rules.map((e)=>e.name),
                commandNames: e.commands.map((e)=>e.name),
                hookNames: u,
                mcpServerNames: e.mcpConfig?.mcpServers ? Object.keys(e.mcpConfig.mcpServers) : [],
                capabilities: e.capabilities,
                variablesSchema: e.variablesSchema,
                configuredVariables: a
            };
        })), v = (e, t, i)=>{
        const r = e.identifier.sourceInfo, n = e.hooks && "config" in e.hooks ? e.hooks.sourcePath : void 0;
        return {
            rawIdentifier: t,
            name: r.name,
            displayName: e.displayName ?? r.name,
            description: e.description ?? "",
            sources: i,
            projectInstallKey: i.includes("project") ? t : void 0,
            publisherName: e.authorName,
            skills: e.skills.map((e)=>({
                    name: e.name || e.path,
                    description: e.description,
                    sourcePath: e.path
                })),
            subagents: e.agents.map((e)=>({
                    name: e.name,
                    description: e.description,
                    sourcePath: e.path
                })),
            rules: e.rules.map((e)=>({
                    name: e.name,
                    description: e.description,
                    sourcePath: e.path
                })),
            commands: e.commands.map((e)=>({
                    name: e.name,
                    description: e.description,
                    sourcePath: e.path
                })),
            hooks: le(e.hooks).map((e)=>({
                    name: e,
                    sourcePath: n
                })),
            mcpServers: e.mcpConfig?.mcpServers ? Object.keys(e.mcpConfig.mcpServers).map((t)=>({
                    name: t,
                    sourcePath: e.mcpConfig?.mcpServerSourcePaths?.[t]
                })) : []
        };
    }, k = (e, t = 0)=>(e.sort((e, t)=>e.rawIdentifier.localeCompare(t.rawIdentifier)), e.map((e, i)=>({
                plugin: {
                    id: -(t + i + 1),
                    name: e.name,
                    displayName: e.displayName,
                    description: e.description,
                    ...void 0 !== e.publisherName && e.publisherName.trim().length > 0 && {
                        publisher: {
                            name: e.publisherName,
                            displayName: e.publisherName
                        }
                    },
                    skills: e.skills,
                    subagents: e.subagents,
                    rules: e.rules,
                    commands: e.commands,
                    hooks: e.hooks,
                    mcpServers: e.mcpServers
                },
                scopes: e.sources,
                projectInstallKey: e.projectInstallKey
            }))), S = async ()=>{
        const e = [], i = new Set;
        try {
            const { userEnabledPluginIds: r, projectEnabledPluginIds: n } = await async function(e, t) {
                const i = (0, q.join)(e, ".claude", "settings.json"), [r, n] = await Promise.all([
                    ce(i),
                    Promise.all(t.map(async (e)=>{
                        const [t, i] = await Promise.all([
                            ce((0, q.join)(e, ".claude", "settings.json")),
                            ce((0, q.join)(e, ".claude", "settings.local.json"))
                        ]);
                        return {
                            ...t?.enabledPlugins ?? {},
                            ...i?.enabledPlugins ?? {}
                        };
                    }))
                ]), o = new Set(Object.entries(r?.enabledPlugins ?? {}).filter(([, e])=>!0 === e).map(([e])=>e)), s = new Set;
                for (const e of n)for (const [t, i] of Object.entries(e))!0 === i && s.add(t);
                return {
                    userEnabledPluginIds: o,
                    projectEnabledPluginIds: s
                };
            }(H.homedir(), d), o = await t.getAllEnabledPlugins();
            for (const t of o){
                if ("claude-plugin" !== t.identifier.source) continue;
                const o = t.identifier.sourceInfo, s = "raw" in o && "string" == typeof o.raw ? o.raw : o.name;
                if (i.has(s)) continue;
                i.add(s);
                const a = [];
                r.has(s) && a.push("user"), n.has(s) && a.push("project"), 0 === a.length && a.push("user"), e.push(v(t, s, a));
            }
        } catch (e) {
            G.error((0, r.q6)(), "Failed to get imported external plugins", {
                error: String(e)
            });
        }
        return k(e, 0);
    }, P = async ()=>{
        const e = [], i = new Set;
        try {
            const r = await (0, L.JJ1)(d), n = await t.getAllEnabledPlugins();
            for (const t of n){
                if ("cursor-third-party" !== t.identifier.source) continue;
                const n = t.identifier.sourceInfo, o = n.name;
                if (i.has(o)) continue;
                i.add(o);
                const s = r.find(({ key: e })=>{
                    const t = (0, L.kXx)(e);
                    return t.name === n.name && t.marketplaceName === n.marketplace;
                });
                if (!s) continue;
                const a = v(t, s.key, [
                    "project"
                ]);
                a.projectInstallKey = s.key, e.push(a);
            }
        } catch (e) {
            G.error((0, r.q6)(), "Failed to get cursor third-party plugins", {
                error: String(e)
            });
        }
        return k(e, 1e6);
    }, b = async (e)=>{
        const t = [];
        try {
            const i = await n.cursor.getEffectiveUserPlugins(e);
            for (const e of i?.plugins ?? [])e.plugin && e.isEnabled && t.push({
                plugin: e.plugin,
                source: e.isTeamRequired ? "team" : "user",
                isTeamRequired: e.isTeamRequired,
                installMode: Q(e),
                pinnedGitRef: e.pinnedGitRef,
                configuredVariables: e.configuredVariables,
                hasTeamConfiguredVariables: e.hasTeamConfiguredVariables
            });
        } catch (e) {
            throw K(e) || G.error((0, r.q6)(), "Failed to get effective user plugins for installed list", {
                error: String(e)
            }), e;
        }
        try {
            const e = (await (0, L.JJ1)(d)).filter((e)=>!e.entry.gitUrl);
            if (e.length > 0) {
                const i = e.map((e)=>(0, L.kXx)(e.key)), r = await n.cursor.resolveProjectPlugins(i.map((e)=>({
                        name: e.name,
                        marketplaceName: e.marketplaceName
                    })));
                for (const i of r?.plugins ?? []){
                    const r = e.find((e)=>{
                        const t = (0, L.kXx)(e.key);
                        return t.name === i.name && t.marketplaceName === i.marketplace?.name;
                    });
                    t.push({
                        plugin: i,
                        source: "project",
                        projectInstallKey: r?.key
                    });
                }
            }
        } catch (e) {
            G.error((0, r.q6)(), "Failed to resolve project plugins for installed list", {
                error: String(e)
            });
        }
        const i = {
            project: 0,
            team: 1,
            user: 2
        }, o = new Map;
        for (const e of t){
            const t = void 0 !== e.plugin.id ? String(e.plugin.id) : void 0;
            if (!t) continue;
            const r = o.get(t);
            if (!r) {
                o.set(t, {
                    plugin: e.plugin,
                    scopes: [
                        e.source
                    ],
                    projectInstallKey: e.projectInstallKey,
                    isTeamRequired: e.isTeamRequired,
                    installMode: e.installMode,
                    pinnedGitRef: e.pinnedGitRef,
                    configuredVariables: e.configuredVariables,
                    hasTeamConfiguredVariables: e.hasTeamConfiguredVariables
                });
                continue;
            }
            r.scopes.includes(e.source) || r.scopes.push(e.source);
            const n = r.scopes[0];
            (void 0 === n || i[e.source] < i[n]) && (r.isTeamRequired = e.isTeamRequired, r.pinnedGitRef = e.pinnedGitRef), void 0 !== e.installMode && (r.installMode = e.installMode), void 0 !== e.hasTeamConfiguredVariables && (r.hasTeamConfiguredVariables = e.hasTeamConfiguredVariables), void 0 !== e.projectInstallKey && (r.projectInstallKey = e.projectInstallKey), o.set(t, r);
        }
        return Array.from(o.values()).map((e)=>({
                ...e,
                scopes: [
                    ...e.scopes
                ].sort((e, t)=>i[e] - i[t])
            }));
    };
    return {
        getPluginMcpServers: async ()=>{
            const e = await i.getPluginMcpServers();
            var r, o;
            return y.report({
                execHostRemoteName: (r = {
                    diagnostics: t.getLoadDiagnostics(),
                    mcpDescriptorsProduced: e.length,
                    execHostRemoteName: n.env.remoteName
                }).execHostRemoteName ?? ne,
                pluginHomeDirHash: (o = r.diagnostics.userHomeDirectory, (0, ee.createHash)("sha256").update(o).digest("hex")),
                pluginsLoaded: r.diagnostics.pluginsLoaded,
                retainedFromPreviousLoad: r.diagnostics.retainedFromPreviousLoad,
                wasFirstLoad: r.diagnostics.wasFirstLoad,
                sourceUnavailable: r.diagnostics.sourceUnavailable,
                mcpDescriptorsProduced: r.mcpDescriptorsProduced
            }), e.map((e)=>({
                    ...e,
                    plugin: e.pluginName,
                    pluginSource: "cursor-third-party" === e.pluginSource ? "cursor-first-party" : e.pluginSource
                }));
        },
        getPluginHooks: async ()=>o.getPluginHooks(),
        getPluginCommands: async ()=>s.getPluginCommands(),
        getLoadedPluginsSummary: async ()=>w((await ae(t)).plugins),
        getPluginLoadFailures: async ()=>(await ae(t)).loadFailures,
        getPluginSetIncomplete: async ()=>(await ae(t)).pluginSetIncomplete,
        getInstalledGitHubPlugins: async ()=>a.listPlugins(),
        addGitHubPlugin: async (e)=>{
            throw new Error("Direct GitHub plugin installs are no longer supported. Use a marketplace instead.");
        },
        removeGitHubPlugin: async (e)=>{
            await a.removePlugin(e), await l();
        },
        removeLocalPlugin: async (e)=>{
            await (0, L._fm)(e, {
                userHomeDir: H.homedir(),
                log: c
            }), await l();
        },
        saveLocalPluginVariables: async (e, t)=>{
            if ((i = e).includes("/") || i.includes("\\") || ".." === i || "." === i) throw new Error(`Invalid local plugin variables key: ${e}`);
            var i;
            await g.store(`${h}${e}`, JSON.stringify(t)), p();
        },
        discoverMarketplacePlugins: async (e, t, i)=>u.discoverMarketplacePlugins(e, t, i),
        parseGitHubRepoForPluginsLocally: async (e, t)=>{
            try {
                const i = (0, L.z4A)(e) ? (0, B.fileURLToPath)(e.trim()) : void 0, r = (0, q.join)(H.homedir(), ".cursor", "plugins", "marketplaces"), n = void 0 !== i ? await (0, L.e1t)({
                    localPath: i,
                    pluginMetricsLogger: c
                }) : await (0, L.U27)({
                    gitUrl: e,
                    gitRef: t,
                    marketplaceCacheRoot: r,
                    allowNonGitHubHosts: !0,
                    pluginMetricsLogger: c,
                    sparsePluginClones: f
                }), o = (e)=>new z.ngG({
                        name: e.name,
                        description: e.description
                    }), s = (e)=>new z.Vdt({
                        name: e.name,
                        description: e.description
                    }), a = (e)=>new z.$el({
                        name: e.name,
                        description: e.description
                    }), l = (e)=>new z.Q63({
                        name: e.name,
                        description: e.description
                    }), u = (e)=>new z.UCU({
                        name: e.name,
                        description: e.description
                    }), d = (e)=>new z.tlS({
                        name: e.name,
                        description: e.description
                    });
                return (0, J.toPlainMessage)(new z.nXe({
                    marketplaceName: n.marketplaceName,
                    marketplaceDescription: n.marketplaceDescription,
                    defaultBranch: n.defaultBranch,
                    repositoryUrl: n.repositoryUrl,
                    commitSha: n.commitSha,
                    plugins: n.plugins.map((e)=>new z.HvA({
                            name: e.name,
                            displayName: e.displayName,
                            description: e.description,
                            gitPath: e.gitPath,
                            logoUrl: e.logoUrl,
                            variables: e.variables ? J.Struct.fromJson(e.variables) : void 0,
                            sourceGitUrl: e.externalUrl,
                            sourceGitRef: e.externalRef,
                            skills: e.skills.map(o),
                            subagents: e.subagents.map(s),
                            hooks: e.hooks.map(a),
                            rules: e.rules.map(l),
                            mcpServers: e.mcpServers.map(u),
                            commands: e.commands.map(d),
                            parseError: e.parseError
                        }))
                }));
            } catch (e) {
                throw c.captureException(e, {
                    error_type: "parse_github_repo_for_plugins_locally"
                }), e;
            }
        },
        discoverClaudeMarketplacePayloads: async (e)=>{
            const t = {
                log: (e, t)=>{
                    c.log("info", `[cc-marketplace-import] ${e}`, t ?? {});
                }
            };
            try {
                const { payloads: i } = await (0, L.kxb)({
                    existingUserMarketplaceNames: e,
                    logger: t
                });
                return i.map((e)=>({
                        gitUrl: e.gitUrl,
                        gitRef: e.gitRef,
                        marketplaceName: e.marketplaceName,
                        commitSha: e.commitSha,
                        plugins: e.plugins.map((e)=>({
                                name: e.name,
                                displayName: e.displayName,
                                description: e.description,
                                gitPath: e.gitPath,
                                gitUrl: e.gitUrl,
                                gitRef: e.gitRef,
                                skills: e.skills,
                                subagents: e.subagents,
                                hooks: e.hooks,
                                rules: e.rules,
                                mcpServers: e.mcpServers,
                                commands: e.commands,
                                logoUrl: e.logoUrl,
                                variables: e.variables
                            }))
                    }));
            } catch (e) {
                throw c.captureException(e, {
                    error_type: "discover_claude_marketplace_payloads"
                }), e;
            }
        },
        installProjectPlugin: async (e)=>{
            const t = d[0];
            if (!t) throw new Error("No workspace path available for project plugin installation");
            "third-party" === e.type ? await (0, L.YUn)(t, e.key, e.gitInfo) : await (0, L.QOY)(t, e.key), await l();
        },
        removeProjectPlugin: async (e)=>{
            if (0 === d.length) throw new Error("No workspace path available for project plugin removal");
            await (0, L.Lsv)(d, e), await l();
        },
        getEffectiveInstalledPlugins: b,
        getPluginsSnapshot: async (e)=>(async function(e) {
                const [t, i, r, n, o] = await Promise.all([
                    e.getEffectiveInstalledPlugins(),
                    e.getImportedExternalPlugins(),
                    e.getCursorThirdPartyPlugins(),
                    e.getInstalledGitHubPlugins(),
                    e.readLoadedPlugins()
                ]);
                return {
                    effectiveInstalledPlugins: t,
                    importedExternalPlugins: i,
                    installedCursorThirdPartyPlugins: r,
                    installedGitHubPlugins: n,
                    ...o
                };
            })({
                getEffectiveInstalledPlugins: ()=>b(e),
                getImportedExternalPlugins: S,
                getCursorThirdPartyPlugins: P,
                getInstalledGitHubPlugins: ()=>a.listPlugins(),
                readLoadedPlugins: async ()=>{
                    const { plugins: e, loadFailures: i, pluginSetIncomplete: r } = await ae(t);
                    return {
                        loadedPluginsSummary: await w(e),
                        loadFailures: i,
                        pluginSetIncomplete: r
                    };
                }
            }),
        getPluginComponentFiles: async ()=>{
            const e = await t.getAllEnabledPlugins();
            let i = [];
            try {
                i = await b(!1);
            } catch (e) {
                K(e) || c.log("error", "Failed to resolve installed plugins for component metadata", {
                    error: String(e)
                });
            }
            const r = new Map;
            for (const e of i){
                const t = e.plugin;
                if (void 0 === t.name) continue;
                r.set(t.name, t);
                const i = t.marketplace?.name;
                void 0 !== i && "cursor-public" !== i && r.set(`${t.name}@${i}`, t);
            }
            return Promise.all(e.map(async (e)=>{
                const t = e.identifier.sourceInfo.name, i = e.identifier.source, n = e.identifier.sourceInfo;
                let o = t;
                if ("claude-plugin" === e.identifier.source) {
                    const i = e.identifier.sourceInfo.marketplace;
                    i && "cursor-public" !== i && (o = `${t}@${i}`);
                } else "cursor-first-party" !== e.identifier.source && "cursor-third-party" !== e.identifier.source || !("marketplace" in n) || "string" != typeof n.marketplace || "cursor-public" === n.marketplace || (o = `${t}@${n.marketplace}`);
                const s = r.get(o) ?? r.get(t), a = [], l = (e)=>{
                    const t = (0, q.dirname)(e);
                    return "." !== t ? (0, q.basename)(t) : (0, q.basename)(e);
                };
                for (const t of e.skills)a.push({
                    type: "Skills",
                    name: l(t.path),
                    filePath: (0, q.join)(e.installPath, t.path),
                    description: t.description
                });
                for (const t of e.rules)a.push({
                    type: "Rules",
                    name: t.name,
                    filePath: (0, q.join)(e.installPath, t.path),
                    description: t.description
                });
                for (const t of e.agents)a.push({
                    type: "Subagents",
                    name: t.name,
                    filePath: (0, q.join)(e.installPath, t.path),
                    description: t.description
                });
                for (const t of e.commands)a.push({
                    type: "Commands",
                    name: t.name,
                    filePath: (0, q.join)(e.installPath, t.path),
                    description: t.description
                });
                if (e.hooks && "config" in e.hooks && a.push({
                    type: "Hooks",
                    name: "hooks.json",
                    filePath: e.hooks.sourcePath ?? (0, q.join)(e.installPath, "hooks", "hooks.json")
                }), e.mcpConfig?.mcpServers) {
                    const t = (0, q.join)(e.installPath, ".mcp.json");
                    let i = (0, q.join)(e.installPath, "mcp.json");
                    try {
                        await (0, $.access)(t), i = t;
                    } catch  {}
                    for (const t of Object.keys(e.mcpConfig.mcpServers))a.push({
                        type: "MCPs",
                        name: t,
                        filePath: e.mcpConfig.mcpServerSourcePaths?.[t] ?? i
                    });
                }
                return {
                    pluginName: t,
                    pluginId: s?.id?.toString(),
                    marketplaceId: s?.marketplace?.id?.toString(),
                    pluginKey: o,
                    pluginSource: i,
                    publisherName: e.authorName,
                    components: a
                };
            }));
        },
        getPrimitiveAuthorship: async (e)=>m.getPrimitiveAuthorship(e),
        requestRefresh: async ()=>{
            p();
        },
        addExtensionPlugin: async ({ path: e, extensionId: i })=>{
            await t.registerExtensionPlugin({
                path: e,
                extensionId: i
            }), await l();
        },
        removeExtensionPlugin: async ({ path: e, extensionId: i })=>{
            await t.unregisterExtensionPlugin({
                path: e,
                extensionId: i
            }) && await l();
        }
    };
}
const de = 5e3;
async function pe(e, t, i) {
    const r = [];
    let n = 0;
    const o = Array.from({
        length: Math.min(t, e.length)
    }, ()=>(async function() {
            for(; n < e.length;){
                const t = n;
                n += 1;
                const o = e[t];
                void 0 !== o && (r[t] = await i(o));
            }
        })());
    return await Promise.all(o), r;
}
class ge {
    constructor(e){
        this.options = e;
    }
    async getPrimitiveAuthorship(e) {
        return pe(e, 4, async (e)=>{
            const t = function(e) {
                if (void 0 === e.pluginSource) return;
                const t = e.publisherName?.trim();
                return t ? {
                    label: t,
                    kind: "publisher",
                    authorName: t
                } : void 0;
            }(e) ?? await this.resolveGitAuthorship(e);
            return {
                sourceId: e.sourceId,
                authorship: t
            };
        });
    }
    async resolveGitAuthorship(e) {
        if (void 0 === e.pluginSource) try {
            const t = await this.options.gitExecutorPromise, i = (0, r.q6)(), n = (0, q.dirname)(e.filePath), o = await (0, c.ky5)(i, t, n);
            if (null === o) return;
            const s = (0, q.relative)(o, e.filePath);
            if (".." === s || s.startsWith(`..${q.sep}`)) return;
            return function(e) {
                const t = [
                    ...e.split("\n")
                ].reverse().find((e)=>e.trim().length > 0);
                if (void 0 === t) return;
                const [i, r, n, o] = t.trim().split("\0");
                return i && r ? {
                    label: r,
                    kind: "git",
                    authorName: r,
                    ...void 0 !== n && n.length > 0 && {
                        authorEmail: n
                    },
                    commitSha: i,
                    ...void 0 !== o && o.length > 0 && {
                        committedAt: o
                    }
                } : void 0;
            }((await t.exec(i, o, [
                "log",
                "--follow",
                "--diff-filter=AR",
                "--format=%H%x00%an%x00%ae%x00%aI",
                "--",
                s
            ], {
                timeout: 3e4,
                caller: "primitiveAuthorship"
            })).stdout);
        } catch (e) {
            return void this.options.logDebug?.(`[primitive-authorship] git authorship failed: ${String(e)}`);
        }
    }
}
async function me(e) {
    try {
        await e.reload(), e.notifyPluginsChanged();
    } catch (t) {
        throw e.onFailure?.(t), t;
    }
}
async function fe(e) {
    try {
        await me(e);
    } catch  {}
}
function he(e, t) {
    let i;
    return {
        schedule: ()=>{
            i && clearTimeout(i), i = setTimeout(async ()=>{
                i = void 0, await t();
            }, e);
        },
        dispose: ()=>{
            i && (clearTimeout(i), i = void 0);
        }
    };
}
async function ye() {
    delete process.env.CURSOR_PLUGIN_ROOT, delete process.env.CLAUDE_PLUGIN_ROOT;
}
async function we(e) {
    const { workspacePaths: t, getThirdPartyExtensibilityEnabled: i, getAllowUserLocalPluginImports: o, deactivateTasks: s, context: a, gitExecutorPromise: l } = e, u = new L.KYw(H.homedir()), d = await n.cursor.getAuthId() ?? "anonymous", p = await n.cursor.checkFeatureGate("enable_marketplace_plugin_logging"), g = n.window.createOutputChannel("Cursor Plugins", {
        log: !0
    }), m = {
        log: (e, t, i)=>{
            const o = `[pluginsSubsystem] ${t}`, s = (new Date).toISOString();
            if (g?.appendLine(`[${s}] [${e}] ${t}`), p) try {
                switch(e){
                    case "debug":
                        n.cursor.logStructuredDebug("agent_exec", o, i, {
                            disableConsoleFallback: !0
                        });
                        break;
                    case "info":
                        n.cursor.logStructuredInfo("agent_exec", o, i, {
                            disableConsoleFallback: !0
                        });
                        break;
                    case "warn":
                        n.cursor.logStructuredWarn("agent_exec", o, i, {
                            disableConsoleFallback: !0
                        });
                        break;
                    case "error":
                        n.cursor.logStructuredError("agent_exec", o, void 0, i, {
                            disableConsoleFallback: !0
                        });
                        break;
                    default:
                        throw new Error(`Unhandled plugin metrics log level: ${e}`);
                }
            } catch (e) {
                G.error((0, r.q6)(), "Failed to log plugin metrics", {
                    error: String(e)
                });
            }
        },
        increment: (e, t, i)=>{
            p && n.cursor.metricsIncrement({
                stat: e,
                value: t,
                tags: i
            });
        },
        distribution: (e, t, i)=>{
            p && n.cursor.metricsDistribution({
                stat: e,
                value: t,
                tags: i
            });
        },
        captureException: (e, t)=>{
            p && n.cursor.captureException(e, t);
        }
    }, f = (0, q.join)(H.homedir(), ".cursor", "plugins", "marketplaces"), h = await n.cursor.checkFeatureGate("team_marketplace_mcps"), y = await n.cursor.checkFeatureGate("enable_sparse_plugin_clones"), w = await n.cursor.checkFeatureGate("marketplace_origin_distribution");
    let v;
    const k = w ? ()=>(v ??= (async ()=>{
            const e = Date.now();
            await function(e) {
                if (void 0 !== e.getToken()) return Promise.resolve();
                const t = e.timeoutMs ?? de;
                return new Promise((i)=>{
                    let r = !1;
                    const n = ()=>{
                        r || (r = !0, clearTimeout(o), s.dispose(), i());
                    }, o = setTimeout(n, t), s = e.onDidChangeToken((e)=>{
                        void 0 !== e && n();
                    });
                    void 0 !== e.getToken() && n();
                });
            }({
                getToken: ()=>n.cursor.getCursorAuthToken(),
                onDidChangeToken: (e)=>n.cursor.onDidChangeCursorAuthToken(e)
            }), (async (e)=>{
                try {
                    if (m.distribution("marketplace.origin_distribution.auth_wait", Math.min(e, de)), void 0 !== n.cursor.getCursorAuthToken()) return;
                    const t = await n.cursor.getAuthId();
                    m.increment("marketplace.origin_distribution.auth_wait.error", 1, {
                        reason: void 0 === t ? "logged_out" : "exthost_lag"
                    });
                } catch  {}
            })(Date.now() - e);
        })(), v) : void 0, S = (0, L.NwZ)(async ()=>{
        m.increment("backend_marketplace_client.get_effective_user_plugins.count", 1);
        try {
            return await n.cursor.getEffectiveUserPlugins(!0) ?? {
                plugins: []
            };
        } catch (e) {
            throw K(e) || (m.log("error", "Failed to get effective user plugins", {
                error: String(e)
            }), m.increment("backend_marketplace_client.get_effective_user_plugins.error", 1)), e;
        }
    }, {
        marketplaceCacheRoot: f,
        pluginLogger: m,
        extraGitConfig: ()=>{
            const e = (0, U.w)(n.cursor.getCursorCreds()?.originBackendUrl);
            return (0, L.kdU)(n.cursor.getCursorAuthToken(), void 0 !== e ? [
                e
            ] : []);
        },
        awaitAuthReady: k,
        listOptions: {
            enableInlinePlugins: h
        },
        sparsePluginClones: y
    }), P = [
        {
            client: S,
            userId: d,
            cacheManager: new L.WCg(H.homedir())
        },
        {
            client: (0, L.NwZ)(async ()=>{
                try {
                    const e = await (0, L.JJ1)(t);
                    if (0 === e.length) return {
                        plugins: []
                    };
                    const i = e.filter((e)=>e.entry.gitUrl), o = e.filter((e)=>!e.entry.gitUrl), s = i.filter(({ key: e, entry: t })=>{
                        const i = t.gitUrl;
                        return !(i && !(0, L.QY1)(i)) || (G.warn((0, r.q6)(), "Ignoring project plugin with invalid gitUrl in .cursor/settings.json", {
                            key: e,
                            gitUrl: i
                        }), !1);
                    }).map(({ key: e, entry: t })=>{
                        const i = (0, L.kXx)(e);
                        return {
                            plugin: {
                                name: i.name,
                                gitUrl: t.gitUrl,
                                gitRef: t.gitRef,
                                gitPath: t.gitPath,
                                marketplace: {
                                    name: i.marketplaceName,
                                    gitUrl: t.gitUrl,
                                    gitRef: t.gitRef
                                }
                            },
                            isEnabled: !0
                        };
                    }), a = o.length > 0 ? (await n.cursor.resolveProjectPlugins(o.map((e)=>(0, L.kXx)(e.key)).map((e)=>({
                            name: e.name,
                            marketplaceName: e.marketplaceName
                        }))))?.plugins?.map((e)=>({
                            plugin: e,
                            isEnabled: !0
                        })) ?? [] : [];
                    return {
                        plugins: [
                            ...s,
                            ...a
                        ]
                    };
                } catch (e) {
                    throw G.error((0, r.q6)(), "Failed to resolve project plugins", {
                        error: String(e)
                    }), e;
                }
            }, {
                marketplaceCacheRoot: f,
                pluginLogger: m,
                extraGitConfig: ()=>{
                    const e = (0, U.w)(n.cursor.getCursorCreds()?.originBackendUrl);
                    return (0, L.kdU)(n.cursor.getCursorAuthToken(), void 0 !== e ? [
                        e
                    ] : []);
                },
                awaitAuthReady: k,
                listOptions: {
                    enableInlinePlugins: h
                },
                sparsePluginClones: y
            }),
            userId: d,
            cacheManager: new L.WCg(H.homedir()),
            pruneOldVersions: !0
        }
    ], b = function(e) {
        const t = n.cursor.getCursorAgentExecSecretStorage();
        return {
            get: async (i)=>await t.get(i) ?? await e.secrets.get(i),
            store: (e, i)=>t.store(e, i),
            delete: (e)=>t.delete(e),
            keys: ()=>t.keys(),
            onDidChange: t.onDidChange
        };
    }(a), D = new c.Npg(t, H.homedir(), ()=>({
            importThirdPartyPlugins: i(),
            loadUserLocalPlugins: o(),
            loadCursorFirstParty: !0
        }), P, m, async (e)=>{
        try {
            const t = await b.get(`localPluginVariables:${e}`);
            if (t) return JSON.parse(t);
        } catch  {}
    }), C = new c.gRo(D), I = new c.aAA(D), T = new c.O0K(D), E = {
        reload: async ()=>{
            await D.reload();
        },
        notifyPluginsChanged: ()=>{
            n.cursor.notifyPluginsChanged();
        },
        onFailure: (e)=>{
            G.warn((0, r.q6)(), "Failed to refresh plugins", {
                error: String(e)
            });
        }
    }, x = function(e) {
        let t;
        const i = (e, i)=>{
            void 0 !== i && t === e && (t = i);
        };
        return {
            initializeLastSeenUserTeamPluginSignature: async ()=>{
                const r = t, n = await e.getUserTeamPluginSignatureFromBackend();
                i(r, n);
            },
            refreshPlugins: async ()=>{
                const r = t, n = await e.getUserTeamPluginSignatureFromBackend();
                await e.refreshPluginsStrict(), i(r, n);
            },
            refreshPluginsOnWindowFocus: async ()=>{
                const r = await e.getUserTeamPluginSignatureFromBackend();
                if (void 0 === r) return void await e.refreshPluginsBestEffort();
                const n = t;
                n !== r && (await e.refreshPluginsStrict(), i(n, r));
            },
            getLastSeenUserTeamPluginSignature: ()=>t
        };
    }({
        getUserTeamPluginSignatureFromBackend: async ()=>{
            try {
                return function(e, t = {}) {
                    const { enableInlinePlugins: i = !1 } = t, r = [], n = e?.marketplaces ?? [];
                    for (const t of e?.plugins ?? []){
                        if (!t.isEnabled) continue;
                        const e = t.plugin;
                        if (e?.name) if (e.gitUrl) r.push(JSON.stringify([
                            t.isTeamRequired ? "team" : "user",
                            e.name,
                            e.gitUrl,
                            (0, L.gFi)(t, n),
                            e.gitPath ?? "",
                            e.releaseRepo ?? "",
                            e.releaseAsset ?? "",
                            e.releaseTag ?? ""
                        ]));
                        else {
                            if (!i) continue;
                            r.push(JSON.stringify([
                                t.isTeamRequired ? "team" : "user",
                                e.name,
                                `inline:${e.id ?? ""}`,
                                String(e.updatedAt ?? "")
                            ]));
                        }
                    }
                    return r.sort(), JSON.stringify(r);
                }(await n.cursor.getEffectiveUserPlugins(!0) ?? {
                    plugins: []
                }, {
                    enableInlinePlugins: h
                });
            } catch (e) {
                return void (K(e) || G.warn((0, r.q6)(), "Failed to fetch effective user/team plugins for focus refresh", {
                    error: String(e)
                }));
            }
        },
        refreshPluginsStrict: async ()=>{
            await me(E);
        },
        refreshPluginsBestEffort: async ()=>{
            await fe(E);
        }
    });
    x.initializeLastSeenUserTeamPluginSignature();
    const R = async ()=>{
        await x.refreshPlugins();
    }, N = function(e, t) {
        let i, r = 0, n = !1, o = !1, s = !1;
        const a = async ()=>{
            if (!s && !n) {
                n = !0, r = Date.now();
                try {
                    await t();
                } finally{
                    n = !1, o && !s && (o = !1, l());
                }
            }
        }, l = ()=>{
            if (s) return;
            const t = Date.now(), l = e - (t - r);
            if (l <= 0) return n ? void (o = !0) : void a();
            i || (i = setTimeout(()=>{
                i = void 0, s || (n ? o = !0 : a());
            }, l));
        };
        return {
            schedule: l,
            dispose: ()=>{
                s = !0, o = !1, i && (clearTimeout(i), i = void 0);
            }
        };
    }(5e3, async ()=>{
        try {
            await x.refreshPluginsOnWindowFocus();
        } catch  {}
    }), j = he(2e3, async ()=>{
        try {
            await R();
        } catch  {}
    });
    let _, F = !1;
    const A = ()=>{
        _ ? F = !0 : _ = (async ()=>{
            do {
                F = !1, await R();
            }while (F)
        })().catch((e)=>{
            G.error((0, r.q6)(), "Failed to refresh plugins after project settings change", {
                error: String(e)
            });
        }).finally(()=>{
            _ = void 0;
        });
    }, M = n.workspace.createFileSystemWatcher("**/.cursor/settings.json");
    M.onDidCreate(()=>{
        A();
    }), M.onDidChange(()=>{
        A();
    }), M.onDidDelete(()=>{
        A();
    }), s.push(()=>{
        M.dispose();
    });
    const V = (0, q.join)(H.homedir(), ".cursor", "plugins", L.DDg), W = he(1e3, async ()=>{
        o() && await fe(E);
    });
    (async ()=>{
        if (o()) try {
            await (0, $.mkdir)(V, {
                recursive: !0
            });
            const e = (0, O.watch)(V, {
                recursive: !0
            }, ()=>{
                W.schedule();
            });
            s.push(()=>{
                e.close(), W.dispose();
            });
        } catch (e) {
            G.warn((0, r.q6)(), "Failed to watch user-local plugins directory", {
                error: String(e)
            });
        }
    })();
    const z = new Map, J = he(1e3, async ()=>{
        await fe(E);
    }), B = ue({
        pluginsService: D,
        pluginMcpService: C,
        pluginHooksService: I,
        pluginCommandsService: T,
        githubPluginsStore: u,
        refreshPlugins: R,
        pluginMetricsLogger: m,
        backendMarketplaceClient: S,
        workspacePaths: t,
        requestRefreshSchedule: ()=>j.schedule(),
        secretStorage: b,
        primitiveAuthorshipResolver: new ge({
            gitExecutorPromise: l,
            logDebug: (e)=>G.debug((0, r.q6)(), e)
        }),
        sparsePluginClones: y
    }), X = n.cursor.registerPluginsProvider({
        ...B,
        addExtensionPlugin: async (e)=>{
            let t;
            await B.addExtensionPlugin(e);
            try {
                t = await (0, $.realpath)(e.path);
            } catch  {
                t = e.path;
            }
            if (!z.has(t)) try {
                const e = (0, O.watch)(t, {
                    recursive: !0
                }, ()=>{
                    J.schedule();
                });
                z.set(t, e);
            } catch (e) {
                G.warn((0, r.q6)(), "Failed to watch extension plugin directory", {
                    path: t,
                    error: String(e)
                });
            }
        },
        removeExtensionPlugin: async (e)=>{
            let t;
            await B.removeExtensionPlugin(e);
            try {
                t = await (0, $.realpath)(e.path);
            } catch  {
                t = e.path;
            }
            const i = z.get(t);
            i && (i.close(), z.delete(t));
        }
    });
    a.subscriptions.push(X), s.push(()=>{
        for (const e of z.values())e.close();
        z.clear(), J.dispose();
    });
    const Z = n.window.onDidChangeWindowState((e)=>{
        e.focused && N.schedule();
    }), Y = n.cursor.onDidChangeAllowUserLocalPluginImports(()=>{
        fe(E);
    });
    return a.subscriptions.push({
        dispose: ()=>{
            Z.dispose(), Y.dispose(), N.dispose(), j.dispose();
        }
    }), {
        pluginsService: D,
        refreshPluginHooks: ye
    };
}
async function ve(e) {
    const t = n.Uri.file(e).fsPath, i = t.endsWith(y.sep) ? t : `${t}${y.sep}`, r = (await Promise.all(n.workspace.textDocuments.filter((e)=>e.isDirty && "file" === e.uri.scheme && e.uri.fsPath.startsWith(i)).map(async (e)=>({
            path: e.uri.fsPath,
            saved: await e.save()
        })))).filter(({ saved: e })=>!e).map(({ path: e })=>e);
    if (r.length > 0) throw new Error(`Unsaved edits could not be written to disk (${r.join(", ")}).`);
}
const ke = 5, Se = 500;
function Pe(e) {
    return "cursor-first-party" === e.identifier.source || "cursor-third-party" === e.identifier.source ? e.identifier.sourceInfo : void 0;
}
async function be(e, t) {
    return (await e.getAllEnabledPlugins()).find((e)=>Pe(e)?.pluginDbId === t);
}
function De(e) {
    return new Promise((t)=>setTimeout(t, e));
}
async function Ce(e, t, i, r) {
    for(let n = 0; n < ke; n++){
        let o;
        try {
            o = await e.reloadPlugin({
                name: t.pluginName,
                pluginDbId: t.pluginId
            });
        } catch (e) {
            return void r(e);
        }
        if (i(o)) return o;
        n < ke - 1 && await De(Se);
    }
}
function Ie(e, t) {
    return void 0 !== e && void 0 === e.loadError && Pe(e)?.version === t;
}
class Te extends Error {
    constructor(e){
        super(`Refusing to remove "${e}": it is not a skill folder under the user's .cursor/skills`), this.skillDir = e, this.name = "PublishSkillGuardViolationError";
    }
}
function Ee(e) {
    return e.replace(/\\/g, "/");
}
function xe(e) {
    const t = (0, y.resolve)((0, y.join)(e.userHomeDirectory, ".cursor", "skills")), i = (0, y.relative)(t, (0, y.resolve)(e.skillDir));
    if ("" !== i && !(0, y.isAbsolute)(i) && ".." !== i.split(y.sep)[0]) return Ee(i);
}
async function Re(e, t) {
    const { pluginsService: i } = e, n = (0, y.dirname)(t.skillFilePath), o = xe({
        skillDir: n,
        userHomeDirectory: e.userHomeDirectory
    });
    if (void 0 === o) throw new Te(n);
    const s = await Ce(i, {
        pluginName: t.pluginName,
        pluginId: t.pluginId
    }, (e)=>(function(e, t) {
            if (void 0 === e || !Ie(e, t.commitSha)) return !1;
            const i = `skills/${t.skillPath}/SKILL.md`;
            return e.skills.some((e)=>{
                const t = Ee(e.path);
                return t === i || t.endsWith(`/${i}`);
            });
        })(e, {
            commitSha: t.commitSha,
            skillPath: o
        }), (e)=>G.warn((0, r.q6)(), "Publish skill: plugin reload failed", {
            error: String(e)
        }));
    if (void 0 === s) return {
        confirmed: !1,
        deleted: !1
    };
    if (!await async function(e) {
        try {
            return await (0, f.stat)(e), !0;
        } catch  {
            return !1;
        }
    }(t.skillFilePath)) return G.warn((0, r.q6)(), "Publish skill: local skill vanished before cleanup", {
        skillDir: n
    }), {
        confirmed: !0,
        deleted: !1
    };
    try {
        return await e.deleteDirectoryToTrash(n), {
            confirmed: !0,
            deleted: !0,
            filesMove: {
                previousDir: n,
                nextDir: (0, y.join)(s.installPath, "skills", o)
            }
        };
    } catch (e) {
        return G.warn((0, r.q6)(), "Publish skill: confirmed plugin loaded but failed to trash local skill", {
            skillDir: n,
            error: String(e)
        }), {
            confirmed: !0,
            deleted: !1
        };
    }
}
const Ne = "cursor.publishSkill.packSkillPlugin", je = "cursor.publishSkill.reloadConfirmAndDeleteLocalSkill";
async function _e(e) {
    await n.workspace.fs.delete(n.Uri.file(e), {
        recursive: !0,
        useTrash: !0
    });
}
function Fe(e, t) {
    e.subscriptions.push(n.commands.registerCommand(Ne, (e)=>{
        if (void 0 === e || "string" != typeof e.skillFilePath || "" === e.skillFilePath.trim() || "string" != typeof e.pluginName || "" === e.pluginName.trim()) throw new Error("packSkillPlugin requires a non-empty skillFilePath and pluginName");
        return async function(e) {
            const t = (0, y.dirname)(e.skillFilePath), i = xe({
                skillDir: t,
                userHomeDirectory: (0, h.homedir)()
            });
            if (void 0 === i) throw new Error(`Only skills under ~/.cursor/skills can be published; "${t}" is not one.`);
            await ve(t);
            const r = await (0, f.mkdtemp)((0, y.join)((0, h.tmpdir)(), "publish-skill-"));
            try {
                const n = await (0, L.ALO)({
                    skills: [
                        {
                            dir: t,
                            relativePath: i
                        }
                    ],
                    targetDir: r,
                    pluginName: e.pluginName
                }), o = await (0, f.readFile)((0, y.join)(n, "plugin.json"), "utf-8"), s = JSON.parse(o), a = "string" == typeof s.name && "" !== s.name.trim() ? s.name : e.pluginName;
                return {
                    tarGzBase64: (await (0, L.Jwk)(n)).toString("base64"),
                    pluginName: a
                };
            } finally{
                await (0, f.rm)(r, {
                    recursive: !0,
                    force: !0
                }).catch(()=>{});
            }
        }(e);
    }), n.commands.registerCommand(je, async (e)=>{
        if (void 0 === e || "string" != typeof e.skillFilePath || "" === e.skillFilePath.trim() || "string" != typeof e.pluginName || "" === e.pluginName.trim() || "string" != typeof e.pluginId || "" === e.pluginId.trim() || "string" != typeof e.commitSha || "" === e.commitSha.trim()) throw new Error("reloadConfirmAndDeleteLocalSkill requires skillFilePath, pluginName, pluginId, and commitSha");
        let i;
        try {
            i = await t;
        } catch  {
            return {
                confirmed: !1,
                deleted: !1
            };
        }
        try {
            return await Re(i, e);
        } catch (e) {
            if (e instanceof Te) return {
                confirmed: !1,
                deleted: !1,
                guardViolation: !0
            };
            throw e;
        }
    }));
}
async function Ae(e, t) {
    const i = await be(e.pluginsService, t.pluginId);
    if (void 0 === i) throw new Error("The published plugin is not installed locally, so its edits cannot be synced.");
    const r = Pe(i)?.name;
    if (void 0 === r || "" === r) throw new Error("The installed plugin has no marketplace name to sync to.");
    if ((0, L.UDB)(r) !== r) throw new Error(`Cannot sync "${r}": its published name is not in the form a plugin manifest can carry.`);
    const n = function(e) {
        const t = (0, y.join)(e.installPath, "skills"), i = new Map;
        for (const r of e.skills){
            const n = (0, y.join)(e.installPath, (0, y.dirname)(r.path)), o = (0, y.relative)(t, n);
            "" === o || o.startsWith("..") || (0, y.join)(t, o) !== n || i.set(n, {
                dir: n,
                relativePath: o
            });
        }
        return [
            ...i.values()
        ];
    }(i);
    if (0 === n.length) throw new Error("The published plugin has no skill folder to sync.");
    await e.saveDirtyDocumentsUnder(i.installPath);
    const o = await (0, f.mkdtemp)((0, y.join)((0, h.tmpdir)(), "resync-skill-"));
    try {
        const e = await (0, L.ALO)({
            skills: n,
            targetDir: o,
            pluginName: r,
            displayName: t.displayName
        });
        return {
            tarGzBase64: (await (0, L.Jwk)(e)).toString("base64"),
            pluginName: r,
            installPath: i.installPath
        };
    } finally{
        await (0, f.rm)(o, {
            recursive: !0,
            force: !0
        }).catch(()=>{});
    }
}
const Me = "cursor.resyncSkill.packInstalledSkillPlugin", Le = "cursor.resyncSkill.reloadAndConfirmResync";
function Ue(e, t) {
    e.subscriptions.push(n.commands.registerCommand(Me, async (e)=>{
        const i = function(e) {
            const t = e;
            if (void 0 === t || "string" != typeof t.pluginId || "" === t.pluginId.trim() || "string" != typeof t.displayName || "" === t.displayName.trim()) throw new Error("packInstalledSkillPlugin requires a non-empty pluginId and displayName");
            return {
                pluginId: t.pluginId,
                displayName: t.displayName
            };
        }(e);
        return Ae(await t, i);
    }), n.commands.registerCommand(Le, async (e)=>{
        const i = function(e) {
            const t = e;
            if (void 0 === t || "string" != typeof t.pluginName || "" === t.pluginName.trim() || "string" != typeof t.pluginId || "" === t.pluginId.trim() || "string" != typeof t.commitSha || "" === t.commitSha.trim()) throw new Error("reloadAndConfirmResync requires pluginName, pluginId, and commitSha");
            return {
                pluginName: t.pluginName,
                pluginId: t.pluginId,
                commitSha: t.commitSha
            };
        }(e);
        let n;
        try {
            n = await t;
        } catch  {
            return {
                confirmed: !1
            };
        }
        return async function(e, t) {
            const i = await Ce(e.pluginsService, {
                pluginName: t.pluginName,
                pluginId: t.pluginId
            }, (e)=>Ie(e, t.commitSha), (e)=>G.warn((0, r.q6)(), "Resync skill: plugin reload failed", {
                    pluginId: t.pluginId,
                    error: String(e)
                }));
            return void 0 === i ? {
                confirmed: !1
            } : {
                confirmed: !0,
                installPath: i.installPath
            };
        }(n, i);
    }));
}
var Oe = require(7334), $e = require(65716);
class He extends Error {
    constructor(e, t){
        super(`Refusing to move "${e}": it is not a skill folder under "${t}"`), this.skillDir = e, this.expectedRoot = t, this.name = "StoreSkillGuardViolationError";
    }
}
function qe(e) {
    const t = e?.code;
    return "string" == typeof t ? t : e instanceof Error ? e.name : "unknown";
}
function Ge(e, t) {
    if (!(0, y.isAbsolute)(t) || !(0, y.isAbsolute)(e)) return;
    const i = (0, y.relative)((0, y.resolve)(t), (0, y.resolve)(e));
    return "" === i || (0, y.isAbsolute)(i) || ".." === i.split(y.sep)[0] ? void 0 : i.replace(/\\/g, "/");
}
function Ve(e) {
    return (0, y.join)(e, ".cursor", "skills");
}
async function We(e) {
    try {
        return await (0, f.stat)(e), !0;
    } catch  {
        return !1;
    }
}
async function Ke(e) {
    const t = [];
    let i;
    try {
        i = await (0, f.readdir)(e, {
            withFileTypes: !0
        });
    } catch  {
        return t;
    }
    for (const r of i){
        const i = (0, y.join)(e, r.name);
        r.isDirectory() ? t.push(...await Ke(i)) : r.isFile() && t.push(i);
    }
    return t;
}
async function ze(e) {
    let t = 0;
    for (const i of (await Ke(e)))try {
        t = Math.max(t, (await (0, f.stat)(i)).mtimeMs);
    } catch  {}
    return t;
}
function Je(e) {
    return {
        confirmed: !1,
        deleted: !1,
        reason: e
    };
}
async function Be(e, t, i) {
    if (!await We(i.sourceSkillFilePath)) return {
        confirmed: !1,
        reason: t.sourceMissingReason
    };
    await e.saveDirtyDocumentsUnder(t.sourceDir);
    const r = void 0 === i.clearExistingDestination ? void 0 : {
        clear: i.clearExistingDestination,
        stagingDir: (n = t.destinationDir, (0, y.join)((0, y.dirname)(n), `.${(0, y.basename)(n)}.copy-${(0, ee.randomUUID)().slice(0, 8)}`))
    };
    var n;
    const o = void 0 !== r;
    if (void 0 === r && await async function(e) {
        try {
            return await (0, f.lstat)(e), !0;
        } catch  {
            return !1;
        }
    }(t.destinationDir)) return {
        confirmed: !1,
        reason: "destination-exists"
    };
    const s = r?.stagingDir ?? t.destinationDir;
    try {
        await (0, f.mkdir)((0, y.dirname)(s), {
            recursive: !0
        }), await (0, f.cp)(t.sourceDir, s, {
            recursive: !0,
            dereference: !0,
            force: !1,
            errorOnExist: !0
        });
    } catch (i) {
        return function(e) {
            const t = e?.code;
            return "ERR_FS_CP_EEXIST" === t || "ERR_FS_CP_DIR_TO_NON_DIR" === t;
        }(i) ? {
            confirmed: !1,
            reason: "destination-exists"
        } : (e.logWarning(`${t.label}: copy failed`, {
            code: qe(i)
        }), await Qe({
            deps: e,
            copyTarget: s,
            label: t.label
        }), {
            confirmed: !1,
            reason: "copy-failed"
        });
    }
    if (!await We((0, y.join)(s, "SKILL.md"))) return await Qe({
        deps: e,
        copyTarget: s,
        label: t.label
    }), {
        confirmed: !1,
        reason: "destination-missing"
    };
    if (void 0 !== r) {
        const i = await r.clear();
        if (void 0 !== i) return await Qe({
            deps: e,
            copyTarget: r.stagingDir,
            label: t.label
        }), {
            confirmed: !1,
            reason: i
        };
        try {
            await (0, f.rename)(r.stagingDir, t.destinationDir);
        } catch (i) {
            return e.logWarning(`${t.label}: could not move the staged copy in`, {
                code: qe(i)
            }), {
                confirmed: !1,
                reason: "copy-failed"
            };
        }
    }
    const a = await Ke(t.destinationDir);
    if (0 === a.length) return await Qe({
        deps: e,
        copyTarget: t.destinationDir,
        label: t.label
    }), {
        confirmed: !1,
        reason: "destination-missing"
    };
    let l;
    try {
        l = await t.confirmDurable(a);
    } catch (i) {
        e.logWarning(`${t.label}: durability check failed`, {
            code: qe(i)
        }), l = "not-synced";
    }
    if (void 0 !== l) return e.logWarning(`${t.label}: destination not durable, keeping source`, {
        code: l
    }), o || await Qe({
        deps: e,
        copyTarget: t.destinationDir,
        label: t.label
    }), {
        confirmed: !1,
        reason: l
    };
    for (const i of a)if (!await We(i)) return e.logWarning(`${t.label}: destination vanished during the round`, {
        code: "destination-missing"
    }), {
        confirmed: !1,
        reason: "destination-missing"
    };
    return {
        confirmed: !0,
        copiedFiles: a
    };
}
async function Xe(e, t, i) {
    if (!await We(i)) return {
        confirmed: !0,
        deleted: !1,
        reason: t.sourceMissingReason
    };
    try {
        await e.deleteDirectoryToTrash(t.sourceDir);
    } catch (i) {
        return e.logWarning(`${t.label}: confirmed but failed to trash the source`, {
            code: qe(i)
        }), {
            confirmed: !0,
            deleted: !1,
            reason: "delete-failed"
        };
    }
    return {
        confirmed: !0,
        deleted: !0,
        filesMove: {
            previousDir: t.sourceDir,
            nextDir: t.destinationDir
        }
    };
}
async function Ze(e, t, i) {
    if (!await We(i.skillFilePath)) return Je(t.sourceMissingReason);
    const r = await We(t.destinationDir);
    if (r && !0 !== i.overwriteAlreadyApproved) {
        const i = await async function(e) {
            const [t, i] = await Promise.all([
                ze(e.destinationDir),
                ze(e.sourceDir)
            ]);
            return {
                relativePath: e.relativePath,
                destinationModifiedMs: t,
                sourceModifiedMs: i,
                newerCopy: t === i ? "same" : t > i ? "destination" : "source"
            };
        }({
            relativePath: t.relativePath,
            destinationDir: t.destinationDir,
            sourceDir: t.sourceDir
        });
        if (!await e.confirmStoreOverwrite(i)) return Je("destination-declined");
    }
    const n = await Be(e, t, {
        sourceSkillFilePath: i.skillFilePath,
        clearExistingDestination: r ? Ye({
            deps: e,
            destinationDir: t.destinationDir,
            label: t.label
        }) : void 0
    });
    return n.confirmed ? await Xe(e, t, i.skillFilePath) : Je(n.reason);
}
function Ye(e) {
    return async ()=>{
        try {
            return void await e.deps.deleteDirectoryToTrash(e.destinationDir);
        } catch (t) {
            return e.deps.logWarning(`${e.label}: failed to trash the copy being replaced`, {
                code: qe(t)
            }), "delete-failed";
        }
    };
}
async function Qe(e) {
    const t = await (0, f.lstat)(e.copyTarget).catch(()=>{});
    if (void 0 !== t && t.isDirectory()) try {
        await (0, f.rm)(e.copyTarget, {
            recursive: !0,
            force: !0
        });
    } catch (t) {
        e.deps.logWarning(`${e.label}: failed to clean up a partial copy`, {
            code: qe(t)
        });
    }
}
async function et(e, t) {
    const i = (0, y.dirname)(t.skillFilePath), r = function(e) {
        if ((0, y.isAbsolute)(e.userHomeDirectory)) return Ge(e.skillDir, Ve(e.userHomeDirectory));
    }({
        skillDir: i,
        userHomeDirectory: e.userHomeDirectory
    });
    if (void 0 === r) throw new He(i, Ve(e.userHomeDirectory));
    if (!(0, y.isAbsolute)(e.agentStoreSkillsDir)) throw new He(i, e.agentStoreSkillsDir);
    return await Ze(e, {
        sourceDir: i,
        destinationDir: (0, y.join)(e.agentStoreSkillsDir, ...r.split("/")),
        relativePath: r,
        sourceMissingReason: "source-missing",
        confirmDurable: async (t)=>(function(e) {
                return "synced-path" === e;
            })(await e.requestScopedSync(t)) ? void 0 : "not-synced",
        label: "Move skill to store"
    }, t);
}
async function tt(e, t) {
    const i = (0, y.dirname)(t.skillFilePath), r = function(e) {
        return Ge(e.skillDir, e.agentStoreSkillsDir);
    }({
        skillDir: i,
        agentStoreSkillsDir: e.agentStoreSkillsDir
    });
    if (void 0 === r) throw new He(i, e.agentStoreSkillsDir);
    if (!(0, y.isAbsolute)(e.userHomeDirectory)) throw new He(i, e.userHomeDirectory);
    return await Ze(e, {
        sourceDir: i,
        destinationDir: (0, y.join)(Ve(e.userHomeDirectory), ...r.split("/")),
        relativePath: r,
        sourceMissingReason: "nothing-to-move",
        confirmDurable: async ()=>{},
        label: "Move skill out of store"
    }, t);
}
const it = 4;
async function rt(e) {
    const t = [];
    return await nt(e, e, t), t;
}
async function nt(e, t, i) {
    let r;
    try {
        r = await (0, f.readdir)(t, {
            withFileTypes: !0
        });
    } catch (e) {
        if ("ENOENT" === qe(e)) return;
        throw e;
    }
    r.sort((e, t)=>e.name < t.name ? -1 : e.name > t.name ? 1 : 0);
    for (const n of r){
        if (!n.isDirectory() || n.name.startsWith(".")) continue;
        const r = (0, y.join)(t, n.name), o = Ge(r, e);
        void 0 !== o && (await We((0, y.join)(r, "SKILL.md")) ? i.push(o) : await nt(e, r, i));
    }
}
async function ot(e, t, i) {
    for (const e of [
        t.sourceRoot,
        t.destinationRoot
    ])if (!(0, y.isAbsolute)(e)) throw new He(t.sourceRoot, e);
    const r = await rt(t.sourceRoot), n = r.length, o = [], s = [];
    return await (0, $e.up)(r, async (r)=>{
        if (!0 === i.isCancelled?.()) return;
        const a = await async function(e, t, i) {
            const r = i.split("/"), n = (0, y.join)(t.destinationRoot, ...r);
            for(let i = 1; i < r.length; i++){
                const n = (0, y.join)(t.destinationRoot, ...r.slice(0, i));
                if (await We((0, y.join)(n, "SKILL.md"))) return e.logWarning(`${t.label}: destination path is inside an existing skill`, {
                    code: "destination-exists"
                }), {
                    status: "failed",
                    reason: "destination-exists"
                };
            }
            const o = await We((0, y.join)(n, "SKILL.md")), s = (0, y.join)(t.sourceRoot, ...r);
            try {
                const r = await Be(e, {
                    sourceDir: s,
                    destinationDir: n,
                    relativePath: i,
                    sourceMissingReason: t.sourceMissingReason,
                    confirmDurable: t.confirmDurable,
                    label: t.label
                }, {
                    sourceSkillFilePath: (0, y.join)(s, "SKILL.md"),
                    clearExistingDestination: o ? Ye({
                        deps: e,
                        destinationDir: n,
                        label: t.label
                    }) : void 0
                });
                return r.confirmed ? {
                    status: "copied"
                } : {
                    status: "failed",
                    reason: r.reason
                };
            } catch (i) {
                return e.logWarning(`${t.label}: copy threw`, {
                    code: qe(i)
                }), {
                    status: "failed",
                    reason: "copy-failed"
                };
            }
        }(e, t, r);
        switch(a.status){
            case "copied":
                o.push(r);
                break;
            case "failed":
                s.push({
                    relativePath: r,
                    reason: a.reason
                });
        }
        i.onProgress?.({
            total: n,
            done: o.length
        });
    }, {
        max: it
    }), {
        complete: o.length === n,
        copied: o,
        failed: s
    };
}
async function st(e, t) {
    for (const e of [
        t.sourceRoot,
        t.destinationRoot
    ])if (!(0, y.isAbsolute)(e)) throw new He(t.sourceRoot, e);
    const i = t.relativePaths.map((e)=>{
        const i = e.split("/"), r = (0, y.join)(t.sourceRoot, ...i);
        if (void 0 === Ge(r, t.sourceRoot)) throw new He(r, t.sourceRoot);
        return i;
    }), r = await (0, $e.up)(i, async (i)=>await Xe(e, {
            sourceDir: (0, y.join)(t.sourceRoot, ...i),
            destinationDir: (0, y.join)(t.destinationRoot, ...i),
            sourceMissingReason: t.sourceMissingReason,
            label: t.label
        }, (0, y.join)(t.sourceRoot, ...i, "SKILL.md")), {
        max: it
    }), n = [];
    let o = 0;
    for (const e of r){
        const t = "fulfilled" === e.status ? e.value.filesMove : void 0;
        void 0 !== t ? n.push(t) : o++;
    }
    return {
        moves: n,
        failedCount: o
    };
}
const at = "cursor.skillStore.copySkillsToStore", lt = "cursor.skillStore.copySkillsFromStore", ct = "cursor.skillStore.confirmStoreSkillsSynced", ut = "cursor.skillStore.trashMigratedHomeSkills", dt = "cursor.skillStore.trashMigratedStoreSkills", pt = "cursor.skillStore.reportMigrationProgress", gt = "cursor.skillStore.isMigrationCancelled", mt = Object.freeze({
    complete: !1,
    doneCount: 0,
    total: 0,
    failed: Object.freeze([
        Object.freeze({
            reason: "store-unavailable"
        })
    ])
}), ft = "Move skill to store", ht = "Move skill out of store";
function yt() {
    const [e] = Oe.dw.targetDirs();
    return e;
}
function wt() {
    const e = yt();
    if (void 0 !== e) return {
        deleteDirectoryToTrash: _e,
        requestScopedSync: Oe.C,
        saveDirtyDocumentsUnder: ve,
        confirmStoreOverwrite: async ()=>!1,
        userHomeDirectory: (0, h.homedir)(),
        agentStoreSkillsDir: e,
        logWarning: (e, t)=>{
            G.warn((0, r.q6)(), e, {
                code: t.code
            });
        }
    };
}
let vt;
async function kt(e) {
    const t = vt;
    if (void 0 !== t) return await t;
    const i = async function(e) {
        const t = wt();
        if (void 0 === t) return mt;
        const i = e(t);
        let r = !1;
        const o = ()=>{
            (async ()=>{
                try {
                    r = !0 === await n.commands.executeCommand(gt);
                } catch  {}
            })();
        };
        o();
        let s = 0;
        const a = await ot(t, i, {
            isCancelled: ()=>r,
            onProgress: (e)=>{
                s = e.total, o(), n.commands.executeCommand(pt, {
                    done: e.done,
                    total: e.total
                }).then(void 0, ()=>{});
            }
        }), l = a.copied.length;
        if (!a.complete) return {
            complete: !1,
            doneCount: l,
            total: Math.max(s, l + a.failed.length),
            failed: a.failed.map((e)=>({
                    reason: e.reason
                }))
        };
        return {
            complete: !0,
            doneCount: l,
            total: Math.max(s, l),
            migratedRelativePaths: [
                ...a.copied
            ].sort()
        };
    }(e);
    vt = i;
    try {
        return await i;
    } finally{
        vt === i && (vt = void 0);
    }
}
function St(e) {
    return {
        sourceRoot: Ve(e.userHomeDirectory),
        destinationRoot: e.agentStoreSkillsDir,
        confirmDurable: async (t)=>"synced-path" === await e.requestScopedSync(t) ? void 0 : "not-synced",
        sourceMissingReason: "source-missing",
        label: ft
    };
}
function Pt(e) {
    return {
        sourceRoot: e.agentStoreSkillsDir,
        destinationRoot: Ve(e.userHomeDirectory),
        confirmDurable: async ()=>{},
        sourceMissingReason: "nothing-to-move",
        label: ht
    };
}
function bt(e, t) {
    if (void 0 === t || !Array.isArray(t.relativePaths) || t.relativePaths.some((e)=>"string" != typeof e || "" === e.trim())) throw new Error(`${e} requires relativePaths, a list of non-empty strings`);
}
function Dt(e) {
    e.subscriptions.push(n.commands.registerCommand(at, async ()=>await kt(St)), n.commands.registerCommand(lt, async ()=>await kt(Pt)), n.commands.registerCommand(ct, async ()=>await async function() {
            const e = yt();
            if (void 0 === e) return {
                confirmed: !1,
                reason: "store-unavailable"
            };
            const t = await Ke(e), i = await (0, Oe.C)(t);
            return "synced-path" === i || 0 === t.length && "synced" === i ? {
                confirmed: !0
            } : {
                confirmed: !1,
                reason: i
            };
        }()), n.commands.registerCommand(ut, async (e)=>(bt("trashMigratedHomeSkills", e), await async function(e) {
            const t = wt();
            return void 0 === t ? {
                moves: [],
                failedCount: e.relativePaths.length
            } : await st(t, {
                sourceRoot: Ve(t.userHomeDirectory),
                destinationRoot: t.agentStoreSkillsDir,
                relativePaths: e.relativePaths,
                sourceMissingReason: "source-missing",
                label: ft
            });
        }(e))), n.commands.registerCommand(dt, async (e)=>(bt("trashMigratedStoreSkills", e), await async function(e) {
            const t = wt();
            return void 0 === t ? {
                moves: [],
                failedCount: e.relativePaths.length
            } : await st(t, {
                sourceRoot: t.agentStoreSkillsDir,
                destinationRoot: Ve(t.userHomeDirectory),
                relativePaths: e.relativePaths,
                sourceMissingReason: "nothing-to-move",
                label: ht
            });
        }(e))));
}
const Ct = "cursor.skillStore.moveSkillToStore", It = "cursor.skillStore.moveSkillOutOfStore", Tt = "cursor.skillStore.confirmOverwrite", Et = {
    confirmed: !1,
    deleted: !1,
    storeUnavailable: !0
};
function xt(e) {
    const [t] = Oe.dw.get();
    if (void 0 !== t) return {
        deleteDirectoryToTrash: _e,
        requestScopedSync: Oe.C,
        saveDirtyDocumentsUnder: ve,
        confirmStoreOverwrite: async (t)=>await async function(e, t) {
                try {
                    return !0 === await n.commands.executeCommand(Tt, {
                        kind: e,
                        collision: t
                    });
                } catch (e) {
                    return G.warn((0, r.q6)(), "Skill store move: overwrite prompt failed", {
                        error: String(e)
                    }), !1;
                }
            }(e, t),
        userHomeDirectory: (0, h.homedir)(),
        agentStoreSkillsDir: t,
        logWarning: (e, t)=>{
            G.warn((0, r.q6)(), e, {
                code: t.code
            });
        }
    };
}
async function Rt(e, t) {
    const i = xt(e);
    if (void 0 === i) return Et;
    const r = "moveToStore" === e ? et : tt;
    try {
        return await r(i, {
            skillFilePath: t.skillFilePath
        });
    } catch (e) {
        if (e instanceof He) return {
            confirmed: !1,
            deleted: !1,
            guardViolation: !0
        };
        throw e;
    }
}
function Nt(e, t) {
    if (void 0 === t || "string" != typeof t.skillFilePath || "" === t.skillFilePath.trim()) throw new Error(`${e} requires a non-empty skillFilePath`);
}
function jt(e) {
    e.subscriptions.push(n.commands.registerCommand(Ct, async (e)=>(Nt("moveSkillToStore", e), await Rt("moveToStore", e))), n.commands.registerCommand(It, async (e)=>(Nt("moveSkillOutOfStore", e), await Rt("moveOutOfStore", e))));
}
async function _t(e, t) {
    let i;
    try {
        i = await be(e.pluginsService, t.pluginId);
    } catch (e) {
        return Ft(`Could not read the installed plugins: ${Mt(e)}`, t);
    }
    if (void 0 === i) return Ft("The published plugin is not installed locally, so its skill files cannot be restored.", t);
    const r = function(e) {
        const t = e.skills.map((e)=>(0, y.dirname)(e.path)).filter((e)=>"" !== e && "." !== e && ".." !== e).map((t)=>(0, y.join)(e.installPath, t));
        return [
            ...new Set(t)
        ];
    }(i);
    if (0 === r.length) return Ft("The published plugin has no skill folder to restore.", t);
    const n = (0, y.join)(i.installPath, "skills"), o = (0, y.join)(e.userHomeDirectory, ".cursor", "skills");
    try {
        return {
            restored: !0,
            skillPaths: await (0, L.V3H)({
                skillDirs: r,
                pluginSkillsRoot: n,
                skillsRoot: o
            }),
            filesMove: {
                previousDir: n,
                nextDir: o
            }
        };
    } catch (e) {
        return Ft(Mt(e), t);
    }
}
function Ft(e, t) {
    return G.warn((0, r.q6)(), "Unpublish skill: restore failed", {
        pluginId: t.pluginId,
        error: e
    }), {
        restored: !1,
        skillPaths: [],
        error: e
    };
}
function At(e, t) {
    return G.warn((0, r.q6)(), "Unpublish skill: cache removal skipped", {
        pluginId: t.pluginId,
        error: e
    }), {
        removed: !1
    };
}
function Mt(e) {
    return e instanceof Error ? e.message : String(e);
}
const Lt = "cursor.unpublishSkill.restoreLocalSkill", Ut = "cursor.unpublishSkill.removePluginCache";
function Ot(e) {
    const t = e;
    if (void 0 === t || "string" != typeof t.pluginId || "" === t.pluginId.trim()) throw new Error("unpublishSkill commands require a non-empty pluginId");
    return {
        pluginId: t.pluginId
    };
}
function $t(e, t) {
    e.subscriptions.push(n.commands.registerCommand(Lt, async (e)=>{
        const i = Ot(e);
        let r;
        try {
            r = await t;
        } catch  {
            return {
                restored: !1,
                skillPaths: [],
                error: "The plugin subsystem is unavailable, so the skill files cannot be restored."
            };
        }
        return _t(r, i);
    }), n.commands.registerCommand(Ut, async (e)=>{
        const i = Ot(e);
        let r;
        try {
            r = await t;
        } catch  {
            return {
                removed: !1
            };
        }
        return async function(e, t) {
            let i;
            try {
                const r = await be(e.pluginsService, t.pluginId);
                i = void 0 === r ? void 0 : Pe(r);
            } catch (e) {
                return At(Mt(e), t);
            }
            const r = i?.marketplace;
            if (void 0 === i || void 0 === r) return At("plugin is no longer loaded from a marketplace", t);
            try {
                return await e.cacheManager.removeAllVersions({
                    marketplaceSlug: r,
                    pluginId: i.name
                }), await e.pluginsService.reload(), {
                    removed: !0
                };
            } catch (e) {
                return At(Mt(e), t);
            }
        }(r, i);
    }));
}

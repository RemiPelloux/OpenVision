import { hm } from "./abort-signal.ts";
import { df, gi } from "./async-cache.ts";
import { Ba, hf } from "./collect-paginated-mcp-list.ts";
import { un } from "./index_5.ts";
import { $r } from "./logger.ts";
import { Ha } from "./mcp-tool-annotations.ts";
import { E_ } from "./mcp-tool-call-timeout.ts";
import { Pa } from "./mcp.ts";
import { dn } from "./observability.ts";
import { cn } from "./reconnect-manager.ts";
import { eo } from "./retry-after-cooldown.ts";
import { h } from "./tslib.es6.js";
import { $l, Lw, ME, Qi, VE, Zt, __, am, ct, de, g_, hE, jE, ln, m_, ms, qe, rm, xw } from "./us.js";
import { CallToolResultSchema as Em } from "@modelcontextprotocol/sdk/types.js";
function Fa(e, t) {
    return t?.[Pa] !== !0 ? e : {
        ...e,
        [Pa]: !0
    };
}
async function US(e) {
    const t = [], r = new Set;
    let n;
    for(let s = 1;; s++){
        const i = await e.fetchPage(n), o = e.itemsOf(i);
        t.push(...o);
        const a = e.nextCursorOf(i);
        if (!a || r.has(a)) return t;
        if (s >= Ba) throw new Error(`MCP list did not end after ${Ba} pages; refusing to keep paging`);
        r.add(a), n = a;
    }
}
var Gl, Kl;
export { Fa, Gl, Kl, US };
var __wakaru_Am_initialized = false;
export function Am() {
if (__wakaru_Am_initialized) return;
__wakaru_Am_initialized = true;
"use strict";
h(), df(), Ha(), hf(), E_(), un(), $r(), dn(), hm(), cn(), eo(), Gl = class {
    constructor(e){
        this.page = e;
    }
}, Kl = class {
    constructor(e, t, r, n, s){
        this.serverName = t, this.identifier = r, this.deps = n, this.lastInlineReconnectAtMs = 0, this.client = e, this.config = s, this.toolsCache = new gi(1e3 * 60 * 60 * 24), this.instructionsCache = new gi(1e3 * 60 * 60 * 24), this.resourcesCache = new gi(1e3 * 60 * 60 * 24);
    }
    classifyAndReport(e, t, r = !0) {
        const n = this.deps.getServerInfo(this.identifier)?.type, s = qe(e, n);
        return Qi({
            identifier: this.identifier,
            phase: t,
            error: e,
            serverType: n,
            classification: s,
            captureException: r && !s.retryable && s.reason !== "auth"
        }), s;
    }
    maybeLogToolCallTimeout(e) {
        if (!Lw(e.error)) return;
        const t = xw(e.durationMs, e.idleTimeoutMs, e.maxTotalTimeoutMs), r = e.error instanceof Error ? e.error.message : String(e.error);
        de(this.identifier).warn(`MCP tool call timed out (${t}): ${e.toolName}`, {
            event: "mcp_tool_call_timeout",
            toolName: e.toolName,
            toolCallId: e.toolCallId,
            durationMs: e.durationMs,
            idleTimeoutMs: e.idleTimeoutMs,
            maxTotalTimeoutMs: e.maxTotalTimeoutMs,
            timeoutKind: t,
            entryPoint: e.entryPoint,
            errorMessage: r
        }), ct("mcp.ext.tool_call_timeout", 1, "increment", [
            `timeout_kind:${t}`,
            `entry_point:${e.entryPoint}`
        ]);
    }
    async listAllPages(e, t, r) {
        try {
            return {
                ok: !0,
                items: await US({
                    fetchPage: (s)=>e(s === void 0 ? void 0 : {
                            cursor: s
                        }, {
                            signal: r
                        }),
                    itemsOf: (s)=>{
                        const i = t(s);
                        if (!i || !Array.isArray(i)) throw new Gl(s);
                        return i;
                    },
                    nextCursorOf: (s)=>s?.nextCursor
                })
            };
        } catch (n) {
            if (n instanceof Gl) return {
                ok: !1,
                invalidPage: n.page
            };
            throw n;
        }
    }
    async listAllTools(e) {
        const t = await this.listAllPages((r, n)=>this.client.listTools(r, n), (r)=>r?.tools, e);
        return t.ok ? {
            kind: "success",
            tools: t.items
        } : ms(this.identifier, "tools", t.invalidPage);
    }
    async listToolsWithCapabilityProbe(e) {
        if (e?.throwIfAborted(), this.client.getServerCapabilities()?.tools) return await this.listAllTools(e);
        try {
            return await this.listAllTools(e);
        } catch (r) {
            if (VE(r)) return {
                kind: "unsupported"
            };
            throw r;
        }
    }
    emitDegradedIfApplicable(e) {
        const t = this.deps.getServerInfo(this.identifier);
        if (t?.type === "stdio") return;
        const r = e.httpStatus;
        (r === 429 || r === 503) && this.deps.dispatchEvents(this.identifier, [
            {
                target: "connection",
                kind: "request_degraded",
                reason: `HTTP ${r}`
            }
        ], t);
    }
    async getTools(e, t) {
        return await this.toolsCache.get(async ()=>await this.withSessionTerminationRetry(async ()=>{
                const r = await this.listToolsWithCapabilityProbe(t);
                return r.kind !== "success" ? [] : r.tools.map((n)=>({
                        name: n.name,
                        description: n.description || void 0,
                        inputSchema: n.inputSchema,
                        outputSchema: n.outputSchema,
                        title: n.title,
                        annotations: Fa(n.annotations, n._meta),
                        _meta: n._meta
                    }));
            }, 0, t));
    }
    invalidateToolsCache() {
        this.toolsCache.invalidate();
    }
    invalidateToolsCacheKeepingStale() {
        this.toolsCache.invalidateKeepingStale();
    }
    invalidateResourcesCache() {
        this.resourcesCache.invalidate();
    }
    invalidateResourcesCacheKeepingStale() {
        this.resourcesCache.invalidateKeepingStale();
    }
    invalidateInstructionsCache() {
        this.instructionsCache.invalidate();
    }
    invalidateInstructionsCacheKeepingStale() {
        this.instructionsCache.invalidateKeepingStale();
    }
    async callTool(e, t, r, n, s) {
        const i = this.deps.toolNameMap.get(t) || t;
        s && this.deps.currentElicitationProvider.set(this.identifier, s);
        const o = Date.now(), a = {
            identifier: this.identifier,
            serverInfo: this.deps.getServerInfo(this.identifier)
        }, c = g_((l)=>{
            de(this.identifier).debug(`ProgressNotification received for ${n}`, {
                progress: l
            }), this.deps.executeCommand("mcp.progressNotification", {
                serverIdentifier: this.identifier,
                progressToken: n,
                notification: l,
                toolCallId: n
            });
        }, void 0, a);
        try {
            const l = await this.withToolCallRetry(async ()=>{
                const u = __(c, o);
                if (u === null) throw m_();
                const d = await this.client.callTool({
                    name: i,
                    arguments: r,
                    _meta: {
                        progressToken: n
                    }
                }, Em, u);
                return {
                    structuredContent: d.structuredContent,
                    content: d.content,
                    isError: d.isError === !0
                };
            });
            return ct("mcp.ext.tool_call_duration_ms", Date.now() - o), ct("mcp.ext.tool_call_success", 1, "increment"), l;
        } catch (l) {
            const u = Date.now() - o;
            ct("mcp.ext.tool_call_duration_ms", u), this.maybeLogToolCallTimeout({
                error: l,
                toolName: i,
                toolCallId: n,
                durationMs: u,
                idleTimeoutMs: c.timeout,
                maxTotalTimeoutMs: c.maxTotalTimeout,
                entryPoint: "callTool"
            });
            const d = this.classifyAndReport(l, "tool_call");
            throw ct("mcp.ext.tool_call_error", 1, "increment", am(d)), l;
        } finally{
            s && this.deps.currentElicitationProvider.delete(this.identifier);
        }
    }
    async getInstructions(e, t) {
        return await this.instructionsCache.get(async ()=>await this.withSessionTerminationRetry(async ()=>await this.client.getInstructions(), 0, t));
    }
    async getState(e) {
        const t = this.deps.getStatus(this.identifier);
        if (!t) return {
            kind: "loading"
        };
        switch(t.type){
            case "initializing":
            case "disconnected":
                return {
                    kind: "loading"
                };
            case "needsAuth":
                return {
                    kind: "requires_authentication",
                    url: t.authorizationUrl,
                    callback: async (r)=>{
                        de(this.identifier).debug("OAuth callback received via getState");
                    }
                };
            case "connected":
            case "degraded":
                return {
                    kind: "ready"
                };
            case "error":
                return {
                    kind: "ready"
                };
            default:
                return {
                    kind: "loading"
                };
        }
    }
    async listResources(e, t) {
        return await this.resourcesCache.get(async ()=>await this.withSessionTerminationRetry(async ()=>{
                if (!(this.client.getServerCapabilities() ?? {
                    resources: !1
                }).resources) return [];
                const n = await this.listAllPages((s, i)=>this.client.listResources(s, i), (s)=>s?.resources, t);
                return n.ok ? n.items.map((s)=>({
                        uri: s.uri,
                        name: s.name,
                        description: s.description,
                        mimeType: s.mimeType,
                        annotations: s.annotations
                    })) : (ms(this.identifier, "resources", n.invalidPage), []);
            }, 0, t)).then((r)=>({
                resources: r
            }));
    }
    async readResource(e, t, r) {
        return await this.withSessionTerminationRetry(async ()=>({
                contents: (await this.client.readResource({
                    uri: t.uri
                }, {
                    signal: r
                })).contents || []
            }), 0, r);
    }
    async listPrompts(e, t) {
        return (this.client.getServerCapabilities() ?? {
            prompts: !1
        }).prompts ? await this.withSessionTerminationRetry(async ()=>{
            const n = await this.listAllPages((s, i)=>this.client.listPrompts(s, i), (s)=>s?.prompts, t);
            return n.ok ? n.items.map((s)=>({
                    name: s.name,
                    description: s.description || void 0,
                    arguments: s.arguments?.map((i)=>({
                            name: i.name,
                            description: i.description || void 0,
                            required: i.required
                        }))
                })) : (ms(this.identifier, "prompts", n.invalidPage), []);
        }, 0, t) : [];
    }
    async getPrompt(e, t, r, n) {
        return await this.withSessionTerminationRetry(async ()=>({
                messages: (await this.client.getPrompt({
                    name: t,
                    arguments: r || {}
                }, {
                    signal: n
                })).messages?.map((o)=>{
                    const a = Array.isArray(o.content) ? o.content : [];
                    return {
                        role: o.role,
                        content: a.map((c)=>c.type === "text" ? {
                                type: "text",
                                text: c.text || ""
                            } : c.type === "image" ? {
                                type: "image",
                                data: c.data || "",
                                mimeType: c.mimeType
                            } : {
                                type: "text",
                                text: ""
                            })
                    };
                }) || []
            }), 0, n);
    }
    async getToolsForUI(e) {
        return await this.withSessionTerminationRetry(async ()=>{
            const t = await this.listToolsWithCapabilityProbe(e);
            switch(t.kind){
                case "unsupported":
                    return {
                        kind: "unsupported",
                        items: []
                    };
                case "invalid_response":
                    return {
                        kind: "invalid_response",
                        items: [],
                        message: t.message
                    };
                case "success":
                    break;
                default:
                    {
                        const r = t;
                        throw new Error(`Unhandled tool probe result: ${JSON.stringify(r)}`);
                    }
            }
            return de(this.identifier).debug(`listOfferings: Found ${t.tools.length} tools`), this.deps.toolNameMap.clear(), {
                kind: "success",
                items: t.tools.map((r)=>{
                    const n = r.inputSchema, s = jE(r.name);
                    this.deps.toolNameMap.set(s, r.name);
                    const i = !n?.properties || Object.keys(n.properties).length === 0, o = r.outputSchema ? JSON.stringify(r.outputSchema) : void 0;
                    return i ? {
                        name: s,
                        originalName: r.name,
                        description: r.description || "",
                        parameters: JSON.stringify({
                            type: "object",
                            properties: {}
                        }),
                        outputSchema: o,
                        title: r.title,
                        annotations: Fa(r.annotations, r._meta),
                        _meta: r._meta
                    } : {
                        name: s,
                        originalName: r.name,
                        description: r.description || "",
                        parameters: JSON.stringify(r.inputSchema),
                        outputSchema: o,
                        title: r.title,
                        annotations: Fa(r.annotations, r._meta),
                        _meta: r._meta
                    };
                })
            };
        }, 0, e);
    }
    async getPromptsForUI(e) {
        return await this.withSessionTerminationRetry(async ()=>{
            if (!(this.client.getServerCapabilities() ?? {
                prompts: !1
            }).prompts) return {
                kind: "unsupported",
                items: []
            };
            const r = await this.listAllPages((n, s)=>this.client.listPrompts(n, s), (n)=>n?.prompts, e);
            return r.ok ? (de(this.identifier).debug(`listPrompts: Found ${r.items.length} prompts`), {
                kind: "success",
                items: r.items.map((n)=>{
                    const s = {
                        type: "object",
                        properties: {},
                        required: []
                    };
                    if (n.arguments && Array.isArray(n.arguments)) for (const i of n.arguments)s.properties[i.name] = {
                        type: "string",
                        description: i.description || ""
                    }, i.required && s.required.push(i.name);
                    return {
                        name: n.name,
                        description: n.description || "",
                        parameters: JSON.stringify(s)
                    };
                })
            }) : ms(this.identifier, "prompts", r.invalidPage);
        }, 0, e);
    }
    async getResourcesForUI(e) {
        return await this.withSessionTerminationRetry(async ()=>{
            if (!(this.client.getServerCapabilities() ?? {
                resources: !1
            }).resources) return {
                kind: "unsupported",
                items: []
            };
            const r = await this.listAllPages((n, s)=>this.client.listResources(n, s), (n)=>n?.resources, e);
            return r.ok ? (de(this.identifier).debug(`listResources: Found ${r.items.length} resources`), {
                kind: "success",
                items: r.items.map((n)=>({
                        uri: n.uri,
                        name: n.name,
                        description: n.description,
                        mimeType: n.mimeType,
                        annotations: n.annotations
                    }))
            }) : ms(this.identifier, "resources", r.invalidPage);
        }, 0, e);
    }
    async listOfferingsForUI(e) {
        const t = Date.now();
        let r = !1, n;
        const s = $l(this.identifier);
        if (s !== void 0) {
            const f = Math.max(1, Math.ceil(s / 1e3)), p = {
                reason: "http_4xx",
                retryable: !0,
                httpStatus: 429
            }, g = ()=>({
                    kind: "failure",
                    items: [],
                    authRelated: !1,
                    failure: p,
                    message: `Rate limited by provider; retry after ${f}s`
                });
            return {
                offerings: {
                    tools: [],
                    prompts: [],
                    resources: []
                },
                outcomes: {
                    tools: g(),
                    prompts: g(),
                    resources: g()
                }
            };
        }
        const i = (f, p)=>p.catch((g)=>{
                if (ME(g, e)) return {
                    kind: "aborted",
                    items: []
                };
                const _ = Zt(g);
                _ && n === void 0 && (r = !0, n = g);
                const y = this.classifyAndReport(g, "list_offerings", !1);
                return {
                    kind: "failure",
                    items: [],
                    authRelated: _,
                    failure: y,
                    message: g instanceof Error ? g.message : String(g)
                };
            }), o = await i("tools", this.getToolsForUI(e)), a = await i("prompts", this.getPromptsForUI(e)), c = await i("resources", this.getResourcesForUI(e)), l = {
            offerings: {
                tools: o.items,
                prompts: a.items,
                resources: c.items
            },
            outcomes: {
                tools: o,
                prompts: a,
                resources: c
            }
        }, { offerings: u } = l, d = [
            [
                "tools",
                o
            ],
            [
                "prompts",
                a
            ],
            [
                "resources",
                c
            ]
        ].flatMap(([f, p])=>p.kind === "aborted" ? [
                {
                    subCall: f,
                    authRelated: !1,
                    reason: "aborted",
                    message: "metadata refresh aborted"
                }
            ] : p.kind === "failure" ? [
                {
                    subCall: f,
                    authRelated: p.authRelated,
                    reason: p.failure.reason,
                    message: p.message
                }
            ] : []);
        if (d.length > 0) {
            const f = d.map((g)=>`${g.subCall}(authRelated=${g.authRelated}, reason=${g.reason}): ${g.message}`).join(" | "), p = `listOfferingsForUI sub-call failed (count=${d.length}): ${f}`;
            d.every((g)=>g.reason === "aborted") ? de(this.identifier).debug(p) : de(this.identifier).warn(p);
        }
        if (ct("mcp.ext.list_offerings_duration_ms", Date.now() - t), ct("mcp.ext.list_offerings_tool_count", u.tools.length), de(this.identifier).debug(`Found ${u.tools.length} tools, ${u.prompts.length} prompts, and ${u.resources.length} resources`), r) {
            const f = n, p = f instanceof Error ? f.message : String(f);
            de(this.identifier).warn("Auth error detected in listOfferingsForUI");
            const g = this.deps.getStatus(this.identifier), _ = this.deps.getAuthState(this.identifier);
            if (g?.type === "needsAuth" || _.type === "needsUserAuth") return de(this.identifier).debug("listOfferingsForUI: skipping operation_auth_failed dispatch (server already awaiting interactive auth)"), l;
            const y = rm({
                hasResults: u.tools.length > 0 || u.prompts.length > 0 || u.resources.length > 0,
                authError: p,
                authState: _
            });
            if (y.length > 0) {
                const m = this.deps.getServerInfo(this.identifier);
                this.deps.dispatchEvents(this.identifier, y, m);
            }
        }
        return l;
    }
    async callToolForUI(e, t, r, n) {
        const s = this.deps.toolNameMap.get(e) || e;
        de(this.identifier).debug(`Calling tool '${s}' with toolCallId: ${r}`), t && de(this.identifier).debug(`Tool arguments: ${JSON.stringify(t)}`, void 0, {
            localOnly: !0
        }), n && this.deps.currentElicitationProvider.set(this.identifier, n);
        const i = Date.now(), o = {
            identifier: this.identifier,
            serverInfo: this.deps.getServerInfo(this.identifier)
        }, a = g_((c)=>{
            de(this.identifier).debug(`ProgressNotification received for ${r}`, {
                progress: c
            }), this.deps.executeCommand("mcp.progressNotification", {
                serverIdentifier: this.identifier,
                progressToken: r,
                notification: c,
                toolCallId: r
            });
        }, void 0, o);
        try {
            r && this.deps.currentToolCallContext.set(this.identifier, r);
            const c = await this.withToolCallRetry(async ()=>{
                const l = __(a, i);
                if (l === null) throw m_();
                return this.client.callTool({
                    name: s,
                    arguments: t,
                    _meta: {
                        progressToken: r
                    }
                }, Em, l);
            });
            return de(this.identifier).debug(`Successfully called tool '${s}'`), r && this.deps.currentToolCallContext.delete(this.identifier), ct("mcp.ext.tool_call_duration_ms", Date.now() - i), ct("mcp.ext.tool_call_success", 1, "increment"), {
                result: c
            };
        } catch (c) {
            const l = Date.now() - i;
            de(this.identifier).error(`Error calling tool '${s}': ${c instanceof Error ? c.message : String(c)}`, c instanceof Error ? c : void 0), r && this.deps.currentToolCallContext.delete(this.identifier), ct("mcp.ext.tool_call_duration_ms", l), this.maybeLogToolCallTimeout({
                error: c,
                toolName: s,
                toolCallId: r,
                durationMs: l,
                idleTimeoutMs: a.timeout,
                maxTotalTimeoutMs: a.maxTotalTimeout,
                entryPoint: "callToolForUI"
            });
            const u = this.classifyAndReport(c, "tool_call");
            return ct("mcp.ext.tool_call_error", 1, "increment", am(u)), this.emitDegradedIfApplicable(u), {
                result: {
                    error: c instanceof Error ? c.message : String(c)
                }
            };
        } finally{
            n && this.deps.currentElicitationProvider.delete(this.identifier);
        }
    }
    async getInstructionsForUI(e) {
        try {
            return {
                instructions: await this.withSessionTerminationRetry(async ()=>this.client.getInstructions(), 0, e)
            };
        } catch (t) {
            return de(this.identifier).error(`Error fetching instructions: ${t instanceof Error ? t.message : String(t)}`, t instanceof Error ? t : void 0), this.classifyAndReport(t, "get_instructions"), {
                instructions: ""
            };
        }
    }
    async getPromptForUI(e, t, r) {
        de(this.identifier).debug(`Getting prompt '${e}'`), t && de(this.identifier).debug(`Prompt arguments: ${JSON.stringify(t)}`, void 0, {
            localOnly: !0
        });
        try {
            const n = {};
            if (t) for (const [i, o] of Object.entries(t))n[i] = typeof o == "string" ? o : JSON.stringify(o);
            const s = await this.withSessionTerminationRetry(async ()=>this.client.getPrompt({
                    name: e,
                    arguments: n
                }, {
                    signal: r
                }), 0, r);
            return de(this.identifier).debug(`Successfully retrieved prompt '${e}'`), {
                result: s
            };
        } catch (n) {
            return de(this.identifier).error(`Error getting prompt '${e}': ${n instanceof Error ? n.message : String(n)}`, n instanceof Error ? n : void 0), this.classifyAndReport(n, "get_prompt"), {
                result: {
                    error: n instanceof Error ? n.message : String(n)
                }
            };
        }
    }
    async readResourceForUI(e, t) {
        de(this.identifier).debug(`Reading resource: ${e}`);
        try {
            const r = await this.withSessionTerminationRetry(async ()=>this.client.readResource({
                    uri: e
                }, {
                    signal: t
                }), 0, t);
            return de(this.identifier).debug(`Successfully read resource: ${e}`), {
                result: r
            };
        } catch (r) {
            return de(this.identifier).error(`Error reading resource '${e}': ${r instanceof Error ? r.message : String(r)}`, r instanceof Error ? r : void 0), this.classifyAndReport(r, "read_resource"), {
                result: {
                    error: r instanceof Error ? r.message : String(r)
                }
            };
        }
    }
    async reinitializeTransportAndRestoreElicitation(e) {
        const t = this.deps.currentElicitationProvider.get(this.identifier);
        await this.deps.reinitializeStreamableHttpConnection(this.identifier, e, this), t && this.deps.currentElicitationProvider.set(this.identifier, t);
    }
    async withSessionTerminationRetry(e, t = 0, r) {
        r?.throwIfAborted();
        try {
            return await e();
        } catch (n) {
            r?.throwIfAborted();
            const s = this.deps.getServerInfo(this.identifier);
            if (!s || t >= 1 || !ln(n, s.type)) throw n;
            return de(this.identifier).info("Detected session termination, re-initializing connection before retry"), await this.reinitializeTransportAndRestoreElicitation(s), this.withSessionTerminationRetry(e, t + 1, r);
        }
    }
    async withToolCallRetry(e, t = 0) {
        try {
            return await e();
        } catch (r) {
            const n = this.deps.getServerInfo(this.identifier);
            if (!n || t >= 1) throw r;
            const s = ln(r, n.type), o = qe(r, n.type).reason === "sibling_refreshed", a = r instanceof Error ? r : new Error(String(r)), c = !s && !o && n.type !== "stdio" && hE(a), l = this.deps.getStatus(this.identifier)?.type === "error";
            if (!s && !o && !(c && l)) throw r;
            if (!s && !o) {
                const f = Date.now(), p = this.deps.getInlineReconnectCooldownMs();
                if (f - this.lastInlineReconnectAtMs < p) throw de(this.identifier).info("Skipping inline reconnect during cooldown", {
                    cooldownMs: p,
                    msSinceLastReconnect: f - this.lastInlineReconnectAtMs
                }), r;
                this.lastInlineReconnectAtMs = f;
            }
            const d = s ? "Detected session termination, re-initializing connection before retry" : o ? "Sibling OAuth refresh completed, re-initializing connection before retrying tool call" : "FSM exhausted retries for network error, attempting inline recovery before tool call";
            return de(this.identifier).info(d), await this.reinitializeTransportAndRestoreElicitation(n), this.withToolCallRetry(e, t + 1);
        }
    }
};

}

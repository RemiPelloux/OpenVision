import { Qe, Vn } from "./Iwo.js";
import { Bal, Oal } from "./Sol.js";
import { e1 } from "./Ycg.js";
import { SR } from "./async_3.js";
import { Hn, ws } from "./dom_2.js";
import { VCi } from "./mcpUtils.js";
import { LI } from "./theme.js";
import { QM, dAn } from "./toolUtils.js";
import { E } from "./tslib.es6.js";
import { fn, rt } from "./uri.js";
import { rC } from "./utils_23.js";
import { Ai, Xo } from "./uuid_2.js";
import { KCn, U6e } from "./yBp.js";
import { Jde } from "./ze.js";
var r6f, s6f, s4l, o6f, a6f, o4l, l6f, a4l, c6f, u6f, d6f, h6f, p6f, l4l, m6f, g6f, zct, f6f, v6f, _6f, b6f, y6f;
export { _6f, a4l, a6f, b6f, c6f, d6f, f6f, g6f, h6f, l4l, l6f, m6f, o4l, o6f, p6f, r6f, s4l, s6f, u6f, v6f, y6f, zct };
var __wakaru_OEw_initialized = false;
export function OEw() {
if (__wakaru_OEw_initialized) return;
__wakaru_OEw_initialized = true;
"use strict";
E(), Hn(), SR(), Qe(), fn(), Xo(), LI(), VCi(), rC(), dAn(), r6f = "2026-01-26", s6f = "ui/notifications/host-context-changed", s4l = "mcp-attachment", o6f = 1 * 1024 * 1024, a6f = 4 * 1024 * 1024, o4l = 800, l6f = 0, a4l = new Map, c6f = (t)=>t !== null && typeof t == "object" && !Array.isArray(t), u6f = (t, e)=>t === e ? !0 : !t || !e || typeof t != "object" || typeof e != "object" ? !1 : JSON.stringify(t) === JSON.stringify(e), d6f = (t, e)=>{
    if (!t) return e;
    const n = {};
    let i = !1;
    for (const r of new Set([
        ...Object.keys(t),
        ...Object.keys(e)
    ]))u6f(t[r], e[r]) || (n[r] = e[r], i = !0);
    return i ? n : void 0;
}, h6f = (t)=>{
    if (!t) return !1;
    const e = t.toLowerCase();
    return e.startsWith("text/html") && e.includes("profile=mcp-app");
}, p6f = (t)=>{
    const e = atob(t), n = new Uint8Array(e.length);
    for(let i = 0; i < e.length; i++)n[i] = e.charCodeAt(i);
    return new TextDecoder().decode(n);
}, l4l = (t)=>{
    if (!t) return "";
    if (typeof t == "string") return t;
    if (Array.isArray(t)) return t.map((e)=>{
        if (!e || typeof e != "object") return "";
        const n = e;
        return n.type === "text" && n.text ? n.text : "";
    }).filter(Boolean).join(`

`);
    if (typeof t == "object") {
        const e = t;
        if (e.type === "text" && e.text) return e.text;
    }
    return "";
}, m6f = (t, e)=>{
    const n = t.trim();
    return e !== void 0 && n.length > 0 ? JSON.stringify({
        text: n,
        structuredContent: e
    }, null, 2) : e !== void 0 ? JSON.stringify(e, null, 2) : n;
}, g6f = (t, e)=>{
    try {
        const n = t ? JSON.parse(t) : void 0, i = n?.root?.children;
        if (!Array.isArray(i)) throw new Error("invalid rich text");
        for (const r of i)if (!(r?.type !== "paragraph" || !Array.isArray(r.children))) {
            for (const s of r.children)if (s?.type === "mention" && s.typeaheadType === s4l && s.mentionName === e.mentionName) return s.mentionName = e.mentionName, s.typeaheadType = e.typeaheadType, s.storedKey = e.storedKey, s.uuid = e.uuid, s.text = e.text, s.metadata = e.metadata, JSON.stringify(n);
        }
    } catch  {}
    return U6e(t, [
        e
    ]);
}, zct = (t)=>(t?.join(" ") || "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;"), f6f = (t, e)=>{
    const n = t.match(/<head[^>]*>/i);
    if (n) {
        const r = n.index + n[0].length;
        return t.slice(0, r) + `
` + e + t.slice(r);
    }
    const i = t.match(/<html[^>]*>/i);
    if (i) {
        const r = i.index + i[0].length;
        return t.slice(0, r) + `
<head>` + e + "</head>" + t.slice(r);
    }
    return `<!DOCTYPE html><html><head>${e}</head><body>${t}</body></html>`;
}, v6f = (t, e)=>{
    const i = `<meta http-equiv="Content-Security-Policy" content="${`
		default-src 'none';
		script-src 'self' 'unsafe-inline' ${zct(e?.resourceDomains)};
		style-src 'self' 'unsafe-inline' ${zct(e?.resourceDomains)};
		connect-src 'self' ${zct(e?.connectDomains)};
		img-src 'self' data: ${zct(e?.resourceDomains)};
		font-src 'self' ${zct(e?.resourceDomains)};
		media-src 'self' data: ${zct(e?.resourceDomains)};
		frame-src ${zct(e?.frameDomains) || "'none'"};
		object-src 'none';
		base-uri ${zct(e?.baseUriDomains) || "'self'"};
	`}">`;
    return f6f(t, i + `
		<script>(() => {
			const api = acquireVsCodeApi();
			const setMessageSource = (obj, src) => new Proxy(obj, {
				get: (target, prop) => {
					if (prop === 'source') return src;
					return target[prop];
				}
			});

			const wrappedFns = new WeakMap();

			let patchedPostMessage = (message, transfer) => api.postMessage(message, transfer);
			const wrap = target => new Proxy(target, {
				set: (obj, prop, value) => {
					if (prop === 'postMessage') {
						patchedPostMessage = (message, transfer) => value.call(target, message, transfer);
					} else {
						obj[prop] = value;
					}
					return true;
				},
				get: (obj, prop) => {
					if (prop === 'postMessage') return patchedPostMessage;
					return obj[prop];
				},
			});

			const originalAddEventListener = window.addEventListener.bind(window);
			window.addEventListener = (type, listener, options) => {
				if (type === 'message') {
					const originalListener = listener;
					const wrappedListener = (event) => {
						if (event.origin === document.location.origin && event.source !== window) {
							event = setMessageSource(event, window.parent);
						}
						originalListener(event);
					};
					wrappedFns.set(originalListener, wrappedListener);
					listener = wrappedListener;
				}
				return originalAddEventListener(type, listener, options);
			};

			const originalRemoveEventListener = window.removeEventListener.bind(window);
			window.removeEventListener = (type, listener, options) => {
				const wrappedListener = wrappedFns.get(listener) || listener;
				return originalRemoveEventListener(type, wrappedListener, options);
			};

			window.parent = wrap(window.parent || window);

			let lastMeasuredHeight = 0;
			let resizeRaf = 0;
			const measureContentHeight = () => {
				const body = document.body;
				const docEl = document.documentElement;
				const measured = Math.max(
					body?.scrollHeight || 0,
					body?.offsetHeight || 0,
					docEl?.scrollHeight || 0,
					docEl?.offsetHeight || 0
				);
				return Math.ceil(measured);
			};
			const postMeasuredSize = () => {
				resizeRaf = 0;
				const nextHeight = measureContentHeight();
				if (!nextHeight || nextHeight === lastMeasuredHeight) return;
				lastMeasuredHeight = nextHeight;
				api.postMessage({
					jsonrpc: '2.0',
					method: 'ui/notifications/size-changed',
					params: { height: nextHeight }
				});
			};
			const scheduleMeasuredSize = () => {
				if (resizeRaf) return;
				resizeRaf = requestAnimationFrame(postMeasuredSize);
			};

			const shouldBubbleScroll = (event) => {
				for (let node = event.target; node; node = node.parentNode) {
					if (!(node instanceof Element)) continue;
					if (node === document.documentElement || node === document.body) continue;
					const overflow = window.getComputedStyle(node).overflowY;
					if (overflow === 'hidden' || overflow === 'visible') continue;
					if (event.deltaY < 0 && node.scrollTop > 0) return false;
					if (event.deltaY > 0 && node.scrollTop + node.clientHeight < node.scrollHeight) {
						if (node.scrollHeight - node.scrollTop - node.clientHeight < 2) continue;
						return false;
					}
				}
				const docEl = document.documentElement;
				const scrollTop = window.scrollY || docEl.scrollTop || document.body.scrollTop || 0;
				const scrollHeight = Math.max(docEl.scrollHeight, document.body.scrollHeight);
				const clientHeight = docEl.clientHeight;
				const scrollableDistance = scrollHeight - clientHeight;
				if (scrollableDistance > 2) {
					if (event.deltaY < 0 && scrollTop > 0) return false;
					if (event.deltaY > 0 && scrollTop < scrollableDistance - 2) return false;
				}
				return true;
			};

			window.addEventListener('wheel', (event) => {
				if (event.defaultPrevented || !shouldBubbleScroll(event)) return;
				api.postMessage({
					jsonrpc: '2.0',
					method: 'ui/notifications/sandbox-wheel',
					params: {
						deltaMode: event.deltaMode,
						deltaX: event.deltaX,
						deltaY: event.deltaY,
						deltaZ: event.deltaZ,
					}
				});
			}, { passive: true });

			window.addEventListener('load', scheduleMeasuredSize);
			window.addEventListener('resize', scheduleMeasuredSize, { passive: true });

			const resizeObserver = new ResizeObserver(scheduleMeasuredSize);
			resizeObserver.observe(document.documentElement);
			if (document.body) {
				resizeObserver.observe(document.body);
			}

			const mutationObserver = new MutationObserver(scheduleMeasuredSize);
			mutationObserver.observe(document.documentElement, {
				childList: true,
				subtree: true,
				characterData: true,
				attributes: true,
			});

			scheduleMeasuredSize();
		})();</script>
	`);
}, _6f = (t, e)=>t ? t.name : e, b6f = (t)=>{
    const e = t?.meta?.ui?.visibility;
    return !e || e.length === 0 || e.includes("app");
}, y6f = class {
    constructor(t, e){
        this.services = t, this.options = e, this.disposed = !1, this.viewInitialized = !1, this.toolInputSent = !1, this.toolResultSent = !1, this.frameSize = {
            height: l6f
        }, this.disposables = [], this.widthRaf = new Vn, this.hostTheme = this.resolveHostTheme();
    }
    mount(t) {
        this.container = t;
        const e = ws(t), n = a4l.get(this.frameSizeCacheKey());
        n !== void 0 && (this.frameSize = {
            ...this.frameSize,
            height: n
        }, this.options.onHeightChange?.(n));
        const i = this.services.themeService.onDidColorThemeChange(()=>{
            this.hostTheme = this.resolveHostTheme(), this.sendHostContextChanged();
        });
        if (this.disposables.push(()=>i.dispose()), typeof e.ResizeObserver == "function") {
            const r = new e.ResizeObserver(()=>{
                this.widthRaf.value || (this.widthRaf.value = e1(()=>{
                    if (this.widthRaf.clear(), !this.container) return;
                    const s = Math.round(this.container.getBoundingClientRect().width);
                    s <= 0 || s === this.frameSize.width || (this.frameSize = {
                        ...this.frameSize,
                        width: s
                    }, this.sendHostContextChanged());
                }, void 0, e));
            });
            r.observe(t), this.disposables.push(()=>{
                this.widthRaf.dispose(), r.disconnect();
            });
        }
        this.fetchResource();
    }
    dispose() {
        if (!this.disposed) {
            this.disposed = !0, this.readResourceAbort?.abort();
            for (const t of this.disposables.splice(0))try {
                t();
            } catch  {}
            this.teardownWebview(), this.container = void 0;
        }
    }
    resolveHostTheme() {
        return Jde(this.services.themeService.getColorTheme().type) ? "dark" : "light";
    }
    frameSizeCacheKey() {
        return `${this.options.composerId}:${this.options.toolCallId ?? `${this.options.serverIdentifier}:${this.options.resourceUri}`}`;
    }
    async fetchResource() {
        const t = this.options.resourceUri;
        if (!t) {
            this.options.onError?.("Missing UI resource URI");
            return;
        }
        const e = new AbortController;
        this.readResourceAbort = e;
        try {
            const n = await this.services.mcpService.readResource(t, this.options.serverIdentifier);
            if (e.signal.aborted || this.disposed) return;
            if (n.error) {
                this.options.onError?.(n.error);
                return;
            }
            const i = n.contents?.[0];
            if (!i) {
                this.options.onError?.("No UI resource content available");
                return;
            }
            if (!h6f(i.mimeType)) {
                this.options.onError?.("Unsupported UI resource type");
                return;
            }
            const r = i.text ?? (i.blob ? p6f(i.blob) : "");
            if (!r) {
                this.options.onError?.("Empty UI resource content");
                return;
            }
            this.resourceMeta = i._meta?.ui, this.resourceHtml = r, this.options.onPrefersBorderChange?.(this.resourceMeta?.prefersBorder ?? !0), this.options.onError?.(void 0), this.mountWebview();
        } catch (n) {
            if (e.signal.aborted || this.disposed) return;
            this.options.onError?.(n instanceof Error ? n.message : "Failed to load UI resource");
        }
    }
    mountWebview() {
        const t = this.container, e = this.resourceHtml;
        if (!t || !e || this.webview || this.disposed) return;
        const n = this.services.webviewService.createWebviewElement({
            title: "MCP App",
            providedViewType: "mcpApp",
            options: {
                disableServiceWorker: !0
            },
            contentOptions: {
                allowScripts: !0,
                allowForms: !0,
                allowMultipleAPIAcquire: !0
            },
            extension: void 0
        });
        this.webview = n, n.mountTo(t, ws(t)), n.setHtml(v6f(e, this.resourceMeta?.csp));
        const i = n.onMessage((r)=>{
            const s = r.message;
            !s || typeof s != "object" || s.jsonrpc !== "2.0" || "method" in s && this.handleMessage(s);
        });
        this.disposables.push(()=>i.dispose());
    }
    teardownWebview() {
        const t = this.webview;
        t && (this.viewInitialized && t.postMessage({
            jsonrpc: "2.0",
            id: Date.now(),
            method: "ui/resource-teardown",
            params: {
                reason: "host-disposed"
            }
        }), t.dispose(), this.webview = void 0, this.viewInitialized = !1, this.toolInputSent = !1, this.toolResultSent = !1, this.lastSentHostContext = void 0);
    }
    hostContext() {
        const t = this.frameSize.width, e = typeof t == "number" && t > 0 ? Math.round(t) : void 0, n = this.options.tool;
        return {
            toolInfo: this.options.toolCallId && n ? {
                id: this.options.toolCallId,
                tool: n
            } : void 0,
            theme: this.hostTheme,
            displayMode: "inline",
            availableDisplayModes: [
                "inline"
            ],
            containerDimensions: {
                ...e ? {
                    width: e
                } : {},
                maxHeight: o4l
            },
            locale: navigator.language,
            timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            platform: "desktop",
            userAgent: "cursor"
        };
    }
    sendToView(t) {
        this.webview?.postMessage(t);
    }
    sendResponse(t, e) {
        this.sendToView({
            jsonrpc: "2.0",
            id: t,
            result: e
        });
    }
    sendError(t, e) {
        this.sendToView({
            jsonrpc: "2.0",
            id: t,
            error: {
                code: -32e3,
                message: e
            }
        });
    }
    sendNotification(t, e) {
        this.sendToView({
            jsonrpc: "2.0",
            method: t,
            params: e
        });
    }
    sendToolInput() {
        this.toolInputSent || !this.options.toolArguments || (this.sendNotification("ui/notifications/tool-input", {
            arguments: this.options.toolArguments
        }), this.toolInputSent = !0);
    }
    sendToolResult() {
        if (this.toolResultSent || !this.options.toolResult) return;
        const { value: t, estimatedByteLength: e } = this.options.toolResult;
        this.services.metricsService.distribution({
            stat: "mcp_app.tool_result_bytes",
            value: e
        }), e >= a6f ? this.services.logService.warn(`[MCP App] Tool result is ~${e} bytes; large webview postMessage payload near IPC danger zone`) : e >= o6f && this.services.logService.warn(`[MCP App] Tool result is ~${e} bytes; large webview postMessage payload`), this.sendNotification("ui/notifications/tool-result", t), this.toolResultSent = !0;
    }
    sendHostContextChanged() {
        if (!this.viewInitialized) return;
        const t = this.hostContext(), e = d6f(this.lastSentHostContext, t);
        e && (this.sendNotification(s6f, e), this.lastSentHostContext = t);
    }
    resolveToolForRequest(t) {
        return (this.services.mcpService.toolsCache()[this.options.serverIdentifier] ?? []).find((n)=>n.name === t || n.originalName === t);
    }
    getMcpAttachmentServerName() {
        const t = this.services.mcpService.getServerDisplayName(this.options.serverIdentifier).trim();
        return t.replace(/^(?:(?:user|extension|project|plugin|dashboard)-)+/i, "") || t || this.options.serverIdentifier;
    }
    async ensureToolApprovedForAppCall(t) {
        const e = this.options.serverIdentifier, n = this.services.composerDecisionsService.getMcpToolApprovalForAppCall({
            toolName: t,
            serverIdentifier: e,
            composerId: this.options.composerId
        });
        if (n.approved || n.reason && n.reason !== "notInAllowlist") return n;
        const i = await this.services.dialogService.prompt({
            type: "question",
            message: `MCP App wants to call "${t}" on "${e}".`,
            buttons: [
                {
                    label: "Approve this server",
                    run: ()=>"server"
                },
                {
                    label: "Approve this tool",
                    run: ()=>"tool"
                }
            ],
            cancelButton: !0
        });
        if (!i.result) return {
            approved: !1,
            reason: "notInAllowlist"
        };
        if (i.result === "tool") return this.services.reactiveStorageService.setApplicationUserPersistentStorage("composerState", "mcpAllowedTools", (s)=>Bal(t, e, s ?? [])), {
            approved: !0
        };
        const r = Oal(e, QM);
        return r !== null && this.services.reactiveStorageService.setApplicationUserPersistentStorage("composerState", "mcpAllowedTools", (s)=>{
            const o = s ?? [];
            return o.some((a)=>a.toLowerCase() === r.toLowerCase()) ? o : [
                ...o,
                r
            ];
        }), {
            approved: !0
        };
    }
    async handleToolsCall(t, e) {
        const n = typeof e?.name == "string" ? e.name : "";
        if (!n) {
            this.sendError(t, "Invalid tool name");
            return;
        }
        const i = this.resolveToolForRequest(n);
        if (!i) {
            this.sendError(t, `Tool not found: ${n}`);
            return;
        }
        if (!b6f(i)) {
            this.sendError(t, `Tool not available to apps: ${n}`);
            return;
        }
        const r = await this.ensureToolApprovedForAppCall(i.name);
        if (!r.approved) {
            const s = r.reason;
            this.sendError(t, s && s !== "notInAllowlist" ? `Tool call blocked by policy: ${s}` : "Tool call requires approval");
            return;
        }
        try {
            const s = e?.arguments && typeof e.arguments == "object" ? e.arguments : {}, o = _6f(i, n), a = await this.services.mcpService.callTool(o, s, void 0, void 0, void 0, this.options.serverIdentifier);
            this.sendResponse(t, a);
        } catch (s) {
            this.sendError(t, s instanceof Error ? s.message : "Tool call failed");
        }
    }
    async handleResourceRead(t, e) {
        const n = typeof e?.uri == "string" ? e.uri : "";
        if (!n) {
            this.sendError(t, "Invalid resource URI");
            return;
        }
        try {
            const i = await this.services.mcpService.readResource(n, this.options.serverIdentifier);
            this.sendResponse(t, i);
        } catch (i) {
            this.sendError(t, i instanceof Error ? i.message : "Resource read failed");
        }
    }
    async handleOpenLink(t, e) {
        const n = typeof e?.url == "string" ? e.url : "";
        if (!n) {
            this.sendError(t, "Invalid URL");
            return;
        }
        try {
            const i = rt.parse(n);
            if (![
                "http",
                "https"
            ].includes(i.scheme)) {
                this.sendError(t, "Invalid URL");
                return;
            }
            await this.services.openerService.open(n, {
                openExternal: !0
            }), this.sendResponse(t, {});
        } catch (i) {
            this.sendError(t, i instanceof Error ? i.message : "Open link failed");
        }
    }
    async handleUiMessage(t, e) {
        const n = l4l(e?.content);
        if (!n) {
            this.sendError(t, "Invalid message content");
            return;
        }
        try {
            const i = this.latestModelContextMention, r = i ? KCn({
                mentions: [
                    i
                ],
                format: "append",
                baseText: n
            }) : n;
            await this.services.composerChatService.submitChatMaybeAbortCurrent(this.options.composerId, n, {
                richText: r
            }), this.sendResponse(t, {});
        } catch (i) {
            this.sendError(t, i instanceof Error ? i.message : "Message send failed");
        }
    }
    handleUpdateModelContext(t, e) {
        const n = this.services.composerDataService.getHandleIfLoaded(this.options.composerId);
        if (!n) {
            this.sendError(t, "Composer not loaded");
            return;
        }
        const i = l4l(e?.content) || (typeof e?.text == "string" ? e.text : "") || (typeof e?.context == "string" ? e.context : ""), r = !!e && Object.prototype.hasOwnProperty.call(e, "structuredContent"), s = r ? e?.structuredContent : void 0;
        if (!i.trim() && !r) {
            this.sendError(t, "Invalid model context");
            return;
        }
        const a = this.latestModelContextMention?.uuid ?? Ai(), l = `${this.getMcpAttachmentServerName()} attachment`, c = m6f(i, s), u = {
            display: l,
            mentionName: l,
            typeaheadType: s4l,
            storedKey: a,
            uuid: a,
            text: l,
            metadata: {
                hoverText: c
            }
        };
        this.latestModelContextMention = u;
        const d = g6f(n.data.richText, u);
        this.services.composerDataService.updateComposerData(n, {
            text: n.data.text,
            richText: d
        }), this.services.composerEventService.fireShouldForceText({
            composerId: this.options.composerId
        }), this.sendResponse(t, {
            target: "composer-input",
            attachmentUuid: a
        });
    }
    async handleMessage(t) {
        if (t.method === "ui/initialize" && "id" in t) {
            const e = this.hostContext();
            this.lastSentHostContext = e, this.sendResponse(t.id, {
                protocolVersion: r6f,
                hostCapabilities: {
                    openLinks: {},
                    serverTools: {
                        listChanged: !1
                    },
                    serverResources: {
                        listChanged: !1
                    },
                    logging: {},
                    sandbox: {
                        permissions: this.resourceMeta?.permissions,
                        csp: this.resourceMeta?.csp
                    }
                },
                hostInfo: {
                    name: this.services.productService.nameLong ?? "Cursor",
                    version: this.services.productService.version ?? "unknown"
                },
                hostContext: e
            });
            return;
        }
        if (t.method === "ui/notifications/initialized") {
            this.viewInitialized = !0, this.sendToolInput(), this.sendToolResult(), this.sendHostContextChanged();
            return;
        }
        if (t.method === "ui/notifications/size-changed") {
            const e = typeof t.params?.width == "number" ? t.params.width : void 0, n = typeof t.params?.height == "number" ? t.params.height : void 0;
            this.frameSize = {
                width: e ?? this.frameSize.width,
                height: typeof n == "number" ? Math.min(n, o4l) : this.frameSize.height
            }, typeof this.frameSize.height == "number" && this.frameSize.height > 0 && (a4l.set(this.frameSizeCacheKey(), this.frameSize.height), this.options.onHeightChange?.(this.frameSize.height));
            return;
        }
        if (t.method === "notifications/message") {
            const e = typeof t.params?.level == "string" ? t.params.level : "info", n = t.params?.data, i = typeof n == "string" ? n : JSON.stringify(n ?? {});
            e === "error" ? this.services.logService.error(`[MCP App] ${i}`) : e === "warn" ? this.services.logService.warn(`[MCP App] ${i}`) : this.services.logService.info(`[MCP App] ${i}`);
            return;
        }
        if (t.method === "ui/notifications/sandbox-wheel") {
            const e = t.params;
            this.container && this.container.dispatchEvent(new WheelEvent("wheel", {
                deltaX: typeof e?.deltaX == "number" ? e.deltaX : 0,
                deltaY: typeof e?.deltaY == "number" ? -e.deltaY : 0,
                deltaZ: typeof e?.deltaZ == "number" ? e.deltaZ : 0,
                deltaMode: typeof e?.deltaMode == "number" ? e.deltaMode : 0,
                bubbles: !0,
                cancelable: !0
            }));
            return;
        }
        if ("id" in t) switch(t.method){
            case "tools/call":
                await this.handleToolsCall(t.id, t.params);
                return;
            case "resources/read":
                await this.handleResourceRead(t.id, t.params);
                return;
            case "ui/open-link":
                await this.handleOpenLink(t.id, t.params);
                return;
            case "ui/message":
                await this.handleUiMessage(t.id, t.params);
                return;
            case "ui/update-model-context":
                this.handleUpdateModelContext(t.id, t.params);
                return;
            case "ui/request-display-mode":
                this.sendResponse(t.id, {
                    displayMode: "inline"
                });
                return;
            case "ping":
                this.sendResponse(t.id, {});
                return;
            default:
                this.sendError(t.id, `Unsupported method: ${t.method}`);
        }
    }
};

}

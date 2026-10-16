import { N6, nwt } from "./A3u.js";
import { $Ui, tMn, wzs } from "./De_3.js";
import { Ct, Fo, Hp, Kl, Rl, Se, ZL, bt, ja, po, rn, si, ve, we, wi } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { lki } from "./agent-store-commands.ts";
import { Abn } from "./agent-store-ids.ts";
import { ca, la } from "./aiMiscServices.js";
import { ZMe, ub } from "./async.cursor.js";
import { bn } from "./async.js";
import { Za, na } from "./authenticationService.js";
import { Yu } from "./browser.ts";
import { Ar, Ji } from "./cancellation.js";
import { ELe, dLh, etr, oIo, rIo, ttr, uLh } from "./canvas-index.js";
import { Kwe, Vzc, p2 } from "./canvas.js";
import { TLe, iIo, rhe, she } from "./canvasEditorInput.js";
import { ZYi, yVt } from "./canvasLogger.js";
import { Zer } from "./canvasNavigationCommands.js";
import { Bs_, oLh } from "./canvasUrlResolver.js";
import { $_e, MHv, PA, PHv } from "./cgh.js";
import { P8e, eIo, iLh, lTe, nLh, rLh, sLh, tIo } from "./cloudCanvas.js";
import { Ds_ } from "./cloudCanvasShare.js";
import { Rs } from "./code_3.js";
import { $n, ki, vi } from "./commands.js";
import { Qo } from "./connect-error.js";
import { hg } from "./connect.js";
import { TN } from "./connectErrors.js";
import { C$i, Jh, T$i, aeo, ceo, leo, oeo, rHt, ueo, wJe } from "./dashboard_pb.js";
import { Nc, gs } from "./editorGroupsService.js";
import { Ni, _1, hn } from "./editorService.js";
import { Vr, Yi } from "./environmentService.js";
import { Kr, qs } from "./experimentService.js";
import { Pn } from "./extensions.js";
import { Fi, Ii, _M } from "./files.js";
import { Fl, rc } from "./host.js";
import { Ml } from "./index.ts";
import { Ze } from "./instantiation.js";
import { eo, ko } from "./opener.js";
import { fu, zl } from "./pathService.js";
import { AO, Bbn, Bmt, Bzc, Cki, Fmt, Fzc, Lzc, Ozc, Uzc, Wzc, mn, tj, vn, zle } from "./qIc.js";
import { DR, I2 } from "./remoteAuthorityResolver.js";
import { Li, jr } from "./resources.js";
import { Qer } from "./shareCanvasUtils.js";
import { Vn, yn } from "./storage_2.js";
import { Xh, im } from "./structuredLog.js";
import { x } from "./tslib.es6.js";
import { aL, oF } from "./tunnel.js";
import { Ee, Qt } from "./uri.js";
import { Ea, rl } from "./uriIdentity.js";
import { Fw } from "./utils_24.js";
import { Jn, ci } from "./workspace.js";
import { NR } from "./workspaceProjectPaths.js";
import { uVt } from "./xmo.js";
function Is_(e) {
    return e === "CANVAS_VISIBILITY_PRIVATE" ? "private" : e === "CANVAS_VISIBILITY_TEAM_VIEW" ? "team-view" : null;
}
function As_(e) {
    return e !== null && typeof e == "object" && !Array.isArray(e);
}
function Rs_(e) {
    if (!As_(e)) return null;
    const t = Is_(e.visibility);
    return t === null || typeof e.canShareToTeam != "boolean" ? null : {
        visibility: t,
        canShareToTeam: e.canShareToTeam
    };
}
function Ms_(e) {
    return e.length >= 2 && e[0] === 31 && e[1] === 139;
}
function aqt(e) {
    if (!(!$Ui(e.storeId) || !tMn(e.canvasId))) return {
        storeId: e.storeId,
        canvasId: e.canvasId.toLowerCase()
    };
}
function Jtt(e) {
    const t = sLh.exec(e.replace(/\\/g, "/"))?.[2];
    return t === void 0 ? void 0 : {
        canvasId: t.toLowerCase()
    };
}
function Jxo(e) {
    return TLe(e) !== void 0 || Jtt(e) !== void 0;
}
function tLh(e) {
    return Ee.from({
        scheme: iLh,
        authority: e.storeId,
        path: `/${e.canvasId}`
    });
}
function Ps_(e) {
    const t = tLh(e);
    return {
        path: rhe(e),
        resource: t,
        preview: {
            kind: "bundle",
            path: rhe(e),
            resource: t
        }
    };
}
function Ls_(e, t) {
    return {
        path: rhe(e),
        resource: t.sourcePath === void 0 ? tLh(e) : Ee.file(t.sourcePath),
        preview: {
            kind: "bundle",
            path: t.bundlePath,
            resource: Ee.file(t.bundlePath)
        }
    };
}
function Fs_(e) {
    if (!(e instanceof Error)) return;
    const t = e.message.trim();
    if (t.length === 0) return;
    const n = t.replace(/^\[[^\]]+\]\s*/, "").trim();
    if (n.length !== 0 && n !== "Canvas server provider is not registered") return n;
}
async function $s_({ fileService: e, bundleDirectory: t, sourceDirectory: n, signal: i }) {
    try {
        i?.throwIfAborted();
        let r = e.getProvider(t.scheme);
        if (r === void 0 && (await e.activateProvider(t.scheme), i?.throwIfAborted(), r = e.getProvider(t.scheme)), r === void 0) throw new Error(`No filesystem provider for ${t.scheme}`);
        const s = await r.readdir(t);
        i?.throwIfAborted();
        const o = await Promise.all(s.filter(([a, c])=>(c & _M.Directory) === 0 && Lzc(a)).map(async ([a])=>{
            i?.throwIfAborted();
            const c = jr(t, a), l = Ozc(a);
            if (l !== void 0) try {
                const u = await r.stat(c);
                i?.throwIfAborted();
                const h = jr(n, l);
                return {
                    name: Bmt(l),
                    lastModifiedAt: u.mtime,
                    file: Bbn(h, {
                        kind: "bundle",
                        resource: c
                    }),
                    origin: "cloud"
                };
            } catch  {
                return;
            }
        }));
        return i?.throwIfAborted(), etr(o);
    } catch (r) {
        return i?.throwIfAborted(), AO(r) === 1 ? {
            status: "ready",
            entries: []
        } : {
            status: "unavailable"
        };
    }
}
function Hs_(e) {
    try {
        const t = JSON.parse(e);
        if (t === null || typeof t != "object" || Array.isArray(t)) return {};
        const n = t, i = typeof n.title == "string" && n.title.trim().length > 0 ? n.title.trim() : void 0, r = typeof n.updatedAt == "string" ? Date.parse(n.updatedAt) : NaN;
        return {
            ...i !== void 0 ? {
                title: i
            } : {},
            ...Number.isFinite(r) ? {
                updatedAt: r
            } : {}
        };
    } catch  {
        return {};
    }
}
async function Ws_({ fileService: e, canvasesDir: t, signal: n }) {
    try {
        n?.throwIfAborted();
        let i = e.getProvider(t.scheme);
        if (i === void 0 && (await e.activateProvider(t.scheme), n?.throwIfAborted(), i = e.getProvider(t.scheme)), i === void 0) throw new Error(`No filesystem provider for ${t.scheme}`);
        const r = await i.readdir(t);
        n?.throwIfAborted();
        const s = await Promise.all(r.filter(([o, a])=>(a & _M.Directory) !== 0).map(async ([o])=>{
            if (n?.throwIfAborted(), !tMn(o)) return;
            const a = jr(t, o), c = jr(a, eIo);
            try {
                const l = await i.stat(c);
                if ((l.type & _M.File) === 0) return;
                const u = jr(a, tIo);
                let h = l.mtime;
                try {
                    const v = await i.stat(u);
                    (v.type & _M.File) !== 0 && (h = Math.max(h, v.mtime));
                } catch  {}
                const p = {
                    kind: "bundle",
                    resource: u
                }, g = jr(a, rLh);
                let f;
                try {
                    const v = await e.readFile(g, {
                        length: uLh
                    }), b = Hs_(v.value.toString());
                    f = b.title, b.updatedAt !== void 0 && (h = Math.max(h, b.updatedAt));
                } catch  {}
                return {
                    name: f ?? "Untitled Canvas",
                    lastModifiedAt: h,
                    file: Bbn(c, p),
                    origin: "cloud"
                };
            } catch  {
                return;
            }
        }));
        return n?.throwIfAborted(), etr(s);
    } catch (i) {
        return n?.throwIfAborted(), AO(i) === 1 ? {
            status: "ready",
            entries: []
        } : {
            status: "unavailable"
        };
    }
}
function Gs_(e, t) {
    if (e.status !== "ready") return t;
    if (t.status !== "ready") return e;
    const n = new Set, i = new Map;
    for (const a of t.entries){
        const c = TLe(a.file.path);
        c !== void 0 && i.set(c.canvasId, a);
    }
    let r = !1;
    const s = e.entries.map((a)=>{
        const c = Jtt(a.file.path);
        if (c === void 0) return a;
        n.add(c.canvasId);
        const l = i.get(c.canvasId);
        return l === void 0 || l.lastModifiedAt <= a.lastModifiedAt ? a : (r = !0, {
            ...a,
            lastModifiedAt: l.lastModifiedAt
        });
    }), o = t.entries.filter((a)=>{
        const c = TLe(a.file.path);
        return c === void 0 || !n.has(c.canvasId);
    });
    return o.length === 0 && !r ? e : etr([
        ...s,
        ...o
    ]);
}
function cLh(e, t) {
    if (e.status !== "ready") return;
    const n = t.toLowerCase();
    for (const i of e.entries){
        const r = TLe(i.file.path);
        if (r?.canvasId === n) return r;
    }
}
function Vs_(e) {
    const t = aqt({
        storeId: e.storeId,
        canvasId: e.canvasId
    });
    if (t === void 0) return;
    const n = Date.parse(e.updatedAt);
    if (!Number.isFinite(n)) return;
    const i = e.title?.trim();
    return {
        name: i !== void 0 && i.length > 0 ? i : "Untitled Canvas",
        lastModifiedAt: n,
        file: Ps_(t),
        origin: "cloud"
    };
}
function zs_(e, t) {
    return e.status === "ready" || t.status === "ready" ? {
        status: "ready",
        entries: [
            ...e.status === "ready" ? e.entries : [],
            ...t.status === "ready" ? t.entries : []
        ].sort((i, r)=>r.lastModifiedAt - i.lastModifiedAt || i.name.localeCompare(r.name))
    } : e.status === "loading" || t.status === "loading" ? ELe : {
        status: "unavailable"
    };
}
function Ks_(e) {
    if (e instanceof Qo) {
        if (e.code === Rs.NotFound || e.code === Rs.PermissionDenied) return "not_found";
        if (e.code === Rs.Unauthenticated) return "unauthenticated";
    }
    return "fetch_failed";
}
function hLh(e) {
    let t = e.trim();
    return t = t.replace(/[\x00-\x1f<>:"|?*\\/]+/g, "-"), t = t.replace(/\s+/g, "-"), t = t.replace(/-+/g, "-"), t = t.replace(/^-+|-+$/g, ""), t.length > 0 ? t : "untitled";
}
function pLh(e, t) {
    return Ee.joinPath(e, `${hLh(t)}${Kwe}`);
}
async function Ys_(e, t, n) {
    let i = n;
    for(let r = 2;; r++){
        const s = pLh(t, i);
        if (!await e.exists(s)) return s;
        i = `${n}-${r}`;
    }
}
var z$, aIo, ntr, mLh, ent;
export { $s_, As_, Fs_, Gs_, Hs_, Is_, Jtt, Jxo, Ks_, Ls_, Ms_, Ps_, Rs_, Vs_, Ws_, Ys_, aIo, aqt, cLh, ent, hLh, mLh, ntr, pLh, tLh, z$, zs_ };
var __wakaru_xLe_initialized = false;
export function xLe() {
if (__wakaru_xLe_initialized) return;
__wakaru_xLe_initialized = true;
"use strict";
x(), Zer(), Ml(), Fo(), bn(), ub(), Ar(), bt(), Li(), Qt(), Se(), Fi(), vi(), Ds_(), Yu(), rl(), ko(), ci(), Pn(), Ze(), si(), DR(), oF(), p2(), P8e(), Qer(), Bs_(), ZYi(), Vr(), im(), Ni(), Nc(), la(), Za(), Vn(), fu(), NR(), iIo(), qs(), hg(), Jh(), ttr(), Fl(), Fw(), TN(), z$ = vn("canvasService"), aIo = 12e4, ntr = 3e4, mLh = [
    1e3,
    2e3
], ent = class extends we {
    constructor(e, t, n, i, r, s, o, a, c, l, u, h, p, g, f, v, b){
        super(), this.commandService = e, this.structuredLogService = t, this.editorService = s, this.editorGroupsService = o, this.analyticsService = a, this.cursorAuthenticationService = c, this.storageService = l, this.fileService = u, this.uriIdentityService = h, this.workspaceContextService = p, this.pathService = g, this.hostService = f, this.experimentService = v, this.openerService = b, this.cloudCanvasNotFoundRetryDelaysMs = mLh, this._providerReadyResolvers = [], this.canvasSessionsByPath = new Map, this.cloudCanvasResolveFlights = this._register(new po), this.cloudCanvasContentRevisions = new Map, this.cloudCanvasBundleCache = new Map, this._onCanvasError = this._register(new ve), this.onCanvasError = this._onCanvasError.event, this._canvasErrors = new Map, this._onCanvasErrorCleared = this._register(new ve), this.onCanvasErrorCleared = this._onCanvasErrorCleared.event, this.cloudCanvasIndexes = this._register(new po), this._mergedCanvasIndexSnapshot = ELe, this._isGlass = !!n.isGlass, this._providerWaitTimeoutMs = n.enableSmokeTestDriver ? 9e4 : 1e4, this.urlResolver = this._register(new oLh(n, i, r, this.structuredLogService)), this.canvasIndex = this._register(new dLh(this.fileService, this.uriIdentityService, async ()=>{
            const y = this.workspaceContextService.getWorkspace();
            return uVt(y, this.pathService);
        }, Ct.any(this.workspaceContextService.onDidChangeWorkbenchState, this.workspaceContextService.onDidChangeWorkspaceFolders))), this.userCanvasIndex = this._register(new oIo({
            focus: this.hostService,
            query: (y)=>this.queryUserCanvasIndex(y),
            uriIdentityService: this.uriIdentityService,
            focusedIntervalMs: 3e4,
            unfocusedIntervalMs: 6e4,
            maxIntervalMs: 6e4,
            isCancellation: (y)=>N6(y) || ja(y)
        })), this.onDidChangeCanvasIndex = Ct.map(Ct.any(this.canvasIndex.onDidChange, this.userCanvasIndex.onDidChange), ()=>this.getCanvasIndexSnapshot()), this.onDidChangeUserCanvasIndex = this.userCanvasIndex.onDidChange;
    }
    getCanvasError(e) {
        return this._canvasErrors.get(e);
    }
    fireCanvasError(e) {
        this._canvasErrors.set(e.canvasId, e), this._onCanvasError.fire(e);
    }
    fireCanvasErrorCleared(e) {
        this._canvasErrors.delete(e), this._onCanvasErrorCleared.fire(e);
    }
    getCanvasIndexSnapshot() {
        const e = zs_(this.canvasIndex.getSnapshot(), this.userCanvasIndex.getSnapshot());
        return rIo(this._mergedCanvasIndexSnapshot, e, this.uriIdentityService) ? this._mergedCanvasIndexSnapshot : (this._mergedCanvasIndexSnapshot = e, e);
    }
    getUserCanvasIndexSnapshot() {
        return this.userCanvasIndex.getSnapshot();
    }
    getCachedUserStoreId() {
        return this._cachedUserStoreId;
    }
    async resolveUserStoreId() {
        if (this._cachedUserStoreId !== void 0) return this._cachedUserStoreId;
        if (this.rememberUserStoreIdFromSnapshot(this.userCanvasIndex.getSnapshot()), this._cachedUserStoreId !== void 0) return this._cachedUserStoreId;
        try {
            const t = await (await this.cursorAuthenticationService.dashboardClient()).listUserCanvases(new C$i({
                pageSize: 1,
                pageToken: ""
            }), {
                headers: nwt(!0)
            });
            this.rememberUserStoreId(t.canvases[0]?.storeId);
        } catch  {}
        return this._cachedUserStoreId;
    }
    async resolveUserCloudCanvasAddress(e) {
        const t = cLh(this.userCanvasIndex.getSnapshot(), e);
        if (t !== void 0) return this.rememberUserStoreId(t.storeId), t;
        const n = await this.resolveUserStoreId();
        if (n !== void 0) return aqt({
            storeId: n,
            canvasId: e
        });
    }
    async queryUserCanvasIndex(e) {
        if (e.throwIfAborted(), !this.experimentService.checkFeatureGate(lTe, {
            disableExposureLog: !0
        })) return {
            status: "ready",
            entries: []
        };
        try {
            const t = await this.resolveUserStoreCanvasesDir();
            if (e.throwIfAborted(), t !== void 0 && await this.fileService.exists(t)) {
                const n = await Ws_({
                    fileService: this.fileService,
                    canvasesDir: t,
                    signal: e
                });
                let i = {
                    status: "unavailable"
                }, r = !1;
                try {
                    i = await this.queryUserCanvasIndexViaRpc(e);
                } catch (o) {
                    if (N6(o) || e.aborted) throw o;
                    r = !0;
                }
                const s = Gs_(n, i);
                return this.rememberUserStoreIdFromSnapshot(s), r ? {
                    snapshot: s,
                    shouldBackoff: !0
                } : s;
            }
            return await this.queryUserCanvasIndexViaRpc(e);
        } catch (t) {
            if (N6(t) || e.aborted) throw t;
            return {
                status: "unavailable"
            };
        }
    }
    async resolveAgentStoreScopePath(e) {
        let t;
        try {
            t = await this.commandService.executeCommand(lki, {
                agentId: e.agentId,
                mount: e.mount
            });
        } catch  {
            return;
        }
        const n = t?.scopes?.find((i)=>i.scope === e.scope)?.path;
        return n !== void 0 && n.length > 0 ? n : void 0;
    }
    async resolveUserStoreCanvasesDir() {
        const e = await this.resolveAgentStoreScopePath({
            agentId: "",
            mount: "self",
            scope: "user"
        });
        if (e !== void 0) return jr(Ee.file(e), Abn);
    }
    rememberUserStoreId(e) {
        e === void 0 || !$Ui(e) || (this._cachedUserStoreId = e);
    }
    rememberUserStoreIdFromSnapshot(e) {
        if (e.status === "ready") for (const t of e.entries){
            const n = TLe(t.file.path);
            if (n !== void 0) {
                this.rememberUserStoreId(n.storeId);
                return;
            }
        }
    }
    async resolveUserStoreReplicaSource(e) {
        const t = this.userCanvasIndex.getSnapshot();
        if (t.status === "ready") {
            for (const r of t.entries)if (Jtt(r.file.path)?.canvasId === e.canvasId) return r.file.path;
        }
        const n = await this.resolveUserStoreCanvasesDir();
        if (n === void 0) return;
        const i = jr(n, e.canvasId, eIo);
        return await this.fileService.exists(i) ? i.fsPath : void 0;
    }
    async queryUserCanvasIndexViaRpc(e) {
        const t = await this.cursorAuthenticationService.dashboardClient(), n = [];
        let i = "";
        for(let r = 0; r < ent.USER_CANVAS_LIST_MAX_PAGES; r++){
            e.throwIfAborted();
            const s = await t.listUserCanvases(new C$i({
                pageSize: ent.USER_CANVAS_LIST_PAGE_SIZE,
                pageToken: i
            }), {
                signal: e,
                headers: nwt(!0)
            });
            for (const a of s.canvases){
                this.rememberUserStoreId(a.storeId);
                const c = Vs_({
                    storeId: a.storeId,
                    canvasId: a.canvasId,
                    title: a.title,
                    updatedAt: a.updatedAt
                });
                c !== void 0 && n.push(c);
            }
            const o = s.nextPageToken?.trim() ?? "";
            if (o.length === 0) break;
            i = o;
        }
        return {
            status: "ready",
            entries: n
        };
    }
    getCloudCanvasIndex({ ownerAgentId: e, sourceDirectory: t }) {
        const n = `${e}\0${this.uriIdentityService.extUri.getComparisonKey(t)}`;
        let i = this.cloudCanvasIndexes.get(n);
        return i !== void 0 || (i = new oIo({
            focus: this.hostService,
            query: async (r)=>{
                r.throwIfAborted();
                const s = await this.resolveAgentStoreScopePath({
                    agentId: e,
                    mount: "peer",
                    scope: "agent"
                });
                if (r.throwIfAborted(), s === void 0) return {
                    status: "ready",
                    entries: []
                };
                const o = this.workspaceContextService.resolveRelativePath(s), a = Ee.joinPath(o, "artifacts", ...Vzc.split("/"));
                return $s_({
                    fileService: this.fileService,
                    bundleDirectory: a,
                    sourceDirectory: t,
                    signal: r
                });
            },
            uriIdentityService: this.uriIdentityService
        }), this.cloudCanvasIndexes.set(n, i)), i;
    }
    registerCanvasServerProvider(e) {
        this.canvasServerProvider = e;
        for (const t of this._providerReadyResolvers)t();
        return this._providerReadyResolvers = [], rn(()=>{
            this.canvasServerProvider === e && (this.canvasServerProvider = void 0);
        });
    }
    waitForProvider(e) {
        return this.canvasServerProvider ? Promise.resolve(!0) : new Promise((t)=>{
            const n = setTimeout(()=>t(!1), e);
            this._providerReadyResolvers.push(()=>{
                clearTimeout(n), t(!0);
            });
        });
    }
    resolveManagedCanvasPath(e) {
        const t = tj(e);
        if (!(!Cki(t) || !zle(t))) return t;
    }
    logCanvasOpenFailure(e) {
        PHv(this.structuredLogService, e);
    }
    async getManagedCanvasesDirectory() {
        const e = this.workspaceContextService.getWorkspace(), t = await uVt(e, this.pathService);
        return await this.fileService.createFolder(t), t;
    }
    async createManagedCanvasFile(e, t) {
        const n = await this.getManagedCanvasesDirectory(), i = hLh(e), r = await Ys_(this.fileService, n, i), s = r.fsPath;
        if (!zle(s)) throw new Error(`Refusing to write canvas file at non-managed path: ${s}`);
        return await this.fileService.createFile(r, wi.fromString(t)), {
            path: s,
            resource: r
        };
    }
    async ensureManagedCanvasFile(e, t) {
        const n = await this.getManagedCanvasesDirectory(), i = pLh(n, e), r = i.fsPath;
        if (!zle(r)) throw new Error(`Refusing to write canvas file at non-managed path: ${r}`);
        let s = !0;
        if (await this.fileService.exists(i)) try {
            s = (await this.fileService.readFile(i)).value.toString() !== t;
        } catch  {
            s = !0;
        }
        return s && await this.fileService.createFile(i, wi.fromString(t), {
            overwrite: !0
        }), {
            path: r,
            resource: i
        };
    }
    async writeManagedCanvasDataFile(e, t) {
        if (!zle(e.fsPath)) throw new Error(`Refusing to write canvas data beside non-managed path: ${e.fsPath}`);
        const n = e.with({
            path: Wzc(e.path)
        }), i = `${JSON.stringify(t, null, 2)}
`;
        await this.fileService.exists(n) ? await this.fileService.writeFile(n, wi.fromString(i)) : await this.fileService.createFile(n, wi.fromString(i), {
            overwrite: !0
        });
    }
    async openCanvasPath(e, t) {
        const n = TLe(e);
        if (n !== void 0) return this.openCloudCanvas(n);
        const i = Date.now(), r = this.resolveManagedCanvasPath(e);
        if (!r) return this.logCanvasOpenFailure({
            failureReason: yVt.InvalidCanvasPath
        }), !1;
        if (this._isGlass) {
            try {
                if (await this.commandService.executeCommand("glass.openCanvasTab", {
                    canvasPath: r,
                    ownerAgentId: t?.ownerAgentId,
                    sourceAgentId: t?.ownerAgentId,
                    sourceResource: t?.sourceResource?.toString(),
                    cloudCanvasTitle: t?.cloudCanvasTitle,
                    splitRightInFullscreen: !0
                }) === !1) return PA(this.structuredLogService, "Canvas open skipped: no tab surface available"), !1;
            } catch  {
                return this.logCanvasOpenFailure({
                    failureReason: yVt.BrowserOpenFailed
                }), !1;
            }
            const o = Date.now() - i;
            return $_e(this.structuredLogService, "Canvas opened successfully", {
                durationMs: o,
                viewMode: "glass"
            }), this.analyticsService.trackEvent("canvas_opened", {
                viewMode: "glass",
                durationMs: o,
                cloud: Jxo(r)
            }), !0;
        }
        try {
            const o = new she(r, t), a = this.findCanvasEditorsForPath(r, t?.ownerAgentId).filter(({ editor: h })=>h.resource?.toString() !== o.resource.toString()), [c, ...l] = a, u = c !== void 0 ? this.editorGroupsService.getGroup(c.groupId) : void 0;
            c !== void 0 && u !== void 0 && (await u.replaceEditors([
                {
                    editor: c.editor,
                    replacement: o,
                    options: {
                        pinned: !0
                    }
                }
            ]), l.length > 0 && await this.editorService.closeEditors(l)), await this.editorService.openEditor(o, {
                pinned: !0,
                revealIfOpened: !0,
                revealIfVisible: !0
            }, u ?? _1);
        } catch  {
            return this.logCanvasOpenFailure({
                failureReason: yVt.BrowserOpenFailed
            }), !1;
        }
        const s = Date.now() - i;
        return $_e(this.structuredLogService, "Canvas opened successfully", {
            durationMs: s,
            viewMode: "classic"
        }), this.analyticsService.trackEvent("canvas_opened", {
            viewMode: "classic",
            durationMs: s,
            cloud: Jxo(r)
        }), !0;
    }
    findCanvasEditorsForPath(e, t) {
        const n = new she(e, {
            ownerAgentId: t
        });
        try {
            const i = [];
            for (const r of this.editorGroupsService.groups)for (const s of r.editors)s instanceof she && s.matches(n) && i.push({
                groupId: r.id,
                editor: s
            });
            return i;
        } finally{
            n.dispose();
        }
    }
    async openCloudCanvas(e) {
        if (!this.experimentService.checkFeatureGate(lTe, {
            disableExposureLog: !0
        })) return PA(this.structuredLogService, "Cloud canvas open skipped: feature gate off"), !1;
        const t = Date.now(), n = await this.resolveUserStoreReplicaSource(e);
        if (n !== void 0) return this.openCanvasPath(n, {
            cloudCanvasTitle: this.cloudCanvasTitleFromIndex(n)
        });
        const i = this._isGlass ? "glass" : "classic";
        try {
            if (this._isGlass) {
                const s = rhe(e), o = this.cloudCanvasTitleFromIndex(s);
                if (await this.commandService.executeCommand("glass.openCanvasTab", {
                    canvasPath: s,
                    ...o !== void 0 ? {
                        cloudCanvasTitle: o
                    } : {},
                    splitRightInFullscreen: !0
                }) === !1) return PA(this.structuredLogService, "Cloud canvas open skipped: no tab surface available"), !1;
            } else {
                const s = new she(void 0, {
                    cloudCanvasAddress: e
                }), a = (await this.editorService.openEditor(s, {
                    pinned: !0,
                    revealIfOpened: !0,
                    revealIfVisible: !0
                }, _1))?.input;
                a instanceof she && a !== s && (s.dispose(), a.bumpPreviewEpoch());
            }
        } catch  {
            return this.logCanvasOpenFailure({
                failureReason: yVt.BrowserOpenFailed
            }), !1;
        }
        const r = Date.now() - t;
        return $_e(this.structuredLogService, "Cloud canvas opened", {
            canvasId: e.canvasId,
            viewMode: i,
            durationMs: r
        }), this.analyticsService.trackEvent("canvas_opened", {
            viewMode: i,
            durationMs: r,
            cloud: !0
        }), !0;
    }
    cloudCanvasTitleFromIndex(e) {
        const t = this.getCanvasIndexSnapshot();
        if (t.status !== "ready") return;
        const n = t.entries.find((i)=>Fmt(i.file.path, e))?.name.trim();
        return n !== void 0 && n.length > 0 ? n : void 0;
    }
    async resolveCloudCanvasTitle(e) {
        try {
            if (!this.experimentService.checkFeatureGate(lTe, {
                disableExposureLog: !0
            })) return;
            const t = await this.cursorAuthenticationService.dashboardClient();
            return (await Hp(t.getCanvasMetadata(new T$i({
                storeId: e.storeId,
                canvasId: e.canvasId
            })), ntr))?.metadata?.title?.trim() || void 0;
        } catch  {
            return;
        }
    }
    async resolveCloudCanvasShareState(e) {
        try {
            if (!this.experimentService.checkFeatureGate(lTe, {
                disableExposureLog: !0
            })) return null;
            const t = await this.cursorAuthenticationService.dashboardClient(), i = (await Hp(t.getCanvasMetadata(new T$i({
                storeId: e.storeId,
                canvasId: e.canvasId
            })), ntr))?.metadata;
            return i === void 0 ? null : Rs_(i.toJson());
        } catch  {
            return null;
        }
    }
    async setCloudCanvasVisibility(e, t) {
        switch((await (await this.cursorAuthenticationService.dashboardClient()).setCanvasVisibility(new leo({
            storeId: e.storeId,
            canvasId: e.canvasId,
            visibility: t === "team-view" ? wJe.TEAM_VIEW : wJe.PRIVATE
        }))).visibility){
            case wJe.PRIVATE:
                return "private";
            case wJe.TEAM_VIEW:
                return "team-view";
            default:
                throw new Error("Unexpected canvas visibility in server echo");
        }
    }
    async deleteCloudCanvas(e) {
        await (await this.cursorAuthenticationService.dashboardClient()).deleteCanvas(new ueo({
            storeId: e.storeId,
            canvasId: e.canvasId
        })), this.userCanvasIndex.requestRefresh();
    }
    requestUserCanvasIndexRefresh() {
        this.userCanvasIndex.requestRefresh();
    }
    async openCloudCanvasWithFallback(e) {
        try {
            if (!this.experimentService.checkFeatureGate(lTe, {
                disableExposureLog: !1
            })) return PA(this.structuredLogService, "Cloud canvas open skipped: feature gate off"), !1;
        } catch  {
            return !1;
        }
        if (await this.openCloudCanvas(e)) return !0;
        try {
            return await this.openerService.open(Ee.parse(wzs(e)), {
                openExternal: !0
            }), !0;
        } catch  {
            return !1;
        }
    }
    peekCloudCanvasBundle(e) {
        return this.cloudCanvasBundleCache.get(rhe(e));
    }
    async resolveCloudCanvasBundle(e, t = Ji.None, n) {
        const i = rhe(e);
        let r = this.cloudCanvasResolveFlights.get(i);
        if (n !== void 0) {
            const s = this.cloudCanvasContentRevisions.get(i);
            s === void 0 ? (this.cloudCanvasContentRevisions.set(i, n), r?.isInFlight === !0 && r.invalidate()) : n > s && (this.cloudCanvasContentRevisions.set(i, n), r?.invalidate());
        }
        return r === void 0 && (r = new ZMe, this.cloudCanvasResolveFlights.set(i, r)), ZL(r.run(async (s)=>{
            const o = await this.doResolveCloudCanvasBundle(e);
            return s.throwIfStale(), o.status === "ready" && this.cloudCanvasBundleCache.set(i, o), o;
        }), t);
    }
    async doResolveCloudCanvasBundle(e) {
        const t = Date.now();
        if (!this.experimentService.checkFeatureGate(lTe, {
            disableExposureLog: !0
        })) return {
            status: "error",
            reason: "gate_off"
        };
        let n;
        for(let s = 0;; s++)try {
            const o = await this.cursorAuthenticationService.dashboardClient();
            n = await Hp(o.getCanvasPayload(new ceo({
                storeId: e.storeId,
                canvasId: e.canvasId
            })), ntr);
            break;
        } catch (o) {
            const a = Ks_(o);
            if (a === "not_found" && s < this.cloudCanvasNotFoundRetryDelaysMs.length) {
                await Kl(this.cloudCanvasNotFoundRetryDelaysMs[s]);
                continue;
            }
            return PA(this.structuredLogService, "Cloud canvas resolve failed: fetch", {
                canvasId: e.canvasId,
                reason: a,
                errorName: o instanceof Error ? o.name : "unknown"
            }), {
                status: "error",
                reason: a
            };
        }
        if (n === void 0) return PA(this.structuredLogService, "Cloud canvas resolve failed: fetch timeout", {
            canvasId: e.canvasId,
            waitedMs: Date.now() - t
        }), {
            status: "error",
            reason: "fetch_failed"
        };
        const i = n.metadata;
        if (i === void 0 || i.storeId !== e.storeId || i.canvasId.toLowerCase() !== e.canvasId) return PA(this.structuredLogService, "Cloud canvas resolve failed: response identity mismatch", {
            canvasId: e.canvasId
        }), {
            status: "error",
            reason: "fetch_failed"
        };
        const r = n.renderBundleGzip;
        if (r.byteLength > nLh) return {
            status: "error",
            reason: "too_large"
        };
        if (!Ms_(r)) return {
            status: "error",
            reason: "invalid_bundle"
        };
        if (!this.canvasServerProvider && (!await this.waitForProvider(this._providerWaitTimeoutMs) || !this.canvasServerProvider)) return PA(this.structuredLogService, "Cloud canvas resolve failed: provider timeout", {
            canvasId: e.canvasId,
            waitedMs: Date.now() - t
        }), {
            status: "error",
            reason: "provider_unavailable"
        };
        try {
            const s = await this.canvasServerProvider.stageCloudCanvasBundle(r);
            return $_e(this.structuredLogService, "Cloud canvas bundle resolved", {
                canvasId: e.canvasId,
                durationMs: Date.now() - t
            }), {
                status: "ready",
                bundle: {
                    file: Ls_(e, s),
                    title: i.title?.trim() || void 0
                }
            };
        } catch (s) {
            return PA(this.structuredLogService, "Cloud canvas resolve failed: staging exception", {
                canvasId: e.canvasId,
                errorName: s instanceof Error ? s.name : "unknown"
            }), {
                status: "error",
                reason: "provider_unavailable"
            };
        }
    }
    async registerCanvasSession(e) {
        const t = Date.now();
        let n = !1;
        if (!this.canvasServerProvider && (n = !0, !await this.waitForProvider(this._providerWaitTimeoutMs) || !this.canvasServerProvider)) {
            PA(this.structuredLogService, "Canvas session acquire failed: provider timeout", {
                waitedMs: Date.now() - t
            });
            return;
        }
        let i;
        try {
            const r = await this.canvasServerProvider.registerCanvas(e);
            if (!r.canvasId) {
                PA(this.structuredLogService, "Canvas session acquire failed: registration returned no id");
                return;
            }
            i = r.canvasId;
            const s = await this.canvasServerProvider.getCanvasUrl(i);
            if (!s) {
                PA(this.structuredLogService, "Canvas session acquire failed: no URL returned", {
                    canvasId: i
                }), await this.destroyCanvas(i).catch(()=>{});
                return;
            }
            const o = await this.urlResolver.getCanvasUrl(i, s), a = i;
            return $_e(this.structuredLogService, "Canvas session acquired", {
                canvasId: a,
                durationMs: Date.now() - t,
                waitedForProvider: n
            }), {
                canvasId: a,
                url: o
            };
        } catch  {
            i && await this.destroyCanvas(i).catch(()=>{}), PA(this.structuredLogService, "Canvas session acquire failed: exception", {
                canvasId: i,
                durationMs: Date.now() - t
            });
            return;
        }
    }
    async acquireSession(e, t) {
        const n = t?.kind ?? "source", i = `${n}:${Uzc(e)}`;
        for(;;){
            let r = this.canvasSessionsByPath.get(i);
            if (r?.teardownPromise) {
                await r.teardownPromise.catch(()=>{});
                continue;
            }
            r || (r = {
                registrationPromise: this.registerCanvasSession({
                    kind: n,
                    path: e
                }),
                referenceCount: 0,
                teardownPromise: void 0
            }, this.canvasSessionsByPath.set(i, r));
            const s = await r.registrationPromise;
            if (!s) {
                this.canvasSessionsByPath.get(i) === r && this.canvasSessionsByPath.delete(i);
                return;
            }
            if (r.teardownPromise) {
                await r.teardownPromise.catch(()=>{});
                continue;
            }
            r.referenceCount++;
            let o = !1;
            return {
                canvasId: s.canvasId,
                url: s.url,
                dispose: async ()=>{
                    if (o || (o = !0, r.referenceCount--, r.referenceCount > 0)) return;
                    const a = this.destroyCanvas(s.canvasId).finally(()=>{
                        this.canvasSessionsByPath.get(i) === r && this.canvasSessionsByPath.delete(i);
                    });
                    r.teardownPromise = a, await a;
                }
            };
        }
    }
    async getInlinePreviewUrl(e) {
        const t = Date.now(), n = this.resolveManagedCanvasPath(e);
        if (!n) {
            PA(this.structuredLogService, "Canvas inline preview skipped: invalid path");
            return;
        }
        if (!this.canvasServerProvider && (!await this.waitForProvider(3e3) || !this.canvasServerProvider)) {
            MHv(this.structuredLogService, "Canvas inline preview failed: provider timeout", {
                waitedMs: Date.now() - t
            });
            return;
        }
        try {
            const r = await this.canvasServerProvider.registerCanvas({
                kind: "source",
                path: n
            });
            if (!r.canvasId) {
                PA(this.structuredLogService, "Canvas inline preview failed: registration returned no id");
                return;
            }
            const s = await this.canvasServerProvider.getCanvasUrl(r.canvasId, !0);
            if (!s) {
                PA(this.structuredLogService, "Canvas inline preview failed: no URL", {
                    canvasId: r.canvasId
                });
                return;
            }
            return await this.urlResolver.getCanvasUrl(r.canvasId, s);
        } catch (r) {
            PA(this.structuredLogService, "Canvas inline preview failed: exception", {
                durationMs: Date.now() - t,
                errorName: r instanceof Error ? r.name : "unknown"
            });
            return;
        }
    }
    async destroyCanvas(e) {
        if (!this.canvasServerProvider) {
            await this.urlResolver.disposeCanvasTunnel(e), PA(this.structuredLogService, "Canvas destroy skipped: no provider", {
                canvasId: e
            });
            return;
        }
        try {
            await this.canvasServerProvider.destroyCanvas(e), $_e(this.structuredLogService, "Canvas destroyed", {
                canvasId: e
            });
        } finally{
            await this.urlResolver.disposeCanvasTunnel(e);
        }
    }
    async shareCanvas(e, t, n = Ji.None) {
        const i = Date.now(), r = tj(e);
        if (!this.canvasServerProvider && (!await this.waitForProvider(this._providerWaitTimeoutMs) || !this.canvasServerProvider)) return PA(this.structuredLogService, "Canvas shareCanvas failed: provider timeout", {
            waitedMs: Date.now() - i
        }), {
            kind: "failure",
            reason: "provider_unavailable"
        };
        const s = this.canvasServerProvider;
        let o = !1;
        try {
            const a = await ZL(Hp(Promise.resolve(s.shareCanvas(r, t, n)), aIo, ()=>{
                o = !0, PA(this.structuredLogService, "Canvas shareCanvas failed: operation timeout", {
                    durationMs: Date.now() - i,
                    timeoutMs: aIo
                });
            }), n);
            return a === void 0 ? n.isCancellationRequested ? (PA(this.structuredLogService, "Canvas shareCanvas failed: cancelled", {
                durationMs: Date.now() - i
            }), {
                kind: "failure",
                reason: "cancelled"
            }) : o ? {
                kind: "failure",
                reason: "timed_out"
            } : {
                kind: "failure",
                reason: "provider_unavailable"
            } : {
                kind: "success",
                result: a
            };
        } catch (a) {
            return ja(a) || a instanceof Rl ? (PA(this.structuredLogService, "Canvas shareCanvas failed: cancelled", {
                durationMs: Date.now() - i
            }), {
                kind: "failure",
                reason: "cancelled"
            }) : (PA(this.structuredLogService, "Canvas shareCanvas failed: exception", {
                durationMs: Date.now() - i,
                errorName: a instanceof Error ? a.name : "unknown"
            }), {
                kind: "failure",
                reason: "provider_unavailable",
                message: Fs_(a)
            });
        }
    }
    async deleteCanvasShare(e) {
        try {
            await (await this.cursorAuthenticationService.dashboardClient()).deleteSharedCanvas(new oeo({
                shareId: e
            })), $_e(this.structuredLogService, "Deleted shared canvas", {
                shareId: e
            });
        } catch (t) {
            const n = t instanceof Error ? t.name : "unknown";
            throw PA(this.structuredLogService, "Canvas deleteCanvasShare failed", {
                shareId: e,
                errorName: n
            }), t;
        }
    }
    async lookupShareForCanvas(e) {
        const t = tj(e);
        let n;
        try {
            const i = await this.cursorAuthenticationService.getAccessToken();
            if (i === void 0) {
                PA(this.structuredLogService, "Canvas lookupShareForCanvas: no access token; treating as never-shared");
                return;
            }
            const r = this.cursorAuthenticationService.getAuthIdFromToken(i);
            if (r === void 0) {
                PA(this.structuredLogService, "Canvas lookupShareForCanvas: could not derive authId; treating as never-shared");
                return;
            }
            const s = Bzc(this.storageService);
            n = await Fzc({
                authId: r,
                canvasPath: t,
                localSalt: s
            });
        } catch (i) {
            const r = i instanceof Error ? i.name : "unknown";
            PA(this.structuredLogService, "Canvas lookupShareForCanvas: failed to compute canvas_key", {
                errorName: r
            });
            return;
        }
        try {
            const r = await (await this.cursorAuthenticationService.dashboardClient()).lookupSharedCanvasByKey(new aeo({
                canvasKey: n
            }));
            if (r.shareId === void 0 || r.visibility === void 0 || r.shareUrl === void 0 || r.updatedAt === void 0) return;
            const s = r.visibility === rHt.TEAM ? "team" : "private";
            return {
                shareId: r.shareId,
                shareUrl: r.shareUrl,
                visibility: s,
                updatedAt: r.updatedAt
            };
        } catch (i) {
            const r = i instanceof Error ? i.name : "unknown";
            PA(this.structuredLogService, "Canvas lookupShareForCanvas: backend lookup failed", {
                errorName: r
            });
            return;
        }
    }
}, ent.USER_CANVAS_LIST_PAGE_SIZE = 50, ent.USER_CANVAS_LIST_MAX_PAGES = 20, ent = ie([
    C(0, $n),
    C(1, Xh),
    C(2, Yi),
    C(3, I2),
    C(4, aL),
    C(5, hn),
    C(6, gs),
    C(7, ca),
    C(8, na),
    C(9, yn),
    C(10, Ii),
    C(11, Ea),
    C(12, Jn),
    C(13, zl),
    C(14, rc),
    C(15, Kr),
    C(16, eo)
], ent), ki.registerCommand("canvas.handleCanvasError", (e, t, n, i)=>{
    const r = e.get(z$);
    (i === "runtime-error" || i === "compile-error" || i === "canvas-missing") && r.fireCanvasError({
        canvasId: t,
        error: n,
        errorKind: i
    });
}), ki.registerCommand("canvas.handleCanvasErrorCleared", (e, t)=>{
    e.get(z$).fireCanvasErrorCleared(t);
}), mn(z$, ent, 1);

}

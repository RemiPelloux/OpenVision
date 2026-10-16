import { GPe, iuk, n3, ruk } from "./Aeg.js";
import { Ei, Ga, Gt, Hc, Pn, Qe, Tr, Vh, Wd, Ya, aO, da, en, st, tt } from "./Iwo.js";
import { GYd, KYd, Pwe, dIr, dne, fRe, oSt, qYd } from "./LYd.js";
import { bn, jn } from "./SZu.js";
import { Als, JCk, KCk, QSg, Shl, VSg, XCk, ZSg, aRn, aTk, cMe, d9e, dTk, khl, nTk, oTe, rTk, sTk, uTk, zCk } from "./Ycg.js";
import { eQn } from "./agent-store-commands.ts";
import { QZn } from "./agent-store-ids.ts";
import { Qr, Ss } from "./aiMiscServices.js";
import { c_, ype } from "./async.cursor.js";
import { qn } from "./async.js";
import { Rs, ss } from "./authenticationService.js";
import { kl } from "./browser.ts";
import { Xs, yo } from "./cancellation.js";
import { Chl, IVt, XSg, h9e } from "./canvas-index.js";
import { XYd, jD } from "./canvas.js";
import { aTe, yhl } from "./canvasEditorInput.js";
import { pxn, vis } from "./canvasLogger.js";
import { xls } from "./canvasNavigationCommands.js";
import { eTk, qSg } from "./canvasUrlResolver.js";
import { HSg, bhl, dMe, uMe } from "./cloudCanvas.js";
import { VCk } from "./cloudCanvasShare.js";
import { hs, nr, rs } from "./commands.js";
import { dp } from "./connect.js";
import { Ag } from "./connectErrors.js";
import { $Ba, BBa, Du, FBa, UBa, jBa, lTn, rKr, sKr, z0t } from "./dashboard_pb.js";
import { Ld, _a } from "./editorGroupsService.js";
import { Wo, cB, gr } from "./editorService.js";
import { fo, ps } from "./environmentService.js";
import { Cr, _s } from "./experimentService.js";
import { Rn } from "./extensions.js";
import { is, ms } from "./files.js";
import { cTt } from "./gYa.js";
import { Od, Tc } from "./host.js";
import { nl } from "./index.ts";
import { It } from "./instantiation.js";
import { HGr, WGr } from "./ipa.js";
import { kc, qc } from "./opener.js";
import { Rd, ih } from "./pathService.js";
import { UM, w6 } from "./remoteAuthorityResolver.js";
import { Lr, Os } from "./resources.js";
import { Dls } from "./shareCanvasUtils.js";
import { Zi, ki } from "./storage_2.js";
import { Cm, wh } from "./structuredLog.js";
import { E } from "./tslib.es6.js";
import { eF, tF } from "./tunnel.js";
import { fn, rt } from "./uri.js";
import { Vp, nh } from "./uriIdentity.js";
import { F, Re } from "./userDataProfile.js";
import { gT } from "./utils_24.js";
import { Sr, yr } from "./workspace.js";
import { C2 } from "./workspaceProjectPaths.js";
import { BCt, WM } from "./yBp.js";
var P6, Thl, Ols, JSg, gEt;
export { JSg, Ols, P6, Thl, gEt };
var __wakaru_cme_initialized = false;
export function cme() {
if (__wakaru_cme_initialized) return;
__wakaru_cme_initialized = true;
"use strict";
E(), xls(), nl(), Ga(), qn(), c_(), yo(), Gt(), Lr(), fn(), Qe(), ms(), rs(), VCk(), kl(), Vp(), qc(), Sr(), Rn(), It(), Ei(), UM(), tF(), jD(), dMe(), Dls(), eTk(), vis(), fo(), Cm(), Wo(), Ld(), Ss(), Rs(), Zi(), ih(), C2(), yhl(), _s(), dp(), Du(), IVt(), Od(), gT(), Ag(), P6 = jn("canvasService"), Thl = 12e4, Ols = 3e4, JSg = [
    1e3,
    2e3
], gEt = class extends st {
    constructor(t, e, n, i, r, s, o, a, l, c, u, d, h, p, g, f, _){
        super(), this.commandService = t, this.structuredLogService = e, this.editorService = s, this.editorGroupsService = o, this.analyticsService = a, this.cursorAuthenticationService = l, this.storageService = c, this.fileService = u, this.uriIdentityService = d, this.workspaceContextService = h, this.pathService = p, this.hostService = g, this.experimentService = f, this.openerService = _, this.cloudCanvasNotFoundRetryDelaysMs = JSg, this._providerReadyResolvers = [], this.canvasSessionsByPath = new Map, this.cloudCanvasResolveFlights = this._register(new da), this.cloudCanvasContentRevisions = new Map, this.cloudCanvasBundleCache = new Map, this._onCanvasError = this._register(new tt), this.onCanvasError = this._onCanvasError.event, this._canvasErrors = new Map, this._onCanvasErrorCleared = this._register(new tt), this.onCanvasErrorCleared = this._onCanvasErrorCleared.event, this.cloudCanvasIndexes = this._register(new da), this._mergedCanvasIndexSnapshot = h9e, this._isGlass = !!n.isGlass, this._providerWaitTimeoutMs = n.enableSmokeTestDriver ? 9e4 : 1e4, this.urlResolver = this._register(new qSg(n, i, r, this.structuredLogService)), this.canvasIndex = this._register(new XSg(this.fileService, this.uriIdentityService, async ()=>{
            const b = this.workspaceContextService.getWorkspace();
            return cTt(b, this.pathService);
        }, en.any(this.workspaceContextService.onDidChangeWorkbenchState, this.workspaceContextService.onDidChangeWorkspaceFolders))), this.userCanvasIndex = this._register(new Chl({
            focus: this.hostService,
            query: (b)=>this.queryUserCanvasIndex(b),
            uriIdentityService: this.uriIdentityService,
            focusedIntervalMs: 3e4,
            unfocusedIntervalMs: 6e4,
            maxIntervalMs: 6e4,
            isCancellation: (b)=>WM(b) || Ya(b)
        })), this.onDidChangeCanvasIndex = en.map(en.any(this.canvasIndex.onDidChange, this.userCanvasIndex.onDidChange), ()=>this.getCanvasIndexSnapshot()), this.onDidChangeUserCanvasIndex = this.userCanvasIndex.onDidChange;
    }
    getCanvasError(t) {
        return this._canvasErrors.get(t);
    }
    fireCanvasError(t) {
        this._canvasErrors.set(t.canvasId, t), this._onCanvasError.fire(t);
    }
    fireCanvasErrorCleared(t) {
        this._canvasErrors.delete(t), this._onCanvasErrorCleared.fire(t);
    }
    getCanvasIndexSnapshot() {
        const t = Shl(this.canvasIndex.getSnapshot(), this.userCanvasIndex.getSnapshot());
        return khl(this._mergedCanvasIndexSnapshot, t, this.uriIdentityService) ? this._mergedCanvasIndexSnapshot : (this._mergedCanvasIndexSnapshot = t, t);
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
            const e = await (await this.cursorAuthenticationService.dashboardClient()).listUserCanvases(new rKr({
                pageSize: 1,
                pageToken: ""
            }), {
                headers: BCt(!0)
            });
            this.rememberUserStoreId(e.canvases[0]?.storeId);
        } catch  {}
        return this._cachedUserStoreId;
    }
    async resolveUserCloudCanvasAddress(t) {
        const e = VSg(this.userCanvasIndex.getSnapshot(), t);
        if (e !== void 0) return this.rememberUserStoreId(e.storeId), e;
        const n = await this.resolveUserStoreId();
        if (n !== void 0) return aRn({
            storeId: n,
            canvasId: t
        });
    }
    async queryUserCanvasIndex(t) {
        if (t.throwIfAborted(), !this.experimentService.checkFeatureGate(uMe, {
            disableExposureLog: !0
        })) return {
            status: "ready",
            entries: []
        };
        try {
            const e = await this.resolveUserStoreCanvasesDir();
            if (t.throwIfAborted(), e !== void 0 && await this.fileService.exists(e)) {
                const n = await rTk({
                    fileService: this.fileService,
                    canvasesDir: e,
                    signal: t
                });
                let i = {
                    status: "unavailable"
                }, r = !1;
                try {
                    i = await this.queryUserCanvasIndexViaRpc(t);
                } catch (o) {
                    if (WM(o) || t.aborted) throw o;
                    r = !0;
                }
                const s = sTk(n, i);
                return this.rememberUserStoreIdFromSnapshot(s), r ? {
                    snapshot: s,
                    shouldBackoff: !0
                } : s;
            }
            return await this.queryUserCanvasIndexViaRpc(t);
        } catch (e) {
            if (WM(e) || t.aborted) throw e;
            return {
                status: "unavailable"
            };
        }
    }
    async resolveAgentStoreScopePath(t) {
        let e;
        try {
            e = await this.commandService.executeCommand(eQn, {
                agentId: t.agentId,
                mount: t.mount
            });
        } catch  {
            return;
        }
        const n = e?.scopes?.find((i)=>i.scope === t.scope)?.path;
        return n !== void 0 && n.length > 0 ? n : void 0;
    }
    async resolveUserStoreCanvasesDir() {
        const t = await this.resolveAgentStoreScopePath({
            agentId: "",
            mount: "self",
            scope: "user"
        });
        if (t !== void 0) return Os(rt.file(t), QZn);
    }
    rememberUserStoreId(t) {
        t === void 0 || !HGr(t) || (this._cachedUserStoreId = t);
    }
    rememberUserStoreIdFromSnapshot(t) {
        if (t.status === "ready") for (const e of t.entries){
            const n = cMe(e.file.path);
            if (n !== void 0) {
                this.rememberUserStoreId(n.storeId);
                return;
            }
        }
    }
    async resolveUserStoreReplicaSource(t) {
        const e = this.userCanvasIndex.getSnapshot();
        if (e.status === "ready") {
            for (const r of e.entries)if (d9e(r.file.path)?.canvasId === t.canvasId) return r.file.path;
        }
        const n = await this.resolveUserStoreCanvasesDir();
        if (n === void 0) return;
        const i = Os(n, t.canvasId, bhl);
        return await this.fileService.exists(i) ? i.fsPath : void 0;
    }
    async queryUserCanvasIndexViaRpc(t) {
        const e = await this.cursorAuthenticationService.dashboardClient(), n = [];
        let i = "";
        for(let r = 0; r < gEt.USER_CANVAS_LIST_MAX_PAGES; r++){
            t.throwIfAborted();
            const s = await e.listUserCanvases(new rKr({
                pageSize: gEt.USER_CANVAS_LIST_PAGE_SIZE,
                pageToken: i
            }), {
                signal: t,
                headers: BCt(!0)
            });
            for (const a of s.canvases){
                this.rememberUserStoreId(a.storeId);
                const l = aTk({
                    storeId: a.storeId,
                    canvasId: a.canvasId,
                    title: a.title,
                    updatedAt: a.updatedAt
                });
                l !== void 0 && n.push(l);
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
    getCloudCanvasIndex({ ownerAgentId: t, sourceDirectory: e }) {
        const n = `${t}\0${this.uriIdentityService.extUri.getComparisonKey(e)}`;
        let i = this.cloudCanvasIndexes.get(n);
        return i !== void 0 || (i = new Chl({
            focus: this.hostService,
            query: async (r)=>{
                r.throwIfAborted();
                const s = await this.resolveAgentStoreScopePath({
                    agentId: t,
                    mount: "peer",
                    scope: "agent"
                });
                if (r.throwIfAborted(), s === void 0) return {
                    status: "ready",
                    entries: []
                };
                const o = this.workspaceContextService.resolveRelativePath(s), a = rt.joinPath(o, "artifacts", ...XYd.split("/"));
                return nTk({
                    fileService: this.fileService,
                    bundleDirectory: a,
                    sourceDirectory: e,
                    signal: r
                });
            },
            uriIdentityService: this.uriIdentityService
        }), this.cloudCanvasIndexes.set(n, i)), i;
    }
    registerCanvasServerProvider(t) {
        this.canvasServerProvider = t;
        for (const e of this._providerReadyResolvers)e();
        return this._providerReadyResolvers = [], Pn(()=>{
            this.canvasServerProvider === t && (this.canvasServerProvider = void 0);
        });
    }
    waitForProvider(t) {
        return this.canvasServerProvider ? Promise.resolve(!0) : new Promise((e)=>{
            const n = setTimeout(()=>e(!1), t);
            this._providerReadyResolvers.push(()=>{
                clearTimeout(n), e(!0);
            });
        });
    }
    resolveManagedCanvasPath(t) {
        const e = dne(t);
        if (!(!dIr(e) || !Pwe(e))) return e;
    }
    logCanvasOpenFailure(t) {
        ruk(this.structuredLogService, t);
    }
    async getManagedCanvasesDirectory() {
        const t = this.workspaceContextService.getWorkspace(), e = await cTt(t, this.pathService);
        return await this.fileService.createFolder(e), e;
    }
    async createManagedCanvasFile(t, e) {
        const n = await this.getManagedCanvasesDirectory(), i = ZSg(t), r = await dTk(this.fileService, n, i), s = r.fsPath;
        if (!Pwe(s)) throw new Error(`Refusing to write canvas file at non-managed path: ${s}`);
        return await this.fileService.createFile(r, Tr.fromString(e)), {
            path: s,
            resource: r
        };
    }
    async ensureManagedCanvasFile(t, e) {
        const n = await this.getManagedCanvasesDirectory(), i = QSg(n, t), r = i.fsPath;
        if (!Pwe(r)) throw new Error(`Refusing to write canvas file at non-managed path: ${r}`);
        let s = !0;
        if (await this.fileService.exists(i)) try {
            s = (await this.fileService.readFile(i)).value.toString() !== e;
        } catch  {
            s = !0;
        }
        return s && await this.fileService.createFile(i, Tr.fromString(e), {
            overwrite: !0
        }), {
            path: r,
            resource: i
        };
    }
    async writeManagedCanvasDataFile(t, e) {
        if (!Pwe(t.fsPath)) throw new Error(`Refusing to write canvas data beside non-managed path: ${t.fsPath}`);
        const n = t.with({
            path: KYd(t.path)
        }), i = `${JSON.stringify(e, null, 2)}
`;
        await this.fileService.exists(n) ? await this.fileService.writeFile(n, Tr.fromString(i)) : await this.fileService.createFile(n, Tr.fromString(i), {
            overwrite: !0
        });
    }
    async openCanvasPath(t, e) {
        const n = cMe(t);
        if (n !== void 0) return this.openCloudCanvas(n);
        const i = Date.now(), r = this.resolveManagedCanvasPath(t);
        if (!r) return this.logCanvasOpenFailure({
            failureReason: pxn.InvalidCanvasPath
        }), !1;
        if (this._isGlass) {
            try {
                if (await this.commandService.executeCommand("glass.openCanvasTab", {
                    canvasPath: r,
                    ownerAgentId: e?.ownerAgentId,
                    sourceAgentId: e?.ownerAgentId,
                    sourceResource: e?.sourceResource?.toString(),
                    cloudCanvasTitle: e?.cloudCanvasTitle,
                    splitRightInFullscreen: !0
                }) === !1) return n3(this.structuredLogService, "Canvas open skipped: no tab surface available"), !1;
            } catch  {
                return this.logCanvasOpenFailure({
                    failureReason: pxn.BrowserOpenFailed
                }), !1;
            }
            const o = Date.now() - i;
            return GPe(this.structuredLogService, "Canvas opened successfully", {
                durationMs: o,
                viewMode: "glass"
            }), this.analyticsService.trackEvent("canvas_opened", {
                viewMode: "glass",
                durationMs: o,
                cloud: Als(r)
            }), !0;
        }
        try {
            const o = new aTe(r, e), a = this.findCanvasEditorsForPath(r, e?.ownerAgentId).filter(({ editor: d })=>d.resource?.toString() !== o.resource.toString()), [l, ...c] = a, u = l !== void 0 ? this.editorGroupsService.getGroup(l.groupId) : void 0;
            l !== void 0 && u !== void 0 && (await u.replaceEditors([
                {
                    editor: l.editor,
                    replacement: o,
                    options: {
                        pinned: !0
                    }
                }
            ]), c.length > 0 && await this.editorService.closeEditors(c)), await this.editorService.openEditor(o, {
                pinned: !0,
                revealIfOpened: !0,
                revealIfVisible: !0
            }, u ?? cB);
        } catch  {
            return this.logCanvasOpenFailure({
                failureReason: pxn.BrowserOpenFailed
            }), !1;
        }
        const s = Date.now() - i;
        return GPe(this.structuredLogService, "Canvas opened successfully", {
            durationMs: s,
            viewMode: "classic"
        }), this.analyticsService.trackEvent("canvas_opened", {
            viewMode: "classic",
            durationMs: s,
            cloud: Als(r)
        }), !0;
    }
    findCanvasEditorsForPath(t, e) {
        const n = new aTe(t, {
            ownerAgentId: e
        });
        try {
            const i = [];
            for (const r of this.editorGroupsService.groups)for (const s of r.editors)s instanceof aTe && s.matches(n) && i.push({
                groupId: r.id,
                editor: s
            });
            return i;
        } finally{
            n.dispose();
        }
    }
    async openCloudCanvas(t) {
        if (!this.experimentService.checkFeatureGate(uMe, {
            disableExposureLog: !0
        })) return n3(this.structuredLogService, "Cloud canvas open skipped: feature gate off"), !1;
        const e = Date.now(), n = await this.resolveUserStoreReplicaSource(t);
        if (n !== void 0) return this.openCanvasPath(n, {
            cloudCanvasTitle: this.cloudCanvasTitleFromIndex(n)
        });
        const i = this._isGlass ? "glass" : "classic";
        try {
            if (this._isGlass) {
                const s = oTe(t), o = this.cloudCanvasTitleFromIndex(s);
                if (await this.commandService.executeCommand("glass.openCanvasTab", {
                    canvasPath: s,
                    ...o !== void 0 ? {
                        cloudCanvasTitle: o
                    } : {},
                    splitRightInFullscreen: !0
                }) === !1) return n3(this.structuredLogService, "Cloud canvas open skipped: no tab surface available"), !1;
            } else {
                const s = new aTe(void 0, {
                    cloudCanvasAddress: t
                }), a = (await this.editorService.openEditor(s, {
                    pinned: !0,
                    revealIfOpened: !0,
                    revealIfVisible: !0
                }, cB))?.input;
                a instanceof aTe && a !== s && (s.dispose(), a.bumpPreviewEpoch());
            }
        } catch  {
            return this.logCanvasOpenFailure({
                failureReason: pxn.BrowserOpenFailed
            }), !1;
        }
        const r = Date.now() - e;
        return GPe(this.structuredLogService, "Cloud canvas opened", {
            canvasId: t.canvasId,
            viewMode: i,
            durationMs: r
        }), this.analyticsService.trackEvent("canvas_opened", {
            viewMode: i,
            durationMs: r,
            cloud: !0
        }), !0;
    }
    cloudCanvasTitleFromIndex(t) {
        const e = this.getCanvasIndexSnapshot();
        if (e.status !== "ready") return;
        const n = e.entries.find((i)=>fRe(i.file.path, t))?.name.trim();
        return n !== void 0 && n.length > 0 ? n : void 0;
    }
    async resolveCloudCanvasTitle(t) {
        try {
            if (!this.experimentService.checkFeatureGate(uMe, {
                disableExposureLog: !0
            })) return;
            const e = await this.cursorAuthenticationService.dashboardClient();
            return (await Vh(e.getCanvasMetadata(new sKr({
                storeId: t.storeId,
                canvasId: t.canvasId
            })), Ols))?.metadata?.title?.trim() || void 0;
        } catch  {
            return;
        }
    }
    async resolveCloudCanvasShareState(t) {
        try {
            if (!this.experimentService.checkFeatureGate(uMe, {
                disableExposureLog: !0
            })) return null;
            const e = await this.cursorAuthenticationService.dashboardClient(), i = (await Vh(e.getCanvasMetadata(new sKr({
                storeId: t.storeId,
                canvasId: t.canvasId
            })), Ols))?.metadata;
            return i === void 0 ? null : zCk(i.toJson());
        } catch  {
            return null;
        }
    }
    async setCloudCanvasVisibility(t, e) {
        switch((await (await this.cursorAuthenticationService.dashboardClient()).setCanvasVisibility(new jBa({
            storeId: t.storeId,
            canvasId: t.canvasId,
            visibility: e === "team-view" ? z0t.TEAM_VIEW : z0t.PRIVATE
        }))).visibility){
            case z0t.PRIVATE:
                return "private";
            case z0t.TEAM_VIEW:
                return "team-view";
            default:
                throw new Error("Unexpected canvas visibility in server echo");
        }
    }
    async deleteCloudCanvas(t) {
        await (await this.cursorAuthenticationService.dashboardClient()).deleteCanvas(new $Ba({
            storeId: t.storeId,
            canvasId: t.canvasId
        })), this.userCanvasIndex.requestRefresh();
    }
    requestUserCanvasIndexRefresh() {
        this.userCanvasIndex.requestRefresh();
    }
    async openCloudCanvasWithFallback(t) {
        try {
            if (!this.experimentService.checkFeatureGate(uMe, {
                disableExposureLog: !1
            })) return n3(this.structuredLogService, "Cloud canvas open skipped: feature gate off"), !1;
        } catch  {
            return !1;
        }
        if (await this.openCloudCanvas(t)) return !0;
        try {
            return await this.openerService.open(rt.parse(WGr(t)), {
                openExternal: !0
            }), !0;
        } catch  {
            return !1;
        }
    }
    peekCloudCanvasBundle(t) {
        return this.cloudCanvasBundleCache.get(oTe(t));
    }
    async resolveCloudCanvasBundle(t, e = Xs.None, n) {
        const i = oTe(t);
        let r = this.cloudCanvasResolveFlights.get(i);
        if (n !== void 0) {
            const s = this.cloudCanvasContentRevisions.get(i);
            s === void 0 ? (this.cloudCanvasContentRevisions.set(i, n), r?.isInFlight === !0 && r.invalidate()) : n > s && (this.cloudCanvasContentRevisions.set(i, n), r?.invalidate());
        }
        return r === void 0 && (r = new ype, this.cloudCanvasResolveFlights.set(i, r)), aO(r.run(async (s)=>{
            const o = await this.doResolveCloudCanvasBundle(t);
            return s.throwIfStale(), o.status === "ready" && this.cloudCanvasBundleCache.set(i, o), o;
        }), e);
    }
    async doResolveCloudCanvasBundle(t) {
        const e = Date.now();
        if (!this.experimentService.checkFeatureGate(uMe, {
            disableExposureLog: !0
        })) return {
            status: "error",
            reason: "gate_off"
        };
        let n;
        for(let s = 0;; s++)try {
            const o = await this.cursorAuthenticationService.dashboardClient();
            n = await Vh(o.getCanvasPayload(new UBa({
                storeId: t.storeId,
                canvasId: t.canvasId
            })), Ols);
            break;
        } catch (o) {
            const a = uTk(o);
            if (a === "not_found" && s < this.cloudCanvasNotFoundRetryDelaysMs.length) {
                await Wd(this.cloudCanvasNotFoundRetryDelaysMs[s]);
                continue;
            }
            return n3(this.structuredLogService, "Cloud canvas resolve failed: fetch", {
                canvasId: t.canvasId,
                reason: a,
                errorName: o instanceof Error ? o.name : "unknown"
            }), {
                status: "error",
                reason: a
            };
        }
        if (n === void 0) return n3(this.structuredLogService, "Cloud canvas resolve failed: fetch timeout", {
            canvasId: t.canvasId,
            waitedMs: Date.now() - e
        }), {
            status: "error",
            reason: "fetch_failed"
        };
        const i = n.metadata;
        if (i === void 0 || i.storeId !== t.storeId || i.canvasId.toLowerCase() !== t.canvasId) return n3(this.structuredLogService, "Cloud canvas resolve failed: response identity mismatch", {
            canvasId: t.canvasId
        }), {
            status: "error",
            reason: "fetch_failed"
        };
        const r = n.renderBundleGzip;
        if (r.byteLength > HSg) return {
            status: "error",
            reason: "too_large"
        };
        if (!KCk(r)) return {
            status: "error",
            reason: "invalid_bundle"
        };
        if (!this.canvasServerProvider && (!await this.waitForProvider(this._providerWaitTimeoutMs) || !this.canvasServerProvider)) return n3(this.structuredLogService, "Cloud canvas resolve failed: provider timeout", {
            canvasId: t.canvasId,
            waitedMs: Date.now() - e
        }), {
            status: "error",
            reason: "provider_unavailable"
        };
        try {
            const s = await this.canvasServerProvider.stageCloudCanvasBundle(r);
            return GPe(this.structuredLogService, "Cloud canvas bundle resolved", {
                canvasId: t.canvasId,
                durationMs: Date.now() - e
            }), {
                status: "ready",
                bundle: {
                    file: XCk(t, s),
                    title: i.title?.trim() || void 0
                }
            };
        } catch (s) {
            return n3(this.structuredLogService, "Cloud canvas resolve failed: staging exception", {
                canvasId: t.canvasId,
                errorName: s instanceof Error ? s.name : "unknown"
            }), {
                status: "error",
                reason: "provider_unavailable"
            };
        }
    }
    async registerCanvasSession(t) {
        const e = Date.now();
        let n = !1;
        if (!this.canvasServerProvider && (n = !0, !await this.waitForProvider(this._providerWaitTimeoutMs) || !this.canvasServerProvider)) {
            n3(this.structuredLogService, "Canvas session acquire failed: provider timeout", {
                waitedMs: Date.now() - e
            });
            return;
        }
        let i;
        try {
            const r = await this.canvasServerProvider.registerCanvas(t);
            if (!r.canvasId) {
                n3(this.structuredLogService, "Canvas session acquire failed: registration returned no id");
                return;
            }
            i = r.canvasId;
            const s = await this.canvasServerProvider.getCanvasUrl(i);
            if (!s) {
                n3(this.structuredLogService, "Canvas session acquire failed: no URL returned", {
                    canvasId: i
                }), await this.destroyCanvas(i).catch(()=>{});
                return;
            }
            const o = await this.urlResolver.getCanvasUrl(i, s), a = i;
            return GPe(this.structuredLogService, "Canvas session acquired", {
                canvasId: a,
                durationMs: Date.now() - e,
                waitedForProvider: n
            }), {
                canvasId: a,
                url: o
            };
        } catch  {
            i && await this.destroyCanvas(i).catch(()=>{}), n3(this.structuredLogService, "Canvas session acquire failed: exception", {
                canvasId: i,
                durationMs: Date.now() - e
            });
            return;
        }
    }
    async acquireSession(t, e) {
        const n = e?.kind ?? "source", i = `${n}:${oSt(t)}`;
        for(;;){
            let r = this.canvasSessionsByPath.get(i);
            if (r?.teardownPromise) {
                await r.teardownPromise.catch(()=>{});
                continue;
            }
            r || (r = {
                registrationPromise: this.registerCanvasSession({
                    kind: n,
                    path: t
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
    async getInlinePreviewUrl(t) {
        const e = Date.now(), n = this.resolveManagedCanvasPath(t);
        if (!n) {
            n3(this.structuredLogService, "Canvas inline preview skipped: invalid path");
            return;
        }
        if (!this.canvasServerProvider && (!await this.waitForProvider(3e3) || !this.canvasServerProvider)) {
            iuk(this.structuredLogService, "Canvas inline preview failed: provider timeout", {
                waitedMs: Date.now() - e
            });
            return;
        }
        try {
            const r = await this.canvasServerProvider.registerCanvas({
                kind: "source",
                path: n
            });
            if (!r.canvasId) {
                n3(this.structuredLogService, "Canvas inline preview failed: registration returned no id");
                return;
            }
            const s = await this.canvasServerProvider.getCanvasUrl(r.canvasId, !0);
            if (!s) {
                n3(this.structuredLogService, "Canvas inline preview failed: no URL", {
                    canvasId: r.canvasId
                });
                return;
            }
            return await this.urlResolver.getCanvasUrl(r.canvasId, s);
        } catch (r) {
            n3(this.structuredLogService, "Canvas inline preview failed: exception", {
                durationMs: Date.now() - e,
                errorName: r instanceof Error ? r.name : "unknown"
            });
            return;
        }
    }
    async destroyCanvas(t) {
        if (!this.canvasServerProvider) {
            await this.urlResolver.disposeCanvasTunnel(t), n3(this.structuredLogService, "Canvas destroy skipped: no provider", {
                canvasId: t
            });
            return;
        }
        try {
            await this.canvasServerProvider.destroyCanvas(t), GPe(this.structuredLogService, "Canvas destroyed", {
                canvasId: t
            });
        } finally{
            await this.urlResolver.disposeCanvasTunnel(t);
        }
    }
    async shareCanvas(t, e, n = Xs.None) {
        const i = Date.now(), r = dne(t);
        if (!this.canvasServerProvider && (!await this.waitForProvider(this._providerWaitTimeoutMs) || !this.canvasServerProvider)) return n3(this.structuredLogService, "Canvas shareCanvas failed: provider timeout", {
            waitedMs: Date.now() - i
        }), {
            kind: "failure",
            reason: "provider_unavailable"
        };
        const s = this.canvasServerProvider;
        let o = !1;
        try {
            const a = await aO(Vh(Promise.resolve(s.shareCanvas(r, e, n)), Thl, ()=>{
                o = !0, n3(this.structuredLogService, "Canvas shareCanvas failed: operation timeout", {
                    durationMs: Date.now() - i,
                    timeoutMs: Thl
                });
            }), n);
            return a === void 0 ? n.isCancellationRequested ? (n3(this.structuredLogService, "Canvas shareCanvas failed: cancelled", {
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
            return Ya(a) || a instanceof Hc ? (n3(this.structuredLogService, "Canvas shareCanvas failed: cancelled", {
                durationMs: Date.now() - i
            }), {
                kind: "failure",
                reason: "cancelled"
            }) : (n3(this.structuredLogService, "Canvas shareCanvas failed: exception", {
                durationMs: Date.now() - i,
                errorName: a instanceof Error ? a.name : "unknown"
            }), {
                kind: "failure",
                reason: "provider_unavailable",
                message: JCk(a)
            });
        }
    }
    async deleteCanvasShare(t) {
        try {
            await (await this.cursorAuthenticationService.dashboardClient()).deleteSharedCanvas(new FBa({
                shareId: t
            })), GPe(this.structuredLogService, "Deleted shared canvas", {
                shareId: t
            });
        } catch (e) {
            const n = e instanceof Error ? e.name : "unknown";
            throw n3(this.structuredLogService, "Canvas deleteCanvasShare failed", {
                shareId: t,
                errorName: n
            }), e;
        }
    }
    async lookupShareForCanvas(t) {
        const e = dne(t);
        let n;
        try {
            const i = await this.cursorAuthenticationService.getAccessToken();
            if (i === void 0) {
                n3(this.structuredLogService, "Canvas lookupShareForCanvas: no access token; treating as never-shared");
                return;
            }
            const r = this.cursorAuthenticationService.getAuthIdFromToken(i);
            if (r === void 0) {
                n3(this.structuredLogService, "Canvas lookupShareForCanvas: could not derive authId; treating as never-shared");
                return;
            }
            const s = qYd(this.storageService);
            n = await GYd({
                authId: r,
                canvasPath: e,
                localSalt: s
            });
        } catch (i) {
            const r = i instanceof Error ? i.name : "unknown";
            n3(this.structuredLogService, "Canvas lookupShareForCanvas: failed to compute canvas_key", {
                errorName: r
            });
            return;
        }
        try {
            const r = await (await this.cursorAuthenticationService.dashboardClient()).lookupSharedCanvasByKey(new BBa({
                canvasKey: n
            }));
            if (r.shareId === void 0 || r.visibility === void 0 || r.shareUrl === void 0 || r.updatedAt === void 0) return;
            const s = r.visibility === lTn.TEAM ? "team" : "private";
            return {
                shareId: r.shareId,
                shareUrl: r.shareUrl,
                visibility: s,
                updatedAt: r.updatedAt
            };
        } catch (i) {
            const r = i instanceof Error ? i.name : "unknown";
            n3(this.structuredLogService, "Canvas lookupShareForCanvas: backend lookup failed", {
                errorName: r
            });
            return;
        }
    }
}, gEt.USER_CANVAS_LIST_PAGE_SIZE = 50, gEt.USER_CANVAS_LIST_MAX_PAGES = 20, gEt = Re([
    F(0, nr),
    F(1, wh),
    F(2, ps),
    F(3, w6),
    F(4, eF),
    F(5, gr),
    F(6, _a),
    F(7, Qr),
    F(8, ss),
    F(9, ki),
    F(10, is),
    F(11, nh),
    F(12, yr),
    F(13, Rd),
    F(14, Tc),
    F(15, Cr),
    F(16, kc)
], gEt), hs.registerCommand("canvas.handleCanvasError", (t, e, n, i)=>{
    const r = t.get(P6);
    (i === "runtime-error" || i === "compile-error" || i === "canvas-missing") && r.fireCanvasError({
        canvasId: e,
        error: n,
        errorKind: i
    });
}), hs.registerCommand("canvas.handleCanvasErrorCleared", (t, e)=>{
    t.get(P6).fireCanvasErrorCleared(e);
}), bn(P6, gEt, 1);

}

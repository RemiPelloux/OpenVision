import { Dqi, Zp } from "./A3u.js";
import { YQe } from "./De_3.js";
import { Fo, Se, bt, hM, rn, ve, we, wi } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { Aso, Iso, aUe } from "./agent_service_pb.js";
import { VCt, fxo } from "./aiFileInfoServiceTypes.js";
import { q5, uq } from "./appLayoutService.js";
import { Yu } from "./browser.ts";
import { Hu, f$t, zyt } from "./chat_pb.js";
import { $n, vi } from "./commands.js";
import { Zs, nl } from "./composerDataServiceTypes.js";
import { Zy, yC } from "./composerEventService.js";
import { Cn, qt } from "./configuration.js";
import { dn, xn } from "./contextkey.js";
import { QM, R2 } from "./cursorIgnoreService.js";
import { sw } from "./decorators.js";
import { Nv } from "./editorBrowser.js";
import { Nc, gs } from "./editorGroupsService.js";
import { Ni, hn } from "./editorService.js";
import { vd, xc } from "./editor_2.js";
import { Kr, qs } from "./experimentService.js";
import { Pn } from "./extensions.js";
import { Nde } from "./externalTypes.js";
import { Fi, Ii } from "./files.js";
import { gt, li } from "./network.js";
import { Kg } from "./notebookBrowser.js";
import { U5, XJe } from "./notebookCommon.js";
import { MC } from "./notebookEditorInput.js";
import { fu, zl } from "./pathService.js";
import { Yn, ya } from "./position.js";
import { Fp, GP, cU, mn, nkg } from "./qIc.js";
import { dt, qi } from "./range.js";
import { hJe } from "./reactiveStorageTypes_2.js";
import { Ip, Kd } from "./remoteAgentService.js";
import { Nl, bc } from "./resolverService.js";
import { GCt, der } from "./sourceFilesService.js";
import { Vn, yn } from "./storage_2.js";
import { Gf, eP, ng } from "./terminal.js";
import { Er, Gx } from "./terminalContextKey.js";
import { Mf, fw } from "./terminal_2.js";
import { F1, hT } from "./terminal_3.js";
import { x } from "./tslib.es6.js";
import { Ee, Qt } from "./uri.js";
import { Fw } from "./utils_24.js";
import { Ass, ZC, ZSi, a6, ej, hu } from "./utils_pb.js";
import { Ic, Pp } from "./viewsService.js";
import { Jn, ci } from "./workspace.js";
import { E8e } from "./worktreeUtils.js";
function jjt(e) {
    return !!e && typeof e == "object" && Array.isArray(e.editorInputs) && e.editorInputs.every((t)=>t instanceof MC);
}
function Xv(e) {
    if (!e) return;
    if (e.getId() === XJe) return e.getControl();
    if (e.getId() === U5) return e.getControl().inlineNotebookEditor;
    const t = e.input;
    if (t && jjt(t)) return e.getControl()?.notebookEditor;
}
function Ur_(e) {
    const t = hJe.replace(/\\/g, "/") + "/";
    return e.replace(/\\/g, "/").includes(t);
}
var Kjt;
export { Kjt, Ur_, Xv, jjt };
var __wakaru_her_initialized = false;
export function her() {
if (__wakaru_her_initialized) return;
__wakaru_her_initialized = true;
"use strict";
x(), aUe(), Hu(), hu(), Fo(), sw(), bt(), Nde(), Se(), li(), Qt(), Nv(), ya(), qi(), Nl(), vi(), Cn(), dn(), Fi(), Pn(), fw(), Vn(), ci(), xc(), uq(), nl(), yC(), Kg(), ng(), hT(), Gx(), R2(), Nc(), Ni(), qs(), fu(), Ip(), E8e(), Pp(), der(), Fw(), Yu(), fxo(), Kjt = class extends we {
    constructor(e, t, n, i, r, s, o, a, c, l, u, h, p, g, f, v, b, y, T){
        super(), this.editorGroupsService = e, this.workspaceContextService = t, this.textModelService = n, this.editorService = i, this.cursorIgnoreService = r, this.remoteAgentService = s, this.fileService = o, this.pathService = a, this.appLayoutService = c, this.composerEventService = l, this.composerDataService = u, this.experimentService = h, this.configurationService = p, this.storageService = g, this.terminalService = f, this.terminalGroupService = v, this.viewsService = b, this.contextKeyService = y, this.commandService = T, this._onDidChangeActiveEditor = this._register(new ve), this.onDidChangeActiveEditor = this._onDidChangeActiveEditor.event, this._onDidChangeVisibleEditors = this._register(new ve), this.onDidChangeVisibleEditors = this._onDidChangeVisibleEditors.event, this._onDidChangeIdeEditorsState = this._register(new ve), this.onDidChangeIdeEditorsState = this._onDidChangeIdeEditorsState.event, this.lastActiveGroups = [], this._didSetupActiveGroupTracking = !1, this._isPersistingIdeState = !1, this._hasPendingPersist = !1, this._setupActiveGroupTracking(), this._setupEditorChangeListeners(), this._setupAgentLayoutPaneListener(), this._setupTerminalChangeListeners(), this.updateIdeEditorsStateAsync();
    }
    get controlProvider() {
        return this._controlProvider;
    }
    registerControlProvider(e, t) {
        if (this._controlProvider) throw new Error("ControlProvider already registered");
        return this._controlProvider = t, rn(()=>{
            this._controlProvider = void 0;
        });
    }
    async getCurrentFileInfo(e, t) {
        if (t?.actuallyReadFromOverrideURI === !0 && e !== void 0) {
            if (this.cursorIgnoreService.shouldBlockUriFromReading(e)) return;
            let o;
            try {
                o = await this.textModelService.createModelReference(e);
                const a = o.object.textEditorModel, c = a.getValue(), l = a.getLanguageIdAtPosition(1, 1) ?? "";
                return new ZC({
                    cursorPosition: void 0,
                    selection: void 0,
                    relativeWorkspacePath: this.workspaceContextService.asRelativePath(e),
                    contents: c,
                    contentsStartAtLine: 1,
                    languageId: l,
                    alternativeVersionId: a.getAlternativeVersionId(),
                    totalNumberOfLines: a.getLineCount(),
                    workspaceRootPath: this.workspaceContextService.getWorkspaceFolder(e)?.uri.fsPath ?? ""
                });
            } finally{
                o?.dispose();
            }
        }
        const n = this.getCurrentFileInfoSyncWithoutDataframes(e);
        if (n === void 0) return n;
        if (n.relativeWorkspacePath === "") return;
        const i = n.relativeWorkspacePath, r = i.match(/^[a-zA-Z]:\\/) ? Ee.file(i) : this.workspaceContextService.resolveRelativePath(GCt(i));
        if (this.cursorIgnoreService.shouldBlockUriFromReading(r)) return;
        let s = await this.getDataframesFromNotebook();
        return s || (s = []), n.dataframes = s, n;
    }
    async getDataframesFromNotebook() {
        const e = this.editorService.activeEditorPane?.input?.resource;
        if (!e || !e.path.endsWith(".ipynb")) return;
        if (!e) return [];
        const t = await this.controlProvider?.getDataframeSummary(e);
        return t ? t.map((n)=>new ZSi({
                name: n.name,
                shape: n.shape,
                dataDimensionality: n.dataDimensionality,
                columns: n.columns.map((i)=>new Ass({
                        key: i.key,
                        type: i.type
                    })),
                rowCount: n.rowCount,
                indexColumn: n.indexColumn
            })) : [];
    }
    _setupEditorChangeListeners() {
        this._register(this.editorService.onDidVisibleEditorsChange(()=>{
            this.updateIdeEditorsState();
            const e = this.editorService.visibleEditorPanes;
            this._onDidChangeVisibleEditors.fire(e);
        })), this._register(this.editorService.onDidActiveEditorChange(()=>{
            this.updateIdeEditorsState();
            const e = this.getLastActiveFileEditor();
            this._onDidChangeActiveEditor.fire(e), this._persistIdeStateLite();
        }));
    }
    _setupTerminalChangeListeners() {
        this.terminalService && this._register(this.terminalService.onDidChangeActiveInstance(()=>{
            this.updateIdeEditorsState();
        })), this._register(this.viewsService.onDidChangeViewVisibility((e)=>{
            e.id === F1 && this.updateIdeEditorsState();
        }));
    }
    _setupActiveGroupTracking() {
        const e = (t)=>{
            t !== void 0 && (this.lastActiveGroups = this.lastActiveGroups.filter((n)=>n !== t), this.lastActiveGroups.push(t));
        };
        this._register(this.editorGroupsService.mainPart.onDidLayout(()=>{
            if (this._didSetupActiveGroupTracking) return;
            this._didSetupActiveGroupTracking = !0;
            const t = this.editorGroupsService.groups.map((n)=>n.id);
            this.lastActiveGroups = t.filter((n)=>!this.lastActiveGroups.includes(n)).concat(this.lastActiveGroups), e(this.editorGroupsService.activeGroup.id), this.updateIdeEditorsStateAsync();
        })), this._register(this.editorGroupsService.onDidChangeActiveGroup((t)=>{
            e(t.id);
        }));
    }
    getLastActiveFileEditor() {
        let e = this.editorService.activeEditorPane;
        if (e?.input?.resource && Dqi(e.input.resource.scheme)) return e;
        for (const t of this.lastActiveGroups.slice().reverse())if (e = this.editorGroupsService.getGroup(t)?.activeEditorPane, !(!e?.input?.resource || !Dqi(e.input.resource.scheme))) break;
        return e;
    }
    getCurrentFileInfoSyncWithoutDataframes(e) {
        const t = this.getLastActiveFileEditor(), n = t?.getControl();
        let i = e ?? vd.getOriginalUri(t?.input);
        if (i?.scheme === gt.aiChat) return;
        const r = Xv(t);
        let s = "", o, a, c;
        if (r) {
            const v = r.getCellsInRange();
            let b = r.getActiveCell()?.id, y = v.findIndex((P)=>P.id === b);
            const T = v.map((P)=>P.getText()), A = v.map((P)=>P.model.outputs).map((P)=>{
                const N = P.map((O)=>O.outputs.map((H)=>{
                        if (H.mime === "text/plain") return H.data.toString();
                        if (H.mime === "application/vnd.code.notebook.error") {
                            const $ = H.data.toString();
                            let W = JSON.parse($);
                            const G = W.stack.replace(/\x1B\[([0-9]{1,2}(;[0-9]{1,2})?)?[m|K]/g, "").replace(/\u001b\[0/g, "");
                            return W = {
                                ...W,
                                stack: G
                            }, JSON.stringify(W, null, 2);
                        } else if (H.mime === "application/vnd.code.notebook.stderr") return H.data.toString();
                        return "";
                    }).join(`

`)).join(`

`);
                return N.length > 400 ? N.slice(0, 200) + `
...output cropped...
` + N.slice(-200) : N;
            });
            let R = 0;
            s = T.map((P, N)=>{
                if (P === "" || P === void 0) return "";
                const O = `in[${N}]: ${P}`;
                if (A[N] === "" || A[N] === void 0) return O;
                const F = `out[${N}]: ${A[N]}`;
                return `${O}

${F}`;
            }).map((P, N)=>(N < y && (R = R + P.split(`
`).length + 2), P)).join(`

`), i = r.textModel?.uri ?? i, o = new Yn(R + 1, 1), a = new dt(o.lineNumber, 1, o.lineNumber, 1);
        } else {
            const v = t?.getControl();
            if (o = v?.getPosition() ?? new Yn(1, 1), a = v?.getSelection() ?? new dt(o.lineNumber, o.column, o.lineNumber, o.column), GP(v)) {
                const y = v.getModel(), T = y?.original.getValue(), E = y?.modified.getValue();
                s = `Original File:
${T}
Modified File:
${E}`, i = y?.modified.uri;
            } else if (nkg(v)) s = "";
            else {
                const b = v?.getModel();
                s = b?.getValue() ?? "", c = b?.getAlternativeVersionId();
            }
        }
        let l = "";
        Fp(n) && (l = n.getModel()?.getLanguageIdAtPosition(o.lineNumber, o.column) ?? "");
        const u = new a6({
            line: Zp(o.lineNumber - 1),
            column: Zp(o.column - 1)
        }), h = new ej({
            startPosition: new a6({
                line: Zp(a.startLineNumber - 1),
                column: Zp(a.startColumn - 1)
            }),
            endPosition: new a6({
                line: Zp(a.endLineNumber - 1),
                column: Zp(a.endColumn - 1)
            })
        }), p = s.split(`
`).length;
        let g = 1;
        if (s.length > 100 * 2e4) {
            const b = s.split(`
`), y = u.line;
            let T = Math.max(0, y - Math.floor(2e3 / 2)), E = Math.min(b.length, y + Math.ceil(2e3 / 2));
            E - T < 2e3 && (T === 0 ? E = Math.min(b.length, T + 2e3) : E === b.length && (T = Math.max(0, E - 2e3))), g = T + 1, s = b.slice(T, E).join(`
`), u.line -= T, h.startPosition.line -= T, h.endPosition.line -= T;
        }
        return new ZC({
            cursorPosition: u,
            selection: h,
            relativeWorkspacePath: i ? this.workspaceContextService.asRelativePath(i) : "",
            contents: s,
            contentsStartAtLine: g,
            languageId: l,
            alternativeVersionId: c,
            totalNumberOfLines: p
        });
    }
    _setupAgentLayoutPaneListener() {
        this._register(this.composerEventService.onDidUpdateAgentLayoutPane((e)=>{
            switch(e.type){
                case "code-selection":
                    {
                        const t = e.relativePath, n = this.remoteAgentService.getConnection() !== null, i = new zyt({
                            relativePath: t,
                            absolutePath: hM(this.workspaceContextService.resolveRelativePath(t), !0, n)
                        }), r = this.ideEditorsState?.recentlyViewedFiles ?? [], s = new f$t({
                            visibleFiles: [
                                i
                            ],
                            recentlyViewedFiles: r
                        });
                        this.ideEditorsState = s, this._onDidChangeIdeEditorsState.fire(s);
                        break;
                    }
                case "cleared":
                    {
                        const t = this.ideEditorsState?.recentlyViewedFiles ?? [], n = new f$t({
                            visibleFiles: [],
                            recentlyViewedFiles: t
                        });
                        this.ideEditorsState = n, this._onDidChangeIdeEditorsState.fire(n);
                        break;
                    }
                case "multi-diff":
                default:
                    break;
            }
        }));
    }
    getLastIdeEditorsState() {
        return this.ideEditorsState;
    }
    async getLastIdeEditorsStateGlass() {
        return this.ideEditorsState;
    }
    updateIdeEditorsState() {
        try {
            this._updateIdeEditorsState();
        } catch  {
            console.error("Error updating ide editors state");
        }
    }
    async updateIdeEditorsStateAsync() {
        try {
            await this._updateIdeEditorsState();
        } catch  {
            console.error("Error updating ide editors state async");
        }
    }
    getCurrentWorktreePath() {
        const t = this.composerDataService.selectedComposer?.gitWorktree?.worktreePath;
        return t && typeof t == "string" && t.length > 0 ? t : void 0;
    }
    normalizePathString(e) {
        if (!e) return "";
        let t = e.replace(/\\/g, "/");
        return t.endsWith("/") && (t = t.slice(0, -1)), t;
    }
    normalizeUriPath(e) {
        const t = e.scheme === gt.vscodeRemote ? e.path : e.fsPath;
        return this.normalizePathString(t || e.path);
    }
    isUriInWorkspace(e) {
        const t = this.workspaceContextService.getWorkspaceFolder(e);
        if (!t) return !1;
        const n = this.normalizeUriPath(e), i = this.normalizeUriPath(t.uri);
        return !n || !i ? !1 : n === i || n.startsWith(`${i}/`);
    }
    isUriInCurrentWorktree(e) {
        const t = this.getCurrentWorktreePath();
        if (!t) return !1;
        const n = this.normalizeUriPath(e), i = this.normalizePathString(t);
        return !n || !i ? !1 : n === i || n.startsWith(`${i}/`);
    }
    toIdeEditorsStateFile(e, t) {
        if (e.isTerminal) return new zyt({
            relativePath: e.path,
            absolutePath: e.path
        });
        const n = e.resolvedUri ?? this.workspaceContextService.resolveRelativePath(e.path);
        if (n) return new zyt({
            relativePath: e.path,
            absolutePath: hM(n, !0, t)
        });
    }
    shouldIncludeFileInAgent(e, t) {
        return !t || !this.isUriInWorkspace(t) ? !1 : this.getCurrentWorktreePath() ? this.isUriInCurrentWorktree(t) : !Ur_(e);
    }
    async _updateIdeEditorsState() {
        const t = [
            ...[
                gt.file,
                gt.vscodeRemote,
                gt.vscodeNotebook,
                gt.git
            ],
            gt.vscodeTerminal
        ], n = [];
        for (const g of this.editorService.visibleEditors){
            const f = g.resource;
            if (!f || !t.includes(f.scheme)) continue;
            if (f.scheme === gt.vscodeTerminal) {
                const y = await this.terminalService.getTerminalFilePathFromResource(f);
                n.push({
                    path: y,
                    isTerminal: !0,
                    resolvedUri: void 0
                });
                continue;
            }
            const v = this.workspaceContextService.asRelativePath(f);
            if (!v) continue;
            const b = this.workspaceContextService.resolveRelativePath(v);
            b && n.push({
                path: v,
                isTerminal: !1,
                resolvedUri: b
            });
        }
        const i = [], r = new Set;
        for (const g of n){
            if (g.isTerminal) {
                r.has(g.path) || (r.add(g.path), i.push(g));
                continue;
            }
            const f = g.resolvedUri;
            this.isUriInWorkspace(f) && (this.cursorIgnoreService.shouldBlockUriFromReading(f) || this.shouldIncludeFileInAgent(g.path, f) && (r.has(g.path) || (r.add(g.path), i.push(g))));
        }
        if (this.contextKeyService.getContextKeyValue(Er.viewShowing.key)) {
            const g = this.terminalGroupService.activeGroup;
            if (g) {
                for (const f of g.terminalInstances)if (f.instanceId !== void 0 && f.target === Mf.Panel) {
                    if (f.resource.scheme !== gt.vscodeTerminal) continue;
                    const v = await this.terminalService.getTerminalFilePathFromResource(f.resource);
                    r.has(v) || (r.add(v), i.push({
                        path: v,
                        isTerminal: !0,
                        resolvedUri: void 0
                    }));
                }
            }
        }
        let a = (this.ideEditorsState?.recentlyViewedFiles ?? []).map((g)=>{
            const f = g.relativePath, b = YQe(f) !== null, y = b ? void 0 : this.workspaceContextService.resolveRelativePath(f);
            return {
                path: f,
                isTerminal: b,
                resolvedUri: y
            };
        });
        a = a.filter((g)=>{
            if (g.isTerminal) return !0;
            const f = g.resolvedUri;
            return f ? this.shouldIncludeFileInAgent(g.path, f) : !1;
        });
        const c = this.editorService.activeEditor?.resource;
        let l;
        if (c && t.includes(c.scheme)) if (c.scheme === gt.vscodeTerminal) l = {
            path: await this.terminalService.getTerminalFilePathFromResource(c),
            isTerminal: !0,
            resolvedUri: void 0
        };
        else {
            const g = this.workspaceContextService.asRelativePath(c);
            if (g) {
                const f = this.workspaceContextService.resolveRelativePath(g);
                f && this.isUriInWorkspace(f) && (l = {
                    path: g,
                    isTerminal: !1,
                    resolvedUri: f
                });
            }
        }
        let u = [
            ...a
        ];
        if (l && u.at(-1)?.path !== l.path) if (l.isTerminal) u = u.filter((f)=>f.path !== l.path), u.push(l);
        else {
            const f = l.resolvedUri;
            f && !this.cursorIgnoreService.shouldBlockUriFromReading(f) && this.shouldIncludeFileInAgent(l.path, f) && (u = u.filter((v)=>v.path !== l.path), u.push(l));
        }
        u.length > 10 && (u = u.slice(-10));
        const h = this.remoteAgentService.getConnection() !== null, p = new f$t({
            visibleFiles: i.map((g)=>this.toIdeEditorsStateFile(g, h)).filter((g)=>!!g),
            recentlyViewedFiles: u.map((g)=>this.toIdeEditorsStateFile(g, h)).filter((g)=>!!g)
        });
        this.ideEditorsState = p, this._onDidChangeIdeEditorsState.fire(p);
    }
    async _persistIdeStateLite() {
        if (this._isPersistingIdeState) {
            this._hasPendingPersist = !0;
            return;
        }
        this._isPersistingIdeState = !0;
        try {
            const e = this.editorService.activeEditor?.resource, t = this.remoteAgentService.getConnection() !== null;
            if (!e || !Dqi(e.scheme)) return;
            const n = this.workspaceContextService.asRelativePath(e);
            if (!n) return;
            const i = this.workspaceContextService.resolveRelativePath(n);
            if (!i || !this.isUriInWorkspace(i) || this.cursorIgnoreService.shouldBlockUriFromReading(i)) return;
            const r = hM(i, !0, t);
            if (!r) return;
            const s = await this.pathService.userHome({
                preferLocal: !1
            }), o = Ee.joinPath(s, ".cursor"), a = Ee.joinPath(o, "ide_state.json");
            let c = [];
            try {
                if (await this.fileService.exists(a)) {
                    const g = (await this.fileService.readFile(a)).value.toString();
                    c = Aso.fromJsonString(g).recentlyViewedFiles;
                }
            } catch  {}
            let l = c;
            l = l.filter((p)=>p.absolutePath !== r), l.unshift(new Iso({
                relativePath: n,
                absolutePath: r
            })), l.length > 10 && (l = l.slice(0, 10));
            const h = new Aso({
                recentlyViewedFiles: l
            }).toJsonString();
            try {
                await this.fileService.exists(o) || await this.fileService.createFolder(o);
            } catch  {
                await this.fileService.createFolder(o);
            }
            await this.fileService.writeFile(a, wi.fromString(h));
        } catch  {} finally{
            this._isPersistingIdeState = !1, this._hasPendingPersist && (this._hasPendingPersist = !1, this._persistIdeStateLite());
        }
    }
}, ie([
    cU(1e4)
], Kjt.prototype, "_persistIdeStateLite", null), Kjt = ie([
    C(0, gs),
    C(1, Jn),
    C(2, bc),
    C(3, hn),
    C(4, QM),
    C(5, Kd),
    C(6, Ii),
    C(7, zl),
    C(8, q5),
    C(9, Zy),
    C(10, Zs),
    C(11, Kr),
    C(12, qt),
    C(13, yn),
    C(14, Gf),
    C(15, eP),
    C(16, Ic),
    C(17, xn),
    C(18, $n)
], Kjt), mn(VCt, Kjt, 1);

}

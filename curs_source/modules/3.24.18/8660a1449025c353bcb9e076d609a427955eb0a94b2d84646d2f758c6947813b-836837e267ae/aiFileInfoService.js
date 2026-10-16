import { Ga, Gt, KR, Pn, Qe, Tr, st, tt } from "./Iwo.js";
import { bn } from "./SZu.js";
import { K0k, vVt } from "./Ycg.js";
import { B7a, U7a, V6e } from "./agent_service_pb.js";
import { Fdl, lEt } from "./aiFileInfoServiceTypes.js";
import { cG, ule } from "./appLayoutService.js";
import { kl } from "./browser.ts";
import { r9t, s9t, sd } from "./chat_pb.js";
import { nr, rs } from "./commands.js";
import { Pl, no } from "./composerDataServiceTypes.js";
import { Fb, LS } from "./composerEventService.js";
import { or, yi } from "./configuration.js";
import { Hi, Rr } from "./contextkey.js";
import { AE, S2 } from "./cursorIgnoreService.js";
import { SM } from "./decorators.js";
import { xw } from "./editorBrowser.js";
import { Ld, _a } from "./editorGroupsService.js";
import { Wo, gr } from "./editorService.js";
import { Wm, od } from "./editor_2.js";
import { Cr, _s } from "./experimentService.js";
import { Rn } from "./extensions.js";
import { TCe } from "./externalTypes.js";
import { is, ms } from "./files.js";
import { C0t } from "./ipa.js";
import { Ki, Ot } from "./network.js";
import { Mat } from "./notebookBrowser.js";
import { Rd, ih } from "./pathService.js";
import { er, jc } from "./position.js";
import { Qs, qt } from "./range.js";
import { Nh, Sg } from "./remoteAgentService.js";
import { Em, Rh } from "./resolverService.js";
import { VIi, aEt } from "./sourceFilesService.js";
import { Zi, ki } from "./storage_2.js";
import { Mv, Py, pV } from "./terminal.js";
import { QI, ns } from "./terminalContextKey.js";
import { UC, ny } from "./terminal_2.js";
import { PA, bR } from "./terminal_3.js";
import { E } from "./tslib.es6.js";
import { fn, rt } from "./uri.js";
import { F, Re } from "./userDataProfile.js";
import { gT } from "./utils_24.js";
import { Hu, Mbr, QE, hDo, jte, oW } from "./utils_pb.js";
import { jT, wb } from "./viewsService.js";
import { Sr, yr } from "./workspace.js";
import { Oat } from "./worktreeUtils.js";
import { ff, pYa } from "./yBp.js";
import { FOy, MQ, jj, qS } from "./ze.js";
var bVt;
export { bVt };
var __wakaru_qAn_initialized = false;
export function qAn() {
if (__wakaru_qAn_initialized) return;
__wakaru_qAn_initialized = true;
"use strict";
E(), V6e(), sd(), Hu(), Ga(), SM(), Gt(), TCe(), Qe(), Ki(), fn(), xw(), jc(), Qs(), Em(), rs(), or(), Hi(), ms(), Rn(), UC(), Zi(), Sr(), od(), ule(), Pl(), LS(), Mat(), Mv(), bR(), QI(), S2(), Ld(), Wo(), _s(), ih(), Sg(), Oat(), jT(), VIi(), gT(), kl(), Fdl(), bVt = class extends st {
    constructor(t, e, n, i, r, s, o, a, l, c, u, d, h, p, g, f, _, b, y){
        super(), this.editorGroupsService = t, this.workspaceContextService = e, this.textModelService = n, this.editorService = i, this.cursorIgnoreService = r, this.remoteAgentService = s, this.fileService = o, this.pathService = a, this.appLayoutService = l, this.composerEventService = c, this.composerDataService = u, this.experimentService = d, this.configurationService = h, this.storageService = p, this.terminalService = g, this.terminalGroupService = f, this.viewsService = _, this.contextKeyService = b, this.commandService = y, this._onDidChangeActiveEditor = this._register(new tt), this.onDidChangeActiveEditor = this._onDidChangeActiveEditor.event, this._onDidChangeVisibleEditors = this._register(new tt), this.onDidChangeVisibleEditors = this._onDidChangeVisibleEditors.event, this._onDidChangeIdeEditorsState = this._register(new tt), this.onDidChangeIdeEditorsState = this._onDidChangeIdeEditorsState.event, this.lastActiveGroups = [], this._didSetupActiveGroupTracking = !1, this._isPersistingIdeState = !1, this._hasPendingPersist = !1, this._setupActiveGroupTracking(), this._setupEditorChangeListeners(), this._setupAgentLayoutPaneListener(), this._setupTerminalChangeListeners(), this.updateIdeEditorsStateAsync();
    }
    get controlProvider() {
        return this._controlProvider;
    }
    registerControlProvider(t, e) {
        if (this._controlProvider) throw new Error("ControlProvider already registered");
        return this._controlProvider = e, Pn(()=>{
            this._controlProvider = void 0;
        });
    }
    async getCurrentFileInfo(t, e) {
        if (e?.actuallyReadFromOverrideURI === !0 && t !== void 0) {
            if (this.cursorIgnoreService.shouldBlockUriFromReading(t)) return;
            let o;
            try {
                o = await this.textModelService.createModelReference(t);
                const a = o.object.textEditorModel, l = a.getValue(), c = a.getLanguageIdAtPosition(1, 1) ?? "";
                return new QE({
                    cursorPosition: void 0,
                    selection: void 0,
                    relativeWorkspacePath: this.workspaceContextService.asRelativePath(t),
                    contents: l,
                    contentsStartAtLine: 1,
                    languageId: c,
                    alternativeVersionId: a.getAlternativeVersionId(),
                    totalNumberOfLines: a.getLineCount(),
                    workspaceRootPath: this.workspaceContextService.getWorkspaceFolder(t)?.uri.fsPath ?? ""
                });
            } finally{
                o?.dispose();
            }
        }
        const n = this.getCurrentFileInfoSyncWithoutDataframes(t);
        if (n === void 0) return n;
        if (n.relativeWorkspacePath === "") return;
        const i = n.relativeWorkspacePath, r = i.match(/^[a-zA-Z]:\\/) ? rt.file(i) : this.workspaceContextService.resolveRelativePath(aEt(i));
        if (this.cursorIgnoreService.shouldBlockUriFromReading(r)) return;
        let s = await this.getDataframesFromNotebook();
        return s || (s = []), n.dataframes = s, n;
    }
    async getDataframesFromNotebook() {
        const t = this.editorService.activeEditorPane?.input?.resource;
        if (!t || !t.path.endsWith(".ipynb")) return;
        if (!t) return [];
        const e = await this.controlProvider?.getDataframeSummary(t);
        return e ? e.map((n)=>new Mbr({
                name: n.name,
                shape: n.shape,
                dataDimensionality: n.dataDimensionality,
                columns: n.columns.map((i)=>new hDo({
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
            const t = this.editorService.visibleEditorPanes;
            this._onDidChangeVisibleEditors.fire(t);
        })), this._register(this.editorService.onDidActiveEditorChange(()=>{
            this.updateIdeEditorsState();
            const t = this.getLastActiveFileEditor();
            this._onDidChangeActiveEditor.fire(t), this._persistIdeStateLite();
        }));
    }
    _setupTerminalChangeListeners() {
        this.terminalService && this._register(this.terminalService.onDidChangeActiveInstance(()=>{
            this.updateIdeEditorsState();
        })), this._register(this.viewsService.onDidChangeViewVisibility((t)=>{
            t.id === PA && this.updateIdeEditorsState();
        }));
    }
    _setupActiveGroupTracking() {
        const t = (e)=>{
            e !== void 0 && (this.lastActiveGroups = this.lastActiveGroups.filter((n)=>n !== e), this.lastActiveGroups.push(e));
        };
        this._register(this.editorGroupsService.mainPart.onDidLayout(()=>{
            if (this._didSetupActiveGroupTracking) return;
            this._didSetupActiveGroupTracking = !0;
            const e = this.editorGroupsService.groups.map((n)=>n.id);
            this.lastActiveGroups = e.filter((n)=>!this.lastActiveGroups.includes(n)).concat(this.lastActiveGroups), t(this.editorGroupsService.activeGroup.id), this.updateIdeEditorsStateAsync();
        })), this._register(this.editorGroupsService.onDidChangeActiveGroup((e)=>{
            t(e.id);
        }));
    }
    getLastActiveFileEditor() {
        let t = this.editorService.activeEditorPane;
        if (t?.input?.resource && pYa(t.input.resource.scheme)) return t;
        for (const e of this.lastActiveGroups.slice().reverse())if (t = this.editorGroupsService.getGroup(e)?.activeEditorPane, !(!t?.input?.resource || !pYa(t.input.resource.scheme))) break;
        return t;
    }
    getCurrentFileInfoSyncWithoutDataframes(t) {
        const e = this.getLastActiveFileEditor(), n = e?.getControl();
        let i = t ?? Wm.getOriginalUri(e?.input);
        if (i?.scheme === Ot.aiChat) return;
        const r = vVt(e);
        let s = "", o, a, l;
        if (r) {
            const f = r.getCellsInRange();
            let _ = r.getActiveCell()?.id, b = f.findIndex((I)=>I.id === _);
            const y = f.map((I)=>I.getText()), k = f.map((I)=>I.model.outputs).map((I)=>{
                const A = I.map((P)=>P.outputs.map((O)=>{
                        if (O.mime === "text/plain") return O.data.toString();
                        if (O.mime === "application/vnd.code.notebook.error") {
                            const N = O.data.toString();
                            let U = JSON.parse(N);
                            const j = U.stack.replace(/\x1B\[([0-9]{1,2}(;[0-9]{1,2})?)?[m|K]/g, "").replace(/\u001b\[0/g, "");
                            return U = {
                                ...U,
                                stack: j
                            }, JSON.stringify(U, null, 2);
                        } else if (O.mime === "application/vnd.code.notebook.stderr") return O.data.toString();
                        return "";
                    }).join(`

`)).join(`

`);
                return A.length > 400 ? A.slice(0, 200) + `
...output cropped...
` + A.slice(-200) : A;
            });
            let C = 0;
            s = y.map((I, A)=>{
                if (I === "" || I === void 0) return "";
                const P = `in[${A}]: ${I}`;
                if (k[A] === "" || k[A] === void 0) return P;
                const M = `out[${A}]: ${k[A]}`;
                return `${P}

${M}`;
            }).map((I, A)=>(A < b && (C = C + I.split(`
`).length + 2), I)).join(`

`), i = r.textModel?.uri ?? i, o = new er(C + 1, 1), a = new qt(o.lineNumber, 1, o.lineNumber, 1);
        } else {
            const f = e?.getControl();
            if (o = f?.getPosition() ?? new er(1, 1), a = f?.getSelection() ?? new qt(o.lineNumber, o.column, o.lineNumber, o.column), jj(f)) {
                const b = f.getModel(), y = b?.original.getValue(), S = b?.modified.getValue();
                s = `Original File:
${y}
Modified File:
${S}`, i = b?.modified.uri;
            } else if (FOy(f)) s = "";
            else {
                const _ = f?.getModel();
                s = _?.getValue() ?? "", l = _?.getAlternativeVersionId();
            }
        }
        let c = "";
        qS(n) && (c = n.getModel()?.getLanguageIdAtPosition(o.lineNumber, o.column) ?? "");
        const u = new oW({
            line: ff(o.lineNumber - 1),
            column: ff(o.column - 1)
        }), d = new jte({
            startPosition: new oW({
                line: ff(a.startLineNumber - 1),
                column: ff(a.startColumn - 1)
            }),
            endPosition: new oW({
                line: ff(a.endLineNumber - 1),
                column: ff(a.endColumn - 1)
            })
        }), h = s.split(`
`).length;
        let p = 1;
        if (s.length > 100 * 2e4) {
            const _ = s.split(`
`), b = u.line;
            let y = Math.max(0, b - Math.floor(2e3 / 2)), S = Math.min(_.length, b + Math.ceil(2e3 / 2));
            S - y < 2e3 && (y === 0 ? S = Math.min(_.length, y + 2e3) : S === _.length && (y = Math.max(0, S - 2e3))), p = y + 1, s = _.slice(y, S).join(`
`), u.line -= y, d.startPosition.line -= y, d.endPosition.line -= y;
        }
        return new QE({
            cursorPosition: u,
            selection: d,
            relativeWorkspacePath: i ? this.workspaceContextService.asRelativePath(i) : "",
            contents: s,
            contentsStartAtLine: p,
            languageId: c,
            alternativeVersionId: l,
            totalNumberOfLines: h
        });
    }
    _setupAgentLayoutPaneListener() {
        this._register(this.composerEventService.onDidUpdateAgentLayoutPane((t)=>{
            switch(t.type){
                case "code-selection":
                    {
                        const e = t.relativePath, n = this.remoteAgentService.getConnection() !== null, i = new s9t({
                            relativePath: e,
                            absolutePath: KR(this.workspaceContextService.resolveRelativePath(e), !0, n)
                        }), r = this.ideEditorsState?.recentlyViewedFiles ?? [], s = new r9t({
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
                        const e = this.ideEditorsState?.recentlyViewedFiles ?? [], n = new r9t({
                            visibleFiles: [],
                            recentlyViewedFiles: e
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
        const e = this.composerDataService.selectedComposer?.gitWorktree?.worktreePath;
        return e && typeof e == "string" && e.length > 0 ? e : void 0;
    }
    normalizePathString(t) {
        if (!t) return "";
        let e = t.replace(/\\/g, "/");
        return e.endsWith("/") && (e = e.slice(0, -1)), e;
    }
    normalizeUriPath(t) {
        const e = t.scheme === Ot.vscodeRemote ? t.path : t.fsPath;
        return this.normalizePathString(e || t.path);
    }
    isUriInWorkspace(t) {
        const e = this.workspaceContextService.getWorkspaceFolder(t);
        if (!e) return !1;
        const n = this.normalizeUriPath(t), i = this.normalizeUriPath(e.uri);
        return !n || !i ? !1 : n === i || n.startsWith(`${i}/`);
    }
    isUriInCurrentWorktree(t) {
        const e = this.getCurrentWorktreePath();
        if (!e) return !1;
        const n = this.normalizeUriPath(t), i = this.normalizePathString(e);
        return !n || !i ? !1 : n === i || n.startsWith(`${i}/`);
    }
    toIdeEditorsStateFile(t, e) {
        if (t.isTerminal) return new s9t({
            relativePath: t.path,
            absolutePath: t.path
        });
        const n = t.resolvedUri ?? this.workspaceContextService.resolveRelativePath(t.path);
        if (n) return new s9t({
            relativePath: t.path,
            absolutePath: KR(n, !0, e)
        });
    }
    shouldIncludeFileInAgent(t, e) {
        return !e || !this.isUriInWorkspace(e) ? !1 : this.getCurrentWorktreePath() ? this.isUriInCurrentWorktree(e) : !K0k(t);
    }
    async _updateIdeEditorsState() {
        const e = [
            ...[
                Ot.file,
                Ot.vscodeRemote,
                Ot.vscodeNotebook,
                Ot.git
            ],
            Ot.vscodeTerminal
        ], n = [];
        for (const p of this.editorService.visibleEditors){
            const g = p.resource;
            if (!g || !e.includes(g.scheme)) continue;
            if (g.scheme === Ot.vscodeTerminal) {
                const b = await this.terminalService.getTerminalFilePathFromResource(g);
                n.push({
                    path: b,
                    isTerminal: !0,
                    resolvedUri: void 0
                });
                continue;
            }
            const f = this.workspaceContextService.asRelativePath(g);
            if (!f) continue;
            const _ = this.workspaceContextService.resolveRelativePath(f);
            _ && n.push({
                path: f,
                isTerminal: !1,
                resolvedUri: _
            });
        }
        const i = [], r = new Set;
        for (const p of n){
            if (p.isTerminal) {
                r.has(p.path) || (r.add(p.path), i.push(p));
                continue;
            }
            const g = p.resolvedUri;
            this.isUriInWorkspace(g) && (this.cursorIgnoreService.shouldBlockUriFromReading(g) || this.shouldIncludeFileInAgent(p.path, g) && (r.has(p.path) || (r.add(p.path), i.push(p))));
        }
        if (this.contextKeyService.getContextKeyValue(ns.viewShowing.key)) {
            const p = this.terminalGroupService.activeGroup;
            if (p) {
                for (const g of p.terminalInstances)if (g.instanceId !== void 0 && g.target === ny.Panel) {
                    if (g.resource.scheme !== Ot.vscodeTerminal) continue;
                    const f = await this.terminalService.getTerminalFilePathFromResource(g.resource);
                    r.has(f) || (r.add(f), i.push({
                        path: f,
                        isTerminal: !0,
                        resolvedUri: void 0
                    }));
                }
            }
        }
        let a = (this.ideEditorsState?.recentlyViewedFiles ?? []).map((p)=>{
            const g = p.relativePath, _ = C0t(g) !== null, b = _ ? void 0 : this.workspaceContextService.resolveRelativePath(g);
            return {
                path: g,
                isTerminal: _,
                resolvedUri: b
            };
        });
        a = a.filter((p)=>{
            if (p.isTerminal) return !0;
            const g = p.resolvedUri;
            return g ? this.shouldIncludeFileInAgent(p.path, g) : !1;
        });
        const l = this.editorService.activeEditor?.resource;
        let c;
        if (l && e.includes(l.scheme)) if (l.scheme === Ot.vscodeTerminal) c = {
            path: await this.terminalService.getTerminalFilePathFromResource(l),
            isTerminal: !0,
            resolvedUri: void 0
        };
        else {
            const p = this.workspaceContextService.asRelativePath(l);
            if (p) {
                const g = this.workspaceContextService.resolveRelativePath(p);
                g && this.isUriInWorkspace(g) && (c = {
                    path: p,
                    isTerminal: !1,
                    resolvedUri: g
                });
            }
        }
        let u = [
            ...a
        ];
        if (c && u.at(-1)?.path !== c.path) if (c.isTerminal) u = u.filter((g)=>g.path !== c.path), u.push(c);
        else {
            const g = c.resolvedUri;
            g && !this.cursorIgnoreService.shouldBlockUriFromReading(g) && this.shouldIncludeFileInAgent(c.path, g) && (u = u.filter((f)=>f.path !== c.path), u.push(c));
        }
        u.length > 10 && (u = u.slice(-10));
        const d = this.remoteAgentService.getConnection() !== null, h = new r9t({
            visibleFiles: i.map((p)=>this.toIdeEditorsStateFile(p, d)).filter((p)=>!!p),
            recentlyViewedFiles: u.map((p)=>this.toIdeEditorsStateFile(p, d)).filter((p)=>!!p)
        });
        this.ideEditorsState = h, this._onDidChangeIdeEditorsState.fire(h);
    }
    async _persistIdeStateLite() {
        if (this._isPersistingIdeState) {
            this._hasPendingPersist = !0;
            return;
        }
        this._isPersistingIdeState = !0;
        try {
            const t = this.editorService.activeEditor?.resource, e = this.remoteAgentService.getConnection() !== null;
            if (!t || !pYa(t.scheme)) return;
            const n = this.workspaceContextService.asRelativePath(t);
            if (!n) return;
            const i = this.workspaceContextService.resolveRelativePath(n);
            if (!i || !this.isUriInWorkspace(i) || this.cursorIgnoreService.shouldBlockUriFromReading(i)) return;
            const r = KR(i, !0, e);
            if (!r) return;
            const s = await this.pathService.userHome({
                preferLocal: !1
            }), o = rt.joinPath(s, ".cursor"), a = rt.joinPath(o, "ide_state.json");
            let l = [];
            try {
                if (await this.fileService.exists(a)) {
                    const p = (await this.fileService.readFile(a)).value.toString();
                    l = U7a.fromJsonString(p).recentlyViewedFiles;
                }
            } catch  {}
            let c = l;
            c = c.filter((h)=>h.absolutePath !== r), c.unshift(new B7a({
                relativePath: n,
                absolutePath: r
            })), c.length > 10 && (c = c.slice(0, 10));
            const d = new U7a({
                recentlyViewedFiles: c
            }).toJsonString();
            try {
                await this.fileService.exists(o) || await this.fileService.createFolder(o);
            } catch  {
                await this.fileService.createFolder(o);
            }
            await this.fileService.writeFile(a, Tr.fromString(d));
        } catch  {} finally{
            this._isPersistingIdeState = !1, this._hasPendingPersist && (this._hasPendingPersist = !1, this._persistIdeStateLite());
        }
    }
}, Re([
    MQ(1e4)
], bVt.prototype, "_persistIdeStateLite", null), bVt = Re([
    F(0, _a),
    F(1, yr),
    F(2, Rh),
    F(3, gr),
    F(4, AE),
    F(5, Nh),
    F(6, is),
    F(7, Rd),
    F(8, cG),
    F(9, Fb),
    F(10, no),
    F(11, Cr),
    F(12, yi),
    F(13, ki),
    F(14, Py),
    F(15, pV),
    F(16, wb),
    F(17, Rr),
    F(18, nr)
], bVt), bn(lEt, bVt, 1);

}

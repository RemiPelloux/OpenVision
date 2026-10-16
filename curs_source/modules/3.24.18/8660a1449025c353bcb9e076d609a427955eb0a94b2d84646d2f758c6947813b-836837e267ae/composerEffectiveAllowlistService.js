import { $Tt } from "./Aeg.js";
import { Di, Gt, Nt, Qe, Vn, st, tt, xa } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { S$, T2 } from "./Sol.js";
import { Bvk, Fvk, Hvk, Qvk, Uvk, a_k, c_k, l_k, n_k, o_k, rug, s_k } from "./Ycg.js";
import { iS, lb } from "./adminSettingsService.js";
import { Cr, _s } from "./experimentService.js";
import { Rn } from "./extensions.js";
import { is, ms } from "./files.js";
import { Jv, hy } from "./gitContextService.js";
import { It } from "./instantiation.js";
import { Gzt } from "./jsonc_2.js";
import { Ki, Ot } from "./network.js";
import { Rd, ih } from "./pathService.js";
import { Jvk } from "./permissionsFilePathUtils.js";
import { fc, hu } from "./productService.js";
import { Wvk } from "./projectPermissionsFileUtils.js";
import { el, sa } from "./reactiveStorageServiceTypes.js";
import { i_k } from "./sandboxReadAccessFile.js";
import { E } from "./tslib.es6.js";
import { fn, rt } from "./uri.js";
import { Vp, nh } from "./uriIdentity.js";
import { F, Re } from "./userDataProfile.js";
import { Sr, yr } from "./workspace.js";
var qal, sug, jze, Bss;
export { Bss, jze, qal, sug };
var __wakaru_qTt_initialized = false;
export function qTt() {
if (__wakaru_qTt_initialized) return;
__wakaru_qTt_initialized = true;
"use strict";
E(), Gt(), Gzt(), Qe(), Ki(), Di(), fn(), ms(), It(), Rn(), Vp(), S$(), hu(), ih(), el(), iS(), _s(), hy(), Sr(), Wvk(), Jvk(), i_k(), qal = "remote_permissions_file_path_admin", sug = 256 * 1024, jze = jn("composerEffectiveAllowlistService"), Bss = class extends st {
    constructor(t, e, n, i, r, s, o, a, l){
        super(), this._fileService = t, this._pathService = e, this._productService = n, this._uriIdentityService = i, this._reactiveStorageService = r, this._adminSettingsService = s, this._experimentService = o, this._workspaceContextService = a, this._gitContextService = l, this._onDidChangePermissionsFile = this._register(new tt), this.onDidChangePermissionsFile = this._onDidChangePermissionsFile.event, this._permissionsFileAllowlists = {
            mcp: [],
            terminal: []
        }, this._permissionsFileAutoRunInstructions = {
            allowInstructions: [],
            blockInstructions: []
        }, this._hasAdminConfiguredPermissionsFilePaths = !1, this._permissionsFileAutoRunOverrides = {}, this._permissionsFileHasAutoRunField = {
            mcp: !1,
            terminal: !1,
            approvalMode: !1
        }, this._permissionsFileAutoRunFieldSources = {}, this._projectPermissionsFileAutoRunInstructions = {
            allowInstructions: [],
            blockInstructions: []
        }, this._projectPermissionsFilePaths = [], this._userSandboxReadAccess = {}, this._repoSandboxReadAccess = {}, this._sandboxJsonFilePaths = [], this._sandboxJsonWatchers = this._register(new Vn), this._permissionsFilesLoad = Promise.resolve(), this._loadPermissionsFiles(), this._register(this._fileService.onDidFilesChange((c)=>this._onDidFilesChange(c))), this._register(this._workspaceContextService.onDidChangeWorkspaceFolders(()=>{
            this._loadPermissionsFiles();
        })), this._register(this._adminSettingsService.onDidChange(()=>{
            this._loadPermissionsFiles();
        })), this._register(this._experimentService.onDidChangeGates((c)=>{
            (c.changedGates === void 0 || c.changedGates.has(qal)) && this._loadPermissionsFiles();
        }));
    }
    async _onDidFilesChange(t) {
        if ((await this._getCandidatePermissionsFilePaths()).some((n)=>t.affects(n))) {
            await this._loadPermissionsFiles();
            return;
        }
        if (this._projectPermissionsFilePaths.some((n)=>t.affects(n)) || Bvk(t)) {
            await this._loadPermissionsFiles();
            return;
        }
        this._sandboxJsonFilePaths.some((n)=>t.affects(n)) && await this._loadPermissionsFiles();
    }
    _getWorkspaceFolderPath(t) {
        return t.scheme === Ot.file && xa ? t.fsPath : t.path;
    }
    _uriFromFilesystemPath(t, e) {
        if (t.scheme === Ot.file) return rt.file(e);
        const n = e.startsWith("/") ? e : `/${e}`;
        return t.with({
            path: n
        });
    }
    _getConfiguredPermissionsFilePaths(t) {
        const n = this._adminSettingsService.getCached()[t];
        return Array.isArray(n) ? n.filter((i)=>typeof i == "string" && i.trim() !== "").map((i)=>i.trim()) : [];
    }
    _resolveHomePath(t, e) {
        return Qvk(t, e, this._uriIdentityService.extUri);
    }
    _getDefaultPermissionsFilePath(t) {
        const e = this._productService.dataFolderName ?? ".cursor";
        return this._uriIdentityService.extUri.joinPath(t, e, "permissions.json");
    }
    _isRemotePermissionsFilePathAdminEnabled() {
        return this._experimentService.checkFeatureGate(qal, {
            disableExposureLog: !1
        });
    }
    _isPermissionsFileAutoRunOverrideEnabled() {
        return this._isRemotePermissionsFilePathAdminEnabled() ? this._adminSettingsService.getCached().permissionsFileOverridesAutoRun === !0 : !1;
    }
    async _getConfiguredCandidatePermissionsFilePaths() {
        const t = await this._pathService.userHome({
            preferLocal: !1
        }), e = await this._pathService.userHome({
            preferLocal: !0
        }), n = this._getConfiguredPermissionsFilePaths("remotePermissionsFilePaths").map((r)=>this._resolveHomePath(t, r)).filter((r)=>r !== void 0), i = this._getConfiguredPermissionsFilePaths("localPermissionsFilePath").map((r)=>this._resolveHomePath(e, r)).filter((r)=>r !== void 0);
        return {
            remote: n,
            local: i
        };
    }
    async _getCandidatePermissionsFilePaths() {
        const t = await this._pathService.userHome({
            preferLocal: !1
        });
        if (!this._isRemotePermissionsFilePathAdminEnabled()) return [
            this._getDefaultPermissionsFilePath(t)
        ];
        const e = await this._getConfiguredCandidatePermissionsFilePaths();
        return e.remote.length === 0 && e.local.length === 0 ? [
            this._getDefaultPermissionsFilePath(t)
        ] : [
            ...e.remote,
            ...e.local
        ];
    }
    async _getFirstExistingPermissionsFilePath(t) {
        for (const e of t)if (await this._fileService.exists(e)) return e;
    }
    async _getSelectedPermissionsFilePaths() {
        if (!this._isRemotePermissionsFilePathAdminEnabled()) {
            const s = await this._pathService.userHome({
                preferLocal: !1
            }), o = this._getDefaultPermissionsFilePath(s);
            return {
                files: await this._fileService.exists(o) ? [
                    {
                        filePath: o,
                        source: "default"
                    }
                ] : [],
                hasAdminConfiguredPermissionsFilePaths: !1
            };
        }
        const t = await this._getConfiguredCandidatePermissionsFilePaths(), e = t.remote.length > 0 || t.local.length > 0;
        if (!e) {
            const s = await this._pathService.userHome({
                preferLocal: !1
            }), o = this._getDefaultPermissionsFilePath(s);
            return {
                files: await this._fileService.exists(o) ? [
                    {
                        filePath: o,
                        source: "default"
                    }
                ] : [],
                hasAdminConfiguredPermissionsFilePaths: !1
            };
        }
        const n = await this._getFirstExistingPermissionsFilePath(t.remote), i = await this._getFirstExistingPermissionsFilePath(t.local), r = [];
        return n !== void 0 && r.push({
            filePath: n,
            source: "remote"
        }), i !== void 0 && r.push({
            filePath: i,
            source: "local"
        }), {
            files: r,
            hasAdminConfiguredPermissionsFilePaths: e
        };
    }
    async _getProjectPermissionsCandidateFilePathGroups() {
        const t = this._uriIdentityService.extUri, e = [];
        for (const n of this._workspaceContextService.getWorkspace().folders){
            const i = this._getWorkspaceFolderPath(n.uri);
            let r = n.uri;
            try {
                const s = await this._gitContextService.getGitRoot(i);
                s !== void 0 && (r = this._uriFromFilesystemPath(n.uri, s));
            } catch  {}
            e.push({
                projectRootUri: r,
                workspaceFolderUri: n.uri
            });
        }
        return Fvk(e, t);
    }
    _loadPermissionsFiles() {
        return this._permissionsFilesLoad = this._permissionsFilesLoad.catch(()=>{}).then(async ()=>{
            await Promise.all([
                this._loadPermissionsFile(),
                this._loadProjectPermissionsFiles(),
                this._loadSandboxReadAccessFiles()
            ]), this._onDidChangePermissionsFile.fire();
        }), this._permissionsFilesLoad;
    }
    async _loadProjectPermissionsFiles() {
        const t = await this._getProjectPermissionsCandidateFilePathGroups(), e = [], n = [];
        for (const i of t){
            const r = [];
            for (const s of i)try {
                if (!await this._fileService.exists(s)) continue;
                const o = await this._fileService.readFile(s), a = Uvk(o.value.toString());
                a !== void 0 && (r.push(a), n.push(s));
            } catch  {}
            r.length > 0 && e.push(r);
        }
        this._projectPermissionsFilePaths = n, this._projectPermissionsFileAutoRunInstructions = Hvk(e);
    }
    async _readSandboxReadAccessFile(t) {
        if (t === void 0 || !await this._fileService.exists(t)) return {};
        try {
            const e = await this._fileService.readFile(t, {
                limits: {
                    size: sug
                }
            });
            return n_k(e.value.toString()) ?? {};
        } catch  {
            return {};
        }
    }
    async _loadSandboxReadAccessFiles() {
        const t = await this._pathService.userHome({
            preferLocal: !1
        }), e = this._productService.dataFolderName ?? ".cursor", n = this._uriIdentityService.extUri.joinPath(t, e, "sandbox.json"), i = this._workspaceContextService.getWorkspace().folders[0], r = i === void 0 ? void 0 : this._uriIdentityService.extUri.joinPath(i.uri, ".cursor", "sandbox.json");
        this._sandboxJsonFilePaths = r === void 0 ? [
            n
        ] : [
            n,
            r
        ];
        const s = new Nt;
        for (const l of this._sandboxJsonFilePaths)s.add(this._fileService.watch(this._uriIdentityService.extUri.dirname(l)));
        this._sandboxJsonWatchers.value = s;
        const [o, a] = await Promise.all([
            this._readSandboxReadAccessFile(n),
            this._readSandboxReadAccessFile(r)
        ]);
        this._userSandboxReadAccess = o, this._repoSandboxReadAccess = a;
    }
    async _loadPermissionsFile() {
        let t = !1;
        try {
            const e = await this._getSelectedPermissionsFilePaths(), n = e.files;
            if (t = e.hasAdminConfiguredPermissionsFilePaths, this._hasAdminConfiguredPermissionsFilePaths = t, n.length === 0) {
                this._permissionsFileAllowlists = {
                    mcp: [],
                    terminal: []
                }, this._permissionsFileApprovalMode = void 0, this._permissionsFileAutoRunInstructions = {
                    allowInstructions: [],
                    blockInstructions: []
                }, this._permissionsFileAutoRunOverrides = {}, this._permissionsFileHasAutoRunField = {
                    mcp: !1,
                    terminal: !1,
                    approvalMode: !1
                }, this._permissionsFileAutoRunFieldSources = {};
                return;
            }
            let i = {
                mcp: [],
                terminal: [],
                approvalMode: void 0,
                autoRunInstructions: {
                    allowInstructions: [],
                    blockInstructions: []
                },
                hasMcpAllowlist: !1,
                hasTerminalAllowlist: !1,
                hasApprovalMode: !1,
                hasAutoRunAllowInstructions: !1,
                hasAutoRunBlockInstructions: !1
            }, r = {};
            const s = {};
            for (const { filePath: o, source: a } of n){
                const l = await this._fileService.readFile(o), c = $Tt(l.value.toString()), u = s_k(c);
                s.mcp === void 0 && u.mcpAllowlist !== void 0 && (s.mcp = a), s.terminal === void 0 && u.terminalAllowlist !== void 0 && (s.terminal = a), s.approvalMode === void 0 && u.approvalMode !== void 0 && (s.approvalMode = a), i = o_k(i, u), r = a_k(r, u);
            }
            this._permissionsFileAllowlists = {
                mcp: i.mcp,
                terminal: i.terminal
            }, this._permissionsFileApprovalMode = i.approvalMode, this._permissionsFileAutoRunInstructions = i.autoRunInstructions, this._permissionsFileAutoRunOverrides = r, this._permissionsFileHasAutoRunField = {
                mcp: r.mcpAllowlist !== void 0,
                terminal: r.terminalAllowlist !== void 0,
                approvalMode: r.approvalMode !== void 0
            }, this._permissionsFileAutoRunFieldSources = s;
        } catch  {
            this._hasAdminConfiguredPermissionsFilePaths = t, this._permissionsFileAllowlists = {
                mcp: [],
                terminal: []
            }, this._permissionsFileApprovalMode = void 0, this._permissionsFileAutoRunInstructions = {
                allowInstructions: [],
                blockInstructions: []
            }, this._permissionsFileAutoRunOverrides = {}, this._permissionsFileHasAutoRunField = {
                mcp: !1,
                terminal: !1,
                approvalMode: !1
            }, this._permissionsFileAutoRunFieldSources = {};
        }
    }
    getPermissionsFileMcpAllowlist() {
        return this._permissionsFileAllowlists.mcp;
    }
    getPermissionsFileTerminalAllowlist() {
        return this._permissionsFileAllowlists.terminal;
    }
    getPermissionsFileApprovalMode() {
        return this._permissionsFileApprovalMode;
    }
    getPermissionsFileAutoRunInstructions() {
        return {
            allowInstructions: [
                ...this._permissionsFileAutoRunInstructions.allowInstructions
            ],
            blockInstructions: [
                ...this._permissionsFileAutoRunInstructions.blockInstructions
            ]
        };
    }
    getProjectPermissionsFileAutoRunInstructions() {
        return {
            allowInstructions: [
                ...this._projectPermissionsFileAutoRunInstructions.allowInstructions
            ],
            blockInstructions: [
                ...this._projectPermissionsFileAutoRunInstructions.blockInstructions
            ]
        };
    }
    getEffectivePermissionsFileApprovalMode() {
        const t = T2();
        return c_k({
            isDashboardAdminControlled: t.isAdminControlled,
            isPermissionsFileAdminControlled: this._hasAdminConfiguredPermissionsFilePaths,
            permissionsFileOverridesAutoRun: this._isPermissionsFileAutoRunOverrideEnabled(),
            permissionsFileHasApprovalMode: this._permissionsFileHasAutoRunField.approvalMode,
            permissionsFileApprovalMode: t.isAdminControlled ? this._permissionsFileAutoRunOverrides.approvalMode : this._permissionsFileApprovalMode
        });
    }
    getEffectivePermissionsFileApprovalModeSource() {
        if (this.getEffectivePermissionsFileApprovalMode() !== void 0) return this._permissionsFileSourceToAutoRunControlSource(this._permissionsFileAutoRunFieldSources.approvalMode) ?? (this._hasAdminConfiguredPermissionsFilePaths ? "adminPermissionsFile" : "userPermissionsFile");
    }
    hasAdminConfiguredPermissionsFilePaths() {
        return this._hasAdminConfiguredPermissionsFilePaths;
    }
    _permissionsFileSourceToAutoRunControlSource(t) {
        switch(t){
            case "remote":
                return "adminRemotePermissionsFile";
            case "local":
                return "adminLocalPermissionsFile";
            case "default":
                return "userPermissionsFile";
            case void 0:
                return;
        }
    }
    _getEffectiveAllowlistSource(t) {
        const e = T2(), n = this._permissionsFileHasAutoRunField[t], i = this._permissionsFileSourceToAutoRunControlSource(this._permissionsFileAutoRunFieldSources[t]), r = this._permissionsFileSourceToAutoRunControlSource(this._permissionsFileAutoRunFieldSources.approvalMode);
        return l_k({
            isDashboardAdminControlled: e.isAdminControlled,
            isPermissionsFileAdminControlled: this._hasAdminConfiguredPermissionsFilePaths,
            permissionsFileOverridesAutoRun: this._isPermissionsFileAutoRunOverrideEnabled(),
            permissionsFileHasAllowlist: n,
            permissionsFileHasApprovalMode: this._permissionsFileHasAutoRunField.approvalMode,
            dashboardOrIdeSource: e.isAdminControlled ? "dashboard" : "ide",
            permissionsFileAllowlistSource: i,
            permissionsFileApprovalModeSource: r
        });
    }
    getEffectiveMcpAllowlistSource() {
        return this._getEffectiveAllowlistSource("mcp");
    }
    getEffectiveTerminalAllowlistSource() {
        return this._getEffectiveAllowlistSource("terminal");
    }
    isDashboardTerminalAllowlistOverriddenByPermissionsFile() {
        return T2().isAdminControlled && this._isPermissionsFileAutoRunOverrideEnabled() && this._hasAdminConfiguredPermissionsFilePaths && this._permissionsFileHasAutoRunField.terminal;
    }
    shouldPermissionsFileConstrainUnrestrictedMode() {
        const t = T2();
        if (t.isAdminControlled && !this._isPermissionsFileAutoRunOverrideEnabled()) return !1;
        const e = t.isAdminControlled ? this._permissionsFileAutoRunOverrides.approvalMode : this._permissionsFileApprovalMode;
        if (e === "unrestricted") return !1;
        if (e === "allowlist" || e === "manual") return !0;
        const n = t.isAdminControlled ? this._permissionsFileAutoRunOverrides.mcpAllowlist ?? [] : this._permissionsFileAllowlists.mcp, i = t.isAdminControlled ? this._permissionsFileAutoRunOverrides.terminalAllowlist ?? [] : this._permissionsFileAllowlists.terminal;
        return n.length > 0 || i.length > 0;
    }
    getEffectiveMcpAllowlist() {
        const t = T2(), e = t.mcpAllowedTools ?? [], n = t.isAdminControlled ? this._permissionsFileAutoRunOverrides.mcpAllowlist ?? [] : this._permissionsFileAllowlists.mcp;
        return rug({
            isDashboardAdminControlled: t.isAdminControlled,
            isPermissionsFileAdminControlled: this._hasAdminConfiguredPermissionsFilePaths,
            permissionsFileOverridesAutoRun: this._isPermissionsFileAutoRunOverrideEnabled(),
            permissionsFileHasAllowlist: this._permissionsFileHasAutoRunField.mcp,
            dashboardOrIdeAllowlist: e,
            permissionsFileAllowlist: n,
            permissionsFileApprovalMode: this._permissionsFileApprovalMode
        });
    }
    getEffectiveTerminalAllowlist() {
        const t = T2(), e = t.allowedCommands ?? [], n = this._reactiveStorageService.applicationUserPersistentStorage.composerState.yoloCommandAllowlist ?? [], i = t.isAdminControlled ? this._permissionsFileAutoRunOverrides.terminalAllowlist ?? [] : this._permissionsFileAllowlists.terminal;
        return rug({
            isDashboardAdminControlled: t.isAdminControlled,
            isPermissionsFileAdminControlled: this._hasAdminConfiguredPermissionsFilePaths,
            permissionsFileOverridesAutoRun: this._isPermissionsFileAutoRunOverrideEnabled(),
            permissionsFileHasAllowlist: this._permissionsFileHasAutoRunField.terminal,
            dashboardOrIdeAllowlist: t.isAdminControlled ? e : n,
            permissionsFileAllowlist: i,
            permissionsFileApprovalMode: this._permissionsFileApprovalMode
        });
    }
    canAddToAllowlistFromIde(t) {
        return T2().isAdminControlled || this._hasAdminConfiguredPermissionsFilePaths || this._permissionsFileApprovalMode !== void 0 ? !1 : t === "mcp" ? this._permissionsFileAllowlists.mcp.length === 0 : this._permissionsFileAllowlists.terminal.length === 0;
    }
    getSandboxJsonReadBoundary() {
        return this._repoSandboxReadAccess.readBoundary ?? this._userSandboxReadAccess.readBoundary;
    }
    getSandboxJsonReadAllowlist() {
        return this._repoSandboxReadAccess.additionalReadPaths ?? this._userSandboxReadAccess.additionalReadPaths;
    }
    getSandboxJsonReadBoundarySource() {
        if (this._repoSandboxReadAccess.readBoundary !== void 0) return "repoSandboxJson";
        if (this._userSandboxReadAccess.readBoundary !== void 0) return "userSandboxJson";
    }
    getSandboxJsonReadAllowlistSource() {
        if (this._repoSandboxReadAccess.additionalReadPaths !== void 0) return "repoSandboxJson";
        if (this._userSandboxReadAccess.additionalReadPaths !== void 0) return "userSandboxJson";
    }
    getUserSandboxDataFolderName() {
        return this._productService.dataFolderName ?? ".cursor";
    }
}, Bss = Re([
    F(0, is),
    F(1, Rd),
    F(2, fc),
    F(3, nh),
    F(4, sa),
    F(5, lb),
    F(6, Cr),
    F(7, yr),
    F(8, Jv)
], Bss), bn(jze, Bss, 1);

}

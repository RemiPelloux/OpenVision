import { K5, KE } from "./ECo.js";
import { He, Oo, Se, bt, cn, jn, ve, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { R1, pw } from "./adminSettingsService.js";
import { Ctt } from "./cgh.js";
import { Kr, qs } from "./experimentService.js";
import { Pn } from "./extensions.js";
import { Fi, Ii } from "./files.js";
import { kk, r0 } from "./gitContextService.js";
import { Ze } from "./instantiation.js";
import { vCt } from "./jsonc_2.js";
import { gt, li } from "./network.js";
import { fu, zl } from "./pathService.js";
import { $0o, $Ch, U0o, UCh, zYv } from "./permissionsFilePathUtils.js";
import { Ka, jo } from "./productService.js";
import { FYv, OCh } from "./projectPermissionsFileUtils.js";
import { mn, vn } from "./qIc.js";
import { Do, Ha } from "./reactiveStorageServiceTypes.js";
import { ZYv } from "./sandboxReadAccessFile.js";
import { x } from "./tslib.es6.js";
import { Ee, Qt } from "./uri.js";
import { Ea, rl } from "./uriIdentity.js";
import { Jn, ci } from "./workspace.js";
function F0o(e) {
    return e.path.replace(/\\/g, "/").endsWith(OCh);
}
function RYv(e, t, n) {
    const i = [
        e
    ];
    if (!n.isEqual(e, t)) {
        if (!n.isEqualOrParent(t, e)) return [
            n.joinPath(t, ".cursor", "permissions.json")
        ];
        const o = n.relativePath(e, t);
        if (o !== void 0 && o.length > 0) {
            let a = e;
            for (const c of o.split("/").filter(Boolean))a = n.joinPath(a, c), i.push(a);
        }
    }
    const r = new Set, s = [];
    for (const o of i){
        const a = n.joinPath(o, ".cursor", "permissions.json"), c = n.getComparisonKey(a);
        r.has(c) || (r.add(c), s.push(a));
    }
    return s;
}
function DYv(e, t) {
    const n = [];
    for (const i of e){
        const r = RYv(i.projectRootUri, i.workspaceFolderUri, t);
        r.length > 0 && n.push(r);
    }
    return n;
}
function MYv(e) {
    for (const t of e.rawAdded)if (F0o(t)) return !0;
    for (const t of e.rawUpdated)if (F0o(t)) return !0;
    for (const t of e.rawDeleted)if (F0o(t)) return !0;
    return !1;
}
function PCh(e) {
    if (Array.isArray(e)) return e.filter((t)=>typeof t == "string");
}
function LCh(e) {
    if (e === null || typeof e != "object" || Array.isArray(e)) return;
    const t = e;
    return {
        allowInstructions: PCh(t.allow_instructions),
        blockInstructions: PCh(t.block_instructions)
    };
}
function PYv(e) {
    let t;
    try {
        t = Ctt(e);
    } catch  {
        return;
    }
    if (t === null || typeof t != "object" || Array.isArray(t)) return;
    const n = t, i = n.autoReview ?? n.autoRun;
    return {
        autoRun: LCh(i)
    };
}
function LYv(e, t) {
    return {
        allowInstructions: t.autoRun?.allowInstructions !== void 0 ? t.autoRun.allowInstructions : e.allowInstructions,
        blockInstructions: t.autoRun?.blockInstructions !== void 0 ? t.autoRun.blockInstructions : e.blockInstructions
    };
}
function NCh(e, t) {
    const n = new Set(e);
    for (const i of t)n.has(i) || (n.add(i), e.push(i));
}
function NYv(e) {
    return e.reduce((t, n)=>LYv(t, n), {
        allowInstructions: [],
        blockInstructions: []
    });
}
function OYv(e) {
    const t = {
        allowInstructions: [],
        blockInstructions: []
    };
    for (const n of e){
        const i = NYv(n);
        NCh(t.allowInstructions, i.allowInstructions), NCh(t.blockInstructions, i.blockInstructions);
    }
    return t;
}
function FCh(e) {
    return e.split(/[/\\]/).filter((t)=>t !== "" && t !== ".");
}
function BYv(e) {
    const t = e.trim();
    return t.startsWith("\\\\") || t.startsWith("//");
}
function UYv(e) {
    return e.scheme === gt.file && e.authority.length > 0;
}
function $Yv(e) {
    const t = e.trim();
    return $Ch.test(t) && !U0o.test(t);
}
function HYv(e) {
    const t = e.trim();
    return U0o.test(t) && !$0o.test(t);
}
function WYv(e) {
    return e.split(/[/\\]/).some((t)=>t === "..");
}
function GYv(e) {
    return UCh.test(e);
}
function VYv(e) {
    return e.startsWith("\\") && !e.startsWith("\\\\");
}
function jYv(e) {
    return e.startsWith("~/") || e.startsWith("~\\");
}
function B0o(e) {
    return e.scheme === gt.file;
}
function BCh(e, t) {
    const n = Ee.file(t).path;
    return e.with({
        path: n
    });
}
function qYv(e, t, n) {
    const i = t.trim();
    if (i === "" || i === "~" || BYv(i) || $Yv(i) || HYv(i) || WYv(i)) return;
    if ($0o.test(i)) {
        const s = Ee.parse(i);
        return s.scheme !== gt.file || UYv(s) ? void 0 : B0o(e) ? s : e.with({
            path: s.path
        });
    }
    if (GYv(i) || Oo && VYv(i)) return B0o(e) ? Ee.file(i) : BCh(e, i);
    if (jYv(i)) {
        const s = FCh(i.slice(2));
        return s.length === 0 ? void 0 : n.joinPath(e, ...s);
    }
    if (i.startsWith("/")) return e.with({
        path: i
    });
    const r = FCh(i);
    if (r.length !== 0) return n.joinPath(e, ...r);
}
function KYv(e) {
    if (Array.isArray(e)) return e.filter((t)=>typeof t == "string");
}
function YYv(e) {
    if (e === "system" || e === "workspace") return e;
}
function XYv(e) {
    let t;
    try {
        t = Ctt(e);
    } catch  {
        return;
    }
    if (t === null || typeof t != "object" || Array.isArray(t)) return;
    const n = t;
    return {
        readBoundary: YYv(n.readBoundary),
        additionalReadPaths: KYv(n.additionalReadPaths)
    };
}
function QYv(e) {
    return e === "allowlist" || e === "unrestricted" || e === "manual" ? e : void 0;
}
function JYv(e) {
    const t = e.autoReview ?? e.autoRun;
    return {
        mcpAllowlist: Array.isArray(e.mcpAllowlist) ? e.mcpAllowlist.filter((n)=>typeof n == "string") : void 0,
        terminalAllowlist: Array.isArray(e.terminalAllowlist) ? e.terminalAllowlist.filter((n)=>typeof n == "string") : void 0,
        approvalMode: QYv(e.approvalMode),
        autoRun: LCh(t)
    };
}
function eXv(e, t) {
    return {
        mcp: e.hasMcpAllowlist ? e.mcp : t.mcpAllowlist ?? e.mcp,
        terminal: e.hasTerminalAllowlist ? e.terminal : t.terminalAllowlist ?? e.terminal,
        approvalMode: e.hasApprovalMode ? e.approvalMode : t.approvalMode,
        autoRunInstructions: {
            allowInstructions: e.hasAutoRunAllowInstructions ? e.autoRunInstructions.allowInstructions : t.autoRun?.allowInstructions ?? e.autoRunInstructions.allowInstructions,
            blockInstructions: e.hasAutoRunBlockInstructions ? e.autoRunInstructions.blockInstructions : t.autoRun?.blockInstructions ?? e.autoRunInstructions.blockInstructions
        },
        hasMcpAllowlist: e.hasMcpAllowlist || t.mcpAllowlist !== void 0,
        hasTerminalAllowlist: e.hasTerminalAllowlist || t.terminalAllowlist !== void 0,
        hasApprovalMode: e.hasApprovalMode || t.approvalMode !== void 0,
        hasAutoRunAllowInstructions: e.hasAutoRunAllowInstructions || t.autoRun?.allowInstructions !== void 0,
        hasAutoRunBlockInstructions: e.hasAutoRunBlockInstructions || t.autoRun?.blockInstructions !== void 0
    };
}
function tXv(e, t) {
    return {
        mcpAllowlist: e.mcpAllowlist ?? t.mcpAllowlist,
        terminalAllowlist: e.terminalAllowlist ?? t.terminalAllowlist,
        approvalMode: e.approvalMode ?? t.approvalMode
    };
}
function HCh({ isDashboardAdminControlled: e, isPermissionsFileAdminControlled: t, permissionsFileOverridesAutoRun: n, permissionsFileHasAllowlist: i, dashboardOrIdeAllowlist: r, permissionsFileAllowlist: s, permissionsFileApprovalMode: o }) {
    return e ? n && t && i ? s : r : t ? i || o !== void 0 ? s : [] : o !== void 0 || s.length > 0 ? s : r;
}
function nXv({ isDashboardAdminControlled: e, isPermissionsFileAdminControlled: t, permissionsFileOverridesAutoRun: n, permissionsFileHasAllowlist: i, permissionsFileHasApprovalMode: r, dashboardOrIdeSource: s, permissionsFileAllowlistSource: o, permissionsFileApprovalModeSource: a }) {
    return e ? n && t && i ? o ?? "adminPermissionsFile" : "dashboard" : t ? i ? o ?? "adminPermissionsFile" : r ? a ?? "adminPermissionsFile" : "adminPermissionsFile" : i ? o ?? "userPermissionsFile" : r ? a ?? "userPermissionsFile" : s;
}
function iXv({ isDashboardAdminControlled: e, isPermissionsFileAdminControlled: t, permissionsFileOverridesAutoRun: n, permissionsFileHasApprovalMode: i, permissionsFileApprovalMode: r }) {
    if (!(e && (!n || !t))) return i ? r : void 0;
}
var H0o, WCh, uLe, cQi;
export { $Yv, B0o, BCh, BYv, DYv, F0o, FCh, GYv, H0o, HCh, HYv, JYv, KYv, LCh, LYv, MYv, NCh, NYv, OYv, PCh, PYv, QYv, RYv, UYv, VYv, WCh, WYv, XYv, YYv, cQi, eXv, iXv, jYv, nXv, qYv, tXv, uLe };
var __wakaru_Att_initialized = false;
export function Att() {
if (__wakaru_Att_initialized) return;
__wakaru_Att_initialized = true;
"use strict";
x(), bt(), vCt(), Se(), li(), jn(), Qt(), Fi(), Ze(), Pn(), rl(), K5(), Ka(), fu(), Ha(), R1(), qs(), r0(), ci(), FYv(), zYv(), ZYv(), H0o = "remote_permissions_file_path_admin", WCh = 256 * 1024, uLe = vn("composerEffectiveAllowlistService"), cQi = class extends we {
    constructor(e, t, n, i, r, s, o, a, c){
        super(), this._fileService = e, this._pathService = t, this._productService = n, this._uriIdentityService = i, this._reactiveStorageService = r, this._adminSettingsService = s, this._experimentService = o, this._workspaceContextService = a, this._gitContextService = c, this._onDidChangePermissionsFile = this._register(new ve), this.onDidChangePermissionsFile = this._onDidChangePermissionsFile.event, this._permissionsFileAllowlists = {
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
        }, this._projectPermissionsFilePaths = [], this._userSandboxReadAccess = {}, this._repoSandboxReadAccess = {}, this._sandboxJsonFilePaths = [], this._sandboxJsonWatchers = this._register(new cn), this._permissionsFilesLoad = Promise.resolve(), this._loadPermissionsFiles(), this._register(this._fileService.onDidFilesChange((l)=>this._onDidFilesChange(l))), this._register(this._workspaceContextService.onDidChangeWorkspaceFolders(()=>{
            this._loadPermissionsFiles();
        })), this._register(this._adminSettingsService.onDidChange(()=>{
            this._loadPermissionsFiles();
        })), this._register(this._experimentService.onDidChangeGates((l)=>{
            (l.changedGates === void 0 || l.changedGates.has(H0o)) && this._loadPermissionsFiles();
        }));
    }
    async _onDidFilesChange(e) {
        if ((await this._getCandidatePermissionsFilePaths()).some((n)=>e.affects(n))) {
            await this._loadPermissionsFiles();
            return;
        }
        if (this._projectPermissionsFilePaths.some((n)=>e.affects(n)) || MYv(e)) {
            await this._loadPermissionsFiles();
            return;
        }
        this._sandboxJsonFilePaths.some((n)=>e.affects(n)) && await this._loadPermissionsFiles();
    }
    _getWorkspaceFolderPath(e) {
        return e.scheme === gt.file && Oo ? e.fsPath : e.path;
    }
    _uriFromFilesystemPath(e, t) {
        if (e.scheme === gt.file) return Ee.file(t);
        const n = t.startsWith("/") ? t : `/${t}`;
        return e.with({
            path: n
        });
    }
    _getConfiguredPermissionsFilePaths(e) {
        const n = this._adminSettingsService.getCached()[e];
        return Array.isArray(n) ? n.filter((i)=>typeof i == "string" && i.trim() !== "").map((i)=>i.trim()) : [];
    }
    _resolveHomePath(e, t) {
        return qYv(e, t, this._uriIdentityService.extUri);
    }
    _getDefaultPermissionsFilePath(e) {
        const t = this._productService.dataFolderName ?? ".cursor";
        return this._uriIdentityService.extUri.joinPath(e, t, "permissions.json");
    }
    _isRemotePermissionsFilePathAdminEnabled() {
        return this._experimentService.checkFeatureGate(H0o, {
            disableExposureLog: !1
        });
    }
    _isPermissionsFileAutoRunOverrideEnabled() {
        return this._isRemotePermissionsFilePathAdminEnabled() ? this._adminSettingsService.getCached().permissionsFileOverridesAutoRun === !0 : !1;
    }
    async _getConfiguredCandidatePermissionsFilePaths() {
        const e = await this._pathService.userHome({
            preferLocal: !1
        }), t = await this._pathService.userHome({
            preferLocal: !0
        }), n = this._getConfiguredPermissionsFilePaths("remotePermissionsFilePaths").map((r)=>this._resolveHomePath(e, r)).filter((r)=>r !== void 0), i = this._getConfiguredPermissionsFilePaths("localPermissionsFilePath").map((r)=>this._resolveHomePath(t, r)).filter((r)=>r !== void 0);
        return {
            remote: n,
            local: i
        };
    }
    async _getCandidatePermissionsFilePaths() {
        const e = await this._pathService.userHome({
            preferLocal: !1
        });
        if (!this._isRemotePermissionsFilePathAdminEnabled()) return [
            this._getDefaultPermissionsFilePath(e)
        ];
        const t = await this._getConfiguredCandidatePermissionsFilePaths();
        return t.remote.length === 0 && t.local.length === 0 ? [
            this._getDefaultPermissionsFilePath(e)
        ] : [
            ...t.remote,
            ...t.local
        ];
    }
    async _getFirstExistingPermissionsFilePath(e) {
        for (const t of e)if (await this._fileService.exists(t)) return t;
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
        const e = await this._getConfiguredCandidatePermissionsFilePaths(), t = e.remote.length > 0 || e.local.length > 0;
        if (!t) {
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
        const n = await this._getFirstExistingPermissionsFilePath(e.remote), i = await this._getFirstExistingPermissionsFilePath(e.local), r = [];
        return n !== void 0 && r.push({
            filePath: n,
            source: "remote"
        }), i !== void 0 && r.push({
            filePath: i,
            source: "local"
        }), {
            files: r,
            hasAdminConfiguredPermissionsFilePaths: t
        };
    }
    async _getProjectPermissionsCandidateFilePathGroups() {
        const e = this._uriIdentityService.extUri, t = [];
        for (const n of this._workspaceContextService.getWorkspace().folders){
            const i = this._getWorkspaceFolderPath(n.uri);
            let r = n.uri;
            try {
                const s = await this._gitContextService.getGitRoot(i);
                s !== void 0 && (r = this._uriFromFilesystemPath(n.uri, s));
            } catch  {}
            t.push({
                projectRootUri: r,
                workspaceFolderUri: n.uri
            });
        }
        return DYv(t, e);
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
        const e = await this._getProjectPermissionsCandidateFilePathGroups(), t = [], n = [];
        for (const i of e){
            const r = [];
            for (const s of i)try {
                if (!await this._fileService.exists(s)) continue;
                const o = await this._fileService.readFile(s), a = PYv(o.value.toString());
                a !== void 0 && (r.push(a), n.push(s));
            } catch  {}
            r.length > 0 && t.push(r);
        }
        this._projectPermissionsFilePaths = n, this._projectPermissionsFileAutoRunInstructions = OYv(t);
    }
    async _readSandboxReadAccessFile(e) {
        if (e === void 0 || !await this._fileService.exists(e)) return {};
        try {
            const t = await this._fileService.readFile(e, {
                limits: {
                    size: WCh
                }
            });
            return XYv(t.value.toString()) ?? {};
        } catch  {
            return {};
        }
    }
    async _loadSandboxReadAccessFiles() {
        const e = await this._pathService.userHome({
            preferLocal: !1
        }), t = this._productService.dataFolderName ?? ".cursor", n = this._uriIdentityService.extUri.joinPath(e, t, "sandbox.json"), i = this._workspaceContextService.getWorkspace().folders[0], r = i === void 0 ? void 0 : this._uriIdentityService.extUri.joinPath(i.uri, ".cursor", "sandbox.json");
        this._sandboxJsonFilePaths = r === void 0 ? [
            n
        ] : [
            n,
            r
        ];
        const s = new He;
        for (const c of this._sandboxJsonFilePaths)s.add(this._fileService.watch(this._uriIdentityService.extUri.dirname(c)));
        this._sandboxJsonWatchers.value = s;
        const [o, a] = await Promise.all([
            this._readSandboxReadAccessFile(n),
            this._readSandboxReadAccessFile(r)
        ]);
        this._userSandboxReadAccess = o, this._repoSandboxReadAccess = a;
    }
    async _loadPermissionsFile() {
        let e = !1;
        try {
            const t = await this._getSelectedPermissionsFilePaths(), n = t.files;
            if (e = t.hasAdminConfiguredPermissionsFilePaths, this._hasAdminConfiguredPermissionsFilePaths = e, n.length === 0) {
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
                const c = await this._fileService.readFile(o), l = Ctt(c.value.toString()), u = JYv(l);
                s.mcp === void 0 && u.mcpAllowlist !== void 0 && (s.mcp = a), s.terminal === void 0 && u.terminalAllowlist !== void 0 && (s.terminal = a), s.approvalMode === void 0 && u.approvalMode !== void 0 && (s.approvalMode = a), i = eXv(i, u), r = tXv(r, u);
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
            this._hasAdminConfiguredPermissionsFilePaths = e, this._permissionsFileAllowlists = {
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
        const e = KE();
        return iXv({
            isDashboardAdminControlled: e.isAdminControlled,
            isPermissionsFileAdminControlled: this._hasAdminConfiguredPermissionsFilePaths,
            permissionsFileOverridesAutoRun: this._isPermissionsFileAutoRunOverrideEnabled(),
            permissionsFileHasApprovalMode: this._permissionsFileHasAutoRunField.approvalMode,
            permissionsFileApprovalMode: e.isAdminControlled ? this._permissionsFileAutoRunOverrides.approvalMode : this._permissionsFileApprovalMode
        });
    }
    getEffectivePermissionsFileApprovalModeSource() {
        if (this.getEffectivePermissionsFileApprovalMode() !== void 0) return this._permissionsFileSourceToAutoRunControlSource(this._permissionsFileAutoRunFieldSources.approvalMode) ?? (this._hasAdminConfiguredPermissionsFilePaths ? "adminPermissionsFile" : "userPermissionsFile");
    }
    hasAdminConfiguredPermissionsFilePaths() {
        return this._hasAdminConfiguredPermissionsFilePaths;
    }
    _permissionsFileSourceToAutoRunControlSource(e) {
        switch(e){
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
    _getEffectiveAllowlistSource(e) {
        const t = KE(), n = this._permissionsFileHasAutoRunField[e], i = this._permissionsFileSourceToAutoRunControlSource(this._permissionsFileAutoRunFieldSources[e]), r = this._permissionsFileSourceToAutoRunControlSource(this._permissionsFileAutoRunFieldSources.approvalMode);
        return nXv({
            isDashboardAdminControlled: t.isAdminControlled,
            isPermissionsFileAdminControlled: this._hasAdminConfiguredPermissionsFilePaths,
            permissionsFileOverridesAutoRun: this._isPermissionsFileAutoRunOverrideEnabled(),
            permissionsFileHasAllowlist: n,
            permissionsFileHasApprovalMode: this._permissionsFileHasAutoRunField.approvalMode,
            dashboardOrIdeSource: t.isAdminControlled ? "dashboard" : "ide",
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
        return KE().isAdminControlled && this._isPermissionsFileAutoRunOverrideEnabled() && this._hasAdminConfiguredPermissionsFilePaths && this._permissionsFileHasAutoRunField.terminal;
    }
    shouldPermissionsFileConstrainUnrestrictedMode() {
        const e = KE();
        if (e.isAdminControlled && !this._isPermissionsFileAutoRunOverrideEnabled()) return !1;
        const t = e.isAdminControlled ? this._permissionsFileAutoRunOverrides.approvalMode : this._permissionsFileApprovalMode;
        if (t === "unrestricted") return !1;
        if (t === "allowlist" || t === "manual") return !0;
        const n = e.isAdminControlled ? this._permissionsFileAutoRunOverrides.mcpAllowlist ?? [] : this._permissionsFileAllowlists.mcp, i = e.isAdminControlled ? this._permissionsFileAutoRunOverrides.terminalAllowlist ?? [] : this._permissionsFileAllowlists.terminal;
        return n.length > 0 || i.length > 0;
    }
    getEffectiveMcpAllowlist() {
        const e = KE(), t = e.mcpAllowedTools ?? [], n = e.isAdminControlled ? this._permissionsFileAutoRunOverrides.mcpAllowlist ?? [] : this._permissionsFileAllowlists.mcp;
        return HCh({
            isDashboardAdminControlled: e.isAdminControlled,
            isPermissionsFileAdminControlled: this._hasAdminConfiguredPermissionsFilePaths,
            permissionsFileOverridesAutoRun: this._isPermissionsFileAutoRunOverrideEnabled(),
            permissionsFileHasAllowlist: this._permissionsFileHasAutoRunField.mcp,
            dashboardOrIdeAllowlist: t,
            permissionsFileAllowlist: n,
            permissionsFileApprovalMode: this._permissionsFileApprovalMode
        });
    }
    getEffectiveTerminalAllowlist() {
        const e = KE(), t = e.allowedCommands ?? [], n = this._reactiveStorageService.applicationUserPersistentStorage.composerState.yoloCommandAllowlist ?? [], i = e.isAdminControlled ? this._permissionsFileAutoRunOverrides.terminalAllowlist ?? [] : this._permissionsFileAllowlists.terminal;
        return HCh({
            isDashboardAdminControlled: e.isAdminControlled,
            isPermissionsFileAdminControlled: this._hasAdminConfiguredPermissionsFilePaths,
            permissionsFileOverridesAutoRun: this._isPermissionsFileAutoRunOverrideEnabled(),
            permissionsFileHasAllowlist: this._permissionsFileHasAutoRunField.terminal,
            dashboardOrIdeAllowlist: e.isAdminControlled ? t : n,
            permissionsFileAllowlist: i,
            permissionsFileApprovalMode: this._permissionsFileApprovalMode
        });
    }
    canAddToAllowlistFromIde(e) {
        return KE().isAdminControlled || this._hasAdminConfiguredPermissionsFilePaths || this._permissionsFileApprovalMode !== void 0 ? !1 : e === "mcp" ? this._permissionsFileAllowlists.mcp.length === 0 : this._permissionsFileAllowlists.terminal.length === 0;
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
}, cQi = ie([
    C(0, Ii),
    C(1, zl),
    C(2, jo),
    C(3, Ea),
    C(4, Do),
    C(5, pw),
    C(6, Kr),
    C(7, Jn),
    C(8, kk)
], cQi), mn(uLe, cQi, 1);

}

import { Nhk } from "./Aeg.js";
import { Di, a_ } from "./Iwo.js";
import { yY } from "./date.js";
import { SM } from "./decorators.js";
import { Ki, Ot, em } from "./network.js";
import { Ul, Z0, g4, l$e, nL } from "./path_2.js";
import { ED, nY } from "./process.js";
import { Lr, Os } from "./resources.js";
import { E } from "./tslib.es6.js";
import { fn, rt } from "./uri.js";
import { Re } from "./userDataProfile.js";
import { hFd, sl } from "./ze.js";
var Nxn, XM;
export { Nxn, XM };
var __wakaru_srl_initialized = false;
export function srl() {
if (__wakaru_srl_initialized) return;
__wakaru_srl_initialized = true;
"use strict";
E(), yY(), SM(), Ki(), Ul(), nY(), Lr(), fn(), Di(), Nxn = /^([^.]+\..+)[:=](.+)$/, XM = class {
    constructor(t, e, n){
        this._args = t, this.paths = e, this.productService = n;
    }
    get appRoot() {
        return g4(em.asFileUri("").fsPath);
    }
    get userHome() {
        return rt.file(this.paths.homeDir);
    }
    get userDataPath() {
        return this.paths.userDataDir;
    }
    get appSettingsHome() {
        return rt.file(Z0(this.userDataPath, "User"));
    }
    get tmpDir() {
        return rt.file(this.paths.tmpDir);
    }
    get cacheHome() {
        return rt.file(this.userDataPath);
    }
    get stateResource() {
        return Os(this.appSettingsHome, "globalStorage", "storage.json");
    }
    get userRoamingDataHome() {
        return this.appSettingsHome.with({
            scheme: Ot.vscodeUserData
        });
    }
    get userDataSyncHome() {
        return Os(this.appSettingsHome, "sync");
    }
    get logsHome() {
        if (!this.args.logsPath) {
            const t = hFd(new Date).replace(/-|:|\.\d+Z$/g, "");
            this.args.logsPath = Z0(this.userDataPath, "logs", t);
        }
        return rt.file(this.args.logsPath);
    }
    get sync() {
        return this.args.sync;
    }
    get machineSettingsResource() {
        return Os(rt.file(Z0(this.userDataPath, "Machine")), "settings.json");
    }
    get workspaceStorageHome() {
        return Os(this.appSettingsHome, "workspaceStorage");
    }
    get localHistoryHome() {
        return Os(this.appSettingsHome, "History");
    }
    get keyboardLayoutResource() {
        return Os(this.userRoamingDataHome, "keyboardLayout.json");
    }
    get argvResource() {
        const t = ED.VSCODE_PORTABLE;
        return t ? rt.file(Z0(t, "argv.json")) : Os(this.userHome, this.productService.dataFolderName, "argv.json");
    }
    get isExtensionDevelopment() {
        return !!this.args.extensionDevelopmentPath;
    }
    get untitledWorkspacesHome() {
        return rt.file(Z0(this.userDataPath, "Workspaces"));
    }
    get builtinExtensionsPath() {
        const t = this.args["builtin-extensions-dir"];
        return t ? l$e(t) : nL(Z0(em.asFileUri("").fsPath, "..", "extensions"));
    }
    get extensionsDownloadLocation() {
        const t = this.args["extensions-download-dir"];
        return t ? rt.file(l$e(t)) : rt.file(Z0(this.userDataPath, "CachedExtensionVSIXs"));
    }
    get extensionsPath() {
        const t = this.args["extensions-dir"];
        if (t) return l$e(t);
        const e = ED.VSCODE_EXTENSIONS;
        if (e) return e;
        const n = ED.VSCODE_PORTABLE;
        return n ? Z0(n, "extensions") : Os(this.userHome, this.productService.dataFolderName, "extensions").fsPath;
    }
    get extensionDevelopmentLocationURI() {
        const t = this.args.extensionDevelopmentPath;
        if (Array.isArray(t)) return t.map((e)=>/^[^:/?#]+?:\/\//.test(e) ? rt.parse(e) : rt.file(nL(e)));
    }
    get extensionDevelopmentKind() {
        return this.args.extensionDevelopmentKind?.map((t)=>t === "ui" || t === "workspace" || t === "web" ? t : "workspace");
    }
    get extensionTestsLocationURI() {
        const t = this.args.extensionTestsPath;
        if (t) return /^[^:/?#]+?:\/\//.test(t) ? rt.parse(t) : rt.file(nL(t));
    }
    get disableExtensions() {
        if (this.args["disable-extensions"]) return !0;
        const t = this.args["disable-extension"];
        if (t) {
            if (typeof t == "string") return [
                t
            ];
            if (Array.isArray(t) && t.length > 0) return t;
        }
        return !1;
    }
    get debugExtensionHost() {
        return Nhk(this.args, this.isBuilt);
    }
    get debugRenderer() {
        return !!this.args.debugRenderer;
    }
    get isBuilt() {
        return !ED.VSCODE_DEV;
    }
    get verbose() {
        return !!this.args.verbose;
    }
    get logLevel() {
        return this.args.log?.find((t)=>!Nxn.test(t));
    }
    get extensionLogLevel() {
        const t = [];
        for (const e of this.args.log || []){
            const n = Nxn.exec(e);
            n && n[1] && n[2] && t.push([
                n[1],
                n[2]
            ]);
        }
        return t.length ? t : void 0;
    }
    get serviceMachineIdResource() {
        return Os(rt.file(this.userDataPath), "machineid");
    }
    get crashReporterId() {
        return this.args["crash-reporter-id"];
    }
    get crashReporterDirectory() {
        return this.args["crash-reporter-directory"];
    }
    get disableTelemetry() {
        return !!this.args["disable-telemetry"];
    }
    get disableWorkspaceTrust() {
        return !!this.args["disable-workspace-trust"];
    }
    get useInMemorySecretStorage() {
        return !!this.args["use-inmemory-secretstorage"];
    }
    get policyFile() {
        if (this.args["__enable-file-policy"] || a_) {
            const t = ED.VSCODE_PORTABLE;
            return t ? rt.file(Z0(t, "policy.json")) : Os(this.userHome, this.productService.dataFolderName, "policy.json");
        }
    }
    get continueOn() {
        return this.args.continueOn;
    }
    set continueOn(t) {
        this.args.continueOn = t;
    }
    get args() {
        return this._args;
    }
}, Re([
    sl
], XM.prototype, "appRoot", null), Re([
    sl
], XM.prototype, "userHome", null), Re([
    sl
], XM.prototype, "userDataPath", null), Re([
    sl
], XM.prototype, "appSettingsHome", null), Re([
    sl
], XM.prototype, "tmpDir", null), Re([
    sl
], XM.prototype, "cacheHome", null), Re([
    sl
], XM.prototype, "stateResource", null), Re([
    sl
], XM.prototype, "userRoamingDataHome", null), Re([
    sl
], XM.prototype, "userDataSyncHome", null), Re([
    sl
], XM.prototype, "sync", null), Re([
    sl
], XM.prototype, "machineSettingsResource", null), Re([
    sl
], XM.prototype, "workspaceStorageHome", null), Re([
    sl
], XM.prototype, "localHistoryHome", null), Re([
    sl
], XM.prototype, "keyboardLayoutResource", null), Re([
    sl
], XM.prototype, "argvResource", null), Re([
    sl
], XM.prototype, "isExtensionDevelopment", null), Re([
    sl
], XM.prototype, "untitledWorkspacesHome", null), Re([
    sl
], XM.prototype, "builtinExtensionsPath", null), Re([
    sl
], XM.prototype, "extensionsPath", null), Re([
    sl
], XM.prototype, "extensionDevelopmentLocationURI", null), Re([
    sl
], XM.prototype, "extensionDevelopmentKind", null), Re([
    sl
], XM.prototype, "extensionTestsLocationURI", null), Re([
    sl
], XM.prototype, "debugExtensionHost", null), Re([
    sl
], XM.prototype, "logLevel", null), Re([
    sl
], XM.prototype, "extensionLogLevel", null), Re([
    sl
], XM.prototype, "serviceMachineIdResource", null), Re([
    sl
], XM.prototype, "disableTelemetry", null), Re([
    sl
], XM.prototype, "disableWorkspaceTrust", null), Re([
    sl
], XM.prototype, "useInMemorySecretStorage", null), Re([
    sl
], XM.prototype, "policyFile", null);

}

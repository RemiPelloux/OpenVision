import { jn, vf } from "./HVr.js";
import { ie } from "./actions_2.js";
import { bVv } from "./cgh.js";
import { X9 } from "./date.js";
import { sw } from "./decorators.js";
import { Gd, gt, li } from "./network.js";
import { Eqe, Jk, ba, gD, kO } from "./path_2.js";
import { QH, oR } from "./process.js";
import { jMc, xo } from "./qIc.js";
import { Li, jr } from "./resources.js";
import { x } from "./tslib.es6.js";
import { Ee, Qt } from "./uri.js";
var OVt, FI;
export { FI, OVt };
var __wakaru_dko_initialized = false;
export function dko() {
if (__wakaru_dko_initialized) return;
__wakaru_dko_initialized = true;
"use strict";
x(), X9(), sw(), li(), ba(), QH(), Li(), Qt(), jn(), OVt = /^([^.]+\..+)[:=](.+)$/, FI = class {
    constructor(e, t, n){
        this._args = e, this.paths = t, this.productService = n;
    }
    get appRoot() {
        return kO(Gd.asFileUri("").fsPath);
    }
    get userHome() {
        return Ee.file(this.paths.homeDir);
    }
    get userDataPath() {
        return this.paths.userDataDir;
    }
    get appSettingsHome() {
        return Ee.file(Jk(this.userDataPath, "User"));
    }
    get tmpDir() {
        return Ee.file(this.paths.tmpDir);
    }
    get cacheHome() {
        return Ee.file(this.userDataPath);
    }
    get stateResource() {
        return jr(this.appSettingsHome, "globalStorage", "storage.json");
    }
    get userRoamingDataHome() {
        return this.appSettingsHome.with({
            scheme: gt.vscodeUserData
        });
    }
    get userDataSyncHome() {
        return jr(this.appSettingsHome, "sync");
    }
    get logsHome() {
        if (!this.args.logsPath) {
            const e = jMc(new Date).replace(/-|:|\.\d+Z$/g, "");
            this.args.logsPath = Jk(this.userDataPath, "logs", e);
        }
        return Ee.file(this.args.logsPath);
    }
    get sync() {
        return this.args.sync;
    }
    get machineSettingsResource() {
        return jr(Ee.file(Jk(this.userDataPath, "Machine")), "settings.json");
    }
    get workspaceStorageHome() {
        return jr(this.appSettingsHome, "workspaceStorage");
    }
    get localHistoryHome() {
        return jr(this.appSettingsHome, "History");
    }
    get keyboardLayoutResource() {
        return jr(this.userRoamingDataHome, "keyboardLayout.json");
    }
    get argvResource() {
        const e = oR.VSCODE_PORTABLE;
        return e ? Ee.file(Jk(e, "argv.json")) : jr(this.userHome, this.productService.dataFolderName, "argv.json");
    }
    get isExtensionDevelopment() {
        return !!this.args.extensionDevelopmentPath;
    }
    get untitledWorkspacesHome() {
        return Ee.file(Jk(this.userDataPath, "Workspaces"));
    }
    get builtinExtensionsPath() {
        const e = this.args["builtin-extensions-dir"];
        return e ? Eqe(e) : gD(Jk(Gd.asFileUri("").fsPath, "..", "extensions"));
    }
    get extensionsDownloadLocation() {
        const e = this.args["extensions-download-dir"];
        return e ? Ee.file(Eqe(e)) : Ee.file(Jk(this.userDataPath, "CachedExtensionVSIXs"));
    }
    get extensionsPath() {
        const e = this.args["extensions-dir"];
        if (e) return Eqe(e);
        const t = oR.VSCODE_EXTENSIONS;
        if (t) return t;
        const n = oR.VSCODE_PORTABLE;
        return n ? Jk(n, "extensions") : jr(this.userHome, this.productService.dataFolderName, "extensions").fsPath;
    }
    get extensionDevelopmentLocationURI() {
        const e = this.args.extensionDevelopmentPath;
        if (Array.isArray(e)) return e.map((t)=>/^[^:/?#]+?:\/\//.test(t) ? Ee.parse(t) : Ee.file(gD(t)));
    }
    get extensionDevelopmentKind() {
        return this.args.extensionDevelopmentKind?.map((e)=>e === "ui" || e === "workspace" || e === "web" ? e : "workspace");
    }
    get extensionTestsLocationURI() {
        const e = this.args.extensionTestsPath;
        if (e) return /^[^:/?#]+?:\/\//.test(e) ? Ee.parse(e) : Ee.file(gD(e));
    }
    get disableExtensions() {
        if (this.args["disable-extensions"]) return !0;
        const e = this.args["disable-extension"];
        if (e) {
            if (typeof e == "string") return [
                e
            ];
            if (Array.isArray(e) && e.length > 0) return e;
        }
        return !1;
    }
    get debugExtensionHost() {
        return bVv(this.args, this.isBuilt);
    }
    get debugRenderer() {
        return !!this.args.debugRenderer;
    }
    get isBuilt() {
        return !oR.VSCODE_DEV;
    }
    get verbose() {
        return !!this.args.verbose;
    }
    get logLevel() {
        return this.args.log?.find((e)=>!OVt.test(e));
    }
    get extensionLogLevel() {
        const e = [];
        for (const t of this.args.log || []){
            const n = OVt.exec(t);
            n && n[1] && n[2] && e.push([
                n[1],
                n[2]
            ]);
        }
        return e.length ? e : void 0;
    }
    get serviceMachineIdResource() {
        return jr(Ee.file(this.userDataPath), "machineid");
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
        if (this.args["__enable-file-policy"] || vf) {
            const e = oR.VSCODE_PORTABLE;
            return e ? Ee.file(Jk(e, "policy.json")) : jr(this.userHome, this.productService.dataFolderName, "policy.json");
        }
    }
    get continueOn() {
        return this.args.continueOn;
    }
    set continueOn(e) {
        this.args.continueOn = e;
    }
    get args() {
        return this._args;
    }
}, ie([
    xo
], FI.prototype, "appRoot", null), ie([
    xo
], FI.prototype, "userHome", null), ie([
    xo
], FI.prototype, "userDataPath", null), ie([
    xo
], FI.prototype, "appSettingsHome", null), ie([
    xo
], FI.prototype, "tmpDir", null), ie([
    xo
], FI.prototype, "cacheHome", null), ie([
    xo
], FI.prototype, "stateResource", null), ie([
    xo
], FI.prototype, "userRoamingDataHome", null), ie([
    xo
], FI.prototype, "userDataSyncHome", null), ie([
    xo
], FI.prototype, "sync", null), ie([
    xo
], FI.prototype, "machineSettingsResource", null), ie([
    xo
], FI.prototype, "workspaceStorageHome", null), ie([
    xo
], FI.prototype, "localHistoryHome", null), ie([
    xo
], FI.prototype, "keyboardLayoutResource", null), ie([
    xo
], FI.prototype, "argvResource", null), ie([
    xo
], FI.prototype, "isExtensionDevelopment", null), ie([
    xo
], FI.prototype, "untitledWorkspacesHome", null), ie([
    xo
], FI.prototype, "builtinExtensionsPath", null), ie([
    xo
], FI.prototype, "extensionsPath", null), ie([
    xo
], FI.prototype, "extensionDevelopmentLocationURI", null), ie([
    xo
], FI.prototype, "extensionDevelopmentKind", null), ie([
    xo
], FI.prototype, "extensionTestsLocationURI", null), ie([
    xo
], FI.prototype, "debugExtensionHost", null), ie([
    xo
], FI.prototype, "logLevel", null), ie([
    xo
], FI.prototype, "extensionLogLevel", null), ie([
    xo
], FI.prototype, "serviceMachineIdResource", null), ie([
    xo
], FI.prototype, "disableTelemetry", null), ie([
    xo
], FI.prototype, "disableWorkspaceTrust", null), ie([
    xo
], FI.prototype, "useInMemorySecretStorage", null), ie([
    xo
], FI.prototype, "policyFile", null);

}

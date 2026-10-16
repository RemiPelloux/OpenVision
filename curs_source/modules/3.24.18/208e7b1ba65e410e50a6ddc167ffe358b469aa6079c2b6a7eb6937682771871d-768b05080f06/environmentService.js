import { Y4e } from "./date.js";
import { sc } from "./decorators.js";
import { B, Ue } from "./ipc.js";
import { $, $e, Jt } from "./network.js";
import { Ce, L, on, st, xn } from "./path.js";
import { Fe, oe } from "./platform.js";
import { Is, bi } from "./process.js";
import { Ae, Ft } from "./resources.js";
import { h } from "./tslib.es6.js";
import { x, ye } from "./uri.js";
function H4e(e) {
    return e.getFullYear() + "-" + String(e.getMonth() + 1).padStart(2, "0") + "-" + String(e.getDate()).padStart(2, "0") + "T" + String(e.getHours()).padStart(2, "0") + ":" + String(e.getMinutes()).padStart(2, "0") + ":" + String(e.getSeconds()).padStart(2, "0") + "." + (e.getMilliseconds() / 1e3).toFixed(3).slice(2, 5) + "Z";
}
function J4e(e, t) {
    return b0(e["inspect-extensions"], e["inspect-brk-extensions"], 5870, t, e.debugId, e.extensionEnvironment);
}
function b0(e, t, n, r, s, i) {
    const a = t || e, o = a !== void 0 && a !== "" ? Number(a) : NaN, l = Number.isNaN(o) ? r ? null : n : o, d = l !== null ? !!t : !1;
    let u;
    if (i) try {
        u = JSON.parse(i);
    } catch  {}
    return {
        port: l,
        break: d,
        debugId: s,
        env: u
    };
}
var R0, yt;
export { H4e, J4e, R0, b0, yt };
var __wakaru_X4e_initialized = false;
export function X4e() {
if (__wakaru_X4e_initialized) return;
__wakaru_X4e_initialized = true;
"use strict";
h(), Y4e(), sc(), $e(), Ce(), bi(), Ft(), ye(), oe(), R0 = /^([^.]+\..+)[:=](.+)$/, yt = class {
    constructor(e, t, n){
        this._args = e, this.paths = t, this.productService = n;
    }
    get appRoot() {
        return st(Jt.asFileUri("").fsPath);
    }
    get userHome() {
        return x.file(this.paths.homeDir);
    }
    get userDataPath() {
        return this.paths.userDataDir;
    }
    get appSettingsHome() {
        return x.file(L(this.userDataPath, "User"));
    }
    get tmpDir() {
        return x.file(this.paths.tmpDir);
    }
    get cacheHome() {
        return x.file(this.userDataPath);
    }
    get stateResource() {
        return Ae(this.appSettingsHome, "globalStorage", "storage.json");
    }
    get userRoamingDataHome() {
        return this.appSettingsHome.with({
            scheme: $.vscodeUserData
        });
    }
    get userDataSyncHome() {
        return Ae(this.appSettingsHome, "sync");
    }
    get logsHome() {
        if (!this.args.logsPath) {
            const e = H4e(new Date).replace(/-|:|\.\d+Z$/g, "");
            this.args.logsPath = L(this.userDataPath, "logs", e);
        }
        return x.file(this.args.logsPath);
    }
    get sync() {
        return this.args.sync;
    }
    get machineSettingsResource() {
        return Ae(x.file(L(this.userDataPath, "Machine")), "settings.json");
    }
    get workspaceStorageHome() {
        return Ae(this.appSettingsHome, "workspaceStorage");
    }
    get localHistoryHome() {
        return Ae(this.appSettingsHome, "History");
    }
    get keyboardLayoutResource() {
        return Ae(this.userRoamingDataHome, "keyboardLayout.json");
    }
    get argvResource() {
        const e = Is.VSCODE_PORTABLE;
        return e ? x.file(L(e, "argv.json")) : Ae(this.userHome, this.productService.dataFolderName, "argv.json");
    }
    get isExtensionDevelopment() {
        return !!this.args.extensionDevelopmentPath;
    }
    get untitledWorkspacesHome() {
        return x.file(L(this.userDataPath, "Workspaces"));
    }
    get builtinExtensionsPath() {
        const e = this.args["builtin-extensions-dir"];
        return e ? xn(e) : on(L(Jt.asFileUri("").fsPath, "..", "extensions"));
    }
    get extensionsDownloadLocation() {
        const e = this.args["extensions-download-dir"];
        return e ? x.file(xn(e)) : x.file(L(this.userDataPath, "CachedExtensionVSIXs"));
    }
    get extensionsPath() {
        const e = this.args["extensions-dir"];
        if (e) return xn(e);
        const t = Is.VSCODE_EXTENSIONS;
        if (t) return t;
        const n = Is.VSCODE_PORTABLE;
        return n ? L(n, "extensions") : Ae(this.userHome, this.productService.dataFolderName, "extensions").fsPath;
    }
    get extensionDevelopmentLocationURI() {
        const e = this.args.extensionDevelopmentPath;
        if (Array.isArray(e)) return e.map((t)=>/^[^:/?#]+?:\/\//.test(t) ? x.parse(t) : x.file(on(t)));
    }
    get extensionDevelopmentKind() {
        return this.args.extensionDevelopmentKind?.map((e)=>e === "ui" || e === "workspace" || e === "web" ? e : "workspace");
    }
    get extensionTestsLocationURI() {
        const e = this.args.extensionTestsPath;
        if (e) return /^[^:/?#]+?:\/\//.test(e) ? x.parse(e) : x.file(on(e));
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
        return J4e(this.args, this.isBuilt);
    }
    get debugRenderer() {
        return !!this.args.debugRenderer;
    }
    get isBuilt() {
        return !Is.VSCODE_DEV;
    }
    get verbose() {
        return !!this.args.verbose;
    }
    get logLevel() {
        return this.args.log?.find((e)=>!R0.test(e));
    }
    get extensionLogLevel() {
        const e = [];
        for (const t of this.args.log || []){
            const n = R0.exec(t);
            n && n[1] && n[2] && e.push([
                n[1],
                n[2]
            ]);
        }
        return e.length ? e : void 0;
    }
    get serviceMachineIdResource() {
        return Ae(x.file(this.userDataPath), "machineid");
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
        if (this.args["__enable-file-policy"] || Fe) {
            const e = Is.VSCODE_PORTABLE;
            return e ? x.file(L(e, "policy.json")) : Ae(this.userHome, this.productService.dataFolderName, "policy.json");
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
}, B([
    Ue
], yt.prototype, "appRoot", null), B([
    Ue
], yt.prototype, "userHome", null), B([
    Ue
], yt.prototype, "userDataPath", null), B([
    Ue
], yt.prototype, "appSettingsHome", null), B([
    Ue
], yt.prototype, "tmpDir", null), B([
    Ue
], yt.prototype, "cacheHome", null), B([
    Ue
], yt.prototype, "stateResource", null), B([
    Ue
], yt.prototype, "userRoamingDataHome", null), B([
    Ue
], yt.prototype, "userDataSyncHome", null), B([
    Ue
], yt.prototype, "sync", null), B([
    Ue
], yt.prototype, "machineSettingsResource", null), B([
    Ue
], yt.prototype, "workspaceStorageHome", null), B([
    Ue
], yt.prototype, "localHistoryHome", null), B([
    Ue
], yt.prototype, "keyboardLayoutResource", null), B([
    Ue
], yt.prototype, "argvResource", null), B([
    Ue
], yt.prototype, "isExtensionDevelopment", null), B([
    Ue
], yt.prototype, "untitledWorkspacesHome", null), B([
    Ue
], yt.prototype, "builtinExtensionsPath", null), B([
    Ue
], yt.prototype, "extensionsPath", null), B([
    Ue
], yt.prototype, "extensionDevelopmentLocationURI", null), B([
    Ue
], yt.prototype, "extensionDevelopmentKind", null), B([
    Ue
], yt.prototype, "extensionTestsLocationURI", null), B([
    Ue
], yt.prototype, "debugExtensionHost", null), B([
    Ue
], yt.prototype, "logLevel", null), B([
    Ue
], yt.prototype, "extensionLogLevel", null), B([
    Ue
], yt.prototype, "serviceMachineIdResource", null), B([
    Ue
], yt.prototype, "disableTelemetry", null), B([
    Ue
], yt.prototype, "disableWorkspaceTrust", null), B([
    Ue
], yt.prototype, "useInMemorySecretStorage", null), B([
    Ue
], yt.prototype, "policyFile", null);

}

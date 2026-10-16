import { Ei, Ov, aby, xr } from "./Iwo.js";
import { oAe } from "./SZu.js";
import { SM } from "./decorators.js";
import { cy, fb } from "./environment.js";
import { Nxn, srl } from "./environmentService_2.js";
import { pP } from "./extpath.js";
import { It } from "./instantiation.js";
import { Ji } from "./log.js";
import { Ki, Ot } from "./network.js";
import { Lr, Os } from "./resources.js";
import { E } from "./tslib.es6.js";
import { To } from "./types_2.js";
import { fn, rt } from "./uri.js";
import { Re } from "./userDataProfile.js";
import { sl } from "./ze.js";
var EX, QS;
export { EX, QS };
var __wakaru_vle_initialized = false;
export function vle() {
if (__wakaru_vle_initialized) return;
__wakaru_vle_initialized = true;
"use strict";
E(), Ki(), Lr(), fn(), fb(), SM(), Ei(), pP(), Ji(), To(), It(), srl(), EX = cy, QS = class {
    constructor(t, e, n, i){
        if (this.workspaceId = t, this.logsHome = e, this.options = n, this.productService = i, this.extensionHostDebugEnvironment = void 0, n.workspaceProvider && Array.isArray(n.workspaceProvider.payload)) try {
            this.payload = new Map(n.workspaceProvider.payload);
        } catch (r) {
            xr(r);
        }
    }
    get remoteAuthority() {
        return this.options.remoteAuthority;
    }
    get expectsResolverExtension() {
        return !!this.options.remoteAuthority?.includes("+") && !this.options.webSocketFactory;
    }
    get isBuilt() {
        return !!this.productService.commit;
    }
    get shadowWindowForWorkspaceId() {}
    get isVmDaemonParallelProcess() {
        return !1;
    }
    get logLevel() {
        const t = this.payload?.get("logLevel");
        return t ? t.split(",").find((e)=>!Nxn.test(e)) : this.options.developmentOptions?.logLevel !== void 0 ? oAe(this.options.developmentOptions?.logLevel) : void 0;
    }
    get extensionLogLevel() {
        const t = this.payload?.get("logLevel");
        if (t) {
            const e = [];
            for (const n of t.split(",")){
                const i = Nxn.exec(n);
                i && i[1] && i[2] && e.push([
                    i[1],
                    i[2]
                ]);
            }
            return e.length ? e : void 0;
        }
        return this.options.developmentOptions?.extensionLogLevel !== void 0 ? this.options.developmentOptions?.extensionLogLevel.map(([e, n])=>[
                e,
                oAe(n)
            ]) : void 0;
    }
    get profDurationMarkers() {
        const t = this.payload?.get("profDurationMarkers");
        if (t) {
            const e = [];
            for (const n of t.split(","))e.push(n);
            return e.length === 2 ? e : void 0;
        }
    }
    get windowLogsPath() {
        return this.logsHome;
    }
    get logFile() {
        return Os(this.windowLogsPath, "window.log");
    }
    get userRoamingDataHome() {
        return rt.file("/User").with({
            scheme: Ot.vscodeUserData
        });
    }
    get argvResource() {
        return Os(this.userRoamingDataHome, "argv.json");
    }
    get cacheHome() {
        return Os(this.userRoamingDataHome, "caches");
    }
    get workspaceStorageHome() {
        return Os(this.userRoamingDataHome, "workspaceStorage");
    }
    get localHistoryHome() {
        return Os(this.userRoamingDataHome, "History");
    }
    get stateResource() {
        return Os(this.userRoamingDataHome, "State", "storage.json");
    }
    get userDataSyncHome() {
        return Os(this.userRoamingDataHome, "sync", this.workspaceId);
    }
    get sync() {}
    get keyboardLayoutResource() {
        return Os(this.userRoamingDataHome, "keyboardLayout.json");
    }
    get untitledWorkspacesHome() {
        return Os(this.userRoamingDataHome, "Workspaces");
    }
    get serviceMachineIdResource() {
        return Os(this.userRoamingDataHome, "machineid");
    }
    get extHostLogsPath() {
        return Os(this.logsHome, "exthost");
    }
    get debugExtensionHost() {
        return this.extensionHostDebugEnvironment || (this.extensionHostDebugEnvironment = this.resolveExtensionHostDebugEnvironment()), this.extensionHostDebugEnvironment.params;
    }
    get isExtensionDevelopment() {
        return this.extensionHostDebugEnvironment || (this.extensionHostDebugEnvironment = this.resolveExtensionHostDebugEnvironment()), this.extensionHostDebugEnvironment.isExtensionDevelopment;
    }
    get extensionDevelopmentLocationURI() {
        return this.extensionHostDebugEnvironment || (this.extensionHostDebugEnvironment = this.resolveExtensionHostDebugEnvironment()), this.extensionHostDebugEnvironment.extensionDevelopmentLocationURI;
    }
    get extensionDevelopmentLocationKind() {
        return this.extensionHostDebugEnvironment || (this.extensionHostDebugEnvironment = this.resolveExtensionHostDebugEnvironment()), this.extensionHostDebugEnvironment.extensionDevelopmentKind;
    }
    get extensionTestsLocationURI() {
        return this.extensionHostDebugEnvironment || (this.extensionHostDebugEnvironment = this.resolveExtensionHostDebugEnvironment()), this.extensionHostDebugEnvironment.extensionTestsLocationURI;
    }
    get extensionEnabledProposedApi() {
        return this.extensionHostDebugEnvironment || (this.extensionHostDebugEnvironment = this.resolveExtensionHostDebugEnvironment()), this.extensionHostDebugEnvironment.extensionEnabledProposedApi;
    }
    get debugRenderer() {
        return this.extensionHostDebugEnvironment || (this.extensionHostDebugEnvironment = this.resolveExtensionHostDebugEnvironment()), this.extensionHostDebugEnvironment.debugRenderer;
    }
    get enableSmokeTestDriver() {
        return this.options.developmentOptions?.enableSmokeTestDriver;
    }
    get testFeatureFlags() {
        return this.options.developmentOptions?.testFeatureFlags;
    }
    get testExperiments() {
        return this.options.developmentOptions?.testExperiments;
    }
    get testDynamicConfigs() {
        return this.options.developmentOptions?.testDynamicConfigs;
    }
    get testLayers() {
        return this.options.developmentOptions?.testLayers;
    }
    get isGlass() {
        return !1;
    }
    get glassWorkspaceRole() {}
    get isGlassCursorWorktreeAgentWorkspace() {
        return !1;
    }
    get disableExtensions() {
        return this.payload?.get("disableExtensions") === "true";
    }
    get enableExtensions() {
        return this.options.enabledExtensions;
    }
    get webviewExternalEndpoint() {
        const t = this.options.webviewEndpoint || this.productService.webviewContentExternalBaseUrlTemplate || "https://{{uuid}}.vscode-cdn.net/{{quality}}/{{commit}}/out/vs/workbench/contrib/webview/browser/pre/", e = this.payload?.get("webviewExternalEndpointCommit");
        return t.replace("{{commit}}", e ?? this.productService.commit ?? "ef65ac1ba57f57f2a3961bfe94aa20481caca4c6").replace("{{quality}}", (e ? "insider" : this.productService.quality) ?? "insider");
    }
    get extensionTelemetryLogResource() {
        return Os(this.logsHome, "extensionTelemetry.log");
    }
    get disableTelemetry() {
        return !1;
    }
    get verbose() {
        return this.payload?.get("verbose") === "true";
    }
    get logExtensionHostCommunication() {
        return this.payload?.get("logExtensionHostCommunication") === "true";
    }
    get skipReleaseNotes() {
        return this.payload?.get("skipReleaseNotes") === "true";
    }
    get skipWelcome() {
        return this.payload?.get("skipWelcome") === "true";
    }
    get skipOnboarding() {
        return this.payload?.get("skipOnboarding") === "true";
    }
    get suppressPopupsOnStartup() {
        return this.payload?.get("suppressPopupsOnStartup") === "true";
    }
    get overrideCursorAuthToken() {
        return this.payload?.get("overrideCursorAuthToken");
    }
    get disableWorkspaceTrust() {
        return !this.options.enableWorkspaceTrust;
    }
    get profile() {
        return this.payload?.get("profile");
    }
    resolveExtensionHostDebugEnvironment() {
        const t = {
            params: {
                port: null,
                break: !1
            },
            debugRenderer: !1,
            isExtensionDevelopment: !1,
            extensionDevelopmentLocationURI: void 0,
            extensionDevelopmentKind: void 0
        };
        if (this.payload && (!this.isBuilt || this.enableSmokeTestDriver)) for (const [n, i] of this.payload)switch(n){
            case "extensionDevelopmentPath":
                t.extensionDevelopmentLocationURI || (t.extensionDevelopmentLocationURI = []), t.extensionDevelopmentLocationURI.push(rt.parse(i)), t.isExtensionDevelopment = !0;
                break;
            case "extensionDevelopmentKind":
                t.extensionDevelopmentKind = [
                    i
                ];
                break;
            case "extensionTestsPath":
                t.extensionTestsLocationURI = rt.parse(i);
                break;
            case "debugRenderer":
                t.debugRenderer = i === "true";
                break;
            case "debugId":
                t.params.debugId = i;
                break;
            case "inspect-brk-extensions":
                t.params.port = parseInt(i), t.params.break = !0;
                break;
            case "inspect-extensions":
                t.params.port = parseInt(i);
                break;
            case "enableProposedApi":
                t.extensionEnabledProposedApi = [];
                break;
        }
        const e = this.options.developmentOptions;
        return e && !t.isExtensionDevelopment && (e.extensions?.length && (t.extensionDevelopmentLocationURI = e.extensions.map((n)=>rt.revive(n)), t.isExtensionDevelopment = !0), e.extensionTestsPath && (t.extensionTestsLocationURI = rt.revive(e.extensionTestsPath))), t;
    }
    get filesToOpenOrCreate() {
        if (this.payload) {
            const t = this.payload.get("openFile");
            if (t) {
                const e = rt.parse(t);
                if (this.payload.has("gotoLineMode")) {
                    const n = aby(e.path);
                    return [
                        {
                            fileUri: e.with({
                                path: n.path
                            }),
                            options: {
                                selection: Ov(n.line) ? void 0 : {
                                    startLineNumber: n.line,
                                    startColumn: n.column || 1
                                }
                            }
                        }
                    ];
                }
                return [
                    {
                        fileUri: e
                    }
                ];
            }
        }
    }
    get filesToDiff() {
        if (this.payload) {
            const t = this.payload.get("diffFilePrimary"), e = this.payload.get("diffFileSecondary");
            if (t && e) return [
                {
                    fileUri: rt.parse(e)
                },
                {
                    fileUri: rt.parse(t)
                }
            ];
        }
    }
    get filesToMerge() {
        if (this.payload) {
            const t = this.payload.get("mergeFile1"), e = this.payload.get("mergeFile2"), n = this.payload.get("mergeFileBase"), i = this.payload.get("mergeFileResult");
            if (t && e && n && i) return [
                {
                    fileUri: rt.parse(t)
                },
                {
                    fileUri: rt.parse(e)
                },
                {
                    fileUri: rt.parse(n)
                },
                {
                    fileUri: rt.parse(i)
                }
            ];
        }
    }
}, Re([
    sl
], QS.prototype, "remoteAuthority", null), Re([
    sl
], QS.prototype, "expectsResolverExtension", null), Re([
    sl
], QS.prototype, "isBuilt", null), Re([
    sl
], QS.prototype, "shadowWindowForWorkspaceId", null), Re([
    sl
], QS.prototype, "isVmDaemonParallelProcess", null), Re([
    sl
], QS.prototype, "logLevel", null), Re([
    sl
], QS.prototype, "windowLogsPath", null), Re([
    sl
], QS.prototype, "logFile", null), Re([
    sl
], QS.prototype, "userRoamingDataHome", null), Re([
    sl
], QS.prototype, "argvResource", null), Re([
    sl
], QS.prototype, "cacheHome", null), Re([
    sl
], QS.prototype, "workspaceStorageHome", null), Re([
    sl
], QS.prototype, "localHistoryHome", null), Re([
    sl
], QS.prototype, "stateResource", null), Re([
    sl
], QS.prototype, "userDataSyncHome", null), Re([
    sl
], QS.prototype, "sync", null), Re([
    sl
], QS.prototype, "keyboardLayoutResource", null), Re([
    sl
], QS.prototype, "untitledWorkspacesHome", null), Re([
    sl
], QS.prototype, "serviceMachineIdResource", null), Re([
    sl
], QS.prototype, "extHostLogsPath", null), Re([
    sl
], QS.prototype, "debugExtensionHost", null), Re([
    sl
], QS.prototype, "isExtensionDevelopment", null), Re([
    sl
], QS.prototype, "extensionDevelopmentLocationURI", null), Re([
    sl
], QS.prototype, "extensionDevelopmentLocationKind", null), Re([
    sl
], QS.prototype, "extensionTestsLocationURI", null), Re([
    sl
], QS.prototype, "extensionEnabledProposedApi", null), Re([
    sl
], QS.prototype, "debugRenderer", null), Re([
    sl
], QS.prototype, "enableSmokeTestDriver", null), Re([
    sl
], QS.prototype, "testFeatureFlags", null), Re([
    sl
], QS.prototype, "testExperiments", null), Re([
    sl
], QS.prototype, "testDynamicConfigs", null), Re([
    sl
], QS.prototype, "testLayers", null), Re([
    sl
], QS.prototype, "isGlass", null), Re([
    sl
], QS.prototype, "glassWorkspaceRole", null), Re([
    sl
], QS.prototype, "isGlassCursorWorktreeAgentWorkspace", null), Re([
    sl
], QS.prototype, "disableExtensions", null), Re([
    sl
], QS.prototype, "enableExtensions", null), Re([
    sl
], QS.prototype, "webviewExternalEndpoint", null), Re([
    sl
], QS.prototype, "extensionTelemetryLogResource", null), Re([
    sl
], QS.prototype, "disableTelemetry", null), Re([
    sl
], QS.prototype, "verbose", null), Re([
    sl
], QS.prototype, "logExtensionHostCommunication", null), Re([
    sl
], QS.prototype, "skipReleaseNotes", null), Re([
    sl
], QS.prototype, "skipWelcome", null), Re([
    sl
], QS.prototype, "skipOnboarding", null), Re([
    sl
], QS.prototype, "suppressPopupsOnStartup", null), Re([
    sl
], QS.prototype, "overrideCursorAuthToken", null), Re([
    sl
], QS.prototype, "disableWorkspaceTrust", null), Re([
    sl
], QS.prototype, "profile", null), Re([
    sl
], QS.prototype, "filesToOpenOrCreate", null), Re([
    sl
], QS.prototype, "filesToDiff", null), Re([
    sl
], QS.prototype, "filesToMerge", null);

}

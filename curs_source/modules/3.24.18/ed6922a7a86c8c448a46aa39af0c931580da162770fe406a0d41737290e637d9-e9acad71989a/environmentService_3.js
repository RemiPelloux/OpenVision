import { Eug, ns, om, si } from "./HVr.js";
import { ie } from "./actions_2.js";
import { sw } from "./decorators.js";
import { nf, sv } from "./environment.js";
import { OVt, dko } from "./environmentService_2.js";
import { vI } from "./extpath.js";
import { Ze } from "./instantiation.js";
import { Qn } from "./log.js";
import { gt, li } from "./network.js";
import { Rge, xo } from "./qIc.js";
import { Li, jr } from "./resources.js";
import { x } from "./tslib.es6.js";
import { gr } from "./types_2.js";
import { Ee, Qt } from "./uri.js";
var H$, V_;
export { H$, V_ };
var __wakaru_zX_initialized = false;
export function zX() {
if (__wakaru_zX_initialized) return;
__wakaru_zX_initialized = true;
"use strict";
x(), li(), Li(), Qt(), nf(), sw(), si(), vI(), Qn(), gr(), Ze(), dko(), H$ = sv, V_ = class {
    constructor(e, t, n, i){
        if (this.workspaceId = e, this.logsHome = t, this.options = n, this.productService = i, this.extensionHostDebugEnvironment = void 0, n.workspaceProvider && Array.isArray(n.workspaceProvider.payload)) try {
            this.payload = new Map(n.workspaceProvider.payload);
        } catch (r) {
            ns(r);
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
        const e = this.payload?.get("logLevel");
        return e ? e.split(",").find((t)=>!OVt.test(t)) : this.options.developmentOptions?.logLevel !== void 0 ? Rge(this.options.developmentOptions?.logLevel) : void 0;
    }
    get extensionLogLevel() {
        const e = this.payload?.get("logLevel");
        if (e) {
            const t = [];
            for (const n of e.split(",")){
                const i = OVt.exec(n);
                i && i[1] && i[2] && t.push([
                    i[1],
                    i[2]
                ]);
            }
            return t.length ? t : void 0;
        }
        return this.options.developmentOptions?.extensionLogLevel !== void 0 ? this.options.developmentOptions?.extensionLogLevel.map(([t, n])=>[
                t,
                Rge(n)
            ]) : void 0;
    }
    get profDurationMarkers() {
        const e = this.payload?.get("profDurationMarkers");
        if (e) {
            const t = [];
            for (const n of e.split(","))t.push(n);
            return t.length === 2 ? t : void 0;
        }
    }
    get windowLogsPath() {
        return this.logsHome;
    }
    get logFile() {
        return jr(this.windowLogsPath, "window.log");
    }
    get userRoamingDataHome() {
        return Ee.file("/User").with({
            scheme: gt.vscodeUserData
        });
    }
    get argvResource() {
        return jr(this.userRoamingDataHome, "argv.json");
    }
    get cacheHome() {
        return jr(this.userRoamingDataHome, "caches");
    }
    get workspaceStorageHome() {
        return jr(this.userRoamingDataHome, "workspaceStorage");
    }
    get localHistoryHome() {
        return jr(this.userRoamingDataHome, "History");
    }
    get stateResource() {
        return jr(this.userRoamingDataHome, "State", "storage.json");
    }
    get userDataSyncHome() {
        return jr(this.userRoamingDataHome, "sync", this.workspaceId);
    }
    get sync() {}
    get keyboardLayoutResource() {
        return jr(this.userRoamingDataHome, "keyboardLayout.json");
    }
    get untitledWorkspacesHome() {
        return jr(this.userRoamingDataHome, "Workspaces");
    }
    get serviceMachineIdResource() {
        return jr(this.userRoamingDataHome, "machineid");
    }
    get extHostLogsPath() {
        return jr(this.logsHome, "exthost");
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
        const e = this.options.webviewEndpoint || this.productService.webviewContentExternalBaseUrlTemplate || "https://{{uuid}}.vscode-cdn.net/{{quality}}/{{commit}}/out/vs/workbench/contrib/webview/browser/pre/", t = this.payload?.get("webviewExternalEndpointCommit");
        return e.replace("{{commit}}", t ?? this.productService.commit ?? "ef65ac1ba57f57f2a3961bfe94aa20481caca4c6").replace("{{quality}}", (t ? "insider" : this.productService.quality) ?? "insider");
    }
    get extensionTelemetryLogResource() {
        return jr(this.logsHome, "extensionTelemetry.log");
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
        const e = {
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
                e.extensionDevelopmentLocationURI || (e.extensionDevelopmentLocationURI = []), e.extensionDevelopmentLocationURI.push(Ee.parse(i)), e.isExtensionDevelopment = !0;
                break;
            case "extensionDevelopmentKind":
                e.extensionDevelopmentKind = [
                    i
                ];
                break;
            case "extensionTestsPath":
                e.extensionTestsLocationURI = Ee.parse(i);
                break;
            case "debugRenderer":
                e.debugRenderer = i === "true";
                break;
            case "debugId":
                e.params.debugId = i;
                break;
            case "inspect-brk-extensions":
                e.params.port = parseInt(i), e.params.break = !0;
                break;
            case "inspect-extensions":
                e.params.port = parseInt(i);
                break;
            case "enableProposedApi":
                e.extensionEnabledProposedApi = [];
                break;
        }
        const t = this.options.developmentOptions;
        return t && !e.isExtensionDevelopment && (t.extensions?.length && (e.extensionDevelopmentLocationURI = t.extensions.map((n)=>Ee.revive(n)), e.isExtensionDevelopment = !0), t.extensionTestsPath && (e.extensionTestsLocationURI = Ee.revive(t.extensionTestsPath))), e;
    }
    get filesToOpenOrCreate() {
        if (this.payload) {
            const e = this.payload.get("openFile");
            if (e) {
                const t = Ee.parse(e);
                if (this.payload.has("gotoLineMode")) {
                    const n = Eug(t.path);
                    return [
                        {
                            fileUri: t.with({
                                path: n.path
                            }),
                            options: {
                                selection: om(n.line) ? void 0 : {
                                    startLineNumber: n.line,
                                    startColumn: n.column || 1
                                }
                            }
                        }
                    ];
                }
                return [
                    {
                        fileUri: t
                    }
                ];
            }
        }
    }
    get filesToDiff() {
        if (this.payload) {
            const e = this.payload.get("diffFilePrimary"), t = this.payload.get("diffFileSecondary");
            if (e && t) return [
                {
                    fileUri: Ee.parse(t)
                },
                {
                    fileUri: Ee.parse(e)
                }
            ];
        }
    }
    get filesToMerge() {
        if (this.payload) {
            const e = this.payload.get("mergeFile1"), t = this.payload.get("mergeFile2"), n = this.payload.get("mergeFileBase"), i = this.payload.get("mergeFileResult");
            if (e && t && n && i) return [
                {
                    fileUri: Ee.parse(e)
                },
                {
                    fileUri: Ee.parse(t)
                },
                {
                    fileUri: Ee.parse(n)
                },
                {
                    fileUri: Ee.parse(i)
                }
            ];
        }
    }
}, ie([
    xo
], V_.prototype, "remoteAuthority", null), ie([
    xo
], V_.prototype, "expectsResolverExtension", null), ie([
    xo
], V_.prototype, "isBuilt", null), ie([
    xo
], V_.prototype, "shadowWindowForWorkspaceId", null), ie([
    xo
], V_.prototype, "isVmDaemonParallelProcess", null), ie([
    xo
], V_.prototype, "logLevel", null), ie([
    xo
], V_.prototype, "windowLogsPath", null), ie([
    xo
], V_.prototype, "logFile", null), ie([
    xo
], V_.prototype, "userRoamingDataHome", null), ie([
    xo
], V_.prototype, "argvResource", null), ie([
    xo
], V_.prototype, "cacheHome", null), ie([
    xo
], V_.prototype, "workspaceStorageHome", null), ie([
    xo
], V_.prototype, "localHistoryHome", null), ie([
    xo
], V_.prototype, "stateResource", null), ie([
    xo
], V_.prototype, "userDataSyncHome", null), ie([
    xo
], V_.prototype, "sync", null), ie([
    xo
], V_.prototype, "keyboardLayoutResource", null), ie([
    xo
], V_.prototype, "untitledWorkspacesHome", null), ie([
    xo
], V_.prototype, "serviceMachineIdResource", null), ie([
    xo
], V_.prototype, "extHostLogsPath", null), ie([
    xo
], V_.prototype, "debugExtensionHost", null), ie([
    xo
], V_.prototype, "isExtensionDevelopment", null), ie([
    xo
], V_.prototype, "extensionDevelopmentLocationURI", null), ie([
    xo
], V_.prototype, "extensionDevelopmentLocationKind", null), ie([
    xo
], V_.prototype, "extensionTestsLocationURI", null), ie([
    xo
], V_.prototype, "extensionEnabledProposedApi", null), ie([
    xo
], V_.prototype, "debugRenderer", null), ie([
    xo
], V_.prototype, "enableSmokeTestDriver", null), ie([
    xo
], V_.prototype, "testFeatureFlags", null), ie([
    xo
], V_.prototype, "testExperiments", null), ie([
    xo
], V_.prototype, "testDynamicConfigs", null), ie([
    xo
], V_.prototype, "testLayers", null), ie([
    xo
], V_.prototype, "isGlass", null), ie([
    xo
], V_.prototype, "glassWorkspaceRole", null), ie([
    xo
], V_.prototype, "isGlassCursorWorktreeAgentWorkspace", null), ie([
    xo
], V_.prototype, "disableExtensions", null), ie([
    xo
], V_.prototype, "enableExtensions", null), ie([
    xo
], V_.prototype, "webviewExternalEndpoint", null), ie([
    xo
], V_.prototype, "extensionTelemetryLogResource", null), ie([
    xo
], V_.prototype, "disableTelemetry", null), ie([
    xo
], V_.prototype, "verbose", null), ie([
    xo
], V_.prototype, "logExtensionHostCommunication", null), ie([
    xo
], V_.prototype, "skipReleaseNotes", null), ie([
    xo
], V_.prototype, "skipWelcome", null), ie([
    xo
], V_.prototype, "skipOnboarding", null), ie([
    xo
], V_.prototype, "suppressPopupsOnStartup", null), ie([
    xo
], V_.prototype, "overrideCursorAuthToken", null), ie([
    xo
], V_.prototype, "disableWorkspaceTrust", null), ie([
    xo
], V_.prototype, "profile", null), ie([
    xo
], V_.prototype, "filesToOpenOrCreate", null), ie([
    xo
], V_.prototype, "filesToDiff", null), ie([
    xo
], V_.prototype, "filesToMerge", null);

}

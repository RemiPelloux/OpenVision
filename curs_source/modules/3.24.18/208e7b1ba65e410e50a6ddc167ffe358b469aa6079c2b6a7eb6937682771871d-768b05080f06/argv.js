import { E } from "./configurationRegistry.js";
import { Px } from "./index.js";
import { Ne } from "./nls.js";
import { oe } from "./platform.js";
import { h } from "./tslib.es6.js";
var CLe = Object.create, Ab = Object.defineProperty, ILe = Object.getOwnPropertyDescriptor, Mb = Object.getOwnPropertyNames, ALe = Object.getPrototypeOf, MLe = Object.prototype.hasOwnProperty, NLe = (e, t, n, r)=>{
    if (t && typeof t == "object" || typeof t == "function") for (let s of Mb(t))!MLe.call(e, s) && s !== n && Ab(e, s, {
        get: ()=>t[s],
        enumerable: !(r = ILe(t, s)) || r.enumerable
    });
    return e;
}, Mx = (e, t, n)=>(n = e != null ? CLe(ALe(e)) : {}, NLe(t || !e || !e.__esModule ? Ab(n, "default", {
        value: e,
        enumerable: !0
    }) : n, e));
var u7, AWe, $I, Kp, jI, m7, MWe, PWe, p7;
export { $I, ALe, AWe, Ab, CLe, ILe, Kp, MLe, MWe, Mb, Mx, NLe, PWe, jI, m7, p7, u7 };
var __wakaru_h7_initialized = false;
export function h7() {
if (__wakaru_h7_initialized) return;
__wakaru_h7_initialized = true;
"use strict";
h(), u7 = Mx(Px(), 1), oe(), Ne(), AWe = {
    o: E(1860, null),
    e: E(1861, null),
    t: E(1862, null)
}, $I = [
    "tunnel"
], Kp = {
    tunnel: {
        type: "subcommand",
        description: "Make the current machine accessible from vscode.dev or other machines through a secure tunnel",
        options: {
            "cli-data-dir": {
                type: "string",
                args: "dir",
                description: E(1863, null)
            },
            "disable-telemetry": {
                type: "boolean"
            },
            "telemetry-level": {
                type: "string"
            },
            user: {
                type: "subcommand",
                options: {
                    login: {
                        type: "subcommand",
                        options: {
                            provider: {
                                type: "string"
                            },
                            "access-token": {
                                type: "string"
                            }
                        }
                    }
                }
            }
        }
    },
    diff: {
        type: "boolean",
        cat: "o",
        alias: "d",
        args: [
            "file",
            "file"
        ],
        description: E(1864, null)
    },
    merge: {
        type: "boolean",
        cat: "o",
        alias: "m",
        args: [
            "path1",
            "path2",
            "base",
            "result"
        ],
        description: E(1865, null)
    },
    add: {
        type: "boolean",
        cat: "o",
        alias: "a",
        args: "folder",
        description: E(1866, null)
    },
    remove: {
        type: "boolean",
        cat: "o",
        args: "folder",
        description: E(1867, null)
    },
    goto: {
        type: "boolean",
        cat: "o",
        alias: "g",
        args: "file:line[:character]",
        description: E(1868, null)
    },
    "new-window": {
        type: "boolean",
        cat: "o",
        alias: "n",
        description: E(1869, null)
    },
    "reuse-window": {
        type: "boolean",
        cat: "o",
        alias: "r",
        description: E(1870, null)
    },
    "suppress-popups-on-startup": {
        type: "boolean",
        cat: "o",
        description: E(1871, null)
    },
    "web-worker-exthost": {
        type: "boolean",
        cat: "o",
        description: E(1872, null)
    },
    glass: {
        type: "boolean",
        cat: "o",
        description: E(1873, null)
    },
    classic: {
        type: "boolean",
        cat: "o",
        description: E(1874, null)
    },
    wait: {
        type: "boolean",
        cat: "o",
        alias: "w",
        description: E(1875, null)
    },
    waitMarkerFilePath: {
        type: "string"
    },
    locale: {
        type: "string",
        cat: "o",
        args: "locale",
        description: E(1876, null)
    },
    "user-data-dir": {
        type: "string",
        cat: "o",
        args: "dir",
        description: E(1877, null)
    },
    "local-mode-data-import-token": {
        type: "string"
    },
    profile: {
        type: "string",
        cat: "o",
        args: "profileName",
        description: E(1878, null)
    },
    help: {
        type: "boolean",
        cat: "o",
        alias: "h",
        description: E(1879, null)
    },
    "extensions-dir": {
        type: "string",
        deprecates: [
            "extensionHomePath"
        ],
        cat: "e",
        args: "dir",
        description: E(1880, null)
    },
    "extensions-download-dir": {
        type: "string"
    },
    "builtin-extensions-dir": {
        type: "string"
    },
    "list-extensions": {
        type: "boolean",
        cat: "e",
        description: E(1881, null)
    },
    "show-versions": {
        type: "boolean",
        cat: "e",
        description: E(1882, null)
    },
    category: {
        type: "string",
        allowEmptyValue: !0,
        cat: "e",
        description: E(1883, null),
        args: "category"
    },
    "install-extension": {
        type: "string[]",
        cat: "e",
        args: "ext-id | path",
        description: E(1884, null)
    },
    "pre-release": {
        type: "boolean",
        cat: "e",
        description: E(1885, null)
    },
    "uninstall-extension": {
        type: "string[]",
        cat: "e",
        args: "ext-id",
        description: E(1886, null)
    },
    "update-extensions": {
        type: "boolean",
        cat: "e",
        description: E(1887, null)
    },
    "enable-proposed-api": {
        type: "string[]",
        allowEmptyValue: !0,
        cat: "e",
        args: "ext-id",
        description: E(1888, null)
    },
    "add-mcp": {
        type: "string[]",
        cat: "o",
        args: "json",
        description: E(1889, null)
    },
    version: {
        type: "boolean",
        cat: "t",
        alias: "v",
        description: E(1890, null)
    },
    verbose: {
        type: "boolean",
        cat: "t",
        global: !0,
        description: E(1891, null)
    },
    log: {
        type: "string[]",
        cat: "t",
        args: "level",
        global: !0,
        description: E(1892, null)
    },
    status: {
        type: "boolean",
        alias: "s",
        cat: "t",
        description: E(1893, null)
    },
    "prof-startup": {
        type: "boolean",
        cat: "t",
        description: E(1894, null)
    },
    "prof-append-timers": {
        type: "string"
    },
    "prof-duration-markers": {
        type: "string[]"
    },
    "prof-duration-markers-file": {
        type: "string"
    },
    "no-cached-data": {
        type: "boolean"
    },
    "prof-startup-prefix": {
        type: "string"
    },
    "prof-v8-extensions": {
        type: "boolean"
    },
    "disable-extensions": {
        type: "boolean",
        deprecates: [
            "disableExtensions"
        ],
        cat: "t",
        description: E(1895, null)
    },
    "disable-extension": {
        type: "string[]",
        cat: "t",
        args: "ext-id",
        description: E(1896, null)
    },
    sync: {
        type: "string",
        cat: "t",
        description: E(1897, null),
        args: [
            "on | off"
        ]
    },
    "inspect-extensions": {
        type: "string",
        allowEmptyValue: !0,
        deprecates: [
            "debugPluginHost"
        ],
        args: "port",
        cat: "t",
        description: E(1898, null)
    },
    "inspect-brk-extensions": {
        type: "string",
        allowEmptyValue: !0,
        deprecates: [
            "debugBrkPluginHost"
        ],
        args: "port",
        cat: "t",
        description: E(1899, null)
    },
    "disable-lcd-text": {
        type: "boolean",
        cat: "t",
        description: E(1900, null)
    },
    "disable-gpu": {
        type: "boolean",
        cat: "t",
        description: E(1901, null)
    },
    "disable-chromium-sandbox": {
        type: "boolean",
        cat: "t",
        description: E(1902, null)
    },
    sandbox: {
        type: "boolean"
    },
    "locate-shell-integration-path": {
        type: "string",
        cat: "t",
        args: [
            "shell"
        ],
        description: E(1903, null)
    },
    telemetry: {
        type: "boolean",
        cat: "t",
        description: E(1904, null)
    },
    remote: {
        type: "string",
        allowEmptyValue: !0
    },
    "folder-uri": {
        type: "string[]",
        cat: "o",
        args: "uri"
    },
    "file-uri": {
        type: "string[]",
        cat: "o",
        args: "uri"
    },
    "locate-extension": {
        type: "string[]"
    },
    extensionDevelopmentPath: {
        type: "string[]"
    },
    extensionDevelopmentKind: {
        type: "string[]"
    },
    extensionTestsPath: {
        type: "string"
    },
    extensionEnvironment: {
        type: "string"
    },
    debugId: {
        type: "string"
    },
    debugRenderer: {
        type: "boolean"
    },
    "inspect-ptyhost": {
        type: "string",
        allowEmptyValue: !0
    },
    "inspect-brk-ptyhost": {
        type: "string",
        allowEmptyValue: !0
    },
    "inspect-search": {
        type: "string",
        deprecates: [
            "debugSearch"
        ],
        allowEmptyValue: !0
    },
    "inspect-brk-search": {
        type: "string",
        deprecates: [
            "debugBrkSearch"
        ],
        allowEmptyValue: !0
    },
    "inspect-sharedprocess": {
        type: "string",
        allowEmptyValue: !0
    },
    "inspect-brk-sharedprocess": {
        type: "string",
        allowEmptyValue: !0
    },
    "export-default-configuration": {
        type: "string"
    },
    "install-source": {
        type: "string"
    },
    "enable-smoke-test-driver": {
        type: "boolean"
    },
    "telemetry-source": {
        type: "string"
    },
    "smoke-test-use-real-agent-http": {
        type: "boolean"
    },
    "smoke-test-nal-stream-timeout-ms": {
        type: "string"
    },
    "smoke-test-nal-endless-retries": {
        type: "boolean"
    },
    "smoke-test-nal-retry-delay-ms": {
        type: "string"
    },
    "debug-slow-window-unload-ms": {
        type: "string"
    },
    headless: {
        type: "boolean"
    },
    "test-backend-url": {
        type: "string"
    },
    "test-feature-flags": {
        type: "string"
    },
    "test-experiments": {
        type: "string"
    },
    "test-dynamic-configs": {
        type: "string"
    },
    "test-layers": {
        type: "string"
    },
    "test-composer-chat-script": {
        type: "string"
    },
    logExtensionHostCommunication: {
        type: "boolean"
    },
    "skip-release-notes": {
        type: "boolean"
    },
    "skip-welcome": {
        type: "boolean"
    },
    "skip-onboarding": {
        type: "boolean"
    },
    "override-cursor-auth-token": {
        type: "string"
    },
    "disable-telemetry": {
        type: "boolean"
    },
    "disable-updates": {
        type: "boolean"
    },
    "agent-harness-trust-dev-key": {
        type: "boolean"
    },
    "use-inmemory-secretstorage": {
        type: "boolean",
        deprecates: [
            "disable-keytar"
        ]
    },
    "password-store": {
        type: "string"
    },
    "disable-workspace-trust": {
        type: "boolean"
    },
    "disable-crash-reporter": {
        type: "boolean"
    },
    "crash-reporter-directory": {
        type: "string"
    },
    "crash-reporter-id": {
        type: "string"
    },
    "skip-add-to-recently-opened": {
        type: "boolean"
    },
    "open-url": {
        type: "boolean"
    },
    "file-write": {
        type: "boolean"
    },
    "file-chmod": {
        type: "boolean"
    },
    "install-builtin-extension": {
        type: "string[]"
    },
    force: {
        type: "boolean"
    },
    "do-not-sync": {
        type: "boolean"
    },
    "do-not-include-pack-dependencies": {
        type: "boolean"
    },
    trace: {
        type: "boolean"
    },
    "trace-memory-infra": {
        type: "boolean"
    },
    "trace-category-filter": {
        type: "string"
    },
    "trace-options": {
        type: "string"
    },
    "preserve-env": {
        type: "boolean"
    },
    "force-user-env": {
        type: "boolean"
    },
    "force-disable-user-env": {
        type: "boolean"
    },
    "open-devtools": {
        type: "boolean"
    },
    "enable-react-devtools": {
        type: "boolean"
    },
    "disable-react-devtools": {
        type: "boolean"
    },
    "react-production-bundles": {
        type: "boolean"
    },
    "react-performance-tracks": {
        type: "boolean"
    },
    "shadow-window-for-workspace-id": {
        type: "string"
    },
    "is-vm-daemon-parallel-process": {
        type: "boolean"
    },
    "disable-gpu-sandbox": {
        type: "boolean"
    },
    logsPath: {
        type: "string"
    },
    "__enable-file-policy": {
        type: "boolean"
    },
    continueOn: {
        type: "string"
    },
    "enable-coi": {
        type: "boolean"
    },
    "unresponsive-sample-interval": {
        type: "string"
    },
    "unresponsive-sample-period": {
        type: "string"
    },
    "no-proxy-server": {
        type: "boolean"
    },
    "no-sandbox": {
        type: "boolean",
        alias: "sandbox"
    },
    "proxy-server": {
        type: "string"
    },
    "proxy-bypass-list": {
        type: "string"
    },
    "proxy-pac-url": {
        type: "string"
    },
    "js-flags": {
        type: "string"
    },
    inspect: {
        type: "string",
        allowEmptyValue: !0
    },
    "inspect-brk": {
        type: "string",
        allowEmptyValue: !0
    },
    nolazy: {
        type: "boolean"
    },
    "force-device-scale-factor": {
        type: "string"
    },
    "force-renderer-accessibility": {
        type: "boolean"
    },
    "ignore-certificate-errors": {
        type: "boolean"
    },
    "allow-insecure-localhost": {
        type: "boolean"
    },
    "log-net-log": {
        type: "string"
    },
    vmodule: {
        type: "string"
    },
    _urls: {
        type: "string[]"
    },
    "disable-dev-shm-usage": {
        type: "boolean"
    },
    "profile-temp": {
        type: "boolean"
    },
    "ozone-platform": {
        type: "string"
    },
    "enable-tracing": {
        type: "string"
    },
    "trace-startup-format": {
        type: "string"
    },
    "trace-startup-file": {
        type: "string"
    },
    "trace-startup-duration": {
        type: "string"
    },
    "xdg-portal-required-version": {
        type: "string"
    },
    hmr: {
        type: "boolean"
    },
    chat: {
        type: "boolean",
        cat: "o",
        description: E(1905, null)
    },
    _: {
        type: "string[]"
    }
}, jI = {
    type: "subcommand",
    description: "Interact with chat threads in a running Cursor desktop app.",
    options: {
        json: {
            type: "boolean",
            description: "Machine-readable output"
        },
        force: {
            type: "boolean",
            description: "Submit immediately, interrupting a running turn (send)"
        },
        stdin: {
            type: "boolean",
            description: "Read message text from stdin (send)"
        },
        help: {
            type: "boolean",
            alias: "h",
            description: "Print usage"
        },
        _: {
            type: "string[]"
        }
    }
}, m7 = {
    agent: {
        type: "subcommand",
        description: "Start the Cursor agent in your terminal.",
        options: {}
    },
    desktop: jI
}, MWe = {
    ...Kp,
    ...m7
}, PWe = {
    ...Kp,
    desktop: jI
}, p7 = {
    onUnknownOption: ()=>{},
    onMultipleValues: ()=>{},
    onEmptyValue: ()=>{},
    onDeprecatedOption: ()=>{}
};

}

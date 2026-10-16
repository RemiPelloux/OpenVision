import { Ve } from "./errors.js";
import { yn } from "./event.js";
import { Ce, De, L } from "./path.js";
import { Xs, c4, oe, zb } from "./platform.js";
import { jn } from "./strings.js";
import { h } from "./tslib.es6.js";
import { x, ye } from "./uri.js";
function WUe(e) {
    return `${e.quality ?? "oss"}-${e.commit ?? "dev"}`;
}
var $, y5, w5, wR, Um, ER, E5, Jt, b5, R5, xm;
export { $, E5, ER, Jt, R5, Um, WUe, b5, w5, wR, xm, y5 };
var __wakaru_$e_initialized = false;
export function $e() {
if (__wakaru_$e_initialized) return;
__wakaru_$e_initialized = true;
"use strict";
h(), Ve(), oe(), jn(), ye(), Ce(), ((e)=>{
    e.inMemory = "inmemory", e.vscode = "vscode", e.internal = "private", e.walkThrough = "walkThrough", e.walkThroughSnippet = "walkThroughSnippet", e.http = "http", e.https = "https", e.file = "file", e.git = "git", e.mailto = "mailto", e.untitled = "untitled", e.data = "data", e.command = "command", e.vscodeRemote = "vscode-remote", e.vscodeRemoteResource = "vscode-remote-resource", e.vscodeManagedRemoteResource = "vscode-managed-remote-resource", e.vscodeUserData = "vscode-userdata", e.vscodeCustomEditor = "vscode-custom-editor", e.vscodeNotebook = "vscode-notebook", e.vscodeNotebookCell = "vscode-notebook-cell", e.vscodeNotebookCellMetadata = "vscode-notebook-cell-metadata", e.vscodeNotebookCellMetadataDiff = "vscode-notebook-cell-metadata-diff", e.vscodeNotebookCellOutput = "vscode-notebook-cell-output", e.vscodeNotebookCellOutputDiff = "vscode-notebook-cell-output-diff", e.vscodeNotebookMetadata = "vscode-notebook-metadata", e.vscodeInteractiveInput = "vscode-interactive-input", e.vscodeSettings = "vscode-settings", e.vscodeWorkspaceTrust = "vscode-workspace-trust", e.vscodeTerminal = "vscode-terminal", e.terminal = "terminal", e.vscodeChatCodeBlock = "vscode-chat-code-block", e.vscodeChatCodeCompareBlock = "vscode-chat-code-compare-block", e.vscodeChatSesssion = "vscode-chat-editor", e.webviewPanel = "webview-panel", e.vscodeWebview = "vscode-webview", e.extension = "extension", e.aiChat = "cursor.aichat", e.contextObject = "cursor.context-object", e.composer = "cursor.composer", e.aiSettings = "cursor.aisettings", e.tinderDiffEditor = "cursor.tinderdiffeditor", e.vscodeFileResource = "vscode-file", e.cursorRpcDevtools = "cursor-rpc-devtools", e.tmp = "tmp", e.vsls = "vsls", e.vscodeSourceControl = "vscode-scm", e.commentsInput = "comment", e.codeSetting = "code-setting", e.cursorDev = "cursor-dev-utils", e.outputChannel = "output", e.accessibleView = "accessible-view", e.backgroundComposer = "cursor.backgroundcomposer", e.cursorAgent = "cursor.agent", e.personalEnvironmentJson = "cursor.personalenvironmentjson", e.bugbot = "cursor.bugbot", e.backgroundComposerPeek = "background-composer-peek", e.cursorPlan = "cursor-plan", e.cursorWorker = "cursor-worker", e.reviewChanges = "cursor.reviewchanges", e.cursorBlame = "cursor.blame", e.cursorFileBlame = "cursor.fileblame";
})($ || ($ = {})), y5 = "tkn", w5 = class {
    constructor(){
        this._hosts = Object.create(null), this._ports = Object.create(null), this._connectionTokens = Object.create(null), this._preferredWebSchema = "http", this._delegate = null, this._serverRootPath = "/";
    }
    setPreferredWebSchema(e) {
        this._preferredWebSchema = e;
    }
    setDelegate(e) {
        this._delegate = e;
    }
    setServerRootPath(e, t) {
        this._serverRootPath = De.join(t ?? "/", WUe(e));
    }
    getServerRootPath() {
        return this._serverRootPath;
    }
    get _remoteResourcesPath() {
        return De.join(this._serverRootPath, $.vscodeRemoteResource);
    }
    set(e, t, n) {
        this._hosts[e] = t, this._ports[e] = n;
    }
    setConnectionToken(e, t) {
        this._connectionTokens[e] = t;
    }
    getPreferredWebSchema() {
        return this._preferredWebSchema;
    }
    rewrite(e) {
        if (this._delegate) try {
            return this._delegate(e);
        } catch (a) {
            return yn(a), e;
        }
        const t = e.authority;
        let n = this._hosts[t];
        n && n.indexOf(":") !== -1 && n.indexOf("[") === -1 && (n = `[${n}]`);
        const r = this._ports[t], s = this._connectionTokens[t];
        let i = `path=${encodeURIComponent(e.path)}`;
        return typeof s == "string" && (i += `&${y5}=${encodeURIComponent(s)}`), x.from({
            scheme: Xs ? this._preferredWebSchema : $.vscodeRemoteResource,
            authority: `${n}:${r}`,
            path: this._remoteResourcesPath,
            query: i
        });
    }
}, wR = new w5, Um = "vscode-app", ER = class yb {
    asBrowserUri(t) {
        const n = this.toUri(t);
        return this.uriToBrowserUri(n);
    }
    uriToBrowserUri(t) {
        return t.scheme === $.vscodeRemote ? wR.rewrite(t) : t.scheme === $.file && (zb || c4 === `${$.vscodeFileResource}://${yb.FALLBACK_AUTHORITY}`) ? t.with({
            scheme: $.vscodeFileResource,
            authority: t.authority || yb.FALLBACK_AUTHORITY,
            query: null,
            fragment: null
        }) : t;
    }
    asFileUri(t) {
        const n = this.toUri(t);
        return this.uriToFileUri(n);
    }
    uriToFileUri(t) {
        return t.scheme === $.vscodeFileResource ? t.with({
            scheme: $.file,
            authority: t.authority !== yb.FALLBACK_AUTHORITY ? t.authority : null,
            query: null,
            fragment: null
        }) : t;
    }
    toUri(t) {
        if (x.isUri(t)) return t;
        if (globalThis._VSCODE_FILE_ROOT) {
            const n = globalThis._VSCODE_FILE_ROOT;
            if (/^\w[\w\d+.-]*:\/\//.test(n)) return x.joinPath(x.parse(n, !0), t);
            const r = L(n, t);
            return x.file(r);
        }
        throw new Error("Cannot determine URI for module id!");
    }
}, ER.FALLBACK_AUTHORITY = Um, E5 = ER, Jt = new E5, b5 = Object.freeze({
    "Cache-Control": "no-cache, no-store"
}), R5 = Object.freeze({
    "Document-Policy": "include-js-call-stacks-in-crash-reports, js-profiling"
}), ((e)=>{
    const t = new Map([
        [
            "1",
            {
                "Cross-Origin-Opener-Policy": "same-origin"
            }
        ],
        [
            "2",
            {
                "Cross-Origin-Embedder-Policy": "require-corp"
            }
        ],
        [
            "3",
            {
                "Cross-Origin-Opener-Policy": "same-origin",
                "Cross-Origin-Embedder-Policy": "require-corp"
            }
        ]
    ]);
    e.CoopAndCoep = Object.freeze(t.get("3"));
    const n = "vscode-coi";
    function r(i) {
        let a;
        typeof i == "string" ? a = new URL(i).searchParams : i instanceof URL ? a = i.searchParams : x.isUri(i) && (a = new URL(i.toString(!0)).searchParams);
        const o = a?.get(n);
        if (o) return t.get(o);
    }
    e.getHeadersFromQuery = r;
    function s(i, a, o) {
        if (!globalThis.crossOriginIsolated) return;
        const l = a && o ? "3" : o ? "2" : "1";
        i instanceof URLSearchParams ? i.set(n, l) : i[n] = l;
    }
    e.addSearchParam = s;
})(xm || (xm = {}));

}

import { Aby, Di, Ei, Fa, I0, tXu, th, xr } from "./Iwo.js";
import { Ul, Z0, lh } from "./path_2.js";
import { E } from "./tslib.es6.js";
import { fn, rt } from "./uri.js";
var Ot, lZu, cZu, MOe, uZu, Yvt, Edn, QCo, wmr, JCo, dZu, em, Rby, Pby, aZn;
export { Edn, JCo, MOe, Ot, Pby, QCo, Rby, Yvt, aZn, cZu, dZu, em, lZu, uZu, wmr };
var __wakaru_Ki_initialized = false;
export function Ki() {
if (__wakaru_Ki_initialized) return;
__wakaru_Ki_initialized = true;
"use strict";
E(), Ei(), Di(), Fa(), fn(), Ul(), ((t)=>{
    t.inMemory = "inmemory", t.vscode = "vscode", t.internal = "private", t.walkThrough = "walkThrough", t.walkThroughSnippet = "walkThroughSnippet", t.http = "http", t.https = "https", t.file = "file", t.git = "git", t.mailto = "mailto", t.untitled = "untitled", t.data = "data", t.command = "command", t.vscodeRemote = "vscode-remote", t.vscodeRemoteResource = "vscode-remote-resource", t.vscodeManagedRemoteResource = "vscode-managed-remote-resource", t.vscodeUserData = "vscode-userdata", t.vscodeCustomEditor = "vscode-custom-editor", t.vscodeNotebook = "vscode-notebook", t.vscodeNotebookCell = "vscode-notebook-cell", t.vscodeNotebookCellMetadata = "vscode-notebook-cell-metadata", t.vscodeNotebookCellMetadataDiff = "vscode-notebook-cell-metadata-diff", t.vscodeNotebookCellOutput = "vscode-notebook-cell-output", t.vscodeNotebookCellOutputDiff = "vscode-notebook-cell-output-diff", t.vscodeNotebookMetadata = "vscode-notebook-metadata", t.vscodeInteractiveInput = "vscode-interactive-input", t.vscodeSettings = "vscode-settings", t.vscodeWorkspaceTrust = "vscode-workspace-trust", t.vscodeTerminal = "vscode-terminal", t.terminal = "terminal", t.vscodeChatCodeBlock = "vscode-chat-code-block", t.vscodeChatCodeCompareBlock = "vscode-chat-code-compare-block", t.vscodeChatSesssion = "vscode-chat-editor", t.webviewPanel = "webview-panel", t.vscodeWebview = "vscode-webview", t.extension = "extension", t.aiChat = "cursor.aichat", t.contextObject = "cursor.context-object", t.composer = "cursor.composer", t.aiSettings = "cursor.aisettings", t.tinderDiffEditor = "cursor.tinderdiffeditor", t.vscodeFileResource = "vscode-file", t.cursorRpcDevtools = "cursor-rpc-devtools", t.tmp = "tmp", t.vsls = "vsls", t.vscodeSourceControl = "vscode-scm", t.commentsInput = "comment", t.codeSetting = "code-setting", t.cursorDev = "cursor-dev-utils", t.outputChannel = "output", t.accessibleView = "accessible-view", t.backgroundComposer = "cursor.backgroundcomposer", t.cursorAgent = "cursor.agent", t.personalEnvironmentJson = "cursor.personalenvironmentjson", t.bugbot = "cursor.bugbot", t.backgroundComposerPeek = "background-composer-peek", t.cursorPlan = "cursor-plan", t.cursorWorker = "cursor-worker", t.reviewChanges = "cursor.reviewchanges", t.cursorBlame = "cursor.blame", t.cursorFileBlame = "cursor.fileblame";
})(Ot || (Ot = {})), lZu = "tkn", cZu = class {
    constructor(){
        this._hosts = Object.create(null), this._ports = Object.create(null), this._connectionTokens = Object.create(null), this._preferredWebSchema = "http", this._delegate = null, this._serverRootPath = "/";
    }
    setPreferredWebSchema(t) {
        this._preferredWebSchema = t;
    }
    setDelegate(t) {
        this._delegate = t;
    }
    setServerRootPath(t, e) {
        this._serverRootPath = lh.join(e ?? "/", Aby(t));
    }
    getServerRootPath() {
        return this._serverRootPath;
    }
    get _remoteResourcesPath() {
        return lh.join(this._serverRootPath, Ot.vscodeRemoteResource);
    }
    set(t, e, n) {
        this._hosts[t] = e, this._ports[t] = n;
    }
    setConnectionToken(t, e) {
        this._connectionTokens[t] = e;
    }
    getPreferredWebSchema() {
        return this._preferredWebSchema;
    }
    rewrite(t) {
        if (this._delegate) try {
            return this._delegate(t);
        } catch (o) {
            return xr(o), t;
        }
        const e = t.authority;
        let n = this._hosts[e];
        n && n.indexOf(":") !== -1 && n.indexOf("[") === -1 && (n = `[${n}]`);
        const i = this._ports[e], r = this._connectionTokens[e];
        let s = `path=${encodeURIComponent(t.path)}`;
        return typeof r == "string" && (s += `&${lZu}=${encodeURIComponent(r)}`), rt.from({
            scheme: th ? this._preferredWebSchema : Ot.vscodeRemoteResource,
            authority: `${n}:${i}`,
            path: this._remoteResourcesPath,
            query: s
        });
    }
}, MOe = new cZu, uZu = "vs/../../extensions", Yvt = "vs/../../node_modules", Edn = "vs/../../node_modules.asar", QCo = "vs/../../node_modules.asar.unpacked", wmr = "vscode-app", JCo = class jYs {
    asBrowserUri(e) {
        const n = this.toUri(e);
        return this.uriToBrowserUri(n);
    }
    uriToBrowserUri(e) {
        return e.scheme === Ot.vscodeRemote ? MOe.rewrite(e) : e.scheme === Ot.file && (I0 || tXu === `${Ot.vscodeFileResource}://${jYs.FALLBACK_AUTHORITY}`) ? e.with({
            scheme: Ot.vscodeFileResource,
            authority: e.authority || jYs.FALLBACK_AUTHORITY,
            query: null,
            fragment: null
        }) : e;
    }
    asFileUri(e) {
        const n = this.toUri(e);
        return this.uriToFileUri(n);
    }
    uriToFileUri(e) {
        return e.scheme === Ot.vscodeFileResource ? e.with({
            scheme: Ot.file,
            authority: e.authority !== jYs.FALLBACK_AUTHORITY ? e.authority : null,
            query: null,
            fragment: null
        }) : e;
    }
    toUri(e) {
        if (rt.isUri(e)) return e;
        if (globalThis._VSCODE_FILE_ROOT) {
            const n = globalThis._VSCODE_FILE_ROOT;
            if (/^\w[\w\d+.-]*:\/\//.test(n)) return rt.joinPath(rt.parse(n, !0), e);
            const i = Z0(n, e);
            return rt.file(i);
        }
        throw new Error("Cannot determine URI for module id!");
    }
}, JCo.FALLBACK_AUTHORITY = wmr, dZu = JCo, em = new dZu, Rby = Object.freeze({
    "Cache-Control": "no-cache, no-store"
}), Pby = Object.freeze({
    "Document-Policy": "include-js-call-stacks-in-crash-reports, js-profiling"
}), ((t)=>{
    const e = new Map([
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
    t.CoopAndCoep = Object.freeze(e.get("3"));
    const n = "vscode-coi";
    function i(s) {
        let o;
        typeof s == "string" ? o = new URL(s).searchParams : s instanceof URL ? o = s.searchParams : rt.isUri(s) && (o = new URL(s.toString(!0)).searchParams);
        const a = o?.get(n);
        if (a) return e.get(a);
    }
    t.getHeadersFromQuery = i;
    function r(s, o, a) {
        if (!globalThis.crossOriginIsolated) return;
        const l = o && a ? "3" : a ? "2" : "1";
        s instanceof URLSearchParams ? s.set(n, l) : s[n] = l;
    }
    t.addSearchParam = r;
})(aZn || (aZn = {}));

}

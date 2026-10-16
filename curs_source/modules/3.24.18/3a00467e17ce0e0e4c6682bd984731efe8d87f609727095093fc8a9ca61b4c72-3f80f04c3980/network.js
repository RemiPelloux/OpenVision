import { Ue } from "./errors.js";
import { $t } from "./event.js";
import { F, Q, le } from "./path.js";
import { Gs, Hs, Js, X } from "./platform.js";
import { Ke } from "./strings.js";
import { w } from "./tslib.es6.js";
import { Y, Ye } from "./uri.js";
function Ba(e) {
    return `${e.quality ?? "oss"}-${e.commit ?? "dev"}`;
}
var H, Li, Ri, xi, Ii, n1, Ni, Mi, Va, za, Fi;
export { Ba, Fi, H, Ii, Li, Mi, Ni, Ri, Va, n1, xi, za };
var __wakaru_tr_initialized = false;
export function tr() {
if (__wakaru_tr_initialized) return;
__wakaru_tr_initialized = true;
"use strict";
w(), Ue(), X(), Ke(), Ye(), le(), ((e)=>{
    e.inMemory = "inmemory", e.vscode = "vscode", e.internal = "private", e.walkThrough = "walkThrough", e.walkThroughSnippet = "walkThroughSnippet", e.http = "http", e.https = "https", e.file = "file", e.git = "git", e.mailto = "mailto", e.untitled = "untitled", e.data = "data", e.command = "command", e.vscodeRemote = "vscode-remote", e.vscodeRemoteResource = "vscode-remote-resource", e.vscodeManagedRemoteResource = "vscode-managed-remote-resource", e.vscodeUserData = "vscode-userdata", e.vscodeCustomEditor = "vscode-custom-editor", e.vscodeNotebook = "vscode-notebook", e.vscodeNotebookCell = "vscode-notebook-cell", e.vscodeNotebookCellMetadata = "vscode-notebook-cell-metadata", e.vscodeNotebookCellMetadataDiff = "vscode-notebook-cell-metadata-diff", e.vscodeNotebookCellOutput = "vscode-notebook-cell-output", e.vscodeNotebookCellOutputDiff = "vscode-notebook-cell-output-diff", e.vscodeNotebookMetadata = "vscode-notebook-metadata", e.vscodeInteractiveInput = "vscode-interactive-input", e.vscodeSettings = "vscode-settings", e.vscodeWorkspaceTrust = "vscode-workspace-trust", e.vscodeTerminal = "vscode-terminal", e.terminal = "terminal", e.vscodeChatCodeBlock = "vscode-chat-code-block", e.vscodeChatCodeCompareBlock = "vscode-chat-code-compare-block", e.vscodeChatSesssion = "vscode-chat-editor", e.webviewPanel = "webview-panel", e.vscodeWebview = "vscode-webview", e.extension = "extension", e.aiChat = "cursor.aichat", e.contextObject = "cursor.context-object", e.composer = "cursor.composer", e.aiSettings = "cursor.aisettings", e.tinderDiffEditor = "cursor.tinderdiffeditor", e.vscodeFileResource = "vscode-file", e.cursorRpcDevtools = "cursor-rpc-devtools", e.tmp = "tmp", e.vsls = "vsls", e.vscodeSourceControl = "vscode-scm", e.commentsInput = "comment", e.codeSetting = "code-setting", e.cursorDev = "cursor-dev-utils", e.outputChannel = "output", e.accessibleView = "accessible-view", e.backgroundComposer = "cursor.backgroundcomposer", e.cursorAgent = "cursor.agent", e.personalEnvironmentJson = "cursor.personalenvironmentjson", e.bugbot = "cursor.bugbot", e.backgroundComposerPeek = "background-composer-peek", e.cursorPlan = "cursor-plan", e.cursorWorker = "cursor-worker", e.reviewChanges = "cursor.reviewchanges", e.cursorBlame = "cursor.blame", e.cursorFileBlame = "cursor.fileblame";
})(H || (H = {})), Li = "tkn", Ri = class {
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
        this._serverRootPath = F.join(t ?? "/", Ba(e));
    }
    getServerRootPath() {
        return this._serverRootPath;
    }
    get _remoteResourcesPath() {
        return F.join(this._serverRootPath, H.vscodeRemoteResource);
    }
    set(e, t, r) {
        this._hosts[e] = t, this._ports[e] = r;
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
            return $t(a), e;
        }
        const t = e.authority;
        let r = this._hosts[t];
        r && r.indexOf(":") !== -1 && r.indexOf("[") === -1 && (r = `[${r}]`);
        const s = this._ports[t], i = this._connectionTokens[t];
        let n = `path=${encodeURIComponent(e.path)}`;
        return typeof i == "string" && (n += `&${Li}=${encodeURIComponent(i)}`), Y.from({
            scheme: Hs ? this._preferredWebSchema : H.vscodeRemoteResource,
            authority: `${r}:${s}`,
            path: this._remoteResourcesPath,
            query: n
        });
    }
}, xi = new Ri, Ii = "vscode-app", n1 = class _r {
    asBrowserUri(t) {
        const r = this.toUri(t);
        return this.uriToBrowserUri(r);
    }
    uriToBrowserUri(t) {
        return t.scheme === H.vscodeRemote ? xi.rewrite(t) : t.scheme === H.file && (Gs || Js === `${H.vscodeFileResource}://${_r.FALLBACK_AUTHORITY}`) ? t.with({
            scheme: H.vscodeFileResource,
            authority: t.authority || _r.FALLBACK_AUTHORITY,
            query: null,
            fragment: null
        }) : t;
    }
    asFileUri(t) {
        const r = this.toUri(t);
        return this.uriToFileUri(r);
    }
    uriToFileUri(t) {
        return t.scheme === H.vscodeFileResource ? t.with({
            scheme: H.file,
            authority: t.authority !== _r.FALLBACK_AUTHORITY ? t.authority : null,
            query: null,
            fragment: null
        }) : t;
    }
    toUri(t) {
        if (Y.isUri(t)) return t;
        if (globalThis._VSCODE_FILE_ROOT) {
            const r = globalThis._VSCODE_FILE_ROOT;
            if (/^\w[\w\d+.-]*:\/\//.test(r)) return Y.joinPath(Y.parse(r, !0), t);
            const s = Q(r, t);
            return Y.file(s);
        }
        throw new Error("Cannot determine URI for module id!");
    }
}, n1.FALLBACK_AUTHORITY = Ii, Ni = n1, Mi = new Ni, Va = Object.freeze({
    "Cache-Control": "no-cache, no-store"
}), za = Object.freeze({
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
    const r = "vscode-coi";
    function s(n) {
        let a;
        typeof n == "string" ? a = new URL(n).searchParams : n instanceof URL ? a = n.searchParams : Y.isUri(n) && (a = new URL(n.toString(!0)).searchParams);
        const o = a?.get(r);
        if (o) return t.get(o);
    }
    e.getHeadersFromQuery = s;
    function i(n, a, o) {
        if (!globalThis.crossOriginIsolated) return;
        const l = a && o ? "3" : o ? "2" : "1";
        n instanceof URLSearchParams ? n.set(r, l) : n[r] = l;
    }
    e.addSearchParam = i;
})(Fi || (Fi = {}));

}

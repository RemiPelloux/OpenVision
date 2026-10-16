import { Axc, Dl, Kug, Ps, Q_, jn, ns, si } from "./HVr.js";
import { Eu, Jk, ba } from "./path_2.js";
import { x } from "./tslib.es6.js";
import { Ee, Qt } from "./uri.js";
var gt, AIc, RIc, iwe, DIc, Fqe, INt, mzr, Cmi, gzr, MIc, Gd, Yug, Xug, Gpn;
export { AIc, Cmi, DIc, Fqe, Gd, Gpn, INt, MIc, RIc, Xug, Yug, gt, gzr, iwe, mzr };
var __wakaru_li_initialized = false;
export function li() {
if (__wakaru_li_initialized) return;
__wakaru_li_initialized = true;
"use strict";
x(), si(), jn(), Ps(), Qt(), ba(), ((e)=>{
    e.inMemory = "inmemory", e.vscode = "vscode", e.internal = "private", e.walkThrough = "walkThrough", e.walkThroughSnippet = "walkThroughSnippet", e.http = "http", e.https = "https", e.file = "file", e.git = "git", e.mailto = "mailto", e.untitled = "untitled", e.data = "data", e.command = "command", e.vscodeRemote = "vscode-remote", e.vscodeRemoteResource = "vscode-remote-resource", e.vscodeManagedRemoteResource = "vscode-managed-remote-resource", e.vscodeUserData = "vscode-userdata", e.vscodeCustomEditor = "vscode-custom-editor", e.vscodeNotebook = "vscode-notebook", e.vscodeNotebookCell = "vscode-notebook-cell", e.vscodeNotebookCellMetadata = "vscode-notebook-cell-metadata", e.vscodeNotebookCellMetadataDiff = "vscode-notebook-cell-metadata-diff", e.vscodeNotebookCellOutput = "vscode-notebook-cell-output", e.vscodeNotebookCellOutputDiff = "vscode-notebook-cell-output-diff", e.vscodeNotebookMetadata = "vscode-notebook-metadata", e.vscodeInteractiveInput = "vscode-interactive-input", e.vscodeSettings = "vscode-settings", e.vscodeWorkspaceTrust = "vscode-workspace-trust", e.vscodeTerminal = "vscode-terminal", e.terminal = "terminal", e.vscodeChatCodeBlock = "vscode-chat-code-block", e.vscodeChatCodeCompareBlock = "vscode-chat-code-compare-block", e.vscodeChatSesssion = "vscode-chat-editor", e.webviewPanel = "webview-panel", e.vscodeWebview = "vscode-webview", e.extension = "extension", e.aiChat = "cursor.aichat", e.contextObject = "cursor.context-object", e.composer = "cursor.composer", e.aiSettings = "cursor.aisettings", e.tinderDiffEditor = "cursor.tinderdiffeditor", e.vscodeFileResource = "vscode-file", e.cursorRpcDevtools = "cursor-rpc-devtools", e.tmp = "tmp", e.vsls = "vsls", e.vscodeSourceControl = "vscode-scm", e.commentsInput = "comment", e.codeSetting = "code-setting", e.cursorDev = "cursor-dev-utils", e.outputChannel = "output", e.accessibleView = "accessible-view", e.backgroundComposer = "cursor.backgroundcomposer", e.cursorAgent = "cursor.agent", e.personalEnvironmentJson = "cursor.personalenvironmentjson", e.bugbot = "cursor.bugbot", e.backgroundComposerPeek = "background-composer-peek", e.cursorPlan = "cursor-plan", e.cursorWorker = "cursor-worker", e.reviewChanges = "cursor.reviewchanges", e.cursorBlame = "cursor.blame", e.cursorFileBlame = "cursor.fileblame";
})(gt || (gt = {})), AIc = "tkn", RIc = class {
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
        this._serverRootPath = Eu.join(t ?? "/", Kug(e));
    }
    getServerRootPath() {
        return this._serverRootPath;
    }
    get _remoteResourcesPath() {
        return Eu.join(this._serverRootPath, gt.vscodeRemoteResource);
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
        } catch (o) {
            return ns(o), e;
        }
        const t = e.authority;
        let n = this._hosts[t];
        n && n.indexOf(":") !== -1 && n.indexOf("[") === -1 && (n = `[${n}]`);
        const i = this._ports[t], r = this._connectionTokens[t];
        let s = `path=${encodeURIComponent(e.path)}`;
        return typeof r == "string" && (s += `&${AIc}=${encodeURIComponent(r)}`), Ee.from({
            scheme: Dl ? this._preferredWebSchema : gt.vscodeRemoteResource,
            authority: `${n}:${i}`,
            path: this._remoteResourcesPath,
            query: s
        });
    }
}, iwe = new RIc, DIc = "vs/../../extensions", Fqe = "vs/../../node_modules", INt = "vs/../../node_modules.asar", mzr = "vs/../../node_modules.asar.unpacked", Cmi = "vscode-app", gzr = class J0r {
    asBrowserUri(t) {
        const n = this.toUri(t);
        return this.uriToBrowserUri(n);
    }
    uriToBrowserUri(t) {
        return t.scheme === gt.vscodeRemote ? iwe.rewrite(t) : t.scheme === gt.file && (Q_ || Axc === `${gt.vscodeFileResource}://${J0r.FALLBACK_AUTHORITY}`) ? t.with({
            scheme: gt.vscodeFileResource,
            authority: t.authority || J0r.FALLBACK_AUTHORITY,
            query: null,
            fragment: null
        }) : t;
    }
    asFileUri(t) {
        const n = this.toUri(t);
        return this.uriToFileUri(n);
    }
    uriToFileUri(t) {
        return t.scheme === gt.vscodeFileResource ? t.with({
            scheme: gt.file,
            authority: t.authority !== J0r.FALLBACK_AUTHORITY ? t.authority : null,
            query: null,
            fragment: null
        }) : t;
    }
    toUri(t) {
        if (Ee.isUri(t)) return t;
        if (globalThis._VSCODE_FILE_ROOT) {
            const n = globalThis._VSCODE_FILE_ROOT;
            if (/^\w[\w\d+.-]*:\/\//.test(n)) return Ee.joinPath(Ee.parse(n, !0), t);
            const i = Jk(n, t);
            return Ee.file(i);
        }
        throw new Error("Cannot determine URI for module id!");
    }
}, gzr.FALLBACK_AUTHORITY = Cmi, MIc = gzr, Gd = new MIc, Yug = Object.freeze({
    "Cache-Control": "no-cache, no-store"
}), Xug = Object.freeze({
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
    function i(s) {
        let o;
        typeof s == "string" ? o = new URL(s).searchParams : s instanceof URL ? o = s.searchParams : Ee.isUri(s) && (o = new URL(s.toString(!0)).searchParams);
        const a = o?.get(n);
        if (a) return t.get(a);
    }
    e.getHeadersFromQuery = i;
    function r(s, o, a) {
        if (!globalThis.crossOriginIsolated) return;
        const c = o && a ? "3" : a ? "2" : "1";
        s instanceof URLSearchParams ? s.set(n, c) : s[n] = c;
    }
    e.addSearchParam = r;
})(Gpn || (Gpn = {}));

}

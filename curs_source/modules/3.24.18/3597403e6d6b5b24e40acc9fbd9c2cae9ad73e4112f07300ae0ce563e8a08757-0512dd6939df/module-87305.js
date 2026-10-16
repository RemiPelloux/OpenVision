n.d(e, {
    CX: ()=>qt,
    WT: ()=>b,
    e4: ()=>Nt,
    TT: ()=>Ce,
    Fh: ()=>pe,
    FY: ()=>Ht,
    $p: ()=>At,
    Xi: ()=>le,
    sH: ()=>zt,
    wV: ()=>Lt,
    dw: ()=>Bt,
    $h: ()=>_e
});
var a = n(77598), r = n(51455), s = n(98995), i = n(76760);
function o(t) {
    const e = function(t) {
        return t.includes("PillTone") || function(t, e, n) {
            return t.includes(n) && t.includes(e);
        }(t, "tone", "PillProps") ? 'Pill.tone is ignored (pills always render neutral) and has no "danger" member. Use Stat, Callout, Chart, or Table rowTone for semantic color.' : t.includes("CardVariant") ? 'Card.variant is only "default" | "borderless". There is no accent variant — use Callout for emphasis.' : t.includes("TableProps") && (t.includes("does not exist") || t.includes("is not assignable") || t.includes("rowHeaderColumn")) ? "Table has no rowHeaderColumn. Props are headers, rows, columnAlign, rowTone, framed, striped, stickyHeader, emptyMessage, and style." : t.includes("CanvasHostTheme") && (t.includes("'colors'") || t.includes('"colors"')) ? "useHostTheme() has no colors group. Use theme.bg.editor, theme.fill.primary, theme.text.primary, theme.stroke.secondary, or theme.accent.primary." : function(t) {
            return !(!t.includes("ChartSeries") && !t.includes("ChartDataPoint")) && (t.includes("data: string") || t.includes("value: string") || t.includes("string[]") || /Type ['"]string['"] is not assignable to type ['"]number['"]/.test(t));
        }(t) ? "Chart series data and ChartDataPoint.value must be numbers, not strings." : void 0;
    }(t);
    return void 0 === e ? t : `${t} ${e}`;
}
const c = "node_modules", u = ".node_modules.staging-", l = ".node_modules.old-";
const d = "tsconfig.json", h = {
    target: "ES2021",
    module: "ESNext",
    moduleResolution: "bundler",
    jsx: "react-jsx",
    strict: !0,
    noEmit: !0,
    skipLibCheck: !0,
    lib: [
        "ESNext",
        "DOM"
    ]
}, p = JSON.stringify({
    compilerOptions: h,
    include: [
        "*.canvas.tsx"
    ]
}, null, 2);
JSON.stringify({
    compilerOptions: {
        ...h,
        types: []
    },
    include: [
        "*.canvas.tsx"
    ]
}, null, 2);
async function f(t) {
    const e = await v(t.sdkSourceDir);
    if (void 0 === e) return;
    await async function(t) {
        await (0, r.mkdir)(t, {
            recursive: !0
        });
        if ((await (0, r.lstat)(t)).isSymbolicLink()) throw new Error(`Refusing to bootstrap canvas SDK into symlinked directory: ${t}`);
    }(t.canvasesDir);
    const n = (0, i.join)(t.canvasesDir, c), a = (0, i.join)(t.canvasesDir, d), s = t.tsconfigContent ?? p, o = await v(n) === e, h = await async function(t, e) {
        try {
            return await (0, r.readFile)(t, "utf-8") === e;
        } catch  {
            return !1;
        }
    }(a, s);
    return o || await async function(t, e, n) {
        const a = (0, i.join)(e, c), s = `${process.pid}.${++g}`, o = (0, i.join)(e, `${u}${s}`), d = (0, i.join)(e, `${l}${s}`);
        await (0, r.cp)(t, o, {
            recursive: !0
        });
        try {
            let t = !1;
            try {
                await (0, r.rename)(a, d), t = !0;
            } catch (t) {
                if ("ENOENT" !== t.code) throw t;
            }
            try {
                await (0, r.rename)(o, a);
            } catch (e) {
                t && await (0, r.rename)(d, a).catch(y);
                for(let t = 0; t < 20; t++){
                    if (await v(a) === n) return;
                    await new Promise((t)=>setTimeout(t, 5));
                }
                throw e;
            }
            t && await (0, r.rm)(d, {
                recursive: !0,
                force: !0
            }).catch(y);
        } finally{
            await (0, r.rm)(o, {
                recursive: !0,
                force: !0
            }).catch(y);
        }
    }(t.sdkSourceDir, t.canvasesDir, e), h || await async function(t, e) {
        const n = `${t}.tmp.${process.pid}.${++m}`;
        await (0, r.writeFile)(n, e, "utf-8"), await (0, r.rename)(n, t);
    }(a, s), {
        canvasesDir: t.canvasesDir,
        tsconfigPath: a
    };
}
async function v(t) {
    try {
        return (await (0, r.readFile)((0, i.join)(t, "canvas-sdk-version"), "utf-8")).trim();
    } catch  {
        return;
    }
}
let m = 0;
let g = 0;
function y() {}
function w(t) {
    return t.replace(/\\/g, "/");
}
function b(t) {
    return new S(t);
}
class S {
    constructor(t){
        this.canvasesDir = (0, i.normalize)(t.canvasesDir), this.canvasesDirPrefix = this.canvasesDir.endsWith(i.sep) ? this.canvasesDir : `${this.canvasesDir}${i.sep}`;
        const e = void 0 === t.extraMatchRoot ? [] : "string" == typeof t.extraMatchRoot ? [
            t.extraMatchRoot
        ] : t.extraMatchRoot;
        this.extraMatchRootPrefixes = e.map((t)=>{
            const e = (0, i.normalize)(t);
            return e.endsWith(i.sep) ? e : `${e}${i.sep}`;
        }), this.getExtraMatchRoots = t.getExtraMatchRoots, this.tsResolveAnchor = t.tsResolveAnchor;
        const n = function(t) {
            const e = (0, i.join)(t, "cursor"), n = (0, i.join)(t, "@types", "react");
            return {
                cursorPackageJson: (0, i.join)(e, "package.json"),
                cursorCanvasIndex: (0, i.join)(e, "canvas", "index.d.ts"),
                reactRoot: n,
                reactIndex: (0, i.join)(n, "index.d.ts"),
                reactJsxRuntime: (0, i.join)(n, "jsx-runtime.d.ts")
            };
        }((0, i.join)(this.canvasesDir, c));
        this.resolutionTable = new Map([
            [
                "cursor/canvas",
                n.cursorCanvasIndex
            ],
            [
                "react",
                n.reactIndex
            ],
            [
                "react/jsx-runtime",
                n.reactJsxRuntime
            ],
            [
                "react/jsx-dev-runtime",
                n.reactJsxRuntime
            ]
        ]), this.bootstrapReady = f({
            canvasesDir: this.canvasesDir,
            sdkSourceDir: t.sdkSourceDir
        });
    }
    async getDiagnostics(t) {
        return (await this.getDiagnosticsSnapshot(t))?.diagnostics;
    }
    async getDiagnosticsSnapshot(t) {
        const e = (0, i.normalize)(t);
        if (!e.endsWith(".canvas.tsx") || !this.matchesRoot(e)) return;
        let n;
        try {
            n = await this.bootstrapReady;
        } catch  {
            return;
        }
        if (void 0 === n) return;
        const s = this.loadTypeScript();
        if (!s) return;
        const o = await this.getOrInitCompilerSetup(s);
        if (!o) return;
        let c;
        try {
            c = await (0, r.readFile)(e);
        } catch  {
            return;
        }
        if (!this.matchesRoot(e)) return;
        const u = c.toString("utf8"), l = this.buildProgram(s, o, e, u), d = l.getSourceFile(e) ?? l.getSourceFile(w(e));
        if (!d) return;
        return {
            diagnostics: [
                ...l.getSyntacticDiagnostics(d),
                ...l.getSemanticDiagnostics(d)
            ].map((t)=>this.mapDiagnostic(s, t, d)),
            sourceSha256: (0, a.createHash)("sha256").update(c).digest("hex")
        };
    }
    matchesRoot(t) {
        if (t.startsWith(this.canvasesDirPrefix)) return !0;
        if (this.extraMatchRootPrefixes.some((e)=>t.startsWith(e))) return !0;
        let e;
        try {
            e = this.getExtraMatchRoots?.();
        } catch  {
            return !1;
        }
        if (void 0 === e) return !1;
        return ("string" == typeof e ? [
            e
        ] : e).some((e)=>{
            const n = (0, i.normalize)(e), a = n.endsWith(i.sep) ? n : `${n}${i.sep}`;
            return t.startsWith(a);
        });
    }
    loadTypeScript() {
        return this.tsModule || (this.tsModule = function(t) {
            try {
                return (0, s.createRequire)((0, i.join)(t, "package.json"))("typescript");
            } catch  {}
            try {
                if ("function" == typeof require) return require("typescript");
            } catch  {}
        }(this.tsResolveAnchor)), this.tsModule;
    }
    getOrInitCompilerSetup(t) {
        if (this.compilerSetup) return this.compilerSetup;
        const e = (async ()=>{
            const e = (0, i.join)(this.canvasesDir, d);
            let n;
            try {
                n = await (0, r.readFile)(e, "utf-8");
            } catch  {
                return;
            }
            const a = t.readConfigFile(e, ()=>n);
            if (a.error) return;
            const s = t.parseJsonConfigFileContent(a.config, t.sys, this.canvasesDir);
            return {
                options: s.options,
                sdkSourceFileCache: new Map,
                moduleResolutionCache: t.createModuleResolutionCache(this.canvasesDir, (t)=>t, s.options)
            };
        })();
        return this.compilerSetup = e, e.then((t)=>{
            void 0 === t && this.compilerSetup === e && (this.compilerSetup = void 0);
        }, ()=>{
            this.compilerSetup === e && (this.compilerSetup = void 0);
        }), e;
    }
    buildProgram(t, e, n, a) {
        const r = t.createCompilerHost(e.options), s = r.getSourceFile.bind(r), i = e.sdkSourceFileCache, o = e.moduleResolutionCache, c = this.resolutionTable, u = w(n);
        return r.getSourceFile = (e, r, o, c)=>{
            if (e === n || w(e) === u) return t.createSourceFile(e, a, r, !0, t.ScriptKind.TSX);
            if (i.has(e)) return i.get(e);
            const l = s(e, r, o, c);
            return i.set(e, l), l;
        }, r.resolveModuleNameLiterals = (e, n, a, s)=>e.map((e)=>{
                const i = c.get(e.text);
                return void 0 !== i ? {
                    resolvedModule: {
                        resolvedFileName: i,
                        extension: t.Extension.Dts,
                        isExternalLibraryImport: !0
                    }
                } : t.resolveModuleName(e.text, n, s, r, o, a);
            }), t.createProgram({
            rootNames: [
                n
            ],
            options: e.options,
            host: r
        });
    }
    mapDiagnostic(t, e, n) {
        const a = t.flattenDiagnosticMessageText(e.messageText, "\n"), r = void 0 !== e.code ? `TS${e.code}` : void 0;
        let s = {
            line: 0,
            character: 0
        }, i = {
            line: 0,
            character: 0
        };
        if (void 0 !== e.start) {
            const t = n.getLineAndCharacterOfPosition(e.start);
            s = {
                line: t.line,
                character: t.character
            };
            const a = e.start + (e.length ?? 0), r = n.getLineAndCharacterOfPosition(a);
            i = {
                line: r.line,
                character: r.character
            };
        }
        let c = 1;
        switch(e.category){
            case t.DiagnosticCategory.Error:
                c = 1;
                break;
            case t.DiagnosticCategory.Warning:
                c = 2;
                break;
            case t.DiagnosticCategory.Message:
            case t.DiagnosticCategory.Suggestion:
                c = 3;
        }
        return {
            range: {
                start: s,
                end: i
            },
            severity: c,
            code: r,
            message: o(a)
        };
    }
}
var C = n(31421), _ = n(73024), x = n(37067), P = n(48161), k = n(38522);
const D = String.fromCodePoint(39), T = (t)=>`${D}${t}${D}`, E = T("none"), j = T("unsafe-inline");
[
    [
        "default-src",
        E
    ],
    [
        "script-src",
        j,
        "blob:"
    ],
    [
        "sandbox",
        "allow-scripts"
    ],
    [
        "style-src",
        j
    ],
    [
        "img-src",
        "data:",
        "blob:"
    ],
    [
        "font-src",
        "data:"
    ],
    [
        "connect-src",
        E
    ],
    [
        "worker-src",
        E
    ],
    [
        "child-src",
        E
    ],
    [
        "frame-src",
        E
    ],
    [
        "object-src",
        E
    ],
    [
        "base-uri",
        E
    ],
    [
        "form-action",
        E
    ]
].map((t)=>t.join(" ")).join("; "), [
    "accelerometer",
    "camera",
    "geolocation",
    "gyroscope",
    "magnetometer",
    "microphone",
    "payment",
    "usb",
    "clipboard-read",
    "clipboard-write"
].map((t)=>`${t}=()`).join(", "), String.raw`\u003c`, String.raw`\u003e`, String.raw`\u0026`, String.raw`\u2028`, String.raw`\u2029`;
const F = '-apple-system, BlinkMacSystemFont, "Segoe WPC", "Segoe UI", system-ui, "Ubuntu", "Droid Sans", sans-serif';
var W = n(37949), $ = n(33002), R = n(47670);
function O(t) {
    return "number" == typeof t && Number.isInteger(t) && t > 0 ? t : void 0;
}
function M(t) {
    if ("object" != typeof t || null === t) return;
    const e = t;
    switch(e.type){
        case "openAgent":
            return "string" == typeof e.agentId && e.agentId.length > 0 ? {
                type: "openAgent",
                agentId: e.agentId
            } : void 0;
        case "newComposerChat":
            {
                if (void 0 === e.userPrompt) return {
                    type: "newComposerChat"
                };
                if ("string" != typeof e.userPrompt) return;
                const t = e.userPrompt.trim();
                return t.length > 0 ? {
                    type: "newComposerChat",
                    userPrompt: t
                } : {
                    type: "newComposerChat"
                };
            }
        case "openFile":
            {
                if ("string" != typeof e.path) return;
                const t = e.path.trim();
                if (0 === t.length) return;
                const n = function(t) {
                    if (void 0 === t) return;
                    if ("object" != typeof t || null === t) return;
                    const e = t, n = O(e.startLineNumber);
                    if (void 0 === n) return;
                    const a = O(e.startColumn), r = O(e.endLineNumber), s = O(e.endColumn);
                    return void 0 !== e.startColumn && void 0 === a || void 0 !== e.endLineNumber && void 0 === r || void 0 !== e.endColumn && void 0 === s ? void 0 : {
                        startLineNumber: n,
                        ...void 0 !== a ? {
                            startColumn: a
                        } : {},
                        ...void 0 !== r ? {
                            endLineNumber: r
                        } : {},
                        ...void 0 !== s ? {
                            endColumn: s
                        } : {}
                    };
                }(e.selection);
                if (void 0 !== e.selection && void 0 === n) return;
                return {
                    type: "openFile",
                    path: t,
                    ...void 0 !== n ? {
                        selection: n
                    } : {}
                };
            }
        default:
            return;
    }
}
var N = n(76576);
const I = "canvases", J = ".canvas.bundle.gz", H = 5e6, A = 1;
function L(t) {
    return {
        version: A,
        runtimeEsm: t.runtimeEsm,
        userModule: t.userModule
    };
}
function z(t) {
    const e = t.trimStart();
    if (!e.startsWith("{")) return {
        kind: "legacy-esm",
        source: t
    };
    try {
        const t = JSON.parse(e);
        if (function(t) {
            if (!t || "object" != typeof t) return !1;
            const e = t;
            return e.version === A && "string" == typeof e.runtimeEsm && "string" == typeof e.userModule;
        }(t)) return {
            kind: "bundle-v1",
            bundle: t
        };
    } catch  {}
    return {
        kind: "legacy-esm",
        source: t
    };
}
function B(t) {
    return t.toLowerCase().endsWith(J);
}
function U(t, e, n = H) {
    return function(t, e) {
        const n = Buffer.byteLength(JSON.stringify(e), "utf-8");
        return t.length + n + 64;
    }(t, e) <= n;
}
(0, n(57975).promisify)(k.gzip);
const q = {
    level: 9
};
function G(t) {
    return Buffer.from(JSON.stringify(t), "utf-8");
}
function V(t) {
    return e = G(t), (0, k.gzipSync)(e, q);
    var e;
}
const K = "--cursor-canvas-viewport-height";
function X() {
    const t = "calc(100vh - 48px)", e = function({ viewportHeight: t, legacyPreviewViewportHeight: e }) {
        return `#root{${K}:${t}}${void 0 === e ? "" : `#root:is([style*="min-height:0"],[style*="min-height: 0"]){${K}:${e}}`}#root>:only-child:is([style^="height:100%;"],[style^="height: 100%;"],[style*=";height:100%;"],[style*="; height: 100%;"]){min-height:var(${K})!important}`;
    }({
        viewportHeight: t,
        legacyPreviewViewportHeight: "100vh"
    });
    return `html,body{min-height:100vh}body{padding:24px 32px}#root{min-height:${t};width:100%;margin:0 auto;overflow-x:auto;position:relative;contain:paint}${e}${function({ inlinePadding: t, extraRules: e = "" } = {}) {
        const n = "calc(100vh - 32px)";
        return `@media (max-width: 479.98px){body{padding:${void 0 === t ? "16px" : `16px ${t}`}}#root{min-height:${n};${K}:${n}}${e}}`;
    }()}:root{--cursor-canvas-focus-ring-width:1px;--cursor-canvas-focus-ring-offset:2px;--cursor-canvas-focus-ring-radius:4px}*:focus,*:focus-visible{outline:none}*:focus-visible{outline:var(--cursor-canvas-focus-ring-width) solid var(--cursor-canvas-focus-ring-color,currentColor);outline-offset:var(--cursor-canvas-focus-ring-offset)}:where(a[href],[role="link"]):focus-visible{border-radius:var(--cursor-canvas-focus-ring-radius)}`;
}
function Y(t) {
    return t.replace(/^\s*import\b[\s\S]*?;\s*$/gm, "");
}
const Z = (0, W.h)("canvas-server:http-server");
let Q;
async function tt() {
    return Q ??= await Promise.resolve().then(n.t.bind(n, 41503, 19)), Q;
}
const et = /spawn\s+\S+\s+(ENOENT|EACCES|EPERM|ENOEXEC|ENOTDIR)\b/;
let nt, at = 0, rt = !1;
function st(t, e) {
    if (rt) return;
    rt = !0;
    const n = function() {
        const t = function() {
            const t = process.env.PATH;
            if (!t) return;
            const e = "win32" === process.platform ? [
                "node.exe",
                "node.cmd"
            ] : [
                "node"
            ];
            for (const n of t.split(i.delimiter))if (n) for (const t of e){
                const e = i.join(n, t);
                try {
                    if (_.existsSync(e)) return e;
                } catch  {}
            }
            return;
        }();
        if (!t) return "absent";
        const e = function(t) {
            try {
                const e = (0, C.execFileSync)(t, [
                    "--version"
                ], {
                    cwd: P.tmpdir(),
                    encoding: "utf8",
                    timeout: 2e3,
                    stdio: [
                        "ignore",
                        "pipe",
                        "ignore"
                    ]
                }).trim(), n = /^v?(\d+)\./.exec(e);
                return n ? Number.parseInt(n[1], 10) : void 0;
            } catch  {
                return;
            }
        }(t);
        return void 0 === e ? "unusable" : e >= 18 ? "satisfies" : "unusable";
    }();
    if ("satisfies" === n) return;
    if (!t) return;
    const a = i.dirname(t), r = process.env.PATH ?? "";
    if ("absent" === n) {
        if (r.split(i.delimiter).includes(a)) return;
        return process.env.PATH = r ? `${r}${i.delimiter}${a}` : a, void Z.info(e, "Appended bundled node to PATH for esbuild-wasm (no node found on PATH)");
    }
    const s = r.split(i.delimiter).filter((t)=>t && t !== a);
    process.env.PATH = [
        a,
        ...s
    ].join(i.delimiter), Z.info(e, "Prepended bundled node to PATH for esbuild-wasm (resolved node is too old or unusable from an arbitrary directory)", {
        requiredMajor: 18
    });
}
const it = "canvas-runtime.esm.js", ot = `/runtime/${it}`, ct = 1048576, ut = 5e6, lt = 2e7;
function dt(t, e, n) {
    return `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1">\n  <title>Canvas</title>\n  <style>*{margin:0;padding:0;box-sizing:border-box;scrollbar-width:thin;scrollbar-color:rgba(121,121,121,0.4) transparent}${X()}::-webkit-scrollbar{width:8px;height:8px;background:transparent}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:rgba(121,121,121,0.4);border-radius:4px}::-webkit-scrollbar-thumb:hover{background:rgba(121,121,121,0.7)}::-webkit-scrollbar-corner{background:transparent}</style>\n</head>\n<body>\n  <div id="root"></div>\n  ${function(t, e) {
        const n = e ? `?token=${e}` : "";
        return `\n<script>\n(function() {\n  var canvasId = ${JSON.stringify(t)};\n  var tokenParam = ${JSON.stringify(n)};\n  var isPreview = false;\n  try {\n    isPreview = new URLSearchParams(window.location.search).has('preview');\n  } catch (_) {}\n  var isReloading = false;\n  var isDisposed = false;\n  var ws = null;\n\n  // Preview-mode iframes auto-mount in chat without a user gesture, so we\n  // close the canvas-action API surface by not exposing canvasId / tokenParam\n  // on window.__cursorCanvas. dispatchCanvasAction() in canvas-components\n  // early-returns when canvasId is missing, neutering the SDK end-to-end.\n  // The closure-local canvasId / tokenParam stay available to the runtime's\n  // own WebSocket connection (read-only: only forwards reload events).\n  window.__cursorCanvas = {\n    canvasId: isPreview ? undefined : canvasId,\n    tokenParam: isPreview ? '' : tokenParam,\n    state: new Map(),\n    data: new Map(),\n    reportError: function(message) {\n      if (isPreview) return;\n      fetch('/canvas/' + canvasId + '/report-error' + tokenParam, {\n        method: 'POST',\n        headers: { 'Content-Type': 'application/json' },\n        body: JSON.stringify({ message: String(message) })\n      }).catch(function() {});\n    }\n  };\n\n  function connectHostState() {\n    if (isDisposed || ws) return;\n    var loc = window.location;\n    var proto = loc.protocol === 'https:' ? 'wss:' : 'ws:';\n    ws = new WebSocket(proto + '//' + loc.host + '/canvas/' + canvasId + '/ws' + tokenParam);\n    ws.onmessage = function(e) {\n      try {\n        var msg = JSON.parse(e.data);\n        if (msg.type === 'reload') { triggerReload(); return; }\n        if (msg.type === 'state') {\n          window.__cursorCanvas.state.set(msg.channel, msg.payload);\n          document.dispatchEvent(\n            new CustomEvent('cursor-canvas-state-change', { detail: { channel: msg.channel } })\n          );\n          return;\n        }\n        // Preview iframes are read-only; canvas-data round-trips through a\n        // missing canvasId, so drop rather than partially apply.\n        if (isPreview) return;\n        if (msg.type === 'canvas-data') {\n          if (msg.value === undefined) {\n            window.__cursorCanvas.data.delete(msg.key);\n          } else {\n            window.__cursorCanvas.data.set(msg.key, msg.value);\n          }\n          document.dispatchEvent(\n            new CustomEvent('cursor-canvas-data-change', { detail: { key: msg.key } })\n          );\n        }\n      } catch (_) {}\n    };\n    ws.onclose = function() {\n      ws = null;\n      if (!isDisposed) setTimeout(connectHostState, 1000);\n    };\n  }\n\n  function disconnectHostState() {\n    if (!ws) return;\n    ws.close();\n    ws = null;\n  }\n\n  function cleanup() {\n    if (isDisposed) return;\n    isDisposed = true;\n    disconnectHostState();\n    window.removeEventListener('beforeunload', cleanup);\n    window.removeEventListener('pagehide', cleanup);\n  }\n\n  function triggerReload() {\n    if (isDisposed || isReloading) return;\n    isReloading = true;\n    window.location.reload();\n  }\n\n  window.addEventListener('beforeunload', cleanup);\n  window.addEventListener('pagehide', cleanup);\n  connectHostState();\n})();\n<\/script>\n`;
    }(t, e)}\n  <script type="module">\n    import { mountCanvas } from "${n}?token=${e}";\n    mountCanvas("/canvas/${t}/app.js?token=${e}");\n  <\/script>\n</body>\n</html>`;
}
function ht(t) {
    return a.createHash("sha256").update(`canvas:${t}`).digest("hex").slice(0, 12);
}
function pt(t) {
    const e = i.dirname(t), n = i.basename(t, i.extname(t));
    return i.join(e, `${n}.status.json`);
}
function ft(t) {
    const e = i.dirname(t), n = i.basename(t, i.extname(t));
    return i.join(e, `${n}.data.json`);
}
class vt extends Error {
    constructor(){
        super("Request body too large");
    }
}
class mt extends Error {
    constructor(){
        super(`Canvas bundle exceeds the ${ut}-byte compressed size limit.`);
    }
}
class gt extends Error {
    constructor(){
        super("Canvas bundle exceeds the 20000000-byte decompressed size limit.");
    }
}
function yt(t) {
    let e;
    try {
        e = JSON.parse(t);
    } catch  {
        throw new Error("Canvas bundle must contain a valid strict v1 JSON payload; legacy ESM is not supported.");
    }
    if (!function(t) {
        if ("object" != typeof t || null === t || Array.isArray(t)) return !1;
        const e = Object.keys(t).sort();
        return 3 === e.length && "runtimeEsm" === e[0] && "userModule" === e[1] && "version" === e[2] && "version" in t && 1 === t.version && "runtimeEsm" in t && "string" == typeof t.runtimeEsm && "userModule" in t && "string" == typeof t.userModule;
    }(e)) throw new Error('Canvas bundle must have exactly { "version": 1, "runtimeEsm": string, "userModule": string }; legacy ESM is not supported.');
    return e;
}
class wt {
    constructor(t){
        this._registrations = new Map, this._dataWriteTimers = new Map, this.logContext = t.logContext ?? (0, $.q6)(), this._runtimeDir = t.runtimeDir, this._nodeExecPath = t.nodeExecPath;
    }
    onAction(t) {
        this._actionCallback = t;
    }
    onError(t) {
        this._errorCallback = t;
    }
    onErrorCleared(t) {
        this._errorClearedCallback = t;
    }
    _readBody(t, e) {
        return new Promise((n, a)=>{
            let r = "", s = 0, i = !1;
            t.on("data", (t)=>{
                s += t.length, s > e ? i = !0 : i || (r += t.toString());
            }), t.on("end", ()=>{
                i ? a(new vt) : n(r);
            }), t.on("error", a);
        });
    }
    get registeredCanvasCount() {
        return this._registrations.size;
    }
    get sessionToken() {
        return this._sessionToken;
    }
    async start() {
        if (this._server) return {
            port: this._port,
            sessionToken: this._sessionToken
        };
        st(this._nodeExecPath, this.logContext);
        const t = Date.now();
        this._sessionToken = a.randomBytes(32).toString("hex"), this._runtimeModule ??= await Dt(this._runtimeDir);
        const e = x.createServer((t, e)=>{
            this._handleRequest(t, e);
        }), n = new R.WebSocketServer({
            noServer: !0
        });
        e.on("upgrade", (t, e, a)=>{
            const r = new URL(t.url ?? "/", "http://127.0.0.1"), s = r.pathname;
            if (!this._isValidOrigin(t.headers.origin)) return void e.destroy();
            if (r.searchParams.get("token") !== this._sessionToken) return void e.destroy();
            const i = s.match(/^\/canvas\/([a-f0-9]{12})\/ws$/);
            if (!i) return void e.destroy();
            const o = this._registrations.get(i[1]);
            o ? n.handleUpgrade(t, e, a, (t)=>{
                o.eventClients.add(t);
                for (const [e, n] of o.hostState)t.send(`{"type":"state","channel":${JSON.stringify(e)},"payload":${n}}`);
                for (const [e, n] of Object.entries(o.canvasData))t.send(JSON.stringify({
                    type: "canvas-data",
                    key: e,
                    value: n
                }));
                t.on("close", ()=>{
                    o.eventClients.delete(t);
                }), t.on("error", ()=>{
                    o.eventClients.delete(t);
                });
            }) : e.destroy();
        });
        try {
            this._port = await this._listen(e);
        } catch (t) {
            throw e.close(), t;
        }
        return this._server = e, this._wss = n, Z.info(this.logContext, "Canvas server started", {
            port: this._port,
            startDurationMs: Date.now() - t
        }), {
            port: this._port,
            sessionToken: this._sessionToken
        };
    }
    async stop() {
        await this._flushPendingDataWrites();
        for (const t of this._registrations.values())this._stopFileWatcher(t), this._stopDataFileWatcher(t), this._closeEventClients(t), "source" === t.kind && this._deleteStatusFile(t);
        this._registrations.clear(), this._wss?.close(), this._wss = void 0, this._server?.close(), this._server = void 0, this._port = void 0, this._sessionToken = void 0, Z.info(this.logContext, "Canvas server stopped");
    }
    _validateId(t) {
        return /^[a-f0-9]{12}$/.test(t);
    }
    getUrl(t, e) {
        if (!this._validateId(t)) return;
        if (!this._port || !this._sessionToken) return;
        if (!this._registrations.has(t)) return;
        const n = `http://localhost:${this._port}/canvas/${t}/`, a = new URL(n);
        return a.searchParams.set("token", this._sessionToken), e && a.searchParams.set("preview", "1"), a.toString();
    }
    async _registerCanvas(t) {
        if (void 0 === this._port) throw new Error("CanvasServer.start() must be called before registerCanvas()");
        const e = function(t) {
            return "bundle" === t.kind ? t : {
                kind: "source",
                path: t.path
            };
        }(t);
        if ("bundle" === e.kind && !B(n = i.basename(e.path)) && n !== N.Rj) throw new Error(`Canvas bundle path must end with ".canvas.bundle.gz" or be a user-store "canvas.bundle.gz": ${e.path}`);
        var n;
        const a = ht(e.path);
        if (!this._validateId(a)) throw new Error(`Invalid canvas ID: ${a}`);
        const r = this._registrations.get(a);
        if (r && (this._stopFileWatcher(r), this._stopDataFileWatcher(r), this._closeEventClients(r)), "bundle" === e.kind) {
            const t = this._dataWriteTimers.get(a);
            void 0 !== t && (clearTimeout(t), this._dataWriteTimers.delete(a));
        }
        const s = {
            kind: e.kind,
            canvasId: a,
            path: e.path,
            eventClients: new Set,
            hostState: new Map,
            canvasData: "source" === e.kind ? await this._readDataFile(e.path) : {},
            pendingBuild: !1,
            notifyClientsOnBuild: !1
        };
        return this._startFileWatcher(s), "source" === s.kind && this._startDataFileWatcher(s), this._registrations.set(a, s), a;
    }
    async registerCanvas(t) {
        return {
            canvasId: await this._registerCanvas(t),
            path: t.path
        };
    }
    getRegisteredCanvasPath(t) {
        if (this._validateId(t)) return this._registrations.get(t)?.path;
    }
    async getShareArtifact(t) {
        const e = ht(t.path), n = this._registrations.get(e);
        if (!n) return {
            appJs: "",
            dataJson: {},
            status: {
                status: "canvas-missing"
            }
        };
        const a = await this._ensureBuildState(n), r = St(a);
        if ("rendered" !== r.status) return {
            appJs: "",
            dataJson: {},
            status: r
        };
        const s = {
            ...n.canvasData
        };
        let i = a.runtimeModule;
        void 0 === i && (this._runtimeModule ??= await Dt(this._runtimeDir), i = this._runtimeModule);
        const o = V(L({
            runtimeEsm: i,
            userModule: a.appModule
        }));
        return U(o, s) ? {
            appJs: o.toString("base64"),
            dataJson: s,
            status: r
        } : {
            appJs: "",
            dataJson: {},
            status: {
                status: "content-too-large"
            }
        };
    }
    pushState(t) {
        if (!this._validateId(t.canvasId)) return !1;
        const e = this._registrations.get(t.canvasId);
        return !!e && (e.hostState.set(t.channel, t.jsonPayload), this._sendStateEvent(e, t.channel, t.jsonPayload), !0);
    }
    pushStateAll(t) {
        for (const e of this._registrations.values())e.hostState.set(t.channel, t.jsonPayload), this._sendStateEvent(e, t.channel, t.jsonPayload);
    }
    _sendStateEvent(t, e, n) {
        const a = `{"type":"state","channel":${JSON.stringify(e)},"payload":${n}}`;
        for (const e of t.eventClients)try {
            e.readyState === R.WebSocket.OPEN && e.send(a);
        } catch  {
            t.eventClients.delete(e);
        }
    }
    _sendCanvasDataEvent(t, e, n) {
        const a = JSON.stringify({
            type: "canvas-data",
            key: e,
            value: n
        });
        for (const e of t.eventClients)try {
            e.readyState === R.WebSocket.OPEN && e.send(a);
        } catch  {
            t.eventClients.delete(e);
        }
    }
    async destroyCanvas(t) {
        if (!this._validateId(t.canvasId)) return;
        const e = this._registrations.get(t.canvasId);
        e && ("source" === e.kind && await this._flushDataWriteForCanvas(t.canvasId, e), this._registrations.delete(t.canvasId), this._stopFileWatcher(e), this._stopDataFileWatcher(e), this._closeEventClients(e), "source" === e.kind && this._deleteStatusFile(e));
    }
    _startFileWatcher(t) {
        const e = t.fileWatcherSnapshot;
        this._stopFileWatcher(t);
        try {
            const n = this._captureFileWatcherSnapshot(t.path);
            t.fileWatcherSnapshot = n;
            const a = _.watch(t.path, {
                persistent: !1
            }, (e)=>{
                this._registrations.get(t.canvasId) === t && (t.fileWatcherSnapshot = this._captureFileWatcherSnapshot(t.path), this._requestBuild(t, {
                    notifyClients: !0
                }), "rename" === e && (this._startParentDirectoryFileWatcher(t), this._scheduleFileWatcherReattach(t)));
            });
            t.fileWatcher = a;
            const r = this._captureFileWatcherSnapshot(t.path);
            t.fileWatcherSnapshot = r, (n !== r || void 0 !== e && e !== r) && this._registrations.get(t.canvasId) === t && this._requestBuild(t, {
                notifyClients: !0
            }), a.on("error", ()=>{
                t.fileWatcher === a && this._startParentDirectoryFileWatcher(t);
            });
        } catch  {
            this._startParentDirectoryFileWatcher(t);
        }
    }
    _startParentDirectoryFileWatcher(t) {
        const e = t.fileWatcherSnapshot;
        this._stopFileWatcher(t);
        const n = i.basename(t.path);
        try {
            const a = this._captureFileWatcherSnapshot(t.path);
            t.fileWatcherSnapshot = a;
            const r = _.watch(i.dirname(t.path), {
                persistent: !1
            }, (e, a)=>{
                if (this._registrations.get(t.canvasId) === t) {
                    if (null !== a) {
                        if (a.toString() !== n) return;
                        t.fileWatcherSnapshot = this._captureFileWatcherSnapshot(t.path);
                    } else {
                        const e = this._captureFileWatcherSnapshot(t.path);
                        if (e === t.fileWatcherSnapshot) return;
                        t.fileWatcherSnapshot = e;
                    }
                    this._requestBuild(t, {
                        notifyClients: !0
                    }), this._scheduleFileWatcherReattach(t);
                }
            });
            t.fileWatcher = r;
            const s = this._captureFileWatcherSnapshot(t.path);
            t.fileWatcherSnapshot = s, (a !== s || void 0 !== e && e !== s) && this._registrations.get(t.canvasId) === t && this._requestBuild(t, {
                notifyClients: !0
            }), r.on("error", ()=>{
                t.fileWatcher === r && this._stopFileWatcher(t);
            });
        } catch  {}
    }
    _captureFileWatcherSnapshot(t) {
        try {
            const e = _.statSync(t, {
                bigint: !0
            });
            return [
                e.dev,
                e.ino,
                e.size,
                e.mtimeNs
            ].join(":");
        } catch  {
            return "missing";
        }
    }
    _scheduleFileWatcherReattach(t) {
        void 0 !== t.fileWatcherReattachTimer && clearTimeout(t.fileWatcherReattachTimer), t.fileWatcherReattachTimer = setTimeout(()=>{
            t.fileWatcherReattachTimer = void 0, this._registrations.get(t.canvasId) === t && this._startFileWatcher(t);
        }, 100);
    }
    _stopFileWatcher(t) {
        void 0 !== t.fileWatcherReattachTimer && (clearTimeout(t.fileWatcherReattachTimer), t.fileWatcherReattachTimer = void 0), t.fileWatcher && (t.fileWatcher.close(), t.fileWatcher = void 0);
    }
    _startDataFileWatcher(t) {
        this._stopDataFileWatcher(t);
        const e = ft(t.path);
        try {
            t.dataFileWatcher = _.watch(e, {
                persistent: !1
            }, (e)=>{
                this._dataWriteTimers.has(t.canvasId) || this._reloadDataFile(t), "rename" === e && setTimeout(()=>{
                    this._registrations.get(t.canvasId) === t && this._startDataFileWatcher(t);
                }, 100);
            }), t.dataFileWatcher.on("error", ()=>{
                this._stopDataFileWatcher(t);
            });
        } catch  {}
    }
    _stopDataFileWatcher(t) {
        t.dataFileWatcher && (t.dataFileWatcher.close(), t.dataFileWatcher = void 0);
    }
    async _reloadDataFile(t) {
        const e = await this._readDataFile(t.path);
        if (JSON.stringify(t.canvasData) === JSON.stringify(e)) return;
        const n = t.canvasData;
        t.canvasData = e;
        const a = new Set([
            ...Object.keys(n),
            ...Object.keys(e)
        ]);
        for (const r of a)JSON.stringify(n[r]) !== JSON.stringify(e[r]) && this._sendCanvasDataEvent(t, r, e[r]);
    }
    _notifyReload(t) {
        for (const e of t.eventClients)try {
            e.readyState === R.WebSocket.OPEN && e.send('{"type":"reload"}');
        } catch  {
            t.eventClients.delete(e);
        }
    }
    _closeEventClients(t) {
        for (const e of t.eventClients)try {
            e.close();
        } catch  {}
        t.eventClients.clear();
    }
    async _requestBuild(t, e) {
        return t.pendingBuild = !0, t.notifyClientsOnBuild = t.notifyClientsOnBuild || e.notifyClients, t.buildPromise || (t.buildPromise = (async ()=>{
            for(; t.pendingBuild;){
                const e = t.notifyClientsOnBuild;
                t.pendingBuild = !1, t.notifyClientsOnBuild = !1;
                const n = t.buildState?.status, a = Date.now();
                t.buildState = await this._buildCanvas(t);
                const r = Date.now() - a;
                this._logBuildOutcome(t.path, n, t.buildState, r), "source" === t.kind && this._writeStatusFile(t, St(t.buildState)), "compile-error" === t.buildState.status ? this._errorCallback?.({
                    canvasId: t.canvasId,
                    canvasPath: t.path,
                    error: t.buildState.diagnosticsText ?? "Unknown compile error",
                    errorKind: "compile-error"
                }) : "canvas-missing" === t.buildState.status ? this._errorCallback?.({
                    canvasId: t.canvasId,
                    canvasPath: t.path,
                    error: "",
                    errorKind: "canvas-missing"
                }) : "ready" === t.buildState.status && this._errorClearedCallback?.(t.canvasId, t.path), e && this._notifyReload(t);
            }
        })().finally(()=>{
            t.buildPromise = void 0, t.pendingBuild && this._requestBuild(t, {
                notifyClients: !1
            });
        })), t.buildPromise;
    }
    async _ensureBuildState(t) {
        return t.buildState || t.buildPromise ? t.buildPromise && await t.buildPromise : await this._requestBuild(t, {
            notifyClients: !1
        }), t.buildState ?? Ct("Canvas build did not produce any output.");
    }
    _serve404(t, e) {
        const n = `<!DOCTYPE html>\n<html><head><meta charset="utf-8"><title>Canvas not found</title>\n<style>\n*{margin:0;padding:0;box-sizing:border-box}\nbody{font-family:${F};background:#1e1e1e;color:#ccc;display:flex;align-items:center;justify-content:center;min-height:100vh}\n.c{text-align:center;padding:40px}\nh1{font-size:18px;color:#888;margin-bottom:8px}\np{font-size:13px;color:#666}\ncode{background:#2a2a2a;padding:2px 6px;border-radius:4px;font-size:12px}\n</style></head><body><div class="c">\n<h1>Canvas not found</h1>\n<p>${e ? `<code>${e}</code> may have been deleted or expired.` : "Invalid canvas URL."}</p>\n</div></body></html>`;
        t.writeHead(404, {
            "Content-Type": "text/html; charset=utf-8"
        }), t.end(n);
    }
    _isValidOrigin(t) {
        if (!t) return !0;
        try {
            const e = new URL(t).hostname;
            return "localhost" === e || "127.0.0.1" === e;
        } catch  {
            return !1;
        }
    }
    _rejectForbidden(t) {
        t.writeHead(403, {
            "Content-Type": "application/json"
        }), t.end('{"error":"forbidden"}');
    }
    _rejectReadOnly(t) {
        t.writeHead(403, {
            "Content-Type": "application/json"
        }), t.end('{"error":"canvas bundle is read only"}');
    }
    async _handleRequest(t, e) {
        const n = new URL(t.url ?? "/", "http://127.0.0.1"), a = n.pathname;
        if (!this._isValidOrigin(t.headers.origin)) return void this._rejectForbidden(e);
        if (n.searchParams.get("token") !== this._sessionToken) return void this._rejectForbidden(e);
        if (a === ot) return void this._serveRuntimeModule(e);
        const r = a.match(/^\/canvas\/([a-z0-9]+)\/runtime\.js$/);
        if (r) return void await this._serveBundleRuntimeModule(e, r[1]);
        if (/^\/canvas\/([a-z0-9]+)\/(data|version)\.json$/.test(a)) return e.writeHead(404, {
            "Content-Type": "application/json"
        }), void e.end('{"error":"not found"}');
        const s = a.match(/^\/canvas\/([a-z0-9]+)\/state$/);
        if (s) return "GET" === t.method ? void this._handleStateGet(e, s[1]) : "POST" === t.method ? void await this._handleStatePost(e, s[1], t) : (e.writeHead(405, {
            "Content-Type": "application/json"
        }), void e.end('{"error":"method not allowed"}'));
        const i = a.match(/^\/canvas\/([a-z0-9]+)\/report-error$/);
        if (i && "POST" === t.method) return void await this._handleErrorReport(e, i[1], t);
        const o = a.match(/^\/canvas\/([a-z0-9]+)\/action$/);
        if (o && "POST" === t.method) return void await this._handleAction(e, o[1], t);
        const c = a.match(/^\/canvas\/([a-z0-9]+)\/app\.js$/);
        if (c) return void await this._serveCanvasApp(e, c[1]);
        const u = a.match(/^\/canvas\/([a-z0-9]+)\/?$/);
        if (!u) return void this._serve404(e);
        const l = u[1], d = this._registrations.get(l);
        if (!d) return void this._serve404(e, l);
        const h = [
            "default-src 'self'",
            "script-src 'self' 'unsafe-inline'",
            "style-src 'self' 'unsafe-inline'",
            "font-src 'self'",
            "img-src 'self' data: blob:",
            "connect-src 'self'"
        ].join("; ");
        e.writeHead(200, {
            "Content-Type": "text/html; charset=utf-8",
            "Content-Security-Policy": h,
            "Cache-Control": "no-store"
        });
        const p = "bundle" === d.kind ? `/canvas/${l}/runtime.js` : ot;
        e.end(dt(l, this._sessionToken, p));
    }
    _serveRuntimeModule(t) {
        if (!this._runtimeModule) return t.writeHead(503, {
            "Content-Type": "application/json"
        }), void t.end('{"error":"server not started"}');
        t.writeHead(200, {
            "Content-Type": "text/javascript; charset=utf-8",
            "Cache-Control": "public, max-age=31536000, immutable"
        }), t.end(this._runtimeModule);
    }
    async _serveBundleRuntimeModule(t, e) {
        const n = this._registrations.get(e);
        if (!n || "bundle" !== n.kind) return t.writeHead(404, {
            "Content-Type": "application/json"
        }), void t.end('{"error":"not found"}');
        const a = await this._ensureBuildState(n);
        if ("ready" !== a.status || void 0 === a.runtimeModule) return t.writeHead(422, {
            "Content-Type": "application/json"
        }), void t.end(JSON.stringify({
            error: a.diagnosticsText ?? "Canvas bundle is not available."
        }));
        t.writeHead(200, {
            "Content-Type": "text/javascript; charset=utf-8",
            "Cache-Control": "no-store"
        }), t.end(a.runtimeModule);
    }
    async _handleErrorReport(t, e, n) {
        const a = this._registrations.get(e);
        if (!a) return t.writeHead(404, {
            "Content-Type": "application/json"
        }), void t.end('{"error":"not found"}');
        let r;
        try {
            r = await this._readBody(n, ct);
        } catch (e) {
            if (e instanceof vt) return t.writeHead(413, {
                "Content-Type": "application/json"
            }), void t.end('{"error":"request body too large"}');
            throw e;
        }
        let s = "Unknown runtime error";
        try {
            const t = JSON.parse(r);
            null != t.message && (s = String(t.message));
        } catch  {
            const t = r.trim();
            t && (s = t.slice(0, 500));
        }
        "source" === a.kind && this._writeStatusFile(a, {
            status: "runtime-error",
            error: s
        }), this._errorCallback?.({
            canvasId: e,
            canvasPath: a.path,
            error: s,
            errorKind: "runtime-error"
        }), Z.warn(this.logContext, "Canvas runtime error reported", {
            canvasId: e,
            path: a.path,
            errorSummary: s.split("\n")[0]?.slice(0, 200)
        }), t.writeHead(200, {
            "Content-Type": "application/json"
        }), t.end('{"ok":true}');
    }
    async _handleAction(t, e, n) {
        const a = this._registrations.get(e);
        if (!a) return t.writeHead(404, {
            "Content-Type": "application/json"
        }), void t.end('{"error":"not found"}');
        if ("bundle" === a.kind) return void this._rejectReadOnly(t);
        let r, s;
        try {
            r = await this._readBody(n, ct);
        } catch (e) {
            if (e instanceof vt) return t.writeHead(413, {
                "Content-Type": "application/json"
            }), void t.end('{"error":"request body too large"}');
            throw e;
        }
        try {
            s = JSON.parse(r);
        } catch  {
            return t.writeHead(400, {
                "Content-Type": "application/json"
            }), void t.end('{"error":"invalid JSON body"}');
        }
        const i = M(s);
        if (!i) return t.writeHead(400, {
            "Content-Type": "application/json"
        }), void t.end('{"error":"invalid action"}');
        if (this._actionCallback) try {
            this._actionCallback(e, i);
        } catch (t) {
            Z.warn(this.logContext, "Canvas action callback error", {
                canvasId: e,
                actionType: i.type,
                error: t instanceof Error ? t.message : String(t)
            });
        }
        t.writeHead(200, {
            "Content-Type": "application/json"
        }), t.end('{"ok":true}');
    }
    _handleStateGet(t, e) {
        const n = this._registrations.get(e);
        if (!n) return t.writeHead(404, {
            "Content-Type": "application/json"
        }), void t.end('{"error":"not found"}');
        t.writeHead(200, {
            "Content-Type": "application/json",
            "Cache-Control": "no-store"
        }), t.end(JSON.stringify(n.canvasData));
    }
    async _handleStatePost(t, e, n) {
        const a = this._registrations.get(e);
        if (!a) return t.writeHead(404, {
            "Content-Type": "application/json"
        }), void t.end('{"error":"not found"}');
        if ("bundle" === a.kind) return void this._rejectReadOnly(t);
        let r, s;
        try {
            r = await this._readBody(n, ct);
        } catch (e) {
            if (e instanceof vt) return t.writeHead(413, {
                "Content-Type": "application/json"
            }), void t.end('{"error":"request body too large"}');
            throw e;
        }
        try {
            s = JSON.parse(r);
        } catch  {
            return t.writeHead(400, {
                "Content-Type": "application/json"
            }), void t.end('{"error":"invalid JSON body"}');
        }
        if ("string" != typeof s.key) return t.writeHead(400, {
            "Content-Type": "application/json"
        }), void t.end('{"error":"key must be a string"}');
        const i = s.key, o = s.value;
        if (void 0 === o) delete a.canvasData[i];
        else {
            const e = a.canvasData[i];
            a.canvasData[i] = o;
            const n = JSON.stringify(a.canvasData);
            if (Buffer.byteLength(n, "utf-8") > 1048576) return a.canvasData[i] = e, void 0 === e && delete a.canvasData[i], t.writeHead(413, {
                "Content-Type": "application/json"
            }), void t.end('{"error":"canvas state size limit exceeded"}');
        }
        this._scheduleDataFileWrite(a.canvasId, a.path, a.canvasData), this._sendCanvasDataEvent(a, i, o), t.writeHead(200, {
            "Content-Type": "application/json"
        }), t.end('{"ok":true}');
    }
    async _serveCanvasApp(t, e) {
        const n = this._registrations.get(e);
        if (!n) return t.writeHead(404, {
            "Content-Type": "application/json"
        }), void t.end('{"error":"not found"}');
        const a = await this._ensureBuildState(n);
        t.writeHead(200, {
            "Content-Type": "text/javascript; charset=utf-8",
            "Cache-Control": "no-store"
        }), t.end(a.appModule);
    }
    _listen(t) {
        return new Promise((e, n)=>{
            t.listen(0, "127.0.0.1", ()=>{
                const a = t.address();
                a && "object" == typeof a ? e(a.port) : n(new Error("Failed to bind canvas server"));
            }), t.on("error", n);
        });
    }
    async _buildCanvas(t) {
        switch(t.kind){
            case "source":
                return this._buildCanvasSource(t.path);
            case "bundle":
                return this._buildCanvasBundle(t.path);
            default:
                return t.kind;
        }
    }
    async _buildCanvasSource(t) {
        try {
            const e = await _.promises.readFile(t, "utf-8"), n = await this._transformCanvasSource(e, t);
            if (!n.code) return Ct("Canvas build completed without producing output.");
            return {
                appModule: Y(n.code),
                status: "ready"
            };
        } catch (t) {
            if (xt(t)) return {
                appModule: "export default function CanvasMissing() { return null; }\n",
                status: "canvas-missing"
            };
            return Ct(await Pt(t));
        }
    }
    async _buildCanvasBundle(t) {
        try {
            const e = await async function(t, e) {
                const n = "number" == typeof _.constants.O_NOFOLLOW ? _.constants.O_NOFOLLOW : 0, a = await _.promises.open(t, _.constants.O_RDONLY | n), r = [];
                let s = 0;
                try {
                    if (!(await a.stat()).isFile()) throw new Error("Canvas bundle must be a regular file.");
                    for(;;){
                        const t = Buffer.allocUnsafe(Math.min(65536, e + 1 - s)), { bytesRead: n } = await a.read(t, 0, t.length, null);
                        if (0 === n) return Buffer.concat(r, s);
                        if (s += n, s > e) throw new mt;
                        r.push(t.subarray(0, n));
                    }
                } finally{
                    await a.close();
                }
            }(t, ut), n = await function(t, e) {
                return new Promise((n, a)=>{
                    const r = k.createGunzip(), s = [];
                    let i = 0, o = !1;
                    r.on("data", (t)=>{
                        if (!o) {
                            if (i += t.length, i > e) return o = !0, s.length = 0, void r.destroy(new gt);
                            s.push(t);
                        }
                    }), r.once("error", a), r.once("end", ()=>{
                        n(Buffer.concat(s, i));
                    }), r.end(t);
                });
            }(e, lt), a = yt(n.toString("utf-8"));
            return {
                appModule: a.userModule,
                runtimeModule: a.runtimeEsm,
                status: "ready"
            };
        } catch (t) {
            if (xt(t)) return {
                appModule: "export default function CanvasMissing() { return null; }\n",
                status: "canvas-missing"
            };
            return Ct(await Pt(t));
        }
    }
    async _transformCanvasSource(t, e) {
        const n = at;
        try {
            return await this._runCanvasTransform(t, e);
        } catch (a) {
            const r = function(t) {
                const e = t instanceof Error ? t.message : String(t);
                if (et.test(e)) return "nonretryable-startup";
                return e.includes("The service is no longer running") || "The service was stopped" === e || e.includes("write EPIPE") || e.includes("ECONNRESET") ? "retryable-disconnect" : void 0;
            }(a);
            if ("retryable-disconnect" !== r) throw a;
            const s = await async function(t) {
                if (t !== at) return "restart-already-complete";
                if (nt) return await nt, "reused-inflight-restart";
                let e = !1;
                return nt = (async ()=>{
                    if (t !== at) return;
                    const n = await tt();
                    await n.stop(), at += 1, e = !0;
                })().finally(()=>{
                    nt = void 0;
                }), await nt, e ? "performed-restart" : "restart-already-complete";
            }(n);
            "performed-restart" === s && Z.warn(this.logContext, "Canvas build service disconnected; restarting esbuild and retrying", {
                path: e,
                error: a instanceof Error ? a.message : String(a)
            });
            try {
                const n = await this._runCanvasTransform(t, e);
                return "performed-restart" === s && Z.info(this.logContext, "Canvas build recovered after restarting esbuild", {
                    path: e
                }), n;
            } catch (t) {
                throw Z.warn(this.logContext, "Canvas build retry failed after recovery", {
                    path: e,
                    recoveryResult: s,
                    error: t instanceof Error ? t.message : String(t)
                }), t;
            }
        }
    }
    async _runCanvasTransform(t, e) {
        return (await tt()).transform(t, {
            loader: bt(e),
            jsx: "transform",
            jsxFactory: "React.createElement",
            jsxFragment: "React.Fragment",
            format: "esm",
            target: "es2022",
            sourcefile: i.basename(e),
            logLevel: "silent"
        });
    }
    _logBuildOutcome(t, e, n, a) {
        "compile-error" !== n.status ? "canvas-missing" !== n.status ? "compile-error" !== e && "canvas-missing" !== e || Z.info(this.logContext, "Canvas build recovered", {
            path: t,
            buildDurationMs: a
        }) : Z.info(this.logContext, "Canvas source file missing", {
            path: t,
            buildDurationMs: a
        }) : Z.warn(this.logContext, "Canvas build failed", {
            path: t,
            diagnosticsSummary: kt(n.diagnosticsText),
            buildDurationMs: a
        });
    }
    _writeStatusFile(t, e) {
        const n = pt(t.path);
        try {
            const a = JSON.stringify(e);
            if (t.lastStatusJson === a && _.existsSync(n)) return;
            _.writeFileSync(n, a, "utf-8"), t.lastStatusJson = a;
        } catch  {
            Z.warn(this.logContext, "Failed to write canvas status file", {
                path: n
            });
        }
    }
    _deleteStatusFile(t) {
        t.lastStatusJson = void 0;
        const e = pt(t.path);
        try {
            _.unlinkSync(e);
        } catch  {}
    }
    async _readDataFile(t) {
        const e = ft(t);
        try {
            const t = await _.promises.readFile(e, "utf-8"), n = JSON.parse(t);
            if (n && "object" == typeof n && !Array.isArray(n)) return n;
        } catch  {}
        return {};
    }
    _scheduleDataFileWrite(t, e, n) {
        const a = this._dataWriteTimers.get(t);
        void 0 !== a && clearTimeout(a);
        const r = JSON.stringify(n, null, 2);
        this._dataWriteTimers.set(t, setTimeout(()=>{
            this._dataWriteTimers.delete(t);
            const n = ft(e);
            _.promises.writeFile(n, r, "utf-8").catch(()=>{
                Z.warn(this.logContext, "Failed to write canvas data file", {
                    path: n
                });
            });
        }, 300));
    }
    async _flushDataWriteForCanvas(t, e) {
        const n = this._dataWriteTimers.get(t);
        if (void 0 === n) return;
        clearTimeout(n), this._dataWriteTimers.delete(t);
        const a = ft(e.path);
        try {
            await _.promises.writeFile(a, JSON.stringify(e.canvasData, null, 2), "utf-8");
        } catch  {
            Z.warn(this.logContext, "Failed to flush canvas data file", {
                path: a
            });
        }
    }
    async _flushPendingDataWrites() {
        const t = [];
        for (const [e, n] of this._dataWriteTimers){
            clearTimeout(n);
            const a = this._registrations.get(e);
            if (!a || "source" !== a.kind) continue;
            const r = ft(a.path);
            t.push(_.promises.writeFile(r, JSON.stringify(a.canvasData, null, 2), "utf-8").catch(()=>{
                Z.warn(this.logContext, "Failed to flush canvas data file", {
                    path: r
                });
            }));
        }
        this._dataWriteTimers.clear(), await Promise.all(t);
    }
}
function bt(t) {
    switch(i.extname(t).toLowerCase()){
        case ".tsx":
        default:
            return "tsx";
        case ".ts":
            return "ts";
        case ".jsx":
            return "jsx";
        case ".js":
            return "js";
    }
}
function St(t) {
    switch(t.status){
        case "compile-error":
            return {
                status: "compile-error",
                diagnostics: t.diagnosticsText ?? ""
            };
        case "canvas-missing":
            return {
                status: "canvas-missing"
            };
        case "ready":
            return {
                status: "rendered"
            };
        default:
            return t.status;
    }
}
function Ct(t) {
    return {
        appModule: _t(t),
        status: "compile-error",
        diagnosticsText: t
    };
}
function _t(t) {
    return `\nvar diagnostics = ${JSON.stringify(t)};\n\nexport default function CanvasCompileError() {\n  return React.createElement("div", {\n    style: {\n      minHeight: "100vh",\n      padding: "24px 32px",\n      boxSizing: "border-box",\n      background: ${JSON.stringify("#181818")},\n      color: ${JSON.stringify("#E4E4E4EB")},\n      fontFamily: ${JSON.stringify(F)},\n    },\n  },\n    React.createElement("h1", {\n      style: { margin: "0 0 12px 0", fontSize: "20px", fontWeight: "700" },\n    }, "Canvas Compile Error"),\n    React.createElement("p", {\n      style: {\n        margin: "0 0 16px 0",\n        color: ${JSON.stringify("#E4E4E48D")},\n        lineHeight: "1.5",\n      },\n    }, "Cursor could not compile this canvas. Fix the errors below and save again."),\n    React.createElement("pre", {\n      style: {\n        margin: "0",\n        padding: "16px",\n        whiteSpace: "pre-wrap",\n        wordBreak: "break-word",\n        overflowX: "auto",\n        borderRadius: "12px",\n        border: "1px solid #E4E4E426",\n        background: ${JSON.stringify("#1e1e1e")},\n        color: ${JSON.stringify("#f5c2c7")},\n        fontFamily: ${JSON.stringify('ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace')},\n        fontSize: "13px",\n        lineHeight: "1.6",\n      },\n    }, diagnostics)\n  );\n}\n`;
}
function xt(t) {
    return "object" == typeof t && null !== t && "ENOENT" === t.code;
}
async function Pt(t) {
    if (function(t) {
        return "object" == typeof t && null !== t && "errors" in t && Array.isArray(t.errors);
    }(t)) {
        const e = await tt(), n = await e.formatMessages(t.errors, {
            color: !1,
            kind: "error",
            terminalWidth: 100
        });
        if (n.length > 0) return n.join("\n\n");
    }
    return t instanceof Error ? t.message : String(t);
}
function kt(t) {
    const e = t?.trim();
    if (e) return e.split("\n")[0];
}
async function Dt(t) {
    const e = i.join(t, it);
    try {
        return await _.promises.readFile(e, "utf-8");
    } catch  {
        throw new Error(`Missing canvas runtime module "${it}" in ${t}.`);
    }
}
var Tt = n(61933);
const Et = /(?:^|[\\/])\.cursor[\\/]projects[\\/][^\\/]+[\\/]canvases[\\/][^\\/]+\.canvas\.tsx$/i, jt = /^[A-Za-z]:[\\/]/, Ft = /^[a-f0-9]{64}\.canvas\.tsx$/i, Wt = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
function $t(t) {
    return i.isAbsolute(t) || jt.test(t);
}
function Rt(t) {
    return Et.test(t);
}
function Ot(t) {
    return Ft.test(t);
}
function Mt(t, e) {
    return "" !== t && !t.startsWith(`..${i.sep}`) && ".." !== t && !i.isAbsolute(t) && !t.includes(i.sep) && e(t);
}
function Nt({ before: t, after: e }) {
    return t.dev !== e.dev || t.ino !== e.ino || t.size !== e.size || t.mtimeMs !== e.mtimeMs;
}
async function It(t) {
    let e, n;
    try {
        e = await (0, r.lstat)(t), n = await (0, r.realpath)(t);
    } catch (t) {
        return {
            status: "invalid",
            reason: t instanceof Error && "code" in t ? `stat-${String(t.code)}` : "stat-failed"
        };
    }
    return !e.isFile() || e.isSymbolicLink() ? {
        status: "invalid",
        reason: "path-not-regular-file"
    } : {
        stats: e,
        realPath: n
    };
}
async function Jt(t, e) {
    try {
        for (const e of t){
            const t = await (0, r.lstat)(e);
            if (!t.isDirectory() || t.isSymbolicLink()) return;
        }
        return await (0, r.realpath)(e);
    } catch  {
        return;
    }
}
function Ht(t) {
    const e = i.resolve(t.path);
    if (i.basename(e) === N.Rj) for (const n of t.replicaFilesDirs){
        const t = i.resolve(n, Tt.sz), a = i.relative(t, e).split(i.sep);
        if (2 !== a.length || void 0 === a[0] || !Wt.test(a[0]) || a[1] !== N.Rj) continue;
        const r = a[0].toLowerCase(), s = i.join(t, r);
        return {
            filesDir: i.resolve(n),
            canvasId: r,
            canvasDir: s,
            sourcePath: i.join(s, Tt.EN),
            bundlePath: e
        };
    }
}
function At(t) {
    const e = i.dirname(t.canvasDir);
    return Jt([
        t.filesDir,
        e,
        t.canvasDir
    ], e);
}
async function Lt(t) {
    if (!$t(t) || !Rt(t)) return {
        status: "invalid",
        reason: "path-not-managed-canvas"
    };
    const e = await It(t);
    return "status" in e ? e : $t(e.realPath) && Rt(e.realPath) ? {
        status: "valid",
        stats: e.stats,
        realPath: e.realPath
    } : {
        status: "invalid",
        reason: "realpath-not-managed-canvas"
    };
}
async function zt(t) {
    const { path: e, peerAgentStoreFilesDirs: n, replicaAgentStoreFilesDirs: a, cloudCanvasCacheDir: r } = t, s = i.basename(e);
    if (!$t(e) || !B(s) && s !== N.Rj) return {
        status: "invalid",
        reason: "path-not-canvas-bundle"
    };
    const o = await It(e);
    if ("status" in o) return o;
    const c = {
        status: "valid",
        stats: o.stats,
        realPath: o.realPath
    };
    if (void 0 !== r) {
        const t = await Jt([
            r
        ], r);
        if (void 0 !== t && Mt(i.relative(t, o.realPath), B)) return c;
    }
    const u = Ht({
        path: e,
        replicaFilesDirs: a
    });
    if (void 0 !== u) {
        const t = await At(u), e = void 0 === t ? void 0 : i.relative(t, o.realPath).split(i.sep);
        return void 0 === e || 2 !== e.length || e[0]?.toLowerCase() !== u.canvasId || e[1] !== s ? {
            status: "invalid",
            reason: "realpath-not-replica-canvas-store"
        } : c;
    }
    for (const t of n){
        const e = i.join(t, "artifacts"), n = i.join(e, ...I.split("/")), a = await Jt([
            t,
            e,
            n
        ], n);
        if (void 0 !== a && Mt(i.relative(a, o.realPath), B)) return c;
    }
    return {
        status: "invalid",
        reason: "realpath-not-peer-canvas-store"
    };
}
async function Bt(t) {
    const { path: e, cloudCanvasCacheDir: n } = t;
    if (void 0 === n || !$t(e) || !Ot(i.basename(e))) return {
        status: "invalid",
        reason: "path-not-managed-canvas"
    };
    const a = await It(e);
    if ("status" in a) return a;
    const r = await Jt([
        n
    ], n);
    return void 0 !== r && Mt(i.relative(r, a.realPath), Ot) ? {
        status: "valid",
        stats: a.stats,
        realPath: a.realPath
    } : {
        status: "invalid",
        reason: "path-not-managed-canvas"
    };
}
const Ut = (0, W.h)("canvas-server");
class qt {
    constructor(t){
        this._started = !1, this.logContext = t.logContext ?? (0, $.q6)(), this.canvasServer = new wt({
            logContext: this.logContext,
            runtimeDir: t.runtimeDir,
            nodeExecPath: t.nodeExecPath
        });
    }
    onAction(t) {
        this.canvasServer.onAction(t);
    }
    onError(t) {
        this.canvasServer.onError(t);
    }
    onErrorCleared(t) {
        this.canvasServer.onErrorCleared(t);
    }
    async _ensureStarted() {
        this._started || (this._startPromise || (this._startPromise = this.canvasServer.start().then(()=>{
            this._started = !0;
        }).catch((t)=>{
            throw this._startPromise = void 0, t;
        })), await this._startPromise);
    }
    get sessionToken() {
        return this.canvasServer.sessionToken;
    }
    async stop() {
        this._startPromise && !this._started && await this._startPromise.catch(()=>{}), this._started && (await this.canvasServer.stop(), this._started = !1, this._startPromise = void 0, Ut.info(this.logContext, "Canvas server stopped"));
    }
    async registerCanvas(t) {
        await this._ensureStarted();
        const e = await this.canvasServer.registerCanvas(t);
        return Ut.info(this.logContext, "Registered canvas", {
            path: t.path,
            kind: t.kind ?? "source",
            canvasId: e.canvasId
        }), e;
    }
    getCanvasUrl(t) {
        return this.canvasServer.getUrl(t.canvasId, t.preview);
    }
    async destroyCanvas(t) {
        await this.canvasServer.destroyCanvas({
            canvasId: t.canvasId
        });
    }
    getRegisteredCanvasPath(t) {
        return this.canvasServer.getRegisteredCanvasPath(t);
    }
    async getShareArtifact(t) {
        return await this._ensureStarted(), this.canvasServer.getShareArtifact({
            path: t.path
        });
    }
    pushState(t) {
        return this.canvasServer.pushState({
            canvasId: t.canvasId,
            channel: t.channel,
            jsonPayload: t.payload
        });
    }
    pushStateAll(t) {
        this.canvasServer.pushStateAll({
            channel: t.channel,
            jsonPayload: t.payload
        });
    }
    get isRunning() {
        return this._started;
    }
}
var Gt = n(73136);
const Vt = "cursor/canvas", Kt = "grok/canvas", Xt = new Map([
    [
        Vt,
        "cursor"
    ],
    [
        Kt,
        "grok"
    ]
]), Yt = /^\s*(?:import|export)(\s+type)?\s+(?!default\b)((?:[\w\s*,{}]+)\s+from\s+|(?=["']))["']([^"']+)["']/gm;
function Zt(t) {
    const e = [];
    Yt.lastIndex = 0;
    for (const n of t.matchAll(Yt)){
        const t = n[1], a = n[2] ?? "", r = n[3];
        void 0 !== r && e.push({
            specifier: r,
            isTypeOnly: void 0 !== t || te(a)
        });
    }
    return e;
}
function Qt(t) {
    const e = new Set;
    for (const { specifier: n } of t){
        const t = Xt.get(n);
        void 0 !== t && e.add(t);
    }
    return e;
}
function te(t) {
    const e = t.replace(/\s+from\s+$/u, "").trim();
    if (!e.startsWith("{") || !e.endsWith("}")) return !1;
    const n = e.slice(1, -1).split(",").map((t)=>t.trim()).filter((t)=>t.length > 0);
    return n.length > 0 && n.every((t)=>/^type\s+\S/u.test(t));
}
function ee(t) {
    let e = "", n = 0;
    for(; n < t.length;){
        const a = t[n], r = t[n + 1];
        if ("/" !== a || "/" !== r) if ("/" !== a || "*" !== r) e += a ?? "", n += 1;
        else {
            for(n += 2; n < t.length && ("*" !== t[n] || "/" !== t[n + 1]);)"\n" === t[n] && (e += "\n"), n += 1;
            n += 2;
        }
        else for(n += 2; n < t.length && "\n" !== t[n];)n += 1;
    }
    return e;
}
async function ne(t) {
    const e = await Promise.resolve().then(n.t.bind(n, 41503, 19)), a = Y((await e.transform(t.source, {
        loader: ae(t.canvasPath),
        jsx: "transform",
        jsxFactory: "React.createElement",
        jsxFragment: "React.Fragment",
        format: "esm",
        target: "es2022",
        sourcefile: i.basename(t.canvasPath),
        logLevel: "silent"
    })).code);
    var r;
    const s = V(L({
        runtimeEsm: await async function(t, e) {
            const a = function(t) {
                return "grok" === t ? "canvas-runtime-grok.esm.js" : "canvas-runtime.esm.js";
            }(e), r = i.join(t ?? i.join(i.dirname((0, Gt.fileURLToPath)(require("url").pathToFileURL(__filename).href)), "runtime"), a);
            try {
                const t = await Promise.resolve().then(n.t.bind(n, 51455, 19));
                return await t.readFile(r, "utf-8");
            } catch (t) {
                throw new Error(`Missing canvas runtime module "${a}" in ${i.dirname(r)}.`, {
                    cause: t
                });
            }
        }(t.runtimeDir, t.kit ?? (r = t.source, Qt(Zt(ee(r))).has("grok") ? "grok" : "cursor")),
        userModule: a
    }));
    if (!U(s, {})) throw new Error("Canvas share exceeds content limits.");
    return {
        appJs: new Uint8Array(s),
        userModule: a
    };
}
function ae(t) {
    switch(i.extname(t).toLowerCase()){
        case ".tsx":
        default:
            return "tsx";
        case ".ts":
            return "ts";
        case ".jsx":
            return "jsx";
        case ".js":
            return "js";
    }
}
(0, i.resolve)((0, Gt.fileURLToPath)(new URL(n(35669), n.b)), "..");
const re = 2e7, se = [
    30,
    120,
    300
];
function ie(t) {
    const e = t?.code;
    return "EPERM" === e || "EACCES" === e || "EBUSY" === e;
}
const oe = (t)=>new Promise((e)=>setTimeout(e, t));
async function ce(t) {
    const { filePath: e, contents: n, mode: s } = t, i = `${e}.tmp-${(0, a.randomBytes)(6).toString("hex")}`;
    try {
        await (0, r.writeFile)(i, n, {
            mode: s
        });
        try {
            return void await (0, r.rename)(i, e);
        } catch (t) {
            if (!ie(t)) throw t;
            for (const t of se){
                await oe(t);
                try {
                    return void await (0, r.rename)(i, e);
                } catch (t) {
                    if (!ie(t)) throw t;
                }
            }
            await (0, r.writeFile)(e, n, {
                mode: s
            }), await (0, r.unlink)(i).catch(()=>{});
        }
    } catch (t) {
        throw await (0, r.unlink)(i).catch(()=>{}), t;
    }
}
async function ue(t) {
    const e = await async function(t, e) {
        try {
            const n = z((0, k.gunzipSync)(t, {
                maxOutputLength: re
            }).toString("utf8")), a = "bundle-v1" === n.kind ? n.bundle.userModule : n.source;
            return await ce({
                filePath: e,
                contents: a
            }), e;
        } catch  {
            return;
        }
    }(t.bundleGzip, t.sourcePath);
    return void 0 === e ? {
        bundlePath: t.bundlePath
    } : {
        bundlePath: t.bundlePath,
        sourcePath: e
    };
}
async function le(t) {
    const { bundleGzip: e, cacheDir: n } = t;
    if (e.byteLength > ut) throw new Error("Cloud canvas bundle exceeds the compressed size limit");
    if (!(0, N.IR)(e)) throw new Error("Cloud canvas bundle is not gzip data");
    const s = (0, a.createHash)("sha256").update(e).digest("hex"), o = i.join(n, `${s}.canvas.bundle.gz`), c = i.join(n, `${s}.canvas.tsx`);
    try {
        const t = new Date;
        await (0, r.utimes)(o, t, t);
        try {
            return await (0, r.utimes)(c, t, t), {
                bundlePath: o,
                sourcePath: c
            };
        } catch (t) {
            if ("ENOENT" !== t.code) throw t;
            return ue({
                bundleGzip: e,
                bundlePath: o,
                sourcePath: c
            });
        }
    } catch (t) {
        if ("ENOENT" !== t.code) throw t;
    }
    return await (0, r.mkdir)(n, {
        recursive: !0
    }), await ce({
        filePath: o,
        contents: e
    }), ue({
        bundleGzip: e,
        bundlePath: o,
        sourcePath: c
    });
}
const de = 12096e5, he = 268435456;
async function pe(t) {
    let e;
    try {
        e = await (0, r.readdir)(t);
    } catch  {
        return;
    }
    const n = async (t, e)=>{
        try {
            const n = await (0, r.lstat)(t);
            return n.mtimeMs > e ? 0 : (await (0, r.unlink)(t), n.size);
        } catch  {
            return 0;
        }
    }, a = [];
    for (const n of e){
        const e = i.join(t, n);
        try {
            const t = await (0, r.lstat)(e);
            t.isFile() && !t.isSymbolicLink() && a.push({
                path: e,
                mtimeMs: t.mtimeMs,
                size: t.size
            });
        } catch  {}
    }
    const s = Date.now(), o = [];
    for (const t of a)s - t.mtimeMs > de ? await n(t.path, t.mtimeMs) : o.push(t);
    o.sort((t, e)=>t.mtimeMs - e.mtimeMs);
    let c = o.reduce((t, e)=>t + e.size, 0);
    for (const t of o){
        if (c <= he) break;
        c -= await n(t.path, t.mtimeMs);
    }
}
var fe = n(46144);
(0, fe.Pu)("canvas.compile.result", {
    description: "compileCanvasSource outcomes by result",
    labelNames: [
        "result"
    ]
}), (0, fe.v5)("canvas.compile.phase_ms", {
    description: "Wall time for each compileCanvasSource phase (bootstrap, queue_wait, typecheck, bundle, total)",
    labelNames: [
        "phase"
    ]
}), (0, fe.v5)("canvas.compile.source_bytes", {
    description: "UTF-8 byte length of canvas source at compile start"
}), (0, fe.v5)("canvas.compile.bundle_bytes", {
    description: "UTF-8 byte length of the uncompressed canvas share bundle before gzip"
}), (0, fe.v5)("canvas.compile.gzip_bytes", {
    description: "Byte length of the gzipped canvas share bundle (appJs)"
});
new Map;
(0, i.resolve)((0, Gt.fileURLToPath)(new URL(n(35669), n.b)), ".."), new Map;
const ve = /^\s*\/\/\s*cursor-canvas-title:[ \t]*(.*)$/m, me = 120;
const ge = 200;
function ye(t) {
    return (0, a.createHash)("sha256").update(t, "utf8").digest("hex");
}
class we extends Error {
    constructor(){
        super("Canvas source changed after diagnostics; save again to type-check the new source"), this.name = "CanvasDiagnosticsSourceMismatchError";
    }
}
async function be(t) {
    try {
        const e = JSON.parse(await (0, r.readFile)(i.join(t, N._g), "utf8"));
        if (null === e || "object" != typeof e || Array.isArray(e)) return;
        const n = e, a = (t)=>"string" == typeof t ? t : void 0;
        return {
            createdAt: a(n.createdAt),
            title: a(n.title),
            sourceSha256: a(n.sourceSha256)
        };
    } catch  {
        return;
    }
}
async function Se(t) {
    const e = i.join(t.layout.canvasDir, N._g);
    for (const n of [
        t.layout.bundlePath,
        e
    ]){
        const t = await (0, r.lstat)(n).catch(()=>{});
        if (t?.isSymbolicLink()) throw new Error(`Refusing to write replica canvas artifact through a symlink: ${i.basename(n)}`);
    }
    const n = await (0, r.readFile)(t.layout.sourcePath);
    if (void 0 !== t.expectedSourceSha256 && function(t) {
        return (0, a.createHash)("sha256").update(t).digest("hex");
    }(n) !== t.expectedSourceSha256) throw new we;
    const s = n.toString("utf8"), o = await ne({
        source: s,
        canvasPath: t.layout.sourcePath,
        runtimeDir: t.runtimeDir
    }), c = await (0, r.readFile)(t.layout.sourcePath);
    if (!n.equals(c)) throw new we;
    await ce({
        filePath: t.layout.bundlePath,
        contents: Buffer.from(o.appJs),
        mode: 438
    });
    const u = (new Date).toISOString(), l = await be(t.layout.canvasDir), d = function(t) {
        const e = ve.exec(t)?.[1]?.trim();
        if (void 0 !== e && 0 !== e.length) return e.slice(0, me);
    }(s) ?? l?.title, h = {
        version: 1,
        canvasId: t.layout.canvasId,
        ...void 0 !== d ? {
            title: d
        } : {},
        createdAt: l?.createdAt ?? u,
        updatedAt: u,
        sourceSha256: ye(s),
        compiledAt: u
    };
    await ce({
        filePath: e,
        contents: JSON.stringify(h),
        mode: 438
    });
}
async function Ce(t) {
    const e = await (0, r.lstat)(t.layout.bundlePath).catch(()=>{}), n = !0 === e?.isFile() && !e.isSymbolicLink();
    let a;
    try {
        const e = await (0, r.lstat)(t.layout.sourcePath);
        if (!e.isFile() || e.isSymbolicLink()) return n;
        a = await (0, r.readFile)(t.layout.sourcePath, "utf8");
    } catch  {
        return n;
    }
    if (n) {
        const e = await be(t.layout.canvasDir);
        if (e?.sourceSha256 === ye(a)) return !0;
    }
    try {
        return await Se(t), !0;
    } catch  {
        return n;
    }
}
function _e(t) {
    let e;
    const n = i.basename(t.layout.sourcePath), a = (0, _.watch)(t.layout.canvasDir, {
        persistent: !1
    }, (a, r)=>{
        r === n && (clearTimeout(e), e = setTimeout(()=>{
            Se({
                layout: t.layout,
                runtimeDir: t.runtimeDir
            }).catch((e)=>{
                t.onError?.(e);
            });
        }, ge));
    });
    return a.on("error", (e)=>{
        t.onError?.(e);
    }), {
        close () {
            clearTimeout(e), e = void 0, a.close();
        }
    };
}

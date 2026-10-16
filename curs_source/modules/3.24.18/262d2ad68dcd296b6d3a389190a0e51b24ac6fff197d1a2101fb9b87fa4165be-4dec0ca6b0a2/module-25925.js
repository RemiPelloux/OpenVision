"use strict";
require.d(exports, {
    BM: ()=>hr,
    Ls: ()=>or,
    SandboxUnsupportedError: ()=>Fe,
    Fn: ()=>pr,
    Ko: ()=>S,
    CG: ()=>dt,
    G6: ()=>dr,
    $b: ()=>ee,
    T6: ()=>re,
    Po: ()=>te,
    $6: ()=>ar,
    l7: ()=>lr,
    resolveSandboxPolicyForWorkspace: ()=>yt,
    spawnInSandbox: ()=>Ue,
    Xw: ()=>_
});
var n = require("./module-76760.js"), o = require("./module-73024.js"), s = require("./module-68505.js");
const i = "undefined" != typeof process && "win32" === process.platform, a = new s.q({
    max: 512
});
function l(e) {
    try {
        return o.statSync(e);
    } catch  {
        return null;
    }
}
function c(e, t) {
    if (e.match(/[\\/]/)) return e;
    const r = t ? `${e}\0${t.source}\0${t.flags}` : e, o = a.get(r);
    if (void 0 !== o) return o;
    const s = n.join(".", e);
    if (l(s)) return a.set(r, s), s;
    const c = process.env.PATH.split(i ? ";" : ":");
    for (const o of c){
        const s = n.join(o, e);
        if (l(s) && (!t || t.test(s))) return a.set(r, s), s;
    }
    return a.set(r, e), e;
}
function u(e, t, r) {
    if ("win32" !== process.platform) return {
        cmd: c(e),
        args: t
    };
    if (!o.existsSync(e)) {
        const n = [
            ".exe",
            ".bat",
            ".cmd",
            ".ps1"
        ], s = e.toLowerCase();
        if (n.some((e)=>s.endsWith(e))) {
            const n = c(e, r);
            if (o.existsSync(n)) return u(n, t, r);
        }
        for (const s of n){
            const n = c(`${e}${s}`, r);
            if (o.existsSync(n)) return u(n, t, r);
        }
    }
    if (e.match(/\.ps1$/i)) {
        return {
            cmd: n.join(process.env.SYSTEMROOT, "System32", "WindowsPowerShell", "v1.0", "PowerShell.exe"),
            args: [
                "-ExecutionPolicy",
                "Unrestricted",
                "-NoLogo",
                "-NonInteractive",
                "-File",
                e
            ].concat(t)
        };
    }
    if (e.match(/\.(bat|cmd)$/i)) {
        return {
            cmd: n.join(process.env.SYSTEMROOT, "System32", "cmd.exe"),
            args: [
                "/C",
                e,
                ...t
            ]
        };
    }
    if (e.match(/\.(js)$/i)) {
        return {
            cmd: process.execPath,
            args: [
                e
            ].concat(t)
        };
    }
    return {
        cmd: e,
        args: t
    };
}
var d = require("./module-51455.js"), p = require("./module-48161.js"), h = require("./module-98875.js"), m = require("./module-87199.js"), f = require("./module-91434.js"), g = require("./module-31421.js"), y = require("./module-57075.js");
let v;
function w(e) {
    const t = Object.keys(e).filter((e)=>"path" === e.toLowerCase());
    if (0 !== t.length) return "win32" === process.platform ? t.find((e)=>"Path" === e) ?? t[0] : t.find((e)=>"PATH" === e) ?? t[0];
}
function b(e, t) {
    const r = (0, n.dirname)(t);
    if (!r || "." === r) return e;
    const o = (function(e) {
        const t = w(e);
        return void 0 !== t ? e[t] ?? "" : "";
    })(e).split(n.delimiter).filter(Boolean);
    return function(e, t) {
        const r = w(e) ?? ("win32" === process.platform ? "Path" : "PATH"), n = {
            ...e
        };
        for (const e of Object.keys(n))e !== r && "path" === e.toLowerCase() && delete n[e];
        return n[r] = t, n;
    }(e, [
        r,
        ...o.filter((e)=>e !== r)
    ].join(n.delimiter));
}
function _(e) {
    return v && (0, n.isAbsolute)(v) ? {
        ...b(e, v),
        CURSOR_RIPGREP_PATH: v
    } : e;
}
function S() {
    if (!v) throw new Error("Ripgrep path not configured. Call configureRipgrepPath() at startup.");
    return v;
}
var x = require("./module-73015.js");
function k(e) {
    const t = e || process.env, { ELECTRON_RUN_AS_NODE: r, ...n } = t;
    return n;
}
const E = [
    "SSH_AUTH_SOCK",
    "DBUS_SESSION_BUS_ADDRESS",
    "XDG_RUNTIME_DIR",
    "WAYLAND_DISPLAY"
];
function T(e) {
    const t = {
        ...e
    };
    for (const e of E)delete t[e];
    return t;
}
var C = require("./module-77598.js"), I = require("./module-68503.js");
const A = "cursor-sandbox-cache";
let P;
function M() {
    return P || (P = (0, C.randomBytes)(16).toString("hex")), P;
}
function R(e, t) {
    const r = (0, o.lstatSync)(e);
    return r.isDirectory() && r.uid === t && !(18 & r.mode);
}
function O(e) {
    try {
        (0, o.mkdirSync)(e, {
            mode: 448
        });
    } catch (e) {
        if ("EEXIST" !== e.code) throw e;
    }
}
function D(e, { create: t }) {
    const r = process.getuid?.();
    if (void 0 === r) return;
    const o = (0, n.join)((0, p.tmpdir)(), `cursor-sandbox-${(0, I.r_)((0, n.resolve)(e))}`);
    try {
        for (const e of [
            o,
            (0, n.join)(o, "tmp")
        ])if (t && O(e), !R(e, r)) return;
        return o;
    } catch  {
        return;
    }
}
const N = 'builtin eval "${__CURSOR_SANDBOX_TEMP_RESTORE:-}" 2>/dev/null; ';
function F(e = (0, n.join)((0, p.tmpdir)(), A, M())) {
    return {
        NPM_CONFIG_CACHE: (0, n.join)(e, "npm"),
        PNPM_STORE_PATH: (0, n.join)(e, "pnpm-store"),
        GOCACHE: (0, n.join)(e, "go-build"),
        GOMODCACHE: (0, n.join)(e, "go-mod"),
        CARGO_TARGET_DIR: (0, n.join)(e, "cargo-target"),
        PIP_CACHE_DIR: (0, n.join)(e, "pip"),
        UV_CACHE_DIR: (0, n.join)(e, "uv"),
        BUN_INSTALL_CACHE_DIR: (0, n.join)(e, "bun"),
        YARN_CACHE_FOLDER: (0, n.join)(e, "yarn"),
        npm_config_devdir: (0, n.join)(e, "node-gyp"),
        PLAYWRIGHT_BROWSERS_PATH: (0, n.join)(e, "playwright"),
        PUPPETEER_CACHE_DIR: (0, n.join)(e, "puppeteer"),
        TURBO_CACHE_DIR: (0, n.join)(e, "turbo"),
        GRADLE_USER_HOME: (0, n.join)(e, "gradle"),
        CONDA_PKGS_DIRS: (0, n.join)(e, "conda"),
        POETRY_CACHE_DIR: (0, n.join)(e, "poetry"),
        GEM_SPEC_CACHE: (0, n.join)(e, "gem-specs"),
        BUNDLE_PATH: (0, n.join)(e, "bundle"),
        COMPOSER_HOME: (0, n.join)(e, "composer"),
        HOMEBREW_CACHE: (0, n.join)(e, "homebrew"),
        CYPRESS_CACHE_FOLDER: (0, n.join)(e, "cypress"),
        NX_CACHE_DIRECTORY: (0, n.join)(e, "nx"),
        NUGET_PACKAGES: (0, n.join)(e, "nuget"),
        CCACHE_DIR: (0, n.join)(e, "ccache"),
        CP_HOME_DIR: (0, n.join)(e, "cocoapods")
    };
}
var L = require("./module-37949.js"), U = require("./module-33002.js");
require("./module-86613.js");
const B = [
    ".local/bin",
    ".local/share/mise",
    ".local/share/pnpm",
    ".nvm",
    ".volta",
    ".asdf",
    ".pyenv",
    ".rbenv",
    ".rustup",
    ".cargo/bin",
    ".cargo/registry",
    ".cargo/git"
], $ = [
    "bin",
    "sbin",
    "lib",
    "opt",
    "Cellar",
    "share",
    "Frameworks",
    "etc/gitconfig",
    "etc/openssl@3/cert.pem",
    "etc/openssl@3/openssl.cnf",
    "etc/ca-certificates"
], q = (e, t)=>t.flatMap((t)=>$.map((r)=>({
                platform: e,
                scope: "global",
                path: `${t}/${r}`
            }))), j = {
    linux: [
        ".cache/node",
        ".cache/yarn"
    ],
    darwin: [
        ".cache/node",
        "Library/Caches/Yarn"
    ]
}, J = (e)=>[
        ...B,
        ...j[e]
    ].map((t)=>({
            platform: e,
            scope: "home-dir",
            path: t
        })), z = [
    {
        platform: "linux",
        scope: "global",
        path: "/bin"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/sbin"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/usr/bin"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/usr/sbin"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/lib"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/lib64"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/usr/lib"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/usr/lib64"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/usr/libexec"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/usr/share"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/etc/ld.so.cache"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/etc/ld.so.conf"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/etc/ld.so.conf.d"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/etc/ssl/certs"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/etc/ssl/openssl.cnf"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/etc/ssl/cert.pem"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/etc/ssl/ca-bundle.pem"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/etc/ssl/certs/ca-certificates.crt"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/etc/pki/tls/certs"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/etc/pki/tls/openssl.cnf"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/etc/pki/ca-trust/extracted"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/etc/resolv.conf"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/etc/hosts"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/etc/nsswitch.conf"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/etc/gai.conf"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/etc/alternatives"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/etc/mime.types"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/etc/profile"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/etc/bash.bashrc"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/etc/zsh/zshenv"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/etc/zsh/zprofile"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/etc/zsh/zshrc"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/etc/zsh/zlogin"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/etc/gitconfig"
    },
    {
        platform: "linux",
        scope: "home",
        path: ".bashrc"
    },
    {
        platform: "linux",
        scope: "home",
        path: ".bash_profile"
    },
    {
        platform: "linux",
        scope: "home",
        path: ".profile"
    },
    {
        platform: "linux",
        scope: "home",
        path: ".zshenv"
    },
    {
        platform: "linux",
        scope: "home",
        path: ".zprofile"
    },
    {
        platform: "linux",
        scope: "home",
        path: ".zshrc"
    },
    {
        platform: "linux",
        scope: "home",
        path: ".zlogin"
    },
    {
        platform: "linux",
        scope: "home",
        path: ".gitconfig"
    },
    {
        platform: "linux",
        scope: "home",
        path: ".ssh/known_hosts"
    },
    {
        platform: "linux",
        scope: "home",
        path: ".config/mise/config.toml"
    },
    {
        platform: "linux",
        scope: "home-dir",
        path: ".cache/dotslash"
    },
    ...J("linux"),
    ...q("linux", [
        "/usr/local",
        "/home/linuxbrew/.linuxbrew"
    ]),
    {
        platform: "linux",
        scope: "global",
        path: "/usr/local/go"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/nix/store"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/nix/var/nix/profiles"
    },
    {
        platform: "linux",
        scope: "bundled",
        path: "ripgrep"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/bin"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/usr/bin"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/usr/lib"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/usr/libexec"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/usr/share"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/System/Library"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/System/Cryptexes"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/Library/Apple"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/Library/Developer/CommandLineTools"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/Applications/Xcode.app"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/Library/Preferences/com.apple.dt.Xcode.plist"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/private/etc/ssl/cert.pem"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/private/etc/ssl/certs"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/private/etc/ssl/openssl.cnf"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/private/etc/hosts"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/private/etc/resolv.conf"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/private/etc/apache2/mime.types"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/etc/profile"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/etc/bashrc"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/etc/zshenv"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/etc/zprofile"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/etc/zshrc"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/etc/zlogin"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/etc/gitconfig"
    },
    {
        platform: "darwin",
        scope: "home",
        path: ".bashrc"
    },
    {
        platform: "darwin",
        scope: "home",
        path: ".bash_profile"
    },
    {
        platform: "darwin",
        scope: "home",
        path: ".profile"
    },
    {
        platform: "darwin",
        scope: "home",
        path: ".zshenv"
    },
    {
        platform: "darwin",
        scope: "home",
        path: ".zprofile"
    },
    {
        platform: "darwin",
        scope: "home",
        path: ".zshrc"
    },
    {
        platform: "darwin",
        scope: "home",
        path: ".zlogin"
    },
    {
        platform: "darwin",
        scope: "home",
        path: ".gitconfig"
    },
    {
        platform: "darwin",
        scope: "home",
        path: ".ssh/known_hosts"
    },
    {
        platform: "darwin",
        scope: "home",
        path: "Library/Preferences/.GlobalPreferences.plist"
    },
    {
        platform: "darwin",
        scope: "home",
        path: ".config/mise/config.toml"
    },
    {
        platform: "darwin",
        scope: "home-dir",
        path: "Library/Python"
    },
    {
        platform: "darwin",
        scope: "home-dir",
        path: "Library/Caches/dotslash"
    },
    ...J("darwin"),
    ...q("darwin", [
        "/opt/homebrew",
        "/usr/local"
    ]),
    {
        platform: "darwin",
        scope: "global",
        path: "/nix/store"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/nix/var/nix/profiles"
    },
    {
        platform: "darwin",
        scope: "bundled",
        path: "ripgrep"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/dev/null"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/dev/zero"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/dev/random"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/dev/urandom"
    }
];
const H = [
    {
        type: "workspace",
        pattern: "**/.cursor/*.json"
    },
    {
        type: "workspace",
        pattern: "**/.cursor/**/*.json"
    },
    {
        type: "workspace",
        pattern: "**/.cursor/.workspace-trusted"
    },
    {
        type: "workspace",
        pattern: "!**/.cursor/rules"
    },
    {
        type: "workspace",
        pattern: "!**/.cursor/rules/**"
    },
    {
        type: "workspace",
        pattern: "!**/.cursor/commands"
    },
    {
        type: "workspace",
        pattern: "!**/.cursor/commands/**"
    },
    {
        type: "workspace",
        pattern: "!**/.cursor/worktrees"
    },
    {
        type: "workspace",
        pattern: "!**/.cursor/worktrees/**"
    },
    {
        type: "workspace",
        pattern: "!**/.cursor/skills"
    },
    {
        type: "workspace",
        pattern: "!**/.cursor/skills/**"
    },
    {
        type: "workspace",
        pattern: "!**/.cursor/agents"
    },
    {
        type: "workspace",
        pattern: "!**/.cursor/agents/**"
    },
    {
        type: "workspace",
        pattern: "**/.claude/*.json"
    },
    {
        type: "workspace",
        pattern: "**/.claude/**/*.json"
    },
    {
        type: "workspace",
        pattern: "**/.vscode/**"
    },
    {
        type: "workspace",
        pattern: "**/.idea/**"
    },
    {
        type: "workspace",
        pattern: "**/.venv/"
    },
    {
        type: "workspace",
        pattern: "**/venv/"
    },
    {
        type: "workspace",
        pattern: "**/*.code-workspace"
    },
    {
        type: "workspace",
        pattern: "**/.cursorignore"
    },
    {
        type: "workspace",
        pattern: "**/.workspace-trusted"
    },
    {
        type: "workspace",
        pattern: "**/.cursor/**/cli.json"
    },
    {
        type: "workspace",
        pattern: "**/.cursor/**/cli-config.json"
    },
    {
        type: "workspace",
        pattern: "**/.cursor/**/mcp.json"
    },
    {
        type: "workspace",
        pattern: "**/.cursor/**/mcp-approvals.json"
    },
    {
        type: "workspace",
        pattern: "**/.cursor/**/permissions.json"
    },
    {
        type: "git",
        pattern: "**/.git/hooks/**"
    },
    {
        type: "git",
        pattern: "**/.git/config"
    },
    {
        type: "git",
        pattern: "**/.git/config.worktree"
    },
    {
        type: "git",
        pattern: "**/.git/info/attributes"
    },
    {
        type: "git",
        pattern: "**/.git/commondir"
    },
    {
        type: "git",
        pattern: "**/.git/worktrees/*/commondir"
    },
    {
        type: "worktree",
        pattern: ".git"
    },
    {
        type: "absolute",
        pattern: "/etc/ssl/cert.pem"
    },
    {
        type: "absolute",
        pattern: "/etc/ssl/ca-bundle.pem"
    },
    {
        type: "absolute",
        pattern: "/private/etc/ssl/cert.pem"
    },
    {
        type: "absolute",
        pattern: "/etc/ssl/certs/ca-certificates.crt"
    },
    {
        type: "absolute",
        pattern: "/etc/pki/tls/certs/ca-bundle.crt"
    },
    {
        type: "absolute",
        pattern: "/etc/pki/ca-trust/extracted/pem/tls-ca-bundle.pem"
    },
    {
        type: "home",
        pattern: ".cursor/sandbox-policies"
    }
];
H.filter((e)=>"git" === e.type).map((e)=>e.pattern), H.filter((e)=>"workspace" === e.type && e.pattern.startsWith("!") && !e.pattern.endsWith("/**")).map((e)=>e.pattern.replace(/^!(\*\*\/)?/, ""));
function W(e) {
    const t = H.filter((e)=>"workspace" === e.type).map((e)=>e.pattern);
    return {
        [e]: t
    };
}
function G(e) {
    const t = H.filter((e)=>"worktree" === e.type).map((e)=>e.pattern);
    return {
        [e]: t
    };
}
const Y = [];
function V(e) {
    const t = function() {
        if (0 !== Y.length) return {
            version: 1,
            deny: [
                ...Y
            ]
        };
    }(), r = p.homedir(), o = [];
    for (const e of H)switch(e.type){
        case "workspace":
        case "git":
        case "worktree":
            break;
        case "absolute":
            o.push(e.pattern);
            break;
        case "home":
            r.length > 0 && o.push((0, n.join)(r, e.pattern));
            break;
        default:
            {
                const t = e.type;
                throw new Error(`Unknown entry type: ${t}`);
            }
    }
    return {
        type: "workspace_readwrite",
        additionalReadonlyPaths: o,
        writeProtectionMapping: W(e),
        ...t && {
            networkPolicy: t
        },
        networkPolicyStrict: !0
    };
}
new Map;
"win32" === process.platform || process.platform;
const K = g.execFile, Z = new WeakMap;
async function X(e) {
    const t = Z.get(e);
    return t ? (r = t.pid, n = t.startTime, o = t.unrelatedPids, new Promise((e)=>{
        try {
            const t = new Date, s = [
                "show",
                "--style",
                "ndjson",
                "--predicate",
                'process=="kernel" AND eventMessage CONTAINS "Sandbox:" AND eventMessage contains "deny"',
                "--last",
                Math.ceil((t.getTime() - n.getTime()) / 1e3).toString()
            ];
            (0, x.D9)(K, "/usr/bin/log", s, (t, n)=>{
                if (t) return void e([
                    {
                        raw: t.message
                    }
                ]);
                const s = n.split(/\r?\n/).filter((e)=>e.trim().length > 0), i = [];
                for (const e of s)try {
                    const t = JSON.parse(e), n = t?.eventMessage ?? "";
                    if (!n || "string" != typeof n) continue;
                    const s = /^Sandbox:\s+([^(]+)\((\d+)\)\s+([a-zA-Z-]+)\((\d+)\)\s+([^\s]+)\s+(.+)$/.exec(n);
                    if (s) {
                        const [, e, a, l, c, u, d] = s, p = Number(a);
                        i.push({
                            timestamp: t.timestamp,
                            processName: e.trim(),
                            pid: p,
                            decision: l.toLowerCase(),
                            decisionCode: Number(c),
                            operation: u,
                            target: d,
                            duplicateCount: 1,
                            raw: n,
                            relationship: Q(p, r, o)
                        });
                        continue;
                    }
                    const a = /^(\d+) duplicate report for Sandbox: (.+)$/.exec(n);
                    if (a) {
                        const e = Number(a[1]), s = a[2], l = /^([^(]+)\((\d+)\)\s+([a-zA-Z-]+)\((\d+)\)\s+([^\s]+)\s+(.+)$/.exec(s);
                        if (l) {
                            const [, s, a, c, u, d, p] = l, h = Number(a);
                            i.push({
                                timestamp: t.timestamp,
                                processName: s.trim(),
                                pid: h,
                                decision: c.toLowerCase(),
                                decisionCode: Number(u),
                                operation: d,
                                target: p,
                                duplicateCount: e,
                                raw: n,
                                relationship: Q(h, r, o)
                            });
                        } else i.push({
                            timestamp: t.timestamp,
                            duplicateCount: e,
                            raw: n
                        });
                        continue;
                    }
                    i.push({
                        timestamp: t.timestamp,
                        raw: n
                    });
                } catch  {}
                e(i);
            });
        } catch (t) {
            e([
                {
                    raw: String(t)
                }
            ]);
        }
    })) : (console.log("No sandbox metadata found on child process"), []);
    var r, n, o;
}
function Q(e, t, r) {
    return e === t ? "related" : r?.has(e) ? "probably_unrelated" : "maybe_related";
}
function ee(e) {
    return void 0 !== e && ("allow" === e.default || void 0 !== e.allow && e.allow.length > 0);
}
function te() {
    return {
        version: 1,
        default: "deny"
    };
}
function re() {
    return {
        version: 1,
        default: "allow"
    };
}
const ne = "sandbox-policies", oe = "CURSOR_SANDBOX_POLICY_DIR";
const se = 36e5, ie = 9e5;
let ae = 0;
function le() {
    const e = function() {
        const e = process.env[oe]?.trim();
        return e ? n.resolve(e) : n.resolve(n.join(p.homedir(), ".cursor", ne));
    }();
    o.mkdirSync(e, {
        recursive: !0,
        mode: 448
    });
    try {
        o.chmodSync(e, 448);
    } catch  {}
    const t = Date.now();
    return t - ae >= ie && (ae = t, function(e) {
        let t;
        try {
            t = o.readdirSync(e);
        } catch  {
            return;
        }
        const r = Date.now();
        for (const s of t){
            if (!s.startsWith("sandbox-policy-")) continue;
            const t = n.join(e, s);
            try {
                const e = o.statSync(t);
                if (!e.isFile()) continue;
                r - e.mtimeMs > se && o.unlinkSync(t);
            } catch  {}
        }
    }(e)), e;
}
function ce(e) {
    const t = le(), r = C.randomBytes(8).toString("hex"), s = n.join(t, `sandbox-policy-${r}`);
    return o.writeFileSync(s, e, {
        encoding: "utf-8",
        mode: 384
    }), s;
}
const ue = "darwin" === process.platform, de = "linux" === process.platform, pe = (0, L.h)("shell-exec:sandbox");
function he(e) {
    const t = le();
    return e && 0 !== e.length ? e.includes(t) ? e : [
        ...e,
        t
    ] : [
        t
    ];
}
let me, fe = !0;
function ge() {
    return me;
}
function ye(e) {
    "linux" === process.platform && Object.assign(e, _(e));
}
let ve = null, we = null, be = null, _e = null;
function Se(e = process.platform) {
    const t = [], r = new Set, s = {};
    try {
        s.ripgrep = S();
    } catch  {}
    for (const i of function(e = process.platform, t = p.homedir(), r = {}) {
        const s = [];
        for (const i of z){
            if (i.platform !== e) continue;
            if ("global" === i.scope) {
                s.push(i.path);
                continue;
            }
            const a = "bundled" === i.scope ? r[i.path] : (0, n.join)(t, i.path);
            if (a) try {
                let e;
                switch(i.scope){
                    case "home":
                        e = (0, o.lstatSync)(a).isFile();
                        break;
                    case "home-dir":
                        e = (0, o.lstatSync)(a).isDirectory();
                        break;
                    case "bundled":
                        e = (0, o.statSync)(a).isFile();
                }
                e && s.push(a);
            } catch  {}
        }
        return s;
    }(e, p.homedir(), s))r.has(i) || (r.add(i), t.push(i));
    return t;
}
function xe(e) {
    return {
        ...e,
        additionalReadonlyPaths: he(e.additionalReadonlyPaths)
    };
}
function ke(e, t, r) {
    let s;
    e.ignoreMapping && (s = function(e, t, r, n) {
        return Oe(e, t, r, n);
    }(e.ignoreMapping, t, [], []));
    const i = function(e, t, r) {
        const s = e && e.length > 0 ? function(...e) {
            const t = {};
            for (const r of e){
                let e = !1;
                try {
                    e = (0, o.existsSync)(r) && (0, o.statSync)(r).isDirectory();
                } catch  {}
                if (e) t[r] || (t[r] = []), t[r].push("**");
                else {
                    const e = r.lastIndexOf("/"), n = e > 0 ? r.slice(0, e) : "/", o = e >= 0 ? r.slice(e + 1) : r;
                    t[n] || (t[n] = []), o ? t[n].push(o, `${o}/**`) : t[n].push("**");
                }
            }
            return t;
        }(...e) : {}, i = function(e, t = (e)=>o.existsSync(e)) {
            if ((0, m.$f)(e)) return !0;
            let r = n.resolve(e);
            for(;;){
                try {
                    if (t(n.join(r, ".git"))) return !0;
                } catch  {}
                const e = n.dirname(r);
                if (e === r) return !1;
                r = e;
            }
        }(r), a = !de || i ? t ?? {} : {}, l = {
            ...s
        };
        for (const [e, t] of Object.entries(a))l[e] ? l[e] = [
            ...l[e],
            ...t
        ] : l[e] = t;
        if (0 === Object.keys(l).length) return;
        return Oe(l, r, [], []);
    }(e.additionalReadonlyPaths, e.writeProtectionMapping, t), a = (l = e.readBoundary, r?.workspaceReadEnabled ?? function() {
        const e = fe;
        return "function" == typeof e ? e() : e;
    }() ? l ?? "system" : "system");
    var l;
    const c = Se(), u = "workspace" === a ? function(e) {
        const t = [], r = new Set;
        for (const o of e){
            let e = o.trim();
            if (!e) continue;
            "~" === e ? e = p.homedir() : (e.startsWith("~/") || e.startsWith("~\\")) && (e = n.join(p.homedir(), e.slice(2))), e = e.replace(/\/\*\*$/, "").replace(/\/\*$/, ""), e = e.replace(/\\\*\*$/, "").replace(/\\\*$/, "");
            const s = n.basename(e);
            if ((s.includes("*") || s.includes("?")) && (e = n.dirname(e)), !e || "." === e) continue;
            const i = n.normalize(e);
            r.has(i) || (r.add(i), t.push(i));
        }
        return t;
    }(e.additionalReadPaths ?? []) : [], d = [
        ...c
    ], h = new Set(c);
    for (const e of u)h.has(e) || (h.add(e), d.push(e));
    const f = {
        cwd: t,
        readBoundary: a,
        hardcodedReadPaths: d,
        additionalReadonlyPaths: i,
        networkAccess: ee(e.networkPolicy),
        ignoreMapping: s
    };
    return "workspace_readonly" === e.type ? {
        type: e.type,
        ...f
    } : {
        type: e.type,
        ...f,
        additionalReadwritePaths: e.additionalReadwritePaths || [],
        disableTmpWrite: e.disableTmpWrite || !1
    };
}
function Ee(e) {
    if (!("workspace" !== e.readBoundary || "workspace_readwrite" === e.type && e.disableTmpWrite || "win32" === process.platform)) return D(e.cwd, {
        create: !0
    });
}
function Te(e, t, r) {
    const o = function(e) {
        const t = (0, n.join)(e, "tmp");
        return {
            TMPDIR: t,
            TMP: t,
            TEMP: t,
            TMPPREFIX: (0, n.join)(t, "sh-")
        };
    }(e);
    if (r) {
        const r = F();
        for (const [n, s] of Object.entries(F(e)))t[n] === r[n] && (o[n] = s);
    }
    return o;
}
function Ce(e) {
    if (null !== ve) return !!ve;
    try {
        const t = ge();
        return pe.info(e, `[checkBinaryAvailable] Resolved binary path: ${t}`), t ? (ve = o.existsSync(t), ve ? pe.info(e, `[checkBinaryAvailable] Binary path exists: ${ve}`) : (we = new Error(`Sandbox binary not found at ${t}`), pe.info(e, `[checkBinaryAvailable] Binary not found at: ${t}`)), !!ve) : (we = new Error("Sandbox binary path was not configured"), ve = !1, pe.info(e, "[checkBinaryAvailable] Binary path not set, returning false"), !1);
    } catch (t) {
        return we = t, ve = !1, pe.info(e, `[checkBinaryAvailable] Exception checking binary: ${t}`), !1;
    }
}
function Ie(e) {
    if (null !== _e) return _e;
    const t = e ?? (0, U.q6)();
    if (pe.info(t, "[isSandboxHelperSupported] Starting sandbox support check..."), !Ce(t)) {
        const e = we?.message || "Binary check failed";
        return be = e, pe.info(t, `[isSandboxHelperSupported] Binary not available, returning false. Reason: ${e}`), _e = !1, _e;
    }
    if ("win32" === process.platform) return be = "Windows sandbox helper only provides network proxy, not filesystem isolation", pe.info(t, "[isSandboxHelperSupported] win32: returning false (proxy-only, no filesystem sandbox)"), _e = !1, _e;
    if ("darwin" === process.platform) return be = null, pe.info(t, `[isSandboxHelperSupported] ${process.platform} platform, binary available, sandbox supported!`), _e = !0, _e;
    const { binaryPath: r, args: n, env: o } = Pe(t, process.cwd());
    try {
        const e = Date.now();
        (0, x.D9)(g.execFileSync, r, n, {
            stdio: [
                "ignore",
                "ignore",
                "pipe"
            ],
            timeout: Ae,
            env: o,
            shell: !1
        });
        const s = Date.now() - e;
        return be = null, pe.info(t, `[isSandboxHelperSupported] Preflight succeeded in ${s}ms, sandbox supported!`), _e = !0, _e;
    } catch (e) {
        const r = e;
        return Me(t, {
            message: r.message,
            status: r.status,
            stderrText: r.stderr?.toString?.() || ""
        });
    }
}
const Ae = 15e3;
function Pe(e, t) {
    const r = {
        sandbox: ke(xe({
            type: "workspace_readwrite"
        }), t)
    }, n = String(ge());
    pe.info(e, `[sandboxPreflight] Running preflight with binary: ${n}`), pe.info(e, `[sandboxPreflight] CWD: ${t}`);
    const o = {
        ...process.env
    };
    ye(o);
    return {
        binaryPath: n,
        args: [
            "--policy",
            ce(JSON.stringify(r)),
            "--preflight-only",
            "--",
            "/bin/true"
        ],
        env: o
    };
}
function Me(e, t) {
    const { message: r, status: n, stderrText: o } = t;
    return pe.error(e, `[sandboxPreflight] Preflight failed: ${r}`), pe.error(e, `[sandboxPreflight] Exit status: ${n}`), o && pe.error(e, `[sandboxPreflight] Stderr: ${o}`), be = 2 === n ? `Linux preflight failed with exit code 2 (unsupported kernel features). stderr: ${o || "none"}` : `Linux preflight failed: ${r || "unknown error"}. Exit status: ${n}. stderr: ${o || "none"}`, _e = !1, !1;
}
function Re(e, t = [], r = {}, n) {
    const o = (0, U.q6)();
    if (r.env = k(r.env), !Ce(o)) throw new Error(`Sandbox binary not available: ${we?.message || "binary not configured"}. Please build the binary or use 'insecure_none' policy.`);
    if ("insecure_none" === n.type) return (0, x.D9)(g.spawn, e, t, {
        ...r,
        windowsHide: !0
    });
    if ("workspace_readwrite" === n.type || "workspace_readonly" === n.type) return function(e, t, r, n) {
        if ("workspace_readwrite" !== n.type && "workspace_readonly" !== n.type) throw new Error("Expected workspace_readwrite or workspace_readonly policy");
        const o = String(r.cwd ?? process.cwd()), s = n.sandboxWorkspaceRoot ?? o;
        let i = e, a = t;
        if (r.shell) if ("win32" === process.platform) {
            i = "string" == typeof r.shell ? r.shell : "cmd.exe", a = [
                "/c",
                `${e} ${t.join(" ")}`
            ];
        } else {
            i = "string" == typeof r.shell ? r.shell : "/bin/sh", a = [
                "-c",
                `${e} ${t.join(" ")}`
            ];
        }
        const l = ke(xe(n), s), c = Ee(l);
        c && (l.additionalReadwritePaths = [
            ...l.additionalReadwritePaths ?? [],
            c
        ]);
        const u = function(e) {
            if ("insecure_none" === e.type) return;
            const t = e.networkPolicy;
            if (void 0 === t) return;
            if (!ee(t)) return;
            const r = void 0 !== t.deny && t.deny.length > 0;
            return "allow" !== t.default || r ? {
                version: 1,
                ...t
            } : void 0;
        }(n), d = {
            sandbox: l
        };
        void 0 !== u && (d.networkPolicy = u);
        !1 === n.networkPolicyStrict && (d.networkPolicyStrict = !1);
        const p = [
            "--policy",
            ce(JSON.stringify(d)),
            "--",
            i,
            ...a
        ], h = "linux" === process.platform ? T(process.env) : process.env, m = "linux" === process.platform && r.env ? T(r.env) : r.env, f = {
            ...h,
            ...m,
            CURSOR_SANDBOX: "native"
        };
        if (ye(f), c) {
            const e = Te(c, f, n.enableSharedBuildCache);
            Object.assign(f, e), f.__CURSOR_SANDBOX_OWNED_ENV = Object.keys(e).join(" "), f.__CURSOR_SANDBOX_TEMP_RESTORE = Object.entries(e).map(([e, t])=>`builtin export ${e}='${t.replace(/'/g, "'\\''")}'`).join("; ");
        }
        const y = {
            cwd: r.cwd || o,
            env: f,
            stdio: r.stdio || [
                "pipe",
                "pipe",
                "pipe"
            ],
            detached: r.detached,
            windowsHide: !0
        };
        try {
            const e = new Date, t = (0, x.D9)(g.spawn, String(ge()), p, y);
            return ue && t.pid && function(e, t) {
                Z.set(e, t);
            }(t, {
                startTime: e,
                pid: t.pid
            }), t;
        } catch (e) {
            throw new Error(`Failed to spawn sandboxed process: ${e}`);
        }
    }(e, t, r, n);
    throw new Error(`Unsupported sandbox policy: ${String(n)}`);
}
function Oe(e, t, r, n) {
    const o = {};
    for (const [t, r] of Object.entries(e)){
        const e = t.startsWith("file://") ? De(t) : t;
        o[e] = r;
        const n = Ne(e);
        n !== e && (o[n] = r);
    }
    return o;
}
function De(e) {
    let t = e.replace(/^file:\/\//, "");
    return t = decodeURIComponent(t), t.length > 1 && t.endsWith("/") && (t = t.slice(0, -1)), t;
}
function Ne(e, t) {
    if ((0, m.$f)(e)) return e;
    try {
        return (t ?? o.realpathSync)(e);
    } catch  {
        return e;
    }
}
class Fe extends Error {
    reason;
    constructor(e, t){
        super(e), this.reason = t, this.name = "SandboxUnsupportedError";
    }
}
const Le = "darwin" === process.platform;
function Ue(e, t = [], r = {}, n) {
    if (r.env = k(r.env), n.enableSharedBuildCache && (r = {
        ...r,
        env: {
            ...k(process.env),
            ...F(),
            ...r.env
        }
    }), "insecure_none" !== n.type) {
        if (Ie()) return Re(e, t, r, n);
        const o = be;
        throw new Fe(`Sandbox policy '${n.type}' is not supported on this system. Ensure the sandbox helper binary is available, or use 'insecure_none'. Reason: ${o || "unknown"}`, o ?? void 0);
    }
    return function(e, t, r) {
        return (0, x.D9)(g.spawn, e, t, {
            ...r,
            windowsHide: !0
        });
    }(e, t, r);
}
function Be(e) {
    return Le ? X(e) : Promise.resolve([]);
}
var $e;
!function(e) {
    e.Zsh = "zsh", e.ZshLight = "zsh-light", e.Bash = "bash", e.PowerShell = "powershell", e.Naive = "naive";
}($e || ($e = {}));
const qe = {
    TERM: "dumb",
    NO_COLOR: "1",
    FORCE_COLOR: "0",
    _ZO_DOCTOR: "0"
};
function je(e, t, r) {
    const n = e.pid;
    if (void 0 === n) return;
    const o = ()=>{
        try {
            e.kill(r);
        } catch  {}
    };
    switch(t){
        case "process_group":
            try {
                process.kill(-n, r);
            } catch  {
                o();
            }
            return;
        case "windows_tree":
            try {
                (0, g.spawn)("taskkill", [
                    "/pid",
                    String(n),
                    "/t",
                    "/f"
                ], {
                    stdio: "ignore",
                    windowsHide: !0
                }).on("error", o);
            } catch  {
                o();
            }
            return;
        case "single_process":
            return void o();
        default:
            throw new Error(`Unknown process tree kill mode: ${String(t)}`);
    }
}
function Je(e, t = [], r = {}, n, o) {
    const s = Ue(e, t, {
        ...r,
        env: _(r.env ?? process.env)
    }, n);
    if (o) {
        const e = function(e) {
            return "win32" === e.platform ? "windows_tree" : e.detached ? "process_group" : "single_process";
        }({
            platform: process.platform,
            detached: !0 === r.detached
        }), t = ()=>{
            if (!s.pid) return;
            je(s, e, "SIGTERM");
            const t = setTimeout(()=>{
                !s.killed && s.pid && je(s, e, "SIGKILL");
            }, 1e3);
            s.once("exit", ()=>{
                clearTimeout(t);
            });
        };
        o.aborted ? t() : (o.addEventListener("abort", t, {
            once: !0
        }), s.once("exit", ()=>{
            o.removeEventListener("abort", t);
        }));
    }
    return s;
}
function ze(e) {
    e?.on("error", ()=>{});
}
const He = "IFS= builtin read -r -d '' __cursor_command <&5; exec 5<&-; builtin set -- \"$__cursor_command\"; builtin unset __cursor_command; ";
function We() {
    return "win32" !== process.platform;
}
function Ge(e, t) {
    const r = e.stdio.at(5);
    r instanceof y.Writable && (ze(r), r.end(`${t}\0`));
}
function Ye(e, t) {
    e && (ze(e), e.write(t), e.end());
}
function Ve(e, t) {
    e && (ze(e), e.on("data", (e)=>{
        t(e.toString());
    }));
}
function Ke(e) {
    const t = e.indexOf("\n");
    return {
        cwd: e.substring(0, t),
        rest: e.substring(t)
    };
}
function Ze(e, t) {
    const r = `${t}\n`, n = e.indexOf(r);
    return n >= 0 ? e.slice(n + r.length) : e;
}
const Xe = "__CURSOR_BASH_STATE_START__", Qe = "__CURSOR_BASH_STATE_END__", et = '#!/usr/bin/env bash\n\n# Usage:\n#   source dump_bash_state.bash\n#   dump_bash_state OUTPUT_FILE\n# Or execute directly (captures a subshell\'s state):\n#   ./dump_bash_state.bash OUTPUT_FILE\n\ndump_bash_state() {\n  set -euo pipefail\n\n  # Require base64 for safe encoding of emitted sections\n  if ! command -v base64 >/dev/null 2>&1; then\n    echo "Error: base64 command is required" >&2\n    return 1\n  fi\n\n  # Helper to log timing, only if DUMP_BASH_STATE_TIMING is set\n  if [[ -n "${DUMP_BASH_STATE_TIMING:-}" ]]; then\n    # Timing setup\n    if [[ "${BASH_VERSION%%.*}" -ge 5 ]]; then\n      # Use EPOCHREALTIME if available (bash 5+)\n      local start_time=${EPOCHREALTIME}\n      local step_start=${EPOCHREALTIME}\n      _log_timing() {\n        local step_name="$1"\n        local now=${EPOCHREALTIME}\n        local step_duration=$(command awk "BEGIN {printf "%.3f", $now - $step_start}")\n        local total_duration=$(command awk "BEGIN {printf "%.3f", $now - $start_time}")\n        builtin printf "[TIMING] %-20s: %6.3fs (total: %6.3fs)\n" "$step_name" "$step_duration" "$total_duration" >&2\n        step_start=$now\n      }\n    else\n      # Fallback for older bash versions\n      local start_time=$(command date +%s.%N)\n      local step_start=$(command date +%s.%N)\n      _log_timing() {\n        local step_name="$1"\n        local now=$(command date +%s.%N)\n        local step_duration=$(command awk "BEGIN {printf "%.3f", $now - $step_start}")\n        local total_duration=$(command awk "BEGIN {printf "%.3f", $now - $start_time}")\n        builtin printf "[TIMING] %-20s: %6.3fs (total: %6.3fs)\n" "$step_name" "$step_duration" "$total_duration" >&2\n        step_start=$now\n      }\n    fi\n  else\n    _log_timing() { :; }\n  fi\n\n  # Helper to append a line to output file\n  _emit() {\n    builtin printf \'%s\n\' "$1"\n  }\n\n  # Helper to safely encode and emit unsafe values\n  _emit_encoded() {\n    local content="$1"\n    local var_name="$2"\n    if [[ -n "$content" ]]; then\n      # Builtin printf, not a here-document: no argument length limit, and no temp file\n      builtin printf \'cursor_snap_%s=$(builtin printf %%s \'"\'"\'%s\'"\'"\' | command base64 -d)\n\' "$var_name" "$(command base64 <<<"$content" | command tr -d \'\n\')"\n      builtin printf \'eval "$cursor_snap_%s"\n\' "$var_name"\n    fi\n  }\n\n  # Start fresh\n  _log_timing "file_init"\n\n  # Emit start marker at the very beginning of the output\n  _emit "__CURSOR_BASH_STATE_START__"\n\n  # Working directory\n  _emit "$PWD"\n  _log_timing "working_dir"\n\n  # Drop ELECTRON_RUN_AS_NODE by exact name so one command exporting it can\'t\n  # bake it into the snapshot that every later command re-evals (IDE-2911:\n  # Cypress boots as plain Node until a new chat). Exact unset rather than the\n  # line-based grep below, which would also eat vars whose name or multiline\n  # value merely contains the token. The shell exits right after the dump.\n  builtin unset ELECTRON_RUN_AS_NODE 2>/dev/null || true\n\n  # Environment variables (export statements)\n  # Filter out: proxy settings plus request/session-scoped vars that must not\n  # leak across shell executions.\n  local env_vars\n  env_vars=$(builtin export -p 2>/dev/null | command grep -viE \'_proxy=|CURSOR_SANDBOX|SUDO_ASKPASS|CURSOR_ASKPASS|CURSOR_CONVERSATION_ID|CURSOR_REQUEST_ID|CURSOR_AGENT_STORE\' || true)\n  if [[ -n "${__CURSOR_SANDBOX_OWNED_ENV:-}" ]]; then\n    env_vars=$(builtin printf \'%s\n\' "$env_vars" | command grep -vE "^(export|declare|typeset)( -[a-zA-Z]+)* (${__CURSOR_SANDBOX_OWNED_ENV// /|})=" || true)\n  fi\n  _emit_encoded "$env_vars" "ENV_VARS_B64"\n  _log_timing "environment"\n\n  # POSIX shell options (replayable as set +/-o lines). Exclude the errexit/nounset/\n  # pipefail this function force-enables above, so they are not baked into the restored\n  # snapshot and leaked onto every subsequent command (a stray pipefail makes a\n  # successful \'cmd | head\' report exit 141).\n  local posix_opts\n  posix_opts=$(builtin shopt -po 2>/dev/null | command grep -vE \'^set [-+]o (errexit|nounset|pipefail)$\' || true)\n  _emit_encoded "$posix_opts" "POSIX_OPTS_B64"\n  _log_timing "posix_options"\n\n  # Bash shopt options (replayable as shopt -s/-u lines)\n  local bash_opts\n  bash_opts=$(builtin shopt -p 2>/dev/null || true)\n  _emit_encoded "$bash_opts" "BASH_OPTS_B64"\n  _log_timing "bash_options"\n\n  # Functions: capture all functions\n  local all_functions\n  all_functions=$(builtin declare -f 2>/dev/null || true)\n  _emit_encoded "$all_functions" "FUNCTIONS_B64"\n  _log_timing "functions"\n\n  # Aliases\n  local aliases\n  aliases=$(builtin alias -p 2>/dev/null || true)\n  _emit_encoded "$aliases" "ALIASES_B64"\n  _log_timing "aliases"\n\n  # Done\n  _emit "# end of bash state dump"\n  _emit "__CURSOR_BASH_STATE_END__"\n  _log_timing "finalize"\n}\n', tt = {
    flushIntervalMs: 50,
    maxBufferedBytes: 262144
};
class rt {
    writable;
    pending = [];
    pendingBytes = 0;
    flushTimeout;
    flushPromise;
    flushIntervalMs;
    maxBufferedBytes;
    constructor(e, t){
        this.writable = e, this.flushIntervalMs = t?.flushIntervalMs ?? tt.flushIntervalMs, this.maxBufferedBytes = t?.maxBufferedBytes ?? tt.maxBufferedBytes;
    }
    async push(e, t) {
        0 !== t.length && (this.pending.push({
            type: e,
            data: t
        }), this.pendingBytes += t.length, this.pendingBytes >= this.maxBufferedBytes ? await this.flush() : this.scheduleFlush());
    }
    async flush() {
        if (this.clearFlushTimeout(), this.flushPromise) return await this.flushPromise, void (this.pendingBytes > 0 && await this.flush());
        if (0 === this.pendingBytes) return;
        const e = this.pending;
        this.pending = [], this.pendingBytes = 0, this.flushPromise = this.writeBufferedOutput(e);
        try {
            await this.flushPromise;
        } finally{
            this.flushPromise = void 0;
        }
    }
    async close() {
        await this.flush();
    }
    scheduleFlush() {
        void 0 === this.flushTimeout && (this.flushTimeout = setTimeout(()=>{
            this.flushTimeout = void 0, this.flush();
        }, this.flushIntervalMs));
    }
    clearFlushTimeout() {
        void 0 !== this.flushTimeout && (clearTimeout(this.flushTimeout), this.flushTimeout = void 0);
    }
    async writeBufferedOutput(e) {
        for (const t of function(e) {
            if (0 === e.length) return [];
            const t = [];
            let r = e[0].type, n = [
                e[0].data
            ];
            for(let o = 1; o < e.length; o++){
                const s = e[o];
                s.type !== r ? (t.push({
                    type: r,
                    data: Buffer.concat(n)
                }), r = s.type, n = [
                    s.data
                ]) : n.push(s.data);
            }
            return t.push({
                type: r,
                data: Buffer.concat(n)
            }), t;
        }(e))try {
            await this.writable.write(t);
        } catch  {}
    }
}
function nt(e) {
    const t = new m.Zv;
    if (!e.bufferOutputEvents) {
        const r = (t, r)=>{
            e.writable.write({
                type: t,
                data: r
            }).catch(()=>{});
        };
        return e.stdout?.on("data", (e)=>{
            const n = t.note(e);
            void 0 !== n && n.length > 0 && r("stdout", n);
        }), e.stderr?.on("data", (e)=>{
            r("stderr", e);
        }), {
            get stdoutBytes () {
                return t.bytes;
            },
            get stdoutPrefix () {
                return t.stdoutPrefix;
            },
            async waitForOutput () {},
            async releaseHeldStdout () {
                const e = t.takeHeld();
                void 0 !== e && e.length > 0 && r("stdout", e);
            },
            dropHeldStdout () {
                t.takeHeld();
            },
            async flush () {
                await this.releaseHeldStdout();
            }
        };
    }
    const r = new rt(e.writable, e.outputLimiterOptions);
    let n;
    const o = Promise.all([
        ot(e.stdout, r, t),
        st(e.stderr, "stderr", r)
    ]).then(()=>{}).catch((e)=>{
        n = e;
    });
    return {
        get stdoutBytes () {
            return t.bytes;
        },
        get stdoutPrefix () {
            return t.stdoutPrefix;
        },
        async waitForOutput () {
            if (await o, void 0 !== n) throw (e = n) instanceof Error ? e : new Error(String(e));
            var e;
        },
        async releaseHeldStdout () {
            const e = t.takeHeld();
            void 0 !== e && e.length > 0 && await r.push("stdout", e);
        },
        dropHeldStdout () {
            t.takeHeld();
        },
        async flush () {
            await this.releaseHeldStdout(), await r.flush();
        }
    };
}
async function ot(e, t, r) {
    if (e) for await (const n of e){
        const e = r.note(n);
        void 0 !== e && e.length > 0 && await t.push("stdout", e);
    }
}
async function st(e, t, r, n) {
    if (e) for await (const o of e)n?.(o), await r.push(t, o);
}
var it = require("./module-97357.js"), at = require("./module-10091.js");
class lt extends Error {
    constructor(e, t, r, n, o, s){
        super(e), this.name = "SpawnError", this.exitCode = t, this.code = t, this.stdout = o, this.stderr = s, this.command = r, this.args = n, Error.captureStackTrace && Error.captureStackTrace(this, lt);
    }
}
function ct(e, t, r) {
    r = r ?? {};
    let n = new it.Observable((n)=>{
        const { encoding: o, timeout: s, ...i } = r, { cmd: a, args: l } = u(e, t), c = i.stdin;
        c && (delete i.stdin, i.stdio ??= [
            "pipe",
            "pipe",
            "pipe"
        ]), i.stdio ??= [
            "ignore",
            "pipe",
            "pipe"
        ];
        const d = (0, g.spawn)(a, l, i);
        r.processInfo && void 0 !== d.pid && (r.processInfo.pid = d.pid);
        let p = null;
        s && s > 0 && (p = setTimeout(()=>{
            d.killed || d.kill();
            const e = new lt(`Process timed out after ${s}ms`, -1, a, l);
            n.error(e);
        }, s));
        const h = (t)=>(s)=>{
                if (s.length < 1) return;
                r.echoOutput && ("stdout" === t ? process.stdout : process.stderr).write(s);
                let i = "<< String sent back was too long >>";
                try {
                    i = "string" == typeof s ? s.toString() : s.toString(o || "utf8");
                } catch  {
                    i = `<< Lost chunk of process output for ${e} - length was ${s.length}>>`;
                }
                n.next({
                    source: t,
                    text: i
                });
            }, m = new it.Subscription;
        if (c) if (d.stdin) {
            const e = d.stdin;
            m.add(c.subscribe({
                next: (t)=>e.write(t),
                error: n.error.bind(n),
                complete: ()=>e.end()
            }));
        } else n.error(new Error("opts.stdio conflicts with provided spawn opts.stdin observable, 'pipe' is required"));
        let f = null, y = null, v = !1;
        return d.stdout ? (y = new it.AsyncSubject, d.stdout.on("data", h("stdout")), d.stdout.on("close", ()=>{
            y.next(!0), y.complete();
        })) : y = (0, it.of)(!0), d.stderr ? (f = new it.AsyncSubject, d.stderr.on("data", h("stderr")), d.stderr.on("close", ()=>{
            f.next(!0), f.complete();
        })) : f = (0, it.of)(!0), d.on("error", (e)=>{
            v = !0, p && clearTimeout(p), n.error(e);
        }), d.on("close", (e)=>{
            v = !0, p && clearTimeout(p);
            const t = (0, it.merge)(y, f).pipe((0, at.TS)((e)=>!0, !0));
            0 === e ? t.subscribe(()=>n.complete()) : t.subscribe(()=>{
                const t = new lt(`Process failed with exit code: ${e}`, e, a, l);
                n.error(t);
            });
        }), m.add(new it.Subscription(()=>{
            v || (p && clearTimeout(p), d.kill());
        })), m;
    });
    if (r.retries && r.retries > 0) {
        const e = r.retries, t = r.retryDelay ?? 1e3;
        n = n.pipe((0, at.L5)({
            count: e,
            delay: (e, r)=>{
                if (e instanceof lt && 0 !== e.exitCode) return (0, it.timer)(t);
                throw e;
            }
        }));
    }
    return r.split ? n : n.pipe((0, at.Tj)((e)=>e?.text));
}
function ut(e, t, r) {
    return r?.split ? (n = ct(e, t, {
        ...r ?? {},
        split: !0
    }), new Promise((e, t)=>{
        let r = "", o = "";
        n.subscribe({
            next: (e)=>{
                "stdout" === e.source ? r += e.text : o += e.text;
            },
            error: (e)=>{
                if (e instanceof lt) {
                    const n = new lt(`${r}\n${e.message}`, e.exitCode, e.command, e.args, r, o);
                    t(n);
                } else {
                    const n = new Error(`${r}\n${e instanceof Error ? e.message : String(e)}`);
                    t(n);
                }
            },
            complete: ()=>e([
                    r,
                    o
                ])
        });
    })) : function(e) {
        return new Promise((t, r)=>{
            let n = "";
            e.subscribe({
                next: (e)=>{
                    n += e;
                },
                error: (e)=>{
                    if (e instanceof lt) {
                        const t = new lt(`${n}\n${e.message}`, e.exitCode, e.command, e.args, n, e.stderr);
                        r(t);
                    } else {
                        const t = new Error(`${n}\n${e instanceof Error ? e.message : String(e)}`);
                        r(t);
                    }
                },
                complete: ()=>t(n)
            });
        });
    }(ct(e, t, {
        ...r ?? {},
        split: !1
    }));
    var n;
}
function dt(e) {
    return e.teamAdmin?.type ?? e.perRepo?.type ?? e.perUser?.type ?? "insecure_none";
}
function pt(...e) {
    return e.some((e)=>!0 === e);
}
function ht(...e) {
    const t = new Set;
    for (const r of e)if (r) for (const e of r)t.add(mt(e));
    return [
        ...t
    ];
}
function mt(e) {
    const t = e.replace(/\\/g, "/").replace(/\/+$/, "");
    return "" === t ? "/" : /^[a-zA-Z]:$/.test(t) ? `${t}/` : t;
}
function ft(...e) {
    const t = e.filter((e)=>void 0 !== e);
    if (0 === t.length) return;
    const r = {};
    for (const e of t)for (const [t, n] of Object.entries(e)){
        const e = r[t];
        if (e) {
            const o = new Set(e);
            for (const e of n)o.has(e) && o.delete(e), o.add(e);
            r[t] = [
                ...o
            ];
        } else r[t] = [
            ...n
        ];
    }
    return 0 !== Object.keys(r).length ? r : void 0;
}
function gt(...e) {
    for(let t = e.length - 1; t >= 0; t--)if (void 0 !== e[t]) return e[t];
}
async function yt(e, t, r = {}) {
    if (!t) return {
        policy: {
            type: "insecure_none"
        }
    };
    if ((0, m.$f)(e)) return vt(t, {
        workspaceDir: e
    });
    const o = r.stat ?? d.stat, s = r.spawnPromise ?? ut, i = await o((0, n.join)(e, ".git")).then((e)=>e, ()=>null), a = i?.isFile() ?? !1, l = null !== i;
    if ("workspace_readwrite" === dt(t)) {
        let r = e;
        if (a) {
            const o = await s("git", [
                "rev-parse",
                "--git-common-dir"
            ], {
                cwd: e
            }).then((t)=>(0, n.resolve)(e, t.trim()), ()=>null);
            if (o) {
                r = (0, n.dirname)(o);
                const s = t.perRepo, i = s?.ignoreMapping;
                t = {
                    ...t,
                    perRepo: {
                        ...s,
                        type: "workspace_readwrite",
                        additionalReadwritePaths: [
                            ...s?.additionalReadwritePaths ?? [],
                            o
                        ],
                        ignoreMapping: i,
                        writeProtectionMapping: ft(s?.writeProtectionMapping, G(e))
                    }
                };
            }
        }
        if (l) return vt(t, {
            workspaceDir: e,
            gitDirParent: r
        });
    }
    return vt(t, {
        workspaceDir: e
    });
}
function vt(e, t) {
    const r = function(e) {
        const { perUser: t, perRepo: r, teamAdmin: n } = e, o = [
            t,
            r,
            n
        ].filter((e)=>void 0 !== e);
        if (0 === o.length) return;
        const s = o[0].type;
        for (const e of o)if (e.type !== s) throw new Error(`Cannot merge policies of different types: found "${s}" and "${e.type}". All policies must be of the same type (all workspace_readwrite, all workspace_readonly, or all insecure_none).`);
        return s;
    }(e);
    if (void 0 === r) return _t(e, t);
    switch(r){
        case "workspace_readwrite":
            return _t(e, t);
        case "workspace_readonly":
            return function(e, t) {
                const r = t?.debug, n = wt(e, t), o = {
                    policy: bt({
                        type: "workspace_readonly",
                        disableTmpWrite: n.disableTmpWrite,
                        networkPolicyStrict: n.networkPolicyStrict,
                        readBoundary: n.readBoundary,
                        additionalReadPaths: n.additionalReadPaths,
                        additionalReadonlyPaths: n.additionalReadonlyPaths,
                        networkPolicy: n.networkPolicy,
                        debugOutputDir: n.debugOutputDir,
                        captureDenies: n.captureDenies,
                        enableSharedBuildCache: n.enableSharedBuildCache,
                        ignoreMapping: n.ignoreMapping,
                        writeProtectionMapping: n.writeProtectionMapping
                    }, "workspace_readonly")
                };
                r && (o.debug = {
                    fieldSources: n.fieldSources
                });
                return o;
            }(e, t);
        case "insecure_none":
            return function(e, t) {
                const { perUser: r, perRepo: n, teamAdmin: o } = e, s = t?.debug, i = {}, a = pt(r?.allowlistEscalated, n?.allowlistEscalated, o?.allowlistEscalated), l = gt(r?.debugOutputDir, n?.debugOutputDir, o?.debugOutputDir), c = pt(r?.captureDenies, n?.captureDenies, o?.captureDenies), u = gt(r?.enableSharedBuildCache, n?.enableSharedBuildCache, o?.enableSharedBuildCache), d = {
                    type: "insecure_none",
                    allowlistEscalated: a || void 0,
                    debugOutputDir: l,
                    captureDenies: c || void 0,
                    enableSharedBuildCache: u
                }, p = Object.fromEntries(Object.entries(d).filter(([e, t])=>void 0 !== t));
                p.type = "insecure_none";
                const h = {
                    policy: p
                };
                s && (h.debug = {
                    fieldSources: i
                });
                return h;
            }(e, t);
        default:
            throw new Error(`Unknown policy type: ${r}`);
    }
}
function wt(e, t) {
    const r = t?.debug, { perUser: n, perRepo: o, teamAdmin: s } = e, i = t?.workspaceDir ?? process.cwd(), a = V(i), l = {}, c = [
        n,
        o,
        s
    ], u = [
        "perUser",
        "perRepo",
        "teamAdmin",
        "hardcoded"
    ], d = (e, t)=>{
        r && (l[e] = u[t] ?? "unknown");
    }, p = pt(n?.disableTmpWrite, o?.disableTmpWrite, s?.disableTmpWrite);
    for(let e = c.length - 1; e >= 0; e--)if (!0 === c[e]?.disableTmpWrite) {
        d("disableTmpWrite", e);
        break;
    }
    const h = pt(n?.networkPolicyStrict, o?.networkPolicyStrict, s?.networkPolicyStrict, a.networkPolicyStrict);
    a.networkPolicyStrict && d("networkPolicyStrict", 3);
    const m = gt(n?.readBoundary, o?.readBoundary, s?.readBoundary) ?? "system", f = gt(n?.additionalReadPaths, o?.additionalReadPaths), g = !1 === s?.allowUserOverrideReadPaths ? ht(s.additionalReadPaths) : ht(f, s?.additionalReadPaths), y = "workspace" === m ? g : void 0, v = ht(n?.additionalReadonlyPaths, o?.additionalReadonlyPaths, s?.additionalReadonlyPaths, a.additionalReadonlyPaths), w = v.length > 0 ? v : void 0;
    let b = function(...e) {
        const t = e.filter((e)=>void 0 !== e);
        if (0 === t.length) return;
        let r;
        for (const e of t){
            if ("deny" === e.default) {
                r = "deny";
                break;
            }
            "allow" === e.default && void 0 === r && (r = "allow");
        }
        const n = new Set;
        for (const e of t)if (e.deny) for (const t of e.deny)n.add(t);
        const o = new Set;
        for (const e of t)if (e.allow) for (const t of e.allow)o.add(t);
        const s = o.size > 0 ? [
            ...o
        ] : void 0;
        let i;
        for(let e = t.length - 1; e >= 0; e--)if (void 0 !== t[e].logging) {
            i = t[e].logging;
            break;
        }
        const a = {
            version: 1
        };
        return void 0 !== r && (a.default = r), void 0 !== s && (a.allow = s), n.size > 0 && (a.deny = [
            ...n
        ]), void 0 !== i && (a.logging = i), void 0 !== a.default || void 0 !== a.allow && 0 !== a.allow.length || void 0 !== a.deny && 0 !== a.deny.length || void 0 !== a.logging ? a : void 0;
    }(n?.networkPolicy, o?.networkPolicy, s?.networkPolicy, a.networkPolicy);
    const _ = s?.networkPolicy?.allow;
    void 0 !== _ && _.length > 0 && void 0 !== b && (b = {
        ...b,
        allow: [
            ..._
        ]
    }, r && (l["networkPolicy.allow"] = "teamAdmin (replace)"));
    const S = void 0 !== (x = b) ? x : {
        version: 1,
        default: "deny"
    };
    var x;
    const k = gt(n?.debugOutputDir, o?.debugOutputDir, s?.debugOutputDir), E = pt(n?.captureDenies, o?.captureDenies, s?.captureDenies), T = gt(n?.enableSharedBuildCache, o?.enableSharedBuildCache, s?.enableSharedBuildCache), C = ft(n?.ignoreMapping, o?.ignoreMapping, s?.ignoreMapping, a.ignoreMapping), I = function(e) {
        const t = H.filter((e)=>"git" === e.type).map((e)=>e.pattern);
        return {
            [e]: t
        };
    }(t?.gitDirParent ?? i);
    return {
        disableTmpWrite: p || void 0,
        networkPolicyStrict: h,
        readBoundary: m,
        additionalReadPaths: y,
        additionalReadonlyPaths: w,
        networkPolicy: S,
        debugOutputDir: k,
        captureDenies: E || void 0,
        enableSharedBuildCache: T,
        ignoreMapping: C,
        writeProtectionMapping: ft(n?.writeProtectionMapping, o?.writeProtectionMapping, s?.writeProtectionMapping, a.writeProtectionMapping, I),
        fieldSources: l
    };
}
function bt(e, t) {
    const r = Object.fromEntries(Object.entries(e).filter(([e, t])=>void 0 !== t));
    return r.type = t, r;
}
function _t(e, t) {
    const { perUser: r, perRepo: n, teamAdmin: o } = e, s = t?.debug, i = wt(e, t), a = ht(r?.additionalReadwritePaths, n?.additionalReadwritePaths, o?.additionalReadwritePaths), l = {
        policy: bt({
            type: "workspace_readwrite",
            disableTmpWrite: i.disableTmpWrite,
            networkPolicyStrict: i.networkPolicyStrict,
            readBoundary: i.readBoundary,
            additionalReadPaths: i.additionalReadPaths,
            additionalReadwritePaths: a.length > 0 ? a : void 0,
            additionalReadonlyPaths: i.additionalReadonlyPaths,
            networkPolicy: i.networkPolicy,
            debugOutputDir: i.debugOutputDir,
            captureDenies: i.captureDenies,
            enableSharedBuildCache: i.enableSharedBuildCache,
            ignoreMapping: i.ignoreMapping,
            writeProtectionMapping: i.writeProtectionMapping
        }, "workspace_readwrite")
    };
    return s && (l.debug = {
        fieldSources: i.fieldSources
    }), l;
}
const St = "win32" === process.platform;
function xt(e) {
    return !St && !!e?.SUDO_ASKPASS;
}
function kt(e) {
    return xt(e) ? "alias sudo='sudo -A'; " : "";
}
function Et(e) {
    const t = [];
    let r = 0;
    for(; r < e.length;){
        const n = 0 === r || "&&" === e.slice(Math.max(0, r - 2), r) || "||" === e.slice(Math.max(0, r - 2), r) || "|" === e[r - 1] || ";" === e[r - 1], o = Math.max(0, r - 10), s = e.slice(o, r), i = /(?:&&|\|\||[|;])\s*$/.test(s) || 0 === r && /^\s*$/.test(s);
        if ((n || i) && "sudo" === e.slice(r, r + 4)) {
            const n = r + 4;
            if (n >= e.length || /\s/.test(e[n])) {
                let o = n;
                for(; o < e.length && /\s/.test(e[o]);)o++;
                let s = !1;
                if (o < e.length && "-" === e[o]) {
                    let t = o + 1;
                    for(; t < e.length && /[^\s]/.test(e[t]);)t++;
                    const r = e.slice(o, t);
                    s = /^-[a-zA-Z]*A[a-zA-Z]*$/.test(r);
                }
                s ? (t.push("sudo"), r = n) : (t.push("sudo -A"), r = n);
                continue;
            }
        }
        t.push(e[r]), r++;
    }
    return t.join("");
}
var Tt = function(e, t, r) {
    if (null != t) {
        if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
        var n, o;
        if (r) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            n = t[Symbol.asyncDispose];
        }
        if (void 0 === n) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            n = t[Symbol.dispose], r && (o = n);
        }
        if ("function" != typeof n) throw new TypeError("Object not disposable.");
        o && (n = function() {
            try {
                o.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        }), e.stack.push({
            value: t,
            dispose: n,
            async: r
        });
    } else r && e.stack.push({
        async: !0
    });
    return t;
}, Ct = function(e) {
    return function(t) {
        function r(r) {
            t.error = t.hasError ? new e(r, t.error, "An error was suppressed during disposal.") : r, t.hasError = !0;
        }
        var n, o = 0;
        return function e() {
            for(; n = t.stack.pop();)try {
                if (!n.async && 1 === o) return o = 0, t.stack.push(n), Promise.resolve().then(e);
                if (n.dispose) {
                    var s = n.dispose.call(n.value);
                    if (n.async) return o |= 2, Promise.resolve(s).then(e, function(t) {
                        return r(t), e();
                    });
                } else o |= 1;
            } catch (e) {
                r(e);
            }
            if (1 === o) return t.hasError ? Promise.reject(t.error) : Promise.resolve();
            if (t.hasError) throw t.error;
        }();
    };
}("function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
    var n = new Error(r);
    return n.name = "SuppressedError", n.error = e, n.suppressed = t, n;
});
function It(e) {
    if ("win32" === process.platform) {
        const t = /git.*bash/i;
        if (e && t.test(e)) return e;
        const r = u("bash", [], t).cmd;
        return t.test(r) ? r : null;
    }
    const t = process.env.SHELL;
    if (t?.includes("bash")) return t;
    return u("bash", []).cmd;
}
function At(e) {
    if ("win32" !== process.platform) return e;
    const t = n.normalize(e), r = t[0]?.toLowerCase();
    if (r && ":" === t[1] && t[2] === n.sep) {
        return `/${r}${t.slice(2).replace(/\\/g, "/")}`;
    }
    return t.replace(/\\/g, "/");
}
class Pt {
    cwd;
    state;
    userTerminalHint;
    useFileStateTransport;
    constructor(e, t, r, n = !1){
        this.cwd = e, this.state = t, this.userTerminalHint = r, this.useFileStateTransport = n;
    }
    async getCwd() {
        return this.cwd;
    }
    clone(e) {
        return new Pt(e ?? this.cwd, this.state, this.userTerminalHint, this.useFileStateTransport);
    }
    resetSessionCwdAfterHopCdFailure(e) {
        const { cwd: t, sandboxWorkspaceRoot: r } = e;
        n.resolve(t) === n.resolve(this.cwd) && (this.cwd = void 0 === r || n.resolve(r) === n.resolve(t) || (0, m.A)(r) ? (0, m.D1)() : r);
    }
    async *execute(e, t, r) {
        const o = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            const s = Tt(o, (0, h.VI)(e.withName("BashState.execute")), !1), i = r?.pipeStdin ?? !1, a = (0, f.Jt)(), l = r?.workingDirectory ?? this.cwd, c = {
                ...process.env,
                ...qe,
                ...r?.env
            };
            let u = 'builtin eval "$1"';
            i || (u += " < /dev/null");
            const g = kt(c), y = this.useFileStateTransport;
            let v, w, b;
            if (y) {
                v = await (0, d.mkdtemp)(n.join(p.tmpdir(), "cursor-bash-state-"));
                n.basename(v);
                w = n.join(v, "state-in"), b = n.join(v, "state-out"), await (0, d.writeFile)(w, this.state, "utf8"), await (0, d.writeFile)(b, "", "utf8").catch(()=>{});
                const e = At(w), t = At(b);
                c.CURSOR_STATE_INPUT_FILE = e, c.CURSOR_STATE_OUTPUT_FILE = t;
            }
            const _ = [
                "-O",
                "extglob",
                "-c",
                (y ? "" : He) + `${y ? 'snap=$(command cat "$CURSOR_STATE_INPUT_FILE")' : "snap=$(command cat <&3)"} && builtin shopt -s extglob && builtin eval -- "$snap" && { builtin set +u 2>/dev/null || true; builtin eval "\${__CURSOR_SANDBOX_ENV_RESTORE:-}" 2>/dev/null; ` + N + `builtin export PWD="$(builtin pwd)"; builtin shopt -s expand_aliases 2>/dev/null; ${g}${u}; }; ` + `COMMAND_EXIT_CODE=$?; ${y ? 'mkdir -p "$(dirname "$CURSOR_STATE_OUTPUT_FILE")" 2>/dev/null; dump_bash_state > "$CURSOR_STATE_OUTPUT_FILE"' : "dump_bash_state >&4"}; builtin exit $COMMAND_EXIT_CODE`,
                "--",
                ...y ? [
                    t
                ] : []
            ], S = It(this.userTerminalHint);
            if (!S) throw new Error("Can't find Bash");
            const x = r?.sandboxWorkspaceRoot ?? l, k = (await yt(x, r?.sandboxPolicy)).policy, E = "insecure_none" !== k.type ? {
                ...k,
                sandboxWorkspaceRoot: x
            } : k;
            let T = "";
            const C = async ()=>{
                if (y) {
                    if (!b) return void (T = this.state);
                    try {
                        T = await (0, d.readFile)(b, "utf8");
                    } catch (e) {
                        console.warn("[shell-exec] Failed to read bash state file", e), T = this.state;
                    }
                }
            }, I = async ()=>{
                if (v) try {
                    await (0, d.rm)(v, {
                        recursive: !0,
                        force: !0
                    });
                } catch  {}
            };
            let A;
            (0, m.$Y)(l) && (0, h.HF)(s.ctx, m.yo);
            try {
                A = Je(S, _, {
                    env: c,
                    stdio: [
                        i ? "pipe" : "ignore",
                        "pipe",
                        "pipe",
                        "pipe",
                        "pipe",
                        y ? "ignore" : "pipe"
                    ],
                    cwd: l,
                    detached: !0
                }, E, r?.signal);
            } catch (e) {
                throw await I(), e;
            }
            A.on("spawn", async ()=>{
                try {
                    await a.write({
                        type: "stdin_ready",
                        stdin: A.stdin ?? void 0,
                        pid: A.pid
                    });
                } catch (e) {}
            });
            const P = nt({
                stdout: A.stdout,
                stderr: A.stderr,
                writable: a,
                bufferOutputEvents: r?.bufferOutputEvents,
                outputLimiterOptions: r?.outputLimiterOptions
            });
            A.on("error", async (e)=>{
                if ((0, m.fK)(e, l)) {
                    this.resetSessionCwdAfterHopCdFailure({
                        cwd: l,
                        sandboxWorkspaceRoot: r?.sandboxWorkspaceRoot
                    }), (0, h.HF)(s.ctx, m.Gq);
                    const e = (0, m.iA)(l);
                    console.warn(`[shell-exec] working directory is not accessible (${e.cwdKind}:${e.cwdHash})`);
                }
                await I(), a.throw(e);
            });
            let M = null, R = null, O = !1;
            const D = async (e)=>{
                if (O) return;
                if (O = !0, R && (clearTimeout(R), R = null), (0, h.HF)(s.ctx, "exit"), e) try {
                    await P.waitForOutput();
                } catch (e) {
                    return await I(), void a.throw(e instanceof Error ? e : new Error(String(e)));
                }
                const t = (0, m.wz)({
                    exitCode: M,
                    stdoutBytes: P.stdoutBytes,
                    stdoutPrefix: P.stdoutPrefix,
                    cwd: l
                }) && "" === T;
                if (t && P.dropHeldStdout(), await P.flush(), t) {
                    this.resetSessionCwdAfterHopCdFailure({
                        cwd: l,
                        sandboxWorkspaceRoot: r?.sandboxWorkspaceRoot
                    }), await I(), (0, h.HF)(s.ctx, m.Gq);
                    const e = (0, m.iA)(l);
                    return console.warn(`[shell-exec] working directory is not accessible (${e.cwdKind}:${e.cwdHash})`), void a.throw((0, m.Vn)(l));
                }
                if (!r?.signal?.aborted) {
                    await C();
                    const e = `${Xe}\n`, t = `${Qe}\n`;
                    if (T.startsWith(e) && T.endsWith(t)) {
                        let t = T.slice(e.length);
                        t = t.slice(0, -(Qe.length + 1));
                        const { cwd: r, rest: n } = Ke(t);
                        this.state = n, "win32" !== process.platform && r?.startsWith("/") && (this.cwd = r);
                    }
                }
                if (E.captureDenies) try {
                    const e = await Be(A);
                    e && e.length > 0 && await a.write({
                        type: "sandbox_denies",
                        events: e
                    });
                } catch  {}
                try {
                    await a.write({
                        type: "exit",
                        code: M,
                        data: "",
                        aborted: r?.signal?.aborted ?? !1
                    }), a.close();
                } catch  {
                    a.close();
                }
                await I();
            };
            A.on("exit", (e, t)=>{
                M = e;
                const n = r?.closeTimeout ?? 5e3;
                n > 0 && (R = setTimeout(()=>{
                    console.warn(`[shell-exec] Close event did not fire within ${n}ms after exit. This may indicate a background process is holding file descriptors open. Proceeding anyway to prevent hang.`), D(!1);
                }, n));
            }), A.on("close", async ()=>{
                await D(!0);
            });
            const F = A.stdio[3], L = A.stdio[4];
            y || (Ge(A, t), Ye(F, this.state), Ve(L, (e)=>{
                T += e;
            })), yield* a;
        } catch (e) {
            o.error = e, o.hasError = !0;
        } finally{
            Ct(o);
        }
    }
}
var Mt = function(e, t, r) {
    if (null != t) {
        if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
        var n, o;
        if (r) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            n = t[Symbol.asyncDispose];
        }
        if (void 0 === n) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            n = t[Symbol.dispose], r && (o = n);
        }
        if ("function" != typeof n) throw new TypeError("Object not disposable.");
        o && (n = function() {
            try {
                o.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        }), e.stack.push({
            value: t,
            dispose: n,
            async: r
        });
    } else r && e.stack.push({
        async: !0
    });
    return t;
}, Rt = function(e) {
    return function(t) {
        function r(r) {
            t.error = t.hasError ? new e(r, t.error, "An error was suppressed during disposal.") : r, t.hasError = !0;
        }
        var n, o = 0;
        return function e() {
            for(; n = t.stack.pop();)try {
                if (!n.async && 1 === o) return o = 0, t.stack.push(n), Promise.resolve().then(e);
                if (n.dispose) {
                    var s = n.dispose.call(n.value);
                    if (n.async) return o |= 2, Promise.resolve(s).then(e, function(t) {
                        return r(t), e();
                    });
                } else o |= 1;
            } catch (e) {
                r(e);
            }
            if (1 === o) return t.hasError ? Promise.reject(t.error) : Promise.resolve();
            if (t.hasError) throw t.error;
        }();
    };
}("function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
    var n = new Error(r);
    return n.name = "SuppressedError", n.error = e, n.suppressed = t, n;
});
class Ot {
    initializer;
    promise;
    constructor(e){
        this.initializer = e;
    }
    getExecutor() {
        return void 0 === this.promise && (this.promise = this.initializer()), this.promise;
    }
    async getCwd() {
        return (await this.getExecutor()).getCwd();
    }
    clone(e) {
        return new Ot(async ()=>(await this.getExecutor()).clone(e));
    }
    async *execute(e, t, r) {
        const n = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            Mt(n, (0, h.VI)(e.withName("LazyTerminalExecutor.execute")), !1);
            const o = await this.getExecutor();
            for await (const n of o.execute(e, t, r))yield n;
        } catch (e) {
            n.error = e, n.hasError = !0;
        } finally{
            Rt(n);
        }
    }
}
const Dt = (e, t, r, n, o)=>`\n${o?.utf8Console ? "\ntry { [Console]::OutputEncoding = [System.Text.UTF8Encoding]::new($false) } catch { }\ntry { [Console]::InputEncoding = [System.Text.UTF8Encoding]::new($false) } catch { }\ntry { $global:OutputEncoding = [System.Text.UTF8Encoding]::new($false) } catch { }\n" : ""}\n${e}\n\nSet-Location '${t}'\n\n# Execute user command\n${r}\n$COMMAND_EXIT_CODE = $LASTEXITCODE\n\n\nfunction Dump-PowerShellState {\n    param(\n        [Parameter(Mandatory = $true)]\n        [string]$OutputFile\n    )\n\n    function Emit {\n        param([string]$Content)\n        Add-Content -Path $OutputFile -Value $Content -Encoding UTF8\n    }\n\n    if (Test-Path $OutputFile) {\n        Remove-Item $OutputFile -Force\n    }\n    New-Item -Path $OutputFile -ItemType File -Force | Out-Null\n    #Log-Timing "file_init"\n\n    Emit $PWD.Path\n    #Log-Timing "working_dir"\n\n    function ShouldPersistEnvVar {\n        param([string]$Name)\n        if ($Name -eq 'CURSOR_CONVERSATION_ID') {\n            return $false\n        }\n        if ($Name -eq 'CURSOR_REQUEST_ID') {\n            return $false\n        }\n        if ($Name -like 'CURSOR_AGENT_STORE*') {\n            return $false\n        }\n        if ($Name -like '*CURSOR_SANDBOX*') {\n            return $false\n        }\n        if ($Name -eq 'ELECTRON_RUN_AS_NODE') {\n            return $false\n        }\n        return $true\n    }\n\n    $envVars = Get-ChildItem Env: | Sort-Object Name\n    foreach ($var in $envVars) {\n        if (-not (ShouldPersistEnvVar -Name $var.Name)) {\n            continue\n        }\n        $encoded = [System.Convert]::ToBase64String([System.Text.Encoding]::UTF8.GetBytes([string]$var.Value))\n        Emit ('Set-Item -LiteralPath ''Env:{0}'' -Value ([System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String(''{1}'')))' -f $var.Name, $encoded)\n    }\n    #Log-Timing "environment"\n\n    $aliases = Get-Alias | Sort-Object Name\n    foreach ($alias in $aliases) {\n        $definition = $alias.Definition\n\n        if ($alias.Options -band [System.Management.Automation.ScopedItemOptions]::ReadOnly) {\n        }\n        elseif ($alias.Options -band [System.Management.Automation.ScopedItemOptions]::Constant) {\n        }\n        elseif ($alias.Options -band [System.Management.Automation.ScopedItemOptions]::AllScope) {\n        }\n        else {\n            Emit ('Set-Alias -Name "{0}" -Value "{1}"' -f $alias.Name, $definition)\n        }\n    }\n\n    #Log-Timing "finalize"\n}\n\nDump-PowerShellState -OutputFile "${n}"\n\nexit $COMMAND_EXIT_CODE\n`;
var Nt = function(e, t, r) {
    if (null != t) {
        if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
        var n, o;
        if (r) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            n = t[Symbol.asyncDispose];
        }
        if (void 0 === n) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            n = t[Symbol.dispose], r && (o = n);
        }
        if ("function" != typeof n) throw new TypeError("Object not disposable.");
        o && (n = function() {
            try {
                o.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        }), e.stack.push({
            value: t,
            dispose: n,
            async: r
        });
    } else r && e.stack.push({
        async: !0
    });
    return t;
}, Ft = function(e) {
    return function(t) {
        function r(r) {
            t.error = t.hasError ? new e(r, t.error, "An error was suppressed during disposal.") : r, t.hasError = !0;
        }
        var n, o = 0;
        return function e() {
            for(; n = t.stack.pop();)try {
                if (!n.async && 1 === o) return o = 0, t.stack.push(n), Promise.resolve().then(e);
                if (n.dispose) {
                    var s = n.dispose.call(n.value);
                    if (n.async) return o |= 2, Promise.resolve(s).then(e, function(t) {
                        return r(t), e();
                    });
                } else o |= 1;
            } catch (e) {
                r(e);
            }
            if (1 === o) return t.hasError ? Promise.reject(t.error) : Promise.resolve();
            if (t.hasError) throw t.error;
        }();
    };
}("function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
    var n = new Error(r);
    return n.name = "SuppressedError", n.error = e, n.suppressed = t, n;
});
function Lt() {
    if ("win32" !== process.platform) {
        const e = process.env.SHELL;
        if (e?.includes("pwsh") || e?.includes("powershell")) return e;
    }
    let e = u("pwsh", []).cmd;
    if ("pwsh" !== e) return e;
    if (e = u("powershell", []).cmd, "powershell" !== e) return e;
    if ("win32" === process.platform && (e = n.join(process.env.SYSTEMROOT, "System32", "WindowsPowerShell", "v1.0", "powershell.exe"), (0, o.existsSync)(e))) return e;
    throw new Error("Neither 'pwsh' (PowerShell Core) nor 'powershell' (Windows PowerShell) found in PATH");
}
class Ut {
    cwd;
    state;
    constructor(e, t){
        this.cwd = e, this.state = t;
    }
    async getCwd() {
        return this.cwd;
    }
    clone(e) {
        return new Ut(e ?? this.cwd, this.state);
    }
    async *execute(e, t, r) {
        const o = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            const s = Nt(o, (0, h.VI)(e.withName("PowerShellState.execute")), !1), i = r?.pipeStdin ?? !1, a = r?.workingDirectory ?? this.cwd, l = (0, f.Jt)(), c = {
                ...process.env,
                ...qe,
                ...r?.env
            }, u = xt(c) ? Et(t) : t, m = p.tmpdir(), g = n.join(m, `ps-state-out-${(0, C.randomUUID)()}.txt`), y = "win32" === process.platform, v = Dt(this.state, a, u, g, {
                utf8Console: y && !0 === r?.powershellUtf8Console
            }), w = n.join(m, `ps-script-${(0, C.randomUUID)()}.ps1`);
            await async function(e, t) {
                await d.writeFile(e, Bt + t, {
                    encoding: "utf8"
                });
            }(w, v);
            const b = [
                "-ExecutionPolicy",
                "Bypass"
            ];
            i || b.push("-NonInteractive"), b.push("-File", w);
            const _ = Lt(), S = r?.sandboxWorkspaceRoot ?? a, x = (await yt(S, r?.sandboxPolicy)).policy, k = Je(_, b, {
                env: c,
                stdio: [
                    i ? "pipe" : "ignore",
                    "pipe",
                    "pipe"
                ],
                cwd: a,
                detached: !y
            }, "insecure_none" !== x.type ? {
                ...x,
                sandboxWorkspaceRoot: S
            } : x, r?.signal);
            k.on("spawn", async ()=>{
                try {
                    await l.write({
                        type: "stdin_ready",
                        stdin: k.stdin ?? void 0,
                        pid: k.pid
                    });
                } catch (e) {}
            });
            const E = nt({
                stdout: k.stdout,
                stderr: k.stderr,
                writable: l,
                bufferOutputEvents: r?.bufferOutputEvents,
                outputLimiterOptions: r?.outputLimiterOptions
            }), T = async ()=>{
                try {
                    const e = await d.readFile(g, "utf8"), { cwd: t, rest: r } = Ke(e);
                    this.state = r, this.cwd = t.trim(), await (0, d.rm)(g).catch(()=>{});
                } catch (e) {}
                await (0, d.rm)(w).catch(()=>{});
            };
            let I = null, A = null, P = !1;
            const M = async (e)=>{
                if (!P) {
                    if (P = !0, A && (clearTimeout(A), A = null), (0, h.HF)(s.ctx, "exit"), e) try {
                        await E.waitForOutput();
                    } catch (e) {
                        return await T(), void l.throw(e instanceof Error ? e : new Error(String(e)));
                    }
                    await E.flush();
                    try {
                        await l.write({
                            type: "exit",
                            code: I,
                            data: "",
                            aborted: r?.signal?.aborted ?? !1
                        }), await T(), l.close();
                    } catch (e) {
                        l.close();
                    }
                }
            };
            k.on("exit", (e, t)=>{
                I = e;
                const n = r?.closeTimeout ?? 5e3;
                n > 0 && (A = setTimeout(()=>{
                    console.warn(`[shell-exec] Close event did not fire within ${n}ms after exit. This may indicate a background process is holding file descriptors open. Proceeding anyway to prevent hang.`), M(!1);
                }, n));
            }), k.on("close", async ()=>{
                await M(!0);
            }), k.on("error", (e)=>{
                T().catch(()=>{}), l.throw(e);
            }), yield* l;
        } catch (e) {
            o.error = e, o.hasError = !0;
        } finally{
            Ft(o);
        }
    }
}
const Bt = "\ufeff";
var $t = function(e, t, r) {
    if (null != t) {
        if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
        var n, o;
        if (r) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            n = t[Symbol.asyncDispose];
        }
        if (void 0 === n) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            n = t[Symbol.dispose], r && (o = n);
        }
        if ("function" != typeof n) throw new TypeError("Object not disposable.");
        o && (n = function() {
            try {
                o.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        }), e.stack.push({
            value: t,
            dispose: n,
            async: r
        });
    } else r && e.stack.push({
        async: !0
    });
    return t;
}, qt = function(e) {
    return function(t) {
        function r(r) {
            t.error = t.hasError ? new e(r, t.error, "An error was suppressed during disposal.") : r, t.hasError = !0;
        }
        var n, o = 0;
        return function e() {
            for(; n = t.stack.pop();)try {
                if (!n.async && 1 === o) return o = 0, t.stack.push(n), Promise.resolve().then(e);
                if (n.dispose) {
                    var s = n.dispose.call(n.value);
                    if (n.async) return o |= 2, Promise.resolve(s).then(e, function(t) {
                        return r(t), e();
                    });
                } else o |= 1;
            } catch (e) {
                r(e);
            }
            if (1 === o) return t.hasError ? Promise.reject(t.error) : Promise.resolve();
            if (t.hasError) throw t.error;
        }();
    };
}("function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
    var n = new Error(r);
    return n.name = "SuppressedError", n.error = e, n.suppressed = t, n;
});
class jt {
    cwd;
    options;
    constructor(e, t){
        this.cwd = e, this.options = t;
    }
    async getCwd() {
        return this.cwd;
    }
    clone(e) {
        return new jt(e ?? this.cwd, this.options);
    }
    async *execute(e, t, r) {
        const n = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            const o = $t(n, (0, h.VI)(e.withName("NaiveTerminalExecutor.execute")), !1), s = (0, f.Jt)(), i = r?.pipeStdin ?? !1, a = {
                ...process.env,
                ...qe,
                ...r?.env
            }, l = xt(a) ? Et(t) : t, c = r?.workingDirectory ?? this.cwd, u = r?.sandboxWorkspaceRoot ?? c, d = (await yt(u, r?.sandboxPolicy)).policy, p = "insecure_none" !== d.type ? {
                ...d,
                sandboxWorkspaceRoot: u
            } : d, m = "win32" === process.platform, g = Je(this.options?.shell || process.env.SHELL || "/bin/sh", [
                ...this.options?.shellArgs ?? [],
                "-c",
                l
            ], {
                env: a,
                cwd: c,
                stdio: [
                    i ? "pipe" : "ignore",
                    "pipe",
                    "pipe"
                ],
                detached: !m
            }, p, r?.signal);
            g.on("spawn", async ()=>{
                try {
                    await s.write({
                        type: "stdin_ready",
                        stdin: g.stdin ?? void 0,
                        pid: g.pid
                    });
                } catch (e) {}
            });
            const y = nt({
                stdout: g.stdout,
                stderr: g.stderr,
                writable: s,
                bufferOutputEvents: r?.bufferOutputEvents,
                outputLimiterOptions: r?.outputLimiterOptions
            });
            g.on("error", (e)=>{
                s.throw(e);
            }), g.on("exit", async (e)=>{
                if ((0, h.HF)(o.ctx, "exit"), await y.flush(), p.captureDenies) try {
                    const e = await Be(g);
                    e && e.length > 0 && await s.write({
                        type: "sandbox_denies",
                        events: e
                    });
                } catch  {}
                try {
                    await s.write({
                        type: "exit",
                        code: e,
                        data: "",
                        aborted: r?.signal?.aborted ?? !1
                    }), s.close();
                } catch (e) {
                    s.close();
                }
            }), yield* s;
        } catch (e) {
            n.error = e, n.hasError = !0;
        } finally{
            qt(n);
        }
    }
}
const Jt = "__CURSOR_ZSH_STATE_START__", zt = "__CURSOR_ZSH_STATE_END__", Ht = '#!/usr/bin/env zsh\n\n# Usage:\n#   source dump_zsh_state.zsh\n#   dump_zsh_state\n# Or execute directly (captures a subshell\'s state):\n#   ./dump_zsh_state.zsh\n\n# Define a function so sourcing won\'t alter caller state; emulate locally inside\nfunction dump_zsh_state() {\n  emulate -L zsh -o errreturn -o pipefail\n  set -u\n\n\n  # Helper to log timing, only if DUMP_ZSH_STATE_TIMING is set\n  if [[ -n "${DUMP_ZSH_STATE_TIMING:-}" ]]; then\n    # Timing setup\n    typeset start_time=${EPOCHREALTIME}\n    typeset step_start=${EPOCHREALTIME}\n    _log_timing() {\n      typeset step_name="$1"\n      typeset now=${EPOCHREALTIME}\n      typeset step_duration=$((now - step_start))\n      typeset total_duration=$((now - start_time))\n      builtin printf "[TIMING] %-20s: %6.3fs (total: %6.3fs)\n" "$step_name" "$step_duration" "$total_duration" >&2\n      step_start=$now\n    }\n  else\n    _log_timing() { :; }\n  fi\n\n  # Ensure parameter arrays are available\n  builtin zmodload -F zsh/parameter p:parameters p:options p:functions p:aliases p:galiases p:saliases 2>/dev/null || true\n  _log_timing "zmodload"\n\n  # Helper to print a line to stdout\n  _emit() {\n    builtin print -r -- "$1"\n  }\n\n  # Helper to safely encode and emit unsafe values\n  _emit_encoded() {\n    local content="$1"\n    local var_name="$2"\n    if [[ -n "$content" ]]; then\n      # Builtin printf, not a here-document: no argument length limit, and no temp file\n      builtin printf \'cursor_snap_%s=$(builtin printf %%s \'"\'"\'%s\'"\'"\' | command base64 -d)\n\' "$var_name" "$(command base64 <<<"$content" | command tr -d \'\n\')"\n      builtin printf \'eval "$cursor_snap_%s"\n\' "$var_name"\n    fi\n  }\n\n  _log_timing "init"\n\n  # Emit start marker at the very beginning of the output\n  _emit "__CURSOR_ZSH_STATE_START__"\n\n  # Header\n  _emit "$PWD"\n\n  _emit "# zsh state dump generated on $(command date +\'%Y-%m-%d %H:%M:%S %z\')"\n  _log_timing "header"\n\n  # Working directory\n  _log_timing "working_dir"\n\n  # Drop ELECTRON_RUN_AS_NODE by exact name so one command exporting it can\'t\n  # bake it into the snapshot that every later command re-evals (IDE-2911:\n  # Cypress boots as plain Node until a new chat). Exact unset rather than the\n  # line-based grep below, which would also eat vars whose name or multiline\n  # value merely contains the token. The shell exits right after the dump.\n  builtin unset ELECTRON_RUN_AS_NODE 2>/dev/null || true\n\n  # Environment variables (exported)\n  # Filter out: proxy settings plus request/session-scoped vars that must not\n  # leak across shell executions.\n  # Under a non-UTF-8 locale zsh writes byte 0xa7 inside $\'...\' as M-\', which\n  # its own parser reads as the closing quote (zsh 5.9 Src/utils.c quotestring,\n  # https://github.com/zsh-users/zsh/blob/zsh-5.9/Src/utils.c); the sed rewrites\n  # that one escape to the § form so the restore eval can parse it. It runs\n  # only on scalar $\'...\' lines: a plain-quoted value can hold the same four\n  # characters literally, and there they must stay.\n  local env_vars\n  env_vars=$(builtin typeset -xp 2>/dev/null | command grep -viE \'_proxy=|CURSOR_SANDBOX|SUDO_ASKPASS|CURSOR_ASKPASS|CURSOR_CONVERSATION_ID|CURSOR_REQUEST_ID|CURSOR_AGENT_STORE\' | command sed "/^export[^=]*=[\\$]\'/ s/\\\\\\\\M-\'/\\\\\\\\xa7/g" || true)\n  if [[ -n "${__CURSOR_SANDBOX_OWNED_ENV:-}" ]]; then\n    env_vars=$(builtin printf \'%s\n\' "$env_vars" | command grep -vE "^(export|declare|typeset)( -[a-zA-Z]+)* (${__CURSOR_SANDBOX_OWNED_ENV// /|})=" || true)\n  fi\n  _emit_encoded "$env_vars" "ENV_VARS_B64"\n  _log_timing "env_variables"\n\n  # Options (replayable as setopt lines). Exclude the errreturn/nounset/pipefail this\n  # function force-enables above, so they are not baked into the restored snapshot and\n  # leaked onto every subsequent command (a stray pipefail makes a successful\n  # \'cmd | head\' report exit 141).\n  local zsh_opts\n  zsh_opts=$(setopt 2>/dev/null | command grep -vE \'^(errreturn|nounset|pipefail)$\' | command awk \'{printf "builtin setopt %s 2>/dev/null || true\\n", $0}\' || true)\n  _emit_encoded "$zsh_opts" "ZSH_OPTS_B64"\n  _log_timing "options"\n\n  # Functions: dump all functions at once (much faster than individual processing)\n  local all_functions\n  all_functions=$(builtin typeset -f 2>/dev/null || true)\n  _emit_encoded "$all_functions" "FUNCTIONS_B64"\n  _log_timing "functions"\n\n  # Aliases (regular, global, and suffix)\n  {\n    builtin alias -L 2>/dev/null || true\n    builtin alias -gL 2>/dev/null || true\n    builtin alias -sL 2>/dev/null || true\n  }\n  _log_timing "aliases"\n\n  # Done\n  _emit "# end of zsh state dump"\n  _emit "__CURSOR_ZSH_STATE_END__"\n  _log_timing "finalize"\n}\n';
var Wt = function(e, t, r) {
    if (null != t) {
        if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
        var n, o;
        if (r) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            n = t[Symbol.asyncDispose];
        }
        if (void 0 === n) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            n = t[Symbol.dispose], r && (o = n);
        }
        if ("function" != typeof n) throw new TypeError("Object not disposable.");
        o && (n = function() {
            try {
                o.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        }), e.stack.push({
            value: t,
            dispose: n,
            async: r
        });
    } else r && e.stack.push({
        async: !0
    });
    return t;
}, Gt = function(e) {
    return function(t) {
        function r(r) {
            t.error = t.hasError ? new e(r, t.error, "An error was suppressed during disposal.") : r, t.hasError = !0;
        }
        var n, o = 0;
        return function e() {
            for(; n = t.stack.pop();)try {
                if (!n.async && 1 === o) return o = 0, t.stack.push(n), Promise.resolve().then(e);
                if (n.dispose) {
                    var s = n.dispose.call(n.value);
                    if (n.async) return o |= 2, Promise.resolve(s).then(e, function(t) {
                        return r(t), e();
                    });
                } else o |= 1;
            } catch (e) {
                r(e);
            }
            if (1 === o) return t.hasError ? Promise.reject(t.error) : Promise.resolve();
            if (t.hasError) throw t.error;
        }();
    };
}("function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
    var n = new Error(r);
    return n.name = "SuppressedError", n.error = e, n.suppressed = t, n;
});
function Yt() {
    const e = process.env.SHELL;
    return e?.includes("zsh") ? e : u("zsh", []).cmd;
}
class Vt {
    cwd;
    state;
    constructor(e, t){
        this.cwd = e, this.state = t;
    }
    async getCwd() {
        return this.cwd;
    }
    clone(e) {
        return new Vt(e ?? this.cwd, this.state);
    }
    async *execute(e, t, r) {
        const n = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            const o = Wt(n, (0, h.VI)(e.withName("ZshState.execute")), !1), s = r?.pipeStdin ?? !1, i = (0, f.Jt)(), a = r?.workingDirectory ?? this.cwd, l = {
                ...process.env,
                ...qe,
                ...r?.env
            };
            let c = 'builtin eval "$1"';
            s || (c += " < /dev/null");
            const u = kt(l), d = We(), p = [
                "-c",
                (d ? He : "") + 'builtin export PATH="/usr/bin:/bin:/usr/sbin:/sbin${PATH:+:$PATH}"; snap=$(command cat <&3); builtin unsetopt aliases 2>/dev/null; builtin unalias -m \'*\' 2>/dev/null || true; builtin eval "$snap" && { builtin unsetopt nounset 2>/dev/null || true; builtin eval "${__CURSOR_SANDBOX_ENV_RESTORE:-}" 2>/dev/null; ' + N + `builtin export PWD="$(builtin pwd)"; builtin setopt aliases 2>/dev/null; ${u}${c}; }; COMMAND_EXIT_CODE=$?; dump_zsh_state >&4; builtin exit $COMMAND_EXIT_CODE`,
                "--",
                ...d ? [] : [
                    t
                ]
            ], m = r?.sandboxWorkspaceRoot ?? a, g = (await yt(m, r?.sandboxPolicy)).policy, y = "insecure_none" !== g.type ? {
                ...g,
                sandboxWorkspaceRoot: m
            } : g, v = Je(Yt(), p, {
                env: l,
                stdio: [
                    s ? "pipe" : "ignore",
                    "pipe",
                    "pipe",
                    "pipe",
                    "pipe",
                    d ? "pipe" : "ignore"
                ],
                cwd: a,
                detached: !0
            }, y, r?.signal);
            let w = "";
            v.on("spawn", async ()=>{
                try {
                    await i.write({
                        type: "stdin_ready",
                        stdin: v.stdin ?? void 0,
                        pid: v.pid
                    });
                } catch (e) {}
            });
            const b = nt({
                stdout: v.stdout,
                stderr: v.stderr,
                writable: i,
                bufferOutputEvents: r?.bufferOutputEvents,
                outputLimiterOptions: r?.outputLimiterOptions
            });
            v.on("error", (e)=>{
                i.throw(e);
            });
            let _ = null, S = null, x = !1;
            const k = async (e)=>{
                if (!x) {
                    if (x = !0, S && (clearTimeout(S), S = null), (0, h.HF)(o.ctx, "exit"), e) try {
                        await b.waitForOutput();
                    } catch (e) {
                        return void i.throw(e instanceof Error ? e : new Error(String(e)));
                    }
                    if (await b.flush(), !r?.signal?.aborted) {
                        const e = `${Jt}\n`, t = `${zt}\n`;
                        if (w.startsWith(e) && w.endsWith(t)) {
                            let t = w.slice(e.length);
                            t = t.slice(0, -(zt.length + 1));
                            const { cwd: r, rest: n } = Ke(t);
                            r?.startsWith("/") && (this.state = n, this.cwd = r);
                        }
                    }
                    if (y.captureDenies) try {
                        const e = await Be(v);
                        e && e.length > 0 && await i.write({
                            type: "sandbox_denies",
                            events: e
                        });
                    } catch  {}
                    try {
                        await i.write({
                            type: "exit",
                            code: _,
                            data: "",
                            aborted: r?.signal?.aborted ?? !1
                        }), i.close();
                    } catch (e) {
                        i.close();
                    }
                }
            };
            v.on("exit", (e, t)=>{
                _ = e;
                const n = r?.closeTimeout ?? 5e3;
                n > 0 && (S = setTimeout(()=>{
                    x || (console.warn(`[shell-exec] Close event did not fire within ${n}ms after exit. This may indicate a background process is holding file descriptors open. Killing detached process group.`), function(e, t, r) {
                        if (e) {
                            try {
                                process.kill(-e, t);
                            } catch  {
                                return;
                            }
                            "SIGTERM" === t && void 0 !== r && r > 0 && setTimeout(()=>{
                                try {
                                    process.kill(-e, "SIGKILL");
                                } catch  {}
                            }, r);
                        }
                    }(v.pid, "SIGKILL"), k(!1));
                }, n));
            }), v.on("close", async ()=>{
                await k(!0);
            });
            const E = v.stdio[3], T = v.stdio[4];
            d && Ge(v, t), Ye(E, this.state), Ve(T, (e)=>{
                w += e;
            }), yield* i;
        } catch (e) {
            n.error = e, n.hasError = !0;
        } finally{
            Gt(n);
        }
    }
}
const Kt = "__CURSOR_ZSH_STATE_LIGHT_VALID__", Zt = '#!/usr/bin/env zsh\n\n# Usage:\n#   source dump_zsh_state_light.zsh\n#   dump_zsh_state_light\n# Or execute directly (captures a subshell\'s state):\n#   ./dump_zsh_state_light.zsh\n\n# Lightweight version that skips function tracking for better performance\n\n# Define a function so sourcing won\'t alter caller state; emulate locally inside\nfunction dump_zsh_state_light() {\n  emulate -L zsh -o errreturn -o pipefail\n  set -u\n\n\n  # Helper to log timing, only if DUMP_ZSH_STATE_TIMING is set\n  if [[ -n "${DUMP_ZSH_STATE_TIMING:-}" ]]; then\n    # Timing setup\n    typeset start_time=${EPOCHREALTIME}\n    typeset step_start=${EPOCHREALTIME}\n    _log_timing() {\n      typeset step_name="$1"\n      typeset now=${EPOCHREALTIME}\n      typeset step_duration=$((now - step_start))\n      typeset total_duration=$((now - start_time))\n      builtin printf "[TIMING] %-20s: %6.3fs (total: %6.3fs)\n" "$step_name" "$step_duration" "$total_duration" >&2\n      step_start=$now\n    }\n  else\n    _log_timing() { :; }\n  fi\n\n  # Ensure parameter arrays are available\n  builtin zmodload -F zsh/parameter p:parameters p:options p:aliases p:galiases p:saliases 2>/dev/null || true\n  _log_timing "zmodload"\n\n  # Helper to print a line to stdout\n  _emit() {\n    builtin print -r -- "$1"\n  }\n\n  # Helper to safely encode and emit unsafe values\n  _emit_encoded() {\n    local content="$1"\n    local var_name="$2"\n    if [[ -n "$content" ]]; then\n      # Builtin printf, not a here-document: no argument length limit, and no temp file\n      builtin printf \'cursor_snap_%s=$(builtin printf %%s \'"\'"\'%s\'"\'"\' | command base64 -d)\n\' "$var_name" "$(command base64 <<<"$content" | command tr -d \'\n\')"\n      builtin printf \'eval "$cursor_snap_%s"\n\' "$var_name"\n    fi\n  }\n\n  _log_timing "init"\n\n  # Emit validity marker so we can detect if dump_zsh_state_light completed\n  _emit "__CURSOR_ZSH_STATE_LIGHT_VALID__"\n\n  # Header\n  _emit "$PWD"\n\n  _emit "# zsh state dump (light) generated on $(command date +\'%Y-%m-%d %H:%M:%S %z\')"\n  _log_timing "header"\n\n  # Working directory\n  _log_timing "working_dir"\n\n  # Drop ELECTRON_RUN_AS_NODE by exact name so one command exporting it can\'t\n  # bake it into the snapshot that every later command re-evals (IDE-2911:\n  # Cypress boots as plain Node until a new chat). Exact unset rather than the\n  # line-based grep below, which would also eat vars whose name or multiline\n  # value merely contains the token. The shell exits right after the dump.\n  builtin unset ELECTRON_RUN_AS_NODE 2>/dev/null || true\n\n  # Environment variables (exported)\n  # Filter out: proxy settings plus request/session-scoped vars that must not\n  # leak across shell executions.\n  # Under a non-UTF-8 locale zsh writes byte 0xa7 inside $\'...\' as M-\', which\n  # its own parser reads as the closing quote (zsh 5.9 Src/utils.c quotestring,\n  # https://github.com/zsh-users/zsh/blob/zsh-5.9/Src/utils.c); the sed rewrites\n  # that one escape to the § form so the restore eval can parse it. It runs\n  # only on scalar $\'...\' lines: a plain-quoted value can hold the same four\n  # characters literally, and there they must stay.\n  local env_vars\n  env_vars=$(builtin typeset -xp 2>/dev/null | command grep -viE \'_proxy=|CURSOR_SANDBOX|SUDO_ASKPASS|CURSOR_ASKPASS|CURSOR_CONVERSATION_ID|CURSOR_REQUEST_ID|CURSOR_AGENT_STORE\' | command sed "/^export[^=]*=[\\$]\'/ s/\\\\\\\\M-\'/\\\\\\\\xa7/g" || true)\n  if [[ -n "${__CURSOR_SANDBOX_OWNED_ENV:-}" ]]; then\n    env_vars=$(builtin printf \'%s\n\' "$env_vars" | command grep -vE "^(export|declare|typeset)( -[a-zA-Z]+)* (${__CURSOR_SANDBOX_OWNED_ENV// /|})=" || true)\n  fi\n  _emit_encoded "$env_vars" "ENV_VARS_B64"\n  _log_timing "env_variables"\n\n  # Options (replayable as setopt lines). Exclude the errreturn/nounset/pipefail this\n  # function force-enables above, so they are not baked into the restored snapshot and\n  # leaked onto every subsequent command (a stray pipefail makes a successful\n  # \'cmd | head\' report exit 141).\n  local zsh_opts\n  zsh_opts=$(setopt 2>/dev/null | command grep -vE \'^(errreturn|nounset|pipefail)$\' | command awk \'{printf "builtin setopt %s 2>/dev/null || true\\n", $0}\' || true)\n  _emit_encoded "$zsh_opts" "ZSH_OPTS_B64"\n  _log_timing "options"\n\n  # SKIP FUNCTIONS - this is the key difference for performance\n\n  # Aliases (regular, global, and suffix)\n  {\n    builtin alias -L 2>/dev/null || true\n    builtin alias -gL 2>/dev/null || true\n    builtin alias -sL 2>/dev/null || true\n  }\n  _log_timing "aliases"\n\n  # Done\n  _emit "# end of zsh state dump (light)"\n  _log_timing "finalize"\n}\n';
var Xt = function(e, t, r) {
    if (null != t) {
        if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
        var n, o;
        if (r) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            n = t[Symbol.asyncDispose];
        }
        if (void 0 === n) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            n = t[Symbol.dispose], r && (o = n);
        }
        if ("function" != typeof n) throw new TypeError("Object not disposable.");
        o && (n = function() {
            try {
                o.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        }), e.stack.push({
            value: t,
            dispose: n,
            async: r
        });
    } else r && e.stack.push({
        async: !0
    });
    return t;
}, Qt = function(e) {
    return function(t) {
        function r(r) {
            t.error = t.hasError ? new e(r, t.error, "An error was suppressed during disposal.") : r, t.hasError = !0;
        }
        var n, o = 0;
        return function e() {
            for(; n = t.stack.pop();)try {
                if (!n.async && 1 === o) return o = 0, t.stack.push(n), Promise.resolve().then(e);
                if (n.dispose) {
                    var s = n.dispose.call(n.value);
                    if (n.async) return o |= 2, Promise.resolve(s).then(e, function(t) {
                        return r(t), e();
                    });
                } else o |= 1;
            } catch (e) {
                r(e);
            }
            if (1 === o) return t.hasError ? Promise.reject(t.error) : Promise.resolve();
            if (t.hasError) throw t.error;
        }();
    };
}("function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
    var n = new Error(r);
    return n.name = "SuppressedError", n.error = e, n.suppressed = t, n;
});
function er() {
    const e = process.env.SHELL;
    return e?.includes("zsh") ? e : u("zsh", []).cmd;
}
class tr {
    cwd;
    state;
    constructor(e, t){
        this.cwd = e, this.state = t;
    }
    async getCwd() {
        return this.cwd;
    }
    clone(e) {
        return new tr(e ?? this.cwd, this.state);
    }
    async *execute(e, t, r) {
        const n = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            const o = Xt(n, (0, h.VI)(e.withName("ZshLightState.execute")), !1), s = r?.pipeStdin ?? !1, i = (0, f.Jt)(), a = r?.workingDirectory ?? this.cwd, l = {
                ...process.env,
                ...qe,
                ...r?.env
            };
            let c = 'builtin eval "$1"';
            s || (c += " < /dev/null");
            const u = kt(l), d = We(), p = [
                "-c",
                (d ? He : "") + "builtin export PATH=\"/usr/bin:/bin:/usr/sbin:/sbin${PATH:+:$PATH}\"; snap=$(command cat <&3); builtin unsetopt aliases 2>/dev/null; builtin unalias -m '*' 2>/dev/null || true; " + `${Zt} builtin eval "$snap" && { builtin unsetopt nounset 2>/dev/null || true; builtin eval "\${__CURSOR_SANDBOX_ENV_RESTORE:-}" 2>/dev/null; ` + N + `builtin export PWD="$(builtin pwd)"; builtin setopt aliases 2>/dev/null; ${u}${c}; }; COMMAND_EXIT_CODE=$?; dump_zsh_state_light >&4; builtin exit $COMMAND_EXIT_CODE`,
                "--",
                ...d ? [] : [
                    t
                ]
            ], m = r?.sandboxWorkspaceRoot ?? a, g = (await yt(m, r?.sandboxPolicy)).policy, y = "insecure_none" !== g.type ? {
                ...g,
                sandboxWorkspaceRoot: m
            } : g, v = Je(er(), p, {
                env: l,
                stdio: [
                    s ? "pipe" : "ignore",
                    "pipe",
                    "pipe",
                    "pipe",
                    "pipe",
                    d ? "pipe" : "ignore"
                ],
                cwd: a,
                detached: !0
            }, y, r?.signal);
            let w = "";
            v.on("spawn", async ()=>{
                try {
                    await i.write({
                        type: "stdin_ready",
                        stdin: v.stdin ?? void 0,
                        pid: v.pid
                    });
                } catch (e) {}
            });
            const b = nt({
                stdout: v.stdout,
                stderr: v.stderr,
                writable: i,
                bufferOutputEvents: r?.bufferOutputEvents,
                outputLimiterOptions: r?.outputLimiterOptions
            });
            v.on("error", (e)=>{
                i.throw(e);
            });
            let _ = null, S = null, x = !1;
            const k = async (e)=>{
                if (!x) {
                    if (x = !0, S && (clearTimeout(S), S = null), (0, h.HF)(o.ctx, "exit"), e) try {
                        await b.waitForOutput();
                    } catch (e) {
                        return void i.throw(e instanceof Error ? e : new Error(String(e)));
                    }
                    if (await b.flush(), !r?.signal?.aborted) {
                        const e = `${Kt}\n`;
                        if (w.startsWith(e)) {
                            const t = w.slice(e.length), { cwd: r, rest: n } = Ke(t);
                            r?.startsWith("/") && (this.state = n, this.cwd = r);
                        }
                    }
                    if (y.captureDenies) try {
                        const e = await Be(v);
                        e && e.length > 0 && await i.write({
                            type: "sandbox_denies",
                            events: e
                        });
                    } catch  {}
                    try {
                        await i.write({
                            type: "exit",
                            code: _,
                            data: "",
                            aborted: r?.signal?.aborted ?? !1
                        }), i.close();
                    } catch (e) {
                        i.close();
                    }
                }
            };
            v.on("exit", (e, t)=>{
                _ = e;
                const n = r?.closeTimeout ?? 5e3;
                n > 0 && (S = setTimeout(()=>{
                    console.warn(`[shell-exec] Close event did not fire within ${n}ms after exit. This may indicate a background process is holding file descriptors open. Proceeding anyway to prevent hang.`), k(!1);
                }, n));
            }), v.on("close", async ()=>{
                await k(!0);
            });
            const E = v.stdio[3], T = v.stdio[4];
            d && Ge(v, t), Ye(E, this.state), Ve(T, (e)=>{
                w += e;
            }), yield* i;
        } catch (e) {
            n.error = e, n.hasError = !0;
        } finally{
            Qt(n);
        }
    }
}
var rr, nr;
require("./module-643.js");
!function(e) {
    e[e.EventLoopDelayP95Ms = 50] = "EventLoopDelayP95Ms", e[e.EventLoopUtilization = .7] = "EventLoopUtilization";
}(rr || (rr = {})), function(e) {
    e[e.SampleIntervalMs = 250] = "SampleIntervalMs", e[e.EventLoopResolutionMs = 20] = "EventLoopResolutionMs";
}(nr || (nr = {}));
const or = "\n[This shell is producing too much output to stream. The command will still run.]\n";
var sr = require("./module-68388.js");
function ir(e) {
    if (!e) return;
    const t = {
        version: 1
    };
    if ("allow" !== e.default && "deny" !== e.default || (t.default = e.default), Array.isArray(e.allow) && e.allow.length > 0 && (t.allow = e.allow.filter((e)=>"string" == typeof e)), Array.isArray(e.deny) && e.deny.length > 0 && (t.deny = e.deny.filter((e)=>"string" == typeof e)), e.logging) {
        const r = {};
        "string" == typeof e.logging.decisionLogPath && (r.decisionLogPath = e.logging.decisionLogPath), "jsonl" === e.logging.logFormat && (r.logFormat = "jsonl"), Object.keys(r).length > 0 && (t.logging = r);
    }
    return t;
}
function ar(e) {
    const t = e.type ?? "workspace_readwrite", r = {
        debugOutputDir: e.debugOutputDir,
        captureDenies: e.captureDenies,
        enableSharedBuildCache: e.enableSharedBuildCache
    };
    if ("insecure_none" === t) {
        return {
            type: "insecure_none",
            ...r
        };
    }
    let n;
    if (Array.isArray(e.additionalReadonlyPaths)) {
        const t = e.additionalReadonlyPaths;
        n = t.length > 0 ? t : void 0;
    }
    const o = {
        ...r,
        networkAccess: e.networkAccess,
        networkPolicy: ir(e.networkPolicy),
        networkPolicyStrict: e.networkPolicyStrict,
        additionalReadonlyPaths: n,
        readBoundary: e.readBoundary,
        additionalReadPaths: Array.isArray(e.additionalReadPaths) ? e.additionalReadPaths : void 0,
        disableTmpWrite: e.disableTmpWrite
    };
    if ("workspace_readonly" === t) {
        return {
            type: "workspace_readonly",
            ...o
        };
    }
    return {
        type: "workspace_readwrite",
        ...o,
        additionalReadwritePaths: e.additionalReadwritePaths
    };
}
function lr(e, t) {
    if ("insecure_none" === e.type) return e;
    const r = e.additionalReadonlyPaths?.map((e)=>(0, sr.o1)(e, t)), n = e.additionalReadPaths?.map((e)=>(0, sr.o1)(e, t));
    if ("workspace_readonly" === e.type) return {
        ...e,
        additionalReadonlyPaths: r,
        additionalReadPaths: n
    };
    const o = e.additionalReadwritePaths?.map((e)=>(0, sr.o1)(e, t));
    return {
        ...e,
        additionalReadonlyPaths: r,
        additionalReadPaths: n,
        additionalReadwritePaths: o
    };
}
function cr(e) {
    try {
        return u(e, []).cmd !== e;
    } catch (e) {
        return !1;
    }
}
function ur() {
    if ("win32" !== process.platform) return;
    if (!process.env.MSYSTEM) return;
    const e = process.env.EXEPATH;
    if (e) return function(e) {
        const t = e.replace(/[\\/]+$/, ""), r = n.win32.basename(t).toLowerCase();
        return "bash.exe" === r ? t : "bin" === r ? n.win32.join(t, "bash.exe") : n.win32.join(t, "bin", "bash.exe");
    }(e);
    const t = [
        "C:\\Program Files\\Git\\bin\\bash.exe",
        "C:\\Program Files (x86)\\Git\\bin\\bash.exe"
    ];
    for (const e of t)try {
        if (u(e, []).cmd === e) return e;
    } catch  {}
    return "C:\\Program Files\\Git\\bin\\bash.exe";
}
function dr(e) {
    if (e === $e.ZshLight) return $e.ZshLight;
    const t = e || process.env.SHELL || "", r = "win32" === process.platform, n = r && !e ? ur() : void 0, o = void 0 !== n || /git.*bash\.exe$/i.test(t) || /program.*git.*bin.*bash\.exe$/i.test(t), s = !r || o;
    return t.includes("zsh") ? $e.Zsh : t.includes("bash") && s ? $e.Bash : t.includes("pwsh") || t.includes("powershell") ? $e.PowerShell : n ? $e.Bash : r && (cr("pwsh") || cr("powershell")) ? $e.PowerShell : cr("zsh") ? $e.Zsh : cr("bash") && s ? $e.Bash : cr("pwsh") || cr("powershell") ? $e.PowerShell : $e.Naive;
}
function pr(e) {
    let t = e;
    if (!e?.userTerminalHint) {
        const r = ur();
        r && (t = {
            ...e,
            userTerminalHint: r
        });
    }
    switch(dr(t?.userTerminalHint ?? "")){
        case $e.Zsh:
            return new Ot(()=>(async function(e) {
                    const t = {
                        ...process.env,
                        ...qe,
                        ...e?.env
                    }, r = "__CURSOR_STATE_MARKER__", n = [
                        "-o",
                        "extendedglob",
                        "-ilc",
                        `${Ht} builtin printf '${r}\\n'; dump_zsh_state`
                    ], o = Je(Yt(), n, {
                        env: t,
                        stdio: [
                            "ignore",
                            "pipe",
                            "pipe"
                        ],
                        detached: !0
                    }, {
                        type: "insecure_none"
                    }, e?.signal);
                    let s = "";
                    o.stdout?.on("data", (e)=>{
                        s += e.toString();
                    }), o.on("error", (e)=>{
                        console.warn(`[shell-exec] zsh state init spawn failed; falling back to empty state: ${e instanceof Error ? e.message : String(e)}`);
                    }), await new Promise((e)=>{
                        o.on("close", ()=>{
                            e(void 0);
                        });
                    });
                    const i = Ze(s, r), a = `${Jt}\n`, l = `${zt}\n`;
                    let c;
                    i.startsWith(a) && i.endsWith(l) ? (c = i.slice(a.length), c = c.slice(0, -(zt.length + 1))) : c = `${process.cwd()}\n`;
                    const { cwd: u, rest: d } = Ke(c);
                    return new Vt(u, d);
                })(t));
        case $e.Bash:
            return new Ot(()=>(async function(e) {
                    const t = {
                        ...process.env,
                        ...qe,
                        ...e?.env
                    }, r = "__CURSOR_STATE_MARKER__", n = [
                        "-O",
                        "extglob",
                        "-ilc",
                        et + " " + `builtin printf '${r}\\n'; dump_bash_state`
                    ], o = It(e?.userTerminalHint);
                    if (!o) throw new Error("Can't find Bash");
                    const s = Je(o, n, {
                        env: t,
                        detached: !0,
                        stdio: [
                            "ignore",
                            "pipe",
                            "pipe"
                        ]
                    }, {
                        type: "insecure_none"
                    }, e?.signal);
                    let i = "";
                    s.stdout?.on("data", (e)=>{
                        i += e.toString();
                    }), s.on("error", (e)=>{
                        console.warn(`[shell-exec] bash state init spawn failed; falling back to empty state: ${e instanceof Error ? e.message : String(e)}`);
                    }), await new Promise((e)=>{
                        s.on("close", ()=>{
                            e(void 0);
                        });
                    });
                    const a = Ze(i, r), l = `${Xe}\n`, c = `${Qe}\n`;
                    let u;
                    a.startsWith(l) && a.endsWith(c) ? (u = a.slice(l.length), u = u.slice(0, -(Qe.length + 1))) : u = `${process.cwd()}\n`;
                    const { cwd: d, rest: p } = Ke(u), h = "win32" === process.platform, m = "win32" === process.platform ? process.cwd() : d;
                    return new Pt(m, p, e?.userTerminalHint, h);
                })(t));
        case $e.PowerShell:
            return new Ot(()=>(async function() {
                    return new Ut(process.cwd(), "");
                })());
        case $e.ZshLight:
            return new Ot(()=>(async function(e) {
                    const t = {
                        ...process.env,
                        ...qe,
                        ...e?.env
                    }, r = "__CURSOR_STATE_MARKER__", n = [
                        "-o",
                        "extendedglob",
                        "-ilc",
                        `${Zt} builtin printf '${r}\\n'; dump_zsh_state_light`
                    ], o = Je(er(), n, {
                        env: t,
                        stdio: [
                            "ignore",
                            "pipe",
                            "pipe"
                        ],
                        detached: !0
                    }, {
                        type: "insecure_none"
                    }, e?.signal);
                    let s = "";
                    o.stdout?.on("data", (e)=>{
                        s += e.toString();
                    }), o.on("error", (e)=>{
                        console.warn(`[shell-exec] zsh-light state init spawn failed; falling back to empty state: ${e instanceof Error ? e.message : String(e)}`);
                    }), await new Promise((e)=>{
                        o.on("close", ()=>{
                            e(void 0);
                        });
                    });
                    const i = Ze(s, r), a = `${Kt}\n`, l = i.startsWith(a) ? i.slice(a.length) : `${process.cwd()}\n`, { cwd: c, rest: u } = Ke(l);
                    return new tr(c, u);
                })(t));
        default:
            return function(e) {
                const t = "win32" === process.platform, r = e?.shell ?? (t ? Lt() : void 0), n = process.cwd();
                return new jt(n, {
                    ...e,
                    shell: r
                });
            }(t);
    }
}
const hr = {
    perUser: {
        type: "insecure_none"
    }
};

"use strict";
require.d(exports, {
    SandboxUnsupportedError: ()=>Se,
    J: ()=>c,
    St: ()=>Ee,
    getLastSandboxFailureReason: ()=>be,
    K3: ()=>Te,
    resolveSandboxPolicyForWorkspace: ()=>Gt,
    spawnInSandbox: ()=>xe
});
var n = require("./module-6760.js"), o = require("./module-1455.js"), s = require("./module-8161.js"), i = require("./module-1421.js");
require("./module-7075.js");
let a;
function c(e) {
    if (!e) throw new Error("configureRipgrepPath: path must not be empty");
    a = e;
}
function u(e) {
    const t = Object.keys(e).filter((e)=>"path" === e.toLowerCase());
    if (0 !== t.length) return "win32" === process.platform ? t.find((e)=>"Path" === e) ?? t[0] : t.find((e)=>"PATH" === e) ?? t[0];
}
function l(e, t) {
    const r = (0, n.dirname)(t);
    if (!r || "." === r) return e;
    const o = (function(e) {
        const t = u(e);
        return void 0 !== t ? e[t] ?? "" : "";
    })(e).split(n.delimiter).filter(Boolean);
    return function(e, t) {
        const r = u(e) ?? ("win32" === process.platform ? "Path" : "PATH"), n = {
            ...e
        };
        for (const e of Object.keys(n))e !== r && "path" === e.toLowerCase() && delete n[e];
        return n[r] = t, n;
    }(e, [
        r,
        ...o.filter((e)=>e !== r)
    ].join(n.delimiter));
}
function d() {
    if (!a) throw new Error("Ripgrep path not configured. Call configureRipgrepPath() at startup.");
    return a;
}
var p = require("./module-3024.js"), f = require("./module-3015.js");
function h(e) {
    const t = e || process.env, { ELECTRON_RUN_AS_NODE: r, ...n } = t;
    return n;
}
const m = [
    "SSH_AUTH_SOCK",
    "DBUS_SESSION_BUS_ADDRESS",
    "XDG_RUNTIME_DIR",
    "WAYLAND_DISPLAY"
];
function g(e) {
    const t = {
        ...e
    };
    for (const e of m)delete t[e];
    return t;
}
var y = require("./module-7598.js");
function _(e) {
    return e.replace(/[^a-zA-Z0-9]/g, "-").replace(/-+/g, "-").replace(/^-+|-+$/g, "");
}
const v = "cursor-sandbox-cache";
let w;
function b() {
    return w || (w = (0, y.randomBytes)(16).toString("hex")), w;
}
function S(e, t) {
    const r = (0, p.lstatSync)(e);
    return r.isDirectory() && r.uid === t && !(18 & r.mode);
}
function k(e) {
    try {
        (0, p.mkdirSync)(e, {
            mode: 448
        });
    } catch (e) {
        if ("EEXIST" !== e.code) throw e;
    }
}
function E(e, { create: t }) {
    const r = process.getuid?.();
    if (void 0 === r) return;
    const o = (0, n.join)((0, s.tmpdir)(), `cursor-sandbox-${_((0, n.resolve)(e))}`);
    try {
        for (const e of [
            o,
            (0, n.join)(o, "tmp")
        ])if (t && k(e), !S(e, r)) return;
        return o;
    } catch  {
        return;
    }
}
function x(e = (0, n.join)((0, s.tmpdir)(), v, b())) {
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
var T = require("./module-7949.js"), O = require("./module-3002.js"), P = require("./module-3228.js");
require("./module-6613.js");
const I = [
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
], C = [
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
], A = (e, t)=>t.flatMap((t)=>C.map((r)=>({
                platform: e,
                scope: "global",
                path: `${t}/${r}`
            }))), $ = {
    linux: [
        ".cache/node",
        ".cache/yarn"
    ],
    darwin: [
        ".cache/node",
        "Library/Caches/Yarn"
    ]
}, R = (e)=>[
        ...I,
        ...$[e]
    ].map((t)=>({
            platform: e,
            scope: "home-dir",
            path: t
        })), N = [
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
    ...R("linux"),
    ...A("linux", [
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
    ...R("darwin"),
    ...A("darwin", [
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
const M = [
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
M.filter((e)=>"git" === e.type).map((e)=>e.pattern), M.filter((e)=>"workspace" === e.type && e.pattern.startsWith("!") && !e.pattern.endsWith("/**")).map((e)=>e.pattern.replace(/^!(\*\*\/)?/, ""));
function J(e) {
    const t = M.filter((e)=>"workspace" === e.type).map((e)=>e.pattern);
    return {
        [e]: t
    };
}
function j(e) {
    const t = M.filter((e)=>"worktree" === e.type).map((e)=>e.pattern);
    return {
        [e]: t
    };
}
const D = [];
function F(e) {
    const t = function() {
        if (0 !== D.length) return {
            version: 1,
            deny: [
                ...D
            ]
        };
    }(), r = s.homedir(), o = [];
    for (const e of M)switch(e.type){
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
        writeProtectionMapping: J(e),
        ...t && {
            networkPolicy: t
        },
        networkPolicyStrict: !0
    };
}
new Map;
"win32" === process.platform || process.platform;
const q = new WeakMap;
function z(e) {
    return void 0 !== e && ("allow" === e.default || void 0 !== e.allow && e.allow.length > 0);
}
const U = "sandbox-policies", B = "CURSOR_SANDBOX_POLICY_DIR";
const L = 36e5, V = 9e5;
let K = 0;
function Z() {
    const e = function() {
        const e = process.env[B]?.trim();
        return e ? n.resolve(e) : n.resolve(n.join(s.homedir(), ".cursor", U));
    }();
    p.mkdirSync(e, {
        recursive: !0,
        mode: 448
    });
    try {
        p.chmodSync(e, 448);
    } catch  {}
    const t = Date.now();
    return t - K >= V && (K = t, function(e) {
        let t;
        try {
            t = p.readdirSync(e);
        } catch  {
            return;
        }
        const r = Date.now();
        for (const o of t){
            if (!o.startsWith("sandbox-policy-")) continue;
            const t = n.join(e, o);
            try {
                const e = p.statSync(t);
                if (!e.isFile()) continue;
                r - e.mtimeMs > L && p.unlinkSync(t);
            } catch  {}
        }
    }(e)), e;
}
function W(e) {
    const t = Z(), r = y.randomBytes(8).toString("hex"), o = n.join(t, `sandbox-policy-${r}`);
    return p.writeFileSync(o, e, {
        encoding: "utf-8",
        mode: 384
    }), o;
}
const H = "darwin" === process.platform, Y = "linux" === process.platform, G = (0, T.h)("shell-exec:sandbox");
function X(e) {
    const t = Z();
    return e && 0 !== e.length ? e.includes(t) ? e : [
        ...e,
        t
    ] : [
        t
    ];
}
let Q, ee = !0;
function te() {
    return Q;
}
function re(e) {
    "linux" === process.platform && Object.assign(e, function(e) {
        return a && (0, n.isAbsolute)(a) ? {
            ...l(e, a),
            CURSOR_RIPGREP_PATH: a
        } : e;
    }(e));
}
let ne = null, oe = null, se = null, ie = null;
function ae(e = process.platform) {
    const t = [], r = new Set, o = {};
    try {
        o.ripgrep = d();
    } catch  {}
    for (const i of function(e = process.platform, t = s.homedir(), r = {}) {
        const o = [];
        for (const s of N){
            if (s.platform !== e) continue;
            if ("global" === s.scope) {
                o.push(s.path);
                continue;
            }
            const i = "bundled" === s.scope ? r[s.path] : (0, n.join)(t, s.path);
            if (i) try {
                let e;
                switch(s.scope){
                    case "home":
                        e = (0, p.lstatSync)(i).isFile();
                        break;
                    case "home-dir":
                        e = (0, p.lstatSync)(i).isDirectory();
                        break;
                    case "bundled":
                        e = (0, p.statSync)(i).isFile();
                }
                e && o.push(i);
            } catch  {}
        }
        return o;
    }(e, s.homedir(), o))r.has(i) || (r.add(i), t.push(i));
    return t;
}
function ce(e) {
    return {
        ...e,
        additionalReadonlyPaths: X(e.additionalReadonlyPaths)
    };
}
function ue(e, t, r) {
    let o;
    e.ignoreMapping && (o = function(e, t, r, n) {
        return _e(e, t, r, n);
    }(e.ignoreMapping, t, [], []));
    const i = function(e, t, r) {
        const o = e && e.length > 0 ? function(...e) {
            const t = {};
            for (const r of e){
                let e = !1;
                try {
                    e = (0, p.existsSync)(r) && (0, p.statSync)(r).isDirectory();
                } catch  {}
                if (e) t[r] || (t[r] = []), t[r].push("**");
                else {
                    const e = r.lastIndexOf("/"), n = e > 0 ? r.slice(0, e) : "/", o = e >= 0 ? r.slice(e + 1) : r;
                    t[n] || (t[n] = []), o ? t[n].push(o, `${o}/**`) : t[n].push("**");
                }
            }
            return t;
        }(...e) : {}, s = function(e, t = (e)=>p.existsSync(e)) {
            if ((0, P.$f)(e)) return !0;
            let r = n.resolve(e);
            for(;;){
                try {
                    if (t(n.join(r, ".git"))) return !0;
                } catch  {}
                const e = n.dirname(r);
                if (e === r) return !1;
                r = e;
            }
        }(r), i = !Y || s ? t ?? {} : {}, a = {
            ...o
        };
        for (const [e, t] of Object.entries(i))a[e] ? a[e] = [
            ...a[e],
            ...t
        ] : a[e] = t;
        if (0 === Object.keys(a).length) return;
        return _e(a, r, [], []);
    }(e.additionalReadonlyPaths, e.writeProtectionMapping, t), a = (c = e.readBoundary, r?.workspaceReadEnabled ?? function() {
        const e = ee;
        return "function" == typeof e ? e() : e;
    }() ? c ?? "system" : "system");
    var c;
    const u = ae(), l = "workspace" === a ? function(e) {
        const t = [], r = new Set;
        for (const o of e){
            let e = o.trim();
            if (!e) continue;
            "~" === e ? e = s.homedir() : (e.startsWith("~/") || e.startsWith("~\\")) && (e = n.join(s.homedir(), e.slice(2))), e = e.replace(/\/\*\*$/, "").replace(/\/\*$/, ""), e = e.replace(/\\\*\*$/, "").replace(/\\\*$/, "");
            const i = n.basename(e);
            if ((i.includes("*") || i.includes("?")) && (e = n.dirname(e)), !e || "." === e) continue;
            const a = n.normalize(e);
            r.has(a) || (r.add(a), t.push(a));
        }
        return t;
    }(e.additionalReadPaths ?? []) : [], d = [
        ...u
    ], f = new Set(u);
    for (const e of l)f.has(e) || (f.add(e), d.push(e));
    const h = {
        cwd: t,
        readBoundary: a,
        hardcodedReadPaths: d,
        additionalReadonlyPaths: i,
        networkAccess: z(e.networkPolicy),
        ignoreMapping: o
    };
    return "workspace_readonly" === e.type ? {
        type: e.type,
        ...h
    } : {
        type: e.type,
        ...h,
        additionalReadwritePaths: e.additionalReadwritePaths || [],
        disableTmpWrite: e.disableTmpWrite || !1
    };
}
function le(e) {
    if (!("workspace" !== e.readBoundary || "workspace_readwrite" === e.type && e.disableTmpWrite || "win32" === process.platform)) return E(e.cwd, {
        create: !0
    });
}
function de(e, t, r) {
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
        const r = x();
        for (const [n, s] of Object.entries(x(e)))t[n] === r[n] && (o[n] = s);
    }
    return o;
}
function pe(e) {
    if (null !== ne) return !!ne;
    try {
        const t = te();
        return G.info(e, `[checkBinaryAvailable] Resolved binary path: ${t}`), t ? (ne = p.existsSync(t), ne ? G.info(e, `[checkBinaryAvailable] Binary path exists: ${ne}`) : (oe = new Error(`Sandbox binary not found at ${t}`), G.info(e, `[checkBinaryAvailable] Binary not found at: ${t}`)), !!ne) : (oe = new Error("Sandbox binary path was not configured"), ne = !1, G.info(e, "[checkBinaryAvailable] Binary path not set, returning false"), !1);
    } catch (t) {
        return oe = t, ne = !1, G.info(e, `[checkBinaryAvailable] Exception checking binary: ${t}`), !1;
    }
}
function fe(e) {
    if (null !== ie) return ie;
    const t = e ?? (0, O.q6)();
    if (G.info(t, "[isSandboxHelperSupported] Starting sandbox support check..."), !pe(t)) {
        const e = oe?.message || "Binary check failed";
        return se = e, G.info(t, `[isSandboxHelperSupported] Binary not available, returning false. Reason: ${e}`), ie = !1, ie;
    }
    if ("win32" === process.platform) return se = "Windows sandbox helper only provides network proxy, not filesystem isolation", G.info(t, "[isSandboxHelperSupported] win32: returning false (proxy-only, no filesystem sandbox)"), ie = !1, ie;
    if ("darwin" === process.platform) return se = null, G.info(t, `[isSandboxHelperSupported] ${process.platform} platform, binary available, sandbox supported!`), ie = !0, ie;
    const { binaryPath: r, args: n, env: o } = me(t, process.cwd());
    try {
        const e = Date.now();
        (0, f.D9)(i.execFileSync, r, n, {
            stdio: [
                "ignore",
                "ignore",
                "pipe"
            ],
            timeout: he,
            env: o,
            shell: !1
        });
        const s = Date.now() - e;
        return se = null, G.info(t, `[isSandboxHelperSupported] Preflight succeeded in ${s}ms, sandbox supported!`), ie = !0, ie;
    } catch (e) {
        const r = e;
        return ge(t, {
            message: r.message,
            status: r.status,
            stderrText: r.stderr?.toString?.() || ""
        });
    }
}
const he = 15e3;
function me(e, t) {
    const r = {
        sandbox: ue(ce({
            type: "workspace_readwrite"
        }), t)
    }, n = String(te());
    G.info(e, `[sandboxPreflight] Running preflight with binary: ${n}`), G.info(e, `[sandboxPreflight] CWD: ${t}`);
    const o = {
        ...process.env
    };
    re(o);
    return {
        binaryPath: n,
        args: [
            "--policy",
            W(JSON.stringify(r)),
            "--preflight-only",
            "--",
            "/bin/true"
        ],
        env: o
    };
}
function ge(e, t) {
    const { message: r, status: n, stderrText: o } = t;
    return G.error(e, `[sandboxPreflight] Preflight failed: ${r}`), G.error(e, `[sandboxPreflight] Exit status: ${n}`), o && G.error(e, `[sandboxPreflight] Stderr: ${o}`), se = 2 === n ? `Linux preflight failed with exit code 2 (unsupported kernel features). stderr: ${o || "none"}` : `Linux preflight failed: ${r || "unknown error"}. Exit status: ${n}. stderr: ${o || "none"}`, ie = !1, !1;
}
function ye(e, t = [], r = {}, n) {
    const o = (0, O.q6)();
    if (r.env = h(r.env), !pe(o)) throw new Error(`Sandbox binary not available: ${oe?.message || "binary not configured"}. Please build the binary or use 'insecure_none' policy.`);
    if ("insecure_none" === n.type) return (0, f.D9)(i.spawn, e, t, {
        ...r,
        windowsHide: !0
    });
    if ("workspace_readwrite" === n.type || "workspace_readonly" === n.type) return function(e, t, r, n) {
        if ("workspace_readwrite" !== n.type && "workspace_readonly" !== n.type) throw new Error("Expected workspace_readwrite or workspace_readonly policy");
        const o = String(r.cwd ?? process.cwd()), s = n.sandboxWorkspaceRoot ?? o;
        let a = e, c = t;
        if (r.shell) if ("win32" === process.platform) {
            a = "string" == typeof r.shell ? r.shell : "cmd.exe", c = [
                "/c",
                `${e} ${t.join(" ")}`
            ];
        } else {
            a = "string" == typeof r.shell ? r.shell : "/bin/sh", c = [
                "-c",
                `${e} ${t.join(" ")}`
            ];
        }
        const u = ue(ce(n), s), l = le(u);
        l && (u.additionalReadwritePaths = [
            ...u.additionalReadwritePaths ?? [],
            l
        ]);
        const d = function(e) {
            if ("insecure_none" === e.type) return;
            const t = e.networkPolicy;
            if (void 0 === t) return;
            if (!z(t)) return;
            const r = void 0 !== t.deny && t.deny.length > 0;
            return "allow" !== t.default || r ? {
                version: 1,
                ...t
            } : void 0;
        }(n), p = {
            sandbox: u
        };
        void 0 !== d && (p.networkPolicy = d);
        !1 === n.networkPolicyStrict && (p.networkPolicyStrict = !1);
        const h = [
            "--policy",
            W(JSON.stringify(p)),
            "--",
            a,
            ...c
        ], m = "linux" === process.platform ? g(process.env) : process.env, y = "linux" === process.platform && r.env ? g(r.env) : r.env, _ = {
            ...m,
            ...y,
            CURSOR_SANDBOX: "native"
        };
        if (re(_), l) {
            const e = de(l, _, n.enableSharedBuildCache);
            Object.assign(_, e), _.__CURSOR_SANDBOX_OWNED_ENV = Object.keys(e).join(" "), _.__CURSOR_SANDBOX_TEMP_RESTORE = Object.entries(e).map(([e, t])=>`builtin export ${e}='${t.replace(/'/g, "'\\''")}'`).join("; ");
        }
        const v = {
            cwd: r.cwd || o,
            env: _,
            stdio: r.stdio || [
                "pipe",
                "pipe",
                "pipe"
            ],
            detached: r.detached,
            windowsHide: !0
        };
        try {
            const e = new Date, t = (0, f.D9)(i.spawn, String(te()), h, v);
            return H && t.pid && function(e, t) {
                q.set(e, t);
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
function _e(e, t, r, n) {
    const o = {};
    for (const [t, r] of Object.entries(e)){
        const e = t.startsWith("file://") ? ve(t) : t;
        o[e] = r;
        const n = we(e);
        n !== e && (o[n] = r);
    }
    return o;
}
function ve(e) {
    let t = e.replace(/^file:\/\//, "");
    return t = decodeURIComponent(t), t.length > 1 && t.endsWith("/") && (t = t.slice(0, -1)), t;
}
function we(e, t) {
    if ((0, P.$f)(e)) return e;
    try {
        return (t ?? p.realpathSync)(e);
    } catch  {
        return e;
    }
}
function be() {
    return se;
}
class Se extends Error {
    reason;
    constructor(e, t){
        super(e), this.reason = t, this.name = "SandboxUnsupportedError";
    }
}
const ke = "darwin" === process.platform;
function Ee(e) {
    !function(e) {
        d();
        const { sandboxBinaryPath: t, workspaceReadEnabled: r } = e;
        Q || (Q = t), void 0 !== r && (ee = r);
    }(e);
}
function xe(e, t = [], r = {}, n) {
    if (r.env = h(r.env), n.enableSharedBuildCache && (r = {
        ...r,
        env: {
            ...h(process.env),
            ...x(),
            ...r.env
        }
    }), "insecure_none" !== n.type) {
        if (fe()) return ye(e, t, r, n);
        const o = be();
        throw new Se(`Sandbox policy '${n.type}' is not supported on this system. Ensure the sandbox helper binary is available, or use 'insecure_none'. Reason: ${o || "unknown"}`, o ?? void 0);
    }
    return function(e, t, r) {
        return (0, f.D9)(i.spawn, e, t, {
            ...r,
            windowsHide: !0
        });
    }(e, t, r);
}
function Te(e, t) {
    if (ke) try {
        (0, p.accessSync)("/usr/bin/sandbox-exec", p.constants.X_OK);
    } catch  {
        return !1;
    }
    return fe(t?.ctx);
}
var Oe;
!function(e) {
    e.Zsh = "zsh", e.ZshLight = "zsh-light", e.Bash = "bash", e.PowerShell = "powershell", e.Naive = "naive";
}(Oe || (Oe = {}));
var Pe, Ie, Ce, Ae, $e, Re, Ne, Me, Je, je, De, Fe, qe, ze, Ue, Be, Le, Ve, Ke, Ze, We, He, Ye, Ge, Xe, Qe, et, tt, rt, nt, ot, st, it, at, ct, ut, lt, dt, pt, ft, ht, mt, gt, yt, _t, vt, wt, bt, St, kt = require("./module-7357.js"), Et = require("./module-91.js"), xt = function(e, t, r, n, o) {
    if ("m" === n) throw new TypeError("Private method is not writable");
    if ("a" === n && !o) throw new TypeError("Private accessor was defined without a setter");
    if ("function" == typeof t ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return "a" === n ? o.call(e, r) : o ? o.value = r : t.set(e, r), r;
}, Tt = function(e, t, r, n) {
    if ("a" === r && !n) throw new TypeError("Private accessor was defined without a getter");
    if ("function" == typeof t ? e !== t || !n : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e);
};
const Ot = "object" == typeof performance && performance && "function" == typeof performance.now ? performance : Date, Pt = new Set, It = "object" == typeof process && process ? process : {}, Ct = (e, t, r, n)=>{
    "function" == typeof It.emitWarning ? It.emitWarning(e, t, r, n) : console.error(`[${r}] ${t}: ${e}`);
};
let At = globalThis.AbortController, $t = globalThis.AbortSignal;
if (void 0 === At) {
    $t = class {
        constructor(){
            this._onabort = [], this.aborted = !1;
        }
        addEventListener(e, t) {
            this._onabort.push(t);
        }
    }, At = class {
        constructor(){
            this.signal = new $t, t();
        }
        abort(e) {
            if (!this.signal.aborted) {
                this.signal.reason = e, this.signal.aborted = !0;
                for (const t of this.signal._onabort)t(e);
                this.signal.onabort?.(e);
            }
        }
    };
    let e = "1" !== It.env?.LRU_CACHE_IGNORE_AC_WARNING;
    const t = ()=>{
        e && (e = !1, Ct("AbortController is not defined. If using lru-cache in node 14, load an AbortController polyfill from the `node-abort-controller` package. A minimal polyfill is provided for use by LRUCache.fetch(), but it should not be relied upon in other contexts (eg, passing it to other APIs that use AbortController/AbortSignal might have undesirable effects). You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.", "NO_ABORT_CONTROLLER", "ENOTSUP", t));
    };
}
Symbol("type");
const Rt = (e)=>e && e === Math.floor(e) && e > 0 && Number.isFinite(e), Nt = (e)=>Rt(e) ? e <= 256 ? Uint8Array : e <= 65536 ? Uint16Array : e <= 2 ** 32 ? Uint32Array : e <= Number.MAX_SAFE_INTEGER ? Mt : null : null;
class Mt extends Array {
    constructor(e){
        super(e), this.fill(0);
    }
}
class Jt {
    static create(e) {
        const t = Nt(e);
        if (!t) return [];
        xt(Pe, Pe, !0, "f", Ie);
        const r = new Pe(e, t);
        return xt(Pe, Pe, !1, "f", Ie), r;
    }
    constructor(e, t){
        if (!Tt(Pe, Pe, "f", Ie)) throw new TypeError("instantiate Stack using Stack.create(n)");
        this.heap = new t(e), this.length = 0;
    }
    push(e) {
        this.heap[this.length++] = e;
    }
    pop() {
        return this.heap[--this.length];
    }
}
Pe = Jt, Ie = {
    value: !1
};
class jt {
    get perf() {
        return Tt(this, De, "f");
    }
    static unsafeExposeInternals(e) {
        return {
            starts: Tt(e, Ge, "f"),
            ttls: Tt(e, Xe, "f"),
            sizes: Tt(e, Ye, "f"),
            keyMap: Tt(e, ze, "f"),
            keyList: Tt(e, Ue, "f"),
            valList: Tt(e, Be, "f"),
            next: Tt(e, Le, "f"),
            prev: Tt(e, Ve, "f"),
            get head () {
                return Tt(e, Ke, "f");
            },
            get tail () {
                return Tt(e, Ze, "f");
            },
            free: Tt(e, We, "f"),
            isBackgroundFetch: (t)=>Tt(e, Ce, "m", yt).call(e, t),
            backgroundFetch: (t, r, n, o)=>Tt(e, Ce, "m", gt).call(e, t, r, n, o),
            moveToTail: (t)=>Tt(e, Ce, "m", vt).call(e, t),
            indexes: (t)=>Tt(e, Ce, "m", pt).call(e, t),
            rindexes: (t)=>Tt(e, Ce, "m", ft).call(e, t),
            isStale: (t)=>Tt(e, at, "f").call(e, t)
        };
    }
    get max() {
        return Tt(this, Ae, "f");
    }
    get maxSize() {
        return Tt(this, $e, "f");
    }
    get calculatedSize() {
        return Tt(this, qe, "f");
    }
    get size() {
        return Tt(this, Fe, "f");
    }
    get fetchMethod() {
        return Tt(this, Je, "f");
    }
    get memoMethod() {
        return Tt(this, je, "f");
    }
    get dispose() {
        return Tt(this, Re, "f");
    }
    get onInsert() {
        return Tt(this, Ne, "f");
    }
    get disposeAfter() {
        return Tt(this, Me, "f");
    }
    constructor(e){
        Ce.add(this), Ae.set(this, void 0), $e.set(this, void 0), Re.set(this, void 0), Ne.set(this, void 0), Me.set(this, void 0), Je.set(this, void 0), je.set(this, void 0), De.set(this, void 0), Fe.set(this, void 0), qe.set(this, void 0), ze.set(this, void 0), Ue.set(this, void 0), Be.set(this, void 0), Le.set(this, void 0), Ve.set(this, void 0), Ke.set(this, void 0), Ze.set(this, void 0), We.set(this, void 0), He.set(this, void 0), Ye.set(this, void 0), Ge.set(this, void 0), Xe.set(this, void 0), Qe.set(this, void 0), et.set(this, void 0), tt.set(this, void 0), rt.set(this, void 0), ot.set(this, ()=>{}), st.set(this, ()=>{}), it.set(this, ()=>{}), at.set(this, ()=>!1), ut.set(this, (e)=>{}), lt.set(this, (e, t, r)=>{}), dt.set(this, (e, t, r, n)=>{
            if (r || n) throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache");
            return 0;
        }), this[St] = "LRUCache";
        const { max: t = 0, ttl: r, ttlResolution: n = 1, ttlAutopurge: o, updateAgeOnGet: s, updateAgeOnHas: i, allowStale: a, dispose: c, onInsert: u, disposeAfter: l, noDisposeOnSet: d, noUpdateTTL: p, maxSize: f = 0, maxEntrySize: h = 0, sizeCalculation: m, fetchMethod: g, memoMethod: y, noDeleteOnFetchRejection: _, noDeleteOnStaleGet: v, allowStaleOnFetchRejection: w, allowStaleOnFetchAbort: b, ignoreFetchAbort: S, perf: k } = e;
        if (void 0 !== k && "function" != typeof k?.now) throw new TypeError("perf option must have a now() method if specified");
        if (xt(this, De, k ?? Ot, "f"), 0 !== t && !Rt(t)) throw new TypeError("max option must be a nonnegative integer");
        const E = t ? Nt(t) : Array;
        if (!E) throw new Error(`invalid max value: ${t}`);
        if (xt(this, Ae, t, "f"), xt(this, $e, f, "f"), this.maxEntrySize = h || Tt(this, $e, "f"), this.sizeCalculation = m, this.sizeCalculation) {
            if (!Tt(this, $e, "f") && !this.maxEntrySize) throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");
            if ("function" != typeof this.sizeCalculation) throw new TypeError("sizeCalculation set to non-function");
        }
        if (void 0 !== y && "function" != typeof y) throw new TypeError("memoMethod must be a function if defined");
        if (xt(this, je, y, "f"), void 0 !== g && "function" != typeof g) throw new TypeError("fetchMethod must be a function if specified");
        if (xt(this, Je, g, "f"), xt(this, et, !!g, "f"), xt(this, ze, new Map, "f"), xt(this, Ue, new Array(t).fill(void 0), "f"), xt(this, Be, new Array(t).fill(void 0), "f"), xt(this, Le, new E(t), "f"), xt(this, Ve, new E(t), "f"), xt(this, Ke, 0, "f"), xt(this, Ze, 0, "f"), xt(this, We, Jt.create(t), "f"), xt(this, Fe, 0, "f"), xt(this, qe, 0, "f"), "function" == typeof c && xt(this, Re, c, "f"), "function" == typeof u && xt(this, Ne, u, "f"), "function" == typeof l ? (xt(this, Me, l, "f"), xt(this, He, [], "f")) : (xt(this, Me, void 0, "f"), xt(this, He, void 0, "f")), xt(this, Qe, !!Tt(this, Re, "f"), "f"), xt(this, rt, !!Tt(this, Ne, "f"), "f"), xt(this, tt, !!Tt(this, Me, "f"), "f"), this.noDisposeOnSet = !!d, this.noUpdateTTL = !!p, this.noDeleteOnFetchRejection = !!_, this.allowStaleOnFetchRejection = !!w, this.allowStaleOnFetchAbort = !!b, this.ignoreFetchAbort = !!S, 0 !== this.maxEntrySize) {
            if (0 !== Tt(this, $e, "f") && !Rt(Tt(this, $e, "f"))) throw new TypeError("maxSize must be a positive integer if specified");
            if (!Rt(this.maxEntrySize)) throw new TypeError("maxEntrySize must be a positive integer if specified");
            Tt(this, Ce, "m", ct).call(this);
        }
        if (this.allowStale = !!a, this.noDeleteOnStaleGet = !!v, this.updateAgeOnGet = !!s, this.updateAgeOnHas = !!i, this.ttlResolution = Rt(n) || 0 === n ? n : 1, this.ttlAutopurge = !!o, this.ttl = r || 0, this.ttl) {
            if (!Rt(this.ttl)) throw new TypeError("ttl must be a positive integer if specified");
            Tt(this, Ce, "m", nt).call(this);
        }
        if (0 === Tt(this, Ae, "f") && 0 === this.ttl && 0 === Tt(this, $e, "f")) throw new TypeError("At least one of max, maxSize, or ttl is required");
        if (!this.ttlAutopurge && !Tt(this, Ae, "f") && !Tt(this, $e, "f")) {
            const e = "LRU_CACHE_UNBOUNDED";
            if (((e)=>!Pt.has(e))(e)) {
                Pt.add(e);
                Ct("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.", "UnboundedCacheWarning", e, jt);
            }
        }
    }
    getRemainingTTL(e) {
        return Tt(this, ze, "f").has(e) ? 1 / 0 : 0;
    }
    *entries() {
        for (const e of Tt(this, Ce, "m", pt).call(this))void 0 === Tt(this, Be, "f")[e] || void 0 === Tt(this, Ue, "f")[e] || Tt(this, Ce, "m", yt).call(this, Tt(this, Be, "f")[e]) || (yield [
            Tt(this, Ue, "f")[e],
            Tt(this, Be, "f")[e]
        ]);
    }
    *rentries() {
        for (const e of Tt(this, Ce, "m", ft).call(this))void 0 === Tt(this, Be, "f")[e] || void 0 === Tt(this, Ue, "f")[e] || Tt(this, Ce, "m", yt).call(this, Tt(this, Be, "f")[e]) || (yield [
            Tt(this, Ue, "f")[e],
            Tt(this, Be, "f")[e]
        ]);
    }
    *keys() {
        for (const e of Tt(this, Ce, "m", pt).call(this)){
            const t = Tt(this, Ue, "f")[e];
            void 0 === t || Tt(this, Ce, "m", yt).call(this, Tt(this, Be, "f")[e]) || (yield t);
        }
    }
    *rkeys() {
        for (const e of Tt(this, Ce, "m", ft).call(this)){
            const t = Tt(this, Ue, "f")[e];
            void 0 === t || Tt(this, Ce, "m", yt).call(this, Tt(this, Be, "f")[e]) || (yield t);
        }
    }
    *values() {
        for (const e of Tt(this, Ce, "m", pt).call(this)){
            void 0 === Tt(this, Be, "f")[e] || Tt(this, Ce, "m", yt).call(this, Tt(this, Be, "f")[e]) || (yield Tt(this, Be, "f")[e]);
        }
    }
    *rvalues() {
        for (const e of Tt(this, Ce, "m", ft).call(this)){
            void 0 === Tt(this, Be, "f")[e] || Tt(this, Ce, "m", yt).call(this, Tt(this, Be, "f")[e]) || (yield Tt(this, Be, "f")[e]);
        }
    }
    [(Ae = new WeakMap, $e = new WeakMap, Re = new WeakMap, Ne = new WeakMap, Me = new WeakMap, Je = new WeakMap, je = new WeakMap, De = new WeakMap, Fe = new WeakMap, qe = new WeakMap, ze = new WeakMap, Ue = new WeakMap, Be = new WeakMap, Le = new WeakMap, Ve = new WeakMap, Ke = new WeakMap, Ze = new WeakMap, We = new WeakMap, He = new WeakMap, Ye = new WeakMap, Ge = new WeakMap, Xe = new WeakMap, Qe = new WeakMap, et = new WeakMap, tt = new WeakMap, rt = new WeakMap, ot = new WeakMap, st = new WeakMap, it = new WeakMap, at = new WeakMap, ut = new WeakMap, lt = new WeakMap, dt = new WeakMap, Ce = new WeakSet, nt = function() {
        const e = new Mt(Tt(this, Ae, "f")), t = new Mt(Tt(this, Ae, "f"));
        xt(this, Xe, e, "f"), xt(this, Ge, t, "f"), xt(this, it, (r, n, o = Tt(this, De, "f").now())=>{
            if (t[r] = 0 !== n ? o : 0, e[r] = n, 0 !== n && this.ttlAutopurge) {
                const e = setTimeout(()=>{
                    Tt(this, at, "f").call(this, r) && Tt(this, Ce, "m", wt).call(this, Tt(this, Ue, "f")[r], "expire");
                }, n + 1);
                e.unref && e.unref();
            }
        }, "f"), xt(this, ot, (r)=>{
            t[r] = 0 !== e[r] ? Tt(this, De, "f").now() : 0;
        }, "f"), xt(this, st, (o, s)=>{
            if (e[s]) {
                const i = e[s], a = t[s];
                if (!i || !a) return;
                o.ttl = i, o.start = a, o.now = r || n();
                const c = o.now - a;
                o.remainingTTL = i - c;
            }
        }, "f");
        let r = 0;
        const n = ()=>{
            const e = Tt(this, De, "f").now();
            if (this.ttlResolution > 0) {
                r = e;
                const t = setTimeout(()=>{
                    r = 0;
                }, this.ttlResolution);
                t.unref && t.unref();
            }
            return e;
        };
        this.getRemainingTTL = (o)=>{
            const s = Tt(this, ze, "f").get(o);
            if (void 0 === s) return 0;
            const i = e[s], a = t[s];
            if (!i || !a) return 1 / 0;
            return i - ((r || n()) - a);
        }, xt(this, at, (o)=>{
            const s = t[o], i = e[o];
            return !!i && !!s && (r || n()) - s > i;
        }, "f");
    }, ct = function() {
        const e = new Mt(Tt(this, Ae, "f"));
        xt(this, qe, 0, "f"), xt(this, Ye, e, "f"), xt(this, ut, (t)=>{
            xt(this, qe, Tt(this, qe, "f") - e[t], "f"), e[t] = 0;
        }, "f"), xt(this, dt, (e, t, r, n)=>{
            if (Tt(this, Ce, "m", yt).call(this, t)) return 0;
            if (!Rt(r)) {
                if (!n) throw new TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");
                if ("function" != typeof n) throw new TypeError("sizeCalculation must be a function");
                if (r = n(t, e), !Rt(r)) throw new TypeError("sizeCalculation return invalid (expect positive integer)");
            }
            return r;
        }, "f"), xt(this, lt, (t, r, n)=>{
            if (e[t] = r, Tt(this, $e, "f")) {
                const r = Tt(this, $e, "f") - e[t];
                for(; Tt(this, qe, "f") > r;)Tt(this, Ce, "m", mt).call(this, !0);
            }
            xt(this, qe, Tt(this, qe, "f") + e[t], "f"), n && (n.entrySize = r, n.totalCalculatedSize = Tt(this, qe, "f"));
        }, "f");
    }, pt = function*({ allowStale: e = this.allowStale } = {}) {
        if (Tt(this, Fe, "f")) for(let t = Tt(this, Ze, "f"); Tt(this, Ce, "m", ht).call(this, t) && (!e && Tt(this, at, "f").call(this, t) || (yield t), t !== Tt(this, Ke, "f"));)t = Tt(this, Ve, "f")[t];
    }, ft = function*({ allowStale: e = this.allowStale } = {}) {
        if (Tt(this, Fe, "f")) for(let t = Tt(this, Ke, "f"); Tt(this, Ce, "m", ht).call(this, t) && (!e && Tt(this, at, "f").call(this, t) || (yield t), t !== Tt(this, Ze, "f"));)t = Tt(this, Le, "f")[t];
    }, ht = function(e) {
        return void 0 !== e && Tt(this, ze, "f").get(Tt(this, Ue, "f")[e]) === e;
    }, Symbol.iterator)]() {
        return this.entries();
    }
    find(e, t = {}) {
        for (const r of Tt(this, Ce, "m", pt).call(this)){
            const n = Tt(this, Be, "f")[r], o = Tt(this, Ce, "m", yt).call(this, n) ? n.__staleWhileFetching : n;
            if (void 0 !== o && e(o, Tt(this, Ue, "f")[r], this)) return this.get(Tt(this, Ue, "f")[r], t);
        }
    }
    forEach(e, t = this) {
        for (const r of Tt(this, Ce, "m", pt).call(this)){
            const n = Tt(this, Be, "f")[r], o = Tt(this, Ce, "m", yt).call(this, n) ? n.__staleWhileFetching : n;
            void 0 !== o && e.call(t, o, Tt(this, Ue, "f")[r], this);
        }
    }
    rforEach(e, t = this) {
        for (const r of Tt(this, Ce, "m", ft).call(this)){
            const n = Tt(this, Be, "f")[r], o = Tt(this, Ce, "m", yt).call(this, n) ? n.__staleWhileFetching : n;
            void 0 !== o && e.call(t, o, Tt(this, Ue, "f")[r], this);
        }
    }
    purgeStale() {
        let e = !1;
        for (const t of Tt(this, Ce, "m", ft).call(this, {
            allowStale: !0
        }))Tt(this, at, "f").call(this, t) && (Tt(this, Ce, "m", wt).call(this, Tt(this, Ue, "f")[t], "expire"), e = !0);
        return e;
    }
    info(e) {
        const t = Tt(this, ze, "f").get(e);
        if (void 0 === t) return;
        const r = Tt(this, Be, "f")[t], n = Tt(this, Ce, "m", yt).call(this, r) ? r.__staleWhileFetching : r;
        if (void 0 === n) return;
        const o = {
            value: n
        };
        if (Tt(this, Xe, "f") && Tt(this, Ge, "f")) {
            const e = Tt(this, Xe, "f")[t], r = Tt(this, Ge, "f")[t];
            if (e && r) {
                const t = e - (Tt(this, De, "f").now() - r);
                o.ttl = t, o.start = Date.now();
            }
        }
        return Tt(this, Ye, "f") && (o.size = Tt(this, Ye, "f")[t]), o;
    }
    dump() {
        const e = [];
        for (const t of Tt(this, Ce, "m", pt).call(this, {
            allowStale: !0
        })){
            const r = Tt(this, Ue, "f")[t], n = Tt(this, Be, "f")[t], o = Tt(this, Ce, "m", yt).call(this, n) ? n.__staleWhileFetching : n;
            if (void 0 === o || void 0 === r) continue;
            const s = {
                value: o
            };
            if (Tt(this, Xe, "f") && Tt(this, Ge, "f")) {
                s.ttl = Tt(this, Xe, "f")[t];
                const e = Tt(this, De, "f").now() - Tt(this, Ge, "f")[t];
                s.start = Math.floor(Date.now() - e);
            }
            Tt(this, Ye, "f") && (s.size = Tt(this, Ye, "f")[t]), e.unshift([
                r,
                s
            ]);
        }
        return e;
    }
    load(e) {
        this.clear();
        for (const [t, r] of e){
            if (r.start) {
                const e = Date.now() - r.start;
                r.start = Tt(this, De, "f").now() - e;
            }
            this.set(t, r.value, r);
        }
    }
    set(e, t, r = {}) {
        var n;
        if (void 0 === t) return this.delete(e), this;
        const { ttl: o = this.ttl, start: s, noDisposeOnSet: i = this.noDisposeOnSet, sizeCalculation: a = this.sizeCalculation, status: c } = r;
        let { noUpdateTTL: u = this.noUpdateTTL } = r;
        const l = Tt(this, dt, "f").call(this, e, t, r.size || 0, a);
        if (this.maxEntrySize && l > this.maxEntrySize) return c && (c.set = "miss", c.maxEntrySizeExceeded = !0), Tt(this, Ce, "m", wt).call(this, e, "set"), this;
        let d = 0 === Tt(this, Fe, "f") ? void 0 : Tt(this, ze, "f").get(e);
        if (void 0 === d) d = 0 === Tt(this, Fe, "f") ? Tt(this, Ze, "f") : 0 !== Tt(this, We, "f").length ? Tt(this, We, "f").pop() : Tt(this, Fe, "f") === Tt(this, Ae, "f") ? Tt(this, Ce, "m", mt).call(this, !1) : Tt(this, Fe, "f"), Tt(this, Ue, "f")[d] = e, Tt(this, Be, "f")[d] = t, Tt(this, ze, "f").set(e, d), Tt(this, Le, "f")[Tt(this, Ze, "f")] = d, Tt(this, Ve, "f")[d] = Tt(this, Ze, "f"), xt(this, Ze, d, "f"), xt(this, Fe, (n = Tt(this, Fe, "f"), ++n), "f"), Tt(this, lt, "f").call(this, d, l, c), c && (c.set = "add"), u = !1, Tt(this, rt, "f") && Tt(this, Ne, "f")?.call(this, t, e, "add");
        else {
            Tt(this, Ce, "m", vt).call(this, d);
            const r = Tt(this, Be, "f")[d];
            if (t !== r) {
                if (Tt(this, et, "f") && Tt(this, Ce, "m", yt).call(this, r)) {
                    r.__abortController.abort(new Error("replaced"));
                    const { __staleWhileFetching: t } = r;
                    void 0 === t || i || (Tt(this, Qe, "f") && Tt(this, Re, "f")?.call(this, t, e, "set"), Tt(this, tt, "f") && Tt(this, He, "f")?.push([
                        t,
                        e,
                        "set"
                    ]));
                } else i || (Tt(this, Qe, "f") && Tt(this, Re, "f")?.call(this, r, e, "set"), Tt(this, tt, "f") && Tt(this, He, "f")?.push([
                    r,
                    e,
                    "set"
                ]));
                if (Tt(this, ut, "f").call(this, d), Tt(this, lt, "f").call(this, d, l, c), Tt(this, Be, "f")[d] = t, c) {
                    c.set = "replace";
                    const e = r && Tt(this, Ce, "m", yt).call(this, r) ? r.__staleWhileFetching : r;
                    void 0 !== e && (c.oldValue = e);
                }
            } else c && (c.set = "update");
            Tt(this, rt, "f") && this.onInsert?.(t, e, t === r ? "update" : "replace");
        }
        if (0 === o || Tt(this, Xe, "f") || Tt(this, Ce, "m", nt).call(this), Tt(this, Xe, "f") && (u || Tt(this, it, "f").call(this, d, o, s), c && Tt(this, st, "f").call(this, c, d)), !i && Tt(this, tt, "f") && Tt(this, He, "f")) {
            const e = Tt(this, He, "f");
            let t;
            for(; t = e?.shift();)Tt(this, Me, "f")?.call(this, ...t);
        }
        return this;
    }
    pop() {
        try {
            for(; Tt(this, Fe, "f");){
                const e = Tt(this, Be, "f")[Tt(this, Ke, "f")];
                if (Tt(this, Ce, "m", mt).call(this, !0), Tt(this, Ce, "m", yt).call(this, e)) {
                    if (e.__staleWhileFetching) return e.__staleWhileFetching;
                } else if (void 0 !== e) return e;
            }
            return;
        } finally{
            if (Tt(this, tt, "f") && Tt(this, He, "f")) {
                const e = Tt(this, He, "f");
                let t;
                for(; t = e?.shift();)Tt(this, Me, "f")?.call(this, ...t);
            }
        }
    }
    has(e, t = {}) {
        const { updateAgeOnHas: r = this.updateAgeOnHas, status: n } = t, o = Tt(this, ze, "f").get(e);
        if (void 0 !== o) {
            const e = Tt(this, Be, "f")[o];
            if (Tt(this, Ce, "m", yt).call(this, e) && void 0 === e.__staleWhileFetching) return !1;
            if (!Tt(this, at, "f").call(this, o)) return r && Tt(this, ot, "f").call(this, o), n && (n.has = "hit", Tt(this, st, "f").call(this, n, o)), !0;
            n && (n.has = "stale", Tt(this, st, "f").call(this, n, o));
        } else n && (n.has = "miss");
        return !1;
    }
    peek(e, t = {}) {
        const { allowStale: r = this.allowStale } = t, n = Tt(this, ze, "f").get(e);
        if (void 0 === n || !r && Tt(this, at, "f").call(this, n)) return;
        const o = Tt(this, Be, "f")[n];
        return Tt(this, Ce, "m", yt).call(this, o) ? o.__staleWhileFetching : o;
    }
    async fetch(e, t = {}) {
        const { allowStale: r = this.allowStale, updateAgeOnGet: n = this.updateAgeOnGet, noDeleteOnStaleGet: o = this.noDeleteOnStaleGet, ttl: s = this.ttl, noDisposeOnSet: i = this.noDisposeOnSet, size: a = 0, sizeCalculation: c = this.sizeCalculation, noUpdateTTL: u = this.noUpdateTTL, noDeleteOnFetchRejection: l = this.noDeleteOnFetchRejection, allowStaleOnFetchRejection: d = this.allowStaleOnFetchRejection, ignoreFetchAbort: p = this.ignoreFetchAbort, allowStaleOnFetchAbort: f = this.allowStaleOnFetchAbort, context: h, forceRefresh: m = !1, status: g, signal: y } = t;
        if (!Tt(this, et, "f")) return g && (g.fetch = "get"), this.get(e, {
            allowStale: r,
            updateAgeOnGet: n,
            noDeleteOnStaleGet: o,
            status: g
        });
        const _ = {
            allowStale: r,
            updateAgeOnGet: n,
            noDeleteOnStaleGet: o,
            ttl: s,
            noDisposeOnSet: i,
            size: a,
            sizeCalculation: c,
            noUpdateTTL: u,
            noDeleteOnFetchRejection: l,
            allowStaleOnFetchRejection: d,
            allowStaleOnFetchAbort: f,
            ignoreFetchAbort: p,
            status: g,
            signal: y
        }, v = Tt(this, ze, "f").get(e);
        if (void 0 === v) {
            g && (g.fetch = "miss");
            const t = Tt(this, Ce, "m", gt).call(this, e, v, _, h);
            return t.__returned = t;
        }
        {
            const t = Tt(this, Be, "f")[v];
            if (Tt(this, Ce, "m", yt).call(this, t)) {
                const e = r && void 0 !== t.__staleWhileFetching;
                return g && (g.fetch = "inflight", e && (g.returnedStale = !0)), e ? t.__staleWhileFetching : t.__returned = t;
            }
            const o = Tt(this, at, "f").call(this, v);
            if (!m && !o) return g && (g.fetch = "hit"), Tt(this, Ce, "m", vt).call(this, v), n && Tt(this, ot, "f").call(this, v), g && Tt(this, st, "f").call(this, g, v), t;
            const s = Tt(this, Ce, "m", gt).call(this, e, v, _, h), i = void 0 !== s.__staleWhileFetching && r;
            return g && (g.fetch = o ? "stale" : "refresh", i && o && (g.returnedStale = !0)), i ? s.__staleWhileFetching : s.__returned = s;
        }
    }
    async forceFetch(e, t = {}) {
        const r = await this.fetch(e, t);
        if (void 0 === r) throw new Error("fetch() returned undefined");
        return r;
    }
    memo(e, t = {}) {
        const r = Tt(this, je, "f");
        if (!r) throw new Error("no memoMethod provided to constructor");
        const { context: n, forceRefresh: o, ...s } = t, i = this.get(e, s);
        if (!o && void 0 !== i) return i;
        const a = r(e, i, {
            options: s,
            context: n
        });
        return this.set(e, a, s), a;
    }
    get(e, t = {}) {
        const { allowStale: r = this.allowStale, updateAgeOnGet: n = this.updateAgeOnGet, noDeleteOnStaleGet: o = this.noDeleteOnStaleGet, status: s } = t, i = Tt(this, ze, "f").get(e);
        if (void 0 !== i) {
            const t = Tt(this, Be, "f")[i], a = Tt(this, Ce, "m", yt).call(this, t);
            return s && Tt(this, st, "f").call(this, s, i), Tt(this, at, "f").call(this, i) ? (s && (s.get = "stale"), a ? (s && r && void 0 !== t.__staleWhileFetching && (s.returnedStale = !0), r ? t.__staleWhileFetching : void 0) : (o || Tt(this, Ce, "m", wt).call(this, e, "expire"), s && r && (s.returnedStale = !0), r ? t : void 0)) : (s && (s.get = "hit"), a ? t.__staleWhileFetching : (Tt(this, Ce, "m", vt).call(this, i), n && Tt(this, ot, "f").call(this, i), t));
        }
        s && (s.get = "miss");
    }
    delete(e) {
        return Tt(this, Ce, "m", wt).call(this, e, "delete");
    }
    clear() {
        Tt(this, Ce, "m", bt).call(this, "delete");
    }
}
St = Symbol.toStringTag, mt = function(e) {
    var t;
    const r = Tt(this, Ke, "f"), n = Tt(this, Ue, "f")[r], o = Tt(this, Be, "f")[r];
    return Tt(this, et, "f") && Tt(this, Ce, "m", yt).call(this, o) ? o.__abortController.abort(new Error("evicted")) : (Tt(this, Qe, "f") || Tt(this, tt, "f")) && (Tt(this, Qe, "f") && Tt(this, Re, "f")?.call(this, o, n, "evict"), Tt(this, tt, "f") && Tt(this, He, "f")?.push([
        o,
        n,
        "evict"
    ])), Tt(this, ut, "f").call(this, r), e && (Tt(this, Ue, "f")[r] = void 0, Tt(this, Be, "f")[r] = void 0, Tt(this, We, "f").push(r)), 1 === Tt(this, Fe, "f") ? (xt(this, Ke, xt(this, Ze, 0, "f"), "f"), Tt(this, We, "f").length = 0) : xt(this, Ke, Tt(this, Le, "f")[r], "f"), Tt(this, ze, "f").delete(n), xt(this, Fe, (t = Tt(this, Fe, "f"), --t), "f"), r;
}, gt = function(e, t, r, n) {
    const o = void 0 === t ? void 0 : Tt(this, Be, "f")[t];
    if (Tt(this, Ce, "m", yt).call(this, o)) return o;
    const s = new At, { signal: i } = r;
    i?.addEventListener("abort", ()=>s.abort(i.reason), {
        signal: s.signal
    });
    const a = {
        signal: s.signal,
        options: r,
        context: n
    }, c = (n, o = !1)=>{
        const { aborted: i } = s.signal, c = r.ignoreFetchAbort && void 0 !== n;
        if (r.status && (i && !o ? (r.status.fetchAborted = !0, r.status.fetchError = s.signal.reason, c && (r.status.fetchAbortIgnored = !0)) : r.status.fetchResolved = !0), i && !c && !o) return u(s.signal.reason);
        const d = l, p = Tt(this, Be, "f")[t];
        return (p === l || c && o && void 0 === p) && (void 0 === n ? void 0 !== d.__staleWhileFetching ? Tt(this, Be, "f")[t] = d.__staleWhileFetching : Tt(this, Ce, "m", wt).call(this, e, "fetch") : (r.status && (r.status.fetchUpdated = !0), this.set(e, n, a.options))), n;
    }, u = (n)=>{
        const { aborted: o } = s.signal, i = o && r.allowStaleOnFetchAbort, a = i || r.allowStaleOnFetchRejection, c = a || r.noDeleteOnFetchRejection, u = l;
        if (Tt(this, Be, "f")[t] === l) {
            !c || void 0 === u.__staleWhileFetching ? Tt(this, Ce, "m", wt).call(this, e, "fetch") : i || (Tt(this, Be, "f")[t] = u.__staleWhileFetching);
        }
        if (a) return r.status && void 0 !== u.__staleWhileFetching && (r.status.returnedStale = !0), u.__staleWhileFetching;
        if (u.__returned === u) throw n;
    };
    r.status && (r.status.fetchDispatched = !0);
    const l = new Promise((t, n)=>{
        const i = Tt(this, Je, "f")?.call(this, e, o, a);
        i && i instanceof Promise && i.then((e)=>t(void 0 === e ? void 0 : e), n), s.signal.addEventListener("abort", ()=>{
            r.ignoreFetchAbort && !r.allowStaleOnFetchAbort || (t(void 0), r.allowStaleOnFetchAbort && (t = (e)=>c(e, !0)));
        });
    }).then(c, (e)=>(r.status && (r.status.fetchRejected = !0, r.status.fetchError = e), u(e))), d = Object.assign(l, {
        __abortController: s,
        __staleWhileFetching: o,
        __returned: void 0
    });
    return void 0 === t ? (this.set(e, d, {
        ...a.options,
        status: void 0
    }), t = Tt(this, ze, "f").get(e)) : Tt(this, Be, "f")[t] = d, d;
}, yt = function(e) {
    if (!Tt(this, et, "f")) return !1;
    const t = e;
    return !!t && t instanceof Promise && t.hasOwnProperty("__staleWhileFetching") && t.__abortController instanceof At;
}, _t = function(e, t) {
    Tt(this, Ve, "f")[t] = e, Tt(this, Le, "f")[e] = t;
}, vt = function(e) {
    e !== Tt(this, Ze, "f") && (e === Tt(this, Ke, "f") ? xt(this, Ke, Tt(this, Le, "f")[e], "f") : Tt(this, Ce, "m", _t).call(this, Tt(this, Ve, "f")[e], Tt(this, Le, "f")[e]), Tt(this, Ce, "m", _t).call(this, Tt(this, Ze, "f"), e), xt(this, Ze, e, "f"));
}, wt = function(e, t) {
    var r;
    let n = !1;
    if (0 !== Tt(this, Fe, "f")) {
        const o = Tt(this, ze, "f").get(e);
        if (void 0 !== o) if (n = !0, 1 === Tt(this, Fe, "f")) Tt(this, Ce, "m", bt).call(this, t);
        else {
            Tt(this, ut, "f").call(this, o);
            const n = Tt(this, Be, "f")[o];
            if (Tt(this, Ce, "m", yt).call(this, n) ? n.__abortController.abort(new Error("deleted")) : (Tt(this, Qe, "f") || Tt(this, tt, "f")) && (Tt(this, Qe, "f") && Tt(this, Re, "f")?.call(this, n, e, t), Tt(this, tt, "f") && Tt(this, He, "f")?.push([
                n,
                e,
                t
            ])), Tt(this, ze, "f").delete(e), Tt(this, Ue, "f")[o] = void 0, Tt(this, Be, "f")[o] = void 0, o === Tt(this, Ze, "f")) xt(this, Ze, Tt(this, Ve, "f")[o], "f");
            else if (o === Tt(this, Ke, "f")) xt(this, Ke, Tt(this, Le, "f")[o], "f");
            else {
                const e = Tt(this, Ve, "f")[o];
                Tt(this, Le, "f")[e] = Tt(this, Le, "f")[o];
                const t = Tt(this, Le, "f")[o];
                Tt(this, Ve, "f")[t] = Tt(this, Ve, "f")[o];
            }
            xt(this, Fe, (r = Tt(this, Fe, "f"), --r), "f"), Tt(this, We, "f").push(o);
        }
    }
    if (Tt(this, tt, "f") && Tt(this, He, "f")?.length) {
        const e = Tt(this, He, "f");
        let t;
        for(; t = e?.shift();)Tt(this, Me, "f")?.call(this, ...t);
    }
    return n;
}, bt = function(e) {
    for (const t of Tt(this, Ce, "m", ft).call(this, {
        allowStale: !0
    })){
        const r = Tt(this, Be, "f")[t];
        if (Tt(this, Ce, "m", yt).call(this, r)) r.__abortController.abort(new Error("deleted"));
        else {
            const n = Tt(this, Ue, "f")[t];
            Tt(this, Qe, "f") && Tt(this, Re, "f")?.call(this, r, n, e), Tt(this, tt, "f") && Tt(this, He, "f")?.push([
                r,
                n,
                e
            ]);
        }
    }
    if (Tt(this, ze, "f").clear(), Tt(this, Be, "f").fill(void 0), Tt(this, Ue, "f").fill(void 0), Tt(this, Xe, "f") && Tt(this, Ge, "f") && (Tt(this, Xe, "f").fill(0), Tt(this, Ge, "f").fill(0)), Tt(this, Ye, "f") && Tt(this, Ye, "f").fill(0), xt(this, Ke, 0, "f"), xt(this, Ze, 0, "f"), Tt(this, We, "f").length = 0, xt(this, qe, 0, "f"), xt(this, Fe, 0, "f"), Tt(this, tt, "f") && Tt(this, He, "f")) {
        const e = Tt(this, He, "f");
        let t;
        for(; t = e?.shift();)Tt(this, Me, "f")?.call(this, ...t);
    }
};
const Dt = "undefined" != typeof process && "win32" === process.platform, Ft = new jt({
    max: 512
});
function qt(e) {
    try {
        return p.statSync(e);
    } catch  {
        return null;
    }
}
function zt(e, t) {
    if (e.match(/[\\/]/)) return e;
    const r = t ? `${e}\0${t.source}\0${t.flags}` : e, o = Ft.get(r);
    if (void 0 !== o) return o;
    const s = n.join(".", e);
    if (qt(s)) return Ft.set(r, s), s;
    const i = process.env.PATH.split(Dt ? ";" : ":");
    for (const o of i){
        const s = n.join(o, e);
        if (qt(s) && (!t || t.test(s))) return Ft.set(r, s), s;
    }
    return Ft.set(r, e), e;
}
function Ut(e, t, r) {
    if ("win32" !== process.platform) return {
        cmd: zt(e),
        args: t
    };
    if (!p.existsSync(e)) {
        const n = [
            ".exe",
            ".bat",
            ".cmd",
            ".ps1"
        ], o = e.toLowerCase();
        if (n.some((e)=>o.endsWith(e))) {
            const n = zt(e, r);
            if (p.existsSync(n)) return Ut(n, t, r);
        }
        for (const o of n){
            const n = zt(`${e}${o}`, r);
            if (p.existsSync(n)) return Ut(n, t, r);
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
class Bt extends Error {
    constructor(e, t, r, n, o, s){
        super(e), this.name = "SpawnError", this.exitCode = t, this.code = t, this.stdout = o, this.stderr = s, this.command = r, this.args = n, Error.captureStackTrace && Error.captureStackTrace(this, Bt);
    }
}
function Lt(e, t, r) {
    r = r ?? {};
    let n = new kt.Observable((n)=>{
        const { encoding: o, timeout: s, ...a } = r, { cmd: c, args: u } = Ut(e, t), l = a.stdin;
        l && (delete a.stdin, a.stdio ??= [
            "pipe",
            "pipe",
            "pipe"
        ]), a.stdio ??= [
            "ignore",
            "pipe",
            "pipe"
        ];
        const d = (0, i.spawn)(c, u, a);
        r.processInfo && void 0 !== d.pid && (r.processInfo.pid = d.pid);
        let p = null;
        s && s > 0 && (p = setTimeout(()=>{
            d.killed || d.kill();
            const e = new Bt(`Process timed out after ${s}ms`, -1, c, u);
            n.error(e);
        }, s));
        const f = (t)=>(s)=>{
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
            }, h = new kt.Subscription;
        if (l) if (d.stdin) {
            const e = d.stdin;
            h.add(l.subscribe({
                next: (t)=>e.write(t),
                error: n.error.bind(n),
                complete: ()=>e.end()
            }));
        } else n.error(new Error("opts.stdio conflicts with provided spawn opts.stdin observable, 'pipe' is required"));
        let m = null, g = null, y = !1;
        return d.stdout ? (g = new kt.AsyncSubject, d.stdout.on("data", f("stdout")), d.stdout.on("close", ()=>{
            g.next(!0), g.complete();
        })) : g = (0, kt.of)(!0), d.stderr ? (m = new kt.AsyncSubject, d.stderr.on("data", f("stderr")), d.stderr.on("close", ()=>{
            m.next(!0), m.complete();
        })) : m = (0, kt.of)(!0), d.on("error", (e)=>{
            y = !0, p && clearTimeout(p), n.error(e);
        }), d.on("close", (e)=>{
            y = !0, p && clearTimeout(p);
            const t = (0, kt.merge)(g, m).pipe((0, Et.TS)((e)=>!0, !0));
            0 === e ? t.subscribe(()=>n.complete()) : t.subscribe(()=>{
                const t = new Bt(`Process failed with exit code: ${e}`, e, c, u);
                n.error(t);
            });
        }), h.add(new kt.Subscription(()=>{
            y || (p && clearTimeout(p), d.kill());
        })), h;
    });
    if (r.retries && r.retries > 0) {
        const e = r.retries, t = r.retryDelay ?? 1e3;
        n = n.pipe((0, Et.L5)({
            count: e,
            delay: (e, r)=>{
                if (e instanceof Bt && 0 !== e.exitCode) return (0, kt.timer)(t);
                throw e;
            }
        }));
    }
    return r.split ? n : n.pipe((0, Et.Tj)((e)=>e?.text));
}
function Vt(e, t, r) {
    return r?.split ? (n = Lt(e, t, {
        ...r ?? {},
        split: !0
    }), new Promise((e, t)=>{
        let r = "", o = "";
        n.subscribe({
            next: (e)=>{
                "stdout" === e.source ? r += e.text : o += e.text;
            },
            error: (e)=>{
                if (e instanceof Bt) {
                    const n = new Bt(`${r}\n${e.message}`, e.exitCode, e.command, e.args, r, o);
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
                    if (e instanceof Bt) {
                        const t = new Bt(`${n}\n${e.message}`, e.exitCode, e.command, e.args, n, e.stderr);
                        r(t);
                    } else {
                        const t = new Error(`${n}\n${e instanceof Error ? e.message : String(e)}`);
                        r(t);
                    }
                },
                complete: ()=>t(n)
            });
        });
    }(Lt(e, t, {
        ...r ?? {},
        split: !1
    }));
    var n;
}
function Kt(...e) {
    return e.some((e)=>!0 === e);
}
function Zt(...e) {
    const t = new Set;
    for (const r of e)if (r) for (const e of r)t.add(Wt(e));
    return [
        ...t
    ];
}
function Wt(e) {
    const t = e.replace(/\\/g, "/").replace(/\/+$/, "");
    return "" === t ? "/" : /^[a-zA-Z]:$/.test(t) ? `${t}/` : t;
}
function Ht(...e) {
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
function Yt(...e) {
    for(let t = e.length - 1; t >= 0; t--)if (void 0 !== e[t]) return e[t];
}
async function Gt(e, t, r = {}) {
    if (!t) return {
        policy: {
            type: "insecure_none"
        }
    };
    if ((0, P.$f)(e)) return Xt(t, {
        workspaceDir: e
    });
    const s = r.stat ?? o.stat, i = r.spawnPromise ?? Vt, a = await s((0, n.join)(e, ".git")).then((e)=>e, ()=>null), c = a?.isFile() ?? !1, u = null !== a;
    if ("workspace_readwrite" === (l = t, l.teamAdmin?.type ?? l.perRepo?.type ?? l.perUser?.type ?? "insecure_none")) {
        let r = e;
        if (c) {
            const o = await i("git", [
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
                        writeProtectionMapping: Ht(s?.writeProtectionMapping, j(e))
                    }
                };
            }
        }
        if (u) return Xt(t, {
            workspaceDir: e,
            gitDirParent: r
        });
    }
    var l;
    return Xt(t, {
        workspaceDir: e
    });
}
function Xt(e, t) {
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
    if (void 0 === r) return tr(e, t);
    switch(r){
        case "workspace_readwrite":
            return tr(e, t);
        case "workspace_readonly":
            return function(e, t) {
                const r = t?.debug, n = Qt(e, t), o = {
                    policy: er({
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
                const { perUser: r, perRepo: n, teamAdmin: o } = e, s = t?.debug, i = {}, a = Kt(r?.allowlistEscalated, n?.allowlistEscalated, o?.allowlistEscalated), c = Yt(r?.debugOutputDir, n?.debugOutputDir, o?.debugOutputDir), u = Kt(r?.captureDenies, n?.captureDenies, o?.captureDenies), l = Yt(r?.enableSharedBuildCache, n?.enableSharedBuildCache, o?.enableSharedBuildCache), d = {
                    type: "insecure_none",
                    allowlistEscalated: a || void 0,
                    debugOutputDir: c,
                    captureDenies: u || void 0,
                    enableSharedBuildCache: l
                }, p = Object.fromEntries(Object.entries(d).filter(([e, t])=>void 0 !== t));
                p.type = "insecure_none";
                const f = {
                    policy: p
                };
                s && (f.debug = {
                    fieldSources: i
                });
                return f;
            }(e, t);
        default:
            throw new Error(`Unknown policy type: ${r}`);
    }
}
function Qt(e, t) {
    const r = t?.debug, { perUser: n, perRepo: o, teamAdmin: s } = e, i = t?.workspaceDir ?? process.cwd(), a = F(i), c = {}, u = [
        n,
        o,
        s
    ], l = [
        "perUser",
        "perRepo",
        "teamAdmin",
        "hardcoded"
    ], d = (e, t)=>{
        r && (c[e] = l[t] ?? "unknown");
    }, p = Kt(n?.disableTmpWrite, o?.disableTmpWrite, s?.disableTmpWrite);
    for(let e = u.length - 1; e >= 0; e--)if (!0 === u[e]?.disableTmpWrite) {
        d("disableTmpWrite", e);
        break;
    }
    const f = Kt(n?.networkPolicyStrict, o?.networkPolicyStrict, s?.networkPolicyStrict, a.networkPolicyStrict);
    a.networkPolicyStrict && d("networkPolicyStrict", 3);
    const h = Yt(n?.readBoundary, o?.readBoundary, s?.readBoundary) ?? "system", m = Yt(n?.additionalReadPaths, o?.additionalReadPaths), g = !1 === s?.allowUserOverrideReadPaths ? Zt(s.additionalReadPaths) : Zt(m, s?.additionalReadPaths), y = "workspace" === h ? g : void 0, _ = Zt(n?.additionalReadonlyPaths, o?.additionalReadonlyPaths, s?.additionalReadonlyPaths, a.additionalReadonlyPaths), v = _.length > 0 ? _ : void 0;
    let w = function(...e) {
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
    const b = s?.networkPolicy?.allow;
    void 0 !== b && b.length > 0 && void 0 !== w && (w = {
        ...w,
        allow: [
            ...b
        ]
    }, r && (c["networkPolicy.allow"] = "teamAdmin (replace)"));
    const S = void 0 !== (k = w) ? k : {
        version: 1,
        default: "deny"
    };
    var k;
    const E = Yt(n?.debugOutputDir, o?.debugOutputDir, s?.debugOutputDir), x = Kt(n?.captureDenies, o?.captureDenies, s?.captureDenies), T = Yt(n?.enableSharedBuildCache, o?.enableSharedBuildCache, s?.enableSharedBuildCache), O = Ht(n?.ignoreMapping, o?.ignoreMapping, s?.ignoreMapping, a.ignoreMapping), P = function(e) {
        const t = M.filter((e)=>"git" === e.type).map((e)=>e.pattern);
        return {
            [e]: t
        };
    }(t?.gitDirParent ?? i);
    return {
        disableTmpWrite: p || void 0,
        networkPolicyStrict: f,
        readBoundary: h,
        additionalReadPaths: y,
        additionalReadonlyPaths: v,
        networkPolicy: S,
        debugOutputDir: E,
        captureDenies: x || void 0,
        enableSharedBuildCache: T,
        ignoreMapping: O,
        writeProtectionMapping: Ht(n?.writeProtectionMapping, o?.writeProtectionMapping, s?.writeProtectionMapping, a.writeProtectionMapping, P),
        fieldSources: c
    };
}
function er(e, t) {
    const r = Object.fromEntries(Object.entries(e).filter(([e, t])=>void 0 !== t));
    return r.type = t, r;
}
function tr(e, t) {
    const { perUser: r, perRepo: n, teamAdmin: o } = e, s = t?.debug, i = Qt(e, t), a = Zt(r?.additionalReadwritePaths, n?.additionalReadwritePaths, o?.additionalReadwritePaths), c = {
        policy: er({
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
    return s && (c.debug = {
        fieldSources: i.fieldSources
    }), c;
}
process.platform;
"function" == typeof SuppressedError && SuppressedError;
"function" == typeof SuppressedError && SuppressedError;
"function" == typeof SuppressedError && SuppressedError;
"function" == typeof SuppressedError && SuppressedError;
"function" == typeof SuppressedError && SuppressedError;
"function" == typeof SuppressedError && SuppressedError;
require("node:perf_hooks");
var rr, nr;
!function(e) {
    e[e.EventLoopDelayP95Ms = 50] = "EventLoopDelayP95Ms", e[e.EventLoopUtilization = .7] = "EventLoopUtilization";
}(rr || (rr = {})), function(e) {
    e[e.SampleIntervalMs = 250] = "SampleIntervalMs", e[e.EventLoopResolutionMs = 20] = "EventLoopResolutionMs";
}(nr || (nr = {}));

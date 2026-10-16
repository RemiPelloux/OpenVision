"use strict";
require.d(exports, {
    BM: ()=>Yr,
    vu: ()=>Fr,
    Ls: ()=>Nr,
    SandboxUnsupportedError: ()=>it,
    J: ()=>_,
    St: ()=>ct,
    Fn: ()=>Kr,
    fi: ()=>fr,
    r5: ()=>te,
    Ko: ()=>E,
    CG: ()=>Bt,
    W1: ()=>O,
    WE: ()=>Hr,
    G6: ()=>Vr,
    _B: ()=>Ie,
    OK: ()=>ve,
    $b: ()=>Ee,
    yo: ()=>I,
    tv: ()=>jr,
    wG: ()=>Nt,
    fZ: ()=>Ut,
    s9: ()=>Mt,
    XX: ()=>Ot,
    T6: ()=>ke,
    Po: ()=>Ce,
    $6: ()=>$r,
    l7: ()=>Gr,
    xS: ()=>v,
    resolveSandboxPolicyForWorkspace: ()=>Qt,
    spawnInSandbox: ()=>lt,
    Xw: ()=>b
});
var n = require("./module-76760.js"), s = require("./module-73024.js"), o = require("./module-68505.js");
const i = "undefined" != typeof process && "win32" === process.platform, a = new o.q({
    max: 512
});
function c(e) {
    try {
        return s.statSync(e);
    } catch  {
        return null;
    }
}
function l(e, t) {
    if (e.match(/[\\/]/)) return e;
    const r = t ? `${e}\0${t.source}\0${t.flags}` : e, s = a.get(r);
    if (void 0 !== s) return s;
    const o = n.join(".", e);
    if (c(o)) return a.set(r, o), o;
    const l = process.env.PATH.split(i ? ";" : ":");
    for (const s of l){
        const o = n.join(s, e);
        if (c(o) && (!t || t.test(o))) return a.set(r, o), o;
    }
    return a.set(r, e), e;
}
function u(e, t, r) {
    if ("win32" !== process.platform) return {
        cmd: l(e),
        args: t
    };
    if (!s.existsSync(e)) {
        const n = [
            ".exe",
            ".bat",
            ".cmd",
            ".ps1"
        ], o = e.toLowerCase();
        if (n.some((e)=>o.endsWith(e))) {
            const n = l(e, r);
            if (s.existsSync(n)) return u(n, t, r);
        }
        for (const o of n){
            const n = l(`${e}${o}`, r);
            if (s.existsSync(n)) return u(n, t, r);
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
var d = require("./module-51455.js"), p = require("./module-48161.js"), m = require("./module-98875.js"), h = require("./module-87199.js"), f = require("./module-91434.js"), g = require("./module-31421.js"), y = require("./module-57075.js");
let w;
function v() {
    const e = u("rg", []).cmd;
    return "rg" !== e ? e : void 0;
}
function _(e) {
    if (!e) throw new Error("configureRipgrepPath: path must not be empty");
    w = e;
}
function A(e) {
    const t = Object.keys(e).filter((e)=>"path" === e.toLowerCase());
    if (0 !== t.length) return "win32" === process.platform ? t.find((e)=>"Path" === e) ?? t[0] : t.find((e)=>"PATH" === e) ?? t[0];
}
function S(e, t) {
    const r = (0, n.dirname)(t);
    if (!r || "." === r) return e;
    const s = (function(e) {
        const t = A(e);
        return void 0 !== t ? e[t] ?? "" : "";
    })(e).split(n.delimiter).filter(Boolean);
    return function(e, t) {
        const r = A(e) ?? ("win32" === process.platform ? "Path" : "PATH"), n = {
            ...e
        };
        for (const e of Object.keys(n))e !== r && "path" === e.toLowerCase() && delete n[e];
        return n[r] = t, n;
    }(e, [
        r,
        ...s.filter((e)=>e !== r)
    ].join(n.delimiter));
}
function b(e) {
    return w && (0, n.isAbsolute)(w) ? {
        ...S(e, w),
        CURSOR_RIPGREP_PATH: w
    } : e;
}
function E() {
    if (!w) throw new Error("Ripgrep path not configured. Call configureRipgrepPath() at startup.");
    return w;
}
function I() {
    return void 0 !== w;
}
var C = require("./module-73015.js");
function k(e) {
    const t = e || process.env, { ELECTRON_RUN_AS_NODE: r, ...n } = t;
    return n;
}
const x = [
    "SSH_AUTH_SOCK",
    "DBUS_SESSION_BUS_ADDRESS",
    "XDG_RUNTIME_DIR",
    "WAYLAND_DISPLAY"
];
function T(e) {
    const t = {
        ...e
    };
    for (const e of x)delete t[e];
    return t;
}
var R = require("./module-77598.js"), B = require("./module-68503.js");
const P = "cursor-sandbox-cache";
let J;
function M() {
    return J || (J = (0, R.randomBytes)(16).toString("hex")), J;
}
function q(e, t) {
    const r = (0, s.lstatSync)(e);
    return r.isDirectory() && r.uid === t && !(18 & r.mode);
}
function D(e) {
    try {
        (0, s.mkdirSync)(e, {
            mode: 448
        });
    } catch (e) {
        if ("EEXIST" !== e.code) throw e;
    }
}
function O(e) {
    return N(e, {
        create: !1
    });
}
function N(e, { create: t }) {
    const r = process.getuid?.();
    if (void 0 === r) return;
    const s = (0, n.join)((0, p.tmpdir)(), `cursor-sandbox-${(0, B.r_)((0, n.resolve)(e))}`);
    try {
        for (const e of [
            s,
            (0, n.join)(s, "tmp")
        ])if (t && D(e), !q(e, r)) return;
        return s;
    } catch  {
        return;
    }
}
const F = 'builtin eval "${__CURSOR_SANDBOX_TEMP_RESTORE:-}" 2>/dev/null; ';
function U(e = (0, n.join)((0, p.tmpdir)(), P, M())) {
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
var L = require("./module-37949.js"), $ = require("./module-33002.js"), Q = require("./module-97357.js"), j = require("./module-10091.js");
class G extends Error {
    constructor(e, t, r, n, s, o){
        super(e), this.name = "SpawnError", this.exitCode = t, this.code = t, this.stdout = s, this.stderr = o, this.command = r, this.args = n, Error.captureStackTrace && Error.captureStackTrace(this, G);
    }
}
function H(e, t, r) {
    r = r ?? {};
    let n = new Q.Observable((n)=>{
        const { encoding: s, timeout: o, ...i } = r, { cmd: a, args: c } = u(e, t), l = i.stdin;
        l && (delete i.stdin, i.stdio ??= [
            "pipe",
            "pipe",
            "pipe"
        ]), i.stdio ??= [
            "ignore",
            "pipe",
            "pipe"
        ];
        const d = (0, g.spawn)(a, c, i);
        r.processInfo && void 0 !== d.pid && (r.processInfo.pid = d.pid);
        let p = null;
        o && o > 0 && (p = setTimeout(()=>{
            d.killed || d.kill();
            const e = new G(`Process timed out after ${o}ms`, -1, a, c);
            n.error(e);
        }, o));
        const m = (t)=>(o)=>{
                if (o.length < 1) return;
                r.echoOutput && ("stdout" === t ? process.stdout : process.stderr).write(o);
                let i = "<< String sent back was too long >>";
                try {
                    i = "string" == typeof o ? o.toString() : o.toString(s || "utf8");
                } catch  {
                    i = `<< Lost chunk of process output for ${e} - length was ${o.length}>>`;
                }
                n.next({
                    source: t,
                    text: i
                });
            }, h = new Q.Subscription;
        if (l) if (d.stdin) {
            const e = d.stdin;
            h.add(l.subscribe({
                next: (t)=>e.write(t),
                error: n.error.bind(n),
                complete: ()=>e.end()
            }));
        } else n.error(new Error("opts.stdio conflicts with provided spawn opts.stdin observable, 'pipe' is required"));
        let f = null, y = null, w = !1;
        return d.stdout ? (y = new Q.AsyncSubject, d.stdout.on("data", m("stdout")), d.stdout.on("close", ()=>{
            y.next(!0), y.complete();
        })) : y = (0, Q.of)(!0), d.stderr ? (f = new Q.AsyncSubject, d.stderr.on("data", m("stderr")), d.stderr.on("close", ()=>{
            f.next(!0), f.complete();
        })) : f = (0, Q.of)(!0), d.on("error", (e)=>{
            w = !0, p && clearTimeout(p), n.error(e);
        }), d.on("close", (e)=>{
            w = !0, p && clearTimeout(p);
            const t = (0, Q.merge)(y, f).pipe((0, j.TS)((e)=>!0, !0));
            0 === e ? t.subscribe(()=>n.complete()) : t.subscribe(()=>{
                const t = new G(`Process failed with exit code: ${e}`, e, a, c);
                n.error(t);
            });
        }), h.add(new Q.Subscription(()=>{
            w || (p && clearTimeout(p), d.kill());
        })), h;
    });
    if (r.retries && r.retries > 0) {
        const e = r.retries, t = r.retryDelay ?? 1e3;
        n = n.pipe((0, j.L5)({
            count: e,
            delay: (e, r)=>{
                if (e instanceof G && 0 !== e.exitCode) return (0, Q.timer)(t);
                throw e;
            }
        }));
    }
    return r.split ? n : n.pipe((0, j.Tj)((e)=>e?.text));
}
function z(e, t, r) {
    return r?.split ? (n = H(e, t, {
        ...r ?? {},
        split: !0
    }), new Promise((e, t)=>{
        let r = "", s = "";
        n.subscribe({
            next: (e)=>{
                "stdout" === e.source ? r += e.text : s += e.text;
            },
            error: (e)=>{
                if (e instanceof G) {
                    const n = new G(`${r}\n${e.message}`, e.exitCode, e.command, e.args, r, s);
                    t(n);
                } else {
                    const n = new Error(`${r}\n${e instanceof Error ? e.message : String(e)}`);
                    t(n);
                }
            },
            complete: ()=>e([
                    r,
                    s
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
                    if (e instanceof G) {
                        const t = new G(`${n}\n${e.message}`, e.exitCode, e.command, e.args, n, e.stderr);
                        r(t);
                    } else {
                        const t = new Error(`${n}\n${e instanceof Error ? e.message : String(e)}`);
                        r(t);
                    }
                },
                complete: ()=>t(n)
            });
        });
    }(H(e, t, {
        ...r ?? {},
        split: !1
    }));
    var n;
}
var W = require("./module-86613.js");
const V = [
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
], K = [
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
], Y = (e, t)=>t.flatMap((t)=>K.map((r)=>({
                platform: e,
                scope: "global",
                path: `${t}/${r}`
            }))), Z = {
    linux: [
        ".cache/node",
        ".cache/yarn"
    ],
    darwin: [
        ".cache/node",
        "Library/Caches/Yarn"
    ]
}, X = (e)=>[
        ...V,
        ...Z[e]
    ].map((t)=>({
            platform: e,
            scope: "home-dir",
            path: t
        })), ee = [
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
    ...X("linux"),
    ...Y("linux", [
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
    ...X("darwin"),
    ...Y("darwin", [
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
function te(e = process.platform, t = p.homedir(), r = {}) {
    const o = [];
    for (const i of ee){
        if (i.platform !== e) continue;
        if ("global" === i.scope) {
            o.push(i.path);
            continue;
        }
        const a = "bundled" === i.scope ? r[i.path] : (0, n.join)(t, i.path);
        if (a) try {
            let e;
            switch(i.scope){
                case "home":
                    e = (0, s.lstatSync)(a).isFile();
                    break;
                case "home-dir":
                    e = (0, s.lstatSync)(a).isDirectory();
                    break;
                case "bundled":
                    e = (0, s.statSync)(a).isFile();
            }
            e && o.push(a);
        } catch  {}
    }
    return o;
}
const re = [
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
re.filter((e)=>"git" === e.type).map((e)=>e.pattern), re.filter((e)=>"workspace" === e.type && e.pattern.startsWith("!") && !e.pattern.endsWith("/**")).map((e)=>e.pattern.replace(/^!(\*\*\/)?/, ""));
function ne(e) {
    const t = re.filter((e)=>"workspace" === e.type).map((e)=>e.pattern);
    return {
        [e]: t
    };
}
function se(e) {
    const t = re.filter((e)=>"worktree" === e.type).map((e)=>e.pattern);
    return {
        [e]: t
    };
}
const oe = [];
function ie(e) {
    const t = function() {
        if (0 !== oe.length) return {
            version: 1,
            deny: [
                ...oe
            ]
        };
    }(), r = p.homedir(), s = [];
    for (const e of re)switch(e.type){
        case "workspace":
        case "git":
        case "worktree":
            break;
        case "absolute":
            s.push(e.pattern);
            break;
        case "home":
            r.length > 0 && s.push((0, n.join)(r, e.pattern));
            break;
        default:
            {
                const t = e.type;
                throw new Error(`Unknown entry type: ${t}`);
            }
    }
    return {
        type: "workspace_readwrite",
        additionalReadonlyPaths: s,
        writeProtectionMapping: ne(e),
        ...t && {
            networkPolicy: t
        },
        networkPolicyStrict: !0
    };
}
let ae = null, ce = null;
function le() {
    return null === ae && (ae = W({
        ignoreCase: !0
    }), ae.add(re.filter((e)=>"workspace" === e.type).map((e)=>e.pattern))), ae;
}
function ue() {
    return null === ce && (ce = W({
        ignoreCase: !0
    }), ce.add(re.filter((e)=>"git" === e.type).map((e)=>e.pattern))), ce;
}
let de = null;
const pe = new Map;
async function me(e) {
    const t = pe.get(e);
    if (t) return t;
    const r = await (0, d.stat)((0, n.join)(e, ".git")).catch(()=>null);
    if (!(r?.isFile() ?? !1)) {
        const t = {
            isWorktree: !1,
            gitDirParent: e
        };
        return pe.set(e, t), t;
    }
    const s = await async function(e) {
        try {
            const t = await z("git", [
                "rev-parse",
                "--git-common-dir"
            ], {
                cwd: e
            });
            return (0, n.dirname)((0, n.resolve)(e, t.trim()));
        } catch  {
            return null;
        }
    }(e), o = {
        isWorktree: !0,
        gitDirParent: s ?? e
    };
    return pe.set(e, o), o;
}
const he = "win32" === process.platform || "darwin" === process.platform;
function fe(e) {
    if (!e.endsWith(n.sep)) return e;
    const t = e.slice(0, -1);
    return "" === t || "win32" === process.platform && /^[a-zA-Z]:$/.test(t) ? e : t;
}
function ge(e) {
    return e.endsWith(n.sep) ? e : e + n.sep;
}
function ye(e, t) {
    const r = fe(t);
    if (he) {
        const t = e.toLowerCase(), n = r.toLowerCase();
        return t === n || t.startsWith(ge(n));
    }
    return e === r || e.startsWith(ge(r));
}
function we(e, t) {
    const r = fe(e);
    return he ? (0, n.relative)(r.toLowerCase(), t.toLowerCase()).replace(/\\/g, "/") : (0, n.relative)(r, t).replace(/\\/g, "/");
}
async function ve(e, t) {
    if (ye(e, t)) {
        const r = we(t, e);
        if (le().ignores(r)) return !0;
    }
    const { isWorktree: r, gitDirParent: s } = await me(t);
    if (ye(e, s)) {
        const t = we(s, e);
        if (ue().ignores(t)) return !0;
    }
    if (r && ye(e, t)) {
        if (".git" === we(t, e)) return !0;
    }
    for (const t of function() {
        if (null !== de) return de;
        const e = p.homedir(), t = [];
        for (const r of re)switch(r.type){
            case "absolute":
                t.push(r.pattern);
                break;
            case "home":
                e.length > 0 && t.push((0, n.join)(e, r.pattern));
        }
        return de = t, t;
    }())if (ye(e, t)) return !0;
    return !1;
}
const _e = g.execFile, Ae = new WeakMap;
async function Se(e) {
    const t = Ae.get(e);
    return t ? (r = t.pid, n = t.startTime, s = t.unrelatedPids, new Promise((e)=>{
        try {
            const t = new Date, o = [
                "show",
                "--style",
                "ndjson",
                "--predicate",
                'process=="kernel" AND eventMessage CONTAINS "Sandbox:" AND eventMessage contains "deny"',
                "--last",
                Math.ceil((t.getTime() - n.getTime()) / 1e3).toString()
            ];
            (0, C.D9)(_e, "/usr/bin/log", o, (t, n)=>{
                if (t) return void e([
                    {
                        raw: t.message
                    }
                ]);
                const o = n.split(/\r?\n/).filter((e)=>e.trim().length > 0), i = [];
                for (const e of o)try {
                    const t = JSON.parse(e), n = t?.eventMessage ?? "";
                    if (!n || "string" != typeof n) continue;
                    const o = /^Sandbox:\s+([^(]+)\((\d+)\)\s+([a-zA-Z-]+)\((\d+)\)\s+([^\s]+)\s+(.+)$/.exec(n);
                    if (o) {
                        const [, e, a, c, l, u, d] = o, p = Number(a);
                        i.push({
                            timestamp: t.timestamp,
                            processName: e.trim(),
                            pid: p,
                            decision: c.toLowerCase(),
                            decisionCode: Number(l),
                            operation: u,
                            target: d,
                            duplicateCount: 1,
                            raw: n,
                            relationship: be(p, r, s)
                        });
                        continue;
                    }
                    const a = /^(\d+) duplicate report for Sandbox: (.+)$/.exec(n);
                    if (a) {
                        const e = Number(a[1]), o = a[2], c = /^([^(]+)\((\d+)\)\s+([a-zA-Z-]+)\((\d+)\)\s+([^\s]+)\s+(.+)$/.exec(o);
                        if (c) {
                            const [, o, a, l, u, d, p] = c, m = Number(a);
                            i.push({
                                timestamp: t.timestamp,
                                processName: o.trim(),
                                pid: m,
                                decision: l.toLowerCase(),
                                decisionCode: Number(u),
                                operation: d,
                                target: p,
                                duplicateCount: e,
                                raw: n,
                                relationship: be(m, r, s)
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
    var r, n, s;
}
function be(e, t, r) {
    return e === t ? "related" : r?.has(e) ? "probably_unrelated" : "maybe_related";
}
function Ee(e) {
    return void 0 !== e && ("allow" === e.default || void 0 !== e.allow && e.allow.length > 0);
}
function Ie(e) {
    return void 0 !== e && "allow" === e.default;
}
function Ce() {
    return {
        version: 1,
        default: "deny"
    };
}
function ke() {
    return {
        version: 1,
        default: "allow"
    };
}
const xe = "sandbox-policies", Te = "CURSOR_SANDBOX_POLICY_DIR";
const Re = 36e5, Be = 9e5;
let Pe = 0;
function Je() {
    const e = function() {
        const e = process.env[Te]?.trim();
        return e ? n.resolve(e) : n.resolve(n.join(p.homedir(), ".cursor", xe));
    }();
    s.mkdirSync(e, {
        recursive: !0,
        mode: 448
    });
    try {
        s.chmodSync(e, 448);
    } catch  {}
    const t = Date.now();
    return t - Pe >= Be && (Pe = t, function(e) {
        let t;
        try {
            t = s.readdirSync(e);
        } catch  {
            return;
        }
        const r = Date.now();
        for (const o of t){
            if (!o.startsWith("sandbox-policy-")) continue;
            const t = n.join(e, o);
            try {
                const e = s.statSync(t);
                if (!e.isFile()) continue;
                r - e.mtimeMs > Re && s.unlinkSync(t);
            } catch  {}
        }
    }(e)), e;
}
function Me(e) {
    const t = Je(), r = R.randomBytes(8).toString("hex"), o = n.join(t, `sandbox-policy-${r}`);
    return s.writeFileSync(o, e, {
        encoding: "utf-8",
        mode: 384
    }), o;
}
const qe = "darwin" === process.platform, De = "linux" === process.platform, Oe = (0, L.h)("shell-exec:sandbox");
function Ne(e) {
    const t = Je();
    return e && 0 !== e.length ? e.includes(t) ? e : [
        ...e,
        t
    ] : [
        t
    ];
}
let Fe, Ue = !0;
function Le() {
    return Fe;
}
function $e(e) {
    "linux" === process.platform && Object.assign(e, b(e));
}
let Qe = null, je = null, Ge = null, He = null;
function ze(e) {
    return {
        ...e,
        additionalReadonlyPaths: Ne(e.additionalReadonlyPaths)
    };
}
function We(e, t, r) {
    let o;
    e.ignoreMapping && (o = function(e, t, r, n) {
        return nt(e, t, r, n);
    }(e.ignoreMapping, t, [], []));
    const i = function(e, t, r) {
        const o = e && e.length > 0 ? function(...e) {
            const t = {};
            for (const r of e){
                let e = !1;
                try {
                    e = (0, s.existsSync)(r) && (0, s.statSync)(r).isDirectory();
                } catch  {}
                if (e) t[r] || (t[r] = []), t[r].push("**");
                else {
                    const e = r.lastIndexOf("/"), n = e > 0 ? r.slice(0, e) : "/", s = e >= 0 ? r.slice(e + 1) : r;
                    t[n] || (t[n] = []), s ? t[n].push(s, `${s}/**`) : t[n].push("**");
                }
            }
            return t;
        }(...e) : {}, i = function(e, t = (e)=>s.existsSync(e)) {
            if ((0, h.$f)(e)) return !0;
            let r = n.resolve(e);
            for(;;){
                try {
                    if (t(n.join(r, ".git"))) return !0;
                } catch  {}
                const e = n.dirname(r);
                if (e === r) return !1;
                r = e;
            }
        }(r), a = !De || i ? t ?? {} : {}, c = {
            ...o
        };
        for (const [e, t] of Object.entries(a))c[e] ? c[e] = [
            ...c[e],
            ...t
        ] : c[e] = t;
        if (0 === Object.keys(c).length) return;
        return nt(c, r, [], []);
    }(e.additionalReadonlyPaths, e.writeProtectionMapping, t), a = (c = e.readBoundary, r?.workspaceReadEnabled ?? function() {
        const e = Ue;
        return "function" == typeof e ? e() : e;
    }() ? c ?? "system" : "system");
    var c;
    const l = function(e = process.platform) {
        const t = [], r = new Set, n = {};
        try {
            n.ripgrep = E();
        } catch  {}
        for (const s of te(e, p.homedir(), n))r.has(s) || (r.add(s), t.push(s));
        return t;
    }(), u = "workspace" === a ? function(e) {
        const t = [], r = new Set;
        for (const s of e){
            let e = s.trim();
            if (!e) continue;
            "~" === e ? e = p.homedir() : (e.startsWith("~/") || e.startsWith("~\\")) && (e = n.join(p.homedir(), e.slice(2))), e = e.replace(/\/\*\*$/, "").replace(/\/\*$/, ""), e = e.replace(/\\\*\*$/, "").replace(/\\\*$/, "");
            const o = n.basename(e);
            if ((o.includes("*") || o.includes("?")) && (e = n.dirname(e)), !e || "." === e) continue;
            const i = n.normalize(e);
            r.has(i) || (r.add(i), t.push(i));
        }
        return t;
    }(e.additionalReadPaths ?? []) : [], d = [
        ...l
    ], m = new Set(l);
    for (const e of u)m.has(e) || (m.add(e), d.push(e));
    const f = {
        cwd: t,
        readBoundary: a,
        hardcodedReadPaths: d,
        additionalReadonlyPaths: i,
        networkAccess: Ee(e.networkPolicy),
        ignoreMapping: o
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
function Ve(e) {
    if (!("workspace" !== e.readBoundary || "workspace_readwrite" === e.type && e.disableTmpWrite || "win32" === process.platform)) return N(e.cwd, {
        create: !0
    });
}
function Ke(e, t, r) {
    const s = function(e) {
        const t = (0, n.join)(e, "tmp");
        return {
            TMPDIR: t,
            TMP: t,
            TEMP: t,
            TMPPREFIX: (0, n.join)(t, "sh-")
        };
    }(e);
    if (r) {
        const r = U();
        for (const [n, o] of Object.entries(U(e)))t[n] === r[n] && (s[n] = o);
    }
    return s;
}
function Ye(e) {
    if (null !== Qe) return !!Qe;
    try {
        const t = Le();
        return Oe.info(e, `[checkBinaryAvailable] Resolved binary path: ${t}`), t ? (Qe = s.existsSync(t), Qe ? Oe.info(e, `[checkBinaryAvailable] Binary path exists: ${Qe}`) : (je = new Error(`Sandbox binary not found at ${t}`), Oe.info(e, `[checkBinaryAvailable] Binary not found at: ${t}`)), !!Qe) : (je = new Error("Sandbox binary path was not configured"), Qe = !1, Oe.info(e, "[checkBinaryAvailable] Binary path not set, returning false"), !1);
    } catch (t) {
        return je = t, Qe = !1, Oe.info(e, `[checkBinaryAvailable] Exception checking binary: ${t}`), !1;
    }
}
function Ze(e) {
    if (null !== He) return He;
    const t = e ?? (0, $.q6)();
    if (Oe.info(t, "[isSandboxHelperSupported] Starting sandbox support check..."), !Ye(t)) {
        const e = je?.message || "Binary check failed";
        return Ge = e, Oe.info(t, `[isSandboxHelperSupported] Binary not available, returning false. Reason: ${e}`), He = !1, He;
    }
    if ("win32" === process.platform) return Ge = "Windows sandbox helper only provides network proxy, not filesystem isolation", Oe.info(t, "[isSandboxHelperSupported] win32: returning false (proxy-only, no filesystem sandbox)"), He = !1, He;
    if ("darwin" === process.platform) return Ge = null, Oe.info(t, `[isSandboxHelperSupported] ${process.platform} platform, binary available, sandbox supported!`), He = !0, He;
    const { binaryPath: r, args: n, env: s } = et(t, process.cwd());
    try {
        const e = Date.now();
        (0, C.D9)(g.execFileSync, r, n, {
            stdio: [
                "ignore",
                "ignore",
                "pipe"
            ],
            timeout: Xe,
            env: s,
            shell: !1
        });
        const o = Date.now() - e;
        return Ge = null, Oe.info(t, `[isSandboxHelperSupported] Preflight succeeded in ${o}ms, sandbox supported!`), He = !0, He;
    } catch (e) {
        const r = e;
        return tt(t, {
            message: r.message,
            status: r.status,
            stderrText: r.stderr?.toString?.() || ""
        });
    }
}
const Xe = 15e3;
function et(e, t) {
    const r = {
        sandbox: We(ze({
            type: "workspace_readwrite"
        }), t)
    }, n = String(Le());
    Oe.info(e, `[sandboxPreflight] Running preflight with binary: ${n}`), Oe.info(e, `[sandboxPreflight] CWD: ${t}`);
    const s = {
        ...process.env
    };
    $e(s);
    return {
        binaryPath: n,
        args: [
            "--policy",
            Me(JSON.stringify(r)),
            "--preflight-only",
            "--",
            "/bin/true"
        ],
        env: s
    };
}
function tt(e, t) {
    const { message: r, status: n, stderrText: s } = t;
    return Oe.error(e, `[sandboxPreflight] Preflight failed: ${r}`), Oe.error(e, `[sandboxPreflight] Exit status: ${n}`), s && Oe.error(e, `[sandboxPreflight] Stderr: ${s}`), Ge = 2 === n ? `Linux preflight failed with exit code 2 (unsupported kernel features). stderr: ${s || "none"}` : `Linux preflight failed: ${r || "unknown error"}. Exit status: ${n}. stderr: ${s || "none"}`, He = !1, !1;
}
function rt(e, t = [], r = {}, n) {
    const s = (0, $.q6)();
    if (r.env = k(r.env), !Ye(s)) throw new Error(`Sandbox binary not available: ${je?.message || "binary not configured"}. Please build the binary or use 'insecure_none' policy.`);
    if ("insecure_none" === n.type) return (0, C.D9)(g.spawn, e, t, {
        ...r,
        windowsHide: !0
    });
    if ("workspace_readwrite" === n.type || "workspace_readonly" === n.type) return function(e, t, r, n) {
        if ("workspace_readwrite" !== n.type && "workspace_readonly" !== n.type) throw new Error("Expected workspace_readwrite or workspace_readonly policy");
        const s = String(r.cwd ?? process.cwd()), o = n.sandboxWorkspaceRoot ?? s;
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
        const c = We(ze(n), o), l = Ve(c);
        l && (c.additionalReadwritePaths = [
            ...c.additionalReadwritePaths ?? [],
            l
        ]);
        const u = function(e) {
            if ("insecure_none" === e.type) return;
            const t = e.networkPolicy;
            if (void 0 === t) return;
            if (!Ee(t)) return;
            const r = void 0 !== t.deny && t.deny.length > 0;
            return "allow" !== t.default || r ? {
                version: 1,
                ...t
            } : void 0;
        }(n), d = {
            sandbox: c
        };
        void 0 !== u && (d.networkPolicy = u);
        !1 === n.networkPolicyStrict && (d.networkPolicyStrict = !1);
        const p = [
            "--policy",
            Me(JSON.stringify(d)),
            "--",
            i,
            ...a
        ], m = "linux" === process.platform ? T(process.env) : process.env, h = "linux" === process.platform && r.env ? T(r.env) : r.env, f = {
            ...m,
            ...h,
            CURSOR_SANDBOX: "native"
        };
        if ($e(f), l) {
            const e = Ke(l, f, n.enableSharedBuildCache);
            Object.assign(f, e), f.__CURSOR_SANDBOX_OWNED_ENV = Object.keys(e).join(" "), f.__CURSOR_SANDBOX_TEMP_RESTORE = Object.entries(e).map(([e, t])=>`builtin export ${e}='${t.replace(/'/g, "'\\''")}'`).join("; ");
        }
        const y = {
            cwd: r.cwd || s,
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
            const e = new Date, t = (0, C.D9)(g.spawn, String(Le()), p, y);
            return qe && t.pid && function(e, t) {
                Ae.set(e, t);
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
function nt(e, t, r, n) {
    const s = {};
    for (const [t, r] of Object.entries(e)){
        const e = t.startsWith("file://") ? st(t) : t;
        s[e] = r;
        const n = ot(e);
        n !== e && (s[n] = r);
    }
    return s;
}
function st(e) {
    let t = e.replace(/^file:\/\//, "");
    return t = decodeURIComponent(t), t.length > 1 && t.endsWith("/") && (t = t.slice(0, -1)), t;
}
function ot(e, t) {
    if ((0, h.$f)(e)) return e;
    try {
        return (t ?? s.realpathSync)(e);
    } catch  {
        return e;
    }
}
class it extends Error {
    reason;
    constructor(e, t){
        super(e), this.reason = t, this.name = "SandboxUnsupportedError";
    }
}
const at = "darwin" === process.platform;
function ct(e) {
    !function(e) {
        E();
        const { sandboxBinaryPath: t, workspaceReadEnabled: r } = e;
        Fe || (Fe = t), void 0 !== r && (Ue = r);
    }(e);
}
function lt(e, t = [], r = {}, n) {
    if (r.env = k(r.env), n.enableSharedBuildCache && (r = {
        ...r,
        env: {
            ...k(process.env),
            ...U(),
            ...r.env
        }
    }), "insecure_none" !== n.type) {
        if (Ze()) return rt(e, t, r, n);
        const s = Ge;
        throw new it(`Sandbox policy '${n.type}' is not supported on this system. Ensure the sandbox helper binary is available, or use 'insecure_none'. Reason: ${s || "unknown"}`, s ?? void 0);
    }
    return function(e, t, r) {
        return (0, C.D9)(g.spawn, e, t, {
            ...r,
            windowsHide: !0
        });
    }(e, t, r);
}
function ut(e) {
    return at ? Se(e) : Promise.resolve([]);
}
var dt;
!function(e) {
    e.Zsh = "zsh", e.ZshLight = "zsh-light", e.Bash = "bash", e.PowerShell = "powershell", e.Naive = "naive";
}(dt || (dt = {}));
const pt = {
    TERM: "dumb",
    NO_COLOR: "1",
    FORCE_COLOR: "0",
    _ZO_DOCTOR: "0"
};
function mt(e, t, r) {
    const n = e.pid;
    if (void 0 === n) return;
    const s = ()=>{
        try {
            e.kill(r);
        } catch  {}
    };
    switch(t){
        case "process_group":
            try {
                process.kill(-n, r);
            } catch  {
                s();
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
                }).on("error", s);
            } catch  {
                s();
            }
            return;
        case "single_process":
            return void s();
        default:
            throw new Error(`Unknown process tree kill mode: ${String(t)}`);
    }
}
function ht(e, t = [], r = {}, n, s) {
    const o = lt(e, t, {
        ...r,
        env: b(r.env ?? process.env)
    }, n);
    if (s) {
        const e = function(e) {
            return "win32" === e.platform ? "windows_tree" : e.detached ? "process_group" : "single_process";
        }({
            platform: process.platform,
            detached: !0 === r.detached
        }), t = ()=>{
            if (!o.pid) return;
            mt(o, e, "SIGTERM");
            const t = setTimeout(()=>{
                !o.killed && o.pid && mt(o, e, "SIGKILL");
            }, 1e3);
            o.once("exit", ()=>{
                clearTimeout(t);
            });
        };
        s.aborted ? t() : (s.addEventListener("abort", t, {
            once: !0
        }), o.once("exit", ()=>{
            s.removeEventListener("abort", t);
        }));
    }
    return o;
}
function ft(e) {
    e?.on("error", ()=>{});
}
const gt = "IFS= builtin read -r -d '' __cursor_command <&5; exec 5<&-; builtin set -- \"$__cursor_command\"; builtin unset __cursor_command; ";
function yt() {
    return "win32" !== process.platform;
}
function wt(e, t) {
    const r = e.stdio.at(5);
    r instanceof y.Writable && (ft(r), r.end(`${t}\0`));
}
function vt(e, t) {
    e && (ft(e), e.write(t), e.end());
}
function _t(e, t) {
    e && (ft(e), e.on("data", (e)=>{
        t(e.toString());
    }));
}
function At(e) {
    const t = e.indexOf("\n");
    return {
        cwd: e.substring(0, t),
        rest: e.substring(t)
    };
}
function St(e, t) {
    const r = `${t}\n`, n = e.indexOf(r);
    return n >= 0 ? e.slice(n + r.length) : e;
}
const bt = "__CURSOR_BASH_STATE_START__", Et = "__CURSOR_BASH_STATE_END__", It = '#!/usr/bin/env bash\n\n# Usage:\n#   source dump_bash_state.bash\n#   dump_bash_state OUTPUT_FILE\n# Or execute directly (captures a subshell\'s state):\n#   ./dump_bash_state.bash OUTPUT_FILE\n\ndump_bash_state() {\n  set -euo pipefail\n\n  # Require base64 for safe encoding of emitted sections\n  if ! command -v base64 >/dev/null 2>&1; then\n    echo "Error: base64 command is required" >&2\n    return 1\n  fi\n\n  # Helper to log timing, only if DUMP_BASH_STATE_TIMING is set\n  if [[ -n "${DUMP_BASH_STATE_TIMING:-}" ]]; then\n    # Timing setup\n    if [[ "${BASH_VERSION%%.*}" -ge 5 ]]; then\n      # Use EPOCHREALTIME if available (bash 5+)\n      local start_time=${EPOCHREALTIME}\n      local step_start=${EPOCHREALTIME}\n      _log_timing() {\n        local step_name="$1"\n        local now=${EPOCHREALTIME}\n        local step_duration=$(command awk "BEGIN {printf "%.3f", $now - $step_start}")\n        local total_duration=$(command awk "BEGIN {printf "%.3f", $now - $start_time}")\n        builtin printf "[TIMING] %-20s: %6.3fs (total: %6.3fs)\n" "$step_name" "$step_duration" "$total_duration" >&2\n        step_start=$now\n      }\n    else\n      # Fallback for older bash versions\n      local start_time=$(command date +%s.%N)\n      local step_start=$(command date +%s.%N)\n      _log_timing() {\n        local step_name="$1"\n        local now=$(command date +%s.%N)\n        local step_duration=$(command awk "BEGIN {printf "%.3f", $now - $step_start}")\n        local total_duration=$(command awk "BEGIN {printf "%.3f", $now - $start_time}")\n        builtin printf "[TIMING] %-20s: %6.3fs (total: %6.3fs)\n" "$step_name" "$step_duration" "$total_duration" >&2\n        step_start=$now\n      }\n    fi\n  else\n    _log_timing() { :; }\n  fi\n\n  # Helper to append a line to output file\n  _emit() {\n    builtin printf \'%s\n\' "$1"\n  }\n\n  # Helper to safely encode and emit unsafe values\n  _emit_encoded() {\n    local content="$1"\n    local var_name="$2"\n    if [[ -n "$content" ]]; then\n      # Builtin printf, not a here-document: no argument length limit, and no temp file\n      builtin printf \'cursor_snap_%s=$(builtin printf %%s \'"\'"\'%s\'"\'"\' | command base64 -d)\n\' "$var_name" "$(command base64 <<<"$content" | command tr -d \'\n\')"\n      builtin printf \'eval "$cursor_snap_%s"\n\' "$var_name"\n    fi\n  }\n\n  # Start fresh\n  _log_timing "file_init"\n\n  # Emit start marker at the very beginning of the output\n  _emit "__CURSOR_BASH_STATE_START__"\n\n  # Working directory\n  _emit "$PWD"\n  _log_timing "working_dir"\n\n  # Drop ELECTRON_RUN_AS_NODE by exact name so one command exporting it can\'t\n  # bake it into the snapshot that every later command re-evals (IDE-2911:\n  # Cypress boots as plain Node until a new chat). Exact unset rather than the\n  # line-based grep below, which would also eat vars whose name or multiline\n  # value merely contains the token. The shell exits right after the dump.\n  builtin unset ELECTRON_RUN_AS_NODE 2>/dev/null || true\n\n  # Environment variables (export statements)\n  # Filter out: proxy settings plus request/session-scoped vars that must not\n  # leak across shell executions.\n  local env_vars\n  env_vars=$(builtin export -p 2>/dev/null | command grep -viE \'_proxy=|CURSOR_SANDBOX|SUDO_ASKPASS|CURSOR_ASKPASS|CURSOR_CONVERSATION_ID|CURSOR_REQUEST_ID|CURSOR_AGENT_STORE\' || true)\n  if [[ -n "${__CURSOR_SANDBOX_OWNED_ENV:-}" ]]; then\n    env_vars=$(builtin printf \'%s\n\' "$env_vars" | command grep -vE "^(export|declare|typeset)( -[a-zA-Z]+)* (${__CURSOR_SANDBOX_OWNED_ENV// /|})=" || true)\n  fi\n  _emit_encoded "$env_vars" "ENV_VARS_B64"\n  _log_timing "environment"\n\n  # POSIX shell options (replayable as set +/-o lines). Exclude the errexit/nounset/\n  # pipefail this function force-enables above, so they are not baked into the restored\n  # snapshot and leaked onto every subsequent command (a stray pipefail makes a\n  # successful \'cmd | head\' report exit 141).\n  local posix_opts\n  posix_opts=$(builtin shopt -po 2>/dev/null | command grep -vE \'^set [-+]o (errexit|nounset|pipefail)$\' || true)\n  _emit_encoded "$posix_opts" "POSIX_OPTS_B64"\n  _log_timing "posix_options"\n\n  # Bash shopt options (replayable as shopt -s/-u lines)\n  local bash_opts\n  bash_opts=$(builtin shopt -p 2>/dev/null || true)\n  _emit_encoded "$bash_opts" "BASH_OPTS_B64"\n  _log_timing "bash_options"\n\n  # Functions: capture all functions\n  local all_functions\n  all_functions=$(builtin declare -f 2>/dev/null || true)\n  _emit_encoded "$all_functions" "FUNCTIONS_B64"\n  _log_timing "functions"\n\n  # Aliases\n  local aliases\n  aliases=$(builtin alias -p 2>/dev/null || true)\n  _emit_encoded "$aliases" "ALIASES_B64"\n  _log_timing "aliases"\n\n  # Done\n  _emit "# end of bash state dump"\n  _emit "__CURSOR_BASH_STATE_END__"\n  _log_timing "finalize"\n}\n', Ct = {
    flushIntervalMs: 50,
    maxBufferedBytes: 262144
};
class kt {
    writable;
    pending = [];
    pendingBytes = 0;
    flushTimeout;
    flushPromise;
    flushIntervalMs;
    maxBufferedBytes;
    constructor(e, t){
        this.writable = e, this.flushIntervalMs = t?.flushIntervalMs ?? Ct.flushIntervalMs, this.maxBufferedBytes = t?.maxBufferedBytes ?? Ct.maxBufferedBytes;
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
            for(let s = 1; s < e.length; s++){
                const o = e[s];
                o.type !== r ? (t.push({
                    type: r,
                    data: Buffer.concat(n)
                }), r = o.type, n = [
                    o.data
                ]) : n.push(o.data);
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
function xt(e) {
    const t = new h.Zv;
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
    const r = new kt(e.writable, e.outputLimiterOptions);
    let n;
    const s = Promise.all([
        Tt(e.stdout, r, t),
        Rt(e.stderr, "stderr", r)
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
            if (await s, void 0 !== n) throw (e = n) instanceof Error ? e : new Error(String(e));
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
async function Tt(e, t, r) {
    if (e) for await (const n of e){
        const e = r.note(n);
        void 0 !== e && e.length > 0 && await t.push("stdout", e);
    }
}
async function Rt(e, t, r, n) {
    if (e) for await (const s of e)n?.(s), await r.push(t, s);
}
function Bt(e) {
    return e.teamAdmin?.type ?? e.perRepo?.type ?? e.perUser?.type ?? "insecure_none";
}
function Pt(...e) {
    return e.some((e)=>!0 === e);
}
function Jt(...e) {
    const t = e.filter((e)=>void 0 !== e);
    if (0 === t.length) return [];
    if (t.some((e)=>0 === e.length)) return [];
    if (1 === t.length) return (function(e) {
        const t = new Set, r = [];
        for (const n of e){
            const e = Ft(n);
            t.has(e) || (t.add(e), r.push(n));
        }
        return r;
    })(t[0]).map(Ft);
    let r = new Set(t[0].map(Ft));
    for(let e = 1; e < t.length; e++){
        const n = new Set(t[e].map(Ft));
        r = new Set([
            ...r
        ].filter((e)=>n.has(e)));
    }
    return [
        ...r
    ];
}
function Mt(...e) {
    const t = new Set;
    for (const r of e)if (r) for (const e of r)t.add(Ft(e));
    return [
        ...t
    ];
}
const qt = function({ defaultValue: e, rank: t }) {
    return {
        defaultValue: e,
        merge: (...r)=>{
            const n = r.filter((e)=>void 0 !== e);
            return 0 === n.length ? e : n.reduce((e, r)=>t[r] < t[e] ? r : e);
        }
    };
}({
    defaultValue: "system",
    rank: {
        workspace: 0,
        system: 1
    }
}), Dt = {
    defaultValue: [],
    merge: (...e)=>Jt(...e)
};
function Ot(...e) {
    return qt.merge(...e);
}
function Nt(...e) {
    return Dt.merge(...e);
}
function Ft(e) {
    const t = e.replace(/\\/g, "/").replace(/\/+$/, "");
    return "" === t ? "/" : /^[a-zA-Z]:$/.test(t) ? `${t}/` : t;
}
function Ut(...e) {
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
    const s = new Set;
    for (const e of t)if (e.allow) for (const t of e.allow)s.add(t);
    const o = s.size > 0 ? [
        ...s
    ] : void 0;
    let i;
    for(let e = t.length - 1; e >= 0; e--)if (void 0 !== t[e].logging) {
        i = t[e].logging;
        break;
    }
    const a = {
        version: 1
    };
    return void 0 !== r && (a.default = r), void 0 !== o && (a.allow = o), n.size > 0 && (a.deny = [
        ...n
    ]), void 0 !== i && (a.logging = i), void 0 !== a.default || void 0 !== a.allow && 0 !== a.allow.length || void 0 !== a.deny && 0 !== a.deny.length || void 0 !== a.logging ? a : void 0;
}
function Lt(...e) {
    const t = e.filter((e)=>void 0 !== e);
    if (0 === t.length) return;
    const r = {};
    for (const e of t)for (const [t, n] of Object.entries(e)){
        const e = r[t];
        if (e) {
            const s = new Set(e);
            for (const e of n)s.has(e) && s.delete(e), s.add(e);
            r[t] = [
                ...s
            ];
        } else r[t] = [
            ...n
        ];
    }
    return 0 !== Object.keys(r).length ? r : void 0;
}
function $t(...e) {
    for(let t = e.length - 1; t >= 0; t--)if (void 0 !== e[t]) return e[t];
}
async function Qt(e, t, r = {}) {
    if (!t) return {
        policy: {
            type: "insecure_none"
        }
    };
    if ((0, h.$f)(e)) return jt(t, {
        workspaceDir: e
    });
    const s = r.stat ?? d.stat, o = r.spawnPromise ?? z, i = await s((0, n.join)(e, ".git")).then((e)=>e, ()=>null), a = i?.isFile() ?? !1, c = null !== i;
    if ("workspace_readwrite" === Bt(t)) {
        let r = e;
        if (a) {
            const s = await o("git", [
                "rev-parse",
                "--git-common-dir"
            ], {
                cwd: e
            }).then((t)=>(0, n.resolve)(e, t.trim()), ()=>null);
            if (s) {
                r = (0, n.dirname)(s);
                const o = t.perRepo, i = o?.ignoreMapping;
                t = {
                    ...t,
                    perRepo: {
                        ...o,
                        type: "workspace_readwrite",
                        additionalReadwritePaths: [
                            ...o?.additionalReadwritePaths ?? [],
                            s
                        ],
                        ignoreMapping: i,
                        writeProtectionMapping: Lt(o?.writeProtectionMapping, se(e))
                    }
                };
            }
        }
        if (c) return jt(t, {
            workspaceDir: e,
            gitDirParent: r
        });
    }
    return jt(t, {
        workspaceDir: e
    });
}
function jt(e, t) {
    const r = function(e) {
        const { perUser: t, perRepo: r, teamAdmin: n } = e, s = [
            t,
            r,
            n
        ].filter((e)=>void 0 !== e);
        if (0 === s.length) return;
        const o = s[0].type;
        for (const e of s)if (e.type !== o) throw new Error(`Cannot merge policies of different types: found "${o}" and "${e.type}". All policies must be of the same type (all workspace_readwrite, all workspace_readonly, or all insecure_none).`);
        return o;
    }(e);
    if (void 0 === r) return zt(e, t);
    switch(r){
        case "workspace_readwrite":
            return zt(e, t);
        case "workspace_readonly":
            return function(e, t) {
                const r = t?.debug, n = Gt(e, t), s = {
                    policy: Ht({
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
                r && (s.debug = {
                    fieldSources: n.fieldSources
                });
                return s;
            }(e, t);
        case "insecure_none":
            return function(e, t) {
                const { perUser: r, perRepo: n, teamAdmin: s } = e, o = t?.debug, i = {}, a = Pt(r?.allowlistEscalated, n?.allowlistEscalated, s?.allowlistEscalated), c = $t(r?.debugOutputDir, n?.debugOutputDir, s?.debugOutputDir), l = Pt(r?.captureDenies, n?.captureDenies, s?.captureDenies), u = $t(r?.enableSharedBuildCache, n?.enableSharedBuildCache, s?.enableSharedBuildCache), d = {
                    type: "insecure_none",
                    allowlistEscalated: a || void 0,
                    debugOutputDir: c,
                    captureDenies: l || void 0,
                    enableSharedBuildCache: u
                }, p = Object.fromEntries(Object.entries(d).filter(([e, t])=>void 0 !== t));
                p.type = "insecure_none";
                const m = {
                    policy: p
                };
                o && (m.debug = {
                    fieldSources: i
                });
                return m;
            }(e, t);
        default:
            throw new Error(`Unknown policy type: ${r}`);
    }
}
function Gt(e, t) {
    const r = t?.debug, { perUser: n, perRepo: s, teamAdmin: o } = e, i = t?.workspaceDir ?? process.cwd(), a = ie(i), c = {}, l = [
        n,
        s,
        o
    ], u = [
        "perUser",
        "perRepo",
        "teamAdmin",
        "hardcoded"
    ], d = (e, t)=>{
        r && (c[e] = u[t] ?? "unknown");
    }, p = Pt(n?.disableTmpWrite, s?.disableTmpWrite, o?.disableTmpWrite);
    for(let e = l.length - 1; e >= 0; e--)if (!0 === l[e]?.disableTmpWrite) {
        d("disableTmpWrite", e);
        break;
    }
    const m = Pt(n?.networkPolicyStrict, s?.networkPolicyStrict, o?.networkPolicyStrict, a.networkPolicyStrict);
    a.networkPolicyStrict && d("networkPolicyStrict", 3);
    const h = $t(n?.readBoundary, s?.readBoundary, o?.readBoundary) ?? "system", f = $t(n?.additionalReadPaths, s?.additionalReadPaths), g = !1 === o?.allowUserOverrideReadPaths ? Mt(o.additionalReadPaths) : Mt(f, o?.additionalReadPaths), y = "workspace" === h ? g : void 0, w = Mt(n?.additionalReadonlyPaths, s?.additionalReadonlyPaths, o?.additionalReadonlyPaths, a.additionalReadonlyPaths), v = w.length > 0 ? w : void 0;
    let _ = Ut(n?.networkPolicy, s?.networkPolicy, o?.networkPolicy, a.networkPolicy);
    const A = o?.networkPolicy?.allow;
    void 0 !== A && A.length > 0 && void 0 !== _ && (_ = {
        ..._,
        allow: [
            ...A
        ]
    }, r && (c["networkPolicy.allow"] = "teamAdmin (replace)"));
    const S = void 0 !== (b = _) ? b : {
        version: 1,
        default: "deny"
    };
    var b;
    const E = $t(n?.debugOutputDir, s?.debugOutputDir, o?.debugOutputDir), I = Pt(n?.captureDenies, s?.captureDenies, o?.captureDenies), C = $t(n?.enableSharedBuildCache, s?.enableSharedBuildCache, o?.enableSharedBuildCache), k = Lt(n?.ignoreMapping, s?.ignoreMapping, o?.ignoreMapping, a.ignoreMapping), x = function(e) {
        const t = re.filter((e)=>"git" === e.type).map((e)=>e.pattern);
        return {
            [e]: t
        };
    }(t?.gitDirParent ?? i);
    return {
        disableTmpWrite: p || void 0,
        networkPolicyStrict: m,
        readBoundary: h,
        additionalReadPaths: y,
        additionalReadonlyPaths: v,
        networkPolicy: S,
        debugOutputDir: E,
        captureDenies: I || void 0,
        enableSharedBuildCache: C,
        ignoreMapping: k,
        writeProtectionMapping: Lt(n?.writeProtectionMapping, s?.writeProtectionMapping, o?.writeProtectionMapping, a.writeProtectionMapping, x),
        fieldSources: c
    };
}
function Ht(e, t) {
    const r = Object.fromEntries(Object.entries(e).filter(([e, t])=>void 0 !== t));
    return r.type = t, r;
}
function zt(e, t) {
    const { perUser: r, perRepo: n, teamAdmin: s } = e, o = t?.debug, i = Gt(e, t), a = Mt(r?.additionalReadwritePaths, n?.additionalReadwritePaths, s?.additionalReadwritePaths), c = {
        policy: Ht({
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
    return o && (c.debug = {
        fieldSources: i.fieldSources
    }), c;
}
const Wt = "win32" === process.platform;
function Vt(e) {
    return !Wt && !!e?.SUDO_ASKPASS;
}
function Kt(e) {
    return Vt(e) ? "alias sudo='sudo -A'; " : "";
}
function Yt(e) {
    const t = [];
    let r = 0;
    for(; r < e.length;){
        const n = 0 === r || "&&" === e.slice(Math.max(0, r - 2), r) || "||" === e.slice(Math.max(0, r - 2), r) || "|" === e[r - 1] || ";" === e[r - 1], s = Math.max(0, r - 10), o = e.slice(s, r), i = /(?:&&|\|\||[|;])\s*$/.test(o) || 0 === r && /^\s*$/.test(o);
        if ((n || i) && "sudo" === e.slice(r, r + 4)) {
            const n = r + 4;
            if (n >= e.length || /\s/.test(e[n])) {
                let s = n;
                for(; s < e.length && /\s/.test(e[s]);)s++;
                let o = !1;
                if (s < e.length && "-" === e[s]) {
                    let t = s + 1;
                    for(; t < e.length && /[^\s]/.test(e[t]);)t++;
                    const r = e.slice(s, t);
                    o = /^-[a-zA-Z]*A[a-zA-Z]*$/.test(r);
                }
                o ? (t.push("sudo"), r = n) : (t.push("sudo -A"), r = n);
                continue;
            }
        }
        t.push(e[r]), r++;
    }
    return t.join("");
}
var Zt = function(e, t, r) {
    if (null != t) {
        if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
        var n, s;
        if (r) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            n = t[Symbol.asyncDispose];
        }
        if (void 0 === n) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            n = t[Symbol.dispose], r && (s = n);
        }
        if ("function" != typeof n) throw new TypeError("Object not disposable.");
        s && (n = function() {
            try {
                s.call(this);
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
}, Xt = function(e) {
    return function(t) {
        function r(r) {
            t.error = t.hasError ? new e(r, t.error, "An error was suppressed during disposal.") : r, t.hasError = !0;
        }
        var n, s = 0;
        return function e() {
            for(; n = t.stack.pop();)try {
                if (!n.async && 1 === s) return s = 0, t.stack.push(n), Promise.resolve().then(e);
                if (n.dispose) {
                    var o = n.dispose.call(n.value);
                    if (n.async) return s |= 2, Promise.resolve(o).then(e, function(t) {
                        return r(t), e();
                    });
                } else s |= 1;
            } catch (e) {
                r(e);
            }
            if (1 === s) return t.hasError ? Promise.reject(t.error) : Promise.resolve();
            if (t.hasError) throw t.error;
        }();
    };
}("function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
    var n = new Error(r);
    return n.name = "SuppressedError", n.error = e, n.suppressed = t, n;
});
function er(e) {
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
function tr(e) {
    if ("win32" !== process.platform) return e;
    const t = n.normalize(e), r = t[0]?.toLowerCase();
    if (r && ":" === t[1] && t[2] === n.sep) {
        return `/${r}${t.slice(2).replace(/\\/g, "/")}`;
    }
    return t.replace(/\\/g, "/");
}
class rr {
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
        return new rr(e ?? this.cwd, this.state, this.userTerminalHint, this.useFileStateTransport);
    }
    resetSessionCwdAfterHopCdFailure(e) {
        const { cwd: t, sandboxWorkspaceRoot: r } = e;
        n.resolve(t) === n.resolve(this.cwd) && (this.cwd = void 0 === r || n.resolve(r) === n.resolve(t) || (0, h.A)(r) ? (0, h.D1)() : r);
    }
    async *execute(e, t, r) {
        const s = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            const o = Zt(s, (0, m.VI)(e.withName("BashState.execute")), !1), i = r?.pipeStdin ?? !1, a = (0, f.Jt)(), c = r?.workingDirectory ?? this.cwd, l = {
                ...process.env,
                ...pt,
                ...r?.env
            };
            let u = 'builtin eval "$1"';
            i || (u += " < /dev/null");
            const g = Kt(l), y = this.useFileStateTransport;
            let w, v, _;
            if (y) {
                w = await (0, d.mkdtemp)(n.join(p.tmpdir(), "cursor-bash-state-"));
                n.basename(w);
                v = n.join(w, "state-in"), _ = n.join(w, "state-out"), await (0, d.writeFile)(v, this.state, "utf8"), await (0, d.writeFile)(_, "", "utf8").catch(()=>{});
                const e = tr(v), t = tr(_);
                l.CURSOR_STATE_INPUT_FILE = e, l.CURSOR_STATE_OUTPUT_FILE = t;
            }
            const A = [
                "-O",
                "extglob",
                "-c",
                (y ? "" : gt) + `${y ? 'snap=$(command cat "$CURSOR_STATE_INPUT_FILE")' : "snap=$(command cat <&3)"} && builtin shopt -s extglob && builtin eval -- "$snap" && { builtin set +u 2>/dev/null || true; builtin eval "\${__CURSOR_SANDBOX_ENV_RESTORE:-}" 2>/dev/null; ` + F + `builtin export PWD="$(builtin pwd)"; builtin shopt -s expand_aliases 2>/dev/null; ${g}${u}; }; ` + `COMMAND_EXIT_CODE=$?; ${y ? 'mkdir -p "$(dirname "$CURSOR_STATE_OUTPUT_FILE")" 2>/dev/null; dump_bash_state > "$CURSOR_STATE_OUTPUT_FILE"' : "dump_bash_state >&4"}; builtin exit $COMMAND_EXIT_CODE`,
                "--",
                ...y ? [
                    t
                ] : []
            ], S = er(this.userTerminalHint);
            if (!S) throw new Error("Can't find Bash");
            const b = r?.sandboxWorkspaceRoot ?? c, E = (await Qt(b, r?.sandboxPolicy)).policy, I = "insecure_none" !== E.type ? {
                ...E,
                sandboxWorkspaceRoot: b
            } : E;
            let C = "";
            const k = async ()=>{
                if (y) {
                    if (!_) return void (C = this.state);
                    try {
                        C = await (0, d.readFile)(_, "utf8");
                    } catch (e) {
                        console.warn("[shell-exec] Failed to read bash state file", e), C = this.state;
                    }
                }
            }, x = async ()=>{
                if (w) try {
                    await (0, d.rm)(w, {
                        recursive: !0,
                        force: !0
                    });
                } catch  {}
            };
            let T;
            (0, h.$Y)(c) && (0, m.HF)(o.ctx, h.yo);
            try {
                T = ht(S, A, {
                    env: l,
                    stdio: [
                        i ? "pipe" : "ignore",
                        "pipe",
                        "pipe",
                        "pipe",
                        "pipe",
                        y ? "ignore" : "pipe"
                    ],
                    cwd: c,
                    detached: !0
                }, I, r?.signal);
            } catch (e) {
                throw await x(), e;
            }
            T.on("spawn", async ()=>{
                try {
                    await a.write({
                        type: "stdin_ready",
                        stdin: T.stdin ?? void 0,
                        pid: T.pid
                    });
                } catch (e) {}
            });
            const R = xt({
                stdout: T.stdout,
                stderr: T.stderr,
                writable: a,
                bufferOutputEvents: r?.bufferOutputEvents,
                outputLimiterOptions: r?.outputLimiterOptions
            });
            T.on("error", async (e)=>{
                if ((0, h.fK)(e, c)) {
                    this.resetSessionCwdAfterHopCdFailure({
                        cwd: c,
                        sandboxWorkspaceRoot: r?.sandboxWorkspaceRoot
                    }), (0, m.HF)(o.ctx, h.Gq);
                    const e = (0, h.iA)(c);
                    console.warn(`[shell-exec] working directory is not accessible (${e.cwdKind}:${e.cwdHash})`);
                }
                await x(), a.throw(e);
            });
            let B = null, P = null, J = !1;
            const M = async (e)=>{
                if (J) return;
                if (J = !0, P && (clearTimeout(P), P = null), (0, m.HF)(o.ctx, "exit"), e) try {
                    await R.waitForOutput();
                } catch (e) {
                    return await x(), void a.throw(e instanceof Error ? e : new Error(String(e)));
                }
                const t = (0, h.wz)({
                    exitCode: B,
                    stdoutBytes: R.stdoutBytes,
                    stdoutPrefix: R.stdoutPrefix,
                    cwd: c
                }) && "" === C;
                if (t && R.dropHeldStdout(), await R.flush(), t) {
                    this.resetSessionCwdAfterHopCdFailure({
                        cwd: c,
                        sandboxWorkspaceRoot: r?.sandboxWorkspaceRoot
                    }), await x(), (0, m.HF)(o.ctx, h.Gq);
                    const e = (0, h.iA)(c);
                    return console.warn(`[shell-exec] working directory is not accessible (${e.cwdKind}:${e.cwdHash})`), void a.throw((0, h.Vn)(c));
                }
                if (!r?.signal?.aborted) {
                    await k();
                    const e = `${bt}\n`, t = `${Et}\n`;
                    if (C.startsWith(e) && C.endsWith(t)) {
                        let t = C.slice(e.length);
                        t = t.slice(0, -(Et.length + 1));
                        const { cwd: r, rest: n } = At(t);
                        this.state = n, "win32" !== process.platform && r?.startsWith("/") && (this.cwd = r);
                    }
                }
                if (I.captureDenies) try {
                    const e = await ut(T);
                    e && e.length > 0 && await a.write({
                        type: "sandbox_denies",
                        events: e
                    });
                } catch  {}
                try {
                    await a.write({
                        type: "exit",
                        code: B,
                        data: "",
                        aborted: r?.signal?.aborted ?? !1
                    }), a.close();
                } catch  {
                    a.close();
                }
                await x();
            };
            T.on("exit", (e, t)=>{
                B = e;
                const n = r?.closeTimeout ?? 5e3;
                n > 0 && (P = setTimeout(()=>{
                    console.warn(`[shell-exec] Close event did not fire within ${n}ms after exit. This may indicate a background process is holding file descriptors open. Proceeding anyway to prevent hang.`), M(!1);
                }, n));
            }), T.on("close", async ()=>{
                await M(!0);
            });
            const q = T.stdio[3], D = T.stdio[4];
            y || (wt(T, t), vt(q, this.state), _t(D, (e)=>{
                C += e;
            })), yield* a;
        } catch (e) {
            s.error = e, s.hasError = !0;
        } finally{
            Xt(s);
        }
    }
}
var nr = function(e, t, r) {
    if (null != t) {
        if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
        var n, s;
        if (r) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            n = t[Symbol.asyncDispose];
        }
        if (void 0 === n) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            n = t[Symbol.dispose], r && (s = n);
        }
        if ("function" != typeof n) throw new TypeError("Object not disposable.");
        s && (n = function() {
            try {
                s.call(this);
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
}, sr = function(e) {
    return function(t) {
        function r(r) {
            t.error = t.hasError ? new e(r, t.error, "An error was suppressed during disposal.") : r, t.hasError = !0;
        }
        var n, s = 0;
        return function e() {
            for(; n = t.stack.pop();)try {
                if (!n.async && 1 === s) return s = 0, t.stack.push(n), Promise.resolve().then(e);
                if (n.dispose) {
                    var o = n.dispose.call(n.value);
                    if (n.async) return s |= 2, Promise.resolve(o).then(e, function(t) {
                        return r(t), e();
                    });
                } else s |= 1;
            } catch (e) {
                r(e);
            }
            if (1 === s) return t.hasError ? Promise.reject(t.error) : Promise.resolve();
            if (t.hasError) throw t.error;
        }();
    };
}("function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
    var n = new Error(r);
    return n.name = "SuppressedError", n.error = e, n.suppressed = t, n;
});
class or {
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
        return new or(async ()=>(await this.getExecutor()).clone(e));
    }
    async *execute(e, t, r) {
        const n = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            nr(n, (0, m.VI)(e.withName("LazyTerminalExecutor.execute")), !1);
            const s = await this.getExecutor();
            for await (const n of s.execute(e, t, r))yield n;
        } catch (e) {
            n.error = e, n.hasError = !0;
        } finally{
            sr(n);
        }
    }
}
const ir = (e, t, r, n, s)=>`\n${s?.utf8Console ? "\ntry { [Console]::OutputEncoding = [System.Text.UTF8Encoding]::new($false) } catch { }\ntry { [Console]::InputEncoding = [System.Text.UTF8Encoding]::new($false) } catch { }\ntry { $global:OutputEncoding = [System.Text.UTF8Encoding]::new($false) } catch { }\n" : ""}\n${e}\n\nSet-Location '${t}'\n\n# Execute user command\n${r}\n$COMMAND_EXIT_CODE = $LASTEXITCODE\n\n\nfunction Dump-PowerShellState {\n    param(\n        [Parameter(Mandatory = $true)]\n        [string]$OutputFile\n    )\n\n    function Emit {\n        param([string]$Content)\n        Add-Content -Path $OutputFile -Value $Content -Encoding UTF8\n    }\n\n    if (Test-Path $OutputFile) {\n        Remove-Item $OutputFile -Force\n    }\n    New-Item -Path $OutputFile -ItemType File -Force | Out-Null\n    #Log-Timing "file_init"\n\n    Emit $PWD.Path\n    #Log-Timing "working_dir"\n\n    function ShouldPersistEnvVar {\n        param([string]$Name)\n        if ($Name -eq 'CURSOR_CONVERSATION_ID') {\n            return $false\n        }\n        if ($Name -eq 'CURSOR_REQUEST_ID') {\n            return $false\n        }\n        if ($Name -like 'CURSOR_AGENT_STORE*') {\n            return $false\n        }\n        if ($Name -like '*CURSOR_SANDBOX*') {\n            return $false\n        }\n        if ($Name -eq 'ELECTRON_RUN_AS_NODE') {\n            return $false\n        }\n        return $true\n    }\n\n    $envVars = Get-ChildItem Env: | Sort-Object Name\n    foreach ($var in $envVars) {\n        if (-not (ShouldPersistEnvVar -Name $var.Name)) {\n            continue\n        }\n        $encoded = [System.Convert]::ToBase64String([System.Text.Encoding]::UTF8.GetBytes([string]$var.Value))\n        Emit ('Set-Item -LiteralPath ''Env:{0}'' -Value ([System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String(''{1}'')))' -f $var.Name, $encoded)\n    }\n    #Log-Timing "environment"\n\n    $aliases = Get-Alias | Sort-Object Name\n    foreach ($alias in $aliases) {\n        $definition = $alias.Definition\n\n        if ($alias.Options -band [System.Management.Automation.ScopedItemOptions]::ReadOnly) {\n        }\n        elseif ($alias.Options -band [System.Management.Automation.ScopedItemOptions]::Constant) {\n        }\n        elseif ($alias.Options -band [System.Management.Automation.ScopedItemOptions]::AllScope) {\n        }\n        else {\n            Emit ('Set-Alias -Name "{0}" -Value "{1}"' -f $alias.Name, $definition)\n        }\n    }\n\n    #Log-Timing "finalize"\n}\n\nDump-PowerShellState -OutputFile "${n}"\n\nexit $COMMAND_EXIT_CODE\n`;
var ar = function(e, t, r) {
    if (null != t) {
        if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
        var n, s;
        if (r) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            n = t[Symbol.asyncDispose];
        }
        if (void 0 === n) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            n = t[Symbol.dispose], r && (s = n);
        }
        if ("function" != typeof n) throw new TypeError("Object not disposable.");
        s && (n = function() {
            try {
                s.call(this);
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
}, cr = function(e) {
    return function(t) {
        function r(r) {
            t.error = t.hasError ? new e(r, t.error, "An error was suppressed during disposal.") : r, t.hasError = !0;
        }
        var n, s = 0;
        return function e() {
            for(; n = t.stack.pop();)try {
                if (!n.async && 1 === s) return s = 0, t.stack.push(n), Promise.resolve().then(e);
                if (n.dispose) {
                    var o = n.dispose.call(n.value);
                    if (n.async) return s |= 2, Promise.resolve(o).then(e, function(t) {
                        return r(t), e();
                    });
                } else s |= 1;
            } catch (e) {
                r(e);
            }
            if (1 === s) return t.hasError ? Promise.reject(t.error) : Promise.resolve();
            if (t.hasError) throw t.error;
        }();
    };
}("function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
    var n = new Error(r);
    return n.name = "SuppressedError", n.error = e, n.suppressed = t, n;
});
function lr() {
    if ("win32" !== process.platform) {
        const e = process.env.SHELL;
        if (e?.includes("pwsh") || e?.includes("powershell")) return e;
    }
    let e = u("pwsh", []).cmd;
    if ("pwsh" !== e) return e;
    if (e = u("powershell", []).cmd, "powershell" !== e) return e;
    if ("win32" === process.platform && (e = n.join(process.env.SYSTEMROOT, "System32", "WindowsPowerShell", "v1.0", "powershell.exe"), (0, s.existsSync)(e))) return e;
    throw new Error("Neither 'pwsh' (PowerShell Core) nor 'powershell' (Windows PowerShell) found in PATH");
}
class ur {
    cwd;
    state;
    constructor(e, t){
        this.cwd = e, this.state = t;
    }
    async getCwd() {
        return this.cwd;
    }
    clone(e) {
        return new ur(e ?? this.cwd, this.state);
    }
    async *execute(e, t, r) {
        const s = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            const o = ar(s, (0, m.VI)(e.withName("PowerShellState.execute")), !1), i = r?.pipeStdin ?? !1, a = r?.workingDirectory ?? this.cwd, c = (0, f.Jt)(), l = {
                ...process.env,
                ...pt,
                ...r?.env
            }, u = Vt(l) ? Yt(t) : t, h = p.tmpdir(), g = n.join(h, `ps-state-out-${(0, R.randomUUID)()}.txt`), y = "win32" === process.platform, w = ir(this.state, a, u, g, {
                utf8Console: y && !0 === r?.powershellUtf8Console
            }), v = n.join(h, `ps-script-${(0, R.randomUUID)()}.ps1`);
            await async function(e, t) {
                await d.writeFile(e, dr + t, {
                    encoding: "utf8"
                });
            }(v, w);
            const _ = [
                "-ExecutionPolicy",
                "Bypass"
            ];
            i || _.push("-NonInteractive"), _.push("-File", v);
            const A = lr(), S = r?.sandboxWorkspaceRoot ?? a, b = (await Qt(S, r?.sandboxPolicy)).policy, E = ht(A, _, {
                env: l,
                stdio: [
                    i ? "pipe" : "ignore",
                    "pipe",
                    "pipe"
                ],
                cwd: a,
                detached: !y
            }, "insecure_none" !== b.type ? {
                ...b,
                sandboxWorkspaceRoot: S
            } : b, r?.signal);
            E.on("spawn", async ()=>{
                try {
                    await c.write({
                        type: "stdin_ready",
                        stdin: E.stdin ?? void 0,
                        pid: E.pid
                    });
                } catch (e) {}
            });
            const I = xt({
                stdout: E.stdout,
                stderr: E.stderr,
                writable: c,
                bufferOutputEvents: r?.bufferOutputEvents,
                outputLimiterOptions: r?.outputLimiterOptions
            }), C = async ()=>{
                try {
                    const e = await d.readFile(g, "utf8"), { cwd: t, rest: r } = At(e);
                    this.state = r, this.cwd = t.trim(), await (0, d.rm)(g).catch(()=>{});
                } catch (e) {}
                await (0, d.rm)(v).catch(()=>{});
            };
            let k = null, x = null, T = !1;
            const B = async (e)=>{
                if (!T) {
                    if (T = !0, x && (clearTimeout(x), x = null), (0, m.HF)(o.ctx, "exit"), e) try {
                        await I.waitForOutput();
                    } catch (e) {
                        return await C(), void c.throw(e instanceof Error ? e : new Error(String(e)));
                    }
                    await I.flush();
                    try {
                        await c.write({
                            type: "exit",
                            code: k,
                            data: "",
                            aborted: r?.signal?.aborted ?? !1
                        }), await C(), c.close();
                    } catch (e) {
                        c.close();
                    }
                }
            };
            E.on("exit", (e, t)=>{
                k = e;
                const n = r?.closeTimeout ?? 5e3;
                n > 0 && (x = setTimeout(()=>{
                    console.warn(`[shell-exec] Close event did not fire within ${n}ms after exit. This may indicate a background process is holding file descriptors open. Proceeding anyway to prevent hang.`), B(!1);
                }, n));
            }), E.on("close", async ()=>{
                await B(!0);
            }), E.on("error", (e)=>{
                C().catch(()=>{}), c.throw(e);
            }), yield* c;
        } catch (e) {
            s.error = e, s.hasError = !0;
        } finally{
            cr(s);
        }
    }
}
const dr = "\ufeff";
var pr = function(e, t, r) {
    if (null != t) {
        if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
        var n, s;
        if (r) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            n = t[Symbol.asyncDispose];
        }
        if (void 0 === n) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            n = t[Symbol.dispose], r && (s = n);
        }
        if ("function" != typeof n) throw new TypeError("Object not disposable.");
        s && (n = function() {
            try {
                s.call(this);
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
}, mr = function(e) {
    return function(t) {
        function r(r) {
            t.error = t.hasError ? new e(r, t.error, "An error was suppressed during disposal.") : r, t.hasError = !0;
        }
        var n, s = 0;
        return function e() {
            for(; n = t.stack.pop();)try {
                if (!n.async && 1 === s) return s = 0, t.stack.push(n), Promise.resolve().then(e);
                if (n.dispose) {
                    var o = n.dispose.call(n.value);
                    if (n.async) return s |= 2, Promise.resolve(o).then(e, function(t) {
                        return r(t), e();
                    });
                } else s |= 1;
            } catch (e) {
                r(e);
            }
            if (1 === s) return t.hasError ? Promise.reject(t.error) : Promise.resolve();
            if (t.hasError) throw t.error;
        }();
    };
}("function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
    var n = new Error(r);
    return n.name = "SuppressedError", n.error = e, n.suppressed = t, n;
});
class hr {
    cwd;
    options;
    constructor(e, t){
        this.cwd = e, this.options = t;
    }
    async getCwd() {
        return this.cwd;
    }
    clone(e) {
        return new hr(e ?? this.cwd, this.options);
    }
    async *execute(e, t, r) {
        const n = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            const s = pr(n, (0, m.VI)(e.withName("NaiveTerminalExecutor.execute")), !1), o = (0, f.Jt)(), i = r?.pipeStdin ?? !1, a = {
                ...process.env,
                ...pt,
                ...r?.env
            }, c = Vt(a) ? Yt(t) : t, l = r?.workingDirectory ?? this.cwd, u = r?.sandboxWorkspaceRoot ?? l, d = (await Qt(u, r?.sandboxPolicy)).policy, p = "insecure_none" !== d.type ? {
                ...d,
                sandboxWorkspaceRoot: u
            } : d, h = "win32" === process.platform, g = ht(this.options?.shell || process.env.SHELL || "/bin/sh", [
                ...this.options?.shellArgs ?? [],
                "-c",
                c
            ], {
                env: a,
                cwd: l,
                stdio: [
                    i ? "pipe" : "ignore",
                    "pipe",
                    "pipe"
                ],
                detached: !h
            }, p, r?.signal);
            g.on("spawn", async ()=>{
                try {
                    await o.write({
                        type: "stdin_ready",
                        stdin: g.stdin ?? void 0,
                        pid: g.pid
                    });
                } catch (e) {}
            });
            const y = xt({
                stdout: g.stdout,
                stderr: g.stderr,
                writable: o,
                bufferOutputEvents: r?.bufferOutputEvents,
                outputLimiterOptions: r?.outputLimiterOptions
            });
            g.on("error", (e)=>{
                o.throw(e);
            }), g.on("exit", async (e)=>{
                if ((0, m.HF)(s.ctx, "exit"), await y.flush(), p.captureDenies) try {
                    const e = await ut(g);
                    e && e.length > 0 && await o.write({
                        type: "sandbox_denies",
                        events: e
                    });
                } catch  {}
                try {
                    await o.write({
                        type: "exit",
                        code: e,
                        data: "",
                        aborted: r?.signal?.aborted ?? !1
                    }), o.close();
                } catch (e) {
                    o.close();
                }
            }), yield* o;
        } catch (e) {
            n.error = e, n.hasError = !0;
        } finally{
            mr(n);
        }
    }
}
function fr(e) {
    const t = "win32" === process.platform, r = e?.shell ?? (t ? lr() : void 0), n = process.cwd();
    return new hr(n, {
        ...e,
        shell: r
    });
}
const gr = "__CURSOR_ZSH_STATE_START__", yr = "__CURSOR_ZSH_STATE_END__", wr = '#!/usr/bin/env zsh\n\n# Usage:\n#   source dump_zsh_state.zsh\n#   dump_zsh_state\n# Or execute directly (captures a subshell\'s state):\n#   ./dump_zsh_state.zsh\n\n# Define a function so sourcing won\'t alter caller state; emulate locally inside\nfunction dump_zsh_state() {\n  emulate -L zsh -o errreturn -o pipefail\n  set -u\n\n\n  # Helper to log timing, only if DUMP_ZSH_STATE_TIMING is set\n  if [[ -n "${DUMP_ZSH_STATE_TIMING:-}" ]]; then\n    # Timing setup\n    typeset start_time=${EPOCHREALTIME}\n    typeset step_start=${EPOCHREALTIME}\n    _log_timing() {\n      typeset step_name="$1"\n      typeset now=${EPOCHREALTIME}\n      typeset step_duration=$((now - step_start))\n      typeset total_duration=$((now - start_time))\n      builtin printf "[TIMING] %-20s: %6.3fs (total: %6.3fs)\n" "$step_name" "$step_duration" "$total_duration" >&2\n      step_start=$now\n    }\n  else\n    _log_timing() { :; }\n  fi\n\n  # Ensure parameter arrays are available\n  builtin zmodload -F zsh/parameter p:parameters p:options p:functions p:aliases p:galiases p:saliases 2>/dev/null || true\n  _log_timing "zmodload"\n\n  # Helper to print a line to stdout\n  _emit() {\n    builtin print -r -- "$1"\n  }\n\n  # Helper to safely encode and emit unsafe values\n  _emit_encoded() {\n    local content="$1"\n    local var_name="$2"\n    if [[ -n "$content" ]]; then\n      # Builtin printf, not a here-document: no argument length limit, and no temp file\n      builtin printf \'cursor_snap_%s=$(builtin printf %%s \'"\'"\'%s\'"\'"\' | command base64 -d)\n\' "$var_name" "$(command base64 <<<"$content" | command tr -d \'\n\')"\n      builtin printf \'eval "$cursor_snap_%s"\n\' "$var_name"\n    fi\n  }\n\n  _log_timing "init"\n\n  # Emit start marker at the very beginning of the output\n  _emit "__CURSOR_ZSH_STATE_START__"\n\n  # Header\n  _emit "$PWD"\n\n  _emit "# zsh state dump generated on $(command date +\'%Y-%m-%d %H:%M:%S %z\')"\n  _log_timing "header"\n\n  # Working directory\n  _log_timing "working_dir"\n\n  # Drop ELECTRON_RUN_AS_NODE by exact name so one command exporting it can\'t\n  # bake it into the snapshot that every later command re-evals (IDE-2911:\n  # Cypress boots as plain Node until a new chat). Exact unset rather than the\n  # line-based grep below, which would also eat vars whose name or multiline\n  # value merely contains the token. The shell exits right after the dump.\n  builtin unset ELECTRON_RUN_AS_NODE 2>/dev/null || true\n\n  # Environment variables (exported)\n  # Filter out: proxy settings plus request/session-scoped vars that must not\n  # leak across shell executions.\n  # Under a non-UTF-8 locale zsh writes byte 0xa7 inside $\'...\' as M-\', which\n  # its own parser reads as the closing quote (zsh 5.9 Src/utils.c quotestring,\n  # https://github.com/zsh-users/zsh/blob/zsh-5.9/Src/utils.c); the sed rewrites\n  # that one escape to the § form so the restore eval can parse it. It runs\n  # only on scalar $\'...\' lines: a plain-quoted value can hold the same four\n  # characters literally, and there they must stay.\n  local env_vars\n  env_vars=$(builtin typeset -xp 2>/dev/null | command grep -viE \'_proxy=|CURSOR_SANDBOX|SUDO_ASKPASS|CURSOR_ASKPASS|CURSOR_CONVERSATION_ID|CURSOR_REQUEST_ID|CURSOR_AGENT_STORE\' | command sed "/^export[^=]*=[\\$]\'/ s/\\\\\\\\M-\'/\\\\\\\\xa7/g" || true)\n  if [[ -n "${__CURSOR_SANDBOX_OWNED_ENV:-}" ]]; then\n    env_vars=$(builtin printf \'%s\n\' "$env_vars" | command grep -vE "^(export|declare|typeset)( -[a-zA-Z]+)* (${__CURSOR_SANDBOX_OWNED_ENV// /|})=" || true)\n  fi\n  _emit_encoded "$env_vars" "ENV_VARS_B64"\n  _log_timing "env_variables"\n\n  # Options (replayable as setopt lines). Exclude the errreturn/nounset/pipefail this\n  # function force-enables above, so they are not baked into the restored snapshot and\n  # leaked onto every subsequent command (a stray pipefail makes a successful\n  # \'cmd | head\' report exit 141).\n  local zsh_opts\n  zsh_opts=$(setopt 2>/dev/null | command grep -vE \'^(errreturn|nounset|pipefail)$\' | command awk \'{printf "builtin setopt %s 2>/dev/null || true\\n", $0}\' || true)\n  _emit_encoded "$zsh_opts" "ZSH_OPTS_B64"\n  _log_timing "options"\n\n  # Functions: dump all functions at once (much faster than individual processing)\n  local all_functions\n  all_functions=$(builtin typeset -f 2>/dev/null || true)\n  _emit_encoded "$all_functions" "FUNCTIONS_B64"\n  _log_timing "functions"\n\n  # Aliases (regular, global, and suffix)\n  {\n    builtin alias -L 2>/dev/null || true\n    builtin alias -gL 2>/dev/null || true\n    builtin alias -sL 2>/dev/null || true\n  }\n  _log_timing "aliases"\n\n  # Done\n  _emit "# end of zsh state dump"\n  _emit "__CURSOR_ZSH_STATE_END__"\n  _log_timing "finalize"\n}\n';
var vr = function(e, t, r) {
    if (null != t) {
        if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
        var n, s;
        if (r) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            n = t[Symbol.asyncDispose];
        }
        if (void 0 === n) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            n = t[Symbol.dispose], r && (s = n);
        }
        if ("function" != typeof n) throw new TypeError("Object not disposable.");
        s && (n = function() {
            try {
                s.call(this);
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
}, _r = function(e) {
    return function(t) {
        function r(r) {
            t.error = t.hasError ? new e(r, t.error, "An error was suppressed during disposal.") : r, t.hasError = !0;
        }
        var n, s = 0;
        return function e() {
            for(; n = t.stack.pop();)try {
                if (!n.async && 1 === s) return s = 0, t.stack.push(n), Promise.resolve().then(e);
                if (n.dispose) {
                    var o = n.dispose.call(n.value);
                    if (n.async) return s |= 2, Promise.resolve(o).then(e, function(t) {
                        return r(t), e();
                    });
                } else s |= 1;
            } catch (e) {
                r(e);
            }
            if (1 === s) return t.hasError ? Promise.reject(t.error) : Promise.resolve();
            if (t.hasError) throw t.error;
        }();
    };
}("function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
    var n = new Error(r);
    return n.name = "SuppressedError", n.error = e, n.suppressed = t, n;
});
function Ar() {
    const e = process.env.SHELL;
    return e?.includes("zsh") ? e : u("zsh", []).cmd;
}
class Sr {
    cwd;
    state;
    constructor(e, t){
        this.cwd = e, this.state = t;
    }
    async getCwd() {
        return this.cwd;
    }
    clone(e) {
        return new Sr(e ?? this.cwd, this.state);
    }
    async *execute(e, t, r) {
        const n = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            const s = vr(n, (0, m.VI)(e.withName("ZshState.execute")), !1), o = r?.pipeStdin ?? !1, i = (0, f.Jt)(), a = r?.workingDirectory ?? this.cwd, c = {
                ...process.env,
                ...pt,
                ...r?.env
            };
            let l = 'builtin eval "$1"';
            o || (l += " < /dev/null");
            const u = Kt(c), d = yt(), p = [
                "-c",
                (d ? gt : "") + 'builtin export PATH="/usr/bin:/bin:/usr/sbin:/sbin${PATH:+:$PATH}"; snap=$(command cat <&3); builtin unsetopt aliases 2>/dev/null; builtin unalias -m \'*\' 2>/dev/null || true; builtin eval "$snap" && { builtin unsetopt nounset 2>/dev/null || true; builtin eval "${__CURSOR_SANDBOX_ENV_RESTORE:-}" 2>/dev/null; ' + F + `builtin export PWD="$(builtin pwd)"; builtin setopt aliases 2>/dev/null; ${u}${l}; }; COMMAND_EXIT_CODE=$?; dump_zsh_state >&4; builtin exit $COMMAND_EXIT_CODE`,
                "--",
                ...d ? [] : [
                    t
                ]
            ], h = r?.sandboxWorkspaceRoot ?? a, g = (await Qt(h, r?.sandboxPolicy)).policy, y = "insecure_none" !== g.type ? {
                ...g,
                sandboxWorkspaceRoot: h
            } : g, w = ht(Ar(), p, {
                env: c,
                stdio: [
                    o ? "pipe" : "ignore",
                    "pipe",
                    "pipe",
                    "pipe",
                    "pipe",
                    d ? "pipe" : "ignore"
                ],
                cwd: a,
                detached: !0
            }, y, r?.signal);
            let v = "";
            w.on("spawn", async ()=>{
                try {
                    await i.write({
                        type: "stdin_ready",
                        stdin: w.stdin ?? void 0,
                        pid: w.pid
                    });
                } catch (e) {}
            });
            const _ = xt({
                stdout: w.stdout,
                stderr: w.stderr,
                writable: i,
                bufferOutputEvents: r?.bufferOutputEvents,
                outputLimiterOptions: r?.outputLimiterOptions
            });
            w.on("error", (e)=>{
                i.throw(e);
            });
            let A = null, S = null, b = !1;
            const E = async (e)=>{
                if (!b) {
                    if (b = !0, S && (clearTimeout(S), S = null), (0, m.HF)(s.ctx, "exit"), e) try {
                        await _.waitForOutput();
                    } catch (e) {
                        return void i.throw(e instanceof Error ? e : new Error(String(e)));
                    }
                    if (await _.flush(), !r?.signal?.aborted) {
                        const e = `${gr}\n`, t = `${yr}\n`;
                        if (v.startsWith(e) && v.endsWith(t)) {
                            let t = v.slice(e.length);
                            t = t.slice(0, -(yr.length + 1));
                            const { cwd: r, rest: n } = At(t);
                            r?.startsWith("/") && (this.state = n, this.cwd = r);
                        }
                    }
                    if (y.captureDenies) try {
                        const e = await ut(w);
                        e && e.length > 0 && await i.write({
                            type: "sandbox_denies",
                            events: e
                        });
                    } catch  {}
                    try {
                        await i.write({
                            type: "exit",
                            code: A,
                            data: "",
                            aborted: r?.signal?.aborted ?? !1
                        }), i.close();
                    } catch (e) {
                        i.close();
                    }
                }
            };
            w.on("exit", (e, t)=>{
                A = e;
                const n = r?.closeTimeout ?? 5e3;
                n > 0 && (S = setTimeout(()=>{
                    b || (console.warn(`[shell-exec] Close event did not fire within ${n}ms after exit. This may indicate a background process is holding file descriptors open. Killing detached process group.`), function(e, t, r) {
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
                    }(w.pid, "SIGKILL"), E(!1));
                }, n));
            }), w.on("close", async ()=>{
                await E(!0);
            });
            const I = w.stdio[3], C = w.stdio[4];
            d && wt(w, t), vt(I, this.state), _t(C, (e)=>{
                v += e;
            }), yield* i;
        } catch (e) {
            n.error = e, n.hasError = !0;
        } finally{
            _r(n);
        }
    }
}
const br = "__CURSOR_ZSH_STATE_LIGHT_VALID__", Er = '#!/usr/bin/env zsh\n\n# Usage:\n#   source dump_zsh_state_light.zsh\n#   dump_zsh_state_light\n# Or execute directly (captures a subshell\'s state):\n#   ./dump_zsh_state_light.zsh\n\n# Lightweight version that skips function tracking for better performance\n\n# Define a function so sourcing won\'t alter caller state; emulate locally inside\nfunction dump_zsh_state_light() {\n  emulate -L zsh -o errreturn -o pipefail\n  set -u\n\n\n  # Helper to log timing, only if DUMP_ZSH_STATE_TIMING is set\n  if [[ -n "${DUMP_ZSH_STATE_TIMING:-}" ]]; then\n    # Timing setup\n    typeset start_time=${EPOCHREALTIME}\n    typeset step_start=${EPOCHREALTIME}\n    _log_timing() {\n      typeset step_name="$1"\n      typeset now=${EPOCHREALTIME}\n      typeset step_duration=$((now - step_start))\n      typeset total_duration=$((now - start_time))\n      builtin printf "[TIMING] %-20s: %6.3fs (total: %6.3fs)\n" "$step_name" "$step_duration" "$total_duration" >&2\n      step_start=$now\n    }\n  else\n    _log_timing() { :; }\n  fi\n\n  # Ensure parameter arrays are available\n  builtin zmodload -F zsh/parameter p:parameters p:options p:aliases p:galiases p:saliases 2>/dev/null || true\n  _log_timing "zmodload"\n\n  # Helper to print a line to stdout\n  _emit() {\n    builtin print -r -- "$1"\n  }\n\n  # Helper to safely encode and emit unsafe values\n  _emit_encoded() {\n    local content="$1"\n    local var_name="$2"\n    if [[ -n "$content" ]]; then\n      # Builtin printf, not a here-document: no argument length limit, and no temp file\n      builtin printf \'cursor_snap_%s=$(builtin printf %%s \'"\'"\'%s\'"\'"\' | command base64 -d)\n\' "$var_name" "$(command base64 <<<"$content" | command tr -d \'\n\')"\n      builtin printf \'eval "$cursor_snap_%s"\n\' "$var_name"\n    fi\n  }\n\n  _log_timing "init"\n\n  # Emit validity marker so we can detect if dump_zsh_state_light completed\n  _emit "__CURSOR_ZSH_STATE_LIGHT_VALID__"\n\n  # Header\n  _emit "$PWD"\n\n  _emit "# zsh state dump (light) generated on $(command date +\'%Y-%m-%d %H:%M:%S %z\')"\n  _log_timing "header"\n\n  # Working directory\n  _log_timing "working_dir"\n\n  # Drop ELECTRON_RUN_AS_NODE by exact name so one command exporting it can\'t\n  # bake it into the snapshot that every later command re-evals (IDE-2911:\n  # Cypress boots as plain Node until a new chat). Exact unset rather than the\n  # line-based grep below, which would also eat vars whose name or multiline\n  # value merely contains the token. The shell exits right after the dump.\n  builtin unset ELECTRON_RUN_AS_NODE 2>/dev/null || true\n\n  # Environment variables (exported)\n  # Filter out: proxy settings plus request/session-scoped vars that must not\n  # leak across shell executions.\n  # Under a non-UTF-8 locale zsh writes byte 0xa7 inside $\'...\' as M-\', which\n  # its own parser reads as the closing quote (zsh 5.9 Src/utils.c quotestring,\n  # https://github.com/zsh-users/zsh/blob/zsh-5.9/Src/utils.c); the sed rewrites\n  # that one escape to the § form so the restore eval can parse it. It runs\n  # only on scalar $\'...\' lines: a plain-quoted value can hold the same four\n  # characters literally, and there they must stay.\n  local env_vars\n  env_vars=$(builtin typeset -xp 2>/dev/null | command grep -viE \'_proxy=|CURSOR_SANDBOX|SUDO_ASKPASS|CURSOR_ASKPASS|CURSOR_CONVERSATION_ID|CURSOR_REQUEST_ID|CURSOR_AGENT_STORE\' | command sed "/^export[^=]*=[\\$]\'/ s/\\\\\\\\M-\'/\\\\\\\\xa7/g" || true)\n  if [[ -n "${__CURSOR_SANDBOX_OWNED_ENV:-}" ]]; then\n    env_vars=$(builtin printf \'%s\n\' "$env_vars" | command grep -vE "^(export|declare|typeset)( -[a-zA-Z]+)* (${__CURSOR_SANDBOX_OWNED_ENV// /|})=" || true)\n  fi\n  _emit_encoded "$env_vars" "ENV_VARS_B64"\n  _log_timing "env_variables"\n\n  # Options (replayable as setopt lines). Exclude the errreturn/nounset/pipefail this\n  # function force-enables above, so they are not baked into the restored snapshot and\n  # leaked onto every subsequent command (a stray pipefail makes a successful\n  # \'cmd | head\' report exit 141).\n  local zsh_opts\n  zsh_opts=$(setopt 2>/dev/null | command grep -vE \'^(errreturn|nounset|pipefail)$\' | command awk \'{printf "builtin setopt %s 2>/dev/null || true\\n", $0}\' || true)\n  _emit_encoded "$zsh_opts" "ZSH_OPTS_B64"\n  _log_timing "options"\n\n  # SKIP FUNCTIONS - this is the key difference for performance\n\n  # Aliases (regular, global, and suffix)\n  {\n    builtin alias -L 2>/dev/null || true\n    builtin alias -gL 2>/dev/null || true\n    builtin alias -sL 2>/dev/null || true\n  }\n  _log_timing "aliases"\n\n  # Done\n  _emit "# end of zsh state dump (light)"\n  _log_timing "finalize"\n}\n';
var Ir = function(e, t, r) {
    if (null != t) {
        if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
        var n, s;
        if (r) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            n = t[Symbol.asyncDispose];
        }
        if (void 0 === n) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            n = t[Symbol.dispose], r && (s = n);
        }
        if ("function" != typeof n) throw new TypeError("Object not disposable.");
        s && (n = function() {
            try {
                s.call(this);
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
}, Cr = function(e) {
    return function(t) {
        function r(r) {
            t.error = t.hasError ? new e(r, t.error, "An error was suppressed during disposal.") : r, t.hasError = !0;
        }
        var n, s = 0;
        return function e() {
            for(; n = t.stack.pop();)try {
                if (!n.async && 1 === s) return s = 0, t.stack.push(n), Promise.resolve().then(e);
                if (n.dispose) {
                    var o = n.dispose.call(n.value);
                    if (n.async) return s |= 2, Promise.resolve(o).then(e, function(t) {
                        return r(t), e();
                    });
                } else s |= 1;
            } catch (e) {
                r(e);
            }
            if (1 === s) return t.hasError ? Promise.reject(t.error) : Promise.resolve();
            if (t.hasError) throw t.error;
        }();
    };
}("function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
    var n = new Error(r);
    return n.name = "SuppressedError", n.error = e, n.suppressed = t, n;
});
function kr() {
    const e = process.env.SHELL;
    return e?.includes("zsh") ? e : u("zsh", []).cmd;
}
class xr {
    cwd;
    state;
    constructor(e, t){
        this.cwd = e, this.state = t;
    }
    async getCwd() {
        return this.cwd;
    }
    clone(e) {
        return new xr(e ?? this.cwd, this.state);
    }
    async *execute(e, t, r) {
        const n = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            const s = Ir(n, (0, m.VI)(e.withName("ZshLightState.execute")), !1), o = r?.pipeStdin ?? !1, i = (0, f.Jt)(), a = r?.workingDirectory ?? this.cwd, c = {
                ...process.env,
                ...pt,
                ...r?.env
            };
            let l = 'builtin eval "$1"';
            o || (l += " < /dev/null");
            const u = Kt(c), d = yt(), p = [
                "-c",
                (d ? gt : "") + "builtin export PATH=\"/usr/bin:/bin:/usr/sbin:/sbin${PATH:+:$PATH}\"; snap=$(command cat <&3); builtin unsetopt aliases 2>/dev/null; builtin unalias -m '*' 2>/dev/null || true; " + `${Er} builtin eval "$snap" && { builtin unsetopt nounset 2>/dev/null || true; builtin eval "\${__CURSOR_SANDBOX_ENV_RESTORE:-}" 2>/dev/null; ` + F + `builtin export PWD="$(builtin pwd)"; builtin setopt aliases 2>/dev/null; ${u}${l}; }; COMMAND_EXIT_CODE=$?; dump_zsh_state_light >&4; builtin exit $COMMAND_EXIT_CODE`,
                "--",
                ...d ? [] : [
                    t
                ]
            ], h = r?.sandboxWorkspaceRoot ?? a, g = (await Qt(h, r?.sandboxPolicy)).policy, y = "insecure_none" !== g.type ? {
                ...g,
                sandboxWorkspaceRoot: h
            } : g, w = ht(kr(), p, {
                env: c,
                stdio: [
                    o ? "pipe" : "ignore",
                    "pipe",
                    "pipe",
                    "pipe",
                    "pipe",
                    d ? "pipe" : "ignore"
                ],
                cwd: a,
                detached: !0
            }, y, r?.signal);
            let v = "";
            w.on("spawn", async ()=>{
                try {
                    await i.write({
                        type: "stdin_ready",
                        stdin: w.stdin ?? void 0,
                        pid: w.pid
                    });
                } catch (e) {}
            });
            const _ = xt({
                stdout: w.stdout,
                stderr: w.stderr,
                writable: i,
                bufferOutputEvents: r?.bufferOutputEvents,
                outputLimiterOptions: r?.outputLimiterOptions
            });
            w.on("error", (e)=>{
                i.throw(e);
            });
            let A = null, S = null, b = !1;
            const E = async (e)=>{
                if (!b) {
                    if (b = !0, S && (clearTimeout(S), S = null), (0, m.HF)(s.ctx, "exit"), e) try {
                        await _.waitForOutput();
                    } catch (e) {
                        return void i.throw(e instanceof Error ? e : new Error(String(e)));
                    }
                    if (await _.flush(), !r?.signal?.aborted) {
                        const e = `${br}\n`;
                        if (v.startsWith(e)) {
                            const t = v.slice(e.length), { cwd: r, rest: n } = At(t);
                            r?.startsWith("/") && (this.state = n, this.cwd = r);
                        }
                    }
                    if (y.captureDenies) try {
                        const e = await ut(w);
                        e && e.length > 0 && await i.write({
                            type: "sandbox_denies",
                            events: e
                        });
                    } catch  {}
                    try {
                        await i.write({
                            type: "exit",
                            code: A,
                            data: "",
                            aborted: r?.signal?.aborted ?? !1
                        }), i.close();
                    } catch (e) {
                        i.close();
                    }
                }
            };
            w.on("exit", (e, t)=>{
                A = e;
                const n = r?.closeTimeout ?? 5e3;
                n > 0 && (S = setTimeout(()=>{
                    console.warn(`[shell-exec] Close event did not fire within ${n}ms after exit. This may indicate a background process is holding file descriptors open. Proceeding anyway to prevent hang.`), E(!1);
                }, n));
            }), w.on("close", async ()=>{
                await E(!0);
            });
            const I = w.stdio[3], C = w.stdio[4];
            d && wt(w, t), vt(I, this.state), _t(C, (e)=>{
                v += e;
            }), yield* i;
        } catch (e) {
            n.error = e, n.hasError = !0;
        } finally{
            Cr(n);
        }
    }
}
var Tr, Rr, Br = require("./module-643.js");
!function(e) {
    e[e.EventLoopDelayP95Ms = 50] = "EventLoopDelayP95Ms", e[e.EventLoopUtilization = .7] = "EventLoopUtilization";
}(Tr || (Tr = {})), function(e) {
    e[e.SampleIntervalMs = 250] = "SampleIntervalMs", e[e.EventLoopResolutionMs = 20] = "EventLoopResolutionMs";
}(Rr || (Rr = {}));
const Pr = {
    eventLoopDelayP95Ms: 0,
    eventLoopUtilization: 0
};
let Jr, Mr = 0;
class qr {
    eventLoopMonitor;
    sampleTimer;
    lastEventLoopUtilization = Br.performance.eventLoopUtilization();
    latestSnapshot = Pr;
    constructor(){
        this.eventLoopMonitor = (0, Br.monitorEventLoopDelay)({
            resolution: Rr.EventLoopResolutionMs
        }), this.lastEventLoopUtilization = Br.performance.eventLoopUtilization(), this.eventLoopMonitor.enable(), this.sample(), this.sampleTimer = setInterval(()=>{
            this.sample();
        }, Rr.SampleIntervalMs), this.sampleTimer.unref?.();
    }
    dispose() {
        void 0 !== this.sampleTimer && (clearInterval(this.sampleTimer), this.sampleTimer = void 0, this.eventLoopMonitor.disable(), this.latestSnapshot = Pr, this.lastEventLoopUtilization = Br.performance.eventLoopUtilization());
    }
    isUnderPressure() {
        return this.latestSnapshot.eventLoopDelayP95Ms >= Tr.EventLoopDelayP95Ms || this.latestSnapshot.eventLoopUtilization >= Tr.EventLoopUtilization;
    }
    formatSuppressionSection() {
        const e = this.latestSnapshot, t = [
            `event loop delay p95 ${e.eventLoopDelayP95Ms.toFixed(1)}ms (threshold ${Tr.EventLoopDelayP95Ms}ms)`,
            `event loop utilization ${(100 * e.eventLoopUtilization).toFixed(1)}% (threshold ${(100 * Tr.EventLoopUtilization).toFixed(1)}%)`
        ].join(", "), r = this.getPressureTriggerReasons(e);
        return `event loop pressure gate enabled; ${r.length > 0 ? `event loop under pressure (${r.join(", ")})` : "event loop not under pressure"}; event loop metrics: ${t}`;
    }
    getPressureTriggerReasons(e) {
        const t = [];
        return e.eventLoopDelayP95Ms >= Tr.EventLoopDelayP95Ms && t.push(`event loop delay p95 ${e.eventLoopDelayP95Ms.toFixed(1)}ms >= ${Tr.EventLoopDelayP95Ms}ms`), e.eventLoopUtilization >= Tr.EventLoopUtilization && t.push(`event loop utilization ${(100 * e.eventLoopUtilization).toFixed(1)}% >= ${(100 * Tr.EventLoopUtilization).toFixed(1)}%`), t;
    }
    sample() {
        this.latestSnapshot = {
            eventLoopDelayP95Ms: this.computeEventLoopDelayP95Ms(),
            eventLoopUtilization: this.computeEventLoopUtilization()
        };
    }
    computeEventLoopDelayP95Ms() {
        const e = this.eventLoopMonitor.percentile(95);
        if (this.eventLoopMonitor.reset(), !Number.isFinite(e)) return 0;
        const t = e / 1e6;
        return Math.max(0, t - Rr.EventLoopResolutionMs);
    }
    computeEventLoopUtilization() {
        const e = Br.performance.eventLoopUtilization(), t = e.active - this.lastEventLoopUtilization.active, r = t + (e.idle - this.lastEventLoopUtilization.idle);
        return this.lastEventLoopUtilization = e, r <= 0 || !Number.isFinite(r) ? 0 : t / r;
    }
}
const Dr = {
    windowMs: 6e4,
    minimumThresholdCharsPerSecond: 65536,
    thresholdCharsPerSecondWithoutPressure: 2097152,
    minChars: 262144
}, Or = 1e3, Nr = "\n[This shell is producing too much output to stream. The command will still run.]\n";
class Fr {
    bucketChars;
    bucketStarts;
    totalChars = 0;
    outputSuppressed = !1;
    noticeSent = !1;
    windowMs;
    minimumThresholdCharsPerSecond;
    thresholdCharsPerSecondWithoutPressure;
    minChars;
    eventLoopPressureTracker;
    disposed = !1;
    constructor(e){
        this.windowMs = e?.windowMs ?? Dr.windowMs, this.minimumThresholdCharsPerSecond = e?.minimumThresholdCharsPerSecond ?? Dr.minimumThresholdCharsPerSecond, this.thresholdCharsPerSecondWithoutPressure = e?.thresholdCharsPerSecondWithoutPressure ?? Dr.thresholdCharsPerSecondWithoutPressure, this.minChars = e?.minChars ?? Dr.minChars;
        const t = Math.ceil(this.windowMs / Or) + 1;
        this.bucketChars = new Uint32Array(t), this.bucketStarts = new Float64Array(t);
    }
    record(e, t = Date.now()) {
        if (this.disposed) return {
            shouldForward: !this.outputSuppressed,
            noticeJustTriggered: !1,
            charsPerSecond: 0,
            thresholdCharsPerSecond: this.minimumThresholdCharsPerSecond
        };
        this.recordChars(e, t);
        const r = this.getEventLoopPressureTracker().isUnderPressure(), n = this.getCharsInWindow(t), s = this.getAverageCharsPerSecond(t), o = this.getPeakBucketCharsPerSecond(t), i = Math.max(s, o), a = n >= this.minChars, c = a && i >= this.thresholdCharsPerSecondWithoutPressure, l = a && r && s >= this.minimumThresholdCharsPerSecond, u = c ? this.thresholdCharsPerSecondWithoutPressure : r ? this.minimumThresholdCharsPerSecond : this.thresholdCharsPerSecondWithoutPressure, d = c ? i : s;
        this.outputSuppressed || !c && !l || (this.outputSuppressed = !0);
        const p = this.outputSuppressed && !this.noticeSent;
        return p && (this.noticeSent = !0, console.warn("[OutputSuppressionController] Suppressing shell output:", function(e) {
            const t = `volume thresholds met (${[
                `output volume ${e.charsInWindow} chars in window >= min ${e.minChars}`,
                `output rate ${Math.round(e.charsPerSecond)} chars/s >= threshold ${e.triggeredThresholdCharsPerSecond} chars/s`
            ].join("; ")})`, r = e.suppressWithoutPressure ? "event loop pressure gate bypassed due to extreme output rate" : e.eventLoopPressureTracker.formatSuppressionSection();
            return `${t}; ${r}`;
        }({
            charsInWindow: n,
            charsPerSecond: d,
            minChars: this.minChars,
            triggeredThresholdCharsPerSecond: u,
            suppressWithoutPressure: c,
            eventLoopPressureTracker: this.getEventLoopPressureTracker()
        }))), {
            shouldForward: !this.outputSuppressed,
            noticeJustTriggered: p,
            charsPerSecond: d,
            thresholdCharsPerSecond: u
        };
    }
    reset() {
        this.disposed || (this.bucketChars.fill(0), this.bucketStarts.fill(0), this.totalChars = 0, this.outputSuppressed = !1, this.noticeSent = !1);
    }
    dispose() {
        this.disposed || (this.disposed = !0, this.eventLoopPressureTracker?.dispose(), this.eventLoopPressureTracker = void 0);
    }
    getEventLoopPressureTracker() {
        return void 0 === this.eventLoopPressureTracker && (this.eventLoopPressureTracker = function() {
            Mr++, void 0 === Jr && (Jr = new qr);
            const e = Jr;
            let t = !1;
            return {
                isUnderPressure: ()=>e.isUnderPressure(),
                formatSuppressionSection: ()=>e.formatSuppressionSection(),
                dispose: ()=>{
                    t || (t = !0, Mr--, 0 === Mr && void 0 !== Jr && (Jr.dispose(), Jr = void 0));
                }
            };
        }()), this.eventLoopPressureTracker;
    }
    recordChars(e, t) {
        if (this.prune(t), e <= 0) return;
        const r = Math.floor(t / Or) * Or, n = Math.floor(r / Or) % this.bucketChars.length;
        this.bucketStarts[n] !== r && (this.totalChars -= this.bucketChars[n], this.bucketStarts[n] = r, this.bucketChars[n] = 0), this.bucketChars[n] += e, this.totalChars += e;
    }
    getAverageCharsPerSecond(e) {
        if (this.prune(e), 0 === this.totalChars) return 0;
        const t = e - this.windowMs;
        let r = e;
        for(let e = 0; e < this.bucketStarts.length; e++)this.bucketChars[e] > 0 && this.bucketStarts[e] >= t && (r = Math.min(r, this.bucketStarts[e]));
        const n = Math.max(Or, Math.min(this.windowMs, e - r + Or));
        return this.totalChars / (n / 1e3);
    }
    getPeakBucketCharsPerSecond(e) {
        this.prune(e);
        const t = e - this.windowMs;
        let r = 0;
        for(let e = 0; e < this.bucketChars.length; e++)this.bucketStarts[e] >= t && (r = Math.max(r, this.bucketChars[e]));
        return r / 1;
    }
    getCharsInWindow(e) {
        return this.prune(e), this.totalChars;
    }
    prune(e) {
        const t = e - this.windowMs;
        for(let e = 0; e < this.bucketStarts.length; e++)0 !== this.bucketStarts[e] && this.bucketStarts[e] < t && (this.totalChars -= this.bucketChars[e], this.bucketStarts[e] = 0, this.bucketChars[e] = 0);
    }
}
var Ur = require("./module-68388.js");
function Lr(e) {
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
function $r(e) {
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
    const s = {
        ...r,
        networkAccess: e.networkAccess,
        networkPolicy: Lr(e.networkPolicy),
        networkPolicyStrict: e.networkPolicyStrict,
        additionalReadonlyPaths: n,
        readBoundary: e.readBoundary,
        additionalReadPaths: Array.isArray(e.additionalReadPaths) ? e.additionalReadPaths : void 0,
        disableTmpWrite: e.disableTmpWrite
    };
    if ("workspace_readonly" === t) {
        return {
            type: "workspace_readonly",
            ...s
        };
    }
    return {
        type: "workspace_readwrite",
        ...s,
        additionalReadwritePaths: e.additionalReadwritePaths
    };
}
async function Qr(e, t) {
    try {
        const r = await (0, d.readFile)(e, "utf-8"), n = JSON.parse(r), s = function(e) {
            if ("object" != typeof e || null === e) return "Expected an object";
            const t = e;
            if (void 0 !== t.type) {
                const e = [
                    "insecure_none",
                    "workspace_readwrite",
                    "workspace_readonly"
                ];
                if ("string" != typeof t.type || !e.includes(t.type)) return `Invalid type: expected one of ${e.join(", ")}`;
            }
            const r = [
                "networkAccess",
                "networkPolicyStrict",
                "disableTmpWrite",
                "enableSharedBuildCache",
                "captureDenies"
            ];
            for (const e of r)if (void 0 !== t[e] && "boolean" != typeof t[e]) return `Invalid ${e}: expected boolean`;
            const n = [
                "debugOutputDir"
            ];
            for (const e of n)if (void 0 !== t[e] && "string" != typeof t[e]) return `Invalid ${e}: expected string`;
            const s = [
                "additionalReadwritePaths",
                "additionalReadonlyPaths",
                "additionalReadPaths"
            ];
            for (const e of s)if (void 0 !== t[e]) {
                if (!Array.isArray(t[e])) return `Invalid ${e}: expected array`;
                if (!t[e].every((e)=>"string" == typeof e)) return `Invalid ${e}: expected array of strings`;
            }
            if (void 0 !== t.readBoundary && "system" !== t.readBoundary && "workspace" !== t.readBoundary) return 'Invalid readBoundary: expected "system" or "workspace"';
            if (void 0 !== t.networkPolicy) {
                if ("object" != typeof t.networkPolicy || null === t.networkPolicy) return "Invalid networkPolicy: expected object";
                const e = t.networkPolicy;
                if (void 0 !== e.default && "allow" !== e.default && "deny" !== e.default) return 'Invalid networkPolicy.default: expected "allow" or "deny"';
                if (void 0 !== e.allow && !Array.isArray(e.allow)) return "Invalid networkPolicy.allow: expected array";
                if (void 0 !== e.deny && !Array.isArray(e.deny)) return "Invalid networkPolicy.deny: expected array";
            }
        }(n);
        if (s) return {
            success: !1,
            error: `Invalid sandbox policy: ${s}`
        };
        let o = $r(n);
        return t && (o = Gr(o, t)), {
            success: !0,
            policy: o
        };
    } catch (e) {
        return e instanceof Error ? "code" in e && "ENOENT" === e.code ? {
            success: !1,
            error: "File not found"
        } : e instanceof SyntaxError ? {
            success: !1,
            error: `Invalid JSON: ${e.message}`
        } : {
            success: !1,
            error: e.message
        } : {
            success: !1,
            error: "Unknown error"
        };
    }
}
async function jr(e, t) {
    const r = await Qr(e, t);
    if (r.success) return r.policy;
}
function Gr(e, t) {
    if ("insecure_none" === e.type) return e;
    const r = e.additionalReadonlyPaths?.map((e)=>(0, Ur.o1)(e, t)), n = e.additionalReadPaths?.map((e)=>(0, Ur.o1)(e, t));
    if ("workspace_readonly" === e.type) return {
        ...e,
        additionalReadonlyPaths: r,
        additionalReadPaths: n
    };
    const s = e.additionalReadwritePaths?.map((e)=>(0, Ur.o1)(e, t));
    return {
        ...e,
        additionalReadonlyPaths: r,
        additionalReadPaths: n,
        additionalReadwritePaths: s
    };
}
function Hr(e) {
    switch(e){
        case dt.Zsh:
        case dt.ZshLight:
            return u("zsh", []).cmd;
        case dt.Bash:
            return u("bash", []).cmd;
        case dt.PowerShell:
            return lr();
        default:
            return process.env.SHELL || "/bin/sh";
    }
}
function zr(e) {
    try {
        return u(e, []).cmd !== e;
    } catch (e) {
        return !1;
    }
}
function Wr() {
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
function Vr(e) {
    if (e === dt.ZshLight) return dt.ZshLight;
    const t = e || process.env.SHELL || "", r = "win32" === process.platform, n = r && !e ? Wr() : void 0, s = void 0 !== n || /git.*bash\.exe$/i.test(t) || /program.*git.*bin.*bash\.exe$/i.test(t), o = !r || s;
    return t.includes("zsh") ? dt.Zsh : t.includes("bash") && o ? dt.Bash : t.includes("pwsh") || t.includes("powershell") ? dt.PowerShell : n ? dt.Bash : r && (zr("pwsh") || zr("powershell")) ? dt.PowerShell : zr("zsh") ? dt.Zsh : zr("bash") && o ? dt.Bash : zr("pwsh") || zr("powershell") ? dt.PowerShell : dt.Naive;
}
function Kr(e) {
    let t = e;
    if (!e?.userTerminalHint) {
        const r = Wr();
        r && (t = {
            ...e,
            userTerminalHint: r
        });
    }
    switch(Vr(t?.userTerminalHint ?? "")){
        case dt.Zsh:
            return new or(()=>(async function(e) {
                    const t = {
                        ...process.env,
                        ...pt,
                        ...e?.env
                    }, r = "__CURSOR_STATE_MARKER__", n = [
                        "-o",
                        "extendedglob",
                        "-ilc",
                        `${wr} builtin printf '${r}\\n'; dump_zsh_state`
                    ], s = ht(Ar(), n, {
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
                    let o = "";
                    s.stdout?.on("data", (e)=>{
                        o += e.toString();
                    }), s.on("error", (e)=>{
                        console.warn(`[shell-exec] zsh state init spawn failed; falling back to empty state: ${e instanceof Error ? e.message : String(e)}`);
                    }), await new Promise((e)=>{
                        s.on("close", ()=>{
                            e(void 0);
                        });
                    });
                    const i = St(o, r), a = `${gr}\n`, c = `${yr}\n`;
                    let l;
                    i.startsWith(a) && i.endsWith(c) ? (l = i.slice(a.length), l = l.slice(0, -(yr.length + 1))) : l = `${process.cwd()}\n`;
                    const { cwd: u, rest: d } = At(l);
                    return new Sr(u, d);
                })(t));
        case dt.Bash:
            return new or(()=>(async function(e) {
                    const t = {
                        ...process.env,
                        ...pt,
                        ...e?.env
                    }, r = "__CURSOR_STATE_MARKER__", n = [
                        "-O",
                        "extglob",
                        "-ilc",
                        It + " " + `builtin printf '${r}\\n'; dump_bash_state`
                    ], s = er(e?.userTerminalHint);
                    if (!s) throw new Error("Can't find Bash");
                    const o = ht(s, n, {
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
                    o.stdout?.on("data", (e)=>{
                        i += e.toString();
                    }), o.on("error", (e)=>{
                        console.warn(`[shell-exec] bash state init spawn failed; falling back to empty state: ${e instanceof Error ? e.message : String(e)}`);
                    }), await new Promise((e)=>{
                        o.on("close", ()=>{
                            e(void 0);
                        });
                    });
                    const a = St(i, r), c = `${bt}\n`, l = `${Et}\n`;
                    let u;
                    a.startsWith(c) && a.endsWith(l) ? (u = a.slice(c.length), u = u.slice(0, -(Et.length + 1))) : u = `${process.cwd()}\n`;
                    const { cwd: d, rest: p } = At(u), m = "win32" === process.platform, h = "win32" === process.platform ? process.cwd() : d;
                    return new rr(h, p, e?.userTerminalHint, m);
                })(t));
        case dt.PowerShell:
            return new or(()=>(async function() {
                    return new ur(process.cwd(), "");
                })());
        case dt.ZshLight:
            return new or(()=>(async function(e) {
                    const t = {
                        ...process.env,
                        ...pt,
                        ...e?.env
                    }, r = "__CURSOR_STATE_MARKER__", n = [
                        "-o",
                        "extendedglob",
                        "-ilc",
                        `${Er} builtin printf '${r}\\n'; dump_zsh_state_light`
                    ], s = ht(kr(), n, {
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
                    let o = "";
                    s.stdout?.on("data", (e)=>{
                        o += e.toString();
                    }), s.on("error", (e)=>{
                        console.warn(`[shell-exec] zsh-light state init spawn failed; falling back to empty state: ${e instanceof Error ? e.message : String(e)}`);
                    }), await new Promise((e)=>{
                        s.on("close", ()=>{
                            e(void 0);
                        });
                    });
                    const i = St(o, r), a = `${br}\n`, c = i.startsWith(a) ? i.slice(a.length) : `${process.cwd()}\n`, { cwd: l, rest: u } = At(c);
                    return new xr(l, u);
                })(t));
        default:
            return fr(t);
    }
}
const Yr = {
    perUser: {
        type: "insecure_none"
    }
};

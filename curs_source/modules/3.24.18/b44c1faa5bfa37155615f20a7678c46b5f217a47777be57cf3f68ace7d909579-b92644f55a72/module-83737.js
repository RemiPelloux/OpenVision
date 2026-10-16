"use strict";
var n, s;
require.d(exports, {
    $t: ()=>J,
    A8: ()=>l.A8,
    AC: ()=>N,
    AD: ()=>d,
    Ae: ()=>l.Ae,
    Ai: ()=>f,
    BE: ()=>D,
    DE: ()=>F,
    Dr: ()=>q,
    Du: ()=>R,
    EJ: ()=>l.EJ,
    Ew: ()=>$,
    Jl: ()=>p,
    N1: ()=>M,
    OE: ()=>l.OE,
    PE: ()=>j,
    PZ: ()=>l.PZ,
    Pz: ()=>v,
    QQ: ()=>E,
    TM: ()=>h,
    VN: ()=>O,
    WX: ()=>_,
    Wi: ()=>g,
    Wo: ()=>w,
    Y6: ()=>l.Y6,
    Yy: ()=>se,
    _L: ()=>l._L,
    _b: ()=>k,
    dv: ()=>C,
    f$: ()=>x,
    j6: ()=>l.j6,
    kM: ()=>I,
    kR: ()=>u,
    mD: ()=>P,
    qA: ()=>m,
    qH: ()=>y,
    qh: ()=>U,
    rs: ()=>L,
    v5: ()=>S,
    v8: ()=>l.v8,
    ve: ()=>B,
    xD: ()=>Q,
    y$: ()=>A,
    yA: ()=>T
});
var o = require("./module-31421.js"), i = require("./module-73024.js"), a = require("./module-48161.js"), c = require("./module-76760.js"), l = require("./module-61933.js");
const u = ".sync", d = ".control", p = ".evicted", m = ".recovered";
function h(e) {
    return e.split("/").some(l.Ju);
}
const f = "conflict-events.jsonl", g = "conflict-events.pending.jsonl", y = 448;
function w(e) {
    return "cursor-dev" === e ? l.OE : l.EJ;
}
function v(e) {
    return void 0 !== (0, l.Z6)(e) ? "user" : void 0 !== (0, l.ZJ)(e) ? "team" : (0, l.PZ)(e) ? "cloud" : (0, l.Ae)(e) ? "local" : (0, l.Y6)(e) || (0, l.A8)(e) ? "store" : "unknown";
}
function _(e, t) {
    return {
        base: e.base,
        agentId: t,
        tmpDirName: e.tmpDirName
    };
}
class A extends Error {
    constructor({ code: e, message: t, failedPath: r }){
        super(t), this.name = "AgentStorePathError", this.code = e, this.failedPath = r;
    }
}
function S(e = {}) {
    const t = H(e), r = w(e.urlProtocol), n = t.env.CURSOR_AGENT_STORE_DIR;
    if (n) return {
        base: z(t.path.resolve(n), {
            allowChmodExisting: !1,
            deps: t
        }),
        source: "env_override",
        ephemeralOnLogout: !1,
        tmpDirName: r
    };
    if ("linux" === t.platform) {
        for (const e of function(e) {
            const t = [], r = e.env.XDG_STATE_HOME?.trim();
            r && e.path.isAbsolute(r) && t.push(e.path.join(e.path.resolve(r), "cursor", "agent-stores"));
            const n = function(e) {
                let t;
                try {
                    t = e.osHomedir().trim();
                } catch  {
                    return;
                }
                if (0 === t.length || !e.path.isAbsolute(t)) return;
                const r = e.path.resolve(t);
                if (e.path.parse(r).root === r) return;
                return r;
            }(e);
            void 0 !== n && t.push(e.path.join(n, ".local", "state", "cursor", "agent-stores"));
            return t;
        }(t))try {
            return {
                base: z(e, {
                    allowChmodExisting: !0,
                    deps: t
                }),
                source: "user_state",
                ephemeralOnLogout: !1,
                tmpDirName: r
            };
        } catch (t) {
            if (t instanceof A && t.failedPath === e) throw t;
        }
        return function(e, t) {
            const r = e.env.XDG_RUNTIME_DIR;
            if (r) {
                const n = e.path.resolve(r);
                if (function(e, t) {
                    try {
                        L(e, t);
                    } catch (e) {
                        if (e instanceof A) return !1;
                        throw e;
                    }
                    const r = ne(e, t.fs);
                    if (!r) return !1;
                    return function(e, t, r, n) {
                        try {
                            return Z(e, t, r, n), !0;
                        } catch (e) {
                            if (e instanceof A) return !1;
                            throw e;
                        }
                    }(e, r, t, {
                        allowLooseMode: !1
                    });
                }(n, e)) return {
                    base: n,
                    source: "temp_fallback",
                    ephemeralOnLogout: !0,
                    tmpDirName: t
                };
            }
            const n = X(e);
            return {
                base: z(e.path.join(e.osTmpdir(), `cursor-${n}`), {
                    allowChmodExisting: !0,
                    deps: e
                }),
                source: "temp_fallback",
                ephemeralOnLogout: !1,
                tmpDirName: t
            };
        }(t, r);
    }
    if ("darwin" === t.platform) {
        let e;
        try {
            e = function(e) {
                let t;
                try {
                    t = e.osHomedir();
                } catch  {
                    return;
                }
                if (0 === t.length) return;
                const r = e.path.resolve(t);
                if (r === e.path.parse(r).root) return;
                const n = ne(r, e.fs);
                if (void 0 === n) return;
                return Y(r, n), e.path.join(r, "Library", "Application Support", "Cursor", "AgentStores");
            }(t);
        } catch (e) {
            throw e;
        }
        if (void 0 === e) return b(t, r);
        const n = void 0 !== ne(e, t.fs);
        try {
            return {
                base: z(e, {
                    allowChmodExisting: !1,
                    deps: t
                }),
                source: "user_state",
                ephemeralOnLogout: !1,
                tmpDirName: r
            };
        } catch (e) {
            if (e instanceof A || n) throw e;
        }
        return b(t, r);
    }
    if ("win32" === t.platform) return function(e, t) {
        let r;
        for (const n of function(e) {
            const t = [], r = e.env.LOCALAPPDATA?.trim();
            r && e.path.isAbsolute(r) && t.push(()=>e.path.join(e.path.resolve(r), "Cursor", "AgentStores"));
            return t.push(()=>e.path.join(function(e) {
                    const t = e.osHomedir().trim();
                    if (0 === t.length) throw new A({
                        code: "missing_homedir",
                        message: "Could not determine the current user home directory for agent store path resolution"
                    });
                    return e.path.resolve(t);
                }(e), "AppData", "Local", "Cursor", "AgentStores")), t;
        }(e)){
            let s;
            try {
                s = n();
            } catch  {
                continue;
            }
            const o = void 0 !== ne(s, e.fs);
            try {
                return {
                    base: W(s, e),
                    source: "user_state",
                    ephemeralOnLogout: !1,
                    tmpDirName: t
                };
            } catch (e) {
                if (o) throw e;
                e instanceof A && "missing_homedir" !== e.code && e.failedPath === s && (r ??= e);
            }
        }
        if (void 0 !== r) throw r;
        const n = e.path.resolve(e.osTmpdir());
        return L(n, e), j(n, e.windowsAcl), {
            base: n,
            source: "temp_fallback",
            ephemeralOnLogout: !1,
            tmpDirName: t
        };
    }(t, r);
    throw new A({
        code: "unsupported_platform",
        message: `Unsupported agent store platform: ${t.platform}`
    });
}
function b(e, t) {
    return {
        base: V(function(e, t) {
            const r = t.fs;
            try {
                if ("function" == typeof r.realpathSync) return "function" == typeof r.realpathSync.native ? r.realpathSync.native(e) : r.realpathSync(e);
            } catch  {}
            return e;
        }(e.path.resolve(e.osTmpdir()), e), e),
        source: "tmpdir",
        ephemeralOnLogout: !1,
        tmpDirName: t
    };
}
function E(e = {}) {
    try {
        return S(e).source;
    } catch  {
        return "unresolved";
    }
}
function I(e) {
    return (0, l.v8)(e);
}
function C({ base: e, agentId: t, tmpDirName: r }) {
    return function(e) {
        if (!c.isAbsolute(e)) throw new A({
            code: "invalid_store_base",
            message: `Agent store base must be absolute: ${e}`,
            failedPath: e
        });
    }(e), k(t), c.join(e, r ?? l.EJ, t);
}
function k(e) {
    if (0 === e.length || e !== e.trim() || "." === e || ".." === e || e.includes("\0") || e.includes("/") || e.includes("\\") || c.posix.isAbsolute(e) || c.win32.isAbsolute(e)) throw new A({
        code: "invalid_agent_id",
        message: `Agent id must be a single safe path segment: ${e}`,
        failedPath: e
    });
}
function x(e) {
    return c.join(C(e), l._L);
}
function T(e) {
    return c.join(x(e), l.RZ);
}
function R(e) {
    return c.join(C(e), u);
}
function B(e, t) {
    U(t);
    const r = C(_(e, t));
    return c.join(c.dirname(r), d, t);
}
function P(e) {
    return c.join(R(e), "index.sqlite");
}
function J(e) {
    return c.join(R(e), "root-id");
}
function M(e) {
    return c.join(R(e), "sync.lock");
}
function q(e) {
    return c.join(R(e), "owner.json");
}
function D(e) {
    return c.join(R(e), "mount.json");
}
function O(e) {
    return c.join(R(e), f);
}
function N(e) {
    return c.join(R(e), g);
}
function F(e) {
    return c.join(R(e), "tmp");
}
function U(e) {
    if (!((0, l.v8)(e) || (0, l.XW)(e) || (0, l.Y6)(e) || (0, l.A8)(e))) throw new A({
        code: "invalid_agent_id",
        message: `Mount key must be an agent store source id, agent store id, or store-<digest> share id: ${e}`,
        failedPath: e
    });
    k(e);
}
function L(e, t = {}) {
    const r = H(t), n = r.path.resolve(e);
    if (function(e, t) {
        const r = t.realpathSync;
        if ("function" != typeof r?.native) return;
        try {
            return r.native(e);
        } catch  {
            return;
        }
    }(n, r.fs) === n) return;
    const s = re(n, r.path);
    for (const e of s){
        const t = ne(e, r.fs);
        if (!t) return;
        if (t.isSymbolicLink()) throw new A({
            code: "symlink_refused",
            message: `Refusing to use symlinked agent store path: ${e}`,
            failedPath: e
        });
    }
}
function $(e, t = {}) {
    const r = H(t), n = r.path.resolve(e), s = void 0 !== t.trustedBase ? r.path.resolve(t.trustedBase) : function(e, t) {
        const r = re(t.path.resolve(e), t.path);
        let n = r[0] ?? t.path.resolve(e);
        for(let e = 1; e < r.length; e++){
            const s = r[e], o = ne(s, t.fs);
            if (!o) break;
            if (o.isSymbolicLink()) throw new A({
                code: "symlink_refused",
                message: `Refusing to use symlinked agent store path: ${s}`,
                failedPath: s
            });
            if (!o.isDirectory()) throw new A({
                code: "not_directory",
                message: `Agent store path is not a directory: ${s}`,
                failedPath: s
            });
            n = s;
        }
        return n;
    }(n, r);
    if (n === s) return void ee(s, r);
    const o = r.path.relative(s, n);
    if (0 === o.length || o.startsWith("..") || r.path.isAbsolute(o)) throw new A({
        code: "invalid_store_base",
        message: `Refusing to create ${n} outside trusted base ${s}`,
        failedPath: n
    });
    const i = o.split(r.path.sep).filter((e)=>e.length > 0);
    let a = s;
    for (const e of i)ee(a, r), a = r.path.join(a, e), te(a, r);
}
function Q(e, t = {}) {
    const r = t.execFileSync ?? o.execFileSync;
    r("icacls", [
        e,
        "/inheritance:r",
        "/grant:r",
        `*${oe(t, r).sid}:(OI)(CI)F`,
        `*${t.systemSid ?? "S-1-5-18"}:(OI)(CI)F`,
        `*${t.administratorsSid ?? "S-1-5-32-544"}:(OI)(CI)F`
    ]);
}
function j(e, t = {}) {
    const r = t.execFileSync ?? o.execFileSync, n = oe(t, r), s = t.systemSid ?? "S-1-5-18", i = t.administratorsSid ?? "S-1-5-32-544", a = new Set([
        n.sid.toLowerCase(),
        n.name.toLowerCase(),
        s.toLowerCase(),
        i.toLowerCase()
    ]);
    for (const e of [
        t.systemName ?? ce(s, r) ?? "NT AUTHORITY\\SYSTEM",
        t.administratorsName ?? ce(i, r) ?? "BUILTIN\\Administrators"
    ])e && a.add(e.toLowerCase());
    const c = function({ output: e, targetPath: t }) {
        const r = [], n = /^(.+):(?:\([^)]+\))*[A-Z]*$/;
        for (const s of e.split(/\r?\n/)){
            let e = s.trim();
            if (e.toLowerCase().startsWith(t.toLowerCase()) && (e = e.slice(t.length).trimStart()), e.toUpperCase().includes("(DENY)")) continue;
            const o = e.match(n);
            o && r.push(G(o[1]));
        }
        return r;
    }({
        output: String(r("icacls", [
            e
        ], {
            encoding: "utf8"
        })),
        targetPath: e
    });
    if (0 === c.length) throw new A({
        code: "acl_refused",
        message: `Could not verify ACL for agent store path: ${e}`,
        failedPath: e
    });
    for (const t of c)if (!a.has(t.toLowerCase())) throw new A({
        code: "acl_refused",
        message: `Refusing agent store path with unexpected ACL entry: ${t}`,
        failedPath: e
    });
}
function G(e) {
    const t = e.trim();
    if (!t.includes(":")) return t.replace(/^\*/, "");
    const r = t.match(/(\*?S-\d-\d+(?:-\d+)+)$/) ?? t.match(/(NT AUTHORITY\\SYSTEM|BUILTIN\\Administrators)$/) ?? t.match(/(?:^|\s)([^\s\\:]+\\[^\r\n:]+)$/);
    if (r) return r[1].trim().replace(/^\*/, "");
    const n = t.lastIndexOf(" ");
    return t.slice(n + 1).trim().replace(/^\*/, "");
}
function H(e) {
    return {
        env: e.env ?? process.env,
        fs: e.fs ?? (n || (n = require.t(i, 2))),
        geteuid: e.geteuid ?? process.geteuid?.bind(process),
        osHomedir: e.osHomedir ?? a.homedir,
        osTmpdir: e.osTmpdir ?? a.tmpdir,
        path: e.path ?? (s || (s = require.t(c, 2))),
        platform: e.platform ?? process.platform,
        windowsAcl: e.windowsAcl ?? {}
    };
}
function z(e, { allowChmodExisting: t, deps: r }) {
    if ("win32" === r.platform) return W(e, r);
    L(e, r), K(e, r);
    const n = ne(e, r.fs);
    n && Z(e, n, r, {
        allowLooseMode: t
    }), r.fs.mkdirSync(e, {
        recursive: !0,
        mode: y
    }), !t && n || r.fs.chmodSync(e, y), K(e, r);
    return Z(e, r.fs.lstatSync(e), r, {
        allowLooseMode: !1
    }), e;
}
function W(e, t) {
    L(e, t);
    const r = ne(e, t.fs);
    if (r) {
        Y(e, r);
        try {
            j(e, t.windowsAcl);
        } catch (r) {
            if (!(r instanceof A)) throw r;
            return function(e, t, r) {
                try {
                    t.fs.rmdirSync(e), t.fs.mkdirSync(e, {
                        mode: y
                    });
                } catch  {
                    throw r;
                }
                const n = t.fs.lstatSync(e);
                return Y(e, n), Q(e, t.windowsAcl), j(e, t.windowsAcl), e;
            }(e, t, r);
        }
        return e;
    }
    t.fs.mkdirSync(e, {
        recursive: !0,
        mode: y
    });
    return Y(e, t.fs.lstatSync(e)), Q(e, t.windowsAcl), j(e, t.windowsAcl), e;
}
function V(e, t) {
    L(e, t), K(e, t);
    return Z(e, t.fs.lstatSync(e), t, {
        allowLooseMode: !1
    }), e;
}
function K(e, t) {
    const r = re(t.path.resolve(e), t.path);
    for (const e of r.slice(0, -1)){
        const r = ne(e, t.fs);
        if (!r) continue;
        Y(e, r);
        const n = !!(18 & r.mode), s = !!(512 & r.mode);
        if (n && !s) throw new A({
            code: "insecure_permissions",
            message: `Agent store parent must not be group/world writable: ${e}`,
            failedPath: e
        });
    }
}
function Y(e, t) {
    if (t.isSymbolicLink()) throw new A({
        code: "symlink_refused",
        message: `Refusing to use symlinked agent store path: ${e}`,
        failedPath: e
    });
    if (!t.isDirectory()) throw new A({
        code: "not_directory",
        message: `Agent store path is not a directory: ${e}`,
        failedPath: e
    });
}
function Z(e, t, r, n) {
    Y(e, t);
    const s = X(r);
    if (t.uid !== s) throw new A({
        code: "foreign_uid",
        message: `Agent store path is owned by uid ${t.uid}, expected ${s}: ${e}`,
        failedPath: e
    });
    if (!n.allowLooseMode && 63 & t.mode) throw new A({
        code: "insecure_permissions",
        message: `Agent store path must not be group/world accessible: ${e}`,
        failedPath: e
    });
}
function X(e) {
    const t = e.geteuid?.();
    if (void 0 === t) throw new A({
        code: "missing_uid",
        message: "Could not determine current uid for agent store path validation"
    });
    return t;
}
function ee(e, t) {
    const r = ne(e, t.fs);
    if (!r) throw new A({
        code: "not_directory",
        message: `Trusted directory does not exist: ${e}`,
        failedPath: e
    });
    Y(e, r);
}
function te(e, t) {
    let r = ne(e, t.fs);
    if (!r) {
        try {
            t.fs.mkdirSync(e, {
                mode: y
            });
        } catch (e) {
            if (!le(e) || "EEXIST" !== e.code) throw e;
        }
        if (r = ne(e, t.fs), !r) throw new A({
            code: "not_directory",
            message: `Failed to create directory: ${e}`,
            failedPath: e
        });
    }
    Y(e, r);
}
function re(e, t) {
    const r = t.parse(e).root, n = e.slice(r.length).split(/[\\/]+/).filter(Boolean), s = [];
    let o = r;
    r && s.push(r);
    for (const e of n)o = o === r ? t.join(r, e) : t.join(o, e), s.push(o);
    return s;
}
function ne(e, t) {
    try {
        return t.lstatSync(e);
    } catch (e) {
        if (le(e) && "ENOENT" === e.code) return;
        throw e;
    }
}
const se = function(e) {
    let t;
    return ()=>(t ??= ie(e), t);
}(o.execFileSync);
function oe(e, t) {
    if (e.currentUserName && e.currentUserSid) return {
        name: e.currentUserName,
        sid: e.currentUserSid
    };
    const r = void 0 === e.execFileSync ? se() : ie(t), n = e.currentUserName ?? r?.name, s = e.currentUserSid ?? r?.sid;
    if (!n || !s) throw new A({
        code: "acl_refused",
        message: "Could not determine current Windows user"
    });
    return {
        name: n,
        sid: s
    };
}
function ie(e) {
    const t = String(e("whoami", [
        "/user",
        "/fo",
        "csv",
        "/nh"
    ], {
        encoding: "utf8"
    })).trim().split(",").map((e)=>e.replace(/^"|"$/g, "")), r = t.at(-2), n = t.at(-1);
    if (r && n) return {
        name: r,
        sid: n
    };
}
const ae = new Map;
function ce(e, t) {
    if (!function(e) {
        return /^S-\d-\d+(?:-\d+)+$/.test(e);
    }(e)) return;
    const r = t === o.execFileSync;
    if (r && ae.has(e)) return ae.get(e);
    const n = function(e, t) {
        try {
            const r = String(t("powershell.exe", [
                "-NoProfile",
                "-NonInteractive",
                "-Command",
                `[System.Security.Principal.SecurityIdentifier]::new('${e}').Translate([System.Security.Principal.NTAccount]).Value`
            ], {
                encoding: "utf8",
                timeout: 1e4,
                windowsHide: !0
            })).trim();
            return r.length > 0 && !r.includes("\n") && r.includes("\\") ? r : void 0;
        } catch  {
            return;
        }
    }(e, t);
    return r && ae.set(e, n), n;
}
function le(e) {
    return e instanceof Error && "string" == typeof e.code;
}

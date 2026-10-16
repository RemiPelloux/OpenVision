"use strict";
require.d(exports, {
    il: ()=>h,
    ld: ()=>g,
    rg: ()=>S,
    xF: ()=>d,
    xU: ()=>m
});
var n = require("./module-31421.js"), s = require("./module-73024.js"), o = require("./module-51455.js"), i = require("./module-81958.js");
const a = 12e5, c = 3e4, l = 6e4, u = 3e4;
class d extends Error {
    constructor(){
        super(...arguments), this.name = "LocalApiKeyHelperError";
    }
}
const p = new Map;
function m(e) {
    const t = h(e), r = p.get(t);
    if (void 0 !== r) return r;
    const n = function(e, t = {}) {
        const r = t.now ?? Date.now, n = t.runHelper ?? y;
        let s, o, i = 0;
        const a = (t)=>{
            if (void 0 !== o) return o;
            const a = i, c = function(e) {
                if (void 0 === e) return {};
                const t = {
                    token: e.value,
                    expiresAtMs: e.expiresAtMs,
                    ...void 0 === e.refreshToken ? {} : {
                        refreshToken: e.refreshToken
                    }
                };
                return {
                    previous: t
                };
            }(t), l = n(e, c).then((t)=>{
                const n = function(e) {
                    const { stdout: t, command: r } = e, n = t.trim();
                    if (!n) throw new d(`apiKeyHelper produced empty stdout: ${r}`);
                    if (!n.startsWith("{")) return {
                        token: n
                    };
                    let s;
                    try {
                        s = JSON.parse(n);
                    } catch  {
                        throw new d(`apiKeyHelper printed JSON that does not parse: ${r}`);
                    }
                    const o = function(e) {
                        const t = _.safeParse(e);
                        return t.success ? t.data : {};
                    }(s), i = o.access_token;
                    if (void 0 === i) throw new d(`apiKeyHelper printed JSON without a string access_token: ${r}`);
                    const a = o.expires_in, c = o.refresh_token;
                    return {
                        token: i,
                        ...void 0 !== a && a > 0 ? {
                            expiresInMs: Math.floor(1e3 * a)
                        } : {},
                        ...void 0 === c ? {} : {
                            refreshToken: c
                        }
                    };
                }({
                    stdout: t,
                    command: e.command
                }), o = r(), c = {
                    value: n.token,
                    ...void 0 === n.refreshToken ? {} : {
                        refreshToken: n.refreshToken
                    },
                    mintedAtMs: o,
                    expiresAtMs: o + f(n, e, o)
                };
                return a === i && (s = c), c;
            }).catch((t)=>{
                throw function(e, t) {
                    if (e instanceof d) return e;
                    const r = e instanceof Error ? e.message : String(e);
                    return new d(`apiKeyHelper failed: ${t}: ${S(r)}`, {
                        cause: e instanceof Error ? e : void 0
                    });
                }(t, e.command);
            }).finally(()=>{
                o === l && (o = void 0);
            });
            return o = l, l;
        }, c = (e, t)=>{
            const r = e.expiresAtMs - e.mintedAtMs, n = Math.min(l, Math.floor(r / 2));
            return t < e.expiresAtMs - n;
        };
        return {
            async getApiKey () {
                const e = s;
                return void 0 !== e && c(e, r()) ? e.value : (await a(e)).value;
            },
            invalidate () {
                i += 1, s = void 0, o = void 0;
            },
            async refreshAfterRejection (e) {
                const t = s;
                return void 0 === t ? (await a(void 0)).value : t.value !== e ? t.value : r() - t.mintedAtMs < u ? void 0 : (await a(t)).value;
            }
        };
    }(e);
    return p.set(t, n), n;
}
function h(e) {
    return JSON.stringify([
        e.command,
        e.args ?? null,
        e.tokenTtlMs ?? null,
        e.timeoutMs ?? null
    ]);
}
function f(e, t, r) {
    if (void 0 !== e.expiresInMs) return e.expiresInMs;
    if (void 0 !== t.tokenTtlMs) return t.tokenTtlMs;
    const n = function(e) {
        const t = e.split(".");
        if (3 !== t.length || void 0 === t[1]) return;
        try {
            const e = function(e) {
                const t = A.safeParse(e);
                return t.success ? t.data : {};
            }(JSON.parse(Buffer.from(t[1], "base64url").toString("utf8"))).exp;
            return void 0 === e ? void 0 : 1e3 * e;
        } catch  {
            return;
        }
    }(e.token);
    return void 0 !== n && n > r ? n - r : a;
}
function g(e, t) {
    const r = new Headers(e?.headers);
    return r.set("X-Api-Key", t), r.set("Authorization", `Bearer ${t}`), {
        ...e,
        headers: r
    };
}
async function y(e, t = {}) {
    const r = e.command.trim();
    if (!r) throw new d("apiKeyHelper command must not be empty");
    const i = e.timeoutMs ?? c, a = await async function(e, t) {
        if (void 0 !== t) return {
            file: e,
            args: [
                ...t
            ]
        };
        if ("win32" === process.platform) throw new d(`apiKeyHelper on Windows needs \`args\` (the helper is spawned directly, there is no /bin/sh): ${e}`);
        try {
            await (0, o.access)(e, s.constants.R_OK);
        } catch (t) {
            throw new d(`apiKeyHelper script is not readable: ${e}`, {
                cause: t
            });
        }
        return {
            file: "/bin/sh",
            args: [
                e
            ]
        };
    }(r, e.args), l = function(e) {
        const t = {
            ...process.env
        };
        delete t.GROK_AUTH_EXPIRED, delete t.GROK_AUTH_PROVIDER_ACCESS_TOKEN, delete t.GROK_AUTH_PROVIDER_EXPIRES_AT, delete t.GROK_AUTH_PROVIDER_REFRESH_TOKEN;
        const r = e.previous;
        void 0 !== r && (t.GROK_AUTH_EXPIRED = "1", t.GROK_AUTH_PROVIDER_ACCESS_TOKEN = r.token, t.GROK_AUTH_PROVIDER_EXPIRES_AT = String(Math.floor(r.expiresAtMs / 1e3)), void 0 !== r.refreshToken && (t.GROK_AUTH_PROVIDER_REFRESH_TOKEN = r.refreshToken));
        return t;
    }(t);
    return await new Promise((e, t)=>{
        const s = (0, n.spawn)(a.file, a.args, {
            stdio: [
                "ignore",
                "pipe",
                "pipe"
            ],
            env: l,
            timeout: i,
            killSignal: "SIGKILL"
        }), o = [], c = [];
        let u = !1;
        const p = (e)=>{
            u || (u = !0, e());
        };
        s.stdout.on("data", (e)=>{
            o.push(Buffer.from(e));
        }), s.stderr.on("data", (e)=>{
            c.push(Buffer.from(e));
        }), s.on("error", (e)=>{
            p(()=>t(new d("apiKeyHelper failed to start", {
                    cause: e
                })));
        }), s.on("exit", ()=>{
            s.killed && (s.stdout.destroy(), s.stderr.destroy(), s.unref(), p(()=>t(new d(`apiKeyHelper timed out after ${Math.round(i / 1e3)}s: ${r}`))));
        }), s.on("close", (r, n)=>{
            p(()=>{
                const s = Buffer.concat(o).toString("utf8");
                if (0 === r) return void e(s);
                const i = Buffer.concat(c).toString("utf8");
                t(new d(`apiKeyHelper exited unsuccessfully: ${function(e, t) {
                    if (null !== e) return `exit code ${e}`;
                    return null !== t ? `signal ${t}` : "unknown exit status";
                }(r, n)}${function(e) {
                    const t = e.trim();
                    if (!t) return "";
                    return `; stderr: ${S(t).slice(0, 1e3)}`;
                }(i)}`));
            });
        });
    });
}
const w = i.Yj().transform((e)=>e.trim()).refine((e)=>e.length > 0).optional().catch(void 0), v = i.ai().finite().optional().catch(void 0), _ = i.Ik({
    access_token: w,
    expires_in: v,
    refresh_token: w
}), A = i.Ik({
    exp: v
});
function S(e) {
    return e.replace(/[A-Za-z0-9_./+=-]{24,}/gu, "[redacted]");
}

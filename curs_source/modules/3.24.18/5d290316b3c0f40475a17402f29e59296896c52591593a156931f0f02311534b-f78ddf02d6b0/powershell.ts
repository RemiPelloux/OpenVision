import { Pt, Qr, Yn, _r, fr, hr, jt, ts, vr } from "./bash.ts";
import { Jr } from "./core_2.ts";
import { K9, og } from "./dump_powershell_state.ts";
import { ze } from "./index_2.ts";
import { Tt } from "./index_3.ts";
import { rs } from "./output-limiter.ts";
import { en } from "./policy-merge.ts";
import { J1, os } from "./sudo.ts";
import { h } from "./tslib.es6.js";
import { It, Yt } from "./types.ts";
import { Ke } from "./us.js";
import { randomUUID as ag } from "node:crypto";
import * as cg from "node:fs/promises";
import * as j9 from "node:os";
import { rm as lg } from "node:fs/promises";
import * as ll from "node:path";
import { existsSync as q9 } from "node:fs";
function ol(e) {
    return J1 ? !1 : !!e?.SUDO_ASKPASS;
}
function X1(e) {
    const t = [];
    let r = 0;
    for(; r < e.length;){
        const n = r === 0 || e.slice(Math.max(0, r - 2), r) === "&&" || e.slice(Math.max(0, r - 2), r) === "||" || e[r - 1] === "|" || e[r - 1] === ";", s = Math.max(0, r - 10), i = e.slice(s, r), o = /(?:&&|\|\||[|;])\s*$/.test(i) || r === 0 && /^\s*$/.test(i);
        if ((n || o) && e.slice(r, r + 4) === "sudo") {
            const a = r + 4;
            if (a >= e.length || /\s/.test(e[a])) {
                let c = a;
                for(; c < e.length && /\s/.test(e[c]);)c++;
                let l = !1;
                if (c < e.length && e[c] === "-") {
                    let u = c + 1;
                    for(; u < e.length && /[^\s]/.test(e[u]);)u++;
                    const d = e.slice(c, u);
                    l = /^-[a-zA-Z]*A[a-zA-Z]*$/.test(d);
                }
                l ? (t.push("sudo"), r = a) : (t.push("sudo -A"), r = a);
                continue;
            }
        }
        t.push(e[r]), r++;
    }
    return t.join("");
}
function $i() {
    if (process.platform !== "win32") {
        const t = process.env.SHELL;
        if (t?.includes("pwsh") || t?.includes("powershell")) return t;
    }
    let e = Ke("pwsh", []).cmd;
    if (e !== "pwsh" || (e = Ke("powershell", []).cmd, e !== "powershell") || process.platform === "win32" && (e = ll.join(process.env.SYSTEMROOT, "System32", "WindowsPowerShell", "v1.0", "powershell.exe"), q9(e))) return e;
    throw new Error("Neither 'pwsh' (PowerShell Core) nor 'powershell' (Windows PowerShell) found in PATH");
}
async function V9(e, t) {
    await cg.writeFile(e, ug + t, {
        encoding: "utf8"
    });
}
var ul, ug;
export { $i, V9, X1, ol, ug, ul };
var __wakaru_dl_initialized = false;
export function dl() {
if (__wakaru_dl_initialized) return;
__wakaru_dl_initialized = true;
"use strict";
h(), Tt(), ze(), Jr(), K9(), rs(), en(), os(), Yt(), ul = class l2 {
    constructor(t, r){
        this.cwd = t, this.state = r;
    }
    async getCwd() {
        return this.cwd;
    }
    clone(t) {
        return new l2(t ?? this.cwd, this.state);
    }
    async *execute(t, r, n) {
        var s = [];
        try {
            const a = hr(s, _r(t.withName("PowerShellState.execute"))), c = n?.pipeStdin ?? !1, l = n?.workingDirectory ?? this.cwd, u = Yn(), d = {
                ...process.env,
                ...It,
                ...n?.env
            }, f = ol(d) ? X1(r) : r, p = j9.tmpdir(), g = ll.join(p, `ps-state-out-${ag()}.txt`), _ = process.platform === "win32", y = og(this.state, l, f, g, {
                utf8Console: _ && n?.powershellUtf8Console === !0
            }), m = ll.join(p, `ps-script-${ag()}.ps1`);
            await V9(m, y);
            const A = [
                "-ExecutionPolicy",
                "Bypass"
            ];
            c || A.push("-NonInteractive"), A.push("-File", m);
            const S = $i(), v = n?.sandboxWorkspaceRoot ?? l, b = (await Qr(v, n?.sandboxPolicy)).policy, I = b.type !== "insecure_none" ? {
                ...b,
                sandboxWorkspaceRoot: v
            } : b, O = Pt(S, A, {
                env: d,
                stdio: [
                    c ? "pipe" : "ignore",
                    "pipe",
                    "pipe"
                ],
                cwd: l,
                detached: !_
            }, I, n?.signal);
            O.on("spawn", async ()=>{
                try {
                    await u.write({
                        type: "stdin_ready",
                        stdin: O.stdin ?? void 0,
                        pid: O.pid
                    });
                } catch  {}
            });
            const M = ts({
                stdout: O.stdout,
                stderr: O.stderr,
                writable: u,
                bufferOutputEvents: n?.bufferOutputEvents,
                outputLimiterOptions: n?.outputLimiterOptions
            }), F = async ()=>{
                try {
                    const P = await cg.readFile(g, "utf8"), { cwd: T, rest: R } = vr(P);
                    this.state = R, this.cwd = T.trim(), await lg(g).catch(()=>{});
                } catch  {}
                await lg(m).catch(()=>{});
            };
            let H = null, ee = null, Y = !1;
            const B = async (P)=>{
                if (!Y) {
                    if (Y = !0, ee && (clearTimeout(ee), ee = null), jt(a.ctx, "exit"), P) try {
                        await M.waitForOutput();
                    } catch (T) {
                        await F(), u.throw(T instanceof Error ? T : new Error(String(T)));
                        return;
                    }
                    await M.flush();
                    try {
                        await u.write({
                            type: "exit",
                            code: H,
                            data: "",
                            aborted: n?.signal?.aborted ?? !1
                        }), await F(), u.close();
                    } catch  {
                        u.close();
                    }
                }
            };
            O.on("exit", (P, T)=>{
                H = P;
                const R = n?.closeTimeout ?? 5e3;
                R > 0 && (ee = setTimeout(()=>{
                    console.warn(`[shell-exec] Close event did not fire within ${R}ms after exit. This may indicate a background process is holding file descriptors open. Proceeding anyway to prevent hang.`), B(!1);
                }, R));
            }), O.on("close", async ()=>{
                await B(!0);
            }), O.on("error", (P)=>{
                F().catch(()=>{}), u.throw(P);
            }), yield* u;
        } catch (a) {
            var i = a, o = !0;
        } finally{
            fr(s, i, o);
        }
    }
}, ug = "\uFEFF";

}

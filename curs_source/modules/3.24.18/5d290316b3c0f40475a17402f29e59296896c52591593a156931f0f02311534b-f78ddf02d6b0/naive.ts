import { Di, Pt, Qr, Yn, _r, fr, hr, jt, ts } from "./bash.ts";
import { Jr } from "./core_2.ts";
import { ze } from "./index_2.ts";
import { Tt } from "./index_3.ts";
import { rs } from "./output-limiter.ts";
import { en } from "./policy-merge.ts";
import { X1, dl, ol } from "./powershell.ts";
import { Xr } from "./sandbox.ts";
import { os } from "./sudo.ts";
import { h } from "./tslib.es6.js";
import { It, Yt } from "./types.ts";
var hl;
export { hl };
var __wakaru_hg_initialized = false;
export function hg() {
if (__wakaru_hg_initialized) return;
__wakaru_hg_initialized = true;
"use strict";
h(), Tt(), ze(), Jr(), rs(), dl(), en(), Xr(), os(), Yt(), hl = class u2 {
    constructor(t, r){
        this.cwd = t, this.options = r;
    }
    async getCwd() {
        return this.cwd;
    }
    clone(t) {
        return new u2(t ?? this.cwd, this.options);
    }
    async *execute(t, r, n) {
        var s = [];
        try {
            const a = hr(s, _r(t.withName("NaiveTerminalExecutor.execute"))), c = Yn(), l = n?.pipeStdin ?? !1, u = {
                ...process.env,
                ...It,
                ...n?.env
            }, d = ol(u) ? X1(r) : r, f = n?.workingDirectory ?? this.cwd, p = n?.sandboxWorkspaceRoot ?? f, g = (await Qr(p, n?.sandboxPolicy)).policy, _ = g.type !== "insecure_none" ? {
                ...g,
                sandboxWorkspaceRoot: p
            } : g, y = process.platform === "win32", m = Pt(this.options?.shell || process.env.SHELL || "/bin/sh", [
                ...this.options?.shellArgs ?? [],
                "-c",
                d
            ], {
                env: u,
                cwd: f,
                stdio: [
                    l ? "pipe" : "ignore",
                    "pipe",
                    "pipe"
                ],
                detached: !y
            }, _, n?.signal);
            m.on("spawn", async ()=>{
                try {
                    await c.write({
                        type: "stdin_ready",
                        stdin: m.stdin ?? void 0,
                        pid: m.pid
                    });
                } catch  {}
            });
            const A = ts({
                stdout: m.stdout,
                stderr: m.stderr,
                writable: c,
                bufferOutputEvents: n?.bufferOutputEvents,
                outputLimiterOptions: n?.outputLimiterOptions
            });
            m.on("error", (S)=>{
                c.throw(S);
            }), m.on("exit", async (S)=>{
                if (jt(a.ctx, "exit"), await A.flush(), _.captureDenies ?? !1) try {
                    const v = await Di(m);
                    v && v.length > 0 && await c.write({
                        type: "sandbox_denies",
                        events: v
                    });
                } catch  {}
                try {
                    await c.write({
                        type: "exit",
                        code: S,
                        data: "",
                        aborted: n?.signal?.aborted ?? !1
                    }), c.close();
                } catch  {
                    c.close();
                }
            }), yield* c;
        } catch (a) {
            var i = a, o = !0;
        } finally{
            fr(s, i, o);
        }
    }
};

}

import { Di, Pt, Qc, Qr, Yn, Zc, _r, al, el, fr, hr, jt, ts, vr } from "./bash.ts";
import { Kr, Oi } from "./cache-env.ts";
import { Jr, Ui } from "./core_2.ts";
import { X9, cs, fl } from "./dump_zsh_state.ts";
import { ze } from "./index_2.ts";
import { Tt } from "./index_3.ts";
import { rs } from "./output-limiter.ts";
import { en } from "./policy-merge.ts";
import { Xr } from "./sandbox.ts";
import { os } from "./sudo.ts";
import { h } from "./tslib.es6.js";
import { It, Yt } from "./types.ts";
import { Ke } from "./us.js";
function b9(e, t, r) {
    if (e) {
        try {
            process.kill(-e, t);
        } catch  {
            return;
        }
        t === "SIGTERM" && r !== void 0 && r > 0 && setTimeout(()=>{
            try {
                process.kill(-e, "SIGKILL");
            } catch  {}
        }, r);
    }
}
function $1() {
    return process.platform !== "win32";
}
function gg() {
    const e = process.env.SHELL;
    return e?.includes("zsh") ? e : Ke("zsh", []).cmd;
}
var pl;
export { $1, b9, gg, pl };
var __wakaru__g_initialized = false;
export function _g() {
if (__wakaru__g_initialized) return;
__wakaru__g_initialized = true;
"use strict";
h(), Tt(), ze(), Jr(), X9(), rs(), Kr(), en(), Xr(), os(), Yt(), pl = class d2 {
    constructor(t, r){
        this.cwd = t, this.state = r;
    }
    async getCwd() {
        return this.cwd;
    }
    clone(t) {
        return new d2(t ?? this.cwd, this.state);
    }
    async *execute(t, r, n) {
        var s = [];
        try {
            const a = hr(s, _r(t.withName("ZshState.execute"))), c = n?.pipeStdin ?? !1, l = Yn(), u = n?.workingDirectory ?? this.cwd, d = {
                ...process.env,
                ...It,
                ...n?.env
            };
            let f = 'builtin eval "$1"';
            c || (f += " < /dev/null");
            const p = al(d), g = $1(), y = [
                "-c",
                (g ? Ui : "") + 'builtin export PATH="/usr/bin:/bin:/usr/sbin:/sbin${PATH:+:$PATH}"; snap=$(command cat <&3); builtin unsetopt aliases 2>/dev/null; builtin unalias -m \'*\' 2>/dev/null || true; builtin eval "$snap" && { builtin unsetopt nounset 2>/dev/null || true; builtin eval "${__CURSOR_SANDBOX_ENV_RESTORE:-}" 2>/dev/null; ' + Oi + `builtin export PWD="$(builtin pwd)"; builtin setopt aliases 2>/dev/null; ${p}${f}; }; COMMAND_EXIT_CODE=$?; dump_zsh_state >&4; builtin exit $COMMAND_EXIT_CODE`,
                "--",
                ...g ? [] : [
                    r
                ]
            ], m = n?.sandboxWorkspaceRoot ?? u, A = (await Qr(m, n?.sandboxPolicy)).policy, S = A.type !== "insecure_none" ? {
                ...A,
                sandboxWorkspaceRoot: m
            } : A, v = Pt(gg(), y, {
                env: d,
                stdio: [
                    c ? "pipe" : "ignore",
                    "pipe",
                    "pipe",
                    "pipe",
                    "pipe",
                    g ? "pipe" : "ignore"
                ],
                cwd: u,
                detached: !0
            }, S, n?.signal);
            let b = "";
            v.on("spawn", async ()=>{
                try {
                    await l.write({
                        type: "stdin_ready",
                        stdin: v.stdin ?? void 0,
                        pid: v.pid
                    });
                } catch  {}
            });
            const I = ts({
                stdout: v.stdout,
                stderr: v.stderr,
                writable: l,
                bufferOutputEvents: n?.bufferOutputEvents,
                outputLimiterOptions: n?.outputLimiterOptions
            });
            v.on("error", (B)=>{
                l.throw(B);
            });
            let O = null, M = null, F = !1;
            const H = async (B)=>{
                if (!F) {
                    if (F = !0, M && (clearTimeout(M), M = null), jt(a.ctx, "exit"), B) try {
                        await I.waitForOutput();
                    } catch (P) {
                        l.throw(P instanceof Error ? P : new Error(String(P)));
                        return;
                    }
                    if (await I.flush(), !n?.signal?.aborted) {
                        const P = `${fl}
`, T = `${cs}
`;
                        if (b.startsWith(P) && b.endsWith(T)) {
                            let R = b.slice(P.length);
                            R = R.slice(0, -(cs.length + 1));
                            const { cwd: C, rest: L } = vr(R);
                            C?.startsWith("/") && (this.state = L, this.cwd = C);
                        }
                    }
                    if (S.captureDenies ?? !1) try {
                        const P = await Di(v);
                        P && P.length > 0 && await l.write({
                            type: "sandbox_denies",
                            events: P
                        });
                    } catch  {}
                    try {
                        await l.write({
                            type: "exit",
                            code: O,
                            data: "",
                            aborted: n?.signal?.aborted ?? !1
                        }), l.close();
                    } catch  {
                        l.close();
                    }
                }
            };
            v.on("exit", (B, P)=>{
                O = B;
                const T = n?.closeTimeout ?? 5e3;
                T > 0 && (M = setTimeout(()=>{
                    F || (console.warn(`[shell-exec] Close event did not fire within ${T}ms after exit. This may indicate a background process is holding file descriptors open. Killing detached process group.`), b9(v.pid, "SIGKILL"), H(!1));
                }, T));
            }), v.on("close", async ()=>{
                await H(!0);
            });
            const ee = v.stdio[3], Y = v.stdio[4];
            g && Zc(v, r), Qc(ee, this.state), el(Y, (B)=>{
                b += B;
            }), yield* l;
        } catch (a) {
            var i = a, o = !0;
        } finally{
            fr(s, i, o);
        }
    }
};

}

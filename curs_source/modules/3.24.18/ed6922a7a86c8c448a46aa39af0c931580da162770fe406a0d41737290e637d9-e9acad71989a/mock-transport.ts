import { nMn } from "./De_3.js";
import { Yb, tg, zQe, zd } from "./agent_pb.js";
import { KW, aUe } from "./agent_service_pb.js";
import { Yu } from "./browser.ts";
import { F7t, YRn, f4e } from "./delete_exec_pb.js";
import { c4i, xyt } from "./delete_tool_pb.js";
import { Ayt, B7t, d4i } from "./grep_exec_pb.js";
import { QRn, v4e } from "./grep_tool_pb.js";
import { G6e, eIn, xbt } from "./ls_exec_pb.js";
import { Dyt, f4i } from "./ls_tool_pb.js";
import { H7t, IMe, M0e, W7t } from "./read_tool_pb.js";
import { Kxn, hee, k$, kbt, zxn } from "./shell_exec_pb.js";
import { Ese, KRn } from "./shell_tool_pb.js";
import { x } from "./tslib.es6.js";
var ONd;
export { ONd };
var __wakaru_g1v_initialized = false;
export function g1v() {
if (__wakaru_g1v_initialized) return;
__wakaru_g1v_initialized = true;
"use strict";
x(), zd(), aUe(), F7t(), c4i(), B7t(), QRn(), G6e(), f4i(), W7t(), hee(), KRn(), Yu(), ONd = class {
    constructor(e){
        this.provider = e;
    }
    async *run(e, t, n) {
        n.onNetworkStarted?.();
        let i;
        const r = t[Symbol.asyncIterator](), s = await r.next();
        if (s.done) throw new Error("[MockAgentTransport] No messages received from client stream");
        if (i = s.value, i.message.case !== "runRequest") throw new Error(`[MockAgentTransport] Expected first message to be runRequest, got ${i.message.case}`);
        const o = i.message.value, a = o.conversationId, c = n.headers["x-request-id"];
        if (!a) throw new Error("[MockAgentTransport] conversationId is required in runRequest");
        if (!c) throw new Error("[MockAgentTransport] x-request-id header is required");
        const l = a, u = c, h = this.provider({
            conversationId: l,
            requestId: u,
            runRequest: o,
            signal: n.signal
        });
        if (!h) throw new Error(`[MockAgentTransport] No mock stream configured for conversationId=${l}; requestId=${u}`);
        const p = new Map, g = new Map, f = new Set, v = nMn();
        (async ()=>{
            try {
                for(;;){
                    const q = await r.next();
                    if (q.done) break;
                    const z = q.value;
                    if (z.message.case === "execClientMessage") {
                        const X = z.message.value, Y = X.message?.case;
                        let Z, K;
                        for (const [J, ne] of p.entries()){
                            const ee = ne.toolCall.tool.case;
                            if (ee === "readToolCall" && Y === "readResult") {
                                Z = J;
                                const se = X.message.value;
                                let re;
                                if (se.result.case === "success") {
                                    const ce = se.result.value;
                                    re = new M0e({
                                        result: {
                                            case: "success",
                                            value: {
                                                output: ce.output,
                                                isEmpty: !1,
                                                exceededLimit: ce.truncated,
                                                totalLines: ce.totalLines,
                                                fileSize: Number(ce.fileSize),
                                                path: ce.path
                                            }
                                        }
                                    });
                                } else {
                                    let ce;
                                    switch(se.result.case){
                                        case "error":
                                            ce = se.result.value.error;
                                            break;
                                        case "fileNotFound":
                                            ce = "File not found";
                                            break;
                                        case "permissionDenied":
                                            ce = "Permission denied";
                                            break;
                                        case "invalidFile":
                                            ce = se.result.value.reason || "Path is not a valid file to read";
                                            break;
                                        case "rejected":
                                            ce = se.result.value.reason || "Read operation rejected";
                                            break;
                                        default:
                                            ce = "Unknown error";
                                    }
                                    re = new M0e({
                                        result: {
                                            case: "error",
                                            value: new H7t({
                                                errorMessage: ce
                                            })
                                        }
                                    });
                                }
                                const ue = new IMe({
                                    args: ne.toolCall.tool.value.args,
                                    result: re
                                });
                                K = new tg({
                                    tool: {
                                        case: "readToolCall",
                                        value: ue
                                    }
                                });
                                break;
                            } else if (ee === "lsToolCall" && Y === "lsResult") {
                                Z = J;
                                const se = new Dyt({
                                    args: ne.toolCall.tool.value.args,
                                    result: X.message.value
                                });
                                K = new tg({
                                    tool: {
                                        case: "lsToolCall",
                                        value: se
                                    }
                                });
                                break;
                            } else if (ee === "grepToolCall" && Y === "grepResult") {
                                Z = J;
                                const se = new v4e({
                                    args: ne.toolCall.tool.value.args,
                                    result: X.message.value
                                });
                                K = new tg({
                                    tool: {
                                        case: "grepToolCall",
                                        value: se
                                    }
                                });
                                break;
                            } else if (ee === "deleteToolCall" && Y === "deleteResult") {
                                Z = J;
                                const se = new xyt({
                                    args: ne.toolCall.tool.value.args,
                                    result: X.message.value
                                });
                                K = new tg({
                                    tool: {
                                        case: "deleteToolCall",
                                        value: se
                                    }
                                });
                                break;
                            } else if (ee === "shellToolCall" && Y === "shellResult") {
                                Z = J;
                                const se = new Ese({
                                    args: ne.toolCall.tool.value.args,
                                    result: X.message.value
                                });
                                K = new tg({
                                    tool: {
                                        case: "shellToolCall",
                                        value: se
                                    }
                                });
                                break;
                            } else if (ee === "shellToolCall" && Y === "shellStream") {
                                const se = X.message.value, re = se.event.case;
                                if (!re) break;
                                const ue = g.get(J) ?? {
                                    stdout: "",
                                    stderr: ""
                                };
                                switch(re){
                                    case "stdout":
                                        {
                                            const ce = se.event.value.data ?? "";
                                            g.set(J, {
                                                stdout: ue.stdout + ce,
                                                stderr: ue.stderr
                                            });
                                            break;
                                        }
                                    case "stderr":
                                        {
                                            const ce = se.event.value.data ?? "";
                                            g.set(J, {
                                                stdout: ue.stdout,
                                                stderr: ue.stderr + ce
                                            });
                                            break;
                                        }
                                    case "exit":
                                        {
                                            const ce = se.event.value, de = g.get(J) ?? ue;
                                            g.delete(J);
                                            const le = ne.toolCall.tool.value.args, ye = le?.command ?? "", _e = ce.cwd || le?.workingDirectory || process.cwd(), me = Number(ce.code ?? 0), Ce = ce.aborted ?? !1, xe = me === 0 && Ce !== !0, Le = new k$({
                                                result: xe ? {
                                                    case: "success",
                                                    value: new kbt({
                                                        command: ye,
                                                        workingDirectory: _e,
                                                        exitCode: me,
                                                        signal: "",
                                                        stdout: de.stdout,
                                                        stderr: de.stderr,
                                                        executionTime: 0
                                                    })
                                                } : {
                                                    case: "failure",
                                                    value: new zxn({
                                                        command: ye,
                                                        workingDirectory: _e,
                                                        exitCode: me,
                                                        signal: "",
                                                        stdout: de.stdout,
                                                        stderr: de.stderr,
                                                        executionTime: 0,
                                                        aborted: Ce
                                                    })
                                                }
                                            });
                                            Z = J, K = new tg({
                                                tool: {
                                                    case: "shellToolCall",
                                                    value: new Ese({
                                                        args: le,
                                                        result: Le
                                                    })
                                                }
                                            });
                                            break;
                                        }
                                    case "rejected":
                                        {
                                            g.delete(J);
                                            const ce = ne.toolCall.tool.value.args;
                                            Z = J, K = new tg({
                                                tool: {
                                                    case: "shellToolCall",
                                                    value: new Ese({
                                                        args: ce,
                                                        result: new k$({
                                                            result: {
                                                                case: "rejected",
                                                                value: se.event.value
                                                            }
                                                        })
                                                    })
                                                }
                                            });
                                            break;
                                        }
                                    case "permissionDenied":
                                        {
                                            g.delete(J);
                                            const ce = ne.toolCall.tool.value.args;
                                            Z = J, K = new tg({
                                                tool: {
                                                    case: "shellToolCall",
                                                    value: new Ese({
                                                        args: ce,
                                                        result: new k$({
                                                            result: {
                                                                case: "permissionDenied",
                                                                value: se.event.value
                                                            }
                                                        })
                                                    })
                                                }
                                            });
                                            break;
                                        }
                                    case "sandboxUnsupported":
                                        {
                                            g.delete(J);
                                            const ce = ne.toolCall.tool.value.args;
                                            Z = J, K = new tg({
                                                tool: {
                                                    case: "shellToolCall",
                                                    value: new Ese({
                                                        args: ce,
                                                        result: new k$({
                                                            result: {
                                                                case: "spawnError",
                                                                value: new Kxn({
                                                                    command: se.event.value.command,
                                                                    workingDirectory: se.event.value.workingDirectory,
                                                                    error: `Sandbox policy '${se.event.value.sandboxPolicyType}' unsupported: ${se.event.value.reason}`
                                                                })
                                                            }
                                                        })
                                                    })
                                                }
                                            });
                                            break;
                                        }
                                    case "backgrounded":
                                        {
                                            const ce = se.event.value, de = g.get(J) ?? ue;
                                            g.delete(J), Z = J, K = new tg({
                                                tool: {
                                                    case: "shellToolCall",
                                                    value: new Ese({
                                                        args: ne.toolCall.tool.value.args,
                                                        result: new k$({
                                                            result: {
                                                                case: "success",
                                                                value: new kbt({
                                                                    command: ce.command,
                                                                    workingDirectory: ce.workingDirectory,
                                                                    stdout: de.stdout,
                                                                    stderr: de.stderr,
                                                                    interleavedOutput: de.stdout + de.stderr,
                                                                    shellId: ce.shellId,
                                                                    pid: ce.pid,
                                                                    msToWait: ce.msToWait,
                                                                    backgroundReason: ce.reason
                                                                })
                                                            }
                                                        })
                                                    })
                                                }
                                            });
                                            break;
                                        }
                                    case "start":
                                    case "hookContext":
                                        break;
                                    default:
                                        {
                                            const ce = re;
                                            throw new Error(`[MockAgentTransport] Unhandled shellStream event case: ${ce}`);
                                        }
                                }
                                break;
                            }
                        }
                        Z && K && await v.write({
                            callId: Z,
                            toolCall: K
                        });
                    } else if (z.message.case === "execClientControlMessage") {
                        const X = z.message.value;
                        if (X.message?.case !== "throw") continue;
                        const [Y, Z] = p.entries().next().value ?? [
                            void 0,
                            void 0
                        ];
                        if (!Y || !Z) continue;
                        const K = X.message.value.error || "Unknown exec error", J = Z.toolCall.tool.case;
                        let ne;
                        switch(J){
                            case "shellToolCall":
                                {
                                    const ee = Z.toolCall.tool.value.args, se = new k$({
                                        result: {
                                            case: "spawnError",
                                            value: new Kxn({
                                                command: ee?.command ?? "",
                                                workingDirectory: ee?.workingDirectory || process.cwd(),
                                                error: K
                                            })
                                        }
                                    });
                                    ne = new tg({
                                        tool: {
                                            case: "shellToolCall",
                                            value: new Ese({
                                                args: ee,
                                                result: se
                                            })
                                        }
                                    });
                                    break;
                                }
                            case "readToolCall":
                                {
                                    const ee = Z.toolCall.tool.value.args;
                                    ne = new tg({
                                        tool: {
                                            case: "readToolCall",
                                            value: new IMe({
                                                args: ee,
                                                result: new M0e({
                                                    result: {
                                                        case: "error",
                                                        value: new H7t({
                                                            errorMessage: K
                                                        })
                                                    }
                                                })
                                            })
                                        }
                                    });
                                    break;
                                }
                            case "lsToolCall":
                                {
                                    const ee = Z.toolCall.tool.value.args;
                                    ne = new tg({
                                        tool: {
                                            case: "lsToolCall",
                                            value: new Dyt({
                                                args: ee,
                                                result: new xbt({
                                                    result: {
                                                        case: "error",
                                                        value: new eIn({
                                                            path: ee?.path ?? "",
                                                            error: K
                                                        })
                                                    }
                                                })
                                            })
                                        }
                                    });
                                    break;
                                }
                            case "grepToolCall":
                                {
                                    const ee = Z.toolCall.tool.value.args;
                                    ne = new tg({
                                        tool: {
                                            case: "grepToolCall",
                                            value: new v4e({
                                                args: ee,
                                                result: new Ayt({
                                                    result: {
                                                        case: "error",
                                                        value: new d4i({
                                                            error: K
                                                        })
                                                    }
                                                })
                                            })
                                        }
                                    });
                                    break;
                                }
                            case "deleteToolCall":
                                {
                                    const ee = Z.toolCall.tool.value.args;
                                    ne = new tg({
                                        tool: {
                                            case: "deleteToolCall",
                                            value: new xyt({
                                                args: ee,
                                                result: new f4e({
                                                    result: {
                                                        case: "error",
                                                        value: new YRn({
                                                            path: ee?.path ?? "",
                                                            error: K
                                                        })
                                                    }
                                                })
                                            })
                                        }
                                    });
                                    break;
                                }
                            default:
                                {
                                    ne = Z.toolCall;
                                    break;
                                }
                        }
                        ne && await v.write({
                            callId: Y,
                            toolCall: ne
                        });
                    }
                }
            } catch  {} finally{
                v.close();
            }
        })().catch(()=>{});
        const y = v[Symbol.asyncIterator](), T = (async function*() {
            try {
                for await (const q of v){
                    const z = p.get(q.callId);
                    if (z) {
                        const X = new zQe({
                            callId: q.callId,
                            toolCall: q.toolCall,
                            modelCallId: z.modelCallId
                        }), Y = new Yb({
                            message: {
                                case: "toolCallCompleted",
                                value: X
                            }
                        });
                        yield new KW({
                            message: {
                                case: "interactionUpdate",
                                value: Y
                            }
                        }), p.delete(q.callId);
                    }
                }
            } catch  {}
        })(), E = h[Symbol.asyncIterator](), A = T[Symbol.asyncIterator]();
        let R = !1, D = !1, P = 0, N = null, O;
        const F = 15e3;
        let H = null, $ = null, W = null, G;
        for(; !R || !D;){
            if (!R && !H && (H = E.next().then((X)=>({
                    source: "mock",
                    result: X
                }))), !D && !$ && ($ = A.next().then((X)=>({
                    source: "exec",
                    result: X
                }))), N !== null && O !== void 0 && P > 0 && f.size > 0) {
                const X = O + F;
                if (W === null || G !== X) {
                    G = X;
                    const Y = Math.max(0, X - Date.now());
                    W = new Promise((Z)=>{
                        setTimeout(()=>Z({
                                source: "timeout"
                            }), Y);
                    });
                }
            } else W = null, G = void 0;
            const q = [];
            if (H && q.push(H), $ && q.push($), W && q.push(W), q.length === 0) break;
            const z = await Promise.race(q);
            if (z.source === "timeout") W = null, G = void 0;
            else {
                const { source: X, result: Y } = z;
                if (X === "mock" && (H = null), X === "exec" && ($ = null), Y.done) {
                    X === "mock" && (R = !0, P === 0 && v.close()), X === "exec" && (D = !0);
                    continue;
                }
                let Z = null;
                if (X === "mock" && Y.value.message.case === "interactionUpdate") {
                    const K = Y.value.message.value;
                    if (K.message.case === "toolCallStarted") {
                        const J = K.message.value;
                        J.toolCall && p.set(J.callId, {
                            resolve: ()=>{},
                            reject: ()=>{},
                            toolCall: J.toolCall,
                            modelCallId: J.modelCallId
                        });
                    } else if (K.message.case === "partialToolCall") {
                        const J = K.message.value;
                        J.toolCall && p.set(J.callId, {
                            resolve: ()=>{},
                            reject: ()=>{},
                            toolCall: J.toolCall,
                            modelCallId: J.modelCallId
                        });
                    }
                } else if (X === "mock" && Y.value.message.case === "execServerMessage") {
                    P++;
                    const J = Y.value.message.value.message.value.toolCallId ?? "";
                    J && f.add(J);
                } else if (X === "exec" && Y.value.message.case === "interactionUpdate") {
                    const K = Y.value.message.value;
                    if (K.message.case === "toolCallCompleted") {
                        P--;
                        const J = K.message.value.callId;
                        J && f.delete(J), R && P === 0 && v.close(), N && P === 0 && (Z = N, N = null, O = void 0);
                    }
                }
                X === "mock" && Y.value.message.case === "interactionUpdate" ? Y.value.message.value.message.case === "turnEnded" && P > 0 ? (N = Y.value, O ??= Date.now()) : yield Y.value : yield Y.value, Z !== null && (yield Z);
            }
            if (N !== null && O !== void 0 && Date.now() - O > F && P > 0 && f.size > 0) for (const X of Array.from(f)){
                const Y = p.get(X);
                if (!Y) {
                    f.delete(X), P = Math.max(0, P - 1);
                    continue;
                }
                const Z = Y.toolCall.tool.case, K = "Mock exec produced no result";
                let J;
                switch(Z){
                    case "shellToolCall":
                        {
                            const ne = Y.toolCall.tool.value.args;
                            J = new tg({
                                tool: {
                                    case: "shellToolCall",
                                    value: new Ese({
                                        args: ne,
                                        result: new k$({
                                            result: {
                                                case: "spawnError",
                                                value: new Kxn({
                                                    command: ne?.command ?? "",
                                                    workingDirectory: ne?.workingDirectory || process.cwd(),
                                                    error: K
                                                })
                                            }
                                        })
                                    })
                                }
                            });
                            break;
                        }
                    case "readToolCall":
                        {
                            const ne = Y.toolCall.tool.value.args;
                            J = new tg({
                                tool: {
                                    case: "readToolCall",
                                    value: new IMe({
                                        args: ne,
                                        result: new M0e({
                                            result: {
                                                case: "error",
                                                value: new H7t({
                                                    errorMessage: K
                                                })
                                            }
                                        })
                                    })
                                }
                            });
                            break;
                        }
                    case "lsToolCall":
                        {
                            const ne = Y.toolCall.tool.value.args;
                            J = new tg({
                                tool: {
                                    case: "lsToolCall",
                                    value: new Dyt({
                                        args: ne,
                                        result: new xbt({
                                            result: {
                                                case: "error",
                                                value: new eIn({
                                                    path: ne?.path ?? "",
                                                    error: K
                                                })
                                            }
                                        })
                                    })
                                }
                            });
                            break;
                        }
                    case "grepToolCall":
                        {
                            const ne = Y.toolCall.tool.value.args;
                            J = new tg({
                                tool: {
                                    case: "grepToolCall",
                                    value: new v4e({
                                        args: ne,
                                        result: new Ayt({
                                            result: {
                                                case: "error",
                                                value: new d4i({
                                                    error: K
                                                })
                                            }
                                        })
                                    })
                                }
                            });
                            break;
                        }
                    case "deleteToolCall":
                        {
                            const ne = Y.toolCall.tool.value.args;
                            J = new tg({
                                tool: {
                                    case: "deleteToolCall",
                                    value: new xyt({
                                        args: ne,
                                        result: new f4e({
                                            result: {
                                                case: "error",
                                                value: new YRn({
                                                    path: ne?.path ?? "",
                                                    error: K
                                                })
                                            }
                                        })
                                    })
                                }
                            });
                            break;
                        }
                    default:
                        {
                            J = Y.toolCall;
                            break;
                        }
                }
                f.delete(X), J && await v.write({
                    callId: X,
                    toolCall: J
                });
            }
        }
        N && (yield N);
    }
};

}

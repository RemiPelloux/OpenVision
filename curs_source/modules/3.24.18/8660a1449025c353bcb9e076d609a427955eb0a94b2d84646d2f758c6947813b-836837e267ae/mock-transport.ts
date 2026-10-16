import { Hm, cbt, ju, ok } from "./agent_pb.js";
import { V6e, _J } from "./agent_service_pb.js";
import { kl } from "./browser.ts";
import { $ti, Yet, lmn } from "./delete_exec_pb.js";
import { L4t, qyr } from "./delete_tool_pb.js";
import { Gti, O4t, s5e } from "./grep_exec_pb.js";
import { F4t, o5e } from "./grep_tool_pb.js";
import { iSi } from "./ipa.js";
import { Yei, k4t, zet } from "./ls_exec_pb.js";
import { eSr, j4t } from "./ls_tool_pb.js";
import { B4t, IAe, X_t, qke } from "./read_tool_pb.js";
import { $te, Aj, Mpn, Wei, Wet } from "./shell_exec_pb.js";
import { Kse, N4t } from "./shell_tool_pb.js";
import { E } from "./tslib.es6.js";
var swm;
export { swm };
var __wakaru_p81_initialized = false;
export function p81() {
if (__wakaru_p81_initialized) return;
__wakaru_p81_initialized = true;
"use strict";
E(), ju(), V6e(), lmn(), qyr(), O4t(), F4t(), zet(), eSr(), X_t(), $te(), N4t(), kl(), swm = class {
    constructor(t){
        this.provider = t;
    }
    async *run(t, e, n) {
        n.onNetworkStarted?.();
        let i;
        const r = e[Symbol.asyncIterator](), s = await r.next();
        if (s.done) throw new Error("[MockAgentTransport] No messages received from client stream");
        if (i = s.value, i.message.case !== "runRequest") throw new Error(`[MockAgentTransport] Expected first message to be runRequest, got ${i.message.case}`);
        const o = i.message.value, a = o.conversationId, l = n.headers["x-request-id"];
        if (!a) throw new Error("[MockAgentTransport] conversationId is required in runRequest");
        if (!l) throw new Error("[MockAgentTransport] x-request-id header is required");
        const c = a, u = l, d = this.provider({
            conversationId: c,
            requestId: u,
            runRequest: o,
            signal: n.signal
        });
        if (!d) throw new Error(`[MockAgentTransport] No mock stream configured for conversationId=${c}; requestId=${u}`);
        const h = new Map, p = new Map, g = new Set, f = iSi();
        (async ()=>{
            try {
                for(;;){
                    const $ = await r.next();
                    if ($.done) break;
                    const H = $.value;
                    if (H.message.case === "execClientMessage") {
                        const G = H.message.value, q = G.message?.case;
                        let K, V;
                        for (const [Y, J] of h.entries()){
                            const Q = J.toolCall.tool.case;
                            if (Q === "readToolCall" && q === "readResult") {
                                K = Y;
                                const te = G.message.value;
                                let ee;
                                if (te.result.case === "success") {
                                    const ie = te.result.value;
                                    ee = new qke({
                                        result: {
                                            case: "success",
                                            value: {
                                                output: ie.output,
                                                isEmpty: !1,
                                                exceededLimit: ie.truncated,
                                                totalLines: ie.totalLines,
                                                fileSize: Number(ie.fileSize),
                                                path: ie.path
                                            }
                                        }
                                    });
                                } else {
                                    let ie;
                                    switch(te.result.case){
                                        case "error":
                                            ie = te.result.value.error;
                                            break;
                                        case "fileNotFound":
                                            ie = "File not found";
                                            break;
                                        case "permissionDenied":
                                            ie = "Permission denied";
                                            break;
                                        case "invalidFile":
                                            ie = te.result.value.reason || "Path is not a valid file to read";
                                            break;
                                        case "rejected":
                                            ie = te.result.value.reason || "Read operation rejected";
                                            break;
                                        default:
                                            ie = "Unknown error";
                                    }
                                    ee = new qke({
                                        result: {
                                            case: "error",
                                            value: new B4t({
                                                errorMessage: ie
                                            })
                                        }
                                    });
                                }
                                const re = new IAe({
                                    args: J.toolCall.tool.value.args,
                                    result: ee
                                });
                                V = new Hm({
                                    tool: {
                                        case: "readToolCall",
                                        value: re
                                    }
                                });
                                break;
                            } else if (Q === "lsToolCall" && q === "lsResult") {
                                K = Y;
                                const te = new j4t({
                                    args: J.toolCall.tool.value.args,
                                    result: G.message.value
                                });
                                V = new Hm({
                                    tool: {
                                        case: "lsToolCall",
                                        value: te
                                    }
                                });
                                break;
                            } else if (Q === "grepToolCall" && q === "grepResult") {
                                K = Y;
                                const te = new o5e({
                                    args: J.toolCall.tool.value.args,
                                    result: G.message.value
                                });
                                V = new Hm({
                                    tool: {
                                        case: "grepToolCall",
                                        value: te
                                    }
                                });
                                break;
                            } else if (Q === "deleteToolCall" && q === "deleteResult") {
                                K = Y;
                                const te = new L4t({
                                    args: J.toolCall.tool.value.args,
                                    result: G.message.value
                                });
                                V = new Hm({
                                    tool: {
                                        case: "deleteToolCall",
                                        value: te
                                    }
                                });
                                break;
                            } else if (Q === "shellToolCall" && q === "shellResult") {
                                K = Y;
                                const te = new Kse({
                                    args: J.toolCall.tool.value.args,
                                    result: G.message.value
                                });
                                V = new Hm({
                                    tool: {
                                        case: "shellToolCall",
                                        value: te
                                    }
                                });
                                break;
                            } else if (Q === "shellToolCall" && q === "shellStream") {
                                const te = G.message.value, ee = te.event.case;
                                if (!ee) break;
                                const re = p.get(Y) ?? {
                                    stdout: "",
                                    stderr: ""
                                };
                                switch(ee){
                                    case "stdout":
                                        {
                                            const ie = te.event.value.data ?? "";
                                            p.set(Y, {
                                                stdout: re.stdout + ie,
                                                stderr: re.stderr
                                            });
                                            break;
                                        }
                                    case "stderr":
                                        {
                                            const ie = te.event.value.data ?? "";
                                            p.set(Y, {
                                                stdout: re.stdout,
                                                stderr: re.stderr + ie
                                            });
                                            break;
                                        }
                                    case "exit":
                                        {
                                            const ie = te.event.value, oe = p.get(Y) ?? re;
                                            p.delete(Y);
                                            const se = J.toolCall.tool.value.args, le = se?.command ?? "", ce = ie.cwd || se?.workingDirectory || process.cwd(), ae = Number(ie.code ?? 0), de = ie.aborted ?? !1, he = ae === 0 && de !== !0, ge = new Aj({
                                                result: he ? {
                                                    case: "success",
                                                    value: new Wet({
                                                        command: le,
                                                        workingDirectory: ce,
                                                        exitCode: ae,
                                                        signal: "",
                                                        stdout: oe.stdout,
                                                        stderr: oe.stderr,
                                                        executionTime: 0
                                                    })
                                                } : {
                                                    case: "failure",
                                                    value: new Mpn({
                                                        command: le,
                                                        workingDirectory: ce,
                                                        exitCode: ae,
                                                        signal: "",
                                                        stdout: oe.stdout,
                                                        stderr: oe.stderr,
                                                        executionTime: 0,
                                                        aborted: de
                                                    })
                                                }
                                            });
                                            K = Y, V = new Hm({
                                                tool: {
                                                    case: "shellToolCall",
                                                    value: new Kse({
                                                        args: se,
                                                        result: ge
                                                    })
                                                }
                                            });
                                            break;
                                        }
                                    case "rejected":
                                        {
                                            p.delete(Y);
                                            const ie = J.toolCall.tool.value.args;
                                            K = Y, V = new Hm({
                                                tool: {
                                                    case: "shellToolCall",
                                                    value: new Kse({
                                                        args: ie,
                                                        result: new Aj({
                                                            result: {
                                                                case: "rejected",
                                                                value: te.event.value
                                                            }
                                                        })
                                                    })
                                                }
                                            });
                                            break;
                                        }
                                    case "permissionDenied":
                                        {
                                            p.delete(Y);
                                            const ie = J.toolCall.tool.value.args;
                                            K = Y, V = new Hm({
                                                tool: {
                                                    case: "shellToolCall",
                                                    value: new Kse({
                                                        args: ie,
                                                        result: new Aj({
                                                            result: {
                                                                case: "permissionDenied",
                                                                value: te.event.value
                                                            }
                                                        })
                                                    })
                                                }
                                            });
                                            break;
                                        }
                                    case "sandboxUnsupported":
                                        {
                                            p.delete(Y);
                                            const ie = J.toolCall.tool.value.args;
                                            K = Y, V = new Hm({
                                                tool: {
                                                    case: "shellToolCall",
                                                    value: new Kse({
                                                        args: ie,
                                                        result: new Aj({
                                                            result: {
                                                                case: "spawnError",
                                                                value: new Wei({
                                                                    command: te.event.value.command,
                                                                    workingDirectory: te.event.value.workingDirectory,
                                                                    error: `Sandbox policy '${te.event.value.sandboxPolicyType}' unsupported: ${te.event.value.reason}`
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
                                            const ie = te.event.value, oe = p.get(Y) ?? re;
                                            p.delete(Y), K = Y, V = new Hm({
                                                tool: {
                                                    case: "shellToolCall",
                                                    value: new Kse({
                                                        args: J.toolCall.tool.value.args,
                                                        result: new Aj({
                                                            result: {
                                                                case: "success",
                                                                value: new Wet({
                                                                    command: ie.command,
                                                                    workingDirectory: ie.workingDirectory,
                                                                    stdout: oe.stdout,
                                                                    stderr: oe.stderr,
                                                                    interleavedOutput: oe.stdout + oe.stderr,
                                                                    shellId: ie.shellId,
                                                                    pid: ie.pid,
                                                                    msToWait: ie.msToWait,
                                                                    backgroundReason: ie.reason
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
                                            const ie = ee;
                                            throw new Error(`[MockAgentTransport] Unhandled shellStream event case: ${ie}`);
                                        }
                                }
                                break;
                            }
                        }
                        K && V && await f.write({
                            callId: K,
                            toolCall: V
                        });
                    } else if (H.message.case === "execClientControlMessage") {
                        const G = H.message.value;
                        if (G.message?.case !== "throw") continue;
                        const [q, K] = h.entries().next().value ?? [
                            void 0,
                            void 0
                        ];
                        if (!q || !K) continue;
                        const V = G.message.value.error || "Unknown exec error", Y = K.toolCall.tool.case;
                        let J;
                        switch(Y){
                            case "shellToolCall":
                                {
                                    const Q = K.toolCall.tool.value.args, te = new Aj({
                                        result: {
                                            case: "spawnError",
                                            value: new Wei({
                                                command: Q?.command ?? "",
                                                workingDirectory: Q?.workingDirectory || process.cwd(),
                                                error: V
                                            })
                                        }
                                    });
                                    J = new Hm({
                                        tool: {
                                            case: "shellToolCall",
                                            value: new Kse({
                                                args: Q,
                                                result: te
                                            })
                                        }
                                    });
                                    break;
                                }
                            case "readToolCall":
                                {
                                    const Q = K.toolCall.tool.value.args;
                                    J = new Hm({
                                        tool: {
                                            case: "readToolCall",
                                            value: new IAe({
                                                args: Q,
                                                result: new qke({
                                                    result: {
                                                        case: "error",
                                                        value: new B4t({
                                                            errorMessage: V
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
                                    const Q = K.toolCall.tool.value.args;
                                    J = new Hm({
                                        tool: {
                                            case: "lsToolCall",
                                            value: new j4t({
                                                args: Q,
                                                result: new k4t({
                                                    result: {
                                                        case: "error",
                                                        value: new Yei({
                                                            path: Q?.path ?? "",
                                                            error: V
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
                                    const Q = K.toolCall.tool.value.args;
                                    J = new Hm({
                                        tool: {
                                            case: "grepToolCall",
                                            value: new o5e({
                                                args: Q,
                                                result: new s5e({
                                                    result: {
                                                        case: "error",
                                                        value: new Gti({
                                                            error: V
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
                                    const Q = K.toolCall.tool.value.args;
                                    J = new Hm({
                                        tool: {
                                            case: "deleteToolCall",
                                            value: new L4t({
                                                args: Q,
                                                result: new Yet({
                                                    result: {
                                                        case: "error",
                                                        value: new $ti({
                                                            path: Q?.path ?? "",
                                                            error: V
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
                                    J = K.toolCall;
                                    break;
                                }
                        }
                        J && await f.write({
                            callId: q,
                            toolCall: J
                        });
                    }
                }
            } catch  {} finally{
                f.close();
            }
        })().catch(()=>{});
        const b = f[Symbol.asyncIterator](), y = (async function*() {
            try {
                for await (const $ of f){
                    const H = h.get($.callId);
                    if (H) {
                        const G = new cbt({
                            callId: $.callId,
                            toolCall: $.toolCall,
                            modelCallId: H.modelCallId
                        }), q = new ok({
                            message: {
                                case: "toolCallCompleted",
                                value: G
                            }
                        });
                        yield new _J({
                            message: {
                                case: "interactionUpdate",
                                value: q
                            }
                        }), h.delete($.callId);
                    }
                }
            } catch  {}
        })(), S = d[Symbol.asyncIterator](), k = y[Symbol.asyncIterator]();
        let C = !1, T = !1, I = 0, A = null, P;
        const M = 15e3;
        let O = null, N = null, U = null, j;
        for(; !C || !T;){
            if (!C && !O && (O = S.next().then((G)=>({
                    source: "mock",
                    result: G
                }))), !T && !N && (N = k.next().then((G)=>({
                    source: "exec",
                    result: G
                }))), A !== null && P !== void 0 && I > 0 && g.size > 0) {
                const G = P + M;
                if (U === null || j !== G) {
                    j = G;
                    const q = Math.max(0, G - Date.now());
                    U = new Promise((K)=>{
                        setTimeout(()=>K({
                                source: "timeout"
                            }), q);
                    });
                }
            } else U = null, j = void 0;
            const $ = [];
            if (O && $.push(O), N && $.push(N), U && $.push(U), $.length === 0) break;
            const H = await Promise.race($);
            if (H.source === "timeout") U = null, j = void 0;
            else {
                const { source: G, result: q } = H;
                if (G === "mock" && (O = null), G === "exec" && (N = null), q.done) {
                    G === "mock" && (C = !0, I === 0 && f.close()), G === "exec" && (T = !0);
                    continue;
                }
                let K = null;
                if (G === "mock" && q.value.message.case === "interactionUpdate") {
                    const V = q.value.message.value;
                    if (V.message.case === "toolCallStarted") {
                        const Y = V.message.value;
                        Y.toolCall && h.set(Y.callId, {
                            resolve: ()=>{},
                            reject: ()=>{},
                            toolCall: Y.toolCall,
                            modelCallId: Y.modelCallId
                        });
                    } else if (V.message.case === "partialToolCall") {
                        const Y = V.message.value;
                        Y.toolCall && h.set(Y.callId, {
                            resolve: ()=>{},
                            reject: ()=>{},
                            toolCall: Y.toolCall,
                            modelCallId: Y.modelCallId
                        });
                    }
                } else if (G === "mock" && q.value.message.case === "execServerMessage") {
                    I++;
                    const Y = q.value.message.value.message.value.toolCallId ?? "";
                    Y && g.add(Y);
                } else if (G === "exec" && q.value.message.case === "interactionUpdate") {
                    const V = q.value.message.value;
                    if (V.message.case === "toolCallCompleted") {
                        I--;
                        const Y = V.message.value.callId;
                        Y && g.delete(Y), C && I === 0 && f.close(), A && I === 0 && (K = A, A = null, P = void 0);
                    }
                }
                G === "mock" && q.value.message.case === "interactionUpdate" ? q.value.message.value.message.case === "turnEnded" && I > 0 ? (A = q.value, P ??= Date.now()) : yield q.value : yield q.value, K !== null && (yield K);
            }
            if (A !== null && P !== void 0 && Date.now() - P > M && I > 0 && g.size > 0) for (const G of Array.from(g)){
                const q = h.get(G);
                if (!q) {
                    g.delete(G), I = Math.max(0, I - 1);
                    continue;
                }
                const K = q.toolCall.tool.case, V = "Mock exec produced no result";
                let Y;
                switch(K){
                    case "shellToolCall":
                        {
                            const J = q.toolCall.tool.value.args;
                            Y = new Hm({
                                tool: {
                                    case: "shellToolCall",
                                    value: new Kse({
                                        args: J,
                                        result: new Aj({
                                            result: {
                                                case: "spawnError",
                                                value: new Wei({
                                                    command: J?.command ?? "",
                                                    workingDirectory: J?.workingDirectory || process.cwd(),
                                                    error: V
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
                            const J = q.toolCall.tool.value.args;
                            Y = new Hm({
                                tool: {
                                    case: "readToolCall",
                                    value: new IAe({
                                        args: J,
                                        result: new qke({
                                            result: {
                                                case: "error",
                                                value: new B4t({
                                                    errorMessage: V
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
                            const J = q.toolCall.tool.value.args;
                            Y = new Hm({
                                tool: {
                                    case: "lsToolCall",
                                    value: new j4t({
                                        args: J,
                                        result: new k4t({
                                            result: {
                                                case: "error",
                                                value: new Yei({
                                                    path: J?.path ?? "",
                                                    error: V
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
                            const J = q.toolCall.tool.value.args;
                            Y = new Hm({
                                tool: {
                                    case: "grepToolCall",
                                    value: new o5e({
                                        args: J,
                                        result: new s5e({
                                            result: {
                                                case: "error",
                                                value: new Gti({
                                                    error: V
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
                            const J = q.toolCall.tool.value.args;
                            Y = new Hm({
                                tool: {
                                    case: "deleteToolCall",
                                    value: new L4t({
                                        args: J,
                                        result: new Yet({
                                            result: {
                                                case: "error",
                                                value: new $ti({
                                                    path: J?.path ?? "",
                                                    error: V
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
                            Y = q.toolCall;
                            break;
                        }
                }
                g.delete(G), Y && await f.write({
                    callId: G,
                    toolCall: Y
                });
            }
        }
        A && (yield A);
    }
};

}

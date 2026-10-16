"use strict";
require.d(exports, {
    Cz: ()=>y,
    NN: ()=>v,
    RM: ()=>m,
    S_: ()=>h,
    Wy: ()=>_,
    ZX: ()=>p,
    cR: ()=>w,
    ic: ()=>g,
    l4: ()=>d,
    or: ()=>f,
    x1: ()=>A
});
var n = require("./module-69584.js"), s = require("./module-90028.js"), o = require("./module-48170.js"), i = require("./module-97747.js"), a = require("./module-16821.js"), c = require("./module-70682.js"), l = require("./module-337.js"), u = require("./module-32325.js");
class d extends Error {
    constructor(e){
        super(`Deferred interaction response requested for query ${e.id} (${e.query.case ?? "unknown"})`), this.query = e, this.name = "DeferredInteractionResponseError", Object.setPrototypeOf(this, new.target.prototype);
    }
}
async function p(e, t, r) {
    const s = await e.query(t, new n.Pd7({
        query: {
            case: "webSearchRequestQuery",
            value: new u.KL({
                args: r
            })
        }
    }));
    if ("webSearchRequestResponse" !== s.result.case || !s.result.value) throw new Error(`Unexpected response for web search query: ${s.result.case}`);
    return s.result.value;
}
async function m(e, t, r, s) {
    const o = "boolean" == typeof s ? {
        skipApproval: s
    } : s ?? {}, i = await e.query(t, new n.Pd7({
        query: {
            case: "webFetchRequestQuery",
            value: new l.Un({
                args: r,
                skipApproval: o.skipApproval ?? !1,
                smartModeApproval: o.smartModeApproval
            })
        }
    }));
    if ("webFetchRequestResponse" !== i.result.case || !i.result.value) throw new Error(`Unexpected response for web fetch query: ${i.result.case}`);
    return i.result.value;
}
async function h(e, t, r, s) {
    const o = await e.query(t, new n.Pd7({
        query: {
            case: "askQuestionInteractionQuery",
            value: new n.qZY({
                args: r,
                toolCallId: s
            })
        }
    }));
    if ("askQuestionInteractionResponse" !== o.result.case || !o.result.value) throw new Error(`Unexpected response for ask question query: ${o.result.case}`);
    return o.result.value;
}
async function f(e, t, r) {
    const s = await e.query(t, new n.Pd7({
        query: {
            case: "switchModeRequestQuery",
            value: new c.Nc({
                args: r
            })
        }
    }));
    if ("switchModeRequestResponse" !== s.result.case || !s.result.value) throw new Error(`Unexpected response for switch mode query: ${s.result.case}`);
    return s.result.value;
}
async function g(e, t, r, s) {
    const i = await e.query(t, new n.Pd7({
        query: {
            case: "createPlanRequestQuery",
            value: new o.vR({
                args: r,
                toolCallId: s
            })
        }
    }));
    if ("createPlanRequestResponse" !== i.result.case || !i.result.value) throw new Error(`Unexpected response for create plan query: ${i.result.case}`);
    return i.result.value;
}
async function y(e, t, r) {
    const s = await e.query(t, new n.Pd7({
        query: {
            case: "setupVmEnvironmentArgs",
            value: r
        }
    }));
    if ("setupVmEnvironmentResult" !== s.result.case || !s.result.value) throw new Error(`Unexpected response for setup VM environment query: ${s.result.case}`);
    return s.result.value;
}
async function w(e, t, r) {
    const s = await e.query(t, new n.Pd7({
        query: {
            case: "replaceEnvArgs",
            value: r
        }
    }));
    if ("replaceEnvResult" !== s.result.case || !s.result.value) throw new Error(`Unexpected response for replace env query: ${s.result.case}`);
    return s.result.value;
}
async function v(e, t, r) {
    const s = await e.query(t, new n.Pd7({
        query: {
            case: "mcpAuthRequestQuery",
            value: new a.uL({
                args: r
            })
        }
    }));
    if ("mcpAuthRequestResponse" !== s.result.case || !s.result.value) throw new Error(`Unexpected response for MCP auth query: ${s.result.case}`);
    return s.result.value;
}
async function _(e, t, r) {
    const o = await e.query(t, new n.Pd7({
        query: {
            case: "connectScmRequestQuery",
            value: new s.$1({
                args: r
            })
        }
    }));
    if ("connectScmRequestResponse" !== o.result.case || !o.result.value) throw new Error(`Unexpected response for connect SCM query: ${o.result.case}`);
    return o.result.value;
}
const A = {
    webSearchApproved: (e)=>new n.Y5({
            id: e,
            result: {
                case: "webSearchRequestResponse",
                value: new u.lI({
                    result: {
                        case: "approved",
                        value: new u.XJ
                    }
                })
            }
        }),
    webSearchRejected: (e, t)=>new n.Y5({
            id: e,
            result: {
                case: "webSearchRequestResponse",
                value: new u.lI({
                    result: {
                        case: "rejected",
                        value: new u.yc({
                            reason: t ?? ""
                        })
                    }
                })
            }
        }),
    webFetchApproved: (e)=>new n.Y5({
            id: e,
            result: {
                case: "webFetchRequestResponse",
                value: new l.fS({
                    result: {
                        case: "approved",
                        value: new l.Hs
                    }
                })
            }
        }),
    webFetchRejected: (e, t)=>new n.Y5({
            id: e,
            result: {
                case: "webFetchRequestResponse",
                value: new l.fS({
                    result: {
                        case: "rejected",
                        value: new l.m$({
                            reason: t ?? ""
                        })
                    }
                })
            }
        }),
    askQuestion: (e, t)=>new n.Y5({
            id: e,
            result: {
                case: "askQuestionInteractionResponse",
                value: new n.zT({
                    result: t
                })
            }
        }),
    switchModeApproved: (e)=>new n.Y5({
            id: e,
            result: {
                case: "switchModeRequestResponse",
                value: new c.w$({
                    result: {
                        case: "approved",
                        value: new c.q5
                    }
                })
            }
        }),
    switchModeRejected: (e, t)=>new n.Y5({
            id: e,
            result: {
                case: "switchModeRequestResponse",
                value: new c.w$({
                    result: {
                        case: "rejected",
                        value: new c.rA({
                            reason: t ?? ""
                        })
                    }
                })
            }
        }),
    createPlan: (e, t)=>new n.Y5({
            id: e,
            result: {
                case: "createPlanRequestResponse",
                value: new o.gz({
                    result: t
                })
            }
        }),
    setupVmEnvironment: (e, t)=>new n.Y5({
            id: e,
            result: {
                case: "setupVmEnvironmentResult",
                value: t
            }
        }),
    replaceEnv: (e, t)=>new n.Y5({
            id: e,
            result: {
                case: "replaceEnvResult",
                value: t
            }
        }),
    prManagement: (e, t)=>new n.Y5({
            id: e,
            result: {
                case: "prManagementResult",
                value: t
            }
        }),
    mcpAuthApproved: (e)=>new n.Y5({
            id: e,
            result: {
                case: "mcpAuthRequestResponse",
                value: new a.h({
                    result: {
                        case: "approved",
                        value: new a.D5
                    }
                })
            }
        }),
    mcpAuthRejected: (e, t)=>new n.Y5({
            id: e,
            result: {
                case: "mcpAuthRequestResponse",
                value: new a.h({
                    result: {
                        case: "rejected",
                        value: new a.OI({
                            reason: t ?? "Authentication was rejected"
                        })
                    }
                })
            }
        }),
    connectScmApproved: (e)=>new n.Y5({
            id: e,
            result: {
                case: "connectScmRequestResponse",
                value: new s.qG({
                    result: {
                        case: "approved",
                        value: new s.O9
                    }
                })
            }
        }),
    connectScmRejected: (e, t)=>new n.Y5({
            id: e,
            result: {
                case: "connectScmRequestResponse",
                value: new s.qG({
                    result: {
                        case: "rejected",
                        value: new s.lB({
                            reason: t ?? "Connecting GitHub was skipped"
                        })
                    }
                })
            }
        }),
    connectScmFailed: (e, t)=>new n.Y5({
            id: e,
            result: {
                case: "connectScmRequestResponse",
                value: new s.qG({
                    result: {
                        case: "failed",
                        value: new s.ik({
                            error: t ?? "Failed to connect GitHub"
                        })
                    }
                })
            }
        }),
    generateImageApproved: (e, t)=>new n.Y5({
            id: e,
            result: {
                case: "generateImageRequestResponse",
                value: new i.vW({
                    result: {
                        case: "approved",
                        value: new i.l3({
                            description: t ?? ""
                        })
                    }
                })
            }
        }),
    generateImageRejected: (e, t)=>new n.Y5({
            id: e,
            result: {
                case: "generateImageRequestResponse",
                value: new i.vW({
                    result: {
                        case: "rejected",
                        value: new i.Uq({
                            reason: t ?? ""
                        })
                    }
                })
            }
        })
};

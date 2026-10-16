"use strict";
require.d(exports, {
    $9: ()=>jt,
    EV: ()=>a,
    GU: ()=>Qt,
    HM: ()=>et,
    Iu: ()=>i,
    K1: ()=>It,
    LW: ()=>R,
    Mg: ()=>ae,
    Nh: ()=>rr,
    O$: ()=>Ce,
    O4: ()=>P,
    OR: ()=>M,
    Ql: ()=>ue,
    Rk: ()=>V,
    Sc: ()=>de,
    Sq: ()=>B,
    TF: ()=>at,
    WT: ()=>it,
    Yu: ()=>je,
    _r: ()=>te,
    a5: ()=>he,
    aE: ()=>o,
    bZ: ()=>y,
    br: ()=>tt,
    cv: ()=>Ie,
    eK: ()=>H,
    fH: ()=>ut,
    gH: ()=>ge,
    gd: ()=>fe,
    hh: ()=>Je,
    ig: ()=>C,
    ki: ()=>le,
    lg: ()=>I,
    n_: ()=>Wt,
    oQ: ()=>pe,
    tC: ()=>X,
    u9: ()=>Et,
    ve: ()=>Me,
    vo: ()=>x,
    wR: ()=>J,
    wU: ()=>Q,
    xI: ()=>dt,
    zR: ()=>me
});
var n = require("./module-61165.js"), s = require("./module-78880.js");
const o = "2025-11-25", i = [
    o,
    "2025-06-18",
    "2025-03-26",
    "2024-11-05",
    "2024-10-07"
], a = "io.modelcontextprotocol/related-task", c = "2.0", l = n.Ie((e)=>null !== e && ("object" == typeof e || "function" == typeof e)), u = n.KC([
    n.Yj(),
    n.ai().int()
]), d = n.Yj(), p = (n._H({
    ttl: n.KC([
        n.ai(),
        n.ch()
    ]).optional(),
    pollInterval: n.ai().optional()
}), n.Ik({
    ttl: n.ai().optional()
})), m = n.Ik({
    taskId: n.Yj()
}), h = n._H({
    progressToken: u.optional(),
    [a]: m.optional()
}), f = n.Ik({
    _meta: h.optional()
}), g = f.extend({
    task: p.optional()
}), y = (e)=>g.safeParse(e).success, w = n.Ik({
    method: n.Yj(),
    params: f.loose().optional()
}), v = n.Ik({
    _meta: h.optional()
}), _ = n.Ik({
    method: n.Yj(),
    params: v.loose().optional()
}), b = n._H({
    _meta: h.optional()
}), S = n.KC([
    n.Yj(),
    n.ai().int()
]), k = n.Ik({
    jsonrpc: n.eu(c),
    id: S,
    ...w.shape
}).strict(), x = (e)=>k.safeParse(e).success, E = n.Ik({
    jsonrpc: n.eu(c),
    ..._.shape
}).strict(), I = (e)=>E.safeParse(e).success, T = n.Ik({
    jsonrpc: n.eu(c),
    id: S,
    result: b
}).strict(), C = (e)=>T.safeParse(e).success;
var P;
!function(e) {
    e[e.ConnectionClosed = -32e3] = "ConnectionClosed", e[e.RequestTimeout = -32001] = "RequestTimeout", e[e.ParseError = -32700] = "ParseError", e[e.InvalidRequest = -32600] = "InvalidRequest", e[e.MethodNotFound = -32601] = "MethodNotFound", e[e.InvalidParams = -32602] = "InvalidParams", e[e.InternalError = -32603] = "InternalError", e[e.UrlElicitationRequired = -32042] = "UrlElicitationRequired";
}(P || (P = {}));
const A = n.Ik({
    jsonrpc: n.eu(c),
    id: S.optional(),
    error: n.Ik({
        code: n.ai().int(),
        message: n.Yj(),
        data: n.L5().optional()
    })
}).strict(), R = (e)=>A.safeParse(e).success, M = n.KC([
    k,
    E,
    T,
    A
]), J = (n.KC([
    T,
    A
]), b.strict()), O = v.extend({
    requestId: S.optional(),
    reason: n.Yj().optional()
}), B = _.extend({
    method: n.eu("notifications/cancelled"),
    params: O
}), D = n.Ik({
    src: n.Yj(),
    mimeType: n.Yj().optional(),
    sizes: n.YO(n.Yj()).optional(),
    theme: n.k5([
        "light",
        "dark"
    ]).optional()
}), q = n.Ik({
    icons: n.YO(D).optional()
}), N = n.Ik({
    name: n.Yj(),
    title: n.Yj().optional()
}), F = N.extend({
    ...N.shape,
    ...q.shape,
    version: n.Yj(),
    websiteUrl: n.Yj().optional(),
    description: n.Yj().optional()
}), U = n.E$(n.Ik({
    applyDefaults: n.zM().optional()
}), n.g1(n.Yj(), n.L5())), L = n.vk((e)=>e && "object" == typeof e && !Array.isArray(e) && 0 === Object.keys(e).length ? {
        form: {}
    } : e, n.E$(n.Ik({
    form: U.optional(),
    url: l.optional()
}), n.g1(n.Yj(), n.L5()).optional())), $ = n._H({
    list: l.optional(),
    cancel: l.optional(),
    requests: n._H({
        sampling: n._H({
            createMessage: l.optional()
        }).optional(),
        elicitation: n._H({
            create: l.optional()
        }).optional()
    }).optional()
}), j = n._H({
    list: l.optional(),
    cancel: l.optional(),
    requests: n._H({
        tools: n._H({
            call: l.optional()
        }).optional()
    }).optional()
}), G = n.Ik({
    experimental: n.g1(n.Yj(), l).optional(),
    sampling: n.Ik({
        context: l.optional(),
        tools: l.optional()
    }).optional(),
    elicitation: L.optional(),
    roots: n.Ik({
        listChanged: n.zM().optional()
    }).optional(),
    tasks: $.optional()
}), z = f.extend({
    protocolVersion: n.Yj(),
    capabilities: G,
    clientInfo: F
}), W = w.extend({
    method: n.eu("initialize"),
    params: z
}), H = (e)=>W.safeParse(e).success, K = n.Ik({
    experimental: n.g1(n.Yj(), l).optional(),
    logging: l.optional(),
    completions: l.optional(),
    prompts: n.Ik({
        listChanged: n.zM().optional()
    }).optional(),
    resources: n.Ik({
        subscribe: n.zM().optional(),
        listChanged: n.zM().optional()
    }).optional(),
    tools: n.Ik({
        listChanged: n.zM().optional()
    }).optional(),
    tasks: j.optional()
}), V = b.extend({
    protocolVersion: n.Yj(),
    capabilities: K,
    serverInfo: F,
    instructions: n.Yj().optional()
}), Y = _.extend({
    method: n.eu("notifications/initialized"),
    params: v.optional()
}), Q = (e)=>Y.safeParse(e).success, X = w.extend({
    method: n.eu("ping"),
    params: f.optional()
}), Z = n.Ik({
    progress: n.ai(),
    total: n.lq(n.ai()),
    message: n.lq(n.Yj())
}), ee = n.Ik({
    ...v.shape,
    ...Z.shape,
    progressToken: u
}), te = _.extend({
    method: n.eu("notifications/progress"),
    params: ee
}), re = f.extend({
    cursor: d.optional()
}), ne = w.extend({
    params: re.optional()
}), se = b.extend({
    nextCursor: d.optional()
}), oe = n.k5([
    "working",
    "input_required",
    "completed",
    "failed",
    "cancelled"
]), ie = n.Ik({
    taskId: n.Yj(),
    status: oe,
    ttl: n.KC([
        n.ai(),
        n.ch()
    ]),
    createdAt: n.Yj(),
    lastUpdatedAt: n.Yj(),
    pollInterval: n.lq(n.ai()),
    statusMessage: n.lq(n.Yj())
}), ae = b.extend({
    task: ie
}), ce = v.merge(ie), le = _.extend({
    method: n.eu("notifications/tasks/status"),
    params: ce
}), ue = w.extend({
    method: n.eu("tasks/get"),
    params: f.extend({
        taskId: n.Yj()
    })
}), de = b.merge(ie), pe = w.extend({
    method: n.eu("tasks/result"),
    params: f.extend({
        taskId: n.Yj()
    })
}), me = (b.loose(), ne.extend({
    method: n.eu("tasks/list")
})), he = se.extend({
    tasks: n.YO(ie)
}), fe = w.extend({
    method: n.eu("tasks/cancel"),
    params: f.extend({
        taskId: n.Yj()
    })
}), ge = b.merge(ie), ye = n.Ik({
    uri: n.Yj(),
    mimeType: n.lq(n.Yj()),
    _meta: n.g1(n.Yj(), n.L5()).optional()
}), we = ye.extend({
    text: n.Yj()
}), ve = n.Yj().refine((e)=>{
    try {
        return atob(e), !0;
    } catch  {
        return !1;
    }
}, {
    message: "Invalid Base64 string"
}), _e = ye.extend({
    blob: ve
}), be = n.k5([
    "user",
    "assistant"
]), Se = n.Ik({
    audience: n.YO(be).optional(),
    priority: n.ai().min(0).max(1).optional(),
    lastModified: s.w$({
        offset: !0
    }).optional()
}), ke = n.Ik({
    ...N.shape,
    ...q.shape,
    uri: n.Yj(),
    description: n.lq(n.Yj()),
    mimeType: n.lq(n.Yj()),
    annotations: Se.optional(),
    _meta: n.lq(n._H({}))
}), xe = n.Ik({
    ...N.shape,
    ...q.shape,
    uriTemplate: n.Yj(),
    description: n.lq(n.Yj()),
    mimeType: n.lq(n.Yj()),
    annotations: Se.optional(),
    _meta: n.lq(n._H({}))
}), Ee = ne.extend({
    method: n.eu("resources/list")
}), Ie = se.extend({
    resources: n.YO(ke)
}), Te = ne.extend({
    method: n.eu("resources/templates/list")
}), Ce = se.extend({
    resourceTemplates: n.YO(xe)
}), Pe = f.extend({
    uri: n.Yj()
}), Ae = Pe, Re = w.extend({
    method: n.eu("resources/read"),
    params: Ae
}), Me = b.extend({
    contents: n.YO(n.KC([
        we,
        _e
    ]))
}), Je = _.extend({
    method: n.eu("notifications/resources/list_changed"),
    params: v.optional()
}), Oe = Pe, Be = w.extend({
    method: n.eu("resources/subscribe"),
    params: Oe
}), De = Pe, qe = w.extend({
    method: n.eu("resources/unsubscribe"),
    params: De
}), Ne = v.extend({
    uri: n.Yj()
}), Fe = _.extend({
    method: n.eu("notifications/resources/updated"),
    params: Ne
}), Ue = n.Ik({
    name: n.Yj(),
    description: n.lq(n.Yj()),
    required: n.lq(n.zM())
}), Le = n.Ik({
    ...N.shape,
    ...q.shape,
    description: n.lq(n.Yj()),
    arguments: n.lq(n.YO(Ue)),
    _meta: n.lq(n._H({}))
}), $e = ne.extend({
    method: n.eu("prompts/list")
}), je = se.extend({
    prompts: n.YO(Le)
}), Ge = f.extend({
    name: n.Yj(),
    arguments: n.g1(n.Yj(), n.Yj()).optional()
}), ze = w.extend({
    method: n.eu("prompts/get"),
    params: Ge
}), We = n.Ik({
    type: n.eu("text"),
    text: n.Yj(),
    annotations: Se.optional(),
    _meta: n.g1(n.Yj(), n.L5()).optional()
}), He = n.Ik({
    type: n.eu("image"),
    data: ve,
    mimeType: n.Yj(),
    annotations: Se.optional(),
    _meta: n.g1(n.Yj(), n.L5()).optional()
}), Ke = n.Ik({
    type: n.eu("audio"),
    data: ve,
    mimeType: n.Yj(),
    annotations: Se.optional(),
    _meta: n.g1(n.Yj(), n.L5()).optional()
}), Ve = n.Ik({
    type: n.eu("tool_use"),
    name: n.Yj(),
    id: n.Yj(),
    input: n.g1(n.Yj(), n.L5()),
    _meta: n.g1(n.Yj(), n.L5()).optional()
}), Ye = n.Ik({
    type: n.eu("resource"),
    resource: n.KC([
        we,
        _e
    ]),
    annotations: Se.optional(),
    _meta: n.g1(n.Yj(), n.L5()).optional()
}), Qe = ke.extend({
    type: n.eu("resource_link")
}), Xe = n.KC([
    We,
    He,
    Ke,
    Qe,
    Ye
]), Ze = n.Ik({
    role: be,
    content: Xe
}), et = b.extend({
    description: n.Yj().optional(),
    messages: n.YO(Ze)
}), tt = _.extend({
    method: n.eu("notifications/prompts/list_changed"),
    params: v.optional()
}), rt = n.Ik({
    title: n.Yj().optional(),
    readOnlyHint: n.zM().optional(),
    destructiveHint: n.zM().optional(),
    idempotentHint: n.zM().optional(),
    openWorldHint: n.zM().optional()
}), nt = n.Ik({
    taskSupport: n.k5([
        "required",
        "optional",
        "forbidden"
    ]).optional()
}), st = n.Ik({
    ...N.shape,
    ...q.shape,
    description: n.Yj().optional(),
    inputSchema: n.Ik({
        type: n.eu("object"),
        properties: n.g1(n.Yj(), l).optional(),
        required: n.YO(n.Yj()).optional()
    }).catchall(n.L5()),
    outputSchema: n.Ik({
        type: n.eu("object"),
        properties: n.g1(n.Yj(), l).optional(),
        required: n.YO(n.Yj()).optional()
    }).catchall(n.L5()).optional(),
    annotations: rt.optional(),
    execution: nt.optional(),
    _meta: n.g1(n.Yj(), n.L5()).optional()
}), ot = ne.extend({
    method: n.eu("tools/list")
}), it = se.extend({
    tools: n.YO(st)
}), at = b.extend({
    content: n.YO(Xe).default([]),
    structuredContent: n.g1(n.Yj(), n.L5()).optional(),
    isError: n.zM().optional()
}), ct = (at.or(b.extend({
    toolResult: n.L5()
})), g.extend({
    name: n.Yj(),
    arguments: n.g1(n.Yj(), n.L5()).optional()
})), lt = w.extend({
    method: n.eu("tools/call"),
    params: ct
}), ut = _.extend({
    method: n.eu("notifications/tools/list_changed"),
    params: v.optional()
}), dt = n.Ik({
    autoRefresh: n.zM().default(!0),
    debounceMs: n.ai().int().nonnegative().default(300)
}), pt = n.k5([
    "debug",
    "info",
    "notice",
    "warning",
    "error",
    "critical",
    "alert",
    "emergency"
]), mt = f.extend({
    level: pt
}), ht = w.extend({
    method: n.eu("logging/setLevel"),
    params: mt
}), ft = v.extend({
    level: pt,
    logger: n.Yj().optional(),
    data: n.L5()
}), gt = _.extend({
    method: n.eu("notifications/message"),
    params: ft
}), yt = n.Ik({
    name: n.Yj().optional()
}), wt = n.Ik({
    hints: n.YO(yt).optional(),
    costPriority: n.ai().min(0).max(1).optional(),
    speedPriority: n.ai().min(0).max(1).optional(),
    intelligencePriority: n.ai().min(0).max(1).optional()
}), vt = n.Ik({
    mode: n.k5([
        "auto",
        "required",
        "none"
    ]).optional()
}), _t = n.Ik({
    type: n.eu("tool_result"),
    toolUseId: n.Yj().describe("The unique identifier for the corresponding tool call."),
    content: n.YO(Xe).default([]),
    structuredContent: n.Ik({}).loose().optional(),
    isError: n.zM().optional(),
    _meta: n.g1(n.Yj(), n.L5()).optional()
}), bt = n.gM("type", [
    We,
    He,
    Ke
]), St = n.gM("type", [
    We,
    He,
    Ke,
    Ve,
    _t
]), kt = n.Ik({
    role: be,
    content: n.KC([
        St,
        n.YO(St)
    ]),
    _meta: n.g1(n.Yj(), n.L5()).optional()
}), xt = g.extend({
    messages: n.YO(kt),
    modelPreferences: wt.optional(),
    systemPrompt: n.Yj().optional(),
    includeContext: n.k5([
        "none",
        "thisServer",
        "allServers"
    ]).optional(),
    temperature: n.ai().optional(),
    maxTokens: n.ai().int(),
    stopSequences: n.YO(n.Yj()).optional(),
    metadata: l.optional(),
    tools: n.YO(st).optional(),
    toolChoice: vt.optional()
}), Et = w.extend({
    method: n.eu("sampling/createMessage"),
    params: xt
}), It = b.extend({
    model: n.Yj(),
    stopReason: n.lq(n.k5([
        "endTurn",
        "stopSequence",
        "maxTokens"
    ]).or(n.Yj())),
    role: be,
    content: bt
}), Tt = b.extend({
    model: n.Yj(),
    stopReason: n.lq(n.k5([
        "endTurn",
        "stopSequence",
        "maxTokens",
        "toolUse"
    ]).or(n.Yj())),
    role: be,
    content: n.KC([
        St,
        n.YO(St)
    ])
}), Ct = n.Ik({
    type: n.eu("boolean"),
    title: n.Yj().optional(),
    description: n.Yj().optional(),
    default: n.zM().optional()
}), Pt = n.Ik({
    type: n.eu("string"),
    title: n.Yj().optional(),
    description: n.Yj().optional(),
    minLength: n.ai().optional(),
    maxLength: n.ai().optional(),
    format: n.k5([
        "email",
        "uri",
        "date",
        "date-time"
    ]).optional(),
    default: n.Yj().optional()
}), At = n.Ik({
    type: n.k5([
        "number",
        "integer"
    ]),
    title: n.Yj().optional(),
    description: n.Yj().optional(),
    minimum: n.ai().optional(),
    maximum: n.ai().optional(),
    default: n.ai().optional()
}), Rt = n.Ik({
    type: n.eu("string"),
    title: n.Yj().optional(),
    description: n.Yj().optional(),
    enum: n.YO(n.Yj()),
    default: n.Yj().optional()
}), Mt = n.Ik({
    type: n.eu("string"),
    title: n.Yj().optional(),
    description: n.Yj().optional(),
    oneOf: n.YO(n.Ik({
        const: n.Yj(),
        title: n.Yj()
    })),
    default: n.Yj().optional()
}), Jt = n.Ik({
    type: n.eu("string"),
    title: n.Yj().optional(),
    description: n.Yj().optional(),
    enum: n.YO(n.Yj()),
    enumNames: n.YO(n.Yj()).optional(),
    default: n.Yj().optional()
}), Ot = n.KC([
    Rt,
    Mt
]), Bt = n.Ik({
    type: n.eu("array"),
    title: n.Yj().optional(),
    description: n.Yj().optional(),
    minItems: n.ai().optional(),
    maxItems: n.ai().optional(),
    items: n.Ik({
        type: n.eu("string"),
        enum: n.YO(n.Yj())
    }),
    default: n.YO(n.Yj()).optional()
}), Dt = n.Ik({
    type: n.eu("array"),
    title: n.Yj().optional(),
    description: n.Yj().optional(),
    minItems: n.ai().optional(),
    maxItems: n.ai().optional(),
    items: n.Ik({
        anyOf: n.YO(n.Ik({
            const: n.Yj(),
            title: n.Yj()
        }))
    }),
    default: n.YO(n.Yj()).optional()
}), qt = n.KC([
    Bt,
    Dt
]), Nt = n.KC([
    Jt,
    Ot,
    qt
]), Ft = n.KC([
    Nt,
    Ct,
    Pt,
    At
]), Ut = g.extend({
    mode: n.eu("form").optional(),
    message: n.Yj(),
    requestedSchema: n.Ik({
        type: n.eu("object"),
        properties: n.g1(n.Yj(), Ft),
        required: n.YO(n.Yj()).optional()
    })
}), Lt = g.extend({
    mode: n.eu("url"),
    message: n.Yj(),
    elicitationId: n.Yj(),
    url: n.Yj().url()
}), $t = n.KC([
    Ut,
    Lt
]), jt = w.extend({
    method: n.eu("elicitation/create"),
    params: $t
}), Gt = v.extend({
    elicitationId: n.Yj()
}), zt = _.extend({
    method: n.eu("notifications/elicitation/complete"),
    params: Gt
}), Wt = b.extend({
    action: n.k5([
        "accept",
        "decline",
        "cancel"
    ]),
    content: n.vk((e)=>null === e ? void 0 : e, n.g1(n.Yj(), n.KC([
        n.Yj(),
        n.ai(),
        n.zM(),
        n.YO(n.Yj())
    ])).optional())
}), Ht = n.Ik({
    type: n.eu("ref/resource"),
    uri: n.Yj()
}), Kt = n.Ik({
    type: n.eu("ref/prompt"),
    name: n.Yj()
}), Vt = f.extend({
    ref: n.KC([
        Kt,
        Ht
    ]),
    argument: n.Ik({
        name: n.Yj(),
        value: n.Yj()
    }),
    context: n.Ik({
        arguments: n.g1(n.Yj(), n.Yj()).optional()
    }).optional()
}), Yt = w.extend({
    method: n.eu("completion/complete"),
    params: Vt
});
const Qt = b.extend({
    completion: n._H({
        values: n.YO(n.Yj()).max(100),
        total: n.lq(n.ai().int()),
        hasMore: n.lq(n.zM())
    })
}), Xt = n.Ik({
    uri: n.Yj().startsWith("file://"),
    name: n.Yj().optional(),
    _meta: n.g1(n.Yj(), n.L5()).optional()
}), Zt = w.extend({
    method: n.eu("roots/list"),
    params: f.optional()
}), er = b.extend({
    roots: n.YO(Xt)
}), tr = _.extend({
    method: n.eu("notifications/roots/list_changed"),
    params: v.optional()
});
n.KC([
    X,
    W,
    Yt,
    ht,
    ze,
    $e,
    Ee,
    Te,
    Re,
    Be,
    qe,
    lt,
    ot,
    ue,
    pe,
    me,
    fe
]), n.KC([
    B,
    te,
    Y,
    tr,
    le
]), n.KC([
    J,
    It,
    Tt,
    Wt,
    er,
    de,
    he,
    ae
]), n.KC([
    X,
    Et,
    jt,
    Zt,
    ue,
    pe,
    me,
    fe
]), n.KC([
    B,
    te,
    gt,
    Fe,
    Je,
    ut,
    tt,
    le,
    zt
]), n.KC([
    J,
    V,
    Qt,
    et,
    je,
    Ie,
    Ce,
    Me,
    at,
    it,
    de,
    he,
    ae
]);
class rr extends Error {
    constructor(e, t, r){
        super(`MCP error ${e}: ${t}`), this.code = e, this.data = r, this.name = "McpError";
    }
    static fromError(e, t, r) {
        if (e === P.UrlElicitationRequired && r) {
            const e = r;
            if (e.elicitations) return new nr(e.elicitations, t);
        }
        return new rr(e, t, r);
    }
}
class nr extends rr {
    constructor(e, t = `URL elicitation${e.length > 1 ? "s" : ""} required`){
        super(P.UrlElicitationRequired, t, {
            elicitations: e
        });
    }
    get elicitations() {
        return this.data?.elicitations ?? [];
    }
}

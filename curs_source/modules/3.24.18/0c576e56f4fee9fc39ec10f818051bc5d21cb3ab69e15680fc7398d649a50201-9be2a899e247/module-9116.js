"use strict";
require.d(exports, {
    $9: ()=>Bt,
    EV: ()=>a,
    GU: ()=>Gt,
    HM: ()=>et,
    Iu: ()=>i,
    K1: ()=>Tt,
    LW: ()=>A,
    Mg: ()=>ae,
    Nh: ()=>rr,
    O$: ()=>Pe,
    O4: ()=>I,
    OR: ()=>$,
    Ql: ()=>le,
    Rk: ()=>H,
    Sc: ()=>de,
    Sq: ()=>M,
    TF: ()=>at,
    WQ: ()=>Qt,
    WT: ()=>it,
    Yu: ()=>Be,
    _r: ()=>te,
    a5: ()=>he,
    aE: ()=>s,
    bZ: ()=>y,
    br: ()=>tt,
    cL: ()=>Fe,
    cv: ()=>Te,
    eK: ()=>Z,
    fH: ()=>lt,
    gH: ()=>ge,
    gd: ()=>me,
    hh: ()=>Re,
    ig: ()=>P,
    ki: ()=>ue,
    lg: ()=>T,
    n_: ()=>Kt,
    oQ: ()=>pe,
    tC: ()=>X,
    u9: ()=>xt,
    ve: ()=>$e,
    vo: ()=>E,
    wR: ()=>R,
    wU: ()=>G,
    xI: ()=>dt,
    zR: ()=>fe
});
var n = require("./module-1165.js"), o = require("./module-8880.js");
const s = "2025-11-25", i = [
    s,
    "2025-06-18",
    "2025-03-26",
    "2024-11-05",
    "2024-10-07"
], a = "io.modelcontextprotocol/related-task", c = "2.0", u = n.Ie((e)=>null !== e && ("object" == typeof e || "function" == typeof e)), l = n.KC([
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
})), f = n.Ik({
    taskId: n.Yj()
}), h = n._H({
    progressToken: l.optional(),
    [a]: f.optional()
}), m = n.Ik({
    _meta: h.optional()
}), g = m.extend({
    task: p.optional()
}), y = (e)=>g.safeParse(e).success, _ = n.Ik({
    method: n.Yj(),
    params: m.loose().optional()
}), v = n.Ik({
    _meta: h.optional()
}), w = n.Ik({
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
    ..._.shape
}).strict(), E = (e)=>k.safeParse(e).success, x = n.Ik({
    jsonrpc: n.eu(c),
    ...w.shape
}).strict(), T = (e)=>x.safeParse(e).success, O = n.Ik({
    jsonrpc: n.eu(c),
    id: S,
    result: b
}).strict(), P = (e)=>O.safeParse(e).success;
var I;
!function(e) {
    e[e.ConnectionClosed = -32e3] = "ConnectionClosed", e[e.RequestTimeout = -32001] = "RequestTimeout", e[e.ParseError = -32700] = "ParseError", e[e.InvalidRequest = -32600] = "InvalidRequest", e[e.MethodNotFound = -32601] = "MethodNotFound", e[e.InvalidParams = -32602] = "InvalidParams", e[e.InternalError = -32603] = "InternalError", e[e.UrlElicitationRequired = -32042] = "UrlElicitationRequired";
}(I || (I = {}));
const C = n.Ik({
    jsonrpc: n.eu(c),
    id: S.optional(),
    error: n.Ik({
        code: n.ai().int(),
        message: n.Yj(),
        data: n.L5().optional()
    })
}).strict(), A = (e)=>C.safeParse(e).success, $ = n.KC([
    k,
    x,
    O,
    C
]), R = (n.KC([
    O,
    C
]), b.strict()), N = v.extend({
    requestId: S.optional(),
    reason: n.Yj().optional()
}), M = w.extend({
    method: n.eu("notifications/cancelled"),
    params: N
}), J = n.Ik({
    src: n.Yj(),
    mimeType: n.Yj().optional(),
    sizes: n.YO(n.Yj()).optional(),
    theme: n.k5([
        "light",
        "dark"
    ]).optional()
}), j = n.Ik({
    icons: n.YO(J).optional()
}), D = n.Ik({
    name: n.Yj(),
    title: n.Yj().optional()
}), F = D.extend({
    ...D.shape,
    ...j.shape,
    version: n.Yj(),
    websiteUrl: n.Yj().optional(),
    description: n.Yj().optional()
}), q = n.E$(n.Ik({
    applyDefaults: n.zM().optional()
}), n.g1(n.Yj(), n.L5())), z = n.vk((e)=>e && "object" == typeof e && !Array.isArray(e) && 0 === Object.keys(e).length ? {
        form: {}
    } : e, n.E$(n.Ik({
    form: q.optional(),
    url: u.optional()
}), n.g1(n.Yj(), n.L5()).optional())), U = n._H({
    list: u.optional(),
    cancel: u.optional(),
    requests: n._H({
        sampling: n._H({
            createMessage: u.optional()
        }).optional(),
        elicitation: n._H({
            create: u.optional()
        }).optional()
    }).optional()
}), B = n._H({
    list: u.optional(),
    cancel: u.optional(),
    requests: n._H({
        tools: n._H({
            call: u.optional()
        }).optional()
    }).optional()
}), L = n.Ik({
    experimental: n.g1(n.Yj(), u).optional(),
    sampling: n.Ik({
        context: u.optional(),
        tools: u.optional()
    }).optional(),
    elicitation: z.optional(),
    roots: n.Ik({
        listChanged: n.zM().optional()
    }).optional(),
    tasks: U.optional()
}), V = m.extend({
    protocolVersion: n.Yj(),
    capabilities: L,
    clientInfo: F
}), K = _.extend({
    method: n.eu("initialize"),
    params: V
}), Z = (e)=>K.safeParse(e).success, W = n.Ik({
    experimental: n.g1(n.Yj(), u).optional(),
    logging: u.optional(),
    completions: u.optional(),
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
    tasks: B.optional()
}), H = b.extend({
    protocolVersion: n.Yj(),
    capabilities: W,
    serverInfo: F,
    instructions: n.Yj().optional()
}), Y = w.extend({
    method: n.eu("notifications/initialized"),
    params: v.optional()
}), G = (e)=>Y.safeParse(e).success, X = _.extend({
    method: n.eu("ping"),
    params: m.optional()
}), Q = n.Ik({
    progress: n.ai(),
    total: n.lq(n.ai()),
    message: n.lq(n.Yj())
}), ee = n.Ik({
    ...v.shape,
    ...Q.shape,
    progressToken: l
}), te = w.extend({
    method: n.eu("notifications/progress"),
    params: ee
}), re = m.extend({
    cursor: d.optional()
}), ne = _.extend({
    params: re.optional()
}), oe = b.extend({
    nextCursor: d.optional()
}), se = n.k5([
    "working",
    "input_required",
    "completed",
    "failed",
    "cancelled"
]), ie = n.Ik({
    taskId: n.Yj(),
    status: se,
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
}), ce = v.merge(ie), ue = w.extend({
    method: n.eu("notifications/tasks/status"),
    params: ce
}), le = _.extend({
    method: n.eu("tasks/get"),
    params: m.extend({
        taskId: n.Yj()
    })
}), de = b.merge(ie), pe = _.extend({
    method: n.eu("tasks/result"),
    params: m.extend({
        taskId: n.Yj()
    })
}), fe = (b.loose(), ne.extend({
    method: n.eu("tasks/list")
})), he = oe.extend({
    tasks: n.YO(ie)
}), me = _.extend({
    method: n.eu("tasks/cancel"),
    params: m.extend({
        taskId: n.Yj()
    })
}), ge = b.merge(ie), ye = n.Ik({
    uri: n.Yj(),
    mimeType: n.lq(n.Yj()),
    _meta: n.g1(n.Yj(), n.L5()).optional()
}), _e = ye.extend({
    text: n.Yj()
}), ve = n.Yj().refine((e)=>{
    try {
        return atob(e), !0;
    } catch  {
        return !1;
    }
}, {
    message: "Invalid Base64 string"
}), we = ye.extend({
    blob: ve
}), be = n.k5([
    "user",
    "assistant"
]), Se = n.Ik({
    audience: n.YO(be).optional(),
    priority: n.ai().min(0).max(1).optional(),
    lastModified: o.w$({
        offset: !0
    }).optional()
}), ke = n.Ik({
    ...D.shape,
    ...j.shape,
    uri: n.Yj(),
    description: n.lq(n.Yj()),
    mimeType: n.lq(n.Yj()),
    annotations: Se.optional(),
    _meta: n.lq(n._H({}))
}), Ee = n.Ik({
    ...D.shape,
    ...j.shape,
    uriTemplate: n.Yj(),
    description: n.lq(n.Yj()),
    mimeType: n.lq(n.Yj()),
    annotations: Se.optional(),
    _meta: n.lq(n._H({}))
}), xe = ne.extend({
    method: n.eu("resources/list")
}), Te = oe.extend({
    resources: n.YO(ke)
}), Oe = ne.extend({
    method: n.eu("resources/templates/list")
}), Pe = oe.extend({
    resourceTemplates: n.YO(Ee)
}), Ie = m.extend({
    uri: n.Yj()
}), Ce = Ie, Ae = _.extend({
    method: n.eu("resources/read"),
    params: Ce
}), $e = b.extend({
    contents: n.YO(n.KC([
        _e,
        we
    ]))
}), Re = w.extend({
    method: n.eu("notifications/resources/list_changed"),
    params: v.optional()
}), Ne = Ie, Me = _.extend({
    method: n.eu("resources/subscribe"),
    params: Ne
}), Je = Ie, je = _.extend({
    method: n.eu("resources/unsubscribe"),
    params: Je
}), De = v.extend({
    uri: n.Yj()
}), Fe = w.extend({
    method: n.eu("notifications/resources/updated"),
    params: De
}), qe = n.Ik({
    name: n.Yj(),
    description: n.lq(n.Yj()),
    required: n.lq(n.zM())
}), ze = n.Ik({
    ...D.shape,
    ...j.shape,
    description: n.lq(n.Yj()),
    arguments: n.lq(n.YO(qe)),
    _meta: n.lq(n._H({}))
}), Ue = ne.extend({
    method: n.eu("prompts/list")
}), Be = oe.extend({
    prompts: n.YO(ze)
}), Le = m.extend({
    name: n.Yj(),
    arguments: n.g1(n.Yj(), n.Yj()).optional()
}), Ve = _.extend({
    method: n.eu("prompts/get"),
    params: Le
}), Ke = n.Ik({
    type: n.eu("text"),
    text: n.Yj(),
    annotations: Se.optional(),
    _meta: n.g1(n.Yj(), n.L5()).optional()
}), Ze = n.Ik({
    type: n.eu("image"),
    data: ve,
    mimeType: n.Yj(),
    annotations: Se.optional(),
    _meta: n.g1(n.Yj(), n.L5()).optional()
}), We = n.Ik({
    type: n.eu("audio"),
    data: ve,
    mimeType: n.Yj(),
    annotations: Se.optional(),
    _meta: n.g1(n.Yj(), n.L5()).optional()
}), He = n.Ik({
    type: n.eu("tool_use"),
    name: n.Yj(),
    id: n.Yj(),
    input: n.g1(n.Yj(), n.L5()),
    _meta: n.g1(n.Yj(), n.L5()).optional()
}), Ye = n.Ik({
    type: n.eu("resource"),
    resource: n.KC([
        _e,
        we
    ]),
    annotations: Se.optional(),
    _meta: n.g1(n.Yj(), n.L5()).optional()
}), Ge = ke.extend({
    type: n.eu("resource_link")
}), Xe = n.KC([
    Ke,
    Ze,
    We,
    Ge,
    Ye
]), Qe = n.Ik({
    role: be,
    content: Xe
}), et = b.extend({
    description: n.Yj().optional(),
    messages: n.YO(Qe)
}), tt = w.extend({
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
}), ot = n.Ik({
    ...D.shape,
    ...j.shape,
    description: n.Yj().optional(),
    inputSchema: n.Ik({
        type: n.eu("object"),
        properties: n.g1(n.Yj(), u).optional(),
        required: n.YO(n.Yj()).optional()
    }).catchall(n.L5()),
    outputSchema: n.Ik({
        type: n.eu("object"),
        properties: n.g1(n.Yj(), u).optional(),
        required: n.YO(n.Yj()).optional()
    }).catchall(n.L5()).optional(),
    annotations: rt.optional(),
    execution: nt.optional(),
    _meta: n.g1(n.Yj(), n.L5()).optional()
}), st = ne.extend({
    method: n.eu("tools/list")
}), it = oe.extend({
    tools: n.YO(ot)
}), at = b.extend({
    content: n.YO(Xe).default([]),
    structuredContent: n.g1(n.Yj(), n.L5()).optional(),
    isError: n.zM().optional()
}), ct = (at.or(b.extend({
    toolResult: n.L5()
})), g.extend({
    name: n.Yj(),
    arguments: n.g1(n.Yj(), n.L5()).optional()
})), ut = _.extend({
    method: n.eu("tools/call"),
    params: ct
}), lt = w.extend({
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
]), ft = m.extend({
    level: pt
}), ht = _.extend({
    method: n.eu("logging/setLevel"),
    params: ft
}), mt = v.extend({
    level: pt,
    logger: n.Yj().optional(),
    data: n.L5()
}), gt = w.extend({
    method: n.eu("notifications/message"),
    params: mt
}), yt = n.Ik({
    name: n.Yj().optional()
}), _t = n.Ik({
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
}), wt = n.Ik({
    type: n.eu("tool_result"),
    toolUseId: n.Yj().describe("The unique identifier for the corresponding tool call."),
    content: n.YO(Xe).default([]),
    structuredContent: n.Ik({}).loose().optional(),
    isError: n.zM().optional(),
    _meta: n.g1(n.Yj(), n.L5()).optional()
}), bt = n.gM("type", [
    Ke,
    Ze,
    We
]), St = n.gM("type", [
    Ke,
    Ze,
    We,
    He,
    wt
]), kt = n.Ik({
    role: be,
    content: n.KC([
        St,
        n.YO(St)
    ]),
    _meta: n.g1(n.Yj(), n.L5()).optional()
}), Et = g.extend({
    messages: n.YO(kt),
    modelPreferences: _t.optional(),
    systemPrompt: n.Yj().optional(),
    includeContext: n.k5([
        "none",
        "thisServer",
        "allServers"
    ]).optional(),
    temperature: n.ai().optional(),
    maxTokens: n.ai().int(),
    stopSequences: n.YO(n.Yj()).optional(),
    metadata: u.optional(),
    tools: n.YO(ot).optional(),
    toolChoice: vt.optional()
}), xt = _.extend({
    method: n.eu("sampling/createMessage"),
    params: Et
}), Tt = b.extend({
    model: n.Yj(),
    stopReason: n.lq(n.k5([
        "endTurn",
        "stopSequence",
        "maxTokens"
    ]).or(n.Yj())),
    role: be,
    content: bt
}), Ot = b.extend({
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
}), Pt = n.Ik({
    type: n.eu("boolean"),
    title: n.Yj().optional(),
    description: n.Yj().optional(),
    default: n.zM().optional()
}), It = n.Ik({
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
}), Ct = n.Ik({
    type: n.k5([
        "number",
        "integer"
    ]),
    title: n.Yj().optional(),
    description: n.Yj().optional(),
    minimum: n.ai().optional(),
    maximum: n.ai().optional(),
    default: n.ai().optional()
}), At = n.Ik({
    type: n.eu("string"),
    title: n.Yj().optional(),
    description: n.Yj().optional(),
    enum: n.YO(n.Yj()),
    default: n.Yj().optional()
}), $t = n.Ik({
    type: n.eu("string"),
    title: n.Yj().optional(),
    description: n.Yj().optional(),
    oneOf: n.YO(n.Ik({
        const: n.Yj(),
        title: n.Yj()
    })),
    default: n.Yj().optional()
}), Rt = n.Ik({
    type: n.eu("string"),
    title: n.Yj().optional(),
    description: n.Yj().optional(),
    enum: n.YO(n.Yj()),
    enumNames: n.YO(n.Yj()).optional(),
    default: n.Yj().optional()
}), Nt = n.KC([
    At,
    $t
]), Mt = n.Ik({
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
}), Jt = n.Ik({
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
}), jt = n.KC([
    Mt,
    Jt
]), Dt = n.KC([
    Rt,
    Nt,
    jt
]), Ft = n.KC([
    Dt,
    Pt,
    It,
    Ct
]), qt = g.extend({
    mode: n.eu("form").optional(),
    message: n.Yj(),
    requestedSchema: n.Ik({
        type: n.eu("object"),
        properties: n.g1(n.Yj(), Ft),
        required: n.YO(n.Yj()).optional()
    })
}), zt = g.extend({
    mode: n.eu("url"),
    message: n.Yj(),
    elicitationId: n.Yj(),
    url: n.Yj().url()
}), Ut = n.KC([
    qt,
    zt
]), Bt = _.extend({
    method: n.eu("elicitation/create"),
    params: Ut
}), Lt = v.extend({
    elicitationId: n.Yj()
}), Vt = w.extend({
    method: n.eu("notifications/elicitation/complete"),
    params: Lt
}), Kt = b.extend({
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
}), Zt = n.Ik({
    type: n.eu("ref/resource"),
    uri: n.Yj()
}), Wt = n.Ik({
    type: n.eu("ref/prompt"),
    name: n.Yj()
}), Ht = m.extend({
    ref: n.KC([
        Wt,
        Zt
    ]),
    argument: n.Ik({
        name: n.Yj(),
        value: n.Yj()
    }),
    context: n.Ik({
        arguments: n.g1(n.Yj(), n.Yj()).optional()
    }).optional()
}), Yt = _.extend({
    method: n.eu("completion/complete"),
    params: Ht
});
const Gt = b.extend({
    completion: n._H({
        values: n.YO(n.Yj()).max(100),
        total: n.lq(n.ai().int()),
        hasMore: n.lq(n.zM())
    })
}), Xt = n.Ik({
    uri: n.Yj().startsWith("file://"),
    name: n.Yj().optional(),
    _meta: n.g1(n.Yj(), n.L5()).optional()
}), Qt = _.extend({
    method: n.eu("roots/list"),
    params: m.optional()
}), er = b.extend({
    roots: n.YO(Xt)
}), tr = w.extend({
    method: n.eu("notifications/roots/list_changed"),
    params: v.optional()
});
n.KC([
    X,
    K,
    Yt,
    ht,
    Ve,
    Ue,
    xe,
    Oe,
    Ae,
    Me,
    je,
    ut,
    st,
    le,
    pe,
    fe,
    me
]), n.KC([
    M,
    te,
    Y,
    tr,
    ue
]), n.KC([
    R,
    Tt,
    Ot,
    Kt,
    er,
    de,
    he,
    ae
]), n.KC([
    X,
    xt,
    Bt,
    Qt,
    le,
    pe,
    fe,
    me
]), n.KC([
    M,
    te,
    gt,
    Fe,
    Re,
    lt,
    tt,
    ue,
    Vt
]), n.KC([
    R,
    H,
    Gt,
    et,
    Be,
    Te,
    Pe,
    $e,
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
        if (e === I.UrlElicitationRequired && r) {
            const e = r;
            if (e.elicitations) return new nr(e.elicitations, t);
        }
        return new rr(e, t, r);
    }
}
class nr extends rr {
    constructor(e, t = `URL elicitation${e.length > 1 ? "s" : ""} required`){
        super(I.UrlElicitationRequired, t, {
            elicitations: e
        });
    }
    get elicitations() {
        return this.data?.elicitations ?? [];
    }
}

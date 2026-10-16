"use strict";
require.r(exports), require.d(exports, {
    NODE_APP_ID_CONFIG_OPTIONS: ()=>v,
    UA_APP_ID_ENV_NAME: ()=>b,
    UA_APP_ID_INI_NAME: ()=>E,
    createDefaultUserAgentProvider: ()=>y,
    crtAvailability: ()=>m,
    defaultUserAgent: ()=>w
});
var n = require(48161), s = require(1708);
var i = require("./module-86349.js"), o = require("./module-98025.js"), a = require(51455), c = require(76760);
const l = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+[0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*)?$/, u = (e = "")=>{
    const t = e.match(l);
    if (!t) return;
    const [r, n, s, i] = [
        t[1],
        t[2],
        t[3],
        t[4]
    ];
    return i ? `${r}.${n}.${s}-${i}` : `${r}.${n}.${s}`;
}, d = [
    "^",
    "~",
    ">=",
    "<=",
    ">",
    "<"
], h = [
    "latest",
    "beta",
    "dev",
    "rc",
    "insiders",
    "next"
];
let f;
const p = (0, c.join)("node_modules", "typescript", "package.json"), g = async ()=>{
    if (null === f) return;
    if ("string" == typeof f) return [
        "md/tsc",
        f
    ];
    let e = !1;
    try {
        e = (0, i.Q)(process.env, "AWS_SDK_JS_TYPESCRIPT_DETECTION_DISABLED", o.c.ENV) || !1;
    } catch  {}
    if (e) return void (f = null);
    const t = ((e)=>{
        const t = process.cwd();
        if (!e) return [
            t
        ];
        const r = (0, c.normalize)(e), n = r.split(c.sep), s = n.indexOf("node_modules"), i = -1 !== s ? n.slice(0, s).join(c.sep) : r;
        return t === i ? [
            t
        ] : [
            i,
            t
        ];
    })("undefined" != typeof __dirname ? __dirname : void 0);
    let r, n;
    for (const e of t)try {
        const t = (0, c.join)(e, "package.json"), n = await (0, a.readFile)(t, "utf-8"), { dependencies: s, devDependencies: i } = JSON.parse(n), o = i?.typescript ?? s?.typescript;
        if ("string" != typeof o) continue;
        r = o;
        break;
    } catch  {}
    if (!r) return void (f = null);
    for (const e of t)try {
        const t = (0, c.join)(e, p), r = await (0, a.readFile)(t, "utf-8"), { version: s } = JSON.parse(r), i = u(s);
        if ("string" != typeof i) continue;
        n = i;
        break;
    } catch  {}
    if (n) return f = n, [
        "md/tsc",
        f
    ];
    const s = ((e = "")=>{
        if (h.includes(e)) return e;
        const t = d.find((t)=>e.startsWith(t)) ?? "", r = u(e.slice(t.length));
        return r ? `${t}${r}` : void 0;
    })(r);
    if ("string" == typeof s) return f = `dev_${s}`, [
        "md/tsc",
        f
    ];
    f = null;
}, m = {
    isCrtAvailable: !1
}, y = ({ serviceId: e, clientVersion: t })=>{
    const r = (()=>{
        const e = [
            "deno",
            "bun",
            "llrt"
        ];
        for (const t of e)if (s.versions[t]) return [
            `md/${t}`,
            s.versions[t]
        ];
        return [
            "md/nodejs",
            s.versions.node
        ];
    })();
    return async (i)=>{
        const o = [
            [
                "aws-sdk-js",
                t
            ],
            [
                "ua",
                "2.1"
            ],
            [
                `os/${(0, n.platform)()}`,
                (0, n.release)()
            ],
            [
                "lang/js"
            ],
            r
        ], a = await g();
        a && o.push(a);
        const c = m.isCrtAvailable ? [
            "md/crt-avail"
        ] : null;
        c && o.push(c), e && o.push([
            `api/${e}`,
            t
        ]), s.env.AWS_EXECUTION_ENV && o.push([
            `exec-env/${s.env.AWS_EXECUTION_ENV}`
        ]);
        const l = await i?.userAgentAppId?.();
        return l ? [
            ...o,
            [
                `app/${l}`
            ]
        ] : [
            ...o
        ];
    };
}, w = y;
var S = require("./module-71747.js");
const b = "AWS_SDK_UA_APP_ID", E = "sdk_ua_app_id", v = {
    environmentVariableSelector: (e)=>e[b],
    configFileSelector: (e)=>e[E] ?? e["sdk-ua-app-id"],
    default: S.b
};

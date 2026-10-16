"use strict";
require.d(exports, {
    WCg: ()=>Mi,
    DDg: ()=>zu,
    KYw: ()=>Bi,
    QOY: ()=>Ld,
    YUn: ()=>$d,
    kdU: ()=>gd,
    NwZ: ()=>mc,
    kxb: ()=>rd,
    e1t: ()=>pd,
    JJ1: ()=>zd,
    ICo: ()=>Yu,
    xJd: ()=>h,
    s4m: ()=>d,
    R3Q: ()=>m,
    iUy: ()=>f,
    dBY: ()=>p,
    QY1: ()=>Ad,
    r6M: ()=>we.r,
    z4A: ()=>xa,
    wpN: ()=>Ku,
    FY4: ()=>Hu,
    Y__: ()=>Lu,
    NzK: ()=>s,
    UDB: ()=>ee,
    Jwk: ()=>yd,
    U27: ()=>dd,
    nSO: ()=>Ru,
    kXx: ()=>Kd,
    Lsv: ()=>Wd,
    _fm: ()=>Wu,
    gFi: ()=>Qa,
    V3H: ()=>Vd,
    ALO: ()=>Xd,
    Iqv: ()=>Be,
    DuR: ()=>Sd,
    Vwy: ()=>vd,
    AkQ: ()=>wd
});
var n = require("./module-81958.js");
const s = {
    log: ()=>{},
    increment: ()=>{},
    distribution: ()=>{},
    captureException: ()=>{}
}, o = n.Ik({
    command: n.Yj().optional(),
    args: n.YO(n.Yj()).optional(),
    env: n.g1(n.Yj(), n.Yj()).optional(),
    url: n.Yj().optional(),
    headers: n.g1(n.Yj(), n.Yj()).optional(),
    cwd: n.Yj().optional(),
    envFile: n.Yj().optional(),
    auth: n.Ik({
        CLIENT_ID: n.Yj(),
        CLIENT_SECRET: n.Yj().optional(),
        scopes: n.YO(n.Yj()).optional()
    }).optional(),
    enabledTools: n.YO(n.Yj()).optional(),
    placement: n.k5([
        "server",
        "client"
    ]).optional(),
    tls: n.Ik({
        caBundle: n.Yj().trim().min(1).max(131072)
    }).optional()
}), i = n.Ik({
    mcpServers: n.g1(n.Yj(), o).optional()
}), a = n.k5([
    "canvas"
]), c = n.YO(a).transform((e)=>[
        ...new Set(e)
    ].sort());
class l extends Error {
    constructor(e, t){
        super(`Invalid Claude Code plugin identifier "${t}": ${e}`), this.raw = t, this.name = "CCPluginIdentifierError";
    }
}
function u(e) {
    const t = e.trim();
    if (!t) throw new l("Empty identifier", e);
    const r = /^[a-zA-Z0-9_-]+$/, n = t.indexOf("@");
    if (n !== t.lastIndexOf("@")) throw new l("Plugin identifier cannot contain multiple @ symbols", e);
    if (-1 === n) {
        if (!r.test(t)) throw new l("Plugin name must contain only alphanumeric characters, dashes, and underscores", e);
        if (t.length > 100) throw new l("Plugin name must be 100 characters or less", e);
        return {
            name: t,
            sourceType: "marketplace",
            marketplace: "claude-plugins-official",
            raw: e
        };
    }
    const s = t.slice(0, n).trim(), o = t.slice(n + 1).trim();
    if (!s) throw new l("Missing plugin name before @", e);
    if (!o) throw new l("Missing source after @", e);
    if (!r.test(s)) throw new l("Plugin name must contain only alphanumeric characters, dashes, and underscores", e);
    if (s.length > 100) throw new l("Plugin name must be 100 characters or less", e);
    if (o.startsWith("github:")) {
        const t = o.slice(7).trim();
        if (!t || !/^[a-zA-Z0-9_.-]+\/[a-zA-Z0-9_.-]+$/.test(t)) throw new l("Invalid GitHub repo format, expected 'org/repo' (e.g., 'anthropics/claude-plugins')", e);
        return {
            name: s,
            sourceType: "github",
            githubRepo: t,
            raw: e
        };
    }
    if (o.startsWith("local:")) {
        const t = o.slice(6).trim();
        if (!t) throw new l("Missing path after 'local:'", e);
        return {
            name: s,
            sourceType: "local",
            localPath: t,
            raw: e
        };
    }
    if (o.startsWith("url:")) {
        const t = o.slice(4).trim();
        if (!t) throw new l("Missing Git URL after 'url:'", e);
        try {
            new URL(t);
        } catch  {
            throw new l("Invalid Git URL format", e);
        }
        return {
            name: s,
            sourceType: "url",
            gitUrl: t,
            raw: e
        };
    }
    const i = o.indexOf("#");
    let a, c;
    if (-1 !== i ? (a = o.slice(0, i).trim(), c = o.slice(i + 1).trim()) : a = o, !a) throw new l("Missing marketplace name", e);
    if (!r.test(a)) throw new l("Marketplace name must contain only alphanumeric characters, dashes, and underscores", e);
    return {
        name: s,
        sourceType: "marketplace",
        marketplace: a,
        version: c,
        raw: e
    };
}
function d(e) {
    if ("claude-plugin" === e.source) return e.sourceInfo.raw;
    if ("user-local" === e.source) {
        return `user-local:${e.sourceInfo.name}`;
    }
    if ("extension" === e.source) {
        const t = e.sourceInfo;
        return `extension:${t.extensionId}:${t.localPath}`;
    }
    const t = e.sourceInfo;
    return `${t.name}-${t.version}`;
}
function p(e) {
    return e.sourceInfo.name;
}
function m(e) {
    switch(e.source){
        case "claude-plugin":
        case "cursor-first-party":
        case "cursor-third-party":
            return e.sourceInfo.marketplace;
        case "user-local":
        case "extension":
            return;
        default:
            return;
    }
}
function h(e) {
    switch(e.source){
        case "cursor-first-party":
        case "cursor-third-party":
            return e.sourceInfo.pluginDbId;
        case "claude-plugin":
        case "user-local":
        case "extension":
            return;
        default:
            return;
    }
}
function f(e) {
    switch(e.source){
        case "cursor-first-party":
        case "cursor-third-party":
            return e.sourceInfo.marketplaceDbId;
        case "claude-plugin":
        case "user-local":
        case "extension":
            return;
        default:
            return;
    }
}
const g = new Set([
    "CREDENTIAL",
    "CREDENTIALS",
    "KEY",
    "PASSPHRASE",
    "PASSWORD",
    "SECRET",
    "TOKEN"
]);
function y(e) {
    return (function(e) {
        return e.replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/[^a-z\d]+/gi, "_").toUpperCase().split("_").filter((e)=>e.length > 0);
    })(e).some((e)=>g.has(e));
}
const w = /\$\{(?:env:([A-Z][A-Z0-9_]*)|([A-Z][A-Z0-9_]*)(?::-([^}]*))?)\}/g, v = new Set([
    "CURSOR_PLUGIN_ROOT",
    "CLAUDE_PLUGIN_ROOT"
]), _ = new Set([
    "api",
    "aws",
    "db",
    "dd",
    "gcp",
    "http",
    "https",
    "id",
    "mcp",
    "ssl",
    "tls",
    "uri",
    "url"
]);
function b(e) {
    return e.split("_").filter((e)=>e.length > 0).map((e)=>{
        const t = e.toLowerCase();
        return _.has(t) ? e.toUpperCase() : e.charAt(0).toUpperCase() + t.slice(1);
    }).join(" ");
}
function S(e, t) {
    if ("string" != typeof e) {
        if (Array.isArray(e)) for (const r of e)S(r, t);
        else if (null !== e && "object" == typeof e) for (const r of Object.values(e))S(r, t);
    } else for (const [, r, n, s] of e.matchAll(w)){
        const e = r ?? n;
        if (void 0 === e || v.has(e) || t.has(e)) continue;
        const o = void 0 === r ? `\${${e}}` : `\${env:${e}}`;
        t.set(e, {
            reference: o,
            defaultValue: s
        });
    }
}
function k(e) {
    if (void 0 === e?.mcpServers) return;
    const t = new Map;
    if (S(e.mcpServers, t), 0 === t.size) return;
    const r = {};
    for (const e of [
        ...t.keys()
    ].sort()){
        const { reference: n, defaultValue: s } = t.get(e);
        r[e] = {
            type: "string",
            title: b(e),
            description: void 0 === s || 0 === s.length ? `Referenced as \`${n}\` in this plugin's MCP configuration.` : `Referenced as \`${n}\` in this plugin's MCP configuration. Defaults to \`${s}\` when left blank.`,
            ...y(e) ? {
                writeOnly: !0
            } : {}
        };
    }
    return {
        type: "object",
        properties: r
    };
}
var x = require("./module-97712.js"), E = require("./module-77598.js"), I = require("./module-76760.js"), T = require("./module-82590.js");
const C = new Set([
    "https://agent-plugins.org/schemas/1.0.0/plugin.schema.json",
    "https://agent-plugins.org/schemas/1.0.0/mcp.schema.json"
]), P = /^v?(\d+\.\d+(?:\.\d+)?)$/;
function A(e) {
    if ("object" != typeof e || null === e || Array.isArray(e)) return;
    const t = e.$schema;
    return "string" == typeof t && t.length > 0 ? t : void 0;
}
function R(e) {
    let t;
    try {
        t = new URL(e).pathname.split("/");
    } catch  {
        t = e.split("/");
    }
    for (const e of t){
        const t = P.exec(e);
        if (null !== t) return t[1];
    }
}
function M(e) {
    return void 0 === e ? {
        kind: "absent"
    } : C.has(e) ? {
        kind: "supported",
        id: e,
        version: R(e) ?? e
    } : {
        kind: "unsupported",
        id: e
    };
}
const J = 10485760, O = /^[a-z0-9]([a-z0-9.-]*[a-z0-9])?$/, B = [
    ".cursor-plugin/plugin.json",
    ".claude-plugin/plugin.json",
    "plugin.json"
], D = [
    ".cursor-plugin",
    ".claude-plugin"
], q = [
    ".cursor-plugin/marketplace.json",
    ".claude-plugin/marketplace.json"
], N = n.Ik({
    source: n.eu("github"),
    repo: n.Yj().regex(/^[^/]+\/[^/]+$/, "Must be in owner/repo format"),
    ref: n.Yj().optional(),
    sha: n.Yj().length(40, "SHA must be 40 characters").regex(/^[a-f0-9]+$/, "SHA must be hexadecimal").optional()
}), F = n.Ik({
    source: n.eu("url"),
    url: n.Yj().url().endsWith(".git", "URL must end with .git"),
    ref: n.Yj().optional(),
    sha: n.Yj().length(40, "SHA must be 40 characters").regex(/^[a-f0-9]+$/, "SHA must be hexadecimal").optional()
}), U = n.Ik({
    source: n.eu("git-subdir"),
    url: n.Yj().url().endsWith(".git", "URL must end with .git"),
    path: n.Yj().min(1),
    ref: n.Yj().optional(),
    sha: n.Yj().length(40, "SHA must be 40 characters").regex(/^[a-f0-9]+$/, "SHA must be hexadecimal").optional()
}), L = n.KC([
    n.Yj(),
    N,
    F,
    U
]), $ = /^(\d+\.\d+\.\d+(-[0-9A-Za-z.-]+)?|never)$/, j = 'Must be a semver version (X.Y.Z) or "never"', G = n.Ik({
    cursor: n.Yj().regex($, j).optional(),
    sand: n.Yj().regex($, j).optional()
});
const z = n.Ik({
    name: n.Yj().min(1, "Author name is required"),
    email: n.Yj().email().optional()
}), W = n.k5([
    "string",
    "number",
    "integer",
    "boolean",
    "object",
    "array",
    "null"
]), H = n.KC([
    W,
    n.YO(W).nonempty().superRefine((e, t)=>{
        new Set(e).size !== e.length && t.addIssue({
            code: T.eq.custom,
            message: "Schema type arrays must not contain duplicates"
        });
    })
]);
function K(e, t) {
    if (void 0 !== e.required) if (void 0 === e.properties) for (const r of e.required)t.addIssue({
        code: T.eq.custom,
        message: `Required property "${r}" must be declared in properties`,
        path: [
            "required"
        ]
    });
    else for (const r of e.required)r in e.properties || t.addIssue({
        code: T.eq.custom,
        message: `Required property "${r}" must be declared in properties`,
        path: [
            "required"
        ]
    });
    void 0 !== e.minLength && void 0 !== e.maxLength && e.minLength > e.maxLength && t.addIssue({
        code: T.eq.custom,
        message: "minLength must be less than or equal to maxLength",
        path: [
            "minLength"
        ]
    }), void 0 !== e.minimum && void 0 !== e.maximum && e.minimum > e.maximum && t.addIssue({
        code: T.eq.custom,
        message: "minimum must be less than or equal to maximum",
        path: [
            "minimum"
        ]
    }), void 0 !== e.exclusiveMinimum && void 0 !== e.exclusiveMaximum && e.exclusiveMinimum >= e.exclusiveMaximum && t.addIssue({
        code: T.eq.custom,
        message: "exclusiveMinimum must be less than exclusiveMaximum",
        path: [
            "exclusiveMinimum"
        ]
    }), void 0 !== e.minItems && void 0 !== e.maxItems && e.minItems > e.maxItems && t.addIssue({
        code: T.eq.custom,
        message: "minItems must be less than or equal to maxItems",
        path: [
            "minItems"
        ]
    }), void 0 !== e.minProperties && void 0 !== e.maxProperties && e.minProperties > e.maxProperties && t.addIssue({
        code: T.eq.custom,
        message: "minProperties must be less than or equal to maxProperties",
        path: [
            "minProperties"
        ]
    });
}
const V = n.RZ(()=>n.Ik({
        type: H.optional(),
        title: n.Yj().optional(),
        description: n.Yj().optional(),
        format: n.Yj().optional(),
        writeOnly: n.zM().optional(),
        default: n.L5().optional(),
        enum: n.YO(n.bz()).nonempty().optional(),
        const: n.L5().optional(),
        properties: n.g1(n.Yj(), V).optional(),
        required: n.YO(n.Yj()).optional(),
        additionalProperties: n.KC([
            n.zM(),
            V
        ]).optional(),
        items: n.KC([
            V,
            n.YO(V)
        ]).optional(),
        minLength: n.ai().int().nonnegative().optional(),
        maxLength: n.ai().int().nonnegative().optional(),
        minimum: n.ai().optional(),
        maximum: n.ai().optional(),
        exclusiveMinimum: n.ai().optional(),
        exclusiveMaximum: n.ai().optional(),
        multipleOf: n.ai().positive().optional(),
        minItems: n.ai().int().nonnegative().optional(),
        maxItems: n.ai().int().nonnegative().optional(),
        uniqueItems: n.zM().optional(),
        minProperties: n.ai().int().nonnegative().optional(),
        maxProperties: n.ai().int().nonnegative().optional()
    }).strict().superRefine(K));
function Y(e) {
    const t = V.superRefine((e, t)=>{
        "object" !== e.type && t.addIssue({
            code: T.eq.custom,
            message: 'Plugin variable schemas must declare type "object"',
            path: [
                "type"
            ]
        });
    }).safeParse(e);
    return t.success ? {
        success: !0,
        data: t.data
    } : t;
}
const Q = n.L5().superRefine((e, t)=>{
    const r = Y(e);
    if (!r.success) for (const e of r.error.issues)t.addIssue(e);
}).transform((e)=>e), X = (n.Ik({
    name: n.Yj().min(1).transform((e)=>e.toLowerCase()).refine((e)=>O.test(e), "Name must be kebab-case (lowercase alphanumeric with hyphens and periods)"),
    displayName: n.Yj().optional(),
    source: L,
    description: n.Yj().optional(),
    version: n.Yj().optional(),
    author: z.optional(),
    publisher: n.Yj().min(1).optional(),
    homepage: n.Yj().url().optional(),
    repository: n.Yj().url().optional(),
    license: n.Yj().optional(),
    keywords: n.YO(n.Yj()).optional(),
    capabilities: c.optional(),
    logo: n.Yj().optional(),
    category: n.Yj().optional(),
    tags: n.YO(n.Yj()).optional(),
    minClientVersions: G.optional(),
    strict: n.zM().default(!0),
    commands: n.KC([
        n.Yj(),
        n.YO(n.Yj())
    ]).optional(),
    agents: n.KC([
        n.Yj(),
        n.YO(n.Yj())
    ]).optional(),
    skills: n.KC([
        n.Yj(),
        n.YO(n.Yj())
    ]).optional(),
    rules: n.KC([
        n.Yj(),
        n.YO(n.Yj())
    ]).optional(),
    hooks: n.KC([
        n.Yj(),
        n.g1(n.L5())
    ]).optional(),
    variables: Q.optional(),
    mcpServers: n.KC([
        n.Yj(),
        n.g1(n.L5()),
        n.YO(n.KC([
            n.Yj(),
            n.g1(n.L5())
        ]))
    ]).optional()
}), n.Ik({
    description: n.Yj().optional(),
    version: n.Yj().optional(),
    pluginRoot: n.Yj().optional()
}), n.Ik({
    name: n.Yj().min(1).regex(O, "Name must be kebab-case (lowercase alphanumeric with hyphens and periods)"),
    displayName: n.Yj().optional(),
    description: n.Yj().optional(),
    version: n.Yj().optional(),
    author: z.optional(),
    publisher: n.Yj().min(1).optional(),
    homepage: n.Yj().url().optional(),
    repository: n.Yj().url().optional(),
    license: n.Yj().optional(),
    logo: n.Yj().optional(),
    keywords: n.YO(n.Yj()).optional(),
    capabilities: c.optional(),
    minClientVersions: G.optional(),
    commands: n.KC([
        n.Yj(),
        n.YO(n.Yj())
    ]).optional(),
    agents: n.KC([
        n.Yj(),
        n.YO(n.Yj())
    ]).optional(),
    skills: n.KC([
        n.Yj(),
        n.YO(n.Yj())
    ]).optional(),
    rules: n.KC([
        n.Yj(),
        n.YO(n.Yj())
    ]).optional(),
    hooks: n.KC([
        n.Yj(),
        n.g1(n.L5())
    ]).optional(),
    variables: Q.optional(),
    mcpServers: n.KC([
        n.Yj(),
        n.g1(n.L5()),
        n.YO(n.KC([
            n.Yj(),
            n.g1(n.L5())
        ]))
    ]).optional()
}));
function Z(e) {
    return "object" == typeof e && null !== e && !Array.isArray(e);
}
function ee(e) {
    return e.trim().toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]+/g, "-").replace(/-+/g, "-").replace(/^-+|-+$/g, "");
}
function te(e, t) {
    if (Z(e) && "string" == typeof e.name) {
        const t = ee(e.name);
        if (t.length > 0) return t;
    }
    return function(e) {
        const t = void 0 !== e.repoName ? ee(e.repoName) : "";
        return t.length > 0 ? t : `cursor-marketplace-${e.fallbackId ?? (0, E.randomUUID)()}`;
    }(t);
}
function re(e) {
    if (Z(e) && Z(e.owner)) {
        const t = "string" == typeof e.owner.name && e.owner.name.trim().length > 0 ? e.owner.name : "Unknown", r = "string" == typeof e.owner.email && e.owner.email.trim().length > 0 ? e.owner.email : void 0;
        return {
            name: t,
            ...void 0 !== r ? {
                email: r
            } : {}
        };
    }
    return {
        name: "Unknown"
    };
}
function ne(e) {
    return "string" == typeof e ? e : void 0;
}
function se(e) {
    if (!Array.isArray(e)) return;
    const t = e.filter((e)=>"string" == typeof e);
    return t.length > 0 ? t : void 0;
}
function oe(e) {
    return "string" == typeof e ? e : se(e);
}
function ie(e) {
    if (!Z(e) || !Z(e.metadata)) return;
    const t = {
        description: ne(e.metadata.description),
        version: ne(e.metadata.version),
        pluginRoot: ne(e.metadata.pluginRoot)
    };
    return void 0 !== t.description || void 0 !== t.version || void 0 !== t.pluginRoot ? t : void 0;
}
function ae(e) {
    if (!Z(e)) return;
    const t = ne(e.name);
    if (void 0 === t || 0 === t.length) return;
    const r = ne(e.email);
    return {
        name: t,
        ...void 0 !== r ? {
            email: r
        } : {}
    };
}
function ce(e) {
    if ("string" == typeof e || Z(e)) return e;
    if (Array.isArray(e)) {
        const t = e.filter((e)=>"string" == typeof e || Z(e));
        return t.length > 0 ? t : void 0;
    }
}
function le(e) {
    if ("string" == typeof e || Z(e)) return e;
}
function ue(e) {
    if (void 0 === e) return;
    const t = Y(e);
    return t.success ? t.data : void 0;
}
function de(e, t) {
    if (!Z(e)) return {
        skippedEntry: {
            index: t,
            error: `Plugin entry at index ${t} is not an object`
        }
    };
    const r = "string" == typeof (n = e.source) ? n : Z(n) ? "github" === n.source && "string" == typeof n.repo && n.repo.length > 0 ? {
        source: "github",
        repo: n.repo,
        ref: ne(n.ref),
        sha: ne(n.sha)
    } : ("url" === n.source || void 0 === n.source) && "string" == typeof n.url && n.url.length > 0 ? {
        source: "url",
        url: n.url,
        ref: ne(n.ref),
        sha: ne(n.sha)
    } : "git-subdir" === n.source && "string" == typeof n.url && n.url.length > 0 && "string" == typeof n.path && n.path.length > 0 ? {
        source: "git-subdir",
        url: n.url,
        path: n.path,
        ref: ne(n.ref),
        sha: ne(n.sha)
    } : "string" == typeof n.repo && n.repo.length > 0 ? {
        source: "github",
        repo: n.repo,
        ref: ne(n.ref),
        sha: ne(n.sha)
    } : void 0 : void 0;
    var n;
    if (void 0 === r) {
        const r = ne(e.name);
        return {
            skippedEntry: {
                index: t,
                ...void 0 !== r && r.length > 0 ? {
                    name: r
                } : {},
                error: `Plugin entry at index ${t} has no usable source`
            }
        };
    }
    const s = ("string" == typeof e.name ? ee(e.name) : "") || function(e) {
        if ("string" == typeof e) {
            const t = ee((0, I.basename)(e));
            return t.length > 0 ? t : void 0;
        }
        if ("github" === e.source) {
            const t = ee(e.repo.split("/").at(-1) ?? "");
            return t.length > 0 ? t : void 0;
        }
        if ("git-subdir" === e.source) {
            const t = ee((0, I.basename)(e.path));
            return t.length > 0 ? t : void 0;
        }
        let t = e.url;
        try {
            t = new URL(e.url).pathname;
        } catch  {}
        for(; t.endsWith("/");)t = t.slice(0, -1);
        t.toLowerCase().endsWith(".git") && (t = t.slice(0, -4));
        const r = ee((0, I.basename)(t));
        return r.length > 0 ? r : void 0;
    }(r);
    if (void 0 === s) return {
        skippedEntry: {
            index: t,
            error: `Plugin entry at index ${t} has no usable name`
        }
    };
    const o = c.safeParse(e.capabilities);
    if (void 0 !== e.capabilities && !o.success) return {
        skippedEntry: {
            index: t,
            name: s,
            error: `Plugin entry at index ${t} has invalid capabilities: ${o.error.issues.map((e)=>`${e.path.join(".")}: ${e.message}`).join(", ")}`
        }
    };
    const i = o.success ? o.data : void 0, a = function(e) {
        const t = G.safeParse(e);
        if (t.success && (void 0 !== t.data.cursor || void 0 !== t.data.sand)) return t.data;
    }(e.minClientVersions);
    return {
        entry: {
            name: s,
            displayName: ne(e.displayName),
            source: r,
            description: ne(e.description),
            version: ne(e.version),
            author: ae(e.author),
            publisher: ne(e.publisher),
            homepage: ne(e.homepage),
            repository: ne(e.repository),
            license: ne(e.license),
            keywords: se(e.keywords),
            logo: ne(e.logo),
            category: ne(e.category),
            tags: se(e.tags),
            strict: "boolean" != typeof e.strict || e.strict,
            commands: oe(e.commands),
            agents: oe(e.agents),
            skills: oe(e.skills),
            rules: oe(e.rules),
            hooks: le(e.hooks),
            variables: ue(e.variables),
            mcpServers: ce(e.mcpServers),
            ...void 0 !== i && {
                capabilities: i
            },
            ...void 0 !== a && {
                minClientVersions: a
            }
        }
    };
}
function pe(e, t = {}) {
    if (e.length > J) return {
        success: !1,
        error: `Manifest exceeds maximum size of ${J} bytes`
    };
    let r;
    try {
        r = JSON.parse(e);
    } catch (e) {
        return {
            success: !1,
            error: `Invalid JSON: ${e instanceof Error ? e.message : "Unknown error"}`
        };
    }
    if (!Z(r)) return {
        success: !1,
        error: "Invalid marketplace manifest: expected a JSON object"
    };
    const n = [], s = [], o = new Set;
    return (Array.isArray(r.plugins) ? r.plugins : []).forEach((e, t)=>{
        const r = de(e, t);
        "skippedEntry" in r ? s.push(r.skippedEntry) : o.has(r.entry.name) ? s.push({
            index: t,
            name: r.entry.name,
            error: `Duplicate plugin name "${r.entry.name}" at index ${t}`
        }) : (o.add(r.entry.name), n.push(r.entry));
    }), {
        success: !0,
        data: {
            name: te(r, t),
            owner: re(r),
            description: ne(r.description),
            plugins: n,
            metadata: ie(r),
            skippedPluginEntries: s
        }
    };
}
function me(e) {
    if (e.length > J) return {
        success: !1,
        error: `Manifest exceeds maximum size of ${J} bytes`
    };
    let t;
    try {
        t = JSON.parse(e);
    } catch (e) {
        return {
            success: !1,
            error: `Invalid JSON: ${e instanceof Error ? e.message : "Unknown error"}`
        };
    }
    const r = M(A(t)), n = X.safeParse(t);
    return n.success ? {
        success: !0,
        data: n.data,
        ..."unsupported" === r.kind && {
            unrecognizedSchemaId: r.id
        }
    } : {
        success: !1,
        error: `Invalid plugin manifest: ${n.error.errors.map((e)=>`${e.path.join(".")}: ${e.message}`).join(", ")}`,
        details: n.error
    };
}
function he(e, t) {
    if ("string" != typeof e) return null;
    let r = e;
    if (r.startsWith("./") && (r = r.slice(2)), void 0 !== t) {
        let e = t;
        e.startsWith("./") && (e = e.slice(2)), e.endsWith("/") && (e = e.slice(0, -1)), r = `${e}/${r}`;
    }
    return r || ".";
}
function fe({ logo: e, owner: t, repo: r, ref: n, basePath: s }) {
    if (void 0 === e) return;
    if (e.startsWith("http://") || e.startsWith("https://")) return e;
    let o = e;
    return o.startsWith("./") && (o = o.slice(2)), s && (o = `${s}/${o}`), `https://raw.githubusercontent.com/${t}/${r}/${n}/${o}`;
}
function ge(e) {
    return !e.includes("..") && !(0, I.isAbsolute)(e) && !e.includes("://");
}
function ye(...e) {
    for (const t of e)if (t.displayName) return t.displayName;
    for (const t of e)if (t.name) return t.name;
    return "";
}
new x.Ajv({
    allErrors: !0,
    strict: !1,
    validateSchema: !0
});
var we = require("./module-49137.js"), ve = require("./module-51455.js"), _e = require("./module-40283.js");
const be = /\$\{(?:env:([A-Za-z_][A-Za-z0-9_]*)|([^:}]+)(?::-([^}]*))?)\}/g;
function Se(e, t) {
    return ke(e, "function" == typeof t ? t : function(e) {
        const t = new Map(Object.entries(e).map(([e, t])=>[
                e.toLowerCase(),
                t
            ]));
        return (r)=>e[r] ?? t.get(r.toLowerCase());
    }(t));
}
function ke(e, t) {
    if ("string" == typeof e) return e.replace(be, (e, r, n, s)=>{
        if (void 0 !== r) return t(r) ?? e;
        const o = t(n);
        return void 0 !== o ? o : void 0 !== s ? s : e;
    });
    if (Array.isArray(e)) return e.map((e)=>ke(e, t));
    if (null !== e && "object" == typeof e) {
        const r = {};
        for (const [n, s] of Object.entries(e))r[n] = ke(s, t);
        return r;
    }
    return e;
}
function xe(e, t) {
    return e.replace(/\$\{CLAUDE_PLUGIN_ROOT\}/g, ()=>t).replace(/\$\{CURSOR_PLUGIN_ROOT\}/g, ()=>t);
}
const Ee = [
    ".mcp.json",
    "mcp.json"
], Ie = new Set([
    "author",
    "owner",
    "source",
    "metadata"
].map((e)=>e.toLowerCase()));
function Te(e, t) {
    if (!function(e) {
        return Ie.has(e.toLowerCase());
    }(e)) return !1;
    if ("object" != typeof t || null === t) return !1;
    const r = t;
    switch(e.toLowerCase()){
        case "author":
        case "owner":
            return "string" == typeof r.name;
        case "source":
            return "string" == typeof r.source || "string" == typeof r.repo || "string" == typeof r.path || "string" == typeof r.ref || "string" == typeof r.sha;
        case "metadata":
            return "string" == typeof r.description || "string" == typeof r.version || "string" == typeof r.pluginRoot;
        default:
            return !1;
    }
}
function Ce(e) {
    return "object" == typeof e && null !== e && ("command" in e || "url" in e);
}
function Pe(e) {
    const t = void 0 !== e && e.length > 0 ? e.replace(/\/+$/, "") : void 0;
    return Ee.map((e)=>void 0 !== t ? `${t}/${e}` : e);
}
function Ae(e, t, r) {
    if (!e.mcpServers) return e;
    const n = {};
    for (const [r, s] of Object.entries(e.mcpServers)){
        const e = {
            ...s
        };
        if ("string" == typeof s.command && (e.command = xe(s.command, t)), Array.isArray(s.args) && (e.args = s.args.map((e)=>"string" == typeof e ? xe(e, t) : e)), s.env && "object" == typeof s.env) {
            const r = {};
            for (const [e, n] of Object.entries(s.env))r[e] = "string" == typeof n ? xe(n, t) : n;
            e.env = r;
        }
        "string" == typeof s.cwd && (e.cwd = xe(s.cwd, t)), n[r] = e;
    }
    return function(e, t) {
        const r = t?.cloudAgentEnvLookup, n = t?.configuredVariables;
        return Se(e, void 0 !== r ? r : (e)=>{
            const t = process.env[e];
            if (void 0 !== t) return t;
            const r = n?.[e];
            return null != r ? "string" == typeof r ? r : String(r) : void 0;
        });
    }({
        ...e,
        mcpServers: n
    }, r);
}
function Re(e, t, r) {
    try {
        const n = (0, _e.qg)(e), o = A(n);
        if (void 0 !== o) {
            const e = r?.log ?? s;
            "unsupported" === M(o).kind ? e.log("debug", `mcp.json declares an unrecognized $schema, loading anyway: ${o}`) : function(e, t) {
                if (void 0 === e || void 0 === t) return !1;
                const r = R(e), n = R(t);
                return void 0 !== r && void 0 !== n && r !== n;
            }(r?.pluginSchemaId, o) && e.log("debug", `mcp.json $schema ${o} disagrees with plugin.json $schema ${r?.pluginSchemaId}, loading anyway`);
        }
        const a = i.safeParse(n), c = !0 === r?.skipExpansion;
        if (a.success && a.data.mcpServers && Object.keys(a.data.mcpServers).length > 0) return c ? a.data : Ae(a.data, t, r);
        const l = {};
        for (const [e, t] of Object.entries(n))"mcpServers" !== e && !Te(e, t) && Ce(t) && (l[e] = t);
        if (Object.keys(l).length > 0) {
            const e = i.safeParse({
                mcpServers: l
            });
            if (e.success) return c ? e.data : Ae(e.data, t, r);
        }
        return null;
    } catch  {
        return null;
    }
}
function Me(e, t, r) {
    for (const [n, s] of Object.entries(t))e.mcpServers[n] = s, e.mcpServerSourcePaths[n] = r;
}
async function Je(e, t, r = {}) {
    const n = r.toSourcePath ?? ((e)=>e), s = r.installPathForExpansion ?? "", o = {
        mcpServers: {},
        mcpServerSourcePaths: {}
    }, i = async (e)=>{
        const i = e.replace(/^\.\//, "");
        if (!ge(i)) return;
        const a = await t(i);
        if (null === a) return;
        const c = Re(a, s, r.parserOptions);
        c?.mcpServers && Object.keys(c.mcpServers).length > 0 && Me(o, c.mcpServers, n(i));
    }, a = (e)=>{
        const t = Re(JSON.stringify(e), s, r.parserOptions);
        t?.mcpServers && Object.keys(t.mcpServers).length > 0 && Me(o, t.mcpServers, r.manifestSourcePath ?? "manifest");
    };
    if ("string" == typeof e) await i(e);
    else if (Array.isArray(e)) for (const t of e)"string" == typeof t ? await i(t) : "object" == typeof t && null !== t && a(t);
    else "object" == typeof e && null !== e && a(e);
    return o;
}
async function Oe(e, t, r, n = {}) {
    const s = n.toSourcePath ?? ((e)=>e), o = n.installPathForExpansion ?? "", i = n.fallbackFileNames ?? Ee, a = n.manifestPrecedence ?? "override", c = {}, l = {};
    for (const t of i){
        const r = await e(t);
        if (null === r) continue;
        const i = Re(r, o, n.parserOptions);
        if (i?.mcpServers) for (const [e, r] of Object.entries(i.mcpServers))void 0 === c[e] && (c[e] = r, l[e] = s(t));
    }
    if (void 0 !== t) {
        const i = await Je(t, e, {
            toSourcePath: s,
            manifestSourcePath: r,
            installPathForExpansion: o,
            parserOptions: n.parserOptions
        });
        for (const [e, t] of Object.entries(i.mcpServers))"fill" === a && void 0 !== c[e] || (c[e] = t, l[e] = i.mcpServerSourcePaths[e]);
    }
    return 0 === Object.keys(c).length ? null : {
        mcpServers: c,
        ...Object.keys(l).length > 0 && {
            mcpServerSourcePaths: l
        }
    };
}
function Be(e, t, r, n, s, o) {
    const i = [], a = e.mcpServers;
    if (!a) return i;
    for (const [e, c] of Object.entries(a)){
        const a = c, l = `plugin-${n}-${e}`, u = e;
        a.url ? i.push({
            identifier: l,
            name: u,
            marketplace: t,
            marketplaceId: r,
            pluginName: n,
            pluginId: s,
            pluginSource: o,
            type: "streamableHttp",
            url: a.url,
            headers: a.headers,
            auth: a.auth,
            tls: a.tls,
            enabledTools: a.enabledTools,
            placement: a.placement,
            projectManaged: !1,
            pluginManaged: !0
        }) : a.command && i.push({
            identifier: l,
            name: u,
            marketplace: t,
            marketplaceId: r,
            pluginName: n,
            pluginId: s,
            pluginSource: o,
            type: "stdio",
            command: a.command,
            args: a.args ?? [],
            env: a.env ?? {},
            cwd: a.cwd,
            envFile: a.envFile,
            enabledTools: a.enabledTools,
            projectManaged: !1,
            pluginManaged: !0
        });
    }
    return i;
}
var De = require("./module-57075.js"), qe = require("./module-46466.js"), Ne = require("./module-38522.js"), Fe = require("./module-90066.js"), Ue = require("./module-24434.js"), Le = require("./module-79896.js"), $e = require("./module-78474.js");
const je = require("node:string_decoder");
var Ge = require("./module-73024.js"), ze = require("./module-16928.js"), We = require("./module-42613.js"), He = require("./module-20181.js"), Ke = require("./module-43106.js"), Ve = require.t(Ke, 2);
const Ye = require("node:assert");
var Qe = Object.defineProperty, Xe = "object" == typeof process && process ? process : {
    stdout: null,
    stderr: null
}, Ze = (e)=>!!e && "object" == typeof e && (e instanceof qt || e instanceof De || et(e) || tt(e)), et = (e)=>!!e && "object" == typeof e && e instanceof $e.EventEmitter && "function" == typeof e.pipe && e.pipe !== De.Writable.prototype.pipe, tt = (e)=>!!e && "object" == typeof e && e instanceof $e.EventEmitter && "function" == typeof e.write && "function" == typeof e.end, rt = Symbol("EOF"), nt = Symbol("maybeEmitEnd"), st = Symbol("emittedEnd"), ot = Symbol("emittingEnd"), it = Symbol("emittedError"), at = Symbol("closed"), ct = Symbol("read"), lt = Symbol("flush"), ut = Symbol("flushChunk"), dt = Symbol("encoding"), pt = Symbol("decoder"), mt = Symbol("flowing"), ht = Symbol("paused"), ft = Symbol("resume"), gt = Symbol("buffer"), yt = Symbol("pipes"), wt = Symbol("bufferLength"), vt = Symbol("bufferPush"), _t = Symbol("bufferShift"), bt = Symbol("objectMode"), St = Symbol("destroyed"), kt = Symbol("error"), xt = Symbol("emitData"), Et = Symbol("emitEnd"), It = Symbol("emitEnd2"), Tt = Symbol("async"), Ct = Symbol("abort"), Pt = Symbol("aborted"), At = Symbol("signal"), Rt = Symbol("dataListeners"), Mt = Symbol("discarded"), Jt = (e)=>Promise.resolve().then(e), Ot = (e)=>e(), Bt = class {
    src;
    dest;
    opts;
    ondrain;
    constructor(e, t, r){
        this.src = e, this.dest = t, this.opts = r, this.ondrain = ()=>e[ft](), this.dest.on("drain", this.ondrain);
    }
    unpipe() {
        this.dest.removeListener("drain", this.ondrain);
    }
    proxyErrors(e) {}
    end() {
        this.unpipe(), this.opts.end && this.dest.end();
    }
}, Dt = class extends Bt {
    unpipe() {
        this.src.removeListener("error", this.proxyErrors), super.unpipe();
    }
    constructor(e, t, r){
        super(e, t, r), this.proxyErrors = (e)=>this.dest.emit("error", e), e.on("error", this.proxyErrors);
    }
}, qt = class extends $e.EventEmitter {
    [mt] = !1;
    [ht] = !1;
    [yt] = [];
    [gt] = [];
    [bt];
    [dt];
    [Tt];
    [pt];
    [rt] = !1;
    [st] = !1;
    [ot] = !1;
    [at] = !1;
    [it] = null;
    [wt] = 0;
    [St] = !1;
    [At];
    [Pt] = !1;
    [Rt] = 0;
    [Mt] = !1;
    writable = !0;
    readable = !0;
    constructor(...e){
        let t = e[0] || {};
        if (super(), t.objectMode && "string" == typeof t.encoding) throw new TypeError("Encoding and objectMode may not be used together");
        t.objectMode ? (this[bt] = !0, this[dt] = null) : ((e)=>!e.objectMode && !!e.encoding && "buffer" !== e.encoding)(t) ? (this[dt] = t.encoding, this[bt] = !1) : (this[bt] = !1, this[dt] = null), this[Tt] = !!t.async, this[pt] = this[dt] ? new je.StringDecoder(this[dt]) : null, t && !0 === t.debugExposeBuffer && Object.defineProperty(this, "buffer", {
            get: ()=>this[gt]
        }), t && !0 === t.debugExposePipes && Object.defineProperty(this, "pipes", {
            get: ()=>this[yt]
        });
        let { signal: r } = t;
        r && (this[At] = r, r.aborted ? this[Ct]() : r.addEventListener("abort", ()=>this[Ct]()));
    }
    get bufferLength() {
        return this[wt];
    }
    get encoding() {
        return this[dt];
    }
    set encoding(e) {
        throw new Error("Encoding must be set at instantiation time");
    }
    setEncoding(e) {
        throw new Error("Encoding must be set at instantiation time");
    }
    get objectMode() {
        return this[bt];
    }
    set objectMode(e) {
        throw new Error("objectMode must be set at instantiation time");
    }
    get async() {
        return this[Tt];
    }
    set async(e) {
        this[Tt] = this[Tt] || !!e;
    }
    [Ct]() {
        this[Pt] = !0, this.emit("abort", this[At]?.reason), this.destroy(this[At]?.reason);
    }
    get aborted() {
        return this[Pt];
    }
    set aborted(e) {}
    write(e, t, r) {
        if (this[Pt]) return !1;
        if (this[rt]) throw new Error("write after end");
        if (this[St]) return this.emit("error", Object.assign(new Error("Cannot call write after a stream was destroyed"), {
            code: "ERR_STREAM_DESTROYED"
        })), !0;
        "function" == typeof t && (r = t, t = "utf8"), t || (t = "utf8");
        let n = this[Tt] ? Jt : Ot;
        if (!this[bt] && !Buffer.isBuffer(e)) {
            if (s = e, !Buffer.isBuffer(s) && ArrayBuffer.isView(s)) e = Buffer.from(e.buffer, e.byteOffset, e.byteLength);
            else if (((e)=>e instanceof ArrayBuffer || !!e && "object" == typeof e && e.constructor && "ArrayBuffer" === e.constructor.name && e.byteLength >= 0)(e)) e = Buffer.from(e);
            else if ("string" != typeof e) throw new Error("Non-contiguous data written to non-objectMode stream");
        }
        var s;
        return this[bt] ? (this[mt] && 0 !== this[wt] && this[lt](!0), this[mt] ? this.emit("data", e) : this[vt](e), 0 !== this[wt] && this.emit("readable"), r && n(r), this[mt]) : e.length ? ("string" == typeof e && !(t === this[dt] && !this[pt]?.lastNeed) && (e = Buffer.from(e, t)), Buffer.isBuffer(e) && this[dt] && (e = this[pt].write(e)), this[mt] && 0 !== this[wt] && this[lt](!0), this[mt] ? this.emit("data", e) : this[vt](e), 0 !== this[wt] && this.emit("readable"), r && n(r), this[mt]) : (0 !== this[wt] && this.emit("readable"), r && n(r), this[mt]);
    }
    read(e) {
        if (this[St]) return null;
        if (this[Mt] = !1, 0 === this[wt] || 0 === e || e && e > this[wt]) return this[nt](), null;
        this[bt] && (e = null), this[gt].length > 1 && !this[bt] && (this[gt] = [
            this[dt] ? this[gt].join("") : Buffer.concat(this[gt], this[wt])
        ]);
        let t = this[ct](e || null, this[gt][0]);
        return this[nt](), t;
    }
    [ct](e, t) {
        if (this[bt]) this[_t]();
        else {
            let r = t;
            e === r.length || null === e ? this[_t]() : "string" == typeof r ? (this[gt][0] = r.slice(e), t = r.slice(0, e), this[wt] -= e) : (this[gt][0] = r.subarray(e), t = r.subarray(0, e), this[wt] -= e);
        }
        return this.emit("data", t), !this[gt].length && !this[rt] && this.emit("drain"), t;
    }
    end(e, t, r) {
        return "function" == typeof e && (r = e, e = void 0), "function" == typeof t && (r = t, t = "utf8"), void 0 !== e && this.write(e, t), r && this.once("end", r), this[rt] = !0, this.writable = !1, (this[mt] || !this[ht]) && this[nt](), this;
    }
    [ft]() {
        this[St] || (!this[Rt] && !this[yt].length && (this[Mt] = !0), this[ht] = !1, this[mt] = !0, this.emit("resume"), this[gt].length ? this[lt]() : this[rt] ? this[nt]() : this.emit("drain"));
    }
    resume() {
        return this[ft]();
    }
    pause() {
        this[mt] = !1, this[ht] = !0, this[Mt] = !1;
    }
    get destroyed() {
        return this[St];
    }
    get flowing() {
        return this[mt];
    }
    get paused() {
        return this[ht];
    }
    [vt](e) {
        this[bt] ? this[wt] += 1 : this[wt] += e.length, this[gt].push(e);
    }
    [_t]() {
        return this[bt] ? this[wt] -= 1 : this[wt] -= this[gt][0].length, this[gt].shift();
    }
    [lt](e = !1) {
        do {}while (this[ut](this[_t]()) && this[gt].length)
        !e && !this[gt].length && !this[rt] && this.emit("drain");
    }
    [ut](e) {
        return this.emit("data", e), this[mt];
    }
    pipe(e, t) {
        if (this[St]) return e;
        this[Mt] = !1;
        let r = this[st];
        return t = t || {}, e === Xe.stdout || e === Xe.stderr ? t.end = !1 : t.end = !1 !== t.end, t.proxyErrors = !!t.proxyErrors, r ? t.end && e.end() : (this[yt].push(t.proxyErrors ? new Dt(this, e, t) : new Bt(this, e, t)), this[Tt] ? Jt(()=>this[ft]()) : this[ft]()), e;
    }
    unpipe(e) {
        let t = this[yt].find((t)=>t.dest === e);
        t && (1 === this[yt].length ? (this[mt] && 0 === this[Rt] && (this[mt] = !1), this[yt] = []) : this[yt].splice(this[yt].indexOf(t), 1), t.unpipe());
    }
    addListener(e, t) {
        return this.on(e, t);
    }
    on(e, t) {
        let r = super.on(e, t);
        if ("data" === e) this[Mt] = !1, this[Rt]++, !this[yt].length && !this[mt] && this[ft]();
        else if ("readable" === e && 0 !== this[wt]) super.emit("readable");
        else if ("end" !== (n = e) && "finish" !== n && "prefinish" !== n || !this[st]) {
            if ("error" === e && this[it]) {
                let e = t;
                this[Tt] ? Jt(()=>e.call(this, this[it])) : e.call(this, this[it]);
            }
        } else super.emit(e), this.removeAllListeners(e);
        var n;
        return r;
    }
    removeListener(e, t) {
        return this.off(e, t);
    }
    off(e, t) {
        let r = super.off(e, t);
        return "data" === e && (this[Rt] = this.listeners("data").length, 0 === this[Rt] && !this[Mt] && !this[yt].length && (this[mt] = !1)), r;
    }
    removeAllListeners(e) {
        let t = super.removeAllListeners(e);
        return ("data" === e || void 0 === e) && (this[Rt] = 0, !this[Mt] && !this[yt].length && (this[mt] = !1)), t;
    }
    get emittedEnd() {
        return this[st];
    }
    [nt]() {
        !this[ot] && !this[st] && !this[St] && 0 === this[gt].length && this[rt] && (this[ot] = !0, this.emit("end"), this.emit("prefinish"), this.emit("finish"), this[at] && this.emit("close"), this[ot] = !1);
    }
    emit(e, ...t) {
        let r = t[0];
        if ("error" !== e && "close" !== e && e !== St && this[St]) return !1;
        if ("data" === e) return !(!this[bt] && !r) && (this[Tt] ? (Jt(()=>this[xt](r)), !0) : this[xt](r));
        if ("end" === e) return this[Et]();
        if ("close" === e) {
            if (this[at] = !0, !this[st] && !this[St]) return !1;
            let e = super.emit("close");
            return this.removeAllListeners("close"), e;
        }
        if ("error" === e) {
            this[it] = r, super.emit(kt, r);
            let e = !(this[At] && !this.listeners("error").length) && super.emit("error", r);
            return this[nt](), e;
        }
        if ("resume" === e) {
            let e = super.emit("resume");
            return this[nt](), e;
        }
        if ("finish" === e || "prefinish" === e) {
            let t = super.emit(e);
            return this.removeAllListeners(e), t;
        }
        let n = super.emit(e, ...t);
        return this[nt](), n;
    }
    [xt](e) {
        for (let t of this[yt])!1 === t.dest.write(e) && this.pause();
        let t = !this[Mt] && super.emit("data", e);
        return this[nt](), t;
    }
    [Et]() {
        return !this[st] && (this[st] = !0, this.readable = !1, this[Tt] ? (Jt(()=>this[It]()), !0) : this[It]());
    }
    [It]() {
        if (this[pt]) {
            let e = this[pt].end();
            if (e) {
                for (let t of this[yt])t.dest.write(e);
                this[Mt] || super.emit("data", e);
            }
        }
        for (let e of this[yt])e.end();
        let e = super.emit("end");
        return this.removeAllListeners("end"), e;
    }
    async collect() {
        let e = Object.assign([], {
            dataLength: 0
        });
        this[bt] || (e.dataLength = 0);
        let t = this.promise();
        return this.on("data", (t)=>{
            e.push(t), this[bt] || (e.dataLength += t.length);
        }), await t, e;
    }
    async concat() {
        if (this[bt]) throw new Error("cannot concat in objectMode");
        let e = await this.collect();
        return this[dt] ? e.join("") : Buffer.concat(e, e.dataLength);
    }
    async promise() {
        return new Promise((e, t)=>{
            this.on(St, ()=>t(new Error("stream destroyed"))), this.on("error", (e)=>t(e)), this.on("end", ()=>e());
        });
    }
    [Symbol.asyncIterator]() {
        this[Mt] = !1;
        let e = !1, t = async ()=>(this.pause(), e = !0, {
                value: void 0,
                done: !0
            });
        return {
            next: ()=>{
                if (e) return t();
                let r = this.read();
                if (null !== r) return Promise.resolve({
                    done: !1,
                    value: r
                });
                if (this[rt]) return t();
                let n, s, o = (e)=>{
                    this.off("data", i), this.off("end", a), this.off(St, c), t(), s(e);
                }, i = (e)=>{
                    this.off("error", o), this.off("end", a), this.off(St, c), this.pause(), n({
                        value: e,
                        done: !!this[rt]
                    });
                }, a = ()=>{
                    this.off("error", o), this.off("data", i), this.off(St, c), t(), n({
                        done: !0,
                        value: void 0
                    });
                }, c = ()=>o(new Error("stream destroyed"));
                return new Promise((e, t)=>{
                    s = t, n = e, this.once(St, c), this.once("error", o), this.once("end", a), this.once("data", i);
                });
            },
            throw: t,
            return: t,
            [Symbol.asyncIterator] () {
                return this;
            },
            [Symbol.asyncDispose]: async ()=>{}
        };
    }
    [Symbol.iterator]() {
        this[Mt] = !1;
        let e = !1, t = ()=>(this.pause(), this.off(kt, t), this.off(St, t), this.off("end", t), e = !0, {
                done: !0,
                value: void 0
            });
        return this.once("end", t), this.once(kt, t), this.once(St, t), {
            next: ()=>{
                if (e) return t();
                let r = this.read();
                return null === r ? t() : {
                    done: !1,
                    value: r
                };
            },
            throw: t,
            return: t,
            [Symbol.iterator] () {
                return this;
            },
            [Symbol.dispose]: ()=>{}
        };
    }
    destroy(e) {
        if (this[St]) return e ? this.emit("error", e) : this.emit(St), this;
        this[St] = !0, this[Mt] = !0, this[gt].length = 0, this[wt] = 0;
        return "function" == typeof this.close && !this[at] && this.close(), e ? this.emit("error", e) : this.emit(St), this;
    }
    static get isStream() {
        return Ze;
    }
}, Nt = Le.writev, Ft = Symbol("_autoClose"), Ut = Symbol("_close"), Lt = Symbol("_ended"), $t = Symbol("_fd"), jt = Symbol("_finished"), Gt = Symbol("_flags"), zt = Symbol("_flush"), Wt = Symbol("_handleChunk"), Ht = Symbol("_makeBuf"), Kt = Symbol("_mode"), Vt = Symbol("_needDrain"), Yt = Symbol("_onerror"), Qt = Symbol("_onopen"), Xt = Symbol("_onread"), Zt = Symbol("_onwrite"), er = Symbol("_open"), tr = Symbol("_path"), rr = Symbol("_pos"), nr = Symbol("_queue"), sr = Symbol("_read"), or = Symbol("_readSize"), ir = Symbol("_reading"), ar = Symbol("_remain"), cr = Symbol("_size"), lr = Symbol("_write"), ur = Symbol("_writing"), dr = Symbol("_defaultFlag"), pr = Symbol("_errored"), mr = class extends qt {
    [pr] = !1;
    [$t];
    [tr];
    [or];
    [ir] = !1;
    [cr];
    [ar];
    [Ft];
    constructor(e, t){
        if (super(t = t || {}), this.readable = !0, this.writable = !1, "string" != typeof e) throw new TypeError("path must be a string");
        this[pr] = !1, this[$t] = "number" == typeof t.fd ? t.fd : void 0, this[tr] = e, this[or] = t.readSize || 16777216, this[ir] = !1, this[cr] = "number" == typeof t.size ? t.size : 1 / 0, this[ar] = this[cr], this[Ft] = "boolean" != typeof t.autoClose || t.autoClose, "number" == typeof this[$t] ? this[sr]() : this[er]();
    }
    get fd() {
        return this[$t];
    }
    get path() {
        return this[tr];
    }
    write() {
        throw new TypeError("this is a readable stream");
    }
    end() {
        throw new TypeError("this is a readable stream");
    }
    [er]() {
        Le.open(this[tr], "r", (e, t)=>this[Qt](e, t));
    }
    [Qt](e, t) {
        e ? this[Yt](e) : (this[$t] = t, this.emit("open", t), this[sr]());
    }
    [Ht]() {
        return Buffer.allocUnsafe(Math.min(this[or], this[ar]));
    }
    [sr]() {
        if (!this[ir]) {
            this[ir] = !0;
            let e = this[Ht]();
            if (0 === e.length) return process.nextTick(()=>this[Xt](null, 0, e));
            Le.read(this[$t], e, 0, e.length, null, (e, t, r)=>this[Xt](e, t, r));
        }
    }
    [Xt](e, t, r) {
        this[ir] = !1, e ? this[Yt](e) : this[Wt](t, r) && this[sr]();
    }
    [Ut]() {
        if (this[Ft] && "number" == typeof this[$t]) {
            let e = this[$t];
            this[$t] = void 0, Le.close(e, (e)=>e ? this.emit("error", e) : this.emit("close"));
        }
    }
    [Yt](e) {
        this[ir] = !0, this[Ut](), this.emit("error", e);
    }
    [Wt](e, t) {
        let r = !1;
        return this[ar] -= e, e > 0 && (r = super.write(e < t.length ? t.subarray(0, e) : t)), (0 === e || this[ar] <= 0) && (r = !1, this[Ut](), super.end()), r;
    }
    emit(e, ...t) {
        switch(e){
            case "prefinish":
            case "finish":
                return !1;
            case "drain":
                return "number" == typeof this[$t] && this[sr](), !1;
            case "error":
                return !this[pr] && (this[pr] = !0, super.emit(e, ...t));
            default:
                return super.emit(e, ...t);
        }
    }
}, hr = class extends mr {
    [er]() {
        let e = !0;
        try {
            this[Qt](null, Le.openSync(this[tr], "r")), e = !1;
        } finally{
            e && this[Ut]();
        }
    }
    [sr]() {
        let e = !0;
        try {
            if (!this[ir]) {
                for(this[ir] = !0;;){
                    let e = this[Ht](), t = 0 === e.length ? 0 : Le.readSync(this[$t], e, 0, e.length, null);
                    if (!this[Wt](t, e)) break;
                }
                this[ir] = !1;
            }
            e = !1;
        } finally{
            e && this[Ut]();
        }
    }
    [Ut]() {
        if (this[Ft] && "number" == typeof this[$t]) {
            let e = this[$t];
            this[$t] = void 0, Le.closeSync(e), this.emit("close");
        }
    }
}, fr = class extends Ue {
    readable = !1;
    writable = !0;
    [pr] = !1;
    [ur] = !1;
    [Lt] = !1;
    [nr] = [];
    [Vt] = !1;
    [tr];
    [Kt];
    [Ft];
    [$t];
    [dr];
    [Gt];
    [jt] = !1;
    [rr];
    constructor(e, t){
        super(t = t || {}), this[tr] = e, this[$t] = "number" == typeof t.fd ? t.fd : void 0, this[Kt] = void 0 === t.mode ? 438 : t.mode, this[rr] = "number" == typeof t.start ? t.start : void 0, this[Ft] = "boolean" != typeof t.autoClose || t.autoClose;
        let r = void 0 !== this[rr] ? "r+" : "w";
        this[dr] = void 0 === t.flags, this[Gt] = void 0 === t.flags ? r : t.flags, void 0 === this[$t] && this[er]();
    }
    emit(e, ...t) {
        if ("error" === e) {
            if (this[pr]) return !1;
            this[pr] = !0;
        }
        return super.emit(e, ...t);
    }
    get fd() {
        return this[$t];
    }
    get path() {
        return this[tr];
    }
    [Yt](e) {
        this[Ut](), this[ur] = !0, this.emit("error", e);
    }
    [er]() {
        Le.open(this[tr], this[Gt], this[Kt], (e, t)=>this[Qt](e, t));
    }
    [Qt](e, t) {
        this[dr] && "r+" === this[Gt] && e && "ENOENT" === e.code ? (this[Gt] = "w", this[er]()) : e ? this[Yt](e) : (this[$t] = t, this.emit("open", t), this[ur] || this[zt]());
    }
    end(e, t) {
        return e && this.write(e, t), this[Lt] = !0, !this[ur] && !this[nr].length && "number" == typeof this[$t] && this[Zt](null, 0), this;
    }
    write(e, t) {
        return "string" == typeof e && (e = Buffer.from(e, t)), this[Lt] ? (this.emit("error", new Error("write() after end()")), !1) : void 0 === this[$t] || this[ur] || this[nr].length ? (this[nr].push(e), this[Vt] = !0, !1) : (this[ur] = !0, this[lr](e), !0);
    }
    [lr](e) {
        Le.write(this[$t], e, 0, e.length, this[rr], (e, t)=>this[Zt](e, t));
    }
    [Zt](e, t) {
        e ? this[Yt](e) : (void 0 !== this[rr] && "number" == typeof t && (this[rr] += t), this[nr].length ? this[zt]() : (this[ur] = !1, this[Lt] && !this[jt] ? (this[jt] = !0, this[Ut](), this.emit("finish")) : this[Vt] && (this[Vt] = !1, this.emit("drain"))));
    }
    [zt]() {
        if (0 === this[nr].length) this[Lt] && this[Zt](null, 0);
        else if (1 === this[nr].length) this[lr](this[nr].pop());
        else {
            let e = this[nr];
            this[nr] = [], Nt(this[$t], e, this[rr], (e, t)=>this[Zt](e, t));
        }
    }
    [Ut]() {
        if (this[Ft] && "number" == typeof this[$t]) {
            let e = this[$t];
            this[$t] = void 0, Le.close(e, (e)=>e ? this.emit("error", e) : this.emit("close"));
        }
    }
}, gr = class extends fr {
    [er]() {
        let e;
        if (this[dr] && "r+" === this[Gt]) try {
            e = Le.openSync(this[tr], this[Gt], this[Kt]);
        } catch (e) {
            if ("ENOENT" === e?.code) return this[Gt] = "w", this[er]();
            throw e;
        }
        else e = Le.openSync(this[tr], this[Gt], this[Kt]);
        this[Qt](null, e);
    }
    [Ut]() {
        if (this[Ft] && "number" == typeof this[$t]) {
            let e = this[$t];
            this[$t] = void 0, Le.closeSync(e), this.emit("close");
        }
    }
    [lr](e) {
        let t = !0;
        try {
            this[Zt](null, Le.writeSync(this[$t], e, 0, e.length, this[rr])), t = !1;
        } finally{
            if (t) try {
                this[Ut]();
            } catch  {}
        }
    }
}, yr = new Map([
    [
        "C",
        "cwd"
    ],
    [
        "f",
        "file"
    ],
    [
        "z",
        "gzip"
    ],
    [
        "P",
        "preservePaths"
    ],
    [
        "U",
        "unlink"
    ],
    [
        "strip-components",
        "strip"
    ],
    [
        "stripComponents",
        "strip"
    ],
    [
        "keep-newer",
        "newer"
    ],
    [
        "keepNewer",
        "newer"
    ],
    [
        "keep-newer-files",
        "newer"
    ],
    [
        "keepNewerFiles",
        "newer"
    ],
    [
        "k",
        "keep"
    ],
    [
        "keep-existing",
        "keep"
    ],
    [
        "keepExisting",
        "keep"
    ],
    [
        "m",
        "noMtime"
    ],
    [
        "no-mtime",
        "noMtime"
    ],
    [
        "p",
        "preserveOwner"
    ],
    [
        "L",
        "follow"
    ],
    [
        "h",
        "follow"
    ],
    [
        "onentry",
        "onReadEntry"
    ]
]), wr = (e)=>yr.get(e) || e, vr = (e = {})=>{
    if (!e) return {};
    let t = {};
    for (let [r, n] of Object.entries(e)){
        t[wr(r)] = n;
    }
    return void 0 === t.chmod && !1 === t.noChmod && (t.chmod = !0), delete t.noChmod, t;
}, _r = (e, t, r, n, s)=>Object.assign((o = [], i, a)=>{
        Array.isArray(o) && (i = o, o = {}), "function" == typeof i && (a = i, i = void 0), i = i ? Array.from(i) : [];
        let c = vr(o);
        if (s?.(c, i), ((e)=>!!e.sync && !!e.file)(c)) {
            if ("function" == typeof a) throw new TypeError("callback not supported for sync tar functions");
            return e(c, i);
        }
        if (((e)=>!e.sync && !!e.file)(c)) {
            let e = t(c, i);
            return a ? e.then(()=>a(), a) : e;
        }
        if (((e)=>!!e.sync && !e.file)(c)) {
            if ("function" == typeof a) throw new TypeError("callback not supported for sync tar functions");
            return r(c, i);
        }
        if (((e)=>!e.sync && !e.file)(c)) {
            if ("function" == typeof a) throw new TypeError("callback only supported with file option");
            return n(c, i);
        }
        throw new Error("impossible options??");
    }, {
        syncFile: e,
        asyncFile: t,
        syncNoFile: r,
        asyncNoFile: n,
        validate: s
    }), br = Ke.constants || {
    ZLIB_VERNUM: 4736
}, Sr = Object.freeze(Object.assign(Object.create(null), {
    Z_NO_FLUSH: 0,
    Z_PARTIAL_FLUSH: 1,
    Z_SYNC_FLUSH: 2,
    Z_FULL_FLUSH: 3,
    Z_FINISH: 4,
    Z_BLOCK: 5,
    Z_OK: 0,
    Z_STREAM_END: 1,
    Z_NEED_DICT: 2,
    Z_ERRNO: -1,
    Z_STREAM_ERROR: -2,
    Z_DATA_ERROR: -3,
    Z_MEM_ERROR: -4,
    Z_BUF_ERROR: -5,
    Z_VERSION_ERROR: -6,
    Z_NO_COMPRESSION: 0,
    Z_BEST_SPEED: 1,
    Z_BEST_COMPRESSION: 9,
    Z_DEFAULT_COMPRESSION: -1,
    Z_FILTERED: 1,
    Z_HUFFMAN_ONLY: 2,
    Z_RLE: 3,
    Z_FIXED: 4,
    Z_DEFAULT_STRATEGY: 0,
    DEFLATE: 1,
    INFLATE: 2,
    GZIP: 3,
    GUNZIP: 4,
    DEFLATERAW: 5,
    INFLATERAW: 6,
    UNZIP: 7,
    BROTLI_DECODE: 8,
    BROTLI_ENCODE: 9,
    Z_MIN_WINDOWBITS: 8,
    Z_MAX_WINDOWBITS: 15,
    Z_DEFAULT_WINDOWBITS: 15,
    Z_MIN_CHUNK: 64,
    Z_MAX_CHUNK: 1 / 0,
    Z_DEFAULT_CHUNK: 16384,
    Z_MIN_MEMLEVEL: 1,
    Z_MAX_MEMLEVEL: 9,
    Z_DEFAULT_MEMLEVEL: 8,
    Z_MIN_LEVEL: -1,
    Z_MAX_LEVEL: 9,
    Z_DEFAULT_LEVEL: -1,
    BROTLI_OPERATION_PROCESS: 0,
    BROTLI_OPERATION_FLUSH: 1,
    BROTLI_OPERATION_FINISH: 2,
    BROTLI_OPERATION_EMIT_METADATA: 3,
    BROTLI_MODE_GENERIC: 0,
    BROTLI_MODE_TEXT: 1,
    BROTLI_MODE_FONT: 2,
    BROTLI_DEFAULT_MODE: 0,
    BROTLI_MIN_QUALITY: 0,
    BROTLI_MAX_QUALITY: 11,
    BROTLI_DEFAULT_QUALITY: 11,
    BROTLI_MIN_WINDOW_BITS: 10,
    BROTLI_MAX_WINDOW_BITS: 24,
    BROTLI_LARGE_MAX_WINDOW_BITS: 30,
    BROTLI_DEFAULT_WINDOW: 22,
    BROTLI_MIN_INPUT_BLOCK_BITS: 16,
    BROTLI_MAX_INPUT_BLOCK_BITS: 24,
    BROTLI_PARAM_MODE: 0,
    BROTLI_PARAM_QUALITY: 1,
    BROTLI_PARAM_LGWIN: 2,
    BROTLI_PARAM_LGBLOCK: 3,
    BROTLI_PARAM_DISABLE_LITERAL_CONTEXT_MODELING: 4,
    BROTLI_PARAM_SIZE_HINT: 5,
    BROTLI_PARAM_LARGE_WINDOW: 6,
    BROTLI_PARAM_NPOSTFIX: 7,
    BROTLI_PARAM_NDIRECT: 8,
    BROTLI_DECODER_RESULT_ERROR: 0,
    BROTLI_DECODER_RESULT_SUCCESS: 1,
    BROTLI_DECODER_RESULT_NEEDS_MORE_INPUT: 2,
    BROTLI_DECODER_RESULT_NEEDS_MORE_OUTPUT: 3,
    BROTLI_DECODER_PARAM_DISABLE_RING_BUFFER_REALLOCATION: 0,
    BROTLI_DECODER_PARAM_LARGE_WINDOW: 1,
    BROTLI_DECODER_NO_ERROR: 0,
    BROTLI_DECODER_SUCCESS: 1,
    BROTLI_DECODER_NEEDS_MORE_INPUT: 2,
    BROTLI_DECODER_NEEDS_MORE_OUTPUT: 3,
    BROTLI_DECODER_ERROR_FORMAT_EXUBERANT_NIBBLE: -1,
    BROTLI_DECODER_ERROR_FORMAT_RESERVED: -2,
    BROTLI_DECODER_ERROR_FORMAT_EXUBERANT_META_NIBBLE: -3,
    BROTLI_DECODER_ERROR_FORMAT_SIMPLE_HUFFMAN_ALPHABET: -4,
    BROTLI_DECODER_ERROR_FORMAT_SIMPLE_HUFFMAN_SAME: -5,
    BROTLI_DECODER_ERROR_FORMAT_CL_SPACE: -6,
    BROTLI_DECODER_ERROR_FORMAT_HUFFMAN_SPACE: -7,
    BROTLI_DECODER_ERROR_FORMAT_CONTEXT_MAP_REPEAT: -8,
    BROTLI_DECODER_ERROR_FORMAT_BLOCK_LENGTH_1: -9,
    BROTLI_DECODER_ERROR_FORMAT_BLOCK_LENGTH_2: -10,
    BROTLI_DECODER_ERROR_FORMAT_TRANSFORM: -11,
    BROTLI_DECODER_ERROR_FORMAT_DICTIONARY: -12,
    BROTLI_DECODER_ERROR_FORMAT_WINDOW_BITS: -13,
    BROTLI_DECODER_ERROR_FORMAT_PADDING_1: -14,
    BROTLI_DECODER_ERROR_FORMAT_PADDING_2: -15,
    BROTLI_DECODER_ERROR_FORMAT_DISTANCE: -16,
    BROTLI_DECODER_ERROR_DICTIONARY_NOT_SET: -19,
    BROTLI_DECODER_ERROR_INVALID_ARGUMENTS: -20,
    BROTLI_DECODER_ERROR_ALLOC_CONTEXT_MODES: -21,
    BROTLI_DECODER_ERROR_ALLOC_TREE_GROUPS: -22,
    BROTLI_DECODER_ERROR_ALLOC_CONTEXT_MAP: -25,
    BROTLI_DECODER_ERROR_ALLOC_RING_BUFFER_1: -26,
    BROTLI_DECODER_ERROR_ALLOC_RING_BUFFER_2: -27,
    BROTLI_DECODER_ERROR_ALLOC_BLOCK_TYPE_TREES: -30,
    BROTLI_DECODER_ERROR_UNREACHABLE: -31
}, br)), kr = He.Buffer.concat, xr = Object.getOwnPropertyDescriptor(He.Buffer, "concat"), Er = (e)=>e, Ir = !0 === xr?.writable || void 0 !== xr?.set ? (e)=>{
    He.Buffer.concat = e ? Er : kr;
} : (e)=>{}, Tr = Symbol("_superWrite"), Cr = class extends Error {
    code;
    errno;
    constructor(e, t){
        super("zlib: " + e.message, {
            cause: e
        }), this.code = e.code, this.errno = e.errno, this.code || (this.code = "ZLIB_ERROR"), this.message = "zlib: " + e.message, Error.captureStackTrace(this, t ?? this.constructor);
    }
    get name() {
        return "ZlibError";
    }
}, Pr = Symbol("flushFlag"), Ar = class extends qt {
    #e = !1;
    #t = !1;
    #r;
    #n;
    #s;
    #o;
    #i;
    get sawError() {
        return this.#e;
    }
    get handle() {
        return this.#o;
    }
    get flushFlag() {
        return this.#r;
    }
    constructor(e, t){
        if (!e || "object" != typeof e) throw new TypeError("invalid options for ZlibBase constructor");
        if (super(e), this.#r = e.flush ?? 0, this.#n = e.finishFlush ?? 0, this.#s = e.fullFlushFlag ?? 0, "function" != typeof Ve[t]) throw new TypeError("Compression method not supported: " + t);
        try {
            this.#o = new Ve[t](e);
        } catch (e) {
            throw new Cr(e, this.constructor);
        }
        this.#i = (e)=>{
            this.#e || (this.#e = !0, this.close(), this.emit("error", e));
        }, this.#o?.on("error", (e)=>this.#i(new Cr(e))), this.once("end", ()=>this.close);
    }
    close() {
        this.#o && (this.#o.close(), this.#o = void 0, this.emit("close"));
    }
    reset() {
        if (!this.#e) return We(this.#o, "zlib binding closed"), this.#o.reset?.();
    }
    flush(e) {
        this.ended || ("number" != typeof e && (e = this.#s), this.write(Object.assign(He.Buffer.alloc(0), {
            [Pr]: e
        })));
    }
    end(e, t, r) {
        return "function" == typeof e && (r = e, t = void 0, e = void 0), "function" == typeof t && (r = t, t = void 0), e && (t ? this.write(e, t) : this.write(e)), this.flush(this.#n), this.#t = !0, super.end(r);
    }
    get ended() {
        return this.#t;
    }
    [Tr](e) {
        return super.write(e);
    }
    write(e, t, r) {
        if ("function" == typeof t && (r = t, t = "utf8"), "string" == typeof e && (e = He.Buffer.from(e, t)), this.#e) return;
        We(this.#o, "zlib binding closed");
        let n = this.#o._handle, s = n.close;
        n.close = ()=>{};
        let o, i, a = this.#o.close;
        this.#o.close = ()=>{}, Ir(!0);
        try {
            let t = "number" == typeof e[Pr] ? e[Pr] : this.#r;
            o = this.#o._processChunk(e, t), Ir(!1);
        } catch (e) {
            Ir(!1), this.#i(new Cr(e, this.write));
        } finally{
            this.#o && (this.#o._handle = n, n.close = s, this.#o.close = a, this.#o.removeAllListeners("error"));
        }
        if (this.#o && this.#o.on("error", (e)=>this.#i(new Cr(e, this.write))), o) if (Array.isArray(o) && o.length > 0) {
            let e = o[0];
            i = this[Tr](He.Buffer.from(e));
            for(let e = 1; e < o.length; e++)i = this[Tr](o[e]);
        } else i = this[Tr](He.Buffer.from(o));
        return r && r(), i;
    }
}, Rr = class extends Ar {
    #e;
    #t;
    constructor(e, t){
        (e = e || {}).flush = e.flush || Sr.Z_NO_FLUSH, e.finishFlush = e.finishFlush || Sr.Z_FINISH, e.fullFlushFlag = Sr.Z_FULL_FLUSH, super(e, t), this.#e = e.level, this.#t = e.strategy;
    }
    params(e, t) {
        if (!this.sawError) {
            if (!this.handle) throw new Error("cannot switch params when binding is closed");
            if (!this.handle.params) throw new Error("not supported in this implementation");
            if (this.#e !== e || this.#t !== t) {
                this.flush(Sr.Z_SYNC_FLUSH), We(this.handle, "zlib binding closed");
                let r = this.handle.flush;
                this.handle.flush = (e, t)=>{
                    "function" == typeof e && (t = e, e = this.flushFlag), this.flush(e), t?.();
                };
                try {
                    this.handle.params(e, t);
                } finally{
                    this.handle.flush = r;
                }
                this.handle && (this.#e = e, this.#t = t);
            }
        }
    }
}, Mr = class extends Rr {
    #e;
    constructor(e){
        super(e, "Gzip"), this.#e = e && !!e.portable;
    }
    [Tr](e) {
        return this.#e ? (this.#e = !1, e[9] = 255, super[Tr](e)) : super[Tr](e);
    }
}, Jr = class extends Rr {
    constructor(e){
        super(e, "Unzip");
    }
}, Or = class extends Ar {
    constructor(e, t){
        (e = e || {}).flush = e.flush || Sr.BROTLI_OPERATION_PROCESS, e.finishFlush = e.finishFlush || Sr.BROTLI_OPERATION_FINISH, e.fullFlushFlag = Sr.BROTLI_OPERATION_FLUSH, super(e, t);
    }
}, Br = class extends Or {
    constructor(e){
        super(e, "BrotliCompress");
    }
}, Dr = class extends Or {
    constructor(e){
        super(e, "BrotliDecompress");
    }
}, qr = class extends Ar {
    constructor(e, t){
        (e = e || {}).flush = e.flush || Sr.ZSTD_e_continue, e.finishFlush = e.finishFlush || Sr.ZSTD_e_end, e.fullFlushFlag = Sr.ZSTD_e_flush, super(e, t);
    }
}, Nr = class extends qr {
    constructor(e){
        super(e, "ZstdCompress");
    }
}, Fr = class extends qr {
    constructor(e){
        super(e, "ZstdDecompress");
    }
}, Ur = (e, t)=>{
    t[0] = 128;
    for(var r = t.length; r > 1; r--)t[r - 1] = 255 & e, e = Math.floor(e / 256);
}, Lr = (e, t)=>{
    t[0] = 255;
    var r = !1;
    e *= -1;
    for(var n = t.length; n > 1; n--){
        var s = 255 & e;
        e = Math.floor(e / 256), r ? t[n - 1] = Gr(s) : 0 === s ? t[n - 1] = 0 : (r = !0, t[n - 1] = zr(s));
    }
}, $r = (e)=>{
    for(var t = e.length, r = 0, n = !1, s = t - 1; s > -1; s--){
        var o, i = Number(e[s]);
        n ? o = Gr(i) : 0 === i ? o = i : (n = !0, o = zr(i)), 0 !== o && (r -= o * Math.pow(256, t - s - 1));
    }
    return r;
}, jr = (e)=>{
    for(var t = e.length, r = 0, n = t - 1; n > -1; n--){
        var s = Number(e[n]);
        0 !== s && (r += s * Math.pow(256, t - n - 1));
    }
    return r;
}, Gr = (e)=>255 & (255 ^ e), zr = (e)=>1 + (255 ^ e) & 255;
((e, t)=>{
    for(var r in t)Qe(e, r, {
        get: t[r],
        enumerable: !0
    });
})({}, {
    code: ()=>Yr,
    isCode: ()=>Wr,
    isName: ()=>Hr,
    name: ()=>Vr,
    normalFsTypes: ()=>Kr
});
var Wr = (e)=>Vr.has(e), Hr = (e)=>Yr.has(e), Kr = new Set([
    "0",
    "",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "D"
]), Vr = new Map([
    [
        "0",
        "File"
    ],
    [
        "",
        "OldFile"
    ],
    [
        "1",
        "Link"
    ],
    [
        "2",
        "SymbolicLink"
    ],
    [
        "3",
        "CharacterDevice"
    ],
    [
        "4",
        "BlockDevice"
    ],
    [
        "5",
        "Directory"
    ],
    [
        "6",
        "FIFO"
    ],
    [
        "7",
        "ContiguousFile"
    ],
    [
        "g",
        "GlobalExtendedHeader"
    ],
    [
        "x",
        "ExtendedHeader"
    ],
    [
        "A",
        "SolarisACL"
    ],
    [
        "D",
        "GNUDumpDir"
    ],
    [
        "I",
        "Inode"
    ],
    [
        "K",
        "NextFileHasLongLinkpath"
    ],
    [
        "L",
        "NextFileHasLongPath"
    ],
    [
        "M",
        "ContinuationFile"
    ],
    [
        "N",
        "OldGnuLongPath"
    ],
    [
        "S",
        "SparseFile"
    ],
    [
        "V",
        "TapeVolumeHeader"
    ],
    [
        "X",
        "OldExtendedHeader"
    ]
]), Yr = new Map(Array.from(Vr).map((e)=>[
        e[1],
        e[0]
    ])), Qr = class {
    cksumValid = !1;
    needPax = !1;
    nullBlock = !1;
    block;
    path;
    mode;
    uid;
    gid;
    size;
    cksum;
    #e = "Unsupported";
    linkpath;
    uname;
    gname;
    devmaj = 0;
    devmin = 0;
    atime;
    ctime;
    mtime;
    charset;
    comment;
    constructor(e, t = 0, r, n){
        Buffer.isBuffer(e) ? this.decode(e, t || 0, r, n) : e && this.#t(e);
    }
    decode(e, t, r, n) {
        if (t || (t = 0), !(e && e.length >= t + 512)) throw new Error("need 512 bytes for header");
        let s = Zr(e, t + 156, 1), o = Kr.has(s), i = o ? r : void 0, a = o ? n : void 0;
        if (this.path = i?.path ?? Zr(e, t, 100), this.mode = i?.mode ?? a?.mode ?? rn(e, t + 100, 8), this.uid = i?.uid ?? a?.uid ?? rn(e, t + 108, 8), this.gid = i?.gid ?? a?.gid ?? rn(e, t + 116, 8), this.size = void 0 === (c = i?.size ?? a?.size ?? rn(e, t + 124, 12)) || c < 0 ? void 0 : c, this.mtime = i?.mtime ?? a?.mtime ?? en(e, t + 136, 12), this.cksum = rn(e, t + 148, 12), a && this.#t(a, !0), i && this.#t(i), Wr(s) && (this.#e = s || "0"), "0" === this.#e && "/" === this.path.slice(-1) && (this.#e = "5"), "5" === this.#e && (this.size = 0), this.linkpath = Zr(e, t + 157, 100), "ustar\x0000" === e.subarray(t + 257, t + 265).toString()) if (this.uname = i?.uname ?? a?.uname ?? Zr(e, t + 265, 32), this.gname = i?.gname ?? a?.gname ?? Zr(e, t + 297, 32), this.devmaj = i?.devmaj ?? a?.devmaj ?? rn(e, t + 329, 8) ?? 0, this.devmin = i?.devmin ?? a?.devmin ?? rn(e, t + 337, 8) ?? 0, 0 !== e[t + 475]) {
            let r = Zr(e, t + 345, 155);
            this.path = r + "/" + this.path;
        } else {
            let s = Zr(e, t + 345, 130);
            s && (this.path = s + "/" + this.path), this.atime = r?.atime ?? n?.atime ?? en(e, t + 476, 12), this.ctime = r?.ctime ?? n?.ctime ?? en(e, t + 488, 12);
        }
        var c;
        let l = 256;
        for(let r = t; r < t + 148; r++)l += e[r];
        for(let r = t + 156; r < t + 512; r++)l += e[r];
        this.cksumValid = l === this.cksum, void 0 === this.cksum && 256 === l && (this.nullBlock = !0);
    }
    #t(e, t = !1) {
        Object.assign(this, Object.fromEntries(Object.entries(e).filter(([e, r])=>!(null == r || "size" === e && Number(r) < 0 || "path" === e && t || "linkpath" === e && t || "global" === e))));
    }
    encode(e, t = 0) {
        if (e || (e = this.block = Buffer.alloc(512)), "Unsupported" === this.#e && (this.#e = "0"), !(e.length >= t + 512)) throw new Error("need 512 bytes for header");
        let r = this.ctime || this.atime ? 130 : 155, n = Xr(this.path || "", r), s = n[0], o = n[1];
        this.needPax = !!n[2], this.needPax = pn(e, t, 100, s) || this.needPax, this.needPax = on(e, t + 100, 8, this.mode) || this.needPax, this.needPax = on(e, t + 108, 8, this.uid) || this.needPax, this.needPax = on(e, t + 116, 8, this.gid) || this.needPax, this.needPax = on(e, t + 124, 12, this.size) || this.needPax, this.needPax = un(e, t + 136, 12, this.mtime) || this.needPax, e[t + 156] = Number(this.#e.codePointAt(0)), this.needPax = pn(e, t + 157, 100, this.linkpath) || this.needPax, e.write("ustar\x0000", t + 257, 8), this.needPax = pn(e, t + 265, 32, this.uname) || this.needPax, this.needPax = pn(e, t + 297, 32, this.gname) || this.needPax, this.needPax = on(e, t + 329, 8, this.devmaj) || this.needPax, this.needPax = on(e, t + 337, 8, this.devmin) || this.needPax, this.needPax = pn(e, t + 345, r, o) || this.needPax, 0 !== e[t + 475] ? this.needPax = pn(e, t + 345, 155, o) || this.needPax : (this.needPax = pn(e, t + 345, 130, o) || this.needPax, this.needPax = un(e, t + 476, 12, this.atime) || this.needPax, this.needPax = un(e, t + 488, 12, this.ctime) || this.needPax);
        let i = 256;
        for(let r = t; r < t + 148; r++)i += e[r];
        for(let r = t + 156; r < t + 512; r++)i += e[r];
        return this.cksum = i, on(e, t + 148, 8, this.cksum), this.cksumValid = !0, this.needPax;
    }
    get type() {
        return "Unsupported" === this.#e ? this.#e : Vr.get(this.#e);
    }
    get typeKey() {
        return this.#e;
    }
    set type(e) {
        let t = String(Yr.get(e));
        if (Wr(t) || "Unsupported" === t) this.#e = t;
        else {
            if (!Wr(e)) throw new TypeError("invalid entry type: " + e);
            this.#e = e;
        }
    }
}, Xr = (e, t)=>{
    let r, n = e, s = "", o = I.posix.parse(e).root || ".";
    if (Buffer.byteLength(n) < 100) r = [
        n,
        s,
        !1
    ];
    else {
        s = I.posix.dirname(n), n = I.posix.basename(n);
        do {
            Buffer.byteLength(n) <= 100 && Buffer.byteLength(s) <= t ? r = [
                n,
                s,
                !1
            ] : Buffer.byteLength(n) > 100 && Buffer.byteLength(s) <= t ? r = [
                n.slice(0, 99),
                s,
                !0
            ] : (n = I.posix.join(I.posix.basename(s), n), s = I.posix.dirname(s));
        }while (s !== o && void 0 === r)
        r || (r = [
            e.slice(0, 99),
            "",
            !0
        ]);
    }
    return r;
}, Zr = (e, t, r)=>e.subarray(t, t + r).toString("utf8").replace(/\0.*/, ""), en = (e, t, r)=>tn(rn(e, t, r)), tn = (e)=>void 0 === e ? void 0 : new Date(1e3 * e), rn = (e, t, r)=>128 & Number(e[t]) ? ((e)=>{
        let t = e[0], r = 128 === t ? jr(e.subarray(1, e.length)) : 255 === t ? $r(e) : null;
        if (null === r) throw Error("invalid base256 encoding");
        if (!Number.isSafeInteger(r)) throw Error("parsed number outside of javascript safe integer range");
        return r;
    })(e.subarray(t, t + r)) : nn(e, t, r), nn = (e, t, r)=>((e)=>isNaN(e) ? void 0 : e)(parseInt(e.subarray(t, t + r).toString("utf8").replace(/\0.*$/, "").trim(), 8)), sn = {
    12: 8589934591,
    8: 2097151
}, on = (e, t, r, n)=>void 0 !== n && (n > sn[r] || n < 0 ? (((e, t)=>{
        if (!Number.isSafeInteger(e)) throw Error("cannot encode number outside of javascript safe integer range");
        e < 0 ? Lr(e, t) : Ur(e, t);
    })(n, e.subarray(t, t + r)), !0) : (an(e, t, r, n), !1)), an = (e, t, r, n)=>e.write(cn(n, r), t, r, "ascii"), cn = (e, t)=>ln(Math.floor(e).toString(8), t), ln = (e, t)=>(e.length === t - 1 ? e : new Array(t - e.length - 1).join("0") + e + " ") + "\0", un = (e, t, r, n)=>void 0 !== n && on(e, t, r, n.getTime() / 1e3), dn = new Array(156).join("\0"), pn = (e, t, r, n)=>void 0 !== n && (e.write(n + dn, t, r, "utf8"), n.length !== Buffer.byteLength(n) || n.length > r), mn = class e {
    atime;
    mtime;
    ctime;
    charset;
    comment;
    gid;
    uid;
    gname;
    uname;
    linkpath;
    dev;
    ino;
    nlink;
    path;
    size;
    mode;
    global;
    constructor(e, t = !1){
        this.atime = e.atime, this.charset = e.charset, this.comment = e.comment, this.ctime = e.ctime, this.dev = e.dev, this.gid = e.gid, this.global = t, this.gname = e.gname, this.ino = e.ino, this.linkpath = e.linkpath, this.mtime = e.mtime, this.nlink = e.nlink, this.path = e.path, this.size = e.size, this.uid = e.uid, this.uname = e.uname;
    }
    encode() {
        let e = this.encodeBody();
        if ("" === e) return Buffer.allocUnsafe(0);
        let t = Buffer.byteLength(e), r = 512 * Math.ceil(1 + t / 512), n = Buffer.allocUnsafe(r);
        for(let e = 0; e < 512; e++)n[e] = 0;
        new Qr({
            path: ("PaxHeader/" + (0, I.basename)(this.path ?? "")).slice(0, 99),
            mode: this.mode || 420,
            uid: this.uid,
            gid: this.gid,
            size: t,
            mtime: this.mtime,
            type: this.global ? "GlobalExtendedHeader" : "ExtendedHeader",
            linkpath: "",
            uname: this.uname || "",
            gname: this.gname || "",
            devmaj: 0,
            devmin: 0,
            atime: this.atime,
            ctime: this.ctime
        }).encode(n), n.write(e, 512, t, "utf8");
        for(let e = t + 512; e < n.length; e++)n[e] = 0;
        return n;
    }
    encodeBody() {
        return this.encodeField("path") + this.encodeField("ctime") + this.encodeField("atime") + this.encodeField("dev") + this.encodeField("ino") + this.encodeField("nlink") + this.encodeField("charset") + this.encodeField("comment") + this.encodeField("gid") + this.encodeField("gname") + this.encodeField("linkpath") + this.encodeField("mtime") + this.encodeField("size") + this.encodeField("uid") + this.encodeField("uname");
    }
    encodeField(e) {
        if (void 0 === this[e]) return "";
        let t = this[e], r = " " + ("dev" === e || "ino" === e || "nlink" === e ? "SCHILY." : "") + e + "=" + (t instanceof Date ? t.getTime() / 1e3 : t) + "\n", n = Buffer.byteLength(r), s = Math.floor(Math.log(n) / Math.log(10)) + 1;
        return n + s >= Math.pow(10, s) && (s += 1), s + n + r;
    }
    static parse(t, r, n = !1) {
        return new e(hn(fn(t), r), n);
    }
}, hn = (e, t)=>t ? Object.assign({}, t, e) : e, fn = (e)=>e.replace(/\n$/, "").split("\n").reduce(gn, Object.create(null)), gn = (e, t)=>{
    let r = parseInt(t, 10);
    if (r !== Buffer.byteLength(t) + 1) return e;
    let n = (t = t.slice((r + " ").length)).split("="), s = n.shift();
    if (!s) return e;
    let o = s.replace(/^SCHILY\.(dev|ino|nlink)/, "$1"), i = n.join("=").replace(/\0.*/, "");
    switch(o){
        case "path":
        case "linkpath":
        case "type":
        case "charset":
        case "comment":
        case "gname":
        case "uname":
            e[o] = i;
            break;
        case "ctime":
        case "atime":
        case "mtime":
            e[o] = new Date(1e3 * Number(i));
            break;
        case "size":
            let t = +i;
            t >= 0 && (e[o] = t);
            break;
        case "gid":
        case "uid":
        case "dev":
        case "ino":
        case "nlink":
        case "mode":
            e[o] = +i;
    }
    return e;
}, yn = "win32" !== (process.env.TESTING_TAR_FAKE_PLATFORM || process.platform) ? (e)=>String(e) : (e)=>String(e).replaceAll(/\\/g, "/"), wn = class extends qt {
    extended;
    globalExtended;
    header;
    startBlockSize;
    blockRemain;
    remain;
    type;
    meta = !1;
    ignore = !1;
    path;
    mode;
    uid;
    gid;
    uname;
    gname;
    size = 0;
    mtime;
    atime;
    ctime;
    linkpath;
    dev;
    ino;
    nlink;
    invalid = !1;
    absolute;
    unsupported = !1;
    constructor(e, t, r){
        switch(super({}), this.pause(), this.extended = t, this.globalExtended = r, this.header = e, this.remain = e.size ?? 0, this.startBlockSize = 512 * Math.ceil(this.remain / 512), this.blockRemain = this.startBlockSize, this.type = e.type, this.type){
            case "File":
            case "OldFile":
            case "Link":
            case "SymbolicLink":
            case "CharacterDevice":
            case "BlockDevice":
            case "Directory":
            case "FIFO":
            case "ContiguousFile":
            case "GNUDumpDir":
                break;
            case "NextFileHasLongLinkpath":
            case "NextFileHasLongPath":
            case "OldGnuLongPath":
            case "GlobalExtendedHeader":
            case "ExtendedHeader":
            case "OldExtendedHeader":
                this.meta = !0;
                break;
            default:
                this.ignore = !0;
        }
        if (!e.path) throw new Error("no path provided for tar.ReadEntry");
        this.path = yn(e.path), this.mode = e.mode, this.mode && (this.mode = 4095 & this.mode), this.uid = e.uid, this.gid = e.gid, this.uname = e.uname, this.gname = e.gname, this.size = this.remain, this.mtime = e.mtime, this.atime = e.atime, this.ctime = e.ctime, this.linkpath = e.linkpath ? yn(e.linkpath) : void 0, this.uname = e.uname, this.gname = e.gname, t && this.#e(t), r && this.#e(r, !0);
    }
    write(e) {
        let t = e.length;
        if (t > this.blockRemain) throw new Error("writing more to entry than is appropriate");
        let r = this.remain, n = this.blockRemain;
        return this.remain = Math.max(0, r - t), this.blockRemain = Math.max(0, n - t), !!this.ignore || (r >= t ? super.write(e) : super.write(e.subarray(0, r)));
    }
    #e(e, t = !1) {
        e.path && (e.path = yn(e.path)), e.linkpath && (e.linkpath = yn(e.linkpath)), Object.assign(this, Object.fromEntries(Object.entries(e).filter(([e, r])=>!(null == r || "path" === e && t))));
    }
}, vn = (e, t, r, n = {})=>{
    e.file && (n.file = e.file), e.cwd && (n.cwd = e.cwd), n.code = r instanceof Error && r.code || t, n.tarCode = t, e.strict || !1 === n.recoverable ? r instanceof Error ? e.emit("error", Object.assign(r, n)) : e.emit("error", Object.assign(new Error(`${t}: ${r}`), n)) : (r instanceof Error && (n = Object.assign(r, n), r = r.message), e.emit("warn", t, r, n));
}, _n = Buffer.from([
    31,
    139
]), bn = Buffer.from([
    40,
    181,
    47,
    253
]), Sn = Math.max(_n.length, bn.length), kn = Symbol("state"), xn = Symbol("writeEntry"), En = Symbol("readEntry"), In = Symbol("nextEntry"), Tn = Symbol("processEntry"), Cn = Symbol("extendedHeader"), Pn = Symbol("globalExtendedHeader"), An = Symbol("meta"), Rn = Symbol("emitMeta"), Mn = Symbol("buffer"), Jn = Symbol("queue"), On = Symbol("ended"), Bn = Symbol("emittedEnd"), Dn = Symbol("emit"), qn = Symbol("unzip"), Nn = Symbol("consumeChunk"), Fn = Symbol("consumeChunkSub"), Un = Symbol("consumeBody"), Ln = Symbol("consumeMeta"), $n = Symbol("consumeHeader"), jn = Symbol("consuming"), Gn = Symbol("bufferConcat"), zn = Symbol("maybeEnd"), Wn = Symbol("writing"), Hn = Symbol("aborted"), Kn = Symbol("onDone"), Vn = Symbol("sawValidEntry"), Yn = Symbol("sawNullBlock"), Qn = Symbol("sawEOF"), Xn = Symbol("closeStream"), Zn = Symbol("compressedBytesRead"), es = Symbol("decompressedBytesRead"), ts = Symbol("checkDecompressionRatio"), rs = ()=>!0, ns = class extends Ue.EventEmitter {
    file;
    strict;
    maxMetaEntrySize;
    filter;
    brotli;
    zstd;
    maxDecompressionRatio;
    writable = !0;
    readable = !1;
    [Jn] = [];
    [Mn];
    [En];
    [xn];
    [kn] = "begin";
    [An] = "";
    [Cn];
    [Pn];
    [On] = !1;
    [qn];
    [Hn] = !1;
    [Vn];
    [Yn] = !1;
    [Qn] = !1;
    [Wn] = !1;
    [jn] = !1;
    [Bn] = !1;
    [Zn] = 0;
    [es] = 0;
    constructor(e = {}){
        super(), this.file = e.file || "", this.on(Kn, ()=>{
            ("begin" === this[kn] || !1 === this[Vn]) && this.warn("TAR_BAD_ARCHIVE", "Unrecognized archive format");
        }), e.ondone ? this.on(Kn, e.ondone) : this.on(Kn, ()=>{
            this.emit("prefinish"), this.emit("finish"), this.emit("end");
        }), this.strict = !!e.strict, this.maxDecompressionRatio = "number" == typeof e.maxDecompressionRatio ? e.maxDecompressionRatio : 1e3, this.maxMetaEntrySize = e.maxMetaEntrySize || 1048576, this.filter = "function" == typeof e.filter ? e.filter : rs;
        let t = e.file && (e.file.endsWith(".tar.br") || e.file.endsWith(".tbr"));
        this.brotli = e.gzip || e.zstd || void 0 === e.brotli ? !!t && void 0 : e.brotli;
        let r = e.file && (e.file.endsWith(".tar.zst") || e.file.endsWith(".tzst"));
        this.zstd = e.gzip || e.brotli || void 0 === e.zstd ? !!r || void 0 : e.zstd, this.on("end", ()=>this[Xn]()), "function" == typeof e.onwarn && this.on("warn", e.onwarn), "function" == typeof e.onReadEntry && this.on("entry", e.onReadEntry);
    }
    warn(e, t, r = {}) {
        vn(this, e, t, r);
    }
    [$n](e, t) {
        let r;
        void 0 === this[Vn] && (this[Vn] = !1);
        try {
            r = new Qr(e, t, this[Cn], this[Pn]);
        } catch (e) {
            return this.warn("TAR_ENTRY_INVALID", e);
        }
        if (r.nullBlock) this[Yn] ? (this[Qn] = !0, "begin" === this[kn] && (this[kn] = "header"), this[Dn]("eof")) : (this[Yn] = !0, this[Dn]("nullBlock"));
        else if (this[Yn] = !1, r.cksumValid) if (r.path) {
            let e = r.type;
            if (/^(Symbolic)?Link$/.test(e) && !r.linkpath) this.warn("TAR_ENTRY_INVALID", "linkpath required", {
                header: r
            });
            else if (/^(Symbolic)?Link$/.test(e) || /^(Global)?ExtendedHeader$/.test(e) || !r.linkpath) {
                let e = this[xn] = new wn(r, this[Cn], this[Pn]);
                if (!this[Vn]) if (e.remain) {
                    let t = ()=>{
                        e.invalid || (this[Vn] = !0);
                    };
                    e.on("end", t);
                } else this[Vn] = !0;
                e.meta ? e.size > this.maxMetaEntrySize ? (e.ignore = !0, this[Dn]("ignoredEntry", e), this[kn] = "ignore", e.resume()) : e.size > 0 && (this[An] = "", e.on("data", (e)=>this[An] += e), this[kn] = "meta") : (this[Cn] = void 0, e.ignore = e.ignore || !this.filter(e.path, e), e.ignore ? (this[Dn]("ignoredEntry", e), this[kn] = e.remain ? "ignore" : "header", e.resume()) : (e.remain ? this[kn] = "body" : (this[kn] = "header", e.end()), this[En] ? this[Jn].push(e) : (this[Jn].push(e), this[In]())));
            } else this.warn("TAR_ENTRY_INVALID", "linkpath forbidden", {
                header: r
            });
        } else this.warn("TAR_ENTRY_INVALID", "path is required", {
            header: r
        });
        else this.warn("TAR_ENTRY_INVALID", "checksum failure", {
            header: r
        });
    }
    [Xn]() {
        queueMicrotask(()=>this.emit("close"));
    }
    [Tn](e) {
        let t = !0;
        if (e) if (Array.isArray(e)) {
            let [t, ...r] = e;
            this.emit(t, ...r);
        } else this[En] = e, this.emit("entry", e), e.emittedEnd || (e.on("end", ()=>this[In]()), t = !1);
        else this[En] = void 0, t = !1;
        return t;
    }
    [In]() {
        do {}while (this[Tn](this[Jn].shift()))
        if (0 === this[Jn].length) {
            let e = this[En];
            !e || e.flowing || e.size === e.remain ? this[Wn] || this.emit("drain") : e.once("drain", ()=>this.emit("drain"));
        }
    }
    [Un](e, t) {
        let r = this[xn];
        if (!r) throw new Error("attempt to consume body without entry??");
        let n = r.blockRemain ?? 0, s = n >= e.length && 0 === t ? e : e.subarray(t, t + n);
        return r.write(s), r.blockRemain || (this[kn] = "header", this[xn] = void 0, r.end()), s.length;
    }
    [Ln](e, t) {
        let r = this[xn], n = this[Un](e, t);
        return !this[xn] && r && this[Rn](r), n;
    }
    [Dn](e, t, r) {
        0 !== this[Jn].length || this[En] ? this[Jn].push([
            e,
            t,
            r
        ]) : this.emit(e, t, r);
    }
    [Rn](e) {
        switch(this[Dn]("meta", this[An]), e.type){
            case "ExtendedHeader":
            case "OldExtendedHeader":
                this[Cn] = mn.parse(this[An], this[Cn], !1);
                break;
            case "GlobalExtendedHeader":
                this[Pn] = mn.parse(this[An], this[Pn], !0);
                break;
            case "NextFileHasLongPath":
            case "OldGnuLongPath":
                {
                    let e = this[Cn] ?? Object.create(null);
                    this[Cn] = e, e.path = this[An].replace(/\0.*/, "");
                    break;
                }
            case "NextFileHasLongLinkpath":
                {
                    let e = this[Cn] || Object.create(null);
                    this[Cn] = e, e.linkpath = this[An].replace(/\0.*/, "");
                    break;
                }
            default:
                throw new Error("unknown meta: " + e.type);
        }
    }
    abort(e) {
        if (!this[Hn]) {
            if (this[qn]) {
                let e = this[qn];
                e.write = ()=>!0, e.end = ()=>e, e.emit = ()=>!1, e.destroy?.();
            }
            this[Hn] = !0, this.emit("abort", e), this.warn("TAR_ABORT", e, {
                recoverable: !1
            });
        }
    }
    [ts](e) {
        this[es] += e.length;
        let t = this[es] / this[Zn];
        return !(t > this.maxDecompressionRatio) || (this.abort(new Error(`max decompression ratio exceeded: ${t.toFixed(2)} > ${this.maxDecompressionRatio}`)), !1);
    }
    write(e, t, r) {
        if ("function" == typeof t && (r = t, t = void 0), "string" == typeof e && (e = Buffer.from(e, "string" == typeof t ? t : "utf8")), this[Hn]) return r?.(), !1;
        if ((void 0 === this[qn] || void 0 === this.brotli && !1 === this[qn]) && e) {
            if (this[Mn] && (e = Buffer.concat([
                this[Mn],
                e
            ]), this[Mn] = void 0), e.length < Sn) return this[Mn] = e, r?.(), !0;
            for(let t = 0; void 0 === this[qn] && t < _n.length; t++)e[t] !== _n[t] && (this[qn] = !1);
            let t = !1;
            if (!1 === this[qn] && !1 !== this.zstd) {
                t = !0;
                for(let r = 0; r < bn.length; r++)if (e[r] !== bn[r]) {
                    t = !1;
                    break;
                }
            }
            let n = void 0 === this.brotli && !t;
            if (!1 === this[qn] && n) if (e.length < 512) {
                if (!this[On]) return this[Mn] = e, r?.(), !0;
                this.brotli = !0;
            } else try {
                new Qr(e.subarray(0, 512)), this.brotli = !1;
            } catch  {
                this.brotli = !0;
            }
            if (void 0 === this[qn] || !1 === this[qn] && (this.brotli || t)) {
                let n = this[On];
                this[On] = !1, this[qn] = void 0 === this[qn] ? new Jr({}) : t ? new Fr({}) : new Dr({}), this[qn].on("data", (e)=>{
                    this[ts](e) && this[Nn](e);
                }), this[qn].on("error", (e)=>{
                    this[Hn] || this.abort(e);
                }), this[qn].on("end", ()=>{
                    this[On] = !0, this[Nn]();
                }), this[Wn] = !0, this[Zn] += e.length;
                let s = !!this[qn][n ? "end" : "write"](e);
                return this[Wn] = !1, r?.(), s;
            }
        }
        this[Wn] = !0, this[qn] ? (this[Zn] += e.length, this[qn].write(e)) : this[Nn](e), this[Wn] = !1;
        let n = !(this[Jn].length > 0) && (!this[En] || this[En].flowing);
        return !n && 0 === this[Jn].length && this[En]?.once("drain", ()=>this.emit("drain")), r?.(), n;
    }
    [Gn](e) {
        e && !this[Hn] && (this[Mn] = this[Mn] ? Buffer.concat([
            this[Mn],
            e
        ]) : e);
    }
    [zn]() {
        if (this[On] && !this[Bn] && !this[Hn] && !this[jn]) {
            this[Bn] = !0;
            let e = this[xn];
            if (e?.blockRemain) {
                let t = this[Mn] ? this[Mn].length : 0;
                this.warn("TAR_BAD_ARCHIVE", `Truncated input (needed ${e.blockRemain} more bytes, only ${t} available)`, {
                    entry: e
                }), this[Mn] && e.write(this[Mn]), e.end();
            }
            this[Dn](Kn);
        }
    }
    [Nn](e) {
        if (this[jn] && e) this[Gn](e);
        else if (e || this[Mn]) {
            if (e) {
                if (this[jn] = !0, this[Mn]) {
                    this[Gn](e);
                    let t = this[Mn];
                    this[Mn] = void 0, this[Fn](t);
                } else this[Fn](e);
                for(; this[Mn] && this[Mn]?.length >= 512 && !this[Hn] && !this[Qn];){
                    let e = this[Mn];
                    this[Mn] = void 0, this[Fn](e);
                }
                this[jn] = !1;
            }
        } else this[zn]();
        (!this[Mn] || this[On]) && this[zn]();
    }
    [Fn](e) {
        let t = 0, r = e.length;
        for(; t + 512 <= r && !this[Hn] && !this[Qn];)switch(this[kn]){
            case "begin":
            case "header":
                this[$n](e, t), t += 512;
                break;
            case "ignore":
            case "body":
                t += this[Un](e, t);
                break;
            case "meta":
                t += this[Ln](e, t);
                break;
            default:
                throw new Error("invalid state: " + this[kn]);
        }
        t < r && (this[Mn] = this[Mn] ? Buffer.concat([
            e.subarray(t),
            this[Mn]
        ]) : e.subarray(t));
    }
    end(e, t, r) {
        return "function" == typeof e && (r = e, t = void 0, e = void 0), "function" == typeof t && (r = t, t = void 0), "string" == typeof e && (e = Buffer.from(e, t)), r && this.once("finish", r), this[Hn] || (this[qn] ? (e && (this[Zn] += e.length, this[qn].write(e)), this[qn].end()) : (this[On] = !0, (void 0 === this.brotli || void 0 === this.zstd) && (e = e || Buffer.alloc(0)), e && this.write(e), this[zn]())), this;
    }
}, ss = (e)=>{
    let t = e.length - 1, r = -1;
    for(; t > -1 && "/" === e.charAt(t);)r = t, t--;
    return -1 === r ? e : e.slice(0, r);
}, os = (e, t)=>{
    let r = new Map(t.map((e)=>[
            ss(e),
            !0
        ])), n = e.filter, s = (e, t = "", n = 0)=>{
        if (n >= 100) return r.set(e, !1), !1;
        let o, i = t || (0, ze.parse)(e).root || ".";
        if (e === i) o = !1;
        else {
            let t = r.get(e);
            o = void 0 !== t ? t : s((0, ze.dirname)(e), i, n + 1);
        }
        return r.set(e, o), o;
    };
    e.filter = n ? (e, t)=>n(e, t) && s(ss(e)) : (e)=>s(ss(e));
}, is = _r((e)=>{
    let t, r = new ns(e), n = e.file;
    try {
        t = Ge.openSync(n, "r");
        let s = Ge.fstatSync(t), o = e.maxReadSize || 16777216;
        if (s.size < o) {
            let e = Buffer.allocUnsafe(s.size), n = Ge.readSync(t, e, 0, s.size, 0);
            r.end(n === e.byteLength ? e : e.subarray(0, n));
        } else {
            let e = 0, n = Buffer.allocUnsafe(o);
            for(; e < s.size;){
                let s = Ge.readSync(t, n, 0, o, e);
                if (0 === s) break;
                e += s, r.write(n.subarray(0, s));
            }
            r.end();
        }
    } finally{
        if ("number" == typeof t) try {
            Ge.closeSync(t);
        } catch  {}
    }
}, (e, t)=>{
    let r = new ns(e), n = e.maxReadSize || 16777216, s = e.file;
    return new Promise((e, t)=>{
        r.on("error", t), r.on("end", e), Ge.stat(s, (e, o)=>{
            if (e) t(e);
            else {
                let e = new mr(s, {
                    readSize: n,
                    size: o.size
                });
                e.on("error", t), e.pipe(r);
            }
        });
    });
}, (e)=>new ns(e), (e)=>new ns(e), (e, t)=>{
    t?.length && os(e, t), e.noResume || ((e)=>{
        let t = e.onReadEntry;
        e.onReadEntry = t ? (e)=>{
            t(e), e.resume();
        } : (e)=>e.resume();
    })(e);
}), as = (e, t, r)=>(e &= 4095, r && (e = -19 & e | 384), t && (256 & e && (e |= 64), 32 & e && (e |= 8), 4 & e && (e |= 1)), e), { isAbsolute: cs, parse: ls } = I.win32, us = (e)=>{
    let t = "", r = ls(e);
    for(; cs(e) || r.root;){
        let n = "/" === e.charAt(0) && "//?/" !== e.slice(0, 4) ? "/" : r.root;
        e = e.slice(n.length), t += n, r = ls(e);
    }
    return [
        t,
        e
    ];
}, ds = [
    "|",
    "<",
    ">",
    "?",
    ":"
], ps = ds.map((e)=>String.fromCodePoint(61440 + Number(e.codePointAt(0)))), ms = new Map(ds.map((e, t)=>[
        e,
        ps[t]
    ])), hs = new Map(ps.map((e, t)=>[
        e,
        ds[t]
    ])), fs = (e)=>ds.reduce((e, t)=>e.split(t).join(ms.get(t)), e), gs = (e, t)=>t ? (e = yn(e).replace(/^\.(\/|$)/, ""), ss(t) + "/" + e) : yn(e), ys = Symbol("process"), ws = Symbol("file"), vs = Symbol("directory"), _s = Symbol("symlink"), bs = Symbol("hardlink"), Ss = Symbol("header"), ks = Symbol("read"), xs = Symbol("lstat"), Es = Symbol("onlstat"), Is = Symbol("onread"), Ts = Symbol("onreadlink"), Cs = Symbol("openfile"), Ps = Symbol("onopenfile"), As = Symbol("close"), Rs = Symbol("mode"), Ms = Symbol("awaitDrain"), Js = Symbol("ondrain"), Os = Symbol("prefix"), Bs = class extends qt {
    path;
    portable;
    myuid = process.getuid && process.getuid() || 0;
    myuser = process.env.USER || "";
    maxReadSize;
    linkCache;
    statCache;
    preservePaths;
    cwd;
    strict;
    mtime;
    noPax;
    noMtime;
    prefix;
    fd;
    blockLen = 0;
    blockRemain = 0;
    buf;
    pos = 0;
    remain = 0;
    length = 0;
    offset = 0;
    win32;
    absolute;
    header;
    type;
    linkpath;
    stat;
    onWriteEntry;
    #e = !1;
    constructor(e, t = {}){
        let r = vr(t);
        super(), this.path = yn(e), this.portable = !!r.portable, this.maxReadSize = r.maxReadSize || 16777216, this.linkCache = r.linkCache || new Map, this.statCache = r.statCache || new Map, this.preservePaths = !!r.preservePaths, this.cwd = yn(r.cwd || process.cwd()), this.strict = !!r.strict, this.noPax = !!r.noPax, this.noMtime = !!r.noMtime, this.mtime = r.mtime, this.prefix = r.prefix ? yn(r.prefix) : void 0, this.onWriteEntry = r.onWriteEntry, "function" == typeof r.onwarn && this.on("warn", r.onwarn);
        let n = !1;
        if (!this.preservePaths) {
            let [e, t] = us(this.path);
            e && "string" == typeof t && (this.path = t, n = e);
        }
        var s;
        this.win32 = !!r.win32 || "win32" === process.platform, this.win32 && (this.path = (s = this.path.replaceAll(/\\/g, "/"), ps.reduce((e, t)=>e.split(t).join(hs.get(t)), s)), e = e.replaceAll(/\\/g, "/")), this.absolute = yn(r.absolute || ze.resolve(this.cwd, e)), "" === this.path && (this.path = "./"), n && this.warn("TAR_ENTRY_INFO", `stripping ${n} from absolute path`, {
            entry: this,
            path: n + this.path
        });
        let o = this.statCache.get(this.absolute);
        o ? this[Es](o) : this[xs]();
    }
    warn(e, t, r = {}) {
        return vn(this, e, t, r);
    }
    emit(e, ...t) {
        return "error" === e && (this.#e = !0), super.emit(e, ...t);
    }
    [xs]() {
        Le.lstat(this.absolute, (e, t)=>{
            if (e) return this.emit("error", e);
            this[Es](t);
        });
    }
    [Es](e) {
        this.statCache.set(this.absolute, e), this.stat = e, e.isFile() || (e.size = 0), this.type = Ns(e), this.emit("stat", e), this[ys]();
    }
    [ys]() {
        switch(this.type){
            case "File":
                return this[ws]();
            case "Directory":
                return this[vs]();
            case "SymbolicLink":
                return this[_s]();
            default:
                return this.end();
        }
    }
    [Rs](e) {
        return as(e, "Directory" === this.type, this.portable);
    }
    [Os](e) {
        return gs(e, this.prefix);
    }
    [Ss]() {
        if (!this.stat) throw new Error("cannot write header before stat");
        "Directory" === this.type && this.portable && (this.noMtime = !0), this.onWriteEntry?.(this), this.header = new Qr({
            path: this[Os](this.path),
            linkpath: "Link" === this.type && void 0 !== this.linkpath ? this[Os](this.linkpath) : this.linkpath,
            mode: this[Rs](this.stat.mode),
            uid: this.portable ? void 0 : this.stat.uid,
            gid: this.portable ? void 0 : this.stat.gid,
            size: this.stat.size,
            mtime: this.noMtime ? void 0 : this.mtime || this.stat.mtime,
            type: "Unsupported" === this.type ? void 0 : this.type,
            uname: this.portable ? void 0 : this.stat.uid === this.myuid ? this.myuser : "",
            atime: this.portable ? void 0 : this.stat.atime,
            ctime: this.portable ? void 0 : this.stat.ctime
        }), this.header.encode() && !this.noPax && super.write(new mn({
            atime: this.portable ? void 0 : this.header.atime,
            ctime: this.portable ? void 0 : this.header.ctime,
            gid: this.portable ? void 0 : this.header.gid,
            mtime: this.noMtime ? void 0 : this.mtime || this.header.mtime,
            path: this[Os](this.path),
            linkpath: "Link" === this.type && void 0 !== this.linkpath ? this[Os](this.linkpath) : this.linkpath,
            size: this.header.size,
            uid: this.portable ? void 0 : this.header.uid,
            uname: this.portable ? void 0 : this.header.uname,
            dev: this.portable ? void 0 : this.stat.dev,
            ino: this.portable ? void 0 : this.stat.ino,
            nlink: this.portable ? void 0 : this.stat.nlink
        }).encode());
        let e = this.header?.block;
        if (!e) throw new Error("failed to encode header");
        super.write(e);
    }
    [vs]() {
        if (!this.stat) throw new Error("cannot create directory entry without stat");
        "/" !== this.path.slice(-1) && (this.path += "/"), this.stat.size = 0, this[Ss](), this.end();
    }
    [_s]() {
        Le.readlink(this.absolute, (e, t)=>{
            if (e) return this.emit("error", e);
            this[Ts](t);
        });
    }
    [Ts](e) {
        this.linkpath = yn(e), this[Ss](), this.end();
    }
    [bs](e) {
        if (!this.stat) throw new Error("cannot create link entry without stat");
        this.type = "Link", this.linkpath = yn(ze.relative(this.cwd, e)), this.stat.size = 0, this[Ss](), this.end();
    }
    [ws]() {
        if (!this.stat) throw new Error("cannot create file entry without stat");
        if (this.stat.nlink > 1) {
            let e = `${this.stat.dev}:${this.stat.ino}`, t = this.linkCache.get(e);
            if (0 === t?.indexOf(this.cwd)) return this[bs](t);
            this.linkCache.set(e, this.absolute);
        }
        if (this[Ss](), 0 === this.stat.size) return this.end();
        this[Cs]();
    }
    [Cs]() {
        Le.open(this.absolute, "r", (e, t)=>{
            if (e) return this.emit("error", e);
            this[Ps](t);
        });
    }
    [Ps](e) {
        if (this.fd = e, this.#e) return this[As]();
        if (!this.stat) throw new Error("should stat before calling onopenfile");
        this.blockLen = 512 * Math.ceil(this.stat.size / 512), this.blockRemain = this.blockLen;
        let t = Math.min(this.blockLen, this.maxReadSize);
        this.buf = Buffer.allocUnsafe(t), this.offset = 0, this.pos = 0, this.remain = this.stat.size, this.length = this.buf.length, this[ks]();
    }
    [ks]() {
        let { fd: e, buf: t, offset: r, length: n, pos: s } = this;
        if (void 0 === e || void 0 === t) throw new Error("cannot read file without first opening");
        Le.read(e, t, r, n, s, (e, t)=>{
            if (e) return this[As](()=>this.emit("error", e));
            this[Is](t);
        });
    }
    [As](e = ()=>{}) {
        void 0 !== this.fd && Le.close(this.fd, e);
    }
    [Is](e) {
        if (e <= 0 && this.remain > 0) {
            let e = Object.assign(new Error("encountered unexpected EOF"), {
                path: this.absolute,
                syscall: "read",
                code: "EOF"
            });
            return this[As](()=>this.emit("error", e));
        }
        if (e > this.remain) {
            let e = Object.assign(new Error("did not encounter expected EOF"), {
                path: this.absolute,
                syscall: "read",
                code: "EOF"
            });
            return this[As](()=>this.emit("error", e));
        }
        if (!this.buf) throw new Error("should have created buffer prior to reading");
        if (e === this.remain) for(let t = e; t < this.length && e < this.blockRemain; t++)this.buf[t + this.offset] = 0, e++, this.remain++;
        let t = 0 === this.offset && e === this.buf.length ? this.buf : this.buf.subarray(this.offset, this.offset + e);
        this.write(t) ? this[Js]() : this[Ms](()=>this[Js]());
    }
    [Ms](e) {
        this.once("drain", e);
    }
    write(e, t, r) {
        if ("function" == typeof t && (r = t, t = void 0), "string" == typeof e && (e = Buffer.from(e, "string" == typeof t ? t : "utf8")), this.blockRemain < e.length) {
            let e = Object.assign(new Error("writing more data than expected"), {
                path: this.absolute
            });
            return this.emit("error", e);
        }
        return this.remain -= e.length, this.blockRemain -= e.length, this.pos += e.length, this.offset += e.length, super.write(e, null, r);
    }
    [Js]() {
        if (!this.remain) return this.blockRemain && super.write(Buffer.alloc(this.blockRemain)), this[As]((e)=>e ? this.emit("error", e) : this.end());
        if (!this.buf) throw new Error("buffer lost somehow in ONDRAIN");
        this.offset >= this.length && (this.buf = Buffer.allocUnsafe(Math.min(this.blockRemain, this.buf.length)), this.offset = 0), this.length = this.buf.length - this.offset, this[ks]();
    }
}, Ds = class extends Bs {
    sync = !0;
    [xs]() {
        this[Es](Le.lstatSync(this.absolute));
    }
    [_s]() {
        this[Ts](Le.readlinkSync(this.absolute));
    }
    [Cs]() {
        this[Ps](Le.openSync(this.absolute, "r"));
    }
    [ks]() {
        let e = !0;
        try {
            let { fd: t, buf: r, offset: n, length: s, pos: o } = this;
            if (void 0 === t || void 0 === r) throw new Error("fd and buf must be set in READ method");
            let i = Le.readSync(t, r, n, s, o);
            this[Is](i), e = !1;
        } finally{
            if (e) try {
                this[As](()=>{});
            } catch  {}
        }
    }
    [Ms](e) {
        e();
    }
    [As](e = ()=>{}) {
        void 0 !== this.fd && Le.closeSync(this.fd), e();
    }
}, qs = class extends qt {
    blockLen = 0;
    blockRemain = 0;
    buf = 0;
    pos = 0;
    remain = 0;
    length = 0;
    preservePaths;
    portable;
    strict;
    noPax;
    noMtime;
    readEntry;
    type;
    prefix;
    path;
    mode;
    uid;
    gid;
    uname;
    gname;
    header;
    mtime;
    atime;
    ctime;
    linkpath;
    size;
    onWriteEntry;
    warn(e, t, r = {}) {
        return vn(this, e, t, r);
    }
    constructor(e, t = {}){
        let r = vr(t);
        super(), this.preservePaths = !!r.preservePaths, this.portable = !!r.portable, this.strict = !!r.strict, this.noPax = !!r.noPax, this.noMtime = !!r.noMtime, this.onWriteEntry = r.onWriteEntry, this.readEntry = e;
        let { type: n } = e;
        if ("Unsupported" === n) throw new Error("writing entry that should be ignored");
        this.type = n, "Directory" === this.type && this.portable && (this.noMtime = !0), this.prefix = r.prefix, this.path = yn(e.path), this.mode = void 0 !== e.mode ? this[Rs](e.mode) : void 0, this.uid = this.portable ? void 0 : e.uid, this.gid = this.portable ? void 0 : e.gid, this.uname = this.portable ? void 0 : e.uname, this.gname = this.portable ? void 0 : e.gname, this.size = e.size, this.mtime = this.noMtime ? void 0 : r.mtime || e.mtime, this.atime = this.portable ? void 0 : e.atime, this.ctime = this.portable ? void 0 : e.ctime, this.linkpath = void 0 !== e.linkpath ? yn(e.linkpath) : void 0, "function" == typeof r.onwarn && this.on("warn", r.onwarn);
        let s = !1;
        if (!this.preservePaths) {
            let [e, t] = us(this.path);
            e && "string" == typeof t && (this.path = t, s = e);
        }
        this.remain = e.size, this.blockRemain = e.startBlockSize, this.onWriteEntry?.(this), this.header = new Qr({
            path: this[Os](this.path),
            linkpath: "Link" === this.type && void 0 !== this.linkpath ? this[Os](this.linkpath) : this.linkpath,
            mode: this.mode,
            uid: this.portable ? void 0 : this.uid,
            gid: this.portable ? void 0 : this.gid,
            size: this.size,
            mtime: this.noMtime ? void 0 : this.mtime,
            type: this.type,
            uname: this.portable ? void 0 : this.uname,
            atime: this.portable ? void 0 : this.atime,
            ctime: this.portable ? void 0 : this.ctime
        }), s && this.warn("TAR_ENTRY_INFO", `stripping ${s} from absolute path`, {
            entry: this,
            path: s + this.path
        }), this.header.encode() && !this.noPax && super.write(new mn({
            atime: this.portable ? void 0 : this.atime,
            ctime: this.portable ? void 0 : this.ctime,
            gid: this.portable ? void 0 : this.gid,
            mtime: this.noMtime ? void 0 : this.mtime,
            path: this[Os](this.path),
            linkpath: "Link" === this.type && void 0 !== this.linkpath ? this[Os](this.linkpath) : this.linkpath,
            size: this.size,
            uid: this.portable ? void 0 : this.uid,
            uname: this.portable ? void 0 : this.uname,
            dev: this.portable ? void 0 : this.readEntry.dev,
            ino: this.portable ? void 0 : this.readEntry.ino,
            nlink: this.portable ? void 0 : this.readEntry.nlink
        }).encode());
        let o = this.header?.block;
        if (!o) throw new Error("failed to encode header");
        super.write(o), e.pipe(this);
    }
    [Os](e) {
        return gs(e, this.prefix);
    }
    [Rs](e) {
        return as(e, "Directory" === this.type, this.portable);
    }
    write(e, t, r) {
        "function" == typeof t && (r = t, t = void 0), "string" == typeof e && (e = Buffer.from(e, "string" == typeof t ? t : "utf8"));
        let n = e.length;
        if (n > this.blockRemain) throw new Error("writing more to entry than is appropriate");
        return this.blockRemain -= n, super.write(e, r);
    }
    end(e, t, r) {
        return this.blockRemain && super.write(Buffer.alloc(this.blockRemain)), "function" == typeof e && (r = e, t = void 0, e = void 0), "function" == typeof t && (r = t, t = void 0), "string" == typeof e && (e = Buffer.from(e, t ?? "utf8")), r && this.once("finish", r), e ? super.end(e, r) : super.end(r), this;
    }
}, Ns = (e)=>e.isFile() ? "File" : e.isDirectory() ? "Directory" : e.isSymbolicLink() ? "SymbolicLink" : "Unsupported", Fs = class e {
    tail;
    head;
    length = 0;
    static create(t = []) {
        return new e(t);
    }
    constructor(e = []){
        for (let t of e)this.push(t);
    }
    *[Symbol.iterator]() {
        for(let e = this.head; e; e = e.next)yield e.value;
    }
    removeNode(e) {
        if (e.list !== this) throw new Error("removing node which does not belong to this list");
        let t = e.next, r = e.prev;
        return t && (t.prev = r), r && (r.next = t), e === this.head && (this.head = t), e === this.tail && (this.tail = r), this.length--, e.next = void 0, e.prev = void 0, e.list = void 0, t;
    }
    unshiftNode(e) {
        if (e === this.head) return;
        e.list && e.list.removeNode(e);
        let t = this.head;
        e.list = this, e.next = t, t && (t.prev = e), this.head = e, this.tail || (this.tail = e), this.length++;
    }
    pushNode(e) {
        if (e === this.tail) return;
        e.list && e.list.removeNode(e);
        let t = this.tail;
        e.list = this, e.prev = t, t && (t.next = e), this.tail = e, this.head || (this.head = e), this.length++;
    }
    push(...e) {
        for(let t = 0, r = e.length; t < r; t++)Ls(this, e[t]);
        return this.length;
    }
    unshift(...e) {
        for(var t = 0, r = e.length; t < r; t++)$s(this, e[t]);
        return this.length;
    }
    pop() {
        if (!this.tail) return;
        let e = this.tail.value, t = this.tail;
        return this.tail = this.tail.prev, this.tail ? this.tail.next = void 0 : this.head = void 0, t.list = void 0, this.length--, e;
    }
    shift() {
        if (!this.head) return;
        let e = this.head.value, t = this.head;
        return this.head = this.head.next, this.head ? this.head.prev = void 0 : this.tail = void 0, t.list = void 0, this.length--, e;
    }
    forEach(e, t) {
        t = t || this;
        for(let r = this.head, n = 0; r; n++)e.call(t, r.value, n, this), r = r.next;
    }
    forEachReverse(e, t) {
        t = t || this;
        for(let r = this.tail, n = this.length - 1; r; n--)e.call(t, r.value, n, this), r = r.prev;
    }
    get(e) {
        let t = 0, r = this.head;
        for(; r && t < e; t++)r = r.next;
        if (t === e && r) return r.value;
    }
    getReverse(e) {
        let t = 0, r = this.tail;
        for(; r && t < e; t++)r = r.prev;
        if (t === e && r) return r.value;
    }
    map(t, r) {
        r = r || this;
        let n = new e;
        for(let e = this.head; e;)n.push(t.call(r, e.value, this)), e = e.next;
        return n;
    }
    mapReverse(t, r) {
        r = r || this;
        var n = new e;
        for(let e = this.tail; e;)n.push(t.call(r, e.value, this)), e = e.prev;
        return n;
    }
    reduce(e, t) {
        let r, n = this.head;
        if (arguments.length > 1) r = t;
        else {
            if (!this.head) throw new TypeError("Reduce of empty list with no initial value");
            n = this.head.next, r = this.head.value;
        }
        for(var s = 0; n; s++)r = e(r, n.value, s), n = n.next;
        return r;
    }
    reduceReverse(e, t) {
        let r, n = this.tail;
        if (arguments.length > 1) r = t;
        else {
            if (!this.tail) throw new TypeError("Reduce of empty list with no initial value");
            n = this.tail.prev, r = this.tail.value;
        }
        for(let t = this.length - 1; n; t--)r = e(r, n.value, t), n = n.prev;
        return r;
    }
    toArray() {
        let e = new Array(this.length);
        for(let t = 0, r = this.head; r; t++)e[t] = r.value, r = r.next;
        return e;
    }
    toArrayReverse() {
        let e = new Array(this.length);
        for(let t = 0, r = this.tail; r; t++)e[t] = r.value, r = r.prev;
        return e;
    }
    slice(t = 0, r = this.length) {
        r < 0 && (r += this.length), t < 0 && (t += this.length);
        let n = new e;
        if (r < t || r < 0) return n;
        t < 0 && (t = 0), r > this.length && (r = this.length);
        let s = this.head, o = 0;
        for(o = 0; s && o < t; o++)s = s.next;
        for(; s && o < r; o++, s = s.next)n.push(s.value);
        return n;
    }
    sliceReverse(t = 0, r = this.length) {
        r < 0 && (r += this.length), t < 0 && (t += this.length);
        let n = new e;
        if (r < t || r < 0) return n;
        t < 0 && (t = 0), r > this.length && (r = this.length);
        let s = this.length, o = this.tail;
        for(; o && s > r; s--)o = o.prev;
        for(; o && s > t; s--, o = o.prev)n.push(o.value);
        return n;
    }
    splice(e, t = 0, ...r) {
        e > this.length && (e = this.length - 1), e < 0 && (e = this.length + e);
        let n = this.head;
        for(let t = 0; n && t < e; t++)n = n.next;
        let s = [];
        for(let e = 0; n && e < t; e++)s.push(n.value), n = this.removeNode(n);
        n ? n !== this.tail && (n = n.prev) : n = this.tail;
        for (let e of r)n = Us(this, n, e);
        return s;
    }
    reverse() {
        let e = this.head, t = this.tail;
        for(let t = e; t; t = t.prev){
            let e = t.prev;
            t.prev = t.next, t.next = e;
        }
        return this.head = t, this.tail = e, this;
    }
};
function Us(e, t, r) {
    let n = t, s = t ? t.next : e.head, o = new js(r, n, s, e);
    return void 0 === o.next && (e.tail = o), void 0 === o.prev && (e.head = o), e.length++, o;
}
function Ls(e, t) {
    e.tail = new js(t, e.tail, void 0, e), e.head || (e.head = e.tail), e.length++;
}
function $s(e, t) {
    e.head = new js(t, void 0, e.head, e), e.tail || (e.tail = e.head), e.length++;
}
var js = class {
    list;
    next;
    prev;
    value;
    constructor(e, t, r, n){
        this.list = n, this.value = e, t ? (t.next = this, this.prev = t) : this.prev = void 0, r ? (r.prev = this, this.next = r) : this.next = void 0;
    }
}, Gs = class {
    path;
    absolute;
    entry;
    stat;
    readdir;
    pending = !1;
    pendingLink = !1;
    ignore = !1;
    piped = !1;
    constructor(e, t){
        this.path = e || "./", this.absolute = t;
    }
}, zs = Buffer.alloc(1024), Ws = Symbol("onStat"), Hs = Symbol("ended"), Ks = Symbol("queue"), Vs = Symbol("pendingLinks"), Ys = Symbol("current"), Qs = Symbol("process"), Xs = Symbol("processing"), Zs = Symbol("processJob"), eo = Symbol("jobs"), to = Symbol("jobDone"), ro = Symbol("addFSEntry"), no = Symbol("addTarEntry"), so = Symbol("stat"), oo = Symbol("readdir"), io = Symbol("onreaddir"), ao = Symbol("pipe"), co = Symbol("entry"), lo = Symbol("entryOpt"), uo = Symbol("writeEntryClass"), po = Symbol("write"), mo = Symbol("ondrain"), ho = class extends qt {
    sync = !1;
    opt;
    cwd;
    maxReadSize;
    preservePaths;
    strict;
    noPax;
    prefix;
    linkCache;
    statCache;
    file;
    portable;
    zip;
    readdirCache;
    noDirRecurse;
    follow;
    noMtime;
    mtime;
    filter;
    jobs;
    [uo];
    onWriteEntry;
    [Ks];
    [Vs] = new Map;
    [eo] = 0;
    [Xs] = !1;
    [Hs] = !1;
    constructor(e = {}){
        if (super(), this.opt = e, this.file = e.file || "", this.cwd = e.cwd || process.cwd(), this.maxReadSize = e.maxReadSize, this.preservePaths = !!e.preservePaths, this.strict = !!e.strict, this.noPax = !!e.noPax, this.prefix = yn(e.prefix || ""), this.linkCache = e.linkCache || new Map, this.statCache = e.statCache || new Map, this.readdirCache = e.readdirCache || new Map, this.onWriteEntry = e.onWriteEntry, this[uo] = Bs, "function" == typeof e.onwarn && this.on("warn", e.onwarn), this.portable = !!e.portable, e.gzip || e.brotli || e.zstd) {
            if ((e.gzip ? 1 : 0) + (e.brotli ? 1 : 0) + (e.zstd ? 1 : 0) > 1) throw new TypeError("gzip, brotli, zstd are mutually exclusive");
            if (e.gzip && ("object" != typeof e.gzip && (e.gzip = {}), this.portable && (e.gzip.portable = !0), this.zip = new Mr(e.gzip)), e.brotli && ("object" != typeof e.brotli && (e.brotli = {}), this.zip = new Br(e.brotli)), e.zstd && ("object" != typeof e.zstd && (e.zstd = {}), this.zip = new Nr(e.zstd)), !this.zip) throw new Error("impossible");
            let t = this.zip;
            t.on("data", (e)=>super.write(e)), t.on("end", ()=>super.end()), t.on("drain", ()=>this[mo]()), this.on("resume", ()=>t.resume());
        } else this.on("drain", this[mo]);
        this.noDirRecurse = !!e.noDirRecurse, this.follow = !!e.follow, this.noMtime = !!e.noMtime, e.mtime && (this.mtime = e.mtime), this.filter = "function" == typeof e.filter ? e.filter : ()=>!0, this[Ks] = new Fs, this[eo] = 0, this.jobs = Number(e.jobs) || 4, this[Xs] = !1, this[Hs] = !1;
    }
    [po](e) {
        return super.write(e);
    }
    add(e) {
        return this.write(e), this;
    }
    end(e, t, r) {
        return "function" == typeof e && (r = e, e = void 0), "function" == typeof t && (r = t, t = void 0), e && this.add(e), this[Hs] = !0, this[Qs](), r && r(), this;
    }
    write(e) {
        if (this[Hs]) throw new Error("write after end");
        return "string" == typeof e ? this[ro](e) : this[no](e), this.flowing;
    }
    [no](e) {
        let t = yn(ze.resolve(this.cwd, e.path));
        if (this.filter(e.path, e)) {
            let r = new Gs(e.path, t);
            r.entry = new qs(e, this[lo](r)), r.entry.on("end", ()=>this[to](r)), this[eo] += 1, this[Ks].push(r);
        } else e.resume();
        this[Qs]();
    }
    [ro](e) {
        let t = yn(ze.resolve(this.cwd, e));
        this[Ks].push(new Gs(e, t)), this[Qs]();
    }
    [so](e) {
        e.pending = !0, this[eo] += 1;
        let t = this.follow ? "stat" : "lstat";
        Le[t](e.absolute, (t, r)=>{
            e.pending = !1, this[eo] -= 1, t ? this.emit("error", t) : this[Ws](e, r);
        });
    }
    [Ws](e, t) {
        if (this.statCache.set(e.absolute, t), e.stat = t, this.filter(e.path, t)) {
            if (t.isFile() && t.nlink > 1 && !this.linkCache.get(`${t.dev}:${t.ino}`) && !this.sync) if (e === this[Ys]) this[Zs](e);
            else {
                let r = `${t.dev}:${t.ino}`, n = this[Vs].get(r);
                n ? n.push(e) : this[Vs].set(r, [
                    e
                ]), e.pendingLink = !0, e.pending = !0;
            }
        } else e.ignore = !0;
        this[Qs]();
    }
    [oo](e) {
        e.pending = !0, this[eo] += 1, Le.readdir(e.absolute, (t, r)=>{
            if (e.pending = !1, this[eo] -= 1, t) return this.emit("error", t);
            this[io](e, r);
        });
    }
    [io](e, t) {
        this.readdirCache.set(e.absolute, t), e.readdir = t, this[Qs]();
    }
    [Qs]() {
        if (!this[Xs]) {
            this[Xs] = !0;
            for(let e = this[Ks].head; e && this[eo] < this.jobs; e = e.next)if (this[Zs](e.value), e.value.ignore) {
                let t = e.next;
                this[Ks].removeNode(e), e.next = t;
            }
            this[Xs] = !1, this[Hs] && 0 === this[Ks].length && 0 === this[eo] && (this.zip ? this.zip.end(zs) : (super.write(zs), super.end()));
        }
    }
    get [Ys]() {
        return this[Ks] && this[Ks].head && this[Ks].head.value;
    }
    [to](e) {
        this[Ks].shift(), this[eo] -= 1;
        let { stat: t } = e;
        if (t && t.isFile() && t.nlink > 1) {
            let e = `${t.dev}:${t.ino}`, r = this[Vs].get(e);
            if (r) {
                this[Vs].delete(e);
                for (let e of r)e.pending = !1, this[Zs](e);
            }
        }
        this[Qs]();
    }
    [Zs](e) {
        if (e.pending && e.pendingLink && e === this[Ys] && (e.pending = !1, e.pendingLink = !1), !e.pending) {
            if (e.entry) return void (e === this[Ys] && !e.piped && this[ao](e));
            if (!e.stat) {
                let t = this.statCache.get(e.absolute);
                t ? this[Ws](e, t) : this[so](e);
            }
            if (e.stat && !e.ignore) {
                if (!this.noDirRecurse && e.stat.isDirectory() && !e.readdir) {
                    let t = this.readdirCache.get(e.absolute);
                    if (t ? this[io](e, t) : this[oo](e), !e.readdir) return;
                }
                if (e.entry = this[co](e), !e.entry) return void (e.ignore = !0);
                e === this[Ys] && !e.piped && this[ao](e);
            }
        }
    }
    [lo](e) {
        return {
            onwarn: (e, t, r)=>this.warn(e, t, r),
            noPax: this.noPax,
            cwd: this.cwd,
            absolute: e.absolute,
            preservePaths: this.preservePaths,
            maxReadSize: this.maxReadSize,
            strict: this.strict,
            portable: this.portable,
            linkCache: this.linkCache,
            statCache: this.statCache,
            noMtime: this.noMtime,
            mtime: this.mtime,
            prefix: this.prefix,
            onWriteEntry: this.onWriteEntry
        };
    }
    [co](e) {
        this[eo] += 1;
        try {
            return new this[uo](e.path, this[lo](e)).on("end", ()=>this[to](e)).on("error", (e)=>this.emit("error", e));
        } catch (e) {
            this.emit("error", e);
        }
    }
    [mo]() {
        this[Ys] && this[Ys].entry && this[Ys].entry.resume();
    }
    [ao](e) {
        e.piped = !0, e.readdir && e.readdir.forEach((t)=>{
            let r = e.path, n = "./" === r ? "" : r.replace(/\/*$/, "/");
            this[ro](n + t);
        });
        let t = e.entry, r = this.zip;
        if (!t) throw new Error("cannot pipe without source");
        r ? t.on("data", (e)=>{
            r.write(e) || t.pause();
        }) : t.on("data", (e)=>{
            super.write(e) || t.pause();
        });
    }
    pause() {
        return this.zip && this.zip.pause(), super.pause();
    }
    warn(e, t, r = {}) {
        vn(this, e, t, r);
    }
}, fo = class extends ho {
    sync = !0;
    constructor(e){
        super(e), this[uo] = Ds;
    }
    pause() {}
    resume() {}
    [so](e) {
        let t = this.follow ? "statSync" : "lstatSync";
        this[Ws](e, Le[t](e.absolute));
    }
    [oo](e) {
        this[io](e, Le.readdirSync(e.absolute));
    }
    [ao](e) {
        let t = e.entry, r = this.zip;
        if (e.readdir && e.readdir.forEach((t)=>{
            let r = e.path, n = "./" === r ? "" : r.replace(/\/*$/, "/");
            this[ro](n + t);
        }), !t) throw new Error("Cannot pipe without source");
        r ? t.on("data", (e)=>{
            r.write(e);
        }) : t.on("data", (e)=>{
            super[po](e);
        });
    }
}, go = (e, t)=>{
    t.forEach((t)=>{
        "@" === t.charAt(0) ? is({
            file: I.resolve(e.cwd, t.slice(1)),
            sync: !0,
            noResume: !0,
            onReadEntry: (t)=>e.add(t)
        }) : e.add(t);
    }), e.end();
}, yo = async (e, t)=>{
    for (let r of t)"@" === r.charAt(0) ? await is({
        file: I.resolve(String(e.cwd), r.slice(1)),
        noResume: !0,
        onReadEntry: (t)=>{
            e.add(t);
        }
    }) : e.add(r);
    e.end();
}, wo = _r((e, t)=>{
    let r = new fo(e), n = new gr(e.file, {
        mode: e.mode || 438
    });
    r.pipe(n), go(r, t);
}, (e, t)=>{
    let r = new ho(e), n = new fr(e.file, {
        mode: e.mode || 438
    });
    r.pipe(n);
    let s = new Promise((e, t)=>{
        n.on("error", t), n.on("close", e), r.on("error", t);
    });
    return yo(r, t).catch((e)=>r.emit("error", e)), s;
}, (e, t)=>{
    let r = new fo(e);
    return go(r, t), r;
}, (e, t)=>{
    let r = new ho(e);
    return yo(r, t).catch((e)=>r.emit("error", e)), r;
}, (e, t)=>{
    if (!t?.length) throw new TypeError("no paths specified to add to archive");
}), vo = "win32" === (process.env.__FAKE_PLATFORM__ || process.platform), { O_CREAT: _o, O_NOFOLLOW: bo, O_TRUNC: So, O_WRONLY: ko } = Le.constants, xo = Number(process.env.__FAKE_FS_O_FILENAME__) || Le.constants.UV_FS_O_FILEMAP || 0, Eo = xo | So | _o | ko, Io = vo || "number" != typeof bo ? null : bo | So | _o | ko, To = null !== Io ? ()=>Io : vo && !!xo ? (e)=>e < 524288 ? Eo : "w" : ()=>"w", Co = (e, t, r)=>{
    try {
        return Ge.lchownSync(e, t, r);
    } catch (e) {
        if ("ENOENT" !== e?.code) throw e;
    }
}, Po = (e, t, r, n)=>{
    Ge.lchown(e, t, r, (e)=>{
        n(e && "ENOENT" !== e?.code ? e : null);
    });
}, Ao = (e, t, r, n, s)=>{
    if (t.isDirectory()) Ro(I.resolve(e, t.name), r, n, (o)=>{
        if (o) return s(o);
        let i = I.resolve(e, t.name);
        Po(i, r, n, s);
    });
    else {
        let o = I.resolve(e, t.name);
        Po(o, r, n, s);
    }
}, Ro = (e, t, r, n)=>{
    Ge.readdir(e, {
        withFileTypes: !0
    }, (s, o)=>{
        if (s) {
            if ("ENOENT" === s.code) return n();
            if ("ENOTDIR" !== s.code && "ENOTSUP" !== s.code) return n(s);
        }
        if (s || !o.length) return Po(e, t, r, n);
        let i = o.length, a = null, c = (s)=>{
            if (!a) {
                if (s) return n(a = s);
                if (0 === --i) return Po(e, t, r, n);
            }
        };
        for (let n of o)Ao(e, n, t, r, c);
    });
}, Mo = (e, t, r, n)=>{
    t.isDirectory() && Jo(I.resolve(e, t.name), r, n), Co(I.resolve(e, t.name), r, n);
}, Jo = (e, t, r)=>{
    let n;
    try {
        n = Ge.readdirSync(e, {
            withFileTypes: !0
        });
    } catch (n) {
        let s = n;
        if ("ENOENT" === s?.code) return;
        if ("ENOTDIR" === s?.code || "ENOTSUP" === s?.code) return Co(e, t, r);
        throw s;
    }
    for (let s of n)Mo(e, s, t, r);
    return Co(e, t, r);
}, Oo = class extends Error {
    path;
    code;
    syscall = "chdir";
    constructor(e, t){
        super(`${t}: Cannot cd into '${e}'`), this.path = e, this.code = t;
    }
    get name() {
        return "CwdError";
    }
}, Bo = class extends Error {
    path;
    symlink;
    syscall = "symlink";
    code = "TAR_SYMLINK_ERROR";
    constructor(e, t){
        super("TAR_SYMLINK_ERROR: Cannot extract through symbolic link"), this.symlink = e, this.path = t;
    }
    get name() {
        return "SymlinkError";
    }
}, Do = (e, t, r)=>{
    e = yn(e);
    let n = t.umask ?? 18, s = 448 | t.mode, o = 0 !== (s & n), i = t.uid, a = t.gid, c = "number" == typeof i && "number" == typeof a && (i !== t.processUid || a !== t.processGid), l = t.preserve, u = t.unlink, d = yn(t.cwd), p = (t, n)=>{
        t ? r(t) : n && c ? Ro(n, i, a, (e)=>p(e)) : o ? Ge.chmod(e, s, r) : r();
    };
    if (e === d) return ((e, t)=>{
        Ge.stat(e, (r, n)=>{
            (r || !n.isDirectory()) && (r = new Oo(e, r?.code || "ENOTDIR")), t(r);
        });
    })(e, p);
    if (l) return ve.mkdir(e, {
        mode: s,
        recursive: !0
    }).then((e)=>p(null, e ?? void 0), p);
    let m = yn(I.relative(d, e)).split("/");
    qo(d, m, s, u, d, void 0, p);
}, qo = (e, t, r, n, s, o, i)=>{
    if (0 === t.length) return i(null, o);
    let a = t.shift(), c = yn(I.resolve(e + "/" + a));
    Ge.mkdir(c, r, No(c, t, r, n, s, o, i));
}, No = (e, t, r, n, s, o, i)=>(a)=>{
        a ? Ge.lstat(e, (c, l)=>{
            if (c) c.path = c.path && yn(c.path), i(c);
            else if (l.isDirectory()) qo(e, t, r, n, s, o, i);
            else if (n) Ge.unlink(e, (a)=>{
                if (a) return i(a);
                Ge.mkdir(e, r, No(e, t, r, n, s, o, i));
            });
            else {
                if (l.isSymbolicLink()) return i(new Bo(e, e + "/" + t.join("/")));
                i(a);
            }
        }) : qo(e, t, r, n, s, o = o || e, i);
    }, Fo = (e, t)=>{
    e = yn(e);
    let r = t.umask ?? 18, n = 448 | t.mode, s = 0 !== (n & r), o = t.uid, i = t.gid, a = "number" == typeof o && "number" == typeof i && (o !== t.processUid || i !== t.processGid), c = t.preserve, l = t.unlink, u = yn(t.cwd), d = (t)=>{
        t && a && Jo(t, o, i), s && Ge.chmodSync(e, n);
    };
    if (e === u) return ((e)=>{
        let t, r = !1;
        try {
            r = Ge.statSync(e).isDirectory();
        } catch (e) {
            t = e?.code;
        } finally{
            if (!r) throw new Oo(e, t ?? "ENOTDIR");
        }
    })(u), d();
    if (c) return d(Ge.mkdirSync(e, {
        mode: n,
        recursive: !0
    }) ?? void 0);
    let p, m = yn(I.relative(u, e)).split("/");
    for(let e = m.shift(), t = u; e && (t += "/" + e); e = m.shift()){
        t = yn(I.resolve(t));
        try {
            Ge.mkdirSync(t, n), p = p || t;
        } catch  {
            let e = Ge.lstatSync(t);
            if (e.isDirectory()) continue;
            if (l) {
                Ge.unlinkSync(t), Ge.mkdirSync(t, n), p = p || t;
                continue;
            }
            if (e.isSymbolicLink()) return new Bo(t, t + "/" + m.join("/"));
        }
    }
    return d(p);
}, Uo = Object.create(null), Lo = new Set, $o = "win32" === (process.env.TESTING_TAR_FAKE_PLATFORM || process.platform), jo = class {
    #e = new Map;
    #t = new Map;
    #r = new Set;
    reserve(e, t) {
        e = $o ? [
            "win32 parallelization disabled"
        ] : e.map((e)=>ss((0, I.join)(((e)=>{
                Lo.has(e) ? Lo.delete(e) : Uo[e] = e.normalize("NFD").toLocaleLowerCase("en").toLocaleUpperCase("en"), Lo.add(e);
                let t = Uo[e], r = Lo.size - 1e4;
                if (r > 1e3) {
                    for (let e of Lo)if (Lo.delete(e), delete Uo[e], --r <= 0) break;
                }
                return t;
            })(e))));
        let r = new Set(e.map((e)=>e.split("/").slice(0, -1).reduce((e, t)=>{
                let r = e.at(-1);
                return void 0 !== r && (t = (0, I.join)(r, t)), e.push(t || "/"), e;
            }, [])).reduce((e, t)=>e.concat(t)));
        this.#t.set(t, {
            dirs: r,
            paths: e
        });
        for (let r of e){
            let e = this.#e.get(r);
            e ? e.push(t) : this.#e.set(r, [
                t
            ]);
        }
        for (let e of r){
            let r = this.#e.get(e);
            if (r) {
                let e = r.at(-1);
                e instanceof Set ? e.add(t) : r.push(new Set([
                    t
                ]));
            } else this.#e.set(e, [
                new Set([
                    t
                ])
            ]);
        }
        return this.#s(t);
    }
    #n(e) {
        let t = this.#t.get(e);
        if (!t) throw new Error("function does not have any path reservations");
        return {
            paths: t.paths.map((e)=>this.#e.get(e)),
            dirs: [
                ...t.dirs
            ].map((e)=>this.#e.get(e))
        };
    }
    check(e) {
        let { paths: t, dirs: r } = this.#n(e);
        return t.every((t)=>t && t[0] === e) && r.every((t)=>t && t[0] instanceof Set && t[0].has(e));
    }
    #s(e) {
        return !(this.#r.has(e) || !this.check(e)) && (this.#r.add(e), e(()=>this.#o(e)), !0);
    }
    #o(e) {
        if (!this.#r.has(e)) return !1;
        let t = this.#t.get(e);
        if (!t) throw new Error("invalid reservation");
        let { paths: r, dirs: n } = t, s = new Set;
        for (let t of r){
            let r = this.#e.get(t);
            if (!r || r?.[0] !== e) continue;
            let n = r[1];
            if (n) if (r.shift(), "function" == typeof n) s.add(n);
            else for (let e of n)s.add(e);
            else this.#e.delete(t);
        }
        for (let t of n){
            let r = this.#e.get(t), n = r?.[0];
            if (r && n instanceof Set) {
                if (1 === n.size && 1 === r.length) {
                    this.#e.delete(t);
                    continue;
                }
                if (1 === n.size) {
                    r.shift();
                    let e = r[0];
                    "function" == typeof e && s.add(e);
                } else n.delete(e);
            }
        }
        return this.#r.delete(e), s.forEach((e)=>this.#s(e)), !0;
    }
}, Go = Symbol("onEntry"), zo = Symbol("checkFs"), Wo = Symbol("checkFs2"), Ho = Symbol("isReusable"), Ko = Symbol("makeFs"), Vo = Symbol("file"), Yo = Symbol("directory"), Qo = Symbol("link"), Xo = Symbol("symlink"), Zo = Symbol("hardlink"), ei = Symbol("ensureNoSymlink"), ti = Symbol("unsupported"), ri = Symbol("checkPath"), ni = Symbol("stripAbsolutePath"), si = Symbol("mkdir"), oi = Symbol("onError"), ii = Symbol("pending"), ai = Symbol("pend"), ci = Symbol("unpend"), li = Symbol("ended"), ui = Symbol("maybeClose"), di = Symbol("skip"), pi = Symbol("doChown"), mi = Symbol("uid"), hi = Symbol("gid"), fi = Symbol("checkedCwd"), gi = "win32" === (process.env.TESTING_TAR_FAKE_PLATFORM || process.platform), yi = (e, t, r)=>void 0 !== e && e === e >>> 0 ? e : void 0 !== t && t === t >>> 0 ? t : r, wi = class extends ns {
    [li] = !1;
    [fi] = !1;
    [ii] = 0;
    reservations = new jo;
    transform;
    writable = !0;
    readable = !1;
    uid;
    gid;
    setOwner;
    preserveOwner;
    processGid;
    processUid;
    maxDepth;
    forceChown;
    win32;
    newer;
    keep;
    noMtime;
    preservePaths;
    unlink;
    cwd;
    strip;
    processUmask;
    umask;
    dmode;
    fmode;
    chmod;
    constructor(e = {}){
        if (e.ondone = ()=>{
            this[li] = !0, this[ui]();
        }, super(e), this.transform = e.transform, this.chmod = !!e.chmod, "number" == typeof e.uid || "number" == typeof e.gid) {
            if ("number" != typeof e.uid || "number" != typeof e.gid) throw new TypeError("cannot set owner without number uid and gid");
            if (e.preserveOwner) throw new TypeError("cannot preserve owner in archive and also set owner explicitly");
            this.uid = e.uid, this.gid = e.gid, this.setOwner = !0;
        } else this.uid = void 0, this.gid = void 0, this.setOwner = !1;
        this.preserveOwner = void 0 === e.preserveOwner && "number" != typeof e.uid ? 0 === process.getuid?.() : !!e.preserveOwner, this.processUid = (this.preserveOwner || this.setOwner) && process.getuid ? process.getuid() : void 0, this.processGid = (this.preserveOwner || this.setOwner) && process.getgid ? process.getgid() : void 0, this.maxDepth = "number" == typeof e.maxDepth ? e.maxDepth : 1024, this.forceChown = !0 === e.forceChown, this.win32 = !!e.win32 || gi, this.newer = !!e.newer, this.keep = !!e.keep, this.noMtime = !!e.noMtime, this.preservePaths = !!e.preservePaths, this.unlink = !!e.unlink, this.cwd = yn(I.resolve(e.cwd || process.cwd())), this.strip = Number(e.strip) || 0, this.processUmask = this.chmod ? "number" == typeof e.processUmask ? e.processUmask : process.umask() : 0, this.umask = "number" == typeof e.umask ? e.umask : this.processUmask, this.dmode = e.dmode || 511 & ~this.umask, this.fmode = e.fmode || 438 & ~this.umask, this.on("entry", (e)=>this[Go](e));
    }
    warn(e, t, r = {}) {
        return ("TAR_BAD_ARCHIVE" === e || "TAR_ABORT" === e) && (r.recoverable = !1), super.warn(e, t, r);
    }
    [ui]() {
        this[li] && 0 === this[ii] && (this.emit("prefinish"), this.emit("finish"), this.emit("end"));
    }
    [ni](e, t) {
        let r = e[t], { type: n } = e;
        if (!r || this.preservePaths) return !0;
        let [s, o] = us(r), i = o.replaceAll(/\\/g, "/").split("/");
        if (i.includes("..") || gi && /^[a-z]:\.\.$/i.test(i[0] ?? "")) {
            if ("path" === t || "Link" === n) return this.warn("TAR_ENTRY_ERROR", `${t} contains '..'`, {
                entry: e,
                [t]: r
            }), !1;
            let s = I.posix.dirname(e.path), o = I.posix.normalize(I.posix.join(s, i.join("/")));
            if (o.startsWith("../") || ".." === o) return this.warn("TAR_ENTRY_ERROR", `${t} escapes extraction directory`, {
                entry: e,
                [t]: r
            }), !1;
        }
        return s && (e[t] = String(o), this.warn("TAR_ENTRY_INFO", `stripping ${s} from absolute ${t}`, {
            entry: e,
            [t]: r
        })), !0;
    }
    [ri](e) {
        let t = yn(e.path), r = t.split("/");
        if (this.strip) {
            if (r.length < this.strip) return !1;
            if ("Link" === e.type) {
                let t = yn(String(e.linkpath)).split("/");
                if (!(t.length >= this.strip)) return !1;
                e.linkpath = t.slice(this.strip).join("/");
            }
            r.splice(0, this.strip), e.path = r.join("/");
        }
        if (isFinite(this.maxDepth) && r.length > this.maxDepth) return this.warn("TAR_ENTRY_ERROR", "path excessively deep", {
            entry: e,
            path: t,
            depth: r.length,
            maxDepth: this.maxDepth
        }), !1;
        if (!this[ni](e, "path") || !this[ni](e, "linkpath")) return !1;
        if (e.absolute = I.isAbsolute(e.path) ? yn(I.resolve(e.path)) : yn(I.resolve(this.cwd, e.path)), !this.preservePaths && "string" == typeof e.absolute && 0 !== e.absolute.indexOf(this.cwd + "/") && e.absolute !== this.cwd) return this.warn("TAR_ENTRY_ERROR", "path escaped extraction target", {
            entry: e,
            path: yn(e.path),
            resolvedPath: e.absolute,
            cwd: this.cwd
        }), !1;
        if (e.absolute === this.cwd && "Directory" !== e.type && "GNUDumpDir" !== e.type) return !1;
        if (this.win32) {
            let { root: t } = I.win32.parse(String(e.absolute));
            e.absolute = t + fs(String(e.absolute).slice(t.length));
            let { root: r } = I.win32.parse(e.path);
            e.path = r + fs(e.path.slice(r.length));
        }
        return !0;
    }
    [Go](e) {
        if (!this[ri](e)) return e.resume();
        switch(Ye.equal(typeof e.absolute, "string"), e.type){
            case "Directory":
            case "GNUDumpDir":
                e.mode && (e.mode = 448 | e.mode);
            case "File":
            case "OldFile":
            case "ContiguousFile":
            case "Link":
            case "SymbolicLink":
                return this[zo](e);
            default:
                return this[ti](e);
        }
    }
    [oi](e, t) {
        "CwdError" === e.name ? this.emit("error", e) : (this.warn("TAR_ENTRY_ERROR", e, {
            entry: t
        }), this[ci](), t.resume());
    }
    [si](e, t, r) {
        Do(yn(e), {
            uid: this.uid,
            gid: this.gid,
            processUid: this.processUid,
            processGid: this.processGid,
            umask: this.processUmask,
            preserve: this.preservePaths,
            unlink: this.unlink,
            cwd: this.cwd,
            mode: t
        }, r);
    }
    [pi](e) {
        return this.forceChown || this.preserveOwner && ("number" == typeof e.uid && e.uid !== this.processUid || "number" == typeof e.gid && e.gid !== this.processGid) || "number" == typeof this.uid && this.uid !== this.processUid || "number" == typeof this.gid && this.gid !== this.processGid;
    }
    [mi](e) {
        return yi(this.uid, e.uid, this.processUid);
    }
    [hi](e) {
        return yi(this.gid, e.gid, this.processGid);
    }
    [Vo](e, t) {
        let r = "number" == typeof e.mode ? 4095 & e.mode : this.fmode, n = new fr(String(e.absolute), {
            flags: To(e.size),
            mode: r,
            autoClose: !1
        });
        n.on("error", (r)=>{
            n.fd && Ge.close(n.fd, ()=>{}), n.write = ()=>!0, this[oi](r, e), t();
        });
        let s = 1, o = (r)=>{
            if (r) return n.fd && Ge.close(n.fd, ()=>{}), this[oi](r, e), void t();
            0 === --s && void 0 !== n.fd && Ge.close(n.fd, (r)=>{
                r ? this[oi](r, e) : this[ci](), t();
            });
        };
        n.on("finish", ()=>{
            let t = String(e.absolute), r = n.fd;
            if ("number" == typeof r && e.mtime && !this.noMtime) {
                s++;
                let n = e.atime || new Date, i = e.mtime;
                Ge.futimes(r, n, i, (e)=>e ? Ge.utimes(t, n, i, (t)=>o(t && e)) : o());
            }
            if ("number" == typeof r && this[pi](e)) {
                s++;
                let n = this[mi](e), i = this[hi](e);
                "number" == typeof n && "number" == typeof i && Ge.fchown(r, n, i, (e)=>e ? Ge.chown(t, n, i, (t)=>o(t && e)) : o());
            }
            o();
        });
        let i = this.transform && this.transform(e) || e;
        i !== e && (i.on("error", (r)=>{
            this[oi](r, e), t();
        }), e.pipe(i)), i.pipe(n);
    }
    [Yo](e, t) {
        let r = "number" == typeof e.mode ? 4095 & e.mode : this.dmode;
        this[si](String(e.absolute), r, (r)=>{
            if (r) return this[oi](r, e), void t();
            let n = 1, s = ()=>{
                0 === --n && (t(), this[ci](), e.resume());
            };
            e.mtime && !this.noMtime && (n++, Ge.utimes(String(e.absolute), e.atime || new Date, e.mtime, s)), this[pi](e) && (n++, Ge.chown(String(e.absolute), Number(this[mi](e)), Number(this[hi](e)), s)), s();
        });
    }
    [ti](e) {
        e.unsupported = !0, this.warn("TAR_ENTRY_UNSUPPORTED", `unsupported entry type: ${e.type}`, {
            entry: e
        }), e.resume();
    }
    [Xo](e, t) {
        let r = yn(I.relative(this.cwd, I.resolve(I.dirname(String(e.absolute)), String(e.linkpath)))).split("/");
        this[ei](e, this.cwd, r, ()=>this[Qo](e, String(e.linkpath), "symlink", t), (r)=>{
            this[oi](r, e), t();
        });
    }
    [Zo](e, t) {
        let r = yn(I.resolve(this.cwd, String(e.linkpath))), n = yn(String(e.linkpath)).split("/");
        this[ei](e, this.cwd, n, ()=>this[Qo](e, r, "link", t), (r)=>{
            this[oi](r, e), t();
        });
    }
    [ei](e, t, r, n, s) {
        let o = r.shift();
        if (this.preservePaths || void 0 === o) return n();
        let i = I.resolve(t, o);
        Ge.lstat(i, (t, o)=>t ? n() : o?.isSymbolicLink() ? s(new Bo(i, I.resolve(i, r.join("/")))) : void this[ei](e, i, r, n, s));
    }
    [ai]() {
        this[ii]++;
    }
    [ci]() {
        this[ii]--, this[ui]();
    }
    [di](e) {
        this[ci](), e.resume();
    }
    [Ho](e, t) {
        return "File" === e.type && !this.unlink && t.isFile() && t.nlink <= 1 && !gi;
    }
    [zo](e) {
        this[ai]();
        let t = [
            e.path
        ];
        e.linkpath && t.push(e.linkpath), this.reservations.reserve(t, (t)=>this[Wo](e, t));
    }
    [Wo](e, t) {
        let r = (e)=>{
            t(e);
        }, n = ()=>{
            if (e.absolute !== this.cwd) {
                let t = yn(I.dirname(String(e.absolute)));
                if (t !== this.cwd) return this[si](t, this.dmode, (t)=>{
                    if (t) return this[oi](t, e), void r();
                    s();
                });
            }
            s();
        }, s = ()=>{
            Ge.lstat(String(e.absolute), (t, n)=>{
                if (n && (this.keep || this.newer && n.mtime > (e.mtime ?? n.mtime))) return this[di](e), void r();
                if (t || this[Ho](e, n)) return this[Ko](null, e, r);
                if (n.isDirectory()) {
                    if ("Directory" === e.type) {
                        let t = (t)=>this[Ko](t ?? null, e, r);
                        return this.chmod && e.mode && (4095 & n.mode) !== e.mode ? Ge.chmod(String(e.absolute), Number(e.mode), t) : t();
                    }
                    if (e.absolute !== this.cwd) return Ge.rmdir(String(e.absolute), (t)=>this[Ko](t ?? null, e, r));
                }
                if (e.absolute === this.cwd) return this[Ko](null, e, r);
                ((e, t)=>{
                    if (!gi) return Ge.unlink(e, t);
                    let r = e + ".DELETE." + (0, E.randomBytes)(16).toString("hex");
                    Ge.rename(e, r, (e)=>{
                        if (e) return t(e);
                        Ge.unlink(r, t);
                    });
                })(String(e.absolute), (t)=>this[Ko](t ?? null, e, r));
            });
        };
        this[fi] ? n() : (()=>{
            this[si](this.cwd, this.dmode, (t)=>{
                if (t) return this[oi](t, e), void r();
                this[fi] = !0, n();
            });
        })();
    }
    [Ko](e, t, r) {
        if (e) return this[oi](e, t), void r();
        switch(t.type){
            case "File":
            case "OldFile":
            case "ContiguousFile":
                return this[Vo](t, r);
            case "Link":
                return this[Zo](t, r);
            case "SymbolicLink":
                return this[Xo](t, r);
            case "Directory":
            case "GNUDumpDir":
                return this[Yo](t, r);
        }
    }
    [Qo](e, t, r, n) {
        Ge[r](t, String(e.absolute), (t)=>{
            t ? this[oi](t, e) : (this[ci](), e.resume()), n();
        });
    }
}, vi = (e)=>{
    try {
        return [
            null,
            e()
        ];
    } catch (e) {
        return [
            e,
            null
        ];
    }
}, _i = class extends wi {
    sync = !0;
    [Ko](e, t) {
        return super[Ko](e, t, ()=>{});
    }
    [zo](e) {
        if (!this[fi]) {
            let t = this[si](this.cwd, this.dmode);
            if (t) return this[oi](t, e);
            this[fi] = !0;
        }
        if (e.absolute !== this.cwd) {
            let t = yn(I.dirname(String(e.absolute)));
            if (t !== this.cwd) {
                let r = this[si](t, this.dmode);
                if (r) return this[oi](r, e);
            }
        }
        let [t, r] = vi(()=>Ge.lstatSync(String(e.absolute)));
        if (r && (this.keep || this.newer && r.mtime > (e.mtime ?? r.mtime))) return this[di](e);
        if (t || this[Ho](e, r)) return this[Ko](null, e);
        if (r.isDirectory()) {
            if ("Directory" === e.type) {
                let t = this.chmod && e.mode && (4095 & r.mode) !== e.mode, [n] = t ? vi(()=>{
                    Ge.chmodSync(String(e.absolute), Number(e.mode));
                }) : [];
                return this[Ko](n, e);
            }
            let [t] = vi(()=>Ge.rmdirSync(String(e.absolute)));
            this[Ko](t, e);
        }
        let [n] = e.absolute === this.cwd ? [] : vi(()=>((e)=>{
                if (!gi) return Ge.unlinkSync(e);
                let t = e + ".DELETE." + (0, E.randomBytes)(16).toString("hex");
                Ge.renameSync(e, t), Ge.unlinkSync(t);
            })(String(e.absolute)));
        this[Ko](n, e);
    }
    [Vo](e, t) {
        let r, n = "number" == typeof e.mode ? 4095 & e.mode : this.fmode, s = (n)=>{
            let s;
            try {
                Ge.closeSync(r);
            } catch (e) {
                s = e;
            }
            (n || s) && this[oi](n || s, e), t();
        };
        try {
            r = Ge.openSync(String(e.absolute), To(e.size), n);
        } catch (e) {
            return s(e);
        }
        let o = this.transform && this.transform(e) || e;
        o !== e && (o.on("error", (t)=>this[oi](t, e)), e.pipe(o)), o.on("data", (e)=>{
            try {
                Ge.writeSync(r, e, 0, e.length);
            } catch (e) {
                s(e);
            }
        }), o.on("end", ()=>{
            let t = null;
            if (e.mtime && !this.noMtime) {
                let n = e.atime || new Date, s = e.mtime;
                try {
                    Ge.futimesSync(r, n, s);
                } catch (r) {
                    try {
                        Ge.utimesSync(String(e.absolute), n, s);
                    } catch  {
                        t = r;
                    }
                }
            }
            if (this[pi](e)) {
                let n = this[mi](e), s = this[hi](e);
                try {
                    Ge.fchownSync(r, Number(n), Number(s));
                } catch (r) {
                    try {
                        Ge.chownSync(String(e.absolute), Number(n), Number(s));
                    } catch  {
                        t = t || r;
                    }
                }
            }
            s(t);
        });
    }
    [Yo](e, t) {
        let r = "number" == typeof e.mode ? 4095 & e.mode : this.dmode, n = this[si](String(e.absolute), r);
        if (n) return this[oi](n, e), void t();
        if (e.mtime && !this.noMtime) try {
            Ge.utimesSync(String(e.absolute), e.atime || new Date, e.mtime);
        } catch  {}
        if (this[pi](e)) try {
            Ge.chownSync(String(e.absolute), Number(this[mi](e)), Number(this[hi](e)));
        } catch  {}
        t(), e.resume();
    }
    [si](e, t) {
        try {
            return Fo(yn(e), {
                uid: this.uid,
                gid: this.gid,
                processUid: this.processUid,
                processGid: this.processGid,
                umask: this.processUmask,
                preserve: this.preservePaths,
                unlink: this.unlink,
                cwd: this.cwd,
                mode: t
            });
        } catch (e) {
            return e;
        }
    }
    [ei](e, t, r, n, s) {
        if (this.preservePaths || 0 === r.length) return n();
        let o = t;
        for (let e of r){
            o = I.resolve(o, e);
            let [i, a] = vi(()=>Ge.lstatSync(o));
            if (i) return n();
            if (a.isSymbolicLink()) return s(new Bo(o, I.resolve(t, r.join("/"))));
        }
        n();
    }
    [Qo](e, t, r, n) {
        let s = `${r}Sync`;
        try {
            Ge[s](t, String(e.absolute)), n(), e.resume();
        } catch (t) {
            return this[oi](t, e);
        }
    }
}, bi = _r((e)=>{
    let t = new _i(e), r = e.file, n = Ge.statSync(r), s = e.maxReadSize || 16777216;
    new hr(r, {
        readSize: s,
        size: n.size
    }).pipe(t);
}, (e, t)=>{
    let r = new wi(e), n = e.maxReadSize || 16777216, s = e.file;
    return new Promise((e, t)=>{
        r.on("error", t), r.on("close", e), Ge.stat(s, (e, o)=>{
            if (e) t(e);
            else {
                let e = new mr(s, {
                    readSize: n,
                    size: o.size
                });
                e.on("error", t), e.pipe(r);
            }
        });
    });
}, (e)=>new _i(e), (e)=>new wi(e), (e, t)=>{
    t?.length && os(e, t);
}), Si = (e, t, r, n, s)=>{
    let o = new gr(e.file, {
        fd: n,
        start: r
    });
    t.pipe(o), ki(t, s);
}, ki = (e, t)=>{
    t.forEach((t)=>{
        "@" === t.charAt(0) ? is({
            file: I.resolve(e.cwd, t.slice(1)),
            sync: !0,
            noResume: !0,
            onReadEntry: (t)=>e.add(t)
        }) : e.add(t);
    }), e.end();
}, xi = async (e, t)=>{
    for (let r of t)"@" === r.charAt(0) ? await is({
        file: I.resolve(String(e.cwd), r.slice(1)),
        noResume: !0,
        onReadEntry: (t)=>e.add(t)
    }) : e.add(r);
    e.end();
}, Ei = _r((e, t)=>{
    let r, n, s = new fo(e), o = !0;
    try {
        try {
            r = Ge.openSync(e.file, "r+");
        } catch (t) {
            if ("ENOENT" !== t?.code) throw t;
            r = Ge.openSync(e.file, "w+");
        }
        let i = Ge.fstatSync(r), a = Buffer.alloc(512);
        e: for(n = 0; n < i.size; n += 512){
            for(let e = 0, t = 0; e < 512; e += t){
                if (t = Ge.readSync(r, a, e, a.length - e, n + e), 0 === n && 31 === a[0] && 139 === a[1]) throw new Error("cannot append to compressed archives");
                if (!t) break e;
            }
            let t = new Qr(a);
            if (!t.cksumValid) break;
            let s = 512 * Math.ceil((t.size || 0) / 512);
            if (n + s + 512 > i.size) break;
            n += s, e.mtimeCache && t.mtime && e.mtimeCache.set(String(t.path), t.mtime);
        }
        o = !1, Si(e, s, n, r, t);
    } finally{
        if (o) try {
            Ge.closeSync(r);
        } catch  {}
    }
}, (e, t)=>{
    t = Array.from(t);
    let r = new ho(e);
    return new Promise((n, s)=>{
        r.on("error", s);
        let o = "r+", i = (a, c)=>a && "ENOENT" === a.code && "r+" === o ? (o = "w+", Ge.open(e.file, o, i)) : a || !c ? s(a) : void Ge.fstat(c, (o, i)=>{
                if (o) return Ge.close(c, ()=>s(o));
                ((t, r, n)=>{
                    let s = (e, r)=>{
                        e ? Ge.close(t, (t)=>n(e)) : n(null, r);
                    }, o = 0;
                    if (0 === r) return s(null, 0);
                    let i = 0, a = Buffer.alloc(512), c = (n, l)=>{
                        if (n || void 0 === l) return s(n);
                        if (i += l, i < 512 && l) return Ge.read(t, a, i, a.length - i, o + i, c);
                        if (0 === o && 31 === a[0] && 139 === a[1]) return s(new Error("cannot append to compressed archives"));
                        if (i < 512) return s(null, o);
                        let u = new Qr(a);
                        if (!u.cksumValid) return s(null, o);
                        let d = 512 * Math.ceil((u.size ?? 0) / 512);
                        if (o + d + 512 > r || (o += d + 512, o >= r)) return s(null, o);
                        e.mtimeCache && u.mtime && e.mtimeCache.set(String(u.path), u.mtime), i = 0, Ge.read(t, a, 0, 512, o, c);
                    };
                    Ge.read(t, a, 0, 512, o, c);
                })(c, i.size, (o, i)=>{
                    if (o) return s(o);
                    let a = new fr(e.file, {
                        fd: c,
                        start: i
                    });
                    r.pipe(a), a.on("error", s), a.on("close", n), xi(r, t);
                });
            });
        Ge.open(e.file, o, i);
    });
}, ()=>{
    throw new TypeError("file is required");
}, ()=>{
    throw new TypeError("file is required");
}, (e, t)=>{
    if (!((e)=>!!e.file)(e)) throw new TypeError("file is required");
    if (e.gzip || e.brotli || e.zstd || e.file.endsWith(".br") || e.file.endsWith(".tbr")) throw new TypeError("cannot append to compressed archives");
    if (!t?.length) throw new TypeError("no paths specified to add/replace");
}), Ii = (_r(Ei.syncFile, Ei.asyncFile, Ei.syncNoFile, Ei.asyncNoFile, (e, t = [])=>{
    Ei.validate?.(e, t), Ii(e);
}), (e)=>{
    let t = e.filter;
    e.mtimeCache || (e.mtimeCache = new Map), e.filter = t ? (r, n)=>t(r, n) && !((e.mtimeCache?.get(r) ?? n.mtime ?? 0) > (n.mtime ?? 0)) : (t, r)=>!((e.mtimeCache?.get(t) ?? r.mtime ?? 0) > (r.mtime ?? 0));
});
const Ti = ".cache-complete";
function Ci(e) {
    return e.replace(/[^a-zA-Z0-9_-]/g, "_");
}
function Pi(e) {
    return e.replace(/[^a-zA-Z0-9_-]/g, "_");
}
function Ai(e) {
    return (0, Fe.Nz)(e);
}
function Ri(e, t) {
    return function(e, t, r, n) {
        const s = [
            e,
            t,
            r
        ];
        return void 0 !== n && s.push(n), (0, I.join)(...s);
    }(e, Ci(t.marketplaceSlug), Pi(t.pluginId), void 0 !== t.version ? Ai(t.version) : void 0);
}
class Mi {
    constructor(e, t){
        const r = e ?? process.env.HOME ?? "";
        this.cacheRoot = t?.cacheRoot ?? (0, I.join)(r, ".cursor", "plugins/cache");
    }
    getCacheDir(e) {
        return Ri(this.cacheRoot, e);
    }
    async isCached(e) {
        const t = this.getCacheDir(e);
        try {
            const e = (0, I.join)(t, Ti);
            return (await (0, ve.stat)(e)).isFile();
        } catch  {
            return !1;
        }
    }
    async extractToCache(e) {
        const t = this.getCacheDir(e);
        await (0, ve.mkdir)(t, {
            recursive: !0
        });
        const r = De.Readable.from(e.tarball);
        return await (0, qe.pipeline)(r, (0, Ne.createGunzip)(), bi({
            cwd: t,
            strip: 1
        })), await this.markCacheComplete(e), t;
    }
    async listCachedVersions(e) {
        const t = Ci(e.marketplaceSlug), r = Pi(e.pluginId), n = (0, I.join)(this.cacheRoot, t, r);
        try {
            return (await (0, ve.readdir)(n, {
                withFileTypes: !0
            })).filter((e)=>e.isDirectory()).map((e)=>e.name);
        } catch  {
            return [];
        }
    }
    async removeVersion(e) {
        const t = this.getCacheDir(e);
        try {
            await (0, ve.rm)(t, {
                recursive: !0,
                force: !0
            });
        } catch  {}
    }
    async removeAllVersions(e) {
        const t = Ri(this.cacheRoot, e);
        await (0, ve.rm)(t, {
            recursive: !0,
            force: !0
        });
    }
    async pruneOldVersions(e) {
        const t = await this.listCachedVersions({
            marketplaceSlug: e.marketplaceSlug,
            pluginId: e.pluginId
        }), r = new Set(e.keepVersions.map((e)=>Ai(e)));
        for (const n of t)r.has(n) || await this.removeVersion({
            marketplaceSlug: e.marketplaceSlug,
            pluginId: e.pluginId,
            version: n
        });
    }
    async markCacheComplete(e) {
        const t = this.getCacheDir(e);
        await (0, ve.writeFile)((0, I.join)(t, Ti), "");
    }
}
const Ji = /^https?:\/\/(?:www\.)?github\.com\/([^/]+)\/([^/]+?)(?:\/tree\/(.+?)(?=(?:\/?\.git)?\/?$))?(?:\/?\.git)?\/?$/i;
function Oi(e) {
    const t = e.trim().match(Ji);
    if (!t) return null;
    const [, r, n, s] = t;
    return {
        owner: r,
        repo: n.replace(/\.git$/i, ""),
        branch: s ?? "main"
    };
}
class Bi {
    constructor(e){
        const t = e ?? process.env.HOME ?? "";
        this.filePath = (0, I.join)(t, ".cursor", "plugins", "github-plugins.json");
    }
    async ensureDir() {
        const { mkdir: e } = await Promise.resolve().then(require.t.bind(require, 51455, 19));
        await e((0, I.dirname)(this.filePath), {
            recursive: !0
        });
    }
    async readFile() {
        try {
            const e = await (0, ve.readFile)(this.filePath, "utf-8"), t = JSON.parse(e);
            return Array.isArray(t.plugins) ? {
                plugins: t.plugins
            } : {
                plugins: []
            };
        } catch  {
            return {
                plugins: []
            };
        }
    }
    async writeFile(e) {
        await this.ensureDir(), await (0, ve.writeFile)(this.filePath, JSON.stringify({
            version: 1,
            ...e
        }, null, 2), "utf-8");
    }
    async addPlugin(e) {
        const t = Oi(e);
        if (!t) throw new Error(`Invalid GitHub URL: "${e}". Expected format: https://github.com/owner/repo or .../owner/repo/tree/branch`);
        const r = `${t.owner}-${t.repo}`, n = t.repo, s = await this.readFile();
        if (s.plugins.some((e)=>e.id === r)) throw new Error(`Plugin "${r}" is already added.`);
        return s.plugins.push({
            id: r,
            url: `https://github.com/${t.owner}/${t.repo}`,
            branch: t.branch,
            owner: t.owner,
            repo: t.repo
        }), await this.writeFile(s), {
            id: r,
            name: n
        };
    }
    async removePlugin(e) {
        const t = await this.readFile(), r = t.plugins.length;
        t.plugins = t.plugins.filter((t)=>t.id !== e), t.plugins.length !== r && await this.writeFile(t);
    }
    async listPlugins() {
        return (await this.readFile()).plugins.map((e)=>{
            const t = Oi(e.url);
            return {
                ...e,
                owner: e.owner ?? t?.owner ?? "unknown",
                repo: e.repo ?? t?.repo ?? "unknown"
            };
        });
    }
}
var Di = require("./module-48161.js");
var qi = require("./module-57975.js");
function Ni(e, t) {
    const r = e.releaseTag ?? t;
    if (e.releaseRepo && e.releaseAsset && r) return {
        kind: "release",
        releaseRepo: e.releaseRepo,
        releaseAsset: e.releaseAsset,
        releaseTag: r
    };
}
var Fi = require("./module-66058.js");
function Ui() {
    const e = [
        "-c",
        "credential.interactive=false",
        "-c",
        "core.fsmonitor=false"
    ];
    return "win32" === process.platform && e.push("-c", "core.longpaths=true"), e;
}
function Li(e) {
    return "function" == typeof e ? e() : e;
}
async function $i(e, t) {
    const r = function(e) {
        const t = {
            ...process.env,
            GIT_TERMINAL_PROMPT: "0",
            GIT_ASKPASS: void 0,
            VSCODE_GIT_ASKPASS_NODE: void 0,
            VSCODE_GIT_ASKPASS_MAIN: void 0,
            VSCODE_GIT_ASKPASS_EXTRA_ARGS: void 0,
            GCM_INTERACTIVE: "Never"
        };
        if (t.GIT_CONFIG_NOSYSTEM = void 0, !0 === e?.sshBatchMode) {
            const e = process.env.GIT_SSH_COMMAND?.trim() || "ssh";
            t.GIT_SSH_COMMAND = `${e} -oBatchMode=yes`;
        }
        if (void 0 !== e?.extraGitConfig) {
            const r = Object.entries(e.extraGitConfig).flatMap(([e, t])=>Array.isArray(t) ? t.map((t)=>[
                        e,
                        t
                    ]) : [
                    [
                        e,
                        t
                    ]
                ]);
            t.GIT_CONFIG_COUNT = String(r.length);
            for (const [e, [n, s]] of r.entries())t[`GIT_CONFIG_KEY_${e}`] = n, t[`GIT_CONFIG_VALUE_${e}`] = s;
        }
        return {
            cwd: e?.cwd,
            env: t
        };
    }({
        cwd: t?.cwd,
        sshBatchMode: t?.sshBatchMode,
        extraGitConfig: t?.extraGitConfig
    });
    return (0, Fi.uM)("git", [
        ...Ui(),
        ...e
    ], {
        ...r,
        ...void 0 !== t?.timeoutMs && {
            timeout: t.timeoutMs,
            killSignal: "SIGTERM"
        }
    });
}
const ji = /^[0-9a-f]{7,40}$/i, Gi = /^[0-9a-f]{40}$/i;
function zi(e) {
    for (const t of e.split(/\r?\n/)){
        const [e, r] = t.split("\t");
        if (!e?.startsWith("ref: ") || "HEAD" !== r) continue;
        const n = e.slice(5).trim();
        return n.startsWith("refs/heads/") ? n.slice(11) : n;
    }
}
function Wi(e) {
    if (void 0 === e || "" === e) return;
    const t = e.split(/\r?\n/).map((e)=>{
        const [t, r] = e.split("\t");
        if (t && r && /^[0-9a-f]{40}$/i.test(t)) return {
            sha: t,
            refName: r
        };
    }).filter((e)=>void 0 !== e);
    return 0 !== t.length ? t.find((e)=>e.refName.endsWith("^{}"))?.sha ?? t[0].sha : void 0;
}
async function Hi(e, t, r) {
    const n = t.trim();
    if (Gi.test(n)) return {
        fullSha: n.toLowerCase()
    };
    if (ji.test(n)) {
        try {
            const t = await async function(e, t, r) {
                const { stdout: n } = await $i([
                    "ls-remote",
                    e,
                    `refs/heads/${t}`,
                    `refs/tags/${t}`,
                    `refs/tags/${t}^{}`
                ], {
                    sshBatchMode: r?.sshBatchMode,
                    extraGitConfig: r?.extraGitConfig,
                    timeoutMs: r?.timeoutMs
                });
                return Wi(n)?.toLowerCase();
            }(e, n, r);
            if (t) return {
                fullSha: t
            };
        } catch  {}
        return {
            fullSha: n.toLowerCase()
        };
    }
    let s;
    try {
        if ("HEAD" === n.toUpperCase()) {
            const t = await $i([
                "ls-remote",
                "--symref",
                e,
                "HEAD"
            ], {
                sshBatchMode: r?.sshBatchMode,
                extraGitConfig: r?.extraGitConfig,
                timeoutMs: r?.timeoutMs
            }), n = Wi(t.stdout);
            if (!n) throw new Error(`git ls-remote did not return a resolvable commit for HEAD (${e})`);
            return {
                fullSha: n.toLowerCase(),
                headSymrefStdout: t.stdout
            };
        }
        s = (await $i([
            "ls-remote",
            e,
            n
        ], {
            sshBatchMode: r?.sshBatchMode,
            extraGitConfig: r?.extraGitConfig,
            timeoutMs: r?.timeoutMs
        })).stdout;
    } catch (t) {
        const r = t instanceof Error ? t.message : String(t), s = new Error(`Failed to resolve git ref "${n}" for ${e}: ${r}`);
        throw s.cause = t, s;
    }
    const o = Wi(s);
    if (!o) throw new Error(`git ls-remote did not return a resolvable commit for ref "${n}" (${e})`);
    return {
        fullSha: o.toLowerCase()
    };
}
const Ki = q.map((e)=>e.split("/")[0]);
const Vi = 2, Yi = 28;
let Qi;
function Xi() {
    return process.env.CURSOR_DISABLE_SPARSE_PLUGIN_CLONES ? Promise.resolve(!1) : (Qi ??= (async ()=>{
        try {
            const { stdout: e } = await $i([
                "--version"
            ]), t = function(e) {
                const t = /git version (\d+)\.(\d+)/.exec(e);
                return t ? {
                    major: Number(t[1]),
                    minor: Number(t[2])
                } : null;
            }(e);
            return null !== t && (t.major > Vi || t.major === Vi && t.minor >= Yi);
        } catch  {
            return !1;
        }
    })(), Qi);
}
function Zi(e) {
    let t = e.trim().replaceAll("\\", "/");
    for(; t.startsWith("./");)t = t.slice(2);
    if (t = t.replace(/\/+$/, ""), "" === t || "." === t) return null;
    if (t.startsWith("/") || /^[a-zA-Z]:/.test(t)) return null;
    return t.split("/").some((e)=>"" === e || "." === e || ".." === e) ? null : t;
}
function ea(e) {
    const t = [];
    for (const r of e){
        const e = Zi(r);
        if (null === e) return "all";
        t.push(e);
    }
    return t;
}
async function ta(e, t) {
    const r = "all" === e ? "all" : ea(e), n = t && "all" !== r && await Xi();
    return {
        materialize: r,
        sparse: n,
        sparseDirs: n ? (s = r, [
            ...new Set([
                ...Ki,
                ...s
            ])
        ]) : []
    };
    var s;
}
function ra(e) {
    return e.toLowerCase().includes("filtering not recognized by server");
}
async function na(e, t, r) {
    await $i([
        "sparse-checkout",
        "set",
        "--cone",
        "--",
        ...t
    ], {
        ...r,
        cwd: e
    });
}
async function sa(e) {
    try {
        await (0, ve.access)((0, I.join)(e, ".git", "info", "sparse-checkout"));
    } catch  {
        return !1;
    }
    try {
        const { stdout: t } = await $i([
            "config",
            "--bool",
            "--get",
            "core.sparseCheckout"
        ], {
            cwd: e
        });
        return "true" === t.trim();
    } catch  {
        return !1;
    }
}
async function oa(e, t, r) {
    if ("all" !== t && 0 === t.length) return;
    if (!await sa(e)) return;
    const n = {
        ...r,
        cwd: e,
        sshBatchMode: !0
    };
    if ("all" === t) return void await $i([
        "sparse-checkout",
        "disable"
    ], n);
    const s = ea(t);
    "all" !== s ? await $i([
        "sparse-checkout",
        "add",
        "--",
        ...s
    ], n) : await $i([
        "sparse-checkout",
        "disable"
    ], n);
}
const ia = /\.git$/i, aa = new Set([
    "account",
    "dashboard"
]);
function ca(e) {
    return e.replace(ia, "");
}
function la(e) {
    let t;
    try {
        t = decodeURIComponent(e);
    } catch  {
        return;
    }
    return t.length > 0 && !t.includes("/") ? t : void 0;
}
function ua(e) {
    const t = e.toLowerCase();
    return "github.com" === t || t.endsWith(".github.com");
}
function da(e) {
    return e.toLowerCase().split(".").includes("gitlab");
}
function pa(e) {
    const t = e.toLowerCase();
    return "bitbucket.org" === t || "www.bitbucket.org" === t;
}
var ma = require("./module-15071.js");
function ha(e) {
    const t = e.toLowerCase();
    return da(e) ? "GitLab" : t.includes("bitbucket") ? "Bitbucket" : t.includes("gitea") || t.includes("codeberg") ? "Gitea/Codeberg" : t.includes("azure") && t.includes("dev") ? "Azure DevOps" : null;
}
function fa(e) {
    return ua(e) ? "github" : da(e) ? "gitlab" : pa(e) ? "bitbucket" : function(e) {
        const t = e.toLowerCase();
        return "dev.azure.com" === t || "www.dev.azure.com" === t;
    }(e) ? "azure_devops" : "generic";
}
function ga(e) {
    let t;
    try {
        const r = e.startsWith("git@") ? `ssh://${e.replace(":", "/")}` : e;
        t = new URL(r.includes("://") ? r : `https://${r}`);
    } catch  {
        return null;
    }
    const r = t.hostname;
    let n = t.pathname.split("/").filter(Boolean);
    (0, ma.ve)(r) && "git" === n[0]?.toLowerCase() && (n = n.slice(1)), n.length >= 3 && "scm" === n[0].toLowerCase() && (n = n.slice(1));
    const s = function(e) {
        const t = e[0], r = e[1];
        if (!t || !r) return;
        const n = ca(r);
        return n ? {
            owner: t,
            repo: n,
            hasSubpath: e.length > 2
        } : void 0;
    }(n);
    return void 0 === s ? null : {
        provider: fa(r),
        owner: s.owner,
        repo: s.repo,
        host: r
    };
}
function ya(e) {
    const t = va(e);
    if (null === t) return !1;
    const r = t.pathname.split("/").filter(Boolean);
    return r.length >= 3 && "scm" === r[0].toLowerCase();
}
function wa(e) {
    const t = e.trim();
    if ("" === t) return {
        error: "URL cannot be empty"
    };
    const r = ga(t);
    if (null === r) return {
        error: "Invalid URL format. Expected: github.com/owner/repo or https://github.example.com/owner/repo"
    };
    const n = ha(r.host);
    if (null !== n) return {
        error: `Only GitHub URLs are currently supported. ${n} is not supported yet.`
    };
    const s = Ea(r.host.replace(/^www\./i, ""));
    return {
        url: `https://${s}/${ya(t) ? "scm/" : ""}${r.owner}/${r.repo}`,
        owner: r.owner,
        repo: r.repo,
        host: s
    };
}
function va(e) {
    try {
        const t = e.startsWith("git@") ? `ssh://${e.replace(":", "/")}` : e;
        return new URL(t.includes("://") ? t : `https://${t}`);
    } catch  {
        return null;
    }
}
function _a(e) {
    const t = va(e.trim());
    if (null !== t && pa(t.hostname)) return function(e) {
        const t = e[0], r = e[1];
        if (void 0 === t || void 0 === r) return;
        const n = la(t), s = la(r);
        if (void 0 === n || void 0 === s || aa.has(n.toLowerCase())) return;
        const o = ca(s);
        return o ? {
            workspace: encodeURIComponent(n),
            repo: encodeURIComponent(o),
            hasSubpath: e.length > 2
        } : void 0;
    }(function(e) {
        const t = e.pathname.split("/");
        return "" === t[0] && t.shift(), "" === t[t.length - 1] && t.pop(), t;
    }(t));
}
function ba(e) {
    const t = e.trim();
    if ("" === t) return {
        error: "URL cannot be empty"
    };
    const r = ga(t);
    if (null === r) return {
        error: "Invalid URL format. Expected: github.com/owner/repo or gitlab.com/namespace/repo"
    };
    if (da(r.host)) {
        const e = va(t), r = null === e ? void 0 : function(e) {
            const t = e.indexOf("-"), r = -1 !== t, n = r ? e.slice(0, t) : [
                ...e
            ];
            if (n.length < 2 || n.some((e)=>0 === e.length)) return;
            const s = ca(n[n.length - 1]);
            return s ? (n[n.length - 1] = s, {
                repositorySegments: n,
                hasSpecialRouteSeparator: r
            }) : void 0;
        }(e.pathname.split("/").filter(Boolean));
        if (null === e || void 0 === r) return {
            error: "Invalid GitLab repository URL format. Expected: https://gitlab.com/namespace/repo"
        };
        const n = e.host.replace(/^www\./i, "");
        return {
            url: `https://${n}/${r.repositorySegments.join("/")}`,
            owner: r.repositorySegments[0],
            repo: r.repositorySegments[r.repositorySegments.length - 1],
            host: n,
            provider: "gitlab"
        };
    }
    if ("bitbucket" === r.provider) {
        const e = _a(t);
        if (void 0 === e) return {
            error: "Invalid Bitbucket repository URL format. Expected: https://bitbucket.org/{workspace}/{repo}"
        };
        const n = r.host.replace(/^www\./i, "");
        return {
            url: `https://${n}/${e.workspace}/${e.repo}`,
            owner: e.workspace,
            repo: e.repo,
            host: n,
            provider: "bitbucket"
        };
    }
    if ("azure_devops" === r.provider) {
        const e = va(t), n = null === e ? void 0 : function(e) {
            const t = e.findIndex((e)=>"_git" === e.toLowerCase());
            if (t < 1 || t > 2) return;
            const r = e[0], n = e[t + 1];
            if (!r || !n) return;
            const s = ca(n);
            if (!s) return;
            const o = 2 === t ? e[1] : s;
            return o ? {
                organization: r,
                project: o,
                repo: s,
                hasSubpath: e.length > t + 2
            } : void 0;
        }(e.pathname.split("/").filter(Boolean));
        if (null === e || void 0 === n) return {
            error: "Invalid Azure DevOps repository URL format. Expected: https://dev.azure.com/{organization}/{project}/_git/{repo}"
        };
        const s = r.host.replace(/^www\./i, "");
        return {
            url: `https://${s}/${n.organization}/${n.project}/_git/${n.repo}`,
            owner: n.organization,
            repo: n.repo,
            host: s,
            provider: "azure_devops",
            project: n.project
        };
    }
    if (Sa(r)) {
        const e = Ea(r.host.replace(/^www\./i, ""));
        return {
            url: `https://${e}/${ya(t) ? "scm/" : ""}${r.owner}/${r.repo}`,
            owner: r.owner,
            repo: r.repo,
            host: e,
            provider: "github"
        };
    }
    const n = ha(r.host);
    return {
        error: "Only GitHub, GitLab, Bitbucket, and Azure DevOps URLs are currently supported." + (null !== n ? ` ${n} is not supported yet.` : "")
    };
}
function Sa(e) {
    switch(e.provider){
        case "github":
            return !0;
        case "generic":
            return !(0, ma.ve)(e.host) && null === ha(e.host);
        case "gitlab":
        case "bitbucket":
        case "azure_devops":
            return !1;
        default:
            e.provider;
            return !1;
    }
}
function ka(e) {
    const t = ba(e);
    if ("error" in t) return null;
    switch(t.provider){
        case "github":
            return `git@${t.host}:${t.owner}/${t.repo}.git`;
        case "gitlab":
            return function(e) {
                let t;
                try {
                    t = new URL(e.url).pathname.replace(/^\//, "").replace(/\.git$/i, "");
                } catch  {
                    return null;
                }
                if (0 === t.length) return null;
                const r = e.host.replace(/:\d+$/, "");
                return `git@${r}:${t}.git`;
            }(t);
        case "bitbucket":
        case "azure_devops":
            return null;
        default:
            t.provider;
            return null;
    }
}
function xa(e) {
    return null != e && e.trim().toLowerCase().startsWith("file://");
}
function Ea(e) {
    return ua(e) ? "github.com" : e;
}
function Ia(e) {
    return !e.operatingSystems || 0 === e.operatingSystems.length || e.operatingSystems.includes(function() {
        const e = (0, Di.platform)();
        return "win32" === e ? "Windows" : "darwin" === e ? "Macintosh" : "Linux";
    }());
}
function Ta(e) {
    return /[\n\r:#[\]{}&*!|>'"%@`]/.test(e) || e.startsWith(" ") || e.endsWith(" ") ? `"${e.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"` : e;
}
var Ca = require("./module-65716.js");
function Pa(e, t) {
    const r = (0, I.resolve)(e), n = (0, I.resolve)(e, t), s = (0, I.relative)(r, n);
    if (s.startsWith("..") || (0, I.isAbsolute)(s)) throw new Error(`Invalid subPath: path traversal not allowed (${JSON.stringify(t)})`);
    return n;
}
const Aa = new Set([
    "con",
    "prn",
    "aux",
    "nul",
    "com1",
    "com2",
    "com3",
    "com4",
    "com5",
    "com6",
    "com7",
    "com8",
    "com9",
    "lpt1",
    "lpt2",
    "lpt3",
    "lpt4",
    "lpt5",
    "lpt6",
    "lpt7",
    "lpt8",
    "lpt9"
]);
function Ra(e) {
    const t = (0, Fe.Nz)(e).replace(/[. ]+$/g, "");
    return "" === t || "." === t || ".." === t ? "_" : Aa.has(t.toLowerCase()) ? `_${t}` : t;
}
const Ma = 18e5, Ja = 6e5, Oa = {
    recursive: !0,
    force: !0,
    maxRetries: 3
}, Ba = [
    "terminal prompts disabled",
    "could not read username",
    "host key verification failed",
    "could not read from remote repository",
    "permission denied",
    "repository not found",
    "user cancelled dialog",
    "spawn git enoent",
    "authentication failed",
    "unable to get password from user"
], Da = [
    "enotempty: directory not empty, rename",
    "/_staging/"
], qa = [
    "upload-pack: not our ref",
    "server does not allow request for unadvertised object"
];
function Na(e) {
    const t = String(e).toLowerCase().replaceAll("\\", "/");
    return Ba.some((e)=>t.includes(e)) ? "user_git_access" : Da.every((e)=>t.includes(e)) ? "local_cache_race" : qa.some((e)=>t.includes(e)) ? "stale_pinned_ref" : "infrastructure";
}
function Fa(e) {
    return "object" == typeof e && null !== e && (!0 === e.killed || Fa(e.cause));
}
function Ua(e) {
    return Fa(e) ? "killed_by_budget" : Na(e);
}
function La(e) {
    const t = ba(e);
    if (!("error" in t) && "gitlab" === t.provider) {
        let r;
        try {
            r = new URL(t.url).pathname.replace(/^\//, "");
        } catch  {
            throw new Error(`Invalid git URL: ${e}`);
        }
        const n = r.split("/").filter(Boolean).map((e)=>e.toLowerCase());
        if (n.length < 2) throw new Error(`Invalid git URL: ${e}`);
        return {
            host: t.host.toLowerCase(),
            pathSegments: n
        };
    }
    const r = ga(e);
    if (null === r) throw new Error(`Invalid git URL: ${e}`);
    return {
        host: Ea(r.host.replace(/^www\./i, "")).toLowerCase(),
        pathSegments: [
            r.owner.toLowerCase(),
            r.repo.toLowerCase()
        ]
    };
}
const $a = new Map;
class ja {
    constructor(e, t){
        this.cacheRoot = e, this.options = t, this.manifestCache = new Map;
    }
    get sparsePluginClones() {
        return this.options?.sparsePluginClones ?? !1;
    }
    remoteTimeoutMs() {
        return this.sparsePluginClones ? Ma : void 0;
    }
    localTimeoutMs() {
        return this.sparsePluginClones ? Ja : void 0;
    }
    lsRemoteTimeoutMs() {
        return this.sparsePluginClones ? 3e4 : void 0;
    }
    async cloneResolvedRef(e, t, r, n) {
        const s = {
            cwd: e,
            sshBatchMode: n?.sshBatchMode,
            extraGitConfig: {
                ...Li(this.options?.extraGitConfig),
                "safe.directory": e
            }
        }, { sparse: o, sparseDirs: i } = await ta(n?.materialize ?? "all", this.sparsePluginClones);
        await $i([
            "init"
        ], {
            ...s,
            timeoutMs: this.localTimeoutMs()
        }), o && await na(e, i, {
            sshBatchMode: n?.sshBatchMode,
            extraGitConfig: Li(this.options?.extraGitConfig),
            timeoutMs: this.localTimeoutMs()
        });
        const { stderr: a } = await $i([
            "fetch",
            "--depth",
            "1",
            ...o ? [
                "--filter=blob:none"
            ] : [],
            t,
            r
        ], {
            ...s,
            timeoutMs: this.remoteTimeoutMs()
        });
        return await $i([
            "checkout",
            "FETCH_HEAD"
        ], {
            ...s,
            timeoutMs: this.remoteTimeoutMs()
        }), {
            strategy: o ? "sparse" : "full",
            filterIgnoredByServer: o && ra(a ?? "")
        };
    }
    async createStagingDir() {
        const e = (0, I.join)(this.cacheRoot, "_staging", (0, E.randomUUID)());
        return await (0, ve.mkdir)(e, {
            recursive: !0
        }), e;
    }
    async moveToCanonicalDir(e, t) {
        return await (0, ve.mkdir)((0, I.dirname)(t), {
            recursive: !0
        }), await (0, ve.rm)(t, Oa), await (0, ve.rename)(e, t), t;
    }
    async cleanStaleStagingDirs() {
        const e = (0, I.join)(this.cacheRoot, "_staging");
        try {
            const t = await (0, ve.readdir)(e, {
                withFileTypes: !0
            }), r = Date.now();
            await Promise.all(t.filter((e)=>e.isDirectory()).map(async (t)=>{
                try {
                    const n = (0, I.join)(e, t.name), s = await (0, ve.stat)(n);
                    r - s.mtimeMs > ja.STALE_STAGING_THRESHOLD_MS && await (0, ve.rm)(n, Oa);
                } catch  {}
            }));
        } catch  {}
    }
    getLegacyCloneDir(e, t) {
        return (0, I.join)(this.cacheRoot, Ra(e), Ra(t));
    }
    getCanonicalCloneDir(e, t) {
        const { host: r, pathSegments: n } = La(e);
        return (0, I.join)(this.cacheRoot, Ra(r), ...n.map(Ra), Ra(t));
    }
    getCanonicalRepoRootDir(e) {
        const { host: t, pathSegments: r } = La(e);
        return (0, I.join)(this.cacheRoot, Ra(t), ...r.map(Ra));
    }
    async pruneSiblingCloneDirs(e, t, r) {
        const n = this.getCanonicalRepoRootDir(e), s = Ra(t);
        try {
            const e = await (0, ve.readdir)(n, {
                withFileTypes: !0
            });
            await Promise.all(e.filter((e)=>e.isDirectory() && e.name !== s).map((e)=>(0, ve.rm)((0, I.join)(n, e.name), Oa)));
        } catch  {}
        if (void 0 !== r) try {
            await (0, ve.rm)(r, Oa);
        } catch  {}
    }
    async ensureCloned(e, t, r, n = s, o) {
        const i = this.serializedOnRepo(this.getCanonicalRepoRootDir(t), ()=>this.ensureClonedImpl(e, t, r, n, o?.materialize ?? "all"));
        if (this.sparsePluginClones) return i;
        return (0, Ca.wj)(i, 3e4, `ensureCloned timed out after 30000ms for ${t} @ ${r}`);
    }
    async ensureMaterialized(e, t, r = s) {
        const n = this.serializedOnRepo((0, I.dirname)(e), async ()=>{
            const n = performance.now();
            try {
                await oa(e, t, {
                    extraGitConfig: Li(this.options?.extraGitConfig),
                    timeoutMs: this.remoteTimeoutMs()
                }), r.increment("marketplace_cache_manager.ensure_materialized.success", 1), r.distribution("marketplace_cache_manager.ensure_materialized.duration", performance.now() - n);
            } catch (s) {
                throw r.log("error", "Failed to materialize plugin directories in sparse marketplace clone", {
                    clonePath: e,
                    spec: "all" === t ? "all" : t.join(","),
                    error: String(s),
                    errorCategory: Ua(s)
                }), r.increment("marketplace_cache_manager.ensure_materialized.error", 1, {
                    error_category: Ua(s)
                }), r.distribution("marketplace_cache_manager.ensure_materialized.duration", performance.now() - n, {
                    outcome: "error"
                }), s;
            }
        });
        if (this.sparsePluginClones) return n;
        return (0, Ca.wj)(n, 3e4, `ensureMaterialized timed out after 30000ms for ${e}`);
    }
    async serializedOnRepo(e, t) {
        const r = `${this.cacheRoot}:${e}`, n = ($a.get(r) ?? Promise.resolve()).catch(()=>{}).then(t);
        $a.set(r, n);
        try {
            return await n;
        } finally{
            $a.get(r) === n && $a.delete(r);
        }
    }
    async ensureClonedImpl(e, t, r, n, s) {
        n.log("info", `MarketplaceCacheManager: Ensuring cloned ${e} at ${t}@${r}`, {
            marketplaceId: e,
            gitUrl: t,
            ref: r
        });
        const o = r.trim();
        let i, a = t.startsWith("git@") || t.startsWith("ssh://") ? null : ka(t);
        if (null !== a) try {
            i = (await Hi(a, o, {
                sshBatchMode: !0,
                extraGitConfig: Li(this.options?.extraGitConfig),
                timeoutMs: this.lsRemoteTimeoutMs()
            })).fullSha;
        } catch (e) {
            if (this.sparsePluginClones && Fa(e)) throw e;
            n.log("debug", "Failed to resolve remote ref using SSH URL, falling back to HTTPS", {
                gitUrl: t,
                ref: r,
                error: String(e),
                errorCategory: Na(e)
            }), a = null, i = (await Hi(t, o, {
                extraGitConfig: Li(this.options?.extraGitConfig),
                timeoutMs: this.lsRemoteTimeoutMs()
            })).fullSha;
        }
        else i = (await Hi(t, o, {
            extraGitConfig: Li(this.options?.extraGitConfig),
            timeoutMs: this.lsRemoteTimeoutMs()
        })).fullSha;
        const c = this.getCanonicalCloneDir(t, i), l = this.getLegacyCloneDir(e, o);
        n.log("info", `MarketplaceCacheManager: Resolved clone directory for ${e} at ${t}@${r} to ${c}`, {
            marketplaceId: e,
            resolvedRef: i,
            originalRef: o
        });
        const u = performance.now(), d = (e, t)=>{
            n.increment(`marketplace_cache_manager.ensure_cloned.${e}`, 1, t), n.distribution(`marketplace_cache_manager.ensure_cloned.${e}.duration`, performance.now() - u, t);
        };
        if (await this.isCloneComplete(c)) {
            await this.pruneSiblingCloneDirs(t, i, l);
            const e = await sa(c);
            return e && await oa(c, s, {
                extraGitConfig: Li(this.options?.extraGitConfig),
                timeoutMs: this.remoteTimeoutMs()
            }), d("cache_hit", {
                strategy: e ? "sparse" : "full"
            }), c;
        }
        return n.increment("marketplace_cache_manager.ensure_cloned.cache_miss", 1), this.cloneViaStaging(c, t, a, i, l, r, n, d, s);
    }
    async cloneViaStaging(e, t, r, n, s, o, i, a, c) {
        await this.cleanStaleStagingDirs();
        const l = await this.createStagingDir();
        i.log("info", `MarketplaceCacheManager: Cloning ${t}@${o} into staging directory: ${l}`, {
            gitUrl: t,
            ref: o,
            cloneDir: e
        });
        const u = this.sparsePluginClones ? setInterval(()=>{
            const e = new Date;
            (0, ve.utimes)(l, e, e).catch(()=>{});
        }, ja.STAGING_HEARTBEAT_INTERVAL_MS) : void 0;
        u?.unref?.();
        try {
            let u;
            if (null !== r) try {
                u = await this.cloneResolvedRef(l, r, n, {
                    sshBatchMode: !0,
                    materialize: c
                });
            } catch (e) {
                if (this.sparsePluginClones && Fa(e)) throw e;
                i.log("debug", "Falling back to HTTPS clone due to SSH clone failure", {
                    gitUrl: t,
                    ref: o,
                    error: String(e),
                    errorCategory: Ua(e)
                }), await (0, ve.rm)(l, Oa), await (0, ve.mkdir)(l, {
                    recursive: !0
                }), u = await this.cloneResolvedRef(l, t, n, {
                    materialize: c
                });
            }
            else u = await this.cloneResolvedRef(l, t, n, {
                materialize: c
            });
            u.filterIgnoredByServer && (i.log("warn", "Server ignored --filter=blob:none; sparse clone downloaded a full pack", {
                gitUrl: t,
                ref: o
            }), i.increment("marketplace_cache_manager.ensure_cloned.filter_ignored_by_server", 1));
            const d = await this.moveToCanonicalDir(l, e);
            return await this.pruneSiblingCloneDirs(t, n, s), a("cache_write_success", {
                strategy: u.strategy
            }), d;
        } catch (e) {
            const r = Ua(e);
            throw a("error", {
                error_category: r
            }), i.log("error", "Failed to clone marketplace repository via staging clone", {
                gitUrl: t,
                ref: o,
                error: String(e),
                errorCategory: r
            }), i.captureException(e, {
                error_type: "clone_marketplace_repository",
                error_category: r
            }), e;
        } finally{
            void 0 !== u && clearInterval(u);
            try {
                await (0, ve.rm)(l, Oa);
            } catch  {}
        }
    }
    async isCloneComplete(e) {
        try {
            if (!(await (0, ve.stat)(e)).isDirectory()) return !1;
            const t = await (0, ve.readdir)(e);
            if (!t.includes(".git")) return !1;
            if (t.length > 1) return !0;
            try {
                return (await (0, ve.stat)((0, I.join)(e, ".git", "info", "sparse-checkout"))).isFile();
            } catch  {
                return !1;
            }
        } catch  {
            return !1;
        }
    }
    getPluginDir(e, t) {
        return Pa(e, t);
    }
    async copyPluginToDir(e, t) {
        await (0, ve.mkdir)(t, {
            recursive: !0
        }), await (0, ve.cp)(e, t, {
            recursive: !0,
            verbatimSymlinks: !0
        });
    }
    async readManifest(e, t = {}) {
        const r = function(e, t) {
            return JSON.stringify({
                clonePath: e,
                repoName: t.repoName ?? null,
                fallbackId: t.fallbackId ?? null
            });
        }(e, t);
        if (this.manifestCache.has(r)) return this.manifestCache.get(r) ?? null;
        const n = await Ga(e, t);
        return this.manifestCache.set(r, n), n;
    }
    async resolvePluginPath(e, t) {
        const r = await this.readManifest(e);
        if (!r) return null;
        const n = r.plugins.find((e)=>e.name === t.toLowerCase());
        if (!n) return null;
        const s = he(n.source, r.metadata?.pluginRoot);
        return s && ge(s) ? s : null;
    }
    async discoverPlugins(e) {
        const t = await this.readManifest(e);
        return t ? za(t) : [];
    }
}
async function Ga(e, t = {}) {
    for (const r of q){
        const n = (0, I.join)(e, r);
        let s;
        try {
            s = await (0, ve.readFile)(n, "utf-8");
        } catch  {
            continue;
        }
        const o = pe(s, t);
        if (o.success) return o.data;
    }
    return null;
}
function za(e) {
    const t = [], r = function(e, t) {
        const r = [];
        for (const n of e){
            const e = n.source;
            if ("string" == typeof e) {
                const s = he(e, t);
                null !== s ? r.push({
                    entry: n,
                    kind: "local",
                    localPath: s
                }) : r.push({
                    entry: n,
                    kind: "unresolvable",
                    rawSource: e
                });
                continue;
            }
            switch(e.source){
                case "github":
                    r.push({
                        entry: n,
                        kind: "external-github",
                        externalUrl: `https://github.com/${e.repo}.git`,
                        externalRef: e.ref,
                        externalSha: e.sha,
                        effectiveRef: e.sha ?? e.ref
                    });
                    break;
                case "url":
                    r.push({
                        entry: n,
                        kind: "external-url",
                        externalUrl: e.url,
                        externalRef: e.ref,
                        externalSha: e.sha,
                        effectiveRef: e.sha ?? e.ref
                    });
                    break;
                case "git-subdir":
                    r.push({
                        entry: n,
                        kind: "external-git-subdir",
                        externalUrl: e.url,
                        externalRef: e.ref,
                        externalSha: e.sha,
                        effectiveRef: e.sha ?? e.ref,
                        subdirPath: e.path
                    });
            }
        }
        return r;
    }(e.plugins, e.metadata?.pluginRoot);
    for (const e of r){
        const { name: r, displayName: n, description: s, version: o } = e.entry, i = {
            name: r,
            displayName: n,
            description: s,
            version: o
        };
        switch(e.kind){
            case "local":
                ge(e.localPath) && t.push({
                    ...i,
                    sourceType: "local",
                    gitPath: e.localPath
                });
                break;
            case "external-github":
                t.push({
                    ...i,
                    sourceType: "github",
                    gitUrl: e.externalUrl,
                    gitRef: e.externalRef,
                    sha: e.externalSha
                });
                break;
            case "external-url":
                t.push({
                    ...i,
                    sourceType: "url",
                    gitUrl: e.externalUrl,
                    gitRef: e.externalRef,
                    sha: e.externalSha
                });
                break;
            case "external-git-subdir":
                t.push({
                    ...i,
                    sourceType: "git-subdir",
                    gitUrl: e.externalUrl,
                    gitRef: e.externalRef,
                    sha: e.externalSha,
                    subdirPath: e.subdirPath
                });
                break;
            case "unresolvable":
                break;
            default:
        }
    }
    return t;
}
ja.STALE_STAGING_THRESHOLD_MS = 3e5, ja.STAGING_HEARTBEAT_INTERVAL_MS = 6e4;
const Wa = (0, qi.debuglog)("cursor-plugins");
function Ha(e) {
    const t = e.name?.trim();
    return void 0 !== t && t.length > 0 ? t : e.pluginId;
}
function Ka(e, t) {
    return void 0 !== e?.marketplace ? e.marketplace : void 0 !== e?.marketplaceId ? (t ?? []).find((t)=>void 0 !== t.id && String(t.id) === String(e.marketplaceId)) : void 0;
}
function Va(e, t) {
    const r = t?.distributionGitUrl?.trim();
    return r ? t?.gitUrl && !ic(e, t.gitUrl) ? e : r : e;
}
function Ya(e) {
    return e?.distributionGitUrl?.trim() || e?.gitUrl;
}
function Qa(e, t) {
    if (e.pinnedGitRef) return e.pinnedGitRef;
    if (e.plugin?.gitRef) return e.plugin.gitRef;
    const r = Ka(e.plugin, t), n = e.plugin?.gitUrl, s = r?.gitUrl;
    return !(n && s && n !== s) && r?.gitRef ? r.gitRef : "main";
}
const Xa = "backend-git://";
function Za(e, t, r) {
    const n = r ? `#${encodeURIComponent(r)}` : "";
    return `${Xa}${encodeURIComponent(e)}@${encodeURIComponent(t)}${n}`;
}
function ec(e) {
    if (!e.startsWith(Xa)) return null;
    const t = e.slice(14), r = t.indexOf("#"), n = r >= 0 ? t.slice(0, r) : t, s = r >= 0 ? t.slice(r + 1) : void 0, o = n.lastIndexOf("@");
    if (o < 0) return null;
    return {
        gitUrl: decodeURIComponent(n.slice(0, o)),
        ref: decodeURIComponent(n.slice(o + 1)),
        gitPath: s ? decodeURIComponent(s) : void 0
    };
}
const tc = "backend-release://";
function rc(e) {
    const t = e.tag ? `@${encodeURIComponent(e.tag)}` : "";
    return `${tc}${encodeURIComponent(e.repo)}#${encodeURIComponent(e.asset)}${t}`;
}
function nc(e) {
    if (!e.startsWith(tc)) return null;
    const t = e.slice(18), r = t.indexOf("#");
    if (r < 0) return null;
    const n = decodeURIComponent(t.slice(0, r)), s = t.slice(r + 1), o = s.lastIndexOf("@");
    return {
        repo: n,
        asset: o >= 0 ? decodeURIComponent(s.slice(0, o)) : decodeURIComponent(s),
        tag: o >= 0 ? decodeURIComponent(s.slice(o + 1)) : void 0
    };
}
const sc = /^[0-9a-f]{7,40}$/i;
function oc(e) {
    let t;
    try {
        t = La(e);
    } catch  {
        return null;
    }
    return `${t.host}\0${t.pathSegments.join("\0")}`;
}
function ic(e, t) {
    if (e.trim() === t.trim()) return !0;
    const r = oc(e), n = oc(t);
    return null !== r && r === n;
}
const ac = 524288e3, cc = 104857600;
async function lc(e, t, r, n, s, o) {
    const i = await async function(e) {
        const { repo: t, asset: r, tag: n } = e, { apiBase: s, ownerRepo: o, host: i } = function(e) {
            const t = e.split("/");
            if (3 === t.length) return {
                apiBase: `https://${t[0]}/api/v3`,
                ownerRepo: `${t[1]}/${t[2]}`,
                host: t[0]
            };
            if (2 === t.length) return {
                apiBase: "https://api.github.com",
                ownerRepo: e,
                host: "github.com"
            };
            throw new Error(`Invalid release repo format: ${e}`);
        }(t), a = "github.com" === i && void 0 !== e.githubToken && e.githubToken.length > 0 ? {
            Authorization: `token ${e.githubToken}`
        } : {}, c = n ? `${s}/repos/${o}/releases/tags/${encodeURIComponent(n)}` : `${s}/repos/${o}/releases/latest`, l = await fetch(c, {
            headers: {
                Accept: "application/vnd.github.v3+json",
                "User-Agent": "CursorPluginInstaller",
                ...a
            }
        });
        if (!l.ok) throw new Error(`Failed to fetch release from ${c}: ${l.status} ${l.statusText}`);
        const u = await l.json(), d = u.assets.find((e)=>e.name === r);
        if (!d) {
            const e = u.assets.map((e)=>e.name).join(", ");
            throw new Error(`Release asset "${r}" not found. Available assets: ${e}`);
        }
        if (d.size > cc) throw new Error(`Release asset "${r}" exceeds maximum size of 104857600 bytes (actual: ${d.size})`);
        const p = new URL(d.browser_download_url);
        if ("https:" !== p.protocol || !uc(p.hostname, i)) throw new Error(`Refusing to download release asset from untrusted host: ${p.hostname}`);
        const m = await fetch(d.browser_download_url, {
            headers: {
                "User-Agent": "CursorPluginInstaller",
                Accept: "application/octet-stream",
                ...a
            }
        });
        if (!m.ok) throw new Error(`Failed to download release asset: ${m.status} ${m.statusText}`);
        if (m.url) {
            const e = new URL(m.url);
            if ("https:" !== e.protocol || !uc(e.hostname, i)) throw new Error(`Refusing to download release asset: redirected to untrusted host: ${e.hostname}`);
        }
        const h = Buffer.from(await m.arrayBuffer());
        if (h.byteLength > cc) throw new Error(`Release asset "${r}" actual download size exceeds maximum of 104857600 bytes (actual: ${h.byteLength})`);
        if (e.expectedSha256) {
            const t = (0, E.createHash)("sha256").update(h).digest("hex");
            if (t !== e.expectedSha256) throw new Error(`Release asset "${r}" integrity check failed: expected SHA-256 ${e.expectedSha256}, got ${t}`);
        }
        return h;
    }({
        repo: e,
        asset: t,
        tag: r,
        expectedSha256: s,
        githubToken: o
    }), a = i.byteLength;
    await (0, ve.mkdir)(n, {
        recursive: !0
    });
    const c = await (0, ve.mkdtemp)((0, I.join)((0, Di.tmpdir)(), "release-asset-")), l = (0, I.join)(c, "asset.tar.gz"), u = (0, I.join)(c, "extracted");
    try {
        await (0, ve.writeFile)(l, i), await (0, ve.mkdir)(u, {
            recursive: !0
        });
        let e = 0, t = 0;
        await bi({
            file: l,
            cwd: u,
            onReadEntry: (r)=>{
                if (t++, t > 5e4) throw new Error("Release archive contains too many files (>50000).");
                if (e += r.size, e > ac) throw new Error("Release archive uncompressed size exceeds maximum of 524288000 bytes.");
                if (a > 0 && e / a > 100) throw new Error("Release archive has suspicious compression ratio (>100x).");
            }
        });
        const r = await (0, ve.readdir)(u, {
            withFileTypes: !0
        }), s = r.filter((e)=>e.isDirectory()), o = r.filter((e)=>e.isFile());
        let c = u;
        if (1 === s.length && 0 === o.length) {
            const e = (0, I.join)(u, s[0].name), t = await (0, ve.readdir)(e);
            t.some((e)=>D.includes(e)) && (c = e);
        }
        const d = await (0, ve.readdir)(c);
        await Promise.all(d.map((e)=>(0, ve.cp)((0, I.join)(c, e), (0, I.join)(n, e), {
                recursive: !0,
                verbatimSymlinks: !0
            })));
    } finally{
        await (0, ve.rm)(c, {
            recursive: !0,
            force: !0
        }).catch(()=>{});
    }
}
function uc(e, t) {
    return !(e !== t && !e.endsWith(".githubusercontent.com")) || ("github.com" === t ? "github.com" === e : e.endsWith(`.${t}`));
}
async function dc(e, t, r = s, n, o) {
    const i = o?.sparsePluginClones ?? !1, a = i ? Ma : void 0, c = nc(e.downloadUrl);
    if (c) {
        if (e.gitPath) {
            const r = await (0, ve.mkdtemp)((0, I.join)((0, Di.tmpdir)(), "release-plugin-"));
            try {
                await lc(c.repo, c.asset, c.tag, r, o?.expectedReleaseAssetSha256, o?.githubToken);
                const n = Pa(r, e.gitPath);
                await (0, ve.mkdir)(t, {
                    recursive: !0
                }), await (0, ve.cp)(n, t, {
                    recursive: !0,
                    verbatimSymlinks: !0
                });
            } finally{
                await (0, ve.rm)(r, {
                    recursive: !0,
                    force: !0
                }).catch(()=>{});
            }
        } else await lc(c.repo, c.asset, c.tag, t, o?.expectedReleaseAssetSha256, o?.githubToken);
        return;
    }
    const l = ec(e.downloadUrl);
    if (!l) throw new Error(`Invalid download URL format for plugin ${e.pluginId}: ${e.downloadUrl}`);
    const u = await (0, ve.mkdtemp)((0, I.join)((0, Di.tmpdir)(), "backend-plugin-"));
    try {
        let o;
        if (await async function(e, t, r, n = s, o, i = "all", a = !1) {
            const c = performance.now(), l = sc.test(t), u = "HEAD" === t.toUpperCase(), d = {
                ...o,
                "safe.directory": r
            }, p = a ? Ma : void 0, m = a ? Ja : void 0, { sparse: h, sparseDirs: f } = await ta(i, a), g = h ? [
                "--filter=blob:none",
                "--sparse"
            ] : [], y = !!h || void 0, w = async (e)=>{
                h && await na(r, f, {
                    extraGitConfig: d,
                    timeoutMs: e,
                    sshBatchMode: !0
                });
            }, v = async (e, n)=>{
                let s = "";
                return u ? ({ stderr: s } = await $i([
                    "clone",
                    "--depth",
                    "1",
                    ...g,
                    e,
                    r
                ], {
                    extraGitConfig: d,
                    timeoutMs: p,
                    sshBatchMode: n
                }), await w(p)) : l ? (await $i([
                    "init"
                ], {
                    cwd: r,
                    extraGitConfig: d,
                    timeoutMs: m
                }), await $i([
                    "remote",
                    "add",
                    "origin",
                    e
                ], {
                    cwd: r,
                    extraGitConfig: d,
                    timeoutMs: m
                }), await w(m), { stderr: s } = await $i([
                    "fetch",
                    "--depth",
                    "1",
                    ...h ? [
                        "--filter=blob:none"
                    ] : [],
                    "origin",
                    t
                ], {
                    cwd: r,
                    extraGitConfig: d,
                    timeoutMs: p,
                    sshBatchMode: n
                }), await $i([
                    "checkout",
                    "FETCH_HEAD"
                ], {
                    cwd: r,
                    extraGitConfig: d,
                    timeoutMs: p,
                    sshBatchMode: n
                })) : ({ stderr: s } = await $i([
                    "clone",
                    "--depth",
                    "1",
                    "--branch",
                    t,
                    ...g,
                    e,
                    r
                ], {
                    extraGitConfig: d,
                    timeoutMs: p,
                    sshBatchMode: n
                }), await w(p)), s;
            }, _ = e.startsWith("git@") || e.startsWith("ssh://") ? null : ka(e);
            let b = "";
            if (null !== _) try {
                b = await v(_, !0);
            } catch (t) {
                if (a && Fa(t)) throw t;
                await (0, ve.rm)(r, {
                    recursive: !0,
                    force: !0
                }), await (0, ve.mkdir)(r, {
                    recursive: !0
                }), b = await v(e, y);
            }
            else b = await v(e, y);
            h && ra(b) && (n.log("warn", `shallowClone: server ignored --filter=blob:none for ${e}; sparse clone downloaded a full pack`), n.increment("backend_marketplace_client.shallow_clone.filter_ignored_by_server", 1));
            const S = (performance.now() - c).toFixed(1);
            Wa("shallowClone %s@%s completed in %sms", e, t, S), n.log("info", `shallowClone ${e}@${t} completed in ${S}ms (${h ? "sparse" : "full"})`);
        }(l.gitUrl, l.ref, u, r, n, l.gitPath ? ea([
            l.gitPath
        ]) : [], i), l.gitPath) o = Pa(u, l.gitPath);
        else {
            const t = await async function(e, t) {
                for (const r of q){
                    const n = (0, I.join)(e, r);
                    let s;
                    try {
                        s = await (0, ve.readFile)(n, "utf-8");
                    } catch  {
                        continue;
                    }
                    const o = pe(s);
                    if (!o.success) return {
                        type: "manifest-unresolved",
                        reason: `Invalid marketplace manifest at ${r}: ${o.error}`
                    };
                    const i = o.data, a = i.plugins.find((e)=>e.name === t.toLowerCase());
                    if (!a) return {
                        type: "manifest-unresolved",
                        reason: `Plugin ${JSON.stringify(t)} not found in ${r}`
                    };
                    if ("string" != typeof a.source && "git-subdir" === a.source.source) return {
                        type: "manifest-unresolved",
                        reason: `Plugin ${JSON.stringify(t)} uses unsupported git-subdir source`
                    };
                    const c = he(a.source, i.metadata?.pluginRoot);
                    return c && ge(c) ? {
                        type: "resolved",
                        gitPath: c
                    } : {
                        type: "manifest-unresolved",
                        reason: `Plugin ${JSON.stringify(t)} has unresolved or unsafe source path`
                    };
                }
                return {
                    type: "no-manifest"
                };
            }(u, e.name);
            if ("resolved" === t.type) await oa(u, ea([
                t.gitPath
            ]), {
                extraGitConfig: n,
                timeoutMs: a
            }), o = Pa(u, t.gitPath);
            else {
                if ("manifest-unresolved" === t.type) throw new Error(`Unable to install plugin ${JSON.stringify(e.name)} without gitPath: ${t.reason}`);
                await oa(u, "all", {
                    extraGitConfig: n,
                    timeoutMs: a
                }), o = u;
            }
        }
        await (0, ve.mkdir)(t, {
            recursive: !0
        }), await (0, ve.cp)(o, t, {
            recursive: !0,
            verbatimSymlinks: !0
        });
    } finally{
        await (0, ve.rm)(u, {
            recursive: !0,
            force: !0
        }).catch(()=>{});
    }
}
class pc {
    constructor(e, t, r, n, o){
        this.getEffectiveUserPlugins = e;
        const i = "string" == typeof t || void 0 === t ? {
            marketplaceCacheRoot: t,
            pluginLogger: r,
            marketplaceCacheOptions: n,
            listOptions: o
        } : t, a = i.marketplaceCacheOptions ?? n;
        this.pluginLogger = i.pluginLogger ?? r ?? s, this.extraGitConfig = i.extraGitConfig, this.awaitAuthReady = i.awaitAuthReady, this.githubToken = i.githubToken, this.sparsePluginClones = i.sparsePluginClones ?? !1, this.marketplaceCache = i.marketplaceCacheRoot ? new ja(i.marketplaceCacheRoot, {
            ...a,
            extraGitConfig: a?.extraGitConfig ?? i.extraGitConfig,
            sparsePluginClones: this.sparsePluginClones
        }) : void 0;
        const c = i.listOptions ?? o;
        this.allowedMarketplaceNames = c?.allowedMarketplaceNames ? new Set(c.allowedMarketplaceNames) : void 0, this.enableInlinePlugins = c?.enableInlinePlugins ?? !1;
    }
    isMarketplaceAllowed(e) {
        return void 0 === this.allowedMarketplaceNames || void 0 !== e?.name && this.allowedMarketplaceNames.has(e.name);
    }
    async listEnabledPlugins(e, t) {
        const r = await this.getEffectiveUserPlugins(), n = r.plugins ?? [], s = r.marketplaces ?? [], o = [], i = [], a = new Map, c = async (e, t)=>{
            const r = `${e}\0${t}`;
            let n = a.get(r);
            if (!n) {
                const s = Li(this.extraGitConfig), o = this.sparsePluginClones ? 3e4 : void 0, i = e.startsWith("git@") || e.startsWith("ssh://") ? null : ka(e), c = async (e, r)=>{
                    const n = {};
                    return r && (n.sshBatchMode = !0), void 0 !== s && (n.extraGitConfig = s), void 0 !== o && (n.timeoutMs = o), (Object.keys(n).length > 0 ? await Hi(e, t, n) : await Hi(e, t)).fullSha;
                };
                if (null !== i) try {
                    n = await c(i, !0);
                } catch (t) {
                    if (this.sparsePluginClones && Fa(t)) throw t;
                    n = await c(e, !1);
                }
                else n = await c(e, !1);
                a.set(r, n);
            }
            return n;
        }, l = async (e)=>{
            const { preferredGitUrl: t, sourceGitUrl: r, gitRef: n, pluginId: s } = e;
            if (t !== r) {
                void 0 !== this.awaitAuthReady && await this.awaitAuthReady();
                const e = `${t}\0${n}`, o = !a.has(e);
                let i;
                o && this.pluginLogger.increment("marketplace.origin_distribution.fetch", 1);
                try {
                    i = {
                        sha: await c(t, n),
                        gitUrl: t
                    };
                } catch (e) {
                    o && this.pluginLogger.increment("marketplace.origin_distribution.fetch.error", 1), this.pluginLogger.captureException(e, {
                        error_type: "distribution_url_fallback"
                    }), this.pluginLogger.log("warn", `Distribution mirror ${t}@${n} unavailable (not synced yet or unreachable); falling back to source ${r}`, {
                        pluginId: s,
                        preferredGitUrl: t,
                        sourceGitUrl: r,
                        gitRef: n,
                        error: String(e)
                    });
                }
                if (void 0 !== i) {
                    if (o) try {
                        this.pluginLogger.log("info", `Resolved plugin ${s} from Origin distribution mirror ${t}@${n}`, {
                            pluginId: s,
                            preferredGitUrl: t,
                            gitRef: n
                        });
                    } catch  {}
                    return i;
                }
            }
            return {
                sha: await c(r, n),
                gitUrl: r
            };
        };
        for (const e of n){
            if (!e.isEnabled || !e.plugin?.name) continue;
            const t = e.plugin, r = Ka(t, s);
            if (!this.isMarketplaceAllowed(r)) {
                this.pluginLogger.log("info", `Skipping plugin ${t.name} because marketplace ${r?.name ?? "<none>"} is not allowed`, {
                    pluginId: t.name,
                    marketplaceName: r?.name,
                    allowedMarketplaceNames: void 0 !== this.allowedMarketplaceNames ? Array.from(this.allowedMarketplaceNames) : void 0
                });
                continue;
            }
            const n = Ha({
                name: t.name,
                pluginId: void 0 !== t.id ? String(t.id) : t.name ?? ""
            }), a = n;
            if (!t.gitUrl) {
                if (!this.enableInlinePlugins) {
                    this.pluginLogger.log("info", `Skipping plugin ${n} without gitUrl (enableInlinePlugins=false)`, {
                        pluginId: a
                    });
                    continue;
                }
                const s = e.inlineContentJson;
                if (!s) {
                    this.pluginLogger.log("info", `Skipping DB-inline plugin ${n}: no inline content provided`, {
                        pluginId: a
                    });
                    continue;
                }
                const i = (0, E.createHash)("sha256").update(`${t.id ?? "0"}:${t.updatedAt ?? "0"}`).digest("hex").slice(0, 40), c = r?.name ? {
                    id: void 0 !== r.id ? `${r.name}-${r.id}` : `${r.name}-inline`,
                    name: r.name
                } : void 0;
                this.pluginLogger.log("info", `BackendMarketplaceClient: Adding DB-inline plugin: ${a}`, {
                    pluginId: a,
                    marketplaceId: c?.id ?? "unknown",
                    version: i
                }), o.push({
                    pluginId: a,
                    pluginDbId: void 0 !== t.id ? String(t.id) : void 0,
                    configuredVariables: e.configuredVariables,
                    isTeamRequired: e.isTeamRequired,
                    name: n,
                    version: i,
                    downloadUrl: `inline://${t.id ?? a}`,
                    marketplaceDbId: void 0 !== r?.id ? String(r.id) : void 0,
                    marketplace: c,
                    inlineContentJson: s
                });
                continue;
            }
            const c = t.gitUrl, u = Va(c, r), d = Qa(e, s), p = Ni(t, d), m = r?.gitRef ?? d;
            let h, f, g = u;
            try {
                if (void 0 !== p) h = `release/${p.releaseTag}`;
                else {
                    const e = await l({
                        preferredGitUrl: u,
                        sourceGitUrl: c,
                        gitRef: d,
                        pluginId: a
                    });
                    h = e.sha, g = e.gitUrl;
                }
            } catch (e) {
                this.pluginLogger.captureException(e, {
                    error_type: "resolve_version_sha"
                }), this.pluginLogger.log("error", `Failed to resolve version for plugin ${n}@${d}, skipping plugin`, {
                    pluginId: a,
                    ref: d,
                    error: String(e)
                });
                const s = e instanceof Error ? e.message : String(e);
                i.push({
                    pluginName: n,
                    pluginId: a,
                    pluginDbId: void 0 !== t.id ? String(t.id) : void 0,
                    marketplaceName: r?.name,
                    errorMessage: s,
                    errorType: /timed?\s*out/i.test(s) ? "timeout" : "clone"
                });
                continue;
            }
            f = void 0 !== p ? rc({
                repo: p.releaseRepo,
                asset: p.releaseAsset,
                tag: p.releaseTag
            }) : Za(g, d, t.gitPath ?? void 0);
            const y = Ya(r);
            let w = y, v = r?.gitUrl, _ = m;
            if (r?.gitUrl && y) {
                const e = ic(c, r.gitUrl), t = e ? g : y, s = e ? c : r.gitUrl, o = e ? d : m;
                v = s;
                try {
                    const e = await l({
                        preferredGitUrl: t,
                        sourceGitUrl: s,
                        gitRef: o,
                        pluginId: a
                    });
                    _ = e.sha, w = e.gitUrl;
                } catch (e) {
                    this.pluginLogger.captureException(e, {
                        error_type: "resolve_marketplace_cache_ref"
                    }), this.pluginLogger.log("warn", `Failed to resolve marketplace cache ref for plugin ${n} from ${t}@${o}, falling back to raw ref`, {
                        pluginId: a,
                        cacheRepoUrl: t,
                        cacheRef: o,
                        error: String(e)
                    }), w = s;
                }
            }
            const b = r?.name ? {
                id: void 0 !== r.id ? `${r.name}-${r.id}` : `${r.name}-${encodeURIComponent(r.gitUrl ?? "project")}`,
                name: r.name,
                ...w && {
                    gitUrl: w,
                    gitRef: _
                }
            } : void 0, S = void 0 === p && (g !== c || w !== v) ? {
                downloadUrl: Za(c, d, t.gitPath ?? void 0),
                marketplaceGitUrl: v
            } : void 0;
            this.pluginLogger.log("info", `BackendMarketplaceClient: Adding enabled plugin: ${a} from ${_} at ${t.gitPath}`, {
                pluginId: a,
                marketplaceId: b?.id ?? "unknown",
                gitPath: t.gitPath ?? void 0,
                gitRef: _
            }), o.push({
                pluginId: a,
                pluginDbId: void 0 !== t.id ? String(t.id) : void 0,
                configuredVariables: e.configuredVariables,
                isTeamRequired: e.isTeamRequired,
                name: n,
                version: h,
                downloadUrl: f,
                marketplaceDbId: void 0 !== r?.id ? String(r.id) : void 0,
                marketplace: b,
                gitPath: t.gitPath ?? void 0,
                isOriginBacked: void 0 === p && g !== c || void 0,
                originSourceFallback: S
            });
        }
        return {
            plugins: o,
            listFailures: i
        };
    }
    isDirectInstallSameFetch(e) {
        const t = e.marketplace;
        if (!t?.gitUrl || !t.gitRef) return !1;
        const r = ec(e.downloadUrl);
        return !!r && !!ic(r.gitUrl, t.gitUrl) && (r.ref === t.gitRef || e.version === t.gitRef);
    }
    async installPlugin(e, t) {
        if (e.inlineContentJson) await async function(e) {
            const { targetDir: t, inlineContentJson: r, pluginName: n } = e, s = JSON.parse(r);
            await (0, ve.mkdir)(t, {
                recursive: !0
            });
            const o = {};
            if (s.rules && s.rules.length > 0) {
                const e = (0, I.join)(t, "rules");
                await (0, ve.mkdir)(e, {
                    recursive: !0
                });
                const r = [];
                for (const t of s.rules){
                    if (!t.content) continue;
                    if (!1 === t.isActive) continue;
                    const n = `${(0, Fe.Nz)(t.name)}.md`, s = [];
                    s.push(`description: ${Ta(t.name)}`), t.globs && t.globs.length > 0 && s.push(`globs: ${Ta(t.globs.join(", "))}`), s.push(`alwaysApply: ${!0 === t.isRequired}`);
                    const o = `---\n${s.join("\n")}\n---\n\n`;
                    await (0, ve.writeFile)((0, I.join)(e, n), o + t.content, "utf-8"), r.push(`rules/${n}`);
                }
                r.length > 0 && (o.rules = r);
            }
            if (s.commands && s.commands.length > 0) {
                const e = (0, I.join)(t, "commands");
                await (0, ve.mkdir)(e, {
                    recursive: !0
                });
                const r = [];
                for (const t of s.commands){
                    if (!t.content) continue;
                    if (!1 === t.isActive) continue;
                    const n = `${(0, Fe.Nz)(t.name)}.md`, s = t.description ? `---\ndescription: ${Ta(t.description)}\n---\n\n` : "";
                    await (0, ve.writeFile)((0, I.join)(e, n), s + t.content, "utf-8"), r.push(`commands/${n}`);
                }
                r.length > 0 && (o.commands = r);
            }
            if (s.hooks && s.hooks.length > 0) {
                const e = (0, I.join)(t, "hooks");
                await (0, ve.mkdir)(e, {
                    recursive: !0
                });
                const r = {};
                for (const e of s.hooks){
                    const t = e.hookStep;
                    t && !1 !== e.isActive && Ia(e) && (r[t] || (r[t] = []), "prompt" === e.hookType ? r[t].push({
                        type: "prompt",
                        prompt: e.promptContent ?? "",
                        ...e.promptModel ? {
                            model: e.promptModel
                        } : {}
                    }) : r[t].push({
                        type: "command",
                        command: e.scriptContent ?? ""
                    }));
                }
                await (0, ve.writeFile)((0, I.join)(e, "hooks.json"), JSON.stringify({
                    version: 1,
                    hooks: r
                }, null, 2), "utf-8");
            }
            if (s.mcpServers && s.mcpServers.length > 0) {
                const e = {};
                for (const t of s.mcpServers)t.config && (e[t.name] = t.config);
                Object.keys(e).length > 0 && await (0, ve.writeFile)((0, I.join)(t, ".mcp.json"), JSON.stringify({
                    mcpServers: e
                }, null, 2), "utf-8");
            }
            const i = {
                name: n,
                ...o
            }, a = (0, I.join)(t, ".cursor-plugin");
            await (0, ve.mkdir)(a, {
                recursive: !0
            }), await (0, ve.writeFile)((0, I.join)(a, "plugin.json"), JSON.stringify(i, null, 2), "utf-8");
        }({
            targetDir: t,
            inlineContentJson: e.inlineContentJson,
            pluginName: e.name
        });
        else {
            e.isOriginBacked && void 0 !== this.awaitAuthReady && await this.awaitAuthReady();
            try {
                return void await this.installFromEntryUrls(e, t);
            } catch (r) {
                const n = function(e) {
                    const t = e.originSourceFallback;
                    if (void 0 === t) return;
                    let r = e.marketplace;
                    if (void 0 !== r) if (void 0 !== t.marketplaceGitUrl) r = {
                        ...r,
                        gitUrl: t.marketplaceGitUrl
                    };
                    else {
                        const { gitUrl: e, gitRef: t, ...n } = r;
                        r = n;
                    }
                    return {
                        ...e,
                        downloadUrl: t.downloadUrl,
                        marketplace: r,
                        isOriginBacked: void 0,
                        originSourceFallback: void 0
                    };
                }(e);
                if (void 0 === n) throw r;
                this.pluginLogger.captureException(r, {
                    error_type: "install_plugin_from_origin_distribution"
                }), this.pluginLogger.log("warn", `Failed to install plugin ${e.name} from the Origin distribution mirror, falling back to the source repo`, {
                    pluginId: e.pluginId,
                    version: e.version,
                    sourceDownloadUrl: n.downloadUrl,
                    sourceMarketplaceGitUrl: n.marketplace?.gitUrl,
                    error: String(r)
                }), this.pluginLogger.increment("marketplace.origin_distribution.install.source_fallback", 1), await (0, ve.rm)(t, {
                    recursive: !0,
                    force: !0
                });
                try {
                    await this.installFromEntryUrls(n, t);
                } catch (e) {
                    throw this.pluginLogger.increment("marketplace.origin_distribution.install.source_fallback.error", 1), e;
                }
            }
        }
    }
    async installFromEntryUrls(e, t) {
        if (!(null !== nc(e.downloadUrl))) try {
            if (await this.tryInstallFromMarketplaceCache(e, t)) return void this.emitOriginLoadIfApplicable(e);
        } catch (t) {
            if (this.pluginLogger.captureException(t, {
                error_type: "install_plugin_from_marketplace_cache"
            }), this.sparsePluginClones && this.isDirectInstallSameFetch(e) && Fa(t)) throw this.pluginLogger.log("warn", `Failed to install plugin ${e.name} from marketplace cache; skipping direct install fallback because it would repeat the identical fetch`, {
                pluginId: e.pluginId,
                version: e.version,
                error: String(t)
            }), t;
            this.pluginLogger.log("warn", `Failed to install plugin ${e.name} from marketplace cache, falling back to direct install`, {
                pluginId: e.pluginId,
                version: e.version,
                error: String(t)
            });
        }
        await dc(e, t, this.pluginLogger, Li(this.extraGitConfig), {
            githubToken: this.githubToken,
            sparsePluginClones: this.sparsePluginClones
        }), this.emitOriginLoadIfApplicable(e);
    }
    emitOriginLoadIfApplicable(e) {
        if (e.isOriginBacked) try {
            this.pluginLogger.increment("marketplace.origin_distribution.load", 1), this.pluginLogger.log("info", `Loaded plugin ${e.pluginId} from Origin distribution (fetch complete)`, {
                pluginId: e.pluginId
            });
        } catch  {}
    }
    async prewarmMarketplaceClones(e) {
        const t = this.marketplaceCache;
        if (!t) return;
        const r = new Map;
        for (const t of e){
            const e = t.marketplace;
            if (!e?.gitUrl) continue;
            const n = e.gitRef ?? "main", s = `${e.id}\0${e.gitUrl}\0${n}`;
            let o = r.get(s);
            void 0 === o && (o = {
                marketplaceId: e.id,
                gitUrl: e.gitUrl,
                gitRef: n,
                gitPaths: []
            }, r.set(s, o)), t.gitPath && o.gitPaths.push(t.gitPath);
        }
        for (const e of r.values()){
            const r = ea(e.gitPaths), n = performance.now();
            try {
                await t.ensureCloned(e.marketplaceId, e.gitUrl, e.gitRef, this.pluginLogger, {
                    materialize: r
                }), this.pluginLogger.log("info", `Prewarmed marketplace clone ${e.gitUrl}@${e.gitRef} for ${e.gitPaths.length} plugin directories`, {
                    marketplaceId: e.marketplaceId,
                    gitUrl: e.gitUrl,
                    gitRef: e.gitRef,
                    requestedDirs: e.gitPaths.length,
                    materialize: "all" === r ? "all" : r.length
                }), this.pluginLogger.increment("marketplace_cache_manager.prewarm.success", 1, {
                    materialize: "all" === r ? "all" : "dirs"
                });
            } catch (t) {
                this.pluginLogger.captureException(t, {
                    error_type: "prewarm_marketplace_clone"
                }), this.pluginLogger.log("warn", `Failed to prewarm marketplace clone ${e.gitUrl}@${e.gitRef}; falling back to per-plugin materialization`, {
                    marketplaceId: e.marketplaceId,
                    gitUrl: e.gitUrl,
                    gitRef: e.gitRef,
                    error: String(t)
                }), this.pluginLogger.increment("marketplace_cache_manager.prewarm.error", 1);
            }
            this.pluginLogger.distribution("marketplace_cache_manager.prewarm.duration", performance.now() - n);
        }
    }
    async tryInstallFromMarketplaceCache(e, t) {
        const r = this.marketplaceCache, n = e.marketplace;
        if (!r || !n || !n.gitUrl) return this.pluginLogger.log("info", "No marketplace cache or marketplace metadata, skipping cache check", {
            pluginId: e.pluginId,
            name: e.name,
            version: e.version,
            marketplaceId: e.marketplace?.id
        }), !1;
        const s = await r.ensureCloned(n.id, n.gitUrl, n.gitRef ?? "main", this.pluginLogger, {
            materialize: e.gitPath ? ea([
                e.gitPath
            ]) : []
        }), o = e.gitPath ?? await r.resolvePluginPath(s, e.name);
        if (!o) return this.pluginLogger.log("info", "No git path found for plugin, skipping cache check", {
            pluginId: e.pluginId,
            name: e.name,
            version: e.version,
            marketplaceId: e.marketplace?.id
        }), !1;
        void 0 === e.gitPath && await r.ensureMaterialized(s, ea([
            o
        ]), this.pluginLogger);
        const i = r.getPluginDir(s, o);
        return await r.copyPluginToDir(i, t), !0;
    }
    async discoverMarketplacePlugins(e, t, r) {
        const n = this.marketplaceCache;
        if (!n) throw new Error("discoverMarketplacePlugins requires a MarketplaceCacheManager (marketplaceCacheRoot)");
        const s = await n.ensureCloned(e, t, r, this.pluginLogger, {
            materialize: []
        });
        return n.discoverPlugins(s);
    }
}
function mc(e, t, r, n, s) {
    return new pc(e, t, r, n, s);
}
var hc = require("./module-73136.js"), fc = require("./module-91022.js"), gc = require("./module-60896.js");
function yc(e) {
    return e.replace(/\\/g, "/").replace(/\/+$/, "") || "/";
}
function wc(e, t, r, n) {
    const s = e?.plugins;
    if (!s || "object" != typeof s) return [];
    const o = t?.enabledPlugins ?? {}, i = {};
    r?.enabledPlugins && Object.assign(i, r.enabledPlugins);
    const a = void 0 !== n ? yc(n) : void 0, c = new Set, l = [];
    for (const [e, t] of Object.entries(s)){
        if (!Array.isArray(t) || 0 === t.length) continue;
        if (void 0 !== a && !1 === i[e]) continue;
        let r;
        void 0 !== a && (r = t.find((t)=>{
            if (!("project" === t.scope || "local" === t.scope) || !t.projectPath) return !1;
            return yc(t.projectPath) === a && !0 === i[e];
        })), r || !0 !== o[e] || (r = t.find((e)=>"user" === e.scope)), r?.installPath && !c.has(e) && (l.push({
            pluginId: e,
            installPath: r.installPath
        }), c.add(e));
    }
    return l;
}
function vc(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var _c, bc, Sc, kc, xc, Ec, Ic, Tc, Cc, Pc, Ac, Rc, Mc, Jc, Oc, Bc, Dc, qc, Nc, Fc, Uc, Lc, $c, jc, Gc, zc, Wc, Hc, Kc, Vc, Yc, Qc, Xc, Zc, el, tl, rl, nl, sl, ol, il, al, cl, ll, ul = {}, dl = {}, pl = {};
function ml() {
    if (_c) return pl;
    function e(e) {
        return null == e;
    }
    return _c = 1, pl.isNothing = e, pl.isObject = function(e) {
        return "object" == typeof e && null !== e;
    }, pl.toArray = function(t) {
        return Array.isArray(t) ? t : e(t) ? [] : [
            t
        ];
    }, pl.repeat = function(e, t) {
        let r = "";
        for(let n = 0; n < t; n += 1)r += e;
        return r;
    }, pl.isNegativeZero = function(e) {
        return 0 === e && Number.NEGATIVE_INFINITY === 1 / e;
    }, pl.extend = function(e, t) {
        if (t) {
            const r = Object.keys(t);
            for(let n = 0, s = r.length; n < s; n += 1){
                const s = r[n];
                e[s] = t[s];
            }
        }
        return e;
    }, pl;
}
function hl() {
    if (Sc) return bc;
    function e(e, t) {
        let r = "";
        const n = e.reason || "(unknown reason)";
        return e.mark ? (e.mark.name && (r += 'in "' + e.mark.name + '" '), r += "(" + (e.mark.line + 1) + ":" + (e.mark.column + 1) + ")", !t && e.mark.snippet && (r += "\n\n" + e.mark.snippet), n + " " + r) : n;
    }
    function t(t, r) {
        Error.call(this), this.name = "YAMLException", this.reason = t, this.mark = r, this.message = e(this, !1), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = (new Error).stack || "";
    }
    return Sc = 1, t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t.prototype.toString = function(t) {
        return this.name + ": " + e(this, t);
    }, bc = t;
}
function fl() {
    if (Ic) return Ec;
    Ic = 1;
    const e = hl(), t = [
        "kind",
        "multi",
        "resolve",
        "construct",
        "instanceOf",
        "predicate",
        "represent",
        "representName",
        "defaultStyle",
        "styleAliases"
    ], r = [
        "scalar",
        "sequence",
        "mapping"
    ];
    return Ec = function(n, s) {
        if (s = s || {}, Object.keys(s).forEach(function(r) {
            if (-1 === t.indexOf(r)) throw new e('Unknown option "' + r + '" is met in definition of "' + n + '" YAML type.');
        }), this.options = s, this.tag = n, this.kind = s.kind || null, this.resolve = s.resolve || function() {
            return !0;
        }, this.construct = s.construct || function(e) {
            return e;
        }, this.instanceOf = s.instanceOf || null, this.predicate = s.predicate || null, this.represent = s.represent || null, this.representName = s.representName || null, this.defaultStyle = s.defaultStyle || null, this.multi = s.multi || !1, this.styleAliases = function(e) {
            const t = {};
            return null !== e && Object.keys(e).forEach(function(r) {
                e[r].forEach(function(e) {
                    t[String(e)] = r;
                });
            }), t;
        }(s.styleAliases || null), -1 === r.indexOf(this.kind)) throw new e('Unknown kind "' + this.kind + '" is specified for "' + n + '" YAML type.');
    };
}
function gl() {
    if (Cc) return Tc;
    Cc = 1;
    const e = hl(), t = fl();
    function r(e, t) {
        const r = [];
        return e[t].forEach(function(e) {
            let t = r.length;
            r.forEach(function(r, n) {
                r.tag === e.tag && r.kind === e.kind && r.multi === e.multi && (t = n);
            }), r[t] = e;
        }), r;
    }
    function n(e) {
        return this.extend(e);
    }
    return n.prototype.extend = function(s) {
        let o = [], i = [];
        if (s instanceof t) i.push(s);
        else if (Array.isArray(s)) i = i.concat(s);
        else {
            if (!s || !Array.isArray(s.implicit) && !Array.isArray(s.explicit)) throw new e("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
            s.implicit && (o = o.concat(s.implicit)), s.explicit && (i = i.concat(s.explicit));
        }
        o.forEach(function(r) {
            if (!(r instanceof t)) throw new e("Specified list of YAML types (or a single Type object) contains a non-Type object.");
            if (r.loadKind && "scalar" !== r.loadKind) throw new e("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
            if (r.multi) throw new e("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
        }), i.forEach(function(r) {
            if (!(r instanceof t)) throw new e("Specified list of YAML types (or a single Type object) contains a non-Type object.");
        });
        const a = Object.create(n.prototype);
        return a.implicit = (this.implicit || []).concat(o), a.explicit = (this.explicit || []).concat(i), a.compiledImplicit = r(a, "implicit"), a.compiledExplicit = r(a, "explicit"), a.compiledTypeMap = function() {
            const e = {
                scalar: {},
                sequence: {},
                mapping: {},
                fallback: {},
                multi: {
                    scalar: [],
                    sequence: [],
                    mapping: [],
                    fallback: []
                }
            };
            function t(t) {
                t.multi ? (e.multi[t.kind].push(t), e.multi.fallback.push(t)) : e[t.kind][t.tag] = e.fallback[t.tag] = t;
            }
            for(let e = 0, r = arguments.length; e < r; e += 1)arguments[e].forEach(t);
            return e;
        }(a.compiledImplicit, a.compiledExplicit), a;
    }, Tc = n;
}
function yl() {
    if (Ac) return Pc;
    Ac = 1;
    const e = fl();
    return Pc = new e("tag:yaml.org,2002:str", {
        kind: "scalar",
        construct: function(e) {
            return null !== e ? e : "";
        }
    });
}
function wl() {
    if (Mc) return Rc;
    Mc = 1;
    const e = fl();
    return Rc = new e("tag:yaml.org,2002:seq", {
        kind: "sequence",
        construct: function(e) {
            return null !== e ? e : [];
        }
    });
}
function vl() {
    if (Oc) return Jc;
    Oc = 1;
    const e = fl();
    return Jc = new e("tag:yaml.org,2002:map", {
        kind: "mapping",
        construct: function(e) {
            return null !== e ? e : {};
        }
    });
}
function _l() {
    if (Dc) return Bc;
    Dc = 1;
    const e = gl();
    return Bc = new e({
        explicit: [
            yl(),
            wl(),
            vl()
        ]
    });
}
function bl() {
    if (Nc) return qc;
    Nc = 1;
    const e = fl();
    return qc = new e("tag:yaml.org,2002:null", {
        kind: "scalar",
        resolve: function(e) {
            if (null === e) return !0;
            const t = e.length;
            return 1 === t && "~" === e || 4 === t && ("null" === e || "Null" === e || "NULL" === e);
        },
        construct: function() {
            return null;
        },
        predicate: function(e) {
            return null === e;
        },
        represent: {
            canonical: function() {
                return "~";
            },
            lowercase: function() {
                return "null";
            },
            uppercase: function() {
                return "NULL";
            },
            camelcase: function() {
                return "Null";
            },
            empty: function() {
                return "";
            }
        },
        defaultStyle: "lowercase"
    });
}
function Sl() {
    if (Uc) return Fc;
    Uc = 1;
    const e = fl();
    return Fc = new e("tag:yaml.org,2002:bool", {
        kind: "scalar",
        resolve: function(e) {
            if (null === e) return !1;
            const t = e.length;
            return 4 === t && ("true" === e || "True" === e || "TRUE" === e) || 5 === t && ("false" === e || "False" === e || "FALSE" === e);
        },
        construct: function(e) {
            return "true" === e || "True" === e || "TRUE" === e;
        },
        predicate: function(e) {
            return "[object Boolean]" === Object.prototype.toString.call(e);
        },
        represent: {
            lowercase: function(e) {
                return e ? "true" : "false";
            },
            uppercase: function(e) {
                return e ? "TRUE" : "FALSE";
            },
            camelcase: function(e) {
                return e ? "True" : "False";
            }
        },
        defaultStyle: "lowercase"
    });
}
function kl() {
    if ($c) return Lc;
    $c = 1;
    const e = ml(), t = fl();
    function r(e) {
        return e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102;
    }
    function n(e) {
        return e >= 48 && e <= 55;
    }
    function s(e) {
        return e >= 48 && e <= 57;
    }
    function o(e) {
        let t = e, r = 1, n = t[0];
        if ("-" !== n && "+" !== n || ("-" === n && (r = -1), t = t.slice(1), n = t[0]), "0" === t) return 0;
        if ("0" === n) {
            if ("b" === t[1]) return r * parseInt(t.slice(2), 2);
            if ("x" === t[1]) return r * parseInt(t.slice(2), 16);
            if ("o" === t[1]) return r * parseInt(t.slice(2), 8);
        }
        return r * parseInt(t, 10);
    }
    return Lc = new t("tag:yaml.org,2002:int", {
        kind: "scalar",
        resolve: function(e) {
            if (null === e) return !1;
            const t = e.length;
            let i = 0, a = !1;
            if (!t) return !1;
            let c = e[i];
            if ("-" !== c && "+" !== c || (c = e[++i]), "0" === c) {
                if (i + 1 === t) return !0;
                if (c = e[++i], "b" === c) {
                    for(i++; i < t; i++){
                        if (c = e[i], "0" !== c && "1" !== c) return !1;
                        a = !0;
                    }
                    return a && isFinite(o(e));
                }
                if ("x" === c) {
                    for(i++; i < t; i++){
                        if (!r(e.charCodeAt(i))) return !1;
                        a = !0;
                    }
                    return a && isFinite(o(e));
                }
                if ("o" === c) {
                    for(i++; i < t; i++){
                        if (!n(e.charCodeAt(i))) return !1;
                        a = !0;
                    }
                    return a && isFinite(o(e));
                }
            }
            for(; i < t; i++){
                if (!s(e.charCodeAt(i))) return !1;
                a = !0;
            }
            return !!a && isFinite(o(e));
        },
        construct: function(e) {
            return o(e);
        },
        predicate: function(t) {
            return "[object Number]" === Object.prototype.toString.call(t) && t % 1 == 0 && !e.isNegativeZero(t);
        },
        represent: {
            binary: function(e) {
                return e >= 0 ? "0b" + e.toString(2) : "-0b" + e.toString(2).slice(1);
            },
            octal: function(e) {
                return e >= 0 ? "0o" + e.toString(8) : "-0o" + e.toString(8).slice(1);
            },
            decimal: function(e) {
                return e.toString(10);
            },
            hexadecimal: function(e) {
                return e >= 0 ? "0x" + e.toString(16).toUpperCase() : "-0x" + e.toString(16).toUpperCase().slice(1);
            }
        },
        defaultStyle: "decimal",
        styleAliases: {
            binary: [
                2,
                "bin"
            ],
            octal: [
                8,
                "oct"
            ],
            decimal: [
                10,
                "dec"
            ],
            hexadecimal: [
                16,
                "hex"
            ]
        }
    });
}
function xl() {
    if (Gc) return jc;
    Gc = 1;
    const e = ml(), t = fl(), r = new RegExp("^(?:[-+]?(?:[0-9]+)(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"), n = new RegExp("^(?:[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");
    const s = /^[-+]?[0-9]+e/;
    return jc = new t("tag:yaml.org,2002:float", {
        kind: "scalar",
        resolve: function(e) {
            return null !== e && !!r.test(e) && (!!isFinite(parseFloat(e, 10)) || n.test(e));
        },
        construct: function(e) {
            let t = e.toLowerCase();
            const r = "-" === t[0] ? -1 : 1;
            return "+-".indexOf(t[0]) >= 0 && (t = t.slice(1)), ".inf" === t ? 1 === r ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : ".nan" === t ? NaN : r * parseFloat(t, 10);
        },
        predicate: function(t) {
            return "[object Number]" === Object.prototype.toString.call(t) && (t % 1 != 0 || e.isNegativeZero(t));
        },
        represent: function(t, r) {
            if (isNaN(t)) switch(r){
                case "lowercase":
                    return ".nan";
                case "uppercase":
                    return ".NAN";
                case "camelcase":
                    return ".NaN";
            }
            else if (Number.POSITIVE_INFINITY === t) switch(r){
                case "lowercase":
                    return ".inf";
                case "uppercase":
                    return ".INF";
                case "camelcase":
                    return ".Inf";
            }
            else if (Number.NEGATIVE_INFINITY === t) switch(r){
                case "lowercase":
                    return "-.inf";
                case "uppercase":
                    return "-.INF";
                case "camelcase":
                    return "-.Inf";
            }
            else if (e.isNegativeZero(t)) return "-0.0";
            const n = t.toString(10);
            return s.test(n) ? n.replace("e", ".e") : n;
        },
        defaultStyle: "lowercase"
    });
}
function El() {
    return Wc ? zc : (Wc = 1, zc = _l().extend({
        implicit: [
            bl(),
            Sl(),
            kl(),
            xl()
        ]
    }));
}
function Il() {
    return Kc ? Hc : (Kc = 1, Hc = El());
}
function Tl() {
    if (Yc) return Vc;
    Yc = 1;
    const e = fl(), t = new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"), r = new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");
    return Vc = new e("tag:yaml.org,2002:timestamp", {
        kind: "scalar",
        resolve: function(e) {
            return null !== e && (null !== t.exec(e) || null !== r.exec(e));
        },
        construct: function(e) {
            let n = 0, s = null, o = t.exec(e);
            if (null === o && (o = r.exec(e)), null === o) throw new Error("Date resolve error");
            const i = +o[1], a = +o[2] - 1, c = +o[3];
            if (!o[4]) return new Date(Date.UTC(i, a, c));
            const l = +o[4], u = +o[5], d = +o[6];
            if (o[7]) {
                for(n = o[7].slice(0, 3); n.length < 3;)n += "0";
                n = +n;
            }
            if (o[9]) {
                s = 6e4 * (60 * +o[10] + +(o[11] || 0)), "-" === o[9] && (s = -s);
            }
            const p = new Date(Date.UTC(i, a, c, l, u, d, n));
            return s && p.setTime(p.getTime() - s), p;
        },
        instanceOf: Date,
        represent: function(e) {
            return e.toISOString();
        }
    });
}
function Cl() {
    if (Xc) return Qc;
    Xc = 1;
    const e = fl();
    return Qc = new e("tag:yaml.org,2002:merge", {
        kind: "scalar",
        resolve: function(e) {
            return "<<" === e || null === e;
        }
    });
}
function Pl() {
    if (el) return Zc;
    el = 1;
    const e = fl(), t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";
    return Zc = new e("tag:yaml.org,2002:binary", {
        kind: "scalar",
        resolve: function(e) {
            if (null === e) return !1;
            let r = 0;
            const n = e.length, s = t;
            for(let t = 0; t < n; t++){
                const n = s.indexOf(e.charAt(t));
                if (!(n > 64)) {
                    if (n < 0) return !1;
                    r += 6;
                }
            }
            return r % 8 == 0;
        },
        construct: function(e) {
            const r = e.replace(/[\r\n=]/g, ""), n = r.length, s = t;
            let o = 0;
            const i = [];
            for(let e = 0; e < n; e++)e % 4 == 0 && e && (i.push(o >> 16 & 255), i.push(o >> 8 & 255), i.push(255 & o)), o = o << 6 | s.indexOf(r.charAt(e));
            const a = n % 4 * 6;
            return 0 === a ? (i.push(o >> 16 & 255), i.push(o >> 8 & 255), i.push(255 & o)) : 18 === a ? (i.push(o >> 10 & 255), i.push(o >> 2 & 255)) : 12 === a && i.push(o >> 4 & 255), new Uint8Array(i);
        },
        predicate: function(e) {
            return "[object Uint8Array]" === Object.prototype.toString.call(e);
        },
        represent: function(e) {
            let r = "", n = 0;
            const s = e.length, o = t;
            for(let t = 0; t < s; t++)t % 3 == 0 && t && (r += o[n >> 18 & 63], r += o[n >> 12 & 63], r += o[n >> 6 & 63], r += o[63 & n]), n = (n << 8) + e[t];
            const i = s % 3;
            return 0 === i ? (r += o[n >> 18 & 63], r += o[n >> 12 & 63], r += o[n >> 6 & 63], r += o[63 & n]) : 2 === i ? (r += o[n >> 10 & 63], r += o[n >> 4 & 63], r += o[n << 2 & 63], r += o[64]) : 1 === i && (r += o[n >> 2 & 63], r += o[n << 4 & 63], r += o[64], r += o[64]), r;
        }
    });
}
function Al() {
    if (rl) return tl;
    rl = 1;
    const e = fl(), t = Object.prototype.hasOwnProperty, r = Object.prototype.toString;
    return tl = new e("tag:yaml.org,2002:omap", {
        kind: "sequence",
        resolve: function(e) {
            if (null === e) return !0;
            const n = {}, s = e;
            for(let e = 0, o = s.length; e < o; e += 1){
                const o = s[e];
                let i, a = !1;
                if ("[object Object]" !== r.call(o)) return !1;
                for(i in o)if (t.call(o, i)) {
                    if (a) return !1;
                    a = !0;
                }
                if (!a) return !1;
                if (t.call(n, i)) return !1;
                Object.defineProperty(n, i, {
                    value: !0
                });
            }
            return !0;
        },
        construct: function(e) {
            return null !== e ? e : [];
        }
    });
}
function Rl() {
    if (sl) return nl;
    sl = 1;
    const e = fl(), t = Object.prototype.toString;
    return nl = new e("tag:yaml.org,2002:pairs", {
        kind: "sequence",
        resolve: function(e) {
            if (null === e) return !0;
            const r = e, n = new Array(r.length);
            for(let e = 0, s = r.length; e < s; e += 1){
                const s = r[e];
                if ("[object Object]" !== t.call(s)) return !1;
                const o = Object.keys(s);
                if (1 !== o.length) return !1;
                n[e] = [
                    o[0],
                    s[o[0]]
                ];
            }
            return !0;
        },
        construct: function(e) {
            if (null === e) return [];
            const t = e, r = new Array(t.length);
            for(let e = 0, n = t.length; e < n; e += 1){
                const n = t[e], s = Object.keys(n);
                r[e] = [
                    s[0],
                    n[s[0]]
                ];
            }
            return r;
        }
    });
}
function Ml() {
    if (il) return ol;
    il = 1;
    const e = fl(), t = Object.prototype.hasOwnProperty;
    return ol = new e("tag:yaml.org,2002:set", {
        kind: "mapping",
        resolve: function(e) {
            if (null === e) return !0;
            const r = e;
            for(const e in r)if (t.call(r, e) && null !== r[e]) return !1;
            return !0;
        },
        construct: function(e) {
            return null !== e ? e : {};
        }
    });
}
function Jl() {
    return cl ? al : (cl = 1, al = Il().extend({
        implicit: [
            Tl(),
            Cl()
        ],
        explicit: [
            Pl(),
            Al(),
            Rl(),
            Ml()
        ]
    }));
}
function Ol() {
    if (ll) return dl;
    ll = 1;
    const e = ml(), t = hl(), r = function() {
        if (xc) return kc;
        xc = 1;
        const e = ml();
        function t(e, t, r, n, s) {
            let o = "", i = "";
            const a = Math.floor(s / 2) - 1;
            return n - t > a && (o = " ... ", t = n - a + o.length), r - n > a && (i = " ...", r = n + a - i.length), {
                str: o + e.slice(t, r).replace(/\t/g, "→") + i,
                pos: n - t + o.length
            };
        }
        function r(t, r) {
            return e.repeat(" ", r - t.length) + t;
        }
        return kc = function(n, s) {
            if (s = Object.create(s || null), !n.buffer) return null;
            s.maxLength || (s.maxLength = 79), "number" != typeof s.indent && (s.indent = 1), "number" != typeof s.linesBefore && (s.linesBefore = 3), "number" != typeof s.linesAfter && (s.linesAfter = 2);
            const o = /\r?\n|\r|\0/g, i = [
                0
            ], a = [];
            let c, l = -1;
            for(; c = o.exec(n.buffer);)a.push(c.index), i.push(c.index + c[0].length), n.position <= c.index && l < 0 && (l = i.length - 2);
            l < 0 && (l = i.length - 1);
            let u = "";
            const d = Math.min(n.line + s.linesAfter, a.length).toString().length, p = s.maxLength - (s.indent + d + 3);
            for(let o = 1; o <= s.linesBefore && !(l - o < 0); o++){
                const c = t(n.buffer, i[l - o], a[l - o], n.position - (i[l] - i[l - o]), p);
                u = e.repeat(" ", s.indent) + r((n.line - o + 1).toString(), d) + " | " + c.str + "\n" + u;
            }
            const m = t(n.buffer, i[l], a[l], n.position, p);
            u += e.repeat(" ", s.indent) + r((n.line + 1).toString(), d) + " | " + m.str + "\n", u += e.repeat("-", s.indent + d + 3 + m.pos) + "^\n";
            for(let o = 1; o <= s.linesAfter && !(l + o >= a.length); o++){
                const c = t(n.buffer, i[l + o], a[l + o], n.position - (i[l] - i[l + o]), p);
                u += e.repeat(" ", s.indent) + r((n.line + o + 1).toString(), d) + " | " + c.str + "\n";
            }
            return u.replace(/\n$/, "");
        }, kc;
    }(), n = Jl(), s = Object.prototype.hasOwnProperty, o = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, i = /[\x85\u2028\u2029]/, a = /[,\[\]{}]/, c = /^(?:!|!!|![0-9A-Za-z-]+!)$/, l = /^(?:!|[^,\[\]{}])(?:%[0-9a-f]{2}|[0-9a-z\-#;/?:@&=+$,_.!~*'()\[\]])*$/i;
    function u(e) {
        return Object.prototype.toString.call(e);
    }
    function d(e) {
        return 10 === e || 13 === e;
    }
    function p(e) {
        return 9 === e || 32 === e;
    }
    function m(e) {
        return 9 === e || 32 === e || 10 === e || 13 === e;
    }
    function h(e) {
        return 44 === e || 91 === e || 93 === e || 123 === e || 125 === e;
    }
    function f(e) {
        if (e >= 48 && e <= 57) return e - 48;
        const t = 32 | e;
        return t >= 97 && t <= 102 ? t - 97 + 10 : -1;
    }
    function g(e) {
        return 120 === e ? 2 : 117 === e ? 4 : 85 === e ? 8 : 0;
    }
    function y(e) {
        return e >= 48 && e <= 57 ? e - 48 : -1;
    }
    function w(e) {
        switch(e){
            case 48:
                return "\0";
            case 97:
                return "";
            case 98:
                return "\b";
            case 116:
            case 9:
                return "\t";
            case 110:
                return "\n";
            case 118:
                return "\v";
            case 102:
                return "\f";
            case 114:
                return "\r";
            case 101:
                return "";
            case 32:
                return " ";
            case 34:
                return '"';
            case 47:
                return "/";
            case 92:
                return "\\";
            case 78:
                return "";
            case 95:
                return " ";
            case 76:
                return "\u2028";
            case 80:
                return "\u2029";
            default:
                return "";
        }
    }
    function v(e) {
        return e <= 65535 ? String.fromCharCode(e) : String.fromCharCode(55296 + (e - 65536 >> 10), 56320 + (e - 65536 & 1023));
    }
    function _(e, t, r) {
        "__proto__" === t ? Object.defineProperty(e, t, {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            value: r
        }) : e[t] = r;
    }
    const b = new Array(256), S = new Array(256);
    for(let e = 0; e < 256; e++)b[e] = w(e) ? 1 : 0, S[e] = w(e);
    function k(e, t) {
        this.input = e, this.filename = t.filename || null, this.schema = t.schema || n, this.onWarning = t.onWarning || null, this.legacy = t.legacy || !1, this.json = t.json || !1, this.listener = t.listener || null, this.maxDepth = "number" == typeof t.maxDepth ? t.maxDepth : 100, this.maxTotalMergeKeys = "number" == typeof t.maxTotalMergeKeys ? t.maxTotalMergeKeys : 1e4, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = e.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.depth = 0, this.totalMergeKeys = 0, this.firstTabInLine = -1, this.documents = [], this.anchorMapTransactions = [];
    }
    function x(e, n) {
        const s = {
            name: e.filename,
            buffer: e.input.slice(0, -1),
            position: e.position,
            line: e.line,
            column: e.position - e.lineStart
        };
        return s.snippet = r(s), new t(n, s);
    }
    function E(e, t) {
        throw x(e, t);
    }
    function I(e, t) {
        e.onWarning && e.onWarning.call(null, x(e, t));
    }
    function T(e, t, r) {
        const n = e.anchorMapTransactions;
        if (0 !== n.length) {
            const r = n[n.length - 1];
            s.call(r, t) || (r[t] = {
                existed: s.call(e.anchorMap, t),
                value: e.anchorMap[t]
            });
        }
        e.anchorMap[t] = r;
    }
    function C(e) {
        return {
            position: e.position,
            line: e.line,
            lineStart: e.lineStart,
            lineIndent: e.lineIndent,
            firstTabInLine: e.firstTabInLine,
            tag: e.tag,
            anchor: e.anchor,
            kind: e.kind,
            result: e.result
        };
    }
    function P(e, t) {
        e.position = t.position, e.line = t.line, e.lineStart = t.lineStart, e.lineIndent = t.lineIndent, e.firstTabInLine = t.firstTabInLine, e.tag = t.tag, e.anchor = t.anchor, e.kind = t.kind, e.result = t.result;
    }
    const A = {
        YAML: function(e, t, r) {
            null !== e.version && E(e, "duplication of %YAML directive"), 1 !== r.length && E(e, "YAML directive accepts exactly one argument");
            const n = /^([0-9]+)\.([0-9]+)$/.exec(r[0]);
            null === n && E(e, "ill-formed argument of the YAML directive");
            const s = parseInt(n[1], 10), o = parseInt(n[2], 10);
            1 !== s && E(e, "unacceptable YAML version of the document"), e.version = r[0], e.checkLineBreaks = o < 2, 1 !== o && 2 !== o && I(e, "unsupported YAML version of the document");
        },
        TAG: function(e, t, r) {
            let n;
            2 !== r.length && E(e, "TAG directive accepts exactly two arguments");
            const o = r[0];
            n = r[1], c.test(o) || E(e, "ill-formed tag handle (first argument) of the TAG directive"), s.call(e.tagMap, o) && E(e, 'there is a previously declared suffix for "' + o + '" tag handle'), l.test(n) || E(e, "ill-formed tag prefix (second argument) of the TAG directive");
            try {
                n = decodeURIComponent(n);
            } catch (t) {
                E(e, "tag prefix is malformed: " + n);
            }
            e.tagMap[o] = n;
        }
    };
    function R(e, t, r, n) {
        if (t < r) {
            const s = e.input.slice(t, r);
            if (n) for(let t = 0, r = s.length; t < r; t += 1){
                const r = s.charCodeAt(t);
                9 === r || r >= 32 && r <= 1114111 || E(e, "expected valid JSON character");
            }
            else o.test(s) && E(e, "the stream contains non-printable characters");
            e.result += s;
        }
    }
    function M(t, r, n, o) {
        e.isObject(n) || E(t, "cannot merge mappings; the provided source object is unacceptable");
        const i = Object.keys(n);
        for(let e = 0, a = i.length; e < a; e += 1){
            const a = i[e];
            -1 !== t.maxTotalMergeKeys && ++t.totalMergeKeys > t.maxTotalMergeKeys && E(t, "merge keys exceeded maxTotalMergeKeys (" + t.maxTotalMergeKeys + ")"), s.call(r, a) || (_(r, a, n[a]), o[a] = !0);
        }
    }
    function J(e, t, r, n, o, i, a, c, l) {
        if (Array.isArray(o)) for(let t = 0, r = (o = Array.prototype.slice.call(o)).length; t < r; t += 1)Array.isArray(o[t]) && E(e, "nested arrays are not supported inside keys"), "object" == typeof o && "[object Object]" === u(o[t]) && (o[t] = "[object Object]");
        if ("object" == typeof o && "[object Object]" === u(o) && (o = "[object Object]"), o = String(o), null === t && (t = {}), "tag:yaml.org,2002:merge" === n) if (Array.isArray(i)) for(let n = 0, s = i.length; n < s; n += 1)M(e, t, i[n], r);
        else M(e, t, i, r);
        else e.json || s.call(r, o) || !s.call(t, o) || (e.line = a || e.line, e.lineStart = c || e.lineStart, e.position = l || e.position, E(e, "duplicated mapping key")), _(t, o, i), delete r[o];
        return t;
    }
    function O(e) {
        const t = e.input.charCodeAt(e.position);
        10 === t ? e.position++ : 13 === t ? (e.position++, 10 === e.input.charCodeAt(e.position) && e.position++) : E(e, "a line break is expected"), e.line += 1, e.lineStart = e.position, e.firstTabInLine = -1;
    }
    function B(e, t, r) {
        let n = 0, s = e.input.charCodeAt(e.position);
        for(; 0 !== s;){
            for(; p(s);)9 === s && -1 === e.firstTabInLine && (e.firstTabInLine = e.position), s = e.input.charCodeAt(++e.position);
            if (t && 35 === s) do {
                s = e.input.charCodeAt(++e.position);
            }while (10 !== s && 13 !== s && 0 !== s)
            if (!d(s)) break;
            for(O(e), s = e.input.charCodeAt(e.position), n++, e.lineIndent = 0; 32 === s;)e.lineIndent++, s = e.input.charCodeAt(++e.position);
        }
        return -1 !== r && 0 !== n && e.lineIndent < r && I(e, "deficient indentation"), n;
    }
    function D(e) {
        let t = e.position, r = e.input.charCodeAt(t);
        return !(45 !== r && 46 !== r || r !== e.input.charCodeAt(t + 1) || r !== e.input.charCodeAt(t + 2) || (t += 3, r = e.input.charCodeAt(t), 0 !== r && !m(r)));
    }
    function q(t, r) {
        1 === r ? t.result += " " : r > 1 && (t.result += e.repeat("\n", r - 1));
    }
    function N(e, t) {
        const r = e.tag, n = e.anchor, s = [];
        let o = !1;
        if (-1 !== e.firstTabInLine) return !1;
        null !== e.anchor && T(e, e.anchor, s);
        let i = e.input.charCodeAt(e.position);
        for(; 0 !== i && (-1 !== e.firstTabInLine && (e.position = e.firstTabInLine, E(e, "tab characters must not be used in indentation")), 45 === i);){
            if (!m(e.input.charCodeAt(e.position + 1))) break;
            if (o = !0, e.position++, B(e, !0, -1) && e.lineIndent <= t) {
                s.push(null), i = e.input.charCodeAt(e.position);
                continue;
            }
            const r = e.line;
            if (j(e, t, 3, !1, !0), s.push(e.result), B(e, !0, -1), i = e.input.charCodeAt(e.position), (e.line === r || e.lineIndent > t) && 0 !== i) E(e, "bad indentation of a sequence entry");
            else if (e.lineIndent < t) break;
        }
        return !!o && (e.tag = r, e.anchor = n, e.kind = "sequence", e.result = s, !0);
    }
    function F(e, t, r) {
        let n, s, o, i;
        const a = e.tag, c = e.anchor, l = {}, u = Object.create(null);
        let d = null, h = null, f = null, g = !1, y = !1;
        if (-1 !== e.firstTabInLine) return !1;
        null !== e.anchor && T(e, e.anchor, l);
        let w = e.input.charCodeAt(e.position);
        for(; 0 !== w;){
            g || -1 === e.firstTabInLine || (e.position = e.firstTabInLine, E(e, "tab characters must not be used in indentation"));
            const v = e.input.charCodeAt(e.position + 1), _ = e.line;
            if (63 !== w && 58 !== w || !m(v)) {
                if (s = e.line, o = e.lineStart, i = e.position, !j(e, r, 2, !1, !0)) break;
                if (e.line === _) {
                    for(w = e.input.charCodeAt(e.position); p(w);)w = e.input.charCodeAt(++e.position);
                    if (58 === w) w = e.input.charCodeAt(++e.position), m(w) || E(e, "a whitespace character is expected after the key-value separator within a block mapping"), g && (J(e, l, u, d, h, null, s, o, i), d = h = f = null), y = !0, g = !1, n = !1, d = e.tag, h = e.result;
                    else {
                        if (!y) return e.tag = a, e.anchor = c, !0;
                        E(e, "can not read an implicit mapping pair; a colon is missed");
                    }
                } else {
                    if (!y) return e.tag = a, e.anchor = c, !0;
                    E(e, "can not read a block mapping entry; a multiline key may not be an implicit key");
                }
            } else 63 === w ? (g && (J(e, l, u, d, h, null, s, o, i), d = h = f = null), y = !0, g = !0, n = !0) : g ? (g = !1, n = !0) : E(e, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"), e.position += 1, w = v;
            if ((e.line === _ || e.lineIndent > t) && (g && (s = e.line, o = e.lineStart, i = e.position), j(e, t, 4, !0, n) && (g ? h = e.result : f = e.result), g || (J(e, l, u, d, h, f, s, o, i), d = h = f = null), B(e, !0, -1), w = e.input.charCodeAt(e.position)), (e.line === _ || e.lineIndent > t) && 0 !== w) E(e, "bad indentation of a mapping entry");
            else if (e.lineIndent < t) break;
        }
        return g && J(e, l, u, d, h, null, s, o, i), y && (e.tag = a, e.anchor = c, e.kind = "mapping", e.result = l), y;
    }
    function U(e) {
        let t, r, n = !1, o = !1, i = e.input.charCodeAt(e.position);
        if (33 !== i) return !1;
        null !== e.tag && E(e, "duplication of a tag property"), i = e.input.charCodeAt(++e.position), 60 === i ? (n = !0, i = e.input.charCodeAt(++e.position)) : 33 === i ? (o = !0, t = "!!", i = e.input.charCodeAt(++e.position)) : t = "!";
        let u = e.position;
        if (n) {
            do {
                i = e.input.charCodeAt(++e.position);
            }while (0 !== i && 62 !== i)
            e.position < e.length ? (r = e.input.slice(u, e.position), i = e.input.charCodeAt(++e.position)) : E(e, "unexpected end of the stream within a verbatim tag");
        } else {
            for(; 0 !== i && !m(i);)33 === i && (o ? E(e, "tag suffix cannot contain exclamation marks") : (t = e.input.slice(u - 1, e.position + 1), c.test(t) || E(e, "named tag handle cannot contain such characters"), o = !0, u = e.position + 1)), i = e.input.charCodeAt(++e.position);
            r = e.input.slice(u, e.position), a.test(r) && E(e, "tag suffix cannot contain flow indicator characters");
        }
        r && !l.test(r) && E(e, "tag name cannot contain such characters: " + r);
        try {
            r = decodeURIComponent(r);
        } catch (t) {
            E(e, "tag name is malformed: " + r);
        }
        return n ? e.tag = r : s.call(e.tagMap, t) ? e.tag = e.tagMap[t] + r : "!" === t ? e.tag = "!" + r : "!!" === t ? e.tag = "tag:yaml.org,2002:" + r : E(e, 'undeclared tag handle "' + t + '"'), !0;
    }
    function L(e) {
        let t = e.input.charCodeAt(e.position);
        if (38 !== t) return !1;
        null !== e.anchor && E(e, "duplication of an anchor property"), t = e.input.charCodeAt(++e.position);
        const r = e.position;
        for(; 0 !== t && !m(t) && !h(t);)t = e.input.charCodeAt(++e.position);
        return e.position === r && E(e, "name of an anchor node must contain at least one character"), e.anchor = e.input.slice(r, e.position), !0;
    }
    function $(e, t, r, n) {
        const o = C(e);
        return function(e) {
            e.anchorMapTransactions.push(Object.create(null));
        }(e), P(e, t), e.tag = null, e.anchor = null, e.kind = null, e.result = null, F(e, r, n) && "mapping" === e.kind ? (function(e) {
            const t = e.anchorMapTransactions.pop(), r = e.anchorMapTransactions;
            if (0 === r.length) return;
            const n = r[r.length - 1], o = Object.keys(t);
            for(let e = 0, r = o.length; e < r; e += 1){
                const r = o[e];
                s.call(n, r) || (n[r] = t[r]);
            }
        }(e), !0) : (function(e) {
            const t = e.anchorMapTransactions.pop(), r = Object.keys(t);
            for(let n = r.length - 1; n >= 0; n -= 1){
                const s = t[r[n]];
                s.existed ? e.anchorMap[r[n]] = s.value : delete e.anchorMap[r[n]];
            }
        }(e), P(e, o), !1);
    }
    function j(t, r, n, o, i) {
        let a, c, l, u, w, _ = 1, k = !1, x = !1, I = null;
        t.depth >= t.maxDepth && E(t, "nesting exceeded maxDepth (" + t.maxDepth + ")"), t.depth += 1, null !== t.listener && t.listener("open", t), t.tag = null, t.anchor = null, t.kind = null, t.result = null;
        const P = a = c = 4 === n || 3 === n;
        if (o && B(t, !0, -1) && (k = !0, t.lineIndent > r ? _ = 1 : t.lineIndent === r ? _ = 0 : t.lineIndent < r && (_ = -1)), 1 === _) for(;;){
            const e = t.input.charCodeAt(t.position), n = C(t);
            if (k && (33 === e && null !== t.tag || 38 === e && null !== t.anchor)) break;
            if (!U(t) && !L(t)) break;
            null === I && (I = n), B(t, !0, -1) ? (k = !0, c = P, t.lineIndent > r ? _ = 1 : t.lineIndent === r ? _ = 0 : t.lineIndent < r && (_ = -1)) : c = !1;
        }
        if (c && (c = k || i), 1 === _ || 4 === n) if (u = 1 === n || 2 === n ? r : r + 1, w = t.position - t.lineStart, 1 === _) if (c && (N(t, w) || F(t, w, u)) || function(e, t) {
            let r, n, s, o = !0;
            const i = e.tag;
            let a;
            const c = e.anchor;
            let l, u, d, p;
            const h = Object.create(null);
            let f, g, y, w = e.input.charCodeAt(e.position);
            if (91 === w) l = 93, p = !1, a = [];
            else {
                if (123 !== w) return !1;
                l = 125, p = !0, a = {};
            }
            for(null !== e.anchor && T(e, e.anchor, a), w = e.input.charCodeAt(++e.position); 0 !== w;){
                if (B(e, !0, t), w = e.input.charCodeAt(e.position), w === l) return e.position++, e.tag = i, e.anchor = c, e.kind = p ? "mapping" : "sequence", e.result = a, !0;
                o ? 44 === w && E(e, "expected the node content, but found ','") : E(e, "missed comma between flow collection entries"), g = f = y = null, u = d = !1, 63 === w && m(e.input.charCodeAt(e.position + 1)) && (u = d = !0, e.position++, B(e, !0, t)), r = e.line, n = e.lineStart, s = e.position, j(e, t, 1, !1, !0), g = e.tag, f = e.result, B(e, !0, t), w = e.input.charCodeAt(e.position), !d && e.line !== r || 58 !== w || (u = !0, w = e.input.charCodeAt(++e.position), B(e, !0, t), j(e, t, 1, !1, !0), y = e.result), p ? J(e, a, h, g, f, y, r, n, s) : u ? a.push(J(e, null, h, g, f, y, r, n, s)) : a.push(f), B(e, !0, t), w = e.input.charCodeAt(e.position), 44 === w ? (o = !0, w = e.input.charCodeAt(++e.position)) : o = !1;
            }
            E(e, "unexpected end of the stream within a flow collection");
        }(t, u)) x = !0;
        else {
            const r = t.input.charCodeAt(t.position);
            null !== I && P && !c && 124 !== r && 62 !== r && $(t, I, I.position - I.lineStart, u) || a && function(t, r) {
                let n, s, o = 1, i = !1, a = !1, c = r, l = 0, u = !1, m = t.input.charCodeAt(t.position);
                if (124 === m) n = !1;
                else {
                    if (62 !== m) return !1;
                    n = !0;
                }
                for(t.kind = "scalar", t.result = ""; 0 !== m;)if (m = t.input.charCodeAt(++t.position), 43 === m || 45 === m) 1 === o ? o = 43 === m ? 3 : 2 : E(t, "repeat of a chomping mode identifier");
                else {
                    if (!((s = y(m)) >= 0)) break;
                    0 === s ? E(t, "bad explicit indentation width of a block scalar; it cannot be less than one") : a ? E(t, "repeat of an indentation width identifier") : (c = r + s - 1, a = !0);
                }
                if (p(m)) {
                    do {
                        m = t.input.charCodeAt(++t.position);
                    }while (p(m))
                    if (35 === m) do {
                        m = t.input.charCodeAt(++t.position);
                    }while (!d(m) && 0 !== m)
                }
                for(; 0 !== m;){
                    for(O(t), t.lineIndent = 0, m = t.input.charCodeAt(t.position); (!a || t.lineIndent < c) && 32 === m;)t.lineIndent++, m = t.input.charCodeAt(++t.position);
                    if (!a && t.lineIndent > c && (c = t.lineIndent), d(m)) {
                        l++;
                        continue;
                    }
                    if (a || 0 !== c || E(t, "missing indentation for block scalar"), t.lineIndent < c) {
                        3 === o ? t.result += e.repeat("\n", i ? 1 + l : l) : 1 === o && i && (t.result += "\n");
                        break;
                    }
                    n ? p(m) ? (u = !0, t.result += e.repeat("\n", i ? 1 + l : l)) : u ? (u = !1, t.result += e.repeat("\n", l + 1)) : 0 === l ? i && (t.result += " ") : t.result += e.repeat("\n", l) : t.result += e.repeat("\n", i ? 1 + l : l), i = !0, a = !0, l = 0;
                    const r = t.position;
                    for(; !d(m) && 0 !== m;)m = t.input.charCodeAt(++t.position);
                    R(t, r, t.position, !1);
                }
                return !0;
            }(t, u) || function(e, t) {
                let r, n, s = e.input.charCodeAt(e.position);
                if (39 !== s) return !1;
                for(e.kind = "scalar", e.result = "", e.position++, r = n = e.position; 0 !== (s = e.input.charCodeAt(e.position));)if (39 === s) {
                    if (R(e, r, e.position, !0), s = e.input.charCodeAt(++e.position), 39 !== s) return !0;
                    r = e.position, e.position++, n = e.position;
                } else d(s) ? (R(e, r, n, !0), q(e, B(e, !1, t)), r = n = e.position) : e.position === e.lineStart && D(e) ? E(e, "unexpected end of the document within a single quoted scalar") : (e.position++, p(s) || (n = e.position));
                E(e, "unexpected end of the stream within a single quoted scalar");
            }(t, u) || function(e, t) {
                let r, n, s, o = e.input.charCodeAt(e.position);
                if (34 !== o) return !1;
                for(e.kind = "scalar", e.result = "", e.position++, r = n = e.position; 0 !== (o = e.input.charCodeAt(e.position));){
                    if (34 === o) return R(e, r, e.position, !0), e.position++, !0;
                    if (92 === o) {
                        if (R(e, r, e.position, !0), o = e.input.charCodeAt(++e.position), d(o)) B(e, !1, t);
                        else if (o < 256 && b[o]) e.result += S[o], e.position++;
                        else if ((s = g(o)) > 0) {
                            let t = s, r = 0;
                            for(; t > 0; t--)o = e.input.charCodeAt(++e.position), (s = f(o)) >= 0 ? r = (r << 4) + s : E(e, "expected hexadecimal character");
                            e.result += v(r), e.position++;
                        } else E(e, "unknown escape sequence");
                        r = n = e.position;
                    } else d(o) ? (R(e, r, n, !0), q(e, B(e, !1, t)), r = n = e.position) : e.position === e.lineStart && D(e) ? E(e, "unexpected end of the document within a double quoted scalar") : (e.position++, p(o) || (n = e.position));
                }
                E(e, "unexpected end of the stream within a double quoted scalar");
            }(t, u) ? x = !0 : !function(e) {
                let t = e.input.charCodeAt(e.position);
                if (42 !== t) return !1;
                t = e.input.charCodeAt(++e.position);
                const r = e.position;
                for(; 0 !== t && !m(t) && !h(t);)t = e.input.charCodeAt(++e.position);
                e.position === r && E(e, "name of an alias node must contain at least one character");
                const n = e.input.slice(r, e.position);
                return s.call(e.anchorMap, n) || E(e, 'unidentified alias "' + n + '"'), e.result = e.anchorMap[n], B(e, !0, -1), !0;
            }(t) ? function(e, t, r) {
                let n, s, o, i, a, c;
                const l = e.kind, u = e.result;
                let f = e.input.charCodeAt(e.position);
                if (m(f) || h(f) || 35 === f || 38 === f || 42 === f || 33 === f || 124 === f || 62 === f || 39 === f || 34 === f || 37 === f || 64 === f || 96 === f) return !1;
                if (63 === f || 45 === f) {
                    const t = e.input.charCodeAt(e.position + 1);
                    if (m(t) || r && h(t)) return !1;
                }
                for(e.kind = "scalar", e.result = "", n = s = e.position, o = !1; 0 !== f;){
                    if (58 === f) {
                        const t = e.input.charCodeAt(e.position + 1);
                        if (m(t) || r && h(t)) break;
                    } else if (35 === f) {
                        if (m(e.input.charCodeAt(e.position - 1))) break;
                    } else {
                        if (e.position === e.lineStart && D(e) || r && h(f)) break;
                        if (d(f)) {
                            if (i = e.line, a = e.lineStart, c = e.lineIndent, B(e, !1, -1), e.lineIndent >= t) {
                                o = !0, f = e.input.charCodeAt(e.position);
                                continue;
                            }
                            e.position = s, e.line = i, e.lineStart = a, e.lineIndent = c;
                            break;
                        }
                    }
                    o && (R(e, n, s, !1), q(e, e.line - i), n = s = e.position, o = !1), p(f) || (s = e.position + 1), f = e.input.charCodeAt(++e.position);
                }
                return R(e, n, s, !1), !!e.result || (e.kind = l, e.result = u, !1);
            }(t, u, 1 === n) && (x = !0, null === t.tag && (t.tag = "?")) : (x = !0, null === t.tag && null === t.anchor || E(t, "alias node should not have any properties")), null !== t.anchor && T(t, t.anchor, t.result);
        }
        else 0 === _ && (x = c && N(t, w));
        if (null === t.tag) null !== t.anchor && T(t, t.anchor, t.result);
        else if ("?" === t.tag) {
            null !== t.result && "scalar" !== t.kind && E(t, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + t.kind + '"');
            for(let e = 0, r = t.implicitTypes.length; e < r; e += 1)if (l = t.implicitTypes[e], l.resolve(t.result)) {
                t.result = l.construct(t.result), t.tag = l.tag, null !== t.anchor && T(t, t.anchor, t.result);
                break;
            }
        } else if ("!" !== t.tag) {
            if (s.call(t.typeMap[t.kind || "fallback"], t.tag)) l = t.typeMap[t.kind || "fallback"][t.tag];
            else {
                l = null;
                const e = t.typeMap.multi[t.kind || "fallback"];
                for(let r = 0, n = e.length; r < n; r += 1)if (t.tag.slice(0, e[r].tag.length) === e[r].tag) {
                    l = e[r];
                    break;
                }
            }
            l || E(t, "unknown tag !<" + t.tag + ">"), null !== t.result && l.kind !== t.kind && E(t, "unacceptable node kind for !<" + t.tag + '> tag; it should be "' + l.kind + '", not "' + t.kind + '"'), l.resolve(t.result, t.tag) ? (t.result = l.construct(t.result, t.tag), null !== t.anchor && T(t, t.anchor, t.result)) : E(t, "cannot resolve a node with !<" + t.tag + "> explicit tag");
        }
        return null !== t.listener && t.listener("close", t), t.depth -= 1, null !== t.tag || null !== t.anchor || x;
    }
    function G(e) {
        const t = e.position;
        let r, n = !1;
        for(e.version = null, e.checkLineBreaks = e.legacy, e.tagMap = Object.create(null), e.anchorMap = Object.create(null); 0 !== (r = e.input.charCodeAt(e.position)) && (B(e, !0, -1), r = e.input.charCodeAt(e.position), !(e.lineIndent > 0 || 37 !== r));){
            n = !0, r = e.input.charCodeAt(++e.position);
            let t = e.position;
            for(; 0 !== r && !m(r);)r = e.input.charCodeAt(++e.position);
            const o = e.input.slice(t, e.position), i = [];
            for(o.length < 1 && E(e, "directive name must not be less than one character in length"); 0 !== r;){
                for(; p(r);)r = e.input.charCodeAt(++e.position);
                if (35 === r) {
                    do {
                        r = e.input.charCodeAt(++e.position);
                    }while (0 !== r && !d(r))
                    break;
                }
                if (d(r)) break;
                for(t = e.position; 0 !== r && !m(r);)r = e.input.charCodeAt(++e.position);
                i.push(e.input.slice(t, e.position));
            }
            0 !== r && O(e), s.call(A, o) ? A[o](e, o, i) : I(e, 'unknown document directive "' + o + '"');
        }
        B(e, !0, -1), 0 === e.lineIndent && 45 === e.input.charCodeAt(e.position) && 45 === e.input.charCodeAt(e.position + 1) && 45 === e.input.charCodeAt(e.position + 2) ? (e.position += 3, B(e, !0, -1)) : n && E(e, "directives end mark is expected"), j(e, e.lineIndent - 1, 4, !1, !0), B(e, !0, -1), e.checkLineBreaks && i.test(e.input.slice(t, e.position)) && I(e, "non-ASCII line breaks are interpreted as content"), e.documents.push(e.result), e.position === e.lineStart && D(e) ? 46 === e.input.charCodeAt(e.position) && (e.position += 3, B(e, !0, -1)) : e.position < e.length - 1 && E(e, "end of the stream or a document separator is expected");
    }
    function z(e, t) {
        t = t || {}, 0 !== (e = String(e)).length && (10 !== e.charCodeAt(e.length - 1) && 13 !== e.charCodeAt(e.length - 1) && (e += "\n"), 65279 === e.charCodeAt(0) && (e = e.slice(1)));
        const r = new k(e, t), n = e.indexOf("\0");
        for(-1 !== n && (r.position = n, E(r, "null byte is not allowed in input")), r.input += "\0"; 32 === r.input.charCodeAt(r.position);)r.lineIndent += 1, r.position += 1;
        for(; r.position < r.length - 1;)G(r);
        return r.documents;
    }
    return dl.loadAll = function(e, t, r) {
        null !== t && "object" == typeof t && void 0 === r && (r = t, t = null);
        const n = z(e, r);
        if ("function" != typeof t) return n;
        for(let e = 0, r = n.length; e < r; e += 1)t(n[e]);
    }, dl.load = function(e, r) {
        const n = z(e, r);
        if (0 !== n.length) {
            if (1 === n.length) return n[0];
            throw new t("expected a single document in the stream, but found more");
        }
    }, dl;
}
var Bl, Dl, ql = {};
function Nl() {
    if (Bl) return ql;
    Bl = 1;
    const e = ml(), t = hl(), r = Jl(), n = Object.prototype.toString, s = Object.prototype.hasOwnProperty, o = 65279, i = {
        0: "\\0",
        7: "\\a",
        8: "\\b",
        9: "\\t",
        10: "\\n",
        11: "\\v",
        12: "\\f",
        13: "\\r",
        27: "\\e",
        34: '\\"',
        92: "\\\\",
        133: "\\N",
        160: "\\_",
        8232: "\\L",
        8233: "\\P"
    }, a = [
        "y",
        "Y",
        "yes",
        "Yes",
        "YES",
        "on",
        "On",
        "ON",
        "n",
        "N",
        "no",
        "No",
        "NO",
        "off",
        "Off",
        "OFF"
    ], c = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
    function l(r) {
        let n, s;
        const o = r.toString(16).toUpperCase();
        if (r <= 255) n = "x", s = 2;
        else if (r <= 65535) n = "u", s = 4;
        else {
            if (!(r <= 4294967295)) throw new t("code point within a string may not be greater than 0xFFFFFFFF");
            n = "U", s = 8;
        }
        return "\\" + n + e.repeat("0", s - o.length) + o;
    }
    function u(t) {
        this.schema = t.schema || r, this.indent = Math.max(1, t.indent || 2), this.noArrayIndent = t.noArrayIndent || !1, this.skipInvalid = t.skipInvalid || !1, this.flowLevel = e.isNothing(t.flowLevel) ? -1 : t.flowLevel, this.styleMap = function(e, t) {
            if (null === t) return {};
            const r = {}, n = Object.keys(t);
            for(let o = 0, i = n.length; o < i; o += 1){
                let i = n[o], a = String(t[i]);
                "!!" === i.slice(0, 2) && (i = "tag:yaml.org,2002:" + i.slice(2));
                const c = e.compiledTypeMap.fallback[i];
                c && s.call(c.styleAliases, a) && (a = c.styleAliases[a]), r[i] = a;
            }
            return r;
        }(this.schema, t.styles || null), this.sortKeys = t.sortKeys || !1, this.lineWidth = t.lineWidth || 80, this.noRefs = t.noRefs || !1, this.noCompatMode = t.noCompatMode || !1, this.condenseFlow = t.condenseFlow || !1, this.quotingType = '"' === t.quotingType ? 2 : 1, this.forceQuotes = t.forceQuotes || !1, this.replacer = "function" == typeof t.replacer ? t.replacer : null, this.implicitTypes = this.schema.compiledImplicit, this.explicitTypes = this.schema.compiledExplicit, this.tag = null, this.result = "", this.duplicates = [], this.usedDuplicates = null;
    }
    function d(t, r) {
        const n = e.repeat(" ", r);
        let s = 0, o = "";
        const i = t.length;
        for(; s < i;){
            let e;
            const r = t.indexOf("\n", s);
            -1 === r ? (e = t.slice(s), s = i) : (e = t.slice(s, r + 1), s = r + 1), e.length && "\n" !== e && (o += n), o += e;
        }
        return o;
    }
    function p(t, r) {
        return "\n" + e.repeat(" ", t.indent * r);
    }
    function m(e) {
        return 32 === e || 9 === e;
    }
    function h(e) {
        return e >= 32 && e <= 126 || e >= 161 && e <= 55295 && 8232 !== e && 8233 !== e || e >= 57344 && e <= 65533 && e !== o || e >= 65536 && e <= 1114111;
    }
    function f(e) {
        return h(e) && e !== o && 13 !== e && 10 !== e;
    }
    function g(e, t, r) {
        const n = f(e), s = n && !m(e);
        return (r ? n : n && 44 !== e && 91 !== e && 93 !== e && 123 !== e && 125 !== e) && 35 !== e && !(58 === t && !s) || f(t) && !m(t) && 35 === e || 58 === t && s;
    }
    function y(e, t) {
        const r = e.charCodeAt(t);
        let n;
        return r >= 55296 && r <= 56319 && t + 1 < e.length && (n = e.charCodeAt(t + 1), n >= 56320 && n <= 57343) ? 1024 * (r - 55296) + n - 56320 + 65536 : r;
    }
    function w(e) {
        return /^\n* /.test(e);
    }
    function v(e, t, r, n, s, i, a, c) {
        let l, u = 0, d = null, p = !1, f = !1;
        const v = -1 !== n;
        let _ = -1, b = h(S = y(e, 0)) && S !== o && !m(S) && 45 !== S && 63 !== S && 58 !== S && 44 !== S && 91 !== S && 93 !== S && 123 !== S && 125 !== S && 35 !== S && 38 !== S && 42 !== S && 33 !== S && 124 !== S && 61 !== S && 62 !== S && 39 !== S && 34 !== S && 37 !== S && 64 !== S && 96 !== S && function(e) {
            return !m(e) && 58 !== e;
        }(y(e, e.length - 1));
        var S;
        if (t || a) for(l = 0; l < e.length; u >= 65536 ? l += 2 : l++){
            if (u = y(e, l), !h(u)) return 5;
            b = b && g(u, d, c), d = u;
        }
        else {
            for(l = 0; l < e.length; u >= 65536 ? l += 2 : l++){
                if (u = y(e, l), 10 === u) p = !0, v && (f = f || l - _ - 1 > n && " " !== e[_ + 1], _ = l);
                else if (!h(u)) return 5;
                b = b && g(u, d, c), d = u;
            }
            f = f || v && l - _ - 1 > n && " " !== e[_ + 1];
        }
        return p || f ? r > 9 && w(e) ? 5 : a ? 2 === i ? 5 : 2 : f ? 4 : 3 : !b || a || s(e) ? 2 === i ? 5 : 2 : 1;
    }
    function _(e, r, n, s, o) {
        e.dump = function() {
            if (0 === r.length) return 2 === e.quotingType ? '""' : "''";
            if (!e.noCompatMode && (-1 !== a.indexOf(r) || c.test(r))) return 2 === e.quotingType ? '"' + r + '"' : "'" + r + "'";
            const u = e.indent * Math.max(1, n), p = -1 === e.lineWidth ? -1 : Math.max(Math.min(e.lineWidth, 40), e.lineWidth - u), m = s || e.flowLevel > -1 && n >= e.flowLevel;
            switch(v(r, m, e.indent, p, function(t) {
                return function(e, t) {
                    for(let r = 0, n = e.implicitTypes.length; r < n; r += 1)if (e.implicitTypes[r].resolve(t)) return !0;
                    return !1;
                }(e, t);
            }, e.quotingType, e.forceQuotes && !s, o)){
                case 1:
                    return r;
                case 2:
                    return "'" + r.replace(/'/g, "''") + "'";
                case 3:
                    return "|" + b(r, e.indent) + S(d(r, u));
                case 4:
                    return ">" + b(r, e.indent) + S(d(function(e, t) {
                        const r = /(\n+)([^\n]*)/g;
                        let n, s, o = function() {
                            let n = e.indexOf("\n");
                            return n = -1 !== n ? n : e.length, r.lastIndex = n, k(e.slice(0, n), t);
                        }(), i = "\n" === e[0] || " " === e[0];
                        for(; s = r.exec(e);){
                            const e = s[1], r = s[2];
                            n = " " === r[0], o += e + (i || n || "" === r ? "" : "\n") + k(r, t), i = n;
                        }
                        return o;
                    }(r, p), u));
                case 5:
                    return '"' + function(e) {
                        let t = "", r = 0;
                        for(let n = 0; n < e.length; r >= 65536 ? n += 2 : n++){
                            r = y(e, n);
                            const s = i[r];
                            !s && h(r) ? (t += e[n], r >= 65536 && (t += e[n + 1])) : t += s || l(r);
                        }
                        return t;
                    }(r) + '"';
                default:
                    throw new t("impossible error: invalid scalar style");
            }
        }();
    }
    function b(e, t) {
        const r = w(e) ? String(t) : "", n = "\n" === e[e.length - 1];
        return r + (n && ("\n" === e[e.length - 2] || "\n" === e) ? "+" : n ? "" : "-") + "\n";
    }
    function S(e) {
        return "\n" === e[e.length - 1] ? e.slice(0, -1) : e;
    }
    function k(e, t) {
        if ("" === e || " " === e[0]) return e;
        const r = / [^ ]/g;
        let n, s, o = 0, i = 0, a = 0, c = "";
        for(; n = r.exec(e);)a = n.index, a - o > t && (s = i > o ? i : a, c += "\n" + e.slice(o, s), o = s + 1), i = a;
        return c += "\n", e.length - o > t && i > o ? c += e.slice(o, i) + "\n" + e.slice(i + 1) : c += e.slice(o), c.slice(1);
    }
    function x(e, t, r, n) {
        let s = "";
        const o = e.tag;
        for(let o = 0, i = r.length; o < i; o += 1){
            let i = r[o];
            e.replacer && (i = e.replacer.call(r, String(o), i)), (I(e, t + 1, i, !0, !0, !1, !0) || void 0 === i && I(e, t + 1, null, !0, !0, !1, !0)) && (n && "" === s || (s += p(e, t)), e.dump && 10 === e.dump.charCodeAt(0) ? s += "-" : s += "- ", s += e.dump);
        }
        e.tag = o, e.dump = s || "[]";
    }
    function E(e, r, o) {
        const i = o ? e.explicitTypes : e.implicitTypes;
        for(let a = 0, c = i.length; a < c; a += 1){
            const c = i[a];
            if ((c.instanceOf || c.predicate) && (!c.instanceOf || "object" == typeof r && r instanceof c.instanceOf) && (!c.predicate || c.predicate(r))) {
                if (o ? c.multi && c.representName ? e.tag = c.representName(r) : e.tag = c.tag : e.tag = "?", c.represent) {
                    const o = e.styleMap[c.tag] || c.defaultStyle;
                    let i;
                    if ("[object Function]" === n.call(c.represent)) i = c.represent(r, o);
                    else {
                        if (!s.call(c.represent, o)) throw new t("!<" + c.tag + '> tag resolver accepts not "' + o + '" style');
                        i = c.represent[o](r, o);
                    }
                    e.dump = i;
                }
                return !0;
            }
        }
        return !1;
    }
    function I(e, r, s, o, i, a, c) {
        e.tag = null, e.dump = s, E(e, s, !1) || E(e, s, !0);
        const l = n.call(e.dump), u = o;
        o && (o = e.flowLevel < 0 || e.flowLevel > r);
        const d = "[object Object]" === l || "[object Array]" === l;
        let m, h;
        if (d && (m = e.duplicates.indexOf(s), h = -1 !== m), (null !== e.tag && "?" !== e.tag || h || 2 !== e.indent && r > 0) && (i = !1), h && e.usedDuplicates[m]) e.dump = "*ref_" + m;
        else {
            if (d && h && !e.usedDuplicates[m] && (e.usedDuplicates[m] = !0), "[object Object]" === l) o && 0 !== Object.keys(e.dump).length ? (!function(e, r, n, s) {
                let o = "";
                const i = e.tag, a = Object.keys(n);
                if (!0 === e.sortKeys) a.sort();
                else if ("function" == typeof e.sortKeys) a.sort(e.sortKeys);
                else if (e.sortKeys) throw new t("sortKeys must be a boolean or a function");
                for(let t = 0, i = a.length; t < i; t += 1){
                    let i = "";
                    s && "" === o || (i += p(e, r));
                    const c = a[t];
                    let l = n[c];
                    if (e.replacer && (l = e.replacer.call(n, c, l)), !I(e, r + 1, c, !0, !0, !0)) continue;
                    const u = null !== e.tag && "?" !== e.tag || e.dump && e.dump.length > 1024;
                    u && (e.dump && 10 === e.dump.charCodeAt(0) ? i += "?" : i += "? "), i += e.dump, u && (i += p(e, r)), I(e, r + 1, l, !0, u) && (e.dump && 10 === e.dump.charCodeAt(0) ? i += ":" : i += ": ", i += e.dump, o += i);
                }
                e.tag = i, e.dump = o || "{}";
            }(e, r, e.dump, i), h && (e.dump = "&ref_" + m + e.dump)) : (!function(e, t, r) {
                let n = "";
                const s = e.tag, o = Object.keys(r);
                for(let s = 0, i = o.length; s < i; s += 1){
                    let i = "";
                    "" !== n && (i += ", "), e.condenseFlow && (i += '"');
                    const a = o[s];
                    let c = r[a];
                    e.replacer && (c = e.replacer.call(r, a, c)), I(e, t, a, !1, !1) && (e.dump.length > 1024 && (i += "? "), i += e.dump + (e.condenseFlow ? '"' : "") + ":" + (e.condenseFlow ? "" : " "), I(e, t, c, !1, !1) && (i += e.dump, n += i));
                }
                e.tag = s, e.dump = "{" + n + "}";
            }(e, r, e.dump), h && (e.dump = "&ref_" + m + " " + e.dump));
            else if ("[object Array]" === l) o && 0 !== e.dump.length ? (e.noArrayIndent && !c && r > 0 ? x(e, r - 1, e.dump, i) : x(e, r, e.dump, i), h && (e.dump = "&ref_" + m + e.dump)) : (!function(e, t, r) {
                let n = "";
                const s = e.tag;
                for(let s = 0, o = r.length; s < o; s += 1){
                    let o = r[s];
                    e.replacer && (o = e.replacer.call(r, String(s), o)), (I(e, t, o, !1, !1) || void 0 === o && I(e, t, null, !1, !1)) && ("" !== n && (n += "," + (e.condenseFlow ? "" : " ")), n += e.dump);
                }
                e.tag = s, e.dump = "[" + n + "]";
            }(e, r, e.dump), h && (e.dump = "&ref_" + m + " " + e.dump));
            else {
                if ("[object String]" !== l) {
                    if ("[object Undefined]" === l) return !1;
                    if (e.skipInvalid) return !1;
                    throw new t("unacceptable kind of an object to dump " + l);
                }
                "?" !== e.tag && _(e, e.dump, r, a, u);
            }
            if (null !== e.tag && "?" !== e.tag) {
                let t = encodeURI("!" === e.tag[0] ? e.tag.slice(1) : e.tag).replace(/!/g, "%21");
                t = "!" === e.tag[0] ? "!" + t : "tag:yaml.org,2002:" === t.slice(0, 18) ? "!!" + t.slice(18) : "!<" + t + ">", e.dump = t + " " + e.dump;
            }
        }
        return !0;
    }
    function T(e, t) {
        const r = [], n = [];
        C(e, r, n);
        const s = n.length;
        for(let e = 0; e < s; e += 1)t.duplicates.push(r[n[e]]);
        t.usedDuplicates = new Array(s);
    }
    function C(e, t, r) {
        if (null !== e && "object" == typeof e) {
            const n = t.indexOf(e);
            if (-1 !== n) -1 === r.indexOf(n) && r.push(n);
            else if (t.push(e), Array.isArray(e)) for(let n = 0, s = e.length; n < s; n += 1)C(e[n], t, r);
            else {
                const n = Object.keys(e);
                for(let s = 0, o = n.length; s < o; s += 1)C(e[n[s]], t, r);
            }
        }
    }
    return ql.dump = function(e, t) {
        const r = new u(t = t || {});
        r.noRefs || T(e, r);
        let n = e;
        return r.replacer && (n = r.replacer.call({
            "": n
        }, "", n)), I(r, 0, n, !0, !0) ? r.dump + "\n" : "";
    }, ql;
}
var Fl = function() {
    if (Dl) return ul;
    Dl = 1;
    const e = Ol(), t = Nl();
    function r(e, t) {
        return function() {
            throw new Error("Function yaml." + e + " is removed in js-yaml 4. Use yaml." + t + " instead, which is now safe by default.");
        };
    }
    return ul.Type = fl(), ul.Schema = gl(), ul.FAILSAFE_SCHEMA = _l(), ul.JSON_SCHEMA = El(), ul.CORE_SCHEMA = Il(), ul.DEFAULT_SCHEMA = Jl(), ul.load = e.load, ul.loadAll = e.loadAll, ul.dump = t.dump, ul.YAMLException = hl(), ul.types = {
        binary: Pl(),
        float: xl(),
        map: vl(),
        null: bl(),
        pairs: Rl(),
        set: Ml(),
        timestamp: Tl(),
        bool: Sl(),
        int: kl(),
        merge: Cl(),
        omap: Al(),
        seq: wl(),
        str: yl()
    }, ul.safeLoad = r("safeLoad", "load"), ul.safeLoadAll = r("safeLoadAll", "loadAll"), ul.safeDump = r("safeDump", "dump"), ul;
}();
const Ul = vc(Fl), { Type: Ll, Schema: $l, FAILSAFE_SCHEMA: jl, JSON_SCHEMA: Gl, CORE_SCHEMA: zl, DEFAULT_SCHEMA: Wl, load: Hl, loadAll: Kl, dump: Vl, YAMLException: Yl, types: Ql, safeLoad: Xl, safeLoadAll: Zl, safeDump: eu } = Ul, tu = [
    ".md",
    ".mdc",
    ".markdown"
], ru = [
    ...tu,
    ".txt"
], nu = /^---\s*\n([\s\S]*?)\n---/;
function su(e) {
    return e.trim().toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9.-]/g, "");
}
function ou(e) {
    const t = e.match(nu);
    if (!t) return {};
    try {
        const e = Ul.load(t[1], {
            schema: Ul.JSON_SCHEMA
        });
        if (!e || "object" != typeof e) return {};
        const r = null !== e.metadata && "object" == typeof e.metadata ? e.metadata : void 0, n = iu(e.environments ?? r?.environments);
        return {
            disabledEnvironments: iu(e["disabled-environments"] ?? r?.disabledEnvironments),
            environments: n,
            name: "string" == typeof e.name ? e.name : void 0,
            description: "string" == typeof e.description ? e.description : void 0
        };
    } catch  {
        const e = t[1], r = e.match(/^name:\s*(.+)$/m), n = e.match(/^description:\s*(.+)$/m);
        return r || n ? {
            name: r ? r[1].trim() : void 0,
            description: n ? n[1].trim() : void 0
        } : {};
    }
}
function iu(e) {
    if (Array.isArray(e)) {
        const t = e.filter((e)=>"string" == typeof e && e.length > 0);
        return 0 === t.length ? void 0 : t;
    }
    if ("string" == typeof e) {
        const t = e.split(",").map((e)=>e.trim()).filter((e)=>e.length > 0);
        return 0 === t.length ? void 0 : t;
    }
}
function au(e) {
    return su((0, I.basename)(e).replace(/\.(md|mdc|markdown|txt)$/i, ""));
}
function cu(e) {
    const t = new Set, r = [];
    for (const n of e)t.has(n.name) || (t.add(n.name), r.push(n));
    return r;
}
class lu {
    constructor(e){
        this.fetcher = e;
    }
    async discoverComponents(e = {}) {
        const t = e.basePath ?? "", r = t ? `${t}/` : "", n = e.manifest;
        let s;
        try {
            s = await this.fetcher.listDirectory(t);
        } catch  {
            s = [];
        }
        const o = new Set(s.filter((e)=>"dir" === e.type).map((e)=>e.name.toLowerCase())), i = Ee.filter((e)=>s.some((t)=>"file" === t.type && t.name === e)), a = s.some((e)=>"file" === e.type && "SKILL.md" === e.name), [c, l, u, d, p, m, h] = await Promise.all([
            a && void 0 === n?.skills ? this.discoverRootSkill(r) : Promise.resolve(null),
            void 0 !== n?.skills ? this.discoverFromManifestPaths(r, n.skills, !0, tu) : o.has("skills") ? this.discoverSkills(`${r}skills`) : Promise.resolve([]),
            void 0 !== n?.agents ? this.discoverFromManifestPaths(r, n.agents, !1, tu) : o.has("agents") ? this.discoverMarkdownComponents(`${r}agents`, tu) : Promise.resolve([]),
            void 0 !== n?.hooks ? this.discoverHooksFromManifest(r, n.hooks) : o.has("hooks") ? this.discoverHooksFromJson(`${r}hooks/hooks.json`) : Promise.resolve([]),
            void 0 !== n?.commands ? this.discoverFromManifestPaths(r, n.commands, !1, ru) : o.has("commands") ? this.discoverMarkdownComponents(`${r}commands`, ru) : Promise.resolve([]),
            void 0 !== n?.rules ? this.discoverFromManifestPaths(r, n.rules, !1, tu) : o.has("rules") ? this.discoverMarkdownComponents(`${r}rules`, tu) : Promise.resolve([]),
            this.discoverMcpServers(r, n?.mcpServers, i)
        ]);
        return {
            skills: cu(c ? [
                c,
                ...l
            ] : l),
            agents: cu(u),
            hooks: d,
            commands: cu(p),
            rules: cu(m),
            mcpServers: h.servers,
            mcpVariables: h.variables,
            mcpConfigs: h.configs
        };
    }
    async discoverHooksFromJson(e) {
        try {
            if (!await this.fetcher.fileExists(e)) return [];
            const { content: t } = await this.fetcher.fetchFile(e), r = JSON.parse(t);
            if (!r.hooks || "object" != typeof r.hooks || Array.isArray(r.hooks)) return [];
            return Object.keys(r.hooks).map((t)=>({
                    name: su(t),
                    path: e,
                    description: `Hook: ${t}`
                }));
        } catch  {
            return [];
        }
    }
    async discoverHooksFromManifest(e, t) {
        if ("string" == typeof t) {
            if (!ge(t)) return [];
            const r = `${e}${t.replace(/^\.\//, "")}`;
            return r.endsWith(".json") ? this.discoverHooksFromJson(r) : this.discoverHooksFromJson(`${r}/hooks.json`);
        }
        const r = t.hooks ?? t;
        if (!r || "object" != typeof r || Array.isArray(r)) return [];
        return Object.keys(r).map((e)=>({
                name: su(e),
                path: "manifest",
                description: `Hook: ${e}`
            }));
    }
    async discoverFromManifestPaths(e, t, r = !1, n = tu) {
        if ("string" == typeof t) {
            if (!ge(t)) return [];
            const s = `${e}${t.replace(/^\.\//, "")}`.replace(/\/$/, "");
            return r ? this.discoverSkills(s) : this.discoverMarkdownComponents(s, n);
        }
        const s = [];
        for (const n of t)try {
            if (!ge(n)) continue;
            const t = `${e}${n.replace(/^\.\//, "")}`;
            if (r) {
                const e = t.endsWith("SKILL.md") ? t : `${t.replace(/\/$/, "")}/SKILL.md`;
                if (!await this.fetcher.fileExists(e)) {
                    const e = t.replace(/\/$/, ""), r = await this.discoverSkills(e);
                    s.push(...r);
                    continue;
                }
                let r = au(t.endsWith("SKILL.md") ? t.slice(0, -8).replace(/\/$/, "") : t);
                const { content: n } = await this.fetcher.fetchFile(e), o = ou(n);
                if (r = o.name ?? r, r) {
                    const t = {
                        disabledEnvironments: o.disabledEnvironments,
                        environments: o.environments,
                        name: su(r),
                        path: e
                    };
                    void 0 !== o.description && (t.description = o.description), s.push(t);
                }
            } else {
                if (!await this.fetcher.fileExists(t)) continue;
                let e = au(t);
                const { content: r } = await this.fetcher.fetchFile(t), n = ou(r);
                e = n.name ?? e;
                const o = n.description;
                if (e) {
                    const r = {
                        name: su(e),
                        path: t
                    };
                    void 0 !== o && (r.description = o), s.push(r);
                }
            }
        } catch  {}
        return s;
    }
    async discoverMarkdownComponents(e, t = tu, r = new Set) {
        let n;
        try {
            n = await this.fetcher.listDirectory(e, r);
        } catch  {
            return [];
        }
        const s = n.filter((e)=>"file" === e.type && t.some((t)=>e.name.endsWith(t))), o = n.filter((e)=>"dir" === e.type), [i, a] = await Promise.all([
            Promise.all(s.map(async (e)=>{
                try {
                    let t = au(e.name);
                    const { content: r } = await this.fetcher.fetchFile(e.path), n = ou(r);
                    t = n.name ? su(n.name) : t;
                    const s = n.description;
                    if (!t) return null;
                    const o = {
                        name: t,
                        path: e.path
                    };
                    return void 0 !== s && (o.description = s), o;
                } catch  {
                    return null;
                }
            })),
            Promise.all(o.map((e)=>this.discoverMarkdownComponents(e.path, t, r)))
        ]);
        return [
            ...i.filter((e)=>null !== e),
            ...a.flat()
        ];
    }
    async discoverRootSkill(e) {
        try {
            const t = `${e}SKILL.md`;
            let r = su((0, I.basename)(e.replace(/[\\/]+$/, "")));
            const { content: n } = await this.fetcher.fetchFile(t), s = ou(n);
            if (r = s.name ? su(s.name) : r, !r) return null;
            const o = {
                disabledEnvironments: s.disabledEnvironments,
                environments: s.environments,
                name: r,
                path: t
            };
            return void 0 !== s.description && (o.description = s.description), o;
        } catch  {
            return null;
        }
    }
    async discoverSkills(e) {
        let t;
        try {
            t = await this.fetcher.listDirectory(e);
        } catch  {
            return [];
        }
        const r = t.filter((e)=>"dir" === e.type);
        return (await Promise.all(r.map(async (e)=>{
            try {
                const t = `${e.path}/SKILL.md`;
                if (!await this.fetcher.fileExists(t)) return null;
                const { content: r } = await this.fetcher.fetchFile(t), n = ou(r), s = n.name ? su(n.name) : su(e.name);
                if (!s) return null;
                const o = {
                    disabledEnvironments: n.disabledEnvironments,
                    environments: n.environments,
                    name: s,
                    path: t
                };
                return void 0 !== n.description && (o.description = n.description), o;
            } catch  {
                return null;
            }
        }))).filter((e)=>null !== e);
    }
    async discoverMcpServers(e, t, r) {
        const n = new Map, s = async (t)=>{
            const r = n.get(t);
            if (void 0 !== r) return r;
            const s = this.fetcher.fetchFile(`${e}${t}`).then(({ content: e })=>e).catch(()=>null);
            return n.set(t, s), s;
        }, o = async (n)=>Oe(s, t, void 0 !== t ? "manifest" : void 0, {
                fallbackFileNames: r,
                manifestPrecedence: n,
                toSourcePath: (t)=>`${e}${t}`,
                parserOptions: {
                    skipExpansion: !0
                }
            }), i = await o("fill");
        if (void 0 === i?.mcpServers) return {
            servers: [],
            variables: void 0,
            configs: void 0
        };
        const a = void 0 === t ? i : await o("override"), c = a?.mcpServers ?? i.mcpServers, l = {};
        for (const [e, t] of Object.entries(c))l[e] = t;
        return {
            servers: Object.keys(i.mcpServers).map((e)=>({
                    name: su(e),
                    path: i.mcpServerSourcePaths?.[e] ?? "manifest"
                })),
            variables: k(a ?? i),
            configs: l
        };
    }
}
function uu(e) {
    const t = e ?? process.env.HOME ?? "";
    return (0, I.join)(t, ".claude");
}
async function du(e) {
    const t = uu(e), r = (0, I.join)(t, "settings.json");
    try {
        const e = await (0, ve.readFile)(r, "utf-8");
        return JSON.parse(e);
    } catch (e) {
        return e.code, null;
    }
}
async function pu(e) {
    const t = {
        enabledPlugins: {}
    };
    let r = !1;
    const n = (0, I.join)(e, ".claude", "settings.json");
    try {
        const e = await (0, ve.readFile)(n, "utf-8"), s = JSON.parse(e);
        s.enabledPlugins && (Object.assign(t.enabledPlugins, s.enabledPlugins), r = !0);
    } catch  {}
    const s = (0, I.join)(e, ".claude", "settings.local.json");
    try {
        const e = await (0, ve.readFile)(s, "utf-8"), n = JSON.parse(e);
        n.enabledPlugins && (Object.assign(t.enabledPlugins, n.enabledPlugins), r = !0);
    } catch  {}
    return r ? t : null;
}
const mu = 10485760;
async function hu(e) {
    try {
        return (await (0, ve.lstat)(e)).isSymbolicLink();
    } catch  {
        return !1;
    }
}
async function fu(e) {
    if (await hu(e)) throw new Error(`Refusing to read symlink: ${e}`);
    return (0, ve.readFile)(e, "utf-8");
}
async function gu(e) {
    if ((await (0, ve.stat)(e)).size > mu) throw new Error(`File ${e} exceeds maximum size of ${mu} bytes`);
}
Error;
function yu(e) {
    const t = e instanceof Error ? e.message : String(e);
    return /timed?\s*out/i.test(t) ? "timeout" : /clone|fetch|git/i.test(t) ? "clone" : /manifest|marketplace\.json/i.test(t) ? "manifest" : /parse|invalid|malformed/i.test(t) ? "parse" : /install|download|copy/i.test(t) ? "install" : "unknown";
}
function wu(e, t) {
    const r = new Map, n = (0, I.resolve)(e), s = (0, I.resolve)(t?.symlinkTargetRoot ?? n), o = (0, ve.realpath)(s).catch(()=>s);
    function i(e) {
        const t = (0, I.resolve)(e);
        try {
            return Pa(n, t);
        } catch  {
            throw new Error(`Path escapes plugin directory: ${e}`);
        }
    }
    async function a(e) {
        const t = i(e), r = await o, n = await (0, ve.realpath)(t);
        try {
            return Pa(r, n);
        } catch  {
            throw new Error(`Path escapes plugin directory via symlink: ${e}`);
        }
    }
    return {
        async listDirectory (t, r) {
            const n = i(t ? (0, I.join)(e, t) : e);
            try {
                const e = await a(n);
                if (r?.has(e)) return [];
                r?.add(e);
                const s = await (0, ve.readdir)(e, {
                    withFileTypes: !0
                }), o = [];
                for (const e of s){
                    const r = (0, I.join)(n, e.name);
                    let s = e.isDirectory() ? "dir" : "file";
                    if (e.isSymbolicLink()) try {
                        const e = await a(r);
                        s = (await (0, ve.stat)(e)).isDirectory() ? "dir" : "file";
                    } catch  {
                        continue;
                    }
                    o.push({
                        name: e.name,
                        type: s,
                        path: t ? `${t}/${e.name}` : e.name
                    });
                }
                return o;
            } catch  {
                return [];
            }
        },
        async fetchFile (t) {
            const n = r.get(t);
            if (void 0 !== n) return {
                content: n
            };
            const s = i((0, I.join)(e, t)), o = await a(s);
            await gu(o);
            const c = await (0, ve.readFile)(o, "utf-8");
            return r.set(t, c), {
                content: c
            };
        },
        async fileExists (t) {
            try {
                const r = i((0, I.join)(e, t)), n = await a(r);
                return (await (0, ve.stat)(n)).isFile();
            } catch  {
                return !1;
            }
        }
    };
}
async function vu({ installPath: e, logo: t }) {
    const r = t?.trim();
    if (r && !(0, I.isAbsolute)(r) && !r.includes("://")) try {
        const t = await (0, ve.realpath)(e), n = Pa(t, r), s = await (0, ve.realpath)(n);
        Pa(t, s);
        if (!(await (0, ve.stat)(s)).isFile()) return;
        return await gu(s), (0, hc.pathToFileURL)(s).href;
    } catch  {
        return;
    }
}
function _u(e) {
    const t = {};
    return void 0 !== e.version && (t.version = e.version), void 0 !== e.homepage && (t.homepage = e.homepage), void 0 !== e.repository && (t.repository = e.repository), t;
}
function bu(e) {
    return void 0 !== e.version || void 0 !== e.homepage || void 0 !== e.repository;
}
function Su(e, t) {
    return _u({
        version: e.version ?? t?.version,
        homepage: e.homepage ?? t?.homepage,
        repository: e.repository ?? t?.repository
    });
}
async function ku(e, t, r) {
    let n;
    for (const s of B){
        const o = (0, I.join)(e, s);
        let i;
        try {
            if (await hu(o)) continue;
            if (!(await (0, ve.stat)(o)).isFile()) continue;
            await gu(o), i = await fu(o);
        } catch  {
            continue;
        }
        const a = me(i);
        if (!a.success) continue;
        const c = a.data, l = c.commands, u = c.agents, d = c.skills, p = c.rules, m = c.hooks, h = c.mcpServers, f = void 0 !== l || void 0 !== u || void 0 !== d || void 0 !== p || void 0 !== m || void 0 !== h, g = "string" == typeof c.displayName ? c.displayName : void 0, y = "string" == typeof c.description ? c.description : void 0, w = c.author?.name, v = await vu({
            installPath: e,
            logo: c.logo
        }), _ = _u(c), b = c.variables, S = c.capabilities, k = void 0 !== g || void 0 !== y || void 0 !== w || void 0 !== v || void 0 !== b || void 0 !== S;
        if (!f && !k && !bu(_)) continue;
        if (!f && !k) {
            n = n ? {
                ...n,
                fields: Su(n.fields, _)
            } : {
                fields: _,
                path: o,
                relPath: s,
                unrecognizedSchemaId: a.unrecognizedSchemaId
            };
            continue;
        }
        void 0 !== a.unrecognizedSchemaId && r.log("debug", `${t}: ${s} declares an unrecognized $schema, loading anyway: ${a.unrecognizedSchemaId}`);
        const x = Su(_, n?.fields);
        return {
            manifestFilePath: o,
            ...f && {
                manifestOptions: {
                    commands: l,
                    agents: u,
                    skills: d,
                    rules: p,
                    hooks: m,
                    mcpServers: h
                }
            },
            ...(k || bu(x)) && {
                metadata: {
                    displayName: g,
                    description: y,
                    authorName: w,
                    logoUrl: v,
                    ...x,
                    variables: b,
                    capabilities: S
                }
            }
        };
    }
    if (void 0 !== n) return void 0 !== n.unrecognizedSchemaId && r.log("debug", `${t}: ${n.relPath} declares an unrecognized $schema, loading anyway: ${n.unrecognizedSchemaId}`), {
        manifestFilePath: n.path,
        metadata: n.fields
    };
}
function xu(e) {
    return {
        name: e.name,
        ...e.description ? {
            description: e.description
        } : {}
    };
}
async function Eu(e, t) {
    const r = await async function(e) {
        for (const t of B){
            const r = (0, I.join)(e, t);
            try {
                if (await hu(r)) continue;
                if (!(await (0, ve.stat)(r)).isFile()) continue;
                await gu(r);
                const e = me(await fu(r));
                if (e.success) return e.data;
            } catch  {}
        }
    }(e) ?? {}, n = void 0 === r.commands && void 0 === r.agents && void 0 === r.skills && void 0 === r.rules && void 0 === r.hooks && void 0 === r.mcpServers ? void 0 : {
        commands: r.commands,
        agents: r.agents,
        skills: r.skills,
        rules: r.rules,
        hooks: r.hooks,
        mcpServers: r.mcpServers
    }, s = new lu(wu(e, {
        symlinkTargetRoot: t?.symlinkTargetRoot
    })), o = await s.discoverComponents({
        manifest: n
    });
    return {
        manifest: r,
        skills: o.skills.map(xu),
        subagents: o.agents.map(xu),
        hooks: o.hooks.map(xu),
        rules: o.rules.map(xu),
        mcpServers: o.mcpServers.map(xu),
        commands: o.commands.map(xu)
    };
}
async function Iu(e, t) {
    const r = wu(e), n = new lu(r), s = await n.discoverComponents({
        manifest: t
    }), [o, i, a, c] = await Promise.all([
        Tu(r, s.skills, e),
        Pu(r, s.agents, e),
        Au(r, s.commands, e),
        Cu(r, s.rules, e)
    ]);
    return {
        skills: o,
        agents: i,
        commands: a,
        rules: c
    };
}
async function Tu(e, t, r) {
    const n = [];
    for (const s of t)try {
        const { content: t } = await e.fetchFile(s.path), o = Mu({
            content: xe(t, r),
            relativePath: s.path
        });
        o && n.push(o);
    } catch  {}
    return n;
}
async function Cu(e, t, r) {
    const n = [];
    for (const s of t)try {
        const { content: t } = await e.fetchFile(s.path), o = Mu({
            content: xe(t, r),
            relativePath: s.path
        });
        o && n.push({
            ...o,
            name: s.name
        });
    } catch  {}
    return n;
}
async function Pu(e, t, r) {
    const n = [];
    for (const s of t)try {
        const { content: t } = await e.fetchFile(s.path), o = Ju({
            content: xe(t, r),
            relativePath: s.path
        });
        o && n.push(o);
    } catch  {}
    return n;
}
async function Au(e, t, r) {
    const n = [];
    for (const s of t)try {
        const { content: t } = await e.fetchFile(s.path), o = Ou({
            content: xe(t, r),
            relativePath: s.path
        });
        o && n.push(o);
    } catch  {}
    return n;
}
function Ru(e) {
    if ("string" == typeof e) {
        const t = function(e) {
            const t = [];
            let r = 0, n = 0;
            for(let s = 0; s < e.length; s++){
                const o = e[s];
                if ("{" === o) n++;
                else if ("}" === o && n > 0) n--;
                else if ("," === o && 0 === n) {
                    const n = e.slice(r, s).trim();
                    n && t.push(n), r = s + 1;
                }
            }
            const s = e.slice(r).trim();
            return s && t.push(s), t;
        }(e);
        return t.length > 0 ? t : void 0;
    }
    if (Array.isArray(e)) {
        const t = e.filter((e)=>"string" == typeof e).map((e)=>e.trim()).filter(Boolean);
        return t.length > 0 ? t : void 0;
    }
}
function Mu({ content: e, relativePath: t }) {
    try {
        const r = (0, gc.be)(e), n = t.replace(/\\/g, "/"), s = n.split("/").filter((e)=>e.length > 0), o = s.length >= 2 ? s[s.length - 2] : void 0, i = s[s.length - 1] ?? n, a = o ?? i.replace(/\.md$/i, ""), c = "string" == typeof r.data.name ? r.data.name.trim() : void 0, l = iu(r.data.environments ?? r.data.metadata?.environments), u = iu(r.data["disabled-environments"] ?? r.data.metadata?.disabledEnvironments);
        return {
            path: t,
            name: c && c.length > 0 ? c : a,
            description: "string" == typeof r.data.description ? r.data.description : void 0,
            globs: Ru(r.data.globs),
            alwaysApply: !0 === r.data.alwaysApply,
            content: e,
            environments: l,
            disabledEnvironments: u
        };
    } catch  {
        return null;
    }
}
function Ju({ content: e, relativePath: t }) {
    try {
        const n = (0, gc.be)(e), s = n.content.trim();
        if (!s) return null;
        let o;
        "string" == typeof n.data.tools ? o = n.data.tools.split(",").map((e)=>e.trim()).filter(Boolean) : Array.isArray(n.data.tools) && (o = n.data.tools.map((e)=>"string" == typeof e ? e.trim() : String(e)).filter(Boolean));
        const i = n.data.permissionMode ?? n.data.permissionmode, a = (0, I.basename)(t);
        return {
            path: t,
            name: "string" == typeof n.data.name ? n.data.name : (0, I.basename)(a, (0, I.extname)(a)).replace(/[\s_]+/g, "-"),
            description: "string" == typeof n.data.description ? n.data.description : void 0,
            tools: o,
            model: "string" == typeof n.data.model ? n.data.model : "inherit",
            prompt: s,
            permissionMode: (r = i, "readonly" === (r ?? "").trim().toLowerCase() ? "readonly" : "default")
        };
    } catch  {
        return null;
    }
    var r;
}
function Ou({ content: e, relativePath: t }) {
    try {
        const r = (0, gc.be)(e);
        let n;
        const s = r.data["argument-hint"];
        "string" == typeof s ? n = s : Array.isArray(s) && (n = `[${s.join(" ")}]`);
        const o = (0, I.basename)(t);
        return {
            path: t,
            name: "string" == typeof r.data.name ? r.data.name : (0, I.basename)(o, (0, I.extname)(o)),
            description: "string" == typeof r.data.description ? r.data.description : void 0,
            argumentHint: n,
            content: r.content.trim()
        };
    } catch  {
        return null;
    }
}
function Bu(e) {
    if (void 0 !== e) return {
        configuredVariables: e.configuredVariables
    };
}
async function Du(e, t, r) {
    const n = r ?? Bu(t);
    return async function(e, t = {}) {
        const r = t.toSourcePath ?? ((e)=>e);
        let n, s, o;
        for (const t of B){
            const i = await e(t);
            if (null === i) continue;
            let a;
            try {
                a = JSON.parse(i);
            } catch  {
                continue;
            }
            o = A(a);
            const c = me(i);
            if (c.success) {
                void 0 !== c.data.mcpServers && (n = c.data.mcpServers, s = r(t));
                break;
            }
        }
        return Oe(e, n, s, void 0 === o ? t : {
            ...t,
            parserOptions: {
                ...t.parserOptions,
                pluginSchemaId: o
            }
        });
    }(function(e) {
        return async (t)=>{
            if (!ge(t)) return null;
            const r = (0, I.join)(e, t);
            try {
                return await hu(r) ? null : (await (0, ve.stat)(r)).isFile() ? (await gu(r), await fu(r)) : null;
            } catch  {
                return null;
            }
        };
    }(e), {
        fallbackFileNames: Pe(),
        manifestPrecedence: "override",
        toSourcePath: (t)=>(0, I.join)(e, t),
        installPathForExpansion: e,
        parserOptions: n
    });
}
async function qu(e, t, r) {
    const n = await Du(e, void 0, {
        log: r
    });
    if (n) return n;
    for (const n of q){
        const s = (0, I.join)(e, n);
        try {
            if (!(await (0, ve.stat)(s)).isFile()) continue;
            const n = await (0, ve.readFile)(s, "utf-8"), o = JSON.parse(n).plugins;
            if (!Array.isArray(o)) continue;
            const i = t.name, a = o.find((e)=>e.name === i);
            if (!a?.mcpServers?.length) continue;
            for (const t of a.mcpServers){
                const n = t.replace(/^\.\//, "");
                if (!ge(n)) continue;
                const s = (0, I.join)(e, n);
                try {
                    await gu(s);
                    const t = Re(await fu(s), e, {
                        log: r
                    });
                    if (t?.mcpServers && Object.keys(t.mcpServers).length > 0) {
                        const e = Object.fromEntries(Object.keys(t.mcpServers).map((e)=>[
                                e,
                                s
                            ]));
                        return {
                            ...t,
                            mcpServerSourcePaths: e
                        };
                    }
                } catch  {}
            }
            return null;
        } catch  {}
    }
    return null;
}
function Nu(e, t) {
    const r = {};
    for (const [n, s] of Object.entries(e.hooks))Array.isArray(s) && (r[n] = s.map((e)=>"command" in e && "string" == typeof e.command ? {
            ...e,
            command: xe(e.command, t)
        } : "prompt" in e && "string" == typeof e.prompt ? {
            ...e,
            prompt: xe(e.prompt, t)
        } : e));
    return {
        ...e,
        hooks: r
    };
}
async function Fu(e, t, r, n) {
    if ("object" == typeof r) {
        const s = Uu(r, t);
        return s && "config" in s ? {
            config: Nu(s.config, e),
            ...void 0 !== n && {
                sourcePath: n
            }
        } : s;
    }
    let s, o, i;
    if ("string" == typeof r) {
        const t = r.replace(/^\.\//, "");
        if (!ge(t)) return;
        s = t.endsWith(".json") ? (0, I.join)(e, t) : (0, I.join)(e, t, "hooks.json");
    } else s = (0, I.join)(e, "hooks", "hooks.json");
    try {
        if (await hu(s)) return;
        if (!(await (0, ve.stat)(s)).isFile()) return;
    } catch  {
        return;
    }
    try {
        await gu(s), o = await (0, ve.readFile)(s, "utf-8");
    } catch  {
        return;
    }
    try {
        i = JSON.parse(o);
    } catch  {
        return {
            error: {
                source: "claude-plugin",
                message: `Plugin ${t} ${s}: invalid JSON`
            }
        };
    }
    const a = Uu(i, t);
    return a && "config" in a ? {
        config: Nu(a.config, e),
        sourcePath: s
    } : a;
}
function Uu(e, t) {
    const r = (0, fc.fp)(e);
    if ("cursor" === r) {
        const r = e, n = (0, fc.RV)(r);
        return n.isValid ? {
            config: r
        } : {
            error: {
                source: "claude-plugin",
                message: `Plugin ${t} hooks: ${n.errors.join("; ")}`
            }
        };
    }
    if ("claude-code" === r) {
        const r = e, n = r?.hooks;
        if (!n || 0 === Object.keys(n).length) return;
        const s = (0, fc.sl)(n), o = (0, fc.RV)(s);
        return o.isValid ? {
            config: s
        } : {
            error: {
                source: "claude-plugin",
                message: `Plugin ${t} hooks: ${o.errors.join("; ")}`
            }
        };
    }
}
async function Lu(e, t, r, n) {
    const o = n?.log ?? s, i = await ku(e, t, o), a = {
        ...Bu(r) ?? (n?.configuredVariables ? {
            configuredVariables: n.configuredVariables
        } : void 0),
        log: o
    }, [c, l, u] = await Promise.all([
        Iu(e, i?.manifestOptions),
        Du(e, r, a),
        Fu(e, t, i?.manifestOptions?.hooks, i?.manifestFilePath)
    ]);
    return {
        ...c,
        ...void 0 !== i?.metadata?.displayName && {
            displayName: i.metadata.displayName
        },
        ...void 0 !== i?.metadata?.description && {
            description: i.metadata.description
        },
        ...void 0 !== i?.metadata?.authorName && {
            authorName: i.metadata.authorName
        },
        ...void 0 !== i?.metadata?.logoUrl && {
            logoUrl: i.metadata.logoUrl
        },
        ...void 0 !== i?.metadata?.version && {
            version: i.metadata.version
        },
        ...void 0 !== i?.metadata?.homepage && {
            homepage: i.metadata.homepage
        },
        ...void 0 !== i?.metadata?.repository && {
            repository: i.metadata.repository
        },
        variablesSchema: i?.metadata?.variables,
        mcpConfig: l,
        capabilities: i?.metadata?.capabilities ?? [],
        hooks: u
    };
}
async function $u(e, t, r) {
    const n = r?.log ?? s, o = await ku(e, t.raw, n), [i, a, c] = await Promise.all([
        Iu(e, o?.manifestOptions),
        qu(e, t, n),
        Fu(e, t.raw, o?.manifestOptions?.hooks, o?.manifestFilePath)
    ]);
    return {
        identifier: {
            source: "claude-plugin",
            sourceInfo: t
        },
        installPath: e,
        ...void 0 !== o?.metadata?.displayName && {
            displayName: o.metadata.displayName
        },
        ...void 0 !== o?.metadata?.description && {
            description: o.metadata.description
        },
        ...void 0 !== o?.metadata?.authorName && {
            authorName: o.metadata.authorName
        },
        ...void 0 !== o?.metadata?.logoUrl && {
            logoUrl: o.metadata.logoUrl
        },
        ...void 0 !== o?.metadata?.version && {
            version: o.metadata.version
        },
        ...void 0 !== o?.metadata?.homepage && {
            homepage: o.metadata.homepage
        },
        ...void 0 !== o?.metadata?.repository && {
            repository: o.metadata.repository
        },
        ...i,
        mcpConfig: a ?? void 0,
        capabilities: o?.metadata?.capabilities ?? [],
        hooks: c
    };
}
async function ju(e, t, r, n) {
    const s = `${r.name}@${r.version}`, { displayName: o, description: i, authorName: a, logoUrl: c, version: l, homepage: u, repository: d, variablesSchema: p, skills: m, rules: h, agents: f, commands: g, mcpConfig: y, capabilities: w, hooks: v } = await Lu(e, s, r, {
        log: n?.log
    });
    return {
        identifier: {
            source: t,
            sourceInfo: r
        },
        installPath: e,
        ...void 0 !== o && {
            displayName: o
        },
        ...void 0 !== i && {
            description: i
        },
        ...void 0 !== a && {
            authorName: a
        },
        ...void 0 !== c && {
            logoUrl: c
        },
        ...void 0 !== l && {
            version: l
        },
        ...void 0 !== u && {
            homepage: u
        },
        ...void 0 !== d && {
            repository: d
        },
        variablesSchema: p,
        skills: m,
        rules: h,
        agents: f,
        commands: g,
        mcpConfig: y ?? void 0,
        capabilities: w,
        hooks: v
    };
}
async function Gu(e, t, r = {}) {
    const n = r.log ?? s, o = performance.now(), i = await async function(e) {
        const t = uu(e), r = (0, I.join)(t, "plugins", "installed_plugins.json");
        try {
            const e = await (0, ve.readFile)(r, "utf-8");
            return JSON.parse(e);
        } catch (e) {
            return e.code, null;
        }
    }(r.userHomeDir);
    if (!i?.plugins) return n.log("info", `loadAllEnabledPlugins: no installed plugins metadata found (${(performance.now() - o).toFixed(1)}ms)`), [];
    const a = await du(r.userHomeDir), c = function(e) {
        if (void 0 === e) return [];
        const t = "string" == typeof e ? [
            e
        ] : e, r = new Set, n = [];
        for (const e of t){
            if (!e) continue;
            const t = (0, I.resolve)(e);
            r.has(t) || (r.add(t), n.push(t));
        }
        return n;
    }(e), l = function(e, t, r) {
        if (0 === r.length) return wc(e, t, null, void 0);
        const n = new Set;
        for (const { settings: e } of r)for (const [t, r] of Object.entries(e?.enabledPlugins ?? {}))!1 === r && n.add(t);
        const s = new Set, o = [];
        for (const { workspacePath: i, settings: a } of r){
            const r = wc(e, t, a, i);
            for (const e of r)s.has(e.pluginId) || n.has(e.pluginId) || (s.add(e.pluginId), o.push(e));
        }
        return o;
    }(i, a, await (0, Ca.PH)(c, async (e)=>({
            workspacePath: e,
            settings: await pu(e)
        }), {
        max: 8
    })), d = [], p = r.onError;
    for (const { pluginId: e, installPath: t } of l)try {
        const r = performance.now(), s = u(e), o = await $u(t, s, {
            log: n
        });
        d.push(o), n.log("info", `loadClaudePlugin ${e} loaded in ${(performance.now() - r).toFixed(1)}ms`);
    } catch (t) {
        const r = t instanceof Error ? t : new Error(String(t));
        if (p) try {
            p(u(e), r);
        } catch  {
            p({
                name: e.split("@")[0] ?? e,
                sourceType: "marketplace",
                marketplace: "unknown",
                raw: e
            }, r);
        }
    }
    return n.log("info", `loadAllEnabledPlugins completed in ${(performance.now() - o).toFixed(1)}ms (${l.length} resolved, ${d.length} loaded)`), d;
}
const zu = "local";
async function Wu(e, t = {}) {
    const r = t.log ?? s, n = t.userHomeDir ?? process.env.HOME;
    if (!n) throw new Error("removeUserLocalPlugin: no home directory available");
    if (!e || e.includes("/") || e.includes("\\") || "." === e || ".." === e) throw new Error(`removeUserLocalPlugin: invalid plugin name "${e}"`);
    const o = (0, I.join)(n, ".cursor", "plugins", zu, e);
    r.log("info", `removeUserLocalPlugin: removing ${o}`), await (0, ve.rm)(o, {
        recursive: !0,
        force: !0
    }), r.log("info", `removeUserLocalPlugin: removed ${o}`);
}
async function Hu(e) {
    const t = e.log ?? s, r = performance.now(), { client: n, userId: o, teamId: i, onCursorError: a, pruneOldVersions: c, pluginFilter: l, onPluginsListed: u } = e, d = [], p = e.cacheManager ?? new Mi(e.userHomeDir), m = performance.now();
    let h;
    try {
        h = await n.listEnabledPlugins(o, i);
    } catch (e) {
        return t.captureException(e, {
            error_type: "list_enabled_plugins"
        }), t.increment("marketplace.source_unavailable", 1), t.log("error", `marketplace listEnabledPlugins failed after ${(performance.now() - m).toFixed(1)}ms; treating source as unavailable: ${e instanceof Error ? e.message : String(e)}`), {
            plugins: [],
            failures: [],
            sourceUnavailable: !0
        };
    }
    t.log("info", `marketplace listEnabledPlugins completed in ${(performance.now() - m).toFixed(1)}ms (${h.plugins.length} plugins)`), u && await u(h.plugins);
    const f = [];
    if (h.listFailures) {
        d.push(...h.listFailures);
        for (const e of h.listFailures)f.push({
            identifier: {
                source: e.marketplaceName && "cursor-public" !== e.marketplaceName ? "cursor-third-party" : "cursor-first-party",
                sourceInfo: {
                    name: e.pluginName,
                    version: "",
                    ...void 0 !== e.pluginDbId && {
                        pluginDbId: e.pluginDbId
                    },
                    marketplace: e.marketplaceName
                }
            },
            installPath: "",
            loadError: e.errorMessage,
            skills: [],
            rules: [],
            agents: [],
            commands: [],
            capabilities: []
        });
    }
    const g = new Map;
    for (const e of h.plugins)if (!l || l(e)) try {
        const r = e.marketplace?.name;
        if (!r) {
            const t = new Error(`Plugin ${e.name} has no marketplace metadata — cannot determine cache path`);
            d.push({
                pluginName: e.name,
                pluginId: e.pluginId,
                marketplaceName: void 0,
                errorMessage: t.message,
                errorType: "manifest"
            }), a && a(e, t);
            continue;
        }
        const s = `${r}/${e.pluginId}`;
        let o = g.get(s);
        o || (o = {
            slug: r,
            pluginId: e.pluginId,
            versions: []
        }, g.set(s, o)), o.versions.push(e.version);
        let i;
        if (await p.isCached({
            marketplaceSlug: r,
            pluginId: e.pluginId,
            version: e.version
        })) i = p.getCacheDir({
            marketplaceSlug: r,
            pluginId: e.pluginId,
            version: e.version
        }), t.log("info", `loadFromMarketplaceSource: Found cached plugin: ${e.pluginId} at ${i}`, {
            marketplaceSlug: r,
            pluginId: e.pluginId,
            gitRef: e.version,
            marketplaceId: e.marketplace?.id
        });
        else {
            const s = p.getCacheDir({
                marketplaceSlug: r,
                pluginId: e.pluginId,
                version: e.version
            });
            t.log("info", `loadFromMarketplaceSource: Plugin missing from cache, installing: ${e.pluginId} at ${s}`, {
                marketplaceSlug: r,
                pluginId: e.pluginId,
                gitRef: e.version,
                marketplaceId: e.marketplace?.id
            }), await (0, ve.mkdir)(s, {
                recursive: !0
            });
            try {
                await n.installPlugin(e, s), await p.markCacheComplete({
                    marketplaceSlug: r,
                    pluginId: e.pluginId,
                    version: e.version
                });
            } catch (e) {
                try {
                    await (0, ve.rm)(s, {
                        recursive: !0,
                        force: !0
                    });
                } catch  {}
                throw e;
            }
            i = s;
        }
        const c = e.marketplace?.name, l = void 0 !== c && "cursor-public" !== c && c.length > 0 ? "cursor-third-party" : "cursor-first-party", u = {
            name: e.name,
            version: e.version,
            pluginDbId: e.pluginDbId,
            configuredVariables: e.configuredVariables,
            marketplace: c,
            marketplaceDbId: e.marketplaceDbId,
            isTeamRequired: e.isTeamRequired
        }, m = await ju(i, l, u, {
            log: t
        });
        f.push(m);
        try {
            await p.pruneOldVersions({
                marketplaceSlug: r,
                pluginId: e.pluginId,
                keepVersions: [
                    e.version
                ]
            });
        } catch  {}
    } catch (r) {
        t.captureException(r, {
            error_type: "load_plugin_from_marketplace"
        });
        const n = r instanceof Error ? r : new Error(String(r));
        d.push({
            pluginName: e.name,
            pluginId: e.pluginId,
            marketplaceName: e.marketplace?.name,
            errorMessage: n.message,
            errorType: yu(n)
        });
        const s = e.marketplace?.name, o = void 0 !== s && "cursor-public" !== s && s.length > 0;
        f.push({
            identifier: {
                source: o ? "cursor-third-party" : "cursor-first-party",
                sourceInfo: {
                    name: e.name,
                    version: e.version,
                    pluginDbId: e.pluginDbId,
                    marketplace: s,
                    marketplaceDbId: e.marketplaceDbId,
                    isTeamRequired: e.isTeamRequired
                }
            },
            installPath: "",
            loadError: n.message || "Plugin load failed",
            skills: [],
            rules: [],
            agents: [],
            commands: [],
            capabilities: []
        }), a && a(e, n);
    }
    if (c) for (const { slug: e, pluginId: t, versions: r } of g.values())try {
        await p.pruneOldVersions({
            marketplaceSlug: e,
            pluginId: t,
            keepVersions: r
        });
    } catch  {}
    return t.log("info", `loadFromMarketplaceSource completed in ${(performance.now() - r).toFixed(1)}ms (${f.length} plugins loaded, ${d.length} failures)`), {
        plugins: f,
        failures: d,
        sourceUnavailable: !1
    };
}
async function Ku(e, t = {}) {
    const r = t.log ?? s, n = performance.now(), o = t.loadClaude ?? !0, i = t.loadUserLocal ?? !0, a = t.marketplaceSources ?? [], c = t.loadCursorFirstParty ?? a.length > 0, l = [], u = [];
    let d;
    o && l.push(Gu(e, 0, {
        userHomeDir: t.userHomeDir,
        onError: t.onError,
        log: r
    })), c && a.length > 0 && (d = Promise.allSettled(a.map((e)=>Hu({
            ...e,
            userHomeDir: e.userHomeDir ?? t.userHomeDir,
            log: e.log ?? r
        })))), i && l.push(async function(e = {}) {
        const t = e.log ?? s, r = performance.now(), n = e.userHomeDir ?? process.env.HOME;
        if (!n) return t.log("info", "loadUserLocalPlugins: no home directory available, skipping"), [];
        const o = (0, I.join)(n, ".cursor", "plugins", zu);
        let i;
        try {
            i = await (0, ve.readdir)(o, {
                withFileTypes: !0
            });
        } catch  {
            return t.log("info", `loadUserLocalPlugins: ${o} not found or not readable (${(performance.now() - r).toFixed(1)}ms)`), [];
        }
        const a = await (0, ve.realpath)(o).catch(()=>(0, I.resolve)(o)), c = [];
        for (const r of i){
            if (!r.isDirectory() && !r.isSymbolicLink()) continue;
            if (r.name.startsWith(".")) continue;
            const n = (0, I.join)(o, r.name);
            try {
                if (r.isSymbolicLink()) {
                    let e;
                    try {
                        e = await (0, ve.realpath)(n);
                    } catch (e) {
                        t.log("warn", `loadUserLocalPlugin ${r.name} rejected: failed to resolve symlink (${e instanceof Error ? e.message : String(e)})`);
                        continue;
                    }
                    try {
                        Pa(a, e);
                    } catch  {
                        t.log("warn", `loadUserLocalPlugin ${r.name} rejected: symlink target ${e} is outside ${o}`);
                        continue;
                    }
                }
                if (!(await (0, ve.stat)(n)).isDirectory()) {
                    r.isSymbolicLink() && t.log("warn", `loadUserLocalPlugin ${r.name} rejected: symlink target is not a directory`);
                    continue;
                }
                const s = performance.now(), i = await e.localPluginVariablesLookup?.(r.name), { displayName: l, description: u, authorName: d, logoUrl: p, version: m, homepage: h, repository: f, variablesSchema: g, skills: y, rules: w, agents: v, commands: _, mcpConfig: b, capabilities: S, hooks: k } = await Lu(n, r.name, void 0, {
                    configuredVariables: i,
                    log: t
                }), x = {
                    source: "user-local",
                    sourceInfo: {
                        name: r.name,
                        localPath: n
                    }
                };
                c.push({
                    identifier: x,
                    installPath: n,
                    ...void 0 !== l && {
                        displayName: l
                    },
                    ...void 0 !== u && {
                        description: u
                    },
                    ...void 0 !== d && {
                        authorName: d
                    },
                    ...void 0 !== p && {
                        logoUrl: p
                    },
                    ...void 0 !== m && {
                        version: m
                    },
                    ...void 0 !== h && {
                        homepage: h
                    },
                    ...void 0 !== f && {
                        repository: f
                    },
                    variablesSchema: g,
                    skills: y,
                    rules: w,
                    agents: v,
                    commands: _,
                    mcpConfig: b ?? void 0,
                    capabilities: S,
                    hooks: k
                }), t.log("info", `loadUserLocalPlugin ${r.name} loaded in ${(performance.now() - s).toFixed(1)}ms`);
            } catch (e) {
                t.log("error", `loadUserLocalPlugin ${r.name} failed: ${e instanceof Error ? e.message : String(e)}`);
            }
        }
        return t.log("info", `loadUserLocalPlugins completed in ${(performance.now() - r).toFixed(1)}ms (${c.length} plugins loaded)`), c;
    }({
        userHomeDir: t.userHomeDir,
        log: r,
        localPluginVariablesLookup: t.localPluginVariablesLookup
    }));
    const [p, m] = await Promise.all([
        Promise.allSettled(l),
        d ?? Promise.resolve([])
    ]);
    let h = !1;
    const f = [];
    for (const e of m)"rejected" !== e.status ? (e.value.sourceUnavailable && (h = !0), f.push(...e.value.plugins), u.push(...e.value.failures)) : (h = !0, r.log("error", `marketplace source threw while loading; treating it as unavailable: ${String(e.reason)}`));
    for (const e of p)"rejected" !== e.status ? f.push(...e.value) : (h = !0, r.log("error", `plugin source threw while loading; treating it as unavailable: ${String(e.reason)}`));
    const g = new Set, y = [];
    for (const e of f){
        if (!e.installPath) {
            y.push(e);
            continue;
        }
        const t = await (0, ve.realpath)(e.installPath).catch(()=>e.installPath);
        g.has(t) || (g.add(t), y.push(e));
    }
    const w = new Map, v = [];
    for (const e of y){
        const t = Vu(e);
        if (void 0 !== t) {
            const r = w.get(t), n = !e.loadError;
            if (!0 === r) continue;
            if (!1 === r && n) {
                const r = v.findIndex((e)=>Vu(e) === t && e.loadError);
                -1 !== r && v.splice(r, 1), w.set(t, !0), v.push(e);
                continue;
            }
            w.set(t, n);
        }
        v.push(e);
    }
    const _ = performance.now() - n;
    return r.log("info", `loadAllPlugins completed in ${_.toFixed(1)}ms (claude=${o}, userLocal=${i}, marketplace=${a.length} sources, total=${v.length} plugins, failures=${u.length}, sourceUnavailable=${h})`), {
        plugins: v,
        failures: u,
        sourceUnavailable: h
    };
}
function Vu(e) {
    const { identifier: t } = e;
    switch(t.source){
        case "claude-plugin":
            return "marketplace" === t.sourceInfo.sourceType && t.sourceInfo.marketplace ? `${t.sourceInfo.marketplace}/${t.sourceInfo.name}` : void 0;
        case "cursor-first-party":
        case "cursor-third-party":
            return t.sourceInfo.marketplace ? `${t.sourceInfo.marketplace}/${t.sourceInfo.name}` : void 0;
        case "user-local":
        case "extension":
            return;
        default:
            return;
    }
}
function Yu(e) {
    return Vu(e) ?? `path:${e.installPath}`;
}
function Qu(e, t = {}) {
    return {
        ...e,
        model: t.stripModel ? void 0 : e.model,
        tools: t.stripTools ? void 0 : e.tools
    };
}
const Xu = (0, I.join)((0, Di.homedir)(), ".claude", "plugins", "marketplaces"), Zu = 4, ed = {
    log: ()=>{}
};
async function td(e) {
    const { dirPath: t, existingUserMarketplaceNames: r, logger: n } = e, s = (0, I.basename)(t), o = await async function(e) {
        const t = (0, I.join)(e, ".git", "config");
        try {
            const e = (await (0, ve.readFile)(t, "utf-8")).match(/\[remote\s+"origin"\][^[]*\burl\s*=\s*(.+)/m);
            if (e?.[1]) return e[1].trim();
        } catch  {}
    }(t);
    if (!o) return n.log("cc-marketplace-import.noGitUrl", {
        dirPath: t
    }), {
        kind: "unparseable",
        reason: "no-git-url"
    };
    const i = await Ga(t, {
        repoName: s
    });
    if (null === i) return n.log("cc-marketplace-import.noManifest", {
        dirPath: t
    }), {
        kind: "unparseable",
        reason: "no-manifest"
    };
    if (r.has(i.name)) return n.log("cc-marketplace-import.skippedExistingUserMarketplace", {
        marketplaceName: i.name,
        dirPath: t
    }), {
        kind: "skipped-existing",
        marketplaceName: i.name
    };
    const a = await async function(e) {
        const t = (0, I.join)(e, ".git", "HEAD");
        try {
            const r = (await (0, ve.readFile)(t, "utf-8")).trim();
            if (r.startsWith("ref: ")) {
                const t = (0, I.join)(e, ".git", r.slice(5)), n = (await (0, ve.readFile)(t, "utf-8")).trim();
                return 40 === n.length ? n : void 0;
            }
            return 40 === r.length ? r : void 0;
        } catch  {}
    }(t), c = await async function(e) {
        const t = (0, I.join)(e, ".git", "HEAD");
        try {
            const e = (await (0, ve.readFile)(t, "utf-8")).trim();
            if (e.startsWith("ref: refs/heads/")) return e.slice(16);
        } catch  {}
        return "main";
    }(t), l = [], u = i.metadata?.pluginRoot;
    for (const e of i.plugins){
        const r = "string" == typeof e.name ? e.name : e.name ?? s, o = he(e.source, u);
        if (null === o) {
            n.log("cc-marketplace-import.skippingExternalPlugin", {
                name: r,
                source: e.source
            });
            continue;
        }
        if (!ge(o)) {
            n.log("cc-marketplace-import.skippingUnsafePluginPath", {
                name: r,
                source: e.source,
                gitPath: o
            });
            continue;
        }
        const i = (0, I.join)(t, o);
        try {
            if (!(await (0, ve.stat)(i)).isDirectory()) continue;
        } catch  {
            continue;
        }
        try {
            const t = await Eu(i), n = t.manifest.name ?? e.displayName ?? r, s = t.manifest.description ?? e.description ?? "";
            l.push({
                name: r,
                displayName: n,
                description: s,
                gitPath: o,
                gitUrl: "",
                gitRef: "",
                skills: t.skills,
                subagents: t.subagents,
                hooks: t.hooks,
                rules: t.rules,
                mcpServers: t.mcpServers,
                commands: t.commands,
                logoUrl: e.logo,
                variables: t.manifest.variables
            });
        } catch (e) {
            n.log("cc-marketplace-import.pluginLoadError", {
                name: r,
                pluginPath: i,
                error: e instanceof Error ? e.message : String(e)
            });
        }
    }
    return 0 === l.length ? (n.log("cc-marketplace-import.noPlugins", {
        dirPath: t
    }), {
        kind: "unparseable",
        reason: "no-plugins"
    }) : {
        kind: "payload",
        payload: {
            gitUrl: o,
            gitRef: a ?? c,
            marketplaceName: i.name,
            commitSha: a ?? void 0,
            plugins: l
        }
    };
}
async function rd(e = {}) {
    const t = e.marketplacesDir ?? Xu, r = void 0 === e.existingUserMarketplaceNames ? new Set : e.existingUserMarketplaceNames instanceof Set ? e.existingUserMarketplaceNames : new Set(e.existingUserMarketplaceNames), n = e.logger ?? ed, s = e.maxConcurrent ?? Zu, o = {
        payloads: [],
        marketplacesDir: t,
        totalDirectories: 0,
        skippedExisting: 0,
        unparseable: 0
    };
    let i;
    n.log("cc-marketplace-import.start", {
        dir: t
    });
    try {
        i = await (0, ve.readdir)(t, {
            withFileTypes: !0
        });
    } catch (e) {
        return n.log("cc-marketplace-import.readdirError", {
            dir: t,
            error: e instanceof Error ? e.message : String(e)
        }), o;
    }
    const a = [];
    for (const e of i)e.isDirectory() && a.push((0, I.join)(t, e.name));
    if (0 === a.length) return n.log("cc-marketplace-import.noMarketplaces"), {
        ...o
    };
    n.log("cc-marketplace-import.foundMarketplaces", {
        count: a.length
    });
    const c = await (0, Ca.up)(a, async (e)=>td({
            dirPath: e,
            existingUserMarketplaceNames: r,
            logger: n
        }), {
        max: s
    }), l = [];
    let u = 0, d = 0;
    return c.forEach((e, t)=>{
        if ("fulfilled" !== e.status) return d += 1, void n.log("cc-marketplace-import.parseError", {
            dirPath: a[t],
            error: e.reason instanceof Error ? e.reason.message : String(e.reason)
        });
        switch(e.value.kind){
            case "payload":
                l.push(e.value.payload);
                break;
            case "skipped-existing":
                u += 1;
                break;
            case "unparseable":
                d += 1;
                break;
            default:
                e.value;
        }
    }), n.log("cc-marketplace-import.discoveryComplete", {
        totalDirectories: a.length,
        payloads: l.length,
        skippedExisting: u,
        unparseable: d
    }), {
        payloads: l,
        marketplacesDir: t,
        totalDirectories: a.length,
        skippedExisting: u,
        unparseable: d
    };
}
async function nd(e, t, r) {
    const n = t?.trim() || "HEAD", s = await async function(e) {
        const { primaryGitUrl: t, fallbackGitUrl: r, requestedRef: n } = e;
        try {
            return await Hi(t, n, {
                sshBatchMode: t.startsWith("git@") || t.startsWith("ssh://")
            });
        } catch (e) {
            if (void 0 === r || r === t) throw e;
            return await Hi(r, n);
        }
    }({
        primaryGitUrl: r ?? e,
        fallbackGitUrl: void 0 === r ? void 0 : e,
        requestedRef: n
    });
    return "HEAD" === n.toUpperCase() ? {
        requestedRef: n,
        cloneRef: s.fullSha,
        commitSha: s.fullSha,
        defaultBranch: zi(s.headSymrefStdout ?? "") ?? "HEAD"
    } : {
        requestedRef: n,
        cloneRef: s.fullSha,
        commitSha: s.fullSha,
        defaultBranch: n
    };
}
function sd(e) {
    const { pluginLogo: t, entryLogo: r, owner: n, repo: s, ref: o, basePath: i } = e;
    return t?.startsWith("http") ? t : t ? fe({
        logo: t,
        owner: n,
        repo: s,
        ref: o,
        basePath: i
    }) : r ? "string" == typeof r && r.startsWith("http") ? r : fe({
        logo: r,
        owner: n,
        repo: s,
        ref: o,
        basePath: i
    }) : void 0;
}
function od(e) {
    return "local" !== e.sourceType;
}
const id = {
    skills: [],
    subagents: [],
    hooks: [],
    rules: [],
    mcpServers: [],
    commands: [],
    variables: void 0,
    logoUrl: void 0
};
function ad(e, t, r, n) {
    if (e?.startsWith("http")) return e;
    const s = wa(t.gitUrl);
    return "error" in s ? void 0 : e ? fe({
        logo: e,
        owner: s.owner,
        repo: s.repo,
        ref: t.gitRef ?? "HEAD",
        basePath: n
    }) : void 0;
}
function cd(e) {
    return {
        name: e.name,
        displayName: e.displayName,
        description: e.description ?? "",
        gitPath: "",
        skills: [],
        subagents: [],
        hooks: [],
        rules: [],
        mcpServers: [],
        commands: [],
        parseError: e.parseError
    };
}
function ld(e, t) {
    const r = new Set(e.map((e)=>e.name));
    for (const n of t){
        let t = n.name;
        if (!t || r.has(t)) {
            let e = n.index;
            do {
                t = `errored-plugin-${e}`, e++;
            }while (r.has(t))
        }
        r.add(t), e.push(cd({
            name: t,
            displayName: n.name ?? t,
            parseError: n.error
        }));
    }
}
async function ud(e) {
    const t = e.logger ?? s, r = [];
    for (const n of e.localPlugins){
        const s = e.manifest.plugins.find((e)=>e.name === n.name);
        if (void 0 === s) continue;
        let o, i;
        try {
            o = Pa(e.rootDir, n.gitPath);
        } catch (e) {
            t.log("warn", "loadLocalPluginEntries: plugin path escapes marketplace folder, skipping", {
                plugin: n.name,
                gitPath: n.gitPath,
                error: e instanceof Error ? e.message : String(e)
            });
            continue;
        }
        try {
            i = await Eu(o, {
                symlinkTargetRoot: e.rootDir
            });
        } catch (e) {
            t.log("warn", "loadLocalPluginEntries: failed to load plugin preview, skipping", {
                plugin: n.name,
                error: e instanceof Error ? e.message : String(e)
            });
            continue;
        }
        const a = ye(i.manifest, s), c = i.manifest.description ?? s.description ?? "";
        r.push({
            name: s.name,
            displayName: a || s.name,
            description: c,
            gitPath: n.gitPath,
            logoUrl: e.resolveEntryLogoUrl?.({
                manifestLogo: i.manifest.logo,
                entry: s,
                gitPath: n.gitPath
            }),
            variables: i.manifest.variables ?? s.variables,
            skills: i.skills,
            subagents: i.subagents,
            hooks: i.hooks,
            rules: i.rules,
            mcpServers: i.mcpServers,
            commands: i.commands
        });
    }
    return r;
}
async function dd(e) {
    const { pluginMetricsLogger: t = s, onParsedMarketplace: r } = e, n = wa(e.gitUrl);
    if ("error" in n) throw new Error(n.error);
    if (!e.allowNonGitHubHosts && !ua(n.host)) throw new Error(`Only github.com repositories are supported for local preview. Host "${n.host}" is not allowed.`);
    const o = `${n.url}.git`, i = e.gitUrl.trim(), a = i.startsWith("git@") || i.startsWith("ssh://"), c = n.url.startsWith(`https://${n.host}/`), l = a ? i : c ? n.url : void 0, u = e.allowNonGitHubHosts && !ua(n.host) && void 0 !== l ? ka(l) ?? void 0 : void 0, d = await nd(o, e.gitRef, u), p = `${n.owner}-${n.repo}-local`.toLowerCase();
    t.log("info", "parseGitHubRepoForPluginsLocally: Resolved remote ref", {
        marketplaceRepo: n.repo,
        marketplaceId: p,
        resolvedRef: d,
        gitRef: e.gitRef,
        gitUrl: e.gitUrl
    });
    const m = new ja(e.marketplaceCacheRoot, {
        sparsePluginClones: e.sparsePluginClones
    }), h = await m.ensureCloned(p, o, d.cloneRef, t, {
        materialize: []
    });
    let f = d.commitSha ?? "";
    try {
        if ("" === f) {
            const { stdout: e } = await $i([
                "rev-parse",
                "HEAD"
            ], {
                cwd: h
            });
            f = e.trim();
        }
    } catch  {
        f = d.commitSha ?? "";
    }
    let g = d.defaultBranch;
    if ("HEAD" === g) try {
        const { stdout: e } = await $i([
            "rev-parse",
            "--abbrev-ref",
            "HEAD"
        ], {
            cwd: h
        }), t = e.trim();
        t && "HEAD" !== t && (g = t);
    } catch  {}
    const y = n.url, { owner: w, repo: v } = n, _ = await m.readManifest(h, {
        repoName: v
    });
    if (null !== _) {
        const s = await m.discoverPlugins(h), o = s.filter((e)=>"local" === e.sourceType), i = s.filter(od);
        o.length > 0 && await m.ensureMaterialized(h, ea(o.map((e)=>e.gitPath)), t);
        const a = await ud({
            rootDir: h,
            manifest: _,
            localPlugins: o,
            resolveEntryLogoUrl: ({ manifestLogo: e, entry: t, gitPath: r })=>sd({
                    pluginLogo: e,
                    entryLogo: t.logo,
                    owner: w,
                    repo: v,
                    ref: f || g,
                    basePath: r
                }),
            logger: t
        });
        if (i.length > 0) {
            const r = await async function(e, t, r, n) {
                const s = new Map;
                if (0 === e.length) return s;
                const o = new Map;
                for (const [t, r] of e.entries()){
                    const e = r.sha ?? r.gitRef ?? "HEAD", n = `${r.gitUrl}\0${e}`;
                    let s = o.get(n);
                    s || (s = {
                        gitUrl: r.gitUrl,
                        ref: e,
                        plugins: []
                    }, o.set(n, s)), s.plugins.push({
                        index: t,
                        plugin: r
                    });
                }
                for (const e of o.values()){
                    const o = wa(e.gitUrl);
                    if ("error" in o) {
                        r.log("warn", "loadExternalPluginsLocally: Rejecting external plugin URL", {
                            gitUrl: e.gitUrl,
                            reason: o.error
                        });
                        for (const { index: t } of e.plugins)s.set(t, id);
                        continue;
                    }
                    if (!ua(o.host) && o.host !== n) {
                        r.log("warn", "loadExternalPluginsLocally: Rejecting non-github.com external plugin URL", {
                            gitUrl: e.gitUrl,
                            host: o.host
                        });
                        for (const { index: t } of e.plugins)s.set(t, id);
                        continue;
                    }
                    const i = `${o.owner}-${o.repo}-external`.toLowerCase(), a = `${o.url}.git`, c = e.plugins.some(({ plugin: e })=>"git-subdir" !== e.sourceType) ? "all" : ea(e.plugins.flatMap(({ plugin: e })=>"git-subdir" === e.sourceType ? [
                            e.subdirPath
                        ] : []));
                    let l;
                    try {
                        l = await t.ensureCloned(i, a, e.ref, r, {
                            materialize: c
                        });
                    } catch (t) {
                        r.log("warn", "loadExternalPluginsLocally: Failed to clone external repo, falling back to metadata only", {
                            gitUrl: e.gitUrl,
                            gitRef: e.ref,
                            error: t instanceof Error ? t.message : String(t)
                        });
                        for (const { index: t } of e.plugins)s.set(t, id);
                        continue;
                    }
                    for (const { index: n, plugin: o } of e.plugins){
                        const i = "git-subdir" === o.sourceType ? o.subdirPath : void 0;
                        let a;
                        try {
                            a = i ? t.getPluginDir(l, i) : l;
                        } catch  {
                            s.set(n, id);
                            continue;
                        }
                        try {
                            const e = await Eu(a, {
                                symlinkTargetRoot: l
                            }), t = ad(e.manifest.logo, o, 0, i);
                            s.set(n, {
                                skills: e.skills,
                                subagents: e.subagents,
                                hooks: e.hooks,
                                rules: e.rules,
                                mcpServers: e.mcpServers,
                                commands: e.commands,
                                variables: e.manifest.variables,
                                logoUrl: t
                            });
                        } catch (t) {
                            r.log("warn", "loadExternalPluginsLocally: Failed to discover external plugin components, falling back to metadata only", {
                                gitUrl: e.gitUrl,
                                pluginName: o.name,
                                subdirPath: i,
                                error: t instanceof Error ? t.message : String(t)
                            }), s.set(n, id);
                        }
                    }
                }
                return s;
            }(i, m, t, e.allowNonGitHubHosts ? n.host : void 0);
            for (const [e, t] of i.entries()){
                const n = _.plugins.find((e)=>e.name === t.name), s = r.get(e) ?? id, o = "git-subdir" === t.sourceType ? t.subdirPath : void 0;
                a.push({
                    name: t.name,
                    displayName: ye({
                        displayName: t.displayName
                    }, {
                        name: t.name
                    }),
                    description: t.description ?? "",
                    gitPath: o ?? "",
                    logoUrl: s.logoUrl ?? n?.logo,
                    variables: s.variables ?? n?.variables,
                    externalUrl: t.gitUrl,
                    externalRef: t.sha ?? t.gitRef ?? "HEAD",
                    subdirPath: o,
                    skills: s.skills,
                    subagents: s.subagents,
                    hooks: s.hooks,
                    rules: s.rules,
                    mcpServers: s.mcpServers,
                    commands: s.commands
                });
            }
        }
        ld(a, _.skippedPluginEntries);
        const c = {
            marketplaceName: _.name,
            marketplaceDescription: _.metadata?.description ?? _.description ?? "",
            defaultBranch: g,
            repositoryUrl: y,
            commitSha: f,
            plugins: a
        };
        return r && r({
            gitUrl: e.gitUrl,
            gitRef: e.gitRef,
            result: c
        }).catch((e)=>{
            t.log("warn", "parseGitHubRepoForPluginsLocally: onParsedMarketplace callback failed", {
                error: e instanceof Error ? e.message : String(e)
            });
        }), c;
    }
    await m.ensureMaterialized(h, "all", t);
    const b = await Eu(h, {
        symlinkTargetRoot: h
    }), S = b.manifest.name ? su(b.manifest.name) : su(v), k = ye(b.manifest, {
        name: v
    }), x = b.manifest.description ?? "", E = sd({
        pluginLogo: b.manifest.logo,
        owner: w,
        repo: v,
        ref: f || g
    }), I = {
        marketplaceName: S,
        marketplaceDescription: x,
        defaultBranch: g,
        repositoryUrl: y,
        commitSha: f,
        plugins: [
            {
                name: S,
                displayName: k || S,
                description: x,
                gitPath: "",
                logoUrl: E,
                variables: b.manifest.variables,
                skills: b.skills,
                subagents: b.subagents,
                hooks: b.hooks,
                rules: b.rules,
                mcpServers: b.mcpServers,
                commands: b.commands
            }
        ]
    };
    return r && r({
        gitUrl: e.gitUrl,
        gitRef: e.gitRef,
        result: I
    }).catch((e)=>{
        t.log("warn", "parseGitHubRepoForPluginsLocally: onParsedMarketplace callback failed", {
            error: e instanceof Error ? e.message : String(e)
        });
    }), I;
}
async function pd(e) {
    const t = e.pluginMetricsLogger ?? s, r = (0, I.resolve)(e.localPath), n = await Ga(r);
    if (null === n) throw new Error(`No marketplace manifest found in ${r} (expected .cursor-plugin/marketplace.json or .claude-plugin/marketplace.json)`);
    const { commitSha: o, defaultBranch: i } = await async function(e) {
        let t = "", r = "HEAD";
        try {
            const { stdout: r } = await $i([
                "rev-parse",
                "HEAD"
            ], {
                cwd: e
            });
            t = r.trim();
        } catch  {}
        try {
            const { stdout: t } = await $i([
                "rev-parse",
                "--abbrev-ref",
                "HEAD"
            ], {
                cwd: e
            }), n = t.trim();
            n && "HEAD" !== n && (r = n);
        } catch  {}
        return {
            commitSha: t,
            defaultBranch: r
        };
    }(r), a = (0, hc.pathToFileURL)(r).toString(), c = za(n), l = c.filter((e)=>"local" === e.sourceType), u = await ud({
        rootDir: r,
        manifest: n,
        localPlugins: l,
        logger: t
    }), d = c.filter((e)=>"local" !== e.sourceType), p = new Set(u.map((e)=>e.name));
    for (const e of d)p.has(e.name) || (p.add(e.name), u.push(cd({
        name: e.name,
        displayName: e.displayName ?? e.name,
        description: e.description ?? "",
        parseError: 'External-source plugins are not supported by local indexing yet. Host the plugin inside the marketplace folder (source: "./...").'
    })));
    return ld(u, n.skippedPluginEntries), {
        marketplaceName: n.name,
        marketplaceDescription: n.metadata?.description ?? n.description ?? "",
        defaultBranch: i,
        repositoryUrl: a,
        commitSha: o,
        plugins: u
    };
}
var md = require("./module-47859.js");
const hd = [
    "origin.cursor.com"
], fd = "x-prefer-origin-reads: true";
function gd(e, t = []) {
    const r = t.filter((e)=>"" !== e.trim()), n = 0 === r.length ? hd : [
        ...new Set([
            ...hd,
            ...r
        ])
    ], s = (0, md.a)(n, e);
    if (void 0 !== s) return Object.fromEntries(Object.entries(s).map(([e, t])=>[
            e,
            [
                t,
                fd
            ]
        ]));
}
async function yd(e) {
    const t = (0, I.join)(await (0, ve.mkdtemp)((0, I.join)((0, Di.tmpdir)(), "cursor-plugin-artifact-")), "plugin.tgz");
    try {
        const r = await (0, ve.readdir)(e);
        return await wo({
            cwd: e,
            file: t,
            gzip: !0,
            portable: !0,
            filter: (e, t)=>!t.isSymbolicLink?.()
        }, r), await (0, ve.readFile)(t);
    } finally{
        await (0, ve.rm)((0, I.dirname)(t), {
            recursive: !0,
            force: !0
        }).catch(()=>{});
    }
}
function wd(e) {
    return _d(e, (e)=>e.skills);
}
function vd(e) {
    return _d(e, (e)=>e.rules);
}
function _d(e, t) {
    const r = [];
    for (const n of e){
        const e = d(n.identifier), s = `plugin:${e}`, o = p(n.identifier), i = m(n.identifier), a = h(n.identifier), c = f(n.identifier);
        for (const l of t(n)){
            const t = (0, I.join)(n.installPath, l.path), { type: u, globs: d, description: p } = bd(l);
            r.push({
                fullPath: t,
                content: l.content,
                type: u,
                globs: d,
                description: p,
                pluginIdentifier: e,
                gitRemoteOrigin: s,
                plugin: o,
                marketplace: i,
                pluginId: a,
                marketplaceId: c,
                environments: l.environments,
                disabledEnvironments: l.disabledEnvironments
            });
        }
    }
    return r;
}
function bd(e) {
    return e.alwaysApply ? {
        type: "global"
    } : e.globs && e.globs.length > 0 ? {
        type: "fileGlobbed",
        globs: e.globs
    } : e.description ? {
        type: "agentFetched",
        description: e.description
    } : {
        type: "manuallyAttached"
    };
}
function Sd(e, t = {
    stripModel: !0,
    stripTools: !0
}) {
    const r = [];
    for (const n of e){
        const e = p(n.identifier), s = m(n.identifier), o = h(n.identifier), i = f(n.identifier);
        for (const a of n.agents){
            const c = Qu(a, t), l = (0, I.join)(n.installPath, c.path);
            r.push({
                name: c.name,
                description: c.description ?? "",
                prompt: c.prompt,
                fullPath: l,
                permissionMode: "readonly" === c.permissionMode ? "readonly" : "default",
                plugin: e,
                marketplace: s,
                pluginId: o,
                marketplaceId: i
            });
        }
    }
    return r;
}
const kd = n.Ik({
    path: n.Yj(),
    name: n.Yj().optional(),
    description: n.Yj().optional(),
    globs: n.YO(n.Yj()).optional(),
    alwaysApply: n.zM().optional(),
    content: n.Yj(),
    environments: n.YO(n.Yj()).optional(),
    disabledEnvironments: n.YO(n.Yj()).optional()
}), xd = kd.extend({
    name: n.Yj()
}), Ed = n.Ik({
    path: n.Yj(),
    name: n.Yj(),
    description: n.Yj().optional(),
    tools: n.YO(n.Yj()).optional(),
    model: n.Yj().optional(),
    prompt: n.Yj(),
    permissionMode: n.k5([
        "default",
        "readonly"
    ]).optional()
}), Id = n.Ik({
    path: n.Yj(),
    name: n.Yj(),
    description: n.Yj().optional(),
    argumentHint: n.Yj().optional(),
    content: n.Yj()
}), Td = n.Ie((e)=>"object" == typeof e && null !== e && "object" == typeof e.hooks && null !== e.hooks), Cd = n.Ik({
    config: Td,
    sourcePath: n.Yj().optional()
}), Pd = n.Ie((e)=>"object" == typeof e && null !== e);
n.Ik({
    schemaVersion: n.ai().int(),
    displayName: n.Yj().optional(),
    description: n.Yj().optional(),
    authorName: n.Yj().optional(),
    skills: n.YO(kd),
    rules: n.YO(xd),
    agents: n.YO(Ed),
    commands: n.YO(Id),
    mcpConfig: i.extend({
        mcpServerSourcePaths: n.g1(n.Yj(), n.Yj()).optional()
    }).optional(),
    hooks: Cd.optional(),
    hooksError: n.Yj().optional(),
    capabilities: n.YO(n.Yj()),
    variablesSchema: Pd.optional()
});
Error;
function Ad(e) {
    const t = e.trim();
    if (!t) return !1;
    if (t.startsWith("git@")) {
        return /^git@[a-zA-Z0-9.-]+:[a-zA-Z0-9._~\-/]+(?:\.git)?$/.test(t);
    }
    try {
        const e = new URL(t);
        return "https:" === e.protocol && "" === e.username && "" === e.password && "" === e.search && "" === e.hash;
    } catch  {
        return !1;
    }
}
class Rd extends Error {
    constructor(e){
        super(e), this.name = "SettingsParseError";
    }
}
const Md = ".cursor", Jd = "settings.json", Od = {
    formattingOptions: {
        tabSize: 2,
        insertSpaces: !0,
        eol: "\n",
        insertFinalNewline: !0
    }
};
function Bd(e) {
    return (0, I.join)(e, Md, Jd);
}
function Dd(e) {
    return 65279 === e.charCodeAt(0) ? e.slice(1) : e;
}
async function qd(e) {
    try {
        return Dd(await (0, ve.readFile)(Bd(e), "utf-8"));
    } catch (e) {
        if (function(e) {
            return e instanceof Error && "code" in e;
        }(e) && ("ENOENT" === e.code || "ENOTDIR" === e.code)) return;
        throw e;
    }
}
function Nd(e) {
    const t = Dd(e);
    if (0 === t.trim().length) return {};
    const r = [], n = (0, _e.qg)(t, r, {
        allowTrailingComma: !0
    });
    if (r.length > 0) {
        const e = r.slice(0, 3).map((e)=>`${(0, _e._n)(e.error)} at offset ${e.offset}`).join("; ");
        throw new Rd(`.cursor/settings.json contains syntax errors: ${e}`);
    }
    if ("object" != typeof n || null === n || Array.isArray(n)) return {};
    const s = n;
    return void 0 === s.plugins || "object" == typeof s.plugins && null !== s.plugins && !Array.isArray(s.plugins) ? s : {};
}
async function Fd(e) {
    const t = await qd(e);
    return void 0 === t ? {} : Nd(t);
}
async function Ud(e, t) {
    const r = (0, I.join)(e, Md);
    await (0, ve.mkdir)(r, {
        recursive: !0
    });
    const n = t.endsWith("\n") ? t : `${t}\n`;
    await (0, ve.writeFile)(Bd(e), n, "utf-8");
}
async function Ld(e, t) {
    const r = await qd(e), n = r ?? "{}";
    void 0 !== r && Nd(r);
    const s = (0, _e.JP)(n, [
        "plugins",
        t
    ], {
        enabled: !0
    }, Od), o = (0, _e.ct)(n, s);
    await Ud(e, o);
}
async function $d(e, t, r) {
    if (!Ad(r.gitUrl)) throw new Error(`Invalid project plugin git URL. Only https:// and git@ URLs are allowed: ${JSON.stringify(r.gitUrl)}`);
    const n = await qd(e), s = n ?? "{}";
    void 0 !== n && Nd(n);
    const o = {
        enabled: !0,
        gitUrl: r.gitUrl,
        gitRef: r.gitRef
    }, i = (0, _e.JP)(s, [
        "plugins",
        t
    ], o, Od), a = (0, _e.ct)(s, i);
    await Ud(e, a);
}
async function jd(e, t) {
    const r = await qd(e);
    if (void 0 === r) return;
    const n = Nd(r);
    if (!n.plugins || !(t in n.plugins)) return;
    let s = (0, _e.JP)(r, [
        "plugins",
        t
    ], void 0, Od), o = (0, _e.ct)(r, s);
    const i = Nd(o);
    if (i.plugins && 0 === Object.keys(i.plugins).length) {
        s = (0, _e.JP)(o, [
            "plugins"
        ], void 0, Od), o = (0, _e.ct)(o, s);
        const e = Nd(o);
        0 === Object.keys(e).length && /^\{\n\}\n?$/.test(o) && (o = "{}");
    }
    await Ud(e, o);
}
async function Gd(e) {
    const t = await qd(e);
    return void 0 === t ? [] : function(e) {
        const t = Nd(e);
        if (!t.plugins) return [];
        return Object.entries(t.plugins).filter(([, e])=>!0 === e.enabled).filter(([, e])=>!e.gitUrl || Ad(e.gitUrl)).map(([e, t])=>({
                key: e,
                entry: t
            }));
    }(t);
}
async function zd(e) {
    const t = await (0, Ca.PH)(Hd(e), async (e)=>({
            workspacePath: e,
            entries: await Gd(e)
        }), {
        max: 8
    }), r = new Set, n = [];
    for (const { workspacePath: e, entries: s } of t)for (const { key: t, entry: o } of s)r.has(t) || (r.add(t), n.push({
        key: t,
        entry: o,
        workspacePath: e
    }));
    return n;
}
async function Wd(e, t) {
    const r = [];
    for (const n of Hd(e)){
        const e = await Fd(n);
        void 0 !== e.plugins?.[t] && (await jd(n, t), r.push(n));
    }
    return r;
}
function Hd(e) {
    const t = new Set, r = [];
    for (const n of e){
        if (!n) continue;
        const e = (0, I.resolve)(n);
        t.has(e) || (t.add(e), r.push(n));
    }
    return r;
}
function Kd(e) {
    const t = e.indexOf("/");
    return -1 === t ? {
        name: e
    } : {
        name: e.slice(t + 1),
        marketplaceName: e.slice(0, t)
    };
}
async function Vd(e) {
    const { skillDirs: t, pluginSkillsRoot: r, skillsRoot: n } = e;
    if (0 === t.length) throw new Error("At least one skill directory is required");
    const s = t.map((e)=>{
        const t = (0, I.relative)((0, I.resolve)(r), (0, I.resolve)(e));
        if ("" === t || (0, I.isAbsolute)(t) || ".." === t.split(I.sep)[0]) throw new Error(`Skill folder "${e}" is not inside the plugin's skills directory`);
        return {
            skillDir: e,
            target: (0, I.join)(n, t)
        };
    }), o = s.map(({ target: e })=>e).filter((e, t, r)=>r.indexOf(e) !== t);
    if (o.length > 0) throw new Error(`Multiple skill folders would restore to the same path: ${o.join(", ")}`);
    for (const { skillDir: e, target: t } of s){
        if (!await Yd(e)) throw new Error(`Skill folder "${e}" is not a directory`);
        if (await Qd(t)) throw new Error(`Cannot restore skill to "${t}": that path already exists`);
    }
    await (0, ve.mkdir)(n, {
        recursive: !0
    });
    for (const { skillDir: e, target: t } of s)await (0, ve.mkdir)((0, I.dirname)(t), {
        recursive: !0
    }), await (0, ve.cp)(e, t, {
        recursive: !0,
        force: !1,
        errorOnExist: !0
    });
    return s.map(({ target: e })=>e);
}
async function Yd(e) {
    try {
        return (await (0, ve.stat)(e)).isDirectory();
    } catch  {
        return !1;
    }
}
async function Qd(e) {
    try {
        return await (0, ve.lstat)(e), !0;
    } catch  {
        return !1;
    }
}
async function Xd(e) {
    const { skills: t, targetDir: r, pluginName: n } = e;
    if (0 === t.length) throw new Error("At least one skill directory is required");
    const s = ee(n);
    if ("" === s) throw new Error(`Plugin name "${n}" has no usable characters`);
    const o = t.map(({ dir: e, relativePath: t })=>{
        const r = function(e) {
            if ((0, I.isAbsolute)(e)) throw new Error(`Skill path "${e}" must be relative to the skills root`);
            const t = e.split(/[/\\]/).filter((e)=>e.length > 0);
            if (0 === t.length || t.some((e)=>"." === e || ".." === e)) throw new Error(`Skill path "${e}" resolves to an unsafe path`);
            return t;
        }(t);
        return {
            dir: e,
            segments: r,
            manifestPath: `skills/${r.join("/")}`
        };
    }), i = o.map(({ manifestPath: e })=>e).filter((e, t, r)=>r.indexOf(e) !== t);
    if (i.length > 0) throw new Error(`Multiple skill folders would pack to the same path: ${i.join(", ")}`);
    const a = (0, I.join)(r, s), c = (0, I.join)(a, "skills");
    await (0, ve.mkdir)(c, {
        recursive: !0
    });
    for (const { dir: e, segments: t } of o){
        const r = (0, I.join)(c, ...t);
        await (0, ve.mkdir)((0, I.dirname)(r), {
            recursive: !0
        }), await (0, ve.cp)(e, r, {
            recursive: !0,
            dereference: !0
        });
    }
    const l = {
        name: s,
        displayName: e.displayName ?? n,
        skills: o.map(({ manifestPath: e })=>e)
    };
    return await (0, ve.writeFile)((0, I.join)(a, "plugin.json"), JSON.stringify(l, null, 2), "utf-8"), a;
}

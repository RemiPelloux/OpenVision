import { KV1, VV1, YV1 } from "./gYa.js";
import { Mt } from "./index_197.js";
import { XV1 } from "./index_204.js";
import { B7r, fvi } from "./ipa.js";
import { eK1 } from "./mcp.js";
import { J7 } from "./stylex_2.js";
import { E } from "./tslib.es6.js";
var qjm, NXa, LXa, zjm, Vjm, Kjm, Yjm, Xjm, Zjm, Qjm, Jjm, z0i, V0i, hIn, fes, Eqt, OXa, FXa, e$m, ves, t$m, _es, BXa, n$m;
export { BXa, Eqt, FXa, Jjm, Kjm, LXa, NXa, OXa, Qjm, V0i, Vjm, Xjm, Yjm, Zjm, _es, e$m, fes, hIn, n$m, qjm, t$m, ves, z0i, zjm };
var __wakaru_i$m_initialized = false;
export function i$m() {
if (__wakaru_i$m_initialized) return;
__wakaru_i$m_initialized = true;
"use strict";
E(), XV1(), Mt(), J7(), eK1(), qjm = {
    base: {
        k1xSpc: "cursor-ui-78zum5",
        kXwgrk: "cursor-ui-dt5ytf",
        kOIVth: "cursor-ui-1oot3zn",
        k7Eaqz: "cursor-ui-euugli",
        $$css: !0
    }
}, NXa = {
    base: {
        k1xSpc: "cursor-ui-78zum5",
        kGNEyG: "cursor-ui-1cy8zhl",
        kOIVth: "cursor-ui-1oot3zn",
        k7Eaqz: "cursor-ui-euugli",
        $$css: !0
    },
    row: {
        kGNEyG: "cursor-ui-6s0dn4",
        $$css: !0
    }
}, LXa = {
    base: {
        kzQI83: "cursor-ui-1c4vz4f",
        kmuXW: "cursor-ui-2lah0s",
        kCS8Yb: "cursor-ui-dl72j9",
        kzqmXN: "cursor-ui-ygnafs",
        kLKAdn: "cursor-ui-493x5y",
        kMwMTN: "cursor-ui-19aaqeu",
        kfSwDN: "cursor-ui-87ps6o",
        $$css: !0
    },
    row: {
        kLKAdn: "cursor-ui-exx8yu",
        $$css: !0
    }
}, zjm = {
    base: {
        kzQI83: "cursor-ui-1iyjqo2",
        kmuXW: "cursor-ui-s83m0k",
        kCS8Yb: "cursor-ui-dl72j9",
        k7Eaqz: "cursor-ui-euugli",
        k1xSpc: "cursor-ui-78zum5",
        kXwgrk: "cursor-ui-dt5ytf",
        kOIVth: "cursor-ui-pkkfsy",
        $$css: !0
    }
}, Vjm = {
    base: {
        k1xSpc: "cursor-ui-78zum5",
        kGNEyG: "cursor-ui-1qjc9v5",
        kOIVth: "cursor-ui-137clkk",
        k7Eaqz: "cursor-ui-euugli",
        $$css: !0
    }
}, Kjm = {
    base: {
        k1xSpc: "cursor-ui-78zum5",
        kzQI83: "cursor-ui-1iyjqo2",
        kmuXW: "cursor-ui-s83m0k",
        kCS8Yb: "cursor-ui-dl72j9",
        kGNEyG: "cursor-ui-1qjc9v5",
        k7Eaqz: "cursor-ui-euugli",
        kOIVth: "cursor-ui-11twubx",
        $$css: !0
    }
}, Yjm = {
    base: {
        kzQI83: "cursor-ui-1iyjqo2",
        kmuXW: "cursor-ui-s83m0k",
        kCS8Yb: "cursor-ui-1r8uery",
        k7Eaqz: "cursor-ui-euugli",
        $$css: !0
    }
}, Xjm = {
    base: {
        kMv6JI: "cursor-ui-xwulf8",
        khDVqt: "cursor-ui-1sdyfia",
        $$css: !0
    }
}, Zjm = {
    base: {
        kGuDYH: "cursor-ui-11wthnw",
        kLWn49: "cursor-ui-1ja60sm",
        kb6lSQ: "cursor-ui-vu1jfw",
        k1xSpc: "cursor-ui-78zum5",
        kLKAdn: "cursor-ui-uve7l6",
        kpe85a: "cursor-ui-1yxiud8",
        kGO01o: "cursor-ui-1rgtt3y",
        kE3dHu: "cursor-ui-yab65l",
        kEafiO: "cursor-ui-178xt8z",
        kWqL5O: "cursor-ui-s1s249",
        kt9PQ7: "cursor-ui-so031l",
        kZ1KPB: "cursor-ui-e0pwq",
        kPef9Z: "cursor-ui-13fuv20",
        kSWEuD: "cursor-ui-32b0ac",
        kfdmCh: "cursor-ui-1q0q8m5",
        k4WBpm: "cursor-ui-19ypqd9",
        kLZC3w: "cursor-ui-1ys92yt",
        k26BEO: "cursor-ui-3oy5ia",
        kL6WhQ: "cursor-ui-f4c8ic",
        kaZRDh: "cursor-ui-14wxl4x",
        kaIpWk: "cursor-ui-1043rbw",
        kWkggS: "cursor-ui-1xnwcy6",
        kMwMTN: "cursor-ui-1jh5svw",
        $$css: !0
    }
}, Qjm = {
    base: {
        k1xSpc: "cursor-ui-78zum5",
        kGNEyG: "cursor-ui-6s0dn4",
        kOIVth: "cursor-ui-ehausa",
        keoZOQ: "cursor-ui-1om1abp",
        $$css: !0
    }
}, Jjm = {
    base: {
        k1xSpc: "cursor-ui-78zum5",
        kGNEyG: "cursor-ui-6s0dn4",
        kOIVth: "cursor-ui-ehausa",
        koQZXg: "cursor-ui-8x9d4c",
        $$css: !0
    }
}, z0i = ()=>typeof globalThis.crypto?.randomUUID == "function" ? globalThis.crypto.randomUUID() : `mcp-${Math.random().toString(36).slice(2, 10)}`, V0i = ()=>({
        id: z0i(),
        value: ""
    }), hIn = ()=>({
        id: z0i(),
        key: "",
        value: ""
    }), fes = (t = 1)=>Array.from({
        length: t
    }, ()=>V0i()), Eqt = (t = 1)=>Array.from({
        length: t
    }, ()=>hIn()), OXa = (t)=>Object.entries(t).sort(([e], [n])=>e.localeCompare(n)).map(([e, n])=>({
            id: z0i(),
            key: e,
            value: n
        })), FXa = (t)=>{
    const e = {};
    for (const n of t){
        const i = n.key.trim();
        i !== "" && (e[i] = n.value);
    }
    return e;
}, e$m = (t)=>t.map((e)=>e.value.trim()).filter((e)=>e.length > 0), ves = (t, e)=>t === null ? {
        name: e?.name ?? "",
        type: e?.type ?? "HTTP",
        command: "",
        args: fes(),
        env: Eqt(),
        url: e?.url ?? "",
        headers: Eqt(),
        authClientId: "",
        authClientSecret: "",
        authRest: {}
    } : t.type === "STDIO" ? {
        name: t.name,
        type: "STDIO",
        command: t.command,
        args: t.args.length > 0 ? [
            ...t.args.map((n)=>({
                    id: z0i(),
                    value: n
                })),
            V0i()
        ] : fes(),
        env: Object.keys(t.env).length > 0 ? [
            ...OXa(t.env),
            hIn()
        ] : Eqt(),
        url: "",
        headers: Eqt(),
        authClientId: "",
        authClientSecret: "",
        authRest: {}
    } : {
        name: t.name,
        type: "HTTP",
        command: "",
        args: fes(),
        env: Eqt(),
        url: t.url,
        headers: Object.keys(t.headers).length > 0 ? [
            ...OXa(t.headers),
            hIn()
        ] : Eqt(),
        ...t$m(t.auth)
    }, t$m = (t)=>{
    const { CLIENT_ID: e = "", CLIENT_SECRET: n = "", ...i } = t ?? {};
    return {
        authClientId: e,
        authClientSecret: n,
        authRest: i
    };
}, _es = (t)=>t.type === "STDIO" ? {
        name: t.name.trim(),
        type: "STDIO",
        command: t.command.trim(),
        args: e$m(t.args),
        env: FXa(t.env)
    } : {
        name: t.name.trim(),
        type: "HTTP",
        url: t.url.trim(),
        headers: KV1(FXa(t.headers)),
        auth: VV1({
            ...t.authRest,
            CLIENT_ID: t.authClientId,
            CLIENT_SECRET: t.authClientSecret
        })
    }, BXa = (t)=>YV1(t.name, fvi(t)), n$m = (t, e, n, i)=>{
    const r = _es(t);
    if (r.name === "") return {
        value: null,
        error: null
    };
    if (i !== void 0 && i(r.name) === "") return {
        value: null,
        error: "Name must contain at least one letter or number."
    };
    if (B7r(r.name, e, n, i)) return {
        value: null,
        error: `A server named "${r.name}" already exists.`
    };
    const s = BXa(r);
    return s === void 0 ? {
        value: r,
        error: null
    } : {
        value: null,
        error: s.problem === "no_transport" ? null : s.message
    };
};

}

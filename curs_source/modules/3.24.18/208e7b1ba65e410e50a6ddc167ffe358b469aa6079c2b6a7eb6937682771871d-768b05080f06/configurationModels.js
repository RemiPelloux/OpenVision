import { Vn } from "./arrays.js";
import { at } from "./configuration.js";
import { Ai, Bm, FR, Jr, Sr, ua } from "./configurationRegistry.js";
import { N, O, se } from "./event.js";
import { Bs } from "./extensionsScannerService.js";
import { iM } from "./glob.js";
import { Ys, _m } from "./json.js";
import { Zs } from "./labels.js";
import { J, j } from "./lifecycle.js";
import { Yn, mr } from "./map.js";
import { tM } from "./nodejsWatcherLib.js";
import { UI, ns } from "./objects.js";
import { Un, pr, ri } from "./platform_2.js";
import { h } from "./tslib.es6.js";
import { Ze } from "./types.js";
import { x, ye } from "./uri.js";
import { Ws } from "./utilityProcess.js";
function Wx(e, t = !1) {
    let n = 0;
    const r = e.length;
    let s = "", i = 0, a = 16, o = 0;
    function l(S) {
        let k = 0, y = 0;
        for(; k < S;){
            const b = e.charCodeAt(n);
            if (b >= 48 && b <= 57) y = y * 16 + b - 48;
            else if (b >= 65 && b <= 70) y = y * 16 + b - 65 + 10;
            else if (b >= 97 && b <= 102) y = y * 16 + b - 97 + 10;
            else break;
            n++, k++;
        }
        return k < S && (y = -1), y;
    }
    function d(S) {
        n = S, s = "", i = 0, a = 16, o = 0;
    }
    function u() {
        const S = n;
        if (e.charCodeAt(n) === 48) n++;
        else for(n++; n < e.length && El(e.charCodeAt(n));)n++;
        if (n < e.length && e.charCodeAt(n) === 46) if (n++, n < e.length && El(e.charCodeAt(n))) for(n++; n < e.length && El(e.charCodeAt(n));)n++;
        else return o = 3, e.substring(S, n);
        let k = n;
        if (n < e.length && (e.charCodeAt(n) === 69 || e.charCodeAt(n) === 101)) if (n++, (n < e.length && e.charCodeAt(n) === 43 || e.charCodeAt(n) === 45) && n++, n < e.length && El(e.charCodeAt(n))) {
            for(n++; n < e.length && El(e.charCodeAt(n));)n++;
            k = n;
        } else o = 3;
        return e.substring(S, k);
    }
    function m() {
        let S = "", k = n;
        for(;;){
            if (n >= r) {
                S += e.substring(k, n), o = 2;
                break;
            }
            const y = e.charCodeAt(n);
            if (y === 34) {
                S += e.substring(k, n), n++;
                break;
            }
            if (y === 92) {
                if (S += e.substring(k, n), n++, n >= r) {
                    o = 2;
                    break;
                }
                switch(e.charCodeAt(n++)){
                    case 34:
                        S += '"';
                        break;
                    case 92:
                        S += "\\";
                        break;
                    case 47:
                        S += "/";
                        break;
                    case 98:
                        S += "\b";
                        break;
                    case 102:
                        S += "\f";
                        break;
                    case 110:
                        S += `
`;
                        break;
                    case 114:
                        S += "\r";
                        break;
                    case 116:
                        S += "	";
                        break;
                    case 117:
                        {
                            const I = l(4);
                            I >= 0 ? S += String.fromCharCode(I) : o = 4;
                            break;
                        }
                    default:
                        o = 5;
                }
                k = n;
                continue;
            }
            if (y >= 0 && y <= 31) if (Ev(y)) {
                S += e.substring(k, n), o = 2;
                break;
            } else o = 6;
            n++;
        }
        return S;
    }
    function f() {
        if (s = "", o = 0, i = n, n >= r) return i = r, a = 17;
        let S = e.charCodeAt(n);
        if (Lb(S)) {
            do n++, s += String.fromCharCode(S), S = e.charCodeAt(n);
            while (Lb(S))
            return a = 15;
        }
        if (Ev(S)) return n++, s += String.fromCharCode(S), S === 13 && e.charCodeAt(n) === 10 && (n++, s += `
`), a = 14;
        switch(S){
            case 123:
                return n++, a = 1;
            case 125:
                return n++, a = 2;
            case 91:
                return n++, a = 3;
            case 93:
                return n++, a = 4;
            case 58:
                return n++, a = 6;
            case 44:
                return n++, a = 5;
            case 34:
                return n++, s = m(), a = 10;
            case 47:
                {
                    const k = n - 1;
                    if (e.charCodeAt(n + 1) === 47) {
                        for(n += 2; n < r && !Ev(e.charCodeAt(n));)n++;
                        return s = e.substring(k, n), a = 12;
                    }
                    if (e.charCodeAt(n + 1) === 42) {
                        n += 2;
                        const y = r - 1;
                        let b = !1;
                        for(; n < y;){
                            if (e.charCodeAt(n) === 42 && e.charCodeAt(n + 1) === 47) {
                                n += 2, b = !0;
                                break;
                            }
                            n++;
                        }
                        return b || (n++, o = 1), s = e.substring(k, n), a = 13;
                    }
                    return s += String.fromCharCode(S), n++, a = 16;
                }
            case 45:
                if (s += String.fromCharCode(S), n++, n === r || !El(e.charCodeAt(n))) return a = 16;
            case 48:
            case 49:
            case 50:
            case 51:
            case 52:
            case 53:
            case 54:
            case 55:
            case 56:
            case 57:
                return s += u(), a = 11;
            default:
                for(; n < r && v(S);)n++, S = e.charCodeAt(n);
                if (i !== n) {
                    switch(s = e.substring(i, n), s){
                        case "true":
                            return a = 8;
                        case "false":
                            return a = 9;
                        case "null":
                            return a = 7;
                    }
                    return a = 16;
                }
                return s += String.fromCharCode(S), n++, a = 16;
        }
    }
    function v(S) {
        if (Lb(S) || Ev(S)) return !1;
        switch(S){
            case 125:
            case 93:
            case 123:
            case 91:
            case 34:
            case 58:
            case 44:
            case 47:
                return !1;
        }
        return !0;
    }
    function T() {
        let S;
        do S = f();
        while (S >= 12 && S <= 15)
        return S;
    }
    return {
        setPosition: d,
        getPosition: ()=>n,
        scan: t ? T : f,
        getToken: ()=>a,
        getTokenValue: ()=>s,
        getTokenOffset: ()=>i,
        getTokenLength: ()=>n - i,
        getTokenError: ()=>o
    };
}
function Lb(e) {
    return e === 32 || e === 9 || e === 11 || e === 12 || e === 160 || e === 5760 || e >= 8192 && e <= 8203 || e === 8239 || e === 8287 || e === 12288 || e === 65279;
}
function Ev(e) {
    return e === 10 || e === 13 || e === 8232 || e === 8233;
}
function El(e) {
    return e >= 48 && e <= 57;
}
function bv(e, t, n = _m.DEFAULT) {
    const r = Wx(e, !1);
    function s(H) {
        return H ? ()=>H(r.getTokenOffset(), r.getTokenLength()) : ()=>!0;
    }
    function i(H) {
        return H ? (ue)=>H(ue, r.getTokenOffset(), r.getTokenLength()) : ()=>!0;
    }
    const a = s(t.onObjectBegin), o = i(t.onObjectProperty), l = s(t.onObjectEnd), d = s(t.onArrayBegin), u = s(t.onArrayEnd), m = i(t.onLiteralValue), f = i(t.onSeparator), v = s(t.onComment), T = i(t.onError), S = n && n.disallowComments, k = n && n.allowTrailingComma;
    function y() {
        for(;;){
            const H = r.scan();
            switch(r.getTokenError()){
                case 4:
                    b(14);
                    break;
                case 5:
                    b(15);
                    break;
                case 3:
                    b(13);
                    break;
                case 1:
                    S || b(11);
                    break;
                case 2:
                    b(12);
                    break;
                case 6:
                    b(16);
                    break;
            }
            switch(H){
                case 12:
                case 13:
                    S ? b(10) : v();
                    break;
                case 16:
                    b(1);
                    break;
                case 15:
                case 14:
                    break;
                default:
                    return H;
            }
        }
    }
    function b(H, ue = [], Ee = []) {
        if (T(H), ue.length + Ee.length > 0) {
            let me = r.getToken();
            for(; me !== 17;){
                if (ue.indexOf(me) !== -1) {
                    y();
                    break;
                } else if (Ee.indexOf(me) !== -1) break;
                me = y();
            }
        }
    }
    function I(H) {
        const ue = r.getTokenValue();
        return H ? m(ue) : o(ue), y(), !0;
    }
    function G() {
        switch(r.getToken()){
            case 11:
                {
                    let H = 0;
                    try {
                        H = JSON.parse(r.getTokenValue()), typeof H != "number" && (b(2), H = 0);
                    } catch  {
                        b(2);
                    }
                    m(H);
                    break;
                }
            case 7:
                m(null);
                break;
            case 8:
                m(!0);
                break;
            case 9:
                m(!1);
                break;
            default:
                return !1;
        }
        return y(), !0;
    }
    function U() {
        return r.getToken() !== 10 ? (b(3, [], [
            2,
            5
        ]), !1) : (I(!1), r.getToken() === 6 ? (f(":"), y(), K() || b(4, [], [
            2,
            5
        ])) : b(5, [], [
            2,
            5
        ]), !0);
    }
    function X() {
        a(), y();
        let H = !1;
        for(; r.getToken() !== 2 && r.getToken() !== 17;){
            if (r.getToken() === 5) {
                if (H || b(4, [], []), f(","), y(), r.getToken() === 2 && k) break;
            } else H && b(6, [], []);
            U() || b(4, [], [
                2,
                5
            ]), H = !0;
        }
        return l(), r.getToken() !== 2 ? b(7, [
            2
        ], []) : y(), !0;
    }
    function W() {
        d(), y();
        let H = !1;
        for(; r.getToken() !== 4 && r.getToken() !== 17;){
            if (r.getToken() === 5) {
                if (H || b(4, [], []), f(","), y(), r.getToken() === 4 && k) break;
            } else H && b(6, [], []);
            K() || b(4, [], [
                4,
                5
            ]), H = !0;
        }
        return u(), r.getToken() !== 4 ? b(8, [
            4
        ], []) : y(), !0;
    }
    function K() {
        switch(r.getToken()){
            case 3:
                return W();
            case 1:
                return X();
            case 10:
                return I(!0);
            default:
                return G();
        }
    }
    return y(), r.getToken() === 17 ? n.allowEmptyContent ? !0 : (b(4, [], []), !1) : K() ? (r.getToken() !== 17 && b(9, [], []), !0) : (b(4, [], []), !1);
}
function Rm(e, t, n = (r, s)=>r === s) {
    if (e === t) return !0;
    if (!e || !t || e.length !== t.length) return !1;
    for(let r = 0, s = e.length; r < s; r++)if (!n(e[r], t[r])) return !1;
    return !0;
}
function fUe(e) {
    const t = Object.getPrototypeOf(Uint8Array);
    return typeof e == "object" && e instanceof t;
}
function OR(e, t) {
    const n = Object.create(null);
    for(const r in e)q5(n, r, e[r], t);
    return n;
}
function q5(e, t, n, r) {
    const s = t.split("."), i = s.pop();
    let a = e;
    for(let o = 0; o < s.length; o++){
        const l = s[o];
        let d = a[l];
        switch(typeof d){
            case "undefined":
                d = a[l] = Object.create(null);
                break;
            case "object":
                if (d === null) {
                    r(`Ignoring ${t} as ${s.slice(0, o + 1).join(".")} is null`);
                    return;
                }
                break;
            default:
                r(`Ignoring ${t} as ${s.slice(0, o + 1).join(".")} is ${JSON.stringify(d)}`);
                return;
        }
        a = d;
    }
    if (typeof a == "object" && a !== null) try {
        a[i] = n;
    } catch  {
        r(`Ignoring ${t} as ${s.join(".")} is ${JSON.stringify(a)}`);
    }
    else r(`Ignoring ${t} as ${s.join(".")} is ${JSON.stringify(a)}`);
}
function pxe(e, t) {
    const n = t.split(".");
    K5(e, n);
}
function K5(e, t) {
    if (!e) return;
    const n = t.shift();
    if (t.length === 0) {
        delete e[n];
        return;
    }
    if (Object.keys(e).indexOf(n) !== -1) {
        const r = e[n];
        typeof r == "object" && !Array.isArray(r) && (K5(r, t), Object.keys(r).length === 0 && delete e[n]);
    }
}
function Xv(e, t, n) {
    function r(a, o) {
        let l = a;
        for (const d of o){
            if (typeof l != "object" || l === null) return;
            l = l[d];
        }
        return l;
    }
    const s = t.split("."), i = r(e, s);
    return typeof i > "u" ? n : i;
}
function Q5(e) {
    return e.startsWith(FR);
}
function Txe(e) {
    return Q5(e) ? e.substring(FR.length) : null;
}
function uWe(e) {
    if (!e || typeof e != "object") return e;
    const t = [
        e
    ];
    for(; t.length > 0;){
        const n = t.shift();
        Object.freeze(n);
        for(const r in n)if (UI.call(n, r)) {
            const s = n[r];
            typeof s == "object" && !Object.isFrozen(s) && !fUe(s) && t.push(s);
        }
    }
    return e;
}
function TVe(e, t, n) {
    return !e || typeof t != "string" ? !1 : typeof n == "function" ? tM(e)(t, void 0, n) : tM(e, n)(t);
}
function Jf(e) {
    return Object.isFrozen(e) ? e : uWe(e);
}
function Go(e, t) {
    const { added: n, removed: r, updated: s } = O2e(t?.rawConfiguration, e?.rawConfiguration), i = [], a = e?.getAllOverrideIdentifiers() || [], o = t?.getAllOverrideIdentifiers() || [];
    if (t) {
        const l = o.filter((d)=>!a.includes(d));
        for (const d of l)i.push([
            d,
            t.getKeysForOverrideIdentifier(d)
        ]);
    }
    if (e) {
        const l = a.filter((d)=>!o.includes(d));
        for (const d of l)i.push([
            d,
            e.getKeysForOverrideIdentifier(d)
        ]);
    }
    if (t && e) {
        for (const l of a)if (o.includes(l)) {
            const d = O2e({
                contents: e.getOverrideValue(void 0, l) || {},
                keys: e.getKeysForOverrideIdentifier(l)
            }, {
                contents: t.getOverrideValue(void 0, l) || {},
                keys: t.getKeysForOverrideIdentifier(l)
            });
            i.push([
                l,
                [
                    ...d.added,
                    ...d.removed,
                    ...d.updated
                ]
            ]);
        }
    }
    return {
        added: n,
        removed: r,
        updated: s,
        overrides: i
    };
}
function O2e(e, t) {
    const n = e ? t ? e.keys.filter((i)=>t.keys.indexOf(i) === -1) : [
        ...e.keys
    ] : [], r = t ? e ? t.keys.filter((i)=>e.keys.indexOf(i) === -1) : [
        ...t.keys
    ] : [], s = [];
    if (e && t) {
        for (const i of t.keys)if (e.keys.indexOf(i) !== -1) {
            const a = Xv(t.contents, i), o = Xv(e.contents, i);
            Bs(a, o) || s.push(i);
        }
    }
    return {
        added: n,
        removed: r,
        updated: s
    };
}
var Sn, jU, L2e, U2e, lb, x2e;
export { El, Ev, Go, Jf, K5, L2e, Lb, O2e, OR, Q5, Rm, Sn, TVe, Txe, U2e, Wx, Xv, bv, fUe, jU, lb, pxe, q5, uWe, x2e };
var __wakaru_F2e_initialized = false;
export function F2e() {
if (__wakaru_F2e_initialized) return;
__wakaru_F2e_initialized = true;
"use strict";
h(), Vn(), se(), Ys(), j(), mr(), ns(), Ze(), ye(), at(), ua(), ri(), iM(), Sn = class yl {
    constructor(t, n, r, s, i){
        this._contents = t, this._keys = n, this._overrides = r, this.raw = s, this.logService = i, this.overrideConfigurations = new Map;
    }
    static createEmptyModel(t) {
        return new yl({}, [], [], void 0, t);
    }
    get rawConfiguration() {
        if (!this._rawConfiguration) if (this.raw) {
            const t = (Array.isArray(this.raw) ? this.raw : [
                this.raw
            ]).map((n)=>{
                if (n instanceof yl) return n;
                const r = new jU("", this.logService);
                return r.parseRaw(n), r.configurationModel;
            });
            this._rawConfiguration = t.reduce((n, r)=>r === n ? r : n.merge(r), t[0]);
        } else this._rawConfiguration = this;
        return this._rawConfiguration;
    }
    get contents() {
        return this._contents;
    }
    get overrides() {
        return this._overrides;
    }
    get keys() {
        return this._keys;
    }
    isEmpty() {
        return this._keys.length === 0 && Object.keys(this._contents).length === 0 && this._overrides.length === 0;
    }
    getValue(t) {
        return t ? Xv(this.contents, t) : this.contents;
    }
    inspect(t, n) {
        const r = this;
        return {
            get value () {
                return Jf(r.rawConfiguration.getValue(t));
            },
            get override () {
                return n ? Jf(r.rawConfiguration.getOverrideValue(t, n)) : void 0;
            },
            get merged () {
                return Jf(n ? r.rawConfiguration.override(n).getValue(t) : r.rawConfiguration.getValue(t));
            },
            get overrides () {
                const s = [];
                for (const { contents: i, identifiers: a, keys: o } of r.rawConfiguration.overrides){
                    const l = new yl(i, o, [], void 0, r.logService).getValue(t);
                    l !== void 0 && s.push({
                        identifiers: a,
                        value: l
                    });
                }
                return s.length ? Jf(s) : void 0;
            }
        };
    }
    getOverrideValue(t, n) {
        const r = this.getContentsForOverrideIdentifer(n);
        return r ? t ? Xv(r, t) : r : void 0;
    }
    getKeysForOverrideIdentifier(t) {
        const n = [];
        for (const r of this.overrides)r.identifiers.includes(t) && n.push(...r.keys);
        return Zs(n);
    }
    getAllOverrideIdentifiers() {
        const t = [];
        for (const n of this.overrides)t.push(...n.identifiers);
        return Zs(t);
    }
    override(t) {
        let n = this.overrideConfigurations.get(t);
        return n || (n = this.createOverrideConfigurationModel(t), this.overrideConfigurations.set(t, n)), n;
    }
    overrideWithGlobs(t, n) {
        const r = this.getAllOverrideIdentifiers().filter(Q5);
        if (r.length === 0) return this;
        let s;
        if (n) {
            const o = n.folders.find((l)=>t.toString().startsWith(l.uri.toString()));
            o ? (s = t.path.substring(o.uri.path.length), s.startsWith("/") && (s = s.substring(1))) : s = t.path;
        } else s = t.path;
        const i = [];
        for (const o of r){
            const l = Txe(o);
            l && TVe(l, s) && i.push(o);
        }
        if (i.length === 0) return this;
        let a = this;
        for (const o of i)a = a.override(o);
        return a;
    }
    merge(...t) {
        const n = Ws(this.contents), r = Ws(this.overrides), s = [
            ...this.keys
        ], i = this.raw ? Array.isArray(this.raw) ? [
            ...this.raw
        ] : [
            this.raw
        ] : [
            this
        ];
        for (const a of t)if (i.push(...a.raw ? Array.isArray(a.raw) ? a.raw : [
            a.raw
        ] : [
            a
        ]), !a.isEmpty()) {
            this.mergeContents(n, a.contents);
            for (const o of a.overrides){
                const [l] = r.filter((d)=>Rm(d.identifiers, o.identifiers));
                l ? (this.mergeContents(l.contents, o.contents), l.keys.push(...o.keys), l.keys = Zs(l.keys)) : r.push(Ws(o));
            }
            for (const o of a.keys)s.indexOf(o) === -1 && s.push(o);
        }
        return new yl(n, s, r, !i.length || i.every((a)=>a instanceof yl) ? void 0 : i, this.logService);
    }
    createOverrideConfigurationModel(t) {
        const n = this.getContentsForOverrideIdentifer(t);
        if (!n || typeof n != "object" || !Object.keys(n).length) return this;
        const r = {};
        for (const s of Zs([
            ...Object.keys(this.contents),
            ...Object.keys(n)
        ])){
            let i = this.contents[s];
            const a = n[s];
            a && (typeof i == "object" && typeof a == "object" ? (i = Ws(i), this.mergeContents(i, a)) : i = a), r[s] = i;
        }
        return new yl(r, this.keys, this.overrides, void 0, this.logService);
    }
    mergeContents(t, n) {
        for (const r of Object.keys(n)){
            if (r in t && Un(t[r]) && Un(n[r])) {
                this.mergeContents(t[r], n[r]);
                continue;
            }
            t[r] = Ws(n[r]);
        }
    }
    getContentsForOverrideIdentifer(t) {
        let n = null, r = null;
        const s = (i)=>{
            i && (r ? this.mergeContents(r, i) : r = Ws(i));
        };
        for (const i of this.overrides)i.identifiers.length === 1 && i.identifiers[0] === t ? n = i.contents : i.identifiers.includes(t) && s(i.contents);
        return s(n), r;
    }
    toJSON() {
        return {
            contents: this.contents,
            overrides: this.overrides,
            keys: this.keys
        };
    }
    addValue(t, n) {
        this.updateValue(t, n, !0);
    }
    setValue(t, n) {
        this.updateValue(t, n, !1);
    }
    removeValue(t) {
        const n = this.keys.indexOf(t);
        n !== -1 && (this.keys.splice(n, 1), pxe(this.contents, t), Ai.test(t) && this.overrides.splice(this.overrides.findIndex((r)=>Rm(r.identifiers, Bm(t))), 1));
    }
    updateValue(t, n, r) {
        if (q5(this.contents, t, n, (s)=>this.logService.error(s)), r = r || this.keys.indexOf(t) === -1, r && this.keys.push(t), Ai.test(t)) {
            const s = Bm(t), i = {
                identifiers: s,
                keys: Object.keys(this.contents[t]),
                contents: OR(this.contents[t], (o)=>this.logService.error(o))
            }, a = this.overrides.findIndex((o)=>Rm(o.identifiers, s));
            a !== -1 ? this.overrides[a] = i : this.overrides.push(i);
        }
    }
}, jU = class {
    constructor(e, t){
        this._name = e, this.logService = t, this._raw = null, this._configurationModel = null, this._restrictedConfigurations = [], this._parseErrors = [];
    }
    get configurationModel() {
        return this._configurationModel || Sn.createEmptyModel(this.logService);
    }
    get restrictedConfigurations() {
        return this._restrictedConfigurations;
    }
    get errors() {
        return this._parseErrors;
    }
    parse(e, t) {
        if (!Sr(e)) {
            const n = this.doParseContent(e);
            this.parseRaw(n, t);
        }
    }
    reparse(e) {
        this._raw && this.parseRaw(this._raw, e);
    }
    parseRaw(e, t) {
        this._raw = e;
        const { contents: n, keys: r, overrides: s, restricted: i, hasExcludedProperties: a } = this.doParseRaw(e, t);
        this._configurationModel = new Sn(n, r, s, a ? [
            e
        ] : void 0, this.logService), this._restrictedConfigurations = i || [];
    }
    doParseContent(e) {
        let t = {}, n = null, r = [];
        const s = [], i = [];
        function a(l) {
            Array.isArray(r) ? r.push(l) : n !== null && (r[n] = l);
        }
        const o = {
            onObjectBegin: ()=>{
                const l = {};
                a(l), s.push(r), r = l, n = null;
            },
            onObjectProperty: (l)=>{
                n = l;
            },
            onObjectEnd: ()=>{
                r = s.pop();
            },
            onArrayBegin: ()=>{
                const l = [];
                a(l), s.push(r), r = l, n = null;
            },
            onArrayEnd: ()=>{
                r = s.pop();
            },
            onLiteralValue: a,
            onError: (l, d, u)=>{
                i.push({
                    error: l,
                    offset: d,
                    length: u
                });
            }
        };
        if (e) try {
            bv(e, o), t = r[0] || {};
        } catch (l) {
            this.logService.error(`Error while parsing settings file ${this._name}: ${l}`), this._parseErrors = [
                l
            ];
        }
        return t;
    }
    doParseRaw(e, t) {
        const n = pr.as(Jr.Configuration).getConfigurationProperties(), r = this.filter(e, n, !0, t);
        e = r.raw;
        const s = OR(e, (o)=>this.logService.error(`Conflict in settings file ${this._name}: ${o}`)), i = Object.keys(e), a = this.toOverrides(e, (o)=>this.logService.error(`Conflict in settings file ${this._name}: ${o}`));
        return {
            contents: s,
            keys: i,
            overrides: a,
            restricted: r.restricted,
            hasExcludedProperties: r.hasExcludedProperties
        };
    }
    filter(e, t, n, r) {
        let s = !1;
        if (!r?.scopes && !r?.skipRestricted && !r?.exclude?.length) return {
            raw: e,
            restricted: [],
            hasExcludedProperties: s
        };
        const i = {}, a = [];
        for(const o in e)if (Ai.test(o) && n) {
            const l = this.filter(e[o], t, !1, r);
            i[o] = l.raw, s = s || l.hasExcludedProperties, a.push(...l.restricted);
        } else {
            const l = this.filterProperty(o, e[o], t, r);
            a.push(...l.restricted), s = s || l.hasExcludedProperties, l.included ? i[o] = l.value : s = !0;
        }
        return {
            raw: i,
            restricted: a,
            hasExcludedProperties: s
        };
    }
    filterProperty(e, t, n, r) {
        const s = n[e];
        if (s) return {
            included: this.shouldInclude(e, s, r),
            value: t,
            restricted: s.restricted ? [
                e
            ] : [],
            hasExcludedProperties: !1
        };
        if (!Un(t) || Array.isArray(t)) return {
            included: this.shouldInclude(e, s, r),
            value: t,
            restricted: [],
            hasExcludedProperties: !1
        };
        if (r.exclude?.includes(e)) return {
            included: !1,
            value: t,
            restricted: [],
            hasExcludedProperties: !1
        };
        const i = Object.keys(t);
        if (i.length === 0) return {
            included: this.shouldInclude(e, s, r),
            value: t,
            restricted: [],
            hasExcludedProperties: !1
        };
        const a = {}, o = [];
        let l = !1, d = !1;
        for (const u of i){
            const m = this.filterProperty(`${e}.${u}`, t[u], n, r);
            m.restricted.length && o.push(...m.restricted), d = d || m.hasExcludedProperties, m.included ? (a[u] = m.value, l = !0) : d = !0;
        }
        return {
            included: l,
            value: a,
            restricted: o,
            hasExcludedProperties: d
        };
    }
    shouldInclude(e, t, n) {
        if (n.exclude?.includes(e)) return !1;
        if (n.include?.includes(e)) return !0;
        if (n.skipRestricted && t?.restricted || n.skipUnregistered && !t) return !1;
        const r = t ? typeof t.scope < "u" ? t.scope : 4 : void 0;
        return r === void 0 || n.scopes === void 0 ? !0 : n.scopes.includes(r);
    }
    toOverrides(e, t) {
        const n = [];
        for (const r of Object.keys(e))if (Ai.test(r)) {
            const s = {};
            for(const i in e[r])s[i] = e[r][i];
            n.push({
                identifiers: Bm(r),
                keys: Object.keys(s),
                contents: OR(s, t)
            });
        }
        return n;
    }
}, L2e = class extends J {
    constructor(e, t, n, r, s){
        super(), this.userSettingsResource = e, this.parseOptions = t, this.fileService = r, this.logService = s, this._onDidChange = this._register(new N), this.onDidChange = this._onDidChange.event, this.parser = new jU(this.userSettingsResource.toString(), s), this._register(this.fileService.watch(n.dirname(this.userSettingsResource))), this._register(this.fileService.watch(this.userSettingsResource)), this._register(O.any(O.filter(this.fileService.onDidFilesChange, (i)=>i.contains(this.userSettingsResource)), O.filter(this.fileService.onDidRunOperation, (i)=>(i.isOperation(0) || i.isOperation(3) || i.isOperation(1) || i.isOperation(4)) && n.isEqual(i.resource, e)))(()=>this._onDidChange.fire()));
    }
    async loadConfiguration() {
        try {
            const e = await this.fileService.readFile(this.userSettingsResource);
            return this.parser.parse(e.value.toString() || "{}", this.parseOptions), this.parser.configurationModel;
        } catch  {
            return Sn.createEmptyModel(this.logService);
        }
    }
    reparse(e) {
        return e && (this.parseOptions = e), this.parser.reparse(this.parseOptions), this.parser.configurationModel;
    }
    getRestrictedSettings() {
        return this.parser.restrictedConfigurations;
    }
}, U2e = class {
    constructor(e, t, n, r, s, i, a, o, l, d, u, m, f){
        this.key = e, this.overrides = t, this._value = n, this.overrideIdentifiers = r, this.defaultConfiguration = s, this.policyConfiguration = i, this.applicationConfiguration = a, this.userConfiguration = o, this.localUserConfiguration = l, this.remoteUserConfiguration = d, this.workspaceConfiguration = u, this.folderConfigurationModel = m, this.memoryConfigurationModel = f;
    }
    get value() {
        return Jf(this._value);
    }
    toInspectValue(e) {
        return e?.value !== void 0 || e?.override !== void 0 || e?.overrides !== void 0 ? e : void 0;
    }
    get defaultInspectValue() {
        return this._defaultInspectValue || (this._defaultInspectValue = this.defaultConfiguration.inspect(this.key, this.overrides.overrideIdentifier)), this._defaultInspectValue;
    }
    get defaultValue() {
        return this.defaultInspectValue.merged;
    }
    get default() {
        return this.toInspectValue(this.defaultInspectValue);
    }
    get policyInspectValue() {
        return this._policyInspectValue === void 0 && (this._policyInspectValue = this.policyConfiguration ? this.policyConfiguration.inspect(this.key) : null), this._policyInspectValue;
    }
    get policyValue() {
        return this.policyInspectValue?.merged;
    }
    get policy() {
        return this.policyInspectValue?.value !== void 0 ? {
            value: this.policyInspectValue.value
        } : void 0;
    }
    get applicationInspectValue() {
        return this._applicationInspectValue === void 0 && (this._applicationInspectValue = this.applicationConfiguration ? this.applicationConfiguration.inspect(this.key) : null), this._applicationInspectValue;
    }
    get applicationValue() {
        return this.applicationInspectValue?.merged;
    }
    get application() {
        return this.toInspectValue(this.applicationInspectValue);
    }
    get userInspectValue() {
        return this._userInspectValue || (this._userInspectValue = this.userConfiguration.inspect(this.key, this.overrides.overrideIdentifier)), this._userInspectValue;
    }
    get userValue() {
        return this.userInspectValue.merged;
    }
    get user() {
        return this.toInspectValue(this.userInspectValue);
    }
    get userLocalInspectValue() {
        return this._userLocalInspectValue || (this._userLocalInspectValue = this.localUserConfiguration.inspect(this.key, this.overrides.overrideIdentifier)), this._userLocalInspectValue;
    }
    get userLocalValue() {
        return this.userLocalInspectValue.merged;
    }
    get userLocal() {
        return this.toInspectValue(this.userLocalInspectValue);
    }
    get userRemoteInspectValue() {
        return this._userRemoteInspectValue || (this._userRemoteInspectValue = this.remoteUserConfiguration.inspect(this.key, this.overrides.overrideIdentifier)), this._userRemoteInspectValue;
    }
    get userRemoteValue() {
        return this.userRemoteInspectValue.merged;
    }
    get userRemote() {
        return this.toInspectValue(this.userRemoteInspectValue);
    }
    get workspaceInspectValue() {
        return this._workspaceInspectValue === void 0 && (this._workspaceInspectValue = this.workspaceConfiguration ? this.workspaceConfiguration.inspect(this.key, this.overrides.overrideIdentifier) : null), this._workspaceInspectValue;
    }
    get workspaceValue() {
        return this.workspaceInspectValue?.merged;
    }
    get workspace() {
        return this.toInspectValue(this.workspaceInspectValue);
    }
    get workspaceFolderInspectValue() {
        return this._workspaceFolderInspectValue === void 0 && (this._workspaceFolderInspectValue = this.folderConfigurationModel ? this.folderConfigurationModel.inspect(this.key, this.overrides.overrideIdentifier) : null), this._workspaceFolderInspectValue;
    }
    get workspaceFolderValue() {
        return this.workspaceFolderInspectValue?.merged;
    }
    get workspaceFolder() {
        return this.toInspectValue(this.workspaceFolderInspectValue);
    }
    get memoryInspectValue() {
        return this._memoryInspectValue === void 0 && (this._memoryInspectValue = this.memoryConfigurationModel.inspect(this.key, this.overrides.overrideIdentifier)), this._memoryInspectValue;
    }
    get memoryValue() {
        return this.memoryInspectValue.merged;
    }
    get memory() {
        return this.toInspectValue(this.memoryInspectValue);
    }
}, lb = class ELe {
    constructor(t, n, r, s, i, a, o, l, d, u){
        this._defaultConfiguration = t, this._policyConfiguration = n, this._applicationConfiguration = r, this._localUserConfiguration = s, this._remoteUserConfiguration = i, this._workspaceConfiguration = a, this._folderConfigurations = o, this._memoryConfiguration = l, this._memoryConfigurationByResource = d, this.logService = u, this._workspaceConsolidatedConfiguration = null, this._foldersConsolidatedConfigurations = new Yn, this._userConfiguration = null;
    }
    getValue(t, n, r) {
        return this.getConsolidatedConfigurationModel(t, n, r).getValue(t);
    }
    updateValue(t, n, r = {}) {
        let s;
        r.resource ? (s = this._memoryConfigurationByResource.get(r.resource), s || (s = Sn.createEmptyModel(this.logService), this._memoryConfigurationByResource.set(r.resource, s))) : s = this._memoryConfiguration, n === void 0 ? s.removeValue(t) : s.setValue(t, n), r.resource || (this._workspaceConsolidatedConfiguration = null);
    }
    inspect(t, n, r) {
        const s = this.getConsolidatedConfigurationModel(t, n, r), i = this.getFolderConfigurationModelForResource(n.resource, r), a = n.resource ? this._memoryConfigurationByResource.get(n.resource) || this._memoryConfiguration : this._memoryConfiguration, o = new Set;
        for (const l of s.overrides)for (const d of l.identifiers)s.getOverrideValue(t, d) !== void 0 && o.add(d);
        return new U2e(t, n, s.getValue(t), o.size ? [
            ...o
        ] : void 0, this._defaultConfiguration, this._policyConfiguration.isEmpty() ? void 0 : this._policyConfiguration, this.applicationConfiguration.isEmpty() ? void 0 : this.applicationConfiguration, this.userConfiguration, this.localUserConfiguration, this.remoteUserConfiguration, r ? this._workspaceConfiguration : void 0, i || void 0, a);
    }
    keys(t) {
        const n = this.getFolderConfigurationModelForResource(void 0, t);
        return {
            default: this._defaultConfiguration.keys.slice(0),
            user: this.userConfiguration.keys.slice(0),
            workspace: this._workspaceConfiguration.keys.slice(0),
            workspaceFolder: n ? n.keys.slice(0) : []
        };
    }
    updateDefaultConfiguration(t) {
        this._defaultConfiguration = t, this._workspaceConsolidatedConfiguration = null, this._foldersConsolidatedConfigurations.clear();
    }
    updatePolicyConfiguration(t) {
        this._policyConfiguration = t;
    }
    updateApplicationConfiguration(t) {
        this._applicationConfiguration = t, this._workspaceConsolidatedConfiguration = null, this._foldersConsolidatedConfigurations.clear();
    }
    updateLocalUserConfiguration(t) {
        this._localUserConfiguration = t, this._userConfiguration = null, this._workspaceConsolidatedConfiguration = null, this._foldersConsolidatedConfigurations.clear();
    }
    updateRemoteUserConfiguration(t) {
        this._remoteUserConfiguration = t, this._userConfiguration = null, this._workspaceConsolidatedConfiguration = null, this._foldersConsolidatedConfigurations.clear();
    }
    updateWorkspaceConfiguration(t) {
        this._workspaceConfiguration = t, this._workspaceConsolidatedConfiguration = null, this._foldersConsolidatedConfigurations.clear();
    }
    updateFolderConfiguration(t, n) {
        this._folderConfigurations.set(t, n), this._foldersConsolidatedConfigurations.delete(t);
    }
    deleteFolderConfiguration(t) {
        this.folderConfigurations.delete(t), this._foldersConsolidatedConfigurations.delete(t);
    }
    compareAndUpdateDefaultConfiguration(t, n) {
        const r = [];
        if (!n) {
            const { added: s, updated: i, removed: a } = Go(this._defaultConfiguration, t);
            n = [
                ...s,
                ...i,
                ...a
            ];
        }
        for (const s of n)for (const i of Bm(s)){
            const a = this._defaultConfiguration.getKeysForOverrideIdentifier(i), o = t.getKeysForOverrideIdentifier(i), l = [
                ...o.filter((d)=>a.indexOf(d) === -1),
                ...a.filter((d)=>o.indexOf(d) === -1),
                ...a.filter((d)=>!Bs(this._defaultConfiguration.override(i).getValue(d), t.override(i).getValue(d)))
            ];
            r.push([
                i,
                l
            ]);
        }
        return this.updateDefaultConfiguration(t), {
            keys: n,
            overrides: r
        };
    }
    compareAndUpdatePolicyConfiguration(t) {
        const { added: n, updated: r, removed: s } = Go(this._policyConfiguration, t), i = [
            ...n,
            ...r,
            ...s
        ];
        return i.length && this.updatePolicyConfiguration(t), {
            keys: i,
            overrides: []
        };
    }
    compareAndUpdateApplicationConfiguration(t) {
        const { added: n, updated: r, removed: s, overrides: i } = Go(this.applicationConfiguration, t), a = [
            ...n,
            ...r,
            ...s
        ];
        return a.length && this.updateApplicationConfiguration(t), {
            keys: a,
            overrides: i
        };
    }
    compareAndUpdateLocalUserConfiguration(t) {
        const { added: n, updated: r, removed: s, overrides: i } = Go(this.localUserConfiguration, t), a = [
            ...n,
            ...r,
            ...s
        ];
        return a.length && this.updateLocalUserConfiguration(t), {
            keys: a,
            overrides: i
        };
    }
    compareAndUpdateRemoteUserConfiguration(t) {
        const { added: n, updated: r, removed: s, overrides: i } = Go(this.remoteUserConfiguration, t), a = [
            ...n,
            ...r,
            ...s
        ];
        return a.length && this.updateRemoteUserConfiguration(t), {
            keys: a,
            overrides: i
        };
    }
    compareAndUpdateWorkspaceConfiguration(t) {
        const { added: n, updated: r, removed: s, overrides: i } = Go(this.workspaceConfiguration, t), a = [
            ...n,
            ...r,
            ...s
        ];
        return a.length && this.updateWorkspaceConfiguration(t), {
            keys: a,
            overrides: i
        };
    }
    compareAndUpdateFolderConfiguration(t, n) {
        const r = this.folderConfigurations.get(t), { added: s, updated: i, removed: a, overrides: o } = Go(r, n), l = [
            ...s,
            ...i,
            ...a
        ];
        return (l.length || !r) && this.updateFolderConfiguration(t, n), {
            keys: l,
            overrides: o
        };
    }
    compareAndDeleteFolderConfiguration(t) {
        const n = this.folderConfigurations.get(t);
        if (!n) throw new Error("Unknown folder");
        this.deleteFolderConfiguration(t);
        const { added: r, updated: s, removed: i, overrides: a } = Go(n, void 0);
        return {
            keys: [
                ...r,
                ...s,
                ...i
            ],
            overrides: a
        };
    }
    get defaults() {
        return this._defaultConfiguration;
    }
    get applicationConfiguration() {
        return this._applicationConfiguration;
    }
    get userConfiguration() {
        if (!this._userConfiguration) if (this._remoteUserConfiguration.isEmpty()) this._userConfiguration = this._localUserConfiguration;
        else {
            const t = this._localUserConfiguration.merge(this._remoteUserConfiguration);
            this._userConfiguration = new Sn(t.contents, t.keys, t.overrides, void 0, this.logService);
        }
        return this._userConfiguration;
    }
    get localUserConfiguration() {
        return this._localUserConfiguration;
    }
    get remoteUserConfiguration() {
        return this._remoteUserConfiguration;
    }
    get workspaceConfiguration() {
        return this._workspaceConfiguration;
    }
    get folderConfigurations() {
        return this._folderConfigurations;
    }
    getConsolidatedConfigurationModel(t, n, r) {
        let s = this.getConsolidatedConfigurationModelForResource(n, r);
        if (n.overrideIdentifier && (s = s.override(n.overrideIdentifier)), n.resource && (s = s.overrideWithGlobs(n.resource, r)), !this._policyConfiguration.isEmpty() && this._policyConfiguration.getValue(t) !== void 0) {
            s = s.merge();
            for (const i of this._policyConfiguration.keys)s.setValue(i, this._policyConfiguration.getValue(i));
        }
        return s;
    }
    getConsolidatedConfigurationModelForResource({ resource: t }, n) {
        let r = this.getWorkspaceConsolidatedConfiguration();
        if (n && t) {
            const s = n.getFolder(t);
            s && (r = this.getFolderConsolidatedConfiguration(s.uri) || r);
            const i = this._memoryConfigurationByResource.get(t);
            i && (r = r.merge(i));
        }
        return r;
    }
    getWorkspaceConsolidatedConfiguration() {
        return this._workspaceConsolidatedConfiguration || (this._workspaceConsolidatedConfiguration = this._defaultConfiguration.merge(this.applicationConfiguration, this.userConfiguration, this._workspaceConfiguration, this._memoryConfiguration)), this._workspaceConsolidatedConfiguration;
    }
    getFolderConsolidatedConfiguration(t) {
        let n = this._foldersConsolidatedConfigurations.get(t);
        if (!n) {
            const r = this.getWorkspaceConsolidatedConfiguration(), s = this._folderConfigurations.get(t);
            s ? (n = r.merge(s), this._foldersConsolidatedConfigurations.set(t, n)) : n = r;
        }
        return n;
    }
    getFolderConfigurationModelForResource(t, n) {
        if (n && t) {
            const r = n.getFolder(t);
            if (r) return this._folderConfigurations.get(r.uri);
        }
    }
    toData() {
        return {
            defaults: {
                contents: this._defaultConfiguration.contents,
                overrides: this._defaultConfiguration.overrides,
                keys: this._defaultConfiguration.keys
            },
            policy: {
                contents: this._policyConfiguration.contents,
                overrides: this._policyConfiguration.overrides,
                keys: this._policyConfiguration.keys
            },
            application: {
                contents: this.applicationConfiguration.contents,
                overrides: this.applicationConfiguration.overrides,
                keys: this.applicationConfiguration.keys,
                raw: Array.isArray(this.applicationConfiguration.raw) ? void 0 : this.applicationConfiguration.raw
            },
            userLocal: {
                contents: this.localUserConfiguration.contents,
                overrides: this.localUserConfiguration.overrides,
                keys: this.localUserConfiguration.keys,
                raw: Array.isArray(this.localUserConfiguration.raw) ? void 0 : this.localUserConfiguration.raw
            },
            userRemote: {
                contents: this.remoteUserConfiguration.contents,
                overrides: this.remoteUserConfiguration.overrides,
                keys: this.remoteUserConfiguration.keys,
                raw: Array.isArray(this.remoteUserConfiguration.raw) ? void 0 : this.remoteUserConfiguration.raw
            },
            workspace: {
                contents: this._workspaceConfiguration.contents,
                overrides: this._workspaceConfiguration.overrides,
                keys: this._workspaceConfiguration.keys
            },
            folders: [
                ...this._folderConfigurations.keys()
            ].reduce((t, n)=>{
                const { contents: r, overrides: s, keys: i } = this._folderConfigurations.get(n);
                return t.push([
                    n,
                    {
                        contents: r,
                        overrides: s,
                        keys: i
                    }
                ]), t;
            }, [])
        };
    }
    allKeys() {
        const t = new Set;
        return this._defaultConfiguration.keys.forEach((n)=>t.add(n)), this.userConfiguration.keys.forEach((n)=>t.add(n)), this._workspaceConfiguration.keys.forEach((n)=>t.add(n)), this._folderConfigurations.forEach((n)=>n.keys.forEach((r)=>t.add(r))), [
            ...t.values()
        ];
    }
    allOverrideIdentifiers() {
        const t = new Set;
        return this._defaultConfiguration.getAllOverrideIdentifiers().forEach((n)=>t.add(n)), this.userConfiguration.getAllOverrideIdentifiers().forEach((n)=>t.add(n)), this._workspaceConfiguration.getAllOverrideIdentifiers().forEach((n)=>t.add(n)), this._folderConfigurations.forEach((n)=>n.getAllOverrideIdentifiers().forEach((r)=>t.add(r))), [
            ...t.values()
        ];
    }
    getAllKeysForOverrideIdentifier(t) {
        const n = new Set;
        return this._defaultConfiguration.getKeysForOverrideIdentifier(t).forEach((r)=>n.add(r)), this.userConfiguration.getKeysForOverrideIdentifier(t).forEach((r)=>n.add(r)), this._workspaceConfiguration.getKeysForOverrideIdentifier(t).forEach((r)=>n.add(r)), this._folderConfigurations.forEach((r)=>r.getKeysForOverrideIdentifier(t).forEach((s)=>n.add(s))), [
            ...n.values()
        ];
    }
    static parse(t, n) {
        const r = this.parseConfigurationModel(t.defaults, n), s = this.parseConfigurationModel(t.policy, n), i = this.parseConfigurationModel(t.application, n), a = this.parseConfigurationModel(t.userLocal, n), o = this.parseConfigurationModel(t.userRemote, n), l = this.parseConfigurationModel(t.workspace, n), d = t.folders.reduce((u, m)=>(u.set(x.revive(m[0]), this.parseConfigurationModel(m[1], n)), u), new Yn);
        return new ELe(r, s, i, a, o, l, d, Sn.createEmptyModel(n), new Yn, n);
    }
    static parseConfigurationModel(t, n) {
        return new Sn(t.contents, t.keys, t.overrides, t.raw, n);
    }
}, x2e = class {
    constructor(e, t, n, r, s){
        this.change = e, this.previous = t, this.currentConfiguraiton = n, this.currentWorkspace = r, this.logService = s, this._marker = `
`, this._markerCode1 = this._marker.charCodeAt(0), this._markerCode2 = 46, this.affectedKeys = new Set, this._previousConfiguration = void 0;
        for (const i of e.keys)this.affectedKeys.add(i);
        for (const [, i] of e.overrides)for (const a of i)this.affectedKeys.add(a);
        this._affectsConfigStr = this._marker;
        for (const i of this.affectedKeys)this._affectsConfigStr += i + this._marker;
    }
    get previousConfiguration() {
        return !this._previousConfiguration && this.previous && (this._previousConfiguration = lb.parse(this.previous.data, this.logService)), this._previousConfiguration;
    }
    affectsConfiguration(e, t) {
        const n = this._marker + e, r = this._affectsConfigStr.indexOf(n);
        if (r < 0) return !1;
        const s = r + n.length;
        if (s >= this._affectsConfigStr.length) return !1;
        const i = this._affectsConfigStr.charCodeAt(s);
        if (i !== this._markerCode1 && i !== this._markerCode2) return !1;
        if (t) {
            const a = this.previousConfiguration ? this.previousConfiguration.getValue(e, t, this.previous?.workspace) : void 0, o = this.currentConfiguraiton.getValue(e, t, this.currentWorkspace);
            return !Bs(a, o);
        }
        return !0;
    }
};

}

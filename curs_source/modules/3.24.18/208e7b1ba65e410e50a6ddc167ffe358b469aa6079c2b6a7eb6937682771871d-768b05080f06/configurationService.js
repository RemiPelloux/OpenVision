import { Vn } from "./arrays.js";
import { Gl, le, xr } from "./async.js";
import { ae, it } from "./buffer.js";
import { at } from "./configuration.js";
import { F2e, L2e, Rm, Sn, Wx, bv, lb, x2e } from "./configurationModels.js";
import { ua } from "./configurationRegistry.js";
import { B2e, Oct, W2e, db } from "./configurations.js";
import { N, se } from "./event.js";
import { Bs, bl } from "./extensionsScannerService.js";
import { Ys, _m } from "./json.js";
import { v7 } from "./jsonEdit.js";
import { Zs } from "./labels.js";
import { J, j } from "./lifecycle.js";
import { Yn, mr } from "./map.js";
import { ns } from "./objects.js";
import { Nr, oe, os } from "./platform.js";
import { cO, fi } from "./policy.js";
import { Ft, St } from "./resources.js";
import { h } from "./tslib.es6.js";
import { x } from "./uri.js";
import { ia } from "./workspacesManagementMainService.js";
function GLe(e, t = [], n = _m.DEFAULT) {
    let r = {
        type: "array",
        offset: -1,
        length: -1,
        children: [],
        parent: void 0
    };
    function s(l) {
        r.type === "property" && (r.length = l - r.offset, r = r.parent);
    }
    function i(l) {
        return r.children.push(l), l;
    }
    bv(e, {
        onObjectBegin: (l)=>{
            r = i({
                type: "object",
                offset: l,
                length: -1,
                parent: r,
                children: []
            });
        },
        onObjectProperty: (l, d, u)=>{
            r = i({
                type: "property",
                offset: d,
                length: -1,
                parent: r,
                children: []
            }), r.children.push({
                type: "string",
                value: l,
                offset: d,
                length: u,
                parent: r
            });
        },
        onObjectEnd: (l, d)=>{
            r.length = l + d - r.offset, r = r.parent, s(l + d);
        },
        onArrayBegin: (l, d)=>{
            r = i({
                type: "array",
                offset: l,
                length: -1,
                parent: r,
                children: []
            });
        },
        onArrayEnd: (l, d)=>{
            r.length = l + d - r.offset, r = r.parent, s(l + d);
        },
        onLiteralValue: (l, d, u)=>{
            i({
                type: bl(l),
                offset: d,
                length: u,
                parent: r,
                value: l
            }), s(d + u);
        },
        onSeparator: (l, d, u)=>{
            r.type === "property" && (l === ":" ? r.colonOffset = d : l === "," && s(d));
        },
        onError: (l, d, u)=>{
            t.push({
                error: l,
                offset: d,
                length: u
            });
        }
    }, n);
    const o = r.children[0];
    return o && delete o.parent, o;
}
function Bx(e, t) {
    if (!e) return;
    let n = e;
    for (const r of t)if (typeof r == "string") {
        if (n.type !== "object" || !Array.isArray(n.children)) return;
        let s = !1;
        for (const i of n.children)if (Array.isArray(i.children) && i.children[0].value === r) {
            n = i.children[1], s = !0;
            break;
        }
        if (!s) return;
    } else {
        const s = r;
        if (n.type !== "array" || s < 0 || !Array.isArray(n.children) || s >= n.children.length) return;
        n = n.children[s];
    }
    return n;
}
function DR(e) {
    return e && typeof e == "object" && (!e.overrideIdentifier || typeof e.overrideIdentifier == "string") && (!e.resource || e.resource instanceof x);
}
function uxe(e) {
    return e && typeof e == "object" && (!e.overrideIdentifiers || Array.isArray(e.overrideIdentifiers)) && !e.overrideIdentifier && (!e.resource || e.resource instanceof x);
}
function kxe(e) {
    return e.reduce((t, n)=>`${t}[${n}]`, "");
}
function UWe(e, t, n) {
    let r, s, i, a, o;
    if (t) {
        for(a = t.offset, o = a + t.length, i = a; i > 0 && !Xk(e, i - 1);)i--;
        let I = o;
        for(; I < e.length && !Xk(e, I);)I++;
        s = e.substring(i, I), r = xWe(s, n);
    } else s = e, r = 0, i = 0, a = 0, o = e.length;
    const l = FWe(n, e);
    let d = !1, u = 0, m;
    n.insertSpaces ? m = KI(" ", n.tabSize || 4) : m = "	";
    const f = Wx(s, !1);
    let v = !1;
    function T() {
        return l + KI(m, r + u);
    }
    function S() {
        let I = f.scan();
        for(d = !1; I === 15 || I === 14;)d = d || I === 14, I = f.scan();
        return v = I === 16 || f.getTokenError() !== 0, I;
    }
    const k = [];
    function y(I, G, U) {
        !v && G < o && U > a && e.substring(G, U) !== I && k.push({
            offset: G,
            length: U - G,
            content: I
        });
    }
    let b = S();
    if (b !== 17) {
        const I = f.getTokenOffset() + i, G = KI(m, r);
        y(G, i, I);
    }
    for(; b !== 17;){
        let I = f.getTokenOffset() + f.getTokenLength() + i, G = S(), U = "";
        for(; !d && (G === 12 || G === 13);){
            const W = f.getTokenOffset() + i;
            y(" ", I, W), I = f.getTokenOffset() + f.getTokenLength() + i, U = G === 12 ? T() : "", G = S();
        }
        if (G === 2) b !== 1 && (u--, U = T());
        else if (G === 4) b !== 3 && (u--, U = T());
        else {
            switch(b){
                case 3:
                case 1:
                    u++, U = T();
                    break;
                case 5:
                case 12:
                    U = T();
                    break;
                case 13:
                    d ? U = T() : U = " ";
                    break;
                case 6:
                    U = " ";
                    break;
                case 10:
                    if (G === 6) {
                        U = "";
                        break;
                    }
                case 7:
                case 8:
                case 9:
                case 11:
                case 2:
                case 4:
                    G === 12 || G === 13 ? U = " " : G !== 5 && G !== 17 && (v = !0);
                    break;
                case 16:
                    v = !0;
                    break;
            }
            d && (G === 12 || G === 13) && (U = T());
        }
        const X = f.getTokenOffset() + i;
        y(U, I, X), b = G;
    }
    return k;
}
function KI(e, t) {
    let n = "";
    for(let r = 0; r < t; r++)n += e;
    return n;
}
function xWe(e, t) {
    let n = 0, r = 0;
    const s = t.tabSize || 4;
    for(; n < e.length;){
        const i = e.charAt(n);
        if (i === " ") r++;
        else if (i === "	") r += s;
        else break;
        n++;
    }
    return Math.floor(r / s);
}
function FWe(e, t) {
    for(let n = 0; n < t.length; n++){
        const r = t.charAt(n);
        if (r === "\r") return n + 1 < t.length && t.charAt(n + 1) === `
` ? `\r
` : "\r";
        if (r === `
`) return `
`;
    }
    return e && e.eol || `
`;
}
function Xk(e, t) {
    return `\r
`.indexOf(e.charAt(t)) !== -1;
}
function BWe(e, t, n, r, s) {
    const i = t.slice(), o = GLe(e, []);
    let l, d;
    for(; i.length > 0 && (d = i.pop(), l = Bx(o, i), l === void 0 && n !== void 0);)typeof d == "string" ? n = {
        [d]: n
    } : n = [
        n
    ];
    if (l) if (l.type === "object" && typeof d == "string" && Array.isArray(l.children)) {
        const u = Bx(l, [
            d
        ]);
        if (u !== void 0) if (n === void 0) {
            if (!u.parent) throw new Error("Malformed AST");
            const m = l.children.indexOf(u.parent);
            let f, v = u.parent.offset + u.parent.length;
            if (m > 0) {
                const T = l.children[m - 1];
                f = T.offset + T.length;
            } else f = l.offset + 1, l.children.length > 1 && (v = l.children[1].offset);
            return Id(e, {
                offset: f,
                length: v - f,
                content: ""
            }, r);
        } else return Id(e, {
            offset: u.offset,
            length: u.length,
            content: JSON.stringify(n)
        }, r);
        else {
            if (n === void 0) return [];
            const m = `${JSON.stringify(d)}: ${JSON.stringify(n)}`, f = s ? s(l.children.map((T)=>T.children[0].value)) : l.children.length;
            let v;
            if (f > 0) {
                const T = l.children[f - 1];
                v = {
                    offset: T.offset + T.length,
                    length: 0,
                    content: "," + m
                };
            } else l.children.length === 0 ? v = {
                offset: l.offset + 1,
                length: 0,
                content: m
            } : v = {
                offset: l.offset + 1,
                length: 0,
                content: m + ","
            };
            return Id(e, v, r);
        }
    } else if (l.type === "array" && typeof d == "number" && Array.isArray(l.children)) if (n !== void 0) {
        const u = `${JSON.stringify(n)}`;
        let m;
        if (l.children.length === 0 || d === 0) m = {
            offset: l.offset + 1,
            length: 0,
            content: l.children.length === 0 ? u : u + ","
        };
        else {
            const f = d === -1 || d > l.children.length ? l.children.length : d, v = l.children[f - 1];
            m = {
                offset: v.offset + v.length,
                length: 0,
                content: "," + u
            };
        }
        return Id(e, m, r);
    } else {
        const u = d, m = l.children[u];
        let f;
        if (l.children.length === 1) f = {
            offset: l.offset + 1,
            length: l.length - 2,
            content: ""
        };
        else if (l.children.length - 1 === u) {
            const v = l.children[u - 1], T = v.offset + v.length, S = l.offset + l.length;
            f = {
                offset: T,
                length: S - 2 - T,
                content: ""
            };
        } else f = {
            offset: m.offset,
            length: l.children[u + 1].offset - m.offset,
            content: ""
        };
        return Id(e, f, r);
    }
    else throw new Error(`Can not add ${typeof d != "number" ? "index" : "property"} to parent of type ${l.type}`);
    else return n === void 0 ? [] : Id(e, {
        offset: o ? o.offset : 0,
        length: o ? o.length : 0,
        content: JSON.stringify(n)
    }, r);
}
function Id(e, t, n) {
    let r = zI(e, t), s = t.offset, i = t.offset + t.content.length;
    if (t.length === 0 || t.content.length === 0) {
        for(; s > 0 && !Xk(r, s - 1);)s--;
        for(; i < r.length && !Xk(r, i);)i++;
    }
    const a = UWe(r, {
        offset: s,
        length: i - s
    }, n);
    for(let l = a.length - 1; l >= 0; l--){
        const d = a[l];
        r = zI(r, d), s = Math.min(s, d.offset), i = Math.max(i, d.offset + d.length), i += d.content.length - d.length;
    }
    const o = e.length - (r.length - i) - s;
    return [
        {
            offset: s,
            length: o,
            content: r.substring(s, i)
        }
    ];
}
function zI(e, t) {
    return e.substring(0, t.offset) + t.content + e.substring(t.offset + t.length);
}
function GWe(e, t) {
    const n = t.slice(0).sort((s, i)=>{
        const a = s.offset - i.offset;
        return a === 0 ? s.length - i.length : a;
    });
    let r = e.length;
    for(let s = n.length - 1; s >= 0; s--){
        const i = n[s];
        if (i.offset + i.length <= r) e = zI(e, i);
        else throw new Error("Overlapping edit");
        r = i.offset;
    }
    return e;
}
var G2e, V2e;
export { BWe, Bx, DR, FWe, G2e, GLe, GWe, Id, KI, UWe, V2e, Xk, kxe, uxe, xWe, zI };
var __wakaru_Lct_initialized = false;
export function Lct() {
if (__wakaru_Lct_initialized) return;
__wakaru_Lct_initialized = true;
"use strict";
h(), Vn(), le(), it(), se(), Ys(), v7(), j(), mr(), ns(), oe(), Ft(), at(), F2e(), ua(), Oct(), fi(), G2e = class extends J {
    constructor(e, t, n, r){
        super(), this.settingsResource = e, this.logService = r, this._onDidChangeConfiguration = this._register(new N), this.onDidChangeConfiguration = this._onDidChangeConfiguration.event, this.defaultConfiguration = this._register(new W2e(r)), this.policyConfiguration = n instanceof cO ? new B2e : this._register(new db(this.defaultConfiguration, n, r)), this.userConfiguration = this._register(new L2e(this.settingsResource, {}, St, t, r)), this.configuration = new lb(this.defaultConfiguration.configurationModel, this.policyConfiguration.configurationModel, Sn.createEmptyModel(r), Sn.createEmptyModel(r), Sn.createEmptyModel(r), Sn.createEmptyModel(r), new Yn, Sn.createEmptyModel(r), new Yn, r), this.configurationEditing = new V2e(e, t, this), this.reloadConfigurationScheduler = this._register(new xr(()=>this.reloadConfiguration(), 50)), this._register(this.defaultConfiguration.onDidChangeConfiguration(({ defaults: s, properties: i })=>this.onDidDefaultConfigurationChange(s, i))), this._register(this.policyConfiguration.onDidChangeConfiguration((s)=>this.onDidPolicyConfigurationChange(s))), this._register(this.userConfiguration.onDidChange(()=>this.reloadConfigurationScheduler.schedule()));
    }
    get isDisposed() {
        return this._store.isDisposed;
    }
    async initialize() {
        const [e, t, n] = await Promise.all([
            this.defaultConfiguration.initialize(),
            this.policyConfiguration.initialize(),
            this.userConfiguration.loadConfiguration()
        ]);
        this.configuration = new lb(e, t, Sn.createEmptyModel(this.logService), n, Sn.createEmptyModel(this.logService), Sn.createEmptyModel(this.logService), new Yn, Sn.createEmptyModel(this.logService), new Yn, this.logService);
    }
    getConfigurationData() {
        return this.configuration.toData();
    }
    getValue(e, t) {
        const n = typeof e == "string" ? e : void 0, r = DR(e) ? e : DR(t) ? t : {};
        return this.configuration.getValue(n, r, void 0);
    }
    async updateValue(e, t, n, r, s) {
        const i = uxe(n) ? n : DR(n) ? {
            resource: n.resource,
            overrideIdentifiers: n.overrideIdentifier ? [
                n.overrideIdentifier
            ] : void 0
        } : void 0, a = i ? r : n;
        if (a !== void 0 && a !== 3 && a !== 2) throw new Error(`Unable to write ${e} to target ${a}.`);
        i?.overrideIdentifiers && (i.overrideIdentifiers = Zs(i.overrideIdentifiers), i.overrideIdentifiers = i.overrideIdentifiers.length ? i.overrideIdentifiers : void 0);
        const o = this.inspect(e, {
            resource: i?.resource,
            overrideIdentifier: i?.overrideIdentifiers ? i.overrideIdentifiers[0] : void 0
        });
        if (o.policyValue !== void 0) throw new Error(`Unable to write ${e} because it is configured in system policy.`);
        if (Bs(t, o.defaultValue) && (t = void 0), i?.overrideIdentifiers?.length && i.overrideIdentifiers.length > 1) {
            const d = i.overrideIdentifiers.sort(), u = this.configuration.localUserConfiguration.overrides.find((m)=>Rm([
                    ...m.identifiers
                ].sort(), d));
            u && (i.overrideIdentifiers = u.identifiers);
        }
        const l = i?.overrideIdentifiers?.length ? [
            kxe(i.overrideIdentifiers),
            e
        ] : [
            e
        ];
        await this.configurationEditing.write(l, t), await this.reloadConfiguration();
    }
    inspect(e, t = {}) {
        return this.configuration.inspect(e, t, void 0);
    }
    keys() {
        return this.configuration.keys(void 0);
    }
    async reloadConfiguration() {
        const e = await this.userConfiguration.loadConfiguration();
        this.onDidChangeUserConfiguration(e);
    }
    onDidChangeUserConfiguration(e) {
        const t = this.configuration.toData(), n = this.configuration.compareAndUpdateLocalUserConfiguration(e);
        this.trigger(n, t, 2);
    }
    onDidDefaultConfigurationChange(e, t) {
        const n = this.configuration.toData(), r = this.configuration.compareAndUpdateDefaultConfiguration(e, t);
        this.trigger(r, n, 7);
    }
    onDidPolicyConfigurationChange(e) {
        const t = this.configuration.toData(), n = this.configuration.compareAndUpdatePolicyConfiguration(e);
        this.trigger(n, t, 7);
    }
    trigger(e, t, n) {
        const r = new x2e(e, {
            data: t
        }, this.configuration, void 0, this.logService);
        r.source = n, this._onDidChangeConfiguration.fire(r);
    }
}, V2e = class {
    constructor(e, t, n){
        this.settingsResource = e, this.fileService = t, this.configurationService = n, this.queue = new Gl;
    }
    write(e, t) {
        return this.queue.queue(()=>this.doWriteConfiguration(e, t));
    }
    async doWriteConfiguration(e, t) {
        let n;
        try {
            n = (await this.fileService.readFile(this.settingsResource)).value.toString();
        } catch (i) {
            if (i.fileOperationResult === 1) n = "{}";
            else throw i;
        }
        const r = [];
        if (ia(n, r, {
            allowTrailingComma: !0,
            allowEmptyContent: !0
        }), r.length > 0) throw new Error("Unable to write into the settings file. Please open the file to correct errors/warnings in the file and try again.");
        const s = this.getEdits(n, e, t);
        n = GWe(n, s), await this.fileService.writeFile(this.settingsResource, ae.fromString(n));
    }
    getEdits(e, t, n) {
        const { tabSize: r, insertSpaces: s, eol: i } = this.formattingOptions;
        if (!t.length) {
            const a = JSON.stringify(n, null, s ? " ".repeat(r) : "	");
            return [
                {
                    content: a,
                    length: a.length,
                    offset: 0
                }
            ];
        }
        return BWe(e, t, n, {
            tabSize: r,
            insertSpaces: s,
            eol: i
        });
    }
    get formattingOptions() {
        if (!this._formattingOptions) {
            let e = os === Nr.Linux || os === Nr.Macintosh ? `
` : `\r
`;
            const t = this.configurationService.getValue("files.eol", {
                overrideIdentifier: "jsonc"
            });
            t && typeof t == "string" && t !== "auto" && (e = t), this._formattingOptions = {
                eol: e,
                insertSpaces: !!this.configurationService.getValue("editor.insertSpaces", {
                    overrideIdentifier: "jsonc"
                }),
                tabSize: this.configurationService.getValue("editor.tabSize", {
                    overrideIdentifier: "jsonc"
                })
            };
        }
        return this._formattingOptions;
    }
};

}

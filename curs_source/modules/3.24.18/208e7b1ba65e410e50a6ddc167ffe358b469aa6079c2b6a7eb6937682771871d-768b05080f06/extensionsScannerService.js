import { Vn } from "./arrays.js";
import { le, pa } from "./async.js";
import { ae, it } from "./buffer.js";
import { E } from "./configurationRegistry.js";
import { v0 } from "./constants.js";
import { Fr, si } from "./environment.js";
import { Ve } from "./errors.js";
import { N, se } from "./event.js";
import { e_e } from "./extensionManagementUtil.js";
import { $Ze } from "./extensionNls.js";
import { BZe, I2, i_e } from "./extensionValidator.js";
import { r_e } from "./extensionsApiProposals.js";
import { Du, M1, hf, pf } from "./extensionsProfileScannerService.js";
import { E2, Qfe, Xfe, Zfe, w2 } from "./extensions_2.js";
import { Wt, cn } from "./files.js";
import { Q, ne, ni } from "./instantiation.js";
import { B, za } from "./ipc.js";
import { Ys } from "./json.js";
import { NZe } from "./jsonErrorMessages.js";
import { J, j } from "./lifecycle.js";
import { Z, te } from "./log.js";
import { pT } from "./marshalling.js";
import { $, $e, Jt } from "./network.js";
import { Ne } from "./nls.js";
import { ns } from "./objects.js";
import { Ce, L, _t, on } from "./path.js";
import { Fe, Ko, Rs, Yb, Yr, oe } from "./platform.js";
import { Ln, Un } from "./platform_2.js";
import { n5 } from "./process.js";
import { Tt, et } from "./productService.js";
import { We } from "./request_2.js";
import { $R, Ae, Ft, Mi, jR } from "./resources.js";
import { Jge, Kge, t2, zge } from "./semver.js";
import { jk, rt } from "./severity_2.js";
import { w, wn } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
import { x, ye } from "./uri.js";
import { Br, Oi } from "./uriIdentity.js";
import { Ls, Us, ai } from "./userDataProfile.js";
import { ia } from "./workspacesManagementMainService.js";
function bl(e) {
    switch(typeof e){
        case "boolean":
            return "boolean";
        case "number":
            return "number";
        case "string":
            return "string";
        case "object":
            {
                if (e) {
                    if (Array.isArray(e)) return "array";
                } else return "null";
                return "object";
            }
        default:
            return "null";
    }
}
function Bs(e, t) {
    if (e === t) return !0;
    if (e == null || t === null || t === void 0 || typeof e != typeof t || typeof e != "object" || Array.isArray(e) !== Array.isArray(t)) return !1;
    let n, r;
    if (Array.isArray(e)) {
        if (e.length !== t.length) return !1;
        for(n = 0; n < e.length; n++)if (!Bs(e[n], t[n])) return !1;
    } else {
        const s = [];
        for(r in e)s.push(r);
        s.sort();
        const i = [];
        for(r in t)i.push(r);
        if (i.sort(), !Bs(s, i)) return !1;
        for(n = 0; n < s.length; n++)if (!Bs(e[s[n]], t[s[n]])) return !1;
    }
    return !0;
}
function fze(e, t) {
    switch(e){
        case Yr.Windows:
            return t === "x64" ? "win32-x64" : t === "arm64" ? "win32-arm64" : "unknown";
        case Yr.Linux:
            return t === "x64" ? "linux-x64" : t === "arm64" ? "linux-arm64" : t === "arm" ? "linux-armhf" : "unknown";
        case "alpine":
            return t === "x64" ? "alpine-x64" : t === "arm64" ? "alpine-arm64" : "unknown";
        case Yr.Mac:
            return t === "x64" ? "darwin-x64" : t === "arm64" ? "darwin-arm64" : "unknown";
        case Yr.Web:
            return "web";
    }
}
function yZe(e) {
    return e.map((t)=>{
        const [n, r] = t.split("@");
        return {
            proposalName: n,
            version: r ? parseInt(r) : void 0
        };
    });
}
function wZe(e) {
    return e.map((t)=>t.split("@")[0]);
}
function bZe(e, t) {
    return `${e}.${t}`;
}
function RZe(e) {
    return e.toLowerCase();
}
function CZe(e, t) {
    return RZe(bZe(e ?? w2, t));
}
async function IZe(e, t) {
    if (!Fe) return !1;
    let n;
    try {
        n = (await e.readFile(x.file("/etc/os-release"))).value.toString();
    } catch  {
        try {
            n = (await e.readFile(x.file("/usr/lib/os-release"))).value.toString();
        } catch (s) {
            t.debug("Error while getting the os-release file.", We(s));
        }
    }
    return !!n && (n.match(/^ID=([^\u001b\r\n]*)/m) || [])[1] === "alpine";
}
async function AZe(e, t) {
    const n = await IZe(e, t), r = fze(n ? "alpine" : Ko, n5);
    return t.debug("ComputeTargetPlatform:", r), r;
}
function b2(e) {
    switch(e){
        case 1:
            return E(114, null);
        case 2:
            return E(115, null);
        case 3:
            return E(116, null);
        case 4:
            return E(117, null);
        case 5:
            return E(118, null);
        case 6:
            return E(119, null);
        case 7:
            return E(120, null);
        case 8:
            return E(121, null);
        case 9:
            return E(122, null);
        default:
            return "";
    }
}
function OZe(e) {
    return e = e.trim(), e === "*" || I2.test(e);
}
function R2(e) {
    if (!OZe(e)) return null;
    if (e = e.trim(), e === "*") return {
        hasCaret: !1,
        hasGreaterEquals: !1,
        majorBase: 0,
        majorMustEqual: !1,
        minorBase: 0,
        minorMustEqual: !1,
        patchBase: 0,
        patchMustEqual: !1,
        preRelease: null
    };
    const t = e.match(I2);
    return t ? {
        hasCaret: t[1] === "^",
        hasGreaterEquals: t[1] === ">=",
        majorBase: t[2] === "x" ? 0 : parseInt(t[2], 10),
        majorMustEqual: t[2] !== "x",
        minorBase: t[4] === "x" ? 0 : parseInt(t[4], 10),
        minorMustEqual: t[4] !== "x",
        patchBase: t[6] === "x" ? 0 : parseInt(t[6], 10),
        patchMustEqual: t[6] !== "x",
        preRelease: t[8] || null
    } : null;
}
function C2(e) {
    if (!e) return null;
    const t = e.majorBase, n = e.majorMustEqual, r = e.minorBase;
    let s = e.minorMustEqual;
    const i = e.patchBase;
    let a = e.patchMustEqual;
    e.hasCaret && (t === 0 || (s = !1), a = !1);
    let o = 0;
    if (e.preRelease) {
        const l = i_e.exec(e.preRelease);
        if (l) {
            const [, d, u, m] = l;
            o = Date.UTC(Number(d), Number(u) - 1, Number(m));
        }
    }
    return {
        majorBase: t,
        majorMustEqual: n,
        minorBase: r,
        minorMustEqual: s,
        patchBase: i,
        patchMustEqual: a,
        isMinimum: e.hasGreaterEquals,
        notBefore: o
    };
}
function LZe(e, t, n) {
    let r;
    typeof e == "string" ? r = C2(R2(e)) : r = e;
    let s;
    t instanceof Date ? s = t.getTime() : typeof t == "string" && (s = new Date(t).getTime());
    let i;
    if (typeof n == "string" ? i = C2(R2(n)) : i = n, !r || !i) return !1;
    const a = r.majorBase, o = r.minorBase, l = r.patchBase;
    let d = i.majorBase, u = i.minorBase, m = i.patchBase;
    const f = i.notBefore;
    let v = i.majorMustEqual, T = i.minorMustEqual, S = i.patchMustEqual;
    return i.isMinimum ? a > d ? !0 : a < d ? !1 : o > u ? !0 : o < u || s && s < f ? !1 : l >= m : (a === 1 && d === 0 && (!v || !T || !S) && (d = 1, u = 0, m = 0, v = !0, T = !1, S = !1), a < d ? !1 : a > d ? !v : o < u ? !1 : o > u ? !T : l < m ? !1 : l > m ? !S : !(s && s < f));
}
function UZe(e, t, n, r, s, i) {
    const a = [];
    if (typeof r.publisher < "u" && typeof r.publisher != "string") return a.push([
        rt.Error,
        E(1996, null)
    ]), a;
    if (typeof r.name != "string") return a.push([
        rt.Error,
        E(1997, null, "name")
    ]), a;
    if (typeof r.version != "string") return a.push([
        rt.Error,
        E(1998, null, "version")
    ]), a;
    if (!r.engines) return a.push([
        rt.Error,
        E(1999, null, "engines")
    ]), a;
    if (typeof r.engines.vscode != "string") return a.push([
        rt.Error,
        E(2e3, null, "engines.vscode")
    ]), a;
    if (typeof r.extensionDependencies < "u" && !s_e(r.extensionDependencies)) return a.push([
        rt.Error,
        E(2001, null, "extensionDependencies")
    ]), a;
    if (typeof r.activationEvents < "u") {
        if (!s_e(r.activationEvents)) return a.push([
            rt.Error,
            E(2002, null, "activationEvents")
        ]), a;
        if (typeof r.main > "u" && typeof r.browser > "u") return a.push([
            rt.Error,
            E(2003, null, "activationEvents", "main", "browser")
        ]), a;
    }
    if (typeof r.extensionKind < "u" && typeof r.main > "u" && a.push([
        rt.Warning,
        E(2004, null, "extensionKind")
    ]), typeof r.main < "u") {
        if (typeof r.main != "string") return a.push([
            rt.Error,
            E(2005, null, "main")
        ]), a;
        {
            const d = Ae(n, r.main);
            jR(d, n) || a.push([
                rt.Warning,
                E(2006, null, d.path, n.path)
            ]);
        }
    }
    if (typeof r.browser < "u") {
        if (typeof r.browser != "string") return a.push([
            rt.Error,
            E(2007, null, "browser")
        ]), a;
        {
            const d = Ae(n, r.browser);
            jR(d, n) || a.push([
                rt.Warning,
                E(2008, null, d.path, n.path)
            ]);
        }
    }
    if (!Kge(r.version)) return a.push([
        rt.Error,
        E(2009, null)
    ]), a;
    const o = [];
    if (!xZe(e, t, r, s, o)) for (const d of o)a.push([
        rt.Error,
        d
    ]);
    if (i && r.enabledApiProposals?.length) {
        const d = [];
        if (!FZe([
            ...r.enabledApiProposals
        ], d)) for (const u of d)a.push([
            rt.Error,
            u
        ]);
    }
    return a;
}
function xZe(e, t, n, r, s) {
    return r || typeof n.main > "u" && typeof n.browser > "u" || v0.includes(`${n.publisher}.${n.name}`.toLowerCase()) ? !0 : WZe(e, t, n.engines.vscode, s);
}
function FZe(e, t) {
    if (e.length === 0) return !0;
    const n = Array.isArray(t) ? t : void 0, r = (n ? void 0 : t) ?? r_e, s = [], i = yZe(e);
    for (const { proposalName: a, version: o } of i){
        if (!o) continue;
        r[a]?.version !== o && s.push(a);
    }
    return s.length ? (n && (s.length === 1 ? n.push(E(2010, null, s[0])) : n.push(E(2011, null, s.slice(0, s.length - 1).map((a)=>`'${a}'`).join(", "), s[s.length - 1]))), !1) : !0;
}
function WZe(e, t, n, r = []) {
    const s = C2(R2(n));
    if (!s) return r.push(E(2012, null, n)), !1;
    if (s.majorBase === 0) {
        if (!s.majorMustEqual || !s.minorMustEqual) return r.push(E(2013, null, n)), !1;
    } else if (!s.majorMustEqual) return r.push(E(2014, null, n)), !1;
    return LZe(e, t, s) ? !0 : (r.push(E(2015, null, e, n)), !1);
}
function s_e(e) {
    if (!Array.isArray(e)) return !1;
    for(let t = 0, n = e.length; t < n; t++)if (typeof e[t] != "string") return !1;
    return !0;
}
function GZe(e, t, n, r) {
    try {
        VZe(e, t, n, r);
    } catch (s) {
        e.error(s?.message ?? s);
    }
    return t;
}
function VZe(e, t, n, r) {
    const s = (i, a, o)=>{
        const l = i[a];
        if (Ln(l)) {
            const d = l, u = d.length;
            if (u > 1 && d[0] === "%" && d[u - 1] === "%") {
                const m = d.substr(1, u - 2);
                let f = n[m];
                f === void 0 && r && (f = r[m]);
                const v = typeof f == "string" ? f : f?.message, T = r?.[m], S = typeof T == "string" ? T : T?.message;
                if (!v) {
                    S || e.warn(`[${t.name}]: ${E(1976, null, m)}`);
                    return;
                }
                if (o && (a === "title" || a === "category") && S && S !== v) {
                    const k = {
                        value: v,
                        original: S
                    };
                    i[a] = k;
                } else i[a] = v;
            }
        } else if (Un(l)) for(const d in l)l.hasOwnProperty(d) && (d === "commands" ? s(l, d, !0) : s(l, d, o));
        else if (Array.isArray(l)) for(let d = 0; d < l.length; d++)s(l, d, o);
    };
    for(const i in t)t.hasOwnProperty(i) && s(t, i);
}
var A2, a_e, o_e, P1, Ou, gf, ff, c_e;
export { A2, AZe, Bs, C2, CZe, FZe, GZe, IZe, LZe, OZe, Ou, P1, R2, RZe, UZe, VZe, WZe, a_e, b2, bZe, bl, c_e, ff, fze, gf, o_e, s_e, wZe, xZe, yZe };
var __wakaru_l_e_initialized = false;
export function l_e() {
if (__wakaru_l_e_initialized) return;
__wakaru_l_e_initialized = true;
"use strict";
h(), Vn(), le(), ns(), it(), Ve(), Ys(), NZe(), j(), $e(), Ce(), oe(), Ft(), t2(), jk(), ye(), Ne(), Fr(), e_e(), E2(), BZe(), Wt(), ne(), te(), Tt(), se(), pT(), M1(), Us(), Oi(), $Ze(), ((e)=>{
    function t(n, r) {
        if (n === r) return !0;
        const s = Object.keys(n), i = new Set;
        for (const a of Object.keys(r))i.add(a);
        if (s.length !== i.size) return !1;
        for (const a of s){
            if (n[a] !== r[a]) return !1;
            i.delete(a);
        }
        return i.size === 0;
    }
    e.equals = t;
})(A2 || (A2 = {})), a_e = ".obsolete", o_e = Q("IExtensionsScannerService"), P1 = class extends J {
    constructor(e, t, n, r, s, i, a, o, l, d, u, m){
        super(), this.systemExtensionsLocation = e, this.userExtensionsLocation = t, this.extensionsControlLocation = n, this.currentProfile = r, this.userDataProfilesService = s, this.extensionsProfileScannerService = i, this.fileService = a, this.logService = o, this.environmentService = l, this.productService = d, this.uriIdentityService = u, this.instantiationService = m, this._onDidChangeCache = this._register(new N), this.onDidChangeCache = this._onDidChangeCache.event, this.initializeDefaultProfileExtensionsPromise = void 0, this.systemExtensionsCachedScanner = this._register(this.instantiationService.createInstance(ff, this.currentProfile)), this.userExtensionsCachedScanner = this._register(this.instantiationService.createInstance(ff, this.currentProfile)), this.extensionsScanner = this._register(this.instantiationService.createInstance(gf)), this._register(this.systemExtensionsCachedScanner.onDidChangeCache(()=>this._onDidChangeCache.fire(0))), this._register(this.userExtensionsCachedScanner.onDidChangeCache(()=>this._onDidChangeCache.fire(1)));
    }
    getTargetPlatform() {
        return this._targetPlatformPromise || (this._targetPlatformPromise = AZe(this.fileService, this.logService)), this._targetPlatformPromise;
    }
    async scanAllExtensions(e, t) {
        const [n, r] = await Promise.all([
            this.scanSystemExtensions(e),
            this.scanUserExtensions(t)
        ]);
        return this.dedupExtensions(n, r, [], await this.getTargetPlatform(), !0);
    }
    async scanSystemExtensions(e) {
        const t = [];
        t.push(this.scanDefaultSystemExtensions(e.language)), t.push(this.scanDevSystemExtensions(e.language, !!e.checkControlFile));
        const [n, r] = await Promise.all(t);
        return this.applyScanOptions([
            ...n,
            ...r
        ], 0, {
            pickLatest: !1
        });
    }
    async scanUserExtensions(e) {
        this.logService.trace("Started scanning user extensions", e.profileLocation);
        const t = this.uriIdentityService.extUri.isEqual(e.profileLocation, this.userDataProfilesService.defaultProfile.extensionsResource) ? {
            bailOutWhenFileNotFound: !0
        } : void 0, n = await this.createExtensionScannerInput(e.profileLocation, !0, 1, e.language, !0, t, e.productVersion ?? this.getProductVersion()), r = e.useCache && !n.devMode ? this.userExtensionsCachedScanner : this.extensionsScanner;
        let s;
        try {
            s = await r.scanExtensions(n);
        } catch (i) {
            if (i instanceof hf && i.code === "ERROR_PROFILE_NOT_FOUND") await this.doInitializeDefaultProfileExtensions(), s = await r.scanExtensions(n);
            else throw i;
        }
        return s = await this.filterExtensionsMarkedForRemoval(s), s = await this.applyScanOptions(s, 1, {
            includeInvalid: e.includeInvalid,
            pickLatest: !0
        }), this.logService.trace("Scanned user extensions:", s.length), s;
    }
    async scanAllUserExtensions(e = {
        includeInvalid: !0,
        includeAllVersions: !0
    }) {
        const t = await this.createExtensionScannerInput(this.userExtensionsLocation, !1, 1, void 0, !0, void 0, this.getProductVersion()), n = await this.extensionsScanner.scanExtensions(t);
        return this.applyScanOptions(n, 1, {
            includeAllVersions: e.includeAllVersions,
            includeInvalid: e.includeInvalid
        });
    }
    async scanExtensionsUnderDevelopment(e, t) {
        if (this.environmentService.isExtensionDevelopment && this.environmentService.extensionDevelopmentLocationURI) {
            const n = (await Promise.all(this.environmentService.extensionDevelopmentLocationURI.filter((r)=>r.scheme === $.file).map(async (r)=>{
                const s = await this.createExtensionScannerInput(r, !1, 1, t.language, !1, void 0, this.getProductVersion());
                return (await this.extensionsScanner.scanOneOrMultipleExtensions(s)).map((a)=>(a.type = e.find((o)=>pf(o.identifier, a.identifier))?.type ?? a.type, this.extensionsScanner.validate(a, s)));
            }))).flat();
            return this.applyScanOptions(n, "development", {
                includeInvalid: t.includeInvalid,
                pickLatest: !0
            });
        }
        return [];
    }
    async scanExistingExtension(e, t, n) {
        const r = await this.createExtensionScannerInput(e, !1, t, n.language, !0, void 0, this.getProductVersion()), s = await this.extensionsScanner.scanExtension(r);
        return !s || !n.includeInvalid && !s.isValid ? null : s;
    }
    async scanOneOrMultipleExtensions(e, t, n) {
        const r = await this.createExtensionScannerInput(e, !1, t, n.language, !0, void 0, this.getProductVersion()), s = await this.extensionsScanner.scanOneOrMultipleExtensions(r);
        return this.applyScanOptions(s, t, {
            includeInvalid: n.includeInvalid,
            pickLatest: !0
        });
    }
    async scanMultipleExtensions(e, t, n) {
        const r = [];
        return await Promise.all(e.map(async (s)=>{
            const i = await this.scanOneOrMultipleExtensions(s, t, n);
            r.push(...i);
        })), this.applyScanOptions(r, t, {
            includeInvalid: n.includeInvalid,
            pickLatest: !0
        });
    }
    async updateManifestMetadata(e, t) {
        const n = Ae(e, "package.json"), r = (await this.fileService.readFile(n)).value.toString(), s = JSON.parse(r);
        s.__metadata = {
            ...s.__metadata,
            ...t
        }, await this.fileService.writeFile(Ae(e, "package.json"), ae.fromString(JSON.stringify(s, null, "	")));
    }
    async initializeDefaultProfileExtensions() {
        try {
            await this.extensionsProfileScannerService.scanProfileExtensions(this.userDataProfilesService.defaultProfile.extensionsResource, {
                bailOutWhenFileNotFound: !0
            });
        } catch (e) {
            if (e instanceof hf && e.code === "ERROR_PROFILE_NOT_FOUND") await this.doInitializeDefaultProfileExtensions();
            else throw e;
        }
    }
    async doInitializeDefaultProfileExtensions() {
        return this.initializeDefaultProfileExtensionsPromise || (this.initializeDefaultProfileExtensionsPromise = (async ()=>{
            try {
                this.logService.info("Started initializing default profile extensions in extensions installation folder.", this.userExtensionsLocation.toString());
                const e = await this.scanAllUserExtensions({
                    includeInvalid: !0
                });
                if (e.length) await this.extensionsProfileScannerService.addExtensionsToProfile(e.map((t)=>[
                        t,
                        t.metadata
                    ]), this.userDataProfilesService.defaultProfile.extensionsResource);
                else try {
                    await this.fileService.createFile(this.userDataProfilesService.defaultProfile.extensionsResource, ae.fromString(JSON.stringify([])));
                } catch (t) {
                    ai(t) !== 1 && this.logService.warn("Failed to create default profile extensions manifest in extensions installation folder.", this.userExtensionsLocation.toString(), We(t));
                }
                this.logService.info("Completed initializing default profile extensions in extensions installation folder.", this.userExtensionsLocation.toString());
            } catch (e) {
                this.logService.error(e);
            } finally{
                this.initializeDefaultProfileExtensionsPromise = void 0;
            }
        })()), this.initializeDefaultProfileExtensionsPromise;
    }
    async applyScanOptions(e, t, n = {}) {
        return n.includeAllVersions || (e = this.dedupExtensions(t === 0 ? e : void 0, t === 1 ? e : void 0, t === "development" ? e : void 0, await this.getTargetPlatform(), !!n.pickLatest)), n.includeInvalid || (e = e.filter((r)=>r.isValid)), e.sort((r, s)=>{
            const i = _t(r.location.fsPath), a = _t(s.location.fsPath);
            return i < a ? -1 : i > a ? 1 : 0;
        });
    }
    dedupExtensions(e, t, n, r, s) {
        const i = (o, l, d)=>{
            if (o.isValid && !l.isValid) return !1;
            if (o.isValid === l.isValid) {
                if (s && zge(o.manifest.version, l.manifest.version)) return this.logService.debug(`Skipping extension ${l.location.path} with lower version ${l.manifest.version} in favour of ${o.location.path} with version ${o.manifest.version}`), !1;
                if (Jge(o.manifest.version, l.manifest.version)) {
                    if (o.type === 0) return this.logService.debug(`Skipping extension ${l.location.path} in favour of system extension ${o.location.path} with same version`), !1;
                    if (o.targetPlatform === r) return this.logService.debug(`Skipping extension ${l.location.path} from different target platform ${l.targetPlatform}`), !1;
                }
            }
            return d ? this.logService.warn(`Overwriting user extension ${o.location.path} with ${l.location.path}.`) : this.logService.debug(`Overwriting user extension ${o.location.path} with ${l.location.path}.`), !0;
        }, a = new Zfe;
        return e?.forEach((o)=>{
            const l = a.get(o.identifier.id);
            (!l || i(l, o, !1)) && a.set(o.identifier.id, o);
        }), t?.forEach((o)=>{
            const l = a.get(o.identifier.id);
            if (!l && e && o.type === 0) {
                this.logService.debug(`Skipping obsolete system extension ${o.location.path}.`);
                return;
            }
            (!l || i(l, o, !1)) && a.set(o.identifier.id, o);
        }), n?.forEach((o)=>{
            const l = a.get(o.identifier.id);
            (!l || i(l, o, !0)) && a.set(o.identifier.id, o), a.set(o.identifier.id, o);
        }), [
            ...a.values()
        ];
    }
    async scanDefaultSystemExtensions(e) {
        this.logService.trace("Started scanning system extensions");
        const t = await this.createExtensionScannerInput(this.systemExtensionsLocation, !1, 0, e, !0, void 0, this.getProductVersion()), r = await (t.devMode ? this.extensionsScanner : this.systemExtensionsCachedScanner).scanExtensions(t);
        return this.logService.trace("Scanned system extensions:", r.length), r;
    }
    async scanDevSystemExtensions(e, t) {
        const n = this.environmentService.isBuilt ? [] : this.productService.builtInExtensions;
        if (!n?.length) return [];
        this.logService.trace("Started scanning dev system extensions");
        const r = t ? await this.getBuiltInExtensionControl() : {}, s = [], i = x.file(on(L(Jt.asFileUri("").fsPath, "..", ".build", "builtInExtensions")));
        for (const o of n){
            const l = r[o.name] || "marketplace";
            switch(l){
                case "disabled":
                    break;
                case "marketplace":
                    s.push(Ae(i, o.name));
                    break;
                default:
                    s.push(x.file(l));
                    break;
            }
        }
        const a = await Promise.all(s.map(async (o)=>this.extensionsScanner.scanExtension(await this.createExtensionScannerInput(o, !1, 0, e, !0, void 0, this.getProductVersion()))));
        return this.logService.trace("Scanned dev system extensions:", a.length), wn(a);
    }
    async getBuiltInExtensionControl() {
        try {
            const e = await this.fileService.readFile(this.extensionsControlLocation);
            return JSON.parse(e.value.toString());
        } catch  {
            return {};
        }
    }
    async createExtensionScannerInput(e, t, n, r, s, i, a) {
        const o = await this.getTranslations(r ?? Rs), l = await this.getMtime(e), d = t && !this.uriIdentityService.extUri.isEqual(e, this.userDataProfilesService.defaultProfile.extensionsResource) ? this.userDataProfilesService.defaultProfile.extensionsResource : void 0, u = d ? await this.getMtime(d) : void 0;
        return new Ou(e, l, d, u, t, i, n, s, a.vscodeVersion, a.date, this.productService.commit, !this.environmentService.isBuilt, r, o);
    }
    async getMtime(e) {
        try {
            const t = await this.fileService.stat(e);
            if (typeof t.mtime == "number") return t.mtime;
        } catch  {}
    }
    getProductVersion() {
        return {
            vscodeVersion: this.productService.vscodeVersion,
            version: this.productService.version,
            date: this.productService.date
        };
    }
    async filterExtensionsMarkedForRemoval(e) {
        if (!e.length) return e;
        const t = await this.readExtensionsMarkedForRemoval();
        if (!t.size) return e;
        const n = e.filter((s)=>!t.has(this.toExtensionKey(s))), r = e.length - n.length;
        return r > 0 && this.logService.info(`Ignoring ${r} user extension(s) marked for removal while scanning installed extensions.`), n;
    }
    toExtensionKey(e) {
        return `${e.identifier.id}-${e.manifest.version}${e.targetPlatform !== "undefined" ? `-${e.targetPlatform}` : ""}`;
    }
    async readExtensionsMarkedForRemoval() {
        try {
            const e = Ae(this.userExtensionsLocation, a_e), t = await this.fileService.readFile(e), n = JSON.parse(t.value.toString());
            if (typeof n != "object" || n === null || Array.isArray(n)) return new Set;
            const r = new Set;
            for (const [s, i] of Object.entries(n))i === !0 && r.add(s);
            return r;
        } catch (e) {
            return ai(e) !== 1 && this.logService.debug("Error while reading extensions marked for removal:", We(e)), new Set;
        }
    }
}, P1 = B([
    w(4, Ls),
    w(5, Du),
    w(6, cn),
    w(7, Z),
    w(8, si),
    w(9, et),
    w(10, Br),
    w(11, ni)
], P1), Ou = class {
    constructor(e, t, n, r, s, i, a, o, l, d, u, m, f, v){
        this.location = e, this.mtime = t, this.applicationExtensionslocation = n, this.applicationExtensionslocationMtime = r, this.profile = s, this.profileScanOptions = i, this.type = a, this.validate = o, this.productVersion = l, this.productDate = d, this.productCommit = u, this.devMode = m, this.language = f, this.translations = v;
    }
    static createNlsConfiguration(e) {
        return {
            language: e.language,
            pseudo: e.language === "pseudo",
            devMode: e.devMode,
            translations: e.translations
        };
    }
    static equals(e, t) {
        return $R(e.location, t.location) && e.mtime === t.mtime && $R(e.applicationExtensionslocation, t.applicationExtensionslocation) && e.applicationExtensionslocationMtime === t.applicationExtensionslocationMtime && e.profile === t.profile && Bs(e.profileScanOptions, t.profileScanOptions) && e.type === t.type && e.validate === t.validate && e.productVersion === t.productVersion && e.productDate === t.productDate && e.productCommit === t.productCommit && e.devMode === t.devMode && e.language === t.language && A2.equals(e.translations, t.translations);
    }
}, gf = class extends J {
    constructor(e, t, n, r, s, i){
        super(), this.extensionsProfileScannerService = e, this.uriIdentityService = t, this.fileService = n, this.environmentService = s, this.logService = i, this.extensionsEnabledWithApiProposalVersion = r.extensionsEnabledWithApiProposalVersion?.map((a)=>a.toLowerCase()) ?? [];
    }
    async scanExtensions(e) {
        return e.profile ? this.scanExtensionsFromProfile(e) : this.scanExtensionsFromLocation(e);
    }
    async scanExtensionsFromLocation(e) {
        const t = await this.fileService.resolve(e.location);
        if (!t.children?.length) return [];
        const n = await Promise.all(t.children.map(async (r)=>{
            if (!r.isDirectory || e.type === 1 && Mi(r.resource).indexOf(".") === 0) return null;
            const s = new Ou(r.resource, e.mtime, e.applicationExtensionslocation, e.applicationExtensionslocationMtime, e.profile, e.profileScanOptions, e.type, e.validate, e.productVersion, e.productDate, e.productCommit, e.devMode, e.language, e.translations);
            return this.scanExtension(s);
        }));
        return wn(n).sort((r, s)=>r.location.path < s.location.path ? -1 : 1);
    }
    async scanExtensionsFromProfile(e) {
        let t = await this.scanExtensionsFromProfileResource(e.location, ()=>!0, e);
        if (e.applicationExtensionslocation && !this.uriIdentityService.extUri.isEqual(e.location, e.applicationExtensionslocation)) {
            t = t.filter((r)=>!r.metadata?.isApplicationScoped);
            const n = await this.scanExtensionsFromProfileResource(e.applicationExtensionslocation, (r)=>!!r.metadata?.isBuiltin || !!r.metadata?.isApplicationScoped, e);
            t.push(...n);
        }
        return t;
    }
    async scanExtensionsFromProfileResource(e, t, n) {
        const r = await this.extensionsProfileScannerService.scanProfileExtensions(e, n.profileScanOptions);
        if (!r.length) return [];
        const s = await Promise.all(r.map(async (i)=>{
            if (t(i)) {
                const a = new Ou(i.location, n.mtime, n.applicationExtensionslocation, n.applicationExtensionslocationMtime, n.profile, n.profileScanOptions, n.type, n.validate, n.productVersion, n.productDate, n.productCommit, n.devMode, n.language, n.translations);
                return this.scanExtension(a, i);
            }
            return null;
        }));
        return wn(s);
    }
    async scanOneOrMultipleExtensions(e) {
        try {
            if (await this.fileService.exists(Ae(e.location, "package.json"))) {
                const t = await this.scanExtension(e);
                return t ? [
                    t
                ] : [];
            } else return await this.scanExtensions(e);
        } catch (t) {
            return this.logService.error(`Error scanning extensions at ${e.location.path}:`, We(t)), [];
        }
    }
    async scanExtension(e, t) {
        const n = [];
        let r = !0, s;
        try {
            s = await this.scanExtensionManifest(e.location);
        } catch (m) {
            if (t) {
                n.push([
                    rt.Error,
                    We(m)
                ]), r = !1;
                const [f, v] = t.identifier.id.split(".");
                s = {
                    name: v,
                    publisher: f,
                    version: t.version,
                    engines: {
                        vscode: ""
                    }
                };
            } else return e.type !== 0 && this.logService.error(m), null;
        }
        s.publisher || (s.publisher = w2);
        let i;
        t ? i = {
            ...t.metadata,
            size: s.__metadata?.size
        } : s.__metadata && (i = {
            installedTimestamp: s.__metadata.installedTimestamp,
            size: s.__metadata.size,
            targetPlatform: s.__metadata.targetPlatform
        }), delete s.__metadata;
        const a = CZe(s.publisher, s.name), o = i?.id ? {
            id: a,
            uuid: i.id
        } : {
            id: a
        }, l = i?.isSystem ? 0 : e.type, d = l === 0 || !!i?.isBuiltin;
        try {
            s = await this.translateManifest(e.location, s, Ou.createNlsConfiguration(e));
        } catch (m) {
            this.logService.warn("Failed to translate manifest", We(m));
        }
        let u = {
            type: l,
            identifier: o,
            manifest: s,
            location: e.location,
            isBuiltin: d,
            targetPlatform: i?.targetPlatform ?? "undefined",
            publisherDisplayName: i?.publisherDisplayName,
            metadata: i,
            isValid: r,
            validations: n,
            preRelease: !!i?.preRelease
        };
        return e.validate && (u = this.validate(u, e)), s.enabledApiProposals && (!this.environmentService.isBuilt || this.extensionsEnabledWithApiProposalVersion.includes(a.toLowerCase())) && (s.originalEnabledApiProposals = s.enabledApiProposals, s.enabledApiProposals = wZe([
            ...s.enabledApiProposals
        ])), u;
    }
    validate(e, t) {
        let n = e.isValid;
        const r = this.environmentService.isBuilt && this.extensionsEnabledWithApiProposalVersion.includes(e.identifier.id.toLowerCase()), s = UZe(t.productVersion, t.productDate, t.location, e.manifest, e.isBuiltin, r);
        for (const [i, a] of s)i === rt.Error && (n = !1, this.logService.error(this.formatMessage(t.location, a)));
        return e.isValid = n, e.validations = [
            ...e.validations,
            ...s
        ], e;
    }
    async scanExtensionManifest(e) {
        const t = Ae(e, "package.json");
        let n;
        try {
            n = (await this.fileService.readFile(t)).value.toString();
        } catch (s) {
            throw ai(s) !== 1 && this.logService.error(this.formatMessage(e, E(1977, null, t.path, s.message))), s;
        }
        let r;
        try {
            r = JSON.parse(n);
        } catch (s) {
            const i = [];
            ia(n, i);
            for (const a of i)this.logService.error(this.formatMessage(e, E(1978, null, t.path, a.offset, a.length, b2(a.error))));
            throw s;
        }
        if (bl(r) !== "object") {
            const s = this.formatMessage(e, E(1979, null, t.path));
            throw this.logService.error(s), new Error(s);
        }
        return r;
    }
    async translateManifest(e, t, n) {
        const r = await this.getLocalizedMessages(e, t, n);
        if (r) try {
            const s = [], i = await this.resolveOriginalMessageBundle(r.default, s);
            if (s.length > 0) return s.forEach((o)=>{
                this.logService.error(this.formatMessage(e, E(1980, null, r.default?.path, b2(o.error))));
            }), t;
            if (bl(r) !== "object") return this.logService.error(this.formatMessage(e, E(1981, null, r.default?.path))), t;
            const a = r.values || Object.create(null);
            return GZe(this.logService, t, a, i);
        } catch  {}
        return t;
    }
    async getLocalizedMessages(e, t, n) {
        const r = Ae(e, "package.nls.json"), s = (l, d)=>{
            d.forEach((u)=>{
                this.logService.error(this.formatMessage(e, E(1982, null, l?.path, b2(u.error))));
            });
        }, i = (l)=>{
            this.logService.error(this.formatMessage(e, E(1983, null, l?.path)));
        }, a = `${t.publisher}.${t.name}`, o = n.translations[a];
        if (o) try {
            const l = x.file(o), d = (await this.fileService.readFile(l)).value.toString(), u = [], m = ia(d, u);
            return u.length > 0 ? (s(l, u), {
                values: void 0,
                default: r
            }) : bl(m) !== "object" ? (i(l), {
                values: void 0,
                default: r
            }) : {
                values: m.contents ? m.contents.package : void 0,
                default: r
            };
        } catch  {
            return {
                values: void 0,
                default: r
            };
        }
        else {
            if (!await this.fileService.exists(r)) return;
            let d;
            try {
                d = await this.findMessageBundles(e, n);
            } catch  {
                return;
            }
            if (!d.localized) return {
                values: void 0,
                default: d.original
            };
            try {
                const u = (await this.fileService.readFile(d.localized)).value.toString(), m = [], f = ia(u, m);
                return m.length > 0 ? (s(d.localized, m), {
                    values: void 0,
                    default: d.original
                }) : bl(f) !== "object" ? (i(d.localized), {
                    values: void 0,
                    default: d.original
                }) : {
                    values: f,
                    default: d.original
                };
            } catch  {
                return {
                    values: void 0,
                    default: d.original
                };
            }
        }
    }
    async resolveOriginalMessageBundle(e, t) {
        if (e) try {
            const n = (await this.fileService.readFile(e)).value.toString();
            return ia(n, t);
        } catch  {}
    }
    findMessageBundles(e, t) {
        return new Promise((n, r)=>{
            const s = (i)=>{
                const a = Ae(e, `package.nls.${i}.json`);
                this.fileService.exists(a).then((o)=>{
                    o && n({
                        localized: a,
                        original: Ae(e, "package.nls.json")
                    });
                    const l = i.lastIndexOf("-");
                    l === -1 ? n({
                        localized: Ae(e, "package.nls.json"),
                        original: null
                    }) : (i = i.substring(0, l), s(i));
                });
            };
            if (t.devMode || t.pseudo || !t.language) return n({
                localized: Ae(e, "package.nls.json"),
                original: null
            });
            s(t.language);
        });
    }
    formatMessage(e, t) {
        return `[${e.path}]: ${t}`;
    }
}, gf = B([
    w(0, Du),
    w(1, Br),
    w(2, cn),
    w(3, et),
    w(4, si),
    w(5, Z)
], gf), ff = class extends gf {
    constructor(e, t, n, r, s, i, a, o){
        super(n, r, s, i, a, o), this.currentProfile = e, this.userDataProfilesService = t, this.cacheValidatorThrottler = this._register(new pa(3e3)), this._onDidChangeCache = this._register(new N), this.onDidChangeCache = this._onDidChangeCache.event;
    }
    async scanExtensions(e) {
        const t = this.getCacheFile(e), n = await this.readExtensionCache(t);
        if (this.input = e, n && n.input && Ou.equals(n.input, this.input)) return this.logService.debug("Using cached extensions scan result", e.type === 0 ? "system" : "user", e.location.toString()), this.cacheValidatorThrottler.trigger(()=>this.validateCache()), n.result.map((s)=>(s.location = x.revive(s.location), s));
        const r = await super.scanExtensions(e);
        return await this.writeExtensionCache(t, {
            input: e,
            result: r
        }), r;
    }
    async readExtensionCache(e) {
        try {
            const t = await this.fileService.readFile(e), n = JSON.parse(t.value.toString());
            return {
                result: n.result,
                input: za(n.input)
            };
        } catch (t) {
            this.logService.debug("Error while reading the extension cache file:", e.path, We(t));
        }
        return null;
    }
    async writeExtensionCache(e, t) {
        try {
            await this.fileService.writeFile(e, ae.fromString(JSON.stringify(t)));
        } catch (n) {
            this.logService.debug("Error while writing the extension cache file:", e.path, We(n));
        }
    }
    async validateCache() {
        if (!this.input) return;
        const e = this.getCacheFile(this.input), t = await this.readExtensionCache(e);
        if (!t) return;
        const n = t.result, r = JSON.parse(JSON.stringify(await super.scanExtensions(this.input)));
        if (!Bs(r, n)) try {
            this.logService.info("Invalidating Cache", n, r), await this.fileService.del(e), this._onDidChangeCache.fire();
        } catch (s) {
            this.logService.error(s);
        }
    }
    getCacheFile(e) {
        const t = this.getProfile(e);
        return this.uriIdentityService.extUri.joinPath(t.cacheHome, e.type === 0 ? Qfe : Xfe);
    }
    getProfile(e) {
        return e.type === 0 ? this.userDataProfilesService.defaultProfile : e.profile ? this.uriIdentityService.extUri.isEqual(e.location, this.currentProfile.extensionsResource) ? this.currentProfile : this.userDataProfilesService.profiles.find((t)=>this.uriIdentityService.extUri.isEqual(e.location, t.extensionsResource)) ?? this.currentProfile : this.userDataProfilesService.defaultProfile;
    }
}, ff = B([
    w(1, Ls),
    w(2, Du),
    w(3, Br),
    w(4, cn),
    w(5, et),
    w(6, si),
    w(7, Z)
], ff), c_e = class extends P1 {
    constructor(e, t, n, r, s, i, a, o, l, d, u, m){
        super(e, t, Ae(n, ".cursor-dev", "extensions", "control.json"), r, s, i, a, o, l, d, u, m), this.translationsPromise = (async ()=>{
            if (Yb) try {
                const f = await this.fileService.readFile(x.file(Yb));
                return JSON.parse(f.value.toString());
            } catch  {}
            return Object.create(null);
        })();
    }
    getTranslations(e) {
        return this.translationsPromise;
    }
};

}

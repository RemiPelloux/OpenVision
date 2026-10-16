import { AMw } from "./BA.js";
import { VB0 } from "./BPv.js";
import { D, Di, Ei, Ga, Gt, Mm, Qe, Tr, bM, fCo, st, tt, uf } from "./Iwo.js";
import { ID, aY, jn } from "./SZu.js";
import { vKt } from "./Ycg.js";
import { bo } from "./arrays.js";
import { nW, qn } from "./async.js";
import { cy, fb } from "./environment.js";
import { iF } from "./extensionManagementUtil.js";
import { YB0 } from "./extensionNls.js";
import { eNn } from "./extensionValidator.js";
import { B5n, Irc, d4i } from "./extensionsProfileScannerService.js";
import { DMp, E3a, MMp, O4, Pw } from "./extensions_3.js";
import { is, ms } from "./files.js";
import { Qc, dV, eKm } from "./gYa.js";
import { It, dn } from "./instantiation.js";
import { JI1 } from "./ipa.js";
import { aRi } from "./jsonErrorMessages.js";
import { $M } from "./json_2.js";
import { Ji, Li } from "./log.js";
import { Yq } from "./marshalling.js";
import { Ki, Ot, em } from "./network.js";
import { Bt } from "./nls.js";
import { cp } from "./objects.js";
import { Ku, Ul, Z0, nL } from "./path_2.js";
import { fc, hu } from "./productService.js";
import { Aa, Lr, Os, gu } from "./resources.js";
import { $9e, bKt, k_l } from "./semver_2.js";
import { Ua, ob } from "./severity_2.js";
import { E } from "./tslib.es6.js";
import { fn, rt } from "./uri.js";
import { Vp, nh } from "./uriIdentity.js";
import { F, JR, Re, gP } from "./userDataProfile.js";
import { IE, n4e } from "./yBp.js";
import { Rp } from "./ze.js";
var Arc, MOv, AJt, rDs, U5n, h4i, p4i, DOv;
export { AJt, Arc, DOv, MOv, U5n, h4i, p4i, rDs };
var __wakaru_m4i_initialized = false;
export function m4i() {
if (__wakaru_m4i_initialized) return;
__wakaru_m4i_initialized = true;
"use strict";
E(), bo(), qn(), cp(), Ga(), Ei(), $M(), aRi(), Qe(), Ki(), Ul(), Di(), Lr(), $9e(), ob(), fn(), Bt(), fb(), iF(), Pw(), eNn(), ms(), It(), Ji(), hu(), Gt(), Yq(), Irc(), JR(), Vp(), YB0(), ((t)=>{
    function e(n, i) {
        if (n === i) return !0;
        const r = Object.keys(n), s = new Set;
        for (const o of Object.keys(i))s.add(o);
        if (r.length !== s.size) return !1;
        for (const o of r){
            if (n[o] !== i[o]) return !1;
            s.delete(o);
        }
        return s.size === 0;
    }
    t.equals = e;
})(Arc || (Arc = {})), MOv = ".obsolete", AJt = jn("IExtensionsScannerService"), rDs = class extends st {
    constructor(t, e, n, i, r, s, o, a, l, c, u, d){
        super(), this.systemExtensionsLocation = t, this.userExtensionsLocation = e, this.extensionsControlLocation = n, this.currentProfile = i, this.userDataProfilesService = r, this.extensionsProfileScannerService = s, this.fileService = o, this.logService = a, this.environmentService = l, this.productService = c, this.uriIdentityService = u, this.instantiationService = d, this._onDidChangeCache = this._register(new tt), this.onDidChangeCache = this._onDidChangeCache.event, this.initializeDefaultProfileExtensionsPromise = void 0, this.systemExtensionsCachedScanner = this._register(this.instantiationService.createInstance(p4i, this.currentProfile)), this.userExtensionsCachedScanner = this._register(this.instantiationService.createInstance(p4i, this.currentProfile)), this.extensionsScanner = this._register(this.instantiationService.createInstance(h4i)), this._register(this.systemExtensionsCachedScanner.onDidChangeCache(()=>this._onDidChangeCache.fire(0))), this._register(this.userExtensionsCachedScanner.onDidChangeCache(()=>this._onDidChangeCache.fire(1)));
    }
    getTargetPlatform() {
        return this._targetPlatformPromise || (this._targetPlatformPromise = eKm(this.fileService, this.logService)), this._targetPlatformPromise;
    }
    async scanAllExtensions(t, e) {
        const [n, i] = await Promise.all([
            this.scanSystemExtensions(t),
            this.scanUserExtensions(e)
        ]);
        return this.dedupExtensions(n, i, [], await this.getTargetPlatform(), !0);
    }
    async scanSystemExtensions(t) {
        const e = [];
        e.push(this.scanDefaultSystemExtensions(t.language)), e.push(this.scanDevSystemExtensions(t.language, !!t.checkControlFile));
        const [n, i] = await Promise.all(e);
        return this.applyScanOptions([
            ...n,
            ...i
        ], 0, {
            pickLatest: !1
        });
    }
    async scanUserExtensions(t) {
        this.logService.trace("Started scanning user extensions", t.profileLocation);
        const e = this.uriIdentityService.extUri.isEqual(t.profileLocation, this.userDataProfilesService.defaultProfile.extensionsResource) ? {
            bailOutWhenFileNotFound: !0
        } : void 0, n = await this.createExtensionScannerInput(t.profileLocation, !0, 1, t.language, !0, e, t.productVersion ?? this.getProductVersion()), i = t.useCache && !n.devMode ? this.userExtensionsCachedScanner : this.extensionsScanner;
        let r;
        try {
            r = await i.scanExtensions(n);
        } catch (s) {
            if (s instanceof d4i && s.code === "ERROR_PROFILE_NOT_FOUND") await this.doInitializeDefaultProfileExtensions(), r = await i.scanExtensions(n);
            else throw s;
        }
        return r = await this.filterExtensionsMarkedForRemoval(r), r = await this.applyScanOptions(r, 1, {
            includeInvalid: t.includeInvalid,
            pickLatest: !0
        }), this.logService.trace("Scanned user extensions:", r.length), r;
    }
    async scanAllUserExtensions(t = {
        includeInvalid: !0,
        includeAllVersions: !0
    }) {
        const e = await this.createExtensionScannerInput(this.userExtensionsLocation, !1, 1, void 0, !0, void 0, this.getProductVersion()), n = await this.extensionsScanner.scanExtensions(e);
        return this.applyScanOptions(n, 1, {
            includeAllVersions: t.includeAllVersions,
            includeInvalid: t.includeInvalid
        });
    }
    async scanExtensionsUnderDevelopment(t, e) {
        if (this.environmentService.isExtensionDevelopment && this.environmentService.extensionDevelopmentLocationURI) {
            const n = (await Promise.all(this.environmentService.extensionDevelopmentLocationURI.filter((i)=>i.scheme === Ot.file).map(async (i)=>{
                const r = await this.createExtensionScannerInput(i, !1, 1, e.language, !1, void 0, this.getProductVersion());
                return (await this.extensionsScanner.scanOneOrMultipleExtensions(r)).map((o)=>(o.type = t.find((a)=>Qc(a.identifier, o.identifier))?.type ?? o.type, this.extensionsScanner.validate(o, r)));
            }))).flat();
            return this.applyScanOptions(n, "development", {
                includeInvalid: e.includeInvalid,
                pickLatest: !0
            });
        }
        return [];
    }
    async scanExistingExtension(t, e, n) {
        const i = await this.createExtensionScannerInput(t, !1, e, n.language, !0, void 0, this.getProductVersion()), r = await this.extensionsScanner.scanExtension(i);
        return !r || !n.includeInvalid && !r.isValid ? null : r;
    }
    async scanOneOrMultipleExtensions(t, e, n) {
        const i = await this.createExtensionScannerInput(t, !1, e, n.language, !0, void 0, this.getProductVersion()), r = await this.extensionsScanner.scanOneOrMultipleExtensions(i);
        return this.applyScanOptions(r, e, {
            includeInvalid: n.includeInvalid,
            pickLatest: !0
        });
    }
    async scanMultipleExtensions(t, e, n) {
        const i = [];
        return await Promise.all(t.map(async (r)=>{
            const s = await this.scanOneOrMultipleExtensions(r, e, n);
            i.push(...s);
        })), this.applyScanOptions(i, e, {
            includeInvalid: n.includeInvalid,
            pickLatest: !0
        });
    }
    async updateManifestMetadata(t, e) {
        const n = Os(t, "package.json"), i = (await this.fileService.readFile(n)).value.toString(), r = JSON.parse(i);
        r.__metadata = {
            ...r.__metadata,
            ...e
        }, await this.fileService.writeFile(Os(t, "package.json"), Tr.fromString(JSON.stringify(r, null, "	")));
    }
    async initializeDefaultProfileExtensions() {
        try {
            await this.extensionsProfileScannerService.scanProfileExtensions(this.userDataProfilesService.defaultProfile.extensionsResource, {
                bailOutWhenFileNotFound: !0
            });
        } catch (t) {
            if (t instanceof d4i && t.code === "ERROR_PROFILE_NOT_FOUND") await this.doInitializeDefaultProfileExtensions();
            else throw t;
        }
    }
    async doInitializeDefaultProfileExtensions() {
        return this.initializeDefaultProfileExtensionsPromise || (this.initializeDefaultProfileExtensionsPromise = (async ()=>{
            try {
                this.logService.info("Started initializing default profile extensions in extensions installation folder.", this.userExtensionsLocation.toString());
                const t = await this.scanAllUserExtensions({
                    includeInvalid: !0
                });
                if (t.length) await this.extensionsProfileScannerService.addExtensionsToProfile(t.map((e)=>[
                        e,
                        e.metadata
                    ]), this.userDataProfilesService.defaultProfile.extensionsResource);
                else try {
                    await this.fileService.createFile(this.userDataProfilesService.defaultProfile.extensionsResource, Tr.fromString(JSON.stringify([])));
                } catch (e) {
                    ID(e) !== 1 && this.logService.warn("Failed to create default profile extensions manifest in extensions installation folder.", this.userExtensionsLocation.toString(), uf(e));
                }
                this.logService.info("Completed initializing default profile extensions in extensions installation folder.", this.userExtensionsLocation.toString());
            } catch (t) {
                this.logService.error(t);
            } finally{
                this.initializeDefaultProfileExtensionsPromise = void 0;
            }
        })()), this.initializeDefaultProfileExtensionsPromise;
    }
    async applyScanOptions(t, e, n = {}) {
        return n.includeAllVersions || (t = this.dedupExtensions(e === 0 ? t : void 0, e === 1 ? t : void 0, e === "development" ? t : void 0, await this.getTargetPlatform(), !!n.pickLatest)), n.includeInvalid || (t = t.filter((i)=>i.isValid)), t.sort((i, r)=>{
            const s = Ku(i.location.fsPath), o = Ku(r.location.fsPath);
            return s < o ? -1 : s > o ? 1 : 0;
        });
    }
    dedupExtensions(t, e, n, i, r) {
        const s = (a, l, c)=>{
            if (a.isValid && !l.isValid) return !1;
            if (a.isValid === l.isValid) {
                if (r && bKt(a.manifest.version, l.manifest.version)) return this.logService.debug(`Skipping extension ${l.location.path} with lower version ${l.manifest.version} in favour of ${a.location.path} with version ${a.manifest.version}`), !1;
                if (k_l(a.manifest.version, l.manifest.version)) {
                    if (a.type === 0) return this.logService.debug(`Skipping extension ${l.location.path} in favour of system extension ${a.location.path} with same version`), !1;
                    if (a.targetPlatform === i) return this.logService.debug(`Skipping extension ${l.location.path} from different target platform ${l.targetPlatform}`), !1;
                }
            }
            return c ? this.logService.warn(`Overwriting user extension ${a.location.path} with ${l.location.path}.`) : this.logService.debug(`Overwriting user extension ${a.location.path} with ${l.location.path}.`), !0;
        }, o = new O4;
        return t?.forEach((a)=>{
            const l = o.get(a.identifier.id);
            (!l || s(l, a, !1)) && o.set(a.identifier.id, a);
        }), e?.forEach((a)=>{
            const l = o.get(a.identifier.id);
            if (!l && t && a.type === 0) {
                this.logService.debug(`Skipping obsolete system extension ${a.location.path}.`);
                return;
            }
            (!l || s(l, a, !1)) && o.set(a.identifier.id, a);
        }), n?.forEach((a)=>{
            const l = o.get(a.identifier.id);
            (!l || s(l, a, !0)) && o.set(a.identifier.id, a), o.set(a.identifier.id, a);
        }), [
            ...o.values()
        ];
    }
    async scanDefaultSystemExtensions(t) {
        this.logService.trace("Started scanning system extensions");
        const e = await this.createExtensionScannerInput(this.systemExtensionsLocation, !1, 0, t, !0, void 0, this.getProductVersion()), i = await (e.devMode ? this.extensionsScanner : this.systemExtensionsCachedScanner).scanExtensions(e);
        return this.logService.trace("Scanned system extensions:", i.length), i;
    }
    async scanDevSystemExtensions(t, e) {
        const n = this.environmentService.isBuilt ? [] : this.productService.builtInExtensions;
        if (!n?.length) return [];
        this.logService.trace("Started scanning dev system extensions");
        const i = e ? await this.getBuiltInExtensionControl() : {}, r = [], s = rt.file(nL(Z0(em.asFileUri("").fsPath, "..", ".build", "builtInExtensions")));
        for (const a of n){
            const l = i[a.name] || "marketplace";
            switch(l){
                case "disabled":
                    break;
                case "marketplace":
                    r.push(Os(s, a.name));
                    break;
                default:
                    r.push(rt.file(l));
                    break;
            }
        }
        const o = await Promise.all(r.map(async (a)=>this.extensionsScanner.scanExtension(await this.createExtensionScannerInput(a, !1, 0, t, !0, void 0, this.getProductVersion()))));
        return this.logService.trace("Scanned dev system extensions:", o.length), Mm(o);
    }
    async getBuiltInExtensionControl() {
        try {
            const t = await this.fileService.readFile(this.extensionsControlLocation);
            return JSON.parse(t.value.toString());
        } catch  {
            return {};
        }
    }
    async createExtensionScannerInput(t, e, n, i, r, s, o) {
        const a = await this.getTranslations(i ?? bM), l = await this.getMtime(t), c = e && !this.uriIdentityService.extUri.isEqual(t, this.userDataProfilesService.defaultProfile.extensionsResource) ? this.userDataProfilesService.defaultProfile.extensionsResource : void 0, u = c ? await this.getMtime(c) : void 0;
        return new U5n(t, l, c, u, e, s, n, r, o.vscodeVersion, o.date, this.productService.commit, !this.environmentService.isBuilt, i, a);
    }
    async getMtime(t) {
        try {
            const e = await this.fileService.stat(t);
            if (typeof e.mtime == "number") return e.mtime;
        } catch  {}
    }
    getProductVersion() {
        return {
            vscodeVersion: this.productService.vscodeVersion,
            version: this.productService.version,
            date: this.productService.date
        };
    }
    async filterExtensionsMarkedForRemoval(t) {
        if (!t.length) return t;
        const e = await this.readExtensionsMarkedForRemoval();
        if (!e.size) return t;
        const n = t.filter((r)=>!e.has(this.toExtensionKey(r))), i = t.length - n.length;
        return i > 0 && this.logService.info(`Ignoring ${i} user extension(s) marked for removal while scanning installed extensions.`), n;
    }
    toExtensionKey(t) {
        return `${t.identifier.id}-${t.manifest.version}${t.targetPlatform !== "undefined" ? `-${t.targetPlatform}` : ""}`;
    }
    async readExtensionsMarkedForRemoval() {
        try {
            const t = Os(this.userExtensionsLocation, MOv), e = await this.fileService.readFile(t), n = JSON.parse(e.value.toString());
            if (typeof n != "object" || n === null || Array.isArray(n)) return new Set;
            const i = new Set;
            for (const [r, s] of Object.entries(n))s === !0 && i.add(r);
            return i;
        } catch (t) {
            return ID(t) !== 1 && this.logService.debug("Error while reading extensions marked for removal:", uf(t)), new Set;
        }
    }
}, rDs = Re([
    F(4, gP),
    F(5, B5n),
    F(6, is),
    F(7, Li),
    F(8, cy),
    F(9, fc),
    F(10, nh),
    F(11, dn)
], rDs), U5n = class {
    constructor(t, e, n, i, r, s, o, a, l, c, u, d, h, p){
        this.location = t, this.mtime = e, this.applicationExtensionslocation = n, this.applicationExtensionslocationMtime = i, this.profile = r, this.profileScanOptions = s, this.type = o, this.validate = a, this.productVersion = l, this.productDate = c, this.productCommit = u, this.devMode = d, this.language = h, this.translations = p;
    }
    static createNlsConfiguration(t) {
        return {
            language: t.language,
            pseudo: t.language === "pseudo",
            devMode: t.devMode,
            translations: t.translations
        };
    }
    static equals(t, e) {
        return gu(t.location, e.location) && t.mtime === e.mtime && gu(t.applicationExtensionslocation, e.applicationExtensionslocation) && t.applicationExtensionslocationMtime === e.applicationExtensionslocationMtime && t.profile === e.profile && Rp(t.profileScanOptions, e.profileScanOptions) && t.type === e.type && t.validate === e.validate && t.productVersion === e.productVersion && t.productDate === e.productDate && t.productCommit === e.productCommit && t.devMode === e.devMode && t.language === e.language && Arc.equals(t.translations, e.translations);
    }
}, h4i = class extends st {
    constructor(t, e, n, i, r, s){
        super(), this.extensionsProfileScannerService = t, this.uriIdentityService = e, this.fileService = n, this.environmentService = r, this.logService = s, this.extensionsEnabledWithApiProposalVersion = i.extensionsEnabledWithApiProposalVersion?.map((o)=>o.toLowerCase()) ?? [];
    }
    async scanExtensions(t) {
        return t.profile ? this.scanExtensionsFromProfile(t) : this.scanExtensionsFromLocation(t);
    }
    async scanExtensionsFromLocation(t) {
        const e = await this.fileService.resolve(t.location);
        if (!e.children?.length) return [];
        const n = await Promise.all(e.children.map(async (i)=>{
            if (!i.isDirectory || t.type === 1 && Aa(i.resource).indexOf(".") === 0) return null;
            const r = new U5n(i.resource, t.mtime, t.applicationExtensionslocation, t.applicationExtensionslocationMtime, t.profile, t.profileScanOptions, t.type, t.validate, t.productVersion, t.productDate, t.productCommit, t.devMode, t.language, t.translations);
            return this.scanExtension(r);
        }));
        return Mm(n).sort((i, r)=>i.location.path < r.location.path ? -1 : 1);
    }
    async scanExtensionsFromProfile(t) {
        let e = await this.scanExtensionsFromProfileResource(t.location, ()=>!0, t);
        if (t.applicationExtensionslocation && !this.uriIdentityService.extUri.isEqual(t.location, t.applicationExtensionslocation)) {
            e = e.filter((i)=>!i.metadata?.isApplicationScoped);
            const n = await this.scanExtensionsFromProfileResource(t.applicationExtensionslocation, (i)=>!!i.metadata?.isBuiltin || !!i.metadata?.isApplicationScoped, t);
            e.push(...n);
        }
        return e;
    }
    async scanExtensionsFromProfileResource(t, e, n) {
        const i = await this.extensionsProfileScannerService.scanProfileExtensions(t, n.profileScanOptions);
        if (!i.length) return [];
        const r = await Promise.all(i.map(async (s)=>{
            if (e(s)) {
                const o = new U5n(s.location, n.mtime, n.applicationExtensionslocation, n.applicationExtensionslocationMtime, n.profile, n.profileScanOptions, n.type, n.validate, n.productVersion, n.productDate, n.productCommit, n.devMode, n.language, n.translations);
                return this.scanExtension(o, s);
            }
            return null;
        }));
        return Mm(r);
    }
    async scanOneOrMultipleExtensions(t) {
        try {
            if (await this.fileService.exists(Os(t.location, "package.json"))) {
                const e = await this.scanExtension(t);
                return e ? [
                    e
                ] : [];
            } else return await this.scanExtensions(t);
        } catch (e) {
            return this.logService.error(`Error scanning extensions at ${t.location.path}:`, uf(e)), [];
        }
    }
    async scanExtension(t, e) {
        const n = [];
        let i = !0, r;
        try {
            r = await this.scanExtensionManifest(t.location);
        } catch (d) {
            if (e) {
                n.push([
                    Ua.Error,
                    uf(d)
                ]), i = !1;
                const [h, p] = e.identifier.id.split(".");
                r = {
                    name: p,
                    publisher: h,
                    version: e.version,
                    engines: {
                        vscode: ""
                    }
                };
            } else return t.type !== 0 && this.logService.error(d), null;
        }
        r.publisher || (r.publisher = E3a);
        let s;
        e ? s = {
            ...e.metadata,
            size: r.__metadata?.size
        } : r.__metadata && (s = {
            installedTimestamp: r.__metadata.installedTimestamp,
            size: r.__metadata.size,
            targetPlatform: r.__metadata.targetPlatform
        }), delete r.__metadata;
        const o = dV(r.publisher, r.name), a = s?.id ? {
            id: o,
            uuid: s.id
        } : {
            id: o
        }, l = s?.isSystem ? 0 : t.type, c = l === 0 || !!s?.isBuiltin;
        try {
            r = await this.translateManifest(t.location, r, U5n.createNlsConfiguration(t));
        } catch (d) {
            this.logService.warn("Failed to translate manifest", uf(d));
        }
        let u = {
            type: l,
            identifier: a,
            manifest: r,
            location: t.location,
            isBuiltin: c,
            targetPlatform: s?.targetPlatform ?? "undefined",
            publisherDisplayName: s?.publisherDisplayName,
            metadata: s,
            isValid: i,
            validations: n,
            preRelease: !!s?.preRelease
        };
        return t.validate && (u = this.validate(u, t)), r.enabledApiProposals && (!this.environmentService.isBuilt || this.extensionsEnabledWithApiProposalVersion.includes(o.toLowerCase())) && (r.originalEnabledApiProposals = r.enabledApiProposals, r.enabledApiProposals = JI1([
            ...r.enabledApiProposals
        ])), u;
    }
    validate(t, e) {
        let n = t.isValid;
        const i = this.environmentService.isBuilt && this.extensionsEnabledWithApiProposalVersion.includes(t.identifier.id.toLowerCase()), r = AMw(e.productVersion, e.productDate, e.location, t.manifest, t.isBuiltin, i);
        for (const [s, o] of r)s === Ua.Error && (n = !1, this.logService.error(this.formatMessage(e.location, o)));
        return t.isValid = n, t.validations = [
            ...t.validations,
            ...r
        ], t;
    }
    async scanExtensionManifest(t) {
        const e = Os(t, "package.json");
        let n;
        try {
            n = (await this.fileService.readFile(e)).value.toString();
        } catch (r) {
            throw ID(r) !== 1 && this.logService.error(this.formatMessage(t, D(1977, null, e.path, r.message))), r;
        }
        let i;
        try {
            i = JSON.parse(n);
        } catch (r) {
            const s = [];
            IE(n, s);
            for (const o of s)this.logService.error(this.formatMessage(t, D(1978, null, e.path, o.offset, o.length, vKt(o.error))));
            throw r;
        }
        if (n4e(i) !== "object") {
            const r = this.formatMessage(t, D(1979, null, e.path));
            throw this.logService.error(r), new Error(r);
        }
        return i;
    }
    async translateManifest(t, e, n) {
        const i = await this.getLocalizedMessages(t, e, n);
        if (i) try {
            const r = [], s = await this.resolveOriginalMessageBundle(i.default, r);
            if (r.length > 0) return r.forEach((a)=>{
                this.logService.error(this.formatMessage(t, D(1980, null, i.default?.path, vKt(a.error))));
            }), e;
            if (n4e(i) !== "object") return this.logService.error(this.formatMessage(t, D(1981, null, i.default?.path))), e;
            const o = i.values || Object.create(null);
            return VB0(this.logService, e, o, s);
        } catch  {}
        return e;
    }
    async getLocalizedMessages(t, e, n) {
        const i = Os(t, "package.nls.json"), r = (l, c)=>{
            c.forEach((u)=>{
                this.logService.error(this.formatMessage(t, D(1982, null, l?.path, vKt(u.error))));
            });
        }, s = (l)=>{
            this.logService.error(this.formatMessage(t, D(1983, null, l?.path)));
        }, o = `${e.publisher}.${e.name}`, a = n.translations[o];
        if (a) try {
            const l = rt.file(a), c = (await this.fileService.readFile(l)).value.toString(), u = [], d = IE(c, u);
            return u.length > 0 ? (r(l, u), {
                values: void 0,
                default: i
            }) : n4e(d) !== "object" ? (s(l), {
                values: void 0,
                default: i
            }) : {
                values: d.contents ? d.contents.package : void 0,
                default: i
            };
        } catch  {
            return {
                values: void 0,
                default: i
            };
        }
        else {
            if (!await this.fileService.exists(i)) return;
            let c;
            try {
                c = await this.findMessageBundles(t, n);
            } catch  {
                return;
            }
            if (!c.localized) return {
                values: void 0,
                default: c.original
            };
            try {
                const u = (await this.fileService.readFile(c.localized)).value.toString(), d = [], h = IE(u, d);
                return d.length > 0 ? (r(c.localized, d), {
                    values: void 0,
                    default: c.original
                }) : n4e(h) !== "object" ? (s(c.localized), {
                    values: void 0,
                    default: c.original
                }) : {
                    values: h,
                    default: c.original
                };
            } catch  {
                return {
                    values: void 0,
                    default: c.original
                };
            }
        }
    }
    async resolveOriginalMessageBundle(t, e) {
        if (t) try {
            const n = (await this.fileService.readFile(t)).value.toString();
            return IE(n, e);
        } catch  {}
    }
    findMessageBundles(t, e) {
        return new Promise((n, i)=>{
            const r = (s)=>{
                const o = Os(t, `package.nls.${s}.json`);
                this.fileService.exists(o).then((a)=>{
                    a && n({
                        localized: o,
                        original: Os(t, "package.nls.json")
                    });
                    const l = s.lastIndexOf("-");
                    l === -1 ? n({
                        localized: Os(t, "package.nls.json"),
                        original: null
                    }) : (s = s.substring(0, l), r(s));
                });
            };
            if (e.devMode || e.pseudo || !e.language) return n({
                localized: Os(t, "package.nls.json"),
                original: null
            });
            r(e.language);
        });
    }
    formatMessage(t, e) {
        return `[${t.path}]: ${e}`;
    }
}, h4i = Re([
    F(0, B5n),
    F(1, nh),
    F(2, is),
    F(3, fc),
    F(4, cy),
    F(5, Li)
], h4i), p4i = class extends h4i {
    constructor(t, e, n, i, r, s, o, a){
        super(n, i, r, s, o, a), this.currentProfile = t, this.userDataProfilesService = e, this.cacheValidatorThrottler = this._register(new nW(3e3)), this._onDidChangeCache = this._register(new tt), this.onDidChangeCache = this._onDidChangeCache.event;
    }
    async scanExtensions(t) {
        const e = this.getCacheFile(t), n = await this.readExtensionCache(e);
        if (this.input = t, n && n.input && U5n.equals(n.input, this.input)) return this.logService.debug("Using cached extensions scan result", t.type === 0 ? "system" : "user", t.location.toString()), this.cacheValidatorThrottler.trigger(()=>this.validateCache()), n.result.map((r)=>(r.location = rt.revive(r.location), r));
        const i = await super.scanExtensions(t);
        return await this.writeExtensionCache(e, {
            input: t,
            result: i
        }), i;
    }
    async readExtensionCache(t) {
        try {
            const e = await this.fileService.readFile(t), n = JSON.parse(e.value.toString());
            return {
                result: n.result,
                input: aY(n.input)
            };
        } catch (e) {
            this.logService.debug("Error while reading the extension cache file:", t.path, uf(e));
        }
        return null;
    }
    async writeExtensionCache(t, e) {
        try {
            await this.fileService.writeFile(t, Tr.fromString(JSON.stringify(e)));
        } catch (n) {
            this.logService.debug("Error while writing the extension cache file:", t.path, uf(n));
        }
    }
    async validateCache() {
        if (!this.input) return;
        const t = this.getCacheFile(this.input), e = await this.readExtensionCache(t);
        if (!e) return;
        const n = e.result, i = JSON.parse(JSON.stringify(await super.scanExtensions(this.input)));
        if (!Rp(i, n)) try {
            this.logService.info("Invalidating Cache", n, i), await this.fileService.del(t), this._onDidChangeCache.fire();
        } catch (r) {
            this.logService.error(r);
        }
    }
    getCacheFile(t) {
        const e = this.getProfile(t);
        return this.uriIdentityService.extUri.joinPath(e.cacheHome, t.type === 0 ? DMp : MMp);
    }
    getProfile(t) {
        return t.type === 0 ? this.userDataProfilesService.defaultProfile : t.profile ? this.uriIdentityService.extUri.isEqual(t.location, this.currentProfile.extensionsResource) ? this.currentProfile : this.userDataProfilesService.profiles.find((e)=>this.uriIdentityService.extUri.isEqual(t.location, e.extensionsResource)) ?? this.currentProfile : this.userDataProfilesService.defaultProfile;
    }
}, p4i = Re([
    F(1, gP),
    F(2, B5n),
    F(3, nh),
    F(4, is),
    F(5, fc),
    F(6, cy),
    F(7, Li)
], p4i), DOv = class extends rDs {
    constructor(t, e, n, i, r, s, o, a, l, c, u, d){
        super(t, e, Os(n, ".cursor-dev", "extensions", "control.json"), i, r, s, o, a, l, c, u, d), this.translationsPromise = (async ()=>{
            if (fCo) try {
                const h = await this.fileService.readFile(rt.file(fCo));
                return JSON.parse(h.value.toString());
            } catch  {}
            return Object.create(null);
        })();
    }
    getTranslations(t) {
        return this.translationsPromise;
    }
};

}

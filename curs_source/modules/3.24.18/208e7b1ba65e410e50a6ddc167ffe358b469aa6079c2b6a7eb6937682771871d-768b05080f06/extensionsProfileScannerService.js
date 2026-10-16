import { Gl, le } from "./async.js";
import { ae, it } from "./buffer.js";
import { aa } from "./configurationRegistry.js";
import { Ve } from "./errors.js";
import { N, se } from "./event.js";
import { Nw } from "./extensionManagement.js";
import { e_e } from "./extensionManagementUtil.js";
import { Wt, cn } from "./files.js";
import { Q, ne } from "./instantiation.js";
import { B } from "./ipc.js";
import { J, j } from "./lifecycle.js";
import { Z, te } from "./log.js";
import { Yn, mr } from "./map.js";
import { Ln, Un } from "./platform_2.js";
import { We } from "./request_2.js";
import { SR } from "./ternarySearchTree.js";
import { w } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
import { Ze } from "./types.js";
import { x, ye } from "./uri.js";
import { Br, Oi } from "./uriIdentity.js";
import { Ls, Us, ai } from "./userDataProfile.js";
function _ze(e) {
    return e && typeof e == "object" && typeof e.id == "string" && (!e.uuid || typeof e.uuid == "string");
}
function pf(e, t) {
    return e.uuid && t.uuid ? e.uuid === t.uuid : e.id === t.id ? !0 : SR(e.id, t.id) === 0;
}
function t_e(e) {
    return Un(e) && _ze(e.identifier) && (PZe(e.location) || Ln(e.location) && e.location) && (aa(e.relativeLocation) || Ln(e.relativeLocation)) && e.version && Ln(e.version);
}
function PZe(e) {
    return e ? Ln(e.path) && Ln(e.scheme) : !1;
}
var hf, Du, A1;
export { A1, Du, PZe, _ze, hf, pf, t_e };
var __wakaru_M1_initialized = false;
export function M1() {
if (__wakaru_M1_initialized) return;
__wakaru_M1_initialized = true;
"use strict";
h(), le(), it(), j(), se(), mr(), ye(), Nw(), e_e(), Wt(), ne(), te(), Us(), Oi(), Ze(), Ve(), hf = class extends Error {
    constructor(e, t){
        super(e), this.code = t;
    }
}, Du = Q("IExtensionsProfileScannerService"), A1 = class extends J {
    constructor(e, t, n, r, s){
        super(), this.extensionsLocation = e, this.fileService = t, this.userDataProfilesService = n, this.uriIdentityService = r, this.logService = s, this._onAddExtensions = this._register(new N), this.onAddExtensions = this._onAddExtensions.event, this._onDidAddExtensions = this._register(new N), this.onDidAddExtensions = this._onDidAddExtensions.event, this._onRemoveExtensions = this._register(new N), this.onRemoveExtensions = this._onRemoveExtensions.event, this._onDidRemoveExtensions = this._register(new N), this.onDidRemoveExtensions = this._onDidRemoveExtensions.event, this.resourcesAccessQueueMap = new Yn;
    }
    scanProfileExtensions(e, t) {
        return this.withProfileExtensions(e, void 0, t);
    }
    async addExtensionsToProfile(e, t, n) {
        const r = [], s = [];
        try {
            return await this.withProfileExtensions(t, (i)=>{
                const a = [];
                if (n) a.push(...i);
                else for (const o of i)e.some(([l])=>pf(l.identifier, o.identifier) && (l.manifest.version !== o.version || l.location.toString() !== o.location.toString())) ? r.push(o) : a.push(o);
                for (const [o, l] of e){
                    const d = a.findIndex((m)=>pf(m.identifier, o.identifier) && m.version === o.manifest.version && m.location.toString() === o.location.toString()), u = {
                        identifier: o.identifier,
                        version: o.manifest.version,
                        location: o.location,
                        metadata: l
                    };
                    d === -1 ? (s.push(u), a.push(u)) : a.splice(d, 1, u);
                }
                return s.length && this._onAddExtensions.fire({
                    extensions: s,
                    profileLocation: t
                }), r.length && this._onRemoveExtensions.fire({
                    extensions: r,
                    profileLocation: t
                }), a;
            }), s.length && this._onDidAddExtensions.fire({
                extensions: s,
                profileLocation: t
            }), r.length && this._onDidRemoveExtensions.fire({
                extensions: r,
                profileLocation: t
            }), s;
        } catch (i) {
            throw s.length && this._onDidAddExtensions.fire({
                extensions: s,
                error: i,
                profileLocation: t
            }), r.length && this._onDidRemoveExtensions.fire({
                extensions: r,
                error: i,
                profileLocation: t
            }), i;
        }
    }
    async updateMetadata(e, t) {
        const n = [];
        return await this.withProfileExtensions(t, (r)=>{
            const s = [];
            for (const i of r){
                const a = e.find(([o])=>pf(o.identifier, i.identifier) && o.manifest.version === i.version);
                a && (i.metadata = {
                    ...i.metadata,
                    ...a[1]
                }, n.push(i)), s.push(i);
            }
            return s;
        }), n;
    }
    async removeExtensionsFromProfile(e, t) {
        const n = [];
        try {
            await this.withProfileExtensions(t, (r)=>{
                const s = [];
                for (const i of r)e.some((a)=>pf(i.identifier, a)) ? n.push(i) : s.push(i);
                return n.length && this._onRemoveExtensions.fire({
                    extensions: n,
                    profileLocation: t
                }), s;
            }), n.length && this._onDidRemoveExtensions.fire({
                extensions: n,
                profileLocation: t
            });
        } catch (r) {
            throw n.length && this._onDidRemoveExtensions.fire({
                extensions: n,
                error: r,
                profileLocation: t
            }), r;
        }
    }
    async withProfileExtensions(e, t, n) {
        return this.getResourceAccessQueue(e).queue(async ()=>{
            let r = [], s;
            try {
                const i = await this.fileService.readFile(e);
                s = JSON.parse(i.value.toString().trim() || "[]");
            } catch (i) {
                if (ai(i) !== 1) throw i;
                if (this.uriIdentityService.extUri.isEqual(e, this.userDataProfilesService.defaultProfile.extensionsResource) && (s = await this.migrateFromOldDefaultProfileExtensionsLocation()), !s && n?.bailOutWhenFileNotFound) throw new hf(We(i), "ERROR_PROFILE_NOT_FOUND");
            }
            if (s) {
                Array.isArray(s) || this.throwInvalidConentError(e);
                let i = !1;
                for (const a of s){
                    t_e(a) || this.throwInvalidConentError(e);
                    let o;
                    if (Ln(a.relativeLocation) && a.relativeLocation) o = this.resolveExtensionLocation(a.relativeLocation);
                    else if (Ln(a.location)) {
                        this.logService.warn(`Extensions profile: Ignoring extension with invalid location: ${a.location}`);
                        continue;
                    } else {
                        o = x.revive(a.location);
                        const d = this.toRelativePath(o);
                        d && (i = !0, a.relativeLocation = d);
                    }
                    aa(a.metadata?.hasPreReleaseVersion) && a.metadata?.preRelease && (i = !0, a.metadata.hasPreReleaseVersion = !0);
                    const l = a.metadata?.id ?? a.identifier.uuid;
                    r.push({
                        identifier: l ? {
                            id: a.identifier.id,
                            uuid: l
                        } : {
                            id: a.identifier.id
                        },
                        location: o,
                        version: a.version,
                        metadata: a.metadata
                    });
                }
                i && await this.fileService.writeFile(e, ae.fromString(JSON.stringify(s)));
            }
            if (t) {
                r = t(r);
                const i = r.map((a)=>({
                        identifier: a.identifier,
                        version: a.version,
                        location: a.location.toJSON(),
                        relativeLocation: this.toRelativePath(a.location),
                        metadata: a.metadata
                    }));
                await this.fileService.writeFile(e, ae.fromString(JSON.stringify(i)));
            }
            return r;
        });
    }
    throwInvalidConentError(e) {
        throw new hf(`Invalid extensions content in ${e.toString()}`, "ERROR_INVALID_CONTENT");
    }
    toRelativePath(e) {
        return this.uriIdentityService.extUri.isEqual(this.uriIdentityService.extUri.dirname(e), this.extensionsLocation) ? this.uriIdentityService.extUri.basename(e) : void 0;
    }
    resolveExtensionLocation(e) {
        return this.uriIdentityService.extUri.joinPath(this.extensionsLocation, e);
    }
    async migrateFromOldDefaultProfileExtensionsLocation() {
        return this._migrationPromise || (this._migrationPromise = (async ()=>{
            const e = this.uriIdentityService.extUri.joinPath(this.userDataProfilesService.defaultProfile.location, "extensions.json"), t = this.uriIdentityService.extUri.joinPath(this.extensionsLocation, ".init-default-profile-extensions");
            let n;
            try {
                n = (await this.fileService.readFile(e)).value.toString();
            } catch (s) {
                if (ai(s) === 1) return;
                throw s;
            }
            this.logService.info("Migrating extensions from old default profile location", e.toString());
            let r;
            try {
                const s = JSON.parse(n);
                Array.isArray(s) && s.every((i)=>t_e(i)) ? r = s : this.logService.warn("Skipping migrating from old default profile locaiton: Found invalid data", s);
            } catch (s) {
                this.logService.error(s);
            }
            if (r) try {
                await this.fileService.createFile(this.userDataProfilesService.defaultProfile.extensionsResource, ae.fromString(JSON.stringify(r)), {
                    overwrite: !1
                }), this.logService.info("Migrated extensions from old default profile location to new location", e.toString(), this.userDataProfilesService.defaultProfile.extensionsResource.toString());
            } catch (s) {
                if (ai(s) === 3) this.logService.info("Migration from old default profile location to new location is done by another window", e.toString(), this.userDataProfilesService.defaultProfile.extensionsResource.toString());
                else throw s;
            }
            try {
                await this.fileService.del(e);
            } catch (s) {
                ai(s) !== 1 && this.logService.error(s);
            }
            try {
                await this.fileService.del(t);
            } catch (s) {
                ai(s) !== 1 && this.logService.error(s);
            }
            return r;
        })()), this._migrationPromise;
    }
    getResourceAccessQueue(e) {
        let t = this.resourcesAccessQueueMap.get(e);
        return t || (t = new Gl, this.resourcesAccessQueueMap.set(e, t)), t;
    }
}, A1 = B([
    w(1, cn),
    w(2, Ls),
    w(3, Br),
    w(4, Z)
], A1);

}

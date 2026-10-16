import { POv } from "./BPv.js";
import { Ei, Ga, Gt, Ov, Qe, Tr, Yo, st, tt, uf } from "./Iwo.js";
import { ID, jn } from "./SZu.js";
import { Ake, qn } from "./async.js";
import { jy } from "./extensionManagement.js";
import { iF } from "./extensionManagementUtil.js";
import { is, ms } from "./files.js";
import { Qc } from "./gYa.js";
import { It } from "./instantiation.js";
import { Ji, Li } from "./log.js";
import { du, gd } from "./map.js";
import { E } from "./tslib.es6.js";
import { To } from "./types_2.js";
import { fn, rt } from "./uri.js";
import { Vp, nh } from "./uriIdentity.js";
import { F, JR, Re, gP } from "./userDataProfile.js";
var d4i, B5n, iDs;
export { B5n, d4i, iDs };
var __wakaru_Irc_initialized = false;
export function Irc() {
if (__wakaru_Irc_initialized) return;
__wakaru_Irc_initialized = true;
"use strict";
E(), qn(), Ga(), Qe(), Gt(), du(), fn(), jy(), iF(), ms(), It(), Ji(), JR(), Vp(), To(), Ei(), d4i = class extends Error {
    constructor(t, e){
        super(t), this.code = e;
    }
}, B5n = jn("IExtensionsProfileScannerService"), iDs = class extends st {
    constructor(t, e, n, i, r){
        super(), this.extensionsLocation = t, this.fileService = e, this.userDataProfilesService = n, this.uriIdentityService = i, this.logService = r, this._onAddExtensions = this._register(new tt), this.onAddExtensions = this._onAddExtensions.event, this._onDidAddExtensions = this._register(new tt), this.onDidAddExtensions = this._onDidAddExtensions.event, this._onRemoveExtensions = this._register(new tt), this.onRemoveExtensions = this._onRemoveExtensions.event, this._onDidRemoveExtensions = this._register(new tt), this.onDidRemoveExtensions = this._onDidRemoveExtensions.event, this.resourcesAccessQueueMap = new gd;
    }
    scanProfileExtensions(t, e) {
        return this.withProfileExtensions(t, void 0, e);
    }
    async addExtensionsToProfile(t, e, n) {
        const i = [], r = [];
        try {
            return await this.withProfileExtensions(e, (s)=>{
                const o = [];
                if (n) o.push(...s);
                else for (const a of s)t.some(([l])=>Qc(l.identifier, a.identifier) && (l.manifest.version !== a.version || l.location.toString() !== a.location.toString())) ? i.push(a) : o.push(a);
                for (const [a, l] of t){
                    const c = o.findIndex((d)=>Qc(d.identifier, a.identifier) && d.version === a.manifest.version && d.location.toString() === a.location.toString()), u = {
                        identifier: a.identifier,
                        version: a.manifest.version,
                        location: a.location,
                        metadata: l
                    };
                    c === -1 ? (r.push(u), o.push(u)) : o.splice(c, 1, u);
                }
                return r.length && this._onAddExtensions.fire({
                    extensions: r,
                    profileLocation: e
                }), i.length && this._onRemoveExtensions.fire({
                    extensions: i,
                    profileLocation: e
                }), o;
            }), r.length && this._onDidAddExtensions.fire({
                extensions: r,
                profileLocation: e
            }), i.length && this._onDidRemoveExtensions.fire({
                extensions: i,
                profileLocation: e
            }), r;
        } catch (s) {
            throw r.length && this._onDidAddExtensions.fire({
                extensions: r,
                error: s,
                profileLocation: e
            }), i.length && this._onDidRemoveExtensions.fire({
                extensions: i,
                error: s,
                profileLocation: e
            }), s;
        }
    }
    async updateMetadata(t, e) {
        const n = [];
        return await this.withProfileExtensions(e, (i)=>{
            const r = [];
            for (const s of i){
                const o = t.find(([a])=>Qc(a.identifier, s.identifier) && a.manifest.version === s.version);
                o && (s.metadata = {
                    ...s.metadata,
                    ...o[1]
                }, n.push(s)), r.push(s);
            }
            return r;
        }), n;
    }
    async removeExtensionsFromProfile(t, e) {
        const n = [];
        try {
            await this.withProfileExtensions(e, (i)=>{
                const r = [];
                for (const s of i)t.some((o)=>Qc(s.identifier, o)) ? n.push(s) : r.push(s);
                return n.length && this._onRemoveExtensions.fire({
                    extensions: n,
                    profileLocation: e
                }), r;
            }), n.length && this._onDidRemoveExtensions.fire({
                extensions: n,
                profileLocation: e
            });
        } catch (i) {
            throw n.length && this._onDidRemoveExtensions.fire({
                extensions: n,
                error: i,
                profileLocation: e
            }), i;
        }
    }
    async withProfileExtensions(t, e, n) {
        return this.getResourceAccessQueue(t).queue(async ()=>{
            let i = [], r;
            try {
                const s = await this.fileService.readFile(t);
                r = JSON.parse(s.value.toString().trim() || "[]");
            } catch (s) {
                if (ID(s) !== 1) throw s;
                if (this.uriIdentityService.extUri.isEqual(t, this.userDataProfilesService.defaultProfile.extensionsResource) && (r = await this.migrateFromOldDefaultProfileExtensionsLocation()), !r && n?.bailOutWhenFileNotFound) throw new d4i(uf(s), "ERROR_PROFILE_NOT_FOUND");
            }
            if (r) {
                Array.isArray(r) || this.throwInvalidConentError(t);
                let s = !1;
                for (const o of r){
                    POv(o) || this.throwInvalidConentError(t);
                    let a;
                    if (Yo(o.relativeLocation) && o.relativeLocation) a = this.resolveExtensionLocation(o.relativeLocation);
                    else if (Yo(o.location)) {
                        this.logService.warn(`Extensions profile: Ignoring extension with invalid location: ${o.location}`);
                        continue;
                    } else {
                        a = rt.revive(o.location);
                        const c = this.toRelativePath(a);
                        c && (s = !0, o.relativeLocation = c);
                    }
                    Ov(o.metadata?.hasPreReleaseVersion) && o.metadata?.preRelease && (s = !0, o.metadata.hasPreReleaseVersion = !0);
                    const l = o.metadata?.id ?? o.identifier.uuid;
                    i.push({
                        identifier: l ? {
                            id: o.identifier.id,
                            uuid: l
                        } : {
                            id: o.identifier.id
                        },
                        location: a,
                        version: o.version,
                        metadata: o.metadata
                    });
                }
                s && await this.fileService.writeFile(t, Tr.fromString(JSON.stringify(r)));
            }
            if (e) {
                i = e(i);
                const s = i.map((o)=>({
                        identifier: o.identifier,
                        version: o.version,
                        location: o.location.toJSON(),
                        relativeLocation: this.toRelativePath(o.location),
                        metadata: o.metadata
                    }));
                await this.fileService.writeFile(t, Tr.fromString(JSON.stringify(s)));
            }
            return i;
        });
    }
    throwInvalidConentError(t) {
        throw new d4i(`Invalid extensions content in ${t.toString()}`, "ERROR_INVALID_CONTENT");
    }
    toRelativePath(t) {
        return this.uriIdentityService.extUri.isEqual(this.uriIdentityService.extUri.dirname(t), this.extensionsLocation) ? this.uriIdentityService.extUri.basename(t) : void 0;
    }
    resolveExtensionLocation(t) {
        return this.uriIdentityService.extUri.joinPath(this.extensionsLocation, t);
    }
    async migrateFromOldDefaultProfileExtensionsLocation() {
        return this._migrationPromise || (this._migrationPromise = (async ()=>{
            const t = this.uriIdentityService.extUri.joinPath(this.userDataProfilesService.defaultProfile.location, "extensions.json"), e = this.uriIdentityService.extUri.joinPath(this.extensionsLocation, ".init-default-profile-extensions");
            let n;
            try {
                n = (await this.fileService.readFile(t)).value.toString();
            } catch (r) {
                if (ID(r) === 1) return;
                throw r;
            }
            this.logService.info("Migrating extensions from old default profile location", t.toString());
            let i;
            try {
                const r = JSON.parse(n);
                Array.isArray(r) && r.every((s)=>POv(s)) ? i = r : this.logService.warn("Skipping migrating from old default profile locaiton: Found invalid data", r);
            } catch (r) {
                this.logService.error(r);
            }
            if (i) try {
                await this.fileService.createFile(this.userDataProfilesService.defaultProfile.extensionsResource, Tr.fromString(JSON.stringify(i)), {
                    overwrite: !1
                }), this.logService.info("Migrated extensions from old default profile location to new location", t.toString(), this.userDataProfilesService.defaultProfile.extensionsResource.toString());
            } catch (r) {
                if (ID(r) === 3) this.logService.info("Migration from old default profile location to new location is done by another window", t.toString(), this.userDataProfilesService.defaultProfile.extensionsResource.toString());
                else throw r;
            }
            try {
                await this.fileService.del(t);
            } catch (r) {
                ID(r) !== 1 && this.logService.error(r);
            }
            try {
                await this.fileService.del(e);
            } catch (r) {
                ID(r) !== 1 && this.logService.error(r);
            }
            return i;
        })()), this._migrationPromise;
    }
    getResourceAccessQueue(t) {
        let e = this.resourcesAccessQueueMap.get(t);
        return e || (e = new Ake, this.resourcesAccessQueueMap.set(t, e)), e;
    }
}, iDs = Re([
    F(1, is),
    F(2, gP),
    F(3, nh),
    F(4, Li)
], iDs);

}

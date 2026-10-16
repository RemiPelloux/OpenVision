import { D, Fa, Gt, Qe, Yo, dA, st, tt } from "./Iwo.js";
import { $l, Ah, ID, Ogr, jn, tR } from "./SZu.js";
import { I_, qn } from "./async.js";
import { cy, fb } from "./environment.js";
import { is, ms } from "./files.js";
import { Xy } from "./hash.js";
import { It } from "./instantiation.js";
import { Ji, Li } from "./log.js";
import { Bt } from "./nls.js";
import { Aa, Lr, Os } from "./resources.js";
import { E } from "./tslib.es6.js";
import { To } from "./types_2.js";
import { fn, rt } from "./uri.js";
import { Vp, nh } from "./uriIdentity.js";
import { Ai, Xo } from "./uuid_2.js";
import { Sr } from "./workspace.js";
function Re(t, e, n, i) {
    var r = arguments.length, s = r < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, n) : i, o;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function") s = Reflect.decorate(t, e, n, i);
    else for(var a = t.length - 1; a >= 0; a--)(o = t[a]) && (s = (r < 3 ? o(s) : r > 3 ? o(e, n, s) : o(e, n)) || s);
    return r > 3 && s && Object.defineProperty(e, n, s), s;
}
function F(t, e) {
    return function(n, i) {
        e(n, i, t);
    };
}
var gP, GZn;
export { F, GZn, Re, gP };
var __wakaru_JR_initialized = false;
export function JR() {
if (__wakaru_JR_initialized) return;
__wakaru_JR_initialized = true;
"use strict";
E(), Xy(), Gt(), Qe(), Lr(), fn(), Bt(), fb(), ms(), It(), Ji(), Sr(), Vp(), qn(), Xo(), Fa(), To(), gP = jn("IUserDataProfilesService"), GZn = class extends st {
    constructor(t, e, n, i){
        super(), this.environmentService = t, this.fileService = e, this.uriIdentityService = n, this.logService = i, this._onDidChangeProfiles = this._register(new tt), this.onDidChangeProfiles = this._onDidChangeProfiles.event, this._onWillCreateProfile = this._register(new tt), this.onWillCreateProfile = this._onWillCreateProfile.event, this._onWillRemoveProfile = this._register(new tt), this.onWillRemoveProfile = this._onWillRemoveProfile.event, this._onDidResetWorkspaces = this._register(new tt), this.onDidResetWorkspaces = this._onDidResetWorkspaces.event, this.profileCreationPromises = new Map, this.transientProfilesObject = {
            profiles: [],
            emptyWindows: new Map
        }, this.profilesHome = Os(this.environmentService.userRoamingDataHome, "profiles"), this.profilesCacheHome = Os(this.environmentService.cacheHome, "CachedProfilesData");
    }
    get defaultProfile() {
        return this.profiles[0];
    }
    get profiles() {
        return [
            ...this.profilesObject.profiles,
            ...this.transientProfilesObject.profiles
        ];
    }
    init() {
        this._profilesObject = void 0;
    }
    get profilesObject() {
        if (!this._profilesObject) {
            const t = this.createDefaultProfile(), e = [
                t
            ];
            try {
                for (const i of this.getStoredProfiles()){
                    if (!i.name || !Yo(i.name) || !i.location) {
                        this.logService.warn("Skipping the invalid stored profile", i.location || i.name);
                        continue;
                    }
                    e.push(Ogr(Aa(i.location), i.name, i.location, this.profilesCacheHome, {
                        icon: i.icon,
                        useDefaultFlags: i.useDefaultFlags
                    }, t));
                }
            } catch (i) {
                this.logService.error(i);
            }
            const n = new Map;
            if (e.length) try {
                const i = this.getStoredProfileAssociations();
                if (i.workspaces) for (const [r, s] of Object.entries(i.workspaces)){
                    const o = rt.parse(r), a = e.find((l)=>l.id === s);
                    if (a) {
                        const l = a.workspaces ? a.workspaces.slice(0) : [];
                        l.push(o), a.workspaces = l;
                    }
                }
                if (i.emptyWindows) for (const [r, s] of Object.entries(i.emptyWindows)){
                    const o = e.find((a)=>a.id === s);
                    o && n.set(r, o);
                }
            } catch (i) {
                this.logService.error(i);
            }
            this._profilesObject = {
                profiles: e,
                emptyWindows: n
            };
        }
        return this._profilesObject;
    }
    createDefaultProfile() {
        const t = Ogr("__default__profile__", D(2635, null), this.environmentService.userRoamingDataHome, this.profilesCacheHome);
        return {
            ...t,
            extensionsResource: this.getDefaultProfileExtensionsLocation() ?? t.extensionsResource,
            isDefault: !0
        };
    }
    async createTransientProfile(t) {
        const e = "Temp", n = new RegExp(`${dA(e)}\\s(\\d+)`);
        let i = 0;
        for (const s of this.profiles){
            const o = n.exec(s.name), a = o ? parseInt(o[1]) : 0;
            i = a > i ? a : i;
        }
        const r = `${e} ${i + 1}`;
        return this.createProfile(tR(Ai()).toString(16), r, {
            transient: !0
        }, t);
    }
    async createNamedProfile(t, e, n) {
        return this.createProfile(tR(Ai()).toString(16), t, e, n);
    }
    async createProfile(t, e, n, i) {
        return await this.doCreateProfile(t, e, n, i);
    }
    async doCreateProfile(t, e, n, i) {
        if (!Yo(e) || !e) throw new Error("Name of the profile is mandatory and must be of type `string`");
        let r = this.profileCreationPromises.get(e);
        return r || (r = (async ()=>{
            try {
                if (this.profiles.find((c)=>c.id === t || !c.isTransient && !n?.transient && c.name === e)) throw new Error(`Profile with ${e} name already exists`);
                const o = i ? this.getWorkspace(i) : void 0;
                rt.isUri(o) && (n = {
                    ...n,
                    workspaces: [
                        o
                    ]
                });
                const a = Ogr(t, e, Os(this.profilesHome, t), this.profilesCacheHome, n, this.defaultProfile);
                await this.fileService.createFolder(a.location);
                const l = [];
                return this._onWillCreateProfile.fire({
                    profile: a,
                    join (c) {
                        l.push(c);
                    }
                }), await I_.settled(l), o && !rt.isUri(o) && this.updateEmptyWindowAssociation(o, a, !!a.isTransient), this.updateProfiles([
                    a
                ], [], []), a;
            } finally{
                this.profileCreationPromises.delete(e);
            }
        })(), this.profileCreationPromises.set(e, r)), r;
    }
    async updateProfile(t, e) {
        const n = [];
        for (const r of this.profiles){
            let s;
            if (t.id === r.id) r.isDefault ? e.workspaces && (s = r, s.workspaces = e.workspaces) : s = Ogr(r.id, e.name ?? r.name, r.location, this.profilesCacheHome, {
                icon: e.icon === null ? void 0 : e.icon ?? r.icon,
                transient: e.transient ?? r.isTransient,
                useDefaultFlags: e.useDefaultFlags ?? r.useDefaultFlags,
                workspaces: e.workspaces ?? r.workspaces
            }, this.defaultProfile);
            else if (e.workspaces) {
                const o = r.workspaces?.filter((a)=>!e.workspaces?.some((l)=>this.uriIdentityService.extUri.isEqual(a, l)));
                r.workspaces?.length !== o?.length && (s = r, s.workspaces = o);
            }
            s && n.push(s);
        }
        if (!n.length) throw t.isDefault ? new Error("Cannot update default profile") : new Error(`Profile '${t.name}' does not exist`);
        this.updateProfiles([], [], n);
        const i = this.profiles.find((r)=>r.id === t.id);
        if (!i) throw new Error(`Profile '${t.name}' was not updated`);
        return i;
    }
    async removeProfile(t) {
        if (t.isDefault) throw new Error("Cannot remove default profile");
        const e = this.profiles.find((i)=>i.id === t.id);
        if (!e) throw new Error(`Profile '${t.name}' does not exist`);
        const n = [];
        this._onWillRemoveProfile.fire({
            profile: e,
            join (i) {
                n.push(i);
            }
        });
        try {
            await Promise.allSettled(n);
        } catch (i) {
            this.logService.error(i);
        }
        this.updateProfiles([], [
            e
        ], []);
        try {
            await this.fileService.del(e.cacheHome, {
                recursive: !0
            });
        } catch (i) {
            ID(i) !== 1 && this.logService.error(i);
        }
    }
    async setProfileForWorkspace(t, e) {
        const n = this.profiles.find((r)=>r.id === e.id);
        if (!n) throw new Error(`Profile '${e.name}' does not exist`);
        const i = this.getWorkspace(t);
        if (rt.isUri(i)) {
            const r = n.workspaces ? [
                ...n.workspaces
            ] : [];
            r.some((s)=>this.uriIdentityService.extUri.isEqual(s, i)) || (r.push(i), await this.updateProfile(n, {
                workspaces: r
            }));
        } else this.updateEmptyWindowAssociation(i, n, !1), this.updateStoredProfiles(this.profiles);
    }
    unsetWorkspace(t, e = !1) {
        const n = this.getWorkspace(t);
        if (rt.isUri(n)) {
            const i = this.getProfileForWorkspace(t);
            i && this.updateProfile(i, {
                workspaces: i.workspaces?.filter((r)=>!this.uriIdentityService.extUri.isEqual(r, n))
            });
        } else this.updateEmptyWindowAssociation(n, void 0, e), this.updateStoredProfiles(this.profiles);
    }
    async resetWorkspaces() {
        this.transientProfilesObject.emptyWindows.clear(), this.profilesObject.emptyWindows.clear();
        for (const t of this.profiles)t.workspaces = void 0;
        this.updateProfiles([], [], this.profiles), this._onDidResetWorkspaces.fire();
    }
    async cleanUp() {
        if (await this.fileService.exists(this.profilesHome)) {
            const t = await this.fileService.resolve(this.profilesHome);
            await Promise.all((t.children || []).filter((e)=>e.isDirectory && this.profiles.every((n)=>!this.uriIdentityService.extUri.isEqual(n.location, e.resource))).map((e)=>this.fileService.del(e.resource, {
                    recursive: !0
                })));
        }
    }
    async cleanUpTransientProfiles() {
        const t = this.transientProfilesObject.profiles.filter((e)=>!this.isProfileAssociatedToWorkspace(e));
        await Promise.allSettled(t.map((e)=>this.removeProfile(e)));
    }
    getProfileForWorkspace(t) {
        const e = this.getWorkspace(t);
        return rt.isUri(e) ? this.profiles.find((n)=>n.workspaces?.some((i)=>this.uriIdentityService.extUri.isEqual(i, e))) : this.profilesObject.emptyWindows.get(e) ?? this.transientProfilesObject.emptyWindows.get(e);
    }
    getWorkspace(t) {
        return $l(t) ? t.uri : Ah(t) ? t.configPath : t.id;
    }
    isProfileAssociatedToWorkspace(t) {
        return !!(t.workspaces?.length || [
            ...this.profilesObject.emptyWindows.values()
        ].some((e)=>this.uriIdentityService.extUri.isEqual(e.location, t.location)) || [
            ...this.transientProfilesObject.emptyWindows.values()
        ].some((e)=>this.uriIdentityService.extUri.isEqual(e.location, t.location)));
    }
    updateProfiles(t, e, n) {
        const i = [
            ...this.profiles,
            ...t
        ], r = this.transientProfilesObject.profiles;
        this.transientProfilesObject.profiles = [];
        const s = [];
        for (let o of i){
            if (e.some((a)=>o.id === a.id)) {
                for (const a of [
                    ...this.profilesObject.emptyWindows.keys()
                ])o.id === this.profilesObject.emptyWindows.get(a)?.id && this.profilesObject.emptyWindows.delete(a);
                continue;
            }
            if (!o.isDefault) {
                o = n.find((l)=>o.id === l.id) ?? o;
                const a = r.find((l)=>o.id === l.id);
                if (o.isTransient) this.transientProfilesObject.profiles.push(o);
                else if (a) {
                    for (const [l, c] of this.transientProfilesObject.emptyWindows.entries())if (o.id === c.id) {
                        this.transientProfilesObject.emptyWindows.delete(l), this.profilesObject.emptyWindows.set(l, o);
                        break;
                    }
                }
            }
            o.workspaces?.length === 0 && (o.workspaces = void 0), s.push(o);
        }
        this.updateStoredProfiles(s), this.triggerProfilesChanges(t, e, n);
    }
    triggerProfilesChanges(t, e, n) {
        this._onDidChangeProfiles.fire({
            added: t,
            removed: e,
            updated: n,
            all: this.profiles
        });
    }
    updateEmptyWindowAssociation(t, e, n) {
        n = e?.isTransient ? !0 : n, n ? e ? this.transientProfilesObject.emptyWindows.set(t, e) : this.transientProfilesObject.emptyWindows.delete(t) : (this.transientProfilesObject.emptyWindows.delete(t), e ? this.profilesObject.emptyWindows.set(t, e) : this.profilesObject.emptyWindows.delete(t));
    }
    updateStoredProfiles(t) {
        const e = [], n = {}, i = {};
        for (const r of t)if (!r.isTransient && (r.isDefault || e.push({
            location: r.location,
            name: r.name,
            icon: r.icon,
            useDefaultFlags: r.useDefaultFlags
        }), r.workspaces)) for (const s of r.workspaces)n[s.toString()] = r.id;
        for (const [r, s] of this.profilesObject.emptyWindows.entries())i[r.toString()] = s.id;
        this.saveStoredProfileAssociations({
            workspaces: n,
            emptyWindows: i
        }), this.saveStoredProfiles(e), this._profilesObject = void 0;
    }
    getStoredProfiles() {
        return [];
    }
    saveStoredProfiles(t) {
        throw new Error("not implemented");
    }
    getStoredProfileAssociations() {
        return {};
    }
    saveStoredProfileAssociations(t) {
        throw new Error("not implemented");
    }
    getDefaultProfileExtensionsLocation() {}
}, GZn.PROFILES_KEY = "userDataProfiles", GZn.PROFILE_ASSOCIATIONS_KEY = "profileAssociations", GZn = Re([
    F(0, cy),
    F(1, is),
    F(2, nh),
    F(3, Li)
], GZn);

}

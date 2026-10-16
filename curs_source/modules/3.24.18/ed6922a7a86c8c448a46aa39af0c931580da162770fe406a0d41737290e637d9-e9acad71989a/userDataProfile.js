import { Ps, S, Se, Xr, bt, l1, ve, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { Rm, bn } from "./async.js";
import { nf, sv } from "./environment.js";
import { Fi, Ii } from "./files.js";
import { T_ } from "./hash.js";
import { Ze } from "./instantiation.js";
import { Qn, Wn } from "./log.js";
import { rt } from "./nls.js";
import { AO, cC, gk, rOt, rp, vn } from "./qIc.js";
import { Li, fo, jr } from "./resources.js";
import { x } from "./tslib.es6.js";
import { gr } from "./types_2.js";
import { Ee, Qt } from "./uri.js";
import { Ea, rl } from "./uriIdentity.js";
import { Js, zn } from "./uuid.js";
import { ci } from "./workspace.js";
var jb, Ugn;
export { Ugn, jb };
var __wakaru_dC_initialized = false;
export function dC() {
if (__wakaru_dC_initialized) return;
__wakaru_dC_initialized = true;
"use strict";
x(), T_(), bt(), Se(), Li(), Qt(), rt(), nf(), Fi(), Ze(), Qn(), ci(), rl(), bn(), Js(), Ps(), gr(), jb = vn("IUserDataProfilesService"), Ugn = class extends we {
    constructor(e, t, n, i){
        super(), this.environmentService = e, this.fileService = t, this.uriIdentityService = n, this.logService = i, this._onDidChangeProfiles = this._register(new ve), this.onDidChangeProfiles = this._onDidChangeProfiles.event, this._onWillCreateProfile = this._register(new ve), this.onWillCreateProfile = this._onWillCreateProfile.event, this._onWillRemoveProfile = this._register(new ve), this.onWillRemoveProfile = this._onWillRemoveProfile.event, this._onDidResetWorkspaces = this._register(new ve), this.onDidResetWorkspaces = this._onDidResetWorkspaces.event, this.profileCreationPromises = new Map, this.transientProfilesObject = {
            profiles: [],
            emptyWindows: new Map
        }, this.profilesHome = jr(this.environmentService.userRoamingDataHome, "profiles"), this.profilesCacheHome = jr(this.environmentService.cacheHome, "CachedProfilesData");
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
            const e = this.createDefaultProfile(), t = [
                e
            ];
            try {
                for (const i of this.getStoredProfiles()){
                    if (!i.name || !Xr(i.name) || !i.location) {
                        this.logService.warn("Skipping the invalid stored profile", i.location || i.name);
                        continue;
                    }
                    t.push(rOt(fo(i.location), i.name, i.location, this.profilesCacheHome, {
                        icon: i.icon,
                        useDefaultFlags: i.useDefaultFlags
                    }, e));
                }
            } catch (i) {
                this.logService.error(i);
            }
            const n = new Map;
            if (t.length) try {
                const i = this.getStoredProfileAssociations();
                if (i.workspaces) for (const [r, s] of Object.entries(i.workspaces)){
                    const o = Ee.parse(r), a = t.find((c)=>c.id === s);
                    if (a) {
                        const c = a.workspaces ? a.workspaces.slice(0) : [];
                        c.push(o), a.workspaces = c;
                    }
                }
                if (i.emptyWindows) for (const [r, s] of Object.entries(i.emptyWindows)){
                    const o = t.find((a)=>a.id === s);
                    o && n.set(r, o);
                }
            } catch (i) {
                this.logService.error(i);
            }
            this._profilesObject = {
                profiles: t,
                emptyWindows: n
            };
        }
        return this._profilesObject;
    }
    createDefaultProfile() {
        const e = rOt("__default__profile__", S(2635, null), this.environmentService.userRoamingDataHome, this.profilesCacheHome);
        return {
            ...e,
            extensionsResource: this.getDefaultProfileExtensionsLocation() ?? e.extensionsResource,
            isDefault: !0
        };
    }
    async createTransientProfile(e) {
        const t = "Temp", n = new RegExp(`${l1(t)}\\s(\\d+)`);
        let i = 0;
        for (const s of this.profiles){
            const o = n.exec(s.name), a = o ? parseInt(o[1]) : 0;
            i = a > i ? a : i;
        }
        const r = `${t} ${i + 1}`;
        return this.createProfile(cC(zn()).toString(16), r, {
            transient: !0
        }, e);
    }
    async createNamedProfile(e, t, n) {
        return this.createProfile(cC(zn()).toString(16), e, t, n);
    }
    async createProfile(e, t, n, i) {
        return await this.doCreateProfile(e, t, n, i);
    }
    async doCreateProfile(e, t, n, i) {
        if (!Xr(t) || !t) throw new Error("Name of the profile is mandatory and must be of type `string`");
        let r = this.profileCreationPromises.get(t);
        return r || (r = (async ()=>{
            try {
                if (this.profiles.find((l)=>l.id === e || !l.isTransient && !n?.transient && l.name === t)) throw new Error(`Profile with ${t} name already exists`);
                const o = i ? this.getWorkspace(i) : void 0;
                Ee.isUri(o) && (n = {
                    ...n,
                    workspaces: [
                        o
                    ]
                });
                const a = rOt(e, t, jr(this.profilesHome, e), this.profilesCacheHome, n, this.defaultProfile);
                await this.fileService.createFolder(a.location);
                const c = [];
                return this._onWillCreateProfile.fire({
                    profile: a,
                    join (l) {
                        c.push(l);
                    }
                }), await Rm.settled(c), o && !Ee.isUri(o) && this.updateEmptyWindowAssociation(o, a, !!a.isTransient), this.updateProfiles([
                    a
                ], [], []), a;
            } finally{
                this.profileCreationPromises.delete(t);
            }
        })(), this.profileCreationPromises.set(t, r)), r;
    }
    async updateProfile(e, t) {
        const n = [];
        for (const r of this.profiles){
            let s;
            if (e.id === r.id) r.isDefault ? t.workspaces && (s = r, s.workspaces = t.workspaces) : s = rOt(r.id, t.name ?? r.name, r.location, this.profilesCacheHome, {
                icon: t.icon === null ? void 0 : t.icon ?? r.icon,
                transient: t.transient ?? r.isTransient,
                useDefaultFlags: t.useDefaultFlags ?? r.useDefaultFlags,
                workspaces: t.workspaces ?? r.workspaces
            }, this.defaultProfile);
            else if (t.workspaces) {
                const o = r.workspaces?.filter((a)=>!t.workspaces?.some((c)=>this.uriIdentityService.extUri.isEqual(a, c)));
                r.workspaces?.length !== o?.length && (s = r, s.workspaces = o);
            }
            s && n.push(s);
        }
        if (!n.length) throw e.isDefault ? new Error("Cannot update default profile") : new Error(`Profile '${e.name}' does not exist`);
        this.updateProfiles([], [], n);
        const i = this.profiles.find((r)=>r.id === e.id);
        if (!i) throw new Error(`Profile '${e.name}' was not updated`);
        return i;
    }
    async removeProfile(e) {
        if (e.isDefault) throw new Error("Cannot remove default profile");
        const t = this.profiles.find((i)=>i.id === e.id);
        if (!t) throw new Error(`Profile '${e.name}' does not exist`);
        const n = [];
        this._onWillRemoveProfile.fire({
            profile: t,
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
            t
        ], []);
        try {
            await this.fileService.del(t.cacheHome, {
                recursive: !0
            });
        } catch (i) {
            AO(i) !== 1 && this.logService.error(i);
        }
    }
    async setProfileForWorkspace(e, t) {
        const n = this.profiles.find((r)=>r.id === t.id);
        if (!n) throw new Error(`Profile '${t.name}' does not exist`);
        const i = this.getWorkspace(e);
        if (Ee.isUri(i)) {
            const r = n.workspaces ? [
                ...n.workspaces
            ] : [];
            r.some((s)=>this.uriIdentityService.extUri.isEqual(s, i)) || (r.push(i), await this.updateProfile(n, {
                workspaces: r
            }));
        } else this.updateEmptyWindowAssociation(i, n, !1), this.updateStoredProfiles(this.profiles);
    }
    unsetWorkspace(e, t = !1) {
        const n = this.getWorkspace(e);
        if (Ee.isUri(n)) {
            const i = this.getProfileForWorkspace(e);
            i && this.updateProfile(i, {
                workspaces: i.workspaces?.filter((r)=>!this.uriIdentityService.extUri.isEqual(r, n))
            });
        } else this.updateEmptyWindowAssociation(n, void 0, t), this.updateStoredProfiles(this.profiles);
    }
    async resetWorkspaces() {
        this.transientProfilesObject.emptyWindows.clear(), this.profilesObject.emptyWindows.clear();
        for (const e of this.profiles)e.workspaces = void 0;
        this.updateProfiles([], [], this.profiles), this._onDidResetWorkspaces.fire();
    }
    async cleanUp() {
        if (await this.fileService.exists(this.profilesHome)) {
            const e = await this.fileService.resolve(this.profilesHome);
            await Promise.all((e.children || []).filter((t)=>t.isDirectory && this.profiles.every((n)=>!this.uriIdentityService.extUri.isEqual(n.location, t.resource))).map((t)=>this.fileService.del(t.resource, {
                    recursive: !0
                })));
        }
    }
    async cleanUpTransientProfiles() {
        const e = this.transientProfilesObject.profiles.filter((t)=>!this.isProfileAssociatedToWorkspace(t));
        await Promise.allSettled(e.map((t)=>this.removeProfile(t)));
    }
    getProfileForWorkspace(e) {
        const t = this.getWorkspace(e);
        return Ee.isUri(t) ? this.profiles.find((n)=>n.workspaces?.some((i)=>this.uriIdentityService.extUri.isEqual(i, t))) : this.profilesObject.emptyWindows.get(t) ?? this.transientProfilesObject.emptyWindows.get(t);
    }
    getWorkspace(e) {
        return rp(e) ? e.uri : gk(e) ? e.configPath : e.id;
    }
    isProfileAssociatedToWorkspace(e) {
        return !!(e.workspaces?.length || [
            ...this.profilesObject.emptyWindows.values()
        ].some((t)=>this.uriIdentityService.extUri.isEqual(t.location, e.location)) || [
            ...this.transientProfilesObject.emptyWindows.values()
        ].some((t)=>this.uriIdentityService.extUri.isEqual(t.location, e.location)));
    }
    updateProfiles(e, t, n) {
        const i = [
            ...this.profiles,
            ...e
        ], r = this.transientProfilesObject.profiles;
        this.transientProfilesObject.profiles = [];
        const s = [];
        for (let o of i){
            if (t.some((a)=>o.id === a.id)) {
                for (const a of [
                    ...this.profilesObject.emptyWindows.keys()
                ])o.id === this.profilesObject.emptyWindows.get(a)?.id && this.profilesObject.emptyWindows.delete(a);
                continue;
            }
            if (!o.isDefault) {
                o = n.find((c)=>o.id === c.id) ?? o;
                const a = r.find((c)=>o.id === c.id);
                if (o.isTransient) this.transientProfilesObject.profiles.push(o);
                else if (a) {
                    for (const [c, l] of this.transientProfilesObject.emptyWindows.entries())if (o.id === l.id) {
                        this.transientProfilesObject.emptyWindows.delete(c), this.profilesObject.emptyWindows.set(c, o);
                        break;
                    }
                }
            }
            o.workspaces?.length === 0 && (o.workspaces = void 0), s.push(o);
        }
        this.updateStoredProfiles(s), this.triggerProfilesChanges(e, t, n);
    }
    triggerProfilesChanges(e, t, n) {
        this._onDidChangeProfiles.fire({
            added: e,
            removed: t,
            updated: n,
            all: this.profiles
        });
    }
    updateEmptyWindowAssociation(e, t, n) {
        n = t?.isTransient ? !0 : n, n ? t ? this.transientProfilesObject.emptyWindows.set(e, t) : this.transientProfilesObject.emptyWindows.delete(e) : (this.transientProfilesObject.emptyWindows.delete(e), t ? this.profilesObject.emptyWindows.set(e, t) : this.profilesObject.emptyWindows.delete(e));
    }
    updateStoredProfiles(e) {
        const t = [], n = {}, i = {};
        for (const r of e)if (!r.isTransient && (r.isDefault || t.push({
            location: r.location,
            name: r.name,
            icon: r.icon,
            useDefaultFlags: r.useDefaultFlags
        }), r.workspaces)) for (const s of r.workspaces)n[s.toString()] = r.id;
        for (const [r, s] of this.profilesObject.emptyWindows.entries())i[r.toString()] = s.id;
        this.saveStoredProfileAssociations({
            workspaces: n,
            emptyWindows: i
        }), this.saveStoredProfiles(t), this._profilesObject = void 0;
    }
    getStoredProfiles() {
        return [];
    }
    saveStoredProfiles(e) {
        throw new Error("not implemented");
    }
    getStoredProfileAssociations() {
        return {};
    }
    saveStoredProfileAssociations(e) {
        throw new Error("not implemented");
    }
    getDefaultProfileExtensionsLocation() {}
}, Ugn.PROFILES_KEY = "userDataProfiles", Ugn.PROFILE_ASSOCIATIONS_KEY = "profileAssociations", Ugn = ie([
    C(0, sv),
    C(1, Ii),
    C(2, Ea),
    C(3, Wn)
], Ugn);

}

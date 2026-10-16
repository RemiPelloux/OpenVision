import { Qn, le } from "./async.js";
import { E } from "./configurationRegistry.js";
import { Fr, si } from "./environment.js";
import { N, se } from "./event.js";
import { WT } from "./fileService.js";
import { Wt, cn, gr } from "./files.js";
import { Qa } from "./hash.js";
import { Q, ne } from "./instantiation.js";
import { B } from "./ipc.js";
import { J, j } from "./lifecycle.js";
import { Xa, Z, te } from "./log.js";
import { Ne } from "./nls.js";
import { Ln } from "./platform_2.js";
import { Ae, Ft, Mi } from "./resources.js";
import { Cs } from "./storage_3.js";
import { jn } from "./strings.js";
import { w } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
import { Ze } from "./types.js";
import { x, ye } from "./uri.js";
import { Br, Oi } from "./uriIdentity.js";
import { Wn, vt } from "./uuid.js";
import { bn } from "./workspace.js";
function Qo(e) {
    return e.replace(/[\\\{\}\*\+\?\|\^\$\.\[\]\(\)]/g, "\\$&");
}
function ai(e) {
    if (e instanceof gr) return e.fileOperationResult;
    if (Cs(e)) return 11;
    switch(WT(e)){
        case "EntryNotFound":
            return 1;
        case "EntryIsADirectory":
            return 0;
        case "EntryNotADirectory":
            return 9;
        case "EntryWriteLocked":
            return 5;
        case "NoPermissions":
            return 6;
        case "EntryExists":
            return 4;
        case "EntryTooLarge":
            return 7;
        default:
            return 10;
    }
}
function Zr(e) {
    const t = e;
    return typeof t?.id == "string" && x.isUri(t.uri);
}
function rr(e) {
    const t = e;
    return typeof t?.id == "string" && x.isUri(t.configPath);
}
function ek(e, t, n, r, s, i) {
    return {
        id: e,
        name: t,
        location: n,
        isDefault: !1,
        icon: s?.icon,
        globalStorageHome: i && s?.useDefaultFlags?.globalState ? i.globalStorageHome : Ae(n, "globalStorage"),
        settingsResource: i && s?.useDefaultFlags?.settings ? i.settingsResource : Ae(n, "settings.json"),
        keybindingsResource: i && s?.useDefaultFlags?.keybindings ? i.keybindingsResource : Ae(n, "keybindings.json"),
        tasksResource: i && s?.useDefaultFlags?.tasks ? i.tasksResource : Ae(n, "tasks.json"),
        snippetsHome: i && s?.useDefaultFlags?.snippets ? i.snippetsHome : Ae(n, "snippets"),
        promptsHome: i && s?.useDefaultFlags?.prompts ? i.promptsHome : Ae(n, "prompts"),
        extensionsResource: i && s?.useDefaultFlags?.extensions ? i.extensionsResource : Ae(n, "extensions.json"),
        cacheHome: Ae(r, e),
        useDefaultFlags: s?.useDefaultFlags,
        isTransient: s?.transient,
        workspaces: s?.workspaces
    };
}
var Ls, cd;
export { Ls, Qo, Zr, ai, cd, ek, rr };
var __wakaru_Us_initialized = false;
export function Us() {
if (__wakaru_Us_initialized) return;
__wakaru_Us_initialized = true;
"use strict";
h(), Qa(), se(), j(), Ft(), ye(), Ne(), Fr(), Wt(), ne(), te(), bn(), Oi(), le(), Wn(), jn(), Ze(), Ls = Q("IUserDataProfilesService"), cd = class extends J {
    constructor(e, t, n, r){
        super(), this.environmentService = e, this.fileService = t, this.uriIdentityService = n, this.logService = r, this._onDidChangeProfiles = this._register(new N), this.onDidChangeProfiles = this._onDidChangeProfiles.event, this._onWillCreateProfile = this._register(new N), this.onWillCreateProfile = this._onWillCreateProfile.event, this._onWillRemoveProfile = this._register(new N), this.onWillRemoveProfile = this._onWillRemoveProfile.event, this._onDidResetWorkspaces = this._register(new N), this.onDidResetWorkspaces = this._onDidResetWorkspaces.event, this.profileCreationPromises = new Map, this.transientProfilesObject = {
            profiles: [],
            emptyWindows: new Map
        }, this.profilesHome = Ae(this.environmentService.userRoamingDataHome, "profiles"), this.profilesCacheHome = Ae(this.environmentService.cacheHome, "CachedProfilesData");
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
                for (const r of this.getStoredProfiles()){
                    if (!r.name || !Ln(r.name) || !r.location) {
                        this.logService.warn("Skipping the invalid stored profile", r.location || r.name);
                        continue;
                    }
                    t.push(ek(Mi(r.location), r.name, r.location, this.profilesCacheHome, {
                        icon: r.icon,
                        useDefaultFlags: r.useDefaultFlags
                    }, e));
                }
            } catch (r) {
                this.logService.error(r);
            }
            const n = new Map;
            if (t.length) try {
                const r = this.getStoredProfileAssociations();
                if (r.workspaces) for (const [s, i] of Object.entries(r.workspaces)){
                    const a = x.parse(s), o = t.find((l)=>l.id === i);
                    if (o) {
                        const l = o.workspaces ? o.workspaces.slice(0) : [];
                        l.push(a), o.workspaces = l;
                    }
                }
                if (r.emptyWindows) for (const [s, i] of Object.entries(r.emptyWindows)){
                    const a = t.find((o)=>o.id === i);
                    a && n.set(s, a);
                }
            } catch (r) {
                this.logService.error(r);
            }
            this._profilesObject = {
                profiles: t,
                emptyWindows: n
            };
        }
        return this._profilesObject;
    }
    createDefaultProfile() {
        const e = ek("__default__profile__", E(2635, null), this.environmentService.userRoamingDataHome, this.profilesCacheHome);
        return {
            ...e,
            extensionsResource: this.getDefaultProfileExtensionsLocation() ?? e.extensionsResource,
            isDefault: !0
        };
    }
    async createTransientProfile(e) {
        const t = "Temp", n = new RegExp(`${Qo(t)}\\s(\\d+)`);
        let r = 0;
        for (const i of this.profiles){
            const a = n.exec(i.name), o = a ? parseInt(a[1]) : 0;
            r = o > r ? o : r;
        }
        const s = `${t} ${r + 1}`;
        return this.createProfile(Xa(vt()).toString(16), s, {
            transient: !0
        }, e);
    }
    async createNamedProfile(e, t, n) {
        return this.createProfile(Xa(vt()).toString(16), e, t, n);
    }
    async createProfile(e, t, n, r) {
        return await this.doCreateProfile(e, t, n, r);
    }
    async doCreateProfile(e, t, n, r) {
        if (!Ln(t) || !t) throw new Error("Name of the profile is mandatory and must be of type `string`");
        let s = this.profileCreationPromises.get(t);
        return s || (s = (async ()=>{
            try {
                if (this.profiles.find((d)=>d.id === e || !d.isTransient && !n?.transient && d.name === t)) throw new Error(`Profile with ${t} name already exists`);
                const a = r ? this.getWorkspace(r) : void 0;
                x.isUri(a) && (n = {
                    ...n,
                    workspaces: [
                        a
                    ]
                });
                const o = ek(e, t, Ae(this.profilesHome, e), this.profilesCacheHome, n, this.defaultProfile);
                await this.fileService.createFolder(o.location);
                const l = [];
                return this._onWillCreateProfile.fire({
                    profile: o,
                    join (d) {
                        l.push(d);
                    }
                }), await Qn.settled(l), a && !x.isUri(a) && this.updateEmptyWindowAssociation(a, o, !!o.isTransient), this.updateProfiles([
                    o
                ], [], []), o;
            } finally{
                this.profileCreationPromises.delete(t);
            }
        })(), this.profileCreationPromises.set(t, s)), s;
    }
    async updateProfile(e, t) {
        const n = [];
        for (const s of this.profiles){
            let i;
            if (e.id === s.id) s.isDefault ? t.workspaces && (i = s, i.workspaces = t.workspaces) : i = ek(s.id, t.name ?? s.name, s.location, this.profilesCacheHome, {
                icon: t.icon === null ? void 0 : t.icon ?? s.icon,
                transient: t.transient ?? s.isTransient,
                useDefaultFlags: t.useDefaultFlags ?? s.useDefaultFlags,
                workspaces: t.workspaces ?? s.workspaces
            }, this.defaultProfile);
            else if (t.workspaces) {
                const a = s.workspaces?.filter((o)=>!t.workspaces?.some((l)=>this.uriIdentityService.extUri.isEqual(o, l)));
                s.workspaces?.length !== a?.length && (i = s, i.workspaces = a);
            }
            i && n.push(i);
        }
        if (!n.length) throw e.isDefault ? new Error("Cannot update default profile") : new Error(`Profile '${e.name}' does not exist`);
        this.updateProfiles([], [], n);
        const r = this.profiles.find((s)=>s.id === e.id);
        if (!r) throw new Error(`Profile '${e.name}' was not updated`);
        return r;
    }
    async removeProfile(e) {
        if (e.isDefault) throw new Error("Cannot remove default profile");
        const t = this.profiles.find((r)=>r.id === e.id);
        if (!t) throw new Error(`Profile '${e.name}' does not exist`);
        const n = [];
        this._onWillRemoveProfile.fire({
            profile: t,
            join (r) {
                n.push(r);
            }
        });
        try {
            await Promise.allSettled(n);
        } catch (r) {
            this.logService.error(r);
        }
        this.updateProfiles([], [
            t
        ], []);
        try {
            await this.fileService.del(t.cacheHome, {
                recursive: !0
            });
        } catch (r) {
            ai(r) !== 1 && this.logService.error(r);
        }
    }
    async setProfileForWorkspace(e, t) {
        const n = this.profiles.find((s)=>s.id === t.id);
        if (!n) throw new Error(`Profile '${t.name}' does not exist`);
        const r = this.getWorkspace(e);
        if (x.isUri(r)) {
            const s = n.workspaces ? [
                ...n.workspaces
            ] : [];
            s.some((i)=>this.uriIdentityService.extUri.isEqual(i, r)) || (s.push(r), await this.updateProfile(n, {
                workspaces: s
            }));
        } else this.updateEmptyWindowAssociation(r, n, !1), this.updateStoredProfiles(this.profiles);
    }
    unsetWorkspace(e, t = !1) {
        const n = this.getWorkspace(e);
        if (x.isUri(n)) {
            const r = this.getProfileForWorkspace(e);
            r && this.updateProfile(r, {
                workspaces: r.workspaces?.filter((s)=>!this.uriIdentityService.extUri.isEqual(s, n))
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
        return x.isUri(t) ? this.profiles.find((n)=>n.workspaces?.some((r)=>this.uriIdentityService.extUri.isEqual(r, t))) : this.profilesObject.emptyWindows.get(t) ?? this.transientProfilesObject.emptyWindows.get(t);
    }
    getWorkspace(e) {
        return Zr(e) ? e.uri : rr(e) ? e.configPath : e.id;
    }
    isProfileAssociatedToWorkspace(e) {
        return !!(e.workspaces?.length || [
            ...this.profilesObject.emptyWindows.values()
        ].some((t)=>this.uriIdentityService.extUri.isEqual(t.location, e.location)) || [
            ...this.transientProfilesObject.emptyWindows.values()
        ].some((t)=>this.uriIdentityService.extUri.isEqual(t.location, e.location)));
    }
    updateProfiles(e, t, n) {
        const r = [
            ...this.profiles,
            ...e
        ], s = this.transientProfilesObject.profiles;
        this.transientProfilesObject.profiles = [];
        const i = [];
        for (let a of r){
            if (t.some((o)=>a.id === o.id)) {
                for (const o of [
                    ...this.profilesObject.emptyWindows.keys()
                ])a.id === this.profilesObject.emptyWindows.get(o)?.id && this.profilesObject.emptyWindows.delete(o);
                continue;
            }
            if (!a.isDefault) {
                a = n.find((l)=>a.id === l.id) ?? a;
                const o = s.find((l)=>a.id === l.id);
                if (a.isTransient) this.transientProfilesObject.profiles.push(a);
                else if (o) {
                    for (const [l, d] of this.transientProfilesObject.emptyWindows.entries())if (a.id === d.id) {
                        this.transientProfilesObject.emptyWindows.delete(l), this.profilesObject.emptyWindows.set(l, a);
                        break;
                    }
                }
            }
            a.workspaces?.length === 0 && (a.workspaces = void 0), i.push(a);
        }
        this.updateStoredProfiles(i), this.triggerProfilesChanges(e, t, n);
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
        const t = [], n = {}, r = {};
        for (const s of e)if (!s.isTransient && (s.isDefault || t.push({
            location: s.location,
            name: s.name,
            icon: s.icon,
            useDefaultFlags: s.useDefaultFlags
        }), s.workspaces)) for (const i of s.workspaces)n[i.toString()] = s.id;
        for (const [s, i] of this.profilesObject.emptyWindows.entries())r[s.toString()] = i.id;
        this.saveStoredProfileAssociations({
            workspaces: n,
            emptyWindows: r
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
}, cd.PROFILES_KEY = "userDataProfiles", cd.PROFILE_ASSOCIATIONS_KEY = "profileAssociations", cd = B([
    w(0, si),
    w(1, cn),
    w(2, Br),
    w(3, Z)
], cd);

}

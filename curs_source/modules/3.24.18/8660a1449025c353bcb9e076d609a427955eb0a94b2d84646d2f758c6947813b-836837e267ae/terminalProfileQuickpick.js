import { D } from "./Iwo.js";
import { Svl, _2n, kVe } from "./Ycg.js";
import { gs, yt } from "./codicons.js";
import { or, yi } from "./configuration.js";
import { b_ } from "./iconRegistry.js";
import { Bt } from "./nls.js";
import { Ks, Wr, Yn } from "./notification.js";
import { Ku, Ul } from "./path_2.js";
import { Cl, Gu } from "./quickInput.js";
import { ZEt } from "./terminalIcon.js";
import { NAi, QRg } from "./terminalIcons.js";
import { JCe, Zze, bR } from "./terminal_3.js";
import { Gn, ta } from "./themables.js";
import { Dl, Ml } from "./themeService.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { E5e } from "./ze.js";
var hhs;
export { hhs };
var __wakaru_MDk_initialized = false;
export function MDk() {
if (__wakaru_MDk_initialized) return;
__wakaru_MDk_initialized = true;
"use strict";
E(), gs(), or(), Gu(), ZEt(), NAi(), Bt(), Dl(), ta(), bR(), b_(), Ul(), Ks(), hhs = class {
    constructor(t, e, n, i, r, s){
        this._terminalProfileService = t, this._terminalProfileResolverService = e, this._configurationService = n, this._quickInputService = i, this._themeService = r, this._notificationService = s;
    }
    async showAndGetResult(t) {
        const e = await this._terminalProfileService.getPlatformKey(), n = "terminal.integrated.profiles." + e, i = await this._createAndShow(t), r = `terminal.integrated.defaultProfile.${e}`;
        if (i) {
            if (t === "setDefault") {
                if ("command" in i.profile) return;
                if ("id" in i.profile) return await this._configurationService.updateValue(r, i.profile.title, 2), {
                    config: {
                        extensionIdentifier: i.profile.extensionIdentifier,
                        id: i.profile.id,
                        title: i.profile.title,
                        options: {
                            color: i.profile.color,
                            icon: i.profile.icon
                        }
                    },
                    keyMods: i.keyMods
                };
                if ("isAutoDetected" in i.profile) {
                    const s = await this._configurationService.getValue(n);
                    if (typeof s == "object") {
                        const o = {
                            path: i.profile.path
                        };
                        i.profile.args && (o.args = i.profile.args), s[i.profile.profileName] = this._createNewProfileConfig(i.profile), await this._configurationService.updateValue(n, s, 2);
                    }
                }
                await this._configurationService.updateValue(r, i.profileName, 2);
            } else if (t === "createInstance") return "id" in i.profile ? {
                config: {
                    extensionIdentifier: i.profile.extensionIdentifier,
                    id: i.profile.id,
                    title: i.profile.title,
                    options: {
                        icon: i.profile.icon,
                        color: i.profile.color
                    }
                },
                keyMods: i.keyMods
            } : {
                config: i.profile,
                keyMods: i.keyMods
            };
            return "profileName" in i.profile ? i.profile.profileName : i.profile.title;
        }
    }
    async _createAndShow(t) {
        const e = await this._terminalProfileService.getPlatformKey(), n = this._terminalProfileService.availableProfiles, i = "terminal.integrated.profiles." + e, r = this._terminalProfileService.getDefaultProfileName();
        let s;
        const o = {
            placeHolder: D(t === "createInstance" ? 10346 : 10347, null),
            onDidTriggerItemButton: async (p)=>{
                if (!await this._isProfileSafe(p.item.profile) || "command" in p.item.profile || "id" in p.item.profile) return;
                const g = this._configurationService.getValue("terminal.integrated.profiles." + e), f = g ? Object.keys(g) : [], _ = await this._quickInputService.input({
                    prompt: D(10348, null),
                    value: p.item.profile.profileName,
                    validateInput: async (y)=>{
                        if (f.includes(y)) return D(10349, null);
                    }
                });
                if (!_) return;
                const b = {
                    ...g,
                    [_]: this._createNewProfileConfig(p.item.profile)
                };
                await this._configurationService.updateValue(i, b, 2);
            },
            onKeyMods: (p)=>s = p
        }, a = [], l = n.filter((p)=>!p.isAutoDetected), c = n.filter((p)=>p.isAutoDetected);
        l.length > 0 && (a.push({
            type: "separator",
            label: D(10350, null)
        }), a.push(...this._sortProfileQuickPickItems(l.map((p)=>this._createProfileQuickPickItem(p)), r))), a.push({
            type: "separator",
            label: D(10351, null)
        });
        const u = [];
        for (const p of this._terminalProfileService.contributedProfiles){
            let g;
            typeof p.icon == "string" && (p.icon.startsWith("$(") ? g = Gn.fromString(p.icon) : g = Gn.fromId(p.icon)), (!g || !E5e().getIcon(g.id)) && (g = this._terminalProfileResolverService.getDefaultIcon());
            const f = _2n(p, this._themeService.getColorTheme().type, !0), _ = kVe(p), b = [];
            f && b.push(...f), _ && b.push(_), u.push({
                label: `$(${g.id}) ${p.title}`,
                profile: {
                    extensionIdentifier: p.extensionIdentifier,
                    title: p.title,
                    icon: p.icon,
                    id: p.id,
                    color: p.color
                },
                profileName: p.title,
                iconClasses: b
            });
        }
        u.length > 0 && a.push(...this._sortProfileQuickPickItems(u, r)), c.length > 0 && (a.push({
            type: "separator",
            label: D(10352, null)
        }), a.push(...this._sortProfileQuickPickItems(c.map((p)=>this._createProfileQuickPickItem(p)), r)));
        const d = Svl(this._themeService.getColorTheme()), h = await this._quickInputService.pick(a, o);
        if (d.dispose(), !!h && await this._isProfileSafe(h.profile)) return s && (h.keyMods = s), h;
    }
    _createNewProfileConfig(t) {
        const e = {
            path: t.path
        };
        return t.args && (e.args = t.args), t.env && (e.env = t.env), e;
    }
    async _isProfileSafe(t) {
        const e = "isUnsafePath" in t && t.isUnsafePath, n = "requiresUnsafePath" in t && t.requiresUnsafePath;
        return !e && !n ? !0 : await new Promise((i)=>{
            const r = [];
            e && r.push(t.path), n && r.push(n), this._notificationService.prompt(Yn.Warning, D(10353, null, `"${r.join(",")}"`), [
                {
                    label: D(10354, null),
                    run: ()=>i(!0)
                },
                {
                    label: D(10355, null),
                    run: ()=>i(!1)
                }
            ]).onDidClose(()=>i(!1));
        });
    }
    _createProfileQuickPickItem(t) {
        const e = [
            {
                iconClass: Gn.asClassName(QRg),
                tooltip: D(10356, null)
            }
        ], i = `$(${(t.icon && Gn.isThemeIcon(t.icon) ? t.icon : yt.terminal).id}) ${t.profileName}`, r = t.isFromPath ? Ku(t.path) : t.path, s = kVe(t), o = [];
        if (s && o.push(s), t.args) {
            if (typeof t.args == "string") return {
                label: i,
                description: `${t.path} ${t.args}`,
                profile: t,
                profileName: t.profileName,
                buttons: e,
                iconClasses: o
            };
            const a = t.args.map((l)=>l.includes(" ") ? `"${l.replace(/"/g, '\\"')}"` : l).join(" ");
            return {
                label: i,
                description: `${r} ${a}`,
                profile: t,
                profileName: t.profileName,
                buttons: e,
                iconClasses: o
            };
        }
        return {
            label: i,
            description: r,
            profile: t,
            profileName: t.profileName,
            buttons: e,
            iconClasses: o
        };
    }
    _sortProfileQuickPickItems(t, e) {
        return t.sort((n, i)=>i.profileName === e ? 1 : n.profileName === e ? -1 : n.profileName.localeCompare(i.profileName));
    }
}, hhs = Re([
    F(0, Zze),
    F(1, JCe),
    F(2, yi),
    F(3, Cl),
    F(4, Ml),
    F(5, Wr)
], hhs);

}

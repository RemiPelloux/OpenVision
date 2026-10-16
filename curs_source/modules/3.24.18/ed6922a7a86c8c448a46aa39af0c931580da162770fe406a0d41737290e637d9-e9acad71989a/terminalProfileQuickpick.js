import { S } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { Pe, _i } from "./codicons.js";
import { Cn, qt } from "./configuration.js";
import { dh } from "./iconRegistry.js";
import { rt } from "./nls.js";
import { di, ji, pi } from "./notification.js";
import { Xl, ba } from "./path_2.js";
import { Nwe } from "./qIc.js";
import { Gs, Ya } from "./quickInput.js";
import { c7e } from "./terminalIcon.js";
import { hzt, w5h } from "./terminalIcons.js";
import { $Do } from "./terminalInstance.js";
import { Int, dbe } from "./terminalTabsList.js";
import { X_e, hT, lte } from "./terminal_3.js";
import { Ft, Sr } from "./themables.js";
import { $r, as } from "./themeService.js";
import { x } from "./tslib.es6.js";
var zir;
export { zir };
var __wakaru_wh__initialized = false;
export function wh_() {
if (__wakaru_wh__initialized) return;
__wakaru_wh__initialized = true;
"use strict";
x(), _i(), Cn(), Ya(), c7e(), hzt(), rt(), as(), Sr(), hT(), dh(), ba(), ji(), zir = class {
    constructor(e, t, n, i, r, s){
        this._terminalProfileService = e, this._terminalProfileResolverService = t, this._configurationService = n, this._quickInputService = i, this._themeService = r, this._notificationService = s;
    }
    async showAndGetResult(e) {
        const t = await this._terminalProfileService.getPlatformKey(), n = "terminal.integrated.profiles." + t, i = await this._createAndShow(e), r = `terminal.integrated.defaultProfile.${t}`;
        if (i) {
            if (e === "setDefault") {
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
            } else if (e === "createInstance") return "id" in i.profile ? {
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
    async _createAndShow(e) {
        const t = await this._terminalProfileService.getPlatformKey(), n = this._terminalProfileService.availableProfiles, i = "terminal.integrated.profiles." + t, r = this._terminalProfileService.getDefaultProfileName();
        let s;
        const o = {
            placeHolder: S(e === "createInstance" ? 10346 : 10347, null),
            onDidTriggerItemButton: async (g)=>{
                if (!await this._isProfileSafe(g.item.profile) || "command" in g.item.profile || "id" in g.item.profile) return;
                const f = this._configurationService.getValue("terminal.integrated.profiles." + t), v = f ? Object.keys(f) : [], b = await this._quickInputService.input({
                    prompt: S(10348, null),
                    value: g.item.profile.profileName,
                    validateInput: async (T)=>{
                        if (v.includes(T)) return S(10349, null);
                    }
                });
                if (!b) return;
                const y = {
                    ...f,
                    [b]: this._createNewProfileConfig(g.item.profile)
                };
                await this._configurationService.updateValue(i, y, 2);
            },
            onKeyMods: (g)=>s = g
        }, a = [], c = n.filter((g)=>!g.isAutoDetected), l = n.filter((g)=>g.isAutoDetected);
        c.length > 0 && (a.push({
            type: "separator",
            label: S(10350, null)
        }), a.push(...this._sortProfileQuickPickItems(c.map((g)=>this._createProfileQuickPickItem(g)), r))), a.push({
            type: "separator",
            label: S(10351, null)
        });
        const u = [];
        for (const g of this._terminalProfileService.contributedProfiles){
            let f;
            typeof g.icon == "string" && (g.icon.startsWith("$(") ? f = Ft.fromString(g.icon) : f = Ft.fromId(g.icon)), (!f || !Nwe().getIcon(f.id)) && (f = this._terminalProfileResolverService.getDefaultIcon());
            const v = Int(g, this._themeService.getColorTheme().type, !0), b = dbe(g), y = [];
            v && y.push(...v), b && y.push(b), u.push({
                label: `$(${f.id}) ${g.title}`,
                profile: {
                    extensionIdentifier: g.extensionIdentifier,
                    title: g.title,
                    icon: g.icon,
                    id: g.id,
                    color: g.color
                },
                profileName: g.title,
                iconClasses: y
            });
        }
        u.length > 0 && a.push(...this._sortProfileQuickPickItems(u, r)), l.length > 0 && (a.push({
            type: "separator",
            label: S(10352, null)
        }), a.push(...this._sortProfileQuickPickItems(l.map((g)=>this._createProfileQuickPickItem(g)), r)));
        const h = $Do(this._themeService.getColorTheme()), p = await this._quickInputService.pick(a, o);
        if (h.dispose(), !!p && await this._isProfileSafe(p.profile)) return s && (p.keyMods = s), p;
    }
    _createNewProfileConfig(e) {
        const t = {
            path: e.path
        };
        return e.args && (t.args = e.args), e.env && (t.env = e.env), t;
    }
    async _isProfileSafe(e) {
        const t = "isUnsafePath" in e && e.isUnsafePath, n = "requiresUnsafePath" in e && e.requiresUnsafePath;
        return !t && !n ? !0 : await new Promise((i)=>{
            const r = [];
            t && r.push(e.path), n && r.push(n), this._notificationService.prompt(pi.Warning, S(10353, null, `"${r.join(",")}"`), [
                {
                    label: S(10354, null),
                    run: ()=>i(!0)
                },
                {
                    label: S(10355, null),
                    run: ()=>i(!1)
                }
            ]).onDidClose(()=>i(!1));
        });
    }
    _createProfileQuickPickItem(e) {
        const t = [
            {
                iconClass: Ft.asClassName(w5h),
                tooltip: S(10356, null)
            }
        ], i = `$(${(e.icon && Ft.isThemeIcon(e.icon) ? e.icon : Pe.terminal).id}) ${e.profileName}`, r = e.isFromPath ? Xl(e.path) : e.path, s = dbe(e), o = [];
        if (s && o.push(s), e.args) {
            if (typeof e.args == "string") return {
                label: i,
                description: `${e.path} ${e.args}`,
                profile: e,
                profileName: e.profileName,
                buttons: t,
                iconClasses: o
            };
            const a = e.args.map((c)=>c.includes(" ") ? `"${c.replace(/"/g, '\\"')}"` : c).join(" ");
            return {
                label: i,
                description: `${r} ${a}`,
                profile: e,
                profileName: e.profileName,
                buttons: t,
                iconClasses: o
            };
        }
        return {
            label: i,
            description: r,
            profile: e,
            profileName: e.profileName,
            buttons: t,
            iconClasses: o
        };
    }
    _sortProfileQuickPickItems(e, t) {
        return e.sort((n, i)=>i.profileName === t ? 1 : n.profileName === t ? -1 : n.profileName.localeCompare(i.profileName));
    }
}, zir = ie([
    C(0, X_e),
    C(1, lte),
    C(2, qt),
    C(3, Gs),
    C(4, $r),
    C(5, di)
], zir);

}

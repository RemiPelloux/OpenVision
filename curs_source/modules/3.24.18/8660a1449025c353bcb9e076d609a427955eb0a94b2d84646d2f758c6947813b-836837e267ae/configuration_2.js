import { D, Di, Gt, Qe, rd, st, tt, xa } from "./Iwo.js";
import { df, qn } from "./async.js";
import { or, yi } from "./configuration.js";
import { Vg, gp } from "./configurationRegistry.js";
import { Bt } from "./nls.js";
import { cp } from "./objects.js";
import { Eo, Fi } from "./platform_2.js";
import { Nh, Sg } from "./remoteAgentService.js";
import { E } from "./tslib.es6.js";
import { F, JR, Re, gP } from "./userDataProfile.js";
import { Sr, yr } from "./workspace.js";
import { Rp } from "./ze.js";
var DCi, qpe, sns, pel, mel, eU, FKm, NCi, WIn, Qqt, Jqt, GIn;
export { DCi, FKm, GIn, Jqt, NCi, Qqt, WIn, eU, mel, pel, qpe, sns };
var __wakaru_sF_initialized = false;
export function sF() {
if (__wakaru_sF_initialized) return;
__wakaru_sF_initialized = true;
"use strict";
E(), Bt(), Vg(), Eo(), Sr(), or(), Qe(), Gt(), Sg(), Di(), cp(), qn(), JR(), DCi = Object.freeze({
    id: "application",
    order: 100,
    title: D(4270, null),
    type: "object"
}), qpe = Object.freeze({
    id: "workbench",
    order: 7,
    title: D(4271, null),
    type: "object"
}), sns = Object.freeze({
    id: "security",
    scope: 1,
    title: D(4272, null),
    type: "object",
    order: 7
}), pel = Object.freeze({
    id: "problems",
    title: D(4273, null),
    type: "object",
    order: 101
}), mel = Object.freeze({
    id: "window",
    order: 8,
    title: D(4274, null),
    type: "object"
}), eU = {
    ConfigurationMigration: "base.contributions.configuration.migration"
}, FKm = class {
    constructor(){
        this.migrations = [], this._onDidRegisterConfigurationMigrations = new tt, this.onDidRegisterConfigurationMigration = this._onDidRegisterConfigurationMigrations.event;
    }
    registerConfigurationMigrations(t) {
        this.migrations.push(...t);
    }
}, NCi = new FKm, Fi.add(eU.ConfigurationMigration, NCi), WIn = class extends st {
    constructor(t, e){
        super(), this.configurationService = t, this.workspaceService = e, this._register(this.workspaceService.onDidChangeWorkspaceFolders(async (n)=>{
            for (const i of n.added)await this.migrateConfigurationsForFolder(i, NCi.migrations);
        })), this.migrateConfigurations(NCi.migrations), this._register(NCi.onDidRegisterConfigurationMigration((n)=>this.migrateConfigurations(n)));
    }
    async migrateConfigurations(t) {
        await this.migrateConfigurationsForFolder(void 0, t);
        for (const e of this.workspaceService.getWorkspace().folders)await this.migrateConfigurationsForFolder(e, t);
    }
    async migrateConfigurationsForFolder(t, e) {
        await Promise.all([
            e.map((n)=>this.migrateConfigurationsForFolderAndOverride(n, t?.uri))
        ]);
    }
    async migrateConfigurationsForFolderAndOverride(t, e) {
        const n = this.configurationService.inspect(t.key, {
            resource: e
        }), i = this.workspaceService.getWorkbenchState() === 3 ? [
            [
                "user",
                2
            ],
            [
                "userLocal",
                3
            ],
            [
                "userRemote",
                4
            ],
            [
                "workspace",
                5
            ],
            [
                "workspaceFolder",
                6
            ]
        ] : [
            [
                "user",
                2
            ],
            [
                "userLocal",
                3
            ],
            [
                "userRemote",
                4
            ],
            [
                "workspace",
                5
            ]
        ];
        for (const [r, s] of i){
            const o = n[r];
            if (!o) continue;
            const a = [];
            if (o.value !== void 0) {
                const l = await this.runMigration(t, r, o.value, e, void 0);
                for (const c of l ?? [])a.push([
                    c,
                    []
                ]);
            }
            for (const { identifiers: l, value: c } of o.overrides ?? [])if (c !== void 0) {
                const u = await this.runMigration(t, r, c, e, l);
                for (const d of u ?? [])a.push([
                    d,
                    l
                ]);
            }
            a.length && await Promise.allSettled(a.map(async ([[l, c], u])=>this.configurationService.updateValue(l, c.value, {
                    resource: e,
                    overrideIdentifiers: u
                }, s)));
        }
    }
    async runMigration(t, e, n, i, r) {
        const s = (a)=>{
            const c = this.configurationService.inspect(a, {
                resource: i
            })[e];
            if (c) return r ? c.overrides?.find(({ identifiers: u })=>Rp(u, r))?.value : c.value;
        }, o = await t.migrateFn(n, s);
        return Array.isArray(o) ? o : [
            [
                t.key,
                o
            ]
        ];
    }
}, WIn.ID = "workbench.contrib.configurationMigration", WIn = Re([
    F(0, yi),
    F(1, yr)
], WIn), Qqt = class extends st {
    constructor(t){
        super(), this.remoteAgentService = t, this._ready = new df, this.ready = this._ready.p, this.create();
    }
    async create() {
        try {
            await this.doCreate();
        } finally{
            this._ready.complete();
        }
    }
    async doCreate() {
        if (!xa && (await this.remoteAgentService.getEnvironment())?.os !== rd.Windows) return;
        Fi.as(gp.Configuration).registerConfiguration({
            ...sns,
            properties: {
                "security.allowedUNCHosts": {
                    type: "array",
                    items: {
                        type: "string",
                        pattern: "^[^\\\\]+$",
                        patternErrorMessage: D(4275, null)
                    },
                    default: [],
                    markdownDescription: D(4276, null),
                    scope: 3
                },
                "security.restrictUNCAccess": {
                    type: "boolean",
                    default: !0,
                    markdownDescription: D(4277, null),
                    scope: 3
                }
            }
        });
    }
}, Qqt.ID = "workbench.contrib.dynamicWorkbenchSecurityConfiguration", Qqt = Re([
    F(0, Nh)
], Qqt), Jqt = "window.newWindowProfile", GIn = class extends st {
    constructor(t, e){
        super(), this.userDataProfilesService = t, this.configurationService = e, this.registerNewWindowProfileConfiguration(), this._register(this.userDataProfilesService.onDidChangeProfiles((n)=>this.registerNewWindowProfileConfiguration())), this.setNewWindowProfile(), this.checkAndResetNewWindowProfileConfig(), this._register(e.onDidChangeConfiguration((n)=>{
            n.source !== 7 && n.affectsConfiguration(Jqt) && this.setNewWindowProfile();
        })), this._register(this.userDataProfilesService.onDidChangeProfiles(()=>this.checkAndResetNewWindowProfileConfig()));
    }
    registerNewWindowProfileConfiguration() {
        const t = Fi.as(gp.Configuration), e = {
            ...mel,
            properties: {
                [Jqt]: {
                    type: [
                        "string",
                        "null"
                    ],
                    default: null,
                    enum: [
                        ...this.userDataProfilesService.profiles.map((n)=>n.name),
                        null
                    ],
                    enumItemLabels: [
                        ...this.userDataProfilesService.profiles.map((n)=>""),
                        D(4278, null)
                    ],
                    description: D(4279, null),
                    scope: 1
                }
            }
        };
        this.configurationNode ? t.updateConfigurations({
            add: [
                e
            ],
            remove: [
                this.configurationNode
            ]
        }) : t.registerConfiguration(e), this.configurationNode = e;
    }
    setNewWindowProfile() {
        const t = this.configurationService.getValue(Jqt);
        this.newWindowProfile = t ? this.userDataProfilesService.profiles.find((e)=>e.name === t) : void 0;
    }
    checkAndResetNewWindowProfileConfig() {
        const t = this.configurationService.getValue(Jqt);
        if (!t) return;
        const e = this.newWindowProfile ? this.userDataProfilesService.profiles.find((n)=>n.id === this.newWindowProfile.id) : void 0;
        t !== e?.name && this.configurationService.updateValue(Jqt, e?.name);
    }
}, GIn.ID = "workbench.contrib.dynamicWindowConfiguration", GIn = Re([
    F(0, gP),
    F(1, yi)
], GIn);

}

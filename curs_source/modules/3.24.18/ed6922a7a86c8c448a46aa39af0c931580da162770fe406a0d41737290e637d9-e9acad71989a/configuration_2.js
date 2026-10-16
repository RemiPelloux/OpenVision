import { Oo, S, Se, Ul, bt, jn, ve, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { Am, bn } from "./async.js";
import { Cn, qt } from "./configuration.js";
import { iu, uh } from "./configurationRegistry.js";
import { rt } from "./nls.js";
import { bu } from "./objects.js";
import { kn, rr } from "./platform_2.js";
import { yh } from "./qIc.js";
import { Ip, Kd } from "./remoteAgentService.js";
import { x } from "./tslib.es6.js";
import { dC, jb } from "./userDataProfile.js";
import { Jn, ci } from "./workspace.js";
var BOn, lq, HKi, Z_o, Q_o, M2, alh, UOn, KGt, Rwt, N_e, YGt;
export { BOn, HKi, KGt, M2, N_e, Q_o, Rwt, UOn, YGt, Z_o, alh, lq };
var __wakaru_NI_initialized = false;
export function NI() {
if (__wakaru_NI_initialized) return;
__wakaru_NI_initialized = true;
"use strict";
x(), rt(), uh(), rr(), ci(), Cn(), Se(), bt(), Ip(), jn(), bu(), bn(), dC(), BOn = Object.freeze({
    id: "application",
    order: 100,
    title: S(4270, null),
    type: "object"
}), lq = Object.freeze({
    id: "workbench",
    order: 7,
    title: S(4271, null),
    type: "object"
}), HKi = Object.freeze({
    id: "security",
    scope: 1,
    title: S(4272, null),
    type: "object",
    order: 7
}), Z_o = Object.freeze({
    id: "problems",
    title: S(4273, null),
    type: "object",
    order: 101
}), Q_o = Object.freeze({
    id: "window",
    order: 8,
    title: S(4274, null),
    type: "object"
}), M2 = {
    ConfigurationMigration: "base.contributions.configuration.migration"
}, alh = class {
    constructor(){
        this.migrations = [], this._onDidRegisterConfigurationMigrations = new ve, this.onDidRegisterConfigurationMigration = this._onDidRegisterConfigurationMigrations.event;
    }
    registerConfigurationMigrations(e) {
        this.migrations.push(...e);
    }
}, UOn = new alh, kn.add(M2.ConfigurationMigration, UOn), KGt = class extends we {
    constructor(e, t){
        super(), this.configurationService = e, this.workspaceService = t, this._register(this.workspaceService.onDidChangeWorkspaceFolders(async (n)=>{
            for (const i of n.added)await this.migrateConfigurationsForFolder(i, UOn.migrations);
        })), this.migrateConfigurations(UOn.migrations), this._register(UOn.onDidRegisterConfigurationMigration((n)=>this.migrateConfigurations(n)));
    }
    async migrateConfigurations(e) {
        await this.migrateConfigurationsForFolder(void 0, e);
        for (const t of this.workspaceService.getWorkspace().folders)await this.migrateConfigurationsForFolder(t, e);
    }
    async migrateConfigurationsForFolder(e, t) {
        await Promise.all([
            t.map((n)=>this.migrateConfigurationsForFolderAndOverride(n, e?.uri))
        ]);
    }
    async migrateConfigurationsForFolderAndOverride(e, t) {
        const n = this.configurationService.inspect(e.key, {
            resource: t
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
                const c = await this.runMigration(e, r, o.value, t, void 0);
                for (const l of c ?? [])a.push([
                    l,
                    []
                ]);
            }
            for (const { identifiers: c, value: l } of o.overrides ?? [])if (l !== void 0) {
                const u = await this.runMigration(e, r, l, t, c);
                for (const h of u ?? [])a.push([
                    h,
                    c
                ]);
            }
            a.length && await Promise.allSettled(a.map(async ([[c, l], u])=>this.configurationService.updateValue(c, l.value, {
                    resource: t,
                    overrideIdentifiers: u
                }, s)));
        }
    }
    async runMigration(e, t, n, i, r) {
        const s = (a)=>{
            const l = this.configurationService.inspect(a, {
                resource: i
            })[t];
            if (l) return r ? l.overrides?.find(({ identifiers: u })=>yh(u, r))?.value : l.value;
        }, o = await e.migrateFn(n, s);
        return Array.isArray(o) ? o : [
            [
                e.key,
                o
            ]
        ];
    }
}, KGt.ID = "workbench.contrib.configurationMigration", KGt = ie([
    C(0, qt),
    C(1, Jn)
], KGt), Rwt = class extends we {
    constructor(e){
        super(), this.remoteAgentService = e, this._ready = new Am, this.ready = this._ready.p, this.create();
    }
    async create() {
        try {
            await this.doCreate();
        } finally{
            this._ready.complete();
        }
    }
    async doCreate() {
        if (!Oo && (await this.remoteAgentService.getEnvironment())?.os !== Ul.Windows) return;
        kn.as(iu.Configuration).registerConfiguration({
            ...HKi,
            properties: {
                "security.allowedUNCHosts": {
                    type: "array",
                    items: {
                        type: "string",
                        pattern: "^[^\\\\]+$",
                        patternErrorMessage: S(4275, null)
                    },
                    default: [],
                    markdownDescription: S(4276, null),
                    scope: 3
                },
                "security.restrictUNCAccess": {
                    type: "boolean",
                    default: !0,
                    markdownDescription: S(4277, null),
                    scope: 3
                }
            }
        });
    }
}, Rwt.ID = "workbench.contrib.dynamicWorkbenchSecurityConfiguration", Rwt = ie([
    C(0, Kd)
], Rwt), N_e = "window.newWindowProfile", YGt = class extends we {
    constructor(e, t){
        super(), this.userDataProfilesService = e, this.configurationService = t, this.registerNewWindowProfileConfiguration(), this._register(this.userDataProfilesService.onDidChangeProfiles((n)=>this.registerNewWindowProfileConfiguration())), this.setNewWindowProfile(), this.checkAndResetNewWindowProfileConfig(), this._register(t.onDidChangeConfiguration((n)=>{
            n.source !== 7 && n.affectsConfiguration(N_e) && this.setNewWindowProfile();
        })), this._register(this.userDataProfilesService.onDidChangeProfiles(()=>this.checkAndResetNewWindowProfileConfig()));
    }
    registerNewWindowProfileConfiguration() {
        const e = kn.as(iu.Configuration), t = {
            ...Q_o,
            properties: {
                [N_e]: {
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
                        S(4278, null)
                    ],
                    description: S(4279, null),
                    scope: 1
                }
            }
        };
        this.configurationNode ? e.updateConfigurations({
            add: [
                t
            ],
            remove: [
                this.configurationNode
            ]
        }) : e.registerConfiguration(t), this.configurationNode = t;
    }
    setNewWindowProfile() {
        const e = this.configurationService.getValue(N_e);
        this.newWindowProfile = e ? this.userDataProfilesService.profiles.find((t)=>t.name === e) : void 0;
    }
    checkAndResetNewWindowProfileConfig() {
        const e = this.configurationService.getValue(N_e);
        if (!e) return;
        const t = this.newWindowProfile ? this.userDataProfilesService.profiles.find((n)=>n.id === this.newWindowProfile.id) : void 0;
        e !== t?.name && this.configurationService.updateValue(N_e, t?.name);
    }
}, YGt.ID = "workbench.contrib.dynamicWindowConfiguration", YGt = ie([
    C(0, jb),
    C(1, qt)
], YGt);

}

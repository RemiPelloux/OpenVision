import { Qe, st } from "./Iwo.js";
import { FBo, n2 } from "./aiserver_pb.js";
import { SLa, _Lp, gf } from "./ipa.js";
import { IB, Lae, fLp } from "./reactiveStorageTypes.js";
import { Z81, cPe } from "./stateMigrations.js";
import { Zi, ki } from "./storage_2.js";
import { v1 } from "./store.js";
import { E } from "./tslib.es6.js";
import { wu } from "./utilities_3.js";
import { Hu, R5 } from "./utils_pb.js";
import { at } from "./web.js";
import { FTn, MYr, NYr } from "./yBp.js";
import { Cn, Det, Net, V_, Wt, XOe, pi, pwe } from "./ze.js";
var Rki, fGt, vGt, LYr, Pki, JUa, eja, tja, OYr, FYr, Mki, i0m, r0m, s0m, o0m, BYr, UYr, mot, jYr, nja, J81, $Yr, BTn;
export { $Yr, BTn, BYr, FYr, J81, JUa, LYr, Mki, OYr, Pki, Rki, UYr, eja, fGt, i0m, jYr, mot, nja, o0m, r0m, s0m, tja, vGt };
var __wakaru_UTn_initialized = false;
export function UTn() {
if (__wakaru_UTn_initialized) return;
__wakaru_UTn_initialized = true;
"use strict";
E(), pi(), v1(), at(), n2(), Hu(), Qe(), Zi(), Lae(), Z81(), wu(), Rki = "https://cursor.com", fGt = "https://api2.cursor.sh", vGt = "https://api3.cursor.sh", LYr = "https://api4.cursor.sh", Pki = "https://api4.cursor.sh", JUa = "https://api3.cursor.sh", eja = "https://repo42.cursor.sh", tja = "https://api.origin.cursor.com", OYr = "https://api.origin-staging.cursor.com", FYr = "https://agent.api5.cursor.sh", Mki = "https://agentn.api5.cursor.sh", i0m = "https://agent-gcpp-uswest.api5.cursor.sh", r0m = "https://agentn-gcpp-uswest.api5.cursor.sh", s0m = "https://agentn-gcpp-eucentral.api5.cursor.sh", o0m = "https://agentn-gcpp-apsoutheast.api5.cursor.sh", BYr = "KbZUR41cY7W6zRSdpSUJ7I7mLYBKOCmB", UYr = "prod.authentication.cursor.sh", mot = {
    composer: {
        defaultModel: "default",
        fallbackModels: [],
        bestOfNDefaultModels: [
            "composer-1",
            "claude-4.5-opus-high",
            "gpt-5.3-codex-high"
        ]
    },
    cmdK: {
        defaultModel: "default",
        fallbackModels: [],
        bestOfNDefaultModels: []
    },
    backgroundComposer: {
        defaultModel: "default",
        fallbackModels: [],
        bestOfNDefaultModels: []
    },
    planExecution: {
        defaultModel: "default",
        fallbackModels: [],
        bestOfNDefaultModels: []
    },
    spec: {
        defaultModel: "default",
        fallbackModels: [],
        bestOfNDefaultModels: []
    },
    deepSearch: {
        defaultModel: "default",
        fallbackModels: [],
        bestOfNDefaultModels: []
    },
    quickAgent: {
        defaultModel: "default",
        fallbackModels: [],
        bestOfNDefaultModels: []
    }
}, jYr = {
    composerState: {
        ...IB
    },
    mcpServers: [],
    mcpDisabledTools: [],
    availableDefaultModels2: SLa(),
    featureModelConfigs: mot,
    backgroundComposerState: {},
    dialogDontAskAgainPreferences: {},
    cursorIgnore: {
        hierarchicalEnabled: !1,
        ignoreSymlinks: !1
    },
    teamAdminSettings: {
        cursorIgnore: {
            hierarchicalEnabled: !1,
            ignoreSymlinks: !1
        },
        extensionSigningSettings: {
            verificationEnabled: !1
        },
        extensionInstallCooldownSettings: {
            cooldownHours: 0
        }
    },
    shouldShowViewZoneWhenPreviewBoxIsClipped6: !1,
    cppModelsState: fLp,
    aiSettings: {
        modelConfig: {
            "cmd-k": {
                modelName: "default",
                maxMode: !1,
                selectedModels: [
                    {
                        modelId: "default",
                        parameters: []
                    }
                ]
            },
            composer: {
                modelName: "default",
                maxMode: !1,
                selectedModels: [
                    {
                        modelId: "default",
                        parameters: []
                    }
                ]
            },
            "background-composer": {
                modelName: "default",
                maxMode: !0,
                selectedModels: [
                    {
                        modelId: "default",
                        parameters: []
                    }
                ]
            },
            "composer-ensemble": {
                modelName: "default",
                maxMode: !1,
                selectedModels: [
                    {
                        modelId: "default",
                        parameters: []
                    }
                ]
            },
            "plan-execution": {
                modelName: "default",
                maxMode: !1,
                selectedModels: [
                    {
                        modelId: "default",
                        parameters: []
                    }
                ]
            },
            spec: {
                modelName: "default",
                maxMode: !1,
                selectedModels: [
                    {
                        modelId: "default",
                        parameters: []
                    }
                ]
            },
            "deep-search": {
                modelName: "default",
                maxMode: !1,
                selectedModels: [
                    {
                        modelId: "default",
                        parameters: []
                    }
                ]
            },
            "quick-agent": {
                modelName: "default",
                maxMode: !1,
                selectedModels: [
                    {
                        modelId: "default",
                        parameters: []
                    }
                ]
            }
        },
        modelsWithNoDefaultSwitch: [],
        modelDefaultSwitchOnNewChat: !1,
        completedModelMigrations: [],
        modelOverrideEnabled: [],
        modelOverrideDisabled: []
    },
    authenticationSettings: {
        githubLoggedIn: !1
    },
    cursorCreds: {
        websiteUrl: Rki,
        backendUrl: fGt,
        authClientId: BYr,
        authDomain: UYr,
        repoBackendUrl: eja,
        telemBackendUrl: vGt,
        cmdkBackendUrl: JUa,
        geoCppBackendUrl: LYr,
        cppConfigBackendUrl: Pki,
        originBackendUrl: tja,
        bcProxyUrl: fGt,
        agentBackendUrlPrivacy: {
            default: FYr
        },
        agentBackendUrlNonPrivacy: {
            default: Mki
        },
        credentialsDisplayName: "Prod"
    },
    cmdLineHookState: {
        ignored: !1,
        timesShown: 0
    },
    shouldOnlyImportOnAccept: !0,
    cppAutoImportDecorationStyle: "squiggle",
    newUserData: {
        toolUsageCount: {
            plainChat: "legacy",
            contextChat: "legacy",
            intentChat: "legacy"
        }
    },
    azureState: {
        useAzure: !1
    },
    personalDocs: [],
    cppInCmdF: !0,
    cppTriggerInComments: !0,
    cppShowWhitespaceOnlyChanges: !1,
    cppEnabled: !0,
    cppConfig: void 0,
    haveNotImportedFromVSC: !1,
    shouldAutoParseCmdKLinks: !1,
    isFileSyncClientEnabled: !0,
    membershipType: void 0,
    fastApplyModelType: FBo.DEFAULT,
    explicitlyEnableSemanticSearch: !1,
    backgroundComposerEnv: "prod",
    preferredEmbeddingModel: R5.UNSPECIFIED,
    oneTimeSettings: {
        shouldDisableGithubCopilot: !0,
        hasAcceptedMaxModeConfirmation: !1
    },
    eligibleForSnippetLearning: !1,
    goneThroughCodeSnippetOnboarding: !1,
    goneThroughCodeSnippetChangeManagement: !1,
    hasResetModelOnce: !1,
    systemNotificationsEnabled: !0,
    rpcFileLoggerEnabled: !1,
    rpcFileLoggerFolder: ""
}, nja = [
    (t, e)=>e.isBashMode2 === !0 ? (delete e.isBashMode2, {
            ...e,
            isInterpreterMode: !0
        }) : e,
    (t, e)=>e.cursorCreds?.cppBackendUrl === void 0 ? {
            ...e,
            cursorCreds: {
                ...e.cursorCreds ?? {},
                cppBackendUrl: vGt
            }
        } : e,
    (t, e)=>(e.cppEnabled === void 0 && (e.cppEnabled = !0), e),
    (t, e)=>{
        if (!e.personalDocs || e.personalDocs.length === 0) return e;
        if (e.personalDocs.some((i)=>i.numPages === void 0)) {
            const i = e.personalDocs.map((r)=>{
                const s = r.pages?.length ?? 0;
                return {
                    ...r,
                    pages: [
                        ...(r.pages ?? []).slice(0, 10)
                    ],
                    numPages: s
                };
            });
            return {
                ...e,
                personalDocs: i
            };
        }
        return e;
    },
    _Lp.bind(null, -1),
    (t, e)=>{
        const n = t.get(ki), i = n.get("cursor/initialModelState", -1) !== void 0;
        if (e.aiSettings === void 0) return i || gf(n, "initialModelState", "pending"), e;
        const r = e.aiSettings.initialModelState;
        return i || gf(n, "initialModelState", r === "pending" || r === "applied" ? r : "applied"), delete e.aiSettings.initialModelState, e;
    },
    (t, e)=>{
        const n = e.composerState ?? {};
        return n.maxOpenTabsMode === void 0 ? {
            ...e,
            composerState: {
                ...n,
                maxOpenTabsMode: "custom",
                maxOpenTabsCustomValue: void 0
            }
        } : e;
    },
    (t, e)=>(e.systemNotificationsEnabled === void 0 && (e.systemNotificationsEnabled = !0), e),
    (t, e)=>{
        const n = e.composerState ?? {};
        if (n.modes4 && Array.isArray(n.modes4)) {
            const i = n.modes4.map((r)=>{
                if (typeof r == "object" && r && "id" in r && "icon" in r) {
                    const s = r, o = {
                        agent: "infinity",
                        "review-edits": "targetTwo",
                        chat: "chat",
                        background: "cloudUpload",
                        plan: "todos"
                    };
                    if (o[s.id] && s.icon !== o[s.id]) return {
                        ...s,
                        icon: o[s.id]
                    };
                }
                return r;
            });
            return {
                ...e,
                composerState: {
                    ...n,
                    modes4: i
                }
            };
        }
        return e;
    },
    (t, e)=>{
        const n = e.composerState ?? {};
        if (n.modes4 && Array.isArray(n.modes4) && !n.modes4.some((r)=>typeof r == "object" && r && "id" in r && r.id === "debug")) {
            const r = IB.modes4?.find((s)=>s.id === "debug");
            if (r) return {
                ...e,
                composerState: {
                    ...n,
                    modes4: [
                        ...n.modes4,
                        r
                    ]
                }
            };
        }
        return e;
    },
    (t, e)=>{
        const n = e.composerState ?? {};
        if (n.modes4 && Array.isArray(n.modes4) && !n.modes4.some((r)=>typeof r == "object" && r && "id" in r && r.id === "multitask")) {
            const r = IB.modes4?.find((s)=>s.id === "multitask");
            if (r) return {
                ...e,
                composerState: {
                    ...n,
                    modes4: [
                        ...n.modes4,
                        r
                    ]
                }
            };
        }
        return e;
    },
    (t, e)=>{
        const n = e.cursorCreds;
        if (!n) return e;
        let i = !1;
        const r = {
            ...n
        };
        if (typeof n.agentBackendUrlPrivacy == "string") {
            const s = n.agentBackendUrlPrivacy;
            r.agentBackendUrlPrivacy = {
                default: s
            }, i = !0;
        }
        if (typeof n.agentBackendUrlNonPrivacy == "string") {
            const s = n.agentBackendUrlNonPrivacy;
            r.agentBackendUrlNonPrivacy = {
                default: s
            }, i = !0;
        }
        return i ? {
            ...e,
            cursorCreds: r
        } : e;
    },
    (t, e)=>{
        const n = e.cursorCreds;
        return n && n.credentialsDisplayName === "Prod (us-west-1 agent)" ? {
            ...e,
            cursorCreds: {
                ...n,
                credentialsDisplayName: "Prod",
                agentBackendUrlPrivacy: {
                    default: FYr
                },
                agentBackendUrlNonPrivacy: {
                    default: Mki
                }
            }
        } : e;
    },
    (t, e)=>{
        const n = e.cursorCreds;
        if (!n) return e;
        let i = !1;
        const r = {
            ...n
        };
        (n.credentialsDisplayName === "Prod (eu-central-1 agent)" || n.credentialsDisplayName === "Prod (ap-southeast-1 agent)") && (r.credentialsDisplayName = "Prod", i = !0);
        const s = (u, d, h)=>{
            if (!u || typeof u != "object") return {
                changed: !1,
                normalized: u
            };
            const p = Object.keys(u).some((y)=>y !== "default"), g = u.default ?? Object.values(u)[0] ?? d, f = h.has(g) ? d : g, _ = {
                default: f
            };
            return {
                changed: p || u.default !== f || Object.keys(u).length !== 1,
                normalized: _
            };
        }, o = new Set([
            i0m
        ]), a = new Set([
            r0m,
            s0m,
            o0m
        ]), l = s(n.agentBackendUrlPrivacy, FYr, o);
        l.changed && (r.agentBackendUrlPrivacy = l.normalized, i = !0);
        const c = s(n.agentBackendUrlNonPrivacy, Mki, a);
        return c.changed && c.normalized && (r.agentBackendUrlNonPrivacy = c.normalized, i = !0), i ? {
            ...e,
            cursorCreds: r
        } : e;
    },
    (t, e)=>e.openAIBaseUrl === void 0 || e.openAIBaseUrl === "" ? {
            ...e,
            openAIBaseUrl: null
        } : e,
    (t, e)=>e.rpcFileLoggerFolder === void 0 ? {
            ...e,
            rpcFileLoggerFolder: ""
        } : e,
    (t, e)=>(e.privateInferenceCatalog !== void 0 && (e.availableDefaultModels2 = SLa()), delete e.privateInferenceCatalog, e)
], J81 = [
    (t, e)=>!e.tasksData || !e.tasksData.tasksDataSchemaVersion ? {
            ...e,
            tasksData: INIT_WORKSPACE_USER_PERSISTENT_STORAGE.tasksData
        } : e,
    (t, e)=>{
        if (e.tasksData && e.tasksData.tasks && Array.isArray(e.tasksData.tasks)) {
            const n = e.tasksData.tasks.map((i)=>typeof i == "object" && i && "type" in i && i.type === "started" ? {
                    ...i,
                    SPECIAL_KEY_doNotPersist: !1
                } : i);
            return {
                ...e,
                tasksData: {
                    ...e.tasksData,
                    tasks: n
                }
            };
        }
        return e;
    },
    (t, e)=>!e.onboardingMetadata || !e.onboardingMetadata.shouldAskToIndex ? {
            ...e,
            onboardingMetadata: {
                shouldAskToIndex: !0
            }
        } : e,
    (t, e)=>(FTn({
            origObject: e,
            pathToKey: [
                "persistentChatMetadata",
                cPe.array,
                "injectedContext",
                "usedCodebase",
                "fileResults",
                cPe.array,
                "file"
            ],
            keyToRemove: "contents"
        }), FTn({
            origObject: e,
            pathToKey: [
                "persistentChatMetadata",
                cPe.array,
                "injectedContext",
                "usedCodebase",
                "codeResults",
                cPe.array,
                "codeBlock"
            ],
            keyToRemove: "fileContents"
        }), NYr({
            origObject: e,
            pathToKey: [
                "persistentChatMetadata",
                cPe.array,
                "injectedContext",
                "usedCurrentFile"
            ],
            keyToKeep: "relativeFilePath"
        }), FTn({
            origObject: e,
            pathToKey: [
                "persistentChatMetadata",
                cPe.array,
                "predictedContext",
                "usedCodebase",
                "fileResults",
                cPe.array,
                "file"
            ],
            keyToRemove: "contents"
        }), FTn({
            origObject: e,
            pathToKey: [
                "persistentChatMetadata",
                cPe.array,
                "predictedContext",
                "usedCodebase",
                "codeResults",
                cPe.array,
                "codeBlock"
            ],
            keyToRemove: "fileContents"
        }), NYr({
            origObject: e,
            pathToKey: [
                "persistentChatMetadata",
                cPe.array,
                "predictedContext",
                "usedCurrentFile"
            ],
            keyToKeep: "relativeFilePath"
        }), e),
    _Lp.bind(null, 1)
], $Yr = class extends st {
    constructor(t){
        super(), this.owner = {
            context: null,
            owner: null,
            owned: null,
            cleanups: null
        };
    }
    dispose() {
        super.dispose(), Net(this.owner);
    }
    runWithOwner(t) {
        return XOe(this.owner, t);
    }
    createImplicitEffect(t, e) {
        XOe(this.owner, ()=>{
            Cn(t, e);
        });
    }
    createImplicitResource({ depFn: t, produceFn: e, initialValue: n }) {
        const i = XOe(this.owner, ()=>Det(t, e, {
                initialValue: n
            }));
        if (i === void 0) throw new Error("createResource returned undefined");
        return i;
    }
    onChangeEffect({ onChange: t, deps: e, runNowToo: n }) {
        let i = !0;
        n !== void 0 && (i = !n), XOe(this.owner, ()=>{
            const r = V_(e, (s, o, a)=>{
                try {
                    return t({
                        deps: s,
                        prevDeps: o,
                        prevReturnValue: a
                    });
                } catch (l) {
                    console.error(l);
                }
            }, {
                defer: i
            });
            Cn(r);
        });
    }
    render(t, e) {
        const n = XOe(this.owner, ()=>MYr(t, e));
        if (n === void 0) throw new Error("render returned undefined");
        return {
            dispose: ()=>n()
        };
    }
    createSignal(t, e) {
        const n = XOe(this.owner, ()=>Wt(t, e));
        if (n === void 0) throw new Error("signal returned undefined");
        return n;
    }
    createStore(...[t, e]) {
        const n = XOe(this.owner, ()=>t ? pwe(t, e) : pwe(e));
        if (n === void 0) throw new Error("createStore returned undefined");
        return n;
    }
}, BTn = class {
    constructor(t){
        this.current = t;
    }
};

}

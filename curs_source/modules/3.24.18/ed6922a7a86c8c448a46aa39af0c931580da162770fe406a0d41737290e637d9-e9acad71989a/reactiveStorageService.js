import { nGi, qHt, rGi } from "./A3u.js";
import { Bv, G1u, OWs } from "./De_3.js";
import { Se, we } from "./HVr.js";
import { Aio, EA } from "./aiserver_pb.js";
import { GV, JBe, Jt, Nze, Sv, Ut, kwe, qn } from "./qIc.js";
import { H1u, XO, uX } from "./reactiveStorageTypes.js";
import { m_e, tTv } from "./stateMigrations.js";
import { Vn, yn } from "./storage_2.js";
import { jS } from "./store.js";
import { x } from "./tslib.es6.js";
import { Ku } from "./utilities_3.js";
import { hu, zP } from "./utils_pb.js";
import { $e } from "./web.js";
var ZLn, pkt, mkt, sGi, QLn, Noo, Ooo, Foo, oGi, aGi, JLn, L2d, N2d, O2d, F2d, cGi, lGi, lUe, uGi, Boo, iTv, dGi, zHt;
export { Boo, F2d, Foo, JLn, L2d, N2d, Noo, O2d, Ooo, QLn, ZLn, aGi, cGi, dGi, iTv, lGi, lUe, mkt, oGi, pkt, sGi, uGi, zHt };
var __wakaru_KHt_initialized = false;
export function KHt() {
if (__wakaru_KHt_initialized) return;
__wakaru_KHt_initialized = true;
"use strict";
x(), qn(), jS(), $e(), EA(), hu(), Se(), Vn(), uX(), tTv(), Ku(), ZLn = "https://cursor.com", pkt = "https://api2.cursor.sh", mkt = "https://api3.cursor.sh", sGi = "https://api4.cursor.sh", QLn = "https://api4.cursor.sh", Noo = "https://api3.cursor.sh", Ooo = "https://repo42.cursor.sh", Foo = "https://api.origin.cursor.com", oGi = "https://api.origin-staging.cursor.com", aGi = "https://agent.api5.cursor.sh", JLn = "https://agentn.api5.cursor.sh", L2d = "https://agent-gcpp-uswest.api5.cursor.sh", N2d = "https://agentn-gcpp-uswest.api5.cursor.sh", O2d = "https://agentn-gcpp-eucentral.api5.cursor.sh", F2d = "https://agentn-gcpp-apsoutheast.api5.cursor.sh", cGi = "KbZUR41cY7W6zRSdpSUJ7I7mLYBKOCmB", lGi = "prod.authentication.cursor.sh", lUe = {
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
}, uGi = {
    composerState: {
        ...XO
    },
    mcpServers: [],
    mcpDisabledTools: [],
    availableDefaultModels2: OWs(),
    featureModelConfigs: lUe,
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
    cppModelsState: H1u,
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
        websiteUrl: ZLn,
        backendUrl: pkt,
        authClientId: cGi,
        authDomain: lGi,
        repoBackendUrl: Ooo,
        telemBackendUrl: mkt,
        cmdkBackendUrl: Noo,
        geoCppBackendUrl: sGi,
        cppConfigBackendUrl: QLn,
        originBackendUrl: Foo,
        bcProxyUrl: pkt,
        agentBackendUrlPrivacy: {
            default: aGi
        },
        agentBackendUrlNonPrivacy: {
            default: JLn
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
    fastApplyModelType: Aio.DEFAULT,
    explicitlyEnableSemanticSearch: !1,
    backgroundComposerEnv: "prod",
    preferredEmbeddingModel: zP.UNSPECIFIED,
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
}, Boo = [
    (e, t)=>t.isBashMode2 === !0 ? (delete t.isBashMode2, {
            ...t,
            isInterpreterMode: !0
        }) : t,
    (e, t)=>t.cursorCreds?.cppBackendUrl === void 0 ? {
            ...t,
            cursorCreds: {
                ...t.cursorCreds ?? {},
                cppBackendUrl: mkt
            }
        } : t,
    (e, t)=>(t.cppEnabled === void 0 && (t.cppEnabled = !0), t),
    (e, t)=>{
        if (!t.personalDocs || t.personalDocs.length === 0) return t;
        if (t.personalDocs.some((i)=>i.numPages === void 0)) {
            const i = t.personalDocs.map((r)=>{
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
                ...t,
                personalDocs: i
            };
        }
        return t;
    },
    G1u.bind(null, -1),
    (e, t)=>{
        const n = e.get(yn), i = n.get("cursor/initialModelState", -1) !== void 0;
        if (t.aiSettings === void 0) return i || Bv(n, "initialModelState", "pending"), t;
        const r = t.aiSettings.initialModelState;
        return i || Bv(n, "initialModelState", r === "pending" || r === "applied" ? r : "applied"), delete t.aiSettings.initialModelState, t;
    },
    (e, t)=>{
        const n = t.composerState ?? {};
        return n.maxOpenTabsMode === void 0 ? {
            ...t,
            composerState: {
                ...n,
                maxOpenTabsMode: "custom",
                maxOpenTabsCustomValue: void 0
            }
        } : t;
    },
    (e, t)=>(t.systemNotificationsEnabled === void 0 && (t.systemNotificationsEnabled = !0), t),
    (e, t)=>{
        const n = t.composerState ?? {};
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
                ...t,
                composerState: {
                    ...n,
                    modes4: i
                }
            };
        }
        return t;
    },
    (e, t)=>{
        const n = t.composerState ?? {};
        if (n.modes4 && Array.isArray(n.modes4) && !n.modes4.some((r)=>typeof r == "object" && r && "id" in r && r.id === "debug")) {
            const r = XO.modes4?.find((s)=>s.id === "debug");
            if (r) return {
                ...t,
                composerState: {
                    ...n,
                    modes4: [
                        ...n.modes4,
                        r
                    ]
                }
            };
        }
        return t;
    },
    (e, t)=>{
        const n = t.composerState ?? {};
        if (n.modes4 && Array.isArray(n.modes4) && !n.modes4.some((r)=>typeof r == "object" && r && "id" in r && r.id === "multitask")) {
            const r = XO.modes4?.find((s)=>s.id === "multitask");
            if (r) return {
                ...t,
                composerState: {
                    ...n,
                    modes4: [
                        ...n.modes4,
                        r
                    ]
                }
            };
        }
        return t;
    },
    (e, t)=>{
        const n = t.cursorCreds;
        if (!n) return t;
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
            ...t,
            cursorCreds: r
        } : t;
    },
    (e, t)=>{
        const n = t.cursorCreds;
        return n && n.credentialsDisplayName === "Prod (us-west-1 agent)" ? {
            ...t,
            cursorCreds: {
                ...n,
                credentialsDisplayName: "Prod",
                agentBackendUrlPrivacy: {
                    default: aGi
                },
                agentBackendUrlNonPrivacy: {
                    default: JLn
                }
            }
        } : t;
    },
    (e, t)=>{
        const n = t.cursorCreds;
        if (!n) return t;
        let i = !1;
        const r = {
            ...n
        };
        (n.credentialsDisplayName === "Prod (eu-central-1 agent)" || n.credentialsDisplayName === "Prod (ap-southeast-1 agent)") && (r.credentialsDisplayName = "Prod", i = !0);
        const s = (u, h, p)=>{
            if (!u || typeof u != "object") return {
                changed: !1,
                normalized: u
            };
            const g = Object.keys(u).some((T)=>T !== "default"), f = u.default ?? Object.values(u)[0] ?? h, v = p.has(f) ? h : f, b = {
                default: v
            };
            return {
                changed: g || u.default !== v || Object.keys(u).length !== 1,
                normalized: b
            };
        }, o = new Set([
            L2d
        ]), a = new Set([
            N2d,
            O2d,
            F2d
        ]), c = s(n.agentBackendUrlPrivacy, aGi, o);
        c.changed && (r.agentBackendUrlPrivacy = c.normalized, i = !0);
        const l = s(n.agentBackendUrlNonPrivacy, JLn, a);
        return l.changed && l.normalized && (r.agentBackendUrlNonPrivacy = l.normalized, i = !0), i ? {
            ...t,
            cursorCreds: r
        } : t;
    },
    (e, t)=>t.openAIBaseUrl === void 0 || t.openAIBaseUrl === "" ? {
            ...t,
            openAIBaseUrl: null
        } : t,
    (e, t)=>t.rpcFileLoggerFolder === void 0 ? {
            ...t,
            rpcFileLoggerFolder: ""
        } : t,
    (e, t)=>(t.privateInferenceCatalog !== void 0 && (t.availableDefaultModels2 = OWs()), delete t.privateInferenceCatalog, t)
], iTv = [
    (e, t)=>!t.tasksData || !t.tasksData.tasksDataSchemaVersion ? {
            ...t,
            tasksData: INIT_WORKSPACE_USER_PERSISTENT_STORAGE.tasksData
        } : t,
    (e, t)=>{
        if (t.tasksData && t.tasksData.tasks && Array.isArray(t.tasksData.tasks)) {
            const n = t.tasksData.tasks.map((i)=>typeof i == "object" && i && "type" in i && i.type === "started" ? {
                    ...i,
                    SPECIAL_KEY_doNotPersist: !1
                } : i);
            return {
                ...t,
                tasksData: {
                    ...t.tasksData,
                    tasks: n
                }
            };
        }
        return t;
    },
    (e, t)=>!t.onboardingMetadata || !t.onboardingMetadata.shouldAskToIndex ? {
            ...t,
            onboardingMetadata: {
                shouldAskToIndex: !0
            }
        } : t,
    (e, t)=>(qHt({
            origObject: t,
            pathToKey: [
                "persistentChatMetadata",
                m_e.array,
                "injectedContext",
                "usedCodebase",
                "fileResults",
                m_e.array,
                "file"
            ],
            keyToRemove: "contents"
        }), qHt({
            origObject: t,
            pathToKey: [
                "persistentChatMetadata",
                m_e.array,
                "injectedContext",
                "usedCodebase",
                "codeResults",
                m_e.array,
                "codeBlock"
            ],
            keyToRemove: "fileContents"
        }), rGi({
            origObject: t,
            pathToKey: [
                "persistentChatMetadata",
                m_e.array,
                "injectedContext",
                "usedCurrentFile"
            ],
            keyToKeep: "relativeFilePath"
        }), qHt({
            origObject: t,
            pathToKey: [
                "persistentChatMetadata",
                m_e.array,
                "predictedContext",
                "usedCodebase",
                "fileResults",
                m_e.array,
                "file"
            ],
            keyToRemove: "contents"
        }), qHt({
            origObject: t,
            pathToKey: [
                "persistentChatMetadata",
                m_e.array,
                "predictedContext",
                "usedCodebase",
                "codeResults",
                m_e.array,
                "codeBlock"
            ],
            keyToRemove: "fileContents"
        }), rGi({
            origObject: t,
            pathToKey: [
                "persistentChatMetadata",
                m_e.array,
                "predictedContext",
                "usedCurrentFile"
            ],
            keyToKeep: "relativeFilePath"
        }), t),
    G1u.bind(null, 1)
], dGi = class extends we {
    constructor(e){
        super(), this.owner = {
            context: null,
            owner: null,
            owned: null,
            cleanups: null
        };
    }
    dispose() {
        super.dispose(), JBe(this.owner);
    }
    runWithOwner(e) {
        return kwe(this.owner, e);
    }
    createImplicitEffect(e, t) {
        kwe(this.owner, ()=>{
            Jt(e, t);
        });
    }
    createImplicitResource({ depFn: e, produceFn: t, initialValue: n }) {
        const i = kwe(this.owner, ()=>Nze(e, t, {
                initialValue: n
            }));
        if (i === void 0) throw new Error("createResource returned undefined");
        return i;
    }
    onChangeEffect({ onChange: e, deps: t, runNowToo: n }) {
        let i = !0;
        n !== void 0 && (i = !n), kwe(this.owner, ()=>{
            const r = Sv(t, (s, o, a)=>{
                try {
                    return e({
                        deps: s,
                        prevDeps: o,
                        prevReturnValue: a
                    });
                } catch (c) {
                    console.error(c);
                }
            }, {
                defer: i
            });
            Jt(r);
        });
    }
    render(e, t) {
        const n = kwe(this.owner, ()=>nGi(e, t));
        if (n === void 0) throw new Error("render returned undefined");
        return {
            dispose: ()=>n()
        };
    }
    createSignal(e, t) {
        const n = kwe(this.owner, ()=>Ut(e, t));
        if (n === void 0) throw new Error("signal returned undefined");
        return n;
    }
    createStore(...[e, t]) {
        const n = kwe(this.owner, ()=>e ? GV(e, t) : GV(t));
        if (n === void 0) throw new Error("createStore returned undefined");
        return n;
    }
}, zHt = class {
    constructor(e){
        this.current = e;
    }
};

}

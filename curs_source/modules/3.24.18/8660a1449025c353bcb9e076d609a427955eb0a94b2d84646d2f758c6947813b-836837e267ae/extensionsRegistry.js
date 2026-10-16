import { D, Ei, xr } from "./Iwo.js";
import { CGt, jy } from "./extensionManagement.js";
import { c_l, iIt } from "./extensionsApiProposals.js";
import { I3a, O4, Pw, pbe } from "./extensions_3.js";
import { JJa, zqt } from "./implicitActivationEvents.js";
import { p7, sW } from "./jsonContributionRegistry.js";
import { Bt } from "./nls.js";
import { Eo, Fi } from "./platform_2.js";
import { Ded, hu } from "./productService.js";
import { Ua, ob } from "./severity_2.js";
import { E } from "./tslib.es6.js";
var Dhs, FMg, Nhs, Lhs, BMg, UMg, u_l, Ohs, jMg, d_l, uI;
export { BMg, Dhs, FMg, Lhs, Nhs, Ohs, UMg, d_l, jMg, uI, u_l };
var __wakaru_cF_initialized = false;
export function cF() {
if (__wakaru_cF_initialized) return;
__wakaru_cF_initialized = true;
"use strict";
E(), Bt(), Ei(), ob(), jy(), sW(), Eo(), Pw(), hu(), JJa(), c_l(), Dhs = Fi.as(p7.JSONContribution), FMg = class {
    constructor(t, e, n){
        this._messageHandler = t, this._extension = e, this._extensionPointId = n;
    }
    _msg(t, e) {
        this._messageHandler({
            type: t,
            message: e,
            extensionId: this._extension.identifier,
            extensionPointId: this._extensionPointId
        });
    }
    error(t) {
        this._msg(Ua.Error, t);
    }
    warn(t) {
        this._msg(Ua.Warning, t);
    }
    info(t) {
        this._msg(Ua.Info, t);
    }
}, Nhs = void 0, Lhs = class MXs {
    constructor(e, n){
        this.added = e, this.removed = n;
    }
    static _toSet(e) {
        const n = new pbe;
        for(let i = 0, r = e.length; i < r; i++)n.add(e[i].description.identifier);
        return n;
    }
    static compute(e, n) {
        if (!e || !e.length) return new MXs(n, []);
        if (!n || !n.length) return new MXs([], e);
        const i = this._toSet(e), r = this._toSet(n), s = n.filter((a)=>!i.has(a.description.identifier)), o = e.filter((a)=>!r.has(a.description.identifier));
        return new MXs(s, o);
    }
}, BMg = class {
    constructor(t, e, n){
        this._handlers = [], this._globalUsers = null, this._scopedUsers = new Map, this._aggregateState = {
            users: null,
            delta: null
        }, this.name = t, this.defaultExtensionKind = e, this.canHandleResolver = n;
    }
    setHandler(t) {
        return this._handlers.includes(t) ? {
            dispose: ()=>{}
        } : (this._handlers.push(t), this._handleSingle(this._aggregateState, t), {
            dispose: ()=>{
                const e = this._handlers.indexOf(t);
                e >= 0 && this._handlers.splice(e, 1);
            }
        });
    }
    rehandleCurrentUsersAsAdded() {
        const t = this._aggregateState.users;
        t === null || this._handlers.length === 0 || this._handle({
            users: t,
            delta: new Lhs(t, [])
        });
    }
    acceptUsers(t) {
        this._globalUsers = t, this._updateAggregateAndHandle();
    }
    acceptUsersInGlassScope(t, e) {
        this._scopedUsers.set(e, t), this._updateAggregateAndHandle();
    }
    disposeGlassExtensionPointScope(t) {
        this._scopedUsers.delete(t) && this._updateAggregateAndHandle();
    }
    _updateAggregateAndHandle() {
        const t = this._computeAggregateUsers(), e = Lhs.compute(this._aggregateState.users, t);
        this._aggregateState = {
            users: t,
            delta: new Lhs(t, [])
        }, this._handle({
            users: t,
            delta: e
        });
    }
    _computeAggregateUsers() {
        const t = new O4;
        this._globalUsers !== null && this._addUsersToAggregate(t, this._globalUsers);
        for (const e of this._scopedUsers.values())this._addUsersToAggregate(t, e);
        return Array.from(t.values());
    }
    _addUsersToAggregate(t, e) {
        for (const n of e)t.has(n.description.identifier) || t.set(n.description.identifier, n);
    }
    _handleSingle(t, e) {
        if (!(t.users === null || t.delta === null)) try {
            e(t.users, t.delta);
        } catch (n) {
            xr(n);
        }
    }
    _handle(t) {
        if (!(this._handlers.length === 0 || t.users === null || t.delta === null)) for (const e of this._handlers)this._handleSingle(t, e);
    }
}, UMg = {
    type: "string",
    enum: [
        "ui",
        "workspace"
    ],
    enumDescriptions: [
        D(12701, null),
        D(12702, null)
    ]
}, u_l = "vscode://schemas/vscode-extensions", Ohs = {
    properties: {
        engines: {
            type: "object",
            description: D(12703, null),
            properties: {
                vscode: {
                    type: "string",
                    description: D(12704, null),
                    default: "^1.22.0"
                }
            }
        },
        publisher: {
            description: D(12705, null),
            type: "string"
        },
        displayName: {
            description: D(12706, null),
            type: "string"
        },
        categories: {
            description: D(12707, null),
            type: "array",
            uniqueItems: !0,
            items: {
                oneOf: [
                    {
                        type: "string",
                        enum: I3a
                    },
                    {
                        type: "string",
                        const: "Languages",
                        deprecationMessage: D(12708, null)
                    }
                ]
            }
        },
        galleryBanner: {
            type: "object",
            description: D(12709, null),
            properties: {
                color: {
                    description: D(12710, null),
                    type: "string"
                },
                theme: {
                    description: D(12711, null),
                    type: "string",
                    enum: [
                        "dark",
                        "light"
                    ]
                }
            }
        },
        contributes: {
            description: D(12712, null),
            type: "object",
            properties: {},
            default: {}
        },
        preview: {
            type: "boolean",
            description: D(12713, null)
        },
        enableProposedApi: {
            type: "boolean",
            deprecationMessage: D(12714, null)
        },
        enabledApiProposals: {
            markdownDescription: D(12715, null),
            type: "array",
            uniqueItems: !0,
            items: {
                type: "string",
                enum: Object.keys(iIt).map((t)=>t),
                markdownEnumDescriptions: Object.values(iIt).map((t)=>t.proposal)
            }
        },
        api: {
            markdownDescription: D(12716, null),
            type: "string",
            enum: [
                "none"
            ],
            enumDescriptions: [
                D(12717, null)
            ]
        },
        activationEvents: {
            description: D(12718, null),
            type: "array",
            items: {
                type: "string",
                defaultSnippets: [
                    {
                        label: "onWebviewPanel",
                        description: D(12719, null),
                        body: "onWebviewPanel:viewType"
                    },
                    {
                        label: "onLanguage",
                        description: D(12720, null),
                        body: "onLanguage:${1:languageId}"
                    },
                    {
                        label: "onCommand",
                        description: D(12721, null),
                        body: "onCommand:${2:commandId}"
                    },
                    {
                        label: "onDebug",
                        description: D(12722, null),
                        body: "onDebug"
                    },
                    {
                        label: "onDebugInitialConfigurations",
                        description: D(12723, null),
                        body: "onDebugInitialConfigurations"
                    },
                    {
                        label: "onDebugDynamicConfigurations",
                        description: D(12724, null),
                        body: "onDebugDynamicConfigurations"
                    },
                    {
                        label: "onDebugResolve",
                        description: D(12725, null),
                        body: "onDebugResolve:${6:type}"
                    },
                    {
                        label: "onDebugAdapterProtocolTracker",
                        description: D(12726, null),
                        body: "onDebugAdapterProtocolTracker:${6:type}"
                    },
                    {
                        label: "workspaceContains",
                        description: D(12727, null),
                        body: "workspaceContains:${4:filePattern}"
                    },
                    {
                        label: "onStartupFinished",
                        description: D(12728, null),
                        body: "onStartupFinished"
                    },
                    {
                        label: "onTaskType",
                        description: D(12729, null),
                        body: "onTaskType:${1:taskType}"
                    },
                    {
                        label: "onFileSystem",
                        description: D(12730, null),
                        body: "onFileSystem:${1:scheme}"
                    },
                    {
                        label: "onEditSession",
                        description: D(12731, null),
                        body: "onEditSession:${1:scheme}"
                    },
                    {
                        label: "onSearch",
                        description: D(12732, null),
                        body: "onSearch:${7:scheme}"
                    },
                    {
                        label: "onView",
                        body: "onView:${5:viewId}",
                        description: D(12733, null)
                    },
                    {
                        label: "onUri",
                        body: "onUri",
                        description: D(12734, null)
                    },
                    {
                        label: "onOpenExternalUri",
                        body: "onOpenExternalUri",
                        description: D(12735, null)
                    },
                    {
                        label: "onCustomEditor",
                        body: "onCustomEditor:${9:viewType}",
                        description: D(12736, null)
                    },
                    {
                        label: "onNotebook",
                        body: "onNotebook:${1:type}",
                        description: D(12737, null)
                    },
                    {
                        label: "onAuthenticationRequest",
                        body: "onAuthenticationRequest:${11:authenticationProviderId}",
                        description: D(12738, null)
                    },
                    {
                        label: "onRenderer",
                        description: D(12739, null),
                        body: "onRenderer:${11:rendererId}"
                    },
                    {
                        label: "onTerminalProfile",
                        body: "onTerminalProfile:${1:terminalId}",
                        description: D(12740, null)
                    },
                    {
                        label: "onTerminalQuickFixRequest",
                        body: "onTerminalQuickFixRequest:${1:quickFixId}",
                        description: D(12741, null)
                    },
                    {
                        label: "onWalkthrough",
                        body: "onWalkthrough:${1:walkthroughID}",
                        description: D(12742, null)
                    },
                    {
                        label: "onChatParticipant",
                        body: "onChatParticipant:${1:participantId}",
                        description: D(12743, null)
                    },
                    {
                        label: "onLanguageModelTool",
                        body: "onLanguageModelTool:${1:toolId}",
                        description: D(12744, null)
                    },
                    {
                        label: "onTerminalCompletionsRequested",
                        body: "onTerminalCompletionsRequested",
                        description: D(12745, null)
                    },
                    {
                        label: "onMcpCollection",
                        description: D(12746, null),
                        body: "onMcpCollection:${2:collectionId}"
                    },
                    {
                        label: "*",
                        description: D(12747, null),
                        body: "*"
                    }
                ]
            }
        },
        badges: {
            type: "array",
            description: D(12748, null),
            items: {
                type: "object",
                required: [
                    "url",
                    "href",
                    "description"
                ],
                properties: {
                    url: {
                        type: "string",
                        description: D(12749, null)
                    },
                    href: {
                        type: "string",
                        description: D(12750, null)
                    },
                    description: {
                        type: "string",
                        description: D(12751, null)
                    }
                }
            }
        },
        markdown: {
            type: "string",
            description: D(12752, null),
            enum: [
                "github",
                "standard"
            ],
            default: "github"
        },
        qna: {
            default: "marketplace",
            description: D(12753, null),
            anyOf: [
                {
                    type: [
                        "string",
                        "boolean"
                    ],
                    enum: [
                        "marketplace",
                        !1
                    ]
                },
                {
                    type: "string"
                }
            ]
        },
        extensionDependencies: {
            description: D(12754, null),
            type: "array",
            uniqueItems: !0,
            items: {
                type: "string",
                pattern: CGt
            }
        },
        extensionPack: {
            description: D(12755, null),
            type: "array",
            uniqueItems: !0,
            items: {
                type: "string",
                pattern: CGt
            }
        },
        extensionKind: {
            description: D(12756, null),
            type: "array",
            items: UMg,
            default: [
                "workspace"
            ],
            defaultSnippets: [
                {
                    body: [
                        "ui"
                    ],
                    description: D(12757, null)
                },
                {
                    body: [
                        "workspace"
                    ],
                    description: D(12758, null)
                },
                {
                    body: [
                        "ui",
                        "workspace"
                    ],
                    description: D(12759, null)
                },
                {
                    body: [
                        "workspace",
                        "ui"
                    ],
                    description: D(12760, null)
                },
                {
                    body: [],
                    description: D(12761, null)
                }
            ]
        },
        capabilities: {
            description: D(12762, null),
            type: "object",
            properties: {
                virtualWorkspaces: {
                    description: D(12763, null),
                    type: [
                        "boolean",
                        "object"
                    ],
                    defaultSnippets: [
                        {
                            label: "limited",
                            body: {
                                supported: "${1:limited}",
                                description: "${2}"
                            }
                        },
                        {
                            label: "false",
                            body: {
                                supported: !1,
                                description: "${2}"
                            }
                        }
                    ],
                    default: (!0).valueOf,
                    properties: {
                        supported: {
                            markdownDescription: D(12764, null),
                            type: [
                                "string",
                                "boolean"
                            ],
                            enum: [
                                "limited",
                                !0,
                                !1
                            ],
                            enumDescriptions: [
                                D(12765, null),
                                D(12766, null),
                                D(12767, null)
                            ]
                        },
                        description: {
                            type: "string",
                            markdownDescription: D(12768, null)
                        }
                    }
                },
                untrustedWorkspaces: {
                    description: D(12769, null),
                    type: "object",
                    required: [
                        "supported"
                    ],
                    defaultSnippets: [
                        {
                            body: {
                                supported: "${1:limited}",
                                description: "${2}"
                            }
                        }
                    ],
                    properties: {
                        supported: {
                            markdownDescription: D(12770, null),
                            type: [
                                "string",
                                "boolean"
                            ],
                            enum: [
                                "limited",
                                !0,
                                !1
                            ],
                            enumDescriptions: [
                                D(12771, null),
                                D(12772, null),
                                D(12773, null)
                            ]
                        },
                        restrictedConfigurations: {
                            description: D(12774, null),
                            type: "array",
                            items: {
                                type: "string"
                            }
                        },
                        description: {
                            type: "string",
                            markdownDescription: D(12775, null)
                        }
                    }
                }
            }
        },
        sponsor: {
            description: D(12776, null),
            type: "object",
            defaultSnippets: [
                {
                    body: {
                        url: "${1:https:}"
                    }
                }
            ],
            properties: {
                url: {
                    description: D(12777, null),
                    type: "string"
                }
            }
        },
        scripts: {
            type: "object",
            properties: {
                "vscode:prepublish": {
                    description: D(12778, null),
                    type: "string"
                },
                "vscode:uninstall": {
                    description: D(12779, null),
                    type: "string"
                }
            }
        },
        icon: {
            type: "string",
            description: D(12780, null)
        },
        l10n: {
            type: "string",
            description: D(12781, null)
        },
        pricing: {
            type: "string",
            markdownDescription: D(12782, null),
            enum: [
                "Free",
                "Trial"
            ],
            default: "Free"
        }
    }
}, jMg = class {
    constructor(){
        this._extensionPoints = new Map;
    }
    disposeGlassExtensionPointScope(t) {
        for (const e of this._extensionPoints.values())e.disposeGlassExtensionPointScope(t);
    }
    registerExtensionPoint(t) {
        if (this._extensionPoints.has(t.extensionPoint)) throw new Error("Duplicate extension point: " + t.extensionPoint);
        const e = new BMg(t.extensionPoint, t.defaultExtensionKind, t.canHandleResolver);
        return this._extensionPoints.set(t.extensionPoint, e), t.activationEventsGenerator && zqt.register(t.extensionPoint, t.activationEventsGenerator), Ohs.properties.contributes.properties[t.extensionPoint] = t.jsonSchema, Dhs.registerSchema(u_l, Ohs), e;
    }
    getExtensionPoints() {
        return Array.from(this._extensionPoints.values());
    }
}, d_l = {
    ExtensionsRegistry: "ExtensionsRegistry"
}, Fi.add(d_l.ExtensionsRegistry, new jMg), uI = Fi.as(d_l.ExtensionsRegistry), Dhs.registerSchema(u_l, Ohs), Dhs.registerSchema(Ded, {
    properties: {
        extensionEnabledApiProposals: {
            description: D(12783, null),
            type: "object",
            properties: {},
            additionalProperties: {
                anyOf: [
                    {
                        type: "array",
                        uniqueItems: !0,
                        items: {
                            type: "string",
                            enum: Object.keys(iIt),
                            markdownEnumDescriptions: Object.values(iIt).map((t)=>t.proposal)
                        }
                    }
                ]
            }
        }
    }
});

}

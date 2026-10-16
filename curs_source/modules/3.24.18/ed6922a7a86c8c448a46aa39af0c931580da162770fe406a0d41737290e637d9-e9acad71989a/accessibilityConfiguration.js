import { Ct, S, Se, Tl, bt, we } from "./HVr.js";
import { KT, Uf } from "./accessibilitySignalService.js";
import { C, ie } from "./actions_2.js";
import { iu, uh } from "./configurationRegistry.js";
import { M2, NI } from "./configuration_2.js";
import { At, dn } from "./contextkey.js";
import { rt } from "./nls.js";
import { kn, rr } from "./platform_2.js";
import { Dwt, GKi, XGt } from "./speechService.js";
import { x } from "./tslib.es6.js";
import { gr } from "./types_2.js";
import { J4v, eUv, ibo } from "./xmo.js";
var roe, hL, QGt, VKi, jKi, rbo, G5, llh, ulh, qKi, zKi, HX, sbo, OI, V5, j5, D1e, dlh, hlh, JGt;
export { D1e, G5, HX, JGt, OI, QGt, V5, VKi, dlh, hL, hlh, j5, jKi, llh, qKi, rbo, roe, sbo, ulh, zKi };
var __wakaru_Wde_initialized = false;
export function Wde() {
if (__wakaru_Wde_initialized) return;
__wakaru_Wde_initialized = true;
"use strict";
x(), rt(), uh(), rr(), dn(), NI(), KT(), Dwt(), Se(), bt(), gr(), roe = new At("accessibilityHelpIsShown", !1, !0), hL = new At("accessibleViewIsShown", !1, !0), QGt = new At("accessibleViewSupportsNavigation", !1, !0), VKi = new At("accessibleViewVerbosityEnabled", !1, !0), jKi = new At("accessibleViewGoToSymbolSupported", !1, !0), rbo = new At("accessibleViewOnLastLine", !1, !0), G5 = new At("accessibleViewCurrentProviderId", void 0, void 0), llh = new At("accessibleViewInCodeBlock", void 0, void 0), ulh = new At("accessibleViewContainsCodeBlocks", void 0, void 0), qKi = new At("accessibleViewHasUnassignedKeybindings", void 0, void 0), zKi = new At("accessibleViewHasAssignedKeybindings", void 0, void 0), HX = {
    type: "boolean",
    default: !0,
    tags: [
        "accessibility"
    ]
}, sbo = Object.freeze({
    id: "accessibility",
    title: S(4526, null),
    type: "object"
}), OI = {
    type: "string",
    enum: [
        "auto",
        "on",
        "off"
    ],
    default: "auto",
    enumDescriptions: [
        S(4527, null),
        S(4528, null),
        S(4529, null)
    ],
    tags: [
        "accessibility"
    ]
}, V5 = {
    type: "object",
    tags: [
        "accessibility"
    ],
    additionalProperties: !1,
    default: {
        sound: "auto",
        announcement: "auto"
    }
}, j5 = {
    type: "string",
    enum: [
        "auto",
        "off"
    ],
    default: "auto",
    enumDescriptions: [
        S(4530, null),
        S(4531, null)
    ],
    tags: [
        "accessibility"
    ]
}, D1e = {
    type: "object",
    tags: [
        "accessibility"
    ],
    additionalProperties: !1,
    default: {
        sound: "auto"
    }
}, dlh = {
    ...sbo,
    scope: 5,
    properties: {
        "accessibility.verbosity.terminal": {
            description: S(4532, null),
            ...HX
        },
        "accessibility.verbosity.diffEditor": {
            description: S(4533, null),
            ...HX
        },
        "accessibility.verbosity.inlineCompletions": {
            description: S(4534, null),
            ...HX
        },
        "accessibility.verbosity.keybindingsEditor": {
            description: S(4535, null),
            ...HX
        },
        "accessibility.verbosity.notebook": {
            description: S(4536, null),
            ...HX
        },
        "accessibility.verbosity.hover": {
            description: S(4537, null),
            ...HX
        },
        "accessibility.verbosity.notification": {
            description: S(4538, null),
            ...HX
        },
        "accessibility.verbosity.emptyEditorHint": {
            description: S(4539, null),
            ...HX
        },
        "accessibility.verbosity.replEditor": {
            description: S(4540, null),
            ...HX
        },
        "accessibility.verbosity.comments": {
            description: S(4541, null),
            ...HX
        },
        "accessibility.verbosity.diffEditorActive": {
            description: S(4542, null),
            ...HX
        },
        "accessibility.verbosity.debug": {
            description: S(4543, null),
            ...HX
        },
        "accessibility.verbosity.walkthrough": {
            description: S(4544, null),
            ...HX
        },
        "accessibility.accessibleView.closeOnKeyPress": {
            markdownDescription: S(4545, null),
            type: "boolean",
            default: !0
        },
        "accessibility.verbosity.sourceControl": {
            description: S(4546, null),
            ...HX
        },
        "accessibility.verbosity.find": {
            description: S(4547, null),
            ...HX
        },
        "accessibility.signalOptions.volume": {
            description: S(4548, null),
            type: "number",
            minimum: 0,
            maximum: 100,
            default: 70,
            tags: [
                "accessibility"
            ]
        },
        "accessibility.signalOptions.debouncePositionChanges": {
            description: S(4549, null),
            type: "boolean",
            default: !1,
            tags: [
                "accessibility"
            ]
        },
        "accessibility.signalOptions.experimental.delays.general": {
            type: "object",
            description: "Delays for all signals besides error and warning at position",
            additionalProperties: !1,
            properties: {
                announcement: {
                    description: S(4550, null),
                    type: "number",
                    minimum: 0,
                    default: 3e3
                },
                sound: {
                    description: S(4551, null),
                    type: "number",
                    minimum: 0,
                    default: 400
                }
            },
            tags: [
                "accessibility"
            ]
        },
        "accessibility.signalOptions.experimental.delays.warningAtPosition": {
            type: "object",
            additionalProperties: !1,
            properties: {
                announcement: {
                    description: S(4552, null),
                    type: "number",
                    minimum: 0,
                    default: 3e3
                },
                sound: {
                    description: S(4553, null),
                    type: "number",
                    minimum: 0,
                    default: 1e3
                }
            },
            tags: [
                "accessibility"
            ]
        },
        "accessibility.signalOptions.experimental.delays.errorAtPosition": {
            type: "object",
            additionalProperties: !1,
            properties: {
                announcement: {
                    description: S(4554, null),
                    type: "number",
                    minimum: 0,
                    default: 3e3
                },
                sound: {
                    description: S(4555, null),
                    type: "number",
                    minimum: 0,
                    default: 1e3
                }
            },
            tags: [
                "accessibility"
            ]
        },
        "accessibility.signals.lineHasBreakpoint": {
            ...V5,
            description: S(4556, null),
            properties: {
                sound: {
                    description: S(4557, null),
                    ...OI
                },
                announcement: {
                    description: S(4558, null),
                    ...j5
                }
            }
        },
        "accessibility.signals.lineHasInlineSuggestion": {
            ...D1e,
            description: S(4559, null),
            properties: {
                sound: {
                    description: S(4560, null),
                    ...OI,
                    default: "off"
                }
            }
        },
        "accessibility.signals.lineHasError": {
            ...V5,
            description: S(4561, null),
            properties: {
                sound: {
                    description: S(4562, null),
                    ...OI
                },
                announcement: {
                    description: S(4563, null),
                    ...j5,
                    default: "off"
                }
            }
        },
        "accessibility.signals.lineHasFoldedArea": {
            ...V5,
            description: S(4564, null),
            properties: {
                sound: {
                    description: S(4565, null),
                    ...OI,
                    default: "off"
                },
                announcement: {
                    description: S(4566, null),
                    ...j5
                }
            }
        },
        "accessibility.signals.lineHasWarning": {
            ...V5,
            description: S(4567, null),
            properties: {
                sound: {
                    description: S(4568, null),
                    ...OI
                },
                announcement: {
                    description: S(4569, null),
                    ...j5,
                    default: "off"
                }
            }
        },
        "accessibility.signals.positionHasError": {
            ...V5,
            description: S(4570, null),
            properties: {
                sound: {
                    description: S(4571, null),
                    ...OI
                },
                announcement: {
                    description: S(4572, null),
                    ...j5,
                    default: "on"
                }
            }
        },
        "accessibility.signals.positionHasWarning": {
            ...V5,
            description: S(4573, null),
            properties: {
                sound: {
                    description: S(4574, null),
                    ...OI
                },
                announcement: {
                    description: S(4575, null),
                    ...j5,
                    default: "on"
                }
            }
        },
        "accessibility.signals.onDebugBreak": {
            ...V5,
            description: S(4576, null),
            properties: {
                sound: {
                    description: S(4577, null),
                    ...OI
                },
                announcement: {
                    description: S(4578, null),
                    ...j5
                }
            }
        },
        "accessibility.signals.noInlayHints": {
            ...V5,
            description: S(4579, null),
            properties: {
                sound: {
                    description: S(4580, null),
                    ...OI
                },
                announcement: {
                    description: S(4581, null),
                    ...j5
                }
            }
        },
        "accessibility.signals.taskCompleted": {
            ...V5,
            description: S(4582, null),
            properties: {
                sound: {
                    description: S(4583, null),
                    ...OI
                },
                announcement: {
                    description: S(4584, null),
                    ...j5
                }
            }
        },
        "accessibility.signals.taskFailed": {
            ...V5,
            description: S(4585, null),
            properties: {
                sound: {
                    description: S(4586, null),
                    ...OI
                },
                announcement: {
                    description: S(4587, null),
                    ...j5
                }
            }
        },
        "accessibility.signals.terminalCommandFailed": {
            ...V5,
            description: S(4588, null),
            properties: {
                sound: {
                    description: S(4589, null),
                    ...OI
                },
                announcement: {
                    description: S(4590, null),
                    ...j5
                }
            }
        },
        "accessibility.signals.terminalCommandSucceeded": {
            ...V5,
            description: S(4591, null),
            properties: {
                sound: {
                    description: S(4592, null),
                    ...OI
                },
                announcement: {
                    description: S(4593, null),
                    ...j5
                }
            }
        },
        "accessibility.signals.terminalQuickFix": {
            ...V5,
            description: S(4594, null),
            properties: {
                sound: {
                    description: S(4595, null),
                    ...OI
                },
                announcement: {
                    description: S(4596, null),
                    ...j5
                }
            }
        },
        "accessibility.signals.terminalBell": {
            ...V5,
            description: S(4597, null),
            properties: {
                sound: {
                    description: S(4598, null),
                    ...OI
                },
                announcement: {
                    description: S(4599, null),
                    ...j5
                }
            }
        },
        "accessibility.signals.diffLineInserted": {
            ...D1e,
            description: S(4600, null),
            properties: {
                sound: {
                    description: S(4601, null),
                    ...OI
                }
            }
        },
        "accessibility.signals.diffLineModified": {
            ...D1e,
            description: S(4602, null),
            properties: {
                sound: {
                    description: S(4603, null),
                    ...OI
                }
            }
        },
        "accessibility.signals.diffLineDeleted": {
            ...D1e,
            description: S(4604, null),
            properties: {
                sound: {
                    description: S(4605, null),
                    ...OI
                }
            }
        },
        "accessibility.signals.chatEditModifiedFile": {
            ...D1e,
            description: S(4606, null),
            properties: {
                sound: {
                    description: S(4607, null),
                    ...OI
                }
            }
        },
        "accessibility.signals.notebookCellCompleted": {
            ...V5,
            description: S(4608, null),
            properties: {
                sound: {
                    description: S(4609, null),
                    ...OI
                },
                announcement: {
                    description: S(4610, null),
                    ...j5
                }
            }
        },
        "accessibility.signals.notebookCellFailed": {
            ...V5,
            description: S(4611, null),
            properties: {
                sound: {
                    description: S(4612, null),
                    ...OI
                },
                announcement: {
                    description: S(4613, null),
                    ...j5
                }
            }
        },
        "accessibility.signals.progress": {
            ...V5,
            description: S(4614, null),
            properties: {
                sound: {
                    description: S(4615, null),
                    ...OI
                },
                announcement: {
                    description: S(4616, null),
                    ...j5
                }
            }
        },
        "accessibility.signals.chatRequestSent": {
            ...V5,
            description: S(4617, null),
            properties: {
                sound: {
                    description: S(4618, null),
                    ...OI
                },
                announcement: {
                    description: S(4619, null),
                    ...j5
                }
            }
        },
        "accessibility.signals.chatResponseReceived": {
            ...D1e,
            description: S(4620, null),
            properties: {
                sound: {
                    description: S(4621, null),
                    ...OI
                }
            }
        },
        "accessibility.signals.codeActionTriggered": {
            ...D1e,
            description: S(4622, null),
            properties: {
                sound: {
                    description: S(4623, null),
                    ...OI
                }
            }
        },
        "accessibility.signals.codeActionApplied": {
            ...D1e,
            description: S(4624, null),
            properties: {
                sound: {
                    description: S(4625, null),
                    ...OI
                }
            }
        },
        "accessibility.signals.voiceRecordingStarted": {
            ...D1e,
            description: S(4626, null),
            properties: {
                sound: {
                    description: S(4627, null),
                    ...OI
                }
            },
            default: {
                sound: "on"
            }
        },
        "accessibility.signals.voiceRecordingStopped": {
            ...D1e,
            description: S(4628, null),
            properties: {
                sound: {
                    description: S(4629, null),
                    ...OI,
                    default: "off"
                }
            }
        },
        "accessibility.signals.clear": {
            ...V5,
            description: S(4630, null),
            properties: {
                sound: {
                    description: S(4631, null),
                    ...OI
                },
                announcement: {
                    description: S(4632, null),
                    ...j5
                }
            }
        },
        "accessibility.signals.editsUndone": {
            ...V5,
            description: S(4633, null),
            properties: {
                sound: {
                    description: S(4634, null),
                    ...OI
                },
                announcement: {
                    description: S(4635, null),
                    ...j5
                }
            }
        },
        "accessibility.signals.editsKept": {
            ...V5,
            description: S(4636, null),
            properties: {
                sound: {
                    description: S(4637, null),
                    ...OI
                },
                announcement: {
                    description: S(4638, null),
                    ...j5
                }
            }
        },
        "accessibility.signals.save": {
            type: "object",
            tags: [
                "accessibility"
            ],
            additionalProperties: !1,
            markdownDescription: S(4639, null),
            properties: {
                sound: {
                    description: S(4640, null),
                    type: "string",
                    enum: [
                        "userGesture",
                        "always",
                        "never"
                    ],
                    default: "never",
                    enumDescriptions: [
                        S(4641, null),
                        S(4642, null),
                        S(4643, null)
                    ]
                },
                announcement: {
                    description: S(4644, null),
                    type: "string",
                    enum: [
                        "userGesture",
                        "always",
                        "never"
                    ],
                    default: "never",
                    enumDescriptions: [
                        S(4645, null),
                        S(4646, null),
                        S(4647, null)
                    ]
                }
            },
            default: {
                sound: "never",
                announcement: "never"
            }
        },
        "accessibility.signals.format": {
            type: "object",
            tags: [
                "accessibility"
            ],
            additionalProperties: !1,
            markdownDescription: S(4648, null),
            properties: {
                sound: {
                    description: S(4649, null),
                    type: "string",
                    enum: [
                        "userGesture",
                        "always",
                        "never"
                    ],
                    default: "never",
                    enumDescriptions: [
                        S(4650, null),
                        S(4651, null),
                        S(4652, null)
                    ]
                },
                announcement: {
                    description: S(4653, null),
                    type: "string",
                    enum: [
                        "userGesture",
                        "always",
                        "never"
                    ],
                    default: "never",
                    enumDescriptions: [
                        S(4654, null),
                        S(4655, null),
                        S(4656, null)
                    ]
                }
            },
            default: {
                sound: "never",
                announcement: "never"
            }
        },
        "accessibility.underlineLinks": {
            type: "boolean",
            description: S(4657, null),
            default: !1
        },
        "accessibility.debugWatchVariableAnnouncements": {
            type: "boolean",
            description: S(4658, null),
            default: !0
        },
        "accessibility.replEditor.readLastExecutionOutput": {
            type: "boolean",
            description: S(4659, null),
            default: !0
        },
        "accessibility.replEditor.autoFocusReplExecution": {
            type: "string",
            enum: [
                "none",
                "input",
                "lastExecution"
            ],
            default: "input",
            description: S(4660, null)
        },
        "accessibility.windowTitleOptimized": {
            type: "boolean",
            default: !0,
            markdownDescription: S(4661, null, "`#window.title#`", "`activeEditorState`")
        }
    }
}, hlh = 1200, JGt = class extends we {
    constructor(e){
        super(), this.speechService = e, this._register(Ct.runAndSubscribe(e.onDidChangeHasSpeechProvider, ()=>this.updateConfiguration()));
    }
    updateConfiguration() {
        if (!this.speechService.hasSpeechProvider) return;
        const e = this.getLanguages(), t = Object.keys(e).sort((i, r)=>e[i].name.localeCompare(e[r].name));
        kn.as(iu.Configuration).registerConfiguration({
            ...sbo,
            properties: {
                "accessibility.voice.speechTimeout": {
                    markdownDescription: S(4665, null),
                    type: "number",
                    default: hlh,
                    minimum: 0,
                    tags: [
                        "accessibility"
                    ]
                },
                "accessibility.voice.ignoreCodeBlocks": {
                    markdownDescription: S(4666, null),
                    type: "boolean",
                    default: !1,
                    tags: [
                        "accessibility"
                    ]
                },
                "accessibility.voice.speechLanguage": {
                    markdownDescription: S(4667, null),
                    type: "string",
                    enum: t,
                    default: "auto",
                    tags: [
                        "accessibility"
                    ],
                    enumDescriptions: t.map((i)=>e[i].name),
                    enumItemLabels: t.map((i)=>e[i].name)
                },
                "accessibility.voice.autoSynthesize": {
                    type: "string",
                    enum: [
                        "on",
                        "off"
                    ],
                    enumDescriptions: [
                        S(4668, null),
                        S(4669, null)
                    ],
                    markdownDescription: S(4670, null),
                    default: "off",
                    tags: [
                        "accessibility"
                    ]
                }
            }
        });
    }
    getLanguages() {
        return {
            auto: {
                name: S(4671, null)
            },
            ...GKi
        };
    }
}, JGt.ID = "workbench.contrib.dynamicSpeechAccessibilityConfiguration", JGt = ie([
    C(0, XGt)
], JGt), kn.as(M2.ConfigurationMigration).registerConfigurationMigrations([
    {
        key: "audioCues.volume",
        migrateFn: (e, t)=>[
                [
                    "accessibility.signalOptions.volume",
                    {
                        value: e
                    }
                ],
                [
                    "audioCues.volume",
                    {
                        value: void 0
                    }
                ]
            ]
    }
]), kn.as(M2.ConfigurationMigration).registerConfigurationMigrations([
    {
        key: "audioCues.debouncePositionChanges",
        migrateFn: (e)=>[
                [
                    "accessibility.signalOptions.debouncePositionChanges",
                    {
                        value: e
                    }
                ],
                [
                    "audioCues.debouncePositionChanges",
                    {
                        value: void 0
                    }
                ]
            ]
    }
]), kn.as(M2.ConfigurationMigration).registerConfigurationMigrations([
    {
        key: "accessibility.signalOptions",
        migrateFn: (e, t)=>{
            const n = ibo(t, "general"), i = ibo(t, "errorAtPosition"), r = ibo(t, "warningAtPosition"), s = J4v(t), o = eUv(t), a = [];
            return s && a.push([
                "accessibility.signalOptions.volume",
                {
                    value: s
                }
            ]), n && a.push([
                "accessibility.signalOptions.experimental.delays.general",
                {
                    value: n
                }
            ]), i && a.push([
                "accessibility.signalOptions.experimental.delays.errorAtPosition",
                {
                    value: i
                }
            ]), r && a.push([
                "accessibility.signalOptions.experimental.delays.warningAtPosition",
                {
                    value: r
                }
            ]), o && a.push([
                "accessibility.signalOptions.debouncePositionChanges",
                {
                    value: o
                }
            ]), a.push([
                "accessibility.signalOptions",
                {
                    value: void 0
                }
            ]), a;
        }
    }
]), kn.as(M2.ConfigurationMigration).registerConfigurationMigrations([
    {
        key: "accessibility.signals.sounds.volume",
        migrateFn: (e)=>[
                [
                    "accessibility.signalOptions.volume",
                    {
                        value: e
                    }
                ],
                [
                    "accessibility.signals.sounds.volume",
                    {
                        value: void 0
                    }
                ]
            ]
    }
]), kn.as(M2.ConfigurationMigration).registerConfigurationMigrations([
    {
        key: "accessibility.signals.debouncePositionChanges",
        migrateFn: (e)=>[
                [
                    "accessibility.signalOptions.debouncePositionChanges",
                    {
                        value: e
                    }
                ],
                [
                    "accessibility.signals.debouncePositionChanges",
                    {
                        value: void 0
                    }
                ]
            ]
    }
]), kn.as(M2.ConfigurationMigration).registerConfigurationMigrations([
    {
        key: "accessibility.voice.autoSynthesize",
        migrateFn: (e)=>{
            let t;
            if (e === !0) t = "on";
            else if (e === !1) t = "off";
            else return [];
            return [
                [
                    "accessibility.voice.autoSynthesize",
                    {
                        value: t
                    }
                ]
            ];
        }
    }
]), kn.as(M2.ConfigurationMigration).registerConfigurationMigrations([
    {
        key: "accessibility.signals.chatResponsePending",
        migrateFn: (e, t)=>[
                [
                    "accessibility.signals.progress",
                    {
                        value: e
                    }
                ],
                [
                    "accessibility.signals.chatResponsePending",
                    {
                        value: void 0
                    }
                ]
            ]
    }
]), kn.as(M2.ConfigurationMigration).registerConfigurationMigrations(Uf.allAccessibilitySignals.map((e)=>e.legacySoundSettingsKey ? {
        key: e.legacySoundSettingsKey,
        migrateFn: (t, n)=>{
            const i = [], r = e.legacyAnnouncementSettingsKey;
            let s;
            return r && (s = n(r) ?? void 0, s !== void 0 && typeof s != "string" && (s = s ? "auto" : "off")), i.push([
                `${e.legacySoundSettingsKey}`,
                {
                    value: void 0
                }
            ]), i.push([
                `${e.settingsKey}`,
                {
                    value: s !== void 0 ? {
                        announcement: s,
                        sound: t
                    } : {
                        sound: t
                    }
                }
            ]), i;
        }
    } : void 0).filter(Tl)), kn.as(M2.ConfigurationMigration).registerConfigurationMigrations(Uf.allAccessibilitySignals.filter((e)=>!!e.legacyAnnouncementSettingsKey && !!e.legacySoundSettingsKey).map((e)=>({
        key: e.legacyAnnouncementSettingsKey,
        migrateFn: (t, n)=>{
            const i = [], r = n(e.settingsKey)?.sound || n(e.legacySoundSettingsKey);
            return t !== void 0 && typeof t != "string" && (t = t ? "auto" : "off"), i.push([
                `${e.settingsKey}`,
                {
                    value: t !== void 0 ? {
                        announcement: t,
                        sound: r
                    } : {
                        sound: r
                    }
                }
            ]), i.push([
                `${e.legacyAnnouncementSettingsKey}`,
                {
                    value: void 0
                }
            ]), i.push([
                `${e.legacySoundSettingsKey}`,
                {
                    value: void 0
                }
            ]), i;
        }
    })));

}

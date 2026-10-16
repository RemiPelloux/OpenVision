import { $m, D, Gt, Qe, en, st } from "./Iwo.js";
import { Nb, l2 } from "./accessibilitySignalService.js";
import { Vg, gp } from "./configurationRegistry.js";
import { eU, sF } from "./configuration_2.js";
import { Hi, cn } from "./contextkey.js";
import { _el, msk, psk } from "./gYa.js";
import { Bt } from "./nls.js";
import { Eo, Fi } from "./platform_2.js";
import { VIn, qIn, vel } from "./speechService.js";
import { E } from "./tslib.es6.js";
import { To } from "./types_2.js";
import { F, Re } from "./userDataProfile.js";
var x4e, K4, LCi, bel, yel, jKm, MJ, gsk, fsk, Sel, kel, lle, wel, KM, g$, f$, A4e, $Km, HKm, KIn;
export { $Km, A4e, HKm, K4, KIn, KM, LCi, MJ, Sel, bel, f$, fsk, g$, gsk, jKm, kel, lle, wel, x4e, yel };
var __wakaru_mze_initialized = false;
export function mze() {
if (__wakaru_mze_initialized) return;
__wakaru_mze_initialized = true;
"use strict";
E(), Bt(), Vg(), Eo(), Hi(), sF(), l2(), VIn(), Qe(), Gt(), To(), x4e = new cn("accessibilityHelpIsShown", !1, !0), K4 = new cn("accessibleViewIsShown", !1, !0), LCi = new cn("accessibleViewSupportsNavigation", !1, !0), bel = new cn("accessibleViewVerbosityEnabled", !1, !0), yel = new cn("accessibleViewGoToSymbolSupported", !1, !0), jKm = new cn("accessibleViewOnLastLine", !1, !0), MJ = new cn("accessibleViewCurrentProviderId", void 0, void 0), gsk = new cn("accessibleViewInCodeBlock", void 0, void 0), fsk = new cn("accessibleViewContainsCodeBlocks", void 0, void 0), Sel = new cn("accessibleViewHasUnassignedKeybindings", void 0, void 0), kel = new cn("accessibleViewHasAssignedKeybindings", void 0, void 0), lle = {
    type: "boolean",
    default: !0,
    tags: [
        "accessibility"
    ]
}, wel = Object.freeze({
    id: "accessibility",
    title: D(4526, null),
    type: "object"
}), KM = {
    type: "string",
    enum: [
        "auto",
        "on",
        "off"
    ],
    default: "auto",
    enumDescriptions: [
        D(4527, null),
        D(4528, null),
        D(4529, null)
    ],
    tags: [
        "accessibility"
    ]
}, g$ = {
    type: "object",
    tags: [
        "accessibility"
    ],
    additionalProperties: !1,
    default: {
        sound: "auto",
        announcement: "auto"
    }
}, f$ = {
    type: "string",
    enum: [
        "auto",
        "off"
    ],
    default: "auto",
    enumDescriptions: [
        D(4530, null),
        D(4531, null)
    ],
    tags: [
        "accessibility"
    ]
}, A4e = {
    type: "object",
    tags: [
        "accessibility"
    ],
    additionalProperties: !1,
    default: {
        sound: "auto"
    }
}, $Km = {
    ...wel,
    scope: 5,
    properties: {
        "accessibility.verbosity.terminal": {
            description: D(4532, null),
            ...lle
        },
        "accessibility.verbosity.diffEditor": {
            description: D(4533, null),
            ...lle
        },
        "accessibility.verbosity.inlineCompletions": {
            description: D(4534, null),
            ...lle
        },
        "accessibility.verbosity.keybindingsEditor": {
            description: D(4535, null),
            ...lle
        },
        "accessibility.verbosity.notebook": {
            description: D(4536, null),
            ...lle
        },
        "accessibility.verbosity.hover": {
            description: D(4537, null),
            ...lle
        },
        "accessibility.verbosity.notification": {
            description: D(4538, null),
            ...lle
        },
        "accessibility.verbosity.emptyEditorHint": {
            description: D(4539, null),
            ...lle
        },
        "accessibility.verbosity.replEditor": {
            description: D(4540, null),
            ...lle
        },
        "accessibility.verbosity.comments": {
            description: D(4541, null),
            ...lle
        },
        "accessibility.verbosity.diffEditorActive": {
            description: D(4542, null),
            ...lle
        },
        "accessibility.verbosity.debug": {
            description: D(4543, null),
            ...lle
        },
        "accessibility.verbosity.walkthrough": {
            description: D(4544, null),
            ...lle
        },
        "accessibility.accessibleView.closeOnKeyPress": {
            markdownDescription: D(4545, null),
            type: "boolean",
            default: !0
        },
        "accessibility.verbosity.sourceControl": {
            description: D(4546, null),
            ...lle
        },
        "accessibility.verbosity.find": {
            description: D(4547, null),
            ...lle
        },
        "accessibility.signalOptions.volume": {
            description: D(4548, null),
            type: "number",
            minimum: 0,
            maximum: 100,
            default: 70,
            tags: [
                "accessibility"
            ]
        },
        "accessibility.signalOptions.debouncePositionChanges": {
            description: D(4549, null),
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
                    description: D(4550, null),
                    type: "number",
                    minimum: 0,
                    default: 3e3
                },
                sound: {
                    description: D(4551, null),
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
                    description: D(4552, null),
                    type: "number",
                    minimum: 0,
                    default: 3e3
                },
                sound: {
                    description: D(4553, null),
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
                    description: D(4554, null),
                    type: "number",
                    minimum: 0,
                    default: 3e3
                },
                sound: {
                    description: D(4555, null),
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
            ...g$,
            description: D(4556, null),
            properties: {
                sound: {
                    description: D(4557, null),
                    ...KM
                },
                announcement: {
                    description: D(4558, null),
                    ...f$
                }
            }
        },
        "accessibility.signals.lineHasInlineSuggestion": {
            ...A4e,
            description: D(4559, null),
            properties: {
                sound: {
                    description: D(4560, null),
                    ...KM,
                    default: "off"
                }
            }
        },
        "accessibility.signals.lineHasError": {
            ...g$,
            description: D(4561, null),
            properties: {
                sound: {
                    description: D(4562, null),
                    ...KM
                },
                announcement: {
                    description: D(4563, null),
                    ...f$,
                    default: "off"
                }
            }
        },
        "accessibility.signals.lineHasFoldedArea": {
            ...g$,
            description: D(4564, null),
            properties: {
                sound: {
                    description: D(4565, null),
                    ...KM,
                    default: "off"
                },
                announcement: {
                    description: D(4566, null),
                    ...f$
                }
            }
        },
        "accessibility.signals.lineHasWarning": {
            ...g$,
            description: D(4567, null),
            properties: {
                sound: {
                    description: D(4568, null),
                    ...KM
                },
                announcement: {
                    description: D(4569, null),
                    ...f$,
                    default: "off"
                }
            }
        },
        "accessibility.signals.positionHasError": {
            ...g$,
            description: D(4570, null),
            properties: {
                sound: {
                    description: D(4571, null),
                    ...KM
                },
                announcement: {
                    description: D(4572, null),
                    ...f$,
                    default: "on"
                }
            }
        },
        "accessibility.signals.positionHasWarning": {
            ...g$,
            description: D(4573, null),
            properties: {
                sound: {
                    description: D(4574, null),
                    ...KM
                },
                announcement: {
                    description: D(4575, null),
                    ...f$,
                    default: "on"
                }
            }
        },
        "accessibility.signals.onDebugBreak": {
            ...g$,
            description: D(4576, null),
            properties: {
                sound: {
                    description: D(4577, null),
                    ...KM
                },
                announcement: {
                    description: D(4578, null),
                    ...f$
                }
            }
        },
        "accessibility.signals.noInlayHints": {
            ...g$,
            description: D(4579, null),
            properties: {
                sound: {
                    description: D(4580, null),
                    ...KM
                },
                announcement: {
                    description: D(4581, null),
                    ...f$
                }
            }
        },
        "accessibility.signals.taskCompleted": {
            ...g$,
            description: D(4582, null),
            properties: {
                sound: {
                    description: D(4583, null),
                    ...KM
                },
                announcement: {
                    description: D(4584, null),
                    ...f$
                }
            }
        },
        "accessibility.signals.taskFailed": {
            ...g$,
            description: D(4585, null),
            properties: {
                sound: {
                    description: D(4586, null),
                    ...KM
                },
                announcement: {
                    description: D(4587, null),
                    ...f$
                }
            }
        },
        "accessibility.signals.terminalCommandFailed": {
            ...g$,
            description: D(4588, null),
            properties: {
                sound: {
                    description: D(4589, null),
                    ...KM
                },
                announcement: {
                    description: D(4590, null),
                    ...f$
                }
            }
        },
        "accessibility.signals.terminalCommandSucceeded": {
            ...g$,
            description: D(4591, null),
            properties: {
                sound: {
                    description: D(4592, null),
                    ...KM
                },
                announcement: {
                    description: D(4593, null),
                    ...f$
                }
            }
        },
        "accessibility.signals.terminalQuickFix": {
            ...g$,
            description: D(4594, null),
            properties: {
                sound: {
                    description: D(4595, null),
                    ...KM
                },
                announcement: {
                    description: D(4596, null),
                    ...f$
                }
            }
        },
        "accessibility.signals.terminalBell": {
            ...g$,
            description: D(4597, null),
            properties: {
                sound: {
                    description: D(4598, null),
                    ...KM
                },
                announcement: {
                    description: D(4599, null),
                    ...f$
                }
            }
        },
        "accessibility.signals.diffLineInserted": {
            ...A4e,
            description: D(4600, null),
            properties: {
                sound: {
                    description: D(4601, null),
                    ...KM
                }
            }
        },
        "accessibility.signals.diffLineModified": {
            ...A4e,
            description: D(4602, null),
            properties: {
                sound: {
                    description: D(4603, null),
                    ...KM
                }
            }
        },
        "accessibility.signals.diffLineDeleted": {
            ...A4e,
            description: D(4604, null),
            properties: {
                sound: {
                    description: D(4605, null),
                    ...KM
                }
            }
        },
        "accessibility.signals.chatEditModifiedFile": {
            ...A4e,
            description: D(4606, null),
            properties: {
                sound: {
                    description: D(4607, null),
                    ...KM
                }
            }
        },
        "accessibility.signals.notebookCellCompleted": {
            ...g$,
            description: D(4608, null),
            properties: {
                sound: {
                    description: D(4609, null),
                    ...KM
                },
                announcement: {
                    description: D(4610, null),
                    ...f$
                }
            }
        },
        "accessibility.signals.notebookCellFailed": {
            ...g$,
            description: D(4611, null),
            properties: {
                sound: {
                    description: D(4612, null),
                    ...KM
                },
                announcement: {
                    description: D(4613, null),
                    ...f$
                }
            }
        },
        "accessibility.signals.progress": {
            ...g$,
            description: D(4614, null),
            properties: {
                sound: {
                    description: D(4615, null),
                    ...KM
                },
                announcement: {
                    description: D(4616, null),
                    ...f$
                }
            }
        },
        "accessibility.signals.chatRequestSent": {
            ...g$,
            description: D(4617, null),
            properties: {
                sound: {
                    description: D(4618, null),
                    ...KM
                },
                announcement: {
                    description: D(4619, null),
                    ...f$
                }
            }
        },
        "accessibility.signals.chatResponseReceived": {
            ...A4e,
            description: D(4620, null),
            properties: {
                sound: {
                    description: D(4621, null),
                    ...KM
                }
            }
        },
        "accessibility.signals.codeActionTriggered": {
            ...A4e,
            description: D(4622, null),
            properties: {
                sound: {
                    description: D(4623, null),
                    ...KM
                }
            }
        },
        "accessibility.signals.codeActionApplied": {
            ...A4e,
            description: D(4624, null),
            properties: {
                sound: {
                    description: D(4625, null),
                    ...KM
                }
            }
        },
        "accessibility.signals.voiceRecordingStarted": {
            ...A4e,
            description: D(4626, null),
            properties: {
                sound: {
                    description: D(4627, null),
                    ...KM
                }
            },
            default: {
                sound: "on"
            }
        },
        "accessibility.signals.voiceRecordingStopped": {
            ...A4e,
            description: D(4628, null),
            properties: {
                sound: {
                    description: D(4629, null),
                    ...KM,
                    default: "off"
                }
            }
        },
        "accessibility.signals.clear": {
            ...g$,
            description: D(4630, null),
            properties: {
                sound: {
                    description: D(4631, null),
                    ...KM
                },
                announcement: {
                    description: D(4632, null),
                    ...f$
                }
            }
        },
        "accessibility.signals.editsUndone": {
            ...g$,
            description: D(4633, null),
            properties: {
                sound: {
                    description: D(4634, null),
                    ...KM
                },
                announcement: {
                    description: D(4635, null),
                    ...f$
                }
            }
        },
        "accessibility.signals.editsKept": {
            ...g$,
            description: D(4636, null),
            properties: {
                sound: {
                    description: D(4637, null),
                    ...KM
                },
                announcement: {
                    description: D(4638, null),
                    ...f$
                }
            }
        },
        "accessibility.signals.save": {
            type: "object",
            tags: [
                "accessibility"
            ],
            additionalProperties: !1,
            markdownDescription: D(4639, null),
            properties: {
                sound: {
                    description: D(4640, null),
                    type: "string",
                    enum: [
                        "userGesture",
                        "always",
                        "never"
                    ],
                    default: "never",
                    enumDescriptions: [
                        D(4641, null),
                        D(4642, null),
                        D(4643, null)
                    ]
                },
                announcement: {
                    description: D(4644, null),
                    type: "string",
                    enum: [
                        "userGesture",
                        "always",
                        "never"
                    ],
                    default: "never",
                    enumDescriptions: [
                        D(4645, null),
                        D(4646, null),
                        D(4647, null)
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
            markdownDescription: D(4648, null),
            properties: {
                sound: {
                    description: D(4649, null),
                    type: "string",
                    enum: [
                        "userGesture",
                        "always",
                        "never"
                    ],
                    default: "never",
                    enumDescriptions: [
                        D(4650, null),
                        D(4651, null),
                        D(4652, null)
                    ]
                },
                announcement: {
                    description: D(4653, null),
                    type: "string",
                    enum: [
                        "userGesture",
                        "always",
                        "never"
                    ],
                    default: "never",
                    enumDescriptions: [
                        D(4654, null),
                        D(4655, null),
                        D(4656, null)
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
            description: D(4657, null),
            default: !1
        },
        "accessibility.debugWatchVariableAnnouncements": {
            type: "boolean",
            description: D(4658, null),
            default: !0
        },
        "accessibility.replEditor.readLastExecutionOutput": {
            type: "boolean",
            description: D(4659, null),
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
            description: D(4660, null)
        },
        "accessibility.windowTitleOptimized": {
            type: "boolean",
            default: !0,
            markdownDescription: D(4661, null, "`#window.title#`", "`activeEditorState`")
        }
    }
}, HKm = 1200, KIn = class extends st {
    constructor(t){
        super(), this.speechService = t, this._register(en.runAndSubscribe(t.onDidChangeHasSpeechProvider, ()=>this.updateConfiguration()));
    }
    updateConfiguration() {
        if (!this.speechService.hasSpeechProvider) return;
        const t = this.getLanguages(), e = Object.keys(t).sort((i, r)=>t[i].name.localeCompare(t[r].name));
        Fi.as(gp.Configuration).registerConfiguration({
            ...wel,
            properties: {
                "accessibility.voice.speechTimeout": {
                    markdownDescription: D(4665, null),
                    type: "number",
                    default: HKm,
                    minimum: 0,
                    tags: [
                        "accessibility"
                    ]
                },
                "accessibility.voice.ignoreCodeBlocks": {
                    markdownDescription: D(4666, null),
                    type: "boolean",
                    default: !1,
                    tags: [
                        "accessibility"
                    ]
                },
                "accessibility.voice.speechLanguage": {
                    markdownDescription: D(4667, null),
                    type: "string",
                    enum: e,
                    default: "auto",
                    tags: [
                        "accessibility"
                    ],
                    enumDescriptions: e.map((i)=>t[i].name),
                    enumItemLabels: e.map((i)=>t[i].name)
                },
                "accessibility.voice.autoSynthesize": {
                    type: "string",
                    enum: [
                        "on",
                        "off"
                    ],
                    enumDescriptions: [
                        D(4668, null),
                        D(4669, null)
                    ],
                    markdownDescription: D(4670, null),
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
                name: D(4671, null)
            },
            ...vel
        };
    }
}, KIn.ID = "workbench.contrib.dynamicSpeechAccessibilityConfiguration", KIn = Re([
    F(0, qIn)
], KIn), Fi.as(eU.ConfigurationMigration).registerConfigurationMigrations([
    {
        key: "audioCues.volume",
        migrateFn: (t, e)=>[
                [
                    "accessibility.signalOptions.volume",
                    {
                        value: t
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
]), Fi.as(eU.ConfigurationMigration).registerConfigurationMigrations([
    {
        key: "audioCues.debouncePositionChanges",
        migrateFn: (t)=>[
                [
                    "accessibility.signalOptions.debouncePositionChanges",
                    {
                        value: t
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
]), Fi.as(eU.ConfigurationMigration).registerConfigurationMigrations([
    {
        key: "accessibility.signalOptions",
        migrateFn: (t, e)=>{
            const n = _el(e, "general"), i = _el(e, "errorAtPosition"), r = _el(e, "warningAtPosition"), s = psk(e), o = msk(e), a = [];
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
]), Fi.as(eU.ConfigurationMigration).registerConfigurationMigrations([
    {
        key: "accessibility.signals.sounds.volume",
        migrateFn: (t)=>[
                [
                    "accessibility.signalOptions.volume",
                    {
                        value: t
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
]), Fi.as(eU.ConfigurationMigration).registerConfigurationMigrations([
    {
        key: "accessibility.signals.debouncePositionChanges",
        migrateFn: (t)=>[
                [
                    "accessibility.signalOptions.debouncePositionChanges",
                    {
                        value: t
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
]), Fi.as(eU.ConfigurationMigration).registerConfigurationMigrations([
    {
        key: "accessibility.voice.autoSynthesize",
        migrateFn: (t)=>{
            let e;
            if (t === !0) e = "on";
            else if (t === !1) e = "off";
            else return [];
            return [
                [
                    "accessibility.voice.autoSynthesize",
                    {
                        value: e
                    }
                ]
            ];
        }
    }
]), Fi.as(eU.ConfigurationMigration).registerConfigurationMigrations([
    {
        key: "accessibility.signals.chatResponsePending",
        migrateFn: (t, e)=>[
                [
                    "accessibility.signals.progress",
                    {
                        value: t
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
]), Fi.as(eU.ConfigurationMigration).registerConfigurationMigrations(Nb.allAccessibilitySignals.map((t)=>t.legacySoundSettingsKey ? {
        key: t.legacySoundSettingsKey,
        migrateFn: (e, n)=>{
            const i = [], r = t.legacyAnnouncementSettingsKey;
            let s;
            return r && (s = n(r) ?? void 0, s !== void 0 && typeof s != "string" && (s = s ? "auto" : "off")), i.push([
                `${t.legacySoundSettingsKey}`,
                {
                    value: void 0
                }
            ]), i.push([
                `${t.settingsKey}`,
                {
                    value: s !== void 0 ? {
                        announcement: s,
                        sound: e
                    } : {
                        sound: e
                    }
                }
            ]), i;
        }
    } : void 0).filter($m)), Fi.as(eU.ConfigurationMigration).registerConfigurationMigrations(Nb.allAccessibilitySignals.filter((t)=>!!t.legacyAnnouncementSettingsKey && !!t.legacySoundSettingsKey).map((t)=>({
        key: t.legacyAnnouncementSettingsKey,
        migrateFn: (e, n)=>{
            const i = [], r = n(t.settingsKey)?.sound || n(t.legacySoundSettingsKey);
            return e !== void 0 && typeof e != "string" && (e = e ? "auto" : "off"), i.push([
                `${t.settingsKey}`,
                {
                    value: e !== void 0 ? {
                        announcement: e,
                        sound: r
                    } : {
                        sound: r
                    }
                }
            ]), i.push([
                `${t.legacyAnnouncementSettingsKey}`,
                {
                    value: void 0
                }
            ]), i.push([
                `${t.legacySoundSettingsKey}`,
                {
                    value: void 0
                }
            ]), i;
        }
    })));

}

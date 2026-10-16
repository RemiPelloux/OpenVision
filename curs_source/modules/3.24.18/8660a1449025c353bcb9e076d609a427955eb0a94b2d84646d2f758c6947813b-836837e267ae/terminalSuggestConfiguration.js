import { D } from "./Iwo.js";
import { Bt } from "./nls.js";
import { E } from "./tslib.es6.js";
var yyg, Dat, Syg;
export { Dat, Syg, yyg };
var __wakaru_Gas_initialized = false;
export function Gas() {
if (__wakaru_Gas_initialized) return;
__wakaru_Gas_initialized = true;
"use strict";
E(), Bt(), yyg = [
    "exe",
    "bat",
    "cmd",
    "com",
    "msi",
    "ps1",
    "vbs",
    "js",
    "jar",
    "py",
    "rb",
    "pl",
    "sh"
], Dat = "terminal.integrated.suggest", Syg = {
    "terminal.integrated.suggest.enabled": {
        restricted: !0,
        markdownDescription: D(10883, null, "PowerShell v7+, zsh, bash, fish", "`#terminal.integrated.shellIntegration.enabled#`", "`true`"),
        type: "boolean",
        default: !1,
        tags: [
            "preview"
        ]
    },
    "terminal.integrated.suggest.providers": {
        restricted: !0,
        markdownDescription: D(10884, null),
        type: "object",
        properties: {},
        default: {
            "terminal-suggest": !0,
            "pwsh-shell-integration": !0
        },
        tags: [
            "preview"
        ]
    },
    "terminal.integrated.suggest.quickSuggestions": {
        restricted: !0,
        markdownDescription: D(10885, null, "`#terminal.integrated.suggest.suggestOnTriggerCharacters#`"),
        type: "object",
        properties: {
            commands: {
                description: D(10886, null),
                type: "string",
                enum: [
                    "off",
                    "on"
                ]
            },
            arguments: {
                description: D(10887, null),
                type: "string",
                enum: [
                    "off",
                    "on"
                ]
            },
            unknown: {
                description: D(10888, null),
                type: "string",
                enum: [
                    "off",
                    "on"
                ]
            }
        },
        default: {
            commands: "on",
            arguments: "on",
            unknown: "off"
        },
        tags: [
            "preview"
        ]
    },
    "terminal.integrated.suggest.suggestOnTriggerCharacters": {
        restricted: !0,
        markdownDescription: D(10889, null),
        type: "boolean",
        default: !0,
        tags: [
            "preview"
        ]
    },
    "terminal.integrated.suggest.runOnEnter": {
        restricted: !0,
        markdownDescription: D(10890, null),
        enum: [
            "ignore",
            "never",
            "exactMatch",
            "exactMatchIgnoreExtension",
            "always"
        ],
        markdownEnumDescriptions: [
            D(10891, null),
            D(10892, null),
            D(10893, null),
            D(10894, null),
            D(10895, null)
        ],
        default: "ignore",
        tags: [
            "preview"
        ]
    },
    "terminal.integrated.suggest.windowsExecutableExtensions": {
        restricted: !0,
        markdownDescription: D(10896, null, yyg.sort().map((t)=>`- ${t}`).join(`
`)),
        type: "object",
        default: {},
        tags: [
            "preview"
        ]
    },
    "terminal.integrated.suggest.showStatusBar": {
        restricted: !0,
        markdownDescription: D(10897, null),
        type: "boolean",
        default: !0,
        tags: [
            "preview"
        ]
    },
    "terminal.integrated.suggest.cdPath": {
        restricted: !0,
        markdownDescription: D(10898, null),
        type: "string",
        enum: [
            "off",
            "relative",
            "absolute"
        ],
        markdownEnumDescriptions: [
            D(10899, null),
            D(10900, null),
            D(10901, null)
        ],
        default: "absolute",
        tags: [
            "preview"
        ]
    },
    "terminal.integrated.suggest.inlineSuggestion": {
        restricted: !0,
        markdownDescription: D(10902, null),
        type: "string",
        enum: [
            "off",
            "alwaysOnTopExceptExactMatch",
            "alwaysOnTop"
        ],
        markdownEnumDescriptions: [
            D(10903, null),
            D(10904, null),
            D(10905, null)
        ],
        default: "alwaysOnTop",
        tags: [
            "preview"
        ]
    },
    "terminal.integrated.suggest.upArrowNavigatesHistory": {
        restricted: !0,
        markdownDescription: D(10906, null),
        type: "boolean",
        default: !0,
        tags: [
            "preview"
        ]
    }
};

}

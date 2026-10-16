import { S } from "./HVr.js";
import { rt } from "./nls.js";
import { x } from "./tslib.es6.js";
var RMh, w8e, DMh;
export { DMh, RMh, w8e };
var __wakaru_aer_initialized = false;
export function aer() {
if (__wakaru_aer_initialized) return;
__wakaru_aer_initialized = true;
"use strict";
x(), rt(), RMh = [
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
], w8e = "terminal.integrated.suggest", DMh = {
    "terminal.integrated.suggest.enabled": {
        restricted: !0,
        markdownDescription: S(10883, null, "PowerShell v7+, zsh, bash, fish", "`#terminal.integrated.shellIntegration.enabled#`", "`true`"),
        type: "boolean",
        default: !1,
        tags: [
            "preview"
        ]
    },
    "terminal.integrated.suggest.providers": {
        restricted: !0,
        markdownDescription: S(10884, null),
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
        markdownDescription: S(10885, null, "`#terminal.integrated.suggest.suggestOnTriggerCharacters#`"),
        type: "object",
        properties: {
            commands: {
                description: S(10886, null),
                type: "string",
                enum: [
                    "off",
                    "on"
                ]
            },
            arguments: {
                description: S(10887, null),
                type: "string",
                enum: [
                    "off",
                    "on"
                ]
            },
            unknown: {
                description: S(10888, null),
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
        markdownDescription: S(10889, null),
        type: "boolean",
        default: !0,
        tags: [
            "preview"
        ]
    },
    "terminal.integrated.suggest.runOnEnter": {
        restricted: !0,
        markdownDescription: S(10890, null),
        enum: [
            "ignore",
            "never",
            "exactMatch",
            "exactMatchIgnoreExtension",
            "always"
        ],
        markdownEnumDescriptions: [
            S(10891, null),
            S(10892, null),
            S(10893, null),
            S(10894, null),
            S(10895, null)
        ],
        default: "ignore",
        tags: [
            "preview"
        ]
    },
    "terminal.integrated.suggest.windowsExecutableExtensions": {
        restricted: !0,
        markdownDescription: S(10896, null, RMh.sort().map((e)=>`- ${e}`).join(`
`)),
        type: "object",
        default: {},
        tags: [
            "preview"
        ]
    },
    "terminal.integrated.suggest.showStatusBar": {
        restricted: !0,
        markdownDescription: S(10897, null),
        type: "boolean",
        default: !0,
        tags: [
            "preview"
        ]
    },
    "terminal.integrated.suggest.cdPath": {
        restricted: !0,
        markdownDescription: S(10898, null),
        type: "string",
        enum: [
            "off",
            "relative",
            "absolute"
        ],
        markdownEnumDescriptions: [
            S(10899, null),
            S(10900, null),
            S(10901, null)
        ],
        default: "absolute",
        tags: [
            "preview"
        ]
    },
    "terminal.integrated.suggest.inlineSuggestion": {
        restricted: !0,
        markdownDescription: S(10902, null),
        type: "string",
        enum: [
            "off",
            "alwaysOnTopExceptExactMatch",
            "alwaysOnTop"
        ],
        markdownEnumDescriptions: [
            S(10903, null),
            S(10904, null),
            S(10905, null)
        ],
        default: "alwaysOnTop",
        tags: [
            "preview"
        ]
    },
    "terminal.integrated.suggest.upArrowNavigatesHistory": {
        restricted: !0,
        markdownDescription: S(10906, null),
        type: "boolean",
        default: !0,
        tags: [
            "preview"
        ]
    }
};

}

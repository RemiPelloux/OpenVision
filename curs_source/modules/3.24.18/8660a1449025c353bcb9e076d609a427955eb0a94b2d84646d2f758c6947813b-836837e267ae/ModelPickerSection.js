import { itf } from "./ParameterizedModelPicker.js";
import { aS } from "./Ycg.js";
import { mk } from "./gallerySection.js";
import { Mt } from "./index_197.js";
import { Fxn } from "./modelPickerDisplayConfiguration.js";
import { E } from "./tslib.es6.js";
import { at } from "./web.js";
var idc;
export { idc };
var __wakaru_KlC_initialized = false;
export function KlC() {
if (__wakaru_KlC_initialized) return;
__wakaru_KlC_initialized = true;
"use strict";
E(), at(), Mt(), Fxn(), itf(), aS(), mk(), idc = [
    {
        name: "default",
        defaultOn: !0,
        clientDisplayName: "Auto",
        parameterDefinitions: [
            {
                id: "kind",
                name: "Kind",
                parameterType: {
                    enumParameter: {
                        values: [
                            {
                                value: "default"
                            }
                        ]
                    }
                }
            }
        ],
        variants: [
            {
                parameterValues: [
                    {
                        id: "kind",
                        value: "default"
                    }
                ],
                displayName: "Auto",
                isMaxMode: !1,
                tagline: "Balanced for quality and speed"
            },
            {
                parameterValues: [
                    {
                        id: "kind",
                        value: "high"
                    }
                ],
                displayName: "High",
                isMaxMode: !1,
                tagline: "Best models for complex tasks"
            }
        ]
    },
    {
        name: "claude-4.5-sonnet",
        clientDisplayName: "Claude 4.5 Sonnet",
        inputboxShortModelName: "Sonnet 4.5",
        defaultOn: !0,
        supportsAgent: !0,
        supportsMaxMode: !0,
        supportsNonMaxMode: !0,
        supportsThinking: !0,
        supportsImages: !0,
        parameterDefinitions: [
            {
                id: "thinking",
                name: "Thinking",
                markdownTooltip: "Enable extended thinking for complex reasoning tasks",
                parameterType: {
                    booleanParameter: {}
                }
            },
            {
                id: "context",
                name: "Context",
                markdownTooltip: "Maximum context window size",
                parameterType: {
                    enumParameter: {
                        values: [
                            {
                                value: "200K",
                                displayName: "200K"
                            },
                            {
                                value: "1M",
                                displayName: "1M (Max)"
                            }
                        ]
                    }
                }
            }
        ],
        variants: [
            {
                parameterValues: [
                    {
                        id: "thinking",
                        value: "false"
                    },
                    {
                        id: "context",
                        value: "200K"
                    }
                ],
                displayName: "Sonnet 4.5",
                isMaxMode: !1,
                isDefaultNonMaxConfig: !0,
                tooltipData: {
                    markdownContent: "Claude 4.5 Sonnet with standard context (200K tokens)"
                }
            },
            {
                parameterValues: [
                    {
                        id: "thinking",
                        value: "false"
                    },
                    {
                        id: "context",
                        value: "1M"
                    }
                ],
                displayName: "Sonnet 4.5",
                isMaxMode: !0,
                tooltipData: {
                    markdownContent: "Claude 4.5 Sonnet with extended context (1M tokens)"
                }
            },
            {
                parameterValues: [
                    {
                        id: "thinking",
                        value: "true"
                    },
                    {
                        id: "context",
                        value: "200K"
                    }
                ],
                displayName: "Sonnet 4.5 :icon-brain:",
                isMaxMode: !1,
                tooltipData: {
                    markdownContent: "Claude 4.5 Sonnet with thinking mode enabled"
                }
            },
            {
                parameterValues: [
                    {
                        id: "thinking",
                        value: "true"
                    },
                    {
                        id: "context",
                        value: "1M"
                    }
                ],
                displayName: "Sonnet 4.5 :icon-brain: 1M",
                isMaxMode: !0,
                isDefaultMaxConfig: !0,
                tooltipData: {
                    markdownContent: "Claude 4.5 Sonnet with thinking mode and extended context"
                }
            }
        ]
    },
    {
        name: "gpt-5",
        clientDisplayName: "GPT-5",
        inputboxShortModelName: "GPT-5",
        defaultOn: !0,
        supportsAgent: !0,
        supportsMaxMode: !0,
        supportsNonMaxMode: !0,
        supportsThinking: !1,
        supportsImages: !0,
        parameterDefinitions: [],
        variants: [
            {
                parameterValues: [],
                displayName: "GPT-5",
                isMaxMode: !1,
                isDefaultNonMaxConfig: !0,
                tooltipData: {
                    markdownContent: "OpenAI's most capable model for complex tasks"
                }
            },
            {
                parameterValues: [],
                displayName: "GPT-5",
                isMaxMode: !0,
                isDefaultMaxConfig: !0,
                tooltipData: {
                    markdownContent: "OpenAI's GPT-5 with max mode enabled"
                }
            }
        ]
    },
    {
        name: "gemini-2.5-pro",
        clientDisplayName: "Gemini 2.5 Pro",
        inputboxShortModelName: "Gemini 2.5",
        defaultOn: !0,
        supportsAgent: !0,
        supportsMaxMode: !0,
        supportsNonMaxMode: !0,
        supportsThinking: !0,
        supportsImages: !0,
        parameterDefinitions: [
            {
                id: "thinking",
                name: "Thinking",
                markdownTooltip: "Enable extended thinking for complex reasoning",
                parameterType: {
                    booleanParameter: {}
                }
            }
        ],
        variants: [
            {
                parameterValues: [
                    {
                        id: "thinking",
                        value: "false"
                    }
                ],
                displayName: "Gemini 2.5 Pro",
                isMaxMode: !1,
                isDefaultNonMaxConfig: !0,
                tooltipData: {
                    markdownContent: "Google's advanced reasoning model"
                }
            },
            {
                parameterValues: [
                    {
                        id: "thinking",
                        value: "true"
                    }
                ],
                displayName: "Gemini 2.5 Pro :icon-brain:",
                isMaxMode: !0,
                isDefaultMaxConfig: !0,
                tooltipData: {
                    markdownContent: "Google's Gemini with thinking mode"
                }
            }
        ]
    }
];

}
